import React, { useState, useEffect, useCallback } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X, Search } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { NAV_LINKS } from '../constants';
import { MotionDiv } from './motion';
import GlobalSearch from './GlobalSearch';

const Header = () => {
    const { theme, toggleTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const location = useLocation();

    // CMD+K Shortcut
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                setIsSearchOpen(true);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

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

    // Pages that are forced to dark background
    const isDarkPage = location.pathname === '/' || 
                       location.pathname === '/courses' || 
                       location.pathname === '/masterclass' || 
                       location.pathname === '/resources' ||
                       location.pathname === '/about' ||
                       location.pathname === '/community' ||
                       location.pathname === '/career';

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-[1000]">
                <nav className="max-w-7xl mx-auto px-4 py-2 md:py-4">
                    <div className={`relative flex items-center justify-between backdrop-blur-lg border border-white/20 rounded-full px-4 md:px-6 py-2 md:py-3 shadow-lg ${isDarkPage ? 'bg-black/20 text-white' : 'bg-white/10 dark:bg-black/20 text-gray-800 dark:text-white'}`}>
                        <Link to="/" className="flex items-center shrink-0">
                            <img src="/assets/ADV Indian Coder Logo.png" alt="ADV Indian Coder Logo" className="h-8 md:h-10 w-auto max-w-[120px] md:max-w-none object-contain" />
                        </Link>

                        <div className="hidden xl:flex items-center space-x-6">
                            {NAV_LINKS.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    className={({ isActive }) =>
                                        `text-sm font-medium transition-colors duration-300 inline-flex items-center gap-1.5 ${isActive ? 'text-red-500' : (isDarkPage ? 'text-gray-200 hover:text-red-400' : 'text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-600')}`
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
                                    ) : link.name === 'ADV Lab' ? (
                                        <>
                                            ADV Lab
                                        </>
                                    ) : link.name === 'Jobs' ? (
                                        <>
                                            Jobs
                                            <span className="text-[9px] font-black tracking-widest bg-red-500 text-white px-1.5 py-0.5 rounded-full leading-none animate-pulse">NEW</span>
                                        </>
                                    ) : link.name}
                                </NavLink>
                            ))}
                        </div>

                        <div className="flex items-center space-x-2 md:space-x-4">
                            <button
                                onClick={() => setIsSearchOpen(true)}
                                className="p-2 rounded-full bg-white/20 hover:bg-white/30 dark:bg-black/30 dark:hover:bg-black/50 transition-colors flex items-center gap-2 group"
                                aria-label="Search"
                            >
                                <Search className={`h-5 w-5 ${isDarkPage ? 'text-white' : 'text-gray-800 dark:text-white'}`} />
                                <span className="hidden md:block text-xs font-mono text-gray-400 group-hover:text-white">K</span>
                            </button>

                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full bg-white/20 hover:bg-white/30 dark:bg-black/30 dark:hover:bg-black/50 transition-colors"
                                aria-label="Toggle theme"
                            >
                                {theme === 'dark' || isDarkPage ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-blue-500" />}
                            </button>

                            <div className="xl:hidden">
                                <button
                                    onClick={toggleMenu}
                                    className="relative p-2 rounded-full bg-white/20 hover:bg-white/30 dark:bg-black/30 dark:hover:bg-black/50 transition-colors"
                                    aria-label="Toggle menu"
                                    aria-expanded={isMenuOpen}
                                >
                                    {isMenuOpen ? <X className={`h-6 w-6 ${isDarkPage ? 'text-white' : 'text-gray-800 dark:text-white'}`} /> : <Menu className={`h-6 w-6 ${isDarkPage ? 'text-white' : 'text-gray-800 dark:text-white'}`} />}
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
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[1998] xl:hidden"
                        onClick={() => setIsMenuOpen(false)}
                        aria-hidden="true"
                    />

                    {/* Menu Panel */}
                    <MotionDiv
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        className="fixed top-[72px] md:top-[88px] left-4 right-4 z-[2000] xl:hidden p-4 bg-white/95 dark:bg-[#0a0f1c]/95 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-white/10 shadow-2xl max-h-[calc(100vh-120px)] overflow-y-auto"
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
                                        ) : link.name === 'ADV Lab' ? (
                                            <span className="flex items-center gap-2 mx-auto">
                                                ADV Lab
                                            </span>
                                        ) : link.name === 'Jobs' ? (
                                            <span className="flex items-center gap-2 mx-auto">
                                                Jobs
                                                <span className="text-[9px] font-black tracking-widest bg-red-500 text-white px-1.5 py-0.5 rounded-full leading-none animate-pulse">NEW</span>
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
            <GlobalSearch isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </>
    );
};

export default Header;
