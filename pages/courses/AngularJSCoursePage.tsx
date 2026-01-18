import React, { useState } from 'react';
import CoursePageLayout from '../../components/CoursePageLayout';
import { Box, Code, BookOpen, Lightbulb } from 'lucide-react';

const AngularJSCoursePage = () => {
    const [activeTopicIndex, setActiveTopicIndex] = useState(0);

    const courseData = [
        {
            id: 'angularjs-intro',
            title: 'AngularJS Intro',
            definition: 'AngularJS extends HTML with new attributes. Perfect for Single Page Applications (SPAs).',
            example: 'AngularJS is a JavaScript framework.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        AngularJS is distributed as a JavaScript file, and can be added to a web page with a script tag.
                    </p>
                </>
            ),
            codeSnippet: `<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>`
        },
        {
            id: 'angularjs-expressions',
            title: 'AngularJS Expressions',
            definition: 'AngularJS expressions bind data to HTML, the same way as the ng-bind directive.',
            example: '{{ 5 + 5 }}',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        AngularJS expressions are written inside double braces: <code>{`{{ expression }}`}</code>.
                    </p>
                </>
            ),
            codeSnippet: `<!DOCTYPE html>
<html>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
<body>

<div ng-app="">
  <p>My first expression: {{ 5 + 5 }}</p>
</div>

</body>
</html>`
        },
        {
            id: 'angularjs-modules',
            title: 'AngularJS Modules',
            definition: 'An AngularJS module defines an application. The module is a container for the different parts of an application.',
            example: 'var app = angular.module("myApp", []);',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        The module is a container for the application controllers. Controllers always belong to a module.
                    </p>
                </>
            ),
            codeSnippet: `<div ng-app="myApp" ng-controller="myCtrl">
{{ firstName + " " + lastName }}
</div>

<script>
var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope) {
  $scope.firstName = "John";
  $scope.lastName = "Doe";
});
</script>`
        },
        {
            id: 'angularjs-directives',
            title: 'AngularJS Directives',
            definition: 'AngularJS extends HTML with new attributes called Directives.',
            example: 'ng-app, ng-model, ng-bind.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        AngularJS has a set of built-in directives which offers functionality to your applications.
                    </p>
                </>
            ),
            codeSnippet: `<div ng-app="" ng-init="firstName='John'">

<p>The name is <span ng-bind="firstName"></span></p>

</div>`
        },
        {
            id: 'angularjs-model',
            title: 'AngularJS Model',
            definition: 'The ng-model directive binds the value of HTML controls (input, select, textarea) to application data.',
            example: '<input ng-model="name">',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        The ng-model directive can also provide type validation for application data (number, email, required).
                    </p>
                </>
            ),
            codeSnippet: `<div ng-app="myApp" ng-controller="myCtrl">
Name: <input ng-model="name">
<h1>You entered: {{name}}</h1>
</div>`
        },
        {
            id: 'angularjs-controllers',
            title: 'AngularJS Controllers',
            definition: 'AngularJS applications are controlled by controllers.',
            example: 'app.controller("myCtrl", function($scope) { ... });',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        The ng-controller directive defines the application controller. A controller is a JavaScript Object, created by a standard JavaScript object constructor.
                    </p>
                </>
            ),
            codeSnippet: `<div ng-app="myApp" ng-controller="myCtrl">

First Name: <input type="text" ng-model="firstName"><br>
Last Name: <input type="text" ng-model="lastName"><br>
<br>
Full Name: {{firstName + " " + lastName}}

</div>

<script>
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
});
</script>`
        },
        {
            id: 'angularjs-scopes',
            title: 'AngularJS Scopes',
            definition: 'The scope is the binding part between the HTML (view) and the JavaScript (controller).',
            example: '$scope.name = "John";',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        The scope is an object with the available properties and methods. The scope is available for both the view and the controller.
                    </p>
                </>
            ),
            codeSnippet: `app.controller('myCtrl', function($scope) {
    $scope.carname = "Volvo";
});`
        },
        {
            id: 'angularjs-filters',
            title: 'AngularJS Filters',
            definition: 'Filters can be added to expressions and directives using a pipe character.',
            example: '{{ lastName | uppercase }}',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        AngularJS provides filters to transform data: currency, date, filter, json, limitTo, lowercase, number, orderBy, uppercase.
                    </p>
                </>
            ),
            codeSnippet: `<div ng-app="myApp" ng-controller="personCtrl">

<p>The name is {{ lastName | uppercase }}</p>

</div>`
        },
        {
            id: 'angularjs-services',
            title: 'AngularJS Services',
            definition: 'In AngularJS, a service is a function, or object, that is available for, and limited to, your AngularJS application.',
            example: '$location, $http, $timeout.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        AngularJS has about 30 built-in services. One of them is the $location service.
                    </p>
                </>
            ),
            codeSnippet: `var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $location) {
    $scope.myUrl = $location.absUrl();
});`
        },
        {
            id: 'angularjs-http',
            title: 'AngularJS Http',
            definition: '$http is an AngularJS service for reading data from remote servers.',
            example: '$http.get("welcome.htm").then(function(response) { ... });',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        The AngularJS $http service makes a request to the server, and returns a response.
                    </p>
                </>
            ),
            codeSnippet: `var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
  $http.get("welcome.htm")
  .then(function(response) {
      $scope.myWelcome = response.data;
  });
});`
        },
        {
            id: 'angularjs-events',
            title: 'AngularJS Events',
            definition: 'AngularJS has its own HTML event directives.',
            example: 'ng-click, ng-dblclick, ng-mousedown.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        You can add AngularJS event listeners to your HTML elements.
                    </p>
                </>
            ),
            codeSnippet: `<div ng-app="myApp" ng-controller="myCtrl">

<button ng-click="count = count + 1">Click Me!</button>

<p>{{ count }}</p>

</div>`
        },
        {
            id: 'angularjs-forms',
            title: 'AngularJS Forms',
            definition: 'AngularJS forms can be validated using the standard HTML5 attributes and some extra AngularJS attributes.',
            example: '<form name="myForm">',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        AngularJS enriches form filling and validation.
                    </p>
                </>
            ),
            codeSnippet: `<form name="myForm">
  <input name="myInput" ng-model="myInput" required>
</form>

<p>The input's valid state is:</p>
<h1>{{myForm.myInput.$valid}}</h1>`
        }
    ];

    const topics = courseData.map(topic => topic.title);
    const activeTopic = courseData[activeTopicIndex];

    const CodeBlock = ({ code, lang = 'html' }: { code: string, lang?: string }) => (
        <div className="bg-[#1e1e1e] text-gray-200 p-6 rounded-2xl font-mono text-sm mb-6 overflow-x-auto shadow-xl border border-gray-800">
            <div className="flex items-center space-x-2 mb-4 border-b border-gray-700 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-xs text-gray-500 font-sans">index.html</span>
            </div>
            <pre className="leading-relaxed text-red-300">{code}</pre>
        </div>
    );

    return (
        <CoursePageLayout
            title="AngularJS Tutorial"
            description="AngularJS extends HTML with new attributes. Perfect for Single Page Applications (SPAs)."
            topics={topics}
            icon={Box}
            colorClass="red"
            activeTopicIndex={activeTopicIndex}
            onTopicClick={setActiveTopicIndex}
        >
            <div className="space-y-8">
                {/* Definition Section */}
                <div className="bg-red-50 dark:bg-red-900/10 border-l-4 border-red-600 p-6 rounded-r-xl">
                    <h3 className="text-lg font-bold text-red-800 dark:text-red-300 mb-2 flex items-center">
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
                                <Code className="w-6 h-6 mr-2 text-red-600" />
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

export default AngularJSCoursePage;
