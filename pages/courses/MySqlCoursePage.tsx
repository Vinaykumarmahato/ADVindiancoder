import React, { useState } from 'react';
import CoursePageLayout from '../../components/CoursePageLayout';
import { Database, Code, BookOpen, Lightbulb } from 'lucide-react';

const MySqlCoursePage = () => {
    const [activeTopicIndex, setActiveTopicIndex] = useState(0);

    const courseData = [
        {
            id: 'mysql-intro',
            title: 'MySQL Intro',
            definition: 'MySQL is the most popular Open Source Relational SQL Database Management System.',
            example: 'MySQL is used by Facebook, Google, Adobe, Alcatel Lucent and Zappos.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        MySQL is one of the best RDBMS being used for developing various web-based software applications.
                    </p>
                </>
            ),
            codeSnippet: null
        },
        {
            id: 'mysql-create-db',
            title: 'MySQL Create DB',
            definition: 'The CREATE DATABASE statement is used to create a new SQL database.',
            example: 'CREATE DATABASE testDB;',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Tip: Make sure you have admin privilege before creating any database. Once a database is created, you can check it in the list of databases with the following SQL command: SHOW DATABASES;
                    </p>
                </>
            ),
            codeSnippet: `CREATE DATABASE testDB;`
        },
        {
            id: 'mysql-create-table',
            title: 'MySQL Create Table',
            definition: 'The CREATE TABLE statement is used to create a new table in a database.',
            example: 'CREATE TABLE Persons (PersonID int, LastName varchar(255), ...);',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        The column parameters specify the names of the columns of the table.
                    </p>
                </>
            ),
            codeSnippet: `CREATE TABLE Persons (
    PersonID int,
    LastName varchar(255),
    FirstName varchar(255),
    Address varchar(255),
    City varchar(255)
);`
        },
        {
            id: 'mysql-primary-key',
            title: 'MySQL Primary Key',
            definition: 'The PRIMARY KEY constraint uniquely identifies each record in a table.',
            example: 'PRIMARY KEY (ID)',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Primary keys must contain UNIQUE values, and cannot contain NULL values. A table can have only ONE primary key; and in the table, this primary key can consist of single or multiple columns (fields).
                    </p>
                </>
            ),
            codeSnippet: `CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    PRIMARY KEY (ID)
);`
        },
        {
            id: 'mysql-auto-increment',
            title: 'MySQL Auto Increment',
            definition: 'Auto-increment allows a unique number to be generated automatically when a new record is inserted into a table.',
            example: 'AUTO_INCREMENT',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Often this is the primary key field that we would like to be created automatically every time a new record is inserted.
                    </p>
                </>
            ),
            codeSnippet: `CREATE TABLE Persons (
    PersonID int NOT NULL AUTO_INCREMENT,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    PRIMARY KEY (PersonID)
);`
        },
        {
            id: 'mysql-dates',
            title: 'MySQL Dates',
            definition: 'MySQL comes with the following data types for storing a date or a date/time value in the database.',
            example: 'DATE, DATETIME, TIMESTAMP, YEAR.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        DATE - format YYYY-MM-DD. DATETIME - format: YYYY-MM-DD HH:MI:SS. TIMESTAMP - format: YYYY-MM-DD HH:MI:SS. YEAR - format YYYY or YY.
                    </p>
                </>
            ),
            codeSnippet: `SELECT * FROM Orders WHERE OrderDate='2008-11-11'`
        },
        {
            id: 'mysql-views',
            title: 'MySQL Views',
            definition: 'In SQL, a view is a virtual table based on the result-set of an SQL statement.',
            example: 'CREATE VIEW [Brazil Customers] AS SELECT CustomerName, ContactName FROM Customers WHERE Country = \'Brazil\';',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        A view contains rows and columns, just like a real table. The fields in a view are fields from one or more real tables in the database.
                    </p>
                </>
            ),
            codeSnippet: `CREATE VIEW [Brazil Customers] AS
SELECT CustomerName, ContactName
FROM Customers
WHERE Country = 'Brazil';`
        }
    ];

    const topics = courseData.map(topic => topic.title);
    const activeTopic = courseData[activeTopicIndex];

    const CodeBlock = ({ code, lang = 'sql' }: { code: string, lang?: string }) => (
        <div className="bg-[#1e1e1e] text-gray-200 p-6 rounded-2xl font-mono text-sm mb-6 overflow-x-auto shadow-xl border border-gray-800">
            <div className="flex items-center space-x-2 mb-4 border-b border-gray-700 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-xs text-gray-500 font-sans">query.sql</span>
            </div>
            <pre className="leading-relaxed text-orange-300">{code}</pre>
        </div>
    );

    return (
        <CoursePageLayout
            title="MySQL Tutorial"
            description="MySQL is a widely used relational database management system (RDBMS)."
            topics={topics}
            icon={Database}
            colorClass="orange"
            activeTopicIndex={activeTopicIndex}
            onTopicClick={setActiveTopicIndex}
        >
            <div className="space-y-8">
                {/* Definition Section */}
                <div className="bg-orange-50 dark:bg-orange-900/10 border-l-4 border-orange-600 p-6 rounded-r-xl">
                    <h3 className="text-lg font-bold text-orange-800 dark:text-orange-300 mb-2 flex items-center">
                        <BookOpen className="w-5 h-5 mr-2" />
                        Definition
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {activeTopic.definition}
                    </p>
                </div>

                {/* Real-time Example Section */}
                <div className="bg-yellow-50 dark:bg-yellow-900/10 border-l-4 border-yellow-600 p-6 rounded-r-xl">
                    <h3 className="text-lg font-bold text-yellow-800 dark:text-yellow-300 mb-2 flex items-center">
                        <Lightbulb className="w-5 h-5 mr-2" />
                        Real-time Example
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {activeTopic.example}
                    </p>
                </div>

                {/* Main Content & Code */}
                <div className="prose dark:prose-invert max-w-none">
                    {activeTopic.content}

                    {activeTopic.codeSnippet && (
                        <div className="mt-8">
                            <h3 className="text-xl font-bold mb-4 flex items-center text-gray-800 dark:text-white">
                                <Code className="w-6 h-6 mr-2 text-orange-600" />
                                Code Example
                            </h3>
                            <CodeBlock code={activeTopic.codeSnippet} />
                        </div>
                    )}
                </div>
            </div>
        </CoursePageLayout>
    );
};

export default MySqlCoursePage;
