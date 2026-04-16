import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, FileText, TrendingUp, ArrowLeft, CheckCircle, Upload, AlertCircle, ArrowRight, Zap, Target, Github, Linkedin } from 'lucide-react';
import EnrollmentService from '../services/enrollment.service';
import PageWrapper from '../components/PageWrapper';
import { MASTERCLASSES, TESTIMONIALS } from '../constants';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const GlowingOrb = ({ className }: { className: string }) => (
    <div className={`absolute rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-pulse ${className}`}></div>
);

const CountdownTimer = ({ targetDate }: { targetDate: string }) => {
    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft: any = {};
        if (difference > 0) {
            timeLeft = {
                DAYS: Math.floor(difference / (1000 * 60 * 60 * 24)),
                HRS: Math.floor((difference / (1000 * 60 * 60)) % 24),
                MIN: Math.floor((difference / 1000 / 60) % 60),
                SEC: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
    });

    return (
        <div className="flex gap-3 justify-center text-center">
            {Object.entries(timeLeft).map(([unit, value]: [string, any]) => (
                <div key={unit} className="flex flex-col items-center bg-black/40 backdrop-blur-md border border-white/10 p-2 lg:p-3 rounded-lg min-w-[60px] lg:min-w-[70px]">
                    <span className="text-2xl lg:text-3xl font-black text-white">{String(value).padStart(2, '0')}</span>
                    <span className="text-[10px] lg:text-xs uppercase tracking-wider text-primary/80 font-bold mt-1">{unit}</span>
                </div>
            ))}
        </div>
    );
};

const MasterclassPage = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [selectedMc, setSelectedMc] = useState<any>(null);
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', transactionId: '', language: 'English' });
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const nextTestimonial = () => setCurrentTestimonial((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
    const prevTestimonial = () => setCurrentTestimonial((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));

    const handleEnrollClick = (mc: any) => {
        setSelectedMc(mc);
        setSuccess(false);
        setError('');
        setFormData({ name: '', email: '', phone: '', transactionId: '', language: 'English' });
        setFile(null);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!file) return setError('Please upload a screenshot of your payment.');
        setLoading(true); setError('');
        const data = new FormData();
        data.append('name', formData.name); 
        data.append('email', formData.email); 
        data.append('phone', formData.phone); 
        data.append('transactionId', formData.transactionId); 
        data.append('language', formData.language); 
        data.append('screenshot', file);
        try {
            await EnrollmentService.enroll(data);
            setSuccess(true);
        } catch (err) {
            setError('Enrollment failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <PageWrapper>
            <div className="bg-[#050914] text-white min-h-screen font-sans relative overflow-hidden">
                {/* Background Grid */}
                <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                {/* Header */}
                <div className="relative z-10 pt-10 md:pt-20 pb-16 text-center px-4">
                    <GlowingOrb className="top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20" />
                    <div className="max-w-5xl mx-auto relative">
                        <motion.span initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="bg-white/10 backdrop-blur-md border border-primary/30 text-primary font-mono text-sm tracking-widest py-2 px-6 rounded-full mb-6 inline-flex shadow-[0_0_20px_rgba(0,120,255,0.3)]">
                            INTENSIVE MENTORSHIP
                        </motion.span>
                        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 1 }} className="text-4xl sm:text-5xl md:text-7xl lg:text-[5rem] font-black leading-[1.1] tracking-tighter mb-8">
                            Don't Just Watch.<br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-primary to-purple-500">Build with Us Live.</span>
                        </motion.h1>
                        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 1 }} className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
                            Our live masterclasses are not webinars — they are rigorous 30-day cohorts where you code alongside an expert, build production-ready projects, and get your doubts resolved instantly.
                        </motion.p>
                    </div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    {/* Info Sections - Bento Grid Style */}
                    <div className="grid md:grid-cols-2 gap-8 mb-20">
                        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[2rem] relative overflow-hidden group hover:border-white/20 transition-all">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 blur-[80px] rounded-full group-hover:bg-green-500/20 transition-colors"></div>
                            <h2 className="text-3xl font-extrabold mb-8 text-white relative z-10">The Live Advantage</h2>
                            <ul className="space-y-6 relative z-10">
                                {[
                                    "Ask questions in real time and get immediate answers",
                                    "Stay accountable with a strict, active schedule",
                                    "Learn alongside a premium community of motivated peers",
                                    "Get feedback on your raw code during class itself",
                                    "Build intense discipline — the habit most self-learners lack"
                                ].map((text, i) => (
                                    <li key={i} className="flex items-start">
                                        <div className="p-1 bg-green-500/20 rounded-full mr-4 mt-1"><CheckCircle className="text-green-500 w-5 h-5 flex-shrink-0" /></div>
                                        <span className="text-lg text-gray-300">{text}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                        
                        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="bg-gradient-to-br from-primary/10 to-blue-900/40 backdrop-blur-xl border border-primary/30 p-10 rounded-[2rem] relative overflow-hidden">
                            <GlowingOrb className="-bottom-20 -right-20 w-[400px] h-[400px] bg-primary/30" />
                            <div className="relative z-10">
                                <h2 className="text-3xl font-extrabold mb-8 text-white flex items-center gap-3"><Zap className="text-yellow-400 fill-yellow-400" /> Next Batch Logistics</h2>
                                <div className="space-y-6">
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-white/10 pb-4 gap-1">
                                        <span className="text-gray-400 font-mono text-xs sm:text-sm uppercase tracking-wider">Start Date</span>
                                        <span className="font-bold text-lg sm:text-xl">15th of Next Month</span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-white/10 pb-4 gap-1">
                                        <span className="text-gray-400 font-mono text-xs sm:text-sm uppercase tracking-wider">Timing</span>
                                        <span className="font-bold text-lg sm:text-xl">7:00 PM - 9:00 PM IST</span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-white/10 pb-4 gap-1">
                                        <span className="text-gray-400 font-mono text-xs sm:text-sm uppercase tracking-wider">Platform</span>
                                        <span className="font-bold text-lg sm:text-xl">Zoom Premium</span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-white/10 pb-4 gap-1">
                                        <span className="text-gray-400 font-mono text-xs sm:text-sm uppercase tracking-wider">Availability</span>
                                        <span className="font-bold text-lg sm:text-xl text-red-400">Strictly Limited Seats</span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-white/10 pb-4 gap-1">
                                        <span className="text-gray-400 font-mono text-xs sm:text-sm uppercase tracking-wider">Language</span>
                                        <span className="font-bold text-lg sm:text-xl text-blue-400">English + Hindi</span>
                                    </div>
                                </div>
                                <div className="mt-10">
                                    <a href="https://wa.me/919931860964" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full bg-[#25D366] text-white font-black text-lg py-4 px-6 rounded-2xl hover:scale-[1.02] transition-transform shadow-[0_0_30px_rgba(37,211,102,0.3)]">
                                        Fast-Track via WhatsApp <ArrowRight className="ml-2 w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* High-Converting Pricing Section */}
                    <div className="text-center mb-16 relative py-10">
                        <motion.h2 
                            initial={{ opacity: 0, scale: 0.9 }} 
                            whileInView={{ opacity: 1, scale: 1 }} 
                            className="text-4xl md:text-6xl font-black mb-4 text-white"
                        >
                            Live 30-Day Mentorship Program
                        </motion.h2>
                        <p className="text-xl md:text-2xl text-gray-400 font-light mb-12">
                            Don’t just watch — build real projects with live guidance
                        </p>

                        <motion.div 
                            initial={{ opacity: 0, y: 30 }} 
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="max-w-xl mx-auto"
                        >
                            {/* Premium Pricing Card */}
                            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 text-gray-900 shadow-[0_20px_50px_rgba(37,211,102,0.2)] border border-green-100 relative overflow-hidden">
                                {/* Urgency Badge */}
                                <div className="absolute top-0 right-0">
                                    <div className="bg-[#25D366] text-white text-[10px] font-black uppercase tracking-widest py-2 px-10 rotate-45 translate-x-10 translate-y-2 shadow-sm">
                                        OFFER
                                    </div>
                                </div>

                                <div className="relative z-10 flex flex-col items-center">
                                    <span className="bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-xs font-bold mb-4 uppercase tracking-tighter animate-pulse">
                                        🔥 Limited Time Offer
                                    </span>

                                    <div className="flex flex-col items-center mb-8">
                                        <span className="text-gray-400 line-through text-xl md:text-2xl font-medium decoration-red-500/50">₹2,999</span>
                                        <div className="relative">
                                            <span className="text-6xl md:text-8xl font-black text-gray-900 tracking-tighter">₹999</span>
                                            <div className="absolute -top-2 -right-6 w-12 h-12 bg-green-500/10 rounded-full blur-xl"></div>
                                        </div>
                                        <p className="text-red-500 text-sm font-bold mt-2 flex items-center gap-2">
                                            <Zap className="w-4 h-4 fill-red-500" />
                                            ⏳ Price increases soon | Limited seats only
                                        </p>
                                    </div>

                                    {/* Features List */}
                                    <ul className="w-full space-y-4 mb-10 text-left">
                                        {[
                                            "30 Days Live Classes (7–9 PM)",
                                            "Real-time doubt solving",
                                            "Projects + Source Code",
                                            "Resume & Interview Support",
                                            "GitHub + LinkedIn Mastery"
                                        ].map((feature, i) => (
                                            <li key={i} className="flex items-center gap-4 text-gray-700 font-semibold group">
                                                <div className="shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-colors">
                                                    <CheckCircle className="w-4 h-4 transition-colors" />
                                                </div>
                                                <span className="text-sm md:text-base">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <button 
                                        onClick={() => document.getElementById('cohorts')?.scrollIntoView({ behavior: 'smooth' })}
                                        className="w-full bg-[#25D366] text-white font-black text-xl py-6 rounded-2xl hover:bg-[#20bd5c] transition-all transform hover:scale-[1.02] shadow-[0_10px_30px_rgba(37,211,102,0.4)] active:scale-95 mb-6"
                                    >
                                        Apply Now
                                    </button>

                                    {/* Trust Elements */}
                                    <div className="grid grid-cols-3 gap-2 w-full pt-6 border-t border-gray-100">
                                        <div className="flex flex-col items-center italic">
                                            <span className="text-xs font-black text-gray-800">1000+</span>
                                            <span className="text-[10px] text-gray-500">students</span>
                                        </div>
                                        <div className="flex flex-col items-center italic border-x border-gray-100 px-2">
                                            <span className="text-xs font-black text-green-600">Verified</span>
                                            <span className="text-[10px] text-gray-500 text-center">results</span>
                                        </div>
                                        <div className="flex flex-col items-center italic">
                                            <span className="text-xs font-black text-red-500">100% Live</span>
                                            <span className="text-[10px] text-gray-500 text-center">no recordings</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div id="cohorts" className="text-center mb-16 relative">
                        <h2 className="text-4xl font-black mb-4">Select Your Cohort</h2>
                        <p className="text-xl text-gray-400 italic">Special Limited Price Applies to all batches today.</p>
                    </div>

                    {/* Masterclasses Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                        {MASTERCLASSES.map((mc, idx) => (
                            <motion.div
                                key={mc.id}
                                variants={fadeUp}
                                initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                                className="group relative bg-[#0a0f1c] border border-white/10 rounded-[2rem] p-8 hover:border-primary/50 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-xl"
                            >
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="relative z-10">
                                    <div className="flex flex-col mb-6 space-y-2">
                                        <div className="flex justify-between items-start gap-4">
                                            <h3 className="text-2xl lg:text-3xl font-black leading-tight flex-1">
                                                {mc.title.split('(')[0].trim()}
                                            </h3>
                                            <span className="shrink-0 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-sm font-mono font-bold text-primary group-hover:bg-primary/20 transition-colors border border-primary/20 group-hover:border-primary/50">
                                                ₹{mc.price}
                                            </span>
                                        </div>
                                        {mc.title.includes('(') && (
                                            <span className="text-xs font-bold text-primary/80 uppercase tracking-widest bg-primary/10 inline-block px-3 py-1 rounded-md self-start border border-primary/20">
                                                {mc.title.split('(')[1].replace(')', '').trim()}
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-gray-400 mb-8 font-light leading-relaxed">{mc.description}</p>
                                    
                                    <div className="mb-8 p-5 bg-white/5 rounded-2xl border border-white/5 group-hover:border-white/10 transition-colors">
                                        <ul className="space-y-3 text-sm text-gray-300">
                                            <li className="flex items-center"><Award className="w-4 h-4 mr-3 text-yellow-400" /> Certificate of Completion</li>
                                            <li className="flex items-center"><FileText className="w-4 h-4 mr-3 text-green-400" /> Premium Source Code & Notes</li>
                                            <li className="flex items-center"><Target className="w-4 h-4 mr-3 text-blue-400" /> Interview & Resume Support</li>
                                            <li className="flex items-center"><Github className="w-4 h-4 mr-3 text-white" /> Free GitHub Mastery</li>
                                            <li className="flex items-center"><Linkedin className="w-4 h-4 mr-3 text-blue-500" /> Free LinkedIn Profile Mastery</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="relative z-10 mt-auto">
                                    <div className="mb-6">
                                        <p className="text-xs tracking-widest text-gray-500 uppercase font-bold text-center mb-3">Enrolling Closes In</p>
                                        <CountdownTimer targetDate={mc.countdownTarget} />
                                    </div>
                                    <button
                                        onClick={() => handleEnrollClick(mc)}
                                        className="w-full bg-white text-black font-black text-lg py-4 rounded-xl hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                                    >
                                        Enroll Now
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Floating Modal Layer */}
                <AnimatePresence>
                    {selectedMc && (
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl"
                            onClick={() => setSelectedMc(null)}
                        >
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }}
                                className="bg-[#0f1524] border border-white/20 rounded-3xl p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
                                onClick={e => e.stopPropagation()}
                            >
                                <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/10">
                                    <h2 className="text-2xl font-black text-white">Enroll in {selectedMc.title}</h2>
                                    <button onClick={() => setSelectedMc(null)} className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white">
                                        <ArrowLeft className="w-6 h-6" />
                                    </button>
                                </div>

                                {success ? (
                                    <div className="text-center py-10">
                                        <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <CheckCircle className="w-12 h-12 text-green-500" />
                                        </div>
                                        <h3 className="text-3xl font-black mb-4">Request Logged!</h3>
                                        <p className="text-gray-400 mb-8 font-light text-lg">
                                            System has logged your details. Secure your seat strictly by sending the payment proof to our admin WhatsApp.
                                        </p>

                                        <a
                                            href={`https://wa.me/919931860964?text=${encodeURIComponent(
                                                `Hello Admin, I have enrolled in ${selectedMc.title}.\n\nName: ${formData.name}\nEmail: ${formData.email}\nLanguage Preference: ${formData.language}\nTransaction ID: ${formData.transactionId}\n\nPlease verify my enrollment.`
                                            )}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center bg-[#25D366] text-white font-bold text-lg py-4 px-6 rounded-xl hover:scale-105 transition-transform w-full shadow-lg"
                                        >
                                            <Upload className="w-6 h-6 mr-3" />
                                            Send Proof on WhatsApp
                                        </a>
                                    </div>
                                ) : (
                                    <div className="space-y-8">
                                        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center relative overflow-hidden">
                                            <div className="absolute inset-0 bg-primary/10 mix-blend-screen animate-pulse"></div>
                                            <p className="text-sm uppercase tracking-widest text-primary font-bold mb-4 relative z-10">Scan & Pay ₹{selectedMc.price}</p>
                                            <div className="bg-white p-3 inline-block rounded-xl relative z-10 shadow-xl">
                                                <img src="/assets/QR_payment.jpg" alt="Payment QR Code" className="w-48 h-48 object-contain rounded-lg" />
                                            </div>
                                            <p className="text-xs font-mono text-gray-400 mt-4 relative z-10 bg-black/40 inline-block px-3 py-1 rounded-full">UPI: advindiancoder@upi</p>
                                        </div>

                                        <form onSubmit={handleSubmit} className="space-y-5">
                                            {error && (
                                                <div className="flex items-center p-4 bg-red-500/10 border border-red-500/20 text-red-500 rounded-xl text-sm font-semibold">
                                                    <AlertCircle className="w-5 h-5 mr-3 flex-shrink-0" /> {error}
                                                </div>
                                            )}

                                            <div className="space-y-4">
                                                <input type="text" placeholder="Legal Full Name" required className="w-full p-4 rounded-xl bg-black/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })}/>
                                                <input type="email" placeholder="Professional Email" required className="w-full p-4 rounded-xl bg-black/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })}/>
                                                <input type="tel" placeholder="WhatsApp Number" required className="w-full p-4 rounded-xl bg-black/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })}/>
                                                
                                                <div className="bg-black/50 border border-white/10 rounded-xl p-4 overflow-hidden">
                                                    <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-3">Preferred Language</p>
                                                    <div className="flex gap-4">
                                                        {['English', 'Hindi'].map((lang) => (
                                                            <label key={lang} className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg border cursor-pointer transition-all ${formData.language === lang ? 'bg-primary/20 border-primary text-primary' : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'}`}>
                                                                <input type="radio" name="language" value={lang} checked={formData.language === lang} onChange={(e) => setFormData({ ...formData, language: e.target.value })} className="hidden" />
                                                                <div className={`w-3 h-3 rounded-full border-2 ${formData.language === lang ? 'bg-primary border-primary' : 'border-gray-500'}`}></div>
                                                                <span className="text-sm font-bold">{lang}</span>
                                                            </label>
                                                        ))}
                                                    </div>
                                                </div>

                                                <input type="text" placeholder="12-Digit UTR / Transaction ID" required className="w-full p-4 rounded-xl bg-black/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" value={formData.transactionId} onChange={e => setFormData({ ...formData, transactionId: e.target.value })}/>
                                            </div>

                                            <div className="border-2 border-dashed border-white/20 hover:border-primary/50 relative bg-black/30 rounded-xl p-6 text-center cursor-pointer transition-colors group">
                                                <input type="file" accept="image/*" required onChange={(e) => e.target.files && setFile(e.target.files[0])} className="absolute inset-0 opacity-0 cursor-pointer w-full h-full z-10" />
                                                <Upload className="w-8 h-8 mx-auto text-gray-500 group-hover:text-primary transition-colors mb-3" />
                                                <p className="text-sm font-semibold text-gray-400 group-hover:text-gray-300">
                                                    {file ? <span className="text-green-400 flex items-center justify-center gap-2"><CheckCircle className="w-4 h-4"/> {file.name}</span> : "Click or drag Payment Screenshot here"}
                                                </p>
                                            </div>

                                            <button type="submit" disabled={loading} className="w-full bg-white text-black font-black text-lg py-4 rounded-xl hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none hover:scale-[1.02]">
                                                {loading ? 'Processing Protocol...' : 'Finalize Enrollment'}
                                            </button>
                                        </form>
                                    </div>
                                )}
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </PageWrapper>
    );
};

export default MasterclassPage;