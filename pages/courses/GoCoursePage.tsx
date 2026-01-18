import React, { useState } from 'react';
import CoursePageLayout from '../../components/CoursePageLayout';
import { Terminal, Code, BookOpen, Lightbulb } from 'lucide-react';

const GoCoursePage = () => {
    const [activeTopicIndex, setActiveTopicIndex] = useState(0);

    const courseData = [
        {
            id: 'go-intro',
            title: 'Go Intro',
            definition: 'Go is a cross-platform, open source programming language. Go can be used to create high-performance applications.',
            example: 'Go is like a race car: stripped down, fast, and efficient.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Go was developed at Google in 2007 by Robert Griesemer, Rob Pike, and Ken Thompson. It is a statically typed, compiled language.
                    </p>
                </>
            ),
            codeSnippet: null
        },
        {
            id: 'go-get-started',
            title: 'Go Get Started',
            definition: 'To write Go code, you can use any text editor. You then compile the source code into an executable.',
            example: 'Writing a simple "Hello World" program.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Go files end with the extension .go.
                    </p>
                </>
            ),
            codeSnippet: `package main
import "fmt"

func main() {
  fmt.Println("Hello World!")
}`
        },
        {
            id: 'go-syntax',
            title: 'Go Syntax',
            definition: 'A Go file consists of the following parts: Package declaration, Import packages, Functions, Statements and Expressions.',
            example: 'Every Go program starts with a package declaration.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        The main function is the entry point of the executable program.
                    </p>
                </>
            ),
            codeSnippet: null
        },
        {
            id: 'go-variables',
            title: 'Go Variables',
            definition: 'In Go, there are different types of variables, for example: int, float32, string, bool.',
            example: 'var name string = "John"',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Variables can be declared using the var keyword or the := syntax.
                    </p>
                </>
            ),
            codeSnippet: `var student1 string = "John" //type is string
var student2 = "Jane"        //type is inferred
x := 2                       //type is inferred`
        },
        {
            id: 'go-constants',
            title: 'Go Constants',
            definition: 'If a variable should have a fixed value that cannot be changed, you can use the const keyword.',
            example: 'const PI = 3.14',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Constants can be character, string, boolean, or numeric values.
                    </p>
                </>
            ),
            codeSnippet: `const PI = 3.14`
        },
        {
            id: 'go-arrays',
            title: 'Go Arrays',
            definition: 'Arrays are used to store multiple values of the same type in a single variable.',
            example: 'A list of car brands.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        In Go, arrays have a fixed length.
                    </p>
                </>
            ),
            codeSnippet: `var cars = [4]string{"Volvo", "BMW", "Ford", "Mazda"}`
        },
        {
            id: 'go-slices',
            title: 'Go Slices',
            definition: 'Slices are similar to arrays, but are more powerful and flexible. Like arrays, slices are also used to store multiple values of the same type in a single variable.',
            example: 'A dynamic list of numbers.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        However, unlike arrays, the length of a slice can grow and shrink as you see fit.
                    </p>
                </>
            ),
            codeSnippet: `myslice := []int{1,2,3}`
        },
        {
            id: 'go-conditions',
            title: 'Go Conditions',
            definition: 'Go supports the usual logical conditions from mathematics.',
            example: 'If x > y, do something.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        You can use if, else if, else, and switch statements.
                    </p>
                </>
            ),
            codeSnippet: `if 20 > 18 {
  fmt.Println("20 is greater than 18")
}`
        },
        {
            id: 'go-loops',
            title: 'Go Loops',
            definition: 'The for loop is the only loop available in Go.',
            example: 'Repeating a task 5 times.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Go does not have while or do...while loops. The for loop can be used to simulate them.
                    </p>
                </>
            ),
            codeSnippet: `for i:=0; i < 5; i++ {
  fmt.Println(i)
}`
        },
        {
            id: 'go-functions',
            title: 'Go Functions',
            definition: 'A function is a block of code which only runs when it is called.',
            example: 'A function to print a message.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        You can pass data, known as parameters, into a function.
                    </p>
                </>
            ),
            codeSnippet: `func myMessage() {
  fmt.Println("I just got executed!")
}

func main() {
  myMessage()
}`
        },
        {
            id: 'go-struct',
            title: 'Go Struct',
            definition: 'A struct (short for structure) is a used to create a collection of members of different data types, into a single variable.',
            example: 'A Person struct with name, age, and job.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Arrays and Slices are useful for storing data of the same type, but structs are useful for grouping data of different types.
                    </p>
                </>
            ),
            codeSnippet: `type Person struct {
  name string
  age int
  job string
  salary int
}`
        }
    ];

    const topics = courseData.map(topic => topic.title);
    const activeTopic = courseData[activeTopicIndex];

    const CodeBlock = ({ code, lang = 'go' }: { code: string, lang?: string }) => (
        <div className="bg-[#1e1e1e] text-gray-200 p-6 rounded-2xl font-mono text-sm mb-6 overflow-x-auto shadow-xl border border-gray-800">
            <div className="flex items-center space-x-2 mb-4 border-b border-gray-700 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-xs text-gray-500 font-sans uppercase">{lang}</span>
            </div>
            <pre className="leading-relaxed text-cyan-300">{code}</pre>
        </div>
    );

    return (
        <CoursePageLayout
            title="Go Tutorial"
            description="Go is an open source programming language supported by Google. Go is fast, statically typed, and compiled."
            topics={topics}
            icon={Terminal}
            colorClass="cyan"
            activeTopicIndex={activeTopicIndex}
            onTopicClick={setActiveTopicIndex}
        >
            <div className="space-y-8">
                {/* Definition Section */}
                <div className="bg-cyan-50 dark:bg-cyan-900/10 border-l-4 border-cyan-600 p-6 rounded-r-xl">
                    <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
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
                                <Code className="w-6 h-6 mr-2 text-cyan-600" />
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

export default GoCoursePage;
