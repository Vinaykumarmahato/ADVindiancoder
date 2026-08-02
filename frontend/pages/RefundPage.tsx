import React from 'react';
import { Shield, CreditCard, RotateCcw, AlertCircle, HelpCircle } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import SEO from '../components/SEO';

const RefundPage: React.FC = () => {
    return (
        <PageWrapper>
            <SEO 
                title="Refund and Cancellation Policy - ADV Indian Coder"
                description="Review the refund conditions, cancellation policies, and support processes for premium registrations on ADV Indian Coder."
            />
            <div className="min-h-screen bg-white dark:bg-[#050914] text-gray-700 dark:text-gray-300 py-24 px-4 sm:px-6 lg:px-8 font-sans transition-colors duration-300">
                <div className="max-w-4xl mx-auto space-y-8">
                    
                    {/* Header */}
                    <div className="text-center space-y-4 border-b border-gray-200 dark:border-white/5 pb-8">
                        <div className="w-12 h-12 rounded-2xl bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center mx-auto border border-orange-500/20">
                            <RotateCcw className="w-6 h-6" />
                        </div>
                        <h1 className="text-3xl sm:text-5xl font-black text-gray-950 dark:text-white">Refund & Cancellation Policy</h1>
                        <p className="text-xs text-gray-555 font-bold uppercase tracking-wider">Last Updated: June 16, 2026</p>
                    </div>

                    {/* Content */}
                    <div className="bg-white dark:bg-[#0c1222]/50 border border-gray-200 dark:border-white/5 rounded-3xl p-6 sm:p-10 space-y-8 backdrop-blur-2xl shadow-md dark:shadow-xl leading-relaxed text-sm md:text-base font-semibold text-gray-900 dark:text-white">
                        
                        <section className="space-y-3">
                            <h2 className="text-xl font-bold text-gray-950 dark:text-white flex items-center gap-2">
                                <span className="text-orange-600 dark:text-orange-400">1.</span> Free Learning Content
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 font-light">
                                All standard courses, cloud IDE compilation tools, and DSA practice problems in the Practice Hub are 100% free of charge. No payment credentials or subscription plans are requested to access these fundamental assets.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl font-bold text-gray-955 dark:text-white flex items-center gap-2">
                                <span className="text-orange-655 dark:text-orange-400">2.</span> Live Cohort Registration
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 font-light">
                                For live cohort bootcamps or special placement premium programs, a registration fee may apply. Refund rules for live cohorts are structured as follows:
                            </p>
                            <ul className="list-disc pl-5 text-xs md:text-sm text-gray-600 dark:text-gray-400 font-semibold space-y-2 mt-2">
                                <li><strong className="text-gray-950 dark:text-white">Cancellation 7+ days prior to cohort start</strong>: Eligible for a full 100% refund.</li>
                                <li><strong className="text-gray-950 dark:text-white">Cancellation within 7 days of cohort start</strong>: Eligible for a 50% refund.</li>
                                <li><strong className="text-gray-950 dark:text-white">Post Cohort Start</strong>: No refunds will be approved once the live mentorship classes have commenced.</li>
                            </ul>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl font-bold text-gray-955 dark:text-white flex items-center gap-2">
                                <span className="text-orange-655 dark:text-orange-400">3.</span> Premium Assessment Packages
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 font-light">
                                Fees paid for custom mock test evaluations (e.g. UPSC predicted mock assessments) or individualized code reviews are fully non-refundable once the evaluation report is generated or the test has been submitted.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl font-bold text-gray-955 dark:text-white flex items-center gap-2">
                                <span className="text-orange-655 dark:text-orange-400">4.</span> Refund Processing Timeline
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 font-light">
                                Approved refund amounts will be routed back to the original payment source (UPI, Card, Net Banking). Processing and bank clearance typically takes 5 to 7 business days from the approval confirmation.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl font-bold text-gray-955 dark:text-white flex items-center gap-2">
                                <span className="text-orange-655 dark:text-orange-400">5.</span> Cancellation Process
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 font-light">
                                To request cancellations, please navigate to your student profile dashboard or submit a help claim to our support center. Ensure to attach transaction reference IDs for rapid claim resolution.
                            </p>
                        </section>

                        <div className="bg-orange-500/5 border border-orange-500/20 p-4 rounded-2xl flex items-start gap-3 mt-8">
                            <AlertCircle className="w-5 h-5 text-orange-600 dark:text-orange-400 shrink-0 mt-0.5" />
                            <p className="text-xs text-gray-600 dark:text-gray-400 font-semibold leading-relaxed">
                                For payment issues, double debits, or refund requests, please email our billing support desk directly at <a href="mailto:billing@advindiancoder.com" className="text-orange-600 dark:text-orange-400 hover:underline">billing@advindiancoder.com</a>.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </PageWrapper>
    );
};

export default RefundPage;
