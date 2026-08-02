import React from 'react';
import { Shield, FileText, Compass, AlertCircle } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import SEO from '../components/SEO';

const TermsPage: React.FC = () => {
    return (
        <PageWrapper>
            <SEO 
                title="Terms of Service - ADV Indian Coder"
                description="Read the terms of service governing the use of the ADV Indian Coder platform, online IDE, courses, and account registration."
            />
            <div className="min-h-screen bg-white dark:bg-[#050914] text-gray-700 dark:text-gray-300 py-24 px-4 sm:px-6 lg:px-8 font-sans transition-colors duration-300">
                <div className="max-w-4xl mx-auto space-y-8">
                    
                    {/* Header */}
                    <div className="text-center space-y-4 border-b border-gray-200 dark:border-white/5 pb-8">
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto border border-primary/20">
                            <FileText className="w-6 h-6" />
                        </div>
                        <h1 className="text-3xl sm:text-5xl font-black text-gray-955 dark:text-white">Terms of Service</h1>
                        <p className="text-xs text-gray-555 font-bold uppercase tracking-wider">Last Updated: June 16, 2026</p>
                    </div>

                    {/* Content */}
                    <div className="bg-white dark:bg-[#0c1222]/50 border border-gray-200 dark:border-white/5 rounded-3xl p-6 sm:p-10 space-y-8 backdrop-blur-2xl shadow-md dark:shadow-xl leading-relaxed text-sm md:text-base font-semibold text-gray-900 dark:text-white">
                        
                        <section className="space-y-3">
                            <h2 className="text-xl font-bold text-gray-955 dark:text-white flex items-center gap-2">
                                <span className="text-primary">1.</span> Acceptance of Terms
                            </h2>
                            <p className="text-gray-655 dark:text-gray-400 font-light">
                                By accessing or using the ADV Indian Coder platform (including the online IDE, courses, mock test hubs, and dashboard), you agree to be bound by these Terms of Service. If you do not agree, please refrain from using the platform.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl font-bold text-gray-955 dark:text-white flex items-center gap-2">
                                <span className="text-primary">2.</span> Account Registration & Credentials
                            </h2>
                            <p className="text-gray-655 dark:text-gray-400 font-light">
                                To unlock all platform features, you may register using an email, Google profile, or phone number. You are solely responsible for maintaining the confidentiality of your login tokens and credentials. Any activity logged under your email is your responsibility.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl font-bold text-gray-955 dark:text-white flex items-center gap-2">
                                <span className="text-primary">3.</span> Cloud IDE & Coding Sandbox Usage
                            </h2>
                            <p className="text-gray-655 dark:text-gray-400 font-light">
                                Our integrated cloud IDE (ADV Lab) executes source code through secured compilation engines. You agree not to upload malicious scripts, viruses, or infinite loops designed to consume excessive resource capacity. Code uploaded to general playgrounds remains local, whereas submissions to coding challenges are saved to our databases for score tracking.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl font-bold text-gray-955 dark:text-white flex items-center gap-2">
                                <span className="text-primary">4.</span> Intellectual Property & Code Ownership
                            </h2>
                            <p className="text-gray-655 dark:text-gray-400 font-light">
                                The lecture videos, notes, mock questions, and structural designs belong exclusively to ADV Indian Coder. The code solutions written by you in the editor remain your intellectual property. However, by submitting challenges, you grant the platform license to evaluate, run, and display statistics based on your code logs.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl font-bold text-gray-955 dark:text-white flex items-center gap-2">
                                <span className="text-primary">5.</span> Third-Party Compiler Integrations
                            </h2>
                            <p className="text-gray-655 dark:text-gray-400 font-light">
                                Code compilation in the Practice Hub utilizes Judge0 APIs. While we make every effort to ensure stability, we do not guarantee uninterrupted execution services. We hold zero liability for data lost due to compilation API outages.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl font-bold text-gray-955 dark:text-white flex items-center gap-2">
                                <span className="text-primary">6.</span> Platform Termination
                            </h2>
                            <p className="text-gray-655 dark:text-gray-400 font-light">
                                We reserve the right to suspend or terminate accounts displaying fraudulent activities, database spamming, plagiarism in mock test evaluations, or violation of standard terms without notice.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl font-bold text-gray-955 dark:text-white flex items-center gap-2">
                                <span className="text-primary">7.</span> Governing Law
                            </h2>
                            <p className="text-gray-655 dark:text-gray-400 font-light">
                                These terms are governed by and construed in accordance with the laws of India. Any legal dispute arising under these conditions shall fall under the jurisdiction of the courts of India.
                            </p>
                        </section>

                        <div className="bg-primary/5 border border-primary/20 p-4 rounded-2xl flex items-start gap-3 mt-8">
                            <AlertCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <p className="text-xs text-gray-650 dark:text-gray-400 font-semibold leading-relaxed">
                                If you have questions regarding our Terms of Service, please reach out to our legal team at <a href="mailto:support@advindiancoder.com" className="text-primary hover:underline">support@advindiancoder.com</a>.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </PageWrapper>
    );
};

export default TermsPage;
