import React, { useState } from 'react';
import CoursePageLayout from '../../components/CoursePageLayout';
import { Bot, Code, BookOpen, Lightbulb } from 'lucide-react';

const AiCoursePage = () => {
    const [activeTopicIndex, setActiveTopicIndex] = useState(0);

    const courseData = [
        {
            id: 'ai-intro',
            title: 'AI Intro',
            definition: 'Artificial Intelligence (AI) is the simulation of human intelligence processes by machines, especially computer systems.',
            example: 'Siri, Alexa, and other smart assistants.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        These processes include learning (the acquisition of information and rules for using the information), reasoning (using rules to reach approximate or definite conclusions) and self-correction.
                    </p>
                </>
            ),
            codeSnippet: null
        },
        {
            id: 'ai-machine-learning',
            title: 'AI Machine Learning',
            definition: 'Machine Learning is a subset of AI that focuses on the development of computer programs that can access data and use it learn for themselves.',
            example: 'Email spam filters learning to identify spam.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        The process of learning begins with observations or data, such as examples, direct experience, or instruction, in order to look for patterns in data and make better decisions in the future based on the examples that we provide.
                    </p>
                </>
            ),
            codeSnippet: `from sklearn import tree

features = [[140, 1], [130, 1], [150, 0], [170, 0]]
labels = [0, 0, 1, 1]

clf = tree.DecisionTreeClassifier()
clf = clf.fit(features, labels)

print(clf.predict([[150, 0]]))`
        },
        {
            id: 'ai-neural-networks',
            title: 'AI Neural Networks',
            definition: 'Neural networks are a set of algorithms, modeled loosely after the human brain, that are designed to recognize patterns.',
            example: 'Recognizing handwriting or faces.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        They interpret sensory data through a kind of machine perception, labeling or clustering raw input.
                    </p>
                </>
            ),
            codeSnippet: null
        },
        {
            id: 'ai-deep-learning',
            title: 'AI Deep Learning',
            definition: 'Deep learning is a subset of machine learning where artificial neural networks, algorithms inspired by the human brain, learn from large amounts of data.',
            example: 'Self-driving cars.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Deep learning allows computational models that are composed of multiple processing layers to learn representations of data with multiple levels of abstraction.
                    </p>
                </>
            ),
            codeSnippet: `import tensorflow as tf

model = tf.keras.models.Sequential([
  tf.keras.layers.Flatten(input_shape=(28, 28)),
  tf.keras.layers.Dense(128, activation='relu'),
  tf.keras.layers.Dropout(0.2),
  tf.keras.layers.Dense(10)
])`
        },
        {
            id: 'ai-nlp',
            title: 'AI NLP',
            definition: 'Natural Language Processing (NLP) is a branch of AI that helps computers understand, interpret and manipulate human language.',
            example: 'Google Translate.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        NLP draws from many disciplines, including computer science and computational linguistics, in its pursuit to fill the gap between human communication and computer understanding.
                    </p>
                </>
            ),
            codeSnippet: null
        },
        {
            id: 'ai-computer-vision',
            title: 'AI Computer Vision',
            definition: 'Computer vision is a field of artificial intelligence that trains computers to interpret and understand the visual world.',
            example: 'Facial recognition technology.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Using digital images from cameras and videos and deep learning models, machines can accurately identify and classify objects - and then react to what they "see."
                    </p>
                </>
            ),
            codeSnippet: null
        },
        {
            id: 'ai-robotics',
            title: 'AI Robotics',
            definition: 'Robotics is an interdisciplinary branch of computer science and engineering.',
            example: 'Robots used in manufacturing assembly lines.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Robotics involves design, construction, operation, and use of robots. The goal of robotics is to design machines that can help and assist humans.
                    </p>
                </>
            ),
            codeSnippet: null
        },
        {
            id: 'ai-ethics',
            title: 'AI Ethics',
            definition: 'AI ethics is a system of moral principles and techniques intended to inform the development and responsible use of artificial intelligence technology.',
            example: 'Bias in AI algorithms.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        As AI becomes more prevalent, ethical considerations such as privacy, bias, and accountability become increasingly important.
                    </p>
                </>
            ),
            codeSnippet: null
        }
    ];

    const topics = courseData.map(topic => topic.title);
    const activeTopic = courseData[activeTopicIndex];

    const CodeBlock = ({ code, lang = 'python' }: { code: string, lang?: string }) => (
        <div className="bg-[#1e1e1e] text-gray-200 p-6 rounded-2xl font-mono text-sm mb-6 overflow-x-auto shadow-xl border border-gray-800">
            <div className="flex items-center space-x-2 mb-4 border-b border-gray-700 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-xs text-gray-500 font-sans">main.py</span>
            </div>
            <pre className="leading-relaxed text-purple-300">{code}</pre>
        </div>
    );

    return (
        <CoursePageLayout
            title="Artificial Intelligence Tutorial"
            description="Artificial Intelligence (AI) is the simulation of human intelligence processes by machines, especially computer systems."
            topics={topics}
            icon={Bot}
            colorClass="purple"
            activeTopicIndex={activeTopicIndex}
            onTopicClick={setActiveTopicIndex}
        >
            <div className="space-y-8">
                {/* Definition Section */}
                <div className="bg-purple-50 dark:bg-purple-900/10 border-l-4 border-purple-600 p-6 rounded-r-xl">
                    <h3 className="text-lg font-bold text-purple-800 dark:text-purple-300 mb-2 flex items-center">
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
                                <Code className="w-6 h-6 mr-2 text-purple-600" />
                                Code Example
                            </h3>
                            <CodeBlock code={activeTopic.codeSnippet} />
                        </div>
                    )}
                </div>
            </div>
        </CoursePageLayout>
    );
};

export default AiCoursePage;
