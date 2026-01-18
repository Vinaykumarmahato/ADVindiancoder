import React, { useState } from 'react';
import CoursePageLayout from '../../components/CoursePageLayout';
import { Smartphone, Code, BookOpen, Lightbulb } from 'lucide-react';

const KotlinCoursePage = () => {
    const [activeTopicIndex, setActiveTopicIndex] = useState(0);

    const courseData = [
        {
            id: 'kotlin-intro',
            title: 'Kotlin Intro',
            definition: 'Kotlin is a modern, trending programming language. Kotlin is open source, free to use, and runs on different platforms (Windows, Mac, Linux, Raspberry Pi, etc.).',
            example: 'Kotlin is concise and interoperable with Java.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Kotlin is designed to be fully interoperable with Java, and the JVM version of Kotlin's standard library depends on the Java Class Library.
                    </p>
                </>
            ),
            codeSnippet: null
        },
        {
            id: 'kotlin-get-started',
            title: 'Kotlin Get Started',
            definition: 'To start using Kotlin, you need an IDE (Integrated Development Environment). IntelliJ IDEA is the recommended IDE.',
            example: 'Writing your first Kotlin program.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        You can also use the online Kotlin playground to try out Kotlin code without installing anything.
                    </p>
                </>
            ),
            codeSnippet: `fun main() {
  println("Hello World")
}`
        },
        {
            id: 'kotlin-syntax',
            title: 'Kotlin Syntax',
            definition: 'The fun keyword is used to declare a function. The main function is the entry point of every Kotlin application.',
            example: 'fun main() { ... }',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Kotlin code is usually organized into packages.
                    </p>
                </>
            ),
            codeSnippet: null
        },
        {
            id: 'kotlin-output',
            title: 'Kotlin Output',
            definition: 'The println() function is used to output values/print text.',
            example: 'Printing "Hello World!" to the console.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        You can also use the print() function, which does not insert a new line at the end of the output.
                    </p>
                </>
            ),
            codeSnippet: `println("Hello World!")
print("I am learning Kotlin. ")
print("It is awesome!")`
        },
        {
            id: 'kotlin-variables',
            title: 'Kotlin Variables',
            definition: 'Variables are containers for storing data values. To create a variable, use var or val.',
            example: 'var name = "John"',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        The difference between var and val is that variables declared with the var keyword can be changed/modified, while val variables cannot.
                    </p>
                </>
            ),
            codeSnippet: `var name = "John"
val birthyear = 1975`
        },
        {
            id: 'kotlin-data-types',
            title: 'Kotlin Data Types',
            definition: 'In Kotlin, the type of a variable is decided by its value.',
            example: 'val myNum = 5 // Int',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        However, you can learn to specify the type if you want.
                    </p>
                </>
            ),
            codeSnippet: `val myNum = 5             // Int
val myDoubleNum = 5.99    // Double
val myLetter = 'D'        // Char
val myBoolean = true      // Boolean
val myText = "Hello"      // String`
        },
        {
            id: 'kotlin-if-else',
            title: 'Kotlin If...Else',
            definition: 'Kotlin supports the usual logical conditions from mathematics.',
            example: 'if (20 > 18) { ... }',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        You can also use if as an expression.
                    </p>
                </>
            ),
            codeSnippet: `if (20 > 18) {
  println("20 is greater than 18")
}`
        },
        {
            id: 'kotlin-when',
            title: 'Kotlin When',
            definition: 'Instead of writing many if..else expressions, you can use the when expression, which is much easier to read.',
            example: 'Selecting a day of the week.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        It is similar to the switch statement in Java.
                    </p>
                </>
            ),
            codeSnippet: `val day = 4

val result = when (day) {
  1 -> "Monday"
  2 -> "Tuesday"
  3 -> "Wednesday"
  4 -> "Thursday"
  5 -> "Friday"
  6 -> "Saturday"
  7 -> "Sunday"
  else -> "Invalid day."
}
println(result)`
        },
        {
            id: 'kotlin-arrays',
            title: 'Kotlin Arrays',
            definition: 'Arrays are used to store multiple values in a single variable.',
            example: 'val cars = arrayOf("Volvo", "BMW")',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        To create an array, use the arrayOf() function.
                    </p>
                </>
            ),
            codeSnippet: `val cars = arrayOf("Volvo", "BMW", "Ford", "Mazda")
println(cars[0])`
        },
        {
            id: 'kotlin-for-loop',
            title: 'Kotlin For Loop',
            definition: 'Often when you work with arrays, you need to loop through all of the elements.',
            example: 'Looping through an array of cars.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        You can use the for loop to iterate through arrays, ranges, and other collections.
                    </p>
                </>
            ),
            codeSnippet: `val cars = arrayOf("Volvo", "BMW", "Ford", "Mazda")
for (x in cars) {
  println(x)
}`
        },
        {
            id: 'kotlin-functions',
            title: 'Kotlin Functions',
            definition: 'A function is a block of code which only runs when it is called.',
            example: 'fun myFunction() { ... }',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        You can pass data, known as parameters, into a function.
                    </p>
                </>
            ),
            codeSnippet: `fun myFunction() {
  println("I just got executed!")
}

fun main() {
  myFunction()
}`
        },
        {
            id: 'kotlin-classesobjects',
            title: 'Kotlin Classes/Objects',
            definition: 'Everything in Kotlin is associated with classes and objects, along with its properties and functions.',
            example: 'Creating a Car class.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        A class is a blueprint for objects.
                    </p>
                </>
            ),
            codeSnippet: `class Car {
  var brand = ""
  var model = ""
  var year = 0
}

fun main() {
  val c1 = Car()
  c1.brand = "Ford"
  c1.model = "Mustang"
  c1.year = 1969
}`
        }
    ];

    const topics = courseData.map(topic => topic.title);
    const activeTopic = courseData[activeTopicIndex];

    const CodeBlock = ({ code, lang = 'kotlin' }: { code: string, lang?: string }) => (
        <div className="bg-[#1e1e1e] text-gray-200 p-6 rounded-2xl font-mono text-sm mb-6 overflow-x-auto shadow-xl border border-gray-800">
            <div className="flex items-center space-x-2 mb-4 border-b border-gray-700 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-xs text-gray-500 font-sans uppercase">{lang}</span>
            </div>
            <pre className="leading-relaxed text-purple-300">{code}</pre>
        </div>
    );

    return (
        <CoursePageLayout
            title="Kotlin Tutorial"
            description="Kotlin is a modern, trending programming language. Kotlin is easy to learn, especially if you already know Java."
            topics={topics}
            icon={Smartphone}
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

export default KotlinCoursePage;
