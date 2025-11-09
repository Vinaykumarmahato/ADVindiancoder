
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Youtube } from 'lucide-react';
import { COURSES } from '../constants';
import { Course } from '../types';
import PageWrapper from '../components/PageWrapper';

const categories: Course['category'][] = ['Programming', 'Web', 'Backend', 'DSA', 'Career'];

const CoursesPage = () => {
    const [activeCategory, setActiveCategory] = useState<Course['category'] | 'All'>('All');

    const filteredCourses = useMemo(() => {
        if (activeCategory === 'All') return COURSES;
        return COURSES.filter(course => course.category === activeCategory);
    }, [activeCategory]);

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

    return (
        <PageWrapper>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold tracking-tight">Free Courses</h1>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">Explore our comprehensive YouTube playlists to kickstart your coding journey.</p>
                </div>

                <div className="flex justify-center flex-wrap gap-2 mb-12">
                    <button
                        onClick={() => setActiveCategory('All')}
                        className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors ${activeCategory === 'All' ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700'}`}
                    >
                        All
                    </button>
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors ${activeCategory === category ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700'}`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence>
                        {filteredCourses.map(course => (
                            <motion.div
                                key={course.id}
                                variants={itemVariants}
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white/5 dark:bg-black/20 border border-white/10 rounded-2xl overflow-hidden shadow-lg group"
                            >
                                <img src={course.thumbnail} alt={course.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                                <div className="p-6">
                                    <div className="flex flex-wrap gap-2 mb-2">
                                        {course.tags.map(tag => (
                                            <span key={tag} className="text-xs font-semibold bg-primary/10 text-primary px-2 py-1 rounded-full">{tag}</span>
                                        ))}
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{course.description}</p>
                                    <a href={course.youtubeLink} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
                                        <Youtube className="mr-2 h-5 w-5" /> Watch on YouTube
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </PageWrapper>
    );
};

export default CoursesPage;
