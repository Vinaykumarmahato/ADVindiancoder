import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Github, Youtube, Instagram, Send, Disc, ShieldCheck, MessageCircle } from 'lucide-react';
import { NAV_LINKS, SOCIAL_LINKS } from '../constants';

const Footer = () => {
    const socialIcons = [
        { icon: <MessageCircle size={20} />, link: SOCIAL_LINKS.whatsapp },
        { icon: <Youtube size={20} />, link: SOCIAL_LINKS.youtube },
        { icon: <Linkedin size={20} />, link: SOCIAL_LINKS.linkedin },
        { icon: <Github size={20} />, link: SOCIAL_LINKS.github },
        { icon: <Instagram size={20} />, link: SOCIAL_LINKS.instagram },
        { icon: <Send size={20} />, link: SOCIAL_LINKS.telegram },
    ];
    
    return (
        <footer className="bg-gray-100/50 dark:bg-dark-bg/50 border-t border-white/10 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <Link to="/" className="inline-block mb-4">
                            <img src="/assets/ADV Indian Coder Logo.png" alt="ADV Indian Coder Logo" className="h-16" />
                        </Link>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Made with ❤️ by Vinay Kumar – ADV Indian Coder 2026</p>
                        <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">Powered by Inoglle IT Services</p>
                    </div>

                    <div className="col-span-1">
                        <h3 className="font-semibold mb-4 text-gray-900 dark:text-gray-100">Quick Links</h3>
                        <ul className="space-y-2">
                            {NAV_LINKS.filter(link => ['Home', 'Courses', 'ADV Lab', 'Notes', 'Live Masterclass'].includes(link.name)).map(link => (
                                <li key={link.name}>
                                    <Link to={link.path} className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors flex items-center gap-2">
                                        {link.name}
                                        {link.name === 'Live Masterclass' && <span className="text-[9px] bg-red-600 text-white px-1.5 py-0.5 rounded-full font-black">LIVE</span>}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    <div className="col-span-1">
                        <h3 className="font-semibold mb-4 text-gray-900 dark:text-gray-100">Explore</h3>
                        <ul className="space-y-2">
                            <li><Link to="/jobs" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors font-medium flex items-center gap-2">Jobs <span className="text-[10px] bg-red-600 text-white px-1.5 py-0.5 rounded-full animate-pulse font-black">NEW</span></Link></li>
                            <li><Link to="/success-stories" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">Success Stories</Link></li>
                            <li><Link to="/about" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link to="/faq" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">FAQ</Link></li>
                            <li><Link to="/contact" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                    
                    <div className="col-span-1">
                        <h3 className="font-semibold mb-4">Connect</h3>
                         <div className="flex flex-wrap gap-3">
                            {socialIcons.map((social, index) => (
                                <a key={index} href={social.link} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/10 dark:bg-white/5 hover:bg-primary/20 transition-colors">
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                    
                    <div className="col-span-1">
                        <h3 className="font-semibold mb-4">Trust & Recognition</h3>
                        <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                           <p className="flex items-center"><ShieldCheck size={16} className="mr-2 text-green-500"/> Recognized by MSME</p>
                        </div>
                    </div>
                </div>
                
                <div className="mt-8 border-t border-white/10 pt-8 text-center text-sm text-gray-500 dark:text-gray-400">
                    <p>Copyright © 2026 ADV Indian Coder. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;