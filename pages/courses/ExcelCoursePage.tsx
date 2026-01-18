import React, { useState } from 'react';
import CoursePageLayout from '../../components/CoursePageLayout';
import { Sheet, Table, BookOpen, Lightbulb, Code } from 'lucide-react';

const ExcelCoursePage = () => {
    const [activeTopicIndex, setActiveTopicIndex] = useState(0);

    const courseData = [
        {
            id: 'excel-intro',
            title: 'Excel Intro',
            definition: 'Microsoft Excel is a spreadsheet program used to record and analyze numerical data.',
            example: 'Think of it as a digital ledger where you can keep track of expenses, grades, or any other list of numbers.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Excel is a spreadsheet developed by Microsoft for Windows, macOS, Android and iOS. It features calculation, graphing tools, pivot tables, and a macro programming language called Visual Basic for Applications (VBA).
                    </p>
                </>
            ),
            codeSnippet: null
        },
        {
            id: 'excel-get-started',
            title: 'Excel Get Started',
            definition: 'Excel is a powerful tool for managing and analyzing data.',
            example: 'Opening a blank workbook is like opening a fresh notebook.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        When you open Excel, you will be greeted by the Start Screen. From here, you can create a new workbook, choose a template, or access your recently edited workbooks.
                    </p>
                </>
            ),
            codeSnippet: null
        },
        {
            id: 'excel-formulas',
            title: 'Excel Formulas',
            definition: 'Formulas are equations that perform calculations on values in your worksheet.',
            example: 'Adding two numbers together: =5+5',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        All formulas in Excel must begin with an equal sign (=). This tells Excel that the following characters constitute a formula.
                    </p>
                </>
            ),
            codeSnippet: `=A1+A2`
        },
        {
            id: 'excel-functions',
            title: 'Excel Functions',
            definition: 'A function is a predefined formula that performs calculations using specific values in a particular order.',
            example: 'Using SUM to add a whole column of numbers instead of typing A1+A2+A3...',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Excel includes many common functions that can be used to quickly find the sum, average, count, maximum value, and minimum value for a range of cells.
                    </p>
                </>
            ),
            codeSnippet: `=SUM(A1:A10)`
        },
        {
            id: 'excel-if-function',
            title: 'Excel IF Function',
            definition: 'The IF function returns one value if a condition is true and another value if it\'s false.',
            example: 'If the score is greater than 50, say "Pass", otherwise say "Fail".',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Syntax: <code>IF(logical_test, value_if_true, [value_if_false])</code>
                    </p>
                </>
            ),
            codeSnippet: `=IF(A1>10, "Over 10", "10 or less")`
        },
        {
            id: 'excel-vlookup',
            title: 'Excel VLOOKUP',
            definition: 'VLOOKUP stands for Vertical Lookup. It is a function that makes Excel search for a certain value in a column (the so called \'table array\'), in order to return a value from a different column in the same row.',
            example: 'Looking up a product ID to find its price.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Syntax: <code>VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])</code>
                    </p>
                </>
            ),
            codeSnippet: `=VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])`
        },
        {
            id: 'excel-charts',
            title: 'Excel Charts',
            definition: 'Charts are visual representations of data.',
            example: 'A pie chart showing how you spent your monthly budget.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Excel provides many types of charts to help you display data in ways that are meaningful to your audience.
                    </p>
                </>
            ),
            codeSnippet: null
        },
        {
            id: 'excel-pivot-tables',
            title: 'Excel Pivot Tables',
            definition: 'A PivotTable is a powerful tool to calculate, summarize, and analyze data that lets you see comparisons, patterns, and trends in your data.',
            example: 'Taking a huge list of sales data and summarizing it by region and product type.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        PivotTables are particularly useful for large datasets where you need to quickly reorganize and summarize data.
                    </p>
                </>
            ),
            codeSnippet: null
        }
    ];

    const topics = courseData.map(topic => topic.title);
    const activeTopic = courseData[activeTopicIndex];

    const CodeBlock = ({ code, lang = 'excel' }: { code: string, lang?: string }) => (
        <div className="bg-[#1e1e1e] text-gray-200 p-6 rounded-2xl font-mono text-sm mb-6 overflow-x-auto shadow-xl border border-gray-800">
            <div className="flex items-center space-x-2 mb-4 border-b border-gray-700 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-xs text-gray-500 font-sans uppercase">{lang}</span>
            </div>
            <pre className="leading-relaxed text-green-300">{code}</pre>
        </div>
    );

    return (
        <CoursePageLayout
            title="Excel Tutorial"
            description="Microsoft Excel is a spreadsheet developed by Microsoft for Windows, macOS, Android and iOS."
            topics={topics}
            icon={Sheet}
            colorClass="green"
            activeTopicIndex={activeTopicIndex}
            onTopicClick={setActiveTopicIndex}
        >
            <div className="space-y-8">
                {/* Definition Section */}
                <div className="bg-green-50 dark:bg-green-900/10 border-l-4 border-green-600 p-6 rounded-r-xl">
                    <h3 className="text-lg font-bold text-green-800 dark:text-green-300 mb-2 flex items-center">
                        <BookOpen className="w-5 h-5 mr-2" />
                        Definition
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {activeTopic.definition}
                    </p>
                </div>

                {/* Real-time Example Section */}
                <div className="bg-blue-50 dark:bg-blue-900/10 border-l-4 border-blue-600 p-6 rounded-r-xl">
                    <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
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
                                <Code className="w-6 h-6 mr-2 text-green-600" />
                                Formula Example
                            </h3>
                            <CodeBlock code={activeTopic.codeSnippet} />
                        </div>
                    )}
                </div>
            </div>
        </CoursePageLayout>
    );
};

export default ExcelCoursePage;
