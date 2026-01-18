import React, { useState } from 'react';
import CoursePageLayout from '../../components/CoursePageLayout';
import { BarChart, Code, BookOpen, Lightbulb } from 'lucide-react';

const RCoursePage = () => {
    const [activeTopicIndex, setActiveTopicIndex] = useState(0);

    const courseData = [
        {
            id: 'r-intro',
            title: 'R Intro',
            definition: 'R is a programming language and free software environment for statistical computing and graphics supported by the R Core Team and the R Foundation for Statistical Computing.',
            example: 'R is widely used among statisticians and data miners.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        R is an implementation of the S programming language combined with lexical scoping semantics inspired by Scheme.
                    </p>
                </>
            ),
            codeSnippet: `"Hello World!"`
        },
        {
            id: 'r-syntax',
            title: 'R Syntax',
            definition: 'To output text in R, use single or double quotes.',
            example: '"Hello World!"',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        To output numbers, just type the number.
                    </p>
                </>
            ),
            codeSnippet: `"Hello World!"
5 + 5`
        },
        {
            id: 'r-variables',
            title: 'R Variables',
            definition: 'In R, a variable is created the moment you assign a value to it. To assign a value to a variable, use the <- sign.',
            example: 'name <- "John"',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Variables are containers for storing data values.
                    </p>
                </>
            ),
            codeSnippet: `name <- "John"
age <- 40`
        },
        {
            id: 'r-data-types',
            title: 'R Data Types',
            definition: 'Basic data types in R can be divided into the following types: numeric, integer, complex, character, logical.',
            example: 'numeric (10.5), integer (1000L), complex (9i + 3), character ("R is exciting"), logical (TRUE).',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Variables can store data of different types, and different types can do different things.
                    </p>
                </>
            ),
            codeSnippet: `# numeric
x <- 10.5
class(x)

# integer
x <- 1000L
class(x)

# complex
x <- 9i + 3
class(x)

# character/string
x <- "R is exciting"
class(x)

# logical/boolean
x <- TRUE
class(x)`
        },
        {
            id: 'r-if-else',
            title: 'R If...Else',
            definition: 'An if statement runs a block of code if a condition is TRUE.',
            example: 'if (b > a) { ... }',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        R supports the usual logical conditions from mathematics.
                    </p>
                </>
            ),
            codeSnippet: `a <- 33
b <- 200

if (b > a) {
  print("b is greater than a")
}`
        },
        {
            id: 'r-loops',
            title: 'R Loops',
            definition: 'R supports while loops and for loops.',
            example: 'for (x in 1:10) { print(x) }',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Loops can execute a block of code as long as a specified condition is reached.
                    </p>
                </>
            ),
            codeSnippet: `i <- 1
while (i < 6) {
  print(i)
  i <- i + 1
}

for (x in 1:10) {
  print(x)
}`
        },
        {
            id: 'r-functions',
            title: 'R Functions',
            definition: 'A function is a block of code which only runs when it is called.',
            example: 'my_function <- function() { ... }',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        You can pass data, known as parameters, into a function.
                    </p>
                </>
            ),
            codeSnippet: `my_function <- function() {
  print("Hello World!")
}

my_function()`
        },
        {
            id: 'r-vectors',
            title: 'R Vectors',
            definition: 'A vector is simply a list of items that are of the same type.',
            example: 'fruits <- c("banana", "apple", "orange")',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        To combine the list of items to a vector, use the c() function and separate the items by a comma.
                    </p>
                </>
            ),
            codeSnippet: `fruits <- c("banana", "apple", "orange")
print(fruits)`
        },
        {
            id: 'r-data-frames',
            title: 'R Data Frames',
            definition: 'Data Frames are data displayed in a format as a table.',
            example: 'Data_Frame <- data.frame(...)',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Data Frames can have different types of data inside it. While the first column can be character, the second and third can be numeric or logical.
                    </p>
                </>
            ),
            codeSnippet: `# Create a data frame
Data_Frame <- data.frame (
  Training = c("Strength", "Stamina", "Other"),
  Pulse = c(100, 150, 120),
  Duration = c(60, 30, 45)
)

# Print the data frame
Data_Frame`
        }
    ];

    const topics = courseData.map(topic => topic.title);
    const activeTopic = courseData[activeTopicIndex];

    const CodeBlock = ({ code, lang = 'r' }: { code: string, lang?: string }) => (
        <div className="bg-[#1e1e1e] text-gray-200 p-6 rounded-2xl font-mono text-sm mb-6 overflow-x-auto shadow-xl border border-gray-800">
            <div className="flex items-center space-x-2 mb-4 border-b border-gray-700 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-xs text-gray-500 font-sans">script.R</span>
            </div>
            <pre className="leading-relaxed text-blue-300">{code}</pre>
        </div>
    );

    return (
        <CoursePageLayout
            title="R Tutorial"
            description="R is a programming language and software environment for statistical computing and graphics."
            topics={topics}
            icon={BarChart}
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
                                <Code className="w-6 h-6 mr-2 text-blue-400" />
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

export default RCoursePage;
