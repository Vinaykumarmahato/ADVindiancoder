import React, { useState } from 'react';
import CoursePageLayout from '../../components/CoursePageLayout';
import { Settings, Code, BookOpen, Lightbulb } from 'lucide-react';

const RustCoursePage = () => {
    const [activeTopicIndex, setActiveTopicIndex] = useState(0);

    const courseData = [
        {
            id: 'rust-intro',
            title: 'Rust Intro',
            definition: 'Rust is a systems programming language that runs blazingly fast, prevents segfaults, and guarantees thread safety.',
            example: 'Building high-performance web servers or operating systems.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Rust is a multi-paradigm programming language designed for performance and safety, especially safe concurrency.
                    </p>
                </>
            ),
            codeSnippet: null
        },
        {
            id: 'rust-get-started',
            title: 'Rust Get Started',
            definition: 'To start using Rust, you need to install it. The recommended way to install Rust is via rustup.',
            example: 'Running "cargo new hello_world" to create a new project.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Rustup installs rustc, cargo, rustup and other standard tools to Cargo's bin directory.
                    </p>
                </>
            ),
            codeSnippet: `fn main() {
    println!("Hello, world!");
}`
        },
        {
            id: 'rust-syntax',
            title: 'Rust Syntax',
            definition: 'Rust syntax is similar to C++.',
            example: 'Blocks of code are delimited by curly braces.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Rust uses curly braces for code blocks and semicolons to terminate statements.
                    </p>
                </>
            ),
            codeSnippet: `fn main() {
    // Statements here are executed when the compiled binary is called
    println!("Hello World!");
}`
        },
        {
            id: 'rust-variables',
            title: 'Rust Variables',
            definition: 'By default variables are immutable. This is one of many nudges Rust gives you to write your code in a way that takes advantage of the safety and easy concurrency that Rust offers.',
            example: 'let x = 5;',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        If you want a variable to be mutable, you must add "mut" in front of the variable name.
                    </p>
                </>
            ),
            codeSnippet: `let x = 5;
let mut y = 5; // mutable variable`
        },
        {
            id: 'rust-data-types',
            title: 'Rust Data Types',
            definition: 'Rust is a statically typed language, which means that it must know the types of all variables at compile time.',
            example: 'let guess: u32 = "42".parse().expect("Not a number!");',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Rust has two subsets of data types: scalar and compound.
                    </p>
                </>
            ),
            codeSnippet: `let x = 2.0; // f64
let y: f32 = 3.0; // f32`
        },
        {
            id: 'rust-if-else',
            title: 'Rust If...Else',
            definition: 'An if expression allows you to branch your code depending on conditions.',
            example: 'if number < 5 { ... }',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        All if expressions start with the keyword if, followed by a condition.
                    </p>
                </>
            ),
            codeSnippet: `let number = 3;

if number < 5 {
    println!("condition was true");
} else {
    println!("condition was false");
}`
        },
        {
            id: 'rust-loops',
            title: 'Rust Loops',
            definition: 'Rust has three kinds of loops: loop, while, and for.',
            example: 'loop { println!("again!"); }',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        The loop keyword tells Rust to execute a block of code over and over again forever or until you explicitly tell it to stop.
                    </p>
                </>
            ),
            codeSnippet: `loop {
    println!("again!");
    break;
}`
        },
        {
            id: 'rust-functions',
            title: 'Rust Functions',
            definition: 'Rust code uses snake case as the conventional style for function and variable names.',
            example: 'fn another_function() { ... }',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        In Rust, the return value of the function is synonymous with the value of the final expression in the block of the body of a function.
                    </p>
                </>
            ),
            codeSnippet: `fn main() {
    println!("Hello, world!");

    another_function();
}

fn another_function() {
    println!("Another function.");
}`
        },
        {
            id: 'rust-ownership',
            title: 'Rust Ownership',
            definition: 'Ownership is Rust\'s most unique feature, and it enables Rust to make memory safety guarantees without needing a garbage collector.',
            example: 'Each value in Rust has a variable that\'s called its owner.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        There can only be one owner at a time. When the owner goes out of scope, the value will be dropped.
                    </p>
                </>
            ),
            codeSnippet: `{
    let s = String::from("hello"); // s is valid from this point forward

    // do stuff with s
}                                  // this scope is now over, and s is no longer valid`
        },
        {
            id: 'rust-structs',
            title: 'Rust Structs',
            definition: 'A struct, or structure, is a custom data type that lets you name and package together multiple related values that make up a meaningful group.',
            example: 'struct User { username: String, ... }',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        If you're familiar with an object-oriented language, a struct is like an object's data attributes.
                    </p>
                </>
            ),
            codeSnippet: `struct User {
    username: String,
    email: String,
    sign_in_count: u64,
    active: bool,
}`
        }
    ];

    const topics = courseData.map(topic => topic.title);
    const activeTopic = courseData[activeTopicIndex];

    const CodeBlock = ({ code, lang = 'rust' }: { code: string, lang?: string }) => (
        <div className="bg-[#1e1e1e] text-gray-200 p-6 rounded-2xl font-mono text-sm mb-6 overflow-x-auto shadow-xl border border-gray-800">
            <div className="flex items-center space-x-2 mb-4 border-b border-gray-700 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-xs text-gray-500 font-sans">main.rs</span>
            </div>
            <pre className="leading-relaxed text-orange-300">{code}</pre>
        </div>
    );

    return (
        <CoursePageLayout
            title="Rust Tutorial"
            description="Rust is a systems programming language that runs blazingly fast, prevents segfaults, and guarantees thread safety."
            topics={topics}
            icon={Settings}
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

export default RustCoursePage;
