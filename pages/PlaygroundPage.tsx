import React, { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import { Play, RotateCcw, Copy, Share2, Terminal, Code2, Coffee, Zap, Award } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import SEO from '../components/SEO';
import axios from 'axios';

const BOILERPLATE: Record<string, string> = {
    python: `def main():\n    print("Hello from ADV Indian Coder!")\n\nif __name__ == "__main__":\n    main()`,
    java: `public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello from ADV Indian Coder!");\n    }\n}`,
    c: `#include <stdio.h>\n\nint main() {\n    printf("Hello from ADV Indian Coder!\\n");\n    return 0;\n}`,
    cpp: `#include <iostream>\n\nint main() {\n    std::cout << "Hello from ADV Indian Coder!" << std::endl;\n    return 0;\n}`,
    javascript: `console.log("Hello from ADV Indian Coder!");`,
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
    const [userInput, setUserInput] = useState('');
    const [output, setOutput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [executionTime, setExecutionTime] = useState<number | null>(null);

    useEffect(() => {
        setCode(BOILERPLATE[language]);
        setOutput('');
        setExecutionTime(null);
        setUserInput('');
    }, [language]);

    const runCode = async () => {
        setIsLoading(true);
        setOutput('Connecting to Judge0...');
        setExecutionTime(null);
        const startTime = performance.now();

        try {
            // Function to handle UTF-8 base64 encoding
            const encode = (str: string) => {
                return btoa(unescape(encodeURIComponent(str)));
            };

            // Function to handle UTF-8 base64 decoding
            const decode = (str: string) => {
                if (!str) return '';
                try {
                    return decodeURIComponent(escape(atob(str)));
                } catch (e) {
                    return atob(str);
                }
            };

            // Judge0 CE Language IDs
            const judge0LangMap: Record<string, number> = {
                python: 100,      // Python 3.12.5
                java: 91,        // Java (JDK 17.0.6)
                c: 103,          // C (GCC 14.1.0)
                cpp: 105,        // C++ (GCC 14.1.0)
                javascript: 97   // Node.js 20.17.0
            };

            const response = await axios.post('https://ce.judge0.com/submissions', {
                language_id: judge0LangMap[language],
                source_code: encode(code),
                stdin: encode(userInput),
            }, {
                params: {
                    base64_encoded: 'true',
                    wait: 'true'
                }
            });

            const endTime = performance.now();
            setExecutionTime(Math.round(endTime - startTime));

            const { stdout, stderr, compile_output, message, status } = response.data;

            if (status.id === 3) { // Success
                setOutput(decode(stdout) || 'Code executed successfully (no output).');
            } else if (status.id === 6) { // Compilation Error
                setOutput(`Compilation Error:\n${decode(compile_output) || message}`);
            } else {
                const errorOutput = decode(stderr) || decode(compile_output) || message || 'Unknown error';
                setOutput(`Execution Error (${status.description}):\n${errorOutput}`);
            }

        } catch (error: any) {
            console.error('Execution Error:', error);
            setOutput('Error executing code. The public server might be down or your code has an infinite loop.');
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
                                    onChange={(value) => setCode(value || '')}
                                    options={{
                                        fontSize: window.innerWidth < 768 ? 14 : 18,
                                        fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                                        minimap: { enabled: false },
                                        scrollBeyondLastLine: false,
                                        automaticLayout: true,
                                        padding: { top: 20, bottom: 20 },
                                        cursorSmoothCaretAnimation: true,
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
                            {/* Input Field */}
                            <div className={`h-[150px] md:h-[200px] bg-[#0a0f1c]/80 backdrop-blur-xl rounded-[1.5rem] md:rounded-[2.5rem] border transition-all duration-500 flex flex-col ${
                                code.match(/Scanner|input\(|scanf|cin/g) 
                                ? 'border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.1)]' 
                                : 'border-white/10'
                            }`}>
                                <div className="px-5 md:px-6 py-3 md:py-4 border-b border-white/5 bg-white/5 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <Terminal className="w-3 md:w-3.5 h-3 md:h-3.5 text-blue-400" />
                                        <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">INPUT AREA</span>
                                    </div>
                                    {code.match(/Scanner|input\(|scanf|cin/g) && (
                                        <span className="text-[8px] md:text-[9px] font-bold text-blue-400 animate-pulse bg-blue-500/10 px-2 py-0.5 rounded-full">Interactive</span>
                                    )}
                                </div>
                                <div className="flex-1 flex flex-col p-1.5 md:p-2">
                                    <textarea
                                        value={userInput}
                                        onChange={(e) => setUserInput(e.target.value)}
                                        placeholder="Type inputs here..."
                                        className="flex-1 bg-transparent px-3 md:px-4 py-2 font-mono text-xs md:text-sm outline-none resize-none text-blue-200 placeholder:text-gray-700"
                                    />
                                    <div className="px-3 py-2 bg-white/[0.02] rounded-xl m-1 border border-white/5">
                                        <p className="text-[9px] text-gray-500 line-clamp-1">
                                            Tip: All inputs at once!
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Terminal Output */}
                            <div className="flex-1 bg-[#05060f] rounded-[1.5rem] md:rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl flex flex-col relative min-h-[250px] md:min-h-0">
                                <div className="absolute inset-0 bg-blue-500/5 pointer-events-none"></div>
                                <div className="bg-white/[0.02] p-4 md:p-5 flex items-center justify-between border-b border-white/10 relative z-10">
                                    <div className="flex items-center gap-3">
                                        <div className="flex gap-1">
                                            <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-red-400/30"></div>
                                            <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-yellow-400/30"></div>
                                            <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-green-400/30"></div>
                                        </div>
                                        <span className="text-[10px] md:text-xs font-black tracking-widest text-gray-500 uppercase ml-2">Output</span>
                                    </div>
                                    {executionTime && (
                                        <div className="flex items-center gap-2 px-2.5 py-1 bg-green-500/10 rounded-full border border-green-500/20">
                                            <Zap className="w-2.5 md:w-3 h-2.5 md:h-3 text-green-500" />
                                            <span className="text-[8px] md:text-[10px] font-mono text-green-400 font-bold">{executionTime}ms</span>
                                        </div>
                                    )}
                                </div>
                                <div className="flex-1 p-4 md:p-8 font-mono text-xs md:text-sm overflow-y-auto whitespace-pre-wrap leading-relaxed relative z-10">
                                    {output ? (
                                        <div className={output.includes('Error') || output.includes('line') ? 'text-red-400' : 'text-green-300'}>
                                            <span className="inline-block mr-2 opacity-30">#</span>
                                            {output}
                                        </div>
                                    ) : (
                                        <div className="flex flex-col items-center justify-center h-full text-center space-y-4 md:space-y-6 opacity-20">
                                            <Terminal className="w-10 md:w-16 h-10 md:h-16 text-gray-500" />
                                            <p className="max-w-[200px] text-[10px] md:text-xs font-medium leading-loose">Tap "Run Code" to execute.</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageWrapper>
    );
};

export default PlaygroundPage;
