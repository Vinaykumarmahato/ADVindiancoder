import React from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertTriangle } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';

const NotFoundPage = () => {
    return (
        <PageWrapper>
            <div className="min-h-[70vh] flex items-center justify-center px-4">
                <div className="text-center">
                    <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-red-500/10 mb-8">
                        <AlertTriangle className="w-12 h-12 text-red-500" />
                    </div>
                    <h1 className="text-6xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
                        404
                    </h1>
                    <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
                        Oops! The page you are looking for doesn't exist or has been moved.
                    </p>
                    <Link
                        to="/"
                        className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-primary hover:bg-blue-600 transition-colors rounded-xl shadow-[0_0_20px_rgba(0,120,255,0.3)] hover:shadow-[0_0_30px_rgba(0,120,255,0.5)]"
                    >
                        <Home className="w-5 h-5 mr-2" />
                        Back to Home
                    </Link>
                </div>
            </div>
        </PageWrapper>
    );
};

export default NotFoundPage;
