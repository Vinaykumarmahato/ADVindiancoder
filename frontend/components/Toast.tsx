import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, AlertCircle, CheckCircle2, Info } from 'lucide-react';

interface ToastProps {
    message: string;
    type: 'success' | 'error' | 'info';
    hint?: string;
    onClose: () => void;
    duration?: number;
}

export const Toast: React.FC<ToastProps> = ({ message, type, hint, onClose, duration = 8000 }) => {
    useEffect(() => {
        const timer = setTimeout(onClose, duration);
        return () => clearTimeout(timer);
    }, [onClose, duration]);

    const colors = {
        success: {
            bg: 'bg-emerald-950/90 border-emerald-500/30 text-emerald-200',
            icon: 'text-emerald-400',
            glow: 'shadow-[0_0_40px_rgba(16,185,129,0.15)]',
            progress: 'bg-emerald-500',
        },
        error: {
            bg: 'bg-rose-950/90 border-rose-500/30 text-rose-200',
            icon: 'text-rose-400',
            glow: 'shadow-[0_0_40px_rgba(244,63,94,0.15)]',
            progress: 'bg-rose-500',
        },
        info: {
            bg: 'bg-sky-950/90 border-sky-500/30 text-sky-200',
            icon: 'text-sky-400',
            glow: 'shadow-[0_0_40px_rgba(14,165,233,0.15)]',
            progress: 'bg-sky-500',
        }
    };

    const config = colors[type] || colors.info;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className={`fixed bottom-6 right-6 z-[9999] max-w-md w-full sm:w-[450px] p-5 rounded-2xl border backdrop-blur-xl ${config.bg} ${config.glow} flex flex-col gap-3`}
        >
            <div className="flex gap-4 items-start">
                <div className="mt-1">
                    {type === 'success' && <CheckCircle2 className={`w-6 h-6 ${config.icon}`} />}
                    {type === 'error' && <AlertCircle className={`w-6 h-6 ${config.icon}`} />}
                    {type === 'info' && <Info className={`w-6 h-6 ${config.icon}`} />}
                </div>
                
                <div className="flex-1">
                    <h4 className="font-extrabold text-white text-base leading-snug">
                        {type === 'success' ? 'Success' : type === 'error' ? 'Error' : 'Notification'}
                    </h4>
                    <p className="text-sm text-gray-300 font-medium mt-1 leading-relaxed">
                        {message}
                    </p>
                    {hint && (
                        <div className="mt-3 p-3 rounded-xl bg-black/40 border border-white/5 text-xs text-gray-400 font-mono leading-relaxed break-words">
                            <span className="text-amber-400 font-extrabold block mb-1">PRO-TIP / HINT:</span>
                            {hint}
                        </div>
                    )}
                </div>

                <button 
                    onClick={onClose} 
                    className="p-1 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors duration-200"
                >
                    <X className="w-5 h-5" />
                </button>
            </div>
            
            {/* Animated duration progress bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/5 rounded-b-2xl overflow-hidden">
                <motion.div 
                    initial={{ width: '100%' }}
                    animate={{ width: 0 }}
                    transition={{ duration: duration / 1000, ease: 'linear' }}
                    className={`h-full ${config.progress}`}
                />
            </div>
        </motion.div>
    );
};
