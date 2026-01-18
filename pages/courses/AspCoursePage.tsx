import React, { useState } from 'react';
import CoursePageLayout from '../../components/CoursePageLayout';
import { Server, Code, BookOpen, Lightbulb } from 'lucide-react';

const AspCoursePage = () => {
    const [activeTopicIndex, setActiveTopicIndex] = useState(0);

    const courseData = [
        {
            id: 'asp-intro',
            title: 'ASP Intro',
            definition: 'ASP stands for Active Server Pages. ASP is a development framework for building web pages.',
            example: 'ASP was released in 1998 as Microsoft\'s first server-side scripting engine.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        ASP is a technology that enables scripts in web pages to be executed by an Internet server.
                    </p>
                </>
            ),
            codeSnippet: null
        },
        {
            id: 'asp-syntax',
            title: 'ASP Syntax',
            definition: 'ASP files cannot contain server-side scripts. ASP files have the file extension ".asp".',
            example: '<% response.write("Hello World!") %>',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        An ASP file is just the same as an HTML file. An ASP file can contain text, HTML, XML, and scripts. Scripts in an ASP file are executed on the server.
                    </p>
                </>
            ),
            codeSnippet: `<!DOCTYPE html>
<html>
<body>
<%
response.write("Hello World!")
%>
</body>
</html>`
        },
        {
            id: 'asp-variables',
            title: 'ASP Variables',
            definition: 'Variables are used to store information.',
            example: 'dim name',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Variables are declared with the dim keyword.
                    </p>
                </>
            ),
            codeSnippet: `<%
dim name
name="Donald Duck"
response.write("My name is: " & name)
%>`
        },
        {
            id: 'asp-procedures',
            title: 'ASP Procedures',
            definition: 'In ASP, you can call a JavaScript procedure from a VBScript and vice versa.',
            example: 'sub vbproc(num1,num2) ... end sub',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        A procedure is a group of script commands that performs a specific task.
                    </p>
                </>
            ),
            codeSnippet: `<%
sub vbproc(num1,num2)
response.write(num1*num2)
end sub
%>`
        },
        {
            id: 'asp-forms',
            title: 'ASP Forms',
            definition: 'The Request.QueryString and Request.Form commands are used to retrieve information from forms, like user input.',
            example: 'Request.QueryString(variable)',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Request.QueryString collects values from a form with method="get". Request.Form collects values from a form with method="post".
                    </p>
                </>
            ),
            codeSnippet: `Request.QueryString(variable)
Request.Form(variable)`
        },
        {
            id: 'asp-cookies',
            title: 'ASP Cookies',
            definition: 'A cookie is often used to identify a user. A cookie is a small file that the server embeds on the user\'s computer.',
            example: 'Response.Cookies("firstname")="Alex"',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        The Response.Cookies command is used to create cookies.
                    </p>
                </>
            ),
            codeSnippet: `Response.Cookies("firstname")="Alex"`
        },
        {
            id: 'asp-session',
            title: 'ASP Session',
            definition: 'A Session object stores information about, or change settings for a user session.',
            example: 'Session("username")="Donald Duck"',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Variables stored in a Session object hold information about one single user, and are available to all pages in one application.
                    </p>
                </>
            ),
            codeSnippet: `Session("username")="Donald Duck"`
        }
    ];

    const topics = courseData.map(topic => topic.title);
    const activeTopic = courseData[activeTopicIndex];

    const CodeBlock = ({ code, lang = 'asp' }: { code: string, lang?: string }) => (
        <div className="bg-[#1e1e1e] text-gray-200 p-6 rounded-2xl font-mono text-sm mb-6 overflow-x-auto shadow-xl border border-gray-800">
            <div className="flex items-center space-x-2 mb-4 border-b border-gray-700 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-xs text-gray-500 font-sans">default.asp</span>
            </div>
            <pre className="leading-relaxed text-blue-300">{code}</pre>
        </div>
    );

    return (
        <CoursePageLayout
            title="ASP Tutorial"
            description="ASP (Active Server Pages) is a server-side script engine for dynamically-generated web pages."
            topics={topics}
            icon={Server}
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
                                <Code className="w-6 h-6 mr-2 text-blue-700" />
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

export default AspCoursePage;
