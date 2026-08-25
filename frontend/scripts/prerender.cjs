const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '../dist');
const indexHtmlPath = path.join(distDir, 'index.html');
const baseUrl = 'https://www.advindiancoder.com';

if (!fs.existsSync(indexHtmlPath)) {
    console.error('dist/index.html not found! Run vite build first.');
    process.exit(1);
}

const templateHtml = fs.readFileSync(indexHtmlPath, 'utf8');

// Course Catalog Metadata
const COURSE_METADATA = {
    'html': {
        title: 'HTML Full Course 2026: Zero to Hero',
        tagline: 'Master Modern Semantic HTML5, Boilerplates, Forms, Audio/Video, SEO & Web Accessibility',
        description: 'Complete HTML5 tutorial from scratch. Master document structure, semantic tags, forms, tables, canvas, accessibility (a11y), and SEO best practices with interactive ADV Lab live examples.',
        category: 'Frontend Development',
        level: 'Beginner to Advanced',
        keywords: 'html tutorial, html5 full course, learn html, semantic html, html forms, html tags, web development basics, adv indian coder html',
        topics: ['Document Structure & DOCTYPE', 'Semantic Elements (header, nav, main, section, footer)', 'Headings, Paragraphs & Typography', 'Hyperlinks & Anchor Attributes', 'Images, Picture Elements & Responsive Media', 'Lists (Ordered, Unordered, Description)', 'HTML Tables & Data Layouts', 'Forms, Form Validation & Input Types', 'Audio, Video & Media Embedding', 'HTML5 Canvas & SVG Graphics', 'iFrames & Embedded Widgets', 'Web Accessibility (ARIA & Roles)', 'HTML Meta Tags & SEO Optimization', 'Web Storage API (localStorage, sessionStorage)']
    },
    'css': {
        title: 'CSS & Modern UI Mastery Course 2026',
        tagline: 'Flexbox, CSS Grid, Modern Layouts, Animations, Transitions & Responsive Design',
        description: 'Master modern CSS from fundamentals to advanced UI architecture. Learn Flexbox, CSS Grid, custom properties, animations, media queries, and responsive web design with real-world projects.',
        category: 'Frontend Development',
        level: 'Beginner to Advanced',
        keywords: 'css tutorial, learn css, css flexbox, css grid, responsive design, css animations, modern css, adv indian coder css',
        topics: ['CSS Syntax, Selectors & Specificity', 'Box Model (Margin, Border, Padding, Content)', 'Colors, Backgrounds & Gradients', 'Typography & Web Fonts', 'Display Property & Positioning (Relative, Absolute, Fixed, Sticky)', 'Flexbox Complete Architecture', 'CSS Grid Layout System', 'Transitions & Keyframe Animations', 'Transforms (2D & 3D)', 'Media Queries & Mobile-First Responsive Design', 'CSS Custom Properties (Variables)', 'Pseudo-classes & Pseudo-elements', 'Modern CSS Functions (clamp, min, max, calc)', 'BEM Methodology & Architecture']
    },
    'javascript': {
        title: 'Modern JavaScript (ES6+ to ES2026) Complete Course',
        tagline: 'Deep Dive into Event Loop, Closures, Async/Await, DOM Manipulation, Modules & Web APIs',
        description: 'Master JavaScript from basic syntax to advanced asynchronous architecture. Covers closures, prototypes, event loop, Promises, async/await, DOM APIs, and modern ESNext features.',
        category: 'Programming & Web',
        level: 'Beginner to Advanced',
        keywords: 'javascript tutorial, learn javascript, modern js es6, js event loop, closures in js, async await javascript, adv indian coder javascript',
        topics: ['Variables (let, const, var) & Scoping', 'Data Types & Type Coercion', 'Operators, Expressions & Control Flow', 'Functions, Arrow Functions & Higher-Order Functions', 'Objects, Prototypes & Prototypal Inheritance', 'Arrays & Modern Array Methods (map, filter, reduce)', 'Closures & Lexical Scope', 'Event Loop, Call Stack & Concurrency Model', 'Promises & Async/Await Architecture', 'DOM Manipulation & Event Handling', 'Fetch API, AJAX & REST Integration', 'ES6+ Modules (Import/Export)', 'Error Handling & Debugging Techniques', 'Web Storage & Browser APIs']
    },
    'adv-css': {
        title: 'Advanced CSS Architecture & Houdini Course',
        tagline: 'CSS Custom Properties, Container Queries, CSS Houdini, Subgrid & Performance Optimization',
        description: 'Level up your frontend engineering with advanced CSS techniques. Master container queries, subgrid, cascade layers (@layer), CSS Houdini APIs, and GPU-accelerated rendering.',
        category: 'Frontend Engineering',
        level: 'Advanced',
        keywords: 'advanced css, container queries, css subgrid, css houdini, css performance, adv indian coder',
        topics: ['CSS Cascade Layers (@layer)', 'Container Queries & Component Responsiveness', 'CSS Subgrid & Advanced Grid Layouts', 'CSS Houdini Paint & Typed OM APIs', 'Performance Optimization & GPU Acceleration', 'Complex Clip-Paths & Masking', 'Modern Color Spaces (oklch, lch, display-p3)', 'CSS Scroll-Driven Animations']
    },
    'bootstrap': {
        title: 'Bootstrap 5 Rapid Prototyping & Component Course',
        tagline: 'Master Responsive Grid System, Utility Classes, Flexbox Utilities & Custom Theming',
        description: 'Build responsive, mobile-first websites fast with Bootstrap 5. Learn the 12-column grid, navbar, modals, cards, utility classes, and Sass customization.',
        category: 'Frontend Frameworks',
        level: 'Beginner to Intermediate',
        keywords: 'bootstrap 5 tutorial, learn bootstrap, responsive bootstrap grid, bootstrap components, adv indian coder',
        topics: ['Bootstrap 5 Setup & CDN', '12-Column Responsive Grid System', 'Typography & Utility Classes', 'Navigation, Navbars & Dropdowns', 'Cards, Modals & Accordions', 'Forms & Form Validation', 'Flexbox & Spacing Utilities', 'Sass Customization & Theming']
    },
    'react': {
        title: 'React 18 & 19 Full Course: Zero to Production',
        tagline: 'Hooks, Custom Hooks, State Management, Server Components, SSR & Performance Tuning',
        description: 'Master React.js from ground up. Learn JSX, component lifecycle, useState, useEffect, useContext, useMemo, custom hooks, Redux/Zustand state management, and Next.js foundations.',
        category: 'Frontend Frameworks',
        level: 'Intermediate to Advanced',
        keywords: 'react js tutorial, learn react, react hooks, react custom hooks, react router, state management, adv indian coder react',
        topics: ['React Introduction & Virtual DOM', 'JSX Syntax & Component Architecture', 'Props & State Management', 'Hooks Deep Dive (useState, useEffect, useRef)', 'Context API & Custom Hooks', 'Performance Hooks (useMemo, useCallback)', 'React Router & Client-Side Routing', 'Forms & Controlled/Uncontrolled Inputs', 'Server Components & React 19 Actions', 'State Management (Zustand & Redux Toolkit)']
    },
    'jquery': {
        title: 'jQuery Core Library & DOM Automation Course',
        tagline: 'Selectors, DOM Traversal, Event Binding, Animations & AJAX Integration',
        description: 'Master jQuery for rapid DOM manipulation, cross-browser event handling, smooth animations, and asynchronous AJAX data fetching.',
        category: 'Frontend Libraries',
        level: 'Beginner',
        keywords: 'jquery tutorial, learn jquery, jquery dom manipulation, jquery ajax, adv indian coder',
        topics: ['jQuery Syntax & $(document).ready', 'Element, Class & Attribute Selectors', 'DOM Traversal (parent, children, siblings)', 'DOM Manipulation (html, text, append, prepend)', 'Event Handling (click, hover, on, delegate)', 'Effects & Custom Animations (fadeIn, slideUp)', 'AJAX Requests ($.ajax, $.get, $.post)', 'jQuery Plugins & UI Integration']
    },
    'angular': {
        title: 'Angular Enterprise Full Course 2026',
        tagline: 'Standalone Components, Signals, RxJS, Dependency Injection & Enterprise Architecture',
        description: 'Master modern Angular for scalable enterprise web applications. Learn standalone components, reactive Signals, RxJS observables, services, routing, and HTTP interceptors.',
        category: 'Frontend Frameworks',
        level: 'Intermediate to Advanced',
        keywords: 'angular tutorial, learn angular, angular signals, rxjs angular, angular standalone components, adv indian coder',
        topics: ['Angular Architecture & CLI Setup', 'Standalone Components & Templates', 'Data Binding & Structural Directives', 'Angular Signals & Reactivity', 'Services & Dependency Injection', 'RxJS Observables, Subjects & Operators', 'Reactive Forms & Custom Validators', 'Angular Router, Route Guards & Resolvers', 'HTTP Client & Interceptors', 'Enterprise State Management']
    },
    'angularjs': {
        title: 'AngularJS 1.x Architecture & Migration Course',
        tagline: 'Scope, Controllers, Directives, Two-Way Binding, Filters & Migration Strategies',
        description: 'Understand AngularJS 1.x legacy codebases. Master $scope, directives, two-way data binding, filters, services, and modern migration strategies to modern frameworks.',
        category: 'Legacy Frameworks',
        level: 'Intermediate',
        keywords: 'angularjs tutorial, angularjs 1.x, angularjs scope, angularjs migration, adv indian coder',
        topics: ['AngularJS Architecture & MVC Pattern', '$scope & Scope Hierarchy', 'Two-Way Data Binding Mechanism', 'Directives (ng-app, ng-model, ng-repeat)', 'Custom Directives & Isolating Scope', 'Controllers, Services & Factories', 'Dependency Injection in AngularJS', 'Migration to Modern Angular']
    },
    'vue': {
        title: 'Vue.js 3 Composition API & Pinia Course',
        tagline: 'Reactivity Engine, Single-File Components, Pinia State, Router & Transitions',
        description: 'Master Vue 3 from fundamentals to production. Learn Single-File Components (SFC), Composition API (<script setup>), reactive ref/reactive, Pinia, and Vue Router.',
        category: 'Frontend Frameworks',
        level: 'Intermediate',
        keywords: 'vue 3 tutorial, learn vue js, vue composition api, pinia state management, adv indian coder',
        topics: ['Vue 3 Setup & Vite Tooling', 'Single-File Components (SFC) Anatomy', 'Composition API (ref, reactive, computed)', 'Watchers & Lifecycle Hooks', 'Template Directives (v-if, v-for, v-model, v-bind)', 'Component Props, Emits & Slots', 'Pinia Centralized State Management', 'Vue Router & Navigation Guards', 'Transition & Animation Engine', 'Composables (Custom Vue Hooks)']
    },
    'sass': {
        title: 'Sass / SCSS Modern Stylesheet Architecture',
        tagline: 'Variables, Nesting, Mixins, Functions, Partials, Modules (@use, @forward) & BEM',
        description: 'Write maintainable, modular CSS with Sass/SCSS. Master modern module system (@use, @forward), mixins, functions, inheritance, and scalable CSS architectures.',
        category: 'CSS Preprocessors',
        level: 'Beginner to Intermediate',
        keywords: 'sass tutorial, scss course, learn sass, sass mixins, modern sass modules, adv indian coder',
        topics: ['Sass vs SCSS Syntax', 'Variables & Data Types', 'Nesting & Parent Selector (&)', 'Partials & Modern Modules (@use, @forward)', 'Mixins & Dynamic Arguments', 'Custom Functions & Math Operations', 'Inheritance & @extend', 'Scalable 7-1 Folder Architecture']
    },
    'nodejs': {
        title: 'Node.js Backend Engineering Complete Course',
        tagline: 'Event Loop, Libuv, Streams, Buffers, Clustering, REST APIs & Microservices',
        description: 'Become a professional Node.js backend developer. Learn the Node event loop, Libuv thread pool, Buffers, Streams, Express.js REST APIs, JWT authentication, and MongoDB/SQL databases.',
        category: 'Backend Development',
        level: 'Intermediate to Advanced',
        keywords: 'nodejs tutorial, learn nodejs, nodejs event loop, express js api, node streams, backend development, adv indian coder',
        topics: ['Node.js Architecture & Libuv Event Loop', 'Modules System (CommonJS vs ES Modules)', 'File System (fs) & Path Modules', 'Buffers & Binary Data Processing', 'Streams (Readable, Writable, Transform)', 'EventEmitter & Event-Driven Architecture', 'Building REST APIs with Express.js', 'Middleware, Error Handling & Logging', 'JWT Authentication & Security Best Practices', 'Database Integration (Mongoose & Prisma)', 'Cluster Module & Worker Threads', 'Deployment, PM2 & Docker Containerization']
    },
    'php': {
        title: 'Modern PHP 8+ Web Development Course',
        tagline: 'Object-Oriented PHP, Types, Attributes, PDO, MySQL, Composer & MVC Architecture',
        description: 'Master modern PHP 8.x for web development. Learn Object-Oriented PHP, constructor promotion, attributes, PDO database operations, Composer dependency management, and MVC framework design.',
        category: 'Backend Development',
        level: 'Beginner to Intermediate',
        keywords: 'php tutorial, modern php 8, learn php, oop php, pdo mysql, php web development, adv indian coder',
        topics: ['PHP 8+ Syntax & Strict Typing', 'Control Structures & Superglobals', 'Functions & Anonymous Functions', 'Object-Oriented PHP (Classes, Inheritance, Interfaces)', 'PHP 8 Features (Named Arguments, Match Expression, Attributes)', 'PDO Database Connection & Prepared Statements', 'Session Management & Security (CSRF, XSS)', 'Composer & Autoloading (PSR-4)', 'Building an MVC Web Application', 'RESTful API Development in PHP']
    },
    'java': {
        title: 'Java Full Course 2026: Zero to Hero (44 Episodes)',
        tagline: 'Core Java, OOP, JVM Architecture, Collections Framework, Multithreading & Spring Boot',
        description: 'Master Java 21 from absolute scratch to industry readiness. Covers JVM memory internals, OOP principles, exception handling, Collections Framework, Streams API, Multithreading, and Spring Boot foundations.',
        category: 'Programming & Enterprise',
        level: 'Beginner to Advanced',
        keywords: 'java full course 2026, learn java, core java tutorial, java oop, jvm memory, java collections framework, spring boot, adv indian coder java',
        topics: ['Introduction to Programming & Java Setup', 'Low-Level vs High-Level & JVM/JDK/JRE Architecture', 'Variables, Data Types & Type Casting', 'Operators (Arithmetic, Relational, Logical, Bitwise)', 'Control Flow (if-else, switch case, ternary)', 'Loops (for, while, do-while, nested loops)', 'Methods, Stack vs Heap Memory & Parameter Passing', 'Object-Oriented Programming (Classes, Objects, Constructors)', 'Encapsulation, Inheritance, Polymorphism & Abstraction', 'Arrays (1D, 2D) & String Manipulation', 'Exception Handling (try-catch-finally, custom exceptions)', 'Java Collections Framework (List, Set, Map, Queue)', 'Generics & Lambda Expressions', 'Java Streams API & Functional Interfaces', 'Multithreading, Concurrency & Synchronization', 'File I/O & Serialization', 'JDBC Database Connectivity', 'Spring Boot & Microservices Introduction']
    },
    'python': {
        title: 'Python 3 Full Course: Zero to Master 2026',
        tagline: 'Python Basics, OOP, File I/O, Generators, Decorators, Web Scraping, Data & AI',
        description: 'Learn Python 3 programming from ground zero to advanced software development. Covers variables, data structures, OOP, decorators, generators, file handling, modules, and data science foundations.',
        category: 'Programming & AI',
        level: 'Beginner to Advanced',
        keywords: 'python tutorial, learn python, python 3 course, python oop, python data structures, python for ai, adv indian coder python',
        topics: ['Python Syntax, Variables & Dynamic Typing', 'Data Types (Numbers, Strings, Booleans)', 'Lists, Tuples, Sets & Dictionaries', 'Control Flow (if, elif, else, match)', 'Loops & List Comprehensions', 'Functions, *args, **kwargs & Scope', 'Object-Oriented Python (Classes, Dunder Methods, Inheritance)', 'Modules, Packages & Virtual Environments', 'File Handling (Reading/Writing, JSON, CSV)', 'Exception Handling (try, except, raise, custom errors)', 'Decorators & Generator Functions', 'Regular Expressions (re module)', 'Working with APIs (requests library)', 'Introduction to NumPy & Pandas']
    },
    'django': {
        title: 'Django 5 Web Framework Mastery Course',
        tagline: 'MVT Architecture, ORM, Models, Views, Templates, Authentication & Django REST Framework',
        description: 'Build robust, production-grade web applications with Python Django 5. Learn MVT architecture, Django ORM, admin dashboard, user authentication, and Django REST Framework (DRF).',
        category: 'Backend Frameworks',
        level: 'Intermediate',
        keywords: 'django tutorial, learn django, django orm, django rest framework, python web development, adv indian coder',
        topics: ['Django Project Structure & Architecture', 'Models & Django ORM (Queries, Migrations, Relations)', 'Views (Function-Based & Class-Based Views)', 'Django Template Language (DTL) & Forms', 'User Authentication & Custom User Models', 'Django Admin Customization', 'Django REST Framework (DRF Serializers & ViewSets)', 'Token Authentication & JWT Integration', 'Static & Media Files Handling', 'Production Deployment with Gunicorn & Nginx']
    },
    'asp': {
        title: 'ASP.NET Core Web API & Cloud Services Course',
        tagline: '.NET 8, C# Backend, Entity Framework Core, Dependency Injection & RESTful Microservices',
        description: 'Build enterprise-grade cloud backends with ASP.NET Core (.NET 8). Master Dependency Injection, Entity Framework Core, middleware pipelines, JWT auth, and clean architecture.',
        category: 'Backend Frameworks',
        level: 'Intermediate to Advanced',
        keywords: 'asp.net core tutorial, learn asp.net, .net 8 web api, entity framework core, csharp backend, adv indian coder',
        topics: ['.NET 8 Architecture & ASP.NET Core Setup', 'Controllers, Routing & Action Results', 'Dependency Injection & Middleware Pipeline', 'Entity Framework Core (Code-First & DbContext)', 'LINQ Queries & Database Migrations', 'Repository Pattern & Clean Architecture', 'Authentication with JWT & Identity', 'Swagger/OpenAPI Documentation', 'Building RESTful Microservices', 'Containerization with Docker & Azure Deployment']
    },
    'go': {
        title: 'Golang Backend Engineering Course 2026',
        tagline: 'Go Syntax, Goroutines, Channels, Interfaces, Concurrency & Microservices',
        description: 'Master Go (Golang) for high-performance cloud backends and distributed systems. Learn goroutines, channels, interfaces, pointers, HTTP servers, and microservices.',
        category: 'Systems & Backend',
        level: 'Intermediate to Advanced',
        keywords: 'golang tutorial, learn go, goroutines concurrency, go rest api, go backend development, adv indian coder',
        topics: ['Go Syntax, Variables & Type System', 'Functions, Multiple Return Values & Pointers', 'Structs, Methods & Interfaces', 'Goroutines & Concurrency Model', 'Channels, Select & Synchronization (sync.WaitGroup)', 'Error Handling & Defer/Panic/Recover', 'Building High-Performance HTTP REST APIs', 'Working with JSON & Database Drivers (GORM)', 'Go Modules & Package Management', 'Testing & Profiling Go Applications']
    },
    'kotlin': {
        title: 'Kotlin Modern Programming & Android Course',
        tagline: 'Null Safety, Coroutines, Flow, Extension Functions, OOP & Jetpack Compose',
        description: 'Master Kotlin for modern backend and Android app development. Learn null safety, coroutines, reactive Flows, higher-order functions, and multiplatform fundamentals.',
        category: 'Mobile & Backend',
        level: 'Beginner to Intermediate',
        keywords: 'kotlin tutorial, learn kotlin, kotlin coroutines, android development kotlin, null safety kotlin, adv indian coder',
        topics: ['Kotlin Basics & Null Safety System', 'Val vs Var, Smart Casts & When Expressions', 'Classes, Data Classes & Sealed Classes', 'Extension Functions & Lambdas with Receiver', 'Kotlin Coroutines (Launch, Async, Dispatchers)', 'Reactive Kotlin Flows & Channels', 'Collections & Functional Operators', 'Interoperability with Java', 'Jetpack Compose Fundamentals', 'Building Ktor Backend Services']
    },
    'swift': {
        title: 'Swift & SwiftUI iOS App Development Course',
        tagline: 'Swift 5.9, Optionals, Protocols, Generics, SwiftUI Views & Combine',
        description: 'Build native iOS apps with Swift and SwiftUI. Master Swift optionals, protocols, generics, memory management (ARC), SwiftUI declarative UI, and async/await.',
        category: 'Mobile Development',
        level: 'Beginner to Intermediate',
        keywords: 'swift tutorial, learn swift, swiftui ios development, swift optionals, ios app development, adv indian coder',
        topics: ['Swift Syntax, Optionals & Optional Binding', 'Control Flow, Guard Statements & Switch', 'Functions, Closures & Trailing Closure Syntax', 'Structs vs Classes & Value vs Reference Semantics', 'Protocols, Extensions & Generics', 'Automatic Reference Counting (ARC) & Retain Cycles', 'SwiftUI Declarative Layouts & Modifiers', 'State Management (@State, @Binding, @Observable)', 'Networking with URLSession & Codable', 'Publishing to Apple App Store']
    },
    'typescript': {
        title: 'TypeScript Deep Dive Complete Course 2026',
        tagline: 'Static Typing, Interfaces, Generics, Union/Intersection Types, Decorators & AST',
        description: 'Master TypeScript for robust full-stack software development. Learn type annotations, interfaces, generics, conditional types, mapped types, utility types, and compiler config.',
        category: 'Programming Languages',
        level: 'Intermediate to Advanced',
        keywords: 'typescript tutorial, learn typescript, typescript generics, typescript interfaces, type narrowing, adv indian coder typescript',
        topics: ['TypeScript Setup & tsconfig.json Options', 'Basic Types, Type Inference & Type Annotations', 'Interfaces vs Type Aliases', 'Union, Intersection & Literal Types', 'Type Narrowing & Type Guards', 'Generics (Classes, Functions, Interfaces)', 'Keyof, Typeof, Indexed Access & Conditional Types', 'Utility Types (Partial, Pick, Omit, Record, Readonly)', 'Decorators & Metadata Reflection', 'Integrating TypeScript with React and Node.js']
    },
    'csharp': {
        title: 'C# 12 & .NET 8 Enterprise Complete Course',
        tagline: 'OOP, LINQ, Async/Await, Generics, Delegates, Events, Memory Management & GC',
        description: 'Master C# 12 and modern .NET 8. Learn object-oriented programming, LINQ queries, asynchronous programming (async/await), delegates, events, collections, and GC internals.',
        category: 'Enterprise Programming',
        level: 'Beginner to Advanced',
        keywords: 'csharp tutorial, learn c#, c# 12 .net 8, linq c#, async await csharp, oop c#, adv indian coder',
        topics: ['C# 12 Syntax, Top-Level Statements & Records', 'Data Types, Value Types vs Reference Types', 'OOP (Classes, Inheritance, Polymorphism, Interfaces)', 'Properties, Indexers & Pattern Matching', 'Delegates, Events & Lambda Expressions', 'LINQ (Language Integrated Query) Architecture', 'Async/Await & Task Parallel Library (TPL)', 'Generics & Collection Classes', 'Memory Management & Garbage Collector Internals', 'Unit Testing with xUnit & Moq']
    },
    'c': {
        title: 'C Programming Masterclass: From Basics to Systems',
        tagline: 'Pointers, Dynamic Memory Allocation, Data Structures, Bitwise Operations & Systems Code',
        description: 'Master C programming from fundamentals to memory-level engineering. Deep dive into pointers, arrays, structs, dynamic memory (malloc/free), file I/O, and data structures.',
        category: 'Systems Programming',
        level: 'Beginner to Advanced',
        keywords: 'c programming tutorial, learn c language, c pointers explained, dynamic memory c, c data structures, adv indian coder c',
        topics: ['C Language Architecture & Compilation Process', 'Variables, Constants & Data Types', 'Operators, Expressions & Precedence', 'Decision Making (if-else, switch)', 'Loops (for, while, do-while)', 'Functions, Recursion & Storage Classes', 'Arrays & Multi-Dimensional Arrays', 'Pointers Deep Dive (Pointer Arithmetic, Double Pointers)', 'Strings & String Handling Functions', 'Structures, Unions & Typedef', 'Dynamic Memory Allocation (malloc, calloc, realloc, free)', 'File Handling & Binary File I/O', 'Bitwise Operators & Bit Manipulation', 'Data Structures in C (Linked Lists, Stacks, Queues)']
    },
    'cpp': {
        title: 'Modern C++ (C++20/23) Full Course: Zero to Hero',
        tagline: 'STL, Smart Pointers, Templates, OOP, Move Semantics, Concurrency & Modern Features',
        description: 'Master modern C++ (C++17/20/23). Learn Object-Oriented C++, Standard Template Library (STL), smart pointers (unique_ptr, shared_ptr), move semantics, templates, and concurrency.',
        category: 'Systems & Performance',
        level: 'Beginner to Advanced',
        keywords: 'cpp tutorial, modern c++ course, c++ stl, smart pointers c++, c++ oop, learn c++, adv indian coder cpp',
        topics: ['C++ Basics & I/O Streams', 'Object-Oriented Programming (Classes, Constructors, Destructors)', 'Inheritance, Virtual Functions & Polymorphism', 'Operator Overloading & Friend Functions', 'Templates (Function & Class Templates)', 'Standard Template Library (Vectors, Lists, Maps, Sets)', 'STL Algorithms & Iterators', 'Smart Pointers (unique_ptr, shared_ptr, weak_ptr)', 'Move Semantics & Rvalue References', 'Lambda Expressions & std::function', 'Exception Handling in C++', 'Multithreading with std::thread & Mutexes', 'C++20 Concepts, Ranges & Coroutines']
    },
    'rust': {
        title: 'Rust Systems Programming Complete Course 2026',
        tagline: 'Memory Safety, Ownership, Borrow Checker, Lifetimes, Traits, Cargo & Concurrency',
        description: 'Learn Rust programming language for blazing-fast, memory-safe systems software. Master ownership, borrowing, lifetimes, pattern matching, traits, and fearless concurrency.',
        category: 'Systems Programming',
        level: 'Intermediate to Advanced',
        keywords: 'rust tutorial, learn rust programming, rust ownership model, rust borrow checker, memory safe systems, adv indian coder rust',
        topics: ['Rust Installation & Cargo Package Manager', 'Variables, Immutability & Shadowing', 'Data Types & Control Flow', 'The Ownership Model Explained', 'References, Borrowing & Slice Types', 'Structs, Enums & Pattern Matching (match, if let)', 'Error Handling with Result & Option', 'Traits, Generics & Lifetime Annotations', 'Smart Pointers (Box, Rc, RefCell, Arc)', 'Fearless Concurrency with Threads & Channels', 'Unsafe Rust & FFI Integration', 'Building WebAssembly with Rust']
    },
    'bash': {
        title: 'Bash Shell Scripting & Linux CLI Complete Course',
        tagline: 'Linux Commands, Shell Scripts, Loops, Functions, Cron Jobs, Awk, Sed & Automation',
        description: 'Master Linux command line and Bash shell scripting for DevOps and automation. Learn pipes, redirections, variables, loops, functions, sed, awk, regex, and cron automation.',
        category: 'DevOps & Systems',
        level: 'Beginner to Intermediate',
        keywords: 'bash scripting tutorial, linux command line, learn bash, shell scripts devops, sed awk linux, adv indian coder',
        topics: ['Linux CLI Basics & Navigation', 'Pipes (|), Redirection (<, >, >>) & Permissions (chmod)', 'Shell Variables, Environment Variables & User Input', 'Conditional Statements (if-then-else, test, [[ ]])', 'Loops (for, while, until) & Loop Control', 'Bash Functions & Return Codes', 'Text Processing with grep, sed & awk', 'Regular Expressions in Shell Scripts', 'Automating Tasks with Cron & Crontab', 'Writing Robust DevOps Automation Scripts']
    },
    'r': {
        title: 'R Programming for Data Analytics & Statistics',
        tagline: 'Data Frames, Vectors, Dplyr, Ggplot2, Statistical Modeling & Data Visualizations',
        description: 'Learn R programming for statistical computing, data analysis, and visualization. Master data frames, vectors, dplyr data wrangling, and ggplot2 publication-ready plots.',
        category: 'Data Science',
        level: 'Beginner to Intermediate',
        keywords: 'r programming tutorial, learn r, r for data science, ggplot2 tutorial, dplyr r, adv indian coder',
        topics: ['R Syntax, Vectors & Matrices', 'Factors & Data Frames', 'Data Manipulation with dplyr (filter, select, mutate)', 'Data Visualization with ggplot2', 'Statistical Distributions & Hypothesis Testing', 'Linear & Logistic Regression in R', 'Importing & Exporting Datasets (CSV, Excel)', 'Building Interactive Dashboards with R Shiny']
    },
    'sql': {
        title: 'SQL & Relational Database Mastery Course 2026',
        tagline: 'Queries, Complex Joins, Aggregations, Subqueries, Window Functions, Indexes & CTEs',
        description: 'Master SQL for software engineers and data professionals. Learn SELECT queries, INNER/LEFT/RIGHT/FULL joins, GROUP BY aggregations, Subqueries, Window Functions, Indexes, and CTEs.',
        category: 'Database Engineering',
        level: 'Beginner to Advanced',
        keywords: 'sql tutorial, learn sql, sql joins explained, sql window functions, database indexing, complex sql queries, adv indian coder sql',
        topics: ['Relational Database Concepts (Tables, Keys, Schemas)', 'Basic SQL Queries (SELECT, WHERE, DISTINCT, ORDER BY)', 'Filtering & Pattern Matching (LIKE, IN, BETWEEN)', 'Aggregate Functions (COUNT, SUM, AVG, MIN, MAX, GROUP BY, HAVING)', 'SQL Joins (INNER, LEFT, RIGHT, FULL OUTER, CROSS, SELF JOIN)', 'Subqueries & Correlated Subqueries', 'Common Table Expressions (CTEs & Recursive CTEs)', 'Window Functions (ROW_NUMBER, RANK, DENSE_RANK, LEAD, LAG, OVER)', 'Database Transactions (ACID, COMMIT, ROLLBACK)', 'Database Indexing & Query Optimization (B-Tree, EXPLAIN ANALYZE)', 'Views, Stored Procedures & Triggers', 'Database Normalization (1NF, 2NF, 3NF, BCNF)']
    },
    'numpy': {
        title: 'NumPy Numerical Computing with Python Course',
        tagline: 'NDArrays, Vectorization, Broadcasting, Linear Algebra, Indexing & Slicing',
        description: 'Master NumPy for ultra-fast numerical operations in Python. Learn ndarrays, multi-dimensional slicing, vectorization, broadcasting rules, matrix math, and random sampling.',
        category: 'Data Science & AI',
        level: 'Beginner to Intermediate',
        keywords: 'numpy tutorial, learn numpy, numpy broadcasting, vectorization python, numerical python, adv indian coder',
        topics: ['NumPy Arrays (ndarrays) vs Python Lists', 'Array Creation & Data Types', 'Indexing, Slicing & Boolean Masking', 'Vectorization & Element-Wise Operations', 'Broadcasting Rules & Practical Applications', 'Linear Algebra Operations (dot product, determinants, inverse)', 'Statistical Functions & Aggregations', 'Array Manipulation (reshape, flatten, transpose, concatenate)']
    },
    'pandas': {
        title: 'Pandas Data Analysis & Manipulation Course',
        tagline: 'Series, DataFrames, Data Cleaning, GroupBy, Merging, Pivoting & Time Series',
        description: 'Master Python Pandas for data manipulation and analysis. Learn DataFrames, handling missing values, filtering, GroupBy aggregations, merging datasets, pivot tables, and time series.',
        category: 'Data Science & Analytics',
        level: 'Beginner to Intermediate',
        keywords: 'pandas tutorial, learn pandas python, dataframe manipulation, groupby pandas, data cleaning python, adv indian coder',
        topics: ['Pandas Series & DataFrames Anatomy', 'Loading Data (CSV, Excel, JSON, SQL)', 'Data Inspection & Summary Statistics', 'Filtering, Indexing & Selecting with .loc and .iloc', 'Handling Missing Data (dropna, fillna, interpolate)', 'Data Transformation & String Methods', 'GroupBy Operations & Aggregations', 'Merging, Joining & Concatenating DataFrames', 'Pivot Tables & Reshaping (melt, stack)', 'Time Series Analysis with Pandas']
    },
    'scipy': {
        title: 'SciPy Scientific Computing in Python Course',
        tagline: 'Optimization, Numerical Integration, Interpolation, Signal Processing & Linear Algebra',
        description: 'Master SciPy for advanced scientific computation and engineering algorithms in Python. Learn numerical integration, optimization solvers, interpolation, Fourier transforms, and signal processing.',
        category: 'Scientific Computing',
        level: 'Intermediate to Advanced',
        keywords: 'scipy tutorial, learn scipy, scientific python, scipy optimize, numerical integration python, adv indian coder',
        topics: ['SciPy Architecture & Module Overview', 'Optimization & Root Finding (scipy.optimize)', 'Numerical Integration & ODE Solvers (scipy.integrate)', 'Interpolation & Curve Fitting (scipy.interpolate)', 'Signal Processing & Filtering (scipy.signal)', 'Fourier Transforms (scipy.fft)', 'Spatial Data Structures & KD-Trees (scipy.spatial)', 'Statistical Distributions & Tests (scipy.stats)']
    },
    'data-science': {
        title: 'Data Science & Machine Learning Complete Course',
        tagline: 'Exploratory Data Analysis, Feature Engineering, Supervised/Unsupervised ML, Pipelines & Metrics',
        description: 'Complete Data Science & ML roadmap. Master Exploratory Data Analysis (EDA), feature engineering, regression, classification, clustering, model evaluation metrics, and end-to-end pipelines.',
        category: 'Data Science & AI',
        level: 'Intermediate to Advanced',
        keywords: 'data science tutorial, learn machine learning, feature engineering, scikit-learn course, ml algorithms, adv indian coder',
        topics: ['Data Science Lifecycle & Problem Formulation', 'Exploratory Data Analysis (EDA) Best Practices', 'Feature Engineering, Scaling & Encoding', 'Handling Imbalanced Data (SMOTE, Class Weights)', 'Supervised Learning: Linear & Logistic Regression', 'Decision Trees, Random Forests & Gradient Boosting (XGBoost)', 'Unsupervised Learning: K-Means & PCA Dimensionality Reduction', 'Model Evaluation (Confusion Matrix, ROC-AUC, F1-Score)', 'Hyperparameter Tuning (GridSearchCV, Optuna)', 'Machine Learning Pipelines with Scikit-Learn']
    },
    'ai': {
        title: 'Artificial Intelligence Foundations Course 2026',
        tagline: 'Search Algorithms, Heuristics, Knowledge Graphs, Neural Networks & Computer Vision',
        description: 'Master foundational and modern Artificial Intelligence. Learn state-space search (A*), game playing (Minimax), knowledge representation, neural networks, CNNs, and NLP fundamentals.',
        category: 'Artificial Intelligence',
        level: 'Intermediate to Advanced',
        keywords: 'ai tutorial, learn artificial intelligence, a star search, neural networks basics, machine learning ai, adv indian coder',
        topics: ['Introduction to AI & Intelligent Agents', 'Search Algorithms (BFS, DFS, A* Search, Heuristics)', 'Adversarial Search & Game Theory (Minimax, Alpha-Beta Pruning)', 'Knowledge Representation & Expert Systems', 'Introduction to Neural Networks & Perceptrons', 'Backpropagation & Activation Functions', 'Convolutional Neural Networks (CNN) for Computer Vision', 'Natural Language Processing (NLP) Fundamentals', 'Ethics & Safety in Artificial Intelligence']
    },
    'gen-ai': {
        title: 'Generative AI & Large Language Models (LLMs) Engineering',
        tagline: 'Prompt Engineering, Transformers, RAG Architectures, Vector DBs, LangChain & Fine-Tuning',
        description: 'Master Generative AI engineering. Learn Transformer architectures, Attention mechanisms, advanced Prompt Engineering, Retrieval-Augmented Generation (RAG), Vector Databases, LangChain, and fine-tuning.',
        category: 'Generative AI & LLMs',
        level: 'Intermediate to Advanced',
        keywords: 'generative ai course, learn llms, rag architecture, prompt engineering, langchain tutorial, vector databases, adv indian coder gen ai',
        topics: ['Generative AI Landscape & Foundation Models', 'Transformer Architecture & Self-Attention Explained', 'Prompt Engineering Patterns & Chain-of-Thought', 'Embeddings & Vector Representations', 'Vector Databases (Pinecone, Chroma, Milvus, Qdrant)', 'Retrieval-Augmented Generation (RAG) Architecture', 'Building AI Agents with LangChain & LlamaIndex', 'Function Calling & Structured Outputs', 'Fine-Tuning LLMs with LoRA and QLoRA', 'Deploying Production AI Systems & Guardrails']
    },
    'mysql': {
        title: 'MySQL Database Administration & Optimization Course',
        tagline: 'InnoDB Engine, Indexing, Transactions, Stored Procedures, Triggers & Replication',
        description: 'Master MySQL for enterprise web development. Learn InnoDB storage engine, B-Tree indexes, transactions (ACID), stored procedures, triggers, query optimization, and replication.',
        category: 'Database Engineering',
        level: 'Intermediate to Advanced',
        keywords: 'mysql tutorial, learn mysql, mysql index optimization, innodb transactions, mysql dba, adv indian coder',
        topics: ['MySQL Architecture & InnoDB vs MyISAM', 'Data Types & Storage Efficiency', 'Table Design, Constraints & Foreign Keys', 'Index Architecture (Primary, Secondary, Composite, Covering Indexes)', 'EXPLAIN & EXPLAIN ANALYZE for Query Tuning', 'Transactions, Isolation Levels & Row-Level Locking', 'Stored Procedures, Functions & Triggers', 'User Privileges & Database Security', 'Database Backup & Restore (mysqldump)', 'Master-Slave Replication & High Availability']
    },
    'postgresql': {
        title: 'PostgreSQL Advanced Database Engineering Course',
        tagline: 'JSONB, Full-Text Search, Table Partitioning, CTEs, Window Functions & Concurrency (MVCC)',
        description: 'Master PostgreSQL — the world’s most advanced open-source database. Learn JSONB querying, GIN/GiST indexes, full-text search, table partitioning, MVCC concurrency, and performance tuning.',
        category: 'Database Engineering',
        level: 'Intermediate to Advanced',
        keywords: 'postgresql tutorial, learn postgresql, jsonb postgres, table partitioning, postgres performance, adv indian coder',
        topics: ['PostgreSQL Features & Architecture', 'Advanced Data Types (JSONB, Arrays, UUIDs, ENUMs)', 'Querying & Indexing JSONB with GIN Indexes', 'Full-Text Search (tsvector, tsquery, GiST Indexes)', 'Multi-Version Concurrency Control (MVCC) & VACUUM', 'Table Partitioning (Declarative Range & List Partitioning)', 'Common Table Expressions & Window Functions', 'Custom Functions & PL/pgSQL', 'Query Optimization & pg_stat_statements', 'Connection Pooling with PgBouncer']
    },
    'mongodb': {
        title: 'MongoDB NoSQL & Aggregation Pipeline Course',
        tagline: 'BSON Documents, Aggregation Framework, Indexing, Schema Design & Sharding',
        description: 'Master MongoDB for modern cloud and full-stack applications. Learn BSON document data modeling, CRUD operations, powerful Aggregation Pipelines, compound indexes, and sharded clusters.',
        category: 'NoSQL Databases',
        level: 'Beginner to Advanced',
        keywords: 'mongodb tutorial, learn mongodb, mongodb aggregation pipeline, nosql data modeling, mongodb indexing, adv indian coder',
        topics: ['NoSQL Concepts vs Relational Databases', 'BSON Document Structure & Collections', 'CRUD Operations (insert, find, update, delete)', 'Query Operators (Comparison, Logical, Array, Element)', 'Aggregation Framework ($match, $group, $project, $lookup, $unwind)', 'Data Modeling Patterns (Embedding vs Referencing)', 'Indexing Strategies (Single, Compound, Multikey, Text Indexes)', 'Transactions in MongoDB', 'Replication (Replica Sets) & High Availability', 'Sharding & Horizontal Scaling Architecture']
    },
    'excel': {
        title: 'Advanced Microsoft Excel for Business & Data Analysis',
        tagline: 'VLOOKUP, XLOOKUP, Pivot Tables, Nested IFs, Data Validation, Macros & Power Query',
        description: 'Master Microsoft Excel from essential formulas to advanced data analytics. Learn XLOOKUP, INDEX/MATCH, Dynamic Arrays, Pivot Tables, Power Query transformations, and dashboard automation.',
        category: 'Data Analytics & Business',
        level: 'Beginner to Advanced',
        keywords: 'advanced excel tutorial, learn excel, xlookup excel, pivot tables tutorial, power query excel, adv indian coder',
        topics: ['Excel Formulas & Cell Referencing (Absolute vs Relative)', 'Logical Functions (IF, AND, OR, IFS, SWITCH)', 'Lookup Functions (XLOOKUP, VLOOKUP, INDEX & MATCH)', 'Text & Date Functions (CONCAT, TEXTSPLIT, DATEDIF)', 'Dynamic Array Formulas (FILTER, UNIQUE, SORT, SEQUENCE)', 'Data Validation & Conditional Formatting', 'Pivot Tables & Interactive Slicers', 'Power Query for Automated Data Cleaning', 'Building Financial & Analytical Dashboards', 'Introduction to Excel Macros & VBA Automation']
    },
    'xml': {
        title: 'XML Technologies, Schemas & Web Services Course',
        tagline: 'XML Syntax, DTD, XML Schema (XSD), XPath, XSLT Transformations & SOAP Services',
        description: 'Master XML technologies for data interchange and enterprise integration. Learn XML syntax, DTD validation, XML Schema (XSD), XPath navigation, XSLT stylesheet transformations, and SOAP.',
        category: 'Data Formats',
        level: 'Beginner to Intermediate',
        keywords: 'xml tutorial, learn xml, xml schema xsd, xpath tutorial, xslt transformation, adv indian coder',
        topics: ['XML Document Syntax & Rules', 'Well-Formed vs Valid XML', 'Document Type Definition (DTD)', 'XML Schema Definition (XSD)', 'XML Namespaces (xmlns)', 'XPath Syntax & Node Selection', 'XSLT (Extensible Stylesheet Language Transformations)', 'Parsing XML in Python & Java (DOM & SAX)', 'XML in Enterprise APIs (SOAP vs REST)', 'JSON vs XML Comparison & Conversions']
    },
    'cybersecurity': {
        title: 'Cybersecurity & Ethical Hacking Complete Course 2026',
        tagline: 'Network Defense, Cryptography, OWASP Top 10, Penetration Testing & Web Security',
        description: 'Master Cybersecurity and Ethical Hacking fundamentals. Learn network protocols, cryptography (symmetric/asymmetric), OWASP Top 10 vulnerabilities (SQLi, XSS, CSRF), and defensive security.',
        category: 'Security & DevOps',
        level: 'Beginner to Advanced',
        keywords: 'cybersecurity tutorial, learn ethical hacking, owasp top 10, sql injection defense, network security, adv indian coder cybersecurity',
        topics: ['Cybersecurity Core Concepts (CIA Triad, Threat Modeling)', 'Networking Fundamentals (TCP/IP, OSI Model, DNS, Ports)', 'Cryptography (AES, RSA, Hashing, SHA-256, Digital Signatures)', 'Web Vulnerabilities (OWASP Top 10)', 'SQL Injection (SQLi) & Defense Mechanisms', 'Cross-Site Scripting (XSS) & Prevention', 'Authentication Vulnerabilities & Session Hijacking', 'Network Security (Firewalls, IDS/IPS, VPNs)', 'Penetration Testing Methodology & Reconnaissance', 'Security Best Practices & Incident Response']
    },
    'dsa': {
        title: 'Data Structures & Algorithms (DSA) Masterclass 2026',
        tagline: 'Time/Space Complexity, Arrays, Linked Lists, Trees, Graphs, Dynamic Programming & LeetCode',
        description: 'Ace coding interviews at top tech companies. Master Big-O complexity, Arrays, Linked Lists, Stacks, Queues, Binary Trees, BSTs, Graphs (BFS/DFS, Dijkstra), Dynamic Programming, and Greedy algorithms.',
        category: 'Computer Science & Interviews',
        level: 'Beginner to Advanced',
        keywords: 'dsa full course, data structures and algorithms, leetcode roadmap, dynamic programming, binary tree algorithms, coding interview prep, adv indian coder dsa',
        topics: ['Asymptotic Analysis (Big-O, Big-Theta, Big-Omega, Space Complexity)', 'Arrays & Two-Pointer / Sliding Window Techniques', 'Linked Lists (Singly, Doubly, Circular, Fast/Slow Pointers)', 'Stacks & Queues (Monotonic Stack, Circular Queue)', 'Recursion & Backtracking (N-Queens, Sudoku, Subsets)', 'Binary Trees, Traversals (Pre, In, Post, Level-Order) & Diameter', 'Binary Search Trees (BST Operations, Balancing Concepts)', 'Heaps & Priority Queues (Min-Heap, Max-Heap)', 'Hashing & Hash Tables (Collision Resolution)', 'Graph Algorithms (BFS, DFS, Topological Sort, Dijkstra, Bellman-Ford)', 'Dynamic Programming (1D DP, 2D DP, 0/1 Knapsack, LCS, LIS)', 'Greedy Algorithms & Divide and Conquer', 'Bit Manipulation Tricks & Bitwise DSA', 'System Design Interview Foundations']
    },
    'git': {
        title: 'Git Version Control Complete Course 2026',
        tagline: 'Init, Add, Commit, Branching, Merging, Rebasing, Stashing, Cherry-Pick & Conflict Resolution',
        description: 'Master Git version control from ground zero. Learn repository initialization, staging, commits, branching strategies (Git Flow), merging, interactive rebasing, stashing, and conflict resolution.',
        category: 'DevOps & Tools',
        level: 'Beginner to Intermediate',
        keywords: 'git tutorial, learn git, git commands, git branch merge, git rebase explained, git merge conflicts, adv indian coder git',
        topics: ['Version Control Concepts & Git Architecture (Working Tree, Index, HEAD)', 'Git Configuration & Initializing Repositories (git init, git clone)', 'Staging & Committing (git add, git commit, git status, git log)', 'Branching Strategies & Branch Management (git branch, git checkout, git switch)', 'Merging vs Rebasing (git merge, git rebase -i)', 'Resolving Merge Conflicts Like a Pro', 'Git Stash & Worktrees (git stash, git worktree)', 'Time Travel & History Rewriting (git reset, git revert, git cherry-pick)', 'Tagging & Release Versioning (Semantic Versioning)', 'Git Best Practices & Clean Commit Histories']
    },
    'github': {
        title: 'GitHub Collaboration, CI/CD & Open Source Course',
        tagline: 'Remote Repos, Pull Requests, Code Reviews, GitHub Actions, Pages, Projects & Open Source',
        description: 'Master GitHub for team collaboration and DevOps. Learn remote repositories, Forking workflows, Pull Requests, Code Reviews, GitHub Actions CI/CD automation, and Open Source contributions.',
        category: 'DevOps & Collaboration',
        level: 'Beginner to Intermediate',
        keywords: 'github tutorial, learn github, github pull requests, github actions ci cd, open source contribution github, adv indian coder github',
        topics: ['GitHub Account Setup & SSH Key Authentication', 'Pushing & Pulling Remote Repositories (git remote, git push, git pull)', 'Forking Workflow & Open Source Contribution', 'Creating Pull Requests (PRs) & Writing Effective PR Descriptions', 'Code Review Workflows & Branch Protection Rules', 'GitHub Issues, Milestone Tracking & GitHub Projects (Kanban)', 'GitHub Actions for CI/CD Automation', 'Hosting Websites on GitHub Pages', 'GitHub CLI (gh) Productivity Tricks', 'Building a Standout GitHub Portfolio for Recruiters']
    }
};

const JOBS = [
    {
        id: 'capgemini-associate-technician-2026',
        title: 'Associate – Products & Systems Technician',
        company: 'Capgemini',
        location: 'Pune, Maharashtra',
        type: 'Full-Time',
        salary: 'Competitive Package',
        experience: 'Freshers / 0–1 Year',
        postedDate: '2026-05-30',
        description: 'Capgemini has officially launched its Off Campus Drive 2026 for the role of Associate – Products & Systems Technician at its Pune office. This role provides hands-on experience in product support, incident management, system monitoring, and troubleshooting. Freshers and candidates with up to 1 year of experience from B.E / B.Tech / Diploma are eligible.'
    },
    {
        id: 'danaher-ai-ml-intern-2026',
        title: 'Intern – AI/ML',
        company: 'Danaher Corporation',
        location: 'Bangalore, Karnataka',
        type: 'Internship (1 Year Full-Time)',
        salary: 'Industry Standard Stipend',
        experience: 'Freshers / 1–2 Years',
        postedDate: '2026-06-01',
        description: 'Danaher Corporation is hiring an AI/ML Intern for a one-year full-time internship at their Bangalore office. Great opportunity for students and fresh graduates interested in Artificial Intelligence, Machine Learning, Python, TensorFlow, PyTorch, and Healthcare Technology.'
    },
    {
        id: 'sharechat-manual-qa-intern-2026',
        title: 'Manual QA Intern',
        company: 'ShareChat (Mohalla Tech Pvt Ltd)',
        location: 'Bengaluru, Karnataka',
        type: 'Internship',
        salary: 'Stipend based on performance',
        experience: 'Freshers',
        postedDate: '2026-06-01',
        description: 'ShareChat is looking for a Manual QA Intern in Bengaluru. Design and execute test cases for web and mobile apps, validate AI-generated code, and ensure product quality for over 200 million monthly active users.'
    },
    {
        id: 'volvo-group-apprentice-2026',
        title: 'Graduate Apprentice Trainee (NATS)',
        company: 'Volvo Group',
        location: 'Bangalore, India',
        type: 'Apprenticeship (1 Year)',
        salary: 'As per NATS norms',
        experience: 'Freshers (B.Com)',
        postedDate: '2026-05-26',
        description: 'Volvo India is inviting B.Com graduates from 2024, 2025, and 2026 batches for the Graduate Apprentice Trainee position in Bangalore under the National Apprenticeship Training Scheme (NATS).'
    },
    {
        id: 'sp-global-data-analyst-2026',
        title: 'Data Analyst / Associate',
        company: 'S&P Global',
        location: 'Hyderabad, Telangana',
        type: 'Full-Time',
        salary: 'Competitive Package',
        experience: '0 to 2 Years (Freshers Eligible)',
        postedDate: '2026-05-26',
        description: 'S&P Global is recruiting Data Analyst / Associate in Hyderabad. Analyze and validate financial and sustainability data, work with SQL, Power BI, and ESG reporting standards.'
    },
    {
        id: 'deloitte-qa-intern-2026',
        title: 'QA Intern',
        company: 'Deloitte',
        location: 'Bangalore, India',
        type: 'Internship',
        salary: 'Competitive Stipend',
        experience: 'Freshers',
        postedDate: '2026-05-26',
        description: 'Deloitte recruitment drive for QA Intern at its Bangalore office. Work on software quality assurance, automated testing frameworks, and enterprise consulting delivery.'
    },
    {
        id: 'accenture-tech-support-2026',
        title: 'Tech Support Associate Services',
        company: 'Accenture',
        location: 'Bangalore, India',
        type: 'Full-Time',
        salary: 'Competitive Entry-Level',
        experience: 'Freshers (0–2 Years)',
        postedDate: '2026-05-26',
        description: 'Accenture hiring Any Graduate Freshers for Tech Support Associate Services at Bangalore. Provide L1 technical support, troubleshooting hardware/software and IT service desk management.'
    },
    {
        id: 'cognizant-service-desk-2026',
        title: 'Service Desk - Digital Workplace Practice',
        company: 'Cognizant',
        location: 'PAN India',
        type: 'Full-Time',
        salary: 'Industry Competitive',
        experience: 'Freshers Only',
        postedDate: '2026-05-26',
        description: 'Cognizant Service Desk Off Campus Drive 2026 for fresh graduates (2025/2026 batch) across PAN India with no service bond requirement.'
    },
    {
        id: 'trimble-software-engineer-2026',
        title: 'Software Engineer 1',
        company: 'Trimble Inc.',
        location: 'Chennai, Tamil Nadu',
        type: 'Hybrid',
        salary: '₹6 LPA – ₹12 LPA',
        experience: 'Freshers / Early Career',
        postedDate: '2026-05-26',
        description: 'Trimble Inc. hiring Software Engineer 1 in Chennai. Work with C#/.NET Core or Node.js/Java/React on scalable SaaS applications and cloud platforms.'
    },
    {
        id: 'tech-mahindra-voice-chat-support-2026',
        title: 'Voice & Chat Support Executive',
        company: 'Tech Mahindra',
        location: 'Multiple Locations',
        type: 'Full-Time',
        salary: '₹2.5 LPA – ₹3.5 LPA',
        experience: '0 to 5 Years',
        postedDate: '2026-05-26',
        description: 'Tech Mahindra hiring Voice & Chat Support Executives across India. Manage customer technical support, troubleshooting, and enterprise service desk operations.'
    },
    {
        id: 'amazon-sde-i-2026',
        title: 'Software Dev Engineer I (SDE-I)',
        company: 'Amazon',
        location: 'Bengaluru, Hyderabad, Chennai, Delhi',
        type: 'Full-Time',
        salary: 'Highly Competitive Package + RSUs',
        experience: 'Freshers (0–1 Year)',
        postedDate: '2026-05-23',
        description: 'Amazon Off Campus Drive 2026 for SDE-I. Work on high-scale distributed systems, AWS cloud architectures, data structures, algorithms, and microservices.'
    },
    {
        id: 'harman-devops-2026',
        title: 'Associate Engineer – AWS DevOps',
        company: 'Harman International (Samsung)',
        location: 'Bangalore, Karnataka',
        type: 'Full-Time',
        salary: 'Competitive Package',
        experience: '0–1 Year / Freshers',
        postedDate: '2026-05-23',
        description: 'Harman International hiring Associate Engineer – AWS DevOps in Bangalore. Build and manage CI/CD pipelines, Docker containers, Kubernetes clusters, and AWS infrastructure.'
    }
];

const TOOLS = [
    {
        slug: 'adv-lab',
        title: 'ADV Lab | Free Online Cloud IDE & Multi-Language Code Compiler',
        description: 'Run, debug, and test code in Java, Python, C, C++, and JavaScript directly in your browser. ADV Lab features instant compilation, standard I/O support, and syntax highlighting with zero setup.',
        keywords: 'online ide, cloud compiler, online code editor, adv lab, run java online, run python online, run cpp online, adv indian coder'
    },
    {
        slug: 'online-java-compiler',
        title: 'Online Java Compiler | Run Java Programs in Browser - ADV Lab',
        description: 'Write, compile, and execute Java code online instantly with JDK 21 support, real-time standard input (stdin), syntax highlighting, and fast execution at ADV Indian Coder.',
        keywords: 'online java compiler, run java online, java ide online, java compiler with stdin, execute java in browser, adv indian coder'
    },
    {
        slug: 'online-python-compiler',
        title: 'Online Python 3 Compiler & Interactive Interpreter - ADV Lab',
        description: 'Free online Python 3 compiler. Write Python code, test algorithms, execute scripts with interactive terminal input, and debug live in your browser without local installation.',
        keywords: 'online python compiler, python 3 online interpreter, run python in browser, python ide online, adv indian coder'
    },
    {
        slug: 'online-c-compiler',
        title: 'Online C Compiler | Compile & Run C Code - ADV Lab',
        description: 'Fast online GCC C compiler. Write C programs, test pointers, memory allocation, and data structures with real-time compilation and terminal standard input.',
        keywords: 'online c compiler, run c code online, gcc c compiler online, c ide in browser, c programming online, adv indian coder'
    },
    {
        slug: 'online-cpp-compiler',
        title: 'Online C++ Compiler (GCC C++20/C++23) - ADV Lab',
        description: 'Modern online C++ compiler supporting C++17, C++20, and C++23. Run STL code, templates, and algorithms with high-speed execution and standard I/O console.',
        keywords: 'online cpp compiler, online c++ ide, g++ online compiler, run c++ in browser, c++ stl online, adv indian coder'
    },
    {
        slug: 'online-javascript-compiler',
        title: 'Online JavaScript (Node.js) Compiler & Sandbox - ADV Lab',
        description: 'Execute modern JavaScript (ES6+ / Node.js) code online. Test algorithms, async/await, closures, and object manipulation with instant console output.',
        keywords: 'online javascript compiler, run js online, nodejs online playground, javascript sandbox, adv indian coder'
    }
];

const PAGES = [
    {
        slug: '',
        title: 'ADV Indian Coder | Online IDE, Job-Ready Courses, Live Mentorship & Tech Jobs',
        description: 'India\'s leading tech learning ecosystem. Master Java, Python, C++, DSA, React, SQL, and Full Stack Development. Access ADV Lab Cloud IDE, Live Masterclasses, ADV ExamHub, and Tech Jobs.',
        keywords: 'adv indian coder, adv lab, online java compiler, online python compiler, free coding courses, dsa practice, exam hub, tech jobs india, vinay kumar mahato',
        h1: 'Master Coding with Real-World Projects & Free Mentorship'
    },
    {
        slug: 'courses',
        title: 'Explore Job-Ready Coding Courses & Roadmaps | ADV Indian Coder',
        description: 'Explore 40+ free, job-ready programming courses in Java, Python, C++, DSA, React, SQL, Node.js, AI, and Full Stack Development with interactive ADV Lab practice.',
        keywords: 'programming courses, free coding tutorials, computer science roadmaps, learn java, learn python, learn web development, adv indian coder',
        h1: 'Explore Comprehensive Job-Ready Courses & Technical Roadmaps'
    },
    {
        slug: 'practice',
        title: 'Practice Hub | Curated DSA & Algorithmic Problem Solving - ADV Indian Coder',
        description: 'Sharpen your coding skills with curated Data Structures and Algorithms problems. Practice with automated test cases, hints, and multi-language compiler support.',
        keywords: 'dsa practice, coding problems, leetcode alternatives, algorithmic practice, practice hub, adv indian coder',
        h1: 'Practice Hub: Master Data Structures & Algorithms with Real Problem Solving'
    },
    {
        slug: 'exam-hub',
        title: 'ADV ExamHub | Competitive Coding Exams, Timed Mock Tests & Certifications',
        description: 'Test your technical knowledge with competitive mock exams, timed assessments, AI performance analysis, and earn verifiable certifications in programming.',
        keywords: 'exam hub, coding mock tests, online coding test, technical certification exams, adv exam hub, adv indian coder',
        h1: 'ADV ExamHub: Timed Assessments, Mock Exams & Skill Certifications'
    },
    {
        slug: 'masterclass',
        title: 'Live Interactive Masterclasses & 1-on-1 Mentorship | ADV Indian Coder',
        description: 'Join live 30-day interactive masterclasses in Python, Java, SQL, Data Science, AI, and Full Stack Engineering. Accelerate your career with real-time mentorship.',
        keywords: 'live masterclasses, coding mentorship, live tech training, python masterclass, java live classes, adv indian coder masterclass',
        h1: 'Live Interactive Masterclasses & Career Mentorship Programs'
    },
    {
        slug: 'resources',
        title: 'Developer Notes, Cheat Sheets & Handwritten Study Material | ADV Indian Coder',
        description: 'Download comprehensive developer notes, handwritten programming PDFs, interview cheat sheets, formula guides, and academic study material.',
        keywords: 'coding notes pdf, handwritten programming notes, java notes pdf, python cheat sheet, dsa notes, adv indian coder resources',
        h1: 'Developer Notes, Handwritten Cheat Sheets & Study Materials'
    },
    {
        slug: 'jobs',
        title: 'Tech Jobs & Fresher Off Campus Drives 2026 | ADV Indian Coder',
        description: 'Discover verified off-campus recruitment drives, internships, SDE-1 roles, QA tester jobs, and fresher tech hiring from top MNCs across India.',
        keywords: 'tech jobs india, off campus drive 2026, fresher it jobs, sde-1 hiring, software engineer jobs, internship bangalore, adv indian coder jobs',
        h1: 'Tech Jobs, Internships & Off-Campus Hiring Drives 2026'
    },
    {
        slug: 'rewards',
        title: 'Swag Store & Developer Rewards | ADV Indian Coder',
        description: 'Redeem your learning streak points and assessment coins for exclusive developer hoodies, t-shirts, laptop stickers, coffee mugs, and verified certifications.',
        keywords: 'developer swag, swag store, coding rewards, developer merchandise, hoodies stickers, adv indian coder rewards',
        h1: 'Developer Swag Store & Achievement Rewards'
    },
    {
        slug: 'success-stories',
        title: 'Student Success Stories & Placement Testimonials | ADV Indian Coder',
        description: 'Read inspiring stories and placement testimonials of students who mastered programming through ADV Indian Coder and cracked top tech company offers.',
        keywords: 'success stories, student testimonials, placement reviews, adv indian coder alumni, coding success stories',
        h1: 'Inspiring Student Placement Stories & Real Testimonials'
    },
    {
        slug: 'about',
        title: 'About ADV Indian Coder | Mission, Vision & Leadership',
        description: 'Learn about ADV Indian Coder’s mission to democratize quality software engineering education across India through practical, project-based learning and free mentorship.',
        keywords: 'about adv indian coder, vinay kumar mahato, tech education india, coding platform mission',
        h1: 'About ADV Indian Coder: Democratizing Tech Education'
    },
    {
        slug: 'faq',
        title: 'Frequently Asked Questions (FAQ) | ADV Indian Coder',
        description: 'Find clear answers to common questions regarding courses, free certifications, ADV Lab compiler, masterclasses, rewards, and technical support.',
        keywords: 'faq, frequently asked questions, adv indian coder help, course doubts, certification queries',
        h1: 'Frequently Asked Questions (FAQ)'
    },
    {
        slug: 'contact',
        title: 'Contact Support & Team | ADV Indian Coder',
        description: 'Get in touch with the ADV Indian Coder team for mentorship inquiries, technical support, corporate training, or platform assistance.',
        keywords: 'contact adv indian coder, customer support, email support, technical assistance',
        h1: 'Contact ADV Indian Coder Support & Leadership'
    },
    {
        slug: 'verify',
        title: 'Verify Certificate Credential | ADV Indian Coder Official Verification',
        description: 'Verify the authenticity of ADV Indian Coder Certificates of Completion. Enter the unique Credential ID to confirm issued student skills and achievements.',
        keywords: 'certificate verification, verify credential, adv coder certificate check, authentic certificate',
        h1: 'Official Certificate Credential Verification'
    },
    {
        slug: 'upsc-syllabus',
        title: 'UPSC Computer Science Syllabus & Exam Preparation Guide',
        description: 'Complete syllabus and study roadmap for UPSC Computer Science Optional paper. Detailed topic breakdowns, booklist, and preparation strategy.',
        keywords: 'upsc computer science syllabus, upsc cse optional, computer science upsc guide, adv indian coder upsc',
        h1: 'UPSC Computer Science Optional: Complete Syllabus & Roadmap'
    },
    {
        slug: 'community',
        title: 'Developer Community & Discussion Hub | ADV Indian Coder',
        description: 'Join thousands of ambitious software developers, freshers, and mentors. Collaborate on open-source projects, discuss technical queries, and grow together.',
        keywords: 'developer community, coding discord, telegram coding group, programmer network, adv indian coder community',
        h1: 'ADV Developer Community & Global Network'
    },
    {
        slug: 'terms',
        title: 'Terms of Service | ADV Indian Coder',
        description: 'Read the official Terms of Service governing the use of the ADV Indian Coder platform, courses, compilers, and educational services.',
        keywords: 'terms of service, terms and conditions, adv indian coder terms',
        h1: 'Terms of Service'
    },
    {
        slug: 'privacy',
        title: 'Privacy Policy | ADV Indian Coder',
        description: 'Understand how ADV Indian Coder collects, protects, and handles your personal information and learning data with strict privacy standards.',
        keywords: 'privacy policy, data protection, adv indian coder privacy',
        h1: 'Privacy Policy'
    },
    {
        slug: 'refund',
        title: 'Refund & Cancellation Policy | ADV Indian Coder',
        description: 'Review our transparent refund and cancellation policies for live masterclasses and paid educational offerings on ADV Indian Coder.',
        keywords: 'refund policy, cancellation policy, payment terms, adv indian coder refund',
        h1: 'Refund & Cancellation Policy'
    },
    {
        slug: 'cookies',
        title: 'Cookie Policy | ADV Indian Coder',
        description: 'Learn about how ADV Indian Coder uses cookies and local browser storage to personalize your coding workspace, theme, and progress tracking.',
        keywords: 'cookie policy, cookies, tracking, adv indian coder cookies',
        h1: 'Cookie Policy'
    }
];

function escapeHtml(text) {
    if (!text) return '';
    return String(text)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function renderPageHtml({
    canonicalUrl,
    title,
    description,
    keywords,
    ogType = 'website',
    schema,
    breadcrumbs = [],
    bodyHtml
}) {
    let html = templateHtml;

    // 1. Replace Title
    html = html.replace(/<title>.*?<\/title>/is, `<title>${escapeHtml(title)}</title>`);

    // 2. Replace / Inject Description
    if (html.includes('name="description"')) {
        html = html.replace(/<meta\s+name="description"\s+content=".*?"\s*\/?>/is, `<meta name="description" content="${escapeHtml(description)}" />`);
    } else {
        html = html.replace('</head>', `<meta name="description" content="${escapeHtml(description)}" />\n</head>`);
    }

    // 3. Replace / Inject Keywords
    if (keywords) {
        if (html.includes('name="keywords"')) {
            html = html.replace(/<meta\s+name="keywords"\s+content=".*?"\s*\/?>/is, `<meta name="keywords" content="${escapeHtml(keywords)}" />`);
        } else {
            html = html.replace('</head>', `<meta name="keywords" content="${escapeHtml(keywords)}" />\n</head>`);
        }
    }

    // 4. Ensure Strict Canonical Tag
    if (html.includes('rel="canonical"')) {
        html = html.replace(/<link\s+rel="canonical"\s+href=".*?"\s*\/?>/is, `<link rel="canonical" href="${canonicalUrl}" />`);
    } else {
        html = html.replace('</head>', `    <link rel="canonical" href="${canonicalUrl}" />\n</head>`);
    }

    // 5. OpenGraph & Twitter Tags
    html = html.replace(/<meta\s+property="og:title"\s+content=".*?"\s*\/?>/is, `<meta property="og:title" content="${escapeHtml(title)}" />`);
    html = html.replace(/<meta\s+property="og:description"\s+content=".*?"\s*\/?>/is, `<meta property="og:description" content="${escapeHtml(description)}" />`);
    html = html.replace(/<meta\s+property="og:url"\s+content=".*?"\s*\/?>/is, `<meta property="og:url" content="${canonicalUrl}" />`);
    html = html.replace(/<meta\s+property="og:type"\s+content=".*?"\s*\/?>/is, `<meta property="og:type" content="${ogType}" />`);

    html = html.replace(/<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/is, `<meta name="twitter:title" content="${escapeHtml(title)}" />`);
    html = html.replace(/<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/is, `<meta name="twitter:description" content="${escapeHtml(description)}" />`);

    // 6. Inject Schema.org JSON-LD
    if (schema) {
        const schemaArray = Array.isArray(schema) ? schema : [schema];
        const schemaTags = schemaArray.map(s => `    <script type="application/ld+json">\n    ${JSON.stringify(s, null, 2)}\n    </script>`).join('\n');
        html = html.replace('</head>', `${schemaTags}\n</head>`);
    }

    // 7. Inject Breadcrumbs & Static Body inside <div id="root">
    const fullBody = `
    <header style="padding: 1rem; border-bottom: 1px solid rgba(128,128,128,0.2); display: flex; justify-content: space-between; align-items: center;">
        <a href="/" style="font-weight: 800; font-size: 1.25rem; text-decoration: none; color: inherit;">⚡ ADV Indian Coder</a>
        <nav style="display: flex; gap: 1rem; flex-wrap: wrap;">
            <a href="/courses" style="text-decoration: none; color: inherit; font-weight: 600;">Courses</a>
            <a href="/adv-lab" style="text-decoration: none; color: inherit; font-weight: 600;">ADV Lab</a>
            <a href="/practice" style="text-decoration: none; color: inherit; font-weight: 600;">Practice</a>
            <a href="/exam-hub" style="text-decoration: none; color: inherit; font-weight: 600;">ExamHub</a>
            <a href="/jobs" style="text-decoration: none; color: inherit; font-weight: 600;">Jobs</a>
            <a href="/rewards" style="text-decoration: none; color: inherit; font-weight: 600;">Swag Store</a>
            <a href="/masterclass" style="text-decoration: none; color: inherit; font-weight: 600;">Masterclass</a>
            <a href="/resources" style="text-decoration: none; color: inherit; font-weight: 600;">Notes</a>
        </nav>
    </header>
    ${breadcrumbs.length > 0 ? `
    <nav aria-label="Breadcrumb" style="padding: 0.75rem 1rem; font-size: 0.875rem; color: #6b7280; display: flex; gap: 0.5rem; align-items: center;">
        <a href="/" style="color: inherit; text-decoration: none;">Home</a>
        ${breadcrumbs.map((b, i) => `<span>&gt;</span> ${i === breadcrumbs.length - 1 ? `<strong style="color: inherit;">${escapeHtml(b.name)}</strong>` : `<a href="${b.url}" style="color: inherit; text-decoration: none;">${escapeHtml(b.name)}</a>`}`).join(' ')}
    </nav>` : ''}
    <main style="max-width: 1200px; margin: 0 auto; padding: 2rem 1rem; min-height: 70vh;">
        ${bodyHtml}
    </main>
    <footer style="padding: 3rem 1rem; border-top: 1px solid rgba(128,128,128,0.2); background: rgba(0,0,0,0.02); text-align: center;">
        <p style="font-weight: 700; margin-bottom: 0.5rem;">ADV Indian Coder &copy; 2026 — Master Coding with Real-World Projects &amp; Free Mentorship</p>
        <p style="font-size: 0.875rem; color: #6b7280; margin-bottom: 1rem;">Founded by Vinay Kumar Mahato | Bengaluru, Karnataka, India</p>
        <div style="display: flex; justify-content: center; gap: 1.5rem; flex-wrap: wrap; font-size: 0.875rem;">
            <a href="/about" style="color: inherit;">About</a>
            <a href="/courses" style="color: inherit;">All Courses</a>
            <a href="/jobs" style="color: inherit;">Tech Jobs</a>
            <a href="/faq" style="color: inherit;">FAQ</a>
            <a href="/contact" style="color: inherit;">Contact</a>
            <a href="/terms" style="color: inherit;">Terms</a>
            <a href="/privacy" style="color: inherit;">Privacy</a>
            <a href="/sitemap.xml" style="color: inherit;">Sitemap</a>
        </div>
    </footer>
    `;

    html = html.replace('<div id="root"></div>', `<div id="root">${fullBody}</div>`);
    return html;
}

function writePrerenderedFile(relPath, content) {
    let filePath;
    if (!relPath || relPath === '/') {
        filePath = path.join(distDir, 'index.html');
    } else {
        const cleanPath = relPath.startsWith('/') ? relPath.slice(1) : relPath;
        const targetDir = path.join(distDir, cleanPath);
        if (!fs.existsSync(targetDir)) {
            fs.mkdirSync(targetDir, { recursive: true });
        }
        filePath = path.join(targetDir, 'index.html');
    }
    fs.writeFileSync(filePath, content, 'utf8');
    return filePath;
}

console.log('--- Starting Automated Static Site Generation (SSG) Pre-rendering ---');
let count = 0;

// 1. Pre-render Main Static Hubs & Info Pages
PAGES.forEach(page => {
    const canonicalUrl = page.slug === '' ? `${baseUrl}/` : `${baseUrl}/${page.slug}`;
    const breadcrumbs = page.slug === '' ? [] : [{ name: page.h1.split(':')[0], url: `/${page.slug}` }];

    const breadcrumbSchema = page.slug === '' ? null : {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${baseUrl}/` },
            { '@type': 'ListItem', position: 2, name: page.h1.split(':')[0], item: canonicalUrl }
        ]
    };

    const bodyHtml = `
        <article>
            <h1 style="font-size: 2.25rem; font-weight: 900; line-height: 1.2; margin-bottom: 1rem;">${escapeHtml(page.h1)}</h1>
            <p style="font-size: 1.125rem; line-height: 1.7; color: #4b5563; margin-bottom: 2rem;">${escapeHtml(page.description)}</p>
            <div style="background: rgba(59, 130, 246, 0.05); border-left: 4px solid #3b82f6; padding: 1.5rem; border-radius: 0.5rem; margin-bottom: 2rem;">
                <p style="font-weight: 600; color: #1d4ed8; margin: 0;">⚡ Learn by doing with free cloud compilers, structured roadmaps, live mentorship, and verified certifications at ADV Indian Coder.</p>
            </div>
            ${page.slug === 'courses' ? `
            <section style="margin-top: 2rem;">
                <h2 style="font-size: 1.5rem; font-weight: 800; margin-bottom: 1.5rem;">Explore All 43 Technical Roadmaps &amp; Modules</h2>
                <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1rem;">
                    ${Object.entries(COURSE_METADATA).map(([slug, c]) => `
                        <div style="border: 1px solid rgba(128,128,128,0.2); border-radius: 0.75rem; padding: 1.25rem;">
                            <h3 style="font-size: 1.125rem; font-weight: 700; margin-bottom: 0.5rem;"><a href="/course/${slug}" style="text-decoration: none; color: inherit;">${escapeHtml(c.title)}</a></h3>
                            <p style="font-size: 0.875rem; color: #6b7280; margin-bottom: 0.75rem;">${escapeHtml(c.tagline)}</p>
                            <a href="/course/${slug}" style="color: #2563eb; font-weight: 600; font-size: 0.875rem; text-decoration: none;">Start Learning &rarr;</a>
                        </div>
                    `).join('')}
                </div>
            </section>
            ` : ''}
            ${page.slug === 'jobs' ? `
            <section style="margin-top: 2rem;">
                <h2 style="font-size: 1.5rem; font-weight: 800; margin-bottom: 1.5rem;">Featured Off-Campus Drives &amp; Tech Job Openings</h2>
                <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 1.25rem;">
                    ${JOBS.map(j => `
                        <div style="border: 1px solid rgba(128,128,128,0.2); border-radius: 0.75rem; padding: 1.25rem;">
                            <span style="font-size: 0.75rem; background: #e0f2fe; color: #0369a1; padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-weight: 700;">${escapeHtml(j.company)}</span>
                            <h3 style="font-size: 1.125rem; font-weight: 700; margin: 0.5rem 0;"><a href="/jobs/${j.id}" style="text-decoration: none; color: inherit;">${escapeHtml(j.title)}</a></h3>
                            <p style="font-size: 0.875rem; color: #4b5563; margin-bottom: 0.5rem;">📍 ${escapeHtml(j.location)} | 💼 ${escapeHtml(j.type)}</p>
                            <p style="font-size: 0.875rem; color: #6b7280; margin-bottom: 0.75rem;">${escapeHtml(j.description)}</p>
                            <a href="/jobs/${j.id}" style="color: #2563eb; font-weight: 600; font-size: 0.875rem; text-decoration: none;">View Job Details &amp; Apply &rarr;</a>
                        </div>
                    `).join('')}
                </div>
            </section>
            ` : ''}
        </article>
    `;

    const html = renderPageHtml({
        canonicalUrl,
        title: page.title,
        description: page.description,
        keywords: page.keywords,
        schema: breadcrumbSchema ? [breadcrumbSchema] : undefined,
        breadcrumbs,
        bodyHtml
    });

    writePrerenderedFile(page.slug, html);
    count++;
});

// 2. Pre-render All 43 Programming Course Modules
const courseEntries = Object.entries(COURSE_METADATA);
courseEntries.forEach(([slug, course], courseIndex) => {
    const canonicalUrl = `${baseUrl}/course/${slug}`;
    const breadcrumbs = [
        { name: 'Courses', url: '/courses' },
        { name: course.title.split(':')[0], url: `/course/${slug}` }
    ];

    const prevCourse = courseIndex > 0 ? courseEntries[courseIndex - 1] : null;
    const nextCourse = courseIndex < courseEntries.length - 1 ? courseEntries[courseIndex + 1] : null;

    const courseSchema = {
        '@context': 'https://schema.org',
        '@type': 'Course',
        name: course.title,
        description: course.description,
        provider: {
            '@type': 'EducationalOrganization',
            name: 'ADV Indian Coder',
            url: baseUrl,
            sameAs: 'https://www.youtube.com/@advindiancoder'
        },
        educationalLevel: course.level,
        inLanguage: 'en',
        teaches: course.topics.join(', '),
        hasCourseInstance: {
            '@type': 'CourseInstance',
            courseMode: ['Online', 'Interactive', 'Self-Paced'],
            courseWorkload: 'PT40H',
            instructor: {
                '@type': 'Person',
                name: 'Vinay Kumar Mahato',
                jobTitle: 'Founder & Lead Software Engineer',
                url: 'https://www.linkedin.com/in/vinaykumarmahato'
            }
        }
    };

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${baseUrl}/` },
            { '@type': 'ListItem', position: 2, name: 'Courses', item: `${baseUrl}/courses` },
            { '@type': 'ListItem', position: 3, name: course.title.split(':')[0], item: canonicalUrl }
        ]
    };

    const learningResourceSchema = {
        '@context': 'https://schema.org',
        '@type': 'LearningResource',
        name: `${course.title} - Complete Tutorial & Code Examples`,
        description: course.description,
        educationalLevel: course.level,
        learningResourceType: 'Tutorial',
        author: {
            '@type': 'Person',
            name: 'Vinay Kumar Mahato'
        },
        publisher: {
            '@type': 'Organization',
            name: 'ADV Indian Coder',
            url: baseUrl
        }
    };

    const bodyHtml = `
        <article>
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1rem;">
                <span style="background: #e0f2fe; color: #0369a1; padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 700; text-transform: uppercase;">${escapeHtml(course.category)}</span>
                <span style="background: #dcfce7; color: #15803d; padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 700; text-transform: uppercase;">Level: ${escapeHtml(course.level)}</span>
                <span style="background: #fef3c7; color: #b45309; padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 700; text-transform: uppercase;">100% Free + Lab IDE</span>
            </div>
            <h1 style="font-size: 2.5rem; font-weight: 900; line-height: 1.2; margin-bottom: 0.75rem;">${escapeHtml(course.title)}</h1>
            <p style="font-size: 1.25rem; font-weight: 600; color: #4b5563; margin-bottom: 1.5rem;">${escapeHtml(course.tagline)}</p>
            <p style="font-size: 1.125rem; line-height: 1.7; color: #374151; margin-bottom: 2rem;">${escapeHtml(course.description)}</p>

            <div style="background: rgba(16, 185, 129, 0.05); border-left: 4px solid #10b981; padding: 1.5rem; border-radius: 0.5rem; margin-bottom: 2.5rem;">
                <h2 style="font-size: 1.125rem; font-weight: 800; color: #047857; margin-bottom: 0.5rem;">💡 Interactive Cloud IDE &amp; Assessment</h2>
                <p style="margin: 0; color: #065f46;">You can practice and run every code example directly in your browser with zero setup in <a href="/adv-lab" style="color: #047857; font-weight: 700; text-decoration: underline;">ADV Lab Cloud IDE</a>. Complete all chapters to earn your verified Certificate of Completion.</p>
            </div>

            <section style="margin-bottom: 3rem;">
                <h2 style="font-size: 1.75rem; font-weight: 800; margin-bottom: 1.5rem; border-bottom: 2px solid rgba(128,128,128,0.2); padding-bottom: 0.5rem;">📚 Complete Course Syllabus &amp; Step-by-Step Topics</h2>
                <div style="display: grid; gap: 1rem;">
                    ${course.topics.map((t, idx) => `
                        <div style="border: 1px solid rgba(128,128,128,0.2); border-radius: 0.75rem; padding: 1.25rem; background: rgba(0,0,0,0.01);">
                            <h3 style="font-size: 1.125rem; font-weight: 700; margin-bottom: 0.5rem; color: #1e293b;">Chapter ${idx + 1}: ${escapeHtml(t)}</h3>
                            <p style="font-size: 0.9375rem; color: #4b5563; line-height: 1.6; margin-bottom: 0.75rem;">Learn the fundamental theory, syntax blueprint, memory model, architectural best practices, and real-world implementation of ${escapeHtml(t)} in ${escapeHtml(course.title.split(':')[0])}.</p>
                            <div style="font-size: 0.8125rem; color: #6b7280;">Includes: Definition &bull; Syntax &bull; Visual Diagram &bull; Runnable Code in ADV Lab &bull; Interview FAQs</div>
                        </div>
                    `).join('')}
                </div>
            </section>

            <section style="margin-bottom: 3rem;">
                <h2 style="font-size: 1.75rem; font-weight: 800; margin-bottom: 1.5rem; border-bottom: 2px solid rgba(128,128,128,0.2); padding-bottom: 0.5rem;">❓ Frequently Asked Questions (FAQ)</h2>
                <div style="display: grid; gap: 1rem;">
                    <div style="border: 1px solid rgba(128,128,128,0.2); border-radius: 0.5rem; padding: 1rem;">
                        <h3 style="font-size: 1rem; font-weight: 700; margin-bottom: 0.5rem;">Is this ${escapeHtml(course.title.split(':')[0])} tutorial suitable for freshers?</h3>
                        <p style="font-size: 0.9375rem; color: #4b5563; margin: 0;">Yes, our curriculum starts from absolute fundamentals and systematically guides you to advanced industry standards with hands-on projects.</p>
                    </div>
                    <div style="border: 1px solid rgba(128,128,128,0.2); border-radius: 0.5rem; padding: 1rem;">
                        <h3 style="font-size: 1rem; font-weight: 700; margin-bottom: 0.5rem;">How do I run and test ${escapeHtml(course.title.split(':')[0])} code?</h3>
                        <p style="font-size: 0.9375rem; color: #4b5563; margin: 0;">Use our integrated ADV Lab cloud editor to execute and debug code directly in your browser with zero local software installation.</p>
                    </div>
                    <div style="border: 1px solid rgba(128,128,128,0.2); border-radius: 0.5rem; padding: 1rem;">
                        <h3 style="font-size: 1rem; font-weight: 700; margin-bottom: 0.5rem;">Will I get a Certificate of Completion?</h3>
                        <p style="font-size: 0.9375rem; color: #4b5563; margin: 0;">Yes! Upon completing the course topics and assessment, you receive a free, publicly verifiable certificate.</p>
                    </div>
                </div>
            </section>

            <nav aria-label="Course Navigation" style="display: flex; justify-content: space-between; align-items: center; padding-top: 2rem; border-top: 1px solid rgba(128,128,128,0.2); margin-top: 2rem;">
                <div>
                    ${prevCourse ? `<a href="/course/${prevCourse[0]}" style="text-decoration: none; font-weight: 700; color: #2563eb; display: inline-flex; align-items: center; gap: 0.5rem;">&larr; Previous: ${escapeHtml(prevCourse[1].title.split(':')[0])}</a>` : '<span></span>'}
                </div>
                <div>
                    ${nextCourse ? `<a href="/course/${nextCourse[0]}" style="text-decoration: none; font-weight: 700; color: #2563eb; display: inline-flex; align-items: center; gap: 0.5rem;">Next: ${escapeHtml(nextCourse[1].title.split(':')[0])} &rarr;</a>` : '<span></span>'}
                </div>
            </nav>
        </article>
    `;

    const html = renderPageHtml({
        canonicalUrl,
        title: `${course.title} | ADV Indian Coder`,
        description: course.description,
        keywords: course.keywords,
        ogType: 'article',
        schema: [courseSchema, breadcrumbSchema, learningResourceSchema],
        breadcrumbs,
        bodyHtml
    });

    writePrerenderedFile(`course/${slug}`, html);
    count++;
});

// 3. Pre-render All 12 Job Detail Pages
JOBS.forEach(job => {
    const canonicalUrl = `${baseUrl}/jobs/${job.id}`;
    const breadcrumbs = [
        { name: 'Jobs', url: '/jobs' },
        { name: `${job.company} - ${job.title}`, url: `/jobs/${job.id}` }
    ];

    const jobPostingSchema = {
        '@context': 'https://schema.org',
        '@type': 'JobPosting',
        title: job.title,
        description: job.description,
        datePosted: job.postedDate,
        validThrough: '2026-12-31T23:59:59Z',
        employmentType: job.type.includes('Intern') ? 'INTERN' : 'FULL_TIME',
        hiringOrganization: {
            '@type': 'Organization',
            name: job.company,
            sameAs: baseUrl
        },
        jobLocation: {
            '@type': 'Place',
            address: {
                '@type': 'PostalAddress',
                addressLocality: job.location.split(',')[0].trim(),
                addressCountry: 'IN'
            }
        }
    };

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${baseUrl}/` },
            { '@type': 'ListItem', position: 2, name: 'Jobs', item: `${baseUrl}/jobs` },
            { '@type': 'ListItem', position: 3, name: `${job.company} - ${job.title}`, item: canonicalUrl }
        ]
    };

    const bodyHtml = `
        <article>
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1rem;">
                <span style="background: #e0f2fe; color: #0369a1; padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 700;">🏢 ${escapeHtml(job.company)}</span>
                <span style="background: #dcfce7; color: #15803d; padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 700;">📍 ${escapeHtml(job.location)}</span>
                <span style="background: #fef3c7; color: #b45309; padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 700;">💼 ${escapeHtml(job.type)}</span>
            </div>
            <h1 style="font-size: 2.25rem; font-weight: 900; line-height: 1.2; margin-bottom: 0.75rem;">${escapeHtml(job.title)} at ${escapeHtml(job.company)}</h1>
            <p style="font-size: 1rem; color: #6b7280; margin-bottom: 1.5rem;">Posted on ${escapeHtml(job.postedDate)} | Experience: <strong>${escapeHtml(job.experience)}</strong> | Salary: <strong>${escapeHtml(job.salary)}</strong></p>

            <div style="background: rgba(0,0,0,0.02); border: 1px solid rgba(128,128,128,0.2); border-radius: 0.75rem; padding: 1.5rem; margin-bottom: 2rem;">
                <h2 style="font-size: 1.25rem; font-weight: 800; margin-bottom: 1rem;">Job Description &amp; Eligibility</h2>
                <p style="line-height: 1.7; color: #374151; margin-bottom: 1.5rem;">${escapeHtml(job.description)}</p>
                <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                    <a href="/jobs" style="background: #2563eb; color: white; padding: 0.75rem 1.5rem; border-radius: 0.5rem; font-weight: 700; text-decoration: none;">View Official Application Link &rarr;</a>
                    <a href="/courses" style="border: 1px solid #2563eb; color: #2563eb; padding: 0.75rem 1.5rem; border-radius: 0.5rem; font-weight: 700; text-decoration: none;">Prepare for Tech Interviews</a>
                </div>
            </div>
        </article>
    `;

    const html = renderPageHtml({
        canonicalUrl,
        title: `${job.title} at ${job.company} (Off Campus 2026) | ADV Indian Coder`,
        description: job.description.slice(0, 155),
        keywords: `${job.title}, ${job.company} jobs, ${job.company} careers, fresher jobs 2026, off campus drive 2026, adv indian coder jobs`,
        ogType: 'article',
        schema: [jobPostingSchema, breadcrumbSchema],
        breadcrumbs,
        bodyHtml
    });

    writePrerenderedFile(`jobs/${job.id}`, html);
    count++;
});

// 4. Pre-render All Online Compilers & Developer Tools
TOOLS.forEach(tool => {
    const canonicalUrl = `${baseUrl}/${tool.slug}`;
    const breadcrumbs = [
        { name: 'Developer Tools', url: '/adv-lab' },
        { name: tool.title.split('|')[0].trim(), url: `/${tool.slug}` }
    ];

    const webAppSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: tool.title.split('|')[0].trim(),
        description: tool.description,
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'All',
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD'
        },
        provider: {
            '@type': 'Organization',
            name: 'ADV Indian Coder',
            url: baseUrl
        }
    };

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${baseUrl}/` },
            { '@type': 'ListItem', position: 2, name: 'Tools', item: `${baseUrl}/adv-lab` },
            { '@type': 'ListItem', position: 3, name: tool.title.split('|')[0].trim(), item: canonicalUrl }
        ]
    };

    const bodyHtml = `
        <article>
            <h1 style="font-size: 2.25rem; font-weight: 900; line-height: 1.2; margin-bottom: 1rem;">${escapeHtml(tool.title.split('|')[0].trim())}</h1>
            <p style="font-size: 1.125rem; line-height: 1.7; color: #4b5563; margin-bottom: 2rem;">${escapeHtml(tool.description)}</p>
            <div style="background: #0f172a; color: #f8fafc; padding: 2rem; border-radius: 1rem; margin-bottom: 2rem; font-family: monospace;">
                <p style="color: #38bdf8; margin: 0 0 1rem 0;">// ADV Lab Interactive Cloud Engine — Fast, Secure, Zero Installation</p>
                <p style="color: #94a3b8; margin: 0 0 1rem 0;">Loading interactive browser coding workspace...</p>
                <div style="background: #1e293b; padding: 1rem; border-radius: 0.5rem; border: 1px solid #334155;">
                    <code>Write your code &bull; Provide custom input (stdin) &bull; Click Run to execute in real-time</code>
                </div>
            </div>
            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                <a href="/courses" style="color: #2563eb; font-weight: 600; text-decoration: none;">&larr; View Programming Courses</a>
                <a href="/practice" style="color: #2563eb; font-weight: 600; text-decoration: none;">Practice DSA Problems &rarr;</a>
            </div>
        </article>
    `;

    const html = renderPageHtml({
        canonicalUrl,
        title: tool.title,
        description: tool.description,
        keywords: tool.keywords,
        schema: [webAppSchema, breadcrumbSchema],
        breadcrumbs,
        bodyHtml
    });

    writePrerenderedFile(tool.slug, html);
    count++;
});

console.log(`=== Successfully pre-rendered ${count} pages into static HTML inside dist/ ===`);