import React, { useState } from 'react';
import CoursePageLayout from '../../components/CoursePageLayout';
import { FileCode, Code, BookOpen, Lightbulb, Palette } from 'lucide-react';

const CodeBlock = ({ code, lang = 'css' }: { code: string, lang?: string }) => (
    <div className="bg-[#1e1e1e] text-gray-200 p-6 rounded-2xl font-mono text-sm mb-6 overflow-x-auto shadow-xl border border-gray-800">
        <div className="flex items-center space-x-2 mb-4 border-b border-gray-700 pb-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-4 text-xs text-gray-500 font-sans">style.css</span>
        </div>
        <pre className="leading-relaxed text-blue-300">{code}</pre>
    </div>
);

const CssCoursePage = () => {
    const [activeTopicIndex, setActiveTopicIndex] = useState(0);

    const courseData = [
        {
            id: 'intro',
            title: 'Introduction to CSS',
            definition: 'CSS (Cascading Style Sheets) is used to style and layout web pages.',
            example: 'Changing the color of text, background, and positioning elements.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        CSS describes how HTML elements are to be displayed on screen, paper, or in other media. It saves a lot of work and can control the layout of multiple web pages all at once.
                    </p>
                </>
            ),
            codeSnippet: `body {
  background-color: lightblue;
}

h1 {
  color: white;
  text-align: center;
}

p {
  font-family: verdana;
  font-size: 20px;
}`
        },
        {
            id: 'syntax',
            title: 'CSS Syntax',
            definition: 'A CSS rule-set consists of a selector and a declaration block.',
            example: 'h1 { color: blue; font-size: 12px; }',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        The selector points to the HTML element you want to style. The declaration block contains one or more declarations separated by semicolons. Each declaration includes a CSS property name and a value, separated by a colon.
                    </p>
                </>
            ),
            codeSnippet: `p {
  color: red;
  text-align: center;
}`
        },
        {
            id: 'selectors',
            title: 'CSS Selectors',
            definition: 'CSS selectors are used to "find" (or select) the HTML elements you want to style.',
            example: 'Element, Id, Class, Universal, Grouping selectors.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        We can select elements based on their element name, id, class, attribute, and more.
                    </p>
                </>
            ),
            codeSnippet: `/* Element Selector */
p {
  text-align: center;
  color: red;
}

/* Id Selector */
#para1 {
  text-align: center;
  color: red;
}

/* Class Selector */
.center {
  text-align: center;
  color: red;
}`
        }
    ];

    const topics = courseData.map(topic => topic.title);
    const activeTopic = courseData[activeTopicIndex];

    return (
        <CoursePageLayout
            title="CSS3 Masterclass"
            description="Master the art of styling web pages with CSS3, from basics to advanced layouts and animations."
            topics={topics}
            icon={Palette}
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
                <div className="bg-cyan-50 dark:bg-cyan-900/10 border-l-4 border-cyan-600 p-6 rounded-r-xl">
                    <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
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

export default CssCoursePage;
