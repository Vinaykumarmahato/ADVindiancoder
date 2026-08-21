import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    ShoppingBag, Coins, Gift, Truck, CheckCircle2, ShieldCheck, 
    Sparkles, ArrowRight, Award, Trophy, PackageCheck, AlertCircle,
    Flame, Lock, HelpCircle, Calendar, Zap, Users, Star, Box, Check
} from 'lucide-react';
import { SWAG_CATALOG, RewardItem, calculateUserCoins, COIN_WAYS_CATALOGUE } from '../utils/rewards';
import RewardOrderModal from '../components/rewards/RewardOrderModal';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const RewardsPage: React.FC = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [selectedItem, setSelectedItem] = useState<RewardItem | null>(null);
    const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
    const [myOrders, setMyOrders] = useState<any[]>([]);
    const [userStreak, setUserStreak] = useState(0);
    const [successfulCompiles, setSuccessfulCompiles] = useState(0);
    const [loading, setLoading] = useState(true);

    // Daily Check-in & Secret Box states
    const [hasCheckedInToday, setHasCheckedInToday] = useState(() => {
        const todayStr = new Date().toDateString();
        return localStorage.getItem('adv_last_checkin_date') === todayStr;
    });
    const [bonusCheckinCoins, setBonusCheckinCoins] = useState(() => {
        return parseInt(localStorage.getItem('adv_bonus_checkin_coins') || '0', 10);
    });
    const [secretClaimed, setSecretClaimed] = useState(() => {
        return localStorage.getItem('adv_secret_box_claimed') === 'true';
    });
    const [showClaimToast, setShowClaimToast] = useState<string | null>(null);

    const [selectedCategory, setSelectedCategory] = useState<'all' | 'gear' | 'apparel' | 'accessories' | 'stationery'>('all');

    const fetchUserData = async () => {
        const token = localStorage.getItem('adv_coder_token');
        if (!token) {
            setLoading(false);
            return;
        }

        try {
            const profileRes = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:8080'}/api/auth/profile`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (profileRes.ok) {
                const profileData = await profileRes.json();
                setUserStreak(profileData.streak || 0);
                setSuccessfulCompiles(profileData.successfulCompiles || 0);
            }

            const ordersRes = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:8080'}/api/rewards/my-orders`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (ordersRes.ok) {
                const ordersData = await ordersRes.json();
                setMyOrders(ordersData);
            }
        } catch (e) {
            console.error('Failed to fetch rewards user data:', e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUserData();
    }, [user]);

    const handleDailyCheckin = () => {
        if (!user) {
            window.dispatchEvent(new CustomEvent('open_auth_modal'));
            return;
        }
        if (hasCheckedInToday) return;

        const todayStr = new Date().toDateString();
        localStorage.setItem('adv_last_checkin_date', todayStr);
        const newBonus = bonusCheckinCoins + 1;
        localStorage.setItem('adv_bonus_checkin_coins', newBonus.toString());
        setBonusCheckinCoins(newBonus);
        setHasCheckedInToday(true);
        setShowClaimToast('🎉 +1 Daily Check-in Coin added to your wallet!');
        setTimeout(() => setShowClaimToast(null), 3500);
    };

    const handleClaimSecretBox = () => {
        if (!user) {
            window.dispatchEvent(new CustomEvent('open_auth_modal'));
            return;
        }
        if (secretClaimed) return;

        localStorage.setItem('adv_secret_box_claimed', 'true');
        const newBonus = bonusCheckinCoins + 10;
        localStorage.setItem('adv_bonus_checkin_coins', newBonus.toString());
        setBonusCheckinCoins(newBonus);
        setSecretClaimed(true);
        setShowClaimToast('🎁 Amazing! You found the Secret Mystery Gift: +10 Free Coins added!');
        setTimeout(() => setShowClaimToast(null), 4000);
    };

    const spentCoins = myOrders.reduce((acc, o) => acc + (o.coinCost || 0), 0);
    const coinData = calculateUserCoins(
        userStreak, 
        successfulCompiles, 
        spentCoins, 
        bonusCheckinCoins, 
        successfulCompiles > 0 ? 1 : 0
    );

    const filteredItems = selectedCategory === 'all' 
        ? SWAG_CATALOG 
        : SWAG_CATALOG.filter(item => item.category === selectedCategory);

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-[#070b13] pt-32 sm:pt-36 md:pt-40 pb-16 px-4 sm:px-6 lg:px-8 font-sans">
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

                        {/* Coin Wallet Card */}
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
                        </div>
                    </div>
                </motion.div>

                {/* ⚡ Quick Daily Actions Hub (Check-in, POTD & Secret Gift) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {/* 1. Daily Check-in */}
                    <div className="bg-white dark:bg-[#0c1222] border border-gray-200/60 dark:border-white/5 rounded-3xl p-5 shadow-sm flex items-center justify-between gap-4">
                        <div className="space-y-1">
                            <span className="text-[10px] font-black uppercase tracking-wider text-amber-500 flex items-center gap-1">
                                <Calendar className="w-3.5 h-3.5" />
                                Daily Check-in
                            </span>
                            <h3 className="text-sm font-black text-gray-900 dark:text-white">
                                Claim Daily Login Coin
                            </h3>
                            <p className="text-[11px] text-gray-400 font-semibold">Earn +1 free coin every 24 hours.</p>
                        </div>
                        <button
                            onClick={handleDailyCheckin}
                            disabled={hasCheckedInToday}
                            className={`px-4 py-2.5 rounded-2xl text-xs font-black shrink-0 transition-all shadow-sm flex items-center gap-1.5 cursor-pointer ${
                                hasCheckedInToday
                                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 cursor-default'
                                    : 'bg-gradient-to-r from-amber-500 to-orange-600 text-white hover:brightness-110 active:scale-95'
                            }`}
                        >
                            {hasCheckedInToday ? (
                                <>
                                    <Check className="w-3.5 h-3.5" />
                                    <span>Claimed ✓</span>
                                </>
                            ) : (
                                <>
                                    <span>🪙 Claim +1</span>
                                </>
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
                            <h3 className="text-sm font-black text-gray-900 dark:text-white">
                                Solve Today's Challenge
                            </h3>
                            <p className="text-[11px] text-gray-400 font-semibold">Earn +10 coins on completion.</p>
                        </div>
                        <button
                            onClick={() => navigate('/practice')}
                            className="px-4 py-2.5 rounded-2xl text-xs font-black shrink-0 bg-red-600 hover:bg-red-500 text-white transition-all shadow-sm flex items-center gap-1.5 cursor-pointer active:scale-95"
                        >
                            <span>Solve (+10 🪙)</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                    </div>

                    {/* 3. Secret Mystery Gift */}
                    <div className="bg-white dark:bg-[#0c1222] border border-gray-200/60 dark:border-white/5 rounded-3xl p-5 shadow-sm flex items-center justify-between gap-4">
                        <div className="space-y-1">
                            <span className="text-[10px] font-black uppercase tracking-wider text-pink-500 flex items-center gap-1">
                                <Box className="w-3.5 h-3.5" />
                                Secret Mystery Gift
                            </span>
                            <h3 className="text-sm font-black text-gray-900 dark:text-white">
                                Easter Egg Reward
                            </h3>
                            <p className="text-[11px] text-gray-400 font-semibold">Hidden surprise for active learners.</p>
                        </div>
                        <button
                            onClick={handleClaimSecretBox}
                            disabled={secretClaimed}
                            className={`px-4 py-2.5 rounded-2xl text-xs font-black shrink-0 transition-all shadow-sm flex items-center gap-1.5 cursor-pointer ${
                                secretClaimed
                                    ? 'bg-pink-500/10 text-pink-400 border border-pink-500/20 cursor-default'
                                    : 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:brightness-110 active:scale-95'
                            }`}
                        >
                            {secretClaimed ? (
                                <>
                                    <Check className="w-3.5 h-3.5" />
                                    <span>Claimed ✓</span>
                                </>
                            ) : (
                                <>
                                    <span>🎁 Open (+10 🪙)</span>
                                </>
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
                            <h2 className="text-xl font-black text-gray-900 dark:text-white">
                                Ways to Earn ADV Coins
                            </h2>
                            <p className="text-xs text-gray-400 font-semibold">
                                Full breakdown of daily check-ins, POTD streak milestones, contests, and community contribution rewards.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {COIN_WAYS_CATALOGUE.map((category, idx) => (
                            <div 
                                key={idx} 
                                className="bg-gray-50 dark:bg-white/5 border border-gray-200/60 dark:border-white/5 rounded-2xl p-5 space-y-3.5"
                            >
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
                                    {/* Product Image */}
                                    <div className="h-48 rounded-2xl bg-slate-900 border border-white/5 overflow-hidden relative">
                                        <img 
                                            src={item.image} 
                                            alt={item.name} 
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                                        />
                                        <span className="absolute top-2.5 left-2.5 text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-amber-400 border border-white/15">
                                            {item.badgeLabel}
                                        </span>
                                        <span className="absolute bottom-2.5 right-2.5 text-xs font-black px-3 py-1 rounded-xl bg-black/80 backdrop-blur-md text-white border border-white/15 flex items-center gap-1">
                                            🪙 {item.coinCost} Coins
                                        </span>
                                    </div>

                                    {/* Product Details */}
                                    <div className="space-y-1.5">
                                        <h3 className="text-base font-black text-gray-900 dark:text-white line-clamp-1 group-hover:text-amber-400 transition-colors">
                                            {item.name}
                                        </h3>
                                        <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed font-medium">
                                            {item.description}
                                        </p>
                                    </div>

                                    {/* Highlights */}
                                    <div className="flex flex-wrap gap-1.5 pt-1">
                                        {item.highlights.map((h, idx) => (
                                            <span key={idx} className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400">
                                                {h}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Order Action */}
                                <div className="pt-5 mt-4 border-t border-gray-100 dark:border-white/5">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            if (!user) {
                                                window.dispatchEvent(new CustomEvent('open_auth_modal'));
                                                return;
                                            }
                                            setSelectedItem(item);
                                            setIsOrderModalOpen(true);
                                        }}
                                        disabled={Boolean(user && !canAfford)}
                                        className={`w-full py-3 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer ${
                                            !user
                                                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                                                : canAfford
                                                    ? 'bg-gradient-to-r from-amber-500 to-red-600 hover:brightness-110 text-white active:scale-95'
                                                    : 'bg-gray-100 dark:bg-white/5 text-gray-400 dark:text-gray-500 cursor-not-allowed'
                                        }`}
                                    >
                                        {!user ? (
                                            <span>Sign In to Redeem</span>
                                        ) : canAfford ? (
                                            <>
                                                <Gift className="w-4 h-4" />
                                                <span>Redeem / Order Now</span>
                                            </>
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
                            <span className="text-xs font-bold text-gray-400">
                                {myOrders.length} Orders Placed
                            </span>
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
                                                <td className="py-3 font-mono font-bold text-amber-400">
                                                    #ADV-SWAG-{ord.id}
                                                </td>
                                                <td className="py-3 font-bold text-white">
                                                    {ord.itemName} {ord.apparelSize ? `(${ord.apparelSize})` : ''}
                                                </td>
                                                <td className="py-3 font-bold text-amber-400">
                                                    🪙 {ord.coinCost}
                                                </td>
                                                <td className="py-3">
                                                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                                        {ord.status}
                                                    </span>
                                                </td>
                                                <td className="py-3 font-mono text-gray-400">
                                                    {ord.trackingNumber || 'Pending'}
                                                </td>
                                                <td className="py-3 text-right text-gray-400">
                                                    {new Date(ord.createdAt).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}
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

                {/* Reward Order Modal */}
                <RewardOrderModal
                    isOpen={isOrderModalOpen}
                    onClose={() => setIsOrderModalOpen(false)}
                    item={selectedItem}
                    availableCoins={coinData.availableCoins}
                    onOrderSuccess={() => {
                        fetchUserData();
                    }}
                />

            </div>
        </div>
    );
};

export default RewardsPage;