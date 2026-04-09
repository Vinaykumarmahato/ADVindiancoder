import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Search, ArrowRight, Download, Eye } from 'lucide-react';
import { RESOURCES } from '../constants';
import PageWrapper from '../components/PageWrapper';

const ResourcesPage = () => {
    const [activeCategory, setActiveCategory] = useState<string>('All');
    const [searchQuery, setSearchQuery] = useState('');

    const categories = ['All', 'Class 10', 'UPSC', 'Technology'];

    const filteredResources = RESOURCES.filter(resource => {
        const matchesCategory = activeCategory === 'All' || resource.category === activeCategory;
        const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            resource.subject.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 20
            }
        }
    };

    const headerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut'
            }
        }
    };

    return (
        <PageWrapper>
            <div className="min-h-screen bg-[#FDFDFD] dark:bg-dark-bg transition-colors duration-500">
                {/* Hero Section */}
                <section className="relative pt-20 pb-16 overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <motion.div
                            variants={headerVariants}
                            initial="hidden"
                            animate="visible"
                            className="text-center"
                        >
                            <h1 className="text-5xl md:text-6xl font-black tracking-tight text-gray-900 dark:text-white mb-6">
                                Learning <span className="text-primary italic">Vault</span>
                            </h1>
                            <div className="w-24 h-1.5 bg-primary mx-auto mb-8 rounded-full" />
                            <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                                Access our premium library of handwritten notes, structured guides, and curated resources designed for excellence.
                            </p>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.4 }}
                                className="mt-8"
                            >
                                <Link
                                    to="/upsc-syllabus"
                                    className="inline-flex items-center px-8 py-3 rounded-full bg-gray-900 dark:bg-white text-white dark:text-black font-black text-sm hover:scale-105 transition-transform shadow-xl"
                                >
                                    📘 VIEW COMPLETE UPSC SYLLABUS
                                </Link>
                            </motion.div>
                        </motion.div>

                        {/* Search & Filter Bar */}
                        <div className="mt-12 max-w-4xl mx-auto">
                            <div className="flex flex-col md:flex-row gap-4 items-center">
                                <div className="relative flex-1 w-full">
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Search by subject or topic..."
                                        className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-primary/20 shadow-sm transition-all text-lg"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                </div>
                                <div className="flex gap-2 w-full md:w-auto overflow-x-auto no-scrollbar pb-2 md:pb-0">
                                    {categories.map((cat) => (
                                        <button
                                            key={cat}
                                            onClick={() => setActiveCategory(cat)}
                                            className={`px-6 py-4 rounded-2xl font-bold whitespace-nowrap transition-all duration-300 ${activeCategory === cat
                                                ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-105'
                                                : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 border border-gray-100 dark:border-gray-800 hover:border-primary/50'
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
                <section className="pb-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            key={activeCategory + searchQuery}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                        >
                            <AnimatePresence mode="popLayout">
                                {filteredResources.map((resource) => (
                                    <motion.div
                                        key={resource.id}
                                        layout
                                        variants={cardVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, margin: '-50px' }}
                                        whileHover={{ y: -8, transition: { duration: 0.3 } }}
                                        className="bg-white dark:bg-gray-900 rounded-[2rem] overflow-hidden border border-gray-100/50 dark:border-gray-800/50 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] dark:shadow-none group"
                                    >
                                        {/* Thumbnail Area */}
                                        <div className="relative h-64 overflow-hidden">
                                            <motion.img
                                                src={resource.thumbnail}
                                                alt={resource.title}
                                                whileHover={{ scale: 1.1 }}
                                                transition={{ duration: 0.6, ease: 'easeOut' }}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                            {/* Category Tag */}
                                            <div className="absolute top-4 left-4">
                                                <span className="px-4 py-1.5 rounded-full bg-white/90 dark:bg-black/80 backdrop-blur-md text-[10px] font-black uppercase tracking-widest text-primary shadow-sm">
                                                    {resource.category}
                                                </span>
                                            </div>

                                            {/* Hover Icons */}
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                                                <div className="flex gap-3">
                                                    <button className="p-3 rounded-full bg-white text-primary shadow-xl hover:scale-110 transition-transform">
                                                        <Eye className="h-6 w-6" />
                                                    </button>
                                                    <button className="p-3 rounded-full bg-primary text-white shadow-xl hover:scale-110 transition-transform">
                                                        <Download className="h-6 w-6" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content Area */}
                                        <div className="p-8">
                                            <div className="flex items-center gap-2 mb-3">
                                                <span className="text-primary font-bold text-xs uppercase tracking-wider">{resource.subject}</span>
                                                <span className="w-1 h-1 rounded-full bg-gray-300" />
                                                <span className="text-gray-500 font-medium text-xs uppercase tracking-wider">{resource.metadata}</span>
                                            </div>

                                            <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4 leading-tight group-hover:text-primary transition-colors">
                                                {resource.title}
                                            </h3>

                                            <div className="pt-6 border-t border-gray-50 dark:border-gray-800 flex flex-col gap-4">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm font-semibold">
                                                        <FileText className="h-4 w-4 mr-2" />
                                                        Handwritten PDF
                                                    </div>
                                                    {resource.price && (
                                                        <span className="text-xl font-black text-gray-900 dark:text-white">
                                                            ₹{resource.price}
                                                        </span>
                                                    )}
                                                </div>

                                                <div className="flex gap-3">
                                                    <motion.button
                                                        whileTap={{ scale: 0.95 }}
                                                        className="flex-1 flex items-center justify-center px-4 py-3 rounded-xl border border-gray-100 dark:border-gray-800 font-bold text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all group/btn"
                                                    >
                                                        PREVIEW
                                                        <Eye className="h-4 w-4 ml-2" />
                                                    </motion.button>
                                                    <motion.button
                                                        whileTap={{ scale: 0.95 }}
                                                        className="flex-1 flex items-center justify-center px-4 py-3 rounded-xl bg-primary text-white font-black text-sm shadow-lg shadow-primary/20 hover:scale-105 transition-all"
                                                    >
                                                        BUY NOW
                                                        <ArrowRight className="h-4 w-4 ml-2" />
                                                    </motion.button>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </motion.div>

                        {filteredResources.length === 0 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center py-20"
                            >
                                <div className="text-gray-300 dark:text-gray-700 mb-4 flex justify-center">
                                    <Search className="h-16 w-16" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">No resources found</h3>
                                <p className="text-gray-500 mt-2">Try adjusting your filters or search terms.</p>
                            </motion.div>
                        )}
                    </div>
                </section>

                {/* Premium CTA */}
                <section className="bg-white dark:bg-black py-24 border-t border-gray-100 dark:border-gray-900">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-gray-50 dark:bg-gray-900/50 rounded-[3rem] p-12 md:p-20 border border-gray-100 dark:border-gray-800"
                        >
                            <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-6">Want Custom Handwritten Notes?</h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 mb-10">
                                Connect with our mentors and subject matter experts to get personalized notes tailored to your exam requirements.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="px-10 py-5 bg-primary text-white font-black rounded-2xl shadow-xl shadow-primary/20 hover:scale-105 transition-all">
                                    CONTACT MENTOR
                                </button>
                                <button className="px-10 py-5 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-black rounded-2xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all">
                                    JOIN COMMUNITY
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </div>
        </PageWrapper>
    );
};

export default ResourcesPage;
