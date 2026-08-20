import React, { useState } from 'react';
import CoursePageLayout from '../../components/CoursePageLayout';
import { Terminal, Code, BookOpen, Lightbulb, FileText, Cpu, Layers, Box, Zap, ShieldAlert, Check, AlertTriangle } from 'lucide-react';
import CodeBlock from '../../components/CodeBlock';
import MermaidDiagram from '../../components/MermaidDiagram';

interface CppTopic {
    id: string;
    title: string;
    definition: string;
    example?: string;
    syntax?: string;
    realLifeScenario?: string;
    codeSnippet?: string | null;
    content: React.ReactNode;
}

const CppCoursePage = () => {
    const [activeTopicIndex, setActiveTopicIndex] = useState(0);

    const courseData: CppTopic[] = [
        // ==================== BEGINNER TIER ====================
        {
            id: 'cpp-syntax-io-auto',
            title: '1. [Beginner] Syntax, I/O Streams & auto Keyword',
            definition: 'C++ is a high-performance, statically-typed compiled language that extends C with object-oriented and generic programming capabilities. Input and output operations are handled using type-safe stream objects: std::cout (stream output) and std::cin (stream input). Introduced in C++11, the auto keyword performs automatic type deduction, instructing the compiler to infer a variable data type automatically from its initialization value at compile time.',
            syntax: `#include <iostream>

int main() {
    auto score = 100; // Automatically deduced as int at compile time
    std::cout << "Score: " << score << std::endl;
    return 0;
}`,
            codeSnippet: `#include <iostream>
#include <string>

int main() {
    // Automatic type deduction with auto keyword
    auto user_name = std::string("Vinay Mahato"); // Deduced as std::string
    auto user_score = 98.5;                        // Deduced as double
    auto rank = 1;                                 // Deduced as int

    // Type-safe stream output (std::cout)
    std::cout << "User: " << user_name << "\\n";
    std::cout << "Score: " << user_score << " | Rank: #" << rank << std::endl;

    return 0;
}`,
            realLifeScenario: 'Game engines like Unreal Engine and AAA video games use C++ for bare-metal hardware execution speed and direct GPU API integration.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-cyan-800 dark:text-cyan-300 mb-1 flex items-center">
                            <BookOpen className="w-4 h-4 mr-2" />
                            1. Definition
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            C++ is a high-performance, statically-typed compiled language that extends C with object-oriented and generic programming capabilities. Input and output operations are handled using type-safe stream objects: <code className="text-cyan-600 font-mono font-bold">std::cout</code> (stream output) and <code className="text-cyan-600 font-mono font-bold">std::cin</code> (stream input). Introduced in C++11, the <code className="text-cyan-600 font-mono font-bold">auto</code> keyword performs automatic type deduction, instructing the compiler to infer a variable's data type automatically from its initialization value at compile time.
                        </p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center">
                            <Lightbulb className="w-4 h-4 mr-2" />
                            2. Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            Think of the <code className="text-cyan-600 font-mono">auto</code> keyword like an automatic currency scanner at an airport exchange counter. Instead of forcing you to fill out paperwork declaring whether you handed over Dollars, Euros, or Yen, the scanner reads your bill and identifies its currency type instantly. In C++, <code className="text-cyan-600 font-mono">auto</code> scans the initialization value on the right side of the equals sign during compilation and assigns the exact data type without forcing you to write repetitive type declarations.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                            <Layers className="w-4 h-4 mr-2 text-cyan-600" />
                            3. Compile-Time Type Deduction Pipeline (Mermaid.js Diagram)
                        </h4>
                        <MermaidDiagram 
                            chart={`graph LR
    A["C++ Code: auto score = 98.5;"] -->|Compile Time Analysis| B[C++ Compiler Deduction Engine]
    B -->|Analyzes Value 98.5| C["Inferred Type: double"]
    C -->|Generates Machine Code| D["Allocates Memory: 8 Bytes (double)"]
    D -->|std::cout Stream Output| E["Console Display: 98.5"]`}
                            caption="Figure 1.1: C++ Compile-Time Type Deduction Pipeline showing how the compiler infers data types automatically via the auto keyword."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                            This diagram illustrates how C++ compile-time type deduction evaluates right-hand expressions to assign static variable types without runtime performance overhead.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                            <Code className="w-4 h-4 mr-2 text-cyan-600" />
                            4. Sample Code
                        </h4>
                        <CodeBlock 
                            code={`#include <iostream>
#include <string>

int main() {
    auto user_name = std::string("Vinay Mahato");
    auto user_score = 98.5;
    auto rank = 1;

    std::cout << "User: " << user_name << "\\n";
    std::cout << "Score: " << user_score << " | Rank: #" << rank << std::endl;

    return 0;
}`} 
                            lang="cpp" 
                            colorClass="cyan" 
                            filename="main.cpp" 
                        />
                        <p className="text-xs text-gray-500 font-mono mt-1">
                            // Demonstrating C++11 auto type deduction and type-safe std::cout stream output.
                        </p>
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center">
                            <Cpu className="w-4 h-4 mr-2" />
                            5. Real-World Application
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            C++ stream I/O and <code className="text-cyan-600 font-mono">auto</code> type deduction are used in AAA Video Game engines (Unreal Engine), high-frequency trading (HFT) platforms, and cross-platform desktop applications (Qt framework) where zero-overhead abstractions and maximum CPU execution speed are essential.
                        </p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center">
                            <Check className="w-4 h-4 mr-2" />
                            6. Advantages
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li><code className="text-cyan-400">auto</code> eliminates verbose type declarations, especially when iterating over complex STL containers.</li>
                            <li>Stream I/O (<code className="text-cyan-400">std::cout</code> / <code className="text-cyan-400">std::cin</code>) provides type-safe output formatting without relying on manual format specifier strings.</li>
                            <li>Zero runtime overhead: type deduction happens entirely at compile time.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center">
                            <AlertTriangle className="w-4 h-4 mr-2" />
                            7. Disadvantages / Limitations
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Overusing <code className="text-cyan-400">auto</code> can reduce code readability if initialization expressions do not make the underlying type obvious.</li>
                            <li>Using <code className="text-cyan-400">std::endl</code> flushes output memory buffers repeatedly, slowing down high-volume loop printing (prefer <code className="text-cyan-400">\n</code> for performance).</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'cpp-functions-references',
            title: '2. [Beginner] Functions, Overloading & Pass-by-Reference (&)',
            definition: 'C++ supports function overloading (same function name with different parameter signatures) and passing arguments by reference (&) to avoid expensive copy overhead.',
            syntax: `/* Function Overloading & Reference Syntax */
void printValue(int val);
void printValue(double val);

void updateScore(int &scoreRef) {
    scoreRef += 10; // Modifies caller variable directly
}`,
            codeSnippet: `#include <iostream>
#include <string>

// Function Overloading
void display(int val) {
    std::cout << "Integer Value: " << val << std::endl;
}

void display(std::string text) {
    std::cout << "String Message: " << text << std::endl;
}

// Pass-by-Reference (&)
void incrementByTen(int &numberRef) {
    numberRef += 10;
}

int main() {
    int myNum = 50;
    incrementByTen(myNum);
    
    display(myNum);
    display("C++ Function Overloading Success!");
    return 0;
}`,
            realLifeScenario: 'Passing large objects (e.g. `const std::vector<Data> &vec`) by constant reference eliminates deep array memory duplication across function calls.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-cyan-800 dark:text-cyan-300 mb-1 flex items-center">
                            <BookOpen className="w-4 h-4 mr-2" />
                            1. Definition
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            <code className="text-cyan-600 font-mono font-bold">Function overloading</code> allows multiple functions to share the same name but differ in parameter count or types — the compiler selects the correct version at compile time based on the arguments passed. <code className="text-cyan-600 font-mono font-bold">Pass-by-reference</code> (<code className="text-cyan-600 font-mono">&amp;</code>) passes a direct alias to the caller&apos;s variable, avoiding the cost of copying large objects and allowing the function to modify the original value directly.
                        </p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center">
                            <Lightbulb className="w-4 h-4 mr-2" />
                            2. Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            Function overloading is like a receptionist who answers &quot;How can I help?&quot; differently depending on who&apos;s asking — a patient gets directed to a doctor, a delivery person gets directed to the mailroom. Same question, different response based on context. Pass-by-reference is like giving someone the keys to your actual car (not a copy) — they can drive it, modify it, and when they return it, your car reflects the changes.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                            <Layers className="w-4 h-4 mr-2 text-cyan-600" />
                            3. Function Overload Resolution (Mermaid.js Diagram)
                        </h4>
                        <MermaidDiagram 
                            chart={`graph TD
    A["Call: display(42)"] --> B{"Compiler checks signatures"}
    B -->|"int parameter match"| C["display(int val) selected"]
    D["Call: display('Hello')"] --> B
    B -->|"string parameter match"| E["display(string text) selected"]
    F["incrementByTen(myNum)"] -->|"Pass by Reference &"| G["Function modifies original myNum directly"]
    G --> H["No copy created - zero overhead"]`}
                            caption="Figure 2.1: Compile-time overload resolution selects the matching function signature, while pass-by-reference avoids copying."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                            The compiler resolves which overloaded function to call at compile time based on argument types — no runtime overhead.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                            <Code className="w-4 h-4 mr-2 text-cyan-600" />
                            4. Sample Code
                        </h4>
                        <CodeBlock 
                            code={`#include <iostream>
#include <string>

void display(int val) { std::cout << "Int: " << val << "\\n"; }
void display(std::string text) { std::cout << "Str: " << text << "\\n"; }

void incrementByTen(int &numRef) { numRef += 10; }

int main() {
    int score = 50;
    incrementByTen(score);  // score is now 60
    display(score);         // Calls display(int)
    display("Overloaded!"); // Calls display(string)
    return 0;
}`}
                            lang="cpp" colorClass="cyan" filename="functions.cpp" 
                        />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center">
                            <Cpu className="w-4 h-4 mr-2" />
                            5. Real-World Application
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            Graphics APIs overload <code className="text-cyan-600 font-mono">draw()</code> for different shape types (circle, rectangle, mesh). High-performance systems pass large data buffers by <code className="text-cyan-600 font-mono">const &amp;</code> to avoid multi-megabyte copy overhead.
                        </p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Overloading provides clean, intuitive APIs — one function name for multiple types.</li>
                            <li>Pass-by-reference eliminates expensive deep copy overhead for large objects.</li>
                            <li><code className="text-cyan-400">const &amp;</code> provides read-only reference access with zero-copy performance.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Overloading based on return type alone is not allowed — only parameter signatures differentiate overloads.</li>
                            <li>Ambiguous overloads (e.g., <code className="text-cyan-400">display(0)</code> matching both int and pointer) cause compilation errors.</li>
                            <li>Non-const references can unintentionally modify caller data — use <code className="text-cyan-400">const &amp;</code> when mutation is not intended.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'cpp-strings',
            title: '3. [Beginner] Standard Strings (std::string) vs C-Strings',
            definition: 'C++ provides the std::string class from <string>, managing dynamic memory, bounds safety, concatenation (+), and string manipulation methods (length, substr, find).',
            syntax: `#include <string>

std::string s1 = "Hello";
std::string s2 = " World";
std::string combined = s1 + s2;
size_t len = combined.length();`,
            codeSnippet: `#include <iostream>
#include <string>

int main() {
    std::string title = "Advanced C++ Masterclass";

    // String operations
    std::cout << "Length: " << title.length() << " characters\\n";
    std::cout << "Substring (0, 12): " << title.substr(0, 12) << "\\n";

    size_t pos = title.find("C++");
    if (pos != std::string::npos) {
        std::cout << "Found 'C++' at index position: " << pos << "\\n";
    }

    return 0;
}`,
            realLifeScenario: 'Web browser engines (Chromium) handle text nodes using C++ string instances equipped with fast SSO (Small String Optimization).',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-cyan-800 dark:text-cyan-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            <code className="text-cyan-600 font-mono font-bold">std::string</code> is a C++ standard library class that manages character data with automatic memory allocation, bounds checking, and rich methods for manipulation. Unlike C-style strings (<code className="text-cyan-600 font-mono">char[]</code>) which require manual null-terminator management and are prone to buffer overflows, <code className="text-cyan-600 font-mono">std::string</code> handles memory resizing, concatenation via <code className="text-cyan-600 font-mono">+</code> operator, and comparison via <code className="text-cyan-600 font-mono">==</code> automatically.
                        </p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            A C-string is like writing on a fixed-size whiteboard — if your message gets too long, you overflow off the edge and damage whatever&apos;s next to it. <code className="text-cyan-600 font-mono">std::string</code> is like writing on a digital tablet that auto-expands — it grows to fit your text, lets you easily search for words (<code className="text-cyan-600 font-mono">find</code>), extract sections (<code className="text-cyan-600 font-mono">substr</code>), and join sentences (<code className="text-cyan-600 font-mono">+</code>) without worrying about running out of space.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-cyan-600" />3. std::string vs C-String Comparison (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph TD
    A["C-String: char arr[10]"] --> B["Fixed size at declaration"]
    B --> C["Manual null terminator management"]
    C --> D["Buffer overflow risk"]
    E["std::string"] --> F["Dynamic size auto-managed"]
    F --> G["Automatic memory allocation"]
    G --> H["Safe concatenation with + operator"]
    H --> I["SSO: Short strings stored on stack"]`}
                            caption="Figure 3.1: C-String vs std::string comparison showing fixed-size risks versus dynamic, safe string management."
                        />
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-cyan-600" />4. Sample Code</h4>
                        <CodeBlock code={`#include <iostream>
#include <string>

int main() {
    std::string title = "Advanced C++ Masterclass";
    std::cout << "Length: " << title.length() << "\\n";
    std::cout << "Substr: " << title.substr(0, 8) << "\\n";
    
    // Safe concatenation
    std::string greeting = "Hello" + std::string(", ") + "World!";
    std::cout << greeting << "\\n";
    
    // Find substring
    if (title.find("C++") != std::string::npos) {
        std::cout << "Contains C++!\\n";
    }
    return 0;
}`} lang="cpp" colorClass="cyan" filename="strings.cpp" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Web browsers (Chromium) use <code className="text-cyan-600 font-mono">std::string</code> with Small String Optimization (SSO) to store short DOM text nodes on the stack, bypassing heap allocation for strings under ~22 characters.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Automatic memory management — no manual <code className="text-cyan-400">malloc/free</code> or buffer size tracking.</li>
                            <li>SSO (Small String Optimization) avoids heap allocation for short strings (~15-23 chars).</li>
                            <li>Safe comparison with <code className="text-cyan-400">==</code> instead of error-prone <code className="text-cyan-400">strcmp()</code>.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Heap allocation overhead for strings exceeding SSO buffer size.</li>
                            <li>Passing <code className="text-cyan-400">std::string</code> by value copies the entire string — always use <code className="text-cyan-400">const &amp;</code>.</li>
                            <li>Interoperability with C APIs requires <code className="text-cyan-400">.c_str()</code> conversion to get a <code className="text-cyan-400">const char*</code>.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'cpp-pointers-references',
            title: '4. [Beginner] Pointers vs References (* vs &)',
            definition: 'Pointers (*) store memory addresses and can be reassigned or set to nullptr. References (&) are immutable aliases for existing variables.',
            syntax: `int val = 100;
int *ptr = &val;   /* Pointer (can be nullptr, rebindable) */
int &ref = val;    /* Reference (must be initialized, immutable alias) */`,
            codeSnippet: `#include <iostream>

int main() {
    int original = 500;

    int *ptr = &original; // Pointer stores address
    int &ref = original;  // Reference is an alias

    *ptr = 600; // Mutates original via dereferencing pointer
    std::cout << "Original after *ptr mutation: " << original << "\\n";

    ref = 700;  // Mutates original directly via alias
    std::cout << "Original after ref mutation:  " << original << "\\n";

    return 0;
}`,
            realLifeScenario: 'C++ API designers prefer references (`&`) for required parameters and pointers (`*`) for optional parameters that accept `nullptr`.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-cyan-800 dark:text-cyan-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            A <code className="text-cyan-600 font-mono font-bold">pointer</code> (<code className="text-cyan-600 font-mono">*</code>) is a variable that holds the memory address of another variable — it can be reassigned, set to <code className="text-cyan-600 font-mono">nullptr</code>, and dereferenced with <code className="text-cyan-600 font-mono">*</code>. A <code className="text-cyan-600 font-mono font-bold">reference</code> (<code className="text-cyan-600 font-mono">&amp;</code>) is an immutable alias that must be initialized at declaration and cannot be rebound to a different variable. References provide cleaner syntax for pass-by-reference without pointer dereferencing overhead.
                        </p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            A pointer is like a GPS coordinate written on a piece of paper — you can erase it and write a new location, or leave the paper blank (<code className="text-cyan-600 font-mono">nullptr</code>). A reference is like a person&apos;s nickname — once assigned (&quot;Vinay is called V&quot;), you can&apos;t make that nickname refer to someone else. Both point to the same person/data, but references are permanently bound.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-cyan-600" />3. Pointer vs Reference Comparison (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph LR
    A["int val = 100"] --> B["Memory: 0x7FFD"]
    C["int *ptr = &val"] -->|"Stores address"| B
    D["int &ref = val"] -->|"Permanent alias"| B
    C -->|"Can be nullptr"| E["ptr = nullptr"]
    C -->|"Can rebind"| F["ptr = &other"]
    D -->|"Cannot be null"| G["Always valid"]
    D -->|"Cannot rebind"| H["Bound forever"]`}
                            caption="Figure 4.1: Pointer vs Reference — pointers are flexible but nullable, references are safe but immutable."
                        />
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-cyan-600" />4. Sample Code</h4>
                        <CodeBlock code={`#include <iostream>

int main() {
    int original = 500;
    int *ptr = &original;
    int &ref = original;

    *ptr = 600;
    std::cout << "After pointer: " << original << "\\n"; // 600
    ref = 700;
    std::cout << "After reference: " << original << "\\n"; // 700

    // Pointer can be reassigned
    int other = 999;
    ptr = &other;
    std::cout << "Pointer now: " << *ptr << "\\n"; // 999
    return 0;
}`} lang="cpp" colorClass="cyan" filename="ptr_vs_ref.cpp" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">API designers use references for mandatory parameters and pointers for optional ones that accept <code className="text-cyan-600 font-mono">nullptr</code>. Smart pointer APIs (<code className="text-cyan-600 font-mono">unique_ptr</code>, <code className="text-cyan-600 font-mono">shared_ptr</code>) internally use pointers for ownership semantics.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>References guarantee non-null access — no null pointer dereference crashes.</li>
                            <li>Cleaner syntax — no <code className="text-cyan-400">*</code> dereferencing or <code className="text-cyan-400">-&gt;</code> needed.</li>
                            <li>Pointers provide flexibility for dynamic memory, linked structures, and optional parameters.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>References cannot represent &quot;nothing&quot; — use pointers or <code className="text-cyan-400">std::optional</code> for nullable semantics.</li>
                            <li>Dangling references (to destroyed objects) cause undefined behavior just like dangling pointers.</li>
                            <li>References cannot be stored in arrays or resized containers (use pointers or <code className="text-cyan-400">std::reference_wrapper</code>).</li>
                        </ul>
                    </div>
                </div>
            )
        },
        // ==================== INTERMEDIATE TIER ====================
        {
            id: 'cpp-classes-objects',
            title: '5. [Intermediate] Classes & Access Specifiers (public, private, protected)',
            definition: 'Classes encapsulate member data and methods. Access specifiers regulate visibility: public (accessible anywhere), private (accessible only inside class), protected (accessible in child classes).',
            syntax: `class ClassName {
private:
    int privateMember;
public:
    void setMember(int val) { privateMember = val; }
};`,
            codeSnippet: `#include <iostream>
#include <string>

class UserProfile {
private:
    int userId;
    std::string email;

public:
    void initialize(int id, std::string userEmail) {
        userId = id;
        email = userEmail;
    }

    void displayProfile() const {
        std::cout << "User ID: " << userId << " | Email: " << email << "\\n";
    }
};

int main() {
    UserProfile user;
    user.initialize(1001, "vinay@advcoder.com");
    user.displayProfile();
    return 0;
}`,
            realLifeScenario: 'Banking applications enforce strict private encapsulation on account balance fields, exposing public methods for validation checks.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-cyan-800 dark:text-cyan-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            A <code className="text-cyan-600 font-mono font-bold">class</code> is a user-defined blueprint that bundles data (member variables) and behavior (member functions) into a single encapsulated unit. <code className="text-cyan-600 font-mono font-bold">Access specifiers</code> control which parts of the program can access class members: <code className="text-cyan-600 font-mono">public</code> (anyone), <code className="text-cyan-600 font-mono">private</code> (only the class itself), and <code className="text-cyan-600 font-mono">protected</code> (the class and its children).
                        </p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            A class is like a bank ATM machine. The <code className="text-cyan-600 font-mono">private</code> vault inside the ATM holds your cash (internal data). The <code className="text-cyan-600 font-mono">public</code> keypad and screen let you interact with it (public methods). You can&apos;t reach into the vault directly — you must use the public interface (withdraw, check balance). <code className="text-cyan-600 font-mono">Protected</code> is like a maintenance panel accessible only to bank employees (derived classes).
                        </p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-cyan-600" />3. Access Specifier Visibility (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph TD
    A["Class: BankAccount"] --> B["private: balance, pin"]
    A --> C["protected: accountType"]
    A --> D["public: deposit(), withdraw(), getBalance()"]
    E["External Code (main)"] -->|"Can access"| D
    E -->|"BLOCKED"| B
    E -->|"BLOCKED"| C
    F["Child Class: SavingsAccount"] -->|"Can access"| C
    F -->|"Can access"| D
    F -->|"BLOCKED"| B`}
                            caption="Figure 5.1: Access specifier visibility rules — public is open to all, protected to children, private to the class itself only."
                        />
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-cyan-600" />4. Sample Code</h4>
                        <CodeBlock code={`#include <iostream>
#include <string>

class UserProfile {
private:
    int userId;
    std::string email;
public:
    UserProfile(int id, std::string e) : userId(id), email(e) {}
    void display() const {
        std::cout << "ID: " << userId << " | Email: " << email << "\\n";
    }
    int getId() const { return userId; }
};

int main() {
    UserProfile user(1001, "vinay@advcoder.com");
    user.display();
    // user.userId = 999; // ERROR: private member!
    return 0;
}`} lang="cpp" colorClass="cyan" filename="classes.cpp" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Banking software encapsulates account balances as <code className="text-cyan-600 font-mono">private</code> members, exposing <code className="text-cyan-600 font-mono">public</code> methods that validate transactions before modifying the balance, preventing direct manipulation.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Encapsulation protects internal state from invalid external modifications.</li>
                            <li><code className="text-cyan-400">const</code> member functions guarantee read-only access to object state.</li>
                            <li>Clear public API boundary makes code self-documenting and maintainable.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Over-encapsulation with excessive getters/setters can become boilerplate-heavy.</li>
                            <li><code className="text-cyan-400">friend</code> classes/functions bypass access specifiers, potentially breaking encapsulation.</li>
                            <li>C++ defaults class members to <code className="text-cyan-400">private</code> (unlike structs which default to <code className="text-cyan-400">public</code>), causing beginner confusion.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'cpp-constructors-destructors',
            title: '6. [Intermediate] Constructors, Destructors & Copy Constructors',
            definition: 'Constructors initialize objects during instantiation. Destructors (~ClassName) execute automatically when objects go out of scope, releasing acquired resources.',
            syntax: `class Resource {
public:
    Resource();                 /* Default Constructor */
    Resource(const Resource&);  /* Copy Constructor */
    ~Resource();                /* Destructor */
};`,
            codeSnippet: `#include <iostream>

class DynamicArray {
private:
    int *data;
    int size;

public:
    DynamicArray(int s) : size(s) {
        data = new int[size];
        std::cout << "Constructed Heap Array of size " << size << "\\n";
    }

    DynamicArray(const DynamicArray &other) : size(other.size) {
        data = new int[size];
        for (int i = 0; i < size; i++) data[i] = other.data[i];
        std::cout << "Deep Copy Constructed Array\\n";
    }

    ~DynamicArray() {
        delete[] data;
        std::cout << "Destructed & Memory Freed\\n";
    }
};

int main() {
    DynamicArray arr1(10);
    DynamicArray arr2 = arr1;
    return 0;
}`,
            realLifeScenario: 'Destructors form the cornerstone of RAII (Resource Acquisition Is Initialization), automatically closing open files, sockets, and memory allocations.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-cyan-800 dark:text-cyan-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            A <code className="text-cyan-600 font-mono font-bold">constructor</code> is a special function that runs automatically when an object is created, initializing its state. A <code className="text-cyan-600 font-mono font-bold">destructor</code> (<code className="text-cyan-600 font-mono">~ClassName</code>) runs automatically when the object goes out of scope, releasing resources like heap memory, file handles, or network connections. A <code className="text-cyan-600 font-mono font-bold">copy constructor</code> creates a new object as a deep copy of an existing one, preventing shared pointer aliasing bugs.
                        </p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            A constructor is like checking into a hotel — you get your room key, towels, and WiFi password automatically upon arrival. A destructor is like checkout — the hotel automatically collects your key, cleans the room, and frees it for the next guest. A copy constructor is like cloning your hotel reservation for a colleague — they get their own room with the same setup, not a shared key to yours.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-cyan-600" />3. Object Lifecycle (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph TD
    A["Object Declaration"] -->|"Constructor runs"| B["Object Initialized"]
    B --> C["Object Used in Scope"]
    C -->|"Scope ends or delete"| D["Destructor runs automatically"]
    D --> E["Memory/Resources Released"]
    B -->|"Copy: ObjB = ObjA"| F["Copy Constructor"]
    F --> G["Deep copy: independent data"]`}
                            caption="Figure 6.1: C++ Object Lifecycle — constructors initialize, destructors cleanup, copy constructors create independent clones."
                        />
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-cyan-600" />4. Sample Code</h4>
                        <CodeBlock code={`#include <iostream>

class DynamicArray {
    int *data; int size;
public:
    DynamicArray(int s) : size(s), data(new int[s]) {
        std::cout << "Constructed: size " << size << "\\n";
    }
    DynamicArray(const DynamicArray &o) : size(o.size), data(new int[o.size]) {
        for (int i = 0; i < size; i++) data[i] = o.data[i];
        std::cout << "Deep Copy Created\\n";
    }
    ~DynamicArray() { delete[] data; std::cout << "Destroyed\\n"; }
};

int main() {
    DynamicArray a(5);
    DynamicArray b = a; // Deep copy
    return 0; // Both destructors fire
}`} lang="cpp" colorClass="cyan" filename="constructors.cpp" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">RAII destructors automatically close database connections, release mutex locks, and flush file buffers — even when exceptions are thrown, preventing resource leaks in production systems.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Automatic cleanup via destructors — no manual resource release needed.</li>
                            <li>Member initializer lists (<code className="text-cyan-400">: member(val)</code>) are more efficient than assignment in the constructor body.</li>
                            <li>Deep copy constructors prevent double-free bugs from shared pointer aliasing.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Compiler-generated shallow copy constructors cause double-free crashes for classes with raw pointers.</li>
                            <li>Exception thrown in a constructor means the destructor is NOT called — partially constructed resources leak.</li>
                            <li>Rule of Three: if you write any of destructor/copy-constructor/copy-assignment, you must write all three.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'cpp-inheritance-polymorphism',
            title: '7. [Intermediate] Inheritance & Virtual Functions (override)',
            definition: 'Inheritance allows child classes to derive from base classes. Virtual functions (`virtual`) enable runtime dynamic polymorphism, allowing derived classes to override methods.',
            syntax: `class Base {
public:
    virtual void draw() const = 0; /* Pure Virtual Function */
};

class Derived : public Base {
public:
    void draw() const override { /* Implementation */ }
};`,
            codeSnippet: `#include <iostream>
#include <vector>

class Shape {
public:
    virtual void render() const = 0;
    virtual ~Shape() {}
};

class Circle : public Shape {
public:
    void render() const override { std::cout << "Rendering Circle\\n"; }
};

class Rectangle : public Shape {
public:
    void render() const override { std::cout << "Rendering Rectangle\\n"; }
};

int main() {
    std::vector<Shape*> scene;
    scene.push_back(new Circle());
    scene.push_back(new Rectangle());

    for (const auto shapePtr : scene) {
        shapePtr->render();
        delete shapePtr;
    }
    return 0;
}`,
            realLifeScenario: 'Graphics renderers (OpenGL/DirectX engines) manage collections of base `Entity*` pointers, polymorphically rendering specific derived mesh objects.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-cyan-800 dark:text-cyan-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            <code className="text-cyan-600 font-mono font-bold">Inheritance</code> lets a derived class inherit data and behavior from a base class, enabling code reuse. <code className="text-cyan-600 font-mono font-bold">Virtual functions</code> enable runtime polymorphism — the program decides which version of an overridden function to call based on the actual object type, not the pointer type. A <code className="text-cyan-600 font-mono font-bold">pure virtual function</code> (<code className="text-cyan-600 font-mono">= 0</code>) makes the base class abstract and forces derived classes to provide an implementation.
                        </p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            Inheritance is like a family tree — children inherit traits (eye color, height) from parents but can develop their own unique features. Virtual functions are like a universal &quot;play&quot; button on different media devices — pressing &quot;play&quot; on a DVD player shows a movie, on a radio it plays music, on a phone it starts a podcast. Same interface, different behavior depending on the device (derived class).
                        </p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-cyan-600" />3. Virtual Function Dispatch (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph TD
    A["Shape* ptr"] -->|"ptr->render()"| B{"VTable Lookup at Runtime"}
    B -->|"Actual type: Circle"| C["Circle::render() called"]
    B -->|"Actual type: Rectangle"| D["Rectangle::render() called"]
    E["Abstract Base: Shape"] -->|"Pure virtual = 0"| F["Cannot instantiate Shape directly"]
    E -->|"Derived classes must override"| C
    E -->|"Derived classes must override"| D`}
                            caption="Figure 7.1: Virtual function dispatch via VTable — the runtime determines which derived class method to call based on the actual object type."
                        />
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-cyan-600" />4. Sample Code</h4>
                        <CodeBlock code={`#include <iostream>
#include <memory>
#include <vector>

class Shape {
public:
    virtual void render() const = 0;
    virtual ~Shape() = default;
};

class Circle : public Shape {
public:
    void render() const override { std::cout << "Circle\\n"; }
};

class Rect : public Shape {
public:
    void render() const override { std::cout << "Rectangle\\n"; }
};

int main() {
    std::vector<std::unique_ptr<Shape>> scene;
    scene.push_back(std::make_unique<Circle>());
    scene.push_back(std::make_unique<Rect>());
    for (const auto &s : scene) s->render();
    return 0;
}`} lang="cpp" colorClass="cyan" filename="polymorphism.cpp" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Game engines maintain <code className="text-cyan-600 font-mono">std::vector&lt;Entity*&gt;</code> scene graphs where each entity polymorphically calls its own <code className="text-cyan-600 font-mono">update()</code> and <code className="text-cyan-600 font-mono">render()</code> methods every frame.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Enables writing generic code that works with any derived type through base pointers.</li>
                            <li><code className="text-cyan-400">override</code> keyword catches mismatched function signatures at compile time.</li>
                            <li>Abstract base classes define clean interface contracts enforced by the compiler.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>VTable lookup adds a small runtime indirection cost per virtual call.</li>
                            <li>Non-virtual destructors in base classes cause memory leaks when deleting via base pointers.</li>
                            <li>Diamond inheritance problem requires <code className="text-cyan-400">virtual</code> inheritance to resolve ambiguity.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'cpp-operator-overloading',
            title: '8. [Intermediate] Operator Overloading (+, -, <<, >>)',
            definition: 'Operator overloading defines custom behavior for C++ operators (+, -, ==, <<, >>, []) when applied to user-defined class objects.',
            syntax: `Complex operator+(const Complex &other) const {
    return Complex(real + other.real, imag + other.imag);
}`,
            codeSnippet: `#include <iostream>

class Vector2D {
public:
    float x, y;
    Vector2D(float xVal = 0, float yVal = 0) : x(xVal), y(yVal) {}
    Vector2D operator+(const Vector2D &other) const {
        return Vector2D(x + other.x, y + other.y);
    }
    friend std::ostream& operator<<(std::ostream &os, const Vector2D &vec) {
        os << "Vector2D(" << vec.x << ", " << vec.y << ")";
        return os;
    }
};

int main() {
    Vector2D v1(10.5f, 20.0f);
    Vector2D v2(5.5f, 4.0f);
    Vector2D v3 = v1 + v2;
    std::cout << "Result: " << v3 << "\\n";
    return 0;
}`,
            realLifeScenario: 'Math and physics libraries (Eigen, Bullet Physics) overload mathematical operators for vector and matrix calculations.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-cyan-800 dark:text-cyan-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            <code className="text-cyan-600 font-mono font-bold">Operator overloading</code> lets you redefine how built-in operators (<code className="text-cyan-600 font-mono">+</code>, <code className="text-cyan-600 font-mono">-</code>, <code className="text-cyan-600 font-mono">==</code>, <code className="text-cyan-600 font-mono">&lt;&lt;</code>, <code className="text-cyan-600 font-mono">[]</code>) behave when applied to your custom class objects. This makes user-defined types feel as natural to use as built-in types — you can add two <code className="text-cyan-600 font-mono">Vector2D</code> objects with <code className="text-cyan-600 font-mono">v1 + v2</code> just like adding integers.
                        </p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            The <code className="text-cyan-600 font-mono">+</code> symbol means different things in different contexts: for numbers it adds, for strings it concatenates, for shopping carts it merges items. Operator overloading lets you teach C++ what <code className="text-cyan-600 font-mono">+</code> means for your own custom objects — just like how a calculator app knows that adding two currency values should also handle decimal places and currency symbols.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-cyan-600" />3. Operator Overloading Dispatch (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph LR
    A["v1 + v2"] -->|"Compiler translates to"| B["v1.operator+(v2)"]
    B --> C["Returns new Vector2D(v1.x+v2.x, v1.y+v2.y)"]
    D["std::cout << v3"] -->|"Compiler translates to"| E["operator<<(cout, v3)"]
    E --> F["friend function writes to ostream"]`}
                            caption="Figure 8.1: Operator overloading — the compiler translates operator syntax into member or friend function calls."
                        />
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-cyan-600" />4. Sample Code</h4>
                        <CodeBlock code={`#include <iostream>

class Vec2 {
public:
    float x, y;
    Vec2(float x = 0, float y = 0) : x(x), y(y) {}
    Vec2 operator+(const Vec2 &o) const { return {x + o.x, y + o.y}; }
    Vec2 operator-(const Vec2 &o) const { return {x - o.x, y - o.y}; }
    bool operator==(const Vec2 &o) const { return x == o.x && y == o.y; }
    friend std::ostream& operator<<(std::ostream &os, const Vec2 &v) {
        return os << "(" << v.x << ", " << v.y << ")";
    }
};

int main() {
    Vec2 a(3, 4), b(1, 2);
    std::cout << "a+b = " << (a + b) << "\\n";
    std::cout << "a-b = " << (a - b) << "\\n";
    std::cout << "Equal? " << (a == b ? "Yes" : "No") << "\\n";
    return 0;
}`} lang="cpp" colorClass="cyan" filename="operators.cpp" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">The Eigen math library overloads <code className="text-cyan-600 font-mono">*</code> for matrix multiplication, <code className="text-cyan-600 font-mono">+</code> for element-wise addition, and <code className="text-cyan-600 font-mono">&lt;&lt;</code> for matrix initialization — making linear algebra code look like textbook math.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Makes custom types feel like native types with natural mathematical syntax.</li>
                            <li>Enables STL container compatibility (<code className="text-cyan-400">operator&lt;</code> for sorted containers).</li>
                            <li><code className="text-cyan-400">operator&lt;&lt;</code> enables direct <code className="text-cyan-400">std::cout</code> output for custom types.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Overloading operators with non-intuitive behavior confuses users (e.g., <code className="text-cyan-400">+</code> that subtracts).</li>
                            <li>Some operators cannot be overloaded: <code className="text-cyan-400">::</code>, <code className="text-cyan-400">.</code>, <code className="text-cyan-400">.*</code>, <code className="text-cyan-400">?:</code>.</li>
                            <li>Stream operators (<code className="text-cyan-400">&lt;&lt;</code>) must be <code className="text-cyan-400">friend</code> functions, breaking encapsulation slightly.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'cpp-stl-basics',
            title: '9. [Intermediate] Standard Template Library (std::vector, map, set)',
            definition: 'The STL provides container classes (std::vector, std::map, std::set), dynamic iterators, and algorithms.',
            syntax: `#include <vector>
#include <map>

std::vector<int> numbers = {10, 20, 30};
std::map<std::string, int> ageMap;
ageMap["Vinay"] = 25;`,
            codeSnippet: `#include <iostream>
#include <vector>
#include <map>
#include <set>

int main() {
    std::vector<std::string> languages = {"C++", "Python", "Java"};
    languages.push_back("TypeScript");

    std::map<std::string, double> priceMap;
    priceMap["Laptop"] = 75000.0;
    priceMap["Mouse"] = 1500.0;

    std::set<int> uniqueIds = {101, 102, 101, 103};

    std::cout << "Vector Size: " << languages.size() << "\\n";
    std::cout << "Laptop Price: ₹" << priceMap["Laptop"] << "\\n";
    std::cout << "Unique Set Count: " << uniqueIds.size() << "\\n";

    return 0;
}`,
            realLifeScenario: 'High-performance databases use `std::vector` for contiguous memory buffers and `std::map` for sorted dictionary indexing.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-cyan-800 dark:text-cyan-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            The <code className="text-cyan-600 font-mono font-bold">Standard Template Library (STL)</code> provides ready-made, heavily-optimized generic container classes. <code className="text-cyan-600 font-mono font-bold">std::vector</code> is a dynamic array with contiguous memory and O(1) random access. <code className="text-cyan-600 font-mono font-bold">std::map</code> is a sorted key-value store backed by a Red-Black tree with O(log n) lookups. <code className="text-cyan-600 font-mono font-bold">std::set</code> stores unique sorted elements with O(log n) insertion.
                        </p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            <code className="text-cyan-600 font-mono">std::vector</code> is like a stretchy suitcase — it starts small but expands as you add more items, and everything is packed neatly side by side. <code className="text-cyan-600 font-mono">std::map</code> is like a phone contacts book — each name (key) maps to a phone number (value), automatically sorted alphabetically. <code className="text-cyan-600 font-mono">std::set</code> is like a club membership list that automatically rejects duplicate entries and keeps names in order.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-cyan-600" />3. STL Container Comparison (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph TD
    A["STL Containers"] --> B["std::vector"]
    A --> C["std::map"]
    A --> D["std::set"]
    B --> E["Contiguous Memory, O(1) access"]
    B --> F["Dynamic resize with push_back"]
    C --> G["Key-Value pairs, Red-Black Tree"]
    C --> H["O(log n) insert/find"]
    D --> I["Unique elements only"]
    D --> J["Auto-sorted, O(log n)"]`}
                            caption="Figure 9.1: STL Container comparison — vector for sequential data, map for key-value lookups, set for unique sorted collections."
                        />
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-cyan-600" />4. Sample Code</h4>
                        <CodeBlock code={`#include <iostream>
#include <vector>
#include <map>
#include <set>

int main() {
    // Vector: dynamic contiguous array
    std::vector<int> nums = {5, 3, 8, 1};
    nums.push_back(10);
    
    // Map: sorted key-value store
    std::map<std::string, int> ages;
    ages["Vinay"] = 25;
    ages["Alice"] = 30;
    
    // Set: unique sorted elements
    std::set<int> ids = {3, 1, 4, 1, 5}; // {1, 3, 4, 5}
    
    std::cout << "Vector[0]: " << nums[0] << "\\n";
    std::cout << "Vinay's age: " << ages["Vinay"] << "\\n";
    std::cout << "Unique IDs: " << ids.size() << "\\n";
    return 0;
}`} lang="cpp" colorClass="cyan" filename="stl_basics.cpp" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Database engines use <code className="text-cyan-600 font-mono">std::vector</code> for contiguous page buffers and <code className="text-cyan-600 font-mono">std::map</code>/<code className="text-cyan-600 font-mono">std::unordered_map</code> for hash indexes. Game engines store entity lists in vectors for cache-friendly iteration.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li><code className="text-cyan-400">std::vector</code> provides O(1) random access with contiguous cache-friendly memory.</li>
                            <li>STL containers are heavily tested and optimized — no need to implement from scratch.</li>
                            <li>Range-based for loops (<code className="text-cyan-400">for (auto &amp;x : vec)</code>) provide clean iteration syntax.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li><code className="text-cyan-400">std::vector</code> reallocations copy all elements when capacity is exceeded — use <code className="text-cyan-400">reserve()</code>.</li>
                            <li><code className="text-cyan-400">std::map</code> has O(log n) overhead vs <code className="text-cyan-400">std::unordered_map</code>&apos;s O(1) average.</li>
                            <li>Iterator invalidation after insertions/deletions causes undefined behavior if not handled carefully.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        // ==================== ADVANCED TIER ====================
        {
            id: 'cpp-templates-generic',
            title: '10. [Advanced] Templates & Generic Programming',
            definition: 'Templates enable generic programming, allowing functions and classes to operate over arbitrary data types specified at compile time.',
            syntax: `template <typename T>
T findMax(T a, T b) {
    return (a > b) ? a : b;
}`,
            codeSnippet: `#include <iostream>
#include <string>

template <typename T>
T addValues(T a, T b) { return a + b; }

template <typename K, typename V>
class KeyValuePair {
    K key; V value;
public:
    KeyValuePair(K k, V v) : key(k), value(v) {}
    void print() const { std::cout << key << " => " << value << "\\n"; }
};

int main() {
    std::cout << "Int Add: " << addValues(10, 20) << "\\n";
    std::cout << "Double Add: " << addValues(5.5, 4.3) << "\\n";
    KeyValuePair<int, std::string> pair(101, "Vinay");
    pair.print();
    return 0;
}`,
            realLifeScenario: 'The entire C++ Standard Template Library (vector, map, sort) is constructed using generic C++ templates.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-cyan-800 dark:text-cyan-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            <code className="text-cyan-600 font-mono font-bold">Templates</code> are C++&apos;s mechanism for writing type-agnostic code that works with any data type. The compiler generates specialized versions (instantiations) of the template for each type used, producing optimized machine code with zero runtime overhead. Function templates and class templates enable writing algorithms and data structures once that work for <code className="text-cyan-600 font-mono">int</code>, <code className="text-cyan-600 font-mono">double</code>, <code className="text-cyan-600 font-mono">std::string</code>, or any custom type.
                        </p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            A template is like a cookie cutter — the same shape works for gingerbread dough, sugar cookie dough, or chocolate dough. You write the pattern once, and the compiler &quot;stamps out&quot; a specialized version for each type of dough (data type) you use. The result is perfectly shaped cookies (optimized code) tailored to each specific dough, with no runtime cost for the flexibility.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-cyan-600" />3. Template Instantiation Pipeline (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph TD
    A["Template: T addValues(T a, T b)"] -->|"addValues(10, 20)"| B["Instantiation: int addValues(int, int)"]
    A -->|"addValues(5.5, 4.3)"| C["Instantiation: double addValues(double, double)"]
    A -->|"addValues(str1, str2)"| D["Instantiation: string addValues(string, string)"]
    B --> E["Optimized int machine code"]
    C --> F["Optimized double machine code"]
    D --> G["Optimized string machine code"]`}
                            caption="Figure 10.1: Template instantiation — the compiler generates separate optimized code for each type used, at zero runtime cost."
                        />
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-cyan-600" />4. Sample Code</h4>
                        <CodeBlock code={`#include <iostream>

template <typename T>
T maxOf(T a, T b) { return (a > b) ? a : b; }

template <typename T, int N>
class FixedArray {
    T data[N];
public:
    T& operator[](int i) { return data[i]; }
    int size() const { return N; }
};

int main() {
    std::cout << "Max int: " << maxOf(10, 20) << "\\n";
    std::cout << "Max double: " << maxOf(3.14, 2.71) << "\\n";
    
    FixedArray<int, 5> arr;
    arr[0] = 42;
    std::cout << "arr[0] = " << arr[0] << "\\n";
    return 0;
}`} lang="cpp" colorClass="cyan" filename="templates.cpp" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">The entire STL (<code className="text-cyan-600 font-mono">vector</code>, <code className="text-cyan-600 font-mono">map</code>, <code className="text-cyan-600 font-mono">sort</code>, <code className="text-cyan-600 font-mono">find</code>) is built on templates. Boost libraries, Eigen math library, and game engine serialization systems all use heavy template metaprogramming.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Zero runtime overhead — all type resolution happens at compile time.</li>
                            <li>Write once, works for any type — maximum code reuse.</li>
                            <li>Non-type template parameters (<code className="text-cyan-400">template&lt;int N&gt;</code>) enable compile-time array sizes.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Template error messages are notoriously long and cryptic (improved by C++20 Concepts).</li>
                            <li>Code bloat — each instantiation generates separate machine code, increasing binary size.</li>
                            <li>Templates must typically be defined in headers, increasing compile times for large projects.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'cpp-exception-handling', title: '11. [Advanced] Exception Handling (try, catch, throw)',
            definition: 'Exception handling isolates error handling logic using try, catch, and throw. Standard exceptions inherit from std::exception.',
            syntax: `try {\n    throw std::runtime_error("Database connection failed");\n} catch (const std::exception &e) {\n    std::cerr << "Exception: " << e.what() << std::endl;\n}`,
            codeSnippet: `#include <iostream>\n#include <stdexcept>\n\ndouble divide(double a, double b) {\n    if (b == 0) throw std::invalid_argument("Division by zero!");\n    return a / b;\n}\n\nint main() {\n    try {\n        double result = divide(100.0, 0.0);\n        std::cout << "Result: " << result << "\\n";\n    } catch (const std::invalid_argument &e) {\n        std::cerr << "[Caught]: " << e.what() << "\\n";\n    } catch (...) {\n        std::cerr << "Unknown exception!\\n";\n    }\n    return 0;\n}`,
            realLifeScenario: 'Financial trading systems throw exceptions upon detecting invalid trading orders to abort processing pipelines instantly.',
            content: (<div className="space-y-6">
                <div className="p-4 bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 rounded-r-xl"><h4 className="text-md font-bold text-cyan-800 dark:text-cyan-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4><p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Exception handling separates error-handling logic from normal program flow. The <code className="text-cyan-600 font-mono font-bold">throw</code> keyword signals an error by creating an exception object. The <code className="text-cyan-600 font-mono font-bold">try</code> block wraps code that might throw. <code className="text-cyan-600 font-mono font-bold">catch</code> blocks handle specific exception types. During stack unwinding, all local objects in the try block have their destructors called automatically.</p></div>
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl"><h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4><p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Exception handling is like a fire alarm system in a building. Normal operations continue (try block), but if a fire is detected (throw), the alarm triggers evacuation procedures (catch block). The building&apos;s automatic sprinklers activate on every floor (destructors clean up resources during stack unwinding). The catch handler determines the response — evacuate, call fire department, or sound all-clear.</p></div>
                <div><h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-cyan-600" />3. Exception Flow (Mermaid.js Diagram)</h4>
                    <MermaidDiagram chart={`graph TD
    A["try block executes"] --> B{"Exception thrown?"}
    B -->|"No"| C["Normal execution continues"]
    B -->|"Yes: throw"| D["Stack unwinding begins"]
    D --> E["Local destructors fire"]
    E --> F{"Matching catch found?"}
    F -->|"Yes"| G["catch block handles error"]
    F -->|"No"| H["std::terminate() called"]
    G --> I["Program continues after catch"]`} caption="Figure 11.1: Exception propagation — throw triggers stack unwinding, destructors fire, and the nearest matching catch handles the error." />
                </div>
                <div><h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-cyan-600" />4. Sample Code</h4>
                    <CodeBlock code={`#include <iostream>
#include <stdexcept>

double divide(double a, double b) {
    if (b == 0) throw std::invalid_argument("Division by zero!");
    return a / b;
}

int main() {
    try {
        std::cout << divide(10, 2) << "\\n";  // OK: 5
        std::cout << divide(10, 0) << "\\n";  // Throws!
    } catch (const std::invalid_argument &e) {
        std::cerr << "Caught: " << e.what() << "\\n";
    } catch (...) {
        std::cerr << "Unknown exception\\n";
    }
    return 0;
}`} lang="cpp" colorClass="cyan" filename="exceptions.cpp" /></div>
                <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl"><h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4><p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Financial trading systems throw exceptions on invalid orders to abort pipelines. Database drivers throw on connection failures. RAII + exceptions guarantee resource cleanup even in error paths.</p></div>
                <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2"><h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4><ul className="list-disc pl-5 space-y-1 text-sm text-slate-300"><li>Separates error handling from business logic for cleaner code.</li><li>Stack unwinding guarantees RAII destructors run, preventing resource leaks.</li><li>Exception hierarchy enables catch-by-base-class for broad error handling.</li></ul></div>
                <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2"><h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4><ul className="list-disc pl-5 space-y-1 text-sm text-slate-300"><li>Exception handling has runtime overhead for stack unwinding when exceptions are thrown.</li><li>Throwing in destructors causes <code className="text-cyan-400">std::terminate()</code> — never throw from destructors.</li><li>Performance-critical code (game loops, HFT) often disables exceptions entirely (<code className="text-cyan-400">-fno-exceptions</code>).</li></ul></div>
            </div>)
        },
        {
            id: 'cpp-smart-pointers', title: '12. [Advanced] Smart Pointers (unique_ptr, shared_ptr, weak_ptr)',
            definition: 'Smart pointers (std::unique_ptr, std::shared_ptr, std::weak_ptr) automate dynamic memory lifecycle management, eliminating raw delete calls.',
            syntax: `#include <memory>\n\nstd::unique_ptr<Data> uPtr = std::make_unique<Data>();\nstd::shared_ptr<Data> sPtr = std::make_shared<Data>();`,
            codeSnippet: `#include <iostream>\n#include <memory>\n\nclass Connection {\npublic:\n    Connection() { std::cout << "Connected\\n"; }\n    ~Connection() { std::cout << "Disconnected\\n"; }\n    void send() { std::cout << "Data sent\\n"; }\n};\n\nint main() {\n    auto conn = std::make_unique<Connection>();\n    conn->send();\n\n    auto shared1 = std::make_shared<Connection>();\n    {\n        auto shared2 = shared1;\n        std::cout << "Count: " << shared1.use_count() << "\\n";\n    }\n    std::cout << "Count: " << shared1.use_count() << "\\n";\n    return 0;\n}`,
            realLifeScenario: 'Modern C++ codebases forbid raw `new` and `delete` calls, using `std::make_unique` to prevent memory leaks.',
            content: (<div className="space-y-6">
                <div className="p-4 bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 rounded-r-xl"><h4 className="text-md font-bold text-cyan-800 dark:text-cyan-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4><p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed"><code className="text-cyan-600 font-mono font-bold">std::unique_ptr</code> provides exclusive ownership — only one pointer owns the resource, deleted automatically when it goes out of scope. <code className="text-cyan-600 font-mono font-bold">std::shared_ptr</code> uses reference counting — multiple pointers can share ownership, and the resource is freed when the last shared_ptr is destroyed. <code className="text-cyan-600 font-mono font-bold">std::weak_ptr</code> observes a shared resource without owning it, preventing circular reference memory leaks.</p></div>
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl"><h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4><p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed"><code className="text-cyan-600 font-mono">unique_ptr</code> is like owning a pet — only one person is the owner, and when the owner moves away, the pet goes with them. <code className="text-cyan-600 font-mono">shared_ptr</code> is like a shared Netflix account — multiple family members have access, and the subscription stays active until the last person cancels. <code className="text-cyan-600 font-mono">weak_ptr</code> is like a friend who knows your Netflix password but doesn&apos;t count as a subscriber — if everyone cancels, the account closes even though the friend knew the password.</p></div>
                <div><h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-cyan-600" />3. Smart Pointer Ownership Model (Mermaid.js Diagram)</h4>
                    <MermaidDiagram chart={`graph TD
    A["std::unique_ptr"] -->|"Exclusive ownership"| B["Resource: 1 owner only"]
    B -->|"Scope ends"| C["Auto-deleted"]
    D["std::shared_ptr"] -->|"Reference counted"| E["Resource: N owners"]
    E -->|"Last owner destroyed"| F["Auto-deleted"]
    G["std::weak_ptr"] -->|"Non-owning observer"| E
    G -->|"Does NOT prevent deletion"| H["Avoids circular references"]`} caption="Figure 12.1: Smart pointer ownership — unique_ptr is exclusive, shared_ptr is reference-counted, weak_ptr observes without owning." />
                </div>
                <div><h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-cyan-600" />4. Sample Code</h4>
                    <CodeBlock code={`#include <iostream>
#include <memory>

class Resource {
public:
    Resource() { std::cout << "Acquired\\n"; }
    ~Resource() { std::cout << "Released\\n"; }
};

int main() {
    // Unique ownership
    auto uptr = std::make_unique<Resource>();
    // auto uptr2 = uptr; // ERROR: cannot copy unique_ptr
    auto uptr2 = std::move(uptr); // OK: transfer ownership
    
    // Shared ownership
    auto sptr1 = std::make_shared<Resource>();
    {
        auto sptr2 = sptr1; // ref count = 2
        std::cout << "Count: " << sptr1.use_count() << "\\n";
    } // sptr2 destroyed, count = 1
    return 0; // sptr1 destroyed, resource released
}`} lang="cpp" colorClass="cyan" filename="smart_pointers.cpp" /></div>
                <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl"><h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4><p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Modern C++ codebases (Google, LLVM, Chromium) forbid raw <code className="text-cyan-600 font-mono">new/delete</code>. Game engines use <code className="text-cyan-600 font-mono">unique_ptr</code> for exclusive asset ownership and <code className="text-cyan-600 font-mono">shared_ptr</code> for shared texture/mesh resources.</p></div>
                <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2"><h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4><ul className="list-disc pl-5 space-y-1 text-sm text-slate-300"><li>Eliminates manual <code className="text-cyan-400">delete</code> calls — impossible to forget deallocation.</li><li><code className="text-cyan-400">unique_ptr</code> has zero overhead vs raw pointers (same machine code).</li><li><code className="text-cyan-400">weak_ptr</code> breaks circular reference cycles that would leak with <code className="text-cyan-400">shared_ptr</code> alone.</li></ul></div>
                <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2"><h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4><ul className="list-disc pl-5 space-y-1 text-sm text-slate-300"><li><code className="text-cyan-400">shared_ptr</code> has atomic reference counting overhead on every copy/destruction.</li><li>Circular <code className="text-cyan-400">shared_ptr</code> references without <code className="text-cyan-400">weak_ptr</code> cause permanent memory leaks.</li><li><code className="text-cyan-400">unique_ptr</code> cannot be copied — must use <code className="text-cyan-400">std::move()</code> to transfer ownership.</li></ul></div>
            </div>)
        },
        {
            id: 'cpp-move-semantics-rvalue', title: '13. [Advanced] Move Semantics & Rvalue References (&&, std::move)',
            definition: 'Move Semantics (C++11) transfers internal heap resources from temporary rvalues (&&) to new objects using std::move(), eliminating deep copies.',
            syntax: `class Buffer {\n    Buffer(Buffer &&other) noexcept { /* Move Constructor */ }\n    Buffer& operator=(Buffer &&other) noexcept { /* Move Assignment */ }\n};`,
            codeSnippet: `#include <iostream>\n#include <utility>\n\nclass HeavyBuffer {\n    int *data; int size;\npublic:\n    HeavyBuffer(int s) : size(s), data(new int[s]) { std::cout << "Allocated\\n"; }\n    HeavyBuffer(HeavyBuffer &&other) noexcept : data(other.data), size(other.size) {\n        other.data = nullptr; other.size = 0;\n        std::cout << "Moved (O(1))\\n";\n    }\n    ~HeavyBuffer() { delete[] data; }\n};\n\nint main() {\n    HeavyBuffer buf1(1000000);\n    HeavyBuffer buf2 = std::move(buf1);\n    return 0;\n}`,
            realLifeScenario: 'Returning large vectors from functions (`return myVector;`) uses move semantics to transfer data in O(1) time without copying.',
            content: (<div className="space-y-6">
                <div className="p-4 bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 rounded-r-xl"><h4 className="text-md font-bold text-cyan-800 dark:text-cyan-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4><p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed"><code className="text-cyan-600 font-mono font-bold">Move semantics</code> allow transferring ownership of internal resources (heap memory, file handles) from one object to another in O(1) time by simply swapping internal pointers, instead of making expensive O(n) deep copies. An <code className="text-cyan-600 font-mono font-bold">rvalue reference</code> (<code className="text-cyan-600 font-mono">&amp;&amp;</code>) binds to temporary objects that are about to be destroyed. <code className="text-cyan-600 font-mono font-bold">std::move()</code> casts an lvalue to an rvalue reference, enabling the move constructor to &quot;steal&quot; its resources.</p></div>
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl"><h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4><p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Moving is like transferring a house sale — instead of building an identical house (deep copy), you hand over the keys (pointer) and the new owner gets the existing house instantly. The old owner is left with nothing (nullptr). <code className="text-cyan-600 font-mono">std::move()</code> is like signing the transfer deed — it signals that you&apos;re willing to give up your house so the new owner can take it without construction costs.</p></div>
                <div><h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-cyan-600" />3. Copy vs Move Performance (Mermaid.js Diagram)</h4>
                    <MermaidDiagram chart={`graph LR
    A["Deep Copy: O(n)"] --> B["Allocate new memory"]
    B --> C["Copy every element"]
    C --> D["Two identical buffers exist"]
    E["Move: O(1)"] --> F["Swap internal pointer"]
    F --> G["Source set to nullptr"]
    G --> H["One buffer, zero copy"]`} caption="Figure 13.1: Copy vs Move — deep copy duplicates all data in O(n), while move transfers ownership in O(1) by swapping pointers." />
                </div>
                <div><h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-cyan-600" />4. Sample Code</h4>
                    <CodeBlock code={`#include <iostream>
#include <vector>
#include <utility>

std::vector<int> createLargeVector() {
    std::vector<int> v(1000000, 42);
    return v; // Move semantics: O(1) transfer, not O(n) copy
}

int main() {
    auto data = createLargeVector(); // Move constructor invoked
    std::cout << "Size: " << data.size() << "\\n";
    
    std::vector<int> other;
    other = std::move(data); // Move assignment: data is now empty
    std::cout << "Moved size: " << other.size() << "\\n";
    std::cout << "Original size: " << data.size() << "\\n"; // 0
    return 0;
}`} lang="cpp" colorClass="cyan" filename="move_semantics.cpp" /></div>
                <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl"><h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4><p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Returning large containers from functions, inserting into STL containers, and transferring <code className="text-cyan-600 font-mono">unique_ptr</code> ownership all leverage move semantics for massive performance gains.</p></div>
                <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2"><h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4><ul className="list-disc pl-5 space-y-1 text-sm text-slate-300"><li>O(1) resource transfer instead of O(n) deep copy — massive speedup for large objects.</li><li>Enables <code className="text-cyan-400">unique_ptr</code> transfer of exclusive ownership.</li><li><code className="text-cyan-400">noexcept</code> move constructors enable STL optimizations (vector reallocation uses move).</li></ul></div>
                <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2"><h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4><ul className="list-disc pl-5 space-y-1 text-sm text-slate-300"><li>Using a moved-from object is valid but its state is unspecified — only destruction and reassignment are safe.</li><li>Forgetting <code className="text-cyan-400">noexcept</code> on move constructors prevents STL containers from using them.</li><li>Rule of Five complexity: if you implement any special member function, implement all five.</li></ul></div>
            </div>)
        },
        {
            id: 'cpp-stl-algorithms-lambdas', title: '14. [Advanced] STL Algorithms & Lambda Expressions',
            definition: 'STL header <algorithm> provides generic functions (std::sort, std::find, std::transform) accepting anonymous lambda expressions [capture](params){body}.',
            syntax: `auto isEven = [](int n) { return n % 2 == 0; };\nstd::sort(vec.begin(), vec.end(), [](int a, int b) { return a > b; });`,
            codeSnippet: `#include <iostream>\n#include <vector>\n#include <algorithm>\n\nint main() {\n    std::vector<int> nums = {45, 12, 89, 34, 67, 23};\n    std::sort(nums.begin(), nums.end(), [](int a, int b) { return a > b; });\n    std::for_each(nums.begin(), nums.end(), [](int n) { std::cout << n << " "; });\n    std::cout << "\\n";\n    return 0;\n}`,
            realLifeScenario: 'High-frequency algorithmic trading systems process market streams using parallelized STL algorithms.',
            content: (<div className="space-y-6">
                <div className="p-4 bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 rounded-r-xl"><h4 className="text-md font-bold text-cyan-800 dark:text-cyan-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4><p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">The <code className="text-cyan-600 font-mono font-bold">&lt;algorithm&gt;</code> header provides powerful generic functions like <code className="text-cyan-600 font-mono">std::sort</code>, <code className="text-cyan-600 font-mono">std::find</code>, <code className="text-cyan-600 font-mono">std::transform</code>, and <code className="text-cyan-600 font-mono">std::for_each</code> that work with any container via iterators. <code className="text-cyan-600 font-mono font-bold">Lambda expressions</code> (<code className="text-cyan-600 font-mono">[capture](params)&#123;body&#125;</code>) are anonymous inline functions that can capture local variables by value <code className="text-cyan-600 font-mono">[=]</code> or reference <code className="text-cyan-600 font-mono">[&amp;]</code>.</p></div>
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl"><h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4><p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">STL algorithms are like kitchen appliances (blender, mixer, oven) — each does one job really well. Lambdas are like sticky-note instructions you tape to each appliance: &quot;Blend on HIGH for 30 seconds.&quot; You don&apos;t need to write a whole recipe book (named function) for a quick one-off instruction — just a sticky note (lambda) attached right where it&apos;s used.</p></div>
                <div><h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-cyan-600" />3. STL Algorithm + Lambda Pipeline (Mermaid.js Diagram)</h4>
                    <MermaidDiagram chart={`graph LR
    A["std::vector data"] -->|"Iterators"| B["std::sort + lambda comparator"]
    B --> C["Sorted data"]
    C -->|"Iterators"| D["std::transform + lambda"]
    D --> E["Transformed output"]
    E -->|"Iterators"| F["std::for_each + lambda"]
    F --> G["Printed results"]`} caption="Figure 14.1: STL Algorithm pipeline — data flows through sort, transform, and for_each, each configured by lambda expressions." />
                </div>
                <div><h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-cyan-600" />4. Sample Code</h4>
                    <CodeBlock code={`#include <iostream>
#include <vector>
#include <algorithm>
#include <numeric>

int main() {
    std::vector<int> nums = {5, 3, 8, 1, 9, 2};
    
    // Sort descending with lambda
    std::sort(nums.begin(), nums.end(), [](int a, int b) { return a > b; });
    
    // Filter evens with lambda
    auto it = std::find_if(nums.begin(), nums.end(), [](int n) { return n % 2 == 0; });
    if (it != nums.end()) std::cout << "First even: " << *it << "\\n";
    
    // Sum with accumulate
    int sum = std::accumulate(nums.begin(), nums.end(), 0);
    std::cout << "Sum: " << sum << "\\n";
    
    // Capture local variable
    int threshold = 5;
    auto count = std::count_if(nums.begin(), nums.end(), [threshold](int n) { return n > threshold; });
    std::cout << "Above " << threshold << ": " << count << "\\n";
    return 0;
}`} lang="cpp" colorClass="cyan" filename="algorithms_lambdas.cpp" /></div>
                <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl"><h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4><p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">HFT systems use <code className="text-cyan-600 font-mono">std::sort</code> with custom comparators for order book ranking. Data pipelines chain <code className="text-cyan-600 font-mono">transform</code> → <code className="text-cyan-600 font-mono">filter</code> → <code className="text-cyan-600 font-mono">accumulate</code> for stream processing.</p></div>
                <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2"><h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4><ul className="list-disc pl-5 space-y-1 text-sm text-slate-300"><li>Lambdas enable inline, concise function objects without separate named function declarations.</li><li>STL algorithms are heavily optimized by compiler vendors (SIMD, cache-aware).</li><li>C++17 parallel execution policies enable automatic multi-threaded algorithm execution.</li></ul></div>
                <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2"><h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4><ul className="list-disc pl-5 space-y-1 text-sm text-slate-300"><li>Complex lambdas with large capture lists reduce readability — extract to named functions.</li><li>Capturing by reference (<code className="text-cyan-400">[&amp;]</code>) can create dangling references if the lambda outlives the captured variable.</li><li>Iterator invalidation during algorithm execution causes undefined behavior.</li></ul></div>
            </div>)
        },
        {
            id: 'cpp-raii-memory-management', title: '15. [Advanced] RAII Pattern & Resource Management',
            definition: 'RAII (Resource Acquisition Is Initialization) ties resource lifespan (memory, file handles, mutex locks) directly to stack object lifetimes.',
            syntax: `{\n    std::lock_guard<std::mutex> lock(mtx); // Acquires mutex\n    // Critical Section\n} // Automatically releases mutex via destructor when exiting scope`,
            codeSnippet: `#include <iostream>\n#include <fstream>\n#include <string>\n\nclass ManagedFile {\n    std::ofstream fileStream;\npublic:\n    ManagedFile(const std::string &f) : fileStream(f) { std::cout << "Opened\\n"; }\n    void writeLog(const std::string &msg) { fileStream << msg << "\\n"; }\n    ~ManagedFile() { if (fileStream.is_open()) { fileStream.close(); std::cout << "Closed\\n"; } }\n};\n\nint main() {\n    { ManagedFile log("app.log"); log.writeLog("RAII active."); }\n    return 0;\n}`,
            realLifeScenario: 'RAII ensures mutexes are unlocked and database connections closed even if code throws an unexpected runtime exception.',
            content: (<div className="space-y-6">
                <div className="p-4 bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 rounded-r-xl"><h4 className="text-md font-bold text-cyan-800 dark:text-cyan-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4><p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed"><code className="text-cyan-600 font-mono font-bold">RAII</code> (Resource Acquisition Is Initialization) is the C++ design principle that ties resource lifetime to object lifetime. Resources (memory, files, locks, sockets) are acquired in constructors and released in destructors. Because C++ guarantees destructors run when objects go out of scope — even during exception stack unwinding — RAII makes resource leaks impossible in well-designed code.</p></div>
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl"><h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4><p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">RAII is like an automatic door closer — when you open the door (constructor acquires the resource), a spring mechanism is engaged. No matter how you leave the room (normal exit, fire alarm, or being pushed out), the door always closes itself automatically (destructor releases the resource). You never have to remember to close the door manually.</p></div>
                <div><h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-cyan-600" />3. RAII Resource Lifecycle (Mermaid.js Diagram)</h4>
                    <MermaidDiagram chart={`graph TD
    A["Scope Enter: Object created"] -->|"Constructor"| B["Resource Acquired"]
    B --> C["Resource Used"]
    C --> D{"Scope Exit?"}
    D -->|"Normal return"| E["Destructor fires"]
    D -->|"Exception thrown"| E
    D -->|"break/continue"| E
    E --> F["Resource Released - Guaranteed"]`} caption="Figure 15.1: RAII guarantees resource release on any scope exit path — normal, exceptional, or early return." />
                </div>
                <div><h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-cyan-600" />4. Sample Code</h4>
                    <CodeBlock code={`#include <iostream>
#include <fstream>
#include <mutex>

std::mutex mtx;

void criticalSection() {
    std::lock_guard<std::mutex> lock(mtx); // RAII: acquires lock
    std::cout << "Thread-safe operation\\n";
    // lock automatically released when lock_guard goes out of scope
}

class FileWriter {
    std::ofstream file;
public:
    FileWriter(const std::string &name) : file(name) {}
    void write(const std::string &msg) { file << msg << "\\n"; }
    ~FileWriter() { /* file auto-closed by ofstream destructor */ }
};

int main() {
    { FileWriter fw("log.txt"); fw.write("RAII active"); }
    criticalSection();
    return 0;
}`} lang="cpp" colorClass="cyan" filename="raii.cpp" /></div>
                <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl"><h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4><p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed"><code className="text-cyan-600 font-mono">std::lock_guard</code>, <code className="text-cyan-600 font-mono">std::unique_ptr</code>, <code className="text-cyan-600 font-mono">std::fstream</code> — all use RAII. Database connection pools, GPU resource managers, and network socket wrappers all rely on RAII for exception-safe cleanup.</p></div>
                <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2"><h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4><ul className="list-disc pl-5 space-y-1 text-sm text-slate-300"><li>Impossible to forget resource cleanup — destructors fire automatically on scope exit.</li><li>Exception-safe — resources released even during stack unwinding.</li><li>Eliminates try/finally patterns found in Java/C# — cleaner C++ code.</li></ul></div>
                <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2"><h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4><ul className="list-disc pl-5 space-y-1 text-sm text-slate-300"><li>Requires disciplined class design — all resource-owning classes must implement proper destructors.</li><li>Heap-allocated objects bypass RAII unless wrapped in smart pointers.</li><li>Resource release order depends on declaration order (reverse order destruction).</li></ul></div>
            </div>)
        },
        // ==================== PROFESSIONAL TIER ====================
        {
            id: 'cpp-multithreading-concurrency', title: '16. [Professional] Multithreading & Concurrency (std::thread, mutex)',
            definition: 'C++11 provides native multithreading tools (<thread>, <mutex>, <future>, <async>) to execute parallel concurrent tasks.',
            syntax: `#include <thread>\n#include <mutex>\n\nstd::mutex mtx;\nstd::thread t(workerFunction);\nt.join();`,
            codeSnippet: `#include <iostream>\n#include <thread>\n#include <mutex>\n\nstd::mutex counterMutex;\nint globalCounter = 0;\n\nvoid incrementCounter(int iterations) {\n    for (int i = 0; i < iterations; i++) {\n        std::lock_guard<std::mutex> lock(counterMutex);\n        globalCounter++;\n    }\n}\n\nint main() {\n    std::thread t1(incrementCounter, 50000);\n    std::thread t2(incrementCounter, 50000);\n    t1.join(); t2.join();\n    std::cout << "Counter: " << globalCounter << "\\n";\n    return 0;\n}`,
            realLifeScenario: 'Game engines separate physics calculations, audio streaming, and rendering pipelines onto independent CPU thread workers.',
            content: (<div className="space-y-6">
                <div className="p-4 bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 rounded-r-xl"><h4 className="text-md font-bold text-cyan-800 dark:text-cyan-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4><p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">C++11 introduced native <code className="text-cyan-600 font-mono font-bold">std::thread</code> for spawning OS-level threads. <code className="text-cyan-600 font-mono font-bold">std::mutex</code> prevents data races by ensuring only one thread accesses shared data at a time. <code className="text-cyan-600 font-mono font-bold">std::lock_guard</code> provides RAII-based mutex management. <code className="text-cyan-600 font-mono font-bold">std::async</code> and <code className="text-cyan-600 font-mono font-bold">std::future</code> enable task-based parallelism with automatic result retrieval.</p></div>
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl"><h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4><p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Multithreading is like a restaurant kitchen with multiple chefs working simultaneously — one grills, one chops, one plates. A mutex is like a single cutting board that only one chef can use at a time. <code className="text-cyan-600 font-mono">lock_guard</code> ensures the chef always puts the cutting board back when done, even if they&apos;re suddenly called to handle a kitchen fire (exception).</p></div>
                <div><h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-cyan-600" />3. Thread Synchronization (Mermaid.js Diagram)</h4>
                    <MermaidDiagram chart={`graph TD
    A["main() spawns threads"] --> B["Thread 1: increment()"]
    A --> C["Thread 2: increment()"]
    B -->|"lock_guard acquires mutex"| D["Critical Section: counter++"]
    C -->|"Waits for mutex"| D
    D --> E["Mutex released"]
    B --> F["t1.join()"]
    C --> G["t2.join()"]
    F --> H["main() continues"]
    G --> H`} caption="Figure 16.1: Thread synchronization — mutex ensures only one thread enters the critical section at a time." />
                </div>
                <div><h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-cyan-600" />4. Sample Code</h4>
                    <CodeBlock code={`#include <iostream>
#include <thread>
#include <mutex>
#include <future>

std::mutex mtx;
int counter = 0;

void increment(int n) {
    for (int i = 0; i < n; i++) {
        std::lock_guard<std::mutex> lock(mtx);
        counter++;
    }
}

int asyncTask() { return 42; }

int main() {
    std::thread t1(increment, 100000);
    std::thread t2(increment, 100000);
    t1.join(); t2.join();
    std::cout << "Counter: " << counter << "\\n";
    
    auto future = std::async(std::launch::async, asyncTask);
    std::cout << "Async result: " << future.get() << "\\n";
    return 0;
}`} lang="cpp" colorClass="cyan" filename="threading.cpp" /></div>
                <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl"><h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4><p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Game engines run physics, rendering, and audio on separate threads. Web servers handle each client connection in its own thread. Parallel STL algorithms use thread pools internally.</p></div>
                <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2"><h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4><ul className="list-disc pl-5 space-y-1 text-sm text-slate-300"><li>Utilizes multi-core CPUs for genuine parallel execution speedup.</li><li>RAII-based <code className="text-cyan-400">lock_guard</code> prevents mutex deadlocks from forgotten unlocks.</li><li><code className="text-cyan-400">std::async</code> provides high-level task parallelism without manual thread management.</li></ul></div>
                <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2"><h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4><ul className="list-disc pl-5 space-y-1 text-sm text-slate-300"><li>Data races from unsynchronized shared access cause undefined behavior.</li><li>Deadlocks occur when multiple mutexes are acquired in inconsistent order.</li><li>Thread creation overhead is significant — use thread pools for frequent short tasks.</li></ul></div>
            </div>)
        },
        {
            id: 'cpp-design-patterns-pimpl', title: '17. [Professional] C++ Design Patterns & Pimpl Idiom',
            definition: 'The Pimpl (Pointer to Implementation) idiom isolates internal class implementation details behind an opaque pointer, accelerating compile times.',
            syntax: `/* Widget.h Header */\nclass Widget {\nprivate:\n    class Impl;\n    std::unique_ptr<Impl> pImpl;\npublic:\n    Widget();\n    ~Widget();\n};`,
            codeSnippet: `#include <iostream>\n#include <memory>\n\nclass Widget {\n    class WidgetImpl;\n    std::unique_ptr<WidgetImpl> pImpl;\npublic:\n    Widget();\n    ~Widget();\n    void draw();\n};\n\nclass Widget::WidgetImpl {\npublic:\n    void renderInternal() { std::cout << "Rendering Widget\\n"; }\n};\n\nWidget::Widget() : pImpl(std::make_unique<WidgetImpl>()) {}\nWidget::~Widget() = default;\nvoid Widget::draw() { pImpl->renderInternal(); }\n\nint main() { Widget w; w.draw(); return 0; }`,
            realLifeScenario: 'Commercial GUI SDKs (Qt Framework) use the Pimpl idiom to prevent internal header modifications from triggering massive project recompilations.',
            content: (<div className="space-y-6">
                <div className="p-4 bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 rounded-r-xl"><h4 className="text-md font-bold text-cyan-800 dark:text-cyan-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4><p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">The <code className="text-cyan-600 font-mono font-bold">Pimpl idiom</code> (Pointer to Implementation) hides a class&apos;s private implementation details behind an opaque <code className="text-cyan-600 font-mono">std::unique_ptr</code> to a forward-declared inner class. This creates a &quot;compilation firewall&quot; — changes to the implementation don&apos;t require recompiling files that include the header. It also reduces header dependencies, speeds up build times, and provides binary compatibility.</p></div>
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl"><h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4><p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Pimpl is like a restaurant menu. The menu (header) shows dish names and prices (public API), but hides the recipes (implementation). The kitchen (Impl class) can completely change how a dish is prepared without reprinting the menu. Customers (client code) never need to know the internal recipe changed — they just order from the same menu.</p></div>
                <div><h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-cyan-600" />3. Pimpl Compilation Firewall (Mermaid.js Diagram)</h4>
                    <MermaidDiagram chart={`graph LR
    A["Widget.h (Public API)"] -->|"Forward declares"| B["class Impl"]
    A -->|"unique_ptr<Impl>"| B
    C["Widget.cpp"] -->|"Defines"| B
    D["Client code #includes Widget.h"] -->|"Sees only API"| A
    D -->|"No dependency on Impl"| E["Change Impl = No client recompile"]`} caption="Figure 17.1: Pimpl compilation firewall — client code only depends on the header's public API, not the implementation details." />
                </div>
                <div><h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-cyan-600" />4. Sample Code</h4>
                    <CodeBlock code={`// Widget.h
#include <memory>

class Widget {
    class Impl;  // Forward declaration only
    std::unique_ptr<Impl> pImpl;
public:
    Widget();
    ~Widget();
    void draw();
};

// Widget.cpp
#include <iostream>

class Widget::Impl {
public:
    void render() { std::cout << "Rendering\\n"; }
};

Widget::Widget() : pImpl(std::make_unique<Impl>()) {}
Widget::~Widget() = default;
void Widget::draw() { pImpl->render(); }

// main.cpp
int main() { Widget w; w.draw(); return 0; }`} lang="cpp" colorClass="cyan" filename="pimpl.cpp" /></div>
                <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl"><h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4><p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Qt Framework uses Pimpl (called &quot;d-pointer&quot;) throughout its entire GUI toolkit. Large codebases at Google and Facebook use Pimpl to keep build times manageable across millions of lines of C++.</p></div>
                <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2"><h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4><ul className="list-disc pl-5 space-y-1 text-sm text-slate-300"><li>Compilation firewall — implementation changes don&apos;t trigger client recompilation.</li><li>Binary compatibility — ABI-stable across library version updates.</li><li>Reduces header includes, speeding up build times significantly.</li></ul></div>
                <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2"><h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4><ul className="list-disc pl-5 space-y-1 text-sm text-slate-300"><li>Heap allocation overhead for the Impl object on every construction.</li><li>Extra pointer indirection on every method call (minor performance cost).</li><li>Requires explicit destructor declaration in the header (for <code className="text-cyan-400">unique_ptr</code> with incomplete type).</li></ul></div>
            </div>)
        },
        {
            id: 'cpp-modern-features', title: '18. [Professional] Modern C++ Features (C++17/20 Concepts, Ranges)',
            definition: 'Modern C++ standards (C++17/C++20) introduce features like std::optional, std::variant, constexpr, Concepts (compile-time template constraints), and Ranges.',
            syntax: `#include <optional>\n\nstd::optional<int> findUser(int id) {\n    if (found) return 42;\n    return std::nullopt;\n}`,
            codeSnippet: `#include <iostream>\n#include <optional>\n#include <variant>\n\nstd::optional<std::string> getUsername(int id) {\n    if (id == 101) return "Vinay Mahato";\n    return std::nullopt;\n}\n\nint main() {\n    auto user = getUsername(101);\n    if (user.has_value()) std::cout << "Found: " << user.value() << "\\n";\n\n    std::variant<int, std::string> data = "C++20 String";\n    std::cout << "Variant Index: " << data.index() << "\\n";\n    return 0;\n}`,
            realLifeScenario: 'Using `std::optional` explicitly models functions that might fail to return values, replacing error-prone sentinel return values (-1 or nullptr).',
            content: (<div className="space-y-6">
                <div className="p-4 bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 rounded-r-xl"><h4 className="text-md font-bold text-cyan-800 dark:text-cyan-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4><p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Modern C++ (C++17/20) introduces powerful vocabulary types: <code className="text-cyan-600 font-mono font-bold">std::optional</code> represents a value that may or may not exist. <code className="text-cyan-600 font-mono font-bold">std::variant</code> is a type-safe union. <code className="text-cyan-600 font-mono font-bold">Structured bindings</code> (<code className="text-cyan-600 font-mono">auto [a, b] = pair</code>) destructure objects. C++20 <code className="text-cyan-600 font-mono font-bold">Concepts</code> constrain template parameters at compile time with clear error messages. <code className="text-cyan-600 font-mono font-bold">Ranges</code> provide composable, lazy-evaluated data pipelines.</p></div>
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl"><h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4><p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed"><code className="text-cyan-600 font-mono">std::optional</code> is like a gift box that might be empty — you check <code className="text-cyan-600 font-mono">has_value()</code> before opening it, instead of guessing. <code className="text-cyan-600 font-mono">std::variant</code> is like a parking spot labeled &quot;car or motorcycle only&quot; — it holds exactly one of the allowed types, and the compiler prevents you from parking a boat there. Concepts are like job requirements — &quot;must know C++ and have 3 years experience&quot; — enforced at the application (template instantiation) stage.</p></div>
                <div><h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-cyan-600" />3. Modern C++ Feature Map (Mermaid.js Diagram)</h4>
                    <MermaidDiagram chart={`graph TD
    A["C++17"] --> B["std::optional"]
    A --> C["std::variant"]
    A --> D["Structured Bindings"]
    A --> E["if constexpr"]
    F["C++20"] --> G["Concepts"]
    F --> H["Ranges"]
    F --> I["Coroutines"]
    F --> J["Modules"]`} caption="Figure 18.1: Modern C++ feature timeline — C++17 added vocabulary types, C++20 added compile-time constraints and lazy ranges." />
                </div>
                <div><h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-cyan-600" />4. Sample Code</h4>
                    <CodeBlock code={`#include <iostream>
#include <optional>
#include <variant>
#include <map>

std::optional<std::string> findUser(int id) {
    std::map<int, std::string> db = {{1, "Vinay"}, {2, "Alice"}};
    if (auto it = db.find(id); it != db.end()) return it->second;
    return std::nullopt;
}

int main() {
    // std::optional
    if (auto user = findUser(1); user) {
        std::cout << "Found: " << *user << "\\n";
    }
    
    // std::variant
    std::variant<int, double, std::string> val = 3.14;
    std::cout << "Double: " << std::get<double>(val) << "\\n";
    
    // Structured bindings (C++17)
    auto [key, value] = std::pair{1, "Hello"};
    std::cout << key << ": " << value << "\\n";
    return 0;
}`} lang="cpp" colorClass="cyan" filename="modern_cpp.cpp" /></div>
                <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl"><h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4><p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed"><code className="text-cyan-600 font-mono">std::optional</code> replaces error-prone sentinel values (-1, nullptr) in database lookups, API responses, and configuration parsers. Concepts provide clear template error messages in library APIs.</p></div>
                <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2"><h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4><ul className="list-disc pl-5 space-y-1 text-sm text-slate-300"><li><code className="text-cyan-400">std::optional</code> explicitly communicates nullable return types in the type system.</li><li>Concepts produce human-readable template error messages instead of pages of gibberish.</li><li>Structured bindings reduce boilerplate when working with pairs, tuples, and structs.</li></ul></div>
                <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2"><h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4><ul className="list-disc pl-5 space-y-1 text-sm text-slate-300"><li>Requires C++17/20 compiler support — not all production codebases have upgraded.</li><li><code className="text-cyan-400">std::variant</code> visitor syntax (<code className="text-cyan-400">std::visit</code>) is verbose without helper utilities.</li><li>Ranges and Coroutines are still maturing — library support varies across compilers.</li></ul></div>
            </div>)
        },
        {
            id: 'cpp-performance-optimization', title: '19. [Professional] Performance Optimization & Cache Friendliness',
            definition: 'C++ performance optimization focuses on CPU L1/L2 cache line friendliness, avoiding heap allocations, and leveraging inline functions and constexpr.',
            syntax: `/* Compile-Time Evaluation */\nconstexpr int square(int x) { return x * x; }\nconstexpr int val = square(5); /* Computed at compile time! */`,
            codeSnippet: `#include <iostream>\n\nconstexpr long long factorialConstexpr(int n) {\n    return (n <= 1) ? 1 : n * factorialConstexpr(n - 1);\n}\n\nint main() {\n    constexpr long long fact5 = factorialConstexpr(5);\n    std::cout << "Compile-Time Factorial of 5: " << fact5 << "\\n";\n    return 0;\n}`,
            realLifeScenario: 'High-frequency trading engines evaluate mathematical formulas at compile time using `constexpr` to minimize runtime latency.',
            content: (<div className="space-y-6">
                <div className="p-4 bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 rounded-r-xl"><h4 className="text-md font-bold text-cyan-800 dark:text-cyan-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4><p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">C++ performance optimization involves writing code that maximizes CPU cache utilization, minimizes heap allocations, and leverages compile-time computation. <code className="text-cyan-600 font-mono font-bold">constexpr</code> evaluates functions at compile time, embedding results directly into the binary with zero runtime cost. <code className="text-cyan-600 font-mono font-bold">Cache-friendly</code> code iterates through contiguous memory (arrays/vectors) to exploit L1/L2 cache line prefetching, avoiding the 100x latency penalty of cache misses.</p></div>
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl"><h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4><p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">CPU cache is like your desk — items on your desk (L1 cache) are accessed instantly. Items in your desk drawer (L2 cache) take a few seconds. Items in a filing cabinet across the room (RAM) take much longer. Cache-friendly code is like organizing your work so everything you need for the current task is already on your desk. <code className="text-cyan-600 font-mono">constexpr</code> is like pre-calculating answers before the exam and bringing a cheat sheet — zero thinking time needed during the test.</p></div>
                <div><h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-cyan-600" />3. Memory Hierarchy & Cache Performance (Mermaid.js Diagram)</h4>
                    <MermaidDiagram chart={`graph TD
    A["L1 Cache: ~1ns access"] --> B["L2 Cache: ~5ns access"]
    B --> C["L3 Cache: ~20ns access"]
    C --> D["RAM: ~100ns access"]
    E["std::vector (contiguous)"] -->|"Sequential access"| A
    F["std::list (scattered)"] -->|"Random access"| D
    G["constexpr"] -->|"Compile time"| H["Zero runtime cost"]`} caption="Figure 19.1: Memory hierarchy — contiguous vector iteration hits L1 cache, while scattered list traversal causes expensive cache misses." />
                </div>
                <div><h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-cyan-600" />4. Sample Code</h4>
                    <CodeBlock code={`#include <iostream>
#include <vector>
#include <chrono>

// Compile-time computation
constexpr long long factorial(int n) {
    return (n <= 1) ? 1 : n * factorial(n - 1);
}

int main() {
    // Zero runtime cost
    constexpr auto fact10 = factorial(10);
    std::cout << "10! = " << fact10 << "\\n";
    
    // Cache-friendly: vector (contiguous memory)
    std::vector<int> data(1000000, 1);
    long long sum = 0;
    auto start = std::chrono::high_resolution_clock::now();
    for (const auto &val : data) sum += val; // Sequential access = cache hits
    auto end = std::chrono::high_resolution_clock::now();
    
    auto us = std::chrono::duration_cast<std::chrono::microseconds>(end - start);
    std::cout << "Sum: " << sum << " in " << us.count() << "us\\n";
    return 0;
}`} lang="cpp" colorClass="cyan" filename="performance.cpp" /></div>
                <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl"><h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4><p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Game engines use Structure-of-Arrays (SoA) layout for cache-friendly entity component systems. HFT firms precompute lookup tables with <code className="text-cyan-600 font-mono">constexpr</code>. Database engines use <code className="text-cyan-600 font-mono">std::vector</code> instead of <code className="text-cyan-600 font-mono">std::list</code> for sequential scan performance.</p></div>
                <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2"><h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4><ul className="list-disc pl-5 space-y-1 text-sm text-slate-300"><li><code className="text-cyan-400">constexpr</code> eliminates runtime computation entirely for known-at-compile-time values.</li><li>Contiguous memory access can be 100x faster than scattered access due to cache line prefetching.</li><li><code className="text-cyan-400">reserve()</code> on vectors eliminates reallocation overhead for known sizes.</li></ul></div>
                <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2"><h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4><ul className="list-disc pl-5 space-y-1 text-sm text-slate-300"><li>Premature optimization wastes development time — always profile before optimizing.</li><li>Cache optimization often conflicts with clean OOP design (polymorphism = pointer indirection = cache misses).</li><li><code className="text-cyan-400">constexpr</code> functions have restrictions — no I/O, no dynamic allocation in earlier standards.</li></ul></div>
            </div>)
        },
        {
            id: 'cpp-large-scale-project-structuring', title: '20. [Professional] Large-Scale Project Structuring & CMake',
            definition: 'Enterprise C++ repositories structure header and source directories using CMake to configure cross-platform static (.a/.lib) and dynamic (.so/.dll) targets.',
            syntax: `# CMakeLists.txt Blueprint\ncmake_minimum_required(VERSION 3.20)\nproject(EngineApp VERSION 1.0)\n\nset(CMAKE_CXX_STANDARD 20)\nadd_executable(EngineApp src/main.cpp src/Engine.cpp)`,
            codeSnippet: `# CMake Build Workflow Commands\n$ mkdir build && cd build\n$ cmake ..\n$ cmake --build . --config Release\n$ ./EngineApp`,
            realLifeScenario: 'Cross-platform C++ frameworks use CMake to build for Windows, Linux, macOS, iOS, and Android from a single codebase.',
            content: (<div className="space-y-6">
                <div className="p-4 bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 rounded-r-xl"><h4 className="text-md font-bold text-cyan-800 dark:text-cyan-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4><p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed"><code className="text-cyan-600 font-mono font-bold">CMake</code> is a cross-platform build system generator that produces native build files (Visual Studio projects, Makefiles, Ninja scripts) from a single <code className="text-cyan-600 font-mono">CMakeLists.txt</code> configuration. Large C++ projects organize code into <code className="text-cyan-600 font-mono font-bold">libraries</code> (static <code className="text-cyan-600 font-mono">.a/.lib</code> or dynamic <code className="text-cyan-600 font-mono">.so/.dll</code>) with clear header/source separation, dependency management, and modular build targets.</p></div>
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl"><h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4><p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">CMake is like an architect&apos;s master blueprint for a skyscraper. The blueprint defines which floors (libraries) depend on which, what materials (dependencies) each floor needs, and how to build for different climates (platforms). The actual construction crew (compiler) follows the blueprint to build the specific variant needed — a Windows office tower, a Linux data center, or a macOS studio.</p></div>
                <div><h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-cyan-600" />3. CMake Build Pipeline (Mermaid.js Diagram)</h4>
                    <MermaidDiagram chart={`graph TD
    A["CMakeLists.txt"] -->|"cmake .."| B{"Generator Selection"}
    B -->|"Windows"| C["Visual Studio .sln"]
    B -->|"Linux"| D["Makefile"]
    B -->|"Cross-platform"| E["Ninja build files"]
    C --> F["cmake --build ."]
    D --> F
    E --> F
    F --> G["Executable / Libraries"]
    H["add_library(engine)"] --> G
    I["add_executable(app)"] --> G
    I -->|"target_link_libraries"| H`} caption="Figure 20.1: CMake generates platform-specific build files from a single CMakeLists.txt, supporting multi-target builds." />
                </div>
                <div><h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-cyan-600" />4. Sample Code</h4>
                    <CodeBlock code={`# CMakeLists.txt - Professional Project Layout
cmake_minimum_required(VERSION 3.20)
project(GameEngine VERSION 1.0 LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

# Core engine library
add_library(engine STATIC
    src/Engine.cpp
    src/Renderer.cpp
)
target_include_directories(engine PUBLIC include)

# Main executable
add_executable(game src/main.cpp)
target_link_libraries(game PRIVATE engine)

# Tests
enable_testing()
add_executable(tests tests/test_engine.cpp)
target_link_libraries(tests PRIVATE engine)
add_test(NAME EngineTests COMMAND tests)`} lang="cmake" colorClass="cyan" filename="CMakeLists.txt" /></div>
                <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl"><h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4><p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">LLVM, Qt, OpenCV, TensorFlow C++, and virtually all major open-source C++ projects use CMake. CI/CD pipelines run <code className="text-cyan-600 font-mono">cmake --build</code> across Windows, Linux, and macOS agents from the same source tree.</p></div>
                <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2"><h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4><ul className="list-disc pl-5 space-y-1 text-sm text-slate-300"><li>Single build configuration file works across Windows, Linux, macOS, and embedded platforms.</li><li>Target-based dependency management with <code className="text-cyan-400">target_link_libraries()</code>.</li><li>Built-in test support (<code className="text-cyan-400">ctest</code>), install targets, and package generation.</li></ul></div>
                <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2"><h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4><ul className="list-disc pl-5 space-y-1 text-sm text-slate-300"><li>CMake syntax is its own DSL with a steep learning curve and inconsistent conventions.</li><li>Finding third-party libraries (<code className="text-cyan-400">find_package</code>) can be fragile across different OS package managers.</li><li>Out-of-source builds and generator expressions add complexity for beginners.</li></ul></div>
            </div>)
        }
    ];

    const topics = courseData.map(topic => topic.title);
    const activeTopic = courseData[activeTopicIndex];

    return (
        <CoursePageLayout
            title="C++ Masterclass Course"
            description="Master C++ from I/O Streams, References, and OOP to Smart Pointers, Move Semantics, Multithreading, Modern C++20, and CMake Build Systems."
            topics={topics}
            icon={Terminal}
            colorClass="blue"
            activeTopicIndex={activeTopicIndex}
            onTopicClick={setActiveTopicIndex}
        >
            <div className="space-y-8">
                {/* Part 1: Concept Definition & Detailed Explanation */}
                <div className="bg-blue-50 dark:bg-blue-900/10 border-l-4 border-blue-600 p-6 rounded-r-xl shadow-sm">
                    <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
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
                            <pre>{`// C++ Code Blueprint\n#include <iostream>\nint main() {\n    return 0;\n}`}</pre>
                        </div>
                    </div>
                )}

                {/* Part 3: Executable Code Example */}
                {activeTopic.codeSnippet && (
                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-600" />
                            3. Executable Production Code Example
                        </h3>
                        <CodeBlock code={activeTopic.codeSnippet} lang="cpp" colorClass="blue" filename="main.cpp" />
                    </div>
                )}

                {/* Part 4: Real-Life Scenario Example */}
                <div className="bg-emerald-50 dark:bg-emerald-900/10 border-l-4 border-emerald-600 p-6 rounded-r-xl shadow-sm">
                    <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                        <Lightbulb className="w-5 h-5 mr-2" />
                        4. Real-Life Industry Scenario & Application
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                        {activeTopic.realLifeScenario || activeTopic.example || "Powers AAA video game engines, high-frequency trading platforms, 3D graphics rendering software, and operating system kernels."}
                    </p>
                </div>
            </div>
        </CoursePageLayout>
    );
};

export default CppCoursePage;
