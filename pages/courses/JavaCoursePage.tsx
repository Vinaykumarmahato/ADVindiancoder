import React, { useState } from 'react';
import CoursePageLayout from '../../components/CoursePageLayout';
import { Coffee, Code, BookOpen, Lightbulb } from 'lucide-react';

const JavaCoursePage = () => {
    const [activeTopicIndex, setActiveTopicIndex] = useState(0);

    const courseData = [
        {
            id: 'java-introduction',
            title: 'Java Introduction',
            definition: 'Java is a popular programming language, created in 1995. It is owned by Oracle, and more than 3 billion devices run Java.',
            example: 'Java is used for mobile apps (Android), desktop apps, web apps, games, and much more.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.
                    </p>
                </>
            ),
            codeSnippet: `public class Main {
  public static void main(String[] args) {
    System.out.println("Hello World");
  }
}`
        },
        {
            id: 'java-get-started',
            title: 'Java Get Started',
            definition: 'To start using Java, you need two things: The Java Development Kit (JDK) and an IDE (Integrated Development Environment).',
            example: 'Installing IntelliJ IDEA or Eclipse to write and run your Java code.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        An IDE (Integrated Development Environment) is used to edit and compile the code. Popular IDEs include IntelliJ IDEA, NetBeans, and Eclipse.
                    </p>
                </>
            ),
            codeSnippet: null
        },
        {
            id: 'java-syntax',
            title: 'Java Syntax',
            definition: 'Every line of code that runs in Java must be inside a class.',
            example: 'public class Main { ... }',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        A class should always start with an uppercase first letter. The name of the java file must match the class name.
                    </p>
                </>
            ),
            codeSnippet: `public class Main {
  public static void main(String[] args) {
    System.out.println("Hello World");
  }
}`
        },
        {
            id: 'java-output',
            title: 'Java Output',
            definition: 'You can use the System.out.println() method to print text to the screen.',
            example: 'Printing "Hello World" to the console.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        There is also a <code>print()</code> method, which is similar to <code>println()</code>. The only difference is that it does not insert a new line at the end of the output.
                    </p>
                </>
            ),
            codeSnippet: `System.out.println("Hello World!");
System.out.println("I am learning Java.");
System.out.println("It is awesome!");`
        },
        {
            id: 'java-comments',
            title: 'Java Comments',
            definition: 'Comments can be used to explain Java code, and to make it more readable.',
            example: '// This is a single-line comment.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Single-line comments start with two forward slashes (//). Multi-line comments start with /* and end with */.
                    </p>
                </>
            ),
            codeSnippet: `// This is a comment
System.out.println("Hello World"); // This is a comment`
        },
        {
            id: 'java-variables',
            title: 'Java Variables',
            definition: 'Variables are containers for storing data values.',
            example: 'String name = "John"; - "name" is the variable.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        In Java, there are different types of variables, for example: String, int, float, char, boolean.
                    </p>
                </>
            ),
            codeSnippet: `String name = "John";
int myNum = 15;
float myFloatNum = 5.99f;
char myLetter = 'D';
boolean myBool = true;`
        },
        {
            id: 'java-data-types',
            title: 'Java Data Types',
            definition: 'Data types are divided into two groups: Primitive data types and Non-primitive data types.',
            example: 'int is primitive. String is non-primitive (reference).',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Primitive data types include: byte, short, int, long, float, double, boolean, char.
                    </p>
                </>
            ),
            codeSnippet: `int myNum = 5;               // Integer (whole number)
float myFloatNum = 5.99f;    // Floating point number
char myLetter = 'D';         // Character
boolean myBool = true;       // Boolean
String myText = "Hello";     // String`
        },
        {
            id: 'java-operators',
            title: 'Java Operators',
            definition: 'Operators are used to perform operations on variables and values.',
            example: '+, -, *, /, % are arithmetic operators.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Java divides the operators into the following groups: Arithmetic, Assignment, Comparison, Logical, Bitwise.
                    </p>
                </>
            ),
            codeSnippet: `int sum1 = 100 + 50;        // 150 (100 + 50)
int sum2 = sum1 + 250;      // 400 (150 + 250)
int sum3 = sum2 + sum2;     // 800 (400 + 400)`
        },
        {
            id: 'java-strings',
            title: 'Java Strings',
            definition: 'Strings are used for storing text.',
            example: '"Hello World" is a string.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        A String variable contains a collection of characters surrounded by double quotes.
                    </p>
                </>
            ),
            codeSnippet: `String greeting = "Hello";
int len = greeting.length();
String txt = greeting.toUpperCase();`
        },
        {
            id: 'java-math',
            title: 'Java Math',
            definition: 'The Java Math class has many methods that allows you to perform mathematical tasks on numbers.',
            example: 'Math.max(5, 10) returns 10.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Common methods: Math.max(), Math.min(), Math.sqrt(), Math.abs(), Math.random().
                    </p>
                </>
            ),
            codeSnippet: `Math.max(5, 10);  // 10
Math.min(5, 10);  // 5
Math.sqrt(64);    // 8
Math.abs(-4.7);   // 4.7
Math.random();    // Random number between 0.0 and 1.0`
        },
        {
            id: 'java-ifelse',
            title: 'Java If...Else',
            definition: 'Java supports the usual logical conditions from mathematics.',
            example: 'if (20 > 18) { System.out.println("20 is greater than 18"); }',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Use if to specify a block of code to be executed, if a specified condition is true.
                    </p>
                </>
            ),
            codeSnippet: `if (20 > 18) {
  System.out.println("20 is greater than 18");
}`
        },
        {
            id: 'java-switch',
            title: 'Java Switch',
            definition: 'Use the switch statement to select one of many code blocks to be executed.',
            example: 'Switching based on the day of the week.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        This is how it works: The switch expression is evaluated once. The value of the expression is compared with the values of each case.
                    </p>
                </>
            ),
            codeSnippet: `int day = 4;
switch (day) {
  case 1:
    System.out.println("Monday");
    break;
  case 2:
    System.out.println("Tuesday");
    break;
  // ...
}`
        },
        {
            id: 'java-while-loop',
            title: 'Java While Loop',
            definition: 'The while loop loops through a block of code as long as a specified condition is true.',
            example: 'while (i < 5) { ... }',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Do not forget to increase the variable used in the condition, otherwise the loop will never end!
                    </p>
                </>
            ),
            codeSnippet: `int i = 0;
while (i < 5) {
  System.out.println(i);
  i++;
}`
        },
        {
            id: 'java-for-loop',
            title: 'Java For Loop',
            definition: 'When you know exactly how many times you want to loop through a block of code, use the for loop.',
            example: 'for (int i = 0; i < 5; i++) { ... }',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Syntax: for (statement 1; statement 2; statement 3) {'{'} // code block to be executed {'}'}
                    </p>
                </>
            ),
            codeSnippet: `for (int i = 0; i < 5; i++) {
  System.out.println(i);
}`
        },
        {
            id: 'java-arrays',
            title: 'Java Arrays',
            definition: 'Arrays are used to store multiple values in a single variable.',
            example: 'String[] cars = {"Volvo", "BMW"};',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        To declare an array, define the variable type with square brackets.
                    </p>
                </>
            ),
            codeSnippet: `String[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
System.out.println(cars[0]);`
        },
        {
            id: 'java-methods',
            title: 'Java Methods',
            definition: 'A method is a block of code which only runs when it is called.',
            example: 'System.out.println() is a method.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        You can pass data, known as parameters, into a method. Methods are used to perform certain actions, and they are also known as functions.
                    </p>
                </>
            ),
            codeSnippet: `static void myMethod() {
  System.out.println("I just got executed!");
}

public static void main(String[] args) {
  myMethod();
}`
        },
        {
            id: 'java-classesobjects',
            title: 'Java Classes/Objects',
            definition: 'Java is an object-oriented programming language. Everything in Java is associated with classes and objects.',
            example: 'Class: Car. Object: MyRedCar.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        A Class is like an object constructor, or a "blueprint" for creating objects.
                    </p>
                </>
            ),
            codeSnippet: `public class Main {
  int x = 5;

  public static void main(String[] args) {
    Main myObj = new Main();
    System.out.println(myObj.x);
  }
}`
        },
        {
            id: 'java-constructors',
            title: 'Java Constructors',
            definition: 'A constructor in Java is a special method that is used to initialize objects.',
            example: 'public Main() { x = 5; }',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        The constructor is called when an object of a class is created. It can be used to set initial values for object attributes.
                    </p>
                </>
            ),
            codeSnippet: `public class Main {
  int x;

  public Main() {
    x = 5;
  }

  public static void main(String[] args) {
    Main myObj = new Main();
    System.out.println(myObj.x);
  }
}`
        },
        {
            id: 'java-inheritance',
            title: 'Java Inheritance',
            definition: 'In Java, it is possible to inherit attributes and methods from one class to another.',
            example: 'Car extends Vehicle.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        We group the "inheritance concept" into two categories: subclass (child) and superclass (parent).
                    </p>
                </>
            ),
            codeSnippet: `class Vehicle {
  protected String brand = "Ford";
  public void honk() {
    System.out.println("Tuut, tuut!");
  }
}

class Car extends Vehicle {
  private String modelName = "Mustang";
  public static void main(String[] args) {
    Car myCar = new Car();
    myCar.honk();
    System.out.println(myCar.brand + " " + myCar.modelName);
  }
}`
        }
    ];

    const topics = courseData.map(topic => topic.title);
    const activeTopic = courseData[activeTopicIndex];

    const CodeBlock = ({ code, lang = 'java' }: { code: string, lang?: string }) => (
        <div className="bg-[#1e1e1e] text-gray-200 p-6 rounded-2xl font-mono text-sm mb-6 overflow-x-auto shadow-xl border border-gray-800">
            <div className="flex items-center space-x-2 mb-4 border-b border-gray-700 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-xs text-gray-500 font-sans">Main.java</span>
            </div>
            <pre className="leading-relaxed text-red-300">{code}</pre>
        </div>
    );

    return (
        <CoursePageLayout
            title="Java Tutorial"
            description="Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible."
            topics={topics}
            icon={Coffee}
            colorClass="red"
            activeTopicIndex={activeTopicIndex}
            onTopicClick={setActiveTopicIndex}
        >
            <div className="space-y-8">
                {/* Definition Section */}
                <div className="bg-red-50 dark:bg-red-900/10 border-l-4 border-red-600 p-6 rounded-r-xl">
                    <h3 className="text-lg font-bold text-red-800 dark:text-red-300 mb-2 flex items-center">
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
                                <Code className="w-6 h-6 mr-2 text-red-600" />
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

export default JavaCoursePage;
