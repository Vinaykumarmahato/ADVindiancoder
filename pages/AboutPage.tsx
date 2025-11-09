
import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Youtube, Instagram, Award, Briefcase, GraduationCap, Eye } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';
import PageWrapper from '../components/PageWrapper';

const AboutPage = () => {
    const socialIcons = [
        { icon: <Linkedin />, link: SOCIAL_LINKS.linkedin },
        { icon: <Github />, link: SOCIAL_LINKS.github },
        { icon: <Youtube />, link: SOCIAL_LINKS.youtube },
        { icon: <Instagram />, link: SOCIAL_LINKS.instagram },
    ];
    
    const achievements = [
        { icon: <Award className="text-secondary"/>, text: "Top 5% Canva Designer" },
        { icon: <Briefcase className="text-primary"/>, text: "Certified Microsoft Office 365 Professional" },
        { icon: <GraduationCap className="text-green-500"/>, text: "Mentor & Educator with 10K+ LinkedIn followers" },
    ];

    return (
        <PageWrapper>
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
                    {/* Left Column: Photo & Socials */}
                    <motion.div 
                        className="md:col-span-1 flex flex-col items-center text-center"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <img src="https://picsum.photos/seed/vinay/300/300" alt="Vinay Kumar Mahato" className="rounded-full w-48 h-48 border-4 border-primary shadow-xl mb-4" />
                        <h1 className="text-3xl font-bold">Vinay Kumar Mahato</h1>
                        <p className="text-primary font-semibold">B.Tech IT – DSCET (Anna University)</p>
                        <div className="flex space-x-4 mt-6">
                           {socialIcons.map((social, index) => (
                                <a key={index} href={social.link} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/10 dark:bg-white/5 hover:bg-primary/20 transition-colors">
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column: Bio & Details */}
                    <motion.div 
                        className="md:col-span-2"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold mb-4">Bio</h2>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                Founder of ADV Indian Coder, Inoglle IT Services, Elevtern, and ADV SparkTech. 
                                I am a passionate educator and technologist on a mission to democratize technical education. 
                                With a background in Information Technology, I strive to create content that is not only informative but also practical and accessible to learners from all backgrounds.
                            </p>
                        </div>
                        
                        <div className="mb-8">
                             <h2 className="text-2xl font-bold mb-4 flex items-center"><Eye className="mr-2"/> Vision</h2>
                            <blockquote className="border-l-4 border-primary pl-4 italic text-gray-700 dark:text-gray-300">
                                "To make technical education free, simple, and practical for every learner."
                            </blockquote>
                        </div>
                        
                        <div>
                             <h2 className="text-2xl font-bold mb-4">Achievements</h2>
                             <ul className="space-y-3">
                                {achievements.map((item, index) => (
                                    <motion.li 
                                        key={index}
                                        className="flex items-center p-3 bg-white/5 dark:bg-black/20 rounded-lg"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                    >
                                        <span className="mr-3">{item.icon}</span>
                                        <span>{item.text}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </PageWrapper>
    );
};

export default AboutPage;
