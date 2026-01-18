import React, { useState } from 'react';
import CoursePageLayout from '../../components/CoursePageLayout';
import { Server, Code, BookOpen, Lightbulb } from 'lucide-react';

const NodeJsCoursePage = () => {
    const [activeTopicIndex, setActiveTopicIndex] = useState(0);

    const courseData = [
        {
            id: 'node-js-intro',
            title: 'Node.js Intro',
            definition: 'Node.js is an open source server environment. Node.js allows you to run JavaScript on the server.',
            example: 'Using JavaScript to build a backend server instead of PHP or Java.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.). Node.js uses JavaScript on the server.
                    </p>
                </>
            ),
            codeSnippet: null
        },
        {
            id: 'node-js-get-started',
            title: 'Node.js Get Started',
            definition: 'Once you have downloaded and installed Node.js on your computer, let\'s try to display "Hello World" in a web browser.',
            example: 'Creating a simple web server that responds with text.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Create a Node.js file named "myfirst.js", and add the following code:
                    </p>
                </>
            ),
            codeSnippet: `var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080);`
        },
        {
            id: 'node-js-modules',
            title: 'Node.js Modules',
            definition: 'Consider modules to be the same as JavaScript libraries. A set of functions you want to include in your application.',
            example: 'Importing a "Date" module to easily handle dates and times.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Built-in Modules: Node.js has a set of built-in modules which you can use without any further installation.
                    </p>
                </>
            ),
            codeSnippet: `var dt = require('./myfirstmodule');`
        },
        {
            id: 'node-js-http-module',
            title: 'Node.js HTTP Module',
            definition: 'Node.js has a built-in module called HTTP, which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).',
            example: 'Creating a server that listens for requests from web browsers.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        To include the HTTP module, use the require() method:
                    </p>
                </>
            ),
            codeSnippet: `var http = require('http');
http.createServer(function (req, res) {
  res.write('Hello World!');
  res.end();
}).listen(8080);`
        },
        {
            id: 'node-js-file-system',
            title: 'Node.js File System',
            definition: 'The Node.js file system module allows you to work with the file system on your computer.',
            example: 'Reading a text file from your computer and displaying it on a webpage.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Common use for the File System module: Read files, Create files, Update files, Delete files, Rename files.
                    </p>
                </>
            ),
            codeSnippet: `var fs = require('fs');

fs.readFile('demofile1.html', function(err, data) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(data);
  return res.end();
});`
        },
        {
            id: 'node-js-url-module',
            title: 'Node.js URL Module',
            definition: 'The URL module splits up a web address into readable parts.',
            example: 'Parsing "http://localhost:8080/default.htm?year=2017&month=february" to get the year and month.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        To include the URL module, use the require() method:
                    </p>
                </>
            ),
            codeSnippet: `var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr, true);

console.log(q.host); //returns 'localhost:8080'`
        },
        {
            id: 'node-js-npm',
            title: 'Node.js NPM',
            definition: 'NPM is a package manager for Node.js packages, or modules if you like.',
            example: 'Using NPM to install a library like "express" or "react".',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        www.npmjs.com hosts thousands of free packages to download and use.
                    </p>
                </>
            ),
            codeSnippet: `npm install upper-case`
        },
        {
            id: 'node-js-events',
            title: 'Node.js Events',
            definition: 'Node.js is perfect for event-driven applications.',
            example: 'Firing an event when a file is opened or closed.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Every action on a computer is an event. Like when a connection is made or a file is opened.
                    </p>
                </>
            ),
            codeSnippet: `var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('I hear a scream!');
}

//Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('scream');`
        },
        {
            id: 'node-js-upload-files',
            title: 'Node.js Upload Files',
            definition: 'There is a very good module for working with file uploads, called "Formidable".',
            example: 'Allowing users to upload their profile picture.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        The Formidable module can be downloaded and installed using NPM.
                    </p>
                </>
            ),
            codeSnippet: `var formidable = require('formidable');`
        },
        {
            id: 'node-js-email',
            title: 'Node.js Email',
            definition: 'The Nodemailer module makes it easy to send emails from your computer.',
            example: 'Sending a welcome email when a user signs up.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        The Nodemailer module can be downloaded and installed using NPM.
                    </p>
                </>
            ),
            codeSnippet: `var nodemailer = require('nodemailer');`
        }
    ];

    const topics = courseData.map(topic => topic.title);
    const activeTopic = courseData[activeTopicIndex];

    const CodeBlock = ({ code, lang = 'javascript' }: { code: string, lang?: string }) => (
        <div className="bg-[#1e1e1e] text-gray-200 p-6 rounded-2xl font-mono text-sm mb-6 overflow-x-auto shadow-xl border border-gray-800">
            <div className="flex items-center space-x-2 mb-4 border-b border-gray-700 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-xs text-gray-500 font-sans">app.js</span>
            </div>
            <pre className="leading-relaxed text-green-300">{code}</pre>
        </div>
    );

    return (
        <CoursePageLayout
            title="Node.js Tutorial"
            description="Node.js is an open source server environment. Node.js allows you to run JavaScript on the server."
            topics={topics}
            icon={Server}
            colorClass="green"
            activeTopicIndex={activeTopicIndex}
            onTopicClick={setActiveTopicIndex}
        >
            <div className="space-y-8">
                {/* Definition Section */}
                <div className="bg-green-50 dark:bg-green-900/10 border-l-4 border-green-600 p-6 rounded-r-xl">
                    <h3 className="text-lg font-bold text-green-800 dark:text-green-300 mb-2 flex items-center">
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
                                <Code className="w-6 h-6 mr-2 text-green-600" />
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

export default NodeJsCoursePage;
