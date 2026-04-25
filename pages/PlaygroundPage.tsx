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
            if (!ep.notes || !ep.notes.code) return acc;
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
    const [output, setOutput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [executionTime, setExecutionTime] = useState<number | null>(null);
    const editorRef = useRef<any>(null);

    useEffect(() => {
        const boiler = BOILERPLATE[language];
        setCode(boiler);
        setOutput('');
        setExecutionTime(null);
        // Directly set Monaco editor value via ref (uncontrolled pattern)
        if (editorRef.current) {
            editorRef.current.setValue(boiler);
        }
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

    const [popup, setPopup] = useState<{ title: string, msg: string, type: 'success' | 'error' | 'warning', action?: { label: string, onClick: () => void } } | null>(null);

    const submitToGithub = () => {
        if (!githubRepoUrl) {
            setPopup({ 
                title: "Where's the Link?", 
                msg: "Please enter your GitHub repository URL so I can save your code!",
                type: 'error'
            });
            return;
        }

        const githubRegex = /^https?:\/\/(www\.)?github\.com\/[a-zA-Z0-9-]+\/[a-zA-Z0-9._-]+/;
        if (!githubRegex.test(githubRepoUrl)) {
            setPopup({ 
                title: "Invalid GitHub URL", 
                msg: "Oops! That doesn't look like a valid GitHub link. Please use: https://github.com/user/repo",
                type: 'error'
            });
            return;
        }

        navigator.clipboard.writeText(code);
        setPopup({
            title: "Code Ready! 🚀",
            msg: "Your code is copied and ready to be committed. Ready to go to GitHub?",
            type: 'success',
            action: {
                label: "Take Me To GitHub",
                onClick: () => {
                    setPopup(null);
                    window.open(githubRepoUrl, '_blank');
                }
            }
        });
    };

    const handleConfirmGithubRedirect = () => {
        setPopup(null);
        window.open(githubRepoUrl, '_blank');
    };

    const copyCode = () => {
        navigator.clipboard.writeText(code);
        setPopup({
            title: "Code Copied!",
            msg: "Your code is now in the clipboard. Happy coding!",
            type: 'success'
        });
    };

    const runCode = async () => {
        setIsLoading(true);
        setOutput('Connecting to Judge0...');
        setExecutionTime(null);
        const startTime = performance.now();

        try {
            // Always get the LIVE code from Monaco editor ref to avoid stale state
            const currentCode = editorRef.current ? editorRef.current.getValue() : code;
            let finalCode = currentCode;

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
                    stdin: b64(''),
                },
                { headers: { 'Content-Type': 'application/json' } }
            );

            const endTime = performance.now();
            setExecutionTime(Math.round(endTime - startTime));

            const data = judgeRes.data;
            console.log('[ADV Lab] Response:', JSON.stringify(data));

            const safeDecode = (s: string) => {
                if (!s) return '';
                try { return decodeURIComponent(escape(atob(s))); } catch { try { return atob(s); } catch { return s; } }
            };

            const statusId   = data?.status?.id;
            const statusDesc = data?.status?.description || 'Unknown';
            const outText    = safeDecode(data?.stdout || '');
            const errText    = safeDecode(data?.stderr || '');
            const compText   = safeDecode(data?.compile_output || '');
            const msgText    = data?.message || '';

            console.log('[ADV Lab] statusId:', statusId, '| stdout:', outText);

            if (statusId === 3) {
                setOutput(outText.trim() || '✅ Code executed successfully (no output).');
            } else if (statusId === 6) {
                setOutput(`❌ Compilation Error:\n${compText || msgText}`);
            } else if (statusId === 5) {
                setOutput('⏱️ Time Limit Exceeded. Check for infinite loops.');
            } else {
                let errMsg = errText || compText || msgText || 'Runtime error occurred.';
                if (errMsg.includes('NoSuchElementException') || errMsg.includes('EOFException')) {
                    errMsg += '\n\n💡 HINT: Enter each input on a new line in the STDIN box BEFORE clicking Run.';
                }
                setOutput(`❌ ${statusDesc}:\n${errMsg}`);
            }

        } catch (error: any) {
            console.error('[ADV Lab] Error:', error);
            setOutput(`❌ Execution failed: ${error?.response?.data?.message || error?.message || 'Unknown error'}`);
        } finally {
            setIsLoading(false);
        }
    };

    const resetCode = () => {
        setPopup({
            title: "Are you sure? 🤔",
            msg: "This will reset your code to the default boilerplate. Your current progress will be lost forever!",
            type: 'warning',
            action: {
                label: "Yes, Reset Everything",
                onClick: () => {
                    setCode(BOILERPLATE[language]);
                    setOutput('');
                    setExecutionTime(null);
                    setPopup(null);
                    if (editorRef.current) {
                        editorRef.current.setValue(BOILERPLATE[language]);
                    }
                }
            }
        });
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
                                                            setOutput('');
                                                            setExecutionTime(null);
                                                            setIsLessonDropdownOpen(false);
                                                            // Directly update Monaco editor (uncontrolled)
                                                            if (editorRef.current) {
                                                                editorRef.current.setValue(tmpl);
                                                            }
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

                        <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end border-t md:border-t-0 border-white/5 pt-2 md:pt-0">
                            <div className="flex items-center bg-[#0a0f1c] rounded-xl p-1 border border-white/10 shadow-inner">
                                <button onClick={copyCode} className="p-2.5 rounded-lg text-gray-500 hover:text-white hover:bg-white/5 transition-all group" title="Copy Code">
                                    <Copy className="w-4 h-4 md:w-4 md:h-4 group-active:scale-90 transition-transform" />
                                </button>
                                <div className="w-[1px] h-4 bg-white/5 mx-1"></div>
                                <button onClick={resetCode} className="p-2.5 rounded-lg text-gray-500 hover:text-red-400 hover:bg-red-500/5 transition-all group" title="Reset Code">
                                    <RotateCcw className="w-4 h-4 md:w-4 md:h-4 group-active:rotate-[-45deg] transition-transform" />
                                </button>
                            </div>

                            <button
                                onClick={runCode}
                                disabled={isLoading}
                                className={`group relative flex items-center justify-center gap-3 pl-6 pr-8 py-3 rounded-xl md:rounded-2xl font-black text-white transition-all duration-500 overflow-hidden text-sm md:text-base border shadow-2xl ${
                                    isLoading 
                                        ? 'bg-gray-900 border-white/5 cursor-not-allowed grayscale' 
                                        : 'bg-gradient-to-br from-blue-600 to-indigo-700 border-blue-400/30 hover:border-blue-400/60 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] active:scale-[0.98]'
                                }`}
                            >
                                {/* Premium Shimmer Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]"></div>
                                
                                <div className={`flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 border border-white/10 shadow-inner overflow-hidden ${isLoading ? 'animate-pulse' : 'group-hover:scale-110 transition-transform'}`}>
                                    {isLoading ? (
                                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    ) : (
                                        <Play className="w-4 h-4 fill-current text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
                                    )}
                                </div>
                                
                                <div className="flex flex-col items-start leading-none shrink-0">
                                    <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.15em] opacity-60">System</span>
                                    <span className="text-sm md:text-base font-black tracking-tight">{isLoading ? 'Loading...' : 'Run Code'}</span>
                                </div>
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
                                    defaultValue={BOILERPLATE['java']}
                                    theme="vs-dark"
                                    onMount={(editor) => {
                                        editorRef.current = editor;
                                        // Listen to ALL content changes reliably
                                        editor.onDidChangeModelContent(() => {
                                            const val = editor.getValue();
                                            setCode(val);
                                        });
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
                        <div className="lg:col-span-4 flex flex-col gap-3 min-h-[400px] md:min-h-0 h-auto md:h-full overflow-hidden">
                            {/* Lab Tips Section — only on very large screens */}
                            <div className="bg-white/[0.02] border border-white/10 rounded-[1.5rem] p-4 space-y-3 hidden 2xl:block shrink-0">
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

                            {/* ADV GitHub Integration — compact strip */}
                            <div className="bg-[#0a0f1c]/80 backdrop-blur-xl rounded-xl border border-white/10 flex items-center gap-2 px-3 py-2 shadow-xl shrink-0" id="adv-github-integration">
                                <Github className="w-3.5 h-3.5 text-gray-500 shrink-0" />
                                <input 
                                    type="url" 
                                    placeholder="Paste GitHub Repo URL to save code" 
                                    value={githubRepoUrl}
                                    onChange={handleSaveRepoUrl}
                                    className="flex-1 bg-transparent text-[11px] font-mono text-blue-200 outline-none placeholder:text-gray-700 min-w-0" 
                                    id="adv-github-repo"
                                />
                                <button 
                                    onClick={submitToGithub}
                                    id="adv-submit-github"
                                    className="shrink-0 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg px-3 py-1.5 flex items-center gap-1.5 transition-all group"
                                >
                                    <Github className={`w-3 h-3 transition-colors ${githubRepoUrl && /^https?:\/\/(www\.)?github\.com\/[a-zA-Z0-9-]+\/[a-zA-Z0-9._-]+/.test(githubRepoUrl) ? 'text-green-400' : 'text-gray-400'} group-hover:text-white`} />
                                    <span className="text-[10px] font-bold text-gray-300 group-hover:text-white transition-colors whitespace-nowrap">Copy & Save</span>
                                </button>
                            </div>

                            {/* CMD Style Terminal — Output Only */}
                            <div className={`flex-1 bg-black rounded-2xl border border-white/10 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col relative min-h-[500px] md:min-h-0 transition-all duration-500`}>
                                
                                {/* Terminal Header — Windows Style */}
                                <div className="bg-[#1a1a1a] p-3 flex items-center justify-between border-b border-black relative z-10 shrink-0">
                                    <div className="flex items-center gap-3">
                                        <div className="flex gap-1.5 grayscale opacity-50">
                                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                        </div>
                                        <span className="text-[10px] font-mono tracking-wider text-gray-400 ml-2 flex items-center gap-2 italic">
                                            <Terminal className="w-3.5 h-3.5 text-primary"/> C:\Windows\System32\cmd.exe — ADV Lab
                                        </span>
                                    </div>
                                    {executionTime && (
                                        <div className="flex items-center gap-2 px-2.5 py-0.5 bg-white/5 rounded border border-white/10">
                                            <Zap className="w-3 h-3 text-yellow-500" />
                                            <span className="text-[9px] font-mono text-gray-400">{executionTime}ms</span>
                                        </div>
                                    )}
                                </div>
                                
                                {/* Unified Console Area */}
                                <div 
                                    className="flex-1 p-6 font-mono text-sm md:text-base overflow-y-auto leading-relaxed relative z-10 custom-scrollbar flex flex-col gap-4"
                                    onClick={() => document.getElementById('cmd-input')?.focus()}
                                >
                                    {/* Initial Directory Line */}
                                    <div className="flex items-center gap-2 opacity-60">
                                        <span className="text-primary font-bold">C:\ADV-LAB&gt;</span>
                                        <span className="text-gray-300">adv run {language}</span>
                                    </div>

                                    {/* Output Area */}
                                    <div className="whitespace-pre-wrap flex-1 scroll-auto">
                                        {output ? (
                                            <div className={output.startsWith('❌') ? 'text-red-400' : 'text-gray-100'}>
                                                {output}
                                            </div>
                                        ) : (
                                            <div className="text-gray-600 italic text-sm">
                                                Microsoft Windows [Version 10.0.19045.5011]<br />
                                                (c) Microsoft Corporation. All rights reserved.<br /><br />
                                                Preparing environment... Ready.
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Global Character Popup (Success/Error) */}
            {popup && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setPopup(null)}></div>
                    <div className={`relative bg-[#0d1117] border rounded-[2.5rem] p-6 md:p-8 max-w-sm w-full shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col items-center text-center animate-scale-in ${
                        popup.type === 'error' ? 'border-red-500/20 shadow-red-500/10' : 
                        popup.type === 'warning' ? 'border-yellow-500/20 shadow-yellow-500/10' :
                        'border-green-500/20 shadow-green-500/10'}`}>
                        
                        <div className="absolute -top-14 md:-top-16 -right-2 md:-right-4 w-20 h-20 md:w-28 md:h-28 animate-float pointer-events-none overflow-hidden rounded-full z-10 border border-white/5 bg-black/20">
                            <img 
                                src={
                                    popup.type === 'error' ? "/coder_robot_helper.png" : 
                                    popup.type === 'warning' ? "/robot_thinking.png" :
                                    "/robot_success.png"
                                } 
                                alt="Robot Helper" 
                                className="w-full h-full object-cover mix-blend-screen scale-125" 
                            />
                        </div>
                        
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border ${
                            popup.type === 'error' ? 'bg-red-500/10 border-red-500/20' : 
                            popup.type === 'warning' ? 'bg-yellow-500/10 border-yellow-500/20' :
                            'bg-green-500/10 border-green-500/20'}`}>
                            {popup.type === 'error' ? (
                                <Zap className="w-8 h-8 text-red-500 animate-pulse" />
                            ) : popup.type === 'warning' ? (
                                <RotateCcw className="w-8 h-8 text-yellow-500 animate-spin-slow" />
                            ) : (
                                <PartyPopper className="w-8 h-8 text-green-500" />
                            )}
                        </div>
                        
                        <h3 className="text-2xl font-black text-white mb-3">
                            {popup.title}
                        </h3>
                        
                        <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                            {popup.msg}
                        </p>
                        
                        <div className="flex flex-col gap-3 w-full">
                            {popup.action ? (
                                <button
                                    onClick={popup.action.onClick}
                                    className={`w-full font-black py-4 px-6 rounded-2xl transition-all shadow-xl active:scale-95 flex items-center justify-center gap-2 ${
                                        popup.type === 'warning' ? 'bg-yellow-500 hover:bg-yellow-400 text-black' : 'bg-green-500 hover:bg-green-400 text-black'
                                    }`}
                                >
                                    {popup.type === 'warning' ? <RotateCcw className="w-5 h-5" /> : <CheckCircle2 className="w-5 h-5" />}
                                    {popup.action.label}
                                </button>
                            ) : (
                                <button
                                    onClick={() => setPopup(null)}
                                    className={`w-full text-black font-black py-4 px-6 rounded-2xl transition-all shadow-xl active:scale-95 ${popup.type === 'error' ? 'bg-white hover:bg-gray-200' : 'bg-green-500 hover:bg-green-400'}`}
                                >
                                    {popup.type === 'error' ? 'Got it, let me fix!' : 'Awesome!'}
                                </button>
                            )}
                            
                            {popup.action && (
                                <button
                                    onClick={() => setPopup(null)}
                                    className="w-full text-gray-500 font-bold py-2 hover:text-white transition-colors text-xs"
                                >
                                    Maybe Later
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </PageWrapper>
    );
};

export default PlaygroundPage;
