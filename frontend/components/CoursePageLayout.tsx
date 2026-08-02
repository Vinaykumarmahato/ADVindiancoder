import React from 'react';
import PageWrapper from './PageWrapper';
import { BookOpen, Video, Code, Check, CheckCircle2 } from 'lucide-react';

interface CoursePageLayoutProps {
    title: string;
    description: string;
    topics: string[];
    icon?: React.ElementType;
    colorClass: string; // e.g., "orange", "blue", "yellow"
    children?: React.ReactNode; // For custom content like code examples
    activeTopicIndex?: number;
    onTopicClick?: (index: number) => void;
}

const CoursePageLayout: React.FC<CoursePageLayoutProps> = ({ title, description, topics, icon: Icon, colorClass, children, activeTopicIndex, onTopicClick }) => {
    // Progress Tracking
    const storageKey = `course_progress_${title.toLowerCase().replace(/\s+/g, '_')}`;
    const [completedTopics, setCompletedTopics] = React.useState<number[]>([]);
    const [isLoaded, setIsLoaded] = React.useState(false);

    React.useEffect(() => {
        const loadProgress = async () => {
            const token = localStorage.getItem('adv_coder_token');
            if (!token) {
                setIsLoaded(true);
                return;
            }
            try {
                const response = await fetch('http://localhost:8080/api/enrollments/progress', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                if (response.ok) {
                    const data = await response.json();
                    const currentProgress = data.find((p: any) => p.courseId === storageKey);
                    if (currentProgress && currentProgress.completedTopics) {
                        const parsed = currentProgress.completedTopics.split(',').filter(Boolean).map(Number);
                        setCompletedTopics(parsed);
                    }
                }
            } catch (e) {
                console.error("Failed to load progress from DB", e);
            } finally {
                setIsLoaded(true);
            }
        };
        loadProgress();
    }, [storageKey]);

    const syncProgressToDb = async (updatedTopics: number[]) => {
        const token = localStorage.getItem('adv_coder_token');
        if (!token) return;

        const percent = topics.length ? Math.round((updatedTopics.length / topics.length) * 100) : 0;
        const completedTopicsStr = updatedTopics.join(',');

        try {
            await fetch('http://localhost:8080/api/enrollments/update-progress', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    courseId: storageKey,
                    progressPercent: percent,
                    completedTopics: completedTopicsStr
                })
            });
        } catch (e) {
            console.error("Failed to sync progress to DB", e);
        }
    };

    const toggleTopicCompletion = (index: number) => {
        setCompletedTopics(prev => {
            const updated = prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index];
            syncProgressToDb(updated);
            return updated;
        });
    };

    const completionPercent = topics.length ? Math.round((completedTopics.length / topics.length) * 100) : 0;

    const colorMap: Record<string, {
        text: string;
        bg: string;
        border: string;
        gradientFrom: string;
        gradientTo: string;
        shadow: string;
        hoverBg: string;
        hoverText: string;
        hoverBorder: string;
    }> = {
        orange: { text: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-500', gradientFrom: 'from-orange-600', gradientTo: 'to-yellow-500', shadow: 'shadow-orange-900/20', hoverBg: 'hover:bg-orange-50', hoverText: 'hover:text-orange-600', hoverBorder: 'hover:border-orange-100' },
        blue: { text: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-500', gradientFrom: 'from-blue-600', gradientTo: 'to-cyan-500', shadow: 'shadow-blue-900/20', hoverBg: 'hover:bg-blue-50', hoverText: 'hover:text-blue-600', hoverBorder: 'hover:border-blue-100' },
        yellow: { text: 'text-yellow-500', bg: 'bg-yellow-50', border: 'border-yellow-500', gradientFrom: 'from-yellow-500', gradientTo: 'to-orange-400', shadow: 'shadow-yellow-900/20', hoverBg: 'hover:bg-yellow-50', hoverText: 'hover:text-yellow-600', hoverBorder: 'hover:border-yellow-100' },
        green: { text: 'text-green-600', bg: 'bg-green-50', border: 'border-green-500', gradientFrom: 'from-green-600', gradientTo: 'to-emerald-500', shadow: 'shadow-green-900/20', hoverBg: 'hover:bg-green-50', hoverText: 'hover:text-green-600', hoverBorder: 'hover:border-green-100' },
        red: { text: 'text-red-600', bg: 'bg-red-50', border: 'border-red-500', gradientFrom: 'from-red-600', gradientTo: 'to-rose-500', shadow: 'shadow-red-900/20', hoverBg: 'hover:bg-red-50', hoverText: 'hover:text-red-600', hoverBorder: 'hover:border-red-100' },
        purple: { text: 'text-purple-600', bg: 'bg-purple-50', border: 'border-purple-500', gradientFrom: 'from-purple-600', gradientTo: 'to-indigo-500', shadow: 'shadow-purple-900/20', hoverBg: 'hover:bg-purple-50', hoverText: 'hover:text-purple-600', hoverBorder: 'hover:border-purple-100' },
        cyan: { text: 'text-cyan-600', bg: 'bg-cyan-50', border: 'border-cyan-500', gradientFrom: 'from-cyan-600', gradientTo: 'to-blue-500', shadow: 'shadow-cyan-900/20', hoverBg: 'hover:bg-cyan-50', hoverText: 'hover:text-cyan-600', hoverBorder: 'hover:border-cyan-100' },
        indigo: { text: 'text-indigo-600', bg: 'bg-indigo-50', border: 'border-indigo-500', gradientFrom: 'from-indigo-600', gradientTo: 'to-purple-500', shadow: 'shadow-indigo-900/20', hoverBg: 'hover:bg-indigo-50', hoverText: 'hover:text-indigo-600', hoverBorder: 'hover:border-indigo-100' },
        pink: { text: 'text-pink-600', bg: 'bg-pink-50', border: 'border-pink-500', gradientFrom: 'from-pink-600', gradientTo: 'to-rose-500', shadow: 'shadow-pink-900/20', hoverBg: 'hover:bg-pink-50', hoverText: 'hover:text-pink-600', hoverBorder: 'hover:border-pink-100' },
        gray: { text: 'text-gray-600', bg: 'bg-gray-50', border: 'border-gray-500', gradientFrom: 'from-gray-600', gradientTo: 'to-gray-500', shadow: 'shadow-gray-900/20', hoverBg: 'hover:bg-gray-50', hoverText: 'hover:text-gray-600', hoverBorder: 'hover:border-gray-100' },
    };

    const colors = colorMap[colorClass] || colorMap['gray'];

    return (
        <PageWrapper>
            <div className="min-h-screen bg-gray-50 dark:bg-black relative">
                {/* Background decorative elements */}
                <div className={`absolute top-0 right-0 w-1/2 h-96 bg-gradient-to-b ${colors.gradientFrom}/5 to-transparent pointer-events-none`} />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        {/* Sidebar / Table of Contents */}
                        <div className="lg:col-span-1">
                            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-gray-200/50 dark:border-gray-800/50 sticky top-32 max-h-[80vh] overflow-y-auto custom-scrollbar">
                                <h3 className="font-black text-lg mb-4 flex items-center text-gray-900 dark:text-white sticky top-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl py-2 z-10">
                                    {Icon && <Icon className={`w-5 h-5 mr-3 ${colors.text}`} />}
                                    {title}
                                </h3>

                                {/* Progress Indicator */}
                                <div className="mb-6 bg-gray-200 dark:bg-gray-800 rounded-full h-2 overflow-hidden border border-gray-200/50 dark:border-gray-700/50">
                                    <div 
                                        className={`h-full bg-gradient-to-r ${colors.gradientFrom} ${colors.gradientTo} transition-all duration-500`}
                                        style={{ width: `${completionPercent}%` }}
                                    ></div>
                                </div>
                                <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-wider text-gray-500 mb-6 px-1">
                                    <span>Progress</span>
                                    <span>{completionPercent}%</span>
                                </div>

                                <ul className="space-y-1">
                                    {topics.map((topic, index) => {
                                        const slug = topic.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
                                        const isActive = activeTopicIndex === index;
                                        const isCompleted = completedTopics.includes(index);
                                        const baseClasses = `block w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 border border-transparent`;
                                        const activeClasses = `${colors.bg} ${colors.text} ${colors.border} dark:bg-gray-800 dark:text-white`;
                                        const inactiveClasses = `text-gray-600 dark:text-gray-400 ${colors.hoverBg} dark:hover:bg-gray-800 ${colors.hoverText} dark:hover:text-white ${colors.hoverBorder} dark:hover:border-gray-700`;

                                        return (
                                            <li key={index}>
                                                {onTopicClick ? (
                                                    <button
                                                        onClick={() => onTopicClick(index)}
                                                        className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses} flex items-center justify-between group/item`}
                                                    >
                                                        <div className="flex items-center min-w-0">
                                                            <span className={`mr-2 shrink-0 ${isActive ? 'opacity-100 font-bold' : 'opacity-50'}`}>{index + 1}.</span> 
                                                            <span className="truncate">{topic}</span>
                                                        </div>
                                                        {isCompleted && <Check className="w-4 h-4 ml-2 text-green-500 shrink-0" />}
                                                    </button>
                                                ) : (
                                                    <a
                                                        href={`#${slug}`}
                                                        className={`${baseClasses} ${inactiveClasses} flex items-center justify-between`}
                                                    >
                                                        <div className="flex items-center min-w-0">
                                                            <span className="mr-2 opacity-50 shrink-0">{index + 1}.</span> 
                                                            <span className="truncate">{topic}</span>
                                                        </div>
                                                        {isCompleted && <Check className="w-4 h-4 ml-2 text-green-500 shrink-0" />}
                                                    </a>
                                                )}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="lg:col-span-3">
                            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200/50 dark:border-gray-800/50 min-h-[60vh]">
                                <h1 className={`text-4xl md:text-5xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r ${colors.gradientFrom} ${colors.gradientTo}`}>{title}</h1>
                                <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">{description}</p>

                                <div className="prose dark:prose-invert max-w-none">
                                    <div className={`bg-gradient-to-r ${colors.bg} to-transparent dark:from-gray-800 dark:to-transparent border-l-4 ${colors.border} p-6 rounded-r-xl mb-10`}>
                                        <p className={`font-medium ${colors.text} dark:text-gray-200 flex items-start`}>
                                            <span className="text-2xl mr-4">💡</span>
                                            <span>Welcome to the {title} course! This comprehensive guide will take you from basics to advanced concepts.</span>
                                        </p>
                                    </div>

                                    <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-900 dark:text-white">
                                        <Video className={`w-7 h-7 mr-3 ${colors.text}`} />
                                        Video Introduction
                                    </h2>
                                    <div className={`aspect-video bg-black rounded-2xl mb-10 flex items-center justify-center shadow-2xl ${colors.shadow} border border-gray-800 relative overflow-hidden group cursor-pointer`}>
                                        <div className={`absolute inset-0 bg-gradient-to-tr ${colors.gradientFrom}/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                                        <div className={`w-20 h-20 ${colors.bg.replace('bg-', 'bg-').replace('50', '600')} rounded-full flex items-center justify-center shadow-lg shadow-black/40 group-hover:scale-110 transition-transform duration-300 z-10`}>
                                            <Video className="w-10 h-10 text-white fill-current" />
                                        </div>
                                    </div>

                                    {children}

                                    {/* Navigation Buttons */}
                                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
                                        <div className="w-full sm:w-1/3">
                                            {activeTopicIndex !== undefined && activeTopicIndex > 0 && onTopicClick ? (
                                                <button
                                                    onClick={() => onTopicClick(activeTopicIndex - 1)}
                                                    className="w-full flex items-center justify-center px-6 py-4 rounded-xl text-base font-bold transition-all duration-200 bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 border border-transparent dark:border-gray-700"
                                                >
                                                    ← Previous
                                                </button>
                                            ) : (
                                                <div />
                                            )}
                                        </div>

                                        {activeTopicIndex !== undefined && onTopicClick && (
                                            <button
                                                onClick={() => toggleTopicCompletion(activeTopicIndex)}
                                                className={`px-6 py-4 rounded-xl text-base font-bold transition-all duration-200 flex items-center gap-2 border shadow-md active:scale-95 ${
                                                    completedTopics.includes(activeTopicIndex)
                                                        ? 'bg-green-600 hover:bg-green-700 text-white border-transparent'
                                                        : 'bg-white hover:bg-gray-50 text-gray-700 border-gray-300 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-700'
                                                }`}
                                            >
                                                <CheckCircle2 className={`w-5 h-5 ${completedTopics.includes(activeTopicIndex) ? 'text-white' : 'text-gray-400'}`} />
                                                <span>{completedTopics.includes(activeTopicIndex) ? 'Completed' : 'Mark as Complete'}</span>
                                            </button>
                                        )}

                                        <div className="w-full sm:w-1/3 text-right">
                                            {activeTopicIndex !== undefined && onTopicClick && activeTopicIndex < topics.length - 1 ? (
                                                <button
                                                    onClick={() => {
                                                        if (!completedTopics.includes(activeTopicIndex)) {
                                                            setCompletedTopics(prev => [...prev, activeTopicIndex]);
                                                        }
                                                        onTopicClick(activeTopicIndex + 1);
                                                    }}
                                                    className={`w-full flex items-center justify-center px-6 py-4 rounded-xl text-base font-bold text-white shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 ${colors.bg.replace('bg-', 'bg-').replace('50', '600')} hover:brightness-110`}
                                                >
                                                    Next →
                                                </button>
                                            ) : (
                                                <div />
                                            )}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageWrapper>
    );
};

export default CoursePageLayout;
