import React from 'react';
import { useParams } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';
import { BookOpen, Video, Code, FileText } from 'lucide-react';

const COURSE_DATA: Record<string, { title: string; description: string; topics: string[] }> = {
    'java': {
        title: 'Java Programming',
        description: 'Master Java from basics to advanced concepts. Learn OOPs, Collections, Multithreading, and more.',
        topics: ['Introduction to Java', 'Variables & Data Types', 'Operators', 'Control Flow', 'OOPs Concepts', 'Collections Framework', 'Multithreading', 'Exception Handling']
    },
    'python': {
        title: 'Python for Beginners',
        description: 'Learn Python, the most popular programming language for Data Science and Web Development.',
        topics: ['Python Basics', 'Lists & Tuples', 'Dictionaries', 'Functions', 'Modules', 'File Handling', 'NumPy & Pandas', 'Django Basics']
    },
    'web-dev': {
        title: 'Full Stack Web Development',
        description: 'Become a Full Stack Developer with HTML, CSS, JavaScript, React, and Node.js.',
        topics: ['HTML5 & CSS3', 'JavaScript ES6+', 'React.js', 'Node.js & Express', 'MongoDB', 'REST APIs', 'Authentication', 'Deployment']
    },
    'dsa': {
        title: 'Data Structures & Algorithms',
        description: 'Crack coding interviews with our comprehensive DSA course.',
        topics: ['Time Complexity', 'Arrays & Strings', 'Linked Lists', 'Stacks & Queues', 'Trees & Graphs', 'Dynamic Programming', 'Recursion', 'Sorting Algorithms']
    },
    // Default fallback
    'default': {
        title: 'Course Not Found',
        description: 'The requested course content is currently being updated.',
        topics: []
    }
};

const CourseTutorialPage = () => {
    const { courseId } = useParams<{ courseId: string }>();
    const course = COURSE_DATA[courseId || ''] || {
        title: `${courseId?.charAt(0).toUpperCase()}${courseId?.slice(1)} Tutorial`,
        description: 'Comprehensive tutorial coming soon.',
        topics: ['Getting Started', 'Basic Concepts', 'Advanced Topics', 'Projects']
    };

    return (
        <PageWrapper>
            <div className="min-h-screen bg-gray-50 dark:bg-black relative">
                {/* Background decorative elements */}
                <div className="absolute top-0 right-0 w-1/2 h-96 bg-gradient-to-b from-red-500/5 to-transparent pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        {/* Sidebar / Table of Contents */}
                        <div className="lg:col-span-1">
                            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-gray-200/50 dark:border-gray-800/50 sticky top-32">
                                <h3 className="font-black text-lg mb-6 flex items-center text-gray-900 dark:text-white">
                                    <BookOpen className="w-5 h-5 mr-3 text-red-600" />
                                    Tutorial Content
                                </h3>
                                <ul className="space-y-1">
                                    {course.topics.map((topic, index) => (
                                        <li key={index}>
                                            <a href="#" className="block px-4 py-3 rounded-xl hover:bg-red-50 dark:hover:bg-red-900/20 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-all duration-200 border border-transparent hover:border-red-100 dark:hover:border-red-900/30">
                                                <span className="mr-2 opacity-50">{index + 1}.</span> {topic}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="lg:col-span-3">
                            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200/50 dark:border-gray-800/50 min-h-[60vh]">
                                <h1 className="text-4xl md:text-5xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">{course.title}</h1>
                                <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">{course.description}</p>

                                <div className="prose dark:prose-invert max-w-none">
                                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-l-4 border-blue-500 p-6 rounded-r-xl mb-10">
                                        <p className="font-medium text-blue-800 dark:text-blue-200 flex items-start">
                                            <span className="text-2xl mr-4">🚀</span>
                                            <span>This is a placeholder for the complete <strong>{course.title}</strong> tutorial.
                                                Detailed chapters, code examples, and video lessons will be added here soon.</span>
                                        </p>
                                    </div>

                                    <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-900 dark:text-white">
                                        <Video className="w-7 h-7 mr-3 text-red-600" />
                                        Video Introduction
                                    </h2>
                                    <div className="aspect-video bg-black rounded-2xl mb-10 flex items-center justify-center shadow-2xl shadow-red-900/20 border border-gray-800 relative overflow-hidden group cursor-pointer">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-red-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-lg shadow-red-600/40 group-hover:scale-110 transition-transform duration-300 z-10">
                                            <Video className="w-10 h-10 text-white fill-current" />
                                        </div>
                                    </div>

                                    <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-900 dark:text-white">
                                        <Code className="w-7 h-7 mr-3 text-emerald-500" />
                                        Code Example
                                    </h2>
                                    <div className="bg-[#1e1e1e] text-gray-200 p-6 rounded-2xl font-mono text-sm mb-8 overflow-x-auto shadow-xl border border-gray-800">
                                        <div className="flex items-center space-x-2 mb-4 border-b border-gray-700 pb-4">
                                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                            <span className="ml-4 text-xs text-gray-500 font-sans">example.js</span>
                                        </div>
                                        <pre className="leading-relaxed text-blue-300">{`// Example code for ${course.title}
console.log("Hello, World!");
// More code coming soon...`}</pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageWrapper>
    );
};

export default CourseTutorialPage;
