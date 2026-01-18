import React, { useState } from 'react';
import CoursePageLayout from '../../components/CoursePageLayout';
import { Terminal, Code, BookOpen, Lightbulb } from 'lucide-react';

const CCoursePage = () => {
    const [activeTopicIndex, setActiveTopicIndex] = useState(0);

    const courseData = [
        {
            id: 'c-intro',
            title: 'C Intro',
            definition: 'C is a general-purpose programming language created by Dennis Ritchie at the Bell Laboratories in 1972.',
            example: 'C is used to build operating systems (like Windows and Linux) and complex programs.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        It is a very popular language, despite being old. C is strongly associated with UNIX, as it was developed to write the UNIX operating system.
                    </p>
                </>
            ),
            codeSnippet: null
        },
        {
            id: 'c-get-started',
            title: 'C Get Started',
            definition: 'To start using C, you need two things: A text editor and a compiler.',
            example: 'Using GCC to compile your C code.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        A text editor, like Notepad, to write C code, and a compiler, like GCC, to translate the C code into language that the computer will understand.
                    </p>
                </>
            ),
            codeSnippet: `#include <stdio.h>

int main() {
  printf("Hello World!");
  return 0;
}`
        },
        {
            id: 'c-syntax',
            title: 'C Syntax',
            definition: 'The syntax of C is the set of rules that defines the combinations of symbols that are considered to be a correctly structured document or fragment in that language.',
            example: '#include <stdio.h> is required to output text.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Line 1: <code>#include &lt;stdio.h&gt;</code> is a header file library that lets us work with input and output functions.
                    </p>
                </>
            ),
            codeSnippet: null
        },
        {
            id: 'c-output',
            title: 'C Output',
            definition: 'To output values or print text in C, you can use the printf() function.',
            example: 'printf("Hello World!");',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        You can use as many <code>printf()</code> functions as you want. However, note that it does not insert a new line at the end of the output.
                    </p>
                </>
            ),
            codeSnippet: `printf("Hello World!");
printf("I am learning C.");`
        },
        {
            id: 'c-variables',
            title: 'C Variables',
            definition: 'Variables are containers for storing data values.',
            example: 'int myNum = 15;',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        In C, there are different types of variables (defined with different keywords), for example: int, float, char.
                    </p>
                </>
            ),
            codeSnippet: `int myNum = 15;
float myFloatNum = 5.99;
char myLetter = 'D';`
        },
        {
            id: 'c-data-types',
            title: 'C Data Types',
            definition: 'Basic data types in C are int, float, double, char.',
            example: 'float stores fractional numbers, containing one or more decimals.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        The data type specifies the size and type of information the variable will store.
                    </p>
                </>
            ),
            codeSnippet: `int myNum = 5;             // Integer (whole number)
float myFloatNum = 5.99;   // Floating point number
char myLetter = 'D';       // Character`
        },
        {
            id: 'c-ifelse',
            title: 'C If...Else',
            definition: 'C supports the usual logical conditions from mathematics.',
            example: 'if (20 > 18) { ... }',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        You can use these conditions to perform different actions for different decisions.
                    </p>
                </>
            ),
            codeSnippet: `if (20 > 18) {
  printf("20 is greater than 18");
}`
        },
        {
            id: 'c-while-loop',
            title: 'C While Loop',
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
  printf("%d\\n", i);
  i++;
}`
        },
        {
            id: 'c-for-loop',
            title: 'C For Loop',
            definition: 'When you know exactly how many times you want to loop through a block of code, use the for loop.',
            example: 'for (i = 0; i < 5; i++) { ... }',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Syntax: for (statement 1; statement 2; statement 3) {'{'} // code block to be executed {'}'}
                    </p>
                </>
            ),
            codeSnippet: `int i;

for (i = 0; i < 5; i++) {
  printf("%d\\n", i);
}`
        },
        {
            id: 'c-arrays',
            title: 'C Arrays',
            definition: 'Arrays are used to store multiple values in a single variable.',
            example: 'int myNumbers[] = {25, 50, 75, 100};',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        To declare an array, define the variable type with square brackets.
                    </p>
                </>
            ),
            codeSnippet: `int myNumbers[] = {25, 50, 75, 100};
printf("%d", myNumbers[0]);`
        },
        {
            id: 'c-pointers',
            title: 'C Pointers',
            definition: 'A pointer is a variable that stores the memory address of another variable as its value.',
            example: 'int* ptr = &myAge;',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        A pointer variable points to a data type (like int or char) of the same type, and is created with the * operator.
                    </p>
                </>
            ),
            codeSnippet: `int myAge = 43;     // An int variable
int* ptr = &myAge;  // A pointer variable, with the name ptr, that stores the address of myAge

printf("%d\\n", myAge);  // Output the value of myAge (43)
printf("%p\\n", &myAge); // Output the memory address of myAge (0x7ffe5367e044)
printf("%p\\n", ptr);    // Output the memory address of myAge with the pointer (0x7ffe5367e044)`
        },
        {
            id: 'c-functions',
            title: 'C Functions',
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
  printf("I just got executed!");
}

int main() {
  myFunction();
  return 0;
}`
        },
        {
            id: 'c-structures',
            title: 'C Structures',
            definition: 'Structures (also called structs) are a way to group several related variables into one place.',
            example: 'struct MyStructure { int myNum; char myLetter; };',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Each variable in the structure is known as a member of the structure.
                    </p>
                </>
            ),
            codeSnippet: `struct MyStructure {
  int myNum;
  char myLetter;
};

int main() {
  struct MyStructure s1;
  s1.myNum = 13;
  s1.myLetter = 'B';
  return 0;
}`
        }
    ];

    const topics = courseData.map(topic => topic.title);
    const activeTopic = courseData[activeTopicIndex];

    const CodeBlock = ({ code, lang = 'c' }: { code: string, lang?: string }) => (
        <div className="bg-[#1e1e1e] text-gray-200 p-6 rounded-2xl font-mono text-sm mb-6 overflow-x-auto shadow-xl border border-gray-800">
            <div className="flex items-center space-x-2 mb-4 border-b border-gray-700 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-xs text-gray-500 font-sans">main.c</span>
            </div>
            <pre className="leading-relaxed text-blue-300">{code}</pre>
        </div>
    );

    return (
        <CoursePageLayout
            title="C Tutorial"
            description="C is a general-purpose programming language that has been around for 50 years. It is very powerful and has been used to develop operating systems, databases, applications, etc."
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

export default CCoursePage;
