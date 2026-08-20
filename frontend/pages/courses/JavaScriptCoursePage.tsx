import React, { useState } from 'react';
import CoursePageLayout from '../../components/CoursePageLayout';
import { Terminal, Code, BookOpen, Lightbulb, FileText, Cpu, Layers, Zap, ShieldAlert, Workflow, Check, AlertTriangle } from 'lucide-react';
import CodeBlock from '../../components/CodeBlock';
import MermaidDiagram from '../../components/MermaidDiagram';

interface JsTopic {
    id: string;
    title: string;
    definition: string;
    example?: string;
    syntax?: string;
    realLifeScenario?: string;
    codeSnippet?: string | null;
    content: React.ReactNode;
}

const JavaScriptCoursePage = () => {
    const [activeTopicIndex, setActiveTopicIndex] = useState(0);

    const courseData: JsTopic[] = [
        // ==================== BEGINNER TIER ====================
        {
            id: 'js-variables-scope-tdz',
            title: '1. [Beginner] Variables, Scope & Temporal Dead Zone (var, let, const)',
            definition: 'Variables store references to data values in computer memory. Modern JavaScript provides three declaration keywords: var (function-scoped), let (block-scoped), and const (block-scoped with immutable binding). Scope defines where variables can be accessed, while the Temporal Dead Zone (TDZ) is the period between entering a block scope and reaching a let or const variable declaration during which accessing it throws a ReferenceError.',
            syntax: `/* Variable Declaration Syntax Blueprint */
var x = 10;     /* Function-scoped, hoisted as undefined */
let y = 20;     /* Block-scoped, TDZ protected */
const z = 30;   /* Block-scoped, immutable identifier binding */`,
            codeSnippet: `// Hoisting & Temporal Dead Zone (TDZ) Demonstration
console.log("Hoisted var x:", x); // Output: undefined
var x = 10;

try {
    // Accessing 'let' before declaration triggers ReferenceError (TDZ)
    console.log(y); 
} catch (err) {
    console.error("TDZ Error:", err.message); // Cannot access 'y' before initialization
}
let y = 20;

// Const Objects are mutable, but cannot be rebound
const user = { name: "Vinay" };
user.name = "Vinay Mahato"; // Allowed (Property Mutation)
console.log("User:", user);`,
            realLifeScenario: 'Using `const` by default and `let` only when values change eliminates accidental global namespace collisions in web applications.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-amber-50 dark:bg-amber-950/20 border-l-4 border-yellow-500 rounded-r-xl">
                        <h4 className="text-md font-bold text-amber-800 dark:text-amber-300 mb-1 flex items-center">
                            <BookOpen className="w-4 h-4 mr-2" />
                            1. Definition
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            Variables store references to data values in computer memory. Modern JavaScript provides three declaration keywords: <code className="text-yellow-600 font-mono font-bold">var</code> (function-scoped), <code className="text-yellow-600 font-mono font-bold">let</code> (block-scoped), and <code className="text-yellow-600 font-mono font-bold">const</code> (block-scoped with immutable binding). Scope defines where variables can be accessed, while the Temporal Dead Zone (TDZ) is the period between entering a block scope and reaching a <code className="text-yellow-600 font-mono">let</code> or <code className="text-yellow-600 font-mono">const</code> variable declaration during which accessing it throws a ReferenceError.
                        </p>
                    </div>

                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-purple-800 dark:text-purple-300 mb-1 flex items-center">
                            <Lightbulb className="w-4 h-4 mr-2" />
                            2. Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            Think of variable scopes like security clearance badges in a building. A global <code className="text-yellow-600 font-mono">var</code> variable is like a master key that works in any hallway (function scope). A <code className="text-yellow-600 font-mono">let</code> or <code className="text-yellow-600 font-mono">const</code> variable is like a specific room keycard valid only inside an assigned office (block scope). Trying to use the office before receiving your keycard is the Temporal Dead Zone (TDZ) — security blocks access until the key is officially assigned to you!
                        </p>
                    </div>

                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                            <Layers className="w-4 h-4 mr-2 text-yellow-500" />
                            3. Temporal Dead Zone (TDZ) Lifecycle (Mermaid.js Diagram)
                        </h4>
                        <MermaidDiagram 
                            chart={`graph TD
    A[Start Block Scope Execution] --> B[Enter Temporal Dead Zone TDZ]
    B --> C{Access Variable Before Declaration?}
    C -- Yes --> D[Throw ReferenceError!]
    C -- No --> E[Reach Declaration: let x = 10]
    E --> F[Exit TDZ - Variable Ready for Usage]`}
                            caption="Figure 1.1: JavaScript Temporal Dead Zone (TDZ) Execution Flow showing how accessing let/const before initialization causes a ReferenceError."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                            This flowchart illustrates how the JS engine protects let and const variables inside block scope until execution reaches their explicit declaration line.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                            <Code className="w-4 h-4 mr-2 text-yellow-500" />
                            4. Sample Code
                        </h4>
                        <CodeBlock 
                            code={`// Hoisting & Temporal Dead Zone (TDZ) Demonstration
console.log("Hoisted var x:", x); // Output: undefined
var x = 10;

try {
    // Accessing 'let' before declaration triggers ReferenceError (TDZ)
    console.log(y); 
} catch (err) {
    console.error("TDZ Error:", err.message); // Cannot access 'y' before initialization
}
let y = 20;

// Const Objects are mutable, but cannot be rebound
const user = { name: "Vinay" };
user.name = "Vinay Mahato"; // Allowed (Property Mutation)
console.log("User:", user);`} 
                            lang="javascript" 
                            colorClass="yellow" 
                            filename="variables.js" 
                        />
                        <p className="text-xs text-gray-500 font-mono mt-1">
                            // Demonstrating var hoisting vs let TDZ protection and const object mutability.
                        </p>
                    </div>

                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center">
                            <Cpu className="w-4 h-4 mr-2" />
                            5. Real-World Application
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            <code className="text-yellow-600 font-mono">const</code> and <code className="text-yellow-600 font-mono">let</code> are used across modern frontend frameworks (React, Vue) and Node.js backend servers to write clean, predictable code without accidental global namespace collisions or state leaks across asynchronous callbacks.
                        </p>
                    </div>

                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center">
                            <Check className="w-4 h-4 mr-2" />
                            6. Advantages
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li><code className="text-yellow-400">let</code> and <code className="text-yellow-400">const</code> prevent variable leakage outside block scopes (<code className="text-yellow-400">{}</code> loops or <code className="text-yellow-400">if</code> blocks).</li>
                            <li>The TDZ catches unintentional usages of uninitialized variables during code execution.</li>
                            <li><code className="text-yellow-400">const</code> ensures immutable identifier bindings, making state management predictable.</li>
                        </ul>
                    </div>

                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center">
                            <AlertTriangle className="w-4 h-4 mr-2" />
                            7. Disadvantages / Limitations
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Legacy code bases using <code className="text-yellow-400">var</code> can experience unexpected variable hoisting behaviors returning <code className="text-yellow-400">undefined</code>.</li>
                            <li><code className="text-yellow-400">const</code> prevents reassigning the variable identifier, but does not freeze internal properties inside nested Objects or Arrays (mutability requires <code className="text-yellow-400">Object.freeze()</code>).</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'js-data-types',
            title: '2. [Beginner] Primitive vs Reference Data Types',
            definition: 'JavaScript has 7 Primitive types stored by value on the Stack memory (string, number, boolean, null, undefined, symbol, bigint) and Reference types stored by memory address on the Heap (Object, Array, Function).',
            syntax: `/* Data Types Syntax Blueprint */
let str = "Hello";              // String (Stack)
let num = 42;                   // Number (Stack)
let obj = { name: "Vinay" };    // Object (Heap Reference)`,
            codeSnippet: `// 1. Primitive Value Copy (Stack Allocation)
let a = 10;
let b = a;
b = 20;
console.log("a:", a, "| b:", b); // a remains 10

// 2. Reference Memory Address Copy (Heap Allocation)
let obj1 = { name: "Vinay" };
let obj2 = obj1; // Copies memory address pointer
obj2.name = "Anjali";
console.log("obj1.name:", obj1.name); // "Anjali"`,
            realLifeScenario: 'State management libraries like React require immutable object clones (via spread `{...obj}`) to prevent unexpected UI mutations caused by shared memory references.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-amber-50 dark:bg-amber-950/20 border-l-4 border-yellow-500 rounded-r-xl">
                        <h4 className="text-md font-bold text-amber-800 dark:text-amber-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Primitive types store immutable values directly in Stack memory, whereas Reference types (Objects, Arrays, Functions) store pointers on the Stack that point to mutable data structures allocated in Heap memory.</p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-purple-800 dark:text-purple-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of primitive values like cash bills in your wallet (handing someone $10 hands them an actual value copy). Reference values are like handing someone a key to a shared house — both of you can open the door and alter the house furniture inside.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-yellow-500" />3. Stack vs Heap Memory Allocation (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph TD
    A[JS Memory Model] --> B["Stack Memory (Fast Value Copies)"]
    A --> C["Heap Memory (Reference Objects)"]
    B --> B1["Primitives: num=42, str='hi', bool=true"]
    C --> C1["Objects, Arrays, Functions via Pointer Address"]`}
                            caption="Figure 2.1: JS Stack Memory vs Heap Memory Allocation."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This diagram compares Stack value storage for primitives with Heap reference allocation for objects.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-yellow-500" />4. Sample Code</h4>
                        <CodeBlock code={`// 1. Primitive Value Copy (Stack Allocation)
let a = 10;
let b = a;
b = 20;
console.log("a:", a, "| b:", b); // a remains 10

// 2. Reference Memory Address Copy (Heap Allocation)
let obj1 = { name: "Vinay" };
let obj2 = obj1; // Copies memory address pointer
obj2.name = "Anjali";
console.log("obj1.name:", obj1.name); // "Anjali"`} lang="javascript" colorClass="yellow" filename="datatypes.js" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Immutable state updates in Redux and React require cloning objects to force UI component re-renders.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Primitive stack values allow ultra-fast memory access and comparisons.</li>
                            <li>Heap reference sharing enables large data structures to be passed into functions without expensive copying.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Accidental shared reference mutations cause unexpected state bugs across modules.</li>
                            <li><code className="text-yellow-400">typeof null</code> returning <code className="text-yellow-400">"object"</code> requires explicit null check handling.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'js-operators',
            title: '3. [Beginner] Operators & Nullish Coalescing (??, ?.)',
            definition: 'Operators perform data calculations. Modern JS introduces Optional Chaining (?.) to prevent undefined property crashes and Nullish Coalescing (??) for fallback evaluation.',
            syntax: `let res = val ?? fallback; /* Triggers ONLY for null or undefined */
let city = user?.address?.city;`,
            codeSnippet: `const settings = { volume: 0, theme: null };

// Logical OR (||) incorrectly treats 0 as falsy
const volOR = settings.volume || 50; // 50 ❌

// Nullish Coalescing (??) respects 0
const volNullish = settings.volume ?? 50; // 0 ✓
console.log("Volume:", volNullish);

// Optional Chaining
const zip = settings.user?.address?.zip; // undefined (No TypeError crash!)`,
            realLifeScenario: 'API response objects nested deeply (e.g., `response?.data?.user?.avatar`) use optional chaining to prevent `TypeError: Cannot read properties of undefined` crashes.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-amber-50 dark:bg-amber-950/20 border-l-4 border-yellow-500 rounded-r-xl">
                        <h4 className="text-md font-bold text-amber-800 dark:text-amber-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">JavaScript operators evaluate expressions. Modern additions like Optional Chaining (<code className="font-mono text-yellow-600">?.</code>) short-circuit nested property accesses if a parent key is null/undefined, while Nullish Coalescing (<code className="font-mono text-yellow-600">??</code>) sets fallback values strictly when left-hand operands are null or undefined.</p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-purple-800 dark:text-purple-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Optional chaining is like ringing a house doorbell only if the house gate is open; if the gate is locked, you safely turn back without breaking the front door lock.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-yellow-500" />3. Optional Chaining &amp; Nullish Evaluation (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`flowchart TD
    A[Evaluate user?.address?.city] --> B{user.address exists?}
    B -- No --> C[Return undefined - No Crash]
    B -- Yes --> D[Return city value]
    D --> E{city ?? 'Default City'}
    E -- Null / Undefined --> F[Return 'Default City']
    E -- Valid Value --> G[Return city]`}
                            caption="Figure 3.1: Optional Chaining and Nullish Coalescing Evaluation Flowchart."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This flowchart demonstrates how optional chaining prevents runtime type error crashes.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-yellow-500" />4. Sample Code</h4>
                        <CodeBlock code={`const settings = { volume: 0, theme: null };

// Logical OR (||) incorrectly treats 0 as falsy
const volOR = settings.volume || 50; // 50 ❌

// Nullish Coalescing (??) respects 0
const volNullish = settings.volume ?? 50; // 0 ✓
console.log("Volume:", volNullish);

// Optional Chaining
const zip = settings.user?.address?.zip; // undefined (No TypeError crash!)`} lang="javascript" colorClass="yellow" filename="operators.js" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Safely reading deeply nested JSON data payloads returned from asynchronous backend APIs.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li><code className="text-yellow-400">?.</code> eliminates verbose guard conditions (<code className="text-yellow-400">if (a &amp;&amp; a.b &amp;&amp; a.b.c)</code>).</li>
                            <li><code className="text-yellow-400">??</code> correctly preserves valid falsy values like <code className="text-yellow-400">0</code>, <code className="text-yellow-400">""</code>, and <code className="text-yellow-400">false</code>.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Optional chaining cannot be used on the left-hand side of assignments (<code className="text-yellow-400">user?.name = 'Vinay'</code> is invalid).</li>
                            <li>Combining <code className="text-yellow-400">??</code> and <code className="text-yellow-400">&amp;&amp;</code> / <code className="text-yellow-400">||</code> without explicit parentheses throws a SyntaxError.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'js-conditionals',
            title: '4. [Beginner] Conditionals & Control Flow',
            definition: 'Conditionals (if...else, ternary operator ? :, switch...case) execute specific code branches based on truthy or falsy boolean evaluations.',
            syntax: `if (condition) { } else { }
const status = isMember ? "Active" : "Guest";`,
            codeSnippet: `const userRole = "ADMIN";

switch (userRole) {
    case "ADMIN":
        console.log("Full Admin Access Granted.");
        break;
    case "USER":
        console.log("Standard User Access.");
        break;
    default:
        console.log("Guest Access Only.");
}`,
            realLifeScenario: 'RBAC (Role-Based Access Control) in web applications uses conditional evaluation to selectively display admin control buttons.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-amber-50 dark:bg-amber-950/20 border-l-4 border-yellow-500 rounded-r-xl">
                        <h4 className="text-md font-bold text-amber-800 dark:text-amber-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Conditional control flow statements (<code className="font-mono text-yellow-600">if...else</code>, <code className="font-mono text-yellow-600">switch</code>, Ternary <code className="font-mono text-yellow-600">? :</code>) evaluate boolean conditions to direct program execution along specified code paths.</p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-purple-800 dark:text-purple-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of conditional control flow like a fork in a highway. Checking the road signs (conditions) decides whether your vehicle turns left towards the city center or right towards the airport.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-yellow-500" />3. Conditional Control Branching (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`flowchart TD
    A[Start Conditional Check] --> B{role === 'ADMIN'?}
    B -- True --> C[Grant Admin Full Permissions]
    B -- False --> D{role === 'USER'?}
    D -- True --> E[Grant Standard User Permissions]
    D -- False --> F[Restrict Access to Guest Mode]`}
                            caption="Figure 4.1: Role-Based Access Control Conditional Flowchart."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This flowchart demonstrates decision diamond branching based on conditional equality evaluations.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-yellow-500" />4. Sample Code</h4>
                        <CodeBlock code={`const userRole = "ADMIN";

switch (userRole) {
    case "ADMIN":
        console.log("Full Admin Access Granted.");
        break;
    case "USER":
        console.log("Standard User Access.");
        break;
    default:
        console.log("Guest Access Only.");
}`} lang="javascript" colorClass="yellow" filename="conditionals.js" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">User authentication authorization guards and dynamic UI component rendering.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Enables dynamic decision-making capabilities inside algorithms.</li>
                            <li>Ternary operators provide clean inline conditional rendering syntax in JSX.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Deeply nested <code className="text-yellow-400">if...else</code> blocks reduce code readability (cyclomatic complexity).</li>
                            <li>Forgetting <code className="text-yellow-400">break</code> statements in <code className="text-yellow-400">switch</code> blocks causes unintended fallthrough bugs.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'js-loops',
            title: '5. [Beginner] Loops & Iteration (for, for...of, for...in)',
            definition: 'Loops repeat code execution. `for...of` iterates over iterable data values (Arrays, Strings, Sets), while `for...in` iterates over Object property keys.',
            syntax: `for (const item of array) { }    /* Array Values */
for (const key in object) { }    /* Object Keys */`,
            codeSnippet: `const fruits = ["Apple", "Banana", "Cherry"];
const user = { name: "Vinay", role: "Dev" };

// Array Values via for...of
for (const fruit of fruits) {
    console.log("Fruit:", fruit);
}

// Object Keys via for...in
for (const key in user) {
    console.log(\`\${key}: \${user[key]}\`);
}`,
            realLifeScenario: 'Processing list data received from API arrays uses for...of or high-order array methods.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-amber-50 dark:bg-amber-950/20 border-l-4 border-yellow-500 rounded-r-xl">
                        <h4 className="text-md font-bold text-amber-800 dark:text-amber-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Loop statements repeat code blocks until a termination condition is met. Modern JavaScript provides <code className="font-mono text-yellow-600">for...of</code> for traversing iterable values (Arrays, Strings) and <code className="font-mono text-yellow-600">for...in</code> for enumerating Object keys.</p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-purple-800 dark:text-purple-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of a loop like a postman delivering mail house-by-house along a street. The postman repeats the same action (delivering mail) for each house in the list until reaching the end of the street.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-yellow-500" />3. Loop Types &amp; Targets (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph TD
    A[JS Loop Statements] --> B["for...of Loop"]
    A --> C["for...in Loop"]
    B --> B1[Iterates Array & String Values]
    C --> C1[Enumerates Object Property Keys]`}
                            caption="Figure 5.1: JS Iteration Loops: for...of vs for...in targets."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This diagram compares value iteration with property key enumeration.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-yellow-500" />4. Sample Code</h4>
                        <CodeBlock code={`const fruits = ["Apple", "Banana", "Cherry"];
const user = { name: "Vinay", role: "Dev" };

// Array Values via for...of
for (const fruit of fruits) {
    console.log("Fruit:", fruit);
}

// Object Keys via for...in
for (const key in user) {
    console.log(\`\${key}: \${user[key]}\`);
}`} lang="javascript" colorClass="yellow" filename="loops.js" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Iterating through API response lists to render rows in dynamic data tables.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li><code className="text-yellow-400">for...of</code> works seamlessly on ES6 Set and Map data structures.</li>
                            <li>Automates repetitive data processing tasks efficiently.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Infinite loops without termination conditions lock browser CPU main threads.</li>
                            <li>Using <code className="text-yellow-400">for...in</code> over arrays iterates prototype properties unexpectedly.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'js-functions-basics',
            title: '6. [Beginner] Functions, Parameters & Rest Arguments',
            definition: 'Functions package reusable logic blocks. JS supports Function Declarations, Function Expressions, Default Parameters, and Rest Arguments (...args).',
            syntax: `function calc(a, b = 10) { }
const sum = (...nums) => nums.reduce((a,b) => a+b, 0);`,
            codeSnippet: `// Function with Default & Rest Parameters
function calculateCart(taxRate = 0.18, ...prices) {
    const subtotal = prices.reduce((acc, curr) => acc + curr, 0);
    return subtotal + (subtotal * taxRate);
}

console.log("Cart Total: ₹", calculateCart(0.18, 100, 250, 450));`,
            realLifeScenario: 'E-commerce checkout functions accept flexible rest argument items to compute sub-totals and taxes.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-amber-50 dark:bg-amber-950/20 border-l-4 border-yellow-500 rounded-r-xl">
                        <h4 className="text-md font-bold text-amber-800 dark:text-amber-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Functions encapsulate reusable statements. Modern JS features Default Parameters for fallback values and Rest Parameters (<code className="font-mono text-yellow-600">...args</code>) to collect arbitrary numbers of arguments into an array.</p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-purple-800 dark:text-purple-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of a function like a blender. You throw raw ingredients (parameters) into the top, press the start button (invocation), and pour out a blended smoothie (return value).</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-yellow-500" />3. Function Rest Parameter Pipeline (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph LR
    A["Function Call: fn(100, 250, 450)"] --> B["Rest Parameter ...prices"]
    B --> C["Array Created: [100, 250, 450]"]
    C --> D[Execute Function Body]
    D --> E[Return Computed Total]`}
                            caption="Figure 6.1: Rest Parameters gathering arguments into an array."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This diagram demonstrates how rest arguments consolidate incoming function inputs.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-yellow-500" />4. Sample Code</h4>
                        <CodeBlock code={`// Function with Default & Rest Parameters
function calculateCart(taxRate = 0.18, ...prices) {
    const subtotal = prices.reduce((acc, curr) => acc + curr, 0);
    return subtotal + (subtotal * taxRate);
}

console.log("Cart Total: ₹", calculateCart(0.18, 100, 250, 450));`} lang="javascript" colorClass="yellow" filename="functions.js" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Utility functions computing tax totals, string formatters, and event payload handlers.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Promotes code DRYness (Don't Repeat Yourself) by packaging logic into reusable units.</li>
                            <li><code className="text-yellow-400">...rest</code> parameters replace legacy un-typed <code className="text-yellow-400">arguments</code> objects.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Rest parameters must always be placed as the final parameter in function signatures.</li>
                            <li>Overusing global functions leads to namespace collisions.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'js-arrays-objects-basics',
            title: '7. [Beginner] Arrays & Objects Foundations',
            definition: 'Arrays store ordered lists of elements, while Objects store unordered key-value pairs representing entity properties.',
            syntax: `const list = [1, 2, 3];
const user = { name: "Vinay", age: 25 };`,
            codeSnippet: `const student = {
    id: 101,
    name: "Vinay Mahato",
    skills: ["JavaScript", "Python"],
    address: { city: "Delhi" }
};

student.skills.push("React");
console.log("Name:", student.name);
console.log("Skills:", student.skills);`,
            realLifeScenario: 'JSON data payloads received from REST backend servers are parsed into nested JavaScript Objects and Arrays.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-amber-50 dark:bg-amber-950/20 border-l-4 border-yellow-500 rounded-r-xl">
                        <h4 className="text-md font-bold text-amber-800 dark:text-amber-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Arrays store ordered, index-based lists of values, while Objects store key-value dictionary pairs that describe an entity's properties and methods.</p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-purple-800 dark:text-purple-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">An Array is like a numbered egg carton (slot 0, slot 1, slot 2 holding items in order). An Object is like a contact card in your phone with labeled fields (Name, Phone, Email).</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-yellow-500" />3. Objects vs Arrays Structure (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph TD
    A[JS Data Containers] --> B["Array: Indexed List [0, 1, 2]"]
    A --> C["Object: Key-Value Pairs { key: val }"]
    B --> B1[Order Preserved - Dynamic Sizing]
    C --> C1[Property Access via Dot or Bracket Syntax]`}
                            caption="Figure 7.1: Arrays (Indexed Lists) vs Objects (Key-Value Dictionaries)."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This diagram compares indexed array memory layout with key-value object structures.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-yellow-500" />4. Sample Code</h4>
                        <CodeBlock code={`const student = {
    id: 101,
    name: "Vinay Mahato",
    skills: ["JavaScript", "Python"],
    address: { city: "Delhi" }
};

student.skills.push("React");
console.log("Name:", student.name);
console.log("Skills:", student.skills);`} lang="javascript" colorClass="yellow" filename="structures.js" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Modeling complex API JSON response payloads returned from REST or GraphQL backend services.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Objects allow intuitive key-based property lookups (<code className="text-yellow-400">user.name</code>).</li>
                            <li>Arrays provide rich built-in utility methods (<code className="text-yellow-400">push</code>, <code className="text-yellow-400">pop</code>, <code className="text-yellow-400">slice</code>, <code className="text-yellow-400">splice</code>).</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Searching unsorted arrays requires O(N) linear time complexity scans.</li>
                            <li>Accessing non-existent object keys returns <code className="text-yellow-400">undefined</code> instead of throwing early errors.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'js-dom-manipulation',
            title: '8. [Beginner] DOM Manipulation & Event Handling',
            definition: 'The Document Object Model (DOM) represents the webpage as a tree of objects. JS inspects, modifies, creates, and attaches event listeners to DOM nodes.',
            syntax: `const btn = document.querySelector('.btn');
btn.addEventListener('click', (e) => { });`,
            codeSnippet: `const btn = document.querySelector('#btn-add');
const container = document.querySelector('.list-container');

btn?.addEventListener('click', () => {
    const item = document.createElement('div');
    item.className = 'item p-2 bg-yellow-100 rounded my-1';
    item.textContent = "New Item added!";
    container?.appendChild(item);
});`,
            realLifeScenario: 'Client-side web applications dynamically update DOM trees upon user interactions without requiring complete page reloads.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-amber-50 dark:bg-amber-950/20 border-l-4 border-yellow-500 rounded-r-xl">
                        <h4 className="text-md font-bold text-amber-800 dark:text-amber-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">DOM Manipulation utilizes JavaScript APIs to dynamically query elements (<code className="font-mono text-yellow-600">querySelector</code>), update contents (<code className="font-mono text-yellow-600">textContent</code>), create nodes (<code className="font-mono text-yellow-600">createElement</code>), and respond to user clicks via <code className="font-mono text-yellow-600">addEventListener</code>.</p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-purple-800 dark:text-purple-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of DOM manipulation like an interactive scorekeeper at a stadium. When a team scores (user event), the scorekeeper updates the digital scoreboard numbers instantly.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-yellow-500" />3. DOM Event Update Cycle (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`sequenceDiagram
    autonumber
    User->>DOM Element: Click Button Trigger
    DOM Element->>Event Listener: Dispatch Click Event
    Event Listener->>JS Script: Execute Handler Function
    JS Script->>DOM Node: Update textContent / appendChild
    DOM Node-->>User: Re-render Updated UI Canvas`}
                            caption="Figure 8.1: DOM Event Listener and UI Node Update Sequence."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This sequence diagram traces DOM updates from user clicks through handler execution.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-yellow-500" />4. Sample Code</h4>
                        <CodeBlock code={`const btn = document.querySelector('#btn-add');
const container = document.querySelector('.list-container');

btn?.addEventListener('click', () => {
    const item = document.createElement('div');
    item.className = 'item p-2 bg-yellow-100 rounded my-1';
    item.textContent = "New Item added!";
    container?.appendChild(item);
});`} lang="javascript" colorClass="yellow" filename="dom.js" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Building interactive single-page application (SPA) UIs and web form validation controls.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Enables dynamic real-time user interface updates without full page reloads.</li>
                            <li><code className="text-yellow-400">textContent</code> protects against Cross-Site Scripting (XSS) HTML injection attacks.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Excessive direct DOM manipulation triggers expensive browser layout reflows.</li>
                            <li>Unbounded event listeners cause memory leaks if not unmounted properly.</li>
                        </ul>
                    </div>
                </div>
            )
        },

        // ==================== INTERMEDIATE TIER ====================
        {
            id: 'js-es6-features',
            title: '9. [Intermediate] ES6+ Features (Arrow Functions, Destructuring, Spread)',
            definition: 'ES6+ introduced Arrow Functions, Template Literals, Destructuring Assignment, and the Spread/Rest operator (...) to write concise code.',
            syntax: `const fn = ({ name }) => \`Hello \${name}\`;
const copy = { ...originalObj };`,
            codeSnippet: `const user = { id: 1, name: "Vinay", role: "Dev" };

// Destructuring & Template Literals
const { name, role } = user;
console.log(\`User \${name} is a \${role}\`);

// Spread Operator Copy
const updatedUser = { ...user, role: "Lead Dev", status: "Active" };
console.log("Updated User:", updatedUser);`,
            realLifeScenario: 'React components rely heavily on object destructuring for component props (`const Button = ({ label, onClick }) => ...`).',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-amber-50 dark:bg-amber-950/20 border-l-4 border-yellow-500 rounded-r-xl">
                        <h4 className="text-md font-bold text-amber-800 dark:text-amber-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">ES6+ syntax enhancements modernize JavaScript development with Arrow Functions, Template Literals, Object/Array Destructuring, and the Spread operator (<code className="font-mono text-yellow-600">...</code>) for clean immutable copies.</p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-purple-800 dark:text-purple-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Destructuring is like unboxing a multi-tool kit and picking out only the specific screwdriver and wrench tools you need immediately, without carrying the heavy box around.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-yellow-500" />3. ES6+ Features Overview (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph LR
    A[ES6+ Language Features] --> B["Arrow Functions () => {}"]
    A --> C["Destructuring { x, y }"]
    A --> D["Spread Operator {...obj}"]
    A --> E["Template Literals \`Hi \${name}\`"]`}
                            caption="Figure 9.1: Core ES6+ Language Feature Enhancements."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This diagram highlights modern ES6+ language feature additions.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-yellow-500" />4. Sample Code</h4>
                        <CodeBlock code={`const user = { id: 1, name: "Vinay", role: "Dev" };

// Destructuring & Template Literals
const { name, role } = user;
console.log(\`User \${name} is a \${role}\`);

// Spread Operator Copy
const updatedUser = { ...user, role: "Lead Dev", status: "Active" };
console.log("Updated User:", updatedUser);`} lang="javascript" colorClass="yellow" filename="es6.js" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Writing concise React component props and managing immutable state updates.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Drastically reduces boilerplate code across frontend and backend JS codebases.</li>
                            <li>Spread operators facilitate clean, shallow immutable object cloning.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Arrow functions do not have their own <code className="text-yellow-400">this</code> or <code className="text-yellow-400">arguments</code> objects.</li>
                            <li>Object spread creates a shallow copy, not a deep recursive clone.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'js-array-methods',
            title: '10. [Intermediate] High-Order Array Methods (map, filter, reduce)',
            definition: 'Array iteration methods (map, filter, reduce, find, flatMap) operate on arrays functionally without mutating the original source array.',
            syntax: `const doubled = arr.map(x => x * 2);
const evens = arr.filter(x => x % 2 === 0);
const total = arr.reduce((acc, x) => acc + x, 0);`,
            codeSnippet: `const items = [
    { name: "Laptop", price: 1000, type: "TECH" },
    { name: "Shirt", price: 50, type: "CLOTHING" },
    { name: "Phone", price: 500, type: "TECH" }
];

// Filter Tech Items -> Map Prices -> Reduce Total
const totalTechCost = items
    .filter(item => item.type === "TECH")
    .map(item => item.price)
    .reduce((sum, price) => sum + price, 0);

console.log("Total Tech Cost: $", totalTechCost);`,
            realLifeScenario: 'Data tables filter, search, and aggregate raw API response arrays before rendering rows in UIs.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-amber-50 dark:bg-amber-950/20 border-l-4 border-yellow-500 rounded-r-xl">
                        <h4 className="text-md font-bold text-amber-800 dark:text-amber-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">High-order array methods (<code className="font-mono text-yellow-600">map</code>, <code className="font-mono text-yellow-600">filter</code>, <code className="font-mono text-yellow-600">reduce</code>) accept callback functions to transform, filter, and aggregate array elements immutably without altering the original array.</p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-purple-800 dark:text-purple-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of high-order array methods like an assembly line: <code className="font-mono">filter</code> inspects items and discards defective ones, <code className="font-mono">map</code> paints every valid item blue, and <code className="font-mono">reduce</code> counts the total completed items into a single summary box.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-yellow-500" />3. High-Order Array Pipeline (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph LR
    A["Raw Array [10, 20, 30, 40]"] -->|filter(x > 15)| B["Filtered Array [20, 30, 40]"]
    B -->|map(x * 2)| C["Mapped Array [40, 60, 80]"]
    C -->|reduce(acc + x)| D["Final Total: 180"]`}
                            caption="Figure 10.1: Chaining High-Order Array Methods (filter -> map -> reduce)."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This diagram demonstrates functional chaining of filter, map, and reduce array pipelines.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-yellow-500" />4. Sample Code</h4>
                        <CodeBlock code={`const items = [
    { name: "Laptop", price: 1000, type: "TECH" },
    { name: "Shirt", price: 50, type: "CLOTHING" },
    { name: "Phone", price: 500, type: "TECH" }
];

// Filter Tech Items -> Map Prices -> Reduce Total
const totalTechCost = items
    .filter(item => item.type === "TECH")
    .map(item => item.price)
    .reduce((sum, price) => sum + price, 0);

console.log("Total Tech Cost: $", totalTechCost);`} lang="javascript" colorClass="yellow" filename="array-methods.js" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Filtering, mapping, and aggregating API data responses in UI components.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Promotes declarative functional programming patterns over imperative loops.</li>
                            <li>Immutability ensures the source array remains untouched.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Chaining multiple methods creates intermediate array allocations in memory.</li>
                            <li>Forgetting an initial accumulator value in <code className="text-yellow-400">reduce()</code> throws a TypeError on empty arrays.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'js-event-propagation',
            title: '11. [Intermediate] Event Propagation & Delegation',
            definition: 'DOM events propagate through 3 phases: Capturing (down), Target, and Bubbling (up). Event Delegation attaches a single listener to a parent container to manage events for present and future child elements.',
            syntax: `parent.addEventListener('click', (e) => {
    if (e.target.matches('.child-btn')) { }
});`,
            codeSnippet: `const tableBody = document.querySelector('#table-body');

// Single Listener on parent handles all dynamic child row deletes
tableBody?.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-delete');
    if (btn) {
        const id = btn.dataset.id;
        console.log("Deleting Row ID:", id);
        btn.closest('tr')?.remove();
    }
});`,
            realLifeScenario: 'Large dynamic data tables attach 1 event listener to `<tbody>` instead of attaching 10,000 separate event listeners to every row button, saving memory.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-amber-50 dark:bg-amber-950/20 border-l-4 border-yellow-500 rounded-r-xl">
                        <h4 className="text-md font-bold text-amber-800 dark:text-amber-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Event Propagation travels through Capturing (Phase 1 down), Target (Phase 2), and Bubbling (Phase 3 up). Event Delegation leverages bubbling by attaching a single event listener to a parent container to manage dynamic child events.</p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-purple-800 dark:text-purple-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of event delegation like a hotel front desk. Instead of having a security guard standing outside every individual hotel room door, one receptionist at the lobby desk receives all incoming visitor requests for any room.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-yellow-500" />3. Event Propagation &amp; Delegation (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph TD
    A[Window Document] -->|Phase 1: Capturing Down| B[Parent Table Body]
    B -->|Phase 2: Target Click| C[Child Button Clicked]
    C -->|Phase 3: Event Bubbles Up| B
    B -->|Delegated Listener Handles Event| D[Execute Delete Action]`}
                            caption="Figure 11.1: Event Propagation Phases and Event Delegation Handling."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This diagram demonstrates event capture, target interaction, and bubbling delegation.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-yellow-500" />4. Sample Code</h4>
                        <CodeBlock code={`const tableBody = document.querySelector('#table-body');

// Single Listener on parent handles all dynamic child row deletes
tableBody?.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-delete');
    if (btn) {
        const id = btn.dataset.id;
        console.log("Deleting Row ID:", id);
        btn.closest('tr')?.remove();
    }
});`} lang="javascript" colorClass="yellow" filename="delegation.js" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Handling clicks on dynamic data table rows or infinite scrolling feed lists efficiently.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Drastically reduces RAM memory consumption by avoiding thousands of event listeners.</li>
                            <li>Automatically handles click events for dynamically added child elements.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Not all DOM events bubble up the tree (e.g. <code className="text-yellow-400">focus</code>, <code className="text-yellow-400">blur</code>, <code className="text-yellow-400">mouseenter</code>).</li>
                            <li>Calling <code className="text-yellow-400">e.stopPropagation()</code> breaks parent delegation listeners.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'js-json-serialization',
            title: '12. [Intermediate] JSON Parsing & Serialization',
            definition: 'JSON (JavaScript Object Notation) is a lightweight text-based data-interchange format. `JSON.stringify()` serializes JS objects to JSON strings; `JSON.parse()` deserializes JSON strings back into objects.',
            syntax: `const str = JSON.stringify(obj);
const obj = JSON.parse(str);`,
            codeSnippet: `const state = { id: 101, name: "Vinay", roles: ["Dev"] };

// Serialize & Save
const json = JSON.stringify(state);
localStorage.setItem('session', json);

// Deserialize & Restore
const restored = JSON.parse(localStorage.getItem('session') || '{}');
console.log("Restored Name:", restored.name);`,
            realLifeScenario: 'Web browsers transmit serialized JSON payloads over HTTP requests when calling backend API web services.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-amber-50 dark:bg-amber-950/20 border-l-4 border-yellow-500 rounded-r-xl">
                        <h4 className="text-md font-bold text-amber-800 dark:text-amber-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">JSON Serialization converts JavaScript memory objects into plain text strings (<code className="font-mono text-yellow-600">JSON.stringify</code>) for network transmission or LocalStorage, while Parsing (<code className="font-mono text-yellow-600">JSON.parse</code>) converts JSON text back into objects.</p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-purple-800 dark:text-purple-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of JSON serialization like dismantling a bicycle into a compact flat cardboard box for shipping in the mail. When the recipient receives the box, they unpack and rebuild the bicycle back into its original working form (parsing).</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-yellow-500" />3. JSON Serialization &amp; Parsing Pipeline (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph LR
    A[JS Memory Object] -->|JSON.stringify| B["JSON String Text ('{name: Vinay}')"]
    B -->|Network HTTP / LocalStorage| C[Client Receiver]
    C -->|JSON.parse| D[Restored JS Object]`}
                            caption="Figure 12.1: JSON Object Serialization and Parsing Pipeline."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This diagram outlines stringifying objects for storage and parsing JSON back into memory.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-yellow-500" />4. Sample Code</h4>
                        <CodeBlock code={`const state = { id: 101, name: "Vinay", roles: ["Dev"] };

// Serialize & Save
const json = JSON.stringify(state);
localStorage.setItem('session', json);

// Deserialize & Restore
const restored = JSON.parse(localStorage.getItem('session') || '{}');
console.log("Restored Name:", restored.name);`} lang="javascript" colorClass="yellow" filename="json.js" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Transmitting HTTP POST payloads and persisting user session state in LocalStorage.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Universal, language-agnostic text format supported across all programming languages.</li>
                            <li>Lightweight data serialization format for web API communication.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li><code className="text-yellow-400">JSON.stringify()</code> strips functions, symbols, and <code className="text-yellow-400">undefined</code> values.</li>
                            <li>Parsing malformed JSON syntax strings throws an unhandled SyntaxError crash.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'js-closures',
            title: '13. [Intermediate] Closures & Lexical Environment',
            definition: 'A closure is the combination of a function bundled together with references to its surrounding lexical environment. Closures allow an inner function to access an outer function\'s scope even after the outer function has returned.',
            syntax: `function outer() {
    let count = 0;
    return () => ++count; // Closure remembers count
}`,
            codeSnippet: `function createCounter() {
    let count = 0; // Encapsulated private variable
    return {
        inc: () => ++count,
        get: () => count
    };
}

const counter = createCounter();
console.log(counter.inc()); // 1
console.log(counter.inc()); // 2
console.log(counter.get()); // 2`,
            realLifeScenario: 'Encapsulating private variables via closures prevents external code from mutating internal component states directly.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-amber-50 dark:bg-amber-950/20 border-l-4 border-yellow-500 rounded-r-xl">
                        <h4 className="text-md font-bold text-amber-800 dark:text-amber-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">A closure is created whenever a function is defined, giving the inner function persistent access to variables in its parent lexical environment even after the parent function execution has completed.</p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-purple-800 dark:text-purple-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of a closure like a backpack. When a student leaves school (parent function finishes executing), they take their backpack full of books (lexical scope variables) with them wherever they go.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-yellow-500" />3. Closure Lexical Environment Scope (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph TD
    A[outerFunction Execution] --> B[Encapsulated Variable: count = 0]
    A --> C[Return innerFunction Reference]
    C --> D[Outer Function Exits Stack]
    D --> E["innerFunction Retains Lexical Closure Access to 'count'"]`}
                            caption="Figure 13.1: Closure Scope Retention after Parent Function returns."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This diagram demonstrates how inner functions retain lexical scope variable bindings via closures.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-yellow-500" />4. Sample Code</h4>
                        <CodeBlock code={`function createCounter() {
    let count = 0; // Encapsulated private variable
    return {
        inc: () => ++count,
        get: () => count
    };
}

const counter = createCounter();
console.log(counter.inc()); // 1
console.log(counter.inc()); // 2
console.log(counter.get()); // 2`} lang="javascript" colorClass="yellow" filename="closure.js" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">React custom hooks (`useCustomHook`) rely on closures to preserve state values between component renders.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Enables private variable encapsulation without exposing properties globally.</li>
                            <li>Preserves state across asynchronous event handlers and callbacks.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Unused closures holding references to large objects cause V8 memory leaks.</li>
                            <li>Increases memory overhead because outer scope variables are retained in memory.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'js-scope-hoisting',
            title: '14. [Intermediate] Scope Chains & Variable Hoisting',
            definition: 'Scope defines variable accessibility (Global, Function, Block scope). Hoisting is JS\'s default behavior of moving function declarations and variable names to the top of their containing scope during creation phase.',
            syntax: `/* Scope Lookup Hierarchy: */
Block Scope -> Function Scope -> Global Scope`,
            codeSnippet: `const globalVal = "Global";

function outer() {
    const outerVal = "Outer";
    function inner() {
        const innerVal = "Inner";
        // Scope Chain resolves innerVal, outerVal, globalVal
        console.log(\`\${innerVal} -> \${outerVal} -> \${globalVal}\`);
    }
    inner();
}
outer();`,
            realLifeScenario: 'Understanding scope prevents accidental global variable leaks when developing multi-module web applications.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-amber-50 dark:bg-amber-950/20 border-l-4 border-yellow-500 rounded-r-xl">
                        <h4 className="text-md font-bold text-amber-800 dark:text-amber-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">The Scope Chain dictates how JavaScript resolves variable names by searching outward from current block scope to function scope, up to global scope. Hoisting moves function declarations and variable names to scope tops during compilation.</p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-purple-800 dark:text-purple-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of the scope chain like looking for an item in nested boxes. You check your immediate small box first; if missing, you check the larger container box, and finally check the entire room storage.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-yellow-500" />3. Scope Chain Resolution Tree (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph TD
    A[Block Scope innerVal] -->|Not Found? Search Up| B[Function Scope outerVal]
    B -->|Not Found? Search Up| C[Global Scope globalVal]
    C -->|Not Found?| D[Throw ReferenceError]`}
                            caption="Figure 14.1: Scope Chain Variable Resolution Lookup."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This diagram illustrates outward variable resolution along the lexical scope chain.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-yellow-500" />4. Sample Code</h4>
                        <CodeBlock code={`const globalVal = "Global";

function outer() {
    const outerVal = "Outer";
    function inner() {
        const innerVal = "Inner";
        // Scope Chain resolves innerVal, outerVal, globalVal
        console.log(\`\${innerVal} -> \${outerVal} -> \${globalVal}\`);
    }
    inner();
}
outer();`} lang="javascript" colorClass="yellow" filename="scope.js" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Architecting clean modular JavaScript files without polluting global window scope namespaces.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Isolates variables inside block scopes, preventing accidental variable overwriting.</li>
                            <li>Function declarations are hoisted completely, allowing invocation before definition lines.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Implicit global variables (omitting <code className="text-yellow-400">let/const</code>) pollute global window scope.</li>
                            <li>Variable hoisting with <code className="text-yellow-400">var</code> returns <code className="text-yellow-400">undefined</code> silently instead of erroring.</li>
                        </ul>
                    </div>
                </div>
            )
        },

        // ==================== ADVANCED TIER ====================
        {
            id: 'js-prototypes-classes',
            title: '15. [Advanced] Prototypes & ES6 Class Inheritance',
            definition: 'JavaScript uses Prototypal Inheritance. Objects inherit methods and properties directly from prototype objects via the prototype chain (__proto__). ES6 classes are syntactical sugar over prototypes.',
            syntax: `class Parent { constructor(n) { this.name = n; } }
class Child extends Parent { constructor(n) { super(n); } }`,
            codeSnippet: `class User {
    constructor(name) { this.name = name; }
    greet() { return \`Hello \${this.name}\`; }
}

class Admin extends User {
    constructor(name, role) {
        super(name);
        this.role = role;
    }
}

const admin = new Admin("Vinay", "SuperAdmin");
console.log(admin.greet()); // Inherited method`,
            realLifeScenario: 'Object-Oriented JavaScript architectures in Node.js backend services organize data models and database repositories into class hierarchies.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-amber-50 dark:bg-amber-950/20 border-l-4 border-yellow-500 rounded-r-xl">
                        <h4 className="text-md font-bold text-amber-800 dark:text-amber-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">JavaScript utilizes Prototypal Inheritance where objects link directly to prototype objects via internal pointers (<code className="font-mono text-yellow-600">__proto__</code>). ES6 <code className="font-mono text-yellow-600">class</code> syntax provides clean object-oriented class syntax over prototypal chains.</p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-purple-800 dark:text-purple-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of prototype inheritance like family traits passed down through generations. A child inherits their parent's blue eyes without having to re-create eye color from scratch.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-yellow-500" />3. Prototype Chain Inheritance Tree (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph TD
    A["admin Instance (Admin)"] -->|__proto__| B["Admin.prototype"]
    B -->|__proto__| C["User.prototype (greet method)"]
    C -->|__proto__| D["Object.prototype"]
    D -->|__proto__| E[null Base]`}
                            caption="Figure 15.1: JavaScript Prototype Chain Lookup Hierarchy."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This diagram shows how property lookups traverse up the prototype chain to Object.prototype.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-yellow-500" />4. Sample Code</h4>
                        <CodeBlock code={`class User {
    constructor(name) { this.name = name; }
    greet() { return \`Hello \${this.name}\`; }
}

class Admin extends User {
    constructor(name, role) {
        super(name);
        this.role = role;
    }
}

const admin = new Admin("Vinay", "SuperAdmin");
console.log(admin.greet()); // Inherited method`} lang="javascript" colorClass="yellow" filename="classes.js" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Node.js backend architectures organizing database ORM models and service repositories.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Prototype method sharing saves RAM memory by allocating methods once on the prototype object.</li>
                            <li>ES6 <code className="text-yellow-400">class</code> and <code className="text-yellow-400">extends</code> syntax makes object-oriented programming intuitive.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Deep prototype chains slow down property lookup performance.</li>
                            <li>ES6 classes are syntactical sugar; JS remains a prototypal language under the hood.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'js-this-binding',
            title: '16. [Advanced] this Keyword Binding Rules',
            definition: 'The value of this depends on how a function is called: Default binding (window/undefined), Implicit binding (obj.method()), Explicit binding (call, apply, bind), or Lexical binding (Arrow functions).',
            syntax: `fn.call(thisArg, arg1);     /* Immediate call */
fn.apply(thisArg, [arg1]);   /* Immediate call with array */
const bound = fn.bind(thisArg);/* Return bound copy */`,
            codeSnippet: `const person = {
    name: "Vinay",
    greet: function() { console.log("Name:", this.name); }
};

person.greet(); // Implicit binding -> "Vinay"

function showRole(role) {
    console.log(\`\${this.name} is a \${role}\`);
}

// Explicit Binding via call & bind
showRole.call(person, "Developer");
const boundFn = showRole.bind(person, "Architect");
boundFn();`,
            realLifeScenario: 'Event handler methods in class components require binding to maintain `this` references to class instances.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-amber-50 dark:bg-amber-950/20 border-l-4 border-yellow-500 rounded-r-xl">
                        <h4 className="text-md font-bold text-amber-800 dark:text-amber-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">The <code className="font-mono text-yellow-600">this</code> keyword evaluates dynamically based on function invocation site: Implicit (<code className="font-mono text-yellow-600">obj.method()</code>), Explicit (<code className="font-mono text-yellow-600">call/apply/bind</code>), New (<code className="font-mono text-yellow-600">new Constructor()</code>), or Lexical (<code className="font-mono text-yellow-600">() =&gt; {}</code>).</p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-purple-800 dark:text-purple-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of the word "this" in spoken conversation. What "this" refers to depends entirely on which object or topic you are pointing at while speaking.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-yellow-500" />3. this Binding Resolution Priority (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph TD
    A[this Keyword Resolution] --> B{Called with new?}
    B -- Yes --> C[1. New Instance Object]
    B -- No --> D{Explicit call / apply / bind?}
    D -- Yes --> E[2. Explicit thisArg Object]
    D -- No --> F{Implicit obj.fn() Call?}
    F -- Yes --> G[3. Parent Object Context]
    F -- No --> H[4. Default Global Window / undefined]`}
                            caption="Figure 16.1: The 4 Rules of JavaScript this Keyword Resolution Priority."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This decision tree demonstrates how JS resolves the this binding context.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-yellow-500" />4. Sample Code</h4>
                        <CodeBlock code={`const person = {
    name: "Vinay",
    greet: function() { console.log("Name:", this.name); }
};

person.greet(); // Implicit binding -> "Vinay"

function showRole(role) {
    console.log(\`\${this.name} is a \${role}\`);
}

// Explicit Binding via call & bind
showRole.call(person, "Developer");
const boundFn = showRole.bind(person, "Architect");
boundFn();`} lang="javascript" colorClass="yellow" filename="this.js" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Binding event handler methods inside class components to preserve instance scope.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li><code className="text-yellow-400">bind()</code> creates permanently bound function references for asynchronous event callbacks.</li>
                            <li>Arrow functions inherit lexical <code className="text-yellow-400">this</code> cleanly from surrounding scope.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Extracting object methods as standalone callbacks detaches implicit <code className="text-yellow-400">this</code> binding.</li>
                            <li>Arrow functions cannot be used as object constructor functions with <code className="text-yellow-400">new</code>.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'js-async-promises-async-await',
            title: '17. [Advanced] Async JS (Promises, Async/Await, Promise.all)',
            definition: 'Promises represent eventual completion of asynchronous operations (Pending, Fulfilled, Rejected). Async/Await provides clean synchronous-like syntax over Promises.',
            syntax: `const getData = async () => {
    const res = await fetch(url);
    return await res.json();
};`,
            codeSnippet: `const mockFetch = () => new Promise(resolve => setTimeout(() => resolve("Data Loaded"), 500));

async function loadData() {
    try {
        console.log("Loading...");
        const result = await mockFetch();
        console.log("Success:", result);
    } catch (err) {
        console.error("Failed:", err);
    }
}

loadData();`,
            realLifeScenario: 'Parallel API requests use `Promise.all([fetchUsers(), fetchPosts()])` to execute independent backend requests simultaneously.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-amber-50 dark:bg-amber-950/20 border-l-4 border-yellow-500 rounded-r-xl">
                        <h4 className="text-md font-bold text-amber-800 dark:text-amber-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Promises represent asynchronous completion state (Pending, Fulfilled, Rejected). <code className="font-mono text-yellow-600">async/await</code> syntax pauses execution within async functions until Promises settle, eliminating callback hell.</p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-purple-800 dark:text-purple-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of a Promise like a restaurant order buzzer ticket. The ticket is Pending while food prepares, becomes Fulfilled when your food is ready at the counter, or Rejected if the kitchen ran out of ingredients.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-yellow-500" />3. Promise Lifecycle States (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`flowchart TD
    A[New Promise Initialized] --> B[Pending State]
    B -->|resolve()| C[Fulfilled State -> .then / await]
    B -->|reject()| D[Rejected State -> .catch / try-catch]`}
                            caption="Figure 17.1: Asynchronous Promise State Machine Transitions."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This flowchart demonstrates pending, resolved, and rejected promise state transitions.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-yellow-500" />4. Sample Code</h4>
                        <CodeBlock code={`const mockFetch = () => new Promise(resolve => setTimeout(() => resolve("Data Loaded"), 500));

async function loadData() {
    try {
        console.log("Loading...");
        const result = await mockFetch();
        console.log("Success:", result);
    } catch (err) {
        console.error("Failed:", err);
    }
}

loadData();`} lang="javascript" colorClass="yellow" filename="async.js" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Fetching API network data, reading database files, and executing parallel <code className="text-yellow-600 font-mono">Promise.all()</code> requests.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li><code className="text-yellow-400">async/await</code> transforms nested callback hell into readable linear code.</li>
                            <li><code className="text-yellow-400">Promise.all()</code> executes independent network requests concurrently.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Uncaught promise rejections crash Node.js process servers.</li>
                            <li>Sequential <code className="text-yellow-400">await</code> calls inside loops slow down execution (use <code className="text-yellow-400">Promise.all</code>).</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'js-fetch-error-handling',
            title: '18. [Advanced] Fetch API & Custom Error Handling',
            definition: 'The Fetch API makes HTTP network requests. Unlike jQuery or Axios, native fetch() does not reject on HTTP error status codes (404, 500); developers must check response.ok.',
            syntax: `const res = await fetch('/api/data');
if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
const data = await res.json();`,
            codeSnippet: `async function loadUser(id) {
    try {
        const response = await fetch(\`https://api.example.com/users/\${id}\`);
        if (!response.ok) {
            throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        const data = await response.json();
        return data;
    } catch (err) {
        console.error("Network or HTTP Error:", err.message);
    }
}`,
            realLifeScenario: 'Robust web applications intercept network errors to display friendly toast notifications when users lose internet connectivity.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-amber-50 dark:bg-amber-950/20 border-l-4 border-yellow-500 rounded-r-xl">
                        <h4 className="text-md font-bold text-amber-800 dark:text-amber-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">The native Fetch API executes asynchronous HTTP requests over the network. Native <code className="font-mono text-yellow-600">fetch()</code> only rejects on physical network failures; status codes like 404 or 500 require manual verification of <code className="font-mono text-yellow-600">response.ok</code>.</p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-purple-800 dark:text-purple-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of fetch like sending a postal package. The mail carrier delivering the package successfully (network success) doesn't guarantee the package contents are correct (HTTP 200 vs 404 error code).</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-yellow-500" />3. Fetch API HTTP Verification Flow (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`flowchart TD
    A[Execute fetch Request] --> B{Network Error?}
    B -- Yes --> C[Promise Rejects -> catch block]
    B -- No --> D{response.ok is True?}
    D -- Yes 200-299 --> E[Parse response.json()]
    D -- No 404/500 --> F[Throw Custom HTTP Error]`}
                            caption="Figure 18.1: Fetch API Network and HTTP Status Verification Flowchart."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This flowchart shows why checking response.ok is mandatory when using native fetch.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-yellow-500" />4. Sample Code</h4>
                        <CodeBlock code={`async function loadUser(id) {
    try {
        const response = await fetch(\`https://api.example.com/users/\${id}\`);
        if (!response.ok) {
            throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        const data = await response.json();
        return data;
    } catch (err) {
        console.error("Network or HTTP Error:", err.message);
    }
}`} lang="javascript" colorClass="yellow" filename="fetch.js" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Fetching JSON data from REST APIs and displaying error toast alerts when backend servers fail.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Native browser standard without requiring third-party libraries (Axios / jQuery).</li>
                            <li>Integrated Promise streaming interface for handling large data payloads.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Does not reject promises automatically on 404 or 500 HTTP status error codes.</li>
                            <li>Does not support native request cancellation without <code className="text-yellow-400">AbortController</code>.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'js-modules-system',
            title: '19. [Advanced] ES Modules (import/export) vs CommonJS',
            definition: 'Modules split code into reusable files. ES Modules (import/export) are native browser standards, while CommonJS (require/module.exports) is Node.js\'s legacy format.',
            syntax: `export const val = 10;
export default function fn() { }
import fn, { val } from './mod.js';`,
            codeSnippet: `// math.js - ES Module Exports
export const add = (a, b) => a + b;
export default class Calculator {
    square(x) { return x * x; }
}

// main.js - ES Module Imports
import Calculator, { add } from './math.js';
console.log("Add:", add(5, 10));`,
            realLifeScenario: 'Modern bundlers (Vite, Webpack) tree-shake ES Modules, stripping unused export code from final production JS bundles.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-amber-50 dark:bg-amber-950/20 border-l-4 border-yellow-500 rounded-r-xl">
                        <h4 className="text-md font-bold text-amber-800 dark:text-amber-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">ES Modules (<code className="font-mono text-yellow-600">import/export</code>) provide native static modularity in modern browsers, enabling bundlers to tree-shake unused code, unlike legacy Node.js CommonJS (<code className="font-mono text-yellow-600">require/module.exports</code>).</p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-purple-800 dark:text-purple-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of modules like interchangeable camera lenses. Instead of building one massive camera body, you attach specialized lenses (modules) when needed and swap them out cleanly.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-yellow-500" />3. ES Modules vs CommonJS Architecture (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph LR
    A[JS Module Formats] --> B["ES Modules import / export"]
    A --> C["CommonJS require / module.exports"]
    B --> B1[Static Analysis - Tree-Shakable]
    C --> C1[Dynamic Runtime Node.js Format]`}
                            caption="Figure 19.1: ES Modules vs CommonJS Module System Comparison."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This diagram compares static ES Modules with dynamic CommonJS module formats.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-yellow-500" />4. Sample Code</h4>
                        <CodeBlock code={`// math.js - ES Module Exports
export const add = (a, b) => a + b;
export default class Calculator {
    square(x) { return x * x; }
}

// main.js - ES Module Imports
import Calculator, { add } from './math.js';
console.log("Add:", add(5, 10));`} lang="javascript" colorClass="yellow" filename="modules.js" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Structuring modular JavaScript applications compiled by modern bundlers like Vite or Webpack.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Static structure allows bundlers to perform dead-code elimination (tree-shaking).</li>
                            <li>Native browser engine support without requiring compile bundlers during dev mode.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Mixing CommonJS <code className="text-yellow-400">require()</code> and ES Module <code className="text-yellow-400">import</code> syntax causes Node.js runtime errors.</li>
                            <li>ES Module imports require explicit file extension paths in vanilla browser scripts.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'js-event-loop',
            title: '20. [Advanced] Event Loop & Microtask Queue Architecture',
            definition: 'The JS runtime is single-threaded. The Event Loop manages execution between the Call Stack, Microtask Queue (Promises, process.nextTick), and Macrotask Queue (setTimeout, DOM events).',
            syntax: `1. Call Stack (Synchronous Code)
2. Microtask Queue (Promises)
3. Macrotask Queue (setTimeout, DOM events)`,
            codeSnippet: `console.log("1. Sync Start");

setTimeout(() => console.log("4. Macrotask Timer"), 0);

Promise.resolve().then(() => console.log("3. Microtask Promise"));

console.log("2. Sync End");

// Output: 1. Sync Start -> 2. Sync End -> 3. Microtask -> 4. Macrotask`,
            realLifeScenario: 'Understanding microtask execution priority prevents UI freezing bugs during heavy asynchronous state processing.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-amber-50 dark:bg-amber-950/20 border-l-4 border-yellow-500 rounded-r-xl">
                        <h4 className="text-md font-bold text-amber-800 dark:text-amber-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">The Event Loop coordinates JavaScript's single-threaded runtime by executing synchronous code on the Call Stack first, draining the Microtask Queue (Promises) completely, and finally processing Macrotasks (<code className="font-mono text-yellow-600">setTimeout</code>, I/O).</p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-purple-800 dark:text-purple-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of the Event Loop like an airport gate agent. The agent serves VIP first-class passengers (Microtasks / Promises) first until the VIP line is empty, before boarding general economy ticket holders (Macrotasks / setTimeout).</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-yellow-500" />3. Event Loop Priority Queue (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph TD
    A[Synchronous Call Stack] -->|Empty Stack| B[Microtask Queue: Promises]
    B -->|Drain Entire Microtask Queue| C[Macrotask Queue: setTimeout / I/O]
    C -->|Pick 1 Macrotask| A`}
                            caption="Figure 20.1: JavaScript Event Loop Task Queue Execution Priority."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This diagram illustrates how the Event Loop prioritizes microtasks over macrotasks.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-yellow-500" />4. Sample Code</h4>
                        <CodeBlock code={`console.log("1. Sync Start");

setTimeout(() => console.log("4. Macrotask Timer"), 0);

Promise.resolve().then(() => console.log("3. Microtask Promise"));

console.log("2. Sync End");

// Output: 1. Sync Start -> 2. Sync End -> 3. Microtask -> 4. Macrotask`} lang="javascript" colorClass="yellow" filename="eventloop.js" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Preventing UI thread starvation when scheduling asynchronous tasks and state updates.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Enables non-blocking I/O processing on a single main thread.</li>
                            <li>Promises execute with high priority in the Microtask queue immediately after call stack clearing.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Long-running synchronous loops block the Event Loop, freezing browser UIs completely.</li>
                            <li>Infinite recursive microtask loops starve macrotasks from ever executing.</li>
                        </ul>
                    </div>
                </div>
            )
        },

        // ==================== PROFESSIONAL TIER ====================
        {
            id: 'js-design-patterns',
            title: '21. [Professional] JavaScript Design Patterns (Singleton, Observer)',
            definition: 'Design Patterns offer proven reusable solutions to common software engineering challenges (Singleton, Factory, Observer/PubSub, Strategy).',
            syntax: `class Singleton {
    constructor() {
        if (Singleton.instance) return Singleton.instance;
        Singleton.instance = this;
    }
}`,
            codeSnippet: `class Database {
    constructor() {
        if (Database.instance) return Database.instance;
        this.url = "mongodb://localhost:27017";
        Database.instance = this;
    }
}

const db1 = new Database();
const db2 = new Database();
console.log("Same DB Instance?", db1 === db2); // true`,
            realLifeScenario: 'State management libraries (Redux, Zustand, RxJS) use the Observer pattern to notify UI components when application state changes.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-amber-50 dark:bg-amber-950/20 border-l-4 border-yellow-500 rounded-r-xl">
                        <h4 className="text-md font-bold text-amber-800 dark:text-amber-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Design Patterns (Singleton, Observer/PubSub, Factory) are standardized architectural templates that solve common software design challenges in scalable, maintainable ways.</p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-purple-800 dark:text-purple-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of the Observer pattern like a YouTube channel subscription. When a creator uploads a new video (state change), all subscribed followers receive automated notifications instantly.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-yellow-500" />3. Observer / PubSub Design Pattern (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph TD
    A[Subject / Event Hub] -->|State Change Event| B[Observer 1 Component]
    A -->|State Change Event| C[Observer 2 Component]
    A -->|State Change Event| D[Observer 3 Component]`}
                            caption="Figure 21.1: Observer / PubSub Pattern dispatching state updates to subscribers."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This diagram demonstrates how the Observer pattern dispatches events to multiple UI subscribers.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-yellow-500" />4. Sample Code</h4>
                        <CodeBlock code={`class Database {
    constructor() {
        if (Database.instance) return Database.instance;
        this.url = "mongodb://localhost:27017";
        Database.instance = this;
    }
}

const db1 = new Database();
const db2 = new Database();
console.log("Same DB Instance?", db1 === db2); // true`} lang="javascript" colorClass="yellow" filename="design-patterns.js" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">State management stores (Redux, Zustand, RxJS) notifying UI components of data updates.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Provides proven, industry-standard architectural solutions for complex codebases.</li>
                            <li>Observer pattern decouples state managers from individual UI rendering components.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Overusing design patterns on small applications introduces unnecessary code abstraction complexity.</li>
                            <li>Singletons can make unit testing difficult if global state leaks across test suites.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'js-memory-management-leaks',
            title: '22. [Professional] V8 Memory Management & Garbage Collection',
            definition: 'The V8 engine manages memory using Mark-and-Sweep Garbage Collection. Common memory leaks stem from forgotten timers, detached DOM nodes, and uncleared event listeners.',
            syntax: `/* Proper Cleanup Pattern */
const timer = setInterval(poll, 1000);
// On Unmount:
clearInterval(timer);`,
            codeSnippet: `class Component {
    init() {
        this.onResize = () => console.log("Resized");
        window.addEventListener('resize', this.onResize);
    }
    destroy() {
        // Cleanup listener to prevent detached memory leak
        window.removeEventListener('resize', this.onResize);
    }
}`,
            realLifeScenario: 'Single-page React/Angular applications memory-profile detached DOM nodes in Chrome DevTools to prevent tab crashes during prolonged usage.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-amber-50 dark:bg-amber-950/20 border-l-4 border-yellow-500 rounded-r-xl">
                        <h4 className="text-md font-bold text-amber-800 dark:text-amber-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">The Chrome V8 engine uses Mark-and-Sweep Garbage Collection to reclaim memory allocated to unreferenced heap objects. Memory leaks occur when active references (timers, event listeners) prevent unreachable objects from being freed.</p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-purple-800 dark:text-purple-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of Garbage Collection like a janitor sweeping a hotel lobby. Any luggage left unheld on the floor with no owner badge attached gets collected and thrown into recycling.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-yellow-500" />3. V8 Mark-and-Sweep Garbage Collection (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph TD
    A[V8 Garbage Collection Sweep] --> B[Traverse Root References]
    B --> C{Object Reachable from Root?}
    C -- Yes --> D[Mark as Active - Retain in Heap]
    C -- No --> E[Unmarked Object - Reclaim Memory]`}
                            caption="Figure 22.1: V8 Mark-and-Sweep Garbage Collection Heap Processing."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This diagram demonstrates how V8 identifies and reclaims unreferenced heap memory.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-yellow-500" />4. Sample Code</h4>
                        <CodeBlock code={`class Component {
    init() {
        this.onResize = () => console.log("Resized");
        window.addEventListener('resize', this.onResize);
    }
    destroy() {
        // Cleanup listener to prevent detached memory leak
        window.removeEventListener('resize', this.onResize);
    }
}`} lang="javascript" colorClass="yellow" filename="memory.js" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Profiling single-page web applications in Chrome DevTools to eliminate detached DOM memory leaks.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Automatic memory management prevents manual pointers deallocation bugs.</li>
                            <li>Generational garbage collection prioritizes clearing short-lived objects quickly.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Forgotten <code className="text-yellow-400">setInterval</code> timers retain outer scope variables indefinitely.</li>
                            <li>Garbage collection pauses can cause occasional micro-stutter during animation rendering.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'js-web-workers',
            title: '23. [Professional] Web Workers & Multi-Threaded Concurrency',
            definition: 'Web Workers run heavy JavaScript computations in background worker threads without blocking the main UI thread.',
            syntax: `const worker = new Worker('worker.js');
worker.postMessage(data);
worker.onmessage = (e) => console.log(e.data);`,
            codeSnippet: `// main.js
const worker = new Worker('worker.js');
worker.postMessage({ number: 40 });

worker.onmessage = (e) => {
    console.log("Result from Background Worker:", e.data);
};`,
            realLifeScenario: 'Image filtering web editors (Figma, Canva) and crypto mining engines execute heavy matrix math inside Web Workers to keep UIs scrolling smoothly at 60fps.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-amber-50 dark:bg-amber-950/20 border-l-4 border-yellow-500 rounded-r-xl">
                        <h4 className="text-md font-bold text-amber-800 dark:text-amber-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Web Workers run heavy JavaScript tasks in background thread contexts operating alongside the main UI thread, communicating via <code className="font-mono text-yellow-600">postMessage()</code> and <code className="font-mono text-yellow-600">onmessage</code> events.</p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-purple-800 dark:text-purple-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of Web Workers like hiring a kitchen assistant. While you (main UI thread) greet restaurant customers at the front door, the assistant works in the back kitchen processing heavy meal orders without blocking the entrance.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-yellow-500" />3. Main Thread vs Web Worker Architecture (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph LR
    A["Main UI Thread (60fps DOM Renders)"] -->|postMessage(data)| B["Web Worker Background Thread"]
    B -->|Heavy CPU Computation| C[Compute Result]
    C -->|onmessage(result)| A`}
                            caption="Figure 23.1: Multi-Threaded Concurrency via Web Workers."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This diagram demonstrates offloading heavy computations to background threads.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-yellow-500" />4. Sample Code</h4>
                        <CodeBlock code={`// main.js
const worker = new Worker('worker.js');
worker.postMessage({ number: 40 });

worker.onmessage = (e) => {
    console.log("Result from Background Worker:", e.data);
};`} lang="javascript" colorClass="yellow" filename="worker-main.js" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Image/video processing tools (Canva, Figma) and client-side data encryption engines.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Keeps the main UI thread responsive at 60fps during heavy CPU calculations.</li>
                            <li>Prevents browser "Page Unresponsive" dialog warnings.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Web Workers cannot access DOM nodes, <code className="text-yellow-400">document</code>, or <code className="text-yellow-400">window</code> objects directly.</li>
                            <li>Data passed via <code className="text-yellow-400">postMessage()</code> is copied via structured clone, adding IPC serialization overhead.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'js-testing-frameworks',
            title: '24. [Professional] Unit Testing Frameworks (Jest / Vitest)',
            definition: 'Unit testing frameworks (Jest, Vitest) verify code correctness using test suites, assertion matchers (expect), mocks, and coverage reports.',
            syntax: `describe('Suite', () => {
    test('case', () => {
        expect(actual).toBe(expected);
    });
});`,
            codeSnippet: `import { describe, test, expect } from 'vitest';

function add(a, b) { return a + b; }

describe('add() Unit Tests', () => {
    test('adds two numbers correctly', () => {
        expect(add(2, 3)).toBe(5);
    });
});`,
            realLifeScenario: 'CI/CD deployment pipelines run automated unit test suites on GitHub Actions before allowing code to merge into production.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-amber-50 dark:bg-amber-950/20 border-l-4 border-yellow-500 rounded-r-xl">
                        <h4 className="text-md font-bold text-amber-800 dark:text-amber-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Unit Testing Frameworks (Vitest, Jest) provide automated test suites (<code className="font-mono text-yellow-600">describe</code>, <code className="font-mono text-yellow-600">test</code>) and assertion matchers (<code className="font-mono text-yellow-600">expect</code>) to verify individual code functions in isolation.</p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-purple-800 dark:text-purple-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of unit testing like an quality control inspector at a car factory testing headlights, brakes, and seatbelts individually on the bench before assembling the car.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-yellow-500" />3. Automated Unit Testing Pipeline (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph LR
    A["Test Runner (Vitest)"] --> B["Test Suite: describe()"]
    B --> C["Test Case: test()"]
    C --> D["Execute Target Function"]
    D --> E{"expect(actual).toBe(expected)"}
    E -- Pass --> F[Green ✓ Test Passed]
    E -- Fail --> G[Red ❌ Test Failed]`}
                            caption="Figure 24.1: Automated Unit Testing Execution Pipeline."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This diagram outlines automated unit test assertions and pass/fail reporting.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-yellow-500" />4. Sample Code</h4>
                        <CodeBlock code={`import { describe, test, expect } from 'vitest';

function add(a, b) { return a + b; }

describe('add() Unit Tests', () => {
    test('adds two numbers correctly', () => {
        expect(add(2, 3)).toBe(5);
    });
});`} lang="javascript" colorClass="yellow" filename="math.test.js" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Running CI/CD automated test suites on GitHub Actions prior to production deployments.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Catches regression bugs early before code reaches production environments.</li>
                            <li>Provides code coverage reports verifying tested logic paths.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Writing and maintaining test suites requires ongoing developer effort.</li>
                            <li>Over-mocking dependencies can lead to false positive test passes.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'js-bundlers-typescript-readiness',
            title: '25. [Professional] Bundlers & TypeScript Readiness',
            definition: 'Modern bundlers (Vite, Webpack, Rollup) process JS module graphs, transpile ES6+ syntax via Babel, and pave the way for strict static type checking with TypeScript.',
            syntax: `/**
 * @param {number} a
 * @returns {number}
 */
function double(a) { return a * 2; }`,
            codeSnippet: `/**
 * @param {string} name
 * @param {number} age
 * @returns {{ id: string, name: string }}
 */
function createUser(name, age) {
    return { id: "USR-" + Date.now(), name };
}`,
            realLifeScenario: 'Enterprise teams migrate large JavaScript codebases to TypeScript by first annotating functions with JSDoc types before renaming files to `.ts`.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-amber-50 dark:bg-amber-950/20 border-l-4 border-yellow-500 rounded-r-xl">
                        <h4 className="text-md font-bold text-amber-800 dark:text-amber-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Frontend bundlers (Vite, Webpack) process module graphs, minify assets, and transpile code, bridging JavaScript codebases towards static type safety with TypeScript and JSDoc annotations.</p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-purple-800 dark:text-purple-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of JSDoc and TypeScript readiness like putting clear contents labels on spice jars in a kitchen. Knowing exactly what is inside every jar prevents accidentally adding salt when you intended sugar.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-yellow-500" />3. Bundling &amp; TypeScript Compilation Pipeline (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph LR
    A[JS Source + JSDoc Annotations] --> B[Vite / Rollup Bundler]
    B --> C[esbuild Transpiler]
    C --> D[Minified JS Production Bundle]
    C --> E[TypeScript Strict Migration Target .ts]`}
                            caption="Figure 25.1: JS Module Bundling and TypeScript Migration Pipeline."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This diagram demonstrates bundling pipelines and static type checking readiness.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-yellow-500" />4. Sample Code</h4>
                        <CodeBlock code={`/**
 * @param {string} name
 * @param {number} age
 * @returns {{ id: string, name: string }}
 */
function createUser(name, age) {
    return { id: "USR-" + Date.now(), name };
}`} lang="javascript" colorClass="yellow" filename="jsdoc.js" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Incremental migration of legacy JavaScript codebases to TypeScript using JSDoc types.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>JSDoc annotations provide instant IDE autocomplete without requiring a TypeScript build step.</li>
                            <li>Modern bundlers automate script minification and cache-busted asset hashing.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>JSDoc comments are not enforced at compile-time like native TypeScript.</li>
                            <li>Complex bundler configuration files can be difficult to debug when build plugins clash.</li>
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
            title="JavaScript Masterclass Course"
            description="Master JavaScript from Variables, DOM Manipulation, and ES6+ to Closures, Event Loop Microtasks, Web Workers, Unit Testing, and Bundlers."
            topics={topics}
            icon={Terminal}
            colorClass="yellow"
            activeTopicIndex={activeTopicIndex}
            onTopicClick={setActiveTopicIndex}
        >
            <div className="space-y-8">
                {/* Part 1: Concept Definition & Detailed Explanation */}
                <div className="bg-yellow-50 dark:bg-yellow-900/10 border-l-4 border-yellow-600 p-6 rounded-r-xl shadow-sm">
                    <h3 className="text-lg font-bold text-yellow-800 dark:text-yellow-300 mb-2 flex items-center">
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
                            <pre>{`// JavaScript Syntax Blueprint\nfunction example() {\n  return true;\n}`}</pre>
                        </div>
                    </div>
                )}

                {/* Part 3: Executable Code Example */}
                {activeTopic.codeSnippet && (
                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-yellow-600" />
                            3. Executable Production Code Example
                        </h3>
                        <CodeBlock code={activeTopic.codeSnippet} lang="javascript" colorClass="yellow" filename="script.js" />
                    </div>
                )}

                {/* Part 4: Real-Life Scenario Example */}
                <div className="bg-emerald-50 dark:bg-emerald-900/10 border-l-4 border-emerald-600 p-6 rounded-r-xl shadow-sm">
                    <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                        <Lightbulb className="w-5 h-5 mr-2" />
                        4. Real-Life Industry Scenario & Application
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                        {activeTopic.realLifeScenario || activeTopic.example || "Powers interactive web UIs, real-time web applications, Node.js server architectures, and multi-platform applications."}
                    </p>
                </div>
            </div>
        </CoursePageLayout>
    );
};

export default JavaScriptCoursePage;
