const fs = require('fs');
const path = require('path');

const customProblems = {
    "two-sum": {
        parser: "ARRAY_INT_AND_INT",
        methodName: "twoSum",
        javaSig: "public int[] twoSum(int[] nums, int target)",
        pySig: "def twoSum(self, nums: List[int], target: int) -> List[int]:",
        cppSig: "vector<int> twoSum(vector<int>& nums, int target)",
        jsSig: "function twoSum(nums, target)",
        detailedDescription: "Given an array of integers `nums` and an integer `target`, return *indices of the two numbers such that they add up to `target`*.\n\nYou may assume that each input would have ***exactly* one solution**, and you may not use the *same* element twice.\n\nYou can return the answer in any order.",
        constraints: [
            "2 <= nums.length <= 10^4",
            "-10^9 <= nums[i] <= 10^9",
            "-10^9 <= target <= 10^9",
            "Only one valid answer exists."
        ],
        examples: [
            { input: "2,7,11,15\n9", output: "[0, 1]" },
            { input: "3,2,4\n6", output: "[1, 2]" }
        ]
    },
    "fibonacci-number": {
        parser: "SINGLE_INT",
        methodName: "fib",
        javaSig: "public int fib(int n)",
        pySig: "def fib(self, n: int) -> int:",
        cppSig: "int fib(int n)",
        jsSig: "function fib(n)",
        detailedDescription: "The **Fibonacci numbers**, commonly denoted `F(n)` form a sequence, called the **Fibonacci sequence**, such that each number is the sum of the two preceding ones, starting from `0` and `1`. That is,\n\n`F(0) = 0, F(1) = 1`\n`F(n) = F(n - 1) + F(n - 2), for n > 1.`\n\nGiven `n`, calculate `F(n)`.",
        constraints: [
            "0 <= n <= 30"
        ],
        examples: [
            { input: "2", output: "1" },
            { input: "4", output: "3" }
        ]
    },
    "binary-search": {
        parser: "ARRAY_INT_AND_INT",
        methodName: "search",
        javaSig: "public int search(int[] nums, int target)",
        pySig: "def search(self, nums: List[int], target: int) -> int:",
        cppSig: "int search(vector<int>& nums, int target)",
        jsSig: "function search(nums, target)",
        detailedDescription: "Given an array of integers `nums` which is sorted in ascending order, and an integer `target`, write a function to search `target` in `nums`. If `target` exists, then return its index. Otherwise, return `-1`.\n\nYou must write an algorithm with `O(log n)` runtime complexity.",
        constraints: [
            "1 <= nums.length <= 10^4",
            "-10^4 < nums[i], target < 10^4",
            "All the integers in nums are unique.",
            "nums is sorted in ascending order."
        ],
        examples: [
            { input: "1,2,3,4,5,6,7\n5", output: "4" }
        ]
    },
    "valid-parentheses": {
        parser: "SINGLE_STRING",
        methodName: "isValid",
        javaSig: "public boolean isValid(String s)",
        pySig: "def isValid(self, s: str) -> bool:",
        cppSig: "bool isValid(string s)",
        jsSig: "function isValid(s)",
        detailedDescription: "Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.\n\nAn input string is valid if:\n1. Open brackets must be closed by the same type of brackets.\n2. Open brackets must be closed in the correct order.\n3. Every close bracket has a corresponding open bracket of the same type.",
        constraints: [
            "1 <= s.length <= 10^4",
            "s consists of parentheses only '()[]{}'."
        ],
        examples: [
            { input: "()[]{}", output: "true" },
            { input: "(]", output: "false" }
        ]
    },
    "reverse-linked-list": {
        parser: "LINKED_LIST",
        methodName: "reverseList",
        javaSig: "public ListNode reverseList(ListNode head)",
        pySig: "def reverseList(self, head: ListNode) -> ListNode:",
        cppSig: "ListNode* reverseList(ListNode* head)",
        jsSig: "function reverseList(head)",
        detailedDescription: "Given the `head` of a singly linked list, reverse the list, and return *the reversed list*.",
        constraints: [
            "The number of nodes in the list is the range [0, 5000].",
            "-5000 <= Node.val <= 5000"
        ],
        examples: [
            { input: "1,2,3,4,5", output: "5,4,3,2,1" }
        ]
    },
    "merge-two-sorted-lists": {
        parser: "TWO_LINKED_LISTS",
        methodName: "mergeTwoLists",
        javaSig: "public ListNode mergeTwoLists(ListNode list1, ListNode list2)",
        pySig: "def mergeTwoLists(self, list1: ListNode, list2: ListNode) -> ListNode:",
        cppSig: "ListNode* mergeTwoLists(ListNode* list1, ListNode* list2)",
        jsSig: "function mergeTwoLists(list1, list2)",
        detailedDescription: "You are given the heads of two sorted linked lists `list1` and `list2`.\n\nMerge the two lists into one **sorted** list. The list should be made by splicing together the nodes of the first two lists.\n\nReturn *the head of the merged linked list*.",
        constraints: [
            "The number of nodes in both lists is in the range [0, 50].",
            "-100 <= Node.val <= 100",
            "Both list1 and list2 are sorted in non-decreasing order."
        ],
        examples: [
            { input: "1,2,4\n1,3,4", output: "1,1,2,3,4,4" }
        ]
    },
    "search-in-rotated-sorted-array": {
        parser: "ARRAY_INT_AND_INT",
        methodName: "search",
        javaSig: "public int search(int[] nums, int target)",
        pySig: "def search(self, nums: List[int], target: int) -> int:",
        cppSig: "int search(vector<int>& nums, int target)",
        jsSig: "function search(nums, target)",
        detailedDescription: "There is an integer array `nums` sorted in ascending order (with **distinct** values).\n\nPrior to being passed to your function, `nums` is **possibly rotated** at an unknown pivot index `k` (`1 <= k < nums.length`) such that the resulting array is `[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]` (0-indexed). For example, `[0,1,2,4,5,6,7]` might be rotated at pivot index 3 and become `[4,5,6,7,0,1,2]`.\n\nGiven the array `nums` **after** the possible rotation and an integer `target`, return *the index of* `target` *if it is in* `nums`*, or* `-1` *if it is not in* `nums`.\n\nYou must write an algorithm with `O(log n)` runtime complexity.",
        constraints: [
            "1 <= nums.length <= 5000",
            "-10^4 <= nums[i] <= 10^4",
            "All values of nums are unique.",
            "nums is an ascending array that is possibly rotated.",
            "-10^4 <= target <= 10^4"
        ],
        examples: [
            { input: "4,5,6,7,0,1,2\n0", output: "4" }
        ]
    }
};

const rawTables = {
    "Arrays": `| 1 | Two Sum | Easy | Array me do numbers dhoondo jinka sum target ke barabar ho, unke indices return karo | Amazon, Google, Adobe, Microsoft |
| 2 | Best Time to Buy and Sell Stock | Easy | Ek din khareedo ek din becho, max profit nikalo | Amazon, Bloomberg, Facebook |
| 3 | Maximum Subarray (Kadane's Algo) | Easy | Contiguous subarray jiska sum max ho | Microsoft, LinkedIn, Amazon |
| 4 | Product of Array Except Self | Medium | Har index ke liye baaki sab ka product, bina division ke | Amazon, Facebook, Microsoft |
| 5 | Contains Duplicate | Easy | Array me koi element repeat ho raha hai kya check karo | Amazon |
| 6 | Merge Intervals | Medium | Overlapping intervals ko merge karo | Facebook, Google, Amazon |
| 7 | Insert Interval | Medium | Naya interval insert karke merge karo | Google, LinkedIn |
| 8 | Rotate Array | Medium | Array ko k positions se rotate karo in-place | Microsoft, Amazon |
| 9 | Move Zeroes | Easy | Saare zeroes ko end me shift karo, order maintain karke | Facebook, Amazon |
| 10 | Find Minimum in Rotated Sorted Array | Medium | Rotated sorted array me min element dhoondo | Amazon, Microsoft |
| 11 | Search in Rotated Sorted Array | Medium | Rotated sorted array me binary search se target dhoondo | Facebook, Amazon, Microsoft |
| 12 | 3Sum | Medium | Triplets jinka sum zero ho | Amazon, Facebook, Adobe |
| 13 | 4Sum | Medium | Quadruplets jinka sum target ho | Amazon |
| 14 | Container With Most Water | Medium | Do lines ke beech max water area | Amazon, Google, Bloomberg |
| 15 | Trapping Rain Water | Hard | Bars ke beech trapped rain water calculate karo | Amazon, Google, Goldman Sachs |
| 16 | Next Permutation | Medium | Array ka next lexicographic permutation nikalo | Amazon, Facebook |
| 17 | Set Matrix Zeroes | Medium | Matrix me jahan 0 ho uski poori row/col zero karo | Amazon, Microsoft |
| 18 | Spiral Matrix | Medium | Matrix ko spiral order me traverse karo | Amazon, Microsoft, Adobe |
| 19 | Rotate Image | Medium | Matrix ko 90 degree rotate karo in-place | Amazon, Apple |
| 20 | Merge Sorted Array | Easy | Do sorted arrays ko ek me merge karo in-place | Facebook, Microsoft |
| 21 | Majority Element | Easy | Jo element n/2 se zyada baar aaye woh dhoondo (Boyer-Moore) | Amazon, Zillow |
| 22 | Missing Number | Easy | 0 to n range me missing number dhoondo | Amazon, Microsoft |
| 23 | Find All Duplicates in an Array | Medium | Array me saare duplicates dhoondo O(n) me | Amazon |
| 24 | Subarray Sum Equals K | Medium | Subarrays ginenge jinka sum k ho | Facebook, Amazon |
| 25 | Maximum Product Subarray | Medium | Contiguous subarray jiska product max ho | Amazon, LinkedIn |
| 26 | Sort Colors (Dutch National Flag) | Medium | 0,1,2 ko sort karo single pass me | Amazon, Microsoft, Facebook |
| 27 | Gas Station | Medium | Circular route complete karne ka starting point dhoondo | Amazon, Zenefits |
| 28 | Jump Game | Medium | Kya array ke last index tak pahunch sakte hain | Amazon, Google |
| 29 | Jump Game II | Medium | Minimum jumps lagakar last index tak pahuncho | Amazon |
| 30 | Merge k Sorted Arrays | Hard | k sorted arrays ko ek sorted array me merge karo | Google, Amazon, Microsoft |
| 31 | Pascal's Triangle | Easy | Pascal's triangle generate karo n rows tak | Amazon |
| 32 | Two Sum II (Sorted Array) | Easy | Sorted array me two-pointer se pair dhoondo | Amazon |
| 33 | Longest Consecutive Sequence | Medium | Consecutive elements ka longest sequence dhoondo | Google, Facebook, Amazon |
| 34 | Find Peak Element | Medium | Array me kisi bhi peak element ka index nikalo | Amazon, Facebook |
| 35 | Kth Largest Element in an Array | Medium | k-th largest element dhoondo (Quickselect/Heap) | Amazon, Facebook, Microsoft |`,

    "Strings": `| 36 | Valid Anagram | Easy | Do strings anagram hain ya nahi check karo | Amazon, Uber |
| 37 | Valid Palindrome | Easy | String palindrome hai ya nahi (alphanumeric only) | Facebook, Microsoft |
| 38 | Longest Substring Without Repeating Characters | Medium | Bina repeat characters ke longest substring | Amazon, Bloomberg, Adobe |
| 39 | Longest Palindromic Substring | Medium | String me sabse lamba palindromic substring | Amazon, Microsoft, Facebook |
| 40 | Palindromic Substrings | Medium | Total palindromic substrings count karo | Facebook |
| 41 | Group Anagrams | Medium | Anagrams ko groups me collect karo | Amazon, Uber, Facebook |
| 42 | Valid Parentheses | Easy | Brackets valid hain ya nahi check karo (stack) | Amazon, Microsoft, Facebook |
| 43 | Implement strStr() | Easy | Needle ko haystack me dhoondo (substring search) | Amazon |
| 44 | String to Integer (atoi) | Medium | String ko integer me convert karo edge cases ke saath | Amazon, Microsoft |
| 45 | Longest Common Prefix | Easy | Strings array ka common prefix nikalo | Amazon, Google |
| 46 | Minimum Window Substring | Hard | Chhota se chhota window jisme saare target chars hain | Facebook, Amazon, Airbnb |
| 47 | Find All Anagrams in a String | Medium | String me saare anagram substrings ke start indices | Amazon |
| 48 | Longest Repeating Character Replacement | Medium | k replacements ke baad longest repeating char substring | Google |
| 49 | Word Break | Medium | String ko dictionary words me tod sakte hain kya (DP) | Amazon, Facebook, Bloomberg |
| 50 | Encode and Decode Strings | Medium | Strings list ko encode/decode karo delimiter safe tareeke se | Facebook, Google |
| 51 | Reverse Words in a String | Medium | String ke words ka order reverse karo | Amazon, Microsoft |
| 52 | Zigzag Conversion | Medium | String ko zigzag pattern me arrange karo | Amazon |
| 53 | Integer to Roman | Medium | Integer ko roman numeral me convert karo | Amazon, Facebook |
| 54 | Roman to Integer | Easy | Roman numeral ko integer me convert karo | Amazon, Microsoft |
| 55 | Multiply Strings | Medium | Do bade number strings ka multiplication (bina int overflow) | Amazon, Facebook |
| 56 | Compare Version Numbers | Medium | Do version strings compare karo | Facebook |
| 57 | Text Justification | Hard | Words ko justified paragraph format me arrange karo | Google, Airbnb |
| 58 | Basic Calculator | Hard | String expression evaluate karo (+,-,parentheses) | Google, Facebook |
| 59 | Palindrome Partitioning | Medium | String ko palindrome substrings me partition karo (backtracking) | Amazon, Facebook |
| 60 | Isomorphic Strings | Easy | Do strings isomorphic hain ya nahi check karo | Amazon |
| 61 | Word Pattern | Easy | String pattern follow karti hai ya nahi | Uber |
| 62 | Ransom Note | Easy | Magazine ke letters se ransom note ban sakta hai kya | Amazon |
| 63 | String Compression | Medium | Repeated characters ko compress karo in-place | Amazon, Microsoft |
| 64 | Decode Ways | Medium | Encoded digit string ko decode karne ke tareeke ginо (DP) | Facebook, Amazon |
| 65 | Regular Expression Matching | Hard | '.' aur '*' support karne wala regex matching | Google, Facebook, Uber |
| 66 | Wildcard Matching | Hard | '?' aur '*' support karne wala pattern matching | Google, Facebook |
| 67 | Longest Palindromic Subsequence | Medium | Sabse lamba palindromic subsequence (DP) | Amazon, Google |
| 68 | Group Shifted Strings | Medium | Strings ko shift pattern ke basis pe group karo | Google, Facebook |`,

    "Two Pointers & Sliding Window": `| 69 | Remove Duplicates from Sorted Array | Easy | Sorted array se duplicates in-place remove karo | Microsoft, Facebook |
| 70 | Sliding Window Maximum | Hard | Har window ka maximum element (deque approach) | Amazon, Google, Facebook |
| 71 | Minimum Size Subarray Sum | Medium | Target sum se bada chhota sa chhota subarray | Amazon, Facebook |
| 72 | Fruit Into Baskets | Medium | Do types ka max length subarray (sliding window) | Google |
| 73 | Longest Substring with At Most K Distinct Characters | Medium | Max k distinct characters wala longest substring | Google, Facebook |
| 74 | Backspace String Compare | Easy | Backspace '#' ke saath do strings compare karo | Google, Facebook |
| 75 | Squares of a Sorted Array | Easy | Sorted array ke squares sorted order me return karo | Google |
| 76 | 3Sum Closest | Medium | Target ke closest triplet sum dhoondo | Amazon, Facebook |
| 77 | Boats to Save People | Medium | Minimum boats chahiye people limit ke saath | Amazon |
| 78 | Max Consecutive Ones III | Medium | k zeroes flip karke max consecutive ones | Google |`,

    "Linked List": `| 79 | Reverse Linked List | Easy | Poori linked list reverse karo (iterative/recursive) | Amazon, Microsoft, Facebook |
| 80 | Merge Two Sorted Lists | Easy | Do sorted linked lists merge karo | Amazon, Microsoft, Apple |
| 81 | Linked List Cycle | Easy | List me cycle hai ya nahi (Floyd's algo) | Amazon, Microsoft |
| 82 | Linked List Cycle II | Medium | Cycle ka starting node dhoondo | Amazon |
| 83 | Remove Nth Node From End of List | Medium | End se nth node remove karo, single pass | Amazon, Facebook, Microsoft |
| 84 | Reorder List | Medium | List ko L0→Ln→L1→Ln-1... order me reorder karo | Facebook, Amazon |
| 85 | Add Two Numbers | Medium | Do numbers ko linked list form me add karo | Amazon, Microsoft, Adobe |
| 86 | Copy List with Random Pointer | Medium | Random pointer wali list ka deep copy banao | Amazon, Microsoft |
| 87 | Merge k Sorted Lists | Hard | k sorted linked lists ko merge karo (heap) | Amazon, Google, Facebook |
| 88 | Palindrome Linked List | Easy | Linked list palindrome hai ya nahi check karo | Amazon, Facebook |
| 89 | Intersection of Two Linked Lists | Easy | Do lists ka intersection node dhoondo | Amazon, Microsoft |
| 90 | Flatten a Multilevel Doubly Linked List | Medium | Multilevel doubly linked list ko flatten karo | Facebook |
| 91 | Rotate List | Medium | Linked list ko k positions rotate karo | Microsoft, Amazon |
| 92 | Swap Nodes in Pairs | Medium | Adjacent nodes swap karo pairs me | Amazon, Microsoft |
| 93 | Reverse Nodes in k-Group | Hard | Har k group me linked list reverse karo | Amazon, Microsoft, Facebook |
| 94 | LRU Cache | Medium | LRU cache design karo (linked list + hashmap) | Amazon, Microsoft, Facebook, Bloomberg |
| 95 | LFU Cache | Hard | LFU cache design karo | Google, Amazon |
| 96 | Odd Even Linked List | Medium | Odd aur even indexed nodes ko group karo | Amazon |
| 97 | Design Linked List | Medium | Singly/doubly linked list from scratch design karo | Amazon |
| 98 | Sort List | Medium | Linked list ko merge sort se sort karo | Amazon, Microsoft |`,

    "Stacks": `| 99 | Min Stack | Medium | Stack design karo jo O(1) me min return kare | Amazon, Google, Bloomberg |
| 100 | Evaluate Reverse Polish Notation | Medium | Postfix expression evaluate karo | Amazon, LinkedIn |
| 101 | Daily Temperatures | Medium | Har din ke liye next warmer day ka gap | Amazon, Facebook |
| 102 | Next Greater Element I & II | Easy/Medium | Har element ka next greater element dhoondo | Amazon, Bloomberg |
| 103 | Largest Rectangle in Histogram | Hard | Histogram me largest rectangle area | Amazon, Google, Zenefits |
| 104 | Maximal Rectangle | Hard | Binary matrix me largest rectangle of 1s | Google, Facebook |
| 105 | Basic Calculator II | Medium | +,-,*,/ wala expression evaluate karo | Google, Facebook |
| 106 | Remove Duplicate Letters | Medium | Duplicate letters remove karke smallest lexicographic string | Google, Amazon |
| 107 | Decode String | Medium | k[encoded_string] pattern decode karo | Amazon, Google, Facebook |
| 108 | Asteroid Collision | Medium | Asteroids collision simulate karo stack se | Amazon, Google |
| 109 | Simplify Path | Medium | Unix style path ko simplify karo | Facebook, Amazon |
| 110 | Trapping Rain Water (Stack approach) | Hard | Stack use karke trapped water nikalo | Amazon |
| 111 | Implement Stack using Queues | Easy | Queue se stack implement karo | Amazon, Microsoft |
| 112 | Implement Queue using Stacks | Easy | Stack se queue implement karo | Amazon, Microsoft |`,

    "Queues": `| 113 | Design Circular Queue | Medium | Circular queue from scratch design karo | Google, Amazon |
| 114 | Number of Recent Calls | Easy | Given time window me calls count karo (queue) | Google |
| 115 | Sliding Window Maximum (Deque) | Hard | Deque based sliding window max | Amazon, Google |
| 116 | Rotting Oranges | Medium | Multi-source BFS se rotting time nikalo | Amazon, Google |
| 117 | Task Scheduler | Medium | CPU tasks ko cooldown ke saath schedule karo | Amazon, Facebook |
| 118 | Design Hit Counter | Medium | Last 5 min ke hits count karne wala counter design karo | Google, Amazon |
| 119 | Moving Average from Data Stream | Easy | Data stream se moving average nikalo | Google, Amazon |`,

    "HashMap & HashSet": `| 120 | Two Sum (HashMap approach) | Easy | O(n) solution hashmap se | Amazon, Google |
| 121 | Design HashMap | Easy | HashMap from scratch design karo | Amazon |
| 122 | Design HashSet | Easy | HashSet from scratch design karo | Amazon |
| 123 | Subarray Sum Equals K | Medium | Prefix sum + hashmap se subarrays count | Facebook, Amazon |
| 124 | Longest Consecutive Sequence | Medium | HashSet se O(n) me longest consecutive seq | Google, Facebook |
| 125 | Group Anagrams | Medium | Hashmap se anagrams group karo | Amazon, Uber |
| 126 | Copy List with Random Pointer | Medium | Hashmap based deep copy approach | Amazon |
| 127 | Insert Delete GetRandom O(1) | Medium | Data structure jo O(1) insert/delete/random support kare | Amazon, Uber |
| 128 | LRU Cache | Medium | Hashmap + doubly linked list combo | Amazon, Microsoft |
| 129 | First Unique Character in a String | Easy | String ka pehla unique character dhoondo | Amazon, Microsoft |
| 130 | Isomorphic Strings | Easy | Two-way hashmap mapping check | Amazon |
| 131 | Contains Duplicate II | Easy | Duplicate within k distance check karo | Amazon |
| 132 | Top K Frequent Elements | Medium | Sabse zyada frequent k elements (bucket sort/heap) | Amazon, Facebook, Yelp |
| 133 | Word Pattern | Easy | Pattern aur string ka bijective mapping check | Uber |
| 134 | Subarray Sums Divisible by K | Medium | Modulo + hashmap se subarrays count | Amazon |
| 135 | 4Sum II | Medium | Chaar arrays se tuples count karo jinka sum 0 ho | Facebook, Airbnb |`,

    "Binary Search": `| 136 | Binary Search | Easy | Classic sorted array binary search | Amazon, Google |
| 137 | Search a 2D Matrix | Medium | Sorted 2D matrix me binary search | Amazon, Microsoft |
| 138 | Search a 2D Matrix II | Medium | Row-col sorted matrix me search (staircase) | Amazon, Microsoft |
| 139 | Find First and Last Position of Element | Medium | Sorted array me target ka range dhoondo | Amazon, Facebook |
| 140 | Search Insert Position | Easy | Target insert karne ki correct position | Amazon |
| 141 | Koko Eating Bananas | Medium | Minimum eating speed jisse banana khatam ho jaaye | Amazon, Google |
| 142 | Capacity To Ship Packages Within D Days | Medium | Binary search on answer pattern | Amazon, Google |
| 143 | Split Array Largest Sum | Hard | Array ko m subarrays me split karo min possible max sum | Google, Amazon |
| 144 | Median of Two Sorted Arrays | Hard | Do sorted arrays ka median O(log(min(m,n))) me | Amazon, Google, Microsoft |
| 145 | Find Peak Element | Medium | Peak element binary search se dhoondo | Amazon, Facebook |
| 146 | Sqrt(x) | Easy | Integer square root binary search se | Amazon, Facebook |
| 147 | Find Minimum in Rotated Sorted Array II | Hard | Duplicates ke saath rotated array me min | Amazon |
| 148 | Aggressive Cows / Allocate Books (Binary search on answer) | Medium | Classic binary-search-on-answer pattern problem | Amazon, Google |
| 149 | Kth Smallest Element in a Sorted Matrix | Medium | Sorted matrix me kth smallest (binary search / heap) | Amazon, Google |`,

    "Binary Trees": `| 150 | Maximum Depth of Binary Tree | Easy | Tree ki max depth nikalo | Amazon, Google |
| 151 | Same Tree | Easy | Do trees identical hain ya nahi check karo | Amazon, Bloomberg |
| 152 | Invert Binary Tree | Easy | Tree ko mirror karo | Google, Amazon |
| 153 | Binary Tree Maximum Path Sum | Hard | Tree me kisi bhi path ka max sum | Amazon, Microsoft, Facebook |
| 154 | Binary Tree Level Order Traversal | Medium | BFS level-wise traversal | Amazon, Microsoft, LinkedIn |
| 155 | Serialize and Deserialize Binary Tree | Hard | Tree ko string me convert karke wapas rebuild karo | Amazon, Google, Microsoft |
| 156 | Subtree of Another Tree | Easy | Ek tree dusre ka subtree hai kya check karo | Amazon, Facebook |
| 157 | Construct Binary Tree from Preorder and Inorder | Medium | Traversals se tree reconstruct karo | Amazon, Microsoft, Facebook |
| 158 | Validate Binary Search Tree | Medium | Tree valid BST hai ya nahi check karo | Amazon, Microsoft, Facebook |
| 159 | Kth Smallest Element in a BST | Medium | BST me kth smallest element (inorder traversal) | Amazon, Google |
| 160 | Lowest Common Ancestor of a Binary Tree | Medium | Do nodes ka LCA nikalo | Amazon, Facebook, LinkedIn |
| 161 | Lowest Common Ancestor of a BST | Easy | BST property use karke LCA nikalo | Amazon, Facebook |
| 162 | Binary Tree Right Side View | Medium | Tree ka right side se dikhne wala view | Amazon, Facebook |
| 163 | Count Good Nodes in Binary Tree | Medium | Nodes ginо jo apne path ke max ke barabar ya bade hain | Amazon |
| 164 | Binary Tree Zigzag Level Order Traversal | Medium | Zigzag pattern me level order traversal | Amazon, Microsoft |
| 165 | Path Sum | Easy | Root to leaf path jistar sum target ho | Amazon |
| 166 | Path Sum II | Medium | Saare root-to-leaf paths jinka sum target ho | Amazon, Facebook |
| 167 | Path Sum III | Medium | Kisi bhi node se shuru hone wale paths ka count | Facebook, Amazon |
| 168 | Diameter of Binary Tree | Easy | Tree ka longest path (diameter) nikalo | Facebook, Amazon |
| 169 | Balanced Binary Tree | Easy | Tree height-balanced hai ya nahi check karo | Amazon, Facebook |
| 170 | Flatten Binary Tree to Linked List | Medium | Tree ko in-place linked list me flatten karo | Amazon, Microsoft |
| 171 | Populating Next Right Pointers | Medium | Perfect binary tree me next pointers connect karo | Amazon, Facebook, Bloomberg |
| 172 | Convert Sorted Array to Binary Search Tree | Easy | Sorted array se height-balanced BST banao | Amazon, Microsoft |
| 173 | Trim a Binary Search Tree | Medium | BST ko given range ke andar trim karo | Google |
| 174 | Delete Node in a BST | Medium | BST se node delete karo, structure maintain karo | Amazon, Microsoft, Facebook |
| 175 | Insert into a Binary Search Tree | Medium | BST me naya node insert karo | Amazon |
| 176 | Recover Binary Search Tree | Hard | Do swapped nodes wale BST ko fix karo | Amazon, Microsoft |
| 177 | Vertical Order Traversal of a Binary Tree | Hard | Tree ka vertical column-wise traversal | Amazon, Facebook |
| 178 | Boundary of Binary Tree | Medium | Tree ka boundary traversal | Amazon, Microsoft |
| 179 | Sum Root to Leaf Numbers | Medium | Root-to-leaf paths ke numbers ka sum | Amazon, Microsoft |
| 180 | Binary Search Tree Iterator | Medium | BST par O(h) space iterator design karo | Amazon, Facebook, Google |
| 181 | Unique Binary Search Trees | Medium | n nodes se banne wale unique BST count karo (Catalan) | Amazon |
| 182 | All Nodes Distance K in Binary Tree | Medium | Target node se distance k par saare nodes | Amazon, Facebook |
| 183 | Maximum Width of Binary Tree | Medium | Tree ki max width nikalo level-wise | Amazon, Facebook |
| 184 | Symmetric Tree | Easy | Tree apne aap ka mirror hai ya nahi | Amazon, Bloomberg |
| 185 | Cousins in Binary Tree | Easy | Do nodes cousins hain ya nahi check karo | Amazon, Facebook |`,

    "Trie": `| 186 | Implement Trie (Prefix Tree) | Medium | Trie data structure from scratch banao | Amazon, Google, Microsoft |
| 187 | Design Add and Search Words Data Structure | Medium | Wildcard '.' support karne wala word search | Facebook, Google |
| 188 | Word Search II | Hard | Board me multiple words trie + backtracking se dhoondo | Amazon, Airbnb |
| 189 | Longest Word in Dictionary | Easy | Trie se sabse lamba buildable word dhoondo | Google |
| 190 | Replace Words | Medium | Trie use karke words ko root se replace karo | Uber |
| 191 | Maximum XOR of Two Numbers in an Array | Medium | Binary trie se max XOR pair nikalo | Google, Amazon |
| 192 | Palindrome Pairs | Hard | Trie/hashmap se palindrome pairs dhoondo | Google, Airbnb |`,

    "Graphs": `| 193 | Number of Islands | Medium | Grid me islands count karo (DFS/BFS) | Amazon, Google, Facebook, Microsoft |
| 194 | Clone Graph | Medium | Graph ka deep copy banao (DFS/BFS) | Amazon, Facebook, Google |
| 195 | Course Schedule | Medium | Cycle detection topological sort se (prerequisites) | Amazon, Facebook, Google |
| 196 | Course Schedule II | Medium | Valid course order return karo (topo sort) | Amazon, Facebook |
| 197 | Pacific Atlantic Water Flow | Medium | Dono oceans tak flow kar sakne wali cells | Amazon, Google |
| 198 | Number of Connected Components in an Undirected Graph | Medium | Union-Find se connected components count karo | Google, Amazon |
| 199 | Graph Valid Tree | Medium | Graph valid tree hai ya nahi check karo | Google, Facebook |
| 200 | Word Ladder | Hard | BFS se shortest transformation sequence | Amazon, Facebook, LinkedIn |
| 201 | Word Ladder II | Hard | Saare shortest transformation sequences | Amazon, Facebook |
| 202 | Alien Dictionary | Hard | Alien language ka letter order (topo sort) | Google, Airbnb, Facebook |
| 203 | Reconstruct Itinerary | Hard | Eulerian path se flight itinerary banao | Amazon, Google |
| 204 | Redundant Connection | Medium | Union-Find se extra edge dhoondo jo cycle banata hai | Amazon, Google |
| 205 | Network Delay Time | Medium | Dijkstra se signal travel time nikalo | Amazon, Google |
| 206 | Cheapest Flights Within K Stops | Medium | Bellman-Ford variant se cheapest flight | Amazon, Google |
| 207 | Dijkstra's Shortest Path Algorithm | Medium | Weighted graph me shortest path | Amazon, Google, Microsoft |
| 208 | Bellman-Ford Algorithm | Medium | Negative weights ke saath shortest path | Google, Amazon |
| 209 | Floyd-Warshall Algorithm | Hard | All-pairs shortest path | Google, Amazon |
| 210 | Minimum Spanning Tree (Kruskal's) | Medium | Union-Find se MST banao | Google, Amazon |
| 211 | Minimum Spanning Tree (Prim's) | Medium | Priority queue se MST banao | Google, Amazon |
| 212 | Rotting Oranges | Medium | Multi-source BFS se time nikalo | Amazon, Google |
| 213 | Surrounded Regions | Medium | Boundary se connected 'O' ko chhod ke baaki flip karo | Amazon, Facebook |
| 214 | Is Graph Bipartite? | Medium | Graph ko 2-color karke bipartite check karo | Amazon, Google |
| 215 | Accounts Merge | Medium | Union-Find se common emails wale accounts merge karo | Amazon, Facebook |
| 216 | Evaluate Division | Medium | Graph + DFS se equations evaluate karo | Google, Amazon |
| 217 | Number of Provinces | Medium | Union-Find se friend circles/provinces count karo | Amazon |
| 218 | Shortest Path in Binary Matrix | Medium | BFS se 0/1 grid me shortest path | Amazon, Facebook |
| 219 | All Paths From Source to Target | Medium | DAG me source se target tak saare paths (DFS) | Amazon |
| 220 | Critical Connections in a Network | Hard | Tarjan's algo se bridges dhoondo | Amazon, Google |
| 221 | Strongly Connected Components (Kosaraju/Tarjan) | Hard | Directed graph ke SCC dhoondo | Google, Amazon |
| 222 | Bus Routes | Hard | BFS se minimum buses lekar destination pahuncho | Google, Amazon |
| 223 | Swim in Rising Water | Hard | Binary search + BFS/Union-Find se path dhoondo | Google |
| 224 | Walls and Gates | Medium | Multi-source BFS se nearest gate distance | Google, Facebook |
| 225 | Max Area of Island | Medium | Grid me sabse bade island ka area | Amazon, Google |
| 226 | Flood Fill | Easy | Given pixel se DFS/BFS flood fill karo | Amazon, Microsoft |`,

    "Heaps & Priority Queue": `| 227 | Kth Largest Element in an Array | Medium | Heap ya quickselect se kth largest | Amazon, Facebook |
| 228 | Kth Largest Element in a Stream | Easy | Stream me continuously kth largest maintain karo | Amazon |
| 229 | Top K Frequent Elements | Medium | Heap/bucket sort se top k frequent | Amazon, Facebook, Yelp |
| 230 | Merge k Sorted Lists | Hard | Min-heap se k sorted lists merge karo | Amazon, Google, Facebook |
| 231 | Find Median from Data Stream | Hard | Two heaps se streaming median maintain karo | Amazon, Google, Facebook |
| 232 | Task Scheduler | Medium | Max-heap se CPU tasks schedule karo | Amazon, Facebook |
| 233 | K Closest Points to Origin | Medium | Origin ke closest k points heap se dhoondo | Amazon, Facebook |
| 234 | Reorganize String | Medium | Adjacent same characters na ho aise arrange karo | Amazon, Facebook |
| 235 | Ugly Number II | Medium | nth ugly number heap/DP se nikalo | Amazon, Google |
| 236 | Meeting Rooms II | Medium | Minimum meeting rooms chahiye (heap) | Amazon, Facebook, Google |
| 237 | Smallest Range Covering Elements from K Lists | Hard | Heap se smallest range dhoondo jisme har list se ek element ho | Google, Amazon |
| 238 | Sliding Window Median | Hard | Two heaps se sliding window median | Google, Amazon |
| 239 | Design Twitter | Medium | Heap + hashmap se mini Twitter feed design karo | Amazon, Twitter |`,

    "Recursion & Backtracking": `| 240 | Subsets | Medium | Array ke saare possible subsets generate karo | Amazon, Facebook |
| 241 | Subsets II | Medium | Duplicates ke saath unique subsets generate karo | Amazon |
| 242 | Permutations | Medium | Array ke saare permutations generate karo | Amazon, Microsoft |
| 243 | Permutations II | Medium | Duplicates ke saath unique permutations | Amazon |
| 244 | Combination Sum | Medium | Target sum banane wale combinations (repeat allowed) | Amazon, Uber |
| 245 | Combination Sum II | Medium | Target sum wale combinations bina repeat ke | Amazon |
| 246 | Combinations | Medium | n me se k elements ke combinations | Amazon |
| 247 | N-Queens | Hard | N-Queens board arrangement solve karo | Amazon, Microsoft, Google |
| 248 | N-Queens II | Hard | N-Queens solutions ka sirf count nikalo | Amazon |
| 249 | Word Search | Medium | Grid me DFS+backtracking se word dhoondo | Amazon, Microsoft, Facebook |
| 250 | Palindrome Partitioning | Medium | String ko palindrome parts me partition karo | Amazon, Facebook |
| 251 | Generate Parentheses | Medium | n pairs ke valid parentheses combinations | Amazon, Google, Facebook |
| 252 | Letter Combinations of a Phone Number | Medium | Phone keypad se letter combinations generate karo | Amazon, Google, Facebook |
| 253 | Sudoku Solver | Hard | Backtracking se Sudoku solve karo | Amazon, Google |
| 254 | Restore IP Addresses | Medium | String se valid IP addresses banao | Amazon |
| 255 | Combination Sum III | Medium | k numbers ka combination jinka sum n ho (1-9) | Amazon |
| 256 | Matchsticks to Square | Medium | Matchsticks se square banao (backtracking) | Google |
| 257 | Partition to K Equal Sum Subsets | Medium | Array ko k equal sum subsets me partition karo | Amazon, Google |`,

    "Greedy": `| 258 | Jump Game | Medium | Greedy se last index tak pahunch sakte hain kya | Amazon, Google |
| 259 | Gas Station | Medium | Circular tour complete karne ka starting point | Amazon |
| 260 | Candy | Hard | Minimum candies distribute karo rating rule ke saath | Google, Amazon |
| 261 | Partition Labels | Medium | String ko max partitions me todo | Amazon, Facebook |
| 262 | Non-overlapping Intervals | Medium | Minimum intervals remove karo non-overlap ke liye | Amazon, Facebook |
| 263 | Meeting Rooms | Easy | Kya person saari meetings attend kar sakta hai | Amazon, Facebook |
| 264 | Merge Intervals | Medium | Greedy se overlapping intervals merge karo | Amazon, Facebook, Google |
| 265 | Minimum Number of Arrows to Burst Balloons | Medium | Min arrows se saare balloons burst karo | Amazon |
| 266 | Best Time to Buy and Sell Stock II | Medium | Multiple transactions allowed, max profit | Amazon |
| 267 | Two City Scheduling | Medium | Greedy se cost minimize karke 2 cities me schedule | Amazon |
| 268 | Assign Cookies | Easy | Greedy se max children ko cookies assign karo | Amazon |
| 269 | Queue Reconstruction by Height | Medium | Height aur count ke basis pe queue reconstruct karo | Amazon, Google |
| 270 | Boats to Save People | Medium | Min boats greedy two-pointer se | Amazon |`,

    "Dynamic Programming": `| 271 | Climbing Stairs | Easy | n stairs chadhne ke tareeke (fibonacci pattern) | Amazon, Adobe |
| 272 | House Robber | Medium | Adjacent houses rob kiye bina max amount | Amazon, LinkedIn |
| 273 | House Robber II | Medium | Circular arrangement wala house robber | Amazon |
| 274 | Decode Ways | Medium | Encoded string decode karne ke tareeke | Facebook, Amazon |
| 275 | Word Break | Medium | String dictionary words me break ho sakti hai kya | Amazon, Facebook |
| 276 | Longest Increasing Subsequence | Medium | LIS length nikalo (DP + binary search) | Amazon, Microsoft, Google |
| 277 | Maximum Product Subarray | Medium | Max product wala contiguous subarray | Amazon, LinkedIn |
| 278 | Coin Change | Medium | Minimum coins se target amount banao | Amazon, Google, Uber |
| 279 | Coin Change II | Medium | Target amount banane ke total combinations | Amazon |
| 280 | Perfect Squares | Medium | n ko perfect squares ke sum me todne ka min count | Amazon, Google |
| 281 | Fibonacci Number | Easy | nth fibonacci number DP se | Amazon |
| 282 | Min Cost Climbing Stairs | Easy | Min cost se top tak pahuncho | Amazon |
| 283 | Maximum Sum Circular Subarray | Medium | Circular array ka max sum subarray | Google, Amazon |
| 284 | Delete and Earn | Medium | House robber pattern based DP | Amazon |
| 285 | Longest Arithmetic Subsequence | Medium | Longest arithmetic progression subsequence | Google, Amazon |
| 286 | Unique Paths | Medium | Grid me top-left se bottom-right tak unique paths | Amazon, Microsoft, Google |
| 287 | Unique Paths II | Medium | Obstacles ke saath unique paths | Amazon |
| 288 | Minimum Path Sum | Medium | Grid me min sum wala path | Amazon, Microsoft |
| 289 | Longest Common Subsequence | Medium | Do strings ka LCS nikalo | Amazon, Microsoft, Google |
| 290 | Edit Distance | Hard | Min operations se string1 ko string2 banao | Amazon, Google, Microsoft |
| 291 | Longest Palindromic Subsequence | Medium | Longest palindromic subsequence 2D DP se | Amazon, Google |
| 292 | Distinct Subsequences | Hard | s me t kitni baar subsequence ban sakti hai | Amazon, Google |
| 293 | Interleaving String | Medium | s3, s1 aur s2 ka interleaving hai kya | Amazon, Google |
| 294 | Maximal Square | Medium | Binary matrix me largest square of 1s | Amazon, Facebook |
| 295 | Regular Expression Matching | Hard | 2D DP se regex matching | Google, Facebook |
| 296 | Wildcard Matching | Hard | 2D DP se wildcard matching | Google, Facebook |
| 297 | Target Sum | Medium | +/- signs assign karke target sum banao | Amazon, Facebook |
| 298 | Partition Equal Subset Sum | Medium | Array ko 2 equal sum subsets me todo (0/1 knapsack) | Amazon, Facebook |
| 299 | Ones and Zeroes | Medium | m zeroes aur n ones se max strings (2D knapsack) | Google |
| 300 | Burst Balloons | Hard | Balloons burst karke max coins (interval DP) | Amazon, Google, LinkedIn |
| 301 | Stone Game | Medium | Game theory based DP problem | Google, Amazon |
| 302 | Best Time to Buy and Sell Stock III | Hard | Max 2 transactions allowed, max profit | Amazon |
| 303 | Best Time to Buy and Sell Stock IV | Hard | Max k transactions allowed, max profit | Amazon, Google |
| 304 | Best Time to Buy/Sell Stock with Cooldown | Medium | Cooldown period ke saath max profit | Amazon, Google |
| 305 | Best Time to Buy/Sell Stock with Transaction Fee | Medium | Transaction fee ke saath max profit | Amazon |
| 306 | Knapsack Problem (0/1 Knapsack) | Medium | Classic 0/1 knapsack DP | Amazon, Google, Microsoft |
| 307 | Egg Drop Puzzle | Hard | Min attempts se critical floor dhoondo | Amazon, Microsoft, Google |
| 308 | Palindrome Partitioning II | Hard | Min cuts se string ko palindromes me todo | Amazon, Google |
| 309 | Minimum Insertion Steps to Make a String Palindrome | Hard | Min insertions se string palindrome banao | Google |
| 310 | Count Different Palindromic Subsequences | Hard | Distinct palindromic subsequences count karo | Google |`,

    "Bit Manipulation": `| 311 | Single Number | Easy | XOR se woh number dhoondo jo ek baar aaya | Amazon, Palantir |
| 312 | Single Number II | Medium | Woh number jo 2 baar nahi 3 baar aaye baaki sab | Amazon |
| 313 | Single Number III | Medium | Do unique numbers dhoondo jab baaki sab twice aaye | Amazon |
| 314 | Number of 1 Bits | Easy | Integer me set bits count karo | Amazon, Apple |
| 315 | Counting Bits | Easy | 0 to n tak har number ke set bits count karo | Amazon, Facebook |
| 316 | Reverse Bits | Easy | 32-bit integer ke bits reverse karo | Amazon, Apple |
| 317 | Missing Number | Easy | XOR se missing number dhoondo | Amazon, Microsoft |
| 318 | Sum of Two Integers | Medium | Bina +/- operator use kiye do numbers add karo | Amazon, Facebook |
| 319 | Bitwise AND of Numbers Range | Medium | Range ke saare numbers ka bitwise AND | Amazon |
| 320 | Power of Two | Easy | Number power of 2 hai ya nahi (bit trick) | Amazon, Google |
| 321 | Maximum XOR of Two Numbers in an Array | Medium | Trie/bit manipulation se max XOR pair | Google, Amazon |
| 322 | Gray Code | Medium | n-bit Gray code sequence generate karo | Amazon |
| 323 | UTF-8 Validation | Medium | Bit patterns se valid UTF-8 encoding check karo | Facebook |
| 324 | Find the Difference | Easy | XOR se added character dhoondo | Amazon |`,

    "Math & Geometry": `| 325 | Reverse Integer | Medium | Integer reverse karo overflow handle karke | Amazon, Apple |
| 326 | Palindrome Number | Easy | Number palindrome hai ya nahi bina string ke | Amazon |
| 327 | Pow(x, n) | Medium | Fast exponentiation se x^n nikalo | Facebook, LinkedIn |
| 328 | Sqrt(x) | Easy | Integer square root nikalo | Amazon, Facebook |
| 329 | Divide Two Integers | Medium | Bina */÷ operator ke division karo | Amazon, Facebook |
| 330 | Excel Sheet Column Number | Easy | Column title ko number me convert karo | Amazon, Facebook |
| 331 | Happy Number | Easy | Number happy hai ya nahi check karo (cycle detection) | Amazon |
| 332 | Factorial Trailing Zeroes | Medium | n! me trailing zeroes count karo | Amazon |
| 333 | Rotate Image | Medium | Matrix ko 90 degree in-place rotate karo | Amazon, Apple |
| 334 | Spiral Matrix II | Medium | Spiral order me n×n matrix fill karo | Amazon, Microsoft |
| 335 | Set Matrix Zeroes | Medium | O(1) space me matrix zeroes set karo | Amazon, Microsoft |
| 336 | Valid Sudoku | Medium | Sudoku board valid hai ya nahi check karo | Amazon, Uber |
| 337 | Game of Life | Medium | Conway's Game of Life simulate karo in-place | Amazon, Dropbox |
| 338 | Random Pick with Weight | Medium | Weighted random index pick karo | Amazon, Google |
| 339 | Max Points on a Line | Hard | Kisi bhi line par max points count karo | Amazon, LinkedIn |
| 340 | Basic Calculator | Hard | Math expression parse aur evaluate karo | Google |
| 341 | Number of Digit One | Hard | 1 se n tak digit '1' ka total count | Google |
| 342 | Integer to English Words | Hard | Number ko English words me convert karo | Amazon, Facebook, Microsoft |
| 343 | Fraction to Recurring Decimal | Medium | Fraction ko decimal string me convert karo (repeating handle) | Amazon, Facebook |`,

    "Design & Simulation": `| 344 | LRU Cache | Medium | Least Recently Used cache design karo | Amazon, Microsoft, Bloomberg |
| 345 | LFU Cache | Hard | Least Frequently Used cache design karo | Google, Amazon |
| 346 | Design Twitter | Medium | Mini Twitter feed system design karo | Amazon, Twitter |
| 347 | Design Tic-Tac-Toe | Medium | Optimized Tic-Tac-Toe game design karo | Amazon, Facebook |
| 348 | Design Snake Game | Medium | Snake game logic design karo | Amazon, Facebook |
| 349 | Insert Delete GetRandom O(1) | Medium | O(1) me insert/delete/random support data structure | Amazon, Uber |
| 350 | Design Underground System | Medium | Metro travel time tracking system design karo | Amazon |
| 351 | Design File System | Medium | Trie based file system design karo | Google |
| 352 | Design Browser History | Medium | Browser back/forward history design karo | Amazon |
| 353 | Time Based Key-Value Store | Medium | Timestamp based key-value store design karo (binary search) | Amazon, Google |
| 354 | Design Search Autocomplete System | Hard | Trie + heap se autocomplete system design karo | Google, Amazon |
| 355 | All O\`one Data Structure | Hard | O(1) me inc/dec/getMax/getMin support karo | Google, Amazon |`
};

const processedProblems = [];

for (const [topic, rawTable] of Object.entries(rawTables)) {
    const lines = rawTable.trim().split('\n');
    for (const line of lines) {
        if (!line.trim()) continue;
        const parts = line.split('|').map(p => p.trim());
        // Row structure: | # | Problem | Difficulty | Description | Common Companies |
        // parts[0] is empty (before first |)
        // parts[1] is index, parts[2] is Problem Title, parts[3] is Difficulty, parts[4] is Description, parts[5] is Companies
        if (parts.length < 5) continue;
        
        const title = parts[2];
        const difficulty = parts[3].toUpperCase();
        const rawDesc = parts[4];
        const companies = parts[5] ? `Companies: ${parts[5]}` : '';

        // Generate slug from title
        let slug = title.toLowerCase()
            .replace(/\(.*\)/g, '') // remove parentheses
            .replace(/&/g, 'and')
            .replace(/[^a-z0-9]+/g, '-') // replace non-alphanumeric with dash
            .replace(/^-+|-+$/g, ''); // trim dashes

        // Check for duplicates
        let originalSlug = slug;
        let counter = 2;
        while (processedProblems.some(p => p.slug === slug)) {
            slug = `${originalSlug}-${counter}`;
            counter++;
        }

        // Standardize category and topic
        let problemTopic = topic;
        if (topic === "HashMap & HashSet") problemTopic = "HashMaps";
        else if (topic === "Design & Simulation") problemTopic = "Design";
        else if (topic === "Two Pointers & Sliding Window") problemTopic = "Two Pointers";

        const category = "DSA Interview Essentials";

        let finalBoilerplate = "";
        let finalTestCases = "";
        let finalDescription = `## Description\n\n${rawDesc}\n\n`;
        if (companies) {
            finalDescription += `**Recommended Interview Prep for:** *${parts[5]}*\n\n`;
        }

        // Check if we have custom high-quality solution preset
        if (customProblems[slug]) {
            const cp = customProblems[slug];
            // Format Custom boilerplate
            const javaCode = `${cp.javaSig ? `class Solution {\n    ${cp.javaSig} {\n        return 0; // Default Boilerplate\n    }\n}` : `class Solution {\n}`}\n\nimport java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        // Wrapper execution logic\n    }\n}`;
            const pythonCode = `from typing import List\n\nclass Solution:\n    ${cp.pySig ? cp.pySig : "pass"}\n        return 0`;
            const cppCode = `#include <vector>\n#include <string>\nusing namespace std;\n\nclass Solution {\npublic:\n    ${cp.cppSig ? cp.cppSig + " {\n        return 0;\n    }" : ""}\n};`;
            const jsCode = `${cp.jsSig ? cp.jsSig + " {\n    return 0;\n}" : ""}`;

            finalBoilerplate = JSON.stringify({
                java: javaCode,
                python: pythonCode,
                cpp: cppCode,
                javascript: jsCode
            });

            finalTestCases = JSON.stringify(cp.examples.map(ex => ({
                input: ex.input,
                output: ex.output
            })));

            if (cp.detailedDescription) {
                finalDescription = `## Description\n\n${cp.detailedDescription}\n\n`;
                if (companies) {
                    finalDescription += `**Recommended Interview Prep for:** *${parts[5]}*\n\n`;
                }
            }

            finalDescription += `### Examples\n\n` + cp.examples.map((ex, i) => `**Example ${i+1}:**\n\`\`\`\nInput: ${ex.input.replace(/\n/g, '\\n')}\nOutput: ${ex.output}\n\`\`\``).join('\n\n');
            
            if (cp.constraints) {
                finalDescription += `\n\n### Constraints\n` + cp.constraints.map(c => `- \`${c}\``).join('\n');
            }
        } else {
            // Generate standard generic skeleton
            const javaCode = `import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String input = sc.hasNextLine() ? sc.nextLine().trim() : "";
        System.out.println(new Solution().solve(input));
    }
}

class Solution {
    public String solve(String input) {
        // Write your solution logic here
        return input;
    }
}`;

            const pythonCode = `import sys

class Solution:
    def solve(self, input_str: str) -> str:
        # Write your solution logic here
        return input_str

if __name__ == '__main__':
    input_data = sys.stdin.read().strip()
    print(Solution().solve(input_data))`;

            const cppCode = `#include <iostream>
#include <string>
using namespace std;

class Solution {
public:
    string solve(string input) {
        // Write your solution logic here
        return input;
    }
};

int main() {
    string input;
    if (getline(cin, input)) {
        cout << Solution().solve(input) << endl;
    }
    return 0;
}`;

            const jsCode = `const fs = require('fs');

function solve(input) {
    // Write your solution logic here
    return input;
}

function main() {
    const input = fs.readFileSync(0, 'utf-8').trim();
    console.log(solve(input));
}
main();`;

            finalBoilerplate = JSON.stringify({
                java: javaCode,
                python: pythonCode,
                cpp: cppCode,
                javascript: jsCode
            });

            finalTestCases = JSON.stringify([
                {
                    input: "test",
                    output: "test"
                }
            ]);

            finalDescription = `## Problem Statement\n\n${rawDesc}\n\n`;
            if (companies) {
                finalDescription += `**Recommended Interview Prep for:** *${parts[5]}*\n\n`;
            }
            finalDescription += `\n---\n\n### Examples\n\n`;
            finalDescription += `**Example 1:**\n\`\`\`text\nInput: [Provide relevant input here]\nOutput: [Expected output]\nExplanation: Briefly explain how the output is derived from the input.\n\`\`\`\n\n`;
            finalDescription += `**Example 2:**\n\`\`\`text\nInput: [Provide another input here]\nOutput: [Expected output]\n\`\`\`\n\n`;
            
            finalDescription += `---\n\n### Constraints:\n`;
            finalDescription += `- \`1 <= input.length <= 10^5\`\n`;
            finalDescription += `- \`-10^9 <= input[i] <= 10^9\`\n`;
            finalDescription += `- Time Complexity constraint: \`O(N)\` or \`O(N log N)\` expected.\n`;
            finalDescription += `- Space Complexity constraint: \`O(1)\` or \`O(N)\` expected.\n\n`;
            
            finalDescription += `---\n\n### Custom Testing\nSince this problem is generic, your program should read the input line from standard input and output the final result. By default, the testing skeleton returns the input string exactly.`;
        }

        processedProblems.push({
            slug: slug,
            title: title,
            description: finalDescription,
            difficulty: difficulty,
            topic: problemTopic,
            category: category,
            boilerplateCode: finalBoilerplate,
            testCases: finalTestCases
        });
    }
}

// Save seeds JSON file
const outputPath = path.join('c:', 'Users', 'vinay', 'Videos', 'Development Journey', 'full stack app for adv indian coder', 'backend', 'src', 'main', 'resources', 'practice_problems_seed.json');
fs.writeFileSync(outputPath, JSON.stringify(processedProblems, null, 2));

console.log("SUCCESSFULLY GENERATED ALL " + processedProblems.length + " PROBLEMS SEED JSON AT: " + outputPath);
