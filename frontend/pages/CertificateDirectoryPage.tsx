import { useState } from 'react';
import PageWrapper from '../components/PageWrapper';
import SEO from '../components/SEO';
import { Search, ShieldCheck, User, Calendar, Award, ExternalLink, Filter, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// ─── Mock Database of Verified Students ──────────────────────────────────────
// This can be connected to a real database in the future
const VERIFIED_REGISTRY = [
    {
        id: "ADV-JAVA-2026-F3A1BC2",
        name: "Vinay Kumar Mahato",
        course: "Java Full Course 2026",
        date: "26 April 2026",
        score: "98%",
        status: "Verified",
        type: "Professional Certification"
    },
    {
        id: "ADV-JAVA-2026-B8E29A",
        name: "John Doe",
        course: "Java Full Course 2026",
        date: "25 April 2026",
        score: "92%",
        status: "Verified",
        type: "Standard Certification"
    },
    {
        id: "ADV-JAVA-2026-C4D817",
        name: "Ankit Sharma",
        course: "Java Full Course 2026",
        date: "24 April 2026",
        score: "85%",
        status: "Verified",
        type: "Standard Certification"
    }
];

const CertificateDirectoryPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filter, setFilter] = useState<'all' | 'premium' | 'standard'>('all');

    const filteredStudents = VERIFIED_REGISTRY.filter(student => 
        (student.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
         student.id.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
        <PageWrapper>
            <SEO 
                title="Academic Certificate Directory | ADV Indian Coder"
                description="Official registry of verified graduates and professional certificate holders from ADV Indian Coder Academy."
            />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] animate-pulse" />
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px]" />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-red-500 font-black text-[10px] uppercase tracking-[0.3em] mb-8 shadow-xl backdrop-blur-md"
                    >
                        <ShieldCheck className="w-4 h-4" /> Official Credential Registry
                    </motion.div>
                    
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter leading-none">
                        Certificate <span className="text-red-600">Directory</span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-12">
                        Validate the professional achievements and technical credentials of ADV Academy graduates globally.
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-3xl mx-auto relative group">
                        <div className="absolute inset-x-0 -bottom-2 h-full bg-red-600/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500" />
                        <div className="relative flex items-center bg-[#0d1117] border border-white/5 rounded-3xl p-2 pl-6 focus-within:border-red-500/50 transition-all shadow-2xl backdrop-blur-xl">
                            <Search className="text-gray-500 w-6 h-6 shrink-0" />
                            <input 
                                type="text"
                                placeholder="Search by Student Name or Credential ID..."
                                className="w-full bg-transparent border-none text-white px-4 py-4 focus:outline-none placeholder:text-gray-600 font-medium"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <div className="hidden md:flex items-center gap-2 pr-4 text-[10px] font-black text-gray-500 uppercase tracking-widest border-l border-white/5 ml-4 pl-4 whitespace-nowrap">
                                <Filter className="w-3 h-3" /> Filter Results
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Directory List */}
            <section className="pb-32 container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence mode="popLayout">
                        {filteredStudents.length > 0 ? (
                            filteredStudents.map((student, idx) => (
                                <motion.div
                                    key={student.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="group relative bg-[#0d1117] border border-white/5 rounded-[2rem] overflow-hidden hover:border-red-500/30 transition-all duration-500"
                                >
                                    <div className="absolute top-0 right-0 p-6 opacity-5 transition-opacity group-hover:opacity-20">
                                        <Award size={120} className="text-red-600" />
                                    </div>
                                    
                                    <div className="p-8 relative z-10">
                                        <div className="flex items-center gap-4 mb-8">
                                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-600 to-orange-500 flex items-center justify-center text-white shadow-lg">
                                                <User className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-black text-white group-hover:text-red-500 transition-colors">{student.name}</h3>
                                                <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{student.type}</p>
                                            </div>
                                        </div>

                                        <div className="space-y-4 mb-8">
                                            <div className="flex justify-between items-center py-3 border-b border-white/5">
                                                <span className="text-xs text-gray-400 flex items-center gap-2"><Calendar className="w-3 h-3" /> Issued On</span>
                                                <span className="text-xs font-bold text-white">{student.date}</span>
                                            </div>
                                            <div className="flex justify-between items-center py-3 border-b border-white/5">
                                                <span className="text-xs text-gray-400 flex items-center gap-2"><Award className="w-3 h-3" /> Performance</span>
                                                <span className="text-xs font-black text-red-500">{student.score}</span>
                                            </div>
                                            <div className="py-3">
                                                <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest block mb-1">Credential ID</span>
                                                <code className="text-sm font-mono text-white bg-white/5 px-3 py-1 rounded-lg border border-white/5 block text-center">
                                                    {student.id}
                                                </code>
                                            </div>
                                        </div>

                                        <button className="w-full py-4 rounded-2xl bg-white text-black font-black text-[10px] uppercase tracking-[0.2em] hover:bg-red-600 hover:text-white transition-all flex items-center justify-center gap-2 shadow-xl group-hover:shadow-red-600/10">
                                            View Public Validation <ExternalLink className="w-3 h-3" />
                                        </button>
                                    </div>
                                </motion.div>
                            ))
                        ) : (
                            <div className="col-span-full py-20 text-center">
                                <div className="text-gray-500 font-bold mb-4">No matching credentials found.</div>
                                <p className="text-sm text-gray-600">Please verify the Student Name or Credential ID and try again.</p>
                            </div>
                        )}
                    </AnimatePresence>
                </div>
            </section>

            {/* Call to Action */}
            <section className="pb-32 px-6">
                <div className="max-w-5xl mx-auto p-12 rounded-[3rem] bg-gradient-to-br from-red-600 to-orange-500 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 blur-3xl" />
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="text-center md:text-left">
                            <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-4 leading-tight">
                                Ready to earn <br /> your credential?
                            </h2>
                            <p className="text-red-100 font-medium">Join 50,000+ students mastering Java today.</p>
                        </div>
                        <button className="px-12 py-5 rounded-3xl bg-black text-white font-black text-xs uppercase tracking-[0.3em] hover:scale-105 transition-all flex items-center gap-4 group">
                            Start Learning Now <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                        </button>
                    </div>
                </div>
            </section>
        </PageWrapper>
    );
};

export default CertificateDirectoryPage;
