import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, MapPin, Building, Clock, ArrowUpRight, Search, Send } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

// Mock DB for WhatsApp Jobs. Paste your copied WhatsApp links here.
const WHATSAPP_JOBS = [
    {
        id: "emerson-ai-ml",
        role: "Software Developer (AI/ML)",
        company: "Emerson",
        location: "Noida, India",
        batch: "1–5 Years",
        postedAt: "Just Now",
    },
    {
        id: "ibm-intern-2026",
        role: "Software Developer Intern",
        company: "IBM",
        location: "Bangalore, India",
        batch: "Fresher (Student)",
        postedAt: "New",
    },
    {
        id: "salesforce-amts-2026",
        role: "Software Engineering AMTS",
        company: "Salesforce",
        location: "Hyderabad / Bangalore",
        batch: "2026 Batch",
        postedAt: "New",
    }
];

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const JobsPage = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredJobs = WHATSAPP_JOBS.filter(job =>
        job.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.batch.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <PageWrapper>
            <SEO
                title="Job Openings & Internships"
                description="Find the latest job opportunities, software developer roles, and internships from top companies like IBM, Salesforce, and Emerson. Curated openings for the 2026 batch."
            />
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-16 overflow-x-hidden">
                <div className="text-center mb-12 relative overflow-hidden py-4">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -z-10"></div>
                    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-primary/10 border border-primary/30 text-primary font-mono text-[10px] md:text-sm uppercase px-4 py-1.5 rounded-full mb-4 inline-block shadow-[0_0_15px_rgba(0,120,255,0.2)]">
                        Latest Opportunities
                    </motion.span>
                    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-6xl font-black mb-4 leading-tight">
                        Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary">Job Openings</span>
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 font-light">
                        A curated list of direct hiring links exclusively straight from our premium network.
                    </motion.p>

                    <motion.a
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        href="https://t.me/advindiancoder"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 md:px-8 py-3.5 md:py-4 bg-[#0088cc] hover:bg-[#0077b3] text-white font-bold text-base md:text-lg rounded-xl transition-all shadow-[0_0_20px_rgba(0,136,204,0.4)] hover:shadow-[0_0_30px_rgba(0,136,204,0.6)] hover:-translate-y-1 whitespace-nowrap"
                    >
                        <Send className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3" />
                        Join Telegram for Alerts
                    </motion.a>
                </div>

                {/* Search Bar */}
                <div className="mb-12 max-w-2xl mx-auto relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search for 'Java', 'AI/ML', 'Developer'..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-lg backdrop-blur-sm bg-black/20"
                    />
                </div>

                {/* Job Listings Grid */}
                <div className="grid gap-6">
                    {filteredJobs.length > 0 ? (
                        filteredJobs.map((job, i) => (
                            <motion.div
                                key={job.id}
                                variants={fadeUp}
                                initial="hidden"
                                animate="show"
                                transition={{ delay: i * 0.1 }}
                                className="group bg-[#0a0f1c] border border-white/10 rounded-2xl p-6 hover:border-primary/50 transition-all shadow-xl hover:shadow-[0_0_20px_rgba(0,120,255,0.15)] flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
                            >
                                <div className="flex-1">
                                    <div className="flex flex-wrap items-center gap-3 mb-2">
                                        <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{job.role}</h3>
                                        <span className="px-3 py-1 bg-green-500/10 text-green-400 text-xs font-mono rounded-full border border-green-500/20 whitespace-nowrap">
                                            {job.postedAt}
                                        </span>
                                    </div>
                                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-400 font-medium">
                                        <div className="flex items-center gap-1.5"><Building className="w-4 h-4 text-gray-500" /> {job.company}</div>
                                        <div className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-gray-500" /> {job.location}</div>
                                        <div className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-gray-500" /> {job.batch}</div>
                                    </div>
                                </div>
                                <Link
                                    to={`/jobs/${job.id}`}
                                    className="w-full md:w-auto shrink-0 inline-flex items-center justify-center px-8 py-3.5 bg-white text-black font-black rounded-xl hover:bg-gray-200 transition-transform active:scale-95 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                                >
                                    View Details <ArrowUpRight className="ml-2 w-5 h-5" />
                                </Link>
                            </motion.div>
                        ))
                    ) : (
                        <div className="text-center py-20 bg-white/5 rounded-2xl border border-white/10 border-dashed">
                            <Briefcase className="w-12 h-12 text-gray-500 mx-auto mb-4 opacity-50" />
                            <h3 className="text-xl font-bold text-gray-300">No jobs found</h3>
                            <p className="text-gray-500 mt-2">Try adjusting your search terms.</p>
                        </div>
                    )}
                </div>
            </div>
        </PageWrapper>
    );
};

export default JobsPage;
