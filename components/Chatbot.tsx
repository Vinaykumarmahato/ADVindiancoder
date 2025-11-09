import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, X } from 'lucide-react';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            className="fixed bottom-6 right-6 z-50"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5, type: 'spring' }}
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-4 rounded-full bg-primary text-white shadow-lg shadow-primary/50 flex items-center justify-center transition-transform hover:scale-110"
                aria-label={isOpen ? "Close Chat" : "Open Chat"}
            >
                {isOpen ? <X className="h-6 w-6" /> : <Bot className="h-6 w-6" />}
            </button>
            {/* Placeholder for chat window */}
        </motion.div>
    );
};

export default Chatbot;