import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle, AlertCircle, MessageSquare } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import ContactService from '../services/contact.service';
import SEO from '../components/SEO';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const GlowingOrb = ({ className }: { className: string }) => (
    <div className={`absolute rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-pulse ${className}`}></div>
);

const ContactPage = () => {
    const formRef = React.useRef<HTMLDivElement>(null);
    const [formData, setFormData] = useState({ name: '', email: '', subject: 'General Inquiry', message: '' });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); setLoading(true); setError(''); setSuccess(false);
        try {
            await ContactService.submitContactForm(formData);
            setSuccess(true);
            setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
        } catch (err) {
            setError('Failed to send message. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <PageWrapper>
            <SEO 
                title="Contact Us - ADV Indian Coder" 
                description="Get in touch with ADV Indian Coder for queries, support and collaborations"
            />
            <div className="bg-[#050914] text-white min-h-screen font-sans relative overflow-hidden flex flex-col">
                {/* Background Grid */}
                <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                {/* Header */}
                <div className="relative z-10 pt-10 md:pt-20 pb-16 text-center px-4">
                    <GlowingOrb className="top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-600/20" />
                    <div className="max-w-4xl mx-auto relative">
                        <motion.span initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="bg-red-500/10 backdrop-blur-md border border-red-500/30 text-red-500 font-mono text-sm tracking-widest py-2 px-6 rounded-full mb-6 inline-flex shadow-[0_0_20px_rgba(239,68,68,0.2)]">
                            COMMUNICATION NODE
                        </motion.span>
                        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 1 }} className="text-5xl md:text-7xl lg:text-[5.5rem] font-black leading-[1.1] tracking-tighter mb-8">
                            Initialize <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-500 to-yellow-500">Contact.</span>
                        </motion.h1>
                        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 1 }} className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
                            Have a technical question, need cohort assistance, or want to sponsor a masterclass? Transmit your message below.
                        </motion.p>
                    </div>
                </div>

                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                        
                        {/* Contact Form Container */}
                        <motion.div ref={formRef} variants={fadeUp} initial="hidden" animate="show" className="bg-[#0a0f1c] border border-white/10 p-10 lg:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            {success ? (
                                <div className="flex flex-col items-center justify-center h-full py-16 text-center relative z-10">
                                    <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                                        <CheckCircle className="w-12 h-12 text-green-500" />
                                    </div>
                                    <h3 className="text-3xl font-black mb-4">Transmission Successful!</h3>
                                    <p className="text-gray-400 font-light text-lg mb-8">We have received your data packet. A mentor will reach back shortly.</p>
                                    <button onClick={() => setSuccess(false)} className="text-red-400 hover:text-white transition-colors border-b border-red-400 border-dashed pb-1">
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                    {error && (
                                        <div className="flex items-center p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 font-semibold mb-6">
                                            <AlertCircle className="w-5 h-5 mr-3 flex-shrink-0" /> {error}
                                        </div>
                                    )}
                                    
                                    <div className="space-y-5">
                                        <input type="text" id="name" placeholder="Indentification / Name" value={formData.name} onChange={handleChange} required className="w-full bg-black/50 border border-white/10 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"/>
                                        <input type="email" id="email" placeholder="Secure Email Address" value={formData.email} onChange={handleChange} required className="w-full bg-black/50 border border-white/10 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"/>
                                        <select id="subject" value={formData.subject} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors [&>option]:bg-[#0a0f1c] [&>option]:text-white">
                                            <option value="General Inquiry">General Inquiry</option>
                                            <option value="Collaborate with Us">Collaborate with Us</option>
                                            <option value="Sponsor a Masterclass">Sponsor a Masterclass</option>
                                            <option value="Invite me as a guest lecturer">Guest Lecturer Invitation</option>
                                            <option value="Course Support">Course Support</option>
                                        </select>
                                        <textarea id="message" rows={5} placeholder="Transmit your message here..." value={formData.message} onChange={handleChange} required className="w-full bg-black/50 border border-white/10 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"></textarea>
                                    </div>
                                    
                                    <button type="submit" disabled={loading} className="w-full bg-white text-black font-black text-lg py-4 rounded-xl hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] flex items-center justify-center mt-4">
                                        {loading ? <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-black mr-3"></div> : <Send className="w-5 h-5 mr-3" />}
                                        {loading ? 'Transmitting...' : 'Execute Ping'}
                                    </button>
                                </form>
                            )}
                        </motion.div>

                        {/* External Contact Points */}
                        <motion.div variants={fadeUp} initial="hidden" animate="show" transition={{ delay: 0.2 }} className="space-y-6">
                            
                            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[2rem] hover:border-[#25D366]/50 hover:bg-[#25D366]/5 transition-all group overflow-hidden relative">
                                <GlowingOrb className="-bottom-20 -right-20 w-[200px] h-[200px] bg-[#25D366]/20" />
                                <div className="relative z-10 flex items-start gap-6">
                                    <div className="w-16 h-16 rounded-2xl bg-[#25D366]/20 flex items-center justify-center flex-shrink-0 border border-[#25D366]/30">
                                        <MessageSquare className="w-8 h-8 text-[#25D366]" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-black text-white mb-2">WhatsApp Channel</h3>
                                        <p className="text-gray-400 font-light mb-6">Highest priority communication queue. Typical response time is under 2 hours.</p>
                                        <a href="https://wa.me/919931860964" target="_blank" rel="noopener noreferrer" className="inline-flex bg-[#25D366] text-white font-bold py-3 px-6 rounded-full hover:scale-105 transition-transform shadow-[0_0_20px_rgba(37,211,102,0.3)]">
                                            Initiate Chat
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[2rem] hover:border-primary/50 hover:bg-primary/5 transition-all group relative overflow-hidden">
                                <GlowingOrb className="-bottom-20 -right-20 w-[200px] h-[200px] bg-primary/20" />
                                <div className="relative z-10 flex items-start gap-6">
                                    <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center flex-shrink-0 border border-primary/30">
                                        <Mail className="w-8 h-8 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-black text-white mb-2">Official Email</h3>
                                        <p className="text-gray-400 font-light mb-4">For corporate bulk enrollments, sponsorship inquiries, or technical support.</p>
                                        <a href="mailto:advindiancoderchannel@gmail.com" className="text-primary font-mono text-sm break-all hover:text-white transition-colors">advindiancoderchannel@gmail.com</a>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <a href="https://www.instagram.com/advindiancoder.official" target="_blank" rel="noopener noreferrer" className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-[2rem] hover:bg-pink-500/10 hover:border-pink-500/50 transition-all text-center block group">
                                    <p className="text-2xl mb-2 group-hover:scale-110 transition-transform">📸</p>
                                    <h3 className="font-black text-white group-hover:text-pink-500 transition-colors">Instagram</h3>
                                </a>
                                <a href="https://www.youtube.com/@ADVIndianCoder" target="_blank" rel="noopener noreferrer" className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-[2rem] hover:bg-red-500/10 hover:border-red-500/50 transition-all text-center block group">
                                    <p className="text-2xl mb-2 group-hover:scale-110 transition-transform">▶</p>
                                    <h3 className="font-black text-white group-hover:text-red-500 transition-colors">YouTube</h3>
                                </a>
                            </div>

                        </motion.div>
                    </div>
                </div>
            </div>
        </PageWrapper>
    );
};

export default ContactPage;
