import React, { useState } from 'react';
import CoursePageLayout from '../../components/CoursePageLayout';
import { FileCode, Code, BookOpen, Lightbulb, FileText, Cpu, Layers, ShieldAlert, Zap, Workflow, Check, AlertTriangle } from 'lucide-react';
import CodeBlock from '../../components/CodeBlock';
import MermaidDiagram from '../../components/MermaidDiagram';

interface TypeScriptTopic {
    id: string;
    title: string;
    definition: string;
    example?: string;
    syntax?: string;
    realLifeScenario?: string;
    codeSnippet?: string | null;
    content: React.ReactNode;
}

const TypeScriptCoursePage = () => {
    const [activeTopicIndex, setActiveTopicIndex] = useState(0);

    const courseData: TypeScriptTopic[] = [
        // ==================== BEGINNER TIER ====================
        {
            id: 'ts-intro-setup',
            title: '1. [Beginner] Introduction & Setup (tsconfig.json, tsc)',
            definition: 'TypeScript is a strongly typed superset of JavaScript developed by Microsoft. It transpiles to plain JavaScript via the tsc compiler, catching type errors before code execution.',
            syntax: `/* TypeScript Compilation Blueprint */\n$ npm install -g typescript ts-node\n$ tsc --init               # Generates tsconfig.json\n$ tsc index.ts             # Transpiles TS to JS\n$ ts-node index.ts         # Direct execution`,
            codeSnippet: `// Type Annotations Example\nconst appName: string = "ADV Indian Coder Platform";\nconst versionNumber: number = 2.5;\nconst isProductionReady: boolean = true;\n\nfunction calculateDiscount(price: number, discountPercentage: number): number {\n    return price - (price * (discountPercentage / 100));\n}\n\nconst finalPrice = calculateDiscount(1499, 20);\nconsole.log(\`\${appName} v\${versionNumber} - Final Price: ₹\${finalPrice}\`);`,
            realLifeScenario: 'Slack, Microsoft Teams, and Stripe write all client and server codebases in TypeScript to eliminate runtime "undefined is not a function" crashes.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-xl">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">TypeScript is a strongly typed superset of JavaScript developed by Microsoft. It transpiles to plain JavaScript via the tsc compiler, catching type errors before code execution.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-xl">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">Slack, Microsoft Teams, and Stripe write all client and server codebases in TypeScript to eliminate runtime &quot;undefined is not a function&quot; crashes.</p>
                    </div>
                    <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-xl">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2 text-purple-500" /> Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph TD; A[Source Code .ts] --> B[TSC Compiler]; B --> C{Type Checker}; C -- Error --> D[Build Fails]; C -- Success --> E[JavaScript .js];`} />
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-600" /> Sample Code
                        </h4>
                        <CodeBlock code={`// Type Annotations Example\nconst appName: string = "ADV Indian Coder Platform";\nconst versionNumber: number = 2.5;\nconst isProductionReady: boolean = true;\n\nfunction calculateDiscount(price: number, discountPercentage: number): number {\n    return price - (price * (discountPercentage / 100));\n}\n\nconst finalPrice = calculateDiscount(1499, 20);\nconsole.log(\`\${appName} v\${versionNumber} - Final Price: ₹\${finalPrice}\`);`} lang="typescript" filename="example.ts" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-xl">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">Used heavily in production systems like Slack, Microsoft Teams, and Stripe to ensure type safety across large codebases.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-emerald-400 flex items-center mb-3">
                            <Check className="w-5 h-5 mr-2" /> Advantages
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 text-emerald-400 mt-1 shrink-0" /><span>Catches errors at compile time</span></li>
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 text-emerald-400 mt-1 shrink-0" /><span>Self-documenting <code className="text-cyan-400">code</code></span></li>
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 text-emerald-400 mt-1 shrink-0" /><span>Rich IDE support</span></li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-red-400 flex items-center mb-3">
                            <AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages / Limitations
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 text-red-400 mt-1 shrink-0" /><span>Compilation step required</span></li>
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 text-red-400 mt-1 shrink-0" /><span>Learning curve for strict typing</span></li>
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 text-red-400 mt-1 shrink-0" /><span>Boilerplate code</span></li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'ts-primitive-types-unknown-any',
            title: '2. [Beginner] Primitive & Basic Types (unknown vs any, void, never)',
            definition: 'Core types include string, number, boolean, null, undefined, symbol, and bigint. Understand the key differences between unknown (type-safe any), any (disables checking), void, and never.',
            syntax: `let data: unknown = "Hello";\n// Must narrow 'unknown' before usage:\nif (typeof data === "string") {\n    console.log(data.toUpperCase());\n}`,
            codeSnippet: `// unknown vs any vs never\nlet userInput: unknown = "TypeScript 5.0";\nlet unsafeInput: any = 100;\n\n// Type narrowing required for 'unknown'\nif (typeof userInput === "string") {\n    console.log("Length:", userInput.length); // Safe ✓\n}\n\n// 'never' type represents unreachable code\nfunction throwError(message: string): never {\n    throw new Error(message);\n}`,
            realLifeScenario: 'APIs parsing untrusted external JSON data annotate variables as `unknown` to force type narrowing checks before dereferencing properties.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-xl">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">Core types include string, number, boolean, null, undefined, symbol, and bigint. Understand the key differences between unknown (type-safe any), any (disables checking), void, and never.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-xl">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">APIs parsing untrusted external JSON data annotate variables as <code className="text-cyan-600 font-mono">unknown</code> to force type narrowing checks before dereferencing properties.</p>
                    </div>
                    <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-xl">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2 text-purple-500" /> Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph LR; A[unknown] --> B{Type Check}; B -- Yes --> C[String/Number]; B -- No --> D[Error]; E[any] --> F[Bypass Checks];`} />
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-600" /> Sample Code
                        </h4>
                        <CodeBlock code={`// unknown vs any vs never\nlet userInput: unknown = "TypeScript 5.0";\nlet unsafeInput: any = 100;\n\n// Type narrowing required for 'unknown'\nif (typeof userInput === "string") {\n    console.log("Length:", userInput.length); // Safe ✓\n}\n\n// 'never' type represents unreachable code\nfunction throwError(message: string): never {\n    throw new Error(message);\n}`} lang="typescript" filename="example.ts" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-xl">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">Handling responses from third-party APIs or dynamic user inputs securely.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-emerald-400 flex items-center mb-3">
                            <Check className="w-5 h-5 mr-2" /> Advantages
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 text-emerald-400 mt-1 shrink-0" /><span>Prevents random runtime type errors</span></li>
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 text-emerald-400 mt-1 shrink-0" /><span><code className="text-cyan-400">unknown</code> provides type-safe dynamism</span></li>
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 text-emerald-400 mt-1 shrink-0" /><span><code className="text-cyan-400">never</code> prevents unreachable states</span></li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-red-400 flex items-center mb-3">
                            <AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages / Limitations
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 text-red-400 mt-1 shrink-0" /><span>Overuse of <code className="text-cyan-400">any</code> defeats TS purpose</span></li>
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 text-red-400 mt-1 shrink-0" /><span>Type narrowing can be verbose</span></li>
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 text-red-400 mt-1 shrink-0" /><span>Complex void/never distinction</span></li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'ts-arrays-tuples',
            title: '3. [Beginner] Arrays & Tuples (ReadonlyArray<T>)',
            definition: 'Typed arrays (`number[]`, `Array<string>`) store homogeneous lists. Tuples (`[string, number]`) store fixed-length ordered arrays with specific element types.',
            syntax: `const scores: number[] = [90, 85, 95];\nconst userTuple: [number, string, boolean] = [101, "Vinay", true];\nconst fixedArray: ReadonlyArray<string> = ["A", "B"];`,
            codeSnippet: `// Typed Arrays & Tuples\nconst skills: string[] = ["TypeScript", "React", "Node.js"];\n\n// Tuple: [HTTP Status Code, Status Description]\ntype HttpResponse = [number, string];\n\nconst okResponse: HttpResponse = [200, "OK"];\nconst notFoundResponse: HttpResponse = [404, "Not Found"];\n\nconsole.log(\`Response \${okResponse[0]}: \${okResponse[1]}\`);`,
            realLifeScenario: 'React custom hooks (`useCustomHook()`) return Tuples (`[state, setState]`) to allow custom variable destructuring names in consuming components.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-xl">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">Typed arrays (<code className="text-cyan-600 font-mono">number[]</code>, <code className="text-cyan-600 font-mono">Array&lt;string&gt;</code>) store homogeneous lists. Tuples (<code className="text-cyan-600 font-mono">[string, number]</code>) store fixed-length ordered arrays with specific element types.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-xl">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">React custom hooks (<code className="text-cyan-600 font-mono">useCustomHook()</code>) return Tuples (<code className="text-cyan-600 font-mono">[state, setState]</code>) to allow custom variable destructuring names in consuming components.</p>
                    </div>
                    <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-xl">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2 text-purple-500" /> Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph TD; A[Collections] --> B[Arrays]; A --> C[Tuples]; B --> D[Homogeneous Data]; C --> E[Fixed Length & Types];`} />
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-600" /> Sample Code
                        </h4>
                        <CodeBlock code={`// Typed Arrays & Tuples\nconst skills: string[] = ["TypeScript", "React", "Node.js"];\n\n// Tuple: [HTTP Status Code, Status Description]\ntype HttpResponse = [number, string];\n\nconst okResponse: HttpResponse = [200, "OK"];\nconst notFoundResponse: HttpResponse = [404, "Not Found"];\n\nconsole.log(\`Response \${okResponse[0]}: \${okResponse[1]}\`);`} lang="typescript" filename="example.ts" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-xl">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">Designing APIs where returning multiple values logically grouped is preferred over creating a new object type.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-emerald-400 flex items-center mb-3">
                            <Check className="w-5 h-5 mr-2" /> Advantages
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 text-emerald-400 mt-1 shrink-0" /><span>Strict data shapes for collections</span></li>
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 text-emerald-400 mt-1 shrink-0" /><span>Tuples ensure exact length</span></li>
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 text-emerald-400 mt-1 shrink-0" /><span><code className="text-cyan-400">Readonly</code> prevents mutations</span></li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-red-400 flex items-center mb-3">
                            <AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages / Limitations
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 text-red-400 mt-1 shrink-0" /><span>Tuples can be hard to read if too long</span></li>
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 text-red-400 mt-1 shrink-0" /><span>Array methods on tuples can sometimes bypass type checks</span></li>
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 text-red-400 mt-1 shrink-0" /><span>Verbose array generics</span></li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'ts-functions-annotations',
            title: '4. [Beginner] Functions & Type Annotations (Optional & Rest)',
            definition: 'Annotate function parameter types and return types. Support optional parameters (`param?: type`), default values, rest parameters (`...args: number[]`), and function overloads.',
            syntax: `function greet(name: string, title?: string): string {\n    return \`Hello \${title ? title + ' ' : ''}\${name}\`;\n}`,
            codeSnippet: `// Function Parameter & Return Type Annotations\nfunction sumNumbers(...numbers: number[]): number {\n    return numbers.reduce((total, curr) => total + curr, 0);\n}\n\n// Arrow Function with Explicit Types\nconst formatCurrency = (amount: number, currency: string = "INR"): string => {\n    return \`\${currency} \${amount.toLocaleString('en-IN')}\`;\n};\n\nconsole.log(formatCurrency(25000));\nconsole.log("Sum:", sumNumbers(10, 20, 30, 40));`,
            realLifeScenario: 'Annotating function signatures prevents invalid arguments from breaking backend database operations during refactoring.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-xl">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">Annotate function parameter types and return types. Support optional parameters (<code className="text-cyan-600 font-mono">param?: type</code>), default values, rest parameters (<code className="text-cyan-600 font-mono">...args: number[]</code>), and function overloads.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-xl">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">Annotating function signatures prevents invalid arguments from breaking backend database operations during refactoring.</p>
                    </div>
                    <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-xl">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2 text-purple-500" /> Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph LR; A[Function Call] --> B{Type Checker}; B -- Valid Args --> C[Execute]; B -- Invalid Args --> D[Compile Error]; C --> E[Return Type Verified];`} />
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-600" /> Sample Code
                        </h4>
                        <CodeBlock code={`// Function Parameter & Return Type Annotations\nfunction sumNumbers(...numbers: number[]): number {\n    return numbers.reduce((total, curr) => total + curr, 0);\n}\n\n// Arrow Function with Explicit Types\nconst formatCurrency = (amount: number, currency: string = "INR"): string => {\n    return \`\${currency} \${amount.toLocaleString('en-IN')}\`;\n};\n\nconsole.log(formatCurrency(25000));\nconsole.log("Sum:", sumNumbers(10, 20, 30, 40));`} lang="typescript" filename="example.ts" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-xl">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">Building robust service layers and utility functions that power business logic without unpredictable argument types.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-emerald-400 flex items-center mb-3">
                            <Check className="w-5 h-5 mr-2" /> Advantages
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 text-emerald-400 mt-1 shrink-0" /><span>Clear contract for callers</span></li>
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 text-emerald-400 mt-1 shrink-0" /><span>Return type inference works well</span></li>
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 text-emerald-400 mt-1 shrink-0" /><span>Prevents <code className="text-cyan-400">undefined</code> argument bugs</span></li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-red-400 flex items-center mb-3">
                            <AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages / Limitations
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 text-red-400 mt-1 shrink-0" /><span>Overloads can be messy</span></li>
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 text-red-400 mt-1 shrink-0" /><span>Complex rest parameter types</span></li>
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 text-red-400 mt-1 shrink-0" /><span>Callback types can get verbose</span></li>
                        </ul>
                    </div>
                </div>
            )
        },

        // ==================== INTERMEDIATE TIER ====================
        {
            id: 'ts-interfaces-type-aliases',
            title: '5. [Intermediate] Interfaces vs Type Aliases',
            definition: 'Interfaces (`interface`) model object shapes supporting extension (`extends`) and declaration merging. Type Aliases (`type`) model unions, primitives, tuples, and intersections.',
            syntax: `/* Interface Extension Blueprint */\ninterface User { id: number; name: string; }\ninterface Admin extends User { permissions: string[]; }\n\n/* Type Union Blueprint */\ntype Status = "PENDING" | "SUCCESS" | "FAILED";`,
            codeSnippet: `// Interface Definition with Declaration Merging\ninterface Employee {\n    id: number;\n    name: string;\n}\n\n// Extension\ninterface Manager extends Employee {\n    department: string;\n}\n\nconst manager: Manager = {\n    id: 10092,\n    name: "Vinay Mahato",\n    department: "Engineering"\n};\n\nconsole.log("Manager:", manager);`,
            realLifeScenario: 'UI Component Libraries expose `interface Props` so consuming applications can augment component props via Declaration Merging.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-xl">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">Interfaces (<code className="text-cyan-600 font-mono">interface</code>) model object shapes supporting extension (<code className="text-cyan-600 font-mono">extends</code>) and declaration merging. Type Aliases (<code className="text-cyan-600 font-mono">type</code>) model unions, primitives, tuples, and intersections.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-xl">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">UI Component Libraries expose <code className="text-cyan-600 font-mono">interface Props</code> so consuming applications can augment component props via Declaration Merging.</p>
                    </div>
                    <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-xl">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2 text-purple-500" /> Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph TD; A[Types] --> B[Interface]; A --> C[Type Alias]; B --> D[Extends]; B --> E[Declaration Merging]; C --> F[Unions]; C --> G[Intersections];`} />
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-600" /> Sample Code
                        </h4>
                        <CodeBlock code={`// Interface Definition with Declaration Merging\ninterface Employee {\n    id: number;\n    name: string;\n}\n\n// Extension\ninterface Manager extends Employee {\n    department: string;\n}\n\nconst manager: Manager = {\n    id: 10092,\n    name: "Vinay Mahato",\n    department: "Engineering"\n};\n\nconsole.log("Manager:", manager);`} lang="typescript" filename="example.ts" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-xl">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">Using interfaces for domain models and class implementations, and types for utility combinations.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-emerald-400 flex items-center mb-3">
                            <Check className="w-5 h-5 mr-2" /> Advantages
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 text-emerald-400 mt-1 shrink-0" /><span>Interfaces allow open-ended merging</span></li>
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 text-emerald-400 mt-1 shrink-0" /><span>Types allow complex compositions</span></li>
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 text-emerald-400 mt-1 shrink-0" /><span>Clear separation of concerns</span></li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-red-400 flex items-center mb-3">
                            <AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages / Limitations
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 text-red-400 mt-1 shrink-0" /><span>Confusion over which to use</span></li>
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 text-red-400 mt-1 shrink-0" /><span>Merging can cause unintended collisions</span></li>
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 text-red-400 mt-1 shrink-0" /><span>Types cannot be extended like classes</span></li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'ts-unions-intersections',
            title: '6. [Intermediate] Union & Intersection Types (Discriminated Unions)',
            definition: 'Union types (`A | B`) accept multiple types. Type narrowing (`typeof`, `instanceof`, `in`) narrows unions. Discriminated Unions use a common string literal property for type safety.',
            syntax: `type Circle = { kind: 'circle'; radius: number };\ntype Square = { kind: 'square'; side: number };\ntype Shape = Circle | Square;`,
            codeSnippet: `type SuccessState = { status: 'success'; data: string[] };\ntype ErrorState = { status: 'error'; message: string };\ntype ApiResponse = SuccessState | ErrorState;\n\nfunction handleResponse(response: ApiResponse) {\n    // Discriminated Union Type Narrowing via 'status' property\n    switch (response.status) {\n        case 'success':\n            console.log("Data count:", response.data.length);\n            break;\n        case 'error':\n            console.error("Error Message:", response.message);\n            break;\n    }\n}`,
            realLifeScenario: 'Redux actions and API state management use Discriminated Unions (`status: "loading" | "success" | "error"`) for type-safe pattern matching.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-xl">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">Union types (<code className="text-cyan-600 font-mono">A | B</code>) accept multiple types. Type narrowing (<code className="text-cyan-600 font-mono">typeof</code>, <code className="text-cyan-600 font-mono">instanceof</code>, <code className="text-cyan-600 font-mono">in</code>) narrows unions. Discriminated Unions use a common string literal property for type safety.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-xl">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">Redux actions and API state management use Discriminated Unions (<code className="text-cyan-600 font-mono">status: &quot;loading&quot; | &quot;success&quot; | &quot;error&quot;</code>) for type-safe pattern matching.</p>
                    </div>
                    <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-xl">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2 text-purple-500" /> Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph TD; A[Union] --> B{Discriminator}; B -- status: success --> C[Success Type]; B -- status: error --> D[Error Type];`} />
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-600" /> Sample Code
                        </h4>
                        <CodeBlock code={`type SuccessState = { status: 'success'; data: string[] };\ntype ErrorState = { status: 'error'; message: string };\ntype ApiResponse = SuccessState | ErrorState;\n\nfunction handleResponse(response: ApiResponse) {\n    // Discriminated Union Type Narrowing via 'status' property\n    switch (response.status) {\n        case 'success':\n            console.log("Data count:", response.data.length);\n            break;\n        case 'error':\n            console.error("Error Message:", response.message);\n            break;\n    }\n}`} lang="typescript" filename="example.ts" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-xl">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">State machines and application routing depend heavily on discriminated unions to prevent invalid state configurations.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-emerald-400 flex items-center mb-3">
                            <Check className="w-5 h-5 mr-2" /> Advantages
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 text-emerald-400 mt-1 shrink-0" /><span>Models exclusive states perfectly</span></li>
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 text-emerald-400 mt-1 shrink-0" /><span>Intersection groups behaviors</span></li>
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 text-emerald-400 mt-1 shrink-0" /><span>Discriminated unions ensure type safety</span></li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-red-400 flex items-center mb-3">
                            <AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages / Limitations
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 text-red-400 mt-1 shrink-0" /><span>Exhaustiveness checking requires <code className="text-cyan-400">never</code></span></li>
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 text-red-400 mt-1 shrink-0" /><span>Intersections can create impossible types</span></li>
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 text-red-400 mt-1 shrink-0" /><span>Complex unions slow down compiler</span></li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'ts-enums-literals',
            title: '7. [Intermediate] Enums & Template Literal Types',
            definition: 'Enums (`enum`) define named sets of constants (Numeric or String Enums). Template Literal Types construct new string types using template literal syntax.',
            syntax: `enum UserRole { ADMIN = "ADMIN", GUEST = "GUEST" }\ntype EventName = \`on\${"Click" | "Hover"}\`; // "onClick" | "onHover"`,
            codeSnippet: `enum HttpStatusCode {\n    OK = 200,\n    CREATED = 201,\n    NOT_FOUND = 404,\n    SERVER_ERROR = 500\n}\n\nconst responseCode: HttpStatusCode = HttpStatusCode.OK;\nconsole.log("HTTP Code:", responseCode);\n\n// Template Literal Type\ntype Direction = "top" | "bottom";\ntype Alignment = "left" | "right";\ntype Position = \`\${Direction}-\${Alignment}\`; // "top-left" | "top-right" | ...`,
            realLifeScenario: 'UI layout libraries use Template Literal Types to generate type-safe utility classes like `margin-top-left`.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-xl">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">Enums (<code className="text-cyan-600 font-mono">enum</code>) define named sets of constants (Numeric or String Enums). Template Literal Types construct new string types using template literal syntax.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-xl">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">UI layout libraries use Template Literal Types to generate type-safe utility classes like <code className="text-cyan-600 font-mono">margin-top-left</code>.</p>
                    </div>
                    <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-xl">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2 text-purple-500" /> Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph LR; A[Enum] --> B[Numeric]; A --> C[String]; D[Template Literals] --> E[Dynamic Strings]; E --> F[Type-safe combinations];`} />
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-600" /> Sample Code
                        </h4>
                        <CodeBlock code={`enum HttpStatusCode {\n    OK = 200,\n    CREATED = 201,\n    NOT_FOUND = 404,\n    SERVER_ERROR = 500\n}\n\nconst responseCode: HttpStatusCode = HttpStatusCode.OK;\nconsole.log("HTTP Code:", responseCode);\n\n// Template Literal Type\ntype Direction = "top" | "bottom";\ntype Alignment = "left" | "right";\ntype Position = \`\${Direction}-\${Alignment}\`; // "top-left" | "top-right" | ...`} lang="typescript" filename="example.ts" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-xl">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">Defining API routing namespaces, styling combinations, and role-based access control lists seamlessly.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-emerald-400 flex items-center mb-3">
                            <Check className="w-5 h-5 mr-2" /> Advantages
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 text-emerald-400 mt-1 shrink-0" /><span>Enums group constants logically</span></li>
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 text-emerald-400 mt-1 shrink-0" /><span>Template literals create massive types easily</span></li>
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 text-emerald-400 mt-1 shrink-0" /><span>Better auto-complete</span></li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-red-400 flex items-center mb-3">
                            <AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages / Limitations
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 text-red-400 mt-1 shrink-0" /><span>Standard enums output JS code</span></li>
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 text-red-400 mt-1 shrink-0" /><span>Numeric enums can be unsafe</span></li>
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 text-red-400 mt-1 shrink-0" /><span>Template literals can cause complex unions</span></li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'ts-object-types-index-signatures',
            title: '8. [Intermediate] Object Types & Index Signatures',
            definition: 'Object types specify property modifiers (`readonly`, `optional ?`). Index Signatures (`[key: string]: T`) model objects with arbitrary key names.',
            syntax: `interface Dictionary {\n    [key: string]: number; // Arbitrary dynamic keys with number values\n}`,
            codeSnippet: `interface AppConfig {\n    readonly apiBaseUrl: string; // Immutable property\n    timeout?: number;            // Optional property\n    [key: string]: any;          // Index signature for extra properties\n}\n\nconst config: AppConfig = {\n    apiBaseUrl: "https://api.advcoder.com",\n    featureFlagX: true\n};\n\nconsole.log("API URL:", config.apiBaseUrl);`,
            realLifeScenario: 'Translation lookup tables and dynamic cache dictionaries use Index Signatures (`[locale: string]: TranslationBundle`).',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-xl">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">Object types specify property modifiers (<code className="text-cyan-600 font-mono">readonly</code>, <code className="text-cyan-600 font-mono">optional ?</code>). Index Signatures (<code className="text-cyan-600 font-mono">[key: string]: T</code>) model objects with arbitrary key names.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-xl">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">Translation lookup tables and dynamic cache dictionaries use Index Signatures (<code className="text-cyan-600 font-mono">[locale: string]: TranslationBundle</code>).</p>
                    </div>
                    <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-xl">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2 text-purple-500" /> Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph TD; A[Object] --> B[Readonly Properties]; A --> C[Optional Properties]; A --> D[Index Signatures]; D --> E[Dynamic Keys];`} />
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-600" /> Sample Code
                        </h4>
                        <CodeBlock code={`interface AppConfig {\n    readonly apiBaseUrl: string; // Immutable property\n    timeout?: number;            // Optional property\n    [key: string]: any;          // Index signature for extra properties\n}\n\nconst config: AppConfig = {\n    apiBaseUrl: "https://api.advcoder.com",\n    featureFlagX: true\n};\n\nconsole.log("API URL:", config.apiBaseUrl);`} lang="typescript" filename="example.ts" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-xl">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">Creating dynamic hash maps and event emitter payload dictionaries dynamically.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-emerald-400 flex items-center mb-3">
                            <Check className="w-5 h-5 mr-2" /> Advantages
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 text-emerald-400 mt-1 shrink-0" /><span>Flexible object modeling</span></li>
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 text-emerald-400 mt-1 shrink-0" /><span>Readonly prevents mutation</span></li>
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 text-emerald-400 mt-1 shrink-0" /><span>Index signatures allow dictionaries</span></li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-red-400 flex items-center mb-3">
                            <AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages / Limitations
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 text-red-400 mt-1 shrink-0" /><span>Index signatures bypass strict checks for unknown keys</span></li>
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 text-red-400 mt-1 shrink-0" /><span>Mixing known and index keys can be tricky</span></li>
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 text-red-400 mt-1 shrink-0" /><span><code className="text-cyan-400">any</code> in index signature is dangerous</span></li>
                        </ul>
                    </div>
                </div>
            )
        },

        // ==================== ADVANCED TIER ====================
        {
            id: 'ts-generics',
            title: '9. [Advanced] Generics & Type Constraints (extends)',
            definition: 'Generics create reusable, type-safe components. Type Constraints (`<T extends HasLength>`) restrict allowed generic type parameters.',
            syntax: `function identity<T>(arg: T): T { return arg; }\nfunction getLength<T extends { length: number }>(arg: T): number { return arg.length; }`,
            codeSnippet: `// Generic ApiResponse Wrapper\ninterface ApiResponse<TData> {\n    status: number;\n    data: TData;\n    error?: string;\n}\n\ninterface User { id: number; name: string; }\n\nconst userResponse: ApiResponse<User> = {\n    status: 200,\n    data: { id: 101, name: "Vinay Mahato" }\n};\n\nconsole.log("Loaded User:", userResponse.data.name);`,
            realLifeScenario: 'HTTP client libraries (Axios) use generic functions (`http.get<UserPayload>(url)`) to type-check returned API payloads.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-xl">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">Generics create reusable, type-safe components. Type Constraints (<code className="text-cyan-600 font-mono">&lt;T extends HasLength&gt;</code>) restrict allowed generic type parameters.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-xl">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">HTTP client libraries (Axios) use generic functions (<code className="text-cyan-600 font-mono">http.get&lt;UserPayload&gt;(url)</code>) to type-check returned API payloads.</p>
                    </div>
                    <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-xl">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2 text-purple-500" /> Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph LR; A[Generic Call] --> B{Inference}; B --> C[Type T resolved]; C --> D[Return Type T]; A --> E[Explicit <T>]; E --> D;`} />
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-600" /> Sample Code
                        </h4>
                        <CodeBlock code={`// Generic ApiResponse Wrapper\ninterface ApiResponse<TData> {\n    status: number;\n    data: TData;\n    error?: string;\n}\n\ninterface User { id: number; name: string; }\n\nconst userResponse: ApiResponse<User> = {\n    status: 200,\n    data: { id: 101, name: "Vinay Mahato" }\n};\n\nconsole.log("Loaded User:", userResponse.data.name);`} lang="typescript" filename="example.ts" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-xl">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">Building generic pagination responses, data tables, and generic UI components in React.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-emerald-400 flex items-center mb-3">
                            <Check className="w-5 h-5 mr-2" /> Advantages
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 text-emerald-400 mt-1 shrink-0" /><span>Highly reusable components</span></li>
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 text-emerald-400 mt-1 shrink-0" /><span>Maintains precise types</span></li>
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 text-emerald-400 mt-1 shrink-0" /><span>Constraints ensure expected structure</span></li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-red-400 flex items-center mb-3">
                            <AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages / Limitations
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 text-red-400 mt-1 shrink-0" /><span>Can be very hard to read</span></li>
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 text-red-400 mt-1 shrink-0" /><span>Multiple generics get messy</span></li>
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 text-red-400 mt-1 shrink-0" /><span>Complex inference rules</span></li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'ts-utility-types',
            title: '10. [Advanced] Built-in Utility Types (Partial, Pick, Omit, Record)',
            definition: 'TypeScript provides built-in type transformation utilities: Partial<T>, Required<T>, Readonly<T>, Pick<T,K>, Omit<T,K>, Record<K,T>, and ReturnType<T>.',
            syntax: `type DraftUser = Partial<User>;        /* All properties optional */\ntype PublicUser = Omit<User, 'password'>;/* Excludes 'password' key */\ntype UserRoleMap = Record<string, User>;/* Key-Value Mapping */`,
            codeSnippet: `interface UserAccount {\n    id: number;\n    username: string;\n    email: string;\n    passwordHash: string;\n}\n\n// 1. Omit sensitive property for public DTO\ntype PublicUserDto = Omit<UserAccount, 'passwordHash'>;\n\n// 2. Partial for PATCH update payloads\ntype UpdateUserDto = Partial<PublicUserDto>;\n\nconst updatePayload: UpdateUserDto = {\n    email: "newemail@advcoder.com" // Allowed (All fields optional!)\n};`,
            realLifeScenario: 'REST API update handlers use `Partial<CreateDto>` to allow partial HTTP PATCH request updates.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-xl">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">TypeScript provides built-in type transformation utilities: Partial&lt;T&gt;, Required&lt;T&gt;, Readonly&lt;T&gt;, Pick&lt;T,K&gt;, Omit&lt;T,K&gt;, Record&lt;K,T&gt;, and ReturnType&lt;T&gt;.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-xl">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">REST API update handlers use <code className="text-cyan-600 font-mono">Partial&lt;CreateDto&gt;</code> to allow partial HTTP PATCH request updates.</p>
                    </div>
                    <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-xl">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2 text-purple-500" /> Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph TD; A[Base Type] --> B[Partial<T>]; A --> C[Pick<T, K>]; A --> D[Omit<T, K>]; B --> E[All Optional]; C --> F[Subset]; D --> G[Exclude Fields];`} />
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-600" /> Sample Code
                        </h4>
                        <CodeBlock code={`interface UserAccount {\n    id: number;\n    username: string;\n    email: string;\n    passwordHash: string;\n}\n\n// 1. Omit sensitive property for public DTO\ntype PublicUserDto = Omit<UserAccount, 'passwordHash'>;\n\n// 2. Partial for PATCH update payloads\ntype UpdateUserDto = Partial<PublicUserDto>;\n\nconst updatePayload: UpdateUserDto = {\n    email: "newemail@advcoder.com" // Allowed (All fields optional!)\n};`} lang="typescript" filename="example.ts" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-xl">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">Filtering database models securely before sending to clients over the network.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-emerald-400 flex items-center mb-3">
                            <Check className="w-5 h-5 mr-2" /> Advantages
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 text-emerald-400 mt-1 shrink-0" /><span>Reduces type duplication</span></li>
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 text-emerald-400 mt-1 shrink-0" /><span>Standardized transformations</span></li>
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 text-emerald-400 mt-1 shrink-0" /><span>Record simplifies dictionaries</span></li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-red-400 flex items-center mb-3">
                            <AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages / Limitations
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 text-red-400 mt-1 shrink-0" /><span>Nested properties need custom deep utilities</span></li>
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 text-red-400 mt-1 shrink-0" /><span>Overuse obscures original types</span></li>
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 text-red-400 mt-1 shrink-0" /><span>Omit can lose some type intellisense</span></li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'ts-advanced-type-narrowing',
            title: '11. [Advanced] Advanced Type Narrowing & Custom Type Guards',
            definition: 'Custom Type Guards (`val is TargetType`) define boolean functions that narrow variable types safely inside conditional code blocks.',
            syntax: `function isString(val: unknown): val is string {\n    return typeof val === "string";\n}`,
            codeSnippet: `interface Admin { name: string; role: 'admin'; permissions: string[] }\ninterface Guest { name: string; role: 'guest' }\ntype User = Admin | Guest;\n\n// Custom Type Guard Function\nfunction isAdmin(user: User): user is Admin {\n    return user.role === 'admin';\n}\n\nfunction processUser(user: User) {\n    if (isAdmin(user)) {\n        // TypeScript knows 'user' is Admin here!\n        console.log("Admin Permissions:", user.permissions.join(", "));\n    } else {\n        console.log("Guest User Access Only");\n    }\n}`,
            realLifeScenario: 'Parsing raw API payloads uses custom type guards to verify object schemas before passing objects to UI components.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-xl">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">Custom Type Guards (<code className="text-cyan-600 font-mono">val is TargetType</code>) define boolean functions that narrow variable types safely inside conditional code blocks.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-xl">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">Parsing raw API payloads uses custom type guards to verify object schemas before passing objects to UI components.</p>
                    </div>
                    <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-xl">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2 text-purple-500" /> Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph LR; A[Unknown Data] --> B{Type Guard}; B -- True --> C[Specific Type]; B -- False --> D[Other Type];`} />
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-600" /> Sample Code
                        </h4>
                        <CodeBlock code={`interface Admin { name: string; role: 'admin'; permissions: string[] }\ninterface Guest { name: string; role: 'guest' }\ntype User = Admin | Guest;\n\n// Custom Type Guard Function\nfunction isAdmin(user: User): user is Admin {\n    return user.role === 'admin';\n}\n\nfunction processUser(user: User) {\n    if (isAdmin(user)) {\n        // TypeScript knows 'user' is Admin here!\n        console.log("Admin Permissions:", user.permissions.join(", "));\n    } else {\n        console.log("Guest User Access Only");\n    }\n}`} lang="typescript" filename="example.ts" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-xl">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">Verifying Zod parser schemas and asserting exact conditions on discriminated union models securely.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-emerald-400 flex items-center mb-3">
                            <Check className="w-5 h-5 mr-2" /> Advantages
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 text-emerald-400 mt-1 shrink-0" /><span>Encapsulates narrowing logic</span></li>
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 text-emerald-400 mt-1 shrink-0" /><span>Makes complex checks reusable</span></li>
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 text-emerald-400 mt-1 shrink-0" /><span>Improves readability</span></li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-red-400 flex items-center mb-3">
                            <AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages / Limitations
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 text-red-400 mt-1 shrink-0" /><span>Implementation can lie to compiler</span></li>
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 text-red-400 mt-1 shrink-0" /><span>Returns boolean which might be misused</span></li>
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 text-red-400 mt-1 shrink-0" /><span>Manual maintenance of guard logic</span></li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'ts-decorators-metadata',
            title: '12. [Advanced] Decorators & Metadata API (@decorator)',
            definition: 'Decorators (@decorator) attach metadata and behavior to classes, methods, accessor properties, or parameters at design time.',
            syntax: `/* Method Decorator Blueprint */\nfunction LogExecution(target: any, propertyKey: string, descriptor: PropertyDescriptor) {\n    // Intercept method execution\n}`,
            codeSnippet: `// Class Decorator Example\nfunction Sealed(constructor: Function) {\n    Object.freeze(constructor);\n    Object.freeze(constructor.prototype);\n}\n\n@Sealed\nclass SecurityService {\n    authenticate() {\n        return true;\n    }\n}`,
            realLifeScenario: 'Backend frameworks like Nest.js use decorators (`@Controller()`, `@Get()`, `@Inject()`) to configure routes and dependency injection.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-xl">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">Decorators (@decorator) attach metadata and behavior to classes, methods, accessor properties, or parameters at design time.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-xl">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">Backend frameworks like Nest.js use decorators (<code className="text-cyan-600 font-mono">@Controller()</code>, <code className="text-cyan-600 font-mono">@Get()</code>, <code className="text-cyan-600 font-mono">@Inject()</code>) to configure routes and dependency injection.</p>
                    </div>
                    <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-xl">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2 text-purple-500" /> Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph TD; A[Class/Method] --> B[@Decorator]; B --> C[Modify Behavior]; B --> D[Attach Metadata];`} />
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-600" /> Sample Code
                        </h4>
                        <CodeBlock code={`// Class Decorator Example\nfunction Sealed(constructor: Function) {\n    Object.freeze(constructor);\n    Object.freeze(constructor.prototype);\n}\n\n@Sealed\nclass SecurityService {\n    authenticate() {\n        return true;\n    }\n}`} lang="typescript" filename="example.ts" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-xl">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">IoC Containers for dependency injection in Angular and NestJS heavily rely on decorators.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-emerald-400 flex items-center mb-3">
                            <Check className="w-5 h-5 mr-2" /> Advantages
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 text-emerald-400 mt-1 shrink-0" /><span>Declarative configuration</span></li>
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 text-emerald-400 mt-1 shrink-0" /><span>Separation of concerns</span></li>
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 text-emerald-400 mt-1 shrink-0" /><span>Essential for Angular/NestJS</span></li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-red-400 flex items-center mb-3">
                            <AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages / Limitations
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 text-red-400 mt-1 shrink-0" /><span>Still experimental/changing spec</span></li>
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 text-red-400 mt-1 shrink-0" /><span>Hard to type properly</span></li>
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 text-red-400 mt-1 shrink-0" /><span>Can add overhead to classes</span></li>
                        </ul>
                    </div>
                </div>
            )
        },

        // ==================== PROFESSIONAL TIER ====================
        {
            id: 'ts-conditional-mapped-types',
            title: '13. [Professional] Conditional Types & Mapped Types (infer, keyof)',
            definition: 'Conditional Types (`T extends U ? X : Y`) perform type logic based on relationships. The `infer` keyword extracts types. Mapped Types transform keys.',
            syntax: `type IsString<T> = T extends string ? true : false;\ntype Flatten<T> = T extends Array<infer Item> ? Item : T;\ntype ReadonlyMapped<T> = { readonly [K in keyof T]: T[K] };`,
            codeSnippet: `// Type Extraction via 'infer' keyword\ntype UnpackPromise<T> = T extends Promise<infer U> ? U : T;\n\ntype AsyncData = Promise<string>;\ntype ResolvedData = UnpackPromise<AsyncData>; // ResolvedData is inferred as 'string'!\n\n// Mapped Type transforming all properties to Booleans\ntype FeatureFlags<T> = {\n    [K in keyof T]: boolean;\n};\n\ninterface AppFeatures { darkMode: string; analytics: string; }\ntype ActiveFlags = FeatureFlags<AppFeatures>; // { darkMode: boolean; analytics: boolean }`,
            realLifeScenario: 'ORM libraries like Prisma use conditional and mapped types to infer database table query return shapes dynamically.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-xl">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">Conditional Types (<code className="text-cyan-600 font-mono">T extends U ? X : Y</code>) perform type logic based on relationships. The <code className="text-cyan-600 font-mono">infer</code> keyword extracts types. Mapped Types transform keys.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-xl">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">ORM libraries like Prisma use conditional and mapped types to infer database table query return shapes dynamically.</p>
                    </div>
                    <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-xl">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2 text-purple-500" /> Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph TD; A[Input Type] --> B{Condition T extends U}; B -- Yes --> C[Type X]; B -- No --> D[Type Y];`} />
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-600" /> Sample Code
                        </h4>
                        <CodeBlock code={`// Type Extraction via 'infer' keyword\ntype UnpackPromise<T> = T extends Promise<infer U> ? U : T;\n\ntype AsyncData = Promise<string>;\ntype ResolvedData = UnpackPromise<AsyncData>; // ResolvedData is inferred as 'string'!\n\n// Mapped Type transforming all properties to Booleans\ntype FeatureFlags<T> = {\n    [K in keyof T]: boolean;\n};\n\ninterface AppFeatures { darkMode: string; analytics: string; }\ntype ActiveFlags = FeatureFlags<AppFeatures>; // { darkMode: boolean; analytics: boolean }`} lang="typescript" filename="example.ts" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-xl">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">Building advanced typed ORMs like TypeORM or Prisma where types adapt based on queried fields.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-emerald-400 flex items-center mb-3">
                            <Check className="w-5 h-5 mr-2" /> Advantages
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 text-emerald-400 mt-1 shrink-0" /><span>Turing complete type system</span></li>
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 text-emerald-400 mt-1 shrink-0" /><span>Dynamic type generation</span></li>
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 text-emerald-400 mt-1 shrink-0" /><span>Extracts hidden types using infer</span></li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-red-400 flex items-center mb-3">
                            <AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages / Limitations
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 text-red-400 mt-1 shrink-0" /><span>Extremely hard to read</span></li>
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 text-red-400 mt-1 shrink-0" /><span>Compiler performance drops</span></li>
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 text-red-400 mt-1 shrink-0" /><span>Steep learning curve</span></li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'ts-tsconfig-compiler-options',
            title: '14. [Professional] TypeScript Configuration & Compiler Flags (strict)',
            definition: 'Configure compiler options in tsconfig.json: enable strict mode (`"strict": true`), `noImplicitAny`, `strictNullChecks`, path aliases (`"paths"`), and project references.',
            syntax: `// tsconfig.json Strict Configuration Blueprint\n{\n  "compilerOptions": {\n    "target": "ES2022",\n    "module": "NodeNext",\n    "strict": true,\n    "noImplicitAny": true,\n    "strictNullChecks": true,\n    "paths": { "@components/*": ["src/components/*"] }\n  }\n}`,
            codeSnippet: `{\n  "compilerOptions": {\n    "target": "ES2022",\n    "moduleResolution": "node",\n    "strict": true,\n    "noImplicitReturns": true,\n    "noUnusedLocals": true,\n    "esModuleInterop": true,\n    "skipLibCheck": true\n  }\n}`,
            realLifeScenario: 'Enabling `"strictNullChecks": true` forces developers to handle null and undefined cases explicitly, avoiding runtime crashes.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-xl">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">Configure compiler options in tsconfig.json: enable strict mode (<code className="text-cyan-600 font-mono">&quot;strict&quot;: true</code>), <code className="text-cyan-600 font-mono">noImplicitAny</code>, <code className="text-cyan-600 font-mono">strictNullChecks</code>, path aliases (<code className="text-cyan-600 font-mono">&quot;paths&quot;</code>), and project references.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-xl">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">Enabling <code className="text-cyan-600 font-mono">&quot;strictNullChecks&quot;: true</code> forces developers to handle null and undefined cases explicitly, avoiding runtime crashes.</p>
                    </div>
                    <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-xl">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2 text-purple-500" /> Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph LR; A[tsconfig.json] --> B[Compiler Options]; B --> C[strict: true]; C --> D[strictNullChecks]; C --> E[noImplicitAny];`} />
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-600" /> Sample Code
                        </h4>
                        <CodeBlock code={`{\n  "compilerOptions": {\n    "target": "ES2022",\n    "moduleResolution": "node",\n    "strict": true,\n    "noImplicitReturns": true,\n    "noUnusedLocals": true,\n    "esModuleInterop": true,\n    "skipLibCheck": true\n  }\n}`} lang="json" filename="tsconfig.json" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-xl">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">Enforcing strict standards for team collaboration via unified configuration.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-emerald-400 flex items-center mb-3">
                            <Check className="w-5 h-5 mr-2" /> Advantages
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 text-emerald-400 mt-1 shrink-0" /><span>Enforces best practices globally</span></li>
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 text-emerald-400 mt-1 shrink-0" /><span>Catches edge cases automatically</span></li>
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 text-emerald-400 mt-1 shrink-0" /><span>Path aliases improve imports</span></li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-red-400 flex items-center mb-3">
                            <AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages / Limitations
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 text-red-400 mt-1 shrink-0" /><span>Migration can be painful</span></li>
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 text-red-400 mt-1 shrink-0" /><span>Strict checks require more code</span></li>
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 text-red-400 mt-1 shrink-0" /><span>Complex module resolution rules</span></li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'ts-declaration-files-modules',
            title: '15. [Professional] Declaration Files (.d.ts) & DefinitelyTyped',
            definition: 'Declaration files (.d.ts) provide ambient type declarations for untyped JavaScript libraries without adding compiled code. Install third-party types via @types.',
            syntax: `// custom-lib.d.ts Ambient Declaration Blueprint:\ndeclare module 'untyped-javascript-lib' {\n    export function doSomething(val: string): boolean;\n}`,
            codeSnippet: `# Installing third-party type definitions from DefinitelyTyped\n$ npm install --save-dev @types/express @types/node @types/lodash`,
            realLifeScenario: 'Publishing open-source npm packages includes generated `.d.ts` files so consumers get auto-completion in VS Code.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-xl">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">Declaration files (.d.ts) provide ambient type declarations for untyped JavaScript libraries without adding compiled code. Install third-party types via @types.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-xl">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">Publishing open-source npm packages includes generated <code className="text-cyan-600 font-mono">.d.ts</code> files so consumers get auto-completion in VS Code.</p>
                    </div>
                    <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-xl">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2 text-purple-500" /> Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph TD; A[JS Library] --> B[.d.ts File]; B --> C[Type Info]; D[TS Code] --> C; C --> E[Type Checking];`} />
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-600" /> Sample Code
                        </h4>
                        <CodeBlock code={`# Installing third-party type definitions from DefinitelyTyped\n$ npm install --save-dev @types/express @types/node @types/lodash`} lang="bash" filename="terminal" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-xl">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">Integrating legacy JavaScript libraries like lodash and express cleanly into TS.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-emerald-400 flex items-center mb-3">
                            <Check className="w-5 h-5 mr-2" /> Advantages
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 text-emerald-400 mt-1 shrink-0" /><span>Interoperability with JS</span></li>
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 text-emerald-400 mt-1 shrink-0" /><span>Massive @types ecosystem</span></li>
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 text-emerald-400 mt-1 shrink-0" /><span>Does not emit runtime code</span></li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-red-400 flex items-center mb-3">
                            <AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages / Limitations
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 text-red-400 mt-1 shrink-0" /><span>Declarations can be out of sync</span></li>
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 text-red-400 mt-1 shrink-0" /><span>Writing custom .d.ts is tricky</span></li>
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 text-red-400 mt-1 shrink-0" /><span>Module augmentation can be confusing</span></li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'ts-enterprise-architecture-integration',
            title: '16. [Professional] Enterprise Architecture & React/Node Integration',
            definition: 'Structure enterprise monorepos with shared TypeScript types between React frontends and Node.js backends, enforcing strict CI type checking.',
            syntax: `/* Shared Type Package Monorepo Structure Blueprint:\npackages/\n├── shared-types/    # Exported DTOs & Interfaces\n├── frontend-react/   # Imports @shared/types\n└── backend-express/  # Imports @shared/types */`,
            codeSnippet: `// Shared API DTO Contract Interface\nexport interface UserRegistrationDto {\n    email: string;\n    username: string;\n}\n\n// React Frontend Component Usage:\n// const payload: UserRegistrationDto = { email: "...", username: "..." };\n\n// Express Backend Controller Usage:\n// app.post('/api/register', (req: Request<{}, {}, UserRegistrationDto>, res) => { ... });`,
            realLifeScenario: 'Sharing TypeScript DTO interfaces between frontend React apps and backend Node.js APIs guarantees that API schema changes break build pipelines immediately if mismatched.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-xl">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">Structure enterprise monorepos with shared TypeScript types between React frontends and Node.js backends, enforcing strict CI type checking.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-xl">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">Sharing TypeScript DTO interfaces between frontend React apps and backend Node.js APIs guarantees that API schema changes break build pipelines immediately if mismatched.</p>
                    </div>
                    <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-xl">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2 text-purple-500" /> Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph TD; A[Shared Types] --> B[React Frontend]; A --> C[Node Backend]; B -- Type Safe API --> C;`} />
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-600" /> Sample Code
                        </h4>
                        <CodeBlock code={`// Shared API DTO Contract Interface\nexport interface UserRegistrationDto {\n    email: string;\n    username: string;\n}\n\n// React Frontend Component Usage:\n// const payload: UserRegistrationDto = { email: "...", username: "..." };\n\n// Express Backend Controller Usage:\n// app.post('/api/register', (req: Request<{}, {}, UserRegistrationDto>, res) => { ... });`} lang="typescript" filename="example.ts" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-xl">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">Monorepos (NX, Turborepo) where shared packages ensure perfect synchronization.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-emerald-400 flex items-center mb-3">
                            <Check className="w-5 h-5 mr-2" /> Advantages
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 text-emerald-400 mt-1 shrink-0" /><span>End-to-end type safety</span></li>
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 text-emerald-400 mt-1 shrink-0" /><span>Single source of truth for DTOs</span></li>
                            <li className="flex items-start"><Check className="w-4 h-4 mr-2 text-emerald-400 mt-1 shrink-0" /><span>Refactoring confidence</span></li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-red-400 flex items-center mb-3">
                            <AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages / Limitations
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 text-red-400 mt-1 shrink-0" /><span>Monorepo setup complexity</span></li>
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 text-red-400 mt-1 shrink-0" /><span>Build dependency cycles</span></li>
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 text-red-400 mt-1 shrink-0" /><span>Versioning shared types</span></li>
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
            title="TypeScript Masterclass Course"
            description="Master TypeScript from Primitives, Interfaces, and Generics to Utility Types, Conditional Mapped Types, tsconfig Flags, and Monorepo Integration."
            topics={topics}
            icon={FileCode}
            colorClass="blue"
            activeTopicIndex={activeTopicIndex}
            onTopicClick={setActiveTopicIndex}
        >
            <div className="space-y-8">
                {activeTopic.content}
            </div>
        </CoursePageLayout>
    );
};

export default TypeScriptCoursePage;
