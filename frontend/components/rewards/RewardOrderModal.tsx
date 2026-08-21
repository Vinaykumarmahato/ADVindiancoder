import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    X, ShoppingBag, Truck, CheckCircle2, AlertCircle, 
    Coins, MapPin, Phone, User, Sparkles, Loader2, PackageCheck, ArrowRight,
    CreditCard, QrCode, ShieldCheck, MessageSquare
} from 'lucide-react';
import { RewardItem } from '../../utils/rewards';
import { useAuth } from '../../contexts/AuthContext';

interface RewardOrderModalProps {
    isOpen: boolean;
    onClose: () => void;
    item: RewardItem | null;
    availableCoins: number;
    initialMode?: 'coins' | 'cash';
    onOrderSuccess?: () => void;
}

const RewardOrderModal: React.FC<RewardOrderModalProps> = ({
    isOpen,
    onClose,
    item,
    availableCoins,
    initialMode = 'coins',
    onOrderSuccess
}) => {
    const { user } = useAuth();
    const [purchaseMode, setPurchaseMode] = useState<'coins' | 'cash'>(initialMode);
    const [fullName, setFullName] = useState(user?.name || '');
    const [phone, setPhone] = useState('');
    const [addressLine, setAddressLine] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [pincode, setPincode] = useState('');
    const [apparelSize, setApparelSize] = useState('L');
    const [paymentMethod, setPaymentMethod] = useState<'upi' | 'cod'>('upi');

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [orderResult, setOrderResult] = useState<{
        orderId: number;
        trackingNumber: string;
        message: string;
    } | null>(null);

    useEffect(() => {
        setPurchaseMode(initialMode);
    }, [initialMode, isOpen]);

    if (!isOpen || !item) return null;

    const canAffordCoins = availableCoins >= item.coinCost;

    const handleSubmitOrder = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        if (purchaseMode === 'coins' && !canAffordCoins) {
            setError(`Insufficient coins! You need ${item.coinCost - availableCoins} more coins to redeem this item, or you can switch to "Buy with INR (₹)".`);
            return;
        }

        if (!fullName.trim() || !phone.trim() || !addressLine.trim() || !city.trim() || !pincode.trim()) {
            setError('Please fill in all required shipping address fields.');
            return;
        }

        setLoading(true);

        try {
            const token = localStorage.getItem('adv_coder_token');
            const res = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:8080'}/api/rewards/order`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    ...(token ? { 'Authorization': `Bearer ${token}` } : {})
                },
                body: JSON.stringify({
                    itemId: item.id,
                    itemName: `${item.name} (${purchaseMode === 'coins' ? 'Coin Redeem' : `Direct Purchase ₹${item.inrPrice}`})`,
                    itemCategory: item.category,
                    coinCost: purchaseMode === 'coins' ? item.coinCost : 0,
                    fullName: fullName.trim(),
                    phone: phone.trim(),
                    addressLine: addressLine.trim(),
                    city: city.trim(),
                    state: state.trim() || 'India',
                    pincode: pincode.trim(),
                    apparelSize: item.category === 'apparel' ? apparelSize : null
                })
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || 'Failed to place swag order. Please check details.');
            }

            setOrderResult({
                orderId: data.orderId || Math.floor(1000 + Math.random() * 9000),
                trackingNumber: data.trackingNumber || `ADV-${Math.floor(100000 + Math.random() * 900000)}`,
                message: data.message || 'Order placed successfully!'
            });

            if (onOrderSuccess) onOrderSuccess();
        } catch (err: any) {
            setError(err.message || 'Network error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleWhatsAppDirectOrder = () => {
        const text = encodeURIComponent(
            `Hello ADV Indian Coder Team! 🚀\nI would like to directly purchase the official merchandise:\n\n` +
            `📦 *Item*: ${item.name}\n` +
            `💰 *Price*: ₹${item.inrPrice} (Free Shipping)\n` +
            (item.category === 'apparel' ? `👕 *Size*: ${apparelSize}\n` : '') +
            `👤 *Name*: ${fullName || user?.name || 'Developer'}\n` +
            `📞 *Phone*: ${phone || 'N/A'}\n` +
            `📍 *Delivery Address*: ${addressLine}, ${city}, ${state} - ${pincode}\n\n` +
            `Please confirm my order and share UPI payment details!`
        );
        window.open(`https://wa.me/919999999999?text=${text}`, '_blank');
    };

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto font-sans">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    className="relative w-full max-w-xl bg-white dark:bg-[#0c1222] border border-gray-200 dark:border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden my-8"
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-5 right-5 p-2 rounded-full bg-gray-100 dark:bg-white/5 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer"
                    >
                        <X className="w-4 h-4" />
                    </button>

                    {orderResult ? (
                        <div className="text-center py-6 space-y-6">
                            <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/20">
                                <PackageCheck className="w-8 h-8" />
                            </div>

                            <div className="space-y-2">
                                <span className="text-xs font-black uppercase tracking-wider text-emerald-500">
                                    Order Confirmed & Processing
                                </span>
                                <h2 className="text-2xl font-black text-gray-900 dark:text-white">
                                    Thank You, {fullName}! 🎁
                                </h2>
                                <p className="text-xs text-gray-400 font-medium max-w-md mx-auto leading-relaxed">
                                    Your order for <strong>{item.name}</strong> has been registered. An official confirmation email with tracking has been sent to your registered address.
                                </p>
                            </div>

                            <div className="p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 text-left text-xs space-y-2">
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Order ID:</span>
                                    <span className="font-mono font-bold text-amber-500">#ADV-SWAG-{orderResult.orderId}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Tracking Code:</span>
                                    <span className="font-mono font-bold text-gray-800 dark:text-white">{orderResult.trackingNumber}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Delivery Address:</span>
                                    <span className="text-right text-gray-800 dark:text-gray-200 font-medium">{city}, {state || 'India'} - {pincode}</span>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 pt-2">
                                <button
                                    onClick={onClose}
                                    className="flex-1 py-3 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-black text-xs hover:opacity-90 transition-all cursor-pointer"
                                >
                                    Done / Back to Store
                                </button>
                                <button
                                    onClick={handleWhatsAppDirectOrder}
                                    className="flex-1 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                                >
                                    <MessageSquare className="w-4 h-4" />
                                    <span>Track on WhatsApp</span>
                                </button>
                            </div>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmitOrder} className="space-y-6">
                            {/* Product Header */}
                            <div className="flex items-center gap-4 border-b border-gray-100 dark:border-white/5 pb-5">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-16 h-16 rounded-2xl object-cover border border-white/10 shrink-0"
                                />
                                <div className="space-y-1">
                                    <span className="text-[10px] font-black uppercase tracking-wider text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
                                        {item.badgeLabel}
                                    </span>
                                    <h3 className="text-base font-black text-gray-900 dark:text-white leading-snug">
                                        {item.name}
                                    </h3>
                                    <p className="text-xs text-gray-400 line-clamp-1">{item.description}</p>
                                </div>
                            </div>

                            {/* Purchase Mode Toggle (Coins vs Direct INR) */}
                            <div className="grid grid-cols-2 gap-3 p-1.5 bg-gray-100 dark:bg-white/5 rounded-2xl">
                                <button
                                    type="button"
                                    onClick={() => { setPurchaseMode('coins'); setError(null); }}
                                    className={`py-2.5 px-3 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                                        purchaseMode === 'coins'
                                            ? 'bg-amber-500 text-white shadow-md'
                                            : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'
                                    }`}
                                >
                                    <Coins className="w-4 h-4" />
                                    <span>Redeem ({item.coinCost} 🪙)</span>
                                </button>
                                <button
                                    type="button"
                                    onClick={() => { setPurchaseMode('cash'); setError(null); }}
                                    className={`py-2.5 px-3 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                                        purchaseMode === 'cash'
                                            ? 'bg-red-600 text-white shadow-md'
                                            : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'
                                    }`}
                                >
                                    <ShoppingBag className="w-4 h-4" />
                                    <span>Buy Direct (₹{item.inrPrice})</span>
                                </button>
                            </div>

                            {/* Mode Explainer Banner */}
                            {purchaseMode === 'coins' ? (
                                <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-amber-500 font-bold">
                                        <Coins className="w-4 h-4" />
                                        <span>Your Coin Balance: {availableCoins} 🪙</span>
                                    </div>
                                    <span className={`text-[11px] font-black ${canAffordCoins ? 'text-emerald-400' : 'text-red-400'}`}>
                                        {canAffordCoins ? 'Eligible for Free Swag ✓' : `Need ${item.coinCost - availableCoins} more`}
                                    </span>
                                </div>
                            ) : (
                                <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-xs flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-emerald-400 font-bold">
                                        <Truck className="w-4 h-4" />
                                        <span>Direct Store Order: ₹{item.inrPrice} <span className="line-through text-gray-500 text-[10px]">₹{item.originalPrice}</span></span>
                                    </div>
                                    <span className="text-[11px] font-black text-emerald-400">
                                        100% Free Shipping Pan-India 🇮🇳
                                    </span>
                                </div>
                            )}

                            {/* Apparel Size Selection */}
                            {item.category === 'apparel' && (
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-400 block">Select Apparel Size</label>
                                    <div className="flex gap-2">
                                        {['S', 'M', 'L', 'XL', 'XXL'].map(sz => (
                                            <button
                                                type="button"
                                                key={sz}
                                                onClick={() => setApparelSize(sz)}
                                                className={`flex-1 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
                                                    apparelSize === sz
                                                        ? 'bg-red-600 text-white'
                                                        : 'bg-gray-100 dark:bg-white/5 text-gray-400 border border-gray-200 dark:border-white/5'
                                                }`}
                                            >
                                                {sz}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Shipping Address Form */}
                            <div className="space-y-3">
                                <h4 className="text-xs font-black uppercase tracking-wider text-gray-400 flex items-center gap-1.5">
                                    <MapPin className="w-4 h-4 text-red-500" />
                                    Shipping & Delivery Details
                                </h4>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <input
                                        type="text"
                                        placeholder="Full Name *"
                                        required
                                        value={fullName}
                                        onChange={e => setFullName(e.target.value)}
                                        className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-xs font-semibold text-gray-800 dark:text-white outline-none focus:border-amber-500"
                                    />
                                    <input
                                        type="tel"
                                        placeholder="Mobile Phone Number *"
                                        required
                                        value={phone}
                                        onChange={e => setPhone(e.target.value)}
                                        className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-xs font-semibold text-gray-800 dark:text-white outline-none focus:border-amber-500"
                                    />
                                </div>

                                <input
                                    type="text"
                                    placeholder="Street Address / Flat / Landmark *"
                                    required
                                    value={addressLine}
                                    onChange={e => setAddressLine(e.target.value)}
                                    className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-xs font-semibold text-gray-800 dark:text-white outline-none focus:border-amber-500"
                                />

                                <div className="grid grid-cols-3 gap-3">
                                    <input
                                        type="text"
                                        placeholder="City *"
                                        required
                                        value={city}
                                        onChange={e => setCity(e.target.value)}
                                        className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-xs font-semibold text-gray-800 dark:text-white outline-none focus:border-amber-500"
                                    />
                                    <input
                                        type="text"
                                        placeholder="State *"
                                        value={state}
                                        onChange={e => setState(e.target.value)}
                                        className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-xs font-semibold text-gray-800 dark:text-white outline-none focus:border-amber-500"
                                    />
                                    <input
                                        type="text"
                                        placeholder="PIN Code *"
                                        required
                                        value={pincode}
                                        onChange={e => setPincode(e.target.value)}
                                        className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-xs font-semibold text-gray-800 dark:text-white outline-none focus:border-amber-500"
                                    />
                                </div>
                            </div>

                            {/* Direct Cash / UPI Payment Mode */}
                            {purchaseMode === 'cash' && (
                                <div className="space-y-2 p-3.5 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10">
                                    <span className="text-[10px] font-black uppercase tracking-wider text-gray-400 block">
                                        Preferred Payment Method
                                    </span>
                                    <div className="grid grid-cols-2 gap-2 text-xs">
                                        <label className={`p-2.5 rounded-xl border flex items-center gap-2 cursor-pointer transition-all ${
                                            paymentMethod === 'upi'
                                                ? 'bg-red-500/10 border-red-500/40 text-red-500 font-bold'
                                                : 'border-gray-200 dark:border-white/5 text-gray-400'
                                        }`}>
                                            <input
                                                type="radio"
                                                name="payment"
                                                checked={paymentMethod === 'upi'}
                                                onChange={() => setPaymentMethod('upi')}
                                                className="hidden"
                                            />
                                            <QrCode className="w-4 h-4" />
                                            <span>UPI / QR / GPay</span>
                                        </label>
                                        <label className={`p-2.5 rounded-xl border flex items-center gap-2 cursor-pointer transition-all ${
                                            paymentMethod === 'cod'
                                                ? 'bg-red-500/10 border-red-500/40 text-red-500 font-bold'
                                                : 'border-gray-200 dark:border-white/5 text-gray-400'
                                        }`}>
                                            <input
                                                type="radio"
                                                name="payment"
                                                checked={paymentMethod === 'cod'}
                                                onChange={() => setPaymentMethod('cod')}
                                                className="hidden"
                                            />
                                            <Truck className="w-4 h-4" />
                                            <span>Cash on Delivery</span>
                                        </label>
                                    </div>
                                </div>
                            )}

                            {error && (
                                <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-xs text-red-400 flex items-center gap-2">
                                    <AlertCircle className="w-4 h-4 shrink-0" />
                                    <span>{error}</span>
                                </div>
                            )}

                            {/* Submit CTA */}
                            <div className="flex gap-3">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="flex-1 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-red-600 hover:brightness-110 text-white font-black text-xs flex items-center justify-center gap-2 shadow-lg shadow-red-500/20 active:scale-95 transition-all cursor-pointer disabled:opacity-50"
                                >
                                    {loading ? (
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                    ) : (
                                        <>
                                            <PackageCheck className="w-4 h-4" />
                                            <span>
                                                {purchaseMode === 'coins'
                                                    ? `Confirm Coin Order (${item.coinCost} 🪙)`
                                                    : `Place Merch Order (₹${item.inrPrice})`}
                                            </span>
                                        </>
                                    )}
                                </button>
                                <button
                                    type="button"
                                    onClick={handleWhatsAppDirectOrder}
                                    className="px-4 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                                    title="Order via WhatsApp Support"
                                >
                                    <MessageSquare className="w-4 h-4" />
                                    <span className="hidden sm:inline">WhatsApp</span>
                                </button>
                            </div>
                        </form>
                    )}
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default RewardOrderModal;