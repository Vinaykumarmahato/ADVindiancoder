import React, { useState } from 'react';
import CoursePageLayout from '../../components/CoursePageLayout';
import { Network, Code, BookOpen, Lightbulb, FileText, Cpu, Layers, ShieldAlert, Zap, Workflow, Check, AlertTriangle } from 'lucide-react';
import CodeBlock from '../../components/CodeBlock';
import MermaidDiagram from '../../components/MermaidDiagram';

interface DsaTopic {
    id: string;
    title: string;
    definition: string;
    example?: string;
    syntax?: string;
    realLifeScenario?: string;
    codeSnippet?: string | null;
    content: React.ReactNode;
}

const DsaCoursePage = () => {
    const [activeTopicIndex, setActiveTopicIndex] = useState(0);

    const courseData: DsaTopic[] = [
        // ==================== BEGINNER TIER ====================
        {
            id: 'dsa-asymptotic-complexity',
            title: '1. [Beginner] Asymptotic Analysis & Big-O Complexity',
            definition: 'Asymptotic analysis evaluates algorithmic efficiency scaling as input size N grows towards infinity, measuring Time Complexity O(f(n)) and auxiliary Space Complexity.',
            syntax: `/* Big-O Time Complexity Growth Hierarchy */
O(1) Constant < O(log N) Logarithmic < O(N) Linear < O(N log N) Linearithmic < O(N^2) Quadratic < O(2^N) Exponential`,
            codeSnippet: `def binary_search(arr, target):
    low = 0
    high = len(arr) - 1
    
    # O(log N) Time Complexity: Halves search space each iteration
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
            
    return -1

sorted_nums = [10, 20, 30, 40, 50, 60, 70, 80, 90]
print("Found target 60 at index:", binary_search(sorted_nums, 60))`,
            realLifeScenario: 'High-frequency stock order matching engines require O(log N) binary search trees to execute microsecond trades.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-md font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            Asymptotic analysis evaluates algorithmic efficiency scaling as input size <code className="text-cyan-600 font-mono">N</code> grows towards infinity, measuring Time Complexity <code className="text-cyan-600 font-mono">O(f(n))</code> and auxiliary Space Complexity.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            Finding a word in a dictionary: instead of checking page by page (<code className="text-cyan-600 font-mono">O(N)</code>), you open the middle, determine which half to search, and repeat (<code className="text-cyan-600 font-mono">O(log N)</code>).
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <h4 className="text-md font-bold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph TD;
    A[O_1 Constant] --> B[O_logN Logarithmic];
    B --> C[O_N Linear];
    C --> D[O_NlogN Linearithmic];
    D --> E[O_N2 Quadratic];
    E --> F[O_2N Exponential];`} />
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-md font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-purple-500" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`def constant_time(arr):\n    return arr[0] # O(1)`} lang="python" filename="big_o.py" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            Database query planners use cost models based on asymptotic complexity to choose between sequential scans (<code className="text-cyan-600 font-mono">O(N)</code>) and index lookups (<code className="text-cyan-600 font-mono">O(log N)</code>).
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="text-md font-bold flex items-center mb-2">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" />
                                Advantages
                            </h4>
                            <ul className="list-disc list-inside text-sm space-y-1">
                                <li>Provides an abstract, machine-independent measure of performance.</li>
                                <li>Identifies bottlenecks before writing full code.</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="text-md font-bold flex items-center mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="list-disc list-inside text-sm space-y-1">
                                <li>Ignores constant factors which might dominate for small <code className="text-cyan-400">N</code>.</li>
                                <li>Worst-case analysis might be overly pessimistic for real-world data.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'dsa-arrays-strings-sliding-window',
            title: '2. [Beginner] Arrays & Strings (Two-Pointers, Sliding Window)',
            definition: 'Arrays store elements in contiguous memory. Master the Two-Pointer technique (in-place manipulation) and Sliding Window pattern for subarray optimization.',
            syntax: `# Sliding Window Blueprint (Maximum Subarray Sum of Size K):
def max_subarray(arr, k):
    window_sum = sum(arr[:k])
    max_sum = window_sum
    for i in range(k, len(arr)):
        window_sum += arr[i] - arr[i - k]
        max_sum = max(max_sum, window_sum)
    return max_sum`,
            codeSnippet: `# Two-Pointer Pattern: Target Pair Sum in Sorted Array
def find_two_sum(numbers, target):
    left, right = 0, len(numbers) - 1
    
    while left < right:
        current_sum = numbers[left] + numbers[right]
        if current_sum == target:
            return [left, right]
        elif current_sum < target:
            left += 1
        else:
            right -= 1
    return []

print("Indices of Target Sum 18:", find_two_sum([2, 7, 11, 15], 18))`,
            realLifeScenario: 'Streaming network traffic monitoring uses sliding window algorithms to compute moving average bandwidth consumption.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-md font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            Arrays store elements in contiguous memory. Master the Two-Pointer technique (in-place manipulation) and Sliding Window pattern for subarray optimization.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            Sliding window is like looking at a passing train through a narrow window. You only see a fixed number of cars at once, and as the train moves, one car enters your view while one leaves.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <h4 className="text-md font-bold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph LR;
    A[Window Left] --> B[Window Middle];
    B --> C[Window Right];
    A --> |Slide Right| D[New Window Left];
    C --> |Slide Right| E[New Window Right];`} />
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-md font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-purple-500" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`def reverse_string(s):\n    left, right = 0, len(s)-1\n    while left < right:\n        s[left], s[right] = s[right], s[left]\n        left += 1\n        right -= 1`} lang="python" filename="two_pointers.py" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            Calculating 7-day rolling averages for stock prices or monitoring rate limits (e.g., max 100 API requests per minute).
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="text-md font-bold flex items-center mb-2">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" />
                                Advantages
                            </h4>
                            <ul className="list-disc list-inside text-sm space-y-1">
                                <li>Reduces <code className="text-cyan-400">O(N^2)</code> brute-force loops to <code className="text-cyan-400">O(N)</code> linear scans.</li>
                                <li>Often achieves <code className="text-cyan-400">O(1)</code> space complexity.</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="text-md font-bold flex items-center mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="list-disc list-inside text-sm space-y-1">
                                <li>Two-pointer target-sum pattern usually requires the array to be sorted first.</li>
                                <li>Tricky to manage window bounds and off-by-one errors.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'dsa-linked-lists-floyd-cycle',
            title: '3. [Beginner] Linked Lists & Floyd\'s Cycle Detection',
            definition: 'Linked Lists store nodes containing data and pointers. Floyd\'s Tortoise and Hare algorithm detects cyclic loops using slow (1 step) and fast (2 steps) pointers.',
            syntax: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next`,
            codeSnippet: `# Floyd's Cycle Detection Algorithm
def has_cycle(head):
    slow = head
    fast = head
    
    while fast and fast.next:
        slow = slow.next          # 1 step forward
        fast = fast.next.next     # 2 steps forward
        if slow == fast:
            return True           # Cycle Detected!
            
    return False                  # End reached (No Cycle)`,
            realLifeScenario: 'LRU (Least Recently Used) cache systems combine Doubly Linked Lists with HashMaps for O(1) page eviction and lookup.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-md font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            Linked Lists store nodes containing data and pointers. Floyd\'s Tortoise and Hare algorithm detects cyclic loops using slow (1 step) and fast (2 steps) pointers.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            Runners on a circular track: A fast runner (moving at 2x speed) will eventually lap and meet the slow runner if the track is a closed loop.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <h4 className="text-md font-bold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph LR;
    Node1((1)) --> Node2((2));
    Node2 --> Node3((3));
    Node3 --> Node4((4));
    Node4 --> Node5((5));
    Node5 --> Node3;`} />
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-md font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-purple-500" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`def middle_node(head):\n    slow = fast = head\n    while fast and fast.next:\n        slow = slow.next\n        fast = fast.next.next\n    return slow`} lang="python" filename="mid_linked_list.py" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            Blockchain node traversal, operating system memory allocation tracking, and LRU Cache implementations (using Doubly Linked Lists).
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="text-md font-bold flex items-center mb-2">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" />
                                Advantages
                            </h4>
                            <ul className="list-disc list-inside text-sm space-y-1">
                                <li>Dynamic size; nodes can be inserted/deleted in <code className="text-cyan-400">O(1)</code> time if the location is known.</li>
                                <li>Cycle detection uses <code className="text-cyan-400">O(1)</code> extra memory compared to Hash Sets.</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="text-md font-bold flex items-center mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="list-disc list-inside text-sm space-y-1">
                                <li>No random access (<code className="text-cyan-400">O(N)</code> to access i-th element).</li>
                                <li>Extra memory overhead for storing pointers.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'dsa-stacks-queues-deque',
            title: '4. [Beginner] Stacks & Queues (Monotonic Stack, Deque)',
            definition: 'Stacks enforce Last-In-First-Out (LIFO) access; Queues enforce First-In-First-Out (FIFO) access. Monotonic Stacks solve Next Greater Element problems in O(N) time.',
            syntax: `# Python Deque (Double-Ended Queue):
from collections import deque
q = deque()
q.append(10)      # Push right
q.popleft()       # Pop left O(1)`,
            codeSnippet: `# Monotonic Stack: Next Greater Element
def next_greater_element(nums):
    res = [-1] * len(nums)
    stack = [] # Stores indices of decreasing elements
    
    for i, num in enumerate(nums):
        while stack and nums[stack[-1]] < num:
            idx = stack.pop()
            res[idx] = num
        stack.append(i)
        
    return res

print("Next Greater Elements:", next_greater_element([2, 1, 2, 4, 3]))`,
            realLifeScenario: 'Browser back/forward history navigation stacks and undo/redo buffers rely on Stack LIFO data structures.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-md font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            Stacks enforce Last-In-First-Out (LIFO) access; Queues enforce First-In-First-Out (FIFO) access. Monotonic Stacks solve Next Greater Element problems in <code className="text-cyan-600 font-mono">O(N)</code> time.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            Stack = A pile of plates (last plate placed is the first washed). Queue = A line at a coffee shop (first in line gets served first).
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <h4 className="text-md font-bold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph TD;
    subgraph Stack LIFO
    A1[Top] --> A2[Middle] --> A3[Bottom];
    end
    subgraph Queue FIFO
    B1[Front] --> B2[Middle] --> B3[Rear];
    end`} />
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-md font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-purple-500" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`from collections import deque\nqueue = deque()\nqueue.append(1) # Enqueue\nqueue.popleft() # Dequeue`} lang="python" filename="queue_ex.py" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            Browser back/forward history navigation stacks, function call stacks in OS, and task scheduling queues in messaging systems like RabbitMQ.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="text-md font-bold flex items-center mb-2">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" />
                                Advantages
                            </h4>
                            <ul className="list-disc list-inside text-sm space-y-1">
                                <li>Provides constant <code className="text-cyan-400">O(1)</code> time complexity for insertion and deletion at boundaries.</li>
                                <li>Monotonic stacks solve specific <code className="text-cyan-400">O(N^2)</code> nested loop problems in linear time.</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="text-md font-bold flex items-center mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="list-disc list-inside text-sm space-y-1">
                                <li>Restricted access pattern: You cannot randomly access the i-th element.</li>
                                <li>Standard list-based queues in Python have <code className="text-cyan-400">O(N)</code> dequeue times; you must use <code className="text-cyan-400">collections.deque</code>.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },

        // ==================== INTERMEDIATE TIER ====================
        {
            id: 'dsa-recursion-backtracking',
            title: '5. [Intermediate] Recursion & Backtracking (Subsets, N-Queens)',
            definition: 'Recursion breaks problems into smaller self-similar subproblems with base cases. Backtracking systematically explores and prunes state space search trees.',
            syntax: `def backtrack(state, options):
    if is_solution(state):
        add_solution(state)
        return
    for option in options:
        if is_valid(option):
            make_move(option)
            backtrack(state, options)
            undo_move(option) # Backtrack step!`,
            codeSnippet: `# Subset Generation via Backtracking
def generate_subsets(nums):
    result = []
    
    def backtrack(start, current_combination):
        result.append(list(current_combination))
        for i in range(start, len(nums)):
            current_combination.append(nums[i])
            backtrack(i + 1, current_combination)
            current_combination.pop() # Backtrack undo
            
    backtrack(0, [])
    return result

print("Subsets of [1, 2]:", generate_subsets([1, 2]))`,
            realLifeScenario: 'Sudoku solvers and maze routing pathfinders prune invalid search branches via backtracking algorithms.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-md font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            Recursion breaks problems into smaller self-similar subproblems with base cases. Backtracking systematically explores and prunes state space search trees.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            Navigating a maze: walk a path until you hit a dead end, then retrace your steps (backtrack) to the last intersection and try a different path.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <h4 className="text-md font-bold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph TD;
    Root --> Branch1;
    Root --> Branch2;
    Branch1 --> Leaf1[Invalid];
    Leaf1 -.->|Backtrack| Branch1;
    Branch1 --> Leaf2[Valid];`} />
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-md font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-purple-500" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`def factorial(n):\n    if n <= 1: return 1\n    return n * factorial(n - 1)`} lang="python" filename="recursion.py" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            Solving constraints problems like Sudoku, generating all valid cryptographic key permutations, and game tree evaluation (e.g., Chess Minimax algorithm).
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="text-md font-bold flex items-center mb-2">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" />
                                Advantages
                            </h4>
                            <ul className="list-disc list-inside text-sm space-y-1">
                                <li>Produces elegant, readable code for tree and graph problems.</li>
                                <li>Avoids manually managing complex iterative stack states.</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="text-md font-bold flex items-center mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="list-disc list-inside text-sm space-y-1">
                                <li>Risk of Stack Overflow errors if base cases are missed or depth is too large.</li>
                                <li>High memory overhead due to deep call stacks.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'dsa-sorting-searching-quicksort-mergesort',
            title: '6. [Intermediate] Sorting & Searching (MergeSort, QuickSort)',
            definition: 'Divide-and-Conquer sorting algorithms (MergeSort O(N log N) stable, QuickSort O(N log N) in-place average) partition arrays for efficient ordering.',
            syntax: `# MergeSort Divide-and-Conquer Blueprint:
def merge_sort(arr):
    if len(arr) <= 1: return arr
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    return merge(left, right)`,
            codeSnippet: `# In-place QuickSort Algorithm
def quicksort(arr, low, high):
    if low < high:
        pivot_idx = partition(arr, low, high)
        quicksort(arr, low, pivot_idx - 1)
        quicksort(arr, pivot_idx + 1, high)

def partition(arr, low, high):
    pivot = arr[high]
    i = low - 1
    for j in range(low, high):
        if arr[j] <= pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1

nums = [38, 27, 43, 3, 9, 82, 10]
quicksort(nums, 0, len(nums) - 1)
print("Sorted Array:", nums)`,
            realLifeScenario: 'Database engines use External MergeSort to sort multi-gigabyte table indices that exceed available server RAM.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-md font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            Divide-and-Conquer sorting algorithms (MergeSort <code className="text-cyan-600 font-mono">O(N log N)</code> stable, QuickSort <code className="text-cyan-600 font-mono">O(N log N)</code> in-place average) partition arrays for efficient ordering.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            Organizing a messy deck of cards: you split them in half, have your friend sort one half, you sort the other, and then carefully interleave the two sorted halves.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <h4 className="text-md font-bold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph TD;
    A[Unsorted Array] --> B[Left Half];
    A --> C[Right Half];
    B --> D[Sorted Left];
    C --> E[Sorted Right];
    D --> F[Merged Sorted Array];
    E --> F;`} />
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-md font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-purple-500" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`# Language built-ins often use Timsort (Merge + Insertion)\narr.sort() # Python O(N log N)`} lang="python" filename="sorting.py" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            E-commerce platforms sorting product catalogs by price or ratings, and database systems executing "ORDER BY" queries using External MergeSort.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="text-md font-bold flex items-center mb-2">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" />
                                Advantages
                            </h4>
                            <ul className="list-disc list-inside text-sm space-y-1">
                                <li>MergeSort provides a guaranteed <code className="text-cyan-400">O(N log N)</code> worst-case and is stable.</li>
                                <li>QuickSort works entirely in-place, offering low constant factors and caching benefits.</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="text-md font-bold flex items-center mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="list-disc list-inside text-sm space-y-1">
                                <li>QuickSort degrades to <code className="text-cyan-400">O(N^2)</code> on already sorted arrays without good pivot selection.</li>
                                <li>MergeSort requires <code className="text-cyan-400">O(N)</code> auxiliary memory overhead.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'dsa-hashing-hashtables',
            title: '7. [Intermediate] Hashing & Hash Tables (Chaining vs Open Addressing)',
            definition: 'Hash Tables map keys to array bucket indices via hash functions, achieving average O(1) insertions and lookups. Handle collisions using Separate Chaining or Open Addressing.',
            syntax: `# Separate Chaining Collision Handling:
hash_key = hash(key) % array_capacity
bucket_list = table[hash_key]
bucket_list.append((key, value))`,
            codeSnippet: `# Simple Hash Table with Separate Chaining
class SimpleHashMap:
    def __init__(self, capacity=10):
        self.capacity = capacity
        self.table = [[] for _ in range(capacity)]
        
    def _hash(self, key):
        return hash(key) % self.capacity
        
    def put(self, key, value):
        bucket = self.table[self._hash(key)]
        for i, (k, v) in enumerate(bucket):
            if k == key:
                bucket[i] = (key, value)
                return
        bucket.append((key, value))
        
    def get(self, key):
        bucket = self.table[self._hash(key)]
        for k, v in bucket:
            if k == key: return v
        return None

hm = SimpleHashMap()
hm.put("user_101", "Vinay")
print("Fetched User:", hm.get("user_101"))`,
            realLifeScenario: 'In-memory key-value databases (Redis) and compiler symbol tables use HashMaps for microsecond key lookups.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-md font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            Hash Tables map keys to array bucket indices via hash functions, achieving average <code className="text-cyan-600 font-mono">O(1)</code> insertions and lookups. Handle collisions using Separate Chaining or Open Addressing.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            A coat check system: you give your coat (value), you get a ticket number (hash key), and you can instantly retrieve your coat later without checking everyone else\'s.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <h4 className="text-md font-bold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph LR;
    Key[Key: 'user_id'] --> Hash[Hash Function];
    Hash --> Index[Index: 3];
    Index --> Bucket[Bucket 3: Value];`} />
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-md font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-purple-500" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`# Python Dictionary is a Hash Table\nhash_map = {}\nhash_map["key"] = "value" # O(1) insert`} lang="python" filename="hash_map.py" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            In-memory caches (Redis/Memcached), duplicate detection in large datasets, and database indexing via hash joins.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="text-md font-bold flex items-center mb-2">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" />
                                Advantages
                            </h4>
                            <ul className="list-disc list-inside text-sm space-y-1">
                                <li>Unbeatable average-case <code className="text-cyan-400">O(1)</code> performance for lookup, insertion, and deletion.</li>
                                <li>Flexible keys—can hash strings, objects, and tuples.</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="text-md font-bold flex items-center mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="list-disc list-inside text-sm space-y-1">
                                <li>Does not maintain order of elements natively (unless using variations like OrderedDict).</li>
                                <li>Worst-case performance is <code className="text-cyan-400">O(N)</code> if many hash collisions occur.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'dsa-trees-bst-traversals',
            title: '8. [Intermediate] Binary Search Trees & Traversals (BFS, DFS)',
            definition: 'Binary Search Trees (BST) enforce node ordering: Left subtree < Root < Right subtree. Master DFS traversals (In-order, Pre-order, Post-order) and BFS Level-order traversal.',
            syntax: `# BST In-Order Traversal (Yields Sorted Output):
def inorder(root):
    if root:
        inorder(root.left)
        print(root.val)
        inorder(root.right)`,
            codeSnippet: `# BFS Level-Order Traversal using Queue
from collections import deque

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def level_order_traversal(root):
    if not root: return []
    res, queue = [], deque([root])
    
    while queue:
        level_size = len(queue)
        current_level = []
        for _ in range(level_size):
            node = queue.popleft()
            current_level.append(node.val)
            if node.left: queue.append(node.left)
            if node.right: queue.append(node.right)
        res.append(current_level)
    return res

# Tree Setup: 1 -> [2, 3]
root = TreeNode(1, TreeNode(2), TreeNode(3))
print("Level-Order Output:", level_order_traversal(root))`,
            realLifeScenario: 'In-order traversal on a Binary Search Tree (BST) produces elements in perfectly sorted order.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-md font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            Binary Search Trees (BST) enforce node ordering: Left subtree &lt; Root &lt; Right subtree. Master DFS traversals (In-order, Pre-order, Post-order) and BFS Level-order traversal.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            A corporate hierarchy chart: the CEO is at the root, and each manager has subordinates branching below them.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <h4 className="text-md font-bold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph TD;
    Root((10)) --> L((5));
    Root --> R((15));
    L --> LL((3));
    L --> LR((7));`} />
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-md font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-purple-500" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`def search_bst(root, val):\n    if not root or root.val == val:\n        return root\n    return search_bst(root.left, val) if val < root.val else search_bst(root.right, val)`} lang="python" filename="bst_search.py" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            DOM tree rendering in browsers, File System hierarchy mapping, and dynamic routing tables.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="text-md font-bold flex items-center mb-2">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" />
                                Advantages
                            </h4>
                            <ul className="list-disc list-inside text-sm space-y-1">
                                <li>Provides efficient <code className="text-cyan-400">O(log N)</code> search, insert, and delete operations on average.</li>
                                <li>Maintains dynamic sorted data implicitly.</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="text-md font-bold flex items-center mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="list-disc list-inside text-sm space-y-1">
                                <li>Can degrade to a linked list <code className="text-cyan-400">O(N)</code> if unbalanced (e.g., sequentially inserting sorted data).</li>
                                <li>Requires self-balancing algorithms (AVL, Red-Black) to guarantee performance.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },

        // ==================== ADVANCED TIER ====================
        {
            id: 'dsa-heaps-priority-queues',
            title: '9. [Advanced] Advanced Trees & Heaps (Min-Heap, Max-Heapify)',
            definition: 'Binary Heaps maintain complete binary tree properties (Min-Heap: Parent <= Children). Priority Queues utilize heaps for O(log N) insertion and O(1) minimum extraction.',
            syntax: `# Python heapq Module Blueprint (Min-Heap):
import heapq
heap = []
heapq.heappush(heap, 10)
min_val = heapq.heappop(heap) # Pops smallest element`,
            codeSnippet: `import heapq

# Find K Largest Elements in Unsorted Array using Min-Heap
def find_k_largest(nums, k):
    min_heap = []
    for num in nums:
        heapq.heappush(min_heap, num)
        if len(min_heap) > k:
            heapq.heappop(min_heap) # Keep only K largest in heap
    return min_heap

print("3 Largest Numbers:", find_k_largest([3, 2, 1, 5, 6, 4], 3))`,
            realLifeScenario: 'Operating system CPU schedulers use Priority Queues to dispatch tasks based on thread execution priority.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-md font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            Binary Heaps maintain complete binary tree properties (Min-Heap: Parent &le; Children). Priority Queues utilize heaps for <code className="text-cyan-600 font-mono">O(log N)</code> insertion and <code className="text-cyan-600 font-mono">O(1)</code> minimum extraction.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            Emergency room triage: Patients aren't treated in the order they arrive, but based on the severity of their condition (priority).
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <h4 className="text-md font-bold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph TD;
    1[1 Min] --> 4[4];
    1 --> 3[3];
    4 --> 9[9];
    4 --> 6[6];
    3 --> 8[8];`} />
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-md font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-purple-500" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`import heapq\nnums = [5, 2, 8, 1]\nheapq.heapify(nums) # O(N)\nprint(heapq.heappop(nums)) # Prints 1`} lang="python" filename="heap.py" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            Operating system CPU scheduling, Dijkstra\'s shortest path algorithm (priority queue), and streaming data median-finding.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="text-md font-bold flex items-center mb-2">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" />
                                Advantages
                            </h4>
                            <ul className="list-disc list-inside text-sm space-y-1">
                                <li><code className="text-cyan-400">O(1)</code> time to access the maximum or minimum element.</li>
                                <li>Can be implemented perfectly via an array, removing the need for object pointers.</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="text-md font-bold flex items-center mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="list-disc list-inside text-sm space-y-1">
                                <li>Searching for an arbitrary element takes <code className="text-cyan-400">O(N)</code> time.</li>
                                <li>Not designed for finding an exact match, only the absolute min or max.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'dsa-graph-representations',
            title: '10. [Advanced] Graph Representations (Adjacency List vs Matrix)',
            definition: 'Graphs model networks of vertices and edges. Represent graph topologies using Adjacency Lists (memory-efficient O(V+E)) or Adjacency Matrices (O(V^2) matrix lookup).',
            syntax: `# Adjacency List Representation Blueprint:
graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D'],
    'C': ['A'],
    'D': ['B']
}`,
            codeSnippet: `# Building Adjacency List for Undirected Graph
def build_graph(num_nodes, edges):
    adj_list = {i: [] for i in range(num_nodes)}
    for u, v in edges:
        adj_list[u].append(v)
        adj_list[v].append(u) # Bi-directional link
    return adj_list

edges = [(0, 1), (0, 2), (1, 3)]
graph = build_graph(4, edges)
print("Graph Adjacency List:", graph)`,
            realLifeScenario: 'Social networks (LinkedIn connections, Twitter followers) model user relationships as massive distributed Adjacency Lists.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-md font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            Graphs model networks of vertices and edges. Represent graph topologies using Adjacency Lists (memory-efficient <code className="text-cyan-600 font-mono">O(V+E)</code>) or Adjacency Matrices (<code className="text-cyan-600 font-mono">O(V^2)</code> matrix lookup).
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            An airline route map: cities are vertices, and direct flights between them are edges. A flight schedule list is an Adjacency List.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <h4 className="text-md font-bold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph LR;
    A((A)) --- B((B));
    A --- C((C));
    B --- D((D));`} />
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-md font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-purple-500" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`# Simple Adjacency Matrix\nmatrix = [[0, 1, 1],\n          [1, 0, 0],\n          [1, 0, 0]]`} lang="python" filename="graph_rep.py" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            Social networks mapping friendships, Internet routing tables mapping router connections, and dependency graphs in package managers.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="text-md font-bold flex items-center mb-2">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" />
                                Advantages
                            </h4>
                            <ul className="list-disc list-inside text-sm space-y-1">
                                <li>Adjacency lists are highly space-efficient for sparse graphs.</li>
                                <li>Matrices allow <code className="text-cyan-400">O(1)</code> time to check if an edge exists between two nodes.</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="text-md font-bold flex items-center mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="list-disc list-inside text-sm space-y-1">
                                <li>Matrices use <code className="text-cyan-400">O(V^2)</code> space, which is prohibitive for massive graphs.</li>
                                <li>Lists take <code className="text-cyan-400">O(V)</code> time to confirm edge existence.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'dsa-graph-traversals-bfs-dfs',
            title: '11. [Advanced] Graph Traversals (BFS, DFS & Bipartite Check)',
            definition: 'Traverse graph networks using BFS (Shortest Path in unweighted graphs) and DFS (Path finding, Connected Components, Topological Sorting, Cycle Detection).',
            syntax: `# Graph BFS Blueprint using Visited Set:
def bfs(graph, start):
    visited = set([start])
    queue = deque([start])
    while queue:
        curr = queue.popleft()
        for neighbor in graph[curr]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)`,
            codeSnippet: `# Graph DFS Traversal (Connected Component Search)
def dfs_connected_components(graph, start, visited=None):
    if visited is None: visited = set()
    visited.add(start)
    
    for neighbor in graph.get(start, []):
        if neighbor not in visited:
            dfs_connected_components(graph, neighbor, visited)
            
    return visited

graph = {0: [1, 2], 1: [0, 3], 2: [0], 3: [1]}
print("Visited Nodes via DFS:", dfs_connected_components(graph, 0))`,
            realLifeScenario: 'GPS navigation systems use BFS to find the shortest hop routes across unweighted transit networks.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-md font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            Traverse graph networks using BFS (Shortest Path in unweighted graphs) and DFS (Path finding, Connected Components, Topological Sorting, Cycle Detection).
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            BFS is like exploring a city block by block outward from your hotel. DFS is like walking down one street as far as it goes before turning around.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <h4 className="text-md font-bold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph TD;
    S((Start)) --> A((Level 1));
    S --> B((Level 1));
    A --> C((Level 2));
    B --> D((Level 2));`} />
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-md font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-purple-500" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`def has_path(graph, src, dst):\n    if src == dst: return True\n    for neighbor in graph[src]:\n        if has_path(graph, neighbor, dst): return True\n    return False`} lang="python" filename="dfs_path.py" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            Web crawlers indexing sites (BFS), solving mazes (DFS), and finding "degrees of separation" on LinkedIn.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="text-md font-bold flex items-center mb-2">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" />
                                Advantages
                            </h4>
                            <ul className="list-disc list-inside text-sm space-y-1">
                                <li>BFS guarantees the shortest path (minimum edges) in unweighted graphs.</li>
                                <li>DFS uses less memory for wide graphs and effortlessly detects cycles.</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="text-md font-bold flex items-center mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="list-disc list-inside text-sm space-y-1">
                                <li>Must maintain a <code className="text-cyan-400">visited</code> set to avoid infinite loops in cyclic graphs.</li>
                                <li>DFS is not suitable for finding optimal/shortest paths.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'dsa-shortest-path-dijkstra-dsu',
            title: '12. [Advanced] Shortest Path & MST (Dijkstra, Kruskal, DSU)',
            definition: 'Find shortest paths on weighted graphs using Dijkstra\'s algorithm (O((V+E) log V)). Compute Minimum Spanning Trees (MST) using Kruskal\'s algorithm with Disjoint Set Union (DSU).',
            syntax: `# Disjoint Set Union (DSU) with Path Compression Blueprint:
class DSU:
    def __init__(self, n):
        self.parent = list(range(n))
    def find(self, i):
        if self.parent[i] == i: return i
        self.parent[i] = self.find(self.parent[i]) # Path compression
        return self.parent[i]`,
            codeSnippet: `import heapq

# Dijkstra's Algorithm for Shortest Weighted Paths
def dijkstra(graph, start_node):
    distances = {node: float('inf') for node in graph}
    distances[start_node] = 0
    pq = [(0, start_node)] # (cost, node)
    
    while pq:
        curr_dist, u = heapq.heappop(pq)
        if curr_dist > distances[u]: continue
        
        for v, weight in graph[u]:
            distance = curr_dist + weight
            if distance < distances[v]:
                distances[v] = distance
                heapq.heappush(pq, (distance, v))
                
    return distances

weighted_graph = {
    'A': [('B', 4), ('C', 2)],
    'B': [('A', 4), ('C', 1), ('D', 5)],
    'C': [('A', 2), ('B', 1), ('D', 8)],
    'D': [('B', 5), ('C', 8)]
}
print("Shortest Distances from A:", dijkstra(weighted_graph, 'A'))`,
            realLifeScenario: 'Google Maps calculates optimal driving routes considering traffic weights using variants of Dijkstra\'s algorithm.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-md font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            Find shortest paths on weighted graphs using Dijkstra\'s algorithm (<code className="text-cyan-600 font-mono">O((V+E) log V)</code>). Compute Minimum Spanning Trees (MST) using Kruskal\'s algorithm with Disjoint Set Union (DSU).
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            Laying internet fiber optic cables between cities: you want to connect all cities using the absolute minimum amount of expensive cable (Minimum Spanning Tree).
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <h4 className="text-md font-bold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph LR;
    A((A)) -- 2 --> C((C));
    A -- 4 --> B((B));
    C -- 1 --> B;
    B -- 5 --> D((D));
    C -- 8 --> D;`} />
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-md font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-purple-500" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`# Disjoint Set Union Find\ndef find(i):\n    if parent[i] == i: return i\n    parent[i] = find(parent[i])\n    return parent[i]`} lang="python" filename="dsu.py" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            GPS turn-by-turn navigation, OSPF network routing protocols, and designing cost-efficient power grids (MST).
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="text-md font-bold flex items-center mb-2">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" />
                                Advantages
                            </h4>
                            <ul className="list-disc list-inside text-sm space-y-1">
                                <li>Dijkstra\'s is extremely fast and efficient for standard weighted pathfinding.</li>
                                <li>DSU allows near <code className="text-cyan-400">O(1)</code> time to check if two nodes belong to the same component.</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="text-md font-bold flex items-center mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="list-disc list-inside text-sm space-y-1">
                                <li>Dijkstra\'s fails with negative edge weights (requires Bellman-Ford).</li>
                                <li>Kruskal\'s requires sorting all edges first, making it <code className="text-cyan-400">O(E log E)</code>.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },

        // ==================== PROFESSIONAL TIER ====================
        {
            id: 'dsa-dynamic-programming-1d',
            title: '13. [Professional] Dynamic Programming Fundamentals (1D DP)',
            definition: 'Dynamic Programming (DP) solves optimization problems exhibiting Optimal Substructure and Overlapping Subproblems via Memoization (top-down) or Tabulation (bottom-up).',
            syntax: `# 1D Tabulation DP (House Robber Problem):
dp[i] = max(dp[i-1], dp[i-2] + nums[i])`,
            codeSnippet: `# House Robber Problem (1D Tabulation DP)
def rob(nums):
    if not nums: return 0
    if len(nums) <= 2: return max(nums)
    
    dp = [0] * len(nums)
    dp[0] = nums[0]
    dp[1] = max(nums[0], nums[1])
    
    for i in range(2, len(nums)):
        # Choice: Rob house i (add to dp[i-2]) OR skip house i (take dp[i-1])
        dp[i] = max(dp[i - 1], dp[i - 2] + nums[i])
        
    return dp[-1]

print("Maximum Stolen Value:", rob([2, 7, 9, 3, 1]))`,
            realLifeScenario: 'Financial portfolio optimization and resource allocation models use Dynamic Programming to maximize yield returns.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-md font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            Dynamic Programming (DP) solves optimization problems exhibiting Optimal Substructure and Overlapping Subproblems via Memoization (top-down) or Tabulation (bottom-up).
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            Remembering past calculations: If you know 2+2=4, and someone asks what 2+2+1 is, you don\'t recalculate 2+2, you just add 1 to the known result 4.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <h4 className="text-md font-bold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph TD;
    F5[Fib_5] --> F4[Fib_4];
    F5 --> F3[Fib_3];
    F4 --> F3_Memo[Fib_3 Cached];
    F4 --> F2[Fib_2];`} />
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-md font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-purple-500" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`memo = {}\ndef fib(n):\n    if n in memo: return memo[n]\n    if n <= 1: return n\n    memo[n] = fib(n-1) + fib(n-2)\n    return memo[n]`} lang="python" filename="memoization.py" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            Sequence alignment in Bioinformatics, text justification formatting algorithms, and resource allocation problems.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="text-md font-bold flex items-center mb-2">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" />
                                Advantages
                            </h4>
                            <ul className="list-disc list-inside text-sm space-y-1">
                                <li>Transforms exponential time <code className="text-cyan-400">O(2^N)</code> recursive algorithms into polynomial time <code className="text-cyan-400">O(N)</code>.</li>
                                <li>Tabulation eliminates call stack overhead completely.</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="text-md font-bold flex items-center mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="list-disc list-inside text-sm space-y-1">
                                <li>Highly abstract and difficult to formulate the exact state transition equation.</li>
                                <li>Requires extra space for the DP array/table caching.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'dsa-advanced-2d-dp',
            title: '14. [Professional] Advanced Dynamic Programming (0/1 Knapsack, LCS)',
            definition: 'Solve complex 2D DP problems: 0/1 Knapsack, Longest Common Subsequence (LCS), Edit Distance (Levenshtein Distance), and Matrix Chain Multiplication.',
            syntax: `# 0/1 Knapsack 2D State Transition Blueprint:
if weights[i-1] <= w:
    dp[i][w] = max(dp[i-1][w], values[i-1] + dp[i-1][w - weights[i-1]])
else:
    dp[i][w] = dp[i-1][w]`,
            codeSnippet: `# Longest Common Subsequence (2D DP)
def longest_common_subsequence(text1, text2):
    m, n = len(text1), len(text2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if text1[i - 1] == text2[j - 1]:
                dp[i][j] = 1 + dp[i - 1][j - 1]
            else:
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])
                
    return dp[m][n]

print("LCS Length ('abcde', 'ace'):", longest_common_subsequence("abcde", "ace"))`,
            realLifeScenario: 'DNA sequence alignment in bioinformatics and git diff comparison utilities use 2D Edit Distance / LCS algorithms.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-md font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            Solve complex 2D DP problems: 0/1 Knapsack, Longest Common Subsequence (LCS), Edit Distance (Levenshtein Distance), and Matrix Chain Multiplication.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            Packing for a trip: You have a suitcase with limited weight (capacity) and must choose the combination of items that gives you the highest value (0/1 Knapsack).
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <h4 className="text-md font-bold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph TD;
    DP[DP Grid] --> Cell1[dp_i_j];
    Cell1 -.-> |Depends on| Left[dp_i_j-1];
    Cell1 -.-> |Depends on| Up[dp_i-1_j];
    Cell1 -.-> |Depends on| Diag[dp_i-1_j-1];`} />
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-md font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-purple-500" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`# 2D Grid Initialization\nrows, cols = 3, 4\ndp = [[0] * cols for _ in range(rows)]`} lang="python" filename="2d_grid.py" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            <code className="text-cyan-600 font-mono">git diff</code> file comparison utilities, autocorrect spell checkers, and stock trading algorithm profit maximization.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="text-md font-bold flex items-center mb-2">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" />
                                Advantages
                            </h4>
                            <ul className="list-disc list-inside text-sm space-y-1">
                                <li>Provides mathematically proven optimal solutions for complex combinations.</li>
                                <li>Space complexity can often be reduced from 2D <code className="text-cyan-400">O(M*N)</code> to 1D <code className="text-cyan-400">O(N)</code> using rolling arrays.</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="text-md font-bold flex items-center mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="list-disc list-inside text-sm space-y-1">
                                <li>Time complexity remains strictly <code className="text-cyan-400">O(M*N)</code> which can be too slow for massive constraints (e.g. 10^5 x 10^5).</li>
                                <li>Inflexible; slight changes in problem conditions can require entirely new state equations.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'dsa-tries-segment-trees',
            title: '15. [Professional] Tries & Segment Trees (Prefix Trees)',
            definition: 'Tries (Prefix Trees) provide O(L) string search and autocomplete lookups. Segment Trees perform O(log N) range queries and point updates.',
            syntax: `class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end = False`,
            codeSnippet: `# Trie (Prefix Tree) Implementation for Autocomplete
class Trie:
    def __init__(self):
        self.root = {}
        
    def insert(self, word):
        node = self.root
        for char in word:
            if char not in node:
                node[char] = {}
            node = node[char]
        node['#'] = True # End of word marker
        
    def search(self, word):
        node = self.root
        for char in word:
            if char not in node: return False
            node = node[char]
        return '#' in node

trie = Trie()
trie.insert("apple")
print("Search 'apple':", trie.search("apple"))
print("Search 'app':", trie.search("app"))`,
            realLifeScenario: 'Search engine search bars (Google, Amazon) use Trie prefix trees to provide sub-millisecond autocomplete suggestions.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-md font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            Tries (Prefix Trees) provide <code className="text-cyan-600 font-mono">O(L)</code> string search and autocomplete lookups. Segment Trees perform <code className="text-cyan-600 font-mono">O(log N)</code> range queries and point updates.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            A phone contact book: To find "Alex", you open the "A" section, then the "Al" page, saving you from reading every name.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <h4 className="text-md font-bold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph TD;
    Root((Root)) --> c((c));
    c --> a((a));
    a --> t((t));
    a --> r((r));
    c --> o((o));`} />
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-md font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-purple-500" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`class TrieNode:\n    def __init__(self):\n        self.children = {}\n        self.is_word = False`} lang="python" filename="trie_node.py" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            IDE code completion (IntelliSense), network router IP prefix matching, and competitive programming range sum queries.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="text-md font-bold flex items-center mb-2">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" />
                                Advantages
                            </h4>
                            <ul className="list-disc list-inside text-sm space-y-1">
                                <li>Trie search time depends only on word length <code className="text-cyan-400">O(L)</code>, not dataset size.</li>
                                <li>Segment Trees handle continuous array mutations and queries in logarithmic time.</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="text-md font-bold flex items-center mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="list-disc list-inside text-sm space-y-1">
                                <li>High memory consumption; Tries create many pointer nodes for small character sets.</li>
                                <li>Complex implementation compared to simple HashMaps or Prefix Sum arrays.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'dsa-system-design-faang-interviews',
            title: '16. [Professional] FAANG Problem-Solving Framework & Complexity Choice',
            definition: 'Master FAANG coding interview problem-solving frameworks (UMPIRE: Understand, Match, Plan, Implement, Review, Evaluate) and choose optimal data structures under constraint limits.',
            syntax: `/* Constraint-to-Time-Complexity Decision Matrix:
N <= 10  ──> O(N!) or O(2^N) (Backtracking / Permutations)
N <= 10^3 ──> O(N^2) (2D DP / Nested Loops)
N <= 10^5 ──> O(N log N) (Sorting / Heap / Binary Search)
N <= 10^8 ──> O(N) or O(log N) (Linear Pass / Two Pointers) */`,
            codeSnippet: `# Interview Constraint Analysis & Optimization
# Given N = 10^5 elements, an O(N^2) solution will TLE (Time Limit Exceeded).
# Optimize to O(N log N) using Sorting/Heap or O(N) using HashMap!`,
            realLifeScenario: 'FAANG technical interviews evaluate candidates on identifying edge cases, analyzing Big-O trade-offs, and producing clean production code.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-md font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            Master FAANG coding interview problem-solving frameworks (UMPIRE: Understand, Match, Plan, Implement, Review, Evaluate) and choose optimal data structures under constraint limits.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            Building a house: You don\'t just start nailing wood. You analyze constraints (budget), draft a blueprint (plan), and review with inspectors (evaluate).
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <h4 className="text-md font-bold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph LR;
    U[Understand] --> M[Match];
    M --> P[Plan];
    P --> I[Implement];
    I --> R[Review];
    R --> E[Evaluate];`} />
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-md font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-purple-500" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`# 1. Ask clarifying questions\n# 2. State Big-O before coding\n# 3. Dry run with small example`} lang="python" filename="interview_framework.py" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            Passing high-stakes software engineering interviews, and architecting scalable backend systems that handle millions of requests without timing out.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="text-md font-bold flex items-center mb-2">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" />
                                Advantages
                            </h4>
                            <ul className="list-disc list-inside text-sm space-y-1">
                                <li>Structured approach prevents "freezing" during whiteboard sessions.</li>
                                <li>Translates directly into disciplined engineering practices at work.</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="text-md font-bold flex items-center mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="list-disc list-inside text-sm space-y-1">
                                <li>Requires rigorous practice; rote memorization is insufficient.</li>
                                <li>Time constraints (45 mins) force high pressure execution.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        }
    ];

    const topics = courseData.map(topic => topic.title);
    const activeTopic = courseData[activeTopicIndex];

    return (
        <CoursePageLayout
            title="Data Structures & Algorithms Masterclass"
            description="Master DSA from Big-O Complexity, Arrays, and Linked Lists to Trees, Graphs, Dijkstra, Dynamic Programming, Tries, and FAANG Interview Frameworks."
            topics={topics}
            icon={Network}
            colorClass="purple"
            activeTopicIndex={activeTopicIndex}
            onTopicClick={setActiveTopicIndex}
        >
            <div className="space-y-8">
                {/* Part 1: Concept Definition & Detailed Explanation */}
                <div className="bg-purple-50 dark:bg-purple-900/10 border-l-4 border-purple-600 p-6 rounded-r-xl shadow-sm">
                    <h3 className="text-lg font-bold text-purple-800 dark:text-purple-300 mb-2 flex items-center">
                        <BookOpen className="w-5 h-5 mr-2" />
                        1. Concept Definition & Detailed Explanation
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium mb-4">
                        {activeTopic.definition}
                    </p>
                    <div className="prose dark:prose-invert max-w-none text-sm text-gray-700 dark:text-gray-300">
                        {activeTopic.content}
                    </div>
                </div>

                {/* Part 2: Formal Code Syntax Blueprint */}
                {activeTopic.syntax ? (
                    <div className="bg-indigo-50 dark:bg-indigo-900/10 border-l-4 border-indigo-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-indigo-800 dark:text-indigo-300 mb-3 flex items-center">
                            <FileText className="w-5 h-5 mr-2" />
                            2. Formal Code Syntax Blueprint
                        </h3>
                        <div className="bg-slate-900 text-slate-100 font-mono text-sm p-4 rounded-xl border border-slate-800 overflow-x-auto">
                            <pre>{activeTopic.syntax}</pre>
                        </div>
                    </div>
                ) : (
                    <div className="bg-indigo-50 dark:bg-indigo-900/10 border-l-4 border-indigo-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-indigo-800 dark:text-indigo-300 mb-3 flex items-center">
                            <FileText className="w-5 h-5 mr-2" />
                            2. Formal Code Syntax Blueprint
                        </h3>
                        <div className="bg-slate-900 text-slate-100 font-mono text-sm p-4 rounded-xl border border-slate-800 overflow-x-auto">
                            <pre>{`# DSA Blueprint\ndef solve(problem): return solution`}</pre>
                        </div>
                    </div>
                )}

                {/* Part 3: Executable Code Example */}
                {activeTopic.codeSnippet && (
                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-purple-600" />
                            3. Executable Production Code Example
                        </h3>
                        <CodeBlock code={activeTopic.codeSnippet} lang="python" colorClass="purple" filename="algorithm.py" />
                    </div>
                )}

                {/* Part 4: Real-Life Scenario Example */}
                <div className="bg-emerald-50 dark:bg-emerald-900/10 border-l-4 border-emerald-600 p-6 rounded-r-xl shadow-sm">
                    <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                        <Lightbulb className="w-5 h-5 mr-2" />
                        4. Real-Life Industry Scenario & Application
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                        {activeTopic.realLifeScenario || activeTopic.example || "Powers high-performance database indexing, network routing algorithms, search engine autocomplete, and FAANG coding interview problem solving."}
                    </p>
                </div>
            </div>
        </CoursePageLayout>
    );
};

export default DsaCoursePage;
