import React, { useState } from 'react';
import CoursePageLayout from '../../components/CoursePageLayout';
import { Terminal, Code, BookOpen, Lightbulb } from 'lucide-react';

const CppCoursePage = () => {
    const [activeTopicIndex, setActiveTopicIndex] = useState(0);

    const courseData = [
        {
            id: 'cpp-intro',
            title: 'C++ Intro',
            definition: 'C++ is a cross-platform language that can be used to create high-performance applications.',
            example: 'C++ is used in video games, high-performance web servers, and operating systems.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        C++ was developed by Bjarne Stroustrup, as an extension to the C language. C++ gives programmers a high level of control over system resources and memory.
                    </p>
                </>
            ),
            codeSnippet: null
        },
        {
            id: 'cpp-get-started',
            title: 'C++ Get Started',
            definition: 'To start using C++, you need two things: A text editor and a compiler.',
            example: 'Using an IDE like Visual Studio or Code::Blocks.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        A text editor, like Notepad, to write C++ code, and a compiler, like GCC, to translate the C++ code into language that the computer will understand.
                    </p>
                </>
            ),
            codeSnippet: `#include <iostream>
using namespace std;

int main() {
  cout << "Hello World!";
  return 0;
}`
        },
        {
            id: 'cpp-syntax',
            title: 'C++ Syntax',
            definition: 'C++ syntax is similar to C, but with some additions like classes and objects.',
            example: 'using namespace std; allows you to use names for objects and variables from the standard library.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Line 1: <code>#include &lt;iostream&gt;</code> is a header file library that lets us work with input and output objects.
                    </p>
                </>
            ),
            codeSnippet: null
        },
        {
            id: 'cpp-output',
            title: 'C++ Output',
            definition: 'The cout object, together with the << operator, is used to output values/print text.',
            example: 'cout << "Hello World!";',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        You can add as many <code>cout</code> objects as you want. However, note that it does not insert a new line at the end of the output.
                    </p>
                </>
            ),
            codeSnippet: `cout << "Hello World!";
cout << "I am learning C++";`
        },
        {
            id: 'cpp-variables',
            title: 'C++ Variables',
            definition: 'Variables are containers for storing data values.',
            example: 'int myNum = 15;',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        In C++, there are different types of variables (defined with different keywords), for example: int, double, char, string, bool.
                    </p>
                </>
            ),
            codeSnippet: `int myNum = 15;
double myFloatNum = 5.99;
char myLetter = 'D';
string myText = "Hello";
bool myBoolean = true;`
        },
        {
            id: 'cpp-user-input',
            title: 'C++ User Input',
            definition: 'cin is a predefined variable that reads data from the keyboard with the extraction operator (>>).',
            example: 'cin >> x;',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        In the following example, the user can input a number, which is stored in the variable x. Then we print the value of x.
                    </p>
                </>
            ),
            codeSnippet: `int x; 
cout << "Type a number: "; // Type a number and press enter
cin >> x; // Get user input from the keyboard
cout << "Your number is: " << x; // Display the input value`
        },
        {
            id: 'cpp-conditions',
            title: 'C++ Conditions',
            definition: 'C++ supports the usual logical conditions from mathematics.',
            example: 'if (20 > 18) { ... }',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        You can use these conditions to perform different actions for different decisions.
                    </p>
                </>
            ),
            codeSnippet: `if (20 > 18) {
  cout << "20 is greater than 18";
}`
        },
        {
            id: 'cpp-while-loop',
            title: 'C++ While Loop',
            definition: 'The while loop loops through a block of code as long as a specified condition is true.',
            example: 'while (i < 5) { ... }',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        The loop will continue to run as long as the condition is true.
                    </p>
                </>
            ),
            codeSnippet: `int i = 0;
while (i < 5) {
  cout << i << "\\n";
  i++;
}`
        },
        {
            id: 'cpp-arrays',
            title: 'C++ Arrays',
            definition: 'Arrays are used to store multiple values in a single variable.',
            example: 'string cars[4] = {"Volvo", "BMW", "Ford", "Mazda"};',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        To declare an array, define the variable type, specify the name of the array followed by square brackets and specify the number of elements it should store.
                    </p>
                </>
            ),
            codeSnippet: `string cars[4] = {"Volvo", "BMW", "Ford", "Mazda"};
cout << cars[0];`
        },
        {
            id: 'cpp-pointers',
            title: 'C++ Pointers',
            definition: 'A pointer is a variable that stores the memory address as its value.',
            example: 'string* ptr = &food;',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        A pointer variable points to a data type (like int or string) of the same type, and is created with the * operator.
                    </p>
                </>
            ),
            codeSnippet: `string food = "Pizza";  // A food variable of type string
string* ptr = &food;    // A pointer variable, with the name ptr, that stores the address of food

cout << food << "\\n";
cout << &food << "\\n";
cout << ptr << "\\n";`
        },
        {
            id: 'cpp-functions',
            title: 'C++ Functions',
            definition: 'A function is a block of code which only runs when it is called.',
            example: 'void myFunction() { ... }',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        You can pass data, known as parameters, into a function.
                    </p>
                </>
            ),
            codeSnippet: `void myFunction() {
  cout << "I just got executed!";
}

int main() {
  myFunction();
  return 0;
}`
        },
        {
            id: 'cpp-classesobjects',
            title: 'C++ Classes/Objects',
            definition: 'C++ is an object-oriented programming language. Everything in C++ is associated with classes and objects.',
            example: 'class MyClass { ... }',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        A Class is like an object constructor, or a "blueprint" for creating objects.
                    </p>
                </>
            ),
            codeSnippet: `class MyClass {       // The class
  public:             // Access specifier
    int myNum;        // Attribute (int variable)
    string myString;  // Attribute (string variable)
};

int main() {
  MyClass myObj;      // Create an object of MyClass

  // Access attributes and set values
  myObj.myNum = 15; 
  myObj.myString = "Some text";

  // Print attribute values
  cout << myObj.myNum << "\\n";
  cout << myObj.myString;
  return 0;
}`
        },
        {
            id: 'cpp-inheritance',
            title: 'C++ Inheritance',
            definition: 'In C++, it is possible to inherit attributes and methods from one class to another.',
            example: 'class Car: public Vehicle { ... }',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        We group the "inheritance concept" into two categories: derived class (child) and base class (parent).
                    </p>
                </>
            ),
            codeSnippet: `// Base class
class Vehicle {
  public:
    string brand = "Ford";
    void honk() {
      cout << "Tuut, tuut! \\n" ;
    }
};

// Derived class
class Car: public Vehicle {
  public:
    string model = "Mustang";
};`
        }
    ];

    const topics = courseData.map(topic => topic.title);
    const activeTopic = courseData[activeTopicIndex];

    const CodeBlock = ({ code, lang = 'cpp' }: { code: string, lang?: string }) => (
        <div className="bg-[#1e1e1e] text-gray-200 p-6 rounded-2xl font-mono text-sm mb-6 overflow-x-auto shadow-xl border border-gray-800">
            <div className="flex items-center space-x-2 mb-4 border-b border-gray-700 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-xs text-gray-500 font-sans">main.cpp</span>
            </div>
            <pre className="leading-relaxed text-blue-300">{code}</pre>
        </div>
    );

    return (
        <CoursePageLayout
            title="C++ Tutorial"
            description="C++ is a cross-platform language that can be used to create high-performance applications."
            topics={topics}
            icon={Terminal}
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
                <div className="bg-green-50 dark:bg-green-900/10 border-l-4 border-green-600 p-6 rounded-r-xl">
                    <h3 className="text-lg font-bold text-green-800 dark:text-green-300 mb-2 flex items-center">
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

export default CppCoursePage;
