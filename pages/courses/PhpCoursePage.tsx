import React, { useState } from 'react';
import CoursePageLayout from '../../components/CoursePageLayout';
import { Database, Code, BookOpen, Lightbulb } from 'lucide-react';

const PhpCoursePage = () => {
    const [activeTopicIndex, setActiveTopicIndex] = useState(0);

    const courseData = [
        {
            id: 'php-intro',
            title: 'PHP Intro',
            definition: 'PHP is a server scripting language, and a powerful tool for making dynamic and interactive Web pages.',
            example: 'PHP is a widely-used, free, and efficient alternative to competitors such as Microsoft\'s ASP.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        PHP code is executed on the server, and the result is returned to the browser as plain HTML.
                    </p>
                </>
            ),
            codeSnippet: `<!DOCTYPE html>
<html>
<body>

<?php
echo "My first PHP script!";
?>

</body>
</html>`
        },
        {
            id: 'php-syntax',
            title: 'PHP Syntax',
            definition: 'A PHP script is executed on the server, and the plain HTML result is sent back to the browser.',
            example: '<?php ... ?>',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        A PHP script can be placed anywhere in the document. A PHP script starts with <code>&lt;?php</code> and ends with <code>?&gt;</code>.
                    </p>
                </>
            ),
            codeSnippet: `<?php
// PHP code goes here
?>`
        },
        {
            id: 'php-variables',
            title: 'PHP Variables',
            definition: 'In PHP, a variable starts with the $ sign, followed by the name of the variable.',
            example: '$txt = "Hello world!";',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        PHP has no command for declaring a variable. It is created the moment you first assign a value to it.
                    </p>
                </>
            ),
            codeSnippet: `<?php
$txt = "Hello world!";
$x = 5;
$y = 10.5;
?>`
        },
        {
            id: 'php-echo-print',
            title: 'PHP Echo / Print',
            definition: 'With PHP, there are two basic ways to get output: echo and print.',
            example: 'echo "Hello world!";',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        echo and print are more or less the same. They are both used to output data to the screen.
                    </p>
                </>
            ),
            codeSnippet: `<?php
echo "<h2>PHP is Fun!</h2>";
echo "Hello world!<br>";
echo "I'm about to learn PHP!<br>";
echo "This ", "string ", "was ", "made ", "with multiple parameters.";
?>`
        },
        {
            id: 'php-data-types',
            title: 'PHP Data Types',
            definition: 'Variables can store data of different types, and different data types can do different things.',
            example: 'String, Integer, Float, Boolean, Array, Object, NULL, Resource.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        PHP supports the following data types: String, Integer, Float (floating point numbers - also called double), Boolean, Array, Object, NULL, Resource.
                    </p>
                </>
            ),
            codeSnippet: `<?php
$x = "Hello world!"; // String
$x = 5985;           // Integer
$x = 10.365;         // Float
$x = true;           // Boolean
$x = array("Volvo","BMW","Toyota"); // Array
?>`
        },
        {
            id: 'php-strings',
            title: 'PHP Strings',
            definition: 'A string is a sequence of characters, like "Hello world!".',
            example: 'strlen("Hello world!");',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        The PHP strlen() function returns the length of a string.
                    </p>
                </>
            ),
            codeSnippet: `<?php
echo strlen("Hello world!"); // outputs 12
echo str_word_count("Hello world!"); // outputs 2
echo strrev("Hello world!"); // outputs !dlrow olleH
?>`
        },
        {
            id: 'php-if-else-elseif',
            title: 'PHP If...Else...Elseif',
            definition: 'Conditional statements are used to perform different actions based on different conditions.',
            example: 'if ($t < "20") { ... }',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        In PHP we have the following conditional statements: if, if...else, if...elseif...else, switch.
                    </p>
                </>
            ),
            codeSnippet: `<?php
$t = date("H");

if ($t < "20") {
  echo "Have a good day!";
} else {
  echo "Have a good night!";
}
?>`
        },
        {
            id: 'php-loops',
            title: 'PHP Loops',
            definition: 'Often when you write code, you want the same block of code to run over and over again a certain number of times.',
            example: 'for ($x = 0; $x <= 10; $x++) { ... }',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        In PHP, we have the following loop types: while, do...while, for, foreach.
                    </p>
                </>
            ),
            codeSnippet: `<?php
for ($x = 0; $x <= 10; $x++) {
  echo "The number is: $x <br>";
}
?>`
        },
        {
            id: 'php-functions',
            title: 'PHP Functions',
            definition: 'The real power of PHP comes from its functions.',
            example: 'function writeMsg() { ... }',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        PHP has more than 1000 built-in functions, and in addition you can create your own custom functions.
                    </p>
                </>
            ),
            codeSnippet: `<?php
function writeMsg() {
  echo "Hello world!";
}

writeMsg(); // call the function
?>`
        },
        {
            id: 'php-arrays',
            title: 'PHP Arrays',
            definition: 'An array stores multiple values in one single variable.',
            example: '$cars = array("Volvo", "BMW", "Toyota");',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        In PHP, there are three types of arrays: Indexed arrays, Associative arrays, Multidimensional arrays.
                    </p>
                </>
            ),
            codeSnippet: `<?php
$cars = array("Volvo", "BMW", "Toyota");
echo "I like " . $cars[0] . ", " . $cars[1] . " and " . $cars[2] . ".";
?>`
        }
    ];

    const topics = courseData.map(topic => topic.title);
    const activeTopic = courseData[activeTopicIndex];

    const CodeBlock = ({ code, lang = 'php' }: { code: string, lang?: string }) => (
        <div className="bg-[#1e1e1e] text-gray-200 p-6 rounded-2xl font-mono text-sm mb-6 overflow-x-auto shadow-xl border border-gray-800">
            <div className="flex items-center space-x-2 mb-4 border-b border-gray-700 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-xs text-gray-500 font-sans">index.php</span>
            </div>
            <pre className="leading-relaxed text-indigo-300">{code}</pre>
        </div>
    );

    return (
        <CoursePageLayout
            title="PHP Tutorial"
            description="PHP is a server scripting language, and a powerful tool for making dynamic and interactive Web pages."
            topics={topics}
            icon={Database}
            colorClass="indigo"
            activeTopicIndex={activeTopicIndex}
            onTopicClick={setActiveTopicIndex}
        >
            <div className="space-y-8">
                {/* Definition Section */}
                <div className="bg-indigo-50 dark:bg-indigo-900/10 border-l-4 border-indigo-600 p-6 rounded-r-xl">
                    <h3 className="text-lg font-bold text-indigo-800 dark:text-indigo-300 mb-2 flex items-center">
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
                                <Code className="w-6 h-6 mr-2 text-indigo-500" />
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

export default PhpCoursePage;
