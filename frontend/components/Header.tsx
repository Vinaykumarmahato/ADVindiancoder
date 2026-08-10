import React, { useState, useEffect, useCallback } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X, Search, ChevronDown, Rocket, Sparkles, ExternalLink, Home, LogOut, LayoutDashboard, BookOpen } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { NAV_LINKS } from '../constants';
import { MotionDiv } from './motion';
import GlobalSearch from './GlobalSearch';
import { useAuth } from '../contexts/AuthContext';
import AuthModal from './AuthModal';
import CourseSubNavbar from './CourseSubNavbar';

const Header = () => {
    const { theme, toggleTheme } = useTheme();
    const { user, logout } = useAuth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const [authModalTab, setAuthModalTab] = useState<'login' | 'register'>('login');
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const location = useLocation();

    // Global listener to trigger Auth Modal from other pages
    useEffect(() => {
        const handleOpenAuth = () => {
            setAuthModalTab('login');
            setIsAuthModalOpen(true);
        };
        window.addEventListener('open_auth_modal', handleOpenAuth);
        return () => window.removeEventListener('open_auth_modal', handleOpenAuth);
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

    const mainLinks = NAV_LINKS.filter(link => ['Home', 'Courses', 'ADV Lab', 'ADV ExamHub', 'Practice Hub'].includes(link.name));
    const moreLinks = NAV_LINKS.filter(link => !['Home', 'Courses', 'ADV Lab', 'ADV ExamHub', 'Practice Hub'].includes(link.name));

    const isDarkPage = theme === 'dark';

    const getClassName = useCallback((isActive: boolean = false) => 
        `relative px-4 py-2 text-sm font-semibold transition-all duration-300 flex items-center gap-2 rounded-full hover:bg-white/10 dark:hover:bg-white/5 whitespace-nowrap shrink-0 ${isActive ? 'text-red-500 bg-red-500/10' : (isDarkPage ? 'text-gray-200 hover:text-white' : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white')}`, [isDarkPage]);

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
                <span className="ml-auto text-[9px] font-black tracking-tighter bg-gradient-to-r from-red-600 to-red-500 text-white px-2 py-0.5 rounded-full shadow-lg shadow-red-500/40 border border-white/20">LIVE</span>
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
        if (link.name === 'Practice Hub') return (
            <>
                <BookOpen className="w-3.5 h-3.5 text-green-400" />
                <span>Practice Hub</span>
            </>
        );
        if (link.name === 'Jobs') return (
            <>
                <span>Jobs</span>
                <span className="ml-auto text-[9px] font-black tracking-tighter bg-gradient-to-r from-blue-600 to-indigo-500 text-white px-2 py-0.5 rounded-full shadow-lg shadow-blue-500/40 border border-white/20">NEW</span>
            </>
        );
        return link.name;
    }, []);

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-[1000] px-4 py-4 md:py-6 pointer-events-none">
                <nav className="max-w-7xl mx-auto pointer-events-auto">
                    {/* Unified Header Shell Container (W3Schools Style Integration on ALL Pages) */}
                    <div className={`relative flex flex-col backdrop-blur-2xl border transition-all duration-500 overflow-hidden ${
                        theme === 'dark' 
                            ? 'rounded-2xl bg-[#070b14]/95 text-white border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]' 
                            : 'rounded-2xl bg-white/95 text-gray-900 border-gray-200 shadow-[0_8px_32px_rgba(0,0,0,0.1)]'
                    }`}>
                        {/* Row 1: Main Header Navigation Bar */}
                        <div className="flex items-center justify-between px-4 md:px-6 py-2 md:py-2.5 w-full">
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
                                    <button className={`px-4 py-2 text-sm font-semibold transition-all duration-300 flex items-center gap-1.5 rounded-full hover:bg-white/10 dark:hover:bg-white/5 whitespace-nowrap shrink-0 ${isMoreOpen ? 'text-white' : (isDarkPage ? 'text-gray-200' : 'text-gray-700 dark:text-gray-300')}`}>
                                        <span>More</span>
                                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 shrink-0 ${isMoreOpen ? 'rotate-180' : ''}`} />
                                    </button>
                                    
                                    <AnimatePresence>
                                        {isMoreOpen && (
                                            <MotionDiv
                                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                className="absolute top-full right-0 mt-2 w-60 p-2 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
                                            >
                                                {moreLinks.map((link) => (
                                                    <Link
                                                        key={link.name}
                                                        to={link.path}
                                                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-all"
                                                    >
                                                        {renderLinkContent(link)}
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
                                    className={`group relative flex items-center justify-between gap-2.5 px-3.5 md:px-4.5 py-1.5 md:py-2 rounded-full border transition-all duration-300 shadow-sm cursor-pointer ${
                                        theme === 'dark'
                                            ? 'bg-white/10 hover:bg-white/15 border-white/20 hover:border-red-500/50 text-gray-200 hover:text-white shadow-black/40'
                                            : 'bg-gray-100/90 dark:bg-white/10 hover:bg-gray-200/90 dark:hover:bg-white/15 border-gray-300 dark:border-white/20 hover:border-red-500/50 text-gray-700 dark:text-gray-200'
                                    }`}
                                    aria-label="Search Courses"
                                >
                                    <div className="flex items-center gap-2">
                                        <Search className="h-4 w-4 text-gray-400 group-hover:text-red-500 transition-colors shrink-0" />
                                        <span className="hidden sm:inline-block text-xs font-semibold tracking-wide italic text-gray-400 group-hover:text-gray-200 dark:group-hover:text-white transition-colors">
                                            Search...
                                        </span>
                                    </div>
                                    
                                    <kbd className="hidden lg:inline-flex items-center gap-0.5 px-2 py-0.5 text-[10px] font-mono font-black text-gray-400 dark:text-gray-400 bg-white/20 dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-full group-hover:border-red-500/40 group-hover:text-red-400 transition-all">
                                        <span className="text-[9px]">⌘</span>K
                                    </kbd>
                                </button>


                                {/* Desktop Profile / Sign In */}
                                <div className="hidden md:block">
                                    {user ? (
                                        <div className="relative leading-none" onMouseEnter={() => setIsProfileOpen(true)} onMouseLeave={() => setIsProfileOpen(false)}>
                                            <button className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all text-xs font-black border border-white/10 dark:border-white/5 hover:bg-white/10 dark:hover:bg-white/5 whitespace-nowrap shrink-0 ${isDarkPage ? 'text-gray-200' : 'text-gray-700 dark:text-gray-300 hover:text-white'}`}>
                                                <img src={user.avatar} alt={user.name} className="h-6.5 w-6.5 rounded-full object-cover border border-white/20 shrink-0" />
                                                <span className="hidden lg:inline-block max-w-[120px] truncate">{user.name.split(' ')[0]}</span>
                                                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 shrink-0 ${isProfileOpen ? 'rotate-180' : ''}`} />
                                            </button>
                                            <AnimatePresence>
                                                {isProfileOpen && (
                                                    <MotionDiv
                                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                        className="absolute top-full right-0 mt-2 w-56 p-2 bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden text-gray-200"
                                                    >
                                                        <div className="px-4 py-3 border-b border-white/10 mb-1">
                                                            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Signed in as</p>
                                                            <p className="text-sm font-black text-white truncate">{user.name}</p>
                                                            <p className="text-[10px] text-gray-400 truncate mt-0.5">{user.email}</p>
                                                        </div>
                                                        
                                                        <Link to={`/u/${user.name}`} className="flex items-center gap-2.5 px-3 py-2 text-xs font-bold hover:text-white hover:bg-white/10 rounded-xl transition-all">
                                                            <LayoutDashboard className="w-4 h-4 text-red-500" />
                                                            <span>View Profile</span>
                                                        </Link>
                                                        <Link to="/adv-lab" className="flex items-center gap-2.5 px-3 py-2 text-xs font-bold hover:text-white hover:bg-white/10 rounded-xl transition-all">
                                                            <Sparkles className="w-4 h-4 text-orange-400" />
                                                            <span>ADV Lab IDE</span>
                                                        </Link>
                                                        <Link to="/my-courses" className="flex items-center gap-2.5 px-3 py-2 text-xs font-bold hover:text-white hover:bg-white/10 rounded-xl transition-all">
                                                            <BookOpen className="w-4 h-4 text-blue-400" />
                                                            <span>My Courses</span>
                                                        </Link>
                                                        
                                                        <div className="h-px bg-white/10 my-1" />
                                                        <button onClick={logout} className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-black text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-xl transition-all text-left cursor-pointer">
                                                            <LogOut className="w-4 h-4" />
                                                            <span>Sign Out</span>
                                                        </button>
                                                    </MotionDiv>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ) : (
                                        <button
                                            onClick={() => {
                                                setAuthModalTab('login');
                                                setIsAuthModalOpen(true);
                                            }}
                                            className="px-4.5 py-2 text-xs font-black tracking-wider bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-full shadow-lg shadow-red-500/20 hover:shadow-red-500/40 hover:brightness-110 active:scale-[0.97] transition-all cursor-pointer whitespace-nowrap"
                                        >
                                            Sign In
                                        </button>
                                    )}
                                </div>

                                <button
                                    onClick={toggleTheme}
                                    className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 dark:bg-white/5 dark:hover:bg-white/10 transition-all group relative"
                                    aria-label="Toggle theme"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
                                    {theme === 'dark' ? <Sun className="h-4.5 w-4.5 text-yellow-400 relative z-10" /> : <Moon className="h-4.5 w-4.5 text-primary relative z-10" />}
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

                        {/* Row 2: W3Schools-Style Attached Course Sub-Navbar Bar (ON EVERY PAGE!) */}
                        <div className={`border-t w-full py-1 ${
                            theme === 'dark' 
                                ? 'border-white/10 bg-black/60 text-gray-200' 
                                : 'border-gray-200 bg-[#1e293b] text-gray-100'
                        }`}>
                            <CourseSubNavbar />
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

                            {/* Mobile Auth Options */}
                            <div className="h-px bg-gray-200 dark:bg-white/10 my-3.5" />
                            {user ? (
                                <div className="space-y-3.5">
                                    <div className="flex items-center gap-3 px-3 py-1.5">
                                        <img src={user.avatar} alt={user.name} className="h-10 w-10 rounded-full object-cover border border-gray-200 dark:border-white/10 shadow-sm" />
                                        <div className="min-w-0 flex-1">
                                            <p className="text-sm font-black text-gray-900 dark:text-white truncate leading-snug">{user.name}</p>
                                            <p className="text-[11px] text-gray-500 dark:text-gray-400 truncate leading-none mt-0.5">{user.email}</p>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2">
                                        <Link
                                            to={`/u/${user.name}`}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs bg-gray-100 dark:bg-white/5 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-white/10 transition-all border border-gray-200/50 dark:border-white/5"
                                        >
                                            <LayoutDashboard className="w-4 h-4 text-red-500" />
                                            <span>View Profile</span>
                                        </Link>
                                        <Link
                                            to="/courses"
                                            onClick={() => setIsMenuOpen(false)}
                                            className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs bg-gray-100 dark:bg-white/5 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-white/10 transition-all border border-gray-200/50 dark:border-white/5"
                                        >
                                            <BookOpen className="w-4 h-4 text-blue-500" />
                                            <span>Courses</span>
                                        </Link>
                                    </div>
                                    <button
                                        onClick={() => {
                                            logout();
                                            setIsMenuOpen(false);
                                        }}
                                        className="w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-2xl font-bold text-sm bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/10 active:scale-[0.98] transition-all cursor-pointer border border-transparent"
                                    >
                                        <LogOut className="w-4 h-4" />
                                        <span>Sign Out</span>
                                    </button>
                                </div>
                            ) : (
                                <div className="flex flex-col gap-2.5">
                                    <button
                                        onClick={() => {
                                            setAuthModalTab('login');
                                            setIsAuthModalOpen(true);
                                            setIsMenuOpen(false);
                                        }}
                                        className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-red-600 to-orange-500 hover:brightness-110 text-white font-bold text-sm shadow-xl shadow-red-600/10 active:scale-[0.98] transition-all cursor-pointer text-center border border-transparent"
                                    >
                                        Sign In
                                    </button>
                                    <button
                                        onClick={() => {
                                            setAuthModalTab('register');
                                            setIsAuthModalOpen(true);
                                            setIsMenuOpen(false);
                                        }}
                                        className="w-full py-3.5 rounded-2xl bg-gray-100 hover:bg-gray-200 dark:bg-white/5 dark:hover:bg-white/10 border border-gray-200/50 dark:border-white/10 text-gray-800 dark:text-gray-200 font-bold text-sm active:scale-[0.98] transition-all cursor-pointer text-center"
                                    >
                                        Create Account
                                    </button>
                                </div>
                            )}
                        </div>
                    </MotionDiv>
                </>
            )}
            <GlobalSearch isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
            <AuthModal 
                isOpen={isAuthModalOpen} 
                onClose={() => setIsAuthModalOpen(false)} 
                initialTab={authModalTab} 
            />
        </>
    );
};

export default Header;
