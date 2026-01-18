import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Briefcase, Award, Send, CheckCircle, AlertCircle, Mic } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import ContactService from '../services/contact.service';

const ContactPage = () => {
    const formRef = React.useRef<HTMLDivElement>(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: 'General Inquiry',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSpecialRequest = (subject: string) => {
        setFormData(prev => ({ ...prev, subject }));
        formRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess(false);

        try {
            await ContactService.submitContactForm(formData);
            setSuccess(true);
            setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
        } catch (err) {
            setError('Failed to send message. Please try again later.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <PageWrapper>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold tracking-tight">Get In Touch</h1>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">Have a question, suggestion, or a collaboration idea? Let's talk!</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                    {/* Contact Form */}
                    <motion.div
                        ref={formRef}
                        className="bg-white/5 dark:bg-black/20 border border-white/10 p-8 rounded-2xl"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        {success ? (
                            <div className="flex flex-col items-center justify-center h-full py-10 text-center">
                                <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                                <p className="text-gray-600 dark:text-gray-400">Thank you for reaching out. We'll get back to you shortly.</p>
                                <button
                                    onClick={() => setSuccess(false)}
                                    className="mt-6 text-primary hover:underline"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {error && (
                                    <div className="flex items-center p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500">
                                        <AlertCircle className="w-5 h-5 mr-2" />
                                        {error}
                                    </div>
                                )}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-white/10 dark:bg-black/20 border border-white/20 rounded-lg p-3 focus:ring-primary focus:border-primary"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-white/10 dark:bg-black/20 border border-white/20 rounded-lg p-3 focus:ring-primary focus:border-primary"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                                    <select
                                        id="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full bg-white/10 dark:bg-black/20 border border-white/20 rounded-lg p-3 focus:ring-primary focus:border-primary [&>option]:text-black"
                                    >
                                        <option value="General Inquiry">General Inquiry</option>
                                        <option value="Collaborate with Us">Collaborate with Us</option>
                                        <option value="Sponsor a Masterclass">Sponsor a Masterclass</option>
                                        <option value="Invite me as a guest lecturer">Invite me as a guest lecturer</option>
                                        <option value="Course Support">Course Support</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-white/10 dark:bg-black/20 border border-white/20 rounded-lg p-3 focus:ring-primary focus:border-primary"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {loading ? (
                                        <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2"></div>
                                    ) : (
                                        <Send className="w-5 h-5 mr-2" />
                                    )}
                                    {loading ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        )}
                    </motion.div>

                    {/* Contact Info & Actions */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <div className="flex items-start">
                            <Mail className="w-6 h-6 mr-4 text-primary mt-1" />
                            <div>
                                <h3 className="font-semibold">Email</h3>
                                <a href="mailto:advindiancoder@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-primary">advindiancoder@gmail.com</a>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <button
                                onClick={() => handleSpecialRequest('Collaborate with Us')}
                                className="w-full flex items-center justify-center p-4 bg-white/5 dark:bg-black/20 border border-white/10 rounded-lg hover:bg-primary/10 transition-colors"
                            >
                                <Briefcase className="mr-3" /> Collaborate with Us
                            </button>
                            <button
                                onClick={() => handleSpecialRequest('Sponsor a Masterclass')}
                                className="w-full flex items-center justify-center p-4 bg-white/5 dark:bg-black/20 border border-white/10 rounded-lg hover:bg-secondary/10 transition-colors"
                            >
                                <Award className="mr-3 text-secondary" /> Sponsor a Masterclass
                            </button>
                            <button
                                onClick={() => handleSpecialRequest('Invite me as a guest lecturer')}
                                className="w-full flex items-center justify-center p-4 bg-white/5 dark:bg-black/20 border border-white/10 rounded-lg hover:bg-purple-500/10 transition-colors"
                            >
                                <Mic className="mr-3 text-purple-500" /> Invite as Guest Lecturer
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </PageWrapper>
    );
};

export default ContactPage;
