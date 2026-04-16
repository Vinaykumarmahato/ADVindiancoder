
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

// ─── Java Full Course Playlist (All 37 Episodes) ────────────────────────────
export const JAVA_PLAYLIST = [
    { id: 1,  title: "EP 01 – What is Programming? | Introduction to Programming | Java Full Course 2026 #1", thumbnail: `/Thumbnail/${encodeURIComponent("ep-01-programming-introduction-thumbnail.png")}`, tags: ['Java', 'Basics'], category: 'Java Series', youtubeLink: '#' },
    { id: 2,  title: "EP 02 – Low Level vs High Level Languages | Java Full Course 2026 #2", thumbnail: `/Thumbnail/${encodeURIComponent("ep-02-low-vs-high-level-thumbnail.png")}`, tags: ['Java', 'Theory'], category: 'Java Series', youtubeLink: '#' },
    { id: 3,  title: "EP 03 – Why Java in 2026? | Best Language for Freshers | Java Full Course 2026 #3", thumbnail: `/Thumbnail/${encodeURIComponent("ep-03-why-java-2026-thumbnail.png")}`, tags: ['Java', 'Career'], category: 'Java Series', youtubeLink: '#' },
    { id: 4,  title: "EP 04 – How Java Works | JDK → Compiler → Bytecode → JVM Explained | Java Full Course 2026 #4", thumbnail: `/Thumbnail/${encodeURIComponent("ep-04-how-java-works-thumbnail.png")}`, tags: ['Java', 'Theory'], category: 'Java Series', youtubeLink: '#' },
    { id: 5,  title: "EP 05 – Java Features | Why Java is Powerful? | Java Full Course 2026 #5", thumbnail: `/Thumbnail/${encodeURIComponent("ep-05-java-features-thumbnail.png")}`, tags: ['Java', 'Theory'], category: 'Java Series', youtubeLink: '#' },
    { id: 6,  title: "EP 06 – Java Setup | Install JDK + VS Code + Run First Program | Java Full Course 2026 #6", thumbnail: `/Thumbnail/${encodeURIComponent("ep-06-java-setup-thumbnail.png")}`, tags: ['Java', 'Setup'], category: 'Java Series', youtubeLink: '#' },
    { id: 7,  title: "EP 07 – From Real World to Code | How Programmers Think | Java Full Course 2026 #7", thumbnail: `/Thumbnail/${encodeURIComponent("ep-07-real-world-to-code-thumbnail.png")}`, tags: ['Java', 'Mindset'], category: 'Java Series', youtubeLink: '#' },
    { id: 8,  title: "EP 08 – Methods in Java | Functions Explained from Scratch | Java Full Course 2026 #8", thumbnail: `/Thumbnail/${encodeURIComponent("ep-08-java-methods-thumbnail.png")}`, tags: ['Java', 'Methods'], category: 'Java Series', youtubeLink: '#' },
    { id: 9,  title: "EP 09 – Static vs Dynamic Programming Languages | Java Full Course 2026 #9", thumbnail: `/Thumbnail/${encodeURIComponent("ep-09-static-vs-dynamic-thumbnail.png")}`, tags: ['Java', 'Theory'], category: 'Java Series', youtubeLink: '#' },
    { id: 10, title: "EP 10 – Variables in Java | Storage, Scope & Memory | Java Full Course 2026 #10", thumbnail: `/Thumbnail/${encodeURIComponent("ep-10-java-variables-thumbnail.png")}`, tags: ['Java', 'Variables'], category: 'Java Series', youtubeLink: '#' },
    { id: 11, title: "EP 11 – Data Types in Java | Primitive & Non-Primitive Explained | Java Full Course 2026 #11", thumbnail: `/Thumbnail/${encodeURIComponent("ep-11-java-data-types-thumbnail.png")}`, tags: ['Java', 'Types'], category: 'Java Series', youtubeLink: '#' },
    { id: 12, title: "EP 12 – Student Management Project | Java Variables & Data Types Project | Java Full Course 2026 #12", thumbnail: `/Thumbnail/${encodeURIComponent("ep-12-student-management-project-thumbnail.png")}`, tags: ['Java', 'Project'], category: 'Java Series', youtubeLink: '#' },
    { id: 13, title: "EP 13 – Type Casting in Java | Implicit & Explicit Conversion | Java Full Course 2026 #13", thumbnail: `/Thumbnail/${encodeURIComponent("ep-13-type-casting-thumbnail.png")}`, tags: ['Java', 'Types'], category: 'Java Series', youtubeLink: '#' },
    { id: 14, title: "EP 14 – Why Operators Exist? | The CPU-Level Truth | Java Full Course 2026 #14", thumbnail: `/Thumbnail/${encodeURIComponent("ep-14-why-operators-thumbnail.png")}`, tags: ['Java', 'Operators'], category: 'Java Series', youtubeLink: '#' },
    { id: 15, title: "EP 15 – Arithmetic Operators in Java | Java Full Course 2026 #15", thumbnail: `/Thumbnail/${encodeURIComponent("ep-15-arithmetic-operators-thumbnail.png")}`, tags: ['Java', 'Operators'], category: 'Java Series', youtubeLink: '#' },
    { id: 16, title: "EP 16 – Unary Operators in Java | Java Full Course 2026 #16", thumbnail: `/Thumbnail/${encodeURIComponent("ep-16-unary-operators-thumbnail.png")}`, tags: ['Java', 'Operators'], category: 'Java Series', youtubeLink: '#' },
    { id: 17, title: "EP 17 – Relational Operators in Java | Java Full Course 2026 #17", thumbnail: `/Thumbnail/${encodeURIComponent("ep-17-relational-operators-thumbnail.png")}`, tags: ['Java', 'Operators'], category: 'Java Series', youtubeLink: '#' },
    { id: 18, title: "EP 18 – Logical Operators in Java (&&, ||, !) | Java Full Course 2026 #18", thumbnail: `/Thumbnail/${encodeURIComponent("ep-18-logical-operators-thumbnail.png")}`, tags: ['Java', 'Operators'], category: 'Java Series', youtubeLink: '#' },
    { id: 19, title: "EP 19 – Assignment Operators in Java | Java Full Course 2026 #19", thumbnail: `/Thumbnail/${encodeURIComponent("ep-19-assignment-operators-thumbnail.png")}`, tags: ['Java', 'Operators'], category: 'Java Series', youtubeLink: '#' },
    { id: 20, title: "EP 20 – Bitwise Operators in Java | Java Full Course 2026 #20", thumbnail: `/Thumbnail/${encodeURIComponent("ep-20-bitwise-operators-thumbnail.png")}`, tags: ['Java', 'Operators'], category: 'Java Series', youtubeLink: '#' },
    { id: 21, title: "EP 21 – Result Analyser Project | Java Operators Mini Project | Java Full Course 2026 #21", thumbnail: `/Thumbnail/${encodeURIComponent("ep-21-result-analyser-project.png")}`, tags: ['Java', 'Project'], category: 'Java Series', youtubeLink: '#' },
    { id: 22, title: "EP 22 – Conditional Statements in Java | Complete Overview | Java Full Course 2026 #22", thumbnail: `/Thumbnail/${encodeURIComponent("ep-22-conditional-statements-thumbnail.png")}`, tags: ['Java', 'Conditions'], category: 'Java Series', youtubeLink: '#' },
    { id: 23, title: "EP 23 – If Statement in Java | Introduction to Conditional Statements | Java Full Course 2026 #23", thumbnail: `/Thumbnail/${encodeURIComponent("ep-23-if-statement-thumbnail.png")}`, tags: ['Java', 'Conditions'], category: 'Java Series', youtubeLink: '#' },
    { id: 24, title: "EP 24 – If-Else Statement in Java | Real Life Examples Explained | Java Full Course 2026 #24", thumbnail: `/Thumbnail/${encodeURIComponent("ep-24-if-else-real-life-thumbnail.png")}`, tags: ['Java', 'Conditions'], category: 'Java Series', youtubeLink: '#' },
    { id: 25, title: "EP 25 – If Else If Statement in Java | Java Conditional Statements Tutorial | Java Full Course 2026 #25", thumbnail: `/Thumbnail/${encodeURIComponent("ep-25-If Else If Statement in Java in Hindi  Java Conditional Statements Tutorial.png")}`, tags: ['Java', 'Conditions'], category: 'Java Series', youtubeLink: '#' },
    { id: 26, title: "EP 26 – Nested If in Java 🔥 | Real Project: Weather Decision App 🌦️ | Java Full Course 2026 #26", thumbnail: `/Thumbnail/${encodeURIComponent("ep-26-Nested If in Java (Hindi) 🔥 Real Project  Weather Decision App 🌦️.png")}`, tags: ['Java', 'Conditions'], category: 'Java Series', youtubeLink: '#' },
    { id: 27, title: "EP 27 – Ternary Operator in Java | Find Maximum of 3 Numbers (Interview Question) | Java Full Course 2026 #27", thumbnail: `/Thumbnail/${encodeURIComponent("ep-27-Java Ternary Operator Explained  Find Maximum of 3 Numbers (Interview Quest.png")}`, tags: ['Java', 'Operators'], category: 'Java Series', youtubeLink: '#' },
    { id: 28, title: "EP 28 – Switch Statement in Java | Java Full Course 2026 #28", thumbnail: `/Thumbnail/${encodeURIComponent("ep-28-Switch Statement in Java.png")}`, tags: ['Java', 'Conditions'], category: 'Java Series', youtubeLink: '#' },
    { id: 29, title: "EP 29 – Student Result Analyzer Project v3.0 🔥 | Java Full Course 2026 #29", thumbnail: `/Thumbnail/${encodeURIComponent("ep-29-Student Result Analyzer Project v3.0 🔥  Java Full Course.png")}`, tags: ['Java', 'Project'], category: 'Java Series', youtubeLink: '#' },
    { id: 30, title: "EP 30 – Need of Loops in Java | Real Life Examples Explained | DRY Principle | Java Full Course 2026 #30", thumbnail: `/Thumbnail/${encodeURIComponent("ep-30-Need of Loops in Java  Real Life Examples Explained  DRY Principle.png")}`, tags: ['Java', 'Loops'], category: 'Java Series', youtubeLink: '#' },
    { id: 31, title: "EP 31 – While Loop in Java 💯 | From Basics to Advanced | Java Full Course 2026 #31", thumbnail: `/Thumbnail/${encodeURIComponent("ep-31-👉 One Video Enough to Master While Loop 💯  From Basics to Advanced.png")}`, tags: ['Java', 'Loops'], category: 'Java Series', youtubeLink: '#' },
    { id: 32, title: "EP 32 – Do While Loop in Java 😳 | Why It Exists + Real Life Example 🔥 | Java Full Course 2026 #32", thumbnail: `/Thumbnail/ep-32-do-while-loop-java.png`, tags: ['Java', 'Loops'], category: 'Java Series', youtubeLink: '#' },
    { id: 33, title: "EP 33 – For Loop in Java | You're Using Loops WRONG 😳 | Java Full Course 2026 #33", thumbnail: `/Thumbnail/ep-33-for-loop-wrong-java.png`, tags: ['Java', 'Loops'], category: 'Java Series', youtubeLink: '#' },
    { id: 34, title: "EP 34 – Nested For Loop in Java | Complete Tutorial with Examples | Java Full Course 2026 #34", thumbnail: `/Thumbnail/${encodeURIComponent("ep-34-Nested For Loop in Java  Complete Tutorial with Examples.png")}`, tags: ['Java', 'Loops'], category: 'Java Series', youtubeLink: '#' },
    { id: 35, title: "EP 35 – ATM Machine Project in Java 💳 | Java Full Course 2026 #35", thumbnail: `/Thumbnail/${encodeURIComponent("ep-35-Can a Beginner Build an ATM in Java Yes — And So Can You 💳  Java Full Course.png")}`, tags: ['Java', 'Project'], category: 'Java Series', youtubeLink: '#' },
    { id: 36, title: "EP 36 – Don't Start Pattern Programming ❌ Watch This First | Java Full Course 2026 #36", thumbnail: `/Thumbnail/${encodeURIComponent("ep-36-Don't Start Pattern Programming ❌ Watch This First.png")}`, tags: ['Java', 'Patterns'], category: 'Java Series', youtubeLink: '#' },
    { id: 37, title: "EP 37 – Need of OOPs in Java 🔥 | POP vs OOP | Why OOPs? | Java Full Course 2026 #37", thumbnail: `https://img.youtube.com/vi/Nfk5RzuZLRw/maxresdefault.jpg`, tags: ['Java', 'OOPs'], category: 'Java Series', youtubeLink: 'https://youtu.be/Nfk5RzuZLRw' },
];

export const COURSES: Course[] = [
    {
        id: 1,
        title: 'Java Full Course 2026 (37 Episodes)',
        description: 'Complete zero-to-hero Java playlist: variables, OOP, loops, projects & more. 37 episodes absolutely free on YouTube.',
        thumbnail: `/Thumbnail/ep-01-programming-introduction-thumbnail.png`,
        tags: ['Java', 'Playlist', 'Free'],
        category: 'Programming',
        youtubeLink: '/course/java',
        enrolledCount: 12450,
        rating: 4.9,
        isOngoing: true
    },
    // ── Career & Roadmap Videos ──
    {
        id: 2,
        title: 'Java Developer Roadmap 2026 | Complete Step-by-Step Guide',
        description: 'A complete, structured roadmap to becoming an industry-ready Java Developer in 2026 — from basics to Spring Boot, DSA, and beyond.',
        thumbnail: `https://img.youtube.com/vi/xRF7ecu9xwY/maxresdefault.jpg`,
        tags: ['Java', 'Roadmap', 'Career'],
        category: 'Career',
        youtubeLink: 'https://www.youtube.com/watch?v=xRF7ecu9xwY',
        enrolledCount: 8900,
        rating: 4.8
    },
    {
        id: 4,
        title: 'Data Analyst Roadmap 2026 | How to Become a Data Analyst',
        description: 'Complete career roadmap for aspiring Data Analysts — SQL, Python, Excel, Power BI, and real-world projects.',
        thumbnail: `https://img.youtube.com/vi/SQ5molhb4GY/maxresdefault.jpg`,
        tags: ['Data', 'Roadmap', 'Career'],
        category: 'Career',
        youtubeLink: 'https://youtu.be/SQ5molhb4GY'
    },
    {
        id: 5,
        title: 'Engineering is a Trap? Reality of B.Tech in 2026',
        description: 'Honest career advice on Engineering, branch selection, and how to make the most of B.Tech in the current job market.',
        thumbnail: `https://img.youtube.com/vi/NFhKdwdBvyw/maxresdefault.jpg`,
        tags: ['Career', 'Engineering', 'BeTech'],
        category: 'Career',
        youtubeLink: 'https://youtu.be/NFhKdwdBvyw'
    },
    // ── Technical Tutorials ──
    {
        id: 6,
        title: 'Git & GitHub Full Course 2026 — No Command Line Needed',
        description: 'Master Git and GitHub using GitHub Desktop — version control, branching, pull requests, and collaboration. Zero terminal required!',
        thumbnail: `https://img.youtube.com/vi/jkmwed5GHho/maxresdefault.jpg`,
        tags: ['Git', 'GitHub', 'Free'],
        category: 'Programming',
        youtubeLink: 'https://youtu.be/jkmwed5GHho'
    },
    {
        id: 7,
        title: 'What Is KDB+ & Q? Ultra-Fast Database Every Java Dev Should Know',
        description: 'Deep dive into KDB+ and Q language — the ultra-fast time-series database used in high-frequency trading and financial systems.',
        thumbnail: `https://img.youtube.com/vi/n_1RfLUrjBw/maxresdefault.jpg`,
        tags: ['KDB+', 'Database', 'Finance'],
        category: 'Programming',
        youtubeLink: 'https://www.youtube.com/watch?v=n_1RfLUrjBw'
    },
    {
        id: 8,
        title: "CAN'T SOLVE LEETCODE? Watch This Before Quitting!",
        description: 'Master the right strategy and mindset for solving LeetCode problems in 2026 — a must-watch for every placement aspirant.',
        thumbnail: `https://img.youtube.com/vi/GN1-CYLNcTQ/maxresdefault.jpg`,
        tags: ['LeetCode', 'DSA', 'Interview'],
        category: 'Interview Prep',
        youtubeLink: 'https://www.youtube.com/watch?v=GN1-CYLNcTQ'
    },
    {
        id: 9,
        title: 'Get Selected in GSoC 2026 | Complete Guide for Beginners',
        description: 'A comprehensive, step-by-step guide on how to apply and get selected in Google Summer of Code 2026 as a beginner.',
        thumbnail: `https://img.youtube.com/vi/QQvae70PC_k/maxresdefault.jpg`,
        tags: ['GSoC', 'Open Source', 'Google'],
        category: 'Career',
        youtubeLink: 'https://youtu.be/QQvae70PC_k'
    },
    // ── Resume & LinkedIn ──
    {
        id: 10,
        title: 'How to Create an ATS Friendly Resume | Fresher & Experienced',
        description: 'Build a resume that actually gets past ATS filters and lands you interviews at top tech companies — with live examples.',
        thumbnail: `https://img.youtube.com/vi/yIahHYjkIjs/maxresdefault.jpg`,
        tags: ['Resume', 'ATS', 'Job'],
        category: 'Interview Prep',
        youtubeLink: 'https://www.youtube.com/watch?v=yIahHYjkIjs'
    },
    {
        id: 11,
        title: 'No Interview? Fix Your GitHub Profile Now!',
        description: 'Learn how to optimize your GitHub profile to attract recruiters and get more interview calls — real tips that work.',
        thumbnail: `https://img.youtube.com/vi/81tyBnxODyU/maxresdefault.jpg`,
        tags: ['GitHub', 'Profile', 'Placement'],
        category: 'Interview Prep',
        youtubeLink: 'https://www.youtube.com/watch?v=81tyBnxODyU'
    },
    {
        id: 12,
        title: 'How to Create a LinkedIn Account in 2026 | Masterclass',
        description: 'Complete step-by-step LinkedIn profile setup masterclass for students and freshers to get noticed by recruiters.',
        thumbnail: `https://img.youtube.com/vi/2DwvB9gsVw0/maxresdefault.jpg`,
        tags: ['LinkedIn', 'Profile', 'Placement'],
        category: 'Interview Prep',
        youtubeLink: 'https://www.youtube.com/watch?v=2DwvB9gsVw0'
    },
    // ── Mindset & Motivation ──
    {
        id: 13,
        title: "YouTube Study Mistake: 90% Coders गलत वीडियो देख रहे हैं!",
        description: 'Are you watching the wrong YouTube videos? This video reveals the correct way to study programming and avoid the most common trap.',
        thumbnail: `https://img.youtube.com/vi/B_AJ01MTK2s/maxresdefault.jpg`,
        tags: ['Study', 'Mindset', 'Tips'],
        category: 'Mindset',
        youtubeLink: 'https://youtu.be/B_AJ01MTK2s'
    },
];

export const MASTERCLASSES: Masterclass[] = [
    { id: 1, title: 'Python Programming (30 Days Live Masterclass)', description: 'Master Python for Data, Automation & AI from scratch with daily live classes.', price: 499, enrollLink: '#', countdownTarget: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(), enrolledCount: 450, rating: 4.9 },
    { id: 2, title: 'SQL Mastery (30 Days Live Masterclass)', description: 'Master essential SQL queries, joins, and database design for data and backend roles.', price: 499, enrollLink: '#', countdownTarget: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(), enrolledCount: 380, rating: 4.8 },
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
    { id: 1, name: 'Aarav Sharma', role: 'Software Engineer', quote: "Vinay's tutorials are incredibly clear and concise. The Spring Boot series helped me land my first backend job!", avatar: 'https://picsum.photos/seed/person1/100/100' },
    { id: 2, name: 'Priya Patel', role: 'Student', quote: 'The DSA course is a lifesaver for campus placements. The explanations are simple and the problem-solving techniques are pure gold.', avatar: 'https://picsum.photos/seed/person2/100/100' },
    { id: 3, name: 'Rohan Verma', role: 'Frontend Developer', quote: 'I joined the ₹9 masterclass on a whim and was blown away by the value. Highly recommended for anyone looking to upskill quickly.', avatar: 'https://picsum.photos/seed/person3/100/100' },
];

export const SOCIAL_LINKS = {
    linkedin: 'https://www.linkedin.com/company/advindiancoder',
    github: 'https://github.com/Vinaykumarmahato',
    youtube: 'https://www.youtube.com/@ADVIndianCoder',
    instagram: 'https://www.instagram.com/advindiancoder.official',
    personalLinkedin: 'https://www.linkedin.com/in/vinay-kumar860964/',
    personalInstagram: 'https://www.instagram.com/vinay_software_engineer/',
    telegram: 'https://t.me/advindiancoder',
    discord: 'https://discord.gg/qApjKDjk',
    whatsapp: 'https://whatsapp.com/channel/0029VaPmCNEFcow7oeWCwh3c',
};
