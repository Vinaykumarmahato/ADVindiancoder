
export const JAVA_EPISODES = [
    {
        "id": 1,
        "title": "EP 01 – What is Programming? | Introduction to Programming",
        "youtubeId": "IvTuFG-lXyw",
        "thumbnail": "/Thumbnail/ep-01-programming-introduction-thumbnail.png",
        "tags": [
            "Java",
            "Basics"
        ],
        "notes": {
            "intro": "Programming असल में हमारे Computer/Mobile को दिए गए step-by-step instructions का सेट है — जिससे हम किसी भी काम को automatically करवा सकते हैं।",
            "topics": [
                "🖥️ What is Programming and why do we need it?",
                "🌍 Real-life use cases: ATM, Swiggy, WhatsApp — all powered by code",
                "🧠 Machine Level vs. High-Level Languages",
                "☕ Introduction to Java & Why it's the industry's top choice",
                "💡 The Age Calculator analogy — understanding input/output"
            ],
            "code": "// Basic Example: Giving instruction in Java\npublic class HelloWorld {\n    // Execution starts from main method\n    public static void main(String[] args) {\n        // Instructing the computer to print a message\n        System.out.println(\"Welcome to the World of Programming!\");\n    }\n}",
            "quiz": [
                {
                    "question": "What is the difference between programming and coding?",
                    "answer": "Coding is the act of writing code in a specific language, while Programming is the broader process of creating a functional software solution including logic, planning, and debugging.",
                    "options": [
                        "Programming is broader; Coding is just writing syntax",
                        "Coding is broader; Programming is just writing syntax",
                        "Both are exactly the same thing",
                        "Coding is for machines; Programming is for humans"
                    ],
                    "correctIndex": 0
                },
                {
                    "question": "What is a compiler and how does it work?",
                    "answer": "A compiler is a translator that converts high-level source code into machine code or bytecode all at once before execution.",
                    "options": [
                        "Translates line-by-line",
                        "Translates the whole code at once",
                        "It runs the code directly",
                        "None of the above"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Why is Java called a high-level language?",
                    "answer": "Because it uses human-readable syntax (like English words) and abstracts away the complex details of the computer hardware.",
                    "options": [
                        "Because it's very difficult",
                        "Because it uses human-readable syntax",
                        "Because it only runs on high-end PCs",
                        "Because it is closer to binary"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "How does the computer understand high-level code?",
                    "answer": "Computers only understand 0 and 1. High-level code is converted into binary (machine code) by a Compiler or Interpreter.",
                    "options": [
                        "It understands English directly",
                        "Using a translator (Compiler/Interpreter)",
                        "By connecting to the internet",
                        "By increasing CPU speed"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is the role of algorithms in programming?",
                    "answer": "An algorithm is a step-by-step procedure or formula for solving a problem, which acts as the logic foundation for your code.",
                    "options": [
                        "To make code look pretty",
                        "Step-by-step logic for solving a problem",
                        "To speed up internet",
                        "To store high-quality images"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What are the different types of programming languages?",
                    "answer": "Main types are Low-Level (Machine, Assembly) and High-Level (Java, Python, C++).",
                    "options": [
                        "Low-Level and High-Level",
                        "First-Level and Second-Level",
                        "Basic-Level and Advanced-Level",
                        "None of the above"
                    ],
                    "correctIndex": 0
                },
                {
                    "question": "Can you name 3 real-world devices that use Java?",
                    "answer": "Android Phones, Smart Cards, and Enterprise Banking Servers.",
                    "options": [
                        "Calculators, Radio, Fans",
                        "Android Phones, Banking Servers, Smart Cards",
                        "Bulbs, Chairs, Tables",
                        "Pencils, Papers, Pens"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Why does Java enforce writing code inside classes?",
                    "answer": "Java is designed around Object-Oriented principles, where code encapsulation is a core tenet. Thus, all execution code must reside within a class.",
                    "options": [
                        "To make execution slow",
                        "To support Object-Oriented Encapsulation",
                        "Because compiler cannot read standalone code",
                        "To increase memory usage"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is camelCase and PascalCase, and why do programmers use them?",
                    "answer": "Naming conventions like camelCase (for variables/methods) and PascalCase (for classes) make code readable and help distinguish different code symbols.",
                    "options": [
                        "Strict compiler constraints",
                        "Optional formatting with no value",
                        "Readability conventions to identify classes vs variables",
                        "Rules to compile code faster"
                    ],
                    "correctIndex": 2
                },
                {
                    "question": "What is the difference between source code and compiled bytecode?",
                    "answer": "Source code (.java) is human-readable English-like text. Bytecode (.class) is highly optimized instruction code meant to be run by the JVM.",
                    "options": [
                        "Source code is run by the CPU; bytecode by JVM",
                        "Source code is human-readable; bytecode is JVM-readable",
                        "Source code is slower than bytecode",
                        "None of the above"
                    ],
                    "correctIndex": 1
                }
            ]
        }
    },
    {
        "id": 2,
        "title": "EP 02 – Low Level vs High Level Languages | How Computers Understand Code",
        "youtubeId": "nkV2BO3h5J8",
        "thumbnail": "/Thumbnail/ep-02-low-vs-high-level-thumbnail.png",
        "tags": [
            "Java",
            "Theory"
        ],
        "notes": {
            "intro": "Computer केवल 0 और 1 (Binary) समझता है। High-Level languages जैसे Java को Compiler/Interpreter मशीन-कोड में translate करता है।",
            "topics": [
                "🔢 Machine Language (Binary: 0s and 1s) — what the CPU actually runs",
                "📜 Assembly Language — human-readable machine instructions",
                "🌐 High-Level Languages — Java, Python, C++ (human-friendly)",
                "⚙️ Compiler vs Interpreter — how Java uses both (javac + JVM)",
                "🏆 Why Java chose Bytecode — Write Once, Run Anywhere (WORA)"
            ],
            "code": "// Java source code (High-Level Language)\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Compiled to Bytecode, run by JVM!\");\n    }\n}\n// javac Main.java  → creates Main.class (Bytecode)\n// java Main        → JVM converts Bytecode to Machine Code and runs it",
            "quiz": [
                {
                    "question": "Detailed difference between Compiler and Interpreter?",
                    "answer": "A Compiler translates the whole program at once (Faster execution), while an Interpreter translates line-by-line (Better for debugging).",
                    "options": [
                        "Compiler: Line-by-line; Interpreter: Whole",
                        "Compiler: Whole; Interpreter: Line-by-line",
                        "Both are exactly same",
                        "None of the above"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Which one is faster: Compiler or Interpreter? Why?",
                    "answer": "Compiler is faster because it produces an executable machine code file once, which the CPU can run directly without re-translating.",
                    "options": [
                        "Interpreter",
                        "Compiler",
                        "Both have same speed",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Define Bytecode in simple terms.",
                    "answer": "Bytecode is a highly optimized set of instructions designed to be executed by the JVM (Java Virtual Machine) rather than the physical CPU.",
                    "options": [
                        "Machine Code",
                        "Human Readable Code",
                        "Instruction for JVM",
                        "Binary Code"
                    ],
                    "correctIndex": 2
                },
                {
                    "question": "Why can't JVM run Java source code (.java) directly?",
                    "answer": ".java files are for humans. Compiling them into .class (Bytecode) makes them optimized and secure for the machine.",
                    "options": [
                        "Because .java is for humans",
                        "Because compilers are lazy",
                        "Because JVM only speaks binary",
                        "It can run .java directly"
                    ],
                    "correctIndex": 0
                },
                {
                    "question": "What is the benefit of translating HLL to Assembly first?",
                    "answer": "It allows for hardware-specific optimizations and helps developers understand how the code interacts with the CPU registers.",
                    "options": [
                        "Makes code smaller",
                        "Hardware optimizations",
                        "Makes code multi-colored",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Is Java a purely compiled or purely interpreted language?",
                    "answer": "Java is both! It is compiled into Bytecode (javac) and then interpreted/JIT-compiled by the JVM.",
                    "options": [
                        "Purely Compiled",
                        "Purely Interpreted",
                        "Both (Compiled & Interpreted)",
                        "Neither"
                    ],
                    "correctIndex": 2
                },
                {
                    "question": "What is the file extension of Compiled Java code?",
                    "answer": ".class",
                    "options": [
                        ".java",
                        ".exe",
                        ".class",
                        ".txt"
                    ],
                    "correctIndex": 2
                },
                {
                    "question": "What is the role of the JIT (Just-In-Time) compiler in the JVM?",
                    "answer": "The JIT compiler improves performance by compiling frequently executed bytecode sections (hot spots) into native machine code at runtime.",
                    "options": [
                        "Translates line-by-line",
                        "Compiles code before application starts",
                        "Compiles hot spots into native machine code at runtime",
                        "Deletes temporary bytecode files"
                    ],
                    "correctIndex": 2
                },
                {
                    "question": "Difference between JVM, JRE, and JDK?",
                    "answer": "JDK is the development toolkit (contains compiler & tools). JRE is the runtime environment (contains libraries & JVM). JVM is the execution engine.",
                    "options": [
                        "JVM > JRE > JDK",
                        "JDK > JRE > JVM (JDK contains JRE, which contains JVM)",
                        "JRE contains JDK",
                        "There is no difference"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Is JVM platform-independent or platform-dependent?",
                    "answer": "JVM is platform-dependent because it must translate bytecode to the specific operating system and hardware CPU instructions. The compiled code is independent.",
                    "options": [
                        "JVM is platform-independent",
                        "JVM is platform-dependent",
                        "Both",
                        "None"
                    ],
                    "correctIndex": 1
                }
            ]
        }
    },
    {
        "id": 3,
        "title": "EP 03 – Why Java in 2026? | Best Language for Freshers to Learn",
        "youtubeId": "xoVVwGZE6gs",
        "thumbnail": "/Thumbnail/ep-03-why-java-2026-thumbnail.png",
        "tags": [
            "Java",
            "Career"
        ],
        "notes": {
            "intro": "Java 2026 में भी क्यों सीखें? Freshers के लिए यह सबसे समझदार choice क्यों है — Industry demand, salary, और future scope.",
            "topics": [
                "💰 Java Developer Salary in India: ₹4L-₹25L+ range",
                "🏦 Used by: Banks, Railways, Amazon, Google, Android",
                "🔒 Java vs Python vs C++: Why Java wins for Enterprise & Backend",
                "🌐 Java's role in: Web Backend, Android, Cloud, AI/ML Integration",
                "📈 Job market: 50,000+ Java job openings in India at any given time"
            ],
            "code": "// Java is used everywhere!\n// Android Apps → Activity.java (Android SDK)\n// Backend APIs → Spring Boot (REST APIs)\n// Banking Apps → Enterprise Java (J2EE)\n// Big Data → Apache Hadoop (written in Java)",
            "quiz": [
                {
                    "question": "What makes Java better than C++ for large-scale enterprise apps?",
                    "answer": "Java provides automatic memory management (Garbage Collection) and platform independence (JVM), which reduces bugs and deployment costs.",
                    "options": [
                        "Pointers",
                        "Automatic Memory Management",
                        "Manual Memory Management",
                        "Smaller binary size"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "How is Java relevant in the era of AI and ML?",
                    "answer": "Java is used for the production-side of AI models (Model serving) and big data processing (Hadoop, Spark).",
                    "options": [
                        "Not relevant at all",
                        "Used for Big Data & Production Serving",
                        "Only for drawing 2D charts",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Why do banks prefer Java over Python for backend?",
                    "answer": "Java is much faster than Python for heavy computations and provides stronger security features and multithreading support.",
                    "options": [
                        "It's easier to learn",
                        "Faster & Stronger Security",
                        "Python is too old",
                        "Python doesn't support math"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is the average salary range for a Senior Java Dev in India?",
                    "answer": "Typically ₹18L - ₹45L+ depending on skills and the company.",
                    "options": [
                        "₹2L - ₹5L",
                        "₹5L - ₹10L",
                        "₹18L - ₹45L",
                        "₹100L+ only"
                    ],
                    "correctIndex": 2
                },
                {
                    "question": "Name 3 tech giants that heavily rely on Java today.",
                    "answer": "Google, Amazon, and Netflix.",
                    "options": [
                        "WhatsApp, Instagram, TikTok",
                        "Google, Amazon, Netflix",
                        "Tesla, SpaceX, Twitter",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Is Java popular for Android development? Why?",
                    "answer": "Yes, it was the original language for Android and millions of apps still rely on it for robustness.",
                    "options": [
                        "No",
                        "Yes, original Android language",
                        "Only for iPhone",
                        "Only for PC"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is 'Modern Java'?",
                    "answer": "It refers to the latest versions (Java 17, 21+) which include features like Records, Sealed Classes, and Virtual Threads.",
                    "options": [
                        "Java 8",
                        "Java 1.0",
                        "Java 17/21+",
                        "JavaScript"
                    ],
                    "correctIndex": 2
                },
                {
                    "question": "Why does Java enforce writing code inside classes?",
                    "answer": "Java is designed around Object-Oriented principles, where code encapsulation is a core tenet. Thus, all execution code must reside within a class.",
                    "options": [
                        "To make execution slow",
                        "To support Object-Oriented Encapsulation",
                        "Because compiler cannot read standalone code",
                        "To increase memory usage"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is camelCase and PascalCase, and why do programmers use them?",
                    "answer": "Naming conventions like camelCase (for variables/methods) and PascalCase (for classes) make code readable and help distinguish different code symbols.",
                    "options": [
                        "Strict compiler constraints",
                        "Optional formatting with no value",
                        "Readability conventions to identify classes vs variables",
                        "Rules to compile code faster"
                    ],
                    "correctIndex": 2
                },
                {
                    "question": "What is the difference between source code and compiled bytecode?",
                    "answer": "Source code (.java) is human-readable English-like text. Bytecode (.class) is highly optimized instruction code meant to be run by the JVM.",
                    "options": [
                        "Source code is run by the CPU; bytecode by JVM",
                        "Source code is human-readable; bytecode is JVM-readable",
                        "Source code is slower than bytecode",
                        "None of the above"
                    ],
                    "correctIndex": 1
                }
            ]
        }
    },
    {
        "id": 4,
        "title": "EP 04 – How Java Works | JDK → Compiler → Bytecode → JVM",
        "youtubeId": "AsMGN3NPSuI",
        "thumbnail": "/Thumbnail/ep-04-how-java-works-thumbnail.png",
        "tags": [
            "Java",
            "Theory"
        ],
        "notes": {
            "intro": "WhatsApp, Instagram जैसे apps background में कैसे run होते हैं? Java के 3 superheroes: JDK, JRE, और JVM — यही पूरा magic करते हैं!",
            "topics": [
                "🦸 JVM (Java Virtual Machine) — converts Bytecode to Machine Code (0,1)",
                "📦 JRE (Java Runtime Environment) — provides Libraries + JVM",
                "🔧 JDK (Java Development Kit) — complete toolkit (JRE + Compiler + Debugger)",
                "⚡ JIT Compiler — speeds up repeated tasks (WhatsApp chat opening example)",
                "🔄 Step-by-step execution: Source Code → javac → Bytecode → JVM → Machine Code"
            ],
            "code": "// Step-by-Step Java Execution Flow:\n// [1] Write code in IDE (VS Code / IntelliJ)\n//     public class Hello { ... }\n\n// [2] Compile with javac:\n//     javac Hello.java → Hello.class (Bytecode)\n\n// [3] JVM Inside JRE processes Bytecode:\n//     Interpreter: reads line by line\n//     JIT Compiler: optimizes repeated code (faster!)\n\n// [4] Final Output: Machine Code runs on your CPU ✅",
            "quiz": [
                {
                    "question": "What is the full form of JDK, JRE, and JVM?",
                    "answer": "JDK: Java Development Kit, JRE: Java Runtime Environment, JVM: Java Virtual Machine.",
                    "options": [
                        "Standard definitions",
                        "Custom definitions",
                        "Java Dev Kit, Runtime Env, Virtual Machine",
                        "None"
                    ],
                    "correctIndex": 2
                },
                {
                    "question": "Can we run a Java program with only JDK installed?",
                    "answer": "Yes, because JDK includes the JRE, which is needed to run programs.",
                    "options": [
                        "No",
                        "Yes",
                        "Depends on PC",
                        "Only if Internet is ON"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What happens if JRE is missing but JVM is present?",
                    "answer": "The program won't run because JVM needs JRE's libraries and resources to execute Bytecode.",
                    "options": [
                        "Runs normally",
                        "Crashes",
                        "Won't run (missing libs)",
                        "Runs faster"
                    ],
                    "correctIndex": 2
                },
                {
                    "question": "Where exactly is the JIT compiler located?",
                    "answer": "Inside the JVM. It converts frequently used Bytecode into native machine code at runtime for performance.",
                    "options": [
                        "Inside JDK",
                        "Inside JVM",
                        "Inside CPU",
                        "Inside OS"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is the primary role of the ClassLoader in JVM?",
                    "answer": "It dynamically loads .class files into memory when they are needed by the program.",
                    "options": [
                        "To delete files",
                        "To load .class files into memory",
                        "To print logs",
                        "To scan viruses"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Is JVM platform-dependent or independent? Why?",
                    "answer": "JVM is Platform-Dependent (separate for Windows/Mac), but it makes your CODE Platform-Independent.",
                    "options": [
                        "Platform Independent",
                        "Platform Dependent",
                        "Both",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is the relationship between JRE and JDK?",
                    "answer": "JDK = JRE + Development Tools (Compiler, Debugger, etc.).",
                    "options": [
                        "JRE = JDK + Tools",
                        "JDK = JRE + Tools",
                        "They are same",
                        "JDK is inside JRE"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is the role of the JIT (Just-In-Time) compiler in the JVM?",
                    "answer": "The JIT compiler improves performance by compiling frequently executed bytecode sections (hot spots) into native machine code at runtime.",
                    "options": [
                        "Translates line-by-line",
                        "Compiles code before application starts",
                        "Compiles hot spots into native machine code at runtime",
                        "Deletes temporary bytecode files"
                    ],
                    "correctIndex": 2
                },
                {
                    "question": "Difference between JVM, JRE, and JDK?",
                    "answer": "JDK is the development toolkit (contains compiler & tools). JRE is the runtime environment (contains libraries & JVM). JVM is the execution engine.",
                    "options": [
                        "JVM > JRE > JDK",
                        "JDK > JRE > JVM (JDK contains JRE, which contains JVM)",
                        "JRE contains JDK",
                        "There is no difference"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Is JVM platform-independent or platform-dependent?",
                    "answer": "JVM is platform-dependent because it must translate bytecode to the specific operating system and hardware CPU instructions. The compiled code is independent.",
                    "options": [
                        "JVM is platform-independent",
                        "JVM is platform-dependent",
                        "Both",
                        "None"
                    ],
                    "correctIndex": 1
                }
            ]
        }
    },
    {
        "id": 5,
        "title": "EP 05 – Java Features | Why Java is Still Relevant in 2026",
        "youtubeId": "PegCLdjGMaE",
        "thumbnail": "/Thumbnail/ep-05-java-features-thumbnail.png",
        "tags": [
            "Java",
            "Theory"
        ],
        "notes": {
            "intro": "Java 3 billion+ devices पर run करता है। इसके 10 core features जो इसे 2026 में भी सबसे powerful programming language बनाते हैं।",
            "topics": [
                "🌐 Platform Independent — Write Once, Run Anywhere (WORA) via JVM",
                "🔒 Secure — No pointer manipulation; ClassLoader, SecurityManager",
                "🏗️ Object Oriented — Encapsulation, Inheritance, Polymorphism, Abstraction",
                "💪 Robust — Strong type checking + Exception Handling + Garbage Collection",
                "🧵 Multithreaded — Run multiple tasks simultaneously (e.g., download + play music)",
                "⚡ High Performance — JIT Compiler makes it near C-speed in execution"
            ],
            "code": "// Java Feature Example: Platform Independence\n// Same code runs on Windows, Mac, Linux without changes\npublic class PlatformDemo {\n    public static void main(String[] args) {\n        System.out.println(\"OS: \" + System.getProperty(\"os.name\"));\n        System.out.println(\"Java runs the same everywhere!\");\n    }\n}",
            "quiz": [
                {
                    "question": "Explain the 'Write Once, Run Anywhere' (WORA) concept.",
                    "answer": "Java code is compiled into Bytecode. Since any OS with a JVM can run this Bytecode, the code is truly portable.",
                    "options": [
                        "Code runs on one OS",
                        "Code runs on any OS with JVM",
                        "Code runs on browser",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "How does Java ensure high security in its execution?",
                    "answer": "No explicit pointers, ClassLoader isolation, and Security Manager checks.",
                    "options": [
                        "Using Pointers",
                        "No Pointers & ClassLoader",
                        "Only via Password",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is 'Automatic Garbage Collection' in Java?",
                    "answer": "JVM automatically deletes objects from Heap memory that are no longer being used by the program.",
                    "options": [
                        "Manual deletion",
                        "JVM deletes unused objects",
                        "OS deletes files",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Is Java a robust language? Explain why.",
                    "answer": "Yes, because it focuses strictly on compile-time error checking and runtime exception handling.",
                    "options": [
                        "No",
                        "Yes, due to error checking",
                        "Only for web",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Definition of Multithreading in Java with a real example.",
                    "answer": "Running multiple parts of a program simultaneously, like downloading a file while typing in a chat app.",
                    "options": [
                        "Single tasking",
                        "Running multiple tasks at once",
                        "No tasks",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Why doesn't Java support explicit pointers like C++?",
                    "answer": "To prevent direct memory access, which is the main cause of crashes and security vulnerabilities.",
                    "options": [
                        "To make it slow",
                        "To prevent memory crashes",
                        "Because it's hard",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Explain the 'Object-Oriented' nature of Java.",
                    "answer": "Everything in Java is centered around 'Objects' which combine Data and Behavior.",
                    "options": [
                        "Procedural",
                        "Object-Oriented",
                        "Functional",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is the role of the JIT (Just-In-Time) compiler in the JVM?",
                    "answer": "The JIT compiler improves performance by compiling frequently executed bytecode sections (hot spots) into native machine code at runtime.",
                    "options": [
                        "Translates line-by-line",
                        "Compiles code before application starts",
                        "Compiles hot spots into native machine code at runtime",
                        "Deletes temporary bytecode files"
                    ],
                    "correctIndex": 2
                },
                {
                    "question": "Difference between JVM, JRE, and JDK?",
                    "answer": "JDK is the development toolkit (contains compiler & tools). JRE is the runtime environment (contains libraries & JVM). JVM is the execution engine.",
                    "options": [
                        "JVM > JRE > JDK",
                        "JDK > JRE > JVM (JDK contains JRE, which contains JVM)",
                        "JRE contains JDK",
                        "There is no difference"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Is JVM platform-independent or platform-dependent?",
                    "answer": "JVM is platform-dependent because it must translate bytecode to the specific operating system and hardware CPU instructions. The compiled code is independent.",
                    "options": [
                        "JVM is platform-independent",
                        "JVM is platform-dependent",
                        "Both",
                        "None"
                    ],
                    "correctIndex": 1
                }
            ]
        }
    },
    {
        "id": 6,
        "title": "EP 06 – Java Setup | Install JDK + VS Code + Run First Program",
        "youtubeId": "84n9BAu0FCE",
        "thumbnail": "/Thumbnail/ep-06-java-setup-thumbnail.png",
        "tags": [
            "Java",
            "Setup"
        ],
        "notes": {
            "intro": "Java coding शुरू करने के लिए आपको proper environment setup करना होगा। यहाँ JDK, VS Code, और Extensions का complete step-by-step guide है।",
            "topics": [
                "⬇️ Download JDK 17+ from oracle.com/java/technologies/downloads",
                "🔧 Set JAVA_HOME environment variable + add to PATH",
                "✅ Verify installation: open terminal → type 'java --version'",
                "💻 Install VS Code + Extension Pack for Java (by Microsoft)",
                "✨ Write & Run your very first 'Hello World' program!"
            ],
            "code": "// Your First Java Program!\npublic class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, World!\");\n        System.out.println(\"Java coding shuru ho gaya! 🚀\");\n    }\n}\n\n// To Run:\n// 1. Save as HelloWorld.java\n// 2. Terminal: javac HelloWorld.java\n// 3. Terminal: java HelloWorld\n// Output: Hello, World!",
            "quiz": [
                {
                    "question": "What is the purpose of setting the PATH variable?",
                    "answer": "To allow the terminal to find the 'java' and 'javac' commands from any directory.",
                    "options": [
                        "To store files",
                        "To run commands globally",
                        "To delete Java",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Difference between JAVA_HOME and PATH?",
                    "answer": "JAVA_HOME points to the JDK installation folder, while PATH includes the bin folder for command access.",
                    "options": [
                        "Same thing",
                        "JAVA_HOME is folder, PATH is for commands",
                        "PATH is folder",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "How to check the installed Java version via CMD?",
                    "answer": "java -version",
                    "options": [
                        "java --version",
                        "check java",
                        "java -v",
                        "None"
                    ],
                    "correctIndex": 0
                },
                {
                    "question": "What is the default port for most Java dev servers?",
                    "answer": "8080",
                    "options": [
                        "80",
                        "8080",
                        "3000",
                        "443"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Why do we need a separate extension for Java in VS Code?",
                    "answer": "VS Code is a text editor; the extension provides language support, debugging, and build tools.",
                    "options": [
                        "For fun",
                        "For language support & debugging",
                        "To make it slow",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What happens internally when you run 'javac HelloWorld.java'?",
                    "answer": "The compiler converts source code into Bytecode (.class file).",
                    "options": [
                        "Runs code",
                        "Compiles to Bytecode",
                        "Deletes file",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Can you run a Java program without compiling it first?",
                    "answer": "No, Java requires compilation into Bytecode before the JVM can execute it.",
                    "options": [
                        "Yes",
                        "No",
                        "Only in IDE",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Why does Java enforce writing code inside classes?",
                    "answer": "Java is designed around Object-Oriented principles, where code encapsulation is a core tenet. Thus, all execution code must reside within a class.",
                    "options": [
                        "To make execution slow",
                        "To support Object-Oriented Encapsulation",
                        "Because compiler cannot read standalone code",
                        "To increase memory usage"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is camelCase and PascalCase, and why do programmers use them?",
                    "answer": "Naming conventions like camelCase (for variables/methods) and PascalCase (for classes) make code readable and help distinguish different code symbols.",
                    "options": [
                        "Strict compiler constraints",
                        "Optional formatting with no value",
                        "Readability conventions to identify classes vs variables",
                        "Rules to compile code faster"
                    ],
                    "correctIndex": 2
                },
                {
                    "question": "What is the difference between source code and compiled bytecode?",
                    "answer": "Source code (.java) is human-readable English-like text. Bytecode (.class) is highly optimized instruction code meant to be run by the JVM.",
                    "options": [
                        "Source code is run by the CPU; bytecode by JVM",
                        "Source code is human-readable; bytecode is JVM-readable",
                        "Source code is slower than bytecode",
                        "None of the above"
                    ],
                    "correctIndex": 1
                }
            ]
        }
    },
    {
        "id": 7,
        "title": "EP 07 – From Real World to Code | How Programmers Think",
        "youtubeId": "PDiqgM5mMUw",
        "thumbnail": "/Thumbnail/ep-07-real-world-to-code-thumbnail.png",
        "tags": [
            "Java",
            "Mindset"
        ],
        "notes": {
            "intro": "Professional developers real-world problems को code में कैसे translate करते हैं? यह mental model सीखना उतना ही जरूरी है जितना syntax सीखना।",
            "topics": [
                "🧠 Think in Input → Process → Output model",
                "🏗️ Classes = Real-world entities (Car, Student, Bank Account)",
                "⚙️ Methods = Actions (drive(), calculateGrade(), deposit())",
                "📝 Naming Conventions: camelCase for variables, PascalCase for Classes",
                "🔄 main() method — the entry point of every Java program"
            ],
            "code": "// Real World → Code: Student Example\npublic class Student {\n    // Properties (real-world attributes)\n    String name = \"Vinay\";\n    int age = 22;\n    double marks = 85.5;\n\n    // Action (real-world behavior)\n    public void displayInfo() {\n        System.out.println(\"Name: \" + name);\n        System.out.println(\"Age: \" + age);\n        System.out.println(\"Marks: \" + marks);\n    }\n\n    public static void main(String[] args) {\n        Student s = new Student(); // Create object\n        s.displayInfo();           // Call behavior\n    }\n}",
            "quiz": [
                {
                    "question": "Define Class and Object with a real-life analogy.",
                    "answer": "Class is the blueprint (Car design), Object is the actual car built from it.",
                    "options": [
                        "Class=Car, Object=Design",
                        "Class=Design, Object=Car",
                        "Both same",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Why is the main method always public and static?",
                    "answer": "Public so JVM can access it, Static so it can be called without creating an object.",
                    "options": [
                        "For speed",
                        "Public access & No object needed",
                        "It's a rule",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is the return type of the main method?",
                    "answer": "void",
                    "options": [
                        "int",
                        "void",
                        "String",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Can we have multiple main methods in a single class?",
                    "answer": "No, only one main method can be the entry point.",
                    "options": [
                        "Yes",
                        "No",
                        "Only if static",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What are naming conventions for Classes in Java?",
                    "answer": "PascalCase (e.g., StudentRecord).",
                    "options": [
                        "camelCase",
                        "PascalCase",
                        "snake_case",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "How to decide if a property should be local or in a class?",
                    "answer": "If it's needed across multiple methods, make it a class property (field).",
                    "options": [
                        "Randomly",
                        "Scope needs",
                        "Always class",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is the 'entry point' of a Java application?",
                    "answer": "The main method.",
                    "options": [
                        "Constructor",
                        "main method",
                        "Class",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Why does Java enforce writing code inside classes?",
                    "answer": "Java is designed around Object-Oriented principles, where code encapsulation is a core tenet. Thus, all execution code must reside within a class.",
                    "options": [
                        "To make execution slow",
                        "To support Object-Oriented Encapsulation",
                        "Because compiler cannot read standalone code",
                        "To increase memory usage"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is camelCase and PascalCase, and why do programmers use them?",
                    "answer": "Naming conventions like camelCase (for variables/methods) and PascalCase (for classes) make code readable and help distinguish different code symbols.",
                    "options": [
                        "Strict compiler constraints",
                        "Optional formatting with no value",
                        "Readability conventions to identify classes vs variables",
                        "Rules to compile code faster"
                    ],
                    "correctIndex": 2
                },
                {
                    "question": "What is the difference between source code and compiled bytecode?",
                    "answer": "Source code (.java) is human-readable English-like text. Bytecode (.class) is highly optimized instruction code meant to be run by the JVM.",
                    "options": [
                        "Source code is run by the CPU; bytecode by JVM",
                        "Source code is human-readable; bytecode is JVM-readable",
                        "Source code is slower than bytecode",
                        "None of the above"
                    ],
                    "correctIndex": 1
                }
            ]
        }
    },
    {
        "id": 8,
        "title": "EP 08 – Methods in Java | Functions Explained from Scratch",
        "youtubeId": "JldKp7pXRCM",
        "thumbnail": "/Thumbnail/ep-08-java-methods-thumbnail.png",
        "tags": [
            "Java",
            "Methods"
        ],
        "notes": {
            "intro": "Methods का मतलब है: एक बार लिखो, बार-बार use करो! यही DRY (Don't Repeat Yourself) principle है। Methods Java code को organized, readable और reusable बनाते हैं।",
            "topics": [
                "🏭 What are Methods? The Factory Analogy — input goes in, output comes out",
                "🔄 Method Signature: returnType methodName(parameters)",
                "📥 Parameters & Arguments — data passing to methods",
                "📤 Return Types: void (no return) vs int/String (returns value)",
                "🎛️ Static Methods — called directly without creating an object"
            ],
            "code": "public class Calculator {\n\n    // Static Method — no object needed\n    public static int add(int a, int b) {\n        return a + b;  // Returns the sum\n    }\n\n    // Void Method — does work, returns nothing\n    public static void printWelcome(String name) {\n        System.out.println(\"Welcome, \" + name + \"! 🎉\");\n    }\n\n    public static void main(String[] args) {\n        int result = add(10, 20);      // Call and capture return\n        System.out.println(\"Sum: \" + result);   // Output: 30\n\n        printWelcome(\"Vinay\");          // Call void method\n    }\n}",
            "quiz": [
                {
                    "question": "Difference between Parameters and Arguments?",
                    "answer": "Parameters are in the method definition; Arguments are the actual values passed during the call.",
                    "options": [
                        "Same",
                        "Params=Def, Args=Call",
                        "Args=Def, Params=Call",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is the 'void' keyword used for in methods?",
                    "answer": "It indicates that the method does not return any value.",
                    "options": [
                        "Returns int",
                        "No return value",
                        "Returns String",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Explain Method Overloading with a small example.",
                    "answer": "Same method name, different parameters (e.g., add(int, int) and add(int, int, int)).",
                    "options": [
                        "Different names",
                        "Same name, diff params",
                        "Same params",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Why use Static methods instead of Instance methods?",
                    "answer": "To call them without creating an object of the class.",
                    "options": [
                        "For speed",
                        "No object needed",
                        "More secure",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Can a method return multiple values in Java?",
                    "answer": "No, but you can return an array or an object containing multiple values.",
                    "options": [
                        "Yes",
                        "No",
                        "Only if static",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is the default return value if none is specified?",
                    "answer": "You must specify a return type or use void.",
                    "options": [
                        "0",
                        "null",
                        "Must specify",
                        "None"
                    ],
                    "correctIndex": 2
                },
                {
                    "question": "What is the DRY principle in software development?",
                    "answer": "Don't Repeat Yourself — avoid code duplication.",
                    "options": [
                        "Do Repeat Yourself",
                        "Don't Repeat Yourself",
                        "Do Run Yearly",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What constitutes a method signature in Java?",
                    "answer": "A method signature consists of the method name and the parameter list (types, number, and order). Return type is NOT part of the signature.",
                    "options": [
                        "Return type and method name",
                        "Method name and parameters list",
                        "Access modifier and name",
                        "Entire first line of declaration"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Why can't non-static methods be called directly from static main() without an object?",
                    "answer": "Static methods belong to the class and load before any object exists. Non-static methods require object state (instance variables) to run.",
                    "options": [
                        "Because compiler disables it for security",
                        "Because non-static methods need object state to exist",
                        "To save RAM",
                        "None of the above"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Is Java pass-by-value or pass-by-reference?",
                    "answer": "Java is strictly pass-by-value. For primitive types, it passes a copy of the value. For objects, it passes a copy of the reference address.",
                    "options": [
                        "Pass-by-reference",
                        "Pass-by-value",
                        "Both",
                        "Depends on JVM"
                    ],
                    "correctIndex": 1
                }
            ]
        }
    },
    {
        "id": 9,
        "title": "EP 09 – Static vs Dynamic Programming Languages",
        "youtubeId": "qkfxULQ0YQE",
        "thumbnail": "/Thumbnail/ep-09-static-vs-dynamic-thumbnail.png",
        "tags": [
            "Java",
            "Theory"
        ],
        "notes": {
            "intro": "Java क्यों Python से अलग है? Statically Typed systems आपको errors early catch करने देते हैं — production में नहीं, बल्कि development time पर।",
            "topics": [
                "📌 Static Typing (Java, C++) — type declared at compile time",
                "🔄 Dynamic Typing (Python, JS) — type determined at runtime",
                "🛡️ Advantages of Static: Early error detection, better performance, IDE support",
                "⚡ Advantages of Dynamic: Faster prototyping, shorter code",
                "🏦 Why enterprise/banking apps use Java: Type safety = fewer bugs in production"
            ],
            "code": "// Java (Statically Typed) - Type declared upfront\nint age = 25;         // Must be integer\nString name = \"Vinay\"; // Must be String\n// age = \"hello\";     // ❌ COMPILE ERROR - caught before running!\n\n// Python (Dynamically Typed) - No type declaration\n// age = 25\n// age = \"hello\"   # Works fine at runtime (but can cause bugs!)\n\n// Java advantage: You catch TYPE errors before going live! ✅",
            "quiz": [
                {
                    "question": "What is Statically Typed vs Dynamically Typed?",
                    "answer": "Static (Java): Type checked at Compile-time. Dynamic (Python): Type checked at Runtime.",
                    "options": [
                        "Static=Runtime, Dynamic=Compile",
                        "Static=Compile, Dynamic=Runtime",
                        "Both same",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Is Java 100% Statically Typed? (Hint: 'var' keyword)",
                    "answer": "Yes, even with 'var' (Java 10+), the type is inferred at compile-time and cannot be changed later.",
                    "options": [
                        "No",
                        "Yes",
                        "Depends",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Advantage of catching errors at compile-time vs runtime?",
                    "answer": "It prevents crashes in the final product (Production) and makes developers fix bugs early.",
                    "options": [
                        "Faster",
                        "Prevents production crashes",
                        "Looks cool",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Why is Python considered more flexible but Java more stable?",
                    "answer": "Python allows type-changing (flexibility), while Java enforces structure (stability for large teams).",
                    "options": [
                        "Python is faster",
                        "Python flexible, Java stable",
                        "Java flexible",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Define 'Type Safety' in your own words.",
                    "answer": "It's a feature that prevents the compiler from performing operations on incompatible data types.",
                    "options": [
                        "Memory safety",
                        "Type safety",
                        "Speed",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Can you change the type of a variable after declaration in Java?",
                    "answer": "No, once an 'int' is declared, it can never store a 'String'.",
                    "options": [
                        "Yes",
                        "No",
                        "Only if var",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is implicit type casting (widening) and when does it happen?",
                    "answer": "Implicit casting happens automatically when assigning a smaller data type to a larger data type (e.g., int to double) without data loss.",
                    "options": [
                        "Larger type to smaller type",
                        "Smaller type to larger type automatically",
                        "Requires (target) cast syntax",
                        "Causes compile-time error"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is explicit type casting (narrowing) and what is its risk?",
                    "answer": "Explicit casting is converting a larger type to a smaller type manually (e.g., double to int). Risk includes data loss or value truncation.",
                    "options": [
                        "Widen conversion with no loss",
                        "Narrow conversion causing potential data loss/truncation",
                        "Automatic casting",
                        "None of the above"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is type promotion in arithmetic expressions?",
                    "answer": "In expressions, Java automatically promotes operands to the largest type present. e.g., byte/short/char are promoted to int first.",
                    "options": [
                        "Converts everything to double",
                        "Promotes smaller numeric operands to at least int or the largest type in expression",
                        "Promotes to String",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is integer overflow and how does it occur in Java?",
                    "answer": "Overflow occurs when a calculation exceeds the maximum limit of a primitive type. Java loops the value back to the minimum limit (circular behavior).",
                    "options": [
                        "Throws an ArithmeticException",
                        "Value wraps around to negative/minimum value limit",
                        "Compiler warning is given",
                        "RAM crashes"
                    ],
                    "correctIndex": 1
                }
            ]
        }
    },
    {
        "id": 10,
        "title": "EP 10 – Variables in Java | Storage, Scope & Memory",
        "youtubeId": "hnQlsMoyjZM",
        "thumbnail": "/Thumbnail/ep-10-java-variables-thumbnail.png",
        "tags": [
            "Java",
            "Variables"
        ],
        "notes": {
            "intro": "Variables = Computer की Memory में Data रखने वाले Containers (buckets). हर variable का एक Type, Name और Value होता है।",
            "topics": [
                "🪣 Variable Analogy: Like a labelled box — name is the label, value is the content",
                "📋 Variable Declaration: dataType variableName = value;",
                "🏠 Local Variable — declared inside a method, scope limited to that method",
                "🏛️ Instance Variable — declared in class, unique per object",
                "🌐 Static Variable — shared across ALL objects of the class"
            ],
            "code": "public class VariableDemo {\n\n    // Instance Variable (belongs to each object)\n    String name = \"Vinay\";\n\n    // Static Variable (shared by all objects)\n    static int studentCount = 0;\n\n    public static void main(String[] args) {\n\n        // Local Variable (only inside this method)\n        int age = 22;\n        double salary = 50000.50;\n        boolean isActive = true;\n        char grade = 'A';\n\n        System.out.println(\"Age: \" + age);\n        System.out.println(\"Salary: \" + salary);\n        System.out.println(\"Active: \" + isActive);\n        System.out.println(\"Grade: \" + grade);\n    }\n}",
            "quiz": [
                {
                    "question": "List 3 types of variables based on their scope.",
                    "answer": "Local Variables (inside method), Instance Variables (inside class, outside method), and Static Variables (shared across class).",
                    "options": [
                        "Local, Instance, Static",
                        "Global, Private, Public",
                        "Small, Medium, Large",
                        "Fixed, Dynamic, Shared"
                    ],
                    "correctIndex": 0
                },
                {
                    "question": "Where are Instance variables stored in memory (Stack/Heap)?",
                    "answer": "Instance variables are stored in the HEAP memory as part of the object they belong to.",
                    "options": [
                        "Stack",
                        "Heap",
                        "CPU Register",
                        "Hard Drive"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is the default value of an uninitialized Instance variable?",
                    "answer": "It depends on the type: 0 for int/byte, 0.0 for double, false for boolean, and null for objects like String.",
                    "options": [
                        "0",
                        "null",
                        "Garbage value",
                        "Depends on Data Type"
                    ],
                    "correctIndex": 3
                },
                {
                    "question": "Can local variables be accessed outside their method?",
                    "answer": "No, local variables have 'block scope' and are destroyed once the method execution is complete.",
                    "options": [
                        "Yes",
                        "No",
                        "Only if static",
                        "Only if public"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is the significance of the 'static' keyword for variables?",
                    "answer": "It ensures only one copy of the variable exists in memory, shared by every instance of that class.",
                    "options": [
                        "Makes it faster",
                        "Ensures single shared copy",
                        "Deletes it automatically",
                        "Makes it private"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is the difference between local, instance, and static variables?",
                    "answer": "Local: inside method (Stack). Instance: inside class, unique per object (Heap). Static: shared class variable (Method area).",
                    "options": [
                        "All stored on stack",
                        "Local: method scope; Instance: object scope; Static: class scope",
                        "Static is local to main",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What are the default values of uninitialized variables in Java?",
                    "answer": "Instance/static variables get default values (0, false, null). Local variables do NOT get defaults and cause compile errors if read before initialization.",
                    "options": [
                        "All get null",
                        "Local gets 0; Instance gets garbage",
                        "Local gets no default (compile error); Instance gets 0/false/null",
                        "All get 0"
                    ],
                    "correctIndex": 2
                },
                {
                    "question": "Where are local variables stored in memory?",
                    "answer": "Local variables are stored inside the active Stack Frame of the thread executing the method.",
                    "options": [
                        "Heap Memory",
                        "Method Area",
                        "Stack Memory",
                        "CPU cache"
                    ],
                    "correctIndex": 2
                },
                {
                    "question": "What does the 'final' keyword do to a variable?",
                    "answer": "It makes the variable a constant; its value can only be assigned once and cannot be changed later.",
                    "options": [
                        "Forces garbage collection",
                        "Makes it private",
                        "Makes value immutable after assignment",
                        "Speeds up compile time"
                    ],
                    "correctIndex": 2
                },
                {
                    "question": "Why do static variables share memory across all objects?",
                    "answer": "Because they belong to the class Metaspace rather than any individual object heap footprint, existing as a single copy.",
                    "options": [
                        "Because they reside in stack",
                        "Because they are shared globally inside the class Metaspace/Method Area",
                        "Because they are final",
                        "None"
                    ],
                    "correctIndex": 1
                }
            ]
        }
    },
    {
        "id": 11,
        "title": "EP 11 – Data Types in Java | Primitive & Non-Primitive Explained",
        "youtubeId": "k4aJBTHdu1Q",
        "thumbnail": "/Thumbnail/ep-11-java-data-types-thumbnail.png",
        "tags": [
            "Java",
            "Types"
        ],
        "notes": {
            "intro": "Java में 8 Primitive Data Types हैं जो memory में directly value store करते हैं। Non-Primitive types objects और references store करते हैं।",
            "topics": [
                "🔢 byte (1 byte), short (2), int (4), long (8) — integer types",
                "💧 float (4 bytes), double (8 bytes) — decimal numbers",
                "🔤 char (2 bytes) — single character (Unicode)",
                "✅ boolean (1 bit) — true / false only",
                "🏗️ Non-Primitive: String, Array, Class, Interface — stored as reference"
            ],
            "code": "public class DataTypeDemo {\n    public static void main(String[] args) {\n\n        // Primitive Types\n        byte b = 127;\n        short s = 32000;\n        int i = 2147483647;     // Max int value\n        long l = 9223372036854775807L; // Add 'L' for long\n        float f = 3.14f;        // Add 'f' for float\n        double d = 3.14159265;\n        char c = 'A';           // Single quotes for char\n        boolean flag = true;\n\n        // Non-Primitive\n        String name = \"Vinay\";  // Object, not primitive!\n\n        System.out.println(\"int max: \" + Integer.MAX_VALUE);\n        System.out.println(\"double: \" + d);\n    }\n}",
            "quiz": [
                {
                    "question": "How many total bits are in a 'double' in Java?",
                    "answer": "64 bits (8 bytes).",
                    "options": [
                        "16 bits",
                        "32 bits",
                        "64 bits",
                        "128 bits"
                    ],
                    "correctIndex": 2
                },
                {
                    "question": "What is the difference between float and double in terms of precision?",
                    "answer": "Float has ~7 decimal digits of precision (32-bit), while Double has ~15-16 digits (64-bit).",
                    "options": [
                        "Float is more precise",
                        "Double is more precise",
                        "Both are same",
                        "Neither is precise"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is a 'Wrapper Class' and why do we need it?",
                    "answer": "They are objects that 'wrap' primitives (like Integer for int). Needed for using primitives in Collections like ArrayList.",
                    "options": [
                        "To hide code",
                        "To use primitives as objects",
                        "To speed up math",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "is 'String' a primitive or non-primitive data type? Explain.",
                    "answer": "String is Non-Primitive (it's a Class). It stores a reference to a memory location in the String Pool.",
                    "options": [
                        "Primitive",
                        "Non-Primitive",
                        "Both",
                        "Neither"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "How much memory does a 'boolean' occupy in the JVM?",
                    "answer": "The JVM specification doesn't define size exactly, but it's typically treated as 1 byte for storage efficiency.",
                    "options": [
                        "1 bit",
                        "8 bits (1 byte)",
                        "32 bits",
                        "64 bits"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is implicit type casting (widening) and when does it happen?",
                    "answer": "Implicit casting happens automatically when assigning a smaller data type to a larger data type (e.g., int to double) without data loss.",
                    "options": [
                        "Larger type to smaller type",
                        "Smaller type to larger type automatically",
                        "Requires (target) cast syntax",
                        "Causes compile-time error"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is explicit type casting (narrowing) and what is its risk?",
                    "answer": "Explicit casting is converting a larger type to a smaller type manually (e.g., double to int). Risk includes data loss or value truncation.",
                    "options": [
                        "Widen conversion with no loss",
                        "Narrow conversion causing potential data loss/truncation",
                        "Automatic casting",
                        "None of the above"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is type promotion in arithmetic expressions?",
                    "answer": "In expressions, Java automatically promotes operands to the largest type present. e.g., byte/short/char are promoted to int first.",
                    "options": [
                        "Converts everything to double",
                        "Promotes smaller numeric operands to at least int or the largest type in expression",
                        "Promotes to String",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is integer overflow and how does it occur in Java?",
                    "answer": "Overflow occurs when a calculation exceeds the maximum limit of a primitive type. Java loops the value back to the minimum limit (circular behavior).",
                    "options": [
                        "Throws an ArithmeticException",
                        "Value wraps around to negative/minimum value limit",
                        "Compiler warning is given",
                        "RAM crashes"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Difference between primitive types and wrapper classes?",
                    "answer": "Primitives store values directly (lightweight). Wrapper classes are objects wrapping primitives, allowing them to be used in generic collections.",
                    "options": [
                        "No difference",
                        "Wrapper classes are slower and stored in Heap as objects",
                        "Primitives are stored in Heap",
                        "Wrapper classes are faster"
                    ],
                    "correctIndex": 1
                }
            ]
        }
    },
    {
        "id": 12,
        "title": "EP 12 – Student Management Project | Java Variables & Data Types",
        "youtubeId": "lvF3ZaW_KRg",
        "thumbnail": "/Thumbnail/ep-12-student-management-project-thumbnail.png",
        "tags": [
            "Java",
            "Project"
        ],
        "notes": {
            "intro": "Phase 1 का पहला project: Student Management System — जहाँ हम Variables और Data Types को real-world context में apply करते हैं।",
            "topics": [
                "🎒 Project: Student Management System v1.0",
                "📝 Store student data: name, age, roll number, marks, grade",
                "🔢 Use appropriate data types for each attribute",
                "📤 Display formatted student report card",
                "🧠 Understand how primitive vs String variables work together"
            ],
            "code": "public class StudentManagement {\n    public static void main(String[] args) {\n\n        // Student Data using appropriate Data Types\n        String studentName = \"Rahul Kumar\";\n        int rollNumber = 101;\n        int age = 20;\n        double mathMarks = 88.5;\n        double scienceMarks = 92.0;\n        double englishMarks = 78.5;\n        char grade = 'A';\n        boolean isPassed = true;\n\n        // Calculate average\n        double average = (mathMarks + scienceMarks + englishMarks) / 3;\n\n        // Display Report Card\n        System.out.println(\"===== STUDENT REPORT CARD =====\");\n        System.out.println(\"Name    : \" + studentName);\n        System.out.println(\"Roll No : \" + rollNumber);\n        System.out.println(\"Age     : \" + age);\n        System.out.println(\"Average : \" + average);\n        System.out.println(\"Grade   : \" + grade);\n        System.out.println(\"Status  : \" + (isPassed ? \"PASS ✅\" : \"FAIL ❌\"));\n    }\n}",
            "quiz": [
                {
                    "question": "Which data type is best for storing a student's percentage with decimals?",
                    "answer": "float or double (double is usually preferred for more accuracy).",
                    "options": [
                        "int",
                        "double",
                        "boolean",
                        "char"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Why can't we store a 'roll number' as a boolean?",
                    "answer": "Because a roll number is a numeric ID (e.g. 101), while boolean can only store 'true' or 'false'.",
                    "options": [
                        "It's too big",
                        "Boolean is only true/false",
                        "It's a string",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is the benefit of using 'String' for names instead of char arrays?",
                    "answer": "Strings are easier to manipulate (concatenation, searching) and are immutable for security.",
                    "options": [
                        "Faster",
                        "Easier manipulation",
                        "Less memory",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "How to calculate the average of 3 subjects in Java accurately?",
                    "answer": "Sum the marks and divide by 3.0 (using a double) to prevent integer truncation.",
                    "options": [
                        "Divide by 3",
                        "Divide by 3.0",
                        "Multiply by 3",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What happens if you divide an integer by matching integer in percentage calculation?",
                    "answer": "It performs integer division (e.g. 1/2 = 0), so you must use 1/2.0 to get 0.5.",
                    "options": [
                        "Decimal result",
                        "Integer truncation",
                        "Error",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "How do you format a double to 2 decimal places in console output?",
                    "answer": "Using System.out.printf(\"%.2f\", value); or DecimalFormat class.",
                    "options": [
                        "println()",
                        "printf()",
                        "print()",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is the difference between local, instance, and static variables?",
                    "answer": "Local: inside method (Stack). Instance: inside class, unique per object (Heap). Static: shared class variable (Method area).",
                    "options": [
                        "All stored on stack",
                        "Local: method scope; Instance: object scope; Static: class scope",
                        "Static is local to main",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What are the default values of uninitialized variables in Java?",
                    "answer": "Instance/static variables get default values (0, false, null). Local variables do NOT get defaults and cause compile errors if read before initialization.",
                    "options": [
                        "All get null",
                        "Local gets 0; Instance gets garbage",
                        "Local gets no default (compile error); Instance gets 0/false/null",
                        "All get 0"
                    ],
                    "correctIndex": 2
                },
                {
                    "question": "Where are local variables stored in memory?",
                    "answer": "Local variables are stored inside the active Stack Frame of the thread executing the method.",
                    "options": [
                        "Heap Memory",
                        "Method Area",
                        "Stack Memory",
                        "CPU cache"
                    ],
                    "correctIndex": 2
                },
                {
                    "question": "What does the 'final' keyword do to a variable?",
                    "answer": "It makes the variable a constant; its value can only be assigned once and cannot be changed later.",
                    "options": [
                        "Forces garbage collection",
                        "Makes it private",
                        "Makes value immutable after assignment",
                        "Speeds up compile time"
                    ],
                    "correctIndex": 2
                }
            ]
        }
    },
    {
        "id": 13,
        "title": "EP 13 – Type Casting in Java | Implicit & Explicit Conversion",
        "youtubeId": "Xg9X_cdPNLk",
        "thumbnail": "/Thumbnail/ep-13-type-casting-thumbnail.png",
        "tags": [
            "Java",
            "Types"
        ],
        "notes": {
            "intro": "Type Casting = एक data type को दूसरे data type में convert करना। Java में दो types होते हैं: Widening (safe, automatic) और Narrowing (manual, risky).",
            "topics": [
                "🌊 Widening / Implicit Casting — small to large (auto, no data loss): byte → short → int → long → float → double",
                "🔨 Narrowing / Explicit Casting — large to small (manual, may lose data): double → int",
                "⚠️ Data Loss Warning: (int) 9.99 = 9 (decimal part lost!)",
                "🔤 String ↔ int conversion: Integer.parseInt(), String.valueOf()",
                "📦 Wrapper Classes: Integer, Double, Character — bridge primitive ↔ object"
            ],
            "code": "public class TypeCasting {\n    public static void main(String[] args) {\n\n        // Widening (Automatic - no data loss)\n        int myInt = 100;\n        double myDouble = myInt;  // int → double safely\n        System.out.println(\"Widening: \" + myDouble); // 100.0\n\n        // Narrowing (Manual - may lose data!)\n        double price = 9.99;\n        int roundedPrice = (int) price; // Explicit cast\n        System.out.println(\"Narrowing: \" + roundedPrice); // 9 (lost .99!)\n\n        // String ↔ int\n        String numStr = \"42\";\n        int num = Integer.parseInt(numStr); // String to int\n        String backToStr = String.valueOf(num); // int to String\n    }\n}",
            "quiz": [
                {
                    "question": "Difference between Implicit (Widening) and Explicit (Narrowing) casting?",
                    "answer": "Widening (Auto): Small type to Large (safe). Narrowing (Manual): Large type to Small (risky, potential data loss).",
                    "options": [
                        "Widening=Manual, Narrowing=Auto",
                        "Widening=Auto, Narrowing=Manual",
                        "Both same",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Why is narrowing/explicit casting considered 'unsafe' or risky?",
                    "answer": "Because the destination type may not have enough space, leading to overflow or loss of decimal precision.",
                    "options": [
                        "It's slow",
                        "Data loss risk",
                        "It's illegal",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What happens to the decimal part during (int) conversion of a double?",
                    "answer": "It is simply truncated (removed). For example, (int) 9.99 becomes 9.",
                    "options": [
                        "Rounded",
                        "Truncated",
                        "Error",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "How to convert a String '123' into an integer in Java?",
                    "answer": "By using Integer.parseInt(\"123\");",
                    "options": [
                        "(int) '123'",
                        "Integer.parseInt('123')",
                        "String.toInt('123')",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Mention a scenario where type casting is mandatory in Java.",
                    "answer": "When passing a double value to a function that strictly expects an int parameter.",
                    "options": [
                        "Always",
                        "When narrowing",
                        "Never",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is 'type promotion' in a mathematical expression?",
                    "answer": "When performing arithmetic on different types (like byte + int), Java promotes everything to the largest type (int) before calculating.",
                    "options": [
                        "Type demotion",
                        "Type promotion",
                        "Error",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is implicit type casting (widening) and when does it happen?",
                    "answer": "Implicit casting happens automatically when assigning a smaller data type to a larger data type (e.g., int to double) without data loss.",
                    "options": [
                        "Larger type to smaller type",
                        "Smaller type to larger type automatically",
                        "Requires (target) cast syntax",
                        "Causes compile-time error"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is explicit type casting (narrowing) and what is its risk?",
                    "answer": "Explicit casting is converting a larger type to a smaller type manually (e.g., double to int). Risk includes data loss or value truncation.",
                    "options": [
                        "Widen conversion with no loss",
                        "Narrow conversion causing potential data loss/truncation",
                        "Automatic casting",
                        "None of the above"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is type promotion in arithmetic expressions?",
                    "answer": "In expressions, Java automatically promotes operands to the largest type present. e.g., byte/short/char are promoted to int first.",
                    "options": [
                        "Converts everything to double",
                        "Promotes smaller numeric operands to at least int or the largest type in expression",
                        "Promotes to String",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is integer overflow and how does it occur in Java?",
                    "answer": "Overflow occurs when a calculation exceeds the maximum limit of a primitive type. Java loops the value back to the minimum limit (circular behavior).",
                    "options": [
                        "Throws an ArithmeticException",
                        "Value wraps around to negative/minimum value limit",
                        "Compiler warning is given",
                        "RAM crashes"
                    ],
                    "correctIndex": 1
                }
            ]
        }
    },
    {
        "id": 14,
        "title": "EP 14 – Why Do Operators Exist in Java? | The CPU-Level Truth",
        "youtubeId": "6JCqR59XA0k",
        "thumbnail": "/Thumbnail/ep-14-why-operators-thumbnail.png",
        "tags": [
            "Java",
            "Operators"
        ],
        "notes": {
            "intro": "Operators CPU को बताते हैं: इन दो values के साथ क्या करना है? हर arithmetic operation (+ - * /) के पीछे hardware-level ALU (Arithmetic Logic Unit) काम करता है।",
            "topics": [
                "🔢 Operator Categories: Arithmetic, Relational, Logical, Bitwise, Assignment, Unary",
                "⚙️ CPU ALU (Arithmetic Logic Unit) — performs all computations",
                "📊 Operator Precedence: * / before + - (like BODMAS in math!)",
                "🎯 Why operators exist: Without them we can't manipulate data in memory",
                "🔀 Types: Unary (1 operand), Binary (2 operands), Ternary (3 operands)"
            ],
            "code": "public class OperatorsIntro {\n    public static void main(String[] args) {\n\n        // Every operator triggers CPU's ALU\n        int a = 10, b = 3;\n\n        // Arithmetic\n        System.out.println(a + b);  // 13 (ADD)\n        System.out.println(a - b);  // 7  (SUBTRACT)\n        System.out.println(a * b);  // 30 (MULTIPLY)\n        System.out.println(a / b);  // 3  (DIVIDE - integer division)\n        System.out.println(a % b);  // 1  (MODULO - remainder)\n\n        // Operator Precedence\n        int result = 2 + 3 * 4; // = 14 (not 20!) - * first\n        System.out.println(result);\n    }\n}",
            "quiz": [
                {
                    "question": "List all 6 categories of operators in Java.",
                    "answer": "Arithmetic, Relational, Logical, Bitwise, Assignment, and Unary operators.",
                    "options": [
                        "Only 2",
                        "Only 4",
                        "All 6",
                        "None"
                    ],
                    "correctIndex": 2
                },
                {
                    "question": "What is 'Operator Precedence' and how does it work?",
                    "answer": "It determines the order in which operators are evaluated (e.g., * and / are done before + and -).",
                    "options": [
                        "Order of evaluation",
                        "Speed",
                        "Memory",
                        "None"
                    ],
                    "correctIndex": 0
                },
                {
                    "question": "Explain the 'Associativity' of operators with an example.",
                    "answer": "It determines the direction (Left-to-Right or Right-to-Left) for operators of the same precedence, like + and -.",
                    "options": [
                        "Direction of evaluation",
                        "Speed",
                        "Memory",
                        "None"
                    ],
                    "correctIndex": 0
                },
                {
                    "question": "What is the hardware component (ALU) responsible for operator tasks?",
                    "answer": "The Arithmetic Logic Unit (ALU) inside the CPU.",
                    "options": [
                        "RAM",
                        "ALU",
                        "GPU",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Can you perform operations on non-primitive types using basic operators?",
                    "answer": "Only the '+' operator is overloaded for Strings in Java; most other operators only work on primitives.",
                    "options": [
                        "Yes",
                        "No",
                        "Only for String",
                        "None"
                    ],
                    "correctIndex": 2
                },
                {
                    "question": "What is the difference between Unary, Binary, and Ternary operators?",
                    "answer": "Unary uses 1 operand (++x), Binary uses 2 (x+y), and Ternary uses 3 (condition ? x : y).",
                    "options": [
                        "Operand count",
                        "Speed",
                        "Memory",
                        "None"
                    ],
                    "correctIndex": 0
                },
                {
                    "question": "Difference between short-circuit logical operators (&&, ||) and standard operators (&, |)?",
                    "answer": "Short-circuit operators skip executing second operand if result is clear. Standard operators always evaluate both operands.",
                    "options": [
                        "Short-circuit is slower",
                        "Short-circuit skips second operand check if result is determined early",
                        "Standard is only for bits",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "How does pre-increment (++i) differ from post-increment (i++) in memory?",
                    "answer": "Pre-increment changes the value first and then returns it. Post-increment returns original value first, then changes it in memory.",
                    "options": [
                        "Pre-increment is slower",
                        "Pre-increment updates value then returns; Post-increment returns then updates",
                        "Post-increment updates first",
                        "No difference"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is operator precedence and associativity?",
                    "answer": "Precedence determines execution order of different operators. Associativity determines execution direction for equal-precedence operators.",
                    "options": [
                        "Determines variable scope",
                        "Precedence is order; Associativity is direction (left-to-right/right-to-left)",
                        "Determines compile speed",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is bitwise shift operators: <<, >>, >>>?",
                    "answer": "Left shift (<<) multiplies by 2. Signed right shift (>>) divides by 2 keeping sign. Unsigned right shift (>>>) fills zero on left.",
                    "options": [
                        "Normal math shortcuts",
                        "Bit-level shifts; >>> is unsigned zero-fill right shift",
                        "Only for strings",
                        "None"
                    ],
                    "correctIndex": 1
                }
            ]
        }
    },
    {
        "id": 15,
        "title": "EP 15 – Arithmetic Operators in Java",
        "youtubeId": "65R9jw3bxws",
        "thumbnail": "/Thumbnail/ep-15-arithmetic-operators-thumbnail.png",
        "tags": [
            "Java",
            "Operators"
        ],
        "notes": {
            "intro": "Java के 5 Arithmetic Operators: +, -, *, /, % — ये सभी math operations करते हैं। % (Modulo) especially important है — even/odd check, divisibility check के लिए।",
            "topics": [
                "➕ Addition (+): Numbers add, Strings concatenate (5+3=8, 'Hello'+'World')",
                "➖ Subtraction (-): Basic math, temperature difference, score calculation",
                "✖️ Multiplication (*): Area calculation, salary * months, percentage",
                "➗ Division (/): int/int = int (5/2=2!), double/int = double",
                "🔢 Modulo (%): Remainder! Use: even/odd check, last digit, circular indexing"
            ],
            "code": "public class ArithmeticDemo {\n    public static void main(String[] args) {\n\n        // Basic arithmetic\n        System.out.println(10 + 3);   // 13\n        System.out.println(10 - 3);   // 7\n        System.out.println(10 * 3);   // 30\n        System.out.println(10 / 3);   // 3 (integer division!)\n        System.out.println(10.0 / 3); // 3.333... (float division)\n        System.out.println(10 % 3);   // 1 (remainder)\n\n        // Real-world: Even/Odd check using modulo\n        int num = 15;\n        if (num % 2 == 0) {\n            System.out.println(num + \" is Even\");\n        } else {\n            System.out.println(num + \" is Odd\"); // Prints this\n        }\n\n        // String concatenation with +\n        String name = \"Java\";\n        System.out.println(\"Hello \" + name); // Hello Java\n    }\n}",
            "quiz": [
                {
                    "question": "Explain the behavior of '+' operator with both numbers and Strings.",
                    "answer": "For numbers, it adds them. If one operand is a String, it performs concatenation (e.g., \"A\" + 1 = \"A1\").",
                    "options": [
                        "Always adds",
                        "Concatenates if String",
                        "Error",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is the result of '5 / 2' in Java? Explain why.",
                    "answer": "The result is 2. Since both are 'int', Java performs integer division and discards the remainder.",
                    "options": [
                        "2.5",
                        "2",
                        "3",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is the practical use of the Modulo (%) operator?",
                    "answer": "Determining remainders, checking for even/odd numbers, and performing circular array indexing.",
                    "options": [
                        "Division",
                        "Remainder",
                        "Multiplication",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "How do you check if a number is even or odd using arithmetic operators?",
                    "answer": "Using (num % 2 == 0) — if true, it's even; if false, it's odd.",
                    "options": [
                        "num/2==0",
                        "num%2==0",
                        "num*2==0",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Does Java support operator overloading for arithmetic operators?",
                    "answer": "No, Java does not allow users to overload operators, though '+' is internally overloaded for Strings.",
                    "options": [
                        "Yes",
                        "No",
                        "Only for String",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is integer overflow during arithmetic operations?",
                    "answer": "When the result exceeds the maximum value of the data type (e.g. Integer.MAX_VALUE + 1), it cycles back to the minimum value.",
                    "options": [
                        "Error",
                        "Cycles back",
                        "Stops",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Difference between short-circuit logical operators (&&, ||) and standard operators (&, |)?",
                    "answer": "Short-circuit operators skip executing second operand if result is clear. Standard operators always evaluate both operands.",
                    "options": [
                        "Short-circuit is slower",
                        "Short-circuit skips second operand check if result is determined early",
                        "Standard is only for bits",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "How does pre-increment (++i) differ from post-increment (i++) in memory?",
                    "answer": "Pre-increment changes the value first and then returns it. Post-increment returns original value first, then changes it in memory.",
                    "options": [
                        "Pre-increment is slower",
                        "Pre-increment updates value then returns; Post-increment returns then updates",
                        "Post-increment updates first",
                        "No difference"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is operator precedence and associativity?",
                    "answer": "Precedence determines execution order of different operators. Associativity determines execution direction for equal-precedence operators.",
                    "options": [
                        "Determines variable scope",
                        "Precedence is order; Associativity is direction (left-to-right/right-to-left)",
                        "Determines compile speed",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is bitwise shift operators: <<, >>, >>>?",
                    "answer": "Left shift (<<) multiplies by 2. Signed right shift (>>) divides by 2 keeping sign. Unsigned right shift (>>>) fills zero on left.",
                    "options": [
                        "Normal math shortcuts",
                        "Bit-level shifts; >>> is unsigned zero-fill right shift",
                        "Only for strings",
                        "None"
                    ],
                    "correctIndex": 1
                }
            ]
        }
    },
    {
        "id": 16,
        "title": "EP 16 – Unary Operators in Java",
        "youtubeId": "h8TJDCHpjCc",
        "thumbnail": "/Thumbnail/ep-16-unary-operators-thumbnail.png",
        "tags": [
            "Java",
            "Operators"
        ],
        "notes": {
            "intro": "Unary operators केवल एक operand पर work करते हैं। ++ और -- सबसे important हैं — और pre vs post increment का difference एक common interview question है!",
            "topics": [
                "➕ Unary Plus (+x): Makes value positive (rarely used)",
                "➖ Unary Minus (-x): Negates value (5 → -5)",
                "🔼 Pre-increment (++x): First increment, then use",
                "🔽 Post-increment (x++): First use, then increment",
                "❗ Logical NOT (!): Flips boolean (true → false, false → true)"
            ],
            "code": "public class UnaryDemo {\n    public static void main(String[] args) {\n\n        int a = 5;\n\n        // Pre-increment: increment first, then assign\n        int b = ++a;  // a becomes 6, b = 6\n        System.out.println(\"Pre: a=\" + a + \", b=\" + b); // a=6, b=6\n\n        // Post-increment: assign first, then increment\n        int c = 5;\n        int d = c++;  // d = 5 (old value), THEN c becomes 6\n        System.out.println(\"Post: c=\" + c + \", d=\" + d); // c=6, d=5\n\n        // Logical NOT\n        boolean isLoggedIn = false;\n        System.out.println(!isLoggedIn); // true\n\n        // Unary Minus\n        int x = 10;\n        System.out.println(-x); // -10\n    }\n}",
            "quiz": [
                {
                    "question": "Explain the difference between Pre-increment (++i) and Post-increment (i++).",
                    "answer": "Pre-increment: Changes value first, then returns it. Post-increment: Returns current value first, then changes it.",
                    "options": [
                        "Pre=Use first, Post=Change first",
                        "Pre=Change first, Post=Use first",
                        "Both same",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is the output of 'int x=10; System.out.println(x--);'?",
                    "answer": "It prints 10. The value is printed FIRST (post-decrement), and then becomes 9 in memory.",
                    "options": [
                        "9",
                        "10",
                        "11",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Does '++' work on double and float types?",
                    "answer": "Yes, it adds 1.0 to the current value.",
                    "options": [
                        "Yes",
                        "No",
                        "Only int",
                        "None"
                    ],
                    "correctIndex": 0
                },
                {
                    "question": "How does the 'Logical NOT (!)' operator interact with boolean variables?",
                    "answer": "It inverts the value: !true = false, and !false = true.",
                    "options": [
                        "No change",
                        "Inverts value",
                        "Error",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Explain the 'Unary Minus (-)' with a practical scenario.",
                    "answer": "It negates a number. Useful for creating a 'negative' score or representing debt in banking code.",
                    "options": [
                        "Subtraction",
                        "Negation",
                        "Addition",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Can we use unary operators on Strings?",
                    "answer": "No, unary operators like ++ or -- result in a compilation error if used on a String.",
                    "options": [
                        "Yes",
                        "No",
                        "Only if numeric",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Difference between short-circuit logical operators (&&, ||) and standard operators (&, |)?",
                    "answer": "Short-circuit operators skip executing second operand if result is clear. Standard operators always evaluate both operands.",
                    "options": [
                        "Short-circuit is slower",
                        "Short-circuit skips second operand check if result is determined early",
                        "Standard is only for bits",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "How does pre-increment (++i) differ from post-increment (i++) in memory?",
                    "answer": "Pre-increment changes the value first and then returns it. Post-increment returns original value first, then changes it in memory.",
                    "options": [
                        "Pre-increment is slower",
                        "Pre-increment updates value then returns; Post-increment returns then updates",
                        "Post-increment updates first",
                        "No difference"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is operator precedence and associativity?",
                    "answer": "Precedence determines execution order of different operators. Associativity determines execution direction for equal-precedence operators.",
                    "options": [
                        "Determines variable scope",
                        "Precedence is order; Associativity is direction (left-to-right/right-to-left)",
                        "Determines compile speed",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is bitwise shift operators: <<, >>, >>>?",
                    "answer": "Left shift (<<) multiplies by 2. Signed right shift (>>) divides by 2 keeping sign. Unsigned right shift (>>>) fills zero on left.",
                    "options": [
                        "Normal math shortcuts",
                        "Bit-level shifts; >>> is unsigned zero-fill right shift",
                        "Only for strings",
                        "None"
                    ],
                    "correctIndex": 1
                }
            ]
        }
    },
    {
        "id": 17,
        "title": "EP 17 – Relational Operators in Java",
        "youtubeId": "i69PsllUNLI",
        "thumbnail": "/Thumbnail/ep-17-relational-operators-thumbnail.png",
        "tags": [
            "Java",
            "Operators"
        ],
        "notes": {
            "intro": "Relational Operators दो values को compare करते हैं — result हमेशा boolean (true/false) होता है। ये if-else और loops की backbone हैं।",
            "topics": [
                "== : Equal to (value comparison for primitives)",
                "!= : Not equal to — opposite of ==",
                "> : Greater than — a > b is true if a is larger",
                "< : Less than — a < b is true if a is smaller",
                ">= : Greater than or equal to",
                "<= : Less than or equal to"
            ],
            "code": "public class RelationalDemo {\n    public static void main(String[] args) {\n\n        int a = 10, b = 20;\n\n        System.out.println(a == b);  // false (10 is not 20)\n        System.out.println(a != b);  // true  (10 is not equal to 20)\n        System.out.println(a > b);   // false (10 is not > 20)\n        System.out.println(a < b);   // true  (10 < 20)\n        System.out.println(a >= 10); // true  (10 >= 10)\n        System.out.println(b <= 20); // true  (20 <= 20)\n\n        // Common Mistake: == vs = \n        int x = 5;\n        if (x == 5) {           // Comparison ✅\n            System.out.println(\"x is 5\");\n        }\n        // if (x = 5) { }      // Assignment ❌ Compile Error\n\n        // NEVER use == for String comparison!\n        String s1 = new String(\"Java\");\n        String s2 = new String(\"Java\");\n        System.out.println(s1 == s2);       // false (different objects!)\n        System.out.println(s1.equals(s2));  // true  (same content) ✅\n    }\n}",
            "quiz": [
                {
                    "question": "Why shouldn't we use '==' for String comparison?",
                    "answer": "Using '==' compares identity (memory addresses). To compare content (the actual letters), use .equals().",
                    "options": [
                        "It's slow",
                        "Compares memory address",
                        "It's illegal",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is the 'result type' of any relational operation?",
                    "answer": "Always boolean (true or false).",
                    "options": [
                        "int",
                        "boolean",
                        "String",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Difference between short-circuit logical operators (&&, ||) and standard operators (&, |)?",
                    "answer": "Short-circuit operators skip executing second operand if result is clear. Standard operators always evaluate both operands.",
                    "options": [
                        "Short-circuit is slower",
                        "Short-circuit skips second operand check if result is determined early",
                        "Standard is only for bits",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "How does pre-increment (++i) differ from post-increment (i++) in memory?",
                    "answer": "Pre-increment changes the value first and then returns it. Post-increment returns original value first, then changes it in memory.",
                    "options": [
                        "Pre-increment is slower",
                        "Pre-increment updates value then returns; Post-increment returns then updates",
                        "Post-increment updates first",
                        "No difference"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is operator precedence and associativity?",
                    "answer": "Precedence determines execution order of different operators. Associativity determines execution direction for equal-precedence operators.",
                    "options": [
                        "Determines variable scope",
                        "Precedence is order; Associativity is direction (left-to-right/right-to-left)",
                        "Determines compile speed",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is bitwise shift operators: <<, >>, >>>?",
                    "answer": "Left shift (<<) multiplies by 2. Signed right shift (>>) divides by 2 keeping sign. Unsigned right shift (>>>) fills zero on left.",
                    "options": [
                        "Normal math shortcuts",
                        "Bit-level shifts; >>> is unsigned zero-fill right shift",
                        "Only for strings",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What happens when you divide an integer by zero vs a double by zero?",
                    "answer": "Integer division by zero throws ArithmeticException. Floating-point (double) division by zero returns infinity (Infinity).",
                    "options": [
                        "Both throw exception",
                        "Both return infinity",
                        "Integer throws ArithmeticException; Double returns Infinity",
                        "None"
                    ],
                    "correctIndex": 2
                },
                {
                    "question": "What does the modulo (%) operator return?",
                    "answer": "It returns the remainder of the division between two numeric operands.",
                    "options": [
                        "Quotient",
                        "Percentage value",
                        "Remainder",
                        "Dividend"
                    ],
                    "correctIndex": 2
                },
                {
                    "question": "What is ternary operator and when does it evaluate?",
                    "answer": "A shortcut condition syntax: condition ? expression1 : expression2. It only evaluates the matching branch.",
                    "options": [
                        "Evaluates both branches",
                        "Conditional shortcut executing only the true or false branch",
                        "Replaces loops",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What does assignment operator returns in Java?",
                    "answer": "An assignment (a = b) returns the value assigned, allowing chained assignments like a = b = c = 10.",
                    "options": [
                        "boolean status",
                        "void",
                        "The value assigned",
                        "Memory address"
                    ],
                    "correctIndex": 2
                }
            ]
        }
    },
    {
        "id": 18,
        "title": "EP 18 – Logical Operators in Java | &&, ||, ! Explained",
        "youtubeId": "mYMzF7UFjOs",
        "thumbnail": "/Thumbnail/ep-18-logical-operators-thumbnail.png",
        "tags": [
            "Java",
            "Operators"
        ],
        "notes": {
            "intro": "Logical Operators Multiple conditions को combine करने के काम आते हैं। AND, OR और NOT का सही use ही logic building का base है।",
            "topics": [
                "&& (Logical AND): Returns true ONLY if both conditions are true",
                "|| (Logical OR): Returns true if AT LEAST one condition is true",
                "! (Logical NOT): Reverses the boolean result",
                "🧠 Truth Tables: understanding logic outcomes",
                "⚡ Short-circuit Evaluation: efficiency in Java logic"
            ],
            "code": "public class LogicalDemo {\n    public static void main(String[] args) {\n        boolean hasLicense = true;\n        boolean hasCar = false;\n\n        // AND (&&) - Needs BOTH to be true\n        System.out.println(\"Can Drive: \" + (hasLicense && hasCar)); // false\n\n        // OR (||) - Needs ANY ONE to be true\n        System.out.println(\"Can Commute: \" + (hasLicense || hasCar)); // true\n\n        // NOT (!) - Reverses the value\n        System.out.println(\"Inverse: \" + (!hasLicense)); // false\n    }\n}",
            "quiz": [
                {
                    "question": "Which operator requires BOTH conditions to be true?",
                    "answer": "Logical AND (&&).",
                    "options": [
                        "||",
                        "&&",
                        "!",
                        "=="
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is 'Short-circuit evaluation' in Logical AND?",
                    "answer": "If the first condition is false, Java skips checking the second one because the result must be false.",
                    "options": [
                        "Ignores the whole if",
                        "Skips second check if first is false",
                        "Speeds up printing",
                        "Deletes redundant code"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Difference between short-circuit logical operators (&&, ||) and standard operators (&, |)?",
                    "answer": "Short-circuit operators skip executing second operand if result is clear. Standard operators always evaluate both operands.",
                    "options": [
                        "Short-circuit is slower",
                        "Short-circuit skips second operand check if result is determined early",
                        "Standard is only for bits",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "How does pre-increment (++i) differ from post-increment (i++) in memory?",
                    "answer": "Pre-increment changes the value first and then returns it. Post-increment returns original value first, then changes it in memory.",
                    "options": [
                        "Pre-increment is slower",
                        "Pre-increment updates value then returns; Post-increment returns then updates",
                        "Post-increment updates first",
                        "No difference"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is operator precedence and associativity?",
                    "answer": "Precedence determines execution order of different operators. Associativity determines execution direction for equal-precedence operators.",
                    "options": [
                        "Determines variable scope",
                        "Precedence is order; Associativity is direction (left-to-right/right-to-left)",
                        "Determines compile speed",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is bitwise shift operators: <<, >>, >>>?",
                    "answer": "Left shift (<<) multiplies by 2. Signed right shift (>>) divides by 2 keeping sign. Unsigned right shift (>>>) fills zero on left.",
                    "options": [
                        "Normal math shortcuts",
                        "Bit-level shifts; >>> is unsigned zero-fill right shift",
                        "Only for strings",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What happens when you divide an integer by zero vs a double by zero?",
                    "answer": "Integer division by zero throws ArithmeticException. Floating-point (double) division by zero returns infinity (Infinity).",
                    "options": [
                        "Both throw exception",
                        "Both return infinity",
                        "Integer throws ArithmeticException; Double returns Infinity",
                        "None"
                    ],
                    "correctIndex": 2
                },
                {
                    "question": "What does the modulo (%) operator return?",
                    "answer": "It returns the remainder of the division between two numeric operands.",
                    "options": [
                        "Quotient",
                        "Percentage value",
                        "Remainder",
                        "Dividend"
                    ],
                    "correctIndex": 2
                },
                {
                    "question": "What is ternary operator and when does it evaluate?",
                    "answer": "A shortcut condition syntax: condition ? expression1 : expression2. It only evaluates the matching branch.",
                    "options": [
                        "Evaluates both branches",
                        "Conditional shortcut executing only the true or false branch",
                        "Replaces loops",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What does assignment operator returns in Java?",
                    "answer": "An assignment (a = b) returns the value assigned, allowing chained assignments like a = b = c = 10.",
                    "options": [
                        "boolean status",
                        "void",
                        "The value assigned",
                        "Memory address"
                    ],
                    "correctIndex": 2
                }
            ]
        }
    },
    {
        "id": 19,
        "title": "EP 19 – Assignment Operators in Java | Shorthand Operators",
        "youtubeId": "UI-hXuWQJlo",
        "thumbnail": "/Thumbnail/ep-19-assignment-operators-thumbnail.png",
        "tags": [
            "Java",
            "Operators"
        ],
        "notes": {
            "intro": "Assignment Operators variables में values store करने के लिए use होते हैं। Compound assignments ( जैसे +=, -= ) code को छोटा और cleaner बनाते हैं।",
            "topics": [
                "= : Simple Assignment",
                "+= : Addition Assignment",
                "-= : Subtraction Assignment",
                "*=, /=, %= : Multiplication, Division, Modulo assignments",
                "⚡ Implicit Casting in Compound assignments"
            ],
            "code": "public class AssignmentDemo {\n    public static void main(String[] args) {\n        int x = 10;\n        \n        x += 5; // same as x = x + 5\n        System.out.println(x); // 15\n\n        x *= 2; // same as x = x * 2\n        System.out.println(x); // 30\n\n        byte b = 127;\n        b += 1; // Compound assignment handles internal casting\n        System.out.println(b); // -128 (Overflow)\n    }\n}",
            "quiz": [
                {
                    "question": "What is 'x += 5' equivalent to?",
                    "answer": "x = x + 5.",
                    "options": [
                        "x = 5",
                        "x = x + 5",
                        "x = 5 + 5",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Benefit of using Compound Assignment (like +=) in Java?",
                    "answer": "It performs automatic internal type casting, avoiding manual casting errors.",
                    "options": [
                        "Faster execution",
                        "Automatic casting",
                        "Less memory",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Difference between short-circuit logical operators (&&, ||) and standard operators (&, |)?",
                    "answer": "Short-circuit operators skip executing second operand if result is clear. Standard operators always evaluate both operands.",
                    "options": [
                        "Short-circuit is slower",
                        "Short-circuit skips second operand check if result is determined early",
                        "Standard is only for bits",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "How does pre-increment (++i) differ from post-increment (i++) in memory?",
                    "answer": "Pre-increment changes the value first and then returns it. Post-increment returns original value first, then changes it in memory.",
                    "options": [
                        "Pre-increment is slower",
                        "Pre-increment updates value then returns; Post-increment returns then updates",
                        "Post-increment updates first",
                        "No difference"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is operator precedence and associativity?",
                    "answer": "Precedence determines execution order of different operators. Associativity determines execution direction for equal-precedence operators.",
                    "options": [
                        "Determines variable scope",
                        "Precedence is order; Associativity is direction (left-to-right/right-to-left)",
                        "Determines compile speed",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is bitwise shift operators: <<, >>, >>>?",
                    "answer": "Left shift (<<) multiplies by 2. Signed right shift (>>) divides by 2 keeping sign. Unsigned right shift (>>>) fills zero on left.",
                    "options": [
                        "Normal math shortcuts",
                        "Bit-level shifts; >>> is unsigned zero-fill right shift",
                        "Only for strings",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What happens when you divide an integer by zero vs a double by zero?",
                    "answer": "Integer division by zero throws ArithmeticException. Floating-point (double) division by zero returns infinity (Infinity).",
                    "options": [
                        "Both throw exception",
                        "Both return infinity",
                        "Integer throws ArithmeticException; Double returns Infinity",
                        "None"
                    ],
                    "correctIndex": 2
                },
                {
                    "question": "What does the modulo (%) operator return?",
                    "answer": "It returns the remainder of the division between two numeric operands.",
                    "options": [
                        "Quotient",
                        "Percentage value",
                        "Remainder",
                        "Dividend"
                    ],
                    "correctIndex": 2
                },
                {
                    "question": "What is ternary operator and when does it evaluate?",
                    "answer": "A shortcut condition syntax: condition ? expression1 : expression2. It only evaluates the matching branch.",
                    "options": [
                        "Evaluates both branches",
                        "Conditional shortcut executing only the true or false branch",
                        "Replaces loops",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What does assignment operator returns in Java?",
                    "answer": "An assignment (a = b) returns the value assigned, allowing chained assignments like a = b = c = 10.",
                    "options": [
                        "boolean status",
                        "void",
                        "The value assigned",
                        "Memory address"
                    ],
                    "correctIndex": 2
                }
            ]
        }
    },
    {
        "id": 20,
        "title": "EP 20 – Ternary Operator in Java | Single-Line if-else",
        "youtubeId": "WlZnyin9dMo",
        "thumbnail": "/Thumbnail/ep-27-Java Ternary Operator Explained  Find Maximum of 3 Numbers (Interview Quest.png",
        "tags": [
            "Java",
            "Operators"
        ],
        "notes": {
            "intro": "Ternary Operator if-else का एक compact replacement है। यह conditional expression के base पर decision लेता है और value return करता है।",
            "topics": [
                "📋 Syntax: condition ? result_if_true : result_if_false",
                "⚡ Expression based: It returns a value (unlike if-else)",
                "📐 Best for: Assigning values based on a simple condition",
                "🚫 Avoiding excessive nesting for readability"
            ],
            "code": "public class TernaryDemo {\n    public static void main(String[] args) {\n        int age = 18;\n        String status = (age >= 18) ? \"Eligible to Vote\" : \"Not Eligible\";\n        \n        System.out.println(status);\n\n        int n = 7;\n        String type = (n % 2 == 0) ? \"Even\" : \"Odd\";\n        System.out.println(type); // Odd\n    }\n}",
            "quiz": [
                {
                    "question": "How many operands does the Ternary operator require?",
                    "answer": "Three (condition, true-result, false-result).",
                    "options": [
                        "One",
                        "Two",
                        "Three",
                        "Four"
                    ],
                    "correctIndex": 2
                },
                {
                    "question": "What is the symbol for Ternary Operator?",
                    "answer": "? and :",
                    "options": [
                        "?",
                        "!",
                        "? :",
                        "::"
                    ],
                    "correctIndex": 2
                },
                {
                    "question": "Difference between short-circuit logical operators (&&, ||) and standard operators (&, |)?",
                    "answer": "Short-circuit operators skip executing second operand if result is clear. Standard operators always evaluate both operands.",
                    "options": [
                        "Short-circuit is slower",
                        "Short-circuit skips second operand check if result is determined early",
                        "Standard is only for bits",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "How does pre-increment (++i) differ from post-increment (i++) in memory?",
                    "answer": "Pre-increment changes the value first and then returns it. Post-increment returns original value first, then changes it in memory.",
                    "options": [
                        "Pre-increment is slower",
                        "Pre-increment updates value then returns; Post-increment returns then updates",
                        "Post-increment updates first",
                        "No difference"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is operator precedence and associativity?",
                    "answer": "Precedence determines execution order of different operators. Associativity determines execution direction for equal-precedence operators.",
                    "options": [
                        "Determines variable scope",
                        "Precedence is order; Associativity is direction (left-to-right/right-to-left)",
                        "Determines compile speed",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is bitwise shift operators: <<, >>, >>>?",
                    "answer": "Left shift (<<) multiplies by 2. Signed right shift (>>) divides by 2 keeping sign. Unsigned right shift (>>>) fills zero on left.",
                    "options": [
                        "Normal math shortcuts",
                        "Bit-level shifts; >>> is unsigned zero-fill right shift",
                        "Only for strings",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What happens when you divide an integer by zero vs a double by zero?",
                    "answer": "Integer division by zero throws ArithmeticException. Floating-point (double) division by zero returns infinity (Infinity).",
                    "options": [
                        "Both throw exception",
                        "Both return infinity",
                        "Integer throws ArithmeticException; Double returns Infinity",
                        "None"
                    ],
                    "correctIndex": 2
                },
                {
                    "question": "What does the modulo (%) operator return?",
                    "answer": "It returns the remainder of the division between two numeric operands.",
                    "options": [
                        "Quotient",
                        "Percentage value",
                        "Remainder",
                        "Dividend"
                    ],
                    "correctIndex": 2
                },
                {
                    "question": "What is ternary operator and when does it evaluate?",
                    "answer": "A shortcut condition syntax: condition ? expression1 : expression2. It only evaluates the matching branch.",
                    "options": [
                        "Evaluates both branches",
                        "Conditional shortcut executing only the true or false branch",
                        "Replaces loops",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What does assignment operator returns in Java?",
                    "answer": "An assignment (a = b) returns the value assigned, allowing chained assignments like a = b = c = 10.",
                    "options": [
                        "boolean status",
                        "void",
                        "The value assigned",
                        "Memory address"
                    ],
                    "correctIndex": 2
                }
            ]
        }
    },
    {
        "id": 21,
        "title": "EP 21 – Bitwise Operators in Java | Binary Level Programming",
        "youtubeId": "TUwb1rXDE-k",
        "thumbnail": "/Thumbnail/ep-20-bitwise-operators-thumbnail.png",
        "tags": [
            "Java",
            "Operators"
        ],
        "notes": {
            "intro": "Bitwise operators binary level पर data manipulate करते हैं। Performance-critical systems और cryptography में इनका use होता है।",
            "topics": [
                "&, |, ^, ~ : Bitwise AND, OR, XOR, Complement",
                "<<, >>, >>> : Left Shift, Right Shift, Unsigned Shift",
                "🔌 Fast Multiplication/Division using shifts",
                "🛠️ Setting/Clearing bits in lower-level programming"
            ],
            "code": "public class BitwiseDemo {\n    public static void main(String[] args) {\n        int a = 5; // 0101\n        int b = 3; // 0011\n        \n        System.out.println(a & b); // 1  (0001)\n        System.out.println(a | b); // 7  (0111)\n        \n        // Fast multiplication (x * 2^1)\n        System.out.println(10 << 1); // 20\n    }\n}",
            "quiz": [
                {
                    "question": "Which bitwise operator is used for binary inversion?",
                    "answer": "Bitwise Complement (~).",
                    "options": [
                        "&",
                        "|",
                        "~",
                        "<<"
                    ],
                    "correctIndex": 2
                },
                {
                    "question": "What is '5 << 1' equivalent to?",
                    "answer": "5 multiplied by 2 (result 10).",
                    "options": [
                        "5",
                        "10",
                        "15",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Difference between short-circuit logical operators (&&, ||) and standard operators (&, |)?",
                    "answer": "Short-circuit operators skip executing second operand if result is clear. Standard operators always evaluate both operands.",
                    "options": [
                        "Short-circuit is slower",
                        "Short-circuit skips second operand check if result is determined early",
                        "Standard is only for bits",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "How does pre-increment (++i) differ from post-increment (i++) in memory?",
                    "answer": "Pre-increment changes the value first and then returns it. Post-increment returns original value first, then changes it in memory.",
                    "options": [
                        "Pre-increment is slower",
                        "Pre-increment updates value then returns; Post-increment returns then updates",
                        "Post-increment updates first",
                        "No difference"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is operator precedence and associativity?",
                    "answer": "Precedence determines execution order of different operators. Associativity determines execution direction for equal-precedence operators.",
                    "options": [
                        "Determines variable scope",
                        "Precedence is order; Associativity is direction (left-to-right/right-to-left)",
                        "Determines compile speed",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is bitwise shift operators: <<, >>, >>>?",
                    "answer": "Left shift (<<) multiplies by 2. Signed right shift (>>) divides by 2 keeping sign. Unsigned right shift (>>>) fills zero on left.",
                    "options": [
                        "Normal math shortcuts",
                        "Bit-level shifts; >>> is unsigned zero-fill right shift",
                        "Only for strings",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What happens when you divide an integer by zero vs a double by zero?",
                    "answer": "Integer division by zero throws ArithmeticException. Floating-point (double) division by zero returns infinity (Infinity).",
                    "options": [
                        "Both throw exception",
                        "Both return infinity",
                        "Integer throws ArithmeticException; Double returns Infinity",
                        "None"
                    ],
                    "correctIndex": 2
                },
                {
                    "question": "What does the modulo (%) operator return?",
                    "answer": "It returns the remainder of the division between two numeric operands.",
                    "options": [
                        "Quotient",
                        "Percentage value",
                        "Remainder",
                        "Dividend"
                    ],
                    "correctIndex": 2
                },
                {
                    "question": "What is ternary operator and when does it evaluate?",
                    "answer": "A shortcut condition syntax: condition ? expression1 : expression2. It only evaluates the matching branch.",
                    "options": [
                        "Evaluates both branches",
                        "Conditional shortcut executing only the true or false branch",
                        "Replaces loops",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What does assignment operator returns in Java?",
                    "answer": "An assignment (a = b) returns the value assigned, allowing chained assignments like a = b = c = 10.",
                    "options": [
                        "boolean status",
                        "void",
                        "The value assigned",
                        "Memory address"
                    ],
                    "correctIndex": 2
                }
            ]
        }
    },
    {
        "id": 22,
        "title": "EP 22 – Calculator Project using Operators | Mini Project",
        "youtubeId": "1pcPoZqz08c",
        "thumbnail": "/Thumbnail/ep-21-result-analyser-project.png",
        "tags": [
            "Java",
            "Project"
        ],
        "notes": {
            "intro": "Project phase! हमने जितने भी operators सीखे हैं, उनसे एक simple terminal-based calculator बनाएँगे जो arithmetic calculations कर सके।",
            "topics": [
                "🏗️ Building the core logic for Add, Sub, Mul, Div",
                "📟 Output formatting using System.out.println",
                "🧠 Understanding how precedence affects our calculator outputs",
                "🛠️ Modular design approach basics"
            ],
            "code": "public class BasicCalculator {\n    public static void main(String[] args) {\n        double n1 = 10.5, n2 = 5.0;\n        \n        System.out.println(\"Result: \" + (n1 + n2));\n        System.out.println(\"Result: \" + (n1 - n2));\n        System.out.println(\"Result: \" + (n1 * n2));\n        System.out.println(\"Result: \" + (n1 / n2));\n    }\n}",
            "quiz": [
                {
                    "question": "Which operator would you use to find the remainder?",
                    "answer": "Modulo (%)",
                    "options": [
                        "/",
                        "*",
                        "%",
                        "-"
                    ],
                    "correctIndex": 2
                },
                {
                    "question": "Why use 'double' for a calculator instead of 'int'?",
                    "answer": "To handle division correctly and allow decimals in calculations.",
                    "options": [
                        "Faster",
                        "Handle decimals",
                        "Less memory",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "How does String comparison work using '==' vs '.equals()'?",
                    "answer": "'==' compares memory addresses (reference equality). '.equals()' compares character content (value equality).",
                    "options": [
                        "No difference",
                        "'==' compares references; '.equals()' compares contents",
                        "'.equals()' is for speed",
                        "'==' is for contents"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is a switch expression (Java 14+) and how is it different from classic switch?",
                    "answer": "Switch expression returns a value, uses lambda-like '->' syntax, and does not require break statements to prevent fall-through.",
                    "options": [
                        "Classic switch only",
                        "Returns value and uses '->' without fall-through break requirements",
                        "Slower than switch statements",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is conditional fall-through in switch statement?",
                    "answer": "It occurs when a case matches but lacks a 'break' statement, causing execution to bleed into subsequent cases automatically.",
                    "options": [
                        "Compile error",
                        "Bleeding case execution due to missing break statement",
                        "Ternary fallback",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Can double, float, or long values be used in switch conditions?",
                    "answer": "No. Classic switch only supports byte, short, char, int, String, and Enums. Floating point types are not allowed.",
                    "options": [
                        "Yes, supported",
                        "No, only supports integrals, String, and Enums",
                        "Only float is supported",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is nested conditional complexity and why is it discouraged?",
                    "answer": "Multiple nested if-else statements increase cognitive load, make debugging hard, and make code unmaintainable.",
                    "options": [
                        "Makes code run faster",
                        "Nested structures that hinder readability and maintainability",
                        "Avoids exceptions",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is short-circuit evaluation in complex if-else conditions?",
                    "answer": "The JVM evaluates conditions from left to right and stops as soon as the outcome is final, preventing unnecessary evaluation.",
                    "options": [
                        "Speeds up server",
                        "Stops evaluating conditions once the overall boolean result is determined",
                        "Stops compiler",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "How does the default block work in a switch statement?",
                    "answer": "It acts as a catch-all block that executes if none of the explicit cases match the evaluated expression.",
                    "options": [
                        "Runs first",
                        "Executes only if no case matches",
                        "Mandatory block in all switches",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What does the JVM do when comparing reference variables using 'if (obj1 == obj2)'?",
                    "answer": "It checks if both references point to the exact same object location in the Heap memory.",
                    "options": [
                        "Compares object field values",
                        "Checks if reference points to same Heap location",
                        "Translates to binary",
                        "None"
                    ],
                    "correctIndex": 1
                }
            ]
        }
    },
    {
        "id": 23,
        "title": "EP 23 – Introduction to Conditionals | Simple If Statement",
        "youtubeId": "3eA3B1-0WSk",
        "thumbnail": "/Thumbnail/ep-23-if-statement-thumbnail.png",
        "tags": [
            "Java",
            "Conditions"
        ],
        "notes": {
            "intro": "Programming में decision making के लिए If block का use होता है। अगर condition true है, तो ही block के अंदर का code execute होगा।",
            "topics": [
                "🛠️ Logic building: decisions based on boolean outcomes",
                "📋 Syntax: if (condition) { // code }",
                "🔑 Comparison operators in If blocks",
                "🚦 Single block execution control"
            ],
            "code": "public class SimpleIf {\n    public static void main(String[] args) {\n        int speed = 100;\n        \n        if (speed > 80) {\n            System.out.println(\"Over Speeding! 🚦\");\n        }\n        \n        System.out.println(\"Safe driving is better.\");\n    }\n}",
            "quiz": [
                {
                    "question": "What must be the result of the condition inside an 'if' statement?",
                    "answer": "A boolean (true or false).",
                    "options": [
                        "Int",
                        "String",
                        "Boolean",
                        "Float"
                    ],
                    "correctIndex": 2
                },
                {
                    "question": "What happens if the condition in an 'if' is false?",
                    "answer": "The code block inside the if is completely skipped.",
                    "options": [
                        "Error occurs",
                        "Skips block",
                        "Prints null",
                        "Restarts program"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "How does String comparison work using '==' vs '.equals()'?",
                    "answer": "'==' compares memory addresses (reference equality). '.equals()' compares character content (value equality).",
                    "options": [
                        "No difference",
                        "'==' compares references; '.equals()' compares contents",
                        "'.equals()' is for speed",
                        "'==' is for contents"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is a switch expression (Java 14+) and how is it different from classic switch?",
                    "answer": "Switch expression returns a value, uses lambda-like '->' syntax, and does not require break statements to prevent fall-through.",
                    "options": [
                        "Classic switch only",
                        "Returns value and uses '->' without fall-through break requirements",
                        "Slower than switch statements",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is conditional fall-through in switch statement?",
                    "answer": "It occurs when a case matches but lacks a 'break' statement, causing execution to bleed into subsequent cases automatically.",
                    "options": [
                        "Compile error",
                        "Bleeding case execution due to missing break statement",
                        "Ternary fallback",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Can double, float, or long values be used in switch conditions?",
                    "answer": "No. Classic switch only supports byte, short, char, int, String, and Enums. Floating point types are not allowed.",
                    "options": [
                        "Yes, supported",
                        "No, only supports integrals, String, and Enums",
                        "Only float is supported",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is nested conditional complexity and why is it discouraged?",
                    "answer": "Multiple nested if-else statements increase cognitive load, make debugging hard, and make code unmaintainable.",
                    "options": [
                        "Makes code run faster",
                        "Nested structures that hinder readability and maintainability",
                        "Avoids exceptions",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is short-circuit evaluation in complex if-else conditions?",
                    "answer": "The JVM evaluates conditions from left to right and stops as soon as the outcome is final, preventing unnecessary evaluation.",
                    "options": [
                        "Speeds up server",
                        "Stops evaluating conditions once the overall boolean result is determined",
                        "Stops compiler",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "How does the default block work in a switch statement?",
                    "answer": "It acts as a catch-all block that executes if none of the explicit cases match the evaluated expression.",
                    "options": [
                        "Runs first",
                        "Executes only if no case matches",
                        "Mandatory block in all switches",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What does the JVM do when comparing reference variables using 'if (obj1 == obj2)'?",
                    "answer": "It checks if both references point to the exact same object location in the Heap memory.",
                    "options": [
                        "Compares object field values",
                        "Checks if reference points to same Heap location",
                        "Translates to binary",
                        "None"
                    ],
                    "correctIndex": 1
                }
            ]
        }
    },
    {
        "id": 24,
        "title": "EP 24 – If-Else with Real-World Logic | Decision Making",
        "youtubeId": "CSXI2E_VfKI",
        "thumbnail": "/Thumbnail/ep-24-if-else-real-life-thumbnail.png",
        "tags": [
            "Java",
            "Conditions"
        ],
        "notes": {
            "intro": "Decision making का upgrade: If-Else. अगर condition true है तो if block, नहीं तो else block run होता है। Always one path is taken.",
            "topics": [
                "🚦 Path selection: handling both True and False cases",
                "📋 Syntax: if() { } else { }",
                "🧠 Voting eligibility and even/odd logic",
                "✅ Mandatory execution: either if or else ALWAYS runs"
            ],
            "code": "public class IfElseDemo {\n    public static void main(String[] args) {\n        int n = 15;\n        if (n % 2 == 0) {\n            System.out.println(\"Even\");\n        } else {\n            System.out.println(\"Odd\");\n        }\n        \n        // Voting\n        int age = 17;\n        if (age >= 18) {\n            System.out.println(\"Voter\");\n        } else {\n            System.out.println(\"Not a Voter\");\n        }\n    }\n}",
            "quiz": [
                {
                    "question": "In an if-else structure, can both blocks run at the same time?",
                    "answer": "No, they are mutually exclusive. Only one block runs based on the condition.",
                    "options": [
                        "Yes",
                        "No",
                        "Depends on computer",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Why use 'else' instead of a second 'if' with opposite logic?",
                    "answer": "It is more efficient (half the checks) and cleaner to read.",
                    "options": [
                        "Faster",
                        "Cleaner & Efficient",
                        "Required by Java",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "How does String comparison work using '==' vs '.equals()'?",
                    "answer": "'==' compares memory addresses (reference equality). '.equals()' compares character content (value equality).",
                    "options": [
                        "No difference",
                        "'==' compares references; '.equals()' compares contents",
                        "'.equals()' is for speed",
                        "'==' is for contents"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is a switch expression (Java 14+) and how is it different from classic switch?",
                    "answer": "Switch expression returns a value, uses lambda-like '->' syntax, and does not require break statements to prevent fall-through.",
                    "options": [
                        "Classic switch only",
                        "Returns value and uses '->' without fall-through break requirements",
                        "Slower than switch statements",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is conditional fall-through in switch statement?",
                    "answer": "It occurs when a case matches but lacks a 'break' statement, causing execution to bleed into subsequent cases automatically.",
                    "options": [
                        "Compile error",
                        "Bleeding case execution due to missing break statement",
                        "Ternary fallback",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Can double, float, or long values be used in switch conditions?",
                    "answer": "No. Classic switch only supports byte, short, char, int, String, and Enums. Floating point types are not allowed.",
                    "options": [
                        "Yes, supported",
                        "No, only supports integrals, String, and Enums",
                        "Only float is supported",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is nested conditional complexity and why is it discouraged?",
                    "answer": "Multiple nested if-else statements increase cognitive load, make debugging hard, and make code unmaintainable.",
                    "options": [
                        "Makes code run faster",
                        "Nested structures that hinder readability and maintainability",
                        "Avoids exceptions",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is short-circuit evaluation in complex if-else conditions?",
                    "answer": "The JVM evaluates conditions from left to right and stops as soon as the outcome is final, preventing unnecessary evaluation.",
                    "options": [
                        "Speeds up server",
                        "Stops evaluating conditions once the overall boolean result is determined",
                        "Stops compiler",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "How does the default block work in a switch statement?",
                    "answer": "It acts as a catch-all block that executes if none of the explicit cases match the evaluated expression.",
                    "options": [
                        "Runs first",
                        "Executes only if no case matches",
                        "Mandatory block in all switches",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What does the JVM do when comparing reference variables using 'if (obj1 == obj2)'?",
                    "answer": "It checks if both references point to the exact same object location in the Heap memory.",
                    "options": [
                        "Compares object field values",
                        "Checks if reference points to same Heap location",
                        "Translates to binary",
                        "None"
                    ],
                    "correctIndex": 1
                }
            ]
        }
    },
    {
        "id": 25,
        "title": "EP 25 – Else-If Ladder in Java | Grade Calculator Project",
        "youtubeId": "ZOVaRsm9QCw",
        "thumbnail": "/Thumbnail/ep-25-If Else If Statement in Java in Hindi  Java Conditional Statements Tutorial.png",
        "tags": [
            "Java",
            "Conditions"
        ],
        "notes": {
            "intro": "Else-if ladder का use तब करते हैं जब हमारे पास multiple conditions हों। यह एक-एक करके check करता है और जो पहली condition true होती है, उसका block run होता है।",
            "topics": [
                "📋 Syntax: if() { } else if() { } else if() { } else { }",
                "🎯 Only the FIRST matching condition executes, rest are skipped",
                "⚡ Order matters! Put most specific conditions FIRST",
                "🔗 Always end with a final else as default/fallback",
                "📊 Use case: Grade (A/B/C/D/F), Age group, Tax slab"
            ],
            "code": "public class IfElseIfDemo {\n    public static void main(String[] args) {\n\n        double percentage = 78.5;\n        String grade;\n\n        // Grade Calculator — else-if ladder\n        if (percentage >= 90) {\n            grade = \"A+ (Outstanding)\";\n        } else if (percentage >= 80) {\n            grade = \"A (Excellent)\";\n        } else if (percentage >= 70) {\n            grade = \"B (Very Good)\";    // ← This one executes for 78.5\n        } else if (percentage >= 60) {\n            grade = \"C (Good)\";\n        } else if (percentage >= 33) {\n            grade = \"D (Pass)\";\n        } else {\n            grade = \"F (Fail)\";         // Default fallback\n        }\n\n        System.out.println(\"Percentage: \" + percentage + \"%\");\n        System.out.println(\"Grade: \" + grade);\n\n        // BMI Category\n        double bmi = 22.4;\n        if (bmi < 18.5) System.out.println(\"Underweight\");\n        else if (bmi < 25) System.out.println(\"Normal ✅\");  // Prints this\n        else if (bmi < 30) System.out.println(\"Overweight\");\n        else System.out.println(\"Obese\");\n    }\n}",
            "quiz": [
                {
                    "question": "What is an 'Else-If Ladder' and when do you use it?",
                    "answer": "A structure to check multiple conditions sequentially. Use it when you have more than 2 mutually exclusive options (like Grades).",
                    "options": [
                        "For loops",
                        "Multiple conditions",
                        "Single condition",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Why is the ORDER of conditions critical in an else-if ladder?",
                    "answer": "Because Java executes only the FIRST matching condition and skips the rest. Most specific conditions should go first.",
                    "options": [
                        "Speed",
                        "Correctness",
                        "Memory",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What happens if TWO conditions in a ladder are both true?",
                    "answer": "Only the block of the first true condition will run. The second one will never be checked.",
                    "options": [
                        "Both run",
                        "First runs",
                        "Error",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is the role of the final 'else' in a ladder?",
                    "answer": "It acts as a 'Default' case that runs if none of the specific 'if' or 'else if' conditions were met.",
                    "options": [
                        "Optional",
                        "Default fallback",
                        "Error",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Can you have an else-if ladder without a starting 'if'?",
                    "answer": "No, an 'else if' must always follow an 'if' or another 'else if' statement.",
                    "options": [
                        "Yes",
                        "No",
                        "Only if static",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "How does String comparison work using '==' vs '.equals()'?",
                    "answer": "'==' compares memory addresses (reference equality). '.equals()' compares character content (value equality).",
                    "options": [
                        "No difference",
                        "'==' compares references; '.equals()' compares contents",
                        "'.equals()' is for speed",
                        "'==' is for contents"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is a switch expression (Java 14+) and how is it different from classic switch?",
                    "answer": "Switch expression returns a value, uses lambda-like '->' syntax, and does not require break statements to prevent fall-through.",
                    "options": [
                        "Classic switch only",
                        "Returns value and uses '->' without fall-through break requirements",
                        "Slower than switch statements",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is conditional fall-through in switch statement?",
                    "answer": "It occurs when a case matches but lacks a 'break' statement, causing execution to bleed into subsequent cases automatically.",
                    "options": [
                        "Compile error",
                        "Bleeding case execution due to missing break statement",
                        "Ternary fallback",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Can double, float, or long values be used in switch conditions?",
                    "answer": "No. Classic switch only supports byte, short, char, int, String, and Enums. Floating point types are not allowed.",
                    "options": [
                        "Yes, supported",
                        "No, only supports integrals, String, and Enums",
                        "Only float is supported",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is nested conditional complexity and why is it discouraged?",
                    "answer": "Multiple nested if-else statements increase cognitive load, make debugging hard, and make code unmaintainable.",
                    "options": [
                        "Makes code run faster",
                        "Nested structures that hinder readability and maintainability",
                        "Avoids exceptions",
                        "None"
                    ],
                    "correctIndex": 1
                }
            ]
        }
    },
    {
        "id": 26,
        "title": "EP 26 – Nested If in Java | Weather Decision App Project 🌦️",
        "youtubeId": "kCe5ZCjF5mU",
        "thumbnail": "/Thumbnail/ep-26-Nested If in Java (Hindi) 🔥 Real Project  Weather Decision App 🌦️.png",
        "tags": [
            "Java",
            "Conditions"
        ],
        "notes": {
            "intro": "Nested If = if ke andar if. Real decisions depend on multiple layers. Weather App: first check if it's raining, THEN check temperature, THEN suggest clothing.",
            "topics": [
                "🪆 Nested if: if inside another if block",
                "🔑 Outer condition must be true to even evaluate inner condition",
                "🌦️ Weather App Project: multi-layer decision making",
                "⚠️ Keep nesting shallow — too deep = pyramid of doom (bad practice)",
                "🔄 Alternative: combine conditions with && instead of nesting"
            ],
            "code": "public class WeatherDecisionApp {\n    public static void main(String[] args) {\n\n        boolean isRaining = true;\n        int temperature = 28; // Celsius\n\n        // Nested if — outer checks rain, inner checks temperature\n        if (isRaining) {\n            System.out.println(\"☔ It is raining\");\n\n            if (temperature < 15) {\n                System.out.println(\"🧥 Wear heavy jacket + carry umbrella\");\n            } else if (temperature < 25) {\n                System.out.println(\"🧤 Wear light jacket + carry umbrella\");\n            } else {\n                System.out.println(\"👕 Light clothes + carry umbrella\");\n            }\n        } else {\n            System.out.println(\"☀️ Not raining\");\n\n            if (temperature > 35) {\n                System.out.println(\"😎 Wear sunglasses and sunscreen\");\n            } else {\n                System.out.println(\"🌤️ Nice weather, go outside!\");\n            }\n        }\n    }\n}",
            "quiz": [
                {
                    "question": "What is 'Nesting' in programming?",
                    "answer": "The practice of placing one control structure (like 'if') inside another of the same type.",
                    "options": [
                        "Loops",
                        "If inside If",
                        "Variables",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "When should you prefer && over a Nested-If?",
                    "answer": "When both conditions must be true and you don't need to perform any 'intermediate' action between the first and second checks.",
                    "options": [
                        "Always",
                        "When conditions are simple",
                        "Never",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Explain the 'Pyramid of Doom' and how to avoid it.",
                    "answer": "It refers to deep nesting that makes code unreadable. Avoid it by using logical operators (&&, ||) or Guard Clauses.",
                    "options": [
                        "Deep nesting",
                        "Fast code",
                        "Error",
                        "None"
                    ],
                    "correctIndex": 0
                },
                {
                    "question": "Inner vs Outer if: which one is checked first?",
                    "answer": "The Outer 'if' is checked first. The Inner 'if' is only reached if the Outer 'if' evaluates to true.",
                    "options": [
                        "Inner",
                        "Outer",
                        "Both",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Is there a limit to how many levels you can nest if-statements?",
                    "answer": "Theoretically limited by compiler memory, but practically you should never go beyond 3 levels for clean code.",
                    "options": [
                        "No limit",
                        "3 levels",
                        "10 levels",
                        "None"
                    ],
                    "correctIndex": 0
                },
                {
                    "question": "How does String comparison work using '==' vs '.equals()'?",
                    "answer": "'==' compares memory addresses (reference equality). '.equals()' compares character content (value equality).",
                    "options": [
                        "No difference",
                        "'==' compares references; '.equals()' compares contents",
                        "'.equals()' is for speed",
                        "'==' is for contents"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is a switch expression (Java 14+) and how is it different from classic switch?",
                    "answer": "Switch expression returns a value, uses lambda-like '->' syntax, and does not require break statements to prevent fall-through.",
                    "options": [
                        "Classic switch only",
                        "Returns value and uses '->' without fall-through break requirements",
                        "Slower than switch statements",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is conditional fall-through in switch statement?",
                    "answer": "It occurs when a case matches but lacks a 'break' statement, causing execution to bleed into subsequent cases automatically.",
                    "options": [
                        "Compile error",
                        "Bleeding case execution due to missing break statement",
                        "Ternary fallback",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Can double, float, or long values be used in switch conditions?",
                    "answer": "No. Classic switch only supports byte, short, char, int, String, and Enums. Floating point types are not allowed.",
                    "options": [
                        "Yes, supported",
                        "No, only supports integrals, String, and Enums",
                        "Only float is supported",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is nested conditional complexity and why is it discouraged?",
                    "answer": "Multiple nested if-else statements increase cognitive load, make debugging hard, and make code unmaintainable.",
                    "options": [
                        "Makes code run faster",
                        "Nested structures that hinder readability and maintainability",
                        "Avoids exceptions",
                        "None"
                    ],
                    "correctIndex": 1
                }
            ]
        }
    },
    {
        "id": 27,
        "title": "EP 27 – Ternary Operator in Java | Find Maximum of 3 Numbers",
        "youtubeId": "WlZnyin9dMo",
        "thumbnail": "/Thumbnail/ep-27-Java Ternary Operator Explained  Find Maximum of 3 Numbers (Interview Quest.png",
        "tags": [
            "Java",
            "Operators"
        ],
        "notes": {
            "intro": "Ternary operator = shortcut for simple if-else — 3 parts: condition ? valueIfTrue : valueIfFalse. Interview classic: Find maximum of 2 or 3 numbers!",
            "topics": [
                "📋 Syntax: result = (condition) ? trueValue : falseValue",
                "🎯 3 parts: condition, true expression, false expression",
                "⚡ Best for simple one-liner decisions (not complex logic)",
                "🏆 Interview: Find max of 2 numbers in one line",
                "🔗 Nested ternary: Find max of 3 numbers (use carefully!)"
            ],
            "code": "public class TernaryDemo {\n    public static void main(String[] args) {\n\n        // Basic ternary\n        int age = 20;\n        String status = (age >= 18) ? \"Adult\" : \"Minor\";\n        System.out.println(status); // Adult\n\n        // Find maximum of 2 numbers\n        int a = 45, b = 72;\n        int max = (a > b) ? a : b;\n        System.out.println(\"Max of \" + a + \" and \" + b + \": \" + max); // 72\n\n        // Find maximum of 3 numbers (nested ternary)\n        int x = 15, y = 8, z = 23;\n        int maxOf3 = (x > y) ? ((x > z) ? x : z) : ((y > z) ? y : z);\n        System.out.println(\"Max of 3: \" + maxOf3); // 23\n\n        // Even/Odd check\n        int num = 17;\n        System.out.println(num + \" is \" + (num % 2 == 0 ? \"Even\" : \"Odd\"));\n\n        // Absolute value\n        int n = -10;\n        int abs = (n < 0) ? -n : n;\n        System.out.println(\"Absolute: \" + abs); // 10\n    }\n}",
            "quiz": [
                {
                    "question": "Why is it called 'Ternary'? What are its 3 parts?",
                    "answer": "Because it has 3 operands: 1. Condition, 2. Value if true, 3. Value if false.",
                    "options": [
                        "3 operands",
                        "3 lines",
                        "3 variables",
                        "None"
                    ],
                    "correctIndex": 0
                },
                {
                    "question": "Can you write a nested ternary to find the max of 3 numbers?",
                    "answer": "int max = (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);",
                    "options": [
                        "Yes",
                        "No",
                        "Only if static",
                        "None"
                    ],
                    "correctIndex": 0
                },
                {
                    "question": "Is Ternary faster than If-Else in terms of performance?",
                    "answer": "No, they usually compile to identical machine code. Ternary is about code brevity, not speed.",
                    "options": [
                        "Yes",
                        "No",
                        "Depends",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Can a ternary return different data types for true and false?",
                    "answer": "No, both expressions must return the same data type (or types compatible with the target variable).",
                    "options": [
                        "Yes",
                        "No",
                        "Only if static",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "When is Ternary considered 'Bad Practice' for code readability?",
                    "answer": "When you start nesting ternaries deeply. It becomes extremely hard to read compared to a standard if-else ladder.",
                    "options": [
                        "Always",
                        "When nested deeply",
                        "Never",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "How does String comparison work using '==' vs '.equals()'?",
                    "answer": "'==' compares memory addresses (reference equality). '.equals()' compares character content (value equality).",
                    "options": [
                        "No difference",
                        "'==' compares references; '.equals()' compares contents",
                        "'.equals()' is for speed",
                        "'==' is for contents"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is a switch expression (Java 14+) and how is it different from classic switch?",
                    "answer": "Switch expression returns a value, uses lambda-like '->' syntax, and does not require break statements to prevent fall-through.",
                    "options": [
                        "Classic switch only",
                        "Returns value and uses '->' without fall-through break requirements",
                        "Slower than switch statements",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is conditional fall-through in switch statement?",
                    "answer": "It occurs when a case matches but lacks a 'break' statement, causing execution to bleed into subsequent cases automatically.",
                    "options": [
                        "Compile error",
                        "Bleeding case execution due to missing break statement",
                        "Ternary fallback",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Can double, float, or long values be used in switch conditions?",
                    "answer": "No. Classic switch only supports byte, short, char, int, String, and Enums. Floating point types are not allowed.",
                    "options": [
                        "Yes, supported",
                        "No, only supports integrals, String, and Enums",
                        "Only float is supported",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is nested conditional complexity and why is it discouraged?",
                    "answer": "Multiple nested if-else statements increase cognitive load, make debugging hard, and make code unmaintainable.",
                    "options": [
                        "Makes code run faster",
                        "Nested structures that hinder readability and maintainability",
                        "Avoids exceptions",
                        "None"
                    ],
                    "correctIndex": 1
                }
            ]
        }
    },
    {
        "id": 28,
        "title": "EP 28 – Switch Statement in Java | Real Project + Interview Questions",
        "youtubeId": "Yi0T-u4U_no",
        "thumbnail": "/Thumbnail/ep-28-Switch Statement in Java.png",
        "tags": [
            "Java",
            "Conditions"
        ],
        "notes": {
            "intro": "Switch statement cleanly handles MANY exact discrete values. Better than long else-if ladders for menu systems, day names, state codes etc.",
            "topics": [
                "📋 Syntax: switch(variable) { case value: break; default: }",
                "🔑 break statement: stops fall-through (critical!)",
                "⚠️ Fall-through: without break, next cases execute too",
                "🔢 Works with: int, char, String, enum",
                "🆕 Java 14+ Enhanced switch: no break needed, arrow syntax"
            ],
            "code": "public class SwitchDemo {\n    public static void main(String[] args) {\n\n        // Classic Switch — Day of week\n        int day = 3;\n        String dayName;\n\n        switch (day) {\n            case 1: dayName = \"Monday\"; break;\n            case 2: dayName = \"Tuesday\"; break;\n            case 3: dayName = \"Wednesday\"; break;   // Matches!\n            case 4: dayName = \"Thursday\"; break;\n            case 5: dayName = \"Friday\"; break;\n            case 6: dayName = \"Saturday\"; break;\n            case 7: dayName = \"Sunday\"; break;\n            default: dayName = \"Invalid day\";\n        }\n        System.out.println(\"Day: \" + dayName); // Wednesday\n\n        // Java 14+ Enhanced Switch (no break needed!)\n        String result = switch (day) {\n            case 1 -> \"Monday\";\n            case 2 -> \"Tuesday\";\n            case 3 -> \"Wednesday\";\n            case 4, 5 -> \"Weekday\";   // Multiple cases!\n            case 6, 7 -> \"Weekend\";\n            default -> \"Invalid\";\n        };\n        System.out.println(\"Enhanced: \" + result);\n    }\n}",
            "quiz": [
                {
                    "question": "Explain the concept of 'Fall-Through' in Switch statements.",
                    "answer": "If you forget the 'break' statement, execution continues into the next 'case' even if its value doesn't match.",
                    "options": [
                        "It means skipping",
                        "Executing multiple cases (missing break)",
                        "Program crashes",
                        "It jumps back"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is the use of the 'default' case?",
                    "answer": "It runs if none of the specified 'case' values match the given variable. It's like the 'else' of a switch.",
                    "options": [
                        "Always runs",
                        "Runs only if no match",
                        "Must be at the start",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Which data types are NOT supported by Switch?",
                    "answer": "float, double, and boolean. It only supports exact discrete types like int, char, and String.",
                    "options": [
                        "int",
                        "float/double",
                        "String",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Mention two benefits of 'Enhanced Switch' (Java 14+).",
                    "answer": "1. No 'break' required (uses ->), 2. It can be used as an expression that returns a value.",
                    "options": [
                        "Speed",
                        "No break & Expression",
                        "Memory",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Is it possible to have multiple values in a single case in modern Java?",
                    "answer": "Yes, using commas: case 1, 2, 3 -> { ... }.",
                    "options": [
                        "Yes",
                        "No",
                        "Only if static",
                        "None"
                    ],
                    "correctIndex": 0
                },
                {
                    "question": "How does String comparison work using '==' vs '.equals()'?",
                    "answer": "'==' compares memory addresses (reference equality). '.equals()' compares character content (value equality).",
                    "options": [
                        "No difference",
                        "'==' compares references; '.equals()' compares contents",
                        "'.equals()' is for speed",
                        "'==' is for contents"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is a switch expression (Java 14+) and how is it different from classic switch?",
                    "answer": "Switch expression returns a value, uses lambda-like '->' syntax, and does not require break statements to prevent fall-through.",
                    "options": [
                        "Classic switch only",
                        "Returns value and uses '->' without fall-through break requirements",
                        "Slower than switch statements",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is conditional fall-through in switch statement?",
                    "answer": "It occurs when a case matches but lacks a 'break' statement, causing execution to bleed into subsequent cases automatically.",
                    "options": [
                        "Compile error",
                        "Bleeding case execution due to missing break statement",
                        "Ternary fallback",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Can double, float, or long values be used in switch conditions?",
                    "answer": "No. Classic switch only supports byte, short, char, int, String, and Enums. Floating point types are not allowed.",
                    "options": [
                        "Yes, supported",
                        "No, only supports integrals, String, and Enums",
                        "Only float is supported",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is nested conditional complexity and why is it discouraged?",
                    "answer": "Multiple nested if-else statements increase cognitive load, make debugging hard, and make code unmaintainable.",
                    "options": [
                        "Makes code run faster",
                        "Nested structures that hinder readability and maintainability",
                        "Avoids exceptions",
                        "None"
                    ],
                    "correctIndex": 1
                }
            ]
        }
    },
    {
        "id": 29,
        "title": "EP 29 – Student Result Analyzer Project v3.0 🔥",
        "youtubeId": "AIzKCZIXH4I",
        "thumbnail": "/Thumbnail/ep-29-Student Result Analyzer Project v3.0 🔥  Java Full Course.png",
        "tags": [
            "Java",
            "Project"
        ],
        "notes": {
            "intro": "Our biggest project yet — Result Analyser v3.0 with all conditionals (if-else, else-if, switch, ternary) combined to produce a complete, real-world student evaluation system.",
            "topics": [
                "🏆 Grade System using else-if ladder (A+, A, B, C, D, F)",
                "🔀 Switch for stream recommendation (Science/Commerce/Arts)",
                "📊 Scholarship eligibility using nested if + logical operators",
                "🎓 Distinction/Topper detection using multiple conditions",
                "📝 Full formatted report card output"
            ],
            "code": "public class ResultAnalyserV3 {\n    public static void main(String[] args) {\n\n        String name = \"Ananya Verma\";\n        int maths=92, science=88, english=85, hindi=90, cs=95;\n\n        int total = maths + science + english + hindi + cs;\n        double percentage = (total / 500.0) * 100;\n        boolean allPassed = maths>=33 && science>=33 &&\n                           english>=33 && hindi>=33 && cs>=33;\n\n        // Grade using else-if\n        String grade = percentage>=90 ? \"A+\" : percentage>=80 ? \"A\" :\n                       percentage>=70 ? \"B\" : percentage>=60 ? \"C\" :\n                       percentage>=33 ? \"D\" : \"F\";\n\n        // Stream recommendation using switch\n        String stream = switch (grade) {\n            case \"A+\", \"A\" -> \"Science ⚗️\";\n            case \"B\" -> \"Commerce 📈\";\n            default -> \"Arts 🎨\";\n        };\n\n        // Scholarship\n        boolean scholarship = percentage >= 90 && allPassed;\n\n        System.out.println(\"======= RESULT CARD v3.0 =======\");\n        System.out.println(\"Name       : \" + name);\n        System.out.printf(\"Total      : %d/500%n\", total);\n        System.out.printf(\"Percentage : %.2f%%%n\", percentage);\n        System.out.println(\"Grade      : \" + grade);\n        System.out.println(\"Stream     : \" + stream);\n        System.out.println(\"Status     : \" + (allPassed ? \"PASS ✅\" : \"FAIL ❌\"));\n        System.out.println(\"Scholarship: \" + (scholarship ? \"YES 🎉\" : \"No\"));\n    }\n}",
            "quiz": [
                {
                    "question": "Which control structure is best for Grade calculations?",
                    "answer": "Else-If Ladder, because it handles ranges (percentage >= 90).",
                    "options": [
                        "Switch",
                        "Else-If Ladder",
                        "Ternary",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "How to implement Stream recommendation logic efficiently?",
                    "answer": "Use a Switch on the student's grade (A -> Science, B -> Commerce, etc).",
                    "options": [
                        "If-Else",
                        "Switch",
                        "Loop",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "How to check if a student has distinction in at least 2 subjects?",
                    "answer": "Use logical ORs or a counter: if ((m1>=75?1:0) + (m2>=75?1:0) + ... >= 2).",
                    "options": [
                        "Counter logic",
                        "Simple if",
                        "Loop",
                        "None"
                    ],
                    "correctIndex": 0
                },
                {
                    "question": "What kind of loop would you use to process 100 students' results?",
                    "answer": "A 'For Loop', because the number of students (100) is fixed and known beforehand.",
                    "options": [
                        "While",
                        "For",
                        "Do-While",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Difference between using Switch vs if-else for stream recommendation.",
                    "answer": "Switch is more readable for discrete values (A, B, C), while if-else is more robust for range-based logic.",
                    "options": [
                        "Speed",
                        "Readability",
                        "Memory",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "How does String comparison work using '==' vs '.equals()'?",
                    "answer": "'==' compares memory addresses (reference equality). '.equals()' compares character content (value equality).",
                    "options": [
                        "No difference",
                        "'==' compares references; '.equals()' compares contents",
                        "'.equals()' is for speed",
                        "'==' is for contents"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is a switch expression (Java 14+) and how is it different from classic switch?",
                    "answer": "Switch expression returns a value, uses lambda-like '->' syntax, and does not require break statements to prevent fall-through.",
                    "options": [
                        "Classic switch only",
                        "Returns value and uses '->' without fall-through break requirements",
                        "Slower than switch statements",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is conditional fall-through in switch statement?",
                    "answer": "It occurs when a case matches but lacks a 'break' statement, causing execution to bleed into subsequent cases automatically.",
                    "options": [
                        "Compile error",
                        "Bleeding case execution due to missing break statement",
                        "Ternary fallback",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Can double, float, or long values be used in switch conditions?",
                    "answer": "No. Classic switch only supports byte, short, char, int, String, and Enums. Floating point types are not allowed.",
                    "options": [
                        "Yes, supported",
                        "No, only supports integrals, String, and Enums",
                        "Only float is supported",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is nested conditional complexity and why is it discouraged?",
                    "answer": "Multiple nested if-else statements increase cognitive load, make debugging hard, and make code unmaintainable.",
                    "options": [
                        "Makes code run faster",
                        "Nested structures that hinder readability and maintainability",
                        "Avoids exceptions",
                        "None"
                    ],
                    "correctIndex": 1
                }
            ]
        }
    },
    {
        "id": 30,
        "title": "EP 30 – Need of Loops in Java | Real Life Examples | DRY Principle",
        "youtubeId": "z7FeFJejgHA",
        "thumbnail": "/Thumbnail/ep-30-Need of Loops in Java  Real Life Examples Explained  DRY Principle.png",
        "tags": [
            "Java",
            "Loops"
        ],
        "notes": {
            "intro": "Loops = एक ही काम को automatically repeat karna. Without loops: printing 1-100 would need 100 print statements! DRY principle: Don't Repeat Yourself.",
            "topics": [
                "🔄 Why loops? Repeat code without copy-paste (DRY principle)",
                "📋 Loop types in Java: while, do-while, for, for-each",
                "🌍 Real-world loops: Sending 1000 emails, processing 10000 transactions",
                "⚙️ Loop components: initialization, condition, update",
                "🔑 Key concepts: iteration, loop variable, termination condition"
            ],
            "code": "public class WhyLoops {\n    public static void main(String[] args) {\n\n        // WITHOUT loops (bad approach):\n        System.out.println(1);\n        System.out.println(2);\n        System.out.println(3);\n        // ... 100 more lines?? ❌\n\n        System.out.println(\"--- With while loop ---\");\n\n        // WITH loops (proper approach):\n        int i = 1;\n        while (i <= 10) {\n            System.out.println(i);  // Print 1 to 10\n            i++;                    // Move to next number\n        }\n\n        System.out.println(\"--- Sum of 1 to 100 ---\");\n        int sum = 0;\n        int counter = 1;\n        while (counter <= 100) {\n            sum += counter;  // Add each number to sum\n            counter++;\n        }\n        System.out.println(\"Sum = \" + sum); // 5050\n    }\n}",
            "quiz": [
                {
                    "question": "Define the 'DRY principle' in your own words.",
                    "answer": "Don't Repeat Yourself — avoid code duplication.",
                    "options": [
                        "Do Repeat Yourself",
                        "Don't Repeat Yourself",
                        "Do Run Yearly",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What happens to the CPU if a program enters an 'Infinite Loop'?",
                    "answer": "It consumes 100% CPU usage, potentially causing the program or system to hang.",
                    "options": [
                        "Stops",
                        "100% CPU usage",
                        "Memory leak",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Difference between 'Iteration' and 'Condition'.",
                    "answer": "Iteration is one cycle of the loop; Condition is the check that decides whether to continue.",
                    "options": [
                        "Same",
                        "Iteration=Cycle, Condition=Check",
                        "Condition=Cycle, Iteration=Check",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Can you simulate any loop using an if-statement and a label?",
                    "answer": "Yes, using 'goto' style labels (though not recommended in Java).",
                    "options": [
                        "Yes",
                        "No",
                        "Only if static",
                        "None"
                    ],
                    "correctIndex": 0
                },
                {
                    "question": "Why do we need Loops in real-world software development?",
                    "answer": "To process large datasets, automate repetitive tasks, and handle dynamic user inputs efficiently.",
                    "options": [
                        "For fun",
                        "Automation & Efficiency",
                        "To make it slow",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is the primary difference between while and do-while loop?",
                    "answer": "while checks condition first (0 or more executions). do-while checks condition after (at least 1 execution guaranteed).",
                    "options": [
                        "while is faster",
                        "do-while executes at least once regardless of condition",
                        "while executes at least once",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is an infinite loop and how can we prevent it?",
                    "answer": "A loop that never meets its exit criteria. Prevented by ensuring the loop control variable is modified correctly towards the condition.",
                    "options": [
                        "A loop with no code",
                        "Loop with never-ending exit condition; fixed by updating loop control variables",
                        "Saves CPU cycles",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "How do break and continue statements differ?",
                    "answer": "break terminates the entire loop. continue skips the remaining code in current iteration and moves to next step.",
                    "options": [
                        "break skips iteration; continue terminates",
                        "break terminates loop; continue skips remaining iteration logic",
                        "Both terminate loop",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What are loop labels and how do they work with break/continue?",
                    "answer": "Labels identify nested loop blocks, allowing break or continue statements to target outer loops directly.",
                    "options": [
                        "Used for printing text",
                        "Identifies loop levels to let break/continue control outer loops",
                        "Normal comments",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Can we modify the index variable inside the block of a standard for loop?",
                    "answer": "Yes, you can modify it, but it changes the loop path and is generally considered bad practice as it causes bugs.",
                    "options": [
                        "No, it is constant",
                        "Yes, but changes execution control and is bad practice",
                        "Only in while loops",
                        "None"
                    ],
                    "correctIndex": 1
                }
            ]
        }
    },
    {
        "id": 31,
        "title": "EP 31 – While Loop in Java 💯 | From Basics to Advanced",
        "youtubeId": "lYVyY7B5gLw",
        "thumbnail": "/Thumbnail/ep-31-👉 One Video Enough to Master While Loop 💯  From Basics to Advanced.png",
        "tags": [
            "Java",
            "Loops"
        ],
        "notes": {
            "intro": "While loop = pre-condition loop। Condition पहले check होती है, body बाद में execute होती है। Condition false होते ही loop stop ho jata hai.",
            "topics": [
                "📋 Syntax: while (condition) { // body }",
                "✅ Pre-condition: condition checked BEFORE each iteration",
                "⚠️ If condition is false from start, body NEVER executes (0 times)",
                "♾️ Infinite loop: while(true) — use break to exit",
                "🔄 Use when: number of iterations is NOT known in advance"
            ],
            "code": "public class WhileLoop {\n    public static void main(String[] args) {\n\n        // Basic while loop\n        int i = 1;\n        while (i <= 5) {\n            System.out.println(\"Count: \" + i);\n            i++;\n        }\n        // Output: 1, 2, 3, 4, 5\n\n        // User input simulation: keep asking until valid\n        // (using counter to simulate user input)\n        int attempts = 0;\n        int maxAttempts = 3;\n        boolean loggedIn = false;\n\n        while (attempts < maxAttempts && !loggedIn) {\n            attempts++;\n            System.out.println(\"Attempt \" + attempts + \": Checking PIN...\");\n            if (attempts == 2) { // Simulate correct PIN on attempt 2\n                loggedIn = true;\n            }\n        }\n\n        System.out.println(loggedIn ? \"Login Success ✅\" : \"Account Locked ❌\");\n\n        // Reverse while loop\n        int n = 5;\n        while (n >= 1) {\n            System.out.print(n + \" \");\n            n--;\n        }\n        // Output: 5 4 3 2 1\n    }\n}",
            "quiz": [
                {
                    "question": "What is a 'Pre-condition' loop? Give an example.",
                    "answer": "A loop where the condition is checked before the body executes (e.g., while loop).",
                    "options": [
                        "Do-While",
                        "While",
                        "For",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "How many times will a while loop run if the condition is false from start?",
                    "answer": "Zero times.",
                    "options": [
                        "1",
                        "0",
                        "Infinite",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Can you declare a variable inside the while condition parentheses?",
                    "answer": "No, you must declare it before the loop.",
                    "options": [
                        "Yes",
                        "No",
                        "Only if static",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Explain the importance of the 'update expression' (increment/decrement).",
                    "answer": "It changes the loop variable to eventually make the condition false, preventing infinite loops.",
                    "options": [
                        "Speed",
                        "Prevents infinite loop",
                        "Memory",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is a 'Sentinel Value' in a while loop?",
                    "answer": "A special value used to terminate the loop (e.g., -1 to exit).",
                    "options": [
                        "Start value",
                        "Termination value",
                        "Increment",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is the primary difference between while and do-while loop?",
                    "answer": "while checks condition first (0 or more executions). do-while checks condition after (at least 1 execution guaranteed).",
                    "options": [
                        "while is faster",
                        "do-while executes at least once regardless of condition",
                        "while executes at least once",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is an infinite loop and how can we prevent it?",
                    "answer": "A loop that never meets its exit criteria. Prevented by ensuring the loop control variable is modified correctly towards the condition.",
                    "options": [
                        "A loop with no code",
                        "Loop with never-ending exit condition; fixed by updating loop control variables",
                        "Saves CPU cycles",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "How do break and continue statements differ?",
                    "answer": "break terminates the entire loop. continue skips the remaining code in current iteration and moves to next step.",
                    "options": [
                        "break skips iteration; continue terminates",
                        "break terminates loop; continue skips remaining iteration logic",
                        "Both terminate loop",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What are loop labels and how do they work with break/continue?",
                    "answer": "Labels identify nested loop blocks, allowing break or continue statements to target outer loops directly.",
                    "options": [
                        "Used for printing text",
                        "Identifies loop levels to let break/continue control outer loops",
                        "Normal comments",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Can we modify the index variable inside the block of a standard for loop?",
                    "answer": "Yes, you can modify it, but it changes the loop path and is generally considered bad practice as it causes bugs.",
                    "options": [
                        "No, it is constant",
                        "Yes, but changes execution control and is bad practice",
                        "Only in while loops",
                        "None"
                    ],
                    "correctIndex": 1
                }
            ]
        }
    },
    {
        "id": 32,
        "title": "EP 32 – Do While Loop in Java | Why It Exists + Real Life Example 🔥",
        "youtubeId": "IJnotbUSbfI",
        "thumbnail": "/Thumbnail/ep-32-do-while-loop-java.png",
        "tags": [
            "Java",
            "Loops"
        ],
        "notes": {
            "intro": "Do-while = exit-controlled loop। Body पहले execute होती है, condition बाद में check होती है। Guaranteed minimum ONE execution — even if condition is false!",
            "topics": [
                "📋 Syntax: do { // body } while (condition);",
                "✅ Post-condition: condition checked AFTER each run",
                "🎯 Key difference: body executes at LEAST ONCE even if condition false",
                "🏧 ATM analogy: Show menu first, THEN check if user wants to continue",
                "🔄 Use when: you must run code once before checking to continue"
            ],
            "code": "public class DoWhileDemo {\n    public static void main(String[] args) {\n\n        // Basic do-while\n        int i = 1;\n        do {\n            System.out.println(\"Count: \" + i);\n            i++;\n        } while (i <= 5);\n        // Output: 1, 2, 3, 4, 5\n\n        // Key difference: runs even when condition is false!\n        int x = 100;\n        do {\n            System.out.println(\"This runs ONCE even though x > 5\");\n        } while (x <= 5);  // false! But body already ran once\n\n        // ATM Menu simulation (classic do-while use case)\n        int choice;\n        int balance = 10000;\n        int menuShown = 0;\n\n        do {\n            menuShown++;\n            System.out.println(\"\\n=== ATM MENU (Show #\" + menuShown + \") ===\");\n            System.out.println(\"1. Check Balance\");\n            System.out.println(\"2. Withdraw\");\n            System.out.println(\"3. Exit\");\n\n            choice = menuShown; // Simulate user choosing options\n            if (choice == 1) {\n                System.out.println(\"Balance: ₹\" + balance);\n            }\n        } while (choice != 3 && menuShown < 3); // Loop until Exit or 3 attempts\n    }\n}",
            "quiz": [
                {
                    "question": "What is an 'Exit-controlled' loop? Explain with do-while.",
                    "answer": "It's a loop where the condition is checked AFTER the body runs. It ensures the code runs at least once regardless of the condition.",
                    "options": [
                        "While",
                        "Do-While",
                        "For",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Guaranteed minimum execution count of do-while loop.",
                    "answer": "At least 1 time.",
                    "options": [
                        "0",
                        "1",
                        "Infinite",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Why is do-while preferred for Menu-driven programs?",
                    "answer": "Because you need to display the menu to the user at least once before they can decide to exit.",
                    "options": [
                        "Speed",
                        "Menu display",
                        "Memory",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Where is the semicolon placed in a do-while syntax?",
                    "answer": "A semicolon is required immediately after the while condition at the very end: do { ... } while(cond);",
                    "options": [
                        "After do",
                        "After while",
                        "After body",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "How is a do-while different from a standard while loop in flowcharts?",
                    "answer": "The decision diamond comes AFTER the processing box in do-while, and BEFORE it in a standard while loop.",
                    "options": [
                        "Diamond position",
                        "Speed",
                        "Memory",
                        "None"
                    ],
                    "correctIndex": 0
                },
                {
                    "question": "What is the primary difference between while and do-while loop?",
                    "answer": "while checks condition first (0 or more executions). do-while checks condition after (at least 1 execution guaranteed).",
                    "options": [
                        "while is faster",
                        "do-while executes at least once regardless of condition",
                        "while executes at least once",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is an infinite loop and how can we prevent it?",
                    "answer": "A loop that never meets its exit criteria. Prevented by ensuring the loop control variable is modified correctly towards the condition.",
                    "options": [
                        "A loop with no code",
                        "Loop with never-ending exit condition; fixed by updating loop control variables",
                        "Saves CPU cycles",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "How do break and continue statements differ?",
                    "answer": "break terminates the entire loop. continue skips the remaining code in current iteration and moves to next step.",
                    "options": [
                        "break skips iteration; continue terminates",
                        "break terminates loop; continue skips remaining iteration logic",
                        "Both terminate loop",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What are loop labels and how do they work with break/continue?",
                    "answer": "Labels identify nested loop blocks, allowing break or continue statements to target outer loops directly.",
                    "options": [
                        "Used for printing text",
                        "Identifies loop levels to let break/continue control outer loops",
                        "Normal comments",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Can we modify the index variable inside the block of a standard for loop?",
                    "answer": "Yes, you can modify it, but it changes the loop path and is generally considered bad practice as it causes bugs.",
                    "options": [
                        "No, it is constant",
                        "Yes, but changes execution control and is bad practice",
                        "Only in while loops",
                        "None"
                    ],
                    "correctIndex": 1
                }
            ]
        }
    },
    {
        "id": 33,
        "title": "EP 33 – For Loop in Java | You're Using Loops WRONG 😳",
        "youtubeId": "xQmsxjF7XP8",
        "thumbnail": "/Thumbnail/ep-33-for-loop-wrong-java.png",
        "tags": [
            "Java",
            "Loops"
        ],
        "notes": {
            "intro": "For loop = most compact loop। जब iterations की संख्या पहले से पता हो तब for loop use karo. initialization, condition, aur update teeno ek line mein!",
            "topics": [
                "📋 Syntax: for (init; condition; update) { body }",
                "🎯 Best when: number of iterations KNOWN beforehand",
                "⚡ Most compact: all 3 parts in one line",
                "🔄 Variable scope: loop variable lives only inside the loop",
                "📊 Common patterns: 1 to n, n to 1, step by 2s, even/odd filtering"
            ],
            "code": "public class ForLoopDemo {\n    public static void main(String[] args) {\n\n        // Basic for loop: 1 to 10\n        for (int i = 1; i <= 10; i++) {\n            System.out.print(i + \" \");\n        }\n        System.out.println(); // New line\n\n        // Reverse: 10 to 1\n        for (int i = 10; i >= 1; i--) {\n            System.out.print(i + \" \");\n        }\n        System.out.println();\n\n        // Step by 2: Even numbers\n        System.out.println(\"Even numbers:\");\n        for (int i = 2; i <= 20; i += 2) {\n            System.out.print(i + \" \");\n        }\n        System.out.println();\n\n        // Sum of 1 to N\n        int sum = 0;\n        for (int i = 1; i <= 100; i++) {\n            sum += i;\n        }\n        System.out.println(\"Sum 1-100: \" + sum); // 5050\n\n        // Multiplication table\n        int n = 5;\n        System.out.println(\"Table of \" + n + \":\");\n        for (int i = 1; i <= 10; i++) {\n            System.out.println(n + \" × \" + i + \" = \" + (n * i));\n        }\n    }\n}",
            "quiz": [
                {
                    "question": "Mention 3 parts of a For Loop signature.",
                    "answer": "1. Initialization, 2. Condition, and 3. Increment/Decrement.",
                    "options": [
                        "Init, Cond, Update",
                        "Init, Body, Update",
                        "Cond, Body, Update",
                        "None"
                    ],
                    "correctIndex": 0
                },
                {
                    "question": "Is it possible to leave any part of the For signature empty? (e.g. for(;;))",
                    "answer": "Yes, for(;;) is a valid infinite loop. All parts are optional, though the semicolons are mandatory.",
                    "options": [
                        "Yes",
                        "No",
                        "Only if static",
                        "None"
                    ],
                    "correctIndex": 0
                },
                {
                    "question": "What is the 'Scope' of the variable 'i' declared inside 'for(int i...)'?",
                    "answer": "It is only available within the loop itself. Once the loop finishes, 'i' is removed from memory.",
                    "options": [
                        "Global",
                        "Local to loop",
                        "Class",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Difference between i++ and ++i inside the For update expression.",
                    "answer": "Technically none. In a for-loop update, the increment happens in isolation, so both increase i by 1 for the next check.",
                    "options": [
                        "Speed",
                        "None",
                        "Memory",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "When should you choose 'For' over 'While' loop?",
                    "answer": "Choose 'For' when the number of iterations is known. Choose 'While' when you are waiting for a specific event or condition to change.",
                    "options": [
                        "Always",
                        "Known iterations",
                        "Never",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is the primary difference between while and do-while loop?",
                    "answer": "while checks condition first (0 or more executions). do-while checks condition after (at least 1 execution guaranteed).",
                    "options": [
                        "while is faster",
                        "do-while executes at least once regardless of condition",
                        "while executes at least once",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is an infinite loop and how can we prevent it?",
                    "answer": "A loop that never meets its exit criteria. Prevented by ensuring the loop control variable is modified correctly towards the condition.",
                    "options": [
                        "A loop with no code",
                        "Loop with never-ending exit condition; fixed by updating loop control variables",
                        "Saves CPU cycles",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "How do break and continue statements differ?",
                    "answer": "break terminates the entire loop. continue skips the remaining code in current iteration and moves to next step.",
                    "options": [
                        "break skips iteration; continue terminates",
                        "break terminates loop; continue skips remaining iteration logic",
                        "Both terminate loop",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What are loop labels and how do they work with break/continue?",
                    "answer": "Labels identify nested loop blocks, allowing break or continue statements to target outer loops directly.",
                    "options": [
                        "Used for printing text",
                        "Identifies loop levels to let break/continue control outer loops",
                        "Normal comments",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Can we modify the index variable inside the block of a standard for loop?",
                    "answer": "Yes, you can modify it, but it changes the loop path and is generally considered bad practice as it causes bugs.",
                    "options": [
                        "No, it is constant",
                        "Yes, but changes execution control and is bad practice",
                        "Only in while loops",
                        "None"
                    ],
                    "correctIndex": 1
                }
            ]
        }
    },
    {
        "id": 34,
        "title": "EP 34 – Nested For Loop in Java | Complete Tutorial with Examples",
        "youtubeId": "BgOCdxjnJIk",
        "thumbnail": "/Thumbnail/ep-34-Nested For Loop in Java  Complete Tutorial with Examples.png",
        "tags": [
            "Java",
            "Loops"
        ],
        "notes": {
            "intro": "Nested loops = loop के अंदर loop। Inner loop outer loop के हर iteration पर completely run होता है। Matrix, 2D patterns, grid systems — all use nested loops.",
            "topics": [
                "🔄 Outer loop controls ROWS, inner loop controls COLUMNS",
                "⚡ Time complexity: O(n²) for nested — think carefully!",
                "📐 Matrix printing: nested loop standard pattern",
                "⭐ Basic star pattern: right-angle triangle",
                "🧮 Multiplication table: classic nested loop use case"
            ],
            "code": "public class NestedLoopDemo {\n    public static void main(String[] args) {\n\n        // Matrix printing (3×4)\n        System.out.println(\"Matrix:\");\n        for (int row = 1; row <= 3; row++) {\n            for (int col = 1; col <= 4; col++) {\n                System.out.print(\"[\" + row + \",\" + col + \"] \");\n            }\n            System.out.println(); // New row\n        }\n\n        // Basic Star Pattern (Right-angle triangle)\n        System.out.println(\"\\nStar Pattern:\");\n        for (int i = 1; i <= 5; i++) {\n            for (int j = 1; j <= i; j++) {\n                System.out.print(\"* \");\n            }\n            System.out.println();\n        }\n    }\n}",
            "quiz": [
                {
                    "question": "Inner vs Outer loop: which one finishes its iterations first?",
                    "answer": "The Inner loop finishes all its iterations for every single iteration of the Outer loop.",
                    "options": [
                        "Outer",
                        "Inner",
                        "Both",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "How many times does the inner loop run if outer=5 and inner=10?",
                    "answer": "50 times (5 * 10).",
                    "options": [
                        "5",
                        "10",
                        "50",
                        "None"
                    ],
                    "correctIndex": 2
                },
                {
                    "question": "Pattern for printing a 5x5 Square of stars.",
                    "answer": "Two nested loops, both running from 1 to 5.",
                    "options": [
                        "One loop",
                        "Two nested loops",
                        "Three loops",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is the Time Complexity of a nested loop (i, j)?",
                    "answer": "O(n²).",
                    "options": [
                        "O(n)",
                        "O(n²)",
                        "O(1)",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "How to skip one iteration of the inner loop and continue the outer loop?",
                    "answer": "Use a labeled 'continue' statement.",
                    "options": [
                        "break",
                        "continue",
                        "return",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is the primary difference between while and do-while loop?",
                    "answer": "while checks condition first (0 or more executions). do-while checks condition after (at least 1 execution guaranteed).",
                    "options": [
                        "while is faster",
                        "do-while executes at least once regardless of condition",
                        "while executes at least once",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is an infinite loop and how can we prevent it?",
                    "answer": "A loop that never meets its exit criteria. Prevented by ensuring the loop control variable is modified correctly towards the condition.",
                    "options": [
                        "A loop with no code",
                        "Loop with never-ending exit condition; fixed by updating loop control variables",
                        "Saves CPU cycles",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "How do break and continue statements differ?",
                    "answer": "break terminates the entire loop. continue skips the remaining code in current iteration and moves to next step.",
                    "options": [
                        "break skips iteration; continue terminates",
                        "break terminates loop; continue skips remaining iteration logic",
                        "Both terminate loop",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What are loop labels and how do they work with break/continue?",
                    "answer": "Labels identify nested loop blocks, allowing break or continue statements to target outer loops directly.",
                    "options": [
                        "Used for printing text",
                        "Identifies loop levels to let break/continue control outer loops",
                        "Normal comments",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Can we modify the index variable inside the block of a standard for loop?",
                    "answer": "Yes, you can modify it, but it changes the loop path and is generally considered bad practice as it causes bugs.",
                    "options": [
                        "No, it is constant",
                        "Yes, but changes execution control and is bad practice",
                        "Only in while loops",
                        "None"
                    ],
                    "correctIndex": 1
                }
            ]
        }
    },
    {
        "id": 35,
        "title": "EP 35 – ATM Machine Project in Java 💳 | Java Full Course",
        "youtubeId": "WQz4v5ZERJE",
        "thumbnail": "/Thumbnail/ep-35-Can a Beginner Build an ATM in Java Yes — And So Can You 💳  Java Full Course.png",
        "tags": [
            "Java",
            "Project"
        ],
        "notes": {
            "intro": "The ultimate loop + conditionals project! ATM simulation with PIN verification (3 attempts using do-while), menu navigation (switch), and balance management (static variable).",
            "topics": [
                "🏧 Project: ATM System combining ALL concepts learned so far",
                "🔐 PIN Verification: do-while loop with 3 attempt counter",
                "📋 Menu Navigation: switch statement for 4 options",
                "💰 Balance: static variable (shared across sessions)",
                "♾️ Loop until Exit: while(true) + break on choice 4"
            ],
            "code": "public class ATMSystem {\n\n    static double balance = 10000.00;\n    static int correctPin = 1234;\n\n    public static void main(String[] args) {\n\n        // PIN Verification using do-while (3 attempts)\n        int attempts = 0;\n        boolean isVerified = false;\n\n        do {\n            int enteredPin = 1234; // Simulated correct pin\n            attempts++;\n\n            if (enteredPin == correctPin) {\n                isVerified = true;\n                System.out.println(\"✅ PIN Verified! Welcome!\");\n            } else {\n                System.out.println(\"❌ Wrong PIN. Attempt \" + attempts + \"/3\");\n            }\n        } while (!isVerified && attempts < 3);\n\n        if (!isVerified) {\n            System.out.println(\"🔒 Account Locked!\");\n            return; // Exit program\n        }\n\n        // Menu using while + switch\n        int choice = 0;\n        while (choice != 4) {\n            System.out.println(\"\\n=== ATM MENU ===\");\n            System.out.println(\"1. Check Balance\");\n            System.out.println(\"2. Deposit\");\n            System.out.println(\"3. Withdraw\");\n            System.out.println(\"4. Exit\");\n\n            choice = 1; // Simulate user choice\n            switch (choice) {\n                case 1 -> System.out.printf(\"Balance: ₹%.2f%n\", balance);\n                case 2 -> { balance += 5000; System.out.println(\"Deposited ₹5000\"); }\n                case 3 -> {\n                    double amt = 2000;\n                    if (balance >= amt) { balance -= amt; System.out.println(\"Withdrawn ₹\" + amt); }\n                    else System.out.println(\"Insufficient balance!\");\n                }\n                case 4 -> System.out.println(\"Thank you! Visit again 🙏\");\n                default -> System.out.println(\"Invalid choice!\");\n            }\n            break; // Break simulation loop\n        }\n    }\n}",
            "quiz": [
                {
                    "question": "Why is 'Static' balance used in the ATM project?",
                    "answer": "To ensure the balance persists across different method calls or sessions within the class.",
                    "options": [
                        "Speed",
                        "Persistence",
                        "Memory",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Logic for '3 attempts PIN verification' in do-while.",
                    "answer": "Use a counter variable and loop while (attempts < 3 && !isVerified).",
                    "options": [
                        "For loop",
                        "Do-while with counter",
                        "If-else",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "How to clear the console screen/input in Java? (Conceptual)",
                    "answer": "There is no built-in Java command; usually done by printing many newlines or using OS-specific commands.",
                    "options": [
                        "System.clear()",
                        "Newlines",
                        "Delete",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "How to loop the ATM menu until user selects 'Exit'?",
                    "answer": "Use a while(choice != 4) loop.",
                    "options": [
                        "For",
                        "While",
                        "If",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Which conditional structure is best for ATM menu options?",
                    "answer": "Switch statement, as it handles discrete menu choices cleanly.",
                    "options": [
                        "If-Else",
                        "Switch",
                        "Ternary",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is the primary difference between while and do-while loop?",
                    "answer": "while checks condition first (0 or more executions). do-while checks condition after (at least 1 execution guaranteed).",
                    "options": [
                        "while is faster",
                        "do-while executes at least once regardless of condition",
                        "while executes at least once",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is an infinite loop and how can we prevent it?",
                    "answer": "A loop that never meets its exit criteria. Prevented by ensuring the loop control variable is modified correctly towards the condition.",
                    "options": [
                        "A loop with no code",
                        "Loop with never-ending exit condition; fixed by updating loop control variables",
                        "Saves CPU cycles",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "How do break and continue statements differ?",
                    "answer": "break terminates the entire loop. continue skips the remaining code in current iteration and moves to next step.",
                    "options": [
                        "break skips iteration; continue terminates",
                        "break terminates loop; continue skips remaining iteration logic",
                        "Both terminate loop",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What are loop labels and how do they work with break/continue?",
                    "answer": "Labels identify nested loop blocks, allowing break or continue statements to target outer loops directly.",
                    "options": [
                        "Used for printing text",
                        "Identifies loop levels to let break/continue control outer loops",
                        "Normal comments",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Can we modify the index variable inside the block of a standard for loop?",
                    "answer": "Yes, you can modify it, but it changes the loop path and is generally considered bad practice as it causes bugs.",
                    "options": [
                        "No, it is constant",
                        "Yes, but changes execution control and is bad practice",
                        "Only in while loops",
                        "None"
                    ],
                    "correctIndex": 1
                }
            ]
        }
    },
    {
        "id": 36,
        "title": "EP 36 – Don't Start Pattern Programming ❌ Watch This First",
        "youtubeId": "OQ8-_LNw8M4",
        "thumbnail": "/Thumbnail/ep-36-Don't Start Pattern Programming ❌ Watch This First.png",
        "tags": [
            "Java",
            "Patterns"
        ],
        "notes": {
            "intro": "Pattern programming शुरू करने से पहले सही approach समझो! Most students fail because they try to memorize patterns. The right way: understand the row-column relationship.",
            "topics": [
                "🧠 Pattern Mindset: Think in terms of row (i) and column (j) relationship",
                "📐 Identify: What is printed at position (i, j)?",
                "⭐ Type 1: Right angle triangle — j goes from 1 to i",
                "🔢 Type 2: Number patterns — print i or j at (i,j)",
                "🔄 Type 3: Inverted patterns — inner loop decreases as outer increases"
            ],
            "code": "public class PatternIntro {\n    public static void main(String[] args) {\n        int n = 5;\n\n        // Pattern 1: Right angle star triangle\n        System.out.println(\"Pattern 1:\");\n        for (int i = 1; i <= n; i++) {\n            for (int j = 1; j <= i; j++) {\n                System.out.print(\"* \");\n            }\n            System.out.println();\n        }\n\n        // Pattern 2: Number triangle\n        System.out.println(\"\\nPattern 2:\");\n        for (int i = 1; i <= n; i++) {\n            for (int j = 1; j <= i; j++) {\n                System.out.print(j + \" \");  // Print column number\n            }\n            System.out.println();\n        }\n    }\n}",
            "quiz": [
                {
                    "question": "How many loops are required to print a 2D pattern?",
                    "answer": "At least two nested loops: an Outer loop for rows and an Inner loop for columns.",
                    "options": [
                        "One loop",
                        "Two nested loops",
                        "Three loops",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Outer loop (i) usually represents which dimension (Row/Column)?",
                    "answer": "The Outer loop (i) represents the Rows (vertical dimension).",
                    "options": [
                        "Columns",
                        "Rows",
                        "Diagonal",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What does 'System.out.println()' do after the inner loop finishes?",
                    "answer": "It moves the cursor to a new line, effectively starting a new Row in the output pattern.",
                    "options": [
                        "Prints stars",
                        "Starts new row",
                        "Deletes line",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Logic for printing an Inverted Right-Angle Triangle.",
                    "answer": "The inner loop (j) should decrease as the outer loop (i) increases, or j should run from N down to i.",
                    "options": [
                        "Double loops",
                        "Inner decreases",
                        "No loops",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is the primary difference between while and do-while loop?",
                    "answer": "while checks condition first (0 or more executions). do-while checks condition after (at least 1 execution guaranteed).",
                    "options": [
                        "while is faster",
                        "do-while executes at least once regardless of condition",
                        "while executes at least once",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is an infinite loop and how can we prevent it?",
                    "answer": "A loop that never meets its exit criteria. Prevented by ensuring the loop control variable is modified correctly towards the condition.",
                    "options": [
                        "A loop with no code",
                        "Loop with never-ending exit condition; fixed by updating loop control variables",
                        "Saves CPU cycles",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "How do break and continue statements differ?",
                    "answer": "break terminates the entire loop. continue skips the remaining code in current iteration and moves to next step.",
                    "options": [
                        "break skips iteration; continue terminates",
                        "break terminates loop; continue skips remaining iteration logic",
                        "Both terminate loop",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What are loop labels and how do they work with break/continue?",
                    "answer": "Labels identify nested loop blocks, allowing break or continue statements to target outer loops directly.",
                    "options": [
                        "Used for printing text",
                        "Identifies loop levels to let break/continue control outer loops",
                        "Normal comments",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Can we modify the index variable inside the block of a standard for loop?",
                    "answer": "Yes, you can modify it, but it changes the loop path and is generally considered bad practice as it causes bugs.",
                    "options": [
                        "No, it is constant",
                        "Yes, but changes execution control and is bad practice",
                        "Only in while loops",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is scope of initialization variable declared inside 'for (int i=0; ...)'?",
                    "answer": "The scope of variable 'i' is local to that specific loop block only, and it is destroyed once loop terminates.",
                    "options": [
                        "Global to class",
                        "Local to that loop block only",
                        "Local to the main method",
                        "None"
                    ],
                    "correctIndex": 1
                }
            ]
        }
    },
    {
        "id": 37,
        "title": "EP 37 – Need of OOPs in Java 🔥 | POP vs OOP | Why OOPs?",
        "youtubeId": "Nfk5RzuZLRw",
        "thumbnail": "https://img.youtube.com/vi/Nfk5RzuZLRw/maxresdefault.jpg",
        "tags": [
            "Java",
            "OOPs"
        ],
        "notes": {
            "intro": "OOPs का जन्म — 🔥 The most important turning point in your programming career! POP (Procedural Oriented Programming) में Data global tha, koi bhi function bina permission ke access kar sakta tha. OOPs ne Data aur Functions ko ek saath bind kiya — giving us security, structure, and real-world mapping.",
            "topics": [
                "🔓 POP Problem #1: No Data Security — Global data accessible by ANY function",
                "🚫 POP Problem #2: No Reusability — Copy-paste led to duplicate code and bugs",
                "🌍 POP Problem #3: No Real-World Mapping — Data and functions were disconnected",
                "📜 POP Problem #4: Large Code Chaos — Extremely lengthy and unreadable",
                "🔧 POP Problem #5: Maintenance Nightmare — impossible to understand later",
                "🏗️ Class = Blueprint, Object = Real-world entity"
            ],
            "code": "// ✅ OOP APPROACH — The Solution (OopSolution.java)\nclass Student {\n    private String name;\n    private int age;\n    private int marks;\n\n    public Student(String name, int age, int marks) {\n        this.name = name;\n        this.age = age;\n        this.marks = marks;\n    }\n\n    public void displayInfo() {\n        System.out.println(\"📋 Name: \" + name);\n        System.out.println(\"   Age: \" + age + \" | Marks: \" + marks);\n    }\n}\n\npublic class OopSolution {\n    public static void main(String[] args) {\n        Student s1 = new Student(\"Vinay\", 20, 85);\n        s1.displayInfo();\n    }\n}",
            "quiz": [
                {
                    "question": "Explain the major flaw in POP (Procedural Programming).",
                    "answer": "Global Data exposure — any function can modify data without permission, leading to security flaws and bugs.",
                    "options": [
                        "Fast speed",
                        "Global Data exposure",
                        "Too few variables",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What are the 4 Pillars of OOP? Name them.",
                    "answer": "Encapsulation, Inheritance, Polymorphism, and Abstraction.",
                    "options": [
                        "If, For, While",
                        "4 Pillars (Enc/Inher/Poly/Abs)",
                        "Classes & Objects",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "How does OOP ensure data security (Encapsulation)?",
                    "answer": "By making class variables 'private' and providing 'public' getter/setter methods to control access.",
                    "options": [
                        "Using passwords",
                        "Encapsulation (Private fields)",
                        "Deleting data",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Difference between Class (Blueprint) and Object (Physical Entity).",
                    "answer": "A Class is a logical template (no memory taken); an Object is a real-world instance created from that template (memory allocated in Heap).",
                    "options": [
                        "Class=Real, Object=Design",
                        "Class=Design, Object=Real",
                        "Both same",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is constructor chaining and how is it achieved?",
                    "answer": "Constructor chaining is calling one constructor from another (same class via this(), parent via super()). Must be the first statement.",
                    "options": [
                        "Calling multiple methods",
                        "Calling one constructor from another via this() or super() as first statement",
                        "Linking objects",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is static block in Java and when does it run?",
                    "answer": "Static block is used for static variable initialization. It runs once when JVM loads the class into memory, before main() starts.",
                    "options": [
                        "Runs during object creation",
                        "Runs once when class is loaded into JVM memory before main() starts",
                        "Runs after constructor",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Difference between Heap and Stack memory in Java?",
                    "answer": "Stack stores local variables and method calls (fast, temporary). Heap stores all objects and instance variables (slow, garbage collected).",
                    "options": [
                        "Stack stores objects",
                        "Stack stores local variables; Heap stores objects",
                        "Heap stores local variables",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Can static methods access non-static class fields directly?",
                    "answer": "No, static methods belong to class loading phase. Non-static fields require an instantiated object context to exist.",
                    "options": [
                        "Yes, always",
                        "No, they require object context to resolve non-static fields",
                        "Only if public",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is default constructor and when does the compiler add it?",
                    "answer": "The compiler adds a no-argument default constructor only if the developer has written NO constructors in the class.",
                    "options": [
                        "Compiler always adds it",
                        "No-arg constructor added only if developer writes NO constructors",
                        "User-defined constructor",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is copy constructor and what does it prevent?",
                    "answer": "Copy constructor creates a new object by copying values from an existing object. It prevents reference sharing of fields.",
                    "options": [
                        "Copying classes",
                        "Creates new object copying fields from existing object to prevent reference sharing",
                        "Saves code",
                        "None"
                    ],
                    "correctIndex": 1
                }
            ]
        }
    },
    {
        "id": 38,
        "title": "EP 38 – Objects, Memory Management & Method Overloading",
        "youtubeId": "T2EJGxuu1yE",
        "thumbnail": "https://img.youtube.com/vi/T2EJGxuu1yE/maxresdefault.jpg",
        "tags": [
            "Java",
            "OOPs",
            "Memory"
        ],
        "notes": {
            "intro": "अगर आपको ऊप्स समझ में नहीं आता तो प्रॉब्लम ऊप्स में नहीं, प्रॉब्लम यह है कि आपको बेसिक चीज़ें ही नहीं पता हैं। 99% स्टूडेंट यहीं स्किप कर देते हैं। इस वीडियो में हम समझेंगे कि ऑब्जेक्ट कैसे बनता है, Memory (Heap vs Stack) कैसे काम करती है और Method Overloading की गहराई क्या है।",
            "topics": [
                "🏗️ How objects are created",
                "🧠 Role of JVM in Object Creation",
                "📦 Heap vs Stack Area",
                "♻️ Garbage Collector",
                "🏛️ Local vs Instance Variables",
                "🎭 Method Overloading"
            ],
            "code": "class Test {\n    int a = 5; \n    String name = \"Vinay\"; \n\n    public void display() {\n        System.out.println(\"Value of a: \" + a);\n        System.out.println(\"Name: \" + name);\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Test obj1 = new Test(); \n        obj1.display();\n    }\n}",
            "quiz": [
                {
                    "question": "What data is stored in the STACK memory area?",
                    "answer": "Method calls, local variables, and reference variables (primitive types and memory addresses).",
                    "options": [
                        "Objects",
                        "Local variables & Method calls",
                        "Classes",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What data is stored in the HEAP memory area?",
                    "answer": "Objects (all non-primitive data) and their instance variables.",
                    "options": [
                        "Local variables",
                        "Objects",
                        "Method calls",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Explain the role of the 'Garbage Collector' in Java.",
                    "answer": "It runs in the background and deletes objects from the HEAP that have no active references, freeing up memory.",
                    "options": [
                        "Deletes files",
                        "Memory management (Unused objects)",
                        "Cleans console",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Difference between Local Variable and Instance Variable in memory.",
                    "answer": "Local lives on the Stack (temporary); Instance lives on the Heap inside the object (persists as long as object exists).",
                    "options": [
                        "Local=Heap, Instance=Stack",
                        "Local=Stack, Instance=Heap",
                        "Both Stack",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is constructor chaining and how is it achieved?",
                    "answer": "Constructor chaining is calling one constructor from another (same class via this(), parent via super()). Must be the first statement.",
                    "options": [
                        "Calling multiple methods",
                        "Calling one constructor from another via this() or super() as first statement",
                        "Linking objects",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is static block in Java and when does it run?",
                    "answer": "Static block is used for static variable initialization. It runs once when JVM loads the class into memory, before main() starts.",
                    "options": [
                        "Runs during object creation",
                        "Runs once when class is loaded into JVM memory before main() starts",
                        "Runs after constructor",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Difference between Heap and Stack memory in Java?",
                    "answer": "Stack stores local variables and method calls (fast, temporary). Heap stores all objects and instance variables (slow, garbage collected).",
                    "options": [
                        "Stack stores objects",
                        "Stack stores local variables; Heap stores objects",
                        "Heap stores local variables",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Can static methods access non-static class fields directly?",
                    "answer": "No, static methods belong to class loading phase. Non-static fields require an instantiated object context to exist.",
                    "options": [
                        "Yes, always",
                        "No, they require object context to resolve non-static fields",
                        "Only if public",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is default constructor and when does the compiler add it?",
                    "answer": "The compiler adds a no-argument default constructor only if the developer has written NO constructors in the class.",
                    "options": [
                        "Compiler always adds it",
                        "No-arg constructor added only if developer writes NO constructors",
                        "User-defined constructor",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is copy constructor and what does it prevent?",
                    "answer": "Copy constructor creates a new object by copying values from an existing object. It prevents reference sharing of fields.",
                    "options": [
                        "Copying classes",
                        "Creates new object copying fields from existing object to prevent reference sharing",
                        "Saves code",
                        "None"
                    ],
                    "correctIndex": 1
                }
            ]
        }
    },
    {
        "id": 39,
        "title": "EP 39 – Constructors in Java 🔥 | Default, Parameterized & Constructor Overloading | Java Full Course 2026 #39",
        "youtubeId": "hJV7qCee03I",
        "thumbnail": "https://img.youtube.com/vi/hJV7qCee03I/maxresdefault.jpg",
        "tags": [
            "Java",
            "OOPs",
            "Constructors"
        ],
        "notes": {
            "intro": "जावा में कंस्ट्रक्टर (Constructor) एक बहुत ही महत्वपूर्ण टॉपिक है। यह गारंटी देता है कि जब भी ऑब्जेक्ट बनेगा, रिक्वायर्ड डाटा पूरा और बिल्कुल सही होगा! बिना कंस्ट्रक्टर के कोड जटिल और बग्स-प्रोन हो सकता है।",
            "topics": [
                "🏗️ 6 Golden Rules of Constructors",
                "🛠️ Default vs No-Args Constructor",
                "📥 Parameterized Constructor & 'this' keyword",
                "🎭 Constructor Overloading - Multiple ways to create objects",
                "🔗 Constructor Chaining using this()",
                "👯 Copy Constructor - Cloning objects",
                "🔐 Private Constructor & Singleton pattern foundations"
            ],
            "code": "// Comprehensive Example: All Types of Constructors\nclass Student {\n    int roll;\n    String name;\n\n    // 1. No-Argument Constructor\n    Student() {\n        this(0, \"Unknown\"); // Calling Type 2 using this() - Chaining\n        System.out.println(\"Default values assigned!\");\n    }\n\n    // 2. Parameterized Constructor\n    Student(int roll, String name) {\n        this.roll = roll;\n        this.name = name;\n    }\n\n    // 3. Copy Constructor\n    Student(Student other) {\n        this.roll = other.roll;\n        this.name = other.name;\n    }\n\n    void display() {\n        System.out.println(\"Student: \" + name + \" | Roll: \" + roll);\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        // Using Parameterized\n        Student s1 = new Student(101, \"Vinay\");\n        s1.display();\n\n        // Using No-Args\n        Student s2 = new Student();\n        s2.display();\n\n        // Using Copy Constructor\n        Student s3 = new Student(s1);\n        s3.display();\n    }\n}",
            "quiz": [
                {
                    "question": "What is the difference between a Constructor and a Method?",
                    "answer": "A Constructor has no return type and shares the same name as the class; it is used only for object initialization.",
                    "options": [
                        "Method has no return",
                        "Constructor has no return & Class name",
                        "Both same",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What happens if you don't write any constructor in your class?",
                    "answer": "The Java compiler automatically inserts a default no-argument constructor during compilation.",
                    "options": [
                        "Compilation error",
                        "Compiler adds default constructor",
                        "Java crashes",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is the use of 'this' keyword in a constructor?",
                    "answer": "To resolve naming conflicts between class instance variables and constructor parameters (e.g., this.name = name).",
                    "options": [
                        "To delete object",
                        "To resolve name conflicts",
                        "To call other classes",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Can we have a Private Constructor? If yes, why?",
                    "answer": "Yes, it's used in the Singleton design pattern to restrict object creation to only one instance managed by the class itself.",
                    "options": [
                        "No",
                        "Yes, for Singleton pattern",
                        "Only if static",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is constructor chaining and how is it achieved?",
                    "answer": "Constructor chaining is calling one constructor from another (same class via this(), parent via super()). Must be the first statement.",
                    "options": [
                        "Calling multiple methods",
                        "Calling one constructor from another via this() or super() as first statement",
                        "Linking objects",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is static block in Java and when does it run?",
                    "answer": "Static block is used for static variable initialization. It runs once when JVM loads the class into memory, before main() starts.",
                    "options": [
                        "Runs during object creation",
                        "Runs once when class is loaded into JVM memory before main() starts",
                        "Runs after constructor",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Difference between Heap and Stack memory in Java?",
                    "answer": "Stack stores local variables and method calls (fast, temporary). Heap stores all objects and instance variables (slow, garbage collected).",
                    "options": [
                        "Stack stores objects",
                        "Stack stores local variables; Heap stores objects",
                        "Heap stores local variables",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Can static methods access non-static class fields directly?",
                    "answer": "No, static methods belong to class loading phase. Non-static fields require an instantiated object context to exist.",
                    "options": [
                        "Yes, always",
                        "No, they require object context to resolve non-static fields",
                        "Only if public",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is default constructor and when does the compiler add it?",
                    "answer": "The compiler adds a no-argument default constructor only if the developer has written NO constructors in the class.",
                    "options": [
                        "Compiler always adds it",
                        "No-arg constructor added only if developer writes NO constructors",
                        "User-defined constructor",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is copy constructor and what does it prevent?",
                    "answer": "Copy constructor creates a new object by copying values from an existing object. It prevents reference sharing of fields.",
                    "options": [
                        "Copying classes",
                        "Creates new object copying fields from existing object to prevent reference sharing",
                        "Saves code",
                        "None"
                    ],
                    "correctIndex": 1
                }
            ]
        }
    },
    {
        "id": 40,
        "title": "EP 40 – Static Keyword Deep Dive | Class Loading, JVM Memory & Static Blocks",
        "youtubeId": "h2OQ4kw43yQ",
        "thumbnail": "https://img.youtube.com/vi/h2OQ4kw43yQ/maxresdefault.jpg",
        "tags": [
            "Java",
            "OOPs",
            "JVM",
            "Static"
        ],
        "notes": {
            "intro": "Static Keyword केवल 'class के लिए' नहीं है, बल्कि इसके पीछे JVM का पूरा Class Loading mechanism काम करता है। आज हम देखेंगे कि Static Variables और Blocks असल में Memory में कैसे और कब जन्म लेते हैं।",
            "topics": [
                "🧠 The 'Behind the Scenes' of Static: Where does it come from?",
                "⚙️ JVM Class Loading Stages: Loading, Linking (Verify, Prepare, Resolve), and Initialization",
                "🏗️ Memory Allocation: Why Static variables are initialized even before main() starts?",
                "⚡ Execution Order: Static Variable → Static Block → Static Method → Instance components",
                "🛠️ Practical Guide: Why and how to use Static Blocks for initialization"
            ],
            "code": "public class StaticDeepDive {\n    // 1. Static Variable (Allocated memory during 'Prepare' stage)\n    static int age;\n    \n    // 2. Static Block (Executed during 'Initialization' stage)\n    static {\n        age = 22;\n        System.out.println(\"1. I am in Static Block (Before Main!)\");\n    }\n\n    public static void main(String[] args) {\n        System.out.println(\"2. I am in Main Method\");\n        System.out.println(\"Age: \" + age);\n        show();\n    }\n\n    // Static Method\n    static void show() {\n        System.out.println(\"3. I am in Static Method\");\n    }\n}\n\n/* \nExecution Flow:\n1. JVM loads class\n2. Memory allocated for 'age' (Prepare stage)\n3. Static block runs (Initialization stage)\n4. JVM calls main() method\n*/",
            "quiz": [
                {
                    "question": "At which stage of Class Loading is memory allocated for static variables?",
                    "answer": "Memory is allocated during the 'Preparation' stage of the Linking process.",
                    "options": [
                        "Loading",
                        "Verification",
                        "Preparation",
                        "Initialization"
                    ],
                    "correctIndex": 2
                },
                {
                    "question": "What is the execution order of static and non-static components?",
                    "answer": "Static variables/blocks run first during class loading, then the main method, followed by non-static components when an object is created.",
                    "options": [
                        "Main first",
                        "Static first",
                        "Instance first",
                        "Random"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Can we initialize static variables inside a constructor?",
                    "answer": "Technically yes, but it's not recommended because constructors run every time an object is created, whereas static variables should be initialized once via Static Blocks.",
                    "options": [
                        "Yes, recommended",
                        "Yes, but not recommended",
                        "No",
                        "Only if public"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What happens during the 'Verification' stage of Class Loading?",
                    "answer": "JVM checks if the Bytecode follows the Java standard structure and hasn't been tampered with.",
                    "options": [
                        "Allocates memory",
                        "Checks code structure",
                        "Runs static blocks",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is constructor chaining and how is it achieved?",
                    "answer": "Constructor chaining is calling one constructor from another (same class via this(), parent via super()). Must be the first statement.",
                    "options": [
                        "Calling multiple methods",
                        "Calling one constructor from another via this() or super() as first statement",
                        "Linking objects",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is static block in Java and when does it run?",
                    "answer": "Static block is used for static variable initialization. It runs once when JVM loads the class into memory, before main() starts.",
                    "options": [
                        "Runs during object creation",
                        "Runs once when class is loaded into JVM memory before main() starts",
                        "Runs after constructor",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Difference between Heap and Stack memory in Java?",
                    "answer": "Stack stores local variables and method calls (fast, temporary). Heap stores all objects and instance variables (slow, garbage collected).",
                    "options": [
                        "Stack stores objects",
                        "Stack stores local variables; Heap stores objects",
                        "Heap stores local variables",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Can static methods access non-static class fields directly?",
                    "answer": "No, static methods belong to class loading phase. Non-static fields require an instantiated object context to exist.",
                    "options": [
                        "Yes, always",
                        "No, they require object context to resolve non-static fields",
                        "Only if public",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is default constructor and when does the compiler add it?",
                    "answer": "The compiler adds a no-argument default constructor only if the developer has written NO constructors in the class.",
                    "options": [
                        "Compiler always adds it",
                        "No-arg constructor added only if developer writes NO constructors",
                        "User-defined constructor",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is copy constructor and what does it prevent?",
                    "answer": "Copy constructor creates a new object by copying values from an existing object. It prevents reference sharing of fields.",
                    "options": [
                        "Copying classes",
                        "Creates new object copying fields from existing object to prevent reference sharing",
                        "Saves code",
                        "None"
                    ],
                    "correctIndex": 1
                }
            ]
        }
    },
    {
        "id": 41,
        "title": "EP 41 – Static Variable से Website का Visitor Counter कैसे बनाएं? | Java Project Hindi",
        "youtubeId": "Sf7BbI1UJHs",
        "thumbnail": "https://img.youtube.com/vi/Sf7BbI1UJHs/maxresdefault.jpg",
        "tags": [
            "Java",
            "OOPs",
            "Static",
            "Project"
        ],
        "notes": {
            "intro": "Static variable का real-world use case: एक Counter! आज हम देखेंगे कि कैसे static field की मदद से एक simple website visitor count system simulate कर सकते हैं।",
            "topics": [
                "📊 Real-world need of tracking global values (Visitor Counter)",
                "🔄 Static Variable vs. Instance Variable memory sharing recap",
                "🏗️ Building the Visitor Counter simulator class in Java",
                "⚡ Understanding object creation increments on static values",
                "⚠️ Limitations of using static variables in real production web servers"
            ],
            "code": "public class VisitorCounter {\n    // Shared count across all instances\n    static int visitorCount = 0;\n\n    // Constructor called every time a new visitor (object) arrives\n    public VisitorCounter() {\n        visitorCount++;\n    }\n\n    public static int getCount() {\n        return visitorCount;\n    }\n\n    public static void main(String[] args) {\n        // Simulate visitors landing on website\n        new VisitorCounter();\n        new VisitorCounter();\n        new VisitorCounter();\n\n        System.out.println(\"Total Visitors: \" + VisitorCounter.getCount()); // Output: 3\n    }\n}",
            "quiz": [
                {
                    "question": "Why does the visitorCount variable increment correctly across multiple objects?",
                    "answer": "Because visitorCount is a static variable, meaning it is shared globally among all instances instead of being unique to each object.",
                    "options": [
                        "Because it is stored in Stack memory",
                        "Because static variables are shared globally among all instances",
                        "Because the JVM resets it on object creation",
                        "Because it is inside a main method"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What happens to the visitorCount if the Java application restarts?",
                    "answer": "Since static variables exist in RAM, restarting the application clears the memory, resetting the counter to 0.",
                    "options": [
                        "It persists in the hard drive",
                        "It resets to 0",
                        "It continues from the last value",
                        "It throws a runtime exception"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "How can we make a visitor counter persist across application restarts in a real web app?",
                    "answer": "By storing the visitor count in a database or a file system instead of volatile RAM memory.",
                    "options": [
                        "Using more static variables",
                        "By keeping the server permanently running",
                        "By storing the count in a database or file system",
                        "By using a static block"
                    ],
                    "correctIndex": 2
                },
                {
                    "question": "What is constructor chaining and how is it achieved?",
                    "answer": "Constructor chaining is calling one constructor from another (same class via this(), parent via super()). Must be the first statement.",
                    "options": [
                        "Calling multiple methods",
                        "Calling one constructor from another via this() or super() as first statement",
                        "Linking objects",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is static block in Java and when does it run?",
                    "answer": "Static block is used for static variable initialization. It runs once when JVM loads the class into memory, before main() starts.",
                    "options": [
                        "Runs during object creation",
                        "Runs once when class is loaded into JVM memory before main() starts",
                        "Runs after constructor",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Difference between Heap and Stack memory in Java?",
                    "answer": "Stack stores local variables and method calls (fast, temporary). Heap stores all objects and instance variables (slow, garbage collected).",
                    "options": [
                        "Stack stores objects",
                        "Stack stores local variables; Heap stores objects",
                        "Heap stores local variables",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Can static methods access non-static class fields directly?",
                    "answer": "No, static methods belong to class loading phase. Non-static fields require an instantiated object context to exist.",
                    "options": [
                        "Yes, always",
                        "No, they require object context to resolve non-static fields",
                        "Only if public",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is default constructor and when does the compiler add it?",
                    "answer": "The compiler adds a no-argument default constructor only if the developer has written NO constructors in the class.",
                    "options": [
                        "Compiler always adds it",
                        "No-arg constructor added only if developer writes NO constructors",
                        "User-defined constructor",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is copy constructor and what does it prevent?",
                    "answer": "Copy constructor creates a new object by copying values from an existing object. It prevents reference sharing of fields.",
                    "options": [
                        "Copying classes",
                        "Creates new object copying fields from existing object to prevent reference sharing",
                        "Saves code",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Why does Java load classes dynamically (lazy loading)?",
                    "answer": "To save JVM memory footprint, loading classes into Metaspace only when they are referenced or instantiated in code.",
                    "options": [
                        "To slow down start",
                        "Loads classes only when referenced to save memory footprint",
                        "Requires manual loading",
                        "None"
                    ],
                    "correctIndex": 1
                }
            ]
        }
    },
    {
        "id": 42,
        "title": "EP 42 – Why Arrays Exist in Java 🤯 | Arrays Explained Internally",
        "youtubeId": "4n8aYTA6gjQ",
        "thumbnail": "https://img.youtube.com/vi/4n8aYTA6gjQ/maxresdefault.jpg",
        "tags": [
            "Java",
            "Arrays",
            "Basics"
        ],
        "notes": {
            "intro": "Java में arrays की आवश्यकता क्यों होती है? जब हमारे पास multiple values store करने की जरूरत होती है, तब separate variables बनाना अव्यवहारिक हो जाता है। Array हमें एक ही variable name के तहत homogeneous elements को store करने की सुविधा देता है।",
            "topics": [
                "❌ The problem of creating multiple separate variables for similar items",
                "📦 What is an Array and why it is a Homogeneous data structure",
                "🧠 Memory-level concept: Contiguous Memory Allocation",
                "⚡ Random Access property: Why access time is constant O(1)",
                "⚠️ Drawbacks of Arrays: Fixed size constraints"
            ],
            "code": "public class ArrayIntroduction {\n    public static void main(String[] args) {\n        // Without arrays, we declare separate variables:\n        int marks1 = 85, marks2 = 90, marks3 = 78;\n        \n        // With arrays, we store them in a single structure:\n        int[] marks = {85, 90, 78};\n        \n        System.out.println(\"First student marks: \" + marks[0]);\n        System.out.println(\"Total students tracked: \" + marks.length);\n    }\n}",
            "quiz": [
                {
                    "question": "Why is accessing any element in an array extremely fast (O(1) time complexity)?",
                    "answer": "Because arrays use contiguous memory allocation, allowing the JVM to calculate any element's memory address instantly using the index.",
                    "options": [
                        "Because arrays are small",
                        "Because of contiguous memory and index-based address calculation",
                        "Because they are stored in Stack",
                        "Because they only hold integers"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What type of elements can an array hold in Java?",
                    "answer": "An array in Java is homogeneous, meaning it can only hold elements of the same data type.",
                    "options": [
                        "Any random mix of types",
                        "Only homogeneous (same type) elements",
                        "Only primitive types",
                        "Only strings"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is a major limitation of Java arrays?",
                    "answer": "Arrays in Java have a fixed size, which must be specified when they are created and cannot be changed later.",
                    "options": [
                        "They are slow",
                        "Their size is fixed and cannot be changed at runtime",
                        "They cannot hold objects",
                        "They take up no memory"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "How is a multidimensional array represented in JVM Heap?",
                    "answer": "Java does not support true matrix memory. A 2D array is represented as an array of reference pointers to separate 1D array objects.",
                    "options": [
                        "Contiguous flat matrix memory block",
                        "An array of reference pointers pointing to separate 1D arrays",
                        "Stored on stack",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is default value of elements in a new initialized float[] or boolean[]?",
                    "answer": "For float[] elements default to 0.0f. For boolean[] elements default to false.",
                    "options": [
                        "null",
                        "0.0f and false",
                        "garbage values",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Can we change length of an array after creation?",
                    "answer": "No, array size is immutable after creation. If dynamic size is needed, we must use ArrayList class instead.",
                    "options": [
                        "Yes, using length property",
                        "No, array length is fixed after allocation",
                        "Only if dynamic",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is difference between standard loop and enhanced loop on arrays?",
                    "answer": "Standard loop gives index access and permits modification. Enhanced loop is read-only and traverses sequentially.",
                    "options": [
                        "No difference",
                        "Standard allows index access and edits; Enhanced is read-only sequential traversal",
                        "Enhanced is faster",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is the length property of an array in Java?",
                    "answer": "It is an final instance variable associated with array object that returns the total element capacity of the array.",
                    "options": [
                        "Method call length()",
                        "Final instance variable returning total capacity",
                        "Dynamic function",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What causes ArrayIndexOutOfBoundsException in Java?",
                    "answer": "Accessing an array index that is negative, or greater than or equal to the array length.",
                    "options": [
                        "Array is empty",
                        "Invalid index request (negative or >= array.length)",
                        "Types mismatch",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Does 'int[] a = new int[5]' allocate memory on Stack or Heap?",
                    "answer": "The reference pointer 'a' is allocated on Stack. The actual array space of 5 integers is allocated on Heap.",
                    "options": [
                        "Entirely on stack",
                        "Entirely on heap",
                        "Reference 'a' on Stack, array body on Heap",
                        "None"
                    ],
                    "correctIndex": 2
                }
            ]
        }
    },
    {
        "id": 43,
        "title": "EP 43 – Array Declaration vs Initialization in Java | Heap & Stack Memory Explained",
        "youtubeId": "ugXrrzobUHs",
        "thumbnail": "https://img.youtube.com/vi/ugXrrzobUHs/maxresdefault.jpg",
        "tags": [
            "Java",
            "Arrays",
            "Memory"
        ],
        "notes": {
            "intro": "Array declare और initialize करने में क्या अंतर है? Stack और Heap memory में arrays कैसे live करते हैं? आज हम code के पीछे की memory-map को गहराई से समझेंगे।",
            "topics": [
                "⚙️ Array Declaration: Creating a reference variable in Stack",
                "🏗️ Array Initialization: Allocating contiguous memory blocks in Heap",
                "🧠 Understanding the role of the 'new' keyword in array memory allocation",
                "❌ The dreaded NullPointerException in uninitialized arrays",
                "🔍 Memory Map: Stack Reference pointing to Heap Array"
            ],
            "code": "public class ArrayMemoryMap {\n    public static void main(String[] args) {\n        // 1. Declaration (Creates reference 'arr' in Stack)\n        int[] arr; \n        \n        // 2. Initialization (Allocates space for 5 integers in Heap)\n        arr = new int[5]; \n        \n        arr[0] = 10;\n        System.out.println(\"Array base address pointer: \" + arr); // Prints class and hashcode\n        System.out.println(\"First element: \" + arr[0]); // Prints 10\n    }\n}",
            "quiz": [
                {
                    "question": "Where does the array reference variable reside in memory?",
                    "answer": "The reference variable (the pointer to the array) resides in Stack memory.",
                    "options": [
                        "Heap memory",
                        "Stack memory",
                        "Method Area",
                        "Garbage Collector"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Where do the actual array elements reside in memory?",
                    "answer": "The actual array block containing all the elements resides in Heap memory.",
                    "options": [
                        "Stack memory",
                        "Heap memory",
                        "CPU cache",
                        "Hard Disk"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is the default value of elements when an 'int[]' is initialized using the 'new' keyword?",
                    "answer": "In Java, primitive numeric array elements are automatically initialized to their default values (which is 0 for int).",
                    "options": [
                        "null",
                        "garbage values",
                        "0",
                        "1"
                    ],
                    "correctIndex": 2
                },
                {
                    "question": "How is a multidimensional array represented in JVM Heap?",
                    "answer": "Java does not support true matrix memory. A 2D array is represented as an array of reference pointers to separate 1D array objects.",
                    "options": [
                        "Contiguous flat matrix memory block",
                        "An array of reference pointers pointing to separate 1D arrays",
                        "Stored on stack",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is default value of elements in a new initialized float[] or boolean[]?",
                    "answer": "For float[] elements default to 0.0f. For boolean[] elements default to false.",
                    "options": [
                        "null",
                        "0.0f and false",
                        "garbage values",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Can we change length of an array after creation?",
                    "answer": "No, array size is immutable after creation. If dynamic size is needed, we must use ArrayList class instead.",
                    "options": [
                        "Yes, using length property",
                        "No, array length is fixed after allocation",
                        "Only if dynamic",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is difference between standard loop and enhanced loop on arrays?",
                    "answer": "Standard loop gives index access and permits modification. Enhanced loop is read-only and traverses sequentially.",
                    "options": [
                        "No difference",
                        "Standard allows index access and edits; Enhanced is read-only sequential traversal",
                        "Enhanced is faster",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is the length property of an array in Java?",
                    "answer": "It is an final instance variable associated with array object that returns the total element capacity of the array.",
                    "options": [
                        "Method call length()",
                        "Final instance variable returning total capacity",
                        "Dynamic function",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What causes ArrayIndexOutOfBoundsException in Java?",
                    "answer": "Accessing an array index that is negative, or greater than or equal to the array length.",
                    "options": [
                        "Array is empty",
                        "Invalid index request (negative or >= array.length)",
                        "Types mismatch",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Does 'int[] a = new int[5]' allocate memory on Stack or Heap?",
                    "answer": "The reference pointer 'a' is allocated on Stack. The actual array space of 5 integers is allocated on Heap.",
                    "options": [
                        "Entirely on stack",
                        "Entirely on heap",
                        "Reference 'a' on Stack, array body on Heap",
                        "None"
                    ],
                    "correctIndex": 2
                }
            ]
        }
    },
    {
        "id": 44,
        "title": "EP 44 – 1D Array in Java | Enhanced For Loop Explained with Examples",
        "youtubeId": "tjsZeGnHva4",
        "thumbnail": "https://img.youtube.com/vi/tjsZeGnHva4/maxresdefault.jpg",
        "tags": [
            "Java",
            "Arrays",
            "Loops"
        ],
        "notes": {
            "intro": "1D arrays को traverse करने के अलग-अलग तरीके। Standard for-loop और modern Enhanced For Loop (for-each) के बीच क्या अंतर है और coding में इसे कब use करना चाहिए।",
            "topics": [
                "🔄 Traversing 1D arrays using standard index-based for loops",
                "✨ Introduction to Enhanced For Loop (For-Each Loop) syntax",
                "⚙️ How Enhanced For Loop works internally without manual indexing",
                "🆚 Standard For vs Enhanced For: Read-only limitations",
                "🛠️ Hands-on coding: Summing array elements and finding maximums"
            ],
            "code": "public class ArrayTraversal {\n    public static void main(String[] args) {\n        int[] numbers = {12, 45, 78, 23, 56};\n        \n        // 1. Standard For Loop (provides index access)\n        System.out.print(\"Standard for: \");\n        for (int i = 0; i < numbers.length; i++) {\n            System.out.print(numbers[i] + \" \");\n        }\n        \n        System.out.println();\n        \n        // 2. Enhanced For Loop (for-each, cleaner syntax)\n        System.out.print(\"Enhanced for: \");\n        for (int num : numbers) {\n            System.out.print(num + \" \");\n        }\n    }\n}",
            "quiz": [
                {
                    "question": "Can you modify elements inside an array using the Enhanced For Loop?",
                    "answer": "No, the Enhanced For Loop is read-only because it operates on a copy of the elements, not direct indices.",
                    "options": [
                        "Yes, absolutely",
                        "No, it is read-only because it operates on a copy of the element",
                        "Only for strings",
                        "Yes, by using index variable inside it"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Which loop is preferred when you need access to the index of elements?",
                    "answer": "The Standard For Loop is preferred because it explicitly provides index variables (like 'i').",
                    "options": [
                        "Enhanced For Loop",
                        "Standard For Loop",
                        "While Loop",
                        "Both same"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What happens if you try to access arr[arr.length] in Java?",
                    "answer": "Since Java arrays are 0-indexed, the highest index is arr.length - 1. Accessing index arr.length throws an ArrayIndexOutOfBoundsException.",
                    "options": [
                        "Returns 0",
                        "Returns null",
                        "Throws ArrayIndexOutOfBoundsException",
                        "Compiles fine, does nothing"
                    ],
                    "correctIndex": 2
                },
                {
                    "question": "How is a multidimensional array represented in JVM Heap?",
                    "answer": "Java does not support true matrix memory. A 2D array is represented as an array of reference pointers to separate 1D array objects.",
                    "options": [
                        "Contiguous flat matrix memory block",
                        "An array of reference pointers pointing to separate 1D arrays",
                        "Stored on stack",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is default value of elements in a new initialized float[] or boolean[]?",
                    "answer": "For float[] elements default to 0.0f. For boolean[] elements default to false.",
                    "options": [
                        "null",
                        "0.0f and false",
                        "garbage values",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Can we change length of an array after creation?",
                    "answer": "No, array size is immutable after creation. If dynamic size is needed, we must use ArrayList class instead.",
                    "options": [
                        "Yes, using length property",
                        "No, array length is fixed after allocation",
                        "Only if dynamic",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is difference between standard loop and enhanced loop on arrays?",
                    "answer": "Standard loop gives index access and permits modification. Enhanced loop is read-only and traverses sequentially.",
                    "options": [
                        "No difference",
                        "Standard allows index access and edits; Enhanced is read-only sequential traversal",
                        "Enhanced is faster",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What is the length property of an array in Java?",
                    "answer": "It is an final instance variable associated with array object that returns the total element capacity of the array.",
                    "options": [
                        "Method call length()",
                        "Final instance variable returning total capacity",
                        "Dynamic function",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "What causes ArrayIndexOutOfBoundsException in Java?",
                    "answer": "Accessing an array index that is negative, or greater than or equal to the array length.",
                    "options": [
                        "Array is empty",
                        "Invalid index request (negative or >= array.length)",
                        "Types mismatch",
                        "None"
                    ],
                    "correctIndex": 1
                },
                {
                    "question": "Does 'int[] a = new int[5]' allocate memory on Stack or Heap?",
                    "answer": "The reference pointer 'a' is allocated on Stack. The actual array space of 5 integers is allocated on Heap.",
                    "options": [
                        "Entirely on stack",
                        "Entirely on heap",
                        "Reference 'a' on Stack, array body on Heap",
                        "None"
                    ],
                    "correctIndex": 2
                }
            ]
        }
    }
];



