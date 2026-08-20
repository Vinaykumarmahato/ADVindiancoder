import React, { useState } from 'react';
import CoursePageLayout from '../../components/CoursePageLayout';
import { Server, Code, BookOpen, Lightbulb, FileText, Cpu, Layers, ShieldAlert, Zap, Workflow, Database, Check, AlertTriangle } from 'lucide-react';
import CodeBlock from '../../components/CodeBlock';
import MermaidDiagram from '../../components/MermaidDiagram';

interface NodeTopic {
    id: string;
    title: string;
    definition: string;
    example?: string;
    syntax?: string;
    realLifeScenario?: string;
    codeSnippet?: string | null;
    content: React.ReactNode;
}

const NodeJsCoursePage = () => {
    const [activeTopicIndex, setActiveTopicIndex] = useState(0);

    const courseData: NodeTopic[] = [
        // ==================== BEGINNER TIER ====================
        {
            id: 'node-runtime-architecture',
            title: '1. [Beginner] Runtime Architecture (V8 Engine, Libuv, Non-Blocking I/O)',
            definition: 'Node.js is an open-source JavaScript runtime environment built on Chrome\'s V8 engine. It uses an event-driven, non-blocking I/O model powered by the Libuv C++ library.',
            syntax: `/* Node.js Architecture Execution Pipeline: */\nJS Code ──> V8 Engine JIT ──> Libuv Event Loop & Thread Pool ──> OS Non-Blocking Kernel I/O`,
            codeSnippet: `const os = require('os');\nconst fs = require('fs');\n\nconsole.log("--- Node.js Runtime System Info ---");\nconsole.log("Node Version:", process.version);\nconsole.log("CPU Architecture:", os.arch(), "(Cores:", os.cpus().length, ")");\nconsole.log("System Uptime:", (os.uptime() / 3600).toFixed(2), "hours");\n\n// Non-blocking asynchronous file read\nfs.readFile(__filename, 'utf-8', (err, data) => {\n    if (err) return console.error(err);\n    console.log("Asynchronously read self file length:", data.length, "bytes");\n});`,
            realLifeScenario: 'Companies like Netflix and LinkedIn switched their API backend gateways to Node.js, cutting server response latencies by 50% through non-blocking asynchronous I/O.',
            content: (
                <div className="space-y-6">
                    {/* 1. Definition */}
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Node.js provides a runtime environment that allows executing JavaScript on the server side. It relies on the V8 engine to compile JavaScript directly into native machine code. Through the libuv library, it implements an event loop and a worker pool to handle asynchronous operations efficiently without blocking the main thread.
                        </p>
                    </div>

                    {/* 2. Real-Life Analogy */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Think of Node.js as a highly efficient waiter at a restaurant. Instead of waiting at a table while the chef cooks a meal (blocking), the waiter takes the order, passes it to the kitchen (libuv thread pool), and immediately goes to serve the next table. When the food is ready, the kitchen rings a bell (callback), and the waiter brings the meal to the customer.
                        </p>
                    </div>

                    {/* 3. Visual Explanation */}
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph TD
    A[Incoming Request] --> B[Event Queue]
    B --> C[Event Loop Single Thread]
    C -->|Non-blocking| D[Return Response]
    C -->|Blocking I/O| E[Worker Threads Libuv]
    E --> F[Database/File System]
    F -->|Callback| B`} />
                    </div>

                    {/* 4. Sample Code */}
                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-500" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`// Simulating non-blocking architecture\nsetTimeout(() => {\n  console.log('Task 1: Background I/O finished');\n}, 1000);\n\nconsole.log('Task 2: Executed immediately');`} lang="javascript" colorClass="cyan" />
                    </div>

                    {/* 5. Real-World Application */}
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            High-concurrency servers serving thousands of parallel API requests efficiently without exhausting memory on creating new threads for each request.
                        </p>
                    </div>

                    {/* 6. Advantages */}
                    <div className="bg-slate-900 text-slate-100 p-5 rounded-xl">
                        <h4 className="text-lg font-bold text-emerald-400 mb-3 flex items-center">
                            <Check className="w-5 h-5 mr-2" />
                            Advantages
                        </h4>
                        <ul className="list-none space-y-2">
                            <li className="flex items-start">
                                <Check className="w-4 h-4 mr-2 mt-1 text-emerald-500 flex-shrink-0" />
                                <span><code className="text-cyan-400">High Performance:</code> Excellent for I/O bound applications.</span>
                            </li>
                            <li className="flex items-start">
                                <Check className="w-4 h-4 mr-2 mt-1 text-emerald-500 flex-shrink-0" />
                                <span><code className="text-cyan-400">Single Language:</code> Full-stack JavaScript development.</span>
                            </li>
                        </ul>
                    </div>

                    {/* 7. Disadvantages / Limitations */}
                    <div className="bg-slate-900 text-slate-100 p-5 rounded-xl mt-4">
                        <h4 className="text-lg font-bold text-red-400 mb-3 flex items-center">
                            <AlertTriangle className="w-5 h-5 mr-2" />
                            Disadvantages &amp; Limitations
                        </h4>
                        <ul className="list-none space-y-2">
                            <li className="flex items-start">
                                <AlertTriangle className="w-4 h-4 mr-2 mt-1 text-red-500 flex-shrink-0" />
                                <span><code className="text-cyan-400">CPU Bound Tasks:</code> Poor performance on heavy CPU calculations due to single-threaded nature.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'node-module-system',
            title: '2. [Beginner] Modules System (CommonJS vs ES Modules)',
            definition: 'Node.js supports two module systems: CommonJS (require/module.exports) and native ES Modules (import/export). Core modules include fs, path, os, http, and events.',
            syntax: `// CommonJS Syntax:\nconst path = require('path');\nmodule.exports = { myFunction };\n\n// ES Module Syntax:\nimport path from 'path';\nexport default myFunction;`,
            codeSnippet: `// Core Modules Utility Usage\nconst path = require('path');\nconst os = require('os');\n\n// Path Join & Normalization\nconst uploadDirectory = path.join(__dirname, 'uploads', 'user_avatars');\nconst fileExtension = path.extname('profile_picture.png');\n\nconsole.log("Target Upload Path:", uploadDirectory);\nconsole.log("File Extension:", fileExtension);\nconsole.log("Home Directory:", os.homedir());`,
            realLifeScenario: 'Node.js path utilities sanitize user-uploaded file paths, preventing Directory Traversal attack exploits.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Modules allow breaking down large codebases into manageable, reusable files. Node.js traditionally uses CommonJS (<code className="text-cyan-600 font-mono">require</code>) but modern projects use ES Modules (<code className="text-cyan-600 font-mono">import</code>) introduced in ES6.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Think of modules like Lego blocks. Each module has a specific functionality (like wheels, windows, doors). You can piece them together using <code className="text-cyan-600 font-mono">require</code> or <code className="text-cyan-600 font-mono">import</code> to build a complete application.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph LR
    A[main.js] -->|require/import| B[mathUtils.js]
    A -->|require/import| C[userModel.js]
    B --> D[export sum]
    C --> E[export User]`} />
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-500" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`// package.json -> "type": "module"\nimport fs from 'fs';\nexport const readConfig = () => fs.readFileSync('config.json');`} lang="javascript" colorClass="cyan" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Structuring enterprise APIs into separate folders like controllers, models, and routes, and importing them into a central <code className="text-cyan-600 font-mono">server.js</code> file.
                        </p>
                    </div>

                    <div className="bg-slate-900 text-slate-100 p-5 rounded-xl">
                        <h4 className="text-lg font-bold text-emerald-400 mb-3 flex items-center">
                            <Check className="w-5 h-5 mr-2" />
                            Advantages
                        </h4>
                        <ul className="list-none space-y-2">
                            <li className="flex items-start">
                                <Check className="w-4 h-4 mr-2 mt-1 text-emerald-500 flex-shrink-0" />
                                <span><code className="text-cyan-400">Encapsulation:</code> Keeps scope private to the file unless explicitly exported.</span>
                            </li>
                            <li className="flex items-start">
                                <Check className="w-4 h-4 mr-2 mt-1 text-emerald-500 flex-shrink-0" />
                                <span><code className="text-cyan-400">Code Reusability:</code> Easily share logic across multiple files.</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-slate-900 text-slate-100 p-5 rounded-xl mt-4">
                        <h4 className="text-lg font-bold text-red-400 mb-3 flex items-center">
                            <AlertTriangle className="w-5 h-5 mr-2" />
                            Disadvantages &amp; Limitations
                        </h4>
                        <ul className="list-none space-y-2">
                            <li className="flex items-start">
                                <AlertTriangle className="w-4 h-4 mr-2 mt-1 text-red-500 flex-shrink-0" />
                                <span><code className="text-cyan-400">Transition Friction:</code> Mixing CommonJS and ES Modules in legacy codebases can cause complex compatibility errors.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'node-npm-package-management',
            title: '3. [Beginner] Package Management with npm & semver',
            definition: 'npm (Node Package Manager) manages third-party PyPI dependencies recorded in package.json and package-lock.json adhering to Semantic Versioning (MAJOR.MINOR.PATCH).',
            syntax: `/* Semantic Versioning (SemVer) Breakdown: */\n"express": "^4.18.2"   /* ^ Allows compatible MINOR/PATCH updates */\n"dotenv": "~16.0.3"    /* ~ Allows ONLY PATCH updates */\n"cors": "2.8.5"        /* Exact fixed version */`,
            codeSnippet: `// package.json blueprint configuration\n{\n  "name": "adv-node-backend",\n  "version": "1.0.0",\n  "main": "server.js",\n  "scripts": {\n    "start": "node server.js",\n    "dev": "nodemon server.js",\n    "test": "jest"\n  },\n  "dependencies": {\n    "express": "^4.18.2",\n    "dotenv": "^16.0.3"\n  }\n}`,
            realLifeScenario: 'Commit `package-lock.json` to Git repositories to lock exact dependency version trees across developer machines.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            NPM is the default package manager for Node.js, providing a vast registry of open-source libraries. It uses <code className="text-cyan-600 font-mono">package.json</code> to track project metadata and dependencies.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Think of NPM as an app store for your project code. Instead of writing everything from scratch (like a date formatter), you can just download the package (like date-fns) and plug it directly into your project.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph TD
    A[NPM Registry] -->|npm install| B[node_modules]
    B --> C[Your Project]
    D[package.json] -->|Tracks Versions| C
    E[package-lock.json] -->|Locks Tree| B`} />
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-500" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`npm install express\nnpm install -D nodemon\nnpm run dev`} lang="bash" colorClass="cyan" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Using npm scripts to manage CI/CD pipelines, build processes, and testing workflows via <code className="text-cyan-600 font-mono">npm run build</code> and <code className="text-cyan-600 font-mono">npm run test</code>.
                        </p>
                    </div>

                    <div className="bg-slate-900 text-slate-100 p-5 rounded-xl">
                        <h4 className="text-lg font-bold text-emerald-400 mb-3 flex items-center">
                            <Check className="w-5 h-5 mr-2" />
                            Advantages
                        </h4>
                        <ul className="list-none space-y-2">
                            <li className="flex items-start">
                                <Check className="w-4 h-4 mr-2 mt-1 text-emerald-500 flex-shrink-0" />
                                <span><code className="text-cyan-400">Ecosystem:</code> Access to over 2 million open-source libraries.</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-slate-900 text-slate-100 p-5 rounded-xl mt-4">
                        <h4 className="text-lg font-bold text-red-400 mb-3 flex items-center">
                            <AlertTriangle className="w-5 h-5 mr-2" />
                            Disadvantages &amp; Limitations
                        </h4>
                        <ul className="list-none space-y-2">
                            <li className="flex items-start">
                                <AlertTriangle className="w-4 h-4 mr-2 mt-1 text-red-500 flex-shrink-0" />
                                <span><code className="text-cyan-400">Dependency Hell:</code> Deeply nested dependency trees can cause large bundle sizes and security vulnerabilities.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'node-fs-operations',
            title: '4. [Beginner] File System Operations (fs & fs/promises)',
            definition: 'The `fs` module interacts with the disk filesystem. Modern Node.js uses `fs/promises` with async/await for non-blocking file reads, writes, and directory creation.',
            syntax: `const fs = require('fs/promises');\n\nasync function processFile() {\n    const data = await fs.readFile('data.txt', 'utf-8');\n    await fs.writeFile('output.txt', data);\n}`,
            codeSnippet: `const fs = require('fs/promises');\nconst path = require('path');\n\nasync function fileOperationsDemo() {\n    const logPath = path.join(__dirname, 'server.log');\n    \n    try {\n        // Asynchronous non-blocking write\n        await fs.writeFile(logPath, \`[\${new Date().toISOString()}] Server Initialized\\n\`);\n        \n        // Append entry\n        await fs.appendFile(logPath, \`[\${new Date().toISOString()}] User Logged In\\n\`);\n        \n        // Read file contents\n        const content = await fs.readFile(logPath, 'utf-8');\n        console.log("Log Contents:\\n" + content);\n    } catch (err) {\n        console.error("File I/O Error:", err);\n    }\n}\n\nfileOperationsDemo();`,
            realLifeScenario: 'Server logging frameworks write error logs asynchronously using `fs/promises` without blocking web API HTTP request execution.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            The <code className="text-cyan-600 font-mono">fs</code> module provides an API for interacting with the file system. The <code className="text-cyan-600 font-mono">fs/promises</code> API allows these operations to be performed asynchronously using async/await.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Think of the file system module as an archivist who reads and writes documents to physical filing cabinets. An asynchronous archivist takes your document, puts it in the cabinet, and you are free to do other tasks instead of waiting in line.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph TD
    A[Node App] -->|await fs.readFile| B[File System]
    B -->|Returns Promise| A
    A -->|await fs.writeFile| B`} />
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-500" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`import { mkdir, rm } from 'fs/promises';\n\nawait mkdir('./new-folder', { recursive: true });\nawait rm('./new-folder', { recursive: true, force: true });`} lang="javascript" colorClass="cyan" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Building a file upload service that writes user profile pictures to the disk asynchronously without interrupting other users.
                        </p>
                    </div>

                    <div className="bg-slate-900 text-slate-100 p-5 rounded-xl">
                        <h4 className="text-lg font-bold text-emerald-400 mb-3 flex items-center">
                            <Check className="w-5 h-5 mr-2" />
                            Advantages
                        </h4>
                        <ul className="list-none space-y-2">
                            <li className="flex items-start">
                                <Check className="w-4 h-4 mr-2 mt-1 text-emerald-500 flex-shrink-0" />
                                <span><code className="text-cyan-400">Non-Blocking:</code> Prevents server freezes during large file I/O operations.</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-slate-900 text-slate-100 p-5 rounded-xl mt-4">
                        <h4 className="text-lg font-bold text-red-400 mb-3 flex items-center">
                            <AlertTriangle className="w-5 h-5 mr-2" />
                            Disadvantages &amp; Limitations
                        </h4>
                        <ul className="list-none space-y-2">
                            <li className="flex items-start">
                                <AlertTriangle className="w-4 h-4 mr-2 mt-1 text-red-500 flex-shrink-0" />
                                <span><code className="text-cyan-400">Memory Exhaustion:</code> Reading very large files with <code className="text-cyan-400">fs.readFile</code> loads the entire file into RAM. Streams should be used instead.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            )
        },
        
        // ==================== INTERMEDIATE TIER ====================
        {
            id: 'node-http-server',
            title: '5. [Intermediate] Creating HTTP Servers with Native http Module',
            definition: 'The native `http` module creates web servers (`http.createServer`), handling incoming Request streams and formatting Response headers, status codes, and JSON payloads.',
            syntax: `const http = require('http');\n\nconst server = http.createServer((req, res) => {\n    res.writeHead(200, { 'Content-Type': 'application/json' });\n    res.end(JSON.stringify({ status: 'ok' }));\n});\nserver.listen(3000);`,
            codeSnippet: `const http = require('http');\n\nconst PORT = 3000;\n\nconst server = http.createServer((req, res) => {\n    const { method, url } = req;\n\n    if (method === 'GET' && url === '/api/status') {\n        res.writeHead(200, { 'Content-Type': 'application/json' });\n        res.end(JSON.stringify({ status: "ONLINE", uptime: process.uptime() }));\n    } else if (method === 'GET' && url === '/api/user') {\n        res.writeHead(200, { 'Content-Type': 'application/json' });\n        res.end(JSON.stringify({ id: 101, username: "Vinay Mahato" }));\n    } else {\n        res.writeHead(404, { 'Content-Type': 'application/json' });\n        res.end(JSON.stringify({ error: "Route Not Found" }));\n    }\n});\n\nserver.listen(PORT, () => {\n    console.log(\`Server listening on http://localhost:\${PORT}\`);\n});`,
            realLifeScenario: 'Micro-services run lightweight native HTTP servers for container health check endpoints (`/healthz`).',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            The <code className="text-cyan-600 font-mono">http</code> module is Node.js&apos;s core built-in module for creating network servers. It allows processing raw HTTP requests and defining exact headers and responses manually.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Imagine setting up a front desk receptionist (the server) in an office building. Visitors (requests) arrive asking for specific rooms (routes). The receptionist directs them and gives them a guest badge (response).
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph LR
    A[Client Request] --> B[http.createServer]
    B --> C{URL Path & Method?}
    C -->|GET /| D[res.writeHead 200]
    C -->|Unknown| E[res.writeHead 404]
    D --> F[res.end]
    E --> F`} />
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-500" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`http.createServer((req, res) => {\n  res.setHeader('X-Custom-Header', 'Awesome');\n  res.end('Hello World');\n}).listen(8080);`} lang="javascript" colorClass="cyan" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Creating extremely lightweight proxy servers or custom API gateways that require minimal overhead without third-party frameworks.
                        </p>
                    </div>

                    <div className="bg-slate-900 text-slate-100 p-5 rounded-xl">
                        <h4 className="text-lg font-bold text-emerald-400 mb-3 flex items-center">
                            <Check className="w-5 h-5 mr-2" />
                            Advantages
                        </h4>
                        <ul className="list-none space-y-2">
                            <li className="flex items-start">
                                <Check className="w-4 h-4 mr-2 mt-1 text-emerald-500 flex-shrink-0" />
                                <span><code className="text-cyan-400">Zero Dependencies:</code> Does not require <code className="text-cyan-400">node_modules</code>.</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-slate-900 text-slate-100 p-5 rounded-xl mt-4">
                        <h4 className="text-lg font-bold text-red-400 mb-3 flex items-center">
                            <AlertTriangle className="w-5 h-5 mr-2" />
                            Disadvantages &amp; Limitations
                        </h4>
                        <ul className="list-none space-y-2">
                            <li className="flex items-start">
                                <AlertTriangle className="w-4 h-4 mr-2 mt-1 text-red-500 flex-shrink-0" />
                                <span><code className="text-cyan-400">Boilerplate:</code> Writing routing and body-parsing logic manually is extremely verbose.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'node-streams-buffers',
            title: '6. [Intermediate] Streams & Buffers (Buffer, Readable/Writable, pipe)',
            definition: 'Buffers handle raw binary data in RAM. Streams process large data sequentially in chunks (Readable, Writable, Transform), using `.pipe()` to prevent RAM overflow.',
            syntax: `const fs = require('fs');\n\nconst readStream = fs.createReadStream('large_video.mp4');\nconst writeStream = fs.createWriteStream('copy_video.mp4');\nreadStream.pipe(writeStream); // Stream chunk processing`,
            codeSnippet: `const fs = require('fs');\nconst http = require('http');\n\n// Streaming large files directly to HTTP response\nhttp.createServer((req, res) => {\n    const stream = fs.createReadStream('large_dataset.csv');\n    res.writeHead(200, { 'Content-Type': 'text/csv' });\n    \n    // Pipe file chunks directly to network response\n    stream.pipe(res);\n}).listen(4000);\n\nconsole.log("Streaming server running on port 4000");`,
            realLifeScenario: 'Streaming platforms (Netflix, YouTube) pipe video files in small chunk buffers instead of loading full multi-gigabyte files into RAM.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Streams process data continuously piece by piece (chunks), rather than reading it all into memory at once. Buffers act as temporary holding spots for this binary data chunk while it is being transferred.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Think of watching a movie. If you download the whole file, you have to wait for the entire 5GB file to finish before playing. With streaming, you download small chunks into a buffer and watch them continuously as more chunks arrive.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph LR
    A[Disk File 5GB] -->|Chunk 1| B[Buffer Memory 64KB]
    B -->|pipe| C[HTTP Response]
    A -->|Chunk 2| B
    B -->|pipe| C`} />
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-500" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`const zlib = require('zlib');\nfs.createReadStream('data.txt')\n  .pipe(zlib.createGzip())\n  .pipe(fs.createWriteStream('data.txt.gz'));`} lang="javascript" colorClass="cyan" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Compressing and archiving giant database backup files dynamically, or transmitting real-time audio data.
                        </p>
                    </div>

                    <div className="bg-slate-900 text-slate-100 p-5 rounded-xl">
                        <h4 className="text-lg font-bold text-emerald-400 mb-3 flex items-center">
                            <Check className="w-5 h-5 mr-2" />
                            Advantages
                        </h4>
                        <ul className="list-none space-y-2">
                            <li className="flex items-start">
                                <Check className="w-4 h-4 mr-2 mt-1 text-emerald-500 flex-shrink-0" />
                                <span><code className="text-cyan-400">Memory Efficiency:</code> Crucial for processing large files on memory-constrained servers.</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-slate-900 text-slate-100 p-5 rounded-xl mt-4">
                        <h4 className="text-lg font-bold text-red-400 mb-3 flex items-center">
                            <AlertTriangle className="w-5 h-5 mr-2" />
                            Disadvantages &amp; Limitations
                        </h4>
                        <ul className="list-none space-y-2">
                            <li className="flex items-start">
                                <AlertTriangle className="w-4 h-4 mr-2 mt-1 text-red-500 flex-shrink-0" />
                                <span><code className="text-cyan-400">Complexity:</code> Error handling in multiple piped streams requires advanced event listeners.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'node-event-emitter',
            title: '7. [Intermediate] Event Emitter Pattern (events module)',
            definition: 'Node.js is event-driven. The `events` module provides the `EventEmitter` class, supporting event subscription (`.on()`, `.once()`) and event firing (`.emit()`).',
            syntax: `const EventEmitter = require('events');\nconst emitter = new EventEmitter();\n\nemitter.on('orderPlaced', (orderId) => { });\nemitter.emit('orderPlaced', 9021);`,
            codeSnippet: `const EventEmitter = require('events');\n\nclass PaymentGateway extends EventEmitter {\n    processPayment(orderId, amount) {\n        console.log(\`Processing payment of ₹\${amount} for Order #\${orderId}...\`);\n        // Simulate completion\n        this.emit('paymentSuccess', { orderId, amount, timestamp: new Date() });\n    }\n}\n\nconst gateway = new PaymentGateway();\n\n// Listener 1: Email Service\ngateway.on('paymentSuccess', (data) => {\n    console.log(\`[Email Service] Receipt sent for Order #\${data.orderId}\`);\n});\n\n// Listener 2: Inventory Service\ngateway.on('paymentSuccess', (data) => {\n    console.log(\`[Inventory Service] Items reserved for Order #\${data.orderId}\`);\n});\n\ngateway.processPayment(10092, 4500.00);`,
            realLifeScenario: 'Decoupled domain architectures use EventEmitters to notify multiple listener services when a user completes a checkout purchase.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            The EventEmitter class allows objects to publish custom events and subscribe to them. It implements the Observer design pattern, which is the foundation of Node.js&apos;s asynchronous nature.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Think of a radio station. The station broadcasts a signal (emit) on a specific frequency. Anyone who tunes their radio (on) to that frequency receives the music.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph TD
    A[emit: 'userSignup'] --> B[Listener: Send Email]
    A --> C[Listener: Create DB Record]
    A --> D[Listener: Send Welcome SMS]`} />
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-500" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`emitter.once('firstLogin', () => {\n  console.log('Reward 100 points');\n});`} lang="javascript" colorClass="cyan" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Triggering background jobs and decoupled microservice communication flows within a monolith.
                        </p>
                    </div>

                    <div className="bg-slate-900 text-slate-100 p-5 rounded-xl">
                        <h4 className="text-lg font-bold text-emerald-400 mb-3 flex items-center">
                            <Check className="w-5 h-5 mr-2" />
                            Advantages
                        </h4>
                        <ul className="list-none space-y-2">
                            <li className="flex items-start">
                                <Check className="w-4 h-4 mr-2 mt-1 text-emerald-500 flex-shrink-0" />
                                <span><code className="text-cyan-400">Decoupling:</code> Components don't need to know about each other, just the event names.</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-slate-900 text-slate-100 p-5 rounded-xl mt-4">
                        <h4 className="text-lg font-bold text-red-400 mb-3 flex items-center">
                            <AlertTriangle className="w-5 h-5 mr-2" />
                            Disadvantages &amp; Limitations
                        </h4>
                        <ul className="list-none space-y-2">
                            <li className="flex items-start">
                                <AlertTriangle className="w-4 h-4 mr-2 mt-1 text-red-500 flex-shrink-0" />
                                <span><code className="text-cyan-400">Memory Leaks:</code> Forgetting to call <code className="text-cyan-400">removeListener</code> can crash the server over time.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'node-express-basics',
            title: '8. [Intermediate] Express.js Basics & Routing',
            definition: 'Express.js is a minimal, flexible Node.js web framework providing routing (app.get, app.post), parameter parsing (req.params, req.query), and JSON responses.',
            syntax: `const express = require('express');\nconst app = express();\napp.use(express.json());\n\napp.get('/users/:id', (req, res) => {\n    res.json({ id: req.params.id });\n});`,
            codeSnippet: `const express = require('express');\nconst app = express();\n\napp.use(express.json()); // Middleware for parsing JSON body\n\nconst users = [\n    { id: 1, name: "Vinay Mahato", role: "Admin" },\n    { id: 2, name: "Anita Sharma", role: "Developer" }\n];\n\n// Route Parameters & Query Strings\napp.get('/api/v1/users/:id', (req, res) => {\n    const userId = parseInt(req.params.id);\n    const user = users.find(u => u.id === userId);\n    \n    if (!user) return res.status(404).json({ error: "User not found" });\n    res.json(user);\n});\n\napp.listen(5000, () => console.log("Express API running on port 5000"));`,
            realLifeScenario: 'RESTful API servers use Express routing to handle incoming HTTP endpoint actions for web and mobile client applications.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Express is a fast, unopinionated web framework built on top of Node.js&apos;s HTTP module. It abstracts away raw server logic, providing intuitive routing syntax and request/response manipulation.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            If the native HTTP module is building a house from scratch with raw lumber and nails, Express is buying a pre-built house structure where you just need to paint the walls and arrange the furniture.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph TD
    A[HTTP Request] --> B[Express Router]
    B -->|GET /users| C[Fetch Users]
    B -->|POST /users| D[Create User]
    B -->|DELETE /users/:id| E[Delete User]
    C --> F[res.json]
    D --> F
    E --> F`} />
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-500" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`app.get('/search', (req, res) => {\n  const { q } = req.query;\n  res.json({ message: \`Searching for \${q}\` });\n});`} lang="javascript" colorClass="cyan" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            The backbone of thousands of production backend services globally, functioning as REST APIs for React or Angular frontends.
                        </p>
                    </div>

                    <div className="bg-slate-900 text-slate-100 p-5 rounded-xl">
                        <h4 className="text-lg font-bold text-emerald-400 mb-3 flex items-center">
                            <Check className="w-5 h-5 mr-2" />
                            Advantages
                        </h4>
                        <ul className="list-none space-y-2">
                            <li className="flex items-start">
                                <Check className="w-4 h-4 mr-2 mt-1 text-emerald-500 flex-shrink-0" />
                                <span><code className="text-cyan-400">Developer Velocity:</code> Dramatically reduces boilerplate code.</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-slate-900 text-slate-100 p-5 rounded-xl mt-4">
                        <h4 className="text-lg font-bold text-red-400 mb-3 flex items-center">
                            <AlertTriangle className="w-5 h-5 mr-2" />
                            Disadvantages &amp; Limitations
                        </h4>
                        <ul className="list-none space-y-2">
                            <li className="flex items-start">
                                <AlertTriangle className="w-4 h-4 mr-2 mt-1 text-red-500 flex-shrink-0" />
                                <span><code className="text-cyan-400">Unopinionated:</code> Lack of enforced structure means messy architecture in large teams if no patterns are agreed upon.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            )
        },
        
        // ==================== ADVANCED TIER ====================
        {
            id: 'node-express-middleware',
            title: '9. [Advanced] Express Middleware & Error Handling',
            definition: 'Middleware functions have access to req, res, and the next() callback. Error-handling middleware receives 4 arguments (err, req, res, next).',
            syntax: `// Custom Logger Middleware\nconst logger = (req, res, next) => {\n    console.log(\`\${req.method} \${req.url}\`);\n    next(); // Pass control to next handler\n};\napp.use(logger);`,
            codeSnippet: `const express = require('express');\nconst app = express();\n\n// Custom Authentication Middleware\nconst requireAuth = (req, res, next) => {\n    const token = req.headers['authorization'];\n    if (!token) {\n        return res.status(401).json({ error: "Unauthorized: Missing Token" });\n    }\n    next(); // Validated, proceed\n};\n\napp.get('/api/protected', requireAuth, (req, res) => {\n    res.json({ data: "Sensitive Admin Information" });\n});\n\n// Global Error Handling Middleware (4 arguments)\napp.use((err, req, res, next) => {\n    console.error("Global Error Caught:", err.stack);\n    res.status(500).json({ error: "Internal Server Error", details: err.message });\n});`,
            realLifeScenario: 'Security middleware like CORS and Helmet attach HTTP headers to every incoming API request before reaching controllers.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Middleware are functions executed in the middle of a request-response cycle. They can modify requests, execute logic, and must call <code className="text-cyan-600 font-mono">next()</code> to pass control.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Think of an airport security checkpoint. The passenger (request) must pass through ticket verification, baggage scan, and metal detector (middlewares) before they reach their gate (route handler).
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph LR
    A[Request] --> B[Logger Middleware]
    B -->|next()| C[Auth Middleware]
    C -->|next()| D[Route Handler]
    C -->|Unauthorized| E[Error Handler]
    D --> F[Response]`} />
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-500" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`app.use((req, res, next) => {\n  req.requestTime = Date.now();\n  next();\n});`} lang="javascript" colorClass="cyan" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Validating JWT tokens globally before requests reach private user endpoints.
                        </p>
                    </div>

                    <div className="bg-slate-900 text-slate-100 p-5 rounded-xl">
                        <h4 className="text-lg font-bold text-emerald-400 mb-3 flex items-center">
                            <Check className="w-5 h-5 mr-2" />
                            Advantages
                        </h4>
                        <ul className="list-none space-y-2">
                            <li className="flex items-start">
                                <Check className="w-4 h-4 mr-2 mt-1 text-emerald-500 flex-shrink-0" />
                                <span><code className="text-cyan-400">Modular Logic:</code> Keeps routes clean by moving cross-cutting concerns (auth, logging) into reusable functions.</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-slate-900 text-slate-100 p-5 rounded-xl mt-4">
                        <h4 className="text-lg font-bold text-red-400 mb-3 flex items-center">
                            <AlertTriangle className="w-5 h-5 mr-2" />
                            Disadvantages &amp; Limitations
                        </h4>
                        <ul className="list-none space-y-2">
                            <li className="flex items-start">
                                <AlertTriangle className="w-4 h-4 mr-2 mt-1 text-red-500 flex-shrink-0" />
                                <span><code className="text-cyan-400">Hanging Requests:</code> Forgetting to call <code className="text-cyan-400">next()</code> or <code className="text-cyan-400">res.send()</code> causes the client request to hang forever.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'node-async-error-handling',
            title: '10. [Advanced] Asynchronous Error Handling & Process Safety',
            definition: 'Handle async errors inside route handlers using try/catch blocks or wrapper functions. Attach process-level safety handlers for uncaughtException and unhandledRejection.',
            syntax: `process.on('unhandledRejection', (reason, promise) => {\n    console.error('Unhandled Promise Rejection:', reason);\n});`,
            codeSnippet: `const express = require('express');\nconst app = express();\n\n// Async Handler Wrapper (Eliminates try/catch boilerplate)\nconst asyncHandler = (fn) => (req, res, next) => {\n    Promise.resolve(fn(req, res, next)).catch(next);\n};\n\napp.get('/api/async-data', asyncHandler(async (req, res) => {\n    // Simulated Database Error\n    throw new Error("Database Connection Timeout");\n}));\n\n// Process Level Handlers\nprocess.on('uncaughtException', (err) => {\n    console.error("CRITICAL: Uncaught Exception:", err.message);\n    process.exit(1); // Graceful exit\n});`,
            realLifeScenario: 'Process-level error handlers prevent server crashes by capturing unhandled promise rejections gracefully.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Express does not catch errors thrown inside asynchronous functions automatically. Custom wrappers or process-level event listeners are required to prevent application crashes from unhandled promise rejections.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Like a safety net beneath a trapeze artist. If an asynchronous database query fails and falls (throws an error), the wrapper net catches it and hands it safely to the global error handler instead of letting the entire circus show (server) crash.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph TD
    A[Async Route Handler] -->|Throws Error| B[asyncHandler wrapper]
    B -->|.catch(next)| C[Global Error Middleware]
    C --> D[Format 500 JSON Response]`} />
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-500" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`// Modern Express 5+ does this automatically\nrequire('express-async-errors'); // for Express 4`} lang="javascript" colorClass="cyan" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Ensuring API resilience by standardizing error response schemas (e.g. status code, message, stack trace) across all database failures.
                        </p>
                    </div>

                    <div className="bg-slate-900 text-slate-100 p-5 rounded-xl">
                        <h4 className="text-lg font-bold text-emerald-400 mb-3 flex items-center">
                            <Check className="w-5 h-5 mr-2" />
                            Advantages
                        </h4>
                        <ul className="list-none space-y-2">
                            <li className="flex items-start">
                                <Check className="w-4 h-4 mr-2 mt-1 text-emerald-500 flex-shrink-0" />
                                <span><code className="text-cyan-400">Reliability:</code> Prevents unhandled rejections from taking down the Node process in production.</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-slate-900 text-slate-100 p-5 rounded-xl mt-4">
                        <h4 className="text-lg font-bold text-red-400 mb-3 flex items-center">
                            <AlertTriangle className="w-5 h-5 mr-2" />
                            Disadvantages &amp; Limitations
                        </h4>
                        <ul className="list-none space-y-2">
                            <li className="flex items-start">
                                <AlertTriangle className="w-4 h-4 mr-2 mt-1 text-red-500 flex-shrink-0" />
                                <span><code className="text-cyan-400">Process State:</code> If an <code className="text-cyan-400">uncaughtException</code> occurs, you must crash and restart the server, as internal state may be corrupted.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'node-rest-api-architecture',
            title: '11. [Advanced] REST API Architecture & Zod/Joi Validation',
            definition: 'Structure enterprise APIs using the Controller-Service-Repository pattern, enforcing payload schema validation using libraries like Zod or Joi.',
            syntax: `import { z } from 'zod';\n\nconst userSchema = z.object({\n    email: z.string().email(),\n    age: z.number().min(18)\n});`,
            codeSnippet: `const express = require('express');\nconst { z } = require('zod');\nconst app = express();\napp.use(express.json());\n\n// Zod Validation Schema\nconst createUserSchema = z.object({\n    username: z.string().min(3),\n    email: z.string().email(),\n    password: z.string().min(8)\n});\n\napp.post('/api/users', (req, res) => {\n    const result = createUserSchema.safeParse(req.body);\n    \n    if (!result.success) {\n        return res.status(400).json({ error: "Validation Failed", details: result.error.format() });\n    }\n\n    res.status(201).json({ message: "User Created Successfully", data: result.data });\n});`,
            realLifeScenario: 'Strict Zod schema validation blocks malformed or malicious payload attributes from reaching database insertion layers.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Enterprise Node architectures separate concerns into Routes (endpoints), Controllers (HTTP logic), Services (Business logic), and Repositories (Database logic). Validation libraries ensure data integrity at the Controller level.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Think of a package delivery center. The Route is the loading dock, the Zod Validator is the inspector checking if the box is properly sealed, the Service is the manager deciding which truck takes it, and the Repository is the driver placing it in the warehouse.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph TD
    A[Router] --> B[Zod Validation]
    B -->|Valid| C[Controller]
    B -->|Invalid| D[400 Error]
    C --> E[Service Logic]
    E --> F[Database Repo]`} />
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-500" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`const parseSchema = (schema) => (req, res, next) => {\n  schema.parse(req.body);\n  next();\n};`} lang="javascript" colorClass="cyan" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Validating complex nested JSON payloads for e-commerce checkout systems before charging credit cards.
                        </p>
                    </div>

                    <div className="bg-slate-900 text-slate-100 p-5 rounded-xl">
                        <h4 className="text-lg font-bold text-emerald-400 mb-3 flex items-center">
                            <Check className="w-5 h-5 mr-2" />
                            Advantages
                        </h4>
                        <ul className="list-none space-y-2">
                            <li className="flex items-start">
                                <Check className="w-4 h-4 mr-2 mt-1 text-emerald-500 flex-shrink-0" />
                                <span><code className="text-cyan-400">Security:</code> Prevents NoSQL injection and malformed data crashes.</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-slate-900 text-slate-100 p-5 rounded-xl mt-4">
                        <h4 className="text-lg font-bold text-red-400 mb-3 flex items-center">
                            <AlertTriangle className="w-5 h-5 mr-2" />
                            Disadvantages &amp; Limitations
                        </h4>
                        <ul className="list-none space-y-2">
                            <li className="flex items-start">
                                <AlertTriangle className="w-4 h-4 mr-2 mt-1 text-red-500 flex-shrink-0" />
                                <span><code className="text-cyan-400">Maintenance:</code> Schemas must be kept in sync with database models manually.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'node-auth-jwt-bcrypt',
            title: '12. [Advanced] Authentication & Authorization (JWT & bcrypt)',
            definition: 'Secure REST APIs using bcrypt for password hashing and JSON Web Tokens (JWT) for stateless HTTP authorization Bearer headers.',
            syntax: `const hash = await bcrypt.hash(password, 10);\nconst token = jwt.sign({ userId }, SECRET_KEY, { expiresIn: '1h' });`,
            codeSnippet: `const bcrypt = require('bcryptjs');\nconst jwt = require('jsonwebtoken');\n\nconst JWT_SECRET = "super_secret_jwt_key_2026";\n\nasync function authWorkflow() {\n    // 1. Password Hashing on Register\n    const rawPassword = "SecretPassword123";\n    const hashedPassword = await bcrypt.hash(rawPassword, 10);\n    console.log("Hashed Password:", hashedPassword);\n\n    // 2. Password Verification on Login\n    const isMatch = await bcrypt.compare("SecretPassword123", hashedPassword);\n    \n    if (isMatch) {\n        // 3. Issue Signed JWT Token\n        const token = jwt.sign({ id: 101, role: "Admin" }, JWT_SECRET, { expiresIn: '2h' });\n        console.log("Issued Bearer JWT:", token);\n    }\n}\n\nauthWorkflow();`,
            realLifeScenario: 'Stateless API microservices verify incoming `Authorization: Bearer <token>` headers without making database sessions queries.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Authentication verifies user identity, typically via passwords hashed by <code className="text-cyan-600 font-mono">bcrypt</code>. Authorization grants permissions using JWTs, which are signed JSON objects sent in HTTP headers.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Bcrypt is the process of translating your secret password into an unreadable fingerprint. JWT is like a VIP wristband handed to you after verifying your identity—guards just check the wristband instead of asking for your ID again.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph TD
    A[Client Login] --> B[Verify bcrypt hash]
    B -->|Success| C[Generate JWT]
    C --> D[Return Token]
    E[Client API Request] --> F[Send Bearer Token]
    F --> G[Verify JWT Signature]`} />
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-500" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`const decoded = jwt.verify(token, process.env.JWT_SECRET);\nreq.user = decoded;`} lang="javascript" colorClass="cyan" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Single Sign-On (SSO) systems passing JWTs between separate microservices without needing a centralized Redis session store.
                        </p>
                    </div>

                    <div className="bg-slate-900 text-slate-100 p-5 rounded-xl">
                        <h4 className="text-lg font-bold text-emerald-400 mb-3 flex items-center">
                            <Check className="w-5 h-5 mr-2" />
                            Advantages
                        </h4>
                        <ul className="list-none space-y-2">
                            <li className="flex items-start">
                                <Check className="w-4 h-4 mr-2 mt-1 text-emerald-500 flex-shrink-0" />
                                <span><code className="text-cyan-400">Stateless:</code> Scales infinitely because the server doesn't store active sessions in memory.</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-slate-900 text-slate-100 p-5 rounded-xl mt-4">
                        <h4 className="text-lg font-bold text-red-400 mb-3 flex items-center">
                            <AlertTriangle className="w-5 h-5 mr-2" />
                            Disadvantages &amp; Limitations
                        </h4>
                        <ul className="list-none space-y-2">
                            <li className="flex items-start">
                                <AlertTriangle className="w-4 h-4 mr-2 mt-1 text-red-500 flex-shrink-0" />
                                <span><code className="text-cyan-400">Revocation:</code> Difficult to logout users immediately because JWTs are valid until they expire naturally.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            )
        },
        
        // ==================== PROFESSIONAL TIER ====================
        {
            id: 'node-database-integration',
            title: '13. [Professional] Database Integration (MongoDB & PostgreSQL)',
            definition: 'Node.js integrates with NoSQL databases (MongoDB via Mongoose) and Relational SQL databases (PostgreSQL via Prisma ORM) with connection pooling.',
            syntax: `// Mongoose MongoDB Schema Blueprint\nconst userSchema = new mongoose.Schema({ name: String, email: String });\nconst User = mongoose.model('User', userSchema);`,
            codeSnippet: `const mongoose = require('mongoose');\n\n// Mongoose MongoDB Model & Connection\nasync function connectDB() {\n    await mongoose.connect('mongodb://localhost:27017/adv_coder_db');\n    console.log("MongoDB Connected via Mongoose Pool");\n}\n\nconst UserSchema = new mongoose.Schema({\n    name: { type: String, required: true },\n    email: { type: String, unique: true, required: true },\n    createdAt: { type: Date, default: Date.now }\n});\n\nconst User = mongoose.model('User', UserSchema);`,
            realLifeScenario: 'Production Node.js services maintain connection pools (e.g. max pool size 10) to reuse existing database sockets efficiently.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Node.js connects to databases via drivers. Object-Relational Mappers (ORMs) like Prisma or Object-Document Mappers (ODMs) like Mongoose abstract away raw SQL/NoSQL syntax into JavaScript object methods.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            An ORM is like a translator. Instead of learning the specific language of the database (SQL), you speak JavaScript, and the ORM translates your JavaScript instructions into perfect SQL queries behind the scenes.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph LR
    A[Node API] --> B[Prisma ORM]
    A --> C[Mongoose ODM]
    B -->|SQL query| D[(PostgreSQL)]
    C -->|BSON query| E[(MongoDB)]`} />
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-500" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`// Prisma Example\nconst users = await prisma.user.findMany({\n  where: { active: true }\n});`} lang="javascript" colorClass="cyan" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Managing highly relational data like user roles and orders with Prisma (PostgreSQL) or flexible document logs with Mongoose (MongoDB).
                        </p>
                    </div>

                    <div className="bg-slate-900 text-slate-100 p-5 rounded-xl">
                        <h4 className="text-lg font-bold text-emerald-400 mb-3 flex items-center">
                            <Check className="w-5 h-5 mr-2" />
                            Advantages
                        </h4>
                        <ul className="list-none space-y-2">
                            <li className="flex items-start">
                                <Check className="w-4 h-4 mr-2 mt-1 text-emerald-500 flex-shrink-0" />
                                <span><code className="text-cyan-400">Type Safety:</code> Prisma auto-generates TypeScript types based on your schema.</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-slate-900 text-slate-100 p-5 rounded-xl mt-4">
                        <h4 className="text-lg font-bold text-red-400 mb-3 flex items-center">
                            <AlertTriangle className="w-5 h-5 mr-2" />
                            Disadvantages &amp; Limitations
                        </h4>
                        <ul className="list-none space-y-2">
                            <li className="flex items-start">
                                <AlertTriangle className="w-4 h-4 mr-2 mt-1 text-red-500 flex-shrink-0" />
                                <span><code className="text-cyan-400">Performance Overhead:</code> Heavy ORMs can generate sub-optimal N+1 queries compared to raw hand-written SQL.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'node-performance-scaling',
            title: '14. [Professional] Performance & Scaling (Cluster Module, PM2, Redis)',
            definition: 'Scale Node.js applications across multi-core CPUs using the native Cluster module or PM2 process manager, caching frequent queries in Redis.',
            syntax: `// Cluster module blueprint\nconst cluster = require('cluster');\nconst os = require('os');\n\nif (cluster.isPrimary) {\n    os.cpus().forEach(() => cluster.fork());\n} else {\n    // Run Express Worker\n}`,
            codeSnippet: `/* PM2 Process Manager Production Commands */\n$ npm install -g pm2\n\n# Start API in Cluster Mode across all CPU Cores\n$ pm2 start server.js -i max --name "adv-node-api"\n\n# Monitor Cluster Processes & RAM Usage\n$ pm2 status\n$ pm2 logs`,
            realLifeScenario: 'Deploying PM2 in cluster mode (`-i max`) spawns worker processes matching total CPU cores, maximizing server throughput.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Because Node.js runs on a single thread, it can only utilize one CPU core by default. Scaling involves cloning the process across multiple cores using the Cluster module or tools like PM2, and reducing load using Redis caching.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            If your server is a restaurant with one extremely fast chef (single thread), they eventually get overwhelmed. Clustering is like hiring three more clones of the chef to work in parallel on different orders.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph TD
    A[Nginx Load Balancer] --> B[PM2 Cluster Master]
    B --> C[Worker Core 1]
    B --> D[Worker Core 2]
    B --> E[Worker Core 3]`} />
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-500" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`const redis = require('redis');\nconst client = redis.createClient();\nawait client.setEx('cache_key', 3600, JSON.stringify(data));`} lang="javascript" colorClass="cyan" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Ensuring zero-downtime deployments and max resource utilization on AWS EC2 instances with PM2 cluster mode.
                        </p>
                    </div>

                    <div className="bg-slate-900 text-slate-100 p-5 rounded-xl">
                        <h4 className="text-lg font-bold text-emerald-400 mb-3 flex items-center">
                            <Check className="w-5 h-5 mr-2" />
                            Advantages
                        </h4>
                        <ul className="list-none space-y-2">
                            <li className="flex items-start">
                                <Check className="w-4 h-4 mr-2 mt-1 text-emerald-500 flex-shrink-0" />
                                <span><code className="text-cyan-400">High Throughput:</code> Linearly increases requests per second handled by the server.</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-slate-900 text-slate-100 p-5 rounded-xl mt-4">
                        <h4 className="text-lg font-bold text-red-400 mb-3 flex items-center">
                            <AlertTriangle className="w-5 h-5 mr-2" />
                            Disadvantages &amp; Limitations
                        </h4>
                        <ul className="list-none space-y-2">
                            <li className="flex items-start">
                                <AlertTriangle className="w-4 h-4 mr-2 mt-1 text-red-500 flex-shrink-0" />
                                <span><code className="text-cyan-400">State Sharing:</code> Clustered workers do not share memory. Session states must be externalized to Redis.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'node-microservices-websockets',
            title: '15. [Professional] Microservices & WebSockets (Socket.io, RabbitMQ)',
            definition: 'Build real-time applications using Socket.io (WebSockets) and event-driven microservices connected via message queues like RabbitMQ or Kafka.',
            syntax: `// Socket.io Server Blueprint\nconst io = require('socket.io')(server);\nio.on('connection', (socket) => {\n    socket.on('chatMessage', (msg) => io.emit('message', msg));\n});`,
            codeSnippet: `const express = require('express');\nconst http = require('http');\nconst { Server } = require("socket.io");\n\nconst app = express();\nconst server = http.createServer(app);\nconst io = new Server(server, { cors: { origin: "*" } });\n\n// Real-Time WebSocket Connection Handler\nio.on('connection', (socket) => {\n    console.log("Client Connected:", socket.id);\n\n    socket.on('joinRoom', (room) => {\n        socket.join(room);\n        console.log(\`Socket \${socket.id} joined room \${room}\`);\n    });\n\n    socket.on('disconnect', () => {\n        console.log("Client Disconnected:", socket.id);\n    });\n});\n\nserver.listen(6000, () => console.log("WebSocket Server running on port 6000"));`,
            realLifeScenario: 'Real-time collaborative editors (Figma) and chat applications (Slack, Discord) use WebSockets for instant bi-directional messaging.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            WebSockets provide persistent, full-duplex communication channels over a single TCP connection. Message queues (RabbitMQ) enable asynchronous event-driven communication between multiple isolated microservices.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            HTTP is like sending a letter and waiting for a reply. WebSockets are like a phone call where both people can talk at the same time instantly. RabbitMQ is a post office that reliably routes messages to different departments.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph LR
    A[Client UI] <-->|WebSocket| B[Socket.io Gateway]
    B -->|Publish Event| C[(RabbitMQ Broker)]
    C -->|Consume| D[Notification Service]
    C -->|Consume| E[Database Service]`} />
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-500" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`io.to("room-1").emit("update", { data: "New Data!" });`} lang="javascript" colorClass="cyan" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Live sports score updates, trading dashboards, and multiplayer gaming server environments.
                        </p>
                    </div>

                    <div className="bg-slate-900 text-slate-100 p-5 rounded-xl">
                        <h4 className="text-lg font-bold text-emerald-400 mb-3 flex items-center">
                            <Check className="w-5 h-5 mr-2" />
                            Advantages
                        </h4>
                        <ul className="list-none space-y-2">
                            <li className="flex items-start">
                                <Check className="w-4 h-4 mr-2 mt-1 text-emerald-500 flex-shrink-0" />
                                <span><code className="text-cyan-400">Low Latency:</code> Eliminates HTTP headers overhead for rapid real-time data flow.</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-slate-900 text-slate-100 p-5 rounded-xl mt-4">
                        <h4 className="text-lg font-bold text-red-400 mb-3 flex items-center">
                            <AlertTriangle className="w-5 h-5 mr-2" />
                            Disadvantages &amp; Limitations
                        </h4>
                        <ul className="list-none space-y-2">
                            <li className="flex items-start">
                                <AlertTriangle className="w-4 h-4 mr-2 mt-1 text-red-500 flex-shrink-0" />
                                <span><code className="text-cyan-400">Scaling Complexity:</code> Load balancing WebSockets requires sticky sessions and a Redis Pub/Sub adapter to sync sockets across cluster nodes.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'node-production-security-docker',
            title: '16. [Professional] Production Security & Testing (Helmet, Docker)',
            definition: 'Secure Node.js backends using Helmet.js (HTTP security headers), express-rate-limit (DDoS defense), API integration tests via Supertest, and Docker containerization.',
            syntax: `const helmet = require('helmet');\nconst rateLimit = require('express-rate-limit');\n\napp.use(helmet());\napp.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));`,
            codeSnippet: `/* Dockerfile for Node.js Production Deployment */\nFROM node:20-alpine AS base\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci --only=production\nCOPY . .\nEXPOSE 5000\nUSER node\nCMD ["node", "server.js"]`,
            realLifeScenario: 'Production security practices require running Node.js Docker containers under non-root users (`USER node`) to prevent host compromise.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Production readiness involves hardening the app against vulnerabilities (XSS, CSRF, DDoS) using security middleware, writing integration tests, and packaging the app in an isolated Docker container.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Helmet is like putting a sturdy steel door on your house instead of a wooden one. Docker is like placing your house inside a portable bubble that guarantees the weather and temperature inside are exactly the same, no matter where you move it.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph TD
    A[Public Internet] --> B[WAF/Cloudflare]
    B --> C[Rate Limiter]
    C --> D[Helmet Headers]
    D --> E[Docker Container]
    E --> F[Node App as non-root user]`} />
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-500" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`docker build -t node-app .\ndocker run -p 5000:5000 node-app`} lang="bash" colorClass="cyan" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Deploying predictable and secure microservices to Kubernetes clusters using immutable Docker images.
                        </p>
                    </div>

                    <div className="bg-slate-900 text-slate-100 p-5 rounded-xl">
                        <h4 className="text-lg font-bold text-emerald-400 mb-3 flex items-center">
                            <Check className="w-5 h-5 mr-2" />
                            Advantages
                        </h4>
                        <ul className="list-none space-y-2">
                            <li className="flex items-start">
                                <Check className="w-4 h-4 mr-2 mt-1 text-emerald-500 flex-shrink-0" />
                                <span><code className="text-cyan-400">Consistency:</code> "It works on my machine" becomes obsolete since the container environment is identical everywhere.</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-slate-900 text-slate-100 p-5 rounded-xl mt-4">
                        <h4 className="text-lg font-bold text-red-400 mb-3 flex items-center">
                            <AlertTriangle className="w-5 h-5 mr-2" />
                            Disadvantages &amp; Limitations
                        </h4>
                        <ul className="list-none space-y-2">
                            <li className="flex items-start">
                                <AlertTriangle className="w-4 h-4 mr-2 mt-1 text-red-500 flex-shrink-0" />
                                <span><code className="text-cyan-400">Build Time:</code> Docker images can take time to build and push in CI/CD pipelines compared to standard file transfers.</span>
                            </li>
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
            title="Node.js Masterclass Course"
            description="Master Node.js from V8 Engine Architecture, Event Loop, and fs Modules to Express.js, JWT Authentication, Cluster Scaling, WebSockets, and Docker."
            topics={topics}
            icon={Server}
            colorClass="emerald"
            activeTopicIndex={activeTopicIndex}
            onTopicClick={setActiveTopicIndex}
        >
            <div className="space-y-8">
                {/* Part 1: Concept Definition & Detailed Explanation */}
                <div className="bg-emerald-50 dark:bg-emerald-900/10 border-l-4 border-emerald-600 p-6 rounded-r-xl shadow-sm">
                    <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
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
                            <pre>{`// Node.js Code Blueprint\nconst express = require('express');\nconst app = express();`}</pre>
                        </div>
                    </div>
                )}

                {/* Part 3: Executable Code Example */}
                {activeTopic.codeSnippet && (
                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-emerald-600" />
                            3. Executable Production Code Example
                        </h3>
                        <CodeBlock code={activeTopic.codeSnippet} lang="javascript" colorClass="emerald" filename="server.js" />
                    </div>
                )}

                {/* Part 4: Real-Life Scenario Example */}
                <div className="bg-emerald-50 dark:bg-emerald-900/10 border-l-4 border-emerald-600 p-6 rounded-r-xl shadow-sm">
                    <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                        <Lightbulb className="w-5 h-5 mr-2" />
                        4. Real-Life Industry Scenario & Application
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                        {activeTopic.realLifeScenario || activeTopic.example || "Powers backend API services, real-time WebSocket messaging servers, microservices, and high-concurrency cloud applications."}
                    </p>
                </div>
            </div>
        </CoursePageLayout>
    );
};

export default NodeJsCoursePage;
