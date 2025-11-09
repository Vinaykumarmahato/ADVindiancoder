
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Briefcase, Award } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';

const ContactPage = () => {
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
                        className="bg-white/5 dark:bg-black/20 border border-white/10 p-8 rounded-2xl"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                                <input type="text" id="name" className="w-full bg-white/10 dark:bg-black/20 border border-white/20 rounded-lg p-3 focus:ring-primary focus:border-primary" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                                <input type="email" id="email" className="w-full bg-white/10 dark:bg-black/20 border border-white/20 rounded-lg p-3 focus:ring-primary focus:border-primary" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                                <textarea id="message" rows={4} className="w-full bg-white/10 dark:bg-black/20 border border-white/20 rounded-lg p-3 focus:ring-primary focus:border-primary"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300">
                                Send Message
                            </button>
                        </form>
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
                            <a href="#" className="w-full flex items-center justify-center p-4 bg-white/5 dark:bg-black/20 border border-white/10 rounded-lg hover:bg-primary/10 transition-colors">
                                <Briefcase className="mr-3"/> Collaborate with Us
                            </a>
                             <a href="#" className="w-full flex items-center justify-center p-4 bg-white/5 dark:bg-black/20 border border-white/10 rounded-lg hover:bg-secondary/10 transition-colors">
                                <Award className="mr-3 text-secondary"/> Sponsor a Masterclass
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </PageWrapper>
    );
};

export default ContactPage;
