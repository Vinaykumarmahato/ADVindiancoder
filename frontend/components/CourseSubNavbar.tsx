import React, { useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CourseNavItem {
    label: string;
    path: string;
}

const COURSE_NAV_ITEMS: CourseNavItem[] = [
    { label: 'HTML', path: '/course/html' },
    { label: 'CSS', path: '/course/css' },
    { label: 'JAVASCRIPT', path: '/course/javascript' },
    { label: 'PYTHON', path: '/course/python' },
    { label: 'JAVA', path: '/course/java' },
    { label: 'C', path: '/course/c' },
    { label: 'C++', path: '/course/cpp' },
    { label: 'C#', path: '/course/csharp' },
    { label: 'SQL', path: '/course/sql' },
    { label: 'REACT', path: '/course/react' },
    { label: 'NODEJS', path: '/course/nodejs' },
    { label: 'MYSQL', path: '/course/mysql' },
    { label: 'BOOTSTRAP', path: '/course/bootstrap' },
    { label: 'JQUERY', path: '/course/jquery' },
    { label: 'ANGULAR', path: '/course/angular' },
    { label: 'VUE', path: '/course/vue' },
    { label: 'TYPESCRIPT', path: '/course/typescript' },
    { label: 'PHP', path: '/course/php' },
    { label: 'DJANGO', path: '/course/django' },
    { label: 'DSA', path: '/course/dsa' },
    { label: 'DATA SCIENCE', path: '/course/data-science' },
    { label: 'AI & ML', path: '/course/ai' },
    { label: 'GEN AI', path: '/course/gen-ai' },
    { label: 'GIT', path: '/course/git' },
    { label: 'CYBERSECURITY', path: '/course/cybersecurity' },
    { label: 'MONGODB', path: '/course/mongodb' },
    { label: 'POSTGRESQL', path: '/course/postgresql' },
    { label: 'EXCEL', path: '/course/excel' },
];

const CourseSubNavbar: React.FC = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();
    const location = useLocation();

    const handleScroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = direction === 'left' ? -250 : 250;
            scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    const isCourseActive = (path: string) => {
        return location.pathname.toLowerCase() === path.toLowerCase();
    };

    return (
        <div className="relative w-full bg-[#111827] dark:bg-[#090d16] text-gray-200 border-y border-gray-800/80 shadow-inner z-20 select-none">
            <div className="max-w-7xl mx-auto flex items-center relative px-2 sm:px-4">
                {/* Left Scroll Button */}
                <button
                    onClick={() => handleScroll('left')}
                    aria-label="Scroll Left"
                    className="flex items-center justify-center h-10 w-8 shrink-0 bg-[#111827] dark:bg-[#090d16] text-gray-400 hover:text-white hover:bg-gray-800/60 transition-colors z-10 cursor-pointer"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Horizontal Scrollable Container */}
                <div
                    ref={scrollContainerRef}
                    className="flex items-center overflow-x-auto scrollbar-none py-1.5 px-1 space-x-1 sm:space-x-1.5 scroll-smooth w-full"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {COURSE_NAV_ITEMS.map((item) => {
                        const active = isCourseActive(item.path);
                        return (
                            <button
                                key={item.path}
                                onClick={() => navigate(item.path)}
                                className={`px-3 py-1.5 text-xs sm:text-sm font-bold tracking-wide uppercase whitespace-nowrap rounded-md transition-all duration-200 cursor-pointer ${
                                    active
                                        ? 'bg-gradient-to-r from-red-600 to-orange-500 text-white shadow-md shadow-red-900/40 ring-1 ring-white/20'
                                        : 'text-gray-300 hover:text-white hover:bg-gray-800/70 dark:hover:bg-white/10'
                                }`}
                            >
                                {item.label}
                            </button>
                        );
                    })}
                </div>

                {/* Right Scroll Button */}
                <button
                    onClick={() => handleScroll('right')}
                    aria-label="Scroll Right"
                    className="flex items-center justify-center h-10 w-8 shrink-0 bg-[#111827] dark:bg-[#090d16] text-gray-400 hover:text-white hover:bg-gray-800/60 transition-colors z-10 cursor-pointer"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
};

export default CourseSubNavbar;
