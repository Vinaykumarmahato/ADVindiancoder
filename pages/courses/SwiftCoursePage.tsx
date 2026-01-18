import React, { useState } from 'react';
import CoursePageLayout from '../../components/CoursePageLayout';
import { Smartphone, Code, BookOpen, Lightbulb } from 'lucide-react';

const SwiftCoursePage = () => {
    const [activeTopicIndex, setActiveTopicIndex] = useState(0);

    const courseData = [
        {
            id: 'swift-intro',
            title: 'Swift Intro',
            definition: 'Swift is a powerful and intuitive programming language for iOS, iPadOS, macOS, tvOS, and watchOS.',
            example: 'Swift is designed to be safe, fast, and expressive.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Writing Swift code is interactive and fun, the syntax is concise yet expressive, and Swift includes modern features developers love.
                    </p>
                </>
            ),
            codeSnippet: null
        },
        {
            id: 'swift-get-started',
            title: 'Swift Get Started',
            definition: 'To start using Swift, you need to install Xcode from the Mac App Store.',
            example: 'Xcode includes everything you need to create amazing apps.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Once you have Xcode installed, you can create a new playground to experiment with Swift code.
                    </p>
                </>
            ),
            codeSnippet: `print("Hello, World!")`
        },
        {
            id: 'swift-variables',
            title: 'Swift Variables',
            definition: 'Use var to make a variable, and let to make a constant.',
            example: 'var myVariable = 42',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        A constant’s value doesn’t need to be known at compile time, but you must assign it a value exactly once.
                    </p>
                </>
            ),
            codeSnippet: `var myVariable = 42
myVariable = 50
let myConstant = 42`
        },
        {
            id: 'swift-data-types',
            title: 'Swift Data Types',
            definition: 'Swift provides its own versions of all fundamental C and Objective-C types, including Int, Double, Float, Bool, and String.',
            example: 'let implicitInteger = 70',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Swift also provides powerful versions of the three primary collection types, Array, Set, and Dictionary.
                    </p>
                </>
            ),
            codeSnippet: null
        },
        {
            id: 'swift-conditionals',
            title: 'Swift Conditionals',
            definition: 'Use if and switch to make conditionals.',
            example: 'Checking if a score is passing.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        You can use if and switch to make conditionals, and use for-in, while, and repeat-while to make loops.
                    </p>
                </>
            ),
            codeSnippet: `let individualScores = [75, 43, 103, 87, 12]
var teamScore = 0
for score in individualScores {
    if score > 50 {
        teamScore += 3
    } else {
        teamScore += 1
    }
}
print(teamScore)`
        },
        {
            id: 'swift-functions',
            title: 'Swift Functions',
            definition: 'Use func to declare a function. Call a function by following its name with a list of arguments in parentheses.',
            example: 'A function that greets a person.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Use -&gt; to separate the parameter names and types from the function’s return type.
                    </p>
                </>
            ),
            codeSnippet: `func greet(person: String, day: String) -> String {
    return "Hello \(person), today is \(day)."
}
greet(person: "Bob", day: "Tuesday")`
        },
        {
            id: 'swift-classes',
            title: 'Swift Classes',
            definition: 'Classes in Swift are building blocks of flexible constructs.',
            example: 'Defining a Shape class.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        A class can inherit methods, properties, and other characteristics from another class.
                    </p>
                </>
            ),
            codeSnippet: `class Shape {
    var numberOfSides = 0
    func simpleDescription() -> String {
        return "A shape with \(numberOfSides) sides."
    }
}`
        }
    ];

    const topics = courseData.map(topic => topic.title);
    const activeTopic = courseData[activeTopicIndex];

    const CodeBlock = ({ code, lang = 'swift' }: { code: string, lang?: string }) => (
        <div className="bg-[#1e1e1e] text-gray-200 p-6 rounded-2xl font-mono text-sm mb-6 overflow-x-auto shadow-xl border border-gray-800">
            <div className="flex items-center space-x-2 mb-4 border-b border-gray-700 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-xs text-gray-500 font-sans uppercase">{lang}</span>
            </div>
            <pre className="leading-relaxed text-orange-300">{code}</pre>
        </div>
    );

    return (
        <CoursePageLayout
            title="Swift Tutorial"
            description="Swift is a powerful and intuitive programming language for iOS, iPadOS, macOS, tvOS, and watchOS."
            topics={topics}
            icon={Smartphone}
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

export default SwiftCoursePage;
