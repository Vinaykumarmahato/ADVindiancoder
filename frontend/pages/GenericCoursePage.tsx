import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';
import { PlayCircle, BookOpen, Code2, Lightbulb, ChevronLeft, ExternalLink, Library, GraduationCap, Zap, Star, Loader2, Check, CheckCircle } from 'lucide-react';
import { COURSES } from '../constants';
import { Skeleton } from '../components/Skeleton';
import SEO from '../components/SEO';
import { useAuth } from '../contexts/AuthContext';
import { Toast } from '../components/Toast';
import { motion, AnimatePresence } from 'framer-motion';

const GenericCoursePage = () => {
    const { courseId } = useParams<{ courseId: string }>();
    const [isLoading, setIsLoading] = useState(true);
    const { user, refreshUser } = useAuth();
    const [enrolling, setEnrolling] = useState(false);
    const [updatingProgress, setUpdatingProgress] = useState(false);
    const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' | 'info'; hint?: string } | null>(null);

    // Find course info from constants
    const courseIdStr = courseId?.toLowerCase() || '';
    const courseInfo = COURSES.find(c => 
        c.id.toString().toLowerCase() === courseIdStr || 
        c.youtubeLink.toLowerCase().includes(courseIdStr)
    );

    const isEnrolled = () => {
        if (!user || !courseInfo) return false;
        const progressList = user.courseProgressList || [];
        return progressList.some(p => p.courseId === courseInfo.id.toString()) || 
               user.enrolledCourses.some(cName => cName.toLowerCase().includes(courseInfo.id.toString().toLowerCase()));
    };

    const getCourseProgress = () => {
        if (!user || !courseInfo) return 0;
        const progress = (user.courseProgressList || []).find(p => p.courseId === courseInfo.id);
        return progress ? progress.progressPercent : 0;
    };

    const handleEnroll = async () => {
        if (!user) {
            window.dispatchEvent(new Event('open_auth_modal'));
            return;
        }
        if (!courseInfo) return;

        setEnrolling(true);
        const token = localStorage.getItem('adv_coder_token');

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:8080'}/api/enrollments/enroll`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    courseId: courseInfo.id,
                    courseName: courseInfo.title
                })
            });

            if (response.ok) {
                await refreshUser();
                setToast({
                    message: `Successfully enrolled in ${courseInfo.title}!`,
                    type: 'success'
                });
            } else {
                const errData = await response.json().catch(() => ({ message: 'Enrollment request failed.' }));
                setToast({
                    message: `Enrollment Failed: ${errData.message}`,
                    type: 'error',
                    hint: "Ensure your Spring Boot backend server is running and restarted."
                });
            }
        } catch (error: any) {
            setToast({
                message: `Connection Error: ${error.message || error}`,
                type: 'error'
            });
        } finally {
            setEnrolling(false);
        }
    };

    const handleUpdateProgress = async (newProgress: number) => {
        if (!user || !courseInfo) return;

        setUpdatingProgress(true);
        const token = localStorage.getItem('adv_coder_token');

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:8080'}/api/enrollments/update-progress`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    courseId: courseInfo.id,
                    progressPercent: newProgress,
                    completedVideos: newProgress === 100 ? "1" : "",
                    assessmentScore: newProgress === 100 ? 100 : 0
                })
            });

            if (response.ok) {
                await refreshUser();
                setToast({
                    message: newProgress === 100 ? 'Course marked as completed!' : 'Progress updated!',
                    type: 'success'
                });
            } else {
                setToast({
                    message: 'Failed to update progress.',
                    type: 'error'
                });
            }
        } catch (error: any) {
            setToast({
                message: `Connection Error: ${error.message || error}`,
                type: 'error'
            });
        } finally {
            setUpdatingProgress(false);
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 600);
        return () => clearTimeout(timer);
    }, [courseId]);

    // Helper to extract YouTube ID
    const getYoutubeId = (url: string) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    };

    const youtubeId = courseInfo ? getYoutubeId(courseInfo.youtubeLink) : null;

    if (isLoading) {
        return (
            <PageWrapper>
                <div className="min-h-screen bg-white dark:bg-[#050914] flex items-center justify-center transition-colors duration-300">
                    <div className="space-y-4 text-center">
                        <Skeleton className="h-12 w-64 mx-auto rounded-full" />
                        <Skeleton className="h-4 w-48 mx-auto rounded-full" />
                    </div>
                </div>
            </PageWrapper>
        );
    }

    if (!courseInfo) {
        return (
            <PageWrapper>
                <div className="min-h-screen bg-white dark:bg-[#050914] flex flex-col items-center justify-center px-4 text-center transition-colors duration-300">
                    <div className="w-20 h-20 bg-red-500/10 rounded-3xl flex items-center justify-center mb-6">
                        <Zap className="w-10 h-10 text-red-500" />
                    </div>
                    <h1 className="text-3xl font-black text-gray-950 dark:text-white mb-4">Course Not Found</h1>
                    <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md">The course you're looking for doesn't exist or has been moved.</p>
                    <Link to="/courses" className="px-8 py-3 bg-red-600 text-white font-black text-xs uppercase tracking-widest rounded-xl hover:bg-red-500 transition-all shadow-md">
                        Back to Courses
                    </Link>
                </div>
            </PageWrapper>
        );
    }

    return (
        <PageWrapper>
            <SEO 
                title={courseInfo.title} 
                description={courseInfo.description}
                ogType="course"
            />
            <div className="min-h-screen bg-white dark:bg-[#050914] text-gray-900 dark:text-white overflow-x-hidden relative transition-colors duration-300">
                {/* Background Glow */}
                <div className="absolute top-0 w-full h-[500px] bg-gradient-to-b from-red-700/10 to-transparent pointer-events-none" />

                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
                    {/* Back Button */}
                    <div className="flex items-center gap-4 mb-8">
                        <Link to="/courses" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-950 dark:hover:text-white transition-colors text-sm group">
                            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            Back to Courses
                        </Link>
                    </div>

                     {/* Course Header */}
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-[10px] font-black text-red-650 dark:text-red-400 uppercase tracking-widest">
                                {courseInfo.category}
                            </span>
                            {courseInfo.rating && (
                                <span className="flex items-center gap-1 text-xs text-yellow-600 dark:text-yellow-500 font-bold">
                                    <Star size={12} className="fill-current" /> {courseInfo.rating.toFixed(1)}
                                </span>
                            )}
                        </div>
                        <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight max-w-4xl text-gray-950 dark:text-white">
                            {courseInfo.title}
                        </h1>
                        <p className="text-gray-655 dark:text-gray-400 text-lg md:text-xl max-w-3xl leading-relaxed">
                            {courseInfo.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
                        {/* Main Content Area */}
                        <div className="xl:col-span-2 space-y-8">
                             {/* Video Player */}
                            <div className="bg-black rounded-3xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-sm dark:shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                                <div className="aspect-video relative group">
                                    {youtubeId ? (
                                        <iframe
                                            className="w-full h-full"
                                            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=0&rel=0`}
                                            title={courseInfo.title}
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />
                                    ) : (
                                        <div className="w-full h-full flex flex-col items-center justify-center bg-gray-50 dark:bg-white/5 gap-4">
                                            <PlayCircle className="w-16 h-16 text-red-600" />
                                            <a 
                                                href={courseInfo.youtubeLink} 
                                                target="_blank" rel="noopener noreferrer"
                                                className="px-6 py-2 bg-red-600 rounded-full text-xs font-black uppercase tracking-widest"
                                            >
                                                Watch on YouTube
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>

                             {/* Info Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-900 dark:text-white">
                                <div className="bg-white dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 p-8 rounded-3xl shadow-sm dark:shadow-md">
                                    <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6">
                                        <BookOpen className="w-6 h-6 text-blue-650 dark:text-blue-500" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-4 text-gray-950 dark:text-white">Course Curriculum</h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                                        This course covers all essential concepts, starting from the basics and moving towards advanced implementation and real-world projects.
                                    </p>
                                    <ul className="space-y-3">
                                        {courseInfo.tags.map((tag, i) => (
                                            <li key={i} className="flex items-center gap-2 text-xs text-gray-650 dark:text-gray-300 font-bold">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                                {tag}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-white dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 p-8 rounded-3xl shadow-sm dark:shadow-md">
                                    <div className="w-12 h-12 bg-yellow-500/10 rounded-2xl flex items-center justify-center mb-6">
                                        <Lightbulb className="w-6 h-6 text-yellow-600 dark:text-yellow-500" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-4 text-gray-955 dark:text-white">Learning Outcomes</h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                        By the end of this tutorial, you will have a deep understanding of {courseInfo.category} and be able to build your own projects.
                                    </p>
                                    <div className="mt-8 pt-6 border-t border-gray-200 dark:border-white/5">
                                        <Link to="/adv-lab" className="flex items-center justify-between text-xs font-black uppercase tracking-widest text-red-600 dark:text-red-500 hover:text-red-700 dark:hover:text-red-400 transition-colors">
                                            Try in ADV Lab <ExternalLink className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                         {/* Sidebar Area */}
                        <div className="space-y-6 text-gray-900 dark:text-white">
                            <div className="bg-white dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 p-8 rounded-3xl sticky top-32 shadow-sm dark:shadow-md">
                                <h4 className="text-xs font-black uppercase tracking-[0.2em] text-gray-600 dark:text-gray-500 mb-8">Course Info</h4>
                                
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-600 dark:text-gray-400">Instructor</span>
                                        <span className="text-sm font-bold text-gray-955 dark:text-white">Vinay</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-600 dark:text-gray-400">Level</span>
                                        <span className="text-sm font-bold text-gray-955 dark:text-white">All Levels</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-600 dark:text-gray-400">Access</span>
                                        <span className="text-sm font-bold text-green-550 dark:text-green-500">Free Forever</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-600 dark:text-gray-400">Enrolled</span>
                                        <span className="text-sm font-bold text-gray-955 dark:text-white">{courseInfo.enrolledCount?.toLocaleString() || '1,000+'}</span>
                                    </div>
                                </div>

                                 <div className="mt-8 pt-8 border-t border-gray-200 dark:border-white/5 space-y-6">
                                    <h5 className="text-xs font-black uppercase tracking-widest text-gray-600 dark:text-gray-400">Your Progress</h5>
                                    
                                    {!isEnrolled() ? (
                                        <button
                                            onClick={handleEnroll}
                                            disabled={enrolling}
                                            className="w-full py-3 bg-gradient-to-r from-red-600 to-orange-500 text-white font-black text-xs uppercase tracking-widest rounded-xl hover:brightness-110 transition-all flex items-center justify-center gap-2 cursor-pointer"
                                        >
                                            {enrolling ? <Loader2 className="w-4 h-4 animate-spin" /> : <Check className="w-4 h-4" />}
                                            Enroll to Track Progress
                                        </button>
                                    ) : (
                                        <div className="space-y-4">
                                            <div className="flex justify-between text-xs font-mono text-gray-600 dark:text-gray-400">
                                                <span>Status</span>
                                                <span className={getCourseProgress() === 100 ? "text-green-600 dark:text-green-400 font-extrabold" : "text-amber-600 dark:text-amber-500 font-extrabold"}>
                                                    {getCourseProgress() === 100 ? "Completed 🎉" : "In Progress"}
                                                </span>
                                            </div>
                                            
                                            {/* Progress Bar */}
                                            <div className="w-full h-2 rounded-full bg-gray-100 dark:bg-white/5 overflow-hidden">
                                                <div 
                                                    className="h-full bg-gradient-to-r from-red-600 to-orange-500 transition-all duration-500" 
                                                    style={{ width: `${getCourseProgress()}%` }}
                                                />
                                            </div>
                                            
                                            <button
                                                onClick={() => handleUpdateProgress(getCourseProgress() === 100 ? 0 : 100)}
                                                disabled={updatingProgress}
                                                className={`w-full py-3 rounded-xl font-black text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 border cursor-pointer ${
                                                    getCourseProgress() === 100 
                                                        ? 'bg-transparent border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/5 text-gray-805 dark:text-white' 
                                                        : 'bg-gray-950 dark:bg-white text-white dark:text-black border-transparent hover:bg-gray-900 dark:hover:bg-gray-100'
                                                }`}
                                            >
                                                {updatingProgress ? (
                                                    <Loader2 className="w-4 h-4 animate-spin" />
                                                ) : getCourseProgress() === 100 ? (
                                                    <>Reset Progress</>
                                                ) : (
                                                    <><CheckCircle className="w-4 h-4" /> Mark as Completed</>
                                                )}
                                            </button>
                                        </div>
                                    )}
                                </div>

                                <div className="mt-10 space-y-4">
                                    <a 
                                        href={courseInfo.youtubeLink}
                                        target="_blank" rel="noopener noreferrer"
                                        className="w-full py-4 bg-red-600 text-white font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-red-500 transition-all flex items-center justify-center gap-3 shadow-lg shadow-red-600/20"
                                    >
                                        <PlayCircle className="w-5 h-5" />
                                        Watch Full Video
                                    </a>
                                    <Link 
                                        to="/adv-lab"
                                        className="w-full py-4 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-850 dark:text-white font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-gray-100 dark:hover:bg-white/10 transition-all flex items-center justify-center gap-3"
                                    >
                                        <Code2 className="w-5 h-5" />
                                        Code Playground
                                    </Link>
                                </div>

                                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-white/5">
                                    <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400 text-[10px] font-bold uppercase tracking-widest">
                                        <Library className="w-4 h-4" /> Shared via ADV Indian Coder
                                    </div>
                                </div>
                            </div>
                        </div>
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

export default GenericCoursePage;
