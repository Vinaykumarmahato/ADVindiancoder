import React, { useState, useEffect, useCallback } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { NAV_LINKS } from '../constants';
import { MotionDiv } from './motion';

const Header = () => {
    const { theme, toggleTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    // Close menu on route change
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);

    const toggleMenu = useCallback(() => {
        setIsMenuOpen(prev => !prev);
    }, []);

    const menuVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.05 } },
    };

    const menuItemVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-[100]">
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
                                        `text-sm font-medium transition-colors duration-300 inline-flex items-center gap-1.5 ${isActive ? 'text-red-600' : 'text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-600'}`
                                    }
                                >
                                    {link.name === 'Live Masterclass' ? (
                                        <>
                                            <span className="relative flex h-2 w-2">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                                            </span>
                                            Live Masterclass
                                            <span className="text-[9px] font-black tracking-widest bg-red-600 text-white px-1.5 py-0.5 rounded-full leading-none">LIVE</span>
                                        </>
                                    ) : link.name}
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

                            <div className="lg:hidden">
                                <button
                                    onClick={toggleMenu}
                                    className="relative p-2 rounded-full bg-white/20 hover:bg-white/30 dark:bg-black/30 dark:hover:bg-black/50 transition-colors"
                                    aria-label="Toggle menu"
                                    aria-expanded={isMenuOpen}
                                >
                                    {isMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

            {/* ── Mobile Menu Overlay (Portal-like: rendered outside nav flow) ── */}
            {isMenuOpen && (
                <>
                    {/* Backdrop overlay */}
                    <div
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[998] lg:hidden"
                        onClick={() => setIsMenuOpen(false)}
                        aria-hidden="true"
                    />

                    {/* Menu Panel */}
                    <MotionDiv
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        className="fixed top-[88px] left-4 right-4 z-[999] lg:hidden p-4 bg-white/95 dark:bg-[#0a0f1c]/95 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-white/10 shadow-2xl max-h-[calc(100vh-120px)] overflow-y-auto"
                    >
                        <div className="flex flex-col space-y-2">
                            {NAV_LINKS.map((link) => (
                                <MotionDiv key={link.name} variants={menuItemVariants}>
                                    <NavLink
                                        to={link.path}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={({ isActive }) =>
                                            `flex items-center gap-3 text-center py-3 px-4 rounded-xl transition-all duration-300 font-medium ${isActive
                                                ? 'bg-red-600 text-white shadow-lg shadow-red-600/20'
                                                : 'text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10'
                                            }`
                                        }
                                    >
                                        {link.name === 'Live Masterclass' ? (
                                            <span className="flex items-center gap-2 mx-auto">
                                                <span className="relative flex h-2 w-2">
                                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                                                </span>
                                                Live Masterclass
                                                <span className="text-[9px] font-black tracking-widest bg-red-500/20 text-red-300 px-1.5 py-0.5 rounded-full leading-none">LIVE</span>
                                            </span>
                                        ) : (
                                            <span className="mx-auto">{link.name}</span>
                                        )}
                                    </NavLink>
                                </MotionDiv>
                            ))}
                        </div>
                    </MotionDiv>
                </>
            )}
        </>
    );
};

export default Header;
