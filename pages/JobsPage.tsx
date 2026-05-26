import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, MapPin, Building, Clock, ArrowUpRight, Search, Send, Zap, Filter, Code } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import PlaylistAd from '../components/PlaylistAd';
import CompactAd from '../components/CompactAd';

const WHATSAPP_JOBS = [
    {
        id: "volvo-group-apprentice-2026",
        company: "Volvo Group",
        role: "Graduate Apprentice Trainee",
        location: "Bangalore, India",
        batch: "2024 / 2025 / 2026",
        postedAt: "May 26, 2026",
        skills: ["MS Excel", "Accounting", "Payroll", "HR Operations"],
        experience: "Freshers"
    },
    {
        id: "sp-global-data-analyst-2026",
        company: "S&P Global",
        role: "Data Analyst / Associate",
        location: "Hyderabad, Telangana",
        batch: "Any Degree / MBA / CA / CFA",
        postedAt: "May 26, 2026",
        skills: ["ESG Concepts", "Data Analytics", "SQL", "Power BI", "MS Excel"],
        experience: "0 to 2 Years"
    },
    {
        id: "deloitte-qa-intern-2026",
        company: "Deloitte",
        role: "QA Intern",
        location: "Bangalore, India",
        batch: "Bachelor’s Degree",
        postedAt: "May 26, 2026",
        skills: ["QA", "Sourcing", "Communication", "Analytical Skills"],
        experience: "Freshers"
    },
    {
        id: "accenture-tech-support-2026",
        company: "Accenture",
        role: "Tech Support Associate Services",
        location: "Bangalore, India",
        batch: "Any Graduate",
        postedAt: "May 26, 2026",
        skills: ["ServiceNow", "BMC Remedy", "Hardware Troubleshooting", "Active Directory"],
        experience: "0–2 Years"
    },
    {
        id: "cognizant-service-desk-2026",
        company: "Cognizant",
        role: "Service Desk - Digital Workplace",
        location: "PAN India",
        batch: "2025 / 2026",
        postedAt: "May 26, 2026",
        skills: ["IT Support", "Service Desk", "Troubleshooting", "Hardware", "Software"],
        experience: "Freshers Only"
    },
    {
        id: "trimble-software-engineer-2026",
        company: "Trimble Inc.",
        role: "Software Engineer 1",
        location: "Chennai, Tamil Nadu",
        batch: "2024 / 2025 / 2026",
        postedAt: "May 26, 2026",
        skills: ["C#", ".NET", "SQL", "Node.js", "Java", "React.js", "DSA", "GitHub Copilot", "Cursor"],
        experience: "Freshers / Early Career"
    },
    {
        id: "tech-mahindra-voice-chat-support-2026",
        company: "Tech Mahindra",
        role: "Voice & Chat Support Executive",
        location: "Multiple Locations Across India",
        batch: "Any Graduate / Undergraduate",
        postedAt: "May 26, 2026",
        skills: ["Voice Support", "Chat Support", "Technical Troubleshooting", "Customer Service", "Hardware", "Networking", "SCCM"],
        experience: "0 to 5 Years"
    },
    {
        id: "amazon-sde-i-2026",
        company: "Amazon",
        role: "Software Dev Engineer I (SDE-I)",
        location: "Bengaluru / Hyderabad / Chennai / Maharashtra / Delhi",
        batch: "2024 / 2025 / 2026",
        postedAt: "May 23, 2026",
        skills: ["Java", "Python", "C++", "DSA", "DBMS", "OS", "Networking"],
        experience: "Freshers"
    },
    {
        id: "harman-devops-2026",
        company: "Harman International",
        role: "Associate Engineer – AWS DevOps",
        location: "Bangalore, Karnataka",
        batch: "2024 / 2025 / 2026",
        postedAt: "May 23, 2026",
        skills: ["AWS", "GitLab CI", "Jenkins", "Docker", "Kubernetes", "Linux", "Python", "DevOps"],
        experience: "Freshers"
    },
    {
        id: "honeywell-se-i-blr-2026",
        company: "Honeywell",
        role: "Software Engineer I",
        location: "Bengaluru, Karnataka",
        batch: "2024 / 2025 / 2026",
        postedAt: "May 23, 2026",
        skills: ["Java", "Python", "C#", "OOP", "SDLC"],
        experience: "Freshers"
    },
    {
        id: "honeywell-ca-internship-2026",
        company: "Honeywell",
        role: "Bachelor’s Intern (CA Industrial Training)",
        location: "Pune, Maharashtra",
        batch: "2025 / 2026",
        postedAt: "May 23, 2026",
        skills: ["Finance", "Accounting", "Excel", "Audit", "Reporting"],
        experience: "Freshers"
    },
    {
        id: "honeywell-se-csharp-2026",
        company: "Honeywell",
        role: "Software Engineer I",
        location: "Bengaluru, Karnataka",
        batch: "2024 / 2025 / 2026",
        postedAt: "May 14, 2026",
        skills: ["C#", ".NET", "ASP.NET Core", "REST APIs", "Azure", "SQL"]
    },
    {
        id: "ey-consulting-support-services-intern-2026",
        company: "EY Global Delivery Services (GDS)",
        role: "Consulting Support Services Intern",
        location: "Kochi, Kerala",
        batch: "Freshers (B.E / B.Tech)",
        postedAt: "May 14, 2026",
        skills: ["Cloud", "AI", "Cyber Security", "Data Analytics", "Java"]
    },
    {
        id: "google-silicon-engineer-university-graduate-2026",
        company: "Google",
        role: "Silicon Engineer, University Graduate 2026",
        location: "Bangalore / Hyderabad / Pune",
        batch: "University Graduate 2026",
        postedAt: "May 12, 2026",
        skills: ["Silicon Engineering", "Hardware", "Automation", "AI/ML"]
    },
    {
        id: "hitachi-java-developer-2026",
        company: "Hitachi Digital Services",
        role: "Java Developer",
        location: "Bengaluru",
        batch: "Experienced Professionals",
        postedAt: "May 12, 2026",
        skills: ["Java", "Spring Boot", "Microservices", "REST APIs"]
    },
    {
        id: "unisys-internship-2026",
        company: "Unisys",
        role: "Intern / Student Tech",
        location: "Bangalore",
        batch: "Freshers / Students",
        postedAt: "May 12, 2026",
        skills: ["Technical Support", "Cloud", "Networking", "Python"]
    },
    {
        id: "google-software-engineering-intern-masters-2026",
        role: "Software Engineering Intern, Masters — Summer 2026",
        company: "Google",
        location: "Bengaluru / Hyderabad / Pune",
        batch: "Master's Students (Summer 2026)",
        postedAt: "May 12, 2026",
        skills: ["Java", "C++", "Python", "Go", "DSA", "AI/ML"],
        experience: "Freshers (Internship)"
    },
    {
        id: "lnt-software-engineer-land-systems-2026",
        role: "Software Engineer – Land Systems",
        company: "Larsen & Toubro (L&T)",
        location: "Mumbai, India",
        batch: "2024 / 2025 / 2026 (B.E / B.Tech)",
        postedAt: "May 11, 2026",
        skills: ["C", "C++", "Linux", "Embedded Systems", "Networking"],
        experience: "0–2 Years"
    },
    {
        id: "razorpay-systems-engineer-2026",
        role: "Systems Engineer (Network Specialist)",
        company: "Razorpay",
        location: "Bengaluru, India",
        batch: "Experienced (Network Infrastructure Preferred)",
        postedAt: "May 11, 2026",
        skills: ["Networking", "Firewalls", "Palo Alto", "Cisco Nexus"],
        experience: "Hands-on Experience Preferred"
    },
    {
        id: "cisco-software-automation-trainee-2026",
        role: "Software Automation Trainee",
        company: "Cisco Systems",
        location: "Bangalore, India",
        batch: "2025 / 2026 (B.E/B.Tech/BSc/BCA/Diploma)",
        postedAt: "May 11, 2026",
        skills: ["Python", "REST APIs", "Networking", "Automation", "DevOps"],
        experience: "Freshers Eligible"
    },
    {
        id: "barclays-software-engineer-2026",
        role: "Software Engineer",
        company: "Barclays",
        location: "Pune, Maharashtra",
        batch: "Recent Graduates / Experienced",
        postedAt: "May 11, 2026",
        skills: ["Java", "Spring Boot", "AWS Cloud", "Microservices"],
        experience: "Java Spring Boot & Cloud Experience Preferred"
    },
    {
        id: "hpe-platform-testing-2026",
        role: "Software Engineer – Platform Testing",
        company: "HPE",
        location: "Bengaluru, Karnataka",
        batch: "Bachelor's Degree (Networking Preferred)",
        postedAt: "May 10, 2026",
        skills: ["Networking", "Python Automation", "PoE Testing", "CI/CD"],
        experience: "Freshers / Experience Preferred"
    },
    {
        id: "hcltech-engineer-2026",
        role: "Software Engineer / Developer",
        company: "HCLTech",
        location: "PAN India (Bangalore / Noida / Chennai)",
        batch: "Bachelor's / Master's (Freshers)",
        postedAt: "May 10, 2026",
        skills: ["Infrastructure", "DevOps", "Automation", "BigFix"],
        experience: "Freshers"
    },
    {
        id: "cgi-apprentice-2026",
        role: "Apprentice – Java & Python",
        company: "CGI",
        location: "Bangalore, Karnataka",
        batch: "2024 / 2025 / 2026 (B.E / B.Tech)",
        postedAt: "May 10, 2026",
        skills: ["Java", "Python", "ERP", "Debugging"],
        experience: "Freshers Eligible"
    },
    {
        id: "salesforce-amts-2026",
        role: "Software Engineering AMTS",
        company: "Salesforce",
        location: "Bengaluru / Hyderabad",
        batch: "2026 Batch (B.E / B.Tech)",
        postedAt: "May 10, 2026",
        skills: ["Java", "Python", "Cloud", "DSA"],
        experience: "Freshers (7.5+ CGPA)"
    },
    {
        id: "siemens-healthineers-intern-2026",
        role: "Technical Intern",
        company: "Siemens Healthineers",
        location: "Bangalore, Karnataka",
        batch: "2025 / 2026 (B.E / B.Tech / BSc)",
        postedAt: "May 10, 2026",
        skills: ["C#", "C++", "Java", "Python", "SDLC"],
        experience: "Freshers / Students"
    },
    {
        id: "qualcomm-engineer-2026",
        role: "Engineer – Software (Campus Hire)",
        company: "Qualcomm",
        location: "Hyderabad / Bangalore / Chennai / Noida",
        batch: "2026 Batch (B.E / B.Tech / M.E / M.Tech)",
        postedAt: "May 10, 2026",
        skills: ["C", "C++", "Embedded Systems", "OS"],
        experience: "Freshers"
    },
    {
        id: "zycus-ai-intern-2026",
        role: "AI Engineer Intern",
        company: "Zycus",
        location: "Bangalore, Karnataka",
        batch: "2025 / 2026 (B.E / B.Tech / BSc)",
        postedAt: "May 10, 2026",
        skills: ["Python", "Gen-AI", "LangChain", "APIs"],
        experience: "Freshers Eligible"
    },
    {
        id: "rolls-royce-intern-2026",
        role: "Intern – Software Testing",
        company: "Rolls-Royce",
        location: "Pune, Maharashtra",
        batch: "2026 Batch (B.E / B.Tech)",
        postedAt: "May 10, 2026",
        skills: ["Embedded Systems", "Testing", "CAN/LIN", "Python"],
        experience: "Freshers Eligible"
    },
    {
        id: "cloudflare-intern-2026",
        role: "Software Engineer Intern",
        company: "Cloudflare",
        location: "Bengaluru, Karnataka (In-Office)",
        batch: "2025 / 2026 / 2027",
        postedAt: "May 5, 2026",
        skills: ["Go", "Rust", "Distributed Systems"],
        experience: "Freshers / Interns"
    },
    {
        id: "stellar-remote-sse-2026",
        role: "Senior Software Engineer (Remote)",
        company: "Stellar",
        location: "Fully Remote (Global)",
        batch: "4+ Years Experience",
        postedAt: "May 5, 2026",
        skills: ["Python", "Go", "AI Systems"],
        experience: "4+ Years"
    },
    {
        id: "wipro-data-scientist-2026",
        role: "Junior Data Engineer & Scientist",
        company: "Wipro",
        location: "Bengaluru, Karnataka",
        batch: "2024 / 2025 / 2026",
        postedAt: "May 5, 2026",
        skills: ["Power BI", "Data Science", "Python"],
        experience: "Freshers / 0-1 Year"
    },
    {
        id: "amazon-device-associate-2026",
        role: "Device Associate I (QA)",
        company: "Amazon",
        location: "Chennai, Tamil Nadu",
        batch: "Any Graduate",
        postedAt: "May 5, 2026",
        skills: ["QA", "Testing", "Regression"],
        experience: "Freshers"
    },
    {
        id: "honeywell-se-i-2026",
        role: "Software Engineer I (DevOps)",
        company: "Honeywell",
        location: "Bangalore / Hyderabad",
        batch: "STEM Graduates",
        postedAt: "May 5, 2026",
        skills: ["Python", "CI/CD", "GitHub Actions"],
        experience: "Freshers"
    },
    {
        id: "ey-ase-2026",
        role: "Associate Software Engineer",
        company: "EY (Ernst & Young)",
        location: "Across India (Multiple)",
        batch: "2024 / 2025 / 2026",
        postedAt: "May 5, 2026",
        skills: ["Java", "Python", ".NET", "React"],
        experience: "Freshers"
    },
    {
        id: "red-hat-jr-consultant-2026",
        role: "Junior Consultant (FASTER)",
        company: "Red Hat",
        location: "New Delhi (Remote/Hybrid)",
        batch: "2025 / 2026",
        postedAt: "May 5, 2026",
        skills: ["Linux", "Cloud", "DevOps"],
        experience: "Freshers"
    },
    {
        id: "cornerstone-jr-support-2026",
        role: "Junior Support Specialist (Intern)",
        company: "Cornerstone OnDemand",
        location: "Pune, Maharashtra",
        batch: "2024 / 2025 / 2026",
        postedAt: "May 5, 2026",
        skills: ["SaaS", "Cloud", "CRM"],
        experience: "0–1 Year"
    },
    {
        id: "cognizant-manual-qa-2026",
        role: "Developer (Manual QA Engineer)",
        company: "Cognizant",
        location: "Bangalore, Karnataka (WFH)",
        batch: "2024 / 2025 / 2026",
        postedAt: "May 5, 2026",
        skills: ["Manual Testing", "SDLC", "Agile"],
        experience: "Freshers / 0-1 Year"
    },
    {
        id: "nvidia-test-tools-2026",
        role: "Test and Tools Development Engineer",
        company: "NVIDIA",
        location: "Pune, Maharashtra",
        batch: "2026 Batch",
        postedAt: "May 5, 2026",
        skills: ["Python", "Automation", "AI Tools"],
        experience: "Freshers"
    },
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

const VIDEO_ADS = [
    {
        videoId: "n_1RfLUrjBw",
        title: "What Is KDB+ & Q? Ultra-Fast Database Every Java Developer Should Know",
        description: "High-performance databases are crucial for modern Java backend systems. Learn how KDB+ works in the real world."
    },
    {
        videoId: "81tyBnxODyU",
        title: "No Interview? Fix Your GitHub Profile (2026 Step-by-Step)",
        description: "Recruiters ignore weak profiles. Follow this guide to make your GitHub stand out and get hired fast."
    },
    {
        videoId: "yIahHYjkIjs",
        title: "How to Create an ATS Friendly Resume | Get Shortlisted Instantly",
        description: "Master the art of creating resumes that bypass ATS filters and land you more interviews in 2026."
    },
    {
        videoId: "2DwvB9gsVw0",
        title: "LinkedIn Masterclass 2026: Zero to Pro Guide (Step-by-Step)",
        description: "Optimize your professional network. Learn LinkedIn profile secrets from creation to high-level strategy."
    }
];

const JobsPage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedLoc, setSelectedLoc] = useState("All");
    const [selectedExp, setSelectedExp] = useState("All");
    const [selectedSkill, setSelectedSkill] = useState("All");
    const [selectedRole, setSelectedRole] = useState("All");
    const [selectedYear, setSelectedYear] = useState("All");
    const [selectedDate, setSelectedDate] = useState("All");

    const dateOptions = ["All", "Today", "Last 2 Days", "Last 4 Days", "Last 6 Days", "Last 8 Days", "Last 10 Days", "Last 12 Days"];

    const locations = ["All", "Bangalore", "Hyderabad", "Remote", "Kochi", "Bengaluru", "Pune", "Multiple", "Chennai", "Mumbai", "Noida", "Gurgaon"];
    const experiences = ["All", "Freshers", "0–2 Years", "1-3 Years", "4+ Years"];
    const roles = ["All", "Engineer", "Intern", "DevOps", "Tester", "Associate", "Scientist"];
    const years = ["All", "2024", "2025", "2026"];
    const skills = ["All", "Java", "Python", "React", "Docker", "Kubernetes", "C++", "C#", "Testing", "Manual Testing", "Automation", "Finance", "Accounting", "AWS", "DevOps", "Linux", "SaaS", "Cloud", "Data Science", "Power BI", "CI/CD", "Rust", "Distributed Systems", "AI/ML"];

    const filteredJobs = WHATSAPP_JOBS.filter(job => {
        const matchesSearch = 
            job.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.batch.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesLoc = selectedLoc === "All" || job.location.toLowerCase().includes(selectedLoc.toLowerCase());
        const matchesExp = selectedExp === "All" || (job.experience || "").toLowerCase().includes(selectedExp.toLowerCase()) || (selectedExp === "Freshers" && (job.experience || "").toLowerCase().includes("fresher"));
        const matchesSkill = selectedSkill === "All" || job.skills.some(s => s.toLowerCase() === selectedSkill.toLowerCase());
        const matchesRole = selectedRole === "All" || job.role.toLowerCase().includes(selectedRole.toLowerCase());

        const matchesYear = selectedYear === "All" || (() => {
            const yearsInBatch = job.batch.match(/\b(20\d{2})\b/g);
            if (!yearsInBatch) return true;
            const highestYearInBatch = Math.max(...yearsInBatch.map(Number));
            return highestYearInBatch >= Number(selectedYear);
        })();

        const matchesDate = selectedDate === "All" || (() => {
            if (job.postedAt === "Recently Active") return true;
            try {
                const jobDate = new Date(job.postedAt);
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                jobDate.setHours(0, 0, 0, 0);
                
                const diffTime = today.getTime() - jobDate.getTime();
                const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
                
                if (selectedDate === "Today") return diffDays === 0;
                const match = selectedDate.match(/\d+/);
                const daysLimit = match ? parseInt(match[0]) : 0;
                return diffDays <= daysLimit;
            } catch (e) {
                return true;
            }
        })();

        return matchesSearch && matchesLoc && matchesExp && matchesSkill && matchesRole && matchesYear && matchesDate;
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

                <div className="max-w-6xl mx-auto mb-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 backdrop-blur-sm">
                    <div className="flex flex-col gap-1.5 col-span-2 md:col-span-1">
                        <label className="text-xs text-gray-400 font-mono">Location</label>
                        <div className="relative">
                            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                            <select 
                                value={selectedLoc}
                                onChange={(e) => setSelectedLoc(e.target.value)}
                                className="w-full bg-black/40 text-white border border-white/10 rounded-xl pl-9 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm font-medium appearance-none cursor-pointer"
                            >
                                {locations.map((loc, index) => (
                                    <option key={index} value={loc} className="bg-slate-900 text-white">{loc}</option>
                                ))}
                            </select>
                        </div>
                    </div>

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

                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs text-gray-400 font-mono">Skills</label>
                        <div className="relative">
                            <Code className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                            <select 
                                value={selectedSkill}
                                onChange={(e) => setSelectedSkill(e.target.value)}
                                className="w-full bg-black/40 text-white border border-white/10 rounded-xl pl-9 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm font-medium appearance-none cursor-pointer"
                            >
                                {skills.map((skill, index) => (
                                    <option key={index} value={skill} className="bg-slate-900 text-white">{skill}</option>
                                ))}
                            </select>
                        </div>
                    </div>

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

                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs text-gray-400 font-mono">Date Posted</label>
                        <select 
                            value={selectedDate}
                            onChange={(e) => setSelectedDate(e.target.value)}
                            className="w-full bg-black/40 text-white border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm font-medium"
                        >
                            {dateOptions.map((opt, index) => (
                                <option key={index} value={opt} className="bg-slate-900 text-white">{opt}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="grid gap-6">
                    {filteredJobs.length > 0 ? (
                        filteredJobs.map((job, i) => {
                            const adIndex = Math.floor(i / 2) % VIDEO_ADS.length;
                            const showCompactAd = (i + 1) % 2 === 0 && (i + 1) % 4 !== 0;
                            const showPlaylistAd = (i + 1) % 4 === 0;

                            return (
                                <React.Fragment key={job.id}>
                                    <motion.div
                                        variants={fadeUp}
                                        initial="hidden"
                                        whileInView="show"
                                        viewport={{ once: true }}
                                        transition={{ delay: (i % 4) * 0.1 }}
                                        className="group bg-gradient-to-r from-[#0d1527] to-[#070b14] border border-white/5 hover:border-primary/40 rounded-3xl p-6 md:p-8 transition-all duration-300 shadow-2xl hover:shadow-[0_0_30px_rgba(0,120,255,0.2)] flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative overflow-hidden"
                                    >
                                        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        
                                        <div className="flex flex-col sm:flex-row items-start gap-5 flex-1 w-full">
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
                                    
                                    {showCompactAd && (
                                        <CompactAd 
                                            videoId={VIDEO_ADS[adIndex].videoId}
                                            title={VIDEO_ADS[adIndex].title}
                                            description={VIDEO_ADS[adIndex].description}
                                            className="my-4" 
                                        />
                                    )}

                                    {showPlaylistAd && <PlaylistAd className="my-8" />}
                                </React.Fragment>
                            );
                        })
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
