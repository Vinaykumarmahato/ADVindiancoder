
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Map, Download, Linkedin, Play, Youtube } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';

const roadmaps = [
    { title: 'Full Stack Developer', content: 'Learn MERN/MEAN stack, databases, deployment, and cloud services. Build end-to-end applications.' },
    { title: 'Data Analyst', content: 'Master SQL, Python (Pandas, NumPy), data visualization tools (Tableau), and statistical analysis.' },
    { title: 'Java Developer', content: 'Deep dive into Core Java, Advanced Java, Spring Framework, Hibernate, and build robust backend systems.' },
    { title: 'Spring Boot Engineer', content: 'Specialize in microservices architecture, REST APIs, Spring Security, and cloud-native Java development.' }
];

const CareerPage = () => {
    const [openRoadmap, setOpenRoadmap] = useState<number | null>(0);

    return (
        <PageWrapper>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold tracking-tight">Career Support</h1>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">Your guide to navigating the tech industry and landing your dream job.</p>
                </div>
                
                {/* Roadmaps */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 flex items-center"><Map className="mr-3 text-primary"/> Career Roadmaps</h2>
                    <div className="space-y-4">
                        {roadmaps.map((roadmap, index) => (
                            <div key={index} className="bg-white/5 dark:bg-black/20 border border-white/10 rounded-xl overflow-hidden">
                                <button onClick={() => setOpenRoadmap(openRoadmap === index ? null : index)} className="w-full text-left p-4 flex justify-between items-center">
                                    <span className="font-semibold text-lg">{roadmap.title}</span>
                                    <motion.div animate={{ rotate: openRoadmap === index ? 90 : 0 }}>
                                        <Play />
                                    </motion.div>
                                </button>
                                <AnimatePresence>
                                    {openRoadmap === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="px-4 pb-4"
                                        >
                                            <p className="text-gray-600 dark:text-gray-400">{roadmap.content}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </section>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {/* Resume Templates */}
                    <section>
                         <h2 className="text-3xl font-bold mb-8 flex items-center"><Download className="mr-3 text-green-500"/> Resume Templates</h2>
                         <div className="p-6 bg-white/5 dark:bg-black/20 border border-white/10 rounded-xl">
                            <p className="mb-4">Get access to ATS-friendly resume templates that have helped students land jobs at top companies.</p>
                            <a href="#" className="font-semibold text-white bg-green-600 hover:bg-green-700 px-6 py-2 rounded-lg transition-colors inline-block">
                                Download Now
                            </a>
                         </div>
                    </section>
                    
                    {/* LinkedIn Optimization */}
                    <section>
                         <h2 className="text-3xl font-bold mb-8 flex items-center"><Linkedin className="mr-3 text-blue-500"/> LinkedIn Optimization</h2>
                         <div className="p-6 bg-white/5 dark:bg-black/20 border border-white/10 rounded-xl">
                            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                                <li>Craft a compelling headline and summary.</li>
                                <li>Showcase your projects and skills effectively.</li>
                                <li>Learn networking strategies that work.</li>
                                <li>Build a personal brand that attracts recruiters.</li>
                            </ul>
                         </div>
                    </section>
                </div>

                {/* Embedded Videos */}
                <section>
                    <h2 className="text-3xl font-bold mb-8 flex items-center"><Youtube className="mr-3 text-red-500"/> Career Playlist</h2>
                    <div className="aspect-w-16 aspect-h-9 bg-black/20 rounded-xl overflow-hidden">
                        <iframe 
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/videoseries?list=PLp5qI-5smITk3-P2kda2y-tO92DqNfa_L" 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen>
                        </iframe>
                    </div>
                </section>
            </div>
        </PageWrapper>
    );
};

export default CareerPage;