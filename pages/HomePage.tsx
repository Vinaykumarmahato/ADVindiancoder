
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PlayCircle, GraduationCap, ArrowRight, Code, Users, Star } from 'lucide-react';
import { HERO_STATS, FEATURED_COMPANIES, WHY_CHOOSE_US_FEATURES } from '../constants';
import PageWrapper from '../components/PageWrapper';

const HomePage = () => {
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };
    
    const iconMap: { [key: string]: React.ReactNode } = {
        'Real-World Coding Projects': <Code className="w-8 h-8 text-primary" />,
        'Hands-on Tutorials': <PlayCircle className="w-8 h-8 text-primary" />,
        'Career-Focused Learning': <GraduationCap className="w-8 h-8 text-primary" />,
        'Free Mentorship + Community Access': <Users className="w-8 h-8 text-primary" />,
    };

    return (
        <PageWrapper>
            {/* Hero Section */}
            <section className="relative overflow-hidden min-h-screen flex items-center justify-center text-white text-center px-4">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-dark-bg to-purple-900 animate-gradient-bg bg-[200%_200%]"></div>
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm0-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm0-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm0-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
                <div className="relative z-10 flex flex-col items-center">
                    <motion.img 
                        src="https://picsum.photos/seed/vinay/150/150" 
                        alt="Vinay Kumar Mahato"
                        className="rounded-full w-32 h-32 md:w-40 md:h-40 border-4 border-primary shadow-lg mb-6"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, type: 'spring' }}
                    />
                    <motion.h1 
                        className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 tracking-tight"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        Code Karein, Chill Karein 🚀
                    </motion.h1>
                    <motion.p 
                        className="max-w-2xl text-lg md:text-xl text-gray-300 mb-8"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                    >
                        Let’s transform your passion for coding into a successful career.
                    </motion.p>
                    <motion.div 
                        className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.6 }}
                    >
                        <Link to="/courses" className="flex items-center justify-center bg-primary hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 shadow-lg transform hover:scale-105">
                           <PlayCircle className="mr-2" /> Start Learning Free
                        </Link>
                        <Link to="/masterclass" className="flex items-center justify-center bg-secondary hover:bg-yellow-500 text-dark-bg font-bold py-3 px-8 rounded-full transition duration-300 shadow-lg transform hover:scale-105">
                            <GraduationCap className="mr-2" /> Join ₹9 Masterclass
                        </Link>
                    </motion.div>
                </div>
            </section>
            
            {/* About & Stats */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                        <h2 className="text-3xl font-bold mb-4">About ADV Indian Coder</h2>
                        <p className="text-lg bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400 font-semibold mb-6">"To simplify coding and help aspiring developers become tech leaders."</p>
                        <p className="text-gray-600 dark:text-gray-400">Founded by Vinay Kumar Mahato, ADV Indian Coder is on a mission to make tech education accessible to everyone. We provide high-quality, practical, and 100% free tutorials to empower the next generation of coders.</p>
                        <div className="mt-6 flex space-x-4">
                            {FEATURED_COMPANIES.map(company => (
                                <img key={company.id} src={`https://picsum.photos/seed/${company.name}/100/40`} alt={company.name} className="h-8 opacity-60 dark:invert" />
                            ))}
                        </div>
                    </motion.div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {HERO_STATS.map((stat, index) => (
                            <motion.div 
                                key={index} 
                                className="p-6 bg-white/10 dark:bg-black/20 border border-white/20 rounded-2xl text-center backdrop-blur-sm"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <p className="text-3xl font-bold text-primary">{stat.value}</p>
                                <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 px-4 bg-gray-50 dark:bg-dark-bg/50">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-12">Why Choose Us?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {WHY_CHOOSE_US_FEATURES.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="group p-8 bg-white dark:bg-gray-800/20 rounded-2xl shadow-lg border border-transparent hover:border-primary transition-all duration-300 transform hover:-translate-y-2"
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="p-4 rounded-full bg-primary/10 inline-block mb-4 group-hover:scale-110 transition-transform">
                                   {iconMap[feature]}
                                </div>
                                <h3 className="text-xl font-semibold">{feature}</h3>
                                <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Featured Companies */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-12">My Ventures</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {FEATURED_COMPANIES.map((company) => (
                            <motion.div
                                key={company.id}
                                className="p-8 bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 rounded-2xl text-center shadow-md"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                            >
                                <img src={`https://picsum.photos/seed/${company.name}/120/50`} alt={`${company.name} Logo`} className="h-10 mx-auto mb-4 dark:invert" />
                                <h3 className="text-xl font-bold mb-2">{company.name}</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">"{company.tagline}"</p>
                                <Link to={company.link} className="font-semibold text-primary hover:underline">
                                    Know More <ArrowRight className="inline-block h-4 w-4" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </PageWrapper>
    );
};

export default HomePage;
