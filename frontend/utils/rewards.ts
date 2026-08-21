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
        id: 'adv-backpack',
        name: 'ADV Pro Developer Backpack',
        category: 'gear',
        coinCost: 2500,
        description: 'Premium water-resistant travel & coding backpack with dedicated 15.6" padded laptop sleeve, USB charging pass-through, and ergonomic air-mesh straps.',
        highlights: ['15.6" Laptop Compartment', 'USB Port', 'Water-Resistant Cordura', 'ADV Metal Badge'],
        icon: '🎒',
        inStock: true,
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80',
        gradient: 'from-amber-500 to-orange-700',
        badgeLabel: 'Most Popular'
    },
    {
        id: 'adv-tshirt',
        name: 'ADV Indian Coder Official T-Shirt',
        category: 'apparel',
        coinCost: 1500,
        description: 'Ultra-soft 100% bio-washed combed cotton t-shirt with premium screen-printed ADV Indian Coder developer emblem on the chest and sleeve.',
        highlights: ['100% Combed Cotton', 'Bio-Washed & Pre-Shrunk', 'Breathable Fabric', 'Sizes XS to 3XL'],
        icon: '👕',
        inStock: true,
        image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80',
        gradient: 'from-red-500 to-rose-700',
        badgeLabel: 'Community Favorite'
    },
    {
        id: 'adv-keyboard',
        name: 'RGB Mechanical Coding Keyboard',
        category: 'gear',
        coinCost: 3500,
        description: 'High-precision mechanical keyboard with tactile blue/brown switches, per-key RGB backlighting, braided Type-C cable, and anti-ghosting technology.',
        highlights: ['Tactile Mechanical Switches', 'Customizable RGB Effects', 'Detachable Type-C', 'Aluminum Base'],
        icon: '⌨️',
        inStock: true,
        image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80',
        gradient: 'from-cyan-500 to-blue-700',
        badgeLabel: 'Elite Gear'
    },
    {
        id: 'adv-mouse',
        name: 'Ergonomic Precision Wireless Mouse',
        category: 'gear',
        coinCost: 2000,
        description: 'Ergonomic wireless developer mouse with ultra-silent clicks, 4000 DPI adjustable optical sensor, and rechargeable USB-C 60-day battery life.',
        highlights: ['Ultra-Silent Clicks', '4000 DPI Precision', 'Rechargeable USB-C', 'Dual 2.4G & Bluetooth'],
        icon: '🖱️',
        inStock: true,
        image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80',
        gradient: 'from-indigo-500 to-purple-700',
        badgeLabel: 'Pro Choice'
    },
    {
        id: 'adv-bottle',
        name: 'ADV Insulated Stainless Steel Bottle',
        category: 'accessories',
        coinCost: 1000,
        description: 'Double-walled vacuum insulated bottle in stealth matte black with laser-etched ADV Indian Coder branding. Keeps drinks cold for 24h & hot for 12h.',
        highlights: ['750ml Capacity', '304 Food-Grade Steel', '24h Cold / 12h Hot', 'Leakproof Cap'],
        icon: '💧',
        inStock: true,
        image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=80',
        gradient: 'from-emerald-500 to-teal-700',
        badgeLabel: 'Daily Essential'
    },
    {
        id: 'adv-diary',
        name: 'Hardcover Developer Planner & Pen',
        category: 'stationery',
        coinCost: 800,
        description: 'Executive hardcover dot-grid developer diary with 120gsm bleed-proof paper for system architecture, DSA diagrams, along with a weighted matte metal pen.',
        highlights: ['192 Dot-Grid Pages', '120gsm Archival Paper', 'Includes Metal Gel Pen', 'Ribbon Bookmark'],
        icon: '📓',
        inStock: true,
        image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80',
        gradient: 'from-yellow-500 to-amber-700',
        badgeLabel: 'System Designer'
    },
    {
        id: 'adv-mug',
        name: 'Smart Temperature Coffee Mug',
        category: 'accessories',
        coinCost: 1200,
        description: 'Smart LED touch temperature display thermal mug with stainless steel vacuum insulation to keep coffee piping hot during long coding sessions.',
        highlights: ['500ml Smart Mug', 'LED Touch Display', 'Double Vacuum Insulated', 'Anti-Spill Lid'],
        icon: '☕',
        inStock: true,
        image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80',
        gradient: 'from-orange-500 to-red-700',
        badgeLabel: 'Coder Fuel'
    },
    {
        id: 'adv-headphones',
        name: 'Noise-Cancelling Studio Headphones',
        category: 'gear',
        coinCost: 4500,
        description: 'High-fidelity over-ear headphones with Active Noise Cancellation (ANC), custom 40mm neodymium drivers, memory foam cushions, and 40h wireless battery.',
        highlights: ['Active Noise Cancellation', '40mm Hi-Res Drivers', '40h Battery Life', 'Built-in Mic'],
        icon: '🎧',
        inStock: true,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80',
        gradient: 'from-purple-500 to-pink-700',
        badgeLabel: 'Ultimate Reward'
    }
];

export function calculateUserCoins(streak: number = 0, successfulCompiles: number = 0, spentCoins: number = 0): {
    totalCoinsEarned: number;
    availableCoins: number;
    spentCoins: number;
    badgesCount: number;
    allTenCompleted: boolean;
} {
    let coins = 0;
    let unlockedBadges = 0;

    const streakMilestones = [
        { days: 1, coins: 150 },
        { days: 10, coins: 300 },
        { days: 20, coins: 300 },
        { days: 30, coins: 500 },
        { days: 40, coins: 500 },
        { days: 50, coins: 750 },
        { days: 100, coins: 1000 },
        { days: 150, coins: 1000 },
        { days: 175, coins: 1200 },
        { days: 365, coins: 2500 }
    ];

    if (streak >= 1 || successfulCompiles >= 1) {
        coins += 150;
        unlockedBadges += 1;
    }

    for (let i = 1; i < streakMilestones.length; i++) {
        if (streak >= streakMilestones[i].days) {
            coins += streakMilestones[i].coins;
            unlockedBadges += 1;
        }
    }

    // Bonus 25 coins for each successful compile/solve
    coins += Math.max(0, successfulCompiles) * 25;

    // Grand Completion Bonus for completing all 10 badges
    const allTenCompleted = unlockedBadges >= 10;
    if (allTenCompleted) {
        coins += 2000;
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