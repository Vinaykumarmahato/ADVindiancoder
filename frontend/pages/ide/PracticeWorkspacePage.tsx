import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MonacoEditor from '@monaco-editor/react';
import axios from 'axios';
import { 
    Code, Terminal, Play, Check, AlertTriangle, ArrowLeft,
    CheckCircle, XCircle, Loader2, Sparkles
} from 'lucide-react';
import SEO from '../../components/SEO';
import { useAuth } from '../../contexts/AuthContext';

interface ProblemDetails {
    id: number;
    slug: string;
    title: string;
    description: string;
    difficulty: string;
    topic: string;
    category: string;
    boilerplateCode: string; // JSON string
    testCases: string; // JSON string
}

interface TestCase {
    input: string;
    output: string;
}

const JUDGE0_LANG_IDS: Record<string, number> = {
    java: 62,
    python: 71,
    cpp: 54,
    javascript: 63
};

const DRIVER_WRAPPERS: Record<string, Record<string, string>> = {
    'two-sum': {
        java: `
public class Main {
    public static void main(String[] args) {
        java.util.Scanner sc = new java.util.Scanner(System.in);
        if (!sc.hasNextLine()) return;
        String line1 = sc.nextLine().trim();
        if (!sc.hasNextLine()) return;
        String line2 = sc.nextLine().trim();
        
        String[] parts = line1.split(",");
        int[] nums = new int[parts.length];
        for (int i = 0; i < parts.length; i++) {
            nums[i] = Integer.parseInt(parts[i].trim());
        }
        int target = Integer.parseInt(line2);
        Solution sol = new Solution();
        int[] res = sol.twoSum(nums, target);
        System.out.println(java.util.Arrays.toString(res));
    }
}
`,
        python: `
import sys

if __name__ == '__main__':
    lines = sys.stdin.read().splitlines()
    if len(lines) >= 2:
        nums = [int(x.strip()) for x in lines[0].split(',') if x.strip()]
        target = int(lines[1].strip())
        sol = Solution()
        print(sol.twoSum(nums, target))
`,
        cpp: `
#include <iostream>
#include <vector>
#include <string>
#include <sstream>

int main() {
    std::string line1, line2;
    if (!std::getline(std::cin, line1)) return 0;
    if (!std::getline(std::cin, line2)) return 0;
    
    std::vector<int> nums;
    std::stringstream ss(line1);
    std::string item;
    while (std::getline(ss, item, ',')) {
        nums.push_back(std::stoi(item));
    }
    int target = std::stoi(line2);
    Solution sol;
    std::vector<int> res = sol.twoSum(nums, target);
    std::cout << "[" << res[0] << ", " << res[1] << "]" << std::endl;
    return 0;
}
`,
        javascript: `
const fs = require('fs');

function main() {
    const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\\n');
    if (input.length >= 2) {
        const nums = input[0].split(',').map(Number);
        const target = Number(input[1]);
        console.log(JSON.stringify(twoSum(nums, target)).replace(',', ', '));
    }
}
main();
`
    },
    'reverse-string': {
        java: `
public class Main {
    public static void main(String[] args) {
        java.util.Scanner sc = new java.util.Scanner(System.in);
        if (!sc.hasNextLine()) return;
        String line = sc.nextLine().trim();
        String[] parts = line.split(",");
        char[] s = new char[parts.length];
        for (int i = 0; i < parts.length; i++) {
            s[i] = parts[i].length() > 0 ? parts[i].charAt(0) : ' ';
        }
        Solution sol = new Solution();
        sol.reverseString(s);
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < s.length; i++) {
            sb.append(s[i]);
            if (i < s.length - 1) sb.append(",");
        }
        System.out.println(sb.toString());
    }
}
`,
        python: `
import sys

if __name__ == '__main__':
    line = sys.stdin.read().strip()
    s = [x for x in line.split(',') if x]
    sol = Solution()
    sol.reverseString(s)
    print(','.join(s))
`,
        cpp: `
#include <iostream>
#include <vector>
#include <string>
#include <sstream>

int main() {
    std::string line;
    if (!std::getline(std::cin, line)) return 0;
    std::vector<char> s;
    std::stringstream ss(line);
    std::string item;
    while (std::getline(ss, item, ',')) {
        if (!item.empty()) s.push_back(item[0]);
    }
    Solution sol;
    sol.reverseString(s);
    for (size_t i = 0; i < s.size(); i++) {
        std::cout << s[i];
        if (i < s.size() - 1) std::cout << ",";
    }
    std::cout << std::endl;
    return 0;
}
`,
        javascript: `
const fs = require('fs');

function main() {
    const input = fs.readFileSync('/dev/stdin', 'utf-8').trim();
    const s = input.split(',');
    reverseString(s);
    console.log(s.join(','));
}
main();
`
    },
    'fibonacci-number': {
        java: `
public class Main {
    public static void main(String[] args) {
        java.util.Scanner sc = new java.util.Scanner(System.in);
        if (!sc.hasNextLine()) return;
        int n = Integer.parseInt(sc.nextLine().trim());
        Solution sol = new Solution();
        System.out.println(sol.fib(n));
    }
}
`,
        python: `
import sys

if __name__ == '__main__':
    line = sys.stdin.read().strip()
    n = int(line)
    sol = Solution()
    print(sol.fib(n))
`,
        cpp: `
#include <iostream>

int main() {
    int n;
    if (std::cin >> n) {
        Solution sol;
        std::cout << sol.fib(n) << std::endl;
    }
    return 0;
}
`,
        javascript: `
const fs = require('fs');

function main() {
    const input = fs.readFileSync('/dev/stdin', 'utf-8').trim();
    const n = Number(input);
    console.log(fib(n));
}
main();
`
    },
    'binary-search': {
        java: `
public class Main {
    public static void main(String[] args) {
        java.util.Scanner sc = new java.util.Scanner(System.in);
        if (!sc.hasNextLine()) return;
        String line1 = sc.nextLine().trim();
        if (!sc.hasNextLine()) return;
        String line2 = sc.nextLine().trim();
        
        String[] parts = line1.split(",");
        int[] nums = new int[parts.length];
        for (int i = 0; i < parts.length; i++) {
            nums[i] = Integer.parseInt(parts[i].trim());
        }
        int target = Integer.parseInt(line2);
        Solution sol = new Solution();
        System.out.println(sol.search(nums, target));
    }
}
`,
        python: `
import sys

if __name__ == '__main__':
    lines = sys.stdin.read().splitlines()
    if len(lines) >= 2:
        nums = [int(x.strip()) for x in lines[0].split(',') if x.strip()]
        target = int(lines[1].strip())
        sol = Solution()
        print(sol.search(nums, target))
`,
        cpp: `
#include <iostream>
#include <vector>
#include <string>
#include <sstream>

int main() {
    std::string line1, line2;
    if (!std::getline(std::cin, line1)) return 0;
    if (!std::getline(std::cin, line2)) return 0;
    
    std::vector<int> nums;
    std::stringstream ss(line1);
    std::string item;
    while (std::getline(ss, item, ',')) {
        nums.push_back(std::stoi(item));
    }
    int target = std::stoi(line2);
    Solution sol;
    std::cout << sol.search(nums, target) << std::endl;
    return 0;
}
`,
        javascript: `
const fs = require('fs');

function main() {
    const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\\n');
    if (input.length >= 2) {
        const nums = input[0].split(',').map(Number);
        const target = Number(input[1]);
        console.log(search(nums, target));
    }
}
main();
`
    },
    'valid-parentheses': {
        java: `
public class Main {
    public static void main(String[] args) {
        java.util.Scanner sc = new java.util.Scanner(System.in);
        if (!sc.hasNextLine()) return;
        String s = sc.nextLine().trim();
        Solution sol = new Solution();
        System.out.println(sol.isValid(s));
    }
}
`,
        python: `
import sys

if __name__ == '__main__':
    s = sys.stdin.read().strip()
    sol = Solution()
    print(str(sol.isValid(s)).lower())
`,
        cpp: `
#include <iostream>
#include <string>

int main() {
    std::string s;
    if (std::cin >> s) {
        Solution sol;
        std::cout << (sol.isValid(s) ? "true" : "false") << std::endl;
    }
    return 0;
}
`,
    },
    'reverse-linked-list': {
        java: `
public class Main {
    public static void main(String[] args) {
        java.util.Scanner sc = new java.util.Scanner(System.in);
        if (!sc.hasNextLine()) return;
        String line = sc.nextLine().trim();
        if (line.isEmpty()) return;
        String[] parts = line.split(",");
        ListNode head = new ListNode(Integer.parseInt(parts[0].trim()));
        ListNode curr = head;
        for (int i = 1; i < parts.length; i++) {
            curr.next = new ListNode(Integer.parseInt(parts[i].trim()));
            curr = curr.next;
        }
        Solution sol = new Solution();
        ListNode res = sol.reverseList(head);
        StringBuilder sb = new StringBuilder();
        while (res != null) {
            sb.append(res.val);
            if (res.next != null) sb.append(",");
            res = res.next;
        }
        System.out.println(sb.toString());
    }
}
class ListNode {
    int val;
    ListNode next;
    ListNode(int x) { val = x; }
}
`,
        python: `
import sys

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

if __name__ == '__main__':
    line = sys.stdin.read().strip()
    if line:
        parts = [int(x.strip()) for x in line.split(',') if x.strip()]
        if parts:
            head = ListNode(parts[0])
            curr = head
            for val in parts[1:]:
                curr.next = ListNode(val)
                curr = curr.next
            sol = Solution()
            res = sol.reverseList(head)
            out = []
            while res:
                out.append(str(res.val))
                res = res.next
            print(','.join(out))
`,
        cpp: `
#include <iostream>
#include <vector>
#include <string>
#include <sstream>

struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(NULL) {}
};

int main() {
    std::string line;
    if (!std::getline(std::cin, line)) return 0;
    if (line.empty()) return 0;
    std::stringstream ss(line);
    std::string item;
    ListNode* head = NULL;
    ListNode* curr = NULL;
    while (std::getline(ss, item, ',')) {
        if (!item.empty()) {
            ListNode* node = new ListNode(std::stoi(item));
            if (!head) {
                head = node;
                curr = node;
            } else {
                curr->next = node;
                curr = node;
            }
        }
    }
    Solution sol;
    ListNode* res = sol.reverseList(head);
    while (res) {
        std::cout << res->val;
        if (res->next) std::cout << ",";
        res = res->next;
    }
    std::cout << std::endl;
    return 0;
}
`,
        javascript: `
const fs = require('fs');

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

function main() {
    const input = fs.readFileSync('/dev/stdin', 'utf-8').trim();
    if (!input) return;
    const parts = input.split(',').map(Number);
    const head = new ListNode(parts[0]);
    let curr = head;
    for (let i = 1; i < parts.length; i++) {
        curr.next = new ListNode(parts[i]);
        curr = curr.next;
    }
    const res = reverseList(head);
    const out = [];
    let temp = res;
    while (temp) {
        out.push(temp.val);
        temp = temp.next;
    }
    console.log(out.join(','));
}
main();
`
    },
    'search-in-rotated-sorted-array': {
        java: `
public class Main {
    public static void main(String[] args) {
        java.util.Scanner sc = new java.util.Scanner(System.in);
        if (!sc.hasNextLine()) return;
        String line1 = sc.nextLine().trim();
        if (!sc.hasNextLine()) return;
        String line2 = sc.nextLine().trim();
        
        String[] parts = line1.split(",");
        int[] nums = new int[parts.length];
        for (int i = 0; i < parts.length; i++) {
            nums[i] = Integer.parseInt(parts[i].trim());
        }
        int target = Integer.parseInt(line2);
        Solution sol = new Solution();
        System.out.println(sol.search(nums, target));
    }
}
`,
        python: `
import sys

if __name__ == '__main__':
    lines = sys.stdin.read().splitlines()
    if len(lines) >= 2:
        nums = [int(x.strip()) for x in lines[0].split(',') if x.strip()]
        target = int(lines[1].strip())
        sol = Solution()
        print(sol.search(nums, target))
`,
        cpp: `
#include <iostream>
#include <vector>
#include <string>
#include <sstream>

int main() {
    std::string line1, line2;
    if (!std::getline(std::cin, line1)) return 0;
    if (!std::getline(std::cin, line2)) return 0;
    
    std::vector<int> nums;
    std::stringstream ss(line1);
    std::string item;
    while (std::getline(ss, item, ',')) {
        nums.push_back(std::stoi(item));
    }
    int target = std::stoi(line2);
    Solution sol;
    std::cout << sol.search(nums, target) << std::endl;
    return 0;
}
`,
        javascript: `
const fs = require('fs');

function main() {
    const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\\n');
    if (input.length >= 2) {
        const nums = input[0].split(',').map(Number);
        const target = Number(input[1]);
        console.log(search(nums, target));
    }
}
main();
`
    }
};

const PracticeWorkspacePage: React.FC = () => {
    const { problemSlug } = useParams<{ problemSlug: string }>();
    const navigate = useNavigate();
    const { user, loading: authLoading } = useAuth();

    useEffect(() => {
        if (!authLoading && !user) {
            window.dispatchEvent(new CustomEvent('open_auth_modal'));
            navigate('/practice');
        }
    }, [user, authLoading, navigate]);

    const [problem, setProblem] = useState<ProblemDetails | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Code state
    const [language, setLanguage] = useState<string>('java');
    const [code, setCode] = useState<string>('');
    const [boilerplates, setBoilerplates] = useState<Record<string, string>>({});
    
    // Console outputs
    const [isExecuting, setIsExecuting] = useState(false);
    const [execOutput, setExecOutput] = useState<string>('');
    const [testResults, setTestResults] = useState<{
        input: string;
        expected: string;
        actual: string;
        passed: boolean;
    }[]>([]);
    
    // Popup Modal
    const [submitSuccess, setSubmitSuccess] = useState(false);

    // Custom input states
    const [useCustomInput, setUseCustomInput] = useState<boolean>(false);
    const [customInput, setCustomInput] = useState<string>('');

    useEffect(() => {
        const fetchProblemDetails = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:8080'}/api/practice/problems/${problemSlug}`);
                if (!response.ok) {
                    throw new Error('Problem not found or backend server is offline.');
                }
                const data: ProblemDetails = await response.json();
                setProblem(data);

                // Parse boilerplates
                let parsedBoilerplates: Record<string, string> = {};
                try {
                    parsedBoilerplates = JSON.parse(data.boilerplateCode);
                    setBoilerplates(parsedBoilerplates);
                } catch (e) {
                    console.error("Error parsing boilerplate codes", e);
                }

                // Default active language and code
                const defaultLang = parsedBoilerplates.java ? 'java' : Object.keys(parsedBoilerplates)[0] || 'java';
                setLanguage(defaultLang);
                setCode(parsedBoilerplates[defaultLang] || '');
            } catch (err: any) {
                setError(err.message || 'Error occurred while loading problem.');
            } finally {
                setLoading(false);
            }
        };

        if (problemSlug) {
            fetchProblemDetails();
        }
    }, [problemSlug]);

    const handleLanguageChange = (newLang: string) => {
        setLanguage(newLang);
        if (boilerplates[newLang]) {
            setCode(boilerplates[newLang]);
        } else {
            setCode('');
        }
    };

    const b64Encode = (str: string) => btoa(unescape(encodeURIComponent(str)));
    const b64Decode = (str: string) => {
        if (!str) return '';
        try { return decodeURIComponent(escape(atob(str))); } catch { try { return atob(str); } catch { return str; } }
    };

    const runCodeAgainstTestCases = async (isSubmit: boolean = false) => {
        if (!problem) return;
        setIsExecuting(true);
        setExecOutput('');
        setTestResults([]);

        const langId = JUDGE0_LANG_IDS[language];
        if (!langId) {
            setExecOutput(`❌ Error: Language ${language} execution not configured.`);
            setIsExecuting(false);
            return;
        }

        // Wrap code with driver templates if present
        let finalRunnableCode = code;
        if (problemSlug && DRIVER_WRAPPERS[problemSlug] && DRIVER_WRAPPERS[problemSlug][language]) {
            let cleanUserCode = code;
            if (language === 'java') {
                cleanUserCode = code.replace(/public\s+class\s+Solution/g, 'class Solution');
            }
            finalRunnableCode = cleanUserCode + "\n" + DRIVER_WRAPPERS[problemSlug][language];
        }

        if (useCustomInput) {
            setExecOutput("🚀 Running code against custom input...\n");
            try {
                const judgeRes = await axios.post(
                    'https://ce.judge0.com/submissions?base64_encoded=true&wait=true',
                    {
                        language_id: langId,
                        source_code: b64Encode(finalRunnableCode),
                        stdin: b64Encode(customInput),
                    },
                    { headers: { 'Content-Type': 'application/json' } }
                );

                const data = judgeRes.data;
                const statusDesc = data?.status?.description || 'Unknown';
                const stdout = b64Decode(data?.stdout || '').trim();
                const stderr = b64Decode(data?.stderr || '').trim();
                const compileOutput = b64Decode(data?.compile_output || '').trim();
                const messageOutput = data?.message || '';

                let out = '';
                if (compileOutput) out += `Compile Output:\n${compileOutput}\n\n`;
                if (stdout) out += `Standard Output:\n${stdout}\n\n`;
                if (stderr) out += `Standard Error:\n${stderr}\n\n`;
                if (messageOutput) out += `Execution Message:\n${messageOutput}\n\n`;
                if (!compileOutput && !stdout && !stderr && !messageOutput) {
                    out += `Execution completed: ${statusDesc}\n`;
                }

                setExecOutput(out);

                // Increment total compiles count on backend
                const token = localStorage.getItem('adv_coder_token');
                if (token) {
                    await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:8080'}/api/auth/track-compile`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`
                        },
                        body: JSON.stringify({
                            success: data?.status?.id === 3,
                            fileName: problem.title,
                            language: language,
                            code: code
                        })
                    });
                }
            } catch (err: any) {
                setExecOutput(`❌ Network Error calling execution server: ${err.message || err}\n`);
            } finally {
                setIsExecuting(false);
            }
            return;
        }

        let parsedTests: TestCase[] = [];
        try {
            parsedTests = JSON.parse(problem.testCases);
        } catch (e) {
            setExecOutput("❌ Error: Invalid test cases configuration on backend.");
            setIsExecuting(false);
            return;
        }

        setExecOutput("🚀 Initializing compiler workspace...\n");

        const results: typeof testResults = [];
        let allPassed = true;

        try {
            // Run tests in parallel
            setExecOutput(prev => prev + `Running ${parsedTests.length} Test Cases in parallel...\n`);

            const testPromises = parsedTests.map((test) =>
                axios.post(
                    'https://ce.judge0.com/submissions?base64_encoded=true&wait=true',
                    {
                        language_id: langId,
                        source_code: b64Encode(finalRunnableCode),
                        stdin: b64Encode(test.input),
                    },
                    { headers: { 'Content-Type': 'application/json' } }
                )
            );

            const judgeResponses = await Promise.all(testPromises);

            for (let idx = 0; idx < parsedTests.length; idx++) {
                const test = parsedTests[idx];
                const data = judgeResponses[idx].data;
                const statusId = data?.status?.id;
                const statusDesc = data?.status?.description || 'Unknown';
                const stdout = b64Decode(data?.stdout || '').trim();
                const stderr = b64Decode(data?.stderr || '').trim();
                const compileOutput = b64Decode(data?.compile_output || '').trim();
                const messageOutput = data?.message || '';

                if (statusId === 3) { // Success
                    const expectedOut = test.output.trim();
                    const passed = stdout === expectedOut;
                    if (!passed) allPassed = false;
                    
                    results.push({
                        input: test.input,
                        expected: expectedOut,
                        actual: stdout,
                        passed: passed
                    });
                } else {
                    allPassed = false;
                    let errorMsg = stderr || compileOutput || messageOutput || statusDesc;
                    results.push({
                        input: test.input,
                        expected: test.output,
                        actual: `Error: ${statusDesc}\n${errorMsg}`,
                        passed: false
                    });
                }
            }

            setTestResults(results);
            setExecOutput(prev => prev + `\n📊 Completed: ${results.filter(r => r.passed).length} / ${results.length} Test Cases Passed.\n`);

            // Persist progress to DB
            const token = localStorage.getItem('adv_coder_token');
            if (token) {
                await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:8080'}/api/practice/problems/${problemSlug}/submit`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify({
                        language,
                        code,
                        success: allPassed
                    })
                });
            }

            if (isSubmit && allPassed) {
                setSubmitSuccess(true);
            }

        } catch (err: any) {
            setExecOutput(prev => prev + `\n❌ Network Error calling execution server: ${err.message || err}\n`);
        } finally {
            setIsExecuting(false);
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-[#070b13]">
                <div className="flex flex-col items-center gap-3">
                    <Loader2 className="h-10 w-10 text-green-500 animate-spin" />
                    <p className="text-gray-400 font-bold text-sm">Loading Practice Workspace...</p>
                </div>
            </div>
        );
    }

    if (error || !problem) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-[#070b13] text-white p-4">
                <div className="text-center space-y-4">
                    <AlertTriangle className="h-12 w-12 text-red-500 mx-auto" />
                    <p className="font-bold">{error || 'Problem not found.'}</p>
                    <button 
                        onClick={() => navigate('/practice')}
                        className="px-6 py-2.5 rounded-xl bg-green-600 hover:bg-green-500 font-black text-xs uppercase"
                    >
                        Back to Practice Hub
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#070b13] text-gray-200 py-20 px-4">
            <SEO 
                title={`Solve ${problem.title}`} 
                description={`Practice coding challenge: ${problem.title}. Compile and run code online.`}
            />

            <div className="max-w-7xl mx-auto space-y-6">
                
                {/* Back button and title */}
                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                    <div className="flex items-center gap-3">
                        <button 
                            onClick={() => navigate('/practice')}
                            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10 transition-all cursor-pointer"
                        >
                            <ArrowLeft className="w-4 h-4" />
                        </button>
                        <div>
                            <h1 className="text-xl font-black text-white flex items-center gap-2.5">
                                {problem.title}
                                <span className={`px-2.5 py-0.5 rounded-full border text-[9px] font-black uppercase tracking-wider ${
                                    problem.difficulty === 'EASY' ? 'bg-green-500/10 text-green-400 border-green-500/20' : 
                                    problem.difficulty === 'MEDIUM' ? 'bg-orange-500/10 text-orange-400 border-orange-500/20' : 
                                    'bg-red-500/10 text-red-400 border-red-500/20'
                                }`}>
                                    {problem.difficulty}
                                </span>
                            </h1>
                            <p className="text-[10px] text-gray-400 font-semibold mt-1">Topic: {problem.topic} | Category: {problem.category}</p>
                        </div>
                    </div>

                    {/* Language selector */}
                    <div className="flex items-center gap-3">
                        <select 
                            value={language}
                            onChange={(e) => handleLanguageChange(e.target.value)}
                            className="bg-slate-900 border border-white/10 text-xs font-bold text-gray-200 rounded-xl px-4 py-2.5 outline-none focus:border-green-500 cursor-pointer"
                        >
                            {Object.keys(boilerplates).map(lang => (
                                <option key={lang} value={lang} className="capitalize">
                                    {lang === 'cpp' ? 'C++' : lang}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Split Workspace Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                    
                    {/* Left Pane: Problem Description */}
                    <div className="bg-[#0c1222] border border-white/5 rounded-3xl p-6 shadow-sm min-h-[500px] overflow-y-auto space-y-4 max-h-[720px]">
                        <h3 className="text-xs font-black text-green-500 uppercase tracking-widest flex items-center gap-1.5">
                            <Code className="w-4 h-4" />
                            Problem Details
                        </h3>
                        <div 
                            className="prose prose-invert prose-sm text-gray-300 font-semibold leading-relaxed max-w-none space-y-4"
                            dangerouslySetInnerHTML={{ __html: problem.description.split('```').map((part, idx) => {
                                if (idx % 2 === 1) {
                                    let content = part;
                                    const firstNewLine = content.indexOf('\n');
                                    if (firstNewLine !== -1) {
                                        const firstLine = content.slice(0, firstNewLine).trim();
                                        if (['java', 'python', 'cpp', 'javascript', 'js', 'c'].includes(firstLine.toLowerCase())) {
                                            content = content.slice(firstNewLine + 1);
                                        }
                                    }
                                    return `<pre class="bg-black/40 p-4 rounded-2xl font-mono text-xs text-gray-300 border border-white/5 overflow-x-auto my-3">${content}</pre>`;
                                } else {
                                    return part
                                        .replace(/## (.*)/g, '<h2 class="text-white text-base font-black border-b border-white/5 pb-1 mt-4">$1</h2>')
                                        .replace(/### (.*)/g, '<h3 class="text-white text-sm font-bold mt-3">$1</h3>')
                                        .replace(/\*\*(.*)\*\*/g, '<strong class="text-white font-bold">$1</strong>')
                                        .replace(/\*(.*)\*/g, '<em class="italic">$1</em>')
                                        .replace(/`([^`]+)`/g, '<code class="bg-black/30 px-1.5 py-0.5 rounded font-mono text-green-400 text-xs">$1</code>')
                                        .replace(/\n/g, '<br />');
                                }
                            }).join('') }} 
                        />
                    </div>

                    {/* Right Pane: Code Editor & Console */}
                    <div className="space-y-6">
                        
                        {/* Editor Box */}
                        <div className="bg-[#0c1222] border border-white/5 rounded-3xl overflow-hidden shadow-sm">
                            <div className="bg-slate-900/50 px-5 py-3 border-b border-white/5 flex items-center justify-between">
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                                    <Terminal className="w-4 h-4 text-green-400" />
                                    Source Editor
                                </span>
                            </div>
                            <div className="h-[360px] w-full pt-2">
                                <MonacoEditor
                                    theme="vs-dark"
                                    language={language === 'cpp' ? 'cpp' : language === 'javascript' ? 'javascript' : language === 'python' ? 'python' : 'java'}
                                    value={code}
                                    onChange={(value) => setCode(value || '')}
                                    options={{
                                        fontSize: 14,
                                        fontFamily: 'Fira Code, Monaco, Courier New, monospace',
                                        minimap: { enabled: false },
                                        scrollBeyondLastLine: false,
                                        automaticLayout: true,
                                    }}
                                />
                            </div>
                        </div>

                        {/* Custom Input Panel */}
                        <div className="bg-[#0c1222]/80 border border-white/5 rounded-3xl p-5 shadow-sm space-y-3">
                            <div className="flex items-center justify-between">
                                <label className="flex items-center gap-2.5 text-xs font-bold text-gray-300 cursor-pointer select-none">
                                    <input 
                                        type="checkbox" 
                                        checked={useCustomInput} 
                                        onChange={(e) => setUseCustomInput(e.target.checked)}
                                        className="rounded border-white/10 bg-black/40 text-green-500 focus:ring-green-500 w-4 h-4 cursor-pointer"
                                    />
                                    <span>Use Custom Input</span>
                                </label>
                            </div>
                            {useCustomInput && (
                                <textarea
                                    value={customInput}
                                    onChange={(e) => setCustomInput(e.target.value)}
                                    placeholder="Enter your custom test input here..."
                                    className="w-full h-20 bg-black/40 border border-white/5 rounded-xl p-3 text-xs text-gray-300 font-mono focus:outline-none focus:border-green-500/50 resize-none"
                                />
                            )}
                        </div>

                        {/* Compiler execution controls */}
                        <div className="flex gap-4">
                            <button
                                onClick={() => runCodeAgainstTestCases(false)}
                                disabled={isExecuting}
                                className="flex-1 py-3 rounded-2xl bg-white/5 hover:bg-white/10 text-white border border-white/10 font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
                            >
                                <Play className="w-4 h-4 text-green-400" />
                                Run Code Against Samples
                            </button>
                            <button
                                onClick={() => runCodeAgainstTestCases(true)}
                                disabled={isExecuting}
                                className="flex-1 py-3 rounded-2xl bg-green-500 hover:bg-green-600 text-white font-black text-xs flex items-center justify-center gap-2 shadow-lg shadow-green-500/20 transition-all cursor-pointer disabled:opacity-50"
                            >
                                {isExecuting ? (
                                    <>
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                        Submitting...
                                    </>
                                ) : (
                                    <>
                                        <Check className="w-4 h-4" />
                                        Submit Code
                                    </>
                                )}
                            </button>
                        </div>

                        {/* Output Console Box */}
                        <div className="bg-[#0c1222] border border-white/5 rounded-3xl p-6 shadow-sm space-y-4">
                            <h3 className="text-xs font-black text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                                <Terminal className="w-4 h-4" />
                                Execution Console
                            </h3>

                            {/* Execution Log Output */}
                            {execOutput && (
                                <pre className="bg-black/40 p-4 rounded-2xl font-mono text-[10px] text-green-400 border border-white/5 overflow-x-auto whitespace-pre-wrap max-h-[160px]">
                                    {execOutput}
                                </pre>
                            )}

                            {/* Test Cases Results Breakdown */}
                            {testResults.length > 0 && (
                                <div className="space-y-3 pt-2">
                                    {testResults.map((res, i) => (
                                        <div key={i} className="bg-slate-900/40 border border-white/5 p-4 rounded-2xl space-y-2.5">
                                            <div className="flex items-center justify-between">
                                                <span className="text-xs font-bold text-gray-300">Test Case {i + 1}</span>
                                                <span className="flex items-center gap-1">
                                                    {res.passed ? (
                                                        <>
                                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                                            <span className="text-[10px] font-black text-green-500 uppercase">Passed</span>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <XCircle className="w-4 h-4 text-red-500" />
                                                            <span className="text-[10px] font-black text-red-500 uppercase">Failed</span>
                                                        </>
                                                    )}
                                                </span>
                                            </div>
                                            <div className="grid grid-cols-2 gap-4 text-[10px]">
                                                <div>
                                                    <span className="text-gray-500 font-bold block mb-1">Expected Output</span>
                                                    <pre className="bg-black/30 p-2 rounded-lg font-mono text-gray-400 overflow-x-auto">{res.expected}</pre>
                                                </div>
                                                <div>
                                                    <span className="text-gray-500 font-bold block mb-1">Your Output</span>
                                                    <pre className={`bg-black/30 p-2 rounded-lg font-mono overflow-x-auto ${res.passed ? 'text-green-400' : 'text-red-400'}`}>{res.actual}</pre>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {!execOutput && testResults.length === 0 && (
                                <div className="text-center py-6 text-xs text-gray-500 font-semibold border border-dashed border-white/5 rounded-2xl">
                                    Console idle. Click Run or Submit to compile your code.
                                </div>
                            )}
                        </div>

                    </div>
                </div>

            </div>

            {/* Success Popup Modal */}
            {submitSuccess && (
                <div className="fixed inset-0 z-[1200] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={() => setSubmitSuccess(false)} />
                    <div className="relative w-full max-w-sm bg-slate-900 border border-white/10 rounded-3xl p-8 text-center space-y-5 shadow-2xl z-10 overflow-hidden">
                        <div className="h-1.5 w-full bg-gradient-to-r from-green-500 via-emerald-400 to-green-500 absolute top-0 left-0" />
                        <div className="w-16 h-16 rounded-full bg-green-500/10 text-green-400 flex items-center justify-center mx-auto border-2 border-green-500/20">
                            <Sparkles className="w-8 h-8" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-black text-white">Challenge Solved!</h3>
                            <p className="text-xs text-gray-400 font-semibold leading-relaxed">
                                Excellent coding! All test cases passed successfully. Your progress has been stored.
                            </p>
                        </div>
                        <div className="flex gap-3 pt-2">
                            <button
                                onClick={() => setSubmitSuccess(false)}
                                className="flex-1 py-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 font-bold text-xs cursor-pointer transition-all"
                            >
                                Stay Here
                            </button>
                            <button
                                onClick={() => navigate('/practice')}
                                className="flex-1 py-3 rounded-2xl bg-green-500 hover:bg-green-600 text-white font-black text-xs cursor-pointer transition-all"
                            >
                                Back to Hub
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default PracticeWorkspacePage;
