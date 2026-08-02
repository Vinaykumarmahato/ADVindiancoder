import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Phone, Linkedin, Save, Loader2, Link as LinkIcon, Facebook, Instagram, Twitter, Github, Code, LayoutTemplate } from 'lucide-react';
import { DashboardData } from '../pages/DashboardPage';
import { useAuth } from '../contexts/AuthContext';

interface EditProfileModalProps {
    isOpen: boolean;
    onClose: () => void;
    data: DashboardData;
    onSuccess: () => void;
}

const EditProfileModal: React.FC<EditProfileModalProps> = ({ isOpen, onClose, data, onSuccess }) => {
    const { refreshUser } = useAuth();
    const [activeTab, setActiveTab] = useState<'basic' | 'social' | 'education'>('basic');
    const [updating, setUpdating] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Basic Info
    const [editUsername, setEditUsername] = useState('');
    const [editMobile, setEditMobile] = useState('');
    const [editLinkedin, setEditLinkedin] = useState('');
    const [editBio, setEditBio] = useState('');

    // Social Links
    const [socialLinks, setSocialLinks] = useState({
        facebook: '',
        instagram: '',
        twitter: '',
        snapchat: '',
        leetcode: '',
        github: '',
        kaggle: '',
        portfolio: ''
    });

    // Education
    const [education, setEducation] = useState({
        tenth: '',
        twelfth: '',
        graduation: '',
        master: '',
        phd: ''
    });

    useEffect(() => {
        if (isOpen && data) {
            setEditUsername(data.username || '');
            setEditMobile(data.mobileNumber || '');
            setEditLinkedin(data.linkedinUrl || '');
            setEditBio(data.bio || '');

            if (data.socialLinksJson) {
                try {
                    const parsed = JSON.parse(data.socialLinksJson);
                    setSocialLinks(prev => ({ ...prev, ...parsed }));
                } catch (e) {}
            }
            if (data.educationJson) {
                try {
                    const parsed = JSON.parse(data.educationJson);
                    setEducation(prev => ({ ...prev, ...parsed }));
                } catch (e) {}
            }
        }
    }, [isOpen, data]);

    const handleUpdateProfile = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setUpdating(true);

        const token = localStorage.getItem('adv_coder_token');
        if (!token) return;

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:8080'}/api/auth/profile`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    username: editUsername,
                    mobileNumber: editMobile,
                    linkedinUrl: editLinkedin,
                    bio: editBio,
                    socialLinksJson: JSON.stringify(socialLinks),
                    educationJson: JSON.stringify(education)
                })
            });

            if (!response.ok) {
                const errData = await response.json().catch(() => ({ message: 'Update failed' }));
                throw new Error(errData.message || 'Update failed');
            }

            await refreshUser();
            onSuccess();
            onClose();

            if (editUsername !== data.username && window.location.pathname.startsWith('/u/')) {
                window.location.href = '/u/' + editUsername;
            }
        } catch (err: any) {
            setError(err.message || 'Failed to update profile details.');
        } finally {
            setUpdating(false);
        }
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[1200] flex items-center justify-center p-4">
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
                    className="relative w-full max-w-2xl bg-white dark:bg-[#0c1222] border border-gray-200 dark:border-white/10 rounded-3xl shadow-2xl z-10 flex flex-col max-h-[90vh] overflow-hidden"
                >
                    <div className="h-1.5 w-full bg-gradient-to-r from-red-600 via-orange-500 to-red-600 absolute top-0 left-0" />
                    
                    <div className="p-6 pb-4 border-b border-gray-100 dark:border-white/5 flex items-center justify-between">
                        <h3 className="text-lg font-black text-gray-900 dark:text-white">Edit Profile</h3>
                        <button onClick={onClose} className="p-1 rounded-full text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors cursor-pointer">
                            <X className="h-5 w-5" />
                        </button>
                    </div>

                    <div className="flex px-6 pt-4 space-x-4 border-b border-gray-100 dark:border-white/5 overflow-x-auto no-scrollbar shrink-0">
                        <button 
                            onClick={() => setActiveTab('basic')}
                            className={`pb-3 text-sm font-bold transition-colors whitespace-nowrap ${activeTab === 'basic' ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-500 hover:text-gray-800 dark:hover:text-gray-300'}`}
                        >
                            Basic Info
                        </button>
                        <button 
                            onClick={() => setActiveTab('social')}
                            className={`pb-3 text-sm font-bold transition-colors whitespace-nowrap ${activeTab === 'social' ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-500 hover:text-gray-800 dark:hover:text-gray-300'}`}
                        >
                            Social Links
                        </button>
                        <button 
                            onClick={() => setActiveTab('education')}
                            className={`pb-3 text-sm font-bold transition-colors whitespace-nowrap ${activeTab === 'education' ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-500 hover:text-gray-800 dark:hover:text-gray-300'}`}
                        >
                            Education
                        </button>
                    </div>

                    <div className="p-6 overflow-y-auto flex-1">
                        {error && (
                            <div className="p-3 mb-4 text-xs font-semibold rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 leading-relaxed">
                                {error}
                            </div>
                        )}

                        <form id="profile-form" onSubmit={handleUpdateProfile} className="space-y-4">
                            {activeTab === 'basic' && (
                                <div className="space-y-4">
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-gray-500 dark:text-gray-400">Username</label>
                                        <div className="relative">
                                            <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-gray-400" />
                                            <input 
                                                type="text" 
                                                value={editUsername}
                                                onChange={(e) => setEditUsername(e.target.value)}
                                                required
                                                className="w-full pl-11 pr-4 py-3 text-sm rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:border-red-500 dark:focus:border-red-500 outline-none text-gray-900 dark:text-white font-semibold"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-gray-500 dark:text-gray-400">Mobile Number</label>
                                        <div className="relative">
                                            <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-gray-400" />
                                            <input 
                                                type="tel" 
                                                value={editMobile}
                                                onChange={(e) => setEditMobile(e.target.value)}
                                                className="w-full pl-11 pr-4 py-3 text-sm rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:border-red-500 outline-none text-gray-900 dark:text-white font-semibold"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-1.5">
                                        <div className="flex items-center justify-between">
                                            <label className="text-xs font-bold text-gray-500 dark:text-gray-400">Profile Bio</label>
                                            <span className={`text-[10px] font-bold ${editBio.length > 200 ? 'text-red-500' : 'text-gray-400'}`}>
                                                {editBio.length}/200
                                            </span>
                                        </div>
                                        <textarea 
                                            value={editBio}
                                            onChange={(e) => setEditBio(e.target.value.substring(0, 200))}
                                            placeholder="Write a short bio about yourself..."
                                            rows={3}
                                            className="w-full px-4 py-3 text-sm rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:border-red-500 outline-none text-gray-900 dark:text-white font-semibold resize-none"
                                        />
                                    </div>
                                </div>
                            )}

                            {activeTab === 'social' && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[
                                        { key: 'linkedin', label: 'LinkedIn', icon: Linkedin },
                                        { key: 'github', label: 'GitHub', icon: Github },
                                        { key: 'leetcode', label: 'LeetCode', icon: Code },
                                        { key: 'portfolio', label: 'Portfolio', icon: LayoutTemplate },
                                        { key: 'facebook', label: 'Facebook', icon: Facebook },
                                        { key: 'instagram', label: 'Instagram', icon: Instagram },
                                        { key: 'twitter', label: 'Twitter', icon: Twitter },
                                        { key: 'kaggle', label: 'Kaggle', icon: LinkIcon },
                                        { key: 'snapchat', label: 'Snapchat', icon: LinkIcon }
                                    ].map(({ key, label, icon: Icon }) => (
                                        <div key={key} className="space-y-1.5">
                                            <label className="text-xs font-bold text-gray-500 dark:text-gray-400">{label}</label>
                                            <div className="relative">
                                                <Icon className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-gray-400" />
                                                <input 
                                                    type="url" 
                                                    value={key === 'linkedin' ? editLinkedin : socialLinks[key as keyof typeof socialLinks]}
                                                    onChange={(e) => {
                                                        if (key === 'linkedin') setEditLinkedin(e.target.value);
                                                        else setSocialLinks(prev => ({ ...prev, [key]: e.target.value }));
                                                    }}
                                                    placeholder={`https://${key}.com/...`}
                                                    className="w-full pl-11 pr-4 py-2.5 text-sm rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:border-red-500 outline-none text-gray-900 dark:text-white font-semibold"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {activeTab === 'education' && (
                                <div className="space-y-4">
                                    {[
                                        { key: 'tenth', label: '10th Standard' },
                                        { key: 'twelfth', label: '12th Standard' },
                                        { key: 'graduation', label: 'Graduation' },
                                        { key: 'master', label: "Master's Degree" },
                                        { key: 'phd', label: 'PhD' }
                                    ].map(({ key, label }) => (
                                        <div key={key} className="space-y-1.5">
                                            <label className="text-xs font-bold text-gray-500 dark:text-gray-400">{label}</label>
                                            <input 
                                                type="text" 
                                                value={education[key as keyof typeof education]}
                                                onChange={(e) => setEducation(prev => ({ ...prev, [key]: e.target.value }))}
                                                placeholder={`School/University Name, Year`}
                                                className="w-full px-4 py-2.5 text-sm rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:border-red-500 outline-none text-gray-900 dark:text-white font-semibold"
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </form>
                    </div>

                    <div className="p-6 border-t border-gray-100 dark:border-white/5 shrink-0 bg-gray-50 dark:bg-white/[0.02]">
                        <button
                            form="profile-form"
                            type="submit"
                            disabled={updating}
                            className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold text-sm shadow-md hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
                        >
                            {updating ? (
                                <>
                                    <Loader2 className="h-4.5 w-4.5 animate-spin" />
                                    <span>Saving Changes...</span>
                                </>
                            ) : (
                                <>
                                    <Save className="h-4.5 w-4.5" />
                                    <span>Save Profile</span>
                                </>
                            )}
                        </button>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default EditProfileModal;
