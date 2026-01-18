import React, { useState } from 'react';
import CoursePageLayout from '../../components/CoursePageLayout';
import { Terminal, Code, BookOpen, Lightbulb } from 'lucide-react';

const BashCoursePage = () => {
    const [activeTopicIndex, setActiveTopicIndex] = useState(0);

    const courseData = [
        {
            id: 'bash-intro',
            title: 'Bash Intro',
            definition: 'Bash is a Unix shell and command language. It is the default login shell for most Linux distributions and macOS (until recently).',
            example: 'Using the terminal to navigate files and run programs.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Bash stands for "Bourne Again SHell". It is an improved version of the original Bourne Shell (sh).
                    </p>
                </>
            ),
            codeSnippet: `#!/bin/bash
echo "Hello World"`
        },
        {
            id: 'bash-syntax',
            title: 'Bash Syntax',
            definition: 'Bash scripts are text files containing a series of commands. They usually start with a shebang line.',
            example: '#!/bin/bash indicates the script should be run with Bash.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Comments start with a #. Commands are executed sequentially.
                    </p>
                </>
            ),
            codeSnippet: `#!/bin/bash
# This is a comment
ls -l`
        },
        {
            id: 'bash-variables',
            title: 'Bash Variables',
            definition: 'Variables in Bash are untyped and can be assigned by using the equals sign with no spaces around it.',
            example: 'NAME="John" assigns the string "John" to the variable NAME.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        To access the value of a variable, use the dollar sign ($) followed by the variable name.
                    </p>
                </>
            ),
            codeSnippet: `NAME="John"
echo "My name is $NAME"`
        },
        {
            id: 'bash-comments',
            title: 'Bash Comments',
            definition: 'Comments are lines that are not executed. They are used to document code.',
            example: '# This is a comment.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Single line comments start with #. Multi-line comments are not directly supported but can be simulated.
                    </p>
                </>
            ),
            codeSnippet: `# This is a single line comment
: '
This is a
multi-line comment
'`
        },
        {
            id: 'bash-arguments',
            title: 'Bash Arguments',
            definition: 'You can pass arguments to your Bash script when you run it.',
            example: './script.sh arg1 arg2',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        $1 is the first argument, $2 is the second, and so on. $0 is the name of the script.
                    </p>
                </>
            ),
            codeSnippet: `#!/bin/bash
echo "Script name: $0"
echo "First argument: $1"
echo "Second argument: $2"`
        },
        {
            id: 'bash-arrays',
            title: 'Bash Arrays',
            definition: 'Bash supports one-dimensional arrays.',
            example: 'fruits=("apple" "banana" "cherry")',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        You can access elements using index notation: ${'{fruits[0]}'}
                    </p>
                </>
            ),
            codeSnippet: `fruits=("apple" "banana" "cherry")
echo "First fruit: \${fruits[0]}"
echo "All fruits: \${fruits[@]}"`
        },
        {
            id: 'bash-string',
            title: 'Bash String',
            definition: 'Strings can be defined with single or double quotes.',
            example: 'Double quotes allow variable expansion, single quotes do not.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        You can concatenate strings by placing them side by side.
                    </p>
                </>
            ),
            codeSnippet: `NAME="John"
echo "Hello $NAME"  # Hello John
echo 'Hello $NAME'  # Hello $NAME`
        },
        {
            id: 'bash-conditional',
            title: 'Bash Conditional',
            definition: 'Bash supports if-else statements for decision making.',
            example: 'Checking if a file exists before trying to read it.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        The syntax involves if, then, elif, else, and fi. Square brackets [ ] are used for test conditions.
                    </p>
                </>
            ),
            codeSnippet: `if [ $1 -gt 100 ]
then
  echo "That's a large number."
else
  echo "That's a small number."
fi`
        },
        {
            id: 'bash-loops',
            title: 'Bash Loops',
            definition: 'Bash supports for, while, and until loops.',
            example: 'Looping through a list of files to process them.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Loops allow you to execute a block of code multiple times.
                    </p>
                </>
            ),
            codeSnippet: `for i in {1..5}
do
   echo "Welcome $i times"
done`
        },
        {
            id: 'bash-functions',
            title: 'Bash Functions',
            definition: 'You can define functions in Bash to group commands and reuse code.',
            example: 'A function to log messages with a timestamp.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Functions are defined using the function keyword or just the name followed by parentheses.
                    </p>
                </>
            ),
            codeSnippet: `function hello {
  echo "Hello $1"
}

hello "World"`
        },
        {
            id: 'bash-input',
            title: 'Bash Input',
            definition: 'You can read user input using the read command.',
            example: 'Asking the user for their name.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        The input is stored in a variable.
                    </p>
                </>
            ),
            codeSnippet: `echo "Enter your name:"
read NAME
echo "Hello $NAME"`
        },
        {
            id: 'bash-arithmetic',
            title: 'Bash Arithmetic',
            definition: 'Bash can perform integer arithmetic.',
            example: 'Calculating the sum of two numbers.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        You can use $((expression)) syntax for arithmetic expansion.
                    </p>
                </>
            ),
            codeSnippet: `A=10
B=20
SUM=$((A + B))
echo "Sum is $SUM"`
        },
        {
            id: 'bash-file-check',
            title: 'Bash File Check',
            definition: 'You can check for the existence and type of files using test operators.',
            example: '-f checks if a file exists and is a regular file.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Common operators: -e (exists), -f (file), -d (directory), -r (readable), -w (writable), -x (executable).
                    </p>
                </>
            ),
            codeSnippet: `if [ -f "file.txt" ]; then
  echo "File exists."
fi`
        },
        {
            id: 'bash-directories',
            title: 'Bash Directories',
            definition: 'You can navigate and manipulate directories in Bash.',
            example: 'Creating a directory if it doesn\'t exist.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Commands like cd, mkdir, rmdir, and ls are used for directory operations.
                    </p>
                </>
            ),
            codeSnippet: `if [ ! -d "mydir" ]; then
  mkdir mydir
fi`
        }
    ];

    const topics = courseData.map(topic => topic.title);
    const activeTopic = courseData[activeTopicIndex];

    const CodeBlock = ({ code, lang = 'bash' }: { code: string, lang?: string }) => (
        <div className="bg-[#1e1e1e] text-gray-200 p-6 rounded-2xl font-mono text-sm mb-6 overflow-x-auto shadow-xl border border-gray-800">
            <div className="flex items-center space-x-2 mb-4 border-b border-gray-700 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-xs text-gray-500 font-sans">script.sh</span>
            </div>
            <pre className="leading-relaxed text-gray-300">{code}</pre>
        </div>
    );

    return (
        <CoursePageLayout
            title="Bash Tutorial"
            description="Bash is a Unix shell and command language written by Brian Fox for the GNU Project as a free software replacement for the Bourne shell."
            topics={topics}
            icon={Terminal}
            colorClass="gray"
            activeTopicIndex={activeTopicIndex}
            onTopicClick={setActiveTopicIndex}
        >
            <div className="space-y-8">
                {/* Definition Section */}
                <div className="bg-gray-50 dark:bg-gray-900/10 border-l-4 border-gray-600 p-6 rounded-r-xl">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-gray-300 mb-2 flex items-center">
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
                                <Code className="w-6 h-6 mr-2 text-gray-600" />
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

export default BashCoursePage;
