
import { Course, Masterclass, Resource, Testimonial, Company, Stat } from './types';

export const NAV_LINKS = [
    { name: 'Home', path: '/' },
    { name: 'Free Courses', path: '/courses' },
    { name: '₹9 Masterclass', path: '/masterclass' },
    { name: 'Resources', path: '/resources' },
    { name: 'About', path: '/about' },
    { name: 'Community', path: '/community' },
    { name: 'Career Support', path: '/career' },
    { name: 'Contact', path: '/contact' },
];

export const HERO_STATS: Stat[] = [
    { value: '3,500+', label: 'YouTube Views' },
    { value: '135+', label: 'Subscribers' },
    { value: '100%', label: 'Free Tutorials' },
];

export const FEATURED_COMPANIES: Company[] = [
    { id: 1, name: 'Inoglle IT Services', logo: '/inoglle-logo.svg', tagline: 'Innovating Technology with Passion', link: '#' },
    { id: 2, name: 'Elevtern', logo: '/elevtern-logo.svg', tagline: 'Empowering Internships & Real-World Training', link: '#' },
    { id: 3, name: 'ADV SparkTech', logo: '/adv-sparktech-logo.svg', tagline: 'Shaping the Future of Tech Learning', link: '#' },
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
    { id: 1, title: 'Java REST API in 1 Hour', description: 'Build a production-ready REST API using Java and Spring Boot in just 60 minutes.', price: 9, enrollLink: '#', countdownTarget: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString() },
    { id: 2, title: 'Portfolio Website using HTML, CSS, JS', description: 'Create a stunning personal portfolio from scratch to showcase your skills.', price: 9, enrollLink: '#', countdownTarget: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString() },
    { id: 3, title: 'Data Analyst Roadmap 2026', description: 'Your step-by-step guide to becoming a Data Analyst in the modern tech landscape.', price: 9, enrollLink: '#', countdownTarget: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString() },
    { id: 4, title: 'Resume & LinkedIn Optimization', description: 'Learn the secrets to crafting a resume that beats ATS and a LinkedIn profile that attracts recruiters.', price: 9, enrollLink: '#', countdownTarget: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toISOString() },
];

export const RESOURCES: Resource[] = [
    { id: 1, title: 'Java Notes', type: 'Notes', link: '#' },
    { id: 2, title: 'DSA Notes', type: 'Notes', link: '#' },
    { id: 3, title: 'SQL Cheatsheet', type: 'Notes', link: '#' },
    { id: 4, title: 'Spring Boot Summary', type: 'Notes', link: '#' },
    { id: 5, title: 'Stop Relying on Motivation — Build a System Instead!', type: 'Blog', link: '#', description: 'Learn how to create sustainable habits for success.' },
    { id: 6, title: 'Crack Your First Developer Job in 2026', type: 'Blog', link: '#', description: 'A practical guide for aspiring developers.' },
    { id: 7, title: 'Top 10 Projects to Master Full Stack Development', type: 'Blog', link: '#', description: 'Project ideas that will make your portfolio stand out.' },
    { id: 8, title: 'MySQL_Zero_to_Hero', type: 'Project', link: '#', techStack: ['MySQL', 'SQL'] },
    { id: 9, title: 'E-Commerce Website', type: 'Project', link: '#', techStack: ['React', 'Spring Boot', 'MySQL'] },
];

export const TESTIMONIALS: Testimonial[] = [
    { id: 1, name: 'Aarav Sharma', role: 'Software Engineer', quote: 'Vinay\'s tutorials are incredibly clear and concise. The Spring Boot series helped me land my first backend job!', avatar: 'https://picsum.photos/seed/person1/100/100' },
    { id: 2, name: 'Priya Patel', role: 'Student', quote: 'The DSA course is a lifesaver for campus placements. The explanations are simple and the problem-solving techniques are pure gold.', avatar: 'https://picsum.photos/seed/person2/100/100' },
    { id: 3, name: 'Rohan Verma', role: 'Frontend Developer', quote: 'I joined the ₹9 masterclass on a whim and was blown away by the value. Highly recommended for anyone looking to upskill quickly.', avatar: 'https://picsum.photos/seed/person3/100/100' },
];

export const SOCIAL_LINKS = {
    linkedin: '#',
    github: '#',
    youtube: '#',
    instagram: '#',
    discord: '#',
    telegram: '#',
    whatsapp: '#',
};
