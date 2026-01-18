import React, { useState } from 'react';
import CoursePageLayout from '../../components/CoursePageLayout';
import { FileCode, Code, BookOpen, Lightbulb } from 'lucide-react';

const TypeScriptCoursePage = () => {
    const [activeTopicIndex, setActiveTopicIndex] = useState(0);

    const courseData = [
        {
            id: 'ts-intro',
            title: 'TS Intro',
            definition: 'TypeScript is a syntactic superset of JavaScript which adds static typing.',
            example: 'Adding types to variables prevents errors.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        This means that TypeScript adds syntax on top of JavaScript, allowing developers to add types.
                    </p>
                </>
            ),
            codeSnippet: `let firstName: string = "Dylan";`
        },
        {
            id: 'ts-get-started',
            title: 'TS Get Started',
            definition: 'To start using TypeScript, you can install it via npm.',
            example: 'npm install -g typescript',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Once installed, you can compile TypeScript files to JavaScript using the `tsc` command.
                    </p>
                </>
            ),
            codeSnippet: `npm install -g typescript
tsc --init
tsc index.ts`
        },
        {
            id: 'ts-simple-types',
            title: 'TS Simple Types',
            definition: 'There are three main primitives in JavaScript and TypeScript: boolean, number, string.',
            example: 'let isDone: boolean = false;',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Type assignment can be explicit or implicit (inferred).
                    </p>
                </>
            ),
            codeSnippet: `let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";`
        },
        {
            id: 'ts-special-types',
            title: 'TS Special Types',
            definition: 'TypeScript has special types that may not refer to any specific data: any, unknown, never, void.',
            example: 'any disables type checking.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        `any` is a type that disables type checking and effectively allows all types to be used.
                    </p>
                </>
            ),
            codeSnippet: `let v: any = true;
v = "string"; // no error as it can be "any" type`
        },
        {
            id: 'ts-arrays',
            title: 'TS Arrays',
            definition: 'TypeScript has a specific syntax for typing arrays.',
            example: 'const names: string[] = [];',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        ReadonlyArray is a special type that describes arrays that should not be changed.
                    </p>
                </>
            ),
            codeSnippet: `const names: string[] = [];
names.push("Dylan"); // no error`
        },
        {
            id: 'ts-tuples',
            title: 'TS Tuples',
            definition: 'A tuple is a typed array with a pre-defined length and types for each index.',
            example: 'let ourTuple: [number, boolean, string];',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Tuples are great because they allow each element in the array to be a known type of value.
                    </p>
                </>
            ),
            codeSnippet: `let ourTuple: [number, boolean, string];
ourTuple = [5, false, 'Coding God was here'];`
        },
        {
            id: 'ts-object-types',
            title: 'TS Object Types',
            definition: 'TypeScript has a specific syntax for typing objects.',
            example: 'const car: { type: string, model: string, year: number }',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        You can define the types of properties in an object.
                    </p>
                </>
            ),
            codeSnippet: `const car: { type: string, model: string, year: number } = {
  type: "Toyota",
  model: "Corolla",
  year: 2009
};`
        },
        {
            id: 'ts-enums',
            title: 'TS Enums',
            definition: 'An enum is a special "class" that represents a group of constants (unchangeable variables).',
            example: 'enum CardinalDirections { North, East, South, West }',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Enums come in two flavors: string and numeric.
                    </p>
                </>
            ),
            codeSnippet: `enum CardinalDirections {
  North,
  East,
  South,
  West
}
let currentDirection = CardinalDirections.North;`
        },
        {
            id: 'ts-interfaces',
            title: 'TS Interfaces',
            definition: 'Interfaces are similar to type aliases, except they only apply to object types.',
            example: 'interface Rectangle { height: number, width: number }',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Interfaces are the primary way we define the structure of objects in TypeScript.
                    </p>
                </>
            ),
            codeSnippet: `interface Rectangle {
  height: number,
  width: number
}

const rectangle: Rectangle = {
  height: 20,
  width: 10
};`
        },
        {
            id: 'ts-union-types',
            title: 'TS Union Types',
            definition: 'Union types are used when a value can be more than a single type.',
            example: 'code: string | number',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Using the | we are saying our parameter is a string or number.
                    </p>
                </>
            ),
            codeSnippet: `function printStatusCode(code: string | number) {
  console.log(\`My status code is \${code}.\`)
}`
        },
        {
            id: 'ts-functions',
            title: 'TS Functions',
            definition: 'TypeScript has a specific syntax for typing function parameters and return values.',
            example: 'function getTime(): number { ... }',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        The type of the value returned by the function can be explicitly defined.
                    </p>
                </>
            ),
            codeSnippet: `function getTime(): number {
  return new Date().getTime();
}`
        },
        {
            id: 'ts-classes',
            title: 'TS Classes',
            definition: 'TypeScript adds types and visibility modifiers to JavaScript classes.',
            example: 'public, private, protected modifiers.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        There are three main visibility modifiers in TypeScript: public, private, protected.
                    </p>
                </>
            ),
            codeSnippet: `class Person {
  private name: string;

  public constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}`
        },
        {
            id: 'ts-basic-generics',
            title: 'TS Basic Generics',
            definition: 'Generics allow creating "type variables" which can be used to create classes, functions & type aliases that don\'t need to explicitly define the types that they use.',
            example: 'function createPair<S, T>(v1: S, v2: T): [S, T]',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Generics allow you to write reusable code that can work with a variety of types.
                    </p>
                </>
            ),
            codeSnippet: `function createPair<S, T>(v1: S, v2: T): [S, T] {
  return [v1, v2];
}
console.log(createPair<string, number>('hello', 42));`
        }
    ];

    const topics = courseData.map(topic => topic.title);
    const activeTopic = courseData[activeTopicIndex];

    const CodeBlock = ({ code, lang = 'typescript' }: { code: string, lang?: string }) => (
        <div className="bg-[#1e1e1e] text-gray-200 p-6 rounded-2xl font-mono text-sm mb-6 overflow-x-auto shadow-xl border border-gray-800">
            <div className="flex items-center space-x-2 mb-4 border-b border-gray-700 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-xs text-gray-500 font-sans">index.ts</span>
            </div>
            <pre className="leading-relaxed text-blue-300">{code}</pre>
        </div>
    );

    return (
        <CoursePageLayout
            title="TypeScript Tutorial"
            description="TypeScript is a syntactic superset of JavaScript which adds static typing. It is designed for the development of large applications and compiles to JavaScript."
            topics={topics}
            icon={FileCode}
            colorClass="blue"
            activeTopicIndex={activeTopicIndex}
            onTopicClick={setActiveTopicIndex}
        >
            <div className="space-y-8">
                {/* Definition Section */}
                <div className="bg-blue-50 dark:bg-blue-900/10 border-l-4 border-blue-600 p-6 rounded-r-xl">
                    <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
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
                                <Code className="w-6 h-6 mr-2 text-blue-600" />
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

export default TypeScriptCoursePage;
