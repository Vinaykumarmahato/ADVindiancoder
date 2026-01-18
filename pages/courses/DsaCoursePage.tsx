import React, { useState } from 'react';
import CoursePageLayout from '../../components/CoursePageLayout';
import { Network, Code, BookOpen, Lightbulb } from 'lucide-react';

const DsaCoursePage = () => {
    const [activeTopicIndex, setActiveTopicIndex] = useState(0);

    const courseData = [
        {
            id: 'dsa-intro',
            title: 'DSA Intro',
            definition: 'Data Structure is a way of collecting and organising data in such a way that we can perform operations on these data in an effective way.',
            example: 'Think of a library. You can organize books by genre, author, or color. Each method has pros and cons for finding a book.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Data Structures are about rendering data elements in terms of some relationship, for better organization and storage. Algorithms are a collection of steps to solve a particular problem.
                    </p>
                </>
            ),
            codeSnippet: null
        },
        {
            id: 'dsa-arrays',
            title: 'DSA Arrays',
            definition: 'An array is a collection of items stored at contiguous memory locations.',
            example: 'A row of mailboxes in an apartment building. Each has a number (index) and is right next to the other.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        The idea is to store multiple items of the same type together. This makes it easier to calculate the position of each element by simply adding an offset to a base value.
                    </p>
                </>
            ),
            codeSnippet: `arr = [1, 2, 3, 4, 5]
print(arr[0]) # Accessing the first element`
        },
        {
            id: 'dsa-linked-lists',
            title: 'DSA Linked Lists',
            definition: 'A linked list is a linear data structure, in which the elements are not stored at contiguous memory locations.',
            example: 'A scavenger hunt. Each clue tells you where to find the next clue.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        The elements in a linked list are linked using pointers.
                    </p>
                </>
            ),
            codeSnippet: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None`
        },
        {
            id: 'dsa-stacks',
            title: 'DSA Stacks',
            definition: 'A stack is a linear data structure that follows the LIFO (Last In First Out) principle.',
            example: 'A stack of plates. You can only take the top one off, and you put new ones on top.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        The two main operations of a stack are Push (add an item) and Pop (remove an item).
                    </p>
                </>
            ),
            codeSnippet: `stack = []
stack.append('a')
stack.append('b')
stack.append('c')
print(stack.pop()) # 'c'`
        },
        {
            id: 'dsa-queues',
            title: 'DSA Queues',
            definition: 'A Queue is a linear structure which follows a particular order in which the operations are performed. The order is First In First Out (FIFO).',
            example: 'A line of people waiting for a bus. The first person in line is the first one to get on.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        The difference between stacks and queues is in removing. In a stack we remove the item the most recently added; in a queue, we remove the item the least recently added.
                    </p>
                </>
            ),
            codeSnippet: `queue = []
queue.append('a')
queue.append('b')
queue.append('c')
print(queue.pop(0)) # 'a'`
        },
        {
            id: 'dsa-hash-tables',
            title: 'DSA Hash Tables',
            definition: 'A Hash Table is a data structure which stores data in an associative manner. In a hash table, data is stored in an array format, where each data value has its own unique index value.',
            example: 'A dictionary. You look up a word (key) to find its definition (value).',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Access of data becomes very fast if we know the index of the desired data.
                    </p>
                </>
            ),
            codeSnippet: `my_dict = {'name': 'John', 'age': 30}
print(my_dict['name'])`
        },
        {
            id: 'dsa-trees',
            title: 'DSA Trees',
            definition: 'A Tree is a non-linear data structure and a hierarchy consisting of a collection of nodes such that each node of the tree stores a value and a list of references to other nodes (the "children").',
            example: 'A family tree or a corporate organizational chart.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        This data structure is a specialized method to organize and store data in the computer to be used more effectively.
                    </p>
                </>
            ),
            codeSnippet: null
        },
        {
            id: 'dsa-sorting-algorithms',
            title: 'DSA Sorting Algorithms',
            definition: 'Sorting is the process of arranging data in a specific order. Common algorithms include Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, Quick Sort.',
            example: 'Arranging a deck of cards in order from Ace to King.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Efficient sorting is important for optimizing the efficiency of other algorithms (such as search and merge algorithms) which require input data to be in sorted lists.
                    </p>
                </>
            ),
            codeSnippet: `def bubbleSort(arr):
    n = len(arr)
    for i in range(n-1):
        for j in range(0, n-i-1):
            if arr[j] > arr[j + 1] :
                arr[j], arr[j + 1] = arr[j + 1], arr[j]`
        },
        {
            id: 'dsa-big-o-notation',
            title: 'DSA Big O Notation',
            definition: 'Big O notation is a mathematical notation that describes the limiting behavior of a function when the argument tends towards a particular value or infinity.',
            example: 'Comparing how long it takes to drive to the store vs. walk to the store as the distance increases.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        It is a member of a family of notations invented by Paul Bachmann, Edmund Landau, and others, collectively called Bachmann–Landau notation or asymptotic notation.
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
                <span className="ml-4 text-xs text-gray-500 font-sans uppercase">{lang}</span>
            </div>
            <pre className="leading-relaxed text-purple-300">{code}</pre>
        </div>
    );

    return (
        <CoursePageLayout
            title="DSA Tutorial"
            description="Data Structures and Algorithms (DSA) is a fundamental part of Computer Science that provides a way to organize and store data efficiently."
            topics={topics}
            icon={Network}
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
                <div className="bg-pink-50 dark:bg-pink-900/10 border-l-4 border-pink-600 p-6 rounded-r-xl">
                    <h3 className="text-lg font-bold text-pink-800 dark:text-pink-300 mb-2 flex items-center">
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

export default DsaCoursePage;
