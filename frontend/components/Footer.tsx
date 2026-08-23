import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
    Linkedin, Github, Youtube, Instagram, Send, ShieldCheck, 
    MessageCircle, Award, Mail, Phone, MapPin, ExternalLink, CheckCircle2
} from 'lucide-react';
import { NAV_LINKS, SOCIAL_LINKS } from '../constants';

const Footer = () => {
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

            const resData = await response.json();
            if (response.ok) {
                setSubscribed(true);
                setStatusMessage(resData.message || "Subscribed successfully!");
                setEmail('');
                setTimeout(() => {
                    setSubscribed(false);
                    setStatusMessage('');
                }, 5000);
            } else {
                setSubscribed(false);
                setStatusMessage(resData.message || "Subscription failed.");
            }
        } catch (err) {
            console.error("Newsletter error:", err);
            setSubscribed(false);
            setStatusMessage("Server is offline. Please try again later.");
        } finally {
            setSubscribing(false);
        }
    };

    const socialIcons = [
        { icon: <MessageCircle size={18} />, link: SOCIAL_LINKS.whatsapp, name: 'WhatsApp' },
        { icon: <Youtube size={18} />, link: SOCIAL_LINKS.youtube, name: 'YouTube' },
        { icon: <Linkedin size={18} />, link: SOCIAL_LINKS.linkedin, name: 'LinkedIn' },
        { icon: <Github size={18} />, link: SOCIAL_LINKS.github, name: 'GitHub' },
        { icon: <Instagram size={18} />, link: SOCIAL_LINKS.instagram, name: 'Instagram' },
        { icon: <Send size={18} />, link: SOCIAL_LINKS.telegram, name: 'Telegram' },
    ];

    return (
        <footer className="bg-slate-50 dark:bg-[#080d19] border-t border-gray-200 dark:border-white/5 text-gray-600 dark:text-gray-400 mt-24 pt-16 pb-8 relative overflow-hidden z-10">
            {/* Background ornament glow */}
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute top-0 left-0 w-80 h-80 bg-green-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Top Section: Branding, Bio & Newsletter */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pb-12 border-b border-gray-200 dark:border-white/5">
                    
                    {/* Brand Profile */}
                    <div className="space-y-4">
                        <Link to="/" className="inline-block transition-transform duration-300 hover:scale-102">
                            <img src="/assets/ADV Indian Coder Logo.png" alt="ADV Indian Coder Logo" className="h-14 md:h-16 object-contain" />
                        </Link>
                        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-semibold">
                            ADV Indian Coder is India's premium tech learning infrastructure. We bridge the gap between academic theory and actual software engineering deployment. Learn. Practice. Build. Get Hired.
                        </p>
                        <div className="space-y-2 pt-2">
                            <div className="flex items-center gap-2 text-xs font-bold text-gray-700 dark:text-gray-300">
                                <ShieldCheck className="w-4 h-4 text-green-500 shrink-0" />
                                <span>MSME Registered Educational Venture</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs font-bold text-gray-700 dark:text-gray-300">
                                <Award className="w-4 h-4 text-blue-400 shrink-0" />
                                <span>ISO 9001:2015 Certified Organization</span>
                            </div>
                        </div>
                    </div>

                    {/* Social Connects */}
                    <div className="space-y-4">
                        <h4 className="text-xs font-black text-gray-900 dark:text-white uppercase tracking-widest">Connect With Us</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400 font-semibold">Join our active student community for placement alerts, daily coding challenges, and interactive discussions.</p>
                        <div className="flex flex-wrap gap-2.5 pt-2">
                            {socialIcons.map((social, index) => (
                                <a 
                                    key={index} 
                                    href={social.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    title={social.name}
                                    className="p-2.5 rounded-xl bg-gray-100 dark:bg-white/5 hover:bg-primary/20 text-gray-700 dark:text-gray-300 hover:text-white transition-all border border-gray-200 dark:border-white/5 hover:scale-105"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Newsletter Alerts */}
                    <div className="space-y-4">
                        <h4 className="text-xs font-black text-gray-900 dark:text-white uppercase tracking-widest">Placement Newsletter</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400 font-semibold">Subscribe to receive fast-track job postings, tech interview questions, and compiler updates.</p>
                        
                        <form onSubmit={handleSubscribe} className="space-y-2 mt-4">
                            <div className="flex flex-col sm:flex-row gap-2">
                                <input 
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    required
                                    disabled={subscribing}
                                    className="w-full flex-1 px-4 py-2.5 text-xs rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-805 dark:text-white font-semibold outline-none focus:border-green-500 transition-all placeholder:text-gray-400 disabled:opacity-50"
                                />
                                <button 
                                    type="submit"
                                    disabled={subscribing}
                                    className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-green-600 hover:bg-green-500 text-white text-xs font-bold transition-all shadow-[0_0_15px_rgba(34,197,94,0.2)] hover:scale-105 active:scale-[0.98] cursor-pointer disabled:opacity-50"
                                >
                                    {subscribing ? '...' : 'Subscribe'}
                                </button>
                            </div>
                            {statusMessage && (
                                <p className={`text-[10px] font-bold flex items-center gap-1 ${subscribed ? 'text-green-500 dark:text-green-400' : 'text-red-500 dark:text-red-400'}`}>
                                    {subscribed && <CheckCircle2 className="w-3.5 h-3.5" />}
                                    {statusMessage}
                                </p>
                            )}
                        </form>
                    </div>

                </div>

                {/* Middle Section: Categorized Quick Links */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 text-xs font-semibold">
                    
                    {/* Group 1: Coding Arena & Compilers */}
                    <div className="space-y-4">
                        <h4 className="text-[10px] font-black text-gray-900 dark:text-white uppercase tracking-widest">Compilers & IDE</h4>
                        <ul className="space-y-2.5 text-gray-600 dark:text-gray-400">
                            <li><Link to="/online-java-compiler" className="hover:text-primary transition-colors">Online Java Compiler</Link></li>
                            <li><Link to="/online-python-compiler" className="hover:text-primary transition-colors">Online Python Compiler</Link></li>
                            <li><Link to="/online-c-compiler" className="hover:text-primary transition-colors">Online C Compiler</Link></li>
                            <li><Link to="/online-cpp-compiler" className="hover:text-primary transition-colors">Online C++ Compiler</Link></li>
                            <li><Link to="/online-javascript-compiler" className="hover:text-primary transition-colors">Online JS Compiler</Link></li>
                            <li><Link to="/adv-lab" className="hover:text-primary transition-colors flex items-center gap-1.5">ADV Lab Cloud IDE <ExternalLink className="w-3 h-3 opacity-50" /></Link></li>
                        </ul>
                    </div>

                    {/* Group 2: Practice & Assessments */}
                    <div className="space-y-4">
                        <h4 className="text-[10px] font-black text-gray-900 dark:text-white uppercase tracking-widest">Skill Arena</h4>
                        <ul className="space-y-2.5 text-gray-600 dark:text-gray-400">
                            <li>
                                <Link to="/practice" className="hover:text-primary transition-colors flex items-center gap-1.5">
                                    DSA Practice Hub
                                    <span className="text-[8px] font-black text-green-600 dark:text-green-400 bg-green-500/10 border border-green-500/20 px-1.5 py-0.5 rounded uppercase">New</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/exam-hub" className="hover:text-primary transition-colors flex items-center gap-1.5">
                                    AI ExamHub & Tests
                                    <span className="text-[8px] font-black text-orange-600 dark:text-orange-400 bg-orange-500/10 border border-orange-500/20 px-1.5 py-0.5 rounded uppercase">Hot</span>
                                </Link>
                            </li>
                            <li><Link to="/rewards" className="hover:text-primary transition-colors">Swag Store & Rewards</Link></li>
                            <li><Link to="/masterclass" className="hover:text-primary transition-colors">Live Masterclasses</Link></li>
                            <li><Link to="/resources" className="hover:text-primary transition-colors">Technical PDF Notes</Link></li>
                            <li><Link to="/verify" className="hover:text-primary transition-colors">Verify Certificate</Link></li>
                        </ul>
                    </div>

                    {/* Group 3: Opportunities & Community */}
                    <div className="space-y-4">
                        <h4 className="text-[10px] font-black text-gray-900 dark:text-white uppercase tracking-widest">Ecosystem</h4>
                        <ul className="space-y-2.5 text-gray-600 dark:text-gray-400">
                            <li>
                                <Link to="/jobs" className="hover:text-primary transition-colors flex items-center gap-1.5">
                                    Tech Jobs & Hiring
                                    <span className="text-[8px] font-black text-blue-600 dark:text-blue-400 bg-blue-500/10 border border-blue-500/20 px-1.5 py-0.5 rounded uppercase">New</span>
                                </Link>
                            </li>
                            <li><Link to="/community" className="hover:text-primary transition-colors">Developer Community</Link></li>
                            <li><Link to="/success-stories" className="hover:text-primary transition-colors">Student Success Stories</Link></li>
                            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Support</Link></li>
                            <li><Link to="/faq" className="hover:text-primary transition-colors">Help & FAQ</Link></li>
                        </ul>
                    </div>

                    {/* Group 4: Legal & Policies */}
                    <div className="space-y-4">
                        <h4 className="text-[10px] font-black text-gray-900 dark:text-white uppercase tracking-widest">Legal Details</h4>
                        <ul className="space-y-2.5 text-gray-600 dark:text-gray-400">
                            <li><Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                            <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/refund" className="hover:text-primary transition-colors">Refund Policies</Link></li>
                            <li><Link to="/cookies" className="hover:text-primary transition-colors">Cookie Preferences</Link></li>
                            <li><Link to="/career" className="hover:text-primary transition-colors">Join Our Team</Link></li>
                        </ul>
                    </div>

                </div>

                {/* Popular Courses Grid for High Internal PageRank & Indexing */}
                <div className="py-8 border-t border-gray-200 dark:border-white/5">
                    <div className="flex items-center justify-between mb-4">
                        <h4 className="text-[11px] font-black text-gray-900 dark:text-white uppercase tracking-wider">
                            Popular Free Programming Courses & Tutorials
                        </h4>
                        <Link to="/courses" className="text-[10px] font-bold text-primary hover:underline">View All Courses →</Link>
                    </div>
                    <div className="flex flex-wrap gap-2 text-[11px]">
                        <Link to="/course/java" className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-red-500/10 hover:text-red-500 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/5 transition-all">Java Course</Link>
                        <Link to="/course/python" className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-yellow-500/10 hover:text-yellow-500 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/5 transition-all">Python Course</Link>
                        <Link to="/course/dsa" className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-purple-500/10 hover:text-purple-500 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/5 transition-all">DSA in Java & C++</Link>
                        <Link to="/course/cpp" className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-blue-500/10 hover:text-blue-500 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/5 transition-all">C++ Course</Link>
                        <Link to="/course/c" className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-blue-500/10 hover:text-blue-500 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/5 transition-all">C Programming</Link>
                        <Link to="/course/javascript" className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-amber-500/10 hover:text-amber-500 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/5 transition-all">JavaScript Course</Link>
                        <Link to="/course/typescript" className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-sky-500/10 hover:text-sky-500 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/5 transition-all">TypeScript</Link>
                        <Link to="/course/react" className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-cyan-500/10 hover:text-cyan-500 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/5 transition-all">React.js Course</Link>
                        <Link to="/course/nodejs" className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-green-500/10 hover:text-green-500 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/5 transition-all">Node.js</Link>
                        <Link to="/course/sql" className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-emerald-500/10 hover:text-emerald-500 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/5 transition-all">SQL Database</Link>
                        <Link to="/course/mysql" className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-blue-500/10 hover:text-blue-500 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/5 transition-all">MySQL</Link>
                        <Link to="/course/postgresql" className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-indigo-500/10 hover:text-indigo-500 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/5 transition-all">PostgreSQL</Link>
                        <Link to="/course/mongodb" className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-green-500/10 hover:text-green-500 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/5 transition-all">MongoDB</Link>
                        <Link to="/course/html" className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-orange-500/10 hover:text-orange-500 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/5 transition-all">HTML5</Link>
                        <Link to="/course/css" className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-blue-500/10 hover:text-blue-500 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/5 transition-all">CSS3</Link>
                        <Link to="/course/adv-css" className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-violet-500/10 hover:text-violet-500 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/5 transition-all">Advanced CSS</Link>
                        <Link to="/course/bootstrap" className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-purple-500/10 hover:text-purple-500 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/5 transition-all">Bootstrap</Link>
                        <Link to="/course/angular" className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-red-500/10 hover:text-red-500 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/5 transition-all">Angular</Link>
                        <Link to="/course/vue" className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-emerald-500/10 hover:text-emerald-500 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/5 transition-all">Vue.js</Link>
                        <Link to="/course/go" className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-cyan-500/10 hover:text-cyan-500 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/5 transition-all">Go (Golang)</Link>
                        <Link to="/course/rust" className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-amber-500/10 hover:text-amber-500 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/5 transition-all">Rust</Link>
                        <Link to="/course/kotlin" className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-purple-500/10 hover:text-purple-500 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/5 transition-all">Kotlin</Link>
                        <Link to="/course/swift" className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-orange-500/10 hover:text-orange-500 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/5 transition-all">Swift</Link>
                        <Link to="/course/csharp" className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-violet-500/10 hover:text-violet-500 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/5 transition-all">C#</Link>
                        <Link to="/course/php" className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-indigo-500/10 hover:text-indigo-500 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/5 transition-all">PHP</Link>
                        <Link to="/course/django" className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-emerald-500/10 hover:text-emerald-500 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/5 transition-all">Django</Link>
                        <Link to="/course/data-science" className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-blue-500/10 hover:text-blue-500 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/5 transition-all">Data Science</Link>
                        <Link to="/course/ai" className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-pink-500/10 hover:text-pink-500 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/5 transition-all">Artificial Intelligence</Link>
                        <Link to="/course/gen-ai" className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-purple-500/10 hover:text-purple-500 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/5 transition-all">Generative AI</Link>
                        <Link to="/course/cybersecurity" className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-red-500/10 hover:text-red-500 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/5 transition-all">Cybersecurity</Link>
                        <Link to="/course/git" className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-orange-500/10 hover:text-orange-500 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/5 transition-all">Git & GitHub</Link>
                    </div>
                </div>

                {/* Bottom Section: Copyright & Powered Tag */}
                <div className="mt-8 border-t border-gray-200 dark:border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-gray-500 font-semibold gap-4 text-center md:text-left">
                    <p>Copyright © 2026 ADV Indian Coder. All rights reserved.</p>
                    <p className="flex items-center gap-1.5">
                        <span>Made with ❤️ by Vinay Kumar</span>
                        <span className="text-gray-300 dark:text-gray-700">|</span>
                        <span>Powered by Inoglle IT Services</span>
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;