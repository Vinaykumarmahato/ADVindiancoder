import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MotionButton, MotionDiv } from '../components/motion';
import { Youtube, Clock } from 'lucide-react';

// (NavBar removed) Header is provided globally by `components/Header` in App.tsx


// --- Placeholder Data & Types ---

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
        thumbnail: '/assets/ENGINEERING TRAP.png', 
    },
    {
        id: 102,
        title: 'GSoC 2026 Full Guide: How to Apply, Timeline, Skills, & Secret Tips',
        description: 'Get Selected in GSoC 2026 | Get 2.5 Lakh by Google',
        category: 'Career', 
        tags: ['GSOC', 'Internship', 'Google'],
        youtubeLink: 'https://youtu.be/QQvae70PC_k',
        thumbnail: '/assets/How To Crack GSOC in 2026.png', 
    },
    {
        id: 103,
        title: 'Become a Top 1% Learner by 2026 - Just Follow This System',
        description: 'BECOME a Top 1% | 1st, 2nd & 3rd YEAR ENGINEERING STUDENT',
        category: 'Career', 
        tags: ['Self-Improvement', 'Student', 'System'],
        youtubeLink: 'https://youtu.be/XuyH-f-0-_8',
        thumbnail: '/assets/Blue  and Yellow Modern Reaction YouTube Thumbnail.png',
    },
    {
        id: 104,
        title: 'Data Analyst Roadmap 2026 | The Truth No One Tells You About...',
        description: 'DATA ANALYST ROADMAP 2026 | The Truth No One Tells You About',
        category: 'Career', 
        tags: ['Data Analyst', 'Roadmap', 'Jobs'],
        youtubeLink: 'https://youtu.be/SQ5molhb4GY',
        thumbnail: '/assets/Data Analytics Roadmap 2026.jpg',
    },
    {
        id: 105,
        title: 'LinkedIn Masterclass',
        description: 'Complete LinkedIn profile and growth masterclass for professionals.',
        category: 'Career',
        tags: ['LinkedIn', 'Career', 'Profile'],
        youtubeLink: 'https://youtu.be/2DwvB9gsVw0',
        thumbnail: '/assets/Linkedin account crreation.png',
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
        thumbnail: '/assets/From nothing to tech founder.png',
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
        <div className="min-h-screen font-sans transition-colors duration-500">
            
            <main className="pb-16" id="courses">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    
                    {/* Header Section - Themed and High-Impact */}
                    <MotionDiv 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16 p-6 rounded-xl border-4 dark:border-red-800 border-red-200 shadow-2xl dark:shadow-red-900/40 shadow-red-200/50 dark:bg-gray-900 bg-white"
                    >
                        <h1 className="text-5xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400 dark:from-red-500 dark:to-red-400 animate-pulse">
                            FREE VIDEOS & <span className="text-gray-900 dark:text-white">COURSES</span>
                        </h1>
                        <p className="mt-4 text-xl text-gray-700 dark:text-gray-400">
                            All videos and free courses are available on my YouTube channel. For more high-quality programming tutorials and full courses, visit the channel and subscribe.
                            <a 
                                href={YOUTUBE_CHANNEL_LINK} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-red-600 dark:text-red-500 hover:text-red-400 font-bold transition-colors inline-flex items-center ml-2 border-b border-dashed dark:border-red-500 border-red-600"
                            >
                                <Youtube className="mr-1 h-5 w-5" /> Subscribe to the channel
                            </a>
                        </p>
                    </MotionDiv>

                    {/* Filter Buttons */}
                    <div className="flex justify-center flex-wrap gap-3 mb-12">
                        <MotionButton
                            onClick={() => setActiveCategory('All')}
                            className={`px-5 py-2 text-sm font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg ${
                                activeCategory === 'All' 
                                ? 'bg-red-600 text-white shadow-red-600/50' 
                                : 'bg-gray-200 dark:bg-gray-800 dark:text-gray-300 hover:bg-red-100 dark:hover:bg-red-900/30'
                            }`}
                            whileTap={{ scale: 0.95 }}
                        >
                            Live Videos (ALL)
                        </MotionButton>
                        {categories.map(category => (
                            <MotionButton
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-5 py-2 text-sm font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg ${
                                    activeCategory === category 
                                    ? 'bg-red-600 text-white shadow-red-600/50' 
                                    : 'bg-gray-200 dark:bg-gray-800 dark:text-gray-300 hover:bg-red-100 dark:hover:bg-red-900/30'
                                }`}
                                whileTap={{ scale: 0.95 }}
                            >
                                {category}
                            </MotionButton>
                        ))}
                        <MotionButton
                            onClick={() => setActiveCategory('Coming Soon')}
                            className={`px-5 py-2 text-sm font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg ${
                                activeCategory === 'Coming Soon' 
                                ? 'bg-yellow-500 text-gray-900 shadow-yellow-500/50' 
                                : 'bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-300 hover:bg-yellow-200 dark:hover:bg-yellow-800/70'
                            }`}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Clock className="inline h-4 w-4 mr-1" /> Coming Soon
                        </MotionButton>
                    </div>

                    {/* Course Grid */}
                    <MotionDiv
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
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
                                    className={`rounded-2xl overflow-hidden shadow-2xl group relative transition-all duration-300 ease-in-out ${
                                        course.isComingSoon 
                                            ? 'bg-gray-100 dark:bg-gray-800/50 border border-yellow-600/40 hover:border-yellow-500/80' 
                                            : 'bg-white dark:bg-gray-800 border border-red-700/50 hover:border-red-500/80 hover:scale-[1.02]'
                                    }`}
                                >
                                    {/* Coming Soon Badge */}
                                    {course.isComingSoon && (
                                        <div className="absolute top-0 right-0 bg-yellow-500 text-gray-900 text-xs font-black px-4 py-1 rounded-bl-xl z-10 transform rotate-1 transition duration-300 group-hover:bg-yellow-400">
                                            <Clock className="inline h-3 w-3 mr-1" /> JALDI AA RAHA HAI (Coming Soon)
                                        </div>
                                    )}
                                    
                                    {/* Thumbnail */}
                                    <div className="relative h-48">
                                        <img 
                                            src={course.thumbnail} 
                                            alt={course.title} 
                                            className={`w-full h-full object-cover transition-transform duration-500 ${course.isComingSoon ? 'opacity-40 blur-sm' : 'group-hover:scale-110'}`} 
                                            // Fallback for placeholder images
                                            onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'https://placehold.co/1280x720/1e293b/f87171?text=Video+Loading+Error'; }}
                                        />
                                        {!course.isComingSoon && (
                                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                                                <Youtube className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="red" />
                                            </div>
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <div className="flex flex-wrap gap-2 mb-3">
                                            <span className={`text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider ${
                                                course.isComingSoon 
                                                    ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300' 
                                                    : 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-300'
                                            }`}>{course.category}</span>
                                            {course.tags.map(tag => (
                                                <span 
                                                    key={tag} 
                                                    className={`text-xs font-medium px-3 py-1 rounded-full ${
                                                        course.isComingSoon 
                                                            ? 'bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-400' 
                                                            : 'bg-gray-200/50 text-gray-600 dark:bg-gray-700/50 dark:text-gray-300'
                                                    }`}
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{course.title}</h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">{course.description}</p>
                                        
                                        {/* Action Button */}
                                        <a 
                                            href={course.youtubeLink} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className={`w-full flex items-center justify-center font-black py-3 px-4 rounded-xl transition duration-300 uppercase transform ${
                                                course.isComingSoon 
                                                    ? 'bg-gray-400 text-gray-800 dark:bg-gray-600/50 dark:text-gray-300 cursor-not-allowed border dark:border-gray-500'
                                                    : 'bg-red-600 hover:bg-red-500 text-white shadow-xl shadow-red-700/30 hover:shadow-red-500/50'
                                            }`}
                                        >
                                            {course.isComingSoon ? 'Course Coming Soon' : <><Youtube className="mr-2 h-5 w-5" /> <strong>ABHI DEKHO (WATCH NOW)</strong></>}
                                        </a>

                                        {/* Subscribe CTA - Emphasis added with <strong> */}
                                        <a href={YOUTUBE_CHANNEL_LINK} target="_blank" rel="noopener noreferrer" className="w-full mt-3 block text-center text-sm font-semibold text-red-600 dark:text-red-400 hover:text-red-500 dark:hover:text-red-300 transition-colors">
                                            <strong>Subscribe Channel</strong> for more content like this
                                        </a>
                                    </div>
                                </MotionDiv>
                            ))}
                        </AnimatePresence>
                    </MotionDiv>
                    
                    {/* Global Subscription CTA - High-Impact Footer (Dangerous replaced with Advanced) */}
                    <div className="text-center mt-20 p-10 bg-red-100 dark:bg-red-900/20 rounded-2xl border-4 border-red-600 dark:border-red-600 shadow-2xl dark:shadow-red-800/50 shadow-red-300/50 backdrop-blur-sm">
                        <h2 className="text-4xl font-black mb-4 text-red-700 dark:text-red-400">For more advanced programming tutorials and courses</h2>
                        <p className="text-xl mb-8 text-gray-700 dark:text-gray-200">
                            All videos and many high-quality courses are on my YouTube channel. Subscribe to stay updated with new tutorials, course launches, and programming guides.
                        </p>
                        <a 
                            href={YOUTUBE_CHANNEL_LINK} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center justify-center bg-red-600 hover:bg-red-500 text-white font-black py-4 px-10 rounded-full text-xl transition duration-300 transform hover:scale-105 shadow-2xl shadow-red-700/50 border-4 border-red-400"
                        >
                            <Youtube className="mr-3 h-6 w-6" /> Subscribe to ADV Indian Coder on YouTube
                        </a>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default CoursesPage;