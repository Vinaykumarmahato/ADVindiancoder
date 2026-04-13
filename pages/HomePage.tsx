import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { PlayCircle, ArrowRight, Code, Users, GraduationCap, CheckCircle, Github, MessageSquare, Briefcase, Award, Zap, Shield, TrendingUp, ChevronRight, Star } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { COURSES } from '../constants';
import SEO from '../components/SEO';

// Elegant fade-in up variant
const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

// Bento Grid Item
const BentoCard = ({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => (
    <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay }}
        className={`relative overflow-hidden rounded-3xl bg-white/5 dark:bg-black/40 backdrop-blur-2xl border border-white/10 dark:border-white/[0.05] shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:border-primary/30 transition-all duration-500 group ${className}`}
    >
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent dark:from-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        {children}
    </motion.div>
);

const GlowingOrb = ({ className }: { className: string }) => (
    <div className={`absolute rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-pulse ${className}`}></div>
);

const HomePage = () => {
    const { scrollYProgress } = useScroll();
    const yTransform = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    const homeSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "ADV Indian Coder",
        "url": "https://advindiancoder.com",
        "logo": "https://advindiancoder.com/logo.png",
        "description": "Premium coding education platform focusing on industry-ready skills, live masterclasses, and career growth.",
        "sameAs": [
            "https://youtube.com/@advindiancoder",
            "https://github.com/Vinaykumarmahato"
        ]
    };

    return (
        <PageWrapper>
            <SEO 
                title="Home" 
                description="Master coding from zero to job-ready with ADV Indian Coder. Free playlists, live masterclasses, and 24/7 mentor support for Java, Python, and more."
                schema={homeSchema}
            />
            <div className="bg-[#050914] text-white selection:bg-primary/30 selection:text-white min-h-screen font-sans overflow-x-hidden">

                {/* 1. HERO SECTION */}
                <section className="relative min-h-[90vh] md:min-h-[100vh] flex items-start md:items-center justify-center pt-10 md:pt-20 overflow-hidden">
                    {/* Background Effects */}
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                        <GlowingOrb className="top-1/4 -left-32 w-[500px] h-[500px] bg-primary/40" />
                        <GlowingOrb className="bottom-1/4 -right-32 w-[600px] h-[600px] bg-purple-600/30" />
                        <GlowingOrb className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/40" />
                    </div>

                    <div className="relative z-10 w-full max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
                        <motion.div style={{ y: yTransform, opacity: opacityTransform }} className="flex flex-col items-center">

                            {/* Beta Tag */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
                                className="mb-8"
                            >
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl">
                                    <span className="relative flex h-2.5 w-2.5">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                                    </span>
                                    <span className="text-sm font-medium tracking-wide text-gray-300">Over 500+ Students Placed</span>
                                </div>
                            </motion.div>

                            {/* Headline */}
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                className="text-4xl sm:text-6xl md:text-8xl lg:text-[7.5rem] font-black tracking-tighter leading-[0.95]"
                            >
                                From Zero to<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-primary to-purple-500 animate-gradient-bg bg-[200%_auto]">
                                    Job-Ready.
                                </span>
                            </motion.h1>

                            {/* Subheadline */}
                            <motion.p
                                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                className="mt-8 text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed font-light"
                            >
                                <strong className="text-white font-medium">You Don't Need a CS Degree. You Need the Right Mentor.</strong><br />
                                No Fluff. No Theory Overload. Just Skills That Get You Hired.
                            </motion.p>

                            {/* CTA Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                className="mt-12 flex flex-col sm:flex-row gap-6 justify-center w-full sm:w-auto"
                            >
                                <Link to="/masterclass" className="group relative inline-flex h-16 items-center justify-center overflow-hidden rounded-full bg-primary px-10 font-bold text-white transition-all hover:scale-105 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#050914] shadow-[0_0_40px_rgba(0,120,255,0.4)] hover:shadow-[0_0_60px_rgba(0,120,255,0.6)]">
                                    <span className="mr-2 text-lg">Explore Masterclasses</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <a href="https://wa.me/919931860964" target="_blank" rel="noopener noreferrer" className="group inline-flex h-16 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-10 font-bold text-white transition-all hover:bg-white/10 hover:border-white/20 hover:scale-105">
                                    <MessageSquare className="mr-3 w-5 h-5 text-[#25D366]" />
                                    <span className="text-lg">Talk to Mentor</span>
                                </a>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}
                        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                    >
                        <span className="text-xs tracking-[0.2em] text-gray-500 uppercase">Scroll to explore</span>
                        <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent"></div>
                    </motion.div>
                </section>

                {/* 2. THE BENTO GRID (What Makes Us Different) */}
                <section className="py-20 px-4 relative z-10 overflow-hidden">
                    <div className="max-w-7xl mx-auto">
                        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-20">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
                                Why We Are <span className="text-gray-500 italic font-mono font-light">Different/</span>
                            </h2>
                            <p className="text-xl text-gray-400 max-w-2xl">We removed the theory you don't need, and multiplied the practical execution you do need.</p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[250px]">
                            {/* Large Feature 1 */}
                            <BentoCard className="md:col-span-2 lg:col-span-2 row-span-2 p-10 flex flex-col justify-end group" delay={0}>
                                {/* Visual Ornament */}
                                <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
                                    <div className="absolute top-[-10%] right-[-10%] w-[70%] h-[70%] opacity-20 group-hover:opacity-40 transition-all duration-1000 group-hover:scale-110">
                                        <img 
                                            src="/assets/live-architecture.png" 
                                            alt="Architecture Illustration" 
                                            className="w-full h-full object-contain filter hue-rotate-15 blur-[1px] group-hover:blur-0 transition-all duration-700" 
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(0,120,255,0.15),transparent_50%)]"></div>
                                </div>

                                {/* Live Pulse Badge */}
                                <div className="absolute top-8 right-8 flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 backdrop-blur-md">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                                    </span>
                                    <span className="text-[10px] font-bold tracking-widest text-red-500 uppercase">Live Now</span>
                                </div>

                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full"></div>
                                <div className="mb-auto p-4 bg-primary/10 w-fit rounded-2xl border border-primary/20 relative z-10">
                                    <Users className="w-8 h-8 text-primary" />
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-3xl font-bold mb-3 mt-6">Live Interactive Architecture</h3>
                                    <p className="text-gray-400 text-lg leading-relaxed">No dead recorded videos masquerading as a course. Ask questions in real-time, get unstuck immediately, and build alongside your mentor.</p>
                                </div>
                            </BentoCard>

                            {/* Small Feature 1 */}
                            <BentoCard className="p-8 flex flex-col justify-between" delay={0.1}>
                                <Code className="w-8 h-8 text-purple-400" />
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Real Projects</h3>
                                    <p className="text-gray-400 text-sm">Clone real startups. Write code that goes on your resume immediately.</p>
                                </div>
                            </BentoCard>

                            {/* Small Feature 2 */}
                            <BentoCard className="p-8 flex flex-col justify-between" delay={0.2}>
                                <Briefcase className="w-8 h-8 text-yellow-400" />
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Placement Focus</h3>
                                    <p className="text-gray-400 text-sm">Every hour spent learning is reverse-engineered from technical interviews.</p>
                                </div>
                            </BentoCard>

                            {/* Wide Feature */}
                            <BentoCard className="md:col-span-2 p-8 flex items-center justify-between overflow-hidden" delay={0.3}>
                                <div className="relative z-10 max-w-md">
                                    <div className="flex gap-2 mb-4">
                                        <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-mono text-gray-300">Resume</span>
                                        <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-mono text-primary">LinkedIn</span>
                                        <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-mono text-gray-300">GitHub</span>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">Brand Creation</h3>
                                    <p className="text-gray-400">We don't just teach you. We build your digital footprint so recruiters find you.</p>
                                </div>
                                <Shield className="w-32 h-32 text-white/5 absolute -right-4 -bottom-4" />
                            </BentoCard>
                        </div>
                    </div>
                </section>

                {/* 3. COURSES SHOWCASE */}
                <section className="py-20 px-4 relative overflow-hidden">
                    <GlowingOrb className="top-1/2 left-0 w-[500px] h-[700px] bg-primary/20 -translate-y-1/2" />

                    <div className="max-w-7xl mx-auto relative z-10">
                        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                            <div>
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
                                    Master The <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Tech Stack.</span>
                                </h2>
                                <p className="text-xl text-gray-400 max-w-xl">Zero fluff. Straight to the skills you need to land a job paying ₹5LPA to ₹15LPA+.</p>
                            </div>
                            <Link to="/masterclass" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors font-semibold backdrop-blur-md border border-white/10 hover:border-white/30">
                                View Full Syllabus <ArrowRight className="w-4 h-4" />
                            </Link>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {COURSES.slice(0, 4).map((course, idx) => (
                                <motion.div
                                    key={course.id}
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="group relative p-8 rounded-3xl bg-[#0a0f1c] border border-white/5 hover:bg-[#0d1425] transition-all duration-500 hover:border-primary/50"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>
                                    <div className="relative z-10 flex flex-col h-full">
                                        <div className="flex justify-between items-start mb-6">
                                            <div className="p-3 bg-white/5 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                                                <PlayCircle className="w-8 h-8 text-primary" />
                                            </div>
                                            <div className="flex flex-col items-end gap-2">
                                                <span className="px-2.5 py-1 bg-white/5 rounded-full text-[10px] font-mono text-gray-500 group-hover:text-white transition-colors border border-white/5">
                                                    {course.category}
                                                </span>
                                                {course.rating && (
                                                    <span className="flex items-center gap-1 text-xs text-yellow-500 font-bold">
                                                        <Star size={10} className="fill-current" /> {course.rating.toFixed(1)}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        <div className="mt-auto">
                                            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">{course.title}</h3>
                                            <p className="text-xs text-gray-500 line-clamp-2 mb-4 font-light">{course.description}</p>
                                            
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-1.5 text-[10px] font-medium text-gray-400">
                                                    <Users size={12} />
                                                    <span>{course.enrolledCount?.toLocaleString()}+</span>
                                                </div>
                                                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 group-hover:bg-primary transition-colors">
                                                    <ChevronRight className="w-4 h-4 text-white" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <Link to={course.youtubeLink} className="absolute inset-0 z-20"><span className="sr-only">View Component</span></Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. METRICS / MARQUEE / TRUST */}
                <section className="py-24 border-y border-white/5 relative overflow-hidden bg-black/50">
                    <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 relative z-10">
                        {[
                            { val: "500+", lbl: "Engineers Trained" },
                            { val: "₹5L-15L", lbl: "Avg Package Range" },
                            { val: "100%", lbl: "Practical Output" },
                            { val: "24/7", lbl: "Community Access" }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                className="text-center"
                            >
                                <h4 className="text-4xl md:text-5xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">{stat.val}</h4>
                                <p className="text-sm md:text-base font-mono text-primary/80 uppercase tracking-widest">{stat.lbl}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* 5. FINALE CTA */}
                <section className="py-24 px-4 relative overflow-hidden">
                    <GlowingOrb className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20" />

                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                            <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-8">
                                The Code Doesn't Write Itself.<br className="hidden md:block" />
                                <span className="italic text-gray-500 font-light font-serif">Neither Does Your Career.</span>
                            </h2>
                            <p className="text-xl md:text-2xl text-gray-400 mb-12">
                                Seats for the next live cohort are filling fast. Secure your spot and let's get you enterprise-ready.
                            </p>

                            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                                <Link to="/masterclass" className="w-full sm:w-auto inline-flex items-center justify-center h-16 px-10 rounded-full bg-white text-black font-extrabold text-lg transition-transform hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                                    Join the Live Masterclass
                                </Link>
                                <a href="https://wa.me/919931860964" className="w-full sm:w-auto inline-flex items-center justify-center h-16 px-10 rounded-full bg-[#1da851]/10 text-[#25D366] border border-[#25d366]/30 font-bold text-lg hover:bg-[#1da851]/20 transition-colors">
                                    <MessageSquare className="mr-2 w-5 h-5" /> Chat on WhatsApp
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </section>

            </div>
        </PageWrapper>
    );
};

export default HomePage;