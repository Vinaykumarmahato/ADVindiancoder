
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
    { id: 1, title: 'Java Mastery in 2 Hours (Zero to Core Concepts)', description: 'Master Java from scratch with this comprehensive course.', price: 49, enrollLink: '#', countdownTarget: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString() },
    { id: 2, title: 'Multithreading Made Easy in 2 Hours', description: 'Understand multithreading concepts simply and effectively.', price: 49, enrollLink: '#', countdownTarget: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString() },
    { id: 3, title: 'Spring Boot Crash Course in 2 Hours', description: 'Quickly get up to speed with Spring Boot framework.', price: 49, enrollLink: '#', countdownTarget: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString() },
    { id: 4, title: 'Microservices Fundamentals in 2 Hours', description: 'Learn the core principles of microservices architecture.', price: 49, enrollLink: '#', countdownTarget: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString() },
    { id: 5, title: 'AI Tools for Students – Learn & Use in 2 Hours', description: 'Discover essential AI tools to boost your productivity.', price: 49, enrollLink: '#', countdownTarget: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString() },
    { id: 6, title: 'Build Your First AI Project in 2 Hours', description: 'Hands-on guide to creating your first AI application.', price: 49, enrollLink: '#', countdownTarget: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString() },
    { id: 7, title: 'Become Industry-Ready in 2 Hours', description: 'Essential skills and tips to prepare for the tech industry.', price: 49, enrollLink: '#', countdownTarget: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString() },
    { id: 8, title: 'Career Roadmap 2025 in 2 Hours', description: 'Plan your career path with the latest industry trends.', price: 49, enrollLink: '#', countdownTarget: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString() },
    { id: 9, title: 'Communication Skills Booster in 2 Hours', description: 'Improve your communication skills for professional success.', price: 49, enrollLink: '#', countdownTarget: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString() },
    { id: 10, title: 'Public Speaking Confidence in 2 Hours', description: 'Gain confidence and master the art of public speaking.', price: 49, enrollLink: '#', countdownTarget: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString() },
    { id: 11, title: 'Leadership Skills for Beginners in 2 Hours', description: 'Start your journey to becoming an effective leader.', price: 49, enrollLink: '#', countdownTarget: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString() },
    { id: 12, title: 'Start Your Startup in 2 Hours (Idea to Plan)', description: 'Turn your startup idea into a solid actionable plan.', price: 49, enrollLink: '#', countdownTarget: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString() },
    { id: 13, title: 'Personal Branding Crash Course in 2 Hours', description: 'Build a strong personal brand to stand out.', price: 49, enrollLink: '#', countdownTarget: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString() },
    { id: 14, title: 'YouTube Growth in 2 Hours – From Zero to Strategy', description: 'Strategies to grow your YouTube channel from scratch.', price: 49, enrollLink: '#', countdownTarget: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString() },
    { id: 15, title: 'Create Viral Thumbnails in 2 Hours', description: 'Learn design techniques for high-click-through thumbnails.', price: 49, enrollLink: '#', countdownTarget: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString() },
    { id: 16, title: 'SQL Essentials in 2 Hours (Joins + Queries)', description: 'Master essential SQL queries and joins quickly.', price: 49, enrollLink: '#', countdownTarget: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString() },
    { id: 17, title: 'Database Design in 2 Hours', description: 'Learn the fundamentals of designing efficient databases.', price: 49, enrollLink: '#', countdownTarget: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString() },
    { id: 18, title: 'Web + AI Integration in 2 Hours', description: 'Integrate AI capabilities into your web applications.', price: 49, enrollLink: '#', countdownTarget: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString() },
    { id: 19, title: 'Build a Real Project in 2 Hours (Java + SQL)', description: 'Build a complete project using Java and SQL.', price: 49, enrollLink: '#', countdownTarget: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString() },
    { id: 20, title: 'Master Productivity & Focus in 2 Hours', description: 'Techniques to maximize your productivity and focus.', price: 49, enrollLink: '#', countdownTarget: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString() },
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
