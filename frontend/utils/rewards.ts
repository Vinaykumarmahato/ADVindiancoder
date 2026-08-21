export interface RewardItem {
    id: string;
    name: string;
    category: 'apparel' | 'gear' | 'accessories' | 'stationery';
    coinCost: number;
    description: string;
    highlights: string[];
    icon: string;
    badgeTierRequired?: string;
    inStock: boolean;
    image: string;
    gradient: string;
    badgeLabel: string;
}

export const SWAG_CATALOG: RewardItem[] = [
    {
        id: 'adv-diary',
        name: 'Hardcover Developer Planner & Pen',
        category: 'stationery',
        coinCost: 50,
        description: 'Executive hardcover dot-grid developer diary with 120gsm bleed-proof paper for system architecture, DSA diagrams, along with a weighted matte metal pen.',
        highlights: ['192 Dot-Grid Pages', '120gsm Archival Paper', 'Includes Metal Gel Pen', 'Ribbon Bookmark'],
        icon: '📓',
        inStock: true,
        image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80',
        gradient: 'from-yellow-500 to-amber-700',
        badgeLabel: 'Starter Essential'
    },
    {
        id: 'adv-bottle',
        name: 'ADV Insulated Stainless Steel Bottle',
        category: 'accessories',
        coinCost: 100,
        description: 'Double-walled vacuum insulated bottle in stealth matte black with laser-etched ADV Indian Coder branding. Keeps drinks cold for 24h & hot for 12h.',
        highlights: ['750ml Capacity', '304 Food-Grade Steel', '24h Cold / 12h Hot', 'Leakproof Cap'],
        icon: '💧',
        inStock: true,
        image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=80',
        gradient: 'from-emerald-500 to-teal-700',
        badgeLabel: 'Daily Essential'
    },
    {
        id: 'adv-mug',
        name: 'Smart Temperature Coffee Mug',
        category: 'accessories',
        coinCost: 150,
        description: 'Smart LED touch temperature display thermal mug with stainless steel vacuum insulation to keep coffee piping hot during long coding sessions.',
        highlights: ['500ml Smart Mug', 'LED Touch Display', 'Double Vacuum Insulated', 'Anti-Spill Lid'],
        icon: '☕',
        inStock: true,
        image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80',
        gradient: 'from-orange-500 to-red-700',
        badgeLabel: 'Coder Fuel'
    },
    {
        id: 'adv-tshirt',
        name: 'ADV Indian Coder Official T-Shirt',
        category: 'apparel',
        coinCost: 200,
        description: 'Ultra-soft 100% bio-washed combed cotton t-shirt with premium screen-printed ADV Indian Coder developer emblem on the chest and sleeve.',
        highlights: ['100% Combed Cotton', 'Bio-Washed & Pre-Shrunk', 'Breathable Fabric', 'Sizes XS to 3XL'],
        icon: '👕',
        inStock: true,
        image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80',
        gradient: 'from-red-500 to-rose-700',
        badgeLabel: 'Community Favorite'
    },
    {
        id: 'adv-mouse',
        name: 'Ergonomic Precision Wireless Mouse',
        category: 'gear',
        coinCost: 250,
        description: 'Ergonomic wireless developer mouse with ultra-silent clicks, 4000 DPI adjustable optical sensor, and rechargeable USB-C 60-day battery life.',
        highlights: ['Ultra-Silent Clicks', '4000 DPI Precision', 'Rechargeable USB-C', 'Dual 2.4G & Bluetooth'],
        icon: '🖱️',
        inStock: true,
        image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80',
        gradient: 'from-indigo-500 to-purple-700',
        badgeLabel: 'Pro Choice'
    },
    {
        id: 'adv-backpack',
        name: 'ADV Pro Developer Backpack',
        category: 'gear',
        coinCost: 350,
        description: 'Premium water-resistant travel & coding backpack with dedicated 15.6" padded laptop sleeve, USB charging pass-through, and ergonomic air-mesh straps.',
        highlights: ['15.6" Laptop Compartment', 'USB Port', 'Water-Resistant Cordura', 'ADV Metal Badge'],
        icon: '🎒',
        inStock: true,
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80',
        gradient: 'from-amber-500 to-orange-700',
        badgeLabel: 'Most Popular'
    },
    {
        id: 'adv-keyboard',
        name: 'RGB Mechanical Coding Keyboard',
        category: 'gear',
        coinCost: 500,
        description: 'High-precision mechanical keyboard with tactile blue/brown switches, per-key RGB backlighting, braided Type-C cable, and anti-ghosting technology.',
        highlights: ['Tactile Mechanical Switches', 'Customizable RGB Effects', 'Detachable Type-C', 'Aluminum Base'],
        icon: '⌨️',
        inStock: true,
        image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80',
        gradient: 'from-cyan-500 to-blue-700',
        badgeLabel: 'Elite Gear'
    },
    {
        id: 'adv-headphones',
        name: 'Noise-Cancelling Studio Headphones',
        category: 'gear',
        coinCost: 750,
        description: 'High-fidelity over-ear headphones with Active Noise Cancellation (ANC), custom 40mm neodymium drivers, memory foam cushions, and 40h wireless battery.',
        highlights: ['Active Noise Cancellation', '40mm Hi-Res Drivers', '40h Battery Life', 'Built-in Mic'],
        icon: '🎧',
        inStock: true,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80',
        gradient: 'from-purple-500 to-pink-700',
        badgeLabel: 'Ultimate Reward'
    }
];

export interface CoinActivityCategory {
    title: string;
    icon: string;
    color: string;
    items: {
        activity: string;
        reward: string;
        detail: string;
        tag?: string;
    }[];
}

export const COIN_WAYS_CATALOGUE: CoinActivityCategory[] = [
    {
        title: '🔁 Daily Activities & POTD',
        icon: '⚡',
        color: '#f59e0b',
        items: [
            { activity: 'Daily Login (Check-in)', reward: '1 coin / day', detail: 'Claim daily login check-in with 1 tap.', tag: 'Daily' },
            { activity: 'Solving Problem of the Day (POTD)', reward: '10 coins', detail: 'Complete the daily spotlight algorithm problem.', tag: 'Hot' },
            { activity: '25 Consecutive Days of POTD', reward: '+25 bonus coins', detail: 'Consistent monthly coding dedication bonus.', tag: 'Milestone' },
            { activity: '30 Days of POTD', reward: '+30 bonus coins', detail: '30-day streak milestone reward.', tag: 'Streak' },
            { activity: 'Full Month of POTD (Complete Cycle)', reward: '+50 bonus coins', detail: 'Solve all problems in a calendar month.', tag: 'Grand' },
        ]
    },
    {
        title: '🏆 Weekly & Bi-Weekly Contests',
        icon: '👑',
        color: '#3b82f6',
        items: [
            { activity: 'Weekly Coding Contest', reward: '5 coins', detail: 'Participate and submit at least 1 solution in the weekly contest.', tag: 'Weekly' },
            { activity: 'Bi-Weekly + Weekly Combo Contest', reward: 'Up to 45 coins', detail: 'Compete in both contests in the same week for maximum rewards.', tag: 'Combo' },
        ]
    },
    {
        title: '🌟 Community Contributions',
        icon: '🤝',
        color: '#10b981',
        items: [
            { activity: 'Contribute New Problems', reward: 'Up to 1,000 coins', detail: 'Submit approved high-quality DSA questions with testcases.', tag: 'Creator' },
            { activity: 'Contribute Test Cases & Edge Cases', reward: '100 coins', detail: 'Improve existing challenge test coverage.', tag: 'QA' },
            { activity: 'Report Contest Violations & Bugs', reward: '50 coins', detail: 'Keep the platform fair, secure, and cheating-free.', tag: 'Guardian' },
        ]
    },
    {
        title: '🎁 Secret & Hidden Ways',
        icon: '✨',
        color: '#ec4899',
        items: [
            { activity: 'Claim Post-Contest Mystery Box', reward: '10 free coins', detail: 'Visit the contest leaderboard page after it concludes to open the secret gift.', tag: 'Easter Egg' },
            { activity: 'Milestone Badges (10, 20, 50, 100+ Days)', reward: '+25 to 500 coins', detail: 'Earn progressive badge multipliers as you level up.', tag: 'Badges' },
        ]
    }
];

export function calculateUserCoins(
    streak: number = 0, 
    successfulCompiles: number = 0, 
    spentCoins: number = 0,
    dailyCheckins: number = 0,
    potdSolves: number = 0,
    contestPoints: number = 0
): {
    totalCoinsEarned: number;
    availableCoins: number;
    spentCoins: number;
    badgesCount: number;
    allTenCompleted: boolean;
} {
    let coins = 0;
    let unlockedBadges = 0;

    // 1. Initial Day 1 Pioneer Unlock (First-time welcome)
    if (streak >= 1 || successfulCompiles >= 1) {
        coins += 50;
        unlockedBadges += 1;
    }

    // 2. Daily Login Check-ins (1 coin/day)
    coins += Math.max(0, dailyCheckins) * 1;

    // 3. Problem of the Day (10 coins per POTD solve)
    coins += Math.max(0, potdSolves) * 10;
    if (streak >= 25) coins += 25; // 25 consecutive days bonus
    if (streak >= 30) coins += 30; // 30 days bonus
    if (streak >= 30) coins += 50; // Full month completion bonus

    // 4. Daily Streak Multiplier (+2 coins/day)
    if (streak > 0) {
        coins += streak * 2;
    }

    // 5. Contest & Bonus Points
    coins += Math.max(0, contestPoints);

    // 6. Milestone Badges
    const milestoneBonuses = [
        { days: 10, coins: 25 },
        { days: 20, coins: 50 },
        { days: 30, coins: 50 },
        { days: 40, coins: 50 },
        { days: 50, coins: 75 },
        { days: 100, coins: 100 },
        { days: 150, coins: 150 },
        { days: 175, coins: 200 },
        { days: 365, coins: 500 }
    ];

    for (const m of milestoneBonuses) {
        if (streak >= m.days) {
            coins += m.coins;
            unlockedBadges += 1;
        }
    }

    // 7. General Solved Problems (+2 coins/solve)
    coins += Math.max(0, successfulCompiles) * 2;

    // 8. Grand All-10 Badges Bonus (+500 coins)
    const allTenCompleted = unlockedBadges >= 10;
    if (allTenCompleted) {
        coins += 500;
    }

    const available = Math.max(0, coins - spentCoins);

    return {
        totalCoinsEarned: coins,
        availableCoins: available,
        spentCoins: spentCoins,
        badgesCount: unlockedBadges,
        allTenCompleted
    };
}