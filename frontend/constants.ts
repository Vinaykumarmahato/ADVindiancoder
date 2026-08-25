
import { Course, Masterclass, Resource, Testimonial, Company, Stat } from './types';

export const NAV_LINKS = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'ADV Lab', path: '/adv-lab' },
    { name: 'ADV ExamHub', path: '/exam-hub' },
    { name: 'Practice Hub', path: '/practice' },
    { name: 'Swag Store 🎁', path: '/rewards' },
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

// ─── Java Full Course Playlist (All 56 Episodes) ────────────────────────────
export const JAVA_PLAYLIST = [
    { id:  1, title: "EP 01 – What is Programming? | Introduction to Programming | Java Full Course 2026 #1", thumbnail: `https://img.youtube.com/vi/IvTuFG-lXyw/maxresdefault.jpg`, tags: ["Java","Basics"], category: 'Java Series', youtubeLink: 'https://youtu.be/IvTuFG-lXyw' },
    { id:  2, title: "EP 02 – Low Level vs High Level Languages | Java Full Course 2026 #2", thumbnail: `https://img.youtube.com/vi/nkV2BO3h5J8/maxresdefault.jpg`, tags: ["Java","Theory"], category: 'Java Series', youtubeLink: 'https://youtu.be/nkV2BO3h5J8' },
    { id:  3, title: "EP 03 – Why Java in 2026? | Best Language for Freshers | Java Full Course 2026 #3", thumbnail: `https://img.youtube.com/vi/xoVVwGZE6gs/maxresdefault.jpg`, tags: ["Java","Career"], category: 'Java Series', youtubeLink: 'https://youtu.be/xoVVwGZE6gs' },
    { id:  4, title: "EP 04 – How Java Works | JDK → Compiler → Bytecode → JVM Explained | Java Full Course 2026 #4", thumbnail: `https://img.youtube.com/vi/AsMGN3NPSuI/maxresdefault.jpg`, tags: ["Java","Theory"], category: 'Java Series', youtubeLink: 'https://youtu.be/AsMGN3NPSuI' },
    { id:  5, title: "EP 05 – Java Features | Why Java is Powerful? | Java Full Course 2026 #5", thumbnail: `https://img.youtube.com/vi/PegCLdjGMaE/maxresdefault.jpg`, tags: ["Java","Theory"], category: 'Java Series', youtubeLink: 'https://youtu.be/PegCLdjGMaE' },
    { id:  6, title: "EP 06 – Java Setup | Install JDK + VS Code + Run First Program | Java Full Course 2026 #6", thumbnail: `https://img.youtube.com/vi/84n9BAu0FCE/maxresdefault.jpg`, tags: ["Java","Setup"], category: 'Java Series', youtubeLink: 'https://youtu.be/84n9BAu0FCE' },
    { id:  7, title: "EP 07 – From Real World to Code | How Programmers Think | Java Full Course 2026 #7", thumbnail: `https://img.youtube.com/vi/PDiqgM5mMUw/maxresdefault.jpg`, tags: ["Java","Mindset"], category: 'Java Series', youtubeLink: 'https://youtu.be/PDiqgM5mMUw' },
    { id:  8, title: "EP 08 – Methods in Java | Functions Explained from Scratch | Java Full Course 2026 #8", thumbnail: `https://img.youtube.com/vi/JldKp7pXRCM/maxresdefault.jpg`, tags: ["Java","Methods"], category: 'Java Series', youtubeLink: 'https://youtu.be/JldKp7pXRCM' },
    { id:  9, title: "EP 09 – Static vs Dynamic Programming Languages | Java Full Course 2026 #9", thumbnail: `https://img.youtube.com/vi/qkfxULQ0YQE/maxresdefault.jpg`, tags: ["Java","Theory"], category: 'Java Series', youtubeLink: 'https://youtu.be/qkfxULQ0YQE' },
    { id: 10, title: "EP 10 – Variables in Java | Storage, Scope & Memory | Java Full Course 2026 #10", thumbnail: `https://img.youtube.com/vi/hnQlsMoyjZM/maxresdefault.jpg`, tags: ["Java","Variables"], category: 'Java Series', youtubeLink: 'https://youtu.be/hnQlsMoyjZM' },
    { id: 11, title: "EP 11 – Data Types in Java | Primitive & Non-Primitive Explained | Java Full Course 2026 #11", thumbnail: `https://img.youtube.com/vi/k4aJBTHdu1Q/maxresdefault.jpg`, tags: ["Java","Types"], category: 'Java Series', youtubeLink: 'https://youtu.be/k4aJBTHdu1Q' },
    { id: 12, title: "EP 12 – Student Management Project | Java Variables & Data Types Project | Java Full Course 2026 #12", thumbnail: `https://img.youtube.com/vi/lvF3ZaW_KRg/maxresdefault.jpg`, tags: ["Java","Project"], category: 'Java Series', youtubeLink: 'https://youtu.be/lvF3ZaW_KRg' },
    { id: 13, title: "EP 13 – Type Casting in Java | Implicit & Explicit Conversion | Java Full Course 2026 #13", thumbnail: `https://img.youtube.com/vi/Xg9X_cdPNLk/maxresdefault.jpg`, tags: ["Java","Types"], category: 'Java Series', youtubeLink: 'https://youtu.be/Xg9X_cdPNLk' },
    { id: 14, title: "EP 14 – Why Operators Exist? | The CPU-Level Truth | Java Full Course 2026 #14", thumbnail: `https://img.youtube.com/vi/6JCqR59XA0k/maxresdefault.jpg`, tags: ["Java","Operators"], category: 'Java Series', youtubeLink: 'https://youtu.be/6JCqR59XA0k' },
    { id: 15, title: "EP 15 – Arithmetic Operators in Java | Java Full Course 2026 #15", thumbnail: `https://img.youtube.com/vi/65R9jw3bxws/maxresdefault.jpg`, tags: ["Java","Operators"], category: 'Java Series', youtubeLink: 'https://youtu.be/65R9jw3bxws' },
    { id: 16, title: "EP 16 – Unary Operators in Java | Java Full Course 2026 #16", thumbnail: `https://img.youtube.com/vi/h8TJDCHpjCc/maxresdefault.jpg`, tags: ["Java","Operators"], category: 'Java Series', youtubeLink: 'https://youtu.be/h8TJDCHpjCc' },
    { id: 17, title: "EP 17 – Relational Operators in Java | Java Full Course 2026 #17", thumbnail: `https://img.youtube.com/vi/i69PsllUNLI/maxresdefault.jpg`, tags: ["Java","Operators"], category: 'Java Series', youtubeLink: 'https://youtu.be/i69PsllUNLI' },
    { id: 18, title: "EP 18 – Logical Operators in Java (&&, ||, !) | Java Full Course 2026 #18", thumbnail: `https://img.youtube.com/vi/mYMzF7UFjOs/maxresdefault.jpg`, tags: ["Java","Operators"], category: 'Java Series', youtubeLink: 'https://youtu.be/mYMzF7UFjOs' },
    { id: 19, title: "EP 19 – Assignment Operators in Java | Java Full Course 2026 #19", thumbnail: `https://img.youtube.com/vi/UI-hXuWQJlo/maxresdefault.jpg`, tags: ["Java","Operators"], category: 'Java Series', youtubeLink: 'https://youtu.be/UI-hXuWQJlo' },
    { id: 20, title: "EP 20 – Bitwise Operators in Java | Java Full Course 2026 #20", thumbnail: `https://img.youtube.com/vi/TUwb1rXDE-k/maxresdefault.jpg`, tags: ["Java","Operators"], category: 'Java Series', youtubeLink: 'https://youtu.be/TUwb1rXDE-k' },
    { id: 21, title: "EP 21 – Result Analyser Project | Java Operators Mini Project | Java Full Course 2026 #21", thumbnail: `https://img.youtube.com/vi/1pcPoZqz08c/maxresdefault.jpg`, tags: ["Java","Project"], category: 'Java Series', youtubeLink: 'https://youtu.be/1pcPoZqz08c' },
    { id: 22, title: "EP 22 – Conditional Statements in Java | Complete Overview | Java Full Course 2026 #22", thumbnail: `https://img.youtube.com/vi/3eA3B1-0WSk/maxresdefault.jpg`, tags: ["Java","Conditions"], category: 'Java Series', youtubeLink: 'https://youtu.be/3eA3B1-0WSk' },
    { id: 23, title: "EP 23 – If Statement in Java | Introduction to Conditional Statements | Java Full Course 2026 #23", thumbnail: `https://img.youtube.com/vi/aPa1OjMA6bs/maxresdefault.jpg`, tags: ["Java","Conditions"], category: 'Java Series', youtubeLink: 'https://youtu.be/aPa1OjMA6bs' },
    { id: 24, title: "EP 24 – If-Else Statement in Java | Real Life Examples Explained | Java Full Course 2026 #24", thumbnail: `https://img.youtube.com/vi/CSXI2E_VfKI/maxresdefault.jpg`, tags: ["Java","Conditions"], category: 'Java Series', youtubeLink: 'https://youtu.be/CSXI2E_VfKI' },
    { id: 25, title: "EP 25 – If Else If Statement in Java | Java Conditional Statements Tutorial | Java Full Course 2026 #25", thumbnail: `https://img.youtube.com/vi/ZOVaRsm9QCw/maxresdefault.jpg`, tags: ["Java","Conditions"], category: 'Java Series', youtubeLink: 'https://youtu.be/ZOVaRsm9QCw' },
    { id: 26, title: "EP 26 – Nested If in Java 🔥 | Real Project: Weather Decision App 🌦️ | Java Full Course 2026 #26", thumbnail: `https://img.youtube.com/vi/kCe5ZCjF5mU/maxresdefault.jpg`, tags: ["Java","Conditions"], category: 'Java Series', youtubeLink: 'https://youtu.be/kCe5ZCjF5mU' },
    { id: 27, title: "EP 27 – Ternary Operator in Java | Find Maximum of 3 Numbers (Interview Question) | Java Full Course 2026 #27", thumbnail: `https://img.youtube.com/vi/WlZnyin9dMo/maxresdefault.jpg`, tags: ["Java","Operators"], category: 'Java Series', youtubeLink: 'https://youtu.be/WlZnyin9dMo' },
    { id: 28, title: "EP 28 – Switch Statement in Java | Java Full Course 2026 #28", thumbnail: `https://img.youtube.com/vi/Yi0T-u4U_no/maxresdefault.jpg`, tags: ["Java","Conditions"], category: 'Java Series', youtubeLink: 'https://youtu.be/Yi0T-u4U_no' },
    { id: 29, title: "EP 29 – Student Result Analyzer Project v3.0 🔥 | Java Full Course 2026 #29", thumbnail: `https://img.youtube.com/vi/AIzKCZIXH4I/maxresdefault.jpg`, tags: ["Java","Project"], category: 'Java Series', youtubeLink: 'https://youtu.be/AIzKCZIXH4I' },
    { id: 30, title: "EP 30 – Need of Loops in Java | Real Life Examples Explained | DRY Principle | Java Full Course 2026 #30", thumbnail: `https://img.youtube.com/vi/z7FeFJejgHA/maxresdefault.jpg`, tags: ["Java","Loops"], category: 'Java Series', youtubeLink: 'https://youtu.be/z7FeFJejgHA' },
    { id: 31, title: "EP 31 – While Loop in Java 💯 | From Basics to Advanced | Java Full Course 2026 #31", thumbnail: `https://img.youtube.com/vi/lYVyY7B5gLw/maxresdefault.jpg`, tags: ["Java","Loops"], category: 'Java Series', youtubeLink: 'https://youtu.be/lYVyY7B5gLw' },
    { id: 32, title: "EP 32 – Do While Loop in Java 😳 | Why It Exists + Real Life Example 🔥 | Java Full Course 2026 #32", thumbnail: `https://img.youtube.com/vi/IJnotbUSbfI/maxresdefault.jpg`, tags: ["Java","Loops"], category: 'Java Series', youtubeLink: 'https://youtu.be/IJnotbUSbfI' },
    { id: 33, title: "EP 33 – For Loop in Java | You're Using Loops WRONG 😳 | Java Full Course 2026 #33", thumbnail: `https://img.youtube.com/vi/xQmsxjF7XP8/maxresdefault.jpg`, tags: ["Java","Loops"], category: 'Java Series', youtubeLink: 'https://youtu.be/xQmsxjF7XP8' },
    { id: 34, title: "EP 34 – Nested For Loop in Java | Complete Tutorial with Examples | Java Full Course 2026 #34", thumbnail: `https://img.youtube.com/vi/BgOCdxjnJIk/maxresdefault.jpg`, tags: ["Java","Loops"], category: 'Java Series', youtubeLink: 'https://youtu.be/BgOCdxjnJIk' },
    { id: 35, title: "EP 35 – ATM Machine Project in Java 💳 | Java Full Course 2026 #35", thumbnail: `https://img.youtube.com/vi/WQz4v5ZERJE/maxresdefault.jpg`, tags: ["Java","Project"], category: 'Java Series', youtubeLink: 'https://youtu.be/WQz4v5ZERJE' },
    { id: 36, title: "EP 36 – Don't Start Pattern Programming ❌ Watch This First | Java Full Course 2026 #36", thumbnail: `https://img.youtube.com/vi/OQ8-_LNw8M4/maxresdefault.jpg`, tags: ["Java","Patterns"], category: 'Java Series', youtubeLink: 'https://youtu.be/OQ8-_LNw8M4' },
    { id: 37, title: "EP 37 – Need of OOPs in Java 🔥 | POP vs OOP | Why OOPs? | Java Full Course 2026 #37", thumbnail: `https://img.youtube.com/vi/Nfk5RzuZLRw/maxresdefault.jpg`, tags: ["Java","OOPs"], category: 'Java Series', youtubeLink: 'https://youtu.be/Nfk5RzuZLRw' },
    { id: 38, title: "EP 38 – Objects, Memory Management & Method Overloading | Java Full Course 2026 #38", thumbnail: `https://img.youtube.com/vi/T2EJGxuu1yE/maxresdefault.jpg`, tags: ["Java","OOPs","Memory"], category: 'Java Series', youtubeLink: 'https://youtu.be/T2EJGxuu1yE' },
    { id: 39, title: "EP 39 – Constructors in Java 🔥 | Default, Parameterized & Constructor Overloading | Java Full Course 2026 #39", thumbnail: `https://img.youtube.com/vi/hJV7qCee03I/maxresdefault.jpg`, tags: ["Java","OOPs","Constructors"], category: 'Java Series', youtubeLink: 'https://youtu.be/hJV7qCee03I' },
    { id: 40, title: "EP 40 – Static Keyword Deep Dive | Class Loading, JVM Memory & Static Blocks | Java Full Course 2026 #40", thumbnail: `https://img.youtube.com/vi/h2OQ4kw43yQ/maxresdefault.jpg`, tags: ["Java","OOPs","JVM","Static"], category: 'Java Series', youtubeLink: 'https://youtu.be/h2OQ4kw43yQ' },
    { id: 41, title: "EP 41 – Static Variable से Website का Visitor Counter कैसे बनाएं? | Java Project Hindi | Java Full Course 2026 #41", thumbnail: `https://img.youtube.com/vi/Sf7BbI1UJHs/maxresdefault.jpg`, tags: ["Java","OOPs","Static","Project"], category: 'Java Series', youtubeLink: 'https://youtu.be/Sf7BbI1UJHs' },
    { id: 42, title: "EP 42 – Why Arrays Exist in Java 🤯 | Arrays Explained Internally | Java Full Course 2026 #42", thumbnail: `https://img.youtube.com/vi/4n8aYTA6gjQ/maxresdefault.jpg`, tags: ["Java","Arrays","Basics"], category: 'Java Series', youtubeLink: 'https://youtu.be/4n8aYTA6gjQ' },
    { id: 43, title: "EP 43 – Array Declaration vs Initialization in Java | Heap & Stack Memory Explained | Java Full Course 2026 #43", thumbnail: `https://img.youtube.com/vi/ugXrrzobUHs/maxresdefault.jpg`, tags: ["Java","Arrays","Memory"], category: 'Java Series', youtubeLink: 'https://youtu.be/ugXrrzobUHs' },
    { id: 44, title: "EP 44 – 1D Array in Java | Enhanced For Loop Explained with Examples | Java Full Course 2026 #44", thumbnail: `https://img.youtube.com/vi/tjsZeGnHva4/maxresdefault.jpg`, tags: ["Java","Arrays","Loops"], category: 'Java Series', youtubeLink: 'https://youtu.be/tjsZeGnHva4' },
    { id: 45, title: "EP 45 – 2D Array in Java Tutorial | Matrix & Grid Representation | Java Full Course 2026 #45", thumbnail: `https://img.youtube.com/vi/NdBQvFb0jsU/maxresdefault.jpg`, tags: ["Java","Arrays","2D Arrays"], category: 'Java Series', youtubeLink: 'https://youtu.be/NdBQvFb0jsU' },
    { id: 46, title: "EP 46 – Jagged Arrays in Java Explained (Uneven / Ragged Arrays) | Java Full Course 2026 #46", thumbnail: `https://img.youtube.com/vi/Tr2F6ySKGS4/maxresdefault.jpg`, tags: ["Java","Arrays","Jagged Arrays"], category: 'Java Series', youtubeLink: 'https://youtu.be/Tr2F6ySKGS4' },
    { id: 47, title: "EP 47 – Multidimensional Array in Java (3D Array with Memory Map) | Java Full Course 2026 #47", thumbnail: `https://img.youtube.com/vi/pTq116MR-Ds/maxresdefault.jpg`, tags: ["Java","Arrays","3D Arrays"], category: 'Java Series', youtubeLink: 'https://youtu.be/pTq116MR-Ds' },
    { id: 48, title: "EP 48 – Array of Objects in Java | Real-Life OOP Integration | Java Full Course 2026 #48", thumbnail: `https://img.youtube.com/vi/qfo8fX5tHLA/maxresdefault.jpg`, tags: ["Java","Arrays","OOPs","Objects"], category: 'Java Series', youtubeLink: 'https://youtu.be/qfo8fX5tHLA' },
    { id: 49, title: "EP 49 – Drawbacks & Limitations of Arrays in Java (Why Collections Framework?) | Java Full Course 2026 #49", thumbnail: `https://img.youtube.com/vi/iPV6PF28nlg/maxresdefault.jpg`, tags: ["Java","Arrays","Collections"], category: 'Java Series', youtubeLink: 'https://youtu.be/iPV6PF28nlg' },
    { id: 50, title: "EP 50 – String in Java Explained | Class, Object & Heap Memory | Java Full Course 2026 #50", thumbnail: `https://img.youtube.com/vi/90HtCz7mNiM/maxresdefault.jpg`, tags: ["Java","Strings","Memory"], category: 'Java Series', youtubeLink: 'https://youtu.be/90HtCz7mNiM' },
    { id: 51, title: "EP 51 – Types of String in Java | Mutable vs Immutable | Why String is Immutable? | Java Full Course 2026 #51", thumbnail: `https://img.youtube.com/vi/e-cgU433hgU/maxresdefault.jpg`, tags: ["Java","Strings","Immutability"], category: 'Java Series', youtubeLink: 'https://youtu.be/e-cgU433hgU' },
    { id: 52, title: "EP 52 – Immutable String | String Constant Pool (SCP) vs Heap Memory | Java Full Course 2026 #52", thumbnail: `https://img.youtube.com/vi/qhYvvOd9a4k/maxresdefault.jpg`, tags: ["Java","Strings","SCP"], category: 'Java Series', youtubeLink: 'https://youtu.be/qhYvvOd9a4k' },
    { id: 53, title: "EP 53 – String Comparison in Java | == vs equals vs equalsIgnoreCase vs compareTo | Java Full Course 2026 #53", thumbnail: `https://img.youtube.com/vi/P2y2j3V3hWw/maxresdefault.jpg`, tags: ["Java","Strings","Comparison"], category: 'Java Series', youtubeLink: 'https://youtu.be/P2y2j3V3hWw' },
    { id: 54, title: "EP 54 – String Concatenation in Java | Heap Memory & SCP | + vs concat | Java Full Course 2026 #54", thumbnail: `https://img.youtube.com/vi/iRcRXyllNTM/maxresdefault.jpg`, tags: ["Java","Strings","Concatenation"], category: 'Java Series', youtubeLink: 'https://youtu.be/iRcRXyllNTM' },
    { id: 55, title: "EP 55 – Java String Methods Complete Master Tutorial | 20+ Inbuilt Methods | Java Full Course 2026 #55", thumbnail: `https://img.youtube.com/vi/OfhO2PjAd7c/maxresdefault.jpg`, tags: ["Java","Strings","Methods"], category: 'Java Series', youtubeLink: 'https://youtu.be/OfhO2PjAd7c' },
    { id: 56, title: "EP 56 – String Problems Roadmap & Core Practice Algorithms | Interview Questions | Java Full Course 2026 #56", thumbnail: `https://img.youtube.com/vi/sNIOLHcelEs/maxresdefault.jpg`, tags: ["Java","Strings","DSA"], category: 'Java Series', youtubeLink: 'https://youtu.be/sNIOLHcelEs' },
];

export const COURSES: Course[] = [
    {
        id: "java-full-course-2026",
        title: "Java Full Course 2026: Zero to Hero (56 Episodes)",
        description: "Master Java from scratch with zero prior knowledge. This 56-episode comprehensive series covers everything from basics, OOPs, static/constructors to complete Arrays (1D, 2D, Jagged, 3D, Objects) and Strings (Immutability, SCP, Methods, DSA) with AI-driven learning approach.",
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
        id: "java-developer-roadmap-2026",
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
        id: "data-analyst-roadmap-2026",
        title: 'Data Analyst Roadmap 2026 | How to Become a Data Analyst',
        description: 'Complete career roadmap for aspiring Data Analysts — SQL, Python, Excel, Power BI, and real-world projects.',
        thumbnail: `https://img.youtube.com/vi/SQ5molhb4GY/maxresdefault.jpg`,
        tags: ['Data', 'Roadmap', 'Career'],
        category: 'Career',
        youtubeLink: 'https://youtu.be/SQ5molhb4GY'
    },
    {
        id: "engineering-reality-2026",
        title: 'Engineering is a Trap? Reality of B.Tech in 2026',
        description: 'Honest career advice on Engineering, branch selection, and how to make the most of B.Tech in the current job market.',
        thumbnail: `https://img.youtube.com/vi/NFhKdwdBvyw/maxresdefault.jpg`,
        tags: ['Career', 'Engineering', 'BeTech'],
        category: 'Career',
        youtubeLink: 'https://youtu.be/NFhKdwdBvyw'
    },
    {
        id: "only-1-percent-developers-survive",
        title: 'Only 1% Developers Will Survive — Are You One of Them?',
        description: 'The harsh reality of AI and software development in 2026. Find out if you have what it takes to survive and thrive in the changing tech landscape.',
        thumbnail: `https://img.youtube.com/vi/8ch7uaBHaBc/maxresdefault.jpg`,
        tags: ['Career', 'AI', 'Developer'],
        category: 'Career',
        youtubeLink: 'https://youtu.be/8ch7uaBHaBc'
    },
    // ── Technical Tutorials ──
    {
        id: "git-github-full-course-2026",
        title: 'Git & GitHub Full Course 2026 — No Command Line Needed',
        description: 'Master Git and GitHub using GitHub Desktop — version control, branching, pull requests, and collaboration. Zero terminal required!',
        thumbnail: `https://img.youtube.com/vi/jkmwed5GHho/maxresdefault.jpg`,
        tags: ['Git', 'GitHub', 'Free'],
        category: 'Programming',
        youtubeLink: 'https://youtu.be/jkmwed5GHho'
    },
    {
        id: "kdb-plus-q-database-tutorial",
        title: 'What Is KDB+ & Q? Ultra-Fast Database Every Java Dev Should Know',
        description: 'Deep dive into KDB+ and Q language — the ultra-fast time-series database used in high-frequency trading and financial systems.',
        thumbnail: `https://img.youtube.com/vi/n_1RfLUrjBw/maxresdefault.jpg`,
        tags: ['KDB+', 'Database', 'Finance'],
        category: 'Programming',
        youtubeLink: 'https://www.youtube.com/watch?v=n_1RfLUrjBw'
    },
    {
        id: "leetcode-strategy-2026",
        title: "CAN'T SOLVE LEETCODE? Watch This Before Quitting!",
        description: 'Master the right strategy and mindset for solving LeetCode problems in 2026 — a must-watch for every placement aspirant.',
        thumbnail: `https://img.youtube.com/vi/GN1-CYLNcTQ/maxresdefault.jpg`,
        tags: ['LeetCode', 'DSA', 'Interview'],
        category: 'Interview Prep',
        youtubeLink: 'https://www.youtube.com/watch?v=GN1-CYLNcTQ'
    },
    {
        id: "gsoc-2026-guide",
        title: 'Get Selected in GSoC 2026 | Complete Guide for Beginners',
        description: 'A comprehensive, step-by-step guide on how to apply and get selected in Google Summer of Code 2026 as a beginner.',
        thumbnail: `https://img.youtube.com/vi/QQvae70PC_k/maxresdefault.jpg`,
        tags: ['GSoC', 'Open Source', 'Google'],
        category: 'Career',
        youtubeLink: 'https://youtu.be/QQvae70PC_k'
    },
    // ── Resume & LinkedIn ──
    {
        id: "ats-friendly-resume-guide",
        title: 'How to Create an ATS Friendly Resume | Fresher & Experienced',
        description: 'Build a resume that actually gets past ATS filters and lands you interviews at top tech companies — with live examples.',
        thumbnail: `https://img.youtube.com/vi/yIahHYjkIjs/maxresdefault.jpg`,
        tags: ['Resume', 'ATS', 'Job'],
        category: 'Interview Prep',
        youtubeLink: 'https://www.youtube.com/watch?v=yIahHYjkIjs'
    },
    {
        id: "github-profile-optimization",
        title: 'No Interview? Fix Your GitHub Profile Now!',
        description: 'Learn how to optimize your GitHub profile to attract recruiters and get more interview calls — real tips that work.',
        thumbnail: `https://img.youtube.com/vi/81tyBnxODyU/maxresdefault.jpg`,
        tags: ['GitHub', 'Profile', 'Placement'],
        category: 'Interview Prep',
        youtubeLink: 'https://www.youtube.com/watch?v=81tyBnxODyU'
    },
    {
        id: "linkedin-masterclass-2026",
        title: 'How to Create a LinkedIn Account in 2026 | Masterclass',
        description: 'Complete step-by-step LinkedIn profile setup masterclass for students and freshers to get noticed by recruiters.',
        thumbnail: `https://img.youtube.com/vi/2DwvB9gsVw0/maxresdefault.jpg`,
        tags: ['LinkedIn', 'Profile', 'Placement'],
        category: 'Interview Prep',
        youtubeLink: 'https://www.youtube.com/watch?v=2DwvB9gsVw0'
    },
    // ── Mindset & Motivation ──
    {
        id: "youtube-study-traps",
        title: "YouTube Study Mistake: 90% Coders गलत वीडियो देख रहे हैं!",
        description: 'Are you watching the wrong YouTube videos? This video reveals the correct way to study programming and avoid the most common trap.',
        thumbnail: `https://img.youtube.com/vi/B_AJ01MTK2s/maxresdefault.jpg`,
        tags: ['Study', 'Mindset', 'Tips'],
        category: 'Mindset',
        youtubeLink: 'https://youtu.be/B_AJ01MTK2s'
    },
];

export const MASTERCLASSES: Masterclass[] = [
    { id: 1, title: 'Python Programming (30 Days Live Masterclass)', description: 'Master Python for Data, Automation & AI from scratch with daily live classes.', price: 999, enrollLink: '#', countdownTarget: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(), enrolledCount: 450, rating: 4.9 },
    { id: 2, title: 'SQL Mastery (30 Days Live Masterclass)', description: 'Master essential SQL queries, joins, and database design for data and backend roles.', price: 999, enrollLink: '#', countdownTarget: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(), enrolledCount: 380, rating: 4.8 },
    { id: 3, title: 'Java Masterclass (30 Days Live Masterclass)', description: 'Core Java, OOPs, Collections, and building real-world enterprise applications.', price: 999, enrollLink: '#', countdownTarget: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString() },
    { id: 4, title: 'Prompt Engineering & Generative AI (30 Days Live)', description: 'Master ChatGPT, Claude, and Midjourney to automate and supercharge your career.', price: 999, enrollLink: '#', countdownTarget: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString() },
    { id: 5, title: 'Data Science Mastery (30 Days Live)', description: 'Master Python, Machine Learning, and Predictive Modeling with real-world datasets.', price: 999, enrollLink: '#', countdownTarget: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString() },
    { id: 6, title: 'Data Analytics Mastery (30 Days Live)', description: 'Master SQL, Advanced Excel, Power BI, and Tableau for Data-Driven BI roles.', price: 999, enrollLink: '#', countdownTarget: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString() },
    { id: 7, title: 'Machine Learning (ML) (30 Days Live)', description: 'Deep dive into Deep Learning, Neural Networks, and AI Model Deployment.', price: 999, enrollLink: '#', countdownTarget: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString() },
    { id: 8, title: 'Digital Marketing Mastery (30 Days Live)', description: 'Master SEO, Ads, and Content Strategy to skyrocket your online presence.', price: 999, enrollLink: '#', countdownTarget: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString() },
    { id: 9, title: 'Software Testing QA (30 Days Live)', description: 'Manual Testing, Jira, Selenium Automation, and API Testing for high-pay roles.', price: 999, enrollLink: '#', countdownTarget: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString() },
    { id: 10, title: 'DevOps & Cloud (30 Days Live)', description: 'Master Linux, Docker, Kubernetes, Jenkins, and AWS for high-scale environments.', price: 999, enrollLink: '#', countdownTarget: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString() },
    { id: 11, title: 'Aptitude for Placements (30 Days Live)', description: 'Crack first-round exams for MNCs with Quants, Logic & Speed Math tricks.', price: 999, enrollLink: '#', countdownTarget: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString() },
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
    { id: 405, title: 'Page Promotion (15 Days)', category: 'Growth', subject: 'Promo', type: 'Service', link: '#', metadata: 'Extended Promo', price: 999, isPremium: true, thumbnail: 'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=400&q=80' },
    // --- CONTENT CREATION ---
    { id: 501, title: 'Study Captions / Post Ideas', category: 'Content', subject: 'Social', type: 'Service', link: '#', metadata: 'Ideas', price: 149, isPremium: true, thumbnail: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&w=400&q=80' },
    { id: 502, title: 'Reel Script (Study Niche)', category: 'Content', subject: 'Video', type: 'Service', link: '#', metadata: 'Scripts', price: 199, isPremium: true, thumbnail: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=400&q=80' },
    { id: 503, title: 'Weekly Content Plan', category: 'Content', subject: 'Planning', type: 'Service', link: '#', metadata: '1 Week', price: 299, isPremium: true, thumbnail: 'https://images.unsplash.com/photo-1506784951206-a8fdfc73abcb?auto=format&fit=crop&w=400&q=80' },
    { id: 504, title: 'Monthly Content Plan', category: 'Content', subject: 'Planning', type: 'Service', link: '#', metadata: '1 Month', price: 599, isPremium: true, thumbnail: 'https://images.unsplash.com/photo-1506784951206-a8fdfc73abcb?auto=format&fit=crop&w=400&q=80' },
    // --- EDUCATOR SERVICES ---
    { id: 601, title: 'Teaching Notes Preparation', category: 'Educator', subject: 'Prep', type: 'Service', link: '#', metadata: 'Teachers', price: 999, isPremium: true, thumbnail: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=400&q=80' },
    { id: 602, title: 'Coaching Material Support', category: 'Educator', subject: 'Institute', type: 'Service', link: '#', metadata: 'Centers', price: 599, isPremium: true, thumbnail: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=400&q=80' },
    { id: 603, title: 'Student Worksheets', category: 'Educator', subject: 'Practice', type: 'Service', link: '#', metadata: 'Custom', price: 299, isPremium: true, thumbnail: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=400&q=80' },
    // --- COMBO PACKAGES ---
    { id: 701, title: 'Notes + PDF + Formatting', category: 'Combo', subject: 'Bundle', type: 'Package', link: '#', metadata: 'Complete Set', price: 999, isPremium: true, thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80' },
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
