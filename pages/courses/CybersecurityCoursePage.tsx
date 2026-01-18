import React, { useState } from 'react';
import CoursePageLayout from '../../components/CoursePageLayout';
import { Shield, Lock, BookOpen, Lightbulb, Code } from 'lucide-react';

const CyberSecurityCoursePage = () => {
    const [activeTopicIndex, setActiveTopicIndex] = useState(0);

    const courseData = [
        {
            id: 'cyber-intro',
            title: 'Cyber Intro',
            definition: 'Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks.',
            example: 'Think of it as a digital lock on your front door. It keeps unwanted guests (hackers) out of your house (computer).',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        These cyberattacks are usually aimed at accessing, changing, or destroying sensitive information; extorting money from users; or interrupting normal business processes.
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Implementing effective cybersecurity measures is particularly challenging today because there are more devices than people, and attackers are becoming more innovative.
                    </p>
                </>
            ),
            codeSnippet: null
        },
        {
            id: 'cyber-cia-triad',
            title: 'Cyber CIA Triad',
            definition: 'The CIA triad refers to Confidentiality, Integrity, and Availability, describing a model designed to guide policies for information security within an organization.',
            example: 'Confidentiality: Only you know your password. Integrity: No one can change your bank balance but the bank. Availability: You can access your money whenever you want.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        <strong>Confidentiality</strong>: Limits access to information.
                        <br />
                        <strong>Integrity</strong>: Assures that the information is trustworthy and accurate.
                        <br />
                        <strong>Availability</strong>: Guarantees reliable access to the information by authorized people.
                    </p>
                </>
            ),
            codeSnippet: null
        },
        {
            id: 'cyber-malware',
            title: 'Cyber Malware',
            definition: 'Malware is intrusive software that is designed to damage and destroy computers and computer systems. Malware is a contraction for "malicious software."',
            example: 'A virus that deletes all your files or a spyware that watches what you type.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Common types of malware include viruses, worms, Trojan horses, spyware, and ransomware.
                    </p>
                </>
            ),
            codeSnippet: `// Pseudo-code example of a simple virus behavior
while(true) {
  replicateSelf();
  infectFiles();
}`
        },
        {
            id: 'cyber-phishing',
            title: 'Cyber Phishing',
            definition: 'Phishing is the practice of sending fraudulent communications that appear to come from a reputable source, usually through email.',
            example: 'An email that looks like it is from your bank asking you to click a link and reset your password.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        The goal is to steal sensitive data like credit card and login information or to install malware on the victim’s machine. Phishing is an increasingly common cyberthreat.
                    </p>
                </>
            ),
            codeSnippet: null
        },
        {
            id: 'cyber-sql-injection',
            title: 'Cyber SQL Injection',
            definition: 'SQL injection (SQLi) is a cyberattack that attempts to use application code to access or corrupt database content.',
            example: 'Entering "OR 1=1" into a login field to trick the database into letting you in without a password.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        If successful, this allows the attacker to view data they are not normally able to retrieve. This might include data belonging to other users, or any other data that the application itself is able to access.
                    </p>
                </>
            ),
            codeSnippet: `SELECT * FROM users WHERE username = 'admin' AND password = 'password' OR '1'='1'`
        },
        {
            id: 'cyber-cryptography',
            title: 'Cyber Cryptography',
            definition: 'Cryptography is the practice and study of techniques for secure communication in the presence of third parties called adversaries.',
            example: 'Writing a message in a secret code that only your friend has the key to read.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        More generally, cryptography is about constructing and analyzing protocols that prevent third parties or the public from reading private messages.
                    </p>
                </>
            ),
            codeSnippet: `// Simple Caesar Cipher Shift
function encrypt(text, shift) {
  return text.split('').map(char => 
    String.fromCharCode(char.charCodeAt(0) + shift)
  ).join('');
}`
        },
        {
            id: 'cyber-firewalls',
            title: 'Cyber Firewalls',
            definition: 'A firewall is a network security device that monitors and filters incoming and outgoing network traffic based on an organization\'s previously established security policies.',
            example: 'A security guard at the gate who checks everyone\'s ID before letting them in.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        At its most basic, a firewall is essentially the barrier that sits between a private internal network and the public Internet.
                    </p>
                </>
            ),
            codeSnippet: null
        }
    ];

    const topics = courseData.map(topic => topic.title);
    const activeTopic = courseData[activeTopicIndex];

    const CodeBlock = ({ code, lang = 'javascript' }: { code: string, lang?: string }) => (
        <div className="bg-[#1e1e1e] text-gray-200 p-6 rounded-2xl font-mono text-sm mb-6 overflow-x-auto shadow-xl border border-gray-800">
            <div className="flex items-center space-x-2 mb-4 border-b border-gray-700 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-xs text-gray-500 font-sans uppercase">{lang}</span>
            </div>
            <pre className="leading-relaxed text-gray-200">{code}</pre>
        </div>
    );

    return (
        <CoursePageLayout
            title="Cybersecurity Tutorial"
            description="Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks."
            topics={topics}
            icon={Shield}
            colorClass="red"
            activeTopicIndex={activeTopicIndex}
            onTopicClick={setActiveTopicIndex}
        >
            <div className="space-y-8">
                {/* Definition Section */}
                <div className="bg-red-50 dark:bg-red-900/10 border-l-4 border-red-600 p-6 rounded-r-xl">
                    <h3 className="text-lg font-bold text-red-800 dark:text-red-300 mb-2 flex items-center">
                        <BookOpen className="w-5 h-5 mr-2" />
                        Definition
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {activeTopic.definition}
                    </p>
                </div>

                {/* Real-time Example Section */}
                <div className="bg-yellow-50 dark:bg-yellow-900/10 border-l-4 border-yellow-600 p-6 rounded-r-xl">
                    <h3 className="text-lg font-bold text-yellow-800 dark:text-yellow-300 mb-2 flex items-center">
                        <Lightbulb className="w-5 h-5 mr-2" />
                        Real-time Example
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {activeTopic.example}
                    </p>
                </div>

                {/* Main Content & Code */}
                <div className="prose dark:prose-invert max-w-none">
                    {activeTopic.content}

                    {activeTopic.codeSnippet && (
                        <div className="mt-8">
                            <h3 className="text-xl font-bold mb-4 flex items-center text-gray-800 dark:text-white">
                                <Code className="w-6 h-6 mr-2 text-red-600" />
                                Code Example
                            </h3>
                            <CodeBlock code={activeTopic.codeSnippet} lang={activeTopic.id === 'cyber-sql-injection' ? 'sql' : 'javascript'} />
                        </div>
                    )}
                </div>
            </div>
        </CoursePageLayout>
    );
};

export default CyberSecurityCoursePage;
