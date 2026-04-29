import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, MapPin, Building, Clock, ArrowUpRight, Search, Send } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const WHATSAPP_JOBS = [
    {
        id: "capgemini-finance-2026",
        role: "Finance / Accounting / Associate Roles",
        company: "Capgemini",
        location: "Multiple Locations across India",
        batch: "Bachelor's / Master's Degree",
        postedAt: "April 28, 2026",
        skills: ["Finance", "Accounting"],
        experience: "Freshers"
    },
    {
        id: "yellow-devops-2026",
        role: "DevOps Intern",
        company: "Yellow.ai",
        location: "Bangalore Urban, Karnataka (Onsite)",
        batch: "2025 / 2026",
        postedAt: "April 28, 2026",
        skills: ["Docker", "Kubernetes", "AWS", "CI/CD"],
        experience: "Freshers"
    },
    {
        id: "hpe-ai-ml-2026",
        role: "AI/ML Engineer",
        company: "HPE",
        location: "Bengaluru, Karnataka (Onsite)",
        batch: "2024 / 2025 / 2026",
        postedAt: "April 28, 2026",
        skills: ["Python", "TensorFlow", "PyTorch", "AI/ML"],
        experience: "0–2 Years"
    },
    {
        id: "alcon-se-2026",
        role: "Software Engineer Apprentice",
        company: "Alcon",
        location: "Bangalore (Onsite)",
        batch: "2025 / 2026",
        postedAt: "April 29, 2026",
        skills: ["Java", "Spring Boot", "React"],
        experience: "Freshers"
    },
    {
        id: "iqvia-intern-2026",
        role: "Intern – Application Implementation",
        company: "IQVIA",
        location: "Kochi, Kerala (Hybrid)",
        batch: "2025 / 2026",
        postedAt: "April 29, 2026",
        skills: ["SDLC", "Testing", "Python", "Java"],
        experience: "Freshers"
    },
    {
        id: "visa-se-2026",
        role: "Software Engineer (SW Engineer)",
        company: "Visa",
        location: "Bangalore, Karnataka (Onsite)",
        batch: "6 months – 2 years",
        postedAt: "April 28, 2026",
        skills: ["Java", "Python", "Microservices", "Kafka"],
        experience: "1-3 Years"
    },
    {
        id: "microsoft-se-azure-2026",
        role: "Software Engineer (Azure)",
        company: "Microsoft",
        location: "Hyderabad, Telangana (Onsite)",
        batch: "0–2+ years",
        postedAt: "April 27, 2026",
        skills: ["C#", "Java", "Python", "C++", "DSA"],
        experience: "0–2+ Years"
    },
    {
        id: "wipro-intern-2026",
        role: "Intern (North America Team)",
        company: "Wipro",
        location: "Bengaluru (Onsite)",
        batch: "Recent Graduates / Pursuing",
        postedAt: "April 26, 2026",
        skills: ["Communication", "Operations"],
        experience: "Freshers"
    },
    {
        id: "google-se-ii-cloud-2026",
        role: "Software Engineer II (Google Cloud)",
        company: "Google",
        location: "Bangalore (Onsite)",
        batch: "Minimum 1 Year",
        postedAt: "April 19, 2026",
        skills: ["Java", "Python", "Distributed Systems"],
        experience: "1+ Year"
    },
    {
        id: "hcltech-jr-tester-2026",
        role: "Junior Tester (Semiconductor)",
        company: "HCLTech",
        location: "Hyderabad, Telangana (Onsite)",
        batch: "2023 / 2024 / 2025 / 2026",
        postedAt: "April 18, 2026",
        skills: ["Linux", "Python", "SV/UVM"],
        experience: "Freshers"
    },
    {
        id: "hpe-se-ii-2026",
        role: "Software Engineer II",
        company: "HPE",
        location: "Bangalore, Karnataka (Onsite)",
        batch: "2024 / 2025 / 2026",
        postedAt: "April 18, 2026",
        skills: ["C++", "Networking", "Linux"],
        experience: "0–3 Years"
    },
    {
        id: "hpe-jr-sre-2026",
        role: "Junior SRE Engineer",
        company: "HPE",
        location: "Bangalore, Karnataka (Hybrid)",
        batch: "2024 / 2025",
        postedAt: "March 29, 2026",
        skills: ["Prometheus", "Kubernetes", "Grafana"],
        experience: "0–2 Years"
    },
    {
        id: "amazon-vcs-2026",
        role: "Virtual Associate (WFH)",
        company: "Amazon",
        location: "Remote / Work From Home",
        batch: "10+2 or Graduate",
        postedAt: "Recently Active",
        skills: ["Customer Support", "Operations"],
        experience: "Freshers"
    },
    {
        id: "upgrad-qa-intern-2026",
        role: "Quality Assurance Intern",
        company: "upGrad",
        location: "Pune / Bengaluru (In-Office)",
        batch: "2024 / 2025 / 2026",
        postedAt: "April 19, 2026",
        skills: ["Manual Testing", "JIRA"],
        experience: "Freshers"
    }
];

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const JobsPage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedLoc, setSelectedLoc] = useState("All");
    const [selectedExp, setSelectedExp] = useState("All");
    const [selectedSkill, setSelectedSkill] = useState("All");
    const [selectedRole, setSelectedRole] = useState("All");
    const [selectedYear, setSelectedYear] = useState("All");

    // Gather unique locations, experience ranges, roles, years, and skills dynamically
    const locations = ["All", "Bangalore", "Hyderabad", "Remote", "Kochi", "Bengaluru", "Pune"];
    const experiences = ["All", "Freshers", "0–2 Years", "1-3 Years"];
    const roles = ["All", "Engineer", "Intern", "DevOps", "Tester", "Associate"];
    const years = ["All", "2024", "2025", "2026"];
    const skills = ["All", "Java", "Python", "React", "Docker", "Kubernetes", "C++", "C#", "Testing", "Finance"];

    const filteredJobs = WHATSAPP_JOBS.filter(job => {
        const matchesSearch = 
            job.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.batch.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesLoc = selectedLoc === "All" || job.location.toLowerCase().includes(selectedLoc.toLowerCase());
        
        const matchesExp = selectedExp === "All" || job.experience.toLowerCase().includes(selectedExp.toLowerCase()) || (selectedExp === "Freshers" && job.experience.toLowerCase().includes("fresher"));
        
        const matchesSkill = selectedSkill === "All" || job.skills.some(s => s.toLowerCase() === selectedSkill.toLowerCase());

        const matchesRole = selectedRole === "All" || job.role.toLowerCase().includes(selectedRole.toLowerCase());

        const matchesYear = selectedYear === "All" || (() => {
            const yearsInBatch = job.batch.match(/\b(20\d{2})\b/g);
            if (!yearsInBatch) return true;
            const highestYearInBatch = Math.max(...yearsInBatch.map(Number));
            return highestYearInBatch >= Number(selectedYear);
        })();

        return matchesSearch && matchesLoc && matchesExp && matchesSkill && matchesRole && matchesYear;
    });

    return (
        <PageWrapper>
            <SEO
                title="Jobs - ADV Indian Coder"
                description="Latest job opportunities and placement support for Indian developers"
            />
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-16 overflow-x-hidden">
                <div className="text-center mb-12 relative overflow-hidden py-4">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -z-10"></div>
                    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-primary/10 border border-primary/30 text-primary font-mono text-[10px] md:text-sm uppercase px-4 py-1.5 rounded-full mb-4 inline-block shadow-[0_0_15px_rgba(0,120,255,0.2)]">
                        Latest Opportunities
                    </motion.span>
                    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-6xl font-black mb-4 leading-tight">
                        Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary">Job Openings</span>
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 font-light">
                        A curated list of direct hiring links exclusively straight from our premium network.
                    </motion.p>

                    <motion.a
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        href="https://t.me/advindiancoder"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 md:px-8 py-3.5 md:py-4 bg-[#0088cc] hover:bg-[#0077b3] text-white font-bold text-base md:text-lg rounded-xl transition-all shadow-[0_0_20px_rgba(0,136,204,0.4)] hover:shadow-[0_0_30px_rgba(0,136,204,0.6)] hover:-translate-y-1 whitespace-nowrap"
                    >
                        <Send className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3" />
                        Join Telegram for Alerts
                    </motion.a>
                </div>

                {/* Search Bar */}
                <div className="mb-6 max-w-2xl mx-auto relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search for 'Java', 'AI/ML', 'Developer'..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-lg backdrop-blur-sm bg-black/20"
                    />
                </div>

                {/* Filters Row */}
                <div className="max-w-5xl mx-auto mb-12 grid grid-cols-2 md:grid-cols-5 gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 backdrop-blur-sm">
                    {/* Location Filter */}
                    <div className="flex flex-col gap-1.5 col-span-2 md:col-span-1">
                        <label className="text-xs text-gray-400 font-mono">Location</label>
                        <select 
                            value={selectedLoc}
                            onChange={(e) => setSelectedLoc(e.target.value)}
                            className="w-full bg-black/40 text-white border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm font-medium"
                        >
                            {locations.map((loc, index) => (
                                <option key={index} value={loc} className="bg-slate-900 text-white">{loc}</option>
                            ))}
                        </select>
                    </div>

                    {/* Role Filter */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs text-gray-400 font-mono">Role</label>
                        <select 
                            value={selectedRole}
                            onChange={(e) => setSelectedRole(e.target.value)}
                            className="w-full bg-black/40 text-white border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm font-medium"
                        >
                            {roles.map((role, index) => (
                                <option key={index} value={role} className="bg-slate-900 text-white">{role}</option>
                            ))}
                        </select>
                    </div>

                    {/* Skills Filter */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs text-gray-400 font-mono">Skills</label>
                        <select 
                            value={selectedSkill}
                            onChange={(e) => setSelectedSkill(e.target.value)}
                            className="w-full bg-black/40 text-white border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm font-medium"
                        >
                            {skills.map((skill, index) => (
                                <option key={index} value={skill} className="bg-slate-900 text-white">{skill}</option>
                            ))}
                        </select>
                    </div>

                    {/* Experience Filter */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs text-gray-400 font-mono">Experience</label>
                        <select 
                            value={selectedExp}
                            onChange={(e) => setSelectedExp(e.target.value)}
                            className="w-full bg-black/40 text-white border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm font-medium"
                        >
                            {experiences.map((exp, index) => (
                                <option key={index} value={exp} className="bg-slate-900 text-white">{exp}</option>
                            ))}
                        </select>
                    </div>

                    {/* Batch Year Filter */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs text-gray-400 font-mono">Grad Year</label>
                        <select 
                            value={selectedYear}
                            onChange={(e) => setSelectedYear(e.target.value)}
                            className="w-full bg-black/40 text-white border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm font-medium"
                        >
                            {years.map((year, index) => (
                                <option key={index} value={year} className="bg-slate-900 text-white">{year}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Job Listings Grid */}
                <div className="grid gap-6">
                    {filteredJobs.length > 0 ? (
                        filteredJobs.map((job, i) => (
                            <motion.div
                                key={job.id}
                                variants={fadeUp}
                                initial="hidden"
                                animate="show"
                                transition={{ delay: i * 0.1 }}
                                className="group bg-gradient-to-r from-[#0d1527] to-[#070b14] border border-white/5 hover:border-primary/40 rounded-3xl p-6 md:p-8 transition-all duration-300 shadow-2xl hover:shadow-[0_0_30px_rgba(0,120,255,0.2)] flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative overflow-hidden"
                            >
                                {/* Futuristic Top Border Glow */}
                                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                
                                <div className="flex flex-col sm:flex-row items-start gap-5 flex-1 w-full">
                                    {/* Premium Logo Icon */}
                                    <div className="shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-primary/20 border border-primary/30 flex items-center justify-center text-primary shadow-[0_0_20px_rgba(0,120,255,0.15)] group-hover:scale-110 transition-transform duration-300">
                                        <Briefcase className="w-5 h-5 text-primary" />
                                    </div>

                                    <div className="flex-1 w-full">
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
                                            <h3 className="text-xl md:text-2xl font-extrabold text-white group-hover:text-primary transition-colors duration-300">
                                                {job.role}
                                            </h3>
                                            <span className="w-fit px-3 py-1 bg-green-500/10 text-green-400 text-xs font-mono font-semibold rounded-full border border-green-500/20 whitespace-nowrap shadow-[0_0_10px_rgba(34,197,94,0.1)]">
                                                {job.postedAt}
                                            </span>
                                        </div>

                                        <div className="flex flex-col gap-y-3 text-sm text-gray-400 font-medium mb-4">
                                            <div className="flex items-start gap-2">
                                                <Building className="w-4 h-4 text-primary/70 mt-0.5 shrink-0" /> 
                                                <span className="text-gray-300">{job.company}</span>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <MapPin className="w-4 h-4 text-primary/70 mt-0.5 shrink-0" /> 
                                                <span className="text-gray-300">{job.location}</span>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <Clock className="w-4 h-4 text-primary/70 mt-0.5 shrink-0" /> 
                                                <span className="text-gray-300">{job.batch}</span>
                                            </div>
                                        </div>

                                        {/* Skills Badges */}
                                        <div className="flex flex-wrap gap-2 mt-4">
                                            {job.skills && job.skills.map((skill, index) => (
                                                <span key={index} className="px-2.5 py-1 bg-white/5 border border-white/10 hover:border-primary/30 rounded-lg text-xs text-gray-300 font-mono transition-colors">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <Link
                                    to={`/jobs/${job.id}`}
                                    className="w-full md:w-auto shrink-0 inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700 text-white font-extrabold rounded-2xl shadow-[0_4px_20px_rgba(0,120,255,0.3)] hover:shadow-[0_4px_30px_rgba(0,120,255,0.5)] active:scale-95 transition-all duration-300 whitespace-nowrap group-hover:-translate-y-1"
                                >
                                    View Details <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </Link>
                            </motion.div>
                        ))
                    ) : (
                        <div className="text-center py-20 bg-white/5 rounded-2xl border border-white/10 border-dashed">
                            <Briefcase className="w-12 h-12 text-gray-500 mx-auto mb-4 opacity-50" />
                            <h3 className="text-xl font-bold text-gray-300">No jobs found</h3>
                            <p className="text-gray-500 mt-2">Try adjusting your search terms.</p>
                        </div>
                    )}
                </div>
            </div>
        </PageWrapper>
    );
};

export default JobsPage;
