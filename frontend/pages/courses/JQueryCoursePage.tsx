import React, { useState } from 'react';
import CoursePageLayout from '../../components/CoursePageLayout';
import { Hash, Code, BookOpen, Lightbulb, FileText, Cpu, Layers, ShieldAlert, Zap, Workflow, Check, AlertTriangle } from 'lucide-react';
import CodeBlock from '../../components/CodeBlock';
import MermaidDiagram from '../../components/MermaidDiagram';

interface JQueryTopic {
    id: string;
    title: string;
    definition: string;
    example?: string;
    syntax?: string;
    realLifeScenario?: string;
    codeSnippet?: string | null;
    content: React.ReactNode;
}

const JQueryCoursePage = () => {
    const [activeTopicIndex, setActiveTopicIndex] = useState(0);

    const courseData: JQueryTopic[] = [
        {
            id: 'jquery-intro-ready',
            title: '1. [Beginner] Introduction & Setup ($(document).ready())',
            definition: 'jQuery simplifies DOM manipulation, event handling, animations, and AJAX. $(document).ready() ensures the HTML DOM tree is fully parsed before executing script operations.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">jQuery simplifies DOM manipulation, event handling, animations, and AJAX. $(document).ready() ensures the HTML DOM tree is fully parsed before executing script operations.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Think of $(document).ready() as waiting for the foundation and walls of a house to be fully built before you start painting and moving furniture.</p>
                    </div>
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`graph TD; A[Browser Requests Page] --> B[HTML Parsing]; B --> C{DOM Loaded?}; C -- No --> B; C -- Yes --> D[Fire $(document).ready]; D --> E[Execute jQuery Scripts];`} />
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-600" />
                            Sample Code
                        </h3>
                        <CodeBlock code={`$(document).ready(function() {\n    console.log("DOM is ready!");\n    $("#btn").click(function() {\n        alert("Clicked!");\n    });\n});`} lang="javascript" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Ensuring interactive elements on a WordPress site don&apos;t throw errors by trying to attach events to elements that haven&apos;t rendered yet.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-6 shadow-sm">
                        <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                            <Check className="w-5 h-5 mr-2 text-emerald-400" />
                            Advantages
                        </h3>
                        <ul className="space-y-2">
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-1 text-emerald-400 flex-shrink-0" /><span>Simplifies complex vanilla JS into short, readable code</span></li>
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-1 text-emerald-400 flex-shrink-0" /><span>Handles cross-browser inconsistencies automatically</span></li>
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-1 text-emerald-400 flex-shrink-0" /><span>Ensures code only runs when the DOM is safe to manipulate</span></li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-6 shadow-sm">
                        <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                            <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                            Disadvantages / Limitations
                        </h3>
                        <ul className="space-y-2">
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-1 text-red-400 flex-shrink-0" /><span>Requires loading the entire jQuery library</span></li>
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-1 text-red-400 flex-shrink-0" /><span>Often overkill for simple modern web applications</span></li>
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-1 text-red-400 flex-shrink-0" /><span>Slightly slower than native DOMContentLoaded event</span></li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'jquery-selectors-traversal',
            title: '2. [Beginner] Selectors & DOM Traversal (find, parent, eq)',
            definition: 'jQuery uses CSS selectors ($("#id"), $(".class")) and DOM traversal methods (.find(), .parent(), .children(), .siblings(), .eq()) to navigate element trees.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">jQuery uses CSS selectors ($(&quot;#id&quot;), $(&quot;.class&quot;)) and DOM traversal methods (.find(), .parent(), .children(), .siblings(), .eq()) to navigate element trees.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Selectors are like addresses, and traversal methods are like giving directions from that address (e.g., go to the parent house, find the child room).</p>
                    </div>
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`graph TD; A[ul#list] --> B[li.item1]; A --> C[li.item2.active]; A --> D[li.item3]; C -- .parent() --> A; C -- .siblings() --> B; C -- .siblings() --> D;`} />
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-600" />
                            Sample Code
                        </h3>
                        <CodeBlock code={`$("#product-list")\n    .find("li.active")\n    .css("color", "green")\n    .siblings()\n    .css("color", "gray");`} lang="javascript" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Navigating complex nested navigation menus to highlight the active tab and dim its siblings.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-6 shadow-sm">
                        <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                            <Check className="w-5 h-5 mr-2 text-emerald-400" />
                            Advantages
                        </h3>
                        <ul className="space-y-2">
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-1 text-emerald-400 flex-shrink-0" /><span>Extremely intuitive CSS-like syntax for finding elements</span></li>
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-1 text-emerald-400 flex-shrink-0" /><span>Chaining traversal methods is highly readable</span></li>
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-1 text-emerald-400 flex-shrink-0" /><span>Abstracts away cross-browser querySelector differences</span></li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-6 shadow-sm">
                        <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                            <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                            Disadvantages / Limitations
                        </h3>
                        <ul className="space-y-2">
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-1 text-red-400 flex-shrink-0" /><span>Overusing deep traversal can hurt performance</span></li>
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-1 text-red-400 flex-shrink-0" /><span>Couples JS logic tightly to HTML structure</span></li>
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-1 text-red-400 flex-shrink-0" /><span>Native querySelector is faster</span></li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'jquery-dom-manipulation',
            title: '3. [Beginner] Basic DOM Manipulation (html, text, val, addClass)',
            definition: 'Inspect and update DOM content using .text() (plain text), .html() (HTML markup), .val() (form input values), .attr(), .addClass(), and .css().',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Inspect and update DOM content using .text() (plain text), .html() (HTML markup), .val() (form input values), .attr(), .addClass(), and .css().</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">DOM manipulation is like remodeling a room: .html() replaces everything inside, .addClass() applies a new theme, and .val() checks what&apos;s inside a storage box.</p>
                    </div>
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`graph LR; A[Select Element] --> B{Action}; B -->|Read| C[.text / .html / .val]; B -->|Write| D[.text(str) / .html(str) / .val(str)]; B -->|Style| E[.addClass / .css];`} />
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-600" />
                            Sample Code
                        </h3>
                        <CodeBlock code={`let currentName = $("#username").val();\n$("#display").text("Welcome, " + currentName);\n$("#card").removeClass("draft").addClass("published");`} lang="javascript" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Updating user dashboards dynamically without reloading, such as showing a welcome message when a user types their name.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-6 shadow-sm">
                        <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                            <Check className="w-5 h-5 mr-2 text-emerald-400" />
                            Advantages
                        </h3>
                        <ul className="space-y-2">
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-1 text-emerald-400 flex-shrink-0" /><span>Getters and setters are merged into single methods</span></li>
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-1 text-emerald-400 flex-shrink-0" /><span>Implicit iteration automatically applies changes to all matched elements</span></li>
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-1 text-emerald-400 flex-shrink-0" /><span>Clean chaining for multiple manipulations</span></li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-6 shadow-sm">
                        <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                            <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                            Disadvantages / Limitations
                        </h3>
                        <ul className="space-y-2">
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-1 text-red-400 flex-shrink-0" /><span>Frequent DOM updates cause reflows and performance issues</span></li>
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-1 text-red-400 flex-shrink-0" /><span>.html() can be vulnerable to XSS if not careful</span></li>
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-1 text-red-400 flex-shrink-0" /><span>React/Vue virtual DOMs handle this much more efficiently</span></li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'jquery-event-handling',
            title: '4. [Beginner] Event Handling (click, hover, on, off)',
            definition: 'Attach event listeners using .on() and remove them using .off(). Handle click, hover, focus, and blur events with automatic cross-browser Event normalization.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Attach event listeners using .on() and remove them using .off(). Handle click, hover, focus, and blur events with automatic cross-browser Event normalization.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Event handling is like setting up security cameras (.on()) that trigger an alarm when someone enters (.click()) or loiters (.hover()).</p>
                    </div>
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`graph TD; A[User Interaction] --> B(Browser Event); B --> C[jQuery .on() handler]; C --> D{Event Object}; D --> E[e.preventDefault()]; D --> F[Custom Logic Execution];`} />
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-600" />
                            Sample Code
                        </h3>
                        <CodeBlock code={`$("#submit-btn").on("click", function(e) {\n    e.preventDefault();\n    console.log("Form submission intercepted");\n});`} lang="javascript" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Creating custom dropdowns that open on hover and forms that validate via JS before submission.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-6 shadow-sm">
                        <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                            <Check className="w-5 h-5 mr-2 text-emerald-400" />
                            Advantages
                        </h3>
                        <ul className="space-y-2">
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-1 text-emerald-400 flex-shrink-0" /><span>Normalizes the event object across all browsers</span></li>
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-1 text-emerald-400 flex-shrink-0" /><span>Simple API for attaching and detaching multiple events</span></li>
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-1 text-emerald-400 flex-shrink-0" /><span>Supports namespaces for events (e.g., &apos;click.myPlugin&apos;)</span></li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-6 shadow-sm">
                        <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                            <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                            Disadvantages / Limitations
                        </h3>
                        <ul className="space-y-2">
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-1 text-red-400 flex-shrink-0" /><span>Attaching too many individual event handlers consumes memory</span></li>
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-1 text-red-400 flex-shrink-0" /><span>Legacy shortcut methods like .click() can cause confusion</span></li>
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-1 text-red-400 flex-shrink-0" /><span>Native addEventListener is universally supported now</span></li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'jquery-effects-animations',
            title: '5. [Intermediate] Effects & Animations (fadeIn, slideToggle, animate)',
            definition: 'Animate DOM element visibility using show(), hide(), toggle(), fadeIn(), fadeOut(), slideDown(), slideUp(), slideToggle(), and custom .animate() properties.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Animate DOM element visibility using show(), hide(), toggle(), fadeIn(), fadeOut(), slideDown(), slideUp(), slideToggle(), and custom .animate() properties.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Animations in jQuery are like stage curtains: you can raise them (slideUp), drop them (slideDown), or fade the stage lights (fadeIn/fadeOut).</p>
                    </div>
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`graph LR; A[Element] --> B{Method}; B -->|.slideToggle()| C[Animate Height]; B -->|.fadeToggle()| D[Animate Opacity]; B -->|.animate()| E[Custom CSS Props]; C --> F[Animation Queue]; D --> F; E --> F;`} />
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-600" />
                            Sample Code
                        </h3>
                        <CodeBlock code={`$(".faq-question").on("click", function() {\n    $(this).next(".faq-answer").slideToggle(300);\n});`} lang="javascript" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Building smooth accordion menus, dismissible alert banners, or custom loading overlays.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-6 shadow-sm">
                        <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                            <Check className="w-5 h-5 mr-2 text-emerald-400" />
                            Advantages
                        </h3>
                        <ul className="space-y-2">
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-1 text-emerald-400 flex-shrink-0" /><span>Dead simple API for complex animations</span></li>
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-1 text-emerald-400 flex-shrink-0" /><span>Animations are queued automatically</span></li>
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-1 text-emerald-400 flex-shrink-0" /><span>Callback functions fire reliably when animations complete</span></li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-6 shadow-sm">
                        <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                            <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                            Disadvantages / Limitations
                        </h3>
                        <ul className="space-y-2">
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-1 text-red-400 flex-shrink-0" /><span>JS-based animations are less performant than CSS transitions</span></li>
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-1 text-red-400 flex-shrink-0" /><span>Animation queues can build up if not managed with .stop()</span></li>
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-1 text-red-400 flex-shrink-0" /><span>High CPU usage on mobile devices</span></li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'jquery-advanced-dom-insertion',
            title: '6. [Intermediate] Advanced DOM Insertion (append, prepend, clone)',
            definition: 'Insert new elements into the DOM tree via append(), prepend() (inside target), after(), before() (outside target), wrap(), empty(), remove(), and clone().',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Insert new elements into the DOM tree via append(), prepend() (inside target), after(), before() (outside target), wrap(), empty(), remove(), and clone().</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">DOM insertion is like arranging books on a shelf: you can put a book at the end (append), at the start (prepend), or next to a specific book (after/before).</p>
                    </div>
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`graph TD; A[Target Element] --> B[Inside]; A --> C[Outside]; B --> D[.prepend() - Start]; B --> E[.append() - End]; C --> F[.before() - Previous]; C --> G[.after() - Next];`} />
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-600" />
                            Sample Code
                        </h3>
                        <CodeBlock code={`$("#add-btn").on("click", function() {\n    $("#list").append("<li>New Item</li>");\n});\n$("#container").empty(); // Clears children`} lang="javascript" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Dynamically adding new rows to a data table or items to a shopping cart without a page reload.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-6 shadow-sm">
                        <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                            <Check className="w-5 h-5 mr-2 text-emerald-400" />
                            Advantages
                        </h3>
                        <ul className="space-y-2">
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-1 text-emerald-400 flex-shrink-0" /><span>Easy to parse strings into DOM nodes implicitly</span></li>
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-1 text-emerald-400 flex-shrink-0" /><span>Versatile methods cover every structural insertion need</span></li>
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-1 text-emerald-400 flex-shrink-0" /><span>.clone() neatly duplicates elements with or without their events</span></li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-6 shadow-sm">
                        <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                            <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                            Disadvantages / Limitations
                        </h3>
                        <ul className="space-y-2">
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-1 text-red-400 flex-shrink-0" /><span>Frequent insertion triggers expensive browser reflows</span></li>
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-1 text-red-400 flex-shrink-0" /><span>Risk of memory leaks if elements are removed improperly</span></li>
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-1 text-red-400 flex-shrink-0" /><span>Constructing HTML strings in JS is messy</span></li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'jquery-form-events-validation',
            title: '7. [Intermediate] Form Events & Client Validation',
            definition: 'Handle form events (.change(), .submit(), .focus()) and validate user input values prior to submitting data to backend servers.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Handle form events (.change(), .submit(), .focus()) and validate user input values prior to submitting data to backend servers.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Client-side validation is like a bouncer at a club checking IDs before you get to the actual door (the server).</p>
                    </div>
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`graph TD; A[Form Submit] --> B[jQuery .submit()]; B --> C{Validate Inputs}; C -- Invalid --> D[e.preventDefault()]; D --> E[Show Error Msgs]; C -- Valid --> F[Allow Submission / AJAX Post];`} />
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-600" />
                            Sample Code
                        </h3>
                        <CodeBlock code={`$("#my-form").on("submit", function(e) {\n    if ($("#email").val() === "") {\n        e.preventDefault();\n        $("#error").show().text("Email is required");\n    }\n});`} lang="javascript" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Providing instant feedback to users when they type invalid email formats or weak passwords.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-6 shadow-sm">
                        <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                            <Check className="w-5 h-5 mr-2 text-emerald-400" />
                            Advantages
                        </h3>
                        <ul className="space-y-2">
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-1 text-emerald-400 flex-shrink-0" /><span>Provides immediate feedback without server latency</span></li>
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-1 text-emerald-400 flex-shrink-0" /><span>Reduces unnecessary server load</span></li>
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-1 text-emerald-400 flex-shrink-0" /><span>Form events like .change() are normalized across browsers</span></li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-6 shadow-sm">
                        <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                            <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                            Disadvantages / Limitations
                        </h3>
                        <ul className="space-y-2">
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-1 text-red-400 flex-shrink-0" /><span>Client validation can be bypassed, server validation is still required</span></li>
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-1 text-red-400 flex-shrink-0" /><span>Managing complex validation state manually is error-prone</span></li>
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-1 text-red-400 flex-shrink-0" /><span>Libraries like Formik/Yup are much more robust</span></li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'jquery-dimensions-positioning',
            title: '8. [Intermediate] Dimensions & Positioning (width, offset, scrollTop)',
            definition: 'Calculate element geometry using width(), height(), innerWidth(), outerWidth(), position(), offset(), and manage scroll offsets via scrollTop().',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Calculate element geometry using width(), height(), innerWidth(), outerWidth(), position(), offset(), and manage scroll offsets via scrollTop().</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Dimensions are like measuring a picture frame: you can measure just the picture (width), the picture plus matting (innerWidth), or the whole frame (outerWidth).</p>
                    </div>
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`graph LR; A[Element Box] --> B[width()]; A --> C[innerWidth() +padding]; A --> D[outerWidth() +border]; A --> E[outerWidth(true) +margin];`} />
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-600" />
                            Sample Code
                        </h3>
                        <CodeBlock code={`$(window).on("scroll", function() {\n    if ($(this).scrollTop() > 300) {\n        $("#back-to-top").fadeIn();\n    }\n});`} lang="javascript" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Implementing sticky navigation bars that attach to the top of the screen once the user scrolls past a certain point.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-6 shadow-sm">
                        <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                            <Check className="w-5 h-5 mr-2 text-emerald-400" />
                            Advantages
                        </h3>
                        <ul className="space-y-2">
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-1 text-emerald-400 flex-shrink-0" /><span>Normalizes complex box-model calculations across browsers</span></li>
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-1 text-emerald-400 flex-shrink-0" /><span>Easy retrieval of coordinates relative to the document (.offset)</span></li>
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-1 text-emerald-400 flex-shrink-0" /><span>Simplifies scroll-based interactions</span></li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-6 shadow-sm">
                        <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                            <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                            Disadvantages / Limitations
                        </h3>
                        <ul className="space-y-2">
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-1 text-red-400 flex-shrink-0" /><span>Reading layout properties forces synchronous layout (layout thrashing)</span></li>
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-1 text-red-400 flex-shrink-0" /><span>Scroll events fire rapidly and must be debounced</span></li>
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-1 text-red-400 flex-shrink-0" /><span>Modern CSS (position: sticky) replaces many use cases</span></li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'jquery-ajax-basics',
            title: '9. [Advanced] AJAX Basics ($.ajax, $.get, $.post, $.getJSON)',
            definition: 'Make asynchronous HTTP network requests without page reloads using $.ajax(), $.get(), $.post(), $.getJSON(), handling callbacks via .done() and .fail().',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Make asynchronous HTTP network requests without page reloads using $.ajax(), $.get(), $.post(), $.getJSON(), handling callbacks via .done() and .fail().</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">AJAX is like sending a text message to a friend asking for information, and continuing to work while waiting for their reply.</p>
                    </div>
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`graph TD; A[jQuery AJAX Call] --> B[Browser XMLHttpRequest]; B --> C[Server]; C --> D[JSON Response]; D --> E{Status}; E -- 200 OK --> F[.done() Callback]; E -- 404/500 --> G[.fail() Callback];`} />
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-600" />
                            Sample Code
                        </h3>
                        <CodeBlock code={`$.getJSON("/api/users")\n    .done(function(data) {\n        console.log("Got users:", data);\n    })\n    .fail(function(err) {\n        console.error("Request failed");\n    });`} lang="javascript" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Loading infinite scroll content or submitting a &apos;Like&apos; button interaction without refreshing the page.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-6 shadow-sm">
                        <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                            <Check className="w-5 h-5 mr-2 text-emerald-400" />
                            Advantages
                        </h3>
                        <ul className="space-y-2">
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-1 text-emerald-400 flex-shrink-0" /><span>Abstracts away the ugly XMLHttpRequest API</span></li>
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-1 text-emerald-400 flex-shrink-0" /><span>Automatic JSON parsing</span></li>
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-1 text-emerald-400 flex-shrink-0" /><span>Robust error handling and callback chaining</span></li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-6 shadow-sm">
                        <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                            <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                            Disadvantages / Limitations
                        </h3>
                        <ul className="space-y-2">
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-1 text-red-400 flex-shrink-0" /><span>The $.ajax API is large and complex</span></li>
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-1 text-red-400 flex-shrink-0" /><span>Native fetch() API has largely replaced it</span></li>
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-1 text-red-400 flex-shrink-0" /><span>Does not use native Promises by default in older versions</span></li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'jquery-deferred-promises',
            title: '10. [Advanced] Deferred & Promises ($.Deferred, $.when)',
            definition: 'Manage complex asynchronous execution flows using $.Deferred() objects and combine parallel AJAX requests via $.when().',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Manage complex asynchronous execution flows using $.Deferred() objects and combine parallel AJAX requests via $.when().</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">$.when is like waiting for three different friends to arrive at a restaurant before you agree to be seated.</p>
                    </div>
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`graph TD; A[$.when] --> B[AJAX Request 1]; A --> C[AJAX Request 2]; B --> D{Resolved?}; C --> E{Resolved?}; D -- Yes --> F; E -- Yes --> F[Trigger .done()];`} />
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-600" />
                            Sample Code
                        </h3>
                        <CodeBlock code={`const req1 = $.get("/api/user");\nconst req2 = $.get("/api/posts");\n\n$.when(req1, req2).done(function(userRes, postsRes) {\n    console.log("Both requests finished successfully!");\n});`} lang="javascript" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Aggregating data from multiple API endpoints to build a unified dashboard view.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-6 shadow-sm">
                        <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                            <Check className="w-5 h-5 mr-2 text-emerald-400" />
                            Advantages
                        </h3>
                        <ul className="space-y-2">
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-1 text-emerald-400 flex-shrink-0" /><span>Coordinates multiple asynchronous tasks cleanly</span></li>
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-1 text-emerald-400 flex-shrink-0" /><span>Prevents deeply nested callback hell</span></li>
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-1 text-emerald-400 flex-shrink-0" /><span>Can create custom deferred workflows beyond just AJAX</span></li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-6 shadow-sm">
                        <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                            <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                            Disadvantages / Limitations
                        </h3>
                        <ul className="space-y-2">
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-1 text-red-400 flex-shrink-0" /><span>jQuery&apos;s Deferred implementation deviates slightly from the ES6 Promise spec</span></li>
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-1 text-red-400 flex-shrink-0" /><span>Native Promise.all() is the modern standard</span></li>
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-1 text-red-400 flex-shrink-0" /><span>Harder to debug than modern async/await</span></li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'jquery-custom-plugins',
            title: '11. [Advanced] Custom jQuery Plugins ($.fn.pluginName)',
            definition: 'Extend the jQuery prototype namespace by attaching custom methods to `$.fn`, creating reusable UI plugins that return `this` for chaining.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Extend the jQuery prototype namespace by attaching custom methods to `$.fn`, creating reusable UI plugins that return `this` for chaining.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Creating a plugin is like teaching your smart home assistant a new custom routine that you can trigger with a single command.</p>
                    </div>
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`graph LR; A[Define Function] --> B[Attach to $.fn]; B --> C[Return 'this']; C --> D[Iterate with .each()]; D --> E[Usable as $(el).myPlugin()];`} />
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-600" />
                            Sample Code
                        </h3>
                        <CodeBlock code={`(function($) {\n    $.fn.highlight = function(color) {\n        return this.css("background-color", color || "yellow");\n    };\n})(jQuery);\n\n$("p").highlight("cyan");`} lang="javascript" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Packaging a custom datepicker or interactive chart into a reusable module for an entire enterprise organization.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-6 shadow-sm">
                        <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                            <Check className="w-5 h-5 mr-2 text-emerald-400" />
                            Advantages
                        </h3>
                        <ul className="space-y-2">
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-1 text-emerald-400 flex-shrink-0" /><span>Encapsulates complex logic into simple method calls</span></li>
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-1 text-emerald-400 flex-shrink-0" /><span>Maintains standard jQuery chaining syntax</span></li>
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-1 text-emerald-400 flex-shrink-0" /><span>Massive community ecosystem of existing plugins</span></li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-6 shadow-sm">
                        <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                            <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                            Disadvantages / Limitations
                        </h3>
                        <ul className="space-y-2">
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-1 text-red-400 flex-shrink-0" /><span>Plugins often mutate the DOM unpredictably</span></li>
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-1 text-red-400 flex-shrink-0" /><span>Global namespace pollution on $.fn</span></li>
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-1 text-red-400 flex-shrink-0" /><span>Hard to integrate with declarative frameworks like React</span></li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'jquery-event-delegation',
            title: '12. [Advanced] Event Delegation ($(document).on)',
            definition: 'Event Delegation attaches a single listener to a static parent container, managing events for elements dynamically created in the future.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Event Delegation attaches a single listener to a static parent container, managing events for elements dynamically created in the future.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Instead of giving a pager to every single employee (direct events), you give one pager to the manager (delegation) who handles requests for everyone in the department.</p>
                    </div>
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`graph TD; A[Static Parent ul] --> B[Event Listener Attached Here]; B --> C[Dynamic Child li 1]; B --> D[Dynamic Child li 2]; C -. click bubbles .-> B; D -. click bubbles .-> B;`} />
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-600" />
                            Sample Code
                        </h3>
                        <CodeBlock code={`$("#todo-list").on("click", ".delete-btn", function() {\n    $(this).closest("li").remove();\n});\n// Works even for newly appended items!`} lang="javascript" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Handling clicks on dynamically loaded content, like items added to a shopping cart via AJAX.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-6 shadow-sm">
                        <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                            <Check className="w-5 h-5 mr-2 text-emerald-400" />
                            Advantages
                        </h3>
                        <ul className="space-y-2">
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-1 text-emerald-400 flex-shrink-0" /><span>Massively reduces memory usage by using fewer event listeners</span></li>
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-1 text-emerald-400 flex-shrink-0" /><span>Automatically handles elements injected into the DOM after load</span></li>
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-1 text-emerald-400 flex-shrink-0" /><span>Leverages standard DOM event bubbling</span></li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-6 shadow-sm">
                        <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                            <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                            Disadvantages / Limitations
                        </h3>
                        <ul className="space-y-2">
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-1 text-red-400 flex-shrink-0" /><span>Can cause performance hits if attached too high up (e.g., to document)</span></li>
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-1 text-red-400 flex-shrink-0" /><span>Events like &apos;focus&apos; don&apos;t bubble and require special handling</span></li>
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-1 text-red-400 flex-shrink-0" /><span>Selector matching on every bubble can be slightly slow</span></li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'jquery-performance-optimization',
            title: '13. [Professional] Performance Optimization & Selector Caching',
            definition: 'Optimize jQuery performance by caching selector queries in variables ($elem), chaining methods, using ID selectors, and batching DOM insertions.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Optimize jQuery performance by caching selector queries in variables ($elem), chaining methods, using ID selectors, and batching DOM insertions.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Selector caching is like keeping your keys in your pocket instead of walking to the car to get them every time you need to unlock a door.</p>
                    </div>
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`graph TD; A[Slow] --> B[$('.item').css('color', 'red')]; B --> C[$('.item').text('Hi')]; D[Fast] --> E[const $item = $('.item')]; E --> F[$item.css('color', 'red').text('Hi')];`} />
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-600" />
                            Sample Code
                        </h3>
                        <CodeBlock code={`// Bad\n$("#box").hide();\n$("#box").text("Hello");\n\n// Good (Cached & Chained)\nconst $box = $("#box");\n$box.hide().text("Hello");`} lang="javascript" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Tuning heavy legacy applications to run smoothly on low-power mobile devices by reducing layout thrashing.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-6 shadow-sm">
                        <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                            <Check className="w-5 h-5 mr-2 text-emerald-400" />
                            Advantages
                        </h3>
                        <ul className="space-y-2">
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-1 text-emerald-400 flex-shrink-0" /><span>Drastically reduces unnecessary DOM traversals</span></li>
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-1 text-emerald-400 flex-shrink-0" /><span>Chaining improves minification and payload size</span></li>
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-1 text-emerald-400 flex-shrink-0" /><span>Document fragments batch insertions efficiently</span></li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-6 shadow-sm">
                        <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                            <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                            Disadvantages / Limitations
                        </h3>
                        <ul className="space-y-2">
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-1 text-red-400 flex-shrink-0" /><span>Requires rigorous developer discipline</span></li>
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-1 text-red-400 flex-shrink-0" /><span>Variables holding cached elements can cause memory leaks if the elements are removed</span></li>
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-1 text-red-400 flex-shrink-0" /><span>Over-optimization can reduce readability</span></li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'jquery-migrating-vanilla-js',
            title: '14. [Professional] Migrating from jQuery to Modern Vanilla JS',
            definition: 'Modern ES6+ browsers natively support clean DOM APIs, allowing developers to replace jQuery with native fetch(), querySelectorAll(), and CSS transitions.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Modern ES6+ browsers natively support clean DOM APIs, allowing developers to replace jQuery with native fetch(), querySelectorAll(), and CSS transitions.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Migrating to Vanilla JS is like taking off training wheels because modern bicycles (browsers) are now perfectly stable on their own.</p>
                    </div>
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`graph LR; A[jQuery: $('.box')] --> B[Vanilla: document.querySelectorAll('.box')]; C[jQuery: $.ajax] --> D[Vanilla: fetch()]; E[jQuery: .addClass()] --> F[Vanilla: .classList.add()];`} />
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-600" />
                            Sample Code
                        </h3>
                        <CodeBlock code={`// jQuery\n// $(".btn").addClass("active");\n\n// Vanilla JS\ndocument.querySelectorAll(".btn").forEach(el => \n    el.classList.add("active")\n);`} lang="javascript" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Modernizing legacy platforms to improve Lighthouse performance scores by removing the 30KB jQuery dependency.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-6 shadow-sm">
                        <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                            <Check className="w-5 h-5 mr-2 text-emerald-400" />
                            Advantages
                        </h3>
                        <ul className="space-y-2">
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-1 text-emerald-400 flex-shrink-0" /><span>Zero external dependencies</span></li>
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-1 text-emerald-400 flex-shrink-0" /><span>Smaller bundle sizes and faster load times</span></li>
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-1 text-emerald-400 flex-shrink-0" /><span>Native APIs execute significantly faster</span></li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-6 shadow-sm">
                        <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                            <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                            Disadvantages / Limitations
                        </h3>
                        <ul className="space-y-2">
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-1 text-red-400 flex-shrink-0" /><span>Native APIs often require more verbose code</span></li>
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-1 text-red-400 flex-shrink-0" /><span>Handling cross-browser polyfills for older browsers can be painful</span></li>
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-1 text-red-400 flex-shrink-0" /><span>Migrating massive codebases is time-consuming and risky</span></li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'jquery-ui-plugins-ecosystem',
            title: '15. [Professional] jQuery UI & Plugins Ecosystem',
            definition: 'jQuery UI extends jQuery with interactive widgets (Datepicker, Autocomplete, Dialog popups, Accordion) and mouse interactions (Sortable, Draggable, Droppable).',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">jQuery UI extends jQuery with interactive widgets (Datepicker, Autocomplete, Dialog popups, Accordion) and mouse interactions (Sortable, Draggable, Droppable).</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">jQuery UI is like buying pre-assembled smart furniture instead of building everything from raw wood and screws yourself.</p>
                    </div>
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`graph TD; A[jQuery Core] --> B[jQuery UI]; B --> C[Widgets]; B --> D[Interactions]; C --> E[Datepicker / Dialog]; D --> F[Draggable / Sortable];`} />
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-600" />
                            Sample Code
                        </h3>
                        <CodeBlock code={`$("#datepicker").datepicker({ \n    dateFormat: "yy-mm-dd" \n});\n$("#sortable-list").sortable();`} lang="javascript" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Rapidly prototyping administrative dashboards with complex drag-and-drop sortable data tables.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-6 shadow-sm">
                        <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                            <Check className="w-5 h-5 mr-2 text-emerald-400" />
                            Advantages
                        </h3>
                        <ul className="space-y-2">
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-1 text-emerald-400 flex-shrink-0" /><span>Battle-tested, highly accessible UI components out of the box</span></li>
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-1 text-emerald-400 flex-shrink-0" /><span>Standardized theming via ThemeRoller</span></li>
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-1 text-emerald-400 flex-shrink-0" /><span>Huge reduction in development time for complex widgets</span></li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-6 shadow-sm">
                        <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                            <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                            Disadvantages / Limitations
                        </h3>
                        <ul className="space-y-2">
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-1 text-red-400 flex-shrink-0" /><span>Heavy bundle size if importing the whole library</span></li>
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-1 text-red-400 flex-shrink-0" /><span>Styles can feel dated out of the box</span></li>
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-1 text-red-400 flex-shrink-0" /><span>Conflicts tightly with modern state-driven frameworks</span></li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'jquery-legacy-maintenance-security',
            title: '16. [Professional] Maintenance of Legacy jQuery & XSS Patching',
            definition: 'Maintain legacy jQuery codebases by refactoring spaghetti callbacks, upgrading legacy versions (jQuery 1.x/2.x to 3.x), and patching XSS vulnerabilities.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Maintain legacy jQuery codebases by refactoring spaghetti callbacks, upgrading legacy versions (jQuery 1.x/2.x to 3.x), and patching XSS vulnerabilities.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Maintaining legacy jQuery is like restoring a classic car: you have to clean up rust (spaghetti code) and update the safety features (XSS patches).</p>
                    </div>
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`graph TD; A[Legacy App] --> B{Action}; B --> C[Audit with jQuery Migrate]; B --> D[Replace .html() with .text()]; B --> E[Refactor callback hell]; C --> F[Safe Upgrade to 3.x];`} />
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-600" />
                            Sample Code
                        </h3>
                        <CodeBlock code={`// Vulnerable (XSS)\n// $("#output").html(userInput); \n\n// Secure\n$("#output").text(userInput);`} lang="javascript" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Auditing and securing decade-old e-commerce platforms to prevent attackers from injecting malicious scripts via user comments.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-6 shadow-sm">
                        <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                            <Check className="w-5 h-5 mr-2 text-emerald-400" />
                            Advantages
                        </h3>
                        <ul className="space-y-2">
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-1 text-emerald-400 flex-shrink-0" /><span>Keeps existing profitable systems running securely</span></li>
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-1 text-emerald-400 flex-shrink-0" /><span>Upgrading via jquery-migrate is a smooth process</span></li>
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-1 text-emerald-400 flex-shrink-0" /><span>Provides a stepping stone before a full React rewrite</span></li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-6 shadow-sm">
                        <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                            <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                            Disadvantages / Limitations
                        </h3>
                        <ul className="space-y-2">
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-1 text-red-400 flex-shrink-0" /><span>Working with spaghetti code is highly frustrating</span></li>
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-1 text-red-400 flex-shrink-0" /><span>Finding documentation for deprecated plugins is difficult</span></li>
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-1 text-red-400 flex-shrink-0" /><span>Security patching requires deep DOM understanding</span></li>
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
            title="jQuery Masterclass Course"
            description="Master jQuery from Selectors, DOM Traversal, and Events to Animations, $.ajax, Deferred Promises, Custom Plugins, and Vanilla JS Migration."
            topics={topics}
            icon={Hash}
            colorClass="blue"
            activeTopicIndex={activeTopicIndex}
            onTopicClick={setActiveTopicIndex}
        >
            <div className="space-y-6">
                {activeTopic.content}
            </div>
        </CoursePageLayout>
    );
};

export default JQueryCoursePage;
