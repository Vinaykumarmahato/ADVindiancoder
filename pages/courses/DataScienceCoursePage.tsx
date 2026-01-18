import React, { useState } from 'react';
import CoursePageLayout from '../../components/CoursePageLayout';
import { Database, Code, BookOpen, Lightbulb } from 'lucide-react';

const DataScienceCoursePage = () => {
    const [activeTopicIndex, setActiveTopicIndex] = useState(0);

    const courseData = [
        {
            id: 'ds-intro',
            title: 'DS Intro',
            definition: 'Data Science is a field of study that combines domain expertise, programming skills, and knowledge of mathematics and statistics to extract meaningful insights from data.',
            example: 'Predicting customer churn based on usage patterns.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Data Science practitioners apply machine learning algorithms to numbers, text, images, video, audio, and more to produce artificial intelligence (AI) systems to perform tasks that ordinarily require human intelligence.
                    </p>
                </>
            ),
            codeSnippet: null
        },
        {
            id: 'ds-dataframe',
            title: 'DS DataFrame',
            definition: 'A DataFrame is a structured representation of data.',
            example: 'A table with rows and columns.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Pandas DataFrame is a 2-dimensional labeled data structure with columns of potentially different types.
                    </p>
                </>
            ),
            codeSnippet: `import pandas as pd

d = {'col1': [1, 2], 'col2': [3, 4]}
df = pd.DataFrame(data=d)
print(df)`
        },
        {
            id: 'ds-mean-median-mode',
            title: 'DS Mean Median Mode',
            definition: 'Mean, Median, and Mode are techniques used to find the central tendency of a dataset.',
            example: 'Mean is the average value.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Mean: The average value. Median: The mid point value. Mode: The most common value.
                    </p>
                </>
            ),
            codeSnippet: `import numpy as np
from scipy import stats

speed = [99,86,87,88,111,86,103,87,94,78,77,85,86]

x = np.mean(speed)
y = np.median(speed)
z = stats.mode(speed)

print(x)
print(y)
print(z)`
        },
        {
            id: 'ds-standard-deviation',
            title: 'DS Standard Deviation',
            definition: 'Standard deviation is a number that describes how spread out the values are.',
            example: 'A low standard deviation means that most of the numbers are close to the mean (average) value.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        A high standard deviation means that the values are spread out over a wider range.
                    </p>
                </>
            ),
            codeSnippet: `import numpy as np

speed = [86,87,88,86,87,85,86]
x = np.std(speed)
print(x)`
        },
        {
            id: 'ds-linear-regression',
            title: 'DS Linear Regression',
            definition: 'Linear regression uses the relationship between the data-points to draw a straight line through all them.',
            example: 'Predicting car speed based on age.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        This line can be used to predict future values.
                    </p>
                </>
            ),
            codeSnippet: `import matplotlib.pyplot as plt
from scipy import stats

x = [5,7,8,7,2,17,2,9,4,11,12,9,6]
y = [99,86,87,88,111,86,103,87,94,78,77,85,86]

slope, intercept, r, p, std_err = stats.linregress(x, y)

def myfunc(x):
  return slope * x + intercept

mymodel = list(map(myfunc, x))

plt.scatter(x, y)
plt.plot(x, mymodel)
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
            <pre className="leading-relaxed text-green-300">{code}</pre>
        </div>
    );

    return (
        <CoursePageLayout
            title="Data Science Tutorial"
            description="Data Science is about explaining the past and predicting the future by exploring and analyzing data."
            topics={topics}
            icon={Database}
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
                                <Code className="w-6 h-6 mr-2 text-green-600" />
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

export default DataScienceCoursePage;
