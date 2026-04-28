import React, { useState } from 'react';
import { ChevronDown, MessageSquare } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const GlowingOrb = ({ className }: { className: string }) => (
    <div className={`absolute rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-pulse ${className}`}></div>
);

const FaqItem = ({ question, answer }: { question: string, answer: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-white/10 rounded-2xl mb-4 bg-white/5 backdrop-blur-md overflow-hidden relative group transition-colors hover:border-primary/30">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <button
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none relative z-10"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={`font-bold text-lg pr-4 transition-colors ${isOpen ? 'text-primary' : 'text-white'}`}>{question}</span>
                <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDown className={`w-6 h-6 transition-colors ${isOpen ? 'text-primary' : 'text-gray-500'}`} />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="relative z-10"
                    >
                        <div className="p-6 pt-0 text-gray-400 font-light leading-relaxed border-t border-white/5 mt-2">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FaqPage = () => {
    return (
        <PageWrapper>
            <SEO 
                title="FAQ - ADV Indian Coder" 
                description="Frequently asked questions about courses, pricing and learning at ADV Indian Coder"
            />
            <div className="bg-[#050914] text-white min-h-screen font-sans relative overflow-hidden flex flex-col">
                {/* Background Grid */}
                <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                {/* Header */}
                <div className="relative z-10 pt-10 md:pt-32 pb-24 text-center px-4">
                    <GlowingOrb className="top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/20" />
                    <div className="max-w-4xl mx-auto relative">
                        <motion.span initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="bg-indigo-500/10 backdrop-blur-md border border-indigo-500/30 text-indigo-400 font-mono text-sm tracking-widest py-2 px-6 rounded-full mb-6 inline-flex shadow-[0_0_20px_rgba(99,102,241,0.2)]">
                            CLARITY HUB
                        </motion.span>
                        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 1 }} className="text-5xl md:text-7xl lg:text-[5.5rem] font-black leading-[1.1] tracking-tighter mb-8">
                            Knowledge <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-primary to-cyan-400">Database.</span>
                        </motion.h1>
                        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 1 }} className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
                            No secrets. No hidden terms. Everything you need to know about our cohorts, placements, and exact methodologies is documented right here.
                        </motion.p>
                    </div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 flex-grow">
                    <motion.div variants={fadeUp} initial="hidden" animate="show" className="space-y-16">
                        
                        {/* General Questions */}
                        <section>
                            <h2 className="text-3xl font-black mb-8 text-white flex items-center gap-4"><span className="bg-white/10 border border-white/20 p-3 rounded-2xl">📌</span> Core Directives</h2>
                            <FaqItem question="Who exactly are these cohorts designed for?" answer="Our programs target complete beginners wanting strict guidance, college students preparing for placement seasons, and freshers struggling to cross the initial employment barrier." />
                            <FaqItem question="Do I need a strong computer science background?" answer="Absolutely not. You need zero prior experience. You only need a laptop, decent internet, and the mental grit to practice every single day for 30 days." />
                            <FaqItem question="What is the medium of instruction?" answer="We teach in professional Hinglish (Hindi + English) so you grasp complex logic natively while learning standard English technical jargon for interviews." />
                        </section>

                        {/* Course Questions */}
                        <section>
                            <h2 className="text-3xl font-black mb-8 text-white flex items-center gap-4"><span className="bg-white/10 border border-white/20 p-3 rounded-2xl">💻</span> Protocol specific details</h2>
                            <FaqItem question="Are these pre-recorded videos or live classes?" answer="All cohorts are strictly live, interactive sessions over premium video bridges. Recorded backups are securely stored and provided within 24 hours so you never miss a lecture." />
                            <FaqItem question="What is the daily time commitment?" answer="Expect 1.5 to 2 hours of live session intensity Monday through Friday, plus 1 hour of assigned hands-on coding practice." />
                            <FaqItem question="Will there be an official certification?" answer="Yes. Every graduating student receives an authenticated Completion Certificate that can be verified and directly embedded into your LinkedIn profile." />
                            <FaqItem question="Are the projects enterprise-grade?" answer="Yes. We do not build simple calculators. You will deploy real applications that solve actual business problems, proving to recruiters that you can handle production code." />
                        </section>

                        {/* Career Questions */}
                        <section>
                            <h2 className="text-3xl font-black mb-8 text-white flex items-center gap-4"><span className="bg-white/10 border border-white/20 p-3 rounded-2xl">🚀</span> Placement Infrastructure</h2>
                            <FaqItem question="Does ADV Indian Coder guarantee job placement?" answer="No honest platform can legally guarantee a job. However, we guarantee that you will be technically superior to your peers. We provide fierce interview training, resume overhauls, and LinkedIn branding." />
                            <FaqItem question="What salary package can I expect?" answer="Entry-level packages for our target roles typically start at ₹3 LPA and scale up to ₹8 LPA+. Top performers with exceptional portfolios have secured above ₹12 LPA." />
                            <FaqItem question="What job titles do these skills unlock?" answer={
                                <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-400">
                                    <li><strong className="text-white">Python Cohort:</strong> Junior Backend Dev, Data Analyst, QA Automation Eng.</li>
                                    <li><strong className="text-white">Java Masterclass:</strong> Core Java Developer, Enterprise Engineer, Spring Boot Dev.</li>
                                    <li><strong className="text-white">SQL Architecture:</strong> DBA, Business Intelligence Analyst, Data Manager.</li>
                                    <li><strong className="text-white">Prompt Eng:</strong> AI Logic specialist, Automation Consultant.</li>
                                </ul>
                            } />
                        </section>

                        {/* Payment Questions */}
                        <section>
                            <h2 className="text-3xl font-black mb-8 text-white flex items-center gap-4"><span className="bg-white/10 border border-white/20 p-3 rounded-2xl">💳</span> Enrollment & Transactions</h2>
                            <FaqItem question="How do I lock in my seat?" answer="Select your desired Masterclass, review the schedule, and hit Enroll. Complete your payment via the provided secure UPI QR and send your screenshot via WhatsApp to trigger immediate confirmation." />
                            <FaqItem question="Do you have a refund policy?" answer="Due to the strict seat limits of live interactive cohorts, we cannot issue refunds once a batch begins. Please reach out to our mentor team on WhatsApp to clear your doubts before deploying your capital." />
                        </section>

                    </motion.div>

                    {/* Support CTA */}
                    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-32 relative text-center">
                        <GlowingOrb className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/10" />
                        <div className="relative z-10 bg-[#0a0f1c] rounded-[3rem] p-12 lg:p-16 border border-white/10 shadow-2xl">
                            <MessageSquare className="w-16 h-16 text-[#25D366] mx-auto mb-6" />
                            <h3 className="text-4xl font-black mb-4">Still analyzing?</h3>
                            <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto font-light">Stop guessing. Ping our mentors directly on WhatsApp and get your specific queries resolved in minutes.</p>
                            <a href="https://wa.me/919931860964" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#25D366] text-white font-black text-lg py-4 px-10 rounded-full hover:scale-105 transition-transform shadow-[0_0_30px_rgba(37,211,102,0.3)]">
                                Open WhatsApp Thread
                            </a>
                        </div>
                    </motion.div>

                </div>
            </div>
        </PageWrapper>
    );
};

export default FaqPage;
