import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, Book, Play, AppWindow, Command, HelpCircle, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { COURSES, MASTERCLASSES, NAV_LINKS } from '../constants';
import { Youtube, Target } from 'lucide-react';
import { JAVA_EPISODES } from '../data/javaEpisodes';
import { COMPETITIVE_EXAMS } from '../data/examHubData';

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

        const searchTerm = query.toLowerCase();
        const filteredResults: any[] = [];

        // System Actions
        if ("verify certificate".includes(searchTerm) || "validate credential".includes(searchTerm)) {
            filteredResults.push({ 
                type: 'Service', 
                title: 'Verify Academic Certificate', 
                path: '/course/java?verify=true', 
                description: 'Validate official ADV Academy credentials and IDs' 
            });
        }

        // Search in Courses
        COURSES.forEach(c => {
            if (c.title.toLowerCase().includes(searchTerm) || c.description.toLowerCase().includes(searchTerm)) {
                filteredResults.push({ type: 'Course', title: c.title, path: c.youtubeLink, description: c.category });
            }
        });

        // Search in Masterclasses
        MASTERCLASSES.forEach(m => {
            if (m.title.toLowerCase().includes(searchTerm) || m.description.toLowerCase().includes(searchTerm)) {
                filteredResults.push({ type: 'Masterclass', title: m.title, path: '/masterclass', description: `₹${m.price}` });
            }
        });

        // Search in Nav Links
        NAV_LINKS.forEach(l => {
            if (l.name.toLowerCase().includes(searchTerm)) {
                filteredResults.push({ type: 'Page', title: l.name, path: l.path });
            }
        });

        // Search in Java Episodes & Quizzes
        JAVA_EPISODES.forEach(ep => {
            // Check if search query matches "java X", "ep X", or "episode X" where X is the episode number
            const matchEpisodeNum = searchTerm.match(/(?:java|ep|episode)\s*(\d+)/);
            const isSpecificEpisodeMatch = matchEpisodeNum && parseInt(matchEpisodeNum[1], 10) === ep.id;

            // Search Episode Titles or check for a specific episode code match
            if (ep.title.toLowerCase().includes(searchTerm) || isSpecificEpisodeMatch) {
                filteredResults.push({ 
                    type: 'Episode', 
                    title: ep.title, 
                    path: `/course/java?ep=${ep.id}`, 
                    description: 'Part of Java Full Course playlist' 
                });
            }

            // Search Quiz Questions
            ep.notes.quiz?.forEach((qObj: any) => {
                const question = typeof qObj === 'string' ? qObj : qObj.question;
                if (question.toLowerCase().includes(searchTerm)) {
                    filteredResults.push({ 
                        type: 'Quiz', 
                        title: `Question: ${question}`, 
                        path: `/course/java?ep=${ep.id}&tab=quiz`, 
                        description: `Module: ${ep.title}` 
                    });
                }
            });
        });

        // Search in Exams
        COMPETITIVE_EXAMS.forEach(exam => {
            if (
                exam.title.toLowerCase().includes(searchTerm) ||
                exam.fullName.toLowerCase().includes(searchTerm) ||
                exam.category.toLowerCase().includes(searchTerm) ||
                (exam.subjects && exam.subjects.some(s => s.toLowerCase().includes(searchTerm)))
            ) {
                filteredResults.push({
                    type: 'Exam',
                    title: exam.title,
                    path: `/examhub?exam=${exam.id}`,
                    description: exam.category
                });
            }
        });

        setResults(filteredResults.slice(0, 8)); // Limit results
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
                                                {res.type === 'Course' && <Book size={18} className="sm:w-5 sm:h-5" />}
                                                {res.type === 'Masterclass' && <Play size={18} className="sm:w-5 sm:h-5" />}
                                                {res.type === 'Page' && <AppWindow size={18} className="sm:w-5 sm:h-5" />}
                                                {res.type === 'Episode' && <Youtube size={18} className="text-red-500 sm:w-5 sm:h-5" />}
                                                {res.type === 'Quiz' && <HelpCircle size={18} className="text-amber-500 sm:w-5 sm:h-5" />}
                                                {res.type === 'Service' && <ShieldCheck size={18} className="text-green-500 sm:w-5 sm:h-5" />}
                                                {res.type === 'Exam' && <Target size={18} className="text-indigo-500 sm:w-5 sm:h-5" />}
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
                                    <p className="text-[10px] sm:text-xs mt-2 uppercase tracking-widest">Try another keyword</p>
                                </div>
                            ) : (
                                <div className="py-10 sm:py-12 px-4 text-center text-gray-500">
                                    <Search size={36} className="mx-auto mb-3 opacity-20 sm:w-10 sm:h-10" />
                                    <p className="text-xs sm:text-sm">Type to begin searching the platform...</p>
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
