import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { NAV_LINKS } from '../constants';
import { MotionDiv } from './motion';

const Header = () => {
    const { theme, toggleTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.05 } },
    };

    const menuItemVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="relative flex items-center justify-between bg-white/10 dark:bg-black/20 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 shadow-lg">
                    <Link to="/" className="flex items-center">
                         <img src="/assets/ADV Indian Coder Logo.png" alt="ADV Indian Coder Logo" className="h-10" />
                    </Link>

                    <div className="hidden lg:flex items-center space-x-6">
                        {NAV_LINKS.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className={({ isActive }) =>
                                    `text-sm font-medium transition-colors duration-300 ${isActive ? 'text-primary' : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary'}`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>

                    <div className="flex items-center space-x-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full bg-white/20 hover:bg-white/30 dark:bg-black/30 dark:hover:bg-black/50 transition-colors"
                        >
                            {theme === 'dark' ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-blue-500" />}
                        </button>
                        <div className="lg:hidden">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-full">
                                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {isMenuOpen && (
                    <MotionDiv
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        className="lg:hidden mt-2 p-4 bg-white/80 dark:bg-black/80 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl"
                    >
                        <div className="flex flex-col space-y-4">
                            {NAV_LINKS.map((link) => (
                                <MotionDiv key={link.name} variants={menuItemVariants}>
                                    <NavLink
                                        to={link.path}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={({ isActive }) =>
                                            `block text-center py-2 rounded-md transition-colors duration-300 ${isActive ? 'bg-primary text-white' : 'text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700'}`
                                        }
                                    >
                                        {link.name}
                                    </NavLink>
                                </MotionDiv>
                            ))}
                        </div>
                    </MotionDiv>
                )}
            </nav>
        </header>
    );
};

export default Header;