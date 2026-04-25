
export const JAVA_EPISODES = [
    {
        id: 1,
        title: "EP 01 – What is Programming? | Introduction to Programming",
        youtubeId: "IvTuFG-lXyw",
        thumbnail: "/Thumbnail/ep-01-programming-introduction-thumbnail.png",
        tags: ["Java", "Basics"],
        notes: {
            intro: "Programming असल में हमारे Computer/Mobile को दिए गए step-by-step instructions का सेट है — जिससे हम किसी भी काम को automatically करवा सकते हैं।",
            topics: [
                "🖥️ What is Programming and why do we need it?",
                "🌍 Real-life use cases: ATM, Swiggy, WhatsApp — all powered by code",
                "🧠 Machine Level vs. High-Level Languages",
                "☕ Introduction to Java & Why it's the industry's top choice",
                "💡 The Age Calculator analogy — understanding input/output",
            ],
            code: `// Basic Example: Giving instruction in Java
public class HelloWorld {
    // Execution starts from main method
    public static void main(String[] args) {
        // Instructing the computer to print a message
        System.out.println("Welcome to the World of Programming!");
    }
}`,
            quiz: [
                { 
                    question: "What is the difference between programming and coding?", 
                    answer: "Coding is the act of writing code in a specific language, while Programming is the broader process of creating a functional software solution including logic, planning, and debugging.",
                    options: ["Programming is broader; Coding is just writing syntax", "Coding is broader; Programming is just writing syntax", "Both are exactly the same thing", "Coding is for machines; Programming is for humans"],
                    correctIndex: 0
                },
                { 
                    question: "What is a compiler and how does it work?", 
                    answer: "A compiler is a translator that converts high-level source code into machine code or bytecode all at once before execution.",
                    options: ["Translates line-by-line", "Translates the whole code at once", "It runs the code directly", "None of the above"],
                    correctIndex: 1
                },
                { 
                    question: "Why is Java called a high-level language?", 
                    answer: "Because it uses human-readable syntax (like English words) and abstracts away the complex details of the computer hardware.",
                    options: ["Because it's very difficult", "Because it uses human-readable syntax", "Because it only runs on high-end PCs", "Because it is closer to binary"],
                    correctIndex: 1
                },
                { 
                    question: "How does the computer understand high-level code?", 
                    answer: "Computers only understand 0 and 1. High-level code is converted into binary (machine code) by a Compiler or Interpreter.",
                    options: ["It understands English directly", "Using a translator (Compiler/Interpreter)", "By connecting to the internet", "By increasing CPU speed"],
                    correctIndex: 1
                },
                { 
                    question: "What is the role of algorithms in programming?", 
                    answer: "An algorithm is a step-by-step procedure or formula for solving a problem, which acts as the logic foundation for your code.",
                    options: ["To make code look pretty", "Step-by-step logic for solving a problem", "To speed up internet", "To store high-quality images"],
                    correctIndex: 1
                },
                { 
                    question: "What are the different types of programming languages?", 
                    answer: "Main types are Low-Level (Machine, Assembly) and High-Level (Java, Python, C++).",
                    options: ["Low-Level and High-Level", "First-Level and Second-Level", "Basic-Level and Advanced-Level", "None of the above"],
                    correctIndex: 0
                },
                { 
                    question: "Can you name 3 real-world devices that use Java?", 
                    answer: "Android Phones, Smart Cards, and Enterprise Banking Servers.",
                    options: ["Calculators, Radio, Fans", "Android Phones, Banking Servers, Smart Cards", "Bulbs, Chairs, Tables", "Pencils, Papers, Pens"],
                    correctIndex: 1
                }
            ],
        }
    },
    {
        id: 2,
        title: "EP 02 – Low Level vs High Level Languages | How Computers Understand Code",
        youtubeId: "nkV2BO3h5J8",
        thumbnail: "/Thumbnail/ep-02-low-vs-high-level-thumbnail.png",
        tags: ["Java", "Theory"],
        notes: {
            intro: "Computer केवल 0 और 1 (Binary) समझता है। High-Level languages जैसे Java को Compiler/Interpreter मशीन-कोड में translate करता है।",
            topics: [
                "🔢 Machine Language (Binary: 0s and 1s) — what the CPU actually runs",
                "📜 Assembly Language — human-readable machine instructions",
                "🌐 High-Level Languages — Java, Python, C++ (human-friendly)",
                "⚙️ Compiler vs Interpreter — how Java uses both (javac + JVM)",
                "🏆 Why Java chose Bytecode — Write Once, Run Anywhere (WORA)",
            ],
            code: `// Java source code (High-Level Language)
public class Main {
    public static void main(String[] args) {
        System.out.println("Compiled to Bytecode, run by JVM!");
    }
}
// javac Main.java  → creates Main.class (Bytecode)
// java Main        → JVM converts Bytecode to Machine Code and runs it`,
            quiz: [
                { 
                    question: "Detailed difference between Compiler and Interpreter?", 
                    answer: "A Compiler translates the whole program at once (Faster execution), while an Interpreter translates line-by-line (Better for debugging).",
                    options: ["Compiler: Line-by-line; Interpreter: Whole", "Compiler: Whole; Interpreter: Line-by-line", "Both are exactly same", "None of the above"],
                    correctIndex: 1
                },
                { 
                    question: "Which one is faster: Compiler or Interpreter? Why?", 
                    answer: "Compiler is faster because it produces an executable machine code file once, which the CPU can run directly without re-translating.",
                    options: ["Interpreter", "Compiler", "Both have same speed", "None"],
                    correctIndex: 1
                },
                { 
                    question: "Define Bytecode in simple terms.", 
                    answer: "Bytecode is a highly optimized set of instructions designed to be executed by the JVM (Java Virtual Machine) rather than the physical CPU.",
                    options: ["Machine Code", "Human Readable Code", "Instruction for JVM", "Binary Code"],
                    correctIndex: 2
                },
                { 
                    question: "Why can't JVM run Java source code (.java) directly?", 
                    answer: ".java files are for humans. Compiling them into .class (Bytecode) makes them optimized and secure for the machine.",
                    options: ["Because .java is for humans", "Because compilers are lazy", "Because JVM only speaks binary", "It can run .java directly"],
                    correctIndex: 0
                },
                { 
                    question: "What is the benefit of translating HLL to Assembly first?", 
                    answer: "It allows for hardware-specific optimizations and helps developers understand how the code interacts with the CPU registers.",
                    options: ["Makes code smaller", "Hardware optimizations", "Makes code multi-colored", "None"],
                    correctIndex: 1
                },
                { 
                    question: "Is Java a purely compiled or purely interpreted language?", 
                    answer: "Java is both! It is compiled into Bytecode (javac) and then interpreted/JIT-compiled by the JVM.",
                    options: ["Purely Compiled", "Purely Interpreted", "Both (Compiled & Interpreted)", "Neither"],
                    correctIndex: 2
                },
                { 
                    question: "What is the file extension of Compiled Java code?", 
                    answer: ".class",
                    options: [".java", ".exe", ".class", ".txt"],
                    correctIndex: 2
                }
            ],
        }
    },
    {
        id: 3,
        title: "EP 03 – Why Java in 2026? | Best Language for Freshers to Learn",
        youtubeId: "xoVVwGZE6gs",
        thumbnail: "/Thumbnail/ep-03-why-java-2026-thumbnail.png",
        tags: ["Java", "Career"],
        notes: {
            intro: "Java 2026 में भी क्यों सीखें? Freshers के लिए यह सबसे समझदार choice क्यों है — Industry demand, salary, और future scope.",
            topics: [
                "💰 Java Developer Salary in India: ₹4L-₹25L+ range",
                "🏦 Used by: Banks, Railways, Amazon, Google, Android",
                "🔒 Java vs Python vs C++: Why Java wins for Enterprise & Backend",
                "🌐 Java's role in: Web Backend, Android, Cloud, AI/ML Integration",
                "📈 Job market: 50,000+ Java job openings in India at any given time",
            ],
            code: `// Java is used everywhere!
// Android Apps → Activity.java (Android SDK)
// Backend APIs → Spring Boot (REST APIs)
// Banking Apps → Enterprise Java (J2EE)
// Big Data → Apache Hadoop (written in Java)`,
            quiz: [
                { 
                    question: "What makes Java better than C++ for large-scale enterprise apps?", 
                    answer: "Java provides automatic memory management (Garbage Collection) and platform independence (JVM), which reduces bugs and deployment costs.",
                    options: ["Pointers", "Automatic Memory Management", "Manual Memory Management", "Smaller binary size"],
                    correctIndex: 1
                },
                { 
                    question: "How is Java relevant in the era of AI and ML?", 
                    answer: "Java is used for the production-side of AI models (Model serving) and big data processing (Hadoop, Spark).",
                    options: ["Not relevant at all", "Used for Big Data & Production Serving", "Only for drawing 2D charts", "None"],
                    correctIndex: 1
                },
                { 
                    question: "Why do banks prefer Java over Python for backend?", 
                    answer: "Java is much faster than Python for heavy computations and provides stronger security features and multithreading support.",
                    options: ["It's easier to learn", "Faster & Stronger Security", "Python is too old", "Python doesn't support math"],
                    correctIndex: 1
                },
                { 
                    question: "What is the average salary range for a Senior Java Dev in India?", 
                    answer: "Typically ₹18L - ₹45L+ depending on skills and the company.",
                    options: ["₹2L - ₹5L", "₹5L - ₹10L", "₹18L - ₹45L", "₹100L+ only"],
                    correctIndex: 2
                },
                { 
                    question: "Name 3 tech giants that heavily rely on Java today.", 
                    answer: "Google, Amazon, and Netflix.",
                    options: ["WhatsApp, Instagram, TikTok", "Google, Amazon, Netflix", "Tesla, SpaceX, Twitter", "None"],
                    correctIndex: 1
                },
                { 
                    question: "Is Java popular for Android development? Why?", 
                    answer: "Yes, it was the original language for Android and millions of apps still rely on it for robustness.",
                    options: ["No", "Yes, original Android language", "Only for iPhone", "Only for PC"],
                    correctIndex: 1
                },
                { 
                    question: "What is 'Modern Java'?", 
                    answer: "It refers to the latest versions (Java 17, 21+) which include features like Records, Sealed Classes, and Virtual Threads.",
                    options: ["Java 8", "Java 1.0", "Java 17/21+", "JavaScript"],
                    correctIndex: 2
                }
            ],
        }
    },
    {
        id: 4,
        title: "EP 04 – How Java Works | JDK → Compiler → Bytecode → JVM",
        youtubeId: "AsMGN3NPSuI",
        thumbnail: "/Thumbnail/ep-04-how-java-works-thumbnail.png",
        tags: ["Java", "Theory"],
        notes: {
            intro: "WhatsApp, Instagram जैसे apps background में कैसे run होते हैं? Java के 3 superheroes: JDK, JRE, और JVM — यही पूरा magic करते हैं!",
            topics: [
                "🦸 JVM (Java Virtual Machine) — converts Bytecode to Machine Code (0,1)",
                "📦 JRE (Java Runtime Environment) — provides Libraries + JVM",
                "🔧 JDK (Java Development Kit) — complete toolkit (JRE + Compiler + Debugger)",
                "⚡ JIT Compiler — speeds up repeated tasks (WhatsApp chat opening example)",
                "🔄 Step-by-step execution: Source Code → javac → Bytecode → JVM → Machine Code",
            ],
            code: `// Step-by-Step Java Execution Flow:
// [1] Write code in IDE (VS Code / IntelliJ)
//     public class Hello { ... }

// [2] Compile with javac:
//     javac Hello.java → Hello.class (Bytecode)

// [3] JVM Inside JRE processes Bytecode:
//     Interpreter: reads line by line
//     JIT Compiler: optimizes repeated code (faster!)

// [4] Final Output: Machine Code runs on your CPU ✅`,
            quiz: [
                { 
                    question: "What is the full form of JDK, JRE, and JVM?", 
                    answer: "JDK: Java Development Kit, JRE: Java Runtime Environment, JVM: Java Virtual Machine.",
                    options: ["Standard definitions", "Custom definitions", "Java Dev Kit, Runtime Env, Virtual Machine", "None"],
                    correctIndex: 2
                },
                { 
                    question: "Can we run a Java program with only JDK installed?", 
                    answer: "Yes, because JDK includes the JRE, which is needed to run programs.",
                    options: ["No", "Yes", "Depends on PC", "Only if Internet is ON"],
                    correctIndex: 1
                },
                { 
                    question: "What happens if JRE is missing but JVM is present?", 
                    answer: "The program won't run because JVM needs JRE's libraries and resources to execute Bytecode.",
                    options: ["Runs normally", "Crashes", "Won't run (missing libs)", "Runs faster"],
                    correctIndex: 2
                },
                { 
                    question: "Where exactly is the JIT compiler located?", 
                    answer: "Inside the JVM. It converts frequently used Bytecode into native machine code at runtime for performance.",
                    options: ["Inside JDK", "Inside JVM", "Inside CPU", "Inside OS"],
                    correctIndex: 1
                },
                { 
                    question: "What is the primary role of the ClassLoader in JVM?", 
                    answer: "It dynamically loads .class files into memory when they are needed by the program.",
                    options: ["To delete files", "To load .class files into memory", "To print logs", "To scan viruses"],
                    correctIndex: 1
                },
                { 
                    question: "Is JVM platform-dependent or independent? Why?", 
                    answer: "JVM is Platform-Dependent (separate for Windows/Mac), but it makes your CODE Platform-Independent.",
                    options: ["Platform Independent", "Platform Dependent", "Both", "None"],
                    correctIndex: 1
                },
                { 
                    question: "What is the relationship between JRE and JDK?", 
                    answer: "JDK = JRE + Development Tools (Compiler, Debugger, etc.).",
                    options: ["JRE = JDK + Tools", "JDK = JRE + Tools", "They are same", "JDK is inside JRE"],
                    correctIndex: 1
                }
            ],
        }
    },
    {
        id: 5,
        title: "EP 05 – Java Features | Why Java is Still Relevant in 2026",
        youtubeId: "PegCLdjGMaE",
        thumbnail: "/Thumbnail/ep-05-java-features-thumbnail.png",
        tags: ["Java", "Theory"],
        notes: {
            intro: "Java 3 billion+ devices पर run करता है। इसके 10 core features जो इसे 2026 में भी सबसे powerful programming language बनाते हैं।",
            topics: [
                "🌐 Platform Independent — Write Once, Run Anywhere (WORA) via JVM",
                "🔒 Secure — No pointer manipulation; ClassLoader, SecurityManager",
                "🏗️ Object Oriented — Encapsulation, Inheritance, Polymorphism, Abstraction",
                "💪 Robust — Strong type checking + Exception Handling + Garbage Collection",
                "🧵 Multithreaded — Run multiple tasks simultaneously (e.g., download + play music)",
                "⚡ High Performance — JIT Compiler makes it near C-speed in execution",
            ],
            code: `// Java Feature Example: Platform Independence
// Same code runs on Windows, Mac, Linux without changes
public class PlatformDemo {
    public static void main(String[] args) {
        System.out.println("OS: " + System.getProperty("os.name"));
        System.out.println("Java runs the same everywhere!");
    }
}`,
            quiz: [
                { 
                    question: "Explain the 'Write Once, Run Anywhere' (WORA) concept.", 
                    answer: "Java code is compiled into Bytecode. Since any OS with a JVM can run this Bytecode, the code is truly portable.",
                    options: ["Code runs on one OS", "Code runs on any OS with JVM", "Code runs on browser", "None"],
                    correctIndex: 1
                },
                { 
                    question: "How does Java ensure high security in its execution?", 
                    answer: "No explicit pointers, ClassLoader isolation, and Security Manager checks.",
                    options: ["Using Pointers", "No Pointers & ClassLoader", "Only via Password", "None"],
                    correctIndex: 1
                },
                { 
                    question: "What is 'Automatic Garbage Collection' in Java?", 
                    answer: "JVM automatically deletes objects from Heap memory that are no longer being used by the program.",
                    options: ["Manual deletion", "JVM deletes unused objects", "OS deletes files", "None"],
                    correctIndex: 1
                },
                { 
                    question: "Is Java a robust language? Explain why.", 
                    answer: "Yes, because it focuses strictly on compile-time error checking and runtime exception handling.",
                    options: ["No", "Yes, due to error checking", "Only for web", "None"],
                    correctIndex: 1
                },
                { 
                    question: "Definition of Multithreading in Java with a real example.", 
                    answer: "Running multiple parts of a program simultaneously, like downloading a file while typing in a chat app.",
                    options: ["Single tasking", "Running multiple tasks at once", "No tasks", "None"],
                    correctIndex: 1
                },
                { 
                    question: "Why doesn't Java support explicit pointers like C++?", 
                    answer: "To prevent direct memory access, which is the main cause of crashes and security vulnerabilities.",
                    options: ["To make it slow", "To prevent memory crashes", "Because it's hard", "None"],
                    correctIndex: 1
                },
                { 
                    question: "Explain the 'Object-Oriented' nature of Java.", 
                    answer: "Everything in Java is centered around 'Objects' which combine Data and Behavior.",
                    options: ["Procedural", "Object-Oriented", "Functional", "None"],
                    correctIndex: 1
                }
            ],
        }
    },
    {
        id: 6,
        title: "EP 06 – Java Setup | Install JDK + VS Code + Run First Program",
        youtubeId: "84n9BAu0FCE",
        thumbnail: "/Thumbnail/ep-06-java-setup-thumbnail.png",
        tags: ["Java", "Setup"],
        notes: {
            intro: "Java coding शुरू करने के लिए आपको proper environment setup करना होगा। यहाँ JDK, VS Code, और Extensions का complete step-by-step guide है।",
            topics: [
                "⬇️ Download JDK 17+ from oracle.com/java/technologies/downloads",
                "🔧 Set JAVA_HOME environment variable + add to PATH",
                "✅ Verify installation: open terminal → type 'java --version'",
                "💻 Install VS Code + Extension Pack for Java (by Microsoft)",
                "✨ Write & Run your very first 'Hello World' program!",
            ],
            code: `// Your First Java Program!
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        System.out.println("Java coding shuru ho gaya! 🚀");
    }
}

// To Run:
// 1. Save as HelloWorld.java
// 2. Terminal: javac HelloWorld.java
// 3. Terminal: java HelloWorld
// Output: Hello, World!`,
            quiz: [
                { 
                    question: "What is the purpose of setting the PATH variable?", 
                    answer: "To allow the terminal to find the 'java' and 'javac' commands from any directory.",
                    options: ["To store files", "To run commands globally", "To delete Java", "None"],
                    correctIndex: 1
                },
                { 
                    question: "Difference between JAVA_HOME and PATH?", 
                    answer: "JAVA_HOME points to the JDK installation folder, while PATH includes the bin folder for command access.",
                    options: ["Same thing", "JAVA_HOME is folder, PATH is for commands", "PATH is folder", "None"],
                    correctIndex: 1
                },
                { 
                    question: "How to check the installed Java version via CMD?", 
                    answer: "java -version",
                    options: ["java --version", "check java", "java -v", "None"],
                    correctIndex: 0
                },
                { 
                    question: "What is the default port for most Java dev servers?", 
                    answer: "8080",
                    options: ["80", "8080", "3000", "443"],
                    correctIndex: 1
                },
                { 
                    question: "Why do we need a separate extension for Java in VS Code?", 
                    answer: "VS Code is a text editor; the extension provides language support, debugging, and build tools.",
                    options: ["For fun", "For language support & debugging", "To make it slow", "None"],
                    correctIndex: 1
                },
                { 
                    question: "What happens internally when you run 'javac HelloWorld.java'?", 
                    answer: "The compiler converts source code into Bytecode (.class file).",
                    options: ["Runs code", "Compiles to Bytecode", "Deletes file", "None"],
                    correctIndex: 1
                },
                { 
                    question: "Can you run a Java program without compiling it first?", 
                    answer: "No, Java requires compilation into Bytecode before the JVM can execute it.",
                    options: ["Yes", "No", "Only in IDE", "None"],
                    correctIndex: 1
                }
            ],
        }
    },
    {
        id: 7,
        title: "EP 07 – From Real World to Code | How Programmers Think",
        youtubeId: "PDiqgM5mMUw",
        thumbnail: "/Thumbnail/ep-07-real-world-to-code-thumbnail.png",
        tags: ["Java", "Mindset"],
        notes: {
            intro: "Professional developers real-world problems को code में कैसे translate करते हैं? यह mental model सीखना उतना ही जरूरी है जितना syntax सीखना।",
            topics: [
                "🧠 Think in Input → Process → Output model",
                "🏗️ Classes = Real-world entities (Car, Student, Bank Account)",
                "⚙️ Methods = Actions (drive(), calculateGrade(), deposit())",
                "📝 Naming Conventions: camelCase for variables, PascalCase for Classes",
                "🔄 main() method — the entry point of every Java program",
            ],
            code: `// Real World → Code: Student Example
public class Student {
    // Properties (real-world attributes)
    String name = "Vinay";
    int age = 22;
    double marks = 85.5;

    // Action (real-world behavior)
    public void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Marks: " + marks);
    }

    public static void main(String[] args) {
        Student s = new Student(); // Create object
        s.displayInfo();           // Call behavior
    }
}`,
            quiz: [
                { 
                    question: "Define Class and Object with a real-life analogy.", 
                    answer: "Class is the blueprint (Car design), Object is the actual car built from it.",
                    options: ["Class=Car, Object=Design", "Class=Design, Object=Car", "Both same", "None"],
                    correctIndex: 1
                },
                { 
                    question: "Why is the main method always public and static?", 
                    answer: "Public so JVM can access it, Static so it can be called without creating an object.",
                    options: ["For speed", "Public access & No object needed", "It's a rule", "None"],
                    correctIndex: 1
                },
                { 
                    question: "What is the return type of the main method?", 
                    answer: "void",
                    options: ["int", "void", "String", "None"],
                    correctIndex: 1
                },
                { 
                    question: "Can we have multiple main methods in a single class?", 
                    answer: "No, only one main method can be the entry point.",
                    options: ["Yes", "No", "Only if static", "None"],
                    correctIndex: 1
                },
                { 
                    question: "What are naming conventions for Classes in Java?", 
                    answer: "PascalCase (e.g., StudentRecord).",
                    options: ["camelCase", "PascalCase", "snake_case", "None"],
                    correctIndex: 1
                },
                { 
                    question: "How to decide if a property should be local or in a class?", 
                    answer: "If it's needed across multiple methods, make it a class property (field).",
                    options: ["Randomly", "Scope needs", "Always class", "None"],
                    correctIndex: 1
                },
                { 
                    question: "What is the 'entry point' of a Java application?", 
                    answer: "The main method.",
                    options: ["Constructor", "main method", "Class", "None"],
                    correctIndex: 1
                }
            ],
        }
    },
    {
        id: 8,
        title: "EP 08 – Methods in Java | Functions Explained from Scratch",
        youtubeId: "JldKp7pXRCM",
        thumbnail: "/Thumbnail/ep-08-java-methods-thumbnail.png",
        tags: ["Java", "Methods"],
        notes: {
            intro: "Methods का मतलब है: एक बार लिखो, बार-बार use करो! यही DRY (Don't Repeat Yourself) principle है। Methods Java code को organized, readable और reusable बनाते हैं।",
            topics: [
                "🏭 What are Methods? The Factory Analogy — input goes in, output comes out",
                "🔄 Method Signature: returnType methodName(parameters)",
                "📥 Parameters & Arguments — data passing to methods",
                "📤 Return Types: void (no return) vs int/String (returns value)",
                "🎛️ Static Methods — called directly without creating an object",
            ],
            code: `public class Calculator {

    // Static Method — no object needed
    public static int add(int a, int b) {
        return a + b;  // Returns the sum
    }

    // Void Method — does work, returns nothing
    public static void printWelcome(String name) {
        System.out.println("Welcome, " + name + "! 🎉");
    }

    public static void main(String[] args) {
        int result = add(10, 20);      // Call and capture return
        System.out.println("Sum: " + result);   // Output: 30

        printWelcome("Vinay");          // Call void method
    }
}`,
            quiz: [
                { 
                    question: "Difference between Parameters and Arguments?", 
                    answer: "Parameters are in the method definition; Arguments are the actual values passed during the call.",
                    options: ["Same", "Params=Def, Args=Call", "Args=Def, Params=Call", "None"],
                    correctIndex: 1
                },
                { 
                    question: "What is the 'void' keyword used for in methods?", 
                    answer: "It indicates that the method does not return any value.",
                    options: ["Returns int", "No return value", "Returns String", "None"],
                    correctIndex: 1
                },
                { 
                    question: "Explain Method Overloading with a small example.", 
                    answer: "Same method name, different parameters (e.g., add(int, int) and add(int, int, int)).",
                    options: ["Different names", "Same name, diff params", "Same params", "None"],
                    correctIndex: 1
                },
                { 
                    question: "Why use Static methods instead of Instance methods?", 
                    answer: "To call them without creating an object of the class.",
                    options: ["For speed", "No object needed", "More secure", "None"],
                    correctIndex: 1
                },
                { 
                    question: "Can a method return multiple values in Java?", 
                    answer: "No, but you can return an array or an object containing multiple values.",
                    options: ["Yes", "No", "Only if static", "None"],
                    correctIndex: 1
                },
                { 
                    question: "What is the default return value if none is specified?", 
                    answer: "You must specify a return type or use void.",
                    options: ["0", "null", "Must specify", "None"],
                    correctIndex: 2
                },
                { 
                    question: "What is the DRY principle in software development?", 
                    answer: "Don't Repeat Yourself — avoid code duplication.",
                    options: ["Do Repeat Yourself", "Don't Repeat Yourself", "Do Run Yearly", "None"],
                    correctIndex: 1
                }
            ],
        }
    },
    {
        id: 9,
        title: "EP 09 – Static vs Dynamic Programming Languages",
        youtubeId: "qkfxULQ0YQE",
        thumbnail: "/Thumbnail/ep-09-static-vs-dynamic-thumbnail.png",
        tags: ["Java", "Theory"],
        notes: {
            intro: "Java क्यों Python से अलग है? Statically Typed systems आपको errors early catch करने देते हैं — production में नहीं, बल्कि development time पर।",
            topics: [
                "📌 Static Typing (Java, C++) — type declared at compile time",
                "🔄 Dynamic Typing (Python, JS) — type determined at runtime",
                "🛡️ Advantages of Static: Early error detection, better performance, IDE support",
                "⚡ Advantages of Dynamic: Faster prototyping, shorter code",
                "🏦 Why enterprise/banking apps use Java: Type safety = fewer bugs in production",
            ],
            code: `// Java (Statically Typed) - Type declared upfront
int age = 25;         // Must be integer
String name = "Vinay"; // Must be String
// age = "hello";     // ❌ COMPILE ERROR - caught before running!

// Python (Dynamically Typed) - No type declaration
// age = 25
// age = "hello"   # Works fine at runtime (but can cause bugs!)

// Java advantage: You catch TYPE errors before going live! ✅`,
            quiz: [
                { question: "What is Statically Typed vs Dynamically Typed?", answer: "Static (Java): Type checked at Compile-time. Dynamic (Python): Type checked at Runtime.", options: ["Static=Runtime, Dynamic=Compile", "Static=Compile, Dynamic=Runtime", "Both same", "None"], correctIndex: 1 },
                { question: "Is Java 100% Statically Typed? (Hint: 'var' keyword)", answer: "Yes, even with 'var' (Java 10+), the type is inferred at compile-time and cannot be changed later.", options: ["No", "Yes", "Depends", "None"], correctIndex: 1 },
                { question: "Advantage of catching errors at compile-time vs runtime?", answer: "It prevents crashes in the final product (Production) and makes developers fix bugs early.", options: ["Faster", "Prevents production crashes", "Looks cool", "None"], correctIndex: 1 },
                { question: "Why is Python considered more flexible but Java more stable?", answer: "Python allows type-changing (flexibility), while Java enforces structure (stability for large teams).", options: ["Python is faster", "Python flexible, Java stable", "Java flexible", "None"], correctIndex: 1 },
                { question: "Define 'Type Safety' in your own words.", answer: "It's a feature that prevents the compiler from performing operations on incompatible data types.", options: ["Memory safety", "Type safety", "Speed", "None"], correctIndex: 1 },
                { question: "Can you change the type of a variable after declaration in Java?", answer: "No, once an 'int' is declared, it can never store a 'String'.", options: ["Yes", "No", "Only if var", "None"], correctIndex: 1 }
            ],
        }
    },
    {
        id: 10,
        title: "EP 10 – Variables in Java | Storage, Scope & Memory",
        youtubeId: "hnQlsMoyjZM",
        thumbnail: "/Thumbnail/ep-10-java-variables-thumbnail.png",
        tags: ["Java", "Variables"],
        notes: {
            intro: "Variables = Computer की Memory में Data रखने वाले Containers (buckets). हर variable का एक Type, Name और Value होता है।",
            topics: [
                "🪣 Variable Analogy: Like a labelled box — name is the label, value is the content",
                "📋 Variable Declaration: dataType variableName = value;",
                "🏠 Local Variable — declared inside a method, scope limited to that method",
                "🏛️ Instance Variable — declared in class, unique per object",
                "🌐 Static Variable — shared across ALL objects of the class",
            ],
            code: `public class VariableDemo {

    // Instance Variable (belongs to each object)
    String name = "Vinay";

    // Static Variable (shared by all objects)
    static int studentCount = 0;

    public static void main(String[] args) {

        // Local Variable (only inside this method)
        int age = 22;
        double salary = 50000.50;
        boolean isActive = true;
        char grade = 'A';

        System.out.println("Age: " + age);
        System.out.println("Salary: " + salary);
        System.out.println("Active: " + isActive);
        System.out.println("Grade: " + grade);
    }
}`,
            quiz: [
                { 
                    question: "List 3 types of variables based on their scope.", 
                    answer: "Local Variables (inside method), Instance Variables (inside class, outside method), and Static Variables (shared across class).",
                    options: ["Local, Instance, Static", "Global, Private, Public", "Small, Medium, Large", "Fixed, Dynamic, Shared"],
                    correctIndex: 0
                },
                { 
                    question: "Where are Instance variables stored in memory (Stack/Heap)?", 
                    answer: "Instance variables are stored in the HEAP memory as part of the object they belong to.",
                    options: ["Stack", "Heap", "CPU Register", "Hard Drive"],
                    correctIndex: 1
                },
                { 
                    question: "What is the default value of an uninitialized Instance variable?", 
                    answer: "It depends on the type: 0 for int/byte, 0.0 for double, false for boolean, and null for objects like String.",
                    options: ["0", "null", "Garbage value", "Depends on Data Type"],
                    correctIndex: 3
                },
                { 
                    question: "Can local variables be accessed outside their method?", 
                    answer: "No, local variables have 'block scope' and are destroyed once the method execution is complete.",
                    options: ["Yes", "No", "Only if static", "Only if public"],
                    correctIndex: 1
                },
                { 
                    question: "What is the significance of the 'static' keyword for variables?", 
                    answer: "It ensures only one copy of the variable exists in memory, shared by every instance of that class.",
                    options: ["Makes it faster", "Ensures single shared copy", "Deletes it automatically", "Makes it private"],
                    correctIndex: 1
                }
            ],
        }
    },
    {
        id: 11,
        title: "EP 11 – Data Types in Java | Primitive & Non-Primitive Explained",
        youtubeId: "k4aJBTHdu1Q",
        thumbnail: "/Thumbnail/ep-11-java-data-types-thumbnail.png",
        tags: ["Java", "Types"],
        notes: {
            intro: "Java में 8 Primitive Data Types हैं जो memory में directly value store करते हैं। Non-Primitive types objects और references store करते हैं।",
            topics: [
                "🔢 byte (1 byte), short (2), int (4), long (8) — integer types",
                "💧 float (4 bytes), double (8 bytes) — decimal numbers",
                "🔤 char (2 bytes) — single character (Unicode)",
                "✅ boolean (1 bit) — true / false only",
                "🏗️ Non-Primitive: String, Array, Class, Interface — stored as reference",
            ],
            code: `public class DataTypeDemo {
    public static void main(String[] args) {

        // Primitive Types
        byte b = 127;
        short s = 32000;
        int i = 2147483647;     // Max int value
        long l = 9223372036854775807L; // Add 'L' for long
        float f = 3.14f;        // Add 'f' for float
        double d = 3.14159265;
        char c = 'A';           // Single quotes for char
        boolean flag = true;

        // Non-Primitive
        String name = "Vinay";  // Object, not primitive!

        System.out.println("int max: " + Integer.MAX_VALUE);
        System.out.println("double: " + d);
    }
}`,
            quiz: [
                { 
                    question: "How many total bits are in a 'double' in Java?", 
                    answer: "64 bits (8 bytes).",
                    options: ["16 bits", "32 bits", "64 bits", "128 bits"],
                    correctIndex: 2
                },
                { 
                    question: "What is the difference between float and double in terms of precision?", 
                    answer: "Float has ~7 decimal digits of precision (32-bit), while Double has ~15-16 digits (64-bit).",
                    options: ["Float is more precise", "Double is more precise", "Both are same", "Neither is precise"],
                    correctIndex: 1
                },
                { 
                    question: "What is a 'Wrapper Class' and why do we need it?", 
                    answer: "They are objects that 'wrap' primitives (like Integer for int). Needed for using primitives in Collections like ArrayList.",
                    options: ["To hide code", "To use primitives as objects", "To speed up math", "None"],
                    correctIndex: 1
                },
                { 
                    question: "is 'String' a primitive or non-primitive data type? Explain.", 
                    answer: "String is Non-Primitive (it's a Class). It stores a reference to a memory location in the String Pool.",
                    options: ["Primitive", "Non-Primitive", "Both", "Neither"],
                    correctIndex: 1
                },
                { 
                    question: "How much memory does a 'boolean' occupy in the JVM?", 
                    answer: "The JVM specification doesn't define size exactly, but it's typically treated as 1 byte for storage efficiency.",
                    options: ["1 bit", "8 bits (1 byte)", "32 bits", "64 bits"],
                    correctIndex: 1
                }
            ],
        }
    },
    {
        id: 12,
        title: "EP 12 – Student Management Project | Java Variables & Data Types",
        youtubeId: "lvF3ZaW_KRg",
        thumbnail: "/Thumbnail/ep-12-student-management-project-thumbnail.png",
        tags: ["Java", "Project"],
        notes: {
            intro: "Phase 1 का पहला project: Student Management System — जहाँ हम Variables और Data Types को real-world context में apply करते हैं।",
            topics: [
                "🎒 Project: Student Management System v1.0",
                "📝 Store student data: name, age, roll number, marks, grade",
                "🔢 Use appropriate data types for each attribute",
                "📤 Display formatted student report card",
                "🧠 Understand how primitive vs String variables work together",
            ],
            code: `public class StudentManagement {
    public static void main(String[] args) {

        // Student Data using appropriate Data Types
        String studentName = "Rahul Kumar";
        int rollNumber = 101;
        int age = 20;
        double mathMarks = 88.5;
        double scienceMarks = 92.0;
        double englishMarks = 78.5;
        char grade = 'A';
        boolean isPassed = true;

        // Calculate average
        double average = (mathMarks + scienceMarks + englishMarks) / 3;

        // Display Report Card
        System.out.println("===== STUDENT REPORT CARD =====");
        System.out.println("Name    : " + studentName);
        System.out.println("Roll No : " + rollNumber);
        System.out.println("Age     : " + age);
        System.out.println("Average : " + average);
        System.out.println("Grade   : " + grade);
        System.out.println("Status  : " + (isPassed ? "PASS ✅" : "FAIL ❌"));
    }
}`,
            quiz: [
                { question: "Which data type is best for storing a student's percentage with decimals?", answer: "float or double (double is usually preferred for more accuracy).", options: ["int", "double", "boolean", "char"], correctIndex: 1 },
                { question: "Why can't we store a 'roll number' as a boolean?", answer: "Because a roll number is a numeric ID (e.g. 101), while boolean can only store 'true' or 'false'.", options: ["It's too big", "Boolean is only true/false", "It's a string", "None"], correctIndex: 1 },
                { question: "What is the benefit of using 'String' for names instead of char arrays?", answer: "Strings are easier to manipulate (concatenation, searching) and are immutable for security.", options: ["Faster", "Easier manipulation", "Less memory", "None"], correctIndex: 1 },
                { question: "How to calculate the average of 3 subjects in Java accurately?", answer: "Sum the marks and divide by 3.0 (using a double) to prevent integer truncation.", options: ["Divide by 3", "Divide by 3.0", "Multiply by 3", "None"], correctIndex: 1 },
                { question: "What happens if you divide an integer by matching integer in percentage calculation?", answer: "It performs integer division (e.g. 1/2 = 0), so you must use 1/2.0 to get 0.5.", options: ["Decimal result", "Integer truncation", "Error", "None"], correctIndex: 1 },
                { question: "How do you format a double to 2 decimal places in console output?", answer: "Using System.out.printf(\"%.2f\", value); or DecimalFormat class.", options: ["println()", "printf()", "print()", "None"], correctIndex: 1 }
            ],
        }
    },
    {
        id: 13,
        title: "EP 13 – Type Casting in Java | Implicit & Explicit Conversion",
        youtubeId: "Xg9X_cdPNLk",
        thumbnail: "/Thumbnail/ep-13-type-casting-thumbnail.png",
        tags: ["Java", "Types"],
        notes: {
            intro: "Type Casting = एक data type को दूसरे data type में convert करना। Java में दो types होते हैं: Widening (safe, automatic) और Narrowing (manual, risky).",
            topics: [
                "🌊 Widening / Implicit Casting — small to large (auto, no data loss): byte → short → int → long → float → double",
                "🔨 Narrowing / Explicit Casting — large to small (manual, may lose data): double → int",
                "⚠️ Data Loss Warning: (int) 9.99 = 9 (decimal part lost!)",
                "🔤 String ↔ int conversion: Integer.parseInt(), String.valueOf()",
                "📦 Wrapper Classes: Integer, Double, Character — bridge primitive ↔ object",
            ],
            code: `public class TypeCasting {
    public static void main(String[] args) {

        // Widening (Automatic - no data loss)
        int myInt = 100;
        double myDouble = myInt;  // int → double safely
        System.out.println("Widening: " + myDouble); // 100.0

        // Narrowing (Manual - may lose data!)
        double price = 9.99;
        int roundedPrice = (int) price; // Explicit cast
        System.out.println("Narrowing: " + roundedPrice); // 9 (lost .99!)

        // String ↔ int
        String numStr = "42";
        int num = Integer.parseInt(numStr); // String to int
        String backToStr = String.valueOf(num); // int to String
    }
}`,
            quiz: [
                { question: "Difference between Implicit (Widening) and Explicit (Narrowing) casting?", answer: "Widening (Auto): Small type to Large (safe). Narrowing (Manual): Large type to Small (risky, potential data loss).", options: ["Widening=Manual, Narrowing=Auto", "Widening=Auto, Narrowing=Manual", "Both same", "None"], correctIndex: 1 },
                { question: "Why is narrowing/explicit casting considered 'unsafe' or risky?", answer: "Because the destination type may not have enough space, leading to overflow or loss of decimal precision.", options: ["It's slow", "Data loss risk", "It's illegal", "None"], correctIndex: 1 },
                { question: "What happens to the decimal part during (int) conversion of a double?", answer: "It is simply truncated (removed). For example, (int) 9.99 becomes 9.", options: ["Rounded", "Truncated", "Error", "None"], correctIndex: 1 },
                { question: "How to convert a String '123' into an integer in Java?", answer: "By using Integer.parseInt(\"123\");", options: ["(int) '123'", "Integer.parseInt('123')", "String.toInt('123')", "None"], correctIndex: 1 },
                { question: "Mention a scenario where type casting is mandatory in Java.", answer: "When passing a double value to a function that strictly expects an int parameter.", options: ["Always", "When narrowing", "Never", "None"], correctIndex: 1 },
                { question: "What is 'type promotion' in a mathematical expression?", answer: "When performing arithmetic on different types (like byte + int), Java promotes everything to the largest type (int) before calculating.", options: ["Type demotion", "Type promotion", "Error", "None"], correctIndex: 1 }
            ],
        }
    },
    {
        id: 14,
        title: "EP 14 – Why Do Operators Exist in Java? | The CPU-Level Truth",
        youtubeId: "6JCqR59XA0k",
        thumbnail: "/Thumbnail/ep-14-why-operators-thumbnail.png",
        tags: ["Java", "Operators"],
        notes: {
            intro: "Operators CPU को बताते हैं: इन दो values के साथ क्या करना है? हर arithmetic operation (+ - * /) के पीछे hardware-level ALU (Arithmetic Logic Unit) काम करता है।",
            topics: [
                "🔢 Operator Categories: Arithmetic, Relational, Logical, Bitwise, Assignment, Unary",
                "⚙️ CPU ALU (Arithmetic Logic Unit) — performs all computations",
                "📊 Operator Precedence: * / before + - (like BODMAS in math!)",
                "🎯 Why operators exist: Without them we can't manipulate data in memory",
                "🔀 Types: Unary (1 operand), Binary (2 operands), Ternary (3 operands)",
            ],
            code: `public class OperatorsIntro {
    public static void main(String[] args) {

        // Every operator triggers CPU's ALU
        int a = 10, b = 3;

        // Arithmetic
        System.out.println(a + b);  // 13 (ADD)
        System.out.println(a - b);  // 7  (SUBTRACT)
        System.out.println(a * b);  // 30 (MULTIPLY)
        System.out.println(a / b);  // 3  (DIVIDE - integer division)
        System.out.println(a % b);  // 1  (MODULO - remainder)

        // Operator Precedence
        int result = 2 + 3 * 4; // = 14 (not 20!) - * first
        System.out.println(result);
    }
}`,
            quiz: [
                { question: "List all 6 categories of operators in Java.", answer: "Arithmetic, Relational, Logical, Bitwise, Assignment, and Unary operators.", options: ["Only 2", "Only 4", "All 6", "None"], correctIndex: 2 },
                { question: "What is 'Operator Precedence' and how does it work?", answer: "It determines the order in which operators are evaluated (e.g., * and / are done before + and -).", options: ["Order of evaluation", "Speed", "Memory", "None"], correctIndex: 0 },
                { question: "Explain the 'Associativity' of operators with an example.", answer: "It determines the direction (Left-to-Right or Right-to-Left) for operators of the same precedence, like + and -.", options: ["Direction of evaluation", "Speed", "Memory", "None"], correctIndex: 0 },
                { question: "What is the hardware component (ALU) responsible for operator tasks?", answer: "The Arithmetic Logic Unit (ALU) inside the CPU.", options: ["RAM", "ALU", "GPU", "None"], correctIndex: 1 },
                { question: "Can you perform operations on non-primitive types using basic operators?", answer: "Only the '+' operator is overloaded for Strings in Java; most other operators only work on primitives.", options: ["Yes", "No", "Only for String", "None"], correctIndex: 2 },
                { question: "What is the difference between Unary, Binary, and Ternary operators?", answer: "Unary uses 1 operand (++x), Binary uses 2 (x+y), and Ternary uses 3 (condition ? x : y).", options: ["Operand count", "Speed", "Memory", "None"], correctIndex: 0 }
            ],
        }
    },
    {
        id: 15,
        title: "EP 15 – Arithmetic Operators in Java",
        youtubeId: "65R9jw3bxws",
        thumbnail: "/Thumbnail/ep-15-arithmetic-operators-thumbnail.png",
        tags: ["Java", "Operators"],
        notes: {
            intro: "Java के 5 Arithmetic Operators: +, -, *, /, % — ये सभी math operations करते हैं। % (Modulo) especially important है — even/odd check, divisibility check के लिए।",
            topics: [
                "➕ Addition (+): Numbers add, Strings concatenate (5+3=8, 'Hello'+'World')",
                "➖ Subtraction (-): Basic math, temperature difference, score calculation",
                "✖️ Multiplication (*): Area calculation, salary * months, percentage",
                "➗ Division (/): int/int = int (5/2=2!), double/int = double",
                "🔢 Modulo (%): Remainder! Use: even/odd check, last digit, circular indexing",
            ],
            code: `public class ArithmeticDemo {
    public static void main(String[] args) {

        // Basic arithmetic
        System.out.println(10 + 3);   // 13
        System.out.println(10 - 3);   // 7
        System.out.println(10 * 3);   // 30
        System.out.println(10 / 3);   // 3 (integer division!)
        System.out.println(10.0 / 3); // 3.333... (float division)
        System.out.println(10 % 3);   // 1 (remainder)

        // Real-world: Even/Odd check using modulo
        int num = 15;
        if (num % 2 == 0) {
            System.out.println(num + " is Even");
        } else {
            System.out.println(num + " is Odd"); // Prints this
        }

        // String concatenation with +
        String name = "Java";
        System.out.println("Hello " + name); // Hello Java
    }
}`,
            quiz: [
                { question: "Explain the behavior of '+' operator with both numbers and Strings.", answer: "For numbers, it adds them. If one operand is a String, it performs concatenation (e.g., \"A\" + 1 = \"A1\").", options: ["Always adds", "Concatenates if String", "Error", "None"], correctIndex: 1 },
                { question: "What is the result of '5 / 2' in Java? Explain why.", answer: "The result is 2. Since both are 'int', Java performs integer division and discards the remainder.", options: ["2.5", "2", "3", "None"], correctIndex: 1 },
                { question: "What is the practical use of the Modulo (%) operator?", answer: "Determining remainders, checking for even/odd numbers, and performing circular array indexing.", options: ["Division", "Remainder", "Multiplication", "None"], correctIndex: 1 },
                { question: "How do you check if a number is even or odd using arithmetic operators?", answer: "Using (num % 2 == 0) — if true, it's even; if false, it's odd.", options: ["num/2==0", "num%2==0", "num*2==0", "None"], correctIndex: 1 },
                { question: "Does Java support operator overloading for arithmetic operators?", answer: "No, Java does not allow users to overload operators, though '+' is internally overloaded for Strings.", options: ["Yes", "No", "Only for String", "None"], correctIndex: 1 },
                { question: "What is integer overflow during arithmetic operations?", answer: "When the result exceeds the maximum value of the data type (e.g. Integer.MAX_VALUE + 1), it cycles back to the minimum value.", options: ["Error", "Cycles back", "Stops", "None"], correctIndex: 1 }
            ],
        }
    },
    {
        id: 16,
        title: "EP 16 – Unary Operators in Java",
        youtubeId: "h8TJDCHpjCc",
        thumbnail: "/Thumbnail/ep-16-unary-operators-thumbnail.png",
        tags: ["Java", "Operators"],
        notes: {
            intro: "Unary operators केवल एक operand पर work करते हैं। ++ और -- सबसे important हैं — और pre vs post increment का difference एक common interview question है!",
            topics: [
                "➕ Unary Plus (+x): Makes value positive (rarely used)",
                "➖ Unary Minus (-x): Negates value (5 → -5)",
                "🔼 Pre-increment (++x): First increment, then use",
                "🔽 Post-increment (x++): First use, then increment",
                "❗ Logical NOT (!): Flips boolean (true → false, false → true)",
            ],
            code: `public class UnaryDemo {
    public static void main(String[] args) {

        int a = 5;

        // Pre-increment: increment first, then assign
        int b = ++a;  // a becomes 6, b = 6
        System.out.println("Pre: a=" + a + ", b=" + b); // a=6, b=6

        // Post-increment: assign first, then increment
        int c = 5;
        int d = c++;  // d = 5 (old value), THEN c becomes 6
        System.out.println("Post: c=" + c + ", d=" + d); // c=6, d=5

        // Logical NOT
        boolean isLoggedIn = false;
        System.out.println(!isLoggedIn); // true

        // Unary Minus
        int x = 10;
        System.out.println(-x); // -10
    }
}`,
            quiz: [
                { question: "Explain the difference between Pre-increment (++i) and Post-increment (i++).", answer: "Pre-increment: Changes value first, then returns it. Post-increment: Returns current value first, then changes it.", options: ["Pre=Use first, Post=Change first", "Pre=Change first, Post=Use first", "Both same", "None"], correctIndex: 1 },
                { question: "What is the output of 'int x=10; System.out.println(x--);'?", answer: "It prints 10. The value is printed FIRST (post-decrement), and then becomes 9 in memory.", options: ["9", "10", "11", "None"], correctIndex: 1 },
                { question: "Does '++' work on double and float types?", answer: "Yes, it adds 1.0 to the current value.", options: ["Yes", "No", "Only int", "None"], correctIndex: 0 },
                { question: "How does the 'Logical NOT (!)' operator interact with boolean variables?", answer: "It inverts the value: !true = false, and !false = true.", options: ["No change", "Inverts value", "Error", "None"], correctIndex: 1 },
                { question: "Explain the 'Unary Minus (-)' with a practical scenario.", answer: "It negates a number. Useful for creating a 'negative' score or representing debt in banking code.", options: ["Subtraction", "Negation", "Addition", "None"], correctIndex: 1 },
                { question: "Can we use unary operators on Strings?", answer: "No, unary operators like ++ or -- result in a compilation error if used on a String.", options: ["Yes", "No", "Only if numeric", "None"], correctIndex: 1 }
            ],
        }
    },
    {
        id: 17,
        title: "EP 17 – Relational Operators in Java",
        youtubeId: "i69PsllUNLI",
        thumbnail: "/Thumbnail/ep-17-relational-operators-thumbnail.png",
        tags: ["Java", "Operators"],
        notes: {
            intro: "Relational Operators दो values को compare करते हैं — result हमेशा boolean (true/false) होता है। ये if-else और loops की backbone हैं।",
            topics: [
                "== : Equal to (value comparison for primitives)",
                "!= : Not equal to — opposite of ==",
                "> : Greater than — a > b is true if a is larger",
                "< : Less than — a < b is true if a is smaller",
                ">= : Greater than or equal to",
                "<= : Less than or equal to",
            ],
            code: `public class RelationalDemo {
    public static void main(String[] args) {

        int a = 10, b = 20;

        System.out.println(a == b);  // false (10 is not 20)
        System.out.println(a != b);  // true  (10 is not equal to 20)
        System.out.println(a > b);   // false (10 is not > 20)
        System.out.println(a < b);   // true  (10 < 20)
        System.out.println(a >= 10); // true  (10 >= 10)
        System.out.println(b <= 20); // true  (20 <= 20)

        // Common Mistake: == vs = 
        int x = 5;
        if (x == 5) {           // Comparison ✅
            System.out.println("x is 5");
        }
        // if (x = 5) { }      // Assignment ❌ Compile Error

        // NEVER use == for String comparison!
        String s1 = new String("Java");
        String s2 = new String("Java");
        System.out.println(s1 == s2);       // false (different objects!)
        System.out.println(s1.equals(s2));  // true  (same content) ✅
    }
}`,
            quiz: [
                { question: "Why shouldn't we use '==' for String comparison?", answer: "Using '==' compares identity (memory addresses). To compare content (the actual letters), use .equals().", options: ["It's slow", "Compares memory address", "It's illegal", "None"], correctIndex: 1 },
                { question: "What is the 'result type' of any relational operation?", answer: "Always boolean (true or false).", options: ["int", "boolean", "String", "None"], correctIndex: 1 }
            ],
        }
    },
    {
        id: 18,
        title: "EP 18 – Logical Operators in Java | &&, ||, ! Explained",
        youtubeId: "mYMzF7UFjOs",
        thumbnail: "/Thumbnail/ep-18-logical-operators-thumbnail.png",
        tags: ["Java", "Operators"],
        notes: {
            intro: "Logical Operators Multiple conditions को combine करने के काम आते हैं। AND, OR और NOT का सही use ही logic building का base है।",
            topics: [
                "&& (Logical AND): Returns true ONLY if both conditions are true",
                "|| (Logical OR): Returns true if AT LEAST one condition is true",
                "! (Logical NOT): Reverses the boolean result",
                "🧠 Truth Tables: understanding logic outcomes",
                "⚡ Short-circuit Evaluation: efficiency in Java logic",
            ],
            code: `public class LogicalDemo {
    public static void main(String[] args) {
        boolean hasLicense = true;
        boolean hasCar = false;

        // AND (&&) - Needs BOTH to be true
        System.out.println("Can Drive: " + (hasLicense && hasCar)); // false

        // OR (||) - Needs ANY ONE to be true
        System.out.println("Can Commute: " + (hasLicense || hasCar)); // true

        // NOT (!) - Reverses the value
        System.out.println("Inverse: " + (!hasLicense)); // false
    }
}`,
            quiz: [
                { 
                    question: "Which operator requires BOTH conditions to be true?", 
                    answer: "Logical AND (&&).",
                    options: ["||", "&&", "!", "=="],
                    correctIndex: 1
                },
                { 
                    question: "What is 'Short-circuit evaluation' in Logical AND?", 
                    answer: "If the first condition is false, Java skips checking the second one because the result must be false.",
                    options: ["Ignores the whole if", "Skips second check if first is false", "Speeds up printing", "Deletes redundant code"],
                    correctIndex: 1
                }
            ],
        }
    },
    {
        id: 19,
        title: "EP 19 – Assignment Operators in Java | Shorthand Operators",
        youtubeId: "UI-hXuWQJlo",
        thumbnail: "/Thumbnail/ep-19-assignment-operators-thumbnail.png",
        tags: ["Java", "Operators"],
        notes: {
            intro: "Assignment Operators variables में values store करने के लिए use होते हैं। Compound assignments ( जैसे +=, -= ) code को छोटा और cleaner बनाते हैं।",
            topics: [
                "= : Simple Assignment",
                "+= : Addition Assignment",
                "-= : Subtraction Assignment",
                "*=, /=, %= : Multiplication, Division, Modulo assignments",
                "⚡ Implicit Casting in Compound assignments",
            ],
            code: `public class AssignmentDemo {
    public static void main(String[] args) {
        int x = 10;
        
        x += 5; // same as x = x + 5
        System.out.println(x); // 15

        x *= 2; // same as x = x * 2
        System.out.println(x); // 30

        byte b = 127;
        b += 1; // Compound assignment handles internal casting
        System.out.println(b); // -128 (Overflow)
    }
}`,
            quiz: [
                { 
                    question: "What is 'x += 5' equivalent to?", 
                    answer: "x = x + 5.",
                    options: ["x = 5", "x = x + 5", "x = 5 + 5", "None"],
                    correctIndex: 1
                },
                { 
                    question: "Benefit of using Compound Assignment (like +=) in Java?", 
                    answer: "It performs automatic internal type casting, avoiding manual casting errors.",
                    options: ["Faster execution", "Automatic casting", "Less memory", "None"],
                    correctIndex: 1
                }
            ],
        }
    },
    {
            id: 20,
            title: "EP 20 – Ternary Operator in Java | Single-Line if-else",
            youtubeId: "WlZnyin9dMo",
            thumbnail: "/Thumbnail/ep-27-Java Ternary Operator Explained  Find Maximum of 3 Numbers (Interview Quest.png",
            tags: ["Java", "Operators"],
        notes: {
            intro: "Ternary Operator if-else का एक compact replacement है। यह conditional expression के base पर decision लेता है और value return करता है।",
            topics: [
                "📋 Syntax: condition ? result_if_true : result_if_false",
                "⚡ Expression based: It returns a value (unlike if-else)",
                "📐 Best for: Assigning values based on a simple condition",
                "🚫 Avoiding excessive nesting for readability",
            ],
            code: `public class TernaryDemo {
    public static void main(String[] args) {
        int age = 18;
        String status = (age >= 18) ? "Eligible to Vote" : "Not Eligible";
        
        System.out.println(status);

        int n = 7;
        String type = (n % 2 == 0) ? "Even" : "Odd";
        System.out.println(type); // Odd
    }
}`,
            quiz: [
                { 
                    question: "How many operands does the Ternary operator require?", 
                    answer: "Three (condition, true-result, false-result).",
                    options: ["One", "Two", "Three", "Four"],
                    correctIndex: 2
                },
                { 
                    question: "What is the symbol for Ternary Operator?", 
                    answer: "? and :",
                    options: ["?", "!", "? :", "::"],
                    correctIndex: 2
                }
            ],
        }
    },
    {
            id: 21,
            title: "EP 21 – Bitwise Operators in Java | Binary Level Programming",
            youtubeId: "TUwb1rXDE-k",
            thumbnail: "/Thumbnail/ep-20-bitwise-operators-thumbnail.png",
            tags: ["Java", "Operators"],
        notes: {
            intro: "Bitwise operators binary level पर data manipulate करते हैं। Performance-critical systems और cryptography में इनका use होता है।",
            topics: [
                "&, |, ^, ~ : Bitwise AND, OR, XOR, Complement",
                "<<, >>, >>> : Left Shift, Right Shift, Unsigned Shift",
                "🔌 Fast Multiplication/Division using shifts",
                "🛠️ Setting/Clearing bits in lower-level programming",
            ],
            code: `public class BitwiseDemo {
    public static void main(String[] args) {
        int a = 5; // 0101
        int b = 3; // 0011
        
        System.out.println(a & b); // 1  (0001)
        System.out.println(a | b); // 7  (0111)
        
        // Fast multiplication (x * 2^1)
        System.out.println(10 << 1); // 20
    }
}`,
            quiz: [
                { 
                    question: "Which bitwise operator is used for binary inversion?", 
                    answer: "Bitwise Complement (~).",
                    options: ["&", "|", "~", "<<"],
                    correctIndex: 2
                },
                { 
                    question: "What is '5 << 1' equivalent to?", 
                    answer: "5 multiplied by 2 (result 10).",
                    options: ["5", "10", "15", "None"],
                    correctIndex: 1
                }
            ],
        }
    },
    {
            id: 22,
            title: "EP 22 – Calculator Project using Operators | Mini Project",
            youtubeId: "1pcPoZqz08c",
            thumbnail: "/Thumbnail/ep-21-result-analyser-project.png",
            tags: ["Java", "Project"],
        notes: {
            intro: "Project phase! हमने जितने भी operators सीखे हैं, उनसे एक simple terminal-based calculator बनाएँगे जो arithmetic calculations कर सके।",
            topics: [
                "🏗️ Building the core logic for Add, Sub, Mul, Div",
                "📟 Output formatting using System.out.println",
                "🧠 Understanding how precedence affects our calculator outputs",
                "🛠️ Modular design approach basics",
            ],
            code: `public class BasicCalculator {
    public static void main(String[] args) {
        double n1 = 10.5, n2 = 5.0;
        
        System.out.println("Result: " + (n1 + n2));
        System.out.println("Result: " + (n1 - n2));
        System.out.println("Result: " + (n1 * n2));
        System.out.println("Result: " + (n1 / n2));
    }
}`,
            quiz: [
                { 
                    question: "Which operator would you use to find the remainder?", 
                    answer: "Modulo (%)",
                    options: ["/", "*", "%", "-"],
                    correctIndex: 2
                },
                { 
                    question: "Why use 'double' for a calculator instead of 'int'?", 
                    answer: "To handle division correctly and allow decimals in calculations.",
                    options: ["Faster", "Handle decimals", "Less memory", "None"],
                    correctIndex: 1
                }
            ],
        }
    },
    {
            id: 23,
            title: "EP 23 – Introduction to Conditionals | Simple If Statement",
            youtubeId: "3eA3B1-0WSk",
            thumbnail: "/Thumbnail/ep-23-if-statement-thumbnail.png",
            tags: ["Java", "Conditions"],
        notes: {
            intro: "Programming में decision making के लिए If block का use होता है। अगर condition true है, तो ही block के अंदर का code execute होगा।",
            topics: [
                "🛠️ Logic building: decisions based on boolean outcomes",
                "📋 Syntax: if (condition) { // code }",
                "🔑 Comparison operators in If blocks",
                "🚦 Single block execution control",
            ],
            code: `public class SimpleIf {
    public static void main(String[] args) {
        int speed = 100;
        
        if (speed > 80) {
            System.out.println("Over Speeding! 🚦");
        }
        
        System.out.println("Safe driving is better.");
    }
}`,
            quiz: [
                { 
                    question: "What must be the result of the condition inside an 'if' statement?", 
                    answer: "A boolean (true or false).",
                    options: ["Int", "String", "Boolean", "Float"],
                    correctIndex: 2
                },
                { 
                    question: "What happens if the condition in an 'if' is false?", 
                    answer: "The code block inside the if is completely skipped.",
                    options: ["Error occurs", "Skips block", "Prints null", "Restarts program"],
                    correctIndex: 1
                }
            ],
        }
    },
    {
            id: 24,
            title: "EP 24 – If-Else with Real-World Logic | Decision Making",
            youtubeId: "CSXI2E_VfKI",
            thumbnail: "/Thumbnail/ep-24-if-else-real-life-thumbnail.png",
            tags: ["Java", "Conditions"],
        notes: {
            intro: "Decision making का upgrade: If-Else. अगर condition true है तो if block, नहीं तो else block run होता है। Always one path is taken.",
            topics: [
                "🚦 Path selection: handling both True and False cases",
                "📋 Syntax: if() { } else { }",
                "🧠 Voting eligibility and even/odd logic",
                "✅ Mandatory execution: either if or else ALWAYS runs",
            ],
            code: `public class IfElseDemo {
    public static void main(String[] args) {
        int n = 15;
        if (n % 2 == 0) {
            System.out.println("Even");
        } else {
            System.out.println("Odd");
        }
        
        // Voting
        int age = 17;
        if (age >= 18) {
            System.out.println("Voter");
        } else {
            System.out.println("Not a Voter");
        }
    }
}`,
            quiz: [
                { 
                    question: "In an if-else structure, can both blocks run at the same time?", 
                    answer: "No, they are mutually exclusive. Only one block runs based on the condition.",
                    options: ["Yes", "No", "Depends on computer", "None"],
                    correctIndex: 1
                },
                { 
                    question: "Why use 'else' instead of a second 'if' with opposite logic?", 
                    answer: "It is more efficient (half the checks) and cleaner to read.",
                    options: ["Faster", "Cleaner & Efficient", "Required by Java", "None"],
                    correctIndex: 1
                }
            ],
        }
    },
    {
        id: 25,
        title: "EP 25 – Else-If Ladder in Java | Grade Calculator Project",
        youtubeId: "ZOVaRsm9QCw",
        thumbnail: "/Thumbnail/ep-25-If Else If Statement in Java in Hindi  Java Conditional Statements Tutorial.png",
        tags: ["Java", "Conditions"],
        notes: {
            intro: "Else-if ladder का use तब करते हैं जब हमारे पास multiple conditions हों। यह एक-एक करके check करता है और जो पहली condition true होती है, उसका block run होता है।",
            topics: [
                "📋 Syntax: if() { } else if() { } else if() { } else { }",
                "🎯 Only the FIRST matching condition executes, rest are skipped",
                "⚡ Order matters! Put most specific conditions FIRST",
                "🔗 Always end with a final else as default/fallback",
                "📊 Use case: Grade (A/B/C/D/F), Age group, Tax slab",
            ],
            code: `public class IfElseIfDemo {
    public static void main(String[] args) {

        double percentage = 78.5;
        String grade;

        // Grade Calculator — else-if ladder
        if (percentage >= 90) {
            grade = "A+ (Outstanding)";
        } else if (percentage >= 80) {
            grade = "A (Excellent)";
        } else if (percentage >= 70) {
            grade = "B (Very Good)";    // ← This one executes for 78.5
        } else if (percentage >= 60) {
            grade = "C (Good)";
        } else if (percentage >= 33) {
            grade = "D (Pass)";
        } else {
            grade = "F (Fail)";         // Default fallback
        }

        System.out.println("Percentage: " + percentage + "%");
        System.out.println("Grade: " + grade);

        // BMI Category
        double bmi = 22.4;
        if (bmi < 18.5) System.out.println("Underweight");
        else if (bmi < 25) System.out.println("Normal ✅");  // Prints this
        else if (bmi < 30) System.out.println("Overweight");
        else System.out.println("Obese");
    }
}`,
            quiz: [
                { question: "What is an 'Else-If Ladder' and when do you use it?", answer: "A structure to check multiple conditions sequentially. Use it when you have more than 2 mutually exclusive options (like Grades).", options: ["For loops", "Multiple conditions", "Single condition", "None"], correctIndex: 1 },
                { question: "Why is the ORDER of conditions critical in an else-if ladder?", answer: "Because Java executes only the FIRST matching condition and skips the rest. Most specific conditions should go first.", options: ["Speed", "Correctness", "Memory", "None"], correctIndex: 1 },
                { question: "What happens if TWO conditions in a ladder are both true?", answer: "Only the block of the first true condition will run. The second one will never be checked.", options: ["Both run", "First runs", "Error", "None"], correctIndex: 1 },
                { question: "What is the role of the final 'else' in a ladder?", answer: "It acts as a 'Default' case that runs if none of the specific 'if' or 'else if' conditions were met.", options: ["Optional", "Default fallback", "Error", "None"], correctIndex: 1 },
                { question: "Can you have an else-if ladder without a starting 'if'?", answer: "No, an 'else if' must always follow an 'if' or another 'else if' statement.", options: ["Yes", "No", "Only if static", "None"], correctIndex: 1 }
            ],
        }
    },
    {
        id: 26,
        title: "EP 26 – Nested If in Java | Weather Decision App Project 🌦️",
        youtubeId: "kCe5ZCjF5mU",
        thumbnail: "/Thumbnail/ep-26-Nested If in Java (Hindi) 🔥 Real Project  Weather Decision App 🌦️.png",
        tags: ["Java", "Conditions"],
        notes: {
            intro: "Nested If = if ke andar if. Real decisions depend on multiple layers. Weather App: first check if it's raining, THEN check temperature, THEN suggest clothing.",
            topics: [
                "🪆 Nested if: if inside another if block",
                "🔑 Outer condition must be true to even evaluate inner condition",
                "🌦️ Weather App Project: multi-layer decision making",
                "⚠️ Keep nesting shallow — too deep = pyramid of doom (bad practice)",
                "🔄 Alternative: combine conditions with && instead of nesting",
            ],
            code: `public class WeatherDecisionApp {
    public static void main(String[] args) {

        boolean isRaining = true;
        int temperature = 28; // Celsius

        // Nested if — outer checks rain, inner checks temperature
        if (isRaining) {
            System.out.println("☔ It is raining");

            if (temperature < 15) {
                System.out.println("🧥 Wear heavy jacket + carry umbrella");
            } else if (temperature < 25) {
                System.out.println("🧤 Wear light jacket + carry umbrella");
            } else {
                System.out.println("👕 Light clothes + carry umbrella");
            }
        } else {
            System.out.println("☀️ Not raining");

            if (temperature > 35) {
                System.out.println("😎 Wear sunglasses and sunscreen");
            } else {
                System.out.println("🌤️ Nice weather, go outside!");
            }
        }
    }
}`,
            quiz: [
                { question: "What is 'Nesting' in programming?", answer: "The practice of placing one control structure (like 'if') inside another of the same type.", options: ["Loops", "If inside If", "Variables", "None"], correctIndex: 1 },
                { question: "When should you prefer && over a Nested-If?", answer: "When both conditions must be true and you don't need to perform any 'intermediate' action between the first and second checks.", options: ["Always", "When conditions are simple", "Never", "None"], correctIndex: 1 },
                { question: "Explain the 'Pyramid of Doom' and how to avoid it.", answer: "It refers to deep nesting that makes code unreadable. Avoid it by using logical operators (&&, ||) or Guard Clauses.", options: ["Deep nesting", "Fast code", "Error", "None"], correctIndex: 0 },
                { question: "Inner vs Outer if: which one is checked first?", answer: "The Outer 'if' is checked first. The Inner 'if' is only reached if the Outer 'if' evaluates to true.", options: ["Inner", "Outer", "Both", "None"], correctIndex: 1 },
                { question: "Is there a limit to how many levels you can nest if-statements?", answer: "Theoretically limited by compiler memory, but practically you should never go beyond 3 levels for clean code.", options: ["No limit", "3 levels", "10 levels", "None"], correctIndex: 0 }
            ],
        }
    },
    {
        id: 27,
        title: "EP 27 – Ternary Operator in Java | Find Maximum of 3 Numbers",
        youtubeId: "WlZnyin9dMo",
        thumbnail: "/Thumbnail/ep-27-Java Ternary Operator Explained  Find Maximum of 3 Numbers (Interview Quest.png",
        tags: ["Java", "Operators"],
        notes: {
            intro: "Ternary operator = shortcut for simple if-else — 3 parts: condition ? valueIfTrue : valueIfFalse. Interview classic: Find maximum of 2 or 3 numbers!",
            topics: [
                "📋 Syntax: result = (condition) ? trueValue : falseValue",
                "🎯 3 parts: condition, true expression, false expression",
                "⚡ Best for simple one-liner decisions (not complex logic)",
                "🏆 Interview: Find max of 2 numbers in one line",
                "🔗 Nested ternary: Find max of 3 numbers (use carefully!)",
            ],
            code: `public class TernaryDemo {
    public static void main(String[] args) {

        // Basic ternary
        int age = 20;
        String status = (age >= 18) ? "Adult" : "Minor";
        System.out.println(status); // Adult

        // Find maximum of 2 numbers
        int a = 45, b = 72;
        int max = (a > b) ? a : b;
        System.out.println("Max of " + a + " and " + b + ": " + max); // 72

        // Find maximum of 3 numbers (nested ternary)
        int x = 15, y = 8, z = 23;
        int maxOf3 = (x > y) ? ((x > z) ? x : z) : ((y > z) ? y : z);
        System.out.println("Max of 3: " + maxOf3); // 23

        // Even/Odd check
        int num = 17;
        System.out.println(num + " is " + (num % 2 == 0 ? "Even" : "Odd"));

        // Absolute value
        int n = -10;
        int abs = (n < 0) ? -n : n;
        System.out.println("Absolute: " + abs); // 10
    }
}`,
            quiz: [
                { question: "Why is it called 'Ternary'? What are its 3 parts?", answer: "Because it has 3 operands: 1. Condition, 2. Value if true, 3. Value if false.", options: ["3 operands", "3 lines", "3 variables", "None"], correctIndex: 0 },
                { question: "Can you write a nested ternary to find the max of 3 numbers?", answer: "int max = (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);", options: ["Yes", "No", "Only if static", "None"], correctIndex: 0 },
                { question: "Is Ternary faster than If-Else in terms of performance?", answer: "No, they usually compile to identical machine code. Ternary is about code brevity, not speed.", options: ["Yes", "No", "Depends", "None"], correctIndex: 1 },
                { question: "Can a ternary return different data types for true and false?", answer: "No, both expressions must return the same data type (or types compatible with the target variable).", options: ["Yes", "No", "Only if static", "None"], correctIndex: 1 },
                { question: "When is Ternary considered 'Bad Practice' for code readability?", answer: "When you start nesting ternaries deeply. It becomes extremely hard to read compared to a standard if-else ladder.", options: ["Always", "When nested deeply", "Never", "None"], correctIndex: 1 }
            ],
        }
    },
    {
        id: 28,
        title: "EP 28 – Switch Statement in Java | Real Project + Interview Questions",
        youtubeId: "Yi0T-u4U_no",
        thumbnail: "/Thumbnail/ep-28-Switch Statement in Java.png",
        tags: ["Java", "Conditions"],
        notes: {
            intro: "Switch statement cleanly handles MANY exact discrete values. Better than long else-if ladders for menu systems, day names, state codes etc.",
            topics: [
                "📋 Syntax: switch(variable) { case value: break; default: }",
                "🔑 break statement: stops fall-through (critical!)",
                "⚠️ Fall-through: without break, next cases execute too",
                "🔢 Works with: int, char, String, enum",
                "🆕 Java 14+ Enhanced switch: no break needed, arrow syntax",
            ],
            code: `public class SwitchDemo {
    public static void main(String[] args) {

        // Classic Switch — Day of week
        int day = 3;
        String dayName;

        switch (day) {
            case 1: dayName = "Monday"; break;
            case 2: dayName = "Tuesday"; break;
            case 3: dayName = "Wednesday"; break;   // Matches!
            case 4: dayName = "Thursday"; break;
            case 5: dayName = "Friday"; break;
            case 6: dayName = "Saturday"; break;
            case 7: dayName = "Sunday"; break;
            default: dayName = "Invalid day";
        }
        System.out.println("Day: " + dayName); // Wednesday

        // Java 14+ Enhanced Switch (no break needed!)
        String result = switch (day) {
            case 1 -> "Monday";
            case 2 -> "Tuesday";
            case 3 -> "Wednesday";
            case 4, 5 -> "Weekday";   // Multiple cases!
            case 6, 7 -> "Weekend";
            default -> "Invalid";
        };
        System.out.println("Enhanced: " + result);
    }
}`,
            quiz: [
                { question: "Explain the concept of 'Fall-Through' in Switch statements.", answer: "If you forget the 'break' statement, execution continues into the next 'case' even if its value doesn't match.", options: ["It means skipping", "Executing multiple cases (missing break)", "Program crashes", "It jumps back"], correctIndex: 1 },
                { question: "What is the use of the 'default' case?", answer: "It runs if none of the specified 'case' values match the given variable. It's like the 'else' of a switch.", options: ["Always runs", "Runs only if no match", "Must be at the start", "None"], correctIndex: 1 },
                { question: "Which data types are NOT supported by Switch?", answer: "float, double, and boolean. It only supports exact discrete types like int, char, and String.", options: ["int", "float/double", "String", "None"], correctIndex: 1 },
                { question: "Mention two benefits of 'Enhanced Switch' (Java 14+).", answer: "1. No 'break' required (uses ->), 2. It can be used as an expression that returns a value.", options: ["Speed", "No break & Expression", "Memory", "None"], correctIndex: 1 },
                { question: "Is it possible to have multiple values in a single case in modern Java?", answer: "Yes, using commas: case 1, 2, 3 -> { ... }.", options: ["Yes", "No", "Only if static", "None"], correctIndex: 0 }
            ],
        }
    },
    {
        id: 29,
        title: "EP 29 – Student Result Analyzer Project v3.0 🔥",
        youtubeId: "AIzKCZIXH4I",
        thumbnail: "/Thumbnail/ep-29-Student Result Analyzer Project v3.0 🔥  Java Full Course.png",
        tags: ["Java", "Project"],
        notes: {
            intro: "Our biggest project yet — Result Analyser v3.0 with all conditionals (if-else, else-if, switch, ternary) combined to produce a complete, real-world student evaluation system.",
            topics: [
                "🏆 Grade System using else-if ladder (A+, A, B, C, D, F)",
                "🔀 Switch for stream recommendation (Science/Commerce/Arts)",
                "📊 Scholarship eligibility using nested if + logical operators",
                "🎓 Distinction/Topper detection using multiple conditions",
                "📝 Full formatted report card output",
            ],
            code: `public class ResultAnalyserV3 {
    public static void main(String[] args) {

        String name = "Ananya Verma";
        int maths=92, science=88, english=85, hindi=90, cs=95;

        int total = maths + science + english + hindi + cs;
        double percentage = (total / 500.0) * 100;
        boolean allPassed = maths>=33 && science>=33 &&
                           english>=33 && hindi>=33 && cs>=33;

        // Grade using else-if
        String grade = percentage>=90 ? "A+" : percentage>=80 ? "A" :
                       percentage>=70 ? "B" : percentage>=60 ? "C" :
                       percentage>=33 ? "D" : "F";

        // Stream recommendation using switch
        String stream = switch (grade) {
            case "A+", "A" -> "Science ⚗️";
            case "B" -> "Commerce 📈";
            default -> "Arts 🎨";
        };

        // Scholarship
        boolean scholarship = percentage >= 90 && allPassed;

        System.out.println("======= RESULT CARD v3.0 =======");
        System.out.println("Name       : " + name);
        System.out.printf("Total      : %d/500%n", total);
        System.out.printf("Percentage : %.2f%%%n", percentage);
        System.out.println("Grade      : " + grade);
        System.out.println("Stream     : " + stream);
        System.out.println("Status     : " + (allPassed ? "PASS ✅" : "FAIL ❌"));
        System.out.println("Scholarship: " + (scholarship ? "YES 🎉" : "No"));
    }
}`,
            quiz: [
                { question: "Which control structure is best for Grade calculations?", answer: "Else-If Ladder, because it handles ranges (percentage >= 90).", options: ["Switch", "Else-If Ladder", "Ternary", "None"], correctIndex: 1 },
                { question: "How to implement Stream recommendation logic efficiently?", answer: "Use a Switch on the student's grade (A -> Science, B -> Commerce, etc).", options: ["If-Else", "Switch", "Loop", "None"], correctIndex: 1 },
                { question: "How to check if a student has distinction in at least 2 subjects?", answer: "Use logical ORs or a counter: if ((m1>=75?1:0) + (m2>=75?1:0) + ... >= 2).", options: ["Counter logic", "Simple if", "Loop", "None"], correctIndex: 0 },
                { question: "What kind of loop would you use to process 100 students' results?", answer: "A 'For Loop', because the number of students (100) is fixed and known beforehand.", options: ["While", "For", "Do-While", "None"], correctIndex: 1 },
                { question: "Difference between using Switch vs if-else for stream recommendation.", answer: "Switch is more readable for discrete values (A, B, C), while if-else is more robust for range-based logic.", options: ["Speed", "Readability", "Memory", "None"], correctIndex: 1 }
            ],
        }
    },
    {
        id: 30,
        title: "EP 30 – Need of Loops in Java | Real Life Examples | DRY Principle",
        youtubeId: "z7FeFJejgHA",
        thumbnail: "/Thumbnail/ep-30-Need of Loops in Java  Real Life Examples Explained  DRY Principle.png",
        tags: ["Java", "Loops"],
        notes: {
            intro: "Loops = एक ही काम को automatically repeat karna. Without loops: printing 1-100 would need 100 print statements! DRY principle: Don't Repeat Yourself.",
            topics: [
                "🔄 Why loops? Repeat code without copy-paste (DRY principle)",
                "📋 Loop types in Java: while, do-while, for, for-each",
                "🌍 Real-world loops: Sending 1000 emails, processing 10000 transactions",
                "⚙️ Loop components: initialization, condition, update",
                "🔑 Key concepts: iteration, loop variable, termination condition",
            ],
            code: `public class WhyLoops {
    public static void main(String[] args) {

        // WITHOUT loops (bad approach):
        System.out.println(1);
        System.out.println(2);
        System.out.println(3);
        // ... 100 more lines?? ❌

        System.out.println("--- With while loop ---");

        // WITH loops (proper approach):
        int i = 1;
        while (i <= 10) {
            System.out.println(i);  // Print 1 to 10
            i++;                    // Move to next number
        }

        System.out.println("--- Sum of 1 to 100 ---");
        int sum = 0;
        int counter = 1;
        while (counter <= 100) {
            sum += counter;  // Add each number to sum
            counter++;
        }
        System.out.println("Sum = " + sum); // 5050
    }
}`,
            quiz: [
                { question: "Define the 'DRY principle' in your own words.", answer: "Don't Repeat Yourself — avoid code duplication.", options: ["Do Repeat Yourself", "Don't Repeat Yourself", "Do Run Yearly", "None"], correctIndex: 1 },
                { question: "What happens to the CPU if a program enters an 'Infinite Loop'?", answer: "It consumes 100% CPU usage, potentially causing the program or system to hang.", options: ["Stops", "100% CPU usage", "Memory leak", "None"], correctIndex: 1 },
                { question: "Difference between 'Iteration' and 'Condition'.", answer: "Iteration is one cycle of the loop; Condition is the check that decides whether to continue.", options: ["Same", "Iteration=Cycle, Condition=Check", "Condition=Cycle, Iteration=Check", "None"], correctIndex: 1 },
                { question: "Can you simulate any loop using an if-statement and a label?", answer: "Yes, using 'goto' style labels (though not recommended in Java).", options: ["Yes", "No", "Only if static", "None"], correctIndex: 0 },
                { question: "Why do we need Loops in real-world software development?", answer: "To process large datasets, automate repetitive tasks, and handle dynamic user inputs efficiently.", options: ["For fun", "Automation & Efficiency", "To make it slow", "None"], correctIndex: 1 }
            ],
        }
    },
    {
        id: 31,
        title: "EP 31 – While Loop in Java 💯 | From Basics to Advanced",
        youtubeId: "lYVyY7B5gLw",
        thumbnail: "/Thumbnail/ep-31-👉 One Video Enough to Master While Loop 💯  From Basics to Advanced.png",
        tags: ["Java", "Loops"],
        notes: {
            intro: "While loop = pre-condition loop। Condition पहले check होती है, body बाद में execute होती है। Condition false होते ही loop stop ho jata hai.",
            topics: [
                "📋 Syntax: while (condition) { // body }",
                "✅ Pre-condition: condition checked BEFORE each iteration",
                "⚠️ If condition is false from start, body NEVER executes (0 times)",
                "♾️ Infinite loop: while(true) — use break to exit",
                "🔄 Use when: number of iterations is NOT known in advance",
            ],
            code: `public class WhileLoop {
    public static void main(String[] args) {

        // Basic while loop
        int i = 1;
        while (i <= 5) {
            System.out.println("Count: " + i);
            i++;
        }
        // Output: 1, 2, 3, 4, 5

        // User input simulation: keep asking until valid
        // (using counter to simulate user input)
        int attempts = 0;
        int maxAttempts = 3;
        boolean loggedIn = false;

        while (attempts < maxAttempts && !loggedIn) {
            attempts++;
            System.out.println("Attempt " + attempts + ": Checking PIN...");
            if (attempts == 2) { // Simulate correct PIN on attempt 2
                loggedIn = true;
            }
        }

        System.out.println(loggedIn ? "Login Success ✅" : "Account Locked ❌");

        // Reverse while loop
        int n = 5;
        while (n >= 1) {
            System.out.print(n + " ");
            n--;
        }
        // Output: 5 4 3 2 1
    }
}`,
            quiz: [
                { question: "What is a 'Pre-condition' loop? Give an example.", answer: "A loop where the condition is checked before the body executes (e.g., while loop).", options: ["Do-While", "While", "For", "None"], correctIndex: 1 },
                { question: "How many times will a while loop run if the condition is false from start?", answer: "Zero times.", options: ["1", "0", "Infinite", "None"], correctIndex: 1 },
                { question: "Can you declare a variable inside the while condition parentheses?", answer: "No, you must declare it before the loop.", options: ["Yes", "No", "Only if static", "None"], correctIndex: 1 },
                { question: "Explain the importance of the 'update expression' (increment/decrement).", answer: "It changes the loop variable to eventually make the condition false, preventing infinite loops.", options: ["Speed", "Prevents infinite loop", "Memory", "None"], correctIndex: 1 },
                { question: "What is a 'Sentinel Value' in a while loop?", answer: "A special value used to terminate the loop (e.g., -1 to exit).", options: ["Start value", "Termination value", "Increment", "None"], correctIndex: 1 }
            ],
        }
    },
    {
        id: 32,
        title: "EP 32 – Do While Loop in Java | Why It Exists + Real Life Example 🔥",
        youtubeId: "IJnotbUSbfI",
        thumbnail: "/Thumbnail/ep-32-do-while-loop-java.png",
        tags: ["Java", "Loops"],
        notes: {
            intro: "Do-while = exit-controlled loop। Body पहले execute होती है, condition बाद में check होती है। Guaranteed minimum ONE execution — even if condition is false!",
            topics: [
                "📋 Syntax: do { // body } while (condition);",
                "✅ Post-condition: condition checked AFTER each run",
                "🎯 Key difference: body executes at LEAST ONCE even if condition false",
                "🏧 ATM analogy: Show menu first, THEN check if user wants to continue",
                "🔄 Use when: you must run code once before checking to continue",
            ],
            code: `public class DoWhileDemo {
    public static void main(String[] args) {

        // Basic do-while
        int i = 1;
        do {
            System.out.println("Count: " + i);
            i++;
        } while (i <= 5);
        // Output: 1, 2, 3, 4, 5

        // Key difference: runs even when condition is false!
        int x = 100;
        do {
            System.out.println("This runs ONCE even though x > 5");
        } while (x <= 5);  // false! But body already ran once

        // ATM Menu simulation (classic do-while use case)
        int choice;
        int balance = 10000;
        int menuShown = 0;

        do {
            menuShown++;
            System.out.println("\\n=== ATM MENU (Show #" + menuShown + ") ===");
            System.out.println("1. Check Balance");
            System.out.println("2. Withdraw");
            System.out.println("3. Exit");

            choice = menuShown; // Simulate user choosing options
            if (choice == 1) {
                System.out.println("Balance: ₹" + balance);
            }
        } while (choice != 3 && menuShown < 3); // Loop until Exit or 3 attempts
    }
}`,
            quiz: [
                { question: "What is an 'Exit-controlled' loop? Explain with do-while.", answer: "It's a loop where the condition is checked AFTER the body runs. It ensures the code runs at least once regardless of the condition.", options: ["While", "Do-While", "For", "None"], correctIndex: 1 },
                { question: "Guaranteed minimum execution count of do-while loop.", answer: "At least 1 time.", options: ["0", "1", "Infinite", "None"], correctIndex: 1 },
                { question: "Why is do-while preferred for Menu-driven programs?", answer: "Because you need to display the menu to the user at least once before they can decide to exit.", options: ["Speed", "Menu display", "Memory", "None"], correctIndex: 1 },
                { question: "Where is the semicolon placed in a do-while syntax?", answer: "A semicolon is required immediately after the while condition at the very end: do { ... } while(cond);", options: ["After do", "After while", "After body", "None"], correctIndex: 1 },
                { question: "How is a do-while different from a standard while loop in flowcharts?", answer: "The decision diamond comes AFTER the processing box in do-while, and BEFORE it in a standard while loop.", options: ["Diamond position", "Speed", "Memory", "None"], correctIndex: 0 }
            ],
        }
    },
    {
        id: 33,
        title: "EP 33 – For Loop in Java | You're Using Loops WRONG 😳",
        youtubeId: "xQmsxjF7XP8",
        thumbnail: "/Thumbnail/ep-33-for-loop-wrong-java.png",
        tags: ["Java", "Loops"],
        notes: {
            intro: "For loop = most compact loop। जब iterations की संख्या पहले से पता हो तब for loop use karo. initialization, condition, aur update teeno ek line mein!",
            topics: [
                "📋 Syntax: for (init; condition; update) { body }",
                "🎯 Best when: number of iterations KNOWN beforehand",
                "⚡ Most compact: all 3 parts in one line",
                "🔄 Variable scope: loop variable lives only inside the loop",
                "📊 Common patterns: 1 to n, n to 1, step by 2s, even/odd filtering",
            ],
            code: `public class ForLoopDemo {
    public static void main(String[] args) {

        // Basic for loop: 1 to 10
        for (int i = 1; i <= 10; i++) {
            System.out.print(i + " ");
        }
        System.out.println(); // New line

        // Reverse: 10 to 1
        for (int i = 10; i >= 1; i--) {
            System.out.print(i + " ");
        }
        System.out.println();

        // Step by 2: Even numbers
        System.out.println("Even numbers:");
        for (int i = 2; i <= 20; i += 2) {
            System.out.print(i + " ");
        }
        System.out.println();

        // Sum of 1 to N
        int sum = 0;
        for (int i = 1; i <= 100; i++) {
            sum += i;
        }
        System.out.println("Sum 1-100: " + sum); // 5050

        // Multiplication table
        int n = 5;
        System.out.println("Table of " + n + ":");
        for (int i = 1; i <= 10; i++) {
            System.out.println(n + " × " + i + " = " + (n * i));
        }
    }
}`,
            quiz: [
                { question: "Mention 3 parts of a For Loop signature.", answer: "1. Initialization, 2. Condition, and 3. Increment/Decrement.", options: ["Init, Cond, Update", "Init, Body, Update", "Cond, Body, Update", "None"], correctIndex: 0 },
                { question: "Is it possible to leave any part of the For signature empty? (e.g. for(;;))", answer: "Yes, for(;;) is a valid infinite loop. All parts are optional, though the semicolons are mandatory.", options: ["Yes", "No", "Only if static", "None"], correctIndex: 0 },
                { question: "What is the 'Scope' of the variable 'i' declared inside 'for(int i...)'?", answer: "It is only available within the loop itself. Once the loop finishes, 'i' is removed from memory.", options: ["Global", "Local to loop", "Class", "None"], correctIndex: 1 },
                { question: "Difference between i++ and ++i inside the For update expression.", answer: "Technically none. In a for-loop update, the increment happens in isolation, so both increase i by 1 for the next check.", options: ["Speed", "None", "Memory", "None"], correctIndex: 1 },
                { question: "When should you choose 'For' over 'While' loop?", answer: "Choose 'For' when the number of iterations is known. Choose 'While' when you are waiting for a specific event or condition to change.", options: ["Always", "Known iterations", "Never", "None"], correctIndex: 1 }
            ],
        }
    },
    {
        id: 34,
        title: "EP 34 – Nested For Loop in Java | Complete Tutorial with Examples",
        youtubeId: "BgOCdxjnJIk",
        thumbnail: "/Thumbnail/ep-34-Nested For Loop in Java  Complete Tutorial with Examples.png",
        tags: ["Java", "Loops"],
        notes: {
            intro: "Nested loops = loop के अंदर loop। Inner loop outer loop के हर iteration पर completely run होता है। Matrix, 2D patterns, grid systems — all use nested loops.",
            topics: [
                "🔄 Outer loop controls ROWS, inner loop controls COLUMNS",
                "⚡ Time complexity: O(n²) for nested — think carefully!",
                "📐 Matrix printing: nested loop standard pattern",
                "⭐ Basic star pattern: right-angle triangle",
                "🧮 Multiplication table: classic nested loop use case",
            ],
            code: `public class NestedLoopDemo {
    public static void main(String[] args) {

        // Matrix printing (3×4)
        System.out.println("Matrix:");
        for (int row = 1; row <= 3; row++) {
            for (int col = 1; col <= 4; col++) {
                System.out.print("[" + row + "," + col + "] ");
            }
            System.out.println(); // New row
        }

        // Basic Star Pattern (Right-angle triangle)
        System.out.println("\\nStar Pattern:");
        for (int i = 1; i <= 5; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}`,
            quiz: [
                { question: "Inner vs Outer loop: which one finishes its iterations first?", answer: "The Inner loop finishes all its iterations for every single iteration of the Outer loop.", options: ["Outer", "Inner", "Both", "None"], correctIndex: 1 },
                { question: "How many times does the inner loop run if outer=5 and inner=10?", answer: "50 times (5 * 10).", options: ["5", "10", "50", "None"], correctIndex: 2 },
                { question: "Pattern for printing a 5x5 Square of stars.", answer: "Two nested loops, both running from 1 to 5.", options: ["One loop", "Two nested loops", "Three loops", "None"], correctIndex: 1 },
                { question: "What is the Time Complexity of a nested loop (i, j)?", answer: "O(n²).", options: ["O(n)", "O(n²)", "O(1)", "None"], correctIndex: 1 },
                { question: "How to skip one iteration of the inner loop and continue the outer loop?", answer: "Use a labeled 'continue' statement.", options: ["break", "continue", "return", "None"], correctIndex: 1 }
            ],
        }
    },
    {
        id: 35,
        title: "EP 35 – ATM Machine Project in Java 💳 | Java Full Course",
        youtubeId: "WQz4v5ZERJE",
        thumbnail: "/Thumbnail/ep-35-Can a Beginner Build an ATM in Java Yes — And So Can You 💳  Java Full Course.png",
        tags: ["Java", "Project"],
        notes: {
            intro: "The ultimate loop + conditionals project! ATM simulation with PIN verification (3 attempts using do-while), menu navigation (switch), and balance management (static variable).",
            topics: [
                "🏧 Project: ATM System combining ALL concepts learned so far",
                "🔐 PIN Verification: do-while loop with 3 attempt counter",
                "📋 Menu Navigation: switch statement for 4 options",
                "💰 Balance: static variable (shared across sessions)",
                "♾️ Loop until Exit: while(true) + break on choice 4",
            ],
            code: `public class ATMSystem {

    static double balance = 10000.00;
    static int correctPin = 1234;

    public static void main(String[] args) {

        // PIN Verification using do-while (3 attempts)
        int attempts = 0;
        boolean isVerified = false;

        do {
            int enteredPin = 1234; // Simulated correct pin
            attempts++;

            if (enteredPin == correctPin) {
                isVerified = true;
                System.out.println("✅ PIN Verified! Welcome!");
            } else {
                System.out.println("❌ Wrong PIN. Attempt " + attempts + "/3");
            }
        } while (!isVerified && attempts < 3);

        if (!isVerified) {
            System.out.println("🔒 Account Locked!");
            return; // Exit program
        }

        // Menu using while + switch
        int choice = 0;
        while (choice != 4) {
            System.out.println("\\n=== ATM MENU ===");
            System.out.println("1. Check Balance");
            System.out.println("2. Deposit");
            System.out.println("3. Withdraw");
            System.out.println("4. Exit");

            choice = 1; // Simulate user choice
            switch (choice) {
                case 1 -> System.out.printf("Balance: ₹%.2f%n", balance);
                case 2 -> { balance += 5000; System.out.println("Deposited ₹5000"); }
                case 3 -> {
                    double amt = 2000;
                    if (balance >= amt) { balance -= amt; System.out.println("Withdrawn ₹" + amt); }
                    else System.out.println("Insufficient balance!");
                }
                case 4 -> System.out.println("Thank you! Visit again 🙏");
                default -> System.out.println("Invalid choice!");
            }
            break; // Break simulation loop
        }
    }
}`,
            quiz: [
                { question: "Why is 'Static' balance used in the ATM project?", answer: "To ensure the balance persists across different method calls or sessions within the class.", options: ["Speed", "Persistence", "Memory", "None"], correctIndex: 1 },
                { question: "Logic for '3 attempts PIN verification' in do-while.", answer: "Use a counter variable and loop while (attempts < 3 && !isVerified).", options: ["For loop", "Do-while with counter", "If-else", "None"], correctIndex: 1 },
                { question: "How to clear the console screen/input in Java? (Conceptual)", answer: "There is no built-in Java command; usually done by printing many newlines or using OS-specific commands.", options: ["System.clear()", "Newlines", "Delete", "None"], correctIndex: 1 },
                { question: "How to loop the ATM menu until user selects 'Exit'?", answer: "Use a while(choice != 4) loop.", options: ["For", "While", "If", "None"], correctIndex: 1 },
                { question: "Which conditional structure is best for ATM menu options?", answer: "Switch statement, as it handles discrete menu choices cleanly.", options: ["If-Else", "Switch", "Ternary", "None"], correctIndex: 1 }
            ],
        }
    },
    {
        id: 36,
        title: "EP 36 – Don't Start Pattern Programming ❌ Watch This First",
        youtubeId: "OQ8-_LNw8M4",
        thumbnail: "/Thumbnail/ep-36-Don't Start Pattern Programming ❌ Watch This First.png",
        tags: ["Java", "Patterns"],
        notes: {
            intro: "Pattern programming शुरू करने से पहले सही approach समझो! Most students fail because they try to memorize patterns. The right way: understand the row-column relationship.",
            topics: [
                "🧠 Pattern Mindset: Think in terms of row (i) and column (j) relationship",
                "📐 Identify: What is printed at position (i, j)?",
                "⭐ Type 1: Right angle triangle — j goes from 1 to i",
                "🔢 Type 2: Number patterns — print i or j at (i,j)",
                "🔄 Type 3: Inverted patterns — inner loop decreases as outer increases",
            ],
            code: `public class PatternIntro {
    public static void main(String[] args) {
        int n = 5;

        // Pattern 1: Right angle star triangle
        System.out.println("Pattern 1:");
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }

        // Pattern 2: Number triangle
        System.out.println("\\nPattern 2:");
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print(j + " ");  // Print column number
            }
            System.out.println();
        }
    }
}`,
            quiz: [
                { 
                    question: "How many loops are required to print a 2D pattern?", 
                    answer: "At least two nested loops: an Outer loop for rows and an Inner loop for columns.",
                    options: ["One loop", "Two nested loops", "Three loops", "None"],
                    correctIndex: 1
                },
                { 
                    question: "Outer loop (i) usually represents which dimension (Row/Column)?", 
                    answer: "The Outer loop (i) represents the Rows (vertical dimension).",
                    options: ["Columns", "Rows", "Diagonal", "None"],
                    correctIndex: 1
                },
                { 
                    question: "What does 'System.out.println()' do after the inner loop finishes?", 
                    answer: "It moves the cursor to a new line, effectively starting a new Row in the output pattern.",
                    options: ["Prints stars", "Starts new row", "Deletes line", "None"],
                    correctIndex: 1
                },
                { 
                    question: "Logic for printing an Inverted Right-Angle Triangle.", 
                    answer: "The inner loop (j) should decrease as the outer loop (i) increases, or j should run from N down to i.",
                    options: ["Double loops", "Inner decreases", "No loops", "None"],
                    correctIndex: 1
                }
            ],
        }
    },
    {
        id: 37,
        title: "EP 37 – Need of OOPs in Java 🔥 | POP vs OOP | Why OOPs?",
        youtubeId: "Nfk5RzuZLRw",
        thumbnail: "https://img.youtube.com/vi/Nfk5RzuZLRw/maxresdefault.jpg",
        tags: ["Java", "OOPs"],
        notes: {
            intro: "OOPs का जन्म — 🔥 The most important turning point in your programming career! POP (Procedural Oriented Programming) में Data global tha, koi bhi function bina permission ke access kar sakta tha. OOPs ne Data aur Functions ko ek saath bind kiya — giving us security, structure, and real-world mapping.",
            topics: [
                "🔓 POP Problem #1: No Data Security — Global data accessible by ANY function",
                "🚫 POP Problem #2: No Reusability — Copy-paste led to duplicate code and bugs",
                "🌍 POP Problem #3: No Real-World Mapping — Data and functions were disconnected",
                "📜 POP Problem #4: Large Code Chaos — Extremely lengthy and unreadable",
                "🔧 POP Problem #5: Maintenance Nightmare — impossible to understand later",
                "🏗️ Class = Blueprint, Object = Real-world entity",
            ],
            code: `// ✅ OOP APPROACH — The Solution (OopSolution.java)
class Student {
    private String name;
    private int age;
    private int marks;

    public Student(String name, int age, int marks) {
        this.name = name;
        this.age = age;
        this.marks = marks;
    }

    public void displayInfo() {
        System.out.println("📋 Name: " + name);
        System.out.println("   Age: " + age + " | Marks: " + marks);
    }
}

public class OopSolution {
    public static void main(String[] args) {
        Student s1 = new Student("Vinay", 20, 85);
        s1.displayInfo();
    }
}`,
            quiz: [
                { 
                    question: "Explain the major flaw in POP (Procedural Programming).", 
                    answer: "Global Data exposure — any function can modify data without permission, leading to security flaws and bugs.",
                    options: ["Fast speed", "Global Data exposure", "Too few variables", "None"],
                    correctIndex: 1
                },
                { 
                    question: "What are the 4 Pillars of OOP? Name them.", 
                    answer: "Encapsulation, Inheritance, Polymorphism, and Abstraction.",
                    options: ["If, For, While", "4 Pillars (Enc/Inher/Poly/Abs)", "Classes & Objects", "None"],
                    correctIndex: 1
                },
                { 
                    question: "How does OOP ensure data security (Encapsulation)?", 
                    answer: "By making class variables 'private' and providing 'public' getter/setter methods to control access.",
                    options: ["Using passwords", "Encapsulation (Private fields)", "Deleting data", "None"],
                    correctIndex: 1
                },
                { 
                    question: "Difference between Class (Blueprint) and Object (Physical Entity).", 
                    answer: "A Class is a logical template (no memory taken); an Object is a real-world instance created from that template (memory allocated in Heap).",
                    options: ["Class=Real, Object=Design", "Class=Design, Object=Real", "Both same", "None"],
                    correctIndex: 1
                }
            ],
        }
    },
    {
        id: 38,
        title: "EP 38 – Objects, Memory Management & Method Overloading",
        youtubeId: "T2EJGxuu1yE",
        thumbnail: "https://img.youtube.com/vi/T2EJGxuu1yE/maxresdefault.jpg",
        tags: ["Java", "OOPs", "Memory"],
        notes: {
            intro: "अगर आपको ऊप्स समझ में नहीं आता तो प्रॉब्लम ऊप्स में नहीं, प्रॉब्लम यह है कि आपको बेसिक चीज़ें ही नहीं पता हैं। 99% स्टूडेंट यहीं स्किप कर देते हैं। इस वीडियो में हम समझेंगे कि ऑब्जेक्ट कैसे बनता है, Memory (Heap vs Stack) कैसे काम करती है और Method Overloading की गहराई क्या है।",
            topics: [
                "🏗️ How objects are created",
                "🧠 Role of JVM in Object Creation",
                "📦 Heap vs Stack Area",
                "♻️ Garbage Collector",
                "🏛️ Local vs Instance Variables",
                "🎭 Method Overloading",
            ],
            code: `class Test {
    int a = 5; 
    String name = "Vinay"; 

    public void display() {
        System.out.println("Value of a: " + a);
        System.out.println("Name: " + name);
    }
}

public class Main {
    public static void main(String[] args) {
        Test obj1 = new Test(); 
        obj1.display();
    }
}`,
            quiz: [
                { 
                    question: "What data is stored in the STACK memory area?", 
                    answer: "Method calls, local variables, and reference variables (primitive types and memory addresses).",
                    options: ["Objects", "Local variables & Method calls", "Classes", "None"],
                    correctIndex: 1
                },
                { 
                    question: "What data is stored in the HEAP memory area?", 
                    answer: "Objects (all non-primitive data) and their instance variables.",
                    options: ["Local variables", "Objects", "Method calls", "None"],
                    correctIndex: 1
                },
                { 
                    question: "Explain the role of the 'Garbage Collector' in Java.", 
                    answer: "It runs in the background and deletes objects from the HEAP that have no active references, freeing up memory.",
                    options: ["Deletes files", "Memory management (Unused objects)", "Cleans console", "None"],
                    correctIndex: 1
                },
                { 
                    question: "Difference between Local Variable and Instance Variable in memory.", 
                    answer: "Local lives on the Stack (temporary); Instance lives on the Heap inside the object (persists as long as object exists).",
                    options: ["Local=Heap, Instance=Stack", "Local=Stack, Instance=Heap", "Both Stack", "None"],
                    correctIndex: 1
                }
            ],
        }
    },
    {
        id: 39,
        title: "EP 39 – Constructors in Java 🔥 | Default, Parameterized & Constructor Overloading | Java Full Course 2026 #39",
        youtubeId: "hJV7qCee03I",
        thumbnail: "https://img.youtube.com/vi/hJV7qCee03I/maxresdefault.jpg",
        tags: ["Java", "OOPs", "Constructors"],
        notes: {
            intro: "जावा में कंस्ट्रक्टर (Constructor) एक बहुत ही महत्वपूर्ण टॉपिक है। यह गारंटी देता है कि जब भी ऑब्जेक्ट बनेगा, रिक्वायर्ड डाटा पूरा और बिल्कुल सही होगा! बिना कंस्ट्रक्टर के कोड जटिल और बग्स-प्रोन हो सकता है।",
            topics: [
                "🏗️ 6 Golden Rules of Constructors",
                "🛠️ Default vs No-Args Constructor",
                "📥 Parameterized Constructor & 'this' keyword",
                "🎭 Constructor Overloading - Multiple ways to create objects",
                "🔗 Constructor Chaining using this()",
                "👯 Copy Constructor - Cloning objects",
                "🔐 Private Constructor & Singleton pattern foundations"
            ],
            code: `// Comprehensive Example: All Types of Constructors
class Student {
    int roll;
    String name;

    // 1. No-Argument Constructor
    Student() {
        this(0, "Unknown"); // Calling Type 2 using this() - Chaining
        System.out.println("Default values assigned!");
    }

    // 2. Parameterized Constructor
    Student(int roll, String name) {
        this.roll = roll;
        this.name = name;
    }

    // 3. Copy Constructor
    Student(Student other) {
        this.roll = other.roll;
        this.name = other.name;
    }

    void display() {
        System.out.println("Student: " + name + " | Roll: " + roll);
    }
}

public class Main {
    public static void main(String[] args) {
        // Using Parameterized
        Student s1 = new Student(101, "Vinay");
        s1.display();

        // Using No-Args
        Student s2 = new Student();
        s2.display();

        // Using Copy Constructor
        Student s3 = new Student(s1);
        s3.display();
    }
}`,
            quiz: [
                { 
                    question: "What is the difference between a Constructor and a Method?", 
                    answer: "A Constructor has no return type and shares the same name as the class; it is used only for object initialization.",
                    options: ["Method has no return", "Constructor has no return & Class name", "Both same", "None"],
                    correctIndex: 1
                },
                { 
                    question: "What happens if you don't write any constructor in your class?", 
                    answer: "The Java compiler automatically inserts a default no-argument constructor during compilation.",
                    options: ["Compilation error", "Compiler adds default constructor", "Java crashes", "None"],
                    correctIndex: 1
                },
                { 
                    question: "What is the use of 'this' keyword in a constructor?", 
                    answer: "To resolve naming conflicts between class instance variables and constructor parameters (e.g., this.name = name).",
                    options: ["To delete object", "To resolve name conflicts", "To call other classes", "None"],
                    correctIndex: 1
                },
                { 
                    question: "Can we have a Private Constructor? If yes, why?", 
                    answer: "Yes, it's used in the Singleton design pattern to restrict object creation to only one instance managed by the class itself.",
                    options: ["No", "Yes, for Singleton pattern", "Only if static", "None"],
                    correctIndex: 1
                }
            ],
        }
    }
];
