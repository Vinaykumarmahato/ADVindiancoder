import React, { useState } from 'react';
import CoursePageLayout from '../../components/CoursePageLayout';
import { Database, Code, BookOpen, Lightbulb, FileText, Cpu, Layers, ShieldAlert, Zap, Server, Check, AlertTriangle } from 'lucide-react';
import CodeBlock from '../../components/CodeBlock';
import MermaidDiagram from '../../components/MermaidDiagram';

interface PostgreSqlTopic {
    id: string;
    title: string;
    definition: string;
    example?: string;
    syntax?: string;
    realLifeScenario?: string;
    codeSnippet?: string | null;
    content: React.ReactNode;
}

const PostgreSqlCoursePage = () => {
    const [activeTopicIndex, setActiveTopicIndex] = useState(0);

    const courseData: PostgreSqlTopic[] = [
        // ==================== BEGINNER TIER ====================
        {
            id: 'postgresql-intro-oradb',
            title: '1. [Beginner] Introduction & Architecture (psql CLI)',
            definition: 'PostgreSQL ("Postgres") is an enterprise-class, open-source Object-Relational Database Management System (ORDBMS) renowned for strict SQL compliance, JSONB documents, and MVCC concurrency.',
            syntax: `# psql Interactive CLI Shell Blueprint:\n$ psql -U postgres -d mydb\nmydb=# \\dt                       -- List all tables in schema\nmydb=# \\d users                  -- Inspect table column structure\nmydb=# EXPLAIN ANALYZE SELECT * FROM users;`,
            codeSnippet: `-- PostgreSQL Table with Native JSONB & UUID Generation\nCREATE EXTENSION IF NOT EXISTS "uuid-ossp";\n\nCREATE TABLE user_profiles (\n    user_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),\n    email VARCHAR(100) UNIQUE NOT NULL,\n    metadata JSONB NOT NULL,\n    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP\n);\n\nINSERT INTO user_profiles (email, metadata)\nVALUES ('vinay@advcoder.com', '{"role": "admin", "skills": ["PostgreSQL", "Python"]}');\n\nSELECT email, metadata->>'role' AS role FROM user_profiles WHERE metadata @> '{"role": "admin"}';`,
            realLifeScenario: 'Apple, Reddit, Instagram, and Twitch rely on PostgreSQL for complex relational queries, spatial GIS calculations (PostGIS), and JSONB document storage.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">PostgreSQL is a powerful, open-source object-relational database system with over 35 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Think of PostgreSQL as an ultra-secure, highly organized filing cabinet (the database) that can not only store standard text documents but also maps, JSON files, and arrays, while allowing multiple people to read and write without locking each other out.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-lg">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" /> Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph TD\n    A[Client App] -->|SQL/JSON| B(PostgreSQL Engine)\n    B --> C[(Relational Data)]\n    B --> D[(JSONB Data)]\n    B --> E[(PostGIS Spatial)]`} />
                    </div>
                    <div className="bg-slate-900 rounded-lg p-4">
                        <h4 className="text-lg font-bold text-white flex items-center mb-4">
                            <Code className="w-5 h-5 mr-2 text-blue-400" /> Sample Code
                        </h4>
                        <CodeBlock code={`CREATE DATABASE myapp;\n\\c myapp\nCREATE TABLE users (id SERIAL PRIMARY KEY, name TEXT);`} lang="sql" colorClass="blue" filename="intro.sql" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Used by Reddit and Instagram for core data storage, user accounts, and relational integrity.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-emerald-400 flex items-center mb-2">
                            <Check className="w-5 h-5 mr-2" /> Advantages
                        </h4>
                        <ul className="list-disc list-inside text-sm space-y-1">
                            <li>Fully Open Source with no licensing fees</li>
                            <li>Extensible architecture with extensions like <code className="text-cyan-400">PostGIS</code></li>
                            <li>Advanced concurrency with <code className="text-cyan-400">MVCC</code></li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl mt-4">
                        <h4 className="text-lg font-bold text-red-400 flex items-center mb-2">
                            <AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages / Limitations
                        </h4>
                        <ul className="list-disc list-inside text-sm space-y-1">
                            <li>Process-per-connection model can consume memory quickly</li>
                            <li>Vacuuming mechanism requires proper tuning</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'postgresql-data-types-tables',
            title: '2. [Beginner] Data Types & Table Creation (UUID, TIMESTAMPTZ)',
            definition: 'PostgreSQL provides rich native data types: INTEGER, NUMERIC, VARCHAR, TEXT, TIMESTAMPTZ (timezone-aware timestamp), BOOLEAN, UUID, and ARRAY.',
            syntax: `CREATE TABLE orders (\n    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),\n    total NUMERIC(10, 2) NOT NULL,\n    tags TEXT[] DEFAULT '{}',\n    placed_at TIMESTAMPTZ DEFAULT NOW()\n);`,
            codeSnippet: `-- Table Creation with Array & JSONB Types\nCREATE TABLE products (\n    product_id SERIAL PRIMARY KEY,\n    title VARCHAR(150) NOT NULL,\n    price NUMERIC(10, 2) CHECK (price >= 0),\n    tags TEXT[] NOT NULL,\n    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP\n);\n\nINSERT INTO products (title, price, tags)\nVALUES ('PostgreSQL Masterclass', 1499.00, ARRAY['database', 'sql', 'backend']);`,
            realLifeScenario: 'Storing global server timestamps using `TIMESTAMPTZ` automatically converts stored UTC values into the localized client timezone.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Data types in PostgreSQL ensure data integrity by restricting the kind of data a column can hold. It supports advanced types like UUIDs and arrays natively.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Like creating a spreadsheet template where the 'Price' column only accepts numbers and the 'Date' column only accepts valid calendar dates.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-lg">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" /> Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`classDiagram\n    class Orders {\n        +UUID id\n        +NUMERIC total\n        +TEXT[] tags\n        +TIMESTAMPTZ placed_at\n    }`} />
                    </div>
                    <div className="bg-slate-900 rounded-lg p-4">
                        <h4 className="text-lg font-bold text-white flex items-center mb-4">
                            <Code className="w-5 h-5 mr-2 text-blue-400" /> Sample Code
                        </h4>
                        <CodeBlock code={`CREATE TABLE events (\n    id UUID PRIMARY KEY,\n    name TEXT,\n    dates TIMESTAMPTZ[]\n);`} lang="sql" colorClass="blue" filename="schema.sql" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Global apps use TIMESTAMPTZ to ensure times are converted correctly regardless of the user's timezone.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-emerald-400 flex items-center mb-2">
                            <Check className="w-5 h-5 mr-2" /> Advantages
                        </h4>
                        <ul className="list-disc list-inside text-sm space-y-1">
                            <li><code className="text-cyan-400">UUID</code> natively supported for distributed systems</li>
                            <li><code className="text-cyan-400">TIMESTAMPTZ</code> handles timezone complexity automatically</li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl mt-4">
                        <h4 className="text-lg font-bold text-red-400 flex items-center mb-2">
                            <AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages / Limitations
                        </h4>
                        <ul className="list-disc list-inside text-sm space-y-1">
                            <li>Arrays can be harder to query efficiently without specialized indexes</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'postgresql-basic-sql-returning',
            title: '3. [Beginner] Basic SQL Queries & RETURNING Clause',
            definition: 'Query data with SELECT, WHERE, ORDER BY, LIMIT, OFFSET. PostgreSQL supports `INSERT INTO ... RETURNING` to retrieve generated primary key IDs immediately.',
            syntax: `-- RETURNING Clause Blueprint:\nINSERT INTO users (name, email)\nVALUES ('Vinay', 'vinay@advcoder.com')\nRETURNING id, created_at;`,
            codeSnippet: `-- Insert and Return Generated UUID\nINSERT INTO user_profiles (email, metadata)\nVALUES ('newuser@advcoder.com', '{"role": "user"}')\nRETURNING user_id, email, created_at;\n\n-- COALESCE for NULL Value Fallbacks\nSELECT email, COALESCE(metadata->>'phone', 'N/A') AS phone_number\nFROM user_profiles;`,
            realLifeScenario: 'Using `INSERT ... RETURNING id` eliminates the need to execute a second SELECT query to fetch auto-generated primary key IDs.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Basic SQL allows inserting, fetching, updating, and deleting records. The RETURNING clause is a Postgres extension to standard SQL that yields the modified rows.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Like dropping off a package at the post office and instantly getting a receipt with the tracking number, instead of having to wait in line again to ask for it.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-lg">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" /> Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`sequenceDiagram\n    App->>DB: INSERT data RETURNING id\n    DB-->>App: Returns inserted id\n    App->>DB: SELECT with COALESCE`} />
                    </div>
                    <div className="bg-slate-900 rounded-lg p-4">
                        <h4 className="text-lg font-bold text-white flex items-center mb-4">
                            <Code className="w-5 h-5 mr-2 text-blue-400" /> Sample Code
                        </h4>
                        <CodeBlock code={`INSERT INTO posts (title) VALUES ('Hello') RETURNING id;\nSELECT COALESCE(subtitle, 'No subtitle') FROM posts;`} lang="sql" colorClass="blue" filename="returning.sql" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">ORM frameworks (like Prisma or TypeORM) use RETURNING heavily to instantly populate objects after insertion.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-emerald-400 flex items-center mb-2">
                            <Check className="w-5 h-5 mr-2" /> Advantages
                        </h4>
                        <ul className="list-disc list-inside text-sm space-y-1">
                            <li>Cuts database roundtrips in half for insert-and-read workflows</li>
                            <li>Avoids race conditions where another record might be inserted simultaneously</li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl mt-4">
                        <h4 className="text-lg font-bold text-red-400 flex items-center mb-2">
                            <AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages / Limitations
                        </h4>
                        <ul className="list-disc list-inside text-sm space-y-1">
                            <li>Specific to PostgreSQL (and a few others), not purely ANSI SQL compliant</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'postgresql-constraints-integrity',
            title: '4. [Beginner] Constraints & Relational Integrity (ON DELETE CASCADE)',
            definition: 'Enforce data constraints: PRIMARY KEY, FOREIGN KEY, UNIQUE, and CHECK constraints. Configure referential actions (`ON DELETE CASCADE`, `ON UPDATE SET NULL`).',
            syntax: `CREATE TABLE comments (\n    id SERIAL PRIMARY KEY,\n    post_id INT REFERENCES posts(id) ON DELETE CASCADE,\n    content TEXT NOT NULL\n);`,
            codeSnippet: `-- Relational Table Constraints Setup\nCREATE TABLE authors (\n    author_id SERIAL PRIMARY KEY,\n    email VARCHAR(100) UNIQUE NOT NULL\n);\n\nCREATE TABLE books (\n    book_id SERIAL PRIMARY KEY,\n    author_id INT NOT NULL,\n    title VARCHAR(200) NOT NULL,\n    CONSTRAINT fk_author FOREIGN KEY (author_id) \n        REFERENCES authors(author_id) \n        ON DELETE CASCADE\n);`,
            realLifeScenario: 'Cascading deletes (`ON DELETE CASCADE`) automatically purge related child comments when a parent blog post is deleted.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Constraints are rules applied to columns to ensure validity. Foreign keys enforce relationships between tables, ensuring orphaned records don't exist.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Like a car manual that says "you cannot delete a car engine from the system if the car still exists", unless you use CASCADE, which means "if you crush the car, crush the engine too".</p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-lg">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" /> Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`erDiagram\n    POST ||--o{ COMMENT : "has many"\n    POST {\n        int id PK\n    }\n    COMMENT {\n        int post_id FK\n    }`} />
                    </div>
                    <div className="bg-slate-900 rounded-lg p-4">
                        <h4 className="text-lg font-bold text-white flex items-center mb-4">
                            <Code className="w-5 h-5 mr-2 text-blue-400" /> Sample Code
                        </h4>
                        <CodeBlock code={`CREATE TABLE users (id SERIAL PRIMARY KEY);\nCREATE TABLE settings (\n  user_id INT REFERENCES users(id) ON DELETE CASCADE\n);`} lang="sql" colorClass="blue" filename="constraints.sql" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Social networks use ON DELETE CASCADE so that deleting a user account automatically wipes all their posts, comments, and likes.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-emerald-400 flex items-center mb-2">
                            <Check className="w-5 h-5 mr-2" /> Advantages
                        </h4>
                        <ul className="list-disc list-inside text-sm space-y-1">
                            <li>Guarantees referential integrity without application-level logic</li>
                            <li><code className="text-cyan-400">CHECK</code> constraints catch bad data at the lowest level</li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl mt-4">
                        <h4 className="text-lg font-bold text-red-400 flex items-center mb-2">
                            <AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages / Limitations
                        </h4>
                        <ul className="list-disc list-inside text-sm space-y-1">
                            <li>Cascading deletes can cause severe performance spikes if millions of records are deleted at once</li>
                        </ul>
                    </div>
                </div>
            )
        },

        // ==================== INTERMEDIATE TIER ====================
        {
            id: 'postgresql-joins-ctes',
            title: '5. [Intermediate] Joins, Subqueries & CTEs (WITH Clause)',
            definition: 'Join tables (INNER, LEFT, RIGHT, FULL OUTER) and write clean, modular queries using Common Table Expressions (CTEs) via the `WITH` clause.',
            syntax: `/* Common Table Expression (CTE) Blueprint: */\nWITH HighSpenders AS (\n    SELECT customer_id, SUM(amount) AS total\n    FROM orders\n    GROUP BY customer_id\n    HAVING SUM(amount) > 50000\n)\nSELECT c.name, hs.total\nFROM HighSpenders hs\nJOIN customers c ON c.id = hs.customer_id;`,
            codeSnippet: `-- Recursive CTE to Generate Category Tree Hierarchy\nWITH RECURSIVE CategoryTree AS (\n    SELECT id, name, parent_id, 1 AS depth\n    FROM categories WHERE parent_id IS NULL\n    UNION ALL\n    SELECT c.id, c.name, c.parent_id, ct.depth + 1\n    FROM categories c\n    JOIN CategoryTree ct ON c.parent_id = ct.id\n)\nSELECT * FROM CategoryTree ORDER BY depth;`,
            realLifeScenario: 'Common Table Expressions (CTEs) break complex nested SQL queries into readable, reusable temporary result blocks.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">CTEs (WITH clause) allow you to define temporary datasets that can be referenced later in the query. Recursive CTEs are specifically used for querying hierarchical data.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Like creating a variable in programming to hold an intermediate calculation, so you don't have to write out the complex formula every time you need it.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-lg">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" /> Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph TD\n    A[WITH CTE] --> B(SELECT Main Query)\n    C[Table 1] --> A\n    A --> B`} />
                    </div>
                    <div className="bg-slate-900 rounded-lg p-4">
                        <h4 className="text-lg font-bold text-white flex items-center mb-4">
                            <Code className="w-5 h-5 mr-2 text-blue-400" /> Sample Code
                        </h4>
                        <CodeBlock code={`WITH top_users AS (\n  SELECT id FROM users LIMIT 10\n)\nSELECT * FROM posts JOIN top_users ON top_users.id = posts.user_id;`} lang="sql" colorClass="blue" filename="cte.sql" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Used for querying threaded comments on platforms like Reddit, where comments have infinite nested depth.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-emerald-400 flex items-center mb-2">
                            <Check className="w-5 h-5 mr-2" /> Advantages
                        </h4>
                        <ul className="list-disc list-inside text-sm space-y-1">
                            <li>Massively improves readability of complex queries</li>
                            <li><code className="text-cyan-400">WITH RECURSIVE</code> is the only pure SQL way to traverse trees</li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl mt-4">
                        <h4 className="text-lg font-bold text-red-400 flex items-center mb-2">
                            <AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages / Limitations
                        </h4>
                        <ul className="list-disc list-inside text-sm space-y-1">
                            <li>CTEs can act as optimization fences, sometimes leading to suboptimal query plans</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'postgresql-aggregations-string-agg',
            title: '6. [Intermediate] Aggregations & Grouping (STRING_AGG, CUBE)',
            definition: 'Aggregate data using GROUP BY, HAVING, and specialized aggregate functions: COUNT, SUM, AVG, STRING_AGG() (concatenating string values), and GROUPING SETS / CUBE / ROLLUP.',
            syntax: `SELECT category, STRING_AGG(title, ', ') AS product_titles\nFROM products\nGROUP BY category;`,
            codeSnippet: `-- STRING_AGG & ROLLUP Sales Analysis\nSELECT department, region, SUM(sales) AS total_sales\nFROM sales_data\nGROUP BY ROLLUP (department, region);\n\n-- Concatenating Tag Strings per Product Category\nSELECT c.name AS category_name, STRING_AGG(p.title, ' | ') AS items\nFROM categories c\nJOIN products p ON p.category_id = c.id\nGROUP BY c.name;`,
            realLifeScenario: '`STRING_AGG(user_email, ", ")` aggregates user lists into single comma-separated text strings per department.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Advanced aggregations allow rolling up data across multiple dimensions (CUBE/ROLLUP) and concatenating related text rows into a single string (STRING_AGG).</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Like turning a giant list of individual purchases into a neat quarterly financial report with subtotals per region and a final grand total.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-lg">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" /> Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph TD\n    A[Raw Sales Data] --> B(GROUP BY CUBE)\n    B --> C(Subtotal Region)\n    B --> D(Subtotal Dept)\n    B --> E(Grand Total)`} />
                    </div>
                    <div className="bg-slate-900 rounded-lg p-4">
                        <h4 className="text-lg font-bold text-white flex items-center mb-4">
                            <Code className="w-5 h-5 mr-2 text-blue-400" /> Sample Code
                        </h4>
                        <CodeBlock code={`SELECT team, STRING_AGG(member_name, ', ') \nFROM teams GROUP BY team;`} lang="sql" colorClass="blue" filename="agg.sql" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Generating analytics dashboards where sales figures are required at city, state, and national levels in a single query.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-emerald-400 flex items-center mb-2">
                            <Check className="w-5 h-5 mr-2" /> Advantages
                        </h4>
                        <ul className="list-disc list-inside text-sm space-y-1">
                            <li><code className="text-cyan-400">ROLLUP</code> drastically reduces the number of queries needed for reports</li>
                            <li><code className="text-cyan-400">STRING_AGG</code> handles string concatenation directly at the DB level</li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl mt-4">
                        <h4 className="text-lg font-bold text-red-400 flex items-center mb-2">
                            <AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages / Limitations
                        </h4>
                        <ul className="list-disc list-inside text-sm space-y-1">
                            <li>Heavy aggregations on large tables lock resources without proper indexing</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'postgresql-jsonb-arrays',
            title: '7. [Intermediate] Advanced Data Types: JSONB & Arrays',
            definition: 'PostgreSQL JSONB stores decomposed binary JSON for fast indexing and querying (`->`, `->>`, `@>`). Array types support array operations (`UNNEST`, `array_append`).',
            syntax: `-- Query JSONB Attribute value as text:\nSELECT metadata->>'role' FROM users;\n\n-- JSONB Containment Operator (@>):\nSELECT * FROM users WHERE metadata @> '{"status": "ACTIVE"}';`,
            codeSnippet: `-- JSONB Manipulation & Array Unnesting\n-- 1. Update JSONB Attribute using jsonb_set\nUPDATE user_profiles \nSET metadata = jsonb_set(metadata, '{lastLogin}', '"2026-08-11T12:00:00Z"')\nWHERE user_id = 'c1b2a3...';\n\n-- 2. Expand Array elements into separate rows using UNNEST()\nSELECT title, UNNEST(tags) AS single_tag FROM products;`,
            realLifeScenario: 'JSONB containment operator (`@>`) combined with GIN indexes evaluates JSON document queries in sub-millisecond speeds.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">JSONB is a binary representation of JSON data that enables lightning-fast queries, index usage, and updates of arbitrary semi-structured data within a relational table.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">It gives you the flexibility of a NoSQL database (like MongoDB) directly inside your structured SQL database, so you don't have to manage two different systems.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-lg">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" /> Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph LR\n    A[JSONB Column] --> B[Key: role]\n    A --> C[Key: preferences]\n    C --> D[Theme: Dark]`} />
                    </div>
                    <div className="bg-slate-900 rounded-lg p-4">
                        <h4 className="text-lg font-bold text-white flex items-center mb-4">
                            <Code className="w-5 h-5 mr-2 text-blue-400" /> Sample Code
                        </h4>
                        <CodeBlock code={`SELECT config->>'theme' AS user_theme \nFROM settings WHERE config @> '{"notifications": true}';`} lang="sql" colorClass="blue" filename="jsonb.sql" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Storing user settings, dynamic forms, or third-party API payloads where the schema changes frequently.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-emerald-400 flex items-center mb-2">
                            <Check className="w-5 h-5 mr-2" /> Advantages
                        </h4>
                        <ul className="list-disc list-inside text-sm space-y-1">
                            <li><code className="text-cyan-400">JSONB</code> strips whitespace and duplicate keys, optimizing storage</li>
                            <li>Allows GIN indexing for extremely fast document searches</li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl mt-4">
                        <h4 className="text-lg font-bold text-red-400 flex items-center mb-2">
                            <AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages / Limitations
                        </h4>
                        <ul className="list-disc list-inside text-sm space-y-1">
                            <li>Updating a single deep nested JSON key rewrites the entire JSONB document row</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'postgresql-indexes-explain-analyze',
            title: '8. [Intermediate] Indexes & Query Optimization (GIN, GiST, EXPLAIN)',
            definition: 'Optimize performance using Index types: B-Tree, GIN (Generalized Inverted Index for JSONB/Arrays), GiST, and BRIN. Evaluate execution plans via EXPLAIN ANALYZE.',
            syntax: `-- Create GIN Index for JSONB Column:\nCREATE INDEX idx_user_metadata_gin ON user_profiles USING GIN (metadata);\n\n-- Analyze Query Execution Plan:\nEXPLAIN (ANALYZE, BUFFERS) SELECT * FROM user_profiles WHERE metadata @> '{"role": "admin"}';`,
            codeSnippet: `-- GIN Index Creation & EXPLAIN ANALYZE\nCREATE INDEX idx_products_tags_gin ON products USING GIN (tags);\n\nEXPLAIN ANALYZE \nSELECT * FROM products WHERE tags @> ARRAY['database'];`,
            realLifeScenario: 'Adding GIN indexes to JSONB columns transforms heavy sequential scans (`Seq Scan`) into lightning-fast Index Scans (`Bitmap Index Scan`).',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Indexes are data structures that improve the speed of data retrieval operations. EXPLAIN ANALYZE helps you look under the hood to see exactly how Postgres fetches your data.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">An index is like the glossary at the back of a textbook. Without it, you have to read every single page (Seq Scan) to find a word.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-lg">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" /> Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph TD\n    A[Query] --> B{Index Exists?}\n    B -- Yes --> C(Bitmap Index Scan: Fast)\n    B -- No --> D(Sequential Scan: Slow)`} />
                    </div>
                    <div className="bg-slate-900 rounded-lg p-4">
                        <h4 className="text-lg font-bold text-white flex items-center mb-4">
                            <Code className="w-5 h-5 mr-2 text-blue-400" /> Sample Code
                        </h4>
                        <CodeBlock code={`CREATE INDEX idx_user_email ON users(email);\nEXPLAIN ANALYZE SELECT * FROM users WHERE email = 'test@test.com';`} lang="sql" colorClass="blue" filename="index.sql" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Resolving performance bottlenecks in production apps by finding queries that take 500ms and reducing them to 2ms with an index.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-emerald-400 flex items-center mb-2">
                            <Check className="w-5 h-5 mr-2" /> Advantages
                        </h4>
                        <ul className="list-disc list-inside text-sm space-y-1">
                            <li><code className="text-cyan-400">GIN</code> indexes make searching inside JSON arrays incredibly fast</li>
                            <li><code className="text-cyan-400">EXPLAIN ANALYZE</code> provides accurate timing metrics</li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl mt-4">
                        <h4 className="text-lg font-bold text-red-400 flex items-center mb-2">
                            <AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages / Limitations
                        </h4>
                        <ul className="list-disc list-inside text-sm space-y-1">
                            <li>Every index slows down INSERT and UPDATE operations</li>
                            <li>Indexes consume disk space and memory cache</li>
                        </ul>
                    </div>
                </div>
            )
        },

        // ==================== ADVANCED TIER ====================
        {
            id: 'postgresql-window-functions',
            title: '9. [Advanced] Advanced Window Functions (ROW_NUMBER, OVER)',
            definition: 'Compute calculations across set fractions without collapsing rows: `ROW_NUMBER()`, `RANK()`, `DENSE_RANK()`, `LAG()`, `LEAD()`, over `OVER (PARTITION BY ... ORDER BY ...)`.',
            syntax: `SELECT name, department, salary,\n       RANK() OVER (PARTITION BY department ORDER BY salary DESC) as rank\nFROM employees;`,
            codeSnippet: `-- Find Top 2 Highest Paid Employees per Department\nWITH RankedEmployees AS (\n    SELECT name, department, salary,\n           DENSE_RANK() OVER (PARTITION BY department ORDER BY salary DESC) as rnk\n    FROM employees\n)\nSELECT name, department, salary \nFROM RankedEmployees \nWHERE rnk <= 2;`,
            realLifeScenario: 'Financial analytics use `LAG(sales, 1) OVER (ORDER BY month)` to calculate Month-over-Month (MoM) revenue growth percentages.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Window functions perform calculations across a set of table rows related to the current row, unlike aggregations which group them into a single output row.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Like looking at a running bank balance next to each transaction. The row isn't squashed, but the calculation considers the previous rows in the 'window'.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-lg">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" /> Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph TD\n    A[Row 1] -->|LAG| B[Row 2]\n    B -->|LAG| C[Row 3]\n    C -->|LEAD| B`} />
                    </div>
                    <div className="bg-slate-900 rounded-lg p-4">
                        <h4 className="text-lg font-bold text-white flex items-center mb-4">
                            <Code className="w-5 h-5 mr-2 text-blue-400" /> Sample Code
                        </h4>
                        <CodeBlock code={`SELECT date, sales, \n  sales - LAG(sales, 1) OVER (ORDER BY date) as growth\nFROM monthly_sales;`} lang="sql" colorClass="blue" filename="window.sql" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">E-commerce dashboards showing day-over-day sales deltas or ranking top performers in leaderboards.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-emerald-400 flex items-center mb-2">
                            <Check className="w-5 h-5 mr-2" /> Advantages
                        </h4>
                        <ul className="list-disc list-inside text-sm space-y-1">
                            <li>Avoids complex self-joins for relative comparisons</li>
                            <li>Preserves original row detail while computing analytical metrics</li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl mt-4">
                        <h4 className="text-lg font-bold text-red-400 flex items-center mb-2">
                            <AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages / Limitations
                        </h4>
                        <ul className="list-disc list-inside text-sm space-y-1">
                            <li>Can be computationally expensive on massive datasets without partitioning</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'postgresql-transactions-mvcc',
            title: '10. [Advanced] Transactions & Concurrency Control (MVCC & Isolation)',
            definition: 'PostgreSQL uses Multi-Version Concurrency Control (MVCC) to provide non-blocking concurrent data access across isolation levels: Read Committed, Repeatable Read, and Serializable.',
            syntax: `BEGIN TRANSACTION ISOLATION LEVEL SERIALIZABLE;\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\nUPDATE accounts SET balance = balance + 100 WHERE id = 2;\nCOMMIT;`,
            codeSnippet: `-- Explicit Row Locking using FOR UPDATE\nBEGIN;\n\nSELECT balance FROM bank_accounts \nWHERE account_id = 101 FOR UPDATE; -- Acquires Row-Level Exclusive Lock\n\nUPDATE bank_accounts SET balance = balance - 500 \nWHERE account_id = 101;\n\nCOMMIT;`,
            realLifeScenario: 'Banking systems acquire row-level locks (`SELECT ... FOR UPDATE`) to prevent race conditions during concurrent account balance updates.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">MVCC means that when you update a row, Postgres creates a new version of it instead of overwriting the old one. This ensures readers are never blocked by writers.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Like a Google Doc: you can read the current version of the document while someone else is actively writing edits that you will only see once they hit save.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-lg">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" /> Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`sequenceDiagram\n    Client1->>DB: BEGIN\n    Client1->>DB: UPDATE (creates new version)\n    Client2->>DB: SELECT (reads old version)\n    Client1->>DB: COMMIT\n    Client2->>DB: SELECT (reads new version)`} />
                    </div>
                    <div className="bg-slate-900 rounded-lg p-4">
                        <h4 className="text-lg font-bold text-white flex items-center mb-4">
                            <Code className="w-5 h-5 mr-2 text-blue-400" /> Sample Code
                        </h4>
                        <CodeBlock code={`BEGIN;\nSELECT * FROM inventory WHERE id = 1 FOR UPDATE;\nUPDATE inventory SET qty = qty - 1 WHERE id = 1;\nCOMMIT;`} lang="sql" colorClass="blue" filename="mvcc.sql" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Ticket booking platforms lock specific seats temporarily to ensure double-booking never occurs.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-emerald-400 flex items-center mb-2">
                            <Check className="w-5 h-5 mr-2" /> Advantages
                        </h4>
                        <ul className="list-disc list-inside text-sm space-y-1">
                            <li><code className="text-cyan-400">MVCC</code> provides high concurrency without deadlocks for read-heavy workloads</li>
                            <li>ACID compliance ensures absolute data safety during crashes</li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl mt-4">
                        <h4 className="text-lg font-bold text-red-400 flex items-center mb-2">
                            <AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages / Limitations
                        </h4>
                        <ul className="list-disc list-inside text-sm space-y-1">
                            <li>MVCC causes dead tuples which require regular VACUUM maintenance</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'postgresql-plpgsql-triggers',
            title: '11. [Advanced] Stored Procedures & PL/pgSQL Triggers',
            definition: 'Write server-side functions and stored procedures using PL/pgSQL (`CREATE FUNCTION`). Attach TRIGGERS (`BEFORE/AFTER INSERT OR UPDATE`) for automated auditing.',
            syntax: `CREATE OR REPLACE FUNCTION update_updated_at()\nRETURNS TRIGGER AS $$\nBEGIN\n    NEW.updated_at = NOW();\n    RETURN NEW;\nEND;\n$$ LANGUAGE plpgsql;\n\nCREATE TRIGGER trg_update_timestamp\nBEFORE UPDATE ON user_profiles\nFOR EACH ROW EXECUTE FUNCTION update_updated_at();`,
            codeSnippet: `-- PL/pgSQL Function with Control Logic\nCREATE OR REPLACE FUNCTION get_discounted_price(price NUMERIC, discount_pct NUMERIC)\nRETURNS NUMERIC AS $$\nBEGIN\n    IF discount_pct < 0 OR discount_pct > 100 THEN\n        RAISE EXCEPTION 'Invalid discount percentage: %', discount_pct;\n    END IF;\n    RETURN price - (price * (discount_pct / 100.0));\nEND;\n$$ LANGUAGE plpgsql;\n\nSELECT get_discounted_price(2000, 15);`,
            realLifeScenario: 'Triggers automatically update `updated_at` timestamp columns whenever row updates occur, enforcing audit trail consistency.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">PL/pgSQL is Postgres's internal procedural language. Triggers automatically execute these functions based on events like INSERT, UPDATE, or DELETE on a table.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Like setting a booby trap (trigger) that paints an item blue (runs logic) whenever someone picks it up (updates it).</p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-lg">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" /> Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph TD\n    A[UPDATE Query] --> B{Trigger Before Update}\n    B --> C(Modify NEW.updated_at)\n    C --> D[Save to Disk]`} />
                    </div>
                    <div className="bg-slate-900 rounded-lg p-4">
                        <h4 className="text-lg font-bold text-white flex items-center mb-4">
                            <Code className="w-5 h-5 mr-2 text-blue-400" /> Sample Code
                        </h4>
                        <CodeBlock code={`CREATE TRIGGER set_timestamp\nBEFORE UPDATE ON data_table\nFOR EACH ROW EXECUTE FUNCTION update_timestamp_func();`} lang="sql" colorClass="blue" filename="trigger.sql" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Maintaining shadow audit tables that automatically log every change made to critical financial records.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-emerald-400 flex items-center mb-2">
                            <Check className="w-5 h-5 mr-2" /> Advantages
                        </h4>
                        <ul className="list-disc list-inside text-sm space-y-1">
                            <li>Guarantees logic executes regardless of which app or script connects</li>
                            <li>Reduces network latency by processing complex logic on the server</li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl mt-4">
                        <h4 className="text-lg font-bold text-red-400 flex items-center mb-2">
                            <AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages / Limitations
                        </h4>
                        <ul className="list-disc list-inside text-sm space-y-1">
                            <li>Business logic hidden in the database is harder to debug and version control</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'postgresql-table-partitioning',
            title: '12. [Advanced] Table Partitioning (Declarative Range & List)',
            definition: 'Declarative Table Partitioning divides large tables into smaller physical partition tables by Range, List, or Hash, enabling Partition Pruning during queries.',
            syntax: `CREATE TABLE sales (\n    id SERIAL,\n    sale_date DATE NOT NULL,\n    amount NUMERIC\n) PARTITION BY RANGE (sale_date);\n\nCREATE TABLE sales_2026_q1 PARTITION OF sales\n    FOR VALUES FROM ('2026-01-01') TO ('2026-04-01');`,
            codeSnippet: `-- Creating Partitioned Table & Attach Child Partition\nCREATE TABLE audit_logs (\n    log_id BIGSERIAL,\n    log_date DATE NOT NULL,\n    message TEXT\n) PARTITION BY RANGE (log_date);\n\nCREATE TABLE audit_logs_2026_08 PARTITION OF audit_logs\n    FOR VALUES FROM ('2026-08-01') TO ('2026-09-01');`,
            realLifeScenario: 'Partitioning multi-terabyte log tables by month allows instantly dropping entire old partitions (`DROP TABLE sales_2020`) without running slow DELETE queries.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Partitioning logically keeps a large table as one entity, but physically stores it across smaller, distinct tables based on a rule (like date range).</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Like storing decades of tax returns in separate boxes labeled by year. Finding 2026 is fast because you only look in the 2026 box, not the entire warehouse.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-lg">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" /> Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph TD\n    A[Logs Table] -->|Date < 2026| B(Logs_2025)\n    A -->|Date >= 2026| C(Logs_2026)`} />
                    </div>
                    <div className="bg-slate-900 rounded-lg p-4">
                        <h4 className="text-lg font-bold text-white flex items-center mb-4">
                            <Code className="w-5 h-5 mr-2 text-blue-400" /> Sample Code
                        </h4>
                        <CodeBlock code={`CREATE TABLE events (id INT, date DATE) PARTITION BY RANGE (date);\nCREATE TABLE events_q1 PARTITION OF events FOR VALUES FROM ('2026-01-01') TO ('2026-04-01');`} lang="sql" colorClass="blue" filename="partition.sql" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">IoT companies storing billions of sensor readings partition by week. They drop the oldest week's partition instantly to manage disk space.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-emerald-400 flex items-center mb-2">
                            <Check className="w-5 h-5 mr-2" /> Advantages
                        </h4>
                        <ul className="list-disc list-inside text-sm space-y-1">
                            <li>Massive performance boost for bulk deletes (using <code className="text-cyan-400">DROP TABLE</code>)</li>
                            <li><code className="text-cyan-400">Partition Pruning</code> avoids scanning unrelated data during queries</li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl mt-4">
                        <h4 className="text-lg font-bold text-red-400 flex items-center mb-2">
                            <AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages / Limitations
                        </h4>
                        <ul className="list-disc list-inside text-sm space-y-1">
                            <li>Unique indexes must include the partition key</li>
                        </ul>
                    </div>
                </div>
            )
        },

        // ==================== PROFESSIONAL TIER ====================
        {
            id: 'postgresql-fulltext-search-postgis',
            title: '13. [Professional] Full-Text Search & Extension Ecosystem (PostGIS)',
            definition: 'Perform native Full-Text Search using `tsvector`, `tsquery`, and `to_tsvector()`. Extend functionality via extensions (`CREATE EXTENSION` - PostGIS, pg_trgm).',
            syntax: `SELECT title \nFROM articles \nWHERE to_tsvector('english', body) @@ to_tsquery('english', 'PostgreSQL & Database');`,
            codeSnippet: `-- PostGIS Spatial Location Query\nCREATE EXTENSION IF NOT EXISTS postgis;\n\nCREATE TABLE stores (\n    id SERIAL PRIMARY KEY,\n    name VARCHAR(100),\n    geom GEOMETRY(Point, 4326)\n);\n\n-- Query stores within 10,000 meters of coordinates\nSELECT name FROM stores \nWHERE ST_DWithin(geom, ST_SetSRID(ST_MakePoint(72.8777, 19.0760), 4326), 10000);`,
            realLifeScenario: 'Uber and ride-sharing platforms use PostGIS spatial functions (`ST_DWithin`, `ST_Distance`) to calculate driver proximity.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Extensions allow Postgres to support entirely new capabilities. Full-Text Search creates search engines natively, and PostGIS turns it into a spatial database.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Like installing apps on a smartphone. Postgres is the OS, and PostGIS is the GPS app you install to give it geolocation superpowers.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-lg">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" /> Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph LR\n    A[Text] -->|to_tsvector| B[Lexemes]\n    C[Query] -->|to_tsquery| D[Match Logic]\n    B --> E{Match?}\n    D --> E`} />
                    </div>
                    <div className="bg-slate-900 rounded-lg p-4">
                        <h4 className="text-lg font-bold text-white flex items-center mb-4">
                            <Code className="w-5 h-5 mr-2 text-blue-400" /> Sample Code
                        </h4>
                        <CodeBlock code={`CREATE EXTENSION pg_trgm;\nSELECT * FROM products WHERE name % 'postgress'; -- fuzzy search`} lang="sql" colorClass="blue" filename="ext.sql" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Food delivery apps finding restaurants within a 5-mile radius, or blogs using native search without needing Elasticsearch.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-emerald-400 flex items-center mb-2">
                            <Check className="w-5 h-5 mr-2" /> Advantages
                        </h4>
                        <ul className="list-disc list-inside text-sm space-y-1">
                            <li><code className="text-cyan-400">PostGIS</code> is the industry standard for GIS and geospatial routing</li>
                            <li>Removes the need to maintain external search engines for moderate workloads</li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl mt-4">
                        <h4 className="text-lg font-bold text-red-400 flex items-center mb-2">
                            <AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages / Limitations
                        </h4>
                        <ul className="list-disc list-inside text-sm space-y-1">
                            <li>Native full-text search lacks some advanced tuning found in Elasticsearch</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'postgresql-high-availability-replication',
            title: '14. [Professional] High Availability & Streaming Replication (WAL)',
            definition: 'Ensure 99.99% uptime using Streaming Replication (Write-Ahead Logging WAL), Primary-Standby architectures, and PgBouncer connection pooling.',
            syntax: `# postgresql.conf Replication Blueprint:\nwal_level = replica\nmax_wal_senders = 5\nhot_standby = on`,
            codeSnippet: `# PgBouncer Connection Pooler Config Blueprint\n[databases]\nmydb = host=127.0.0.1 port=5432 dbname=mydb\n\n[pgbouncer]\npool_mode = transaction\nmax_client_conn = 10000\ndefault_pool_size = 20`,
            realLifeScenario: 'PgBouncer connection poolers manage 10,000 incoming client web connections, mapping them efficiently to 50 active PostgreSQL database backend connections.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">WAL (Write-Ahead Logging) streams data changes to replica databases in real-time. Connection poolers like PgBouncer manage concurrent connections efficiently.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">PgBouncer is like a receptionist at a busy doctor's office. Instead of 10,000 patients rushing the 5 doctors, the receptionist holds them in a waiting room and routes them efficiently.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-lg">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" /> Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph TD\n    A[Primary DB] -->|Streams WAL| B[Standby DB]\n    A -->|Streams WAL| C[Standby DB]`} />
                    </div>
                    <div className="bg-slate-900 rounded-lg p-4">
                        <h4 className="text-lg font-bold text-white flex items-center mb-4">
                            <Code className="w-5 h-5 mr-2 text-blue-400" /> Sample Code
                        </h4>
                        <CodeBlock code={`# Check replication lag\nSELECT extract(epoch from now() - pg_last_xact_replay_timestamp()) AS lag_seconds;`} lang="sql" colorClass="blue" filename="repl.sql" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Enterprise setups direct all writes to the Primary DB, while routing read-heavy reporting queries to Read-Replica Standby DBs.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-emerald-400 flex items-center mb-2">
                            <Check className="w-5 h-5 mr-2" /> Advantages
                        </h4>
                        <ul className="list-disc list-inside text-sm space-y-1">
                            <li><code className="text-cyan-400">PgBouncer</code> protects the database from connection exhaustion crashes</li>
                            <li>Replicas provide disaster recovery failover</li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl mt-4">
                        <h4 className="text-lg font-bold text-red-400 flex items-center mb-2">
                            <AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages / Limitations
                        </h4>
                        <ul className="list-disc list-inside text-sm space-y-1">
                            <li>Asynchronous replication can lead to minor read lag (stale data) on replicas</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'postgresql-performance-tuning-vacuum',
            title: '15. [Professional] Performance Tuning & Database Administration',
            definition: 'Tune postgresql.conf parameters (`shared_buffers`, `work_mem`, `maintenance_work_mem`), and manage database health via `VACUUM` (dead tuple cleanup) and `ANALYZE`.',
            syntax: `# postgresql.conf Performance Tuning Blueprint:\nshared_buffers = 4GB          # 25% of total RAM\nwork_mem = 64MB               # Memory per sort/hash operation\neffective_cache_size = 12GB   # 75% of total RAM\nautovacuum = on`,
            codeSnippet: `-- Manual Database Vacuum & Statistics Update\nVACUUM (VERBOSE, ANALYZE) user_profiles;`,
            realLifeScenario: 'The Autovacuum daemon reclaims disk space occupied by updated/deleted dead row tuples, preventing table bloat.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">PostgreSQL is conservative by default. Tuning memory allocations and ensuring Autovacuum is running effectively is critical for production health.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Vacuuming is like a garbage collector in programming, or someone taking out the trash. If you don't do it, the house gets bloated with old junk (dead tuples).</p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-lg">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" /> Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph TD\n    A[Update Row] --> B[New Row Inserted]\n    A --> C[Old Row Marked Dead]\n    D[Autovacuum] -->|Cleans| C`} />
                    </div>
                    <div className="bg-slate-900 rounded-lg p-4">
                        <h4 className="text-lg font-bold text-white flex items-center mb-4">
                            <Code className="w-5 h-5 mr-2 text-blue-400" /> Sample Code
                        </h4>
                        <CodeBlock code={`ALTER SYSTEM SET work_mem = '64MB';\nSELECT pg_reload_conf();`} lang="sql" colorClass="blue" filename="tune.sql" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">DBAs analyze slow queries and tune `work_mem` so that large SORT operations happen in fast RAM instead of slow disk swap.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-emerald-400 flex items-center mb-2">
                            <Check className="w-5 h-5 mr-2" /> Advantages
                        </h4>
                        <ul className="list-disc list-inside text-sm space-y-1">
                            <li>Proper tuning can improve complex query performance by 10x-100x</li>
                            <li><code className="text-cyan-400">ANALYZE</code> keeps query planner statistics accurate</li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl mt-4">
                        <h4 className="text-lg font-bold text-red-400 flex items-center mb-2">
                            <AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages / Limitations
                        </h4>
                        <ul className="list-disc list-inside text-sm space-y-1">
                            <li>Setting <code className="text-cyan-400">work_mem</code> too high can cause out-of-memory crashes on the server</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'postgresql-enterprise-security-rls',
            title: '16. [Professional] Enterprise Security & Row-Level Security (RLS)',
            definition: 'Secure databases using Role-Based Access Control (RBAC), Row-Level Security (RLS) policies (`CREATE POLICY`), and integrate with Prisma/Drizzle ORMs in Node.js.',
            syntax: `ALTER TABLE tenant_data ENABLE ROW LEVEL SECURITY;\n\nCREATE POLICY tenant_isolation_policy ON tenant_data\n    USING (tenant_id = current_setting('app.current_tenant_id'));`,
            codeSnippet: `-- Row-Level Security (RLS) Multi-Tenant Policy\nALTER TABLE documents ENABLE ROW LEVEL SECURITY;\n\nCREATE POLICY user_documents_policy ON documents\n    FOR ALL\n    TO application_user\n    USING (owner_id = current_user_id());`,
            realLifeScenario: 'SaaS multi-tenant platforms enforce Row-Level Security (RLS) at the database layer, ensuring Tenants can never access data belonging to rival customer accounts.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">RLS restricts which rows a user can read or modify, based on their active database role or session context, acting as an unbypassable security filter.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Like a company filing system where opening the drawer automatically makes files you aren't allowed to see turn completely invisible.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-lg">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" /> Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph TD\n    A[Select * from Docs] --> B{RLS Policy Check}\n    B -->|Matches User ID| C(Returns Row 1)\n    B -->|Different ID| D(Filters Row 2)`} />
                    </div>
                    <div className="bg-slate-900 rounded-lg p-4">
                        <h4 className="text-lg font-bold text-white flex items-center mb-4">
                            <Code className="w-5 h-5 mr-2 text-blue-400" /> Sample Code
                        </h4>
                        <CodeBlock code={`CREATE POLICY my_data ON logs USING (user_id = current_user);`} lang="sql" colorClass="blue" filename="rls.sql" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Supabase and PostgREST rely on RLS so that frontend clients can query the database directly without risking data leakage.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-emerald-400 flex items-center mb-2">
                            <Check className="w-5 h-5 mr-2" /> Advantages
                        </h4>
                        <ul className="list-disc list-inside text-sm space-y-1">
                            <li><code className="text-cyan-400">RLS</code> pushes security to the data layer, protecting against backend application bugs</li>
                            <li>Perfect for multi-tenant SaaS architecture</li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl mt-4">
                        <h4 className="text-lg font-bold text-red-400 flex items-center mb-2">
                            <AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages / Limitations
                        </h4>
                        <ul className="list-disc list-inside text-sm space-y-1">
                            <li>Poorly written RLS policies can cause severe query performance degradation</li>
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
            title="PostgreSQL Masterclass Course"
            description="Master PostgreSQL from Data Types, Constraints, and CTEs to JSONB GIN Indexing, Window Functions, MVCC, PL/pgSQL, PostGIS, and Row-Level Security."
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

export default PostgreSqlCoursePage;
