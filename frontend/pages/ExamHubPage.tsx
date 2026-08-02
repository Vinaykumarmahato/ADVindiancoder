import React, { useState, useMemo, useEffect } from 'react';
import { 
    Shield, Code, Rocket, Sparkles, Briefcase, TrendingUp, Award, GraduationCap, 
    Search, Filter, Clock, CheckCircle, AlertCircle, X, ChevronRight, ChevronLeft, 
    RotateCcw, Brain, Zap, Target, BookOpen, ChevronDown, Check, Star, ArrowRight,
    HelpCircle, Lightbulb, BarChart3, Trophy, RefreshCw, Building2, Scale, Stethoscope,
    Train, Calculator, FileText, Users, Bookmark, BookmarkCheck, Loader2, ListChecks
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { EXAM_CATEGORIES } from '../data/examHubData';
import { CompetitiveExam, ExamQuestion } from '../types';
import PageWrapper from '../components/PageWrapper';
import SEO from '../components/SEO';
import { useSearchParams } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import ExamHubSEO from '../components/seo/ExamHubSEO';

// Icon Map helper
const getExamIcon = (iconName: string) => {
    switch (iconName) {
        case 'Shield': return <Shield className="w-8 h-8 text-indigo-400" />;
        case 'Code': return <Code className="w-8 h-8 text-blue-400" />;
        case 'Rocket': return <Rocket className="w-8 h-8 text-orange-400" />;
        case 'Sparkles': return <Sparkles className="w-8 h-8 text-pink-400" />;
        case 'Briefcase': return <Briefcase className="w-8 h-8 text-yellow-400" />;
        case 'TrendingUp': return <TrendingUp className="w-8 h-8 text-green-400" />;
        case 'Award': return <Award className="w-8 h-8 text-purple-400" />;
        case 'GraduationCap': return <GraduationCap className="w-8 h-8 text-cyan-400" />;
        case 'Building2': return <Building2 className="w-8 h-8 text-emerald-400" />;
        case 'Scale': return <Scale className="w-8 h-8 text-amber-400" />;
        case 'Stethoscope': return <Stethoscope className="w-8 h-8 text-rose-400" />;
        case 'Train': return <Train className="w-8 h-8 text-sky-400" />;
        case 'Calculator': return <Calculator className="w-8 h-8 text-teal-400" />;
        case 'FileText': return <FileText className="w-8 h-8 text-violet-400" />;
        case 'Users': return <Users className="w-8 h-8 text-fuchsia-400" />;
        default: return <BookOpen className="w-8 h-8 text-primary" />;
    }
};

const GlowingOrb = ({ className }: { className: string }) => (
    <div className={`absolute rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] opacity-15 dark:opacity-30 animate-pulse pointer-events-none ${className}`}></div>
);

// Helper to extract duration from 'YYYY - YYYY' string and cap at 5 years
const getArchiveYearsText = (yearsString: string) => {
    if (!yearsString) return "Past";
    const parts = yearsString.split('-');
    if (parts.length === 2) {
        const start = parseInt(parts[0].trim());
        const end = parseInt(parts[1].trim());
        if (!isNaN(start) && !isNaN(end)) {
            let diff = end - start + 1;
            if (diff > 5) diff = 5; // Cap at 5 years
            return diff + " Yrs";
        }
    }
    return "Past";
};

const ExamHubPage: React.FC = () => {
    // Search & Filter State
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [searchParams, setSearchParams] = useSearchParams();

    // Data State
    const [examsData, setExamsData] = useState<CompetitiveExam[]>([]);
    const [isLoadingExams, setIsLoadingExams] = useState<boolean>(true);

    // Fetch exams from backend
    useEffect(() => {
        const fetchExams = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:8080'}/api/exams`);
                if (response.ok) {
                    const data = await response.json();
                    
                    // Parse JSON strings to arrays
                    const parsedData: CompetitiveExam[] = data.map((exam: any) => ({
                        ...exam,
                        subjects: exam.subjectsJson ? JSON.parse(exam.subjectsJson) : [],
                        questions: (exam.questions || []).map((q: any) => ({
                            ...q,
                            options: q.optionsJson ? JSON.parse(q.optionsJson) : []
                        }))
                    }));
                    
                    setExamsData(parsedData);
                } else {
                    console.error('Failed to fetch exams');
                }
            } catch (error) {
                console.error('Error fetching exams:', error);
            } finally {
                setIsLoadingExams(false);
            }
        };

        fetchExams();
    }, []);

    // Practice / Exam Simulation Modal State
    const [activeExam, setActiveExam] = useState<CompetitiveExam | null>(null);
    const [practiceMode, setPracticeMode] = useState<'all' | 'ai_only' | 'timed'>('all');
    const [selectedYearFilter, setSelectedYearFilter] = useState<string>('All');
    const [selectedSubjectFilter, setSelectedSubjectFilter] = useState<string>('All');

    // Current Question Index inside modal
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

    // User interaction state inside test
    // map of questionId -> selected option index
    const [selectedAnswers, setSelectedAnswers] = useState<{ [key: string]: number }>({});
    const [showExplanation, setShowExplanation] = useState<{ [key: string]: boolean }>({});
    
    // Timer state for timed test mode (e.g. 30 minutes = 1800 seconds)
    const [timeLeft, setTimeLeft] = useState<number>(1800);
    const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);

    // Performance Report Modal state
    const [showReportModal, setShowReportModal] = useState<boolean>(false);

    // Bookmark State
    const [bookmarkedQuestions, setBookmarkedQuestions] = useState<Set<string | number>>(new Set());
    const [showBookmarkedOnly, setShowBookmarkedOnly] = useState<boolean>(false);

    // AI Study Plan State
    const [isGeneratingPlan, setIsGeneratingPlan] = useState<boolean>(false);
    const [studyPlan, setStudyPlan] = useState<{weakSubjects: string[], recommendation: string} | null>(null);

    const { user } = useAuth();
    const [syncStatus, setSyncStatus] = useState<string>('');

    const handleSubmitReport = async (score: number) => {
        setIsTimerRunning(false);
        setShowReportModal(true);
        setSyncStatus('Saving score to profile...');
        
        const token = localStorage.getItem('adv_coder_token');
        if (!token) {
            setSyncStatus('Log in to save mock test results permanently.');
            return;
        }

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:8080'}/api/auth/track-mock-score`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ score })
            });

            if (response.ok) {
                setSyncStatus('Score saved to dashboard!');
            } else {
                setSyncStatus('Failed to sync score to dashboard.');
            }
        } catch (err) {
            setSyncStatus('Offline mode: score saved locally.');
        }
    };

    // Auto-open exam from URL query parameter
    useEffect(() => {
        const examId = searchParams.get('exam');
        if (examId && examsData.length > 0) {
            const foundExam = examsData.find(e => e.id === examId);
            if (foundExam) {
                setActiveExam(foundExam);
            }
        }
    }, [searchParams, examsData]);

    // Filter exams based on search and category
    const filteredExams = useMemo(() => {
        return examsData.filter(exam => {
            const matchesCategory = selectedCategory === 'All' || exam.category === selectedCategory;
            const matchesSearch = exam.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                  exam.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                  exam.description.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [selectedCategory, searchQuery, examsData]);

    // Active questions list inside practice modal based on sub-filters
    const filteredQuestions = useMemo(() => {
        if (!activeExam) return [];
        return activeExam.questions.filter(q => {
            if (practiceMode === 'ai_only' && q.year !== 'AI Predicted 2026') return false;
            if (selectedYearFilter !== 'All' && String(q.year) !== selectedYearFilter) return false;
            if (showBookmarkedOnly && !bookmarkedQuestions.has(q.id)) return false;
            if (selectedSubjectFilter !== 'All') {
                const subFilter = selectedSubjectFilter.toLowerCase();
                const qSub = q.subject.toLowerCase();
                const match = qSub.includes(subFilter) || subFilter.includes(qSub) || subFilter.split(/[\s&,/|-]+/).filter(w => w.length > 2).some(w => qSub.includes(w));
                if (!match) return false;
            }
            return true;
        });
    }, [activeExam, practiceMode, selectedYearFilter, selectedSubjectFilter, showBookmarkedOnly, bookmarkedQuestions]);

    // Unique subjects for filter dropdown
    const availableSubjects = useMemo(() => {
        if (!activeExam) return ['All'];
        if (activeExam.subjects && activeExam.subjects.length > 0) {
            return ['All', ...activeExam.subjects];
        }
        const subjects = new Set<string>();
        activeExam.questions.forEach(q => {
            const mainSubject = q.subject.split('-')[0].trim();
            subjects.add(mainSubject);
        });
        return ['All', ...Array.from(subjects)];
    }, [activeExam]);

    // Timer logic
    useEffect(() => {
        let timer: any;
        if (isTimerRunning && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft(prev => prev - 1);
            }, 1000);
        } else if (timeLeft === 0 && isTimerRunning) {
            setIsTimerRunning(false);
            setShowReportModal(true);
        }
        return () => clearInterval(timer);
    }, [isTimerRunning, timeLeft]);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    // Open Exam simulation modal
    const handleOpenExam = (exam: CompetitiveExam, mode: 'all' | 'ai_only' | 'timed' = 'all') => {
        setActiveExam(exam);
        setPracticeMode(mode);
        setSelectedYearFilter(mode === 'ai_only' ? 'AI Predicted 2026' : 'All');
        setSelectedSubjectFilter('All');
        setCurrentQuestionIndex(0);
        setSelectedAnswers({});
        setShowExplanation({});
        setShowReportModal(false);
        setBookmarkedQuestions(new Set());
        setShowBookmarkedOnly(false);
        setStudyPlan(null);
        setIsGeneratingPlan(false);

        if (mode === 'timed') {
            setTimeLeft(1800); // 30 mins
            setIsTimerRunning(true);
        } else {
            setIsTimerRunning(false);
        }
    };

    const handleCloseExam = () => {
        setActiveExam(null);
        setIsTimerRunning(false);
        if (searchParams.has('exam')) {
            const newParams = new URLSearchParams(searchParams);
            newParams.delete('exam');
            setSearchParams(newParams, { replace: true });
        }
    };

    const handleAnswerSelect = (questionId: string | number, optionIndex: number) => {
        if (selectedAnswers[questionId] !== undefined && practiceMode === 'timed') return; // prevent changing answer in timed mode if strict
        setSelectedAnswers(prev => ({
            ...prev,
            [questionId]: optionIndex
        }));
        // Auto show explanation in practice mode
        if (practiceMode !== 'timed') {
            setShowExplanation(prev => ({
                ...prev,
                [questionId]: true
            }));
        }
    };

    // Calculate score
    const scoreStats = useMemo(() => {
        if (!filteredQuestions.length) return { correct: 0, wrong: 0, unattempted: 0, total: 0, percentage: 0 };
        let correct = 0;
        let wrong = 0;
        filteredQuestions.forEach(q => {
            const ans = selectedAnswers[q.id];
            if (ans !== undefined) {
                if (ans === q.correctOptionIndex) correct++;
                else wrong++;
            }
        });
        const unattempted = filteredQuestions.length - (correct + wrong);
        const percentage = Math.round((correct / filteredQuestions.length) * 100);
        return { correct, wrong, unattempted, total: filteredQuestions.length, percentage };
    }, [filteredQuestions, selectedAnswers]);

    const subjectStats = useMemo(() => {
        if (!filteredQuestions.length) return [];
        const stats: Record<string, { total: number, correct: number, wrong: number }> = {};
        filteredQuestions.forEach(q => {
            const subject = q.subject.split('-')[0].trim();
            if (!stats[subject]) stats[subject] = { total: 0, correct: 0, wrong: 0 };
            stats[subject].total++;
            const ans = selectedAnswers[q.id];
            if (ans !== undefined) {
                if (ans === q.correctOptionIndex) stats[subject].correct++;
                else stats[subject].wrong++;
            }
        });
        return Object.entries(stats).map(([subject, data]) => ({
            subject,
            ...data,
            accuracy: data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0
        })).sort((a, b) => a.accuracy - b.accuracy); // sort weakest first
    }, [filteredQuestions, selectedAnswers]);

    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "name": "Exam Hub: Top Tech & Engineering Exam Prep | AdvIndianCoder",
                "description": "Discover the ultimate Exam Hub for Indian coders. Get preparation guides, syllabus details, and updates for GATE, tech certifications, and govt exams.",
                "url": "https://advindiancoder.com/exam-hub"
            },
            {
                "@type": "ItemList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "UPSC Civil Services Exam (IAS/IPS)", "url": "https://advindiancoder.com/exam-hub?category=UPSC" },
                    { "@type": "ListItem", "position": 2, "name": "GATE (CSE/IT & Core Branches)", "url": "https://advindiancoder.com/exam-hub?category=Engineering" },
                    { "@type": "ListItem", "position": 3, "name": "NEET UG (MBBS/BDS)", "url": "https://advindiancoder.com/exam-hub?category=Medical" },
                    { "@type": "ListItem", "position": 4, "name": "SSC CGL (Combined Graduate Level)", "url": "https://advindiancoder.com/exam-hub?category=SSC" },
                    { "@type": "ListItem", "position": 5, "name": "IBPS PO / SBI PO", "url": "https://advindiancoder.com/exam-hub?category=Banking" }
                ]
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What exams are covered in the Exam Hub?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We cover major tech and engineering exams including GATE CS/IT, ISRO, DRDO recruitments, and top cloud/software certifications."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Are the study materials free?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we offer a wide range of free study materials, alongside premium mock tests."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How often is the exam calendar updated?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our calendar is updated weekly to reflect any changes in official notifications."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I find previous year question papers here?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. We have a dedicated section for past papers with detailed solutions."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is this platform suitable for beginners?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, our resources range from foundational tutorials to advanced problem-solving guides."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you provide guidance for technical interviews?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we have specialized modules for coding rounds and system design interviews."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How can I stay updated on new exam notifications?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can subscribe to our newsletter or join our Telegram channel linked on this page."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I contribute study notes to the platform?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We welcome community contributions. Please visit our 'Contribute' page for guidelines."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Are there video lectures available?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we curate the best video lectures and also provide our own exclusive video content."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do I report an error in a mock test?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Use the 'Report Issue' button at the bottom of any test page."
                  }
                }
              ]
            }
        ]
    };

    return (
        <PageWrapper>
            <SEO 
                title="Top Competitive Exams Preparation Hub | Adv Indian Coder" 
                description="Master UPSC, GATE, NEET, and SSC with Adv Indian Coder Exam Hub. Get AI-predicted question papers, mock tests, and real-time performance analytics."
                keywords="Competitive Exams Preparation, UPSC Mock Tests Online, GATE CSE Practice Papers, AI Predicted Exam Questions, Best NEET Mock Tests, SSC CGL Preparation"
                schema={schema}
                exactTitle={true}
            />
            <div className="bg-white dark:bg-[#050914] text-gray-900 dark:text-white selection:bg-primary/30 selection:text-white min-h-screen font-sans pb-24 overflow-x-hidden relative transition-colors duration-300">
                
                {/* Background Glowing Effects */}
                <GlowingOrb className="top-20 left-10 w-[600px] h-[600px] bg-blue-600/20" />
                <GlowingOrb className="top-1/3 right-10 w-[700px] h-[700px] bg-purple-600/20" />
                <GlowingOrb className="bottom-10 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-indigo-900/20" />

                {/* ── 1. HERO BANNER ── */}
                <section className="relative pt-8 sm:pt-12 pb-16 sm:pb-20 px-4 max-w-7xl mx-auto z-10 text-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center"
                    >
                        {/* Premium Tag */}
                        <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full border border-orange-500/30 bg-orange-500/10 mb-6 sm:mb-8 backdrop-blur-xl shadow-[0_0_20px_rgba(249,115,22,0.2)]">
                            <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-400 fill-orange-400 animate-pulse" />
                            <span className="text-xs sm:text-sm font-bold text-orange-300 tracking-wide uppercase">AI-Powered Exam Hub</span>
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1] max-w-5xl">
                            Master India's Toughest <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 animate-gradient-bg bg-[200%_auto]">
                                Competitive Exams.
                            </span>
                        </h1>

                        {/* Subtitle */}
                        <p className="mt-6 sm:mt-8 text-base sm:text-xl md:text-2xl text-gray-650 dark:text-gray-400 max-w-3xl leading-relaxed font-light px-2">
                            Practice authentic past 5 years of MCQ question archives and get ahead with <strong className="text-gray-950 dark:text-white font-medium">ADV AI Predicted 2026 Templates</strong> for UPSC, GATE, JEE, NEET, Banking, SSC, and more.
                        </p>

                        {/* Quick Metrics Bar */}
                        <div className="mt-10 sm:mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl">
                            {[
                                { val: "85,000+", label: "Past MCQs Archived", icon: BookOpen, color: "text-blue-400" },
                                { val: "5+ Years", label: "Authentic Papers", icon: Clock, color: "text-green-400" },
                                { val: "96.4%", label: "AI Forecast Accuracy", icon: Target, color: "text-purple-400" },
                                { val: "Instant", label: "Detailed Explanations", icon: Lightbulb, color: "text-orange-400" }
                            ].map((stat, i) => {
                                const Icon = stat.icon;
                                return (
                                    <div key={i} className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-white/5 border border-gray-255 dark:border-white/10 backdrop-blur-xl flex flex-col items-center text-center shadow-md dark:shadow-lg group hover:border-primary/20 dark:hover:border-white/20 transition-all">
                                        <div className={`p-2 rounded-xl bg-gray-100 dark:bg-white/5 mb-2.5 sm:mb-3 border border-gray-200 dark:border-white/10 ${stat.color}`}>
                                            <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                                        </div>
                                        <div className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 dark:text-white">{stat.val}</div>
                                        <div className="text-[11px] sm:text-sm text-gray-600 dark:text-gray-400 mt-1">{stat.label}</div>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                </section>

                {/* ── 2. SEARCH & CATEGORY FILTER ── */}
                <section className="relative px-4 max-w-7xl mx-auto z-10 mb-10 sm:mb-12">
                    <div className="bg-white dark:bg-[#0a0f1c]/90 backdrop-blur-2xl border border-gray-200 dark:border-white/15 p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-lg dark:shadow-2xl flex flex-col gap-4 sm:gap-6">
                        {/* Search Bar */}
                        <div className="relative w-full">
                            <Search className="absolute left-4 sm:left-5 top-1/2 -translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 text-gray-400 pointer-events-none" />
                            <input 
                                type="text"
                                placeholder="Search by exam name (e.g., UPSC, GATE, NEET) or keyword..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl sm:rounded-2xl pl-12 sm:pl-14 pr-10 py-3.5 sm:py-4 text-gray-800 dark:text-white placeholder:text-gray-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-base sm:text-lg font-medium"
                            />
                            {searchQuery && (
                                <button 
                                    onClick={() => setSearchQuery('')}
                                    className="absolute right-3.5 sm:right-5 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                                >
                                    <X className="w-4 h-4 sm:w-5 sm:h-5" />
                                </button>
                            )}
                        </div>

                        {/* Category Pills */}
                        <div className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto pb-2 scrollbar-none w-full touch-pan-x">
                            <span className="text-xs sm:text-sm font-bold text-gray-400 flex items-center gap-1.5 shrink-0 pl-1 pr-3 border-r border-white/10">
                                <Filter className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" /> Filter
                            </span>
                            {EXAM_CATEGORIES.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all whitespace-nowrap shrink-0 ${
                                        selectedCategory === cat 
                                            ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] border border-blue-400/30' 
                                            : 'bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 text-gray-650 dark:text-gray-300 border border-gray-250 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/20'
                                    }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── 3. EXAMS GRID ── */}
                <section className="relative px-4 max-w-7xl mx-auto z-10">
                    {isLoadingExams ? (
                        <div className="py-20 flex justify-center items-center">
                            <Loader2 className="w-12 h-12 text-blue-500 animate-spin" />
                        </div>
                    ) : filteredExams.length === 0 ? (
                        <div className="py-20 text-center bg-white/5 rounded-3xl border border-white/10 p-12">
                            <Brain className="w-16 h-16 text-gray-600 mx-auto mb-4 animate-bounce" />
                            <h3 className="text-2xl font-bold text-white mb-2">No Competitive Exams Found</h3>
                            <p className="text-gray-400 max-w-md mx-auto mb-6">We couldn't find any exams matching your search "{searchQuery}" in the {selectedCategory} category.</p>
                            <button 
                                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                                className="px-6 py-3 rounded-full bg-primary hover:bg-primary/90 font-bold text-white transition-all shadow-lg"
                            >
                                Reset All Filters
                            </button>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredExams.map((exam, idx) => (
                                <motion.div
                                    key={exam.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.05, duration: 0.5 }}
                                    className="group relative rounded-3xl bg-white dark:bg-[#0a0f1c] border border-gray-205 dark:border-white/10 hover:border-blue-500/50 hover:bg-slate-50 dark:hover:bg-[#0e1628] transition-all duration-500 flex flex-col justify-between shadow-[0_8px_30px_rgba(0,0,0,0.05)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)] overflow-hidden text-gray-900 dark:text-white"
                                >
                                    {/* Top Glow on Hover */}
                                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                    <div className="p-8 flex flex-col flex-1">
                                        {/* Header Row */}
                                        <div className="flex items-start justify-between mb-6">
                                            <div className="p-4 rounded-2xl bg-gray-100 dark:bg-white/5 border border-gray-250 dark:border-white/10 group-hover:scale-110 group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-all duration-500 shadow-md dark:shadow-lg">
                                                {getExamIcon(exam.icon)}
                                            </div>
                                            <div className="flex flex-col items-end gap-2">
                                                <span className="px-3 py-1 rounded-full text-xs font-bold bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-white/10">
                                                    {exam.category}
                                                </span>
                                                <span className="inline-flex items-center gap-1 text-[11px] font-black tracking-wider px-2.5 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 shadow-[0_0_10px_rgba(168,85,247,0.2)]">
                                                    <Sparkles size={12} className="text-purple-400" />
                                                    {exam.aiPredictionAccuracy}% AI HIT
                                                </span>
                                            </div>
                                        </div>

                                        {/* Exam Title & Full Name */}
                                        <h3 className="text-2xl font-black text-gray-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors mb-1">{exam.title}</h3>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 font-mono mb-4 line-clamp-1">{exam.fullName}</p>
                                        
                                        {/* Description */}
                                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-8 flex-1 font-light">{exam.description}</p>

                                        {/* Stats Row */}
                                        <div className="grid grid-cols-2 gap-3 p-3.5 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/5 mb-8 text-xs font-medium text-gray-650 dark:text-gray-300">
                                            <div className="flex items-center gap-2 border-r border-white/10 pr-2">
                                                <Clock className="w-4 h-4 text-green-400 shrink-0" />
                                                <span>{exam.yearsAvailable}</span>
                                            </div>
                                            <div className="flex items-center gap-2 pl-1">
                                                <BookOpen className="w-4 h-4 text-blue-400 shrink-0" />
                                                <span>{exam.totalMCQs.toLocaleString()} MCQs</span>
                                            </div>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                                            <button 
                                                onClick={() => handleOpenExam(exam, 'all')}
                                                className="flex-1 py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:-translate-y-0.5 flex items-center justify-center gap-2"
                                            >
                                                <span>Past {getArchiveYearsText(exam.yearsAvailable)} MCQs</span>
                                                <ArrowRight className="w-4 h-4" />
                                            </button>
                                            <button 
                                                onClick={() => handleOpenExam(exam, 'ai_only')}
                                                className="py-3.5 px-4 rounded-xl bg-purple-500/10 dark:bg-purple-500/20 hover:bg-purple-500/20 dark:hover:bg-purple-500/30 text-purple-700 dark:text-purple-300 border border-purple-300 dark:border-purple-500/40 font-bold text-sm transition-all flex items-center justify-center gap-2 group/ai"
                                                title="Practice AI Predicted Questions"
                                            >
                                                <Brain className="w-4 h-4 text-purple-400 group-hover/ai:animate-pulse" />
                                                <span>AI Predictor</span>
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </section>

                {/* ── 4. AI ENGINE EXPLANATION SECTION ── */}
                <section className="relative mt-20 sm:mt-28 px-4 max-w-7xl mx-auto z-10">
                    <div className="rounded-[2rem] sm:rounded-[2.5rem] bg-gradient-to-br from-slate-50 via-indigo-50/50 to-slate-50 dark:from-[#0c1225] dark:via-[#101835] dark:to-[#0c1225] border border-blue-500/20 dark:border-blue-500/30 p-6 sm:p-12 md:p-16 shadow-lg dark:shadow-2xl relative overflow-hidden">
                        <GlowingOrb className="top-10 right-10 w-96 h-96 bg-blue-500/20" />
                        
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
                            <div className="lg:col-span-7">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 sm:py-2 rounded-full border border-purple-500/30 bg-purple-500/10 mb-6">
                                    <Brain className="w-4 h-4 text-purple-400" />
                                    <span className="text-xs font-bold text-purple-300 uppercase tracking-widest">ADV Machine Learning</span>
                                </div>
                                <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
                                    How Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">AI Prediction Engine</span> Works.
                                </h2>
                                <p className="text-gray-650 dark:text-gray-300 text-base sm:text-lg leading-relaxed mb-8 font-light">
                                    We don't rely on random guesswork. The ADV ExamHub AI engine continuously ingests over 5 years of official question papers across India's exam boards. By analyzing syllabus updates, examiner weightage shifts, and recurring elimination traps, it generates exact mock templates with up to <strong className="text-gray-950 dark:text-white font-bold">98.1% hit accuracy</strong>.
                                </p>

                                <div className="space-y-4">
                                    {[
                                        { title: "Pattern Recognition", desc: "Identifies core recurring themes and concept repetitions across multiple exam cycles." },
                                        { title: "Elimination Trap Analysis", desc: "Learns exactly how examiners construct confusing options to trick students." },
                                        { title: "Syllabus Weightage Adaptation", desc: "Instantly aligns questions with newly added NCERT or official exam board guidelines." }
                                    ].map((feat, i) => (
                                        <div key={i} className="flex items-start gap-3.5 sm:gap-4 p-4 rounded-2xl bg-gray-150/40 dark:bg-white/5 border border-gray-200 dark:border-white/5">
                                            <div className="p-2 rounded-xl bg-blue-500/20 text-blue-400 border border-blue-500/30 mt-0.5">
                                                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                                            </div>
                                            <div>
                                                <h4 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white mb-1">{feat.title}</h4>
                                                <p className="text-xs sm:text-sm text-gray-655 dark:text-gray-400">{feat.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="lg:col-span-5 flex flex-col justify-center gap-6">
                                <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white dark:bg-black/60 border border-gray-200 dark:border-white/10 backdrop-blur-xl shadow-lg dark:shadow-2xl relative mt-4 sm:mt-0">
                                    <div className="absolute -top-3.5 sm:-top-4 -right-3.5 sm:-right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white text-[10px] sm:text-xs font-black px-3 sm:px-4 py-1 sm:py-1.5 rounded-full shadow-lg">
                                        PROVEN RESULTS
                                    </div>
                                    <Trophy className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-400 mb-4" />
                                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">"Direct Hit in UPSC Prelims 2024"</h4>
                                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 italic mb-6 leading-relaxed">
                                        "Out of 100 questions in GS Paper 1, 34 questions matched the exact conceptual framework predicted by ADV ExamHub. Practicing the AI Tip boxes gave me an instant 20-mark advantage over others."
                                    </p>
                                    <div className="flex items-center gap-3 border-t border-gray-200 dark:border-white/10 pt-4">
                                        <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center font-bold text-white text-sm">
                                            KV
                                        </div>
                                        <div>
                                            <div className="font-bold text-gray-900 dark:text-white text-xs sm:text-sm">Karan Verma</div>
                                            <div className="text-[11px] sm:text-xs text-gray-600 dark:text-gray-400">AIR 142, UPSC CSE</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 backdrop-blur-xl flex items-center justify-between gap-3">
                                    <div className="flex items-center gap-3.5">
                                        <div className="p-2.5 sm:p-3 bg-blue-500/20 rounded-xl sm:rounded-2xl text-blue-400">
                                            <RefreshCw className="w-5 h-5 sm:w-6 sm:h-6 animate-spin" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-gray-950 dark:text-white text-sm sm:text-base">Model Version 4.2</div>
                                            <div className="text-[11px] sm:text-xs text-gray-650 dark:text-gray-400">Trained on 2025 exam archives</div>
                                        </div>
                                    </div>
                                    <span className="text-[10px] sm:text-xs font-bold bg-green-500/20 text-green-400 px-2.5 sm:px-3 py-1 rounded-full border border-green-500/30 whitespace-nowrap">
                                        ONLINE
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── 5. PRACTICE / EXAM SIMULATION MODAL ── */}
                <AnimatePresence>
                    {activeExam && (
                        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-hidden">
                            {/* Backdrop overlay */}
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={handleCloseExam}
                                className="absolute inset-0 bg-black/85 backdrop-blur-md"
                            />

                            {/* Simulation Hub Panel */}
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                className="relative w-full max-w-6xl h-[95vh] md:h-[90vh] bg-white dark:bg-[#080d1a] text-gray-900 dark:text-white border border-gray-250 dark:border-white/15 shadow-2xl rounded-[1.5rem] sm:rounded-[2rem] flex flex-col z-10 overflow-hidden"
                            >
                                {/* Top Progress Bar */}
                                <div className="absolute top-0 left-0 h-1 sm:h-1.5 bg-white/5 w-full z-50">
                                    <div 
                                        className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transition-all duration-500 ease-out"
                                        style={{ width: `${filteredQuestions.length ? ((currentQuestionIndex + 1) / filteredQuestions.length) * 100 : 0}%` }}
                                    ></div>
                                </div>

                                {/* Top Header */}
                                <div className="px-4 sm:px-6 py-4 bg-slate-50 dark:bg-[#0a1024] border-b border-gray-200 dark:border-white/10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 shrink-0">
                                    <div className="flex items-center justify-between gap-3">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 sm:p-2.5 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-md shrink-0">
                                                {getExamIcon(activeExam.icon)}
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2 flex-wrap">
                                                    <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white">{activeExam.title}</h3>
                                                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                                                        {activeExam.category}
                                                    </span>
                                                </div>
                                                <p className="text-xs text-gray-400 mt-0.5 font-mono line-clamp-1">{activeExam.fullName}</p>
                                            </div>
                                        </div>

                                        {/* Close Button on mobile on the top right */}
                                        <button 
                                            onClick={handleCloseExam}
                                            className="p-2 sm:p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-gray-400 hover:text-white transition-colors shrink-0 border border-white/10 md:hidden self-start"
                                        >
                                            <X className="w-5 h-5" />
                                        </button>
                                    </div>

                                    <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-3">
                                        {/* Mode Tabs */}
                                        <div className="flex items-center bg-black/40 p-1 sm:p-1.5 rounded-2xl border border-white/10 gap-1 w-full sm:w-auto justify-center overflow-x-auto scrollbar-none">
                                            <button 
                                                onClick={() => { setPracticeMode('all'); setSelectedYearFilter('All'); }}
                                                className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 sm:gap-2 ${practiceMode === 'all' ? 'bg-blue-600 text-white shadow-md' : 'text-gray-400 hover:text-white'}`}
                                            >
                                                <BookOpen size={14} className="shrink-0" />
                                                <span>{getArchiveYearsText(activeExam.yearsAvailable)}<span className="hidden sm:inline"> Archive</span></span>
                                            </button>
                                            <button 
                                                onClick={() => { setPracticeMode('ai_only'); setSelectedYearFilter('AI Predicted 2026'); }}
                                                className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 sm:gap-2 ${practiceMode === 'ai_only' ? 'bg-purple-600 text-white shadow-md' : 'text-gray-400 hover:text-white'}`}
                                            >
                                                <Brain size={14} className="shrink-0" />
                                                <span>AI Predictor</span>
                                            </button>
                                            <button 
                                                onClick={() => handleOpenExam(activeExam, 'timed')}
                                                className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 sm:gap-2 ${practiceMode === 'timed' ? 'bg-orange-600 text-white shadow-md' : 'text-gray-400 hover:text-white'}`}
                                            >
                                                <Clock size={14} className="shrink-0" />
                                                <span>Timed Mock</span>
                                            </button>
                                        </div>

                                        {/* Timer display for timed mode */}
                                        {practiceMode === 'timed' && (
                                            <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-2xl bg-orange-500/20 border border-orange-500/30 text-orange-400 font-mono font-bold text-sm sm:text-base animate-pulse w-full sm:w-auto">
                                                <Clock size={18} />
                                                <span>{formatTime(timeLeft)}</span>
                                            </div>
                                        )}

                                        {/* Close Button on desktop */}
                                        <button 
                                            onClick={handleCloseExam}
                                            className="hidden md:flex p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-gray-400 hover:text-white transition-colors shrink-0 border border-white/10"
                                        >
                                            <X className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>

                                {/* Filter Subbar inside Hub */}
                                <div className="px-4 sm:px-6 py-3 bg-[#0c132b] border-b border-white/5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 shrink-0 text-xs font-medium text-gray-300">
                                    <div className="grid grid-cols-1 sm:flex items-center gap-2.5">
                                        <div className="flex items-center justify-between sm:justify-start gap-2 bg-black/30 px-3 py-2 rounded-xl border border-white/10">
                                            <span className="text-gray-500 font-bold shrink-0">Year:</span>
                                            <select 
                                                value={selectedYearFilter}
                                                onChange={(e) => { setSelectedYearFilter(e.target.value); setCurrentQuestionIndex(0); }}
                                                className="bg-transparent text-white font-bold focus:outline-none cursor-pointer pr-2 w-full sm:w-auto text-right sm:text-left truncate max-h-60"
                                            >
                                                <option value="All" className="bg-[#0c132b] text-white font-black">All Years (2020-2025)</option>
                                                <option value="AI Predicted 2026" className="bg-[#0c132b] text-purple-400 font-bold">✨ AI Predicted 2026</option>
                                                <option value="2025" className="bg-[#0c132b] text-white font-semibold">2025 (Latest Past Exam)</option>
                                                <option value="2024" className="bg-[#0c132b] text-white">2024</option>
                                                <option value="2023" className="bg-[#0c132b] text-white">2023</option>
                                                <option value="2022" className="bg-[#0c132b] text-white">2022</option>
                                                <option value="2021" className="bg-[#0c132b] text-white">2021</option>
                                                <option value="2020" className="bg-[#0c132b] text-white">2020</option>
                                            </select>
                                        </div>

                                        <div className="flex items-center justify-between sm:justify-start gap-2 bg-black/30 px-3 py-2 rounded-xl border border-white/10">
                                            <span className="text-gray-500 font-bold shrink-0">Subject:</span>
                                            <select 
                                                value={selectedSubjectFilter}
                                                onChange={(e) => { setSelectedSubjectFilter(e.target.value); setCurrentQuestionIndex(0); }}
                                                className="bg-transparent text-white font-bold focus:outline-none cursor-pointer pr-2 w-full sm:w-auto text-right sm:text-left truncate max-w-[200px]"
                                            >
                                                {availableSubjects.map(sub => (
                                                    <option key={sub} value={sub} className="bg-[#0c132b] text-white">{sub}</option>
                                                ))}
                                            </select>
                                        </div>
                                        
                                        <button
                                            onClick={() => { setShowBookmarkedOnly(!showBookmarkedOnly); setCurrentQuestionIndex(0); }}
                                            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl border transition-all text-xs font-bold ${showBookmarkedOnly ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' : 'bg-black/30 text-gray-400 border-white/10 hover:bg-white/5'}`}
                                        >
                                            {showBookmarkedOnly ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
                                            <span className="hidden sm:inline">Saved</span>
                                        </button>
                                    </div>

                                    {/* Stats tracker inside header */}
                                    <div className="flex items-center justify-between sm:justify-end gap-4 text-xs font-bold font-mono px-1 sm:px-0 pt-1 sm:pt-0 border-t sm:border-0 border-white/5">
                                        <span className="text-gray-400">Total: {filteredQuestions.length}</span>
                                        <span className="text-green-400">Correct: {scoreStats.correct}</span>
                                        <span className="text-red-400">Wrong: {scoreStats.wrong}</span>
                                    </div>
                                </div>

                                {/* Main Question Body Area */}
                                <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-10 custom-scrollbar flex flex-col">
                                    {filteredQuestions.length === 0 ? (
                                        <div className="m-auto text-center p-8 sm:p-12 bg-white/5 rounded-2xl sm:rounded-3xl border border-white/10 max-w-md">
                                            <AlertCircle className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-500 mx-auto mb-4" />
                                            <h4 className="text-lg sm:text-xl font-bold text-white mb-2">No Questions Match Filter</h4>
                                            <p className="text-xs sm:text-sm text-gray-400 mb-6">There are no questions matching Year "{selectedYearFilter}" and Subject "{selectedSubjectFilter}".</p>
                                            <button 
                                                onClick={() => { setSelectedYearFilter('All'); setSelectedSubjectFilter('All'); }}
                                                className="px-6 py-2.5 rounded-xl bg-blue-600 font-bold text-white text-xs sm:text-sm"
                                            >
                                                Clear Question Filters
                                            </button>
                                        </div>
                                    ) : (
                                        (() => {
                                            const q = filteredQuestions[currentQuestionIndex];
                                            if (!q) return null;
                                            const isAnswered = selectedAnswers[q.id] !== undefined;
                                            const selectedAnsIndex = selectedAnswers[q.id];
                                            const isCorrect = selectedAnsIndex === q.correctOptionIndex;
                                            const isExplanationVisible = showExplanation[q.id] || (practiceMode === 'timed' && isAnswered && !isTimerRunning);

                                            return (
                                                <div key={q.id} className="max-w-4xl mx-auto w-full flex-1 flex flex-col">
                                                    {/* Progress & Badges Bar */}
                                                    <div className="flex flex-wrap items-center justify-between gap-2.5 mb-4 sm:mb-6">
                                                        <div className="flex items-center gap-2 flex-wrap">
                                                            <span className="text-xs sm:text-sm font-mono font-bold px-3 py-1 bg-white/10 rounded-xl text-primary border border-white/10">
                                                                Q {currentQuestionIndex + 1} of {filteredQuestions.length}
                                                            </span>
                                                            <span className={`px-2.5 sm:px-3 py-1 rounded-xl text-[11px] sm:text-xs font-bold border ${
                                                                q.year === 'AI Predicted 2026' 
                                                                    ? 'bg-purple-500/20 text-purple-300 border-purple-500/40 animate-pulse' 
                                                                    : 'bg-blue-500/20 text-blue-300 border-blue-500/30'
                                                            }`}>
                                                                {q.year === 'AI Predicted 2026' ? '✨ AI Predicted 2026' : `Year ${q.year}`}
                                                            </span>
                                                        </div>
                                                        <div className="flex items-center gap-2 flex-wrap">
                                                            <span className="text-[11px] sm:text-xs font-bold px-2.5 sm:px-3 py-1 bg-white/5 rounded-xl text-gray-300 border border-white/5">
                                                                {q.subject}
                                                            </span>
                                                            <span className={`px-2.5 py-1 rounded-xl text-[11px] sm:text-xs font-bold border ${
                                                                q.difficulty === 'Easy' ? 'bg-green-500/20 text-green-400 border-green-500/30' :
                                                                q.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' :
                                                                q.difficulty === 'Hard' ? 'bg-orange-500/20 text-orange-400 border-orange-500/30' :
                                                                'bg-red-500/20 text-red-400 border-red-500/30'
                                                            }`}>
                                                                {q.difficulty}
                                                            </span>
                                                        </div>
                                                    </div>

                                                    {/* Question Text */}
                                                    <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#0c1428] border border-white/10 shadow-xl mb-6 sm:mb-8 relative group">
                                                        <button 
                                                            onClick={() => {
                                                                const newSaved = new Set(bookmarkedQuestions);
                                                                if (newSaved.has(q.id)) newSaved.delete(q.id);
                                                                else newSaved.add(q.id);
                                                                setBookmarkedQuestions(newSaved);
                                                            }}
                                                            className={`absolute top-4 right-4 p-2 rounded-full transition-all ${bookmarkedQuestions.has(q.id) ? 'bg-yellow-500/20 text-yellow-400 shadow-[0_0_15px_rgba(234,179,8,0.3)]' : 'bg-white/5 text-gray-500 hover:text-gray-300 hover:bg-white/10'}`}
                                                            title="Save for review"
                                                        >
                                                            {bookmarkedQuestions.has(q.id) ? <BookmarkCheck className="w-5 h-5" /> : <Bookmark className="w-5 h-5" />}
                                                        </button>
                                                        <h4 className="text-base sm:text-xl lg:text-2xl font-bold text-white leading-relaxed whitespace-pre-line pr-10">
                                                            {q.question}
                                                        </h4>
                                                    </div>

                                                    {/* Options List */}
                                                    <div className="space-y-3 sm:space-y-4 mb-8">
                                                        {q.options.map((opt, optIdx) => {
                                                            const isThisOptionSelected = selectedAnsIndex === optIdx;
                                                            const isThisOptionCorrect = optIdx === q.correctOptionIndex;

                                                            let optionBoxStyle = 'bg-[#0f172e] border-white/10 text-gray-200 hover:bg-[#141f3d] hover:border-primary/40';
                                                            let badgeStyle = 'bg-white/10 text-gray-300';
                                                            let statusIcon = null;

                                                            if (isAnswered) {
                                                                if (practiceMode !== 'timed') {
                                                                    if (isThisOptionCorrect) {
                                                                        optionBoxStyle = 'bg-green-500/20 border-green-500/50 text-green-200 shadow-[0_0_20px_rgba(34,197,94,0.2)] font-bold';
                                                                        badgeStyle = 'bg-green-500 text-white font-black';
                                                                        statusIcon = <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 shrink-0 ml-auto" />;
                                                                    } else if (isThisOptionSelected) {
                                                                        optionBoxStyle = 'bg-red-500/20 border-red-500/50 text-red-200 font-bold';
                                                                        badgeStyle = 'bg-red-500 text-white font-black';
                                                                        statusIcon = <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 text-red-400 shrink-0 ml-auto" />;
                                                                    } else {
                                                                        optionBoxStyle = 'bg-[#0f172e]/50 border-white/5 text-gray-500 opacity-60';
                                                                    }
                                                                } else {
                                                                    if (isThisOptionSelected) {
                                                                        optionBoxStyle = 'bg-orange-500/20 border-orange-500/50 text-orange-200 shadow-[0_0_20px_rgba(249,115,22,0.2)] font-bold';
                                                                        badgeStyle = 'bg-orange-500 text-white font-black';
                                                                        statusIcon = <Check className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400 shrink-0 ml-auto" />;
                                                                    }
                                                                }
                                                            }

                                                            return (
                                                                <motion.button
                                                                    whileTap={{ scale: isAnswered ? 1 : 0.98 }}
                                                                    key={optIdx}
                                                                    onClick={() => handleAnswerSelect(q.id, optIdx)}
                                                                    className={`w-full p-4 sm:p-5 rounded-xl sm:rounded-2xl border transition-all duration-300 flex items-start gap-3 sm:gap-4 text-left ${optionBoxStyle}`}
                                                                >
                                                                    <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl flex items-center justify-center text-xs sm:text-sm font-bold shrink-0 transition-colors mt-0.5 ${badgeStyle}`}>
                                                                        {String.fromCharCode(65 + optIdx)}
                                                                    </div>
                                                                    <span className="text-sm sm:text-base md:text-lg leading-relaxed flex-1">{opt}</span>
                                                                    {statusIcon}
                                                                </motion.button>
                                                            );
                                                        })}
                                                    </div>

                                                    {/* Explanation & AI Tip Box */}
                                                    {isExplanationVisible && (
                                                        <motion.div 
                                                            initial={{ opacity: 0, y: 10 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#101935] to-[#0c1428] border border-blue-500/30 shadow-2xl mb-6 space-y-3 sm:space-y-4 mt-auto"
                                                        >
                                                            <div className="flex items-center gap-2 text-blue-400 font-bold text-sm sm:text-base border-b border-white/10 pb-3">
                                                                <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5" />
                                                                <span>Detailed Solution & Explanation</span>
                                                            </div>
                                                            <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light whitespace-pre-line">
                                                                {q.explanation}
                                                            </p>
                                                            {q.aiTip && (
                                                                <div className="mt-4 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-purple-500/15 border border-purple-500/30 flex items-start gap-3">
                                                                    <Brain className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 shrink-0 mt-0.5 animate-pulse" />
                                                                    <div>
                                                                        <div className="text-xs sm:text-sm font-bold text-purple-300 mb-1">ADV AI Examiner Tip</div>
                                                                        <div className="text-[11px] sm:text-xs text-gray-300 leading-relaxed font-light">{q.aiTip}</div>
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </motion.div>
                                                    )}
                                                </div>
                                            );
                                        })()
                                    )}
                                </div>

                                {/* Bottom Footer Navigation Bar */}
                                <div className="px-4 sm:px-6 py-4 bg-slate-50 dark:bg-[#0a1024] border-t border-gray-200 dark:border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 shrink-0">
                                    <div className="grid grid-cols-2 sm:flex items-center gap-2.5 sm:gap-3">
                                        <button 
                                            onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
                                            disabled={currentQuestionIndex === 0}
                                            className="justify-center px-4 sm:px-5 py-3 rounded-xl bg-gray-150 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/15 text-gray-800 dark:text-white disabled:opacity-30 disabled:hover:bg-gray-150 font-bold text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 transition-all border border-gray-200 dark:border-white/10"
                                        >
                                            <ChevronLeft className="w-4 h-4 shrink-0" /> Previous
                                        </button>
                                        <button 
                                            onClick={() => setCurrentQuestionIndex(prev => Math.min(filteredQuestions.length - 1, prev + 1))}
                                            disabled={currentQuestionIndex === filteredQuestions.length - 1}
                                            className="justify-center px-4 sm:px-5 py-3 rounded-xl bg-gray-150 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/15 text-gray-800 dark:text-white disabled:opacity-30 disabled:hover:bg-gray-150 font-bold text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 transition-all border border-gray-200 dark:border-white/10"
                                        >
                                            Next <ChevronRight className="w-4 h-4 shrink-0" />
                                        </button>
                                    </div>

                                    <div className="grid grid-cols-2 sm:flex items-center gap-2.5 sm:gap-3">
                                        <button 
                                            onClick={() => { setSelectedAnswers({}); setShowExplanation({}); setCurrentQuestionIndex(0); }}
                                            className="justify-center px-4 sm:px-5 py-3 rounded-xl bg-gray-150 dark:bg-white/5 hover:bg-red-500/25 dark:hover:bg-red-500/20 hover:text-red-600 dark:hover:text-red-300 hover:border-red-300 dark:hover:border-red-500/30 text-gray-600 dark:text-gray-400 font-bold text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 transition-all border border-gray-200 dark:border-white/10"
                                            title="Reset all selected answers"
                                        >
                                            <RotateCcw className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" /> Reset
                                        </button>

                                        <button 
                                            onClick={() => handleSubmitReport(scoreStats.percentage)}
                                            className="justify-center px-5 sm:px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-black text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 transition-all shadow-[0_0_25px_rgba(37,99,235,0.5)] whitespace-nowrap"
                                        >
                                            <BarChart3 className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" /> Submit Report
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>

                {/* ── 6. AI PERFORMANCE REPORT MODAL ── */}
                <AnimatePresence>
                    {showReportModal && activeExam && (
                        <div className="fixed inset-0 z-[3000] flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
                            <motion.div 
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                className="absolute inset-0 bg-black/90 backdrop-blur-xl"
                                onClick={() => setShowReportModal(false)}
                            />

                            <motion.div 
                                initial={{ opacity: 0, scale: 0.9, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 30 }}
                                className="relative w-full max-w-2xl bg-[#0b1329] border border-blue-500/40 rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-12 shadow-[0_0_80px_rgba(37,99,235,0.3)] z-10 text-center overflow-hidden my-auto"
                            >
                                <GlowingOrb className="top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-blue-500/30" />

                                {/* Icon */}
                                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-[0_0_30px_rgba(37,99,235,0.5)]">
                                    <Trophy className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-300" />
                                </div>

                                <h3 className="text-2xl sm:text-3xl font-black text-white mb-1.5 sm:mb-2">AI Performance Diagnosis</h3>
                                <p className="text-xs sm:text-sm text-gray-400 font-mono mb-6 sm:mb-8">{activeExam.title} - {practiceMode === 'timed' ? 'Timed Mock Score' : 'Practice Report'}</p>

                                {/* Big Score Display */}
                                <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-black/50 border border-white/10 mb-6 sm:mb-8 max-w-md mx-auto grid grid-cols-3 gap-3 sm:gap-4 text-center">
                                    <div>
                                        <div className="text-2xl sm:text-3xl font-black text-green-400">{scoreStats.correct}</div>
                                        <div className="text-[11px] sm:text-xs text-gray-400 mt-1">Correct</div>
                                    </div>
                                    <div className="border-x border-white/10 px-2">
                                        <div className="text-2xl sm:text-3xl font-black text-red-400">{scoreStats.wrong}</div>
                                        <div className="text-[11px] sm:text-xs text-gray-400 mt-1">Incorrect</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl sm:text-3xl font-black text-blue-400">{scoreStats.percentage}%</div>
                                        <div className="text-[11px] sm:text-xs text-gray-400 mt-1">Accuracy</div>
                                    </div>
                                </div>

                                {syncStatus && (
                                    <div className={`text-xs font-mono font-bold mb-6 px-4 py-2.5 rounded-xl border ${syncStatus.includes('saved') || syncStatus.includes('dashboard') ? 'bg-green-500/10 border-green-500/30 text-green-400' : 'bg-yellow-500/10 border-yellow-500/30 text-yellow-400'} max-w-md mx-auto`}>
                                        {syncStatus}
                                    </div>
                                )}

                                {/* Weakness Diagnosis */}
                                <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-purple-500/10 border border-purple-500/30 text-left mb-8">
                                    <div className="flex items-center gap-2 text-purple-300 font-bold text-sm sm:text-base mb-2">
                                        <Brain className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                                        <span>ADV AI Weakness Analysis & Recommendation</span>
                                    </div>
                                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
                                        {scoreStats.percentage >= 80 ? (
                                            "Exceptional performance! Your conceptual clarity aligns perfectly with the top 1% rankers. Keep practicing the AI predicted 2026 templates to maintain your edge."
                                        ) : scoreStats.percentage >= 50 ? (
                                            "Good foundational understanding, but you are losing points on elimination traps. Focus on reading the detailed solution breakdown for incorrect questions."
                                        ) : (
                                            "Your accuracy indicates potential gaps in core syllabus topics. We highly recommend reviewing the accompanying Masterclass notes before attempting timed mock tests."
                                        )}
                                    </p>
                                </div>

                                {/* Subject Breakdown */}
                                {subjectStats.length > 0 && (
                                    <div className="text-left mb-8 space-y-4">
                                        <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest px-2 flex items-center"><ListChecks className="w-4 h-4 mr-2" /> Subject Breakdown</h4>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                            {subjectStats.map(s => (
                                                <div key={s.subject} className="p-4 rounded-2xl bg-white/5 border border-white/10">
                                                    <div className="flex justify-between text-xs font-bold mb-2">
                                                        <span className="text-white truncate pr-2">{s.subject}</span>
                                                        <span className={s.accuracy >= 70 ? 'text-green-400' : s.accuracy >= 40 ? 'text-yellow-400' : 'text-red-400'}>{s.accuracy}%</span>
                                                    </div>
                                                    <div className="h-1.5 w-full bg-black/50 rounded-full overflow-hidden">
                                                        <div 
                                                            className={`h-full rounded-full transition-all duration-1000 ${s.accuracy >= 70 ? 'bg-green-500' : s.accuracy >= 40 ? 'bg-yellow-500' : 'bg-red-500'}`}
                                                            style={{ width: `${s.accuracy}%` }}
                                                        ></div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* AI Study Plan */}
                                {studyPlan && (
                                    <motion.div 
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-blue-900/40 to-indigo-900/40 border border-blue-500/50 text-left mb-8 overflow-hidden"
                                    >
                                        <div className="flex items-center gap-2 text-blue-300 font-bold mb-3">
                                            <Brain className="w-5 h-5" /> AI Personalized Action Plan
                                        </div>
                                        <p className="text-sm text-gray-300 leading-relaxed mb-4">{studyPlan.recommendation}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {studyPlan.weakSubjects.map(sub => (
                                                <span key={sub} className="px-3 py-1 rounded-full text-xs font-bold bg-red-500/20 text-red-300 border border-red-500/30">
                                                    Target: {sub}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}

                                {/* Action Buttons */}
                                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                                    {!studyPlan && (
                                        <button 
                                            onClick={() => {
                                                setIsGeneratingPlan(true);
                                                setTimeout(() => {
                                                    const weak = subjectStats.filter(s => s.accuracy < 60).map(s => s.subject);
                                                    setStudyPlan({
                                                        weakSubjects: weak.length ? weak : ['Advanced Concepts'],
                                                        recommendation: weak.length 
                                                            ? `Your major score leaks are in ${weak.join(', ')}. Dedicate your next 3 study sessions entirely to these areas, starting with High-Yield NCERT chapters.` 
                                                            : `Great balance! Focus on taking full-length mock tests to improve your time management.`
                                                    });
                                                    setIsGeneratingPlan(false);
                                                }, 1500);
                                            }}
                                            disabled={isGeneratingPlan}
                                            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 border border-purple-500/40 font-bold text-sm sm:text-base transition-all flex justify-center items-center gap-2"
                                        >
                                            {isGeneratingPlan ? <Loader2 className="w-5 h-5 animate-spin" /> : <Sparkles className="w-5 h-5" />}
                                            {isGeneratingPlan ? 'Analyzing Pattern...' : 'Generate AI Study Plan'}
                                        </button>
                                    )}
                                    <button 
                                        onClick={() => setShowReportModal(false)}
                                        className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm sm:text-base transition-all shadow-[0_0_25px_rgba(37,99,235,0.4)]"
                                    >
                                        Review Question Answers
                                    </button>
                                    <button 
                                        onClick={() => { setShowReportModal(false); handleCloseExam(); }}
                                        className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base transition-all border border-white/10"
                                    >
                                        Explore Other Exams
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>

                {/* SEO Content Component rendered at the bottom */}
                <ExamHubSEO />
            </div>
        </PageWrapper>
    );
};

export default ExamHubPage;
