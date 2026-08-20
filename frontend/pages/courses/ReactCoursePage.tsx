import React, { useState } from 'react';
import CoursePageLayout from '../../components/CoursePageLayout';
import { Atom, Code, BookOpen, Lightbulb, Cpu, Layers, Check, AlertTriangle } from 'lucide-react';
import CodeBlock from '../../components/CodeBlock';
import MermaidDiagram from '../../components/MermaidDiagram';

interface ReactTopic {
    id: string;
    title: string;
    definition: string;
    example?: string;
    syntax?: string;
    realLifeScenario?: string;
    codeSnippet?: string | null;
    content: React.ReactNode;
}

const ReactCoursePage = () => {
    const [activeTopicIndex, setActiveTopicIndex] = useState(0);

    const courseData: ReactTopic[] = [
        {
            id: 'react-jsx-components',
            title: '1. [Beginner] JSX & Functional Components',
            definition: 'JSX (JavaScript XML) is a syntax extension for JS allowing developers to write HTML-like structures inside React components. React transpires JSX into React.createElement() calls.',
            content: (
                <div className="space-y-6">
                    {/* 1. Definition */}
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-200 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            JSX (JavaScript XML) is a syntax extension for JS allowing developers to write HTML-like structures inside React components. React transpires JSX into <code className="text-cyan-600 font-mono">React.createElement()</code> calls.
                        </p>
                    </div>

                    {/* 2. Real-Life Analogy */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-200 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Think of JSX like a blueprint for a house. The blueprint (JSX) looks like the final structure, but it must be translated by contractors (Babel) into actual bricks and mortar (DOM nodes).
                        </p>
                    </div>

                    {/* 3. Visual Explanation */}
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" /> Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`graph LR
    A[JSX Code] -->|Babel Transpilation| B[React.createElement]
    B --> C[Virtual DOM]
    C -->|Reconciliation| D[Real DOM]`} />
                    </div>

                    {/* 4. Sample Code */}
                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-cyan-600" /> Sample Code
                        </h3>
                        <CodeBlock code={`import React from 'react';\n\nexport const Header = () => {\n    const appTitle = "React Platform";\n    return (\n        <header className="p-4 bg-slate-900 text-white rounded-xl">\n            <h1 className="text-xl">{appTitle}</h1>\n        </header>\n    );\n};`} lang="tsx" colorClass="cyan" filename="Header.tsx" />
                    </div>

                    {/* 5. Real-World Application */}
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-200 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Social media platforms compose nested functional component trees to render dynamic UI feeds modularly.
                        </p>
                    </div>

                    {/* 6. Advantages & 7. Disadvantages */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="text-lg font-bold mb-2 flex items-center text-emerald-400">
                                <Check className="w-5 h-5 mr-2" /> Advantages
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Visual readability similar to HTML</li>
                                <li>Allows full power of JavaScript inside UI markup</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="text-lg font-bold mb-2 flex items-center text-red-400">
                                <AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages / Limitations
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Steep learning curve for beginners</li>
                                <li>Requires build tools (Babel/Vite) to transpile</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'react-props-state-usestate',
            title: '2. [Beginner] Props, State & useState Hook',
            definition: 'Props pass read-only data down component hierarchies. State (useState) encapsulates internal reactive component state. Always treat state immutably.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-200 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Props pass read-only data down component hierarchies. State (<code className="text-cyan-600 font-mono">useState</code>) encapsulates internal reactive component state. Always treat state immutably.
                        </p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-200 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Props are like the DNA passed from parent to child (read-only), while State is like the child&apos;s mood (can change over time and belongs only to the child).
                        </p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" /> Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`graph TD\n    A[Parent Component] -->|Props: name='Vinay'| B(Child Component)\n    B -->|useState| C{Internal State: count}\n    C -->|setCount()| D[Re-render Child UI]`} />
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-cyan-600" /> Sample Code
                        </h3>
                        <CodeBlock code={`import React, { useState } from 'react';\n\nexport const Counter = ({ step = 1 }: { step?: number }) => {\n    const [count, setCount] = useState(0);\n\n    return (\n        <div>\n            <h3>Count: {count}</h3>\n            <button onClick={() => setCount(c => c + step)}>\n                Increment by {step}\n            </button>\n        </div>\n    );\n};`} lang="tsx" colorClass="cyan" filename="Counter.tsx" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-200 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Shopping cart components maintain cart item quantities via useState, re-rendering price totals instantly.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="text-lg font-bold mb-2 flex items-center text-emerald-400">
                                <Check className="w-5 h-5 mr-2" /> Advantages
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Predictable UI updates driven by state</li>
                                <li>Props enforce unidirectional data flow</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="text-lg font-bold mb-2 flex items-center text-red-400">
                                <AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages / Limitations
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>State can become hard to manage if scattered</li>
                                <li>Prop drilling can occur in deep trees</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'react-event-handling',
            title: '3. [Beginner] Event Handling & Conditional Rendering',
            definition: 'React wraps browser native events inside a cross-browser SyntheticEvent abstraction. Conditional rendering uses JS operators like ternary or logical AND.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-200 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            React wraps browser native events inside a cross-browser SyntheticEvent abstraction. Conditional rendering uses JS operators like ternary (<code className="text-cyan-600 font-mono">? :</code>) or logical AND (<code className="text-cyan-600 font-mono">&amp;&amp;</code>).
                        </p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-200 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Event handlers are like physical buttons on a remote control, and conditional rendering is like a smart screen that only shows the DVD menu if a disc is inserted.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" /> Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`graph TD\n    A[User Clicks Button] --> B[React SyntheticEvent]\n    B --> C[Event Handler Function]\n    C --> D{Update State?}\n    D -- Yes --> E[Component Re-renders]\n    D -- No --> F[Do Nothing]`} />
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-cyan-600" /> Sample Code
                        </h3>
                        <CodeBlock code={`import React, { useState } from 'react';\n\nexport const ToggleContent = () => {\n    const [show, setShow] = useState(false);\n\n    return (\n        <div>\n            <button onClick={() => setShow(!show)}>\n                {show ? 'Hide' : 'Show'} Details\n            </button>\n            {show && <p>Here are the secret details!</p>}\n        </div>\n    );\n};`} lang="tsx" colorClass="cyan" filename="ToggleContent.tsx" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-200 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Dropdown menus, modal dialogs, and togglable forms rely heavily on event handling combined with conditional rendering.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="text-lg font-bold mb-2 flex items-center text-emerald-400">
                                <Check className="w-5 h-5 mr-2" /> Advantages
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Cross-browser consistency with SyntheticEvents</li>
                                <li>Declarative UI rendering logic</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="text-lg font-bold mb-2 flex items-center text-red-400">
                                <AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages / Limitations
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Inline arrow functions can sometimes cause performance hits</li>
                                <li>Complex nested conditionals become hard to read</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'react-lists-keys',
            title: '4. [Beginner] Lists & Keys',
            definition: 'React renders arrays via .map() using unique key props to identify which items have changed, been added, or been removed.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-200 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            React renders arrays via <code className="text-cyan-600 font-mono">.map()</code> using unique <code className="text-cyan-600 font-mono">key</code> props to identify which items have changed, been added, or been removed.
                        </p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-200 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Keys are like employee ID badges. Without them, HR (React) gets confused about who is who when the seating arrangement changes.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" /> Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`graph LR\n    A[Data Array] -->|map()| B[Component List]\n    B --> C[Item 1: key='id-1']\n    B --> D[Item 2: key='id-2']\n    B --> E[Item 3: key='id-3']`} />
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-cyan-600" /> Sample Code
                        </h3>
                        <CodeBlock code={`import React from 'react';\n\ninterface User { id: string; name: string; }\n\nexport const UserList = ({ users }: { users: User[] }) => {\n    return (\n        <ul>\n            {users.map(user => (\n                <li key={user.id}>{user.name}</li>\n            ))}\n        </ul>\n    );\n};`} lang="tsx" colorClass="cyan" filename="UserList.tsx" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-200 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Rendering product grids on e-commerce sites or displaying a feed of comments.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="text-lg font-bold mb-2 flex items-center text-emerald-400">
                                <Check className="w-5 h-5 mr-2" /> Advantages
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Efficient DOM updates with keys</li>
                                <li>Clean, functional approach using array mapping</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="text-lg font-bold mb-2 flex items-center text-red-400">
                                <AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages / Limitations
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Using array index as keys causes subtle UI bugs</li>
                                <li>Requires mapping logic inside JSX</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'react-useeffect',
            title: '5. [Intermediate] useEffect Hook & Lifecycles',
            definition: 'The useEffect hook handles side effects like data fetching, subscriptions, and DOM timers. The dependency array controls when it runs.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-200 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            The <code className="text-cyan-600 font-mono">useEffect</code> hook handles side effects like data fetching, subscriptions, and DOM timers. The dependency array controls when it runs.
                        </p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-200 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            useEffect is like a smart thermostat. It turns on (mounts), adjusts itself when the temperature (dependency) changes, and safely turns off (cleanup) when you leave.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" /> Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`graph TD\n    A[Component Render] --> B{Dependencies Changed?}\n    B -- Yes --> C[Run Cleanup Function]\n    C --> D[Run Effect Function]\n    B -- No --> E[Skip Effect]`} />
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-cyan-600" /> Sample Code
                        </h3>
                        <CodeBlock code={`import React, { useState, useEffect } from 'react';\n\nexport const Timer = () => {\n    const [seconds, setSeconds] = useState(0);\n\n    useEffect(() => {\n        const interval = setInterval(() => {\n            setSeconds(s => s + 1);\n        }, 1000);\n\n        return () => clearInterval(interval); // Cleanup\n    }, []);\n\n    return <div>Elapsed: {seconds}s</div>;\n};`} lang="tsx" colorClass="cyan" filename="Timer.tsx" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-200 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Polling live chat messages or fetching initial API data on page load.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="text-lg font-bold mb-2 flex items-center text-emerald-400">
                                <Check className="w-5 h-5 mr-2" /> Advantages
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Consolidates all lifecycle methods into one API</li>
                                <li>Prevents memory leaks via cleanup functions</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="text-lg font-bold mb-2 flex items-center text-red-400">
                                <AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages / Limitations
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Stale closures if dependencies are missed</li>
                                <li>Can cause infinite loops if state updates trigger effects endlessly</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'react-forms',
            title: '6. [Intermediate] Forms & Controlled Components',
            definition: 'Controlled Components bind form input values directly to React component state, ensuring React acts as the single source of truth.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-200 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Controlled Components bind form input values directly to React component state, ensuring React acts as the single source of truth.
                        </p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-200 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            A controlled input is like a puppet. The user tries to move it, but it only moves when the puppeteer (React state) explicitly pulls the strings to update it.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" /> Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`graph LR\n    A[User Types] --> B[onChange Event]\n    B --> C[Update React State]\n    C --> D[Re-render Input with new Value]`} />
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-cyan-600" /> Sample Code
                        </h3>
                        <CodeBlock code={`import React, { useState } from 'react';\n\nexport const SimpleForm = () => {\n    const [name, setName] = useState('');\n\n    const handleSubmit = (e: React.FormEvent) => {\n        e.preventDefault();\n        alert(\`Submitted: \${name}\`);\n    };\n\n    return (\n        <form onSubmit={handleSubmit}>\n            <input \n                value={name}\n                onChange={(e) => setName(e.target.value)}\n                placeholder="Enter name"\n            />\n            <button type="submit">Send</button>\n        </form>\n    );\n};`} lang="tsx" colorClass="cyan" filename="SimpleForm.tsx" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-200 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Complex registration forms validate user input live on keypress before enabling form submit buttons.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="text-lg font-bold mb-2 flex items-center text-emerald-400">
                                <Check className="w-5 h-5 mr-2" /> Advantages
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Instant field validation</li>
                                <li>Easy to enforce formatting (e.g., all caps)</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="text-lg font-bold mb-2 flex items-center text-red-400">
                                <AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages / Limitations
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Boilerplate code for every input field</li>
                                <li>Can cause performance issues on very large forms</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'react-lifting-state',
            title: '7. [Intermediate] Lifting State Up',
            definition: 'Lifting State Up moves shared state to the closest common parent component so multiple sibling components can stay synchronized.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-200 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Lifting State Up moves shared state to the closest common parent component so multiple sibling components can stay synchronized.
                        </p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-200 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            If two siblings are fighting over what channel to watch, the parent takes the remote control (state) and decides for them both.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" /> Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`graph TD\n    A[Parent Component: Holds State] -->|Passes State| B[Child A]\n    A -->|Passes Callback| C[Child B]\n    C -->|Calls Callback| A`} />
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-cyan-600" /> Sample Code
                        </h3>
                        <CodeBlock code={`import React, { useState } from 'react';\n\nconst Input = ({ value, onChange }: { value: string, onChange: (s: string) => void }) => (\n    <input value={value} onChange={e => onChange(e.target.value)} />\n);\nconst Display = ({ text }: { text: string }) => <p>You typed: {text}</p>;\n\nexport const Parent = () => {\n    const [sharedText, setSharedText] = useState('');\n    return (\n        <div>\n            <Input value={sharedText} onChange={setSharedText} />\n            <Display text={sharedText} />\n        </div>\n    );\n};`} lang="tsx" colorClass="cyan" filename="Parent.tsx" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-200 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Filter control widgets lift state up to data tables so both sidebar filters and data lists remain synchronized.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="text-lg font-bold mb-2 flex items-center text-emerald-400">
                                <Check className="w-5 h-5 mr-2" /> Advantages
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Single source of truth for related UI</li>
                                <li>Easier to track data flow</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="text-lg font-bold mb-2 flex items-center text-red-400">
                                <AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages / Limitations
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Leads to prop drilling if the tree is deep</li>
                                <li>Parent re-renders cause all children to re-render</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'react-context-api',
            title: '8. [Intermediate] Context API',
            definition: 'Context API shares global data (Dark Theme, Auth User, Locale) across component trees without passing props manually at every level.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-200 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Context API shares global data (Dark Theme, Auth User, Locale) across component trees without passing props manually at every level.
                        </p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-200 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Context is like a PA system in an office. Instead of walking to every desk to deliver a message (props), you just broadcast it for anyone who cares to listen.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" /> Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`graph TD\n    A[ThemeContext.Provider] --> B[Component Tree]\n    B --> C[Deep Child A: useContext]\n    B --> D[Deep Child B: useContext]`} />
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-cyan-600" /> Sample Code
                        </h3>
                        <CodeBlock code={`import React, { createContext, useContext } from 'react';\n\nconst ThemeContext = createContext('light');\n\nexport const App = () => (\n    <ThemeContext.Provider value="dark">\n        <Toolbar />\n    </ThemeContext.Provider>\n);\n\nconst Toolbar = () => {\n    const theme = useContext(ThemeContext);\n    return <div className={\`bg-\${theme}\`}>Toolbar is {theme}</div>;\n};`} lang="tsx" colorClass="cyan" filename="App.tsx" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-200 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Global Application Theme togglers (Dark Mode / Light Mode) wrap root components with ThemeContext Providers.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="text-lg font-bold mb-2 flex items-center text-emerald-400">
                                <Check className="w-5 h-5 mr-2" /> Advantages
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Eliminates prop drilling completely</li>
                                <li>Built into React (no external libs needed)</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="text-lg font-bold mb-2 flex items-center text-red-400">
                                <AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages / Limitations
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Triggers re-renders for all consumers when context value changes</li>
                                <li>Can make components harder to test in isolation</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'react-custom-hooks',
            title: '9. [Advanced] Custom Hooks',
            definition: 'Custom Hooks are reusable JavaScript functions whose names start with "use" that encapsulate stateful React logic.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-200 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Custom Hooks are reusable JavaScript functions whose names start with <code className="text-cyan-600 font-mono">use</code> that encapsulate stateful React logic.
                        </p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-200 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            A custom hook is like a recipe for a cake. You write it once, and any component can bake its own independent cake using that same logic.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" /> Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`graph LR\n    A[Component A] -->|Calls| B(useFetch Hook)\n    C[Component B] -->|Calls| B\n    B --> D[useState & useEffect]`} />
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-cyan-600" /> Sample Code
                        </h3>
                        <CodeBlock code={`import { useState, useEffect } from 'react';\n\nexport function useOnlineStatus() {\n    const [isOnline, setIsOnline] = useState(true);\n\n    useEffect(() => {\n        window.addEventListener('online', () => setIsOnline(true));\n        window.addEventListener('offline', () => setIsOnline(false));\n    }, []);\n\n    return isOnline;\n}`} lang="tsx" colorClass="cyan" filename="useOnlineStatus.ts" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-200 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Extracting complex API fetching or WebSocket subscription logic into a neat useData() hook.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="text-lg font-bold mb-2 flex items-center text-emerald-400">
                                <Check className="w-5 h-5 mr-2" /> Advantages
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Massive code reuse across components</li>
                                <li>Keeps component bodies clean and focused on UI</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="text-lg font-bold mb-2 flex items-center text-red-400">
                                <AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages / Limitations
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Must follow strict Rules of Hooks</li>
                                <li>Testing custom hooks requires specialized testing libraries</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'react-router',
            title: '10. [Advanced] Routing (React Router)',
            definition: 'React Router manages client-side single-page navigation, allowing users to move between views without full page reloads.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-200 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            React Router manages client-side single-page navigation, allowing users to move between views without full page reloads.
                        </p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-200 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            React Router is like a clever tour guide inside a museum. Instead of making you walk outside and re-enter for every room, they just instantly teleport you to the right exhibit.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" /> Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`graph TD\n    A[URL Changes] --> B[React Router matching]\n    B --> C{Route Match}\n    C -->|/home| D[Render Home Component]\n    C -->|/about| E[Render About Component]`} />
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-cyan-600" /> Sample Code
                        </h3>
                        <CodeBlock code={`import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';\n\nconst Home = () => <h1>Home</h1>;\nconst About = () => <h1>About</h1>;\n\nexport const RouterApp = () => (\n    <BrowserRouter>\n        <nav><Link to="/">Home</Link> | <Link to="/about">About</Link></nav>\n        <Routes>\n            <Route path="/" element={<Home />} />\n            <Route path="/about" element={<About />} />\n        </Routes>\n    </BrowserRouter>\n);`} lang="tsx" colorClass="cyan" filename="RouterApp.tsx" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-200 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Single-page web applications (SPAs) change URL paths instantly to show different dashboards.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="text-lg font-bold mb-2 flex items-center text-emerald-400">
                                <Check className="w-5 h-5 mr-2" /> Advantages
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Fast, seamless user experience</li>
                                <li>Supports dynamic URL parameters and nested routes</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="text-lg font-bold mb-2 flex items-center text-red-400">
                                <AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages / Limitations
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Requires web server configuration for direct URL access (catch-all route)</li>
                                <li>Adds bundle size to the application</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'react-performance',
            title: '11. [Advanced] Performance (useMemo, useCallback)',
            definition: 'Optimize rendering using React.memo (component memoization), useMemo (expensive calculation caching), and useCallback (function reference memoization).',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-200 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Optimize rendering using <code className="text-cyan-600 font-mono">React.memo</code>, <code className="text-cyan-600 font-mono">useMemo</code> (calculation caching), and <code className="text-cyan-600 font-mono">useCallback</code> (function memoization).
                        </p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-200 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            useMemo is like memorizing the answer to a tough math problem. If someone asks you the same problem again, you just give the memorized answer instead of recalculating.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" /> Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`graph TD\n    A[Component Render] --> B{Props or State Changed?}\n    B -- No --> C[Use Cached Result / Component]\n    B -- Yes --> D[Recalculate / Re-render]`} />
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-cyan-600" /> Sample Code
                        </h3>
                        <CodeBlock code={`import React, { useMemo, useCallback, useState } from 'react';\n\nexport const OptimizeDemo = ({ items }: { items: number[] }) => {\n    const [count, setCount] = useState(0);\n\n    const sortedItems = useMemo(() => {\n        return [...items].sort((a, b) => a - b);\n    }, [items]);\n\n    const handleClick = useCallback(() => {\n        console.log("Clicked!");\n    }, []);\n\n    return <button onClick={() => setCount(c => c+1)}>Rerender {count}</button>;\n};`} lang="tsx" colorClass="cyan" filename="OptimizeDemo.tsx" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-200 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Complex data tables wrapping 1,000 rows in React.memo prevent child row re-renders when unrelated parent page state changes.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="text-lg font-bold mb-2 flex items-center text-emerald-400">
                                <Check className="w-5 h-5 mr-2" /> Advantages
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Significantly reduces unnecessary renders</li>
                                <li>Keeps complex UIs feeling snappy</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="text-lg font-bold mb-2 flex items-center text-red-400">
                                <AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages / Limitations
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Overuse can actually degrade performance (memory overhead)</li>
                                <li>Code becomes harder to read</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'react-state-management',
            title: '12. [Advanced] State Management (Redux/Zustand)',
            definition: 'Large applications utilize external state management stores for predictable global state mutation outside the React component tree.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-200 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Large applications utilize external state management stores for predictable global state mutation outside the React component tree.
                        </p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-200 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            A global store is like a bank vault. Instead of keeping your money under the mattress (local state), you securely manage transactions in a central, trackable location.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" /> Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`graph LR\n    A[Component] -->|Dispatches Action| B[Store/Reducer]\n    B -->|Updates State| C[Global State Tree]\n    C -->|Triggers Render| A`} />
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-cyan-600" /> Sample Code
                        </h3>
                        <CodeBlock code={`import { create } from 'zustand';\n\ninterface BearState {\n    bears: number;\n    increase: () => void;\n}\n\nconst useBearStore = create<BearState>((set) => ({\n    bears: 0,\n    increase: () => set((state) => ({ bears: state.bears + 1 })),\n}));\n\nexport const BearCounter = () => {\n    const bears = useBearStore((state) => state.bears);\n    const increase = useBearStore((state) => state.increase);\n    return <button onClick={increase}>{bears} Bears</button>;\n};`} lang="tsx" colorClass="cyan" filename="BearCounter.tsx" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-200 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            E-commerce web apps manage global user authentication tokens and cart state across 50+ components.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="text-lg font-bold mb-2 flex items-center text-emerald-400">
                                <Check className="w-5 h-5 mr-2" /> Advantages
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Predictable state changes</li>
                                <li>Excellent devtools for time-travel debugging</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="text-lg font-bold mb-2 flex items-center text-red-400">
                                <AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages / Limitations
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>High boilerplate (especially Redux)</li>
                                <li>Overkill for small applications</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'react-error-boundaries',
            title: '13. [Advanced] Error Boundaries',
            definition: 'Error Boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-200 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Error Boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI.
                        </p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-200 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            An Error Boundary is like a circuit breaker. If one appliance short-circuits, it trips the breaker instead of burning down the whole house.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" /> Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`graph TD\n    A[App Component] --> B[Error Boundary]\n    B --> C[Child Component]\n    C -->|Throws Error| B\n    B --> D[Render Fallback UI]`} />
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-cyan-600" /> Sample Code
                        </h3>
                        <CodeBlock code={`import React from 'react';\n\ninterface Props { children: React.ReactNode; }\ninterface State { hasError: boolean; }\n\nexport class ErrorBoundary extends React.Component<Props, State> {\n    state = { hasError: false };\n    static getDerivedStateFromError(_error: Error) { return { hasError: true }; }\n    render() {\n        if (this.state.hasError) return <h1>Something went wrong.</h1>;\n        return this.props.children;\n    }\n}`} lang="tsx" colorClass="cyan" filename="ErrorBoundary.tsx" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-200 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Wrapping isolated widgets (e.g. Chat Widget) in Error Boundaries prevents a widget crash from bringing down the whole app.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="text-lg font-bold mb-2 flex items-center text-emerald-400">
                                <Check className="w-5 h-5 mr-2" /> Advantages
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Prevents white screen of death</li>
                                <li>Allows graceful degradation of UI features</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="text-lg font-bold mb-2 flex items-center text-red-400">
                                <AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages / Limitations
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Must be a class component</li>
                                <li>Does not catch async errors or event handler errors</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'react-testing',
            title: '14. [Advanced] Testing (React Testing Library)',
            definition: 'React Testing Library (RTL) tests component user behavior rather than internal implementation details, using Jest or Vitest.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-200 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            React Testing Library (RTL) tests component user behavior rather than internal implementation details, using Jest or Vitest.
                        </p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-200 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            RTL is like a health inspector acting as a customer. They check if the food tastes good (user experience) rather than inspecting exactly how the chef chopped the onions (implementation details).
                        </p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" /> Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`graph LR\n    A[Test Runner] -->|Renders| B[React Component]\n    B -->|Queries DOM| C[Simulate User Event]\n    C -->|Expects Result| D[Pass / Fail]`} />
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-cyan-600" /> Sample Code
                        </h3>
                        <CodeBlock code={`import { render, screen, fireEvent } from '@testing-library/react';\nimport { Counter } from './Counter';\n\ntest('increments counter on click', () => {\n    render(<Counter />);\n    const button = screen.getByRole('button', { name: /increment/i });\n    fireEvent.click(button);\n    expect(screen.getByText(/Count: 1/i)).toBeInTheDocument();\n});`} lang="tsx" colorClass="cyan" filename="Counter.test.tsx" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-200 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            CI/CD deployment pipelines run RTL test suites to verify key button interactions before deploying frontend releases.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="text-lg font-bold mb-2 flex items-center text-emerald-400">
                                <Check className="w-5 h-5 mr-2" /> Advantages
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Encourages accessible DOM structures</li>
                                <li>Tests are resilient to refactoring</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="text-lg font-bold mb-2 flex items-center text-red-400">
                                <AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages / Limitations
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Requires mocking for network requests and complex contexts</li>
                                <li>Can be slow to execute on large apps</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'react-ssr-nextjs',
            title: '15. [Professional] SSR/SSG (Next.js)',
            definition: 'Server-Side Rendering (SSR) renders HTML on web servers per request, accelerating initial Page Load speeds and SEO indexing.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-200 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Server-Side Rendering (SSR) renders HTML on web servers per request, accelerating initial Page Load speeds and SEO indexing.
                        </p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-200 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            SSR is like ordering a fully assembled pizza (HTML). Client-side rendering is like ordering the ingredients and assembling the pizza yourself at home.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" /> Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`graph TD\n    A[Browser Request] --> B[Next.js Server]\n    B -->|Fetches Data & Renders HTML| C[Fully Rendered Page]\n    C --> D[Browser Displays Instantly]\n    D --> E[React Hydrates Interactivity]`} />
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-cyan-600" /> Sample Code
                        </h3>
                        <CodeBlock code={`// app/page.tsx (Next.js Server Component)\nexport default async function Page() {\n    const res = await fetch('https://api.example.com/data');\n    const data = await res.json();\n\n    return (\n        <main>\n            <h1>Server Rendered Content</h1>\n            <p>{data.title}</p>\n        </main>\n    );\n}`} lang="tsx" colorClass="cyan" filename="page.tsx" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-200 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            E-commerce sites and blog portals use Next.js SSR to ensure search engine crawlers index fully rendered page content.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="text-lg font-bold mb-2 flex items-center text-emerald-400">
                                <Check className="w-5 h-5 mr-2" /> Advantages
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Superior SEO performance</li>
                                <li>Faster time-to-first-byte (TTFB)</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="text-lg font-bold mb-2 flex items-center text-red-400">
                                <AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages / Limitations
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Requires a Node.js server to run</li>
                                <li>Higher server hosting costs compared to static SPAs</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'react-advanced-patterns',
            title: '16. [Professional] Advanced Patterns (Compound Components)',
            definition: 'Advanced patterns like Compound Components and Render Props provide highly flexible APIs for building reusable component libraries.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-200 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Advanced patterns like Compound Components and Render Props provide highly flexible APIs for building reusable component libraries.
                        </p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-200 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Compound components are like LEGO sets. You get a set of specialized pieces (Tabs, TabPanel, TabList) that only make sense when snapped together.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" /> Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`graph TD\n    A[Tabs Parent Component] -->|Implicit State Sharing| B[TabList]\n    A -->|Implicit State Sharing| C[TabPanels]\n    B --> D[Tab 1]\n    C --> E[Panel 1]`} />
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-cyan-600" /> Sample Code
                        </h3>
                        <CodeBlock code={`import React, { useState, createContext, useContext } from 'react';\n\nconst ToggleContext = createContext({ on: false, setOn: (b: boolean) => {} });\n\nexport const Toggle = ({ children }: { children: React.ReactNode }) => {\n    const [on, setOn] = useState(false);\n    return <ToggleContext.Provider value={{on, setOn}}>{children}</ToggleContext.Provider>;\n};\n\nexport const ToggleButton = () => {\n    const { on, setOn } = useContext(ToggleContext);\n    return <button onClick={() => setOn(!on)}>Toggle</button>;\n};\n\nexport const ToggleMessage = ({ children }: { children: React.ReactNode }) => {\n    const { on } = useContext(ToggleContext);\n    return on ? <div>{children}</div> : null;\n};`} lang="tsx" colorClass="cyan" filename="Toggle.tsx" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-200 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Building enterprise design systems (like Radix UI or MUI) relies heavily on compound components for extreme flexibility.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="text-lg font-bold mb-2 flex items-center text-emerald-400">
                                <Check className="w-5 h-5 mr-2" /> Advantages
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Incredible flexibility for consumers</li>
                                <li>Avoids massive "prop explosion" on single components</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="text-lg font-bold mb-2 flex items-center text-red-400">
                                <AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages / Limitations
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>High cognitive load to create</li>
                                <li>Over-engineering for simple use cases</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        }
    ];

    const topics = courseData.map(topic => topic.title);
    const activeTopic = courseData[activeTopicIndex];

    return (
        <CoursePageLayout
            title="React Masterclass Course"
            description="Master React from JSX, Props, and useState to useEffect, Custom Hooks, Context API, Next.js SSR, Concurrent Suspense, and Vitest RTL."
            topics={topics}
            icon={Atom}
            colorClass="cyan"
            activeTopicIndex={activeTopicIndex}
            onTopicClick={setActiveTopicIndex}
        >
            <div className="space-y-8 animate-fadeIn">
                {activeTopic.content}
            </div>
        </CoursePageLayout>
    );
};

export default ReactCoursePage;
