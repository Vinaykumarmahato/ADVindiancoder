import React, { useState } from 'react';
import CoursePageLayout from '../../components/CoursePageLayout';
import { Database, Code, BookOpen, Lightbulb } from 'lucide-react';

const SqlCoursePage = () => {
    const [activeTopicIndex, setActiveTopicIndex] = useState(0);

    const courseData = [
        {
            id: 'sql-intro',
            title: 'SQL Intro',
            definition: 'SQL stands for Structured Query Language. SQL lets you access and manipulate databases.',
            example: 'SQL became a standard of the American National Standards Institute (ANSI) in 1986.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        SQL can execute queries against a database, retrieve data from a database, insert records in a database, update records in a database, delete records from a database, create new databases, create new tables in a database, create stored procedures in a database, create views in a database, set permissions on tables, procedures, and views.
                    </p>
                </>
            ),
            codeSnippet: null
        },
        {
            id: 'sql-select',
            title: 'SQL Select',
            definition: 'The SELECT statement is used to select data from a database.',
            example: 'SELECT * FROM Customers;',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        The data returned is stored in a result table, called the result-set.
                    </p>
                </>
            ),
            codeSnippet: `SELECT CustomerName, City FROM Customers;`
        },
        {
            id: 'sql-where',
            title: 'SQL Where',
            definition: 'The WHERE clause is used to filter records.',
            example: 'SELECT * FROM Customers WHERE Country=\'Mexico\';',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        It is used to extract only those records that fulfill a specified condition.
                    </p>
                </>
            ),
            codeSnippet: `SELECT * FROM Customers
WHERE Country='Mexico';`
        },
        {
            id: 'sql-insert-into',
            title: 'SQL Insert Into',
            definition: 'The INSERT INTO statement is used to insert new records in a table.',
            example: 'INSERT INTO Customers (CustomerName, City) VALUES (\'Cardinal\', \'Stavanger\');',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        It is possible to write the INSERT INTO statement in two ways.
                    </p>
                </>
            ),
            codeSnippet: `INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)
VALUES ('Cardinal', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006', 'Norway');`
        },
        {
            id: 'sql-update',
            title: 'SQL Update',
            definition: 'The UPDATE statement is used to modify the existing records in a table.',
            example: 'UPDATE Customers SET ContactName=\'Alfred Schmidt\' WHERE CustomerID=1;',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Be careful when updating records. If you omit the WHERE clause, ALL records will be updated!
                    </p>
                </>
            ),
            codeSnippet: `UPDATE Customers
SET ContactName = 'Alfred Schmidt', City= 'Frankfurt'
WHERE CustomerID = 1;`
        },
        {
            id: 'sql-delete',
            title: 'SQL Delete',
            definition: 'The DELETE statement is used to delete existing records in a table.',
            example: 'DELETE FROM Customers WHERE CustomerName=\'Alfreds Futterkiste\';',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Be careful when deleting records in a table! Notice the WHERE clause in the DELETE statement. The WHERE clause specifies which record(s) should be deleted. If you omit the WHERE clause, all records in the table will be deleted!
                    </p>
                </>
            ),
            codeSnippet: `DELETE FROM Customers WHERE CustomerName='Alfreds Futterkiste';`
        },
        {
            id: 'sql-joins',
            title: 'SQL Joins',
            definition: 'A JOIN clause is used to combine rows from two or more tables, based on a related column between them.',
            example: 'INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Here are the different types of the JOINs in SQL:
                        (INNER) JOIN: Returns records that have matching values in both tables.
                        LEFT (OUTER) JOIN: Returns all records from the left table, and the matched records from the right table.
                        RIGHT (OUTER) JOIN: Returns all records from the right table, and the matched records from the left table.
                        FULL (OUTER) JOIN: Returns all records when there is a match in either left or right table.
                    </p>
                </>
            ),
            codeSnippet: `SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate
FROM Orders
INNER JOIN Customers ON Orders.CustomerID=Customers.CustomerID;`
        },
        {
            id: 'sql-create-table',
            title: 'SQL Create Table',
            definition: 'The CREATE TABLE statement is used to create a new table in a database.',
            example: 'CREATE TABLE Persons (PersonID int, LastName varchar(255), ...);',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        The column parameters specify the names of the columns of the table. The datatype parameter specifies the type of data the column can hold (e.g. varchar, integer, date, etc.).
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
            id: 'sql-drop-table',
            title: 'SQL Drop Table',
            definition: 'The DROP TABLE statement is used to drop an existing table in a database.',
            example: 'DROP TABLE Shippers;',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Be careful before dropping a table. Deleting a table will result in loss of complete information stored in the table!
                    </p>
                </>
            ),
            codeSnippet: `DROP TABLE Shippers;`
        },
        {
            id: 'sql-alter-table',
            title: 'SQL Alter Table',
            definition: 'The ALTER TABLE statement is used to add, delete, or modify columns in an existing table.',
            example: 'ALTER TABLE Customers ADD Email varchar(255);',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        The ALTER TABLE statement is also used to add and drop various constraints on an existing table.
                    </p>
                </>
            ),
            codeSnippet: `ALTER TABLE Customers
ADD Email varchar(255);`
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
            title="SQL Tutorial"
            description="SQL is a standard language for storing, manipulating and retrieving data in databases."
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

export default SqlCoursePage;
