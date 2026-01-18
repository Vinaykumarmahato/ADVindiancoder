import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, FileText, TrendingUp, ArrowLeft, CheckCircle, Upload, AlertCircle, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import EnrollmentService from '../services/enrollment.service';
import PageWrapper from '../components/PageWrapper';
import { MASTERCLASSES, TESTIMONIALS } from '../constants';

const CountdownTimer = ({ targetDate }: { targetDate: string }) => {
    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};
        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
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
        <div className="flex space-x-2 text-center">
            {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="flex flex-col items-center bg-white/10 p-2 rounded-lg w-16">
                    <span className="text-2xl font-bold text-secondary">{String(value).padStart(2, '0')}</span>
                    <span className="text-xs uppercase">{unit}</span>
                </div>
            ))}
        </div>
    );
};

const MasterclassPage = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [selectedMc, setSelectedMc] = useState<any>(null); // For modal
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        transactionId: ''
    });
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
    };

    const handleEnrollClick = (mc: any) => {
        if (!user) {
            navigate('/auth');
            return;
        }
        setSelectedMc(mc);
        setSuccess(false);
        setError('');
        // Reset form when opening modal
        setFormData({ name: '', email: '', phone: '', transactionId: '' });
        setFile(null);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!file) {
            setError('Please upload a screenshot of your payment.');
            return;
        }

        setLoading(true);
        setError('');

        const data = new FormData();
        data.append('name', formData.name);
        data.append('email', formData.email);
        data.append('phone', formData.phone);
        data.append('transactionId', formData.transactionId);
        data.append('screenshot', file);

        try {
            await EnrollmentService.enroll(data);
            setSuccess(true);
            // Do NOT clear form data here so it persists for WhatsApp button
        } catch (err) {
            setError('Enrollment failed. Please try again.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <PageWrapper>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Hero */}
                <div className="text-center py-12 px-6 rounded-3xl bg-gradient-to-r from-primary to-blue-500 text-white mb-16 shadow-2xl">
                    <h1 className="text-4xl md:text-5xl font-extrabold">Master Industry-Ready Skills</h1>
                    <p className="mt-4 text-2xl font-semibold text-secondary">Just ₹49 per Class 💡</p>
                </div>

                {/* Masterclasses Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    {MASTERCLASSES.map(mc => (
                        <motion.div
                            key={mc.id}
                            className="bg-white/5 dark:bg-black/20 border border-white/10 rounded-2xl p-6 shadow-lg flex flex-col justify-between"
                            whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(255, 193, 7, 0.25)" }}
                            transition={{ duration: 0.3 }}
                        >
                            <div>
                                <h3 className="text-2xl font-bold mb-2 text-secondary">{mc.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">{mc.description}</p>
                                <div className="my-4 pt-4 border-t border-white/10">
                                    <h4 className="font-semibold mb-3 text-white">What you'll get:</h4>
                                    <ul className="space-y-2 text-sm text-gray-300">
                                        <li className="flex items-center">
                                            <Award className="w-4 h-4 mr-2 text-yellow-400 flex-shrink-0" />
                                            <span>Official Certificate of Completion</span>
                                        </li>
                                        <li className="flex items-center">
                                            <FileText className="w-4 h-4 mr-2 text-green-400 flex-shrink-0" />
                                            <span>Downloadable Notes & Scripts</span>
                                        </li>
                                        <li className="flex items-center">
                                            <TrendingUp className="w-4 h-4 mr-2 text-blue-400 flex-shrink-0" />
                                            <span>1-on-1 Career Support Access</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-auto">
                                <div className="mb-4">
                                    <p className="text-sm font-semibold mb-2">Next session starts in:</p>
                                    <CountdownTimer targetDate={mc.countdownTarget} />
                                </div>
                                <button
                                    onClick={() => handleEnrollClick(mc)}
                                    className="w-full block text-center bg-secondary hover:bg-yellow-500 text-dark-bg font-bold py-3 px-4 rounded-lg transition duration-300"
                                >
                                    Enroll Now for ₹{mc.price}
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Enrollment Modal */}
                <AnimatePresence>
                    {selectedMc && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                            onClick={() => setSelectedMc(null)}
                        >
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                className="bg-white dark:bg-gray-900 rounded-2xl p-6 max-w-lg w-full max-h-[90vh] overflow-y-auto"
                                onClick={e => e.stopPropagation()}
                            >
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-2xl font-bold">Enroll in {selectedMc.title}</h2>
                                    <button onClick={() => setSelectedMc(null)} className="p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full">
                                        <ArrowLeft className="w-6 h-6" />
                                    </button>
                                </div>

                                {success ? (
                                    <div className="text-center py-10">
                                        <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
                                        <h3 className="text-2xl font-bold mb-2">Enrollment Submitted!</h3>
                                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                                            We have received your details. Please send the payment proof on WhatsApp to confirm your seat immediately.
                                        </p>

                                        <a
                                            href={`https://wa.me/919931860964?text=${encodeURIComponent(
                                                `Hello, I have enrolled in ${selectedMc.title}.\n\nName: ${formData.name}\nEmail: ${formData.email}\nTransaction ID: ${formData.transactionId}\n\nPlease verify my enrollment.`
                                            )}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-3 px-6 rounded-lg transition duration-300 mb-4"
                                        >
                                            <Upload className="w-6 h-6 mr-2" />
                                            Send Details on WhatsApp
                                        </a>

                                        <br />
                                        <button onClick={() => setSelectedMc(null)} className="text-gray-500 hover:underline">
                                            Close
                                        </button>
                                    </div>
                                ) : (
                                    <div className="space-y-6">
                                        {/* QR Code Section */}
                                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl text-center">
                                            <p className="font-semibold mb-2">Scan & Pay ₹{selectedMc.price}</p>
                                            <div className="bg-white p-2 inline-block rounded-lg">
                                                {/* Local QR Code Image */}
                                                <img
                                                    src="/assets/QR_payment.jpg"
                                                    alt="Payment QR Code"
                                                    className="w-40 h-40 object-contain"
                                                />
                                            </div>
                                            <p className="text-xs text-gray-500 mt-2">UPI ID: advindiancoder@upi</p>
                                        </div>

                                        <form onSubmit={handleSubmit} className="space-y-4">
                                            {error && (
                                                <div className="flex items-center p-3 bg-red-500/10 text-red-500 rounded-lg text-sm">
                                                    <AlertCircle className="w-4 h-4 mr-2" />
                                                    {error}
                                                </div>
                                            )}

                                            <input
                                                type="text"
                                                placeholder="Full Name"
                                                required
                                                className="w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                                                value={formData.name}
                                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                                            />
                                            <input
                                                type="email"
                                                placeholder="Email Address"
                                                required
                                                className="w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                                                value={formData.email}
                                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                                            />
                                            <input
                                                type="tel"
                                                placeholder="Phone Number"
                                                required
                                                className="w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                                                value={formData.phone}
                                                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                            />
                                            <input
                                                type="text"
                                                placeholder="Transaction ID / UTR"
                                                required
                                                className="w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                                                value={formData.transactionId}
                                                onChange={e => setFormData({ ...formData, transactionId: e.target.value })}
                                            />

                                            <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-4 text-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors relative">
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    required
                                                    onChange={handleFileChange}
                                                    className="absolute inset-0 opacity-0 cursor-pointer"
                                                />
                                                <Upload className="w-8 h-8 mx-auto text-gray-400 mb-2" />
                                                <p className="text-sm text-gray-500">
                                                    {file ? file.name : "Upload Payment Screenshot"}
                                                </p>
                                            </div>

                                            <button
                                                type="submit"
                                                disabled={loading}
                                                className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50"
                                            >
                                                {loading ? 'Submitting...' : 'Submit Enrollment'}
                                            </button>
                                        </form>
                                    </div>
                                )}
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Testimonials */}
                <div className="relative text-center">
                    <h2 className="text-3xl font-bold mb-12">What Our Learners Say</h2>
                    <div className="relative h-64">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentTestimonial}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 flex flex-col items-center justify-center"
                            >
                                <img src={TESTIMONIALS[currentTestimonial].avatar} alt={TESTIMONIALS[currentTestimonial].name} className="w-20 h-20 rounded-full mb-4 border-2 border-primary" />
                                <p className="text-lg italic max-w-2xl mx-auto">"{TESTIMONIALS[currentTestimonial].quote}"</p>
                                <p className="mt-4 font-bold">{TESTIMONIALS[currentTestimonial].name}</p>
                                <p className="text-sm text-gray-500">{TESTIMONIALS[currentTestimonial].role}</p>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                    <button onClick={prevTestimonial} className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20">
                        <ArrowLeft />
                    </button>
                    <button onClick={nextTestimonial} className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20">
                        <ArrowRight />
                    </button>
                </div>
            </div>
        </PageWrapper>
    );
};

export default MasterclassPage;