import React, { useState, useEffect, useRef } from 'react';
import Editor from '@monaco-editor/react';
import { Play, RotateCcw, Copy, Share2, Terminal, Code2, Coffee, Zap, Award, Github, PartyPopper, CheckCircle2, ChevronDown } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import SEO from '../components/SEO';
import axios from 'axios';
import { JAVA_EPISODES } from '../data/javaEpisodes';

const BOILERPLATE: Record<string, string> = {
    python: `def main():\n    print("Hello from ADV Indian Coder!")\n\nif __name__ == "__main__":\n    main()`,
    java: `public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello from ADV Indian Coder!");\n    }\n}`,
    c: `#include <stdio.h>\n\nint main() {\n    printf("Hello from ADV Indian Coder!\\n");\n    return 0;\n}`,
    cpp: `#include <iostream>\n\nint main() {\n    std::cout << "Hello from ADV Indian Coder!" << std::endl;\n    return 0;\n}`,
    javascript: `console.log("Hello from ADV Indian Coder!");`,
};

const LESSON_TEMPLATES: Record<string, Record<string, string>> = {
    java: {
        'Default Blueprint': BOILERPLATE['java'],
        ...JAVA_EPISODES.reduce((acc, ep) => {
            // Shorten the title for the dropdown
            const cleanTitle = ep.title.replace('EP ' + (ep.id < 10 ? '0' + ep.id : ep.id), '').replace('–', '').replace('—', '').trim();
            acc[`EP ${ep.id}: ${cleanTitle.split('|')[0].trim()}`] = ep.notes.code;
            return acc;
        }, {} as Record<string, string>),
    },
    python: {
        'Default Script': BOILERPLATE['python'],
        'List Comprehension': `numbers = [1, 2, 3, 4, 5]\nsquares = [x**2 for x in numbers if x % 2 == 0]\nprint(f"Original: {numbers}")\nprint(f"Squares of even: {squares}")`,
    }
};

const LANGUAGES = [
    { id: 'python', name: 'Python', icon: Zap, color: 'text-yellow-400', version: '3.10.0' },
    { id: 'java', name: 'Java', icon: Coffee, color: 'text-red-400', version: '15.0.2' },
    { id: 'c', name: 'C', icon: Code2, color: 'text-blue-400', version: '10.2.0' },
    { id: 'cpp', name: 'C++', icon: Code2, color: 'text-blue-500', version: '10.2.0' },
    { id: 'javascript', name: 'JavaScript', icon: Zap, color: 'text-yellow-300', version: '1.32.3' },
];

const PlaygroundPage = () => {
    const [language, setLanguage] = useState('java');
    const [code, setCode] = useState(BOILERPLATE['java']);
    const [isLessonDropdownOpen, setIsLessonDropdownOpen] = useState(false);
    const [userInput, setUserInput] = useState('');
    const [output, setOutput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [executionTime, setExecutionTime] = useState<number | null>(null);

    const [needsInput, setNeedsInput] = useState(false);
    const editorRef = useRef<any>(null);

    const checkNeedsInput = (src: string) =>
        src.includes('Scanner') ||
        src.includes('nextInt') ||
        src.includes('nextLine') ||
        src.includes('nextDouble') ||
        src.includes('nextFloat') ||
        src.includes('cin >>') ||
        src.includes('cin>>') ||
        src.includes('scanf') ||
        src.includes('input()') ||
        src.includes('readline');

    useEffect(() => {
        const boiler = BOILERPLATE[language];
        setCode(boiler);
        setOutput('');
        setExecutionTime(null);
        setUserInput('');
        setNeedsInput(checkNeedsInput(boiler));
    }, [language]);

    const [githubRepoUrl, setGithubRepoUrl] = useState('');

    useEffect(() => {
        const savedRepo = localStorage.getItem('adv_repo');
        if (savedRepo) setGithubRepoUrl(savedRepo);
    }, []);

    const handleSaveRepoUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
        const url = e.target.value;
        setGithubRepoUrl(url);
        localStorage.setItem('adv_repo', url);
    };

    const [showCongratsModal, setShowCongratsModal] = useState(false);

    const submitToGithub = () => {
        if (!githubRepoUrl) {
            alert('Please save a GitHub repository URL first.');
            return;
        }
        navigator.clipboard.writeText(code);
        setShowCongratsModal(true);
    };

    const handleConfirmGithubRedirect = () => {
        setShowCongratsModal(false);
        window.open(githubRepoUrl, '_blank');
    };

    const runCode = async () => {
        setIsLoading(true);
        setOutput('Connecting to Judge0...');
        setExecutionTime(null);
        const startTime = performance.now();

        try {
            let finalCode = code;

            // Java Pre-processing for better compatibility
            if (language === 'java') {
                // Heuristic regex to match strings and comments to avoid replacing contents within them
                const skipRegex = /("(?:[^"\\\\]|\\\\.)*"|'(?:[^'\\\\]|\\\\.)*'|\/\/.*|\/\*[\s\S]*?\*\/)/;
                
                // 1. Rename the public class or any entry class to 'Main' for Judge0 compatibility
                const publicClassMatch = finalCode.match(/public\s+class\s+(\w+)/);
                
                if (publicClassMatch) {
                    const className = publicClassMatch[1];
                    if (className !== 'Main') {
                        // Use a safe renaming logic that respects word boundaries and skips strings/comments
                        const combinedRegex = new RegExp(`${skipRegex.source}|\\b${className}\\b`, 'g');
                        finalCode = finalCode.replace(combinedRegex, (match, p1) => {
                            return p1 ? match : 'Main';
                        });
                    }
                } else {
                    // If no public class, find the first class and rename it to public Main
                    const firstClassMatch = finalCode.match(/class\s+(\w+)/);
                    if (firstClassMatch) {
                        const className = firstClassMatch[1];
                        if (className !== 'Main') {
                            const combinedRegex = new RegExp(`${skipRegex.source}|\\b${className}\\b`, 'g');
                            finalCode = finalCode.replace(combinedRegex, (match, p1) => {
                                return p1 ? match : 'Main';
                            });
                        }
                        // Ensure it's public class Main
                        finalCode = finalCode.replace(/\bclass\s+Main\b/, 'public class Main');
                    }
                }

                // 1. Inject Scanner import cleanly after package declaration if present
                if (finalCode.includes('Scanner') && !finalCode.includes('import java.util.Scanner')) {
                    if (finalCode.match(/^\s*package\s+[a-zA-Z_][a-zA-Z0-9_.]*\s*;/m)) {
                        finalCode = finalCode.replace(/^(\s*package\s+[a-zA-Z_][a-zA-Z0-9_.]*\s*;)/m, '$1\nimport java.util.Scanner;');
                    } else {
                        finalCode = 'import java.util.Scanner;\n' + finalCode;
                    }
                }

                // 2. Inject dummy main method if missing
                // This triggers static blocks and simulates the "Main method not found" error if needed
                if (!finalCode.includes('public static void main')) {
                    const lastBraceIndex = finalCode.lastIndexOf('}');
                    if (lastBraceIndex !== -1) {
                        const errorMsg = `Error: Main method not found in class Main, please define the main method as:\\n   public static void main(String[] args)`;
                        finalCode = finalCode.slice(0, lastBraceIndex) + 
                            `\n    public static void main(String[] args) {\n        System.out.println("${errorMsg}");\n    }\n` + 
                            finalCode.slice(lastBraceIndex);
                    }
                }
            }

            // ─── Judge0 CE (ce.judge0.com) — confirmed working, free, no auth ───
            const judge0LangMap: Record<string, number> = {
                python:     100,  // Python 3.12.5
                java:       91,   // Java (JDK 17.0.6)
                c:          103,  // C (GCC 14.1.0)
                cpp:        105,  // C++ (GCC 14.1.0)
                javascript: 97,   // JavaScript (Node.js 20.17.0)
            };

            const langId = judge0LangMap[language];
            if (!langId) {
                setOutput('Unsupported language.');
                setIsLoading(false);
                return;
            }

            const b64 = (str: string) => btoa(unescape(encodeURIComponent(str)));
            const dec = (str: string) => {
                if (!str) return '';
                try { return decodeURIComponent(escape(atob(str))); } catch { return atob(str); }
            };

            const judgeRes = await axios.post(
                'https://ce.judge0.com/submissions?base64_encoded=true&wait=true',
                {
                    language_id: langId,
                    source_code: b64(finalCode),
                    stdin: b64(userInput || ''),
                },
                { headers: { 'Content-Type': 'application/json' } }
            );

            const endTime = performance.now();
            setExecutionTime(Math.round(endTime - startTime));

            const { stdout, stderr, compile_output, message, status } = judgeRes.data;

            if (status.id === 3) {                         // Accepted
                setOutput(dec(stdout) || 'Code executed successfully (no output).');
            } else if (status.id === 6) {                  // Compilation Error
                setOutput(`Compilation Error:\n${dec(compile_output) || message}`);
            } else {
                let errMsg = dec(stderr) || dec(compile_output) || message || 'Runtime error.';
                if (errMsg.includes('NoSuchElementException') || errMsg.includes('EOFException')) {
                    errMsg += '\n\n💡 HINT: Type each input value on a new line in the "Standard Input (STDIN)" box below BEFORE clicking Run.';
                }
                setOutput(`Error (${status.description}):\n${errMsg}`);
            }

        } catch (error: any) {
            console.error('Execution Error:', error);
            setOutput(`Execution failed. Check your code and try again.\nDetails: ${error?.response?.data?.message || error?.message || 'Unknown error'}`);
        } finally {
            setIsLoading(false);
        }
    };

    const resetCode = () => {
        if (window.confirm('Reset code to boilerplate? Your current changes will be lost.')) {
            setCode(BOILERPLATE[language]);
            setOutput('');
            setExecutionTime(null);
            setUserInput('');
        }
    };

    const copyCode = () => {
        navigator.clipboard.writeText(code);
        alert('Code copied to clipboard!');
    };

    return (
        <PageWrapper>
            <SEO 
                title="ADV Lab - Free Online Java, Python, C++ Compiler & IDE" 
                description="Use ADV Lab's professional online code editor to practice Java, Python, C, and C++. High-performance IDE with real-time execution for students and developers."
                ogType="course"
            />
            <div className="min-h-screen bg-[#05060f] text-white font-sans selection:bg-primary/30 pt-[80px] md:pt-[100px] overflow-x-hidden flex flex-col">
                {/* Dynamic Background */}
                <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] right-[-10%] w-[80%] md:w-[50%] h-[50%] bg-red-600/10 blur-[120px] rounded-full animate-pulse"></div>
                    <div className="absolute bottom-[-10%] left-[-10%] w-[80%] md:w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full"></div>
                </div>

                {/* Top Control Bar */}
                <div className="relative z-20 px-3 md:px-4 pt-2 md:pt-4 pb-2">
                    <div className="max-w-[1700px] mx-auto bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-2xl md:rounded-[2rem] p-2 md:p-3 flex flex-col md:flex-row items-center justify-between gap-3 shadow-2xl">
                        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full md:w-auto px-1">
                            <div className="px-4 py-2 mr-1 border-r border-white/10 hidden sm:flex flex-col">
                                <span className="text-[9px] font-black tracking-widest text-red-500 uppercase">ADV Lab</span>
                                <span className="text-[10px] font-bold text-gray-500">v1.2.0</span>
                            </div>
                            {LANGUAGES.map((lang) => {
                                const Icon = lang.icon;
                                const isSelected = language === lang.id;
                                return (
                                    <button
                                        key={lang.id}
                                        onClick={() => setLanguage(lang.id)}
                                        className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all duration-300 whitespace-nowrap text-xs md:text-sm font-bold border ${
                                            isSelected
                                                ? 'bg-white text-black border-transparent shadow-lg scale-105'
                                                : 'text-gray-500 border-white/5 hover:border-white/20 hover:text-white hover:bg-white/5'
                                        }`}
                                    >
                                        <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-black' : lang.color}`} />
                                        {lang.name}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Practice Templates Dropdown */}
                        {LESSON_TEMPLATES[language] && (
                            <div className="flex items-center gap-2 px-4 py-2 border-l border-white/10 ml-2 relative">
                                <span className="text-[10px] font-black uppercase text-gray-500 hidden sm:inline shrink-0">Practice Lessons:</span>
                                <div className="relative isolate">
                                    <button 
                                        onClick={() => setIsLessonDropdownOpen(!isLessonDropdownOpen)}
                                        className="flex items-center justify-between gap-4 bg-[#0a0f1c] border border-white/10 rounded-lg px-4 py-1.5 min-w-[220px] text-xs font-bold text-red-500 outline-none hover:border-red-500/50 hover:bg-white/5 transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                                    >
                                        <span>-- Load Lesson Code --</span>
                                        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${isLessonDropdownOpen ? 'rotate-180' : ''}`} />
                                    </button>
                                    
                                    {isLessonDropdownOpen && (
                                        <>
                                            <div className="fixed inset-0 z-40" onClick={() => setIsLessonDropdownOpen(false)}></div>
                                            <div className="absolute top-full left-0 mt-2 w-[350px] max-h-[60vh] overflow-y-auto bg-[#0a0f1c] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] rounded-xl z-[100] py-2 custom-scrollbar flex flex-col">
                                                <div className="px-4 py-2 border-b border-white/5 mb-1 bg-black/40">
                                                    <span className="text-[9px] font-black tracking-widest text-gray-500 uppercase">{language} Playlists</span>
                                                </div>
                                                {Object.keys(LESSON_TEMPLATES[language]).map(lesson => (
                                                    <button
                                                        key={lesson}
                                                        onClick={() => {
                                                            const tmpl = LESSON_TEMPLATES[language][lesson];
                                                            setCode(tmpl);
                                                            setNeedsInput(checkNeedsInput(tmpl));
                                                            setOutput('');
                                                            setExecutionTime(null);
                                                            setIsLessonDropdownOpen(false);
                                                        }}
                                                        className="w-full text-left px-4 py-3 text-xs font-medium text-gray-400 hover:text-white hover:bg-red-500/10 transition-all duration-200 border-l-2 border-transparent hover:border-red-500 group"
                                                    >
                                                        <span className="group-hover:translate-x-1 pr-2 inline-block transition-transform duration-300 line-clamp-2">{lesson}</span>
                                                    </button>
                                                ))}
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        )}

                        <div className="flex items-center gap-2 md:gap-4 w-full md:w-auto justify-between md:justify-end border-t border-white/5 md:border-none pt-2 md:pt-0">
                            <div className="flex items-center bg-black/40 rounded-xl p-1 border border-white/10">
                                <button onClick={copyCode} className="p-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all" title="Copy Code">
                                    <Copy className="w-4 h-4 md:w-5 md:h-5" />
                                </button>
                                <button onClick={resetCode} className="p-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all" title="Reset Code">
                                    <RotateCcw className="w-4 h-4 md:w-5 md:h-5" />
                                </button>
                            </div>

                            <button
                                onClick={runCode}
                                disabled={isLoading}
                                className={`group relative flex items-center gap-2 md:gap-3 px-6 md:px-10 py-2.5 md:py-3.5 rounded-xl md:rounded-2xl font-black text-white transition-all overflow-hidden text-sm md:text-lg ${
                                    isLoading 
                                        ? 'bg-gray-800 cursor-not-allowed' 
                                        : 'bg-primary shadow-xl hover:shadow-primary/40'
                                }`}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                                {isLoading ? (
                                    <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                                ) : (
                                    <Play className="w-4 h-4 md:w-6 md:h-6 fill-current" />
                                )}
                                <span className="relative">{isLoading ? 'Running...' : 'Run Code'}</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 px-3 md:px-4 pb-4 overflow-y-auto md:overflow-hidden">
                    <div className="max-w-[1700px] mx-auto h-full grid grid-cols-1 lg:grid-cols-12 gap-4">
                        {/* Editor Section */}
                        <div className="lg:col-span-8 bg-[#1e1e1e] rounded-[1.5rem] md:rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl relative min-h-[400px] md:min-h-0 h-[60vh] md:h-full">
                            <div className="absolute top-4 md:top-6 right-4 md:right-8 z-30 pointer-events-none">
                                <span className="bg-black/80 backdrop-blur-md border border-white/10 text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] px-3 md:px-4 py-1.5 md:py-2 rounded-full text-red-500 shadow-xl">
                                    {language} MODE
                                </span>
                            </div>
                            <div className="h-full w-full pt-4">
                                <Editor
                                    height="100%"
                                    language={language === 'cpp' ? 'cpp' : language}
                                    value={code}
                                    theme="vs-dark"
                                    onMount={(editor) => {
                                        editorRef.current = editor;
                                        // Attach Monaco's internal listener — fires for typing, paste, undo, template load
                                        editor.onDidChangeModelContent(() => {
                                            const val = editor.getValue();
                                            setCode(val);
                                            setNeedsInput(checkNeedsInput(val));
                                        });
                                        // Check initial value on load
                                        setNeedsInput(checkNeedsInput(editor.getValue()));
                                    }}
                                    options={{
                                        fontSize: window.innerWidth < 768 ? 14 : 18,
                                        fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                                        minimap: { enabled: false },
                                        scrollBeyondLastLine: false,
                                        automaticLayout: true,
                                        padding: { top: 20, bottom: 20 },
                                        cursorSmoothCaretAnimation: "on",
                                        smoothScrolling: true,
                                        lineNumbers: 'on',
                                        renderLineHighlight: 'all',
                                        bracketPairColorization: { enabled: true },
                                    }}
                                />
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-4 flex flex-col gap-4 min-h-[400px] md:min-h-0 h-auto md:h-full">
                            {/* Lab Tips Section */}
                            <div className="bg-white/[0.02] border border-white/10 rounded-[1.5rem] p-4 space-y-3 hidden xl:block shrink-0">
                                <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400 flex items-center gap-2">
                                    <Award className="w-3.5 h-3.5 text-yellow-500" />
                                    ADV Lab Pro Tips
                                </h4>
                                <ul className="space-y-2">
                                    <li className="text-[10px] text-gray-500 flex items-start gap-2 leading-relaxed">
                                        <span className="text-red-500 font-bold shrink-0">•</span>
                                        <span>For Java, your entry class is automatically renamed to <b>Main</b>.</span>
                                    </li>
                                    <li className="text-[10px] text-gray-500 flex items-start gap-2 leading-relaxed">
                                        <span className="text-red-500 font-bold shrink-0">•</span>
                                        <span>Only <b>Standard Libraries</b> are supported in this cloud environment.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* ADV GitHub Integration Section */}
                            <div className="bg-[#0a0f1c]/80 backdrop-blur-xl rounded-[1.5rem] border border-white/10 flex flex-col p-4 shadow-xl shrink-0" id="adv-github-integration">
                                <div className="flex items-center gap-2 mb-3">
                                    <Github className="w-4 h-4 text-gray-400" />
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Save to GitHub</span>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <input 
                                        type="url" 
                                        placeholder="Paste GitHub Repo URL" 
                                        value={githubRepoUrl}
                                        onChange={handleSaveRepoUrl}
                                        className="w-full bg-black/50 border border-white/10 rounded-lg px-3 py-2 text-xs font-mono text-blue-200 outline-none focus:border-blue-500/50 transition-colors placeholder:text-gray-700" 
                                        id="adv-github-repo"
                                    />
                                    <button 
                                        onClick={submitToGithub}
                                        id="adv-submit-github"
                                        className="w-full bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg px-4 py-2 flex items-center justify-center gap-2 transition-all group"
                                    >
                                        <Github className="w-4 h-4 group-hover:text-white transition-colors text-gray-400" />
                                        <span className="text-xs font-bold text-gray-300 group-hover:text-white transition-colors">Copy & Submit Code</span>
                                    </button>
                                </div>
                            </div>

                            {/* Unified Interactive Terminal */}
                            <div className={`flex-1 bg-[#05060f] rounded-[1.5rem] md:rounded-[2.5rem] border overflow-hidden shadow-2xl flex flex-col relative min-h-[400px] md:min-h-0 transition-all duration-500 ${/Scanner|cin|scanf|input/.test(code) ? 'border-blue-500/50 shadow-[0_0_40px_rgba(59,130,246,0.15)]' : 'border-white/10'}`}>
                                <div className="absolute inset-0 bg-blue-500/5 pointer-events-none"></div>
                                
                                {/* Terminal Header */}
                                <div className="bg-white/[0.02] p-4 flex items-center justify-between border-b border-white/10 relative z-10 shrink-0">
                                    <div className="flex items-center gap-3">
                                        <div className="flex gap-1">
                                            <div className="w-2.5 h-2.5 rounded-full bg-red-400/30"></div>
                                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/30"></div>
                                            <div className="w-2.5 h-2.5 rounded-full bg-green-400/30"></div>
                                        </div>
                                        <span className="text-[10px] font-black tracking-widest text-gray-500 uppercase ml-2 flex items-center gap-2"><Terminal className="w-3 h-3 text-blue-400"/> ADV Terminal</span>
                                    </div>
                                    {executionTime && (
                                        <div className="flex items-center gap-2 px-2.5 py-1 bg-green-500/10 rounded-full border border-green-500/20">
                                            <Zap className="w-3 h-3 text-green-500" />
                                            <span className="text-[10px] font-mono text-green-400 font-bold">{executionTime}ms</span>
                                        </div>
                                    )}
                                </div>
                                
                                {/* STDOUT (Output) */}
                                <div className="flex-1 p-4 md:p-6 font-mono text-xs md:text-sm overflow-y-auto whitespace-pre-wrap leading-relaxed relative z-10 custom-scrollbar border-b border-white/10">
                                    <div className="text-[9px] uppercase font-black text-gray-600 mb-2 tracking-widest">Compiler Output</div>
                                    {output ? (
                                        <div className={output.includes('Error') || output.includes('line') ? 'text-red-400' : 'text-green-300'}>
                                            <span className="inline-block mr-2 opacity-30 select-none">#</span>
                                            {output}
                                        </div>
                                    ) : (
                                        <div className="opacity-20 text-gray-500 mt-2 flex items-center gap-2">
                                            <span className="animate-pulse">_</span> Waiting for execution...
                                        </div>
                                    )}
                                </div>
                                
                                {/* STDIN (Input) */}
                                <div className="h-[180px] md:h-[200px] flex flex-col relative z-10 shrink-0 bg-black/60">
                                    {/* STDIN Header */}
                                    <div className="flex items-center justify-between px-4 py-2 bg-blue-500/10 border-b border-white/5">
                                        <span className="text-[9px] uppercase font-black tracking-widest text-blue-400/90 flex items-center gap-1.5">
                                            <Code2 className="w-3 h-3"/> Standard Input (STDIN)
                                        </span>
                                        {needsInput ? (
                                            <span className="text-[8px] font-bold text-blue-400 animate-pulse bg-blue-500/20 px-2 py-0.5 rounded-full uppercase tracking-wider">
                                                ⚡ Input Required
                                            </span>
                                        ) : (
                                            <span className="text-[8px] font-bold text-gray-500 uppercase tracking-wider">
                                                Optional
                                            </span>
                                        )}
                                    </div>

                                    {/* Textarea — always enabled */}
                                    <textarea
                                        value={userInput}
                                        onChange={(e) => setUserInput(e.target.value)}
                                        placeholder="Type input values here (one per line)..."
                                        className="flex-1 bg-transparent px-4 py-3 font-mono text-xs md:text-sm outline-none resize-none text-blue-200 placeholder:text-gray-600 custom-scrollbar"
                                    />

                                    {/* Run with Input Button — always enabled */}
                                    <button
                                        onClick={runCode}
                                        disabled={isLoading}
                                        className={`mx-3 mb-3 flex items-center justify-center gap-2 py-2 px-4 rounded-xl font-black text-[11px] uppercase tracking-widest transition-all duration-300 ${
                                            !isLoading
                                                ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] cursor-pointer'
                                                : 'bg-white/5 text-gray-500 cursor-not-allowed'
                                        }`}
                                    >
                                        <Play className="w-3 h-3" />
                                        {isLoading ? 'Running...' : '▶ Run with Input'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Congrats Modal */}
            {showCongratsModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowCongratsModal(false)}></div>
                    <div className="relative bg-[#0a0f1c] border border-white/10 rounded-3xl p-8 max-w-sm w-full shadow-2xl flex flex-col items-center text-center animate-[fade-in_0.3s_ease-out]">
                        {/* Decorative background glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-green-500/20 blur-[60px] rounded-full pointer-events-none"></div>
                        
                        <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-green-500/20 to-emerald-500/20 border border-green-500/30 flex items-center justify-center mb-6 relative z-10 shadow-[0_0_30px_rgba(34,197,94,0.2)]">
                            <PartyPopper className="w-10 h-10 text-green-400" />
                        </div>
                        
                        <h3 className="text-2xl font-black text-white mb-3 relative z-10">
                            Code Copied! <span className="text-xl">🎉</span>
                        </h3>
                        
                        <p className="text-gray-400 text-sm mb-8 leading-relaxed relative z-10">
                            Great job! Your code is now securely in your clipboard. Head over to your GitHub repository, paste the code, and commit your awesome work.
                        </p>
                        
                        <button
                            onClick={handleConfirmGithubRedirect}
                            className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] flex items-center justify-center gap-2 relative z-10 group"
                        >
                            <CheckCircle2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            Take Me To GitHub
                        </button>
                    </div>
                </div>
            )}
        </PageWrapper>
    );
};

export default PlaygroundPage;
