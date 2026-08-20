import React, { useState } from 'react';
import CoursePageLayout from '../../components/CoursePageLayout';
import { Coffee, Code, BookOpen, Lightbulb, FileText, Layers, Cpu, Check, AlertTriangle } from 'lucide-react';
import CodeBlock from '../../components/CodeBlock';
import MermaidDiagram from '../../components/MermaidDiagram';

interface JavaTopic {
    id: string;
    title: string;
    definition: string;
    syntax?: string;
    codeSnippet?: string;
    realLifeScenario?: string;
    content: React.ReactNode;
}

const JavaCoursePage: React.FC = () => {
    const [activeTopicIndex, setActiveTopicIndex] = useState(0);

    const courseData: JavaTopic[] = [
        {
            id: 'java-introduction',
            title: '1. Java Introduction & JVM Architecture',
            definition: 'Java is a class-based, object-oriented programming language engineered for platform independence via the Write Once, Run Anywhere (WORA) paradigm.',
            syntax: `// Java Application Source Standard Structure (.java file)
public class MainClassName {
    public static void main(String[] args) {
        // Entry point method execution block
    }
}`,
            codeSnippet: `public class Main {
    public static void main(String[] args) {
        System.out.println("Welcome to Advanced Java Engineering!");
        System.out.println("Java Virtual Machine (JVM) initialized successfully.");
    }
}`,
            realLifeScenario: 'Enterprise banking systems (like HDFC, ICICI, HSBC) rely on Java JVM bytecode execution across heterogeneous cloud servers (Linux/Windows) without recompiling source code.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-md">
                        <h4 className="flex items-center text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h4>
                        <p>Java code compiles into intermediate <code className="text-cyan-600 font-mono">Bytecode (.class)</code>, which is executed by the <code className="text-cyan-600 font-mono">Java Virtual Machine (JVM)</code>. The JVM features a Just-In-Time (JIT) compiler that translates hot code paths into machine code at runtime.</p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-md">
                        <h4 className="flex items-center text-lg font-bold text-blue-800 dark:text-blue-300 mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h4>
                        <p>Think of the JVM as a universal translator. You speak your language (Java), and the translator (JVM) converts it instantly to whichever local dialect (Windows, Mac, Linux) the listener understands, without you needing to learn the local dialect.</p>
                    </div>

                    <div>
                        <h4 className="flex items-center text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">
                            <Layers className="w-5 h-5 mr-2" /> Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph LR
    A[Java Source Code] -->|javac| B[Bytecode]
    B --> C{JVM}
    C -->|Class Loader| D[Memory Area]
    D --> E[Execution Engine]
    E --> F[JIT Compiler]
    E --> G[Garbage Collector]`} />
                    </div>

                    <div>
                        <h4 className="flex items-center text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">
                            <Code className="w-5 h-5 mr-2" /> Sample Code
                        </h4>
                        <CodeBlock code={`public class JvmTest {
    public static void main(String[] args) {
        System.out.println("Running on JVM version: " + System.getProperty("java.vm.version"));
    }
}`} lang="java" filename="JvmTest.java" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-md">
                        <h4 className="flex items-center text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h4>
                        <p>Enterprise banking systems use Java because the same compiled <code className="text-cyan-600 font-mono">.class</code> files can run on their diverse mix of legacy mainframe Linux servers and modern Windows developer machines without recompilation.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="flex items-center text-lg font-bold mb-2">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" /> Advantages
                            </h4>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Platform Independence (Write Once, Run Anywhere)</li>
                                <li>Strong memory management with Garbage Collection</li>
                                <li>Highly secure execution environment</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="flex items-center text-lg font-bold mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" /> Disadvantages / Limitations
                            </h4>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Slower startup time compared to compiled languages like C++</li>
                                <li>Higher memory consumption</li>
                                <li>Lack of low-level memory manipulation (no pointers)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'java-get-started',
            title: '2. Environment Setup (JDK vs JRE vs JVM)',
            definition: 'The JDK (Java Development Kit) includes tools needed to develop Java programs, while the JRE provides the libraries to run them, and JVM handles execution.',
            syntax: `/* CLI Commands to verify Java installation */
$ javac -version   # Checks Java Compiler version
$ java -version    # Checks JVM Runtime environment`,
            codeSnippet: `public class SystemCheck {
    public static void main(String[] args) {
        String javaVersion = System.getProperty("java.version");
        String osName = System.getProperty("os.name");
        System.out.println("Running Java Version: " + javaVersion);
        System.out.println("Operating System: " + osName);
    }
}`,
            realLifeScenario: 'CI/CD deployment pipelines (Jenkins, GitHub Actions) compile code with JDK and package lightweight JRE runner containers for Docker microservice deployments.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-md">
                        <h4 className="flex items-center text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h4>
                        <p><strong>JDK</strong> = JRE + Development Tools (javac, javap, jdb). <strong>JRE</strong> = JVM + Core Class Libraries (rt.jar, java.base).</p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-md">
                        <h4 className="flex items-center text-lg font-bold text-blue-800 dark:text-blue-300 mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h4>
                        <p>If Java were a kitchen: The <code className="text-cyan-600 font-mono">JDK</code> is the entire kitchen with pots and pans (tools to cook). The <code className="text-cyan-600 font-mono">JRE</code> is the dining room where the food is eaten (environment to run). The <code className="text-cyan-600 font-mono">JVM</code> is the stomach digesting the food (executing code).</p>
                    </div>

                    <div>
                        <h4 className="flex items-center text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">
                            <Layers className="w-5 h-5 mr-2" /> Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph TD
    A[JDK] --> B[JRE]
    A --> C[Development Tools: javac, jdb]
    B --> D[JVM]
    B --> E[Core Libraries]
    D --> F[JIT Compiler]`} />
                    </div>

                    <div>
                        <h4 className="flex items-center text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">
                            <Code className="w-5 h-5 mr-2" /> Sample Code
                        </h4>
                        <CodeBlock code={`public class EnvCheck {
    public static void main(String[] args) {
        System.out.println("Java Home: " + System.getProperty("java.home"));
    }
}`} lang="java" filename="EnvCheck.java" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-md">
                        <h4 className="flex items-center text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h4>
                        <p>Dockerizing applications typically involves building the app using a heavy <code className="text-cyan-600 font-mono">JDK</code> image, and then running it using a slim <code className="text-cyan-600 font-mono">JRE</code> image to save container size and improve security.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="flex items-center text-lg font-bold mb-2">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" /> Advantages
                            </h4>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Clear separation of concerns for development vs execution</li>
                                <li>Slim JRE footprints for deployment</li>
                                <li>Comprehensive tooling out-of-the-box in JDK</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="flex items-center text-lg font-bold mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" /> Disadvantages / Limitations
                            </h4>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Confusing for beginners to differentiate</li>
                                <li>Licensing changes in recent Oracle JDKs</li>
                                <li>Multiple path/environment variable configurations required</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'java-oop-concepts',
            title: '3. OOP Pillars: Encapsulation, Inheritance, Polymorphism',
            definition: 'Java enforces Object-Oriented Programming (OOP) via 4 main pillars: Abstraction, Encapsulation, Inheritance, and Polymorphism.',
            syntax: `// Java Inheritance & Method Overriding Blueprint:
class Parent {
    public void display() { System.out.println("Parent"); }
}
class Child extends Parent {
    @Override
    public void display() { System.out.println("Child"); }
}`,
            codeSnippet: `abstract class Account {
    private double balance; // Encapsulation

    public Account(double balance) {
        this.balance = balance;
    }

    public double getBalance() { return balance; } // Getter
    public abstract void calculateInterest();     // Abstraction
}

class SavingsAccount extends Account {
    public SavingsAccount(double balance) {
        super(balance);
    }

    @Override
    public void calculateInterest() {
        double interest = getBalance() * 0.05;
        System.out.println("Annual Interest: ₹" + interest);
    }
}

public class BankTest {
    public static void main(String[] args) {
        Account acc = new SavingsAccount(50000);
        acc.calculateInterest();
    }
}`,
            realLifeScenario: 'Banking core engines define abstract Account classes extended by SavingsAccount and CurrentAccount, enforcing encapsulated balance mutations.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-md">
                        <h4 className="flex items-center text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h4>
                        <p>Encapsulation protects class member variables from invalid external access by making fields private and exposing public getter/setter methods. Inheritance allows class hierarchies. Polymorphism allows treating child objects as parent references.</p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-md">
                        <h4 className="flex items-center text-lg font-bold text-blue-800 dark:text-blue-300 mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h4>
                        <p>Think of a <code className="text-cyan-600 font-mono">Vehicle</code> (Parent) that can <code className="text-cyan-600 font-mono">start()</code>. A <code className="text-cyan-600 font-mono">Car</code> (Child) inherits this ability but overrides <code className="text-cyan-600 font-mono">start()</code> to use a key. A <code className="text-cyan-600 font-mono">Motorcycle</code> overrides it to use a kickstart. This is inheritance and polymorphism!</p>
                    </div>

                    <div>
                        <h4 className="flex items-center text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">
                            <Layers className="w-5 h-5 mr-2" /> Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph TD
    A[OOP Pillars] --> B[Encapsulation]
    A --> C[Inheritance]
    A --> D[Polymorphism]
    A --> E[Abstraction]
    B --> F[Data Hiding]
    C --> G[Code Reusability]
    D --> H[Method Overriding]`} />
                    </div>

                    <div>
                        <h4 className="flex items-center text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">
                            <Code className="w-5 h-5 mr-2" /> Sample Code
                        </h4>
                        <CodeBlock code={`class Animal {
    void makeSound() { System.out.println("Animal sound"); }
}
class Dog extends Animal {
    @Override
    void makeSound() { System.out.println("Woof"); }
}
public class Test {
    public static void main(String[] args) {
        Animal myDog = new Dog(); // Polymorphism
        myDog.makeSound(); // Outputs: Woof
    }
}`} lang="java" filename="OOPDemo.java" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-md">
                        <h4 className="flex items-center text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h4>
                        <p>UI frameworks use OOP extensively: a generic <code className="text-cyan-600 font-mono">Button</code> component encapsulates styling logic, while specific variants like <code className="text-cyan-600 font-mono">SubmitButton</code> inherit and override behavior.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="flex items-center text-lg font-bold mb-2">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" /> Advantages
                            </h4>
                            <ul className="list-disc list-inside space-y-1">
                                <li>High code reusability (DRY principle)</li>
                                <li>Modular and organized codebase</li>
                                <li>Easy maintenance and scalability</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="flex items-center text-lg font-bold mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" /> Disadvantages / Limitations
                            </h4>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Steep learning curve for beginners</li>
                                <li>Over-engineering can lead to complex hierarchies</li>
                                <li>Slightly slower execution due to dynamic dispatch</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'java-collections-framework',
            title: '4. Java Collections Framework (List, Set, Map)',
            definition: 'The Java Collections Framework (JCF) provides unified data structures (ArrayList, LinkedList, HashSet, HashMap, PriorityQueue) under java.util.',
            syntax: `// List, Set, Map Interface Blueprints:
List<String> list = new ArrayList<>();
Set<Integer> uniqueSet = new HashSet<>();
Map<String, User> userMap = new HashMap<>();`,
            codeSnippet: `import java.util.*;

public class CollectionDemo {
    public static void main(String[] args) {
        // HashMap for O(1) Key-Value Lookup
        Map<Integer, String> studentMap = new HashMap<>();
        studentMap.put(101, "Vinay Mahato");
        studentMap.put(102, "Anjali Sharma");

        System.out.println("Student ID 101: " + studentMap.get(101));

        // ArrayList for Order Maintenance
        List<String> courses = new ArrayList<>(Arrays.asList("Java", "Python", "React"));
        courses.forEach(c -> System.out.println("Course: " + c));
    }
}`,
            realLifeScenario: 'High-concurrency web servers use ConcurrentHashMap to cache user session objects without thread blocking.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-md">
                        <h4 className="flex items-center text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h4>
                        <p>Choose <code className="text-cyan-600 font-mono">ArrayList</code> for fast O(1) index access, <code className="text-cyan-600 font-mono">LinkedList</code> for frequent insertion/deletions, <code className="text-cyan-600 font-mono">HashSet</code> for duplicate removal, and <code className="text-cyan-600 font-mono">HashMap</code> for fast key-value lookups.</p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-md">
                        <h4 className="flex items-center text-lg font-bold text-blue-800 dark:text-blue-300 mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h4>
                        <p>A <code className="text-cyan-600 font-mono">List</code> is a queue of people in a grocery store (ordered). A <code className="text-cyan-600 font-mono">Set</code> is the types of fruits you bought (no duplicates). A <code className="text-cyan-600 font-mono">Map</code> is a dictionary (words mapping to definitions).</p>
                    </div>

                    <div>
                        <h4 className="flex items-center text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">
                            <Layers className="w-5 h-5 mr-2" /> Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph TD
    A[Iterable] --> B[Collection]
    B --> C[List]
    B --> D[Set]
    B --> E[Queue]
    F[Map] --> G[HashMap]
    C --> H[ArrayList]
    D --> I[HashSet]`} />
                    </div>

                    <div>
                        <h4 className="flex items-center text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">
                            <Code className="w-5 h-5 mr-2" /> Sample Code
                        </h4>
                        <CodeBlock code={`import java.util.*;
public class SetDemo {
    public static void main(String[] args) {
        Set<String> uniqueNames = new HashSet<>();
        uniqueNames.add("Alice");
        uniqueNames.add("Bob");
        uniqueNames.add("Alice"); // Ignored
        System.out.println(uniqueNames); // [Bob, Alice]
    }
}`} lang="java" filename="SetDemo.java" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-md">
                        <h4 className="flex items-center text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h4>
                        <p>E-commerce shopping carts use <code className="text-cyan-600 font-mono">HashMap</code> to map Item IDs to Quantity, allowing instant updates and calculations without searching through a list.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="flex items-center text-lg font-bold mb-2">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" /> Advantages
                            </h4>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Provides ready-to-use robust data structures</li>
                                <li>Increases performance by using optimized algorithms</li>
                                <li>Reduces programming effort and bugs</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="flex items-center text-lg font-bold mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" /> Disadvantages / Limitations
                            </h4>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Collections can only store Objects, not primitives</li>
                                <li>Autoboxing/Unboxing can affect performance</li>
                                <li>Not thread-safe by default (requires synchronized versions)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'java-streams-lambdas',
            title: '5. Java 8+ Streams API & Functional Lambda Expressions',
            definition: 'The Streams API processes collections of objects declaratively using functional pipelines (filter, map, reduce, collect) and lambda expressions (->).',
            syntax: `// Stream Pipeline Blueprint:
list.stream()
    .filter(item -> condition)
    .map(item -> transform)
    .collect(Collectors.toList());`,
            codeSnippet: `import java.util.*;
import java.util.stream.Collectors;

public class StreamDemo {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(10, 15, 20, 25, 30, 35, 40);

        // Filter even numbers and square them
        List<Integer> evenSquares = numbers.stream()
            .filter(n -> n % 2 == 0)
            .map(n -> n * n)
            .collect(Collectors.toList());

        System.out.println("Even Squares: " + evenSquares);
    }
}`,
            realLifeScenario: 'Data analytics backends use Java Parallel Streams (`.parallelStream()`) to process millions of transactions across multi-core CPU threads simultaneously.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-md">
                        <h4 className="flex items-center text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h4>
                        <p>Streams do not mutate the original underlying data collection; they produce a new transformed result stream. This allows declarative functional-style operations on elements.</p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-md">
                        <h4 className="flex items-center text-lg font-bold text-blue-800 dark:text-blue-300 mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h4>
                        <p>Think of a Stream as an assembly line in a factory. The raw materials (data) move through various stations (filter, map) where they are modified step-by-step before being packaged (collected) at the end.</p>
                    </div>

                    <div>
                        <h4 className="flex items-center text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">
                            <Layers className="w-5 h-5 mr-2" /> Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph LR
    A[Collection] -->|stream| B[Filter]
    B -->|map| C[Transform]
    C -->|sorted| D[Sort]
    D -->|collect| E[New List]`} />
                    </div>

                    <div>
                        <h4 className="flex items-center text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">
                            <Code className="w-5 h-5 mr-2" /> Sample Code
                        </h4>
                        <CodeBlock code={`import java.util.stream.Stream;
public class StreamGen {
    public static void main(String[] args) {
        Stream.of("apple", "banana", "cherry")
              .filter(s -> s.startsWith("a"))
              .map(String::toUpperCase)
              .forEach(System.out::println); // Outputs: APPLE
    }
}`} lang="java" filename="StreamGen.java" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-md">
                        <h4 className="flex items-center text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h4>
                        <p>Financial reporting applications use Streams to quickly filter fraudulent transactions, extract their monetary amounts, sum them up using <code className="text-cyan-600 font-mono">reduce</code>, and format the final report.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="flex items-center text-lg font-bold mb-2">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" /> Advantages
                            </h4>
                            <ul className="list-disc list-inside space-y-1">
                                <li>More readable and concise declarative code</li>
                                <li>Built-in parallelization capabilities (<code className="text-cyan-400">.parallelStream()</code>)</li>
                                <li>No accidental mutation of data sources</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="flex items-center text-lg font-bold mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" /> Disadvantages / Limitations
                            </h4>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Streams are single-use; they cannot be reused after terminal operation</li>
                                <li>Harder to debug than traditional loops</li>
                                <li>Small performance overhead for very simple tasks compared to loops</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        }
    ];

    const topics = courseData.map(topic => topic.title);
    const activeTopic = courseData[activeTopicIndex];

    return (
        <CoursePageLayout
            title="Java Masterclass Course"
            description="Master Java 21 LTS from JVM architecture to Advanced OOP, Collections Framework, Multithreading, Streams API, and Microservices."
            topics={topics}
            icon={Coffee}
            colorClass="amber"
            activeTopicIndex={activeTopicIndex}
            onTopicClick={setActiveTopicIndex}
        >
            <div className="space-y-8">
                {/* Part 1: Concept Definition & Explanation */}
                <div className="bg-amber-50 dark:bg-amber-900/10 border-l-4 border-amber-600 p-6 rounded-r-xl shadow-sm">
                    <h3 className="text-lg font-bold text-amber-800 dark:text-amber-300 mb-2 flex items-center">
                        <BookOpen className="w-5 h-5 mr-2" />
                        1. Concept Definition & Explanation
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium mb-3">
                        {activeTopic.definition}
                    </p>
                    <div className="prose dark:prose-invert max-w-none text-sm text-gray-700 dark:text-gray-300">
                        {activeTopic.content}
                    </div>
                </div>

                {/* Part 2: Formal Code Syntax Blueprint */}
                {activeTopic.syntax && (
                    <div className="bg-purple-50 dark:bg-purple-900/10 border-l-4 border-purple-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-purple-800 dark:text-purple-300 mb-3 flex items-center">
                            <FileText className="w-5 h-5 mr-2" />
                            2. Formal Code Syntax Blueprint
                        </h3>
                        <div className="bg-slate-900 text-slate-100 font-mono text-sm p-4 rounded-xl border border-slate-800 overflow-x-auto">
                            <pre>{activeTopic.syntax}</pre>
                        </div>
                    </div>
                )}

                {/* Part 3: Executable Code Example */}
                {activeTopic.codeSnippet && (
                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-amber-600" />
                            3. Executable Production Code Example
                        </h3>
                        <CodeBlock code={activeTopic.codeSnippet} lang="java" colorClass="amber" filename="Main.java" />
                    </div>
                )}

                {/* Part 4: Real-Life Scenario Example */}
                {activeTopic.realLifeScenario && (
                    <div className="bg-emerald-50 dark:bg-emerald-900/10 border-l-4 border-emerald-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            4. Real-Life Industry Scenario & Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                            {activeTopic.realLifeScenario}
                        </p>
                    </div>
                )}
            </div>
        </CoursePageLayout>
    );
};

export default JavaCoursePage;
