import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    X, ShoppingBag, Truck, CheckCircle2, AlertCircle, 
    Coins, MapPin, Phone, User, Sparkles, Loader2, PackageCheck, ArrowRight
} from 'lucide-react';
import { RewardItem } from '../../utils/rewards';
import { useAuth } from '../../contexts/AuthContext';

interface RewardOrderModalProps {
    isOpen: boolean;
    onClose: () => void;
    item: RewardItem | null;
    availableCoins: number;
    onOrderSuccess?: () => void;
}

const RewardOrderModal: React.FC<RewardOrderModalProps> = ({
    isOpen,
    onClose,
    item,
    availableCoins,
    onOrderSuccess
}) => {
    const { user } = useAuth();
    const [fullName, setFullName] = useState(user?.name || '');
    const [phone, setPhone] = useState('');
    const [addressLine, setAddressLine] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [pincode, setPincode] = useState('');
    const [apparelSize, setApparelSize] = useState('L');

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [orderResult, setOrderResult] = useState<{
        orderId: number;
        trackingNumber: string;
        message: string;
    } | null>(null);

    if (!isOpen || !item) return null;

    const canAfford = availableCoins >= item.coinCost;
    const remainingCoins = availableCoins - item.coinCost;

    const handleSubmitOrder = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        if (!canAfford) {
            setError(`Insufficient coins! You need ${item.coinCost - availableCoins} more coins to redeem this item.`);
            return;
        }

        if (!fullName.trim() || !phone.trim() || !addressLine.trim() || !city.trim() || !pincode.trim()) {
            setError('Please fill in all required shipping address fields.');
            return;
        }

        setLoading(true);

        const token = localStorage.getItem('adv_coder_token');
        if (!token) {
            setError('Please sign in to complete your order.');
            setLoading(false);
            return;
        }

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:8080'}/api/rewards/order`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    itemId: item.id,
                    itemName: item.name,
                    itemCategory: item.category,
                    coinCost: item.coinCost,
                    fullName,
                    phone,
                    addressLine,
                    city,
                    state: state || 'India',
                    pincode,
                    apparelSize: item.category === 'apparel' ? apparelSize : undefined
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Failed to place swag reward order.');
            }

            setOrderResult({
                orderId: data.orderId,
                trackingNumber: data.trackingNumber,
                message: data.message
            });

            if (onOrderSuccess) {
                onOrderSuccess();
            }
        } catch (err: any) {
            setError(err.message || 'Failed to place order.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[1260] flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/80 backdrop-blur-md"
                />

                <motion.div 
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className="relative w-full max-w-lg bg-[#0b1329] border border-white/15 rounded-3xl shadow-2xl z-10 flex flex-col max-h-[92vh] overflow-hidden my-auto"
                >
                    {/* Top Accent Strip */}
                    <div 
                        className="h-2 w-full absolute top-0 left-0 bg-gradient-to-r from-amber-500 via-red-500 to-orange-500"
                    />

                    {/* Close Button */}
                    <button 
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors z-20 cursor-pointer"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    {orderResult ? (
                        /* Success View */
                        <div className="p-8 text-center space-y-6 overflow-y-auto">
                            <div className="w-20 h-20 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto border-2 border-emerald-500/30">
                                <PackageCheck className="w-10 h-10" />
                            </div>

                            <div className="space-y-2">
                                <span className="text-xs font-black uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                                    Order Confirmed & Free Delivery
                                </span>
                                <h3 className="text-2xl font-black text-white">
                                    Your Swag is on its Way! 🎁
                                </h3>
                                <p className="text-xs text-gray-400 font-semibold leading-relaxed">
                                    {orderResult.message}
                                </p>
                            </div>

                            <div className="bg-slate-900/80 border border-white/10 rounded-2xl p-4 text-left text-xs space-y-2">
                                <div className="flex justify-between text-gray-400">
                                    <span>Item Claimed:</span>
                                    <span className="font-bold text-white">{item.name}</span>
                                </div>
                                <div className="flex justify-between text-gray-400">
                                    <span>Order Number:</span>
                                    <span className="font-mono font-bold text-amber-400">#ADV-SWAG-{orderResult.orderId}</span>
                                </div>
                                <div className="flex justify-between text-gray-400">
                                    <span>Tracking ID:</span>
                                    <span className="font-mono font-bold text-emerald-400">{orderResult.trackingNumber}</span>
                                </div>
                                <div className="flex justify-between text-gray-400">
                                    <span>Estimated Delivery:</span>
                                    <span className="font-bold text-gray-200">5-7 Business Days (100% Free)</span>
                                </div>
                            </div>

                            <button
                                onClick={onClose}
                                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-red-600 to-orange-500 text-white font-black text-xs shadow-lg hover:brightness-110 active:scale-95 transition-all cursor-pointer"
                            >
                                Done & Return to Dashboard
                            </button>
                        </div>
                    ) : (
                        /* Order Form View */
                        <form onSubmit={handleSubmitOrder} className="p-6 sm:p-8 flex flex-col flex-1 overflow-y-auto space-y-5">
                            
                            {/* Header */}
                            <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                                <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-white/10 overflow-hidden flex items-center justify-center shrink-0">
                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <span className="text-[10px] font-black uppercase text-amber-400 tracking-wider">
                                        Redeem Official Swag
                                    </span>
                                    <h3 className="text-base font-black text-white leading-tight line-clamp-1">
                                        {item.name}
                                    </h3>
                                    <div className="flex items-center gap-2 mt-1">
                                        <span className="flex items-center gap-1 text-xs font-black text-amber-400">
                                            <Coins className="w-3.5 h-3.5" />
                                            {item.coinCost} Coins
                                        </span>
                                        <span className="text-gray-500">•</span>
                                        <span className="text-[11px] text-gray-400 font-medium">
                                            Balance: <strong className="text-white">{availableCoins}</strong>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Error Alert */}
                            {error && (
                                <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-2xl flex items-center gap-2 text-xs text-red-400 font-semibold">
                                    <AlertCircle className="w-4 h-4 shrink-0" />
                                    <span>{error}</span>
                                </div>
                            )}

                            {/* Apparel Size Selector if applicable */}
                            {item.category === 'apparel' && (
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-gray-300">Select Size</label>
                                    <div className="grid grid-cols-6 gap-2">
                                        {['S', 'M', 'L', 'XL', '2XL', '3XL'].map((size) => (
                                            <button
                                                key={size}
                                                type="button"
                                                onClick={() => setApparelSize(size)}
                                                className={`py-2 rounded-xl text-xs font-black border transition-all cursor-pointer ${
                                                    apparelSize === size 
                                                        ? 'bg-red-600 border-red-500 text-white shadow-md' 
                                                        : 'bg-slate-900/60 border-white/10 text-gray-400 hover:text-white'
                                                }`}
                                            >
                                                {size}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Shipping Information Form */}
                            <div className="space-y-3">
                                <div className="text-xs font-black uppercase text-gray-400 tracking-wider flex items-center gap-1.5">
                                    <MapPin className="w-3.5 h-3.5 text-red-500" />
                                    Delivery Address Details
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <div>
                                        <label className="text-[11px] font-bold text-gray-400 mb-1 block">Full Name *</label>
                                        <input
                                            type="text"
                                            value={fullName}
                                            onChange={(e) => setFullName(e.target.value)}
                                            placeholder="Your Name"
                                            required
                                            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"
                                        />
                                    </div>

                                    <div>
                                        <label className="text-[11px] font-bold text-gray-400 mb-1 block">Phone Number *</label>
                                        <input
                                            type="tel"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            placeholder="+91 98765 43210"
                                            required
                                            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="text-[11px] font-bold text-gray-400 mb-1 block">Street Address / House No. *</label>
                                    <input
                                        type="text"
                                        value={addressLine}
                                        onChange={(e) => setAddressLine(e.target.value)}
                                        placeholder="Flat 402, Block B, Green Heights..."
                                        required
                                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"
                                    />
                                </div>

                                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                                    <div>
                                        <label className="text-[11px] font-bold text-gray-400 mb-1 block">City *</label>
                                        <input
                                            type="text"
                                            value={city}
                                            onChange={(e) => setCity(e.target.value)}
                                            placeholder="e.g. Mumbai"
                                            required
                                            className="w-full px-3 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-red-500"
                                        />
                                    </div>

                                    <div>
                                        <label className="text-[11px] font-bold text-gray-400 mb-1 block">State</label>
                                        <input
                                            type="text"
                                            value={state}
                                            onChange={(e) => setState(e.target.value)}
                                            placeholder="Maharashtra"
                                            className="w-full px-3 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-red-500"
                                        />
                                    </div>

                                    <div>
                                        <label className="text-[11px] font-bold text-gray-400 mb-1 block">PIN Code *</label>
                                        <input
                                            type="text"
                                            value={pincode}
                                            onChange={(e) => setPincode(e.target.value)}
                                            placeholder="400001"
                                            required
                                            className="w-full px-3 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-red-500"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Coin Ledger Summary */}
                            <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-4 text-xs space-y-2">
                                <div className="flex justify-between text-gray-400">
                                    <span>Item Price:</span>
                                    <span className="font-bold text-amber-400">🪙 {item.coinCost} Coins</span>
                                </div>
                                <div className="flex justify-between text-gray-400">
                                    <span>Shipping & Handling:</span>
                                    <span className="font-bold text-emerald-400 uppercase">Free 🚚</span>
                                </div>
                                <div className="border-t border-white/5 pt-2 flex justify-between font-bold text-white">
                                    <span>Remaining Balance:</span>
                                    <span className={remainingCoins >= 0 ? 'text-white' : 'text-red-400'}>
                                        🪙 {Math.max(0, remainingCoins)} Coins
                                    </span>
                                </div>
                            </div>

                            {/* Submit Order Button */}
                            <button
                                type="submit"
                                disabled={loading || !canAfford}
                                className={`w-full py-3.5 rounded-2xl font-black text-xs transition-all flex items-center justify-center gap-2 shadow-lg ${
                                    canAfford && !loading
                                        ? 'bg-gradient-to-r from-red-600 to-orange-500 hover:brightness-110 text-white cursor-pointer active:scale-95'
                                        : 'bg-slate-800 text-gray-500 cursor-not-allowed border border-white/5'
                                }`}
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                        <span>Confirming Order...</span>
                                    </>
                                ) : !canAfford ? (
                                    <>
                                        <Coins className="w-4 h-4" />
                                        <span>Need {item.coinCost - availableCoins} More Coins</span>
                                    </>
                                ) : (
                                    <>
                                        <ShoppingBag className="w-4 h-4" />
                                        <span>Confirm & Order Now (Free Delivery)</span>
                                    </>
                                )}
                            </button>
                        </form>
                    )}

                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default RewardOrderModal;