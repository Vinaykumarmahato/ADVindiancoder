import React, { useState } from 'react';
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

    const getTopicContent = (
        definition: string,
        realLifeScenario: string,
        diagram: string,
        codeSnippet: string | null
    ) => (
        <div className="space-y-6">
            {/* 1. Definition */}
            <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-6 rounded-r-xl">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center mb-4">
                    <BookOpen className="w-6 h-6 mr-2 text-cyan-600" />
                    1. Definition
                </h3>
                <p className="text-gray-700 dark:text-gray-300">{definition}</p>
            </div>

            {/* 2. Real-Life Analogy */}
            <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-6 rounded-r-xl">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center mb-4">
                    <Lightbulb className="w-6 h-6 mr-2 text-blue-600" />
                    2. Real-Life Analogy &amp; Example
                </h3>
                <p className="text-gray-700 dark:text-gray-300">{realLifeScenario}</p>
            </div>

            {/* 3. Visual Explanation (Mermaid) */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center mb-4">
                    <Layers className="w-6 h-6 mr-2 text-indigo-600" />
                    3. Visual Explanation
                </h3>
                <MermaidDiagram chart={diagram} />
            </div>

            {/* 4. Sample Code */}
            {codeSnippet && (
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center mb-4">
                        <Code className="w-6 h-6 mr-2 text-blue-600" />
                        4. Sample Code
                    </h3>
                    <CodeBlock code={codeSnippet} lang="sql" filename="example.sql" colorClass="blue" />
                </div>
            )}

            {/* 5. Real-World Application */}
            <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-6 rounded-r-xl">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center mb-4">
                    <Cpu className="w-6 h-6 mr-2 text-emerald-600" />
                    5. Real-World Application
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                    This capability is fundamentally utilized across modern robust systems to <code className="text-cyan-600 font-mono">scale</code> and secure data efficiently.
                </p>
            </div>

            {/* 6. Advantages */}
            <div className="bg-slate-900 text-slate-100 rounded-xl p-6">
                <h3 className="text-xl font-bold flex items-center mb-4">
                    <Check className="w-6 h-6 mr-2 text-emerald-400" />
                    6. Advantages
                </h3>
                <ul className="list-none space-y-2">
                    <li className="flex items-start">
                        <Check className="w-5 h-5 mr-2 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>Enables <code className="text-cyan-400">highly robust</code> architecture.</span>
                    </li>
                    <li className="flex items-start">
                        <Check className="w-5 h-5 mr-2 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>Streamlines data operations and consistency.</span>
                    </li>
                </ul>
            </div>

            {/* 7. Disadvantages / Limitations */}
            <div className="bg-slate-900 text-slate-100 rounded-xl p-6">
                <h3 className="text-xl font-bold flex items-center mb-4">
                    <AlertTriangle className="w-6 h-6 mr-2 text-red-400" />
                    7. Disadvantages / Limitations
                </h3>
                <ul className="list-none space-y-2">
                    <li className="flex items-start">
                        <AlertTriangle className="w-5 h-5 mr-2 text-red-400 flex-shrink-0 mt-0.5" />
                        <span>May require overhead in <code className="text-cyan-400">configuration</code> and maintenance.</span>
                    </li>
                    <li className="flex items-start">
                        <AlertTriangle className="w-5 h-5 mr-2 text-red-400 flex-shrink-0 mt-0.5" />
                        <span>Can become complex to trace errors at scale.</span>
                    </li>
                </ul>
            </div>
        </div>
    );

    const courseData: MySqlTopic[] = [
        {
            id: 'mysql-architecture-workbench',
            title: '1. [Beginner] MySQL Intro & Architecture',
            definition: 'MySQL is a client-server open-source RDBMS. Client utilities communicate over TCP socket port 3306 with the MySQL Database Server daemon.',
            syntax: `# MySQL Connection CLI Blueprint:\n$ mysql -h localhost -P 3306 -u root -p\nmysql> SHOW DATABASES;`,
            codeSnippet: `-- Initialize Database & Table Schema\nCREATE DATABASE IF NOT EXISTS ecom_db;\nUSE ecom_db;`,
            realLifeScenario: 'WordPress, Drupal, and Magento e-commerce CMS engines run on MySQL server databases.',
            content: getTopicContent(
                'MySQL is a client-server open-source RDBMS. Client utilities communicate over TCP socket port 3306 with the MySQL Database Server daemon.',
                'WordPress, Drupal, and Magento e-commerce CMS engines run on MySQL server databases.',
                `graph LR\nClient[MySQL Client] -->|Port 3306| Server[MySQL Server]\nServer --> Engine[Storage Engine]\nEngine --> Disk[(Files)]`,
                `-- Initialize Database & Table Schema\nCREATE DATABASE IF NOT EXISTS ecom_db;\nUSE ecom_db;`
            )
        },
        {
            id: 'mysql-datatypes-table-creation',
            title: '2. [Beginner] Data Types & Table Creation',
            definition: 'MySQL supports numeric types, string types, date types, and UTF8MB4 character sets.',
            syntax: `CREATE TABLE products (\n    product_id BIGINT AUTO_INCREMENT PRIMARY KEY,\n    title VARCHAR(255) NOT NULL\n);`,
            codeSnippet: `CREATE TABLE orders (\n    order_id BIGINT AUTO_INCREMENT PRIMARY KEY,\n    customer_id INT NOT NULL\n) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;`,
            realLifeScenario: 'Financial transaction tables use DECIMAL instead of FLOAT.',
            content: getTopicContent(
                'MySQL supports numeric types, string types, date types, and UTF8MB4 character sets.',
                'Financial transaction tables use DECIMAL instead of FLOAT.',
                `graph TD\nTables --> Rows\nRows --> Columns\nColumns --> DataTypes[INT, VARCHAR, DATETIME]`,
                `CREATE TABLE orders (\n    order_id BIGINT AUTO_INCREMENT PRIMARY KEY,\n    customer_id INT NOT NULL\n) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;`
            )
        },
        {
            id: 'mysql-crud-limit',
            title: '3. [Beginner] CRUD Operations & LIMIT Clause',
            definition: 'Execute Data Manipulation via INSERT INTO, SELECT, UPDATE, DELETE, and pagination using the LIMIT clause.',
            syntax: `SELECT * FROM products ORDER BY id ASC LIMIT 10 OFFSET 20;`,
            codeSnippet: `SELECT customer_id, full_name, email FROM customers LIMIT 5 OFFSET 0;`,
            realLifeScenario: 'Web application tables use LIMIT 20 OFFSET 40 to render paginated catalog result pages.',
            content: getTopicContent(
                'Execute Data Manipulation via INSERT INTO, SELECT, UPDATE, DELETE, and pagination using the LIMIT clause.',
                'Web application tables use LIMIT 20 OFFSET 40 to render paginated catalog result pages.',
                `graph LR\nApp[Web App] -->|SELECT LIMIT| DB[(MySQL)]\nDB -->|Page 1| App\nDB -->|Page 2| App`,
                `SELECT customer_id, full_name, email FROM customers LIMIT 5 OFFSET 0;`
            )
        },
        {
            id: 'mysql-builtin-functions',
            title: '4. [Beginner] Built-in Functions (String, Date, Math)',
            definition: 'MySQL provides built-in scalar functions: String, Date, and Math.',
            syntax: `SELECT CONCAT(first_name, ' ', last_name) AS full_name FROM employees;`,
            codeSnippet: `SELECT customer_id, UPPER(full_name) AS formatted_name FROM customers;`,
            realLifeScenario: 'Formatting timestamps directly in MySQL reduces client-side processing overhead.',
            content: getTopicContent(
                'MySQL provides built-in scalar functions: String, Date, and Math.',
                'Formatting timestamps directly in MySQL reduces client-side processing overhead.',
                `graph TD\nFunc[Functions] --> String[String]\nFunc --> Date[Date]\nFunc --> Math[Math]`,
                `SELECT customer_id, UPPER(full_name) AS formatted_name FROM customers;`
            )
        },
        {
            id: 'mysql-storage-engines-innodb-myisam',
            title: '5. [Intermediate] Storage Engines (InnoDB vs MyISAM vs Memory)',
            definition: 'MySQL supports pluggable storage engines: InnoDB, MyISAM, and Memory.',
            syntax: `SHOW ENGINES;\nALTER TABLE my_table ENGINE = InnoDB;`,
            codeSnippet: `SHOW ENGINE INNODB STATUS;`,
            realLifeScenario: 'E-commerce databases use InnoDB for transactional orders tables to prevent deadlocks.',
            content: getTopicContent(
                'MySQL supports pluggable storage engines: InnoDB, MyISAM, and Memory.',
                'E-commerce databases use InnoDB for transactional orders tables to prevent deadlocks.',
                `graph LR\nEngine[Storage Engine] --> InnoDB[InnoDB - ACID]\nEngine --> MyISAM[MyISAM - Fast Read]\nEngine --> Memory[Memory - RAM]`,
                `SHOW ENGINE INNODB STATUS;`
            )
        },
        {
            id: 'mysql-advanced-joins',
            title: '6. [Intermediate] Advanced Joins & Table Aliases',
            definition: 'Combine relational tables via INNER JOIN, LEFT JOIN, RIGHT JOIN, and CROSS JOIN using explicit table aliases.',
            syntax: `SELECT c.full_name, o.order_id\nFROM customers c\nINNER JOIN orders o ON c.customer_id = o.customer_id;`,
            codeSnippet: `SELECT c.customer_id, c.full_name, COUNT(o.order_id) AS total_orders\nFROM customers c LEFT JOIN orders o ON c.customer_id = o.customer_id\nGROUP BY c.customer_id, c.full_name;`,
            realLifeScenario: 'Using LEFT JOIN ensures customers with zero purchase orders are retained in customer summary reports.',
            content: getTopicContent(
                'Combine relational tables via INNER JOIN, LEFT JOIN, RIGHT JOIN, and CROSS JOIN using explicit table aliases.',
                'Using LEFT JOIN ensures customers with zero purchase orders are retained in customer summary reports.',
                `graph TD\nLeft[Left Table] -->|LEFT JOIN| Right[Right Table]\nLeft -->|INNER JOIN| Right`,
                `SELECT c.customer_id, c.full_name, COUNT(o.order_id) AS total_orders\nFROM customers c LEFT JOIN orders o ON c.customer_id = o.customer_id\nGROUP BY c.customer_id, c.full_name;`
            )
        },
        {
            id: 'mysql-indexing-explain',
            title: '7. [Intermediate] Indexing & Query Optimization (FULLTEXT, EXPLAIN)',
            definition: 'Accelerate search speeds using PRIMARY KEY, UNIQUE, INDEX, and FULLTEXT indexes. Analyze execution plans via EXPLAIN.',
            syntax: `CREATE INDEX idx_customers_status ON customers(status);\nEXPLAIN SELECT * FROM customers WHERE status = 'ACTIVE';`,
            codeSnippet: `EXPLAIN FORMAT=JSON \nSELECT order_id, total_amount \nFROM orders \nWHERE customer_id = 1 AND order_status = 'SHIPPED';`,
            realLifeScenario: 'Running EXPLAIN allows DBAs to verify whether MySQL uses indexes or falls back to slow full table scans.',
            content: getTopicContent(
                'Accelerate search speeds using PRIMARY KEY, UNIQUE, INDEX, and FULLTEXT indexes. Analyze execution plans via EXPLAIN.',
                'Running EXPLAIN allows DBAs to verify whether MySQL uses indexes or falls back to slow full table scans.',
                `graph TD\nQuery[Query] --> Cache[Query Cache]\nCache --> Parser[Parser]\nParser --> Optimizer[Optimizer]\nOptimizer --> Exec[Execution]`,
                `EXPLAIN FORMAT=JSON \nSELECT order_id, total_amount \nFROM orders \nWHERE customer_id = 1 AND order_status = 'SHIPPED';`
            )
        },
        {
            id: 'mysql-transactions-isolation',
            title: '8. [Intermediate] Transactions & Isolation Levels (REPEATABLE READ)',
            definition: 'MySQL InnoDB defaults to REPEATABLE READ transaction isolation, preventing Dirty Reads and Non-Repeatable Reads.',
            syntax: `START TRANSACTION;\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\nCOMMIT;`,
            codeSnippet: `START TRANSACTION;\nUPDATE bank_accounts SET balance = balance - 2500.00 WHERE account_id = 101;\nCOMMIT;`,
            realLifeScenario: 'Financial ledger systems use REPEATABLE READ isolation to guarantee consistent snapshot data.',
            content: getTopicContent(
                'MySQL InnoDB defaults to REPEATABLE READ transaction isolation, preventing Dirty Reads and Non-Repeatable Reads.',
                'Financial ledger systems use REPEATABLE READ isolation to guarantee consistent snapshot data.',
                `graph TD\nTx[Transaction] --> ACID[ACID Properties]\nACID --> Atomicity\nACID --> Consistency\nACID --> Isolation\nACID --> Durability`,
                `START TRANSACTION;\nUPDATE bank_accounts SET balance = balance - 2500.00 WHERE account_id = 101;\nCOMMIT;`
            )
        },
        {
            id: 'mysql-stored-procedures-functions',
            title: '9. [Advanced] Stored Procedures & Functions (DELIMITER, IN/OUT)',
            definition: 'Stored Procedures package server-side routines using DELIMITER, accepting IN, OUT, and INOUT parameters.',
            syntax: `DELIMITER //\nCREATE PROCEDURE GetTotal(IN id INT)\nBEGIN\nEND //\nDELIMITER ;`,
            codeSnippet: `CALL ApplyDiscountToOrder(10092, 0.15);`,
            realLifeScenario: 'Executing stored procedures reduces network roundtrips between backend web app servers and MySQL clusters.',
            content: getTopicContent(
                'Stored Procedures package server-side routines using DELIMITER, accepting IN, OUT, and INOUT parameters.',
                'Executing stored procedures reduces network roundtrips between backend web app servers and MySQL clusters.',
                `graph TD\nClient --> Call[CALL Procedure]\nCall --> SP[Stored Procedure]\nSP --> Queries[Execute Queries]\nQueries --> Client`,
                `CALL ApplyDiscountToOrder(10092, 0.15);`
            )
        },
        {
            id: 'mysql-triggers-views',
            title: '10. [Advanced] Triggers & Views (BEFORE / AFTER)',
            definition: 'Triggers fire automatically on INSERT, UPDATE, or DELETE events. Views create dynamic virtual table abstractions.',
            syntax: `CREATE TRIGGER before_insert BEFORE INSERT ON table_name FOR EACH ROW BEGIN END;`,
            codeSnippet: `CREATE TRIGGER after_update AFTER UPDATE ON customers FOR EACH ROW BEGIN END;`,
            realLifeScenario: 'Validation triggers throw custom exceptions using SIGNAL SQLSTATE to abort illegal database mutations.',
            content: getTopicContent(
                'Triggers fire automatically on INSERT, UPDATE, or DELETE events. Views create dynamic virtual table abstractions.',
                'Validation triggers throw custom exceptions using SIGNAL SQLSTATE to abort illegal database mutations.',
                `graph LR\nInsert[INSERT Event] --> Trigger[BEFORE/AFTER Trigger]\nTrigger --> Action[Action Executed]`,
                `CREATE TRIGGER after_update AFTER UPDATE ON customers FOR EACH ROW BEGIN END;`
            )
        },
        {
            id: 'mysql-fulltext-search',
            title: '11. [Advanced] Full-Text Search (MATCH AGAINST)',
            definition: 'FULLTEXT indexes perform natural language text searching across large text columns using MATCH() AGAINST().',
            syntax: `ALTER TABLE articles ADD FULLTEXT(title, body);`,
            codeSnippet: `SELECT * FROM articles WHERE MATCH(title, body) AGAINST('+MySQL' IN BOOLEAN MODE);`,
            realLifeScenario: 'Content CMS portals use MySQL Full-Text search indexes to calculate relevance scores for user search queries.',
            content: getTopicContent(
                'FULLTEXT indexes perform natural language text searching across large text columns using MATCH() AGAINST().',
                'Content CMS portals use MySQL Full-Text search indexes to calculate relevance scores for user search queries.',
                `graph TD\nUser[User Search] --> FTS[Full-Text Search Index]\nFTS --> Relevance[Relevance Score]\nRelevance --> Results[Matched Results]`,
                `SELECT * FROM articles WHERE MATCH(title, body) AGAINST('+MySQL' IN BOOLEAN MODE);`
            )
        },
        {
            id: 'mysql-user-management-security',
            title: '12. [Advanced] User Management & Security (GRANT, REVOKE)',
            definition: 'Manage database security roles using CREATE USER, GRANT, REVOKE, and FLUSH PRIVILEGES.',
            syntax: `GRANT SELECT, INSERT ON db.* TO 'user'@'%';\nFLUSH PRIVILEGES;`,
            codeSnippet: `CREATE USER 'web_api'@'10.0.0.%' IDENTIFIED BY 'Pass!';`,
            realLifeScenario: 'Production security forbids connecting backend web applications directly as the root administrative superuser.',
            content: getTopicContent(
                'Manage database security roles using CREATE USER, GRANT, REVOKE, and FLUSH PRIVILEGES.',
                'Production security forbids connecting backend web applications directly as the root administrative superuser.',
                `graph LR\nAdmin[Root] -->|GRANT| User[App User]\nUser -->|SELECT, INSERT| DB[(Database)]`,
                `CREATE USER 'web_api'@'10.0.0.%' IDENTIFIED BY 'Pass!';`
            )
        },
        {
            id: 'mysql-backup-recovery-mysqldump',
            title: '13. [Professional] Backup & Recovery (mysqldump & binlog PITR)',
            definition: 'Perform logical backups via mysqldump, enable Binary Logging for Point-In-Time Recovery.',
            syntax: `$ mysqldump -u root -p ecom_db > ecom_backup.sql`,
            codeSnippet: `$ mysqlbinlog --stop-datetime="2026-08-11" binlog.000001 | mysql -u root -p`,
            realLifeScenario: 'Running mysqldump with --single-transaction takes consistent non-blocking database backups.',
            content: getTopicContent(
                'Perform logical backups via mysqldump, enable Binary Logging for Point-In-Time Recovery.',
                'Running mysqldump with --single-transaction takes consistent non-blocking database backups.',
                `graph LR\nDB[(MySQL)] -->|mysqldump| Dump[SQL Dump File]\nDB -->|binlog| PITR[Point-in-Time Recovery]`,
                `# CLI tool snippet (Not strictly SQL)\nmysqlbinlog --stop-datetime="2026-08-11" binlog.000001 | mysql -u root -p`
            )
        },
        {
            id: 'mysql-replication-high-availability',
            title: '14. [Professional] Replication & High Availability (Primary-Replica & GTID)',
            definition: 'MySQL Primary-Replica replication copies binary logs from a Master database server to read-only Replica instances.',
            syntax: `CHANGE REPLICATION SOURCE TO SOURCE_HOST='10.0.0.1';\nSTART REPLICA;`,
            codeSnippet: `SHOW REPLICA STATUS\\G`,
            realLifeScenario: 'High-traffic websites route read queries to 5 read-only replica servers, reserving the Primary database for writes.',
            content: getTopicContent(
                'MySQL Primary-Replica replication copies binary logs from a Master database server to read-only Replica instances.',
                'High-traffic websites route read queries to 5 read-only replica servers, reserving the Primary database for writes.',
                `graph TD\nPrimary[Primary Server] -->|binlog/GTID| Replica1[Replica 1]\nPrimary -->|binlog/GTID| Replica2[Replica 2]`,
                `SHOW REPLICA STATUS\\G`
            )
        },
        {
            id: 'mysql-performance-tuning-mycnf',
            title: '15. [Professional] Performance Tuning & Configuration (my.cnf)',
            definition: 'Tune MySQL server configuration settings inside my.cnf, analyze slow query logs.',
            syntax: `[mysqld]\ninnodb_buffer_pool_size = 8G`,
            codeSnippet: `SHOW GLOBAL STATUS LIKE 'Innodb_buffer_pool_read%';`,
            realLifeScenario: 'Setting innodb_buffer_pool_size to 70-80% of server RAM keeps active database indexes entirely cached in memory.',
            content: getTopicContent(
                'Tune MySQL server configuration settings inside my.cnf, analyze slow query logs.',
                'Setting innodb_buffer_pool_size to 70-80% of server RAM keeps active database indexes entirely cached in memory.',
                `graph LR\nConfig[my.cnf] --> Buffer[Buffer Pool]\nConfig --> Connections[Max Connections]\nConfig --> Logs[Slow Query Log]`,
                `SHOW GLOBAL STATUS LIKE 'Innodb_buffer_pool_read%';`
            )
        },
        {
            id: 'mysql-enterprise-sharding-proxysql',
            title: '16. [Professional] Enterprise Architecture, ProxySQL & AWS RDS',
            definition: 'Scale MySQL to enterprise volumes using ProxySQL query routing, MySQL InnoDB Clusters, and AWS RDS deployments.',
            syntax: `INSERT INTO mysql_query_rules VALUES (1, 1, '^SELECT.*FOR UPDATE', 0);`,
            codeSnippet: `INSERT INTO mysql_query_rules VALUES (2, 1, '^SELECT', 1);`,
            realLifeScenario: 'Enterprise cloud deployments route database traffic through ProxySQL to perform zero-downtime database failovers.',
            content: getTopicContent(
                'Scale MySQL to enterprise volumes using ProxySQL query routing, MySQL InnoDB Clusters, and AWS RDS deployments.',
                'Enterprise cloud deployments route database traffic through ProxySQL to perform zero-downtime database failovers.',
                `graph TD\nApp --> Proxy[ProxySQL]\nProxy -->|Writes| Primary[Primary DB]\nProxy -->|Reads| Replicas[Replica DBs]`,
                `INSERT INTO mysql_query_rules VALUES (2, 1, '^SELECT', 1);`
            )
        }
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
                {activeTopic.content}
            </div>
        </CoursePageLayout>
    );
};

export default MySqlCoursePage;
