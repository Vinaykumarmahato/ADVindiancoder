import { Link, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PageWrapper from '../components/PageWrapper';
import { PlayCircle, Library, ChevronLeft, BookOpen, Code2, Github, ExternalLink } from 'lucide-react';
import SEO from '../components/SEO';

// ─── All 37 episodes with YouTube IDs + complete notes ────────────────────────
const EPISODES = [
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
            interview: ["What is programming?", "What is a programming language?", "Why is Java platform independent?"],
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
            interview: ["Difference between Compiler and Interpreter?", "What is Bytecode in Java?", "Why is Java called platform independent?"],
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
            interview: ["Why learn Java in 2026?", "Java vs Python — which to choose?", "What is Java used for in industry?"],
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
            interview: ["What is JDK, JRE, JVM?", "Difference between JVM and JRE?", "What is JIT Compiler?", "What is Bytecode?"],
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
            interview: ["List 5 features of Java", "Why is Java considered secure?", "What is platform independence?"],
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
            interview: ["What is the role of javac?", "What happens when you run 'java Main'?"],
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
            interview: ["What is an object in Java?", "What is a class?", "What is the main method in Java?"],
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
            interview: ["What is the difference between a method and a function?", "What is method overloading?", "What does void mean?"],
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
            interview: ["What is static typing?", "What is the difference between Java and Python typing?"],
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
            interview: ["What are the types of variables in Java?", "What is variable scope?", "Difference between local and instance variables?"],
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
            interview: ["How many primitives in Java?", "What is wrapper class?", "String is primitive or object?"],
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
            interview: ["How do you store decimal in Java?", "Can a boolean store null?"],
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
            interview: ["What is type casting?", "What is loss of data in narrowing?", "Difference between implicit and explicit casting?"],
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
            interview: ["What is operator precedence?", "What is the modulo operator?"],
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
            interview: ["What is integer division in Java?", "How to check if a number is even using Java?"],
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
            interview: ["Difference between ++i and i++?", "What is the output of: int x=5; System.out.println(x++);?"],
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
            interview: ["Difference between == and equals() in Java?", "What does == compare for objects?"],
        }
    },
    {
        id: 18,
        title: "EP 18 – Logical Operators in Java (&&, ||, !)",
        youtubeId: "mYMzF7UFjOs",
        thumbnail: "/Thumbnail/ep-18-logical-operators-thumbnail.png",
        tags: ["Java", "Operators"],
        notes: {
            intro: "Logical Operators multiple conditions को combine करते हैं। Real-world decisions: Login requires username AND password. Sale discount if age > 60 OR student.",
            topics: [
                "&& (AND): Both conditions must be true → result is true",
                "|| (OR): At least one condition true → result is true",
                "! (NOT): Flips the boolean result",
                "⚡ Short-Circuit Evaluation: && stops at first false, || stops at first true (performance!)",
                "🔐 Real-world: Login validation, age checks, discount eligibility",
            ],
            code: `public class LogicalDemo {
    public static void main(String[] args) {

        boolean hasUsername = true;
        boolean hasPassword = true;
        boolean isAdmin = false;

        // AND (&&): Both must be true
        if (hasUsername && hasPassword) {
            System.out.println("Login Successful ✅");
        }

        // OR (||): At least one true
        int age = 65;
        boolean isStudent = false;
        if (age > 60 || isStudent) {
            System.out.println("Discount Eligible! 🎉");
        }

        // NOT (!)
        if (!isAdmin) {
            System.out.println("You are a regular user");
        }

        // Short-circuit: Second condition not evaluated if first is false
        int x = 0;
        if (x != 0 && 10/x > 2) { // Safe! Won't divide by zero
            System.out.println("Condition met");
        }
    }
}`,
            interview: ["What is short-circuit evaluation?", "When would you use || vs &&?"],
        }
    },
    {
        id: 19,
        title: "EP 19 – Assignment Operators in Java",
        youtubeId: "UI-hXuWQJlo",
        thumbnail: "/Thumbnail/ep-19-assignment-operators-thumbnail.png",
        tags: ["Java", "Operators"],
        notes: {
            intro: "Assignment operators variables को values assign करते हैं। Compound assignment operators (+=, -=) code को छोटा और readable बनाते हैं।",
            topics: [
                "= (Simple): x = 5 — assign 5 to x",
                "+= (Add assign): x += 3 → x = x + 3",
                "-= (Subtract assign): x -= 2 → x = x - 2",
                "*= (Multiply assign): x *= 4 → x = x * 4",
                "/= (Divide assign): x /= 2 → x = x / 2",
                "%= (Modulo assign): x %= 3 → x = x % 3",
            ],
            code: `public class AssignmentDemo {
    public static void main(String[] args) {

        int score = 100;    // Simple assignment

        score += 50;        // score = score + 50 = 150
        System.out.println("After +=: " + score);  // 150

        score -= 30;        // score = score - 30 = 120
        System.out.println("After -=: " + score);  // 120

        score *= 2;         // score = score * 2 = 240
        System.out.println("After *=: " + score);  // 240

        score /= 3;         // score = score / 3 = 80
        System.out.println("After /=: " + score);  // 80

        score %= 7;         // score = score % 7 = 3
        System.out.println("After %=: " + score);  // 3

        // Game example:
        int playerLife = 100;
        playerLife -= 25;   // Hit by enemy!
        playerLife += 10;   // Health pickup
        System.out.println("Player life: " + playerLife); // 85
    }
}`,
            interview: ["What is the difference between = and == in Java?"],
        }
    },
    {
        id: 20,
        title: "EP 20 – Bitwise Operators in Java | Binary Level Operations",
        youtubeId: "TUwb1rXDE-k",
        thumbnail: "/Thumbnail/ep-20-bitwise-operators-thumbnail.png",
        tags: ["Java", "Operators"],
        notes: {
            intro: "Bitwise operators directly binary bits पर operate करते हैं। ये encryption, file permissions, hardware programming, और performance optimization में use होते हैं।",
            topics: [
                "& (Bitwise AND): Bit 1 only if BOTH bits are 1",
                "| (Bitwise OR): Bit 1 if EITHER bit is 1",
                "^ (XOR): Bit 1 if bits are DIFFERENT",
                "~ (Bitwise NOT): Flips all bits (complement)",
                "<< (Left Shift): Multiply by 2 for each shift",
                ">> (Right Shift): Divide by 2 for each shift",
            ],
            code: `public class BitwiseDemo {
    public static void main(String[] args) {

        int a = 5;  // Binary: 0101
        int b = 3;  // Binary: 0011

        System.out.println(a & b);   // 0101 & 0011 = 0001 = 1
        System.out.println(a | b);   // 0101 | 0011 = 0111 = 7
        System.out.println(a ^ b);   // 0101 ^ 0011 = 0110 = 6
        System.out.println(~a);      // ~0101 = 1010 = -6 (2's complement)
        System.out.println(a << 1);  // 0101 << 1 = 1010 = 10 (multiply by 2)
        System.out.println(a >> 1);  // 0101 >> 1 = 0010 = 2  (divide by 2)

        // Practical: Check if number is even (fast!)
        System.out.println((a & 1) == 0 ? "Even" : "Odd"); // Odd

        // File permissions (like Linux): r=4, w=2, x=1
        int permissions = 4 | 2; // read + write = 6
        System.out.println("Permissions: " + permissions);
    }
}`,
            interview: ["How do you multiply by 2 using bitwise?", "What is XOR used for in practice?"],
        }
    },
    {
        id: 21,
        title: "EP 21 – Result Analyser Project | Java Operators Project",
        youtubeId: "1pcPoZqz08c",
        thumbnail: "/Thumbnail/ep-21-result-analyser-project.png",
        tags: ["Java", "Project"],
        notes: {
            intro: "Operators का पहला project: Student Result Analyser v2.0 — जहाँ हम सभी operators को combine करके एक meaningful application बनाते हैं।",
            topics: [
                "📊 Calculate total, average, percentage using arithmetic operators",
                "🔢 Determine pass/fail using relational operators",
                "🏆 Grade calculation using percentage ranges",
                "📝 Use all operator types in a single cohesive project",
                "🎓 Output formatted report card with all details",
            ],
            code: `public class ResultAnalyserV2 {
    public static void main(String[] args) {

        // Student Data
        String name = "Priya Sharma";
        int maths = 88, science = 92, english = 75, hindi = 80, cs = 95;

        // Calculations using Arithmetic Operators
        int total = maths + science + english + hindi + cs;
        double average = total / 5.0;
        double percentage = (total / 500.0) * 100;

        // Determine Grade using Relational Operators
        String grade;
        if (percentage >= 90) grade = "A+";
        else if (percentage >= 80) grade = "A";
        else if (percentage >= 70) grade = "B";
        else if (percentage >= 60) grade = "C";
        else grade = "F";

        // Pass/Fail (all subjects must be >= 33)
        boolean isPassed = maths >= 33 && science >= 33 && english >= 33
                        && hindi >= 33 && cs >= 33;

        // Display Report
        System.out.println("==== RESULT ANALYSER v2.0 ====");
        System.out.println("Student : " + name);
        System.out.printf("Total   : %d/500%n", total);
        System.out.printf("Avg     : %.2f%n", average);
        System.out.printf("Percent : %.2f%%%n", percentage);
        System.out.println("Grade   : " + grade);
        System.out.println("Status  : " + (isPassed ? "PASS ✅" : "FAIL ❌"));
    }
}`,
            interview: ["How to calculate percentage in Java?"],
        }
    },
    {
        id: 22,
        title: "EP 22 – Conditional Statements in Java | Complete Overview",
        youtubeId: "3eA3B1-0WSk",
        thumbnail: "/Thumbnail/ep-22-conditional-statements-thumbnail.png",
        tags: ["Java", "Conditions"],
        notes: {
            intro: "Programs को decisions लेने की ability conditional statements से आती है। Real life में: Traffic light (if red → stop), Login (if correct → allow) — same logic code में!",
            topics: [
                "🚦 Why Conditionals? Programs must take different paths based on data",
                "📋 Types: if, if-else, if-else-if ladder, nested-if, switch, ternary",
                "🌊 Control Flow: How program execution branches based on conditions",
                "🔄 Boolean Expressions: the condition must evaluate to true/false",
                "📐 Flowchart thinking: diamond shape = decision point",
            ],
            code: `// Overview of all Conditional Types in Java

public class ConditionalOverview {
    public static void main(String[] args) {

        int age = 25;
        double salary = 35000;

        // 1. Simple if
        if (age >= 18) {
            System.out.println("Eligible to vote ✅");
        }

        // 2. if-else
        if (salary > 50000) {
            System.out.println("High salary bracket");
        } else {
            System.out.println("Mid salary bracket");
        }

        // 3. Ternary (one line if-else)
        String category = (age < 18) ? "Minor" : "Adult";
        System.out.println("Category: " + category);
    }
}`,
            interview: ["What are conditional statements?", "When to use switch vs if-else?"],
        }
    },
    {
        id: 23,
        title: "EP 23 – If Statement in Java | Introduction to Conditional Statements",
        youtubeId: "aPa1OjMA6bs",
        thumbnail: "/Thumbnail/ep-23-if-statement-thumbnail.png",
        tags: ["Java", "Conditions"],
        notes: {
            intro: "if statement सबसे basic conditional structure है। यह एक single condition check करता है — अगर condition true है तो block execute होता है, otherwise skip.",
            topics: [
                "📋 Syntax: if (condition) { // code }",
                "✅ Condition must be a boolean expression (true/false)",
                "🔒 Curly braces {} define the block scope",
                "⚡ Single-line if without braces (not recommended)",
                "🌍 Real examples: age check, login, temperature alert",
            ],
            code: `public class IfStatement {
    public static void main(String[] args) {

        int temperature = 38;
        int balance = 500;
        boolean isRaining = true;

        // Basic if statement
        if (temperature > 35) {
            System.out.println("🌡️ It's very hot today!");
            System.out.println("Stay hydrated!");
        }

        // if with relational operator
        if (balance < 1000) {
            System.out.println("⚠️ Low balance alert!");
        }

        // if with boolean variable
        if (isRaining) {
            System.out.println("☔ Take an umbrella!");
        }

        // if with logical operator
        int age = 20;
        boolean hasID = true;
        if (age >= 18 && hasID) {
            System.out.println("✅ Entry allowed");
        }

        System.out.println("Program continues..."); // Always runs
    }
}`,
            interview: ["When does an if block execute?", "What happens if the condition is false in a simple if?"],
        }
    },
    {
        id: 24,
        title: "EP 24 – If-Else Statement in Java | Real Life Examples",
        youtubeId: "CSXI2E_VfKI",
        thumbnail: "/Thumbnail/ep-24-if-else-real-life-thumbnail.png",
        tags: ["Java", "Conditions"],
        notes: {
            intro: "if-else ensures exactly ONE of two paths executes. Either condition is true → A path, or false → B path. No middle ground — perfect for binary decisions!",
            topics: [
                "📋 Syntax: if (condition) { } else { }",
                "🎯 Exactly ONE branch always executes",
                "🔄 The else block is a safety net — catches all false cases",
                "🌍 Real scenarios: pass/fail, even/odd, login success/failure",
                "🏦 Bank: if (balance >= amount) withdraw else show error",
            ],
            code: `public class IfElseDemo {
    public static void main(String[] args) {

        // Scenario 1: Pass or Fail
        int marks = 45;
        if (marks >= 33) {
            System.out.println("🎉 PASS! Well done!");
        } else {
            System.out.println("❌ FAIL. Study harder.");
        }

        // Scenario 2: ATM Withdrawal
        double balance = 5000;
        double withdrawAmount = 3000;
        if (balance >= withdrawAmount) {
            balance -= withdrawAmount;
            System.out.println("✅ Withdrawn: ₹" + withdrawAmount);
            System.out.println("Balance: ₹" + balance);
        } else {
            System.out.println("❌ Insufficient balance!");
        }

        // Scenario 3: Even or Odd
        int num = 17;
        if (num % 2 == 0) {
            System.out.println(num + " is Even");
        } else {
            System.out.println(num + " is Odd"); // Prints this
        }
    }
}`,
            interview: ["Can an if-else have multiple else blocks?", "What if both conditions are set?"],
        }
    },
    {
        id: 25,
        title: "EP 25 – If-Else-If Ladder in Java | Multi-Branch Decision Making",
        youtubeId: "ZOVaRsm9QCw",
        thumbnail: "/Thumbnail/ep-25-If Else If Statement in Java in Hindi  Java Conditional Statements Tutorial.png",
        tags: ["Java", "Conditions"],
        notes: {
            intro: "When you have MORE than 2 options, use else-if ladder. Grade calculator, BMI category, salary slab — all need multiple mutually exclusive conditions.",
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
            interview: ["Why should specific conditions come before general ones?"],
        }
    },
    {
        id: 26,
        title: "EP 26 – Nested If in Java | Weather Decision App Project 🌦️",
        youtubeId: "kCe5ZCjF5mU",
        thumbnail: "/Thumbnail/ep-26-Nested If in Java (Hindi) 🔥 Real Project  Weather Decision App 🌦️.png",
        tags: ["Java", "Conditions"],
        notes: {
            intro: "Nested If = if के अंदर if. Real decisions depend on multiple layers. Weather App: first check if it's raining, THEN check temperature, THEN suggest clothing.",
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
            interview: ["What is the disadvantage of deeply nested if?", "How can you avoid nested if?"],
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
            interview: ["Write a ternary to find max of 3 numbers", "When NOT to use ternary?"],
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
            interview: ["What is fall-through in switch?", "Can switch work with String?"],
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
            interview: ["How do you combine multiple conditions in Java?"],
        }
    },
    {
        id: 30,
        title: "EP 30 – Need of Loops in Java | Real Life Examples | DRY Principle",
        youtubeId: "z7FeFJejgHA",
        thumbnail: "/Thumbnail/ep-30-Need of Loops in Java  Real Life Examples Explained  DRY Principle.png",
        tags: ["Java", "Loops"],
        notes: {
            intro: "Loops = एक ही काम को automatically repeat करना। Without loops: printing 1-100 would need 100 print statements! DRY principle: Don't Repeat Yourself.",
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
            interview: ["What is the DRY principle?", "What is an infinite loop?"],
        }
    },
    {
        id: 31,
        title: "EP 31 – While Loop in Java 💯 | From Basics to Advanced",
        youtubeId: "lYVyY7B5gLw",
        thumbnail: "/Thumbnail/ep-31-👉 One Video Enough to Master While Loop 💯  From Basics to Advanced.png",
        tags: ["Java", "Loops"],
        notes: {
            intro: "While loop = pre-condition loop। Condition पहले check होती है, body बाद में execute होती है। Condition false होते ही loop stop हो जाता है।",
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
            interview: ["When does while loop not execute at all?", "What is the difference between while and do-while?"],
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
            interview: ["When does do-while execute 0 times?", "ATM uses which loop type and why?"],
        }
    },
    {
        id: 33,
        title: "EP 33 – For Loop in Java | You're Using Loops WRONG 😳",
        youtubeId: "xQmsxjF7XP8",
        thumbnail: "/Thumbnail/ep-33-for-loop-wrong-java.png",
        tags: ["Java", "Loops"],
        notes: {
            intro: "For loop = most compact loop। जब iterations की संख्या पहले से पता हो तब for loop use करो। initialization, condition, और update तीनों एक line में!",
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
            interview: ["Difference between for and while?", "When to choose for over while?"],
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
        // Output:
        // *
        // * *
        // * * *
        // * * * *
        // * * * * *

        // How many times does inner body run?
        int count = 0;
        for (int i = 1; i <= 3; i++) {
            for (int j = 1; j <= 3; j++) {
                count++;
            }
        }
        System.out.println("Inner body ran: " + count + " times"); // 9
    }
}`,
            interview: ["How many iterations: outer 5, inner 5?", "What is time complexity of nested loops?"],
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

    // Static = shared across all operations in one session
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
            interview: ["Why use static for ATM balance?", "Which loop is best for ATM menu?"],
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

        // Pattern 3: Row number triangle
        System.out.println("\\nPattern 3:");
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print(i + " ");  // Print row number
            }
            System.out.println();
        }
    }
}`,
            interview: ["How do you approach a new pattern problem?", "What is the relationship between nested loops and patterns?"],
        }
    },
    {
        id: 37,
        title: "EP 37 – Need of OOPs in Java 🔥 | POP vs OOP | Why OOPs?",
        youtubeId: "Nfk5RzuZLRw",
        thumbnail: "https://img.youtube.com/vi/Nfk5RzuZLRw/maxresdefault.jpg",
        tags: ["Java", "OOPs"],
        notes: {
            intro: "OOPs का जन्म — 🔥 The most important turning point in your programming career! POP (Procedural Oriented Programming) में Data global था, कोई भी function बिना permission के access कर सकता था। OOPs ने Data और Functions को एक साथ bind किया — giving us security, structure, and real-world mapping.",
            topics: [
                "🔓 POP Problem #1: No Data Security — Global data accessible by ANY function",
                "🚫 POP Problem #2: No Reusability — Copy-paste led to duplicate code and bugs",
                "🌍 POP Problem #3: No Real-World Mapping — Data and functions were disconnected",
                "📜 POP Problem #4: Large Code Chaos — Extremely lengthy and unreadable",
                "🔧 POP Problem #5: Maintenance Nightmare — impossible to understand later",
                "💡 The Birth of OOPs (1960s-1970s) — Binding Data + Functions together",
                "🏗️ Class = Blueprint, Object = Real-world entity",
                "🔒 Encapsulation — private keyword, controlled access via setters",
                "🧬 Inheritance — extends keyword, code reusability",
                "🎭 Polymorphism — same method name, different behaviors",
                "🎨 Abstraction — hiding complexity, showing essentials",
            ],
            code: `// ════════════════════════════════════════════════════════════
// ❌ POP APPROACH — The Problem (PopExample.java)
// ════════════════════════════════════════════════════════════
public class PopExample {

    // 🌍 GLOBAL DATA — Accessible by EVERYONE, No Protection!
    static String studentName = "Vinay";
    static int studentAge = 20;
    static int studentMarks = 85;

    static void displayStudentInfo() {
        System.out.println("📋 Name: " + studentName);
        System.out.println("   Age: " + studentAge);
        System.out.println("   Marks: " + studentMarks);
    }

    // ❌ No validation! Direct change!
    static void updateMarks(int newMarks) {
        studentMarks = newMarks;
    }

    // ⚠️ Data corruption — marks = -99, age = -5
    static void corruptData() {
        studentMarks = -99; // ❌ Invalid but accepted!
        studentAge = -5;    // ❌ Invalid but accepted!
    }

    public static void main(String[] args) {
        displayStudentInfo();
        updateMarks(-99);     // ❌ Accepted silently!
        corruptData();        // ❌ No error!
        studentAge = -100;    // ❌ Direct global access!
        displayStudentInfo(); // Data is CORRUPTED
    }
}

// ════════════════════════════════════════════════════════════
// ✅ OOP APPROACH — The Solution (OopSolution.java)
// ════════════════════════════════════════════════════════════
class Student {
    // 🔒 PRIVATE DATA — No outside access!
    private String name;
    private int age;
    private int marks;

    public Student(String name, int age, int marks) {
        this.name = name;
        setAge(age);
        setMarks(marks);
    }

    // ✅ Setter with VALIDATION
    public void setMarks(int newMarks) {
        if (newMarks >= 0 && newMarks <= 100) {
            this.marks = newMarks;
            System.out.println("   ✅ Marks updated to: " + newMarks);
        } else {
            System.out.println("   ❌ REJECTED! Invalid marks: " + newMarks);
        }
    }

    public void setAge(int newAge) {
        if (newAge > 0 && newAge <= 150) {
            this.age = newAge;
        } else {
            System.out.println("   ❌ REJECTED! Invalid age: " + newAge);
        }
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

        s1.setMarks(-99);  // ❌ REJECTED!
        s1.setAge(-5);     // ❌ REJECTED!
        s1.setMarks(92);   // ✅ ACCEPTED!
        s1.displayInfo();  // Data is SAFE! ✅
    }
}`,
            interview: [
                "What is the difference between POP and OOP?",
                "Why was OOPs introduced? What problems did POP have?",
                "Name the 4 pillars of OOPs.",
                "What is Encapsulation and how does it solve data security?",
                "Can you give a real-world example of why global data is dangerous?",
            ],
        }
    },
];

// ─── Component ────────────────────────────────────────────────────────────────
const CourseTutorialPage = () => {
    const [searchParams] = useSearchParams();
    const epQuery = searchParams.get('ep');

    const [activeIndex, setActiveIndex] = useState(() => {
        if (epQuery) {
            const index = EPISODES.findIndex(e => e.id === parseInt(epQuery));
            return index !== -1 ? index : 0;
        }
        return 0;
    });

    const [activeTab, setActiveTab] = useState<'notes' | 'code' | 'interview'>('notes');

    useEffect(() => {
        if (epQuery) {
            const index = EPISODES.findIndex(e => e.id === parseInt(epQuery));
            if (index !== -1) {
                setActiveIndex(index);
                // Scroll to top of notes/video when episode changes
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    }, [epQuery]);

    const ep = EPISODES[activeIndex];

    const courseSchema = {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "Java Full Course 2026: Zero to Hero",
        "description": ep.notes.intro,
        "provider": {
            "@type": "Organization",
            "name": "ADV Indian Coder",
            "sameAs": "https://advindiancoder.com"
        },
        "hasCourseInstance": {
            "@type": "CourseInstance",
            "courseMode": "Online",
            "instructor": {
                "@type": "Person",
                "name": "Vinay"
            }
        }
    };

    return (
        <PageWrapper>
            <SEO 
                title={ep.title} 
                description={`${ep.title}. ${ep.notes.intro} Learn Java programming from scratch with complete notes, code, and interview questions.`}
                ogType="course"
                schema={courseSchema}
            />
            <div className="min-h-screen bg-[#050914] text-white">
                <div className="absolute top-0 w-full h-[400px] bg-gradient-to-b from-red-700/10 to-transparent pointer-events-none" />

                <div className="max-w-[1500px] mx-auto px-4 lg:px-8 py-28 relative z-10">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-8">
                        <Link to="/courses" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm group">
                            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            Back to Courses
                        </Link>
                    </div>

                    <div className="mb-8">
                        <h1 className="text-3xl md:text-5xl font-black mb-3">
                            Java Full Course <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">2026</span>
                        </h1>
                        <p className="text-gray-400 text-base md:text-lg flex items-center flex-wrap gap-2">
                            Zero to Hero • <span className="text-white font-semibold">{EPISODES.length} Episodes</span> • 100% Free on YouTube
                            <span className="bg-green-500/20 text-green-400 text-[10px] font-black px-3 py-1 rounded-full border border-green-500/30 shadow-[0_0_15px_rgba(34,197,94,0.3)] animate-pulse flex items-center gap-1.5 ml-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                ONGOING PLAYLIST
                            </span>
                        </p>
                    </div>

                    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

                        {/* ── LEFT: Player + Notes ── */}
                        <div className="xl:col-span-2 flex flex-col gap-5">

                            {/* YouTube Embed */}
                            <div className="bg-black rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.7)]">
                                <div className="aspect-video">
                                    <iframe
                                        key={ep.youtubeId}
                                        className="w-full h-full"
                                        src={`https://www.youtube.com/embed/${ep.youtubeId}?autoplay=0&rel=0`}
                                        title={ep.title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                            </div>

                            {/* Video Title + Tags */}
                            <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-5">
                                <div className="flex items-start justify-between gap-4 mb-3">
                                    <h2 className="text-lg md:text-xl font-bold text-white leading-snug flex-1">{ep.title}</h2>
                                    <a
                                        href={`https://www.youtube.com/watch?v=${ep.youtubeId}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-shrink-0 flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors"
                                    >
                                        <ExternalLink className="w-3.5 h-3.5" />
                                        YouTube
                                    </a>
                                    <Link
                                        to="/adv-lab"
                                        className="flex-shrink-0 flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors ml-2"
                                    >
                                        <Code2 className="w-3.5 h-3.5" />
                                        ADV Lab
                                    </Link>
                                </div>
                                <div className="flex gap-2 flex-wrap">
                                    {ep.tags.map((tag, i) => (
                                        <span key={i} className="text-xs font-semibold text-red-300 bg-red-500/10 border border-red-500/20 px-3 py-1 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                    <span className="text-xs text-gray-500 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                                        EP {String(ep.id).padStart(2, '0')} / {EPISODES.length}
                                    </span>
                                </div>
                            </div>

                            {/* Notes Tabs */}
                            <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
                                {/* Tab Bar */}
                                <div className="flex border-b border-white/10">
                                    <button onClick={() => setActiveTab('notes')} className={`flex items-center gap-2 px-5 py-4 text-sm font-semibold transition-colors ${activeTab === 'notes' ? 'text-white border-b-2 border-red-500' : 'text-gray-400 hover:text-white'}`}>
                                        <BookOpen className="w-4 h-4" /> Notes
                                    </button>
                                    <button onClick={() => setActiveTab('code')} className={`flex items-center gap-2 px-5 py-4 text-sm font-semibold transition-colors ${activeTab === 'code' ? 'text-white border-b-2 border-red-500' : 'text-gray-400 hover:text-white'}`}>
                                        <Code2 className="w-4 h-4" /> Code
                                    </button>
                                    <button onClick={() => setActiveTab('interview')} className={`flex items-center gap-2 px-5 py-4 text-sm font-semibold transition-colors ${activeTab === 'interview' ? 'text-white border-b-2 border-red-500' : 'text-gray-400 hover:text-white'}`}>
                                        💼 Interview
                                    </button>
                                    <a
                                        href="https://github.com/Vinaykumarmahato/Java-Full-Course-2026-Zero-to-Pro-Hindi-"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="ml-auto flex items-center gap-2 px-5 py-4 text-sm text-gray-400 hover:text-white transition-colors"
                                    >
                                        <Github className="w-4 h-4" /> GitHub
                                    </a>
                                </div>

                                {/* Tab Content */}
                                <div className="p-6">
                                    {activeTab === 'notes' && (
                                        <div className="space-y-5">
                                            <p className="text-gray-300 leading-relaxed text-sm md:text-base border-l-4 border-red-500 pl-4 py-1 bg-red-500/5 rounded-r-xl">
                                                {ep.notes.intro}
                                            </p>
                                            <h3 className="text-white font-bold text-base">📚 Topics Covered</h3>
                                            <ul className="space-y-2">
                                                {ep.notes.topics.map((topic, i) => (
                                                    <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                                                        <span className="text-red-400 font-bold mt-0.5 shrink-0">→</span>
                                                        <span className="leading-relaxed">{topic}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {activeTab === 'code' && (
                                        <div>
                                            <div className="flex items-center gap-2 mb-3">
                                                <div className="flex gap-1.5">
                                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                                </div>
                                                <span className="text-xs text-gray-500 font-mono">EP{String(ep.id).padStart(2,'0')}.java</span>
                                            </div>
                                            <pre className="bg-[#0d1117] text-green-300 text-sm p-4 rounded-xl overflow-x-auto leading-relaxed font-mono border border-white/10 whitespace-pre-wrap">
                                                {ep.notes.code}
                                            </pre>
                                        </div>
                                    )}

                                    {activeTab === 'interview' && (
                                        <div className="space-y-3">
                                            <p className="text-gray-400 text-sm mb-4">Frequently asked interview questions from this episode:</p>
                                            {ep.notes.interview.map((q, i) => (
                                                <div key={i} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
                                                    <span className="text-red-400 font-bold text-sm shrink-0">Q{i+1}.</span>
                                                    <span className="text-gray-200 text-sm leading-relaxed">{q}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Prev/Next */}
                            <div className="flex gap-3">
                                <button
                                    onClick={() => { setActiveIndex(i => Math.max(0, i-1)); setActiveTab('notes'); }}
                                    disabled={activeIndex === 0}
                                    className="flex-1 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all font-semibold text-sm"
                                >
                                    ← Previous Episode
                                </button>
                                <button
                                    onClick={() => { setActiveIndex(i => Math.min(EPISODES.length-1, i+1)); setActiveTab('notes'); }}
                                    disabled={activeIndex === EPISODES.length-1}
                                    className="flex-1 py-3 rounded-xl border border-red-500/30 bg-red-500/10 hover:bg-red-500/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all font-semibold text-sm text-red-300"
                                >
                                    Next Episode →
                                </button>
                            </div>
                        </div>

                        {/* ── RIGHT: Playlist Sidebar ── */}
                        <div className="xl:col-span-1">
                            <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 flex flex-col sticky top-24" style={{ maxHeight: '88vh' }}>
                                <div className="p-5 border-b border-white/10 flex items-center justify-between bg-[#080f20] rounded-t-2xl">
                                    <h3 className="font-bold flex items-center gap-2 text-base">
                                        <Library className="w-5 h-5 text-red-500" />
                                        Java Playlist
                                    </h3>
                                    <div className="flex items-center gap-2">
                                        <span className="bg-green-500/20 text-green-400 text-[10px] font-black px-2 py-1 rounded-full border border-green-500/30 animate-pulse">
                                            ONGOING
                                        </span>
                                        <span className="text-xs text-white bg-red-500/20 border border-red-500/30 px-3 py-1 rounded-full font-mono">
                                            {EPISODES.length} Videos
                                        </span>
                                    </div>
                                </div>

                                <div className="flex-1 overflow-y-auto p-2 space-y-1" style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(255,255,255,0.1) transparent' }}>
                                    {EPISODES.map((video, index) => {
                                        const isActive = activeIndex === index;
                                        return (
                                            <button
                                                key={video.id}
                                                onClick={() => { setActiveIndex(index); setActiveTab('notes'); }}
                                                className={`w-full text-left flex gap-3 p-2.5 rounded-xl transition-all duration-200 ${isActive ? 'bg-red-500/15 border border-red-500/40' : 'hover:bg-white/5 border border-transparent'}`}
                                            >
                                                <div className="relative w-24 h-14 flex-shrink-0 bg-black rounded-lg overflow-hidden border border-white/10">
                                                    <img src={video.thumbnail} alt="" className="w-full h-full object-cover" />
                                                    {isActive && (
                                                        <div className="absolute inset-0 bg-red-600/50 flex items-center justify-center">
                                                            <PlayCircle className="w-5 h-5 text-white" />
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="flex flex-col justify-center flex-1 min-w-0">
                                                    <span className={`text-xs font-semibold leading-snug line-clamp-2 ${isActive ? 'text-white' : 'text-gray-300'}`}>
                                                        {video.title}
                                                    </span>
                                                    <span className="text-[11px] text-gray-500 mt-1">EP {String(video.id).padStart(2, '0')}</span>
                                                </div>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageWrapper>
    );
};

export default CourseTutorialPage;
