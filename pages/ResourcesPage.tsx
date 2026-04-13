import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Search, ArrowRight, Download, Eye } from 'lucide-react';
import { RESOURCES } from '../constants';
import PageWrapper from '../components/PageWrapper';
import SEO from '../components/SEO';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const GlowingOrb = ({ className }: { className: string }) => (
    <div className={`absolute rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-pulse ${className}`}></div>
);

const ResourcesPage = () => {
    const [activeCategory, setActiveCategory] = useState<string>('All');
    const [searchQuery, setSearchQuery] = useState('');

    const categories = ['All', 'Handwritten Notes', 'Digital', 'Support', 'Growth', 'Content', 'Educator', 'Combo'];

    const [isSearchExpanded, setIsSearchExpanded] = useState(false);

    const filteredResources = RESOURCES.filter(resource => {
        const matchesCategory = activeCategory === 'All' || resource.category === activeCategory;
        const q = searchQuery.toLowerCase();
        const matchesSearch = resource.title.toLowerCase().includes(q) ||
            resource.subject.toLowerCase().includes(q) ||
            resource.category.toLowerCase().includes(q) ||
            (resource.metadata && resource.metadata.toLowerCase().includes(q));
        return matchesCategory && matchesSearch;
    });

    return (
        <PageWrapper>
            <SEO 
                title="Study Notes & Resources" 
                description="Download high-quality handwritten and digital study notes for Java, Python, Web Development, and UPSC. The ultimate resource vault for developers and students."
            />
            <div className="bg-[#050914] text-white min-h-screen font-sans relative overflow-hidden">
                {/* Background Grid */}
                <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                {/* Hero Section */}
                <section className="relative pt-10 md:pt-20 pb-16 overflow-hidden">
                    <GlowingOrb className="top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-600/20" />
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                        <motion.h1 
                            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
                            className="text-5xl md:text-7xl font-black tracking-tighter mb-6"
                        >
                            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">Vault.</span>
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 1 }}
                            className="max-w-2xl mx-auto text-xl text-gray-400 leading-relaxed font-light mb-8"
                        >
                            Premium Handwritten & Digital Study Notes engineered for maximum retention and rapid interview revision.
                        </motion.p>
                        
                        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }}>
                            <Link to="/upsc-syllabus" className="inline-flex items-center px-8 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-mono text-sm tracking-widest hover:bg-white border-transparent hover:text-black hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                                VIEW UPSC SYLLABUS <ArrowRight className="ml-2 w-4 h-4"/>
                            </Link>
                        </motion.div>

                        {/* Search & Filter */}
                        <div className="mt-16 max-w-5xl mx-auto">
                            <style>{`
                                .scrollbar-hide::-webkit-scrollbar { display: none; }
                                .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
                            `}</style>
                            <div className="flex flex-col md:flex-row gap-4 items-center">
                                {/* Expandable Search Bar */}
                                <motion.div 
                                    initial={false}
                                    animate={{ 
                                        width: isSearchExpanded ? '100%' : '56px',
                                        maxWidth: isSearchExpanded ? '400px' : '56px' 
                                    }}
                                    className="relative flex-shrink-0 h-[56px] rounded-full bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-colors overflow-hidden flex items-center z-20 group"
                                >
                                    <button 
                                        onClick={() => setIsSearchExpanded(true)}
                                        className="h-full w-[56px] flex items-center justify-center text-gray-500 group-hover:text-white transition-colors shrink-0 absolute left-0 z-10"
                                    >
                                        <Search className="w-5 h-5" />
                                    </button>
                                    
                                    {isSearchExpanded && (
                                        <input
                                            autoFocus
                                            type="text"
                                            placeholder="Advanced deep search..."
                                            className="w-full h-full pl-[56px] pr-16 bg-transparent text-white placeholder-gray-500 focus:outline-none focus:ring-0"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            onBlur={() => {
                                                if (!searchQuery) setIsSearchExpanded(false);
                                            }}
                                        />
                                    )}
                                    {isSearchExpanded && searchQuery && (
                                        <button 
                                            onClick={() => { setSearchQuery(''); setIsSearchExpanded(false); }}
                                            className="absolute right-4 text-xs font-mono text-gray-500 hover:text-red-400 bg-white/10 px-2 py-1 rounded transition-colors"
                                        >
                                            CLR
                                        </button>
                                    )}
                                </motion.div>

                                {/* Categories */}
                                <div className="flex gap-2 w-full overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                                    {categories.map((cat) => (
                                        <button
                                            key={cat}
                                            onClick={() => setActiveCategory(cat)}
                                            className={`px-6 py-4 rounded-full font-bold whitespace-nowrap transition-all duration-300 border ${
                                                activeCategory === cat
                                                ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.4)]'
                                                : 'bg-white/5 text-gray-400 border-white/10 hover:border-white/30 hover:text-white backdrop-blur-md'
                                            }`}
                                        >
                                            {cat}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Resources Grid */}
                <section className="pb-16 relative z-10">
                    <GlowingOrb className="bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10" />
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <AnimatePresence>
                                {filteredResources.map((resource) => (
                                    <motion.div
                                        key={resource.id}
                                        layout
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.4 }}
                                        className="bg-[#0a0f1c] rounded-[2rem] overflow-hidden border border-white/10 hover:border-indigo-500/50 transition-all duration-500 group relative shadow-2xl"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        
                                        {/* Thumbnail Area */}
                                        <div className="relative h-64 overflow-hidden bg-black/50">
                                            <img
                                                src={resource.thumbnail}
                                                alt={resource.title}
                                                className="w-full h-full object-cover opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700 mix-blend-luminosity hover:mix-blend-normal"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] via-transparent to-transparent" />

                                            <div className="absolute top-4 left-4">
                                                <span className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono tracking-widest text-indigo-400">
                                                    {resource.category}
                                                </span>
                                            </div>

                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                                                <div className="flex gap-3">
                                                    <button className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-black transition-colors">
                                                        <Eye className="w-5 h-5" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-8 relative z-10">
                                            <div className="flex items-center gap-2 mb-3 font-mono text-xs text-gray-500">
                                                <span className="text-indigo-400 font-bold uppercase">{resource.subject}</span>
                                                <span className="w-1 h-1 rounded-full bg-gray-700" />
                                                <span>{resource.metadata}</span>
                                            </div>

                                            <h3 className="text-2xl font-bold text-white mb-6 leading-tight group-hover:text-indigo-300 transition-colors">
                                                {resource.title}
                                            </h3>

                                            <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center text-gray-400 text-sm">
                                                        <FileText className="h-4 w-4 mr-2" /> PDF Format
                                                    </div>
                                                    {resource.price && (
                                                        <span className="text-2xl font-black text-white">
                                                            ₹{resource.price}
                                                        </span>
                                                    )}
                                                </div>

                                                <div className="flex gap-3 mt-2">
                                                    <a href="https://wa.me/919931860964" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center px-4 py-4 rounded-xl bg-white text-black font-black text-sm hover:scale-[1.02] transition-transform shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                                                        BUY SECURELY <ArrowRight className="h-4 w-4 ml-2" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </motion.div>

                        {filteredResources.length === 0 && (
                            <div className="text-center py-20 border border-white/5 bg-white/5 backdrop-blur-md rounded-[2rem] mt-8">
                                <Search className="w-16 h-16 mx-auto mb-4 opacity-30 text-white" />
                                <h3 className="text-2xl font-light text-gray-400">No resources matched your search.</h3>
                            </div>
                        )}
                    </div>
                </section>
                
                {/* Notice CTA */}
                <section className="relative py-20 px-4 border-t border-white/5 overflow-hidden">
                    <GlowingOrb className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-500/10" />
                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-12 md:p-20 shadow-2xl">
                            <h2 className="text-4xl md:text-5xl font-black mb-6">Why Handwritten?</h2>
                            <p className="text-xl text-gray-300 mb-8 font-light leading-relaxed">
                                Studies confirm handwritten notes improve memory retention by up to 29% compared to typed code snippets. Perfect for last-minute interview revision.
                            </p>
                            <a href="https://wa.me/919931860964" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-10 py-5 bg-[#25D366] text-white font-black text-lg rounded-full hover:scale-105 transition-transform shadow-[0_0_30px_rgba(37,211,102,0.3)]">
                                WhatsApp to Setup Bundle
                            </a>
                        </motion.div>
                    </div>
                </section>
            </div>
        </PageWrapper>
    );
};

export default ResourcesPage;
