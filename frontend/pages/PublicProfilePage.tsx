import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
    User, Mail, Linkedin, Code, Clock, Award, 
    Flame, CheckCircle, HelpCircle, Loader2, Share2, Facebook, Twitter, Github, LayoutTemplate,
    Instagram, Link2, Edit3, Sparkles, Trophy
} from 'lucide-react';
import ContributionGraph from '../components/ContributionGraph';
import { useAuth } from '../contexts/AuthContext';
import ShareProfileModal from '../components/ShareProfileModal';
import EditProfileModal from '../components/EditProfileModal';
import SEO from '../components/SEO';
import { evaluateUserBadges, UserEarnedBadge } from '../utils/badges';
import BadgeCard from '../components/badges/BadgeCard';
import BadgeCelebrationModal from '../components/badges/BadgeCelebrationModal';

const PublicProfilePage: React.FC = () => {
    const { username } = useParams<{ username: string }>();
    const { user } = useAuth();
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [isSharing, setIsSharing] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [selectedBadge, setSelectedBadge] = useState<UserEarnedBadge | null>(null);
    const [isBadgeModalOpen, setIsBadgeModalOpen] = useState(false);

    const fetchProfile = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:8080'}/api/public/profile/${username}`);
            if (!response.ok) {
                throw new Error('Profile not found');
            }
            const resData = await response.json();
            setData(resData);
        } catch (err: any) {
            setError(err.message || 'Error occurred while loading data.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProfile();
    }, [username]);

    if (loading) {
        return (
            <div className="min-h-screen bg-slate-50 dark:bg-[#070b13] pt-36 sm:pt-40 md:pt-44 lg:pt-48 pb-12 px-4 sm:px-6 lg:px-8 animate-pulse">
                <div className="max-w-6xl mx-auto space-y-8">
                    {/* Hero Banner Skeleton */}
                    <div className="h-48 sm:h-56 rounded-3xl bg-slate-200 dark:bg-white/5 border border-gray-200 dark:border-white/5 p-6 flex flex-col sm:flex-row items-center gap-6 justify-between">
                        <div className="flex items-center gap-6 w-full">
                            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-slate-300 dark:bg-white/10 shrink-0" />
                            <div className="space-y-3 w-full max-w-md">
                                <div className="h-7 bg-slate-300 dark:bg-white/10 rounded-lg w-1/2" />
                                <div className="h-4 bg-slate-300 dark:bg-white/10 rounded-md w-3/4" />
                                <div className="h-4 bg-slate-300 dark:bg-white/10 rounded-md w-1/3" />
                            </div>
                        </div>
                    </div>

                    {/* Stats Grid Skeleton */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="h-24 bg-slate-200 dark:bg-white/5 rounded-3xl p-5 flex items-center gap-4">
                                <div className="w-10 h-10 rounded-2xl bg-slate-300 dark:bg-white/10 shrink-0" />
                                <div className="space-y-2 w-full">
                                    <div className="h-3 bg-slate-300 dark:bg-white/10 rounded w-2/3" />
                                    <div className="h-5 bg-slate-300 dark:bg-white/10 rounded w-1/2" />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Content Section Skeleton */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2 space-y-6">
                            <div className="h-64 bg-slate-200 dark:bg-white/5 rounded-3xl p-6" />
                        </div>
                        <div className="space-y-6">
                            <div className="h-40 bg-slate-200 dark:bg-white/5 rounded-3xl p-6" />
                            <div className="h-64 bg-slate-200 dark:bg-white/5 rounded-3xl p-6" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (error || !data) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
                <div className="p-4 bg-red-500/10 rounded-full mb-4">
                    <User className="h-10 w-10 text-red-500" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Profile Not Found</h2>
                <p className="text-gray-500 mb-6">The user '{username}' doesn't exist or is set to private.</p>
                <Link to="/" className="px-6 py-2 bg-red-600 text-white font-bold rounded-xl shadow-md hover:bg-red-700">
                    Go Home
                </Link>
            </div>
        );
    }

    const weeklyStats = data.weeklyActivity || [];
    let socialLinks: any = {};
    let education: any = {};
    try { socialLinks = JSON.parse(data.socialLinksJson || '{}'); } catch (e) {}
    try { education = JSON.parse(data.educationJson || '{}'); } catch (e) {}

    const hasEducation = Object.values(education).some((v: any) => v && v.trim() !== '');

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-[#070b13] pt-36 sm:pt-40 md:pt-44 lg:pt-48 pb-12 px-4 sm:px-6 lg:px-8">
            <SEO 
                title={`${data.username} (@${data.username}) — Developer Profile`}
                description={data.bio || `View ${data.username}'s coding progress, activity streak, skills, and developer profile on ADV Indian Coder.`}
                ogImage={data.avatar || '/assets/og-image.png'}
                ogType="profile"
                canonical={`/u/${data.username}`}
            />
            <div className="max-w-6xl mx-auto space-y-8">
                
                {/* Hero Profile Banner */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-red-950 to-slate-900 border border-white/10 p-6 sm:p-8 md:p-10 shadow-xl"
                >
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-red-600/10 rounded-full blur-3xl" />
                    <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 w-full">
                            <img 
                                src={data.avatar} 
                                alt={`${data.username} Avatar`}
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(data.username)}&background=ef4444&color=fff`;
                                }}
                                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-red-500/20 bg-slate-800 object-cover shrink-0"
                            />
                            <div className="flex flex-col items-center sm:items-start min-w-0 w-full">
                                <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full justify-center sm:justify-start">
                                    <h1 className="text-2xl sm:text-3xl font-black text-white break-all text-center sm:text-left">{data.username}</h1>
                                    {data.streak > 0 && (
                                        <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-orange-500/15 border border-orange-500/30 text-[10px] font-bold text-orange-400 animate-pulse shrink-0">
                                            <Flame className="w-3.5 h-3.5 fill-current text-orange-500" />
                                            {data.streak} Day Streak
                                        </span>
                                    )}
                                </div>
                                {data.bio && (
                                    <p className="mt-3 text-sm text-gray-300 max-w-lg text-center sm:text-left leading-relaxed">
                                        {data.bio}
                                    </p>
                                )}
                                <div className="flex items-center flex-wrap justify-center sm:justify-start gap-2 mt-4 text-xs text-gray-300 w-full">
                                    {data.linkedinUrl && (
                                        <a href={data.linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors bg-white/5 px-2 py-1 rounded-md border border-white/5">
                                            <Linkedin className="h-3.5 w-3.5 text-blue-400" /> LinkedIn
                                        </a>
                                    )}
                                    {socialLinks.github && (
                                        <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors bg-white/5 px-2 py-1 rounded-md border border-white/5">
                                            <Github className="h-3.5 w-3.5 text-gray-400" /> GitHub
                                        </a>
                                    )}
                                    {socialLinks.leetcode && (
                                        <a href={socialLinks.leetcode} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors bg-white/5 px-2 py-1 rounded-md border border-white/5">
                                            <Code className="h-3.5 w-3.5 text-orange-400" /> LeetCode
                                        </a>
                                    )}
                                    {socialLinks.portfolio && (
                                        <a href={socialLinks.portfolio} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors bg-white/5 px-2 py-1 rounded-md border border-white/5">
                                            <LayoutTemplate className="h-3.5 w-3.5 text-purple-400" /> Portfolio
                                        </a>
                                    )}
                                    {socialLinks.facebook && (
                                        <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors bg-white/5 px-2 py-1 rounded-md border border-white/5">
                                            <Facebook className="h-3.5 w-3.5 text-blue-500" /> Facebook
                                        </a>
                                    )}
                                    {socialLinks.instagram && (
                                        <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors bg-white/5 px-2 py-1 rounded-md border border-white/5">
                                            <Instagram className="h-3.5 w-3.5 text-pink-500" /> Instagram
                                        </a>
                                    )}
                                    {socialLinks.twitter && (
                                        <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors bg-white/5 px-2 py-1 rounded-md border border-white/5">
                                            <Twitter className="h-3.5 w-3.5 text-blue-400" /> Twitter
                                        </a>
                                    )}
                                    {socialLinks.kaggle && (
                                        <a href={socialLinks.kaggle} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors bg-white/5 px-2 py-1 rounded-md border border-white/5">
                                            <Link2 className="h-3.5 w-3.5 text-blue-300" /> Kaggle
                                        </a>
                                    )}
                                    {socialLinks.snapchat && (
                                        <a href={socialLinks.snapchat} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors bg-white/5 px-2 py-1 rounded-md border border-white/5">
                                            <Link2 className="h-3.5 w-3.5 text-yellow-400" /> Snapchat
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 mt-4 md:mt-0 items-center md:items-start shrink-0">
                            {user && user.name === data.username && (
                                <button
                                    onClick={() => setIsEditing(true)}
                                    className="w-full sm:w-auto px-5 py-2.5 rounded-2xl bg-white/10 text-white hover:bg-white/20 font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md border border-white/10"
                                >
                                    <Edit3 className="h-4 w-4 text-orange-400" />
                                    Edit Profile
                                </button>
                            )}
                            <button
                                onClick={() => setIsSharing(true)}
                                className="w-full sm:w-auto px-5 py-2.5 rounded-2xl bg-white text-gray-900 hover:bg-gray-100 font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
                            >
                                <Share2 className="h-4 w-4 text-red-500" />
                                Share
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Statistics Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    <motion.div className="bg-white dark:bg-[#0c1222] border border-gray-200/50 dark:border-white/5 p-5 rounded-3xl shadow-sm flex flex-col justify-between">
                        <div className="flex items-center gap-3">
                            <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-500 shrink-0"><Clock className="h-5 w-5" /></div>
                            <div>
                                <span className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest block leading-none">Hours Coded</span>
                                <span className="text-xl font-black text-gray-800 dark:text-white mt-1.5 block leading-none">{data.codingHours} hrs</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div className="bg-white dark:bg-[#0c1222] border border-gray-200/50 dark:border-white/5 p-5 rounded-3xl shadow-sm flex flex-col justify-between">
                        <div className="flex items-center gap-3">
                            <div className="p-3 rounded-2xl bg-green-500/10 text-green-500 shrink-0"><Code className="h-5 w-5" /></div>
                            <div>
                                <span className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest block leading-none">Total Runs</span>
                                <span className="text-xl font-black text-gray-800 dark:text-white mt-1.5 block leading-none">{data.totalCompiles}</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div className="bg-white dark:bg-[#0c1222] border border-gray-200/50 dark:border-white/5 p-5 rounded-3xl shadow-sm flex flex-col justify-between">
                        <div className="flex items-center gap-3">
                            <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-500 shrink-0"><Award className="h-5 w-5" /></div>
                            <div>
                                <span className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest block leading-none">Success Rate</span>
                                <span className="text-xl font-black text-gray-800 dark:text-white mt-1.5 block leading-none">{Math.round(data.compileSuccessRate)}%</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div className="bg-white dark:bg-[#0c1222] border border-gray-200/50 dark:border-white/5 p-5 rounded-3xl shadow-sm flex flex-col justify-between">
                        <div className="flex items-center gap-3">
                            <div className="p-3 rounded-2xl bg-orange-500/10 text-orange-500 shrink-0"><CheckCircle className="h-5 w-5" /></div>
                            <div>
                                <span className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest block leading-none">Success Runs</span>
                                <span className="text-xl font-black text-gray-800 dark:text-white mt-1.5 block leading-none">{data.successfulCompiles}</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 space-y-6">
                        {/* Achievements & Badges Showcase */}
                        <div className="bg-white dark:bg-[#0c1222] border border-gray-200 dark:border-white/5 rounded-3xl p-6 shadow-sm space-y-6">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                <div className="flex items-center gap-3">
                                    <div className="p-2.5 bg-amber-500/10 rounded-2xl text-amber-500">
                                        <Trophy className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h2 className="text-lg font-black text-gray-900 dark:text-white flex items-center gap-2">
                                            Achievements & Badges
                                            <Sparkles className="w-4 h-4 text-amber-400" />
                                        </h2>
                                        <p className="text-xs text-gray-400 font-semibold">Earned milestones & daily coding streak badges</p>
                                    </div>
                                </div>
                                <span className="self-start sm:self-auto text-xs font-black text-amber-500 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                                    {evaluateUserBadges(data.streak || 0, data.successfulCompiles || 0).filter(b => b.unlocked).length} / {evaluateUserBadges(data.streak || 0, data.successfulCompiles || 0).length} Unlocked
                                </span>
                            </div>

                            {evaluateUserBadges(data.streak || 0, data.successfulCompiles || 0).filter(b => b.unlocked).length > 0 ? (
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {evaluateUserBadges(data.streak || 0, data.successfulCompiles || 0).filter(b => b.unlocked).map((badge) => (
                                        <BadgeCard
                                            key={badge.id}
                                            badge={badge}
                                            onShare={(b) => {
                                                setSelectedBadge(b);
                                                setIsBadgeModalOpen(true);
                                            }}
                                            onClick={() => {
                                                setSelectedBadge(badge);
                                                setIsBadgeModalOpen(true);
                                            }}
                                        />
                                    ))}
                                </div>
                            ) : (
                                <div className="py-8 text-center text-gray-400 font-semibold text-xs border border-dashed border-gray-200 dark:border-white/5 rounded-2xl">
                                    No milestone badges unlocked yet. Start solving daily algorithmic challenges to earn official badges!
                                </div>
                            )}
                        </div>

                        {/* Contribution Graph */}
                        <div className="bg-white dark:bg-[#0c1222] border border-gray-200 dark:border-white/5 rounded-3xl p-6 shadow-sm overflow-hidden">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-red-500/10 rounded-xl text-red-500">
                                    <Flame className="w-5 h-5" />
                                </div>
                                <h2 className="text-lg font-black text-gray-900 dark:text-white">Coding Activity</h2>
                            </div>
                            <div className="-mx-2 sm:mx-0">
                                <ContributionGraph submissions={data.submissions || []} />
                            </div>
                        </div>

                        {/* Education Details */}
                        {hasEducation && (
                            <div className="bg-white dark:bg-[#0c1222] border border-gray-200 dark:border-white/5 rounded-3xl p-6 shadow-sm">
                                <h2 className="text-lg font-black text-gray-900 dark:text-white mb-6">Education</h2>
                                <div className="space-y-4">
                                    {Object.entries(education).map(([key, val]) => {
                                        if (!val || !(val as string).trim()) return null;
                                        const labels: any = { tenth: '10th Standard', twelfth: '12th Standard', graduation: 'Graduation', master: 'Master\'s Degree', phd: 'PhD' };
                                        return (
                                            <div key={key} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/5">
                                                <span className="text-xs font-bold text-gray-500 dark:text-gray-400">{labels[key]}</span>
                                                <span className="text-sm font-semibold text-gray-900 dark:text-white text-right max-w-[60%] truncate">{val as string}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar / Badges / Recent Activity */}
                    <div className="space-y-6">
                        {/* Weekly Activity Box */}
                        <div className="bg-white dark:bg-[#0c1222] border border-gray-200 dark:border-white/5 rounded-3xl p-6 shadow-sm">
                            <h2 className="text-lg font-black text-gray-900 dark:text-white mb-6">Weekly Sprint</h2>
                            <div className="flex justify-between items-end h-32 gap-1 mt-6 px-1">
                                {weeklyStats.map((stat: any, i: number) => (
                                    <div key={stat.day} className="flex flex-col items-center gap-2 group flex-1">
                                        <div className="w-full bg-gray-50 dark:bg-white/5 rounded-full h-24 flex items-end overflow-hidden group-hover:-translate-y-1 transition-transform">
                                            {stat.percent > 0 && (
                                                <div 
                                                    className="w-full bg-gradient-to-t from-red-600 to-orange-400 rounded-full transition-all duration-500"
                                                    style={{ height: `${Math.max(15, stat.percent)}%` }}
                                                />
                                            )}
                                        </div>
                                        <span className="text-[10px] font-bold text-gray-400 group-hover:text-red-400 transition-colors">{stat.day}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Recent Activity */}
                        <div className="bg-white dark:bg-[#0c1222] border border-gray-200 dark:border-white/5 rounded-3xl p-6 shadow-sm overflow-hidden flex flex-col h-96">
                            <h2 className="text-lg font-black text-gray-900 dark:text-white mb-6 shrink-0">Recent Activity</h2>
                            <div className="flex-1 overflow-y-auto pr-2 no-scrollbar">
                                {data.recentActivities && data.recentActivities.length > 0 ? (
                                    <ul className="space-y-6 relative before:absolute before:inset-0 before:ml-4 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 dark:before:via-white/10 before:to-transparent">
                                        {data.recentActivities.map((act: any, index: number) => {
                                            const isLast = index === data.recentActivities.length - 1;
                                            const date = new Date(act.timestamp);
                                            const formattedTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                                            const formattedDate = date.toLocaleDateString([], { month: 'short', day: 'numeric' });
                                            
                                            let IconComponent = HelpCircle;
                                            let iconBg = 'bg-gray-500';
                                            if (act.activityType === 'CODE_SUBMISSION') {
                                                IconComponent = Code; iconBg = 'bg-green-500';
                                            } else if (act.activityType === 'LOGIN') {
                                                IconComponent = User; iconBg = 'bg-blue-500';
                                            } else if (act.activityType === 'COURSE_ENROLL') {
                                                IconComponent = Award; iconBg = 'bg-orange-500';
                                            }

                                            return (
                                                <li key={act.id} className="relative pl-10 md:pl-0">
                                                    <div className="md:flex items-center justify-between">
                                                        <div className="hidden md:block w-1/3 text-right pr-6">
                                                            <div className="text-[10px] font-bold text-gray-500">{formattedDate}</div>
                                                            <div className="text-xs font-black text-gray-800 dark:text-gray-300">{formattedTime}</div>
                                                        </div>
                                                        <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-4 border-white dark:border-[#0c1222] flex items-center justify-center bg-gray-100 dark:bg-white/5 z-10">
                                                            <IconComponent className={`w-3 h-3 text-white ${iconBg} rounded-full p-0.5`} />
                                                        </div>
                                                        <div className="md:w-1/2 md:pl-6">
                                                            <div className="bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 rounded-2xl p-3 shadow-sm hover:border-red-500/30 transition-colors">
                                                                <p className="text-xs font-bold text-gray-800 dark:text-gray-200 break-words leading-tight">
                                                                    {act.details}
                                                                </p>
                                                                <span className="text-[9px] font-black uppercase text-red-500/80 tracking-widest mt-1 block">
                                                                    {act.activityType.replace('_', ' ')}
                                                                </span>
                                                                <div className="md:hidden mt-2 text-[9px] text-gray-400 font-bold">
                                                                    {formattedDate} • {formattedTime}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                ) : (
                                    <div className="text-center py-6 text-xs text-gray-400 font-semibold border border-dashed border-gray-200 dark:border-white/5 rounded-2xl">
                                        No recent activities to show.
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <ShareProfileModal 
                isOpen={isSharing} 
                onClose={() => setIsSharing(false)} 
                username={data.username} 
            />

            {user && user.name === data.username && (
                <EditProfileModal 
                    isOpen={isEditing} 
                    onClose={() => setIsEditing(false)} 
                    data={{
                        ...data,
                        mobileNumber: data.mobileNumber || '',
                    }}
                    onSuccess={fetchProfile}
                />
            )}

            <BadgeCelebrationModal
                isOpen={isBadgeModalOpen}
                onClose={() => setIsBadgeModalOpen(false)}
                badge={selectedBadge}
                streak={data.streak || 1}
                customTitle="Official Achievement Badge"
            />
        </div>
    );
};

export default PublicProfilePage;
