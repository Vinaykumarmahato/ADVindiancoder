import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
    Linkedin, Github, Youtube, Instagram, Send, ShieldCheck, 
    MessageCircle, Award, Mail, Phone, MapPin, ExternalLink, CheckCircle2,
    Sparkles, Terminal, Code2, Cpu, Laptop, Lock, ArrowUpRight, Heart,
    BookOpen, Briefcase, Zap, Shield, HelpCircle
} from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);
    const [statusMessage, setStatusMessage] = useState('');
    const [subscribing, setSubscribing] = useState(false);

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();
        const trimmedEmail = email.trim();
        if (!trimmedEmail) return;

        setSubscribing(true);
        setStatusMessage('');
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:8080'}/api/newsletter/subscribe`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email: trimmedEmail })
            });

            const resData = await response.json().catch(() => ({ message: 'Subscribed successfully!' }));
            if (response.ok) {
                setSubscribed(true);
                setStatusMessage(resData.message || "Welcome aboard! Placement digest delivered to your inbox.");
                setEmail('');
                setTimeout(() => {
                    setSubscribed(false);
                    setStatusMessage('');
                }, 6000);
            } else {
                setSubscribed(false);
                setStatusMessage(resData.message || "Subscription failed. Please check your email.");
            }
        } catch (err) {
            console.error("Newsletter error:", err);
            setSubscribed(false);
            setStatusMessage("Service temporarily offline. Please try again shortly.");
        } finally {
            setSubscribing(false);
        }
    };

    const socialLinks = [
        { icon: <MessageCircle size={18} />, link: SOCIAL_LINKS.whatsapp, name: 'WhatsApp', hoverColor: 'hover:text-[#25D366] hover:border-[#25D366]/40 hover:bg-[#25D366]/10' },
        { icon: <Youtube size={18} />, link: SOCIAL_LINKS.youtube, name: 'YouTube', hoverColor: 'hover:text-[#FF0000] hover:border-[#FF0000]/40 hover:bg-[#FF0000]/10' },
        { icon: <Linkedin size={18} />, link: SOCIAL_LINKS.linkedin, name: 'LinkedIn', hoverColor: 'hover:text-[#0A66C2] hover:border-[#0A66C2]/40 hover:bg-[#0A66C2]/10' },
        { icon: <Github size={18} />, link: SOCIAL_LINKS.github, name: 'GitHub', hoverColor: 'hover:text-white hover:border-white/40 hover:bg-white/10' },
        { icon: <Instagram size={18} />, link: SOCIAL_LINKS.instagram, name: 'Instagram', hoverColor: 'hover:text-[#E4405F] hover:border-[#E4405F]/40 hover:bg-[#E4405F]/10' },
        { icon: <Send size={18} />, link: SOCIAL_LINKS.telegram, name: 'Telegram', hoverColor: 'hover:text-[#229ED9] hover:border-[#229ED9]/40 hover:bg-[#229ED9]/10' },
    ];

    const courseCategories = [
        {
            domain: "Core & Backend",
            items: [
                { name: "Java Masterclass", path: "/course/java" },
                { name: "Python Full Stack", path: "/course/python" },
                { name: "C++ & STL Mastery", path: "/course/cpp" },
                { name: "C Programming", path: "/course/c" },
                { name: "Spring Boot Pro", path: "/courses" },
                { name: "Node.js & Express", path: "/course/nodejs" },
                { name: "Go (Golang)", path: "/course/go" },
                { name: "Rust Systems", path: "/course/rust" }
            ]
        },
        {
            domain: "Frontend & UI",
            items: [
                { name: "React.js Ecosystem", path: "/course/react" },
                { name: "TypeScript Pro", path: "/course/typescript" },
                { name: "Modern JavaScript", path: "/course/javascript" },
                { name: "HTML5 & Modern CSS3", path: "/course/html" },
                { name: "Advanced UI & Animation", path: "/course/adv-css" },
                { name: "Angular 18", path: "/course/angular" },
                { name: "Vue.js Framework", path: "/course/vue" }
            ]
        },
        {
            domain: "DSA & Interviews",
            items: [
                { name: "Data Structures & Algorithms", path: "/course/dsa" },
                { name: "System Design for FAANG", path: "/masterclass" },
                { name: "Competitive Programming", path: "/practice" },
                { name: "SQL & Relational DBs", path: "/course/sql" },
                { name: "MongoDB NoSQL", path: "/course/mongodb" },
                { name: "PostgreSQL Advanced", path: "/course/postgresql" },
                { name: "Git, GitHub & CI/CD", path: "/course/git" }
            ]
        },
        {
            domain: "AI & Emerging Tech",
            items: [
                { name: "Generative AI & LLMs", path: "/course/gen-ai" },
                { name: "Data Science & Pandas", path: "/course/data-science" },
                { name: "Artificial Intelligence", path: "/course/ai" },
                { name: "Cybersecurity Basics", path: "/course/cybersecurity" },
                { name: "Kotlin for Android", path: "/course/kotlin" },
                { name: "Swift for iOS", path: "/course/swift" }
            ]
        }
    ];

    return (
        <footer className="relative bg-[#060913] text-gray-400 border-t border-white/[0.07] pt-16 pb-8 overflow-hidden z-20 font-sans">
            {/* Ambient Lighting Gradients */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[350px] bg-blue-600/[0.07] blur-[150px] pointer-events-none rounded-full" />
            <div className="absolute bottom-10 right-1/4 w-[500px] h-[300px] bg-purple-600/[0.06] blur-[140px] pointer-events-none rounded-full" />
            <div className="absolute top-1/2 right-10 w-[300px] h-[300px] bg-emerald-500/[0.04] blur-[120px] pointer-events-none rounded-full" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                {/* 1. TOP TRUST & INNOVATION BANNER */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-xl mb-14 shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
                    <div className="flex items-center gap-3 p-2">
                        <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                            <Cpu className="w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="text-xs font-black text-white uppercase tracking-wider">Zero-Lag IDE</h4>
                            <p className="text-[11px] text-gray-400 font-medium">Instant Cloud Execution</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 p-2">
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
                            <ShieldCheck className="w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="text-xs font-black text-white uppercase tracking-wider">Govt MSME & ISO</h4>
                            <p className="text-[11px] text-gray-400 font-medium">9001:2015 Certified</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 p-2">
                        <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
                            <Briefcase className="w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="text-xs font-black text-white uppercase tracking-wider">Fast-Track Hiring</h4>
                            <p className="text-[11px] text-gray-400 font-medium">Tech Jobs & Referrals</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 p-2">
                        <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
                            <Zap className="w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="text-xs font-black text-white uppercase tracking-wider">100% Practical</h4>
                            <p className="text-[11px] text-gray-400 font-medium">Startup-Grade Projects</p>
                        </div>
                    </div>
                </div>

                {/* 2. MAIN FOOTER CONTENT (4 Columns + Newsletter) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/[0.07]">
                    
                    {/* Brand Profile (Col 1-4) */}
                    <div className="lg:col-span-4 space-y-5">
                        <Link to="/" className="inline-flex items-center gap-3 group">
                            <img 
                                src="/assets/ADV Indian Coder Logo.png" 
                                alt="ADV Indian Coder Logo" 
                                className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
                            />
                        </Link>
                        
                        <p className="text-xs text-gray-300 leading-relaxed font-normal pr-4">
                            India's premiere engineering ecosystem. We empower aspiring developers with hands-on live coding, production labs, DSA practice arenas, and direct technical career placement.
                        </p>

                        {/* Verification & System Status */}
                        <div className="space-y-2 pt-1">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-semibold text-emerald-400">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                <span>Platform Operational • 99.9% Uptime</span>
                            </div>
                        </div>

                        {/* Social Connects */}
                        <div className="pt-2">
                            <h5 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Developer Community</h5>
                            <div className="flex flex-wrap gap-2">
                                {socialLinks.map((s, idx) => (
                                    <a
                                        key={idx}
                                        href={s.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title={s.name}
                                        className={`p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-gray-300 transition-all duration-300 hover:scale-110 shadow-sm ${s.hoverColor}`}
                                    >
                                        {s.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Compilers & Labs (Col 5-6) */}
                    <div className="lg:col-span-2 space-y-4">
                        <h4 className="text-xs font-black text-white uppercase tracking-widest flex items-center gap-2">
                            <Terminal className="w-3.5 h-3.5 text-blue-400" />
                            Compilers & Lab
                        </h4>
                        <ul className="space-y-2.5 text-xs">
                            <li>
                                <Link to="/adv-lab" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center justify-between group">
                                    <span>ADV Lab Cloud IDE</span>
                                    <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">IDE</span>
                                </Link>
                            </li>
                            <li><Link to="/online-java-compiler" className="text-gray-400 hover:text-white transition-colors">Java Compiler</Link></li>
                            <li><Link to="/online-python-compiler" className="text-gray-400 hover:text-white transition-colors">Python Compiler</Link></li>
                            <li><Link to="/online-cpp-compiler" className="text-gray-400 hover:text-white transition-colors">C++ Compiler</Link></li>
                            <li><Link to="/online-c-compiler" className="text-gray-400 hover:text-white transition-colors">C Compiler</Link></li>
                            <li><Link to="/online-javascript-compiler" className="text-gray-400 hover:text-white transition-colors">JavaScript Engine</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Skill Arena & Prep (Col 7-8) */}
                    <div className="lg:col-span-3 space-y-4">
                        <h4 className="text-xs font-black text-white uppercase tracking-widest flex items-center gap-2">
                            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                            Skill Arena & Prep
                        </h4>
                        <ul className="space-y-2.5 text-xs">
                            <li>
                                <Link to="/practice" className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center justify-between group">
                                    <span>DSA Practice Hub</span>
                                    <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">350+ DSA</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/exam-hub" className="text-gray-400 hover:text-purple-400 transition-colors flex items-center justify-between group">
                                    <span>AI ExamHub & Tests</span>
                                    <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">AI Mock</span>
                                </Link>
                            </li>
                            <li><Link to="/masterclass" className="text-gray-400 hover:text-white transition-colors">Live Masterclasses</Link></li>
                            <li><Link to="/rewards" className="text-gray-400 hover:text-white transition-colors">Swag Store & Rewards</Link></li>
                            <li><Link to="/resources" className="text-gray-400 hover:text-white transition-colors">Technical PDF Notes</Link></li>
                            <li><Link to="/verify" className="text-gray-400 hover:text-white transition-colors">Verify Certificate</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Newsletter Card (Col 9-12) */}
                    <div className="lg:col-span-3 space-y-4">
                        <div className="p-5 rounded-2xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.08] backdrop-blur-xl shadow-xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[40px] rounded-full pointer-events-none" />
                            
                            <h4 className="text-xs font-black text-white uppercase tracking-widest flex items-center gap-2 mb-1.5">
                                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                                Placement Newsletter
                            </h4>
                            <p className="text-[11px] text-gray-400 leading-relaxed mb-4">
                                Get direct job openings, weekly DSA problem breakdowns, and interview blueprints.
                            </p>

                            <form onSubmit={handleSubscribe} className="space-y-2">
                                <input 
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email address"
                                    required
                                    disabled={subscribing}
                                    className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-black/40 border border-white/[0.1] text-white outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all placeholder:text-gray-500 disabled:opacity-50 font-medium"
                                />
                                <button 
                                    type="submit"
                                    disabled={subscribing}
                                    className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold transition-all shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] active:scale-[0.98] cursor-pointer disabled:opacity-50 flex items-center justify-center gap-1.5"
                                >
                                    {subscribing ? 'Processing...' : (
                                        <>
                                            <span>Subscribe for Free</span>
                                            <ArrowUpRight className="w-3.5 h-3.5" />
                                        </>
                                    )}
                                </button>
                                {statusMessage && (
                                    <p className={`text-[10px] font-bold pt-1 flex items-center gap-1.5 ${subscribed ? 'text-emerald-400' : 'text-red-400'}`}>
                                        {subscribed && <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />}
                                        {statusMessage}
                                    </p>
                                )}
                            </form>
                            <p className="text-[10px] text-gray-500 pt-2 flex items-center gap-1">
                                <Lock className="w-2.5 h-2.5" /> Zero spam. Unsubscribe at any time.
                            </p>
                        </div>
                    </div>

                </div>

                {/* 3. STRUCTURED DOMAIN TRACKS & FREE TUTORIALS */}
                <div className="py-10 border-b border-white/[0.07]">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-2">
                        <div>
                            <h4 className="text-xs font-black text-white uppercase tracking-widest">
                                Comprehensive Learning Pathways & Tutorials
                            </h4>
                            <p className="text-[11px] text-gray-500">Explore in-depth curriculums engineered for modern production systems</p>
                        </div>
                        <Link to="/courses" className="text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1">
                            <span>Browse All 40+ Tracks</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {courseCategories.map((cat, idx) => (
                            <div key={idx} className="space-y-3 p-4 rounded-2xl bg-white/[0.015] border border-white/[0.05]">
                                <h5 className="text-[11px] font-extrabold text-gray-300 uppercase tracking-wider text-blue-300/90 border-b border-white/[0.05] pb-2">
                                    {cat.domain}
                                </h5>
                                <ul className="space-y-2">
                                    {cat.items.map((item, i) => (
                                        <li key={i}>
                                            <Link 
                                                to={item.path} 
                                                className="text-[11px] text-gray-400 hover:text-white transition-colors flex items-center justify-between group"
                                            >
                                                <span className="group-hover:translate-x-1 transition-transform">{item.name}</span>
                                                <span className="text-gray-600 group-hover:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 4. ECOSYSTEM & LEGAL NAVIGATION */}
                <div className="py-8 flex flex-wrap items-center justify-between gap-4 text-xs font-medium text-gray-400 border-b border-white/[0.07]">
                    <div className="flex flex-wrap items-center gap-6">
                        <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
                        <Link to="/jobs" className="hover:text-white transition-colors flex items-center gap-1">
                            <span>Tech Jobs</span>
                            <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-blue-500/20 text-blue-300">HIRING</span>
                        </Link>
                        <Link to="/success-stories" className="hover:text-white transition-colors">Success Stories</Link>
                        <Link to="/community" className="hover:text-white transition-colors">Community</Link>
                        <Link to="/contact" className="hover:text-white transition-colors">Contact & Mentors</Link>
                        <Link to="/faq" className="hover:text-white transition-colors">FAQs</Link>
                    </div>

                    <div className="flex flex-wrap items-center gap-6 text-gray-500 text-xs">
                        <Link to="/terms" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
                        <Link to="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
                        <Link to="/refund" className="hover:text-gray-300 transition-colors">Refund Policy</Link>
                        <Link to="/cookies" className="hover:text-gray-300 transition-colors">Cookies</Link>
                    </div>
                </div>

                {/* 5. BOTTOM COPYRIGHT & SIGNATURE */}
                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4 text-center sm:text-left">
                    <p>© 2026 ADV Indian Coder. All rights reserved.</p>
                    <p className="flex items-center gap-2">
                        <span>Crafted with</span>
                        <Heart className="w-3.5 h-3.5 text-red-500 fill-current animate-pulse" />
                        <span>for Developers by <strong>Vinay Kumar</strong></span>
                        <span className="text-gray-700">|</span>
                        <span className="text-gray-400">Inoglle IT Services</span>
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
