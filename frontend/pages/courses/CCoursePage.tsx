import React, { useState } from 'react';
import CoursePageLayout from '../../components/CoursePageLayout';
import { Terminal, Code, BookOpen, Lightbulb, FileText, Cpu, Layers, ShieldAlert, Workflow, Wrench, Check, AlertTriangle } from 'lucide-react';
import CodeBlock from '../../components/CodeBlock';
import MermaidDiagram from '../../components/MermaidDiagram';

interface CTopic {
    id: string;
    title: string;
    definition: string;
    example?: string;
    syntax?: string;
    realLifeScenario?: string;
    codeSnippet?: string | null;
    content: React.ReactNode;
}

const CCoursePage = () => {
    const [activeTopicIndex, setActiveTopicIndex] = useState(0);

    const courseData: CTopic[] = [
        // ==================== BEGINNER TIER ====================
        {
            id: 'c-syntax-types-format-specifiers',
            title: '1. [Beginner] Syntax, Data Types & Format Specifiers',
            definition: 'C is a low-level, statically-typed procedural programming language that compiles directly to binary machine code. Variables store values in memory locations allocated with fixed byte sizes determined by data types (char, int, float, double). Format specifiers (%d, %f, %lf, %c, %s, %p) act as syntax placeholders inside standard I/O functions (printf and scanf) to instruct the compiler how to format and interpret binary memory bytes.',
            syntax: `#include <stdio.h>

int main(void) {
    int age = 25;           // %d
    float gpa = 3.85f;      // %f
    double pi = 3.14159265; // %lf
    char grade = 'A';       // %c
    return 0;
}`,
            codeSnippet: `#include <stdio.h>

int main() {
    int student_id = 10092;
    float fee_amount = 4500.50f;
    double exact_pi = 3.141592653589793;
    char letter_grade = 'A';
    char name[] = "Vinay Mahato";

    // Format specifier printing
    printf("Student: %s (ID: %d)\\n", name, student_id);
    printf("Fee: ₹%.2f | Grade: %c\\n", fee_amount, letter_grade);
    printf("Exact Pi Value: %.15lf\\n", exact_pi);
    printf("Memory Size of double: %lu bytes\\n", sizeof(double));

    return 0;
}`,
            realLifeScenario: 'Linux kernel modules and embedded microcontroller firmwares use explicit C primitive sizes (`uint32_t`, `int16_t`) to interact directly with hardware register ports.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-cyan-800 dark:text-cyan-300 mb-1 flex items-center">
                            <BookOpen className="w-4 h-4 mr-2" />
                            1. Definition
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            C is a low-level, statically-typed procedural programming language that compiles directly to binary machine code. Variables store values in memory locations allocated with fixed byte sizes determined by data types (<code className="text-cyan-600 font-mono font-bold">char</code>, <code className="text-cyan-600 font-mono font-bold">int</code>, <code className="text-cyan-600 font-mono font-bold">float</code>, <code className="text-cyan-600 font-mono font-bold">double</code>). Format specifiers (<code className="text-cyan-600 font-mono">%d</code>, <code className="text-cyan-600 font-mono">%f</code>, <code className="text-cyan-600 font-mono">%lf</code>, <code className="text-cyan-600 font-mono">%c</code>, <code className="text-cyan-600 font-mono">%p</code>) act as syntax placeholders inside standard I/O functions (<code className="text-cyan-600 font-mono">printf</code> and <code className="text-cyan-600 font-mono">scanf</code>) to instruct the compiler how to format and interpret raw binary memory bytes.
                        </p>
                    </div>

                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center">
                            <Lightbulb className="w-4 h-4 mr-2" />
                            2. Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            Think of format specifiers like currency tags on prices in a global store. A raw value of <code className="text-cyan-600 font-mono">65</code> could mean $65 Dollars or 65 Euros depending on the symbol tag attached to it. In C, computer RAM simply stores raw binary ones and zeros; format specifiers like <code className="text-cyan-600 font-mono">%d</code> (decimal integer) or <code className="text-cyan-600 font-mono">%c</code> (ASCII character) tell <code className="text-cyan-600 font-mono">printf</code> whether to display binary bytes as the number <code className="text-cyan-600 font-mono">65</code> or as the character <code className="text-cyan-600 font-mono">'A'</code>.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                            <Layers className="w-4 h-4 mr-2 text-cyan-600" />
                            3. Compilation &amp; Format Specifier Translation (Mermaid.js Diagram)
                        </h4>
                        <MermaidDiagram 
                            chart={`graph LR
    A["C Source Code (main.c)"] -->|GCC / Clang Compiler| B["Binary Executable Machine Code"]
    B -->|RAM Execution| C["printf Format Specifiers"]
    C -->|"%d" Integer| D[Output: 65]
    C -->|"%c" ASCII Char| E["Output: 'A'"]
    C -->|"%p" Pointer| F[Output: 0x7ffd4a8]`}
                            caption="Figure 1.1: C Compilation & Format Specifier Memory Translation showing how format specifiers convert raw binary memory into formatted output representations."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                            This diagram demonstrates how C source code compiles to machine binary code, using format specifiers to interpret raw memory addresses into human-readable outputs.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                            <Code className="w-4 h-4 mr-2 text-cyan-600" />
                            4. Sample Code
                        </h4>
                        <CodeBlock 
                            code={`#include <stdio.h>

int main() {
    int student_id = 10092;
    float fee_amount = 4500.50f;
    double exact_pi = 3.141592653589793;
    char letter_grade = 'A';
    char name[] = "Vinay Mahato";

    // Format specifier printing
    printf("Student: %s (ID: %d)\\n", name, student_id);
    printf("Fee: ₹%.2f | Grade: %c\\n", fee_amount, letter_grade);
    printf("Exact Pi Value: %.15lf\\n", exact_pi);
    printf("Memory Size of double: %lu bytes\\n", sizeof(double));

    return 0;
}`} 
                            lang="c" 
                            colorClass="cyan" 
                            filename="main.c" 
                        />
                        <p className="text-xs text-gray-500 font-mono mt-1">
                            // Minimal C program demonstrating primitive variable types, format specifier printing, and sizeof() memory inspection.
                        </p>
                    </div>

                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center">
                            <Cpu className="w-4 h-4 mr-2" />
                            5. Real-World Application
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            C primitives and format specifiers are used in operating system kernels (Linux, Windows kernel drivers), embedded microcontrollers (Arduino, Automotive ECU modules), and high-frequency trading engines where microsecond execution speed and direct RAM control are mandatory.
                        </p>
                    </div>

                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center">
                            <Check className="w-4 h-4 mr-2" />
                            6. Advantages
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Direct hardware memory access with sub-millisecond compiled execution performance.</li>
                            <li>Minimal runtime overhead without heavy virtual machine layers or garbage collectors.</li>
                            <li>Explicit memory size guarantees across 32-bit and 64-bit CPU hardware architectures (<code className="text-cyan-400">sizeof()</code>).</li>
                        </ul>
                    </div>

                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center">
                            <AlertTriangle className="w-4 h-4 mr-2" />
                            7. Disadvantages / Limitations
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Lacks automatic memory management, leaving programs vulnerable to memory leaks if pointers are not managed explicitly.</li>
                            <li>Strict static typing requires manual format specifier matching; passing invalid specifiers (like <code className="text-cyan-400">%s</code> for an integer) causes segmentation faults or undefined behavior.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'c-operators',
            title: '2. [Beginner] C Operators & Expression Evaluation',
            definition: 'C operators execute calculations across operands: Arithmetic (+, -, *, /, %), Relational (==, !=, <, >), Logical (&&, ||, !), Bitwise (&, |, ^, ~, <<, >>), and Increments (++x, x++).',
            syntax: `/* Pre-increment vs Post-increment Blueprint */
int a = 5;
int b = ++a; /* Pre:  increment 'a' first (a=6, b=6) */
int c = a++; /* Post: assign 'a' first, then increment (c=6, a=7) */`,
            codeSnippet: `#include <stdio.h>

int main() {
    int x = 10, y = 3;
    
    printf("Integer Division: %d / %d = %d\\n", x, y, x / y);     // Output: 3
    printf("Modulus Remainder: %d %% %d = %d\\n", x, y, x % y);   // Output: 1
    
    // Short-Circuit Logical Operations
    int a = 1, b = 0;
    if (a && b) {
        printf("Both true\\n");
    } else {
        printf("Logical Short-Circuit Evaluation Success\\n");
    }
    
    return 0;
}`,
            realLifeScenario: 'High-frequency trading routines use bitwise shifts (`x << 1` for multiplying by 2) to bypass integer multiplication ALU delays.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-cyan-800 dark:text-cyan-300 mb-1 flex items-center">
                            <BookOpen className="w-4 h-4 mr-2" />
                            1. Definition
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            C operators are symbols that instruct the CPU to perform specific computations on data values called operands. They include <code className="text-cyan-600 font-mono font-bold">Arithmetic</code> operators for math (+, -, *, /, %), <code className="text-cyan-600 font-mono font-bold">Relational</code> operators for comparisons (==, !=, &lt;, &gt;), <code className="text-cyan-600 font-mono font-bold">Logical</code> operators for boolean logic (&amp;&amp;, ||, !), and <code className="text-cyan-600 font-mono font-bold">Bitwise</code> operators for binary-level manipulation (&amp;, |, ^, ~, &lt;&lt;, &gt;&gt;). C follows a strict operator precedence table that determines the order in which sub-expressions are evaluated when multiple operators appear in a single statement.
                        </p>
                    </div>

                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center">
                            <Lightbulb className="w-4 h-4 mr-2" />
                            2. Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            Imagine a restaurant bill calculator: first multiply item price by quantity (multiplication before addition), then add tax percentage, finally compare the total against your wallet balance. Just like math class rules where multiplication happens before addition, C follows an operator precedence table — <code className="text-cyan-600 font-mono">*</code> and <code className="text-cyan-600 font-mono">/</code> execute before <code className="text-cyan-600 font-mono">+</code> and <code className="text-cyan-600 font-mono">-</code> unless parentheses override the order.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                            <Layers className="w-4 h-4 mr-2 text-cyan-600" />
                            3. Operator Precedence Evaluation Tree (Mermaid.js Diagram)
                        </h4>
                        <MermaidDiagram 
                            chart={`graph TD
    A["Expression: a + b * c - d"] --> B["Step 1: Evaluate b * c"]
    B --> C["Step 2: Evaluate a + result"]
    C --> D["Step 3: Evaluate result - d"]
    D --> E["Final Value Returned"]
    F["Precedence Rule"] -->|"* before + and -"| B
    F -->|"Left-to-right for same level"| C`}
                            caption="Figure 2.1: C Operator Precedence Evaluation Tree showing the order of computation for a mixed arithmetic expression."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                            This diagram shows how C evaluates complex expressions step-by-step according to operator precedence rules — multiplication first, then addition and subtraction left-to-right.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                            <Code className="w-4 h-4 mr-2 text-cyan-600" />
                            4. Sample Code
                        </h4>
                        <CodeBlock 
                            code={`#include <stdio.h>

int main() {
    int x = 10, y = 3;
    
    // Arithmetic Operators
    printf("Integer Division: %d / %d = %d\\n", x, y, x / y);
    printf("Modulus Remainder: %d %% %d = %d\\n", x, y, x % y);
    
    // Pre vs Post Increment
    int a = 5;
    printf("Pre-increment: %d\\n", ++a);  // 6
    printf("Post-increment: %d\\n", a++); // 6, then a becomes 7
    
    // Short-Circuit Logical AND
    int flag = 0;
    if (flag && (10 / flag)) {
        printf("Won't crash\\n");
    } else {
        printf("Short-circuit prevented division by zero!\\n");
    }
    
    return 0;
}`}
                            lang="c" 
                            colorClass="cyan" 
                            filename="operators.c" 
                        />
                        <p className="text-xs text-gray-500 font-mono mt-1">
                            // Demonstrates integer division truncation, modulus, pre/post increment, and short-circuit evaluation safety.
                        </p>
                    </div>

                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center">
                            <Cpu className="w-4 h-4 mr-2" />
                            5. Real-World Application
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            High-frequency trading engines use bitwise shift operators (<code className="text-cyan-600 font-mono">x &lt;&lt; 1</code> to multiply by 2) instead of arithmetic multiplication to save CPU clock cycles. Embedded firmware uses modulus (<code className="text-cyan-600 font-mono">%</code>) for circular buffer index wrapping in real-time audio/video processing.
                        </p>
                    </div>

                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center">
                            <Check className="w-4 h-4 mr-2" />
                            6. Advantages
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Bitwise operators execute in a single CPU instruction cycle for maximum speed.</li>
                            <li>Short-circuit evaluation prevents unnecessary computation and runtime crashes (e.g., division by zero).</li>
                            <li>Pre/post increment operators allow compact, efficient loop counter updates.</li>
                        </ul>
                    </div>

                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center">
                            <AlertTriangle className="w-4 h-4 mr-2" />
                            7. Disadvantages / Limitations
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Integer division silently truncates fractional results (<code className="text-cyan-400">7 / 2 = 3</code>, not 3.5), causing subtle calculation bugs.</li>
                            <li>Operator precedence rules are complex; mixing multiple operators without parentheses leads to evaluation order bugs that are difficult to debug.</li>
                            <li>Signed integer overflow is undefined behavior in C, meaning the compiler can produce unpredictable results.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'c-control-flow',
            title: '3. [Beginner] Control Flow (if-else, switch-case, ternary)',
            definition: 'Control flow structures dictate execution paths: conditional branching (if-else), jump tables (switch-case), and inline conditional operators (?:).',
            syntax: `switch (expression) {
    case CONST_1:
        // Statements
        break;
    default:
        // Default statement
}`,
            codeSnippet: `#include <stdio.h>

int main() {
    int errorCode = 404;

    // Switch Jump Table Evaluation
    switch (errorCode) {
        case 200:
            printf("200 OK: Request Succeeded\\n");
            break;
        case 404:
            printf("404 Not Found: Resource Missing\\n");
            break;
        case 500:
            printf("500 Server Error: Internal Crash\\n");
            break;
        default:
            printf("Unknown HTTP Code\\n");
    }

    // Ternary Operator
    int age = 20;
    char *status = (age >= 18) ? "Eligible" : "Ineligible";
    printf("Voter Status: %s\\n", status);

    return 0;
}`,
            realLifeScenario: 'Operating system interrupt vectors use C `switch` jump tables for constant time O(1) hardware interrupt dispatching.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-cyan-800 dark:text-cyan-300 mb-1 flex items-center">
                            <BookOpen className="w-4 h-4 mr-2" />
                            1. Definition
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            Control flow structures determine which code paths execute based on runtime conditions. The <code className="text-cyan-600 font-mono font-bold">if-else</code> ladder evaluates boolean expressions sequentially. The <code className="text-cyan-600 font-mono font-bold">switch-case</code> statement compiles into an efficient jump table for constant-value matching. The ternary operator <code className="text-cyan-600 font-mono font-bold">? :</code> provides inline conditional assignment in a single expression without full if-else blocks.
                        </p>
                    </div>

                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center">
                            <Lightbulb className="w-4 h-4 mr-2" />
                            2. Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            Think of a switch-case like a vending machine: you press button A1, A2, or B3, and the machine jumps directly to the matching product slot without checking every button sequentially. An if-else chain is like asking a security guard a series of yes/no questions — each question is evaluated one by one until a match. The ternary operator is like a coin flip shorthand: &quot;Heads? Go left. Tails? Go right.&quot;
                        </p>
                    </div>

                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                            <Layers className="w-4 h-4 mr-2 text-cyan-600" />
                            3. Switch-Case Jump Table Decision Flow (Mermaid.js Diagram)
                        </h4>
                        <MermaidDiagram 
                            chart={`flowchart TD
    A["switch(errorCode)"] --> B{"Case 200?"}
    B -->|Yes| C["Print: 200 OK"]
    B -->|No| D{"Case 404?"}
    D -->|Yes| E["Print: 404 Not Found"]
    D -->|No| F{"Case 500?"}
    F -->|Yes| G["Print: 500 Server Error"]
    F -->|No| H["default: Unknown Code"]
    C --> I["break - Exit Switch"]
    E --> I
    G --> I`}
                            caption="Figure 3.1: Switch-Case Jump Table showing how the compiler matches the expression value against case constants and jumps to the matching branch."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                            This diagram shows the decision flow through a switch statement. Omitting <code className="text-cyan-600">break</code> would cause execution to &quot;fall through&quot; into subsequent cases.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                            <Code className="w-4 h-4 mr-2 text-cyan-600" />
                            4. Sample Code
                        </h4>
                        <CodeBlock 
                            code={`#include <stdio.h>

int main() {
    int errorCode = 404;

    // Switch Jump Table
    switch (errorCode) {
        case 200: printf("200 OK\\n"); break;
        case 404: printf("404 Not Found\\n"); break;
        case 500: printf("500 Server Error\\n"); break;
        default:  printf("Unknown Code\\n");
    }

    // Ternary Inline Conditional
    int age = 20;
    char *status = (age >= 18) ? "Eligible" : "Ineligible";
    printf("Voter Status: %s\\n", status);

    return 0;
}`}
                            lang="c" 
                            colorClass="cyan" 
                            filename="control_flow.c" 
                        />
                        <p className="text-xs text-gray-500 font-mono mt-1">
                            // Demonstrates switch-case jump table dispatching and ternary operator inline conditional assignment.
                        </p>
                    </div>

                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center">
                            <Cpu className="w-4 h-4 mr-2" />
                            5. Real-World Application
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            Operating system interrupt handler vectors use C switch-case jump tables for constant-time O(1) hardware interrupt dispatching. Network protocol parsers use switch-case to route packets based on protocol type codes (TCP=6, UDP=17, ICMP=1).
                        </p>
                    </div>

                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center">
                            <Check className="w-4 h-4 mr-2" />
                            6. Advantages
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Switch-case compiles to jump tables for O(1) constant-time dispatch on integer/char values.</li>
                            <li>Ternary operator reduces multi-line if-else blocks into concise single-line expressions.</li>
                            <li>Fall-through behavior (when intentional) enables elegant grouping of multiple cases sharing the same logic.</li>
                        </ul>
                    </div>

                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center">
                            <AlertTriangle className="w-4 h-4 mr-2" />
                            7. Disadvantages / Limitations
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Forgetting <code className="text-cyan-400">break</code> causes silent fall-through bugs that are extremely hard to detect.</li>
                            <li>Switch-case only works with integer/char constant values — it cannot match strings, ranges, or floating-point values.</li>
                            <li>Deeply nested if-else ladders become unreadable and error-prone in complex decision trees.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'c-loops',
            title: '4. [Beginner] Loops & Iteration (for, while, do-while)',
            definition: 'Loops repeat code execution: for loops manage entry counters, while loops test pre-conditions, and do-while loops guarantee at least 1 execution.',
            syntax: `for (initialization; condition; increment) {
    // Loop body
}

do {
    // Executes at least once
} while (condition);`,
            codeSnippet: `#include <stdio.h>

int main() {
    // Standard For Loop
    printf("--- For Loop Iteration ---\\n");
    for (int i = 1; i <= 3; i++) {
        printf("Iteration %d\\n", i);
    }

    // Do-While Loop (Guaranteed 1 Execution)
    int userInput = 0;
    do {
        printf("Do-While Execution: Processing Menu...\\n");
    } while (userInput != 0);

    return 0;
}`,
            realLifeScenario: 'Game loops and device driver polling routines run continuous `while(1)` loops listening for hardware input events.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-cyan-800 dark:text-cyan-300 mb-1 flex items-center">
                            <BookOpen className="w-4 h-4 mr-2" />
                            1. Definition
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            Loops are control structures that repeat a block of code multiple times. The <code className="text-cyan-600 font-mono font-bold">for</code> loop bundles initialization, condition check, and increment into a single header line — ideal when the iteration count is known. The <code className="text-cyan-600 font-mono font-bold">while</code> loop checks its condition before each iteration, so the body may never execute. The <code className="text-cyan-600 font-mono font-bold">do-while</code> loop checks its condition after the body, guaranteeing at least one execution.
                        </p>
                    </div>

                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center">
                            <Lightbulb className="w-4 h-4 mr-2" />
                            2. Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            A <code className="text-cyan-600 font-mono">for</code> loop is like a gym workout plan: &quot;Do 10 reps of push-ups&quot; — you know the count upfront. A <code className="text-cyan-600 font-mono">while</code> loop is like fishing: &quot;Keep casting until you catch a fish&quot; — you check first, and if conditions are wrong (no bait), you never start. A <code className="text-cyan-600 font-mono">do-while</code> is like a restaurant taste test: you always taste at least once, then decide whether to order more.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                            <Layers className="w-4 h-4 mr-2 text-cyan-600" />
                            3. Loop Execution Lifecycle (Mermaid.js Diagram)
                        </h4>
                        <MermaidDiagram 
                            chart={`flowchart TD
    A["Initialize: int i = 0"] --> B{"Condition: i < n?"}
    B -->|True| C["Execute Loop Body"]
    C --> D["Increment: i++"]
    D --> B
    B -->|False| E["Exit Loop"]
    F["break keyword"] -.->|"Early Exit"| E
    G["continue keyword"] -.->|"Skip to Next"| D`}
                            caption="Figure 4.1: For Loop Execution Lifecycle showing the init → condition → body → increment → re-check cycle, with break and continue escape paths."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                            This flowchart demonstrates the cyclic nature of a for loop. The <code className="text-cyan-600">break</code> keyword exits the loop entirely, while <code className="text-cyan-600">continue</code> skips to the next increment step.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                            <Code className="w-4 h-4 mr-2 text-cyan-600" />
                            4. Sample Code
                        </h4>
                        <CodeBlock 
                            code={`#include <stdio.h>

int main() {
    // For loop: known count
    for (int i = 1; i <= 5; i++) {
        if (i == 3) continue; // Skip iteration 3
        printf("For Iteration: %d\\n", i);
    }

    // While loop: condition-driven
    int countdown = 3;
    while (countdown > 0) {
        printf("Countdown: %d\\n", countdown--);
    }

    // Do-While: guaranteed first execution
    int attempts = 0;
    do {
        printf("Login attempt %d\\n", ++attempts);
    } while (attempts < 3);

    return 0;
}`}
                            lang="c" 
                            colorClass="cyan" 
                            filename="loops.c" 
                        />
                        <p className="text-xs text-gray-500 font-mono mt-1">
                            // Demonstrates for loop with continue, while countdown, and do-while login retry pattern.
                        </p>
                    </div>

                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center">
                            <Cpu className="w-4 h-4 mr-2" />
                            5. Real-World Application
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            Game engines run continuous <code className="text-cyan-600 font-mono">while(1)</code> render loops at 60+ FPS. Device drivers use polling loops to check hardware status registers. Network servers use event loops to continuously accept incoming client connections.
                        </p>
                    </div>

                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center">
                            <Check className="w-4 h-4 mr-2" />
                            6. Advantages
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>For loops provide compact, readable iteration with init, condition, and increment in a single line.</li>
                            <li>Do-while guarantees at least one execution, perfect for menu-driven programs and input validation.</li>
                            <li><code className="text-cyan-400">break</code> and <code className="text-cyan-400">continue</code> provide fine-grained loop flow control.</li>
                        </ul>
                    </div>

                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center">
                            <AlertTriangle className="w-4 h-4 mr-2" />
                            7. Disadvantages / Limitations
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Infinite loops (<code className="text-cyan-400">while(1)</code> without break conditions) freeze the program and consume 100% CPU.</li>
                            <li>Off-by-one errors are extremely common — using <code className="text-cyan-400">&lt;=</code> vs <code className="text-cyan-400">&lt;</code> can cause buffer overflows in array iteration.</li>
                            <li>Nested loops multiply computational complexity (O(n²), O(n³)), causing severe performance degradation.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'c-functions-recursion',
            title: '5. [Beginner] Functions, Prototypes & Recursion',
            definition: 'Functions decompose programs into modular routines. Function prototypes declare function signatures prior to `main()`. Recursion occurs when a function calls itself.',
            syntax: `/* Function Prototype Declaration */
int calculateFactorial(int n);

int main() {
    int result = calculateFactorial(5);
    return 0;
}`,
            codeSnippet: `#include <stdio.h>

// Function Prototype
long long factorial(int n);

int main() {
    int num = 5;
    printf("Factorial of %d = %lld\\n", num, factorial(num));
    return 0;
}

// Recursive Function Implementation
long long factorial(int n) {
    if (n <= 1) return 1; // Base case
    return n * factorial(n - 1); // Recursive case
}`,
            realLifeScenario: 'File system traversal utilities recursively traverse nested subdirectories in Linux filesystems.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-cyan-800 dark:text-cyan-300 mb-1 flex items-center">
                            <BookOpen className="w-4 h-4 mr-2" />
                            1. Definition
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            Functions are reusable blocks of code that accept input parameters, perform a specific task, and optionally return a result. A <code className="text-cyan-600 font-mono font-bold">function prototype</code> declares the function&apos;s return type, name, and parameter types before <code className="text-cyan-600 font-mono">main()</code>, allowing the compiler to validate calls before seeing the full implementation. <code className="text-cyan-600 font-mono font-bold">Recursion</code> occurs when a function calls itself, requiring a base case to prevent infinite execution and stack overflow.
                        </p>
                    </div>

                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center">
                            <Lightbulb className="w-4 h-4 mr-2" />
                            2. Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            A function is like a recipe card in a kitchen: it has a name (&quot;Make Pasta&quot;), required ingredients (parameters), and step-by-step instructions (body). You can call the same recipe multiple times without rewriting it. Recursion is like Russian nesting dolls — opening each doll reveals a smaller one inside until you reach the smallest (base case), then you close them back up in reverse order.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                            <Layers className="w-4 h-4 mr-2 text-cyan-600" />
                            3. Recursive Call Stack Frames (Mermaid.js Diagram)
                        </h4>
                        <MermaidDiagram 
                            chart={`graph TD
    A["main() calls factorial(4)"] --> B["factorial(4) = 4 * factorial(3)"]
    B --> C["factorial(3) = 3 * factorial(2)"]
    C --> D["factorial(2) = 2 * factorial(1)"]
    D --> E["factorial(1) = 1 (BASE CASE)"]
    E -->|"Returns 1"| D
    D -->|"Returns 2"| C
    C -->|"Returns 6"| B
    B -->|"Returns 24"| A`}
                            caption="Figure 5.1: Recursive Call Stack showing how factorial(4) builds up stack frames until the base case, then unwinds returning computed values."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                            Each recursive call allocates a new stack frame in memory. The stack unwinds only after the base case returns, computing results in reverse order.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                            <Code className="w-4 h-4 mr-2 text-cyan-600" />
                            4. Sample Code
                        </h4>
                        <CodeBlock 
                            code={`#include <stdio.h>

// Function Prototype
long long factorial(int n);

int main() {
    int num = 5;
    printf("Factorial of %d = %lld\\n", num, factorial(num));
    return 0;
}

// Recursive Implementation
long long factorial(int n) {
    if (n <= 1) return 1;        // Base case: stop recursion
    return n * factorial(n - 1); // Recursive case: call self
}`}
                            lang="c" 
                            colorClass="cyan" 
                            filename="recursion.c" 
                        />
                        <p className="text-xs text-gray-500 font-mono mt-1">
                            // Demonstrates function prototype declaration, recursive factorial computation, and base case termination.
                        </p>
                    </div>

                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center">
                            <Cpu className="w-4 h-4 mr-2" />
                            5. Real-World Application
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            Recursive directory traversal utilities (like <code className="text-cyan-600 font-mono">find</code> and <code className="text-cyan-600 font-mono">ls -R</code>) use recursion to walk nested filesystem trees. Sorting algorithms like QuickSort and MergeSort rely on recursive divide-and-conquer strategies to achieve O(n log n) performance.
                        </p>
                    </div>

                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center">
                            <Check className="w-4 h-4 mr-2" />
                            6. Advantages
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Functions enable code reuse — write once, call from anywhere in the program.</li>
                            <li>Prototypes enable separate declaration and implementation across multiple files.</li>
                            <li>Recursion provides elegant solutions for tree traversal, sorting, and mathematical sequences.</li>
                        </ul>
                    </div>

                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center">
                            <AlertTriangle className="w-4 h-4 mr-2" />
                            7. Disadvantages / Limitations
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Every recursive call consumes stack memory; missing base cases cause stack overflow crashes.</li>
                            <li>Deep recursion (e.g., factorial of 100,000) exceeds default stack size limits — iterative solutions are safer for large inputs.</li>
                            <li>C does not have tail-call optimization guaranteed, so recursive solutions are often slower than iterative equivalents.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'c-arrays-strings',
            title: '6. [Beginner] Arrays & Strings (\\0 Null Terminator, string.h)',
            definition: 'Arrays store contiguous memory elements of the same data type. Strings in C are character arrays terminated by a null byte (`\\0`).',
            syntax: `char str[20] = "Hello"; // Ends with '\\0'
int matrix[2][3] = {{1, 2, 3}, {4, 5, 6}};`,
            codeSnippet: `#include <stdio.h>
#include <string.h>

int main() {
    char source[] = "Advanced C";
    char destination[30];

    // String Copy & Concatenation
    strcpy(destination, source);
    strcat(destination, " Masterclass");

    printf("Result String: %s\\n", destination);
    printf("String Length: %lu\\n", strlen(destination));
    printf("Size in Memory: %lu bytes\\n", sizeof(destination));

    return 0;
}`,
            realLifeScenario: 'String functions in C must handle null terminators (`\\0`) carefully to prevent buffer overflow vulnerabilities.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-cyan-800 dark:text-cyan-300 mb-1 flex items-center">
                            <BookOpen className="w-4 h-4 mr-2" />
                            1. Definition
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            An array is a fixed-size collection of elements of the same data type stored in contiguous memory locations, accessed by zero-based integer indices. In C, strings are simply character arrays (<code className="text-cyan-600 font-mono font-bold">char[]</code>) with a special null terminator byte <code className="text-cyan-600 font-mono font-bold">&apos;\0&apos;</code> marking the end. The <code className="text-cyan-600 font-mono font-bold">string.h</code> library provides functions like <code className="text-cyan-600 font-mono">strcpy</code>, <code className="text-cyan-600 font-mono">strcat</code>, <code className="text-cyan-600 font-mono">strlen</code>, and <code className="text-cyan-600 font-mono">strcmp</code> for string manipulation.
                        </p>
                    </div>

                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center">
                            <Lightbulb className="w-4 h-4 mr-2" />
                            2. Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            Think of an array like a row of numbered lockers in a school hallway — each locker (index) holds exactly one item (value), and they&apos;re all side by side in memory. A C string is like a sentence written on those lockers, with a special &quot;STOP&quot; sign (<code className="text-cyan-600 font-mono">\0</code>) placed after the last letter to tell anyone reading where the sentence ends. Without the STOP sign, you&apos;d keep reading garbage data from random lockers!
                        </p>
                    </div>

                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                            <Layers className="w-4 h-4 mr-2 text-cyan-600" />
                            3. Contiguous Memory Layout (Mermaid.js Diagram)
                        </h4>
                        <MermaidDiagram 
                            chart={`graph LR
    A["Index 0: 'H'"] --> B["Index 1: 'e'"]
    B --> C["Index 2: 'l'"]
    C --> D["Index 3: 'l'"]
    D --> E["Index 4: 'o'"]
    E --> F["Index 5: '\\0'"]
    G["char str[] = 'Hello'"] -->|"6 bytes allocated"| A
    F -->|"Null Terminator"| H["End of String Signal"]`}
                            caption="Figure 6.1: Contiguous Memory Layout of a C string showing character bytes stored sequentially with the null terminator marking the end boundary."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                            Each character occupies 1 byte in adjacent memory cells. The null terminator <code className="text-cyan-600">\0</code> uses an extra byte, so &quot;Hello&quot; requires 6 bytes total, not 5.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                            <Code className="w-4 h-4 mr-2 text-cyan-600" />
                            4. Sample Code
                        </h4>
                        <CodeBlock 
                            code={`#include <stdio.h>
#include <string.h>

int main() {
    char source[] = "Advanced C";
    char destination[30];

    // String operations
    strcpy(destination, source);         // Copy
    strcat(destination, " Masterclass"); // Concatenate
    
    printf("Result: %s\\n", destination);
    printf("Length: %lu\\n", strlen(destination));     // 22
    printf("Buffer Size: %lu bytes\\n", sizeof(destination)); // 30
    
    // Array iteration
    int scores[] = {95, 87, 92, 78, 88};
    int n = sizeof(scores) / sizeof(scores[0]);
    for (int i = 0; i < n; i++) {
        printf("Score[%d] = %d\\n", i, scores[i]);
    }
    
    return 0;
}`}
                            lang="c" 
                            colorClass="cyan" 
                            filename="arrays_strings.c" 
                        />
                        <p className="text-xs text-gray-500 font-mono mt-1">
                            // Demonstrates string copy/concat, strlen vs sizeof difference, and array iteration with sizeof trick for element count.
                        </p>
                    </div>

                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center">
                            <Cpu className="w-4 h-4 mr-2" />
                            5. Real-World Application
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            Security-critical software like OpenSSL must handle C strings with extreme care — the infamous Heartbleed vulnerability was caused by reading past a buffer boundary without checking the null terminator. Database engines use fixed-size arrays for row storage to enable O(1) index-based record access.
                        </p>
                    </div>

                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center">
                            <Check className="w-4 h-4 mr-2" />
                            6. Advantages
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>O(1) constant-time random access to any element by index via pointer arithmetic.</li>
                            <li>Contiguous memory layout maximizes CPU cache line utilization for sequential access.</li>
                            <li>The <code className="text-cyan-400">sizeof()</code> operator enables compile-time array size calculation without runtime overhead.</li>
                        </ul>
                    </div>

                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center">
                            <AlertTriangle className="w-4 h-4 mr-2" />
                            7. Disadvantages / Limitations
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Fixed size at declaration — arrays cannot grow or shrink dynamically (use <code className="text-cyan-400">malloc/realloc</code> for that).</li>
                            <li>No built-in bounds checking — accessing <code className="text-cyan-400">arr[100]</code> on a 10-element array silently reads/writes garbage memory.</li>
                            <li>String functions like <code className="text-cyan-400">strcpy</code> and <code className="text-cyan-400">strcat</code> are unsafe by default — use <code className="text-cyan-400">strncpy</code> and <code className="text-cyan-400">strncat</code> for bounded copies.</li>
                        </ul>
                    </div>
                </div>
            )
        },

        // ==================== INTERMEDIATE TIER ====================
        {
            id: 'c-pointers-addresses',
            title: '7. [Intermediate] Pointers & Memory Address Arithmetic',
            definition: 'Pointers are variables that store the memory address of another variable. The address-of operator (&) extracts addresses; dereference (*) accesses contents.',
            syntax: `int val = 100;
int *ptr = &val;  /* 'ptr' holds memory address of 'val' */
*ptr = 200;       /* Dereferences 'ptr' to modify 'val' */`,
            codeSnippet: `#include <stdio.h>

int main() {
    int number = 42;
    int *ptr = &number;

    printf("Variable Value: %d\\n", number);
    printf("Memory Address (&number): %p\\n", (void*)&number);
    printf("Pointer Value (ptr): %p\\n", (void*)ptr);
    printf("Dereferenced Pointer (*ptr): %d\\n", *ptr);

    // Pointer Arithmetic across Array
    int arr[] = {10, 20, 30};
    int *arrPtr = arr;

    printf("First Element: %d\\n", *arrPtr);
    printf("Second Element (via *(arrPtr + 1)): %d\\n", *(arrPtr + 1));

    return 0;
}`,
            realLifeScenario: 'Device drivers pass physical hardware memory address pointers directly to Direct Memory Access (DMA) controllers for high-speed transfer.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-cyan-800 dark:text-cyan-300 mb-1 flex items-center">
                            <BookOpen className="w-4 h-4 mr-2" />
                            1. Definition
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            A pointer is a variable that stores the memory address of another variable rather than a data value directly. The <code className="text-cyan-600 font-mono font-bold">&amp;</code> (address-of) operator extracts the memory address of a variable, while the <code className="text-cyan-600 font-mono font-bold">*</code> (dereference) operator accesses the value stored at that address. Pointer arithmetic allows navigating through contiguous memory — adding 1 to a pointer advances it by <code className="text-cyan-600 font-mono">sizeof(dataType)</code> bytes, not just 1 byte.
                        </p>
                    </div>

                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center">
                            <Lightbulb className="w-4 h-4 mr-2" />
                            2. Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            A pointer is like a home address written on a sticky note. The sticky note itself doesn&apos;t contain your furniture (data) — it contains the address where the furniture is located. The <code className="text-cyan-600 font-mono">&amp;</code> operator is like looking at a house and writing down its address. The <code className="text-cyan-600 font-mono">*</code> operator is like driving to that address and opening the door to see what&apos;s inside.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                            <Layers className="w-4 h-4 mr-2 text-cyan-600" />
                            3. Pointer Variable → Address → Value Chain (Mermaid.js Diagram)
                        </h4>
                        <MermaidDiagram 
                            chart={`graph LR
    A["int number = 42"] -->|"Stored at"| B["Address: 0x7FFD0A"]
    C["int *ptr = &number"] -->|"Holds Address"| B
    B -->|"*ptr Dereference"| D["Value: 42"]
    E["ptr + 1"] -->|"Advances by sizeof(int) = 4 bytes"| F["Address: 0x7FFD0E"]
    F -->|"*ptr+1 Dereference"| G["Next Element Value"]`}
                            caption="Figure 7.1: Pointer Variable → Address → Value indirection chain showing how pointers store addresses that point to actual data values in memory."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                            Pointer arithmetic moves by <code className="text-cyan-600">sizeof(type)</code> bytes, not raw bytes. For an <code className="text-cyan-600">int*</code> on a 32-bit system, <code className="text-cyan-600">ptr + 1</code> advances 4 bytes.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                            <Code className="w-4 h-4 mr-2 text-cyan-600" />
                            4. Sample Code
                        </h4>
                        <CodeBlock 
                            code={`#include <stdio.h>

int main() {
    int number = 42;
    int *ptr = &number;

    printf("Value: %d\\n", number);
    printf("Address: %p\\n", (void*)&number);
    printf("Pointer holds: %p\\n", (void*)ptr);
    printf("Dereferenced: %d\\n", *ptr);

    // Pointer arithmetic on arrays
    int arr[] = {10, 20, 30};
    int *arrPtr = arr;
    for (int i = 0; i < 3; i++) {
        printf("arr[%d] = %d (at %p)\\n", i, *(arrPtr + i), (void*)(arrPtr + i));
    }

    return 0;
}`}
                            lang="c" 
                            colorClass="cyan" 
                            filename="pointers.c" 
                        />
                        <p className="text-xs text-gray-500 font-mono mt-1">
                            // Shows address extraction, dereferencing, and pointer arithmetic to traverse array elements.
                        </p>
                    </div>

                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center">
                            <Cpu className="w-4 h-4 mr-2" />
                            5. Real-World Application
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            Device drivers pass physical hardware memory address pointers directly to DMA (Direct Memory Access) controllers for zero-copy high-speed data transfers. Operating system memory managers use pointer arithmetic to navigate page tables and virtual address spaces.
                        </p>
                    </div>

                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center">
                            <Check className="w-4 h-4 mr-2" />
                            6. Advantages
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Enables pass-by-reference, allowing functions to modify caller variables directly without copying data.</li>
                            <li>Pointer arithmetic provides efficient array traversal without index bounds-checking overhead.</li>
                            <li>Essential for dynamic memory allocation, linked data structures, and hardware-level programming.</li>
                        </ul>
                    </div>

                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center">
                            <AlertTriangle className="w-4 h-4 mr-2" />
                            7. Disadvantages / Limitations
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Dereferencing a NULL or uninitialized pointer causes segmentation faults (program crash).</li>
                            <li>Dangling pointers (pointing to freed memory) cause undefined behavior that is extremely difficult to debug.</li>
                            <li>Pointer arithmetic errors can silently read/write arbitrary memory locations, causing security vulnerabilities.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'c-structures-unions',
            title: '8. [Intermediate] Structures, Unions & Arrow Operator (->)',
            definition: 'Structures (struct) group heterogeneous data fields together into a custom compound type. Unions share the same memory location across fields. Access fields via dot (.) or arrow (->) for pointers.',
            syntax: `struct Student {
    int id;
    char name[50];
};

struct Student s1;
struct Student *sPtr = &s1;
sPtr->id = 101; /* Arrow operator access */`,
            codeSnippet: `#include <stdio.h>
#include <string.h>

typedef struct {
    int id;
    char name[50];
    float salary;
} Employee;

typedef union {
    int intVal;
    float floatVal;
} VariantData;

int main() {
    Employee emp1;
    Employee *ptr = &emp1;

    // Access via Pointer Arrow Operator
    ptr->id = 901;
    strcpy(ptr->name, "Vinay Mahato");
    ptr->salary = 85000.0f;

    printf("Employee: %s (ID: %d, Salary: ₹%.2f)\\n", ptr->name, ptr->id, ptr->salary);

    // Union Shared Memory Size
    VariantData v;
    v.intVal = 100;
    printf("Union Int: %d | Size: %lu bytes\\n", v.intVal, sizeof(VariantData));

    return 0;
}`,
            realLifeScenario: 'Network packet headers (IP, TCP) are defined in C using packed structures to parse raw byte packets directly off the wire.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-cyan-800 dark:text-cyan-300 mb-1 flex items-center">
                            <BookOpen className="w-4 h-4 mr-2" />
                            1. Definition
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            A <code className="text-cyan-600 font-mono font-bold">struct</code> groups multiple fields of different data types into a single custom type — each field gets its own memory. A <code className="text-cyan-600 font-mono font-bold">union</code> allocates only enough memory for its largest field, and all fields share the same memory location (only one can be active at a time). The dot operator (<code className="text-cyan-600 font-mono">.</code>) accesses fields on struct variables directly, while the arrow operator (<code className="text-cyan-600 font-mono font-bold">-&gt;</code>) accesses fields through struct pointers.
                        </p>
                    </div>

                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center">
                            <Lightbulb className="w-4 h-4 mr-2" />
                            2. Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            A struct is like a student ID card that holds multiple fields (name, ID number, photo, department) — each field has its own space on the card. A union is like a parking spot that can hold either a car OR a motorcycle OR a bicycle, but only one vehicle at a time — the spot is sized for the largest vehicle. The arrow operator (<code className="text-cyan-600 font-mono">-&gt;</code>) is like reading a friend&apos;s ID card through a window using a magnifying glass (pointer) instead of holding the card directly.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                            <Layers className="w-4 h-4 mr-2 text-cyan-600" />
                            3. Struct vs Union Memory Layout (Mermaid.js Diagram)
                        </h4>
                        <MermaidDiagram 
                            chart={`graph TD
    A["struct Employee"] --> B["id: 4 bytes"]
    A --> C["name: 50 bytes"]
    A --> D["salary: 4 bytes"]
    A -->|"Total: 58+ bytes"| E["Each field has own memory"]
    F["union VariantData"] --> G["intVal: 4 bytes"]
    F --> H["floatVal: 4 bytes"]
    F -->|"Total: 4 bytes"| I["All fields share same memory"]`}
                            caption="Figure 8.1: Struct vs Union Memory Layout — structs allocate separate memory for each field, while unions overlay all fields in the same memory region."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                            Structs sum up all field sizes (plus alignment padding). Unions use only the size of the largest field, since only one field value is valid at any time.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                            <Code className="w-4 h-4 mr-2 text-cyan-600" />
                            4. Sample Code
                        </h4>
                        <CodeBlock 
                            code={`#include <stdio.h>
#include <string.h>

typedef struct {
    int id;
    char name[50];
    float salary;
} Employee;

typedef union {
    int intVal;
    float floatVal;
} VariantData;

int main() {
    Employee emp1;
    Employee *ptr = &emp1;

    ptr->id = 901;
    strcpy(ptr->name, "Vinay Mahato");
    ptr->salary = 85000.0f;
    printf("Employee: %s (ID: %d)\\n", ptr->name, ptr->id);

    // Union demonstration
    VariantData v;
    v.intVal = 100;
    printf("Union as int: %d\\n", v.intVal);
    v.floatVal = 3.14f;  // Overwrites intVal
    printf("Union as float: %.2f\\n", v.floatVal);
    printf("Union size: %lu bytes\\n", sizeof(VariantData));

    return 0;
}`}
                            lang="c" 
                            colorClass="cyan" 
                            filename="structs_unions.c" 
                        />
                        <p className="text-xs text-gray-500 font-mono mt-1">
                            // Demonstrates typedef struct with arrow operator access, and union shared memory with field overwriting behavior.
                        </p>
                    </div>

                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center">
                            <Cpu className="w-4 h-4 mr-2" />
                            5. Real-World Application
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            Network protocol stacks define IP/TCP/UDP packet headers as packed structs to parse raw wire bytes directly into named fields. Unions are used in variant types (like JSON parsers) where a value can be an integer, float, or string but never simultaneously.
                        </p>
                    </div>

                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center">
                            <Check className="w-4 h-4 mr-2" />
                            6. Advantages
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Structs enable grouping related data into clean, self-documenting custom types.</li>
                            <li>Unions conserve memory when only one field is needed at a time (e.g., variant/tagged types).</li>
                            <li>The arrow operator (<code className="text-cyan-400">-&gt;</code>) provides concise pointer-to-struct field access.</li>
                        </ul>
                    </div>

                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center">
                            <AlertTriangle className="w-4 h-4 mr-2" />
                            7. Disadvantages / Limitations
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Compiler padding between struct fields wastes memory and makes cross-platform binary layout unpredictable.</li>
                            <li>Unions have no built-in tracking of which field is currently active — reading the wrong field produces garbage data.</li>
                            <li>Large structs passed by value to functions copy all bytes, causing performance overhead (always pass by pointer).</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'c-dynamic-memory-allocation',
            title: '9. [Intermediate] Dynamic Memory Allocation (malloc, calloc, free)',
            definition: 'Dynamic memory allocation manages heap memory at runtime using malloc (uninitialized bytes), calloc (zero-initialized bytes), realloc (resize), and free (deallocation).',
            syntax: `int *arr = (int*) malloc(5 * sizeof(int));   /* Uninitialized */
int *clean = (int*) calloc(5, sizeof(int));  /* Zero-initialized */
free(arr);                                   /* Deallocate */
arr = NULL;                                  /* Nullify Pointer */`,
            codeSnippet: `#include <stdio.h>
#include <stdlib.h>

int main() {
    int n = 5;
    int *heapArray = (int*) malloc(n * sizeof(int));

    if (heapArray == NULL) {
        printf("Heap Memory Allocation Failed!\\n");
        return 1;
    }

    // Populate Heap Array
    for (int i = 0; i < n; i++) {
        heapArray[i] = (i + 1) * 10;
    }

    printf("Heap Array Element 0: %d\\n", heapArray[0]);

    // Free Heap Memory
    free(heapArray);
    heapArray = NULL; // Prevent Dangling Pointer
    printf("Memory Freed Successfully.\\n");

    return 0;
}`,
            realLifeScenario: 'Databases dynamically expand memory buffer pools using `realloc()` as user data volume scales.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-cyan-800 dark:text-cyan-300 mb-1 flex items-center">
                            <BookOpen className="w-4 h-4 mr-2" />
                            1. Definition
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            Dynamic memory allocation lets programs request memory from the heap at runtime, unlike stack variables which have fixed sizes determined at compile time. <code className="text-cyan-600 font-mono font-bold">malloc()</code> allocates a raw block of uninitialized bytes. <code className="text-cyan-600 font-mono font-bold">calloc()</code> allocates and zero-initializes memory. <code className="text-cyan-600 font-mono font-bold">realloc()</code> resizes a previously allocated block. <code className="text-cyan-600 font-mono font-bold">free()</code> releases heap memory back to the operating system.
                        </p>
                    </div>

                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center">
                            <Lightbulb className="w-4 h-4 mr-2" />
                            2. Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            Stack memory is like a fixed set of plates already on your dinner table — you get a set number and can&apos;t add more mid-meal. Heap memory (<code className="text-cyan-600 font-mono">malloc</code>) is like ordering extra plates from the kitchen during the meal — you can request as many as you need, but you&apos;re responsible for returning them (<code className="text-cyan-600 font-mono">free</code>) when done. If you never return them, the kitchen runs out of plates (memory leak)!
                        </p>
                    </div>

                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                            <Layers className="w-4 h-4 mr-2 text-cyan-600" />
                            3. Stack vs Heap Memory Lifecycle (Mermaid.js Diagram)
                        </h4>
                        <MermaidDiagram 
                            chart={`graph TD
    A["Program Start"] --> B["Stack: Local vars auto-allocated"]
    A --> C["Heap: malloc() requested"]
    C --> D["Pointer returned to caller"]
    D --> E["Use heap memory via pointer"]
    E --> F{"Call free()?"}
    F -->|"Yes"| G["Memory returned to OS"]
    F -->|"No"| H["MEMORY LEAK!"]
    B --> I["Function returns: stack auto-freed"]`}
                            caption="Figure 9.1: Stack vs Heap Memory Lifecycle — stack memory is automatic, while heap memory requires explicit malloc/free management."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                            Stack variables are automatically freed when functions return. Heap memory persists until explicitly freed — failing to call <code className="text-cyan-600">free()</code> causes memory leaks.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                            <Code className="w-4 h-4 mr-2 text-cyan-600" />
                            4. Sample Code
                        </h4>
                        <CodeBlock 
                            code={`#include <stdio.h>
#include <stdlib.h>

int main() {
    int n = 5;
    
    // malloc: uninitialized heap memory
    int *arr = (int*) malloc(n * sizeof(int));
    if (!arr) { printf("Allocation failed!\\n"); return 1; }
    
    for (int i = 0; i < n; i++) arr[i] = (i + 1) * 10;
    
    // realloc: expand to 10 elements
    arr = (int*) realloc(arr, 10 * sizeof(int));
    if (!arr) { printf("Realloc failed!\\n"); return 1; }
    
    for (int i = 5; i < 10; i++) arr[i] = (i + 1) * 10;
    
    printf("Element 0: %d, Element 9: %d\\n", arr[0], arr[9]);
    
    free(arr);
    arr = NULL;  // Prevent dangling pointer
    return 0;
}`}
                            lang="c" 
                            colorClass="cyan" 
                            filename="dynamic_memory.c" 
                        />
                        <p className="text-xs text-gray-500 font-mono mt-1">
                            // Demonstrates malloc allocation, realloc expansion, NULL check safety, and proper free + NULL assignment pattern.
                        </p>
                    </div>

                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center">
                            <Cpu className="w-4 h-4 mr-2" />
                            5. Real-World Application
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            Database engines like SQLite dynamically allocate page buffers with <code className="text-cyan-600 font-mono">malloc</code> and expand cache pools with <code className="text-cyan-600 font-mono">realloc</code> as query load increases. Web servers allocate request buffers dynamically based on incoming payload sizes.
                        </p>
                    </div>

                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center">
                            <Check className="w-4 h-4 mr-2" />
                            6. Advantages
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Enables runtime-sized data structures that adapt to actual workload demands.</li>
                            <li>Heap memory persists across function boundaries unlike stack-local variables.</li>
                            <li><code className="text-cyan-400">realloc()</code> can resize allocations in-place without copying when possible.</li>
                        </ul>
                    </div>

                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center">
                            <AlertTriangle className="w-4 h-4 mr-2" />
                            7. Disadvantages / Limitations
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Forgetting <code className="text-cyan-400">free()</code> causes memory leaks that accumulate and eventually crash long-running programs.</li>
                            <li>Double-free (calling <code className="text-cyan-400">free()</code> twice on the same pointer) causes heap corruption and undefined behavior.</li>
                            <li>Heap allocation is slower than stack allocation due to OS kernel system call overhead and fragmentation management.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'c-file-handling',
            title: '10. [Intermediate] File Handling (fopen, fclose, fread, fwrite)',
            definition: 'File handling performs disk file I/O operations using file pointers (FILE*) and stream functions (fopen, fclose, fprintf, fscanf, fgets, fread, fwrite).',
            syntax: `FILE *fp = fopen("data.bin", "wb"); // Binary write mode
fwrite(&data, sizeof(data), 1, fp);
fclose(fp);`,
            codeSnippet: `#include <stdio.h>

typedef struct {
    int id;
    char title[30];
} Course;

int main() {
    Course c1 = {101, "C Masterclass"};
    
    // Write Binary Data to File
    FILE *fp = fopen("course.dat", "wb");
    if (fp != NULL) {
        fwrite(&c1, sizeof(Course), 1, fp);
        fclose(fp);
        printf("Binary Data Written to File.\\n");
    }

    // Read Binary Data from File
    Course cRead;
    fp = fopen("course.dat", "rb");
    if (fp != NULL) {
        fread(&cRead, sizeof(Course), 1, fp);
        fclose(fp);
        printf("Read Course: %s (ID: %d)\\n", cRead.title, cRead.id);
    }

    return 0;
}`,
            realLifeScenario: 'File systems and database engines save B-Tree indexes to disk as binary files using `fwrite()` for ultra-fast raw disk I/O.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-cyan-800 dark:text-cyan-300 mb-1 flex items-center">
                            <BookOpen className="w-4 h-4 mr-2" />
                            1. Definition
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            C file handling uses <code className="text-cyan-600 font-mono font-bold">FILE*</code> pointers to interact with disk files through the standard I/O library. <code className="text-cyan-600 font-mono font-bold">fopen()</code> opens a file in a specified mode (read, write, append, binary). <code className="text-cyan-600 font-mono font-bold">fread()</code> and <code className="text-cyan-600 font-mono font-bold">fwrite()</code> perform raw binary block I/O, while <code className="text-cyan-600 font-mono">fprintf()</code> and <code className="text-cyan-600 font-mono">fscanf()</code> handle formatted text I/O. <code className="text-cyan-600 font-mono font-bold">fclose()</code> flushes buffers and releases the file handle back to the OS.
                        </p>
                    </div>

                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center">
                            <Lightbulb className="w-4 h-4 mr-2" />
                            2. Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            File I/O is like using a library checkout system: <code className="text-cyan-600 font-mono">fopen()</code> is checking out a book (acquiring the resource), reading/writing is flipping pages and taking notes, and <code className="text-cyan-600 font-mono">fclose()</code> is returning the book to the shelf. If you never return the book (forget fclose), nobody else can use it — and you&apos;ll eventually hit the library&apos;s checkout limit (file descriptor exhaustion).
                        </p>
                    </div>

                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                            <Layers className="w-4 h-4 mr-2 text-cyan-600" />
                            3. File I/O Stream Pipeline (Mermaid.js Diagram)
                        </h4>
                        <MermaidDiagram 
                            chart={`graph LR
    A["fopen('file', 'wb')"] --> B["FILE* pointer acquired"]
    B --> C["fwrite() / fprintf()"]
    C --> D["Data written to OS buffer"]
    D --> E["fflush() or fclose()"]
    E --> F["Data flushed to disk"]
    G["fopen('file', 'rb')"] --> H["FILE* pointer acquired"]
    H --> I["fread() / fscanf()"]
    I --> J["Data loaded into memory"]`}
                            caption="Figure 10.1: File I/O Stream Pipeline showing the open → write/read → flush → close lifecycle for both binary and text file operations."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                            Data written via <code className="text-cyan-600">fwrite()</code> sits in a kernel buffer until <code className="text-cyan-600">fflush()</code> or <code className="text-cyan-600">fclose()</code> forces it to physical disk storage.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                            <Code className="w-4 h-4 mr-2 text-cyan-600" />
                            4. Sample Code
                        </h4>
                        <CodeBlock 
                            code={`#include <stdio.h>

typedef struct {
    int id;
    char title[30];
} Course;

int main() {
    Course c1 = {101, "C Masterclass"};
    
    // Binary Write
    FILE *fp = fopen("course.dat", "wb");
    if (fp) {
        fwrite(&c1, sizeof(Course), 1, fp);
        fclose(fp);
        printf("Written to file.\\n");
    }

    // Binary Read
    Course cRead;
    fp = fopen("course.dat", "rb");
    if (fp) {
        fread(&cRead, sizeof(Course), 1, fp);
        fclose(fp);
        printf("Read: %s (ID: %d)\\n", cRead.title, cRead.id);
    }
    return 0;
}`}
                            lang="c" 
                            colorClass="cyan" 
                            filename="file_handling.c" 
                        />
                        <p className="text-xs text-gray-500 font-mono mt-1">
                            // Demonstrates binary file write with fwrite(), binary file read with fread(), and proper NULL check before operations.
                        </p>
                    </div>

                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center">
                            <Cpu className="w-4 h-4 mr-2" />
                            5. Real-World Application
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            Database storage engines (SQLite, PostgreSQL) use <code className="text-cyan-600 font-mono">fwrite()</code> to persist B-Tree index pages as binary blocks for ultra-fast disk I/O. Log management systems use <code className="text-cyan-600 font-mono">fprintf()</code> to write structured log entries to rotating files.
                        </p>
                    </div>

                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center">
                            <Check className="w-4 h-4 mr-2" />
                            6. Advantages
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Binary I/O (<code className="text-cyan-400">fread/fwrite</code>) transfers entire structs in a single call with no parsing overhead.</li>
                            <li>Buffered I/O reduces expensive disk system calls by batching writes in memory.</li>
                            <li>Mode flags (<code className="text-cyan-400">"r"</code>, <code className="text-cyan-400">"w"</code>, <code className="text-cyan-400">"a"</code>, <code className="text-cyan-400">"b"</code>) provide flexible read/write/append/binary access patterns.</li>
                        </ul>
                    </div>

                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center">
                            <AlertTriangle className="w-4 h-4 mr-2" />
                            7. Disadvantages / Limitations
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Forgetting <code className="text-cyan-400">fclose()</code> can cause data loss (unflushed buffer) and file descriptor leaks.</li>
                            <li>Binary files written by <code className="text-cyan-400">fwrite()</code> are not portable across different CPU architectures (endianness, struct padding).</li>
                            <li>No built-in file locking — concurrent processes writing to the same file can corrupt data.</li>
                        </ul>
                    </div>
                </div>
            )
        },

        // ==================== ADVANCED TIER ====================
        {
            id: 'c-double-pointers',
            title: '11. [Advanced] Pointers to Pointers & Pass-by-Reference',
            definition: 'A double pointer (int **) holds the memory address of another pointer variable, enabling pass-by-reference memory modification inside functions.',
            syntax: `void allocateMemory(int **ptrRef, int size) {
    *ptrRef = (int*) malloc(size * sizeof(int));
}`,
            codeSnippet: `#include <stdio.h>
#include <stdlib.h>

void allocateArray(int **arrPtr, int size) {
    *arrPtr = (int*) malloc(size * sizeof(int));
    for (int i = 0; i < size; i++) {
        (*arrPtr)[i] = (i + 1) * 100;
    }
}

int main() {
    int *myArray = NULL;
    allocateArray(&myArray, 3); // Pass double pointer

    printf("Allocated Value 0: %d\\n", myArray[0]);
    printf("Allocated Value 1: %d\\n", myArray[1]);

    free(myArray);
    myArray = NULL;
    return 0;
}`,
            realLifeScenario: '2D matrix allocation (`int **matrix`) and dynamic node allocation functions pass double pointers to modify caller variables directly.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-cyan-800 dark:text-cyan-300 mb-1 flex items-center">
                            <BookOpen className="w-4 h-4 mr-2" />
                            1. Definition
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            A double pointer (<code className="text-cyan-600 font-mono font-bold">int **</code>) is a pointer that stores the address of another pointer variable. This creates two levels of indirection: the double pointer points to a single pointer, which points to the actual data. Double pointers are essential for functions that need to modify the caller&apos;s pointer itself (e.g., allocating memory inside a function and making the caller&apos;s pointer point to the new allocation).
                        </p>
                    </div>

                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center">
                            <Lightbulb className="w-4 h-4 mr-2" />
                            2. Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            Imagine you give a courier the address of your mailbox (single pointer). But if you want the courier to install a brand new mailbox at a different location, you need to give them the address of the piece of paper where your mailbox address is written (double pointer) — so they can update the paper itself to point to the new mailbox. Without the double pointer, the courier could only read your mail, not change where it goes.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                            <Layers className="w-4 h-4 mr-2 text-cyan-600" />
                            3. Double Pointer Indirection Chain (Mermaid.js Diagram)
                        </h4>
                        <MermaidDiagram 
                            chart={`graph LR
    A["int **pp"] -->|"Holds address of ptr"| B["int *ptr"]
    B -->|"Holds address of val"| C["int val = 42"]
    D["*pp"] -->|"Dereference once"| B
    E["**pp"] -->|"Dereference twice"| C
    F["allocateArray(&myArray, n)"] -->|"Passes &myArray as int**"| G["Function modifies *ptrRef"]
    G -->|"*ptrRef = malloc(...)"| H["Caller myArray now points to heap"]`}
                            caption="Figure 11.1: Double Pointer Indirection Chain showing how **pp dereferences through two levels to reach the actual value, enabling pass-by-reference pointer modification."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                            The key insight: passing <code className="text-cyan-600">&amp;myArray</code> (address of the pointer) lets the called function change where <code className="text-cyan-600">myArray</code> itself points.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                            <Code className="w-4 h-4 mr-2 text-cyan-600" />
                            4. Sample Code
                        </h4>
                        <CodeBlock 
                            code={`#include <stdio.h>
#include <stdlib.h>

void allocateArray(int **arrPtr, int size) {
    *arrPtr = (int*) malloc(size * sizeof(int));
    for (int i = 0; i < size; i++) {
        (*arrPtr)[i] = (i + 1) * 100;
    }
}

int main() {
    int *myArray = NULL;
    allocateArray(&myArray, 3);

    for (int i = 0; i < 3; i++) {
        printf("myArray[%d] = %d\\n", i, myArray[i]);
    }

    free(myArray);
    myArray = NULL;
    return 0;
}`}
                            lang="c" 
                            colorClass="cyan" 
                            filename="double_pointers.c" 
                        />
                        <p className="text-xs text-gray-500 font-mono mt-1">
                            // Demonstrates passing a pointer by reference via double pointer to allocate heap memory inside a function.
                        </p>
                    </div>

                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center">
                            <Cpu className="w-4 h-4 mr-2" />
                            5. Real-World Application
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            2D dynamic matrix allocation uses <code className="text-cyan-600 font-mono">int **matrix</code> — a pointer to an array of row pointers. Linked list insertion functions take <code className="text-cyan-600 font-mono">Node **headRef</code> to modify the head pointer when inserting at the front.
                        </p>
                    </div>

                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center">
                            <Check className="w-4 h-4 mr-2" />
                            6. Advantages
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Enables true pass-by-reference for pointer variables — functions can allocate/reallocate memory visible to the caller.</li>
                            <li>Essential for 2D dynamic arrays and multi-dimensional data structures.</li>
                            <li>Allows functions to return multiple values by modifying multiple pointer parameters.</li>
                        </ul>
                    </div>

                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center">
                            <AlertTriangle className="w-4 h-4 mr-2" />
                            7. Disadvantages / Limitations
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Multiple levels of indirection make code harder to read and reason about.</li>
                            <li>Dereferencing errors at any level cause segmentation faults that are difficult to trace.</li>
                            <li>Memory management responsibility increases — each level of pointer allocation needs its own corresponding <code className="text-cyan-400">free()</code> call.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'c-function-pointers',
            title: '12. [Advanced] Function Pointers & Callback Architecture',
            definition: 'Function pointers store memory addresses of executable code functions, enabling dynamic callback architectures and event dispatchers.',
            syntax: `/* Function Pointer Declaration Blueprint */
return_type (*pointer_name)(parameter_types);

/* Example */
int (*operation)(int, int) = addFunction;`,
            codeSnippet: `#include <stdio.h>

int add(int a, int b) { return a + b; }
int multiply(int a, int b) { return a * b; }

// Callback Receiver Function
void executeOperation(int x, int y, int (*opFunc)(int, int)) {
    int result = opFunc(x, y);
    printf("Operation Result: %d\\n", result);
}

int main() {
    // Pass function pointer as callback
    executeOperation(10, 5, add);
    executeOperation(10, 5, multiply);

    return 0;
}`,
            realLifeScenario: 'The C standard library function `qsort()` takes a function pointer comparator callback to sort dynamic arrays.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-cyan-800 dark:text-cyan-300 mb-1 flex items-center">
                            <BookOpen className="w-4 h-4 mr-2" />
                            1. Definition
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            A function pointer is a variable that stores the memory address of a function rather than a data value. This allows functions to be passed as arguments to other functions, stored in arrays, and invoked dynamically at runtime. The syntax <code className="text-cyan-600 font-mono font-bold">int (*funcPtr)(int, int)</code> declares a pointer to a function that takes two ints and returns an int. Using a function name without parentheses evaluates to the function&apos;s address.
                        </p>
                    </div>

                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center">
                            <Lightbulb className="w-4 h-4 mr-2" />
                            2. Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            A function pointer is like a TV remote control&apos;s programmable button. Instead of hardcoding what happens when you press it, you can assign it to any action — change channel, adjust volume, or switch input. In C, you similarly assign a function pointer to <code className="text-cyan-600 font-mono">add</code>, <code className="text-cyan-600 font-mono">multiply</code>, or any function with a matching signature, then &quot;press the button&quot; (invoke via the pointer) to execute whichever function is currently assigned.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                            <Layers className="w-4 h-4 mr-2 text-cyan-600" />
                            3. Callback Dispatch Pattern (Mermaid.js Diagram)
                        </h4>
                        <MermaidDiagram 
                            chart={`graph TD
    A["Caller: main()"] -->|"Pass &add as callback"| B["executeOperation(x, y, opFunc)"]
    A -->|"Pass &multiply as callback"| B
    B --> C{"Invoke opFunc(x, y)"}
    C -->|"If opFunc = add"| D["Returns x + y"]
    C -->|"If opFunc = multiply"| E["Returns x * y"]
    D --> F["Print Result"]
    E --> F`}
                            caption="Figure 12.1: Callback Dispatch Pattern showing how a single dispatcher function dynamically invokes different operations via function pointers."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                            The caller decides which function to execute by passing different function pointers. The dispatcher doesn&apos;t need to know the specific operations — it just invokes whatever was passed.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                            <Code className="w-4 h-4 mr-2 text-cyan-600" />
                            4. Sample Code
                        </h4>
                        <CodeBlock 
                            code={`#include <stdio.h>

int add(int a, int b) { return a + b; }
int multiply(int a, int b) { return a * b; }
int subtract(int a, int b) { return a - b; }

void execute(int x, int y, int (*op)(int, int), const char *name) {
    printf("%s(%d, %d) = %d\\n", name, x, y, op(x, y));
}

int main() {
    // Array of function pointers
    int (*ops[])(int, int) = {add, multiply, subtract};
    const char *names[] = {"add", "multiply", "subtract"};
    
    for (int i = 0; i < 3; i++) {
        execute(10, 5, ops[i], names[i]);
    }
    return 0;
}`}
                            lang="c" 
                            colorClass="cyan" 
                            filename="function_pointers.c" 
                        />
                        <p className="text-xs text-gray-500 font-mono mt-1">
                            // Demonstrates function pointer arrays and dynamic callback dispatch through a generic executor function.
                        </p>
                    </div>

                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center">
                            <Cpu className="w-4 h-4 mr-2" />
                            5. Real-World Application
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            The C standard library&apos;s <code className="text-cyan-600 font-mono">qsort()</code> function takes a comparator function pointer to sort arrays of any data type. Event-driven frameworks, plugin architectures, and OS signal handlers (<code className="text-cyan-600 font-mono">signal()</code>) all rely on function pointer callbacks.
                        </p>
                    </div>

                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center">
                            <Check className="w-4 h-4 mr-2" />
                            6. Advantages
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Enables polymorphism in C — different behaviors selected at runtime without if-else chains.</li>
                            <li>Foundation for plugin architectures, event handlers, and callback-driven APIs.</li>
                            <li>Function pointer arrays replace verbose switch statements with clean dispatch tables.</li>
                        </ul>
                    </div>

                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center">
                            <AlertTriangle className="w-4 h-4 mr-2" />
                            7. Disadvantages / Limitations
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Complex declaration syntax (<code className="text-cyan-400">int (*)(int, int)</code>) is notoriously difficult to read and write correctly.</li>
                            <li>No type safety enforcement — assigning a function with wrong parameter types causes undefined behavior.</li>
                            <li>Calling through a NULL function pointer causes immediate segmentation fault with no recovery.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'c-linked-lists',
            title: '13. [Advanced] Linked Lists Implementation from Scratch',
            definition: 'A Singly Linked List is a dynamic data structure consisting of nodes linked sequentially via pointers.',
            syntax: `struct Node {
    int data;
    struct Node *next;
};`,
            codeSnippet: `#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int data;
    struct Node *next;
} Node;

void insertAtHead(Node **headRef, int newData) {
    Node *newNode = (Node*) malloc(sizeof(Node));
    newNode->data = newData;
    newNode->next = *headRef;
    *headRef = newNode;
}

void printList(Node *head) {
    Node *curr = head;
    while (curr != NULL) {
        printf("%d -> ", curr->data);
        curr = curr->next;
    }
    printf("NULL\\n");
}

int main() {
    Node *head = NULL;
    insertAtHead(&head, 30);
    insertAtHead(&head, 20);
    insertAtHead(&head, 10);

    printList(head); // Output: 10 -> 20 -> 30 -> NULL
    return 0;
}`,
            realLifeScenario: 'OS process schedulers and memory managers maintain linked lists of active process tasks.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-cyan-800 dark:text-cyan-300 mb-1 flex items-center">
                            <BookOpen className="w-4 h-4 mr-2" />
                            1. Definition
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            A singly linked list is a dynamic data structure where each element (<code className="text-cyan-600 font-mono font-bold">node</code>) contains a data field and a pointer (<code className="text-cyan-600 font-mono font-bold">next</code>) to the following node. Unlike arrays, linked list nodes are scattered across heap memory and connected only through pointers. This allows O(1) insertion and deletion at the head without shifting elements, but requires O(n) traversal to access arbitrary elements.
                        </p>
                    </div>

                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center">
                            <Lightbulb className="w-4 h-4 mr-2" />
                            2. Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            A linked list is like a treasure hunt with clues: each clue (node) contains a message (data) and directions to the next clue (pointer). You can only find clue #5 by following clues 1 → 2 → 3 → 4 → 5 in order. Adding a new clue at the beginning is easy — just make it point to the old first clue. But finding a specific clue requires walking through every previous one.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                            <Layers className="w-4 h-4 mr-2 text-cyan-600" />
                            3. Singly Linked List Node Chain (Mermaid.js Diagram)
                        </h4>
                        <MermaidDiagram 
                            chart={`graph LR
    A["HEAD Pointer"] --> B["Node 1: data=10"]
    B -->|"next"| C["Node 2: data=20"]
    C -->|"next"| D["Node 3: data=30"]
    D -->|"next"| E["NULL"]
    F["New Node: data=5"] -->|"Insert at head"| B
    A -.->|"Update HEAD"| F`}
                            caption="Figure 13.1: Singly Linked List showing nodes connected via next pointers, with head insertion demonstrating O(1) prepend operation."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                            Each node exists independently in heap memory. The HEAD pointer is the entry point — inserting at head simply redirects HEAD to the new node.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                            <Code className="w-4 h-4 mr-2 text-cyan-600" />
                            4. Sample Code
                        </h4>
                        <CodeBlock 
                            code={`#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int data;
    struct Node *next;
} Node;

void insertAtHead(Node **headRef, int newData) {
    Node *newNode = (Node*) malloc(sizeof(Node));
    newNode->data = newData;
    newNode->next = *headRef;
    *headRef = newNode;
}

void printList(Node *head) {
    Node *curr = head;
    while (curr) {
        printf("%d -> ", curr->data);
        curr = curr->next;
    }
    printf("NULL\\n");
}

int main() {
    Node *head = NULL;
    insertAtHead(&head, 30);
    insertAtHead(&head, 20);
    insertAtHead(&head, 10);
    printList(head); // 10 -> 20 -> 30 -> NULL
    return 0;
}`}
                            lang="c" 
                            colorClass="cyan" 
                            filename="linked_list.c" 
                        />
                        <p className="text-xs text-gray-500 font-mono mt-1">
                            // Implements a singly linked list with head insertion using double pointer and traversal printing.
                        </p>
                    </div>

                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center">
                            <Cpu className="w-4 h-4 mr-2" />
                            5. Real-World Application
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            Operating system process schedulers maintain ready queues as linked lists of process control blocks. Memory allocators (like <code className="text-cyan-600 font-mono">malloc</code> internally) use free lists — linked lists of available memory blocks sorted by size.
                        </p>
                    </div>

                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center">
                            <Check className="w-4 h-4 mr-2" />
                            6. Advantages
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>O(1) insertion and deletion at head/tail without shifting elements (unlike arrays).</li>
                            <li>Dynamic size — no need to pre-allocate a fixed capacity; grows and shrinks on demand.</li>
                            <li>No wasted memory from unused pre-allocated slots.</li>
                        </ul>
                    </div>

                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center">
                            <AlertTriangle className="w-4 h-4 mr-2" />
                            7. Disadvantages / Limitations
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>O(n) sequential access — no random index access like arrays (no <code className="text-cyan-400">list[5]</code>).</li>
                            <li>Each node requires extra memory for the <code className="text-cyan-400">next</code> pointer (8 bytes on 64-bit systems).</li>
                            <li>Poor CPU cache performance due to non-contiguous memory layout (cache-unfriendly).</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'c-preprocessor-directives',
            title: '14. [Advanced] Preprocessor Directives & Macro Functions',
            definition: 'Preprocessor directives (#define, #include, #ifdef, #ifndef) execute before code compilation, expanding text macros and conditional compilation blocks.',
            syntax: `#define MAX_SIZE 100
#define SQUARE(x) ((x) * (x))
#ifndef HEADER_H
#define HEADER_H
// Header content
#endif`,
            codeSnippet: `#include <stdio.h>

#define PI 3.14159
#define AREA_CIRCLE(r) (PI * (r) * (r))
#define DEBUG_MODE 1

int main() {
    double area = AREA_CIRCLE(5.0);
    printf("Circle Area: %.2f\\n", area);

#if DEBUG_MODE
    printf("[DEBUG]: Debug mode is active.\\n");
#endif

    return 0;
}`,
            realLifeScenario: 'Include guards (`#ifndef HEADER_H`) prevent duplicate symbol definition errors during multi-file header inclusion.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-cyan-800 dark:text-cyan-300 mb-1 flex items-center">
                            <BookOpen className="w-4 h-4 mr-2" />
                            1. Definition
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            The C preprocessor is a text-processing phase that runs <em>before</em> actual compilation begins. <code className="text-cyan-600 font-mono font-bold">#define</code> creates constant macros and function-like macros that perform text substitution. <code className="text-cyan-600 font-mono font-bold">#include</code> copies the contents of header files into the source. <code className="text-cyan-600 font-mono font-bold">#ifdef / #ifndef / #endif</code> enable conditional compilation — including or excluding code blocks based on whether macros are defined.
                        </p>
                    </div>

                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center">
                            <Lightbulb className="w-4 h-4 mr-2" />
                            2. Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            The preprocessor is like a personal assistant who prepares your documents before a meeting. <code className="text-cyan-600 font-mono">#include</code> is like the assistant stapling appendix documents into your report. <code className="text-cyan-600 font-mono">#define PI 3.14</code> is like telling the assistant &quot;every time you see the word PI, replace it with 3.14 before printing.&quot; <code className="text-cyan-600 font-mono">#ifdef DEBUG</code> is like saying &quot;only include the debug notes section if we&apos;re in testing mode.&quot;
                        </p>
                    </div>

                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                            <Layers className="w-4 h-4 mr-2 text-cyan-600" />
                            3. C Build Pipeline (Mermaid.js Diagram)
                        </h4>
                        <MermaidDiagram 
                            chart={`graph LR
    A["Source: main.c"] --> B["Preprocessor"]
    B -->|"#include expansion"| C["Merged Source"]
    B -->|"#define substitution"| C
    B -->|"#ifdef conditional"| C
    C --> D["Compiler: .o object"]
    D --> E["Linker"]
    E --> F["Executable Binary"]`}
                            caption="Figure 14.1: C Build Pipeline showing how the preprocessor expands macros, includes headers, and processes conditionals before the compiler ever sees the code."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                            The preprocessor output is pure expanded C source code — you can view it using <code className="text-cyan-600">gcc -E main.c</code> to see exactly what the compiler receives.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                            <Code className="w-4 h-4 mr-2 text-cyan-600" />
                            4. Sample Code
                        </h4>
                        <CodeBlock 
                            code={`#include <stdio.h>

#define PI 3.14159
#define AREA_CIRCLE(r) (PI * (r) * (r))
#define MAX(a, b) ((a) > (b) ? (a) : (b))
#define DEBUG_MODE 1

#ifndef UTILS_H
#define UTILS_H
// Include guard prevents double-inclusion
#endif

int main() {
    printf("Area: %.2f\\n", AREA_CIRCLE(5.0));
    printf("Max: %d\\n", MAX(10, 20));

#if DEBUG_MODE
    printf("[DEBUG] Debug logging active\\n");
#else
    printf("[RELEASE] Production mode\\n");
#endif

    return 0;
}`}
                            lang="c" 
                            colorClass="cyan" 
                            filename="preprocessor.c" 
                        />
                        <p className="text-xs text-gray-500 font-mono mt-1">
                            // Demonstrates #define constants, function-like macros with parenthesized parameters, include guards, and conditional compilation.
                        </p>
                    </div>

                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center">
                            <Cpu className="w-4 h-4 mr-2" />
                            5. Real-World Application
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            Cross-platform libraries use <code className="text-cyan-600 font-mono">#ifdef _WIN32</code> vs <code className="text-cyan-600 font-mono">#ifdef __linux__</code> to compile platform-specific code paths from a single source file. Include guards (<code className="text-cyan-600 font-mono">#ifndef HEADER_H</code>) are mandatory in every header file to prevent duplicate symbol errors in large projects.
                        </p>
                    </div>

                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center">
                            <Check className="w-4 h-4 mr-2" />
                            6. Advantages
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Macro constants have zero runtime overhead — values are substituted at compile time.</li>
                            <li>Conditional compilation enables single-source cross-platform and debug/release builds.</li>
                            <li>Include guards prevent duplicate definition errors in complex multi-file projects.</li>
                        </ul>
                    </div>

                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center">
                            <AlertTriangle className="w-4 h-4 mr-2" />
                            7. Disadvantages / Limitations
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Macro functions have no type checking — <code className="text-cyan-400">SQUARE(&quot;hello&quot;)</code> compiles without error but produces garbage.</li>
                            <li>Forgetting parentheses around macro parameters causes subtle evaluation bugs (e.g., <code className="text-cyan-400">SQUARE(1+2)</code> becoming <code className="text-cyan-400">1+2*1+2 = 5</code> instead of 9).</li>
                            <li>Excessive macro usage makes debugging harder — debuggers show expanded code, not original macro names.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'c-bit-manipulation',
            title: '15. [Advanced] Bit Manipulation & Bitwise Shift Operations',
            definition: 'Bitwise operators (&, |, ^, ~, <<, >>) manipulate individual binary bits directly for memory flags and hardware control registers.',
            syntax: `/* Bit Operations Blueprint */
flags |= (1 << bit);   /* Set Bit */
flags &= ~(1 << bit);  /* Clear Bit */
flags ^= (1 << bit);   /* Toggle Bit */
isSet = flags & (1 << bit); /* Test Bit */`,
            codeSnippet: `#include <stdio.h>

int main() {
    unsigned char flags = 0; // 0000 0000

    // Set Bit 2 (0000 0100)
    flags |= (1 << 2);
    printf("Flags after setting Bit 2: 0x%02X\\n", flags);

    // Test Bit 2
    if (flags & (1 << 2)) {
        printf("Bit 2 is Active ✓\\n");
    }

    // Clear Bit 2
    flags &= ~(1 << 2);
    printf("Flags after clearing Bit 2: 0x%02X\\n", flags);

    return 0;
}`,
            realLifeScenario: 'Embedded microcontrollers toggle GPIO pin outputs by manipulating bitwise register flags.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-cyan-800 dark:text-cyan-300 mb-1 flex items-center">
                            <BookOpen className="w-4 h-4 mr-2" />
                            1. Definition
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            Bitwise operators manipulate individual binary bits within integer values. <code className="text-cyan-600 font-mono font-bold">&amp;</code> (AND) masks bits, <code className="text-cyan-600 font-mono font-bold">|</code> (OR) sets bits, <code className="text-cyan-600 font-mono font-bold">^</code> (XOR) toggles bits, <code className="text-cyan-600 font-mono font-bold">~</code> (NOT) inverts all bits, <code className="text-cyan-600 font-mono font-bold">&lt;&lt;</code> shifts bits left (multiply by 2), and <code className="text-cyan-600 font-mono font-bold">&gt;&gt;</code> shifts bits right (divide by 2). These operations execute in a single CPU instruction cycle, making them the fastest possible computations.
                        </p>
                    </div>

                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center">
                            <Lightbulb className="w-4 h-4 mr-2" />
                            2. Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            Think of an 8-bit byte as a row of 8 light switches on a panel. Each switch is either ON (1) or OFF (0). Setting bit 2 is like flipping switch #2 to ON without touching the other 7 switches. Clearing bit 2 is flipping it back to OFF. Testing bit 2 is checking whether that specific switch is currently ON. Bitwise operations let you control individual switches independently without affecting the others.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                            <Layers className="w-4 h-4 mr-2 text-cyan-600" />
                            3. Bit Flag Register Operations (Mermaid.js Diagram)
                        </h4>
                        <MermaidDiagram 
                            chart={`graph TD
    A["Byte: 0000 0000"] -->|"SET Bit 2: OR 0000 0100"| B["Result: 0000 0100"]
    B -->|"SET Bit 5: OR 0010 0000"| C["Result: 0010 0100"]
    C -->|"TEST Bit 2: AND 0000 0100"| D["Non-zero = Bit is SET"]
    C -->|"CLEAR Bit 2: AND 1111 1011"| E["Result: 0010 0000"]
    C -->|"TOGGLE Bit 5: XOR 0010 0000"| F["Result: 0000 0100"]`}
                            caption="Figure 15.1: Bit Flag Register Operations showing SET, TEST, CLEAR, and TOGGLE operations on individual bits within a byte."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                            Each operation affects only the targeted bit position. The key pattern: use <code className="text-cyan-600">(1 &lt;&lt; n)</code> to create a mask for bit position n.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                            <Code className="w-4 h-4 mr-2 text-cyan-600" />
                            4. Sample Code
                        </h4>
                        <CodeBlock 
                            code={`#include <stdio.h>

void printBinary(unsigned char val) {
    for (int i = 7; i >= 0; i--) {
        printf("%d", (val >> i) & 1);
    }
    printf("\\n");
}

int main() {
    unsigned char flags = 0;
    
    flags |= (1 << 2);  // Set bit 2
    printf("After SET bit 2: "); printBinary(flags);
    
    flags |= (1 << 5);  // Set bit 5
    printf("After SET bit 5: "); printBinary(flags);
    
    flags ^= (1 << 2);  // Toggle bit 2
    printf("After TOGGLE bit 2: "); printBinary(flags);
    
    // Multiply by 8 using left shift
    int x = 5;
    printf("5 << 3 = %d (multiply by 8)\\n", x << 3);
    
    return 0;
}`}
                            lang="c" 
                            colorClass="cyan" 
                            filename="bit_manipulation.c" 
                        />
                        <p className="text-xs text-gray-500 font-mono mt-1">
                            // Demonstrates bit set/toggle operations with binary visualization, and left-shift as fast multiplication.
                        </p>
                    </div>

                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center">
                            <Cpu className="w-4 h-4 mr-2" />
                            5. Real-World Application
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            Embedded microcontrollers (Arduino, ARM Cortex) use bitwise operations to toggle GPIO pins, configure timer registers, and set interrupt masks. Network protocols use bit fields for compact flag storage in packet headers. Cryptographic algorithms rely heavily on XOR and shift operations.
                        </p>
                    </div>

                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center">
                            <Check className="w-4 h-4 mr-2" />
                            6. Advantages
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Single CPU instruction cycle execution — the fastest possible computation.</li>
                            <li>Enables compact flag storage: 8 boolean flags in a single byte instead of 8 separate variables.</li>
                            <li>Left/right shifts provide instant multiply/divide by powers of 2 without ALU multiplication overhead.</li>
                        </ul>
                    </div>

                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center">
                            <AlertTriangle className="w-4 h-4 mr-2" />
                            7. Disadvantages / Limitations
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Code readability suffers — expressions like <code className="text-cyan-400">flags &amp;= ~(1 &lt;&lt; 3)</code> are cryptic without comments.</li>
                            <li>Right-shifting signed integers is implementation-defined behavior (arithmetic vs logical shift).</li>
                            <li>Shifting by more bits than the type width (e.g., <code className="text-cyan-400">1 &lt;&lt; 33</code> for a 32-bit int) is undefined behavior.</li>
                        </ul>
                    </div>
                </div>
            )
        },

        // ==================== PROFESSIONAL TIER ====================
        {
            id: 'c-memory-management-best-practices',
            title: '16. [Professional] Memory Management Best Practices (Valgrind)',
            definition: 'Professional C development eliminates Dangling Pointers, Double Free errors, and Memory Leaks using tooling like Valgrind and AddressSanitizer (ASan).',
            syntax: `/* Valgrind Memory Leak Checker Command: */
$ gcc -g program.c -o program
$ valgrind --leak-check=full ./program`,
            codeSnippet: `#include <stdio.h>
#include <stdlib.h>

void safeMemoryUsage() {
    int *buffer = (int*) malloc(10 * sizeof(int));
    if (!buffer) return;

    // Use memory...
    buffer[0] = 42;

    // Clean up to prevent leak
    free(buffer);
    buffer = NULL; // Prevent dangling pointer
}

int main() {
    safeMemoryUsage();
    printf("Memory Managed Safely.\\n");
    return 0;
}`,
            realLifeScenario: 'Enterprise software suites run Valgrind leak tests in CI/CD build scripts before deploying mission-critical binaries.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-cyan-800 dark:text-cyan-300 mb-1 flex items-center">
                            <BookOpen className="w-4 h-4 mr-2" />
                            1. Definition
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            Professional memory management in C involves systematic practices to prevent three critical errors: <code className="text-cyan-600 font-mono font-bold">memory leaks</code> (allocated memory never freed), <code className="text-cyan-600 font-mono font-bold">dangling pointers</code> (pointers to freed memory), and <code className="text-cyan-600 font-mono font-bold">double free</code> (calling free twice on the same address). Tools like <code className="text-cyan-600 font-mono font-bold">Valgrind</code> and <code className="text-cyan-600 font-mono font-bold">AddressSanitizer</code> (ASan) instrument programs at runtime to detect these errors automatically.
                        </p>
                    </div>

                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center">
                            <Lightbulb className="w-4 h-4 mr-2" />
                            2. Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            Memory management is like renting hotel rooms. A memory leak is like checking out but never returning the room key — the hotel thinks the room is occupied and can&apos;t give it to anyone else. A dangling pointer is like trying to enter a room after you&apos;ve already checked out — someone else might be in there now. A double free is like returning the key twice — the hotel&apos;s system gets confused and might give two guests the same room. Valgrind is like a hotel inspector who audits every checkout to catch these issues.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                            <Layers className="w-4 h-4 mr-2 text-cyan-600" />
                            3. Memory Leak Detection Workflow (Mermaid.js Diagram)
                        </h4>
                        <MermaidDiagram 
                            chart={`flowchart TD
    A["malloc() / calloc()"] --> B["Use allocated memory"]
    B --> C{"Reached cleanup?"}
    C -->|"Yes"| D["free(ptr)"]
    D --> E["ptr = NULL"]
    E --> F["Safe: No leak, no dangle"]
    C -->|"No - Early return/error"| G["MEMORY LEAK!"]
    D -->|"Call free(ptr) again"| H["DOUBLE FREE - Crash!"]
    E -->|"Access *ptr"| I["NULL dereference - Safe crash"]`}
                            caption="Figure 16.1: Memory Lifecycle showing correct alloc → use → free → NULL path, with error branches for common memory management bugs."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                            The golden rule: every <code className="text-cyan-600">malloc()</code> must have exactly one matching <code className="text-cyan-600">free()</code>, and the pointer must be set to NULL afterward to prevent dangling access.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                            <Code className="w-4 h-4 mr-2 text-cyan-600" />
                            4. Sample Code
                        </h4>
                        <CodeBlock 
                            code={`#include <stdio.h>
#include <stdlib.h>

// Safe allocation wrapper with error handling
int* safeAlloc(int count) {
    int *buf = (int*) calloc(count, sizeof(int));
    if (!buf) {
        fprintf(stderr, "Allocation failed!\\n");
        return NULL;
    }
    return buf;
}

// Safe deallocation wrapper
void safeFree(int **ptrRef) {
    if (*ptrRef) {
        free(*ptrRef);
        *ptrRef = NULL; // Prevent dangling pointer
    }
}

int main() {
    int *data = safeAlloc(100);
    if (!data) return 1;
    
    data[0] = 42;
    printf("data[0] = %d\\n", data[0]);
    
    safeFree(&data); // Safe: frees and NULLifies
    safeFree(&data); // Safe: no-op since data is NULL
    return 0;
}`}
                            lang="c" 
                            colorClass="cyan" 
                            filename="memory_safety.c" 
                        />
                        <p className="text-xs text-gray-500 font-mono mt-1">
                            // Demonstrates safe allocation/deallocation wrappers that prevent leaks, dangling pointers, and double-free bugs.
                        </p>
                    </div>

                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center">
                            <Cpu className="w-4 h-4 mr-2" />
                            5. Real-World Application
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            Enterprise CI/CD pipelines run <code className="text-cyan-600 font-mono">valgrind --leak-check=full</code> on every build to catch memory errors before production deployment. Google&apos;s Chrome and Android use AddressSanitizer (<code className="text-cyan-600 font-mono">-fsanitize=address</code>) to detect buffer overflows and use-after-free bugs in C/C++ code.
                        </p>
                    </div>

                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center">
                            <Check className="w-4 h-4 mr-2" />
                            6. Advantages
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Valgrind detects leaks, invalid reads/writes, and uninitialized memory access automatically.</li>
                            <li>AddressSanitizer catches bugs at 2x runtime overhead vs Valgrind&apos;s 20x, suitable for testing.</li>
                            <li>NULL-after-free pattern converts dangerous silent corruption into safe, detectable NULL dereferences.</li>
                        </ul>
                    </div>

                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center">
                            <AlertTriangle className="w-4 h-4 mr-2" />
                            7. Disadvantages / Limitations
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Valgrind has 10-20x runtime overhead, making it impractical for performance testing.</li>
                            <li>Memory debugging tools only catch errors that are actually triggered during execution — untested code paths remain unchecked.</li>
                            <li>C&apos;s lack of garbage collection means memory safety is entirely the programmer&apos;s responsibility.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'c-multifile-makefiles',
            title: '17. [Professional] Multi-File Projects & Makefiles',
            definition: 'Large C programs are split across header (.h) and source (.c) files, compiled deterministically using GCC and Makefiles.',
            syntax: `# Makefile Blueprint
CC = gcc
CFLAGS = -Wall -Wextra -O2

all: app

app: main.o utils.o
\t$(CC) main.o utils.o -o app

main.o: main.c
\t$(CC) $(CFLAGS) -c main.c

clean:
\trm -f *.o app`,
            codeSnippet: `# Sample Commands to Compile Multi-File Project
$ gcc -Wall -Wextra -c utils.c
$ gcc -Wall -Wextra -c main.c
$ gcc main.o utils.o -o myapp
$ ./myapp`,
            realLifeScenario: 'The Linux kernel build system contains thousands of Makefiles coordinating parallel C compilation across CPU cores.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-cyan-800 dark:text-cyan-300 mb-1 flex items-center">
                            <BookOpen className="w-4 h-4 mr-2" />
                            1. Definition
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            Multi-file C projects organize code into <code className="text-cyan-600 font-mono font-bold">header files (.h)</code> containing function prototypes and type declarations, and <code className="text-cyan-600 font-mono font-bold">source files (.c)</code> containing implementations. A <code className="text-cyan-600 font-mono font-bold">Makefile</code> is a build automation script that defines compilation rules, dependencies between files, and compiler flags — it only recompiles files that have changed, saving time on large projects.
                        </p>
                    </div>

                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center">
                            <Lightbulb className="w-4 h-4 mr-2" />
                            2. Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            Think of a multi-file project like building a car in a factory. Header files (<code className="text-cyan-600 font-mono">.h</code>) are the engineering blueprints that describe what each part should look like. Source files (<code className="text-cyan-600 font-mono">.c</code>) are the actual manufacturing instructions for each part. The Makefile is the factory manager&apos;s production schedule — it knows which parts depend on which, only rebuilds parts that changed, and assembles everything into the final car in the right order.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                            <Layers className="w-4 h-4 mr-2 text-cyan-600" />
                            3. Multi-File Compilation DAG (Mermaid.js Diagram)
                        </h4>
                        <MermaidDiagram 
                            chart={`graph TD
    A["utils.h"] -->|"#include"| B["utils.c"]
    A -->|"#include"| C["main.c"]
    B -->|"gcc -c"| D["utils.o"]
    C -->|"gcc -c"| E["main.o"]
    D -->|"Linker"| F["app (executable)"]
    E -->|"Linker"| F
    G["Makefile"] -->|"Orchestrates"| D
    G -->|"Orchestrates"| E
    G -->|"Links"| F`}
                            caption="Figure 17.1: Multi-file Compilation Directed Acyclic Graph (DAG) showing how header and source files compile to objects and link into the final executable."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                            The Makefile tracks file timestamps. If only <code className="text-cyan-600">utils.c</code> changes, only <code className="text-cyan-600">utils.o</code> is recompiled — <code className="text-cyan-600">main.o</code> is reused from the previous build.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                            <Code className="w-4 h-4 mr-2 text-cyan-600" />
                            4. Sample Code
                        </h4>
                        <CodeBlock 
                            code={`# Makefile for multi-file C project
CC = gcc
CFLAGS = -Wall -Wextra -O2 -g

# Target: final executable
app: main.o utils.o
\t$(CC) $^ -o $@

# Compile source files to object files
%.o: %.c
\t$(CC) $(CFLAGS) -c $< -o $@

# Dependency tracking
main.o: main.c utils.h
utils.o: utils.c utils.h

# Cleanup
clean:
\trm -f *.o app

.PHONY: clean`}
                            lang="makefile" 
                            colorClass="cyan" 
                            filename="Makefile" 
                        />
                        <p className="text-xs text-gray-500 font-mono mt-1">
                            // Professional Makefile with pattern rules, automatic variables ($^ $@ $&lt;), dependency tracking, and phony clean target.
                        </p>
                    </div>

                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center">
                            <Cpu className="w-4 h-4 mr-2" />
                            5. Real-World Application
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            The Linux kernel build system uses thousands of nested Makefiles with <code className="text-cyan-600 font-mono">make -j$(nproc)</code> to parallelize compilation across all CPU cores. CMake generates Makefiles automatically for cross-platform C/C++ projects (Windows, Linux, macOS).
                        </p>
                    </div>

                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center">
                            <Check className="w-4 h-4 mr-2" />
                            6. Advantages
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Incremental builds — only changed files are recompiled, saving minutes on large projects.</li>
                            <li>Parallel compilation (<code className="text-cyan-400">make -j8</code>) utilizes all CPU cores for faster builds.</li>
                            <li>Header/source separation enables clean API boundaries and independent module development.</li>
                        </ul>
                    </div>

                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center">
                            <AlertTriangle className="w-4 h-4 mr-2" />
                            7. Disadvantages / Limitations
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Makefile syntax is notoriously finicky — tabs vs spaces matter and cause silent build failures.</li>
                            <li>Manual dependency tracking is error-prone; forgetting a dependency causes stale object files.</li>
                            <li>Makefiles are not cross-platform by default — paths and commands differ between Linux, macOS, and Windows.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'c-debugging-gdb',
            title: '18. [Professional] Debugging with GDB (GNU Debugger)',
            definition: 'GDB inspects running C process memory, sets breakpoints, steps through execution, and analyzes segmentation fault core dumps.',
            syntax: `/* Common GDB Debugger Commands */
$ gdb ./app
(gdb) break main
(gdb) run
(gdb) print varName
(gdb) step
(gdb) backtrace`,
            codeSnippet: `# Compile program with debug symbols flag (-g)
$ gcc -g -O0 program.c -o program_debug
$ gdb ./program_debug

# Inside GDB Shell:
(gdb) b main          # Set breakpoint at main
(gdb) r               # Run program
(gdb) n               # Next line
(gdb) p ptr           # Print pointer address
(gdb) bt              # Print stack backtrace`,
            realLifeScenario: 'Developers analyze crash core dumps (`core.XXXX`) in GDB to locate exact source code line numbers causing production segmentation faults.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-cyan-800 dark:text-cyan-300 mb-1 flex items-center">
                            <BookOpen className="w-4 h-4 mr-2" />
                            1. Definition
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            GDB (GNU Debugger) is a command-line tool that allows you to pause, inspect, and control the execution of a compiled C program. You can set <code className="text-cyan-600 font-mono font-bold">breakpoints</code> to pause at specific lines, <code className="text-cyan-600 font-mono font-bold">step</code> through code line by line, <code className="text-cyan-600 font-mono font-bold">print</code> variable values and memory addresses, and use <code className="text-cyan-600 font-mono font-bold">backtrace</code> to see the function call stack. Programs must be compiled with <code className="text-cyan-600 font-mono font-bold">-g</code> flag to include debug symbol information.
                        </p>
                    </div>

                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center">
                            <Lightbulb className="w-4 h-4 mr-2" />
                            2. Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            GDB is like a slow-motion replay system for sports referees. Instead of watching the game at full speed and guessing what went wrong, you can pause at any moment (breakpoint), zoom in to examine player positions (print variables), replay frame by frame (step), and rewind to see how you got here (backtrace). When a crash happens, the core dump is like the instant replay footage that lets you see exactly what happened at the moment of the crash.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                            <Layers className="w-4 h-4 mr-2 text-cyan-600" />
                            3. GDB Debug Session Workflow (Mermaid.js Diagram)
                        </h4>
                        <MermaidDiagram 
                            chart={`graph LR
    A["gcc -g -O0 prog.c"] --> B["Load in GDB"]
    B --> C["Set Breakpoint"]
    C --> D["Run Program"]
    D --> E["Hit Breakpoint - Paused"]
    E --> F["Inspect: print, display"]
    F --> G["Step: next, step"]
    G --> H{"Bug Found?"}
    H -->|"Yes"| I["Fix Code & Rebuild"]
    H -->|"No"| E`}
                            caption="Figure 18.1: GDB Debug Session Workflow showing the compile(-g) → load → breakpoint → run → inspect → step → fix cycle."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                            The <code className="text-cyan-600">-g</code> flag embeds source line information into the binary. The <code className="text-cyan-600">-O0</code> flag disables optimizations that would reorder code and make debugging confusing.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                            <Code className="w-4 h-4 mr-2 text-cyan-600" />
                            4. Sample Code
                        </h4>
                        <CodeBlock 
                            code={`# Compile with debug symbols
$ gcc -g -O0 buggy.c -o buggy_debug

# Start GDB session
$ gdb ./buggy_debug

# GDB commands workflow:
(gdb) break main          # Breakpoint at main()
(gdb) break buggy.c:25    # Breakpoint at line 25
(gdb) run                 # Start execution
(gdb) next                # Execute next line (step over)
(gdb) step                # Step into function call
(gdb) print variable      # Print variable value
(gdb) print *ptr          # Dereference and print
(gdb) display variable    # Auto-print every step
(gdb) backtrace           # Show call stack
(gdb) info locals         # All local variables
(gdb) continue            # Resume until next breakpoint
(gdb) quit                # Exit GDB`}
                            lang="bash" 
                            colorClass="cyan" 
                            filename="gdb_session.sh" 
                        />
                        <p className="text-xs text-gray-500 font-mono mt-1">
                            // Complete GDB workflow: compile with debug info, set breakpoints, step through code, and inspect program state.
                        </p>
                    </div>

                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center">
                            <Cpu className="w-4 h-4 mr-2" />
                            5. Real-World Application
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            Production servers enable core dumps so that when a C program crashes, engineers can load the core file in GDB (<code className="text-cyan-600 font-mono">gdb ./app core.12345</code>) to see the exact stack trace, variable values, and line number that caused the segfault — even weeks after the crash occurred.
                        </p>
                    </div>

                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center">
                            <Check className="w-4 h-4 mr-2" />
                            6. Advantages
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Post-mortem debugging via core dumps — analyze crashes that happened in production without reproducing them.</li>
                            <li>Breakpoints, watchpoints, and conditional stops give precise control over program execution.</li>
                            <li>Can attach to running processes (<code className="text-cyan-400">gdb -p PID</code>) to debug without restarting.</li>
                        </ul>
                    </div>

                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center">
                            <AlertTriangle className="w-4 h-4 mr-2" />
                            7. Disadvantages / Limitations
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Command-line interface has a steep learning curve compared to IDE-integrated debuggers.</li>
                            <li>Optimized builds (<code className="text-cyan-400">-O2</code>, <code className="text-cyan-400">-O3</code>) reorder code, making GDB stepping unreliable.</li>
                            <li>Multi-threaded program debugging is complex — thread switching and race conditions are hard to reproduce deterministically.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'c-system-level-programming',
            title: '19. [Professional] System-Level Programming & POSIX Calls',
            definition: 'POSIX system calls (open, read, write, close, fork, exec, pipe) interface directly with OS kernel routines.',
            syntax: `/* POSIX Fork System Call Blueprint */
pid_t pid = fork();
if (pid == 0) {
    // Child Process
} else {
    // Parent Process
}`,
            codeSnippet: `#include <stdio.h>
#include <unistd.h>
#include <sys/types.h>

int main() {
    pid_t pid = fork();

    if (pid < 0) {
        printf("Fork Process Failed!\\n");
        return 1;
    } else if (pid == 0) {
        printf("[Child Process] PID: %d\\n", getpid());
    } else {
        printf("[Parent Process] Spawned Child PID: %d\\n", pid);
    }

    return 0;
}`,
            realLifeScenario: 'Web servers like Nginx spawn worker processes using `fork()` to distribute incoming HTTP connection loads.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-cyan-800 dark:text-cyan-300 mb-1 flex items-center">
                            <BookOpen className="w-4 h-4 mr-2" />
                            1. Definition
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            System-level programming in C uses POSIX (Portable Operating System Interface) system calls to interact directly with the operating system kernel. <code className="text-cyan-600 font-mono font-bold">fork()</code> creates a child process by duplicating the current process. <code className="text-cyan-600 font-mono font-bold">exec()</code> replaces the current process image with a new program. <code className="text-cyan-600 font-mono font-bold">pipe()</code> creates a unidirectional data channel between processes. These calls bypass standard library abstractions and talk directly to the kernel.
                        </p>
                    </div>

                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center">
                            <Lightbulb className="w-4 h-4 mr-2" />
                            2. Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            <code className="text-cyan-600 font-mono">fork()</code> is like a cell dividing — the parent cell splits into two identical copies (parent and child), and each can then go on to do different things independently. <code className="text-cyan-600 font-mono">exec()</code> is like one of those copies completely transforming into a different organism. <code className="text-cyan-600 font-mono">pipe()</code> is like connecting two workers with a pneumatic tube — one pushes messages in, the other receives them on the other end.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                            <Layers className="w-4 h-4 mr-2 text-cyan-600" />
                            3. fork() Process Tree (Mermaid.js Diagram)
                        </h4>
                        <MermaidDiagram 
                            chart={`graph TD
    A["Parent Process (PID 100)"] -->|"fork()"| B["Parent continues (PID 100)"]
    A -->|"fork()"| C["Child created (PID 101)"]
    B -->|"fork() returns child PID"| D["Parent: pid > 0 branch"]
    C -->|"fork() returns 0"| E["Child: pid == 0 branch"]
    E -->|"exec()"| F["Child replaced with new program"]
    D -->|"wait()"| G["Parent waits for child to finish"]`}
                            caption="Figure 19.1: fork() Process Tree showing how a single process splits into parent and child, with exec() replacing the child's program image."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                            After <code className="text-cyan-600">fork()</code>, both processes execute the same code — the return value (0 for child, child PID for parent) determines which branch each takes.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                            <Code className="w-4 h-4 mr-2 text-cyan-600" />
                            4. Sample Code
                        </h4>
                        <CodeBlock 
                            code={`#include <stdio.h>
#include <unistd.h>
#include <sys/types.h>
#include <sys/wait.h>

int main() {
    pid_t pid = fork();

    if (pid < 0) {
        perror("Fork failed");
        return 1;
    } else if (pid == 0) {
        // Child process
        printf("[Child] PID: %d, Parent PID: %d\\n", getpid(), getppid());
        // Replace with 'ls' command
        execlp("ls", "ls", "-la", NULL);
        perror("exec failed"); // Only reached if exec fails
    } else {
        // Parent process
        printf("[Parent] Waiting for child PID: %d\\n", pid);
        int status;
        waitpid(pid, &status, 0);
        printf("[Parent] Child exited with status: %d\\n", WEXITSTATUS(status));
    }
    return 0;
}`}
                            lang="c" 
                            colorClass="cyan" 
                            filename="system_calls.c" 
                        />
                        <p className="text-xs text-gray-500 font-mono mt-1">
                            // Demonstrates fork/exec pattern: parent forks a child, child replaces itself with ls command, parent waits for completion.
                        </p>
                    </div>

                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center">
                            <Cpu className="w-4 h-4 mr-2" />
                            5. Real-World Application
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            Web servers like Nginx and Apache use <code className="text-cyan-600 font-mono">fork()</code> to spawn worker processes that handle incoming HTTP connections in parallel. Unix shells use the fork/exec pattern to run every command you type. Container runtimes (Docker) use <code className="text-cyan-600 font-mono">clone()</code> (Linux-specific fork variant) with namespace isolation.
                        </p>
                    </div>

                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center">
                            <Check className="w-4 h-4 mr-2" />
                            6. Advantages
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Direct kernel interaction with no library abstraction overhead for maximum performance.</li>
                            <li>Process isolation via fork ensures crashes in child processes don&apos;t affect the parent.</li>
                            <li>Pipes enable lightweight inter-process communication without network sockets.</li>
                        </ul>
                    </div>

                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center">
                            <AlertTriangle className="w-4 h-4 mr-2" />
                            7. Disadvantages / Limitations
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>POSIX calls are not portable to Windows — Windows uses CreateProcess instead of fork/exec.</li>
                            <li>Zombie processes accumulate if the parent doesn&apos;t call <code className="text-cyan-400">wait()</code> to collect child exit statuses.</li>
                            <li>Fork duplicates the entire process memory space, which is expensive for large programs (mitigated by copy-on-write).</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'c-efficient-portable-c',
            title: '20. [Professional] Writing Efficient & Portable C (-O2 Flags)',
            definition: 'Portable C avoids Undefined Behavior (UB), respects CPU cache line alignment, and leverages compiler optimization flags (-O2, -O3).',
            syntax: `/* Structure Padding & Alignment */
struct __attribute__((__packed__)) PackedStruct {
    char flag;
    int data;  /* No padding bytes added */
};`,
            codeSnippet: `#include <stdio.h>

// Struct with Compiler Padding vs Packing
struct Unpacked {
    char c;     // 1 byte + 3 bytes padding
    int i;      // 4 bytes
};

struct __attribute__((__packed__)) Packed {
    char c;     // 1 byte
    int i;      // 4 bytes
};

int main() {
    printf("Unpacked Struct Size: %lu bytes\\n", sizeof(struct Unpacked)); // 8 bytes
    printf("Packed Struct Size:   %lu bytes\\n", sizeof(struct Packed));   // 5 bytes
    return 0;
}`,
            realLifeScenario: 'Network protocol drivers use `__attribute__((__packed__))` to map struct fields directly onto incoming wire bytes without compiler padding.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-cyan-800 dark:text-cyan-300 mb-1 flex items-center">
                            <BookOpen className="w-4 h-4 mr-2" />
                            1. Definition
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            Writing efficient and portable C means producing code that runs fast across different platforms without relying on compiler-specific or architecture-specific behavior. <code className="text-cyan-600 font-mono font-bold">-O2</code> enables safe optimizations (inlining, loop unrolling, dead code elimination). <code className="text-cyan-600 font-mono font-bold">-O3</code> adds aggressive optimizations. Avoiding <code className="text-cyan-600 font-mono font-bold">Undefined Behavior</code> (signed overflow, null dereference, out-of-bounds access) ensures the compiler&apos;s optimizer doesn&apos;t produce unexpected results.
                        </p>
                    </div>

                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center">
                            <Lightbulb className="w-4 h-4 mr-2" />
                            2. Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            Compiler optimization flags are like hiring a professional editor for your book. <code className="text-cyan-600 font-mono">-O0</code> is the raw manuscript — unedited but exactly what you wrote. <code className="text-cyan-600 font-mono">-O2</code> is a standard edit — removing redundancy, tightening prose, but keeping your meaning. <code className="text-cyan-600 font-mono">-O3</code> is an aggressive rewrite — it might rearrange entire chapters for flow, which is usually better but occasionally changes your intended meaning (especially if your writing was ambiguous — that&apos;s undefined behavior).
                        </p>
                    </div>

                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                            <Layers className="w-4 h-4 mr-2 text-cyan-600" />
                            3. Compiler Optimization Pipeline (Mermaid.js Diagram)
                        </h4>
                        <MermaidDiagram 
                            chart={`graph LR
    A["C Source Code"] --> B["-O0: No optimization"]
    A --> C["-O2: Safe optimizations"]
    A --> D["-O3: Aggressive optimizations"]
    B --> E["Large binary, fast compile"]
    C --> F["Balanced: inline, unroll, DCE"]
    D --> G["Smallest/fastest binary"]
    H["Undefined Behavior in code"] -->|"-O2/-O3 may exploit UB"| I["Unpredictable results!"]`}
                            caption="Figure 20.1: Compiler Optimization Pipeline showing how -O0, -O2, and -O3 flags affect binary output, and how undefined behavior can be exploited by the optimizer."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                            The key insight: compilers assume your code has no undefined behavior. If it does, higher optimization levels can delete safety checks, reorder operations, or produce completely wrong results.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                            <Code className="w-4 h-4 mr-2 text-cyan-600" />
                            4. Sample Code
                        </h4>
                        <CodeBlock 
                            code={`#include <stdio.h>
#include <stdint.h>

// Portable fixed-width types instead of platform-dependent sizes
void portable_example() {
    int32_t precise_int = 100;    // Always 32-bit
    uint64_t big_counter = 0ULL;  // Always 64-bit unsigned
    printf("int32: %d, uint64: %llu\\n", precise_int, (unsigned long long)big_counter);
}

// Struct ordering for minimal padding
struct Optimized {
    double d;   // 8 bytes (aligned)
    int i;      // 4 bytes
    char c;     // 1 byte + 3 padding
};  // Total: 16 bytes

struct Wasteful {
    char c;     // 1 + 7 padding
    double d;   // 8 bytes
    int i;      // 4 + 4 padding
};  // Total: 24 bytes

int main() {
    printf("Optimized: %lu bytes\\n", sizeof(struct Optimized));  // 16
    printf("Wasteful:  %lu bytes\\n", sizeof(struct Wasteful));   // 24
    portable_example();
    return 0;
}`}
                            lang="c" 
                            colorClass="cyan" 
                            filename="efficient_portable.c" 
                        />
                        <p className="text-xs text-gray-500 font-mono mt-1">
                            // Demonstrates portable fixed-width integer types (stdint.h) and struct field ordering to minimize padding waste.
                        </p>
                    </div>

                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center">
                            <Cpu className="w-4 h-4 mr-2" />
                            5. Real-World Application
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            Network protocol drivers use <code className="text-cyan-600 font-mono">__attribute__((__packed__))</code> to map struct fields directly onto incoming wire bytes without padding. High-performance databases like Redis order struct fields by size to minimize padding and maximize cache line efficiency. Cross-platform libraries use <code className="text-cyan-600 font-mono">stdint.h</code> types for guaranteed sizes across 32-bit and 64-bit architectures.
                        </p>
                    </div>

                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center">
                            <Check className="w-4 h-4 mr-2" />
                            6. Advantages
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li><code className="text-cyan-400">-O2</code> typically improves execution speed by 2-5x with minimal risk of behavior changes.</li>
                            <li>Portable fixed-width types (<code className="text-cyan-400">int32_t</code>, <code className="text-cyan-400">uint64_t</code>) guarantee consistent sizes across all platforms.</li>
                            <li>Struct field reordering can reduce memory usage by 30-50% through padding elimination.</li>
                        </ul>
                    </div>

                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center">
                            <AlertTriangle className="w-4 h-4 mr-2" />
                            7. Disadvantages / Limitations
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Aggressive optimization (<code className="text-cyan-400">-O3</code>) can expose latent undefined behavior bugs that worked fine at <code className="text-cyan-400">-O0</code>.</li>
                            <li>Packed structs cause unaligned memory access penalties on some architectures (ARM, SPARC).</li>
                            <li>Writing truly portable C requires avoiding all compiler extensions, platform-specific headers, and implementation-defined behavior.</li>
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
            title="C Masterclass Course"
            description="Master C from Syntax, Data Types, and Pointers to Memory Allocation, Linked Lists, Bit Manipulation, GDB Debugging, Makefiles, and System Calls."
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
                            <pre>{`/* C Code Blueprint */\n#include <stdio.h>\nint main(void) {\n    return 0;\n}`}</pre>
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
                        <CodeBlock code={activeTopic.codeSnippet} lang="c" colorClass="blue" filename="main.c" />
                    </div>
                )}

                {/* Part 4: Real-Life Scenario Example */}
                <div className="bg-emerald-50 dark:bg-emerald-900/10 border-l-4 border-emerald-600 p-6 rounded-r-xl shadow-sm">
                    <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                        <Lightbulb className="w-5 h-5 mr-2" />
                        4. Real-Life Industry Scenario & Application
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                        {activeTopic.realLifeScenario || activeTopic.example || "Powers operating system kernels, embedded hardware microcontrollers, database storage engines, and high-performance game graphics."}
                    </p>
                </div>
            </div>
        </CoursePageLayout>
    );
};

export default CCoursePage;
