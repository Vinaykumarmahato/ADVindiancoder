import React, { useState } from 'react';
import CoursePageLayout from '../../components/CoursePageLayout';
import { FileCode, Code, BookOpen, Lightbulb, FileText, CheckCircle2, ShieldAlert, Cpu, Layers, HelpCircle, Check, AlertTriangle } from 'lucide-react';
import CodeBlock from '../../components/CodeBlock';
import MermaidDiagram from '../../components/MermaidDiagram';

interface HtmlTopic {
    id: string;
    title: string;
    definition: string;
    example?: string;
    syntax?: string;
    realLifeScenario?: string;
    codeSnippet?: string | null;
    content: React.ReactNode;
}

const HtmlCoursePage = () => {
    const [activeTopicIndex, setActiveTopicIndex] = useState(0);

    const courseData: HtmlTopic[] = [
        // ==================== BEGINNER TIER ====================
        {
            id: 'html-doc-structure',
            title: '1. [Beginner] Document Structure & DOCTYPE',
            definition: 'HTML Document Structure is the standardized boilerplate framework that organizes a web page into readable sections for web browsers. It begins with a <!DOCTYPE html> declaration which instructs the browser to process the file in modern HTML5 standards mode. The root <html> element splits the document into a <head> section for invisible metadata and settings, and a <body> section for all visible content.',
            syntax: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document Title</title>
</head>
<body>
    <!-- Visible content goes here -->
</body>
</html>`,
            codeSnippet: `<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Character encoding & viewport configuration -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Web Page</title>
</head>
<body>
    <!-- Main visible content header and paragraph -->
    <h1>Welcome to Web Development</h1>
    <p>This standard HTML5 structure powers modern web applications.</p>
</body>
</html>`,
            realLifeScenario: 'Every commercial website (Google, Amazon, YouTube) starts with a valid HTML5 DOCTYPE declaration to force modern standards mode in WebKit, Blink, and Gecko browser engines.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-orange-50 dark:bg-orange-950/20 border-l-4 border-orange-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-orange-800 dark:text-orange-300 mb-1 flex items-center">
                            <BookOpen className="w-4 h-4 mr-2" />
                            1. Definition
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            HTML Document Structure is the standardized boilerplate framework that organizes a web page into readable sections for web browsers. It begins with a <code className="text-orange-600 font-mono font-bold">&lt;!DOCTYPE html&gt;</code> declaration which instructs the browser to process the file in modern HTML5 standards mode. The root <code className="text-orange-600 font-mono font-bold">&lt;html&gt;</code> element splits the document into a <code className="text-orange-600 font-mono font-bold">&lt;head&gt;</code> section for invisible metadata and a <code className="text-orange-600 font-mono font-bold">&lt;body&gt;</code> section for all visible user interface content.
                        </p>
                    </div>

                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center">
                            <Lightbulb className="w-4 h-4 mr-2" />
                            2. Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            Think of an HTML document structure like a book. The cover and title page tell the reader the title, publisher, and language (the <code className="text-orange-600 font-mono">&lt;head&gt;</code> section), while the main pages hold the actual chapter text and images that people read (the <code className="text-orange-600 font-mono">&lt;body&gt;</code> section). Just like a book needs binding and margins to hold pages together properly, a web page needs the HTML boilerplate structure so the web browser knows exactly where information belongs.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                            <Layers className="w-4 h-4 mr-2 text-purple-600" />
                            3. Visual Structure Hierarchy (Mermaid.js Diagram)
                        </h4>
                        <MermaidDiagram 
                            chart={`graph TD
    A[<!DOCTYPE html>] --> B[html lang="en"]
    B --> C[head Metadata]
    C --> D[meta charset UTF-8]
    C --> E[title Page Title]
    B --> F[body Visible Canvas]
    F --> G[header Navigation]
    F --> H[main Article Content]
    F --> I[footer Footer Info]`}
                            caption="Figure 1.1: Standard HTML5 Document Tree Hierarchy showing metadata in head and visual layout elements in body branching from the root html element."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                            This diagram illustrates how the document root separates metadata processing in the head tag from visual page render objects nested inside the body tag.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                            <Code className="w-4 h-4 mr-2 text-orange-600" />
                            4. Sample Code
                        </h4>
                        <CodeBlock 
                            code={`<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Metadata configuration: UTF-8 encoding and responsive viewport -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Web Page</title>
</head>
<body>
    <!-- Main visible content canvas -->
    <h1>Welcome to Web Development</h1>
    <p>This standard HTML5 boilerplate structure powers modern web applications.</p>
</body>
</html>`} 
                            lang="html" 
                            colorClass="orange" 
                            filename="index.html" 
                        />
                        <p className="text-xs text-gray-500 font-mono mt-1">
                            // Minimal, valid HTML5 document containing mandatory DOCTYPE, head, title, and body elements.
                        </p>
                    </div>

                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center">
                            <Cpu className="w-4 h-4 mr-2" />
                            5. Real-World Application
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            This HTML document structure is used at the entry point of every web project — serving as the primary <code className="text-orange-600 font-mono">index.html</code> file in Next.js, React Vite, Vue, and traditional server-rendered applications before loading CSS stylesheets, web fonts, or JavaScript bundles.
                        </p>
                    </div>

                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center">
                            <Check className="w-4 h-4 mr-2" />
                            6. Advantages
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Forces web browsers into modern <strong>Standards Mode</strong>, preventing legacy browser rendering quirks.</li>
                            <li>Enhances search engine ranking (SEO) and screen reader accessibility by defining language attributes (<code className="text-orange-400">lang="en"</code>) and page titles.</li>
                            <li>Ensures universal character support for emojis and international alphabets via UTF-8 encoding.</li>
                        </ul>
                    </div>

                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center">
                            <AlertTriangle className="w-4 h-4 mr-2" />
                            7. Disadvantages / Limitations
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Requires mandatory boilerplate markup tags even for lightweight single-line static pages.</li>
                            <li>Placing visible HTML content inside the <code className="text-orange-400">&lt;head&gt;</code> section causes DOM parsing errors and unexpected rendering behavior across browsers.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'html-tags-elements-attributes',
            title: '2. [Beginner] Tags, Elements, and Attributes',
            definition: 'An HTML element is defined by a start tag, content, and an end tag. Attributes provide additional metadata inside opening tags to configure element behavior and styling.',
            syntax: `<tagname attribute_name="attribute_value">Element Content</tagname>
<void_tag attribute_name="attribute_value"> <!-- Self-closing void element -->`,
            codeSnippet: `<div id="user-card" class="card" data-role="admin">
    <!-- Image void tag with src and alt attributes -->
    <img src="/avatar.jpg" alt="User Avatar" width="100" height="100">
    <h3 title="User Name">Vinay Mahato</h3>
    <a href="/profile" class="btn">View Profile</a>
</div>`,
            realLifeScenario: 'CSS style sheets select elements using class names (.card), JavaScript selects elements by ID (#user-card), and analytics trackers read data-* custom attributes.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-orange-50 dark:bg-orange-950/20 border-l-4 border-orange-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-orange-800 dark:text-orange-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            An HTML element is the building block of a web page formed by an opening tag, inner content, and a closing tag. Attributes are key-value pairs written inside the opening tag that configure properties, unique IDs, styling classes, or image source URLs for that specific element.
                        </p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            Imagine a shipping cardboard box. The box opening and lid represent the opening and closing HTML tags, the items inside are the element content, and the shipping label pasted on the outside showing destination address and fragile status represents the HTML attributes.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-purple-600" />3. Visual Element Breakdown (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph LR
    A["HTML Element"] --> B["Opening Tag <p class='text'>"]
    A --> C["Element Content 'Hello World'"]
    A --> D["Closing Tag </p>"]
    B --> E["Attribute: class='text'"]`}
                            caption="Figure 2.1: Anatomy of an HTML Element showing the opening tag, attributes, inner content, and closing tag."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This diagram breaks down an HTML element into its constituent parts: opening tag with attributes, enclosed content, and closing tag.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-orange-600" />4. Sample Code</h4>
                        <CodeBlock code={`<div id="user-card" class="card" data-role="admin">
    <!-- Image void tag with src and alt attributes -->
    <img src="/avatar.jpg" alt="User Avatar" width="100" height="100">
    <h3 title="User Name">Vinay Mahato</h3>
    <a href="/profile" class="btn">View Profile</a>
</div>`} lang="html" colorClass="orange" filename="element.html" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">CSS classes target elements for responsive layout designs, JavaScript queries element IDs for event handling, and data attributes store state flags for UI frameworks.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Provides granular control over element identity, styling, and behavior.</li>
                            <li>Global attributes (<code className="text-orange-400">id</code>, <code className="text-orange-400">class</code>, <code className="text-orange-400">data-*</code>) work consistently across all HTML elements.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Duplicate <code className="text-orange-400">id</code> attributes on the same page break JavaScript DOM queries.</li>
                            <li>Forgetting closing tags on container elements breaks surrounding DOM tree rendering.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'html-headings-paragraphs',
            title: '3. [Beginner] Headings & Paragraphs',
            definition: 'Headings (h1 to h6) establish document hierarchy and structural outlines. Paragraphs (p) group related body text lines into block-level text blocks.',
            syntax: `<h1>Level 1 Main Title</h1>
<h2>Level 2 Section Title</h2>
<h3>Level 3 Subsection Title</h3>
<p>Body paragraph text block...</p>`,
            codeSnippet: `<article>
    <!-- Top-level main document heading -->
    <h1>Web Development Guide</h1>
    <h2>1. Frontend Engineering</h2>
    <p>Frontend development focuses on building responsive user interfaces.</p>
</article>`,
            realLifeScenario: 'Search engines (Googlebot) and screen reader software navigate web documents by analyzing heading tags. Skipping heading levels confuses accessibility tools.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-orange-50 dark:bg-orange-950/20 border-l-4 border-orange-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-orange-800 dark:text-orange-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Headings (<code className="font-mono text-orange-600">&lt;h1&gt;</code> through <code className="font-mono text-orange-600">&lt;h6&gt;</code>) define structural section titles in descending importance, while paragraph tags (<code className="font-mono text-orange-600">&lt;p&gt;</code>) encapsulate blocks of body prose text.</p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of a newspaper. The main headline is the H1, major section titles (Sports, World News) are H2s, article titles are H3s, and the story text under each title consists of paragraphs.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-purple-600" />3. Heading Hierarchy Tree (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph TD
    A["h1 Document Title"] --> B["h2 Section 1"]
    A --> C["h2 Section 2"]
    B --> D["h3 Sub-section 1.1"]
    D --> E["p Body Paragraph"]
    C --> F["p Body Paragraph"]`}
                            caption="Figure 3.1: Heading Tag Hierarchy showing structured document outline from h1 down to paragraphs."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This diagram shows how headings form a logical nested tree outline that guides search engines and screen readers.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-orange-600" />4. Sample Code</h4>
                        <CodeBlock code={`<article>
    <!-- Top-level main document heading -->
    <h1>Web Development Guide</h1>
    <h2>1. Frontend Engineering</h2>
    <p>Frontend development focuses on building responsive user interfaces.</p>
</article>`} lang="html" colorClass="orange" filename="headings.html" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Blog articles, news websites, and documentation sites rely on headings to establish SEO content hierarchy and readable document flow.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Significantly improves SEO indexing by identifying primary page topics in H1 tags.</li>
                            <li>Enables screen reader users to jump directly between document headings.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Using headings purely for visual font sizing (instead of CSS) damages accessibility outlines.</li>
                            <li>Having multiple H1 tags per page can confuse search engine indexing crawlers.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'html-lists',
            title: '4. [Beginner] Lists (Unordered, Ordered, Description)',
            definition: 'HTML offers 3 core list types: Unordered bullet lists (ul), Ordered numerical lists (ol), and Description key-value lists (dl, dt, dd).',
            syntax: `<!-- Unordered List -->
<ul><li>Bullet item</li></ul>
<!-- Ordered List -->
<ol><li>Numbered item</li></ol>
<!-- Description List -->
<dl><dt>Term</dt><dd>Definition</dd></dl>`,
            codeSnippet: `<!-- Unordered Feature List -->
<ul>
    <li>Responsive Layout</li>
    <li>Fast Performance</li>
</ul>

<!-- Ordered Multi-step Process -->
<ol>
    <li>Create account</li>
    <li>Verify email</li>
</ol>`,
            realLifeScenario: 'Navigation bars, dropdown menus, multi-step registration forms, and e-commerce product specifications are constructed using list elements.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-orange-50 dark:bg-orange-950/20 border-l-4 border-orange-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-orange-800 dark:text-orange-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">HTML list tags structure related items. <code className="font-mono text-orange-600">&lt;ul&gt;</code> creates unordered bullet points, <code className="font-mono text-orange-600">&lt;ol&gt;</code> creates sequential numbered lists, and <code className="font-mono text-orange-600">&lt;dl&gt;</code> organizes term-definition key-value pairs.</p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">An unordered list is like a grocery shopping list (order doesn't matter), an ordered list is like a recipe step-by-step guide (sequence matters), and a description list is like a dictionary (term followed by definition).</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-purple-600" />3. List Types Comparison (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph TD
    A[HTML List Types] --> B[Unordered ul]
    A --> C[Ordered ol]
    A --> D[Description dl]
    B --> B1[Bullet Points - Nav Menus]
    C --> C1[1 2 3 Steps - Tutorials]
    D --> D1[dt Term -> dd Definition]`}
                            caption="Figure 4.1: HTML List Types classifying bullet lists, numbered lists, and key-value description lists."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This diagram compares the 3 core HTML list structures and their typical use cases.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-orange-600" />4. Sample Code</h4>
                        <CodeBlock code={`<!-- Unordered Feature List -->
<ul>
    <li>Responsive Layout</li>
    <li>Fast Performance</li>
</ul>

<!-- Ordered Multi-step Process -->
<ol>
    <li>Create account</li>
    <li>Verify email</li>
</ol>`} lang="html" colorClass="orange" filename="lists.html" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Header navigation links, e-commerce product specifications, and multi-step checkout processes use list elements for structured semantics.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Screen readers announce the exact item count contained within a list.</li>
                            <li>Easily styled using CSS to create horizontal navigation bars.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Browser default padding and bullet margins require explicit CSS resets (<code className="text-orange-400">list-style: none</code>).</li>
                            <li>Nesting lists too deeply creates verbose DOM markup trees.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'html-links-anchors',
            title: '5. [Beginner] Links & Anchors (a tag)',
            definition: 'Anchor elements (a) create hyperlinks to external web pages, internal page sections, email addresses, or telephone numbers via the href attribute.',
            syntax: `<a href="https://example.com" target="_blank" rel="noopener noreferrer">External Link</a>
<a href="#section">Internal Link</a>`,
            codeSnippet: `<!-- External Link with Security Flags -->
<a href="https://react.dev" target="_blank" rel="noopener noreferrer">
    React Docs
</a>

<!-- Internal Page Jump -->
<a href="#pricing">View Pricing</a>`,
            realLifeScenario: 'Securing external links with rel="noopener noreferrer" prevents the newly opened tab from exploiting window.opener to hijack the originating page.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-orange-50 dark:bg-orange-950/20 border-l-4 border-orange-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-orange-800 dark:text-orange-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Anchor tags (<code className="font-mono text-orange-600">&lt;a&gt;</code>) create interactive hyperlinks connecting documents across the World Wide Web via the <code className="font-mono text-orange-600">href</code> attribute.</p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of links like portals or highway signposts. Clicking a link teleports the user from their current page directly to another page, section, or website.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-purple-600" />3. Link Request Sequence (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`sequenceDiagram
    autonumber
    User->>Browser: Click <a href="https://site.com">
    Browser->>Server: HTTP GET Request
    Server-->>Browser: Return HTML Document
    Browser-->>User: Render New Page`}
                            caption="Figure 5.1: Navigation sequence triggered when a user clicks an anchor hyperlink."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This sequence diagram illustrates how clicking a link triggers an HTTP GET request to load a new page.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-orange-600" />4. Sample Code</h4>
                        <CodeBlock code={`<!-- External Link with Security Flags -->
<a href="https://react.dev" target="_blank" rel="noopener noreferrer">
    React Docs
</a>

<!-- Internal Page Jump -->
<a href="#pricing">View Pricing</a>`} lang="html" colorClass="orange" filename="links.html" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Web site navigation, call-to-action buttons, email mailto triggers, and phone number dialers rely on anchor links.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Forms the primary connective mesh of the global World Wide Web.</li>
                            <li>Supports jump bookmarks to specific element IDs on the same page (<code className="text-orange-400">#id</code>).</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Opening new tabs without <code className="text-orange-400">rel="noopener"</code> exposes reverse tabnabbing security risks.</li>
                            <li>Broken or 404 links hurt search engine crawl efficiency.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'html-images-media',
            title: '6. [Beginner] Images & Media Embedding',
            definition: 'The img element embeds images into HTML documents. Key attributes include src (image path), alt (accessibility description), width, height, and loading.',
            syntax: `<img src="image.jpg" alt="Description" width="800" height="600" loading="lazy">`,
            codeSnippet: `<figure>
    <!-- Accessible lazy-loaded image -->
    <img src="/banner.jpg" alt="Developer Coding Dashboard" width="800" height="400" loading="lazy">
    <figcaption>Figure 1: Developer Workspace</figcaption>
</figure>`,
            realLifeScenario: 'Setting explicit width and height attributes prevents Cumulative Layout Shift (CLS), improving Google Core Web Vitals performance scores.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-orange-50 dark:bg-orange-950/20 border-l-4 border-orange-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-orange-800 dark:text-orange-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">The <code className="font-mono text-orange-600">&lt;img&gt;</code> element is a self-closing void tag that displays visual image graphics (PNG, JPG, SVG, WebP) on a web page via the <code className="font-mono text-orange-600">src</code> attribute.</p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of an image tag like a physical photo frame on a wall. The frame dimensions reserve space on the wall, while the photo inserted inside (<code className="font-mono">src</code>) displays the visual picture.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-purple-600" />3. Image Loading Pipeline (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph TD
    A[Image Element <img src='...'>] --> B{In Viewport?}
    B -- Yes --> C[Fetch Image Asset]
    B -- No & loading='lazy' --> D[Defer Fetch Until Scroll]
    C --> E{Asset Loaded?}
    E -- Success --> F[Render Image Canvas]
    E -- Error --> G[Display alt Fallback Text]`}
                            caption="Figure 6.1: Image Loading Pipeline showcasing lazy loading deferral and alt text fallback handling."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This diagram shows how browsers process image loading attributes and handle fallback text.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-orange-600" />4. Sample Code</h4>
                        <CodeBlock code={`<figure>
    <!-- Accessible lazy-loaded image -->
    <img src="/banner.jpg" alt="Developer Coding Dashboard" width="800" height="400" loading="lazy">
    <figcaption>Figure 1: Developer Workspace</figcaption>
</figure>`} lang="html" colorClass="orange" filename="image.html" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">E-commerce product cards, news hero banners, and user avatar profiles depend on image elements.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li><code className="text-orange-400">alt</code> text ensures accessibility for visually impaired screen reader users.</li>
                            <li><code className="text-orange-400">loading="lazy"</code> speeds up initial page loads by deferring off-screen images.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Omitting width and height attributes causes layout shifts (CLS) when images load.</li>
                            <li>Unoptimized heavy PNG/JPG images increase bandwidth costs.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'html-tables',
            title: '7. [Beginner] Tables (thead, tbody, tr, th, td)',
            definition: 'HTML tables represent tabular data across rows and columns. Semantic tags include table, thead, tbody, tfoot, tr (table row), th (header cell), and td (data cell).',
            syntax: `<table>
    <thead><tr><th>Header</th></tr></thead>
    <tbody><tr><td>Data</td></tr></tbody>
</table>`,
            codeSnippet: `<table class="w-full border">
    <caption>Monthly Expenses</caption>
    <thead>
        <tr><th>Category</th><th>Cost</th></tr>
    </thead>
    <tbody>
        <tr><td>Server Hosting</td><td>$150</td></tr>
    </tbody>
</table>`,
            realLifeScenario: 'Financial reports, pricing tier comparisons, and SQL query result sets are displayed using accessible HTML tables.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-orange-50 dark:bg-orange-950/20 border-l-4 border-orange-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-orange-800 dark:text-orange-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">HTML tables structure multi-dimensional tabular data into rows (<code className="font-mono text-orange-600">&lt;tr&gt;</code>) and cells (<code className="font-mono text-orange-600">&lt;th&gt;</code> header / <code className="font-mono text-orange-600">&lt;td&gt;</code> data) grouped under semantic section containers.</p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of an HTML table like a printed spreadsheet matrix or a flight departure board displaying flight numbers, destinations, and gate times in aligned rows and columns.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-purple-600" />3. Table DOM Hierarchy (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph TD
    A[table] --> B[caption Title]
    A --> C[thead Header Group]
    A --> D[tbody Body Data]
    C --> C1["tr -> th Header Cell"]
    D --> D1["tr -> td Data Cell"]`}
                            caption="Figure 7.1: Semantic HTML Table Tree Hierarchy showing row and cell nesting under header and body sections."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This diagram shows the structural relationship between semantic table containers, rows, and cells.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-orange-600" />4. Sample Code</h4>
                        <CodeBlock code={`<table class="w-full border">
    <caption>Monthly Expenses</caption>
    <thead>
        <tr><th>Category</th><th>Cost</th></tr>
    </thead>
    <tbody>
        <tr><td>Server Hosting</td><td>$150</td></tr>
    </tbody>
</table>`} lang="html" colorClass="orange" filename="table.html" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Financial accounting ledgers, comparison pricing grids, and database query tables use table markup.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Native browser alignment for complex grid datasets.</li>
                            <li><code className="text-orange-400">&lt;th scope="col"&gt;</code> provides clear structural context for screen readers.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Using tables for general web page layout (instead of CSS Flexbox/Grid) harms accessibility.</li>
                            <li>Wide tables require explicit CSS overflow handling on small mobile screens.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'html-forms-basics',
            title: '8. [Beginner] Forms Basics (input, label, button)',
            definition: 'HTML forms collect user input via form controls like text fields, password fields, checkboxes, radio buttons, dropdowns, and submit buttons.',
            syntax: `<form action="/api" method="POST">
    <label for="usr">Username</label>
    <input type="text" id="usr" name="username">
    <button type="submit">Submit</button>
</form>`,
            codeSnippet: `<form action="/login" method="POST">
    <label for="user-email">Email:</label>
    <input type="email" id="user-email" name="email" required>
    <button type="submit">Sign In</button>
</form>`,
            realLifeScenario: 'Authentication forms capture credentials, validate them, and transmit JSON or form-encoded payloads to backend REST APIs.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-orange-50 dark:bg-orange-950/20 border-l-4 border-orange-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-orange-800 dark:text-orange-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">HTML forms (<code className="font-mono text-orange-600">&lt;form&gt;</code>) collect interactive user data inputs via controls like text inputs, checkboxes, and buttons, packaging them for server submission.</p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of an HTML form like a paper job application form. You fill out labeled text boxes with your name and contact details, then hand the completed paper to the receptionist (Submit button).</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-purple-600" />3. Form Submission Pipeline (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`sequenceDiagram
    autonumber
    User->>Input: Enter Data & Click Submit
    Input->>Form: Collect Control Values
    Form->>Server: HTTP POST Request (Payload)
    Server-->>User: Return HTTP 200 Response`}
                            caption="Figure 8.1: Form Submission Request Sequence from user input interaction to server processing."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This diagram outlines the sequential flow of collecting user input and transmitting HTTP payloads to a server.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-orange-600" />4. Sample Code</h4>
                        <CodeBlock code={`<form action="/login" method="POST">
    <label for="user-email">Email:</label>
    <input type="email" id="user-email" name="email" required>
    <button type="submit">Sign In</button>
</form>`} lang="html" colorClass="orange" filename="form.html" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">User logins, payment checkout flows, search bars, and survey questionnaires rely on HTML form controls.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li><code className="text-orange-400">&lt;label for="..."&gt;</code> expands touch click targets for mobile users and screen readers.</li>
                            <li>Native browser form handling works even if JavaScript fails to load.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Unvalidated forms expose servers to malicious payload injections.</li>
                            <li>Default form styling varies across operating systems, requiring custom CSS styling.</li>
                        </ul>
                    </div>
                </div>
            )
        },

        // ==================== INTERMEDIATE TIER ====================
        {
            id: 'html-semantic-html5',
            title: '9. [Intermediate] Semantic HTML5 Tags',
            definition: 'Semantic elements explicitly define page structure (header, nav, main, section, article, aside, footer), improving SEO ranking and screen reader navigation.',
            syntax: `<header>...</header>
<nav>...</nav>
<main>
    <article>...</article>
</main>
<footer>...</footer>`,
            codeSnippet: `<header><nav><a href="/">Home</a></nav></header>
<main>
    <article>
        <h1>Semantic Layout</h1>
        <p>Semantic HTML tags clarify document meaning.</p>
    </article>
</main>
<footer>&copy; 2026</footer>`,
            realLifeScenario: 'Screen readers allow vision-impaired users to skip directly to the main content region, bypassing repetitive navigation links.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-orange-50 dark:bg-orange-950/20 border-l-4 border-orange-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-orange-800 dark:text-orange-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Semantic HTML5 tags explicitly communicate the meaning and purpose of page sections to web browsers, search engine crawlers, and assistive technologies rather than using generic non-semantic <code className="font-mono text-orange-600">&lt;div&gt;</code> tags.</p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of a newspaper. The header masthead, navigation table of contents, main front-page story, side opinion column, and footer copyright are immediately recognizable by their layout purpose. Semantic tags give web pages that same clear structural identity.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-purple-600" />3. Semantic Layout Architecture (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph TD
    A[Page Document] --> B[header Site Header]
    A --> C[nav Navigation Bar]
    A --> D[main Primary Content Area]
    A --> E[footer Site Footer]
    D --> D1[section Topic Section]
    D --> D2[aside Sidebar Context]
    D1 --> F[article Self-contained Story]`}
                            caption="Figure 9.1: Semantic HTML5 Page Architecture showing landmark regions."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This diagram shows how semantic landmark tags organize page regions into structured accessibility zones.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-orange-600" />4. Sample Code</h4>
                        <CodeBlock code={`<header><nav><a href="/">Home</a></nav></header>
<main>
    <article>
        <h1>Semantic Layout</h1>
        <p>Semantic HTML tags clarify document meaning.</p>
    </article>
</main>
<footer>&copy; 2026</footer>`} lang="html" colorClass="orange" filename="semantic.html" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Enterprise web applications use semantic structural tags to maximize SEO search indexing and comply with legal accessibility mandates.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Boosts SEO search engine ranking by clarifying content importance.</li>
                            <li>Screen reader users can skip directly to <code className="text-orange-400">&lt;main&gt;</code> content regions.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Misusing <code className="text-orange-400">&lt;section&gt;</code> or <code className="text-orange-400">&lt;article&gt;</code> without headings creates invalid outline structures.</li>
                            <li>Legacy Internet Explorer 8 requires JS polyfills to style HTML5 semantic tags.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'html-forms-advanced-validation',
            title: '10. [Intermediate] Form Validation & Input Controls',
            definition: 'HTML5 provides native client-side form validation attributes (required, pattern, min/max, step) and advanced input controls (select, textarea, fieldset, datalist).',
            syntax: `<input type="email" required pattern="[^@]+@[^@]+\\.[a-zA-Z]{2,}">
<datalist id="list"><option value="Item"></datalist>`,
            codeSnippet: `<form>
    <label for="username">Username (3-10 chars):</label>
    <input type="text" id="username" name="user" required minlength="3" maxlength="10" pattern="[a-zA-Z0-9]+">
    
    <label for="age">Age (18+):</label>
    <input type="number" id="age" name="age" min="18" max="99" required>
    
    <button type="submit">Submit</button>
</form>`,
            realLifeScenario: 'Native HTML5 form validation checks inputs before form submission, reducing unnecessary invalid network traffic to backend API servers.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-orange-50 dark:bg-orange-950/20 border-l-4 border-orange-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-orange-800 dark:text-orange-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">HTML5 Form Validation utilizes native browser constraint attributes (<code className="font-mono text-orange-600">required</code>, <code className="font-mono text-orange-600">pattern</code>, <code className="font-mono text-orange-600">min/max</code>) to validate user input before sending HTTP requests.</p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of HTML validation like a security gate at an amusement park checking ticket dates and height restrictions before letting guests step onto the ride platform.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-purple-600" />3. Form Validation Logic (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`flowchart TD
    A[User Clicks Submit] --> B{Valid inputs?}
    B -- Yes --> C[Dispatch Form Submit Event]
    B -- No --> D[Show Native Tooltip Popup]
    D --> E[Focus Invalid Input Field]`}
                            caption="Figure 10.1: Native HTML5 Form Validation decision flowchart."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This flowchart shows how browsers validate constraint attributes before form submission.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-orange-600" />4. Sample Code</h4>
                        <CodeBlock code={`<form>
    <label for="username">Username (3-10 chars):</label>
    <input type="text" id="username" name="user" required minlength="3" maxlength="10" pattern="[a-zA-Z0-9]+">
    
    <label for="age">Age (18+):</label>
    <input type="number" id="age" name="age" min="18" max="99" required>
    
    <button type="submit">Submit</button>
</form>`} lang="html" colorClass="orange" filename="validation.html" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Flight booking portals and user signup pages use native HTML validation attributes to block incomplete forms instantly.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Instant client-side validation without writing custom JavaScript code.</li>
                            <li>Saves server bandwidth by stopping invalid form submissions early.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Default error tooltip popups vary in appearance across different browsers.</li>
                            <li>Client-side validation can be bypassed, so server-side validation is still mandatory.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'html-multimedia',
            title: '11. [Intermediate] Multimedia (Audio, Video, Track)',
            definition: 'HTML5 native audio and video elements play media files directly in web browsers without plugins, supporting subtitle captions via WebVTT track files.',
            syntax: `<video controls width="640">
    <source src="media.mp4" type="video/mp4">
    <track src="subs.vtt" kind="subtitles" srclang="en" label="English">
</video>`,
            codeSnippet: `<video controls poster="/thumbnail.jpg" width="640">
    <source src="/video.mp4" type="video/mp4">
    <track src="/subtitles.vtt" kind="subtitles" srclang="en" label="English" default>
    Browser media fallback message.
</video>`,
            realLifeScenario: 'Video platforms (YouTube, Udemy, Coursera) stream HTML5 video with WebVTT subtitle files for multi-language accessibility compliance.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-orange-50 dark:bg-orange-950/20 border-l-4 border-orange-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-orange-800 dark:text-orange-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">HTML5 native multimedia tags (<code className="font-mono text-orange-600">&lt;video&gt;</code>, <code className="font-mono text-orange-600">&lt;audio&gt;</code>) play media streams directly in web browsers without external Flash plugins, leveraging WebVTT <code className="font-mono text-orange-600">&lt;track&gt;</code> files for captions.</p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of HTML5 video elements like a television set with a built-in DVD player and closed-captioning button — everything is integrated out of the box without needing an external cable box adapter.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-purple-600" />3. Multimedia Playback Pipeline (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph TD
    A[video Tag Initialized] --> B[Evaluate source Tags]
    B --> C{Codec Supported?}
    C -- Yes --> D[Load Media Stream & WebVTT Captions]
    C -- No --> E[Try Next Source Codec]
    D --> F[Render Video Canvas & Controls]`}
                            caption="Figure 11.1: HTML5 Media Codec Resolution Pipeline."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This diagram illustrates how browsers evaluate source tags to select compatible media codecs.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-orange-600" />4. Sample Code</h4>
                        <CodeBlock code={`<video controls poster="/thumbnail.jpg" width="640">
    <source src="/video.mp4" type="video/mp4">
    <track src="/subtitles.vtt" kind="subtitles" srclang="en" label="English" default>
    Browser media fallback message.
</video>`} lang="html" colorClass="orange" filename="video.html" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Online learning platforms (Udemy, Coursera) stream HTML5 video courses with synchronized closed caption tracks.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Native browser playback without requiring third-party browser plugins.</li>
                            <li><code className="text-orange-400">&lt;track&gt;</code> tags enable multi-language subtitle accessibility.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Different browsers support different video codecs (MP4 vs WebM vs H.265).</li>
                            <li>Autoplaying videos with audio is blocked by modern mobile browser policies.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'html-iframes',
            title: '12. [Intermediate] Iframes & Embedded Contexts',
            definition: 'The iframe tag embeds external HTML documents, maps, videos, or payment widgets inside the current document, secured using sandbox policies.',
            syntax: `<iframe src="https://example.com" title="Embedded" width="600" height="400" sandbox="allow-scripts"></iframe>`,
            codeSnippet: `<iframe 
    src="https://maps.google.com/maps?q=Delhi&output=embed" 
    width="600" 
    height="350" 
    loading="lazy" 
    title="Map Widget"
    sandbox="allow-scripts allow-same-origin"
></iframe>`,
            realLifeScenario: 'Embedding YouTube videos, Google Maps, Spotify widgets, and Stripe Payment fields requires secure iframe configurations.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-orange-50 dark:bg-orange-950/20 border-l-4 border-orange-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-orange-800 dark:text-orange-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Inline frames (<code className="font-mono text-orange-600">&lt;iframe&gt;</code>) embed an independent external HTML document into the current web page canvas, running inside a sandboxed browsing context.</p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of an iframe like a glass window built into a house wall. Looking through the window shows you what is happening in the garden outside, without the garden elements actually being inside your living room.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-purple-600" />3. Iframe Sandboxing &amp; Security (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph TD
    A[Parent Document] -->|Embeds| B[iframe Container]
    B -->|Enforces| C{sandbox Flag Active?}
    C -- Yes --> D[Block Malicious Scripts & Form Submissions]
    C -- No --> E[Allow Full Script Execution]`}
                            caption="Figure 12.1: Security sandbox boundary enforcement inside HTML iframes."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This diagram shows how the sandbox attribute restricts untrusted cross-origin script execution.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-orange-600" />4. Sample Code</h4>
                        <CodeBlock code={`<iframe 
    src="https://maps.google.com/maps?q=Delhi&output=embed" 
    width="600" 
    height="350" 
    loading="lazy" 
    title="Map Widget"
    sandbox="allow-scripts allow-same-origin"
></iframe>`} lang="html" colorClass="orange" filename="iframe.html" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Embedding interactive Google Maps, YouTube video embeds, Spotify audio widgets, and Stripe credit card input fields.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Isolates third-party widgets in a separate browsing context.</li>
                            <li><code className="text-orange-400">sandbox</code> policies protect parent pages against clickjacking attacks.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Multiple heavy iframes slow down page performance and consume RAM memory.</li>
                            <li>Unsandboxed cross-origin iframes introduce security vulnerabilities.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'html-meta-tags-seo',
            title: '13. [Intermediate] Meta Tags & SEO Basics',
            definition: 'Meta tags contained within the head element communicate page metadata (character set, responsive viewport, page description, Open Graph cards) to search engines and social platforms.',
            syntax: `<meta name="description" content="SEO Summary">
<meta property="og:title" content="Social Card Title">`,
            codeSnippet: `<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Master HTML5 semantic architecture and Web APIs.">
    <!-- Open Graph for Social Cards -->
    <meta property="og:title" content="HTML5 Masterclass">
    <meta property="og:image" content="/preview.png">
</head>`,
            realLifeScenario: 'Open Graph meta tags generate rich visual preview cards when links are shared on WhatsApp, Twitter, LinkedIn, and Slack.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-orange-50 dark:bg-orange-950/20 border-l-4 border-orange-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-orange-800 dark:text-orange-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Meta tags (<code className="font-mono text-orange-600">&lt;meta&gt;</code>) inside the document <code className="font-mono text-orange-600">&lt;head&gt;</code> specify page metadata, character encodings, responsive viewport settings, and Open Graph social sharing cards.</p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of meta tags like the nutritional summary label on a cereal box. Consumers don't eat the label, but it gives store inspectors and shoppers key facts about what is inside the box.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-purple-600" />3. Meta Tags Crawler Indexing (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph LR
    A[head Section Meta Tags] --> B[Googlebot Search Crawler]
    A --> C[Open Graph Social Bots]
    B --> D[Generate Google Search Snippet]
    C --> E[Generate Twitter/WhatsApp Preview Card]`}
                            caption="Figure 13.1: Meta Tag Processing by Search Engines and Social Media Bots."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This diagram shows how search bots and social platforms read head meta tags to render search snippets and preview cards.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-orange-600" />4. Sample Code</h4>
                        <CodeBlock code={`<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Master HTML5 semantic architecture and Web APIs.">
    <!-- Open Graph for Social Cards -->
    <meta property="og:title" content="HTML5 Masterclass">
    <meta property="og:image" content="/preview.png">
</head>`} lang="html" colorClass="orange" filename="meta.html" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Search engine optimization (SEO) and social media link previews on WhatsApp, LinkedIn, Twitter, and Slack rely on meta tags.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Improves organic search ranking click-through rates (CTR).</li>
                            <li><code className="text-orange-400">viewport</code> meta tags enable responsive rendering across mobile devices.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Meta description keywords alone cannot fix poorly structured body content.</li>
                            <li>Missing Open Graph image URLs result in blank fallback cards when shared on social media.</li>
                        </ul>
                    </div>
                </div>
            )
        },

        // ==================== ADVANCED TIER ====================
        {
            id: 'html-accessibility-aria',
            title: '14. [Advanced] Accessibility & ARIA Roles',
            definition: 'WAI-ARIA (Accessible Rich Internet Applications) attributes (role, aria-expanded, aria-hidden, aria-live) bridge accessibility gaps for screen reader users.',
            syntax: `<button aria-expanded="false" aria-controls="menu">Menu</button>
<div id="menu" aria-hidden="true">Dropdown</div>`,
            codeSnippet: `<div role="dialog" aria-labelledby="modal-title" aria-modal="true">
    <h2 id="modal-title">Confirm Delete</h2>
    <button aria-label="Close dialog">X</button>
</div>`,
            realLifeScenario: 'Government sites, banks, and enterprise SaaS products enforce WCAG 2.1 AA accessibility guidelines using ARIA attributes to pass accessibility audits.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-orange-50 dark:bg-orange-950/20 border-l-4 border-orange-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-orange-800 dark:text-orange-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">WAI-ARIA attributes provide screen readers with semantic roles (<code className="font-mono text-orange-600">role="dialog"</code>) and dynamic state flags (<code className="font-mono text-orange-600">aria-expanded</code>) for complex JavaScript widgets.</p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of ARIA attributes like audio announcements at an airport terminal. Blind passengers can't see the visual departure display screen, but audio announcements tell them exactly which gate is open.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-purple-600" />3. Accessibility Screen Reader Bridge (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph LR
    A[Interactive JS Widget] -->|Provides Attributes| B["ARIA States (aria-expanded='true')"]
    B -->|Accessibility API| C[Screen Reader Engine]
    C -->|Voice Announcement| D["User: 'Menu Expanded, 5 Items'"]`}
                            caption="Figure 14.1: ARIA Accessibility Bridge to Screen Readers."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This diagram shows how ARIA attributes communicate dynamic UI state updates to screen readers.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-orange-600" />4. Sample Code</h4>
                        <CodeBlock code={`<div role="dialog" aria-labelledby="modal-title" aria-modal="true">
    <h2 id="modal-title">Confirm Delete</h2>
    <button aria-label="Close dialog">X</button>
</div>`} lang="html" colorClass="orange" filename="aria.html" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Enterprise banking dashboards and government portals use ARIA roles to pass WCAG 2.1 AA accessibility audits.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Makes complex custom JavaScript components accessible to visually impaired users.</li>
                            <li>Ensures compliance with legal WCAG accessibility mandates.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Rule 1 of ARIA: Prefer native HTML elements (e.g. <code className="text-orange-400">&lt;button&gt;</code>) whenever available.</li>
                            <li>Incorrect ARIA state attributes confuse screen readers worse than no ARIA at all.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'html-web-components',
            title: '15. [Advanced] Web Components (Templates & Shadow DOM)',
            definition: 'Web Components allow developers to create encapsulated reusable custom HTML tags using Custom Elements, Shadow DOM, and HTML Templates.',
            syntax: `<template id="card-template">
    <style>:host { display: block; }</style>
    <div><slot></slot></div>
</template>`,
            codeSnippet: `<template id="user-badge">
    <style>.badge { background: #ea580c; color: white; padding: 4px; }</style>
    <span class="badge"><slot></slot></span>
</template>
<script>
    class Badge extends HTMLElement {
        constructor() {
            super();
            const tmpl = document.getElementById('user-badge').content;
            this.attachShadow({mode: 'open'}).appendChild(tmpl.cloneNode(true));
        }
    }
    customElements.define('user-badge', Badge);
</script>
<user-badge>Verified</user-badge>`,
            realLifeScenario: 'Design systems at Salesforce, Shopee, and Google build framework-agnostic web components that run in React, Angular, Vue, or vanilla HTML.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-orange-50 dark:bg-orange-950/20 border-l-4 border-orange-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-orange-800 dark:text-orange-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Web Components are W3C standard browser APIs that allow creating reusable custom HTML tags (<code className="font-mono text-orange-600">&lt;user-badge&gt;</code>) with encapsulated Shadow DOM styles.</p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of Web Components like custom Lego blocks with internal pre-wired light bulbs. You can snap the Lego block into any building set without its internal wiring interfering with other bricks.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-purple-600" />3. Web Component Architecture (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph TD
    A[Custom Element <user-badge>] --> B[Shadow DOM Boundary]
    B --> C[Isolated CSS Styles]
    B --> D[HTML Template]
    B --> E[<slot> Content Injection]`}
                            caption="Figure 15.1: Web Component Encapsulation inside Shadow DOM."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This diagram shows how Shadow DOM encapsulates internal CSS styles from leaking out into document scope.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-orange-600" />4. Sample Code</h4>
                        <CodeBlock code={`<template id="user-badge">
    <style>.badge { background: #ea580c; color: white; padding: 4px; }</style>
    <span class="badge"><slot></slot></span>
</template>
<script>
    class Badge extends HTMLElement {
        constructor() {
            super();
            const tmpl = document.getElementById('user-badge').content;
            this.attachShadow({mode: 'open'}).appendChild(tmpl.cloneNode(true));
        }
    }
    customElements.define('user-badge', Badge);
</script>
<user-badge>Verified</user-badge>`} lang="html" colorClass="orange" filename="webcomponent.html" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Cross-framework design systems (Salesforce Lightning Web Components) build reusable UI elements that run in any web environment.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Framework-agnostic: native browser standards support without npm dependencies.</li>
                            <li>Shadow DOM prevents internal component CSS styles from leaking out into global stylesheets.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Server-Side Rendering (SSR) hydration requires additional polyfill setup.</li>
                            <li>Global CSS utility frameworks (like Tailwind) cannot penetrate Shadow DOM boundaries easily.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'html-canvas-svg',
            title: '16. [Advanced] Canvas & SVG Graphics',
            definition: 'HTML5 supports 2D raster canvas pixel graphics via JavaScript APIs (<canvas>) and resolution-independent vector graphics (<svg>).',
            syntax: `<canvas id="c" width="400" height="200"></canvas>
<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="40"/></svg>`,
            codeSnippet: `<!-- Scalable Vector Graphic (SVG) -->
<svg viewBox="0 0 24 24" width="32" height="32" class="fill-current text-orange-500">
    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
</svg>

<!-- Pixel Canvas Element -->
<canvas id="cvs" width="300" height="100"></canvas>
<script>
    const ctx = document.getElementById('cvs').getContext('2d');
    ctx.fillRect(10, 10, 50, 50);
</script>`,
            realLifeScenario: 'Browser games, charting packages (Chart.js, D3.js), and icon systems (Lucide Icons) rely on Canvas and SVG graphics.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-orange-50 dark:bg-orange-950/20 border-l-4 border-orange-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-orange-800 dark:text-orange-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">HTML5 graphics APIs include <code className="font-mono text-orange-600">&lt;svg&gt;</code> for scalable vector DOM shapes and <code className="font-mono text-orange-600">&lt;canvas&gt;</code> for high-performance 2D raster pixel rendering via JavaScript.</p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">SVG is like a flexible rubber stamp (stretches to any size without losing crispness), while Canvas is like painting pixels on a grid canvas (great for fast repainting, but gets blurry if stretched).</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-purple-600" />3. SVG vs Canvas Comparison (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph TD
    A[HTML5 Graphics] --> B[SVG Vector Graphics]
    A --> C[Canvas Raster Pixels]
    B --> B1[XML DOM Nodes - Scalable Icons]
    C --> C1[JS Context 2D - Fast Browser Games]`}
                            caption="Figure 16.1: SVG Vector vs Canvas Raster Graphics Comparison."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This diagram compares vector SVG elements with 2D raster Canvas rendering contexts.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-orange-600" />4. Sample Code</h4>
                        <CodeBlock code={`<!-- Scalable Vector Graphic (SVG) -->
<svg viewBox="0 0 24 24" width="32" height="32" class="fill-current text-orange-500">
    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
</svg>

<!-- Pixel Canvas Element -->
<canvas id="cvs" width="300" height="100"></canvas>
<script>
    const ctx = document.getElementById('cvs').getContext('2d');
    ctx.fillRect(10, 10, 50, 50);
</script>`} lang="html" colorClass="orange" filename="graphics.html" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Interactive data charts (Chart.js, D3.js), UI icon systems, and 2D HTML5 browser games.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>SVG graphics scale infinitely without resolution pixelation.</li>
                            <li>Canvas handles thousands of moving pixel objects for high FPS games.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>SVG DOM nodes slow down when rendering over 10,000 active objects.</li>
                            <li>Canvas pixels are non-accessible text elements for screen readers.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'html-apis',
            title: '17. [Advanced] HTML APIs (Drag-Drop, Geolocation, Storage)',
            definition: 'HTML5 includes powerful native browser APIs for Drag and Drop operations, Geolocation positioning, and LocalStorage client persistence.',
            syntax: `navigator.geolocation.getCurrentPosition(pos => console.log(pos));
localStorage.setItem('key', 'val');`,
            codeSnippet: `<!-- Draggable Element -->
<div draggable="true" ondragstart="event.dataTransfer.setData('text', 'id-1')">
    Drag Card
</div>
<script>
    localStorage.setItem('theme', 'dark');
</script>`,
            realLifeScenario: 'Kanban boards (Trello, Jira) use the HTML Drag and Drop API to move card elements between workflow columns.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-orange-50 dark:bg-orange-950/20 border-l-4 border-orange-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-orange-800 dark:text-orange-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Native HTML5 Web APIs equip browser JavaScript with direct capabilities like element Drag &amp; Drop, GPS Geolocation positioning, and LocalStorage data persistence.</p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of HTML APIs like built-in smartphone features (GPS, memory card, touchscreen gestures) that web applications can access directly through code.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-purple-600" />3. Native API Access Flow (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`sequenceDiagram
    autonumber
    App->>Browser API: navigator.geolocation.getCurrentPosition()
    Browser API->>User: Request Permission Prompt
    User-->>Browser API: Grant Permission
    Browser API-->>App: Return Coordinates (Lat, Long)`}
                            caption="Figure 17.1: Browser Geolocation Native API Request Flow."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This diagram outlines how native browser APIs handle permission checks before returning hardware data.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-orange-600" />4. Sample Code</h4>
                        <CodeBlock code={`<!-- Draggable Element -->
<div draggable="true" ondragstart="event.dataTransfer.setData('text', 'id-1')">
    Drag Card
</div>
<script>
    localStorage.setItem('theme', 'dark');
</script>`} lang="html" colorClass="orange" filename="apis.html" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Kanban task boards (Trello, Jira) and offline theme settings persistence in web applications.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Native browser implementation without needing heavy third-party npm libraries.</li>
                            <li>LocalStorage retains state across page reloads.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>LocalStorage stores plain text data vulnerable to XSS token theft.</li>
                            <li>Geolocation requires user permission and an HTTPS secure origin context.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'html-microdata-schema',
            title: '18. [Advanced] Microdata & Schema.org Structured Data',
            definition: 'Microdata attributes and JSON-LD scripts embed machine-readable structured schema metadata for search engines to generate rich search result snippets.',
            syntax: `<script type="application/ld+json">
{ "@context": "https://schema.org", "@type": "Course", "name": "HTML5" }
</script>`,
            codeSnippet: `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "HTML5 Architecture",
  "provider": { "@type": "Organization", "name": "ADV Indian Coder" }
}
</script>`,
            realLifeScenario: 'E-commerce product pages embed JSON-LD schemas to display star ratings, stock availability, and prices directly in Google Search snippets.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-orange-50 dark:bg-orange-950/20 border-l-4 border-orange-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-orange-800 dark:text-orange-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">JSON-LD structured data scripts embed machine-readable Schema.org metadata into HTML pages, allowing search engine crawlers to parse course ratings, prices, and event details.</p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of Schema.org metadata like a standardized passport barcode. Instead of border guards reading through pages of handwritten notes, scanning the barcode provides structured birthdate and nationality data instantly.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-purple-600" />3. Structured Data Indexing (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph LR
    A[JSON-LD Script in head] --> B[Googlebot Schema Parser]
    B --> C[Extract Product Price & Star Ratings]
    C --> D[Render Google Rich Search Result Snippet]`}
                            caption="Figure 18.1: JSON-LD Schema.org Structured Data Processing."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This diagram shows how search bots read JSON-LD scripts to display rich snippets in search result pages.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-orange-600" />4. Sample Code</h4>
                        <CodeBlock code={`<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "HTML5 Architecture",
  "provider": { "@type": "Organization", "name": "ADV Indian Coder" }
}
</script>`} lang="html" colorClass="orange" filename="schema.jsonld" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">E-commerce stores, course portals, and recipe websites use Schema.org structured data to win rich search result cards.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Increases organic search click-through rates (CTR) with star rating badges.</li>
                            <li>Separated cleanly inside JSON-LD scripts without altering visual HTML body markup.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Syntax errors in JSON-LD cause Google Rich Results Test to fail.</li>
                            <li>Rich snippets are not guaranteed; search engines choose when to display them.</li>
                        </ul>
                    </div>
                </div>
            )
        },

        // ==================== PROFESSIONAL TIER ====================
        {
            id: 'html-performance-lazyload',
            title: '19. [Professional] Performance (Lazy Loading, Resource Hints)',
            definition: 'Optimize critical rendering paths using native image lazy loading (loading="lazy") and resource hints (dns-prefetch, preconnect, preload, prefetch).',
            syntax: `<link rel="preload" href="font.woff2" as="font" type="font/woff2" crossorigin>
<img src="pic.jpg" loading="lazy">`,
            codeSnippet: `<head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preload" href="/main.css" as="style">
</head>
<body>
    <img src="/below-fold.jpg" loading="lazy" alt="Footer Banner">
</body>`,
            realLifeScenario: 'High-traffic news media websites reduce initial page load times from 5.2s down to 0.8s using preloads and lazy loading.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-orange-50 dark:bg-orange-950/20 border-l-4 border-orange-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-orange-800 dark:text-orange-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">HTML performance optimization utilizes resource hints (<code className="font-mono text-orange-600">preload</code>, <code className="font-mono text-orange-600">preconnect</code>) and native deferred loading (<code className="font-mono text-orange-600">loading="lazy"</code>) to optimize browser critical rendering paths.</p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of resource hints like calling a restaurant ahead to reserve a table before arriving, ensuring your food is ready the instant you sit down.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-purple-600" />3. Resource Hint Execution Pipeline (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph TD
    A[Browser Parses head] --> B[preconnect API Domain]
    A --> C[preload Critical Above-Fold Font]
    A --> D[Parse body Content]
    D --> E[Defer loading='lazy' Below-Fold Images]`}
                            caption="Figure 19.1: HTML Performance Resource Hints Pipeline."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This diagram shows how resource hints prioritize critical assets before processing body contents.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-orange-600" />4. Sample Code</h4>
                        <CodeBlock code={`<head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preload" href="/main.css" as="style">
</head>
<body>
    <img src="/below-fold.jpg" loading="lazy" alt="Footer Banner">
</body>`} lang="html" colorClass="orange" filename="perf.html" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Optimizing Largest Contentful Paint (LCP) scores for Google Core Web Vitals performance benchmarks.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Drastically reduces initial page load times and network bandwidth overhead.</li>
                            <li><code className="text-orange-400">preload</code> eliminates web font render flickering.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Preloading non-critical assets wastes initial bandwidth.</li>
                            <li>Lazy loading hero images above the fold delays Largest Contentful Paint.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'html-progressive-enhancement',
            title: '20. [Professional] Progressive Enhancement',
            definition: 'Progressive Enhancement builds a resilient core HTML content foundation that functions in any browser environment, layering CSS styles and JavaScript interactions on top.',
            syntax: `<form action="/submit" method="POST">
    <button type="submit">Submit</button>
</form>`,
            codeSnippet: `<!-- Baseline Functional Form -->
<form action="/fallback-action" method="POST" id="form-id">
    <input type="email" name="email" required>
    <button type="submit">Submit</button>
</form>
<script>
    // JS Enhancement
    document.getElementById('form-id').addEventListener('submit', (e) => e.preventDefault());
</script>`,
            realLifeScenario: 'Financial sites and government portals ensure forms can submit via traditional HTTP POST if JavaScript fails to execute or is disabled.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-orange-50 dark:bg-orange-950/20 border-l-4 border-orange-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-orange-800 dark:text-orange-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Progressive Enhancement is a web development strategy that establishes a fully functional semantic HTML content baseline first, then layers CSS layout styling and JavaScript enhancements on top.</p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of progressive enhancement like a staircase. People can always walk up the basic stairs (HTML), but an escalator (JavaScript) offers a smoother ride when powered on.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-purple-600" />3. Progressive Enhancement Layers (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph TD
    A[Core Layer 1: Semantic HTML Content Baseline] --> B[Layer 2: CSS Visual Styling]
    B --> C[Layer 3: JavaScript Interactive Enhancement]`}
                            caption="Figure 20.1: Progressive Enhancement Web Architecture Layers."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This diagram shows how web applications build resilient content baselines before layering CSS and JS.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-orange-600" />4. Sample Code</h4>
                        <CodeBlock code={`<!-- Baseline Functional Form -->
<form action="/fallback-action" method="POST" id="form-id">
    <input type="email" name="email" required>
    <button type="submit">Submit</button>
</form>
<script>
    // JS Enhancement
    document.getElementById('form-id').addEventListener('submit', (e) => e.preventDefault());
</script>`} lang="html" colorClass="orange" filename="enhancement.html" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Government applications, banking portals, and low-connectivity mobile web apps build resilient HTML fallbacks.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Guarantees page content accessibility across old devices and slow networks.</li>
                            <li>Protects application functionality if JavaScript bundles fail to load.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Requires double engineering effort to build both server HTTP fallbacks and client AJAX handlers.</li>
                            <li>Complex Single Page Apps (SPAs) are difficult to build without JavaScript runtime dependencies.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'html-email-safe',
            title: '21. [Professional] Email-Safe HTML & Table Layouts',
            definition: 'HTML email design requires legacy table-based layouts, inline CSS styles, and explicit cell padding to guarantee consistent rendering across Microsoft Outlook and Gmail.',
            syntax: `<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
    <tr><td style="padding: 20px; background-color: #ffffff;">Content</td></tr>
</table>`,
            codeSnippet: `<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" style="background:#fff;">
    <tr>
        <td style="padding: 20px; font-family: Arial, sans-serif;">
            <h1 style="margin: 0; color: #ea580c;">Welcome Email</h1>
        </td>
    </tr>
</table>`,
            realLifeScenario: 'Transactional email services (SendGrid, Mailchimp) compile templates into table-based structures to ensure layout integrity in Microsoft Outlook 2016.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-orange-50 dark:bg-orange-950/20 border-l-4 border-orange-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-orange-800 dark:text-orange-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">HTML Email Development uses legacy table-based layouts and inline CSS styles to guarantee visual rendering consistency across desktop email clients like Microsoft Outlook and mobile Gmail.</p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of HTML email coding like writing a telegram letter in simple block letters to ensure any post office worker in any country can read it without specialized decoding tools.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-purple-600" />3. HTML Email Architecture (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph TD
    A[HTML Email Template] --> B[Nested <table> Layout Grid]
    B --> C[Inline CSS Styles]
    B --> D[role='presentation']
    C --> E[Compatible Outlook & Gmail Rendering]`}
                            caption="Figure 21.1: Legacy Table Architecture for HTML Email Clients."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This diagram shows how inline styles and nested tables bypass email client CSS limitations.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-orange-600" />4. Sample Code</h4>
                        <CodeBlock code={`<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" style="background:#fff;">
    <tr>
        <td style="padding: 20px; font-family: Arial, sans-serif;">
            <h1 style="margin: 0; color: #ea580c;">Welcome Email</h1>
        </td>
    </tr>
</table>`} lang="html" colorClass="orange" filename="email.html" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Marketing newsletter campaigns and automated e-commerce transactional receipts (SendGrid, Mailchimp).</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Guarantees visual layout integrity across Microsoft Outlook 2016 and mobile Gmail.</li>
                            <li><code className="text-orange-400">role="presentation"</code> strips accessibility table semantics from pure design grids.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Modern CSS Flexbox and Grid layouts are not supported by Microsoft Outlook.</li>
                            <li>Inlining CSS styles creates verbose, difficult-to-maintain HTML templates.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'html-cross-browser-legacy',
            title: '22. [Professional] Cross-Browser & Legacy Compatibility',
            definition: 'Ensure seamless rendering across modern browsers and legacy clients using HTML5 shims (html5shiv), polyfills, and feature detection.',
            syntax: `<picture>
    <source srcset="hero.avif" type="image/avif">
    <source srcset="hero.webp" type="image/webp">
    <img src="hero.jpg" alt="Fallback">
</picture>`,
            codeSnippet: `<picture>
    <source srcset="/hero.avif" type="image/avif">
    <source srcset="/hero.webp" type="image/webp">
    <img src="/hero.jpg" alt="Hero Fallback Image">
</picture>`,
            realLifeScenario: 'The <code className="text-orange-600">&lt;picture&gt;</code> tag serves lightweight AVIF/WebP formats to modern browsers while falling back to JPG for legacy browsers.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-orange-50 dark:bg-orange-950/20 border-l-4 border-orange-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-orange-800 dark:text-orange-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Cross-browser compatibility ensures web applications render consistently across all web browsers and devices using fallback elements like <code className="font-mono text-orange-600">&lt;picture&gt;</code> and polyfills.</p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of cross-browser fallbacks like a universal power adapter. It plugs into high-speed modern sockets, but provides legacy pins so older devices can still charge safely.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-purple-600" />3. Picture Tag Fallback Decision (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`flowchart TD
    A[Browser Parses <picture>] --> B{Supports AVIF?}
    B -- Yes --> C[Render AVIF Image]
    B -- No --> D{Supports WebP?}
    D -- Yes --> E[Render WebP Image]
    D -- No --> F[Render <img> JPG Fallback]`}
                            caption="Figure 22.1: Picture Element Image Format Fallback Flow."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This flowchart shows how browsers evaluate source types to pick supported image formats.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-orange-600" />4. Sample Code</h4>
                        <CodeBlock code={`<picture>
    <source srcset="/hero.avif" type="image/avif">
    <source srcset="/hero.webp" type="image/webp">
    <img src="/hero.jpg" alt="Hero Fallback Image">
</picture>`} lang="html" colorClass="orange" filename="picture.html" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Serving modern lightweight AVIF/WebP image formats to Chrome while retaining JPG fallbacks for older devices.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Delivers 80% smaller AVIF images to modern browsers without breaking legacy clients.</li>
                            <li>Prevents page rendering crashes on older mobile devices.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Requires generating multiple image format assets for every uploaded image.</li>
                            <li>Legacy polyfills add extra JavaScript bundle size overhead.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'html-build-tools-integration',
            title: '23. [Professional] Build Tools & Static Site Integration',
            definition: 'Modern bundlers (Vite, Webpack, HTMLWebpackPlugin) process HTML entry points, minifying markup, injecting fingerprinted asset scripts, and optimizing bundles.',
            syntax: `<!DOCTYPE html>
<html>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`,
            codeSnippet: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Vite SPA App</title>
  </head>
  <body>
    <div id="root"></div>
    <!-- Module Script Entry Point -->
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`,
            realLifeScenario: 'Vite compiles single-page application HTML templates, automatically injecting fingerprinted script tags (`assets/index-Dk39f.js`) for cache busting.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-orange-50 dark:bg-orange-950/20 border-l-4 border-orange-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-orange-800 dark:text-orange-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Modern build tools (Vite, Webpack) use <code className="font-mono text-orange-600">index.html</code> as the application entry point module graph, bundling, minifying markup, and injecting cache-busted script assets.</p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of build tools like an automated book printing press. You write raw drafts, and the press automatically formats, checks spelling, shrinks margins, and binds the final book for bookstores.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-purple-600" />3. Vite HTML Build Pipeline (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph LR
    A["index.html Entry"] --> B["<script type='module' src='main.tsx'>"]
    B --> C[Vite / Rollup Bundler Engine]
    C --> D[Minified index.html]
    C --> E["Bundled JS/CSS assets/index-a83d.js"]`}
                            caption="Figure 23.1: Vite HTML Entry Point Module Bundling Pipeline."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This diagram shows how Vite processes index.html as the root module graph for asset compilation.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-orange-600" />4. Sample Code</h4>
                        <CodeBlock code={`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Vite SPA App</title>
  </head>
  <body>
    <div id="root"></div>
    <!-- Module Script Entry Point -->
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`} lang="html" colorClass="orange" filename="index.html" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">React Vite, Vue, and Next.js applications use single HTML entry templates for single-page app mounting.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Automates script cache busting with fingerprinted filenames.</li>
                            <li>Minifies HTML markup to reduce production download file sizes.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Broken relative path references in HTML templates fail build steps.</li>
                            <li>Single-page apps relying on a single <code className="text-orange-400">#root</code> div require Server-Side Rendering (SSR) for full SEO indexing.</li>
                        </ul>
                    </div>
                </div>
            )
        }
    ];

    const topics = courseData.map(topic => topic.title);
    const activeTopic = courseData[activeTopicIndex];

    return (
        <CoursePageLayout
            title="HTML5 Masterclass Course"
            description="Master HTML5 from Document Structure and Semantic Tags to ARIA Accessibility, Canvas/SVG, Web Components, Performance Lazy Loading, and Build Tools."
            topics={topics}
            icon={FileCode}
            colorClass="orange"
            activeTopicIndex={activeTopicIndex}
            onTopicClick={setActiveTopicIndex}
        >
            <div className="space-y-8">
                {/* Part 1: Concept Definition & Explanation */}
                <div className="bg-orange-50 dark:bg-orange-900/10 border-l-4 border-orange-600 p-6 rounded-r-xl shadow-sm">
                    <h3 className="text-lg font-bold text-orange-800 dark:text-orange-300 mb-2 flex items-center">
                        <BookOpen className="w-5 h-5 mr-2" />
                        1. Concept Definition & Detailed Explanation
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium mb-4">
                        {activeTopic.definition}
                    </p>
                    <div className="prose dark:prose-invert max-w-none text-sm text-gray-700 dark:text-gray-300">
                        {activeTopic.content}
                    </div>
                </div>

                {/* Part 2: Formal Code Syntax Blueprint */}
                {activeTopic.syntax ? (
                    <div className="bg-purple-50 dark:bg-purple-900/10 border-l-4 border-purple-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-purple-800 dark:text-purple-300 mb-3 flex items-center">
                            <FileText className="w-5 h-5 mr-2" />
                            2. Formal Code Syntax Blueprint
                        </h3>
                        <div className="bg-slate-900 text-slate-100 font-mono text-sm p-4 rounded-xl border border-slate-800 overflow-x-auto">
                            <pre>{activeTopic.syntax}</pre>
                        </div>
                    </div>
                ) : (
                    <div className="bg-purple-50 dark:bg-purple-900/10 border-l-4 border-purple-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-purple-800 dark:text-purple-300 mb-3 flex items-center">
                            <FileText className="w-5 h-5 mr-2" />
                            2. Formal Code Syntax Blueprint
                        </h3>
                        <div className="bg-slate-900 text-slate-100 font-mono text-sm p-4 rounded-xl border border-slate-800 overflow-x-auto">
                            <pre>{`<!-- HTML Tag Structure Syntax Blueprint -->\n<tagname attribute="value">\n  Content goes here...\n</tagname>`}</pre>
                        </div>
                    </div>
                )}

                {/* Part 3: Executable Code Example */}
                {activeTopic.codeSnippet && (
                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-orange-600" />
                            3. Executable Production Code Example
                        </h3>
                        <CodeBlock code={activeTopic.codeSnippet} lang="html" colorClass="orange" filename="index.html" />
                    </div>
                )}

                {/* Part 4: Real-Life Scenario Example */}
                <div className="bg-emerald-50 dark:bg-emerald-900/10 border-l-4 border-emerald-600 p-6 rounded-r-xl shadow-sm">
                    <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                        <Lightbulb className="w-5 h-5 mr-2" />
                        4. Real-Life Industry Scenario & Application
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                        {activeTopic.realLifeScenario || activeTopic.example || "Used across commercial web applications to deliver semantic structure, high accessibility, and search engine optimization."}
                    </p>
                </div>
            </div>
        </CoursePageLayout>
    );
};

export default HtmlCoursePage;
