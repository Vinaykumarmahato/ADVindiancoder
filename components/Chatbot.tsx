import React, { useState } from 'react';
import { Instagram, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SOCIAL_LINKS } from '../constants';

const Chatbot = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="fixed bottom-6 right-6 z-50 flex items-center"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5, type: 'spring' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center p-1 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 shadow-2xl hover:shadow-[0_0_30px_rgba(219,39,119,0.5)] transition-all duration-300"
                aria-label="DM on Instagram"
            >
                {/* Expanding pill wrapper */}
                <div className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center bg-[#0a0f1c] rounded-full p-3 ${isHovered ? 'w-[230px]' : 'w-[52px]'}`}>
                    
                    {/* The Icon */}
                    <div className="flex-shrink-0 flex items-center justify-center w-7 h-7">
                        <Instagram className="h-6 w-6 text-pink-500 group-hover:text-white transition-colors" />
                    </div>

                    {/* The Text */}
                    <div className={`whitespace-nowrap ml-3 pr-2 font-black text-sm text-white tracking-wider transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                        DM ON INSTAGRAM
                    </div>
                </div>
                
                {/* Glow behind the button */}
                <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-full blur opacity-50 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </a>
        </motion.div>
    );
};

export default Chatbot;