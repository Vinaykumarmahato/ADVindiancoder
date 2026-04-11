import React, { useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { Briefcase, MapPin, Clock, DollarSign, Send, ArrowLeft, Building2, CheckCircle2, GraduationCap, Gift, ListChecks, HelpCircle, Share2, Linkedin, ChevronDown, ChevronUp } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import { motion, AnimatePresence } from 'framer-motion';

// Expanded Mock job database
const jobListings = [
    {
        id: 'full-stack-dev',
        title: 'Middle Full Stack Developer',
        company: 'Inoglle',
        location: 'Remote / India',
        type: 'Full-time',
        salary: '₹12L - ₹18L',
        experience: '3+ Years',
        postedDate: '2 Days Ago',
        aboutCompany: 'Inoglle is a fast-growing technology company dedicated to innovating digital products with passion. We aim to bridge the gap between creative design and robust engineering, creating platforms that impact thousands of users daily.',
        description: 'We are looking for an experienced Full Stack Developer to join our core product team at Inoglle. You will take ownership of end-to-end features, architecting scalable backend systems, and crafting responsive frontend experiences.',
        responsibilities: [
            'Design, develop, and maintain advanced web applications.',
            'Collaborate with cross-functional teams to define, design, and ship new features.',
            'Maintain API integrations and optimize database performance.',
            'Participate in code reviews and advocate for best engineering practices.'
        ],
        skills: [
            'React.js, Node.js, Express, TypeScript',
            'Relational (PostgreSQL) and NoSQL (MongoDB) databases',
            'REST/GraphQL API design',
            'Git, Docker, Basic CI/CD Pipelines'
        ],
        eligibility: [
            'B.Tech / B.E in Computer Science or related practical experience.',
            'Minimum 3 years of full-stack web development.',
            'Strong problem-solving skills and teamwork.'
        ],
        benefits: [
            'Competitive industry salary & performance bonuses',
            '100% Remote work flexibility',
            'Comprehensive Health Insurance',
            'Annual Learning & Development stipend'
        ],
        applicationProcess: [
            'Step 1: Resume & Portfolio Screening',
            'Step 2: Take-home Technical Assignment (React & Node)',
            'Step 3: Technical Interview (System Design)',
            'Step 4: HR & Culture Fit Round'
        ],
        faqs: [
            { q: 'Is this role completely remote?', a: 'Yes, this role is 100% remote within India. You can work from anywhere.' },
            { q: 'Do you provide a WFH allowance?', a: 'Yes, setting up your home office is important, and we offer a one-time setup allowance.' },
            { q: 'What is the standard selection time?', a: 'Our entire interview loop usually finishes within 2 weeks of applying.' }
        ]
    },
    {
        id: 'ui-ux-designer',
        title: 'Senior UI/UX Designer',
        company: 'Inoglle',
        location: 'Remote',
        type: 'Contract',
        salary: 'Competitive',
        experience: '4+ Years',
        postedDate: '1 Week Ago',
        aboutCompany: 'Inoglle focuses on intuitive user experiences. We build interfaces that are aesthetic, accessible, and high-performing.',
        description: 'Inoglle is seeking a talented UI/UX Designer to create amazing user experiences. You will translate high-level requirements into interaction flows and artifacts into beautiful, intuitive, and functional UI designs.',
        responsibilities: [
            'Execute all visual design stages from concept to final hand-off to engineering',
            'Create wireframes, storyboards, user flows, process flows and site maps',
            'Establish and promote design guidelines, best practices and standards'
        ],
        skills: [
            'Figma, Adobe XD, Sketch',
            'Prototyping & Wireframing',
            'Design Systems',
            'Basic understanding of HTML/CSS is a plus'
        ],
        eligibility: [
            'Bachelor’s Degree in Design, CS, or equivalent experience.',
            '4+ years of UI/UX design experience.',
            'Strong portfolio showcasing mobile and web application design.'
        ],
        benefits: [
            'Flexible working hours',
            'Contract extensions based on performance',
            'Collaborative & creative environment'
        ],
        applicationProcess: [
            'Step 1: Portfolio Review',
            'Step 2: Design Assignment / Case Study Presentation',
            'Step 3: Final Discussion with the Tech Lead'
        ],
        faqs: [
            { q: 'Can this lead to a full-time role?', a: 'Yes, exceptional contractors are often offered full-time conversions.' }
        ]
    },
    {
        id: 'emerson-ai-ml',
        title: 'Software Developer (AI/ML)',
        company: 'Emerson',
        location: 'Noida, India',
        type: 'Full-Time',
        salary: 'Competitive Salary',
        experience: '1–5 Years',
        postedDate: 'Just Now',
        aboutCompany: 'Emerson is a global technology and software company delivering innovative solutions across industrial, commercial, and residential sectors. Its Automation Solutions division helps organizations improve efficiency, safety, and operational performance.',
        description: 'Emerson Recruitment 2026 is now open for candidates looking to build a career in advanced AI and software development. As a Software Developer (AI/ML), you will work on building intelligent AI-driven systems within Emerson’s ecosystem. You will design and deploy AI agents, develop automation workflows, and contribute to scalable AI applications. The role requires strong expertise in AI/ML, along with hands-on experience in modern AI architectures. This role focuses on modern technologies like Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), and Agentic AI systems, offering an opportunity to work on real-world industrial applications.',
        responsibilities: [
            'Develop AI agents for industrial automation systems',
            'Contribute to the design of AI platforms and tools',
            'Collaborate with cross-functional teams (engineering, UX, security)',
            'Improve system performance and efficiency',
            'Ensure security and compliance in AI solutions',
            'Work with infrastructure teams for scalability and GPU optimization'
        ],
        skills: [
            'Python & C# (Mandatory)',
            'TensorFlow or PyTorch',
            'Large Language Models (LLMs) & RAG',
            'Agentic AI Systems'
        ],
        eligibility: [
            'Bachelor’s or Master’s degree in relevant fields (CS, Electrical, AI, etc.)',
            '1–5 years of experience in AI/ML development',
            'Strong problem-solving and development skills'
        ],
        benefits: [
            'Competitive salary (not disclosed)',
            'Opportunity to work on advanced AI technologies',
            'Exposure to real-world industrial projects',
            'Strong career growth in AI and automation'
        ],
        applicationProcess: [
            'Apply through the official link',
            'Shortlisting based on profile',
            'Technical interview rounds',
            'Final selection'
        ],
        faqs: [
            { q: 'Is this a fresher job?', a: 'No, this role requires 1–5 years of experience.' },
            { q: 'What programming languages are required?', a: 'Python and C# are mandatory.' },
            { q: 'Is industrial experience required?', a: 'Not mandatory, but it is a plus.' },
            { q: 'What is the job location?', a: 'Noida, India.' }
        ],
        applyLink: 'https://hdjq.fa.us2.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1/job/26001839'
    },
    {
        id: 'ibm-intern-2026',
        title: 'Software Developer Intern',
        company: 'IBM',
        location: 'Bangalore, India',
        type: 'Full-Time Internship',
        salary: 'As per company standards',
        experience: 'Fresher (Student)',
        postedDate: 'New',
        aboutCompany: 'IBM is a global leader in technology and innovation, known for its work in Artificial Intelligence, Cloud Computing, and Enterprise Solutions. With platforms like watsonx.ai, IBM provides a strong environment for learning, innovation, and real-world problem solving.',
        description: 'The IBM Internship 2026 program is an opportunity to gain hands-on experience in AI, full stack development, and emerging technologies like AR/VR. You will collaborate with experienced engineers, gain exposure to agile product cycles, and contribute to building scalable real-world applications.',
        responsibilities: [
            'Collaborate with developers, architects, and designers',
            'Write, test, debug, and optimize code',
            'Develop scalable features aligned with product requirements',
            'Work on AI-based modules and modern applications',
            'Explore tools like Generative AI and AR/XR platforms'
        ],
        skills: [
            'Python or JavaScript',
            'React, Angular, or Next.js',
            'HTML, CSS, Web Development',
            'Basic AI/ML concepts'
        ],
        eligibility: [
            'Pursuing Bachelor’s or Master’s in CS or related field',
            'Open to freshers and students',
            'Strong interest in software development and emerging technologies'
        ],
        benefits: [
            'Stipend as per IBM standards',
            'Work on scalable real-world products',
            'Mentorship from experienced professionals',
            'Strong career growth and networking opportunities'
        ],
        applicationProcess: [
            'Online Application & Resume Shortlisting',
            'Technical assessment / Coding round',
            'Technical Interview',
            'HR Interview'
        ],
        faqs: [
            { q: 'Who can apply?', a: 'Students pursuing a Bachelor’s or Master’s degree in CS or related fields.' },
            { q: 'Is prior experience required?', a: 'No, freshers can apply. Having solid personal projects will help.' },
            { q: 'What technologies will I work on?', a: 'Python, JavaScript, React, Next.js, AI/ML tools, and AR/VR technologies.' },
            { q: 'What is the job location?', a: 'Bangalore, India.' }
        ],
        applyLink: 'https://careers.ibm.com/en_US/careers/JobDetail?jobId=106370&source=SN_LinkedIn'
    }
];

const JobDetailsPage = () => {
    const { jobId } = useParams();
    const location = useLocation();
    const job = jobListings.find(j => j.id === jobId);
    
    // FAQ state toggle
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    // Determine back behavior
    const isFromJobs = location.pathname.startsWith('/jobs');
    const backLink = isFromJobs ? '/jobs' : '/career';
    const backText = isFromJobs ? 'Back to Job Board' : 'Back to Careers';

    if (!job) {
        return (
            <PageWrapper>
                <div className="min-h-[50vh] flex flex-col items-center justify-center">
                    <h2 className="text-3xl font-bold mb-4">Job Not Found</h2>
                    <p className="mb-6 text-gray-400">The job posting you're looking for doesn't exist or has been closed.</p>
                    <Link to={backLink} className="text-primary hover:underline flex items-center">
                        <ArrowLeft className="w-4 h-4 mr-2"/> {backText}
                    </Link>
                </div>
            </PageWrapper>
        );
    }

    // Use external custom link (e.g. telegram) or fallback to internal email apply
    const applyTarget = job.applyLink ? job.applyLink : `mailto:Inogllecompany@gmail.com?subject=${encodeURIComponent('Application for ' + job.title + ' - ' + job.company)}`;
    
    const currentUrl = encodeURIComponent(window.location.href);
    const shareText = encodeURIComponent(`Check out this ${job.title} job at ${job.company}!`);

    return (
        <PageWrapper>
            <div className="bg-[#050914] min-h-screen text-white font-sans relative pb-24">
                {/* Background Grid */}
                <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 relative z-10">
                    <Link to={backLink} className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        {backText}
                    </Link>
                    
                    {/* Hero Section / Quick Overview */}
                    <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-2xl backdrop-blur-md mb-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full"></div>
                        
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 relative z-10">
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="bg-primary/20 text-primary border border-primary/30 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
                                        Actively Hiring
                                    </span>
                                    <span className="text-gray-400 text-sm flex items-center"><Clock className="w-4 h-4 mr-1" /> {job.postedDate}</span>
                                </div>
                                <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">{job.title}</h1>
                                
                                {/* Quick Overview Badges */}
                                <div className="flex flex-wrap gap-4 text-sm font-medium">
                                    <div className="flex items-center bg-black/40 border border-white/10 px-4 py-2 rounded-xl">
                                        <Building2 className="w-5 h-5 mr-3 text-blue-400" />
                                        <div>
                                            <p className="text-xs text-gray-400 uppercase tracking-wider">Company</p>
                                            <p className="text-white">{job.company}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center bg-black/40 border border-white/10 px-4 py-2 rounded-xl">
                                        <MapPin className="w-5 h-5 mr-3 text-red-400" />
                                        <div>
                                            <p className="text-xs text-gray-400 uppercase tracking-wider">Location</p>
                                            <p className="text-white">{job.location}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center bg-black/40 border border-white/10 px-4 py-2 rounded-xl">
                                        <Briefcase className="w-5 h-5 mr-3 text-green-400" />
                                        <div>
                                            <p className="text-xs text-gray-400 uppercase tracking-wider">Experience</p>
                                            <p className="text-white">{job.experience}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center bg-black/40 border border-white/10 px-4 py-2 rounded-xl">
                                        <DollarSign className="w-5 h-5 mr-3 text-yellow-400" />
                                        <div>
                                            <p className="text-xs text-gray-400 uppercase tracking-wider">Salary</p>
                                            <p className="text-white">{job.salary}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="flex flex-col gap-4 shrink-0 w-full md:w-auto">
                                <a 
                                    href={applyTarget}
                                    target={job.applyLink ? "_blank" : "_self"}
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center px-10 py-4 text-lg font-black text-white bg-primary hover:bg-blue-600 transition-all rounded-2xl shadow-[0_0_30px_rgba(0,120,255,0.4)] hover:shadow-[0_0_40px_rgba(0,120,255,0.6)] hover:-translate-y-1"
                                >
                                    <Send className="w-5 h-5 mr-2" />
                                    {job.applyLink ? 'Apply Now' : 'Apply via Email'}
                                </a>
                                
                                {/* Share Buttons */}
                                <div className="flex justify-center gap-3">
                                    <p className="text-sm text-gray-400 flex items-center mr-2"><Share2 className="w-4 h-4 mr-2"/> Share:</p>
                                    <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`} target="_blank" rel="noopener noreferrer" className="p-2 bg-[#0A66C2]/20 text-[#0A66C2] rounded-lg hover:bg-[#0A66C2] hover:text-white transition-colors">
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                    <a href={`https://wa.me/?text=${shareText} ${currentUrl}`} target="_blank" rel="noopener noreferrer" className="p-2 bg-[#25D366]/20 text-[#25D366] rounded-lg hover:bg-[#25D366] hover:text-white transition-colors flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Main Content Left */}
                        <div className="md:col-span-2 space-y-10">
                            
                            <section>
                                <h2 className="text-2xl font-bold mb-4 flex items-center border-b border-white/10 pb-4">
                                    <Building2 className="w-6 h-6 mr-3 text-primary" /> About {job.company}
                                </h2>
                                <p className="text-gray-300 leading-relaxed text-lg">{job.aboutCompany}</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-4 flex items-center border-b border-white/10 pb-4">
                                    <Briefcase className="w-6 h-6 mr-3 text-primary" /> Job Description
                                </h2>
                                <p className="text-gray-300 leading-relaxed text-lg">{job.description}</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-4 flex items-center border-b border-white/10 pb-4">
                                    <ListChecks className="w-6 h-6 mr-3 text-primary" /> Roles & Responsibilities
                                </h2>
                                <ul className="space-y-4">
                                    {job.responsibilities.map((req, idx) => (
                                        <li key={idx} className="flex items-start text-gray-300 text-lg">
                                            <div className="w-2 h-2 mt-2.5 rounded-full bg-primary mr-4 shrink-0 shadow-[0_0_8px_#0078FF]"></div>
                                            {req}
                                        </li>
                                    ))}
                                </ul>
                            </section>

                           <section>
                                <h2 className="text-2xl font-bold mb-4 flex items-center border-b border-white/10 pb-4">
                                    <GraduationCap className="w-6 h-6 mr-3 text-primary" /> Eligibility Criteria
                                </h2>
                                <ul className="space-y-4">
                                    {job.eligibility.map((req, idx) => (
                                        <li key={idx} className="flex items-start text-gray-300 text-lg">
                                            <div className="w-2 h-2 mt-2.5 rounded-full bg-purple-500 mr-4 shrink-0 shadow-[0_0_8px_#a855f7]"></div>
                                            {req}
                                        </li>
                                    ))}
                                </ul>
                            </section>
                            
                            <section>
                                <h2 className="text-2xl font-bold mb-6 flex items-center border-b border-white/10 pb-4">
                                    <HelpCircle className="w-6 h-6 mr-3 text-primary" /> Frequently Asked Questions
                                </h2>
                                <div className="space-y-4">
                                    {job.faqs.map((faq, idx) => (
                                        <div key={idx} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                                            <button 
                                                className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-white/5 transition-colors focus:outline-none"
                                                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                            >
                                                <span className="font-semibold text-lg">{faq.q}</span>
                                                {openFaq === idx ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                                            </button>
                                            <AnimatePresence>
                                                {openFaq === idx && (
                                                    <motion.div 
                                                        initial={{ opacity: 0, height: 0 }} 
                                                        animate={{ opacity: 1, height: 'auto' }} 
                                                        exit={{ opacity: 0, height: 0 }}
                                                    >
                                                        <div className="px-6 pb-5 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                                                            {faq.a}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ))}
                                </div>
                            </section>

                        </div>

                        {/* Sidebar Right */}
                        <div className="space-y-8">
                            <div className="bg-gradient-to-b from-white/10 to-transparent border border-white/10 rounded-[2rem] p-8 shadow-xl backdrop-blur-sm">
                                <h3 className="text-xl font-bold mb-6 flex items-center"><CheckCircle2 className="w-5 h-5 mr-3 text-green-400" /> Required Skills</h3>
                                <div className="flex flex-wrap gap-3">
                                    {job.skills.map((skill, idx) => (
                                        <span key={idx} className="bg-black/50 border border-white/10 text-gray-300 px-4 py-2 rounded-lg text-sm font-medium">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 shadow-xl backdrop-blur-sm">
                                <h3 className="text-xl font-bold mb-6 flex items-center"><Gift className="w-5 h-5 mr-3 text-yellow-400" /> Salary & Benefits</h3>
                                <ul className="space-y-4">
                                    {job.benefits.map((benefit, idx) => (
                                        <li key={idx} className="flex items-start text-gray-300 text-sm">
                                            <CheckCircle2 className="w-4 h-4 mt-0.5 text-yellow-400 mr-3 shrink-0" />
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 shadow-xl backdrop-blur-sm">
                                <h3 className="text-xl font-bold mb-6 flex items-center"><Briefcase className="w-5 h-5 mr-3 text-blue-400" /> Application Process</h3>
                                <div className="space-y-6 relative before:absolute before:inset-0 before:ml-[11px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
                                    {job.applicationProcess.map((step, idx) => (
                                        <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                            <div className="flex items-center justify-center w-6 h-6 rounded-full border-4 border-[#050914] bg-primary text-slate-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_10px_#0078FF] z-10"></div>
                                            <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-1.5rem)] p-4 rounded-xl border border-white/10 bg-black/40 text-sm text-gray-300">
                                                {step}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Final Bottom CTA */}
                    <div className="mt-20 pt-12 pb-12 border-t border-white/10 text-center relative">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
                        <h2 className="text-4xl font-black mb-6">Ready to join our team?</h2>
                        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">Take the next step in your career journey. Apply online and secure your future.</p>
                        <a 
                            href={applyTarget}
                            target={job.applyLink ? "_blank" : "_self"}
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-12 py-5 text-xl font-black text-white bg-primary hover:bg-blue-600 transition-all rounded-full shadow-[0_0_30px_rgba(0,120,255,0.4)] hover:shadow-[0_0_40px_rgba(0,120,255,0.6)] hover:-translate-y-1"
                        >
                            <Send className="w-6 h-6 mr-3" />
                            {job.applyLink ? 'Apply for this Job' : 'Apply Now'}
                        </a>
                    </div>
                </div>
            </div>
        </PageWrapper>
    );
};

export default JobDetailsPage;
