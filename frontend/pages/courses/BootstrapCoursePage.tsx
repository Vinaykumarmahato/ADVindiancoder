import React, { useState } from 'react';
import CoursePageLayout from '../../components/CoursePageLayout';
import { Layout, Code, BookOpen, Lightbulb, FileText, Cpu, Layers, ShieldAlert, Zap, Palette, Check, AlertTriangle } from 'lucide-react';
import CodeBlock from '../../components/CodeBlock';
import MermaidDiagram from '../../components/MermaidDiagram';

interface BootstrapTopic {
    id: string;
    title: string;
    definition: string;
    example?: string;
    syntax?: string;
    realLifeScenario?: string;
    codeSnippet?: string | null;
    content: React.ReactNode;
}

const BootstrapCoursePage = () => {
    const [activeTopicIndex, setActiveTopicIndex] = useState(0);

    const courseData: BootstrapTopic[] = [
        // ==================== BEGINNER TIER ====================
        {
            id: 'bs5-intro-setup',
            title: '1. [Beginner] Introduction & Setup (Breakpoints & Containers)',
            definition: 'Bootstrap 5 is a mobile-first HTML, CSS, and JS framework. Containers (.container, .container-fluid) center and pad website content across 6 responsive breakpoints (xs, sm, md, lg, xl, xxl).',
            syntax: `<!-- Bootstrap 5 CDN & Meta Viewport Blueprint -->
<meta name="viewport" content="width=device-width, initial-scale=1">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>`,
            codeSnippet: `<div className="container py-4">
    <div className="p-5 mb-4 bg-primary text-white rounded-3 shadow">
        <h1 className="display-5 fw-bold">Bootstrap 5 Framework</h1>
        <p className="col-md-8 fs-4">Build responsive UIs faster with mobile-first utilities.</p>
        <button className="btn btn-light btn-lg" type="button">Explore Docs</button>
    </div>
</div>`,
            realLifeScenario: 'Enterprise admin dashboards use `.container-fluid` for full-width data grid layouts.',
            content: (
                <div className="space-y-6">
                    {/* 1. Definition */}
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Concept Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">Bootstrap 5 is a mobile-first HTML, CSS, and JS framework. Containers (.container, .container-fluid) center and pad website content across 6 responsive breakpoints.</p>
                    </div>

                    {/* 2. Real-Life Analogy & Example */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">Think of containers as Tupperware that perfectly shapes your content to fit screens from phones (tiny containers) to ultrawide monitors (massive containers).</p>
                    </div>

                    {/* 3. Visual Explanation */}
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-purple-600" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph TD
    A[Viewport] --> B{Screen Size}
    B -->|< 576px| C[xs Breakpoint]
    B -->|>= 576px| D[sm Breakpoint]
    B -->|>= 768px| E[md Breakpoint]
    B -->|>= 992px| F[lg Breakpoint]
    B -->|>= 1200px| G[xl Breakpoint]`} />
                    </div>

                    {/* 4. Sample Code */}
                    <div className="space-y-2">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-purple-600" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`<div className="container py-4">\n    <div className="p-5 mb-4 bg-primary text-white rounded-3 shadow">\n        <h1 className="display-5 fw-bold">Bootstrap 5 Framework</h1>\n    </div>\n</div>`} lang="html" colorClass="purple" filename="example.html" />
                    </div>

                    {/* 5. Real-World Application */}
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">Enterprise admin dashboards use .container-fluid for full-width data grid layouts while blogs use .container to restrict width for readability.</p>
                    </div>

                    {/* 6. Advantages */}
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-emerald-400 mb-2 flex items-center">
                            <Check className="w-5 h-5 mr-2" />
                            Advantages
                        </h4>
                        <p className="text-gray-300">Simplifies responsive design without media queries.</p>
                    </div>

                    {/* 7. Disadvantages / Limitations */}
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-red-400 mb-2 flex items-center">
                            <AlertTriangle className="w-5 h-5 mr-2" />
                            Disadvantages & Limitations
                        </h4>
                        <p className="text-gray-300">Can lead to bloated HTML with too many utility classes.</p>
                    </div>
                </div>
            )
        },
        {
            id: 'bs5-grid-system',
            title: '2. [Beginner] 12-Column Grid System (.row, .col-md-6)',
            definition: 'The 12-column Grid system built with Flexbox aligns content via rows (.row) and columns (.col-md-*, .offset-md-*).',
            syntax: `<div className="row">\n    <div className="col-md-8">Main Area (8 Columns)</div>\n    <div className="col-md-4">Sidebar (4 Columns)</div>\n</div>`,
            codeSnippet: `<div className="container">\n    <div className="row g-3">\n        <div className="col-12 col-md-6 col-lg-4">\n            <div className="p-3 border bg-light">Card Column 1</div>\n        </div>\n    </div>\n</div>`,
            realLifeScenario: 'Responsive e-commerce product grids shift from 1 column on mobile screens to 3 columns on desktop monitors using `.col-12 .col-md-4`.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Concept Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">The 12-column Grid system built with Flexbox aligns content via rows (.row) and columns (.col-*).</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">Imagine a pizza cut into exactly 12 slices. A column can take 1 slice (.col-1) or half the pizza (.col-6), ensuring layout proportions stay consistent.</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-purple-600" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph LR
    A[.container] --> B[.row]
    B --> C[.col-md-4]
    B --> D[.col-md-8]
    C --> E[Sidebar 4/12]
    D --> F[Main Content 8/12]`} />
                    </div>
                    <div className="space-y-2">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-purple-600" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`<div className="row">\n    <div className="col-md-8">Main Area (8 Columns)</div>\n    <div className="col-md-4">Sidebar (4 Columns)</div>\n</div>`} lang="html" colorClass="purple" filename="example.html" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">Responsive e-commerce product grids shift from 1 column on mobile screens to 3 columns on desktop monitors.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-emerald-400 mb-2 flex items-center">
                            <Check className="w-5 h-5 mr-2" />
                            Advantages
                        </h4>
                        <p className="text-gray-300">Extremely flexible and predictable layout system.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-red-400 mb-2 flex items-center">
                            <AlertTriangle className="w-5 h-5 mr-2" />
                            Disadvantages & Limitations
                        </h4>
                        <p className="text-gray-300">Fixed to 12 columns by default, hard to divide by 5 or 7.</p>
                    </div>
                </div>
            )
        },
        {
            id: 'bs5-typography-utilities',
            title: '3. [Beginner] Typography & Utility Classes (Spacing & Colors)',
            definition: 'Bootstrap provides typography helpers (.display-1 to .display-6, .lead), text utilities (.text-center, .text-primary), background colors (.bg-dark), and spacing utilities (m-*, p-*).',
            syntax: `<h1 className="display-1 fw-bold text-center">Hero Header</h1>\n<p className="lead text-muted mb-4">Subtitle explanation paragraph</p>`,
            codeSnippet: `<div className="p-4 m-2 bg-dark text-white rounded shadow-sm">\n    <h2 className="display-6 text-warning">Important Announcement</h2>\n</div>`,
            realLifeScenario: 'Utility classes (`p-4`, `mb-3`, `text-center`) eliminate the need to write custom CSS rules for simple margin and padding tweaks.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Concept Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">Bootstrap provides typography helpers (.display-1), text utilities, background colors, and spacing utilities (m-*, p-*).</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">Utility classes are like spices in cooking. Instead of cooking a whole new dish (custom CSS), you sprinkle .mt-3 (margin-top) or .text-primary to season elements instantly.</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-purple-600" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph TD
    A[Utility Classes] --> B[Spacing]
    A --> C[Colors]
    A --> D[Typography]
    B --> E[m-3, p-4]
    C --> F[text-danger, bg-dark]
    D --> G[display-4, lead]`} />
                    </div>
                    <div className="space-y-2">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-purple-600" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`<h1 className="display-1 fw-bold text-center">Hero Header</h1>\n<p className="lead text-muted mb-4">Subtitle explanation paragraph</p>`} lang="html" colorClass="purple" filename="example.html" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">Rapidly styling a promotional banner with .bg-warning, .p-5, and .text-center without writing any custom stylesheet rules.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-emerald-400 mb-2 flex items-center">
                            <Check className="w-5 h-5 mr-2" />
                            Advantages
                        </h4>
                        <p className="text-gray-300">Dramatically speeds up UI styling.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-red-400 mb-2 flex items-center">
                            <AlertTriangle className="w-5 h-5 mr-2" />
                            Disadvantages & Limitations
                        </h4>
                        <p className="text-gray-300">Results in very long class attributes on elements.</p>
                    </div>
                </div>
            )
        },
        {
            id: 'bs5-buttons-badges',
            title: '4. [Beginner] Buttons & Badges (.btn-primary, .badge)',
            definition: 'Button components (.btn) support contextual colors (.btn-primary, .btn-outline-secondary), sizes (.btn-lg, .btn-sm), button groups, and badge indicators (.badge).',
            syntax: `<button type="button" className="btn btn-primary">Primary</button>\n<button type="button" className="btn btn-outline-danger">Danger</button>\n<span className="badge bg-secondary">New</span>`,
            codeSnippet: `<div className="d-flex gap-2 align-items-center">\n    <button type="button" className="btn btn-primary position-relative">\n        Notifications\n        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">\n            99+\n        </span>\n    </button>\n</div>`,
            realLifeScenario: 'Notification bell icons use absolute-positioned pill badges (`.rounded-pill .bg-danger`) to display unread alert counts.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Concept Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">Button components (.btn) support contextual colors, sizes, button groups, and badge indicators.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">Buttons are the steering wheels of an app, while badges are the dashboard lights telling you there is 1 unread message.</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-purple-600" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph LR
    A[.btn Base] --> B[.btn-primary]
    A --> C[.btn-outline-danger]
    D[.badge Base] --> E[.bg-success]
    D --> F[.rounded-pill]`} />
                    </div>
                    <div className="space-y-2">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-purple-600" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`<button type="button" className="btn btn-primary">Primary</button>\n<button type="button" className="btn btn-outline-danger">Danger</button>\n<span className="badge bg-secondary">New</span>`} lang="html" colorClass="purple" filename="example.html" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">Notification bell icons use absolute-positioned pill badges to display unread alert counts dynamically.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-emerald-400 mb-2 flex items-center">
                            <Check className="w-5 h-5 mr-2" />
                            Advantages
                        </h4>
                        <p className="text-gray-300">Consistent and accessible button designs out of the box.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-red-400 mb-2 flex items-center">
                            <AlertTriangle className="w-5 h-5 mr-2" />
                            Disadvantages & Limitations
                        </h4>
                        <p className="text-gray-300">Buttons often look heavily &quot;Bootstrap-y&quot; unless customized.</p>
                    </div>
                </div>
            )
        },
        // ==================== INTERMEDIATE TIER ====================
        {
            id: 'bs5-forms-floating-labels',
            title: '5. [Intermediate] Form Controls & Floating Labels (.form-floating)',
            definition: 'Form controls styling (.form-control, .form-select, .form-check, .form-switch), input groups, floating labels (.form-floating), and client-side form validation states.',
            syntax: `<div className="form-floating mb-3">\n    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com">\n    <label htmlFor="floatingInput">Email address</label>\n</div>`,
            codeSnippet: `<form className="needs-validation space-y-3" noValidate>\n    <div className="form-floating mb-3">\n        <input type="email" className="form-control" id="emailInput" placeholder="name@example.com" required />\n        <label htmlFor="emailInput">Email address</label>\n    </div>\n</form>`,
            realLifeScenario: 'Modern SaaS login screens use floating labels (`.form-floating`) for clean form input fields.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Concept Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">Form controls styling, input groups, floating labels, and client-side form validation states.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">Floating labels are like name tags that politely step out of the way to the top of the box when you start writing your name.</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-purple-600" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph TD
    A[Form Group] --> B[.form-floating]
    B --> C[Input field]
    B --> D[Label]
    C -.on focus.-> E[Label floats up]
    C -.on empty.-> F[Label inside input]`} />
                    </div>
                    <div className="space-y-2">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-purple-600" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`<div className="form-floating mb-3">\n    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com">\n    <label htmlFor="floatingInput">Email address</label>\n</div>`} lang="html" colorClass="purple" filename="example.html" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">Modern SaaS login screens use floating labels for clean, animated, and accessible form input fields.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-emerald-400 mb-2 flex items-center">
                            <Check className="w-5 h-5 mr-2" />
                            Advantages
                        </h4>
                        <p className="text-gray-300">Highly accessible and modern form inputs.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-red-400 mb-2 flex items-center">
                            <AlertTriangle className="w-5 h-5 mr-2" />
                            Disadvantages & Limitations
                        </h4>
                        <p className="text-gray-300">Complex markup required for simple inputs.</p>
                    </div>
                </div>
            )
        },
        {
            id: 'bs5-cards-navbars',
            title: '6. [Intermediate] Cards, Navbars & Navs (.card, .navbar)',
            definition: 'Cards (.card, .card-body, .card-footer) package structured content blocks. Responsive Navbars (.navbar-expand-lg) collapse navigation links into hamburger menus on mobile.',
            syntax: `<nav className="navbar navbar-expand-lg navbar-dark bg-dark">\n    <div className="container-fluid">\n        <a className="navbar-brand" href="#">Brand</a>\n    </div>\n</nav>`,
            codeSnippet: `<div className="card shadow-sm border-0 rounded-3">\n    <div className="card-header bg-white font-bold border-0 pt-3">\n        Featured Product\n    </div>\n</div>`,
            realLifeScenario: 'Blog platforms organize post grids inside Bootstrap Card components equipped with top image banners and footer tags.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Concept Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">Cards package structured content blocks. Responsive Navbars collapse navigation links into menus on mobile.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">A card is like a trading card with a picture, title, and stats. A navbar is the mall directory that folds into a pocket map on your phone.</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-purple-600" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph TD
    A[.navbar-expand-lg] --> B[Desktop: Horizontal Links]
    A --> C[Mobile: Hamburger Toggle]
    C --> D[.collapse.navbar-collapse]`} />
                    </div>
                    <div className="space-y-2">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-purple-600" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`<nav className="navbar navbar-expand-lg navbar-dark bg-dark">\n    <div className="container-fluid">\n        <a className="navbar-brand" href="#">Brand</a>\n    </div>\n</nav>`} lang="html" colorClass="purple" filename="example.html" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">Blog platforms organize post grids inside Bootstrap Card components equipped with top image banners.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-emerald-400 mb-2 flex items-center">
                            <Check className="w-5 h-5 mr-2" />
                            Advantages
                        </h4>
                        <p className="text-gray-300">Provides full navigation responsiveness easily.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-red-400 mb-2 flex items-center">
                            <AlertTriangle className="w-5 h-5 mr-2" />
                            Disadvantages & Limitations
                        </h4>
                        <p className="text-gray-300">Navbar HTML is heavily nested and verbose.</p>
                    </div>
                </div>
            )
        },
        {
            id: 'bs5-modals-accordions-carousels',
            title: '7. [Intermediate] Modals, Accordions & Carousels',
            definition: 'Interactive components powered by Bootstrap JavaScript: Modals (dialog popups), Accordions (.accordion collapsible panels), and Carousels (.carousel image sliders).',
            syntax: `<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">\n    Launch Modal\n</button>`,
            codeSnippet: `<div className="accordion" id="faqAccordion">\n    <div className="accordion-item">\n        <h2 className="accordion-header" id="headingOne">\n            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">\n                What is Bootstrap 5?\n            </button>\n        </h2>\n    </div>\n</div>`,
            realLifeScenario: 'FAQ pages use Bootstrap Accordion components to let users expand specific questions without cluttering the page.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Concept Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">Interactive components powered by Bootstrap JavaScript: Modals, Accordions, and Carousels.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">Modals are like pop-up books demanding attention, Accordions are filing cabinet drawers, and Carousels are rotating billboards.</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-purple-600" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph LR
    A[data-bs-toggle] --> B{Component Type}
    B -->|modal| C[Open Dialog]
    B -->|collapse| D[Toggle Accordion]
    B -->|carousel| E[Slide Images]`} />
                    </div>
                    <div className="space-y-2">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-purple-600" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">\n    Launch Modal\n</button>`} lang="html" colorClass="purple" filename="example.html" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">FAQ pages use Accordions to let users expand specific questions without cluttering the entire page.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-emerald-400 mb-2 flex items-center">
                            <Check className="w-5 h-5 mr-2" />
                            Advantages
                        </h4>
                        <p className="text-gray-300">Interactive components require zero custom JavaScript.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-red-400 mb-2 flex items-center">
                            <AlertTriangle className="w-5 h-5 mr-2" />
                            Disadvantages & Limitations
                        </h4>
                        <p className="text-gray-300">Can cause accessibility issues if improperly nested.</p>
                    </div>
                </div>
            )
        },
        {
            id: 'bs5-alerts-toasts-tooltips',
            title: '8. [Intermediate] Alerts, Toasts & Tooltips (.alert, .toast)',
            definition: 'Alerts (.alert, .alert-dismissible) convey status feedback. Toasts (.toast) display push notifications. Tooltips and Popovers provide contextual hover hints.',
            syntax: `<div className="alert alert-warning alert-dismissible fade show" role="alert">\n    <strong>Warning!</strong> Check input fields.\n    <button type="button" className="btn-close" data-bs-dismiss="alert"></button>\n</div>`,
            codeSnippet: `<div className="toast show align-items-center text-white bg-success border-0" role="alert">\n    <div className="d-flex">\n        <div className="toast-body">\n            Settings updated successfully!\n        </div>\n        <button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>\n    </div>\n</div>`,
            realLifeScenario: 'Form submit actions trigger floating toast notifications in the bottom-right corner of web apps.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Concept Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">Alerts convey status feedback. Toasts display push notifications. Tooltips provide contextual hover hints.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">Alerts are warning signs on the road. Toasts are gentle taps on the shoulder. Tooltips are reading glasses for tricky words.</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-purple-600" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph TD
    A[Feedback UI] --> B[Alert: Static inline]
    A --> C[Toast: Floating temporary]
    A --> D[Tooltip: Hover activated]
    D -.JS Required.-> E[Initialize Tooltips]`} />
                    </div>
                    <div className="space-y-2">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-purple-600" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`<div className="alert alert-warning alert-dismissible fade show" role="alert">\n    <strong>Warning!</strong> Check input fields.\n    <button type="button" className="btn-close" data-bs-dismiss="alert"></button>\n</div>`} lang="html" colorClass="purple" filename="example.html" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">Form submit actions trigger floating toast notifications in the bottom-right corner of web apps.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-emerald-400 mb-2 flex items-center">
                            <Check className="w-5 h-5 mr-2" />
                            Advantages
                        </h4>
                        <p className="text-gray-300">Standardized way to provide user feedback.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-red-400 mb-2 flex items-center">
                            <AlertTriangle className="w-5 h-5 mr-2" />
                            Disadvantages & Limitations
                        </h4>
                        <p className="text-gray-300">Tooltips require manual JavaScript initialization.</p>
                    </div>
                </div>
            )
        },
        // ==================== ADVANCED TIER ====================
        {
            id: 'bs5-flexbox-grid-utilities',
            title: '9. [Advanced] Flexbox & Grid Utilities (.d-flex, .gap-3)',
            definition: 'Advanced Flexbox utilities (.d-flex, .flex-row, .justify-content-between, .align-items-center, .gap-*) control layout positioning and element alignment.',
            syntax: `<div className="d-flex justify-content-between align-items-center gap-3">\n    <div>Left Item</div>\n    <div>Right Item</div>\n</div>`,
            codeSnippet: `<div className="d-flex flex-column flex-md-row justify-content-between align-items-center p-3 bg-light rounded gap-2">\n    <div className="fw-bold">User Dashboard Header</div>\n    <div className="d-flex gap-2">\n        <button className="btn btn-outline-primary btn-sm">Edit Profile</button>\n        <button className="btn btn-danger btn-sm">Logout</button>\n    </div>\n</div>`,
            realLifeScenario: 'Using `.d-flex .align-items-center .gap-2` aligns buttons and text labels neatly inside header toolbars.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Concept Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">Advanced Flexbox utilities control layout positioning and element alignment natively.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">Flexbox utilities act like an invisible magnetic field that pushes, pulls, and perfectly spaces your elements in 1D lines.</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-purple-600" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph TD
    A[.d-flex Container] --> B[justify-content]
    A --> C[align-items]
    A --> D[gap-*]
    B --> E[Horizontal placement]
    C --> F[Vertical placement]
    D --> G[Spacing between items]`} />
                    </div>
                    <div className="space-y-2">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-purple-600" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`<div className="d-flex justify-content-between align-items-center gap-3">\n    <div>Left Item</div>\n    <div>Right Item</div>\n</div>`} lang="html" colorClass="purple" filename="example.html" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">Aligning buttons and text labels neatly inside complex header toolbars without custom CSS.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-emerald-400 mb-2 flex items-center">
                            <Check className="w-5 h-5 mr-2" />
                            Advantages
                        </h4>
                        <p className="text-gray-300">Completely replaces the need for custom flex CSS.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-red-400 mb-2 flex items-center">
                            <AlertTriangle className="w-5 h-5 mr-2" />
                            Disadvantages & Limitations
                        </h4>
                        <p className="text-gray-300">Can be overwhelming to memorize all flex utility names.</p>
                    </div>
                </div>
            )
        },
        {
            id: 'bs5-sass-customization',
            title: '10. [Advanced] Customizing Bootstrap via Sass (SCSS Variables)',
            definition: 'Customize Bootstrap themes by overriding SCSS variables ($primary, $theme-colors) before importing Bootstrap SCSS modules.',
            syntax: `// custom.scss Blueprint\n$primary: #6f42c1; // Custom Purple Primary Color\n$font-family-base: 'Inter', sans-serif;\n\n@import "bootstrap/scss/bootstrap";`,
            codeSnippet: `// Custom Theme Colors Map Override\n$custom-colors: (\n  "brand": #10b981,\n  "dark-slate": #0f172a\n);\n\n$theme-colors: map-merge($theme-colors, $custom-colors);\n@import "bootstrap/scss/bootstrap";`,
            realLifeScenario: 'Corporate websites override Bootstrap SCSS variables to match official brand identity colors perfectly.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Concept Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">Customize Bootstrap themes by overriding SCSS variables before importing Bootstrap SCSS modules.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">Customizing Sass variables is like changing the master blueprint of a factory before production starts, altering every product at once.</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-purple-600" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph LR
    A[Your custom.scss] --> B[Override $primary]
    A --> C[Override $border-radius]
    B --> D[@import bootstrap.scss]
    C --> D
    D --> E[Compiled custom.css]`} />
                    </div>
                    <div className="space-y-2">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-purple-600" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`// custom.scss Blueprint\n$primary: #6f42c1; // Custom Purple Primary Color\n$font-family-base: 'Inter', sans-serif;\n\n@import "bootstrap/scss/bootstrap";`} lang="scss" colorClass="purple" filename="custom.scss" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">Corporate websites override Bootstrap SCSS variables to match official brand identity colors natively.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-emerald-400 mb-2 flex items-center">
                            <Check className="w-5 h-5 mr-2" />
                            Advantages
                        </h4>
                        <p className="text-gray-300">Maintains upgradeability while heavily altering design.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-red-400 mb-2 flex items-center">
                            <AlertTriangle className="w-5 h-5 mr-2" />
                            Disadvantages & Limitations
                        </h4>
                        <p className="text-gray-300">Requires a Sass compiler build step.</p>
                    </div>
                </div>
            )
        },
        {
            id: 'bs5-dark-mode-icons',
            title: '11. [Advanced] Bootstrap Icons & Dark Mode (data-bs-theme="dark")',
            definition: 'Bootstrap 5.3 introduces native color modes using `data-bs-theme="dark"` or `"light"`, paired with the official Bootstrap Icons vector library.',
            syntax: `<!-- Native Dark Mode Attribute Blueprint -->\n<html lang="en" data-bs-theme="dark">\n<i className="bi bi-alarm-fill text-danger"></i>`,
            codeSnippet: `<div className="card p-3 shadow-sm" data-bs-theme="dark">\n    <div className="d-flex align-items-center gap-3">\n        <i className="bi bi-moon-stars-fill text-warning fs-3"></i>\n        <div>\n            <h5 className="mb-0">Dark Mode Active</h5>\n            <small className="text-muted">Managed via data-bs-theme="dark"</small>\n        </div>\n    </div>\n</div>`,
            realLifeScenario: 'Toggling `document.documentElement.setAttribute(\'data-bs-theme\', \'dark\')` switches the entire application theme instantly.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Concept Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">Bootstrap 5.3 native color modes using data-bs-theme, paired with the official Bootstrap Icons vector library.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">Dark mode is like putting sunglasses on your website; data-bs-theme acts as the switch that instantly tints all components.</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-purple-600" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph TD
    A[Root HTML] -->|data-bs-theme='light'| B[Default Colors]
    A -->|data-bs-theme='dark'| C[Inverted Colors]
    C --> D[Cards: Dark BG]
    C --> E[Text: Light Color]
    C --> F[Borders: Darker]`} />
                    </div>
                    <div className="space-y-2">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-purple-600" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`<!-- Native Dark Mode Attribute Blueprint -->\n<html lang="en" data-bs-theme="dark">\n<i className="bi bi-alarm-fill text-danger"></i>`} lang="html" colorClass="purple" filename="example.html" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">Adding a seamless dark mode toggle switch to enterprise dashboards that instantly recolors the entire UI.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-emerald-400 mb-2 flex items-center">
                            <Check className="w-5 h-5 mr-2" />
                            Advantages
                        </h4>
                        <p className="text-gray-300">First-class dark mode support without custom CSS.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-red-400 mb-2 flex items-center">
                            <AlertTriangle className="w-5 h-5 mr-2" />
                            Disadvantages & Limitations
                        </h4>
                        <p className="text-gray-300">Complex color maps to manage if heavily customized.</p>
                    </div>
                </div>
            )
        },
        {
            id: 'bs5-offcanvas-responsive-patterns',
            title: '12. [Advanced] Responsive Layout Patterns & Offcanvas (.offcanvas)',
            definition: 'Build modern responsive layouts using Offcanvas sidebars (.offcanvas-start), sticky footers, and multi-column dashboard grids.',
            syntax: `<div className="offcanvas offcanvas-start" tabIndex="-1" id="sidebarMenu">\n    <div className="offcanvas-header">\n        <h5 className="offcanvas-title">Navigation</h5>\n        <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>\n    </div>\n</div>`,
            codeSnippet: `<div className="d-flex">\n    <button className="btn btn-primary d-md-none mb-3" data-bs-toggle="offcanvas" data-bs-target="#mobileSidebar">\n        Open Sidebar\n    </button>\n</div>`,
            realLifeScenario: 'Mobile web apps use Offcanvas components to slide out navigation menus smoothly when tapping hamburger icons.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Concept Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">Build modern responsive layouts using Offcanvas sidebars, sticky footers, and dashboard grids.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">Offcanvas is like a sliding pocket door in a tiny house, revealing a full closet (menu) only when you pull the handle.</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-purple-600" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph LR
    A[Trigger Button] -->|data-bs-toggle| B[.offcanvas]
    B --> C[.offcanvas-start Left]
    B --> D[.offcanvas-end Right]
    B --> E[.offcanvas-bottom]`} />
                    </div>
                    <div className="space-y-2">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-purple-600" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`<div className="offcanvas offcanvas-start" tabIndex="-1" id="sidebarMenu">\n    <div className="offcanvas-header">\n        <h5 className="offcanvas-title">Navigation</h5>\n        <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>\n    </div>\n</div>`} lang="html" colorClass="purple" filename="example.html" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">Mobile web apps use Offcanvas components to slide out navigation menus smoothly when tapping hamburger icons.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-emerald-400 mb-2 flex items-center">
                            <Check className="w-5 h-5 mr-2" />
                            Advantages
                        </h4>
                        <p className="text-gray-300">Saves screen space efficiently on mobile devices.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-red-400 mb-2 flex items-center">
                            <AlertTriangle className="w-5 h-5 mr-2" />
                            Disadvantages & Limitations
                        </h4>
                        <p className="text-gray-300">Requires Bootstrap JS and careful z-index management.</p>
                    </div>
                </div>
            )
        },
        // ==================== PROFESSIONAL TIER ====================
        {
            id: 'bs5-accessibility-rtl',
            title: '13. [Professional] Accessibility & RTL Support (bootstrap.rtl.css)',
            definition: 'Ensure WAI-ARIA accessibility compliance (aria-expanded, aria-controls, role="dialog") and Right-to-Left (RTL) language layout support via bootstrap.rtl.css.',
            syntax: `<!-- RTL Document Setup Blueprint -->\n<html lang="ar" dir="rtl">\n<link rel="stylesheet" href="bootstrap.rtl.min.css">`,
            codeSnippet: `<button \n    type="button" \n    className="btn btn-primary" \n    aria-expanded="false" \n    aria-controls="dropdownMenu"\n    aria-label="Toggle user account options"\n>\n    Accessible Account Button\n</button>`,
            realLifeScenario: 'Global web platforms switch to `bootstrap.rtl.min.css` when rendering Arabic or Hebrew language translations.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Concept Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">Ensure WAI-ARIA accessibility compliance and Right-to-Left language layout support via bootstrap.rtl.css.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">RTL support is like a mirror universe for your UI, seamlessly flipping layouts for Arabic/Hebrew readers while keeping logic intact.</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-purple-600" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph TD
    A[Language Setup] -->|LTR| B[bootstrap.min.css]
    A -->|RTL dir='rtl'| C[bootstrap.rtl.min.css]
    C --> D[Margins flipped ps-3 -> pe-3]
    C --> E[Floats flipped]`} />
                    </div>
                    <div className="space-y-2">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-purple-600" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`<!-- RTL Document Setup Blueprint -->\n<html lang="ar" dir="rtl">\n<link rel="stylesheet" href="bootstrap.rtl.min.css">`} lang="html" colorClass="purple" filename="example.html" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">Global web platforms dynamically load bootstrap.rtl.min.css when users select Arabic or Hebrew languages.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-emerald-400 mb-2 flex items-center">
                            <Check className="w-5 h-5 mr-2" />
                            Advantages
                        </h4>
                        <p className="text-gray-300">Built-in RTL support for internationalization.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-red-400 mb-2 flex items-center">
                            <AlertTriangle className="w-5 h-5 mr-2" />
                            Disadvantages & Limitations
                        </h4>
                        <p className="text-gray-300">Must maintain logic to switch CSS files dynamically.</p>
                    </div>
                </div>
            )
        },
        {
            id: 'bs5-performance-optimization',
            title: '14. [Professional] Performance Optimization & Custom Builds',
            definition: 'Optimize production bundle sizes by compiling custom Sass builds (importing only used components) and purging unused CSS with PurgeCSS.',
            syntax: `// Modular SCSS Import Blueprint:\n@import "bootstrap/scss/functions";\n@import "bootstrap/scss/variables";\n@import "bootstrap/scss/mixins";\n@import "bootstrap/scss/buttons";\n// Exclude unused components!`,
            codeSnippet: `# Command to Purge unused Bootstrap CSS\n$ purgecss --css bootstrap.css --content index.html --output dist/clean_bootstrap.css`,
            realLifeScenario: 'Compiling modular Sass builds reduces final CSS bundle sizes from 200KB down to 25KB, speeding up mobile initial page renders.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Concept Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">Optimize production sizes by compiling custom Sass builds and purging unused CSS with PurgeCSS.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">PurgeCSS is like a personal trainer who shaves off 90% of your CSS bundle&apos;s fat, leaving only the lean muscle your HTML actually uses.</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-purple-600" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph LR
    A[Full bootstrap.css] --> B[PurgeCSS Engine]
    C[Your HTML/JS Files] --> B
    B -->|Removes unused classes| D[Optimized tiny.css]`} />
                    </div>
                    <div className="space-y-2">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-purple-600" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`// Modular SCSS Import Blueprint:\n@import "bootstrap/scss/functions";\n@import "bootstrap/scss/variables";\n@import "bootstrap/scss/mixins";\n@import "bootstrap/scss/buttons";\n// Exclude unused components!`} lang="scss" colorClass="purple" filename="example.scss" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">Compiling modular Sass builds reduces final CSS bundle sizes from 200KB down to 25KB, vastly improving load times.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-emerald-400 mb-2 flex items-center">
                            <Check className="w-5 h-5 mr-2" />
                            Advantages
                        </h4>
                        <p className="text-gray-300">Massively improves initial page load speed.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-red-400 mb-2 flex items-center">
                            <AlertTriangle className="w-5 h-5 mr-2" />
                            Disadvantages & Limitations
                        </h4>
                        <p className="text-gray-300">PurgeCSS can accidentally strip dynamically added classes.</p>
                    </div>
                </div>
            )
        },
        {
            id: 'bs5-react-vue-integration',
            title: '15. [Professional] Integrating with React (React-Bootstrap)',
            definition: 'Integrate Bootstrap styling with React frameworks using React-Bootstrap (`react-bootstrap`) components, eliminating direct jQuery or raw DOM manipulation.',
            syntax: `import { Button, Modal, Card } from 'react-bootstrap';\n\n<Button variant="primary" onClick={handleShow}>\n    React Bootstrap Button\n</Button>`,
            codeSnippet: `import React, { useState } from 'react';\n// Conceptual React-Bootstrap usage\nexport const ReactBootstrapModalDemo = () => {\n    const [show, setShow] = useState(false);\n    return (\n        <div className="p-3">\n            <button className="btn btn-primary" onClick={() => setShow(true)}>\n                Open Modal (React State)\n            </button>\n        </div>\n    );\n};`,
            realLifeScenario: 'React single-page applications control Bootstrap modal visibility via React component state rather than raw DOM data-bs attributes.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Concept Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">Integrate Bootstrap styling with React frameworks using native components, avoiding raw DOM manipulation.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">React-Bootstrap translates raw HTML/jQuery Bootstrap into fluent React language, letting you use &lt;Button&gt; instead of &lt;button className=&apos;btn btn-primary&apos;&gt;.</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-purple-600" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph TD
    A[React State] --> B[<Modal show={isOpen}>]
    B --> C[Virtual DOM Updates]
    C --> D[No jQuery Required]
    C --> E[No data-bs attributes needed]`} />
                    </div>
                    <div className="space-y-2">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-purple-600" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`import { Button, Modal, Card } from 'react-bootstrap';\n\n<Button variant="primary" onClick={handleShow}>\n    React Bootstrap Button\n</Button>`} lang="jsx" colorClass="purple" filename="example.jsx" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">React SPAs control Bootstrap modal visibility via component state rather than raw DOM data-bs attributes.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-emerald-400 mb-2 flex items-center">
                            <Check className="w-5 h-5 mr-2" />
                            Advantages
                        </h4>
                        <p className="text-gray-300">True React component lifecycle integration.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-red-400 mb-2 flex items-center">
                            <AlertTriangle className="w-5 h-5 mr-2" />
                            Disadvantages & Limitations
                        </h4>
                        <p className="text-gray-300">Adds an extra dependency layer (react-bootstrap).</p>
                    </div>
                </div>
            )
        },
        {
            id: 'bs5-design-system-storybook',
            title: '16. [Professional] Building Enterprise Design Systems',
            definition: 'Extend Bootstrap components into enterprise UI Design Systems with custom CSS custom properties (variables), theme tokens, and Storybook documentation.',
            syntax: `:root {\n    --bs-primary: #10b981;\n    --bs-body-font-family: 'Inter', sans-serif;\n}`,
            codeSnippet: `/* Enterprise CSS Custom Property Overrides */\n:root {\n    --bs-border-radius: 0.75rem;\n    --bs-primary-rgb: 16, 185, 129;\n    --app-sidebar-width: 280px;\n}`,
            realLifeScenario: 'Enterprise design teams package custom Bootstrap theme tokens into internal npm packages for consistent UI branding across 20+ company web applications.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Concept Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">Extend Bootstrap components into enterprise UI Design Systems with custom CSS variables and Storybook.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">A Design System is the company&apos;s constitution, ensuring every app built by different teams speaks the exact same visual language.</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-purple-600" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph TD
    A[Design System] --> B[CSS Custom Properties]
    A --> C[Storybook Docs]
    A --> D[NPM Package]
    D --> E[App 1 Uses it]
    D --> F[App 2 Uses it]`} />
                    </div>
                    <div className="space-y-2">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-purple-600" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`:root {\n    --bs-primary: #10b981;\n    --bs-body-font-family: 'Inter', sans-serif;\n}`} lang="css" colorClass="purple" filename="example.css" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">Enterprise teams package custom Bootstrap theme tokens into internal npm packages for consistent UI branding.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-emerald-400 mb-2 flex items-center">
                            <Check className="w-5 h-5 mr-2" />
                            Advantages
                        </h4>
                        <p className="text-gray-300">Scales design consistency across multiple products.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-red-400 mb-2 flex items-center">
                            <AlertTriangle className="w-5 h-5 mr-2" />
                            Disadvantages & Limitations
                        </h4>
                        <p className="text-gray-300">High initial setup and maintenance overhead.</p>
                    </div>
                </div>
            )
        }
    ];

    const topics = courseData.map(topic => topic.title);
    const activeTopic = courseData[activeTopicIndex];

    return (
        <CoursePageLayout
            title="Bootstrap 5 Masterclass Course"
            description="Master Bootstrap 5 from 12-Column Grids, Typography, and Forms to Modals, Custom SCSS Themes, Dark Mode, and React-Bootstrap Integration."
            topics={topics}
            icon={Layout}
            colorClass="purple"
            activeTopicIndex={activeTopicIndex}
            onTopicClick={setActiveTopicIndex}
        >
            <div className="space-y-8">
                {activeTopic.content}
            </div>
        </CoursePageLayout>
    );
};

export default BootstrapCoursePage;
