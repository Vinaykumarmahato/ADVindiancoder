import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, User, Eye, EyeOff, Loader2, Sparkles, AlertCircle, CheckCircle, Phone, ArrowLeft } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
    initialTab?: 'login' | 'register';
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, initialTab = 'login' }) => {
    const { login, register, loginSocial, loginMobile, loginEmailOtp } = useAuth();
    const [activeTab, setActiveTab] = useState<'login' | 'register'>(initialTab);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Mobile States
    const [authMethod, setAuthMethod] = useState<'form' | 'mobile' | 'email-otp'>('form');
    const [mobileStep, setMobileStep] = useState<'enter-number' | 'enter-otp'>('enter-number');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [countryCode, setCountryCode] = useState('+91');
    const [otpDigits, setOtpDigits] = useState<string[]>(['', '', '', '', '', '']);
    const [otpTimer, setOtpTimer] = useState(30);

    // Email OTP States
    const [emailOtpStep, setEmailOtpStep] = useState<'enter-email' | 'enter-otp'>('enter-email');
    const [emailForOtp, setEmailForOtp] = useState('');

    // Timer countdown effect for OTP resend
    useEffect(() => {
        let timer: NodeJS.Timeout;
        const isMobileOtpActive = authMethod === 'mobile' && mobileStep === 'enter-otp';
        const isEmailOtpActive = authMethod === 'email-otp' && emailOtpStep === 'enter-otp';
        if ((isMobileOtpActive || isEmailOtpActive) && otpTimer > 0) {
            timer = setTimeout(() => setOtpTimer(prev => prev - 1), 1000);
        }
        return () => clearTimeout(timer);
    }, [authMethod, mobileStep, emailOtpStep, otpTimer]);

    const handleTabChange = (tab: 'login' | 'register') => {
        setActiveTab(tab);
        setError(null);
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        // Basic validation
        if (!email || !password) {
            setError('Please fill in all required fields.');
            return;
        }

        if (activeTab === 'register') {
            if (!name) {
                setError('Please enter your name.');
                return;
            }
            if (password !== confirmPassword) {
                setError('Passwords do not match.');
                return;
            }
            if (password.length < 6) {
                setError('Password must be at least 6 characters.');
                return;
            }
        }

        setIsLoading(true);

        try {
            if (activeTab === 'login') {
                await login(email, password);
            } else {
                await register(name, email, password);
            }
            
            setIsSuccess(true);
            setTimeout(() => {
                setIsSuccess(false);
                onClose();
            }, 1800);
        } catch (err: any) {
            setError(err.message || 'An error occurred. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    // Social Login handler
    const handleSocialLogin = async (provider: 'google' | 'github' | 'linkedin') => {
        setError(null);
        setIsLoading(true);

        if (provider === 'google') {
            const googleObj = (window as any).google;
            if (!googleObj) {
                setError("Google authentication service is currently unavailable. Please refresh or try again.");
                setIsLoading(false);
                return;
            }

            try {
                const client = googleObj.accounts.oauth2.initTokenClient({
                    client_id: (import.meta as any).env.VITE_GOOGLE_CLIENT_ID || '1074442657788-dummyid.apps.googleusercontent.com',
                    scope: 'email profile openid',
                    callback: async (tokenResponse: any) => {
                        if (tokenResponse && tokenResponse.access_token) {
                            try {
                                await loginSocial('google', tokenResponse.access_token);
                                setIsSuccess(true);
                                setTimeout(() => {
                                    setIsSuccess(false);
                                    onClose();
                                }, 1800);
                            } catch (err: any) {
                                setError(err.message || 'Google Sign-in failed verification.');
                            } finally {
                                setIsLoading(false);
                            }
                        } else {
                            setError('Failed to obtain authorization token from Google.');
                            setIsLoading(false);
                        }
                    },
                    error_callback: (err: any) => {
                        setError(err.message || 'Google authentication error occurred.');
                        setIsLoading(false);
                    }
                });
                client.requestAccessToken();
            } catch (err: any) {
                setError('Google client initialization failed.');
                setIsLoading(false);
            }
            return;
        }

        try {
            await loginSocial(provider);
            setIsSuccess(true);
            setTimeout(() => {
                setIsSuccess(false);
                onClose();
            }, 1800);
        } catch (err: any) {
            setError(err.message || `${provider} login failed.`);
        } finally {
            setIsLoading(false);
        }
    };

    // Email OTP Handlers
    const handleSendEmailOtp = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        if (!emailForOtp || !emailForOtp.includes('@')) {
            setError('Please enter a valid email address.');
            return;
        }

        setIsLoading(true);
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:8080'}/api/auth/email/send-otp`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: emailForOtp }),
            });
            if (!response.ok) {
                const errData = await response.json().catch(() => ({ message: 'Failed to send OTP' }));
                throw new Error(errData.message || 'Failed to send OTP');
            }
            setEmailOtpStep('enter-otp');
            setOtpTimer(30);
            setOtpDigits(['', '', '', '', '', '']);
        } catch (err: any) {
            setError(err.message || 'Failed to send OTP. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleVerifyEmailOtp = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        const otpCode = otpDigits.join('');
        if (otpCode.length < 6) {
            setError('Please enter the complete 6-digit OTP code.');
            return;
        }

        setIsLoading(true);
        try {
            await loginEmailOtp(emailForOtp, otpCode);
            setIsSuccess(true);
            setTimeout(() => {
                setIsSuccess(false);
                setAuthMethod('form');
                setEmailOtpStep('enter-email');
                setEmailForOtp('');
                setOtpDigits(['', '', '', '', '', '']);
                onClose();
            }, 1800);
        } catch (err: any) {
            setError(err.message || 'OTP verification failed.');
        } finally {
            setIsLoading(false);
        }
    };

    // Mobile Verification Handlers
    const handleSendOtp = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        const digitsOnly = phoneNumber.replace(/\D/g, '');
        if (digitsOnly.length < 10) {
            setError('Please enter a valid 10-digit mobile number.');
            return;
        }

        setIsLoading(true);
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:8080'}/api/auth/mobile/send-otp`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ phoneNumber: `${countryCode} ${phoneNumber}` }),
            });
            if (!response.ok) {
                const errData = await response.json().catch(() => ({ message: 'Failed to send OTP' }));
                throw new Error(errData.message || 'Failed to send OTP');
            }
            setMobileStep('enter-otp');
            setOtpTimer(30);
        } catch (err: any) {
            setError(err.message || 'Failed to send OTP. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleVerifyOtp = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        const otpCode = otpDigits.join('');
        if (otpCode.length < 6) {
            setError('Please enter the complete 6-digit OTP code.');
            return;
        }

        setIsLoading(true);
        try {
            await loginMobile(`${countryCode} ${phoneNumber}`, otpCode);
            setIsSuccess(true);
            setTimeout(() => {
                setIsSuccess(false);
                setAuthMethod('form');
                setMobileStep('enter-number');
                setPhoneNumber('');
                setOtpDigits(['', '', '', '', '', '']);
                onClose();
            }, 1800);
        } catch (err: any) {
            setError(err.message || 'OTP verification failed.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleOtpChange = (index: number, value: string) => {
        if (!/^\d*$/.test(value)) return;
        const newDigits = [...otpDigits];
        newDigits[index] = value.substring(value.length - 1);
        setOtpDigits(newDigits);

        // Auto-advance cursor
        if (value && index < 5) {
            const nextInput = document.getElementById(`otp-input-${index + 1}`);
            nextInput?.focus();
        }
    };

    const handleOtpKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Backspace' && !otpDigits[index] && index > 0) {
            const prevInput = document.getElementById(`otp-input-${index - 1}`);
            prevInput?.focus();
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[1100] flex items-center justify-center p-4">
                    {/* Backdrop Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/70 backdrop-blur-md"
                    />

                    {/* Modal Content Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                        className="relative w-full max-w-md max-h-[90vh] flex flex-col overflow-hidden rounded-3xl border border-white/20 bg-white/95 dark:bg-[#0a0f1d]/90 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] dark:shadow-[0_20px_50px_rgba(239,68,68,0.08)] z-10"
                    >
                        {/* Decorative glowing gradient top bar */}
                        <div className="h-1.5 w-full bg-gradient-to-r from-red-600 via-orange-500 to-red-600 animate-gradient-xy shrink-0" />

                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-1.5 rounded-full text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors z-20"
                            aria-label="Close dialog"
                        >
                            <X className="h-5 w-5" />
                        </button>

                        <div className="p-6 md:p-8 overflow-y-auto flex-1">
                            <AnimatePresence mode="wait">
                                {isSuccess ? (
                                    /* Success State View */
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="flex flex-col items-center justify-center py-10 text-center"
                                    >
                                        <div className="relative mb-6">
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: [0, 1.2, 1] }}
                                                transition={{ duration: 0.5, times: [0, 0.7, 1] }}
                                                className="rounded-full bg-green-500/10 p-4 text-green-500 border border-green-500/20 shadow-[0_0_20px_rgba(34,197,94,0.2)]"
                                            >
                                                <CheckCircle className="h-16 w-16" />
                                            </motion.div>
                                            <motion.div 
                                                animate={{ rotate: 360 }}
                                                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                                                className="absolute -top-2 -right-2 text-yellow-500"
                                            >
                                                <Sparkles className="h-6 w-6" />
                                            </motion.div>
                                        </div>
                                        <h3 className="text-2xl font-black bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text text-transparent mb-2">
                                            Welcome Back!
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 font-medium">
                                            Successfully logged in.
                                        </p>
                                    </motion.div>
                                ) : (
                                    /* Form State View */
                                    <motion.div
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        {/* Logo and Header */}
                                        <div className="flex items-center gap-2.5 mb-6">
                                            <img
                                                src="/assets/ADV Indian Coder Logo.png"
                                                alt="ADV Indian Coder Logo"
                                                className="h-8 w-auto object-contain"
                                            />
                                            <span className="text-lg font-black tracking-tight text-gray-900 dark:text-white">
                                                ADV Indian <span className="text-red-500">Coder</span>
                                            </span>
                                        </div>

                                        {/* Error Banner */}
                                        {error && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="flex items-start gap-2.5 p-3.5 mb-5 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-semibold leading-relaxed"
                                            >
                                                <AlertCircle className="h-4.5 w-4.5 shrink-0 mt-0.5" />
                                                <span>{error}</span>
                                            </motion.div>
                                        )}

                                        {authMethod === 'mobile' ? (
                                            /* Mobile OTP UI Section */
                                            <div className="space-y-5">
                                                {/* Back button and header */}
                                                <div className="flex items-center gap-3">
                                                    <button
                                                        type="button"
                                                        onClick={() => {
                                                            setError(null);
                                                            if (mobileStep === 'enter-otp') {
                                                                setMobileStep('enter-number');
                                                            } else {
                                                                setAuthMethod('form');
                                                            }
                                                        }}
                                                        className="p-2 rounded-xl text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                                                        aria-label="Go back"
                                                    >
                                                        <ArrowLeft className="h-4.5 w-4.5" />
                                                    </button>
                                                    <h4 className="text-base font-black text-gray-900 dark:text-white">
                                                        {mobileStep === 'enter-number' ? 'Verify Mobile' : 'Verify Mobile OTP'}
                                                    </h4>
                                                </div>

                                                {mobileStep === 'enter-number' ? (
                                                    <form onSubmit={handleSendOtp} className="space-y-4">
                                                        <p className="text-xs text-gray-500 dark:text-gray-400 font-semibold leading-relaxed">
                                                            Enter your mobile number. We'll send you a 6-digit one-time password (OTP) to verify your account.
                                                        </p>

                                                        <div className="space-y-1.5">
                                                            <label className="text-xs font-bold text-gray-500 dark:text-gray-400">Mobile Number</label>
                                                            <div className="flex gap-2">
                                                                <select
                                                                    value={countryCode}
                                                                    onChange={(e) => setCountryCode(e.target.value)}
                                                                    className="px-3 py-3 text-sm font-bold rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 outline-none focus:border-red-500 text-gray-800 dark:text-white"
                                                                >
                                                                    <option value="+91" className="bg-white dark:bg-[#0a0f1d]">+91 (IN)</option>
                                                                    <option value="+1" className="bg-white dark:bg-[#0a0f1d]">+1 (US)</option>
                                                                    <option value="+44" className="bg-white dark:bg-[#0a0f1d]">+44 (UK)</option>
                                                                </select>

                                                                <div className="relative flex-1">
                                                                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-gray-400" />
                                                                    <input
                                                                        type="tel"
                                                                        maxLength={10}
                                                                        value={phoneNumber}
                                                                        onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
                                                                        placeholder="98765 43210"
                                                                        required
                                                                        className="w-full pl-11 pr-4 py-3 text-sm rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:border-red-500 dark:focus:border-red-500 focus:bg-white dark:focus:bg-transparent focus:ring-1 focus:ring-red-500 outline-none transition-all text-gray-900 dark:text-white font-semibold"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <button
                                                            type="submit"
                                                            disabled={isLoading}
                                                            className="relative w-full py-3.5 rounded-2xl bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold text-sm shadow-[0_4px_20px_rgba(220,38,38,0.25)] hover:shadow-[0_4px_25px_rgba(220,38,38,0.4)] hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
                                                        >
                                                            {isLoading ? (
                                                                <>
                                                                    <Loader2 className="h-4.5 w-4.5 animate-spin" />
                                                                    <span>Sending OTP...</span>
                                                                </>
                                                            ) : (
                                                                <span>Send OTP Code</span>
                                                            )}
                                                        </button>
                                                    </form>
                                                ) : (
                                                    <form onSubmit={handleVerifyOtp} className="space-y-5">
                                                        <p className="text-xs text-gray-500 dark:text-gray-400 font-semibold leading-relaxed">
                                                            Enter the 6-digit verification code sent to <span className="font-bold text-gray-700 dark:text-gray-200">{countryCode} {phoneNumber}</span>.
                                                        </p>

                                                        <div className="flex justify-between gap-2">
                                                            {otpDigits.map((digit, idx) => (
                                                                <input
                                                                    key={idx}
                                                                    id={`otp-input-${idx}`}
                                                                    type="text"
                                                                    maxLength={1}
                                                                    value={digit}
                                                                    onChange={(e) => handleOtpChange(idx, e.target.value)}
                                                                    onKeyDown={(e) => handleOtpKeyDown(idx, e)}
                                                                    className="w-11 h-12 text-center text-lg font-black rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:border-red-500 dark:focus:border-red-500 focus:bg-white dark:focus:bg-transparent focus:ring-1 focus:ring-red-500 outline-none transition-all text-gray-900 dark:text-white"
                                                                />
                                                            ))}
                                                        </div>

                                                        <div className="flex items-center justify-between text-xs font-bold">
                                                            <span className="text-gray-400">Didn't receive code?</span>
                                                            {otpTimer > 0 ? (
                                                                <span className="text-red-500">Resend in {otpTimer}s</span>
                                                            ) : (
                                                                <button
                                                                    type="button"
                                                                    onClick={() => {
                                                                        setOtpTimer(30);
                                                                        setOtpDigits(['', '', '', '', '', '']);
                                                                        setError(null);
                                                                    }}
                                                                    className="text-red-500 hover:text-red-600 transition-colors cursor-pointer"
                                                                >
                                                                    Resend OTP
                                                                </button>
                                                            )}
                                                        </div>

                                                        <button
                                                            type="submit"
                                                            disabled={isLoading}
                                                            className="relative w-full py-3.5 rounded-2xl bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold text-sm shadow-[0_4px_20px_rgba(220,38,38,0.25)] hover:shadow-[0_4px_25px_rgba(220,38,38,0.4)] hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
                                                        >
                                                            {isLoading ? (
                                                                <>
                                                                    <Loader2 className="h-4.5 w-4.5 animate-spin" />
                                                                    <span>Verifying OTP...</span>
                                                                </>
                                                            ) : (
                                                                <span>Verify & Sign In</span>
                                                            )}
                                                        </button>
                                                    </form>
                                                )}
                                            </div>
                                        ) : authMethod === 'email-otp' ? (
                                            /* Email OTP UI Section */
                                            <div className="space-y-5">
                                                {/* Back button and header */}
                                                <div className="flex items-center gap-3">
                                                    <button
                                                        type="button"
                                                        onClick={() => {
                                                            setError(null);
                                                            if (emailOtpStep === 'enter-otp') {
                                                                setEmailOtpStep('enter-email');
                                                            } else {
                                                                setAuthMethod('form');
                                                            }
                                                        }}
                                                        className="p-2 rounded-xl text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                                                        aria-label="Go back"
                                                    >
                                                        <ArrowLeft className="h-4.5 w-4.5" />
                                                    </button>
                                                    <h4 className="text-base font-black text-gray-900 dark:text-white">
                                                        {emailOtpStep === 'enter-email' ? 'Verify Email' : 'Verify Email OTP'}
                                                    </h4>
                                                </div>

                                                {emailOtpStep === 'enter-email' ? (
                                                    <form onSubmit={handleSendEmailOtp} className="space-y-4">
                                                        <p className="text-xs text-gray-500 dark:text-gray-400 font-semibold leading-relaxed">
                                                            Enter your email address. We'll send you a 6-digit one-time password (OTP) to verify your account.
                                                        </p>

                                                        <div className="space-y-1.5">
                                                            <label className="text-xs font-bold text-gray-500 dark:text-gray-400">Email Address</label>
                                                            <div className="relative">
                                                                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-gray-400" />
                                                                <input
                                                                    type="email"
                                                                    value={emailForOtp}
                                                                    onChange={(e) => setEmailForOtp(e.target.value)}
                                                                    placeholder="you@example.com"
                                                                    required
                                                                    className="w-full pl-11 pr-4 py-3 text-sm rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:border-red-500 dark:focus:border-red-500 focus:bg-white dark:focus:bg-transparent focus:ring-1 focus:ring-red-500 outline-none transition-all text-gray-900 dark:text-white font-semibold"
                                                                />
                                                            </div>
                                                        </div>

                                                        <button
                                                            type="submit"
                                                            disabled={isLoading}
                                                            className="relative w-full py-3.5 rounded-2xl bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold text-sm shadow-[0_4px_20px_rgba(220,38,38,0.25)] hover:shadow-[0_4px_25px_rgba(220,38,38,0.4)] hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
                                                        >
                                                            {isLoading ? (
                                                                <>
                                                                    <Loader2 className="h-4.5 w-4.5 animate-spin" />
                                                                    <span>Sending OTP...</span>
                                                                </>
                                                            ) : (
                                                                <span>Send OTP Code</span>
                                                            )}
                                                        </button>
                                                    </form>
                                                ) : (
                                                    <form onSubmit={handleVerifyEmailOtp} className="space-y-5">
                                                        <p className="text-xs text-gray-500 dark:text-gray-400 font-semibold leading-relaxed">
                                                            Enter the 6-digit verification code sent to <span className="font-bold text-gray-700 dark:text-gray-200">{emailForOtp}</span>. <span className="text-red-500 block mt-1 font-bold">(Please check your Spam or Junk folder if the mail is not in your Inbox)</span>
                                                        </p>

                                                        <div className="flex justify-between gap-2">
                                                            {otpDigits.map((digit, idx) => (
                                                                <input
                                                                    key={idx}
                                                                    id={`otp-input-${idx}`}
                                                                    type="text"
                                                                    maxLength={1}
                                                                    value={digit}
                                                                    onChange={(e) => handleOtpChange(idx, e.target.value)}
                                                                    onKeyDown={(e) => handleOtpKeyDown(idx, e)}
                                                                    className="w-11 h-12 text-center text-lg font-black rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:border-red-500 dark:focus:border-red-500 focus:bg-white dark:focus:bg-transparent focus:ring-1 focus:ring-red-500 outline-none transition-all text-gray-900 dark:text-white"
                                                                />
                                                            ))}
                                                        </div>

                                                        <div className="flex items-center justify-between text-xs font-bold">
                                                            <span className="text-gray-400">Didn't receive code?</span>
                                                            {otpTimer > 0 ? (
                                                                <span className="text-red-500">Resend in {otpTimer}s</span>
                                                            ) : (
                                                                <button
                                                                    type="button"
                                                                    onClick={async () => {
                                                                        setError(null);
                                                                        setIsLoading(true);
                                                                        try {
                                                                            const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:8080'}/api/auth/email/send-otp`, {
                                                                                method: 'POST',
                                                                                headers: {
                                                                                    'Content-Type': 'application/json',
                                                                                },
                                                                                body: JSON.stringify({ email: emailForOtp }),
                                                                            });
                                                                            if (!response.ok) {
                                                                                const errData = await response.json().catch(() => ({ message: 'Failed to send OTP' }));
                                                                                throw new Error(errData.message || 'Failed to send OTP');
                                                                            }
                                                                            setOtpTimer(30);
                                                                            setOtpDigits(['', '', '', '', '', '']);
                                                                        } catch (err: any) {
                                                                            setError(err.message || 'Failed to send OTP. Please try again.');
                                                                        } finally {
                                                                            setIsLoading(false);
                                                                        }
                                                                    }}
                                                                    className="text-red-500 hover:text-red-600 transition-colors cursor-pointer"
                                                                >
                                                                    Resend OTP
                                                                </button>
                                                            )}
                                                        </div>

                                                        <button
                                                            type="submit"
                                                            disabled={isLoading}
                                                            className="relative w-full py-3.5 rounded-2xl bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold text-sm shadow-[0_4px_20px_rgba(220,38,38,0.25)] hover:shadow-[0_4px_25px_rgba(220,38,38,0.4)] hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
                                                        >
                                                            {isLoading ? (
                                                                <>
                                                                    <Loader2 className="h-4.5 w-4.5 animate-spin" />
                                                                    <span>Verifying OTP...</span>
                                                                </>
                                                            ) : (
                                                                <span>Verify & Sign In</span>
                                                            )}
                                                        </button>
                                                    </form>
                                                )}
                                            </div>
                                        ) : (
                                            /* Standard Email Auth UI */
                                            <>
                                                {/* Tabs Toggle */}
                                                <div className="flex p-1 mb-6 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200/50 dark:border-white/5">
                                                    <button
                                                        type="button"
                                                        onClick={() => handleTabChange('login')}
                                                        className={`flex-1 py-2 px-3 text-sm font-bold rounded-lg transition-all relative ${
                                                            activeTab === 'login'
                                                                ? 'text-gray-900 dark:text-white shadow-sm'
                                                                : 'text-gray-500 hover:text-gray-800 dark:hover:text-gray-300'
                                                        }`}
                                                    >
                                                        {activeTab === 'login' && (
                                                            <motion.div
                                                                layoutId="active-tab"
                                                                className="absolute inset-0 rounded-lg bg-white dark:bg-white/10 shadow-sm border border-black/5 dark:border-white/10"
                                                                transition={{ type: 'spring', duration: 0.4 }}
                                                            />
                                                        )}
                                                        <span className="relative z-10">Sign In</span>
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={() => handleTabChange('register')}
                                                        className={`flex-1 py-2 px-3 text-sm font-bold rounded-lg transition-all relative ${
                                                            activeTab === 'register'
                                                                ? 'text-gray-900 dark:text-white shadow-sm'
                                                                : 'text-gray-500 hover:text-gray-800 dark:hover:text-gray-300'
                                                        }`}
                                                    >
                                                        {activeTab === 'register' && (
                                                            <motion.div
                                                                layoutId="active-tab"
                                                                className="absolute inset-0 rounded-lg bg-white dark:bg-white/10 shadow-sm border border-black/5 dark:border-white/10"
                                                                transition={{ type: 'spring', duration: 0.4 }}
                                                            />
                                                        )}
                                                        <span className="relative z-10">Register</span>
                                                    </button>
                                                </div>

                                                <form onSubmit={handleSubmit} className="space-y-4">
                                                    {activeTab === 'register' && (
                                                        <div className="space-y-1.5">
                                                            <label className="text-xs font-bold text-gray-500 dark:text-gray-400">Full Name</label>
                                                            <div className="relative">
                                                                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-gray-400" />
                                                                <input
                                                                    type="text"
                                                                    value={name}
                                                                    onChange={(e) => setName(e.target.value)}
                                                                    placeholder="John Doe"
                                                                    required
                                                                    className="w-full pl-11 pr-4 py-3 text-sm rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:border-red-500 dark:focus:border-red-500 focus:bg-white dark:focus:bg-transparent focus:ring-1 focus:ring-red-500 outline-none transition-all text-gray-900 dark:text-white"
                                                                />
                                                            </div>
                                                        </div>
                                                    )}

                                                    <div className="space-y-1.5">
                                                        <label className="text-xs font-bold text-gray-500 dark:text-gray-400">Email Address</label>
                                                        <div className="relative">
                                                            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-gray-400" />
                                                            <input
                                                                type="email"
                                                                value={email}
                                                                onChange={(e) => setEmail(e.target.value)}
                                                                placeholder="you@example.com"
                                                                required
                                                                className="w-full pl-11 pr-4 py-3 text-sm rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:border-red-500 dark:focus:border-red-500 focus:bg-white dark:focus:bg-transparent focus:ring-1 focus:ring-red-500 outline-none transition-all text-gray-900 dark:text-white"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="space-y-1.5">
                                                        <label className="text-xs font-bold text-gray-500 dark:text-gray-400">Password</label>
                                                        <div className="relative">
                                                            <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-gray-400" />
                                                            <input
                                                                type={showPassword ? 'text' : 'password'}
                                                                value={password}
                                                                onChange={(e) => setPassword(e.target.value)}
                                                                placeholder="••••••••"
                                                                required
                                                                className="w-full pl-11 pr-11 py-3 text-sm rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:border-red-500 dark:focus:border-red-500 focus:bg-white dark:focus:bg-transparent focus:ring-1 focus:ring-red-500 outline-none transition-all text-gray-900 dark:text-white"
                                                            />
                                                            <button
                                                                type="button"
                                                                onClick={() => setShowPassword(!showPassword)}
                                                                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors"
                                                            >
                                                                {showPassword ? <EyeOff className="h-4.5 w-4.5" /> : <Eye className="h-4.5 w-4.5" />}
                                                            </button>
                                                        </div>
                                                    </div>

                                                    {activeTab === 'register' && (
                                                        <div className="space-y-1.5">
                                                            <label className="text-xs font-bold text-gray-500 dark:text-gray-400">Confirm Password</label>
                                                            <div className="relative">
                                                                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-gray-400" />
                                                                <input
                                                                    type={showPassword ? 'text' : 'password'}
                                                                    value={confirmPassword}
                                                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                                                    placeholder="••••••••"
                                                                    required
                                                                    className="w-full pl-11 pr-4 py-3 text-sm rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:border-red-500 dark:focus:border-red-500 focus:bg-white dark:focus:bg-transparent focus:ring-1 focus:ring-red-500 outline-none transition-all text-gray-900 dark:text-white"
                                                                />
                                                            </div>
                                                        </div>
                                                    )}

                                                    <button
                                                        type="submit"
                                                        disabled={isLoading}
                                                        className="relative w-full py-3.5 mt-2 rounded-2xl bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold text-sm shadow-[0_4px_20px_rgba(220,38,38,0.25)] hover:shadow-[0_4px_25px_rgba(220,38,38,0.4)] hover:brightness-110 active:scale-[0.98] active:shadow-[0_4px_15px_rgba(220,38,38,0.2)] disabled:opacity-50 disabled:pointer-events-none transition-all flex items-center justify-center gap-2 cursor-pointer"
                                                    >
                                                        {isLoading ? (
                                                            <>
                                                                <Loader2 className="h-4.5 w-4.5 animate-spin" />
                                                                <span>Processing...</span>
                                                            </>
                                                        ) : (
                                                            <span>{activeTab === 'login' ? 'Sign In' : 'Create Account'}</span>
                                                        )}
                                                    </button>
                                                </form>

                                                {/* Divider */}
                                                <div className="flex items-center my-5">
                                                    <div className="flex-1 h-px bg-gray-200 dark:bg-white/10" />
                                                    <span className="px-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Or continue with</span>
                                                    <div className="flex-1 h-px bg-gray-200 dark:bg-white/10" />
                                                </div>

                                                {/* Continue with Email OTP Button */}
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        setError(null);
                                                        setAuthMethod('email-otp');
                                                        setEmailOtpStep('enter-email');
                                                    }}
                                                    disabled={isLoading}
                                                    className="w-full py-3.5 mb-3 rounded-2xl bg-gray-100 hover:bg-gray-200 dark:bg-white/5 dark:hover:bg-white/10 border border-gray-200/50 dark:border-white/5 text-gray-800 dark:text-gray-200 font-bold text-sm active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 cursor-pointer shadow-sm"
                                                >
                                                    <Mail className="h-4.5 w-4.5 text-red-500" />
                                                    <span>Continue with Email OTP</span>
                                                </button>

                                                {/* Continue with Mobile Button */}
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        setError(null);
                                                        setAuthMethod('mobile');
                                                        setMobileStep('enter-number');
                                                    }}
                                                    disabled={isLoading}
                                                    className="w-full py-3.5 mb-3.5 rounded-2xl bg-gray-100 hover:bg-gray-200 dark:bg-white/5 dark:hover:bg-white/10 border border-gray-200/50 dark:border-white/5 text-gray-800 dark:text-gray-200 font-bold text-sm active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 cursor-pointer shadow-sm"
                                                >
                                                    <Phone className="h-4.5 w-4.5 text-red-500" />
                                                    <span>Continue with Mobile Number</span>
                                                </button>

                                                {/* Google Login Button */}
                                                <button
                                                    type="button"
                                                    onClick={() => handleSocialLogin('google')}
                                                    disabled={isLoading}
                                                    className="w-full py-3.5 rounded-2xl bg-gray-100 hover:bg-gray-200 dark:bg-white/5 dark:hover:bg-white/10 border border-gray-200/50 dark:border-white/5 text-gray-800 dark:text-gray-200 font-bold text-sm active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 cursor-pointer shadow-sm"
                                                    title="Sign in with Google"
                                                >
                                                    <svg className="h-5 w-5" viewBox="0 0 24 24">
                                                        <path
                                                            fill="#EA4335"
                                                            d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.33 0 3.33 2.705 1.447 6.645l3.819 3.12z"
                                                        />
                                                        <path
                                                            fill="#34A853"
                                                            d="M16.04 15.345c-1.07.727-2.427 1.164-4.04 1.164a7.076 7.076 0 0 1-6.734-4.855L1.447 14.78C3.33 18.72 7.33 21.424 12 21.424c3.155 0 6.012-1.1 8.164-3l-4.124-3.08z"
                                                        />
                                                        <path
                                                            fill="#4285F4"
                                                            d="M23.49 12.275c0-.685-.06-1.345-.17-1.98H12v4.145h6.49c-.28 1.488-1.127 2.748-2.39 3.6l4.124 3.08c2.413-2.224 3.804-5.5 3.804-9.13l-.53.285z"
                                                        />
                                                        <path
                                                            fill="#FBBC05"
                                                            d="M5.266 11.655a6.99 6.99 0 0 1 0-2.39L1.447 6.145A11.957 11.957 0 0 0 0 12c0 2.115.545 4.1 1.447 5.855l3.819-3.12a7.042 7.042 0 0 1 0-3.08z"
                                                        />
                                                    </svg>
                                                    <span>Continue with Google</span>
                                                </button>
                                            </>
                                        )}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default AuthModal;
