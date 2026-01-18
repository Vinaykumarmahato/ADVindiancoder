import React, { useState } from 'react';
import CoursePageLayout from '../../components/CoursePageLayout';
import { Atom, Code, BookOpen, Lightbulb } from 'lucide-react';

const ReactCoursePage = () => {
  const [activeTopicIndex, setActiveTopicIndex] = useState(0);

  const courseData = [
    {
      id: 'react-introduction',
      title: 'React Introduction',
      definition: 'React is a JavaScript library for building user interfaces. React is used to build single-page applications.',
      example: 'React allows us to create reusable UI components. It is like building with LEGO blocks.',
      content: (
        <>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            React allows us to create reusable UI components.
          </p>
        </>
      ),
      codeSnippet: `import React from 'react';
import ReactDOM from 'react-dom/client';

function Hello(props) {
  return <h1>Hello World!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Hello />);`
    },
    {
      id: 'react-get-started',
      title: 'React Get Started',
      definition: 'To use React in production, you need npm and Node.js installed.',
      example: 'Setting up a new React project is as simple as running one command.',
      content: (
        <>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            To get an overview of what React is, you can write React code directly in HTML. But in order to use React in production, you need npm and Node.js installed.
          </p>
        </>
      ),
      codeSnippet: `npx create-react-app my-app
cd my-app
npm start`
    },
    {
      id: 'react-es6',
      title: 'React ES6',
      definition: 'React uses ES6, and you should be familiar with some of the new features like: Classes, Arrow Functions, Variables (let, const, var).',
      example: 'Using arrow functions makes the code shorter and cleaner.',
      content: (
        <>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            React uses ES6, and you should be familiar with some of the new features like: Classes, Arrow Functions, Variables (let, const, var), Array Methods like .map(), Destructuring, Modules, Ternary Operator, Spread Operator.
          </p>
        </>
      ),
      codeSnippet: `class Car {
  constructor(name) {
    this.brand = name;
  }
}`
    },
    {
      id: 'react-render-html',
      title: 'React Render HTML',
      definition: 'React renders HTML to the web page by using a function called createRoot() and its method render().',
      example: 'Injecting your React app into the "root" div of your HTML file.',
      content: (
        <>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            React's goal is in many ways to render HTML in a web page.
          </p>
        </>
      ),
      codeSnippet: `const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<p>Hello</p>);`
    },
    {
      id: 'react-jsx',
      title: 'React JSX',
      definition: 'JSX stands for JavaScript XML. JSX allows us to write HTML in React.',
      example: 'Writing <h1>Hello</h1> directly in your JavaScript code.',
      content: (
        <>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            JSX makes it easier to write and add HTML in React.
          </p>
        </>
      ),
      codeSnippet: `const myElement = <h1>I Love JSX!</h1>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);`
    },
    {
      id: 'react-components',
      title: 'React Components',
      definition: 'Components are like functions that return HTML elements. Components are independent and reusable bits of code.',
      example: 'A "Button" component that you can use all over your website.',
      content: (
        <>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Components come in two types, Class components and Function components.
          </p>
        </>
      ),
      codeSnippet: `function Car() {
  return <h2>Hi, I am a Car!</h2>;
}`
    },
    {
      id: 'react-props',
      title: 'React Props',
      definition: 'Props are arguments passed into React components. Props are passed to components via HTML attributes.',
      example: 'Passing the color "red" to a Car component so it knows what color to display.',
      content: (
        <>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            React Props are like function arguments in JavaScript and attributes in HTML.
          </p>
        </>
      ),
      codeSnippet: `function Car(props) {
  return <h2>I am a {props.brand}!</h2>;
}

const myElement = <Car brand="Ford" />;`
    },
    {
      id: 'react-events',
      title: 'React Events',
      definition: 'Just like HTML DOM events, React can perform actions based on user events.',
      example: 'Clicking a button to trigger a function.',
      content: (
        <>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            React has the same events as HTML: click, change, mouseover etc.
          </p>
        </>
      ),
      codeSnippet: `function Football() {
  const shoot = () => {
    alert("Great Shot!");
  }

  return (
    <button onClick={shoot}>Take the shot!</button>
  );
}`
    },
    {
      id: 'react-conditionals',
      title: 'React Conditionals',
      definition: 'In React, you can conditionally render components.',
      example: 'Showing a "Login" button if the user is logged out, and "Logout" if they are logged in.',
      content: (
        <>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            There are several ways to do this.
          </p>
        </>
      ),
      codeSnippet: `function Goal(props) {
  const isGoal = props.isGoal;
  if (isGoal) {
    return <MadeGoal/>;
  }
  return <MissedGoal/>;
}`
    },
    {
      id: 'react-lists',
      title: 'React Lists',
      definition: 'In React, you will render lists with some type of loop.',
      example: 'Displaying a list of products in a shopping cart.',
      content: (
        <>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            The JavaScript <code>map()</code> array method is generally the preferred method.
          </p>
        </>
      ),
      codeSnippet: `function Car(props) {
  return <li>I am a { props.brand }</li>;
}

function Garage() {
  const cars = ['Ford', 'BMW', 'Audi'];
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => <Car brand={car} />)}
      </ul>
    </>
  );
}`
    },
    {
      id: 'react-forms',
      title: 'React Forms',
      definition: 'Just like in HTML, React uses forms to allow users to interact with the web page.',
      example: 'A contact form where users can send you a message.',
      content: (
        <>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Handling forms is about how you handle the data when it changes value or gets submitted.
          </p>
        </>
      ),
      codeSnippet: `function MyForm() {
  const [name, setName] = useState("");

  return (
    <form>
      <label>Enter your name:
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    </form>
  )
}`
    },
    {
      id: 'react-router',
      title: 'React Router',
      definition: 'Create a single-page application with multiple views using React Router.',
      example: 'Navigating from the Home page to the About page without reloading the browser.',
      content: (
        <>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            React Router is a standard library for routing in React.
          </p>
        </>
      ),
      codeSnippet: `import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}`
    },
    {
      id: 'react-hooks',
      title: 'React Hooks',
      definition: 'Hooks allow function components to have access to state and other React features.',
      example: 'Using useState to keep track of a counter.',
      content: (
        <>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Hooks are functions that let you "hook into" React state and lifecycle features from function components.
          </p>
        </>
      ),
      codeSnippet: `import React, { useState } from "react";

function FavoriteColor() {
  const [color, setColor] = useState("red");
}`
    },
    {
      id: 'react-usestate',
      title: 'React useState',
      definition: 'The React useState Hook allows us to track state in a function component.',
      example: 'Tracking whether a switch is ON or OFF.',
      content: (
        <>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            State generally refers to data or properties that need to be tracking in an application.
          </p>
        </>
      ),
      codeSnippet: `import { useState } from "react";

function FavoriteColor() {
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button type="button" onClick={() => setColor("blue")}>Blue</button>
    </>
  );
}`
    },
    {
      id: 'react-useeffect',
      title: 'React useEffect',
      definition: 'The useEffect Hook allows you to perform side effects in your components.',
      example: 'Fetching data from an API when the component loads.',
      content: (
        <>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Some examples of side effects are: fetching data, directly updating the DOM, and timers.
          </p>
        </>
      ),
      codeSnippet: `import { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return <h1>I've rendered {count} times!</h1>;
}`
    }
  ];

  const topics = courseData.map(topic => topic.title);
  const activeTopic = courseData[activeTopicIndex];

  const CodeBlock = ({ code, lang = 'jsx' }: { code: string, lang?: string }) => (
    <div className="bg-[#1e1e1e] text-gray-200 p-6 rounded-2xl font-mono text-sm mb-6 overflow-x-auto shadow-xl border border-gray-800">
      <div className="flex items-center space-x-2 mb-4 border-b border-gray-700 pb-4">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="ml-4 text-xs text-gray-500 font-sans">{lang === 'jsx' ? 'App.jsx' : 'index.html'}</span>
      </div>
      <pre className="leading-relaxed text-cyan-300">{code}</pre>
    </div>
  );

  return (
    <CoursePageLayout
      title="React Tutorial"
      description="React is a JavaScript library for building user interfaces. Learn React from scratch."
      topics={topics}
      icon={Atom}
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

export default ReactCoursePage;
