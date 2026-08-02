import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PlayCircle, Youtube, Search, ArrowRight, Share2, MessageCircle, Facebook, Instagram, Linkedin, Loader2, Plus } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import { motion, AnimatePresence } from 'framer-motion';
import { COURSES } from '../constants';
import { CardSkeleton } from '../components/Skeleton';
import { Star, Users } from 'lucide-react';
import SEO from '../components/SEO';
import { useAuth } from '../contexts/AuthContext';
import { Toast } from '../components/Toast';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const GlowingOrb = ({ className }: { className: string }) => (
    <div className={`absolute rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] opacity-20 dark:opacity-40 animate-pulse ${className}`}></div>
);

const CoursesPage = () => {
    const { user, refreshUser } = useAuth();
    const [activeCategory, setActiveCategory] = useState<string>('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [enrollingId, setEnrollingId] = useState<string | null>(null);
    const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' | 'info'; hint?: string } | null>(null);

    // Simulate loading for Skeleton demonstration
    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 800);
        return () => clearTimeout(timer);
    }, []);

    const isEnrolled = (courseId: string) => {
        if (!user) return false;
        const progressList = user.courseProgressList || [];
        return progressList.some(p => p.courseId === courseId) || 
               user.enrolledCourses.some(cName => cName.toLowerCase().includes(courseId.toLowerCase()));
    };

    const getCourseProgress = (courseId: string) => {
        if (!user) return 0;
        const progress = (user.courseProgressList || []).find(p => p.courseId === courseId);
        return progress ? progress.progressPercent : 0;
    };

    const handleEnroll = async (courseId: string, courseTitle: string) => {
        if (!user) {
            window.dispatchEvent(new Event('open_auth_modal'));
            return;
        }

        setEnrollingId(courseId);
        const token = localStorage.getItem('adv_coder_token');

        try {
            const response = await fetch('http://localhost:8080/api/enrollments/enroll', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    courseId: courseId,
                    courseName: courseTitle
                })
            });

            if (response.ok) {
                await refreshUser();
                setToast({
                    message: `Successfully enrolled in ${courseTitle}!`,
                    type: 'success'
                });
            } else {
                const errData = await response.json().catch(() => ({ message: 'Enrollment request failed.' }));
                setToast({
                    message: `Enrollment Failed: ${errData.message}`,
                    type: 'error',
                    hint: "If you haven't restarted your Spring Boot backend since the updates were added, please restart the server (mvn spring-boot:run) so Hibernate creates the 'user_course_progress' table in your MySQL database."
                });
            }
        } catch (error: any) {
            setToast({
                message: `Connection Error: ${error.message || error}`,
                type: 'error',
                hint: "Ensure your Spring Boot backend server is running on http://localhost:8080!"
            });
        } finally {
            setEnrollingId(null);
        }
    };

    const categories = ['All', ...Array.from(new Set(COURSES.map(c => c.category)))];

    const filteredCourses = COURSES.filter(course => {
        const matchesCategory = activeCategory === 'All' || course.category === activeCategory;
        const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            course.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const coursesSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Courses - ADV Indian Coder",
        "description": "Explore premium coding courses, development paths, and live cohorts. Zero to hero training for developers.",
        "url": "https://advindiancoder.com/courses"
    };

    return (
        <PageWrapper>
            <SEO 
                title="Courses" 
                description="Explore premium coding courses, development paths, and live cohorts. Zero to hero training for developers."
                schema={coursesSchema}
            />
            <div className="bg-white dark:bg-[#050914] text-gray-900 dark:text-white min-h-screen font-sans relative overflow-hidden transition-colors duration-300">
                {/* Background Grid */}
                <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                {/* Header */}
                <div className="relative z-10 pt-10 md:pt-20 pb-20 text-center px-4">
                    <GlowingOrb className="top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-600/20" />
                    <div className="max-w-4xl mx-auto relative">
                        <motion.span 
                            initial={{ opacity: 0, y: -20 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            className="bg-gray-100 dark:bg-white/10 backdrop-blur-md border border-gray-200 dark:border-white/20 text-gray-800 dark:text-white font-mono text-sm tracking-widest py-2 px-6 rounded-full mb-6 inline-flex items-center gap-2 shadow-sm dark:shadow-[0_0_20px_rgba(255,0,0,0.3)]"
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
                            className="text-lg md:text-2xl text-gray-650 dark:text-gray-400 max-w-2xl mx-auto font-light"
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
                                            ? 'bg-gray-950 dark:bg-white text-white dark:text-black border-transparent shadow-md dark:shadow-[0_0_20px_rgba(255,255,255,0.4)]'
                                            : 'bg-gray-100 dark:bg-white/5 text-gray-650 dark:text-gray-400 border-gray-250 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/30 hover:text-gray-950 dark:hover:text-white'
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
                                className="w-full pl-12 pr-4 py-4 rounded-full bg-gray-50 dark:bg-white/5 backdrop-blur-xl border border-gray-250 dark:border-white/10 text-gray-800 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Courses Grid */}
                <div className="relative z-10 py-8 px-4 max-w-7xl mx-auto mb-20">
                    <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <AnimatePresence>
                            {isLoading ? (
                                Array.from({ length: 6 }).map((_, i) => (
                                    <div key={`skeleton-${i}`} className="animate-in fade-in duration-500">
                                        <CardSkeleton />
                                    </div>
                                ))
                            ) : (
                                filteredCourses.map((course) => (
                                    <motion.div
                                        key={course.id}
                                        layout
                                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                                        transition={{ duration: 0.4 }}
                                        className="bg-white dark:bg-white/5 backdrop-blur-2xl rounded-[2rem] border border-gray-200 dark:border-white/10 hover:border-primary/20 dark:hover:border-white/30 transition-all duration-500 overflow-hidden flex flex-col group shadow-xl hover:shadow-2xl dark:shadow-black/50 hover:shadow-primary/5 hover:-translate-y-2 text-gray-900 dark:text-white"
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
                                            <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
                                                {course.isOngoing && (
                                                    <span className="bg-green-500/20 backdrop-blur-md border border-green-500/30 text-green-400 text-[10px] font-black px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-[0_0_15px_rgba(34,197,94,0.3)] animate-pulse">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
                                                        ONGOING
                                                    </span>
                                                )}
                                                <span className="bg-black/50 backdrop-blur-md border border-white/10 text-white text-[10px] font-mono px-3 py-1.5 rounded-full flex items-center gap-2">
                                                    <Youtube className="w-3 h-3 text-red-500" /> Free Playlist
                                                </span>
                                                {course.rating && (
                                                    <span className="bg-yellow-500/20 backdrop-blur-md border border-yellow-500/30 text-yellow-500 text-[10px] font-black px-3 py-1.5 rounded-full flex items-center gap-1.5">
                                                        <Star size={10} className="fill-current" /> {course.rating.toFixed(1)}
                                                    </span>
                                                )}
                                            </div>

                                            {/* Share Button Overlay */}
                                            <div className="absolute top-4 right-4 z-30 group/share">
                                                <button 
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        e.stopPropagation();
                                                    }}
                                                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center hover:bg-primary transition-all duration-300 shadow-lg relative z-50"
                                                >
                                                    <Share2 className="w-4 h-4 text-white" />
                                                </button>
                                                
                                                {/* Share Options Tooltip/Dropdown */}
                                                <div className="absolute top-12 right-0 opacity-0 invisible group-hover/share:opacity-100 group-hover/share:visible transition-all duration-300 translate-y-2 group-hover/share:translate-y-0 z-[60]">
                                                    <div className="bg-white dark:bg-[#0f172a]/95 backdrop-blur-2xl border border-gray-200 dark:border-white/10 p-2 rounded-2xl flex flex-col gap-1 shadow-2xl min-w-[140px]">
                                                        <a 
                                                            href={`https://wa.me/?text=${encodeURIComponent(`Check out this amazing course: ${course.title}\n\n${window.location.origin}/course/${course.id}`)}`}
                                                            target="_blank" rel="noopener noreferrer"
                                                            onClick={(e) => e.stopPropagation()}
                                                            className="flex items-center gap-3 px-3 py-2 hover:bg-green-500/20 rounded-xl transition-colors text-xs font-bold text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
                                                        >
                                                            <div className="w-7 h-7 rounded-lg bg-green-500/20 flex items-center justify-center"><MessageCircle size={14} /></div>
                                                            WhatsApp
                                                        </a>
                                                        <a 
                                                            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`${window.location.origin}/course/${course.id}`)}`} 
                                                            target="_blank" rel="noopener noreferrer"
                                                            onClick={(e) => e.stopPropagation()}
                                                            className="flex items-center gap-3 px-3 py-2 hover:bg-blue-500/20 rounded-xl transition-colors text-xs font-bold text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                                                        >
                                                            <div className="w-7 h-7 rounded-lg bg-blue-500/20 flex items-center justify-center"><Linkedin size={14} /></div>
                                                            LinkedIn
                                                        </a>
                                                        <a 
                                                            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`${window.location.origin}/course/${course.id}`)}`} 
                                                            target="_blank" rel="noopener noreferrer"
                                                            onClick={(e) => e.stopPropagation()}
                                                            className="flex items-center gap-3 px-3 py-2 hover:bg-blue-600/20 rounded-xl transition-colors text-xs font-bold text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500"
                                                        >
                                                            <div className="w-7 h-7 rounded-lg bg-blue-600/20 flex items-center justify-center"><Facebook size={14} /></div>
                                                            Facebook
                                                        </a>
                                                        <button 
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                e.stopPropagation();
                                                                navigator.clipboard.writeText(`${window.location.origin}/course/${course.id}`);
                                                                setToast({
                                                                    message: 'Course link copied to clipboard!',
                                                                    type: 'success'
                                                                 });
                                                            }}
                                                            className="flex items-center gap-3 px-3 py-2 hover:bg-pink-500/20 rounded-xl transition-colors text-xs font-bold text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400"
                                                        >
                                                            <div className="w-7 h-7 rounded-lg bg-pink-500/20 flex items-center justify-center"><Instagram size={14} /></div>
                                                            Instagram
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="p-8 flex flex-col flex-grow relative">
                                            <div className="absolute top-0 right-8 w-24 h-24 bg-primary/10 blur-[60px] group-hover:bg-primary/20 transition-colors"></div>
                                            
                                            <div className="flex justify-between items-center mb-4 relative z-10">
                                                <div className="flex gap-2 flex-wrap">
                                                    {course.tags.slice(0, 2).map((tag, i) => (
                                                        <span key={i} className="text-[10px] font-black uppercase tracking-widest text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-white/5 border border-gray-250 dark:border-white/10 px-2 py-0.5 rounded">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                                {course.enrolledCount && (
                                                    <div className="flex items-center gap-1.5 text-xs font-medium text-gray-500">
                                                        <Users size={14} />
                                                        <span>{course.enrolledCount.toLocaleString()} Students</span>
                                                    </div>
                                                )}
                                            </div>

                                            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white line-clamp-2 relative z-10 group-hover:text-primary transition-colors">{course.title}</h3>
                                            
                                            {isEnrolled(course.id.toString()) && (
                                                <div className="mb-6 space-y-1.5 relative z-10">
                                                    <div className="flex items-center justify-between text-[10px] font-bold text-gray-400 uppercase">
                                                        <span>Progress</span>
                                                        <span className="text-red-500 font-extrabold">{getCourseProgress(course.id.toString())}% Completed</span>
                                                    </div>
                                                    <div className="w-full h-1.5 rounded-full bg-gray-100 dark:bg-white/5 overflow-hidden">
                                                        <div 
                                                            className="h-full bg-gradient-to-r from-red-600 to-orange-500 rounded-full transition-all duration-500" 
                                                            style={{ width: `${getCourseProgress(course.id.toString())}%` }}
                                                        />
                                                    </div>
                                                </div>
                                            )}

                                            <p className="text-sm text-gray-650 dark:text-gray-400 mb-8 flex-grow line-clamp-3 font-light leading-relaxed relative z-10">
                                                {course.description}
                                            </p>
                                            
                                            {!isEnrolled(course.id.toString()) ? (
                                                <button 
                                                    onClick={() => handleEnroll(course.id.toString(), course.title)}
                                                    disabled={enrollingId === course.id.toString()}
                                                    className="w-full py-4 bg-gradient-to-r from-red-600 to-orange-500 text-white font-black rounded-xl transition-all duration-300 border border-transparent relative z-10 shadow-lg hover:brightness-110 active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
                                                >
                                                    {enrollingId === course.id.toString() ? (
                                                        <Loader2 className="w-5 h-5 animate-spin" />
                                                    ) : (
                                                        <Plus className="w-5 h-5" />
                                                    )}
                                                    Enroll Now
                                                </button>
                                            ) : (
                                                <Link 
                                                    to={course.youtubeLink.startsWith('/') ? course.youtubeLink : `/course/${course.id}`} 
                                                    className="w-full flex items-center justify-center gap-2 bg-gray-950 dark:bg-white text-white dark:text-black hover:bg-red-600 hover:text-white dark:hover:bg-red-600 dark:hover:text-white font-black py-4 rounded-xl transition-all duration-300 border border-transparent relative z-10 shadow-lg text-center"
                                                >
                                                    <PlayCircle className="w-5 h-5" /> {getCourseProgress(course.id.toString()) > 0 ? "Resume Learning" : "Start Learning"}
                                                </Link>
                                            )}
                                        </div>
                                    </motion.div>
                                ))
                            )}
                        </AnimatePresence>
                    </motion.div>
                    
                    {filteredCourses.length === 0 && (
                        <div className="text-center py-20 text-gray-500 border border-gray-250 dark:border-white/5 rounded-3xl bg-gray-50 dark:bg-white/5 backdrop-blur-lg mt-8">
                            <Search className="w-16 h-16 mx-auto mb-4 opacity-50" />
                            <p className="text-2xl font-light">No courses found matching your criteria.</p>
                        </div>
                    )}
                </div>
                
                {/* Upsell to Live Masterclass */}
                <div className="relative py-20 px-4 overflow-hidden border-t border-gray-200 dark:border-white/10">
                    <GlowingOrb className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20" />
                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                            <h2 className="text-4xl md:text-6xl font-black mb-6">Need Live Feedback?</h2>
                            <p className="text-xl text-gray-650 dark:text-gray-400 mb-10 max-w-2xl mx-auto font-light">
                                Pre-recorded videos are incredible for grasping basics. But true mastery comes from building alongside a seasoned mentor.
                            </p>
                            <Link to="/masterclass" className="inline-flex items-center gap-2 bg-gray-950 dark:bg-white text-white dark:text-black font-extrabold text-lg h-16 px-10 rounded-full hover:scale-105 hover:bg-gray-900 dark:hover:bg-gray-100 transition-all shadow-lg dark:shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                                See Live Masterclasses <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
            <AnimatePresence>
                {toast && (
                    <Toast 
                        message={toast.message} 
                        type={toast.type} 
                        hint={toast.hint} 
                        onClose={() => setToast(null)} 
                    />
                )}
            </AnimatePresence>
        </PageWrapper>
    );
};

export default CoursesPage;