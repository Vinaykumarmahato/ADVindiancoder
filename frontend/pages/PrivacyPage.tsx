import React from 'react';
import { Shield, Eye, Lock, Globe, AlertCircle } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import SEO from '../components/SEO';

const PrivacyPage: React.FC = () => {
    return (
        <PageWrapper>
            <SEO 
                title="Privacy Policy - ADV Indian Coder"
                description="Read our privacy policy regarding collections, usage, and security of user accounts, coding logs, and analytics on ADV Indian Coder."
            />
            <div className="min-h-screen bg-white dark:bg-[#050914] text-gray-700 dark:text-gray-300 py-24 px-4 sm:px-6 lg:px-8 font-sans transition-colors duration-300">
                <div className="max-w-4xl mx-auto space-y-8">
                    
                    {/* Header */}
                    <div className="text-center space-y-4 border-b border-gray-200 dark:border-white/5 pb-8">
                        <div className="w-12 h-12 rounded-2xl bg-green-500/10 text-green-600 dark:text-green-400 flex items-center justify-center mx-auto border border-green-500/20">
                            <Shield className="w-6 h-6" />
                        </div>
                        <h1 className="text-3xl sm:text-5xl font-black text-gray-950 dark:text-white">Privacy Policy</h1>
                        <p className="text-xs text-gray-550 font-bold uppercase tracking-wider">Last Updated: June 16, 2026</p>
                    </div>

                    {/* Content */}
                    <div className="bg-white dark:bg-[#0c1222]/50 border border-gray-200 dark:border-white/5 rounded-3xl p-6 sm:p-10 space-y-8 backdrop-blur-2xl shadow-md dark:shadow-xl leading-relaxed text-sm md:text-base font-semibold text-gray-900 dark:text-white">
                        
                        <section className="space-y-3">
                            <h2 className="text-xl font-bold text-gray-950 dark:text-white flex items-center gap-2">
                                <span className="text-green-600 dark:text-green-400">1.</span> Personal Data We Collect
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 font-light">
                                We collect information necessary to manage user authentication, progress profiling, and certification. This includes:
                            </p>
                            <ul className="list-disc pl-5 text-xs md:text-sm text-gray-600 dark:text-gray-400 font-semibold space-y-2 mt-2">
                                <li>Account registration credentials: Name, email address, phone number (OTP verified).</li>
                                <li>LinkedIn URL for optional student profile linking.</li>
                                <li>Activity Logs: File creations, saves, deletions, and sharing details within our Compiler playgrounds.</li>
                                <li>Performance Stats: Successful/failed compiles, mock exam scores, and active daily streaks.</li>
                            </ul>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl font-bold text-gray-950 dark:text-white flex items-center gap-2">
                                <span className="text-green-600 dark:text-green-400">2.</span> How We Use Your Data
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 font-light">
                                Your information is exclusively utilized to render a customized dashboard experience. This includes compiling daily streak calendars, tracking weekly coding hours, showing language distribution charts, and enabling certifications. We do not sell or share student credentials with third-party advertising companies.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl font-bold text-gray-955 dark:text-white flex items-center gap-2">
                                <span className="text-green-600 dark:text-green-400">3.</span> Storage & Data Security
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 font-light">
                                All profile data and submission logs are persisted inside secured MySQL databases. Authentication utilizes JWT (JSON Web Tokens) encrypting email identifiers, and passwords are hashed using BCrypt. We take industry-standard precautions to prevent unauthorized database read access.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl font-bold text-gray-955 dark:text-white flex items-center gap-2">
                                <span className="text-green-600 dark:text-green-400">4.</span> Third-Party Service Providers
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 font-light">
                                We integrate with external services to support specific platform flows:
                            </p>
                            <ul className="list-disc pl-5 text-xs md:text-sm text-gray-600 dark:text-gray-400 font-semibold space-y-2 mt-2">
                                <li><strong className="text-gray-950 dark:text-white">Twilio & Email Services</strong>: Used exclusively to route 6-digit OTP logins.</li>
                                <li><strong className="text-gray-950 dark:text-white">Judge0</strong>: Processes code snippets for the Practice Hub. Judge0 does not persist source codes.</li>
                                <li><strong className="text-gray-950 dark:text-white">Monaco Editor</strong>: Client-side component rendering code blocks.</li>
                            </ul>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl font-bold text-gray-955 dark:text-white flex items-center gap-2">
                                <span className="text-green-600 dark:text-green-400">5.</span> Cookies & Local Storage
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 font-light">
                                We utilize secure browser cookies and local storage tokens (`adv_coder_token` and theme preferences) to maintain your login session active and remember UI state transitions. You can customize cookie levels via your browser settings or our Cookie Preference page.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl font-bold text-gray-955 dark:text-white flex items-center gap-2">
                                <span className="text-green-600 dark:text-green-400">6.</span> Your Rights & Access
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 font-light">
                                You hold the right to request a copy of the activity records we store, modify profile credentials via the Dashboard Modal, or request account deletions. Deleting an account removes all compiled logs, streak histories, and repository statistics permanently.
                            </p>
                        </section>

                        <div className="bg-green-500/5 border border-green-500/20 p-4 rounded-2xl flex items-start gap-3 mt-8">
                            <AlertCircle className="w-5 h-5 text-green-550 dark:text-green-400 shrink-0 mt-0.5" />
                            <p className="text-xs text-gray-600 dark:text-gray-400 font-semibold leading-relaxed">
                                For data protection questions or privacy claims, contact our Data Security officer at <a href="mailto:privacy@advindiancoder.com" className="text-green-600 dark:text-green-400 hover:underline">privacy@advindiancoder.com</a>.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </PageWrapper>
    );
};

export default PrivacyPage;
