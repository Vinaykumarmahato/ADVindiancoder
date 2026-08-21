import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    X, Sparkles, Share2, Download, CheckCircle2, Award, 
    Linkedin, Twitter, MessageCircle, Copy, Check, Flame, ArrowRight,
    FileText, ExternalLink
} from 'lucide-react';
import { Badge, UserEarnedBadge } from '../../utils/badges';
import { useAuth } from '../../contexts/AuthContext';

interface BadgeCelebrationModalProps {
    isOpen: boolean;
    onClose: () => void;
    badge: Badge | UserEarnedBadge | null;
    streak?: number;
    customTitle?: string;
    customMessage?: string;
    onRequireLogin?: () => void;
}

const BadgeCelebrationModal: React.FC<BadgeCelebrationModalProps> = ({
    isOpen,
    onClose,
    badge,
    streak = 1,
    customTitle,
    customMessage,
    onRequireLogin
}) => {
    const { user } = useAuth();
    const [copiedLink, setCopiedLink] = useState(false);
    const [copiedPost, setCopiedPost] = useState(false);
    const [downloadingPng, setDownloadingPng] = useState(false);

    // Trigger Canvas Confetti on mount
    useEffect(() => {
        if (isOpen && typeof window !== 'undefined') {
            try {
                const colors = ['#ef4444', '#f59e0b', '#10b981', '#38bdf8', '#a855f7'];
                for (let i = 0; i < 35; i++) {
                    const confetti = document.createElement('div');
                    confetti.className = 'fixed z-[1300] pointer-events-none rounded-sm animate-ping';
                    confetti.style.left = `${Math.random() * 100}vw`;
                    confetti.style.top = `${Math.random() * 40}vh`;
                    confetti.style.width = `${Math.random() * 8 + 4}px`;
                    confetti.style.height = `${Math.random() * 8 + 4}px`;
                    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                    confetti.style.opacity = '0.8';
                    confetti.style.animationDuration = `${Math.random() * 1.5 + 0.8}s`;
                    document.body.appendChild(confetti);
                    setTimeout(() => confetti.remove(), 2500);
                }
            } catch (e) {}
        }
    }, [isOpen]);

    if (!isOpen || !badge) return null;

    const username = user?.name || user?.email?.split('@')[0] || 'Learner';
    const profileUrl = user?.name 
        ? `https://www.advindiancoder.com/u/${encodeURIComponent(user.name)}?badge=${encodeURIComponent(badge.id)}`
        : `https://www.advindiancoder.com/u/Learner?badge=${encodeURIComponent(badge.id)}`;

    const linkedInPostText = `🚀 Excited to share a new milestone in my coding journey!\n\nI just unlocked the official 🏆 "${badge.name}" Achievement Badge on ADV Indian Coder (advindiancoder.com)!\n\n🔥 Active Coding Streak: ${streak} Days\n💡 Problem Solving & Hands-on Development\n\nCheck out my verified developer profile & coding achievements:\n👉 ${profileUrl}\n\n#ADVCoder #100DaysOfCode #CodingStreak #WebDevelopment #Programming #Java #Python #React #DSA #StudentDeveloper #LearningJourney`;

    const twitterPostText = `🔥 Just unlocked the "${badge.name}" milestone badge on @advindiancoder with a ${streak}-day coding streak! 🚀\n\nCheck out my verified badge & profile:`;

    const whatsappPostText = `🎉 *Proud Achievement on ADV Indian Coder!* 🏆\nI just unlocked the official *${badge.name}* Milestone Badge with a *${streak}-Day Coding Streak*! 💻🔥\n\nView my verified developer profile & badge:\n👉 ${profileUrl}`;

    const handleShareLinkedIn = () => {
        if (!user && onRequireLogin) {
            onRequireLogin();
            return;
        }
        navigator.clipboard.writeText(linkedInPostText);
        setCopiedPost(true);
        setTimeout(() => setCopiedPost(false), 3500);

        const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(profileUrl)}`;
        window.open(url, '_blank', 'width=650,height=650');
    };

    const handleShareTwitter = () => {
        if (!user && onRequireLogin) {
            onRequireLogin();
            return;
        }
        const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(twitterPostText)}&url=${encodeURIComponent(profileUrl)}&hashtags=ADVCoder,100DaysOfCode,CodingStreak,Developer`;
        window.open(url, '_blank', 'width=600,height=500');
    };

    const handleShareWhatsApp = () => {
        if (!user && onRequireLogin) {
            onRequireLogin();
            return;
        }
        const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(whatsappPostText)}`;
        window.open(url, '_blank');
    };

    const handleCopyLink = () => {
        if (!user && onRequireLogin) {
            onRequireLogin();
            return;
        }
        navigator.clipboard.writeText(profileUrl);
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 2500);
    };

    const handleCopyFullPost = () => {
        navigator.clipboard.writeText(linkedInPostText);
        setCopiedPost(true);
        setTimeout(() => setCopiedPost(false), 3000);
    };

    // Client-side Canvas rendering to generate & download badge PNG
    const handleDownloadBadgePng = () => {
        setDownloadingPng(true);
        try {
            const canvas = document.createElement('canvas');
            canvas.width = 1200;
            canvas.height = 630;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;

            // 1. Dark Modern Background
            const bgGrad = ctx.createLinearGradient(0, 0, 1200, 630);
            bgGrad.addColorStop(0, '#070b13');
            bgGrad.addColorStop(0.5, '#0f172a');
            bgGrad.addColorStop(1, '#070b13');
            ctx.fillStyle = bgGrad;
            ctx.fillRect(0, 0, 1200, 630);

            // 2. Glow Accents
            const glowGrad = ctx.createRadialGradient(600, 240, 20, 600, 240, 320);
            glowGrad.addColorStop(0, badge.accentColor ? `${badge.accentColor}44` : 'rgba(239, 68, 68, 0.3)');
            glowGrad.addColorStop(1, 'rgba(0,0,0,0)');
            ctx.fillStyle = glowGrad;
            ctx.fillRect(0, 0, 1200, 630);

            // 3. Neon Outer Border
            ctx.strokeStyle = badge.accentColor || '#ef4444';
            ctx.lineWidth = 4;
            ctx.strokeRect(30, 30, 1140, 570);

            // 4. Header Seal
            ctx.fillStyle = '#ef4444';
            ctx.font = 'bold 22px system-ui, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('ADV INDIAN CODER • OFFICIAL VERIFIED ACHIEVEMENT', 600, 80);

            // 5. Badge Emblem Sphere
            ctx.beginPath();
            ctx.arc(600, 230, 85, 0, Math.PI * 2);
            ctx.fillStyle = '#1e293b';
            ctx.fill();
            ctx.strokeStyle = badge.accentColor || '#f59e0b';
            ctx.lineWidth = 6;
            ctx.stroke();

            // Emoji / Icon
            ctx.font = '72px system-ui, sans-serif';
            ctx.fillText(badge.icon || '🏆', 600, 255);

            // 6. Badge Name
            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 36px system-ui, sans-serif';
            ctx.fillText(badge.name, 600, 370);

            // 7. Awarded To
            ctx.fillStyle = '#94a3b8';
            ctx.font = 'bold 20px system-ui, sans-serif';
            ctx.fillText(`AWARDED TO: ${username.toUpperCase()}`, 600, 420);

            // 8. Streak & Details
            ctx.fillStyle = '#fbbf24';
            ctx.font = 'bold 22px system-ui, sans-serif';
            ctx.fillText(`🔥 ${streak} Day Daily Coding Streak • Verified Milestone`, 600, 460);

            // 9. Footer stamp
            ctx.fillStyle = '#64748b';
            ctx.font = '16px system-ui, sans-serif';
            ctx.fillText(`advindiancoder.com/u/${username} • Issued on ${new Date().toLocaleDateString('en-IN')}`, 600, 540);

            const dataUrl = canvas.toDataURL('image/png');
            const downloadLink = document.createElement('a');
            downloadLink.download = `${username.toLowerCase()}_${badge.id}_badge.png`;
            downloadLink.href = dataUrl;
            downloadLink.click();
        } catch (e) {
            console.error('Failed to export badge image:', e);
        } finally {
            setDownloadingPng(false);
        }
    };

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[1250] flex items-center justify-center p-4">
                {/* Backdrop */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/80 backdrop-blur-md"
                />

                {/* Modal Window Card */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.85, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.85, y: 30 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                    className="relative w-full max-w-lg bg-gradient-to-b from-slate-900 via-[#0a0f1d] to-[#070b13] border border-white/15 rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.8)] z-10 flex flex-col max-h-[92vh] overflow-hidden"
                >
                    {/* Top Accent Strip */}
                    <div 
                        className="h-2 w-full absolute top-0 left-0"
                        style={{
                            background: `linear-gradient(90deg, ${badge.accentColor}, #ef4444, ${badge.accentColor})`
                        }}
                    />

                    {/* Close Button */}
                    <button 
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors z-20 cursor-pointer"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    <div className="p-6 sm:p-8 overflow-y-auto flex-1 text-center space-y-6">
                        
                        {/* Header Milestone */}
                        <div className="space-y-1 pt-2">
                            <span 
                                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider border shadow-sm"
                                style={{
                                    color: badge.accentColor,
                                    borderColor: `${badge.accentColor}50`,
                                    background: `${badge.accentColor}15`
                                }}
                            >
                                <Sparkles className="w-3.5 h-3.5" />
                                {customTitle || 'Achievement Milestone Unlocked!'}
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight pt-2">
                                {badge.name}
                            </h2>
                            <p className="text-xs text-gray-400 font-semibold max-w-sm mx-auto leading-relaxed">
                                {customMessage || badge.description}
                            </p>
                        </div>

                        {/* 3D Visual Certificate & Badge Card */}
                        <div 
                            className="relative rounded-3xl p-6 sm:p-8 border border-white/15 bg-gradient-to-br from-slate-900/90 via-slate-950/90 to-black overflow-hidden shadow-2xl space-y-5"
                        >
                            {/* Radial Glow */}
                            <div 
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full blur-3xl opacity-30 pointer-events-none"
                                style={{ background: badge.accentColor }}
                            />

                            {/* Badge 3D Orb */}
                            <div className="relative mx-auto flex items-center justify-center">
                                <motion.div 
                                    animate={{ 
                                        y: [0, -6, 0],
                                        rotate: [0, 1.5, -1.5, 0]
                                    }}
                                    transition={{ 
                                        duration: 4, 
                                        repeat: Infinity, 
                                        ease: "easeInOut" 
                                    }}
                                    className="w-28 h-28 sm:w-32 sm:h-32 rounded-full flex items-center justify-center relative p-1.5 shadow-2xl"
                                    style={{
                                        background: `linear-gradient(135deg, ${badge.accentColor}, #0f172a)`,
                                        boxShadow: `0 15px 35px -5px ${badge.borderGlow}`
                                    }}
                                >
                                    <div className="w-full h-full rounded-full bg-slate-950 flex flex-col items-center justify-center border-2 border-white/30 relative overflow-hidden">
                                        <div className="absolute -top-10 -left-10 w-20 h-20 bg-white/25 rounded-full blur-sm" />
                                        <span className="text-4xl sm:text-5xl filter drop-shadow-lg select-none">
                                            {badge.icon}
                                        </span>
                                        {badge.requiredDays && (
                                            <span className="text-[10px] font-black tracking-widest text-white/90 uppercase mt-1">
                                                {badge.requiredDays} DAYS
                                            </span>
                                        )}
                                    </div>
                                </motion.div>
                            </div>

                            {/* Awardee Details */}
                            <div className="space-y-1 z-10 relative pt-1">
                                <div className="text-xs uppercase font-bold text-gray-400 tracking-widest">
                                    Official Recognition Awarded To
                                </div>
                                <div className="text-lg font-black text-white">
                                    {username}
                                </div>
                                <div className="flex items-center justify-center gap-2 text-xs font-bold text-orange-400">
                                    <Flame className="w-4 h-4 fill-current" />
                                    <span>{streak} Day Coding Streak Verified</span>
                                </div>
                            </div>

                            {/* ADV Indian Coder Seal */}
                            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-bold text-gray-400">
                                <span className="flex items-center gap-1">
                                    <Award className="w-3.5 h-3.5 text-red-500" />
                                    ADV Indian Coder Official
                                </span>
                                <span>{new Date().toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                            </div>
                        </div>

                        {/* Download Badge PNG Button */}
                        <button
                            type="button"
                            onClick={handleDownloadBadgePng}
                            disabled={downloadingPng}
                            className="w-full py-2.5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/15 text-white font-black text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm active:scale-95"
                        >
                            <Download className="w-4 h-4 text-amber-400" />
                            <span>{downloadingPng ? 'Generating PNG...' : 'Download Badge Graphic (PNG)'}</span>
                        </button>

                        {/* Social Sharing Actions */}
                        <div className="space-y-3 pt-1">
                            <div className="text-xs font-black uppercase text-gray-400 tracking-wider">
                                1-Click Social Sharing
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                                {/* LinkedIn */}
                                <button
                                    type="button"
                                    onClick={handleShareLinkedIn}
                                    className="py-3 px-2 rounded-2xl bg-[#0077b5]/15 hover:bg-[#0077b5] border border-[#0077b5]/30 text-[#0077b5] hover:text-white font-bold text-xs transition-all flex flex-col items-center justify-center gap-1 shadow-sm active:scale-95 cursor-pointer"
                                >
                                    <Linkedin className="w-4 h-4" />
                                    <span>LinkedIn</span>
                                </button>

                                {/* WhatsApp */}
                                <button
                                    type="button"
                                    onClick={handleShareWhatsApp}
                                    className="py-3 px-2 rounded-2xl bg-[#25D366]/15 hover:bg-[#25D366] border border-[#25D366]/30 text-[#25D366] hover:text-white font-bold text-xs transition-all flex flex-col items-center justify-center gap-1 shadow-sm active:scale-95 cursor-pointer"
                                >
                                    <MessageCircle className="w-4 h-4" />
                                    <span>WhatsApp</span>
                                </button>

                                {/* Twitter / X */}
                                <button
                                    type="button"
                                    onClick={handleShareTwitter}
                                    className="py-3 px-2 rounded-2xl bg-white/10 hover:bg-white border border-white/20 text-gray-200 hover:text-black font-bold text-xs transition-all flex flex-col items-center justify-center gap-1 shadow-sm active:scale-95 cursor-pointer"
                                >
                                    <Twitter className="w-4 h-4" />
                                    <span>Twitter / X</span>
                                </button>

                                {/* Copy Badge URL */}
                                <button
                                    type="button"
                                    onClick={handleCopyLink}
                                    className="py-3 px-2 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 font-bold text-xs transition-all flex flex-col items-center justify-center gap-1 shadow-sm active:scale-95 cursor-pointer"
                                >
                                    {copiedLink ? (
                                        <>
                                            <Check className="w-4 h-4 text-emerald-400" />
                                            <span className="text-emerald-400">Copied!</span>
                                        </>
                                    ) : (
                                        <>
                                            <Copy className="w-4 h-4" />
                                            <span>Copy Link</span>
                                        </>
                                    )}
                                </button>
                            </div>

                            {/* Prewritten Post Helper */}
                            <button
                                type="button"
                                onClick={handleCopyFullPost}
                                className="w-full py-2 px-3 rounded-xl bg-slate-900/80 border border-white/10 text-gray-400 hover:text-white text-[11px] font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                            >
                                {copiedPost ? (
                                    <>
                                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                                        <span className="text-emerald-400">Complete Post Text Copied to Clipboard!</span>
                                    </>
                                ) : (
                                    <>
                                        <FileText className="w-3.5 h-3.5 text-blue-400" />
                                        <span>Copy Complete LinkedIn / Social Post Text</span>
                                    </>
                                )}
                            </button>
                        </div>

                    </div>

                    {/* Footer */}
                    <div className="p-4 bg-black/40 border-t border-white/5 flex items-center justify-between">
                        <button
                            onClick={onClose}
                            className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white text-xs font-bold transition-all cursor-pointer"
                        >
                            Close
                        </button>

                        <button
                            onClick={onClose}
                            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-orange-500 text-white text-xs font-black shadow-md hover:brightness-110 active:scale-95 transition-all cursor-pointer"
                        >
                            <span>Keep Coding</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                    </div>

                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default BadgeCelebrationModal;