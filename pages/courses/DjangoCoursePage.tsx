import React, { useState } from 'react';
import CoursePageLayout from '../../components/CoursePageLayout';
import { Globe, Code, BookOpen, Lightbulb } from 'lucide-react';

const DjangoCoursePage = () => {
    const [activeTopicIndex, setActiveTopicIndex] = useState(0);

    const courseData = [
        {
            id: 'django-intro',
            title: 'Django Intro',
            definition: 'Django is a high-level Python web framework that enables rapid development of secure and maintainable websites.',
            example: 'Building a content management system (CMS) with Django.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Built by experienced developers, it takes care of much of the hassle of web development, so you can focus on writing your app without needing to reinvent the wheel.
                    </p>
                </>
            ),
            codeSnippet: null
        },
        {
            id: 'django-get-started',
            title: 'Django Get Started',
            definition: 'To start using Django, you need to have Python installed. Then you can install Django using pip.',
            example: 'Installing Django and creating a new project.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        After installing, you can use the django-admin command to start a new project.
                    </p>
                </>
            ),
            codeSnippet: `pip install django
django-admin startproject myproject
cd myproject
python manage.py runserver`
        },
        {
            id: 'django-create-app',
            title: 'Django Create App',
            definition: 'An app is a web application that does something, e.g., a blog, a database of public records, or a simple poll app.',
            example: 'Creating a "members" app within your project.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        A project can contain multiple apps. An app can be in multiple projects.
                    </p>
                </>
            ),
            codeSnippet: `python manage.py startapp myapp`
        },
        {
            id: 'django-views',
            title: 'Django Views',
            definition: 'A view function, or view for short, is a Python function that takes a Web request and returns a Web response.',
            example: 'Returning "Hello world!" when a user visits a page.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        This response can be the HTML contents of a Web page, or a redirect, or a 404 error, or an XML document, or an image . . . or anything, really.
                    </p>
                </>
            ),
            codeSnippet: `from django.http import HttpResponse

def index(request):
    return HttpResponse("Hello world!")`
        },
        {
            id: 'django-urls',
            title: 'Django URLs',
            definition: 'To design URLs for an app, you create a Python module informally called a URLconf (URL configuration).',
            example: 'Mapping the root URL to the index view.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        This module is pure Python code and is a mapping between URL path expressions to Python functions (your views).
                    </p>
                </>
            ),
            codeSnippet: `from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
]`
        },
        {
            id: 'django-templates',
            title: 'Django Templates',
            definition: 'A template contains the static parts of the desired HTML output as well as some special syntax describing how dynamic content will be inserted.',
            example: 'Displaying a variable in an HTML file.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Django's template language is designed to strike a balance between power and ease.
                    </p>
                </>
            ),
            codeSnippet: `<h1>Hello {{ firstname }}!</h1>`
        },
        {
            id: 'django-models',
            title: 'Django Models',
            definition: 'A model is the single, definitive source of information about your data. It contains the essential fields and behaviors of the data you’re storing.',
            example: 'Defining a Person model with first_name and last_name fields.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Generally, each model maps to a single database table.
                    </p>
                </>
            ),
            codeSnippet: `from django.db import models

class Person(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)`
        },
        {
            id: 'django-admin',
            title: 'Django Admin',
            definition: 'One of the most powerful parts of Django is the automatic admin interface.',
            example: 'Managing users and content through the built-in admin panel.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        It reads metadata from your models to provide a quick, model-centric interface where trusted users can manage content on your site.
                    </p>
                </>
            ),
            codeSnippet: `python manage.py createsuperuser`
        },
        {
            id: 'django-static-files',
            title: 'Django Static Files',
            definition: 'Websites generally need to serve additional files such as images, JavaScript, or CSS.',
            example: 'Loading an image in a template.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        In Django, we refer to these files as "static files". Django provides django.contrib.staticfiles to help you manage them.
                    </p>
                </>
            ),
            codeSnippet: `{% load static %}
<img src="{% static 'my_app/example.jpg' %}" alt="My image">`
        }
    ];

    const topics = courseData.map(topic => topic.title);
    const activeTopic = courseData[activeTopicIndex];

    const CodeBlock = ({ code, lang = 'python' }: { code: string, lang?: string }) => (
        <div className="bg-[#1e1e1e] text-gray-200 p-6 rounded-2xl font-mono text-sm mb-6 overflow-x-auto shadow-xl border border-gray-800">
            <div className="flex items-center space-x-2 mb-4 border-b border-gray-700 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-xs text-gray-500 font-sans">{lang === 'python' ? 'views.py' : 'index.html'}</span>
            </div>
            <pre className="leading-relaxed text-green-300">{code}</pre>
        </div>
    );

    return (
        <CoursePageLayout
            title="Django Tutorial"
            description="Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design."
            topics={topics}
            icon={Globe}
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
                            <CodeBlock code={activeTopic.codeSnippet} lang={activeTopic.title.includes('Templates') || activeTopic.title.includes('Static') ? 'html' : 'python'} />
                        </div>
                    )}
                </div>
            </div>
        </CoursePageLayout>
    );
};

export default DjangoCoursePage;
