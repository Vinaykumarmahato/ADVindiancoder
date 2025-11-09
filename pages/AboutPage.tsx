
import React from 'react';
import { Linkedin, Github, Youtube, Instagram, Award, Briefcase, GraduationCap, Eye } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';
import PageWrapper from '../components/PageWrapper';
import { MotionDiv } from '../components/motion';

const AboutPage = () => {
    const socialIcons = [
        { icon: <Linkedin className="w-5 h-5" />, link: SOCIAL_LINKS.personalLinkedin },
        { icon: <Github className="w-5 h-5" />, link: SOCIAL_LINKS.github },
        { icon: <Youtube className="w-5 h-5" />, link: SOCIAL_LINKS.youtube },
        { icon: <Instagram className="w-5 h-5" />, link: SOCIAL_LINKS.personalInstagram },
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
                    <MotionDiv 
                        className="md:col-span-1 flex flex-col items-center text-center"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <MotionDiv 
                            className="relative group"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-blue-500 to-purple-600 animate-spin-slow opacity-75 blur-md group-hover:opacity-100"></div>
                            <img 
                                src="/assets/about.png" 
                                alt="Vinay Kumar Mahato" 
                                className="relative rounded-full w-48 h-48 border-4 border-primary shadow-xl mb-4 z-10"
                            />
                        </MotionDiv>
                        <h1 className="text-3xl font-bold">Vinay Kumar Mahato</h1>
                        <p className="text-primary font-semibold">(Software Engineer)</p>
                        <div className="flex space-x-4 mt-6">
                            <MotionDiv 
                                whileHover={{ scale: 1.1 }} 
                                className="group"
                            >
                                <a 
                                    href={SOCIAL_LINKS.personalLinkedin} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="p-3 rounded-full bg-white/10 dark:bg-white/5 hover:bg-[#0A66C2]/20 group-hover:text-[#0A66C2] transition-all duration-300 flex items-center gap-2"
                                >
                                    <Linkedin className="w-5 h-5" />
                                    <span className="hidden group-hover:inline text-sm font-medium">LinkedIn</span>
                                </a>
                            </MotionDiv>
                            <MotionDiv 
                                whileHover={{ scale: 1.1 }} 
                                className="group"
                            >
                                <a 
                                    href={SOCIAL_LINKS.github} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="p-3 rounded-full bg-white/10 dark:bg-white/5 hover:bg-gray-700/20 group-hover:text-gray-700 dark:group-hover:text-white transition-all duration-300 flex items-center gap-2"
                                >
                                    <Github className="w-5 h-5" />
                                    <span className="hidden group-hover:inline text-sm font-medium">GitHub</span>
                                </a>
                            </MotionDiv>
                            <MotionDiv 
                                whileHover={{ scale: 1.1 }} 
                                className="group"
                            >
                                <a 
                                    href={SOCIAL_LINKS.youtube} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="p-3 rounded-full bg-white/10 dark:bg-white/5 hover:bg-red-600/20 group-hover:text-red-600 transition-all duration-300 flex items-center gap-2"
                                >
                                    <Youtube className="w-5 h-5" />
                                    <span className="hidden group-hover:inline text-sm font-medium">YouTube</span>
                                </a>
                            </MotionDiv>
                            <MotionDiv 
                                whileHover={{ scale: 1.1 }} 
                                className="group"
                            >
                                <a 
                                    href={SOCIAL_LINKS.personalInstagram} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="p-3 rounded-full bg-white/10 dark:bg-white/5 hover:bg-gradient-to-r from-purple-600/20 to-pink-600/20 group-hover:text-pink-600 transition-all duration-300 flex items-center gap-2"
                                >
                                    <Instagram className="w-5 h-5" />
                                    <span className="hidden group-hover:inline text-sm font-medium">Instagram</span>
                                </a>
                            </MotionDiv>
                        </div>
                    </MotionDiv>

                    {/* Right Column: Bio & Details */}
                    <MotionDiv 
                        className="md:col-span-2"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <div className="mb-8">
  <h2 className="text-2xl font-bold mb-4">Bio</h2>
  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
    Founder of <strong>ADV Indian Coder</strong>, <strong>Inoglle IT Services</strong>, 
    <strong> Elevtern</strong>, and <strong>ADV SparkTech</strong>. 
    I am a passionate educator and technologist on a mission to democratize technical education. 
    With a background in <strong>Information Technology</strong>, I strive to create content that is 
    not only informative but also practical and accessible to learners from all backgrounds.
  </p>
</div>

<div className="mb-8">
  <h2 className="text-2xl font-bold mb-4">Achievements</h2>
  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 leading-relaxed space-y-2">
    <li>Founded <strong>Inoglle</strong>, <strong>Elevtern</strong>, <strong>ADV Indian Coder</strong>, <strong>ADV SparkTech</strong>, and <strong>ADV HopeHaven</strong> — empowering 10,000+ learners and communities.</li>
    <li>Created <strong>150+ coding tutorials</strong> and mentored <strong>2,000+ students</strong> to achieve certifications and tech jobs.</li>
    <li>Led <strong>10+ workshops & hackathons</strong>, guiding <strong>500+ developers</strong> in real-world project building.</li>
    <li>Trained <strong>100+ interns</strong> through hands-on programs in <strong>Java, Python</strong>, and <strong>Cloud technologies</strong>.</li>
    <li>Received <strong>Motivational Speech</strong> & <strong>Singing Awards</strong> from <strong>DSCET College (Anna University)</strong>.</li>
    <li>Ranked among the <strong>Top 5% Canva Designers</strong> globally for creative digital design excellence.</li>
  </ul>
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
                                    <MotionDiv 
                                        key={index}
                                        className="flex items-center p-3 bg-white/5 dark:bg-black/20 rounded-lg"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                    >
                                        <span className="mr-3">{item.icon}</span>
                                        <span>{item.text}</span>
                                    </MotionDiv>
                                ))}
                            </ul>
                        </div>
                    </MotionDiv>
                </div>
            </div>
        </PageWrapper>
    );
};

export default AboutPage;
