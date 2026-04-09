import React, { useState, useMemo } from 'react';
import { AnimatePresence } from 'framer-motion';
import { MotionButton, MotionDiv } from '../components/motion';
import { Youtube, Clock } from 'lucide-react';

interface Course {
    id: number;
    title: string;
    description: string;
    category: 'Programming' | 'Web' | 'Backend' | 'DSA' | 'Career';
    tags: string[];
    youtubeLink: string;
    thumbnail: string;
    isComingSoon?: boolean;
}

const YOUTUBE_CHANNEL_LINK = 'https://www.youtube.com/@ADVIndianCoder-i9y';

const LIVE_VIDEOS: Course[] = [
    {
        id: 101,
        title: 'Engineering in India is a Trap No One Talks About This!',
        description: 'The Dark Truth No One Talks About: 83% job loss and 83% useless jobs!',
        category: 'Career',
        tags: ['Career', 'Engineering', 'Jobs'],
        youtubeLink: 'https://youtu.be/NFhKdwdBvyw',
        thumbnail: 'https://placehold.co/1280x720/1e293b/ef4444?text=Engineering+Trap',
    },
    {
        id: 102,
        title: 'GSoC 2026 Full Guide: How to Apply, Timeline, Skills, & Secret Tips',
        description: 'Get Selected in GSoC 2026 | Get 2.5 Lakh by Google',
        category: 'Career',
        tags: ['GSOC', 'Internship', 'Google'],
        youtubeLink: 'https://youtu.be/QQvae70PC_k',
        thumbnail: 'https://placehold.co/1280x720/1e293b/ef4444?text=GSoC+2026+Guide',
    },
    {
        id: 103,
        title: 'Become a Top 1% Learner by 2026 - Just Follow This System',
        description: 'BECOME a Top 1% | 1st, 2nd & 3rd YEAR ENGINEERING STUDENT',
        category: 'Career',
        tags: ['Self-Improvement', 'Student', 'System'],
        youtubeLink: 'https://youtu.be/XuyH-f-0-_8',
        thumbnail: 'https://placehold.co/1280x720/1e293b/ef4444?text=Top+1%25+Learner',
    },
    {
        id: 104,
        title: 'Data Analyst Roadmap 2026 | The Truth No One Tells You About...',
        description: 'DATA ANALYST ROADMAP 2026 | The Truth No One Tells You About',
        category: 'Career',
        tags: ['Data Analyst', 'Roadmap', 'Jobs'],
        youtubeLink: 'https://youtu.be/SQ5molhb4GY',
        thumbnail: 'https://placehold.co/1280x720/1e293b/ef4444?text=Data+Analyst+Roadmap',
    },
    {
        id: 105,
        title: 'LinkedIn Masterclass',
        description: 'Complete LinkedIn profile and growth masterclass for professionals.',
        category: 'Career',
        tags: ['LinkedIn', 'Career', 'Profile'],
        youtubeLink: 'https://youtu.be/2DwvB9gsVw0',
        thumbnail: 'https://placehold.co/1280x720/1e293b/ef4444?text=LinkedIn+Masterclass',
    },
    {
        id: 106,
        title: 'How to Create an ATS Friendly Resume',
        description: 'Step-by-step guide to make your resume ATS friendly and get more interviews.',
        category: 'Career',
        tags: ['Resume', 'Career', 'ATS'],
        youtubeLink: 'https://youtu.be/yIahHYjkIjs',
        thumbnail: 'https://placehold.co/1280x720/1e293b/f87171?text=ATS+Resume+Guide',
    },
    {
        id: 107,
        title: 'From No Phone to Tech Startup Founder | Vinay Kumar\'s Real Story',
        description: 'FROM NOTHING TO TECH FOUNDER | Vinay Kumar\'s Real Story',
        category: 'Career',
        tags: ['Startup', 'Founder', 'Inspiration'],
        youtubeLink: 'https://youtu.be/nZCTzkV0QAY',
        thumbnail: 'https://placehold.co/1280x720/1e293b/ef4444?text=Startup+Founder+Story',
    },
];

const COMING_SOON_COURSES: Course[] = [
    { id: 201, title: 'Java Full Stack Development Roadmap', description: 'Complete roadmap and tutorial for Java Full Stack.', category: 'Web', tags: ['Java', 'Spring', 'Full Stack'], youtubeLink: YOUTUBE_CHANNEL_LINK, thumbnail: 'https://placehold.co/1280x720/0c4a6e/93c5fd?text=Java+Full+Stack', isComingSoon: true },
    { id: 202, title: 'Data Science Masterclass', description: 'In-depth Data Science and Machine Learning concepts.', category: 'Programming', tags: ['Data Science', 'Python', 'ML'], youtubeLink: YOUTUBE_CHANNEL_LINK, thumbnail: 'https://placehold.co/1280x720/0c4a6e/93c5fd?text=Data+Science+ML', isComingSoon: true },
    { id: 203, title: 'DSA in Java', description: 'Data Structures and Algorithms focused on Java.', category: 'DSA', tags: ['Java', 'DSA', 'Algorithms'], youtubeLink: YOUTUBE_CHANNEL_LINK, thumbnail: 'https://placehold.co/1280x720/0c4a6e/93c5fd?text=DSA+in+Java', isComingSoon: true },
    { id: 204, title: 'Core Java Programming', description: 'Fundamental concepts of Java programming.', category: 'Programming', tags: ['Java', 'Programming', 'Basics'], youtubeLink: YOUTUBE_CHANNEL_LINK, thumbnail: 'https://placehold.co/1280x720/0c4a6e/93c5fd?text=Core+Java', isComingSoon: true },
];

const ALL_CONTENT: Course[] = [
    ...LIVE_VIDEOS,
    ...COMING_SOON_COURSES,
];

const categories: Course['category'][] = ['Programming', 'Web', 'Backend', 'DSA', 'Career'];

// --- Main CoursesPage Component (Now including Theme Logic) ---

const CoursesPage = () => {
    // Course Filtering Logic
    const [activeCategory, setActiveCategory] = useState<Course['category'] | 'All' | 'Coming Soon'>('All');

    const filteredCourses = useMemo(() => {
        let list = ALL_CONTENT;

        if (activeCategory === 'All') {
            return list.filter(course => !course.isComingSoon);
        } else if (activeCategory === 'Coming Soon') {
            return list.filter(course => course.isComingSoon);
        }

        return list.filter(course => course.category === activeCategory);

    }, [activeCategory]);

    // 3. Framer Motion Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    // 4. Component Render
    return (
        // Main container (theme handled globally by Header/ThemeContext)
        <div className="min-h-screen font-sans transition-colors duration-500 bg-gray-50 dark:bg-black">
            <main className="pb-16 relative" id="courses">
                {/* Background decorative elements */}
                <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-red-500/5 to-transparent pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">

                    {/* Header Section - Modern & Clean */}
                    <MotionDiv
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
                            <span className="text-gray-900 dark:text-white">Free Videos & </span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600 dark:from-red-500 dark:to-orange-500">
                                Premium Courses
                            </span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                            Master programming with our extensive library of free tutorials.
                            From basics to advanced concepts, everything you need is here.
                        </p>

                        <div className="mt-8 flex justify-center">
                            <a
                                href={YOUTUBE_CHANNEL_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center px-8 py-3 text-lg font-bold text-white bg-red-600 rounded-full shadow-lg shadow-red-600/30 hover:bg-red-500 hover:scale-105 transition-all duration-300"
                            >
                                <Youtube className="mr-2 h-6 w-6 group-hover:animate-pulse" />
                                Subscribe on YouTube
                            </a>
                        </div>
                    </MotionDiv>

                    {/* Filter Buttons - Glassmorphic Pills */}
                    <div className="flex justify-center flex-wrap gap-3 mb-16">
                        <MotionButton
                            onClick={() => setActiveCategory('All')}
                            className={`px-6 py-2.5 text-sm font-bold rounded-full transition-all duration-300 border ${activeCategory === 'All'
                                ? 'bg-red-600 border-red-600 text-white shadow-lg shadow-red-600/25 scale-105'
                                : 'bg-white/50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:border-red-500/50 hover:text-red-500 backdrop-blur-sm'
                                }`}
                            whileTap={{ scale: 0.95 }}
                        >
                            All Videos
                        </MotionButton>
                        {
                            categories.map(category => (
                                <MotionButton
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`px-6 py-2.5 text-sm font-bold rounded-full transition-all duration-300 border ${activeCategory === category
                                        ? 'bg-red-600 border-red-600 text-white shadow-lg shadow-red-600/25 scale-105'
                                        : 'bg-white/50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:border-red-500/50 hover:text-red-500 backdrop-blur-sm'
                                        } `}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {category}
                                </MotionButton>
                            ))
                        }
                        <MotionButton
                            onClick={() => setActiveCategory('Coming Soon')}
                            className={`px-6 py-2.5 text-sm font-bold rounded-full transition-all duration-300 border ${activeCategory === 'Coming Soon'
                                ? 'bg-yellow-500 border-yellow-500 text-black shadow-lg shadow-yellow-500/25 scale-105'
                                : 'bg-white/50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:border-yellow-500/50 hover:text-yellow-500 backdrop-blur-sm'
                                } `}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Clock className="inline h-4 w-4 mr-1.5" /> Coming Soon
                        </MotionButton>
                    </div >

                    {/* Course Grid - Modern Cards */}
                    < MotionDiv
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        <AnimatePresence>
                            {filteredCourses.map(course => (
                                <MotionDiv
                                    key={course.id}
                                    variants={itemVariants}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    className={`group relative rounded-3xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:border-red-500/30 dark:hover:border-red-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/10 ${course.isComingSoon ? 'opacity-75' : ''}`}
                                >
                                    {/* Coming Soon Badge */}
                                    {course.isComingSoon && (
                                        <div className="absolute top-4 right-4 bg-yellow-400/90 backdrop-blur-md text-black text-xs font-bold px-3 py-1 rounded-full z-20 shadow-lg">
                                            <Clock className="inline h-3 w-3 mr-1" /> COMING SOON
                                        </div>
                                    )}

                                    {/* Thumbnail Container */}
                                    <div className="relative aspect-video overflow-hidden">
                                        <img
                                            src={course.thumbnail}
                                            alt={course.title}
                                            className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${course.isComingSoon ? 'grayscale' : ''}`}
                                            onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'https://placehold.co/1280x720/1e293b/f87171?text=Video+Loading+Error'; }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                                        {!course.isComingSoon && (
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100">
                                                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg shadow-red-600/40 animate-pulse">
                                                    <Youtube className="w-8 h-8 text-white" fill="white" />
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            <span className="text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wide bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400 border border-red-100 dark:border-red-900/30">
                                                {course.category}
                                            </span>
                                            {course.tags.slice(0, 2).map(tag => (
                                                <span
                                                    key={tag}
                                                    className="text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wide bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400 border border-gray-200 dark:border-gray-700"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white line-clamp-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                                            {course.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-2">
                                            {course.description}
                                        </p>

                                        {/* Action Button */}
                                        <a
                                            href={course.youtubeLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`w-full flex items-center justify-center font-bold py-3 px-4 rounded-xl transition-all duration-300 ${course.isComingSoon
                                                ? 'bg-gray-100 text-gray-400 dark:bg-gray-800 dark:text-gray-600 cursor-not-allowed'
                                                : 'bg-gray-900 text-white dark:bg-white dark:text-black hover:bg-red-600 hover:text-white dark:hover:bg-red-600 dark:hover:text-white shadow-lg hover:shadow-red-600/20'
                                                } `}
                                        >
                                            {course.isComingSoon ? 'Coming Soon' : 'Watch Now'}
                                        </a>
                                    </div>
                                </MotionDiv>
                            ))}
                        </AnimatePresence>
                    </MotionDiv >

                    {/* Global Subscription CTA - Modern Glass Card */}
                    <div className="relative mt-24 p-1 rounded-3xl bg-gradient-to-r from-red-600 via-orange-500 to-red-600 animate-gradient-x">
                        <div className="bg-white dark:bg-gray-900 rounded-[22px] p-10 md:p-16 text-center backdrop-blur-xl relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                            <h2 className="text-3xl md:text-5xl font-black mb-6 text-gray-900 dark:text-white relative z-10">
                                Ready to level up your skills?
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto relative z-10">
                                Join thousands of developers mastering the craft. Get access to exclusive content and community support.
                            </p>
                            <a
                                href={YOUTUBE_CHANNEL_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative z-10 inline-flex items-center px-8 py-4 text-lg font-bold text-white bg-red-600 rounded-full shadow-xl shadow-red-600/30 hover:bg-red-500 hover:scale-105 transition-all duration-300"
                            >
                                <Youtube className="mr-2 h-6 w-6" />
                                Visit Channel
                            </a>
                        </div>
                    </div>
                </div >
            </main >
        </div >
    );
};

export default CoursesPage;