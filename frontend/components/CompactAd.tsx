import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Info, Youtube, Play, CheckCircle } from 'lucide-react';

interface CompactAdProps {
    videoId: string;
    title: string;
    description: string;
    className?: string;
}

const CompactAd: React.FC<CompactAdProps> = ({ videoId, title, description, className = "" }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={`w-full bg-white dark:bg-[#202124] border border-[#dadce0] dark:border-[#3c4043] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group ${className}`}
        >
            {/* Minimal Ad Header */}
            <div className="px-3 py-1.5 border-b border-[#dadce0] dark:border-[#3c4043] flex items-center justify-between bg-[#f8f9fa] dark:bg-[#1a1c1e]">
                <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-bold text-[#202124] dark:text-white bg-white dark:bg-[#3c4043] border border-[#dadce0] dark:border-[#5f6368] px-1 rounded">
                        Ad
                    </span>
                    <span className="text-[10px] text-[#70757a] dark:text-[#9aa0a6] font-medium flex items-center gap-0.5">
                        advindiancoder.com <Info className="w-2.5 h-2.5" />
                    </span>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row p-3 gap-4">
                {/* Thumbnail Area */}
                <div className="relative shrink-0 w-full sm:w-40 aspect-video rounded-md overflow-hidden bg-black">
                    <img 
                        src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`} 
                        alt={title} 
                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                            <Play className="w-4 h-4 text-white fill-current" />
                        </div>
                    </div>
                    <div className="absolute bottom-1 right-1 bg-black/80 text-white text-[9px] px-1 rounded font-bold">
                        AD
                    </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                        <h4 className="text-[#1a0dab] dark:text-[#8ab4f8] text-[15px] font-medium leading-tight mb-1 line-clamp-2 hover:underline cursor-pointer">
                            {title}
                        </h4>
                        <p className="text-[#4d5156] dark:text-[#bdc1c6] text-[12px] leading-snug line-clamp-2 mb-2">
                            {description}
                        </p>
                        <div className="flex items-center gap-2 mb-2">
                             <div className="flex items-center gap-1 text-[10px] text-green-600 dark:text-green-400 font-bold">
                                <CheckCircle className="w-3 h-3" /> Recommended
                             </div>
                             <span className="text-[10px] text-[#70757a] dark:text-[#9aa0a6]">• Masterclass 2026</span>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                        <div className="flex items-center gap-1.5">
                            <Youtube className="w-3.5 h-3.5 text-red-600" />
                            <span className="text-[11px] text-[#70757a] dark:text-[#9aa0a6] font-medium">ADV Indian Coder</span>
                        </div>
                        <a 
                            href={`https://www.youtube.com/watch?v=${videoId}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto text-center justify-center text-[#1a73e8] dark:text-[#8ab4f8] text-[12px] font-bold flex items-center gap-1 hover:bg-[#1a73e8]/10 px-2 py-1 rounded transition-colors border border-[#1a73e8]/20 sm:border-transparent"
                        >
                            WATCH NOW <ExternalLink className="w-3 h-3" />
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default CompactAd;
