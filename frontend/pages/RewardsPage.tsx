import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    ShoppingBag, Gift, Truck, CheckCircle2, ShieldCheck, 
    Sparkles, ArrowRight, Award, Trophy, PackageCheck, AlertCircle,
    Flame, Lock, HelpCircle, Calendar, Zap, Users, Star, Box, Check,
    MessageSquare
} from 'lucide-react';
import { SWAG_CATALOG, RewardItem, COIN_WAYS_CATALOGUE } from '../utils/rewards';
import RewardOrderModal from '../components/rewards/RewardOrderModal';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

const API = import.meta.env.VITE_API_URL || 'http://localhost:8080';

interface CoinData {
    availableCoins: number;
    totalCoinsEarned: number;
    spentCoins: number;
    badgesCount: number;
}

const RewardsPage: React.FC = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [selectedItem, setSelectedItem] = useState<RewardItem | null>(null);
    const [orderModalMode, setOrderModalMode] = useState<'coins' | 'cash'>('coins');
    const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
    const [myOrders, setMyOrders] = useState<any[]>([]);

    // Server-authoritative state
    const [coinData, setCoinData] = useState<CoinData>({ availableCoins: 0, totalCoinsEarned: 0, spentCoins: 0, badgesCount: 0 });
    const [hasCheckedInToday, setHasCheckedInToday] = useState(false);
    const [secretBoxClaimed, setSecretBoxClaimed] = useState(false);
    const [potdInfo, setPotdInfo] = useState<{ slug: string; title: string; hasSolvedToday: boolean } | null>(null);

    const [loading, setLoading] = useState(true);
    const [checkinLoading, setCheckinLoading] = useState(false);
    const [secretBoxLoading, setSecretBoxLoading] = useState(false);
    const [showClaimToast, setShowClaimToast] = useState<string | null>(null);

    const [selectedCategory, setSelectedCategory] = useState<'all' | 'gear' | 'apparel' | 'accessories' | 'stationery'>('all');

    const getToken = () => localStorage.getItem('adv_coder_token');

    const fetchUserData = async () => {
        const token = getToken();
        if (!token) { setLoading(false); return; }

        try {
            // Profile gives us coin balance, checkin status — all server-computed
            const profileRes = await fetch(`${API}/api/auth/profile`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (profileRes.ok) {
                const d = await profileRes.json();
                setCoinData({
                    availableCoins: d.availableCoins ?? 0,
                    totalCoinsEarned: d.totalCoinsEarned ?? 0,
                    spentCoins: d.spentCoins ?? 0,
                    badgesCount: d.badgesCount ?? 0,
                });
                setHasCheckedInToday(d.hasCheckedInToday ?? false);
                setSecretBoxClaimed(d.secretBoxClaimed ?? false);
            }

            // POTD info
            fetch(`${API}/api/practice/potd`, {
                headers: { 'Authorization': `Bearer ${token}` }
            })
                .then(res => res.ok ? res.json() : null)
                .then(data => {
                    if (data?.problem) {
                        setPotdInfo({ slug: data.problem.slug, title: data.problem.title, hasSolvedToday: data.hasSolvedToday });
                    }
                })
                .catch(() => {});

            // Orders
            const ordersRes = await fetch(`${API}/api/rewards/my-orders`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (ordersRes.ok) setMyOrders(await ordersRes.json());

        } catch (e) {
            console.error('Failed to fetch rewards data:', e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUserData();
        const onUpdate = () => fetchUserData();
        window.addEventListener('user_progress_updated', onUpdate);
        return () => window.removeEventListener('user_progress_updated', onUpdate);
    }, [user]);

    // ── Daily Check-in (calls backend) ──────────────────────────────────────
    const handleDailyCheckin = async () => {
        if (!user) { window.dispatchEvent(new CustomEvent('open_auth_modal')); return; }
        if (hasCheckedInToday || checkinLoading) return;

        const token = getToken();
        if (!token) return;
        setCheckinLoading(true);
        try {
            const res = await fetch(`${API}/api/rewards/checkin`, {
                method: 'POST',
                headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
                body: JSON.stringify({ type: 'DAILY' })
            });
            const data = await res.json();
            if (res.ok) {
                setHasCheckedInToday(true);
                setShowClaimToast(data.message || '🎉 +1 Daily Check-in Coin added to your wallet!');
                setTimeout(() => setShowClaimToast(null), 3500);
                await fetchUserData(); // Refresh balance from server
            } else {
                setShowClaimToast('⚠️ ' + (data.message || 'Already claimed today.'));
                setTimeout(() => setShowClaimToast(null), 3000);
            }
        } catch {
            setShowClaimToast('⚠️ Network error. Please try again.');
            setTimeout(() => setShowClaimToast(null), 3000);
        } finally {
            setCheckinLoading(false);
        }
    };

    // ── Secret Mystery Box (calls backend) ──────────────────────────────────
    const handleClaimSecretBox = async () => {
        if (!user) { window.dispatchEvent(new CustomEvent('open_auth_modal')); return; }
        if (secretBoxClaimed || secretBoxLoading) return;

        const token = getToken();
        if (!token) return;
        setSecretBoxLoading(true);
        try {
            const res = await fetch(`${API}/api/rewards/checkin`, {
                method: 'POST',
                headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
                body: JSON.stringify({ type: 'SECRET_BOX' })
            });
            const data = await res.json();
            if (res.ok) {
                setSecretBoxClaimed(true);
                setShowClaimToast(data.message || '🎁 Amazing! +10 Free Coins added!');
                setTimeout(() => setShowClaimToast(null), 4000);
                await fetchUserData();
            } else {
                setShowClaimToast('⚠️ ' + (data.message || 'Already claimed.'));
                setTimeout(() => setShowClaimToast(null), 3000);
            }
        } catch {
            setShowClaimToast('⚠️ Network error. Please try again.');
            setTimeout(() => setShowClaimToast(null), 3000);
        } finally {
            setSecretBoxLoading(false);
        }
    };

    const filteredItems = selectedCategory === 'all'
        ? SWAG_CATALOG
        : SWAG_CATALOG.filter(item => item.category === selectedCategory);

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-[#070b13] pt-32 sm:pt-36 md:pt-40 pb-16 px-4 sm:px-6 lg:px-8 font-sans">
            <SEO 
                title="ADV Swag Store & Developer Rewards | Official Merchandise"
                description="Redeem your coding coins for official ADV Indian Coder developer merchandise — hoodies, t-shirts, smart thermal mugs, hardcover planners, mechanical keyboards, and tech gear."
                keywords="adv indian coder swag store, developer merch india, coder t-shirts, programming hoodies, coding rewards, free developer swag, adv coins, developer gifts, programmer accessories"
                canonical="/rewards"
                ogImage="/assets/og-image.png"
                schema={[
                    {
                        "@context": "https://schema.org",
                        "@type": "Store",
                        "name": "ADV Swag Store & Rewards",
                        "description": "Official developer merchandise and rewards store by ADV Indian Coder.",
                        "url": "https://www.advindiancoder.com/rewards",
                        "image": "https://www.advindiancoder.com/assets/og-image.png",
                        "priceRange": "₹299 - ₹2499",
                        "currenciesAccepted": "INR",
                        "paymentAccepted": "ADV Coins, UPI, Net Banking, Credit Card",
                        "department": {
                            "@type": "EducationalOrganization",
                            "name": "ADV Indian Coder",
                            "url": "https://www.advindiancoder.com"
                        }
                    },
                    {
                        "@context": "https://schema.org",
                        "@type": "OfferCatalog",
                        "name": "ADV Developer Merchandise Catalog",
                        "itemListElement": SWAG_CATALOG.map((item, idx) => ({
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Product",
                                "name": item.name,
                                "description": item.description,
                                "image": item.image,
                                "sku": item.id,
                                "mpn": `ADV-${item.id.toUpperCase()}`,
                                "category": item.category,
                                "brand": { "@type": "Brand", "name": "ADV Indian Coder" },
                                "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "128", "bestRating": "5", "worstRating": "1" },
                                "offers": {
                                    "@type": "Offer",
                                    "price": item.inrPrice,
                                    "priceCurrency": "INR",
                                    "availability": item.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
                                    "url": `https://www.advindiancoder.com/rewards#${item.id}`,
                                    "seller": { "@type": "Organization", "name": "ADV Indian Coder" }
                                }
                            },
                            "position": idx + 1
                        }))
                    },
                    {
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.advindiancoder.com/" },
                            { "@type": "ListItem", "position": 2, "name": "Swag Store & Rewards", "item": "https://www.advindiancoder.com/rewards" }
                        ]
                    }
                ]}
            />
            <div className="max-w-7xl mx-auto space-y-10">

                {/* Toast Notification */}
                <AnimatePresence>
                    {showClaimToast && (
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.9 }}
                            className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-gradient-to-r from-amber-500 to-red-600 text-white px-6 py-3 rounded-2xl shadow-2xl font-black text-sm border border-white/20 flex items-center gap-3 backdrop-blur-md"
                        >
                            <Sparkles className="w-5 h-5 text-amber-200" />
                            <span>{showClaimToast}</span>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Hero Banner with Live Coin Balance */}
                <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative rounded-3xl p-6 sm:p-10 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 text-white shadow-2xl overflow-hidden"
                >
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="space-y-3 text-center md:text-left max-w-2xl">
                            <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider bg-white/20 px-3.5 py-1 rounded-full border border-white/20 backdrop-blur-md">
                                <Sparkles className="w-3.5 h-3.5" />
                                Official Swag & Developer Rewards Store
                            </span>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
                                Turn Your Daily Coding into Real Swag 🎁
                            </h1>
                            <p className="text-xs sm:text-sm text-white/90 font-medium leading-relaxed">
                                Earn <strong>ADV Coins</strong> through daily check-ins, solving Problem of the Day (POTD), coding streaks, contests, and community contributions. Redeem for physical backpacks, mechanical keyboards, custom hoodies, and developer gear — shipped 100% free across India!
                            </p>
                        </div>

                        {/* Coin Wallet Card — server-computed balance */}
                        <div className="z-10 w-full md:w-auto flex flex-col items-center md:items-end shrink-0 bg-black/35 backdrop-blur-md p-6 rounded-3xl border border-white/20 shadow-2xl text-center md:text-right">
                            <span className="text-[11px] font-black uppercase tracking-widest text-amber-300">
                                {user ? 'Your Available Balance' : 'Login to View Balance'}
                            </span>
                            <div className="text-3xl sm:text-4xl font-black flex items-center gap-2 mt-1 text-white">
                                <span className="text-amber-400">🪙</span>
                                <span>{user ? coinData.availableCoins : '0'} Coins</span>
                            </div>
                            <div className="text-[11px] text-white/70 font-semibold mt-2 space-y-0.5">
                                <div>Total Earned: <strong>{coinData.totalCoinsEarned}</strong> 🪙</div>
                                <div>Badges Unlocked: <strong>{coinData.badgesCount} / 10</strong> 🏆</div>
                            </div>
                            {user && (
                                <div className="mt-2 text-[10px] text-emerald-300 font-bold flex items-center gap-1">
                                    <ShieldCheck className="w-3 h-3" />
                                    Server-verified balance
                                </div>
                            )}
                        </div>
                    </div>
                </motion.div>

                {/* ⚡ Quick Daily Actions Hub */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {/* 1. Daily Check-in */}
                    <div className="bg-white dark:bg-[#0c1222] border border-gray-200/60 dark:border-white/5 rounded-3xl p-5 shadow-sm flex items-center justify-between gap-4">
                        <div className="space-y-1">
                            <span className="text-[10px] font-black uppercase tracking-wider text-amber-500 flex items-center gap-1">
                                <Calendar className="w-3.5 h-3.5" />
                                Daily Check-in
                            </span>
                            <h3 className="text-sm font-black text-gray-900 dark:text-white">Claim Daily Login Coin</h3>
                            <p className="text-[11px] text-gray-400 font-semibold">Earn +1 free coin every 24 hours.</p>
                        </div>
                        <button
                            onClick={handleDailyCheckin}
                            disabled={hasCheckedInToday || checkinLoading}
                            className={`px-4 py-2.5 rounded-2xl text-xs font-black shrink-0 transition-all shadow-sm flex items-center gap-1.5 cursor-pointer ${
                                hasCheckedInToday
                                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 cursor-default'
                                    : checkinLoading
                                        ? 'bg-amber-500/20 text-amber-400 cursor-wait'
                                        : 'bg-gradient-to-r from-amber-500 to-orange-600 text-white hover:brightness-110 active:scale-95'
                            }`}
                        >
                            {hasCheckedInToday ? (
                                <><Check className="w-3.5 h-3.5" /><span>Claimed ✓</span></>
                            ) : checkinLoading ? (
                                <span>Claiming...</span>
                            ) : (
                                <span>🪙 Claim +1</span>
                            )}
                        </button>
                    </div>

                    {/* 2. Problem of the Day (POTD) */}
                    <div className="bg-white dark:bg-[#0c1222] border border-gray-200/60 dark:border-white/5 rounded-3xl p-5 shadow-sm flex items-center justify-between gap-4">
                        <div className="space-y-1">
                            <span className="text-[10px] font-black uppercase tracking-wider text-red-500 flex items-center gap-1">
                                <Zap className="w-3.5 h-3.5" />
                                Problem of the Day
                            </span>
                            <h3 className="text-sm font-black text-gray-900 dark:text-white truncate max-w-[180px] sm:max-w-xs">
                                {potdInfo ? potdInfo.title : "Solve Today's Challenge"}
                            </h3>
                            <p className="text-[11px] text-gray-400 font-semibold">Earn +10 coins on completion.</p>
                        </div>
                        <button
                            onClick={() => {
                                if (potdInfo?.slug) navigate(`/practice/${potdInfo.slug}`);
                                else navigate('/practice');
                            }}
                            className={`px-4 py-2.5 rounded-2xl text-xs font-black shrink-0 transition-all shadow-sm flex items-center gap-1.5 cursor-pointer active:scale-95 ${
                                potdInfo?.hasSolvedToday
                                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                                    : 'bg-red-600 hover:bg-red-500 text-white'
                            }`}
                        >
                            {potdInfo?.hasSolvedToday ? (
                                <><Check className="w-3.5 h-3.5" /><span>Solved ✓</span></>
                            ) : (
                                <><span>Solve (+10 🪙)</span><ArrowRight className="w-3.5 h-3.5" /></>
                            )}
                        </button>
                    </div>

                    {/* 3. Secret Mystery Gift */}
                    <div className="bg-white dark:bg-[#0c1222] border border-gray-200/60 dark:border-white/5 rounded-3xl p-5 shadow-sm flex items-center justify-between gap-4">
                        <div className="space-y-1">
                            <span className="text-[10px] font-black uppercase tracking-wider text-pink-500 flex items-center gap-1">
                                <Box className="w-3.5 h-3.5" />
                                Secret Mystery Gift
                            </span>
                            <h3 className="text-sm font-black text-gray-900 dark:text-white">Easter Egg Reward</h3>
                            <p className="text-[11px] text-gray-400 font-semibold">Hidden surprise for active learners.</p>
                        </div>
                        <button
                            onClick={handleClaimSecretBox}
                            disabled={secretBoxClaimed || secretBoxLoading}
                            className={`px-4 py-2.5 rounded-2xl text-xs font-black shrink-0 transition-all shadow-sm flex items-center gap-1.5 cursor-pointer ${
                                secretBoxClaimed
                                    ? 'bg-pink-500/10 text-pink-400 border border-pink-500/20 cursor-default'
                                    : secretBoxLoading
                                        ? 'bg-pink-500/20 text-pink-400 cursor-wait'
                                        : 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:brightness-110 active:scale-95'
                            }`}
                        >
                            {secretBoxClaimed ? (
                                <><Check className="w-3.5 h-3.5" /><span>Claimed ✓</span></>
                            ) : secretBoxLoading ? (
                                <span>Claiming...</span>
                            ) : (
                                <span>🎁 Open (+10 🪙)</span>
                            )}
                        </button>
                    </div>
                </div>

                {/* 📚 Complete Coins Earning Matrix Guide */}
                <div className="bg-white dark:bg-[#0c1222] border border-gray-200/60 dark:border-white/5 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="p-3 bg-amber-500/10 rounded-2xl text-amber-500">
                            <Trophy className="w-6 h-6" />
                        </div>
                        <div>
                            <h2 className="text-xl font-black text-gray-900 dark:text-white">Ways to Earn ADV Coins</h2>
                            <p className="text-xs text-gray-400 font-semibold">
                                Full breakdown of daily check-ins, POTD streak milestones, contests, and community contribution rewards.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {COIN_WAYS_CATALOGUE.map((category, idx) => (
                            <div key={idx} className="bg-gray-50 dark:bg-white/5 border border-gray-200/60 dark:border-white/5 rounded-2xl p-5 space-y-3.5">
                                <div className="flex items-center gap-2 font-black text-sm text-gray-900 dark:text-white border-b border-gray-200 dark:border-white/5 pb-2.5">
                                    <span className="text-lg">{category.icon}</span>
                                    <span>{category.title}</span>
                                </div>
                                <div className="space-y-2.5">
                                    {category.items.map((item, itemIdx) => (
                                        <div key={itemIdx} className="flex items-start justify-between gap-3 text-xs">
                                            <div className="space-y-0.5 flex-1">
                                                <div className="font-bold text-gray-800 dark:text-gray-200 flex items-center gap-1.5">
                                                    <span>{item.activity}</span>
                                                    {item.tag && (
                                                        <span className="text-[9px] font-black uppercase px-1.5 py-0.2 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                                                            {item.tag}
                                                        </span>
                                                    )}
                                                </div>
                                                <p className="text-[11px] text-gray-400 font-medium">{item.detail}</p>
                                            </div>
                                            <span className="font-black text-amber-500 bg-amber-500/10 px-2.5 py-1 rounded-xl shrink-0 border border-amber-500/20">
                                                🪙 {item.reward}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Category Filter Tabs */}
                <div className="flex items-center justify-between flex-wrap gap-4 border-b border-gray-200 dark:border-white/10 pb-4">
                    <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
                        {[
                            { id: 'all', label: 'All Swag' },
                            { id: 'stationery', label: 'Planners & Diaries (600🪙) 📓' },
                            { id: 'accessories', label: 'Bottles & Mugs (900-1200🪙) 💧' },
                            { id: 'apparel', label: 'T-Shirts (1500🪙) 👕' },
                            { id: 'gear', label: 'Hardware & Backpacks (1800-3000🪙) ⌨️' }
                        ].map(cat => (
                            <button
                                key={cat.id}
                                onClick={() => setSelectedCategory(cat.id as any)}
                                className={`px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer whitespace-nowrap ${
                                    selectedCategory === cat.id
                                        ? 'bg-red-600 text-white shadow-md'
                                        : 'bg-white dark:bg-white/5 text-gray-500 hover:text-gray-900 dark:hover:text-white border border-gray-200 dark:border-white/5'
                                }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-500 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
                        <Truck className="w-4 h-4" />
                        <span>100% Free Shipping Pan-India 🇮🇳</span>
                    </div>
                </div>

                {/* Swag Items Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredItems.map((item) => {
                        const canAfford = user && coinData.availableCoins >= item.coinCost;
                        return (
                            <motion.div
                                key={item.id}
                                whileHover={{ y: -5 }}
                                className="bg-white dark:bg-[#0c1222] border border-gray-200 dark:border-white/5 rounded-3xl p-5 shadow-sm flex flex-col justify-between hover:border-amber-500/30 transition-all group"
                            >
                                <div className="space-y-4">
                                    <div className="h-48 rounded-2xl bg-slate-900 border border-white/5 overflow-hidden relative">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                        <span className="absolute top-2.5 left-2.5 text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-amber-400 border border-white/15">
                                            {item.badgeLabel}
                                        </span>
                                        <div className="absolute bottom-2.5 right-2.5 flex flex-col items-end gap-1">
                                            <span className="text-[11px] font-black px-2.5 py-0.5 rounded-lg bg-black/80 backdrop-blur-md text-amber-400 border border-white/15">
                                                🪙 {item.coinCost} Coins
                                            </span>
                                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-emerald-600/90 backdrop-blur-md text-white">
                                                or ₹{item.inrPrice} <span className="line-through opacity-70 text-[9px]">₹{item.originalPrice}</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="space-y-1.5">
                                        <h3 className="text-base font-black text-gray-900 dark:text-white line-clamp-1 group-hover:text-amber-400 transition-colors">{item.name}</h3>
                                        <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed font-medium">{item.description}</p>
                                    </div>
                                    <div className="flex flex-wrap gap-1.5 pt-1">
                                        {item.highlights.map((h, idx) => (
                                            <span key={idx} className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400">{h}</span>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-5 mt-4 border-t border-gray-100 dark:border-white/5 flex flex-col gap-2">
                                    {/* Shop Now (Cash) */}
                                    <button
                                        type="button"
                                        onClick={() => {
                                            if (!user) { window.dispatchEvent(new CustomEvent('open_auth_modal')); return; }
                                            setSelectedItem(item);
                                            setOrderModalMode('cash');
                                            setIsOrderModalOpen(true);
                                        }}
                                        className="w-full py-2.5 rounded-xl text-xs font-black bg-gradient-to-r from-red-600 to-rose-600 hover:brightness-110 text-white transition-all flex items-center justify-center gap-1.5 shadow-sm cursor-pointer active:scale-95"
                                    >
                                        <ShoppingBag className="w-3.5 h-3.5" />
                                        <span>{user ? `Shop Now (₹${item.inrPrice})` : `Sign In to Shop (₹${item.inrPrice})`}</span>
                                    </button>

                                    {/* Redeem with Coins */}
                                    <button
                                        type="button"
                                        onClick={() => {
                                            if (!user) { window.dispatchEvent(new CustomEvent('open_auth_modal')); return; }
                                            setSelectedItem(item);
                                            setOrderModalMode('coins');
                                            setIsOrderModalOpen(true);
                                        }}
                                        disabled={Boolean(user && !canAfford)}
                                        className={`w-full py-2 rounded-xl text-[11px] font-black transition-all flex items-center justify-center gap-1.5 cursor-pointer border ${
                                            !user
                                                ? 'bg-gray-100 dark:bg-white/5 border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:bg-white/10'
                                                : canAfford
                                                    ? 'bg-amber-500/10 border-amber-500/30 text-amber-500 hover:bg-amber-500/20 active:scale-95'
                                                    : 'bg-transparent border-gray-200 dark:border-white/5 text-gray-400 cursor-not-allowed'
                                        }`}
                                    >
                                        {!user ? (
                                            <span>Sign In to Redeem with Coins</span>
                                        ) : canAfford ? (
                                            <><Gift className="w-3.5 h-3.5" /><span>Redeem ({item.coinCost} 🪙)</span></>
                                        ) : (
                                            <span>Need {item.coinCost - coinData.availableCoins} More Coins</span>
                                        )}
                                    </button>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* My Swag Orders Tracking */}
                {user && (
                    <div className="bg-white dark:bg-[#0c1222] border border-gray-200/60 dark:border-white/5 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
                        <div className="flex items-center justify-between">
                            <h3 className="text-base font-black text-gray-900 dark:text-white flex items-center gap-2">
                                <Truck className="w-5 h-5 text-emerald-500" />
                                My Swag Orders & Delivery Status
                            </h3>
                            <span className="text-xs font-bold text-gray-400">{myOrders.length} Orders Placed</span>
                        </div>

                        {myOrders.length > 0 ? (
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-xs">
                                    <thead>
                                        <tr className="border-b border-gray-200 dark:border-white/10 text-gray-400 font-bold uppercase text-[10px]">
                                            <th className="pb-3">Order ID</th>
                                            <th className="pb-3">Item</th>
                                            <th className="pb-3">Coins Spent</th>
                                            <th className="pb-3">Status</th>
                                            <th className="pb-3">Tracking ID</th>
                                            <th className="pb-3 text-right">Date</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 dark:divide-white/5">
                                        {myOrders.map((ord) => (
                                            <tr key={ord.id} className="text-gray-300">
                                                <td className="py-3 font-mono font-bold text-amber-400">#ADV-SWAG-{ord.id}</td>
                                                <td className="py-3 font-bold text-white">{ord.itemName} {ord.apparelSize ? `(${ord.apparelSize})` : ''}</td>
                                                <td className="py-3 font-bold text-amber-400">🪙 {ord.coinCost || '—'}</td>
                                                <td className="py-3">
                                                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                                        {ord.status}
                                                    </span>
                                                </td>
                                                <td className="py-3 font-mono text-gray-400">{ord.trackingNumber || 'Pending'}</td>
                                                <td className="py-3 text-right text-gray-400">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <span>{new Date(ord.createdAt).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                                        <button
                                                            type="button"
                                                            onClick={() => {
                                                                const text = encodeURIComponent(
                                                                    `Hello ADV Indian Coder Support! 📦\nI want to track my order:\n\n` +
                                                                    `🆔 *Order ID*: #ADV-SWAG-${ord.id}\n` +
                                                                    `🚚 *Tracking Code*: ${ord.trackingNumber || 'PENDING'}\n` +
                                                                    `📦 *Item*: ${ord.itemName}\n\nPlease share my delivery updates!`
                                                                );
                                                                window.open(`https://wa.me/919931860964?text=${text}`, '_blank');
                                                            }}
                                                            className="px-2 py-1 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 text-[10px] font-bold flex items-center gap-1 cursor-pointer transition-all border border-emerald-500/20"
                                                        >
                                                            <MessageSquare className="w-3 h-3" />
                                                            <span>Track</span>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <div className="py-8 text-center text-gray-400 font-semibold text-xs border border-dashed border-gray-200 dark:border-white/5 rounded-2xl">
                                No reward orders placed yet. Choose any swag item above to redeem using your coins!
                            </div>
                        )}
                    </div>
                )}

                {/* Reward / Shop Order Modal */}
                <RewardOrderModal
                    isOpen={isOrderModalOpen}
                    onClose={() => { setIsOrderModalOpen(false); setSelectedItem(null); }}
                    item={selectedItem}
                    availableCoins={coinData.availableCoins}
                    initialMode={orderModalMode}
                    onOrderSuccess={() => { fetchUserData(); }}
                />

            </div>
        </div>
    );
};

export default RewardsPage;