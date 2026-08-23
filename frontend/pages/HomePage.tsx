import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
    PlayCircle, ArrowRight, Code, Users, GraduationCap, CheckCircle, Github, 
    MessageSquare, Briefcase, Award, Zap, Shield, TrendingUp, ChevronRight, 
    Star, Terminal, X, Rocket, Share2, MessageCircle, Facebook, Instagram, 
    Linkedin, Brain, Trophy, Sparkles, CheckCircle2, Cpu, Globe, ArrowUpRight
} from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Toast } from '../components/Toast';
import { COURSES } from '../constants';
import SEO from '../components/SEO';
import InteractiveSimulator from '../components/InteractiveSimulator';
import { globalOrganizationSchema, globalWebsiteSchema } from '../utils/seoHelpers';

const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
};

const BentoCard = ({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => (
    <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay }}
        className={`relative overflow-hidden rounded-[2rem] bg-white dark:bg-[#070c18] backdrop-blur-2xl border border-gray-200/80 dark:border-white/[0.08] shadow-[0_8px_30px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:border-primary/50 hover:shadow-[0_0_40px_rgba(0,120,255,0.18)] transition-all duration-500 group ${className}`}
    >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        {children}
    </motion.div>
);

const GlowingOrb = ({ className }: { className: string }) => (
    <div className={`absolute rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[120px] opacity-25 dark:opacity-40 pointer-events-none ${className}`}></div>
);

const ADV_ROADMAP = [
    { title: "GitHub Sync & Automated PRs", icon: Github, color: "text-blue-400", items: ["GitHub OAuth login for seamless auto-auth", "One-click commit to repository directly from IDE", "Automatic repository creation from platform", "Pull request (PR) based submission processing"] },
    { title: "Smart Code Evaluation Engine", icon: Shield, color: "text-purple-400", items: ["Judge0 auto code execution & output validation", "Hidden test case evaluation mechanics", "AI-based code review & complexity insights", "Automated anti-plagiarism guard"] },
    { title: "Progress & Heatmap Analytics", icon: TrendingUp, color: "text-emerald-400", items: ["Granular topic-wise progress breakdown", "Daily/weekly coding streaks & contribution heatmap", "Global performance analytics dashboard", "Weak area diagnosis with smart problem suggestions"] },
    { title: "Gamification & Swag Rewards", icon: Award, color: "text-amber-400", items: ["Global student leaderboard with weekly ranks", "Dynamic achievements & milestone badges", "ADV Coins reward ecosystem for merchandise", "Community code battles and timed contests"] },
    { title: "Developer Community", icon: Users, color: "text-pink-400", items: ["Public student portfolio profiles with GitHub vitals", "Code snippet discussion & solution review", "Peer interaction rooms and problem threads", "Live collaborative pair programming"] },
    { title: "Learning Enhancements", icon: GraduationCap, color: "text-orange-400", items: ["Curated topic mastery roadmaps", "Interactive step-by-step hints and algorithmic traces", "Bilingual explanations (Hindi + English)", "Adaptive difficulty scaling"] }
];

const HomePage: React.FC = () => {
    const { scrollYProgress } = useScroll();
    const yTransform = useTransform(scrollYProgress, [0, 1], [0, -180]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

    const [showRoadmap, setShowRoadmap] = useState(false);
    const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' | 'info'; hint?: string } | null>(null);

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

    return (
        <PageWrapper>
            <SEO 
                title="ADV Indian Coder | Learn Java, DSA, Full-Stack & Crack Tech Jobs" 
                description="Learn Java, DSA, System Design, coding practice, interview preparation, jobs, notes, and masterclasses at ADV Indian Coder. India’s modern platform for developers and students."
                keywords="java tutorial, dsa course, coding practice, interview preparation, software jobs, system design, react tutorial, spring boot tutorial, learn programming, adv indian coder"
                schema={[globalWebsiteSchema, globalOrganizationSchema]}
                exactTitle={true}
            />
            <div className="bg-white dark:bg-[#040711] text-gray-900 dark:text-white selection:bg-primary/30 selection:text-white min-h-screen font-sans overflow-x-hidden transition-colors duration-300">

                {/* 1. HERO SECTION */}
                <section className="relative min-h-[92vh] md:min-h-screen flex items-center justify-center pt-32 sm:pt-36 md:pt-40 lg:pt-44 pb-12 overflow-hidden">
                    {/* Background Grid & Lighting Effects */}
                    <div className="absolute inset-0 z-0 pointer-events-none">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800e_1px,transparent_1px),linear-gradient(to_bottom,#8080800e_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                        <GlowingOrb className="top-1/4 -left-32 w-[600px] h-[600px] bg-blue-600/30" />
                        <GlowingOrb className="bottom-1/4 -right-32 w-[650px] h-[650px] bg-purple-600/25" />
                        <GlowingOrb className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] bg-indigo-900/20" />
                    </div>

                    <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pb-16 lg:pb-24">
                            
                            {/* Left Column: Headline & CTA */}
                            <motion.div 
                                style={{ y: yTransform, opacity: opacityTransform }} 
                                className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
                            >
                                {/* Active Community Badge */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1, duration: 0.6 }}
                                    className="mb-8"
                                >
                                    <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 backdrop-blur-xl shadow-[0_0_20px_rgba(59,130,246,0.15)]">
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                        </span>
                                        <span className="text-xs font-bold tracking-wide text-blue-600 dark:text-blue-300">Join 5,000+ Aspiring Software Engineers</span>
                                    </div>
                                </motion.div>

                                {/* Headline */}
                                <motion.h1
                                    initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                    className="text-4xl sm:text-6xl md:text-7xl lg:text-[4.5rem] xl:text-[5.2rem] font-black tracking-tight leading-[1.02]"
                                >
                                    Master Coding &<br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
                                        Crack Top Tech Jobs.
                                    </span>
                                </motion.h1>

                                {/* Subheadline */}
                                <motion.p
                                    initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                    className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl lg:max-w-none leading-relaxed font-normal"
                                >
                                    <strong className="text-gray-900 dark:text-white font-bold">India's Complete Practical Tech Ecosystem.</strong><br />
                                    Master industry concepts with Live Cohorts & Notes, solve 350+ DSA problems on Practice Hub, benchmark on ExamHub, build startups in ADV Lab, and get placed at top companies.
                                </motion.p>

                                {/* CTA Buttons */}
                                <motion.div
                                    initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                    className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center lg:justify-start w-full"
                                >
                                    <Link to="/masterclass" className="w-full sm:w-auto group relative inline-flex min-h-[3.8rem] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-8 font-bold text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_35px_rgba(59,130,246,0.5)] focus:outline-none whitespace-nowrap text-base shadow-[0_0_25px_rgba(59,130,246,0.35)]">
                                        <span className="mr-2">Explore Masterclasses</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
                                    </Link>
                                    <a href="https://wa.me/919931860964" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto group inline-flex min-h-[3.8rem] items-center justify-center overflow-hidden rounded-2xl border border-gray-300 dark:border-white/15 bg-gray-50 dark:bg-white/[0.04] backdrop-blur-xl px-8 font-bold text-gray-800 dark:text-white transition-all duration-300 hover:bg-gray-100 dark:hover:bg-white/10 hover:border-gray-400 dark:hover:border-white/25 hover:scale-[1.03] whitespace-nowrap text-base shadow-sm">
                                        <MessageSquare className="mr-2.5 w-4 h-4 text-[#25D366] shrink-0" />
                                        <span>Talk to Mentor</span>
                                    </a>
                                </motion.div>
                            </motion.div>

                            {/* Right Column: Interactive Simulator */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 25 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ delay: 0.35, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="lg:col-span-5 w-full relative z-20 min-w-0"
                            >
                                <InteractiveSimulator />
                            </motion.div>
                            
                        </div>
                    </div>
                </section>

                {/* 2. THE BENTO GRID (What Makes Us Different) */}
                <section className="py-20 px-4 relative z-10 overflow-hidden">
                    <div className="max-w-7xl mx-auto">
                        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-14">
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold text-blue-400 uppercase tracking-widest mb-4">
                                <Sparkles className="w-3.5 h-3.5" />
                                <span>The ADV Difference</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4">
                                Why Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">Training is Different</span>
                            </h2>
                            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl font-normal">
                                We eliminated outdated academic slides. Learn how software engineering is actually performed in high-growth companies.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[260px]">
                            {/* Large Feature 1 */}
                            <BentoCard className="md:col-span-2 lg:col-span-2 row-span-2 p-8 md:p-10 flex flex-col justify-end group" delay={0}>
                                <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
                                    <div className="absolute top-[-10%] right-[-10%] w-[70%] h-[70%] opacity-20 group-hover:opacity-40 transition-all duration-1000 group-hover:scale-110">
                                        <img 
                                            src="/assets/live-architecture.png" 
                                            alt="ADV Indian Coder Live Architecture" 
                                            className="w-full h-full object-contain filter hue-rotate-15 blur-[1px] group-hover:blur-0 transition-all duration-700" 
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(0,120,255,0.15),transparent_50%)]"></div>
                                </div>

                                <div className="absolute top-6 right-6 flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 backdrop-blur-md">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                                    </span>
                                    <span className="text-[10px] font-bold tracking-widest text-red-500 uppercase">Live Interactive</span>
                                </div>

                                <div className="mb-auto p-3.5 bg-blue-500/10 w-fit rounded-2xl border border-blue-500/20 relative z-10 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                                    <Users className="w-7 h-7 text-blue-400" />
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-2xl sm:text-3xl font-extrabold mb-3 text-gray-900 dark:text-white">Live Interactive Coding Labs</h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">Experience live problem solving. Ask questions in real-time, get unstuck immediately, and build production-standard software with mentor supervision.</p>
                                </div>
                            </BentoCard>

                            {/* Small Feature 1 */}
                            <BentoCard className="p-7 flex flex-col justify-between" delay={0.1}>
                                <div className="p-3 bg-purple-500/10 w-fit rounded-xl border border-purple-500/20 text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
                                    <Code className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Full-Stack Startups</h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">Build live clones with authentication, databases, and payments. Write real production code for your resume.</p>
                                </div>
                            </BentoCard>

                            {/* Small Feature 2 */}
                            <BentoCard className="p-7 flex flex-col justify-between" delay={0.2}>
                                <div className="p-3 bg-amber-500/10 w-fit rounded-xl border border-amber-500/20 text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
                                    <Briefcase className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Tech Job Placements</h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">India-focused career training. Master precisely what recruiters in top companies test during technical rounds.</p>
                                </div>
                            </BentoCard>

                            {/* Wide Feature */}
                            <BentoCard className="md:col-span-2 p-8 flex items-center justify-between overflow-hidden" delay={0.3}>
                                <div className="relative z-10 max-w-md">
                                    <div className="flex gap-2 mb-3">
                                        <span className="px-2.5 py-1 bg-gray-100 dark:bg-white/10 rounded-lg text-xs font-mono text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-transparent font-semibold">Resume</span>
                                        <span className="px-2.5 py-1 bg-blue-500/10 rounded-lg text-xs font-mono text-blue-400 border border-blue-500/20 font-semibold">LinkedIn Profile</span>
                                        <span className="px-2.5 py-1 bg-gray-100 dark:bg-white/10 rounded-lg text-xs font-mono text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-transparent font-semibold">GitHub Heatmap</span>
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900 dark:text-white">Brand & Portfolio Creation</h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">We don't just teach syntax. We architect your digital footprint so recruiters actively reach out to you.</p>
                                </div>
                                <Shield className="w-28 h-28 text-gray-300 dark:text-white/[0.04] absolute -right-4 -bottom-4" />
                            </BentoCard>
                        </div>
                    </div>
                </section>

                {/* 2.5 ADV LAB FEATURE BANNER */}
                <section className="py-12 px-4 relative z-10 w-full max-w-7xl mx-auto">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-blue-50/50 via-white to-blue-50/20 dark:from-[#090e1c] dark:via-[#070b16] dark:to-[#0a1224] border border-blue-300/40 dark:border-blue-500/20 p-8 md:p-14 shadow-2xl group">
                            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/[0.08] blur-[120px] rounded-full pointer-events-none" />
                            
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                                <div>
                                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 mb-6">
                                        <Terminal className="w-4 h-4 text-blue-400" />
                                        <span className="text-xs font-bold text-blue-600 dark:text-blue-300 uppercase tracking-widest">Free Cloud IDE</span>
                                    </div>
                                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-5 tracking-tight">
                                        Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">ADV Lab 1.0</span>
                                    </h2>
                                    <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed font-normal">
                                        Don't just watch static videos. Code alongside them! Our powerful in-house playground supports Java, Python, C++, and Web stacks with real-time execution and direct GitHub repository syncing.
                                    </p>
                                    
                                    <div className="space-y-3.5 mb-9">
                                        <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300 font-medium">
                                            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                                            <span>Loads lesson code directly into the editor</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300 font-medium">
                                            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                                            <span>Zero local installation or JDK/compiler setup required</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm bg-amber-500/10 border border-amber-500/20 p-3 rounded-xl">
                                            <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                                            <span className="text-gray-800 dark:text-gray-300"><strong className="text-amber-500">Upcoming:</strong> AI Code Reviews & Multiplayer Pair Programming.</span>
                                        </div>
                                    </div>
                                    
                                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
                                        <Link to="/adv-lab" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all shadow-[0_0_25px_rgba(37,99,235,0.35)] hover:-translate-y-0.5 text-sm sm:text-base">
                                            <Code className="w-5 h-5 shrink-0" /> Launch ADV Lab Now
                                        </Link>
                                        <button 
                                            onClick={() => setShowRoadmap(true)}
                                            className="w-full sm:w-auto group flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gray-100 dark:bg-white/[0.05] hover:bg-gray-200 dark:hover:bg-white/10 text-gray-700 dark:text-gray-300 font-bold transition-all border border-gray-200 dark:border-white/10 text-sm sm:text-base"
                                        >
                                            <Rocket className="w-4 h-4 text-purple-400 group-hover:animate-bounce shrink-0" /> View Roadmap
                                        </button>
                                    </div>
                                </div>
                                
                                {/* Mockup window */}
                                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.6)] bg-[#050814]">
                                    <div className="h-9 bg-white/[0.04] border-b border-white/[0.06] flex items-center justify-between px-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
                                            <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
                                            <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
                                        </div>
                                        <span className="text-[10px] text-gray-400 font-mono">ADVLab.java • JVM 21</span>
                                        <div className="w-4" />
                                    </div>
                                    <div className="p-6 font-mono text-xs sm:text-sm text-blue-300 leading-relaxed space-y-1">
                                        <p><span className="text-purple-400">public class</span> <span className="text-cyan-300 font-bold">LiveExecution</span> {'{'}</p>
                                        <p className="pl-4"><span className="text-purple-400">public static void</span> <span className="text-yellow-200">main</span>(String[] args) {'{'}</p>
                                        <p className="pl-8 text-gray-500">{"// Real-time Cloud Code Compilation"}</p>
                                        <p className="pl-8">System.out.<span className="text-yellow-200">println</span>(<span className="text-emerald-400">"Connecting to ADV Lab Cloud Engine..."</span>);</p>
                                        <p className="pl-8 text-emerald-400 mt-3 flex items-center gap-1">{"=> Compiled in 42ms • Status: 200 OK"}</p>
                                        <p className="pl-4">{'}'}</p>
                                        <p>{'}'}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* 2.6 AI EXAMHUB FEATURE BANNER */}
                <section className="py-12 px-4 relative z-10 w-full max-w-7xl mx-auto">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-purple-50/50 via-white to-purple-50/20 dark:from-[#0e091c] dark:via-[#090714] dark:to-[#140b24] border border-purple-300/40 dark:border-purple-500/20 p-8 md:p-14 shadow-2xl group">
                            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600/[0.08] blur-[120px] rounded-full pointer-events-none" />
                            
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                                <div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.6)] bg-[#050814]">
                                    <div className="h-9 bg-white/[0.04] border-b border-white/[0.06] flex items-center justify-between px-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
                                            <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
                                            <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
                                        </div>
                                        <span className="text-[10px] text-gray-400 font-mono">adv-ai-engine • UPSC/GATE</span>
                                        <div className="w-4" />
                                    </div>
                                    <div className="p-6 font-mono text-xs sm:text-sm leading-relaxed space-y-2">
                                        <p className="text-gray-400">Loading <span className="text-white font-bold">UPSC / GATE / JEE</span> Archives...</p>
                                        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                                            <div className="h-full bg-purple-500 w-[88%] rounded-full"></div>
                                        </div>
                                        <p className="text-blue-400 text-xs">{'[AI FORECAST]'} <span className="text-gray-300">Scanning recurring question patterns...</span></p>
                                        <p className="text-amber-300 text-xs">{'[WEIGHTAGE]'} <span className="text-gray-300">Algorithm & Data Structure weightage: 35%</span></p>
                                        <p className="text-emerald-400 pt-2 flex items-center gap-2 font-bold"><Trophy className="w-4 h-4" /> 2026 High-Yield Mock Ready</p>
                                    </div>
                                </div>

                                <div className="order-1 lg:order-2">
                                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 mb-6">
                                        <Brain className="w-4 h-4 text-purple-400" />
                                        <span className="text-xs font-bold text-purple-600 dark:text-purple-300 uppercase tracking-widest">AI Benchmark Arena</span>
                                    </div>
                                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-5 tracking-tight">
                                        Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">India's Toughest</span> Exams.
                                    </h2>
                                    <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed font-normal">
                                        Practice 85,000+ past year verified questions and prepare with AI-predicted mock templates for UPSC, GATE, JEE, NEET, Banking, and State PSCs.
                                    </p>
                                    
                                    <div className="space-y-3.5 mb-9">
                                        <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300 font-medium">
                                            <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0" />
                                            <span>85,000+ Past MCQs with step-by-step solutions</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300 font-medium">
                                            <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0" />
                                            <span>96.4% AI pattern match and accurate question prediction</span>
                                        </div>
                                    </div>
                                    
                                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
                                        <Link to="/exam-hub" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold transition-all shadow-[0_0_25px_rgba(147,51,234,0.35)] hover:-translate-y-0.5 text-sm sm:text-base">
                                            Explore ExamHub
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* 2.6.5 PRACTICE HUB FEATURE BANNER */}
                <section className="py-12 px-4 relative z-10 w-full max-w-7xl mx-auto">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-emerald-50/50 via-white to-emerald-50/20 dark:from-[#09150e] dark:via-[#060e0a] dark:to-[#0a1c12] border border-emerald-300/40 dark:border-emerald-500/20 p-8 md:p-14 shadow-2xl group">
                            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-600/[0.08] blur-[120px] rounded-full pointer-events-none" />
                            
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                                <div>
                                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 mb-6">
                                        <Trophy className="w-4 h-4 text-emerald-400" />
                                        <span className="text-xs font-bold text-emerald-600 dark:text-emerald-300 uppercase tracking-widest">350+ DSA Challenges</span>
                                    </div>
                                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-5 tracking-tight">
                                        Accelerate with <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Practice Hub</span>
                                    </h2>
                                    <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed font-normal">
                                        Sharpen your problem-solving abilities. Filter by topic, write solution code in our integrated Monaco workspace, and run against auto-evaluated test cases.
                                    </p>
                                    
                                    <div className="space-y-3.5 mb-9">
                                        <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300 font-medium">
                                            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                                            <span>Curated LeetCode/GFG style problem tiers (Easy • Med • Hard)</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300 font-medium">
                                            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                                            <span>Daily Streak & GitHub-Style Contribution Heatmap tracking</span>
                                        </div>
                                    </div>
                                    
                                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
                                        <Link to="/practice" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition-all shadow-[0_0_25px_rgba(16,185,129,0.35)] hover:-translate-y-0.5 text-sm sm:text-base">
                                            <Code className="w-5 h-5 shrink-0" /> Start Practicing Now
                                        </Link>
                                    </div>
                                </div>
                                
                                {/* Mockup window */}
                                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.6)] bg-[#050814]">
                                    <div className="h-9 bg-white/[0.04] border-b border-white/[0.06] flex items-center justify-between px-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
                                            <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
                                            <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
                                        </div>
                                        <span className="text-[10px] text-gray-400 font-mono">TwoSum.cpp • Problem #1</span>
                                        <div className="w-4" />
                                    </div>
                                    <div className="p-6 font-mono text-xs sm:text-sm leading-relaxed space-y-2">
                                        <div className="flex justify-between border-b border-white/5 pb-2 mb-2">
                                            <span className="text-white font-bold">Two Sum</span>
                                            <span className="text-emerald-400 text-xs bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-bold">Easy</span>
                                        </div>
                                        <div className="bg-black/40 p-3 rounded-xl border border-white/5 text-xs space-y-1">
                                            <p className="text-blue-400">Input: <span className="text-gray-300">nums = [2,7,11,15], target = 9</span></p>
                                            <p className="text-emerald-400">Output: <span className="text-gray-300">[0,1]</span></p>
                                        </div>
                                        <p className="text-emerald-400 pt-2 flex items-center gap-1.5 font-bold"><CheckCircle2 className="w-4 h-4" /> 15/15 Test cases passed (0ms)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* 2.7 ADV ECOSYSTEM FEATURES (3x3 Grid) */}
                <section className="py-20 px-4 relative z-10 overflow-hidden bg-gray-50/50 dark:bg-[#060a17]/70 border-y border-gray-200 dark:border-white/5">
                    <div className="max-w-7xl mx-auto">
                        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-14">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4">
                                Exactly What is <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">ADV Indian Coder?</span>
                            </h2>
                            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-normal">
                                A fully integrated platform designed to transform complete beginners into high-performing engineers.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { title: "ADV Lab IDE", path: "/adv-lab", desc: "Online compiler & practice IDE supporting Java, Python, C++, and JS with zero setup required.", badge: "FREE", icon: Terminal, color: "text-blue-400" },
                                { title: "Practice Hub", path: "/practice", desc: "Solve 350+ DSA problems with automated Judge0 test cases, daily streaks, and heatmaps.", badge: "350+ DSA", icon: Trophy, color: "text-emerald-400" },
                                { title: "Live Masterclass", path: "/masterclass", desc: "30-day cohort-based mentorship building production-grade digital applications.", badge: "COHORT", icon: Users, color: "text-purple-400" },
                                { title: "Technical PDF Notes", path: "/resources", desc: "Curated handwritten interview notes, cheatsheets, and concept revisions.", badge: "NOTES", icon: GraduationCap, color: "text-amber-400" },
                                { title: "Tech Jobs Portal", path: "/jobs", desc: "Verified internship and full-time hiring opportunities with direct referral assistance.", badge: "HIRING", icon: Briefcase, color: "text-blue-400" },
                                { title: "Swag Store & Rewards", path: "/rewards", desc: "Earn ADV Coins by solving coding problems and redeem official tech swag & hoodies.", badge: "REWARDS", icon: Award, color: "text-pink-400" },
                                { title: "AI ExamHub", path: "/exam-hub", desc: "Past 5 years question archives and AI-predicted 2026 mock tests for national exams.", badge: "AI MOCK", icon: Brain, color: "text-indigo-400" },
                                { title: "Student Success", path: "/success-stories", desc: "Real placement case studies from learners who transitioned into software roles.", badge: "STORIES", icon: Star, color: "text-yellow-400" },
                                { title: "Help & FAQ", path: "/faq", desc: "Answers to roadmap planning, certificate verification, and career guidance.", badge: "HELP", icon: Shield, color: "text-cyan-400" },
                            ].map((feat, idx) => {
                                const Icon = feat.icon;
                                return (
                                    <motion.div
                                        key={feat.title}
                                        variants={fadeUp}
                                        initial="hidden"
                                        whileInView="show"
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.04 }}
                                        className="group relative p-7 rounded-3xl bg-white dark:bg-[#080d1a] border border-gray-200/80 dark:border-white/[0.07] hover:border-primary/40 hover:bg-gray-50 dark:hover:bg-[#0c1326] transition-all duration-300 flex flex-col justify-between shadow-sm dark:shadow-none"
                                    >
                                        <div className="relative z-10">
                                            <div className="flex items-center justify-between mb-4">
                                                <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/[0.08] shadow-sm">
                                                    <Icon className={`w-5 h-5 ${feat.color}`} />
                                                </div>
                                                <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 uppercase tracking-wider">
                                                    {feat.badge}
                                                </span>
                                            </div>
                                            <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white group-hover:text-primary transition-colors">{feat.title}</h3>
                                            <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed mb-6 font-normal">{feat.desc}</p>
                                        </div>
                                        <Link to={feat.path} className="relative z-10 inline-flex items-center gap-1.5 text-xs font-bold text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors">
                                            <span>Explore</span>
                                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                        <Link to={feat.path} className="absolute inset-0 z-0"><span className="sr-only">Go to {feat.title}</span></Link>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* 3. COURSES SHOWCASE */}
                <section className="py-20 px-4 relative overflow-hidden">
                    <GlowingOrb className="top-1/2 left-0 w-[500px] h-[600px] bg-blue-600/15 -translate-y-1/2" />

                    <div className="max-w-7xl mx-auto relative z-10">
                        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-6">
                            <div>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-3">
                                    Top Rated <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Coding Courses.</span>
                                </h2>
                                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-xl font-normal">
                                    Comprehensive engineering curriculums to crack software developer roles (₹5LPA - ₹18LPA+).
                                </p>
                            </div>
                            <Link to="/courses" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-100 dark:bg-white/[0.06] hover:bg-gray-200 dark:hover:bg-white/10 transition-colors font-bold text-xs sm:text-sm backdrop-blur-md border border-gray-200 dark:border-white/10 text-gray-800 dark:text-white">
                                <span>View Full Syllabus</span>
                                <ArrowRight className="w-4 h-4" />
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
                                    transition={{ delay: idx * 0.08 }}
                                    className="group relative p-7 rounded-3xl bg-white dark:bg-[#080d1a] border border-gray-200/80 dark:border-white/[0.07] hover:bg-gray-50 dark:hover:bg-[#0c1326] transition-all duration-300 hover:border-primary/40 shadow-sm dark:shadow-none flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="flex justify-between items-start mb-5">
                                            <div className="p-3 bg-blue-500/10 rounded-2xl text-blue-400 border border-blue-500/20 group-hover:scale-105 transition-transform duration-300">
                                                <PlayCircle className="w-6 h-6" />
                                            </div>
                                            <div className="flex flex-col items-end gap-1.5">
                                                <span className="px-2.5 py-0.5 bg-white/[0.04] rounded-full text-[10px] font-mono text-gray-400 border border-white/[0.06]">
                                                    {course.category}
                                                </span>
                                                {course.rating && (
                                                    <span className="flex items-center gap-1 text-xs text-amber-400 font-bold">
                                                        <Star size={11} className="fill-current" /> {course.rating.toFixed(1)}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white group-hover:text-primary transition-colors line-clamp-2">{course.title}</h3>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 mb-6 font-normal">{course.description}</p>
                                    </div>

                                    <div className="pt-4 border-t border-gray-200 dark:border-white/[0.06] flex items-center justify-between">
                                        <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 font-medium">
                                            <Users size={13} />
                                            <span>{course.enrolledCount?.toLocaleString()}+ Enrolled</span>
                                        </div>
                                        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-white/5 group-hover:bg-primary group-hover:text-white transition-colors text-gray-400">
                                            <ChevronRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                    <Link to={course.youtubeLink} className="absolute inset-0 z-20"><span className="sr-only">View Course</span></Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. METRICS / STATS CARD STRIP */}
                <section className="py-16 border-y border-gray-200 dark:border-white/5 relative overflow-hidden bg-gray-50/60 dark:bg-[#060913]">
                    <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
                        {[
                            { val: "5,000+", lbl: "Students Trained", icon: Users, color: "text-blue-400" },
                            { val: "350+", lbl: "DSA Problems", icon: Trophy, color: "text-emerald-400" },
                            { val: "98.2%", lbl: "Practical Output", icon: Zap, color: "text-amber-400" },
                            { val: "24/7", lbl: "Mentor Support", icon: MessageSquare, color: "text-purple-400" }
                        ].map((stat, i) => {
                            const Icon = stat.icon;
                            return (
                                <motion.div
                                    key={i}
                                    variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                                    className="p-6 rounded-2xl bg-white dark:bg-white/[0.02] border border-gray-200/80 dark:border-white/[0.06] text-center shadow-sm"
                                >
                                    <Icon className={`w-6 h-6 mx-auto mb-2 ${stat.color}`} />
                                    <h4 className="text-3xl sm:text-4xl font-black mb-1 text-gray-900 dark:text-white">{stat.val}</h4>
                                    <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">{stat.lbl}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </section>

                {/* 5. FINALE CTA */}
                <section className="py-24 px-4 relative overflow-hidden">
                    <GlowingOrb className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/15" />

                    <div className="max-w-3xl mx-auto text-center relative z-10">
                        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6">
                                The Code Doesn't Write Itself.<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
                                    Neither Does Your Tech Career.
                                </span>
                            </h2>
                            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-10 leading-relaxed font-normal">
                                Enrollment for the next live masterclass cohort is active. Learn hands-on in both <strong className="text-gray-900 dark:text-white">English</strong> & <strong className="text-gray-900 dark:text-white">Hindi</strong>.
                            </p>

                            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                                <Link to="/masterclass" className="w-full sm:w-auto inline-flex items-center justify-center min-h-[3.6rem] px-8 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-base transition-transform hover:scale-[1.03] shadow-[0_0_30px_rgba(59,130,246,0.35)] whitespace-nowrap">
                                    Join the Live Masterclass
                                </Link>
                                <a href="https://wa.me/919931860964" className="w-full sm:w-auto inline-flex items-center justify-center min-h-[3.6rem] px-8 rounded-2xl bg-[#1da851]/10 text-[#25D366] border border-[#25d366]/30 font-bold text-base hover:bg-[#1da851]/20 transition-colors whitespace-nowrap">
                                    <MessageSquare className="mr-2 w-4 h-4" /> Chat on WhatsApp
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* 6. FAQ Section */}
                <section className="py-20 px-4 bg-gray-50/50 dark:bg-[#060913] border-t border-gray-200 dark:border-white/5 relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-14">
                            <h2 className="text-3xl sm:text-4xl font-black mb-3 text-gray-900 dark:text-white">Frequently Asked Questions</h2>
                            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">Everything you need to know about our practical coding bootcamps.</p>
                        </motion.div>
                        
                        <div className="space-y-4">
                            {[
                                { q: "Is this suitable for beginners with zero coding background?", a: "Yes. Our courses are structured from foundational first-principles up to production startup systems. We begin with syntax logic before advancing to full-stack projects." },
                                { q: "Do you provide placement guidance for Indian engineering students?", a: "Yes. We offer dedicated career support focused on the Indian tech landscape: resume optimization, mock interviews, DSA challenge tracking, and direct referrals." },
                                { q: "How does ADV Lab help my learning?", a: "ADV Lab is a full-featured online IDE. It allows you to code Java, Python, C++, and Web projects instantly in your browser with zero local machine configuration." },
                                { q: "What makes ADV Indian Coder stand out?", a: "We prioritize 100% practical software construction. Rather than passive slide-watching, you write real code under active industry mentorship." }
                            ].map((item, i) => (
                                <motion.div 
                                    key={i}
                                    variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                                    className="p-6 rounded-2xl bg-white dark:bg-white/[0.02] border border-gray-200/80 dark:border-white/[0.06] hover:border-primary/30 transition-all shadow-sm"
                                >
                                    <h3 className="text-base font-bold mb-2 flex items-center gap-2.5 text-gray-900 dark:text-white">
                                        <span className="text-primary font-mono text-xs font-black">Q.</span> {item.q}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed pl-6 border-l border-primary/20">{item.a}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

            </div>

            {/* ROADMAP MODAL */}
            {showRoadmap && (
                <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 sm:p-6 transition-opacity duration-300">
                    <div 
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer" 
                        onClick={() => setShowRoadmap(false)}
                    ></div>
                    
                    <div className="relative w-full max-w-5xl max-h-[90vh] bg-[#050814] border border-white/10 shadow-[0_0_60px_rgba(0,120,255,0.15)] rounded-[2rem] overflow-hidden flex flex-col">
                        <div className="relative p-6 md:p-8 bg-gradient-to-b from-blue-900/20 to-transparent border-b border-white/[0.06] flex items-center justify-between shrink-0">
                            <div className="flex items-center gap-4">
                                <div className="hidden sm:flex w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 items-center justify-center text-blue-400 shadow-[0_0_20px_rgba(37,99,235,0.2)]">
                                    <Rocket className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black text-white">ADV Lab <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Roadmap 2.0</span></h3>
                                    <p className="text-xs sm:text-sm text-gray-400 mt-0.5">Our blueprint for building India's premier developer platform.</p>
                                </div>
                            </div>
                            
                            <button 
                                onClick={() => setShowRoadmap(false)}
                                className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors text-gray-400"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {ADV_ROADMAP.map((section, idx) => {
                                    const Icon = section.icon;
                                    return (
                                        <div key={idx} className="bg-white/[0.02] border border-white/[0.06] p-6 rounded-2xl group">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className={`p-2 rounded-lg bg-white/5 ${section.color} border border-white/5`}>
                                                    <Icon className="w-5 h-5" />
                                                </div>
                                                <h4 className="text-base font-bold text-gray-200">{section.title}</h4>
                                            </div>
                                            <ul className="space-y-2.5">
                                                {section.items.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                                                        <span className={`mt-0.5 font-bold ${section.color}`}>•</span>
                                                        <span className="leading-relaxed">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <AnimatePresence>
                {toast && (
                    <Toast 
                        message={toast.message} 
                        type={toast.type} 
                        hint={toast.hint} 
                        onClose={() => setToast(null)} 
                    />
                )}
            </AnimatePresence>
        </PageWrapper>
    );
};

export default HomePage;
