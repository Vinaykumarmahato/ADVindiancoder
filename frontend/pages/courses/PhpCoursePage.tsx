import React, { useState } from 'react';
import CoursePageLayout from '../../components/CoursePageLayout';
import { Database, Code, BookOpen, Lightbulb, Cpu, Layers, Check, AlertTriangle } from 'lucide-react';
import CodeBlock from '../../components/CodeBlock';
import MermaidDiagram from '../../components/MermaidDiagram';

interface PhpTopic {
    id: string;
    title: string;
    definition: string;
    example?: string;
    syntax?: string;
    realLifeScenario?: string;
    codeSnippet?: string | null;
    content: React.ReactNode;
}

const PhpCoursePage = () => {
    const [activeTopicIndex, setActiveTopicIndex] = useState(0);

    const courseData: PhpTopic[] = [
        // ==================== BEGINNER TIER ====================
        {
            id: 'php-syntax-variables',
            title: '1. [Beginner] Syntax & Variables (echo vs print, $vars)',
            definition: 'PHP (Hypertext Preprocessor) is a server-side scripting language embedded inside HTML tags (`<?php ... ?>`). Variables begin with a dollar sign `$`. Outputs are rendered via echo or print.',
            syntax: `<?php\n    $appName = "ADV Indian Coder"; // String variable\n    $version = 8.3;                // Float variable\n    echo "App: " . $appName;       // Concatenation using dot (.)\n?>`,
            codeSnippet: `<?php\n// PHP Variables & Data Types\n$siteName = "ADV Indian Coder Platform";\n$userCount = 50000;\n$rating = 4.9;\n$isLive = true;\n\n// Outputting formatted text\necho "<h1>Welcome to " . $siteName . "</h1>\\n";\necho "Active Users: " . number_format($userCount) . "\\n";\n\n// Type inspection\nvar_dump($rating);\n?>`,
            realLifeScenario: 'WordPress (powers 40%+ of global websites) and Wikipedia use PHP to generate dynamic server-rendered HTML pages.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            PHP is a server-side scripting language embedded inside HTML tags (<code className="text-cyan-600 font-mono">&lt;?php ... ?&gt;</code>). Variables begin with a dollar sign <code className="text-cyan-600 font-mono">$</code>. Outputs are rendered via echo or print.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Think of PHP as a restaurant&apos;s kitchen staff. HTML is the menu, but PHP is what happens in the back, fetching data from the database (pantry) and cooking up the page before delivering it to the user.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-600" />
                            Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`graph LR
    A[Client Browser] -->|HTTP Request| B(Web Server)
    B --> C{PHP Engine}
    C -->|Fetch| D[(Database)]
    C -->|Parse| E[HTML Output]
    E -->|HTTP Response| A`} />
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-indigo-600" />
                            Sample Code
                        </h3>
                        <CodeBlock code={`<?php\n// PHP Variables & Data Types\n$siteName = "ADV Indian Coder Platform";\n$userCount = 50000;\n$rating = 4.9;\n$isLive = true;\n\n// Outputting formatted text\necho "<h1>Welcome to " . $siteName . "</h1>\\n";\necho "Active Users: " . number_format($userCount) . "\\n";\n\n// Type inspection\nvar_dump($rating);\n?>`} lang="php" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            WordPress (powers 40%+ of global websites) and Wikipedia use PHP to generate dynamic server-rendered HTML pages. Variables store dynamic content fetched from the server.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-slate-900 text-slate-100 p-6 rounded-xl shadow-sm">
                            <h3 className="text-lg font-bold mb-4 flex items-center text-emerald-400">
                                <Check className="w-5 h-5 mr-2" />
                                Advantages
                            </h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-0.5 text-emerald-400 shrink-0" /> Easy to embed directly in HTML</li>
                                <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-0.5 text-emerald-400 shrink-0" /> Massive ecosystem and hosting availability</li>
                                <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-0.5 text-emerald-400 shrink-0" /> Fast development cycle</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-6 rounded-xl shadow-sm">
                            <h3 className="text-lg font-bold mb-4 flex items-center text-red-400">
                                <AlertTriangle className="w-5 h-5 mr-2" />
                                Disadvantages / Limitations
                            </h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-red-400 shrink-0" /> Global state can become difficult to manage</li>
                                <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-red-400 shrink-0" /> Mixing UI and business logic can be messy without MVC</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'php-control-flow-match',
            title: '2. [Beginner] Control Flow & PHP 8 match Expression',
            definition: 'PHP supports if/elseif/else conditions, traditional switch statements, loops (for, while, foreach), and the modern PHP 8 `match` expression.',
            syntax: `/* PHP 8 match Expression Blueprint: */\n$result = match ($status) {\n    200, 201 => 'Success',\n    404 => 'Not Found',\n    default => 'Unknown Error',\n};`,
            codeSnippet: `<?php\n$statusCode = 200;\n\n// Modern PHP 8 match expression\n$message = match ($statusCode) {\n    200 => "200 OK: Request Succeeded",\n    404 => "404 Not Found: Page Missing",\n    500 => "500 Server Error: Internal Crash",\n    default => "Unknown HTTP Code"\n};\n\necho "Status Message: " . $message . "\\n";\n\n// Foreach Loop over Associative Array\n$user = ["name" => "Vinay", "role" => "Architect"];\nforeach ($user as $key => $value) {\n    echo ucfirst($key) . ": " . $value . "\\n";\n}\n?>`,
            realLifeScenario: 'HTTP response status handler functions use PHP 8 `match` expressions for strict type-safe code evaluations.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            PHP control flow directs script execution. Modern PHP 8 introduces the <code className="text-cyan-600 font-mono">match</code> expression, a strict and concise alternative to the traditional <code className="text-cyan-600 font-mono">switch</code> statement.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Think of <code className="text-cyan-600 font-mono">match</code> like a strictly-typed vending machine: if you input exact item code `A1`, it strictly checks the identity and outputs the item, otherwise it immediately defaults. No falling through by mistake.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-600" />
                            Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`graph TD
    A[Start] --> B{Match Condition}
    B -->|Code 200| C[Return Success]
    B -->|Code 404| D[Return Not Found]
    B -->|Other| E[Return Default]`} />
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-indigo-600" />
                            Sample Code
                        </h3>
                        <CodeBlock code={`<?php\n$statusCode = 200;\n\n$message = match ($statusCode) {\n    200 => "200 OK: Request Succeeded",\n    404 => "404 Not Found: Page Missing",\n    500 => "500 Server Error: Internal Crash",\n    default => "Unknown HTTP Code"\n};\n\necho "Status Message: " . $message . "\\n";\n\n$user = ["name" => "Vinay", "role" => "Architect"];\nforeach ($user as $key => $value) {\n    echo ucfirst($key) . ": " . $value . "\\n";\n}\n?>`} lang="php" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            HTTP response status handler functions in frameworks like Laravel use PHP 8 <code className="text-cyan-600 font-mono">match</code> expressions for strict type-safe code evaluations without relying on loose <code className="text-cyan-600 font-mono">switch</code> statements.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-slate-900 text-slate-100 p-6 rounded-xl shadow-sm">
                            <h3 className="text-lg font-bold mb-4 flex items-center text-emerald-400">
                                <Check className="w-5 h-5 mr-2" />
                                Advantages
                            </h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-0.5 text-emerald-400 shrink-0" /> Strict type comparison (===)</li>
                                <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-0.5 text-emerald-400 shrink-0" /> No break statements needed</li>
                                <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-0.5 text-emerald-400 shrink-0" /> Returns a value directly</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-6 rounded-xl shadow-sm">
                            <h3 className="text-lg font-bold mb-4 flex items-center text-red-400">
                                <AlertTriangle className="w-5 h-5 mr-2" />
                                Disadvantages / Limitations
                            </h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-red-400 shrink-0" /> Only supported in PHP 8.0+</li>
                                <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-red-400 shrink-0" /> Cannot execute multi-line blocks per match arm easily</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'php-functions-scope',
            title: '3. [Beginner] Functions, Type Declarations & Scope',
            definition: 'Functions package modular PHP logic. PHP supports strict scalar type declarations (`declare(strict_types=1);`), default parameter values, and static variables.',
            syntax: `<?php\ndeclare(strict_types=1);\n\nfunction add(int $a, int $b): int {\n    return $a + $b;\n}\n?>`,
            codeSnippet: `<?php\ndeclare(strict_types=1);\n\nfunction calculateTax(float $amount, float $taxRate = 0.18): float {\n    return $amount * $taxRate;\n}\n\n// Static variable persistence across calls\nfunction getVisitorCount(): int {\n    static $count = 0;\n    $count++;\n    return $count;\n}\n\necho "Tax on ₹1000: ₹" . calculateTax(1000.0) . "\\n";\necho "Visit 1: " . getVisitorCount() . " | Visit 2: " . getVisitorCount();\n?>`,
            realLifeScenario: 'Enforcing `declare(strict_types=1);` prevents silent type coercion bugs in financial ecommerce calculation functions.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Functions package modular PHP logic. By adding <code className="text-cyan-600 font-mono">declare(strict_types=1);</code>, PHP enforces strict data types, avoiding bugs caused by implicit type conversion.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Functions are like a juicer. You put an apple in (argument), it processes it (logic), and gives you apple juice (return value). Strict typing means the juicer strictly rejects putting rocks in it.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-600" />
                            Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`graph LR
    A[Inputs/Arguments] --> B{Function Scope}
    B -->|Processing| C[Local Vars]
    C --> D[Return Output]
    E[Global Vars] -.->|global keyword| B`} />
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-indigo-600" />
                            Sample Code
                        </h3>
                        <CodeBlock code={`<?php\ndeclare(strict_types=1);\n\nfunction calculateTax(float $amount, float $taxRate = 0.18): float {\n    return $amount * $taxRate;\n}\n\nfunction getVisitorCount(): int {\n    static $count = 0;\n    $count++;\n    return $count;\n}\n\necho "Tax on ₹1000: ₹" . calculateTax(1000.0) . "\\n";\necho "Visit 1: " . getVisitorCount() . " | Visit 2: " . getVisitorCount();\n?>`} lang="php" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Enforcing <code className="text-cyan-600 font-mono">declare(strict_types=1);</code> prevents silent type coercion bugs in complex systems, such as financial and e-commerce platforms.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-slate-900 text-slate-100 p-6 rounded-xl shadow-sm">
                            <h3 className="text-lg font-bold mb-4 flex items-center text-emerald-400">
                                <Check className="w-5 h-5 mr-2" />
                                Advantages
                            </h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-0.5 text-emerald-400 shrink-0" /> Prevents runtime type coercion bugs</li>
                                <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-0.5 text-emerald-400 shrink-0" /> Improves code readability and self-documentation</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-6 rounded-xl shadow-sm">
                            <h3 className="text-lg font-bold mb-4 flex items-center text-red-400">
                                <AlertTriangle className="w-5 h-5 mr-2" />
                                Disadvantages / Limitations
                            </h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-red-400 shrink-0" /> Must be declared per-file</li>
                                <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-red-400 shrink-0" /> Might break legacy loosely typed code integrations</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'php-strings-arrays',
            title: '4. [Beginner] String & Array Handling (Heredoc, Associative Arrays)',
            definition: 'Strings are concatenated using dot (`.`). Arrays in PHP are ordered maps supporting Indexed, Associative (key-value), and Multidimensional data structures.',
            syntax: `$fruits = ["Apple", "Banana"];\n$person = ["name" => "Vinay", "age" => 25];\n$text = <<<EOD\nMulti-line Heredoc string\nEOD;`,
            codeSnippet: `<?php\n// Associative Array Operations\n$student = [\n    "id" => 101,\n    "name" => "Vinay Mahato",\n    "skills" => ["PHP", "Laravel", "MySQL"]\n];\n\narray_push($student["skills"], "React");\n\necho "Student Name: " . $student["name"] . "\\n";\necho "Total Skills: " . count($student["skills"]) . "\\n";\necho "Has PHP Skill? " . (in_array("PHP", $student["skills"]) ? "Yes" : "No");\n?>`,
            realLifeScenario: 'Associative arrays map raw MySQL database query result rows directly to key-value PHP objects.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Strings are concatenated using a dot (<code className="text-cyan-600 font-mono">.</code>). Arrays in PHP are ordered maps, functioning as lists, dictionaries, or multi-dimensional collections simultaneously.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            An associative array is like a physical address book. Instead of looking up entry #5 (index), you look up &quot;Vinay&quot; (key) to get the phone number (value).
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-600" />
                            Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`graph TD
    A[PHP Array] --> B[Indexed Array: 0,1,2]
    A --> C[Associative Array: key=>value]
    A --> D[Multi-Dimensional: Array of Arrays]`} />
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-indigo-600" />
                            Sample Code
                        </h3>
                        <CodeBlock code={`<?php\n// Associative Array Operations\n$student = [\n    "id" => 101,\n    "name" => "Vinay Mahato",\n    "skills" => ["PHP", "Laravel", "MySQL"]\n];\n\narray_push($student["skills"], "React");\n\necho "Student Name: " . $student["name"] . "\\n";\necho "Total Skills: " . count($student["skills"]) . "\\n";\necho "Has PHP Skill? " . (in_array("PHP", $student["skills"]) ? "Yes" : "No");\n?>`} lang="php" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            When fetching records from MySQL using PDO, each row is typically returned as an associative array where column names are the keys.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-slate-900 text-slate-100 p-6 rounded-xl shadow-sm">
                            <h3 className="text-lg font-bold mb-4 flex items-center text-emerald-400">
                                <Check className="w-5 h-5 mr-2" />
                                Advantages
                            </h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-0.5 text-emerald-400 shrink-0" /> Flexible and dynamic data structure</li>
                                <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-0.5 text-emerald-400 shrink-0" /> Native JSON conversion (<code className="text-emerald-400">json_encode</code>)</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-6 rounded-xl shadow-sm">
                            <h3 className="text-lg font-bold mb-4 flex items-center text-red-400">
                                <AlertTriangle className="w-5 h-5 mr-2" />
                                Disadvantages / Limitations
                            </h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-red-400 shrink-0" /> Memory heavy compared to typed structs in C/Go</li>
                                <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-red-400 shrink-0" /> No strict typing for array contents in plain PHP</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        // ==================== INTERMEDIATE TIER ====================
        {
            id: 'php-forms-superglobals',
            title: '5. [Intermediate] Form Processing & Superglobals ($_POST, $_GET)',
            definition: 'Superglobals ($_GET, $_POST, $_REQUEST, $_SERVER, $_FILES) process incoming HTTP request parameters. Sanitize inputs using filter_var() and htmlspecialchars().',
            syntax: `if ($_SERVER["REQUEST_METHOD"] === "POST") {\n    $username = htmlspecialchars($_POST["username"]);\n    $email = filter_var($_POST["email"], FILTER_VALIDATE_EMAIL);\n}`,
            codeSnippet: `<?php\n// Secure Form Processing Handler\nif ($_SERVER["REQUEST_METHOD"] === "POST") {\n    // Sanitize String to prevent XSS\n    $user = htmlspecialchars($_POST["username"] ?? "");\n    \n    // Validate Email format\n    $rawEmail = $_POST["email"] ?? "";\n    $email = filter_var($rawEmail, FILTER_VALIDATE_EMAIL);\n\n    if ($email === false) {\n        echo "Invalid Email Provided!";\n    } else {\n        echo "Processing Login for: " . $user . " (" . $email . ")";\n    }\n}\n?>`,
            realLifeScenario: 'Wrapping user inputs inside `htmlspecialchars()` converts special characters (`<`, `>`) into HTML entities, neutralizing Cross-Site Scripting (XSS) attacks.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Superglobals like <code className="text-cyan-600 font-mono">$_GET</code> and <code className="text-cyan-600 font-mono">$_POST</code> hold form data sent from the client. Sanitization prevents malicious inputs from compromising the server or users.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Think of <code className="text-cyan-600 font-mono">htmlspecialchars()</code> like an airport security scanner. It neutralizes weapons (malicious scripts) into harmless plastic toys before letting them into the application.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-600" />
                            Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`graph LR
    A[Client Form Submit] --> B[Server $_POST array]
    B --> C{filter_var / htmlspecialchars}
    C -->|Invalid| D[Reject / Error]
    C -->|Valid| E[Process Data]`} />
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-indigo-600" />
                            Sample Code
                        </h3>
                        <CodeBlock code={`<?php\nif ($_SERVER["REQUEST_METHOD"] === "POST") {\n    $user = htmlspecialchars($_POST["username"] ?? "");\n    $email = filter_var($_POST["email"] ?? "", FILTER_VALIDATE_EMAIL);\n\n    if ($email === false) {\n        echo "Invalid Email!";\n    } else {\n        echo "Welcome " . $user;\n    }\n}\n?>`} lang="php" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Every contact form, user registration, and login portal on the internet uses server-side validation to block Cross-Site Scripting (XSS) and invalid payloads.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-slate-900 text-slate-100 p-6 rounded-xl shadow-sm">
                            <h3 className="text-lg font-bold mb-4 flex items-center text-emerald-400">
                                <Check className="w-5 h-5 mr-2" />
                                Advantages
                            </h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-0.5 text-emerald-400 shrink-0" /> Native global access anywhere</li>
                                <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-0.5 text-emerald-400 shrink-0" /> Built-in filtering functions</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-6 rounded-xl shadow-sm">
                            <h3 className="text-lg font-bold mb-4 flex items-center text-red-400">
                                <AlertTriangle className="w-5 h-5 mr-2" />
                                Disadvantages / Limitations
                            </h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-red-400 shrink-0" /> Forgetting to sanitize leads to severe security flaws</li>
                                <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-red-400 shrink-0" /> Direct access couples logic to HTTP layer</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'php-sessions-cookies',
            title: '6. [Intermediate] Sessions & Cookies (session_start)',
            definition: 'Sessions store server-side state (`$_SESSION`), tracked by a session ID cookie. Cookies (`setcookie()`) store small client-side data.',
            syntax: `session_start();\n$_SESSION["user_id"] = 101;\nsession_regenerate_id(true); // Prevent Session Fixation`,
            codeSnippet: `<?php\n// Initialize Session\nsession_start();\n\n// Regenerate ID on login for security\nsession_regenerate_id(true);\n\n$_SESSION["auth_user"] = [\n    "id" => 10092,\n    "name" => "Vinay Mahato",\n    "role" => "Admin"\n];\n\n// Set Secure HTTP-Only Cookie (Expires in 7 Days)\nsetcookie("user_locale", "en_IN", [\n    "expires" => time() + (7 * 24 * 60 * 60),\n    "path" => "/",\n    "httponly" => true,\n    "samesite" => "Lax"\n]);\n\necho "Session authenticated for: " . $_SESSION["auth_user"]["name"];\n?>`,
            realLifeScenario: 'E-commerce websites store user login state and shopping cart IDs inside encrypted PHP session stores.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            HTTP is stateless. Sessions allow servers to remember clients across multiple requests by storing data server-side, linked via a unique Session ID cookie sent back to the browser.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            A session is like a coat check ticket at a club. The club (server) holds your jacket (data), and gives you a tiny ticket with a number (cookie). When you return, you show the ticket to get your specific jacket.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-600" />
                            Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`sequenceDiagram
    participant Browser
    participant Server
    Browser->>Server: HTTP Request
    Server->>Server: session_start() creates Session file
    Server-->>Browser: Response with Set-Cookie: PHPSESSID=123
    Browser->>Server: Next Request (Cookie: PHPSESSID=123)
    Server->>Server: Loads data for session 123`} />
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-indigo-600" />
                            Sample Code
                        </h3>
                        <CodeBlock code={`<?php\nsession_start();\nsession_regenerate_id(true);\n\n$_SESSION["auth_user"] = ["id" => 101, "role" => "Admin"];\n\nsetcookie("user_locale", "en_IN", [\n    "expires" => time() + (7 * 24 * 60 * 60),\n    "path" => "/",\n    "httponly" => true,\n    "samesite" => "Lax"\n]);\n\necho "Authenticated as: " . $_SESSION["auth_user"]["role"];\n?>`} lang="php" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            E-commerce websites use sessions to preserve user login states and maintain persistent shopping carts between page reloads securely on the server.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-slate-900 text-slate-100 p-6 rounded-xl shadow-sm">
                            <h3 className="text-lg font-bold mb-4 flex items-center text-emerald-400">
                                <Check className="w-5 h-5 mr-2" />
                                Advantages
                            </h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-0.5 text-emerald-400 shrink-0" /> Data is hidden from client-side tampering</li>
                                <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-0.5 text-emerald-400 shrink-0" /> Large storage capacity (server disk/memory)</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-6 rounded-xl shadow-sm">
                            <h3 className="text-lg font-bold mb-4 flex items-center text-red-400">
                                <AlertTriangle className="w-5 h-5 mr-2" />
                                Disadvantages / Limitations
                            </h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-red-400 shrink-0" /> File-based sessions struggle in distributed multi-server clusters</li>
                                <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-red-400 shrink-0" /> <code className="text-red-400">session_start()</code> blocks requests (session locking)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'php-oop-basics',
            title: '7. [Intermediate] Object-Oriented PHP (__construct, $this)',
            definition: 'Object-Oriented PHP organizes code into classes, objects, properties, access modifiers (public, private, protected), `$this` references, and `__construct()` / `__destruct()` magic methods.',
            syntax: `class User {\n    private string $name;\n    public function __construct(string $name) {\n        $this->name = $name;\n    }\n}`,
            codeSnippet: `<?php\nclass BankAccount {\n    private string $accountHolder;\n    private float $balance;\n\n    public function __construct(string $holder, float $initialBalance = 0.0) {\n        $this->accountHolder = $holder;\n        $this->balance = $initialBalance;\n    }\n\n    public function deposit(float $amount): void {\n        if ($amount > 0) {\n            $this->balance += $amount;\n            echo "Deposited ₹{$amount}. New Balance: ₹{$this->balance}\\n";\n        }\n    }\n\n    public function getBalance(): float {\n        return $this->balance;\n    }\n}\n\n$acc = new BankAccount("Vinay Mahato", 50000);\n$acc->deposit(5000);\n?>`,
            realLifeScenario: 'Domain entities in web applications encapsulate private properties, exposing public getter/setter methods for data access.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            OOP bundles data (properties) and behavior (methods) into reusable blueprints called Classes. Access modifiers control what is exposed publicly.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            A Class is like a blueprint for a car. It dictates that all cars have a private engine and a public steering wheel. An Object is the actual physical car built from that blueprint.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-600" />
                            Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`classDiagram
    class BankAccount {
        -string accountHolder
        -float balance
        +__construct(holder, balance)
        +deposit(amount)
        +getBalance()
    }`} />
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-indigo-600" />
                            Sample Code
                        </h3>
                        <CodeBlock code={`<?php\nclass BankAccount {\n    private float $balance;\n\n    public function __construct(float $initialBalance) {\n        $this->balance = $initialBalance;\n    }\n\n    public function deposit(float $amount): void {\n        if ($amount > 0) $this->balance += $amount;\n    }\n}\n\n$acc = new BankAccount(50000);\n$acc->deposit(5000);\n?>`} lang="php" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Business logic layers (like Models in MVC) use classes to represent data (Users, Invoices) while hiding the internal state to prevent unauthorized modifications.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-slate-900 text-slate-100 p-6 rounded-xl shadow-sm">
                            <h3 className="text-lg font-bold mb-4 flex items-center text-emerald-400">
                                <Check className="w-5 h-5 mr-2" />
                                Advantages
                            </h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-0.5 text-emerald-400 shrink-0" /> Code reusability and scalability</li>
                                <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-0.5 text-emerald-400 shrink-0" /> Encapsulation hides complexity</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-6 rounded-xl shadow-sm">
                            <h3 className="text-lg font-bold mb-4 flex items-center text-red-400">
                                <AlertTriangle className="w-5 h-5 mr-2" />
                                Disadvantages / Limitations
                            </h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-red-400 shrink-0" /> Steeper learning curve compared to procedural</li>
                                <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-red-400 shrink-0" /> Slightly more memory overhead</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'php-pdo-database-access',
            title: '8. [Intermediate] Working with Databases: PDO (PHP Data Objects)',
            definition: 'PDO (PHP Data Objects) provides a secure, vendor-neutral database access layer supporting prepared statements (`prepare()`, `execute()`) to eliminate SQL Injection attacks.',
            syntax: `$pdo = new PDO("mysql:host=localhost;dbname=app_db", "user", "pass", [\n    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,\n    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC\n]);`,
            codeSnippet: `<?php\ntry {\n    $dsn = "mysql:host=localhost;dbname=ecom_db;charset=utf8mb4";\n    $pdo = new PDO($dsn, "db_user", "SecretPass123", [\n        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,\n        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC\n    ]);\n\n    // Secure Prepared Statement (Prevents SQL Injection)\n    $stmt = $pdo->prepare("SELECT id, name, email FROM users WHERE role = :role");\n    $stmt->execute(['role' => 'Admin']);\n    \n    $admins = $stmt->fetchAll();\n    foreach ($admins as $admin) {\n        echo "Admin: " . $admin['name'] . " (" . $admin['email'] . ")\\n";\n    }\n} catch (PDOException $e) {\n    echo "Database Error: " . $e->getMessage();\n}\n?>`,
            realLifeScenario: 'Enterprise applications use PDO prepared statements to bind parameters securely before executing SQL queries.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            PDO abstracts database access. Using prepared statements (<code className="text-cyan-600 font-mono">prepare()</code> and <code className="text-cyan-600 font-mono">execute()</code>), it prevents SQL injection by sending query structures separately from parameter data.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Prepared statements are like filling out a highly restrictive form template. If a malicious user tries to write a SQL command in the &quot;Name&quot; box, the system strictly treats it as a weirdly-named string, not an executable instruction.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-600" />
                            Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`graph LR
    A[PHP PDO] --> B(Prepare Query Skeleton)
    B --> C[(Database Server)]
    A --> D(Send Data Parameters)
    D --> C
    C --> E[Safe Execution]`} />
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-indigo-600" />
                            Sample Code
                        </h3>
                        <CodeBlock code={`<?php\ntry {\n    $pdo = new PDO("mysql:host=localhost;dbname=db", "user", "pass", [\n        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION\n    ]);\n\n    $stmt = $pdo->prepare("SELECT name FROM users WHERE role = :role");\n    $stmt->execute(['role' => 'Admin']);\n    \n    print_r($stmt->fetchAll(PDO::FETCH_ASSOC));\n} catch (PDOException $e) {\n    echo "DB Error: " . $e->getMessage();\n}\n?>`} lang="php" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            All modern PHP frameworks (like Laravel&apos;s Eloquent ORM) use PDO securely under the hood to ensure compatibility across MySQL, PostgreSQL, and SQLite.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-slate-900 text-slate-100 p-6 rounded-xl shadow-sm">
                            <h3 className="text-lg font-bold mb-4 flex items-center text-emerald-400">
                                <Check className="w-5 h-5 mr-2" />
                                Advantages
                            </h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-0.5 text-emerald-400 shrink-0" /> 100% immune to SQL Injection (when used correctly)</li>
                                <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-0.5 text-emerald-400 shrink-0" /> Vendor agnostic (switch DBs easily)</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-6 rounded-xl shadow-sm">
                            <h3 className="text-lg font-bold mb-4 flex items-center text-red-400">
                                <AlertTriangle className="w-5 h-5 mr-2" />
                                Disadvantages / Limitations
                            </h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-red-400 shrink-0" /> More verbose syntax compared to older mysql_ functions</li>
                                <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-red-400 shrink-0" /> Cannot bind column names or table names dynamically</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        // ==================== ADVANCED TIER ====================
        {
            id: 'php-advanced-oop-interfaces',
            title: '9. [Advanced] Advanced OOP, Interfaces & Traits',
            definition: 'Advanced OOP enforces architecture using abstract classes, interfaces (`interface`, `implements`), traits (`trait`, `use` for code reuse), and parent class inheritance (`parent::`).',
            syntax: `interface Loggable {\n    public function log(string $msg): void;\n}\n\ntrait Timestampable {\n    public function getTimestamp(): string { return date("Y-m-d H:i:s"); }\n}`,
            codeSnippet: `<?php\ninterface PaymentProcessor {\n    public function pay(float $amount): bool;\n}\n\ntrait LoggerTrait {\n    public function log(string $message): void {\n        echo "[LOG " . date('Y-m-d H:i:s') . "]: " . $message . "\\n";\n    }\n}\n\nclass StripeGateway implements PaymentProcessor {\n    use LoggerTrait;\n\n    public function pay(float $amount): bool {\n        $this->log("Processing Stripe payment of ₹" . $amount);\n        return true;\n    }\n}\n\n$gateway = new StripeGateway();\n$gateway->pay(2500.0);\n?>`,
            realLifeScenario: 'Traits allow sharing reusable utility methods (like logging or timestamping) across unrelated class hierarchies.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Interfaces define a strict contract that classes must fulfill. Traits provide horizontal code reuse, allowing multiple unrelated classes to inherit the same methods without extending a common parent.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            An Interface is like a job description—you must have specific skills to apply. A Trait is like a toolbox you can just hand to any worker to instantly give them new abilities.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-600" />
                            Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`classDiagram
    class PaymentInterface {
        <<interface>>
        +pay(amount)
    }
    class LoggerTrait {
        <<trait>>
        +log(msg)
    }
    class StripeGateway {
        +pay(amount)
    }
    PaymentInterface <|.. StripeGateway
    LoggerTrait <-- StripeGateway`} />
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-indigo-600" />
                            Sample Code
                        </h3>
                        <CodeBlock code={`<?php\ninterface PaymentProcessor {\n    public function pay(float $amount): bool;\n}\n\ntrait LoggerTrait {\n    public function log(string $msg): void { echo "[LOG]: $msg"; }\n}\n\nclass StripeGateway implements PaymentProcessor {\n    use LoggerTrait;\n\n    public function pay(float $amount): bool {\n        $this->log("Paid ₹" . $amount);\n        return true;\n    }\n}\n?>`} lang="php" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Payment gateway integrations (Stripe, PayPal) use interfaces so the main application code can swap providers instantly without breaking existing functionality.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-slate-900 text-slate-100 p-6 rounded-xl shadow-sm">
                            <h3 className="text-lg font-bold mb-4 flex items-center text-emerald-400">
                                <Check className="w-5 h-5 mr-2" />
                                Advantages
                            </h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-0.5 text-emerald-400 shrink-0" /> Decouples code via Dependency Injection</li>
                                <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-0.5 text-emerald-400 shrink-0" /> Bypasses single-inheritance limit using Traits</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-6 rounded-xl shadow-sm">
                            <h3 className="text-lg font-bold mb-4 flex items-center text-red-400">
                                <AlertTriangle className="w-5 h-5 mr-2" />
                                Disadvantages / Limitations
                            </h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-red-400 shrink-0" /> Traits can cause method naming collisions</li>
                                <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-red-400 shrink-0" /> Over-engineering can make debugging difficult</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'php-exception-handling',
            title: '10. [Advanced] Exception Handling & Error Management',
            definition: 'Catch runtime exceptions using try, catch, and finally. Define custom Exception classes and register global error handlers (`set_exception_handler()`).',
            syntax: `class PaymentException extends Exception {}\n\ntry {\n    throw new PaymentException("Insufficient balance");\n} catch (PaymentException $e) {\n    // Handle specific error\n}`,
            codeSnippet: `<?php\nclass InvalidOrderException extends Exception {}\n\nfunction processOrder(int $quantity) {\n    if ($quantity <= 0) {\n        throw new InvalidOrderException("Order quantity must be positive.");\n    }\n    return true;\n}\n\ntry {\n    processOrder(0);\n} catch (InvalidOrderException $e) {\n    echo "[Caught Exception]: " . $e->getMessage() . "\\n";\n} finally {\n    echo "Order processing session closed.\\n";\n}\n?>`,
            realLifeScenario: 'Global exception handlers log unhandled application errors to disk log files without displaying sensitive stack traces to users.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Exceptions provide a structured way to handle errors. When something goes wrong, you <code className="text-cyan-600 font-mono">throw</code> an exception, and intercept it gracefully using a <code className="text-cyan-600 font-mono">try-catch</code> block.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Think of an exception like a fire alarm in a building. When a fire (error) is detected, the alarm is triggered (<code className="text-cyan-600 font-mono">throw</code>), the evacuation protocol starts (<code className="text-cyan-600 font-mono">catch</code>), and finally, the fire department resets the system (<code className="text-cyan-600 font-mono">finally</code>).
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-600" />
                            Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`graph TD
    A[try Block Executing] --> B{Error Occurs?}
    B -->|Yes| C[throw Exception]
    B -->|No| E[finally Block]
    C --> D[catch Block Logs Error]
    D --> E`} />
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-indigo-600" />
                            Sample Code
                        </h3>
                        <CodeBlock code={`<?php\nclass InvalidOrderException extends Exception {}\n\ntry {\n    throw new InvalidOrderException("Invalid Quantity.");\n} catch (InvalidOrderException $e) {\n    echo "Caught: " . $e->getMessage();\n} finally {\n    echo " Cleanup complete.";\n}\n?>`} lang="php" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Production APIs use global exception handlers to return clean HTTP 500 JSON responses to the client while logging detailed stack traces secretly on the server.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-slate-900 text-slate-100 p-6 rounded-xl shadow-sm">
                            <h3 className="text-lg font-bold mb-4 flex items-center text-emerald-400">
                                <Check className="w-5 h-5 mr-2" />
                                Advantages
                            </h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-0.5 text-emerald-400 shrink-0" /> Separates error handling from business logic</li>
                                <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-0.5 text-emerald-400 shrink-0" /> <code className="text-emerald-400">finally</code> ensures cleanup executes no matter what</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-6 rounded-xl shadow-sm">
                            <h3 className="text-lg font-bold mb-4 flex items-center text-red-400">
                                <AlertTriangle className="w-5 h-5 mr-2" />
                                Disadvantages / Limitations
                            </h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-red-400 shrink-0" /> Catching too broadly (<code className="text-red-400">catch(Exception)</code>) masks bugs</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'php-namespaces-composer-psr4',
            title: '11. [Advanced] Namespaces & PSR-4 Autoloading (Composer)',
            definition: 'Namespaces (`namespace App\\Services;`) prevent class name collisions. PSR-4 autoloading via Composer (`composer.json`) loads classes automatically.',
            syntax: `// composer.json PSR-4 Blueprint:\n{\n    "autoload": {\n        "psr-4": {\n            "App\\\\": "src/"\n        }\n    }\n}\n\n// In PHP script:\nrequire 'vendor/autoload.php';`,
            codeSnippet: `<?php\nnamespace App\\Services;\n\nclass NotificationService {\n    public function sendEmail(string $recipient): void {\n        echo "Sent notification email to: " . $recipient . "\\n";\n    }\n}\n\n// Usage in index.php\n// use App\\Services\\NotificationService;\n// $notifier = new NotificationService();\n?>`,
            realLifeScenario: 'Composer is the standard PHP package manager, managing third-party libraries (Guzzle, Carbon, PHPUnit) via PSR-4 autoloading.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Namespaces group related classes and prevent naming conflicts. Composer with PSR-4 autoloads these classes automatically, eliminating the need for manual <code className="text-cyan-600 font-mono">require</code> statements.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Namespaces are like folders on your computer. You can have a file named <code className="text-cyan-600 font-mono">Invoice.php</code> in the Accounting folder and another <code className="text-cyan-600 font-mono">Invoice.php</code> in the Shipping folder without conflict.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-600" />
                            Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`graph TD
    A[composer.json] --> B(composer dump-autoload)
    B --> C[vendor/autoload.php]
    D[index.php calls new App\\User()] --> C
    C -->|Dynamically requires| E[src/User.php]`} />
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-indigo-600" />
                            Sample Code
                        </h3>
                        <CodeBlock code={`<?php\nnamespace App\\Services;\n\nclass NotificationService {\n    public function sendEmail(string $recipient): void {\n        echo "Sent notification email to: " . $recipient . "\\n";\n    }\n}\n\n// In another file:\n// require 'vendor/autoload.php';\n// use App\\Services\\NotificationService;\n?>`} lang="php" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Composer is used to pull down enterprise packages like Guzzle (HTTP requests) or Carbon (Dates) safely into massive PHP projects without name collisions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-slate-900 text-slate-100 p-6 rounded-xl shadow-sm">
                            <h3 className="text-lg font-bold mb-4 flex items-center text-emerald-400">
                                <Check className="w-5 h-5 mr-2" />
                                Advantages
                            </h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-0.5 text-emerald-400 shrink-0" /> Never write a <code className="text-emerald-400">require</code> statement manually again</li>
                                <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-0.5 text-emerald-400 shrink-0" /> Seamless 3rd-party library integration</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-6 rounded-xl shadow-sm">
                            <h3 className="text-lg font-bold mb-4 flex items-center text-red-400">
                                <AlertTriangle className="w-5 h-5 mr-2" />
                                Disadvantages / Limitations
                            </h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-red-400 shrink-0" /> Requires command-line knowledge</li>
                                <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-red-400 shrink-0" /> Complex directory mappings can be tricky</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'php8-modern-features',
            title: '12. [Advanced] Modern PHP 8+ Features (Constructor Promotion, Nullsafe)',
            definition: 'Modern PHP 8+ introduces Constructor Property Promotion, Match expressions, the Nullsafe operator (`?->`), Union types (`int|float`), Named Arguments, and Attributes.',
            syntax: `// Constructor Property Promotion + Nullsafe Blueprint:\nclass User {\n    public function __construct(public string $name, public ?Address $address = null) {}\n}\n\n$city = $user?->address?->city; // Nullsafe operator`,
            codeSnippet: `<?php\nclass Product {\n    // PHP 8 Constructor Property Promotion\n    public function __construct(\n        public int $id,\n        public string $title,\n        public float $price\n    ) {}\n}\n\n$product = new Product(id: 101, title: "PHP 8 Masterclass", price: 1499.0);\n\n// Nullsafe operator ?->\n$user = null;\n$city = $user?->profile?->city ?? "Default City";\n\necho "Product: " . $product->title . " | City: " . $city;\n?>`,
            realLifeScenario: 'Constructor property promotion cuts class boilerplate by 60%, combining property declarations and constructor assignments.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            PHP 8 brought massive syntactical upgrades. Constructor property promotion collapses declaration and assignment into one line. The Nullsafe operator safely chains method/property calls on potentially null objects.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            The Nullsafe operator <code className="text-cyan-600 font-mono">?-&gt;</code> is like a fuse in a circuit. If at any point an object is missing (null), it safely breaks the chain and returns null instead of blowing up the entire program with a Fatal Error.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-600" />
                            Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`graph LR
    A[$user] -->|?->| B{Profile Exists?}
    B -->|Yes| C[$user->profile]
    C -->|?->| D{City Exists?}
    D -->|Yes| E[Return City Name]
    B -->|No| F[Return null]
    D -->|No| F`} />
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-indigo-600" />
                            Sample Code
                        </h3>
                        <CodeBlock code={`<?php\nclass Product {\n    public function __construct(\n        public int $id,\n        public string $title,\n        public float $price\n    ) {}\n}\n\n$product = new Product(id: 101, title: "PHP", price: 1499.0);\n$user = null;\n$city = $user?->profile?->city ?? "Unknown";\n?>`} lang="php" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Modern API responses parsing deeply nested JSON objects use the Nullsafe operator heavily to prevent &quot;Trying to get property of non-object&quot; crashes.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-slate-900 text-slate-100 p-6 rounded-xl shadow-sm">
                            <h3 className="text-lg font-bold mb-4 flex items-center text-emerald-400">
                                <Check className="w-5 h-5 mr-2" />
                                Advantages
                            </h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-0.5 text-emerald-400 shrink-0" /> Vastly reduces boilerplate code</li>
                                <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-0.5 text-emerald-400 shrink-0" /> Prevents Fatal Type Errors gracefully</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-6 rounded-xl shadow-sm">
                            <h3 className="text-lg font-bold mb-4 flex items-center text-red-400">
                                <AlertTriangle className="w-5 h-5 mr-2" />
                                Disadvantages / Limitations
                            </h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-red-400 shrink-0" /> Code is incompatible with older PHP 7.x servers</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        // ==================== PROFESSIONAL TIER ====================
        {
            id: 'php-security-best-practices',
            title: '13. [Professional] Security Best Practices (password_hash, CSRF)',
            definition: 'Secure PHP applications using password_hash() / password_verify(), CSRF token validation, XSS escaping, and secure HTTP response headers.',
            syntax: `$hash = password_hash($password, PASSWORD_ARGON2ID);\nif (password_verify($inputPassword, $hash)) {\n    // Authenticated successfully\n}`,
            codeSnippet: `<?php\n// Secure Password Hashing & Verification\n$userPassword = "SuperSecretPassword2026!";\n\n// Generate Secure Hash using bcrypt/Argon2\n$passwordHash = password_hash($userPassword, PASSWORD_DEFAULT);\necho "Secure Hash: " . $passwordHash . "\\n";\n\n// Verify Password on Login\n$loginAttempt = "SuperSecretPassword2026!";\nif (password_verify($loginAttempt, $passwordHash)) {\n    echo "Password Verified Successfully ✓\\n";\n} else {\n    echo "Invalid Password ❌\\n";\n}\n?>`,
            realLifeScenario: 'Authentication systems store password hashes generated via `password_hash()` to protect credentials against database leaks.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            PHP provides native, secure hashing algorithms via <code className="text-cyan-600 font-mono">password_hash()</code>. It automatically salts the password, protecting user credentials in the database.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Hashing is like shredding a document into a million pieces and burning it. You can&apos;t easily put it back together to read the original text, but when a user logs in, you shred their input and compare the ashes.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-600" />
                            Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`graph LR
    A[Raw Password] --> B{password_hash}
    B --> C[(Save Hash to DB)]
    D[Login Input] --> E{password_verify}
    C --> E
    E -->|Match| F[Grant Access]
    E -->|Fail| G[Deny Access]`} />
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-indigo-600" />
                            Sample Code
                        </h3>
                        <CodeBlock code={`<?php\n$userPassword = "SecretPass!";\n$passwordHash = password_hash($userPassword, PASSWORD_DEFAULT);\n\nif (password_verify("SecretPass!", $passwordHash)) {\n    echo "Password Verified Successfully ✓\\n";\n}\n?>`} lang="php" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Every major secure web application stores user passwords strictly as hashes (e.g. bcrypt/Argon2). If the database is compromised, the hackers only get unbreakable ciphertext.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-slate-900 text-slate-100 p-6 rounded-xl shadow-sm">
                            <h3 className="text-lg font-bold mb-4 flex items-center text-emerald-400">
                                <Check className="w-5 h-5 mr-2" />
                                Advantages
                            </h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-0.5 text-emerald-400 shrink-0" /> Built-in automatic salting</li>
                                <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-0.5 text-emerald-400 shrink-0" /> Easy upgrades to newer algorithms (<code className="text-emerald-400">password_needs_rehash</code>)</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-6 rounded-xl shadow-sm">
                            <h3 className="text-lg font-bold mb-4 flex items-center text-red-400">
                                <AlertTriangle className="w-5 h-5 mr-2" />
                                Disadvantages / Limitations
                            </h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-red-400 shrink-0" /> High CPU usage (by design, to deter brute force)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'php-rest-api-development',
            title: '14. [Professional] REST API Development (json_encode, http_response_code)',
            definition: 'Build REST APIs in PHP by configuring JSON response headers (`Content-Type: application/json`), setting HTTP status codes (`http_response_code()`), and encoding JSON.',
            syntax: `header('Content-Type: application/json');\nhttp_response_code(200);\necho json_encode(["status" => "success", "data" => $payload]);`,
            codeSnippet: `<?php\n// REST API Endpoint Handler\nheader("Content-Type: application/json; charset=UTF-8");\nheader("Access-Control-Allow-Origin: *");\n\n$requestMethod = $_SERVER["REQUEST_METHOD"];\n\nif ($requestMethod === "GET") {\n    http_response_code(200);\n    echo json_encode([\n        "status" => "success",\n        "timestamp" => date("c"),\n        "data" => [\n            ["id" => 1, "title" => "PHP REST API"],\n            ["id" => 2, "title" => "Laravel Framework"]\n        ]\n    ]);\n} else {\n    http_response_code(405); // Method Not Allowed\n    echo json_encode(["error" => "Method Not Allowed"]);\n}\n?>`,
            realLifeScenario: 'Backend API endpoints output structured JSON responses for Consumption by React, Angular, or Mobile applications.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            PHP can easily act as a headless backend API. By setting the <code className="text-cyan-600 font-mono">Content-Type</code> header to JSON, and outputting data via <code className="text-cyan-600 font-mono">json_encode()</code>, PHP seamlessly talks to frontend apps.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            An API is like a drive-thru window. The React app is the driver asking for food (data), and PHP is the worker handing a precisely packed bag (JSON payload) out the window.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-600" />
                            Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`sequenceDiagram
    participant React App
    participant PHP API
    React App->>PHP API: HTTP GET /users
    PHP API->>PHP API: Check Method, Query DB
    PHP API->>PHP API: json_encode(array)
    PHP API-->>React App: HTTP 200 OK + JSON Payload`} />
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-indigo-600" />
                            Sample Code
                        </h3>
                        <CodeBlock code={`<?php\nheader("Content-Type: application/json");\nhttp_response_code(200);\n\necho json_encode([\n    "status" => "success",\n    "data" => [\n        ["id" => 1, "name" => "Vinay"]\n    ]\n]);\n?>`} lang="php" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Almost all modern Single Page Applications (React, Vue) talk to backend APIs built in PHP using standard REST endpoints returning JSON.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-slate-900 text-slate-100 p-6 rounded-xl shadow-sm">
                            <h3 className="text-lg font-bold mb-4 flex items-center text-emerald-400">
                                <Check className="w-5 h-5 mr-2" />
                                Advantages
                            </h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-0.5 text-emerald-400 shrink-0" /> Decouples the backend from the frontend completely</li>
                                <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-0.5 text-emerald-400 shrink-0" /> Universal JSON format supports any client language</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-6 rounded-xl shadow-sm">
                            <h3 className="text-lg font-bold mb-4 flex items-center text-red-400">
                                <AlertTriangle className="w-5 h-5 mr-2" />
                                Disadvantages / Limitations
                            </h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-red-400 shrink-0" /> Requires manual CORS handling in vanilla PHP</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'php-frameworks-laravel-symfony',
            title: '15. [Professional] Frameworks Architecture (Laravel vs Symfony)',
            definition: 'PHP enterprise applications utilize MVC frameworks like Laravel (Blade, Eloquent ORM, Artisan CLI) or Symfony (decoupled enterprise components).',
            syntax: `/* Laravel Route & Controller Blueprint: */\nRoute::get('/users', [UserController::class, 'index']);\n\nclass UserController extends Controller {\n    public function index() {\n        return response()->json(User::all());\n    }\n}`,
            codeSnippet: `/* Artisan CLI & Eloquent Query Builder */\n$ php artisan make:model Product -m\n\n// Eloquent Model Query:\n// $products = Product::where('status', 'ACTIVE')->orderBy('price', 'desc')->get();`,
            realLifeScenario: 'Laravel powers major SaaS applications with built-in queue processing, authentication scaffolding, and database ORM migrations.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Instead of rewriting routing, DB access, and authentication from scratch, professional PHP developers use established MVC Frameworks. Laravel focuses on rapid development, while Symfony provides robust decoupled enterprise components.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Vanilla PHP is like building a house brick by brick. Using Laravel is like buying a pre-fab house with plumbing, electricity, and security pre-installed; you just need to decorate and arrange the furniture.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-600" />
                            Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`graph TD
    A[Router] --> B[Controller]
    B --> C[Model - Eloquent ORM]
    C --> D[(Database)]
    C --> B
    B --> E[View - Blade]
    E --> F[Client Response]`} />
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-indigo-600" />
                            Sample Code
                        </h3>
                        <CodeBlock code={`// Laravel Eloquent Query\n$activeProducts = Product::where('status', 'active')\n                         ->orderBy('price', 'desc')\n                         ->get();\n\nreturn response()->json($activeProducts);`} lang="php" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Laravel is the foundation for huge systems requiring queues, websockets, scheduling, and database migrations, providing massive developer velocity.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-slate-900 text-slate-100 p-6 rounded-xl shadow-sm">
                            <h3 className="text-lg font-bold mb-4 flex items-center text-emerald-400">
                                <Check className="w-5 h-5 mr-2" />
                                Advantages
                            </h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-0.5 text-emerald-400 shrink-0" /> Drastically reduces development time</li>
                                <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-0.5 text-emerald-400 shrink-0" /> Best-in-class ORM and CLI tools</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-6 rounded-xl shadow-sm">
                            <h3 className="text-lg font-bold mb-4 flex items-center text-red-400">
                                <AlertTriangle className="w-5 h-5 mr-2" />
                                Disadvantages / Limitations
                            </h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-red-400 shrink-0" /> Heavy abstraction can hide what the code is doing under the hood</li>
                                <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-red-400 shrink-0" /> Slight performance overhead compared to pure raw PHP</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'php-testing-opcache-deployment',
            title: '16. [Professional] Testing & Deployment (PHPUnit & OPcache)',
            definition: 'Unit test code with PHPUnit, optimize production server speeds using OPcache opcode caching, and deploy via Nginx + PHP-FPM.',
            syntax: `# Run PHPUnit Test Suite:\n$ ./vendor/bin/phpunit tests\n\n# php.ini OPcache Production Configuration Blueprint:\nopcache.enable=1\nopcache.memory_consumption=256\nopcache.max_accelerated_files=20000`,
            codeSnippet: `// PHPUnit Test Case Blueprint\nuse PHPUnit\\Framework\\TestCase;\n\nclass CalculatorTest extends TestCase {\n    public function testAddNumbers(): void {\n        $result = 2 + 3;\n        $this->assertEquals(5, $result);\n    }\n}`,
            realLifeScenario: 'Enabling OPcache on Nginx + PHP-FPM web servers doubles request throughput by storing precompiled bytecodes in RAM.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Professional apps are automated. PHPUnit tests assert that functions return expected values. On the server, OPcache caches compiled PHP scripts in RAM, massively speeding up execution time by bypassing parsing steps.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            OPcache is like a short-order cook memorizing the recipe for the most popular dish instead of reading the cookbook every single time an order comes in. It serves the results instantly from memory.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-600" />
                            Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`graph TD
    A[Request] --> B{Is Script in OPcache?}
    B -->|Yes| C[Execute from RAM]
    B -->|No| D[Read Disk File]
    D --> E[Parse & Compile]
    E --> F[Store in OPcache]
    F --> C`} />
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-indigo-600" />
                            Sample Code
                        </h3>
                        <CodeBlock code={`class UserTest extends TestCase {\n    public function testUserCreation() {\n        $user = new User("Vinay");\n        $this->assertEquals("Vinay", $user->getName());\n    }\n}`} lang="php" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            High-traffic platforms configure Nginx and PHP-FPM to rely heavily on OPcache to handle thousands of requests per second efficiently.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-slate-900 text-slate-100 p-6 rounded-xl shadow-sm">
                            <h3 className="text-lg font-bold mb-4 flex items-center text-emerald-400">
                                <Check className="w-5 h-5 mr-2" />
                                Advantages
                            </h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-0.5 text-emerald-400 shrink-0" /> Massively improves response times</li>
                                <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-0.5 text-emerald-400 shrink-0" /> PHPUnit prevents regressions in large codebases</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-6 rounded-xl shadow-sm">
                            <h3 className="text-lg font-bold mb-4 flex items-center text-red-400">
                                <AlertTriangle className="w-5 h-5 mr-2" />
                                Disadvantages / Limitations
                            </h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-red-400 shrink-0" /> OPcache must be cleared periodically during deployments</li>
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
            title="PHP Masterclass Course"
            description="Master PHP from Syntax, Control Flow, and Arrays to PDO Databases, Modern PHP 8+ Features, Security, REST APIs, and Laravel Frameworks."
            topics={topics}
            icon={Database}
            colorClass="purple"
            activeTopicIndex={activeTopicIndex}
            onTopicClick={setActiveTopicIndex}
        >
            <div className="space-y-8">
                {activeTopic.content}
            </div>
        </CoursePageLayout>
    );
};

export default PhpCoursePage;
