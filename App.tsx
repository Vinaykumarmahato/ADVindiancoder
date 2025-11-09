
import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import MasterclassPage from './pages/MasterclassPage';
import ResourcesPage from './pages/ResourcesPage';
import AboutPage from './pages/AboutPage';
import CommunityPage from './pages/CommunityPage';
import CareerPage from './pages/CareerPage';
import ContactPage from './pages/ContactPage';
import Chatbot from './components/Chatbot';

const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<HomePage />} />
                <Route path="/courses" element={<CoursesPage />} />
                <Route path="/masterclass" element={<MasterclassPage />} />
                <Route path="/resources" element={<ResourcesPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/community" element={<CommunityPage />} />
                <Route path="/career" element={<CareerPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </AnimatePresence>
    );
};

const App = () => {
    return (
        <ThemeProvider>
            <HashRouter>
                <div className="min-h-screen bg-white dark:bg-dark-bg text-gray-800 dark:text-gray-200 font-sans transition-colors duration-300">
                    <Header />
                    <main className="pt-20">
                        <AnimatedRoutes />
                    </main>
                    <Footer />
                    <Chatbot />
                </div>
            </HashRouter>
        </ThemeProvider>
    );
};

export default App;