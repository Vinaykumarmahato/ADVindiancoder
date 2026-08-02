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

export default function CCompilerSEO() {
    return (
        <section className="bg-white dark:bg-[#050914] py-16 px-4 md:px-8">
            <div className="max-w-4xl mx-auto space-y-12">
                {/* Intro */}
                <div>
                    <h1 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
                        Free Online C Compiler – Write and Run C Code Instantly
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                        Welcome to the Adv Indian Coder Free Online C Compiler, the most robust and user-friendly web-based Integrated Development Environment (IDE) tailored for C programming. Whether you are a beginner writing your very first "Hello World" program or an experienced developer testing complex algorithms, our online compiler provides a seamless, lightning-fast execution environment directly in your browser. There is no need to download heavy software, configure environment variables, or install compilers like MinGW or GCC on your local machine. Simply open your browser, write your code, and hit "Run" to see the output instantly.
                    </p>
                </div>

                {/* How To Use */}
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">How to Use Our Online C Compiler?</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                        Using our online C programming compiler is incredibly straightforward and designed with developer experience in mind. Follow these simple steps to get started:
                    </p>
                    <ol className="list-decimal list-inside space-y-3 text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
                        <li><strong>Write Your Code:</strong> Use the text editor provided on the page to type in your C code. We have pre-loaded a basic boilerplate template to save you time.</li>
                        <li><strong>Provide Input:</strong> If your program requires standard user input (via functions like <code>scanf</code>), you can enter those values in the dedicated 'Input' tab before running the program.</li>
                        <li><strong>Run the Program:</strong> Click the 'Run' or 'Compile' button. Our backend servers will instantly compile your code using a GCC compiler and execute it.</li>
                        <li><strong>View Output:</strong> The results, including any errors or warnings, will be displayed immediately in the 'Output' terminal window at the bottom of the screen.</li>
                    </ol>
                </div>

                {/* Features */}
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">Top Features of the Adv Indian Coder C IDE</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                        We have engineered this online C IDE to include all the essential features you would expect from a professional desktop code editor.
                    </p>
                    
                    <div className="space-y-6">
                        <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Lightning-Fast GCC Compilation</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Behind the scenes, our tool uses the highly optimized GNU Compiler Collection (GCC). This ensures that your code is compiled exactly as it would be on a standard Linux or Windows machine. The compilation process takes mere milliseconds, allowing for rapid iteration and testing.
                            </p>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Interactive Console for User Input</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Many basic C programs require taking data from the user. Unlike older web compilers that crash or skip input streams, our interactive console allows you to pass standard input (<code>stdin</code>) smoothly to your program, making it perfect for practicing algorithmic programming and competitive coding problems.
                            </p>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Clean, Responsive, and Dark Mode UI</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Developers spend hours looking at screens, which is why we have implemented a syntax-highlighted editor with an intuitive dark mode. The responsive design ensures that whether you are coding from a desktop computer, a tablet, or a mobile phone on the go, the interface adapts perfectly to your screen size.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Additional Sections */}
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">Why Use an Online Compiler Instead of Local Setup?</h2>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                        Setting up a local C development environment can be a daunting task for beginners. It involves downloading an IDE (like VS Code or Code::Blocks), installing a compiler (like GCC or Clang), configuring system PATH variables, and troubleshooting mysterious setup errors. An online C compiler eliminates all these hurdles. It provides a zero-setup, cloud-based platform where the environment is perfectly configured every single time. It is also highly portable; your code and environment travel with you wherever you have internet access. For educators and students, this means more time learning how to code and less time fixing installation issues.
                    </p>

                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">Why Learn C Programming Today?</h2>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                        In an era dominated by modern languages like Python, JavaScript, and Rust, you might wonder why C is still highly relevant. C is the "mother of all programming languages." Learning C gives you a profound understanding of how computers actually work under the hood. It teaches you about memory management, pointers, and CPU architecture—concepts that are often hidden by high-level languages. Because of its incredible speed and efficiency, C remains the language of choice for system-level programming. Operating systems (like Linux and Windows), embedded systems, database engines (like MySQL), and even the compilers for other modern languages are primarily written in C.
                    </p>

                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">Real-World Applications of C</h2>
                    <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-400 mb-6">
                        <li><strong>Operating Systems:</strong> The kernels of Windows, Linux, and macOS are largely written in C.</li>
                        <li><strong>Embedded Systems:</strong> From the anti-lock braking system in your car to the firmware in your microwave, C is used to program microcontrollers due to its low-level memory access and high performance.</li>
                        <li><strong>Game Development:</strong> While C++ is more common for modern game engines, C laid the foundation, and many core graphics rendering libraries are still C-based.</li>
                        <li><strong>Compilers and Interpreters:</strong> The Python interpreter, the GCC compiler itself, and many database systems like PostgreSQL rely heavily on C for speed.</li>
                    </ol>

                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">Best Practices for Writing C Code</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 mb-6">
                        <li><strong>Always Initialize Variables:</strong> Uninitialized variables in C contain "garbage values" which can lead to unpredictable behavior.</li>
                        <li><strong>Comment Your Code:</strong> Use <code>//</code> for single-line comments and <code>/* */</code> for multi-line comments to explain the logic behind complex algorithms.</li>
                        <li><strong>Manage Memory Carefully:</strong> If you advance to using dynamic memory allocation (<code>malloc</code>, <code>calloc</code>), always remember to free the memory using <code>free()</code> to prevent memory leaks.</li>
                        <li><strong>Check Return Values:</strong> Always check the return values of functions like <code>scanf</code> to ensure that the input was successfully read.</li>
                    </ul>
                </div>

                {/* FAQs */}
                <div className="pt-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">Frequently Asked Questions</h2>
                    <div className="space-y-2">
                        <FAQItem 
                            question="What is a C compiler?" 
                            answer="A C compiler is a software program that translates human-readable C programming code (source code) into machine-readable instructions (binary code) that a computer's processor can execute." 
                        />
                        <FAQItem 
                            question="Is this online C compiler really free?" 
                            answer="Yes, the Adv Indian Coder online C compiler is 100% free to use. There are no hidden charges, no premium subscriptions required, and no limits on how many times you can compile your code." 
                        />
                        <FAQItem 
                            question="Which underlying compiler does this tool use?" 
                            answer="Our online platform utilizes the robust GNU Compiler Collection (GCC) to compile and execute your C code, ensuring industry-standard compliance and accurate error reporting." 
                        />
                        <FAQItem 
                            question="Can I provide standard input to my program?" 
                            answer="Absolutely. We feature an interactive console or an 'Input' tab where you can type or paste standard input before execution. This is essential for programs utilizing scanf() or getchar()." 
                        />
                        <FAQItem 
                            question="Do I need to install anything on my computer to use this?" 
                            answer="No installation is required. This is a fully web-based cloud IDE. All compilation and execution happen on our secure backend servers." 
                        />
                        <FAQItem 
                            question="Does the compiler support mobile devices?" 
                            answer="Yes, our IDE is built with a responsive design. You can comfortably write, compile, and execute C code from your smartphone, tablet, or desktop browser." 
                        />
                        <FAQItem 
                            question="Which standard C libraries are supported?" 
                            answer="We support all standard C libraries, including stdio.h, stdlib.h, math.h, string.h, and time.h." 
                        />
                        <FAQItem 
                            question="Is learning C still relevant today?" 
                            answer="Yes, learning C is highly relevant. It forms the foundation for understanding computer memory architecture, system programming, embedded systems, and serves as a stepping stone to learning C++, Java, and Python." 
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
