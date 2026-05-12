import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';
import { PlayCircle, BookOpen, Code, Lightbulb, ChevronLeft } from 'lucide-react';
import CoursePageLayout from '../components/CoursePageLayout';
import { COURSES } from '../constants';
import { Skeleton, TextSkeleton } from '../components/Skeleton';

// This would ideally come from a separate data file/API
// For now, I'll demonstrate with a mock fallback or a mapped data structure
const GenericCoursePage = () => {
    const { courseId } = useParams<{ courseId: string }>();
    const [isLoading, setIsLoading] = useState(true);
    const [activeTopicIndex, setActiveTopicIndex] = useState(0);

    // Mock data fetching
    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 600);
        return () => clearTimeout(timer);
    }, [courseId]);

    // Find course info from constants
    const courseIdStr = courseId?.toLowerCase() || '';
    const courseInfo = COURSES.find(c => 
        c.id.toString().toLowerCase() === courseIdStr || 
        c.youtubeLink.toLowerCase().includes(courseIdStr)
    );

    // Mock topics if specific data isn't found
    const mockTopics = [
        { title: 'Getting Started', definition: 'Introduction to the core concepts.', example: 'Hello World implementation.', content: 'Detailed explanation goes here...' },
        { title: 'Core Syntax', definition: 'The basic rules and structure.', example: 'Variable declaration.', content: 'Detailed explanation goes here...' },
        { title: 'Advanced Concepts', definition: 'Deep dive into complex features.', example: 'Asynchronous operations.', content: 'Detailed explanation goes here...' }
    ];

    const activeTopic = mockTopics[activeTopicIndex];

    const CodeBlock = ({ code }: { code: string }) => (
        <div className="bg-[#1e1e1e] text-gray-200 p-6 rounded-2xl font-mono text-sm mb-6 overflow-x-auto shadow-xl border border-gray-800">
            <pre className="leading-relaxed text-blue-300">{code}</pre>
        </div>
    );

    if (isLoading) {
        return (
            <PageWrapper>
                <div className="max-w-7xl mx-auto px-4 py-20">
                    <Skeleton className="h-12 w-64 mb-8" />
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        <div className="lg:col-span-1 space-y-4">
                            <Skeleton className="h-10 w-full" />
                            <Skeleton className="h-10 w-full" />
                            <Skeleton className="h-10 w-full" />
                        </div>
                        <div className="lg:col-span-3">
                            <Skeleton className="h-64 w-full mb-8 rounded-3xl" />
                            <TextSkeleton lines={10} />
                        </div>
                    </div>
                </div>
            </PageWrapper>
        );
    }

    return (
        <PageWrapper>
            <CoursePageLayout
                title={courseInfo?.title || `${courseId?.toUpperCase()} Tutorial`}
                description={courseInfo?.description || `Master ${courseId} with our comprehensive guide.`}
                topics={mockTopics.map(t => t.title)}
                activeTopicIndex={activeTopicIndex}
                onTopicClick={setActiveTopicIndex}
                icon={Code}
                colorClass="primary"
            >
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-xl">
                        <h3 className="text-lg font-bold text-primary mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h3>
                        <p className="text-gray-300 leading-relaxed italic uppercase tracking-tight text-sm font-light">
                            {activeTopic.definition}
                        </p>
                    </div>

                    <div className="bg-yellow-500/5 border-l-4 border-yellow-500/50 p-6 rounded-r-xl">
                        <h3 className="text-lg font-bold text-yellow-500 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-time Example
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                            {activeTopic.example}
                        </p>
                    </div>

                    <div className="prose dark:prose-invert max-w-none">
                        <p className="text-lg text-gray-400 font-light leading-relaxed">
                            {activeTopic.content}
                        </p>
                        
                        <div className="mt-12 p-8 bg-white/5 rounded-[2rem] border border-white/10">
                            <h3 className="text-2xl font-bold mb-6 flex items-center text-white">
                                <PlayCircle className="w-6 h-6 mr-3 text-red-500" />
                                Interactive Code Playground
                            </h3>
                            <CodeBlock code={`// Example for ${activeTopic.title}\nconsole.log("Exploring ${courseId}...");`} />
                            <p className="text-xs text-gray-500 font-mono mt-4">Tip: Click the "Watch on YouTube" button in the sidebar for the full video explanation.</p>
                        </div>
                    </div>
                </div>
            </CoursePageLayout>
        </PageWrapper>
    );
};

export default GenericCoursePage;
