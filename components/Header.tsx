import React, { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { Sun, Moon, Menu, X, LogOut, User } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';
import { NAV_LINKS } from '../constants';
import { MotionDiv } from './motion';

const Header = () => {
    const { theme, toggleTheme } = useTheme();
    const { user, logout } = useAuth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

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
                                    `text-sm font-medium transition-colors duration-300 ${isActive ? 'text-red-600' : 'text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-600'}`
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
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-blue-500" />}
                        </button>

                        {user ? (
                            <div className="hidden lg:flex items-center space-x-2">
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Hi, {user.username}</span>
                                <button
                                    onClick={handleLogout}
                                    className="p-2 rounded-full bg-red-500/10 hover:bg-red-500/20 text-red-500 transition-colors"
                                    aria-label="Logout"
                                >
                                    <LogOut className="h-5 w-5" />
                                </button>
                            </div>
                        ) : (
                            <Link
                                to="/auth"
                                className="hidden lg:flex items-center px-4 py-2 rounded-full bg-red-600 text-white text-sm font-medium hover:bg-red-700 transition-colors"
                            >
                                <User className="h-4 w-4 mr-2" />
                                Sign Up / Login
                            </Link>
                        )}

                        <div className="lg:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="p-2 rounded-full"
                                aria-label="Toggle menu"
                            >
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
                                            `block text-center py-2 rounded-md transition-colors duration-300 ${isActive ? 'bg-red-600 text-white' : 'text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700'}`
                                        }
                                    >
                                        {link.name}
                                    </NavLink>
                                </MotionDiv>
                            ))}

                            <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4">
                                {user ? (
                                    <div className="flex flex-col items-center space-y-3">
                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Hi, {user.username}</span>
                                        <button
                                            onClick={() => {
                                                handleLogout();
                                                setIsMenuOpen(false);
                                            }}
                                            className="w-full py-2 px-4 rounded-md bg-red-500/10 text-red-500 hover:bg-red-500/20 transition-colors flex items-center justify-center"
                                        >
                                            <LogOut className="h-4 w-4 mr-2" />
                                            Logout
                                        </button>
                                    </div>
                                ) : (
                                    <Link
                                        to="/auth"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="w-full flex items-center justify-center py-2 px-4 rounded-md bg-red-600 text-white font-medium hover:bg-red-700 transition-colors"
                                    >
                                        <User className="h-4 w-4 mr-2" />
                                        Sign Up / Login
                                    </Link>
                                )}
                            </div>
                        </div>
                    </MotionDiv>
                )}
            </nav>
        </header>
    );
};

export default Header;