import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, Book, Play, AppWindow, Command, HelpCircle, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { COURSES, MASTERCLASSES, NAV_LINKS } from '../constants';
import { Youtube } from 'lucide-react';
import { JAVA_EPISODES } from '../data/javaEpisodes';

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
                <div className="fixed inset-0 z-[2000] flex items-start justify-center pt-[15vh] px-4">
                    <motion.div 
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-md"
                        onClick={onClose}
                    />
                    
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: -20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: -20 }}
                        className="relative w-full max-w-2xl bg-[#0a0f1c] border border-white/10 rounded-3xl shadow-2xl overflow-hidden"
                    >
                        <div className="p-6 border-b border-white/5 flex items-center gap-4">
                            <Search className="text-gray-400 w-6 h-6" />
                            <input 
                                ref={inputRef}
                                type="text" 
                                placeholder="Search courses, episodes (e.g. Java Variables), or masterclasses..."
                                className="flex-1 bg-transparent border-none text-white text-lg focus:outline-none placeholder-gray-500"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                            <div className="hidden sm:flex items-center gap-1.5 px-2 py-1 rounded-lg bg-white/5 border border-white/10 text-[10px] text-gray-500 font-mono">
                                <Command size={10} /> K
                            </div>
                            <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full text-gray-400">
                                <X size={20} />
                            </button>
                        </div>

                        <div className="max-h-[60vh] overflow-y-auto p-4 custom-scrollbar">
                            {results.length > 0 ? (
                                <div className="space-y-2">
                                    {results.map((res, i) => (
                                        <button
                                            key={i}
                                            onClick={() => handleSelect(res.path)}
                                            className="w-full flex items-center gap-4 p-4 rounded-2xl hover:bg-white/5 text-left transition-colors group"
                                        >
                                            <div className="p-3 bg-white/5 rounded-xl group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                                                {res.type === 'Course' && <Book size={20} />}
                                                {res.type === 'Masterclass' && <Play size={20} />}
                                                {res.type === 'Page' && <AppWindow size={20} />}
                                                {res.type === 'Episode' && <Youtube size={20} className="text-red-500" />}
                                                {res.type === 'Quiz' && <HelpCircle size={20} className="text-amber-500" />}
                                                {res.type === 'Service' && <ShieldCheck size={20} className="text-green-500" />}
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex justify-between items-center mb-1">
                                                    <h4 className="font-bold text-white">{res.title}</h4>
                                                    <span className="text-[10px] uppercase tracking-widest text-gray-500 font-black">{res.type}</span>
                                                </div>
                                                {res.description && <p className="text-xs text-gray-400 font-light">{res.description}</p>}
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            ) : query.trim() ? (
                                <div className="text-center py-20 text-gray-500">
                                    <p className="text-lg">No results found for "{query}"</p>
                                    <p className="text-xs mt-2 uppercase tracking-widest">Try another keyword</p>
                                </div>
                            ) : (
                                <div className="py-12 px-6 text-center text-gray-500">
                                    <Search size={40} className="mx-auto mb-4 opacity-20" />
                                    <p className="text-sm">Type to begin searching the platform...</p>
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
