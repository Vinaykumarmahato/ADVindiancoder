import React, { useState, useEffect, useCallback } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X, Search, Flame, ChevronDown, Rocket, Sparkles, ExternalLink, Home } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { NAV_LINKS } from '../constants';
import { MotionDiv } from './motion';
import GlobalSearch from './GlobalSearch';

const Header = () => {
    const { theme, toggleTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [streak, setStreak] = useState(0);
    const location = useLocation();

    // Load and listen for streak updates
    useEffect(() => {
        const updateStreak = () => {
            const streakData = localStorage.getItem('adv_lab_streak');
            if (streakData) {
                try {
                    const parsed = JSON.parse(streakData);
                    const today = new Date();
                    today.setHours(0,0,0,0);
                    const lastDate = new Date(parsed.lastRunDate);
                    lastDate.setHours(0,0,0,0);
                    
                    const diffTime = today.getTime() - lastDate.getTime();
                    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); 
                    
                    if (diffDays > 1) {
                        setStreak(0);
                    } else {
                        setStreak(parsed.count);
                    }
                } catch (e) {
                    setStreak(0);
                }
            } else {
                setStreak(0);
            }
        };
        
        updateStreak();
        window.addEventListener('adv_streak_updated', updateStreak);
        return () => window.removeEventListener('adv_streak_updated', updateStreak);
    }, []);

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
        hidden: { opacity: 0, scale: 0.95, y: -20 },
        visible: { 
            opacity: 1, 
            scale: 1, 
            y: 0, 
            transition: { 
                type: "spring",
                stiffness: 300,
                damping: 30,
                staggerChildren: 0.05 
            } 
        },
    };

    const menuItemVariants = {
        hidden: { opacity: 0, x: -10 },
        visible: { opacity: 1, x: 0 },
    };

    const [isMoreOpen, setIsMoreOpen] = useState(false);

    const mainLinks = NAV_LINKS.filter(link => ['Home', 'Courses', 'ADV Lab', 'ADV ExamHub', 'Live Masterclass', 'Jobs'].includes(link.name));
    const moreLinks = NAV_LINKS.filter(link => !['Home', 'Courses', 'ADV Lab', 'ADV ExamHub', 'Live Masterclass', 'Jobs'].includes(link.name));

    const isDarkPage = location.pathname === '/' || 
                       location.pathname === '/courses' || 
                       location.pathname === '/masterclass' || 
                       location.pathname === '/resources' ||
                       location.pathname === '/about' ||
                       location.pathname === '/community' ||
                       location.pathname === '/career';

    const getClassName = useCallback((isActive: boolean = false) => 
        `relative px-4 py-2 text-sm font-semibold transition-all duration-300 flex items-center gap-2 rounded-full hover:bg-white/10 dark:hover:bg-white/5 ${isActive ? 'text-red-500 bg-red-500/10' : (isDarkPage ? 'text-gray-200 hover:text-white' : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white')}`, [isDarkPage]);

    const renderLinkContent = useCallback((link: any) => {
        if (link.name === 'Home') return (
            <>
                <Home className="w-3.5 h-3.5" />
                <span>Home</span>
            </>
        );
        if (link.name === 'Live Masterclass') return (
            <>
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                </span>
                <span className="whitespace-nowrap">Live Masterclass</span>
                <span className="text-[9px] font-black tracking-tighter bg-gradient-to-r from-red-600 to-red-500 text-white px-2 py-0.5 rounded-full shadow-lg shadow-red-500/40 border border-white/20">LIVE</span>
            </>
        );
        if (link.name === 'ADV Lab') return (
            <>
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span>ADV Lab</span>
            </>
        );
        if (link.name === 'ADV ExamHub') return (
            <>
                <Rocket className="w-3.5 h-3.5 text-orange-400" />
                <span className="whitespace-nowrap">ExamHub</span>
                <span className="text-[9px] font-black tracking-tighter bg-gradient-to-r from-orange-600 to-yellow-500 text-white px-2 py-0.5 rounded-full shadow-lg shadow-orange-500/40 border border-white/20 animate-pulse">HOT</span>
            </>
        );
        if (link.name === 'Jobs') return (
            <>
                <span>Jobs</span>
                <span className="text-[9px] font-black tracking-tighter bg-gradient-to-r from-blue-600 to-indigo-500 text-white px-2 py-0.5 rounded-full shadow-lg shadow-blue-500/40 border border-white/20">NEW</span>
            </>
        );
        return link.name;
    }, []);

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-[1000] px-4 py-4 md:py-6 pointer-events-none">
                <nav className="max-w-7xl mx-auto pointer-events-auto">
                    <div className={`relative flex items-center justify-between backdrop-blur-2xl border border-white/20 rounded-2xl md:rounded-full px-4 md:px-6 py-2 md:py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-all duration-500 ${isDarkPage ? 'bg-black/30 text-white' : 'bg-white/40 dark:bg-black/30 text-gray-800 dark:text-white'}`}>
                        {/* Logo Section */}
                        <Link to="/" className="flex items-center shrink-0 group transition-transform duration-300 hover:scale-105">
                            <div className="relative">
                                <div className="absolute -inset-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                <img src="/assets/ADV Indian Coder Logo.png" alt="ADV Indian Coder Logo" className="h-9 md:h-11 w-auto object-contain relative z-10" />
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden xl:flex items-center space-x-1">
                            {mainLinks.map((link) => {
                                const isExternal = link.path.startsWith('http');

                                return (
                                    <React.Fragment key={link.name}>
                                        {isExternal ? (
                                            <a 
                                                href={link.path}
                                                className={getClassName()}
                                            >
                                                {renderLinkContent(link)}
                                            </a>
                                        ) : (
                                            <NavLink 
                                                to={link.path}
                                                className={({ isActive }) => getClassName(isActive)}
                                            >
                                                {renderLinkContent(link)}
                                            </NavLink>
                                        )}
                                    </React.Fragment>
                                );
                            })}

                            {/* More Dropdown */}
                            <div className="relative" onMouseEnter={() => setIsMoreOpen(true)} onMouseLeave={() => setIsMoreOpen(false)}>
                                <button className={`px-4 py-2 text-sm font-semibold transition-all duration-300 flex items-center gap-1.5 rounded-full hover:bg-white/10 dark:hover:bg-white/5 ${isMoreOpen ? 'text-white' : (isDarkPage ? 'text-gray-200' : 'text-gray-700 dark:text-gray-300')}`}>
                                    <span>More</span>
                                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMoreOpen ? 'rotate-180' : ''}`} />
                                </button>
                                
                                <AnimatePresence>
                                    {isMoreOpen && (
                                        <MotionDiv
                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                            className="absolute top-full right-0 mt-2 w-48 p-2 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
                                        >
                                            {moreLinks.map((link) => (
                                                <Link
                                                    key={link.name}
                                                    to={link.path}
                                                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-all"
                                                >
                                                    {link.name}
                                                </Link>
                                            ))}
                                        </MotionDiv>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center space-x-1.5 md:space-x-3">
                            <button
                                onClick={() => setIsSearchOpen(true)}
                                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 dark:bg-white/5 dark:hover:bg-white/10 transition-all group relative overflow-hidden"
                                aria-label="Search"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <Search className={`h-4.5 w-4.5 relative z-10 ${isDarkPage ? 'text-white' : 'text-gray-800 dark:text-white'}`} />
                            </button>

                            {streak > 0 && (
                                <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 font-bold text-xs shadow-[0_0_10px_rgba(249,115,22,0.2)]" title={`${streak} Day Streak!`} >
                                    <Flame className="w-4 h-4 fill-current animate-pulse" />
                                    <span>{streak}</span>
                                </div>
                            )}

                            <button
                                onClick={toggleTheme}
                                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 dark:bg-white/5 dark:hover:bg-white/10 transition-all group relative"
                                aria-label="Toggle theme"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
                                {theme === 'dark' || isDarkPage ? <Sun className="h-4.5 w-4.5 text-yellow-400 relative z-10" /> : <Moon className="h-4.5 w-4.5 text-primary relative z-10" />}
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
                            {NAV_LINKS.map((link) => {
                                const isExternal = link.path.startsWith('http');
                                const LinkComponent = isExternal ? 'a' : NavLink;
                                const linkProps = isExternal 
                                    ? { href: link.path }
                                    : { to: link.path, onClick: () => setIsMenuOpen(false) };

                                const getMobileClassName = (isActive: boolean = false) => 
                                    `flex items-center justify-between py-3.5 px-5 rounded-2xl transition-all duration-300 font-bold group ${isActive
                                        ? 'bg-red-600 text-white shadow-xl shadow-red-600/20'
                                        : 'text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10'
                                    }`;

                                const renderMobileLinkContent = (link: any, isActive: boolean) => (
                                    <>
                                        <div className="flex items-center gap-3">
                                            {link.name === 'Live Masterclass' ? (
                                                <>
                                                    <div className="relative flex h-2.5 w-2.5">
                                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                                                    </div>
                                                    <span>Live Masterclass</span>
                                                </>
                                            ) : link.name === 'ADV Lab' ? (
                                                <>
                                                    <Sparkles className="w-5 h-5 text-blue-500" />
                                                    <span>ADV Lab</span>
                                                </>
                                            ) : link.name === 'ADV ExamHub' ? (
                                                <>
                                                    <Rocket className="w-5 h-5 text-orange-500" />
                                                    <span>ExamHub</span>
                                                </>
                                            ) : link.name === 'Jobs' ? (
                                                <>
                                                    <Rocket className="w-5 h-5 text-indigo-500 rotate-45" />
                                                    <span>Jobs</span>
                                                </>
                                            ) : link.name === 'Home' ? (
                                                <>
                                                    <Home className="w-5 h-5" />
                                                    <span>Home</span>
                                                </>
                                            ) : (
                                                <span>{link.name}</span>
                                            )}
                                        </div>

                                        {/* Badges for Mobile */}
                                        <div className="flex items-center gap-2">
                                            {link.name === 'Live Masterclass' && (
                                                <span className={`text-[10px] font-black tracking-widest px-2 py-0.5 rounded-full border ${isActive ? 'bg-white/20 text-white border-white/20' : 'bg-red-600 text-white border-transparent'}`}>LIVE</span>
                                            )}
                                            {link.name === 'ADV ExamHub' && (
                                                <span className="text-[10px] font-black tracking-widest bg-orange-500 text-white px-2 py-0.5 rounded-full shadow-lg shadow-orange-500/40">HOT</span>
                                            )}
                                            {link.name === 'Jobs' && (
                                                <span className="text-[10px] font-black tracking-widest bg-blue-500 text-white px-2 py-0.5 rounded-full shadow-lg shadow-blue-500/40">NEW</span>
                                            )}
                                            {link.path.startsWith('http') && <ExternalLink className="w-4 h-4 opacity-40" />}
                                        </div>
                                    </>
                                );

                                return (
                                    <MotionDiv key={link.name} variants={menuItemVariants}>
                                        {isExternal ? (
                                            <a 
                                                href={link.path}
                                                className={getMobileClassName()}
                                            >
                                                {renderMobileLinkContent(link, false)}
                                            </a>
                                        ) : (
                                            <NavLink 
                                                to={link.path}
                                                onClick={() => setIsMenuOpen(false)}
                                                className={({ isActive }) => getMobileClassName(isActive)}
                                            >
                                                {({ isActive }) => renderMobileLinkContent(link, isActive)}
                                            </NavLink>
                                        )}
                                    </MotionDiv>
                                );
                            })}
                        </div>
                    </MotionDiv>
                </>
            )}
            <GlobalSearch isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </>
    );
};

export default Header;
