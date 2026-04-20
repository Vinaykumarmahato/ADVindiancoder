import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Users, BookOpen, Award, ArrowRight, Code } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import { motion } from 'framer-motion';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const GlowingOrb = ({ className }: { className: string }) => (
    <div className={`absolute rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-pulse ${className}`}></div>
);

const AboutPage = () => {
    return (
        <PageWrapper>
            <div className="bg-[#050914] text-white min-h-screen font-sans relative overflow-hidden">
                {/* Background Grid */}
                <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                {/* Hero Section */}
                <div className="relative z-10 pt-10 md:pt-20 pb-16 text-center px-4">
                    <GlowingOrb className="top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/20" />
                    <div className="max-w-4xl mx-auto relative">
                        <motion.span initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="bg-blue-500/10 backdrop-blur-md border border-blue-500/30 text-blue-400 font-mono text-sm tracking-widest py-2 px-6 rounded-full mb-6 inline-flex shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                            OUR MISSION
                        </motion.span>
                        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 1 }} className="text-5xl md:text-7xl lg:text-[5.5rem] font-black leading-[1.1] tracking-tighter mb-8">
                            We Engineer <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-primary to-cyan-400">Careers.</span>
                        </motion.h1>
                        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 1 }} className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto font-light leading-relaxed">
                            ADV Indian Coder isn't just another tutorial website. We are a complete developer ecosystem powered by <strong className="text-white font-medium">ADV Lab</strong>—India's most advanced learning IDE—designed specifically to take you from absolute zero to a high-paying tech placement.
                        </motion.p>
                    </div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    
                    {/* Vision Grid */}
                    <motion.div variants={fadeUp} initial="hidden" animate="show" className="grid md:grid-cols-2 gap-16 items-center mb-20">
                        <div className="relative">
                            <GlowingOrb className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/20" />
                            <div className="relative z-10 bg-[#0a0f1c] border border-white/10 rounded-[3rem] p-10 shadow-2xl overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <Code className="w-16 h-16 text-primary mb-8" />
                                <h3 className="text-3xl font-black text-white mb-4">Code. Commit. Get Hired.</h3>
                                <p className="text-gray-400 text-lg leading-relaxed font-light">
                                    Why just watch when you can build? With our proprietary <span className="text-white font-bold">ADV Lab</span>, you write real Java, Python, and C++ code alongside video tutorials and instantly push your submissions to GitHub with one click. We focus exclusively on practical execution.
                                </p>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Bridging the massive gap between <span className="text-primary italic">Graduating</span> and <span className="text-green-400 italic">Deploying.</span></h2>
                            <p className="text-xl text-gray-400 font-light leading-relaxed">
                                Our platform is built around intensive, cohort-based <strong className="text-white">Live Masterclasses</strong>. We don't teach you textbook history; we build exact replicas of startup architectures and conduct mock technical interviews so you are 100% prepared for modern tech evaluations.
                            </p>
                        </div>
                    </motion.div>

                    {/* Values */}
                    <div className="mb-20 relative">
                        <GlowingOrb className="top-1/2 right-0 w-[500px] h-[500px] bg-purple-600/10" />
                        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-16">
                            <h2 className="text-5xl font-black mb-4">The Directives</h2>
                        </motion.div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { icon: <Target className="w-8 h-8 text-red-400" />, title: "Hyper-Focused", desc: "If an employer doesn't care about it, we absolutely do not teach it. Period.", border: "hover:border-red-500/30", bg: "group-hover:bg-red-500/5" },
                                { icon: <Users className="w-8 h-8 text-blue-400" />, title: "Community Driven", desc: "You are placed in a cohort. You suffer together, build together, and get hired together.", border: "hover:border-blue-500/30", bg: "group-hover:bg-blue-500/5" },
                                { icon: <Award className="w-8 h-8 text-yellow-400" />, title: "Results Obsessed", desc: "We track placement rates, not completion certificates. Your success is our sole metric.", border: "hover:border-yellow-500/30", bg: "group-hover:bg-yellow-500/5" },
                            ].map((val, idx) => (
                                <motion.div key={idx} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className={`bg-[#0a0f1c] border border-white/10 rounded-[2rem] p-10 transition-all duration-500 group ${val.border}`}>
                                    <div className={`p-4 rounded-xl inline-block mb-6 bg-white/5 ${val.bg} transition-colors`}>{val.icon}</div>
                                    <h3 className="text-2xl font-black text-white mb-4">{val.title}</h3>
                                    <p className="text-gray-400 font-light leading-relaxed">{val.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* MEET THE FOUNDER */}
                    <div className="mb-20 relative">
                        <GlowingOrb className="top-1/2 left-0 w-[600px] h-[600px] bg-blue-600/10" />
                        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="relative z-10 rounded-[3rem] p-8 md:p-12 lg:p-16 border border-white/10 overflow-hidden flex flex-col md:flex-row items-center gap-12 bg-gradient-to-br from-[#0a0f1c] to-[#050914] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>
                            
                            {/* Image Container */}
                            <div className="w-full md:w-1/3 flex justify-center shrink-0">
                                <div className="relative group mx-auto">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                                    <div className="relative aspect-[4/5] w-64 md:w-full max-w-[320px] rounded-3xl overflow-hidden border border-white/10 bg-[#0a0f1c] mx-auto">
                                        <img 
                                            src="/assets/founder.jpg" 
                                            alt="Vinay Kumar Mahato" 
                                            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" 
                                            onError={(e) => { e.currentTarget.src = 'https://vinaykumarmahato.vercel.app/img/pro.png'; }} 
                                        />
                                    </div>
                                    <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white text-xs font-black px-5 py-2.5 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.4)] tracking-widest uppercase">
                                        Founder
                                    </div>
                                </div>
                            </div>
                            
                            {/* Info Container */}
                            <div className="w-full md:w-2/3 text-center md:text-left relative z-10">
                                <span className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-3 block">The Visionary</span>
                                <h2 className="text-4xl md:text-5xl font-black mb-3 text-white">Vinay Kumar Mahato</h2>
                                <h3 className="text-xl md:text-2xl font-light text-gray-400 mb-8">Java Full-Stack Architect & Tech Educator</h3>
                                
                                <div className="space-y-5 text-gray-300 font-light leading-relaxed mb-2 text-lg">
                                    <p>
                                        Founder of <span className="font-bold text-white">Inoglle</span> and the mastermind behind <span className="font-bold text-white">ADV Indian Coder</span>. Vinay started this platform with a singular goal: to architect the future with scalable code and bypass outdated college curriculums.
                                    </p>
                                    <p>
                                        With deep expertise in enterprise software architectures, he has successfully mentored and empowered over <strong className="text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-md">10,000+ learners worldwide</strong>, transforming absolute beginners into competent, industry-ready software developers.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* CTA */}
                    <div className="text-center relative pb-12">
                        <GlowingOrb className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10" />
                        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-16 shadow-2xl">
                            <h2 className="text-4xl md:text-5xl font-black mb-6">Join the Revolution</h2>
                            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light">
                                Don't let four years of college define your future. Take control of your career in 30 days.
                            </p>
                            <Link to="/courses" className="inline-flex items-center px-10 py-5 bg-white text-black font-black text-lg rounded-full hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                                View Our Masterclasses <ArrowRight className="ml-2" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </PageWrapper>
    );
};

export default AboutPage;
