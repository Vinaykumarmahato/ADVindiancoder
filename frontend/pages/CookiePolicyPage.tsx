import React, { useState, useEffect } from 'react';
import { Shield, Eye, ShieldCheck, CheckCircle2 } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import SEO from '../components/SEO';

const CookiePolicyPage: React.FC = () => {
    // Read preferences from localStorage or set defaults
    const [analyticsConsent, setAnalyticsConsent] = useState(true);
    const [preferencesConsent, setPreferencesConsent] = useState(true);
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        const storedAnalytics = localStorage.getItem('cookie_consent_analytics');
        const storedPrefs = localStorage.getItem('cookie_consent_preferences');
        if (storedAnalytics !== null) setAnalyticsConsent(storedAnalytics === 'true');
        if (storedPrefs !== null) setPreferencesConsent(storedPrefs === 'true');
    }, []);

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        localStorage.setItem('cookie_consent_analytics', String(analyticsConsent));
        localStorage.setItem('cookie_consent_preferences', String(preferencesConsent));
        setSaved(true);
        setTimeout(() => setSaved(false), 4000);
    };

    return (
        <PageWrapper>
            <SEO 
                title="Cookie & Preferences Settings - ADV Indian Coder"
                description="Manage your cookie preferences and local storage options for theme settings and editor setups on ADV Indian Coder."
            />
            <div className="min-h-screen bg-white dark:bg-[#050914] text-gray-700 dark:text-gray-300 py-24 px-4 sm:px-6 lg:px-8 font-sans transition-colors duration-300">
                <div className="max-w-4xl mx-auto space-y-8">
                    
                    {/* Header */}
                    <div className="text-center space-y-4 border-b border-gray-200 dark:border-white/5 pb-8">
                        <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mx-auto border border-blue-500/20">
                            <Eye className="w-6 h-6" />
                        </div>
                        <h1 className="text-3xl sm:text-5xl font-black text-gray-950 dark:text-white">Cookie & Preferences Policy</h1>
                        <p className="text-xs text-gray-550 font-bold uppercase tracking-wider">Manage Consent Preferences</p>
                    </div>

                    {/* Content */}
                    <div className="bg-white dark:bg-[#0c1222]/50 border border-gray-200 dark:border-white/5 rounded-3xl p-6 sm:p-10 space-y-8 backdrop-blur-2xl shadow-md dark:shadow-xl leading-relaxed text-sm md:text-base font-semibold text-gray-900 dark:text-white">
                        
                        <p className="text-gray-600 dark:text-gray-400 font-light text-sm md:text-base">
                            We use standard browser local storage and cookies to maintain authenticated login tokens, remember user theme selections, and aggregate dashboard compile rate analytics. Below you can customize which cookies and identifiers we are allowed to use.
                        </p>

                        <form onSubmit={handleSave} className="space-y-6 pt-4">
                            
                            {/* Necessary Cookies */}
                             <div className="flex items-start justify-between gap-6 p-5 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/5">
                                <div className="space-y-1">
                                    <h3 className="text-base font-bold text-gray-950 dark:text-white flex items-center gap-2">
                                        Strictly Necessary Cookies
                                        <span className="text-[9px] bg-blue-500/20 text-blue-400 border border-blue-500/30 px-2 py-0.5 rounded-full uppercase tracking-wider">Required</span>
                                    </h3>
                                    <p className="text-xs text-gray-600 dark:text-gray-400 font-light">
                                        These items are essential for user authentication (session tokens), CSRF request protection, and theme consistency. Disabling these would render account logins inoperable.
                                    </p>
                                </div>
                                <span className="text-xs font-black text-blue-600 dark:text-blue-400 uppercase bg-blue-500/10 px-3 py-1.5 rounded-xl border border-blue-500/10 shrink-0">Always Active</span>
                            </div>

                            {/* Analytics Cookies */}
                             <div className="flex items-start justify-between gap-6 p-5 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/5">
                                <div className="space-y-1">
                                    <h3 className="text-base font-bold text-gray-955 dark:text-white flex items-center gap-2">
                                        Analytics & Performance Vitals
                                    </h3>
                                    <p className="text-xs text-gray-650 dark:text-gray-400 font-light">
                                        Allows the platform to measure code compilation rates, log activity feeds in workspaces, and compile weekly hours charts on your dashboard.
                                    </p>
                                </div>
                                <div className="relative inline-flex items-center cursor-pointer shrink-0 mt-1">
                                    <input 
                                        type="checkbox" 
                                        checked={analyticsConsent}
                                        onChange={(e) => setAnalyticsConsent(e.target.checked)}
                                        className="sr-only peer"
                                    />
                                    <div className="w-11 h-6 bg-gray-200 dark:bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-gray-300 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500 peer-checked:after:bg-white" />
                                </div>
                            </div>

                            {/* Preference Cookies */}
                             <div className="flex items-start justify-between gap-6 p-5 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/5">
                                <div className="space-y-1">
                                    <h3 className="text-base font-bold text-gray-955 dark:text-white flex items-center gap-2">
                                        Preference & Customization Storage
                                    </h3>
                                    <p className="text-xs text-gray-650 dark:text-gray-400 font-light">
                                        Saves your Monaco editor choices (font size, tab indentation) and compiler default active languages, ensuring you don't have to re-configure on reload.
                                    </p>
                                </div>
                                <div className="relative inline-flex items-center cursor-pointer shrink-0 mt-1">
                                    <input 
                                        type="checkbox" 
                                        checked={preferencesConsent}
                                        onChange={(e) => setPreferencesConsent(e.target.checked)}
                                        className="sr-only peer"
                                    />
                                    <div className="w-11 h-6 bg-gray-200 dark:bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-gray-300 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500 peer-checked:after:bg-white" />
                                </div>
                            </div>

                            {/* Action Control */}
                            <div className="pt-4 flex items-center justify-between gap-4 flex-wrap">
                                <p className="text-xs text-gray-500 font-semibold leading-relaxed">
                                    Clicking save stores your preference selections directly to browser settings.
                                </p>
                                <button
                                    type="submit"
                                    className="px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-black text-xs uppercase tracking-wider transition-all shadow-lg shadow-blue-500/20 active:scale-[0.98] cursor-pointer"
                                >
                                    Save Cookie Preferences
                                </button>
                            </div>

                            {saved && (
                                <p className="text-xs text-green-400 font-bold flex items-center justify-end gap-1">
                                    <CheckCircle2 className="w-4 h-4" />
                                    Preferences saved to local browser storage successfully!
                                </p>
                            )}

                        </form>
                    </div>
                </div>
            </div>
        </PageWrapper>
    );
};

export default CookiePolicyPage;
