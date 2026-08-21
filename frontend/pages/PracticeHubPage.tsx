import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
    BookOpen, Sparkles, Code, Award, Target, Flame, 
    ArrowRight, Search, CheckCircle, HelpCircle, ChevronRight,
    TrendingUp, Trophy, Award as BadgeIcon
} from 'lucide-react';
import SEO from '../components/SEO';
import { useAuth } from '../contexts/AuthContext';
import PracticeHubSEO from '../components/seo/PracticeHubSEO';

interface PracticeProblemItem {
    id: number;
    slug: string;
    title: string;
    difficulty: string;
    topic: string;
    category: string;
    status: 'SOLVED' | 'ATTEMPTED' | 'UNTOUCHED';
}

// Ordered topic list with icons for the skill tracks grid
const TOPIC_ORDER = [
    { name: 'Arrays', icon: '📦' },
    { name: '2D Arrays', icon: '🔢' },
    { name: 'Basic Maths', icon: '➕' },
    { name: 'Strings', icon: '🔤' },
    { name: 'Binary Search', icon: '🔍' },
    { name: 'Recursion', icon: '🔁' },
    { name: 'Sorting', icon: '📊' },
    { name: 'OOPS', icon: '🧩' },
    { name: 'Linkedlist', icon: '🔗' },
    { name: 'Stacks', icon: '📚' },
    { name: 'Queues', icon: '🚶' },
    { name: 'Binary Trees', icon: '🌳' },
    { name: 'Binary Search Trees', icon: '🌲' },
    { name: 'Tries', icon: '🌐' },
    { name: 'Hashmaps', icon: '🗺️' },
    { name: 'Heaps / Priority Queues', icon: '🏔️' },
    { name: 'Prefix Sum', icon: '∑' },
    { name: 'Two Pointers & Sliding Window', icon: '👆' },
    { name: 'Bit Manipulation', icon: '💡' },
    { name: 'Greedy', icon: '🤑' },
    { name: 'Graphs', icon: '🕸️' },
    { name: 'Backtracking', icon: '↩️' },
    { name: 'Dynamic Programming', icon: '⚡' },
];

const FALLBACK_PRACTICE_PROBLEMS: PracticeProblemItem[] = [
    { id: 1, slug: 'two-sum', title: 'Two Sum', difficulty: 'EASY', topic: 'Arrays', category: 'DSA', status: 'UNTOUCHED' },
    { id: 2, slug: 'reverse-array', title: 'Reverse an Array', difficulty: 'EASY', topic: 'Arrays', category: 'DSA', status: 'UNTOUCHED' },
    { id: 3, slug: 'max-subarray', title: 'Kadane\'s Algorithm (Max Subarray)', difficulty: 'MEDIUM', topic: 'Arrays', category: 'DSA', status: 'UNTOUCHED' },
    { id: 4, slug: 'valid-palindrome', title: 'Valid Palindrome', difficulty: 'EASY', topic: 'Strings', category: 'DSA', status: 'UNTOUCHED' },
    { id: 5, slug: 'binary-search', title: 'Binary Search Implementation', difficulty: 'EASY', topic: 'Binary Search', category: 'DSA', status: 'UNTOUCHED' },
    { id: 6, slug: 'reverse-linked-list', title: 'Reverse a Linked List', difficulty: 'MEDIUM', topic: 'Linkedlist', category: 'DSA', status: 'UNTOUCHED' },
    { id: 7, slug: 'valid-parentheses', title: 'Valid Parentheses', difficulty: 'EASY', topic: 'Stacks', category: 'DSA', status: 'UNTOUCHED' },
    { id: 8, slug: 'climbing-stairs', title: 'Climbing Stairs', difficulty: 'EASY', topic: 'Dynamic Programming', category: 'DSA', status: 'UNTOUCHED' },
    { id: 9, slug: 'lowest-common-ancestor', title: 'Lowest Common Ancestor of BST', difficulty: 'MEDIUM', topic: 'Binary Search Trees', category: 'DSA', status: 'UNTOUCHED' },
    { id: 10, slug: 'number-of-islands', title: 'Number of Islands', difficulty: 'HARD', topic: 'Graphs', category: 'DSA', status: 'UNTOUCHED' },
];

const PracticeHubPage: React.FC = () => {
    const navigate = useNavigate();
    const { user } = useAuth();
    const [problems, setProblems] = useState<PracticeProblemItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Filter states
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedDifficulty, setSelectedDifficulty] = useState<string>('ALL');
    const [selectedTopic, setSelectedTopic] = useState<string>('ALL');
    const [streak, setStreak] = useState(0);

    useEffect(() => {
        const fetchProblems = async () => {
            const token = localStorage.getItem('adv_coder_token');
            const headers: HeadersInit = {};
            if (token) {
                headers['Authorization'] = `Bearer ${token}`;
            }

            try {
                // Fetch profile for streak
                if (token) {
                    fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:8080'}/api/auth/profile`, { headers })
                        .then(res => res.ok ? res.json() : null)
                        .then(p => { if (p && p.streak) setStreak(p.streak); })
                        .catch(() => {});
                }

                const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:8080'}/api/practice/problems`, { headers });
                if (!response.ok) {
                    throw new Error('Failed to fetch practice problems.');
                }
                const data = await response.json();
                setProblems(Array.isArray(data) && data.length > 0 ? data : FALLBACK_PRACTICE_PROBLEMS);
            } catch (err: any) {
                console.warn('Backend server unavailable, loading fallback practice problems.', err);
                setProblems(FALLBACK_PRACTICE_PROBLEMS);
                setError(null);
            } finally {
                setLoading(false);
            }
        };

        fetchProblems();
    }, []);

    // Unique topics list for dropdown
    const topics = ['ALL', ...Array.from(new Set(problems.map(p => p.topic)))];

    const topicCounts = React.useMemo(() => {
        const counts: Record<string, number> = {};
        problems.forEach(p => {
            const topic = p.topic || 'Unknown';
            counts[topic] = (counts[topic] || 0) + 1;
        });
        return counts;
    }, [problems]);

    // Filtered problems list
    const filteredProblems = problems.filter(p => {
        const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              p.topic.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesDifficulty = selectedDifficulty === 'ALL' || p.difficulty.toUpperCase() === selectedDifficulty.toUpperCase();
        const matchesTopic = selectedTopic === 'ALL' || p.topic.toUpperCase() === selectedTopic.toUpperCase();
        
        return matchesSearch && matchesDifficulty && matchesTopic;
    });

    const solvedCount = problems.filter(p => p.status === 'SOLVED').length;
    const attemptedCount = problems.filter(p => p.status === 'ATTEMPTED').length;

    // Difficulty badge style mapping
    const getDiffBadge = (diff: string) => {
        const d = diff.toUpperCase();
        if (d === 'EASY') return 'bg-green-500/10 text-green-400 border-green-500/20';
        if (d === 'MEDIUM') return 'bg-orange-500/10 text-orange-400 border-orange-500/20';
        if (d === 'HARD') return 'bg-red-500/10 text-red-400 border-red-500/20';
        return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
    };

    const getStatusIcon = (status: string) => {
        if (status === 'SOLVED') return <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />;
        if (status === 'ATTEMPTED') return <HelpCircle className="w-5 h-5 text-orange-400 shrink-0" />;
        return <div className="w-5 h-5 rounded-full border-2 border-gray-600 shrink-0" />;
    };

    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "name": "Full Stack Practice Hub: Code Real Projects | Adv Indian Coder",
                "description": "Level up your coding skills with our Full Stack Practice Hub. Build real-world React, Node.js, and Python projects to build your ultimate portfolio.",
                "url": "https://advindiancoder.com/practice"
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is the Practice Hub?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The Practice Hub is a collection of real-world coding challenges designed to help you improve your full stack web development skills."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Are these coding projects free?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, the majority of our practice projects and challenges are completely free to access and build."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What technologies are covered in the Practice Hub?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We cover HTML, CSS, JavaScript, React, Node.js, Python, MongoDB, and PostgreSQL among others."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do I need prior coding experience?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "While we have beginner projects, a fundamental understanding of syntax is recommended before diving into the Practice Hub."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I put these projects on my resume?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely! These projects are designed specifically to be showcased in your developer portfolio to attract employers."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do I get feedback on my code?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can share your GitHub repository links in our community Discord for peer review and expert feedback."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Are there backend challenges available?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we have a dedicated section for API development, database design, and server security."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is React included in the frontend projects?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, React is the primary framework we focus on for our advanced frontend UI/UX challenges."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How often are new projects added?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We add new, industry-relevant projects to the hub every single month."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do I get a certificate upon completion?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "While the focus is on the portfolio piece itself, completing capstone projects does grant a verified certificate of achievement."
                  }
                }
              ]
            }
        ]
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-[#070b13] pt-36 sm:pt-40 md:pt-44 lg:pt-48 pb-24 px-4 sm:px-6 lg:px-8">
            <SEO 
                title="Full Stack Practice Hub: Code Real Projects | Adv Indian Coder"
                description="Level up your coding skills with our Full Stack Practice Hub. Build real-world React, Node.js, and Python projects to build your ultimate portfolio."
                keywords="full stack practice projects, frontend practice hub, react practice projects for beginners, backend coding challenges, web development practice sites, advanced indian coder practice"
                schema={schema}
                exactTitle={true}
            />
            
            <div className="max-w-7xl mx-auto space-y-12">
                
                {/* Header Welcome Card */}
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-[#101726] to-slate-900 border border-white/10 p-8 md:p-12 shadow-xl">
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                        <div className="lg:col-span-2 space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30 text-xs font-bold text-green-400">
                                <Sparkles className="w-3.5 h-3.5" />
                                Interactive Practice Hub
                            </div>
                            <h1 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tight">
                                Level Up Your <br />
                                <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Coding & DSA Mastery</span>
                            </h1>
                            <p className="text-gray-400 max-w-xl text-sm md:text-base font-semibold leading-relaxed">
                                Guided roadmaps, topic mastery tracks, real-world coding challenges, and mock interview prep designed to transform you from zero to a software engineer.
                            </p>
                        </div>
                        
                        {/* Stats Dashboard */}
                        <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-md space-y-4">
                            <h3 className="text-xs font-black text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                                <TrendingUp className="w-4 h-4 text-green-400" />
                                Your Progress
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest block leading-none">Solved</span>
                                    <span className="text-2xl font-black text-white">{solvedCount} <span className="text-xs text-gray-400 font-bold">/ {problems.length}</span></span>
                                </div>
                                <div className="space-y-1">
                                    <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest block leading-none">Attempted</span>
                                    <span className="text-2xl font-black text-white">{attemptedCount}</span>
                                </div>
                            </div>
                            
                            <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                                <div 
                                    className="h-full bg-gradient-to-r from-green-500 to-emerald-400"
                                    style={{ width: `${problems.length > 0 ? (solvedCount / problems.length) * 100 : 0}%` }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* 🏆 Milestone Badges & Rewards Roadmap */}
                <div className="bg-white dark:bg-[#0c1222] border border-gray-200/60 dark:border-white/5 rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <div className="p-3 bg-amber-500/10 rounded-2xl text-amber-500">
                                <Trophy className="w-6 h-6" />
                            </div>
                            <div>
                                <h2 className="text-xl font-black text-gray-900 dark:text-white flex items-center gap-2">
                                    Coding Milestone Badges & Swag Store
                                    <Sparkles className="w-4 h-4 text-amber-400" />
                                </h2>
                                <p className="text-xs text-gray-400 font-semibold">Maintain your daily coding streak and solve algorithms to unlock badges and earn ADV Coins for real physical swag.</p>
                            </div>
                        </div>
                        <button
                            onClick={() => navigate('/rewards')}
                            className="self-start sm:self-auto px-4 py-2 rounded-2xl bg-gradient-to-r from-amber-500 to-red-600 text-white font-black text-xs flex items-center gap-2 hover:brightness-110 active:scale-95 transition-all shadow-md cursor-pointer"
                        >
                            <span>Open Swag Store 🎁</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                        {[
                            { name: 'Day 1 Pioneer', days: 'Day 1', icon: '⚡', coins: 150, color: '#f59e0b' },
                            { name: '10-Day Warrior', days: '10 Days', icon: '⚔️', coins: 300, color: '#94a3b8' },
                            { name: '20-Day Dedicated', days: '20 Days', icon: '🛡️', coins: 300, color: '#cbd5e1' },
                            { name: '30-Day Mastermind', days: '30 Days', icon: '👑', coins: 500, color: '#fbbf24' },
                            { name: '40-Day Champion', days: '40 Days', icon: '🏅', coins: 500, color: '#f59e0b' },
                            { name: '50-Day Legend', days: '50 Days', icon: '🔮', coins: 750, color: '#10b981' },
                            { name: '100-Day Centurion', days: '100 Days', icon: '🏛️', coins: 1000, color: '#ef4444' },
                            { name: '150-Day Titan', days: '150 Days', icon: '🔱', coins: 1000, color: '#0ea5e9' },
                            { name: '175-Day Unstoppable', days: '175 Days', icon: '🪐', coins: 1200, color: '#a855f7' },
                            { name: '365-Day Grandmaster', days: '365 Days', icon: '💎', coins: 2500, color: '#ec4899' },
                        ].map((m, idx) => {
                            const isAchieved = streak >= (idx === 0 ? 1 : parseInt(m.days)) || (idx === 0 && solvedCount > 0);
                            return (
                                <div
                                    key={idx}
                                    className={`p-3 rounded-2xl border text-center space-y-1.5 transition-all ${
                                        isAchieved 
                                            ? 'bg-amber-500/10 border-amber-500/30 shadow-sm' 
                                            : 'bg-gray-50 dark:bg-white/5 border-gray-100 dark:border-white/5 opacity-70'
                                    }`}
                                >
                                    <div className="text-2xl">{m.icon}</div>
                                    <div className="text-xs font-black text-gray-900 dark:text-white truncate">{m.name}</div>
                                    <div className="flex items-center justify-center gap-1 text-[10px] font-bold text-amber-500">
                                        <span>🪙 +{m.coins}</span>
                                    </div>
                                    <span className={`inline-block text-[9px] font-black uppercase px-2 py-0.5 rounded-full ${
                                        isAchieved 
                                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                                            : 'bg-gray-200 dark:bg-white/10 text-gray-400'
                                    }`}>
                                        {isAchieved ? 'Unlocked ✓' : m.days}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* 🚀 Featured Learning Paths */}
                <div className="space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-black text-gray-900 dark:text-white flex items-center gap-2">
                            <Target className="w-5.5 h-5.5 text-green-500" />
                            Featured Learning Paths
                        </h2>
                    </div>
                                       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white dark:bg-[#0c1222] border border-gray-200/50 dark:border-white/5 p-6 rounded-3xl shadow-sm hover:border-green-500/20 transition-all space-y-3 flex flex-col justify-between">
                            <div className="space-y-2">
                                <span className="text-[10px] font-black text-green-500 uppercase tracking-widest block leading-none">Path 1</span>
                                <h3 className="text-base font-black text-gray-900 dark:text-white">Coding Foundations</h3>
                                <p className="text-xs text-gray-500 font-semibold leading-relaxed">
                                    Build strong programming fundamentals with beginner-friendly problems and implementation exercises.
                                </p>
                            </div>
                            <button onClick={() => { setSelectedTopic('Arrays'); }} className="mt-4 flex items-center justify-between text-xs font-bold text-green-500 dark:text-green-400 group cursor-pointer">
                                <span>Explore Track</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        <div className="bg-white dark:bg-[#0c1222] border border-gray-200/50 dark:border-white/5 p-6 rounded-3xl shadow-sm hover:border-green-500/20 transition-all space-y-3 flex flex-col justify-between">
                            <div className="space-y-2">
                                <span className="text-[10px] font-black text-green-500 uppercase tracking-widest block leading-none">Path 2</span>
                                <h3 className="text-base font-black text-gray-900 dark:text-white">Interview Mastery Path</h3>
                                <p className="text-xs text-gray-500 font-semibold leading-relaxed">
                                    A complete roadmap covering the most important coding patterns and interview questions.
                                </p>
                            </div>
                            <button onClick={() => { setSelectedTopic('ALL'); }} className="mt-4 flex items-center justify-between text-xs font-bold text-green-500 dark:text-green-400 group cursor-pointer">
                                <span>Explore Track</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        <div className="bg-white dark:bg-[#0c1222] border border-gray-200/50 dark:border-white/5 p-6 rounded-3xl shadow-sm hover:border-green-500/20 transition-all space-y-3 flex flex-col justify-between">
                            <div className="space-y-2">
                                <span className="text-[10px] font-black text-green-500 uppercase tracking-widest block leading-none">Path 3</span>
                                <h3 className="text-base font-black text-gray-900 dark:text-white">Problem Solving Accelerator</h3>
                                <p className="text-xs text-gray-500 font-semibold leading-relaxed">
                                    Sharpen analytical thinking through carefully curated algorithmic challenges.
                                </p>
                            </div>
                            <button onClick={() => { setSelectedTopic('Binary Search'); }} className="mt-4 flex items-center justify-between text-xs font-bold text-green-500 dark:text-green-400 group cursor-pointer">
                                <span>Explore Track</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* 🎯 Skill Tracks Grid */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-black text-gray-900 dark:text-white flex items-center gap-2">
                            <Flame className="w-5.5 h-5.5 text-orange-500" />
                            Targeted Skill Tracks
                        </h2>
                        {selectedTopic !== 'ALL' && (
                            <button
                                onClick={() => setSelectedTopic('ALL')}
                                className="text-[10px] font-bold text-green-500 hover:text-green-400 border border-green-500/30 px-3 py-1 rounded-full transition-colors cursor-pointer"
                            >
                                Clear Filter ✕
                            </button>
                        )}
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                        {TOPIC_ORDER.filter(t => (topicCounts[t.name] || 0) > 0).map((topic, i) => {
                            const isActive = selectedTopic === topic.name;
                            const count = topicCounts[topic.name] || 0;
                            return (
                                <motion.div
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                    key={i}
                                    onClick={() => {
                                        setSelectedTopic(isActive ? 'ALL' : topic.name);
                                        setSelectedTrack(null);
                                    }}
                                    className={`p-3.5 rounded-2xl cursor-pointer transition-all border flex flex-col gap-1.5 ${
                                        isActive
                                            ? 'bg-green-500/10 dark:bg-green-500/10 border-green-500 shadow-md shadow-green-500/10'
                                            : 'bg-white dark:bg-[#0c1222] border-gray-200/50 dark:border-white/5 hover:border-green-500/30 hover:shadow-sm'
                                    }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="text-base leading-none">{topic.icon}</span>
                                        <span className={`text-[9px] font-black px-1.5 py-0.5 rounded-full ${
                                            isActive
                                                ? 'bg-green-500 text-white'
                                                : 'bg-gray-100 dark:bg-white/10 text-gray-500 dark:text-gray-400'
                                        }`}>{count}</span>
                                    </div>
                                    <div>
                                        <h4 className={`text-[10px] font-bold leading-tight transition-colors ${
                                            isActive ? 'text-green-600 dark:text-green-400' : 'text-gray-800 dark:text-white'
                                        }`}>{topic.name}</h4>
                                        <span className={`text-[9px] font-semibold transition-colors ${
                                            isActive ? 'text-green-500/70' : 'text-gray-400'
                                        }`}>{count} Challenges</span>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* 🏆 Interview Prep Arena */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-lg font-black text-gray-900 dark:text-white flex items-center gap-2">
                            <BadgeIcon className="w-5 h-5 text-red-500" />
                            Interview Prep Arena
                        </h3>
                        <div className="bg-white dark:bg-[#0c1222] border border-gray-200/50 dark:border-white/5 rounded-3xl p-6 shadow-sm space-y-4">
                            <div className="flex items-center justify-between border-b border-gray-100 dark:border-white/5 pb-3">
                                <div>
                                    <h4 className="text-sm font-bold text-gray-800 dark:text-gray-200">Campus Placement Pack</h4>
                                    <p className="text-[10px] text-gray-400 font-semibold mt-0.5">Commonly asked in fresher campus recruitment.</p>
                                </div>
                                <span className="text-[10px] font-black text-red-500 bg-red-500/10 px-2 py-0.5 rounded-full uppercase">Hot</span>
                            </div>
                            <div className="flex items-center justify-between border-b border-gray-100 dark:border-white/5 pb-3">
                                <div>
                                    <h4 className="text-sm font-bold text-gray-800 dark:text-gray-200">Product Company Prep</h4>
                                    <p className="text-[10px] text-gray-400 font-semibold mt-0.5">Inspired by top technology companies.</p>
                                </div>
                                <span className="text-[10px] font-black text-blue-500 bg-blue-500/10 px-2 py-0.5 rounded-full uppercase">Standard</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <h4 className="text-sm font-bold text-gray-800 dark:text-gray-200">DSA Interview Essentials</h4>
                                    <p className="text-[10px] text-gray-400 font-semibold mt-0.5">The most important coding patterns mapped.</p>
                                </div>
                                <span className="text-[10px] font-black text-green-500 bg-green-500/10 px-2 py-0.5 rounded-full uppercase">Essential</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-black text-gray-900 dark:text-white flex items-center gap-2">
                            <Flame className="w-5 h-5 text-orange-500" />
                            Special Challenge Collections
                        </h3>
                        <div className="bg-white dark:bg-[#0c1222] border border-gray-200/50 dark:border-white/5 rounded-3xl p-6 shadow-sm space-y-4">
                            <div className="flex items-center justify-between border-b border-gray-100 dark:border-white/5 pb-3">
                                <div>
                                    <h4 className="text-sm font-bold text-gray-800 dark:text-gray-200">Daily Coding Challenge</h4>
                                    <p className="text-[10px] text-gray-400 font-semibold mt-0.5">Maintain your streak by solving a daily puzzle.</p>
                                </div>
                                <button 
                                    onClick={() => {
                                        if (!user) {
                                            window.dispatchEvent(new CustomEvent('open_auth_modal'));
                                        } else {
                                            navigate('/practice/two-sum');
                                        }
                                    }} 
                                    className="text-xs font-bold text-green-400 hover:underline cursor-pointer"
                                >
                                    Solve Now
                                </button>
                            </div>
                            <div className="flex items-center justify-between border-b border-gray-100 dark:border-white/5 pb-3">
                                <div>
                                    <h4 className="text-sm font-bold text-gray-800 dark:text-gray-200">30-Day Coding Journey</h4>
                                    <p className="text-[10px] text-gray-400 font-semibold mt-0.5">Complete one challenge daily to build consistency.</p>
                                </div>
                                <span className="text-[10px] text-gray-500 font-black">Active</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <h4 className="text-sm font-bold text-gray-800 dark:text-gray-200">Weekly Challenge Series</h4>
                                    <p className="text-[10px] text-gray-400 font-semibold mt-0.5">Test your speed and logical analysis against peers.</p>
                                </div>
                                <span className="text-[10px] text-gray-500 font-black">Sundays</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 🔥 Problems Arena */}
                <div className="space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <h2 className="text-xl font-black text-gray-900 dark:text-white flex items-center gap-2">
                            <Code className="w-5.5 h-5.5 text-green-500" />
                            Problems Arena
                        </h2>
                        
                        {/* Search Bar */}
                        <div className="relative max-w-sm w-full">
                            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-400" />
                            <input 
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search problems or topics..."
                                className="w-full pl-11 pr-4 py-2.5 text-xs rounded-2xl bg-white dark:bg-[#0c1222] border border-gray-200/50 dark:border-white/5 text-gray-900 dark:text-white font-semibold outline-none focus:border-green-500 transition-all shadow-inner"
                            />
                        </div>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center text-xs">
                        {/* Difficulty Filter */}
                        <div className="flex items-center gap-1 bg-gray-100 dark:bg-white/5 p-1 rounded-xl shrink-0">
                            {['ALL', 'EASY', 'MEDIUM', 'HARD'].map(diff => (
                                <button
                                    key={diff}
                                    onClick={() => setSelectedDifficulty(diff)}
                                    className={`px-3 py-1.5 rounded-lg font-bold cursor-pointer transition-all ${
                                        selectedDifficulty === diff 
                                            ? 'bg-white dark:bg-[#0c1222] text-green-500 shadow-sm' 
                                            : 'text-gray-400 hover:text-gray-800 dark:hover:text-white'
                                    }`}
                                >
                                    {diff === 'ALL' ? 'Difficulty' : diff}
                                </button>
                            ))}
                        </div>

                        {/* Topics Filter Dropdown */}
                        <div className="relative w-full sm:w-64">
                            <select
                                value={selectedTopic}
                                onChange={(e) => setSelectedTopic(e.target.value)}
                                className="w-full px-4 py-2.5 rounded-xl bg-gray-100 dark:bg-white/5 border border-transparent dark:border-white/5 text-gray-800 dark:text-gray-200 font-bold outline-none cursor-pointer focus:border-green-500 transition-all text-xs"
                            >
                                <option value="ALL" className="dark:bg-[#0c1222]">All Topics ({problems.length})</option>
                                {topics.filter(t => t !== 'ALL').map(topic => (
                                    <option key={topic} value={topic} className="dark:bg-[#0c1222]">
                                        {topic} ({topicCounts[topic] || 0})
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Problems Table Container */}
                    <div className="bg-white dark:bg-[#0c1222] border border-gray-200/50 dark:border-white/5 rounded-3xl overflow-hidden shadow-sm">
                        {loading ? (
                            <div className="p-12 text-center text-gray-400 font-bold text-sm">
                                Loading coding challenges from database...
                            </div>
                        ) : error ? (
                            <div className="p-12 text-center text-red-500 font-bold text-sm">
                                {error}
                            </div>
                        ) : filteredProblems.length > 0 ? (
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse text-xs">
                                    <thead>
                                        <tr className="border-b border-gray-100 dark:border-white/5 text-[10px] font-black uppercase text-gray-400 tracking-wider">
                                            <th className="p-5 w-16 text-center">Status</th>
                                            <th className="p-5">Problem Title</th>
                                            <th className="p-5">Topic</th>
                                            <th className="p-5">Difficulty</th>
                                            <th className="p-5 text-right">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 dark:divide-white/5 text-gray-600 dark:text-gray-300">
                                        {filteredProblems.map((problem) => (
                                            <tr key={problem.id} className="hover:bg-slate-50/50 dark:hover:bg-white/5 transition-colors">
                                                <td className="p-5 text-center">
                                                    <div className="flex justify-center">
                                                        {getStatusIcon(problem.status)}
                                                    </div>
                                                </td>
                                                <td className="p-5 font-bold text-gray-900 dark:text-white text-sm">
                                                    {problem.title}
                                                </td>
                                                <td className="p-5 font-mono font-bold text-gray-400 uppercase tracking-wider text-[10px]">
                                                    {problem.topic}
                                                </td>
                                                <td className="p-5">
                                                    <span className={`px-2.5 py-0.5 rounded-full border text-[9px] font-black uppercase tracking-wider ${getDiffBadge(problem.difficulty)}`}>
                                                        {problem.difficulty}
                                                    </span>
                                                </td>
                                                <td className="p-5 text-right">
                                                    <button 
                                                        onClick={() => {
                                                            if (!user) {
                                                                window.dispatchEvent(new CustomEvent('open_auth_modal'));
                                                            } else {
                                                                navigate(`/practice/${problem.slug}`);
                                                            }
                                                        }}
                                                        className="px-4 py-2 rounded-xl bg-green-500/10 hover:bg-green-500/15 border border-green-500/20 text-green-600 dark:text-green-400 font-black text-[10px] uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ml-auto"
                                                    >
                                                        <span>Solve Challenge</span>
                                                        <ChevronRight className="w-3.5 h-3.5" />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <div className="p-12 text-center text-gray-400 font-bold text-sm">
                                No practice problems found matching the filters.
                            </div>
                        )}
                    </div>
                </div>

                {/* SEO Content Component rendered at the bottom */}
                <PracticeHubSEO />
            </div>
        </div>
    );
};

export default PracticeHubPage;
