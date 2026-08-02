import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-gray-200 dark:border-gray-800">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-4 flex justify-between items-center text-left focus:outline-none"
            >
                <span className="font-semibold text-gray-900 dark:text-gray-100">{question}</span>
                {isOpen ? <ChevronUp className="w-5 h-5 text-primary" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
            </button>
            {isOpen && (
                <div className="pb-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                    {answer}
                </div>
            )}
        </div>
    );
};

export default function PracticeHubSEO() {
    return (
        <section className="bg-white dark:bg-[#050914] py-16 px-4 md:px-8 mt-12 border-t border-gray-100 dark:border-gray-900">
            <div className="max-w-4xl mx-auto space-y-12">
                {/* Intro */}
                <div>
                    <h1 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
                        Full Stack Practice Hub: Build Real-World Projects
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                        There is a massive gap between learning the syntax of a programming language and actually building functional, scalable, and beautiful web applications. You can watch hundreds of hours of tutorials, but until you get your hands dirty with real code, you are stuck in what developers call "tutorial hell." The <strong>Adv Indian Coder Practice Hub</strong> is your bridge to becoming a production-ready developer. We offer a curated collection of real-world coding challenges across the entire full stack spectrum. Whether you want to master the intricacies of React state management, design secure Node.js APIs, or optimize a PostgreSQL database, you will find a project here to level up your skills.
                    </p>
                </div>

                {/* Why Practice Here */}
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">Why Practice Coding Here?</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                        In today's competitive tech landscape, employers are looking for more than just certificates. They want to see a portfolio of projects that demonstrate your ability to solve real problems. When a recruiter looks at your resume, a fully functional e-commerce backend or a highly interactive React dashboard speaks volumes more than a generic completion certificate. By practicing on our hub, you are simultaneously building a professional portfolio that will get you hired. Furthermore, our challenges are structured to mimic real agile sprints, giving you a taste of what working in a top tech company actually feels like.
                    </p>
                </div>

                {/* Frontend Challenges */}
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">Frontend Practice Projects (HTML, CSS, React)</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                        The frontend is where user experience lives and dies. Our frontend challenges push you to create pixel-perfect, highly responsive, and accessible user interfaces. We focus heavily on modern frameworks, specifically React.js and Tailwind CSS, to ensure you are learning the tools most demanded by the industry today.
                    </p>

                    <div className="space-y-6">
                        <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Beginner Frontend Challenges</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                If you are just starting out, our beginner track focuses on the fundamentals. You will build projects like a responsive navigation bar, a classic to-do list with local storage, and a weather application that fetches data from a public API. These projects cement your understanding of DOM manipulation, CSS Grid and Flexbox, and basic state management.
                            </p>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Advanced UI/UX Tasks</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                For those ready for a challenge, the advanced track dives into complex React patterns. You will build comprehensive admin dashboards with dynamic charts (using libraries like Recharts or Chart.js), implement drag-and-drop Kanban boards, and create seamless multi-step checkout flows. We also emphasize performance optimization techniques like lazy loading and memoization.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Backend Challenges */}
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">Backend Coding Challenges (Node, Python, Databases)</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                        A beautiful frontend is nothing without a robust, secure backend powering it. Our backend practice section is designed to turn you into an architect. We provide challenges in both Node.js (Express) and Python (Django/FastAPI), allowing you to choose your preferred ecosystem.
                    </p>

                    <div className="space-y-6">
                        <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">API Development Tasks</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Practice building RESTful and GraphQL APIs from scratch. You will learn how to handle complex routing, implement robust middleware for error handling and logging, and secure your endpoints using JWT (JSON Web Tokens) and OAuth 2.0. Projects include building a social media feed API and a real-time chat server using WebSockets.
                            </p>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Database Management Challenges</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Data is the core of any application. Our database challenges require you to design efficient schemas, write complex aggregation pipelines in MongoDB, and optimize SQL queries using indexes and joins in PostgreSQL. You will practice modeling one-to-many and many-to-many relationships in a way that scales.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Full Stack Synergy */}
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">Full Stack Integration Projects</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                        The ultimate test of a developer is bringing it all together. Our capstone projects are massive, multi-week endeavors where you will build a complete product from the ground up. You will start with database architecture, move to API development, and finish by wiring up a dynamic React frontend. Examples include building a fully functional Spotify clone with audio streaming, or an Amazon-style e-commerce platform complete with Stripe payment integration and order management. These are the projects that will make your resume undeniable.
                    </p>
                </div>

                {/* Conclusion */}
                <div>
                    <p className="text-gray-600 dark:text-gray-400 font-semibold italic text-xl">
                        Stop watching tutorials. Start building. Choose your first project in the Practice Hub today and take the first step towards becoming a hired full stack developer.
                    </p>
                </div>

                {/* FAQs */}
                <div className="pt-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">Frequently Asked Questions</h2>
                    <div className="space-y-2">
                        <FAQItem 
                            question="What is the Practice Hub?" 
                            answer="The Practice Hub is a collection of real-world coding challenges designed to help you improve your full stack web development skills." 
                        />
                        <FAQItem 
                            question="Are these coding projects free?" 
                            answer="Yes, the majority of our practice projects and challenges are completely free to access and build." 
                        />
                        <FAQItem 
                            question="What technologies are covered in the Practice Hub?" 
                            answer="We cover HTML, CSS, JavaScript, React, Node.js, Python, MongoDB, and PostgreSQL among others." 
                        />
                        <FAQItem 
                            question="Do I need prior coding experience?" 
                            answer="While we have beginner projects, a fundamental understanding of syntax is recommended before diving into the Practice Hub." 
                        />
                        <FAQItem 
                            question="Can I put these projects on my resume?" 
                            answer="Absolutely! These projects are designed specifically to be showcased in your developer portfolio to attract employers." 
                        />
                        <FAQItem 
                            question="How do I get feedback on my code?" 
                            answer="You can share your GitHub repository links in our community Discord for peer review and expert feedback." 
                        />
                        <FAQItem 
                            question="Are there backend challenges available?" 
                            answer="Yes, we have a dedicated section for API development, database design, and server security." 
                        />
                        <FAQItem 
                            question="Is React included in the frontend projects?" 
                            answer="Yes, React is the primary framework we focus on for our advanced frontend UI/UX challenges." 
                        />
                        <FAQItem 
                            question="How often are new projects added?" 
                            answer="We add new, industry-relevant projects to the hub every single month." 
                        />
                        <FAQItem 
                            question="Do I get a certificate upon completion?" 
                            answer="While the focus is on the portfolio piece itself, completing capstone projects does grant a verified certificate of achievement." 
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
