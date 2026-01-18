import React, { useState } from 'react';
import CoursePageLayout from '../../components/CoursePageLayout';
import { Sigma, Code, BookOpen, Lightbulb } from 'lucide-react';

const NumpyCoursePage = () => {
    const [activeTopicIndex, setActiveTopicIndex] = useState(0);

    const courseData = [
        {
            id: 'numpy-intro',
            title: 'NumPy Intro',
            definition: 'NumPy is a Python library used for working with arrays. NumPy is short for "Numerical Python".',
            example: 'NumPy is faster than Python lists.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        It also has functions for working in domain of linear algebra, fourier transform, and matrices.
                    </p>
                </>
            ),
            codeSnippet: null
        },
        {
            id: 'numpy-getting-started',
            title: 'NumPy Getting Started',
            definition: 'To start using NumPy, you need to install it and import it.',
            example: 'import numpy as np',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        NumPy is usually imported under the np alias.
                    </p>
                </>
            ),
            codeSnippet: `import numpy as np

arr = np.array([1, 2, 3, 4, 5])
print(arr)
print(type(arr))`
        },
        {
            id: 'numpy-creating-arrays',
            title: 'NumPy Creating Arrays',
            definition: 'NumPy is used to work with arrays. The array object in NumPy is called ndarray.',
            example: 'np.array([1, 2, 3])',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        We can create a NumPy ndarray object by using the array() function.
                    </p>
                </>
            ),
            codeSnippet: `import numpy as np

arr = np.array([1, 2, 3, 4, 5])
print(arr)`
        },
        {
            id: 'numpy-array-indexing',
            title: 'NumPy Array Indexing',
            definition: 'Array indexing is the same as accessing an array element.',
            example: 'arr[0] accesses the first element.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        You can access an array element by referring to its index number.
                    </p>
                </>
            ),
            codeSnippet: `import numpy as np

arr = np.array([1, 2, 3, 4])
print(arr[0])`
        },
        {
            id: 'numpy-array-slicing',
            title: 'NumPy Array Slicing',
            definition: 'Slicing in python means taking elements from one given index to another given index.',
            example: 'arr[1:5]',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        We pass slice instead of index like this: [start:end].
                    </p>
                </>
            ),
            codeSnippet: `import numpy as np

arr = np.array([1, 2, 3, 4, 5, 6, 7])
print(arr[1:5])`
        },
        {
            id: 'numpy-data-types',
            title: 'NumPy Data Types',
            definition: 'NumPy has some extra data types, and refer to data types with one character, like i for integers, u for unsigned integers etc.',
            example: 'dtype=\'S\' creates string array.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Below is a list of all data types in NumPy and the characters used to represent them.
                    </p>
                </>
            ),
            codeSnippet: `import numpy as np

arr = np.array([1, 2, 3, 4], dtype='S')
print(arr)
print(arr.dtype)`
        },
        {
            id: 'numpy-array-shape',
            title: 'NumPy Array Shape',
            definition: 'The shape of an array is the number of elements in each dimension.',
            example: '(2, 4) means 2 rows and 4 columns.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        NumPy arrays have an attribute called shape that returns a tuple with each index having the number of corresponding elements.
                    </p>
                </>
            ),
            codeSnippet: `import numpy as np

arr = np.array([[1, 2, 3, 4], [5, 6, 7, 8]])
print(arr.shape)`
        },
        {
            id: 'numpy-array-reshape',
            title: 'NumPy Array Reshape',
            definition: 'Reshaping means changing the shape of an array.',
            example: 'arr.reshape(4, 3)',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        By reshaping we can add or remove dimensions or change number of elements in each dimension.
                    </p>
                </>
            ),
            codeSnippet: `import numpy as np

arr = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
newarr = arr.reshape(4, 3)
print(newarr)`
        },
        {
            id: 'numpy-array-iterating',
            title: 'NumPy Array Iterating',
            definition: 'Iterating means going through elements one by one.',
            example: 'for x in arr: print(x)',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        As we deal with multi-dimensional arrays in numpy, we can do this using basic for loop of python.
                    </p>
                </>
            ),
            codeSnippet: `import numpy as np

arr = np.array([1, 2, 3])
for x in arr:
  print(x)`
        },
        {
            id: 'numpy-array-join',
            title: 'NumPy Array Join',
            definition: 'Joining means putting contents of two or more arrays in a single array.',
            example: 'np.concatenate((arr1, arr2))',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        In SQL we join tables based on a key, whereas in NumPy we join arrays by axes.
                    </p>
                </>
            ),
            codeSnippet: `import numpy as np

arr1 = np.array([1, 2, 3])
arr2 = np.array([4, 5, 6])
arr = np.concatenate((arr1, arr2))
print(arr)`
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
            <pre className="leading-relaxed text-blue-300">{code}</pre>
        </div>
    );

    return (
        <CoursePageLayout
            title="NumPy Tutorial"
            description="NumPy is a Python library used for working with arrays. It also has functions for working in domain of linear algebra, fourier transform, and matrices."
            topics={topics}
            icon={Sigma}
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
                                <Code className="w-6 h-6 mr-2 text-blue-600" />
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

export default NumpyCoursePage;
