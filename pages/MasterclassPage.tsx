import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Award, FileText, TrendingUp } from 'lucide-react';
import { MASTERCLASSES, TESTIMONIALS } from '../constants';
import PageWrapper from '../components/PageWrapper';

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
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
    };

    return (
        <PageWrapper>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Hero */}
                <div className="text-center py-12 px-6 rounded-3xl bg-gradient-to-r from-primary to-blue-500 text-white mb-16 shadow-2xl">
                    <h1 className="text-4xl md:text-5xl font-extrabold">Master Industry-Ready Skills</h1>
                    <p className="mt-4 text-2xl font-semibold text-secondary">Just ₹9 per Class 💡</p>
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
                                <a href={mc.enrollLink} className="w-full block text-center bg-secondary hover:bg-yellow-500 text-dark-bg font-bold py-3 px-4 rounded-lg transition duration-300">
                                    Enroll Now for ₹{mc.price}
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

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