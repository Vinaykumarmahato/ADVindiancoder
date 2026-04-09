import React, { Suspense } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import Chatbot from './components/Chatbot';

const HomePage = React.lazy(() => import('./pages/HomePage'));
const CoursesPage = React.lazy(() => import('./pages/CoursesPage'));
const MasterclassPage = React.lazy(() => import('./pages/MasterclassPage'));
const ResourcesPage = React.lazy(() => import('./pages/ResourcesPage'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const CommunityPage = React.lazy(() => import('./pages/CommunityPage'));
const CareerPage = React.lazy(() => import('./pages/CareerPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const UpscSyllabusPage = React.lazy(() => import('./pages/UpscSyllabusPage'));
const CourseTutorialPage = React.lazy(() => import('./pages/CourseTutorialPage'));

// Course Pages
const HtmlCoursePage = React.lazy(() => import('./pages/courses/HtmlCoursePage'));
const CssCoursePage = React.lazy(() => import('./pages/courses/CssCoursePage'));
const JavaScriptCoursePage = React.lazy(() => import('./pages/courses/JavaScriptCoursePage'));
const AdvCssCoursePage = React.lazy(() => import('./pages/courses/AdvCssCoursePage'));
const BootstrapCoursePage = React.lazy(() => import('./pages/courses/BootstrapCoursePage'));
const ReactCoursePage = React.lazy(() => import('./pages/courses/ReactCoursePage'));
const JQueryCoursePage = React.lazy(() => import('./pages/courses/JQueryCoursePage'));
const AngularCoursePage = React.lazy(() => import('./pages/courses/AngularCoursePage'));
const AngularJSCoursePage = React.lazy(() => import('./pages/courses/AngularJSCoursePage'));
const VueCoursePage = React.lazy(() => import('./pages/courses/VueCoursePage'));
const SassCoursePage = React.lazy(() => import('./pages/courses/SassCoursePage'));
const NodeJsCoursePage = React.lazy(() => import('./pages/courses/NodeJsCoursePage'));
const PhpCoursePage = React.lazy(() => import('./pages/courses/PhpCoursePage'));
const JavaCoursePage = React.lazy(() => import('./pages/courses/JavaCoursePage'));
const PythonCoursePage = React.lazy(() => import('./pages/courses/PythonCoursePage'));
const DjangoCoursePage = React.lazy(() => import('./pages/courses/DjangoCoursePage'));
const AspCoursePage = React.lazy(() => import('./pages/courses/AspCoursePage'));
const GoCoursePage = React.lazy(() => import('./pages/courses/GoCoursePage'));
const KotlinCoursePage = React.lazy(() => import('./pages/courses/KotlinCoursePage'));
const SwiftCoursePage = React.lazy(() => import('./pages/courses/SwiftCoursePage'));
const TypeScriptCoursePage = React.lazy(() => import('./pages/courses/TypeScriptCoursePage'));
const CSharpCoursePage = React.lazy(() => import('./pages/courses/CSharpCoursePage'));
const CCoursePage = React.lazy(() => import('./pages/courses/CCoursePage'));
const CppCoursePage = React.lazy(() => import('./pages/courses/CppCoursePage'));
const RustCoursePage = React.lazy(() => import('./pages/courses/RustCoursePage'));
const BashCoursePage = React.lazy(() => import('./pages/courses/BashCoursePage'));
const RCoursePage = React.lazy(() => import('./pages/courses/RCoursePage'));
const SqlCoursePage = React.lazy(() => import('./pages/courses/SqlCoursePage'));
const NumpyCoursePage = React.lazy(() => import('./pages/courses/NumpyCoursePage'));
const PandasCoursePage = React.lazy(() => import('./pages/courses/PandasCoursePage'));
const ScipyCoursePage = React.lazy(() => import('./pages/courses/ScipyCoursePage'));
const DataScienceCoursePage = React.lazy(() => import('./pages/courses/DataScienceCoursePage'));
const AiCoursePage = React.lazy(() => import('./pages/courses/AiCoursePage'));
const GenAiCoursePage = React.lazy(() => import('./pages/courses/GenAiCoursePage'));
const MySqlCoursePage = React.lazy(() => import('./pages/courses/MySqlCoursePage'));
const PostgreSqlCoursePage = React.lazy(() => import('./pages/courses/PostgreSqlCoursePage'));
const MongoDbCoursePage = React.lazy(() => import('./pages/courses/MongoDbCoursePage'));
const ExcelCoursePage = React.lazy(() => import('./pages/courses/ExcelCoursePage'));
const XmlCoursePage = React.lazy(() => import('./pages/courses/XmlCoursePage'));
const CybersecurityCoursePage = React.lazy(() => import('./pages/courses/CybersecurityCoursePage'));
const DsaCoursePage = React.lazy(() => import('./pages/courses/DsaCoursePage'));
const GitCoursePage = React.lazy(() => import('./pages/courses/GitCoursePage'));

const LoadingFallback = () => (
    <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
    </div>
);

const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <AnimatePresence mode="wait">
            <React.Fragment key={location.pathname}>
                <Suspense fallback={<LoadingFallback />}>
                    <Routes location={location}>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/courses" element={<CoursesPage />} />

                        {/* Specific Course Routes */}
                        <Route path="/course/html" element={<HtmlCoursePage />} />
                        <Route path="/course/css" element={<CssCoursePage />} />
                        <Route path="/course/javascript" element={<JavaScriptCoursePage />} />
                        <Route path="/course/adv-css" element={<AdvCssCoursePage />} />
                        <Route path="/course/bootstrap" element={<BootstrapCoursePage />} />
                        <Route path="/course/react" element={<ReactCoursePage />} />
                        <Route path="/course/jquery" element={<JQueryCoursePage />} />
                        <Route path="/course/angular" element={<AngularCoursePage />} />
                        <Route path="/course/angularjs" element={<AngularJSCoursePage />} />
                        <Route path="/course/vue" element={<VueCoursePage />} />
                        <Route path="/course/sass" element={<SassCoursePage />} />
                        <Route path="/course/nodejs" element={<NodeJsCoursePage />} />
                        <Route path="/course/php" element={<PhpCoursePage />} />
                        <Route path="/course/java" element={<JavaCoursePage />} />
                        <Route path="/course/python" element={<PythonCoursePage />} />
                        <Route path="/course/django" element={<DjangoCoursePage />} />
                        <Route path="/course/asp" element={<AspCoursePage />} />
                        <Route path="/course/go" element={<GoCoursePage />} />
                        <Route path="/course/kotlin" element={<KotlinCoursePage />} />
                        <Route path="/course/swift" element={<SwiftCoursePage />} />
                        <Route path="/course/typescript" element={<TypeScriptCoursePage />} />
                        <Route path="/course/csharp" element={<CSharpCoursePage />} />
                        <Route path="/course/c" element={<CCoursePage />} />
                        <Route path="/course/cpp" element={<CppCoursePage />} />
                        <Route path="/course/rust" element={<RustCoursePage />} />
                        <Route path="/course/bash" element={<BashCoursePage />} />
                        <Route path="/course/r" element={<RCoursePage />} />
                        <Route path="/course/sql" element={<SqlCoursePage />} />
                        <Route path="/course/numpy" element={<NumpyCoursePage />} />
                        <Route path="/course/pandas" element={<PandasCoursePage />} />
                        <Route path="/course/scipy" element={<ScipyCoursePage />} />
                        <Route path="/course/data-science" element={<DataScienceCoursePage />} />
                        <Route path="/course/ai" element={<AiCoursePage />} />
                        <Route path="/course/gen-ai" element={<GenAiCoursePage />} />
                        <Route path="/course/mysql" element={<MySqlCoursePage />} />
                        <Route path="/course/postgresql" element={<PostgreSqlCoursePage />} />
                        <Route path="/course/mongodb" element={<MongoDbCoursePage />} />
                        <Route path="/course/excel" element={<ExcelCoursePage />} />
                        <Route path="/course/xml" element={<XmlCoursePage />} />
                        <Route path="/course/cybersecurity" element={<CybersecurityCoursePage />} />
                        <Route path="/course/dsa" element={<DsaCoursePage />} />
                        <Route path="/course/git" element={<GitCoursePage />} />

                        {/* Dynamic Route for other courses */}
                        <Route path="/course/:courseId" element={<CourseTutorialPage />} />

                        <Route path="/masterclass" element={<MasterclassPage />} />
                        <Route path="/resources" element={<ResourcesPage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/community" element={<CommunityPage />} />
                        <Route path="/career" element={<CareerPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/upsc-syllabus" element={<UpscSyllabusPage />} />
                    </Routes>
                </Suspense>
            </React.Fragment>
        </AnimatePresence>
    );
};

const App = () => {
    return (
        <ErrorBoundary>
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
        </ErrorBoundary>
    );
};

export default App;
