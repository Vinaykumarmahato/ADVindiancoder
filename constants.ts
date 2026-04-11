
import { Course, Masterclass, Resource, Testimonial, Company, Stat } from './types';

export const NAV_LINKS = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'Live Masterclass', path: '/masterclass' },
    { name: 'Notes', path: '/resources' },
    { name: 'Success Stories', path: '/success-stories' },
    { name: 'About', path: '/about' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Jobs', path: '/jobs' },
    { name: 'Contact', path: '/contact' },
];

export const HERO_STATS: Stat[] = [
    { value: '3,500+', label: 'YouTube Views' },
    { value: '135+', label: 'Subscribers' },
    { value: '100%', label: 'Free Tutorials' },
];

export const FEATURED_COMPANIES: Company[] = [
    { id: 1, name: 'Inoglle IT Services', logo: '/ventures/inoglle.png', tagline: 'Innovating Technology with Passion', link: '#' },
    { id: 2, name: 'Elevtern', logo: '/ventures/elevtern.jpg', tagline: 'Empowering Internships & Real-World Training', link: '#' },
    { id: 3, name: 'ADV SparkTech', logo: '/ventures/adv-sparktech.jpg', tagline: 'Shaping the Future of Tech Learning', link: '#' },
    { id: 4, name: 'ADV Indian Coder', logo: '/ventures/adv-indian-coder.png', tagline: 'Master Coding with Real-World Projects', link: '#' },
    { id: 5, name: 'ADV Hope Haven', logo: '/ventures/adv-hopehaven.jpg', tagline: 'Empowering Lives through Education', link: '#' },
];

export const WHY_CHOOSE_US_FEATURES = [
    'Real-World Coding Projects',
    'Hands-on Tutorials',
    'Career-Focused Learning',
    'Free Mentorship + Community Access',
];

export const COURSES: Course[] = [
    { id: 1, title: 'Java Full Course 2025', description: 'Master Java from scratch with this comprehensive course.', thumbnail: 'https://picsum.photos/seed/java/400/225', tags: ['Beginner', 'Backend'], category: 'Programming', youtubeLink: '#' },
    { id: 2, title: 'Python for Beginners', description: 'Learn the fundamentals of Python programming.', thumbnail: 'https://picsum.photos/seed/python/400/225', tags: ['Beginner'], category: 'Programming', youtubeLink: '#' },
    { id: 3, title: 'React Full Course', description: 'Build modern web applications with React.', thumbnail: 'https://picsum.photos/seed/react/400/225', tags: ['Web Dev', 'Frontend'], category: 'Web', youtubeLink: '#' },
    { id: 4, title: 'Spring Boot Microservices', description: 'Create robust backend systems with Spring Boot.', thumbnail: 'https://picsum.photos/seed/spring/400/225', tags: ['Backend', 'Java'], category: 'Backend', youtubeLink: '#' },
    { id: 5, title: 'DSA for Interviews', description: 'Crack coding interviews with essential data structures and algorithms.', thumbnail: 'https://picsum.photos/seed/dsa/400/225', tags: ['DSA', 'Interview'], category: 'DSA', youtubeLink: '#' },
    { id: 6, title: 'Resume & LinkedIn Optimization', description: 'Optimize your profiles to land your dream job.', thumbnail: 'https://picsum.photos/seed/career/400/225', tags: ['Career'], category: 'Career', youtubeLink: '#' },
    { id: 7, title: 'HTML & CSS Crash Course', description: 'The building blocks of the web, made easy.', thumbnail: 'https://picsum.photos/seed/htmlcss/400/225', tags: ['Beginner', 'Web Dev'], category: 'Web', youtubeLink: '#' },
    { id: 8, title: 'C++ Programming Basics', description: 'A deep dive into the powerful C++ language.', thumbnail: 'https://picsum.photos/seed/cplusplus/400/225', tags: ['Beginner'], category: 'Programming', youtubeLink: '#' },
];

export const MASTERCLASSES: Masterclass[] = [
    { id: 1, title: 'Python Programming (30 Days Live Masterclass)', description: 'Master Python for Data, Automation & AI from scratch with daily live classes.', price: 499, enrollLink: '#', countdownTarget: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString() },
    { id: 2, title: 'SQL Mastery (30 Days Live Masterclass)', description: 'Master essential SQL queries, joins, and database design for data and backend roles.', price: 499, enrollLink: '#', countdownTarget: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString() },
    { id: 3, title: 'Java Masterclass (30 Days Live Masterclass)', description: 'Core Java, OOPs, Collections, and building real-world enterprise applications.', price: 499, enrollLink: '#', countdownTarget: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString() },
    { id: 4, title: 'Prompt Engineering (30 Days Live Masterclass)', description: 'Learn to use ChatGPT, Claude, and AI tools effectively for automation and productivity.', price: 499, enrollLink: '#', countdownTarget: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString() },
    { id: 5, title: 'DevOps Full Course (30 Days Live Masterclass)', description: 'Git, Docker, Kubernetes, Jenkins CI/CD, Terraform, and AWS Fundamentals.', price: 499, enrollLink: '#', countdownTarget: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString() },
    { id: 6, title: 'Software Testing QA (30 Days Live Masterclass)', description: 'Manual Testing, Jira, Selenium Automation, Postman API Testing, and Agile.', price: 499, enrollLink: '#', countdownTarget: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString() },
    { id: 7, title: 'Aptitude for Placements (30 Days Live Masterclass)', description: 'Crack the first round of MNC interviews. Quants, Logical Reasoning, and Speed Math.', price: 499, enrollLink: '#', countdownTarget: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString() },
];

export const RESOURCES: Resource[] = [
    // --- TECH NOTES / DIGITAL (Free/Existing) ---
    { id: 1, title: 'Python Basics & OOPs', category: 'Digital', subject: 'Python', type: 'Notes', link: '#', metadata: 'Free Download', price: 0, isPremium: false, thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=400&q=80' },
    { id: 2, title: 'SQL Queries Cheat Sheet', category: 'Digital', subject: 'SQL', type: 'Notes', link: '#', metadata: 'Free Download', price: 0, isPremium: false, thumbnail: 'https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=400&q=80' },
    { id: 3, title: 'Java Core Concepts', category: 'Digital', subject: 'Java', type: 'Notes', link: '#', metadata: 'Free Download', price: 0, isPremium: false, thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80' },
    
    // --- TECH / HANDWRITTEN (Paid/Existing) ---
    { id: 4, title: 'Complete Python Master Notes', category: 'Handwritten Notes', subject: 'Python', type: 'Notes', link: '#', metadata: 'Includes Projects', price: 99, isPremium: true, thumbnail: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=400&q=80' },
    { id: 5, title: 'Advanced SQL + Joins', category: 'Handwritten Notes', subject: 'SQL', type: 'Notes', link: '#', metadata: 'Interview Special', price: 99, isPremium: true, thumbnail: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=400&q=80' },
    { id: 6, title: 'Java + Advanced Topics', category: 'Handwritten Notes', subject: 'Java', type: 'Notes', link: '#', metadata: 'High Yield', price: 99, isPremium: true, thumbnail: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=400&q=80' },

    // --- HANDWRITTEN ACADEMIC NOTES ---
    { id: 101, title: 'Per Page (A4) Handwritten', category: 'Handwritten Notes', subject: 'Academic', type: 'Service', link: '#', metadata: 'Beautiful & Clear', price: 29, isPremium: true, thumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead27d8?auto=format&fit=crop&w=400&q=80' },
    { id: 102, title: 'Short Notes (10-15 pages)', category: 'Handwritten Notes', subject: 'Academic', type: 'Notes', link: '#', metadata: 'Quick Read', price: 299, isPremium: true, thumbnail: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=400&q=80' },
    { id: 103, title: 'Unit-wise Exam Notes', category: 'Handwritten Notes', subject: 'Academic', type: 'Notes', link: '#', metadata: 'Full Unit', price: 599, isPremium: true, thumbnail: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=400&q=80' },
    { id: 104, title: 'Revision Notes', category: 'Handwritten Notes', subject: 'Academic', type: 'Notes', link: '#', metadata: 'Last Minute', price: 399, isPremium: true, thumbnail: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=400&q=80' },
    { id: 105, title: 'Diagram-based Notes', category: 'Handwritten Notes', subject: 'Academic', type: 'Notes', link: '#', metadata: 'Per Page', price: 49, isPremium: true, thumbnail: 'https://images.unsplash.com/photo-1503694978374-8a2fa686963a?auto=format&fit=crop&w=400&q=80' },

    // --- STUDENT / EDUCATOR SUPPORT ---
    { id: 201, title: 'Notes Formatting & Cleaning', category: 'Support', subject: 'Formatting', type: 'Service', link: '#', metadata: 'Arrangement', price: 199, isPremium: true, thumbnail: 'https://images.unsplash.com/photo-1515378960530-7c0da6229678?auto=format&fit=crop&w=400&q=80' },
    { id: 202, title: 'Notes Rewriting / Correction', category: 'Support', subject: 'Writing', type: 'Service', link: '#', metadata: 'Correction', price: 199, isPremium: true, thumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead27d8?auto=format&fit=crop&w=400&q=80' },
    { id: 203, title: 'PDF Notes Creation', category: 'Support', subject: 'PDF', type: 'Service', link: '#', metadata: 'Digitalize', price: 299, isPremium: true, thumbnail: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=400&q=80' },
    { id: 204, title: 'Printable Study Material', category: 'Support', subject: 'Print', type: 'Service', link: '#', metadata: 'Ready to Print', price: 399, isPremium: true, thumbnail: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=400&q=80' },
    { id: 205, title: 'Worksheet / Assignment Notes', category: 'Support', subject: 'Assignment', type: 'Service', link: '#', metadata: 'Guided', price: 299, isPremium: true, thumbnail: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=400&q=80' },

    // --- DIGITAL STUDY MATERIAL ---
    { id: 301, title: 'One-page Formula Sheets', category: 'Digital', subject: 'Formulas', type: 'Material', link: '#', metadata: 'Quick Ref', price: 149, isPremium: true, thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=400&q=80' },
    { id: 302, title: 'Handwritten-style PDFs', category: 'Digital', subject: 'Stylized', type: 'Material', link: '#', metadata: 'PDF Format', price: 299, isPremium: true, thumbnail: 'https://images.unsplash.com/photo-1506506200949-ed6a61cc52e1?auto=format&fit=crop&w=400&q=80' },
    { id: 303, title: 'Exam Cheat Sheets', category: 'Digital', subject: 'Exams', type: 'Material', link: '#', metadata: 'Summary', price: 199, isPremium: true, thumbnail: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=400&q=80' },
    { id: 304, title: 'Study Planners / Timetables', category: 'Digital', subject: 'Planning', type: 'Material', link: '#', metadata: 'Productivity', price: 149, isPremium: true, thumbnail: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=400&q=80' },

    // --- ACADEMIC PAGE GROWTH ---
    { id: 401, title: 'Page Audit & Suggestions', category: 'Growth', subject: 'Audit', type: 'Service', link: '#', metadata: 'Social Media', price: 149, isPremium: true, thumbnail: 'https://images.unsplash.com/photo-1533749047139-189de3cf06d3?auto=format&fit=crop&w=400&q=80' },
    { id: 402, title: 'Bio Optimization', category: 'Growth', subject: 'Profile', type: 'Service', link: '#', metadata: 'Setup', price: 149, isPremium: true, thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=400&q=80' },
    { id: 403, title: 'Highlight Setup (Icons)', category: 'Growth', subject: 'Design', type: 'Service', link: '#', metadata: 'Visuals', price: 199, isPremium: true, thumbnail: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=400&q=80' },
    { id: 404, title: 'Page Promotion (7 Days)', category: 'Growth', subject: 'Promo', type: 'Service', link: '#', metadata: 'Shoutouts', price: 299, isPremium: true, thumbnail: 'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=400&q=80' },
    { id: 405, title: 'Page Promotion (15 Days)', category: 'Growth', subject: 'Promo', type: 'Service', link: '#', metadata: 'Extended Promo', price: 499, isPremium: true, thumbnail: 'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=400&q=80' },

    // --- CONTENT CREATION ---
    { id: 501, title: 'Study Captions / Post Ideas', category: 'Content', subject: 'Social', type: 'Service', link: '#', metadata: 'Ideas', price: 149, isPremium: true, thumbnail: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&w=400&q=80' },
    { id: 502, title: 'Reel Script (Study Niche)', category: 'Content', subject: 'Video', type: 'Service', link: '#', metadata: 'Scripts', price: 199, isPremium: true, thumbnail: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=400&q=80' },
    { id: 503, title: 'Weekly Content Plan', category: 'Content', subject: 'Planning', type: 'Service', link: '#', metadata: '1 Week', price: 299, isPremium: true, thumbnail: 'https://images.unsplash.com/photo-1506784951206-a8fdfc73abcb?auto=format&fit=crop&w=400&q=80' },
    { id: 504, title: 'Monthly Content Plan', category: 'Content', subject: 'Planning', type: 'Service', link: '#', metadata: '1 Month', price: 599, isPremium: true, thumbnail: 'https://images.unsplash.com/photo-1506784951206-a8fdfc73abcb?auto=format&fit=crop&w=400&q=80' },

    // --- EDUCATOR SERVICES ---
    { id: 601, title: 'Teaching Notes Preparation', category: 'Educator', subject: 'Prep', type: 'Service', link: '#', metadata: 'Teachers', price: 499, isPremium: true, thumbnail: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=400&q=80' },
    { id: 602, title: 'Coaching Material Support', category: 'Educator', subject: 'Institute', type: 'Service', link: '#', metadata: 'Centers', price: 599, isPremium: true, thumbnail: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=400&q=80' },
    { id: 603, title: 'Student Worksheets', category: 'Educator', subject: 'Practice', type: 'Service', link: '#', metadata: 'Custom', price: 299, isPremium: true, thumbnail: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=400&q=80' },

    // --- COMBO PACKAGES ---
    { id: 701, title: 'Notes + PDF + Formatting', category: 'Combo', subject: 'Bundle', type: 'Package', link: '#', metadata: 'Complete Set', price: 499, isPremium: true, thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80' },
    { id: 702, title: 'Exam Prep Mini Bundle', category: 'Combo', subject: 'Bundle', type: 'Package', link: '#', metadata: 'Pre-Exam', price: 699, isPremium: true, thumbnail: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=400&q=80' },
    { id: 703, title: 'Monthly Academic Support', category: 'Combo', subject: 'Subscription', type: 'Package', link: '#', metadata: 'VIP Priority', price: 999, isPremium: true, thumbnail: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=400&q=80' },
];

export const TESTIMONIALS: Testimonial[] = [
    { id: 1, name: 'Aarav Sharma', role: 'Software Engineer', quote: 'Vinay\'s tutorials are incredibly clear and concise. The Spring Boot series helped me land my first backend job!', avatar: 'https://picsum.photos/seed/person1/100/100' },
    { id: 2, name: 'Priya Patel', role: 'Student', quote: 'The DSA course is a lifesaver for campus placements. The explanations are simple and the problem-solving techniques are pure gold.', avatar: 'https://picsum.photos/seed/person2/100/100' },
    { id: 3, name: 'Rohan Verma', role: 'Frontend Developer', quote: 'I joined the ₹9 masterclass on a whim and was blown away by the value. Highly recommended for anyone looking to upskill quickly.', avatar: 'https://picsum.photos/seed/person3/100/100' },
];

export const SOCIAL_LINKS = {
    linkedin: 'https://www.linkedin.com/company/advindiancoder',
    github: 'https://github.com/Vinaykumarmahato',
    youtube: 'https://www.youtube.com/@ADVIndianCoder-i9y',
    instagram: 'https://www.instagram.com/advindiancoder.official',
    personalLinkedin: 'https://www.linkedin.com/in/vinay-kumar860964/',
    personalInstagram: 'https://www.instagram.com/vinay_software_engineer/',
    telegram: 'https://t.me/advindiancoder',
    discord: 'https://discord.gg/qApjKDjk',
    whatsapp: 'https://whatsapp.com/channel/0029VaPmCNEFcow7oeWCwh3c',
};
