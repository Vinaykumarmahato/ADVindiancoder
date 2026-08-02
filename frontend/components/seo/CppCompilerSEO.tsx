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

export default function CppCompilerSEO() {
    return (
        <section className="bg-white dark:bg-[#050914] py-16 px-4 md:px-8">
            <div className="max-w-4xl mx-auto space-y-12">
                {/* Intro */}
                <div>
                    <h1 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
                        Online C++ Compiler: Write, Compile, and Run C++ Code Instantly
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                        Welcome to the ultimate <strong>Online C++ Compiler</strong> provided by Advanced Indian Coder. Whether you are a student taking your first steps into the world of programming, an educator teaching computer science, or a professional developer testing a quick snippet of code, our platform provides a robust, fast, and secure environment to <strong>write, compile, and run C++ code online</strong>.
                    </p>
                </div>

                {/* Why Choose Us */}
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">Why Choose Our Free Online C++ Compiler?</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                        In the modern fast-paced world of software development and learning, convenience is key. Setting up a local development environment for C++ can be a tedious process. It involves downloading heavy IDEs (Integrated Development Environments) like Visual Studio, Code::Blocks, or Eclipse, installing compilers like GCC (MinGW), configuring system PATH variables, and dealing with various compatibility issues depending on your operating system. Our <strong>C++ online compiler</strong> eliminates all these hurdles.
                    </p>
                    
                    <div className="space-y-6">
                        <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">No Installation or Setup Required</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                The biggest advantage of using an <strong>online IDE for C++</strong> is that you do not need to install anything on your device. You can access our compiler from any web browser, whether you are using Windows, macOS, Linux, ChromeOS, or even a mobile device or tablet. This makes it incredibly easy to start coding immediately. All you need is an active internet connection, and you are ready to compile C++ online.
                            </p>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Lightning-Fast Code Execution</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Our backend infrastructure is highly optimized to deliver near-instantaneous compilation and execution times. We use industry-standard C++ compilers (like GCC and Clang) to ensure that your code is compiled exactly as it would be on a traditional local machine. When you click the "Run" button, your C++ source code is securely sent to our cloud servers, compiled into machine code, and executed in a sandboxed environment. The output is then immediately streamed back to your screen.
                            </p>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Secure and Private Environment</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Security is a top priority at Advanced Indian Coder. When you use our <strong>free online C++ compiler</strong>, your code is executed in highly secure, isolated containers. This prevents any malicious code from affecting the system or other users. Furthermore, your code snippets remain private. We do not store your code without your explicit permission, ensuring your intellectual property remains yours alone.
                            </p>
                        </div>
                    </div>
                </div>

                {/* How To Run */}
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">How to Compile and Run C++ Code Online</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                        Using our platform is designed to be as intuitive as possible. Here is a simple step-by-step guide to get you started:
                    </p>
                    <ol className="list-decimal list-inside space-y-3 text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
                        <li><strong>Write Your Code:</strong> Use the interactive code editor to type out your C++ program. The editor comes equipped with syntax highlighting, auto-completion, and line numbering to make coding easier.</li>
                        <li><strong>Provide Input (Optional):</strong> If your C++ program requires user input via <code>cin</code> or <code>scanf</code>, you can provide these inputs in the designated "Custom Input" section before running the program.</li>
                        <li><strong>Click Run:</strong> Press the "Run" or "Compile" button. Our servers will process your code in real-time.</li>
                        <li><strong>View Output:</strong> The result of your program, including any print statements (<code>cout</code>) and standard error messages, will be displayed in the output console at the bottom or side of the screen.</li>
                    </ol>
                </div>

                {/* Advanced Features */}
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">Advanced Features of Our C++ IDE</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 mb-6">
                        <li><strong>Syntax Highlighting & Auto-Indent:</strong> Makes reading and structuring code effortless.</li>
                        <li><strong>Multiple Compiler Versions:</strong> Choose between different C++ standards (C++11, C++14, C++17, C++20) to ensure your code is compatible with the version you need.</li>
                        <li><strong>Dark Mode and Light Mode:</strong> Customize the coding environment to reduce eye strain during long coding sessions.</li>
                        <li><strong>Code Sharing:</strong> Easily generate a unique URL to share your code snippets with friends, colleagues, or mentors for collaborative debugging.</li>
                        <li><strong>Downloadable Code:</strong> Save your code directly to your local device as a <code>.cpp</code> file with a single click.</li>
                    </ul>
                </div>

                {/* Who Can Benefit */}
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">Who Can Benefit from an Online C++ Editor?</h2>
                    
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Students and Beginners Learning C++</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                C++ is a foundational language taught in countless computer science curriculums worldwide. Its concepts of object-oriented programming, memory management, and pointers are crucial for any aspiring software engineer. Our <strong>C++ compiler online free</strong> is the perfect playground for beginners to practice algorithms, data structures, and basic syntax without worrying about complex software setups.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Developers Preparing for Coding Interviews</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Technical interviews at top tech companies often require solving complex algorithmic problems using C++. With our compiler, you can practice solving LeetCode, HackerRank, or Codeforces style problems efficiently. The clean interface allows you to focus purely on the logic and problem-solving aspect rather than the tooling.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Educators and Teachers</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Teachers can use our platform to demonstrate C++ concepts live in the classroom. Instead of troubleshooting students' local IDE installations, instructors can simply direct the class to our URL and ensure everyone is on the same page, literally and figuratively.
                            </p>
                        </div>
                    </div>
                </div>

                {/* The Power of C++ */}
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">The Power of C++</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                        C++ remains one of the most powerful and widely used programming languages in the world. Originally developed by Bjarne Stroustrup as an extension of the C programming language, C++ gives developers a high level of control over system resources and memory. It is the language of choice for developing:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 mb-6">
                        <li>Operating Systems</li>
                        <li>Game Engines (like Unreal Engine)</li>
                        <li>High-Frequency Trading Platforms</li>
                        <li>Web Browsers (like Google Chrome and Mozilla Firefox)</li>
                        <li>Embedded Systems</li>
                    </ul>
                    <p className="text-gray-600 dark:text-gray-400 font-semibold italic">
                        Start coding now and experience the best environment to run C++ online!
                    </p>
                </div>

                {/* FAQs */}
                <div className="pt-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">Frequently Asked Questions</h2>
                    <div className="space-y-2">
                        <FAQItem 
                            question="Is this online C++ compiler free to use?" 
                            answer="Yes, the Advanced Indian Coder online C++ compiler is 100% free to use with no hidden charges or subscriptions required." 
                        />
                        <FAQItem 
                            question="Do I need to create an account to run my C++ code?" 
                            answer="No, you can write and execute C++ code anonymously without creating an account. However, creating an account may allow you to save your code history." 
                        />
                        <FAQItem 
                            question="Which C++ versions are supported?" 
                            answer="Our compiler supports multiple C++ standards, including C++11, C++14, C++17, and C++20. You can choose the version you need from the compiler settings." 
                        />
                        <FAQItem 
                            question="Can I take user input in my C++ program?" 
                            answer="Absolutely! You can provide standard input in the 'Custom Input' box before executing your code." 
                        />
                        <FAQItem 
                            question="What compilers are running in the backend?" 
                            answer="We use industry-standard compilers like GCC (GNU Compiler Collection) to ensure accurate and fast compilation." 
                        />
                        <FAQItem 
                            question="Can I use this compiler on my mobile phone?" 
                            answer="Yes, our web interface is fully responsive, meaning you can write and compile C++ code seamlessly on your smartphone or tablet." 
                        />
                        <FAQItem 
                            question="Is it possible to share my code with others?" 
                            answer="Yes, we provide a share feature that generates a unique link to your code, which you can easily send to friends or teachers." 
                        />
                        <FAQItem 
                            question="Are external C++ libraries supported?" 
                            answer="Currently, we support the C++ Standard Template Library (STL). Support for external third-party libraries may be limited to ensure system security and fast execution times." 
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
