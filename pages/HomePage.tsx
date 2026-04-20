import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { PlayCircle, ArrowRight, Code, Users, GraduationCap, CheckCircle, Github, MessageSquare, Briefcase, Award, Zap, Shield, TrendingUp, ChevronRight, Star, Terminal, X, Rocket } from 'lucide-react';
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

const ADV_ROADMAP = [
    { title: "GitHub Integration", icon: Github, color: "text-blue-400", items: ["GitHub OAuth login for seamless auto-auth", "One-click commit to repository directly from IDE", "Automatic repository creation from platform", "Pull request (PR) based submission processing"] },
    { title: "Smart Evaluation System", icon: Shield, color: "text-purple-400", items: ["Auto code execution & output validation", "Test case-based checking mechanics", "AI-based code review & logic suggestions", "Robust plagiarism detection engine"] },
    { title: "Progress & Analytics", icon: TrendingUp, color: "text-green-400", items: ["Topic-wise granular progress tracking", "Daily/weekly coding streaks & heatmap", "Global performance analytics dashboard", "Weak area detection with micro-recommendations"] },
    { title: "Gamification Engine", icon: Award, color: "text-yellow-400", items: ["Global leaderboards based on submissions", "Dynamic badges & achievements (e.g. 100 Solved)", "XP (experience points) ecosystem", "Community challenges and timed contests"] },
    { title: "Community Features", icon: Users, color: "text-pink-400", items: ["Public student profiles with GitHub vitals", "Explore and critique others' submissions", "Like, comment, and discuss code snippets", "Live collaborative multiplayer coding rooms"] },
    { title: "Learning Enhancements", icon: GraduationCap, color: "text-orange-400", items: ["Topic-wise guided immersive practice paths", "Step-by-step hints and solution walkthroughs", "Video explanations embedded next to problems", "Adaptive difficulty level scaling"] },
    { title: "UI/UX & Security", icon: Code, color: "text-cyan-400", items: ["Advanced syntax highlighting & dynamic themes", "Multi-language support expansion", "Auto-check if code exists in user's GitHub", "Cryptographic validation of commit history"] }
];

const HomePage = () => {
    const { scrollYProgress } = useScroll();
    const yTransform = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    const [showRoadmap, setShowRoadmap] = useState(false);

    useEffect(() => {
        if (showRoadmap) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [showRoadmap]);

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
                title="Best Job-Ready Courses in India | AI, ML, Data & Dev | ADV Indian Coder" 
                description="Master Java, Python, AI, Machine Learning, Data Science, Software Testing & Digital Marketing with the best industry-ready cohorts. High-performance live lab, expert mentorship, and global placement support."
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
                                    <span className="text-sm font-medium tracking-wide text-gray-300">Join 3,500+ Aspiring Developers</span>
                                </div>
                            </motion.div>

                            {/* Headline */}
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                className="text-4xl sm:text-6xl md:text-8xl lg:text-[7.5rem] font-black tracking-tighter leading-[0.95]"
                            >
                                Learn Skills That<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-primary to-purple-500 animate-gradient-bg bg-[200%_auto]">
                                    Get You Hired.
                                </span>
                            </motion.h1>

                            {/* Subheadline */}
                            <motion.p
                                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                className="mt-8 text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed font-light"
                            >
                                <strong className="text-white font-medium">India's Best Live Classes for Job Seekers.</strong><br />
                                Master Software, AI, Data & Marketing. No Fluff. No boring theory. Just real projects and skills that get you hired by top companies globally.
                            </motion.p>

                            {/* CTA Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                className="mt-12 flex flex-col sm:flex-row gap-6 justify-center w-full sm:w-auto"
                            >
                                <Link to="/masterclass" className="group relative inline-flex min-h-[4rem] items-center justify-center overflow-hidden rounded-full bg-primary px-8 md:px-10 font-bold text-white transition-all hover:scale-105 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#050914] shadow-[0_0_40px_rgba(0,120,255,0.4)] hover:shadow-[0_0_60px_rgba(0,120,255,0.6)] whitespace-nowrap">
                                    <span className="mr-2 text-base md:text-lg">Explore Masterclasses</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <a href="https://wa.me/919931860964" target="_blank" rel="noopener noreferrer" className="group inline-flex min-h-[4rem] items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-8 md:px-10 font-bold text-white transition-all hover:bg-white/10 hover:border-white/20 hover:scale-105 whitespace-nowrap">
                                    <MessageSquare className="mr-3 w-5 h-5 text-[#25D366]" />
                                    <span className="text-base md:text-lg">Talk to Mentor</span>
                                </a>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}
                        className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
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
                                Why Our <span className="text-gray-500 italic font-mono font-light">Trainingis Different/</span>
                            </h2>
                            <p className="text-xl text-gray-400 max-w-2xl">We provided the best industry-ready coding training in India by focusing on practical execution over theory.</p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[250px]">
                            {/* Large Feature 1 */}
                            <BentoCard className="md:col-span-2 lg:col-span-2 row-span-2 p-10 flex flex-col justify-end group" delay={0}>
                                {/* Visual Ornament */}
                                <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
                                    <div className="absolute top-[-10%] right-[-10%] w-[70%] h-[70%] opacity-20 group-hover:opacity-40 transition-all duration-1000 group-hover:scale-110">
                                        <img 
                                            src="/assets/live-architecture.png" 
                                            alt="ADV Indian Coder Live Coding Environment & Interactive Architecture" 
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
                                    <h3 className="text-3xl font-bold mb-3 mt-6">Live Interactive Coding Lab</h3>
                                    <p className="text-gray-400 text-lg leading-relaxed">Experience India's most advanced coding lab. Ask questions in real-time, get unstuck immediately, and build industry-standard software with mentors.</p>
                                </div>
                            </BentoCard>

                            {/* Small Feature 1 */}
                            <BentoCard className="p-8 flex flex-col justify-between" delay={0.1}>
                                <Code className="w-8 h-8 text-purple-400" />
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Startup Projects</h3>
                                    <p className="text-gray-400 text-sm">Build live startup clones. Write production-ready code for your software developer resume.</p>
                                </div>
                            </BentoCard>

                            {/* Small Feature 2 */}
                            <BentoCard className="p-8 flex flex-col justify-between" delay={0.2}>
                                <Briefcase className="w-8 h-8 text-yellow-400" />
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Job Placement Focus</h3>
                                    <p className="text-gray-400 text-sm">India-focused career training. Learn precisely what technical interviewers in top companies ask.</p>
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

                {/* 2.5 ADV LAB FEATURE BANNER */}
                <section className="py-12 px-4 relative z-10 w-full max-w-7xl mx-auto">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#0a0f1c] to-[#0a1024] border border-blue-500/20 p-8 md:p-14 shadow-2xl group">
                            {/* Neon Glow */}
                            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none group-hover:bg-blue-600/20 transition-colors duration-700"></div>
                            
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                                <div>
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 mb-6">
                                        <Terminal className="w-4 h-4 text-blue-400" />
                                        <span className="text-xs font-bold text-blue-300 uppercase tracking-widest">Free Cloud IDE</span>
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-black mb-6">
                                        Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">ADV Lab 1.0</span>
                                    </h2>
                                    <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                                        Don't just watch static videos. Code alongside them! Our powerful in-house playground supports Java, Python, and C++ with real-time execution and direct GitHub repository syncing.
                                    </p>
                                    
                                    <div className="space-y-4 mb-10">
                                        <div className="flex items-center gap-3 text-sm md:text-base text-gray-300">
                                            <CheckCircle className="w-5 h-5 text-green-400 shrink-0" /> Loads lesson code directly into the editor
                                        </div>
                                        <div className="flex items-center gap-3 text-sm md:text-base text-gray-300">
                                            <CheckCircle className="w-5 h-5 text-green-400 shrink-0" /> Zero local setup required
                                        </div>
                                        <div className="flex items-center gap-3 text-sm md:text-base bg-yellow-500/10 border border-yellow-500/20 p-3 rounded-xl group-hover:border-yellow-500/40 transition-colors">
                                            <Zap className="w-5 h-5 text-yellow-400 shrink-0" /> 
                                            <span><span className="font-bold text-yellow-400">Future Enhancements:</span> AI Code Review & Live Multiplayer Pair Programming coming soon!</span>
                                        </div>
                                    </div>
                                    
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                        <Link to="/adv-lab" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] whitespace-nowrap">
                                            <Code className="w-5 h-5" /> Launch ADV Lab Now
                                        </Link>
                                        <button 
                                            onClick={() => setShowRoadmap(true)}
                                            className="group flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 font-bold transition-all border border-white/10 hover:border-white/20 whitespace-nowrap"
                                        >
                                            <Rocket className="w-5 h-5 text-purple-400 group-hover:animate-bounce" /> View Full Roadmap
                                        </button>
                                    </div>
                                </div>
                                
                                {/* UI Mockup visualization */}
                                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)] transform lg:rotate-2 group-hover:rotate-0 transition-transform duration-500 bg-[#05060f]">
                                    {/* Mockup Header */}
                                    <div className="h-8 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                                    </div>
                                    {/* Mockup Body */}
                                    <div className="p-6 font-mono text-sm text-blue-300 leading-loose">
                                        <p><span className="text-purple-400">public class</span> <span className="text-blue-400 font-bold">FutureEnhancement</span> {'{'}</p>
                                        <p className="pl-4"><span className="text-purple-400">public static void</span> <span className="text-yellow-200">main</span>(String[] args) {'{'}</p>
                                        <p className="pl-8 text-gray-500">{"// Loading AI reviewer module..."}</p>
                                        <p className="pl-8">System.out.<span className="text-yellow-200">println</span>(<span className="text-green-400">"Connecting peers for multiplayer coding..."</span>);</p>
                                        <p className="pl-8 text-green-300 animate-pulse mt-4">{"=> Connection established!"}</p>
                                        <p className="pl-4">{'}'}</p>
                                        <p>{'}'}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* 3. COURSES SHOWCASE */}
                <section className="py-20 px-4 relative overflow-hidden">
                    <GlowingOrb className="top-1/2 left-0 w-[500px] h-[700px] bg-primary/20 -translate-y-1/2" />

                    <div className="max-w-7xl mx-auto relative z-10">
                        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                            <div>
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
                                    Top Rated <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Coding Courses.</span>
                                </h2>
                                <p className="text-xl text-gray-400 max-w-xl">Comprehensive software engineering training to land high-paying tech jobs in India (₹5LPA - ₹15LPA+).</p>
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
                                                <div className="flex gap-2">
                                                    {course.isOngoing && (
                                                        <span className="bg-green-500/20 text-green-400 text-[10px] font-black px-2 py-1 rounded-full border border-green-500/30 animate-pulse flex items-center gap-1 shadow-[0_0_10px_rgba(34,197,94,0.2)]">
                                                            <span className="w-1 h-1 rounded-full bg-green-500"></span>
                                                            ONGOING
                                                        </span>
                                                    )}
                                                    <span className="px-2.5 py-1 bg-white/5 rounded-full text-[10px] font-mono text-gray-500 group-hover:text-white transition-colors border border-white/5">
                                                        {course.category}
                                                    </span>
                                                </div>
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
                            { val: "5k+", lbl: "Students Trained" },
                            { val: "15+", lbl: "Recent Placements" },
                            { val: "98%", lbl: "Practical Output" },
                            { val: "24/7", lbl: "Coding Mentor Support" }
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
                                <span className="italic text-gray-500 font-light font-serif">Neither Does Your Tech Career.</span>
                            </h2>
                            <p className="text-xl md:text-2xl text-gray-400 mb-12">
                                Enrollment for the next industry-ready coding bootcamp is open. Available in both <span className="text-white font-bold">English</span> & <span className="text-white font-bold">Hindi</span> for global students.
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

                {/* 6. FAQ Section (SEO Optimized) */}
                <section className="py-24 px-4 bg-black/30 border-t border-white/5 relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
                            <p className="text-gray-400">Everything you need to know about our industry-ready coding courses.</p>
                        </motion.div>
                        
                        <div className="space-y-4">
                            {[
                                { q: "Is this suitable for beginners with no coding background?", a: "Yes. Our courses are designed to take absolute beginners from zero to industry-ready. We cover fundamentals before moving into advanced startup-grade projects." },
                                { q: "Do you offer placement assistance for Indian students?", a: "Absolutely. We provide dedicated job-placement training focused on the current Indian tech market, including mock interviews, resume reviews, and direct referrals." },
                                { q: "How is ADV Lab helpful for my coding training?", a: "ADV Lab is our professional-grade online IDE. It allows you to practice Java, Python, and C directly in your browser with real-time feedback, making learning extremely efficient." },
                                { q: "What makes ADV Indian Coder the best coding classes in India?", a: "Unlike others, we focus on 100% practical execution. You don't just watch videos; you build real startups under the mentorship of industry experts who know what recruiters want." }
                            ].map((item, i) => (
                                <motion.div 
                                    key={i}
                                    variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                    className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all"
                                >
                                    <h3 className="text-lg font-bold mb-3 flex items-center gap-3">
                                        <span className="text-primary font-mono">Q.</span> {item.q}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed pl-8 border-l-2 border-primary/20">{item.a}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

            </div>

            {/* ROADMAP MODAL */}
            {showRoadmap && (
                <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 sm:p-6 transition-opacity duration-300">
                    {/* Backdrop */}
                    <div 
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer" 
                        onClick={() => setShowRoadmap(false)}
                    ></div>
                    
                    {/* Modal Content */}
                    <div className="relative w-full max-w-5xl max-h-[90vh] bg-[#05060f] border border-white/10 shadow-[0_0_50px_rgba(0,120,255,0.1)] rounded-[2rem] overflow-hidden flex flex-col transition-transform duration-300">
                        
                        {/* Header */}
                        <div className="relative p-6 md:p-8 bg-gradient-to-b from-blue-900/20 to-transparent border-b border-white/5 flex items-center justify-between shrink-0">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none"></div>
                            
                            <div className="relative z-10 flex items-center gap-4">
                                <div className="hidden sm:flex w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.2)]">
                                    <Rocket className="w-7 h-7 text-blue-400" />
                                </div>
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-black text-white">ADV Lab <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Roadmap 2.0</span></h3>
                                    <p className="text-sm md:text-base text-gray-400 mt-1">Our massive blueprint to build the ultimate developer ecosystem.</p>
                                </div>
                            </div>
                            
                            <button 
                                onClick={() => setShowRoadmap(false)}
                                className="relative z-10 w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors shrink-0"
                            >
                                <X className="w-5 h-5 text-gray-400" />
                            </button>
                        </div>

                        {/* Scrolling Content */}
                        <div className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                                {ADV_ROADMAP.map((section, idx) => {
                                    const Icon = section.icon;
                                    return (
                                        <div key={idx} className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl hover:border-white/10 transition-colors group">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className={`p-2 rounded-lg bg-white/5 ${section.color} border border-white/5`}>
                                                    <Icon className="w-5 h-5" />
                                                </div>
                                                <h4 className="text-lg font-bold text-gray-200">{section.title}</h4>
                                            </div>
                                            <ul className="space-y-3">
                                                {section.items.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                                                        <span className={`mt-1 font-bold ${section.color}`}>•</span>
                                                        <span className="leading-relaxed">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )
                                })}
                            </div>
                            
                            <div className="mt-8 p-6 rounded-2xl border border-dashed border-white/20 bg-gradient-to-r from-white/5 to-transparent text-center relative z-10">
                                <h4 className="text-xl font-bold text-white mb-2">Want to shape this future?</h4>
                                <p className="text-gray-400">Join our masterclass cohorts to get absolute priority access to all these upcoming features.</p>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </PageWrapper>
    );
};

export default HomePage;