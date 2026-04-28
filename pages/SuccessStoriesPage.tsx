import React from 'react';
import { Quote, ArrowRight, Star } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const GlowingOrb = ({ className }: { className: string }) => (
    <div className={`absolute pointer-events-none rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-pulse ${className}`}></div>
);

const SuccessStoriesPage = () => {
    return (
        <PageWrapper>
            <SEO 
                title="Success Stories - ADV Indian Coder" 
                description="Real success stories of Indian students who got jobs after learning with us"
            />
            <div className="bg-[#050914] text-white min-h-screen font-sans relative overflow-hidden">
                {/* Background Grid */}
                <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                {/* Header */}
                <div className="relative z-10 pt-10 md:pt-32 pb-24 text-center px-4">
                    <GlowingOrb className="top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-yellow-600/20" />
                    <div className="max-w-4xl mx-auto relative">
                        <motion.span initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="bg-yellow-500/10 backdrop-blur-md border border-yellow-500/30 text-yellow-500 font-mono text-sm tracking-widest py-2 px-6 rounded-full mb-6 inline-flex shadow-[0_0_20px_rgba(234,179,8,0.2)]">
                            ALUMNI WALL OF FAME
                        </motion.span>
                        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 1 }} className="text-5xl md:text-7xl lg:text-[5.5rem] font-black leading-[1.1] tracking-tighter mb-8">
                            Real People.<br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-200 to-amber-500">Unreal Results.</span>
                        </motion.h1>
                        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 1 }} className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
                            We don't manufacture statistics. Every story below is a real student who committed to the process, built real projects, and cracked their dream job.
                        </motion.p>
                    </div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    {/* Stats Marquee Style */}
                    <motion.div variants={fadeUp} initial="hidden" animate="show" className="mb-32 grid grid-cols-2 md:grid-cols-5 gap-6">
                        {[
                            { num: "500+", label: "Engineers Trained" },
                            { num: "200+", label: "Career Transitions" },
                            { num: "3–4 Wks", label: "To First Interview" },
                            { num: "1000+", label: "Deep Projects Built" },
                            { num: "98%", label: "Placement Success" },
                        ].map((stat, i) => (
                            <div key={i} className="bg-white/5 backdrop-blur-md p-8 rounded-[2rem] text-center border border-white/10 hover:border-yellow-500/30 transition-colors shadow-xl relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <h3 className="text-4xl lg:text-5xl font-black text-white mb-2 relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">{stat.num}</h3>
                                <p className="text-xs lg:text-sm text-yellow-500 font-bold uppercase tracking-widest relative z-10">{stat.label}</p>
                            </div>
                        ))}
                    </motion.div>

                    {/* Stories */}
                    <div className="space-y-16 max-w-5xl mx-auto relative relative">
                        <GlowingOrb className="top-1/3 left-0 w-[500px] h-[500px] bg-purple-600/10" />
                        <GlowingOrb className="bottom-1/3 right-0 w-[500px] h-[500px] bg-blue-600/10" />
                        
                        {/* Story 1 */}
                        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} className="group bg-[#0a0f1c] border border-white/10 hover:border-yellow-500/30 rounded-[3rem] p-8 md:p-14 shadow-2xl relative overflow-hidden transition-colors duration-500">
                            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <Quote className="absolute -top-10 -left-10 w-48 h-48 text-white/5 -z-10 transform rotate-180 group-hover:text-yellow-500/10 transition-colors" />
                            <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                                <div className="md:w-1/3 flex flex-col items-center text-center md:items-start md:text-left border-b md:border-b-0 md:border-r border-white/10 pb-8 md:pb-0 pr-0 md:pr-10">
                                    <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-4xl font-black mb-6 shadow-[0_0_30px_rgba(250,204,21,0.3)] border-4 border-[#0a0f1c]">PS</div>
                                    <h3 className="text-3xl font-black text-white mb-2">Priya Sharma</h3>
                                    <div className="flex gap-1 text-yellow-500 mb-6"><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/></div>
                                    <p className="text-sm font-mono text-gray-400 tracking-wide uppercase mb-1">Before</p>
                                    <p className="font-bold text-gray-300 mb-4">BCA Graduate, Unemployed</p>
                                    <p className="text-sm font-mono tracking-wide uppercase mb-1 text-yellow-500">After</p>
                                    <p className="font-bold text-white mb-6 leading-tight">Data Analyst<br/><span className="text-gray-400 font-normal">at Bengaluru Startup</span></p>
                                    <p className="text-xs bg-white/10 border border-white/10 px-4 py-2 rounded-full font-mono text-gray-300 backdrop-blur-md">Batch: Python + SQL</p>
                                </div>
                                <div className="md:w-2/3">
                                    <p className="text-xl md:text-2xl italic text-gray-300 leading-relaxed font-light">
                                        "I spent 6 months applying to jobs with no response. After joining ADV Indian Coder's Python and SQL batch, I had a GitHub portfolio, an updated resume, and the confidence to face interviews. Within 5 weeks of completing the course, I had 3 interview calls and converted one into a job offer. The career guidance session alone was worth it."
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Story 2 */}
                        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} className="group bg-[#0a0f1c] border border-white/10 hover:border-green-500/30 rounded-[3rem] p-8 md:p-14 shadow-2xl relative overflow-hidden transition-colors duration-500">
                            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <Quote className="absolute -top-10 -left-10 w-48 h-48 text-white/5 -z-10 transform rotate-180 group-hover:text-green-500/10 transition-colors" />
                            <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                                <div className="md:w-1/3 flex flex-col items-center text-center md:items-start md:text-left border-b md:border-b-0 md:border-r border-white/10 pb-8 md:pb-0 pr-0 md:pr-10">
                                    <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-4xl font-black mb-6 shadow-[0_0_30px_rgba(52,211,153,0.3)] border-4 border-[#0a0f1c]">RM</div>
                                    <h3 className="text-3xl font-black text-white mb-2">Rahul Mehta</h3>
                                    <div className="flex gap-1 text-green-500 mb-6"><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/></div>
                                    <p className="text-sm font-mono text-gray-400 tracking-wide uppercase mb-1">Before</p>
                                    <p className="font-bold text-gray-300 mb-4">Mechanical Fresher</p>
                                    <p className="text-sm font-mono tracking-wide uppercase mb-1 text-green-500">After</p>
                                    <p className="font-bold text-white mb-6 leading-tight">Junior Java Dev<br/><span className="text-gray-400 font-normal">at IT Enterprise</span></p>
                                    <p className="text-xs bg-white/10 border border-white/10 px-4 py-2 rounded-full font-mono text-gray-300 backdrop-blur-md">Batch: Java Masterclass</p>
                                </div>
                                <div className="md:w-2/3">
                                    <p className="text-xl md:text-2xl italic text-gray-300 leading-relaxed font-light">
                                        "I had no background in software development. My branch was mechanical, but I always wanted to code. The Java Masterclass gave me everything — from basics to projects to mock interviews. My mentor never made me feel behind. I cracked my first developer interview in exactly 30 days."
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Story 3 */}
                        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} className="group bg-[#0a0f1c] border border-white/10 hover:border-blue-500/30 rounded-[3rem] p-8 md:p-14 shadow-2xl relative overflow-hidden transition-colors duration-500">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <Quote className="absolute -top-10 -left-10 w-48 h-48 text-white/5 -z-10 transform rotate-180 group-hover:text-blue-500/10 transition-colors" />
                            <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                                <div className="md:w-1/3 flex flex-col items-center text-center md:items-start md:text-left border-b md:border-b-0 md:border-r border-white/10 pb-8 md:pb-0 pr-0 md:pr-10">
                                    <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center text-4xl font-black mb-6 shadow-[0_0_30px_rgba(96,165,250,0.3)] border-4 border-[#0a0f1c]">SR</div>
                                    <h3 className="text-3xl font-black text-white mb-2">Sneha R.</h3>
                                    <div className="flex gap-1 text-blue-500 mb-6"><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/></div>
                                    <p className="text-sm font-mono text-gray-400 tracking-wide uppercase mb-1">Before</p>
                                    <p className="font-bold text-gray-300 mb-4">BPO Employee</p>
                                    <p className="text-sm font-mono tracking-wide uppercase mb-1 text-blue-500">After</p>
                                    <p className="font-bold text-white mb-6 leading-tight">Prompt Engineer<br/><span className="text-gray-400 font-normal">at Digital Agency</span></p>
                                    <p className="text-xs bg-white/10 border border-white/10 px-4 py-2 rounded-full font-mono text-gray-300 backdrop-blur-md">Batch: Prompt Engineering</p>
                                </div>
                                <div className="md:w-2/3">
                                    <p className="text-xl md:text-2xl italic text-gray-300 leading-relaxed font-light">
                                        "I did not have a technical background at all. But Prompt Engineering did not require one. The course was intensely practical, fun, and immediately applicable. I started freelancing within 2 weeks of completing it and then landed a high-paying full-time role."
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* CTA */}
                    <div className="mt-40 text-center relative z-10">
                        <GlowingOrb className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-500/10" />
                        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                            <h2 className="text-5xl md:text-7xl font-black mb-6">Your Avatar Belongs Here.</h2>
                            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto font-light">
                                You are literally one decision away from a completely different career trajectory. Join the next cohort.
                            </p>
                            <a href="https://wa.me/919931860964" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-white text-black font-black text-lg py-5 px-12 rounded-full hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                                Talk to Mentor <ArrowRight className="ml-3 w-6 h-6" />
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </PageWrapper>
    );
};

export default SuccessStoriesPage;
