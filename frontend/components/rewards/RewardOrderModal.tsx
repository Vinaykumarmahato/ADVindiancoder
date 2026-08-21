import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    X, ShoppingBag, Truck, CheckCircle2, AlertCircle, 
    Coins, MapPin, Phone, User, Sparkles, Loader2, PackageCheck, ArrowRight,
    CreditCard, QrCode, ShieldCheck, MessageSquare, Copy, Check
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
    const [utrNumber, setUtrNumber] = useState('');
    const [copiedUpi, setCopiedUpi] = useState(false);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [orderResult, setOrderResult] = useState<{
        orderId: number;
        trackingNumber: string;
        message: string;
        paymentType?: string;
    } | null>(null);

    const handleClose = () => {
        setOrderResult(null);
        setError(null);
        setLoading(false);
        setUtrNumber('');
        onClose();
    };

    useEffect(() => {
        if (isOpen) {
            setPurchaseMode(initialMode);
            setOrderResult(null);
            setError(null);
            setLoading(false);
            setUtrNumber('');
        }
    }, [isOpen, item?.id, initialMode]);

    // Anti-screenshot & keyboard shortcut protection inside payment modal
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (
                e.key === 'PrintScreen' ||
                (e.ctrlKey && (e.key === 's' || e.key === 'p' || e.key === 'u')) ||
                ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'I' || e.key === 'C' || e.key === 'J'))
            ) {
                e.preventDefault();
            }
        };

        if (isOpen) {
            window.addEventListener('keydown', handleKeyDown);
        }
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen]);

    if (!isOpen || !item) return null;

    const canAffordCoins = availableCoins >= item.coinCost;

    const OFFICIAL_UPI_ID = '9931860964@okbizaxis';

    const handleCopyUpi = () => {
        navigator.clipboard.writeText(OFFICIAL_UPI_ID);
        setCopiedUpi(true);
        setTimeout(() => setCopiedUpi(false), 2500);
    };

    const handleSubmitOrder = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        if (!user) {
            window.dispatchEvent(new CustomEvent('open_auth_modal'));
            setError('Please sign in or create an account so your order and tracking details are linked to your profile dashboard.');
            return;
        }

        if (purchaseMode === 'coins' && !canAffordCoins) {
            setError(`Insufficient coins! You need ${item.coinCost - availableCoins} more coins to redeem this item, or you can switch to "Buy with INR (₹)".`);
            return;
        }

        if (!fullName.trim() || !phone.trim() || !addressLine.trim() || !city.trim() || !pincode.trim()) {
            setError('Please fill in all required shipping address fields.');
            return;
        }

        if (purchaseMode === 'cash' && paymentMethod === 'upi' && !utrNumber.trim()) {
            setError('Please enter the 12-digit UPI UTR / Transaction Reference ID after scanning the QR code.');
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
                    itemName: `${item.name} (${purchaseMode === 'coins' ? 'Coin Redeem' : paymentMethod === 'cod' ? `COD ₹${item.inrPrice}` : `UPI Paid ₹${item.inrPrice}`})`,
                    itemCategory: item.category,
                    coinCost: purchaseMode === 'coins' ? item.coinCost : 0,
                    fullName: fullName.trim(),
                    phone: phone.trim(),
                    addressLine: addressLine.trim(),
                    city: city.trim(),
                    state: state.trim() || 'India',
                    pincode: pincode.trim(),
                    apparelSize: item.category === 'apparel' ? apparelSize : null,
                    paymentMethod: purchaseMode === 'coins' ? 'COINS' : paymentMethod.toUpperCase(),
                    transactionId: purchaseMode === 'cash' && paymentMethod === 'upi' ? utrNumber.trim() : null
                })
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || 'Failed to place swag order. Please check details.');
            }

            setOrderResult({
                orderId: data.orderId || Math.floor(1000 + Math.random() * 9000),
                trackingNumber: data.trackingNumber || `ADV-${Math.floor(100000 + Math.random() * 900000)}`,
                message: data.message || 'Order placed successfully!',
                paymentType: purchaseMode === 'coins' ? 'COINS' : paymentMethod.toUpperCase()
            });

            if (onOrderSuccess) onOrderSuccess();
        } catch (err: any) {
            setError(err.message || 'Network error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleWhatsAppDirectOrder = () => {
        if (!user) {
            window.dispatchEvent(new CustomEvent('open_auth_modal'));
            setError('Please sign in or create an account to link this order with your profile.');
            return;
        }

        if (purchaseMode === 'coins' && !canAffordCoins) {
            setError(`Insufficient coins! You need ${item.coinCost - availableCoins} more coins to redeem with coins. Please switch to "Buy Direct (₹)" to order with money.`);
            return;
        }

        if (!fullName.trim() || !phone.trim() || !addressLine.trim() || !city.trim() || !pincode.trim()) {
            setError('Please fill in your complete shipping address details before ordering via WhatsApp.');
            return;
        }

        let message = '';
        if (paymentMethod === 'cod') {
            message = 
                `Hello ADV Indian Coder Team! 📦\n` +
                `I would like to place a *Cash on Delivery (COD)* Order for official merchandise:\n\n` +
                `📦 *Item*: ${item.name}\n` +
                `💵 *Payment Mode*: Cash on Delivery (COD)\n` +
                `💰 *Amount Payable on Delivery*: ₹${item.inrPrice} (Free Shipping)\n` +
                (item.category === 'apparel' ? `👕 *Size*: ${apparelSize}\n` : '') +
                `👤 *Customer Name*: ${fullName || user?.name || 'Developer'}\n` +
                `📞 *Phone Number*: ${phone || 'N/A'}\n` +
                `📍 *Delivery Address*: ${addressLine}, ${city}, ${state || 'India'} - ${pincode}\n\n` +
                `Please confirm my Cash on Delivery order and share dispatch updates!`;
        } else {
            message = 
                `Hello ADV Indian Coder Team! 🚀\n` +
                `I have made the *UPI / Online Payment* for official merchandise:\n\n` +
                `📦 *Item*: ${item.name}\n` +
                `💳 *Payment Mode*: UPI / QR / GPay Online Paid\n` +
                `💰 *Amount Paid*: ₹${item.inrPrice} (Free Shipping)\n` +
                `🔢 *Transaction / UTR Reference*: ${utrNumber || 'Paid via QR Code'}\n` +
                (item.category === 'apparel' ? `👕 *Size*: ${apparelSize}\n` : '') +
                `👤 *Customer Name*: ${fullName || user?.name || 'Developer'}\n` +
                `📞 *Phone Number*: ${phone || 'N/A'}\n` +
                `📍 *Delivery Address*: ${addressLine}, ${city}, ${state || 'India'} - ${pincode}\n\n` +
                `Please verify my payment and confirm order dispatch!`;
        }

        window.open(`https://wa.me/919931860964?text=${encodeURIComponent(message)}`, '_blank');
    };

    const handleWhatsAppTrackOrder = () => {
        const paymentLabel = purchaseMode === 'coins' 
            ? '🪙 Paid via ADV Coins' 
            : orderResult?.paymentType === 'COD' 
                ? `💵 Cash on Delivery (Pay ₹${item.inrPrice} upon delivery)` 
                : `✅ Online Paid via UPI (₹${item.inrPrice}) ${utrNumber ? `[UTR: ${utrNumber}]` : ''}`;

        const text = encodeURIComponent(
            `Hello ADV Indian Coder Support! 📦\n` +
            `I would like to track my swag order status:\n\n` +
            `🆔 *Order ID*: #ADV-SWAG-${orderResult?.orderId || 'PENDING'}\n` +
            `🚚 *Tracking Code*: ${orderResult?.trackingNumber || 'PENDING'}\n` +
            `💳 *Payment Status*: ${paymentLabel}\n` +
            `📦 *Item*: ${item?.name}\n` +
            `👤 *Customer*: ${fullName || user?.name || 'Developer'}\n` +
            `📞 *Phone*: ${phone || 'N/A'}\n` +
            `📍 *Address*: ${addressLine ? `${addressLine}, ` : ''}${city}, ${state || 'India'} - ${pincode}\n\n` +
            `Please share the latest courier status and delivery ETA!`
        );
        window.open(`https://wa.me/919931860964?text=${text}`, '_blank');
    };

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[2500] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl overflow-y-auto font-sans">
                {/* Backdrop click */}
                <div className="fixed inset-0" onClick={handleClose} aria-hidden="true" />

                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ type: "spring", damping: 25, stiffness: 350 }}
                    className="relative w-full max-w-xl bg-white dark:bg-[#0c1222] border border-gray-200 dark:border-white/10 rounded-3xl p-6 sm:p-8 shadow-[0_25px_70px_rgba(0,0,0,0.8)] overflow-hidden my-auto z-10"
                >
                    {/* Close Button */}
                    <button
                        onClick={handleClose}
                        className="absolute top-5 right-5 p-2 rounded-full bg-gray-100 dark:bg-white/5 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer z-20"
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

                            <div className="p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 text-left text-xs space-y-2.5">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-400">Order ID:</span>
                                    <span className="font-mono font-bold text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded-lg border border-amber-500/20">
                                        #ADV-SWAG-{orderResult.orderId}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-400">Tracking Code:</span>
                                    <span className="font-mono font-bold text-gray-800 dark:text-white">{orderResult.trackingNumber}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-400">Payment Status:</span>
                                    <span className={`font-bold px-2 py-0.5 rounded-md text-[11px] ${
                                        purchaseMode === 'coins'
                                            ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20'
                                            : orderResult.paymentType === 'COD'
                                                ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                                                : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                                    }`}>
                                        {purchaseMode === 'coins'
                                            ? `🪙 ${item.coinCost} Coins Deducted`
                                            : orderResult.paymentType === 'COD'
                                                ? `🚚 COD: Pay ₹${item.inrPrice} on Delivery`
                                                : `✅ UPI Paid ₹${item.inrPrice}${utrNumber ? ` (UTR: ${utrNumber})` : ''}`}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-400">Delivery Address:</span>
                                    <span className="text-right text-gray-800 dark:text-gray-200 font-medium truncate max-w-[200px]">
                                        {city}, {state || 'India'} - {pincode}
                                    </span>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 pt-2">
                                <button
                                    onClick={handleClose}
                                    className="flex-1 py-3 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-black text-xs hover:opacity-90 transition-all cursor-pointer"
                                >
                                    Done / Back to Store
                                </button>
                                <button
                                    onClick={handleWhatsAppTrackOrder}
                                    className="flex-1 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
                                >
                                    <MessageSquare className="w-4 h-4" />
                                    <span>Track on WhatsApp (9931860964)</span>
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
                                <div className="space-y-4 p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] font-black uppercase tracking-wider text-gray-400 block">
                                            Preferred Payment Method
                                        </span>
                                        <span className="text-[10px] font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                                            Free Express Delivery ⚡
                                        </span>
                                    </div>

                                    <div className="grid grid-cols-2 gap-2 text-xs">
                                        <label className={`p-3 rounded-xl border flex items-center gap-2.5 cursor-pointer transition-all ${
                                            paymentMethod === 'upi'
                                                ? 'bg-gradient-to-r from-red-500/15 to-orange-500/15 border-red-500 text-red-500 font-black shadow-sm ring-1 ring-red-500/30'
                                                : 'border-gray-200 dark:border-white/10 text-gray-400 hover:border-gray-300'
                                        }`}>
                                            <input
                                                type="radio"
                                                name="payment"
                                                checked={paymentMethod === 'upi'}
                                                onChange={() => {
                                                    setPaymentMethod('upi');
                                                    setError(null);
                                                }}
                                                className="hidden"
                                            />
                                            <QrCode className="w-4 h-4 shrink-0" />
                                            <div className="flex flex-col text-left">
                                                <span className="text-xs font-bold leading-tight">UPI / QR / GPay</span>
                                                <span className="text-[9px] opacity-75 font-normal">Instant & Verified</span>
                                            </div>
                                        </label>

                                        <label className={`p-3 rounded-xl border flex items-center gap-2.5 cursor-pointer transition-all ${
                                            paymentMethod === 'cod'
                                                ? 'bg-gradient-to-r from-amber-500/15 to-orange-500/15 border-amber-500 text-amber-500 font-black shadow-sm ring-1 ring-amber-500/30'
                                                : 'border-gray-200 dark:border-white/10 text-gray-400 hover:border-gray-300'
                                        }`}>
                                            <input
                                                type="radio"
                                                name="payment"
                                                checked={paymentMethod === 'cod'}
                                                onChange={() => {
                                                    setPaymentMethod('cod');
                                                    setError(null);
                                                }}
                                                className="hidden"
                                            />
                                            <Truck className="w-4 h-4 shrink-0" />
                                            <div className="flex flex-col text-left">
                                                <span className="text-xs font-bold leading-tight">Cash on Delivery</span>
                                                <span className="text-[9px] opacity-75 font-normal">Pay cash at doorstep</span>
                                            </div>
                                        </label>
                                    </div>

                                    {/* UPI / QR Payment Details Panel */}
                                    {paymentMethod === 'upi' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="pt-2 border-t border-gray-200 dark:border-white/10 space-y-3"
                                        >
                                            <div 
                                                onContextMenu={e => e.preventDefault()}
                                                className="bg-white dark:bg-[#070b14] border border-gray-200 dark:border-white/10 p-4 rounded-2xl text-center space-y-3 select-none relative overflow-hidden"
                                                style={{ WebkitUserSelect: 'none', userSelect: 'none' }}
                                            >
                                                {/* Security Watermark Badge */}
                                                <div className="flex items-center justify-between px-1 border-b border-gray-100 dark:border-white/5 pb-2">
                                                    <div className="flex items-center gap-1.5 text-[10px] font-black text-emerald-500 uppercase tracking-wider">
                                                        <ShieldCheck className="w-3.5 h-3.5" />
                                                        <span>Official Google Pay Merchant</span>
                                                    </div>
                                                    <span className="text-[9px] font-mono text-gray-400 font-bold bg-gray-100 dark:bg-white/5 px-2 py-0.5 rounded-full">
                                                        256-Bit SSL Protected
                                                    </span>
                                                </div>

                                                <div className="flex items-center justify-between px-1">
                                                    <span className="text-xs font-black text-gray-800 dark:text-white">
                                                        ADV Indian Coder
                                                    </span>
                                                    <span className="text-[11px] font-black text-red-500 bg-red-500/10 px-2.5 py-0.5 rounded-full">
                                                        Amount: ₹{item.inrPrice}
                                                    </span>
                                                </div>

                                                {/* Secure QR Image Container with Anti-Copy / Anti-Drag Overlay */}
                                                <div 
                                                    className="relative inline-block mx-auto rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-100 dark:border-white/15 bg-white p-2"
                                                    onContextMenu={e => e.preventDefault()}
                                                >
                                                    <img
                                                        src="/assets/QR_payment.jpg"
                                                        alt="ADV Official UPI Payment QR Code"
                                                        draggable={false}
                                                        onDragStart={e => e.preventDefault()}
                                                        className="w-48 h-auto object-contain rounded-xl select-none pointer-events-none"
                                                        style={{ WebkitTouchCallout: 'none', userSelect: 'none' }}
                                                    />
                                                    {/* Invisible anti-inspection click shield */}
                                                    <div 
                                                        className="absolute inset-0 bg-transparent cursor-default pointer-events-auto" 
                                                        onContextMenu={e => e.preventDefault()}
                                                        onDragStart={e => e.preventDefault()}
                                                        title="Protected Official QR Code"
                                                    />
                                                </div>

                                                {/* Copy UPI ID Pill */}
                                                <div className="flex items-center justify-between gap-2 p-2.5 px-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-xs">
                                                    <div className="flex items-center gap-2 truncate text-left">
                                                        <span className="text-gray-400 text-[10px] uppercase font-bold">UPI ID:</span>
                                                        <span className="font-mono font-bold text-gray-900 dark:text-white text-xs truncate">
                                                            {OFFICIAL_UPI_ID}
                                                        </span>
                                                    </div>
                                                    <button
                                                        type="button"
                                                        onClick={handleCopyUpi}
                                                        className={`shrink-0 px-3 py-1 rounded-lg text-[10px] font-black flex items-center gap-1.5 transition-all cursor-pointer shadow-sm ${
                                                            copiedUpi
                                                                ? 'bg-emerald-500 text-white shadow-emerald-500/20'
                                                                : 'bg-gradient-to-r from-red-600 to-orange-500 text-white hover:brightness-110'
                                                        }`}
                                                    >
                                                        {copiedUpi ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                                                        <span>{copiedUpi ? 'Copied!' : 'Copy UPI'}</span>
                                                    </button>
                                                </div>
                                            </div>

                                            {/* UTR / Transaction Input */}
                                            <div className="space-y-1.5">
                                                <label className="text-[10px] font-black uppercase tracking-wider text-gray-400 block">
                                                    Enter 12-Digit UPI Reference / UTR Number *
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="e.g. 423589127890 (from GPay / PhonePe receipt)"
                                                    value={utrNumber}
                                                    onChange={e => {
                                                        setUtrNumber(e.target.value);
                                                        setError(null);
                                                    }}
                                                    className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-xs font-mono font-bold text-gray-800 dark:text-white outline-none focus:border-red-500"
                                                />
                                                <p className="text-[10px] text-gray-400">
                                                    💡 Scan the QR above, pay ₹{item.inrPrice}, and paste the 12-digit UTR ID to verify instantly.
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* Cash on Delivery Notice */}
                                    {paymentMethod === 'cod' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-400 space-y-1"
                                        >
                                            <div className="flex items-center gap-2 font-black">
                                                <Truck className="w-4 h-4 text-amber-500" />
                                                <span>Cash on Delivery Confirmed (Pay on Delivery)</span>
                                            </div>
                                            <p className="text-[11px] text-gray-400 leading-relaxed">
                                                You will pay <strong>₹{item.inrPrice}</strong> in cash directly to our delivery courier executive upon doorstep package delivery. Zero advance online payment required!
                                            </p>
                                        </motion.div>
                                    )}
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
                                {purchaseMode === 'coins' && !canAffordCoins ? (
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setPurchaseMode('cash');
                                            setError(null);
                                        }}
                                        className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 hover:brightness-110 text-white font-black text-xs flex items-center justify-center gap-2 shadow-lg shadow-orange-500/25 active:scale-95 transition-all cursor-pointer"
                                    >
                                        <ShoppingBag className="w-4 h-4" />
                                        <span>Need {item.coinCost - availableCoins} More Coins — Buy Direct with INR (₹{item.inrPrice})</span>
                                    </button>
                                ) : (
                                    <>
                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className={`flex-1 py-3.5 rounded-2xl text-white font-black text-xs flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all cursor-pointer disabled:opacity-50 ${
                                                purchaseMode === 'coins'
                                                    ? 'bg-gradient-to-r from-amber-500 to-orange-600 hover:brightness-110 shadow-amber-500/20'
                                                    : paymentMethod === 'cod'
                                                        ? 'bg-gradient-to-r from-amber-600 to-orange-600 hover:brightness-110 shadow-orange-500/20'
                                                        : 'bg-gradient-to-r from-red-600 to-rose-600 hover:brightness-110 shadow-red-500/20'
                                            }`}
                                        >
                                            {loading ? (
                                                <Loader2 className="w-4 h-4 animate-spin" />
                                            ) : (
                                                <>
                                                    <PackageCheck className="w-4 h-4" />
                                                    <span>
                                                        {purchaseMode === 'coins'
                                                            ? `Confirm Coin Order (${item.coinCost} 🪙)`
                                                            : paymentMethod === 'cod'
                                                                ? `Confirm Cash on Delivery Order (₹${item.inrPrice})`
                                                                : `Verify & Place UPI Order (₹${item.inrPrice})`}
                                                    </span>
                                                </>
                                            )}
                                        </button>
                                        {purchaseMode === 'cash' && (
                                            <button
                                                type="button"
                                                onClick={handleWhatsAppDirectOrder}
                                                className="px-4 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-md"
                                                title={paymentMethod === 'cod' ? 'Order via WhatsApp with Cash on Delivery' : 'Order via WhatsApp with UPI Payment'}
                                            >
                                                <MessageSquare className="w-4 h-4" />
                                                <span className="hidden sm:inline">
                                                    {paymentMethod === 'cod' ? 'WhatsApp (COD)' : `WhatsApp (UPI)`}
                                                </span>
                                            </button>
                                        )}
                                    </>
                                )}
                            </div>
                        </form>
                    )}
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default RewardOrderModal;