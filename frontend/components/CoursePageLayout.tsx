import React, { useState, useEffect, useMemo } from 'react';
import PageWrapper from './PageWrapper';
import SEO from './SEO';
import { BookOpen, Video, Code, Check, CheckCircle2, HelpCircle, ChevronDown, ChevronUp, Share2, Sparkles, Terminal } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

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

const CoursePageLayout: React.FC<CoursePageLayoutProps> = ({ 
    title, 
    description, 
    topics, 
    icon: Icon, 
    colorClass, 
    children, 
    activeTopicIndex, 
    onTopicClick 
}) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [copiedUrl, setCopiedUrl] = useState(false);

    // Slug generator helper (100% null-safe)
    const getSlug = (topic: any) => {
        if (!topic || typeof topic !== 'string') return '';
        return topic.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
    };

    // Helper to parse level and clean title from raw topic string (100% null-safe)
    const parseTopic = (raw: any) => {
        if (!raw || typeof raw !== 'string') return { level: '', cleanTitle: '' };
        let clean = raw.replace(/^\d+[\.\)\-]\s*/, '').trim(); // Remove leading "1. ", "2) ", etc.
        let level = '';

        const levelMatch = clean.match(/^\[(Beginner|Intermediate|Advanced|Professional|Expert|Mastery|Basic|Overview)\]\s*/i);
        if (levelMatch) {
            level = levelMatch[1].charAt(0).toUpperCase() + levelMatch[1].slice(1).toLowerCase();
            clean = clean.substring(levelMatch[0].length).trim();
        }

        return { level, cleanTitle: clean };
    };

    const getLevelBadgeStyles = (level: string) => {
        if (!level) return 'bg-gray-500/10 text-gray-600 dark:text-gray-400 border-gray-500/20';
        switch (level.toLowerCase()) {
            case 'beginner':
            case 'basic':
            case 'overview':
                return 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20';
            case 'intermediate':
                return 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20';
            case 'advanced':
                return 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20';
            case 'professional':
            case 'expert':
            case 'mastery':
                return 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20';
            default:
                return 'bg-gray-500/10 text-gray-600 dark:text-gray-400 border-gray-500/20';
        }
    };

    // Deep linking & URL Hash listener on mount
    useEffect(() => {
        if (!onTopicClick || !Array.isArray(topics) || topics.length === 0) return;

        const hash = (window.location.hash || '').replace('#', '').trim();
        const searchParams = new URLSearchParams(window.location.search);
        const topicQuery = searchParams.get('topic');

        const targetIdentifier = hash || topicQuery;
        if (targetIdentifier) {
            const matchedIndex = topics.findIndex((t, idx) => {
                if (!t || typeof t !== 'string') return false;
                const slug = getSlug(t);
                return slug === targetIdentifier || String(idx + 1) === targetIdentifier || t.toLowerCase().includes(targetIdentifier.toLowerCase());
            });

            if (matchedIndex !== -1 && matchedIndex !== activeTopicIndex) {
                onTopicClick(matchedIndex);
            }
        }
    }, [topics, onTopicClick]);

    // Update URL hash when active topic changes
    const handleTopicSelect = (index: number) => {
        if (onTopicClick) {
            onTopicClick(index);
            if (topics && topics[index]) {
                const slug = getSlug(topics[index]);
                if (slug) {
                    window.history.replaceState(null, '', `${location.pathname}#${slug}`);
                }
            }
        }
    };

    // Clean topic name (removes leading "1. ", "[Beginner] ", etc.)
    const rawTopic = (activeTopicIndex !== undefined && topics[activeTopicIndex]) ? topics[activeTopicIndex] : null;
    const { level: currentTopicLevel, cleanTitle: cleanTopicName } = useMemo(() => {
        if (!rawTopic) return { level: '', cleanTitle: title };
        return parseTopic(rawTopic);
    }, [rawTopic, title]);

    const activeSlug = rawTopic ? getSlug(rawTopic) : '';

    // Progress Tracking
    const storageKey = `course_progress_${title.toLowerCase().replace(/\s+/g, '_')}`;
    const [completedTopics, setCompletedTopics] = useState<number[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const loadProgress = async () => {
            const token = localStorage.getItem('adv_coder_token');
            if (!token) {
                setIsLoaded(true);
                return;
            }
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:8080'}/api/enrollments/progress`, {
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
            await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:8080'}/api/enrollments/update-progress`, {
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
        btnBg: string;
    }> = {
        orange: { text: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-500', gradientFrom: 'from-orange-600', gradientTo: 'to-yellow-500', shadow: 'shadow-orange-900/20', hoverBg: 'hover:bg-orange-50', hoverText: 'hover:text-orange-600', hoverBorder: 'hover:border-orange-100', btnBg: 'bg-orange-600' },
        amber: { text: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-500', gradientFrom: 'from-amber-600', gradientTo: 'to-yellow-500', shadow: 'shadow-amber-900/20', hoverBg: 'hover:bg-amber-50', hoverText: 'hover:text-amber-600', hoverBorder: 'hover:border-amber-100', btnBg: 'bg-amber-600' },
        blue: { text: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-500', gradientFrom: 'from-blue-600', gradientTo: 'to-cyan-500', shadow: 'shadow-blue-900/20', hoverBg: 'hover:bg-blue-50', hoverText: 'hover:text-blue-600', hoverBorder: 'hover:border-blue-100', btnBg: 'bg-blue-600' },
        sky: { text: 'text-sky-600', bg: 'bg-sky-50', border: 'border-sky-500', gradientFrom: 'from-sky-600', gradientTo: 'to-blue-500', shadow: 'shadow-sky-900/20', hoverBg: 'hover:bg-sky-50', hoverText: 'hover:text-sky-600', hoverBorder: 'hover:border-sky-100', btnBg: 'bg-sky-600' },
        cyan: { text: 'text-cyan-600', bg: 'bg-cyan-50', border: 'border-cyan-500', gradientFrom: 'from-cyan-600', gradientTo: 'to-blue-500', shadow: 'shadow-cyan-900/20', hoverBg: 'hover:bg-cyan-50', hoverText: 'hover:text-cyan-600', hoverBorder: 'hover:border-cyan-100', btnBg: 'bg-cyan-600' },
        teal: { text: 'text-teal-600', bg: 'bg-teal-50', border: 'border-teal-500', gradientFrom: 'from-teal-600', gradientTo: 'to-emerald-500', shadow: 'shadow-teal-900/20', hoverBg: 'hover:bg-teal-50', hoverText: 'hover:text-teal-600', hoverBorder: 'hover:border-teal-100', btnBg: 'bg-teal-600' },
        emerald: { text: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-500', gradientFrom: 'from-emerald-600', gradientTo: 'to-teal-500', shadow: 'shadow-emerald-900/20', hoverBg: 'hover:bg-emerald-50', hoverText: 'hover:text-emerald-600', hoverBorder: 'hover:border-emerald-100', btnBg: 'bg-emerald-600' },
        green: { text: 'text-green-600', bg: 'bg-green-50', border: 'border-green-500', gradientFrom: 'from-green-600', gradientTo: 'to-emerald-500', shadow: 'shadow-green-900/20', hoverBg: 'hover:bg-green-50', hoverText: 'hover:text-green-600', hoverBorder: 'hover:border-green-100', btnBg: 'bg-green-600' },
        yellow: { text: 'text-yellow-500', bg: 'bg-yellow-50', border: 'border-yellow-500', gradientFrom: 'from-yellow-500', gradientTo: 'to-orange-400', shadow: 'shadow-yellow-900/20', hoverBg: 'hover:bg-yellow-50', hoverText: 'hover:text-yellow-600', hoverBorder: 'hover:border-yellow-100', btnBg: 'bg-yellow-600' },
        red: { text: 'text-red-600', bg: 'bg-red-50', border: 'border-red-500', gradientFrom: 'from-red-600', gradientTo: 'to-rose-500', shadow: 'shadow-red-900/20', hoverBg: 'hover:bg-red-50', hoverText: 'hover:text-red-600', hoverBorder: 'hover:border-red-100', btnBg: 'bg-red-600' },
        rose: { text: 'text-rose-600', bg: 'bg-rose-50', border: 'border-rose-500', gradientFrom: 'from-rose-600', gradientTo: 'to-red-500', shadow: 'shadow-rose-900/20', hoverBg: 'hover:bg-rose-50', hoverText: 'hover:text-rose-600', hoverBorder: 'hover:border-rose-100', btnBg: 'bg-rose-600' },
        pink: { text: 'text-pink-600', bg: 'bg-pink-50', border: 'border-pink-500', gradientFrom: 'from-pink-600', gradientTo: 'to-rose-500', shadow: 'shadow-pink-900/20', hoverBg: 'hover:bg-pink-50', hoverText: 'hover:text-pink-600', hoverBorder: 'hover:border-pink-100', btnBg: 'bg-pink-600' },
        purple: { text: 'text-purple-600', bg: 'bg-purple-50', border: 'border-purple-500', gradientFrom: 'from-purple-600', gradientTo: 'to-indigo-500', shadow: 'shadow-purple-900/20', hoverBg: 'hover:bg-purple-50', hoverText: 'hover:text-purple-600', hoverBorder: 'hover:border-purple-100', btnBg: 'bg-purple-600' },
        violet: { text: 'text-violet-600', bg: 'bg-violet-50', border: 'border-violet-500', gradientFrom: 'from-violet-600', gradientTo: 'to-purple-500', shadow: 'shadow-violet-900/20', hoverBg: 'hover:bg-violet-50', hoverText: 'hover:text-violet-600', hoverBorder: 'hover:border-violet-100', btnBg: 'bg-violet-600' },
        indigo: { text: 'text-indigo-600', bg: 'bg-indigo-50', border: 'border-indigo-500', gradientFrom: 'from-indigo-600', gradientTo: 'to-purple-500', shadow: 'shadow-indigo-900/20', hoverBg: 'hover:bg-indigo-50', hoverText: 'hover:text-indigo-600', hoverBorder: 'hover:border-indigo-100', btnBg: 'bg-indigo-600' },
        slate: { text: 'text-slate-600', bg: 'bg-slate-50', border: 'border-slate-500', gradientFrom: 'from-slate-600', gradientTo: 'to-gray-500', shadow: 'shadow-slate-900/20', hoverBg: 'hover:bg-slate-50', hoverText: 'hover:text-slate-600', hoverBorder: 'hover:border-slate-100', btnBg: 'bg-slate-600' },
        gray: { text: 'text-gray-600', bg: 'bg-gray-50', border: 'border-gray-500', gradientFrom: 'from-gray-600', gradientTo: 'to-gray-500', shadow: 'shadow-gray-900/20', hoverBg: 'hover:bg-gray-50', hoverText: 'hover:text-gray-600', hoverBorder: 'hover:border-gray-100', btnBg: 'bg-gray-600' },
    };

    const colors = colorMap[colorClass] || colorMap['gray'];

    // Dynamic Programmatic SEO Meta
    const seoTitle = (activeTopicIndex !== undefined && activeTopicIndex > 0)
        ? `${cleanTopicName} - ${title} Tutorial, Code & Online Compiler | ADV Indian Coder`
        : `${title} Tutorial & Certification Course with Online Compiler | ADV Indian Coder`;

    const seoDescription = (activeTopicIndex !== undefined && activeTopicIndex > 0)
        ? `Learn ${cleanTopicName} in ${title} with step-by-step definitions, syntax blueprints, visual diagrams, real-world examples, and interactive live execution in ADV Lab. Free tutorial at ADV Indian Coder.`
        : `${description} Learn ${title} with hands-on practice in ADV Lab, visual diagrams, real-world projects, free certification, and placement assistance.`;

    const seoKeywords = `${cleanTopicName}, ${cleanTopicName} in ${title}, ${cleanTopicName} syntax, ${cleanTopicName} examples, ${cleanTopicName} tutorial, ${title} tutorial, ${title} course, learn ${title} online, ${title} compiler, ADV Lab, ADV Indian Coder, Vinay Kumar Mahato`;

    // Dynamic Rich Schemas for Google Search Dominance
    const courseSchema = {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": `${title} - Complete Hands-on Course & Certification`,
        "description": description,
        "provider": {
            "@type": "EducationalOrganization",
            "name": "ADV Indian Coder",
            "sameAs": "https://www.advindiancoder.com",
            "url": "https://www.advindiancoder.com",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bengaluru",
                "addressRegion": "Karnataka",
                "addressCountry": "IN"
            },
            "areaServed": ["Bengaluru", "Hyderabad", "Pune", "Noida", "Gurgaon", "Delhi NCR", "Chennai", "Mumbai", "Kolkata", "India"]
        },
        "hasCourseInstance": {
            "@type": "CourseInstance",
            "courseMode": ["Online", "Interactive", "Self-Paced"],
            "courseWorkload": "PT30H",
            "instructor": {
                "@type": "Person",
                "name": "Vinay Kumar Mahato",
                "jobTitle": "Lead Software Engineer & Instructor",
                "sameAs": "https://www.linkedin.com/in/vinaykumarmahato"
            }
        },
        "hasPart": (topics || []).slice(0, 15).map((t, idx) => ({
            "@type": "Course",
            "name": parseTopic(t).cleanTitle || `Topic ${idx + 1}`,
            "position": idx + 1,
            "url": `https://www.advindiancoder.com${location.pathname}#${getSlug(t) || idx + 1}`
        }))
    };

    const techArticleSchema = {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        "headline": `${cleanTopicName || title} - ${title} Tutorial and Examples`,
        "description": `Comprehensive technical explanation of ${cleanTopicName || title} in ${title} with syntax blueprint, diagrams, and runnable code in ADV Lab.`,
        "author": {
            "@type": "Person",
            "name": "Vinay Kumar Mahato",
            "url": "https://www.linkedin.com/in/vinaykumarmahato"
        },
        "publisher": {
            "@type": "Organization",
            "name": "ADV Indian Coder",
            "url": "https://www.advindiancoder.com",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.advindiancoder.com/assets/logo.png"
            }
        },
        "mainEntityOfPage": `https://www.advindiancoder.com${location.pathname}${activeSlug ? '#' + activeSlug : ''}`,
        "keywords": seoKeywords
    };

    const breadcrumbsSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.advindiancoder.com"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Courses",
                "item": "https://www.advindiancoder.com/courses"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": title,
                "item": `https://www.advindiancoder.com${location.pathname}`
            },
            ...(rawTopic ? [{
                "@type": "ListItem",
                "position": 4,
                "name": cleanTopicName || 'Topic',
                "item": `https://www.advindiancoder.com${location.pathname}#${activeSlug}`
            }] : [])
        ]
    };

    // Course FAQs tailored for search intent
    const faqs = [
        {
            q: `What is ${cleanTopicName || title} in ${title}?`,
            a: `${cleanTopicName || title} is a fundamental concept in ${title} engineered for writing clean, efficient, and maintainable software. You can study the full syntax blueprint, diagrams, and execute code live on ADV Indian Coder.`
        },
        {
            q: `How can I practice and run ${title} code online?`,
            a: `You can practice ${title} code for free using ADV Lab — our high-performance interactive online compiler with zero setup required directly in your browser.`
        },
        {
            q: `Is the ${title} course certificate free on ADV Indian Coder?`,
            a: `Yes! Complete all course topics, track your progress, and take the final assessment to earn a verifiable Certificate of Completion at no cost.`
        },
        {
            q: `Why choose ADV Indian Coder for learning ${title}?`,
            a: `ADV Indian Coder delivers industry-standard curriculums, interactive Mermaid architecture diagrams, real-world case studies, and integrated compiler execution so you learn by doing.`
        }
    ];

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
            }
        }))
    };

    const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

    const handleShare = () => {
        const fullUrl = window.location.href;
        navigator.clipboard.writeText(fullUrl);
        setCopiedUrl(true);
        setTimeout(() => setCopiedUrl(false), 2000);
    };

    const renderTopicList = (isMobile = false) => (
        <ul className="space-y-1">
            {(topics || []).map((topic, index) => {
                if (!topic) return null;
                const slug = getSlug(topic) || `topic-${index + 1}`;
                const isActive = activeTopicIndex === index;
                const isCompleted = Array.isArray(completedTopics) && completedTopics.includes(index);
                const parsed = parseTopic(topic);
                
                // Check if we should render a Section Tier Divider (e.g. Beginner, Intermediate, etc.)
                const prevParsed = index > 0 && topics[index - 1] ? parseTopic(topics[index - 1]) : null;
                const showTierHeader = parsed.level && (!prevParsed || prevParsed.level !== parsed.level);

                const baseClasses = `block w-full text-left px-3.5 py-2.5 rounded-xl text-sm transition-all duration-200 border border-transparent`;
                const activeClasses = `${colors.bg} ${colors.text} ${colors.border} dark:bg-gray-800 dark:text-white font-bold shadow-sm`;
                const inactiveClasses = `text-gray-600 dark:text-gray-400 ${colors.hoverBg} dark:hover:bg-gray-800 ${colors.hoverText} dark:hover:text-white ${colors.hoverBorder} dark:hover:border-gray-700`;

                return (
                    <React.Fragment key={index}>
                        {showTierHeader && (
                            <li className="pt-4 pb-2 px-1">
                                <div className="flex items-center gap-2">
                                    <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md border ${getLevelBadgeStyles(parsed.level)}`}>
                                        {parsed.level} Tier
                                    </span>
                                    <div className="h-[1px] flex-1 bg-gray-200 dark:bg-gray-800" />
                                </div>
                            </li>
                        )}
                        <li>
                            {onTopicClick ? (
                                <button
                                    onClick={() => {
                                        handleTopicSelect(index);
                                        if (isMobile) setIsMobileDrawerOpen(false);
                                    }}
                                    className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses} flex items-center justify-between group/item`}
                                >
                                    <div className="flex items-center min-w-0 pr-2">
                                        <span className={`mr-2.5 shrink-0 text-xs ${isActive ? 'opacity-100 font-black text-red-500' : 'opacity-40 font-semibold'}`}>
                                            {index + 1}.
                                        </span> 
                                        <span className="truncate leading-tight font-medium">{parsed.cleanTitle}</span>
                                    </div>
                                    {isCompleted && <Check className="w-4 h-4 ml-1 text-green-500 shrink-0" />}
                                </button>
                            ) : (
                                <a
                                    href={`#${slug}`}
                                    onClick={() => {
                                        if (isMobile) setIsMobileDrawerOpen(false);
                                    }}
                                    className={`${baseClasses} ${inactiveClasses} flex items-center justify-between`}
                                >
                                    <div className="flex items-center min-w-0 pr-2">
                                        <span className="mr-2.5 opacity-40 shrink-0 text-xs font-semibold">{index + 1}.</span> 
                                        <span className="truncate leading-tight font-medium">{parsed.cleanTitle}</span>
                                    </div>
                                    {isCompleted && <Check className="w-4 h-4 ml-1 text-green-500 shrink-0" />}
                                </a>
                            )}
                        </li>
                    </React.Fragment>
                );
            })}
        </ul>
    );

    return (
        <PageWrapper>
            <SEO 
                title={seoTitle}
                description={seoDescription}
                keywords={seoKeywords}
                canonical={`${location.pathname}${activeSlug ? '#' + activeSlug : ''}`}
                ogType="article"
                schema={[courseSchema, techArticleSchema, breadcrumbsSchema, faqSchema]}
            />
            <div className="min-h-screen bg-gray-50 dark:bg-black relative">
                {/* Background decorative elements */}
                <div className={`absolute top-0 right-0 w-1/2 h-96 bg-gradient-to-b ${colors.gradientFrom}/5 to-transparent pointer-events-none`} />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 sm:pt-40 md:pt-44 lg:pt-48 pb-24 lg:pb-12 relative z-10">
                    
                    {/* Mobile Sticky Quick Switcher Bar */}
                    <div className="lg:hidden mb-6 sticky top-28 z-30">
                        <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md p-3 rounded-2xl shadow-lg border border-gray-200/80 dark:border-gray-800 flex items-center justify-between gap-3">
                            <div className="flex items-center gap-2.5 min-w-0">
                                {Icon && <Icon className={`w-5 h-5 shrink-0 ${colors.text}`} />}
                                <div className="min-w-0">
                                    <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                                        Topic {activeTopicIndex !== undefined ? activeTopicIndex + 1 : 1} of {topics.length}
                                    </div>
                                    <div className="text-sm font-black text-gray-900 dark:text-white truncate">
                                        {cleanTopicName}
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsMobileDrawerOpen(true)}
                                type="button"
                                className={`px-4 py-2 rounded-xl text-xs font-black text-white shadow-md active:scale-95 transition-transform flex items-center gap-1.5 shrink-0 ${colors.btnBg}`}
                            >
                                <span>📚 Index</span>
                                <ChevronDown className="w-3.5 h-3.5" />
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        {/* Desktop Sidebar / Table of Contents (Hidden on Mobile) */}
                        <div className="hidden lg:block lg:col-span-1">
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

                                {renderTopicList(false)}
                            </div>
                        </div>

                        {/* Mobile Slide-Over Drawer Modal */}
                        {isMobileDrawerOpen && (
                            <div className="fixed inset-0 z-50 lg:hidden">
                                <div 
                                    className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                                    onClick={() => setIsMobileDrawerOpen(false)}
                                />
                                <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
                                    <div className="w-screen max-w-sm bg-white dark:bg-gray-900 shadow-2xl flex flex-col border-l border-gray-200 dark:border-gray-800 animate-in slide-in-from-right duration-300">
                                        {/* Drawer Header */}
                                        <div className="p-5 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between bg-gray-50/50 dark:bg-gray-800/50">
                                            <div className="flex items-center gap-2.5">
                                                {Icon && <Icon className={`w-5 h-5 ${colors.text}`} />}
                                                <h3 className="font-black text-base text-gray-900 dark:text-white truncate">
                                                    {title}
                                                </h3>
                                            </div>
                                            <button 
                                                onClick={() => setIsMobileDrawerOpen(false)}
                                                className="p-2 rounded-xl text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                                            >
                                                ✕
                                            </button>
                                        </div>

                                        {/* Progress Bar in Drawer */}
                                        <div className="p-5 pb-3 border-b border-gray-100 dark:border-gray-800/60">
                                            <div className="flex justify-between items-center text-xs font-bold text-gray-500 mb-2">
                                                <span>Course Completion</span>
                                                <span>{completionPercent}%</span>
                                            </div>
                                            <div className="bg-gray-200 dark:bg-gray-800 rounded-full h-2 overflow-hidden">
                                                <div 
                                                    className={`h-full bg-gradient-to-r ${colors.gradientFrom} ${colors.gradientTo}`}
                                                    style={{ width: `${completionPercent}%` }}
                                                />
                                            </div>
                                        </div>

                                        {/* Topics List in Drawer */}
                                        <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
                                            {renderTopicList(true)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Main Content */}
                        <div className="lg:col-span-3">
                            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl border border-gray-200/50 dark:border-gray-800/50 min-h-[60vh]">
                                {/* Badges and Quick Tools */}
                                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                                    <div className="flex flex-wrap items-center gap-2">
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20 text-xs font-black tracking-wide uppercase">
                                            📍 #1 Rated Course in Bengaluru, Hyderabad, Pune & India
                                        </span>
                                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-bold">
                                            ✨ Free Certificate & Lab IDE
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button 
                                            onClick={handleShare}
                                            type="button"
                                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-semibold transition-all"
                                            title="Share this topic link"
                                        >
                                            <Share2 className="w-3.5 h-3.5" />
                                            <span>{copiedUrl ? 'Copied Link!' : 'Share Topic'}</span>
                                        </button>
                                    </div>
                                </div>

                                {/* Active Topic Level Tag (if any) */}
                                {currentTopicLevel && (
                                    <div className="mb-3">
                                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider border shadow-sm ${getLevelBadgeStyles(currentTopicLevel)}`}>
                                            <Sparkles className="w-3.5 h-3.5" />
                                            {currentTopicLevel} Module
                                        </span>
                                    </div>
                                )}

                                <h1 className={`text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r ${colors.gradientFrom} ${colors.gradientTo} leading-tight`}>
                                    {cleanTopicName}
                                </h1>

                                {(activeTopicIndex === undefined || activeTopicIndex === 0) && (
                                    <>
                                        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">{description}</p>
                                        <div className={`bg-gradient-to-r ${colors.bg} to-transparent dark:from-gray-800 dark:to-transparent border-l-4 ${colors.border} p-6 rounded-r-xl mb-10`}>
                                            <p className={`font-medium ${colors.text} dark:text-gray-200 flex items-start`}>
                                                <span className="text-2xl mr-4">💡</span>
                                                <span>Welcome to the {title} course! This comprehensive guide will take you step-by-step from foundational concepts to production-level mastery.</span>
                                            </p>
                                        </div>
                                    </>
                                )}

                                <div className="prose dark:prose-invert max-w-none">
                                    {/* Render Video Overview ONLY on Topic 0 (Introduction Page) */}
                                    {(activeTopicIndex === undefined || activeTopicIndex === 0) && (
                                        <div className="mb-10">
                                            <h2 className="text-2xl font-bold mb-4 flex items-center text-gray-900 dark:text-white">
                                                <Video className={`w-7 h-7 mr-3 ${colors.text}`} />
                                                Course Video Overview
                                            </h2>
                                            <div className={`aspect-video bg-black rounded-2xl flex items-center justify-center shadow-2xl ${colors.shadow} border border-gray-800 relative overflow-hidden group cursor-pointer`}>
                                                <div className={`absolute inset-0 bg-gradient-to-tr ${colors.gradientFrom}/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                                                <div className={`w-20 h-20 ${colors.btnBg} rounded-full flex items-center justify-center shadow-lg shadow-black/40 group-hover:scale-110 transition-transform duration-300 z-10`}>
                                                    <Video className="w-10 h-10 text-white fill-current" />
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {children}

                                    {/* Navigation Buttons */}
                                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
                                        <div className="w-full sm:w-1/3">
                                            {activeTopicIndex !== undefined && activeTopicIndex > 0 && onTopicClick ? (
                                                <button
                                                    onClick={() => handleTopicSelect(activeTopicIndex - 1)}
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
                                                        handleTopicSelect(activeTopicIndex + 1);
                                                    }}
                                                    className={`w-full flex items-center justify-center px-6 py-4 rounded-xl text-base font-bold text-white shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 ${colors.btnBg} hover:brightness-110`}
                                                >
                                                    Next →
                                                </button>
                                            ) : (
                                                <div />
                                            )}
                                        </div>
                                    </div>

                                    {/* Google Rich-Snippet FAQ Accordion Section */}
                                    <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
                                        <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-2">
                                            <HelpCircle className="w-5 h-5 text-red-500" />
                                            Frequently Asked Questions about {cleanTopicName}
                                        </h3>
                                        <div className="space-y-3">
                                            {faqs.map((faq, index) => (
                                                <div 
                                                    key={index} 
                                                    className="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden transition-all bg-gray-50/50 dark:bg-gray-800/30"
                                                >
                                                    <button
                                                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                                        className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-semibold text-gray-800 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                                                    >
                                                        <span>{faq.q}</span>
                                                        {openFaq === index ? (
                                                            <ChevronUp className="w-5 h-5 text-red-500 shrink-0" />
                                                        ) : (
                                                            <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                                                        )}
                                                    </button>
                                                    {openFaq === index && (
                                                        <div className="px-5 pb-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-100 dark:border-gray-800/60 pt-3">
                                                            {faq.a}
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
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
