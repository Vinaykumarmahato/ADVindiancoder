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

export default function PythonCompilerSEO() {
    return (
        <section className="bg-white dark:bg-[#050914] py-16 px-4 md:px-8">
            <div className="max-w-4xl mx-auto space-y-12">
                {/* Intro */}
                <div>
                    <h1 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
                        Free Online Python Compiler - Write, Run & Debug Python Code
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                        Welcome to the ultimate Online Python Compiler by Adv Indian Coder. Whether you are a beginner taking your first steps in programming or an experienced developer looking to quickly test a code snippet, our web-based Python IDE provides a seamless, lightning-fast coding environment. Python is currently one of the most popular and versatile programming languages in the world, utilized for everything from web development and data science to artificial intelligence and automation. However, setting up a local development environment can sometimes be tedious. That is where our online Python compiler comes in. You can write, execute, and debug your Python 3 code directly in your web browser without installing any software.
                    </p>
                </div>

                {/* Features */}
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">Why Use Our Online Python Compiler?</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                        Finding the right environment to practice coding shouldn't be a barrier to your learning journey. Our platform is designed with user experience, speed, and accessibility in mind. Here is why our online Python editor stands out:
                    </p>
                    
                    <div className="space-y-6">
                        <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Instant Execution & Fast Compilation</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Time is of the essence when you are debugging or learning a new logic structure. Our cloud-based servers ensure that your code is compiled and executed instantly. You don't have to wait for heavy IDEs to load or worry about local machine performance. Just type your script, hit run, and view the output in real-time. This rapid feedback loop is essential for effective learning and rapid prototyping.
                            </p>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Zero Installation & Setup</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Configuring system paths, managing environment variables, and dealing with dependencies can be frustrating, especially for beginners. Our online Python compiler removes these hurdles entirely. There are no downloads, no installations, and no complex configurations. As long as you have an internet connection and a web browser, you have a fully functional Python environment ready to go at a moment's notice.
                            </p>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Mobile and Tablet Friendly Interface</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Inspiration can strike anywhere. We've optimized our compiler to be fully responsive, meaning it works flawlessly on desktops, laptops, tablets, and smartphones. The mobile-friendly interface ensures that you can practice coding while commuting, relaxing on the couch, or whenever you don't have access to your main computer.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Additional Features */}
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">Key Features of Our Python IDE</h2>
                    <ul className="list-disc list-inside space-y-4 text-gray-600 dark:text-gray-400">
                        <li><strong>Syntax Highlighting:</strong> Easily read and understand your code with industry-standard color coding for variables, functions, strings, and keywords.</li>
                        <li><strong>Error Detection & Debugging:</strong> Get clear, concise error messages and tracebacks to help you identify and fix bugs in your code quickly.</li>
                        <li><strong>Support for Standard Libraries:</strong> Import and use built-in Python modules like <code>math</code>, <code>datetime</code>, <code>random</code>, and <code>json</code> without any extra setup.</li>
                        <li><strong>Dark and Light Themes:</strong> Customize your workspace to reduce eye strain with intuitive theme toggles.</li>
                        <li><strong>Code Sharing (Upcoming):</strong> Easily generate links to share your code snippets with peers, mentors, or students.</li>
                    </ul>
                </div>

                {/* How To */}
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">How to Run Python Code Online</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                        Using our platform is incredibly straightforward. Follow these simple steps to execute your first Python program:
                    </p>
                    <ol className="list-decimal list-inside space-y-3 text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
                        <li><strong>Navigate to the Editor:</strong> Open the Adv Indian Coder Online Python Compiler page.</li>
                        <li><strong>Write Your Code:</strong> Use the interactive text area to type your Python script. You can start from scratch or paste existing code.</li>
                        <li><strong>Click Run:</strong> Hit the prominent "Run" or "Execute" button located near the editor.</li>
                        <li><strong>View Output:</strong> Instantly see the results, including printed statements or error logs, in the dedicated output console below or beside the editor.</li>
                    </ol>
                </div>

                {/* Who Benefits */}
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">Who Should Use This Web-Based Python Interpreter?</h2>
                    <ul className="list-disc list-inside space-y-4 text-gray-600 dark:text-gray-400">
                        <li><strong>Students and Beginners:</strong> If you are learning Python through tutorials or bootcamps, this compiler provides a sandbox to practice exercises safely.</li>
                        <li><strong>Educators:</strong> Teachers can use the compiler to demonstrate coding concepts live in the classroom without worrying about lab computer setups.</li>
                        <li><strong>Professional Developers:</strong> Need to test a regular expression, verify a quick mathematical logic, or check a function's behavior? Open the compiler and test it in seconds.</li>
                        <li><strong>Interview Candidates:</strong> Practice data structures and algorithm challenges in a browser environment, simulating real remote technical interviews.</li>
                    </ul>
                </div>

                {/* FAQs */}
                <div className="pt-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">Frequently Asked Questions</h2>
                    <div className="space-y-2">
                        <FAQItem 
                            question="What is an online Python compiler?" 
                            answer="An online Python compiler is a web-based application that allows you to write, execute, and test Python code directly in your internet browser without needing to download or install any software on your local computer." 
                        />
                        <FAQItem 
                            question="Is this Python compiler free to use?" 
                            answer="Yes, our online Python compiler is 100% free to use. There are no hidden fees, subscriptions, or usage limits for standard coding practices." 
                        />
                        <FAQItem 
                            question="Do I need to download anything to run Python?" 
                            answer="No. The entire compilation and execution process happens on our secure cloud servers. You only need a web browser and an internet connection." 
                        />
                        <FAQItem 
                            question="Can I use this compiler on my smartphone?" 
                            answer="Absolutely! Our platform is fully responsive and optimized for mobile devices, allowing you to code comfortably on your smartphone or tablet." 
                        />
                        <FAQItem 
                            question="Which version of Python is supported?" 
                            answer="Our compiler currently supports Python 3, ensuring you have access to the modern features, syntax, and standard libraries of the language." 
                        />
                        <FAQItem 
                            question="How do I debug errors in my code here?" 
                            answer="If there is a syntax or runtime error in your script, the compiler will display the standard Python traceback in the output console, pointing out the exact line and nature of the error so you can fix it." 
                        />
                        <FAQItem 
                            question="Does this support standard Python libraries?" 
                            answer="Yes, you can import and utilize standard Python built-in libraries such as math, random, datetime, re, and more for your programs." 
                        />
                        <FAQItem 
                            question="Is my code secure?" 
                            answer="Yes. The code is executed in an isolated sandbox environment. It is not permanently stored on our servers unless you explicitly use a save/share feature, ensuring your data remains private." 
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
