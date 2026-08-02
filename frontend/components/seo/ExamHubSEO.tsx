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

export default function ExamHubSEO() {
    return (
        <section className="bg-white dark:bg-[#050914] py-16 px-4 md:px-8 mt-12 border-t border-gray-100 dark:border-gray-900">
            <div className="max-w-4xl mx-auto space-y-12">
                {/* Intro */}
                <div>
                    <h1 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
                        Exam Hub: Your Ultimate Guide to Tech & Engineering Exams in India
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                        Welcome to the AdvIndianCoder Exam Hub, the premier destination for software engineers and computer science students preparing for competitive exams in India. Whether you are aiming for government sector roles in ISRO or DRDO, pursuing higher education through GATE, or targeting top-tier tech certifications, our comprehensive resources are designed to give you the competitive edge. In 2026, the landscape of technical exams is more challenging than ever. We provide curated study guides, mock tests, and real-time updates to ensure your preparation is strategic and effective.
                    </p>
                </div>

                {/* Why Choose Us */}
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">Why Choose AdvIndianCoder for Exam Preparation?</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                        We focus exclusively on the needs of the Indian tech community. Unlike generic education portals, our platform is built by engineers, for engineers. We understand the nuances of the GATE CS/IT syllabus, the specific coding rounds required by top product-based companies, and the rigorous selection process for government scientific roles. Our platform provides localized content, expert insights from industry veterans, and a supportive community of peers who are on the same journey as you.
                    </p>
                </div>

                {/* Detailed Exam Breakdown */}
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">Upcoming Top Competitive Exams for Software Engineers</h2>
                    
                    <div className="space-y-8">
                        <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">GATE (Computer Science and Information Technology)</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                The Graduate Aptitude Test in Engineering (GATE) is the gateway to Master's programs (M.Tech/Ph.D.) at IITs and NITs, as well as lucrative jobs in Public Sector Undertakings (PSUs). The CS/IT syllabus heavily emphasizes Data Structures, Algorithms, Operating Systems, Database Management Systems, and Computer Networks. We provide chapter-wise mock tests, previous year solved papers, and algorithmic breakdown videos to help you score in the top percentile.
                            </p>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">ISRO & DRDO Scientist Recruitment Exams</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                For those aspiring to serve the nation through space and defense research, the ISRO Scientist/Engineer 'SC' and DRDO Scientist 'B' exams are prestigious opportunities. These exams test core computer science fundamentals and often have a pattern similar to GATE, but with a different emphasis on practical and theoretical knowledge. We track official notifications, eligibility criteria, and offer specialized mock test series tailored to these recruitment drives.
                            </p>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Top Private Sector Tech Certifications</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Beyond government exams, standing out in the private sector requires proven expertise. We offer detailed guides on cracking top industry certifications such as AWS Certified Solutions Architect, Google Cloud Professional Cloud Developer, and Oracle Certified Professional Java SE Developer. Learn which certifications hold the most weight in the Indian job market and how to prepare for them efficiently without spending a fortune on expensive courses.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Study Resources & Strategies */}
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">Essential Study Materials and Resources</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                        Success in technical exams requires more than just reading textbooks; it requires strategic preparation. Here is how you can utilize our resources:
                    </p>
                    <ul className="list-disc list-inside space-y-3 text-gray-600 dark:text-gray-400 mb-6">
                        <li><strong>Time Management:</strong> Utilize our study planners to allocate appropriate time to high-weightage subjects like Data Structures and Algorithms.</li>
                        <li><strong>Algorithmic Practice:</strong> Practice coding questions directly in our online compilers (Java, Python, C++) to reinforce theoretical concepts.</li>
                        <li><strong>Mock Tests:</strong> Regularly take our full-length timed mock tests to simulate the real exam environment and build stamina.</li>
                        <li><strong>Previous Year Papers:</strong> Analyze trends and frequently asked topics by solving the last 10 years of question papers available in our archive.</li>
                    </ul>
                </div>

                {/* Conclusion */}
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">Start Your Preparation Today</h2>
                    <p className="text-gray-600 dark:text-gray-400 font-semibold italic">
                        Stay ahead of the curve with our updated exam calendar and expert community. Bookmark the Exam Hub and start your journey to success today. Consistent practice and the right resources are the keys to cracking the toughest tech exams in India.
                    </p>
                </div>

                {/* FAQs */}
                <div className="pt-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">Frequently Asked Questions (FAQs)</h2>
                    <div className="space-y-2">
                        <FAQItem 
                            question="What exams are covered in the Exam Hub?" 
                            answer="We cover major tech and engineering exams including GATE CS/IT, ISRO, DRDO recruitments, and top cloud/software certifications." 
                        />
                        <FAQItem 
                            question="Are the study materials free?" 
                            answer="Yes, we offer a wide range of free study materials, alongside premium mock tests." 
                        />
                        <FAQItem 
                            question="How often is the exam calendar updated?" 
                            answer="Our calendar is updated weekly to reflect any changes in official notifications." 
                        />
                        <FAQItem 
                            question="Can I find previous year question papers here?" 
                            answer="Absolutely. We have a dedicated section for past papers with detailed solutions." 
                        />
                        <FAQItem 
                            question="Is this platform suitable for beginners?" 
                            answer="Yes, our resources range from foundational tutorials to advanced problem-solving guides." 
                        />
                        <FAQItem 
                            question="Do you provide guidance for technical interviews?" 
                            answer="Yes, we have specialized modules for coding rounds and system design interviews." 
                        />
                        <FAQItem 
                            question="How can I stay updated on new exam notifications?" 
                            answer="You can subscribe to our newsletter or join our Telegram channel linked on this page." 
                        />
                        <FAQItem 
                            question="Can I contribute study notes to the platform?" 
                            answer="We welcome community contributions. Please visit our 'Contribute' page for guidelines." 
                        />
                        <FAQItem 
                            question="Are there video lectures available?" 
                            answer="Yes, we curate the best video lectures and also provide our own exclusive video content." 
                        />
                        <FAQItem 
                            question="How do I report an error in a mock test?" 
                            answer="Use the 'Report Issue' button at the bottom of any test page." 
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
