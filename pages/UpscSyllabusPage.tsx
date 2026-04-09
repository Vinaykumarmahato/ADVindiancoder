import React from 'react';
import { motion } from 'framer-motion';
import {
    Book,
    Layers,
    FileText,
    Users,
    History,
    MapPin,
    Scale,
    TrendingUp,
    Leaf,
    FlaskConical,
    Globe,
    MessageSquare,
    CheckCircle2,
    Target,
    Award
} from 'lucide-react';
import PageWrapper from '../components/PageWrapper';

const UpscSyllabusPage = () => {
    const syllabusData = [
        {
            stage: "1. Preliminary Examination (Prelims)",
            description: "Objective Type (Multiple Choice Questions)",
            color: "border-blue-500",
            bgColor: "bg-blue-50/50 dark:bg-blue-900/10",
            icon: <Target className="w-8 h-8 text-blue-500" />,
            papers: [
                {
                    title: "General Studies Paper I",
                    topics: [
                        "History (Ancient, Medieval, Modern)",
                        "Indian National Movement",
                        "Geography (India & World)",
                        "Indian Polity & Governance",
                        "Economic & Social Development",
                        "Environment & Ecology",
                        "General Science",
                        "Current Affairs"
                    ]
                },
                {
                    title: "General Studies Paper II (CSAT)",
                    topics: [
                        "Comprehension",
                        "Logical Reasoning",
                        "Analytical Ability",
                        "Decision Making",
                        "Basic Numeracy",
                        "Data Interpretation"
                    ]
                }
            ]
        },
        {
            stage: "2. Main Examination (Mains)",
            description: "Descriptive Type (Written Examination)",
            color: "border-purple-500",
            bgColor: "bg-purple-50/50 dark:bg-purple-900/10",
            icon: <FileText className="w-8 h-8 text-purple-500" />,
            papers: [
                {
                    title: "Qualifying Papers",
                    topics: ["Indian Language", "English"]
                },
                {
                    title: "GS Paper I (Heritage & Culture)",
                    topics: ["Indian Heritage & Culture", "History & Geography of the World", "Society"]
                },
                {
                    title: "GS Paper II (Governance & Polity)",
                    topics: ["Constitution", "Polity", "Governance", "Social Justice", "International Relations"]
                },
                {
                    title: "GS Paper III (Technology & Economy)",
                    topics: ["Economy", "Agriculture", "Science & Tech", "Environment", "Security"]
                },
                {
                    title: "GS Paper IV (Ethics)",
                    topics: ["Ethics", "Integrity", "Aptitude", "Case Studies"]
                }
            ]
        },
        {
            stage: "3. Interview (Personality Test)",
            description: "Final Stage Assessment",
            color: "border-emerald-500",
            bgColor: "bg-emerald-50/50 dark:bg-emerald-900/10",
            icon: <Award className="w-8 h-8 text-emerald-500" />,
            papers: [
                {
                    title: "Personality Assessment",
                    topics: [
                        "Ethics & Values",
                        "Leadership & Decision Making",
                        "Awareness & Opinion",
                        "Communication Skills"
                    ]
                }
            ]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <PageWrapper>
            <div className="min-h-screen bg-[#FDFDFD] dark:bg-dark-bg py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-20">
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-6 tracking-tight"
                        >
                            UPSC <span className="text-primary italic">Syllabus</span>
                        </motion.h1>
                        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium">
                            Comprehensive Roadmap for the Civil Services Examination. Structured for clarity and goal-oriented preparation.
                        </p>
                    </div>

                    {/* Syllabus Grid */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="space-y-16"
                    >
                        {syllabusData.map((section, idx) => (
                            <motion.section
                                key={idx}
                                variants={cardVariants}
                                className="relative"
                            >
                                <div className={`absolute top-0 left-0 w-2 h-full rounded-full ${section.color.replace('border-', 'bg-')}`} />
                                <div className="pl-8">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className={`p-4 rounded-2xl ${section.bgColor} shadow-sm`}>
                                            {section.icon}
                                        </div>
                                        <div>
                                            <h2 className="text-3xl font-black text-gray-900 dark:text-white">{section.stage}</h2>
                                            <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">{section.description}</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {section.papers.map((paper, pIdx) => (
                                            <div
                                                key={pIdx}
                                                className="bg-white dark:bg-gray-900 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all group"
                                            >
                                                <h3 className="text-xl font-black text-gray-900 dark:text-white mb-6 group-hover:text-primary transition-colors">
                                                    {paper.title}
                                                </h3>
                                                <ul className="space-y-4">
                                                    {paper.topics.map((topic, tIdx) => (
                                                        <li key={tIdx} className="flex items-start gap-3">
                                                            <CheckCircle2 className="w-5 h-5 text-gray-300 group-hover:text-primary/40 transition-colors mt-0.5" />
                                                            <span className="text-gray-600 dark:text-gray-400 font-medium text-sm leading-relaxed">{topic}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.section>
                        ))}

                        {/* Optional Subjects - Special Card */}
                        <motion.section variants={cardVariants} className="pt-12">
                            <div className="bg-gray-900 dark:bg-black rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center text-white border border-gray-800 shadow-2xl">
                                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none" />
                                <div className="relative z-10">
                                    <Layers className="w-16 h-16 mx-auto mb-8 text-primary" />
                                    <h2 className="text-4xl md:text-5xl font-black mb-6">Optional Subjects</h2>
                                    <p className="max-w-3xl mx-auto text-lg text-gray-400 mb-12 font-medium">
                                        Candidates may choose any one optional subject (including Literature) from a vast list ranging from Agriculture to Zoology.
                                    </p>
                                    <div className="flex flex-wrap justify-center gap-3">
                                        {["History", "Pol Science", "Geography", "Sociology", "Mathematics", "Economics", "Law"].map(sub => (
                                            <span key={sub} className="px-5 py-2 rounded-full border border-gray-800 bg-gray-800/50 text-sm font-bold text-gray-300">
                                                {sub}
                                            </span>
                                        ))}
                                        <span className="px-5 py-2 rounded-full border border-primary/50 bg-primary/20 text-sm font-black text-primary">
                                            +40 MORE
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.section>
                    </motion.div>
                </div>
            </div>
        </PageWrapper>
    );
};

export default UpscSyllabusPage;
