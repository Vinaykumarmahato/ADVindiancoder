import React, { useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { Briefcase, MapPin, Clock, DollarSign, Send, ArrowLeft, Building2, CheckCircle2, GraduationCap, Gift, ListChecks, HelpCircle, Share2, Linkedin, ChevronDown, ChevronUp } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';
import PlaylistAd from '../components/PlaylistAd';

// Expanded Mock job database
const jobListings = [
    {
        id: 'capgemini-associate-technician-2026',
        title: 'Associate – Products & Systems Technician',
        company: 'Capgemini',
        location: 'Pune, Maharashtra',
        type: 'Full-Time',
        salary: 'Competitive Package',
        experience: 'Freshers / 0–1 Year',
        postedDate: 'May 30, 2026',
        aboutCompany: 'Capgemini is a global leader in consulting, technology services, engineering, and digital transformation. With more than 340,000 employees across 50+ countries, the company helps organizations accelerate innovation through cloud, AI, cybersecurity, software engineering, and enterprise technologies.',
        description: 'Capgemini has officially launched its Off Campus Drive 2026 for the role of Associate – Products & Systems Technician at its Pune office. This role provides hands-on experience in product support, incident management, system monitoring, and troubleshooting. Job ID: 1398805133',
        responsibilities: [
            'Provide L1/L2 support for enterprise products and systems.',
            'Troubleshoot incidents and resolve issues within SLA timelines.',
            'Monitor and maintain production environments.',
            'Assist with product configuration and deployments.',
            'Create technical documentation and knowledge-base articles.',
            'Collaborate with engineering, QA, and support teams.',
            'Participate in root cause analysis (RCA) activities.',
            'Continuously improve operational processes and monitoring mechanisms.'
        ],
        skills: [
            'Operating Systems', 'Networking', 'Database', 'Incident Management', 'Troubleshooting', 'Scripting', 'ITIL', 'Communication Skills'
        ],
        eligibility: [
            'B.E / B.Tech / Diploma (CS, IT, ECE & Related Branches)',
            '2024, 2025, & 2026 Pass-outs',
            'Freshers and candidates with up to 1 year of experience are eligible.'
        ],
        benefits: [
            'Competitive Fresher Package',
            'Comprehensive Training Programs',
            'Certification Support',
            'Health Insurance',
            'Provident Fund Benefits',
            'Career Growth Opportunities',
            'Mentorship from Industry Experts'
        ],
        applicationProcess: [
            'Step 1: Update your resume with Academic Details, Technical Skills, Projects, Internships, and Certifications.',
            'Step 2: Visit the official Capgemini Careers Portal.',
            'Step 3: Search using Job ID: 1398805133.',
            'Step 4: Complete the application form and upload your updated resume.',
            'Step 5: Submit your application and save the reference number for future tracking.'
        ],
        faqs: [
            { q: 'Is this role suitable for freshers?', a: 'Yes. Freshers from eligible branches can apply.' },
            { q: 'Can Diploma students apply?', a: 'Yes, eligible Diploma candidates can apply if they meet the required criteria.' },
            { q: 'Is this a work-from-home role?', a: 'The role is primarily based in Pune and may follow a hybrid work model depending on business requirements.' }
        ],
        applyLink: 'https://www.capgemini.com/careers/'
    },
    {
        id: 'danaher-ai-ml-intern-2026',
        title: 'Intern – AI/ML',
        company: 'Danaher Corporation',
        location: 'Bangalore, Karnataka',
        type: 'Internship (1 Year Full-Time)',
        salary: 'Not disclosed (Industry Standard)',
        experience: 'Freshers / 1–2 Years',
        postedDate: 'June 1, 2026',
        aboutCompany: 'Danaher is a global science and technology company operating across Life Sciences, Diagnostics, and Environmental & Applied Solutions. With operations in over 60 countries, Danaher develops innovative technologies that help improve healthcare outcomes and scientific research worldwide.',
        description: 'Danaher Corporation is hiring an AI/ML Intern for a one-year full-time internship at their Bangalore office. This is an excellent opportunity for students and fresh graduates interested in Artificial Intelligence, Machine Learning, Data Science, and Healthcare Technology. Job ID: R1310701',
        responsibilities: [
            'Develop and optimize Machine Learning models.',
            'Work on Deep Learning frameworks such as TensorFlow and PyTorch.',
            'Build data pipelines and preprocessing workflows using Python.',
            'Analyze and process large datasets.',
            'Write SQL queries for data extraction and reporting.',
            'Collaborate with engineering, product, and research teams.',
            'Document experiments, findings, and model performance.',
            'Contribute to healthcare informatics and AI-driven solutions.'
        ],
        skills: [
            'Python', 'Machine Learning', 'Deep Learning', 'TensorFlow', 'PyTorch', 'SQL', 'Scikit-Learn', 'Pandas', 'NumPy', 'Java', 'C#'
        ],
        eligibility: [
            'M.E./M.Tech in AI, Machine Learning, Information Technology, Software Engineering (Preferred).',
            'B.E./B.Tech in Computer Science or Information Technology.',
            'Freshers can apply.',
            'Candidates with up to 2 years of relevant experience may receive preference.'
        ],
        benefits: [
            'Global Fortune 500 Company',
            'Work on Real AI/ML Projects',
            'Healthcare Technology Exposure',
            'International Team Collaboration',
            'Strong Learning Environment',
            'Excellent Resume Value'
        ],
        applicationProcess: [
            'Step 1: Update your resume with AI/ML Projects, Python Skills, SQL Experience, and GitHub Portfolio.',
            'Step 2: Visit the official Danaher Careers Portal.',
            'Step 3: Search for Job ID R1310701 and submit your application.'
        ],
        faqs: [
            { q: 'Is this internship paid?', a: 'Danaher has not publicly disclosed the stipend details. Compensation information may be shared during the hiring process.' },
            { q: 'Can freshers apply?', a: 'Yes, eligible freshers can apply.' },
            { q: 'Is there a PPO opportunity?', a: 'High-performing interns may receive full-time opportunities based on business requirements and performance.' }
        ],
        applyLink: 'https://jobs.danaher.com/global/en'
    },
    {
        id: 'sharechat-manual-qa-intern-2026',
        title: 'Manual QA Intern',
        company: 'ShareChat (Mohalla Tech Pvt Ltd)',
        location: 'Bengaluru, Karnataka',
        type: 'Internship',
        salary: 'Stipend based on performance',
        experience: 'Freshers',
        postedDate: 'June 1, 2026',
        aboutCompany: 'ShareChat (Mohalla Tech Pvt Ltd) is India\'s largest homegrown social media company, serving over 200 million monthly monetizable users through products like ShareChat, Moj, and QuickTV.',
        description: 'ShareChat is looking for a Manual QA Intern to join their team in Bengaluru. The ideal candidate will be responsible for designing and executing manual test cases, validating AI-generated code, and ensuring product quality before releases reach millions of users.',
        responsibilities: [
            'Design and execute manual test cases for web and mobile applications.',
            'Perform functional, regression, exploratory, smoke, sanity, and UAT testing.',
            'Validate AI-generated code produced by tools such as GitHub Copilot and Cursor.',
            'Identify, document, and track defects using Jira, Linear, or similar tools.',
            'Collaborate with developers and product teams during Agile development cycles.',
            'Maintain test plans, test cases, and QA documentation.',
            'Ensure product quality before releases reach millions of users.'
        ],
        skills: [
            'SDLC', 'QA Methodologies', 'Python', 'JavaScript', 'Jira', 'Linear', 'Trello', 'Postman', 'Git', 'GitHub'
        ],
        eligibility: [
            'B.E./B.Tech/B.Sc. in Computer Science, IT, Electronics, or related field',
            'Pursuing or Recently Graduated',
            'Understanding of Software Development Life Cycle (SDLC)',
            'Basic knowledge of QA methodologies and testing concepts',
            'Ability to read and understand Python or JavaScript code',
            'Familiarity with bug-tracking tools such as Jira, Linear, or Trello',
            'Strong analytical and problem-solving skills',
            'Good written and verbal communication skills',
            'Preferred: Exposure to AI tools like ChatGPT, GitHub Copilot, or Cursor, API testing using Postman, Knowledge of Git and GitHub, Mobile application testing experience'
        ],
        benefits: [
            'Work on AI-powered products used by millions of users.',
            'Gain hands-on experience in software quality assurance.',
            'Opportunity for full-time conversion based on performance.',
            'Hybrid work environment.',
            'Exposure to Bengaluru\'s leading technology ecosystem.'
        ],
        applicationProcess: [
            'Step 1: Application Screening',
            'Step 2: Online Assessment / Assignment (if applicable)',
            'Step 3: Technical Interview',
            'Step 4: HR Discussion',
            'Step 5: Final Selection'
        ],
        faqs: [
            { q: 'Is this an onsite role?', a: 'No, it is a Hybrid role based in Bengaluru.' },
            { q: 'What is the selection process?', a: 'The process includes Application Screening, Online Assessment (if applicable), Technical Interview, HR Discussion, and Final Selection.' }
        ],
        applyLink: 'https://sharechat.com/about/careers'
    },
    {
        id: 'volvo-group-apprentice-2026',
        title: 'Graduate Apprentice Trainee (NATS)',
        company: 'Volvo Group (Volvo India)',
        location: 'Bangalore, India',
        type: 'Apprenticeship (1 Year)',
        salary: 'As per NATS norms and Volvo policy',
        experience: 'Fresher (Student Position Type)',
        postedDate: 'May 26, 2026',
        aboutCompany: 'Volvo Group is one of the world’s leading manufacturers of trucks, buses, construction equipment and marine and industrial engines. Headquartered in Gothenburg, Sweden, the company operates a major engineering and shared-services hub in Bangalore, India. With close to 100,000 employees across the globe, Volvo is known for its culture of care, inclusiveness and employee empowerment.',
        description: 'Volvo Group Apprenticeship 2026 is officially open for applications. Volvo India is inviting B.Com graduates from the 2024, 2025 and 2026 batches to apply for the Graduate Apprentice Trainee position in Bangalore under the National Apprenticeship Training Scheme (NATS). This one-year, fully structured apprenticeship sits within Volvo Financial Services and covers payroll administration, retiral benefits and HR operations.',
        responsibilities: [
            'Retiral Benefits Administration: Support the administration of employee retirement benefits including Provident Fund (PF), Gratuity and Superannuation operations.',
            'FBP Claims Administration: Process Flexible Benefit Plan reimbursement claims for employees in accordance with company policy.',
            'Payroll Administration: Assist in monthly payroll processing, validation and reconciliation activities for the Indian employee base.',
            'EDM Administration: Scan employee hard-copy files and forward them to the respective employee’s official email ID for digital preservation.',
            'EDM Ticket Processing: Convert scanned documents into Electronic Document Management (EDM) tickets within Volvo’s internal systems.',
            'Document Upload: Process and resolve tickets by uploading documents to the EDM database through the ASK HR platform.',
            'Accuracy and Documentation: Maintain accuracy and proper documentation at every process step to ensure full audit compliance.'
        ],
        skills: [
            'MS Excel', 'MS Word', 'Accounting Concepts', 'Payroll Administration', 'HR Operations', 'Communication Skills'
        ],
        eligibility: [
            'B.Com graduates only. No other degree will be considered for this position.',
            'Candidates who have passed out in 2024, 2025 or 2026 are eligible.',
            'Basic computer knowledge including MS Office applications, specifically MS Excel and MS Word.',
            'Good written and verbal communication in English, strong attention to detail, and willingness to follow structured process guidelines.',
            'Candidates must be willing to work from Volvo’s Bangalore office (Parin Building, 5th Floor).'
        ],
        benefits: [
            'Structured training from a globally recognised HR operations team',
            'Exposure to enterprise-grade payroll and document management systems',
            'A strong addition to your professional profile from the very first year after graduation',
            'Possibility of being considered for full-time roles within Volvo Group based on performance during the apprenticeship'
        ],
        applicationProcess: [
            'Round 1 – Online Application: Resume submission and academic record screening through the Volvo Group careers portal.',
            'Round 2 – Telephonic or Virtual Screening: An HR call to verify your eligibility, communication skills and interest in the role.',
            'Round 3 – Functional Interview: A discussion with the People and Culture team covering basic accounting concepts, MS Excel proficiency and process understanding.',
            'Round 4 – HR and Culture Fit Interview: A final round assessing your readiness to work from the Bangalore office, your learning mindset and your overall culture fit with the Volvo organisation.'
        ],
        faqs: [
            { q: 'Are engineering graduates eligible?', a: 'No, this position is strictly for B.Com graduates only.' },
            { q: 'What is the duration of this apprenticeship?', a: 'The apprenticeship is for a period of 1 year under the NATS scheme.' }
        ],
        applyLink: 'https://xjobs.brassring.com/TGnewUI/Search/home/HomeWithPreLoad?partnerid=25079&siteid=5171&PageType=JobDetails&jobid=562122'
    },
    {
        id: 'sp-global-data-analyst-2026',
        title: 'Data Analyst / Associate',
        company: 'S&P Global',
        location: 'Hyderabad, Telangana',
        type: 'Full-Time',
        salary: 'Competitive',
        experience: '0 to 2 Years (Freshers Eligible)',
        postedDate: 'May 26, 2026',
        aboutCompany: 'S&P Global is one of the world’s leading providers of credit ratings, benchmarks, analytics, and financial intelligence. The company serves businesses, governments, and financial institutions across global capital and commodity markets. Its data and insights help decision-makers at every level operate with accuracy and confidence.',
        description: 'S&P Global has announced a recruitment drive for the role of Data Analyst / Associate at its Hyderabad office. This is a significant opportunity for recent graduates and early-career professionals with a background in sustainability, economics, environmental science, or data analytics. Candidates with knowledge of ESG concepts and reporting standards are strongly encouraged to apply.',
        responsibilities: [
            'Data Processing: Collecting, processing, and validating sustainability and financial data in line with established process guidelines.',
            'Data Integrity: Maintaining accuracy and consistency of data within S&P Global’s proprietary database systems.',
            'Research and Synthesis: Summarizing and consolidating information from multiple sources, including Annual Reports, Sustainability Reports, and regulatory filings.',
            'Collaboration and Targets: Working alongside team members to meet both individual and collective targets for quality, efficiency, and turnaround time.',
            'Analysis and Application: Interpreting company documents and applying relevant ESG reporting standards to classify and validate data accurately.'
        ],
        skills: [
            'ESG Concepts', 'Data Analytics', 'SQL', 'Power BI', 'MS Excel', 'Sustainability Reporting', 'Research and Synthesis'
        ],
        eligibility: [
            'Educational Qualification: Environmental Science, Sustainability, Data Analytics, Economics, Public Policy, MBA, CA, or CFA (Master’s level qualifications are also accepted).',
            'Open to freshers and candidates with up to 2 years of experience in a related domain.',
            'Good understanding of ESG concepts and sustainability reporting standards.',
            'Strong research and analytical abilities.',
            'Proficiency in Microsoft Office tools including Word, Excel, and PowerPoint.',
            'Working knowledge of SQL and Power BI (Preferred).'
        ],
        benefits: [
            'Direct exposure to real-world corporate data and international reporting standards.',
            'Structured professional environment in one of the most in-demand fields of the decade.',
            'Hyderabad office is a key hub for S&P Global’s data operations in Asia.'
        ],
        applicationProcess: [
            'Step 1: Apply online through the official S&P Global careers portal.',
            'Step 2: Shortlisting based on resume and qualifications.',
            'Step 3: Interviews and technical assessments.'
        ],
        faqs: [
            { q: 'Are freshers eligible for this role?', a: 'Yes, freshers and candidates with up to 2 years of experience can apply.' },
            { q: 'What skills are preferred?', a: 'Working knowledge of SQL and Power BI, along with ESG and sustainability reporting knowledge, is preferred.' }
        ],
        applyLink: 'https://careers.spglobal.com/jobs/328971'
    },
    {
        id: 'deloitte-qa-intern-2026',
        title: 'QA Intern',
        company: 'Deloitte',
        location: 'Bangalore, India',
        type: 'Internship',
        salary: 'Competitive Stipend',
        experience: 'Freshers (0 Years)',
        postedDate: 'May 26, 2026',
        aboutCompany: 'Deloitte is a leading multinational professional services firm and one of the Big Four accounting organizations in the world. The company provides a broad range of services including audit and assurance, tax, financial advisory, risk management, and consulting, with a strong focus on information technology and business transformation.',
        description: 'Deloitte has announced an exciting recruitment drive for fresh graduates to join its team as a QA Intern at its Bangalore office. This is a golden opportunity for freshers who wish to begin their professional journey with one of the Big Four accounting and consulting organizations in the world.',
        responsibilities: [
            'Source potential candidates through online channels such as social platforms and professional networks to build a strong talent pipeline.',
            'Ensure utilization of all sourcing channels to reach both active and passive candidates, meeting the required hiring demand and productivity targets.',
            'Communicate openly and in a timely manner throughout the candidate journey, ensuring that candidate needs are consistently met at every stage.',
            'Ensure that accurate job descriptions and relevant interview questions are in place to reflect each position’s requirements.',
            'Engage in candidate fitment evaluation based on internal parity standards and organizational guidelines.',
            'Keep candidates engaged through various touchpoints and warm communication strategies until they successfully join the organization.',
            'Ensure the best possible candidate experience is delivered throughout the entire recruitment process.',
            'Leverage existing pipelines through past applicants and potential candidates to fill open positions efficiently.'
        ],
        skills: [
            'Communication Skills', 'Analytical Skills', 'Quality Assurance', 'Sourcing', 'Candidate Engagement', 'Problem Solving'
        ],
        eligibility: [
            'Must hold a bachelor’s degree or be currently pursuing one in Computer Science or a related technical discipline.',
            'Should be a critical thinker who consistently questions the status quo and looks for improvements.',
            'Must be open and flexible in approach, with the ability to adapt quickly to changing business needs and priorities.',
            'Excellent communication skills are required, both written and verbal, to effectively interact with candidates and internal stakeholders.',
            'Strong analytical skills with a good understanding of business processes and organizational dynamics.'
        ],
        benefits: [
            'Working with a Big Four firm adds significant credibility to your resume from day one.',
            'Deloitte invests heavily in employee development and training programs.',
            'Work alongside experienced professionals and build connections.',
            'Many full-time positions at Deloitte are filled by converting high-performing interns.',
            'Competitive compensation and benefits even at the intern level.'
        ],
        applicationProcess: [
            'Step 1: Apply online through the official LinkedIn job listing.',
            'Step 2: CV screening process.',
            'Step 3: Interview rounds and assessment tests communicated via email.'
        ],
        faqs: [
            { q: 'Is this a full-time role?', a: 'No, this is an internship role with a possibility of conversion to full-time based on performance.' },
            { q: 'What is the location of the internship?', a: 'The internship is located at the Deloitte office in Bangalore.' }
        ],
        applyLink: 'https://www.linkedin.com/jobs/search/?keywords=Deloitte%20QA%20Intern'
    },
    {
        id: 'accenture-tech-support-2026',
        title: 'Tech Support Associate Services',
        company: 'Accenture',
        location: 'Bangalore, India',
        type: 'Full-time (Work From Office)',
        salary: 'Competitive',
        experience: 'Freshers (0–2 Years)',
        postedDate: 'May 26, 2026',
        aboutCompany: 'Accenture is a global leader with operations in over 120 countries and more than 700,000 employees worldwide. It is one of the world\'s top technology and consulting companies.',
        description: 'Are you a fresh graduate looking for your first job in IT? Accenture is currently hiring Any Graduate Freshers for the role of Tech Support Associate Services at their Bangalore office. This is a golden opportunity to kickstart your IT career with a Fortune 500 company.',
        responsibilities: [
            'Providing Level 1 (L1) Technical Support through the IT Service Desk',
            'Helping users troubleshoot and resolve hardware, software, and network issues quickly',
            'Logging every interaction, issue, and resolution in an ITSM tool like ServiceNow or BMC Remedy',
            'Working closely with your team to improve service delivery and customer satisfaction',
            'Handling support via voice calls, email, chat, and remote desktop tools',
            'Working within defined SLAs (Service Level Agreements) and understanding the complete ticket lifecycle'
        ],
        skills: [
            'ServiceNow', 'BMC Remedy', 'Microsoft 365', 'Active Directory', 'Hardware Troubleshooting', 'Incident Management', 'Communication Skills'
        ],
        eligibility: [
            'Education: Minimum 15 years of full-time education (10+2+3 or equivalent — any graduation degree qualifies)',
            'Communication: Excellent verbal skills with a neutral accent; strong written communication including email etiquette',
            'Attitude: Calm under pressure, especially while handling frustrated customers or high call volumes',
            'Problem Solving: Good analytical thinking and customer-first mindset',
            'Flexibility: Must be open to working in 24x7 rotational shifts (9.5-hour shifts), including US/night shifts, weekends, and Indian public holidays'
        ],
        benefits: [
            'Brand name on your resume from day one',
            'Structured training for freshers — no prior experience needed',
            'Career growth — many senior Accenture employees started in L1 support',
            'Exposure to global clients and international teams',
            'Competitive salary and benefits for entry-level roles',
            'Learning culture with access to certifications, internal courses, and upskilling programs'
        ],
        applicationProcess: [
            'Step 1: Click on the official application link and fill in your personal/educational details',
            'Step 2: Upload an updated resume highlighting your communication skills',
            'Step 3: Submit the application and wait for a response on your registered email ID'
        ],
        faqs: [
            { q: 'Are any specific degrees required?', a: 'No, any graduate with a minimum of 15 years of full-time education can apply.' },
            { q: 'Is there a night shift?', a: 'Yes, this role requires working in 24x7 rotational shifts including US/night shifts.' }
        ],
        applyLink: 'https://www.accenture.com/in-en/careers/jobdetails?id=14254398_en&title=RRN00015961+-Infra+Tech+Support+Practitioner'
    },
    {
        id: 'cognizant-service-desk-2026',
        title: 'Service Desk - Digital Workplace Practice',
        company: 'Cognizant',
        location: 'PAN India',
        type: 'Full-time (Shift-based)',
        salary: 'Disclosed during the hiring process (Industry competitive)',
        experience: 'Freshers Only',
        postedDate: 'May 26, 2026',
        aboutCompany: 'Cognizant is one of the world’s leading professional services companies, helping clients transform their business, operations, and technology models for the digital era. Headquartered in Teaneck, New Jersey, the company has major delivery centres across India in Chennai, Bengaluru, Hyderabad, and Pune. With over 340,000 employees globally and a consistent Fortune 500 ranking, Cognizant is a top employer of choice for Indian graduates.',
        description: 'Cognizant has officially launched its Service Desk Off Campus Drive 2026 for fresh graduates from the 2025 and 2026 batch. This is a direct hiring opportunity to join one of India’s most reputed global IT companies in a customer-facing technical support role under the Digital Workplace Practice. The drive is open PAN India with no service bond requirement.',
        responsibilities: [
            'Serve as the first point of contact in the Service Desk for end-users reporting IT issues via phone, email, or ticketing portal.',
            'Log, track, and resolve Service Desk tickets accurately and within defined Service Level Agreements (SLAs).',
            'Troubleshoot hardware and software issues to minimise downtime and disruption for client end-users across multiple time zones.',
            'Collaborate with internal IT teams to escalate and resolve complex technical issues in a timely and structured manner.',
            'Build and maintain a knowledge base of articles to enable faster resolutions for recurring IT issues.',
            'Maintain a client-focused mindset while supporting users across diverse cultures and geographies.',
            'Work in rotational shifts from the office, including night shifts as required by client SLA commitments.'
        ],
        skills: [
            'IT Support', 'Service Desk', 'Troubleshooting', 'Communication Skills', 'Hardware', 'Software', 'Customer Service'
        ],
        eligibility: [
            'Any 3-year UG degree — BCom, BCA, BSc, BA, BBA, B.Voc, BMS, or equivalent',
            '2025 and 2026 passing batch only',
            '50% minimum in Class X, Class XII, Diploma (if applicable), and UG degree (Rounding off 49.9% to 50% is strictly not permitted)',
            'Students with active standing arrears are NOT eligible',
            'Students currently enrolled in full-time PG programmes are NOT eligible',
            'Must be willing to work from any Cognizant office in India across any given shift timing'
        ],
        benefits: [
            'No Service Bond',
            'BITS Pilani Sponsored Higher Education (For Science, Tech, and Math backgrounds)',
            'Night Shift Allowance',
            'Safe Transport Facility (Cab pick-up and drop for shift employees)',
            'Comprehensive Health Insurance',
            'Rewards and Recognition programmes'
        ],
        applicationProcess: [
            'Step 1: Online Application and Resume Screening via Superset portal',
            'Step 2: Online Assessment (Aptitude, logical reasoning, English comprehension, basic IT support concepts)',
            'Step 3: Communication Assessment (Voice-based evaluation for spoken English fluency)',
            'Step 4: HR and Behavioural Interview (Shift willingness, location preference, cultural fit)'
        ],
        faqs: [
            { q: 'Is there a service bond?', a: 'No, Cognizant does not require freshers to sign a service bond for this role.' },
            { q: 'Which batches are eligible?', a: 'Only 2025 and 2026 passing batch graduates are eligible.' }
        ],
        applyLink: 'https://app.joinsuperset.com/'
    },
    {
        id: 'trimble-software-engineer-2026',
        title: 'Software Engineer 1',
        company: 'Trimble Inc.',
        location: 'Chennai, Tamil Nadu',
        type: 'Hybrid',
        salary: '₹6 LPA – ₹12 LPA (Expected)',
        experience: 'Freshers / Early Career',
        postedDate: 'May 26, 2026',
        aboutCompany: 'Trimble Inc. is a global technology company known for developing software and digital solutions for industries such as construction, transportation, infrastructure, and public sector operations. The Owner & Public Sector division focuses on helping organizations manage infrastructure projects and public assets through cloud-based and data-driven technologies. Trimble promotes a culture centered around innovation, collaboration, and continuous learning.',
        description: 'Trimble Inc. is hiring freshers and early-career engineers for the position of Software Engineer 1 in Chennai. This hybrid opportunity is designed for candidates interested in modern software development, cloud applications, and AI-assisted engineering workflows. The role offers exposure to global engineering teams, SaaS product development, Agile methodologies, and AI-powered coding tools.',
        responsibilities: [
            'Developing production-ready software features',
            'Working on SaaS applications using modern development practices',
            'Participating in Agile development cycles and sprint activities',
            'Collaborating with global engineering teams',
            'Writing clean, scalable, and maintainable code',
            'Using AI-powered development tools for productivity improvement',
            'Solving technical problems and debugging applications',
            'Contributing to product enhancements and feature implementation'
        ],
        skills: [
            'C#', '.NET Core', 'SQL', 'Node.js', 'Java', 'React.js', 'Angular', 'DSA', 'OOP', 'GitHub Copilot', 'Cursor'
        ],
        eligibility: [
            'B.E / B.Tech or M.E / M.Tech in Computer Science, IT, Software Engineering, or related technical disciplines',
            '2024, 2025, and 2026 graduates are preferred',
            'Freshers and early-career professionals can apply',
            'Strong understanding of Data Structures and Algorithms',
            'Knowledge of Object-Oriented Programming concepts',
            'Familiarity with AI-assisted development workflows (preferred)'
        ],
        benefits: [
            'Opportunity to work on real-world SaaS products',
            'Exposure to global engineering teams',
            'Hybrid work flexibility',
            'Learning-focused engineering culture',
            'Mentorship from experienced developers',
            'AI-first software development environment',
            'Strong career growth opportunities'
        ],
        applicationProcess: [
            'Step 1: Application Screening (Resumes shortlisted based on academics, projects, technical skills)',
            'Step 2: Online Assessment (Aptitude, logical reasoning, DSA coding)',
            'Step 3: Technical Interview (Coding, DSA, OOP, tech stack, projects)',
            'Step 4: HR / Behavioral Interview (Communication, teamwork, cultural fit)'
        ],
        faqs: [
            { q: 'What is the Job ID for this role?', a: 'The Job ID is R55420.' },
            { q: 'Do I need to know all mentioned technologies?', a: 'No. Candidates should be comfortable with at least one of the listed technology stacks (C#/.NET/SQL OR Node.js/Java/React).' },
            { q: 'Is AI tool experience mandatory?', a: 'It is not mandatory, but candidates familiar with AI-assisted development tools like GitHub Copilot or Cursor may have an advantage.' }
        ],
        applyLink: 'https://trimble.wd1.myworkdayjobs.com/TrimbleCareers/job/Chennai-India/Software-Engineer-1_R55420'
    },
    {
        id: 'tech-mahindra-voice-chat-support-2026',
        title: 'Voice & Chat Support Executive',
        company: 'Tech Mahindra',
        location: 'Multiple Locations Across India',
        type: 'Full-Time (Work From Office)',
        salary: '₹2.5 LPA – ₹3.5 LPA',
        experience: '0 to 5 Years',
        postedDate: 'May 26, 2026',
        aboutCompany: 'Tech Mahindra is one of India’s leading IT and business process outsourcing companies. Headquartered in Pune, the company serves global clients across industries such as telecommunications, banking, manufacturing, healthcare, and retail. With a strong international presence and thousands of employees worldwide, Tech Mahindra provides technology-driven business solutions and customer support services to enterprises globally.',
        description: 'Tech Mahindra is inviting applications for the position of Voice and Chat Support Executive across multiple locations in India. The company is looking for freshers as well as experienced professionals who are interested in building a career in customer support, technical operations, and service desk management. This opportunity is suitable for candidates with strong communication abilities, basic technical troubleshooting knowledge, and customer handling skills.',
        responsibilities: [
            'Managing customer queries through calls, chat, and email',
            'Providing technical assistance and issue resolution',
            'Troubleshooting desktop, laptop, printer, and network-related issues',
            'Maintaining records of incidents and solutions',
            'Delivering quality customer service within defined timelines',
            'Supporting remote troubleshooting activities',
            'Handling blended support operations efficiently',
            'Following standard operational and ITIL procedures',
            'Ensuring customer satisfaction through timely responses'
        ],
        skills: [
            'Communication Skills', 'Hardware & Networking Basics', 'Problem-solving', 'Customer Handling', 'Antivirus Tools', 'Patch Management', 'SCCM Basics', 'Remote Support'
        ],
        eligibility: [
            'Any Graduate can apply',
            'Undergraduate candidates are also eligible',
            'Freshers are welcome',
            'Candidates with up to 5 years of experience can apply'
        ],
        benefits: [
            'Competitive salary package (₹2.5 LPA – ₹3.5 LPA)',
            'Career growth opportunities',
            'Professional work environment',
            'Employee incentives and benefits',
            'Fast onboarding process',
            'Cab facility for eligible locations'
        ],
        applicationProcess: [
            'Step 1: HR Interview',
            'Step 2: Voice and Accent Assessment',
            'Step 3: Operations Round',
            'Step 4: Onboarding information via email for selected candidates'
        ],
        faqs: [
            { q: 'Is this role open for freshers?', a: 'Yes, freshers and candidates with up to 5 years of experience are eligible to apply.' },
            { q: 'What is the work mode?', a: 'This is a Full-Time, Work From Office role.' }
        ],
        applyLink: 'https://www.amazon.jobs/en/jobs/10477224/software-dev-engineer-temp'
    },
    {
        id: 'amazon-sde-i-2026',
        title: 'Software Dev Engineer I (SDE-I)',
        company: 'Amazon',
        location: 'Bengaluru, Hyderabad, Chennai, Delhi, Maharashtra',
        type: 'Full-time',
        salary: 'Highly Competitive Package',
        experience: 'Freshers (0–1 Year)',
        postedDate: 'May 23, 2026',
        aboutCompany: 'Amazon is one of the world’s largest technology companies, known for innovation in eCommerce, Cloud Computing (AWS), Artificial Intelligence, Logistics, Smart Devices, and Digital Streaming. Amazon’s engineering culture focuses heavily on customer obsession, ownership, innovation, continuous learning, and problem-solving.',
        description: 'Amazon has officially opened applications for the Amazon Off Campus Drive 2026 for the role of Software Dev Engineer I (SDE-I) across multiple locations in India. SDE-Is at Amazon work on large-scale distributed systems, cloud technologies, scalable software platforms, and high-impact customer products.',
        responsibilities: [
            'Design and develop scalable, high-performance customer-focused software solutions',
            'Develop fault-tolerant distributed systems that handle massive-scale traffic and transactions',
            'Analyze complex technical problems and build optimized software solutions',
            'Write clean, maintainable, and efficient code following software best practices',
            'Work in Agile/Scrum teams and participate in fast-paced software release cycles',
            'Improve application performance, scalability, reliability, and operational efficiency',
            'Take ownership of features from design and development to deployment and support',
            'Experiment with emerging technologies to improve global customer experience'
        ],
        skills: [
            'Java', 'Python', 'C++', 'DSA', 'DBMS', 'Operating Systems', 'Computer Networks', 'Distributed Systems'
        ],
        eligibility: [
            'Bachelor’s degree or higher in Computer Science, Computer Engineering, IT, or related fields',
            'Eligible Batches: 2024, 2025, and 2026 Graduates',
            '0–1 year experience (Freshers are highly encouraged to apply)'
        ],
        benefits: [
            'Highly competitive base salary',
            'Attractive joining bonuses and Restricted Stock Units (RSUs)',
            'Comprehensive health insurance and wellness programs',
            'Mentorship from experienced senior engineers',
            'Global scale project exposure and learning programs',
            'Flexible work culture and robust career growth opportunities'
        ],
        applicationProcess: [
            'Step 1: Online Assessment (Coding, debugging, work-style assessment)',
            'Step 2: Technical Interview (DSA coding, complexity analysis, problem-solving)',
            'Step 3: Technical & Low-Level Design (OOD, LLD basics, system design fundamentals)',
            'Step 4: Bar Raiser / HR Round (Amazon Leadership Principles using the STAR method)'
        ],
        faqs: [
            { q: 'How should I prepare for the interview?', a: 'Focus on Data Structures & Algorithms (Arrays, Trees, Graphs, DP) on platforms like LeetCode or GFG, and study Amazon Leadership Principles.' },
            { q: 'Which programming languages are allowed?', a: 'Proficiency in at least one object-oriented language like Java, C++, C, or Python is expected.' }
        ],
        applyLink: 'https://www.amazon.jobs/?utm_source=chatgpt.com'
    },
    {
        id: 'harman-devops-2026',
        title: 'Associate Engineer – AWS DevOps',
        company: 'Harman International',
        location: 'Bangalore, Karnataka',
        type: 'Full-time (Onsite)',
        salary: 'Competitive Package',
        experience: '0–1 Year / Freshers',
        postedDate: 'May 23, 2026',
        aboutCompany: 'Harman International is a globally recognized technology company specializing in connected technologies for automotive, consumer electronics, and enterprise solutions. As a subsidiary of Samsung Electronics, Harman owns premium brands like JBL, AKG, Harman Kardon, Mark Levinson, and Revel, focusing on connected cars, cloud platforms, digital transformation, and smart audio systems.',
        description: 'Harman International has officially opened applications for the Harman Off Campus Drive 2026 for the role of Associate Engineer – AWS DevOps at its Bangalore office. This opportunity is ideal for fresh graduates who are passionate about cloud technologies, DevOps engineering, CI/CD pipelines, Kubernetes, Docker, and infrastructure automation.',
        responsibilities: [
            'Build and maintain CI/CD pipelines using GitLab CI and Jenkins',
            'Automate software build, testing, and deployment workflows',
            'Support automation initiatives across development and QA teams',
            'Work with Docker for application containerization',
            'Maintain container-based deployment and staging environments',
            'Support deployment and monitoring in Kubernetes environments (Pods, services, scaling)',
            'Monitor CI/CD pipelines and deployment health, troubleshooting infrastructure failures',
            'Collaborate with developers, testers, and DevOps engineers in Agile cycles'
        ],
        skills: [
            'AWS', 'GitLab CI', 'Jenkins', 'Docker', 'Kubernetes', 'Linux Fundamentals', 'Shell Scripting', 'Python'
        ],
        eligibility: [
            'Bachelor’s degree in Computer Science, IT, or related technical disciplines',
            'Batch: 2024, 2025, or 2026 Graduates',
            '0–1 year experience (Freshers, internships, academic projects, or DevOps labs are accepted)'
        ],
        benefits: [
            'Competitive salary package',
            'Learning opportunities through Harman University',
            'Exposure to cloud-native technologies',
            'Global project experience',
            'Career growth opportunities',
            'Employee recognition programs',
            'Inclusive and collaborative work culture'
        ],
        applicationProcess: [
            'Step 1: Resume Screening (DevOps projects, certifications, internships)',
            'Step 2: Technical Assessment (Linux, CI/CD, Docker, Kubernetes basics, scripting)',
            'Step 3: Technical Interview (DevOps workflows, container orchestration, troubleshooting)',
            'Step 4: HR & Managerial Round (Communication, teamwork, culture-fit)'
        ],
        faqs: [
            { q: 'What is the job ID for this role?', a: 'The Job ID is R-53259-2026.' },
            { q: 'Where is the office located in Bangalore?', a: 'The office is located at Kalyani Platina, Bangalore.' },
            { q: 'Is this role hybrid or remote?', a: 'No, this is an onsite role requiring 5 days work a week in office.' }
        ],
        applyLink: 'https://jobs.harman.com/?utm_source=chatgpt.com'
    },
    {
        id: 'honeywell-se-i-blr-2026',
        title: 'Software Engineer I',
        company: 'Honeywell',
        location: 'Bengaluru, Karnataka',
        type: 'Full-time (Hybrid)',
        salary: 'Competitive Package',
        experience: 'Freshers / Early Career (0–1 Year)',
        postedDate: 'May 23, 2026',
        aboutCompany: 'Honeywell is a multinational technology and manufacturing company known for innovation in Aerospace technologies, Industrial automation, Building automation, Energy transition, and Sustainability solutions. The company develops intelligent, connected, and secure systems that help industries improve operational efficiency, safety, productivity, and sustainability.',
        description: 'Honeywell has officially opened applications for the Honeywell Off Campus Drive 2026 for the role of Software Engineer I at its Bengaluru office. This opportunity is ideal for engineering graduates who want to work on innovative software solutions across automation, aviation, industrial technologies, and energy transition sectors.',
        responsibilities: [
            'Develop and maintain software applications across Honeywell platforms',
            'Enhance existing systems and features',
            'Work with engineering, product, and business teams to deliver scalable and efficient solutions',
            'Design software solutions based on customer requirements and engineering practices',
            'Identify and resolve software issues (debugging in dev and prod environments)',
            'Participate in code reviews and maintain coding standards',
            'Stay updated with emerging technologies, development tools, and modern methodologies',
            'Contribute to an innovative and collaborative engineering culture'
        ],
        skills: [
            'Java', 'Python', 'C#', 'OOP', 'SDLC', 'Software Debugging', 'Data Structures', 'Algorithms'
        ],
        eligibility: [
            'Bachelor’s degree in Computer Science, IT, Electronics, Software Engineering, Mathematics, or related STEM disciplines',
            'Freshers and early-career professionals (0–1 year experience) are eligible',
            'Internship or academic project experience is an advantage'
        ],
        benefits: [
            'Competitive salary package',
            'Health insurance coverage',
            'Learning & development programs',
            'Internal mobility opportunities',
            'Hybrid work flexibility',
            'Global engineering exposure',
            'Employee wellness initiatives'
        ],
        applicationProcess: [
            'Step 1: Online Assessment (Aptitude, coding, software fundamentals)',
            'Step 2: Technical Interview (DSA, Java/Python coding, problem-solving, OOP)',
            'Step 3: Advanced Technical Discussion (Software design concepts, projects, problem-solving)',
            'Step 4: HR & Managerial Interview (Behavioral, teamwork, culture-fit)'
        ],
        faqs: [
            { q: 'What is the location of the office?', a: 'The role is based at Honeywell’s Bengaluru campus situated at RMZ Ecoworld, Bengaluru.' },
            { q: 'Is there a hybrid work option?', a: 'Yes, this role offers hybrid work flexibility.' },
            { q: 'Which batches can apply?', a: 'Graduates from 2024, 2025, and 2026 batches are eligible to apply.' }
        ],
        applyLink: 'https://careers.honeywell.com/?utm_source=chatgpt.com'
    },
    {
        id: 'honeywell-ca-internship-2026',
        title: 'Bachelor’s Intern (CA Industrial Training)',
        company: 'Honeywell',
        location: 'Pune, Maharashtra',
        type: 'Internship (12 Months)',
        salary: '₹20,000 / Month',
        experience: 'Freshers',
        postedDate: 'May 23, 2026',
        aboutCompany: 'Honeywell is a multinational company known for innovation in Automation, Aerospace technologies, Industrial software, Building automation, and Energy solutions. The company develops advanced technologies that help businesses improve efficiency, sustainability, and operational performance. Honeywell’s finance teams play a major role in financial compliance, reporting accuracy, strategic business decision-making, and supporting global operations.',
        description: 'Honeywell has officially opened applications for the Honeywell Internship 2026 Hiring Drive for the role of Bachelor’s Intern – CA Industrial Training (Finance) at its Pune office. This internship is designed for Chartered Accountancy students who are eligible for Industrial Training under ICAI guidelines and want practical exposure in corporate finance and accounting operations.',
        responsibilities: [
            'Post monthly journal entries accurately within timelines',
            'Maintain proper documentation and accounting compliance',
            'Upload Trial Balance into the Hyperion consolidation system',
            'Support group-level financial reporting activities',
            'Assist in monthly closing of books of accounts',
            'Prepare schedules and supporting reports for consolidation',
            'Prepare audit schedules and supporting documents',
            'Coordinate with auditors and resolve audit-related queries',
            'Assist in finance-related data analysis and reporting',
            'Work with multiple teams to support finance operations and process improvements'
        ],
        skills: [
            'Finance', 'Accounting', 'MS Excel', 'Audit Basics', 'Data Analysis', 'Journal Entries', 'Financial Consolidation'
        ],
        eligibility: [
            'Pursuing Chartered Accountancy (CA)',
            'Eligible for Industrial Training under ICAI guidelines',
            'Strong understanding of accounting principles, financial reporting, and journal entries',
            'Good analytical and problem-solving skills',
            'Ability to work effectively in a collaborative environment',
            'Proficiency in MS Excel and financial systems'
        ],
        benefits: [
            '₹20,000 monthly stipend',
            'Exposure to corporate finance operations',
            'Hands-on experience with Hyperion and reporting systems',
            'Mentorship from senior finance professionals',
            'Industry-ready accounting skills',
            'Potential future full-time opportunities based on performance'
        ],
        applicationProcess: [
            'Step 1: Application Screening (Academic background & ICAI eligibility)',
            'Step 2: Technical Interview (Accounting concepts, journal entries, Excel, audit basics)',
            'Step 3: Managerial Interview (Practical accounting scenarios, audit handling, team collaboration)',
            'Step 4: HR Interview (Career goals, availability, stipend & joining)'
        ],
        faqs: [
            { q: 'What is the job ID for this role?', a: 'The Job ID is 149095.' },
            { q: 'Where is the job location?', a: 'The internship is based onsite at Honeywell’s Pune office in Hadapsar Industrial Estate.' },
            { q: 'What is the duration of this industrial training?', a: 'The duration of the training is 12 Months.' }
        ],
        applyLink: 'https://ibqbjb.fa.ocs.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1/job/149095?utm_source=chatgpt.com'
    },
    {
        id: 'honeywell-se-csharp-2026',
        title: 'Software Engineer I',
        company: 'Honeywell',
        location: 'Bengaluru, Karnataka',
        type: 'Full-Time',
        salary: '₹7 – ₹9 LPA',
        experience: 'Freshers / 0–2 Years',
        postedDate: 'May 14, 2026',
        aboutCompany: 'Honeywell is a globally recognized Fortune 100 technology company known for innovation in Aerospace, Industrial Automation, Safety Solutions, Building Technologies, Cloud Platforms, Artificial Intelligence, and Engineering Systems. Honeywell has major development centers across India including Bengaluru, Hyderabad, Pune, Gurgaon, and Madurai.',
        description: 'Honeywell has officially started hiring freshers for the role of Software Engineer I through its latest Off Campus Drive 2026. This is a perfect opportunity for B.E / B.Tech and MCA freshers to build careers in Cloud Computing, Web Development, REST APIs, Enterprise Software, and Backend Engineering.',
        responsibilities: [
            'Develop scalable applications using C# & .NET and build REST APIs using ASP.NET Core',
            'Write SQL Queries, Stored Procedures, and optimize database performance (SQL Server & Azure SQL)',
            'Deploy applications on Azure & AWS and work with CI/CD pipelines',
            'Participate in sprint planning, stand-up meetings, and collaborate with developers & testers',
            'Fix application bugs, improve performance & reliability, and implement monitoring solutions',
            'Connect frontend with backend APIs and support frontend integration',
            'Maintain API documentation and create deployment notes'
        ],
        skills: [
            'C#', '.NET Framework', 'ASP.NET Core', 'REST APIs', 'SQL Server', 'Azure', 'AWS', 'Unit Testing'
        ],
        eligibility: [
            'B.E / B.Tech / MCA graduates in Computer Science, IT, Electronics, Software Engineering',
            'Eligible Batches: 2024, 2025, and 2026',
            'Freshers and candidates with up to 2 years of experience can apply',
            'Strong OOP Concepts, C#, and .NET Framework fundamentals',
            'Knowledge of SQL Queries, Joins, and Database Normalization',
            'Basic understanding of Cloud (Azure/AWS) and Unit Testing Frameworks'
        ],
        benefits: [
            'Expected Salary: ₹7 – ₹9 LPA for Freshers',
            'Health Insurance and Performance Bonuses',
            'Fortune 100 Company Experience and Global Engineering Projects',
            'Strong Learning Culture and Mentorship Programs',
            'Excellent Work-Life Balance and Paid Leaves'
        ],
        applicationProcess: [
            'Step 1: Application Screening based on academics and technical skills',
            'Step 2: Online Assessment (Aptitude, Logical Reasoning, Programming MCQs, Coding)',
            'Step 3: Technical Interview (C#, .NET, Data Structures, SQL, OOP)',
            'Step 4: Advanced Technical Interview (Cloud Computing, REST APIs, Project Discussion, System Design)',
            'Step 5: HR Interview (Communication, Career Goals, Teamwork)'
        ],
        faqs: [
            { q: 'What is the job ID for this role?', a: 'The Job ID is 146102.' },
            { q: 'Which batches are eligible to apply?', a: 'Candidates from 2024, 2025, and 2026 batches can apply.' },
            { q: 'What is the expected salary for this role?', a: 'The expected salary is between ₹7 – ₹9 LPA for freshers.' }
        ],
        applyLink: 'https://careers.honeywell.com/'
    },
    {
        id: 'ey-consulting-support-services-intern-2026',
        title: 'Consulting Support Services Intern',
        company: 'EY Global Delivery Services (GDS)',
        location: 'Kochi, Kerala',
        type: 'Internship',
        salary: 'Competitive Stipend',
        experience: 'Freshers',
        postedDate: 'May 14, 2026',
        aboutCompany: 'EY is one of the world’s largest professional services organizations and a proud member of the Big 4 firms. Operating in 150+ countries with 400,000+ employees globally. EY Global Delivery Services (GDS) works with global EY teams to deliver innovative solutions in Consulting, Assurance, Tax, and Strategy & Transactions.',
        description: 'One of the world’s leading Big 4 companies, EY is hiring fresh B.E/B.Tech graduates for the role of Consulting Support Services Intern (MENA Technology Intern) in Kochi. This is a golden opportunity for freshers who want to build a strong career in Technology Consulting, Cloud Computing, AI, Cyber Security, Data Analytics, and Digital Transformation. Selected candidates will collaborate with experienced consultants and global technology teams on real-world projects.',
        responsibilities: [
            'Work on real-world projects involving Cloud Technologies and Enterprise Applications',
            'Assist in implementing Cybersecurity Solutions and Data Analytics platforms',
            'Contribute to Software Development and Digital Platforms',
            'Collaborate with experienced consultants and global technology teams',
            'Gain exposure to Digital Technologies (Cloud Native, Full Stack, DevSecOps)',
            'Work with Data & Analytics tools (BI, AI, Advanced Analytics)',
            'Learn Enterprise Technology implementations (Oracle, SAP S/4HANA)',
            'Support Software Development, Testing & QA, and Enterprise Application Support'
        ],
        skills: [
            'Java', 'Python', '.NET', 'SQL', 'SDLC', 'Cloud Computing', 'Cyber Security', 'Data Analytics', 'AI'
        ],
        eligibility: [
            'B.E / B.Tech in Information Technology, Computer Science, or Circuit Branches',
            'Freshers are eligible to apply',
            'Minimum 60% and above throughout academics',
            'No Active Backlogs allowed',
            'Good English Communication & Presentation Skills',
            'Understanding of SDLC and basic Database/SQL knowledge',
            'Knowledge of Java / Python / .NET'
        ],
        benefits: [
            'Global Exposure and work with a Big 4 Company',
            'Expert Mentorship and Structured Learning Programs',
            'Work on Modern Enterprise Technologies and International Projects',
            'Pre-Placement Opportunities (PPO) based on performance',
            'Competitive Stipend and Fast Career Growth'
        ],
        applicationProcess: [
            'Step 1: Apply through the official EY career portal with an updated ATS-friendly resume',
            'Step 2: Online Assessment (Aptitude, Technical MCQs, Behavioural Assessment)',
            'Step 3: Technical Interview (Programming, SQL, SDLC, Academic Projects)',
            'Step 4: HR / Partner Interview (Communication, Consulting Mindset, Career Goals)'
        ],
        faqs: [
            { q: 'Which batches are eligible for this internship?', a: 'B.E/B.Tech Freshers from Information Technology, Computer Science, and Circuit Branches are eligible.' },
            { q: 'Is there any academic criteria?', a: 'Yes, candidates must have a minimum of 60% throughout academics with no active backlogs.' },
            { q: 'What is the job location?', a: 'The job location is Kochi, Kerala.' }
        ],
        applyLink: 'https://careers.ey.com/ey'
    },
    {
        id: 'google-silicon-engineer-university-graduate-2026',
        title: 'Silicon Engineer, University Graduate 2026',
        company: 'Google',
        location: 'Bangalore / Hyderabad / Pune, India',
        type: 'Full-Time',
        salary: 'Best in Industry',
        experience: 'University Graduate / Freshers',
        postedDate: 'May 12, 2026',
        aboutCompany: 'Google is one of the world’s leading technology companies, known for innovation in Artificial Intelligence (AI), Cloud Computing, Search Technologies, Advertising Platforms, Software Engineering, and Data & Analytics. Founded by Larry Page and Sergey Brin, Google continues to build products and technologies used by billions of people worldwide.',
        description: 'Google is hiring graduates and freshers for the role of Silicon Engineer. Selected candidates will work on advanced engineering systems, AI-powered products, cloud technologies, troubleshooting, analytics, and automation solutions. This role provides an opportunity to collaborate with global engineering teams and contribute to products used at massive scale.',
        responsibilities: [
            'Support Google’s AI-powered products and advanced engineering systems',
            'Troubleshoot technical issues, analyze root causes, and provide diagnostics',
            'Develop automation tools and scripts to improve operational workflows',
            'Enhance system reliability, performance, and operational efficiency',
            'Analyze technical and business data to create dashboards and reports',
            'Work with Product, Engineering, and Sales teams to improve customer experience',
            'Explain complex technical concepts clearly to non-technical users and partners',
            'Participate in development activities and collaborate with global teams'
        ],
        skills: [
            'Silicon Engineering', 'SQL & Data Analysis', 'Automation & Scripting', 'Cloud Technologies', 'Troubleshooting', 'Web Technologies', 'AI/ML'
        ],
        eligibility: [
            'Bachelor’s or Master’s Degree in Computer Science, Engineering, or related technical domains',
            'University Graduate (Batch 2026) or Freshers with relevant technical knowledge',
            'Basic understanding of Cloud Technologies and Analytics',
            'Strong problem-solving ability and team collaboration mindset',
            'Good communication skills and willingness to learn cutting-edge tech'
        ],
        benefits: [
            'Work with cutting-edge technologies and AI-driven systems at global scale',
            'Competitive salary packages and comprehensive benefits at a world-class leader',
            'Inclusive and flexible work culture with a focus on career growth',
            'Collaborate with world-class engineers and visionary leaders',
            'Opportunity to build products used by billions of people worldwide',
            'Professional mentorship and continuous learning opportunities'
        ],
        applicationProcess: [
            'Step 1: Application via Google Careers Portal with updated resume',
            'Step 2: Technical Screening and Initial Skills Assessment',
            'Step 3: Multi-round Technical Interviews (Coding, Architecture, Diagnostics)',
            'Step 4: Googliness and Leadership Interview Round',
            'Step 5: Final Selection and Offer Negotiation'
        ],
        faqs: [
            { q: 'Which batches can apply?', a: 'Primarily University Graduates of 2026 and recent freshers.' },
            { q: 'Where are the job locations?', a: 'Bangalore, Hyderabad, and Pune.' },
            { q: 'Is there a specific last date?', a: 'There is no fixed date, but it is recommended to apply as early as possible.' }
        ],
        applyLink: 'https://www.google.com/about/careers/applications/jobs/results/131079854375215814-silicon-engineer-university-graduate-2026'
    },
    {
        id: 'hitachi-java-developer-2026',
        title: 'Java Developer',
        company: 'Hitachi Digital Services',
        location: 'Bengaluru, Karnataka, India',
        type: 'Full-Time (Hybrid)',
        salary: 'Competitive',
        experience: 'Experienced Professionals',
        postedDate: 'May 12, 2026',
        aboutCompany: 'Hitachi Digital Services is a global digital transformation and technology solutions company focused on innovation, cloud computing, engineering excellence, and data-driven solutions. The company works across multiple industries to build impactful technologies that improve businesses and society.',
        description: 'Hitachi Digital Services is looking for skilled Java Developers to design, develop, and maintain scalable enterprise applications. Selected candidates will work on modern Java technologies, cloud-based systems, REST APIs, and enterprise-grade software solutions while collaborating with cross-functional engineering teams.',
        responsibilities: [
            'Design and develop Java-based applications with scalable and high-performance solutions',
            'Develop services, RESTful APIs, and enterprise software components',
            'Write clean, maintainable, and optimized code following industry standards',
            'Participate in code reviews and support Agile/Scrum development processes',
            'Troubleshoot technical issues and resolve bugs/performance bottlenecks',
            'Work with cross-functional teams to implement technical solutions effectively',
            'Prepare technical documentation, API specifications, and design notes',
            'Deploy enterprise applications efficiently and maintain software quality'
        ],
        skills: [
            'Java SE/EE', 'Spring Boot', 'Spring MVC', 'Spring Security', 'Microservices', 'RESTful APIs', 'Oracle', 'MySQL', 'PostgreSQL', 'Git', 'Agile'
        ],
        eligibility: [
            'Bachelor’s Degree in Computer Science, Engineering, or related technical fields',
            'Strong understanding of Java and Object-Oriented Programming (OOP)',
            'Knowledge of Design Patterns and Microservices Architecture',
            'Experience with Spring Framework and Database systems (Oracle/MySQL)',
            'Excellent problem-solving and communication skills'
        ],
        benefits: [
            'Work on cutting-edge enterprise technologies and global-scale projects',
            'Opportunity to collaborate with global engineering teams',
            'Exposure to cloud & data engineering and digital transformation projects',
            'Flexible hybrid work environment and inclusive workplace culture',
            'Competitive employee benefits and wellbeing support',
            'Clear career growth and professional learning opportunities'
        ],
        applicationProcess: [
            'Step 1: Online Application via official Hitachi Careers Portal (Workday)',
            'Step 2: Technical Assessment and Coding Challenge',
            'Step 3: Technical Interview (Core Java, Spring, Microservices, System Design)',
            'Step 4: Management/HR Interview and Final Offer Rollout'
        ],
        faqs: [
            { q: 'What is the job ID for this role?', a: 'The job ID is R0126543.' },
            { q: 'Is this a remote or hybrid role?', a: 'This is a hybrid role based in Bengaluru, Karnataka.' },
            { q: 'Which technologies are primarily used?', a: 'Java, Spring Boot, Microservices, and Cloud-based infrastructure.' }
        ],
        applyLink: 'https://hitachi.wd1.myworkdayjobs.com/hitachi/job/Bengaluru-Karnataka-India/Java-65727_R0126543'
    },
    {
        id: 'unisys-internship-2026',
        title: 'Intern / Student Tech',
        company: 'Unisys',
        location: 'Bangalore, Karnataka, India',
        type: 'Internship',
        salary: 'Best in Industry',
        experience: 'Less than 1 Year / Freshers',
        postedDate: 'May 12, 2026',
        aboutCompany: 'Unisys is a leading global technology solutions company specializing in Cloud Computing, Cybersecurity, Digital Workplace Solutions, Enterprise Computing, Networking & Infrastructure, and IT Consulting Services. The company works with top enterprises and government organizations worldwide to deliver innovative digital solutions.',
        description: 'Unisys Internship 2026 is a great opportunity for freshers and students who want to start their career in the IT industry. Selected candidates will work with experienced professionals and gain practical exposure in technical support, software development, data analysis, networking, cloud technologies, and infrastructure management.',
        responsibilities: [
            'Troubleshoot hardware & software issues and resolve network connectivity problems',
            'Assist in system setup, device management, and support users with technical queries',
            'Write basic scripts and code, and assist in testing and debugging',
            'Learn version control systems and participate in development activities',
            'Collect and organize data, create reports, and dashboards using Excel & PowerPoint',
            'Assist in network configuration and monitor system performance',
            'Automate routine technical tasks and assist in CI/CD operations',
            'Support cloud infrastructure management and learn deployment processes'
        ],
        skills: [
            'Technical Support', 'Software Development', 'Data Analysis', 'Networking', 'Cloud Technologies', 'DevSecOps', 'Infrastructure Management', 'Python', 'Excel'
        ],
        eligibility: [
            'Currently pursuing technical/vocational education or high school diploma/GED',
            'Students and Freshers (Batch 2024, 2025, 2026) are eligible',
            'Strong willingness to learn and basic computer knowledge',
            'Basic coding/scripting knowledge is a plus',
            'Good communication skills and teamwork ability'
        ],
        benefits: [
            'Work with experienced IT professionals and world-class mentors',
            'Gain real-world industry exposure and professional corporate culture',
            'Learn modern technologies & workflows (Cloud, DevSecOps, AI)',
            'Improve technical and communication skills',
            'Build a strong career foundation at a global technology leader'
        ],
        applicationProcess: [
            'Step 1: Application via official Unisys Careers Portal (Workday)',
            'Step 2: Technical Screening and Resume Shortlisting',
            'Step 3: Technical Interview and Problem Solving Round',
            'Step 4: HR Discussion and Final Selection'
        ],
        faqs: [
            { q: 'Is this internship remote or onsite?', a: 'This is a full-time onsite internship based in Bangalore.' },
            { q: 'What batches can apply?', a: 'Freshers and students from recent batches (2024, 2025, 2026) are encouraged to apply.' },
            { q: 'What is the duration?', a: 'The duration will be communicated during the interview process.' }
        ],
        applyLink: 'https://unisys.wd5.myworkdayjobs.com/External/job/Bangalore-KA-India/Student-technical_REQ572963'
    },
    {
        id: 'google-software-engineering-intern-masters-2026',
        title: 'Software Engineering Intern, Masters — Summer 2026',
        company: 'Google',
        location: 'Bengaluru / Hyderabad / Pune',
        type: 'Internship / Apprenticeship',
        salary: 'Paid Summer Internship',
        experience: 'Master’s Students (Summer 2026)',
        postedDate: 'May 12, 2026',
        aboutCompany: 'Google’s mission is to organize the world’s information and make it universally accessible and useful. As a Software Engineering Intern at Google, you will work on technologies that impact billions of users globally. Google’s engineering teams work across areas such as AI, Machine Learning, Distributed Systems, Cloud Computing, and advanced software solutions.',
        description: 'Join one of the world’s leading technology companies as a Software Engineering Intern and work on technologies that impact billions of users globally. This internship is designed for Master’s students passionate about solving large-scale engineering challenges, building intelligent systems, and developing next-generation software solutions.',
        responsibilities: [
            'Develop scalable software solutions for Google products',
            'Build and maintain large-scale systems infrastructure',
            'Work on AI-powered applications and engineering systems',
            'Collaborate with cross-functional engineering teams',
            'Analyze technical challenges and deliver effective solutions',
            'Apply computer science fundamentals to real-world problems',
            'Contribute to innovation, productivity, and engineering excellence',
            'Support the continuous evolution of Google’s technical ecosystem'
        ],
        skills: [
            'Java', 'C++', 'Python', 'JavaScript', 'Go', 'Distributed Systems', 'Data Structures', 'Algorithms', 'AI/ML'
        ],
        eligibility: [
            'Currently pursuing a Master’s degree in CS, Software Engineering, AI, IT, or related fields',
            'Strong understanding of at least one programming language (Java, C/C++, Python, JS, Go)',
            'Experience with Data Structures & Algorithms and Software Design Principles',
            'Knowledge of Distributed Systems, Concurrency, and Multi-threading',
            'English proficiency for effective collaboration across international teams',
            'Willingness to relocate to Bengaluru, Hyderabad, or Pune for the internship'
        ],
        benefits: [
            'Paid 12+ week internship (Timeline: May – August 2026)',
            'Work on impactful real-world engineering projects used by billions',
            'Mentorship from industry experts and world-class engineers',
            'Executive speaker sessions and networking opportunities',
            'Exposure to AI-driven technologies and scalable infrastructure',
            'Inclusive and innovation-focused work environment'
        ],
        applicationProcess: [
            'Step 1: Online Application via Google Careers Portal',
            'Step 2: Technical Screening & Assessments (Coding challenges)',
            'Step 3: Technical Interviews (DSA, System Design, Problem Solving)',
            'Step 4: Team Matching and Offer Rollout'
        ],
        faqs: [
            { q: 'What is the duration of this internship?', a: 'The internship lasts for 12+ weeks, typically from May to August 2026.' },
            { q: 'Which locations can I apply for?', a: 'Applicants can indicate their preferred work location from Bengaluru, Hyderabad, and Pune during the application process.' },
            { q: 'Is this a paid internship?', a: 'Yes, this is a paid summer internship at Google.' }
        ],
        applyLink: 'https://www.google.com/about/careers/applications/jobs/results/84757208843068102-software-engineering-intern'
    },
    {
        id: 'lnt-software-engineer-land-systems-2026',
        title: 'Software Engineer – Land Systems',
        company: 'Larsen & Toubro (L&T)',
        location: 'Mumbai, India',
        type: 'Full Time',
        salary: 'Best in Industry',
        experience: '0–2 Years',
        postedDate: 'May 11, 2026',
        aboutCompany: 'Larsen & Toubro (L&T) is one of India’s largest engineering, technology, manufacturing, and construction companies with operations across more than 50 countries. L&T’s Precision Engineering & Systems division develops advanced defence platforms, aerospace technologies, mission-critical software systems, and land defence solutions for strategic sectors and the Indian Armed Forces.',
        description: 'As a Software Engineer – D&DC Land Systems, selected candidates will work on the development of high-performance software systems used in advanced land and defence applications. The role involves Embedded Systems Development, C & C++ Programming, Real-Time Operating Systems, Distributed Systems, and Networking Protocols.',
        responsibilities: [
            'Develop and maintain high-performance applications using C and C++',
            'Design scalable and reliable software modules for defence and land systems',
            'Build and integrate applications on Linux, VxWorks, and QNX platforms',
            'Work on low-level system software and embedded environments',
            'Create debugging and diagnostic tools to resolve software issues',
            'Develop applications using multi-threading and multi-processing concepts',
            'Implement efficient inter-process communication mechanisms',
            'Work on distributed systems and subsystem integration',
            'Collaborate with hardware and networking teams for deployment',
            'Develop validation tools and testing codes for system reliability',
            'Support software testing and root-cause analysis activities',
            'Investigate customer-reported issues and provide timely fixes'
        ],
        skills: [
            'C', 'C++', 'Linux', 'VxWorks', 'QNX', 'Multi-threading', 'Inter-process Communication', 'Networking Protocols', 'Serial Communication', 'MIL-STD-1553', 'CAN', 'NMEA', 'ModBus'
        ],
        eligibility: [
            'B.E / B.Tech in CS, IT, ECE, EEE, or related engineering branches',
            'Batch: 2024, 2025, and 2026 Graduating Students',
            'Experience: 0–2 Years',
            'Strong understanding of C/C++ programming and OS concepts',
            'Knowledge of embedded systems fundamentals',
            'Willingness to work from Mumbai office'
        ],
        benefits: [
            'Industry-standard compensation package and health insurance',
            'Opportunity to work on mission-critical national defence projects',
            'Exposure to large-scale real-time systems and advanced embedded tech',
            'Mentorship from experienced engineering professionals',
            'Contribute to strategic nation-building technologies'
        ],
        applicationProcess: [
            'Step 1: Application Screening (Resume shortlisting)',
            'Step 2: Online Technical Assessment (C/C++, DSA, OS, Aptitude)',
            'Step 3: Technical Interview (Programming, Linux, Embedded, Projects)',
            'Step 4: HR Interview (Career Goals, Communication, Relocation)'
        ],
        faqs: [
            { q: 'What is the job code for this role?', a: 'The job code is LNT/SE-LS/1713751.' },
            { q: 'Is this role remote or onsite?', a: 'This is a full-time onsite role based in Mumbai.' },
            { q: 'Which batches are eligible?', a: 'Graduates from 2024, 2025, and 2026 batches are eligible.' }
        ],
        applyLink: 'https://larsentoubrocareers.peoplestrong.com/job/detail/LNT_SE-LS_1713751'
    },
    {
        id: 'razorpay-systems-engineer-2026',
        title: 'Systems Engineer (Network Specialist)',
        company: 'Razorpay',
        location: 'Bengaluru, India',
        type: 'Full-time (Onsite)',
        salary: 'Highly Competitive',
        experience: 'Hands-on Experience in Network Infrastructure Preferred',
        postedDate: 'May 11, 2026',
        aboutCompany: 'Razorpay is one of India’s leading full-stack financial solutions companies, providing payment solutions, banking infrastructure, payroll services, and financial products for startups, enterprises, and large businesses. Trusted by major brands across India, Razorpay continues to redefine digital payments using innovation, automation, cloud infrastructure, and AI-powered financial technologies.',
        description: 'As a Systems Engineer (Network Specialist), you will be responsible for managing, operating, and supporting Razorpay’s enterprise-grade network infrastructure. The role requires strong expertise in Firewall Management, Routing & Switching, Wireless Networking, and Zero Trust Security Systems.',
        responsibilities: [
            'Configure and maintain Palo Alto Firewalls including VPNs, NAT, policies, and HA setup',
            'Support Cisco Nexus switching environments including VLANs, VPCs, routing, and OS upgrades',
            'Manage Cisco Meraki switches and wireless access points',
            'Handle Zscaler Internet Access (ZIA) and ZTNA policy administration',
            'Monitor network health and troubleshoot connectivity issues',
            'Manage incidents and service requests through ITIL-based ticketing systems',
            'Perform Root Cause Analysis (RCA) for major incidents',
            'Maintain infrastructure documentation, SOPs, and network diagrams',
            'Coordinate with vendors and technology partners for infrastructure improvements'
        ],
        skills: [
            'Palo Alto Firewalls', 'Cisco Nexus', 'Cisco Meraki', 'Zscaler', 'TCP/IP', 'LAN/WAN', 'Routing & Switching', 'VPN & NAT', 'Network Security', 'Cloud Networking'
        ],
        eligibility: [
            'Mandatory hands-on experience with Palo Alto Firewalls',
            'Deep understanding of Cisco Nexus switches and routing concepts',
            'Experience with Cisco Meraki dashboard and wireless optimization',
            'Knowledge of Zscaler and Zero Trust security architecture',
            'Strong understanding of TCP/IP, LAN/WAN, routing, and switching',
            'Certifications like CCNP, PCNSE, or Meraki Certifications preferred',
            'Experience with AWS or Azure cloud networking is a plus'
        ],
        benefits: [
            'Work on enterprise-scale fintech infrastructure used by millions',
            'Manage advanced networking and security technologies (Palo Alto, Zscaler)',
            'High-growth engineering culture with strong ownership and transparency',
            'Competitive salary and extensive career growth opportunities',
            'Exposure to cloud-connected enterprise architecture',
            'Modern technology-driven environment'
        ],
        applicationProcess: [
            'Step 1: Technical Screening (Networking fundamentals and infrastructure knowledge)',
            'Step 2: Networking & Firewall Technical Interview (Routing, Switching, VPN, Security Policies)',
            'Step 3: Architecture & Troubleshooting Discussion (RCA scenarios, optimization strategies)',
            'Step 4: HR / Managerial Round (Communication, Collaboration, Ownership Mindset)',
            'Step 5: Onsite Interview (Final interaction with infrastructure and leadership teams)'
        ],
        faqs: [
            { q: 'Is this role remote or onsite?', a: 'This is a full onsite role based in Bengaluru with a 5-day office work model.' },
            { q: 'What technologies are mainly used?', a: 'Palo Alto, Cisco Nexus, Cisco Meraki, Zscaler, LAN/WAN, Routing & Switching technologies.' },
            { q: 'Who can apply?', a: 'Candidates with strong networking and infrastructure experience can apply.' }
        ],
        applyLink: 'https://razorpay.com/careers/'
    },
    {
        id: 'cisco-software-automation-trainee-2026',
        title: 'Software Automation Trainee',
        company: 'Cisco Systems',
        location: 'Bangalore, India',
        type: 'Full-time (Apprenticeship)',
        salary: 'Best in Industry',
        experience: 'Freshers Eligible',
        postedDate: 'May 11, 2026',
        aboutCompany: 'Cisco Systems is a globally recognized technology company headquartered in San Jose, California, known for its innovations in networking, cloud computing, cybersecurity, automation, and collaboration technologies. Cisco operates one of its largest engineering and development centres in Bangalore, India, where it actively hires and trains fresh graduates through internship and apprenticeship programs. The company focuses heavily on AI-driven networking, automation, cloud platforms, and DevOps technologies, making it one of the best career launch platforms for engineering freshers.',
        description: 'As a Software Automation Trainee – Technical Graduate Apprentice, candidates will work on automation-related projects that improve productivity and operational efficiency within Cisco engineering teams. This 12-month structured apprenticeship under the National Apprenticeship Training Scheme (NATS) provides exposure to Python scripting, REST API automation, networking fundamentals, cloud technologies, and DevOps practices.',
        responsibilities: [
            'Develop Python-based automation scripts for internal engineering tasks',
            'Reduce manual effort through workflow automation',
            'Work with REST APIs for automation, monitoring, and reporting tasks',
            'Integrate automation workflows with Cisco platforms',
            'Learn networking concepts involving routers, switches, and network labs',
            'Understand Cisco infrastructure and testing environments',
            'Gain practical exposure to cloud platforms and CI/CD pipelines',
            'Learn secure coding practices and DevOps methodologies',
            'Participate in sprint planning, Agile ceremonies, and code reviews',
            'Collaborate with cross-functional engineering teams',
            'Learn introductory AI/ML concepts used in Cisco engineering use cases',
            'Maintain project documentation and automation runbooks'
        ],
        skills: [
            'Python', 'REST APIs', 'Networking Fundamentals', 'Cloud Technologies', 'DevOps', 'Agile', 'AI/ML Basics', 'Automation'
        ],
        eligibility: [
            'B.E / B.Tech / B.Sc / BCA / Diploma in CS, IT, EEE, Networking, or related fields',
            'Batch: 2025 or 2026 Graduating Students',
            'Degree Certificate or Provisional Degree Certificate (PDC) required for joining',
            'Mandatory enrolment on official NATS portal with valid ID',
            'Basic understanding of programming and software development',
            'Familiarity with Python or scripting concepts',
            'Understanding of REST APIs and automation basics',
            'Good communication skills in English'
        ],
        benefits: [
            '12-month structured training program with industry-level exposure',
            'Mentorship from senior Cisco engineers',
            'Access to premium learning platforms and technical resources',
            'Food and transportation facilities at the Bangalore campus',
            'Opportunity for full-time conversion based on performance',
            'Exposure to AI-driven networking and cloud platforms'
        ],
        applicationProcess: [
            'Step 1: Application Screening (Eligibility & NATS enrolment check)',
            'Step 2: Online Test (Aptitude, Programming Logic, Python & Scripting)',
            'Step 3: Technical Interview (Python, REST APIs, Networking, Projects)',
            'Step 4: HR Interview (Communication, Learning Attitude, Career Goals)'
        ],
        faqs: [
            { q: 'Is this a full-time job or an internship?', a: 'This is a 12-month structured apprenticeship program under NATS with potential for full-time conversion.' },
            { q: 'What are the location requirements?', a: 'This is an onsite role based at Cisco\'s Bangalore campus.' },
            { q: 'What is the NATS requirement?', a: 'Applicants must have a valid student enrolment number from the official NATS portal.' }
        ],
        applyLink: 'https://careers.cisco.com/global/en/job/CISCISGLOBAL2016168EXTERNALENGLOBAL/Software-Engineer-India-Engineering-UHR-FY27-Code-with-Cisco'
    },
        {
            id: 'cisco-recruitment-2026',
            title: 'Software Engineer',
            company: 'Cisco',
            location: 'Bangalore (Hybrid)',
            type: 'Full-Time',
            salary: 'Competitive Salary (As per Company Standards)',
            experience: 'Freshers',
            postedDate: 'May 30, 2026',
            aboutCompany: 'Cisco is a global technology company known for its innovations in networking, cybersecurity, cloud, and enterprise solutions.',
            description: 'Cisco is inviting applications from students graduating in 2027 for the position of Software Engineer through its Code with Cisco – University Hiring (UHR FY27) program. This opportunity is designed for engineering and master\'s students who want to begin their careers in software engineering while working on networking, cloud, security, and enterprise technologies.',
            responsibilities: [
                'Develop software solutions for networking and cloud platforms',
                'Collaborate with cross-functional engineering teams',
                'Participate in code reviews and Agile ceremonies',
                'Contribute to AI-driven networking projects',
                'Write clean, maintainable code following best practices'
            ],
            skills: [
                'Java', 'Python', 'C++', 'Data Structures', 'Algorithms', 'Problem Solving', 'Object-Oriented Programming'
            ],
            eligibility: [
                "Bachelor's or Master's Degree in Computer Science, IT, or related fields",
                'Graduating batch 2027',
                'Strong academic record and passion for technology'
            ],
            benefits: [
                'Competitive Salary',
                'Hybrid work model',
                'Mentorship from senior engineers',
                'Access to learning resources and certifications',
                'Opportunity for growth within Cisco'
            ],
            applicationProcess: [
                'Step 1: Update your resume with academic details, technical skills, projects, internships, and certifications.',
                'Step 2: Visit the official Cisco Careers portal.',
                'Step 3: Search using Job ID or filter by Code with Cisco program.',
                'Step 4: Complete the application form and upload your resume.',
                'Step 5: Submit and save reference number for tracking.'
            ],
            faqs: [
                { q: 'Is this role suitable for freshers?', a: 'Yes. Freshers from eligible batches can apply.' },
                { q: 'Can Diploma students apply?', a: 'Yes, eligible Diploma candidates can apply if they meet the criteria.' },
                { q: 'Is this a hybrid role?', a: 'The role follows a hybrid work model in Bangalore.' }
            ],
            applyLink: 'https://careers.cisco.com/global/en/job/CISCISGLOBAL2016168EXTERNALENGLOBAL/Software-Engineer-India-Engineering-UHR-FY27-Code-with-Cisco'
        },
        {
        id: 'barclays-software-engineer-2026',
        title: 'Software Engineer',
        company: 'Barclays',
        location: 'Pune, Maharashtra',
        type: 'Full-time (Hybrid)',
        salary: 'Highly Competitive + Enterprise Benefits',
        experience: 'Java Spring Boot & Cloud Experience Preferred',
        postedDate: 'May 11, 2026',
        aboutCompany: 'Barclays is one of the world’s leading financial institutions, serving millions of customers globally across banking, payments, investments, and financial technology. Barclays Technology powers enterprise-scale digital platforms, cloud-native banking systems, AI-driven solutions, and secure financial infrastructure.',
        description: 'As a Software Engineer at Barclays, you will contribute to building and transforming large-scale digital banking platforms within the Mortgages and Financial Technology domain. The role focuses on developing scalable backend services, cloud-native applications, and enterprise-grade microservices using Java and Spring Boot technologies.',
        responsibilities: [
            'Design and develop scalable backend services using Java and Spring Boot',
            'Build enterprise-grade RESTful APIs and cloud-native microservices',
            'Work with Spring MVC, Spring Data JPA, Spring Security, and Spring Cloud',
            'Develop resilient distributed systems with fault tolerance and observability',
            'Integrate applications with AWS services such as Lambda, ECS/EKS, EC2, S3, SQS, SNS, and EventBridge',
            'Collaborate with product managers, architects, and engineering teams',
            'Participate in code reviews and maintain clean coding standards',
            'Implement secure coding practices and API security standards',
            'Work on CI/CD pipelines and DevOps workflows',
            'Perform debugging, performance optimization, and root cause analysis',
            'Contribute to Agile/Scrum software development cycles',
            'Ensure scalability, maintainability, and reliability of enterprise applications'
        ],
        skills: [
            'Java', 'Spring Boot', 'Microservices', 'REST APIs', 'AWS Cloud', 'PostgreSQL / MySQL', 'Git & Version Control', 'CI/CD', 'Distributed Systems', 'Agile/Scrum', 'API Security', 'Debugging & Performance Tuning'
        ],
        eligibility: [
            'Bachelor’s Degree in Computer Science, IT, Electronics, or related fields',
            'Strong hands-on experience with Java and Spring Boot',
            'Understanding of Microservices Architecture and REST API development',
            'Knowledge of AWS cloud platforms and cloud-native development',
            'Familiarity with relational and NoSQL databases',
            'Understanding of Git and collaborative development workflows',
            'Strong analytical thinking and problem-solving skills',
            'Knowledge of Agile development methodologies preferred',
            'Understanding of secure application development and testing practices'
        ],
        benefits: [
            'Opportunity to work on global-scale banking technology platforms',
            'Exposure to modern cloud-native architecture and enterprise systems',
            'Hybrid working environment with advanced technology infrastructure',
            'Excellent career growth and mentorship opportunities',
            'Competitive compensation and employee benefits',
            'Experience with scalable distributed systems used by millions worldwide',
            'Learning opportunities in AI, FinTech, and cloud engineering'
        ],
        applicationProcess: [
            'Step 1: Online Assessment (Java, Spring Boot, APIs, Problem Solving, and Logical Reasoning)',
            'Step 2: Technical Screening (Backend Development, OOPs, Microservices, and Database Concepts)',
            'Step 3: Coding Round (Java Coding, API Design, Debugging, and Data Structures)',
            'Step 4: Technical Interviews (Spring Boot, Cloud Services, Distributed Systems, and Architecture)',
            'Step 5: HR Interview (Communication, Team Collaboration, Career Goals, and Culture Fit)'
        ],
        faqs: [
            { q: 'Is this role remote or on-site?', a: 'This role follows a hybrid working model based at the Barclays Pune campus.' },
            { q: 'What technologies are mainly used?', a: 'Java, Spring Boot, AWS Cloud, REST APIs, Microservices, PostgreSQL, CI/CD, and Distributed Systems.' },
            { q: 'Which batches are eligible?', a: 'Recent graduates and experienced candidates with relevant backend development skills can apply.' }
        ],
        applyLink: 'https://search.jobs.barclays/job/pune/software-engineer/13015/94766714240'
    },
    {
        id: 'hpe-platform-testing-2026',
        title: 'Software Engineer – Platform Testing',
        company: 'HPE',
        location: 'Bengaluru, Karnataka',
        type: 'Full-time (On-site)',
        salary: 'Highly Competitive',
        experience: 'Networking & Automation Experience Preferred',
        postedDate: 'May 10, 2026',
        aboutCompany: 'Hewlett Packard Enterprise (HPE) is a globally recognized edge-to-cloud technology company that helps businesses connect, protect, analyze, and manage applications and data. HPE is a leader in cloud computing, enterprise networking, AI, and cybersecurity, building products used by organizations worldwide.',
        description: 'As a Software Engineer – Platform Testing, you will work on validating advanced networking switch platforms and enterprise networking systems. The role focuses on networking technologies, Python automation, and PoE (Power over Ethernet) validation to ensure platform stability and performance.',
        responsibilities: [
            'Perform functional, regression, interoperability, and reliability testing on switch platforms',
            'Conduct PoE compliance testing using IEEE 802.3af/at/bt standards',
            'Validate copper ports, fiber interfaces, and high-speed network ports (1G to 100G)',
            'Test features like VLAN, LACP, MTU, Auto-Negotiation, and Link Recovery',
            'Build Python-based automation frameworks and develop automated test scripts',
            'Integrate automation suites into CI/CD pipelines for continuous testing',
            'Perform debugging and root cause analysis using logs and packet captures (Wireshark)',
            'Collaborate with hardware, firmware, and platform development teams'
        ],
        skills: [
            'Networking Fundamentals (L2/L3)', 'Python Scripting', 'PoE Standards', 'Ethernet Switching', 'CI/CD', 'Wireshark', 'Ixia/Spirent'
        ],
        eligibility: [
            'Bachelor’s Degree in Electronics, CS, Telecommunications, IT, or related fields',
            'Strong understanding of Layer 2/Layer 3 networking and Ethernet switching',
            'Strong Python scripting knowledge and experience in automation development',
            'Familiarity with PoE budget allocation and power negotiation standards',
            'Analytical thinking and problem-solving mindset for complex system debugging'
        ],
        benefits: [
            'Work on global enterprise-grade networking and infrastructure technologies',
            'Hands-on experience with high-speed interface testing and automation',
            'Exposure to CI/CD pipelines and DevOps workflows in an innovative culture',
            'Excellent career growth, technical upskilling, and mentorship opportunities'
        ],
        applicationProcess: [
            'Step 1: Online Technical Assessment (Networking, Python, Logic)',
            'Step 2: Networking Fundamentals Round (VLAN, Switching, Routing)',
            'Step 3: Python Coding Test (Scripting, Automation, Debugging)',
            'Step 4: Technical Interviews (PoE, Testing Methodologies, RCA)',
            'Step 5: HR Interview (Communication, Career Goals, Culture Fit)'
        ],
        faqs: [
            { q: 'Is this role remote or on-site?', a: 'The role is an on-site position based in HPE\'s Bengaluru office.' },
            { q: 'What specific networking experience is needed?', a: 'Experience in validating switch platforms and using tools like Ixia/Spirent is preferred.' },
            { q: 'Which batches are eligible?', a: 'Candidates with a Bachelor’s degree in relevant engineering fields can apply.' }
        ],
        applyLink: 'https://careers.hpe.com/'
    },
    {
        id: 'hcltech-engineer-2026',
        title: 'Software Engineer / Developer',
        company: 'HCLTech',
        location: 'PAN India (Multiple Locations)',
        type: 'Full-time',
        salary: 'Industry Standard',
        experience: 'Freshers',
        postedDate: 'May 10, 2026',
        aboutCompany: 'HCLTech is one of India’s leading multinational technology companies, specializing in IT services, cloud computing, cybersecurity, and digital transformation. Founded in 1976 by Shiv Nadar, HCLTech operates globally and serves major industries such as Banking, Healthcare, Manufacturing, and Telecommunications.',
        description: 'The Software Engineer / Developer role at HCLTech offers freshers an opportunity to work on cloud technologies, infrastructure automation, and DevOps tools. Candidates will contribute to enterprise-level technology projects and gain hands-on experience with modern automation platforms like BigFix, Ansible, and Puppet.',
        responsibilities: [
            'Design solutions to resolve customer business challenges and technical bottlenecks',
            'Build automation solutions for infrastructure operations to reduce manual workload',
            'Manage and facilitate complex Proof of Concepts (POCs) for technical validation',
            'Customize BigFix deployments to build scalable and highly available infrastructure',
            'Work with compliance and security tools for vulnerability management and server hardening',
            'Implement DevOps practices using tools like Puppet, Chef, and Ansible',
            'Maintain configuration documentation and create reports for infrastructure changes'
        ],
        skills: [
            'Infrastructure Management', 'DevOps', 'Ansible', 'Puppet/Chef', 'Windows/Linux Patch Management', 'System Administration'
        ],
        eligibility: [
            'Bachelor’s or Master’s Degree in a technical field',
            'Freshers or early career professionals with a strong learning attitude',
            'Basic understanding of infrastructure operations and system administration',
            'Familiarity with DevOps tools and security compliance is a plus',
            'Strong problem-solving and communication skills'
        ],
        benefits: [
            'Global exposure by working with one of the top IT companies',
            'Hands-on experience with enterprise-level infrastructure and cloud automation',
            'Access to internal learning programs, certifications, and mentorship',
            'Competitive compensation and structured career growth paths'
        ],
        applicationProcess: [
            'Step 1: Application Screening (Resume & Skills evaluation)',
            'Step 2: Technical Assessment (Programming, Infrastructure, Logical Reasoning)',
            'Step 3: Technical Interview (Problem Solving, DevOps, Project Discussion)',
            'Step 4: HR Interview (Communication, Career Goals, Location Flexibility)'
        ],
        faqs: [
            { q: 'What is the location for this role?', a: 'This is a PAN India hiring drive with placements in Bangalore, Chennai, Hyderabad, Pune, and Noida.' },
            { q: 'Can Master’s degree holders apply?', a: 'Yes, both Bachelor’s and Master’s degree holders are eligible.' },
            { q: 'Is there a specific batch mentioned?', a: 'The listing focuses on freshers and doesn\'t specify a single batch, making it open to recent graduates.' }
        ],
        applyLink: 'https://www.hcltech.com/careers'
    },
    {
        id: 'cgi-apprentice-2026',
        title: 'Apprentice – Java & Python Development',
        company: 'CGI',
        location: 'Bangalore, Karnataka',
        type: 'Full-time (Apprentice Program)',
        salary: 'Industry Standard',
        experience: 'Freshers / Entry Level',
        postedDate: 'May 10, 2026',
        aboutCompany: 'CGI is one of the world’s largest independent IT and business consulting services companies. Founded in 1976, CGI operates in 40+ countries with over 91,000 professionals. The company follows a unique employee ownership culture where employees are known as "CGI Partners," serving industries like Banking, Healthcare, and Government.',
        description: 'The CGI Apprentice Program 2026 is designed for fresh graduates starting their careers in Java, Python, and Enterprise Applications. Selected candidates receive structured training, mentorship, and practical exposure to real-world software development and ERP solutions.',
        responsibilities: [
            'Develop core Java and Python-based utilities and backend components',
            'Assist in debugging, application maintenance, and performance improvements',
            'Participate in requirement gathering and document business/technical specifications',
            'Learn enterprise software systems, workflows, and ERP concepts',
            'Coordinate with project teams, managers, and global clients effectively',
            'Maintain technical documentation, process reports, and configuration details',
            'Stay updated with emerging technologies and industry development frameworks'
        ],
        skills: [
            'Java', 'Python', 'OOP Concepts', 'DBMS', 'ERP Knowledge', 'Analytical Thinking', 'Problem Solving'
        ],
        eligibility: [
            'B.E / B.Tech in Computer Science, IT, or related engineering branches',
            'Batch: 2024, 2025, and 2026 Graduating Batches',
            'Good academic record with no active backlogs preferred',
            'Basic understanding of Java, Python, and software development concepts',
            'Willingness to work in shifts and collaborate with global teams'
        ],
        benefits: [
            'Industry-standard compensation and health insurance',
            'Access to CGI Academy for continuous learning and development',
            'Employee Share Ownership Plan (ESOP) and unique partner culture',
            'Mentorship from experienced IT consulting professionals',
            'Career growth opportunities in enterprise-level technologies'
        ],
        applicationProcess: [
            'Step 1: Application Screening & Resume Shortlisting (Academics, Skills)',
            'Step 2: Technical Assessment (Aptitude, Java/Python Basics, Programming)',
            'Step 3: HR Interview (Communication, Teamwork, Shift Flexibility)'
        ],
        faqs: [
            { q: 'Is this only for the 2026 batch?', a: 'No, graduates from 2024, 2025, and 2026 batches are eligible to apply.' },
            { q: 'What is the work location?', a: 'The role is based in Bangalore, Karnataka.' },
            { q: 'What is the "CGI Partner" culture?', a: 'CGI employees are called partners because of the company\'s employee ownership and share participation culture.' }
        ],
        applyLink: 'https://www.cgi.com/en/careers'
    },
    {
        id: 'salesforce-amts-2026',
        title: 'Software Engineering AMTS',
        company: 'Salesforce',
        location: 'Bengaluru, Hyderabad',
        type: 'Full-time (Futureforce Program)',
        salary: 'Highly Competitive Package',
        experience: 'Freshers',
        postedDate: 'May 10, 2026',
        aboutCompany: 'Salesforce is the world’s leading AI-powered CRM and cloud computing company. Founded in 1999, Salesforce has revolutionized enterprise software through cloud-based solutions across Marketing, Service, and Data clouds. Consistently ranked among the best workplaces globally, Salesforce empowers over 70,000 professionals.',
        description: 'As a Software Engineering AMTS (Associate Member of Technical Staff), you will join Salesforce’s prestigious Futureforce University Recruiting Program. You will work on large-scale cloud products and AI-driven enterprise solutions like Einstein AI, Agentforce, and Data Cloud.',
        responsibilities: [
            'Design, develop, test, and deploy scalable cloud applications',
            'Write clean, production-ready code for enterprise-level systems',
            'Collaborate with Product Managers, Designers, and QA teams in Agile cycles',
            'Develop unit tests and improve automated testing frameworks',
            'Analyze system bottlenecks and improve platform scalability and stability',
            'Participate in internal hackathons and AI/Cloud technology initiatives',
            'Contribute to production-level systems used by millions of users globally'
        ],
        skills: [
            'Java', 'Python', 'JavaScript', 'C++', 'Data Structures', 'Algorithms', 'Cloud Computing'
        ],
        eligibility: [
            'B.E / B.Tech in CS, Electrical, Electronics, or equivalent with CS specialization',
            'Batch: 2026 Graduating Students Only',
            'Academic: Minimum 7.5 CGPA with no active backlogs',
            'Strong problem-solving ability and programming fundamentals',
            'Deep understanding of OOP, DBMS, OS, and Computer Networks'
        ],
        benefits: [
            'Work for the global leader in AI-powered CRM and Cloud',
            'Highly competitive fresher compensation and stock purchase plans',
            'Hybrid work flexibility and employee wellness programs',
            'Access to Trailhead learning platform and mentorship from world-class engineers'
        ],
        applicationProcess: [
            'Step 1: Online Application & Shortlisting (CGPA, Resume, Projects)',
            'Step 2: Online Coding Assessment (DSA, Debugging, Logic)',
            'Step 3: Technical Interview Rounds (DSA, OOP, DBMS, OS, Cloud Concepts)',
            'Step 4: HR Interview (Career Goals, Teamwork, Culture Fit)'
        ],
        faqs: [
            { q: 'What is the CGPA requirement?', a: 'Candidates must have a minimum of 7.5 CGPA and no active backlogs.' },
            { q: 'Which locations are available?', a: 'The role is available in Bengaluru and Hyderabad.' },
            { q: 'Is this only for the 2026 batch?', a: 'Yes, this drive is specifically for students graduating in 2026.' }
        ],
        applyLink: 'https://www.salesforce.com/company/careers/'
    },
    {
        id: 'siemens-healthineers-intern-2026',
        title: 'Technical Intern',
        company: 'Siemens Healthineers',
        location: 'Bangalore, Karnataka',
        type: 'Internship (Onsite)',
        salary: 'Competitive Stipend',
        experience: 'Freshers / Students',
        postedDate: 'May 10, 2026',
        aboutCompany: 'Siemens Healthineers is a world-leading healthcare technology company focused on transforming healthcare through medical technology, digital health solutions, and AI-powered systems. They collaborate with healthcare professionals globally to improve patient care and drive medical innovation.',
        description: 'This internship is an excellent opportunity for students and freshers to gain hands-on experience in software development, testing, and debugging within the healthcare technology sector. Interns will collaborate with experienced engineers on real-world projects.',
        responsibilities: [
            'Assist in designing, developing, and testing software components',
            'Contribute to feature implementation under the guidance of senior engineers',
            'Write clean, maintainable, and structured code following development standards',
            'Support software validation, verification activities, and testing processes',
            'Document new features, bug fixes, and technical workflows',
            'Analyze defects and system logs to identify root causes and assist in resolution',
            'Work with version control systems and participate in technical code reviews'
        ],
        skills: [
            'C#', 'C++', 'Java', 'Python', 'SDLC', 'Debugging', 'Version Control'
        ],
        eligibility: [
            'Pursuing or recently completed B.E / B.Tech / BSc in CS, IT, or related fields',
            'Batch: 2025 or 2026 Graduates',
            'Basic knowledge of programming languages (C#, C++, Java, or Python)',
            'Understanding of SDLC and software debugging concepts',
            'Strong willingness to learn and work in a collaborative office environment'
        ],
        benefits: [
            'Work with a global leader in healthcare technology',
            'Gain practical exposure to software engineering and healthcare tech',
            'Mentorship from experienced software engineers and technical teams',
            'Build a strong foundation in coding, debugging, and professional practices'
        ],
        applicationProcess: [
            'Step 1: Application Screening (Profile review)',
            'Step 2: Technical Assessment (Programming, Logic, SDLC)',
            'Step 3: Interview Rounds (Technical + HR Discussion)',
            'Step 4: Final Selection'
        ],
        faqs: [
            { q: 'Is this a remote internship?', a: 'No, this is an onsite role based in Bangalore (5 days a week).' },
            { q: 'Who is eligible to apply?', a: 'Engineering students (B.E/B.Tech) and BSc graduates from 2025/2026 batches.' },
            { q: 'What programming languages are preferred?', a: 'Familiarity with C#, C++, Java, or Python is expected.' }
        ],
        applyLink: 'https://www.siemens-healthineers.com/careers'
    },
    {
        id: 'qualcomm-engineer-2026',
        title: 'Engineer – Software (Campus Hire)',
        company: 'Qualcomm',
        location: 'Hyderabad, Bangalore, Chennai, Noida',
        type: 'Full-time',
        salary: 'Highly Competitive Package',
        experience: 'Freshers',
        postedDate: 'May 10, 2026',
        aboutCompany: 'Qualcomm is one of the world’s leading semiconductor and wireless communication companies, powering billions of smart devices globally. The company is at the forefront of 5G, Artificial Intelligence, Mobile Processors, and IoT technologies, driving the next generation of connected ecosystems.',
        description: 'As part of the Qualcomm Campus Hiring Program 2026, selected candidates will work on software systems powering advanced Qualcomm chipsets and embedded platforms. This role offers exposure to embedded software development, wireless communication, Linux kernel, and AI edge computing.',
        responsibilities: [
            'Develop and optimize embedded software, firmware, and device drivers',
            'Work on mobile platforms including Android, Linux, and Windows-based systems',
            'Implement and optimize wireless communication protocols (4G, 5G, WiFi, Bluetooth)',
            'Improve system performance and stability for board support packages (BSP)',
            'Develop multimedia frameworks for audio, video, and image processing',
            'Debug complex system-level issues and participate in architectural reviews',
            'Contribute to emerging technologies like IoT, Robotics, AR/VR, and AI Edge Computing'
        ],
        skills: [
            'C', 'C++', 'Data Structures', 'Algorithms', 'Operating Systems', 'Linux', 'Embedded Systems'
        ],
        eligibility: [
            'B.E / B.Tech / M.E / M.Tech in CSE, ECE, or related technical fields',
            'Batch: 2026 Graduating Students',
            'Strong knowledge of C and C++ programming',
            'Understanding of OOP, OS concepts, and Linux/Unix environments',
            'Deep interest in wireless communication and embedded systems'
        ],
        benefits: [
            'Work on global technologies used by billions of devices',
            'Exposure to cutting-edge 5G, AI, and IoT innovation',
            'Collaborative engineering culture with world-class mentors',
            'Attractive compensation and comprehensive employee benefits'
        ],
        applicationProcess: [
            'Step 1: Online Assessment (C, DSA, OS, Aptitude, Problem Solving)',
            'Step 2: Technical Interviews (Embedded, Wireless, OS, Coding)',
            'Step 3: HR Interview (Career Goals, Teamwork, Relocation)'
        ],
        faqs: [
            { q: 'What is the job ID for this role?', a: 'The Job ID is 3078321.' },
            { q: 'Which locations are available?', a: 'Positions are available in Hyderabad, Bangalore, Chennai, and Noida.' },
            { q: 'Is it only for the 2026 batch?', a: 'Yes, this campus hiring program is specifically for the 2026 graduating batch.' }
        ],
        applyLink: 'https://qualcomm.wd5.myworkdayjobs.com/QualcommExternalCareerSite'
    },
    {
        id: 'zycus-ai-intern-2026',
        title: 'AI Engineer Intern',
        company: 'Zycus',
        location: 'Bangalore, Karnataka',
        type: 'Internship',
        salary: 'Competitive Stipend',
        experience: 'Freshers / 0–1 Year',
        postedDate: 'May 10, 2026',
        aboutCompany: 'Zycus is a globally recognized leader in Source-to-Pay Procurement Software Solutions. The company leverages Artificial Intelligence (AI), Machine Learning (ML), and Cloud-based SaaS solutions to help enterprises optimize procurement operations. Recognized by Gartner for innovation, Zycus is at the forefront of the cognitive procurement revolution.',
        description: 'This internship is perfect for candidates passionate about Generative AI (Gen-AI), Agentic AI, and Workflow Automation. Interns will work on real-world projects involving AI Chatbots, intelligent dashboards, and automation systems used by global enterprises.',
        responsibilities: [
            'Identify workflow inefficiencies and suggest AI-based automation solutions',
            'Build and test AI prototypes using Python and automation frameworks',
            'Experiment with Generative AI and Agentic AI applications',
            'Collaborate with international stakeholders to validate AI use cases',
            'Analyze user feedback and usage metrics to optimize AI solution performance',
            'Create technical documentation, prompt libraries, and AI reports',
            'Participate in technical discussions and internal learning sessions'
        ],
        skills: [
            'Python', 'Generative AI', 'LangChain', 'APIs', 'JSON', 'LlamaIndex', 'Prompt Engineering'
        ],
        eligibility: [
            'B.E / B.Tech / BSc in CS, IT, Data Science, or AI/ML related fields',
            'Batch: 2025 or 2026 Graduates',
            'Knowledge of Python programming and basic AI/ML fundamentals',
            'Familiarity with APIs and Data Processing (JSON)',
            'Preference for candidates with AI-based GitHub projects or hackathon experience'
        ],
        benefits: [
            'Hands-on experience with Gen-AI and Agentic AI systems',
            'Work at a globally recognized AI-driven SaaS company',
            'Collaboration with international teams and experienced professionals',
            'Real-world exposure to enterprise-scale AI workflows'
        ],
        applicationProcess: [
            'Step 1: Resume Shortlisting (Initial profile screening)',
            'Step 2: Technical Assessment (Python, AI Fundamentals, Problem Solving)',
            'Step 3: Technical Interview (AI Concepts, Projects, Automation Tools)',
            'Step 4: HR Discussion (Final communication and cultural fit)'
        ],
        faqs: [
            { q: 'Is this role onsite or remote?', a: 'The internship is based onsite in Bangalore.' },
            { q: 'Can freshers apply?', a: 'Yes, freshers and final-year students are highly encouraged to apply.' },
            { q: 'What is the bonus preference criteria?', a: 'Candidates with AI-based GitHub projects or hackathon participation get extra preference.' }
        ],
        applyLink: 'https://zycus.com/careers'
    },
    {
        id: 'rolls-royce-intern-2026',
        title: 'Intern – Software Testing',
        company: 'Rolls-Royce',
        location: 'Pune, Maharashtra',
        type: 'Internship (6 Months)',
        salary: 'Competitive Stipend',
        experience: 'Freshers Eligible',
        postedDate: 'May 10, 2026',
        aboutCompany: 'Rolls-Royce is one of the world’s leading engineering companies, known for developing advanced technologies in Aerospace, Marine Systems, Rail Solutions, and Energy & Power Systems. The Pune Engineering Center works on cutting-edge technologies like Software-in-the-Loop (SIL), Hardware-in-the-Loop (HIL), and Embedded Systems Validation.',
        description: 'This internship is designed for students and fresh graduates interested in Embedded Systems, Software Testing, and Industrial Automation. Selected interns will work on real-world engineering projects involving advanced energy systems and embedded software validation for global platforms.',
        responsibilities: [
            'Work in Software-in-the-Loop (SIL) and Hardware-in-the-Loop (HIL) environments',
            'Assist in embedded systems testing activities and validate engine management software',
            'Test industrial communication protocols such as CAN, LIN, Ethernet, and XCP',
            'Design and implement automated testing scripts using Python',
            'Setup and maintain ECU diagnostic test benches for system-level debugging',
            'Conduct trend analysis and suggest testing process improvements',
            'Work on marine, rail, and battery energy storage systems (BESS) projects'
        ],
        skills: [
            'Embedded Systems', 'Software Testing', 'Python', 'CAN/LIN', 'Ethernet/XCP', 'ECU Diagnostics', 'Automation'
        ],
        eligibility: [
            'B.E / B.Tech in Electronics, Embedded Systems, or Software Engineering',
            'Batch: 2026 Graduates (or Freshers)',
            'Strong understanding of Electronic Engineering fundamentals',
            'Familiarity with communication protocols like CAN, LIN, and XCP',
            'Good analytical and problem-solving skills'
        ],
        benefits: [
            'Hands-on experience with SIL/HIL Testing',
            'Exposure to Global Engineering Projects (Aerospace, Marine, Energy)',
            'Mentorship from industry experts at Rolls-Royce',
            'Opportunity to work with cutting-edge Embedded technologies'
        ],
        applicationProcess: [
            'Step 1: Application Screening (Resume shortlisting)',
            'Step 2: Technical Assessment (Embedded, Electronics, Protocols)',
            'Step 3: Interview Round (Technical + HR Discussion)',
            'Step 4: Final Selection and Offer Rollout'
        ],
        faqs: [
            { q: 'Is this role only for Pune?', a: 'Yes, the internship is based at the Rolls-Royce Pune Engineering Center.' },
            { q: 'What is the duration of the internship?', a: 'The internship duration is 6 months.' },
            { q: 'Which batches are eligible?', a: 'B.E/B.Tech students from the 2026 batch and recent freshers are eligible.' }
        ],
        applyLink: 'https://careers.rolls-royce.com/'
    },
    {
        id: 'cloudflare-intern-2026',
        title: 'Software Engineer Intern',
        company: 'Cloudflare',
        location: 'Bengaluru, Karnataka (In-office)',
        type: 'Internship (12–16 Weeks)',
        salary: 'Competitive Stipend',
        experience: 'Freshers / Interns',
        postedDate: 'May 5, 2026',
        aboutCompany: 'Cloudflare is one of the world’s leading internet infrastructure and cybersecurity companies. It operates a massive global network providing DDoS protection, CDN, DNS, and serverless computing services.',
        description: 'Cloudflare interns work on real production systems, not just dummy projects. You will be responsible for writing production-level code, debugging backend systems, and improving global infrastructure alongside world-class engineers.',
        responsibilities: [
            'Write production-level code for distributed systems',
            'Collaborate with engineering and product teams on global scale systems',
            'Debug and optimize backend systems and APIs',
            'Participate in technical discussions and architectural reviews',
            'Build and present final engineering projects'
        ],
        skills: [
            'Go', 'Rust', 'Python', 'C/C++', 'Distributed Systems', 'Networking', 'DSA'
        ],
        eligibility: [
            'B.E / B.Tech / B.Sc in Computer Science, Math, or Stats',
            'Batch: 2025, 2026, or 2027',
            'Strong understanding of Data Structures and Algorithms',
            'Familiarity with Backend development and APIs'
        ],
        benefits: [
            'Competitive Stipend',
            'Mentorship from Senior Engineers',
            'Exposure to Large-scale Systems',
            'Potential PPO (Pre-Placement Offer)'
        ],
        applicationProcess: [
            'Step 1: Resume Screening (GitHub, Projects)',
            'Step 2: Technical Interview (Coding, Backend)',
            'Step 3: Final Interview (Culture, Learning Ability)'
        ],
        faqs: [
            { q: 'What technologies will I use?', a: 'You may work with Go, Rust, Python, JavaScript, TypeScript, and C++ depending on the team.' },
            { q: 'Is this a remote internship?', a: 'No, it is an in-office internship based in Bengaluru.' }
        ],
        applyLink: 'https://job-boards.greenhouse.io/cloudflare/jobs/7495538'
    },
    {
        id: 'stellar-remote-sse-2026',
        title: 'Senior Software Engineer (Remote)',
        company: 'Stellar',
        location: 'Fully Remote (Work From Anywhere)',
        type: 'Remote Contract',
        salary: '$70 – $100 Per Hour',
        experience: '4+ Years',
        postedDate: 'May 5, 2026',
        aboutCompany: 'Stellar is looking for high-level technical professionals to work on advanced AI-related software systems. This opportunity offers complete flexibility and the chance to work independently from anywhere in the world.',
        description: 'As a Senior Software Engineer at Stellar, you will work on large-scale software systems, AI model improvement workflows, and performance optimization. This role is perfect for professionals interested in AI systems and advanced problem-solving.',
        responsibilities: [
            'Work with complex codebases and AI workflows',
            'Analyze software behavior and identify edge cases',
            'Review implementations and debug issues',
            'Improve AI system performance and reliability',
            'Create technical documentation for advanced workflows',
            'Support high-level engineering tasks independently'
        ],
        skills: [
            'Python', 'JavaScript', 'Go', 'C++', 'AI Systems', 'Software Architecture'
        ],
        eligibility: [
            'Bachelor’s Degree in Computer Science or Related Field',
            'Minimum 4 Years in Professional Software Development',
            'Strong programming fundamentals and problem-solving ability',
            'Excellent written communication skills'
        ],
        benefits: [
            'Compensation: $70 – $100/hr',
            'Flexible Work Schedule',
            'Fully Remote (Global)',
            '$600 Qualification Bonus'
        ],
        applicationProcess: [
            'Step 1: Visit Stellar application page',
            'Step 2: Complete qualification process',
            'Step 3: Submit technical details',
            'Step 4: Start project work after selection'
        ],
        faqs: [
            { q: 'Is this a full-time job?', a: 'It is a remote contract role with flexible hours and potential for a guaranteed 20 hours/week contract.' },
            { q: 'Which locations can apply?', a: 'Global applicants are accepted, including India, USA, UK, Canada, Europe, etc.' }
        ],
        applyLink: 'https://joinstellar.ai/apply/senior-software-engineer/'
    },
    {
        id: 'wipro-data-scientist-2026',
        title: 'Junior Data Engineer & Data Scientist',
        company: 'Wipro',
        location: 'Bengaluru, Karnataka',
        type: 'Full-time / Internship',
        salary: 'Competitive Package',
        experience: 'Freshers / 0–1 Year',
        postedDate: 'May 5, 2026',
        aboutCompany: 'Wipro is one of India’s top IT and consulting companies, specializing in Data Science, Cloud, and AI. With a global presence, Wipro offers immense learning and growth opportunities.',
        description: 'Wipro is hiring for multiple roles including Junior DE & DS Engineer (Intern) and Junior Data Science Engineer (Full-Time). These roles focus on building analytical solutions, data modeling, and insight generation using tools like Power BI.',
        responsibilities: [
            'Build and deploy data science models',
            'Develop interactive dashboards using Power BI',
            'Work with global stakeholders to understand requirements',
            'Present data insights to leadership teams',
            'Perform simulations and technical report writing',
            'Support internal data initiatives and system improvements'
        ],
        skills: [
            'Power BI', 'Data Science', 'Python', 'SQL', 'Analytical Thinking'
        ],
        eligibility: [
            'B.E / B.Tech or Equivalent in Engineering/Technology',
            'Eligible Batch: 2024, 2025, or 2026',
            'Strong knowledge of Power BI and Data Science fundamentals',
            'Good communication and teamwork skills'
        ],
        benefits: [
            'Health Insurance',
            'Internal Learning Platforms',
            'Global Project Exposure',
            'Career Growth Support'
        ],
        applicationProcess: [
            'Step 1: Application Screening',
            'Step 2: Technical Assessment (Power BI, Data Science)',
            'Step 3: Technical Interview',
            'Step 4: HR Interview'
        ],
        faqs: [
            { q: 'What tools are mandatory?', a: 'Knowledge of Power BI is mandatory for these roles.' },
            { q: 'Is there a stipend?', a: 'Yes, competitive stipend for interns and industry-standard salary for full-time roles.' }
        ],
        applyLink: 'https://careers.wipro.com/job/Bengaluru-JUNIOR-DE-AND-DS-ENGINEER-IND-560035/151601-en_US/'
    },
    {
        id: 'amazon-device-associate-2026',
        title: 'Device Associate I',
        company: 'Amazon',
        location: 'Chennai, Tamil Nadu',
        type: 'Full-time',
        salary: 'Competitive Package',
        experience: 'Freshers',
        postedDate: 'May 5, 2026',
        aboutCompany: 'Amazon’s Devices & Services division powers world-class products like Alexa, Echo, Kindle, and Fire TV. The Quality Services team ensures these products meet the highest standards before reaching customers.',
        description: 'As a Device Associate I, you will be responsible for executing test cases on Amazon devices, performing regression testing, and identifying software defects to ensure high product quality.',
        responsibilities: [
            'Execute predefined test cases on Amazon devices',
            'Identify, log, and track software bugs/issues',
            'Perform regression testing and quality validation',
            'Maintain detailed testing reports and documentation',
            'Escalate critical issues and follow QA guidelines',
            'Communicate testing progress to stakeholders'
        ],
        skills: [
            'Manual Testing', 'QA Fundamentals', 'Regression Testing', 'Bug Tracking', 'Attention to Detail'
        ],
        eligibility: [
            'Any Graduate (Bachelor’s Degree Preferred)',
            'Freshers or early career professionals',
            'Basic knowledge of Software Quality Assurance',
            'Strong analytical and communication skills'
        ],
        benefits: [
            'Global Team Exposure',
            'Hands-on QA Experience',
            'Career Growth at Amazon',
            'Device Testing Exposure'
        ],
        applicationProcess: [
            'Step 1: Online Assessment (Aptitude, Testing Basics)',
            'Step 2: Multiple Interview Rounds'
        ],
        faqs: [
            { q: 'What products will I test?', a: 'You will work on Amazon\'s consumer electronics like Echo, Kindle, and Fire TV.' },
            { q: 'Is it only for Chennai?', a: 'The current opening is for Chennai.' }
        ],
        applyLink: 'https://www.amazon.jobs/en/jobs/10409351/device-associate-i-mako?cmpid=DA_INAD200785B'
    },
    {
        id: 'honeywell-se-i-2026',
        title: 'Software Engineer I',
        company: 'Honeywell',
        location: 'Bangalore & Hyderabad',
        type: 'Full-time',
        salary: '5–9 LPA (Estimated)',
        experience: 'Freshers',
        postedDate: 'May 5, 2026',
        aboutCompany: 'Honeywell is a global technology leader in aerospace, automation, and industrial technologies. The company is committed to innovation and digital transformation.',
        description: 'This is an entry-level Software Engineering role with a focus on DevOps. You will build CI/CD pipelines, automate operational tasks, and manage cloud infrastructure using modern tools.',
        responsibilities: [
            'Build and maintain CI/CD pipelines using GitHub Actions',
            'Automate operational tasks using Python scripting',
            'Manage repositories and release workflows',
            'Develop build, test, and deployment systems',
            'Monitor systems and troubleshoot infrastructure issues',
            'Follow security best practices and collaborate with dev teams'
        ],
        skills: [
            'Python', 'GitHub Actions', 'CI/CD', 'Linux', 'Automation', 'Git'
        ],
        eligibility: [
            'Bachelor’s Degree in STEM (Science, Technology, Engineering, Math)',
            'Freshers or early career professionals',
            'Willingness to learn DevOps and Automation tools',
            'Strong logical and analytical thinking'
        ],
        benefits: [
            'DevOps Hands-on Experience',
            'Cloud Infrastructure Exposure',
            'Global Engineering Culture',
            'Competitive Benefits'
        ],
        applicationProcess: [
            'Step 1: Profile Creation',
            'Step 2: Resume Review',
            'Step 3: Technical & HR Interviews'
        ],
        faqs: [
            { q: 'Is prior experience required?', a: 'No, this is an entry-level role suitable for freshers with STEM degrees.' },
            { q: 'What is the long-term career value?', a: 'This role provides a strong foundation for careers in Cloud Engineering, SRE, and Platform Infrastructure (AWS, Azure, Kubernetes).' }
        ],
        applyLink: 'https://ibqbjb.fa.ocs.oraclecloud.com/hcmUI/CandidateExperience/en/sites/Honeywell/job/135282?utm_medium=jobboard&utm_source=linkedin'
    },
    {
        id: 'ey-ase-2026',
        title: 'Associate Software Engineer',
        company: 'EY (Ernst & Young)',
        location: 'Across India (Multiple)',
        type: 'Full-time',
        salary: 'Competitive Package',
        experience: 'Freshers',
        postedDate: 'May 5, 2026',
        aboutCompany: 'EY (Ernst & Young) is one of the world’s largest professional services firms, operating in 150+ countries. EY Global Delivery Services (GDS) in India works on advanced technology, consulting, and enterprise solutions.',
        description: 'As an Associate Software Engineer, you will work on enterprise-level software development projects with global teams, gaining hands-on experience in Web Technologies, Cloud, and Agile development.',
        responsibilities: [
            'Design and develop scalable software applications',
            'Work with Java, Python, .NET, Angular & React',
            'Perform unit and integration testing',
            'Participate in code reviews and debugging',
            'Collaborate with Agile/Scrum teams',
            'Analyze technical problems and provide solutions',
            'Prepare technical documentation'
        ],
        skills: [
            'Java', 'Python', 'Data Structures', 'SDLC', '.NET', 'React', 'Angular'
        ],
        eligibility: [
            'B.E / B.Tech in CS / IT / ECE',
            'Batch: 2024, 2025, or 2026',
            'Minimum 60% Marks or 6 CGPA',
            'No Active Backlogs Preferred'
        ],
        benefits: [
            'Health Insurance',
            'EY Learning & Certification Programs',
            'Global Work Exposure',
            'Flexible Work Options'
        ],
        applicationProcess: [
            'Step 1: Online Assessment (Aptitude, Coding)',
            'Step 2: Technical Interview',
            'Step 3: HR Interview'
        ],
        faqs: [
            { q: 'What is the work location?', a: 'Multiple cities across India including Bangalore, Chennai, Mumbai, Pune, Gurgaon, etc.' },
            { q: 'Is it only for CS graduates?', a: 'B.E/B.Tech in CS, IT, ECE, or related fields are eligible.' }
        ],
        applyLink: 'https://careers.ey.com/ey/job/Kolkata-Off-Campus-Fresher-Tech-WB-700091/1138950801/'
    },
    {
        id: 'red-hat-jr-consultant-2026',
        title: 'Junior Consultant (FASTER Program)',
        company: 'Red Hat',
        location: 'New Delhi (Remote/Hybrid)',
        type: 'Full-time (12-month Program)',
        salary: 'Competitive Package',
        experience: 'Freshers',
        postedDate: 'May 5, 2026',
        aboutCompany: 'Red Hat is a global leader in open source solutions, cloud computing, and DevOps. Part of IBM, it powers banking, telecom, and government projects worldwide.',
        description: 'The FASTER Program is a 12-month structured training program focused on Cloud Computing, Linux Administration, DevOps Engineering, and Enterprise IT Consulting.',
        responsibilities: [
            'Participate in Linux & Cloud training programs',
            'Work on enterprise client projects',
            'Support DevOps and cloud infrastructure solutions',
            'Collaborate with senior consultants',
            'Assist in enterprise solution architecture',
            'Work with client stakeholders and cross-functional teams'
        ],
        skills: [
            'Linux (RHEL)', 'Cloud Computing', 'DevOps', 'Ansible', 'OpenShift', 'Networking'
        ],
        eligibility: [
            'B.E / B.Tech / BCA / MCA (CS/IT/AI)',
            'Batch: 2025 or 2026',
            'Basic Linux knowledge',
            'Networking & Cloud Fundamentals'
        ],
        benefits: [
            'Certification Vouchers',
            'Global Learning Platforms',
            'Mentorship from Experts',
            'IBM-backed Work Culture'
        ],
        applicationProcess: [
            'Step 1: Online Application',
            'Step 2: Technical Assessment (Linux, Cloud)',
            'Step 3: Technical + HR Interview'
        ],
        faqs: [
            { q: 'What is the FASTER program?', a: 'It\'s a 12-month structured training program designed to turn freshers into enterprise cloud consultants.' },
            { q: 'Is it remote?', a: 'The role is based in New Delhi but offers Remote/Hybrid options.' }
        ],
        applyLink: 'https://redhat.wd5.myworkdayjobs.com/jobs/job/New-Delhi/Junior-Consultant_R-054554-1'
    },
    {
        id: 'cornerstone-jr-support-2026',
        title: 'Junior Support Specialist (Internship)',
        company: 'Cornerstone OnDemand',
        location: 'Pune, Maharashtra',
        type: 'Internship (12 Months)',
        salary: 'Competitive Stipend',
        experience: '0–1 Year',
        postedDate: 'May 5, 2026',
        aboutCompany: 'Cornerstone OnDemand is a leading cloud-based HR and Learning Management Software (LMS) company serving 7,000+ organizations globally.',
        description: 'As a Junior Support Specialist Intern, you will work with enterprise clients and support cloud-based HR platforms. This 12-month internship offers hands-on experience in SaaS support and CRM management.',
        responsibilities: [
            'Manage customer support tickets using CRM tools',
            'Troubleshoot SaaS platform issues',
            'Analyze and prioritize technical problems',
            'Maintain professional client communication',
            'Contribute to documentation & knowledge base',
            'Work within SLA timelines'
        ],
        skills: [
            'SaaS', 'Cloud Platforms', 'CRM (Salesforce/Zendesk)', 'English Communication', 'Troubleshooting'
        ],
        eligibility: [
            'B.Tech / B.E (CS/IT)',
            'Batch: 2024, 2025, or 2026',
            'Experience: 0-1 Year',
            'Willingness to work in US Shift'
        ],
        benefits: [
            'Global Client Exposure',
            'Structured Training',
            'Full-time Conversion Opportunity',
            'SaaS Experience'
        ],
        applicationProcess: [
            'Step 1: Resume Screening',
            'Step 2: Technical Interview',
            'Step 3: HR Interview'
        ],
        faqs: [
            { q: 'Is this a full-time role?', a: 'It is a 12-month internship with potential for full-time conversion based on performance.' },
            { q: 'What are the shift timings?', a: 'The role involves US Shift timings with global exposure.' }
        ],
        applyLink: 'https://cornerstone.csod.com/ux/ats/careersite/2/home/requisition/11145'
    },
    {
        id: 'cognizant-manual-qa-2026',
        title: 'Developer (Manual QA Engineer)',
        company: 'Cognizant',
        location: 'Bangalore, Karnataka (WFH)',
        type: 'Full-time',
        salary: 'Competitive Package',
        experience: 'Freshers / Up to 1 Year',
        postedDate: 'May 5, 2026',
        aboutCompany: 'Cognizant is one of the world’s leading IT services and consulting companies. The company provides AI-driven digital solutions and software services globally. With 300,000+ employees worldwide, Cognizant is known for strong career growth, learning opportunities, and employee-friendly work culture.',
        description: 'As a Developer (Manual QA Engineer), candidates will work on testing applications, workflows, and automation systems to ensure software quality and reliability. This role is perfect for freshers interested in Software Testing, Quality Assurance, Manual Testing, and SDLC & Agile Methodology.',
        responsibilities: [
            'Perform manual testing of applications and workflows',
            'Create and maintain detailed test cases',
            'Identify, report, and track bugs/issues 🐞',
            'Conduct regression testing before software releases',
            'Work with developers and analysts for quality improvements',
            'Handle Level-1 support and escalate complex issues',
            'Participate in customer validation sessions'
        ],
        skills: [
            'Manual Testing', 'SDLC', 'Agile Methodology', 'Defect Tracking', 'Analytical Thinking'
        ],
        eligibility: [
            'B.E / B.Tech / BCA / MCA / BSc (CS/IT/ECE)',
            'Eligible Batch: 2024 / 2025 / 2026',
            'Minimum 60% Marks or 6 CGPA',
            'Preferably No Active Backlogs'
        ],
        benefits: [
            'Medical Insurance',
            'Learning & Development Programs',
            'Certification Support',
            'Internal Training Platforms',
            'Career Growth Opportunities'
        ],
        applicationProcess: [
            'Round 1: Online Assessment (Aptitude, Reasoning, English Test)',
            'Round 2: Technical Interview (QA Fundamentals, SDLC, Basic Programming)',
            'Round 3: HR Interview (Communication, Flexibility & Team Fit)'
        ],
        faqs: [
            { q: 'Is this role work from home?', a: 'Yes, the location is Bangalore but it\'s a Work From Home opportunity.' },
            { q: 'What are the eligibility criteria?', a: 'B.E/B.Tech/BCA/MCA/BSc (CS/IT/ECE) graduates from 2024, 2025, and 2026 batches with minimum 60% marks.' }
        ],
        applyLink: 'https://cognizant.taleo.net/careersection/Lateral/jobapply.ftl?job=00067661141&lang=en'
    },
    {
        id: 'nvidia-test-tools-2026',
        title: 'Test and Tools Development Engineer',
        company: 'NVIDIA',
        location: 'Pune, Maharashtra',
        type: 'Full-time',
        salary: 'Highly Competitive Package',
        experience: 'Freshers / 0–1 Year',
        postedDate: 'May 5, 2026',
        aboutCompany: 'NVIDIA is a global leader in AI, GPU Computing, and Accelerated Computing Technology. Founded in 1993, NVIDIA powers technologies in AI, Robotics, Autonomous Vehicles, Data Centers, and the Omniverse Ecosystem.',
        description: 'As a Test and Tools Development Engineer, you will build automation systems and AI-driven testing workflows for NVIDIA’s Omniverse platform. This role is ideal for candidates passionate about Python Development, Automation Testing, AI Workflows, and Scalable Systems.',
        responsibilities: [
            'Develop automated testing pipelines',
            'Work on failure analysis and bug tracking systems',
            'Write clean and maintainable Python code 🐍',
            'Build logging and monitoring tools 📊',
            'Perform root cause analysis of issues 🔍',
            'Work with AI-native development tools',
            'Document workflows and engineering decisions 📝'
        ],
        skills: [
            'Python Programming', 'Software Testing Fundamentals', 'Automation Concepts', 'AI Tools / LLM Workflows', 'Communication'
        ],
        eligibility: [
            'B.Tech / B.E in Computer Science, IT, or Related Field',
            'Eligible Batch: 2026',
            'Strong Python Programming Knowledge',
            'Understanding of Software Testing Fundamentals'
        ],
        benefits: [
            'Health Insurance',
            'Competitive Salary Package',
            'Career Growth Opportunities',
            'Learning & Development Support',
            'Flexible Work Environment',
            'Mentorship from Top Engineers',
            'Access to Advanced AI Technologies'
        ],
        applicationProcess: [
            'Round 1: Online Assessment (Python Coding, Testing Fundamentals, System Concepts)',
            'Round 2: Technical Interview (Programming Concepts, Automation Frameworks, Project Discussions)',
            'Round 3: HR / Managerial Round (Team Fit, Career Goals, Final Offer Discussion)'
        ],
        faqs: [
            { q: 'Who is eligible for this role?', a: 'B.Tech/B.E graduates in CS/IT from the 2026 batch are eligible.' },
            { q: 'What skills are most important?', a: 'Strong Python programming and a good understanding of software testing and automation concepts.' }
        ],
        applyLink: 'https://nvidia.wd5.myworkdayjobs.com/NVIDIAExternalCareerSite/job/India-Pune/Test-and-Tools-Development-Engineer—New-College-Grad-2026_JR2016982'
    },
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
        applyLink: 'https://www.amazon.jobs/en/jobs/10477224/software-dev-engineer-temp'
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
        applyLink: 'https://www.amazon.jobs/en/jobs/10477224/software-dev-engineer-temp'
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
    
    const shareUrl = `https://advindiancoder.com/jobs/${job.id}`;
    const currentUrl = encodeURIComponent(shareUrl);
    const shareText = encodeURIComponent(`Check out this ${job.title} job opening at ${job.company}!`);

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
                                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 leading-tight">{job.title}</h1>
                                
                                {/* Quick Overview Badges */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-medium">
                                    <div className="flex items-center bg-black/40 border border-white/10 px-4 py-3 rounded-xl">
                                        <Building2 className="w-5 h-5 mr-3 text-blue-400 shrink-0" />
                                        <div className="min-w-0">
                                            <p className="text-[10px] text-gray-400 uppercase tracking-wider">Company</p>
                                            <p className="text-white truncate">{job.company}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center bg-black/40 border border-white/10 px-4 py-3 rounded-xl">
                                        <MapPin className="w-5 h-5 mr-3 text-red-400 shrink-0" />
                                        <div className="min-w-0">
                                            <p className="text-[10px] text-gray-400 uppercase tracking-wider">Location</p>
                                            <p className="text-white truncate">{job.location}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center bg-black/40 border border-white/10 px-4 py-3 rounded-xl">
                                        <Briefcase className="w-5 h-5 mr-3 text-green-400 shrink-0" />
                                        <div className="min-w-0">
                                            <p className="text-[10px] text-gray-400 uppercase tracking-wider">Experience</p>
                                            <p className="text-white truncate">{job.experience}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center bg-black/40 border border-white/10 px-4 py-3 rounded-xl">
                                        <DollarSign className="w-5 h-5 mr-3 text-yellow-400 shrink-0" />
                                        <div className="min-w-0">
                                            <p className="text-[10px] text-gray-400 uppercase tracking-wider">Salary</p>
                                            <p className="text-white truncate">{job.salary}</p>
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

                            <PlaylistAd variant="compact" />

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

                            <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 shadow-2xl backdrop-blur-xl relative overflow-hidden group/process">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[50px] rounded-full -z-10 group-hover/process:bg-primary/20 transition-colors"></div>
                                <h3 className="text-2xl font-black mb-8 flex items-center tracking-tight">
                                    <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center mr-4 border border-primary/30 shadow-[0_0_15px_rgba(0,120,255,0.2)]">
                                        <Briefcase className="w-5 h-5 text-primary" />
                                    </div>
                                    Application Process
                                </h3>
                                
                                <div className="relative space-y-8">
                                    {/* Vertical Line Gradient */}
                                    <div className="absolute left-[19px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-primary via-blue-500/50 to-transparent"></div>
                                    
                                    {job.applicationProcess.map((step, idx) => (
                                        <motion.div 
                                            key={idx}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="relative flex items-start gap-6 group/item"
                                        >
                                            {/* Step Indicator */}
                                            <div className="relative z-10 shrink-0">
                                                <div className="w-10 h-10 rounded-full bg-[#050914] border-2 border-primary flex items-center justify-center text-primary font-black text-sm shadow-[0_0_15px_rgba(0,120,255,0.3)] group-hover/item:scale-110 group-hover/item:shadow-[0_0_25px_rgba(0,120,255,0.5)] transition-all duration-300">
                                                    {idx + 1}
                                                </div>
                                                {/* Pulsing Outer Ring for the current/first step */}
                                                {idx === 0 && (
                                                    <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping -z-10"></div>
                                                )}
                                            </div>

                                            {/* Step Content Card */}
                                            <div className="flex-1 pt-0.5">
                                                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 group-hover/item:bg-white/[0.07] group-hover/item:border-primary/30 transition-all duration-300 shadow-lg backdrop-blur-sm">
                                                    <div className="flex flex-col gap-1">
                                                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/70 mb-1">Step 0{idx + 1}</span>
                                                        <p className="text-gray-200 font-medium leading-relaxed group-hover/item:text-white transition-colors">
                                                            {step}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Bottom Glow */}
                                <div className="mt-8 flex justify-center">
                                    <div className="px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-black tracking-widest uppercase animate-pulse">
                                        Hiring in Progress
                                    </div>
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
