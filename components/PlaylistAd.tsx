import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Info, MoreVertical, Youtube, PlayCircle, CheckCircle } from 'lucide-react';

interface PlaylistAdProps {
    className?: string;
    variant?: 'wide' | 'compact';
}

const PlaylistAd: React.FC<PlaylistAdProps> = ({ className = "", variant = "wide" }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`max-w-4xl mx-auto w-full bg-[#f8f9fa] dark:bg-[#1a1c1e] border border-[#dadce0] dark:border-[#3c4043] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow ${className}`}
        >
            {/* Ad Header */}
            <div className="px-4 py-2 border-b border-[#dadce0] dark:border-[#3c4043] flex items-center justify-between bg-white dark:bg-[#202124]">
                <div className="flex items-center gap-2">
                    <span className="bg-[#202124] dark:bg-white text-white dark:text-[#202124] px-1.5 py-0.5 rounded text-[11px] font-bold uppercase leading-none">
                        Ad
                    </span>
                    <span className="text-xs text-[#3c4043] dark:text-[#bdc1c6] font-medium flex items-center gap-1.5">
                        advindiancoder.com <Info className="w-3 h-3" />
                        <span className="mx-1 text-[#dadce0] dark:text-[#3c4043]">|</span>
                        <span className="flex items-center gap-1 text-green-600 dark:text-green-400 font-bold uppercase text-[10px] tracking-wider">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                            Ongoing
                        </span>
                    </span>
                </div>
                <MoreVertical className="w-4 h-4 text-[#70757a] dark:text-[#9aa0a6] cursor-pointer" />
            </div>

            <div className={`flex flex-col ${variant === 'wide' ? 'md:flex-row' : ''}`}>
                {/* Visual/Embed Section */}
                <div className={`w-full ${variant === 'wide' ? 'md:w-[45%]' : ''} aspect-video relative bg-black flex items-center justify-center overflow-hidden`}>
                    {/* YouTube Playlist Embed */}
                    <iframe 
                        className="w-full h-full absolute inset-0"
                        src="https://www.youtube.com/embed/videoseries?list=PLqN7GE5f0u-8HJj1ZU5ncLMv_ZHXCdPhO" 
                        title="Java Full Course Playlist"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowFullScreen
                    ></iframe>
                </div>

                {/* Content Section */}
                <div className="flex-1 p-5 flex flex-col justify-between bg-white dark:bg-[#202124]">
                    <div>
                        <div className="flex items-center justify-between gap-2 mb-2 flex-nowrap">
                            <div className="flex items-center gap-2 min-w-0">
                                <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center shrink-0">
                                    <Youtube className="w-3.5 h-3.5 text-white" />
                                </div>
                                <span className="text-[12px] sm:text-[13px] text-[#202124] dark:text-white font-semibold truncate">ADV Indian Coder • Course</span>
                            </div>
                            <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[9px] font-bold px-2 py-0.5 rounded-full border border-green-200 dark:border-green-800/50 shrink-0 whitespace-nowrap">ONGOING</span>
                        </div>
                        
                        <h3 className={`${variant === 'wide' ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'} font-medium text-[#1a0dab] dark:text-[#8ab4f8] mb-2 leading-tight hover:underline cursor-pointer`}>
                            Java Full Course 2026: Master Coding from Zero to Hero
                        </h3>
                        
                        <p className="text-[#4d5156] dark:text-[#bdc1c6] text-sm leading-relaxed mb-4">
                            Start your coding journey with our most comprehensive Java playlist. Learn OOPS, Data Structures, and Collections with real-world projects. Perfect for students and job seekers.
                        </p>

                        <div className="flex flex-wrap gap-x-6 gap-y-2 mb-6">
                            <div className="flex items-center gap-2 text-[13px] text-[#70757a] dark:text-[#9aa0a6]">
                                <PlayCircle className="w-4 h-4" /> 50+ Episodes
                            </div>
                            <div className="flex items-center gap-2 text-[13px] text-[#70757a] dark:text-[#9aa0a6]">
                                <span className="w-1 h-1 rounded-full bg-[#70757a] dark:bg-[#9aa0a6]"></span> Certified Path
                            </div>
                            <div className="flex items-center gap-2 text-[13px] text-[#70757a] dark:text-[#9aa0a6]">
                                <span className="w-1 h-1 rounded-full bg-[#70757a] dark:bg-[#9aa0a6]"></span> Free Notes
                            </div>
                        </div>
                    </div>

                    <div className={`flex flex-col ${variant === 'wide' ? 'sm:flex-row' : ''} items-center justify-between pt-4 border-t border-[#f1f3f4] dark:border-[#3c4043] gap-4`}>
                        <div className="flex items-center gap-1 text-[11px] text-[#70757a] dark:text-[#9aa0a6] uppercase tracking-wider font-bold">
                            <Sparkles className="w-3 h-3 text-yellow-500" /> Top Choice for 2026
                        </div>
                        <a 
                            href="/course/java" 
                            className={`w-full ${variant === 'wide' ? 'sm:w-auto' : ''} bg-[#1a73e8] hover:bg-[#185abc] text-white px-6 py-2.5 rounded-full text-sm font-bold transition-colors shadow-sm flex items-center justify-center gap-2`}
                        >
                            Watch Now <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Slogan Bar */}
            <div className="bg-[#f1f3f4] dark:bg-[#303134] px-5 py-2.5 text-[10px] sm:text-[11px] text-[#70757a] dark:text-[#9aa0a6] flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-2">
                <span className="flex items-center gap-1.5"><CheckCircle className="w-3 h-3 text-green-600" /> Direct Playlist Access</span>
                <span className="hidden sm:block w-1 h-1 rounded-full bg-[#dadce0] dark:bg-[#5f6368]"></span>
                <span className="flex items-center gap-1.5"><CheckCircle className="w-3 h-3 text-green-600" /> Placement Focused</span>
                <span className="hidden sm:block w-1 h-1 rounded-full bg-[#dadce0] dark:bg-[#5f6368]"></span>
                <span className="flex items-center gap-1.5"><CheckCircle className="w-3 h-3 text-green-600" /> No Ads during video</span>
            </div>
        </motion.div>
    );
};

// Add Sparkles import if missing
const Sparkles = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>
);

export default PlaylistAd;

