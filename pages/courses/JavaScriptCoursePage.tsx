import React, { useState } from 'react';
import CoursePageLayout from '../../components/CoursePageLayout';
import { FileJson, Code, BookOpen, Lightbulb } from 'lucide-react';

const JavaScriptCoursePage = () => {
    const [activeTopicIndex, setActiveTopicIndex] = useState(0);

    const courseData = [
        // CHAPTER 1: Introduction
        {
            id: 'js-intro',
            title: 'CH 1: Introduction',
            definition: 'JavaScript is the programming language of the Web. It is lightweight, interpreted, and just-in-time compiled.',
            example: 'Adding interactivity to a static HTML page.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        JavaScript was initially created to "make web pages alive". The programs in this language are called scripts.
                    </p>
                </>
            ),
            codeSnippet: `// A simple alert
alert("Hello, World!");`
        },
        {
            id: 'how-js-works',
            title: 'How JS Works',
            definition: 'JavaScript is a single-threaded, non-blocking, asynchronous, concurrent language.',
            example: 'The Event Loop handles asynchronous operations.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        It has a call stack, an event loop, a callback queue, and some other APIs.
                    </p>
                </>
            ),
            codeSnippet: null
        },
        {
            id: 'js-placement',
            title: 'Where to Write JS',
            definition: 'JavaScript can be written Inline, Internally (in <script> tags), or Externally (in .js files).',
            example: '<script src="script.js"></script>',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        External scripts are practical when the same code is used in many different web pages.
                    </p>
                </>
            ),
            codeSnippet: `<!-- Internal -->
<script>
  console.log("Internal");
</script>

<!-- External -->
<script src="myScript.js"></script>`
        },
        {
            id: 'js-output-methods',
            title: 'Output Methods',
            definition: 'JavaScript has several ways to display data: console.log(), alert(), prompt(), etc.',
            example: 'console.log("Debug info");',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        <code>console.log()</code> is mostly used for testing purposes. <code>alert()</code> displays a box with a message.
                    </p>
                </>
            ),
            codeSnippet: `console.log("Hello Console");
alert("Hello User");
let name = prompt("What is your name?");`
        },

        // CHAPTER 2: Basics
        {
            id: 'js-basics',
            title: 'CH 2: Basics',
            definition: 'Fundamental building blocks of JavaScript: Variables, Data Types, and Operators.',
            example: 'let x = 10;',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Understanding variables and types is crucial for any programming language.
                    </p>
                </>
            ),
            codeSnippet: null
        },
        {
            id: 'js-variables',
            title: 'Variables',
            definition: 'Variables are containers for storing data values. var, let, and const are used to declare them.',
            example: 'const PI = 3.14;',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        <code>let</code> and <code>const</code> were introduced in ES6. <code>const</code> cannot be reassigned.
                    </p>
                </>
            ),
            codeSnippet: `let name = "John";
const PI = 3.14;
var oldWay = "Avoid using var in modern JS";`
        },
        {
            id: 'js-datatypes',
            title: 'Data Types',
            definition: 'JavaScript variables can hold different data types: numbers, strings, objects and more.',
            example: 'String, Number, Boolean, Undefined, Null, Symbol, BigInt.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        JavaScript has dynamic types. This means that the same variable can be used to hold different data types.
                    </p>
                </>
            ),
            codeSnippet: `let length = 16;          // Number
let lastName = "Johnson"; // String
let x = {firstName:"John", lastName:"Doe"}; // Object`
        },
        {
            id: 'js-operators',
            title: 'Operators',
            definition: 'Operators are used to perform operations on variables and values.',
            example: 'Arithmetic (+, -), Assignment (=), Comparison (==, ===).',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        The <code>===</code> operator checks for both value and type equality.
                    </p>
                </>
            ),
            codeSnippet: `let x = 5;
let y = 2;
let z = x + y; // 7
let isEqual = (x === 5); // true`
        },

        // CHAPTER 3: Control Flow
        {
            id: 'js-control-flow',
            title: 'CH 3: Control Flow',
            definition: 'Control flow allows you to dictate how your code runs based on conditions and loops.',
            example: 'if statements, for loops.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Conditional statements are used to perform different actions based on different conditions.
                    </p>
                </>
            ),
            codeSnippet: null
        },
        {
            id: 'js-conditionals',
            title: 'If / Else / Switch',
            definition: 'Use if to specify a block of code to be executed, if a specified condition is true.',
            example: 'if (hour < 18) { greeting = "Good day"; }',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        The <code>switch</code> statement is used to perform different actions based on different conditions.
                    </p>
                </>
            ),
            codeSnippet: `if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}`
        },
        {
            id: 'js-loops',
            title: 'Loops',
            definition: 'Loops can execute a block of code a number of times.',
            example: 'for loop, while loop.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Loops are handy, if you want to run the same code over and over again, each time with a different value.
                    </p>
                </>
            ),
            codeSnippet: `for (let i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}`
        },

        // CHAPTER 4: Functions
        {
            id: 'js-functions',
            title: 'CH 4: Functions',
            definition: 'A JavaScript function is a block of code designed to perform a particular task.',
            example: 'function myFunction(p1, p2) { return p1 * p2; }',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        A function is executed when "something" invokes it (calls it).
                    </p>
                </>
            ),
            codeSnippet: `function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

// Arrow Function
const toCelsius = (f) => (5/9) * (f-32);`
        },

        // CHAPTER 5: Arrays
        {
            id: 'js-arrays',
            title: 'CH 5: Arrays',
            definition: 'An array is a special variable, which can hold more than one value.',
            example: 'const cars = ["Saab", "Volvo", "BMW"];',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        You can access the values of an array by referring to an index number.
                    </p>
                </>
            ),
            codeSnippet: `const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi"); // Adds a new element`
        },
        {
            id: 'js-array-methods',
            title: 'Array Methods',
            definition: 'JavaScript provides many methods to work with arrays.',
            example: 'map(), filter(), reduce(), find().',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        <code>map()</code> creates a new array by performing a function on each array element. <code>filter()</code> creates a new array with all array elements that pass a test.
                    </p>
                </>
            ),
            codeSnippet: `const numbers = [1, 2, 3, 4];
const doubled = numbers.map(x => x * 2); // [2, 4, 6, 8]`
        },

        // CHAPTER 6: Objects
        {
            id: 'js-objects',
            title: 'CH 6: Objects',
            definition: 'JavaScript objects are containers for named values called properties.',
            example: 'const car = {type:"Fiat", model:"500", color:"white"};',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Objects are variables too. But objects can contain many values.
                    </p>
                </>
            ),
            codeSnippet: `const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};`
        },

        // CHAPTER 7: DOM
        {
            id: 'js-dom',
            title: 'CH 7: DOM',
            definition: 'The HTML DOM (Document Object Model) allows JavaScript to change all the HTML elements of an HTML page.',
            example: 'document.getElementById("demo").innerHTML = "Hello World!";',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        With the DOM, JavaScript gets all the power it needs to create dynamic HTML.
                    </p>
                </>
            ),
            codeSnippet: `document.querySelector(".myClass").style.color = "red";
document.getElementById("myBtn").addEventListener("click", function() {
  alert("Hello World!");
});`
        },

        // CHAPTER 8: BOM
        {
            id: 'js-bom',
            title: 'CH 8: BOM',
            definition: 'The Browser Object Model (BOM) allows JavaScript to "talk to" the browser.',
            example: 'window.innerHeight, window.location.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        There are no official standards for the Browser Object Model (BOM). Since modern browsers have implemented (almost) the same methods and properties for JavaScript interactivity, it is often referred to, as methods and properties of the BOM.
                    </p>
                </>
            ),
            codeSnippet: `window.location.href = "https://www.w3schools.com";
alert(window.innerWidth);`
        },

        // CHAPTER 9: ES6+
        {
            id: 'js-es6',
            title: 'CH 9: ES6+',
            definition: 'ES6 (ECMAScript 2015) introduced many major features to JavaScript.',
            example: 'Arrow functions, Classes, Promises, Template Literals.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Modern JavaScript development relies heavily on these features.
                    </p>
                </>
            ),
            codeSnippet: `// Template Literal
let text = \`Hello \${name}\`;

// Destructuring
const { name, age } = person;`
        },

        // CHAPTER 10: Error Handling
        {
            id: 'js-error-handling',
            title: 'CH 10: Error Handling',
            definition: 'The try statement lets you test a block of code for errors. The catch statement lets you handle the error.',
            example: 'try { ... } catch(err) { ... }',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        The <code>throw</code> statement lets you create custom errors.
                    </p>
                </>
            ),
            codeSnippet: `try {
  nonExistentFunction();
} catch(err) {
  console.error(err.message);
}`
        },

        // CHAPTER 11: JS in Browser
        {
            id: 'js-browser',
            title: 'CH 11: JS in Browser',
            definition: 'Working with browser-specific APIs like Storage and Forms.',
            example: 'localStorage.setItem("key", "value");',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Web Storage API provides mechanisms by which browsers can store key/value pairs, in a much more intuitive fashion than using cookies.
                    </p>
                </>
            ),
            codeSnippet: `localStorage.setItem("lastname", "Smith");
let name = localStorage.getItem("lastname");`
        },

        // CHAPTER 12: JSON
        {
            id: 'js-json',
            title: 'CH 12: JSON',
            definition: 'JSON stands for JavaScript Object Notation. It is a lightweight data interchange format.',
            example: '{"name":"John", "age":30, "car":null}',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        JSON is text, and we can convert any JavaScript object into JSON, and send JSON to the server.
                    </p>
                </>
            ),
            codeSnippet: `let obj = { name: "John", age: 30, city: "New York" };
let myJSON = JSON.stringify(obj);
let newObj = JSON.parse(myJSON);`
        },

        // CHAPTER 13: Fetch API
        {
            id: 'js-fetch',
            title: 'CH 13: Fetch API',
            definition: 'The Fetch API provides an interface for fetching resources (including across the network).',
            example: 'fetch("url").then(...)',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        It will seem familiar to anyone who has used XMLHttpRequest, but the new API provides a more powerful and flexible feature set.
                    </p>
                </>
            ),
            codeSnippet: `fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data));`
        },

        // CHAPTER 14: Promises & Async
        {
            id: 'js-async',
            title: 'CH 14: Async JS',
            definition: 'Asynchronous JavaScript allows you to execute code without blocking the main thread.',
            example: 'async function myDisplay() { ... }',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        <code>async</code> and <code>await</code> make promises easier to write.
                    </p>
                </>
            ),
            codeSnippet: `async function fetchData() {
  let response = await fetch('url');
  let data = await response.json();
  console.log(data);
}`
        },

        // CHAPTER 15: Modules
        {
            id: 'js-modules',
            title: 'CH 15: Modules',
            definition: 'Modules allow you to break up your code into separate files.',
            example: 'import { name } from "./person.js";',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        This makes it easier to maintain the code-base. ES Modules rely on the <code>import</code> and <code>export</code> statements.
                    </p>
                </>
            ),
            codeSnippet: `// person.js
export const name = "Jesse";

// main.js
import { name } from "./person.js";`
        },

        // CHAPTER 16: OOP
        {
            id: 'js-oop',
            title: 'CH 16: OOP',
            definition: 'Object-Oriented Programming in JavaScript using Classes and Prototypes.',
            example: 'class Car { ... }',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        JavaScript is a prototype-based language, but ES6 introduced the <code>class</code> keyword to make it look more like traditional OOP languages.
                    </p>
                </>
            ),
            codeSnippet: `class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}`
        },

        // CHAPTER 17: Debugging
        {
            id: 'js-debugging',
            title: 'CH 17: Debugging',
            definition: 'Tools and techniques to find and fix errors in your code.',
            example: 'Using the browser DevTools.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        The console, breakpoints, and the network tab are essential tools for any JavaScript developer.
                    </p>
                </>
            ),
            codeSnippet: `debugger; // Stops execution if DevTools is open`
        },

        // CHAPTER 18: Advanced Topics
        {
            id: 'js-advanced',
            title: 'CH 18: Advanced',
            definition: 'Deep dive into how JavaScript works under the hood.',
            example: 'Closures, Hoisting, Event Loop.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Understanding closures and the event loop is key to mastering JavaScript.
                    </p>
                </>
            ),
            codeSnippet: `function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}
const myFunc = makeFunc();
myFunc(); // Closures`
        },

        // CHAPTER 19: Patterns
        {
            id: 'js-patterns',
            title: 'CH 19: Patterns',
            definition: 'Design patterns are reusable solutions to common problems in software design.',
            example: 'Singleton, Factory, Observer.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Patterns help write organized, efficient, and scalable code.
                    </p>
                </>
            ),
            codeSnippet: `// Singleton Pattern
const Singleton = (function () {
  let instance;
  function createInstance() {
    return new Object("I am the instance");
  }
  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();`
        },

        // CHAPTER 20: Projects
        {
            id: 'js-projects',
            title: 'CH 20: Projects',
            definition: 'Apply your skills by building real-world applications.',
            example: 'Calculator, To-Do App, Weather App.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Practice is the key to learning. Try building a To-Do list or a simple game.
                    </p>
                </>
            ),
            codeSnippet: `// Simple To-Do Logic
let todos = [];
function addTodo(text) {
  todos.push({ text, completed: false });
}`
        }
    ];

    const topics = courseData.map(topic => topic.title);
    const activeTopic = courseData[activeTopicIndex];

    const CodeBlock = ({ code, lang = 'javascript' }: { code: string, lang?: string }) => (
        <div className="bg-[#1e1e1e] text-gray-200 p-6 rounded-2xl font-mono text-sm mb-6 overflow-x-auto shadow-xl border border-gray-800">
            <div className="flex items-center space-x-2 mb-4 border-b border-gray-700 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-xs text-gray-500 font-sans">script.js</span>
            </div>
            <pre className="leading-relaxed text-yellow-300">{code}</pre>
        </div>
    );

    return (
        <CoursePageLayout
            title="JavaScript Masterclass"
            description="Master the language of the web. From basics to advanced concepts, ES6+, and real-world projects."
            topics={topics}
            icon={FileJson}
            colorClass="yellow"
            activeTopicIndex={activeTopicIndex}
            onTopicClick={setActiveTopicIndex}
        >
            <div className="space-y-8">
                {/* Definition Section */}
                <div className="bg-yellow-50 dark:bg-yellow-900/10 border-l-4 border-yellow-600 p-6 rounded-r-xl">
                    <h3 className="text-lg font-bold text-yellow-800 dark:text-yellow-300 mb-2 flex items-center">
                        <BookOpen className="w-5 h-5 mr-2" />
                        Definition
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {activeTopic.definition}
                    </p>
                </div>

                {/* Real-time Example Section */}
                <div className="bg-orange-50 dark:bg-orange-900/10 border-l-4 border-orange-600 p-6 rounded-r-xl">
                    <h3 className="text-lg font-bold text-orange-800 dark:text-orange-300 mb-2 flex items-center">
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
                                <Code className="w-6 h-6 mr-2 text-yellow-600" />
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

export default JavaScriptCoursePage;
