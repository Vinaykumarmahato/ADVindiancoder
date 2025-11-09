
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Disc, Send, Users, User, Calendar, GraduationCap } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import { SOCIAL_LINKS, TESTIMONIALS } from '../constants';

const AnimatedCounter = ({ value, duration = 2 }: { value: number, duration?: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = value;
        if (start === end) return;

        const incrementTime = (duration * 1000) / end;
        const timer = setInterval(() => {
            start += Math.ceil(end/200);
            if (start > end) start = end;
            setCount(start);
            if (start === end) clearInterval(timer);
        }, incrementTime > 1 ? incrementTime : 1);

        return () => clearInterval(timer);
    }, [value, duration]);

    return <span>{count.toLocaleString()}</span>;
};

const CommunityPage = () => {
    const communityStats = [
        { icon: <User />, value: 1200, label: "Members" },
        { icon: <Calendar />, value: 50, label: "Events Hosted" },
        { icon: <GraduationCap />, value: 30, label: "Classes Held" },
    ];

    return (
        <PageWrapper>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold tracking-tight">Join Our Coding Community</h1>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">Connect, collaborate, and grow with fellow developers.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 text-center">
                    <motion.a 
                        href={SOCIAL_LINKS.discord} 
                        className="block p-8 rounded-2xl" 
                        style={{ backgroundColor: '#5865F220' }}
                        whileHover={{ scale: 1.05, backgroundColor: '#5865F240' }}
                    >
                        <Disc className="h-16 w-16 mx-auto mb-4" style={{ color: '#5865F2' }} />
                        <h2 className="text-2xl font-bold">Join Discord</h2>
                        <p className="text-gray-300">For coding discussions & help.</p>
                    </motion.a>
                    <motion.a 
                        href={SOCIAL_LINKS.telegram} 
                        className="block p-8 rounded-2xl" 
                        style={{ backgroundColor: '#2AABEE20' }}
                        whileHover={{ scale: 1.05, backgroundColor: '#2AABEE40' }}
                    >
                        <Send className="h-16 w-16 mx-auto mb-4" style={{ color: '#2AABEE' }} />
                        <h2 className="text-2xl font-bold">Telegram Channel</h2>
                        <p className="text-gray-300">For daily job updates.</p>
                    </motion.a>
                    <motion.a 
                        href={SOCIAL_LINKS.whatsapp} 
                        className="block p-8 rounded-2xl" 
                        style={{ backgroundColor: '#25D36620' }}
                        whileHover={{ scale: 1.05, backgroundColor: '#25D36640' }}
                    >
                        <Users className="h-16 w-16 mx-auto mb-4" style={{ color: '#25D366' }} />
                        <h2 className="text-2xl font-bold">WhatsApp Group</h2>
                        <p className="text-gray-300">For masterclass attendees.</p>
                    </motion.a>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {communityStats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            className="p-6 bg-white/5 dark:bg-black/20 border border-white/10 rounded-2xl text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.2 }}
                        >
                            <div className="p-3 inline-block bg-primary/20 rounded-full mb-3">{React.cloneElement(stat.icon, {className: "h-8 w-8 text-primary"})}</div>
                            <p className="text-4xl font-bold"><AnimatedCounter value={stat.value} />+</p>
                            <p className="text-gray-500">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>

                 <div className="text-center">
                    <h2 className="text-3xl font-bold mb-12">Community Voices</h2>
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {TESTIMONIALS.map((t, i) => (
                            <motion.div
                                key={t.id}
                                className="p-6 bg-white/5 dark:bg-black/20 border border-white/10 rounded-2xl text-left"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.2 }}
                            >
                                <div className="flex items-center mb-4">
                                    <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full mr-4" />
                                    <div>
                                        <p className="font-bold">{t.name}</p>
                                        <p className="text-sm text-gray-500">{t.role}</p>
                                    </div>
                                </div>
                                <p className="italic text-gray-600 dark:text-gray-400">"{t.quote}"</p>
                            </motion.div>
                        ))}
                    </div>
                 </div>
            </div>
        </PageWrapper>
    );
};

export default CommunityPage;