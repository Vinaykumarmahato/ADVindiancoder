import React, { useState } from 'react';
import CoursePageLayout from '../../components/CoursePageLayout';
import { Hash, Code, BookOpen, Lightbulb } from 'lucide-react';

const CSharpCoursePage = () => {
    const [activeTopicIndex, setActiveTopicIndex] = useState(0);

    const courseData = [
        {
            id: 'csharp-intro',
            title: 'C# Intro',
            definition: 'C# is a modern, object-oriented, and type-safe programming language.',
            example: 'C# is used for web apps, desktop apps, mobile apps, games and more.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        C# enables developers to build many types of secure and robust applications that run in .NET.
                    </p>
                </>
            ),
            codeSnippet: null
        },
        {
            id: 'csharp-get-started',
            title: 'C# Get Started',
            definition: 'To start using C#, you need to install Visual Studio.',
            example: 'Creating a new Console Application in Visual Studio.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        C# is an object-oriented programming language.
                    </p>
                </>
            ),
            codeSnippet: `using System;

namespace HelloWorld
{
  class Program
  {
    static void Main(string[] args)
    {
      Console.WriteLine("Hello World!");
    }
  }
}`
        },
        {
            id: 'csharp-syntax',
            title: 'C# Syntax',
            definition: 'C# syntax is the set of rules that defines how a C# program is written and interpreted.',
            example: 'using System; is a directive to use the System namespace.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Line 1: <code>using System</code> means that we can use classes from the System namespace.
                    </p>
                </>
            ),
            codeSnippet: null
        },
        {
            id: 'csharp-output',
            title: 'C# Output',
            definition: 'To output values or print text in C#, you can use the WriteLine() method.',
            example: 'Console.WriteLine("Hello World!");',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        <code>Console.WriteLine()</code> prints text to the console and adds a new line at the end.
                    </p>
                </>
            ),
            codeSnippet: `Console.WriteLine("Hello World!");
Console.WriteLine("I am learning C#");
Console.WriteLine("It is awesome!");`
        },
        {
            id: 'csharp-variables',
            title: 'C# Variables',
            definition: 'Variables are containers for storing data values.',
            example: 'int myNum = 5;',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        In C#, there are different types of variables (defined with different keywords), for example: int, double, char, string, bool.
                    </p>
                </>
            ),
            codeSnippet: `int myNum = 5;               // Integer (whole number)
double myDoubleNum = 5.99D;  // Floating point number
char myLetter = 'D';         // Character
bool myBool = true;          // Boolean
string myText = "Hello";     // String`
        },
        {
            id: 'csharp-user-input',
            title: 'C# User Input',
            definition: 'Console.ReadLine() is used to get user input.',
            example: 'string userName = Console.ReadLine();',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        The <code>Console.ReadLine()</code> method returns a string. Therefore, you cannot get information from another data type, such as int.
                    </p>
                </>
            ),
            codeSnippet: `Console.WriteLine("Enter username:");
string userName = Console.ReadLine();
Console.WriteLine("Username is: " + userName);`
        },
        {
            id: 'csharp-operators',
            title: 'C# Operators',
            definition: 'Operators are used to perform operations on variables and values.',
            example: '+, -, *, /',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        C# divides the operators into the following groups: Arithmetic, Assignment, Comparison, Logical.
                    </p>
                </>
            ),
            codeSnippet: `int sum1 = 100 + 50;        // 150 (100 + 50)
int sum2 = sum1 + 250;      // 400 (150 + 250)
int sum3 = sum2 + sum2;     // 800 (400 + 400)`
        },
        {
            id: 'csharp-ifelse',
            title: 'C# If...Else',
            definition: 'C# supports the usual logical conditions from mathematics.',
            example: 'if (20 > 18) { ... }',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        You can use these conditions to perform different actions for different decisions.
                    </p>
                </>
            ),
            codeSnippet: `if (20 > 18) 
{
  Console.WriteLine("20 is greater than 18");
}`
        },
        {
            id: 'csharp-switch',
            title: 'C# Switch',
            definition: 'Use the switch statement to select one of many code blocks to be executed.',
            example: 'switch(day) { case 1: ... break; }',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        This is how it works: The switch expression is evaluated once. The value of the expression is compared with the values of each case.
                    </p>
                </>
            ),
            codeSnippet: `int day = 4;
switch (day) 
{
  case 1:
    Console.WriteLine("Monday");
    break;
  case 2:
    Console.WriteLine("Tuesday");
    break;
  // ...
}`
        },
        {
            id: 'csharp-while-loop',
            title: 'C# While Loop',
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
while (i < 5) 
{
  Console.WriteLine(i);
  i++;
}`
        },
        {
            id: 'csharp-arrays',
            title: 'C# Arrays',
            definition: 'Arrays are used to store multiple values in a single variable.',
            example: 'string[] cars = {"Volvo", "BMW"};',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        To declare an array, define the variable type with square brackets.
                    </p>
                </>
            ),
            codeSnippet: `string[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
Console.WriteLine(cars[0]);`
        },
        {
            id: 'csharp-methods',
            title: 'C# Methods',
            definition: 'A method is a block of code which only runs when it is called.',
            example: 'static void MyMethod() { ... }',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        You can pass data, known as parameters, into a method.
                    </p>
                </>
            ),
            codeSnippet: `static void MyMethod() 
{
  Console.WriteLine("I just got executed!");
}

static void Main(string[] args)
{
  MyMethod();
}`
        },
        {
            id: 'csharp-classesobjects',
            title: 'C# Classes/Objects',
            definition: 'C# is an object-oriented programming language. Everything in C# is associated with classes and objects.',
            example: 'class Car { ... }',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        A Class is like an object constructor, or a "blueprint" for creating objects.
                    </p>
                </>
            ),
            codeSnippet: `class Car 
{
  string color = "red";

  static void Main(string[] args)
  {
    Car myObj = new Car();
    Console.WriteLine(myObj.color);
  }
}`
        },
        {
            id: 'csharp-inheritance',
            title: 'C# Inheritance',
            definition: 'In C#, it is possible to inherit fields and methods from one class to another.',
            example: 'class Car : Vehicle { ... }',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        We group the "inheritance concept" into two categories: derived class (child) and base class (parent).
                    </p>
                </>
            ),
            codeSnippet: `class Vehicle  // base class (parent) 
{
  public string brand = "Ford";
  public void honk() 
  {
    Console.WriteLine("Tuut, tuut!");
  }
}

class Car : Vehicle  // derived class (child)
{
  public string modelName = "Mustang";
}`
        }
    ];

    const topics = courseData.map(topic => topic.title);
    const activeTopic = courseData[activeTopicIndex];

    const CodeBlock = ({ code, lang = 'csharp' }: { code: string, lang?: string }) => (
        <div className="bg-[#1e1e1e] text-gray-200 p-6 rounded-2xl font-mono text-sm mb-6 overflow-x-auto shadow-xl border border-gray-800">
            <div className="flex items-center space-x-2 mb-4 border-b border-gray-700 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-xs text-gray-500 font-sans">Program.cs</span>
            </div>
            <pre className="leading-relaxed text-purple-300">{code}</pre>
        </div>
    );

    return (
        <CoursePageLayout
            title="C# Tutorial"
            description="C# (C-Sharp) is a programming language developed by Microsoft that runs on the .NET Framework."
            topics={topics}
            icon={Hash}
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

export default CSharpCoursePage;
