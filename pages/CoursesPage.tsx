import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PlayCircle, Youtube, Search, ArrowRight } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import { motion, AnimatePresence } from 'framer-motion';
import { COURSES } from '../constants';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const GlowingOrb = ({ className }: { className: string }) => (
    <div className={`absolute rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-pulse ${className}`}></div>
);

const CoursesPage = () => {
    const [activeCategory, setActiveCategory] = useState<string>('All');
    const [searchQuery, setSearchQuery] = useState('');

    const categories = ['All', ...Array.from(new Set(COURSES.map(c => c.category)))];

    const filteredCourses = COURSES.filter(course => {
        const matchesCategory = activeCategory === 'All' || course.category === activeCategory;
        const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            course.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <PageWrapper>
            <div className="bg-[#050914] text-white min-h-screen font-sans relative overflow-hidden">
                {/* Background Grid */}
                <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                {/* Header */}
                <div className="relative z-10 pt-32 pb-20 text-center px-4">
                    <GlowingOrb className="top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-600/20" />
                    <div className="max-w-4xl mx-auto relative">
                        <motion.span 
                            initial={{ opacity: 0, y: -20 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-mono text-sm tracking-widest py-2 px-6 rounded-full mb-6 inline-flex items-center gap-2 shadow-[0_0_20px_rgba(255,0,0,0.3)]"
                        >
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                            100% FREE TO WATCH
                        </motion.span>
                        <motion.h1 
                            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 1 }}
                            className="text-5xl md:text-7xl font-black mb-6 tracking-tighter"
                        >
                            Open Source <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Mastery.</span>
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 1 }}
                            className="text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto font-light"
                        >
                            Access our entire catalog of past live masterclasses and zero-to-hero YouTube playlists without paying a single rupee.
                        </motion.p>
                    </div>
                </div>

                {/* Filter & Search */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-12">
                    <motion.div variants={fadeUp} initial="hidden" animate="show" className="flex flex-col md:flex-row gap-6 items-center justify-between">
                        <div className="flex gap-3 w-full md:w-auto overflow-x-auto no-scrollbar pb-4 md:pb-0">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-6 py-3 rounded-full font-semibold whitespace-nowrap transition-all duration-300 backdrop-blur-xl border ${
                                        activeCategory === cat
                                            ? 'bg-white text-black border-transparent shadow-[0_0_20px_rgba(255,255,255,0.4)]'
                                            : 'bg-white/5 text-gray-400 border-white/10 hover:border-white/30 hover:text-white'
                                    }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                        <div className="relative w-full md:w-96 group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 group-focus-within:text-white transition-colors" />
                            <input
                                type="text"
                                placeholder="Search the vault..."
                                className="w-full pl-12 pr-4 py-4 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Courses Grid */}
                <div className="relative z-10 py-8 px-4 max-w-7xl mx-auto mb-32">
                    <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <AnimatePresence>
                            {filteredCourses.map((course) => (
                                <motion.div
                                    key={course.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95, y: -20 }}
                                    transition={{ duration: 0.4 }}
                                    className="bg-white/5 backdrop-blur-2xl rounded-[2rem] border border-white/10 hover:border-white/30 transition-all duration-500 overflow-hidden flex flex-col group shadow-2xl shadow-black/50 hover:-translate-y-2"
                                >
                                    <div className="relative h-56 overflow-hidden">
                                        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 transition-colors duration-500 z-10 flex items-center justify-center">
                                            <PlayCircle className="w-16 h-16 text-white opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 shadow-2xl rounded-full drop-shadow-[0_0_15px_rgba(255,255,255,0.7)]" />
                                        </div>
                                        <img 
                                            src={course.thumbnail} 
                                            alt={course.title} 
                                            className="w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-1 transition-all duration-700"
                                        />
                                        <div className="absolute top-4 left-4 z-20">
                                            <span className="bg-black/50 backdrop-blur-md border border-white/10 text-white text-xs font-mono px-3 py-1.5 rounded-full flex items-center gap-2">
                                                <Youtube className="w-3 h-3 text-red-500" /> Free
                                            </span>
                                        </div>
                                    </div>
                                    
                                    <div className="p-8 flex flex-col flex-grow relative">
                                        <div className="absolute top-0 right-8 w-20 h-20 bg-primary/20 blur-[50px] group-hover:bg-primary/40 transition-colors"></div>
                                        <div className="flex gap-2 mb-4 flex-wrap relative z-10">
                                            {course.tags.map((tag, i) => (
                                                <span key={i} className="text-xs font-semibold text-gray-300 bg-white/10 border border-white/5 px-2.5 py-1 rounded-md">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <h3 className="text-2xl font-bold mb-3 text-white line-clamp-2 relative z-10">{course.title}</h3>
                                        <p className="text-gray-400 mb-8 flex-grow line-clamp-3 font-light leading-relaxed relative z-10">
                                            {course.description}
                                        </p>
                                        
                                        {course.youtubeLink.startsWith('/') ? (
                                            <Link 
                                                to={course.youtubeLink} 
                                                className="w-full flex items-center justify-center gap-2 bg-white/10 hover:bg-red-600 hover:border-red-500 text-white font-bold py-4 rounded-xl transition-all duration-300 border border-white/5 relative z-10 shadow-[0_0_15px_rgba(255,0,0,0)] hover:shadow-[0_0_20px_rgba(255,0,0,0.4)]"
                                            >
                                                <PlayCircle className="w-5 h-5 text-white" /> View Playlist
                                            </Link>
                                        ) : (
                                            <a 
                                                href={course.youtubeLink} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="w-full flex items-center justify-center gap-2 bg-white/10 hover:bg-red-600 hover:border-red-500 text-white font-bold py-4 rounded-xl transition-all duration-300 border border-white/5 relative z-10 shadow-[0_0_15px_rgba(255,0,0,0)] hover:shadow-[0_0_20px_rgba(255,0,0,0.4)]"
                                            >
                                                <Youtube className="w-5 h-5 text-red-500 group-hover:text-white transition-colors" /> Watch on YouTube
                                            </a>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                    
                    {filteredCourses.length === 0 && (
                        <div className="text-center py-32 text-gray-500 border border-white/5 rounded-3xl bg-white/5 backdrop-blur-lg mt-8">
                            <Search className="w-16 h-16 mx-auto mb-4 opacity-50" />
                            <p className="text-2xl font-light">No courses found matching your criteria.</p>
                        </div>
                    )}
                </div>
                
                {/* Upsell to Live Masterclass */}
                <div className="relative py-24 px-4 overflow-hidden border-t border-white/10">
                    <GlowingOrb className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20" />
                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                            <h2 className="text-4xl md:text-6xl font-black mb-6">Need Live Feedback?</h2>
                            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light">
                                Pre-recorded videos are incredible for grasping basics. But true mastery comes from building alongside a seasoned mentor.
                            </p>
                            <Link to="/masterclass" className="inline-flex items-center gap-2 bg-white text-black font-extrabold text-lg h-16 px-10 rounded-full hover:scale-105 hover:bg-gray-100 transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                                See Live Masterclasses <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </PageWrapper>
    );
};

export default CoursesPage;