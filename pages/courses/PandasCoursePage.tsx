import React, { useState } from 'react';
import CoursePageLayout from '../../components/CoursePageLayout';
import { Table, Code, BookOpen, Lightbulb } from 'lucide-react';

const PandasCoursePage = () => {
    const [activeTopicIndex, setActiveTopicIndex] = useState(0);

    const courseData = [
        {
            id: 'pandas-intro',
            title: 'Pandas Intro',
            definition: 'Pandas is a Python library used for working with data sets. It has functions for analyzing, cleaning, exploring, and manipulating data.',
            example: 'Pandas allows us to analyze big data and make conclusions based on statistical theories.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Pandas is a Python library. Pandas is used to analyze data.
                    </p>
                </>
            ),
            codeSnippet: null
        },
        {
            id: 'pandas-getting-started',
            title: 'Pandas Getting Started',
            definition: 'To start using Pandas, you need to install it and import it.',
            example: 'import pandas as pd',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Pandas is usually imported under the pd alias.
                    </p>
                </>
            ),
            codeSnippet: `import pandas as pd

mydataset = {
  'cars': ["BMW", "Volvo", "Ford"],
  'passings': [3, 7, 2]
}

myvar = pd.DataFrame(mydataset)
print(myvar)`
        },
        {
            id: 'pandas-series',
            title: 'Pandas Series',
            definition: 'A Pandas Series is like a column in a table. It is a one-dimensional array holding data of any type.',
            example: 'pd.Series([1, 7, 2])',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        If nothing else is specified, the values are labeled with their index number.
                    </p>
                </>
            ),
            codeSnippet: `import pandas as pd

a = [1, 7, 2]
myvar = pd.Series(a)
print(myvar)`
        },
        {
            id: 'pandas-dataframes',
            title: 'Pandas DataFrames',
            definition: 'A Pandas DataFrame is a 2 dimensional data structure, like a 2 dimensional array, or a table with rows and columns.',
            example: 'pd.DataFrame(data)',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Data sets in Pandas are usually multi-dimensional tables, called DataFrames.
                    </p>
                </>
            ),
            codeSnippet: `import pandas as pd

data = {
  "calories": [420, 380, 390],
  "duration": [50, 40, 45]
}

df = pd.DataFrame(data)
print(df)`
        },
        {
            id: 'pandas-read-csv',
            title: 'Pandas Read CSV',
            definition: 'A simple way to store big data sets is to use CSV files (comma separated files).',
            example: 'pd.read_csv(\'data.csv\')',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        CSV files contain plain text and is a well know format that can be read by everyone including Pandas.
                    </p>
                </>
            ),
            codeSnippet: `import pandas as pd

df = pd.read_csv('data.csv')
print(df.to_string())`
        },
        {
            id: 'pandas-read-json',
            title: 'Pandas Read JSON',
            definition: 'Big data sets are often stored, or extracted as JSON.',
            example: 'pd.read_json(\'data.json\')',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        JSON is plain text, but has the format of an object, and is well known in the world of programming, including Pandas.
                    </p>
                </>
            ),
            codeSnippet: `import pandas as pd

df = pd.read_json('data.json')
print(df.to_string())`
        },
        {
            id: 'pandas-analyzing-data',
            title: 'Pandas Analyzing Data',
            definition: 'One of the most used method for getting a quick overview of the DataFrame, is the head() method.',
            example: 'df.head(10)',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        The head() method returns the headers and a specified number of rows, starting from the top.
                    </p>
                </>
            ),
            codeSnippet: `import pandas as pd

df = pd.read_csv('data.csv')
print(df.head(10))`
        },
        {
            id: 'pandas-cleaning-empty-cells',
            title: 'Pandas Cleaning Empty Cells',
            definition: 'Empty cells can potentially give you a wrong result when you analyze data.',
            example: 'df.dropna() removes rows with empty cells.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        One way to deal with empty cells is to remove rows that contain empty cells.
                    </p>
                </>
            ),
            codeSnippet: `import pandas as pd

df = pd.read_csv('data.csv')
new_df = df.dropna()
print(new_df.to_string())`
        },
        {
            id: 'pandas-removing-duplicates',
            title: 'Pandas Removing Duplicates',
            definition: 'Duplicate rows are rows that have been registered more than one time.',
            example: 'df.drop_duplicates(inplace = True)',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        To discover duplicates, we can use the duplicated() method.
                    </p>
                </>
            ),
            codeSnippet: `df.drop_duplicates(inplace = True)`
        },
        {
            id: 'pandas-plotting',
            title: 'Pandas Plotting',
            definition: 'Pandas uses the plot() method to create diagrams.',
            example: 'df.plot()',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        We can use Pythons matplotlib library to visualize the results.
                    </p>
                </>
            ),
            codeSnippet: `import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv('data.csv')
df.plot()
plt.show()`
        }
    ];

    const topics = courseData.map(topic => topic.title);
    const activeTopic = courseData[activeTopicIndex];

    const CodeBlock = ({ code, lang = 'python' }: { code: string, lang?: string }) => (
        <div className="bg-[#1e1e1e] text-gray-200 p-6 rounded-2xl font-mono text-sm mb-6 overflow-x-auto shadow-xl border border-gray-800">
            <div className="flex items-center space-x-2 mb-4 border-b border-gray-700 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-xs text-gray-500 font-sans">main.py</span>
            </div>
            <pre className="leading-relaxed text-purple-300">{code}</pre>
        </div>
    );

    return (
        <CoursePageLayout
            title="Pandas Tutorial"
            description="Pandas is a Python library used for working with data sets. It has functions for analyzing, cleaning, exploring, and manipulating data."
            topics={topics}
            icon={Table}
            colorClass="purple"
            activeTopicIndex={activeTopicIndex}
            onTopicClick={setActiveTopicIndex}
        >
            <div className="space-y-8">
                {/* Definition Section */}
                <div className="bg-purple-50 dark:bg-purple-900/10 border-l-4 border-purple-600 p-6 rounded-r-xl">
                    <h3 className="text-lg font-bold text-purple-800 dark:text-purple-300 mb-2 flex items-center">
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
                                <Code className="w-6 h-6 mr-2 text-purple-600" />
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

export default PandasCoursePage;
