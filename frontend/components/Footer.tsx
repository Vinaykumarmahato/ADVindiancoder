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
            const response = await fetch("http://localhost:8080/api/newsletter/subscribe", {
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
                            <div className="flex gap-2">
                                <input 
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    required
                                    disabled={subscribing}
                                    className="flex-1 px-4 py-2.5 text-xs rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-805 dark:text-white font-semibold outline-none focus:border-green-500 transition-all placeholder:text-gray-400 disabled:opacity-50"
                                />
                                <button 
                                    type="submit"
                                    disabled={subscribing}
                                    className="px-4 py-2.5 rounded-xl bg-green-600 hover:bg-green-500 text-white text-xs font-bold transition-all shadow-[0_0_15px_rgba(34,197,94,0.2)] hover:scale-105 active:scale-[0.98] cursor-pointer disabled:opacity-50"
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
                    
                    {/* Group 1: Coding Environment */}
                    <div className="space-y-4">
                        <h4 className="text-[10px] font-black text-gray-900 dark:text-white uppercase tracking-widest">Coding Arena</h4>
                        <ul className="space-y-2.5 text-gray-600 dark:text-gray-400">
                            <li>
                                <Link to="/adv-lab" className="hover:text-primary transition-colors flex items-center gap-1.5">
                                    Launch Cloud IDE
                                    <ExternalLink className="w-3 h-3 opacity-50" />
                                </Link>
                            </li>
                            <li>
                                <Link to="/practice" className="hover:text-primary transition-colors flex items-center gap-1.5">
                                    Practice Hub
                                    <span className="text-[8px] font-black text-green-600 dark:text-green-400 bg-green-500/10 border border-green-500/20 px-1.5 py-0.5 rounded uppercase">New</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/exam-hub" className="hover:text-primary transition-colors flex items-center gap-1.5">
                                    AI ExamHub
                                    <span className="text-[8px] font-black text-orange-600 dark:text-orange-400 bg-orange-500/10 border border-orange-500/20 px-1.5 py-0.5 rounded uppercase">Hot</span>
                                </Link>
                            </li>
                            <li><Link to="/courses" className="hover:text-primary transition-colors">Course Library</Link></li>
                        </ul>
                    </div>

                    {/* Group 2: Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-[10px] font-black text-gray-900 dark:text-white uppercase tracking-widest">Quick Resources</h4>
                        <ul className="space-y-2.5 text-gray-600 dark:text-gray-400">
                            <li><Link to="/resources" className="hover:text-primary transition-colors">Technical Notes</Link></li>
                            <li><Link to="/success-stories" className="hover:text-primary transition-colors">Success Stories</Link></li>
                            <li><Link to="/about" className="hover:text-primary transition-colors">About Vinay</Link></li>
                            <li><Link to="/faq" className="hover:text-primary transition-colors">Help & FAQ</Link></li>
                        </ul>
                    </div>

                    {/* Group 3: Opportunities */}
                    <div className="space-y-4">
                        <h4 className="text-[10px] font-black text-gray-900 dark:text-white uppercase tracking-widest">Opportunities</h4>
                        <ul className="space-y-2.5 text-gray-600 dark:text-gray-400">
                            <li>
                                <Link to="/jobs" className="hover:text-primary transition-colors flex items-center gap-1.5">
                                    Latest Tech Jobs
                                    <span className="text-[8px] font-black text-blue-600 dark:text-blue-400 bg-blue-500/10 border border-blue-500/20 px-1.5 py-0.5 rounded uppercase">New</span>
                                </Link>
                            </li>
                            <li><a href="https://wa.me/919931860964" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Direct Mentorship</a></li>
                            <li><Link to="/career" className="hover:text-primary transition-colors">Join Our Team</Link></li>
                            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Support</Link></li>
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
                        </ul>
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