import React, { useState } from 'react';
import CoursePageLayout from '../../components/CoursePageLayout';
import { Feather, Code, BookOpen, Lightbulb } from 'lucide-react';

const SassCoursePage = () => {
    const [activeTopicIndex, setActiveTopicIndex] = useState(0);

    const courseData = [
        {
            id: 'sass-intro',
            title: 'Sass Intro',
            definition: 'Sass stands for Syntactically Awesome Style Sheets. It is a CSS pre-processor.',
            example: 'Sass reduces repetition of CSS and therefore saves time.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Sass is an extension to CSS. It offers variables, nested rules, mixins, inline imports, and more.
                    </p>
                </>
            ),
            codeSnippet: null
        },
        {
            id: 'sass-get-started',
            title: 'Sass Get Started',
            definition: 'You can install Sass using npm.',
            example: 'npm install -g sass',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Once installed, you can watch your Sass files and compile them to CSS.
                    </p>
                </>
            ),
            codeSnippet: `npm install -g sass`
        },
        {
            id: 'sass-syntax',
            title: 'Sass Syntax',
            definition: 'Sass supports two syntaxes. The SCSS syntax (.scss) is used most commonly.',
            example: 'SCSS uses curly braces and semicolons.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        SCSS is a superset of CSS. This means that all valid CSS is also valid SCSS.
                    </p>
                </>
            ),
            codeSnippet: `$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}`
        },
        {
            id: 'sass-variables',
            title: 'Sass Variables',
            definition: 'Variables are a way to store information that you want to reuse throughout your stylesheet.',
            example: '$myColor: red;',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        You can store things like colors, font stacks, or any CSS value you think you'll want to reuse.
                    </p>
                </>
            ),
            codeSnippet: `$myColor: red;
h1 {
  color: $myColor;
}`
        },
        {
            id: 'sass-nesting',
            title: 'Sass Nesting',
            definition: 'Sass will let you nest your CSS selectors in a way that follows the same visual hierarchy of your HTML.',
            example: 'nav { ul { ... } }',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Be aware that overly nested rules will result in over-qualified CSS that could prove hard to maintain and is generally considered bad practice.
                    </p>
                </>
            ),
            codeSnippet: `nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { display: inline-block; }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}`
        },
        {
            id: 'sass-partials',
            title: 'Sass Partials',
            definition: 'You can create partial Sass files that contain little snippets of CSS that you can include in other Sass files.',
            example: '_partial.scss',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        A partial is simply a Sass file named with a leading underscore. You might name it something like _partial.scss. The underscore lets Sass know that the file is only a partial file and that it should not be generated into a CSS file.
                    </p>
                </>
            ),
            codeSnippet: `_partial.scss`
        },
        {
            id: 'sass-modules',
            title: 'Sass Modules',
            definition: 'You can split your Sass into multiple files and use the @use rule to load another Sass file as a module.',
            example: '@use "base";',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        This rule loads the file as a module, which means you can refer to its variables, mixins, and functions in your Sass file with a namespace based on the filename.
                    </p>
                </>
            ),
            codeSnippet: `// _base.scss
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

// styles.scss
@use 'base';

.inverse {
  background-color: base.$primary-color;
  color: white;
}`
        },
        {
            id: 'sass-mixins',
            title: 'Sass Mixins',
            definition: 'A mixin lets you make groups of CSS declarations that you want to reuse throughout your site.',
            example: '@mixin transform($property) { ... }',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        You can even pass in values to make your mixin more flexible.
                    </p>
                </>
            ),
            codeSnippet: `@mixin transform($property) {
  -webkit-transform: $property;
  -ms-transform: $property;
  transform: $property;
}

.box { @include transform(rotate(30deg)); }`
        },
        {
            id: 'sass-extend',
            title: 'Sass Extend',
            definition: 'Using @extend lets you share a set of CSS properties from one selector to another.',
            example: '@extend %message-shared;',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        This helps keep your Sass very DRY (Don't Repeat Yourself).
                    </p>
                </>
            ),
            codeSnippet: `%message-shared {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.message {
  @extend %message-shared;
}

.success {
  @extend %message-shared;
  border-color: green;
}`
        },
        {
            id: 'sass-operators',
            title: 'Sass Operators',
            definition: 'Sass has a handful of standard math operators like +, -, *, /, and %.',
            example: 'width: 600px / 960px * 100%;',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Doing math in your CSS is very helpful.
                    </p>
                </>
            ),
            codeSnippet: `.container {
  width: 100%;
}

article[role="main"] {
  float: left;
  width: 600px / 960px * 100%;
}

aside[role="complementary"] {
  float: right;
  width: 300px / 960px * 100%;
}`
        }
    ];

    const topics = courseData.map(topic => topic.title);
    const activeTopic = courseData[activeTopicIndex];

    const CodeBlock = ({ code, lang = 'scss' }: { code: string, lang?: string }) => (
        <div className="bg-[#1e1e1e] text-gray-200 p-6 rounded-2xl font-mono text-sm mb-6 overflow-x-auto shadow-xl border border-gray-800">
            <div className="flex items-center space-x-2 mb-4 border-b border-gray-700 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-xs text-gray-500 font-sans">style.scss</span>
            </div>
            <pre className="leading-relaxed text-pink-300">{code}</pre>
        </div>
    );

    return (
        <CoursePageLayout
            title="Sass Tutorial"
            description="Sass is the most mature, stable, and powerful professional grade CSS extension language in the world."
            topics={topics}
            icon={Feather}
            colorClass="pink"
            activeTopicIndex={activeTopicIndex}
            onTopicClick={setActiveTopicIndex}
        >
            <div className="space-y-8">
                {/* Definition Section */}
                <div className="bg-pink-50 dark:bg-pink-900/10 border-l-4 border-pink-600 p-6 rounded-r-xl">
                    <h3 className="text-lg font-bold text-pink-800 dark:text-pink-300 mb-2 flex items-center">
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
                                <Code className="w-6 h-6 mr-2 text-pink-600" />
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

export default SassCoursePage;
