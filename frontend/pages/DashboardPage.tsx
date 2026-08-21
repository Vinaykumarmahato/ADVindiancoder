import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    User, Mail, Phone, Linkedin, BookOpen, Code, Award, 
    Edit2, Save, X, Calendar, Flame, CheckCircle, 
    ArrowRight, Star, Clock, Compass, HelpCircle, Loader2,
    Activity, Plus, History, Share2, Github, LayoutTemplate,
    Facebook, Instagram, Twitter, Link2, Trophy, Sparkles
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { COURSES } from '../constants';
import ContributionGraph from '../components/ContributionGraph';
import ShareProfileModal from '../components/ShareProfileModal';
import EditProfileModal from '../components/EditProfileModal';
import { evaluateUserBadges, UserEarnedBadge } from '../utils/badges';
import BadgeCard from '../components/badges/BadgeCard';
import BadgeCelebrationModal from '../components/badges/BadgeCelebrationModal';

export interface DashboardData {
    username: string;
    email: string;
    mobileNumber: string;
    linkedinUrl: string;
    socialLinksJson?: string;
    educationJson?: string;
    role: string;
    avatar: string;
    bio?: string;
    enrolledCourses: string[];
    codingHours: number;
    totalCompiles: number;
    compileSuccessRate: number;
    examMockScore: number;
    courseProgressList: UserCourseProgress[];
    successfulCompiles: number;
    failedCompiles: number;
    fileStats: FileStatsData[];
    recentActivities: ActivityLogData[];
    weeklyActivity?: { day: string; percent: number; compiles: number; minutes: number }[];
}

interface UserCourseProgress {
    id?: number;
    email: string;
    courseId: string;
    courseName: string;
    progressPercent: number;
    completedVideos: string;
    assessmentScore: number;
    completedTopics?: string;
    quizStates?: string;
    interviewRequested?: boolean;
    lastUpdated?: string;
}

interface FileStatsData {
    fileName: string;
    language: string;
    totalRuns: number;
    correctRuns: number;
    incorrectRuns: number;
}

interface ActivityLogData {
    id: number;
    activityType: string;
    details: string;
    timestamp: string;
}

// DashboardData moved up

const DashboardPage: React.FC = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [data, setData] = useState<DashboardData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    
    // Edit Profile / Share Profile
    const [isEditing, setIsEditing] = useState(false);
    const [isSharing, setIsSharing] = useState(false);

    const [streak, setStreak] = useState(0);

    const [submissions, setSubmissions] = useState<any[]>([]);
    const [historyLoading, setHistoryLoading] = useState(true);
    const [selectedSub, setSelectedSub] = useState<any | null>(null);
    const [activeTab, setActiveTab] = useState<'overview' | 'analytics' | 'history' | 'badges'>('overview');
    const [selectedBadge, setSelectedBadge] = useState<UserEarnedBadge | null>(null);
    const [isBadgeModalOpen, setIsBadgeModalOpen] = useState(false);

    const fetchSubmissionsHistory = async () => {
        const token = localStorage.getItem('adv_coder_token');
        if (!token) return;
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:8080'}/api/auth/submissions`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (res.ok) {
                const data = await res.json();
                setSubmissions(data);
            }
        } catch (e) {
            console.error("Failed to fetch submission history", e);
        } finally {
            setHistoryLoading(false);
        }
    };

    const weeklyStats = (data && data.weeklyActivity) || [
        { day: 'Mon', percent: 0, compiles: 0, minutes: 0 },
        { day: 'Tue', percent: 0, compiles: 0, minutes: 0 },
        { day: 'Wed', percent: 0, compiles: 0, minutes: 0 },
        { day: 'Thu', percent: 0, compiles: 0, minutes: 0 },
        { day: 'Fri', percent: 0, compiles: 0, minutes: 0 },
        { day: 'Sat', percent: 0, compiles: 0, minutes: 0 },
        { day: 'Sun', percent: 0, compiles: 0, minutes: 0 },
    ];

    // Calculate language breakdown from fileStats
    const langBreakdown: Record<string, { files: number; runs: number }> = {};
    let totalRunsForLangs = 0;
    if (data && data.fileStats) {
        data.fileStats.forEach(f => {
            const lang = f.language || 'unknown';
            if (!langBreakdown[lang]) {
                langBreakdown[lang] = { files: 0, runs: 0 };
            }
            langBreakdown[lang].files += 1;
            langBreakdown[lang].runs += f.totalRuns;
            totalRunsForLangs += f.totalRuns;
        });
    }

    const fetchProfileData = async () => {
        const token = localStorage.getItem('adv_coder_token');
        if (!token) {
            navigate('/');
            return;
        }

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:8080'}/api/auth/profile`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });
            if (!response.ok) {
                throw new Error('Failed to fetch profile statistics.');
            }
            const resData = await response.json();
            setData(resData);
            setStreak(resData.streak || 0);
        } catch (err: any) {
            setError(err.message || 'Error occurred while loading data.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!user) {
            navigate('/');
            return;
        }
        fetchProfileData();
        fetchSubmissionsHistory();
    }, [user, navigate]);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-[70vh]">
                <div className="flex flex-col items-center gap-3">
                    <Loader2 className="h-10 w-10 text-red-500 animate-spin" />
                    <p className="text-gray-500 dark:text-gray-400 font-bold text-sm">Loading dashboard data...</p>
                </div>
            </div>
        );
    }

    if (error || !data) {
        return (
            <div className="flex items-center justify-center min-h-[70vh] text-red-500 font-semibold p-6 bg-red-500/10 rounded-2xl mx-4">
                {error || 'Failed to load dashboard data.'}
            </div>
        );
    }

    let socialLinks: any = {};
    let education: any = {};
    try { socialLinks = JSON.parse(data.socialLinksJson || '{}'); } catch (e) {}
    try { education = JSON.parse(data.educationJson || '{}'); } catch (e) {}

    const hasEducation = Object.values(education).some((v: any) => v && v.trim() !== '');

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-[#070b13] pt-36 sm:pt-40 md:pt-44 lg:pt-48 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-8">
                
                {/* Hero Welcome Banner */}
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
                                alt="User Avatar" 
                                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-red-500/20 bg-slate-800 object-cover shrink-0"
                            />
                            <div className="flex flex-col items-center sm:items-start min-w-0 w-full">
                                <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full justify-center sm:justify-start">
                                    <h1 className="text-2xl sm:text-3xl font-black text-white break-all text-center sm:text-left">{data.username}</h1>
                                    <span className="px-2.5 py-0.5 rounded-full bg-red-500/10 border border-red-500/30 text-[10px] font-bold text-red-400 uppercase tracking-wider shrink-0">
                                        {data.role}
                                    </span>
                                    {streak > 0 && (
                                        <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-orange-500/15 border border-orange-500/30 text-[10px] font-bold text-orange-400 animate-pulse shrink-0">
                                            <Flame className="w-3.5 h-3.5 fill-current text-orange-500" />
                                            {streak} Day Streak
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
                            <button
                                onClick={() => setIsSharing(true)}
                                className="w-full sm:w-auto px-4 py-2.5 rounded-2xl bg-white text-gray-900 font-bold text-xs flex items-center justify-center gap-2 hover:bg-gray-100 transition-all cursor-pointer shadow-md"
                            >
                                <Share2 className="h-4 w-4 text-red-500" />
                                Share Profile
                            </button>
                            <button
                                onClick={() => setIsEditing(true)}
                                className="w-full sm:w-auto px-4 py-2.5 rounded-2xl bg-white/10 text-white hover:bg-white/20 font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md border border-white/10"
                            >
                                <Edit2 className="h-4 w-4 text-orange-400" />
                                Edit Profile
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Statistics Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Stat Item 1: Coding Hours */}
                    <motion.div 
                        whileHover={{ y: -4 }}
                        className="bg-white dark:bg-[#0c1222] border border-gray-200/50 dark:border-white/5 p-6 rounded-3xl shadow-sm flex flex-col justify-between"
                    >
                        <div className="flex items-center gap-4">
                            <div className="p-3.5 rounded-2xl bg-blue-500/10 text-blue-500 shrink-0">
                                <Clock className="h-5 w-5" />
                            </div>
                            <div>
                                <span className="text-[9px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest block leading-none">Hours Coded</span>
                                <span className="text-xl font-black text-gray-800 dark:text-white mt-1.5 block leading-none">{data.codingHours} hrs</span>
                            </div>
                        </div>
                        <div className="w-full mt-4">
                            <div className="flex justify-between text-[10px] text-gray-400 font-bold mb-1.5">
                                <span>Weekly Target</span>
                                <span>{Math.round((data.codingHours / 10) * 100)}%</span>
                            </div>
                            <div className="w-full h-1.5 rounded-full bg-gray-100 dark:bg-white/5 overflow-hidden">
                                <div 
                                    className="h-full bg-blue-500" 
                                    style={{ width: `${Math.min((data.codingHours / 10) * 100, 100)}%` }}
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Stat Item 2: Submissions */}
                    <motion.div 
                        whileHover={{ y: -4 }}
                        className="bg-white dark:bg-[#0c1222] border border-gray-200/50 dark:border-white/5 p-6 rounded-3xl shadow-sm flex flex-col justify-between"
                    >
                        <div className="flex items-center gap-4">
                            <div className="p-3.5 rounded-2xl bg-green-500/10 text-green-500 shrink-0">
                                <Code className="h-5 w-5" />
                            </div>
                            <div>
                                <span className="text-[9px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest block leading-none">Submissions</span>
                                <span className="text-xl font-black text-gray-800 dark:text-white mt-1.5 block leading-none">{data.totalCompiles} Runs</span>
                            </div>
                        </div>
                        <div className="w-full mt-4">
                            <div className="flex justify-between text-[10px] text-gray-400 font-bold mb-1.5">
                                <span className="text-green-500 flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                    {data.successfulCompiles} Correct
                                </span>
                                <span className="text-red-500 flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                                    {data.failedCompiles} Incorrect
                                </span>
                            </div>
                            <div className="w-full h-1.5 rounded-full bg-gray-100 dark:bg-white/5 overflow-hidden flex">
                                {data.totalCompiles > 0 ? (
                                    <>
                                        <div 
                                            className="h-full bg-green-500" 
                                            style={{ width: `${(data.successfulCompiles / data.totalCompiles) * 100}%` }}
                                        />
                                        <div 
                                            className="h-full bg-red-500" 
                                            style={{ width: `${(data.failedCompiles / data.totalCompiles) * 100}%` }}
                                        />
                                    </>
                                ) : (
                                    <div className="h-full w-full bg-gray-200 dark:bg-white/5" />
                                )}
                            </div>
                        </div>
                    </motion.div>

                    {/* Stat Item 3: Daily Streak */}
                    <motion.div 
                        whileHover={{ y: -4 }}
                        className="bg-white dark:bg-[#0c1222] border border-gray-200/50 dark:border-white/5 p-6 rounded-3xl shadow-sm flex flex-col justify-between"
                    >
                        <div className="flex items-center gap-4">
                            <div className="p-3.5 rounded-2xl bg-orange-500/10 text-orange-500 shrink-0">
                                <Flame className="h-5 w-5" />
                            </div>
                            <div>
                                <span className="text-[9px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest block leading-none">Daily Streak</span>
                                <span className="text-xl font-black text-gray-800 dark:text-white mt-1.5 block leading-none">{streak} Days</span>
                            </div>
                        </div>
                        <div className="w-full mt-4">
                            <div className="flex justify-between text-[10px] text-gray-400 font-bold mb-1.5">
                                <span>Streak Status</span>
                                <span>{streak > 0 ? 'Active 🔥' : 'Inactive'}</span>
                            </div>
                            <div className="w-full h-1.5 rounded-full bg-gray-100 dark:bg-white/5 overflow-hidden">
                                <div 
                                    className="h-full bg-orange-500" 
                                    style={{ width: `${streak > 0 ? Math.min((streak / 7) * 100, 100) : 0}%` }}
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Stat Item 4: Success Rate */}
                    <motion.div 
                        whileHover={{ y: -4 }}
                        className="bg-white dark:bg-[#0c1222] border border-gray-200/50 dark:border-white/5 p-6 rounded-3xl shadow-sm flex flex-col justify-between"
                    >
                        <div className="flex items-center gap-4">
                            <div className="p-3.5 rounded-2xl bg-indigo-500/10 text-indigo-500 shrink-0">
                                <Award className="h-5 w-5" />
                            </div>
                            <div>
                                <span className="text-[9px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest block leading-none">Success Rate</span>
                                <span className="text-xl font-black text-gray-800 dark:text-white mt-1.5 block leading-none">{data.compileSuccessRate}%</span>
                            </div>
                        </div>
                        <div className="w-full mt-4">
                            <div className="flex justify-between text-[10px] text-gray-400 font-bold mb-1.5">
                                <span>Accuracy</span>
                                <span>{data.compileSuccessRate}%</span>
                            </div>
                            <div className="w-full h-1.5 rounded-full bg-gray-100 dark:bg-white/5 overflow-hidden">
                                <div 
                                    className="h-full bg-indigo-500" 
                                    style={{ width: `${data.compileSuccessRate}%` }}
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Dashboard Tab Selector */}
                <div className="flex border-b border-gray-200 dark:border-white/5 pb-px gap-6 overflow-x-auto no-scrollbar relative z-10 my-6">
                    {[
                        { id: 'overview', name: 'Roadmap & Tools', icon: BookOpen },
                        { id: 'badges', name: 'Badges & Achievements', icon: Trophy },
                        { id: 'analytics', name: 'Performance Analytics', icon: Activity },
                        { id: 'history', name: 'Activity & History logs', icon: History }
                    ].map((tab) => {
                        const isActive = activeTab === tab.id;
                        const Icon = tab.icon;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as any)}
                                className={`flex items-center gap-2 pb-4 text-sm font-black transition-all relative cursor-pointer ${
                                    isActive 
                                        ? 'text-red-500' 
                                        : 'text-gray-400 hover:text-gray-900 dark:hover:text-white'
                                }`}
                            >
                                <Icon className="w-4.5 h-4.5" />
                                <span>{tab.name}</span>
                                {isActive && (
                                    <motion.div 
                                        layoutId="activeTabUnderline"
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500 rounded-full"
                                    />
                                )}
                            </button>
                        );
                    })}
                </div>

                {/* Tab content wrapper */}
                <div className="mt-2">
                    {/* Tab 1: Overview */}
                    {activeTab === 'overview' && (
                        <div className="space-y-8 animate-in fade-in duration-300">
                            {/* Contribution Graph */}
                            <ContributionGraph submissions={submissions} />

                            {/* Education Details */}
                            {hasEducation && (
                                <div className="bg-white dark:bg-[#0c1222] border border-gray-200 dark:border-white/5 rounded-3xl p-6 shadow-sm">
                                    <h2 className="text-lg font-black text-gray-900 dark:text-white mb-6">Education Details</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {Object.entries(education).map(([key, val]) => {
                                            if (!val || !(val as string).trim()) return null;
                                            const labels: any = { tenth: '10th Standard', twelfth: '12th Standard', graduation: 'Graduation', master: 'Master\'s Degree', phd: 'PhD' };
                                            return (
                                                <div key={key} className="flex justify-between items-center p-4 bg-gray-50 dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/5">
                                                    <span className="text-xs font-bold text-gray-500 dark:text-gray-400">{labels[key]}</span>
                                                    <span className="text-sm font-semibold text-gray-900 dark:text-white text-right max-w-[60%] truncate">{val as string}</span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}

                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                {/* Enrolled Courses Column */}
                                <div className="lg:col-span-2 space-y-6">
                                    <div className="flex items-center justify-between">
                                    <h2 className="text-lg font-black text-gray-900 dark:text-white flex items-center gap-2">
                                        <BookOpen className="h-5 w-5 text-red-500" />
                                        My Active Roadmap & Courses
                                    </h2>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {data.courseProgressList && data.courseProgressList.length > 0 ? (
                                        data.courseProgressList.map((progress, idx) => {
                                            const totalVideos = progress.courseId === 'java-full-course-2026' ? 44 : 1;
                                            const completedCount = progress.completedVideos ? progress.completedVideos.split(',').filter(Boolean).length : 0;
                                            
                                            return (
                                                <motion.div 
                                                    key={idx}
                                                    whileHover={{ scale: 1.01 }}
                                                    className="bg-white dark:bg-[#0c1222] border border-gray-200/50 dark:border-white/5 rounded-3xl p-5 shadow-sm space-y-4 flex flex-col justify-between"
                                                >
                                                    <div className="space-y-2.5">
                                                        <div className="flex items-center justify-between">
                                                            <div className="flex items-center gap-2 text-xs font-semibold text-red-500 uppercase">
                                                                <Flame className="h-4 w-4" />
                                                                Active Roadmap
                                                            </div>
                                                            {progress.assessmentScore > 0 && (
                                                                <span className="text-[10px] font-black tracking-widest bg-green-500/10 border border-green-500/20 text-green-500 px-2.5 py-0.5 rounded-full">
                                                                    Score: {progress.assessmentScore}%
                                                                </span>
                                                            )}
                                                        </div>
                                                        <h3 className="text-base font-extrabold text-gray-900 dark:text-white leading-snug">
                                                            {progress.courseName}
                                                        </h3>
                                                        <div className="space-y-1.5">
                                                            <div className="flex items-center justify-between text-[10px] font-bold text-gray-400 uppercase">
                                                                <span>Playlist Track</span>
                                                                <span className="text-red-500 font-extrabold">{completedCount} / {totalVideos} Modules</span>
                                                            </div>
                                                            <div className="w-full h-1.5 rounded-full bg-gray-100 dark:bg-white/5 overflow-hidden">
                                                                <div 
                                                                    className="h-full bg-gradient-to-r from-red-600 to-orange-500 rounded-full" 
                                                                    style={{ width: `${progress.progressPercent}%` }}
                                                                />
                                                            </div>
                                                            <div className="flex items-center justify-between text-[9px] font-bold text-gray-400">
                                                                <span>Completed</span>
                                                                <span>{progress.progressPercent}%</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button 
                                                        onClick={() => {
                                                            if (progress.courseId === 'upsc-syllabus') {
                                                                navigate('/upsc-syllabus');
                                                                return;
                                                            }
                                                            const match = COURSES.find(c => c.id.toString() === progress.courseId.toString());
                                                            if (match) {
                                                                if (match.youtubeLink.startsWith('/')) {
                                                                    navigate(match.youtubeLink);
                                                                } else {
                                                                    navigate(`/course/${match.id}`);
                                                                }
                                                            } else {
                                                                navigate(`/course/${progress.courseId}`);
                                                            }
                                                        }}
                                                        className="w-full py-2.5 mt-4 rounded-xl bg-slate-50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-gray-800 dark:text-gray-200 font-bold text-xs flex items-center justify-center gap-2 border border-gray-100 dark:border-white/5 transition-all cursor-pointer"
                                                    >
                                                        <span>Resume Lecture</span>
                                                        <ArrowRight className="h-3.5 w-3.5 text-red-500" />
                                                    </button>
                                                </motion.div>
                                            );
                                        })
                                    ) : (
                                        <div className="col-span-2 p-8 text-center bg-white dark:bg-[#0c1222] border border-gray-200/50 dark:border-white/5 rounded-3xl space-y-4">
                                            <BookOpen className="h-10 w-10 text-gray-400 mx-auto" />
                                            <p className="text-sm text-gray-500 font-bold">You are not enrolled in any roadmap playlists yet.</p>
                                            <button 
                                                onClick={() => navigate('/courses')}
                                                className="px-6 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-black text-xs uppercase tracking-widest cursor-pointer shadow-lg shadow-red-600/20"
                                            >
                                                Explore Vault
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Quick Tools */}
                            <div className="space-y-6">
                                <h2 className="text-lg font-black text-gray-900 dark:text-white flex items-center gap-2">
                                    <Compass className="h-5 w-5 text-red-500" />
                                    Quick Access Tools
                                </h2>
                                
                                <div className="bg-white dark:bg-[#0c1222] border border-gray-200/50 dark:border-white/5 rounded-3xl p-6 shadow-sm space-y-4">
                                    <button 
                                        onClick={() => navigate('/adv-lab')}
                                        className="w-full p-4 rounded-2xl bg-gradient-to-br from-red-600 to-red-500 text-white font-bold text-sm shadow-md hover:brightness-110 flex items-center justify-between cursor-pointer"
                                    >
                                        <span className="flex items-center gap-2.5">
                                            <Code className="h-5 w-5" />
                                            Launch ADV Lab IDE
                                        </span>
                                        <ArrowRight className="h-4.5 w-4.5" />
                                    </button>

                                    <button 
                                        onClick={() => navigate('/exam-hub')}
                                        className="w-full p-4 rounded-2xl bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 text-gray-800 dark:text-white font-bold text-sm flex items-center justify-between border border-gray-200/30 dark:border-white/5 transition-all cursor-pointer"
                                    >
                                        <span className="flex items-center gap-2.5">
                                            <Award className="h-5 w-5 text-red-500" />
                                            Solve UPSC Predicted Mocks
                                        </span>
                                        <ArrowRight className="h-4.5 w-4.5 text-gray-400" />
                                    </button>

                                    <button 
                                        onClick={() => navigate('/resources')}
                                        className="w-full p-4 rounded-2xl bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 text-gray-800 dark:text-white font-bold text-sm flex items-center justify-between border border-gray-200/30 dark:border-white/5 transition-all cursor-pointer"
                                    >
                                        <span className="flex items-center gap-2.5">
                                            <BookOpen className="h-5 w-5 text-red-500" />
                                            Technical Notes Directory
                                        </span>
                                        <ArrowRight className="h-4.5 w-4.5 text-gray-400" />
                                    </button>
                                </div>
                            </div>
                            </div>
                        </div>
                    )}

                    {/* Tab 2: Performance Analytics */}
                    {activeTab === 'analytics' && (
                        <div className="space-y-8 animate-in fade-in duration-300">
                            {/* Charts Row */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {/* SVG Bar Chart Card */}
                                <motion.div 
                                    whileHover={{ y: -2 }}
                                    className="bg-white dark:bg-[#0c1222] border border-gray-200/50 dark:border-white/5 rounded-3xl p-6 shadow-sm space-y-6"
                                >
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-sm font-black text-gray-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                                            <Activity className="h-4.5 w-4.5 text-red-500" />
                                            Weekly Coding Hours
                                        </h3>
                                        <span className="text-[10px] font-bold text-gray-400 bg-gray-100 dark:bg-white/5 px-2 py-0.5 rounded-md">7 Day Activity</span>
                                    </div>
                                    
                                    <div className="flex items-end justify-between gap-3 pt-6 h-36 relative">
                                        {weeklyStats.map((stat, i) => (
                                            <div key={i} className="flex-1 flex flex-col items-center gap-2 group cursor-pointer relative">
                                                {/* Tooltip */}
                                                <div className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 border border-white/10 text-white text-[9px] font-bold py-1.5 px-2 rounded-xl shadow-lg pointer-events-none whitespace-nowrap z-50">
                                                    {stat.compiles} compiles | {stat.minutes} mins
                                                </div>
                                                {/* Bar */}
                                                <div className="w-full bg-gray-50 dark:bg-white/5 rounded-full h-24 flex items-end overflow-hidden">
                                                    <motion.div 
                                                        initial={{ height: 0 }}
                                                        animate={{ height: `${stat.percent}%` }}
                                                        transition={{ duration: 0.8, delay: i * 0.05 }}
                                                        className="w-full bg-gradient-to-t from-red-600 to-orange-500 rounded-full"
                                                    />
                                                </div>
                                                <span className="text-[10px] font-black text-gray-400 dark:text-gray-500">{stat.day}</span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* Programming Language Distribution */}
                                <motion.div 
                                    whileHover={{ y: -2 }}
                                    className="bg-white dark:bg-[#0c1222] border border-gray-200/50 dark:border-white/5 rounded-3xl p-6 shadow-sm space-y-6"
                                >
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-sm font-black text-gray-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                                            <Code className="h-4.5 w-4.5 text-red-500" />
                                            Language Distribution
                                        </h3>
                                        <span className="text-[10px] font-bold text-gray-400 bg-gray-100 dark:bg-white/5 px-2 py-0.5 rounded-md">Code Profile</span>
                                    </div>

                                    <div className="space-y-4">
                                        {Object.keys(langBreakdown).length > 0 ? (
                                            Object.entries(langBreakdown).map(([lang, stats]) => {
                                                const percent = totalRunsForLangs > 0 ? Math.round((stats.runs / totalRunsForLangs) * 100) : 0;
                                                // Determine language colors
                                                let gradient = "from-red-500 to-orange-500";
                                                const lowerLang = lang.toLowerCase();
                                                if (lowerLang === 'java') gradient = "from-orange-500 to-red-600";
                                                else if (lowerLang === 'python') gradient = "from-blue-500 to-cyan-500";
                                                else if (lowerLang === 'javascript' || lowerLang === 'js') gradient = "from-yellow-400 to-amber-500";
                                                else if (lowerLang === 'cpp' || lowerLang === 'c++') gradient = "from-blue-600 to-indigo-500";
                                                
                                                return (
                                                    <div key={lang} className="space-y-1.5">
                                                        <div className="flex justify-between items-center text-xs font-bold text-gray-700 dark:text-gray-300">
                                                            <span className="capitalize font-black">{lang}</span>
                                                            <span className="text-[10px] text-gray-400">
                                                                {stats.files} {stats.files === 1 ? 'file' : 'files'} ({percent}%)
                                                            </span>
                                                        </div>
                                                        <div className="w-full h-2 bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden">
                                                            <div 
                                                                className={`h-full bg-gradient-to-r ${gradient} rounded-full`} 
                                                                style={{ width: `${percent}%` }}
                                                            />
                                                        </div>
                                                    </div>
                                                );
                                            })
                                        ) : (
                                            <div className="py-6 text-center text-gray-400 font-semibold text-xs border border-dashed border-gray-200 dark:border-white/5 rounded-2xl">
                                                No submissions recorded yet. Write and compile code to track accuracy!
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            </div>

                            {/* Coding Questions & Files Analytics */}
                            <motion.div 
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-white dark:bg-[#0c1222] border border-gray-200/50 dark:border-white/5 rounded-3xl p-6 shadow-sm space-y-6"
                            >
                                <div className="flex items-center justify-between">
                                    <h3 className="text-sm font-black text-gray-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                                        <Code className="h-4.5 w-4.5 text-red-500" />
                                        ADV Lab Files & Submissions Analytics
                                    </h3>
                                    <span className="text-[10px] font-bold text-gray-400 bg-gray-100 dark:bg-white/5 px-2 py-0.5 rounded-md">
                                        {data.fileStats ? data.fileStats.length : 0} Files Tracked
                                    </span>
                                </div>

                                {data.fileStats && data.fileStats.length > 0 ? (
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left border-collapse text-xs">
                                            <thead>
                                                <tr className="border-b border-gray-100 dark:border-white/5 text-[10px] font-black uppercase text-gray-400 tracking-wider">
                                                    <th className="pb-3 font-semibold">File / Question</th>
                                                    <th className="pb-3 font-semibold">Language</th>
                                                    <th className="pb-3 text-center font-semibold">Total Runs</th>
                                                    <th className="pb-3 text-center font-semibold">Correct</th>
                                                    <th className="pb-3 text-center font-semibold">Incorrect</th>
                                                    <th className="pb-3 text-right font-semibold">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-100 dark:divide-white/5 text-gray-600 dark:text-gray-300">
                                                {data.fileStats.map((file, i) => {
                                                    const successRate = file.totalRuns > 0 ? (file.correctRuns * 100) / file.totalRuns : 0;
                                                    let statusText = "Troubleshooting";
                                                    let statusStyle = "bg-red-500/10 text-red-500 border-red-500/20";
                                                    
                                                    if (file.correctRuns > 0) {
                                                        if (successRate >= 70) {
                                                            statusText = "Solved";
                                                            statusStyle = "bg-green-500/10 text-green-500 border-green-500/20";
                                                        } else {
                                                            statusText = "Optimizing";
                                                            statusStyle = "bg-orange-500/10 text-orange-500 border-orange-500/20";
                                                        }
                                                    } else if (file.totalRuns === 0) {
                                                        statusText = "Untouched";
                                                        statusStyle = "bg-gray-500/10 text-gray-500 border-gray-500/20";
                                                    }

                                                    return (
                                                        <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-white/5 transition-colors">
                                                            <td className="py-3 font-bold text-gray-950 dark:text-white flex items-center gap-2">
                                                                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                                                                {file.fileName}
                                                            </td>
                                                            <td className="py-3 font-mono font-bold capitalize text-gray-400">
                                                                {file.language}
                                                            </td>
                                                            <td className="py-3 text-center font-bold">
                                                                {file.totalRuns}
                                                            </td>
                                                            <td className="py-3 text-center text-green-500 font-bold">
                                                                {file.correctRuns}
                                                            </td>
                                                            <td className="py-3 text-center text-red-500 font-bold">
                                                                {file.incorrectRuns}
                                                            </td>
                                                            <td className="py-3 text-right">
                                                                <span className={`px-2.5 py-0.5 rounded-full border text-[10px] font-black uppercase tracking-wider ${statusStyle}`}>
                                                                    {statusText}
                                                                </span>
                                                            </td>
                                                        </tr>
                                                    );
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                ) : (
                                    <div className="py-8 text-center text-gray-400 font-semibold text-xs border border-dashed border-gray-200 dark:border-white/5 rounded-2xl">
                                        No code runs tracked yet. Launch ADV Lab IDE to start coding!
                                    </div>
                                )}
                            </motion.div>
                        </div>
                    )}

                    {/* Tab 2: Badges & Achievements */}
                    {activeTab === 'badges' && (
                        <div className="space-y-8 animate-in fade-in duration-300">
                            <div className="bg-white dark:bg-[#0c1222] border border-gray-200/50 dark:border-white/5 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="p-3 bg-amber-500/10 rounded-2xl text-amber-500">
                                            <Trophy className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h2 className="text-xl font-black text-gray-900 dark:text-white flex items-center gap-2">
                                                Coding Milestone Badges
                                                <Sparkles className="w-5 h-5 text-amber-400" />
                                            </h2>
                                            <p className="text-xs text-gray-400 font-medium">Earn exclusive recognition by maintaining your daily coding streak and solving algorithms.</p>
                                        </div>
                                    </div>
                                    <span className="self-start sm:self-auto text-xs font-black text-amber-500 bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/20">
                                        {evaluateUserBadges(streak, data.successfulCompiles || 0).filter(b => b.unlocked).length} / {evaluateUserBadges(streak, data.successfulCompiles || 0).length} Badges Unlocked
                                    </span>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                                    {evaluateUserBadges(streak, data.successfulCompiles || 0).map((badge) => (
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
                            </div>
                        </div>
                    )}

                    {/* Tab 3: History & Logs */}
                    {activeTab === 'history' && (
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-in fade-in duration-300">
                            {/* Submission History Table */}
                            <div className="lg:col-span-2 space-y-6">
                                <motion.div 
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-white dark:bg-[#0c1222] border border-gray-200/50 dark:border-white/5 rounded-3xl p-6 shadow-sm space-y-6"
                                >
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-sm font-black text-gray-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                                            <History className="h-4.5 w-4.5 text-blue-500" />
                                            Workspace & Practice Submission History
                                        </h3>
                                        <span className="text-[10px] font-bold text-gray-400 bg-gray-100 dark:bg-white/5 px-2 py-0.5 rounded-md">
                                            {submissions.length} runs recorded
                                        </span>
                                    </div>

                                    {historyLoading ? (
                                        <div className="text-center py-8 text-xs text-gray-400 font-semibold flex justify-center items-center gap-2">
                                            <Loader2 className="w-4 h-4 animate-spin text-blue-500" />
                                            Loading history...
                                        </div>
                                    ) : submissions.length > 0 ? (
                                        <div className="overflow-x-auto max-h-[500px] overflow-y-auto pr-1">
                                            <table className="w-full text-left border-collapse text-xs">
                                                <thead>
                                                    <tr className="border-b border-gray-100 dark:border-white/5 text-[10px] font-black uppercase text-gray-400 tracking-wider">
                                                        <th className="pb-3 font-semibold">Name / Description</th>
                                                        <th className="pb-3 font-semibold">Language</th>
                                                        <th className="pb-3 font-semibold">Run Type</th>
                                                        <th className="pb-3 text-center font-semibold">Status</th>
                                                        <th className="pb-3 font-semibold">Timestamp</th>
                                                        <th className="pb-3 text-right font-semibold">Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-100 dark:divide-white/5 text-gray-600 dark:text-gray-300">
                                                    {submissions.map((sub) => {
                                                        const formattedTime = new Date(sub.timestamp).toLocaleString();
                                                        return (
                                                            <tr key={sub.type + '-' + sub.id} className="hover:bg-slate-50/50 dark:hover:bg-white/5 transition-colors">
                                                                <td className="py-3 font-bold text-gray-950 dark:text-white">
                                                                    {sub.fileName}
                                                                </td>
                                                                <td className="py-3 font-mono font-bold capitalize text-gray-400">
                                                                    {sub.language}
                                                                </td>
                                                                <td className="py-3">
                                                                    <span className={`px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider ${sub.type === 'PRACTICE' ? 'bg-purple-500/10 text-purple-400' : 'bg-blue-500/10 text-blue-400'}`}>
                                                                        {sub.type}
                                                                    </span>
                                                                </td>
                                                                <td className="py-3 text-center">
                                                                    <span className={`px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider ${sub.success ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                                                                        {sub.success ? 'Success' : 'Failed'}
                                                                    </span>
                                                                </td>
                                                                <td className="py-3 text-gray-400 font-medium">
                                                                    {formattedTime}
                                                                </td>
                                                                <td className="py-3 text-right">
                                                                    {sub.code ? (
                                                                        <button
                                                                            onClick={() => setSelectedSub(sub)}
                                                                            className="px-3 py-1.5 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-bold text-[10px] transition-colors cursor-pointer"
                                                                        >
                                                                            View Code
                                                                        </button>
                                                                    ) : (
                                                                        <span className="text-[10px] text-gray-500 italic">No code saved</span>
                                                                    )}
                                                                </td>
                                                            </tr>
                                                        );
                                                    })}
                                                </tbody>
                                            </table>
                                        </div>
                                    ) : (
                                        <div className="py-8 text-center text-gray-400 font-semibold text-xs border border-dashed border-gray-200 dark:border-white/5 rounded-2xl">
                                            No compiler history found. Submit or run code in ADV Lab to build history!
                                        </div>
                                    )}
                                </motion.div>
                            </div>

                            {/* Workspace Activity Trail timeline */}
                            <div className="space-y-6">
                                <h2 className="text-lg font-black text-gray-900 dark:text-white flex items-center gap-2">
                                    <Activity className="h-5 w-5 text-red-500" />
                                    Workspace Activity Trail
                                </h2>
                                
                                <div className="bg-white dark:bg-[#0c1222] border border-gray-200/50 dark:border-white/5 rounded-3xl p-6 shadow-sm space-y-5">
                                    {data.recentActivities && data.recentActivities.length > 0 ? (
                                        <div className="flow-root max-h-[500px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-200 dark:scrollbar-thumb-white/10 font-sans">
                                            <ul className="p-1">
                                                {data.recentActivities.map((act, actIdx) => {
                                                    let iconBg = "bg-blue-500";
                                                    let IconComponent = Code;
                                                    
                                                    if (act.activityType === 'FILE_CREATE') {
                                                        iconBg = "bg-green-500";
                                                        IconComponent = Plus;
                                                    } else if (act.activityType === 'FILE_DELETE') {
                                                        iconBg = "bg-red-500";
                                                        IconComponent = X;
                                                    } else if (act.activityType === 'FOLDER_CREATE') {
                                                        iconBg = "bg-yellow-500";
                                                        IconComponent = BookOpen;
                                                    } else if (act.activityType === 'FOLDER_DELETE') {
                                                        iconBg = "bg-orange-500";
                                                        IconComponent = X;
                                                    } else if (act.activityType === 'WORKSPACE_SAVE') {
                                                        iconBg = "bg-indigo-500";
                                                        IconComponent = Save;
                                                    } else if (act.activityType === 'LINKEDIN_SHARE') {
                                                        iconBg = "bg-blue-600";
                                                        IconComponent = Linkedin;
                                                    } else if (act.activityType === 'GITHUB_UPLOAD') {
                                                        iconBg = "bg-slate-800";
                                                        IconComponent = Code;
                                                    }

                                                    // Format timestamp
                                                    const date = new Date(act.timestamp);
                                                    const formattedTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                                                    const formattedDate = date.toLocaleDateString([], { month: 'short', day: 'numeric' });

                                                    return (
                                                        <li key={act.id}>
                                                            <div className="relative pb-6">
                                                                {actIdx !== data.recentActivities.length - 1 ? (
                                                                    <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200 dark:bg-white/5" aria-hidden="true" />
                                                                ) : null}
                                                                <div className="relative flex space-x-3">
                                                                    <div>
                                                                        <span className={`h-8 w-8 rounded-xl flex items-center justify-center text-white shadow-inner shrink-0 ${iconBg}`}>
                                                                            <IconComponent className="h-4 w-4" />
                                                                        </span>
                                                                    </div>
                                                                    <div className="flex-1 min-w-0 pt-1.5 flex justify-between space-x-4">
                                                                        <div>
                                                                            <p className="text-xs font-bold text-gray-800 dark:text-gray-200 break-words leading-tight">
                                                                                {act.details}
                                                                            </p>
                                                                            <span className="text-[9px] font-black uppercase text-red-500/80 tracking-widest mt-1 block">
                                                                                {act.activityType.replace('_', ' ')}
                                                                            </span>
                                                                        </div>
                                                                        <div className="text-right text-[9px] whitespace-nowrap text-gray-400 font-bold shrink-0">
                                                                            <div>{formattedTime}</div>
                                                                            <div className="text-[7px] opacity-75 mt-0.5">{formattedDate}</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </div>
                                    ) : (
                                        <div className="text-center py-6 text-xs text-gray-400 font-semibold border border-dashed border-gray-200 dark:border-white/5 rounded-2xl">
                                            No activity records. Start coding in ADV Lab to see your trail!
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <EditProfileModal 
                    isOpen={isEditing} 
                    onClose={() => setIsEditing(false)} 
                    data={data} 
                    onSuccess={fetchProfileData} 
                />

                <ShareProfileModal 
                    isOpen={isSharing} 
                    onClose={() => setIsSharing(false)} 
                    username={data.username} 
                />

                {/* Code Viewer Modal */}
                <AnimatePresence>
                    {selectedSub && (
                        <div className="fixed inset-0 z-[3000] flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
                            <motion.div 
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                className="absolute inset-0 bg-black/80 backdrop-blur-md"
                                onClick={() => setSelectedSub(null)}
                            />

                            <motion.div 
                                initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                className="relative w-full max-w-4xl bg-[#0b1329] border border-white/10 rounded-[2rem] p-6 sm:p-8 shadow-[0_0_50px_rgba(0,0,0,0.5)] z-10 flex flex-col max-h-[90vh] overflow-hidden my-auto"
                            >
                                <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-4">
                                    <div>
                                        <h3 className="text-base sm:text-lg font-black text-white">{selectedSub.fileName}</h3>
                                        <p className="text-[10px] sm:text-xs text-gray-400 font-mono">
                                            {selectedSub.language} • {selectedSub.type} • {new Date(selectedSub.timestamp).toLocaleString()}
                                        </p>
                                    </div>
                                    <button 
                                        onClick={() => setSelectedSub(null)}
                                        className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>

                                <div className="flex-1 overflow-y-auto bg-black/40 rounded-2xl border border-white/5 p-4 font-mono text-xs sm:text-sm text-green-400 whitespace-pre overflow-x-auto max-h-[50vh]">
                                    {selectedSub.code}
                                </div>

                                <div className="flex justify-end gap-3 mt-6">
                                    <button
                                        onClick={() => {
                                            navigator.clipboard.writeText(selectedSub.code);
                                        }}
                                        className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold text-xs transition-colors cursor-pointer border border-white/5"
                                    >
                                        Copy Code
                                    </button>
                                    <button
                                        onClick={() => setSelectedSub(null)}
                                        className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs transition-colors cursor-pointer"
                                    >
                                        Close
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>

                <BadgeCelebrationModal
                    isOpen={isBadgeModalOpen}
                    onClose={() => setIsBadgeModalOpen(false)}
                    badge={selectedBadge}
                    streak={streak}
                    customTitle="Official Achievement Badge"
                />
                
            </div>
        </div>
    );
};

export default DashboardPage;