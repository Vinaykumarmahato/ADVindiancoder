export interface Badge {
    id: string;
    name: string;
    tier: 'bronze' | 'silver' | 'gold' | 'emerald' | 'ruby' | 'sapphire' | 'amethyst' | 'diamond';
    category: 'streak' | 'problem' | 'special';
    requiredDays?: number;
    requiredSolved?: number;
    title: string;
    description: string;
    icon: string;
    accentColor: string;
    gradient: string;
    borderGlow: string;
    rarity: string;
}

export const BADGES_CATALOGUE: Badge[] = [
    {
        id: 'day-1',
        name: 'Day 1 Pioneer',
        tier: 'bronze',
        category: 'streak',
        requiredDays: 1,
        requiredSolved: 1,
        title: 'Ignition Spark',
        description: 'Solved your very first algorithmic challenge and started your daily coding streak on ADV Indian Coder.',
        icon: '⚡',
        accentColor: '#f97316',
        gradient: 'from-amber-500 via-orange-600 to-amber-700',
        borderGlow: 'rgba(249, 115, 22, 0.4)',
        rarity: 'Common'
    },
    {
        id: 'day-10',
        name: '10-Day Code Warrior',
        tier: 'silver',
        category: 'streak',
        requiredDays: 10,
        title: 'Consistency Builder',
        description: 'Completed 10 consecutive days of active programming. Momentum is officially on your side.',
        icon: '⚔️',
        accentColor: '#94a3b8',
        gradient: 'from-slate-300 via-slate-400 to-zinc-600',
        borderGlow: 'rgba(148, 163, 184, 0.4)',
        rarity: 'Uncommon'
    },
    {
        id: 'day-20',
        name: '20-Day Dedicated Coder',
        tier: 'silver',
        category: 'streak',
        requiredDays: 20,
        title: 'Iron Discipline',
        description: 'Maintained 20 continuous days of high-focus algorithm problem solving.',
        icon: '🛡️',
        accentColor: '#38bdf8',
        gradient: 'from-cyan-400 via-sky-500 to-blue-600',
        borderGlow: 'rgba(56, 189, 248, 0.4)',
        rarity: 'Rare'
    },
    {
        id: 'day-30',
        name: '30-Day Mastermind',
        tier: 'gold',
        category: 'streak',
        requiredDays: 30,
        title: 'Habit Champion',
        description: 'Achieved a legendary 1-month unbroken streak! Daily coding is now second nature.',
        icon: '👑',
        accentColor: '#eab308',
        gradient: 'from-yellow-400 via-amber-500 to-amber-700',
        borderGlow: 'rgba(234, 179, 8, 0.5)',
        rarity: 'Epic'
    },
    {
        id: 'day-40',
        name: '40-Day Code Champion',
        tier: 'gold',
        category: 'streak',
        requiredDays: 40,
        title: 'Unyielding Focus',
        description: 'Conquered 40 straight days of algorithmic logic and data structures.',
        icon: '🔥',
        accentColor: '#f59e0b',
        gradient: 'from-amber-400 via-orange-500 to-red-600',
        borderGlow: 'rgba(245, 158, 11, 0.5)',
        rarity: 'Epic+'
    },
    {
        id: 'day-50',
        name: '50-Day Code Legend',
        tier: 'emerald',
        category: 'streak',
        requiredDays: 50,
        title: 'Half-Century Milestone',
        description: 'Hit the prestigious 50-day streak milestone. An inspiration to the developer community.',
        icon: '💎',
        accentColor: '#10b981',
        gradient: 'from-emerald-400 via-teal-500 to-emerald-700',
        borderGlow: 'rgba(16, 185, 129, 0.5)',
        rarity: 'Mythic'
    },
    {
        id: 'day-100',
        name: '100-Day Centurion Coder',
        tier: 'ruby',
        category: 'streak',
        requiredDays: 100,
        title: 'Century of Code',
        description: 'Entered the elite Top 1% tier of developers worldwide by coding for 100 consecutive days.',
        icon: '🏆',
        accentColor: '#ef4444',
        gradient: 'from-rose-500 via-red-600 to-red-900',
        borderGlow: 'rgba(239, 68, 68, 0.6)',
        rarity: 'Legendary'
    },
    {
        id: 'day-150',
        name: '150-Day Coding Titan',
        tier: 'sapphire',
        category: 'streak',
        requiredDays: 150,
        title: 'Algorithmic Master',
        description: '150 days of relentless problem solving, system logic, and continuous learning.',
        icon: '🔱',
        accentColor: '#6366f1',
        gradient: 'from-indigo-400 via-indigo-600 to-blue-900',
        borderGlow: 'rgba(99, 102, 241, 0.6)',
        rarity: 'Legendary+'
    },
    {
        id: 'day-175',
        name: '175-Day Unstoppable',
        tier: 'amethyst',
        category: 'streak',
        requiredDays: 175,
        title: 'Grand Architect',
        description: '175 days of pure excellence. Unrivaled determination and top-tier code craftsmanship.',
        icon: '🌌',
        accentColor: '#a855f7',
        gradient: 'from-purple-400 via-fuchsia-600 to-purple-950',
        borderGlow: 'rgba(168, 85, 247, 0.6)',
        rarity: 'Supreme'
    },
    {
        id: 'day-365',
        name: '365-Day Immortal Grandmaster',
        tier: 'diamond',
        category: 'streak',
        requiredDays: 365,
        title: 'One Year of Code',
        description: 'The highest honor on ADV Indian Coder: 365 consecutive days of daily coding without missing a single day.',
        icon: '🌟',
        accentColor: '#38bdf8',
        gradient: 'from-sky-300 via-cyan-500 to-slate-900',
        borderGlow: 'rgba(56, 189, 248, 0.7)',
        rarity: 'Immortal'
    }
];

export interface UserEarnedBadge extends Badge {
    unlocked: boolean;
    unlockedAt?: string;
    progress: number; // 0 to 100
    currentValue: number;
    targetValue: number;
}

export function evaluateUserBadges(userStreak: number = 0, totalSolved: number = 0): UserEarnedBadge[] {
    const streak = Math.max(0, userStreak);
    const solved = Math.max(0, totalSolved);

    return BADGES_CATALOGUE.map((badge) => {
        let isUnlocked = false;
        let currentValue = 0;
        let targetValue = badge.requiredDays || badge.requiredSolved || 1;

        if (badge.id === 'day-1') {
            // Day 1 unlocks if user has streak >= 1 OR solved >= 1
            currentValue = Math.max(streak, solved);
            isUnlocked = streak >= 1 || solved >= 1;
        } else if (badge.requiredDays) {
            currentValue = streak;
            isUnlocked = streak >= badge.requiredDays;
        } else if (badge.requiredSolved) {
            currentValue = solved;
            isUnlocked = solved >= badge.requiredSolved;
        }

        const progress = Math.min(100, Math.round((currentValue / targetValue) * 100));

        return {
            ...badge,
            unlocked: isUnlocked,
            progress,
            currentValue,
            targetValue,
            unlockedAt: isUnlocked ? 'Achieved' : undefined
        };
    });
}
