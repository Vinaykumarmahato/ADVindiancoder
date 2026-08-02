import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Share2, Copy, Facebook, Twitter, Linkedin, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ShareProfileModalProps {
    isOpen: boolean;
    onClose: () => void;
    username: string;
}

const ShareProfileModal: React.FC<ShareProfileModalProps> = ({ isOpen, onClose, username }) => {
    const profileUrl = `${window.location.origin}/u/${username}`;
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(profileUrl);
        setIsCopied(true);
        
        // Running of the flowers (confetti)
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            zIndex: 2500,
            colors: ['#ff0000', '#ffa500', '#ffff00', '#008000', '#0000ff', '#4b0082', '#ee82ee']
        });

        setTimeout(() => setIsCopied(false), 3000);
    };

    const handleSocialShare = (platform: string) => {
        const text = `Check out my coding profile and statistics on ADV Indian Coder!`;
        let url = '';
        if (platform === 'whatsapp') url = `https://api.whatsapp.com/send?text=${encodeURIComponent(text + ' ' + profileUrl)}`;
        if (platform === 'facebook') url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(profileUrl)}`;
        if (platform === 'twitter') url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(profileUrl)}`;
        if (platform === 'linkedin') url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(profileUrl)}`;
        window.open(url, '_blank');
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4">
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/60 backdrop-blur-md"
                />
                
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="relative w-full max-w-sm bg-white dark:bg-[#0c1222] border border-gray-200 dark:border-white/10 rounded-3xl shadow-2xl z-10 overflow-hidden"
                >
                    <div className="h-1.5 w-full bg-gradient-to-r from-red-600 via-orange-500 to-red-600 absolute top-0 left-0" />
                    
                    <div className="p-6 text-center">
                        <div className="mx-auto w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center mb-4 text-red-500">
                            <Share2 className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-black text-gray-900 dark:text-white mb-2">Share Your Profile</h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-6 font-semibold leading-relaxed">
                            Let the world see your coding consistency and achievements! Sharing improves your profile SEO.
                        </p>

                        <div className="flex bg-gray-50 dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10 p-1 mb-6 items-center">
                            <input 
                                type="text"
                                readOnly
                                value={profileUrl}
                                className="flex-1 bg-transparent border-none text-xs text-gray-600 dark:text-gray-300 px-3 outline-none overflow-hidden text-ellipsis whitespace-nowrap"
                            />
                            <button 
                                onClick={handleCopy}
                                className={`p-2 rounded-lg transition-colors shadow-sm flex items-center justify-center ${isCopied ? 'bg-green-500/10 text-green-500' : 'bg-white dark:bg-white/10 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/20'}`}
                            >
                                {isCopied ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                            </button>
                        </div>

                        <AnimatePresence>
                            {isCopied && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10, height: 0 }}
                                    animate={{ opacity: 1, y: 0, height: 'auto' }}
                                    exit={{ opacity: 0, y: -10, height: 0 }}
                                    className="mb-6 overflow-hidden"
                                >
                                    <div className="bg-green-50 dark:bg-green-500/10 text-green-600 dark:text-green-400 text-xs font-bold py-2 px-4 rounded-xl border border-green-200 dark:border-green-500/20 flex items-center justify-center gap-2">
                                        <CheckCircle2 className="w-4 h-4" />
                                        Congratulations! Link copied successfully.
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div className="grid grid-cols-4 gap-3">
                            <button onClick={() => handleSocialShare('whatsapp')} className="flex flex-col items-center gap-2 group">
                                <div className="w-12 h-12 rounded-2xl bg-green-500/10 text-green-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                                </div>
                                <span className="text-[10px] font-bold text-gray-500">WhatsApp</span>
                            </button>
                            <button onClick={() => handleSocialShare('facebook')} className="flex flex-col items-center gap-2 group">
                                <div className="w-12 h-12 rounded-2xl bg-blue-600/10 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Facebook className="w-5 h-5" />
                                </div>
                                <span className="text-[10px] font-bold text-gray-500">Facebook</span>
                            </button>
                            <button onClick={() => handleSocialShare('twitter')} className="flex flex-col items-center gap-2 group">
                                <div className="w-12 h-12 rounded-2xl bg-black/10 dark:bg-white/10 text-black dark:text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Twitter className="w-5 h-5" />
                                </div>
                                <span className="text-[10px] font-bold text-gray-500">Twitter</span>
                            </button>
                            <button onClick={() => handleSocialShare('linkedin')} className="flex flex-col items-center gap-2 group">
                                <div className="w-12 h-12 rounded-2xl bg-blue-700/10 text-blue-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Linkedin className="w-5 h-5" />
                                </div>
                                <span className="text-[10px] font-bold text-gray-500">LinkedIn</span>
                            </button>
                        </div>

                        <button
                            onClick={onClose}
                            className="mt-6 w-full py-3 rounded-xl bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 font-bold text-xs hover:bg-gray-200 dark:hover:bg-white/10 transition-colors"
                        >
                            Close
                        </button>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default ShareProfileModal;
