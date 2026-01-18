import React from 'react';
import { NavLink } from 'react-router-dom';

const COURSES = [
    { id: 'html', name: 'HTML' },
    { id: 'javascript', name: 'JavaScript' },
    { id: 'adv-css', name: 'ADV-CSS' },
    { id: 'bootstrap', name: 'Bootstrap' },
    { id: 'react', name: 'React' },
    { id: 'jquery', name: 'jQuery' },
    { id: 'angular', name: 'Angular' },
    { id: 'angular-js', name: 'AngularJS' },
    { id: 'vue', name: 'Vue' },
    { id: 'sass', name: 'SASS' },
    { id: 'nodejs', name: 'Node.js' },
    { id: 'php', name: 'PHP' },
    { id: 'java', name: 'Java' },
    { id: 'python', name: 'Python' },
    { id: 'django', name: 'Django' },
    { id: 'asp', name: 'ASP' },
    { id: 'go', name: 'Go' },
    { id: 'kotlin', name: 'Kotlin' },
    { id: 'swift', name: 'Swift' },
    { id: 'typescript', name: 'TypeScript' },
    { id: 'csharp', name: 'C#' },
    { id: 'c', name: 'C' },
    { id: 'cpp', name: 'C++' },
    { id: 'rust', name: 'Rust' },
    { id: 'bash', name: 'Bash' },
    { id: 'r', name: 'R' },
    { id: 'sql', name: 'SQL' },
    { id: 'numpy', name: 'NumPy' },
    { id: 'pandas', name: 'Pandas' },
    { id: 'scipy', name: 'SciPy' },
    { id: 'data-science', name: 'Data Science' },
    { id: 'ai', name: 'AI' },
    { id: 'gen-ai', name: 'Gen AI' },
    { id: 'mysql', name: 'MySQL' },
    { id: 'postgresql', name: 'PostgreSQL' },
    { id: 'mongodb', name: 'MongoDB' },
    { id: 'excel', name: 'Excel' },
    { id: 'xml', name: 'XML' },
    { id: 'cybersecurity', name: 'Cybersecurity' },
    { id: 'dsa', name: 'DSA' },
    { id: 'git-github', name: 'Git & Github' },
];

const CourseNavBar = () => {
    return (
        <div className="sticky top-[72px] z-40 backdrop-blur-xl bg-white/70 dark:bg-black/70 border-b border-gray-200/50 dark:border-gray-800/50 shadow-sm transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center space-x-1 py-3 overflow-x-auto no-scrollbar mask-gradient">
                    <NavLink
                        to="/courses"
                        end
                        className={({ isActive }) =>
                            `px-5 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 transform hover:scale-105 ${isActive
                                ? 'bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg shadow-red-500/30'
                                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/80 hover:text-red-600 dark:hover:text-red-400'
                            }`
                        }
                    >
                        All Courses
                    </NavLink>
                    {COURSES.map(course => (
                        <NavLink
                            key={course.id}
                            to={`/course/${course.id}`}
                            className={({ isActive }) =>
                                `px-5 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 transform hover:scale-105 ${isActive
                                    ? 'bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg shadow-red-500/30'
                                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/80 hover:text-red-600 dark:hover:text-red-400'
                                }`
                            }
                        >
                            {course.name}
                        </NavLink>
                    ))}
                </div>
            </div>
            {/* Gradient masks for scroll indication */}
            <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-white dark:from-black to-transparent pointer-events-none lg:hidden"></div>
            <div className="absolute top-0 bottom-0 right-0 w-8 bg-gradient-to-l from-white dark:from-black to-transparent pointer-events-none lg:hidden"></div>
        </div>
    );
};

export default CourseNavBar;
