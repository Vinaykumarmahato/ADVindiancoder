import React, { useState } from 'react';
import CoursePageLayout from '../../components/CoursePageLayout';
import { Activity, Code, BookOpen, Lightbulb } from 'lucide-react';

const ScipyCoursePage = () => {
    const [activeTopicIndex, setActiveTopicIndex] = useState(0);

    const courseData = [
        {
            id: 'scipy-intro',
            title: 'SciPy Intro',
            definition: 'SciPy is a scientific computation library that uses NumPy underneath. SciPy stands for Scientific Python.',
            example: 'SciPy provides more utility functions for optimization, stats and signal processing.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        SciPy uses NumPy arrays as the basic data structure, and comes with modules for various common tasks in scientific programming.
                    </p>
                </>
            ),
            codeSnippet: null
        },
        {
            id: 'scipy-getting-started',
            title: 'SciPy Getting Started',
            definition: 'To start using SciPy, you need to install it and import it.',
            example: 'from scipy import constants',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Import SciPy modules as needed.
                    </p>
                </>
            ),
            codeSnippet: `from scipy import constants
print(constants.liter)`
        },
        {
            id: 'scipy-constants',
            title: 'SciPy Constants',
            definition: 'SciPy offers a set of mathematical constants.',
            example: 'constants.pi',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        SciPy offers a set of mathematical constants, one of them is liter.
                    </p>
                </>
            ),
            codeSnippet: `from scipy import constants

print(constants.pi)`
        },
        {
            id: 'scipy-optimizers',
            title: 'SciPy Optimizers',
            definition: 'Optimizers are a set of procedures defined in SciPy that either find the minimum value of a function, or the root of an equation.',
            example: 'Finding the root of x + cos(x).',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        SciPy can use various algorithms to optimize functions.
                    </p>
                </>
            ),
            codeSnippet: `from scipy.optimize import root
from math import cos

def eqn(x):
  return x + cos(x)

myroot = root(eqn, 0)
print(myroot.x)`
        },
        {
            id: 'scipy-sparse-data',
            title: 'SciPy Sparse Data',
            definition: 'Sparse data is data that has mostly unused elements (elements that don\'t carry any information).',
            example: 'CSR Matrix.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        SciPy has a module, scipy.sparse that provides functions to deal with sparse data.
                    </p>
                </>
            ),
            codeSnippet: `import numpy as np
from scipy.sparse import csr_matrix

arr = np.array([0, 0, 0, 0, 0, 1, 1, 0, 2])
print(csr_matrix(arr))`
        },
        {
            id: 'scipy-graphs',
            title: 'SciPy Graphs',
            definition: 'SciPy provides a module named scipy.sparse.csgraph for working with graph data structures.',
            example: 'Finding connected components.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Adjacency matrices are used to represent graphs.
                    </p>
                </>
            ),
            codeSnippet: `import numpy as np
from scipy.sparse.csgraph import connected_components
from scipy.sparse import csr_matrix

arr = np.array([
  [0, 1, 2],
  [1, 0, 0],
  [2, 0, 0]
])

newarr = csr_matrix(arr)
print(connected_components(newarr))`
        },
        {
            id: 'scipy-interpolation',
            title: 'SciPy Interpolation',
            definition: 'Interpolation is a method for generating points between given points.',
            example: '1D Interpolation.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        SciPy provides a module, scipy.interpolate that has many functions for interpolation.
                    </p>
                </>
            ),
            codeSnippet: `from scipy.interpolate import interp1d
import numpy as np

xs = np.arange(10)
ys = 2*xs + 1

interp_func = interp1d(xs, ys)
newarr = interp_func(np.arange(2.1, 3, 0.1))
print(newarr)`
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
            title="SciPy Tutorial"
            description="SciPy is a scientific computation library that uses NumPy underneath. It provides more utility functions for optimization, stats and signal processing."
            topics={topics}
            icon={Activity}
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
                                <Code className="w-6 h-6 mr-2 text-blue-500" />
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

export default ScipyCoursePage;
