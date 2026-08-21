import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Sparkles, Share2, Award, CheckCircle2 } from 'lucide-react';
import { UserEarnedBadge } from '../../utils/badges';

interface BadgeCardProps {
    badge: UserEarnedBadge;
    onClick?: () => void;
    onShare?: (badge: UserEarnedBadge) => void;
}

const BadgeCard: React.FC<BadgeCardProps> = ({ badge, onClick, onShare }) => {
    const isUnlocked = Boolean(badge.unlocked);

    return (
        <motion.div
            whileHover={isUnlocked ? { y: -4, scale: 1.02 } : undefined}
            whileTap={isUnlocked ? { scale: 0.98 } : undefined}
            onClick={isUnlocked ? onClick : undefined}
            className={`relative group rounded-3xl p-5 border transition-all overflow-hidden flex flex-col items-center text-center justify-between min-h-[260px] ${
                isUnlocked 
                    ? 'bg-slate-900/80 dark:bg-[#0c1222]/90 border-white/15 hover:border-white/30 shadow-lg hover:shadow-2xl hover:shadow-red-500/10 cursor-pointer' 
                    : 'bg-slate-950/40 dark:bg-black/30 border-white/5 opacity-60 cursor-default select-none'
            }`}
        >
            {/* Ambient Background Glow for Unlocked Badges */}
            {badge.unlocked && (
                <div 
                    className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-2xl opacity-30 pointer-events-none transition-all group-hover:opacity-60"
                    style={{ background: badge.accentColor }}
                />
            )}

            {/* Rarity & Tier Tag */}
            <div className="w-full flex items-center justify-between z-10">
                <span 
                    className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full border shadow-sm"
                    style={{ 
                        color: badge.accentColor, 
                        borderColor: `${badge.accentColor}40`,
                        background: `${badge.accentColor}15`
                    }}
                >
                    {badge.rarity}
                </span>

                {badge.unlocked ? (
                    <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-400">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Unlocked
                    </span>
                ) : (
                    <span className="flex items-center gap-1 text-[10px] font-bold text-gray-500">
                        <Lock className="w-3 h-3" /> Locked
                    </span>
                )}
            </div>

            {/* 3D Visual Badge Emblem */}
            <div className="relative my-3 flex items-center justify-center">
                <div 
                    className={`w-24 h-24 rounded-full flex items-center justify-center relative p-1 transition-transform duration-300 group-hover:scale-105 ${
                        badge.unlocked ? 'shadow-xl' : 'grayscale'
                    }`}
                    style={{
                        background: badge.unlocked 
                            ? `linear-gradient(135deg, ${badge.accentColor}, #0f172a)` 
                            : '#1e293b',
                        boxShadow: badge.unlocked ? `0 10px 25px -5px ${badge.borderGlow}` : 'none'
                    }}
                >
                    {/* Inner 3D Glass Sphere */}
                    <div className="w-full h-full rounded-full bg-slate-900/90 flex flex-col items-center justify-center border border-white/20 relative overflow-hidden">
                        {/* Metallic shine streak */}
                        <div className="absolute -top-6 -left-6 w-14 h-14 bg-white/20 rounded-full blur-sm" />
                        
                        <span className="text-3xl filter drop-shadow-md select-none transform transition-transform group-hover:scale-110">
                            {badge.icon}
                        </span>

                        {badge.requiredDays && (
                            <span className="text-[9px] font-black tracking-widest text-white/80 uppercase mt-0.5">
                                {badge.requiredDays} DAYS
                            </span>
                        )}
                    </div>

                    {/* Official Seal Ring */}
                    {badge.unlocked && (
                        <div 
                            className="absolute -inset-1 rounded-full border border-dashed animate-spin-slow pointer-events-none opacity-40"
                            style={{ borderColor: badge.accentColor }}
                        />
                    )}
                </div>
            </div>

            {/* Title & Description */}
            <div className="space-y-1 w-full z-10">
                <h4 className="text-sm font-black text-white group-hover:text-red-400 transition-colors line-clamp-1">
                    {badge.name}
                </h4>
                <p className="text-[11px] text-gray-400 line-clamp-2 leading-relaxed font-medium">
                    {badge.description}
                </p>
            </div>

            {/* Progress or Share Action */}
            <div className="w-full pt-3 z-10">
                {badge.unlocked ? (
                    <button
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            if (onShare) onShare(badge);
                            else if (onClick) onClick();
                        }}
                        className="w-full py-2 rounded-xl bg-white/5 hover:bg-red-600 hover:text-white border border-white/10 text-xs font-black text-gray-300 transition-all flex items-center justify-center gap-1.5 shadow-sm active:scale-95 cursor-pointer"
                    >
                        <Share2 className="w-3.5 h-3.5" />
                        <span>Share Badge</span>
                    </button>
                ) : (
                    <div className="space-y-1.5">
                        <div className="flex items-center justify-between text-[10px] font-bold text-gray-400">
                            <span>Progress</span>
                            <span style={{ color: badge.accentColor }}>{badge.currentValue} / {badge.targetValue}</span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden border border-white/5">
                            <div 
                                className="h-full rounded-full transition-all duration-500" 
                                style={{ 
                                    width: `${badge.progress}%`,
                                    background: badge.accentColor
                                }}
                            />
                        </div>
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default BadgeCard;
