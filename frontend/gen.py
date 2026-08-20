import json

topics = [
    {
        "id": "mysql-architecture-workbench",
        "title": "1. [Beginner] MySQL Intro & Architecture",
        "definition": "MySQL is a client-server open-source RDBMS. Client utilities (MySQL Workbench, MySQL CLI) communicate over TCP socket port 3306 with the MySQL Database Server daemon (mysqld).",
        "syntax": "# MySQL Connection CLI Blueprint:\n$ mysql -h localhost -P 3306 -u root -p\nmysql> SHOW DATABASES;\nmysql> USE app_database;",
        "codeSnippet": "-- Initialize Database & Table Schema\nCREATE DATABASE IF NOT EXISTS ecom_db;\nUSE ecom_db;\n\nCREATE TABLE customers (\n    customer_id INT AUTO_INCREMENT PRIMARY KEY,\n    email VARCHAR(100) UNIQUE NOT NULL,\n    full_name VARCHAR(100) NOT NULL,\n    status ENUM('ACTIVE', 'INACTIVE', 'SUSPENDED') DEFAULT 'ACTIVE',\n    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;\n\nINSERT INTO customers (email, full_name, status) \nVALUES ('vinay@advcoder.com', 'Vinay Mahato', 'ACTIVE');",
        "realLifeScenario": "WordPress, Drupal, and Magento e-commerce CMS engines run on MySQL server databases."
    },
    {
        "id": "mysql-datatypes-table-creation",
        "title": "2. [Beginner] Data Types & Table Creation",
        "definition": "MySQL supports numeric types (INT, BIGINT, DECIMAL), string types (VARCHAR, TEXT, ENUM), date types (DATE, DATETIME, TIMESTAMP), and UTF8MB4 character sets.",
        "syntax": "CREATE TABLE products (\n    product_id BIGINT AUTO_INCREMENT PRIMARY KEY,\n    title VARCHAR(255) NOT NULL,\n    price DECIMAL(10, 2) NOT NULL,\n    category ENUM('Electronics', 'Books', 'Clothing'),\n    created_at DATETIME DEFAULT CURRENT_TIMESTAMP\n);",
        "codeSnippet": "CREATE TABLE orders (\n    order_id BIGINT AUTO_INCREMENT PRIMARY KEY,\n    customer_id INT NOT NULL,\n    total_amount DECIMAL(12, 2) NOT NULL CHECK (total_amount >= 0),\n    order_status ENUM('PENDING', 'PAID', 'SHIPPED', 'CANCELLED') DEFAULT 'PENDING',\n    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;",
        "realLifeScenario": "Financial transaction tables use `DECIMAL(12,2)` instead of `FLOAT` to eliminate binary floating point rounding inaccuracies."
    },
    {
        "id": "mysql-crud-limit",
        "title": "3. [Beginner] CRUD Operations & LIMIT Clause",
        "definition": "Execute Data Manipulation via INSERT INTO, SELECT, UPDATE, DELETE, and pagination using the MySQL `LIMIT offset, row_count` clause.",
        "syntax": "/* Pagination Blueprint: */\nSELECT * FROM products ORDER BY id ASC LIMIT 10 OFFSET 20; /* Page 3 */",
        "codeSnippet": "-- Inserting Multiple Rows\nINSERT INTO customers (email, full_name, status) VALUES \n('user1@domain.com', 'Anita Sharma', 'ACTIVE'),\n('user2@domain.com', 'Rahul Verma', 'INACTIVE');\n\n-- Paginated SELECT Query\nSELECT customer_id, full_name, email \nFROM customers \nWHERE status = 'ACTIVE'\nORDER BY customer_id ASC \nLIMIT 5 OFFSET 0;",
        "realLifeScenario": "Web application tables use `LIMIT 20 OFFSET 40` to render paginated catalog result pages."
    },
    {
        "id": "mysql-builtin-functions",
        "title": "4. [Beginner] Built-in Functions (String, Date, Math)",
        "definition": "MySQL provides built-in scalar functions: String (CONCAT, SUBSTRING, LENGTH), Date (NOW, CURDATE, DATEDIFF), and Math (ROUND, CEIL, FLOOR).",
        "syntax": "SELECT CONCAT(first_name, ' ', last_name) AS full_name,\n       DATEDIFF(NOW(), hire_date) AS days_employed\nFROM employees;",
        "codeSnippet": "SELECT \n    customer_id,\n    UPPER(full_name) AS formatted_name,\n    SUBSTRING(email, 1, LOCATE('@', email) - 1) AS username_part,\n    DATE_FORMAT(created_at, '%Y-%m-%d %H:%i') AS formatted_date,\n    DATEDIFF(CURRENT_DATE, created_at) AS account_age_days\nFROM customers;",
        "realLifeScenario": "Formatting timestamps directly in MySQL using `DATE_FORMAT(date, '%d-%m-%Y')` reduces client-side processing overhead."
    },
    {
        "id": "mysql-storage-engines-innodb-myisam",
        "title": "5. [Intermediate] Storage Engines (InnoDB vs MyISAM vs Memory)",
        "definition": "MySQL supports pluggable storage engines: InnoDB (default, ACID, foreign keys, row-level locking), MyISAM (table-level locking, legacy), and Memory (RAM tables).",
        "syntax": "/* Check Available Storage Engines: */\nSHOW ENGINES;\nALTER TABLE my_table ENGINE = InnoDB;",
        "codeSnippet": "SHOW ENGINE INNODB STATUS;",
        "realLifeScenario": "E-commerce databases use InnoDB for transactional orders tables to prevent deadlocks via row-level locking."
    },
    {
        "id": "mysql-advanced-joins",
        "title": "6. [Intermediate] Advanced Joins & Table Aliases",
        "definition": "Combine relational tables via INNER JOIN, LEFT JOIN, RIGHT JOIN, and CROSS JOIN using explicit table aliases for readability.",
        "syntax": "SELECT c.full_name, o.order_id, o.total_amount\nFROM customers c\nINNER JOIN orders o ON c.customer_id = o.customer_id;",
        "codeSnippet": "SELECT \n    c.customer_id,\n    c.full_name,\n    COUNT(o.order_id) AS total_orders,\n    IFNULL(SUM(o.total_amount), 0.00) AS total_spent\nFROM customers c\nLEFT JOIN orders o ON c.customer_id = o.customer_id\nGROUP BY c.customer_id, c.full_name\nORDER BY total_spent DESC;",
        "realLifeScenario": "Using `LEFT JOIN` ensures customers with zero purchase orders are retained in customer summary reports."
    },
    {
        "id": "mysql-indexing-explain",
        "title": "7. [Intermediate] Indexing & Query Optimization (FULLTEXT, EXPLAIN)",
        "definition": "Accelerate search speeds using PRIMARY KEY, UNIQUE, INDEX, and FULLTEXT indexes. Analyze execution plans via EXPLAIN.",
        "syntax": "CREATE INDEX idx_customers_status ON customers(status);\nEXPLAIN SELECT * FROM customers WHERE status = 'ACTIVE';",
        "codeSnippet": "-- Create Compound Index for High-Traffic Filtering\nCREATE INDEX idx_orders_cust_status ON orders (customer_id, order_status);\n\n-- Inspect Execution Plan\nEXPLAIN FORMAT=JSON \nSELECT order_id, total_amount \nFROM orders \nWHERE customer_id = 1 AND order_status = 'SHIPPED';",
        "realLifeScenario": "Running `EXPLAIN` allows DBAs to verify whether MySQL uses indexes or falls back to slow `ALL` full table scans."
    },
    {
        "id": "mysql-transactions-isolation",
        "title": "8. [Intermediate] Transactions & Isolation Levels (REPEATABLE READ)",
        "definition": "MySQL InnoDB defaults to REPEATABLE READ transaction isolation, preventing Dirty Reads and Non-Repeatable Reads using MVCC (Multi-Version Concurrency Control).",
        "syntax": "START TRANSACTION;\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\nSAVEPOINT my_savepoint;\nUPDATE accounts SET balance = balance + 100 WHERE id = 2;\nCOMMIT;",
        "codeSnippet": "-- Transfer Funds with Transaction Safety\nSTART TRANSACTION;\n\nUPDATE bank_accounts SET balance = balance - 2500.00 WHERE account_id = 101;\nUPDATE bank_accounts SET balance = balance + 2500.00 WHERE account_id = 202;\n\nCOMMIT;",
        "realLifeScenario": "Financial ledger systems use REPEATABLE READ isolation to guarantee consistent snapshot data throughout multi-step report generation."
    },
    {
        "id": "mysql-stored-procedures-functions",
        "title": "9. [Advanced] Stored Procedures & Functions (DELIMITER, IN/OUT)",
        "definition": "Stored Procedures package server-side routines using DELIMITER, accepting IN, OUT, and INOUT parameters. Functions return scalar values.",
        "syntax": "DELIMITER //\nCREATE PROCEDURE GetCustomerTotal(IN cust_id INT, OUT total_spent DECIMAL(10,2))\nBEGIN\n    SELECT SUM(total_amount) INTO total_spent FROM orders WHERE customer_id = cust_id;\nEND //\nDELIMITER ;",
        "codeSnippet": "DELIMITER //\n\nCREATE PROCEDURE ApplyDiscountToOrder(IN target_order_id INT, IN discount_pct DECIMAL(4,2))\nBEGIN\n    UPDATE orders \n    SET total_amount = total_amount - (total_amount * discount_pct)\n    WHERE order_id = target_order_id;\nEND //\n\nDELIMITER ;\n\n-- Call Procedure\nCALL ApplyDiscountToOrder(10092, 0.15);",
        "realLifeScenario": "Executing stored procedures reduces network roundtrips between backend web app servers and MySQL database clusters."
    },
    {
        "id": "mysql-triggers-views",
        "title": "10. [Advanced] Triggers & Views (BEFORE / AFTER)",
        "definition": "Triggers fire automatically on INSERT, UPDATE, or DELETE events. Views create dynamic virtual table abstractions.",
        "syntax": "CREATE TRIGGER before_order_insert\nBEFORE INSERT ON orders\nFOR EACH ROW\nBEGIN\n    IF NEW.total_amount < 0 THEN\n        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Amount cannot be negative';\n    END IF;\nEND;",
        "codeSnippet": "-- Audit Log Trigger\nCREATE TRIGGER after_customer_update\nAFTER UPDATE ON customers\nFOR EACH ROW\nBEGIN\n    IF OLD.status <> NEW.status THEN\n        INSERT INTO audit_logs (entity_id, old_val, new_val)\n        VALUES (NEW.customer_id, OLD.status, NEW.status);\n    END IF;\nEND;",
        "realLifeScenario": "Validation triggers throw custom exceptions using `SIGNAL SQLSTATE \\'45000\\'` to abort illegal database mutations."
    },
    {
        "id": "mysql-fulltext-search",
        "title": "11. [Advanced] Full-Text Search (MATCH AGAINST)",
        "definition": "FULLTEXT indexes perform natural language text searching across large text columns using MATCH() AGAINST() in NATURAL LANGUAGE or BOOLEAN modes.",
        "syntax": "ALTER TABLE articles ADD FULLTEXT(title, body);\nSELECT * FROM articles WHERE MATCH(title, body) AGAINST('+MySQL -B-Tree' IN BOOLEAN MODE);",
        "codeSnippet": "-- Natural Language Search\nSELECT article_id, title,\n       MATCH(title, body) AGAINST('Database Optimization' IN NATURAL LANGUAGE MODE) AS relevance_score\nFROM articles\nWHERE MATCH(title, body) AGAINST('Database Optimization' IN NATURAL LANGUAGE MODE)\nORDER BY relevance_score DESC;",
        "realLifeScenario": "Content CMS portals use MySQL Full-Text search indexes to calculate relevance scores for user search queries."
    },
    {
        "id": "mysql-user-management-security",
        "title": "12. [Advanced] User Management & Security (GRANT, REVOKE)",
        "definition": "Manage database security roles using CREATE USER, GRANT, REVOKE, and FLUSH PRIVILEGES, adhering to the Principle of Least Privilege.",
        "syntax": "CREATE USER 'app_user'@'%' IDENTIFIED BY 'StrongPass123!';\nGRANT SELECT, INSERT, UPDATE ON ecom_db.* TO 'app_user'@'%';\nFLUSH PRIVILEGES;",
        "codeSnippet": "-- Create Restricted Application DB User\nCREATE USER 'web_api'@'10.0.0.%' IDENTIFIED BY 'SecureAppPassword2026!';\nGRANT SELECT, INSERT, UPDATE, DELETE ON ecom_db.* TO 'web_api'@'10.0.0.%';\nFLUSH PRIVILEGES;",
        "realLifeScenario": "Production security forbids connecting backend web applications directly as the `root` administrative superuser."
    },
    {
        "id": "mysql-backup-recovery-mysqldump",
        "title": "13. [Professional] Backup & Recovery (mysqldump & binlog PITR)",
        "definition": "Perform logical backups via `mysqldump`, enable Binary Logging (binlog) for Point-In-Time Recovery (PITR), and restore database dumps.",
        "syntax": "# Export Database Dump via mysqldump:\n$ mysqldump -u root -p --single-transaction --quick ecom_db > ecom_backup.sql\n\n# Restore Backup Dump:\n$ mysql -u root -p ecom_db < ecom_backup.sql",
        "codeSnippet": "# Command to replay binary logs up to point in time:\n$ mysqlbinlog --stop-datetime=\"2026-08-11 12:00:00\" binlog.000001 | mysql -u root -p",
        "realLifeScenario": "Running `mysqldump` with `--single-transaction` takes consistent non-blocking database backups without locking active InnoDB tables."
    },
    {
        "id": "mysql-replication-high-availability",
        "title": "14. [Professional] Replication & High Availability (Primary-Replica & GTID)",
        "definition": "MySQL Primary-Replica replication copies binary logs from a Master database server to read-only Replica instances using Global Transaction Identifiers (GTID).",
        "syntax": "/* Configure Replica Server Blueprint */\nCHANGE REPLICATION SOURCE TO\n    SOURCE_HOST='10.0.0.1',\n    SOURCE_USER='repl_user',\n    SOURCE_PASSWORD='ReplPassword123!',\n    GTID_ONLY=1;\nSTART REPLICA;",
        "codeSnippet": "SHOW REPLICA STATUS\\G",
        "realLifeScenario": "High-traffic websites route read queries (`SELECT`) to 5 read-only replica servers, reserving the Primary database for writes (`INSERT/UPDATE`)."
    },
    {
        "id": "mysql-performance-tuning-mycnf",
        "title": "15. [Professional] Performance Tuning & Configuration (my.cnf)",
        "definition": "Tune MySQL server configuration settings inside my.cnf (`innodb_buffer_pool_size`, `max_connections`), analyze slow query logs, and inspect `performance_schema`.",
        "syntax": "# /etc/mysql/my.cnf Configuration Blueprint:\n[mysqld]\ninnodb_buffer_pool_size = 8G    # Set to 70-80% of total server RAM\nslow_query_log = 1\nlong_query_time = 2            # Log queries taking > 2 seconds\nmax_connections = 500",
        "codeSnippet": "-- Inspect Buffer Pool Cache Hit Ratio\nSHOW GLOBAL STATUS LIKE 'Innodb_buffer_pool_read%';",
        "realLifeScenario": "Setting `innodb_buffer_pool_size` to 70-80% of server RAM keeps active database indexes entirely cached in memory."
    },
    {
        "id": "mysql-enterprise-sharding-proxysql",
        "title": "16. [Professional] Enterprise Architecture, ProxySQL & AWS RDS",
        "definition": "Scale MySQL to enterprise volumes using ProxySQL query routing, MySQL InnoDB Clusters, horizontal sharding, and AWS RDS managed deployments.",
        "syntax": "/* ProxySQL Query Routing Blueprint:\nRead Queries (SELECT)  ──> Hostgroup 1 (Read Replicas)\nWrite Queries (INSERT) ──> Hostgroup 0 (Primary Server) */",
        "codeSnippet": "-- ProxySQL MySQL Query Rules Configuration\nINSERT INTO mysql_query_rules (rule_id, active, match_pattern, destination_hostgroup)\nVALUES (1, 1, '^SELECT.*FOR UPDATE', 0),\n       (2, 1, '^SELECT', 1);",
        "realLifeScenario": "Enterprise cloud deployments route database traffic through ProxySQL to perform zero-downtime database failovers automatically."
    }
]

header = """import React, { useState } from 'react';
import CoursePageLayout from '../../components/CoursePageLayout';
import { Database, Code, BookOpen, Lightbulb, FileText, Cpu, Layers, ShieldAlert, Zap, Server, Key, Check, AlertTriangle } from 'lucide-react';
import CodeBlock from '../../components/CodeBlock';
import MermaidDiagram from '../../components/MermaidDiagram';

interface MySqlTopic {
    id: string;
    title: string;
    definition: string;
    example?: string;
    syntax?: string;
    realLifeScenario?: string;
    codeSnippet?: string | null;
    content: React.ReactNode;
}

const MySqlCoursePage = () => {
    const [activeTopicIndex, setActiveTopicIndex] = useState(0);

    const courseData: MySqlTopic[] = [
"""

footer = """
    ];

    const topics = courseData.map(topic => topic.title);
    const activeTopic = courseData[activeTopicIndex];

    return (
        <CoursePageLayout
            title="MySQL Masterclass Course"
            description="Master MySQL from Architecture, Data Types, and Joins to InnoDB Storage Engines, Stored Procedures, Replication, mysqldump, and Performance Tuning."
            topics={topics}
            icon={Database}
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
                            <pre>{`-- MySQL Query Blueprint\\nSELECT * FROM customers;`}</pre>
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
                        <CodeBlock code={activeTopic.codeSnippet} lang="sql" colorClass="blue" filename="schema.sql" />
                    </div>
                )}

                {/* Part 4: Real-Life Scenario Example */}
                <div className="bg-emerald-50 dark:bg-emerald-900/10 border-l-4 border-emerald-600 p-6 rounded-r-xl shadow-sm">
                    <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                        <Lightbulb className="w-5 h-5 mr-2" />
                        4. Real-Life Industry Scenario & Application
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                        {activeTopic.realLifeScenario || activeTopic.example || "Powers web applications, e-commerce stores, WordPress CMS platforms, enterprise database clusters, and cloud microservices."}
                    </p>
                </div>
            </div>
        </CoursePageLayout>
    );
};

export default MySqlCoursePage;
"""

import os

diagrams = [
    "graph LR\\nClient[MySQL Client] -->|Port 3306| Server[MySQL Server]\\nServer --> Engine[Storage Engine]\\nEngine --> Disk[(Files)]",
    "graph TD\\nTables --> Rows\\nRows --> Columns\\nColumns --> DataTypes[INT, VARCHAR, DATETIME]",
    "graph LR\\nApp[Web App] -->|SELECT LIMIT| DB[(MySQL)]\\nDB -->|Page 1| App\\nDB -->|Page 2| App",
    "graph TD\\nFunc[Functions] --> String[String]\\nFunc --> Date[Date]\\nFunc --> Math[Math]",
    "graph LR\\nEngine[Storage Engine] --> InnoDB[InnoDB - ACID]\\nEngine --> MyISAM[MyISAM - Fast Read]\\nEngine --> Memory[Memory - RAM]",
    "graph TD\\nLeft[Left Table] -->|LEFT JOIN| Right[Right Table]\\nLeft -->|INNER JOIN| Right",
    "graph TD\\nQuery[Query] --> Cache[Query Cache]\\nCache --> Parser[Parser]\\nParser --> Optimizer[Optimizer]\\nOptimizer --> Exec[Execution]",
    "graph TD\\nTx[Transaction] --> ACID[ACID Properties]\\nACID --> Atomicity\\nACID --> Consistency\\nACID --> Isolation\\nACID --> Durability",
    "graph TD\\nClient --> Call[CALL Procedure]\\nCall --> SP[Stored Procedure]\\nSP --> Queries[Execute Queries]\\nQueries --> Client",
    "graph LR\\nInsert[INSERT Event] --> Trigger[BEFORE/AFTER Trigger]\\nTrigger --> Action[Action Executed]",
    "graph TD\\nUser[User Search] --> FTS[Full-Text Search Index]\\nFTS --> Relevance[Relevance Score]\\nRelevance --> Results[Matched Results]",
    "graph LR\\nAdmin[Root] -->|GRANT| User[App User]\\nUser -->|SELECT, INSERT| DB[(Database)]",
    "graph LR\\nDB[(MySQL)] -->|mysqldump| Dump[SQL Dump File]\\nDB -->|binlog| PITR[Point-in-Time Recovery]",
    "graph TD\\nPrimary[Primary Server] -->|binlog/GTID| Replica1[Replica 1]\\nPrimary -->|binlog/GTID| Replica2[Replica 2]",
    "graph LR\\nConfig[my.cnf] --> Buffer[Buffer Pool]\\nConfig --> Connections[Max Connections]\\nConfig --> Logs[Slow Query Log]",
    "graph TD\\nApp --> Proxy[ProxySQL]\\nProxy -->|Writes| Primary[Primary DB]\\nProxy -->|Reads| Replicas[Replica DBs]"
]

def format_topic(topic, idx):
    content = f"""        {{
            id: "{topic['id']}",
            title: "{topic['title']}",
            definition: {json.dumps(topic['definition'])},
            syntax: {json.dumps(topic['syntax'])},
            codeSnippet: {json.dumps(topic['codeSnippet'])},
            realLifeScenario: {json.dumps(topic['realLifeScenario'])},
            content: (
                <div className="space-y-6">
                    {{/* 1. Definition */}}
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-6 rounded-r-xl mb-6">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center mb-4">
                            <BookOpen className="w-6 h-6 mr-2 text-cyan-600" />
                            1. Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            {{ {json.dumps(topic['definition'])} }}
                        </p>
                    </div>

                    {{/* 2. Real-Life Analogy */}}
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-6 rounded-r-xl mb-6">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center mb-4">
                            <Lightbulb className="w-6 h-6 mr-2 text-blue-600" />
                            2. Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            {{ {json.dumps(topic.get('realLifeScenario', 'Standard real life application scenario.'))} }}
                        </p>
                    </div>

                    {{/* 3. Visual Explanation (Mermaid) */}}
                    <div className="mb-6">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-6 h-6 mr-2 text-indigo-600" />
                            3. Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`{diagrams[idx]}`} />
                    </div>

                    {{/* 4. Sample Code */}}
                    <div className="mb-6">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center mb-4">
                            <Code className="w-6 h-6 mr-2 text-blue-600" />
                            4. Sample Code
                        </h3>
                        <CodeBlock code={{ {json.dumps(topic['codeSnippet'])} }} lang="sql" filename="example.sql" />
                    </div>

                    {{/* 5. Real-World Application */}}
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-6 rounded-r-xl mb-6">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center mb-4">
                            <Cpu className="w-6 h-6 mr-2 text-emerald-600" />
                            5. Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            This concept is heavily used in production environments for ensuring data reliability and application performance.
                        </p>
                    </div>

                    {{/* 6. Advantages */}}
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-6 mb-6">
                        <h3 className="text-xl font-bold flex items-center mb-4">
                            <Check className="w-6 h-6 mr-2 text-emerald-400" />
                            6. Advantages
                        </h3>
                        <ul className="list-none space-y-2">
                            <li className="flex items-start">
                                <Check className="w-5 h-5 mr-2 text-emerald-400 flex-shrink-0 mt-0.5" />
                                <span><code className="text-cyan-400">High reliability</code> and wide community support.</span>
                            </li>
                            <li className="flex items-start">
                                <Check className="w-5 h-5 mr-2 text-emerald-400 flex-shrink-0 mt-0.5" />
                                <span><code className="text-cyan-400">Scalable architecture</code> suited for large applications.</span>
                            </li>
                        </ul>
                    </div>

                    {{/* 7. Disadvantages / Limitations */}}
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-6 mb-6">
                        <h3 className="text-xl font-bold flex items-center mb-4">
                            <AlertTriangle className="w-6 h-6 mr-2 text-red-400" />
                            7. Disadvantages &amp; Limitations
                        </h3>
                        <ul className="list-none space-y-2">
                            <li className="flex items-start">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400 flex-shrink-0 mt-0.5" />
                                <span>Requires careful configuration to <code className="text-cyan-400">optimize performance</code>.</span>
                            </li>
                            <li className="flex items-start">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400 flex-shrink-0 mt-0.5" />
                                <span>Can consume significant server resources under <code className="text-cyan-400">heavy load</code>.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            )
        }}"""
    return content

out = header + ",\n".join(format_topic(t, i) for i, t in enumerate(topics)) + footer

with open("c:/Users/vinay/Videos/Development Journey/full stack app for adv indian coder/ADVindiancoder/frontend/pages/courses/MySqlCoursePage.tsx", "w", encoding="utf-8") as f:
    f.write(out)
