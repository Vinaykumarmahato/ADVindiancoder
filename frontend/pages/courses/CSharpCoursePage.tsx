import React, { useState } from 'react';
import CoursePageLayout from '../../components/CoursePageLayout';
import { Terminal, Code, BookOpen, Lightbulb, FileText, Cpu, Layers, Server, ShieldAlert, Cloud, Check, AlertTriangle } from 'lucide-react';
import CodeBlock from '../../components/CodeBlock';
import MermaidDiagram from '../../components/MermaidDiagram';

interface CSharpTopic {
    id: string;
    title: string;
    definition: string;
    example?: string;
    syntax?: string;
    realLifeScenario?: string;
    codeSnippet?: string | null;
    content: React.ReactNode;
}

const CSharpCoursePage = () => {
    const [activeTopicIndex, setActiveTopicIndex] = useState(0);

    const courseData: CSharpTopic[] = [
        // ==================== BEGINNER TIER ====================
        {
            id: 'csharp-syntax-types-parsing',
            title: '1. [Beginner] Syntax, Variables & Type Conversion (int.TryParse)',
            definition: 'C# is a strongly-typed, component-oriented language. Variables store values or references. Type conversion is performed safely using implicit/explicit casting, the Convert class, or int.TryParse().',
            syntax: `/* Safe Parsing Syntax Blueprint */\nstring input = "123";\nif (int.TryParse(input, out int result)) {\n    // Parsing Succeeded safely without throwing exception\n}`,
            codeSnippet: `using System;\n\nclass Program {\n    static void Main() {\n        // Implicit & Explicit Casting\n        int num = 100;\n        double bigNum = num; // Implicit\n        int backToInt = (int)bigNum; // Explicit\n\n        // Safe Parsing with int.TryParse\n        string rawInput = "450";\n        if (int.TryParse(rawInput, out int parsedValue)) {\n            Console.WriteLine($"Parsed Integer Successfully: {parsedValue}");\n        } else {\n            Console.WriteLine("Failed to parse integer input.");\n        }\n\n        // Implicit typing with var\n        var user = "Vinay Mahato";\n        Console.WriteLine($"User: {user} (Type: {user.GetType().Name})");\n    }\n}`,
            realLifeScenario: 'Financial banking applications use `int.TryParse` and `decimal.TryParse` to process form field strings safely without risking unhandled runtime exceptions.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2"><BookOpen className="w-5 h-5 mr-2" /> Definition</h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">C# is a strongly-typed, component-oriented language. Variables store values or references. Type conversion is performed safely using implicit/explicit casting, the Convert class, or <code className="text-cyan-600 font-mono">int.TryParse()</code>.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2"><Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy</h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">Think of variables as labeled boxes. A strong type means a box labeled &quot;Apples&quot; can only hold apples, preventing you from accidentally putting a &quot;Watermelon&quot; (string) into a &quot;Shoebox&quot; (int).</p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4"><Layers className="w-5 h-5 mr-2 text-indigo-500" /> Visual Explanation</h4>
                        <MermaidDiagram chart={`graph LR\n    A[String Input '123'] --> B{int.TryParse}\n    B -->|Success| C[Parsed int: 123]\n    B -->|Failure| D[Default int: 0]\n    C --> E[Safe Execution]\n    D --> F[Error Handling]`} />
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center"><Code className="w-5 h-5 mr-2 text-purple-600" /> Sample Code</h4>
                        <CodeBlock code={`using System;\n\nclass Program {\n    static void Main() {\n        string rawInput = "450";\n        if (int.TryParse(rawInput, out int parsedValue)) {\n            Console.WriteLine($"Parsed Integer Successfully: {parsedValue}");\n        }\n    }\n}`} lang="csharp" colorClass="purple" filename="Program.cs" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2"><Cpu className="w-5 h-5 mr-2" /> Real-World Application</h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">Financial banking applications use <code className="text-cyan-600 font-mono">int.TryParse</code> and <code className="text-cyan-600 font-mono">decimal.TryParse</code> to process form field strings safely without risking unhandled runtime exceptions.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-5 rounded-xl shadow-sm">
                        <h4 className="text-lg font-bold text-emerald-400 flex items-center mb-3"><Check className="w-5 h-5 mr-2" /> Advantages</h4>
                        <ul className="space-y-2 text-sm text-slate-300 list-disc pl-5">
                            <li>Strong typing prevents unexpected runtime crashes.</li>
                            <li><code className="text-cyan-400">TryParse</code> avoids expensive exception handling mechanisms.</li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-5 rounded-xl shadow-sm mt-4">
                        <h4 className="text-lg font-bold text-red-400 flex items-center mb-3"><AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages</h4>
                        <ul className="space-y-2 text-sm text-slate-300 list-disc pl-5">
                            <li>More verbose than dynamic languages like Python or JavaScript.</li>
                            <li>Requires explicit handling of <code className="text-cyan-400">out</code> parameters which can clutter code.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'csharp-control-flow',
            title: '2. [Beginner] Control Flow & Switch Expressions',
            definition: 'C# supports conditional branching (if-else), pattern matching switch statements, and modern C# 8+ concise Switch Expressions.',
            syntax: `/* Switch Expression Syntax Blueprint (C# 8+) */\nstring roleName = userRole switch {\n    1 => "Administrator",\n    2 => "Editor",\n    _ => "Guest User"\n};`,
            codeSnippet: `using System;\n\nclass ControlFlowDemo {\n    static void Main() {\n        int httpStatusCode = 404;\n\n        // Modern C# Switch Expression\n        string statusMessage = httpStatusCode switch {\n            200 => "200 OK: Request Succeeded",\n            404 => "404 Not Found: Resource Missing",\n            500 => "500 Internal Server Error",\n            _   => "Unknown HTTP Status Code"\n        };\n\n        Console.WriteLine($"Status: {statusMessage}");\n    }\n}`,
            realLifeScenario: 'ASP.NET Core API controllers map HTTP status codes to response payloads using concise C# switch expressions.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2"><BookOpen className="w-5 h-5 mr-2" /> Definition</h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">C# supports conditional branching (if-else), pattern matching switch statements, and modern C# 8+ concise Switch Expressions.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2"><Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy</h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">Think of a switch expression like a train track switcher. Depending on the cargo (the input value), the track instantly shifts to route the train to its specific destination without checking every single track sequentially.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4"><Layers className="w-5 h-5 mr-2 text-indigo-500" /> Visual Explanation</h4>
                        <MermaidDiagram chart={`graph TD\n    A[Input Value] --> B{Switch Expression}\n    B -->|Case 1| C[Result A]\n    B -->|Case 2| D[Result B]\n    B -->|Case _| E[Default Result]\n    C --> F((Output))\n    D --> F\n    E --> F`} />
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center"><Code className="w-5 h-5 mr-2 text-purple-600" /> Sample Code</h4>
                        <CodeBlock code={`using System;\n\nclass ControlFlowDemo {\n    static void Main() {\n        int code = 404;\n        string statusMessage = code switch {\n            200 => "OK",\n            404 => "Not Found",\n            _   => "Unknown"\n        };\n    }\n}`} lang="csharp" colorClass="purple" filename="Program.cs" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2"><Cpu className="w-5 h-5 mr-2" /> Real-World Application</h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">ASP.NET Core API controllers map HTTP status codes to response payloads using concise C# switch expressions.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-5 rounded-xl shadow-sm">
                        <h4 className="text-lg font-bold text-emerald-400 flex items-center mb-3"><Check className="w-5 h-5 mr-2" /> Advantages</h4>
                        <ul className="space-y-2 text-sm text-slate-300 list-disc pl-5">
                            <li>Significantly reduces boilerplate code compared to traditional switch statements.</li>
                            <li>Enforces exhaustion; the compiler warns if not all possible values are handled.</li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-5 rounded-xl shadow-sm mt-4">
                        <h4 className="text-lg font-bold text-red-400 flex items-center mb-3"><AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages</h4>
                        <ul className="space-y-2 text-sm text-slate-300 list-disc pl-5">
                            <li>Requires C# 8.0 or later, so it is incompatible with legacy .NET Framework environments.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'csharp-methods-parameters',
            title: '3. [Beginner] Methods & Parameters (ref, out, optional)',
            definition: 'Methods encapsulate callable logic. Parameters support optional defaults, named arguments, pass-by-reference (`ref`), and output parameters (`out`).',
            syntax: `void Multiply(int x, out int result) { result = x * 2; }\nvoid Increment(ref int x) { x++; }`,
            codeSnippet: `using System;\n\nclass MethodDemo {\n    // Optional & Named parameters\n    static void PrintInvoice(string customer, double amount, string currency = "INR") {\n        Console.WriteLine($"Customer: {customer} | Amount: {currency} {amount}");\n    }\n\n    // Ref & Out Parameters\n    static void Divide(int dividend, int divisor, out int quotient, out int remainder) {\n        quotient = dividend / divisor;\n        remainder = dividend % divisor;\n    }\n\n    static void Main() {\n        // Named arguments\n        PrintInvoice(amount: 1500.50, customer: "Vinay Mahato");\n\n        // Out parameters\n        Divide(10, 3, out int q, out int r);\n        Console.WriteLine($"10 / 3 = Quotient: {q}, Remainder: {r}");\n    }\n}`,
            realLifeScenario: 'C# `out` parameters allow methods to return multiple output values without creating custom wrapper classes.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2"><BookOpen className="w-5 h-5 mr-2" /> Definition</h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">Methods encapsulate callable logic. Parameters support optional defaults, named arguments, pass-by-reference (<code className="text-cyan-600 font-mono">ref</code>), and output parameters (<code className="text-cyan-600 font-mono">out</code>).</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2"><Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy</h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">Think of an <code className="text-cyan-600 font-mono">out</code> parameter like a valet parking ticket. You give the valet your car (the method call), and they hand you back a ticket (the out parameter) in addition to parking your car.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4"><Layers className="w-5 h-5 mr-2 text-indigo-500" /> Visual Explanation</h4>
                        <MermaidDiagram chart={`graph LR\n    A[Method Call] --> B{Method Execution}\n    B --> C[Return Value]\n    B --> D[Out Parameter 1]\n    B --> E[Out Parameter 2]`} />
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center"><Code className="w-5 h-5 mr-2 text-purple-600" /> Sample Code</h4>
                        <CodeBlock code={`static void Divide(int dividend, int divisor, out int quotient, out int remainder) {\n    quotient = dividend / divisor;\n    remainder = dividend % divisor;\n}\n\nDivide(10, 3, out int q, out int r);`} lang="csharp" colorClass="purple" filename="Program.cs" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2"><Cpu className="w-5 h-5 mr-2" /> Real-World Application</h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">C# <code className="text-cyan-600 font-mono">out</code> parameters allow methods to return multiple output values without creating custom wrapper classes.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-5 rounded-xl shadow-sm">
                        <h4 className="text-lg font-bold text-emerald-400 flex items-center mb-3"><Check className="w-5 h-5 mr-2" /> Advantages</h4>
                        <ul className="space-y-2 text-sm text-slate-300 list-disc pl-5">
                            <li>Avoids the need to create one-off wrapper classes/structs just to return multiple values.</li>
                            <li>Named arguments make complex method calls highly readable.</li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-5 rounded-xl shadow-sm mt-4">
                        <h4 className="text-lg font-bold text-red-400 flex items-center mb-3"><AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages</h4>
                        <ul className="space-y-2 text-sm text-slate-300 list-disc pl-5">
                            <li>Heavy use of <code className="text-cyan-400">ref</code> and <code className="text-cyan-400">out</code> can indicate poorly designed, overly complex methods.</li>
                            <li>Modern alternatives like C# Tuples are often preferred over <code className="text-cyan-400">out</code> parameters.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'csharp-arrays-collections-basics',
            title: '4. [Beginner] Arrays & Collections Basics (List<T>, foreach)',
            definition: 'Arrays store fixed-length elements. Generic List<T> dynamic collections expand dynamically, supporting element iteration via foreach loops.',
            syntax: `int[] numbers = new int[5];\nList<string> cities = new List<string> { "Delhi", "Mumbai" };\nforeach (var city in cities) { }`,
            codeSnippet: `using System;\nusing System.Collections.Generic;\n\nclass CollectionsBasics {\n    static void Main() {\n        // Fixed 1D Array\n        int[] scores = { 90, 85, 95 };\n\n        // Dynamic Generic List<T>\n        List<string> techStack = new List<string> { "C#", ".NET Core", "SQL" };\n        techStack.Add("Azure");\n        techStack.Remove(".NET Core");\n\n        Console.WriteLine("--- Tech Stack Items ---");\n        foreach (string tech in techStack) {\n            Console.WriteLine($"Item: {tech}");\n        }\n    }\n}`,
            realLifeScenario: 'REST API endpoints query backend databases and project results into `List<DTO>` collections for JSON serialization.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2"><BookOpen className="w-5 h-5 mr-2" /> Definition</h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">Arrays store fixed-length elements. Generic <code className="text-cyan-600 font-mono">List&lt;T&gt;</code> dynamic collections expand dynamically, supporting element iteration via <code className="text-cyan-600 font-mono">foreach</code> loops.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2"><Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy</h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">An Array is like an egg carton with exactly 12 fixed slots. A <code className="text-cyan-600 font-mono">List&lt;T&gt;</code> is like a shopping cart that can keep growing as you add more items to it.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4"><Layers className="w-5 h-5 mr-2 text-indigo-500" /> Visual Explanation</h4>
                        <MermaidDiagram chart={`graph TD\n    A[Fixed Array] -->|Cannot resize| B[Index 0 to N]\n    C[List<T>] -->|Dynamically resizes| D[Capacity Doubles]\n    D --> E[Adds element]`} />
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center"><Code className="w-5 h-5 mr-2 text-purple-600" /> Sample Code</h4>
                        <CodeBlock code={`List<string> techStack = new List<string> { "C#" };\ntechStack.Add("Azure");\nforeach (var tech in techStack) {\n    Console.WriteLine(tech);\n}`} lang="csharp" colorClass="purple" filename="Program.cs" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2"><Cpu className="w-5 h-5 mr-2" /> Real-World Application</h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">REST API endpoints query backend databases and project results into <code className="text-cyan-600 font-mono">List&lt;DTO&gt;</code> collections for JSON serialization.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-5 rounded-xl shadow-sm">
                        <h4 className="text-lg font-bold text-emerald-400 flex items-center mb-3"><Check className="w-5 h-5 mr-2" /> Advantages</h4>
                        <ul className="space-y-2 text-sm text-slate-300 list-disc pl-5">
                            <li><code className="text-cyan-400">List&lt;T&gt;</code> provides type-safe dynamic resizing natively.</li>
                            <li>Eliminates the performance cost of boxing and unboxing found in non-generic collections like <code className="text-cyan-400">ArrayList</code>.</li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-5 rounded-xl shadow-sm mt-4">
                        <h4 className="text-lg font-bold text-red-400 flex items-center mb-3"><AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages</h4>
                        <ul className="space-y-2 text-sm text-slate-300 list-disc pl-5">
                            <li>Lists consume more memory than fixed arrays due to pre-allocating capacity under the hood.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'csharp-oop-basics',
            title: '5. [Beginner] OOP Basics & Auto-Properties (get/set)',
            definition: 'C# enforces Object-Oriented Programming via classes, objects, access modifiers (public, private, protected, internal), and concise Auto-Properties.',
            syntax: `public class Person {\n    public string Name { get; set; }           // Auto-Property\n    public int Age { get; private set; }       // Private setter\n}`,
            codeSnippet: `using System;\n\npublic class Employee {\n    // Auto-Properties with initializers\n    public int Id { get; set; }\n    public string Name { get; set; }\n    public decimal Salary { get; private set; } // Encapsulated setter\n\n    public Employee(int id, string name, decimal initialSalary) {\n        Id = id;\n        Name = name;\n        Salary = initialSalary;\n    }\n\n    public void GiveRaise(decimal percentage) {\n        if (percentage > 0) {\n            Salary += Salary * (percentage / 100);\n            Console.WriteLine($"Raised {Name}'s Salary to: ₹{Salary}");\n        }\n    }\n}\n\nclass Program {\n    static void Main() {\n        var emp = new Employee(101, "Vinay Mahato", 85000);\n        emp.GiveRaise(10);\n    }\n}`,
            realLifeScenario: 'Domain Data Models and Entity Framework database entities use auto-properties for property data encapsulation.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2"><BookOpen className="w-5 h-5 mr-2" /> Definition</h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">C# enforces Object-Oriented Programming via classes, objects, access modifiers, and concise Auto-Properties.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2"><Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy</h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">A Class is like a blueprint for a house, and an Object is the actual house built from that blueprint. Auto-properties are like standard doors—they give predictable access without needing custom lock designs.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4"><Layers className="w-5 h-5 mr-2 text-indigo-500" /> Visual Explanation</h4>
                        <MermaidDiagram chart={`classDiagram\n    class Employee {\n        +int Id\n        +string Name\n        -decimal Salary\n        +GiveRaise(percentage)\n    }`} />
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center"><Code className="w-5 h-5 mr-2 text-purple-600" /> Sample Code</h4>
                        <CodeBlock code={`public class Person {\n    public string Name { get; set; }\n    public int Age { get; private set; }\n}`} lang="csharp" colorClass="purple" filename="Person.cs" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2"><Cpu className="w-5 h-5 mr-2" /> Real-World Application</h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">Domain Data Models and Entity Framework database entities use auto-properties for property data encapsulation.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-5 rounded-xl shadow-sm">
                        <h4 className="text-lg font-bold text-emerald-400 flex items-center mb-3"><Check className="w-5 h-5 mr-2" /> Advantages</h4>
                        <ul className="space-y-2 text-sm text-slate-300 list-disc pl-5">
                            <li>Promotes encapsulation by hiding the internal state of objects.</li>
                            <li>Auto-properties drastically reduce boilerplate code compared to manual backing fields.</li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-5 rounded-xl shadow-sm mt-4">
                        <h4 className="text-lg font-bold text-red-400 flex items-center mb-3"><AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages</h4>
                        <ul className="space-y-2 text-sm text-slate-300 list-disc pl-5">
                            <li>Can lead to anemic domain models if business logic is stripped away in favor of public getters and setters.</li>
                        </ul>
                    </div>
                </div>
            )
        },

        // ==================== INTERMEDIATE TIER ====================
        {
            id: 'csharp-inheritance-interfaces',
            title: '6. [Intermediate] Inheritance & Interfaces (abstract, override)',
            definition: 'Inheritance allows derived classes to inherit base members (`base`). Polymorphism uses `virtual` and `override` methods. Interfaces declare pure contract methods.',
            syntax: `public interface IRepository {\n    void Save();\n}\n\npublic abstract class BaseEntity {\n    public virtual void Validate() { }\n}`,
            codeSnippet: `using System;\n\npublic interface IPaymentProcessor {\n    bool ProcessPayment(decimal amount);\n}\n\npublic abstract class Account {\n    public string AccountHolder { get; set; }\n    public abstract void CalculateInterest(); // Abstract method\n}\n\npublic class SavingsAccount : Account, IPaymentProcessor {\n    public decimal Balance { get; set; }\n\n    public override void CalculateInterest() {\n        decimal interest = Balance * 0.05m;\n        Console.WriteLine($"Calculated Interest: ₹{interest}");\n    }\n\n    public bool ProcessPayment(decimal amount) {\n        if (Balance >= amount) {\n            Balance -= amount;\n            return true;\n        }\n        return false;\n    }\n}\n\nclass InheritanceDemo {\n    static void Main() {\n        var acc = new SavingsAccount { AccountHolder = "Vinay", Balance = 50000 };\n        acc.CalculateInterest();\n    }\n}`,
            realLifeScenario: 'Dependency Injection relies heavily on C# Interfaces (`IService`, `IRepository`) to decouple implementations from caller services.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2"><BookOpen className="w-5 h-5 mr-2" /> Definition</h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">Inheritance allows derived classes to inherit base members (<code className="text-cyan-600 font-mono">base</code>). Polymorphism uses <code className="text-cyan-600 font-mono">virtual</code> and <code className="text-cyan-600 font-mono">override</code> methods. Interfaces declare pure contract methods.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2"><Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy</h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">Inheritance is like a child inheriting traits from a parent. Interfaces are like a USB port: any device can connect as long as it adheres to the standard USB shape contract.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4"><Layers className="w-5 h-5 mr-2 text-indigo-500" /> Visual Explanation</h4>
                        <MermaidDiagram chart={`classDiagram\n    class Account { <<abstract>> }\n    class IPaymentProcessor { <<interface>> }\n    Account <|-- SavingsAccount\n    IPaymentProcessor <|.. SavingsAccount`} />
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center"><Code className="w-5 h-5 mr-2 text-purple-600" /> Sample Code</h4>
                        <CodeBlock code={`public class SavingsAccount : Account, IPaymentProcessor {\n    public override void CalculateInterest() { }\n    public bool ProcessPayment(decimal amount) { return true; }\n}`} lang="csharp" colorClass="purple" filename="Program.cs" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2"><Cpu className="w-5 h-5 mr-2" /> Real-World Application</h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">Dependency Injection relies heavily on C# Interfaces (<code className="text-cyan-600 font-mono">IService</code>, <code className="text-cyan-600 font-mono">IRepository</code>) to decouple implementations from caller services.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-5 rounded-xl shadow-sm">
                        <h4 className="text-lg font-bold text-emerald-400 flex items-center mb-3"><Check className="w-5 h-5 mr-2" /> Advantages</h4>
                        <ul className="space-y-2 text-sm text-slate-300 list-disc pl-5">
                            <li>Enables polymorphic behavior which makes software highly extensible.</li>
                            <li>Interfaces guarantee a contract, completely decoupling modules.</li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-5 rounded-xl shadow-sm mt-4">
                        <h4 className="text-lg font-bold text-red-400 flex items-center mb-3"><AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages</h4>
                        <ul className="space-y-2 text-sm text-slate-300 list-disc pl-5">
                            <li>Deep inheritance hierarchies can lead to fragile base class problems.</li>
                            <li>C# does not support multiple inheritance for classes (only for interfaces).</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'csharp-exception-handling',
            title: '7. [Intermediate] Exception Handling (try-catch-finally)',
            definition: 'Exceptions handle runtime errors using try, catch, and finally blocks. Custom exception classes inherit from System.Exception.',
            syntax: `try {\n    // Risky code\n} catch (InvalidOperationException ex) {\n    // Specific Handler\n} finally {\n    // Always executes\n}`,
            codeSnippet: `using System;\n\npublic class InsufficientFundsException : Exception {\n    public InsufficientFundsException(decimal balance, decimal amount)\n        : base($"Attempted to withdraw ₹{amount} with balance of ₹{balance}") { }\n}\n\nclass ExceptionDemo {\n    static void Withdraw(decimal balance, decimal amount) {\n        if (amount > balance) {\n            throw new InsufficientFundsException(balance, amount);\n        }\n    }\n\n    static void Main() {\n        try {\n            Withdraw(2000, 5000);\n        } catch (InsufficientFundsException ex) {\n            Console.WriteLine($"[Custom Exception]: {ex.Message}");\n        } finally {\n            Console.WriteLine("Transaction audit completed.");\n        }\n    }\n}`,
            realLifeScenario: 'ASP.NET Core global exception handling middleware intercepts unhandled exceptions, returning standardized RFC 7807 ProblemDetails JSON responses.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2"><BookOpen className="w-5 h-5 mr-2" /> Definition</h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">Exceptions handle runtime errors using try, catch, and finally blocks. Custom exception classes inherit from <code className="text-cyan-600 font-mono">System.Exception</code>.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2"><Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy</h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">Think of an exception like an emergency alarm. The try block is the normal work, the catch block is the fire department responding to a specific alarm, and finally is sweeping the floor regardless of whether there was a fire or not.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4"><Layers className="w-5 h-5 mr-2 text-indigo-500" /> Visual Explanation</h4>
                        <MermaidDiagram chart={`graph TD\n    A[Try Block] -->|Error Thrown| B[Catch Block]\n    A -->|Success| C[Finally Block]\n    B --> C\n    C --> D[Continue Execution]`} />
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center"><Code className="w-5 h-5 mr-2 text-purple-600" /> Sample Code</h4>
                        <CodeBlock code={`try {\n    Withdraw(2000, 5000);\n} catch (InsufficientFundsException ex) {\n    Console.WriteLine(ex.Message);\n} finally {\n    Console.WriteLine("Cleanup");\n}`} lang="csharp" colorClass="purple" filename="Program.cs" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2"><Cpu className="w-5 h-5 mr-2" /> Real-World Application</h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">ASP.NET Core global exception handling middleware intercepts unhandled exceptions, returning standardized RFC 7807 ProblemDetails JSON responses.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-5 rounded-xl shadow-sm">
                        <h4 className="text-lg font-bold text-emerald-400 flex items-center mb-3"><Check className="w-5 h-5 mr-2" /> Advantages</h4>
                        <ul className="space-y-2 text-sm text-slate-300 list-disc pl-5">
                            <li>Separates error handling logic from regular business logic.</li>
                            <li>The <code className="text-cyan-400">finally</code> block ensures resources (like database connections) are closed safely.</li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-5 rounded-xl shadow-sm mt-4">
                        <h4 className="text-lg font-bold text-red-400 flex items-center mb-3"><AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages</h4>
                        <ul className="space-y-2 text-sm text-slate-300 list-disc pl-5">
                            <li>Using exceptions for normal control flow is an anti-pattern and impacts performance heavily.</li>
                            <li>Catching raw <code className="text-cyan-400">Exception</code> instead of specific exceptions can hide critical bugs.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'csharp-collections-deep-dive',
            title: '8. [Intermediate] Collections Deep Dive (Dictionary, HashSet, Queue)',
            definition: 'System.Collections.Generic provides high-performance collections: Dictionary<K,V> (O(1) lookups), HashSet<T> (unique sets), Queue<T> (FIFO), and Stack<T> (LIFO).',
            syntax: `var dict = new Dictionary<int, string>();\nvar uniqueSet = new HashSet<int>();\nvar queue = new Queue<string>();\nvar stack = new Stack<string>();`,
            codeSnippet: `using System;\nusing System.Collections.Generic;\n\nclass CollectionsDeepDive {\n    static void Main() {\n        // 1. Key-Value Dictionary (O(1) Hash Lookup)\n        var userRoles = new Dictionary<string, string> {\n            { "vinay@advcoder.com", "Admin" },\n            { "user@domain.com", "Member" }\n        };\n\n        if (userRoles.TryGetValue("vinay@advcoder.com", out string role)) {\n            Console.WriteLine($"User Role: {role}");\n        }\n\n        // 2. HashSet for Unique Filtering\n        var tagSet = new HashSet<string> { "csharp", "dotnet", "csharp", "azure" };\n        Console.WriteLine($"Unique Tag Count: {tagSet.Count}"); // 3\n    }\n}`,
            realLifeScenario: 'In-memory caching modules use `Dictionary<TKey, TValue>` or `MemoryCache` for O(1) key lookups.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2"><BookOpen className="w-5 h-5 mr-2" /> Definition</h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">Provides high-performance generic collections: <code className="text-cyan-600 font-mono">Dictionary&lt;K,V&gt;</code> for fast key-based lookups, <code className="text-cyan-600 font-mono">HashSet&lt;T&gt;</code> for unique elements, <code className="text-cyan-600 font-mono">Queue&lt;T&gt;</code> for First-In-First-Out, and <code className="text-cyan-600 font-mono">Stack&lt;T&gt;</code> for Last-In-First-Out.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2"><Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy</h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">A Dictionary is like a phonebook where you look up a name (key) to instantly find a number (value). A HashSet is like a VIP guest list where duplicates are automatically ignored.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4"><Layers className="w-5 h-5 mr-2 text-indigo-500" /> Visual Explanation</h4>
                        <MermaidDiagram chart={`graph LR\n    A[Key 'user@domain'] --> B{Hash Function}\n    B --> C[Memory Bucket 14]\n    C --> D[Value 'Admin']\n    style C fill:#f9f,stroke:#333,stroke-width:2px`} />
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center"><Code className="w-5 h-5 mr-2 text-purple-600" /> Sample Code</h4>
                        <CodeBlock code={`var roles = new Dictionary<string, string>();\nroles.Add("user1", "Admin");\nif (roles.TryGetValue("user1", out var role)) {\n    Console.WriteLine(role);\n}`} lang="csharp" colorClass="purple" filename="Program.cs" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2"><Cpu className="w-5 h-5 mr-2" /> Real-World Application</h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">In-memory caching modules use <code className="text-cyan-600 font-mono">Dictionary&lt;TKey, TValue&gt;</code> or <code className="text-cyan-600 font-mono">MemoryCache</code> for near-instant O(1) lookups.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-5 rounded-xl shadow-sm">
                        <h4 className="text-lg font-bold text-emerald-400 flex items-center mb-3"><Check className="w-5 h-5 mr-2" /> Advantages</h4>
                        <ul className="space-y-2 text-sm text-slate-300 list-disc pl-5">
                            <li><code className="text-cyan-400">Dictionary</code> offers O(1) time complexity for reading, making lookups incredibly fast.</li>
                            <li><code className="text-cyan-400">HashSet</code> guarantees uniqueness without manual loop checks.</li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-5 rounded-xl shadow-sm mt-4">
                        <h4 className="text-lg font-bold text-red-400 flex items-center mb-3"><AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages</h4>
                        <ul className="space-y-2 text-sm text-slate-300 list-disc pl-5">
                            <li>Dictionaries and HashSets are not thread-safe out of the box (requires <code className="text-cyan-400">ConcurrentDictionary</code>).</li>
                            <li>They consume more memory than simple lists due to hash bucket overhead.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'csharp-linq-basics',
            title: '9. [Intermediate] LINQ Basics (Select, Where, OrderBy)',
            definition: 'LINQ (Language Integrated Query) queries in-memory collections, databases, or XML documents declaratively using Method Syntax or Query Syntax.',
            syntax: `/* LINQ Method Syntax Blueprint */\nvar filtered = list.Where(item => item.IsActive)\n                   .OrderBy(item => item.Name)\n                   .Select(item => item.Title);`,
            codeSnippet: `using System;\nusing System.Collections.Generic;\nusing System.Linq;\n\nrecord Product(int Id, string Name, decimal Price, string Category);\n\nclass LinqDemo {\n    static void Main() {\n        var products = new List<Product> {\n            new(1, "Laptop", 75000, "Electronics"),\n            new(2, "Mouse", 1500, "Electronics"),\n            new(3, "Desk Chair", 12000, "Furniture"),\n            new(4, "Monitor", 22000, "Electronics")\n        };\n\n        // LINQ Method Syntax\n        var expensiveElectronics = products\n            .Where(p => p.Category == "Electronics" && p.Price > 20000)\n            .OrderByDescending(p => p.Price)\n            .Select(p => new { p.Name, p.Price });\n\n        Console.WriteLine("--- High Value Electronics ---");\n        foreach (var item in expensiveElectronics) {\n            Console.WriteLine($"{item.Name}: ₹{item.Price}");\n        }\n    }\n}`,
            realLifeScenario: 'Entity Framework Core translates C# LINQ queries directly into optimized SQL queries executed on SQL Server or PostgreSQL.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2"><BookOpen className="w-5 h-5 mr-2" /> Definition</h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">LINQ (Language Integrated Query) queries in-memory collections, databases, or XML documents declaratively using Method Syntax or Query Syntax.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2"><Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy</h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">Imagine sorting a deck of cards. Instead of manually inspecting and moving each card one by one, you just declare: &quot;Give me all Spades, ordered by value.&quot; LINQ handles the internal looping logic.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4"><Layers className="w-5 h-5 mr-2 text-indigo-500" /> Visual Explanation</h4>
                        <MermaidDiagram chart={`graph LR\n    A[Collection] -->|Where| B[Filtered List]\n    B -->|OrderBy| C[Sorted List]\n    C -->|Select| D[Projected Result]\n    style A fill:#bbf,stroke:#333`} />
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center"><Code className="w-5 h-5 mr-2 text-purple-600" /> Sample Code</h4>
                        <CodeBlock code={`var results = products\n    .Where(p => p.Price > 1000)\n    .OrderBy(p => p.Name)\n    .Select(p => p.Name);`} lang="csharp" colorClass="purple" filename="Program.cs" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2"><Cpu className="w-5 h-5 mr-2" /> Real-World Application</h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">Entity Framework Core translates C# LINQ queries directly into optimized SQL queries executed on SQL Server or PostgreSQL.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-5 rounded-xl shadow-sm">
                        <h4 className="text-lg font-bold text-emerald-400 flex items-center mb-3"><Check className="w-5 h-5 mr-2" /> Advantages</h4>
                        <ul className="space-y-2 text-sm text-slate-300 list-disc pl-5">
                            <li>Replaces bulky loops with clean, readable, declarative statements.</li>
                            <li>Employs deferred execution, meaning the query runs only when iterating over the results, saving resources.</li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-5 rounded-xl shadow-sm mt-4">
                        <h4 className="text-lg font-bold text-red-400 flex items-center mb-3"><AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages</h4>
                        <ul className="space-y-2 text-sm text-slate-300 list-disc pl-5">
                            <li>Can be harder to debug line-by-line compared to a standard <code className="text-cyan-400">foreach</code> loop.</li>
                            <li>Complex chained queries can cause performance hits if not optimized.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'csharp-delegates-events',
            title: '10. [Intermediate] Delegates & Events (Action, Func, Pub/Sub)',
            definition: 'Delegates are type-safe function pointers. Built-in Action<T> and Func<T> delegates power event-driven Publisher-Subscriber patterns using the event keyword.',
            syntax: `public event Action<string> OnUserRegistered;\npublic Func<int, int, int> addFunc = (a, b) => a + b;`,
            codeSnippet: `using System;\n\npublic class UserService {\n    // Event Declaration using Action<T>\n    public event Action<string> UserRegistered;\n\n    public void RegisterUser(string email) {\n        Console.WriteLine($"Registered User: {email}");\n        // Trigger Publisher Event\n        UserRegistered?.Invoke(email);\n    }\n}\n\npublic class EmailNotifier {\n    public void SendWelcomeEmail(string email) {\n        Console.WriteLine($"[Email Service] Sent welcome email to {email}");\n    }\n}\n\nclass EventDemo {\n    static void Main() {\n        var service = new UserService();\n        var notifier = new EmailNotifier();\n\n        // Subscribe Listener\n        service.UserRegistered += notifier.SendWelcomeEmail;\n        service.RegisterUser("vinay@advcoder.com");\n    }\n}`,
            realLifeScenario: 'GUI apps, microservice messaging systems, and domain event buses use C# Events for decoupled publisher-subscriber notification pipelines.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2"><BookOpen className="w-5 h-5 mr-2" /> Definition</h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">Delegates are type-safe function pointers. Built-in <code className="text-cyan-600 font-mono">Action&lt;T&gt;</code> and <code className="text-cyan-600 font-mono">Func&lt;T&gt;</code> delegates power event-driven Publisher-Subscriber patterns.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2"><Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy</h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">Think of an event like a YouTube channel subscription. The YouTuber (Publisher) uploads a video and triggers an event. All subscribers (Listeners) receive a notification instantly without constantly checking the channel.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4"><Layers className="w-5 h-5 mr-2 text-indigo-500" /> Visual Explanation</h4>
                        <MermaidDiagram chart={`graph TD\n    A[Publisher Event] -->|Invoke()| B[Subscriber 1]\n    A -->|Invoke()| C[Subscriber 2]\n    A -->|Invoke()| D[Subscriber 3]`} />
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center"><Code className="w-5 h-5 mr-2 text-purple-600" /> Sample Code</h4>
                        <CodeBlock code={`public event Action<string> UserRegistered;\n// Subscribe\nUserRegistered += SendEmail;\n// Trigger\nUserRegistered?.Invoke("vinay@advcoder.com");`} lang="csharp" colorClass="purple" filename="Program.cs" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2"><Cpu className="w-5 h-5 mr-2" /> Real-World Application</h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">GUI apps (WPF/WinForms), microservice messaging systems, and domain event buses use C# Events for decoupled notification pipelines.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-5 rounded-xl shadow-sm">
                        <h4 className="text-lg font-bold text-emerald-400 flex items-center mb-3"><Check className="w-5 h-5 mr-2" /> Advantages</h4>
                        <ul className="space-y-2 text-sm text-slate-300 list-disc pl-5">
                            <li>Promotes loose coupling between system components.</li>
                            <li><code className="text-cyan-400">Func</code> and <code className="text-cyan-400">Action</code> delegates eliminate the need to declare custom delegate types manually.</li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-5 rounded-xl shadow-sm mt-4">
                        <h4 className="text-lg font-bold text-red-400 flex items-center mb-3"><AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages</h4>
                        <ul className="space-y-2 text-sm text-slate-300 list-disc pl-5">
                            <li>Memory leaks can occur if subscribers forget to unsubscribe (<code className="text-cyan-400">-=</code>) from long-living publishers.</li>
                        </ul>
                    </div>
                </div>
            )
        },

        // ==================== ADVANCED TIER ====================
        {
            id: 'csharp-generics-constraints',
            title: '11. [Advanced] Generics & Type Constraints (where T : class)',
            definition: 'Generics create type-safe classes, interfaces, and methods. Constraints (where T : class, struct, new(), IEntity) enforce compile-time generic type rules.',
            syntax: `public class Repository<T> where T : class, new() {\n    public T GetById(int id) { return new T(); }\n}`,
            codeSnippet: `using System;\n\npublic interface IEntity {\n    int Id { get; set; }\n}\n\npublic class Customer : IEntity {\n    public int Id { get; set; }\n    public string Name { get; set; }\n}\n\n// Generic Class with Constraints\npublic class EntityRepository<T> where T : class, IEntity, new() {\n    public void Save(T entity) {\n        Console.WriteLine($"Saved Entity ID {entity.Id} to Database.");\n    }\n}\n\nclass GenericsDemo {\n    static void Main() {\n        var repo = new EntityRepository<Customer>();\n        repo.Save(new Customer { Id = 501, Name = "Vinay" });\n    }\n}`,
            realLifeScenario: 'Repository pattern implementations in enterprise backend APIs use generic classes (`Repository<T>`) to handle CRUD operations.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2"><BookOpen className="w-5 h-5 mr-2" /> Definition</h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">Generics create type-safe classes and methods. Constraints enforce compile-time rules on what types can be passed to <code className="text-cyan-600 font-mono">T</code>.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2"><Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy</h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">Generics are like customizable storage containers. You define a &quot;Container for T&quot;. The constraint acts as a security check, ensuring that &quot;T must be a liquid&quot; before you can pour it in.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4"><Layers className="w-5 h-5 mr-2 text-indigo-500" /> Visual Explanation</h4>
                        <MermaidDiagram chart={`graph TD\n    A[Generic Class Repository<T>]\n    A -->|where T : IEntity| B[Valid: Customer]\n    A -->|where T : IEntity| C[Valid: Product]\n    A -.->|Error| D[Invalid: String]`} />
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center"><Code className="w-5 h-5 mr-2 text-purple-600" /> Sample Code</h4>
                        <CodeBlock code={`public class Repository<T> where T : IEntity {\n    public void Save(T entity) {\n        // Entity is guaranteed to have Id property\n        Console.WriteLine(entity.Id);\n    }\n}`} lang="csharp" colorClass="purple" filename="Program.cs" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2"><Cpu className="w-5 h-5 mr-2" /> Real-World Application</h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">Repository pattern implementations in enterprise backend APIs use generic classes (<code className="text-cyan-600 font-mono">Repository&lt;T&gt;</code>) to handle CRUD operations universally.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-5 rounded-xl shadow-sm">
                        <h4 className="text-lg font-bold text-emerald-400 flex items-center mb-3"><Check className="w-5 h-5 mr-2" /> Advantages</h4>
                        <ul className="space-y-2 text-sm text-slate-300 list-disc pl-5">
                            <li>Maximizes code reusability without sacrificing compile-time type safety.</li>
                            <li>Prevents boxing/unboxing performance penalties associated with the <code className="text-cyan-400">object</code> base type.</li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-5 rounded-xl shadow-sm mt-4">
                        <h4 className="text-lg font-bold text-red-400 flex items-center mb-3"><AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages</h4>
                        <ul className="space-y-2 text-sm text-slate-300 list-disc pl-5">
                            <li>Highly generic code can be extremely difficult to read and understand for beginners.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'csharp-async-await-tasks',
            title: '12. [Advanced] Async / Await & Task Concurrency',
            definition: 'Asynchronous programming using Task, Task<T>, async, and await enables non-blocking asynchronous execution across I/O-bound operations.',
            syntax: `public async Task<string> FetchDataAsync(CancellationToken cancellationToken) {\n    var response = await httpClient.GetAsync(url, cancellationToken);\n    return await response.Content.ReadAsStringAsync();\n}`,
            codeSnippet: `using System;\nusing System.Threading.Tasks;\n\nclass AsyncDemo {\n    static async Task<string> FetchUserDataAsync(int userId) {\n        Console.WriteLine($"[Async] Requesting user {userId} data...");\n        await Task.Delay(1000); // Simulate non-blocking I/O delay\n        return $"UserData for ID {userId}";\n    }\n\n    static async Task Main() {\n        Console.WriteLine("Program Started.");\n        \n        // Execute Async Task\n        string result = await FetchUserDataAsync(101);\n        Console.WriteLine($"Result: {result}");\n        \n        Console.WriteLine("Program Finished.");\n    }\n}`,
            realLifeScenario: 'ASP.NET Core Web APIs handle thousands of concurrent requests by making database and HTTP calls asynchronously using `await`.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2"><BookOpen className="w-5 h-5 mr-2" /> Definition</h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">Asynchronous programming enables non-blocking execution across I/O-bound operations using <code className="text-cyan-600 font-mono">Task</code>, <code className="text-cyan-600 font-mono">async</code>, and <code className="text-cyan-600 font-mono">await</code>.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2"><Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy</h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">Imagine a chef baking a cake. Instead of staring at the oven for 30 minutes (blocking), the chef sets a timer and preps other ingredients (async). When the timer rings, they resume with the baked cake.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4"><Layers className="w-5 h-5 mr-2 text-indigo-500" /> Visual Explanation</h4>
                        <MermaidDiagram chart={`sequenceDiagram\n    participant Main Thread\n    participant Network I/O\n    Main Thread->>Network I/O: await FetchAsync()\n    Note over Main Thread: Thread Freed for other work\n    Network I/O-->>Main Thread: Data Ready\n    Main Thread->>Main Thread: Resumes Execution`} />
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center"><Code className="w-5 h-5 mr-2 text-purple-600" /> Sample Code</h4>
                        <CodeBlock code={`static async Task<string> GetDataAsync() {\n    await Task.Delay(1000);\n    return "Done";\n}\n\nstring result = await GetDataAsync();`} lang="csharp" colorClass="purple" filename="Program.cs" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2"><Cpu className="w-5 h-5 mr-2" /> Real-World Application</h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">ASP.NET Core Web APIs handle thousands of concurrent requests by making database and HTTP calls asynchronously using <code className="text-cyan-600 font-mono">await</code>.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-5 rounded-xl shadow-sm">
                        <h4 className="text-lg font-bold text-emerald-400 flex items-center mb-3"><Check className="w-5 h-5 mr-2" /> Advantages</h4>
                        <ul className="space-y-2 text-sm text-slate-300 list-disc pl-5">
                            <li>Drastically improves application scalability and responsiveness.</li>
                            <li>Prevents UI thread freezing in desktop/mobile apps.</li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-5 rounded-xl shadow-sm mt-4">
                        <h4 className="text-lg font-bold text-red-400 flex items-center mb-3"><AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages</h4>
                        <ul className="space-y-2 text-sm text-slate-300 list-disc pl-5">
                            <li>Can easily cause deadlocks if mixed incorrectly with synchronous code (e.g., calling <code className="text-cyan-400">.Result</code>).</li>
                            <li>The state machine generated by the compiler adds a tiny overhead to execution.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'csharp-dotnet-clr-gc',
            title: '13. [Advanced] .NET Core Fundamentals (CLR, JIT, Garbage Collector)',
            definition: 'The .NET CLR (Common Language Runtime) executes compiled MSIL bytecode, managing memory via generational Garbage Collection (Gen 0, Gen 1, Gen 2) and JIT compilation.',
            syntax: `/* Generational Garbage Collection:\nGen 0: Short-lived temporary objects\nGen 1: Buffer layer between Gen 0 and Gen 2\nGen 2: Long-lived persistent objects (Server pools) */`,
            codeSnippet: `using System;\n\nclass GCDemo {\n    static void Main() {\n        Console.WriteLine($"Max GC Generations: {GC.MaxGeneration}");\n        \n        // Check allocated memory\n        long memoryBefore = GC.GetTotalMemory(false);\n        Console.WriteLine($"Memory Allocated: {memoryBefore / 1024} KB");\n\n        // Force explicit GC collection (Rarely recommended in production)\n        GC.Collect(0, GCCollectionMode.Forced);\n        Console.WriteLine("Gen 0 GC Collected.");\n    }\n}`,
            realLifeScenario: 'High-throughput .NET backend servers profile Gen 2 GC collections to prevent long garbage collection stop-the-world pauses.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2"><BookOpen className="w-5 h-5 mr-2" /> Definition</h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">The .NET CLR executes compiled MSIL bytecode, managing memory via generational Garbage Collection and JIT (Just-In-Time) compilation.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2"><Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy</h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">The GC is like an automated cleaning crew. They clean small messes frequently (Gen 0), intermediate messes less often (Gen 1), and do a deep house clean rarely (Gen 2) to save time.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4"><Layers className="w-5 h-5 mr-2 text-indigo-500" /> Visual Explanation</h4>
                        <MermaidDiagram chart={`graph TD\n    A[New Object Allocated] --> B[Gen 0]\n    B -->|Survives GC| C[Gen 1]\n    C -->|Survives GC| D[Gen 2]\n    D -->|Long Lived Objects| E[Application Lifetime]`} />
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center"><Code className="w-5 h-5 mr-2 text-purple-600" /> Sample Code</h4>
                        <CodeBlock code={`long mem = GC.GetTotalMemory(false);\nGC.Collect(0, GCCollectionMode.Optimized);\nConsole.WriteLine($"Memory: {mem}");`} lang="csharp" colorClass="purple" filename="Program.cs" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2"><Cpu className="w-5 h-5 mr-2" /> Real-World Application</h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">High-throughput .NET backend servers profile Gen 2 GC collections to prevent long garbage collection &quot;stop-the-world&quot; pauses.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-5 rounded-xl shadow-sm">
                        <h4 className="text-lg font-bold text-emerald-400 flex items-center mb-3"><Check className="w-5 h-5 mr-2" /> Advantages</h4>
                        <ul className="space-y-2 text-sm text-slate-300 list-disc pl-5">
                            <li>Removes the burden of manual memory management and prevents most memory leaks.</li>
                            <li>JIT optimizes the code specifically for the hardware it runs on at runtime.</li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-5 rounded-xl shadow-sm mt-4">
                        <h4 className="text-lg font-bold text-red-400 flex items-center mb-3"><AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages</h4>
                        <ul className="space-y-2 text-sm text-slate-300 list-disc pl-5">
                            <li>GC collections can cause non-deterministic pauses which are detrimental to real-time applications like games.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'csharp-file-io-streams',
            title: '14. [Advanced] File I/O & Streams (using Statement, IDisposable)',
            definition: 'File I/O reads and writes disk streams via FileStream, StreamReader, and StreamWriter. The using statement guarantees IDisposable cleanup.',
            syntax: `using var streamWriter = new StreamWriter("log.txt", append: true);\nawait streamWriter.WriteLineAsync("Log entry");`,
            codeSnippet: `using System;\nusing System.IO;\nusing System.Threading.Tasks;\n\nclass FileStreamDemo {\n    static async Task Main() {\n        string filePath = "app_log.txt";\n\n        // Modern C# 8 using declaration (Auto-disposes at scope end)\n        using (var writer = new StreamWriter(filePath, append: true)) {\n            await writer.WriteLineAsync($"[{DateTime.UtcNow:o}] Log Entry Processed.");\n        }\n\n        // Reading file asynchronously\n        using (var reader = new StreamReader(filePath)) {\n            string content = await reader.ReadToEndAsync();\n            Console.WriteLine("File Content:\\n" + content);\n        }\n    }\n}`,
            realLifeScenario: 'Loggers and file attachment endpoints wrap file streams in `using` blocks to prevent file locking bugs on servers.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2"><BookOpen className="w-5 h-5 mr-2" /> Definition</h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">File I/O accesses disk streams. The <code className="text-cyan-600 font-mono">using</code> statement guarantees automatic invocation of <code className="text-cyan-600 font-mono">Dispose()</code> to clean up unmanaged resources.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2"><Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy</h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">The <code className="text-cyan-600 font-mono">using</code> block is like renting a car with a strict contract. The moment your rental period ends, the car is automatically returned to the agency, guaranteeing no one else is blocked from using it.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4"><Layers className="w-5 h-5 mr-2 text-indigo-500" /> Visual Explanation</h4>
                        <MermaidDiagram chart={`graph LR\n    A[Open FileStream] --> B{using Block Execution}\n    B -->|Exception or Success| C[Dispose Called Automatically]\n    C --> D[File Handle Released]`} />
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center"><Code className="w-5 h-5 mr-2 text-purple-600" /> Sample Code</h4>
                        <CodeBlock code={`using (var writer = new StreamWriter("log.txt")) {\n    await writer.WriteLineAsync("Log entry");\n}\n// Automatically disposed here`} lang="csharp" colorClass="purple" filename="Program.cs" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2"><Cpu className="w-5 h-5 mr-2" /> Real-World Application</h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">Loggers and file attachment endpoints wrap file streams in <code className="text-cyan-600 font-mono">using</code> blocks to prevent file locking bugs on servers.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-5 rounded-xl shadow-sm">
                        <h4 className="text-lg font-bold text-emerald-400 flex items-center mb-3"><Check className="w-5 h-5 mr-2" /> Advantages</h4>
                        <ul className="space-y-2 text-sm text-slate-300 list-disc pl-5">
                            <li>Completely prevents file access exceptions resulting from unclosed file handles.</li>
                            <li>Provides clean syntactic sugar over bulky <code className="text-cyan-400">try-finally</code> blocks.</li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-5 rounded-xl shadow-sm mt-4">
                        <h4 className="text-lg font-bold text-red-400 flex items-center mb-3"><AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages</h4>
                        <ul className="space-y-2 text-sm text-slate-300 list-disc pl-5">
                            <li>Failing to implement <code className="text-cyan-400">IDisposable</code> properly in custom classes defeats the purpose.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'csharp-reflection-basics',
            title: '15. [Advanced] Reflection Basics (System.Reflection)',
            definition: 'Reflection inspects assembly metadata, types, methods, and attributes dynamically at runtime, enabling dynamic invocation and ORM mapping.',
            syntax: `Type type = typeof(Customer);\nPropertyInfo[] props = type.GetProperties();\nMethodInfo method = type.GetMethod("Save");`,
            codeSnippet: `using System;\nusing System.Reflection;\n\npublic class SampleModel {\n    public int Id { get; set; }\n    public string Title { get; set; }\n}\n\nclass ReflectionDemo {\n    static void Main() {\n        Type t = typeof(SampleModel);\n        Console.WriteLine($"Inspecting Type: {t.FullName}");\n\n        PropertyInfo[] properties = t.GetProperties();\n        foreach (var prop in properties) {\n            Console.WriteLine($"Property: {prop.Name} | Type: {prop.PropertyType.Name}");\n        }\n    }\n}`,
            realLifeScenario: 'JSON serializers (System.Text.Json, Newtonsoft) and Dependency Injection containers inspect class properties using Reflection.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2"><BookOpen className="w-5 h-5 mr-2" /> Definition</h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">Reflection inspects assembly metadata, types, methods, and attributes dynamically at runtime, enabling dynamic invocation and ORM mapping.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2"><Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy</h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">Reflection is like an X-ray machine for your code. At runtime, it allows your application to look inside itself, discover its own structure, and manipulate it.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4"><Layers className="w-5 h-5 mr-2 text-indigo-500" /> Visual Explanation</h4>
                        <MermaidDiagram chart={`graph LR\n    A[Class Instance] -->|typeof()| B[Type Metadata]\n    B --> C[GetProperties()]\n    B --> D[GetMethods()]\n    C --> E[Dynamic Property Access]`} />
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center"><Code className="w-5 h-5 mr-2 text-purple-600" /> Sample Code</h4>
                        <CodeBlock code={`Type type = typeof(Customer);\nforeach(var prop in type.GetProperties()) {\n    Console.WriteLine(prop.Name);\n}`} lang="csharp" colorClass="purple" filename="Program.cs" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2"><Cpu className="w-5 h-5 mr-2" /> Real-World Application</h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">JSON serializers, AutoMapper, and Dependency Injection containers inspect class properties using Reflection to automate binding.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-5 rounded-xl shadow-sm">
                        <h4 className="text-lg font-bold text-emerald-400 flex items-center mb-3"><Check className="w-5 h-5 mr-2" /> Advantages</h4>
                        <ul className="space-y-2 text-sm text-slate-300 list-disc pl-5">
                            <li>Enables highly dynamic, flexible, and meta-programming scenarios.</li>
                            <li>Essential for building modern frameworks, ORMs, and serializers.</li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-5 rounded-xl shadow-sm mt-4">
                        <h4 className="text-lg font-bold text-red-400 flex items-center mb-3"><AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages</h4>
                        <ul className="space-y-2 text-sm text-slate-300 list-disc pl-5">
                            <li>Reflection is significantly slower than direct execution; heavy usage degrades performance.</li>
                            <li>Bypasses standard compile-time type checking, increasing runtime error risks.</li>
                        </ul>
                    </div>
                </div>
            )
        },

        // ==================== PROFESSIONAL TIER ====================
        {
            id: 'csharp-aspnet-core-web-api',
            title: '16. [Professional] ASP.NET Core Web API & Middleware',
            definition: 'ASP.NET Core builds cross-platform RESTful Web APIs, organizing endpoints into Controllers (`[ApiController]`, `[HttpGet]`) and configuring middleware pipelines.',
            syntax: `[ApiController]\n[Route("api/[controller]")]\npublic class UsersController : ControllerBase {\n    [HttpGet("{id}")]\n    public IActionResult GetUser(int id) => Ok(new { Id = id });\n}`,
            codeSnippet: `/* ASP.NET Core Web API Controller Code Sample */\nusing Microsoft.AspNetCore.Mvc;\n\n[ApiController]\n[Route("api/v1/[controller]")]\npublic class ProductsController : ControllerBase {\n    [HttpGet]\n    public IActionResult GetAllProducts() {\n        var products = new[] {\n            new { Id = 1, Name = "Laptop", Price = 75000 },\n            new { Id = 2, Name = "Mouse", Price = 1500 }\n        };\n        return Ok(products);\n    }\n\n    [HttpPost]\n    public IActionResult CreateProduct([FromBody] dynamic productDto) {\n        return Created("/api/v1/products/3", productDto);\n    }\n}`,
            realLifeScenario: 'Enterprise backend APIs use ASP.NET Core for building microservices handling thousands of requests per second.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2"><BookOpen className="w-5 h-5 mr-2" /> Definition</h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">ASP.NET Core is a cross-platform framework for building REST APIs, using Controllers, routing attributes, and HTTP middleware pipelines.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2"><Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy</h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">The Middleware pipeline is like an assembly line for HTTP requests. Every request passes through security checks, logging, and routing sequentially before a Controller handles it.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4"><Layers className="w-5 h-5 mr-2 text-indigo-500" /> Visual Explanation</h4>
                        <MermaidDiagram chart={`graph TD\n    A[HTTP Request] --> B[Authentication Middleware]\n    B --> C[Routing Middleware]\n    C --> D[Controller Endpoint]\n    D --> E[JSON Response]`} />
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center"><Code className="w-5 h-5 mr-2 text-purple-600" /> Sample Code</h4>
                        <CodeBlock code={`[ApiController]\n[Route("api/[controller]")]\npublic class UsersController : ControllerBase {\n    [HttpGet("{id}")]\n    public IActionResult GetUser(int id) => Ok(new { Id = id });\n}`} lang="csharp" colorClass="purple" filename="UsersController.cs" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2"><Cpu className="w-5 h-5 mr-2" /> Real-World Application</h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">Enterprise backend APIs use ASP.NET Core for building modular microservices capable of handling thousands of requests per second.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-5 rounded-xl shadow-sm">
                        <h4 className="text-lg font-bold text-emerald-400 flex items-center mb-3"><Check className="w-5 h-5 mr-2" /> Advantages</h4>
                        <ul className="space-y-2 text-sm text-slate-300 list-disc pl-5">
                            <li>Extremely fast and highly scalable due to modern Kestrel web server integrations.</li>
                            <li>Cross-platform support ensures deployments on Linux, Windows, or macOS.</li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-5 rounded-xl shadow-sm mt-4">
                        <h4 className="text-lg font-bold text-red-400 flex items-center mb-3"><AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages</h4>
                        <ul className="space-y-2 text-sm text-slate-300 list-disc pl-5">
                            <li>Configuration and dependency setup can be overwhelming for developers used to simpler frameworks like Express.js.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'csharp-entity-framework-core',
            title: '17. [Professional] Entity Framework Core (DbContext & Migrations)',
            definition: 'Entity Framework Core (EF Core) is an Object-Relational Mapper (ORM), mapping C# classes to database tables via DbContext, DbSet<T>, and Migrations.',
            syntax: `public class AppDbContext : DbContext {\n    public DbSet<Customer> Customers { get; set; }\n    protected override void OnConfiguring(DbContextOptionsBuilder options) => \n        options.UseSqlServer("ConnectionString");\n}`,
            codeSnippet: `/* EF Core DB Migration CLI Commands */\n$ dotnet ef migrations add InitialCreate\n$ dotnet ef database update`,
            realLifeScenario: 'Enterprise applications query SQL databases using EF Core, managing database migrations directly inside C# codebases.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2"><BookOpen className="w-5 h-5 mr-2" /> Definition</h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">EF Core is an ORM that maps C# classes to database tables, handling querying, updates, and schema changes natively via C#.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2"><Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy</h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">EF Core is an automatic translator. It takes your C# thoughts and translates them perfectly into the SQL language that the database understands.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4"><Layers className="w-5 h-5 mr-2 text-indigo-500" /> Visual Explanation</h4>
                        <MermaidDiagram chart={`graph LR\n    A[C# LINQ Query] --> B[EF Core DbContext]\n    B -->|Translates to SQL| C[(SQL Server)]\n    C -->|Returns Data| B\n    B -->|Maps to Objects| A`} />
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center"><Code className="w-5 h-5 mr-2 text-purple-600" /> Sample Code</h4>
                        <CodeBlock code={`var users = _dbContext.Users\n    .Where(u => u.IsActive)\n    .ToList();`} lang="csharp" colorClass="purple" filename="Query.cs" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2"><Cpu className="w-5 h-5 mr-2" /> Real-World Application</h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">Used heavily in enterprise applications to manage complex database migrations securely from code repositories.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-5 rounded-xl shadow-sm">
                        <h4 className="text-lg font-bold text-emerald-400 flex items-center mb-3"><Check className="w-5 h-5 mr-2" /> Advantages</h4>
                        <ul className="space-y-2 text-sm text-slate-300 list-disc pl-5">
                            <li>Drastically speeds up database-driven development without writing raw SQL.</li>
                            <li>Built-in change tracking manages updates and inserts intelligently.</li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-5 rounded-xl shadow-sm mt-4">
                        <h4 className="text-lg font-bold text-red-400 flex items-center mb-3"><AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages</h4>
                        <ul className="space-y-2 text-sm text-slate-300 list-disc pl-5">
                            <li>Complex queries can sometimes generate highly inefficient SQL (N+1 queries problem).</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'csharp-dependency-injection',
            title: '18. [Professional] Dependency Injection (Transient, Scoped, Singleton)',
            definition: 'ASP.NET Core features built-in Dependency Injection (DI), managing service lifetimes: Transient (new instance per request), Scoped (1 instance per HTTP request), Singleton (1 instance app lifetime).',
            syntax: `builder.Services.AddTransient<ITransientService, TransientService>();\nbuilder.Services.AddScoped<IScopedService, ScopedService>();\nbuilder.Services.AddSingleton<ISingletonService, SingletonService>();`,
            codeSnippet: `/* Injected Service in Controller */\npublic class OrdersController : ControllerBase {\n    private readonly IOrderService _orderService;\n\n    // Constructor Injection\n    public OrdersController(IOrderService orderService) {\n        _orderService = orderService;\n    }\n}`,
            realLifeScenario: 'DbContext instances are registered as `Scoped` so that database connections automatically close at the end of each HTTP web request.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2"><BookOpen className="w-5 h-5 mr-2" /> Definition</h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">ASP.NET Core utilizes a built-in IoC container that injects services into classes rather than instantiating them directly, managing their memory lifetimes automatically.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2"><Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy</h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">Instead of bringing your own tools to work (instantiating objects), the company (DI Container) hands you the exact tools you need the moment you clock in.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4"><Layers className="w-5 h-5 mr-2 text-indigo-500" /> Visual Explanation</h4>
                        <MermaidDiagram chart={`graph TD\n    A[DI Container] -->|Injects| B[Service A]\n    A -->|Injects| C[Service B]\n    B -->|Injected into| D[Controller]\n    C -->|Injected into| D`} />
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center"><Code className="w-5 h-5 mr-2 text-purple-600" /> Sample Code</h4>
                        <CodeBlock code={`builder.Services.AddScoped<IOrderService, OrderService>();\n\npublic class Controller(IOrderService service) { }`} lang="csharp" colorClass="purple" filename="Program.cs" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2"><Cpu className="w-5 h-5 mr-2" /> Real-World Application</h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">DbContext is registered as Scoped to ensure safe database transactions tied strictly to a single HTTP request lifecycle.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-5 rounded-xl shadow-sm">
                        <h4 className="text-lg font-bold text-emerald-400 flex items-center mb-3"><Check className="w-5 h-5 mr-2" /> Advantages</h4>
                        <ul className="space-y-2 text-sm text-slate-300 list-disc pl-5">
                            <li>Promotes testability by allowing dependencies to be easily mocked out in unit tests.</li>
                            <li>Enforces the Dependency Inversion Principle, decoupling software modules.</li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-5 rounded-xl shadow-sm mt-4">
                        <h4 className="text-lg font-bold text-red-400 flex items-center mb-3"><AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages</h4>
                        <ul className="space-y-2 text-sm text-slate-300 list-disc pl-5">
                            <li>Mixing lifetimes incorrectly (e.g., injecting Scoped into Singleton) causes notorious memory leaks (Captive Dependency).</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'csharp-unit-testing-xunit-moq',
            title: '19. [Professional] Unit Testing (xUnit / NUnit & Moq Framework)',
            definition: 'Automated testing uses xUnit or NUnit with Moq to mock dependencies, following the Arrange-Act-Assert (AAA) pattern.',
            syntax: `[Fact]\npublic void Test_Calculator_Add() {\n    // Arrange\n    var calc = new Calculator();\n    // Act\n    var result = calc.Add(2, 3);\n    // Assert\n    Assert.Equal(5, result);\n}`,
            codeSnippet: `using Xunit;\nusing Moq;\n\npublic interface IUserRepository {\n    string GetUserName(int id);\n}\n\npublic class UserServiceTests {\n    [Fact]\n    public void GetUser_Returns_CorrectName_WhenUserExists() {\n        // Arrange\n        var mockRepo = new Mock<IUserRepository>();\n        mockRepo.Setup(r => r.GetUserName(101)).Returns("Vinay Mahato");\n\n        // Act\n        var result = mockRepo.Object.GetUserName(101);\n\n        // Assert\n        Assert.Equal("Vinay Mahato", result);\n    }\n}`,
            realLifeScenario: 'CI/CD build pipelines run `dotnet test` to execute xUnit suites before deploying releases.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2"><BookOpen className="w-5 h-5 mr-2" /> Definition</h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">Automated testing uses xUnit (or NUnit) to write tests and Moq to mock interfaces, strictly isolating the unit under test using the AAA pattern.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2"><Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy</h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">Mocking is like testing an airplane engine in a wind tunnel simulation instead of flying a real plane—you isolate the component to ensure it works securely.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4"><Layers className="w-5 h-5 mr-2 text-indigo-500" /> Visual Explanation</h4>
                        <MermaidDiagram chart={`graph TD\n    A[Arrange: Setup Mock] --> B[Act: Call Method]\n    B --> C[Assert: Verify Result]\n    C --> D{Test Pass/Fail}`} />
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center"><Code className="w-5 h-5 mr-2 text-purple-600" /> Sample Code</h4>
                        <CodeBlock code={`[Fact]\npublic void VerifyMath() {\n    Assert.Equal(4, 2 + 2);\n}`} lang="csharp" colorClass="purple" filename="Tests.cs" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2"><Cpu className="w-5 h-5 mr-2" /> Real-World Application</h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">CI/CD build pipelines use <code className="text-cyan-600 font-mono">dotnet test</code> to run comprehensive test suites to prevent regression bugs in production environments.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-5 rounded-xl shadow-sm">
                        <h4 className="text-lg font-bold text-emerald-400 flex items-center mb-3"><Check className="w-5 h-5 mr-2" /> Advantages</h4>
                        <ul className="space-y-2 text-sm text-slate-300 list-disc pl-5">
                            <li>Guarantees existing features do not break when new updates are merged into the repository.</li>
                            <li>Enables confident refactoring.</li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-5 rounded-xl shadow-sm mt-4">
                        <h4 className="text-lg font-bold text-red-400 flex items-center mb-3"><AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages</h4>
                        <ul className="space-y-2 text-sm text-slate-300 list-disc pl-5">
                            <li>Requires extra upfront development time which can delay rapid prototyping.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'csharp-microservices-cloud-azure',
            title: '20. [Professional] Microservices & Cloud Deployment (Docker & Azure)',
            definition: 'Modern C# microservices use high-performance gRPC protocols, containerization via Docker, and deployment to Azure App Service / AKS.',
            syntax: `# Dockerfile for .NET Web API\nFROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base\nWORKDIR /app\nCOPY . .\nENTRYPOINT ["dotnet", "MyApi.dll"]`,
            codeSnippet: `# Command to publish .NET Web API release binary\n$ dotnet publish -c Release -o ./publish\n\n# Build Docker Container Image\n$ docker build -t my-dotnet-api .\n$ docker run -p 8080:8080 my-dotnet-api`,
            realLifeScenario: 'Enterprise cloud solutions deploy ASP.NET Core microservices to Azure Kubernetes Service (AKS) for automated auto-scaling.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2"><BookOpen className="w-5 h-5 mr-2" /> Definition</h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">Microservices split large architectures into smaller independent pieces. Containers (Docker) package the code, which is then hosted on cloud services like Azure AKS.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2"><Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy</h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">A monolith is a giant cruise ship. Microservices are a fleet of small speedboats—if one engine fails on a speedboat, the rest of the fleet keeps moving smoothly.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4"><Layers className="w-5 h-5 mr-2 text-indigo-500" /> Visual Explanation</h4>
                        <MermaidDiagram chart={`graph TD\n    A[API Gateway] --> B[Auth Service]\n    A --> C[Order Service]\n    A --> D[Payment Service]\n    C --> E[(SQL)]\n    D --> F[(NoSQL)]`} />
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center"><Code className="w-5 h-5 mr-2 text-purple-600" /> Sample Code</h4>
                        <CodeBlock code={`FROM mcr.microsoft.com/dotnet/aspnet:8.0\nWORKDIR /app\nCOPY . .\nENTRYPOINT ["dotnet", "App.dll"]`} lang="docker" colorClass="purple" filename="Dockerfile" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2"><Cpu className="w-5 h-5 mr-2" /> Real-World Application</h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">Large enterprise systems deploy heavily optimized ASP.NET Core gRPC microservices via Docker to Azure Kubernetes Service.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-5 rounded-xl shadow-sm">
                        <h4 className="text-lg font-bold text-emerald-400 flex items-center mb-3"><Check className="w-5 h-5 mr-2" /> Advantages</h4>
                        <ul className="space-y-2 text-sm text-slate-300 list-disc pl-5">
                            <li>Isolates failures—a crash in the payment service won't bring down the entire application.</li>
                            <li>Allows scaling specific high-traffic components individually.</li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-5 rounded-xl shadow-sm mt-4">
                        <h4 className="text-lg font-bold text-red-400 flex items-center mb-3"><AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages</h4>
                        <ul className="space-y-2 text-sm text-slate-300 list-disc pl-5">
                            <li>Drastically increases infrastructure complexity.</li>
                            <li>Requires handling complex distributed transactions and tracing logs across servers.</li>
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
            title="C# & .NET Masterclass Course"
            description="Master C# from Variables, Control Flow, and LINQ to Async/Await, ASP.NET Core Web API, EF Core, Dependency Injection, and Microservices."
            topics={topics}
            icon={Terminal}
            colorClass="purple"
            activeTopicIndex={activeTopicIndex}
            onTopicClick={setActiveTopicIndex}
        >
            <div className="space-y-8">
                <div className="prose dark:prose-invert max-w-none text-sm text-gray-700 dark:text-gray-300">
                    {activeTopic.content}
                </div>
            </div>
        </CoursePageLayout>
    );
};

export default CSharpCoursePage;
