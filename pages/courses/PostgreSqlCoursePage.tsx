import React, { useState } from 'react';
import CoursePageLayout from '../../components/CoursePageLayout';
import { Database, Code, BookOpen, Lightbulb } from 'lucide-react';

const PostgreSqlCoursePage = () => {
    const [activeTopicIndex, setActiveTopicIndex] = useState(0);

    const courseData = [
        {
            id: 'postgresql-intro',
            title: 'PostgreSQL Intro',
            definition: 'PostgreSQL is a powerful, open source object-relational database system with over 30 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance.',
            example: 'PostgreSQL is used by Apple, Fujitsu, Red Hat, Cisco, Juniper Network, etc.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        PostgreSQL runs on all major operating systems, including Linux, UNIX (AIX, BSD, HP-UX, SGI IRIX, Mac OS X, Solaris, Tru64), and Windows.
                    </p>
                </>
            ),
            codeSnippet: null
        },
        {
            id: 'postgresql-create-db',
            title: 'PostgreSQL Create DB',
            definition: 'To create a database in PostgreSQL, you use the CREATE DATABASE statement.',
            example: 'CREATE DATABASE testdb;',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Make sure you have the necessary privileges to create a database.
                    </p>
                </>
            ),
            codeSnippet: `CREATE DATABASE testdb;`
        },
        {
            id: 'postgresql-create-table',
            title: 'PostgreSQL Create Table',
            definition: 'The CREATE TABLE statement is used to create a new table in a database.',
            example: 'CREATE TABLE cars (brand VARCHAR(255), ...);',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        You specify the name of the table and the columns it should contain.
                    </p>
                </>
            ),
            codeSnippet: `CREATE TABLE cars (
  brand VARCHAR(255),
  model VARCHAR(255),
  year INT
);`
        },
        {
            id: 'postgresql-insert',
            title: 'PostgreSQL Insert',
            definition: 'The INSERT INTO statement is used to insert new records in a table.',
            example: 'INSERT INTO cars (brand, model, year) VALUES (\'Ford\', \'Mustang\', 1964);',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        You can insert data into specific columns or all columns.
                    </p>
                </>
            ),
            codeSnippet: `INSERT INTO cars (brand, model, year)
VALUES ('Ford', 'Mustang', 1964);`
        },
        {
            id: 'postgresql-select',
            title: 'PostgreSQL Select',
            definition: 'The SELECT statement is used to select data from a database.',
            example: 'SELECT * FROM cars;',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        The data returned is stored in a result table, called the result-set.
                    </p>
                </>
            ),
            codeSnippet: `SELECT * FROM cars;`
        },
        {
            id: 'postgresql-update',
            title: 'PostgreSQL Update',
            definition: 'The UPDATE statement is used to modify the existing records in a table.',
            example: 'UPDATE cars SET year = 1970 WHERE brand = \'Ford\';',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Be careful when updating records. If you omit the WHERE clause, ALL records will be updated!
                    </p>
                </>
            ),
            codeSnippet: `UPDATE cars
SET year = 1970
WHERE brand = 'Ford';`
        },
        {
            id: 'postgresql-delete',
            title: 'PostgreSQL Delete',
            definition: 'The DELETE statement is used to delete existing records in a table.',
            example: 'DELETE FROM cars WHERE brand = \'Ford\';',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Be careful when deleting records in a table! Notice the WHERE clause in the DELETE statement. The WHERE clause specifies which record(s) should be deleted. If you omit the WHERE clause, all records in the table will be deleted!
                    </p>
                </>
            ),
            codeSnippet: `DELETE FROM cars
WHERE brand = 'Ford';`
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
            <pre className="leading-relaxed text-blue-300">{code}</pre>
        </div>
    );

    return (
        <CoursePageLayout
            title="PostgreSQL Tutorial"
            description="PostgreSQL is a powerful, open source object-relational database system."
            topics={topics}
            icon={Database}
            colorClass="blue"
            activeTopicIndex={activeTopicIndex}
            onTopicClick={setActiveTopicIndex}
        >
            <div className="space-y-8">
                {/* Definition Section */}
                <div className="bg-blue-50 dark:bg-blue-900/10 border-l-4 border-blue-600 p-6 rounded-r-xl">
                    <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
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
                                <Code className="w-6 h-6 mr-2 text-blue-700" />
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

export default PostgreSqlCoursePage;
