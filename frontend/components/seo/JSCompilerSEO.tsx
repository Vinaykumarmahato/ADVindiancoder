import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-gray-200 dark:border-gray-800">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-4 flex justify-between items-center text-left focus:outline-none"
            >
                <span className="font-semibold text-gray-900 dark:text-gray-100">{question}</span>
                {isOpen ? <ChevronUp className="w-5 h-5 text-primary" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
            </button>
            {isOpen && (
                <div className="pb-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                    {answer}
                </div>
            )}
        </div>
    );
};

export default function JSCompilerSEO() {
    return (
        <section className="bg-white dark:bg-[#050914] py-16 px-4 md:px-8">
            <div className="max-w-4xl mx-auto space-y-12">
                {/* Intro */}
                <div>
                    <h1 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
                        Online JavaScript Compiler: Write and Run JS Code Instantly
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                        Welcome to the ultimate <strong>Online JavaScript Compiler</strong> provided by Adv Indian Coder. Whether you are a beginner taking your first steps into the world of web development, or a seasoned programmer looking for a quick and reliable way to test your scripts, our platform is built for you. You no longer need to rely on heavy local development environments or go through complex installation processes to write and run your JavaScript code. With our browser-based JS compiler, you can seamlessly write, debug, and execute JavaScript instantly, completely free of charge.
                    </p>
                </div>

                {/* Evolution */}
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">The Evolution of JavaScript and the Need for Online Compilers</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                        JavaScript is the undisputed language of the web. Originally created to add simple interactivity to static HTML pages, it has evolved into a powerhouse programming language capable of running full-stack applications, mobile apps, and machine learning models. As the language grew in complexity, so did the tools required to write it. Developers typically rely on local setups involving Node.js, package managers like npm or yarn, and heavy Integrated Development Environments (IDEs) like Visual Studio Code or WebStorm.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                        While these tools are essential for large-scale enterprise applications, they can be overkill for smaller tasks. Setting up a local environment requires downloading software, managing system path variables, and configuring code editors. This can be intimidating for beginners and tedious for professionals who simply want to test a quick algorithm, debug a specific function, or verify a regular expression. This is exactly where our <strong>online JavaScript compiler</strong> steps in, bridging the gap by offering a fully functional, zero-setup coding environment right inside your web browser.
                    </p>
                </div>

                {/* Why Choose Us */}
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">Why Choose Our Online JS Compiler?</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                        Our <strong>online JS editor</strong> is designed with speed, efficiency, and user experience in mind. Here is why thousands of developers trust our platform for their daily coding needs:
                    </p>
                    
                    <div className="space-y-6">
                        <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Lightning-Fast Code Execution</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                When you write code, you want instant feedback. Our compiler leverages modern browser technologies and optimized backend execution engines to ensure your JavaScript runs in milliseconds. The moment you hit the "Run" button, your output is displayed instantly in the integrated console. This rapid feedback loop is invaluable for learning, allowing you to tweak your code and immediately see the results.
                            </p>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Modern ES6+ Syntax Support</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                JavaScript has changed significantly since the introduction of ES6 (ECMAScript 2015). Features like arrow functions, destructuring assignments, template literals, async/await, and modules are now industry standards. Our compiler is fully up-to-date with the latest ECMAScript specifications. You can comfortably write modern JavaScript knowing that our execution environment fully supports the newest language features.
                            </p>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">No Installation or Setup Required</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Accessibility is a core focus of our tool. Because it is completely cloud-based and browser-native, there is absolutely zero setup required. You do not need to install Node.js, configure a local server, or worry about your operating system's compatibility. Whether you are on a high-end Windows desktop, a Mac, a lightweight Linux distribution, or even a Chromebook, as long as you have a modern web browser and an internet connection, you have access to a world-class coding environment.
                            </p>
                        </div>
                    </div>
                </div>

                {/* How To Run */}
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">How to Run JavaScript Online Using Our Editor</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                        Using our <strong>JavaScript runner</strong> is incredibly straightforward, even if you have never written a line of code before. Follow these simple steps:
                    </p>
                    <ol className="list-decimal list-inside space-y-3 text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
                        <li><strong>Open the Editor:</strong> Navigate to our Online JavaScript Compiler page. You will be greeted by a clean, distraction-free interface split into a code editor window and an output console.</li>
                        <li><strong>Write Your Code:</strong> Click inside the editor and start typing your JavaScript code. You will notice our intelligent editor provides syntax highlighting, which color-codes different parts of your script (like keywords, strings, and variables) to make it easier to read and debug.</li>
                        <li><strong>Execute the Code:</strong> Once you are ready, click the prominent "Run" button.</li>
                        <li><strong>View the Output:</strong> Look at the console pane adjacent to or below the editor. Any <code>console.log()</code> statements, errors, or execution results will be printed there instantly.</li>
                    </ol>
                </div>

                {/* Key Features */}
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">Key Features of the JavaScript Runner</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 mb-6">
                        <li><strong>Syntax Highlighting & Formatting:</strong> Readability is crucial. Our editor automatically formats your code and highlights syntax, reducing the chance of missing a parenthesis or misspelling a keyword.</li>
                        <li><strong>Error Tracking:</strong> If your code contains a bug, our compiler will catch it. The console will display clear error messages and line numbers, helping you isolate and fix the problem quickly.</li>
                        <li><strong>Dark Mode/Light Mode:</strong> Protect your eyes during late-night coding sessions. Toggle between a sleek dark theme or a crisp light theme based on your preference.</li>
                        <li><strong>Responsive Design:</strong> Our compiler scales perfectly to fit any screen size, meaning you can comfortably review and run code on your tablet or smartphone while on the go.</li>
                    </ul>
                </div>

                {/* Who Should Use */}
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">Who Should Use an Online JavaScript Editor?</h2>
                    
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Beginners and Students</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                If you are just starting to learn programming, the last thing you want to struggle with is environment configuration. Our <strong>free JavaScript compiler</strong> allows you to focus 100% on learning the syntax, logic, and core concepts of the language. It is the perfect companion for coding bootcamps, online courses, and university assignments.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Experienced Web Developers</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Even senior developers need a sandbox. Whether you are testing out a complex array manipulation, prototyping a mathematical algorithm, or verifying how a specific built-in method behaves, spinning up a local project is a waste of time. Our online editor acts as an instant scratchpad for your daily development hurdles.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Technical Interview Candidates</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Technical interviews often require candidates to solve algorithmic challenges on the spot. Practicing in an environment similar to what you will encounter during an online assessment is a great way to build confidence. You can use our platform to grind Data Structures and Algorithms (DSA) questions, time your executions, and refine your logic.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Online vs Local */}
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">Online vs Local Environment: What's the Difference?</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                        While an <strong>online JavaScript compiler</strong> is fantastic for quick tasks, it is important to understand its role compared to a local environment. A local setup (using Node.js and VS Code) is necessary when you are building multi-file architectures, working with local file systems, interacting with large databases, or managing external dependencies via npm.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                        However, for single-file scripts, algorithmic problem solving, logic testing, and educational purposes, an online compiler is far superior due to its immediacy and zero barrier to entry. Our tool is designed to complement your workflow, providing a frictionless space for the prototyping phase of your development lifecycle.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 font-semibold italic">
                        Start writing, testing, and running your JavaScript today with the most reliable online compiler by Adv Indian Coder. Empower your coding journey, eliminate setup friction, and watch your ideas come to life instantly in your browser!
                    </p>
                </div>

                {/* FAQs */}
                <div className="pt-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">Frequently Asked Questions</h2>
                    <div className="space-y-2">
                        <FAQItem 
                            question="Is this online JavaScript compiler free to use?" 
                            answer="Yes, our online JavaScript compiler is 100% free to use. There are no hidden fees, premium tiers, or registration requirements to execute your code." 
                        />
                        <FAQItem 
                            question="Do I need to install Node.js to run JavaScript here?" 
                            answer="No installation is required! Our compiler runs directly in your web browser. You do not need to download or configure Node.js, making it perfect for quick testing." 
                        />
                        <FAQItem 
                            question="Does the compiler support modern ES6+ features?" 
                            answer="Absolutely. Our JavaScript execution environment is fully up-to-date and supports modern ECMAScript features including arrow functions, classes, async/await, and template literals." 
                        />
                        <FAQItem 
                            question="Can I use this compiler on my mobile device?" 
                            answer="Yes, our platform features a responsive design that works seamlessly on smartphones and tablets, allowing you to code and test on the go." 
                        />
                        <FAQItem 
                            question="Are there limits to the code I can execute?" 
                            answer="While there is no strict limit on line count for standard usage, browsers may timeout on infinite loops or extremely heavy processing tasks to prevent your device from crashing." 
                        />
                        <FAQItem 
                            question="Does this tool provide syntax highlighting?" 
                            answer="Yes! The editor features intelligent syntax highlighting and automatic code formatting to help you write clean, error-free JavaScript." 
                        />
                        <FAQItem 
                            question="Is my code saved automatically?" 
                            answer="Currently, the compiler acts as a temporary execution scratchpad. If you refresh the page, your code will be reset. We recommend saving important snippets locally." 
                        />
                        <FAQItem 
                            question="Can I practice for technical coding interviews here?" 
                            answer="Yes, our online compiler is an excellent tool for practicing Data Structures and Algorithms (DSA) questions common in technical software engineering interviews." 
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
