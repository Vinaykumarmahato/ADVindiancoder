import React, { useState } from 'react';
import CoursePageLayout from '../../components/CoursePageLayout';
import { Terminal, Code, BookOpen, Lightbulb } from 'lucide-react';

const PythonCoursePage = () => {
    const [activeTopicIndex, setActiveTopicIndex] = useState(0);

    const courseData = [
        {
            id: 'python-introduction',
            title: 'Python Introduction',
            definition: 'Python is a popular programming language. It was created by Guido van Rossum, and released in 1991.',
            example: 'Python is known for its simple syntax, making it great for beginners.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        It is used for: web development (server-side), software development, mathematics, system scripting.
                    </p>
                </>
            ),
            codeSnippet: `print("Hello, World!")`
        },
        {
            id: 'python-get-started',
            title: 'Python Get Started',
            definition: 'Python is an interpreted programming language, this means that as a developer you write Python (.py) files in a text editor and then put those files into the python interpreter to be executed.',
            example: 'Running a python script from the command line.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        The way to run a python file is like this on the command line:
                    </p>
                </>
            ),
            codeSnippet: `C:\\Users\\Your Name>python helloworld.py`
        },
        {
            id: 'python-syntax',
            title: 'Python Syntax',
            definition: 'Python syntax can be executed by writing directly in the Command Line.',
            example: 'Python uses indentation to indicate a block of code.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Indentation refers to the spaces at the beginning of a code line. Where in other programming languages the indentation in code is for readability only, the indentation in Python is very important.
                    </p>
                </>
            ),
            codeSnippet: `if 5 > 2:
  print("Five is greater than two!")`
        },
        {
            id: 'python-comments',
            title: 'Python Comments',
            definition: 'Comments can be used to explain Python code.',
            example: '# This is a comment. It is ignored by Python.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Comments start with a #, and Python will render the rest of the line as a comment.
                    </p>
                </>
            ),
            codeSnippet: `# This is a comment
print("Hello, World!")`
        },
        {
            id: 'python-variables',
            title: 'Python Variables',
            definition: 'Variables are containers for storing data values.',
            example: 'x = 5. x is the variable, 5 is the value.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Python has no command for declaring a variable. A variable is created the moment you first assign a value to it.
                    </p>
                </>
            ),
            codeSnippet: `x = 5
y = "John"
print(x)
print(y)`
        },
        {
            id: 'python-data-types',
            title: 'Python Data Types',
            definition: 'Python has the following data types built-in by default, in these categories: Text Type (str), Numeric Types (int, float, complex), Sequence Types (list, tuple, range), etc.',
            example: 'x = "Hello World" (str), x = 20 (int), x = 20.5 (float).',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        You can get the data type of any object by using the type() function.
                    </p>
                </>
            ),
            codeSnippet: `x = 5
print(type(x))`
        },
        {
            id: 'python-numbers',
            title: 'Python Numbers',
            definition: 'There are three numeric types in Python: int, float, complex.',
            example: '1 is an int. 2.8 is a float. 1j is a complex number.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Variables of numeric types are created when you assign a value to them.
                    </p>
                </>
            ),
            codeSnippet: `x = 1    # int
y = 2.8  # float
z = 1j   # complex`
        },
        {
            id: 'python-casting',
            title: 'Python Casting',
            definition: 'There may be times when you want to specify a type on to a variable. This can be done with casting.',
            example: 'int(2.8) becomes 2. str(2) becomes "2".',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Casting in python is therefore done using constructor functions: int(), float(), str().
                    </p>
                </>
            ),
            codeSnippet: `x = int(1)   # x will be 1
y = int(2.8) # y will be 2
z = int("3") # z will be 3`
        },
        {
            id: 'python-strings',
            title: 'Python Strings',
            definition: 'Strings in python are surrounded by either single quotation marks, or double quotation marks.',
            example: '"Hello" is the same as \'Hello\'.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        You can display a string literal with the print() function.
                    </p>
                </>
            ),
            codeSnippet: `print("Hello")
print('Hello')`
        },
        {
            id: 'python-booleans',
            title: 'Python Booleans',
            definition: 'Booleans represent one of two values: True or False.',
            example: '10 > 9 is True. 10 == 9 is False.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        In programming you often need to know if an expression is True or False.
                    </p>
                </>
            ),
            codeSnippet: `print(10 > 9)
print(10 == 9)
print(10 < 9)`
        },
        {
            id: 'python-operators',
            title: 'Python Operators',
            definition: 'Operators are used to perform operations on variables and values.',
            example: '+ is an operator for addition. * is an operator for multiplication.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Python divides the operators in the following groups: Arithmetic, Assignment, Comparison, Logical, Identity, Membership, Bitwise.
                    </p>
                </>
            ),
            codeSnippet: `print(10 + 5)`
        },
        {
            id: 'python-lists',
            title: 'Python Lists',
            definition: 'Lists are used to store multiple items in a single variable.',
            example: '["apple", "banana", "cherry"] is a list.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Lists are one of 4 built-in data types in Python used to store collections of data.
                    </p>
                </>
            ),
            codeSnippet: `mylist = ["apple", "banana", "cherry"]`
        },
        {
            id: 'python-tuples',
            title: 'Python Tuples',
            definition: 'Tuples are used to store multiple items in a single variable. A tuple is a collection which is ordered and unchangeable.',
            example: '("apple", "banana", "cherry") is a tuple.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Tuples are written with round brackets.
                    </p>
                </>
            ),
            codeSnippet: `mytuple = ("apple", "banana", "cherry")`
        },
        {
            id: 'python-sets',
            title: 'Python Sets',
            definition: 'Sets are used to store multiple items in a single variable. A set is a collection which is unordered, unchangeable*, and unindexed.',
            example: '{"apple", "banana", "cherry"} is a set.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Sets are written with curly brackets.
                    </p>
                </>
            ),
            codeSnippet: `myset = {"apple", "banana", "cherry"}`
        },
        {
            id: 'python-dictionaries',
            title: 'Python Dictionaries',
            definition: 'Dictionaries are used to store data values in key:value pairs.',
            example: '{"brand": "Ford", "model": "Mustang"} is a dictionary.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        A dictionary is a collection which is ordered*, changeable and do not allow duplicates.
                    </p>
                </>
            ),
            codeSnippet: `thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}`
        },
        {
            id: 'python-ifelse',
            title: 'Python If...Else',
            definition: 'Python supports the usual logical conditions from mathematics.',
            example: 'if b > a: print("b is greater than a")',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        These conditions can be used in several ways, most commonly in "if statements" and loops.
                    </p>
                </>
            ),
            codeSnippet: `a = 33
b = 200
if b > a:
  print("b is greater than a")`
        },
        {
            id: 'python-while-loops',
            title: 'Python While Loops',
            definition: 'With the while loop we can execute a set of statements as long as a condition is true.',
            example: 'while i < 6: print(i)',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Note: remember to increment i, or else the loop will continue forever.
                    </p>
                </>
            ),
            codeSnippet: `i = 1
while i < 6:
  print(i)
  i += 1`
        },
        {
            id: 'python-for-loops',
            title: 'Python For Loops',
            definition: 'A for loop is used for iterating over a sequence (that is either a list, a tuple, a dictionary, a set, or a string).',
            example: 'for x in fruits: print(x)',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        This is less like the for keyword in other programming languages, and works more like an iterator method as found in other object-orientated programming languages.
                    </p>
                </>
            ),
            codeSnippet: `fruits = ["apple", "banana", "cherry"]
for x in fruits:
  print(x)`
        },
        {
            id: 'python-functions',
            title: 'Python Functions',
            definition: 'A function is a block of code which only runs when it is called.',
            example: 'def my_function(): print("Hello")',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        You can pass data, known as parameters, into a function. A function can return data as a result.
                    </p>
                </>
            ),
            codeSnippet: `def my_function():
  print("Hello from a function")

my_function()`
        },
        {
            id: 'python-lambda',
            title: 'Python Lambda',
            definition: 'A lambda function is a small anonymous function.',
            example: 'x = lambda a : a + 10',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        A lambda function can take any number of arguments, but can only have one expression.
                    </p>
                </>
            ),
            codeSnippet: `x = lambda a : a + 10
print(x(5))`
        },
        {
            id: 'python-classesobjects',
            title: 'Python Classes/Objects',
            definition: 'Python is an object oriented programming language. Almost everything in Python is an object, with its properties and methods.',
            example: 'class MyClass: x = 5',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        A Class is like an object constructor, or a "blueprint" for creating objects.
                    </p>
                </>
            ),
            codeSnippet: `class MyClass:
  x = 5

p1 = MyClass()
print(p1.x)`
        },
        {
            id: 'python-inheritance',
            title: 'Python Inheritance',
            definition: 'Inheritance allows us to define a class that inherits all the methods and properties from another class.',
            example: 'class Student(Person): pass',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Parent class is the class being inherited from, also called base class. Child class is the class that inherits from another class, also called derived class.
                    </p>
                </>
            ),
            codeSnippet: `class Person:
  def __init__(self, fname, lname):
    self.firstname = fname
    self.lastname = lname

  def printname(self):
    print(self.firstname, self.lastname)

class Student(Person):
  pass

x = Student("Mike", "Olsen")
x.printname()`
        },
        {
            id: 'python-modules',
            title: 'Python Modules',
            definition: 'Consider a module to be the same as a code library.',
            example: 'import mymodule',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        A file containing a set of functions you want to include in your application.
                    </p>
                </>
            ),
            codeSnippet: `import mymodule

mymodule.greeting("Jonathan")`
        },
        {
            id: 'python-file-handling',
            title: 'Python File Handling',
            definition: 'File handling is an important part of any web application. Python has several functions for creating, reading, updating, and deleting files.',
            example: 'f = open("demofile.txt", "r")',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        The key function for working with files in Python is the open() function.
                    </p>
                </>
            ),
            codeSnippet: `f = open("demofile.txt", "r")
print(f.read())`
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
            title="Python Tutorial"
            description="Python is a popular programming language. It is used for web development, software development, mathematics, system scripting."
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

export default PythonCoursePage;
