import React, { useRef, useEffect } from 'react';
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
            const scrollAmount = direction === 'left' ? -240 : 240;
            scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    const isCourseActive = (path: string) => {
        return location.pathname.toLowerCase() === path.toLowerCase();
    };

    // Auto-scroll active item into view on route change
    useEffect(() => {
        if (scrollContainerRef.current) {
            const activeElem = scrollContainerRef.current.querySelector('[data-active="true"]');
            if (activeElem) {
                activeElem.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            }
        }
    }, [location.pathname]);

    return (
        <div className="relative w-full text-gray-200 select-none">
            <div className="flex items-center relative w-full">
                {/* Desktop Left Scroll Button */}
                <button
                    onClick={() => handleScroll('left')}
                    aria-label="Scroll Left"
                    className="hidden md:flex items-center justify-center p-1.5 ml-2 rounded-full text-gray-400 hover:text-white hover:bg-white/15 transition-all z-10 shrink-0 cursor-pointer"
                >
                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>

                {/* Horizontal Touch Scroll Container */}
                <div
                    ref={scrollContainerRef}
                    className="flex items-center overflow-x-auto py-1 px-3 sm:px-5 space-x-1.5 sm:space-x-2 scroll-smooth w-full no-scrollbar touch-pan-x"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {/* Start padding buffer */}
                    <div className="w-1 shrink-0" aria-hidden="true" />

                    {COURSE_NAV_ITEMS.map((item) => {
                        const active = isCourseActive(item.path);
                        return (
                            <button
                                key={item.path}
                                data-active={active}
                                onClick={() => navigate(item.path)}
                                className={`px-3.5 sm:px-4.5 py-1 text-[11px] sm:text-xs font-black tracking-wider uppercase whitespace-nowrap rounded-md sm:rounded-lg transition-all duration-200 cursor-pointer shrink-0 ${
                                    active
                                        ? 'bg-gradient-to-r from-red-600 via-orange-500 to-red-600 text-white shadow-md shadow-red-600/30 ring-1 ring-white/30'
                                        : 'text-gray-300 dark:text-gray-400 hover:text-white hover:bg-white/10 active:scale-95'
                                }`}
                            >
                                {item.label}
                            </button>
                        );
                    })}

                    {/* End padding buffer */}
                    <div className="w-4 shrink-0" aria-hidden="true" />
                </div>

                {/* Desktop Right Scroll Button */}
                <button
                    onClick={() => handleScroll('right')}
                    aria-label="Scroll Right"
                    className="hidden md:flex items-center justify-center p-1.5 mr-2 rounded-full text-gray-400 hover:text-white hover:bg-white/15 transition-all z-10 shrink-0 cursor-pointer"
                >
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
            </div>
        </div>
    );
};

export default CourseSubNavbar;
