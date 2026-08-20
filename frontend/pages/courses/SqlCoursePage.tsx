import React, { useState } from 'react';
import CoursePageLayout from '../../components/CoursePageLayout';
import { Database, Code, BookOpen, Lightbulb, FileText, Layers, ShieldAlert, Cpu, Workflow, Key, HardDrive, Check, AlertTriangle } from 'lucide-react';
import CodeBlock from '../../components/CodeBlock';
import MermaidDiagram from '../../components/MermaidDiagram';

interface SqlTopic {
    id: string;
    title: string;
    definition: string;
    example?: string;
    syntax?: string;
    realLifeScenario?: string;
    codeSnippet?: string | null;
    content: React.ReactNode;
}

const SqlCoursePage = () => {
    const [activeTopicIndex, setActiveTopicIndex] = useState(0);

    const courseData: SqlTopic[] = [
        // ==================== BEGINNER TIER ====================
        {
            id: 'sql-select-where-orderby',
            title: '1. [Beginner] SELECT, WHERE & ORDER BY Filtering',
            definition: 'DQL (Data Query Language) retrieves specific table columns via SELECT, filters matching rows using WHERE conditions (=, !=, <, >, IN, BETWEEN, LIKE), and sorts results using ORDER BY ASC/DESC.',
            syntax: `SELECT column1, column2\nFROM table_name\nWHERE condition_1 AND condition_2\nORDER BY column1 ASC, column2 DESC;`,
            codeSnippet: `-- Query High Salary Employees in Engineering\nSELECT employee_id, first_name, last_name, salary, department\nFROM employees\nWHERE department IN ('Engineering', 'Data Science') \n  AND salary BETWEEN 60000 AND 150000\nORDER BY salary DESC;`,
            realLifeScenario: 'E-commerce web apps run SELECT queries with WHERE and ORDER BY to render sorted product catalog pages.',
            content: (
                <div className="space-y-6">
                    {/* 1. Definition */}
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-6 rounded-r-xl">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 font-medium">
                            DQL (Data Query Language) retrieves specific table columns via SELECT, filters matching rows using WHERE conditions (=, !=, &lt;, &gt;, IN, BETWEEN, LIKE), and sorts results using ORDER BY ASC/DESC.
                        </p>
                    </div>

                    {/* 2. Real-Life Analogy & Example */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-6 rounded-r-xl">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            E-commerce web apps run SELECT queries with WHERE and ORDER BY to render sorted product catalog pages.
                        </p>
                    </div>

                    {/* 3. Visual Explanation (Mermaid.js) */}
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-xl">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`graph TD\n    A[Database Table] --> B[FROM clause]\n    B --> C{WHERE filter}\n    C -->|Matches| D[SELECT columns]\n    C -->|Does not match| E[Discard]\n    D --> F[ORDER BY sort]\n    F --> G[Result Set]`} />
                    </div>

                    {/* 4. Sample Code */}
                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-600" />
                            Sample Code
                        </h3>
                        <CodeBlock code={`-- Query High Salary Employees in Engineering\nSELECT employee_id, first_name, last_name, salary, department\nFROM employees\nWHERE department IN ('Engineering', 'Data Science') \n  AND salary BETWEEN 60000 AND 150000\nORDER BY salary DESC;`} lang="sql" colorClass="blue" filename="example.sql" />
                    </div>

                    {/* 5. Real-World Application */}
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-6 rounded-r-xl">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Implementing this enables robust database architectures, complex analytics, and scalable applications.
                        </p>
                    </div>

                    {/* 6 & 7. Advantages and Disadvantages */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-6 rounded-xl">
                            <h4 className="text-md font-bold mb-3 flex items-center text-emerald-400">
                                <Check className="w-5 h-5 mr-2" />
                                Advantages
                            </h4>
                            <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
                                <li>Optimizes query execution speed.</li>
                                <li>Ensures strict data integrity and structure.</li>
                                <li>Improves developer productivity.</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-6 rounded-xl">
                            <h4 className="text-md font-bold mb-3 flex items-center text-red-400">
                                <AlertTriangle className="w-5 h-5 mr-2" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
                                <li>Requires careful schema design upfront.</li>
                                <li>Can lead to performance bottlenecks if overused.</li>
                                <li>Steep learning curve for advanced features.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'sql-insert-update-delete',
            title: '2. [Beginner] INSERT, UPDATE & DELETE Operations',
            definition: 'DML (Data Manipulation Language) mutates database records via INSERT INTO, UPDATE set WHERE, and DELETE from WHERE. Understand the difference between DELETE, TRUNCATE, and DROP.',
            syntax: `INSERT INTO table (col1, col2) VALUES (val1, val2);\nUPDATE table SET col1 = val1 WHERE condition;\nDELETE FROM table WHERE condition;`,
            codeSnippet: `-- Insert New Customer Record\nINSERT INTO customers (full_name, email, city)\nVALUES ('Vinay Mahato', 'vinay@advcoder.com', 'Delhi');\n\n-- Update Account Balance\nUPDATE accounts\nSET balance = balance + 5000.00\nWHERE account_number = 'ACC10092';\n\n-- Delete Inactive Accounts\nDELETE FROM accounts\nWHERE status = 'INACTIVE' AND last_login < '2025-01-01';`,
            realLifeScenario: 'Executing an `UPDATE` command without a `WHERE` clause accidentally overwrites every single row in the entire production database table.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-6 rounded-r-xl">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 font-medium">
                            DML (Data Manipulation Language) mutates database records via INSERT INTO, UPDATE set WHERE, and DELETE from WHERE. Understand the difference between DELETE, TRUNCATE, and DROP.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-6 rounded-r-xl">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Executing an <code className="text-cyan-600 font-mono">UPDATE</code> command without a <code className="text-cyan-600 font-mono">WHERE</code> clause accidentally overwrites every single row in the entire production database table.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-xl">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`graph LR\n    A[Application] -->|INSERT| B(Add New Row)\n    A -->|UPDATE| C(Modify Existing Row)\n    A -->|DELETE| D(Remove Row)\n    B --> E[(Database)]\n    C --> E\n    D --> E`} />
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-600" />
                            Sample Code
                        </h3>
                        <CodeBlock code={`-- Insert New Customer Record\nINSERT INTO customers (full_name, email, city)\nVALUES ('Vinay Mahato', 'vinay@advcoder.com', 'Delhi');\n\n-- Update Account Balance\nUPDATE accounts\nSET balance = balance + 5000.00\nWHERE account_number = 'ACC10092';\n\n-- Delete Inactive Accounts\nDELETE FROM accounts\nWHERE status = 'INACTIVE' AND last_login < '2025-01-01';`} lang="sql" colorClass="blue" filename="example.sql" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-6 rounded-r-xl">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Implementing this enables robust database architectures, complex analytics, and scalable applications.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-6 rounded-xl">
                            <h4 className="text-md font-bold mb-3 flex items-center text-emerald-400">
                                <Check className="w-5 h-5 mr-2" />
                                Advantages
                            </h4>
                            <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
                                <li>Optimizes query execution speed.</li>
                                <li>Ensures strict data integrity and structure.</li>
                                <li>Improves developer productivity.</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-6 rounded-xl">
                            <h4 className="text-md font-bold mb-3 flex items-center text-red-400">
                                <AlertTriangle className="w-5 h-5 mr-2" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
                                <li>Requires careful schema design upfront.</li>
                                <li>Can lead to performance bottlenecks if overused.</li>
                                <li>Steep learning curve for advanced features.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'sql-data-types-nulls',
            title: '3. [Beginner] Data Types, Nulls & COALESCE()',
            definition: 'SQL supports integer, decimal, text, date, and boolean data types. NULL represents missing or unknown data. Test nulls using IS NULL / IS NOT NULL and provide fallbacks via COALESCE().',
            syntax: `SELECT COALESCE(phone_number, mobile_number, 'No Phone Provided') AS contact_phone\nFROM users;`,
            codeSnippet: `SELECT \n    user_id,\n    first_name,\n    email,\n    COALESCE(discount_code, 'NO_DISCOUNT') AS applied_coupon,\n    COALESCE(bonus_points, 0) + 100 AS total_reward_points\nFROM user_profiles\nWHERE secondary_email IS NULL;`,
            realLifeScenario: 'Using COALESCE prevents `NULL` arithmetic propagation bugs (e.g. `500 + NULL = NULL`) in financial calculations.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-6 rounded-r-xl">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 font-medium">
                            SQL supports integer, decimal, text, date, and boolean data types. NULL represents missing or unknown data. Test nulls using IS NULL / IS NOT NULL and provide fallbacks via COALESCE().
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-6 rounded-r-xl">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Using COALESCE prevents <code className="text-cyan-600 font-mono">NULL</code> arithmetic propagation bugs (e.g. <code className="text-cyan-600 font-mono">500 + NULL = NULL</code>) in financial calculations.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-xl">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`graph TD\n    A[Value Check] --> B{Is NULL?}\n    B -->|Yes| C[Check Next Argument]\n    B -->|No| D[Return Value]\n    C --> E{Is Next NULL?}\n    E -->|Yes| C\n    E -->|No| F[Return Next Value]`} />
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-600" />
                            Sample Code
                        </h3>
                        <CodeBlock code={`SELECT \n    user_id,\n    first_name,\n    email,\n    COALESCE(discount_code, 'NO_DISCOUNT') AS applied_coupon,\n    COALESCE(bonus_points, 0) + 100 AS total_reward_points\nFROM user_profiles\nWHERE secondary_email IS NULL;`} lang="sql" colorClass="blue" filename="example.sql" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-6 rounded-r-xl">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Implementing this enables robust database architectures, complex analytics, and scalable applications.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-6 rounded-xl">
                            <h4 className="text-md font-bold mb-3 flex items-center text-emerald-400">
                                <Check className="w-5 h-5 mr-2" />
                                Advantages
                            </h4>
                            <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
                                <li>Optimizes query execution speed.</li>
                                <li>Ensures strict data integrity and structure.</li>
                                <li>Improves developer productivity.</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-6 rounded-xl">
                            <h4 className="text-md font-bold mb-3 flex items-center text-red-400">
                                <AlertTriangle className="w-5 h-5 mr-2" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
                                <li>Requires careful schema design upfront.</li>
                                <li>Can lead to performance bottlenecks if overused.</li>
                                <li>Steep learning curve for advanced features.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'sql-filtering-wildcards',
            title: '4. [Beginner] Basic Filtering & Wildcard Operators (LIKE, %, _)',
            definition: 'Combine logical operators (AND, OR, NOT) with pattern matching LIKE wildcards: `%` matches zero or more characters, `_` matches exactly 1 character.',
            syntax: `SELECT * FROM products WHERE product_code LIKE 'PRD-%';\nSELECT * FROM users WHERE username LIKE 'a_c';`,
            codeSnippet: `-- Search products starting with "Pro" and ending with "Max"\nSELECT product_id, product_name, price\nFROM inventory\nWHERE (category = 'Electronics' OR category = 'Computers')\n  AND product_name LIKE 'Pro%Max'\n  AND NOT is_discontinued = 1;`,
            realLifeScenario: 'E-commerce search bars execute wildcard `LIKE \'%search_term%\'` or Full-Text search queries across product title databases.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-6 rounded-r-xl">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 font-medium">
                            Combine logical operators (AND, OR, NOT) with pattern matching LIKE wildcards: <code className="text-cyan-600 font-mono">%</code> matches zero or more characters, <code className="text-cyan-600 font-mono">_</code> matches exactly 1 character.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-6 rounded-r-xl">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            E-commerce search bars execute wildcard <code className="text-cyan-600 font-mono">LIKE &apos;%search_term%&apos;</code> or Full-Text search queries across product title databases.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-xl">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`graph LR\n    A[Input Pattern] --> B{Wildcard Type}\n    B -->|%| C[Matches 0 or more chars]\n    B -->|_| D[Matches exactly 1 char]\n    C --> E[Filtered Results]\n    D --> E`} />
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-600" />
                            Sample Code
                        </h3>
                        <CodeBlock code={`-- Search products starting with "Pro" and ending with "Max"\nSELECT product_id, product_name, price\nFROM inventory\nWHERE (category = 'Electronics' OR category = 'Computers')\n  AND product_name LIKE 'Pro%Max'\n  AND NOT is_discontinued = 1;`} lang="sql" colorClass="blue" filename="example.sql" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-6 rounded-r-xl">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Implementing this enables robust database architectures, complex analytics, and scalable applications.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-6 rounded-xl">
                            <h4 className="text-md font-bold mb-3 flex items-center text-emerald-400">
                                <Check className="w-5 h-5 mr-2" />
                                Advantages
                            </h4>
                            <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
                                <li>Optimizes query execution speed.</li>
                                <li>Ensures strict data integrity and structure.</li>
                                <li>Improves developer productivity.</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-6 rounded-xl">
                            <h4 className="text-md font-bold mb-3 flex items-center text-red-400">
                                <AlertTriangle className="w-5 h-5 mr-2" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
                                <li>Requires careful schema design upfront.</li>
                                <li>Can lead to performance bottlenecks if overused.</li>
                                <li>Steep learning curve for advanced features.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        // ==================== INTERMEDIATE TIER ====================
        {
            id: 'sql-joins-architecture',
            title: '5. [Intermediate] Relational Joins (INNER, LEFT, RIGHT, FULL OUTER)',
            definition: 'Joins combine rows from multiple tables based on related foreign key columns: INNER JOIN (matches both), LEFT JOIN (all left + matched right), RIGHT JOIN, and FULL OUTER JOIN.',
            syntax: `SELECT u.username, o.order_date, o.total_amount\nFROM users u\nINNER JOIN orders o ON u.id = o.user_id;`,
            codeSnippet: `-- Join Customers with Orders\nSELECT \n    c.customer_id,\n    c.customer_name,\n    o.order_id,\n    o.order_date,\n    o.total_amount\nFROM customers c\nLEFT JOIN orders o ON c.customer_id = o.customer_id\nORDER BY c.customer_id;`,
            realLifeScenario: 'Joining customer profile tables with billing order tables allows reporting dashboards to render unified user purchase histories.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-6 rounded-r-xl">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 font-medium">
                            Joins combine rows from multiple tables based on related foreign key columns: INNER JOIN (matches both), LEFT JOIN (all left + matched right), RIGHT JOIN, and FULL OUTER JOIN.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-6 rounded-r-xl">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Joining customer profile tables with billing order tables allows reporting dashboards to render unified user purchase histories.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-xl">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`graph TD\n    A[Table A] --> C((Join Condition))\n    B[Table B] --> C\n    C -->|INNER| D[Matching Rows Only]\n    C -->|LEFT| E[All A + Matching B]\n    C -->|RIGHT| F[All B + Matching A]`} />
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-600" />
                            Sample Code
                        </h3>
                        <CodeBlock code={`-- Join Customers with Orders\nSELECT \n    c.customer_id,\n    c.customer_name,\n    o.order_id,\n    o.order_date,\n    o.total_amount\nFROM customers c\nLEFT JOIN orders o ON c.customer_id = o.customer_id\nORDER BY c.customer_id;`} lang="sql" colorClass="blue" filename="example.sql" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-6 rounded-r-xl">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Implementing this enables robust database architectures, complex analytics, and scalable applications.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-6 rounded-xl">
                            <h4 className="text-md font-bold mb-3 flex items-center text-emerald-400">
                                <Check className="w-5 h-5 mr-2" />
                                Advantages
                            </h4>
                            <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
                                <li>Optimizes query execution speed.</li>
                                <li>Ensures strict data integrity and structure.</li>
                                <li>Improves developer productivity.</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-6 rounded-xl">
                            <h4 className="text-md font-bold mb-3 flex items-center text-red-400">
                                <AlertTriangle className="w-5 h-5 mr-2" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
                                <li>Requires careful schema design upfront.</li>
                                <li>Can lead to performance bottlenecks if overused.</li>
                                <li>Steep learning curve for advanced features.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'sql-grouping-aggregates',
            title: '6. [Intermediate] GROUP BY & HAVING Aggregations',
            definition: 'GROUP BY aggregates rows into summary groups. Aggregate functions include COUNT(), SUM(), AVG(), MIN(), and MAX(). HAVING filters aggregated groups after GROUP BY.',
            syntax: `SELECT department, COUNT(*) AS emp_count, AVG(salary) AS avg_salary\nFROM employees\nGROUP BY department\nHAVING AVG(salary) > 75000;`,
            codeSnippet: `-- Regional Revenue Aggregation Query\nSELECT \n    region,\n    COUNT(order_id) AS total_orders,\n    SUM(total_amount) AS total_revenue,\n    AVG(total_amount) AS average_order_value\nFROM sales_orders\nWHERE order_date >= '2026-01-01'\nGROUP BY region\nHAVING SUM(total_amount) >= 500000\nORDER BY total_revenue DESC;`,
            realLifeScenario: 'Executive dashboards aggregate millions of sales rows by region and month using `GROUP BY` and `SUM()` functions.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-6 rounded-r-xl">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 font-medium">
                            GROUP BY aggregates rows into summary groups. Aggregate functions include COUNT(), SUM(), AVG(), MIN(), and MAX(). HAVING filters aggregated groups after GROUP BY.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-6 rounded-r-xl">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Executive dashboards aggregate millions of sales rows by region and month using <code className="text-cyan-600 font-mono">GROUP BY</code> and <code className="text-cyan-600 font-mono">SUM()</code> functions.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-xl">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`graph TD\n    A[Raw Data Rows] --> B[WHERE Filter]\n    B --> C[GROUP BY Categories]\n    C --> D[Aggregate Functions]\n    D --> E[HAVING Filter]\n    E --> F[Final Aggregated Result]`} />
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-600" />
                            Sample Code
                        </h3>
                        <CodeBlock code={`-- Regional Revenue Aggregation Query\nSELECT \n    region,\n    COUNT(order_id) AS total_orders,\n    SUM(total_amount) AS total_revenue,\n    AVG(total_amount) AS average_order_value\nFROM sales_orders\nWHERE order_date >= '2026-01-01'\nGROUP BY region\nHAVING SUM(total_amount) >= 500000\nORDER BY total_revenue DESC;`} lang="sql" colorClass="blue" filename="example.sql" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-6 rounded-r-xl">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Implementing this enables robust database architectures, complex analytics, and scalable applications.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-6 rounded-xl">
                            <h4 className="text-md font-bold mb-3 flex items-center text-emerald-400">
                                <Check className="w-5 h-5 mr-2" />
                                Advantages
                            </h4>
                            <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
                                <li>Optimizes query execution speed.</li>
                                <li>Ensures strict data integrity and structure.</li>
                                <li>Improves developer productivity.</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-6 rounded-xl">
                            <h4 className="text-md font-bold mb-3 flex items-center text-red-400">
                                <AlertTriangle className="w-5 h-5 mr-2" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
                                <li>Requires careful schema design upfront.</li>
                                <li>Can lead to performance bottlenecks if overused.</li>
                                <li>Steep learning curve for advanced features.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'sql-subqueries-correlated',
            title: '7. [Intermediate] Subqueries & Correlated Queries (EXISTS, IN)',
            definition: 'A Subquery is a query nested inside another SQL statement. Correlated subqueries reference columns from the outer query, evaluated once for every outer row.',
            syntax: `/* Subquery with EXISTS Blueprint */\nSELECT e.employee_id, e.first_name\nFROM employees e\nWHERE EXISTS (\n    SELECT 1 FROM sales s WHERE s.emp_id = e.employee_id\n);`,
            codeSnippet: `-- Find Employees Earning Above Their Department Average\nSELECT e.employee_id, e.first_name, e.department, e.salary\nFROM employees e\nWHERE e.salary > (\n    SELECT AVG(salary)\n    FROM employees d\n    WHERE d.department = e.department\n);`,
            realLifeScenario: 'Checking whether a customer has existing active subscriptions before processing renewals uses `WHERE EXISTS (SELECT 1 FROM ...)`.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-6 rounded-r-xl">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 font-medium">
                            A Subquery is a query nested inside another SQL statement. Correlated subqueries reference columns from the outer query, evaluated once for every outer row.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-6 rounded-r-xl">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Checking whether a customer has existing active subscriptions before processing renewals uses <code className="text-cyan-600 font-mono">WHERE EXISTS (SELECT 1 FROM ...)</code>.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-xl">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`graph TD\n    A[Outer Query Row] --> B[Inner Subquery]\n    B --> C{Evaluate Condition}\n    C -->|True| D[Include in Result]\n    C -->|False| E[Exclude from Result]\n    D --> F[Next Outer Row]`} />
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-600" />
                            Sample Code
                        </h3>
                        <CodeBlock code={`-- Find Employees Earning Above Their Department Average\nSELECT e.employee_id, e.first_name, e.department, e.salary\nFROM employees e\nWHERE e.salary > (\n    SELECT AVG(salary)\n    FROM employees d\n    WHERE d.department = e.department\n);`} lang="sql" colorClass="blue" filename="example.sql" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-6 rounded-r-xl">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Implementing this enables robust database architectures, complex analytics, and scalable applications.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-6 rounded-xl">
                            <h4 className="text-md font-bold mb-3 flex items-center text-emerald-400">
                                <Check className="w-5 h-5 mr-2" />
                                Advantages
                            </h4>
                            <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
                                <li>Optimizes query execution speed.</li>
                                <li>Ensures strict data integrity and structure.</li>
                                <li>Improves developer productivity.</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-6 rounded-xl">
                            <h4 className="text-md font-bold mb-3 flex items-center text-red-400">
                                <AlertTriangle className="w-5 h-5 mr-2" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
                                <li>Requires careful schema design upfront.</li>
                                <li>Can lead to performance bottlenecks if overused.</li>
                                <li>Steep learning curve for advanced features.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'sql-constraints-foreign-keys',
            title: '8. [Intermediate] Constraints & Keys (PRIMARY KEY, FOREIGN KEY, CASCADE)',
            definition: 'Constraints enforce relational data integrity: PRIMARY KEY (unique identifier), FOREIGN KEY (referential link), UNIQUE, NOT NULL, CHECK, and ON DELETE CASCADE.',
            syntax: `CREATE TABLE orders (\n    order_id INT PRIMARY KEY AUTO_INCREMENT,\n    customer_id INT NOT NULL,\n    status VARCHAR(20) DEFAULT 'PENDING',\n    CONSTRAINT fk_customer FOREIGN KEY (customer_id) \n        REFERENCES customers(customer_id) ON DELETE CASCADE\n);`,
            codeSnippet: `-- Relational Order Items Table with Foreign Key Cascading\nCREATE TABLE order_items (\n    item_id INT PRIMARY KEY AUTO_INCREMENT,\n    order_id INT NOT NULL,\n    product_id INT NOT NULL,\n    quantity INT CHECK (quantity > 0),\n    unit_price DECIMAL(10, 2) NOT NULL,\n    CONSTRAINT fk_order_header FOREIGN KEY (order_id)\n        REFERENCES orders(order_id) ON DELETE CASCADE\n);`,
            realLifeScenario: 'Setting `ON DELETE CASCADE` automatically cleans up dependent line items when a parent invoice order record is deleted.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-6 rounded-r-xl">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 font-medium">
                            Constraints enforce relational data integrity: PRIMARY KEY (unique identifier), FOREIGN KEY (referential link), UNIQUE, NOT NULL, CHECK, and ON DELETE CASCADE.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-6 rounded-r-xl">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Setting <code className="text-cyan-600 font-mono">ON DELETE CASCADE</code> automatically cleans up dependent line items when a parent invoice order record is deleted.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-xl">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`graph LR\n    A[Parent Table] -->|Primary Key| B(Foreign Key Link)\n    B --> C[Child Table]\n    A -->|DELETE Record| D{ON DELETE CASCADE}\n    D -->|Yes| E[Delete Linked Child Records]\n    D -->|No| F[Prevent Deletion]`} />
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-600" />
                            Sample Code
                        </h3>
                        <CodeBlock code={`-- Relational Order Items Table with Foreign Key Cascading\nCREATE TABLE order_items (\n    item_id INT PRIMARY KEY AUTO_INCREMENT,\n    order_id INT NOT NULL,\n    product_id INT NOT NULL,\n    quantity INT CHECK (quantity > 0),\n    unit_price DECIMAL(10, 2) NOT NULL,\n    CONSTRAINT fk_order_header FOREIGN KEY (order_id)\n        REFERENCES orders(order_id) ON DELETE CASCADE\n);`} lang="sql" colorClass="blue" filename="example.sql" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-6 rounded-r-xl">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Implementing this enables robust database architectures, complex analytics, and scalable applications.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-6 rounded-xl">
                            <h4 className="text-md font-bold mb-3 flex items-center text-emerald-400">
                                <Check className="w-5 h-5 mr-2" />
                                Advantages
                            </h4>
                            <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
                                <li>Optimizes query execution speed.</li>
                                <li>Ensures strict data integrity and structure.</li>
                                <li>Improves developer productivity.</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-6 rounded-xl">
                            <h4 className="text-md font-bold mb-3 flex items-center text-red-400">
                                <AlertTriangle className="w-5 h-5 mr-2" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
                                <li>Requires careful schema design upfront.</li>
                                <li>Can lead to performance bottlenecks if overused.</li>
                                <li>Steep learning curve for advanced features.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        // ==================== ADVANCED TIER ====================
        {
            id: 'sql-views-materialized',
            title: '9. [Advanced] Database Views & Materialized Views',
            definition: 'A View is a virtual table defined by a SELECT query. Materialized Views physically store pre-computed query results on disk for instant retrieval.',
            syntax: `CREATE VIEW v_active_customers AS\nSELECT customer_id, full_name, email\nFROM customers\nWHERE is_active = 1;\n\nCREATE MATERIALIZED VIEW mv_monthly_sales AS\nSELECT region, SUM(amount) AS total FROM sales GROUP BY region;`,
            codeSnippet: `-- Create Complex View for Reporting\nCREATE VIEW view_customer_order_summary AS\nSELECT \n    c.customer_id,\n    c.customer_name,\n    COUNT(o.order_id) AS total_orders,\n    COALESCE(SUM(o.total_amount), 0) AS total_spent\nFROM customers c\nLEFT JOIN orders o ON c.customer_id = o.customer_id\nGROUP BY c.customer_id, c.customer_name;\n\n-- Query Virtual View\nSELECT * FROM view_customer_order_summary WHERE total_spent > 50000;`,
            realLifeScenario: 'Analytics dashboards query Materialized Views to display complex multi-table aggregations without re-executing 10-minute SQL joins.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-6 rounded-r-xl">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 font-medium">
                            A View is a virtual table defined by a SELECT query. Materialized Views physically store pre-computed query results on disk for instant retrieval.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-6 rounded-r-xl">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Analytics dashboards query Materialized Views to display complex multi-table aggregations without re-executing 10-minute SQL joins.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-xl">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`graph TD\n    A[Underlying Tables] -->|SQL Query| B[Standard View]\n    B -->|Virtual| C[Computes on Request]\n    A -->|SQL Query| D[Materialized View]\n    D -->|Physical| E[Stored on Disk]\n    E --> F[Instant Read]`} />
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-600" />
                            Sample Code
                        </h3>
                        <CodeBlock code={`-- Create Complex View for Reporting\nCREATE VIEW view_customer_order_summary AS\nSELECT \n    c.customer_id,\n    c.customer_name,\n    COUNT(o.order_id) AS total_orders,\n    COALESCE(SUM(o.total_amount), 0) AS total_spent\nFROM customers c\nLEFT JOIN orders o ON c.customer_id = o.customer_id\nGROUP BY c.customer_id, c.customer_name;\n\n-- Query Virtual View\nSELECT * FROM view_customer_order_summary WHERE total_spent > 50000;`} lang="sql" colorClass="blue" filename="example.sql" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-6 rounded-r-xl">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Implementing this enables robust database architectures, complex analytics, and scalable applications.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-6 rounded-xl">
                            <h4 className="text-md font-bold mb-3 flex items-center text-emerald-400">
                                <Check className="w-5 h-5 mr-2" />
                                Advantages
                            </h4>
                            <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
                                <li>Optimizes query execution speed.</li>
                                <li>Ensures strict data integrity and structure.</li>
                                <li>Improves developer productivity.</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-6 rounded-xl">
                            <h4 className="text-md font-bold mb-3 flex items-center text-red-400">
                                <AlertTriangle className="w-5 h-5 mr-2" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
                                <li>Requires careful schema design upfront.</li>
                                <li>Can lead to performance bottlenecks if overused.</li>
                                <li>Steep learning curve for advanced features.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'sql-indexes-btree',
            title: '10. [Advanced] Database Indexes (B-Tree, Clustered vs Non-Clustered)',
            definition: 'Indexes are specialized B-Tree data structures that accelerate row retrieval. Clustered Indexes dictate physical table disk order (Primary Key); Non-Clustered Indexes store pointers to table rows.',
            syntax: `CREATE INDEX idx_orders_customer_date ON orders(customer_id, order_date);\nCREATE UNIQUE INDEX idx_users_email ON users(email);`,
            codeSnippet: `-- Create Compound B-Tree Index for Multi-Column Filtering\nCREATE INDEX idx_cust_status_date \nON orders (customer_id, order_status, order_date);\n\n-- Optimized Query using Index\nSELECT order_id, total_amount \nFROM orders \nWHERE customer_id = 10092 AND order_status = 'SHIPPED';`,
            realLifeScenario: 'Indexing foreign keys turns 10-second full table scan queries into sub-5ms indexed B-Tree lookups.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-6 rounded-r-xl">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 font-medium">
                            Indexes are specialized B-Tree data structures that accelerate row retrieval. Clustered Indexes dictate physical table disk order (Primary Key); Non-Clustered Indexes store pointers to table rows.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-6 rounded-r-xl">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Indexing foreign keys turns 10-second full table scan queries into sub-5ms indexed B-Tree lookups.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-xl">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`graph TD\n    A[Query Request] --> B{Is column indexed?}\n    B -->|No| C[Full Table Scan O N ]\n    B -->|Yes| D[Traverse B-Tree O log N ]\n    D --> E[Find Leaf Node Pointer]\n    E --> F[Fetch Exact Row]`} />
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-600" />
                            Sample Code
                        </h3>
                        <CodeBlock code={`-- Create Compound B-Tree Index for Multi-Column Filtering\nCREATE INDEX idx_cust_status_date \nON orders (customer_id, order_status, order_date);\n\n-- Optimized Query using Index\nSELECT order_id, total_amount \nFROM orders \nWHERE customer_id = 10092 AND order_status = 'SHIPPED';`} lang="sql" colorClass="blue" filename="example.sql" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-6 rounded-r-xl">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Implementing this enables robust database architectures, complex analytics, and scalable applications.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-6 rounded-xl">
                            <h4 className="text-md font-bold mb-3 flex items-center text-emerald-400">
                                <Check className="w-5 h-5 mr-2" />
                                Advantages
                            </h4>
                            <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
                                <li>Optimizes query execution speed.</li>
                                <li>Ensures strict data integrity and structure.</li>
                                <li>Improves developer productivity.</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-6 rounded-xl">
                            <h4 className="text-md font-bold mb-3 flex items-center text-red-400">
                                <AlertTriangle className="w-5 h-5 mr-2" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
                                <li>Requires careful schema design upfront.</li>
                                <li>Can lead to performance bottlenecks if overused.</li>
                                <li>Steep learning curve for advanced features.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'sql-stored-procedures-functions',
            title: '11. [Advanced] Stored Procedures & Functions',
            definition: 'Stored Procedures package reusable SQL statements executed on the database server. Functions return scalar values or result sets.',
            syntax: `DELIMITER //\nCREATE PROCEDURE ProcessMonthlyBonus(IN dept_name VARCHAR(50), IN bonus_percent DECIMAL(5,2))\nBEGIN\n    UPDATE employees SET salary = salary + (salary * bonus_percent)\n    WHERE department = dept_name;\nEND //\nDELIMITER ;`,
            codeSnippet: `-- Call Stored Procedure\nCALL ProcessMonthlyBonus('Engineering', 0.10);`,
            realLifeScenario: 'Financial batch processing engines execute stored procedures directly inside the database cluster to eliminate network roundtrips.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-6 rounded-r-xl">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 font-medium">
                            Stored Procedures package reusable SQL statements executed on the database server. Functions return scalar values or result sets.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-6 rounded-r-xl">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Financial batch processing engines execute stored procedures directly inside the database cluster to eliminate network roundtrips.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-xl">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`graph LR\n    A[Client App] -->|CALL procedure_name| B[Database Engine]\n    B --> C[Execute Pre-compiled SQL]\n    C --> D[Step 1]\n    C --> E[Step 2]\n    C --> F[Step 3]\n    F --> G[Return Result/Status]`} />
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-600" />
                            Sample Code
                        </h3>
                        <CodeBlock code={`-- Call Stored Procedure\nCALL ProcessMonthlyBonus('Engineering', 0.10);`} lang="sql" colorClass="blue" filename="example.sql" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-6 rounded-r-xl">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Implementing this enables robust database architectures, complex analytics, and scalable applications.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-6 rounded-xl">
                            <h4 className="text-md font-bold mb-3 flex items-center text-emerald-400">
                                <Check className="w-5 h-5 mr-2" />
                                Advantages
                            </h4>
                            <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
                                <li>Optimizes query execution speed.</li>
                                <li>Ensures strict data integrity and structure.</li>
                                <li>Improves developer productivity.</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-6 rounded-xl">
                            <h4 className="text-md font-bold mb-3 flex items-center text-red-400">
                                <AlertTriangle className="w-5 h-5 mr-2" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
                                <li>Requires careful schema design upfront.</li>
                                <li>Can lead to performance bottlenecks if overused.</li>
                                <li>Steep learning curve for advanced features.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'sql-triggers-auditing',
            title: '12. [Advanced] Triggers & Audit Logging (BEFORE / AFTER)',
            definition: 'Triggers automatically execute SQL code in response to INSERT, UPDATE, or DELETE events on a specified table (using NEW and OLD row references).',
            syntax: `CREATE TRIGGER trg_audit_salary_update\nAFTER UPDATE ON employees\nFOR EACH ROW\nBEGIN\n    IF OLD.salary <> NEW.salary THEN\n        INSERT INTO salary_audit_log(emp_id, old_salary, new_salary)\n        VALUES(NEW.emp_id, OLD.salary, NEW.salary);\n    END IF;\nEND;`,
            codeSnippet: `-- Create Audit Log Table & Trigger\nCREATE TABLE audit_log (\n    log_id INT PRIMARY KEY AUTO_INCREMENT,\n    table_name VARCHAR(50),\n    action_type VARCHAR(10),\n    changed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);\n\n-- Attach Trigger to Orders Table\nCREATE TRIGGER after_order_insert\nAFTER INSERT ON orders\nFOR EACH ROW\nINSERT INTO audit_log (table_name, action_type) VALUES ('orders', 'INSERT');`,
            realLifeScenario: 'Banking databases enforce security compliance using triggers to log every employee salary update into immutable audit log tables.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-6 rounded-r-xl">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 font-medium">
                            Triggers automatically execute SQL code in response to INSERT, UPDATE, or DELETE events on a specified table (using NEW and OLD row references).
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-6 rounded-r-xl">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Banking databases enforce security compliance using triggers to log every employee salary update into immutable audit log tables.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-xl">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`graph TD\n    A[DML Event INSERT/UPDATE] --> B[Trigger Intercept]\n    B --> C{Timing}\n    C -->|BEFORE| D[Modify Data Before Save]\n    C -->|AFTER| E[Log/Audit After Save]\n    D --> F[Commit to DB]\n    E --> F`} />
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-600" />
                            Sample Code
                        </h3>
                        <CodeBlock code={`-- Create Audit Log Table & Trigger\nCREATE TABLE audit_log (\n    log_id INT PRIMARY KEY AUTO_INCREMENT,\n    table_name VARCHAR(50),\n    action_type VARCHAR(10),\n    changed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);\n\n-- Attach Trigger to Orders Table\nCREATE TRIGGER after_order_insert\nAFTER INSERT ON orders\nFOR EACH ROW\nINSERT INTO audit_log (table_name, action_type) VALUES ('orders', 'INSERT');`} lang="sql" colorClass="blue" filename="example.sql" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-6 rounded-r-xl">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Implementing this enables robust database architectures, complex analytics, and scalable applications.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-6 rounded-xl">
                            <h4 className="text-md font-bold mb-3 flex items-center text-emerald-400">
                                <Check className="w-5 h-5 mr-2" />
                                Advantages
                            </h4>
                            <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
                                <li>Optimizes query execution speed.</li>
                                <li>Ensures strict data integrity and structure.</li>
                                <li>Improves developer productivity.</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-6 rounded-xl">
                            <h4 className="text-md font-bold mb-3 flex items-center text-red-400">
                                <AlertTriangle className="w-5 h-5 mr-2" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
                                <li>Requires careful schema design upfront.</li>
                                <li>Can lead to performance bottlenecks if overused.</li>
                                <li>Steep learning curve for advanced features.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'sql-transactions-acid',
            title: '13. [Advanced] Transactions & ACID Compliance (COMMIT, ROLLBACK)',
            definition: 'Transactions group multiple SQL statements into an atomic unit of work (BEGIN TRANSACTION, COMMIT, ROLLBACK), ensuring ACID guarantees.',
            syntax: `START TRANSACTION;\nUPDATE accounts SET balance = balance - 1000 WHERE id = 1;\nUPDATE accounts SET balance = balance + 1000 WHERE id = 2;\nCOMMIT; -- Or ROLLBACK on error`,
            codeSnippet: `-- Atomic Bank Transfer Transaction\nSTART TRANSACTION;\n\n-- Step 1: Deduct from Sender Account\nUPDATE accounts \nSET balance = balance - 5000.00 \nWHERE account_id = 101 AND balance >= 5000.00;\n\n-- Step 2: Add to Receiver Account\nUPDATE accounts \nSET balance = balance + 5000.00 \nWHERE account_id = 202;\n\n-- Check and Commit Transaction\nCOMMIT;`,
            realLifeScenario: 'Bank fund transfers execute inside transaction blocks to prevent money from being deducted from the sender without reaching the receiver.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-6 rounded-r-xl">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 font-medium">
                            Transactions group multiple SQL statements into an atomic unit of work (BEGIN TRANSACTION, COMMIT, ROLLBACK), ensuring ACID guarantees.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-6 rounded-r-xl">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Bank fund transfers execute inside transaction blocks to prevent money from being deducted from the sender without reaching the receiver.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-xl">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`graph TD\n    A[BEGIN TRANSACTION] --> B[SQL Query 1]\n    B --> C[SQL Query 2]\n    C --> D{Any Error?}\n    D -->|Yes| E[ROLLBACK Revert All]\n    D -->|No| F[COMMIT Save All]`} />
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-600" />
                            Sample Code
                        </h3>
                        <CodeBlock code={`-- Atomic Bank Transfer Transaction\nSTART TRANSACTION;\n\n-- Step 1: Deduct from Sender Account\nUPDATE accounts \nSET balance = balance - 5000.00 \nWHERE account_id = 101 AND balance >= 5000.00;\n\n-- Step 2: Add to Receiver Account\nUPDATE accounts \nSET balance = balance + 5000.00 \nWHERE account_id = 202;\n\n-- Check and Commit Transaction\nCOMMIT;`} lang="sql" colorClass="blue" filename="example.sql" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-6 rounded-r-xl">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Implementing this enables robust database architectures, complex analytics, and scalable applications.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-6 rounded-xl">
                            <h4 className="text-md font-bold mb-3 flex items-center text-emerald-400">
                                <Check className="w-5 h-5 mr-2" />
                                Advantages
                            </h4>
                            <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
                                <li>Optimizes query execution speed.</li>
                                <li>Ensures strict data integrity and structure.</li>
                                <li>Improves developer productivity.</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-6 rounded-xl">
                            <h4 className="text-md font-bold mb-3 flex items-center text-red-400">
                                <AlertTriangle className="w-5 h-5 mr-2" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
                                <li>Requires careful schema design upfront.</li>
                                <li>Can lead to performance bottlenecks if overused.</li>
                                <li>Steep learning curve for advanced features.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'sql-window-functions',
            title: '14. [Advanced] Window Functions (ROW_NUMBER, RANK, OVER)',
            definition: 'Window functions perform calculations across a set of table rows related to the current row without collapsing rows into a single summary output.',
            syntax: `SELECT employee_id, department, salary,\n       ROW_NUMBER() OVER (PARTITION BY department ORDER BY salary DESC) as rank_in_dept\nFROM employees;`,
            codeSnippet: `-- Rank Employees by Salary within Each Department\nSELECT \n    first_name,\n    department,\n    salary,\n    ROW_NUMBER() OVER (PARTITION BY department ORDER BY salary DESC) AS row_num,\n    RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS salary_rank,\n    DENSE_RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS dense_rank_val\nFROM employees;`,
            realLifeScenario: 'Leaderboard systems and top-N queries (e.g. finding the 3 highest spending customers per state) rely on window functions.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-6 rounded-r-xl">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 font-medium">
                            Window functions perform calculations across a set of table rows related to the current row without collapsing rows into a single summary output.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-6 rounded-r-xl">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Leaderboard systems and top-N queries (e.g. finding the 3 highest spending customers per state) rely on window functions.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-xl">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`graph TD\n    A[Input Rows] --> B[PARTITION BY]\n    B --> C[Group Rows into Windows]\n    C --> D[ORDER BY inside Window]\n    D --> E[Apply Window Function]\n    E --> F[Output Preserving Detail Rows]`} />
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-600" />
                            Sample Code
                        </h3>
                        <CodeBlock code={`-- Rank Employees by Salary within Each Department\nSELECT \n    first_name,\n    department,\n    salary,\n    ROW_NUMBER() OVER (PARTITION BY department ORDER BY salary DESC) AS row_num,\n    RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS salary_rank,\n    DENSE_RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS dense_rank_val\nFROM employees;`} lang="sql" colorClass="blue" filename="example.sql" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-6 rounded-r-xl">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Implementing this enables robust database architectures, complex analytics, and scalable applications.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-6 rounded-xl">
                            <h4 className="text-md font-bold mb-3 flex items-center text-emerald-400">
                                <Check className="w-5 h-5 mr-2" />
                                Advantages
                            </h4>
                            <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
                                <li>Optimizes query execution speed.</li>
                                <li>Ensures strict data integrity and structure.</li>
                                <li>Improves developer productivity.</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-6 rounded-xl">
                            <h4 className="text-md font-bold mb-3 flex items-center text-red-400">
                                <AlertTriangle className="w-5 h-5 mr-2" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
                                <li>Requires careful schema design upfront.</li>
                                <li>Can lead to performance bottlenecks if overused.</li>
                                <li>Steep learning curve for advanced features.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        // ==================== PROFESSIONAL TIER ====================
        {
            id: 'sql-query-optimization-explain',
            title: '15. [Professional] Query Optimization & EXPLAIN ANALYZE',
            definition: 'Analyze query execution plans using EXPLAIN or EXPLAIN ANALYZE to identify full table scans, suboptimal join algorithms, and missing index keys.',
            syntax: `EXPLAIN ANALYZE \nSELECT * FROM orders WHERE customer_id = 10092;`,
            codeSnippet: `-- Analyze Query Execution Plan\nEXPLAIN SELECT o.order_id, c.customer_name \nFROM orders o\nJOIN customers c ON o.customer_id = c.customer_id\nWHERE o.order_status = 'PENDING';`,
            realLifeScenario: 'Database Administrators (DBAs) inspect execution plans to resolve slow query alerts before database CPU usage hits 100%.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-6 rounded-r-xl">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 font-medium">
                            Analyze query execution plans using EXPLAIN or EXPLAIN ANALYZE to identify full table scans, suboptimal join algorithms, and missing index keys.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-6 rounded-r-xl">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Database Administrators (DBAs) inspect execution plans to resolve slow query alerts before database CPU usage hits 100%.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-xl">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`graph TD\n    A[SQL Query] --> B[Parser]\n    B --> C[Query Optimizer]\n    C --> D[Execution Plan Generated]\n    D --> E[EXPLAIN Command Analyzes]\n    E --> F[Developer Optimizes Index/Query]`} />
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-600" />
                            Sample Code
                        </h3>
                        <CodeBlock code={`-- Analyze Query Execution Plan\nEXPLAIN SELECT o.order_id, c.customer_name \nFROM orders o\nJOIN customers c ON o.customer_id = c.customer_id\nWHERE o.order_status = 'PENDING';`} lang="sql" colorClass="blue" filename="example.sql" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-6 rounded-r-xl">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Implementing this enables robust database architectures, complex analytics, and scalable applications.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-6 rounded-xl">
                            <h4 className="text-md font-bold mb-3 flex items-center text-emerald-400">
                                <Check className="w-5 h-5 mr-2" />
                                Advantages
                            </h4>
                            <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
                                <li>Optimizes query execution speed.</li>
                                <li>Ensures strict data integrity and structure.</li>
                                <li>Improves developer productivity.</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-6 rounded-xl">
                            <h4 className="text-md font-bold mb-3 flex items-center text-red-400">
                                <AlertTriangle className="w-5 h-5 mr-2" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
                                <li>Requires careful schema design upfront.</li>
                                <li>Can lead to performance bottlenecks if overused.</li>
                                <li>Steep learning curve for advanced features.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'sql-normalization-denormalization',
            title: '16. [Professional] Normalization (1NF, 2NF, 3NF) vs Denormalization',
            definition: 'Database Normalization organizes data into tables to eliminate redundancy (1NF atomic values, 2NF no partial dependencies, 3NF no transitive dependencies). Denormalization optimizes OLAP data warehouses.',
            syntax: `/* Normalization Levels:\n1NF: Eliminate duplicate columns, atomic data values.\n2NF: 1NF + Remove partial functional dependencies.\n3NF: 2NF + Remove transitive non-key dependencies. */`,
            codeSnippet: `-- 3NF Normalized Customer Address Separation\nCREATE TABLE countries (\n    country_id INT PRIMARY KEY,\n    country_name VARCHAR(100) NOT NULL\n);\n\nCREATE TABLE addresses (\n    address_id INT PRIMARY KEY,\n    street VARCHAR(200),\n    city VARCHAR(100),\n    country_id INT REFERENCES countries(country_id)\n);`,
            realLifeScenario: 'Transactional OLTP databases use 3NF normalization to prevent update anomalies; analytics OLAP data warehouses use denormalized Star Schemas for fast reporting.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-6 rounded-r-xl">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 font-medium">
                            Database Normalization organizes data into tables to eliminate redundancy (1NF atomic values, 2NF no partial dependencies, 3NF no transitive dependencies). Denormalization optimizes OLAP data warehouses.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-6 rounded-r-xl">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Transactional OLTP databases use 3NF normalization to prevent update anomalies; analytics OLAP data warehouses use denormalized Star Schemas for fast reporting.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-xl">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`graph LR\n    A[Flat Table] -->|1NF| B[Atomic Data]\n    B -->|2NF| C[No Partial Dep]\n    C -->|3NF| D[No Transitive Dep]\n    D -->|Denormalize for Read Speed| E[Star/Snowflake Schema]`} />
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-600" />
                            Sample Code
                        </h3>
                        <CodeBlock code={`-- 3NF Normalized Customer Address Separation\nCREATE TABLE countries (\n    country_id INT PRIMARY KEY,\n    country_name VARCHAR(100) NOT NULL\n);\n\nCREATE TABLE addresses (\n    address_id INT PRIMARY KEY,\n    street VARCHAR(200),\n    city VARCHAR(100),\n    country_id INT REFERENCES countries(country_id)\n);`} lang="sql" colorClass="blue" filename="example.sql" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-6 rounded-r-xl">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Implementing this enables robust database architectures, complex analytics, and scalable applications.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-6 rounded-xl">
                            <h4 className="text-md font-bold mb-3 flex items-center text-emerald-400">
                                <Check className="w-5 h-5 mr-2" />
                                Advantages
                            </h4>
                            <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
                                <li>Optimizes query execution speed.</li>
                                <li>Ensures strict data integrity and structure.</li>
                                <li>Improves developer productivity.</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-6 rounded-xl">
                            <h4 className="text-md font-bold mb-3 flex items-center text-red-400">
                                <AlertTriangle className="w-5 h-5 mr-2" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
                                <li>Requires careful schema design upfront.</li>
                                <li>Can lead to performance bottlenecks if overused.</li>
                                <li>Steep learning curve for advanced features.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'sql-database-design-uuid',
            title: '17. [Professional] Database Design & Primary Key Strategies (UUID vs Auto-Increment)',
            definition: 'Database design defines entities, attributes, and relationships. Choose between sequential Auto-Increment integers (space efficient) and UUIDs (globally unique across distributed databases).',
            syntax: `/* PostgreSQL UUID Primary Key Syntax Blueprint */\nCREATE EXTENSION IF NOT EXISTS "uuid-ossp";\n\nCREATE TABLE accounts (\n    account_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),\n    email VARCHAR(100) UNIQUE NOT NULL\n);`,
            codeSnippet: `-- Distributed System UUID Table Definition\nCREATE TABLE user_sessions (\n    session_id VARCHAR(36) PRIMARY KEY, -- UUID string\n    user_id INT NOT NULL,\n    ip_address VARCHAR(45),\n    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);`,
            realLifeScenario: 'Distributed microservices use UUID primary keys to generate globally unique IDs across independent database nodes without central ID collision risks.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-6 rounded-r-xl">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 font-medium">
                            Database design defines entities, attributes, and relationships. Choose between sequential Auto-Increment integers (space efficient) and UUIDs (globally unique across distributed databases).
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-6 rounded-r-xl">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Distributed microservices use UUID primary keys to generate globally unique IDs across independent database nodes without central ID collision risks.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-xl">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`graph TD\n    A[New Record] --> B{Key Strategy}\n    B -->|Auto-Increment| C[DB Node 1 generates ID]\n    B -->|UUID| D[App Server generates UUID]\n    C --> E[Sequential, Less Storage, Local]\n    D --> F[Random, More Storage, Distributed]`} />
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-600" />
                            Sample Code
                        </h3>
                        <CodeBlock code={`-- Distributed System UUID Table Definition\nCREATE TABLE user_sessions (\n    session_id VARCHAR(36) PRIMARY KEY, -- UUID string\n    user_id INT NOT NULL,\n    ip_address VARCHAR(45),\n    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);`} lang="sql" colorClass="blue" filename="example.sql" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-6 rounded-r-xl">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Implementing this enables robust database architectures, complex analytics, and scalable applications.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-6 rounded-xl">
                            <h4 className="text-md font-bold mb-3 flex items-center text-emerald-400">
                                <Check className="w-5 h-5 mr-2" />
                                Advantages
                            </h4>
                            <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
                                <li>Optimizes query execution speed.</li>
                                <li>Ensures strict data integrity and structure.</li>
                                <li>Improves developer productivity.</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-6 rounded-xl">
                            <h4 className="text-md font-bold mb-3 flex items-center text-red-400">
                                <AlertTriangle className="w-5 h-5 mr-2" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
                                <li>Requires careful schema design upfront.</li>
                                <li>Can lead to performance bottlenecks if overused.</li>
                                <li>Steep learning curve for advanced features.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'sql-partitioning-sharding',
            title: '18. [Professional] Table Partitioning & Database Sharding',
            definition: 'Table Partitioning divides massive single-table storage into smaller physical pieces (Range, List, Hash). Sharding distributes database partitions across multiple physical server nodes.',
            syntax: `CREATE TABLE sales_logs (\n    log_id INT,\n    log_date DATE NOT NULL\n) PARTITION BY RANGE (YEAR(log_date)) (\n    PARTITION p2024 VALUES LESS THAN (2025),\n    PARTITION p2025 VALUES LESS THAN (2026)\n);`,
            codeSnippet: `-- Querying Range-Partitioned Table\nSELECT * FROM sales_logs \nWHERE log_date >= '2025-01-01' AND log_date < '2026-01-01';\n-- Database engine performs Partition Pruning, scanning ONLY partition p2025!`,
            realLifeScenario: 'High-volume platforms (Uber, Instagram) partition tables by date or region to maintain query speeds on multi-terabyte datasets.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-6 rounded-r-xl">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 font-medium">
                            Table Partitioning divides massive single-table storage into smaller physical pieces (Range, List, Hash). Sharding distributes database partitions across multiple physical server nodes.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-6 rounded-r-xl">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            High-volume platforms (Uber, Instagram) partition tables by date or region to maintain query speeds on multi-terabyte datasets.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-xl">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`graph TD\n    A[Massive Table] --> B[Partitioning/Sharding Key]\n    B --> C[Partition 1 / Shard A]\n    B --> D[Partition 2 / Shard B]\n    B --> E[Partition 3 / Shard C]\n    C --> F[Query Hits Only Relevant Subset]`} />
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-600" />
                            Sample Code
                        </h3>
                        <CodeBlock code={`-- Querying Range-Partitioned Table\nSELECT * FROM sales_logs \nWHERE log_date >= '2025-01-01' AND log_date < '2026-01-01';\n-- Database engine performs Partition Pruning, scanning ONLY partition p2025!`} lang="sql" colorClass="blue" filename="example.sql" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-6 rounded-r-xl">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Implementing this enables robust database architectures, complex analytics, and scalable applications.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-6 rounded-xl">
                            <h4 className="text-md font-bold mb-3 flex items-center text-emerald-400">
                                <Check className="w-5 h-5 mr-2" />
                                Advantages
                            </h4>
                            <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
                                <li>Optimizes query execution speed.</li>
                                <li>Ensures strict data integrity and structure.</li>
                                <li>Improves developer productivity.</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-6 rounded-xl">
                            <h4 className="text-md font-bold mb-3 flex items-center text-red-400">
                                <AlertTriangle className="w-5 h-5 mr-2" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
                                <li>Requires careful schema design upfront.</li>
                                <li>Can lead to performance bottlenecks if overused.</li>
                                <li>Steep learning curve for advanced features.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'sql-performance-tuning-vacuum',
            title: '19. [Professional] Database Performance Tuning & Maintenance',
            definition: 'Maintain database health using table statistics gathering (ANALYZE), dead tuple cleanup (VACUUM in PostgreSQL), index defragmentation, and connection pooling.',
            syntax: `VACUUM FULL VERBOSE users; -- PostgreSQL Dead Tuple Cleanup\nANALYZE TABLE orders;        -- Update Query Planner Statistics`,
            codeSnippet: `-- PostgreSQL Maintenance Command Suite\nVACUUM ANALYZE orders;\nREINDEX TABLE orders;`,
            realLifeScenario: 'Automated database maintenance tasks run `VACUUM ANALYZE` during off-peak hours to reclaim disk space and update query optimizer statistics.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-6 rounded-r-xl">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 font-medium">
                            Maintain database health using table statistics gathering (ANALYZE), dead tuple cleanup (VACUUM in PostgreSQL), index defragmentation, and connection pooling.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-6 rounded-r-xl">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Automated database maintenance tasks run <code className="text-cyan-600 font-mono">VACUUM ANALYZE</code> during off-peak hours to reclaim disk space and update query optimizer statistics.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-xl">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`graph LR\n    A[Frequent Updates] --> B[Dead Tuples Form]\n    B --> C[Table Bloat & Slow Queries]\n    C --> D[VACUUM Process Runs]\n    D --> E[Reclaims Space]\n    E --> F[ANALYZE Updates Stats]`} />
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-600" />
                            Sample Code
                        </h3>
                        <CodeBlock code={`-- PostgreSQL Maintenance Command Suite\nVACUUM ANALYZE orders;\nREINDEX TABLE orders;`} lang="sql" colorClass="blue" filename="example.sql" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-6 rounded-r-xl">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Implementing this enables robust database architectures, complex analytics, and scalable applications.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-6 rounded-xl">
                            <h4 className="text-md font-bold mb-3 flex items-center text-emerald-400">
                                <Check className="w-5 h-5 mr-2" />
                                Advantages
                            </h4>
                            <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
                                <li>Optimizes query execution speed.</li>
                                <li>Ensures strict data integrity and structure.</li>
                                <li>Improves developer productivity.</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-6 rounded-xl">
                            <h4 className="text-md font-bold mb-3 flex items-center text-red-400">
                                <AlertTriangle className="w-5 h-5 mr-2" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
                                <li>Requires careful schema design upfront.</li>
                                <li>Can lead to performance bottlenecks if overused.</li>
                                <li>Steep learning curve for advanced features.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'sql-security-rbac-sqli',
            title: '20. [Professional] Security, RBAC & Parameterized Queries (SQLi Defense)',
            definition: 'Database security enforces Role-Based Access Control (GRANT, REVOKE) and protects applications against SQL Injection (SQLi) attacks using parameterized queries.',
            syntax: `GRANT SELECT, INSERT ON app_db.* TO 'app_user'@'localhost';\nREVOKE DROP, ALTER ON app_db.* FROM 'app_user'@'localhost';`,
            codeSnippet: `-- SECURE PARAMETERIZED QUERY PREVENTING SQL INJECTION\n-- Node.js / Python Driver Parameterized Blueprint:\n-- SELECT * FROM users WHERE email = $1 AND password = $2;\n\n-- Dangerous Concatenation (Vulnerable to SQLi):\n-- "SELECT * FROM users WHERE email = '" + userInput + "'"; ❌`,
            realLifeScenario: 'Preventing OWASP Top 10 SQL Injection vulnerabilities requires using parameterized prepared statements for all database interactions.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-6 rounded-r-xl">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 font-medium">
                            Database security enforces Role-Based Access Control (GRANT, REVOKE) and protects applications against SQL Injection (SQLi) attacks using parameterized queries.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-6 rounded-r-xl">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Preventing OWASP Top 10 SQL Injection vulnerabilities requires using parameterized prepared statements for all database interactions.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-xl">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`graph TD\n    A[User Input] --> B{Query Type}\n    B -->|String Concatenation| C[SQL Injection Vulnerability]\n    B -->|Parameterized Query| D[Input Treated as Data]\n    D --> E[Secure Execution]\n    C --> F[Data Breach]`} />
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-600" />
                            Sample Code
                        </h3>
                        <CodeBlock code={`-- SECURE PARAMETERIZED QUERY PREVENTING SQL INJECTION\n-- Node.js / Python Driver Parameterized Blueprint:\n-- SELECT * FROM users WHERE email = $1 AND password = $2;\n\n-- Dangerous Concatenation (Vulnerable to SQLi):\n-- "SELECT * FROM users WHERE email = '" + userInput + "'"; ❌`} lang="sql" colorClass="blue" filename="example.sql" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-6 rounded-r-xl">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Implementing this enables robust database architectures, complex analytics, and scalable applications.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-6 rounded-xl">
                            <h4 className="text-md font-bold mb-3 flex items-center text-emerald-400">
                                <Check className="w-5 h-5 mr-2" />
                                Advantages
                            </h4>
                            <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
                                <li>Optimizes query execution speed.</li>
                                <li>Ensures strict data integrity and structure.</li>
                                <li>Improves developer productivity.</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-6 rounded-xl">
                            <h4 className="text-md font-bold mb-3 flex items-center text-red-400">
                                <AlertTriangle className="w-5 h-5 mr-2" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
                                <li>Requires careful schema design upfront.</li>
                                <li>Can lead to performance bottlenecks if overused.</li>
                                <li>Steep learning curve for advanced features.</li>
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
            title="SQL Masterclass Course"
            description="Master SQL from SELECT, WHERE, and Joins to Window Functions, Transactions, EXPLAIN ANALYZE, Partitioning, and SQL Injection Security."
            topics={topics}
            icon={Database}
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

export default SqlCoursePage;
