import React, { useState, useEffect, useRef } from 'react';
import { Instagram, Send, X, Bot, User, Key, Sparkles, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SOCIAL_LINKS } from '../constants';

interface Message {
    sender: 'user' | 'bot';
    text: string;
    timestamp: Date;
}

const PRESET_ANSWERS: Record<string, string> = {
    'courses': "We offer a wide range of web development, programming, and software engineering courses including HTML, CSS, JavaScript, React, Java, Python, C/C++, DSA, AI, Machine Learning, and Cybersecurity! Select the 'Courses' tab in navigation to see the full list.",
    'adv-lab': "ADV Lab is a full-featured browser IDE where you can write, compile, and execute code instantly (supporting Java, Python, C, C++, and Javascript). You can automatically save to GitHub and share your updates directly on LinkedIn with 1 click!",
    'oop': "Object-Oriented Programming (OOP) is a programming paradigm based on the concept of 'objects', which can contain data (attributes) and code (methods). The four core pillars of OOP are Inheritance, Polymorphism, Encapsulation, and Abstraction.",
    'default': "Hello! I am your ADV AI Tutor. I can help you answer coding questions, explain concepts, and debug problems. Feel free to ask anything about coding or the ADV Indian Coder platform!"
};

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { sender: 'bot', text: "Welcome to ADV Indian Coder! I am your AI learning assistant. How can I help you excel today?", timestamp: new Date() }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    const handleSendMessage = async (text: string) => {
        if (!text.trim()) return;

        const newMsg: Message = { sender: 'user', text, timestamp: new Date() };
        setMessages(prev => [...prev, newMsg]);
        setInputValue('');
        setIsLoading(true);

        // Always query local Spring Boot backend with Spring AI (configured with Groq Key)
        try {
            const response = await fetch(`http://localhost:8080/api/ai/chat?prompt=${encodeURIComponent(text)}`);
            if (!response.ok) {
                throw new Error(`Server returned ${response.status}`);
            }
            const data = await response.json();
            const replyText = data?.response || "I couldn't generate a response. Please try again.";
            setMessages(prev => [...prev, { sender: 'bot', text: replyText, timestamp: new Date() }]);
        } catch (error) {
            console.warn('Backend AI offline, using hardcoded presets:', error);
            // Hardcoded local presets as safety fallback
            const query = text.toLowerCase();
            let reply = PRESET_ANSWERS['default'];

            if (query.includes('course') || query.includes('learn') || query.includes('offer')) {
                reply = PRESET_ANSWERS['courses'];
            } else if (query.includes('adv lab') || query.includes('ide') || query.includes('compiler') || query.includes('run code')) {
                reply = PRESET_ANSWERS['adv-lab'];
            } else if (query.includes('oop') || query.includes('object') || query.includes('class') || query.includes('inheritance')) {
                reply = PRESET_ANSWERS['oop'];
            }

            setMessages(prev => [...prev, { sender: 'bot', text: reply, timestamp: new Date() }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* Floating Action Button */}
            <motion.div
                className="fixed bottom-6 right-6 z-[999] flex flex-col items-end gap-3"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5, type: 'spring' }}
            >
                <AnimatePresence>
                    {!isOpen && (
                        <motion.button
                            onClick={() => setIsOpen(true)}
                            type="button"
                            className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-red-600 via-orange-500 to-yellow-500 text-white shadow-2xl hover:shadow-[0_0_30px_rgba(239,68,68,0.5)] transition-all active:scale-95"
                            whileHover={{ scale: 1.05 }}
                        >
                            <MessageSquare className="w-6 h-6 animate-pulse" />
                            {/* Inner Glow */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-red-600 via-orange-500 to-yellow-500 rounded-full blur opacity-40 group-hover:opacity-80 transition-opacity -z-10"></div>
                        </motion.button>
                    )}
                </AnimatePresence>
            </motion.div>

            {/* Chat Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.9 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed bottom-6 right-6 z-[2000] w-[360px] sm:w-[400px] h-[550px] bg-[#0c0f1d]/90 backdrop-blur-2xl border border-white/10 rounded-[2rem] flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-4 bg-black/40 border-b border-white/10 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-red-600 to-orange-500 flex items-center justify-center shadow-lg">
                                    <Bot className="w-5 h-5 text-white" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs font-black text-white tracking-wide flex items-center gap-1.5">
                                        ADV AI Tutor
                                        <Sparkles className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                                    </span>
                                    <span className="text-[10px] text-gray-500 font-bold">Always online</span>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    type="button"
                                    className="p-2 rounded-xl bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* Preset Suggestions Row */}
                        <div className="px-4 py-2 bg-white/5 border-b border-white/5 flex gap-2 overflow-x-auto no-scrollbar shrink-0">
                            <button onClick={() => handleSendMessage("What courses do you offer?")} type="button" className="px-3 py-1 bg-white/5 hover:bg-white/10 rounded-full text-[10px] font-semibold text-gray-300 transition-colors whitespace-nowrap">Courses</button>
                            <button onClick={() => handleSendMessage("How do I use ADV Lab?")} type="button" className="px-3 py-1 bg-white/5 hover:bg-white/10 rounded-full text-[10px] font-semibold text-gray-300 transition-colors whitespace-nowrap">ADV Lab IDE</button>
                            <button onClick={() => handleSendMessage("Explain Object Oriented Programming")} type="button" className="px-3 py-1 bg-white/5 hover:bg-white/10 rounded-full text-[10px] font-semibold text-gray-300 transition-colors whitespace-nowrap">OOP Pillars</button>
                        </div>

                        {/* Chat Messages */}
                        <div className="flex-1 p-4 overflow-y-auto space-y-3 custom-scrollbar">
                            {messages.map((msg, i) => (
                                <div key={i} className={`flex items-start gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    {msg.sender === 'bot' && (
                                        <div className="w-7 h-7 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0 mt-0.5">
                                            <Bot className="w-4 h-4 text-red-500" />
                                        </div>
                                    )}
                                    <div className={`max-w-[75%] px-4 py-3 rounded-2xl text-xs md:text-sm shadow-md leading-relaxed whitespace-pre-wrap select-text ${
                                        msg.sender === 'user'
                                            ? 'bg-gradient-to-br from-red-600 to-orange-600 text-white rounded-tr-none'
                                            : 'bg-white/5 border border-white/5 text-gray-200 rounded-tl-none'
                                    }`}>
                                        {msg.text}
                                    </div>
                                    {msg.sender === 'user' && (
                                        <div className="w-7 h-7 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                                            <User className="w-4 h-4 text-gray-300" />
                                        </div>
                                    )}
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex items-start gap-2.5 justify-start">
                                    <div className="w-7 h-7 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0 mt-0.5">
                                        <Bot className="w-4 h-4 text-red-500" />
                                    </div>
                                    <div className="bg-white/5 border border-white/5 text-gray-400 rounded-2xl rounded-tl-none px-4 py-3 text-xs flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Footer */}
                        <form
                            onSubmit={(e) => { e.preventDefault(); handleSendMessage(inputValue); }}
                            className="p-3 bg-black/40 border-t border-white/10 flex gap-2 shrink-0 items-center"
                        >
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="Type a message..."
                                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white outline-none focus:border-red-500 transition-colors"
                            />
                            <button
                                type="submit"
                                disabled={!inputValue.trim() || isLoading}
                                className="p-3 bg-red-600 hover:bg-red-500 text-white rounded-xl transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <Send className="w-4 h-4 fill-current" />
                            </button>
                        </form>
                        
                        {/* Secondary Path Link banner: IG support */}
                        <div className="bg-[#05060e] py-1.5 text-center text-[9px] border-t border-white/5 shrink-0">
                            <span className="text-gray-500">Need personal support? </span>
                            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:underline font-bold">DM on Instagram →</a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Chatbot;