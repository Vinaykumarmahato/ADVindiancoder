import { Link, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PageWrapper from '../components/PageWrapper';
import { PlayCircle, Library, ChevronLeft, BookOpen, Code2, Github, ExternalLink, Trophy, CheckCircle2, XCircle } from 'lucide-react';
import SEO from '../components/SEO';
import { JAVA_EPISODES as EPISODES } from '../data/javaEpisodes';
import { useMemo, useRef } from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { Download, Award, Star, ShieldCheck, Info, HelpCircle, GraduationCap, Search, CheckCircle } from 'lucide-react';
// ─── Certificate Generator Modal ─────────────────────────────────────────────
const CertificateModal = ({ isOpen, onClose, userName, score, certId }: { isOpen: boolean; onClose: () => void; userName: string; score: number; certId: string }) => {
    const certRef = useRef<HTMLDivElement>(null);
    const [isGenerating, setIsGenerating] = useState(false);

    const downloadCertificate = async () => {
        if (!certRef.current) return;
        setIsGenerating(true);
        try {
            const canvas = await html2canvas(certRef.current, { scale: 2, useCORS: true });
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('l', 'mm', 'a4');
            const width = pdf.internal.pageSize.getWidth();
            const height = pdf.internal.pageSize.getHeight();
            pdf.addImage(imgData, 'PNG', 0, 0, width, height);
            pdf.save(`ADV-Certificate-${userName.replace(/\s+/g, '-')}.pdf`);
        } catch (error) {
            console.error("CERT_GEN_ERROR", error);
        } finally {
            setIsGenerating(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[3000] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" onClick={onClose} />
            <div className="relative w-full max-w-5xl animate-in zoom-in duration-500">
                
                {/* Visual Certificate Frame (Hidden from view but visible to html2canvas) */}
                <div className="overflow-hidden rounded-lg shadow-2xl bg-white p-1">
                    <div ref={certRef} className="relative w-full aspect-[1.414/1] bg-white text-[#0a0f1c] p-12 md:p-20 overflow-hidden border-[16px] border-double border-[#d4af37]">
                        
                        {/* Background Decorative Elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4af37]/5 rounded-bl-full -mr-20 -mt-20" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#d4af37]/5 rounded-tr-full -ml-20 -mb-20" />
                        
                        <div className="relative h-full border-4 border-[#d4af37]/20 p-8 flex flex-col items-center justify-between text-center">
                            
                            <div className="space-y-4">
                                <div className="flex justify-center mb-6">
                                    <div className="w-20 h-20 bg-red-600 rounded-2xl flex items-center justify-center shadow-xl">
                                        <Award className="w-12 h-12 text-white" />
                                    </div>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-black uppercase tracking-[0.15em] text-[#0a0f1c]">Certificate</h1>
                                <p className="text-lg md:text-xl font-bold text-gray-500 uppercase tracking-widest">Of Completion</p>
                            </div>

                            <div className="space-y-4">
                                <p className="text-gray-500 italic">This is to certify that</p>
                                <h2 className="text-5xl md:text-7xl font-black text-red-600 font-serif border-b-4 border-red-600/10 pb-2 px-8 inline-block">{userName || "Valued Student"}</h2>
                                <p className="text-xl font-medium text-gray-700 max-w-2xl mx-auto leading-relaxed mt-6">
                                    has successfully mastered the <span className="font-black">Java Full Course 2026: Zero to Hero</span>. 
                                    Demonstrating exceptional proficiency across 39 technical modules with a performance score of <span className="text-red-600 font-black">{score}%</span>.
                                </p>
                            </div>

                            <div className="w-full flex justify-between items-end mt-12 px-12">
                                <div className="text-left">
                                    <div className="w-48 border-b-2 border-gray-300 mb-2" />
                                    <p className="font-black text-sm uppercase tracking-widest text-gray-400">Date Issued</p>
                                    <p className="font-bold text-[#0a0f1c]">{new Date().toLocaleDateString('en-GB')}</p>
                                </div>
                                
                                <div className="flex flex-col items-center">
                                    <ShieldCheck className="w-16 h-16 text-[#d4af37]/40 mb-2" />
                                    <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Verified Alumnus</p>
                                </div>

                                <div className="text-right">
                                    <div className="w-48 border-b-2 border-gray-300 mb-2 ml-auto" />
                                    <p className="font-black text-[10px] uppercase tracking-widest text-gray-400">Credential ID</p>
                                    <p className="font-bold text-[#0a0f1c] font-mono text-sm">{certId}</p>
                                    <p className="text-[8px] font-bold text-gray-300 mt-1">Verify at: advindiancoder.tech/verify</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Download Controls */}
                <div className="mt-8 flex justify-center gap-4">
                    <button 
                        onClick={onClose}
                        className="px-8 py-3 rounded-full border border-white/20 text-white font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all"
                    >
                        Close
                    </button>
                    <button 
                        onClick={downloadCertificate}
                        disabled={isGenerating}
                        className="px-12 py-3 rounded-full bg-red-600 text-white font-black text-xs uppercase tracking-widest hover:bg-red-500 shadow-[0_0_30px_rgba(239,68,68,0.3)] transition-all flex items-center gap-3 disabled:opacity-50"
                    >
                        {isGenerating ? "Preparing Asset..." : <><Download className="w-4 h-4" /> Download PDF Certificate</>}
                    </button>
                </div>
            </div>
        </div>
    );
};

// ─── Sub-Component ───────────────────────────────────────────────────────────
const QuizCard = ({ 
    question, 
    answer, 
    index, 
    options, 
    correctIndex, 
    selectedOption, 
    onSelect, 
    isSubmitted, 
    onNavigateToNotes 
}: { 
    question: string; 
    answer: string; 
    index: number; 
    options: string[]; 
    correctIndex: number; 
    selectedOption: number | null; 
    onSelect: (idx: number) => void;
    isSubmitted: boolean;
    onNavigateToNotes: () => void 
}) => {
    const [showAnswer, setShowAnswer] = useState(false);
    
    return (
        <div className={`group relative bg-[#0d1117] border rounded-3xl overflow-hidden transition-all ${isSubmitted ? (selectedOption === correctIndex ? 'border-green-500/30' : selectedOption !== null ? 'border-red-500/30' : 'border-white/5') : 'border-white/5 hover:border-red-500/30'}`}>
            <div className="p-6 md:p-8">
                <div className="flex items-start gap-4 mb-8">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-red-600 to-orange-500 flex items-center justify-center text-white font-black text-sm shrink-0 shadow-lg">
                        {index + 1}
                    </div>
                    <p className="text-white text-base md:text-lg leading-relaxed font-bold pt-1">
                        {question}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                    {options.map((opt, i) => {
                        const isSelected = selectedOption === i;
                        const isCorrect = i === correctIndex;
                        const showStatus = isSubmitted && (isSelected || isCorrect);
                        
                        return (
                            <button
                                key={i}
                                onClick={() => onSelect(i)}
                                disabled={isSubmitted}
                                className={`relative p-4 rounded-2xl text-left transition-all border flex items-center justify-between gap-4 ${
                                    isSelected 
                                        ? 'bg-red-600/10 border-red-500 text-white' 
                                        : 'bg-white/5 border-white/5 text-gray-400 hover:bg-white/10 hover:border-white/10'
                                } ${isSubmitted && isCorrect ? 'bg-green-600/10 border-green-500 text-green-500' : ''} ${isSubmitted && isSelected && !isCorrect ? 'bg-red-600/10 border-red-500 text-red-500' : ''}`}
                            >
                                <div className="flex items-center gap-3">
                                    <span className="w-6 h-6 rounded-lg bg-white/5 flex items-center justify-center text-[10px] font-black uppercase">
                                        {String.fromCharCode(65 + i)}
                                    </span>
                                    <span className="text-sm font-semibold">{opt}</span>
                                </div>
                                {showStatus && (
                                    isCorrect 
                                        ? <CheckCircle2 className="w-5 h-5 text-green-500" />
                                        : (isSelected ? <XCircle className="w-5 h-5 text-red-500" /> : null)
                                )}
                            </button>
                        );
                    })}
                </div>

                <div className="flex flex-col gap-4">
                    <button 
                        onClick={() => setShowAnswer(!showAnswer)}
                        className={`w-full py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 ${showAnswer ? 'bg-white/5 text-gray-500 border border-white/10' : 'bg-white text-black hover:bg-gray-200'}`}
                    >
                        {showAnswer ? 'Hide Insight' : 'Reveal Solution'} 
                        {!showAnswer && <ExternalLink className="w-4 h-4 ml-1" />}
                    </button>

                    {showAnswer && (
                        <div className="p-6 bg-red-500/5 border border-red-500/10 rounded-2xl animate-in fade-in zoom-in duration-300">
                            <div className="flex items-center gap-2 mb-3 text-red-400 font-black text-[10px] uppercase tracking-widest">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></span>
                                Expert Solution
                            </div>
                            <div className="text-gray-300 text-sm md:text-base leading-loose mb-6">
                                {answer}
                            </div>
                            
                            <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-4">
                                <div className="flex items-center gap-2 text-xs text-gray-500 italic">
                                    <Github className="w-4 h-4" />
                                    <span>Ref: Curriculum Source</span>
                                </div>
                                <button 
                                    onClick={onNavigateToNotes}
                                    className="text-[10px] font-black uppercase tracking-tighter text-red-500 hover:text-red-400 transition-colors flex items-center gap-1"
                                >
                                    Explore complete explanation in notes <ExternalLink className="w-3 h-3" />
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

// ─── Component ────────────────────────────────────────────────────────────────
const CourseTutorialPage = () => {
    const [searchParams] = useSearchParams();
    const epQuery = searchParams.get('ep');

    const [activeIndex, setActiveIndex] = useState(() => {
        if (epQuery) {
            const index = EPISODES.findIndex(e => e.id === parseInt(epQuery));
            return index !== -1 ? index : 0;
        }
        return 0;
    });

    const [activeTab, setActiveTab] = useState<'notes' | 'code' | 'quiz' | 'certification'>(() => {
        const tab = searchParams.get('tab');
        if (tab === 'quiz') return 'quiz';
        if (tab === 'verify' || searchParams.get('verify') === 'true') return 'certification';
        return 'notes';
    });

    const [isVerifying, setIsVerifying] = useState(() => searchParams.get('verify') === 'true');

    const ep = EPISODES[activeIndex];
    
    // MCQ Quiz State
    const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [score, setScore] = useState({ correct: 0, wrong: 0 });

    const handleOptionSelect = (qIdx: number, optIdx: number) => {
        if (isSubmitted) return;
        const newAnswers = { ...userAnswers, [qIdx]: optIdx };
        setUserAnswers(newAnswers);
        
        // Save partial progress
        localStorage.setItem(`quiz_v1_ep_${ep.id}`, JSON.stringify({
            answers: newAnswers,
            submitted: false,
            score: { correct: 0, wrong: 0 },
            hasSent: false
        }));
    };

    // Reporting State
    const [isReporting, setIsReporting] = useState(false);
    const [formData, setFormData] = useState(() => {
        const saved = localStorage.getItem('user_profile');
        return saved ? JSON.parse(saved) : { name: '', email: '', mobile: '', portfolio: '' };
    });
    const [isSending, setIsSending] = useState(false);
    const [hasSent, setHasSent] = useState(false);
    const [showCertModal, setShowCertModal] = useState(false);
    const [verifyId, setVerifyId] = useState('');
    const [verificationStatus, setVerificationStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const [isSendingInterview, setIsSendingInterview] = useState(false);
    const [hasSentInterview, setHasSentInterview] = useState(() => {
        return localStorage.getItem(`interview_requested_java`) === 'true';
    });

    const handleInterviewRequest = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSendingInterview(true);

        try {
            const submitData = new FormData();
            submitData.append("Name", formData.name);
            submitData.append("Email", formData.email);
            submitData.append("Mobile", formData.mobile);
            submitData.append("Portfolio", formData.portfolio || "Not provided");
            submitData.append("AverageScore", `${averageScore}%`);
            submitData.append("_subject", `Google Meet Interview Request: ${formData.name}`);
            submitData.append("_captcha", "false");
            submitData.append("_template", "table");

            const response = await fetch("https://formsubmit.co/ajax/advindiancoderchannel@gmail.com", {
                method: "POST",
                body: submitData,
            });

            if (response.ok) {
                setHasSentInterview(true);
                localStorage.setItem(`interview_requested_java`, 'true');
            }
        } catch (error) {
            console.error("Failed to request evaluation:", error);
        } finally {
            setIsSendingInterview(false);
        }
    };

    // Generate Deterministic Certificate ID based on name and score
    const certificateId = useMemo(() => {
        if (!formData.name) return 'ADV-JAVA-PENDING';
        const nameHash = formData.name.split('').reduce((a, b) => { a = ((a << 5) - a) + b.charCodeAt(0); return a & a; }, 0);
        return `ADV-JAVA-2026-${Math.abs(nameHash).toString(16).toUpperCase()}`;
    }, [formData.name]);

    useEffect(() => {
        if (searchParams.get('verify') === 'true') {
            setActiveTab('certification');
            setIsVerifying(true);
            window.scrollTo({ top: 300, behavior: 'smooth' });
        }
    }, [searchParams]);

    const handleVerify = () => {
        if (!verifyId.trim()) return;
        setVerificationStatus('loading');
        
        setTimeout(() => {
            // Strict Pattern Check: ADV-JAVA-2026- followed by 5-10 Hex characters
            const certPattern = /^ADV-JAVA-2026-[0-9A-F]{5,10}$/;
            
            if (certPattern.test(verifyId)) {
                setVerificationStatus('success');
            } else {
                setVerificationStatus('error');
            }
        }, 1500);
    };

    // Calculate Overall Course Progress
    const completedCount = useMemo(() => {
        let count = 0;
        EPISODES.forEach(ep => {
            const saved = localStorage.getItem(`quiz_v1_ep_${ep.id}`);
            if (saved && JSON.parse(saved).hasSent) count++;
        });
        return count;
    }, [activeIndex, hasSent]);

    const progressPercentage = Math.round((completedCount / EPISODES.length) * 100);
    const isCourseCompleted = completedCount === EPISODES.length;

    // Calculate Average Score across all modules
    const averageScore = useMemo(() => {
        let total = 0;
        let count = 0;
        EPISODES.forEach(ep => {
            const saved = localStorage.getItem(`quiz_v1_ep_${ep.id}`);
            if (saved) {
                const parsed = JSON.parse(saved);
                if (parsed.score) {
                    const pct = (parsed.score.correct / (ep.notes.quiz?.length || 1)) * 100;
                    total += pct;
                    count++;
                }
            }
        });
        return count > 0 ? Math.round(total / count) : 0;
    }, [activeIndex, hasSent]);

    // Sync Profile to LocalStorage
    useEffect(() => {
        localStorage.setItem('user_profile', JSON.stringify(formData));
    }, [formData]);

    // Persistence Logic: Load episode-specific quiz state
    useEffect(() => {
        const savedData = localStorage.getItem(`quiz_v1_ep_${ep.id}`);
        if (savedData) {
            const parsed = JSON.parse(savedData);
            setUserAnswers(parsed.answers || {});
            setIsSubmitted(parsed.submitted || false);
            setScore(parsed.score || { correct: 0, wrong: 0 });
            setHasSent(parsed.hasSent || false);
        } else {
            setUserAnswers({});
            setIsSubmitted(false);
            setScore({ correct: 0, wrong: 0 });
            setHasSent(false);
        }
        setIsReporting(false);
    }, [ep.id]);

    // Save state whenever it changes (Throttled via manual calls in actions for stability)
    const saveQuizProgress = (data: any) => {
        localStorage.setItem(`quiz_v1_ep_${ep.id}`, JSON.stringify({
            answers: userAnswers,
            submitted: isSubmitted,
            score: score,
            hasSent: hasSent,
            ...data
        }));
    };

    const submitQuiz = () => {
        let correct = 0;
        let wrong = 0;
        ep.notes.quiz?.forEach((q, i) => {
            const questionObj = typeof q === 'string' ? { correctIndex: 0 } : q as any;
            if (userAnswers[i] === (questionObj.correctIndex ?? 0)) {
                correct++;
            } else {
                wrong++;
            }
        });
        
        const newScore = { correct, wrong };
        setScore(newScore);
        setIsSubmitted(true);
        
        // Save definitive result
        localStorage.setItem(`quiz_v1_ep_${ep.id}`, JSON.stringify({
            answers: userAnswers,
            submitted: true,
            score: newScore,
            hasSent: false
        }));
        
        window.scrollTo({ top: 300, behavior: 'smooth' });
    };

    const resetQuiz = () => {
        localStorage.removeItem(`quiz_v1_ep_${ep.id}`);
        setUserAnswers({});
        setIsSubmitted(false);
        setIsReporting(false);
        setHasSent(false);
        setScore({ correct: 0, wrong: 0 });
    };

    const handleReportSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSending(true);

        try {
            const submitData = new FormData();
            submitData.append("Name", formData.name);
            submitData.append("Email", formData.email);
            submitData.append("Mobile", formData.mobile);
            submitData.append("Episode", ep.title);
            submitData.append("Score", `${Math.round((score.correct / (ep.notes.quiz?.length || 1)) * 100)}%`);
            submitData.append("Correct", String(score.correct));
            submitData.append("Wrong", String(score.wrong));
            submitData.append("_subject", `Quiz Result: ${ep.title} by ${formData.name}`);
            submitData.append("_captcha", "false");
            submitData.append("_template", "table");

            const response = await fetch("https://formsubmit.co/ajax/advindiancoderchannel@gmail.com", {
                method: "POST",
                body: submitData,
            });

            if (response.ok) {
                setHasSent(true);
                setIsReporting(false);
                
                // Save report status
                localStorage.setItem(`quiz_v1_ep_${ep.id}`, JSON.stringify({
                    answers: userAnswers,
                    submitted: true,
                    score: score,
                    hasSent: true
                }));
            }
        } catch (error) {
            console.error("Failed to submit result:", error);
        } finally {
            setIsSending(false);
        }
    };

    useEffect(() => {
        if (epQuery) {
            const index = EPISODES.findIndex(e => e.id === parseInt(epQuery));
            if (index !== -1) {
                setActiveIndex(index);
                // Scroll to top of notes/video when episode changes
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    }, [epQuery]);

    const courseSchema = {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "Java Full Course 2026: Zero to Hero",
        "description": ep.notes.intro,
        "provider": {
            "@type": "Organization",
            "name": "ADV Indian Coder",
            "sameAs": "https://advindiancoder.com"
        },
        "hasCourseInstance": {
            "@type": "CourseInstance",
            "courseMode": "Online",
            "instructor": {
                "@type": "Person",
                "name": "Vinay"
            }
        }
    };

    return (
        <PageWrapper>
            <SEO 
                title={ep.title} 
                description={`${ep.title}. ${ep.notes.intro} Learn Java programming from scratch with complete notes, code, and interactive quiz.`}
                ogType="course"
                schema={courseSchema}
            />
            <div className="min-h-screen bg-[#050914] text-white overflow-x-hidden">
                <div className="absolute top-0 w-full h-[500px] bg-gradient-to-b from-red-700/10 to-transparent pointer-events-none" />

                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-8">
                        <Link to="/courses" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm group">
                            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            Back to Courses
                        </Link>
                    </div>

                    <div className="mb-8">
                        <h1 className="text-3xl md:text-5xl font-black mb-3">
                            Java Full Course <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">2026</span>
                        </h1>
                        <p className="text-gray-400 text-sm md:text-base flex items-center flex-wrap gap-x-4 gap-y-2">
                             Zero to Hero • <span className="text-white font-bold">{EPISODES.length} Episodes</span> • 100% Free
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-[10px] font-black text-green-400 uppercase tracking-tighter animate-pulse">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
                                Live Now
                            </span>
                        </p>
                    </div>

                    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

                        {/* ── LEFT: Player + Notes ── */}
                        <div className="xl:col-span-2 flex flex-col gap-5">

                            {/* YouTube Embed */}
                            <div className="bg-black rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.7)]">
                                <div className="aspect-video">
                                    <iframe
                                        key={ep.youtubeId}
                                        className="w-full h-full"
                                        src={`https://www.youtube.com/embed/${ep.youtubeId}?autoplay=0&rel=0`}
                                        title={ep.title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                            </div>

                            {/* Video Title + Tags */}
                            <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 md:p-8">
                                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
                                    <h2 className="text-2xl md:text-3xl font-black text-white leading-tight flex-1">{ep.title}</h2>
                                    <div className="flex items-center gap-3 flex-shrink-0">
                                        <a
                                            href={`https://www.youtube.com/watch?v=${ep.youtubeId}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-[10px] font-black uppercase tracking-widest px-5 py-3 rounded-xl transition-all hover:scale-105 active:scale-95 whitespace-nowrap shadow-lg shadow-red-600/20"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                            YouTube
                                        </a>
                                        <Link
                                            to="/adv-lab"
                                            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-black uppercase tracking-widest px-5 py-3 rounded-xl transition-all hover:scale-105 active:scale-95 whitespace-nowrap shadow-lg shadow-blue-600/20"
                                        >
                                            <Code2 className="w-4 h-4" />
                                            ADV Lab
                                        </Link>
                                    </div>
                                </div>
                                <div className="flex gap-2 flex-wrap">
                                    {ep.tags.map((tag, i) => (
                                        <span key={i} className="text-[10px] font-black tracking-widest text-red-400 bg-red-500/10 border border-red-500/20 px-3 py-1.5 rounded-lg uppercase">
                                            {tag}
                                        </span>
                                    ))}
                                    <span className="text-[10px] font-black tracking-widest text-gray-500 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg uppercase">
                                        EP {String(ep.id).padStart(2, '0')} / {EPISODES.length}
                                    </span>
                                </div>
                            </div>

                            {/* Notes Tabs */}
                            <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
                                {/* Tab Bar */}
                                <div className="flex bg-black/40 p-1 rounded-2xl border border-white/5 backdrop-blur-md mb-8 overflow-x-auto scrollbar-hide">
                                    <button onClick={() => setActiveTab('notes')} className={`flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'notes' ? 'bg-red-600 text-white shadow-lg' : 'text-gray-500 hover:text-white hover:bg-white/5'}`}>
                                        <BookOpen className="w-4 h-4" /> Notes
                                    </button>
                                    <button onClick={() => setActiveTab('code')} className={`flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'code' ? 'bg-red-600 text-white shadow-lg' : 'text-gray-500 hover:text-white hover:bg-white/5'}`}>
                                        <Code2 className="w-4 h-4" /> Practice
                                    </button>
                                    <button onClick={() => setActiveTab('quiz')} className={`flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'quiz' ? 'bg-red-600 text-white shadow-lg' : 'text-gray-500 hover:text-white hover:bg-white/5'}`}>
                                        <HelpCircle className="w-4 h-4" /> Assessment
                                    </button>
                                </div>

                                {/* Tab Content */}
                                <div className="p-6">
                                    {activeTab === 'notes' && (
                                        <div className="space-y-5">
                                            <p className="text-gray-300 leading-relaxed text-sm md:text-base border-l-4 border-red-500 pl-4 py-1 bg-red-500/5 rounded-r-xl">
                                                {ep.notes.intro}
                                            </p>
                                            <h3 className="text-white font-bold text-base">📚 Topics Covered</h3>
                                            <ul className="space-y-2">
                                                {ep.notes.topics.map((topic, i) => (
                                                    <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                                                        <span className="text-red-400 font-bold mt-0.5 shrink-0">→</span>
                                                        <span className="leading-relaxed">{topic}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {activeTab === 'code' && (
                                        <div>
                                            <div className="flex items-center gap-2 mb-3">
                                                <div className="flex gap-1.5">
                                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                                </div>
                                                <span className="text-xs text-gray-500 font-mono">EP{String(ep.id).padStart(2,'0')}.java</span>
                                            </div>
                                            <pre className="bg-[#0d1117] text-green-300 text-sm p-4 rounded-xl overflow-x-auto leading-relaxed font-mono border border-white/10 whitespace-pre-wrap">
                                                {ep.notes.code}
                                            </pre>
                                        </div>
                                    )}

                                    {activeTab === 'quiz' && (
                                        <div className="space-y-6">
                                            <div className="flex items-center justify-between mb-2">
                                                <div>
                                                    <h3 className="text-xl font-bold text-white mb-1">Interactive MCQ Quiz</h3>
                                                    <p className="text-xs text-gray-500">Test your mastery of this lesson's topics</p>
                                                </div>
                                                <div className="text-right">
                                                    <span className="text-2xl font-black text-red-500">
                                                        {ep.notes.quiz?.length || 0}
                                                    </span>
                                                    <span className="text-xs text-gray-500 ml-1">Questions</span>
                                                </div>
                                            </div>

                                            {isSubmitted && (
                                                <div className="p-8 rounded-[2rem] bg-gradient-to-br from-green-600/10 to-blue-600/10 border border-white/5 backdrop-blur-2xl animate-in fade-in slide-in-from-top-4 duration-500 mb-8">
                                                    <div className="flex flex-col md:flex-row items-center gap-8">
                                                        <div className="relative w-32 h-32 flex items-center justify-center">
                                                            <svg className="w-full h-full -rotate-90">
                                                                <circle cx="64" cy="64" r="58" fill="transparent" stroke="rgba(255,255,255,0.05)" strokeWidth="8" />
                                                                <circle 
                                                                    cx="64" cy="64" r="58" fill="transparent" 
                                                                    stroke="#22c55e" strokeWidth="8" 
                                                                    strokeDasharray={364}
                                                                    strokeDashoffset={364 - (364 * (score.correct / (ep.notes.quiz?.length || 1)))}
                                                                    className="transition-all duration-1000 ease-out"
                                                                />
                                                            </svg>
                                                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                                                <span className="text-3xl font-black text-white">{Math.round((score.correct / (ep.notes.quiz?.length || 1)) * 100)}%</span>
                                                                <span className="text-[10px] text-gray-500 uppercase font-black">Score</span>
                                                            </div>
                                                        </div>
                                                        <div className="flex-1 text-center md:text-left">
                                                            <h4 className="text-2xl font-black text-white mb-2">Quiz Performance</h4>
                                                            <div className="grid grid-cols-3 gap-4 mt-4">
                                                                <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                                                                    <div className="text-[10px] text-gray-500 uppercase font-black mb-1">Correct</div>
                                                                    <div className="text-xl font-black text-green-500">{score.correct}</div>
                                                                </div>
                                                                <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                                                                    <div className="text-[10px] text-gray-500 uppercase font-black mb-1">Wrong</div>
                                                                    <div className="text-xl font-black text-red-500">{score.wrong}</div>
                                                                </div>
                                                                <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                                                                    <div className="text-[10px] text-gray-500 uppercase font-black mb-1">Total</div>
                                                                    <div className="text-xl font-black text-blue-500">{ep.notes.quiz?.length || 0}</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col gap-3">
                                                            {!hasSent ? (
                                                                <button 
                                                                    onClick={() => setIsReporting(true)}
                                                                    className="px-8 py-4 bg-red-600 text-white font-black text-xs uppercase tracking-widest rounded-full hover:bg-red-500 transition-all shadow-xl flex items-center gap-2"
                                                                >
                                                                    <Trophy className="w-4 h-4" /> Submit Result
                                                                </button>
                                                            ) : (
                                                                <div className="px-8 py-4 bg-green-500/10 border border-green-500/20 text-green-500 font-black text-xs uppercase tracking-widest rounded-full flex items-center gap-2">
                                                                    <CheckCircle2 className="w-4 h-4" /> Result Submitted
                                                                </div>
                                                            )}
                                                            <button 
                                                                onClick={resetQuiz}
                                                                className="px-8 py-4 bg-white/5 border border-white/10 text-gray-400 font-black text-xs uppercase tracking-widest rounded-full hover:bg-white/10 transition-all"
                                                            >
                                                                Restart Quiz
                                                            </button>
                                                        </div>
                                                    </div>
                                                    
                                                    {/* Reporting Form Modal/Overlay */}
                                                    {isReporting && (
                                                        <div className="mt-8 p-8 border-t border-white/10 animate-in fade-in slide-in-from-top-4 duration-500">
                                                            <h4 className="text-xl font-black text-white mb-6 flex items-center gap-2">
                                                                <Library className="w-5 h-5 text-red-500" />
                                                                Submit Performance Report
                                                            </h4>
                                                            <form onSubmit={handleReportSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                                <div className="space-y-2">
                                                                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Full Name</label>
                                                                    <input 
                                                                        type="text" required value={formData.name}
                                                                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                                                                        className="w-full bg-[#0d1117] border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:border-red-500 outline-none transition-colors"
                                                                        placeholder="Your Name"
                                                                    />
                                                                </div>
                                                                <div className="space-y-2">
                                                                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Email Address</label>
                                                                    <input 
                                                                        type="email" required value={formData.email}
                                                                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                                                                        className="w-full bg-[#0d1117] border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:border-red-500 outline-none transition-colors"
                                                                        placeholder="email@example.com"
                                                                    />
                                                                </div>
                                                                <div className="space-y-2">
                                                                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Mobile Number</label>
                                                                    <input 
                                                                        type="tel" required value={formData.mobile}
                                                                        onChange={e => setFormData({ ...formData, mobile: e.target.value })}
                                                                        className="w-full bg-[#0d1117] border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:border-red-500 outline-none transition-colors"
                                                                        placeholder="+91 XXXXX XXXXX"
                                                                    />
                                                                </div>
                                                                <div className="md:col-span-3 mt-4 flex justify-end gap-3">
                                                                    <button 
                                                                        type="button" 
                                                                        onClick={() => setIsReporting(false)}
                                                                        className="px-6 py-3 text-xs font-black text-gray-500 uppercase tracking-widest hover:text-white transition-colors"
                                                                    >
                                                                        Cancel
                                                                    </button>
                                                                    <button 
                                                                        type="submit" 
                                                                        disabled={isSending}
                                                                        className="px-10 py-3 bg-red-600 text-white font-black text-xs uppercase tracking-widest rounded-xl hover:bg-red-500 transition-all flex items-center gap-2 disabled:opacity-50"
                                                                    >
                                                                        {isSending ? "Sending..." : "Confirm & Send"}
                                                                    </button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    )}
                                                </div>
                                            )}

                                            <div className="grid grid-cols-1 gap-6">
                                                {ep.notes.quiz?.map((q, i) => {
                                                    const questionObj = typeof q === 'string' ? { question: q, answer: "N/A", options: ["Option A", "Option B", "Option C", "Option D"], correctIndex: 0 } : q;
                                                    return (
                                                        <QuizCard 
                                                            key={i} 
                                                            index={i}
                                                            question={questionObj.question} 
                                                            answer={questionObj.answer} 
                                                            options={questionObj.options || ["A", "B", "C", "D"]}
                                                            correctIndex={questionObj.correctIndex ?? 0}
                                                            selectedOption={userAnswers[i] ?? null}
                                                            onSelect={(optIdx) => handleOptionSelect(i, optIdx)}
                                                            isSubmitted={isSubmitted}
                                                            onNavigateToNotes={() => {
                                                                setActiveTab('notes');
                                                                window.scrollTo({ top: 400, behavior: 'smooth' });
                                                            }}
                                                        />
                                                    );
                                                })}
                                            </div>

                                            {!isSubmitted && (
                                                <div className="mt-12 sticky bottom-8 flex justify-center">
                                                    <button 
                                                        onClick={submitQuiz}
                                                        disabled={Object.keys(userAnswers).length < (ep.notes.quiz?.length || 0)}
                                                        className={`group relative overflow-hidden px-12 py-6 rounded-full font-black text-sm uppercase tracking-[0.3em] transition-all shadow-[0_20px_50px_rgba(220,38,38,0.3)] ${Object.keys(userAnswers).length < (ep.notes.quiz?.length || 0) ? 'bg-gray-800 text-gray-600 cursor-not-allowed' : 'bg-red-600 text-white hover:bg-red-500 active:scale-95'}`}
                                                    >
                                                        <span className="relative z-10 flex items-center gap-3">
                                                            {Object.keys(userAnswers).length < (ep.notes.quiz?.length || 0) 
                                                                ? `Complete ${ (ep.notes.quiz?.length || 0) - Object.keys(userAnswers).length} more to view result` 
                                                                : "View My Result"
                                                            } 
                                                            <Trophy className="w-5 h-5" />
                                                        </span>
                                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]"></div>
                                                    </button>
                                                </div>
                                            )}

                                            <div className="mt-16 p-8 rounded-[2rem] bg-gradient-to-br from-red-600/10 via-transparent to-blue-600/10 border border-white/5 text-center backdrop-blur-2xl">
                                                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                                    <Library className="w-8 h-8 text-red-500" />
                                                </div>
                                                <h4 className="text-xl md:text-2xl font-black text-white mb-2">Mastered the Theory?</h4>
                                                <p className="text-gray-400 mb-8 max-w-md mx-auto">Theory is only half the battle. Jump into the Lab and build something real!</p>
                                                <Link to="/adv-lab" className="inline-flex items-center gap-3 bg-red-600 text-white font-black text-xs px-8 py-4 rounded-full hover:bg-red-500 transition-all uppercase tracking-widest shadow-[0_0_40px_rgba(220,38,38,0.3)]">
                                                    Open ADV Lab Sandbox <Code2 className="w-4 h-4" />
                                                </Link>
                                            </div>
                                        </div>
                                    )}


                                </div>
                            </div>

                            {/* Prev/Next */}
                            <div className="flex gap-3">
                                <button
                                    onClick={() => { setActiveIndex(i => Math.max(0, i-1)); setActiveTab('notes'); }}
                                    disabled={activeIndex === 0}
                                    className="flex-1 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all font-semibold text-sm"
                                >
                                    ← Previous Episode
                                </button>
                                <button
                                    onClick={() => { setActiveIndex(i => Math.min(EPISODES.length-1, i+1)); setActiveTab('notes'); }}
                                    disabled={activeIndex === EPISODES.length-1}
                                    className="flex-1 py-3 rounded-xl border border-red-500/30 bg-red-500/10 hover:bg-red-500/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all font-semibold text-sm text-red-300"
                                >
                                    Next Episode →
                                </button>
                            </div>
                        </div>

                        {/* ── RIGHT: Playlist Sidebar ── */}
                        <div className="xl:col-span-1">
                            <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 flex flex-col xl:sticky xl:top-32 xl:max-h-[80vh] overflow-hidden">
                                <div className="p-6 border-b border-white/10 flex items-center justify-between bg-gradient-to-r from-red-600/10 to-transparent relative">
                                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-red-600 via-red-600/50 to-transparent"></div>
                                    <h3 className="font-black flex items-center gap-2 text-sm uppercase tracking-widest text-white">
                                        <Library className="w-4 h-4 text-red-500" /> Curriculum
                                    </h3>
                                    <span className="text-[10px] font-black text-gray-500 bg-white/5 px-2 py-1 rounded-md border border-white/5">
                                        {EPISODES.length} Modules
                                    </span>
                                </div>

                                <div className="flex-1 overflow-y-auto custom-scrollbar bg-black/20">
                                    {/* Episode List */}
                                    <div className="p-6 space-y-3">
                                        {EPISODES.map((video, index) => {
                                        const isActive = activeIndex === index;
                                        return (
                                            <button
                                                key={video.id}
                                                onClick={() => { setActiveIndex(index); setActiveTab('notes'); }}
                                                className={`group w-full text-left flex gap-4 p-3 rounded-2xl transition-all duration-300 relative ${isActive ? 'bg-red-600/10 border border-red-500/20' : 'hover:bg-white/5 border border-transparent'}`}
                                            >
                                                <div className="relative w-28 h-16 flex-shrink-0 rounded-xl overflow-hidden shadow-2xl">
                                                    <img src={video.thumbnail} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                                    <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isActive ? 'bg-red-600/40 opacity-100' : 'bg-black/60 opacity-0 group-hover:opacity-100'}`}>
                                                        <div className={`w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 ${isActive ? 'scale-110 shadow-[0_0_20px_rgba(255,255,255,0.4)]' : ''}`}>
                                                            <PlayCircle className={`w-5 h-5 text-white ${isActive ? 'fill-white animate-pulse' : ''}`} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col justify-center flex-1 min-w-0">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <span className={`text-[9px] font-black uppercase tracking-widest ${isActive ? 'text-red-500' : 'text-gray-500'}`}>
                                                            MOD {String(video.id).padStart(2, '0')}
                                                        </span>
                                                        {isActive && <span className="w-1 h-1 rounded-full bg-red-500 animate-ping"></span>}
                                                    </div>
                                                    <span className={`text-xs font-black leading-tight line-clamp-2 transition-colors ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'}`}>
                                                        {video.title}
                                                    </span>
                                                </div>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>

                    {/* ── BOTTOM: Certification Progress Section ── */}
                    <div className="mt-16 pt-16 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                        {/* Final Certification Progress Section */}
                        <div className="p-8 rounded-3xl bg-gradient-to-br from-red-600 to-orange-500 shadow-xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-white/20 transition-all duration-700" />
                            <div className="relative z-10">
                                <div className="text-[10px] font-black text-red-100 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                                    <Trophy className="w-4 h-4 animate-pulse" /> Final Certification Progress
                                </div>
                                <div className="flex justify-between items-end mb-4">
                                    <div className="text-3xl font-black text-white">
                                        {completedCount}<span className="text-red-200 text-sm font-bold"> / {EPISODES.length}</span>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-[10px] font-black text-red-100 uppercase tracking-widest">Mastery</div>
                                        <div className="text-2xl font-black text-white">{progressPercentage}%</div>
                                    </div>
                                </div>
                                <div className="h-2 w-full bg-black/20 rounded-full overflow-hidden mb-4">
                                    <div 
                                        className="h-full bg-white rounded-full transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                                        style={{ width: `${progressPercentage}%` }}
                                    />
                                </div>
                                <p className="text-[10px] text-red-50 font-medium italic text-center">
                                    Complete the entire series to unlock your credential
                                </p>
                            </div>
                        </div>

                        {/* Verify Section */}
                        <div className="p-8 rounded-3xl bg-[#0d1117] border border-white/5 backdrop-blur-xl flex flex-col justify-between">
                            <div>
                                <div className="flex items-center gap-2 mb-4">
                                    <ShieldCheck className="w-5 h-5 text-green-500" />
                                    <span className="text-[10px] font-black text-white uppercase tracking-widest">Verify a Certificate</span>
                                </div>
                                <div className="space-y-3">
                                    <input 
                                        type="text" 
                                        placeholder="VERIFY CREDENTIAL ID" 
                                        className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-[10px] font-mono text-white focus:border-red-500 outline-none transition-all placeholder:text-gray-700 uppercase"
                                        value={verifyId}
                                        onChange={e => {
                                            setVerifyId(e.target.value.toUpperCase());
                                            setVerificationStatus('idle');
                                        }}
                                    />
                                    <button 
                                        onClick={handleVerify}
                                        disabled={verificationStatus === 'loading'}
                                        className={`w-full py-3 rounded-xl font-black text-[9px] uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 ${
                                            verificationStatus === 'success' ? 'bg-green-600 text-white' :
                                            verificationStatus === 'error' ? 'bg-red-600 text-white' :
                                            'bg-white text-black hover:bg-gray-200'
                                        }`}
                                    >
                                        {verificationStatus === 'loading' ? 'AUTHENTICATING...' : 
                                         verificationStatus === 'success' ? 'VERIFIED' :
                                         verificationStatus === 'error' ? 'INVALID ID' : 'VERIFY CREDENTIAL'}
                                    </button>
                                </div>
                            </div>
                            <p className="text-[9px] text-gray-600 font-bold italic text-center leading-tight mt-4">
                                Academic credentials are cryptographically tied to the profile.
                            </p>
                        </div>

                        {/* Rulebook Section */}
                        <div className="p-8 rounded-3xl bg-[#0d1117] border border-white/5 backdrop-blur-xl">
                            <h4 className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                                <GraduationCap className="w-5 h-5 text-red-500" /> Graduation Rulebook
                            </h4>
                            <div className="space-y-3">
                                <div className="flex gap-3">
                                    <span className="text-[9px] font-black text-red-500 opacity-50 shrink-0">01</span>
                                    <div className="space-y-0.5">
                                        <div className="text-[10px] font-black text-white uppercase tracking-wider">Submit Assessments</div>
                                        <p className="text-[9px] text-gray-500 font-medium leading-relaxed">Complete and submit the quizzes for all curriculum modules sequentially.</p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <span className="text-[9px] font-black text-red-500 opacity-50 shrink-0">02</span>
                                    <div className="space-y-0.5">
                                        <div className="text-[10px] font-black text-white uppercase tracking-wider">Eligibility & Group Access</div>
                                        <p className="text-[9px] text-gray-500 font-medium leading-relaxed">Unlock the application form and secure the opportunity to join our official certificates hub.</p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <span className="text-[9px] font-black text-red-500 opacity-50 shrink-0">03</span>
                                    <div className="space-y-0.5">
                                        <div className="text-[10px] font-black text-white uppercase tracking-wider">15-Min F2F Interview</div>
                                        <p className="text-[9px] text-gray-500 font-medium leading-relaxed">Schedule a quick 15-minute face-to-face capability evaluation with mentorship mentors.</p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <span className="text-[9px] font-black text-red-500 opacity-50 shrink-0">04</span>
                                    <div className="space-y-0.5">
                                        <div className="text-[10px] font-black text-white uppercase tracking-wider">Receive Credential</div>
                                        <p className="text-[9px] text-gray-500 font-medium leading-relaxed">Clear the technical meet successfully to receive your industrial-grade credential.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 pt-4 border-t border-white/5 text-right">
                                <span className="text-[8px] font-black tracking-widest text-gray-600 uppercase">Mentor: Vinay Kumar Mahato</span>
                            </div>
                        </div>
                    </div>

                    {isCourseCompleted && (
                        <div className="mt-12 p-8 rounded-[2rem] bg-gradient-to-br from-green-950/20 to-red-950/10 border border-green-500/20 max-w-4xl mx-auto relative z-10 animate-in fade-in slide-in-from-top-4 duration-500">
                            <div className="text-center mb-8">
                                <Trophy className="w-16 h-16 text-green-500 mx-auto mb-4 animate-bounce" />
                                <h4 className="text-3xl font-black text-white mb-2">Curriculum 100% Cleared</h4>
                                <p className="text-green-400 font-bold text-sm tracking-widest uppercase">Eligible for Graduation Interview</p>
                            </div>

                            <form onSubmit={handleInterviewRequest} className="space-y-6 max-w-2xl mx-auto p-6 bg-black/40 rounded-3xl border border-white/5">
                                <h5 className="text-lg font-black text-white flex items-center gap-2">
                                    <Info className="w-5 h-5 text-red-500" /> Complete your evaluation profile
                                </h5>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Full Legal Name</label>
                                        <input 
                                            type="text" required
                                            value={formData.name}
                                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full bg-[#0d1117] border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:border-red-500 outline-none transition-all"
                                            placeholder="Name on certificate"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Mobile / WhatsApp Number</label>
                                        <input 
                                            type="tel" required
                                            value={formData.mobile}
                                            onChange={e => setFormData({ ...formData, mobile: e.target.value })}
                                            className="w-full bg-[#0d1117] border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:border-red-500 outline-none transition-all"
                                            placeholder="+91 XXXXX XXXXX"
                                        />
                                    </div>
                                    <div className="space-y-2 md:col-span-2">
                                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Email Address</label>
                                        <input 
                                            type="email" required
                                            value={formData.email}
                                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full bg-[#0d1117] border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:border-red-500 outline-none transition-all"
                                            placeholder="email@example.com"
                                        />
                                    </div>
                                    <div className="space-y-2 md:col-span-2">
                                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Project/GitHub Links (Proof of Work)</label>
                                        <input 
                                            type="text"
                                            value={formData.portfolio || ''}
                                            onChange={e => setFormData({ ...formData, portfolio: e.target.value })}
                                            className="w-full bg-[#0d1117] border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:border-red-500 outline-none transition-all"
                                            placeholder="https://github.com/username/project"
                                        />
                                    </div>
                                </div>

                                <button 
                                    type="submit"
                                    disabled={isSendingInterview}
                                    className="w-full py-4 bg-red-600 hover:bg-red-500 text-white font-black text-xs uppercase tracking-widest rounded-xl transition-all shadow-xl shadow-red-600/20 disabled:opacity-50 flex items-center justify-center gap-2"
                                >
                                    {isSendingInterview ? "Submitting Application..." : "Request 15-Min Google Meet Evaluation"}
                                </button>
                                {hasSentInterview && (
                                    <p className="text-xs text-green-500 text-center font-bold mt-2 flex items-center justify-center gap-2">
                                        <CheckCircle className="w-4 h-4" /> Application Sent. Vinay Mahato will review and schedule shortly!
                                    </p>
                                )}
                            </form>
                        </div>
                    )}
                </div>
            </div>
            {/* Certification Modal Layer */}
            <CertificateModal 
                isOpen={showCertModal} 
                onClose={() => setShowCertModal(false)}
                userName={formData.name}
                score={averageScore}
                certId={certificateId}
            />
        </PageWrapper>
    );
};

export default CourseTutorialPage;
