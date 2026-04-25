import { Link, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PageWrapper from '../components/PageWrapper';
import { PlayCircle, Library, ChevronLeft, BookOpen, Code2, Github, ExternalLink } from 'lucide-react';
import SEO from '../components/SEO';
import { JAVA_EPISODES as EPISODES } from '../data/javaEpisodes';


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

    const [activeTab, setActiveTab] = useState<'notes' | 'code' | 'interview'>('notes');

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

    const ep = EPISODES[activeIndex];

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
                description={`${ep.title}. ${ep.notes.intro} Learn Java programming from scratch with complete notes, code, and interview questions.`}
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
                        <p className="text-gray-400 text-base md:text-lg flex items-center flex-wrap gap-2">
                            Zero to Hero • <span className="text-white font-semibold">{EPISODES.length} Episodes</span> • 100% Free on YouTube
                            <span className="bg-green-500/20 text-green-400 text-[10px] font-black px-3 py-1 rounded-full border border-green-500/30 shadow-[0_0_15px_rgba(34,197,94,0.3)] animate-pulse flex items-center gap-1.5 ml-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                ONGOING PLAYLIST
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
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
                                    <h2 className="text-xl md:text-3xl font-bold text-white leading-tight">{ep.title}</h2>
                                    <div className="flex items-center gap-3">
                                        <a
                                            href={`https://www.youtube.com/watch?v=${ep.youtubeId}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all hover:scale-105 active:scale-95"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                            YouTube
                                        </a>
                                        <Link
                                            to="/adv-lab"
                                            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all hover:scale-105 active:scale-95"
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
                                <div className="flex border-b border-white/10 overflow-x-auto custom-scrollbar whitespace-nowrap scrollbar-hide">
                                    <button onClick={() => setActiveTab('notes')} className={`flex-shrink-0 flex items-center gap-2 px-6 py-4 text-sm font-semibold transition-colors ${activeTab === 'notes' ? 'text-white border-b-2 border-red-500' : 'text-gray-400 hover:text-white'}`}>
                                        <BookOpen className="w-4 h-4" /> Notes
                                    </button>
                                    <button onClick={() => setActiveTab('code')} className={`flex-shrink-0 flex items-center gap-2 px-6 py-4 text-sm font-semibold transition-colors ${activeTab === 'code' ? 'text-white border-b-2 border-red-500' : 'text-gray-400 hover:text-white'}`}>
                                        <Code2 className="w-4 h-4" /> Code
                                    </button>
                                    <button onClick={() => setActiveTab('interview')} className={`flex-shrink-0 flex items-center gap-2 px-6 py-4 text-sm font-semibold transition-colors ${activeTab === 'interview' ? 'text-white border-b-2 border-red-500' : 'text-gray-400 hover:text-white'}`}>
                                        <span className="text-base">💼</span> Interview
                                    </button>
                                    <a
                                        href="https://github.com/Vinaykumarmahato/Java-Full-Course-2026-Zero-to-Pro-Hindi-"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-shrink-0 flex items-center gap-2 px-6 py-4 text-sm text-gray-400 hover:text-white transition-colors"
                                    >
                                        <Github className="w-4 h-4" /> GitHub
                                    </a>
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

                                    {activeTab === 'interview' && (
                                        <div className="space-y-3">
                                            <p className="text-gray-400 text-sm mb-4">Frequently asked interview questions from this episode:</p>
                                            {ep.notes.interview.map((q, i) => (
                                                <div key={i} className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-all">
                                                    <span className="text-red-500 font-black text-sm shrink-0 mt-0.5">Q{i+1}.</span>
                                                    <p className="text-gray-200 text-sm md:text-base leading-relaxed flex-1">{q}</p>
                                                </div>
                                            ))}
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
                                <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#080f20]/50 rounded-t-2xl">
                                    <h3 className="font-bold flex items-center gap-2 text-base">
                                        <Library className="w-5 h-5 text-red-500" />
                                        Complete Playlist
                                    </h3>
                                    <span className="text-xs font-mono text-gray-500">
                                        {EPISODES.length} Videos
                                    </span>
                                </div>

                                <div className="flex-1 overflow-y-auto p-4 space-y-2 custom-scrollbar">
                                    {EPISODES.map((video, index) => {
                                        const isActive = activeIndex === index;
                                        return (
                                            <button
                                                key={video.id}
                                                onClick={() => { setActiveIndex(index); setActiveTab('notes'); }}
                                                className={`w-full text-left flex gap-3 p-2.5 rounded-xl transition-all duration-200 ${isActive ? 'bg-red-500/15 border border-red-500/40' : 'hover:bg-white/5 border border-transparent'}`}
                                            >
                                                <div className="relative w-24 h-14 flex-shrink-0 bg-black rounded-lg overflow-hidden border border-white/10">
                                                    <img src={video.thumbnail} alt="" className="w-full h-full object-cover" />
                                                    {isActive && (
                                                        <div className="absolute inset-0 bg-red-600/50 flex items-center justify-center">
                                                            <PlayCircle className="w-5 h-5 text-white" />
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="flex flex-col justify-center flex-1 min-w-0">
                                                    <span className={`text-xs font-semibold leading-snug line-clamp-2 ${isActive ? 'text-white' : 'text-gray-300'}`}>
                                                        {video.title}
                                                    </span>
                                                    <span className="text-[11px] text-gray-500 mt-1">EP {String(video.id).padStart(2, '0')}</span>
                                                </div>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageWrapper>
    );
};

export default CourseTutorialPage;
