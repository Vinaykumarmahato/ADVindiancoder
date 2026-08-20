import React, { useState } from 'react';
import CoursePageLayout from '../../components/CoursePageLayout';
import { Terminal, Code, BookOpen, Lightbulb, FileText, Cpu, Layers, Database, Server, Settings, Zap, ShieldAlert, Check, AlertTriangle } from 'lucide-react';
import CodeBlock from '../../components/CodeBlock';
import MermaidDiagram from '../../components/MermaidDiagram';

interface PythonTopic {
    id: string;
    title: string;
    definition: string;
    example?: string;
    syntax?: string;
    realLifeScenario?: string;
    codeSnippet?: string | null;
    content: React.ReactNode;
}

const PythonCoursePage = () => {
    const [activeTopicIndex, setActiveTopicIndex] = useState(0);

    const courseData: PythonTopic[] = [
        // ==================== BEGINNER TIER ====================
        {
            id: 'py-syntax-variables-types',
            title: '1. [Beginner] Syntax, Variables & Data Types',
            definition: 'Python is a high-level, interpreted programming language known for clean syntax using white-space indentation instead of curly braces. Variables act as reference labels pointing to objects in memory, created automatically upon assignment without explicit type declarations. Core built-in primitive data types include integers (int), floating-point decimals (float), text strings (str), and boolean true/false values (bool).',
            syntax: `# Variable Assignment Syntax Blueprint
variable_name = value

# Type Casting Blueprint
x = int("10")        # String to Int
y = float(5)         # Int to Float
s = str(99.9)        # Float to String`,
            codeSnippet: `# Dynamic Variable Assignments
user_name = "Vinay Mahato"  # str
user_age = 25              # int
account_balance = 9550.75  # float
is_verified = True         # bool

# Type Inspection & Dynamic Typing
print(f"User: {user_name} (Type: {type(user_name).__name__})")
print(f"Balance: ₹{account_balance} (Type: {type(account_balance).__name__})")

# Explicit Type Casting Example
age_input = "30"
numeric_age = int(age_input) + 5
print(f"Next Age: {numeric_age}")`,
            realLifeScenario: 'Data science and AI pipelines use Python\'s dynamic typing to rapidly clean raw string input data into numeric matrices for processing.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-yellow-50 dark:bg-yellow-950/20 border-l-4 border-yellow-500 rounded-r-xl">
                        <h4 className="text-md font-bold text-yellow-800 dark:text-yellow-300 mb-1 flex items-center">
                            <BookOpen className="w-4 h-4 mr-2" />
                            1. Definition
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            Python is a high-level, interpreted programming language known for clean syntax using white-space indentation instead of curly braces. Variables act as reference labels pointing to objects in memory, created automatically upon assignment without explicit type declarations. Core built-in primitive data types include integers (<code className="text-yellow-600 font-mono font-bold">int</code>), floating-point decimals (<code className="text-yellow-600 font-mono font-bold">float</code>), text strings (<code className="text-yellow-600 font-mono font-bold">str</code>), and boolean true/false values (<code className="text-yellow-600 font-mono font-bold">bool</code>).
                        </p>
                    </div>

                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center">
                            <Lightbulb className="w-4 h-4 mr-2" />
                            2. Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            Think of Python variables like sticky label tags attached to storage boxes in a warehouse. Placing a sticky label named <code className="text-yellow-600 font-mono">user_age</code> onto a box containing <code className="text-yellow-600 font-mono">25</code> tells Python where to find the number later. If you reassign <code className="text-yellow-600 font-mono">user_age = 26</code>, Python simply moves the sticky label to a new box containing <code className="text-yellow-600 font-mono">26</code>, automatically recycling the old box when it is no longer referenced!
                        </p>
                    </div>

                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                            <Layers className="w-4 h-4 mr-2 text-yellow-500" />
                            3. Variable Reference &amp; Memory Object Binding (Mermaid.js Diagram)
                        </h4>
                        <MermaidDiagram 
                            chart={`graph LR
    subgraph Variable Names
        A[user_name]
        C[user_age]
        E[is_verified]
    end
    subgraph Heap Memory Objects
        B["str: 'Vinay Mahato'"]
        D["int: 25"]
        F["bool: True"]
    end
    A -->|Reference Pointer| B
    C -->|Reference Pointer| D
    E -->|Reference Pointer| F`}
                            caption="Figure 1.1: Python Dynamic Variable Binding showing variable name labels pointing to typed objects in heap memory."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                            This diagram demonstrates how Python variable names store memory address pointers to objects rather than holding fixed raw values directly.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                            <Code className="w-4 h-4 mr-2 text-yellow-500" />
                            4. Sample Code
                        </h4>
                        <CodeBlock 
                            code={`# Dynamic Variable Assignments
user_name = "Vinay Mahato"  # str
user_age = 25              # int
account_balance = 9550.75  # float
is_verified = True         # bool

# Type Inspection & Dynamic Typing
print(f"User: {user_name} (Type: {type(user_name).__name__})")
print(f"Balance: ₹{account_balance} (Type: {type(account_balance).__name__})")

# Explicit Type Casting Example
age_input = "30"
numeric_age = int(age_input) + 5
print(f"Next Age: {numeric_age}")`} 
                            lang="python" 
                            colorClass="yellow" 
                            filename="basics.py" 
                        />
                        <p className="text-xs text-gray-500 font-mono mt-1">
                            // Demonstrating dynamic typing, type inspection with type(), and explicit type casting.
                        </p>
                    </div>

                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center">
                            <Cpu className="w-4 h-4 mr-2" />
                            5. Real-World Application
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            Python variables and dynamic data types are used extensively across Data Science, Artificial Intelligence (PyTorch, TensorFlow), Web APIs (Django, FastAPI), and Cloud Automation scripts to process dynamic user payloads quickly.
                        </p>
                    </div>

                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center">
                            <Check className="w-4 h-4 mr-2" />
                            6. Advantages
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>High code readability with clean indentation instead of complex curly brace boilerplate syntax.</li>
                            <li>Dynamic typing speeds up rapid software prototyping without requiring verbose type declarations.</li>
                            <li>Built-in automatic garbage collection reclaims unused heap memory objects automatically.</li>
                        </ul>
                    </div>

                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center">
                            <AlertTriangle className="w-4 h-4 mr-2" />
                            7. Disadvantages / Limitations
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Dynamic typing can conceal type error bugs until execution if unexpected data types pass into functions without type hints (<code className="text-yellow-400">: int</code>).</li>
                            <li>Interpreted execution speeds are generally slower compared to compiled languages like C++ or Rust.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'py-conditionals',
            title: '2. [Beginner] Conditionals & Logic (if, elif, else)',
            definition: 'Conditionals evaluate expressions to True or False, executing indented blocks of code based on logical conditions.',
            syntax: `if condition_1:
    # Action 1
elif condition_2:
    # Action 2
else:
    # Fallback Action`,
            codeSnippet: `balance = 15000
withdraw = 5000
is_active = True

if not is_active:
    print("Account suspended.")
elif withdraw > balance:
    print("Insufficient funds.")
else:
    balance -= withdraw
    print(f"Success! Remaining: ₹{balance}")`,
            realLifeScenario: 'Banking security systems validate user transaction parameters against balance thresholds before committing database debit operations.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-yellow-50 dark:bg-yellow-950/20 border-l-4 border-yellow-500 rounded-r-xl">
                        <h4 className="text-md font-bold text-yellow-800 dark:text-yellow-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Conditional control flow statements (<code className="font-mono text-yellow-600">if</code>, <code className="font-mono text-yellow-600">elif</code>, <code className="font-mono text-yellow-600">else</code>) evaluate boolean expressions to direct program execution along specific indented code blocks.</p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of conditional logic like a traffic light signal. If the signal is green, you proceed; if yellow, you slow down; if red, you halt completely.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-yellow-500" />3. Conditional Decision Tree (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`flowchart TD
    A[Start Transaction] --> B{Account Active?}
    B -- No --> C[Deny: Account Suspended]
    B -- Yes --> D{Withdraw > Balance?}
    D -- Yes --> E[Deny: Insufficient Funds]
    D -- No --> F[Approve: Deduct Balance & Dispense Cash]`}
                            caption="Figure 2.1: Python Conditional Decision Flowchart for Banking Withdrawal."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This flowchart demonstrates decision diamond branching based on boolean evaluations.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-yellow-500" />4. Sample Code</h4>
                        <CodeBlock code={`balance = 15000
withdraw = 5000
is_active = True

if not is_active:
    print("Account suspended.")
elif withdraw > balance:
    print("Insufficient funds.")
else:
    balance -= withdraw
    print(f"Success! Remaining: ₹{balance}")`} lang="python" colorClass="yellow" filename="conditionals.py" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Validating user access credentials and transaction limits in web API endpoints.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Python supports clean ternary single-line expressions (<code className="text-yellow-400">val = x if cond else y</code>).</li>
                            <li>Short-circuit evaluation speeds up logical checks (<code className="text-yellow-400">and</code> / <code className="text-yellow-400">or</code>).</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Deeply nested <code className="text-yellow-400">if</code> statements degrade code readability (cyclomatic complexity).</li>
                            <li>Incorrect indentation inside nested blocks causes IndentationError crashes.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'py-loops',
            title: '3. [Beginner] Loops & Iteration (for, while, range)',
            definition: 'Python loops iterate over sequences (lists, strings, ranges). Control flow keywords include break (exit loop), continue (skip step), and pass (placeholder).',
            syntax: `for i in range(start, stop, step):
    print(i)
while condition:
    # Loop body`,
            codeSnippet: `print("--- Batch Processing ---")
for batch_id in range(101, 106):
    if batch_id == 103:
        print(f"Skipping Batch {batch_id}")
        continue
    print(f"Processed Batch {batch_id}")

countdown = 3
while countdown > 0:
    print(f"Countdown: {countdown}")
    countdown -= 1`,
            realLifeScenario: 'Batch processing engines iterate over millions of database records using range and cursor loops.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-yellow-50 dark:bg-yellow-950/20 border-l-4 border-yellow-500 rounded-r-xl">
                        <h4 className="text-md font-bold text-yellow-800 dark:text-yellow-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed"><code className="font-mono text-yellow-600">for</code> loops iterate over elements in sequences, while <code className="font-mono text-yellow-600">while</code> loops repeat execution as long as a boolean condition remains True. Loop flow can be altered using <code className="font-mono text-yellow-600">break</code> or <code className="font-mono text-yellow-600">continue</code>.</p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of a loop like an assembly line conveyor belt. Each product package moves under the inspection scanner one-by-one until every package in the batch has been checked.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-yellow-500" />3. Loop Iteration &amp; Control Flow (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph TD
    A[Start Loop Iteration] --> B{More Items in Sequence?}
    B -- Yes --> C{item == 103?}
    C -- Yes --> D[continue: Skip to Next Item]
    C -- No --> E[Process Batch Item]
    D --> B
    E --> B
    B -- No --> F[Loop Completed]`}
                            caption="Figure 3.1: Python Loop Iteration and continue Keyword Skipping Flow."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This diagram illustrates loop sequence iteration and continue clause control flow.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-yellow-500" />4. Sample Code</h4>
                        <CodeBlock code={`print("--- Batch Processing ---")
for batch_id in range(101, 106):
    if batch_id == 103:
        print(f"Skipping Batch {batch_id}")
        continue
    print(f"Processed Batch {batch_id}")

countdown = 3
while countdown > 0:
    print(f"Countdown: {countdown}")
    countdown -= 1`} lang="python" colorClass="yellow" filename="loops.py" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Processing data rows in CSV files and polling server endpoints for status updates.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Python loops support an optional <code className="text-yellow-400">else</code> block that runs when a loop completes normally.</li>
                            <li><code className="text-yellow-400">range()</code> generates numbers lazily without allocating large lists in memory.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Infinite <code className="text-yellow-400">while</code> loops freeze execution threads if exit criteria fail to trigger.</li>
                            <li>Modifying a list while looping over it causes missing element iteration bugs.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'py-functions',
            title: '4. [Beginner] Functions & Arguments (*args, **kwargs)',
            definition: 'Functions group modular reusable logic. Python supports positional arguments, keyword arguments, default parameters, variable-length positional args (*args), and keyword args (**kwargs).',
            syntax: `def function_name(param1, param2="default", *args, **kwargs):
    """Docstring explanation"""
    return result`,
            codeSnippet: `def create_user_profile(username, role="Member", *skills, **metadata):
    return {
        "username": username,
        "role": role,
        "skills": list(skills),
        "extra": metadata
    }

user = create_user_profile(
    "vinay_m", "Dev",
    "Python", "Django",
    city="Delhi", exp=5
)
print("User Profile:", user)`,
            realLifeScenario: 'Frameworks like Flask and Django use `*args` and `**kwargs` to accept flexible route handler middleware parameters.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-yellow-50 dark:bg-yellow-950/20 border-l-4 border-yellow-500 rounded-r-xl">
                        <h4 className="text-md font-bold text-yellow-800 dark:text-yellow-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Functions package reusable logic. <code className="font-mono text-yellow-600">*args</code> collects extra positional arguments as a tuple, while <code className="font-mono text-yellow-600">**kwargs</code> collects keyword arguments as a dictionary.</p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of a function like a custom pizza oven. The base crust is required (positional argument), extra toppings go into a bag (*args), and delivery instructions go on a sticky note (**kwargs).</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-yellow-500" />3. Function Arguments Processing (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph LR
    A["Function Call: fn('vinay', 'Dev', 'Python', 'Django', city='Delhi')"] --> B[Positional: username='vinay', role='Dev']
    A --> C["*args -> Tuple: ('Python', 'Django')"]
    A --> D["**kwargs -> Dict: {'city': 'Delhi'}"]
    B & C & D --> E[Return Dictionary Payload]`}
                            caption="Figure 4.1: Python Function Argument Resolution (*args and **kwargs)."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This diagram demonstrates how Python separates positional args, tuples, and keyword dicts.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-yellow-500" />4. Sample Code</h4>
                        <CodeBlock code={`def create_user_profile(username, role="Member", *skills, **metadata):
    return {
        "username": username,
        "role": role,
        "skills": list(skills),
        "extra": metadata
    }

user = create_user_profile(
    "vinay_m", "Dev",
    "Python", "Django",
    city="Delhi", exp=5
)
print("User Profile:", user)`} lang="python" colorClass="yellow" filename="functions.py" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Designing flexible API helper functions and decorator wrapper signatures.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li><code className="text-yellow-400">*args</code> and <code className="text-yellow-400">**kwargs</code> allow writing highly flexible, reusable API signatures.</li>
                            <li>Docstrings (<code className="text-yellow-400">"""..."""</code>) provide built-in documentation inspectable via <code className="text-yellow-400">help()</code>.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Using mutable objects (like lists <code className="text-yellow-400">[]</code>) as default parameter values causes persistent state bugs across calls.</li>
                            <li>Overusing <code className="text-yellow-400">**kwargs</code> obscures expected parameter names from IDE autocompletion.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'py-data-structures',
            title: '5. [Beginner] Data Structures (Lists, Tuples, Dicts, Sets)',
            definition: 'Python features 4 built-in collections: Lists (mutable ordered), Tuples (immutable ordered), Dictionaries (mutable key-value pairs), and Sets (mutable unique unordered).',
            syntax: `my_list = [1, 2, 3]           # Mutable List
my_tuple = (1, 2, 3)          # Immutable Tuple
my_dict = {"key": "value"}    # Key-Value Dictionary
my_set = {1, 2, 3}            # Unique Set`,
            codeSnippet: `# 1. Mutable List
courses = ["Python", "Java", "C++"]
courses.append("React")

# 2. Immutable Tuple
coords = (28.6139, 77.2090)

# 3. Dictionary
student = {"id": 101, "name": "Vinay"}

# 4. Set Duplicate Removal
raw_tags = ["python", "django", "python", "react"]
unique_tags = set(raw_tags)

print("Unique Tags:", unique_tags)`,
            realLifeScenario: 'Removing duplicate items from analytics logs is achieved instantly in O(N) time by casting lists to Python Sets (`set(log_list)`).',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-yellow-50 dark:bg-yellow-950/20 border-l-4 border-yellow-500 rounded-r-xl">
                        <h4 className="text-md font-bold text-yellow-800 dark:text-yellow-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Python collections organize data: Lists (<code className="font-mono text-yellow-600">[]</code>) are ordered and mutable, Tuples (<code className="font-mono text-yellow-600">()</code>) are ordered and immutable, Dictionaries (<code className="font-mono text-yellow-600">{}</code>) store key-value pairs, and Sets (<code className="font-mono text-yellow-600">&#123;&#125;</code>) enforce unique unordered elements.</p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of a List like a shopping checklist where you can cross off or add items; a Tuple is like a printed passport with permanent info; a Dictionary is like a phonebook; and a Set is like a bag of unique marbles.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-yellow-500" />3. Python Data Collections Matrix (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph TD
    A[Python Data Structures] --> B["List [ ] (Mutable, Ordered)"]
    A --> C["Tuple ( ) (Immutable, Ordered)"]
    A --> D["Dict { k: v } (Key-Value Hash)"]
    A --> E["Set { } (Unique, Unordered)"]`}
                            caption="Figure 5.1: Python Core Built-in Data Structures Comparison."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This diagram compares mutability, ordering, and structure across Python collections.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-yellow-500" />4. Sample Code</h4>
                        <CodeBlock code={`# 1. Mutable List
courses = ["Python", "Java", "C++"]
courses.append("React")

# 2. Immutable Tuple
coords = (28.6139, 77.2090)

# 3. Dictionary
student = {"id": 101, "name": "Vinay"}

# 4. Set Duplicate Removal
raw_tags = ["python", "django", "python", "react"]
unique_tags = set(raw_tags)

print("Unique Tags:", unique_tags)`} lang="python" colorClass="yellow" filename="structures.py" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Deduplicating log entries with sets and structuring REST API payloads with dictionaries.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Set membership lookups (<code className="text-yellow-400">item in set</code>) run in O(1) constant time hash table lookups.</li>
                            <li>Dictionaries provide fast key-based indexing.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Set elements must be hashable immutable types (cannot place lists inside sets).</li>
                            <li>Tuples cannot be modified after instantiation.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'py-string-handling',
            title: '6. [Beginner] String Handling, Slicing & f-Strings',
            definition: 'Strings are immutable sequence types. Python provides powerful string formatting (f-strings), slicing `[start:stop:step]`, and methods (split, join, strip, replace).',
            syntax: `# Slicing Syntax Blueprint:
string[start:stop:step]
f"Formatted {val:.2f}"`,
            codeSnippet: `text = "  Advanced Python Programming  "
cleaned = text.strip()
words = cleaned.split(" ")

first_five = cleaned[:8]
reversed_str = cleaned[::-1]
price = 1499.954

print(f"Cleaned: '{cleaned}'")
print(f"Reversed: '{reversed_str}'")
print(f"Price: ₹{price:.2f}")`,
            realLifeScenario: 'NLP (Natural Language Processing) tools use string slicing and `.strip().lower()` methods to sanitize raw web-scraped text.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-yellow-50 dark:bg-yellow-950/20 border-l-4 border-yellow-500 rounded-r-xl">
                        <h4 className="text-md font-bold text-yellow-800 dark:text-yellow-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Strings are immutable sequences of text characters. Python features f-strings (<code className="font-mono text-yellow-600">f"..."</code>) for runtime expression interpolation and flexible slicing syntax (<code className="font-mono text-yellow-600">[start:stop:step]</code>).</p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of string slicing like using a stencil to trim photos. You position the stencil at start index 0 and end index 8 to crop out only the exact portion of the image you want.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-yellow-500" />3. String Slicing Indexing Pipeline (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph LR
    A["Raw String: 'Advanced'"] --> B["Slice [0:5] -> 'Advan'"]
    A --> C["Slice [-4:] -> 'nced'"]
    A --> D["Slice [::-1] -> 'decnavdA'"]`}
                            caption="Figure 6.1: Python String Indexing and Slicing Operations."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This diagram demonstrates forward, negative index, and reverse string slicing.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-yellow-500" />4. Sample Code</h4>
                        <CodeBlock code={`text = "  Advanced Python Programming  "
cleaned = text.strip()
words = cleaned.split(" ")

first_five = cleaned[:8]
reversed_str = cleaned[::-1]
price = 1499.954

print(f"Cleaned: '{cleaned}'")
print(f"Reversed: '{reversed_str}'")
print(f"Price: ₹{price:.2f}")`} lang="python" colorClass="yellow" filename="strings.py" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Cleaning scraped text and formatting data outputs in CLI scripts.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>f-Strings execute significantly faster than legacy <code className="text-yellow-400">%</code> or <code className="text-yellow-400">.format()</code> methods.</li>
                            <li>Negative slicing (<code className="text-yellow-400">[::-1]</code>) provides instant string reversal.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Strings are immutable; mutating characters directly (<code className="text-yellow-400">s[0] = 'A'</code>) throws a TypeError.</li>
                            <li>Heavy string concatenation inside tight loops allocates unnecessary temporary objects.</li>
                        </ul>
                    </div>
                </div>
            )
        },

        // ==================== INTERMEDIATE TIER ====================
        {
            id: 'py-oop',
            title: '7. [Intermediate] Object-Oriented Programming (Classes & Inheritance)',
            definition: 'Python enforces OOP via classes, instance objects, constructor `__init__`, method encapsulation (`self`), inheritance, and polymorphism.',
            syntax: `class BaseClass:
    def __init__(self, name):
        self.name = name

class ChildClass(BaseClass):
    def __init__(self, name, extra):
        super().__init__(name)
        self.extra = extra`,
            codeSnippet: `class BankAccount:
    def __init__(self, owner, balance=0.0):
        self.owner = owner
        self._balance = balance

    def deposit(self, amount):
        if amount > 0:
            self._balance += amount
            print(f"Deposited ₹{amount}. Balance: ₹{self._balance}")

class SavingsAccount(BankAccount):
    def __init__(self, owner, balance=0.0, rate=0.05):
        super().__init__(owner, balance)
        self.rate = rate

    def add_interest(self):
        self.deposit(self._balance * self.rate)

acc = SavingsAccount("Vinay", 50000)
acc.add_interest()`,
            realLifeScenario: 'Django ORM models inherit from `models.Model`, defining database schemas through class inheritance.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-yellow-50 dark:bg-yellow-950/20 border-l-4 border-yellow-500 rounded-r-xl">
                        <h4 className="text-md font-bold text-yellow-800 dark:text-yellow-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Object-Oriented Programming models real-world concepts into classes containing state attributes (<code className="font-mono text-yellow-600">self.attr</code>) and behaviors (<code className="font-mono text-yellow-600">def method(self)</code>), supporting inheritance via <code className="font-mono text-yellow-600">super()</code>.</p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of a class like an architectural blueprint for a house. The blueprint itself is not a physical house, but you can build 50 actual houses (instances) from that single blueprint.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-yellow-500" />3. Class Inheritance Hierarchy (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph TD
    A[Base Class: BankAccount] -->|super.__init__| B[Derived Class: SavingsAccount]
    A --> A1["Attributes: owner, _balance"]
    A --> A2["Methods: deposit()"]
    B --> B1["New Methods: add_interest()"]`}
                            caption="Figure 7.1: Object-Oriented Class Inheritance and Method Reusability."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This diagram demonstrates class inheritance extending base attributes and methods.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-yellow-500" />4. Sample Code</h4>
                        <CodeBlock code={`class BankAccount:
    def __init__(self, owner, balance=0.0):
        self.owner = owner
        self._balance = balance

    def deposit(self, amount):
        if amount > 0:
            self._balance += amount
            print(f"Deposited ₹{amount}. Balance: ₹{self._balance}")

class SavingsAccount(BankAccount):
    def __init__(self, owner, balance=0.0, rate=0.05):
        super().__init__(owner, balance)
        self.rate = rate

    def add_interest(self):
        self.deposit(self._balance * self.rate)

acc = SavingsAccount("Vinay", 50000)
acc.add_interest()`} lang="python" colorClass="yellow" filename="oop.py" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Defining database ORM models in Django or SQLAlchemy web applications.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Promotes code reuse through class inheritance hierarchies.</li>
                            <li><code className="text-yellow-400">super()</code> enables clean method overrides while invoking parent logic.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Multiple inheritance can cause MRO (Method Resolution Order) diamond ambiguity issues.</li>
                            <li>Python does not enforce true private access control (uses leading underscore conventions <code className="text-yellow-400">_var</code>).</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'py-file-io',
            title: '8. [Intermediate] File I/O & Context Managers (with open)',
            definition: 'File I/O opens, reads, and writes disk files. Using the `with` statement acts as an automatic context manager, ensuring files close even if exceptions occur.',
            syntax: `with open("filename.txt", "w", encoding="utf-8") as f:
    f.write("Text content")`,
            codeSnippet: `log_path = "activity.log"

with open(log_path, "w", encoding="utf-8") as file:
    file.write("2026-08-11 14:00:00 [INFO] Started\n")
    file.write("2026-08-11 14:00:05 [INFO] User Login\n")

with open(log_path, "r", encoding="utf-8") as file:
    for line in file:
        print("Log:", line.strip())`,
            realLifeScenario: 'Backend application loggers append system logs to text files or rotatable log buffers using context managers.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-yellow-50 dark:bg-yellow-950/20 border-l-4 border-yellow-500 rounded-r-xl">
                        <h4 className="text-md font-bold text-yellow-800 dark:text-yellow-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">File I/O operations open, read, and write filesystem files. The <code className="font-mono text-yellow-600">with open()</code> context manager guarantees automatic file closure upon exit, avoiding resource leaks.</p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of <code className="font-mono">with open()</code> like borrowing a book from a library with a spring-loaded door; when you leave the reading room, the door automatically swings shut behind you.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-yellow-500" />3. Context Manager File Lifecycle (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph TD
    A["with open('file.txt') as f"] --> B[__enter__: Open File Descriptor]
    B --> C[Read / Write File Operations]
    C --> D[__exit__: Automatically Close File Descriptor]
    D --> E[Resource Memory Freed]`}
                            caption="Figure 8.1: File Context Manager Automatic Lifecycle Management."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This diagram illustrates enter setup, file operations, and exit automatic closure.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-yellow-500" />4. Sample Code</h4>
                        <CodeBlock code={`log_path = "activity.log"

with open(log_path, "w", encoding="utf-8") as file:
    file.write("2026-08-11 14:00:00 [INFO] Started\n")
    file.write("2026-08-11 14:00:05 [INFO] User Login\n")

with open(log_path, "r", encoding="utf-8") as file:
    for line in file:
        print("Log:", line.strip())`} lang="python" colorClass="yellow" filename="file_io.py" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Writing application crash logs and reading local JSON configuration files.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Guarantees file closing even if runtime exceptions occur inside the block.</li>
                            <li><code className="text-yellow-400">encoding="utf-8"</code> prevents cross-platform file encoding corruption.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Reading large multi-gigabyte files using <code className="text-yellow-400">.read()</code> consumes all system RAM (use line iteration instead).</li>
                            <li>Missing file paths throw unhandled FileNotFoundError crashes.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'py-exception-handling',
            title: '9. [Intermediate] Exception Handling & Custom Exceptions',
            definition: 'Exceptions handle runtime errors gracefully using try, except, else, and finally blocks, preventing application crashes.',
            syntax: `try:
    result = 10 / 0
except ZeroDivisionError as e:
    print("Error:", e)
else:
    print("Success")
finally:
    print("Cleanup")`,
            codeSnippet: `class InsufficientFundsError(Exception):
    def __init__(self, balance, amount):
        super().__init__(f"Tried to withdraw ₹{amount} with ₹{balance} balance")

def withdraw(balance, amount):
    if amount > balance:
        raise InsufficientFundsError(balance, amount)
    return balance - amount

try:
    withdraw(2000, 5000)
except InsufficientFundsError as err:
    print("Intercepted Exception:", err)
finally:
    print("Transaction Finished.")`,
            realLifeScenario: 'REST APIs catch custom exceptions and map them directly to appropriate HTTP status codes (e.g. 400 Bad Request, 403 Forbidden).',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-yellow-50 dark:bg-yellow-950/20 border-l-4 border-yellow-500 rounded-r-xl">
                        <h4 className="text-md font-bold text-yellow-800 dark:text-yellow-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Exception handling (<code className="font-mono text-yellow-600">try...except...else...finally</code>) intercepts runtime execution errors and allows applications to recover gracefully or raise custom exception classes.</p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of exception handling like a circus safety net below a trapeze artist. If the performer falls (runtime error), the net catches them safely, allowing the show to continue.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-yellow-500" />3. Exception Handling Control Flow (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`flowchart TD
    A[try Block Execution] --> B{Error Occurred?}
    B -- Yes --> C[except Block Catch Error]
    B -- No --> D[else Block Execution]
    C --> E[finally Block Cleanup]
    D --> E`}
                            caption="Figure 9.1: Python Try-Except-Else-Finally Exception Execution Flow."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This flowchart demonstrates error handling, fallback else blocks, and cleanup finally steps.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-yellow-500" />4. Sample Code</h4>
                        <CodeBlock code={`class InsufficientFundsError(Exception):
    def __init__(self, balance, amount):
        super().__init__(f"Tried to withdraw ₹{amount} with ₹{balance} balance")

def withdraw(balance, amount):
    if amount > balance:
        raise InsufficientFundsError(balance, amount)
    return balance - amount

try:
    withdraw(2000, 5000)
except InsufficientFundsError as err:
    print("Intercepted Exception:", err)
finally:
    print("Transaction Finished.")`} lang="python" colorClass="yellow" filename="exceptions.py" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Mapping internal backend exceptions to user-friendly HTTP error status responses in web services.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Prevents unexpected software crashes by intercepting runtime errors gracefully.</li>
                            <li>Custom exception classes convey domain-specific failure messages clearly.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Bare <code className="text-yellow-400">except:</code> blocks catch keyboard interrupts (<code className="text-yellow-400">Ctrl+C</code>) unintentionally.</li>
                            <li>Overusing try-except blocks can mask underlying logic bugs.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'py-modules-packages',
            title: '10. [Intermediate] Modules & __name__ == "__main__"',
            definition: 'Modules structure Python code into separate files. The `if __name__ == "__main__":` idiom isolates script execution code from imported module code.',
            syntax: `# module.py
def helper(): return "OK"
if __name__ == "__main__":
    print("Script Execution Mode")`,
            codeSnippet: `def add(a, b): return a + b
def multiply(a, b): return a * b

if __name__ == "__main__":
    # Runs ONLY when executed directly as main script
    print("Testing add(5, 5):", add(5, 5))
    print("Testing multiply(4, 3):", multiply(4, 3))`,
            realLifeScenario: 'Python libraries allow developers to import core functions without executing standalone test scripts embedded at the bottom of files.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-yellow-50 dark:bg-yellow-950/20 border-l-4 border-yellow-500 rounded-r-xl">
                        <h4 className="text-md font-bold text-yellow-800 dark:text-yellow-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Modules split code into reusable files. The <code className="font-mono text-yellow-600">if __name__ == "__main__":</code> block checks whether the file is running directly as a top-level script or being imported into another file.</p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of <code className="font-mono">__name__ == "__main__"</code> like a car's demo test-drive switch. When the manufacturer builds the car directly, the demo button works; when sold to a driver, the demo script stays silent.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-yellow-500" />3. Module Execution Mode (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph TD
    A[Python Execution] --> B{Executed directly: python script.py?}
    B -- Yes --> C["__name__ == '__main__' -> Run Main Script Block"]
    B -- No --> D["__name__ == 'module_name' -> Export Functions Only"]`}
                            caption="Figure 10.1: Python Module Direct Script vs Import Execution Branching."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This diagram compares direct script execution with module import behavior.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-yellow-500" />4. Sample Code</h4>
                        <CodeBlock code={`def add(a, b): return a + b
def multiply(a, b): return a * b

if __name__ == "__main__":
    # Runs ONLY when executed directly as main script
    print("Testing add(5, 5):", add(5, 5))
    print("Testing multiply(4, 3):", multiply(4, 3))`} lang="python" colorClass="yellow" filename="math_utils.py" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Allowing Python script files to serve as both importable libraries and standalone CLI tools.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Prevents test code or main scripts from running accidentally during module imports.</li>
                            <li>Enables modular application architecture across multiple <code className="text-yellow-400">.py</code> files.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Circular imports (<code className="text-yellow-400">fileA imports fileB and fileB imports fileA</code>) throw ImportError bugs.</li>
                            <li>Deep module directory structures require proper <code className="text-yellow-400">__init__.py</code> configuration.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'py-comprehensions',
            title: '11. [Intermediate] List & Dict Comprehensions',
            definition: 'Comprehensions construct new lists or dictionaries concisely from existing iterables using single-line declarative syntax.',
            syntax: `# List Comprehension:
[expr for item in iterable if cond]
# Dict Comprehension:
{k_expr: v_expr for item in iterable}`,
            codeSnippet: `numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# List Comprehension
even_squares = [x ** 2 for x in numbers if x % 2 == 0]

# Dict Comprehension
users = ["vinay", "anjali"]
user_map = {name: idx + 100 for idx, name in enumerate(users)}

print("Even Squares:", even_squares)
print("User Map:", user_map)`,
            realLifeScenario: 'Data engineers transform raw dataset columns into processed feature arrays using clean list comprehensions.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-yellow-50 dark:bg-yellow-950/20 border-l-4 border-yellow-500 rounded-r-xl">
                        <h4 className="text-md font-bold text-yellow-800 dark:text-yellow-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">List and Dictionary Comprehensions provide concise, declarative single-line syntax for transforming and filtering iterables into new collections.</p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of comprehensions like an automatic fruit sorting machine. Instead of manually inspecting each apple in a box, a single conveyor belt automatically filters out bruised apples and packages the perfect ones into bags.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-yellow-500" />3. Comprehension Pipeline Flow (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph LR
    A["Raw List: [1..10]"] -->|Filter: x % 2 == 0| B["Filtered: [2, 4, 6, 8, 10]"]
    B -->|Transform: x ** 2| C["Output List: [4, 16, 36, 64, 100]"]`}
                            caption="Figure 11.1: List Comprehension Filtering and Transformation Pipeline."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This diagram demonstrates the 2-step filter and mapping pipeline of list comprehensions.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-yellow-500" />4. Sample Code</h4>
                        <CodeBlock code={`numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# List Comprehension
even_squares = [x ** 2 for x in numbers if x % 2 == 0]

# Dict Comprehension
users = ["vinay", "anjali"]
user_map = {name: idx + 100 for idx, name in enumerate(users)}

print("Even Squares:", even_squares)
print("User Map:", user_map)`} lang="python" colorClass="yellow" filename="comprehensions.py" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Filtering raw database query items and mapping API response fields in backend services.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Executes faster than traditional <code className="text-yellow-400">for</code> loops with <code className="text-yellow-400">.append()</code> due to CPython bytecode optimization.</li>
                            <li>Reduces multi-line loop boilerplate into readable single-line statements.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Overly complex or nested comprehensions drastically reduce code readability.</li>
                            <li>Allocates the entire resulting list immediately in memory (use generator expressions for large data).</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'py-decorators',
            title: '12. [Intermediate] Decorators (@decorator & functools.wraps)',
            definition: 'Decorators modify or extend the behavior of functions or methods dynamically without permanently altering their original source code.',
            syntax: `from functools import wraps
def my_decorator(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        res = func(*args, **kwargs)
        return res
    return wrapper`,
            codeSnippet: `import time
from functools import wraps

def timer_decorator(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        start = time.perf_counter()
        res = func(*args, **kwargs)
        end = time.perf_counter()
        print(f"[{func.__name__}] Time: {(end-start):.4f}s")
        return res
    return wrapper

@timer_decorator
def calculate():
    time.sleep(0.1)
    return 42

calculate()`,
            realLifeScenario: 'Web frameworks like Flask and FastAPI use decorators (`@app.get("/users")`, `@login_required`) to attach routing and authentication checks to functions.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-yellow-50 dark:bg-yellow-950/20 border-l-4 border-yellow-500 rounded-r-xl">
                        <h4 className="text-md font-bold text-yellow-800 dark:text-yellow-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Decorators (<code className="font-mono text-yellow-600">@decorator</code>) are higher-order functions that wrap another function to extend its execution behavior dynamically without editing the wrapped function code.</p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of a decorator like putting a protective waterproof case on your smartphone. The phone's internal electronics remain unchanged, but the case adds new water-resistance capabilities around it.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-yellow-500" />3. Decorator Wrapper Architecture (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph TD
    A["Function Call: @timer_decorator"] --> B[Wrapper Execution Start]
    B --> C[Record Start Time]
    C --> D[Execute Target Function calculate()]
    D --> E[Record End Time & Print Duration]
    E --> F[Return Function Result 42]`}
                            caption="Figure 12.1: Decorator Execution Wrapper Pipeline."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This diagram demonstrates pre-execution tracking, function invocation, and post-execution logging.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-yellow-500" />4. Sample Code</h4>
                        <CodeBlock code={`import time
from functools import wraps

def timer_decorator(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        start = time.perf_counter()
        res = func(*args, **kwargs)
        end = time.perf_counter()
        print(f"[{func.__name__}] Time: {(end-start):.4f}s")
        return res
    return wrapper

@timer_decorator
def calculate():
    time.sleep(0.1)
    return 42

calculate()`} lang="python" colorClass="yellow" filename="decorators.py" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Attaching authentication guards (<code className="text-yellow-600 font-mono">@login_required</code>) and rate-limiting middleware in web backend routers.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Enables clean Aspect-Oriented Programming (AOP) for logging, caching, and auth.</li>
                            <li><code className="text-yellow-400">@functools.wraps(func)</code> preserves wrapped function metadata and docstrings.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Chaining multiple stacked decorators makes debugging execution order complex.</li>
                            <li>Increases call stack depth slightly for performance-critical functions.</li>
                        </ul>
                    </div>
                </div>
            )
        },

        // ==================== ADVANCED TIER ====================
        {
            id: 'py-generators-iterators',
            title: '13. [Advanced] Generators, Iterators & Memory Efficiency',
            definition: 'Generators generate items lazily one at a time using the yield keyword, conserving system memory when processing massive or infinite streams of data.',
            syntax: `def my_gen():
    yield 1
    yield 2
gen = my_gen()
print(next(gen))`,
            codeSnippet: `import sys

# List RAM Allocation vs Generator Lazy Stream
list_data = [x for x in range(100000)]
gen_data = (x for x in range(100000))

print(f"List Size: {sys.getsizeof(list_data)} bytes")
print(f"Generator Size: {sys.getsizeof(gen_data)} bytes")

def fibonacci(limit):
    a, b = 0, 1
    for _ in range(limit):
        yield a
        a, b = b, a + b

print("Fibonacci:", list(fibonacci(5)))`,
            realLifeScenario: 'Reading 50GB database log files line-by-line using generator expressions prevents out-of-memory server crashes.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-yellow-50 dark:bg-yellow-950/20 border-l-4 border-yellow-500 rounded-r-xl">
                        <h4 className="text-md font-bold text-yellow-800 dark:text-yellow-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Generators compute and emit items lazily on demand using the <code className="font-mono text-yellow-600">yield</code> statement, keeping only 1 item in RAM at a time regardless of dataset size.</p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of a generator like a water tap. Instead of filling 10,000 buckets of water in your living room all at once (list allocation), you turn the tap handle to draw 1 cup of water whenever you are ready to drink.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-yellow-500" />3. Generator Lazy Evaluation (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph LR
    A["Caller requests next(gen)"] --> B["Generator resumes to yield"]
    B --> C["Yield Value 1 -> Return to Caller"]
    C --> D[Generator State Paused in RAM]
    D -->|next call| B`}
                            caption="Figure 13.1: Generator Yield and Lazy Evaluation State Machine."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This diagram demonstrates state pausing and resumption during generator yields.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-yellow-500" />4. Sample Code</h4>
                        <CodeBlock code={`import sys

# List RAM Allocation vs Generator Lazy Stream
list_data = [x for x in range(100000)]
gen_data = (x for x in range(100000))

print(f"List Size: {sys.getsizeof(list_data)} bytes")
print(f"Generator Size: {sys.getsizeof(gen_data)} bytes")

def fibonacci(limit):
    a, b = 0, 1
    for _ in range(limit):
        yield a
        a, b = b, a + b

print("Fibonacci:", list(fibonacci(5)))`} lang="python" colorClass="yellow" filename="generators.py" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Streaming large CSV dataset batches into machine learning training pipelines without RAM exhaustion.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Reduces memory footprint from gigabytes to tiny bytes.</li>
                            <li>Enables infinite data stream processing.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Generators can be iterated through only once; re-use requires re-instantiating the generator.</li>
                            <li>Random index access (<code className="text-yellow-400">gen[5]</code>) is not supported.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'py-context-managers-advanced',
            title: '14. [Advanced] Context Managers & contextlib Module',
            definition: 'Context managers manage resource allocation and cleanup using `__enter__` and `__exit__` magic methods, or via `@contextmanager` decorators.',
            syntax: `from contextlib import contextmanager

@contextmanager
def managed_resource():
    resource = acquire()
    try:
        yield resource
    finally:
        release(resource)`,
            codeSnippet: `from contextlib import contextmanager

@contextmanager
def db_session(db_name):
    print(f"Connected to [{db_name}]")
    conn = {"db": db_name, "status": "ACTIVE"}
    try:
        yield conn
        print("Transaction Committed.")
    except Exception as e:
        print("Rollback due to error:", e)
    finally:
        print("Connection Closed.")

with db_session("users_db") as session:
    print("Executing query on:", session["db"])`,
            realLifeScenario: 'Database ORM frameworks wrap database mutations inside context managers to guarantee automatic rollback if SQL queries fail.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-yellow-50 dark:bg-yellow-950/20 border-l-4 border-yellow-500 rounded-r-xl">
                        <h4 className="text-md font-bold text-yellow-800 dark:text-yellow-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Custom context managers created using <code className="font-mono text-yellow-600">@contextlib.contextmanager</code> encapsulate setup and cleanup logic around <code className="font-mono text-yellow-600">with</code> statements.</p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of a custom context manager like a surgical room prep team. Before surgery, they sterilize all tools (setup); after surgery, they clean and count all instruments (cleanup) automatically.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-yellow-500" />3. Custom Context Manager Lifecycle (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph TD
    A["with db_session('users') as s"] --> B[Acquire DB Connection Lock]
    B --> C["yield session -> Execute Body"]
    C --> D{Query Error?}
    D -- Yes --> E[Rollback DB Transaction]
    D -- No --> F[Commit DB Transaction]
    E & F --> G[finally: Release DB Connection]`}
                            caption="Figure 14.1: Database Connection Context Manager Commit / Rollback Pipeline."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This diagram demonstrates setup, transaction commit/rollback, and connection cleanup.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-yellow-500" />4. Sample Code</h4>
                        <CodeBlock code={`from contextlib import contextmanager

@contextmanager
def db_session(db_name):
    print(f"Connected to [{db_name}]")
    conn = {"db": db_name, "status": "ACTIVE"}
    try:
        yield conn
        print("Transaction Committed.")
    except Exception as e:
        print("Rollback due to error:", e)
    finally:
        print("Connection Closed.")

with db_session("users_db") as session:
    print("Executing query on:", session["db"])`} lang="python" colorClass="yellow" filename="context_mgr.py" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Managing database transactions, file locks, and network sockets safely.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Guarantees cleanup code execution inside <code className="text-yellow-400">finally:</code> blocks.</li>
                            <li><code className="text-yellow-400">@contextmanager</code> simplifies writing context managers using generator syntax.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Forgetting to re-raise exceptions inside <code className="text-yellow-400">except</code> blocks swallows error signals.</li>
                            <li>Cannot be applied directly to asynchronous code without <code className="text-yellow-400">@asynccontextmanager</code>.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'py-multithreading-multiprocessing',
            title: '15. [Advanced] Multithreading, Multiprocessing & Python GIL',
            definition: 'Python\'s Global Interpreter Lock (GIL) permits only one thread to execute CPython bytecode at a time. Use `threading` for I/O-bound tasks and `multiprocessing` for CPU-bound tasks.',
            syntax: `from concurrent.futures import ThreadPoolExecutor, ProcessPoolExecutor
with ThreadPoolExecutor() as exec:
    res = exec.map(func, iterable)`,
            codeSnippet: `import time
from concurrent.futures import ThreadPoolExecutor

def io_task(task_id):
    time.sleep(0.1)
    return f"Task {task_id} Done"

start = time.perf_counter()
with ThreadPoolExecutor(max_workers=5) as executor:
    results = list(executor.map(io_task, range(5)))
end = time.perf_counter()

print(f"Results: {results} in {(end-start):.4f}s")`,
            realLifeScenario: 'Web scrapers use multithreading to fetch 50 web pages simultaneously, while image processors use multiprocessing to utilize all CPU cores.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-yellow-50 dark:bg-yellow-950/20 border-l-4 border-yellow-500 rounded-r-xl">
                        <h4 className="text-md font-bold text-yellow-800 dark:text-yellow-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">The CPython Global Interpreter Lock (GIL) restricts execution to 1 thread at a time. Use <code className="font-mono text-yellow-600">ThreadPoolExecutor</code> for I/O-bound tasks and <code className="font-mono text-yellow-600">ProcessPoolExecutor</code> for CPU-bound tasks on multi-core CPUs.</p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Multithreading is like 1 chef switching between waiting for water to boil (I/O). Multiprocessing is like hiring 4 separate chefs in 4 separate kitchens (CPU multi-core parallelism).</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-yellow-500" />3. GIL &amp; Concurrency Architecture (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph TD
    A[Python Execution] --> B{Task Category?}
    B -- I/O Bound Network / Disk --> C["ThreadPoolExecutor (Yields GIL during waiting)"]
    B -- CPU Bound Math / Images --> D["ProcessPoolExecutor (Spawns separate GIL instances)"]`}
                            caption="Figure 15.1: CPython GIL Concurrency Strategy: Threads vs Processes."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This diagram compares ThreadPoolExecutor for I/O with ProcessPoolExecutor for CPU tasks.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-yellow-500" />4. Sample Code</h4>
                        <CodeBlock code={`import time
from concurrent.futures import ThreadPoolExecutor

def io_task(task_id):
    time.sleep(0.1)
    return f"Task {task_id} Done"

start = time.perf_counter()
with ThreadPoolExecutor(max_workers=5) as executor:
    results = list(executor.map(io_task, range(5)))
end = time.perf_counter()

print(f"Results: {results} in {(end-start):.4f}s")`} lang="python" colorClass="yellow" filename="concurrency.py" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Parallel web scraping and batch image resizing across multi-core CPU processors.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Multiprocessing bypasses CPython GIL restrictions to achieve true multi-core parallel CPU computation.</li>
                            <li><code className="text-yellow-400">concurrent.futures</code> provides clean high-level pool abstractions.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Multiprocessing incurs process spawning overhead and inter-process IPC memory copying costs.</li>
                            <li>CPython GIL prevents true multi-threaded CPU parallel execution inside a single process.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'py-virtual-environments',
            title: '16. [Advanced] Virtual Environments & Dependency Management',
            definition: 'Virtual environments (venv, poetry) isolate project dependencies, preventing version conflicts between different Python projects.',
            syntax: `$ python -m venv .venv
$ source .venv/bin/activate
$ pip install -r requirements.txt`,
            codeSnippet: `# Virtual Environment Terminal Commands
# 1. Create: python -m venv .venv
# 2. Activate: source .venv/bin/activate (or .venv\\Scripts\\activate)
# 3. Save: pip freeze > requirements.txt
# 4. Install: pip install -r requirements.txt`,
            realLifeScenario: 'Production Docker containers activate clean virtual environments to ensure exact reproducible library versions.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-yellow-50 dark:bg-yellow-950/20 border-l-4 border-yellow-500 rounded-r-xl">
                        <h4 className="text-md font-bold text-yellow-800 dark:text-yellow-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Virtual environments (<code className="font-mono text-yellow-600">venv</code>) isolate project-specific third-party packages in local project directories, eliminating dependency version conflicts with global Python installations.</p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of a virtual environment like assigning separate toolbox sets to separate construction projects. Project A gets metric wrenches, while Project B gets imperial wrenches, without mixing them up.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-yellow-500" />3. Virtual Environment Isolation (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph TD
    A[Global System Python] --> B[Project A .venv: Django 4.2]
    A --> C[Project B .venv: Django 5.0]
    B --> B1[Isolated site-packages]
    C --> C1[Isolated site-packages]`}
                            caption="Figure 16.1: Virtual Environment Isolation Architecture."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This diagram demonstrates isolated package environments sharing global Python binaries.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-yellow-500" />4. Sample Code</h4>
                        <CodeBlock code={`# Virtual Environment Terminal Commands
# 1. Create: python -m venv .venv
# 2. Activate: source .venv/bin/activate (or .venv\\Scripts\\activate)
# 3. Save: pip freeze > requirements.txt
# 4. Install: pip install -r requirements.txt`} lang="bash" colorClass="yellow" filename="venv.sh" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Packaging reproducible Docker container dependencies for cloud deployments.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Prevents version conflicts between different project library requirements.</li>
                            <li><code className="text-yellow-400">requirements.txt</code> enables 1-command environment replication.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Forgetting to activate the virtual environment installs packages into global system Python.</li>
                            <li>Virtual environment folders (<code className="text-yellow-400">.venv/</code>) must be excluded from Git commits via <code className="text-yellow-400">.gitignore</code>.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'py-regex',
            title: '17. [Advanced] Regular Expressions (re Module)',
            definition: 'The `re` module provides pattern-matching tools to validate, search, extract, and replace text strings using regular expression patterns.',
            syntax: `import re
pattern = re.compile(r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')
match = pattern.match(text)`,
            codeSnippet: `import re

text = "Contact support@advcoder.com or sales@company.org."
email_pattern = r'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}'

emails = re.findall(email_pattern, text)
print("Found Emails:", emails)

phone = "+91-9876543210"
if re.match(r'^\+91-\d{10}$', phone):
    print("Phone Number Validated ✓")`,
            realLifeScenario: 'Form validation and log parsing algorithms use regular expressions to validate emails, IP addresses, and UUID tokens.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-yellow-50 dark:bg-yellow-950/20 border-l-4 border-yellow-500 rounded-r-xl">
                        <h4 className="text-md font-bold text-yellow-800 dark:text-yellow-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">The <code className="font-mono text-yellow-600">re</code> module uses pattern-matching rules to search, match, extract, and sanitize target text strings.</p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of regular expressions like a metal detector at an airport gate. It scans through thousands of passengers (text string), alerting only when it detects specific metallic items (matching pattern).</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-yellow-500" />3. Regex Pattern Matching Pipeline (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`flowchart TD
    A["Raw Input: 'support@advcoder.com'"] --> B["re.compile(email_pattern)"]
    B --> C{Matches Regex Pattern?}
    C -- Yes --> D[Extract Matched Email MatchObject]
    C -- No --> E[Return None]`}
                            caption="Figure 17.1: Regular Expression Pattern Match Verification."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This flowchart demonstrates compiling patterns and validating input string matches.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-yellow-500" />4. Sample Code</h4>
                        <CodeBlock code={`import re

text = "Contact support@advcoder.com or sales@company.org."
email_pattern = r'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}'

emails = re.findall(email_pattern, text)
print("Found Emails:", emails)

phone = "+91-9876543210"
if re.match(r'^\+91-\d{10}$', phone):
    print("Phone Number Validated ✓")`} lang="python" colorClass="yellow" filename="regex.py" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Validating email inputs and extracting IP addresses from server log files.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Provides incredibly versatile text validation and extraction capabilities.</li>
                            <li>Raw string syntax (<code className="text-yellow-400">r"..."</code>) prevents backslash escaping bugs.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Complex regex patterns are hard to read and maintain (Regex Denial of Service ReDoS risk).</li>
                            <li>Regex parsing is slower than native string methods like <code className="text-yellow-400">.startswith()</code> or <code className="text-yellow-400">.split()</code>.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'py-api-requests',
            title: '18. [Advanced] Working with APIs (requests Library)',
            definition: 'The `requests` library makes HTTP calls (GET, POST, PUT, DELETE) to REST APIs, handling URL parameters, headers, JSON payloads, and authentication.',
            syntax: `import requests
res = requests.get(url, timeout=5)
data = res.json()`,
            codeSnippet: `import requests

def fetch_user(username):
    url = f"https://api.github.com/users/{username}"
    try:
        res = requests.get(url, timeout=5)
        res.raise_for_status()
        data = res.json()
        print(f"Name: {data.get('name')} | Repos: {data.get('public_repos')}")
    except requests.exceptions.RequestException as err:
        print("API Error:", err)

fetch_user("octocat")`,
            realLifeScenario: 'Backend integration microservices communicate with third-party payment gateways (Stripe, Razorpay) using HTTP request payloads.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-yellow-50 dark:bg-yellow-950/20 border-l-4 border-yellow-500 rounded-r-xl">
                        <h4 className="text-md font-bold text-yellow-800 dark:text-yellow-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">The third-party <code className="font-mono text-yellow-600">requests</code> library executes HTTP verbs (GET, POST, PUT, DELETE), providing clean API methods for handling JSON payloads and status verification.</p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of the requests library like a waiter taking your order to the kitchen. You ask for specific menu items (URL), the waiter brings back your meal dish (JSON data) along with confirmation (HTTP 200 status code).</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-yellow-500" />3. HTTP Requests API Pipeline (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`flowchart TD
    A["requests.get(url, timeout=5)"] --> B[Execute Network HTTP Request]
    B --> C{res.raise_for_status() Check}
    C -- 200 OK --> D["Parse res.json() Data Payload"]
    C -- 4xx / 5xx --> E[Throw HTTPError Catch Block]`}
                            caption="Figure 18.1: HTTP Network Request and Status Code Verification Pipeline."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This flowchart demonstrates executing requests, verifying status codes, and parsing JSON.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-yellow-500" />4. Sample Code</h4>
                        <CodeBlock code={`import requests

def fetch_user(username):
    url = f"https://api.github.com/users/{username}"
    try:
        res = requests.get(url, timeout=5)
        res.raise_for_status()
        data = res.json()
        print(f"Name: {data.get('name')} | Repos: {data.get('public_repos')}")
    except requests.exceptions.RequestException as err:
        print("API Error:", err)

fetch_user("octocat")`} lang="python" colorClass="yellow" filename="requests_api.py" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Integrating payment gateway APIs (Stripe, Razorpay) and weather forecast web services.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Human-friendly API replacing Python's verbose built-in <code className="text-yellow-400">urllib</code> module.</li>
                            <li>Automatic JSON response decoding via <code className="text-yellow-400">res.json()</code>.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Synchronous blocking HTTP calls block event loops (use <code className="text-yellow-400">httpx</code> or <code className="text-yellow-400">aiohttp</code> for async).</li>
                            <li>Omitting explicit <code className="text-yellow-400">timeout</code> values causes hanging network requests to block indefinitely.</li>
                        </ul>
                    </div>
                </div>
            )
        },

        // ==================== PROFESSIONAL TIER ====================
        {
            id: 'py-design-patterns',
            title: '19. [Professional] Python Design Patterns (Singleton, Factory)',
            definition: 'Design Patterns provide scalable structural architectures (Singleton, Factory, Observer, Dependency Injection) for enterprise Python applications.',
            syntax: `class SingletonMeta(type):
    _instances = {}
    def __call__(cls, *args, **kwargs):
        if cls not in cls._instances:
            cls._instances[cls] = super().__call__(*args, **kwargs)
        return cls._instances[cls]`,
            codeSnippet: `class SingletonMeta(type):
    _instances = {}
    def __call__(cls, *args, **kwargs):
        if cls not in cls._instances:
            cls._instances[cls] = super().__call__(*args, **kwargs)
        return cls._instances[cls]

class DatabaseConfig(metaclass=SingletonMeta):
    def __init__(self):
        self.url = "postgresql://localhost:5432/app_db"

c1 = DatabaseConfig()
c2 = DatabaseConfig()
print("Same Singleton Instance?", c1 is c2) # True`,
            realLifeScenario: 'Application configuration settings and thread-pooled database connections enforce Singleton pattern patterns.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-yellow-50 dark:bg-yellow-950/20 border-l-4 border-yellow-500 rounded-r-xl">
                        <h4 className="text-md font-bold text-yellow-800 dark:text-yellow-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Design Patterns (Singleton, Factory, Observer) structure enterprise applications. Metaclass-based singletons ensure only one global instance of a configuration class exists.</p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of a Singleton like a country's President. No matter how many citizens request to speak to the President, there is only one official office and individual holding that presidential role.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-yellow-500" />3. Singleton Metaclass Architecture (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph TD
    A["Call DatabaseConfig()"] --> B{Instance in SingletonMeta._instances?}
    B -- Yes --> C[Return Existing Shared Instance]
    B -- No --> D[Instantiate New Object & Store in Dict]
    D --> C`}
                            caption="Figure 19.1: Python Metaclass Singleton Pattern Instance Resolution."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This diagram demonstrates metaclass instance checking to enforce single shared instances.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-yellow-500" />4. Sample Code</h4>
                        <CodeBlock code={`class SingletonMeta(type):
    _instances = {}
    def __call__(cls, *args, **kwargs):
        if cls not in cls._instances:
            cls._instances[cls] = super().__call__(*args, **kwargs)
        return cls._instances[cls]

class DatabaseConfig(metaclass=SingletonMeta):
    def __init__(self):
        self.url = "postgresql://localhost:5432/app_db"

c1 = DatabaseConfig()
c2 = DatabaseConfig()
print("Same Singleton Instance?", c1 is c2) # True`} lang="python" colorClass="yellow" filename="singleton.py" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Managing database connection pools and global application setting configurations.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Guarantees strict single-instance access across multithreaded application modules.</li>
                            <li>Metaclass implementation keeps class syntax clean and Pythonic.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Singletons introduce global state, making unit tests harder to isolate cleanly.</li>
                            <li>Overusing metaclasses adds conceptual complexity for junior developers.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'py-asyncio',
            title: '20. [Professional] Asynchronous Programming (asyncio & async/await)',
            definition: 'The `asyncio` module manages asynchronous single-threaded concurrent execution using event loops, coroutines (`async def`), and tasks (`await`).',
            syntax: `import asyncio
async def main():
    res = await asyncio.gather(task1(), task2())
asyncio.run(main())`,
            codeSnippet: `import asyncio
import time

async def fetch_server(server_id, delay):
    print(f"Fetching Server {server_id}...")
    await asyncio.sleep(delay)
    return f"Server {server_id} Data"

async def main():
    start = time.perf_counter()
    results = await asyncio.gather(
        fetch_server(1, 0.3),
        fetch_server(2, 0.2)
    )
    end = time.perf_counter()
    print(f"Results: {results} in {(end-start):.4f}s")

asyncio.run(main())`,
            realLifeScenario: 'High-performance microservice web frameworks like FastAPI and Sanic handle 10,000+ concurrent requests per second using `asyncio`.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-yellow-50 dark:bg-yellow-950/20 border-l-4 border-yellow-500 rounded-r-xl">
                        <h4 className="text-md font-bold text-yellow-800 dark:text-yellow-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed"><code className="font-mono text-yellow-600">asyncio</code> manages single-threaded cooperative concurrency using an event loop, running non-blocking coroutines (<code className="font-mono text-yellow-600">async def</code>) and yielding execution during I/O delays via <code className="font-mono text-yellow-600">await</code>.</p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of asyncio like a short-order cook. While toast is browning in the toaster (await delay), the cook immediately switches to frying eggs instead of standing still doing nothing.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-yellow-500" />3. AsyncIO Event Loop Execution Flow (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph TD
    A["asyncio.run(main()) Event Loop"] --> B["asyncio.gather(Task 1, Task 2)"]
    B --> C["Task 1 hits await asyncio.sleep() -> Yield Control"]
    C --> D[Event Loop switches to Task 2]
    D --> E[Both tasks finish concurrently]`}
                            caption="Figure 20.1: AsyncIO Non-blocking Event Loop Task Switching."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This diagram demonstrates non-blocking event loop task switching during async delays.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-yellow-500" />4. Sample Code</h4>
                        <CodeBlock code={`import asyncio
import time

async def fetch_server(server_id, delay):
    print(f"Fetching Server {server_id}...")
    await asyncio.sleep(delay)
    return f"Server {server_id} Data"

async def main():
    start = time.perf_counter()
    results = await asyncio.gather(
        fetch_server(1, 0.3),
        fetch_server(2, 0.2)
    )
    end = time.perf_counter()
    print(f"Results: {results} in {(end-start):.4f}s")

asyncio.run(main())`} lang="python" colorClass="yellow" filename="async_demo.py" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Handling 10,000+ concurrent network connections per second in FastAPI backend services.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Drastically lower RAM overhead compared to spawning OS threads or processes.</li>
                            <li><code className="text-yellow-400">asyncio.gather()</code> executes thousands of HTTP calls concurrently.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Calling synchronous blocking calls (like <code className="text-yellow-400">time.sleep()</code>) blocks the entire event loop.</li>
                            <li>Async code requires async-compatible libraries (e.g. <code className="text-yellow-400">httpx</code> instead of <code className="text-yellow-400">requests</code>).</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'py-packaging-distribution',
            title: '21. [Professional] Packaging & Distribution (pyproject.toml, Wheel)',
            definition: 'Package Python applications into redistributable Wheel binaries using modern PEP 517 build standards (`pyproject.toml`, setuptools, twine) for PyPI deployment.',
            syntax: `# pyproject.toml
[build-system]
requires = ["setuptools>=61.0"]
build-backend = "setuptools.build_meta"`,
            codeSnippet: `# Building Wheel distribution package
$ python -m build

# Uploading package to PyPI index
$ twine upload dist/*`,
            realLifeScenario: 'Open-source Python maintainers publish reusable libraries to PyPI, allowing developers worldwide to install them via `pip install package-name`.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-yellow-50 dark:bg-yellow-950/20 border-l-4 border-yellow-500 rounded-r-xl">
                        <h4 className="text-md font-bold text-yellow-800 dark:text-yellow-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Modern Python packaging compiles code modules into Wheel binary distributions (<code className="font-mono text-yellow-600">.whl</code>) declared via <code className="font-mono text-yellow-600">pyproject.toml</code> for PyPI publishing.</p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of packaging like putting furniture inside a sealed IKEA flat-pack box with assembly instructions included, so anyone anywhere can purchase and build it instantly.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-yellow-500" />3. Package Build &amp; PyPI Distribution Pipeline (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph LR
    A[Python Source Code + pyproject.toml] -->|python -m build| B[Wheel Binary .whl File]
    B -->|twine upload dist/*| C[PyPI Public Package Index]
    C -->|pip install| D[Developer Target Project]`}
                            caption="Figure 21.1: Python Package Build and PyPI Upload Pipeline."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This diagram outlines building wheel binaries and uploading them to PyPI.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-yellow-500" />4. Sample Code</h4>
                        <CodeBlock code={`# Building Wheel distribution package
$ python -m build

# Uploading package to PyPI index
$ twine upload dist/*`} lang="bash" colorClass="yellow" filename="build.sh" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Publishing open-source libraries to PyPI for global community installation.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Wheel binaries install faster than building source tarballs from scratch.</li>
                            <li><code className="text-yellow-400">pyproject.toml</code> standardizes modern build tool dependencies deterministically.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>PyPI package names are globally unique; duplicate name claims are rejected.</li>
                            <li>Compiled C extension wheels must be pre-built separately for Windows, macOS, and Linux targets.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'py-testing-pytest',
            title: '22. [Professional] Automated Testing & Mocking (pytest, fixtures)',
            definition: 'The `pytest` framework executes automated test suites, providing test discovery, dependency injection via fixtures, assertions, and mock objects (`unittest.mock`).',
            syntax: `import pytest
@pytest.fixture
def data(): return {"id": 1}
def test_case(data):
    assert data["id"] == 1`,
            codeSnippet: `import pytest

def discount(price, percent):
    if price < 0 or percent < 0:
        raise ValueError("Invalid Input")
    return price - (price * (percent / 100))

def test_discount_valid():
    assert discount(100, 20) == 80.0

def test_discount_negative():
    with pytest.raises(ValueError):
        discount(-50, 10)`,
            realLifeScenario: 'Continuous Integration pipelines run `pytest --cov` on pull requests to enforce minimum code coverage thresholds.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-yellow-50 dark:bg-yellow-950/20 border-l-4 border-yellow-500 rounded-r-xl">
                        <h4 className="text-md font-bold text-yellow-800 dark:text-yellow-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed"><code className="font-mono text-yellow-600">pytest</code> discovers and runs automated unit tests, using plain <code className="font-mono text-yellow-600">assert</code> statements, reusable test fixtures, and mock isolation objects.</p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of automated unit testing like an automated car crash test dummy system. Before placing a car model into production, automated systems collide test vehicles to measure airbag response instantly.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-yellow-500" />3. Pytest Execution &amp; Assertion Pipeline (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph LR
    A[Run pytest CLI] --> B[Discover test_*.py files]
    B --> C[Inject @pytest.fixture data]
    C --> D[Execute Target Function]
    D --> E{assert actual == expected}
    E -- Pass --> F[Green ✓ Test Passed]
    E -- Fail --> G[Red ❌ Test Failed]`}
                            caption="Figure 22.1: Automated Pytest Discovery and Assertion Flow."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This diagram demonstrates pytest test discovery, fixture injection, and assertion reporting.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-yellow-500" />4. Sample Code</h4>
                        <CodeBlock code={`import pytest

def discount(price, percent):
    if price < 0 or percent < 0:
        raise ValueError("Invalid Input")
    return price - (price * (percent / 100))

def test_discount_valid():
    assert discount(100, 20) == 80.0

def test_discount_negative():
    with pytest.raises(ValueError):
        discount(-50, 10)`} lang="python" colorClass="yellow" filename="test_math.py" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Running CI/CD automated test suites on GitHub Actions prior to production releases.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Uses standard Python <code className="text-yellow-400">assert</code> statements instead of verbose class assertion syntax.</li>
                            <li>Fixtures simplify reusable test database setup and teardown.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Writing comprehensive test suites requires ongoing maintenance effort.</li>
                            <li>Over-mocking external API calls can create false positive test results.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'py-performance-profiling',
            title: '23. [Professional] Performance Profiling (cProfile, timeit)',
            definition: 'Performance profiling analyzes application bottlenecks, memory consumption, and function execution frequencies using `cProfile`, `timeit`, and `memory_profiler`.',
            syntax: `import timeit
time_taken = timeit.timeit('[x**2 for x in range(1000)]', number=10000)`,
            codeSnippet: `import timeit

comp_time = timeit.timeit('[x**2 for x in range(1000)]', number=10000)
loop_time = timeit.timeit('''
res = []
for x in range(1000):
    res.append(x**2)
''', number=10000)

print(f"List Comprehension Time: {comp_time:.4f}s")
print(f"Standard Loop Time:       {loop_time:.4f}s")`,
            realLifeScenario: 'High-frequency trading scripts and AI model servers use `cProfile` to pinpoint and optimize CPU-bound bottleneck functions.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-yellow-50 dark:bg-yellow-950/20 border-l-4 border-yellow-500 rounded-r-xl">
                        <h4 className="text-md font-bold text-yellow-800 dark:text-yellow-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Performance profiling tools (<code className="font-mono text-yellow-600">cProfile</code>, <code className="font-mono text-yellow-600">timeit</code>) measure exact function execution times and call counts to guide targeted code optimization.</p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of profiling like putting a heart-rate monitor on a marathon runner. It shows exactly which hill climbs (bottleneck functions) caused the runner's speed to drop.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-yellow-500" />3. Profiling Execution Matrix (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph LR
    A[Target Function Execution] --> B[cProfile Hook]
    B --> C[Measure ncalls & cumulative time]
    C --> D[Identify Slow Bottleneck Function]
    D --> E[Refactor Code Strategy]`}
                            caption="Figure 23.1: Performance Profiling and Bottleneck Identification Flow."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This diagram demonstrates measuring execution times to pinpoint performance bottlenecks.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-yellow-500" />4. Sample Code</h4>
                        <CodeBlock code={`import timeit

comp_time = timeit.timeit('[x**2 for x in range(1000)]', number=10000)
loop_time = timeit.timeit('''
res = []
for x in range(1000):
    res.append(x**2)
''', number=10000)

print(f"List Comprehension Time: {comp_time:.4f}s")
print(f"Standard Loop Time:       {loop_time:.4f}s")`} lang="python" colorClass="yellow" filename="profile.py" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Optimizing slow database query loops and AI model inference pipelines.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Replaces guessing with empirical performance metrics.</li>
                            <li><code className="text-yellow-400">timeit</code> isolates micro-benchmarks accurately by turning off garbage collection.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li><code className="text-yellow-400">cProfile</code> adds slight measurement overhead during profiling runs.</li>
                            <li>Premature micro-optimization can complicate clean code readability.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'py-frameworks-overview',
            title: '24. [Professional] Frameworks Architecture (Flask, Django, FastAPI)',
            definition: 'Python backend engineering utilizes micro-frameworks (Flask), full-stack batteries-included frameworks (Django), or high-performance asynchronous API frameworks (FastAPI).',
            syntax: `from fastapi import FastAPI
app = FastAPI()

@app.get("/users/{user_id}")
async def get_user(user_id: int):
    return {"user_id": user_id}`,
            codeSnippet: `from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI(title="ADV Indian Coder API")

class UserRegister(BaseModel):
    email: str
    username: str

@app.post("/api/v1/users", status_code=201)
async def create_user(user: UserRegister):
    if "admin" in user.username.lower():
        raise HTTPException(status_code=400, detail="Restricted username")
    return {"status": "success", "user": user.model_dump()}`,
            realLifeScenario: 'FastAPI is chosen for modern microservices due to automatic OpenAPI documentation generation and native Pydantic data validation.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-yellow-50 dark:bg-yellow-950/20 border-l-4 border-yellow-500 rounded-r-xl">
                        <h4 className="text-md font-bold text-yellow-800 dark:text-yellow-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Python web frameworks span FastAPI (asynchronous microservices with Pydantic validation), Django (full-stack framework with built-in ORM &amp; Admin), and Flask (lightweight micro-framework).</p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of Flask like a bare motorhome shell where you install your own custom seats; Django is a fully furnished luxury RV with everything included; and FastAPI is a high-speed sports car built for raw speed.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-yellow-500" />3. Backend Framework Selection (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph TD
    A[Python Web Project] --> B{Project Type?}
    B -- Async Microservice REST API --> C[FastAPI: Pydantic & AsyncIO]
    B -- Full-Stack Portal with Admin/ORM --> D[Django: Batteries Included]
    B -- Small Utility / Lightweight Prototype --> E[Flask: Micro-framework]`}
                            caption="Figure 24.1: Python Backend Web Framework Architecture Selection Matrix."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This diagram compares selection choices between FastAPI, Django, and Flask.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-yellow-500" />4. Sample Code</h4>
                        <CodeBlock code={`from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI(title="ADV Indian Coder API")

class UserRegister(BaseModel):
    email: str
    username: str

@app.post("/api/v1/users", status_code=201)
async def create_user(user: UserRegister):
    if "admin" in user.username.lower():
        raise HTTPException(status_code=400, detail="Restricted username")
    return {"status": "success", "user": user.model_dump()}`} lang="python" colorClass="yellow" filename="fastapi_app.py" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Building asynchronous REST APIs with automatic OpenAPI Swagger UI documentation.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>FastAPI provides automatic interactive Swagger documentation at <code className="text-yellow-400">/docs</code>.</li>
                            <li>Django provides built-in user authentication and admin dashboard panels.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Django's rigid ORM architecture can feel opinionated for small microservices.</li>
                            <li>Flask requires adding third-party plugins for database ORM and authentication.</li>
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
            title="Python Masterclass Course"
            description="Master Python from Variables, OOP, and Comprehensions to Generators, Asyncio, Pytest, Performance Profiling, and FastAPI Microservices."
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
                            <pre>{`# Python Code Blueprint\ndef main():\n    pass`}</pre>
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
                        <CodeBlock code={activeTopic.codeSnippet} lang="python" colorClass="yellow" filename="main.py" />
                    </div>
                )}

                {/* Part 4: Real-Life Scenario Example */}
                <div className="bg-emerald-50 dark:bg-emerald-900/10 border-l-4 border-emerald-600 p-6 rounded-r-xl shadow-sm">
                    <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                        <Lightbulb className="w-5 h-5 mr-2" />
                        4. Real-Life Industry Scenario & Application
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                        {activeTopic.realLifeScenario || activeTopic.example || "Powers backend API services, artificial intelligence pipelines, data science automation scripts, and cloud infrastructure management."}
                    </p>
                </div>
            </div>
        </CoursePageLayout>
    );
};

export default PythonCoursePage;
