import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, Book, Play, AppWindow, Command, HelpCircle, ShieldCheck, FileText, Briefcase, GraduationCap, Users, Code2, Youtube, Target, Terminal, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { COURSES, MASTERCLASSES, NAV_LINKS } from '../constants';
import { JAVA_EPISODES } from '../data/javaEpisodes';
import { COMPETITIVE_EXAMS } from '../data/examHubData';

// All Platform System Features Index for Instant Query Matching
const SYSTEM_FEATURES = [
    {
        keywords: ['certificate', 'verify', 'verification', 'credential', 'student id', 'adv-', 'registry', 'academic', 'diploma', 'degree', 'validate', 'roll number', 'serial'],
        title: 'Verify Academic Certificate',
        path: '/certificate-directory',
        type: 'Service',
        description: 'Official ADV Academy Academic Registry & Credential Verification System'
    },
    {
        keywords: ['certificate directory', 'verified students', 'graduates', 'alumni wall'],
        title: 'Verified Student Registry Directory',
        path: '/certificate-directory',
        type: 'Service',
        description: 'Browse all verified graduates, certificate holders, and credential IDs'
    },
    {
        keywords: ['adv lab', 'ide', 'compiler', 'online compiler', 'code editor', 'browser ide', 'github commit', 'linkedin post', 'run code', 'execute code'],
        title: 'ADV Lab - Online Code Compiler & IDE',
        path: '/adv-lab',
        type: 'IDE',
        description: 'India\'s smartest browser IDE with GitHub Auto-Commit & LinkedIn 1-Click Posts'
    },
    {
        keywords: ['java compiler', 'online java compiler', 'run java', 'java ide', 'compile java'],
        title: 'Online Java Compiler',
        path: '/online-java-compiler',
        type: 'IDE',
        description: 'Write, compile & execute Java code instantly with Monaco Editor'
    },
    {
        keywords: ['python compiler', 'online python compiler', 'run python', 'python ide', 'compile python'],
        title: 'Online Python Compiler',
        path: '/online-python-compiler',
        type: 'IDE',
        description: 'Run Python 3 scripts in browser sandbox with real-time output'
    },
    {
        keywords: ['c++ compiler', 'cpp compiler', 'online c++ compiler', 'run c++', 'compile cpp'],
        title: 'Online C++ Compiler',
        path: '/online-cpp-compiler',
        type: 'IDE',
        description: 'Compile and run C++17 code with GCC backend'
    },
    {
        keywords: ['c compiler', 'online c compiler', 'run c', 'compile c'],
        title: 'Online C Compiler',
        path: '/online-c-compiler',
        type: 'IDE',
        description: 'Execute C programming code with memory & terminal output'
    },
    {
        keywords: ['js compiler', 'javascript compiler', 'online javascript compiler', 'run js'],
        title: 'Online JavaScript Compiler',
        path: '/online-javascript-compiler',
        type: 'IDE',
        description: 'Test JavaScript ES6+ code with live console logger'
    },
    {
        keywords: ['job', 'jobs', 'hiring', 'career', 'freshers', 'internship', 'off campus', 'recruitment', 'google', 'microsoft', 'wipro', 'hcl', 'salesforce', 'visa'],
        title: 'Latest Software Developer Jobs',
        path: '/jobs',
        type: 'Jobs',
        description: 'Curated direct hiring links for Freshers & Experienced Engineers'
    },
    {
        keywords: ['telegram jobs', 'job alerts', 'job notification', 'telegram channel'],
        title: 'Join Telegram Job Alerts Channel',
        path: 'https://t.me/advindiancoder',
        type: 'Jobs',
        description: 'Get instant daily software job notifications on Telegram'
    },
    {
        keywords: ['practice', 'practice hub', 'coding challenges', 'problems', 'full stack projects', 'dsa problem'],
        title: 'Full Stack Practice Hub',
        path: '/practice',
        type: 'Practice',
        description: 'Build real-world React, Node.js & Python capstone projects'
    },
    {
        keywords: ['notes', 'pdf', 'handwritten notes', 'vault', 'cheat sheet', 'study material', 'download notes'],
        title: 'The Notes Vault & Cheat Sheets',
        path: '/resources',
        type: 'Notes',
        description: 'Download premium handwritten notes & quick revision PDFs'
    },
    {
        keywords: ['upsc', 'upsc syllabus', 'upsc csat', 'civil services', 'upsc engineering'],
        title: 'UPSC Syllabus & Exam Guide',
        path: '/upsc-syllabus',
        type: 'Exam',
        description: 'Complete UPSC CSE CSAT & Technical Exam Syllabus breakdown'
    },
    {
        keywords: ['community', 'discord', 'telegram', 'whatsapp', 'group', 'developer chat'],
        title: 'Developer Community Hub',
        path: '/community',
        type: 'Community',
        description: 'Join 10,000+ developers on Discord, Telegram & WhatsApp'
    },
    {
        keywords: ['masterclass', 'bootcamp', 'live class', 'mentorship', '30 day bootcamp'],
        title: 'Live 30-Day Coding Masterclass',
        path: '/masterclass',
        type: 'Masterclass',
        description: 'Intensive live coding cohort with doubt clearing & placement support'
    },
    {
        keywords: ['success stories', 'reviews', 'alumni', 'placements', 'wall of fame'],
        title: 'Alumni Wall of Fame & Success Stories',
        path: '/success-stories',
        type: 'Page',
        description: 'Real student transformation stories & placement proofs'
    },
    {
        keywords: ['about', 'vinay', 'vinay kumar mahato', 'founder', 'mission'],
        title: 'About ADV Indian Coder',
        path: '/about',
        type: 'Page',
        description: 'Learn about our mission to democratize software engineering education'
    },
    {
        keywords: ['faq', 'questions', 'doubt', 'help', 'pricing', 'cohort fee'],
        title: 'Frequently Asked Questions (FAQ)',
        path: '/faq',
        type: 'Page',
        description: 'Answers to enrollment, mentorship, and course questions'
    },
    {
        keywords: ['contact', 'support', 'email', 'helpdesk', 'inquiry'],
        title: 'Contact Support & Mentors',
        path: '/contact',
        type: 'Page',
        description: 'Get in touch with ADV Indian Coder mentors & support team'
    }
];

const GlobalSearch = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<{ type: string; title: string; path: string; description?: string }[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (isOpen) {
            inputRef.current?.focus();
            setQuery('');
        }
    }, [isOpen]);

    useEffect(() => {
        if (!query.trim()) {
            setResults([]);
            return;
        }

        const searchTerm = query.toLowerCase().trim();
        const filteredResults: any[] = [];
        const addedPaths = new Set<string>();

        const addResult = (item: { type: string; title: string; path: string; description?: string }) => {
            const key = `${item.type}:${item.path}:${item.title}`;
            if (!addedPaths.has(key)) {
                addedPaths.add(key);
                filteredResults.push(item);
            }
        };

        // 1. Search in System Features & Concept Index (Certificate verification, IDE, Jobs, Notes, etc.)
        SYSTEM_FEATURES.forEach(sf => {
            if (sf.title.toLowerCase().includes(searchTerm) || sf.keywords.some(k => k.includes(searchTerm) || searchTerm.includes(k))) {
                addResult({
                    type: sf.type,
                    title: sf.title,
                    path: sf.path,
                    description: sf.description
                });
            }
        });

        // 2. Search in Courses & Technologies
        COURSES.forEach(c => {
            if (c.title.toLowerCase().includes(searchTerm) || c.description.toLowerCase().includes(searchTerm) || c.category.toLowerCase().includes(searchTerm)) {
                addResult({
                    type: 'Course',
                    title: c.title,
                    path: c.youtubeLink,
                    description: `${c.category} • Free Tutorial`
                });
            }
        });

        // 3. Search in Masterclasses
        MASTERCLASSES.forEach(m => {
            if (m.title.toLowerCase().includes(searchTerm) || m.description.toLowerCase().includes(searchTerm)) {
                addResult({
                    type: 'Masterclass',
                    title: m.title,
                    path: '/masterclass',
                    description: `Live Mentorship Cohort • ₹${m.price}`
                });
            }
        });

        // 4. Search in Nav Links
        NAV_LINKS.forEach(l => {
            if (l.name.toLowerCase().includes(searchTerm)) {
                addResult({
                    type: 'Page',
                    title: l.name,
                    path: l.path,
                    description: `Explore ${l.name} section`
                });
            }
        });

        // 5. Search in Java Playlist Episodes & Quizzes
        JAVA_EPISODES.forEach(ep => {
            const matchEpisodeNum = searchTerm.match(/(?:java|ep|episode)\s*(\d+)/);
            const isSpecificEpisodeMatch = matchEpisodeNum && parseInt(matchEpisodeNum[1], 10) === ep.id;

            if (ep.title.toLowerCase().includes(searchTerm) || isSpecificEpisodeMatch) {
                addResult({ 
                    type: 'Episode', 
                    title: ep.title, 
                    path: `/course/java?ep=${ep.id}`, 
                    description: 'Part of Java Full Course 2026 playlist' 
                });
            }

            ep.notes.quiz?.forEach((qObj: any) => {
                const question = typeof qObj === 'string' ? qObj : qObj.question;
                if (question.toLowerCase().includes(searchTerm)) {
                    addResult({ 
                        type: 'Quiz', 
                        title: `Quiz: ${question}`, 
                        path: `/course/java?ep=${ep.id}&tab=quiz`, 
                        description: `Module: ${ep.title}` 
                    });
                }
            });
        });

        // 6. Search in Competitive Exams (UPSC, GATE, JEE, NEET, SSC)
        COMPETITIVE_EXAMS.forEach(exam => {
            if (
                exam.title.toLowerCase().includes(searchTerm) ||
                exam.fullName.toLowerCase().includes(searchTerm) ||
                exam.category.toLowerCase().includes(searchTerm) ||
                (exam.subjects && exam.subjects.some(s => s.toLowerCase().includes(searchTerm)))
            ) {
                addResult({
                    type: 'Exam',
                    title: exam.title,
                    path: `/examhub?exam=${exam.id}`,
                    description: `${exam.category} - ${exam.fullName}`
                });
            }
        });

        setResults(filteredResults.slice(0, 10)); // Limit top 10 relevant results
    }, [query]);

    const handleSelect = (path: string) => {
        if (path.startsWith('http')) {
            window.open(path, '_blank');
        } else {
            navigate(path);
        }
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[2000] flex items-start justify-center pt-6 sm:pt-[12vh] px-3 sm:px-4">
                    <motion.div 
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/70 backdrop-blur-md"
                        onClick={onClose}
                    />
                    
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: -20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: -20 }}
                        className="relative w-full max-w-2xl bg-[#090d16]/95 backdrop-blur-2xl border border-white/15 dark:border-white/10 rounded-2xl sm:rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden z-10"
                    >
                        <div className="p-3.5 sm:p-5 border-b border-white/10 flex items-center gap-2.5 sm:gap-4 min-w-0">
                            <Search className="text-gray-400 w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
                            <input 
                                ref={inputRef}
                                type="text" 
                                placeholder="Search courses, episodes, masterclasses..."
                                className="flex-1 min-w-0 bg-transparent border-none text-white text-sm sm:text-lg focus:outline-none placeholder-gray-500 font-medium"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                            <div className="hidden sm:flex items-center gap-1.5 px-2 py-1 rounded-lg bg-white/5 border border-white/10 text-[10px] text-gray-500 font-mono shrink-0">
                                <Command size={10} /> K
                            </div>
                            <button onClick={onClose} className="p-1.5 sm:p-2 hover:bg-white/10 rounded-full text-gray-400 shrink-0 cursor-pointer transition-colors" aria-label="Close search">
                                <X size={20} />
                            </button>
                        </div>

                        <div className="max-h-[60vh] overflow-y-auto p-3 sm:p-4 custom-scrollbar">
                            {results.length > 0 ? (
                                <div className="space-y-2">
                                    {results.map((res, i) => (
                                        <button
                                            key={i}
                                            onClick={() => handleSelect(res.path)}
                                            className="w-full flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl hover:bg-white/5 text-left transition-colors group cursor-pointer"
                                        >
                                            <div className="p-2.5 sm:p-3 bg-white/5 rounded-xl group-hover:bg-red-500/20 group-hover:text-red-400 transition-colors shrink-0">
                                                {res.type === 'Course' && <Book size={18} className="text-blue-400 sm:w-5 sm:h-5" />}
                                                {res.type === 'Masterclass' && <Play size={18} className="text-purple-400 sm:w-5 sm:h-5" />}
                                                {res.type === 'Page' && <AppWindow size={18} className="text-gray-300 sm:w-5 sm:h-5" />}
                                                {res.type === 'Episode' && <Youtube size={18} className="text-red-500 sm:w-5 sm:h-5" />}
                                                {res.type === 'Quiz' && <HelpCircle size={18} className="text-amber-500 sm:w-5 sm:h-5" />}
                                                {res.type === 'Service' && <Award size={18} className="text-green-400 sm:w-5 sm:h-5" />}
                                                {res.type === 'Exam' && <Target size={18} className="text-indigo-400 sm:w-5 sm:h-5" />}
                                                {res.type === 'IDE' && <Terminal size={18} className="text-yellow-400 sm:w-5 sm:h-5" />}
                                                {res.type === 'Jobs' && <Briefcase size={18} className="text-cyan-400 sm:w-5 sm:h-5" />}
                                                {res.type === 'Notes' && <FileText size={18} className="text-orange-400 sm:w-5 sm:h-5" />}
                                                {res.type === 'Practice' && <Code2 size={18} className="text-emerald-400 sm:w-5 sm:h-5" />}
                                                {res.type === 'Community' && <Users size={18} className="text-pink-400 sm:w-5 sm:h-5" />}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex justify-between items-center gap-2 mb-1">
                                                    <h4 className="font-bold text-white text-xs sm:text-sm truncate">{res.title}</h4>
                                                    <span className="text-[9px] uppercase tracking-widest text-gray-400 font-black shrink-0 px-2 py-0.5 rounded-full bg-white/5">{res.type}</span>
                                                </div>
                                                {res.description && <p className="text-[11px] sm:text-xs text-gray-400 font-light truncate">{res.description}</p>}
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            ) : query.trim() ? (
                                <div className="text-center py-16 sm:py-20 text-gray-500">
                                    <p className="text-base sm:text-lg">No results found for "{query}"</p>
                                    <p className="text-[10px] sm:text-xs mt-2 uppercase tracking-widest">Try another keyword (e.g. Java, Certificate, Jobs)</p>
                                </div>
                            ) : (
                                <div className="py-8 sm:py-10 px-4 text-center">
                                    <Search size={36} className="mx-auto mb-3 opacity-20 text-gray-400 sm:w-10 sm:h-10" />
                                    <p className="text-xs sm:text-sm text-gray-400 font-medium mb-4">Type to search courses, certificates, compilers, or jobs...</p>
                                    <div className="flex flex-wrap items-center justify-center gap-2 max-w-md mx-auto">
                                        <button onClick={() => setQuery('verify certificate')} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-gray-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer">
                                            🎓 Verify Certificate
                                        </button>
                                        <button onClick={() => setQuery('java compiler')} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-gray-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer">
                                            💻 Java IDE
                                        </button>
                                        <button onClick={() => setQuery('jobs freshers')} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-gray-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer">
                                            💼 Developer Jobs
                                        </button>
                                        <button onClick={() => setQuery('notes pdf')} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-gray-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer">
                                            📚 Handwritten Notes
                                        </button>
                                        <button onClick={() => setQuery('upsc')} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-gray-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer">
                                            🏆 UPSC Exam
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default GlobalSearch;
