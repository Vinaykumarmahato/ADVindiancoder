import React, { useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { Briefcase, MapPin, Clock, DollarSign, Send, ArrowLeft, Building2, CheckCircle2, GraduationCap, Gift, ListChecks, HelpCircle, Share2, Linkedin, ChevronDown, ChevronUp } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';

// Expanded Mock job database
const jobListings = [
    {
        id: 'capgemini-finance-2026',
        title: 'Finance / Accounting / Associate Roles',
        company: 'Capgemini',
        location: 'Multiple Locations across India',
        type: 'Full-time',
        salary: 'Not Disclosed',
        experience: 'Freshers (Entry-Level)',
        postedDate: 'April 28, 2026',
        aboutCompany: 'Capgemini is a globally recognized organization known for its expertise in technology, consulting, and digital transformation. The company works with leading enterprises worldwide to modernize operations using advanced solutions in AI, cloud computing, data analytics, and engineering services.',
        description: 'Candidates selected will be part of global business and technology teams, contributing to innovative solutions and services across various domains.',
        responsibilities: [
            'Contributing to the design, development, and maintenance of modules',
            'Supporting configuration management, testing, and deployment processes',
            'Researching and utilizing emerging technologies to meet business needs',
            'Assisting in reviewing code and ensuring quality standards',
            'Collaborating with cross-functional teams to deliver solutions',
            'Demonstrating a basic understanding of architecture and business processes'
        ],
        skills: [
            'Communication skills', 'Analytical skills', 'Problem-solving', 'Basic OOP'
        ],
        eligibility: [
            'Bachelor\'s / Master\'s degree holders from various streams',
            'Willingness to learn new technologies and adapt to roles',
            'Flexibility to work in any Capgemini location across India'
        ],
        benefits: [
            'Structured training modules provided',
            'Global operations support infrastructure'
        ],
        applicationProcess: [
            'Round 1: Application Screening & Shortlisting',
            'Round 2: Online Assessment (Aptitude, Logical, Verbal)',
            'Round 3: Technical Interview (Core Fundamentals)',
            'Round 4: HR / Behavioral Interview'
        ],
        faqs: [
            { q: 'Is this role only for Finance graduates?', a: 'No — it covers Finance, Accounting, and general Associate roles open to Bachelor\'s/Master\'s degree holders.' },
            { q: 'Are there multiple locations available?', a: 'Yes — positions are open across multiple cities in India.' }
        ],
        applyLink: 'https://www.naukri.com/capgemini-jobs'
    },
    {
        id: 'yellow-devops-2026',
        title: 'DevOps Intern',
        company: 'Yellow.ai',
        location: 'Bangalore Urban, Karnataka (Onsite)',
        type: 'Internship',
        salary: 'Not Disclosed',
        experience: 'Freshers / Interns',
        postedDate: 'April 28, 2026',
        aboutCompany: 'Yellow.ai is a leading global platform specializing in generative AI-powered customer service automation. Powered by a multi-LLM architecture, the platform processes over 16 billion conversations annually.',
        description: 'As a DevOps Intern at Yellow.ai, you will work at the core of the company\'s staging infrastructure, ensuring development and testing environments remain stable, scalable, and efficient.',
        responsibilities: [
            'Maintain and manage staging (non-production) infrastructure environments',
            'Assist in application deployment using Docker and Kubernetes',
            'Support CI/CD pipelines for automated build, test, and deployment workflows',
            'Monitor system performance to ensure high availability and reliability',
            'Collaborate with engineering teams to troubleshoot infrastructure and deployment issues',
            'Document deployment processes and infrastructure updates'
        ],
        skills: [
            'Docker', 'Kubernetes', 'AWS', 'Linux commands', 'CI/CD'
        ],
        eligibility: [
            'B.E / B.Tech / BCA / MCA in Computer Science, IT, or related field',
            'Eligible batches: 2025 and 2026',
            'Basic understanding of Docker, Kubernetes, and Cloud environments'
        ],
        benefits: [
            'Work on real-world AI infrastructure scaled globally',
            'Hands-on experience with modern DevOps procedures'
        ],
        applicationProcess: [
            'Apply via standard career listings & direct resume forwarding'
        ],
        faqs: [
            { q: 'Do I need prior DevOps experience?', a: 'No — freshers are welcome. Basic knowledge of Docker, Linux, and cloud platforms is sufficient.' },
            { q: 'Is there a chance of full-time conversion?', a: 'Not explicitly stated, but high performance can lead to PPO offers at fast-paced AI startups.' }
        ],
        applyLink: 'mailto:niriksha.brar@yellow.ai?subject=Application for DevOps Intern'
    },
    {
        id: 'hpe-ai-ml-2026',
        title: 'AI/ML Engineer',
        company: 'Hewlett Packard Enterprise (HPE)',
        location: 'Bengaluru (Onsite)',
        type: 'Full-time',
        salary: 'Not Disclosed',
        experience: 'Freshers / 0–2 Years',
        postedDate: 'April 28, 2026',
        aboutCompany: 'Hewlett Packard Enterprise is a global technology leader specializing in edge-to-cloud solutions. HPE\'s Bengaluru Global Engineering Center is a major hub where engineers build next-generation cloud and AI integrations.',
        description: 'As an AI/ML Engineer at HPE, you will build and deploy machine learning models for enterprise-scale applications, working with large datasets and designing robust ML pipelines.',
        responsibilities: [
            'Design, build, and optimize ML and deep learning models using Python/PyTorch/TensorFlow',
            'Develop data ingestion, preprocessing, and feature engineering pipelines',
            'Conduct hyperparameter tuning experiments and evaluate performance metrics',
            'Deploy ML models into production API clusters',
            'Analyze large datasets utilizing standard database queries'
        ],
        skills: [
            'Python', 'Machine Learning', 'TensorFlow', 'PyTorch', 'Data Structures'
        ],
        eligibility: [
            'B.Tech / B.E / M.Tech (CS, AI/ML, Data Science, IT)',
            'Batch: 2024, 2025, or 2026',
            'Minimum 60% aggregate or 6.0 CGPA throughout academics'
        ],
        benefits: [
            'Health and life insurance options',
            'Structured mentorship for early-career professionals'
        ],
        applicationProcess: [
            'Round 1: Online Technical Assessment',
            'Round 2: Technical Interview',
            'Round 3: HR Interview'
        ],
        faqs: [
            { q: 'Is a 2024 batch graduate eligible?', a: 'Yes — 2024, 2025, and 2026 batches are all eligible.' },
            { q: 'What is the minimum score constraint?', a: '60% aggregate or 6.0 CGPA minimum requirements.' }
        ],
        applyLink: 'https://careers.hpe.com/'
    },
    {
        id: 'alcon-se-2026',
        title: 'Software Engineer Apprentice',
        company: 'Alcon',
        location: 'Bangalore (Onsite)',
        type: 'Apprenticeship',
        salary: 'Not Disclosed',
        experience: 'Freshers / 0–1 Year',
        postedDate: 'April 29, 2026',
        aboutCompany: 'Alcon is one of the world\'s leading eye care companies, dedicated to helping people see brilliantly through advanced medical technology. Headquartered in Switzerland and the United States, the company operates in over 60 countries and employs thousands of professionals globally.',
        description: 'As a Software Engineer Apprentice, you will be part of a cross-functional agile engineering team working on enterprise-grade applications. The program is designed to provide strong exposure to full-stack development, cloud platforms, and modern engineering practices.',
        responsibilities: [
            'Develop and enhance web applications using Java, Spring Boot, and React following enterprise-level architecture standards.',
            'Design and maintain RESTful APIs and microservices that integrate with internal systems and medical device platforms.',
            'Write clean, maintainable code with proper unit and integration tests, following test-driven development (TDD) practices.',
            'Collaborate in sprint planning, stand-ups, and retrospectives, contributing actively to team deliverables.',
            'Work with cloud platforms such as AWS or Azure, including CI/CD pipelines and containerized deployments.',
            'Identify, troubleshoot, and resolve issues found during testing or production monitoring.',
            'Maintain clear and structured technical documentation for long-term maintainability.'
        ],
        skills: [
            'Java', 'Spring Boot', 'React', 'SQL', 'REST APIs', 'Git', 'Cloud Fundamentals (AWS/Azure)'
        ],
        eligibility: [
            'B.E / B.Tech in Computer Science or Information Technology (2025/2026 batch)',
            'Final-year students awaiting results are eligible to apply',
            'Strong knowledge of Java and Spring Boot',
            'Basic understanding of React'
        ],
        benefits: [
            'Structured mentorship from experienced engineers',
            'Hands-on experience with real-world healthcare software systems',
            'Access to global learning platforms',
            'Opportunity for full-time conversion based on performance'
        ],
        applicationProcess: [
            'Round 1: Application Screening',
            'Round 2: Online Coding Test (Java & DSA)',
            'Round 3: Technical Interview',
            'Round 4: HR Interview'
        ],
        faqs: [
            { q: 'Is this an internship or a full-time job?', a: 'It is a 1-year apprenticeship program — not a permanent job, but with a strong chance of full-time conversion based on performance.' },
            { q: 'Can final-year students apply?', a: 'Yes — final-year students awaiting their results are explicitly eligible to apply.' },
            { q: 'Which batches are eligible?', a: 'Only 2025 and 2026 graduates. 2024 or earlier batches are not eligible.' }
        ],
        applyLink: 'https://alcon.wd5.myworkdayjobs.com/en-US/Alcon/job/IN—Bangalore/Software-Engineer-Apprentices_R-2026-46681'
    },
    {
        id: 'iqvia-intern-2026',
        title: 'Intern – Application Implementation & Support',
        company: 'IQVIA',
        location: 'Kochi (Hybrid)',
        type: 'Internship',
        salary: 'Not Disclosed (Competitive)',
        experience: 'Freshers / 0–1 Year',
        postedDate: 'April 29, 2026',
        aboutCompany: 'IQVIA is a global leader in clinical research services, commercial insights, and healthcare intelligence for the life sciences industry. Headquartered in Durham, the company operates in more than 100 countries and employs over 85,000 professionals worldwide. IQVIA plays a key role in accelerating the development and commercialization of innovative medical treatments.',
        description: 'As an Intern in the AI and Technology Solutions (ATS) division, you will work on commercial technology, safety, patient, and QARA product offerings. The role involves supporting the complete lifecycle of enterprise healthcare applications, including implementation, testing, and ongoing support.',
        responsibilities: [
            'Assist in application deployment and configuration across various product lines',
            'Provide support for application-related issues and ensure quick resolution',
            'Collaborate with product managers, developers, and business teams',
            'Participate in testing activities such as functional and regression testing',
            'Maintain documentation for processes, troubleshooting, and best practices',
            'Monitor application performance and suggest improvements',
            'Stay updated with industry trends and tools through continuous learning'
        ],
        skills: [
            'SDLC', 'Agile methodologies', 'Python', 'Java', 'Testing processes'
        ],
        eligibility: [
            'Bachelor\'s degree in Computer Science, IT, or related field',
            'Eligible batches: 2025 and 2026',
            'Basic understanding of application implementation and support',
            'Good communication and teamwork skills'
        ],
        benefits: [
            'Hands-on experience with real-world healthcare IT projects',
            'Mentorship from experienced professionals',
            'Exposure to enterprise-level applications',
            'Potential full-time opportunity after successful completion'
        ],
        applicationProcess: [
            'Step 1: Online Application Screening',
            'Step 2: Technical Assessment',
            'Step 3: HR Interview'
        ],
        faqs: [
            { q: 'Is this role fully remote or onsite?', a: 'It is a Hybrid role based in Kochi — you will need to be available to work from the office as required.' },
            { q: 'What is the duration of this internship?', a: 'This is a 1-year internship — longer than most short-term programs, giving solid practical exposure.' },
            { q: 'Can 2024 batch graduates apply?', a: 'The listing specifically mentions 2025 and 2026 batches only.' }
        ],
        applyLink: 'https://iqvia.wd1.myworkdayjobs.com/IQVIA/job/Kochi-India/Intern_R1536744'
    },
    {
        id: 'visa-se-2026',
        title: 'Software Engineer (SW Engineer)',
        company: 'Visa',
        location: 'Bangalore, Karnataka (Onsite)',
        type: 'Full-time',
        salary: 'Not Disclosed',
        experience: '6 months – 2 years',
        postedDate: 'April 28, 2026',
        aboutCompany: 'Visa is a global leader in digital payments technology, facilitating more than 215 billion transactions annually across over 200 countries and territories. The company builds reliable, secure, and scalable payment infrastructure used by consumers, businesses, financial institutions, and governments worldwide.',
        description: 'The role is for Visa\'s Product Reliability Engineering team, where engineers design, build, and maintain highly scalable software systems. The role involves solving real-time reliability challenges and ensuring seamless transaction processing at a massive global scale, including building intelligent systems using advanced GenAI technologies and contributing to deep learning solutions that support real-time transactions exceeding 100,000 transactions per second.',
        responsibilities: [
            'Build and maintain highly scalable, high-performance software systems',
            'Work on GenAI-powered reliability and deep learning solutions',
            'Solve real-time production reliability challenges',
            'Develop microservices-based architecture with REST APIs',
            'Implement CI/CD pipelines and work with Kafka for event streaming',
            'Collaborate with global engineering and product teams'
        ],
        skills: [
            'Java', 'Python', 'GenAI', 'Microservices', 'REST APIs', 'CI/CD', 'Kafka'
        ],
        eligibility: [
            'Degree: B.E / B.Tech / B.Sc / M.E / M.Tech / M.Sc / MBA',
            'Experience: 6 months to 2 years',
            'Skills Required: Java, Python, GenAI, Microservices, REST APIs, CI/CD, Kafka',
            'Strong problem-solving and analytical mindset'
        ],
        benefits: [
            'Global operational exposure',
            'Deep learning architecture design involvement',
            'Performance-oriented incentives'
        ],
        applicationProcess: [
            'Step 1: Application screening',
            'Step 2: Technical assessment evaluation',
            'Step 3: Comprehensive tech panel rounds'
        ],
        faqs: [
            { q: 'Is this role open for freshers?', a: 'It requires 6 months to 2 years of experience, so absolute freshers (0 months) may not qualify.' },
            { q: 'Is it work from home or onsite?', a: 'Onsite at Bangalore.' },
            { q: 'What is the salary?', a: 'Not disclosed officially — check Glassdoor for estimates.' }
        ],
        applyLink: 'https://visa.wd5.myworkdayjobs.com/Visa/job/IN—Bengaluru-India/Software-Engineer_REF079456W'
    },
    {
        id: 'microsoft-se-azure-2026',
        title: 'Software Engineer (Azure)',
        company: 'Microsoft',
        location: 'Hyderabad, Telangana (Onsite)',
        type: 'Full-time',
        salary: 'Not Disclosed',
        experience: '0–2+ years',
        postedDate: 'April 27, 2026',
        aboutCompany: 'Microsoft Azure is one of the world\'s leading cloud platforms. Within Azure, the Data Engineering group focuses on building next-generation database solutions that power modern applications — including Azure SQL Database, Azure PostgreSQL, Azure MySQL, and Azure Cosmos DB.',
        description: 'Selected candidates join the Azure Data Engineering team and contribute to building advanced cloud database solutions. The work involves developing highly scalable, secure, and reliable systems while collaborating with global teams, designing and maintaining core features that differentiate Microsoft\'s cloud offerings.',
        responsibilities: [
            'Develop and implement core product features for cloud database services',
            'Participate in architectural discussions for secure and scalable systems',
            'Write clean, maintainable, and extensible code following best practices',
            'Conduct code reviews to ensure quality and reliability',
            'Improve testing strategies and enhance test coverage',
            'Monitor and maintain live services through on-call rotations'
        ],
        skills: [
            'C', 'C++', 'C#', 'Java', 'JavaScript', 'Python', 'DSA', 'Cloud'
        ],
        eligibility: [
            'Degree: Bachelor\'s or Master\'s in Computer Science or related field',
            'Experience: Bachelor\'s Degree + 2 years experience, OR Master\'s Degree + relevant coding experience',
            'Technical Skills: Strong proficiency in C, C++, C#, Java, JavaScript, or Python',
            'Deep understanding of Data Structures and Algorithms'
        ],
        benefits: [
            'Flexible working arrangements',
            'Comprehensive healthcare support',
            'Generous retirement benefits'
        ],
        applicationProcess: [
            'Step 1: Profile review',
            'Step 2: DSA assessment evaluation',
            'Step 3: Core architectural discussions'
        ],
        faqs: [
            { q: 'Can I apply with a B.Tech and no experience?', a: 'B.Tech candidates need 2+ years of experience. Master\'s degree holders can apply with less.' },
            { q: 'Which team will I join?', a: 'Azure Data Engineering group — working on Azure SQL, PostgreSQL, Cosmos DB etc.' }
        ],
        applyLink: 'https://apply.careers.microsoft.com/careers/job/1970393556861136'
    },
    {
        id: 'wipro-intern-2026',
        title: 'Intern (North America Team)',
        company: 'Wipro',
        location: 'Bengaluru (Onsite)',
        type: 'Internship',
        salary: '₹4–₹8 LPA (Estimate)',
        experience: 'Recent Graduates / Pursuing',
        postedDate: 'April 26, 2026',
        aboutCompany: 'Wipro is a globally recognized IT company. The internship is part of Wipro\'s North America Transformation Team.',
        description: 'The program focuses on building practical skills by allowing candidates to work on real business challenges and contribute to impactful projects within the organization.',
        responsibilities: [
            'Collaborate with global teams and senior leaders on strategic internal initiatives',
            'Gain exposure to Wipro\'s business operations and client ecosystem',
            'Identify business requirements and convert them into actionable plans',
            'Participate in meetings with cross-functional teams and partner stakeholders',
            'Work closely with mentors and leadership for professional development',
            'Demonstrate teamwork, leadership, and strong communication skills'
        ],
        skills: [
            'Teamwork', 'Communication', 'Business Operations', 'Strategic Insights'
        ],
        eligibility: [
            'Pursuing or have completed a Bachelor\'s or Master\'s degree (any stream)',
            'Freshers welcome — no prior experience required',
            'Strong analytical, communication, and problem-solving skills preferred'
        ],
        benefits: [
            'Structured mentoring opportunities',
            'Transition routes into operational divisions',
            'Stipend payouts mapped appropriately'
        ],
        applicationProcess: [
            'Step 1: Background selection review',
            'Step 2: Operational readiness interviews'
        ],
        faqs: [
            { q: 'Is this a paid internship?', a: 'Yes. Glassdoor estimates ₹4–₹8 LPA equivalent compensation.' },
            { q: 'Is this remote or onsite?', a: 'Onsite at Bengaluru.' }
        ],
        applyLink: 'https://careers.wipro.com/job/Intern-L0-1/156375-en_US'
    },
    {
        id: 'google-se-ii-cloud-2026',
        title: 'Software Engineer II (Google Cloud)',
        company: 'Google',
        location: 'Bangalore (Onsite)',
        type: 'Full-time',
        salary: 'Not Disclosed',
        experience: 'Minimum 1 Year',
        postedDate: 'April 19, 2026',
        aboutCompany: 'The Google Cloud AI and Infrastructure team is focused on building highly scalable, secure, and efficient systems that power modern applications. From machine learning platforms to global data storage systems, Google Cloud provides enterprise-grade solutions that redefine how businesses operate.',
        description: 'As a Software Engineer II at Google Cloud, you will be responsible for developing and maintaining high-performance systems that handle large volumes of data efficiently.',
        responsibilities: [
            'Design, develop, test, and deploy scalable software solutions',
            'Write clean, maintainable, and efficient code following best practices',
            'Participate in code reviews to ensure quality, performance, and reliability',
            'Debug and resolve complex system issues across hardware and network layers',
            'Collaborate with cross-functional teams to improve system architecture',
            'Optimize applications for speed, scalability, and reliability',
            'Manage project priorities, timelines, and deliverables'
        ],
        skills: [
            'Java', 'Python', 'C++', 'C', 'JavaScript', 'DSA', 'Distributed Systems'
        ],
        eligibility: [
            'Degree: B.E/B.Tech/B.Sc/M.E/M.Tech/PhD in Computer Science or related',
            'Experience: Minimum 1 year of professional software development',
            'Technical Skills: Java, Python, C++, C, JavaScript or Go; strong DSA and system design',
            'Preferred: Master\'s/PhD, experience with large-scale cloud or AI systems'
        ],
        benefits: [
            'Premium healthcare benefits package',
            'Generous stock options allocation',
            'Access to globally competitive facilities'
        ],
        applicationProcess: [
            'Step 1: Technical screening',
            'Step 2: Multi-stage coding paradigms tests',
            'Step 3: Fitments analysis panels'
        ],
        faqs: [
            { q: 'Can freshers apply (0 experience)?', a: 'No — at least 1 year of experience is required for SE II level.' },
            { q: 'What coding languages does Google prefer?', a: 'Java, Python, C++, C, JavaScript — strong in any one plus DSA.' }
        ],
        applyLink: 'https://careers.google.com/'
    },
    {
        id: 'hcltech-jr-tester-2026',
        title: 'Junior Tester',
        company: 'HCLTech',
        location: 'Hyderabad, Telangana (Onsite)',
        type: 'Full-time',
        salary: 'Not Disclosed',
        experience: 'Freshers Welcome',
        postedDate: 'April 18, 2026',
        aboutCompany: 'HCLTech is a leading global technology company with a workforce of over 220,000 employees across 60 countries. The company delivers cutting-edge solutions in digital, engineering, and cloud services.',
        description: 'As a Junior Tester at HCLTech, you will be part of a high-performance verification and regression team working on advanced semiconductor technologies. Your primary responsibility will be to execute and monitor regression testing.',
        responsibilities: [
            'Execute and monitor regression test suites using internal tools like Viper',
            'Analyze and triage test failures, identify root causes, and rerun tests',
            'Debug issues related to SV/UVM testbenches and RTL-based IPs',
            'Maintain and track technical issues through proper ticketing systems',
            'Use AI tools (GitHub Copilot, ChatGPT, Codex) for scripting and debugging',
            'Work with simulators: Vivado, Questa, and VCS',
            'Maintain documentation of test cases, bugs, and resolutions'
        ],
        skills: [
            'Linux', 'Python/Perl', 'SV/UVM', 'Vivado', 'Questa', 'VCS', 'AI Tools'
        ],
        eligibility: [
            'Degree: B.E/B.Tech in Electronics, Computer Science, or related',
            'Batch: 2023, 2024, 2025, or 2026',
            'Experience: Freshers welcome',
            'Knowledge of Linux, Python/Perl or C++'
        ],
        benefits: [
            'On-job training tracks established',
            'Global operations rotation routines',
            'Health insurance guidelines optimized'
        ],
        applicationProcess: [
            'Step 1: Resume vetting',
            'Step 2: Core basic competencies mapping'
        ],
        faqs: [
            { q: 'Is this role for CS graduates or only Electronics?', a: 'Both Electronics and CS graduates can apply.' },
            { q: 'Do I need prior semiconductor knowledge?', a: 'Basic understanding is preferred; freshers with Electronics background are encouraged.' }
        ],
        applyLink: 'https://www.hcltech.com/careers'
    },
    {
        id: 'hpe-se-ii-2026',
        title: 'Software Engineer II',
        company: 'HPE',
        location: 'Bangalore, Karnataka (Onsite)',
        type: 'Full-time',
        salary: 'Not Disclosed',
        experience: '0–3 Years',
        postedDate: 'April 18, 2026',
        aboutCompany: 'Hewlett Packard Enterprise is a leading global organization focused on delivering edge-to-cloud solutions. Operating in over 100 countries, HPE helps businesses connect, protect, analyze, and act on their data seamlessly across environments.',
        description: 'In this role, candidates work within HPE\'s networking division, focusing on systems programming and advanced networking technologies. Engineers design and develop packet forwarding solutions.',
        responsibilities: [
            'Develop and enhance system software including OS, networking tools, and utilities in C/C++',
            'Work on packet forwarding technologies: L2 forwarding, IPv4/IPv6, MPLS, VPLS, EVPN, CFM',
            'Execute test plans and debug complex issues in Linux and microkernel environments',
            'Analyze and fix customer-reported issues',
            'Participate in software design and architecture discussions',
            'Collaborate with engineering, QA, and product teams'
        ],
        skills: [
            'C/C++', 'IPv4/IPv6', 'MPLS', 'EVPN', 'Linux', 'Microkernel'
        ],
        eligibility: [
            'Degree: B.Tech / B.E / M.Tech in CS, IT, ECE or equivalent',
            'Batch: 2024, 2025, or 2026',
            'Experience: 0–3 years (freshers eligible)',
            'Skills: Strong C/C++, Linux, networking protocols (IPv4/IPv6, MPLS)'
        ],
        benefits: [
            'Edge-to-cloud framework expertise mentoring',
            'Full medical care coverage',
            'Competitive variable packages'
        ],
        applicationProcess: [
            'Step 1: Resume assessment',
            'Step 2: Live C++ algorithms tests'
        ],
        faqs: [
            { q: 'Is this suitable for non-networking background candidates?', a: 'Basic networking knowledge is needed; deep expertise is preferred but candidates can learn on the job.' },
            { q: 'What is the work mode — remote or onsite?', a: 'Fully onsite at Bangalore.' }
        ],
        applyLink: 'https://careers.hpe.com/'
    },
    {
        id: 'hpe-jr-sre-2026',
        title: 'Junior SRE Engineer',
        company: 'HPE',
        location: 'Bangalore, Karnataka (Hybrid)',
        type: 'Full-time',
        salary: 'Not Disclosed',
        experience: '0–2 Years',
        postedDate: 'March 29, 2026',
        aboutCompany: 'HPE is a Fortune 500 global technology company specializing in hybrid IT, edge computing, cloud solutions, and enterprise infrastructure.',
        description: 'As a Junior Site Reliability Engineer, you will work on maintaining and improving the reliability of HPE\'s Networking SASE platforms. You will combine software engineering and system operations to improve uptime.',
        responsibilities: [
            'Monitor and maintain system reliability using Prometheus and Grafana',
            'Troubleshoot production issues by analyzing logs, metrics, and system performance',
            'Participate in incident management and on-call rotations',
            'Work with Kubernetes and containerized applications',
            'Automate operational tasks using Python or shell scripting',
            'Collaborate with development teams to improve system reliability',
            'Optimize performance and support capacity planning'
        ],
        skills: [
            'Prometheus', 'Grafana', 'Kubernetes', 'Python', 'Shell', 'CI/CD'
        ],
        eligibility: [
            'Degree: Bachelor\'s in Computer Science, IT, or related field',
            'Batch: 2024 or 2025',
            'Experience: 0–2 years (freshers welcome)',
            'Skills: Prometheus, Grafana, Kubernetes, Python/Shell scripting, CI/CD pipelines'
        ],
        benefits: [
            'Hybrid work support allowances',
            'Automation workflows exposure',
            'Inclusive corporate wellness'
        ],
        applicationProcess: [
            'Step 1: Application screening',
            'Step 2: Infrastructure tools deployment tests'
        ],
        faqs: [
            { q: 'What is SRE (Site Reliability Engineering)?', a: 'SRE combines software engineering with IT operations — ensuring systems are highly available, scalable, and reliable.' },
            { q: 'Is this remote or hybrid?', a: 'Hybrid at Bangalore.' }
        ],
        applyLink: 'https://careers.hpe.com/'
    },
    {
        id: 'amazon-vcs-2026',
        title: 'Virtual Associate Roles',
        company: 'Amazon',
        location: 'Remote / Work From Home (Across India)',
        type: 'Full-time / Part-time',
        salary: 'Not Disclosed',
        experience: 'Freshers / 0–1 Year',
        postedDate: 'Recently Active',
        aboutCompany: 'Amazon is one of the world\'s largest and most valuable technology companies, operating across e-commerce, cloud computing (AWS), artificial intelligence, and digital services.',
        description: 'Amazon is hiring for two WFH roles — ML Data Operations (AI data auditing) and Virtual Customer Support Associate (handling customer queries remotely).',
        responsibilities: [
            'Handle customer queries via phone, chat, and email (Support role)',
            'Resolve issues related to orders, returns, payments, and account queries',
            'Audit video and image data to improve Amazon\'s AI systems (ML Data Ops role)',
            'Maintain high accuracy and productivity in assigned tasks',
            'Use Amazon internal tools for data processing and customer interaction',
            'Work in 24/7 rotational shifts including weekends',
            'Follow data security and privacy guidelines while working remotely'
        ],
        skills: [
            'Customer Queries Handling', 'Video & Image Auditing', 'English & Regional Communication'
        ],
        eligibility: [
            'Education: 10+2 pass or any Graduate degree (any stream)',
            'Batch: 2023, 2024, 2025, 2026',
            'Experience: Freshers or 0–1 year',
            'Good communication skills (English and regional language)'
        ],
        benefits: [
            'Remote setup hardware provisions',
            'Rotational leaves options',
            'Internal mobility access'
        ],
        applicationProcess: [
            'Step 1: Language competency checks',
            'Step 2: Situational assessment quizzes'
        ],
        faqs: [
            { q: 'Is this fully work from home?', a: 'Yes, 100% remote across India.' },
            { q: 'Do I need a laptop?', a: 'Yes, a working laptop/PC and a stable internet connection are typically required.' }
        ],
        applyLink: 'https://amazon.jobs/'
    },
    {
        id: 'upgrad-qa-intern-2026',
        title: 'Quality Assurance Intern',
        company: 'upGrad',
        location: 'Pune / Bengaluru (In-Office)',
        type: 'Internship',
        salary: 'Not Disclosed',
        experience: 'Freshers (0–1 Year)',
        postedDate: 'April 19, 2026',
        aboutCompany: 'Founded in 2015, upGrad has become one of India\'s most recognized edtech platforms, serving over 10 million learners across more than 50 countries.',
        description: 'As a Quality Assurance Intern, you will be part of the QA team responsible for ensuring the quality and reliability of upGrad\'s web and mobile platforms.',
        responsibilities: [
            'Understand requirements and create detailed test cases for functional, regression, and edge-case scenarios',
            'Execute tests across web and mobile applications',
            'Identify, log, and track bugs using JIRA with detailed reproduction steps',
            'Validate bug fixes and perform re-testing',
            'Assist in UAT cycles and support product releases',
            'Prepare test data and maintain QA documentation',
            'Collaborate with developers and QA teams to ensure product quality'
        ],
        skills: [
            'Manual Testing', 'Test Case Design', 'JIRA', 'Regression Testing'
        ],
        eligibility: [
            'Degree: B.E / B.Tech / BCA / B.Sc in CS, IT, ECE or related',
            'Batch: 2024, 2025, or 2026',
            'Experience: Freshers (0–1 year)'
        ],
        benefits: [
            'Transition routes into full-time roles (PPOs)',
            'Flexible operations pacing'
        ],
        applicationProcess: [
            'Step 1: Candidate profiling',
            'Step 2: Basic logical test benchmarks'
        ],
        faqs: [
            { q: 'Is this a paid internship?', a: 'Salary is not disclosed — check during the interview process.' },
            { q: 'Do I need prior testing experience?', a: 'No — freshers from 2024/2025/2026 batches are welcome.' }
        ],
        applyLink: 'https://www.upgrad.com/careers/'
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

    const jobSchema = {
        "@context": "https://schema.org/",
        "@type": "JobPosting",
        "title": job.title,
        "description": job.description,
        "hiringOrganization": {
            "@type": "Organization",
            "name": job.company,
            "sameAs": "https://advindiancoder.com"
        },
        "jobLocation": {
            "@type": "Place",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": job.location,
                "addressCountry": "IN"
            }
        },
        "baseSalary": {
            "@type": "MonetaryAmount",
            "currency": "INR",
            "value": {
                "@type": "QuantitativeValue",
                "value": job.salary,
                "unitText": "YEAR"
            }
        },
        "datePosted": "2026-04-13",
        "validThrough": "2026-12-31",
        "employmentType": job.type
    };

    return (
        <PageWrapper>
            <SEO 
                title={`${job.title} at ${job.company}`} 
                description={`Apply for the ${job.title} position at ${job.company}. Location: ${job.location}. Experience: ${job.experience}. Salary: ${job.salary}. Join our team via ADV Indian Coder.`}
                ogType="article"
                schema={jobSchema}
            />
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
