import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Terminal, CheckCircle, AlertCircle, RefreshCw, Github, Trophy, Flame, Brain, Sparkles } from 'lucide-react';

type Tab = 'java' | 'python' | 'exam';

export default function InteractiveSimulator() {
    const [activeTab, setActiveTab] = useState<Tab>('java');
    const [executionState, setExecutionState] = useState<'idle' | 'running' | 'success'>('idle');
    const [consoleLogs, setConsoleLogs] = useState<string[]>([]);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [showExplanation, setShowExplanation] = useState(false);
    const logContainerRef = useRef<HTMLDivElement>(null);

    // Auto scroll console logs
    useEffect(() => {
        if (logContainerRef.current) {
            logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
        }
    }, [consoleLogs]);

    // Code templates
    const javaCode = `public class ADVLab {
    public static void main(String[] args) {
        int[] nums = {2, 7, 11, 15};
        int target = 9;
        
        System.out.println("Executing TwoSum solver...");
        int[] result = solve(nums, target);
        System.out.println("Indices: [" + result[0] + ", " + result[1] + "]");
    }
}`;

    const pythonCode = `def check_streak(days):
    print(f"Verifying streak: {days} days")
    if days >= 30:
        return "🔥 Legendary Streak Active!"
    return "⚡ Keep Coding Daily!"

# Sync with GitHub and check
print(check_streak(45))`;

    const handleRunCode = () => {
        if (executionState === 'running') return;
        
        setExecutionState('running');
        setConsoleLogs([]);

        if (activeTab === 'java') {
            const steps = [
                'Compiling ADVLab.java...',
                'Initializing Java Virtual Machine...',
                'Running main method...',
                'Executing TwoSum solver...',
                '✓ Test Case 1 Passed (nums=[2,7,11,15], target=9) -> [0,1]',
                '✓ Test Case 2 Passed (nums=[3,2,4], target=6) -> [1,2]',
                '✓ Test Case 3 Passed (nums=[3,3], target=6) -> [0,1]',
                '🎉 Execution Success: All test cases passed! (0ms)'
            ];
            
            steps.forEach((step, index) => {
                setTimeout(() => {
                    setConsoleLogs(prev => [...prev, step]);
                    if (index === steps.length - 1) {
                        setExecutionState('success');
                    }
                }, (index + 1) * 350);
            });
        } else if (activeTab === 'python') {
            const steps = [
                'Running python streak.py...',
                'Connecting to GitHub API...',
                'Verifying repository: ADVindiancoder/streaks...',
                'Verifying streak: 45 days',
                '✓ Daily commit verified successfully.',
                '🎉 Output: 🔥 Legendary Streak Active!',
                '🎉 Execution Success (12ms)'
            ];

            steps.forEach((step, index) => {
                setTimeout(() => {
                    setConsoleLogs(prev => [...prev, step]);
                    if (index === steps.length - 1) {
                        setExecutionState('success');
                    }
                }, (index + 1) * 350);
            });
        }
    };

    // Reset code state on tab change
    const handleTabChange = (tab: Tab) => {
        setActiveTab(tab);
        setExecutionState('idle');
        setConsoleLogs([]);
        setSelectedAnswer(null);
        setShowExplanation(false);
    };

    return (
        <div className="relative w-full">
            {/* 1. FLOATING DECORATIONS */}
            {/* GitHub Sync Badge */}
            <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -left-6 z-20 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 shadow-lg text-[10px] font-mono text-gray-300"
            >
                <Github size={12} className="text-white" />
                <span>Synced: Cloud Environment</span>
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
            </motion.div>

            {/* Streak Flame Badge */}
            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -top-10 -right-4 z-20 hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-orange-500/20 to-yellow-500/20 backdrop-blur-md border border-orange-500/30 shadow-lg text-xs font-black text-orange-400"
            >
                <Flame size={14} className="fill-current text-orange-500 animate-pulse" />
                <span>45 Days Streak</span>
            </motion.div>

            {/* Trophy Badge */}
            <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                className="absolute -bottom-6 -right-6 z-20 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 backdrop-blur-md border border-yellow-500/30 shadow-lg text-xs font-black text-yellow-500"
            >
                <Trophy size={14} className="text-yellow-400" />
                <span>Rank #15 (+150 XP)</span>
            </motion.div>

            {/* Neon Accent Glow */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-[2.2rem] opacity-30 blur-lg group-hover:opacity-40 transition duration-1000"></div>

            {/* 2. MAIN SIMULATOR BOX */}
            <div className="relative overflow-hidden rounded-[2rem] bg-[#090d1a]/85 backdrop-blur-2xl border border-white/10 shadow-2xl flex flex-col min-h-[460px] max-w-full">
                
                {/* Header Window Bar */}
                <div className="flex items-center justify-between px-6 py-4 bg-white/[0.02] border-b border-white/5 shrink-0">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/40"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/40"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/40"></div>
                    </div>
                    
                    {/* Navigation Tabs */}
                    <div className="flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/5">
                        <button
                            onClick={() => handleTabChange('java')}
                            className={`px-3 py-1 text-[11px] font-bold rounded-full transition-all ${activeTab === 'java' ? 'bg-primary text-white shadow-md' : 'text-gray-400 hover:text-white'}`}
                        >
                            Java
                        </button>
                        <button
                            onClick={() => handleTabChange('python')}
                            className={`px-3 py-1 text-[11px] font-bold rounded-full transition-all ${activeTab === 'python' ? 'bg-purple-600 text-white shadow-md' : 'text-gray-400 hover:text-white'}`}
                        >
                            Python
                        </button>
                        <button
                            onClick={() => handleTabChange('exam')}
                            className={`px-3 py-1 text-[11px] font-bold rounded-full transition-all flex items-center gap-1 ${activeTab === 'exam' ? 'bg-orange-500 text-white shadow-md' : 'text-gray-400 hover:text-white'}`}
                        >
                            <Brain size={10} />
                            ExamHub
                        </button>
                    </div>
                </div>

                {/* 3. SIMULATOR CONTENT */}
                <div className="flex-1 p-6 flex flex-col justify-between overflow-y-auto">
                    <AnimatePresence mode="wait">
                        
                        {/* Tab 1 & 2: Coding Compiler */}
                        {activeTab !== 'exam' && (
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="flex-1 flex flex-col justify-between"
                            >
                                {/* Code Editor Visual */}
                                <div className="font-mono text-xs text-left leading-relaxed text-gray-300 bg-black/20 p-4 rounded-2xl border border-white/5 mb-4 overflow-x-auto whitespace-pre">
                                    {activeTab === 'java' ? (
                                        <>
                                            <span className="text-purple-400">public class</span> <span className="text-yellow-200">ADVLab</span> {'{\n'}
                                            <span className="text-purple-400">    public static void</span> <span className="text-blue-300">main</span>(String[] args) {'{\n'}
                                            <span className="text-gray-500">        // Input nums=[2,7,11,15], target=9</span>{'\n'}
                                            <span className="text-purple-400">        int</span>[] nums = {'{'}2, 7, 11, 15{'};\n'}
                                            <span className="text-purple-400">        int</span> target = 9;{'\n'}
                                            {'\n'}
                                            <span className="text-blue-300">        System</span>.out.println(<span className="text-green-300">"Executing..."</span>);{'\n'}
                                            <span className="text-purple-400">        int</span>[] res = <span className="text-yellow-200">solve</span>(nums, target);{'\n'}
                                            {'    }\n}'}
                                        </>
                                    ) : (
                                        <>
                                            <span className="text-purple-400">def</span> <span className="text-yellow-200">check_streak</span>(days):{'\n'}
                                            <span className="text-blue-300">    print</span>(f<span className="text-green-300">"Verifying streak: {'{'}days{'}'} days"</span>){'\n'}
                                            <span className="text-purple-400">    if</span> days &gt;= 30:{'\n'}
                                            <span className="text-purple-400">        return</span> <span className="text-green-300">"🔥 Legendary Streak Active!"</span>{'\n'}
                                            <span className="text-purple-400">    return</span> <span className="text-green-300">"⚡ Keep Coding Daily!"</span>{'\n'}
                                            {'\n'}
                                            <span className="text-gray-500"># Verify streak of 45 days</span>{'\n'}
                                            <span className="text-blue-300">print</span>(check_streak(45))
                                        </>
                                    )}
                                </div>

                                {/* Console Logger Panel */}
                                <div className="flex-1 min-h-[120px] bg-black/40 border border-white/5 rounded-2xl p-4 flex flex-col justify-between font-mono text-[10px] text-left">
                                    <div className="flex items-center gap-1.5 text-gray-500 border-b border-white/5 pb-2 mb-2">
                                        <Terminal size={12} />
                                        <span>TERMINAL LOGS</span>
                                    </div>
                                    <div ref={logContainerRef} className="flex-1 overflow-y-auto space-y-1.5 custom-scrollbar max-h-[100px]">
                                        {consoleLogs.length === 0 ? (
                                            <span className="text-gray-600 italic">Click "Run Script" to execute code...</span>
                                        ) : (
                                            consoleLogs.map((log, i) => {
                                                const isSuccess = log.includes('🎉') || log.includes('✓');
                                                return (
                                                    <div 
                                                        key={i} 
                                                        className={isSuccess ? 'text-green-400 font-bold' : log.includes('Compiling') || log.includes('Running') ? 'text-blue-400 animate-pulse' : 'text-gray-300'}
                                                    >
                                                        {log}
                                                    </div>
                                                );
                                            })
                                        )}
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="mt-4 flex items-center justify-between gap-4">
                                    <div className="flex items-center gap-1 text-[10px] text-gray-500">
                                        <Sparkles size={10} className="text-primary" />
                                        <span>Sandbox execution engine v1.0</span>
                                    </div>
                                    
                                    <button
                                        onClick={handleRunCode}
                                        disabled={executionState === 'running'}
                                        className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs shadow-lg transition-all active:scale-[0.97] cursor-pointer ${
                                            executionState === 'running' 
                                                ? 'bg-blue-600/30 text-blue-300 border border-blue-500/20' 
                                                : activeTab === 'java'
                                                    ? 'bg-primary text-white hover:brightness-110 shadow-primary/20 hover:shadow-primary/40'
                                                    : 'bg-purple-600 text-white hover:brightness-110 shadow-purple-600/20 hover:shadow-purple-600/40'
                                        }`}
                                    >
                                        {executionState === 'running' ? (
                                            <>
                                                <RefreshCw size={12} className="animate-spin" />
                                                <span>Running...</span>
                                            </>
                                        ) : (
                                            <>
                                                <Play size={12} className="fill-current" />
                                                <span>Run Script</span>
                                            </>
                                        )}
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {/* Tab 3: ExamHub Simulator */}
                        {activeTab === 'exam' && (
                            <motion.div
                                key="exam"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="flex-1 flex flex-col justify-between"
                            >
                                <div>
                                    {/* Question Card */}
                                    <div className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl mb-4 text-left">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-orange-500/20 border border-orange-500/30 text-orange-400 uppercase tracking-wider">UPSC Civil Services</span>
                                            <span className="text-[10px] text-gray-500">Polity & Constitution</span>
                                        </div>
                                        <h4 className="text-sm font-bold text-gray-200 leading-snug">
                                            Under the Constitution of India, which of the following is NOT a Fundamental Right?
                                        </h4>
                                    </div>

                                    {/* Choices Grid */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {[
                                            { id: 'A', text: 'Right to Equality' },
                                            { id: 'B', text: 'Right to Liberty' },
                                            { id: 'C', text: 'Right to Property' },
                                            { id: 'D', text: 'Right against Exploitation' }
                                        ].map((choice) => {
                                            const isSelected = selectedAnswer === choice.id;
                                            const isCorrect = choice.id === 'C';
                                            
                                            let borderClass = 'border-white/5 hover:border-white/20 hover:bg-white/5';
                                            let bgClass = 'bg-black/20';
                                            let textClass = 'text-gray-300';

                                            if (selectedAnswer) {
                                                if (isSelected) {
                                                    if (isCorrect) {
                                                        borderClass = 'border-green-500/40';
                                                        bgClass = 'bg-green-500/10';
                                                        textClass = 'text-green-400 font-bold';
                                                    } else {
                                                        borderClass = 'border-red-500/40';
                                                        bgClass = 'bg-red-500/10';
                                                        textClass = 'text-red-400 font-bold';
                                                    }
                                                } else if (isCorrect) {
                                                    // Highlight correct answer if user got it wrong
                                                    borderClass = 'border-green-500/30';
                                                    bgClass = 'bg-green-500/5';
                                                    textClass = 'text-green-500';
                                                }
                                            }

                                            return (
                                                <button
                                                    key={choice.id}
                                                    disabled={selectedAnswer !== null}
                                                    onClick={() => {
                                                        setSelectedAnswer(choice.id);
                                                        setShowExplanation(true);
                                                    }}
                                                    className={`p-3 rounded-xl border text-xs text-left transition-all flex items-center gap-3 cursor-pointer ${bgClass} ${borderClass} ${textClass}`}
                                                >
                                                    <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold border ${
                                                        isSelected 
                                                            ? isCorrect 
                                                                ? 'bg-green-500 border-transparent text-white' 
                                                                : 'bg-red-500 border-transparent text-white'
                                                            : 'border-white/20 text-gray-400 bg-white/5'
                                                    }`}>
                                                        {choice.id}
                                                    </span>
                                                    <span>{choice.text}</span>
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Answers Explanation Panel */}
                                <div className="mt-4 min-h-[90px] flex items-center">
                                    <AnimatePresence mode="wait">
                                        {!showExplanation ? (
                                            <motion.div 
                                                key="prompt"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                className="w-full p-4 rounded-xl border border-dashed border-white/10 bg-white/[0.01] flex items-center justify-center gap-2 text-xs text-gray-500"
                                            >
                                                <Brain size={14} className="text-orange-400 animate-pulse" />
                                                <span>Choose an option to see AI Predicted breakdown...</span>
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                key="explanation"
                                                initial={{ opacity: 0, y: 5 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className={`w-full p-4 rounded-2xl border text-left text-xs ${
                                                    selectedAnswer === 'C' 
                                                        ? 'bg-green-500/10 border-green-500/20 text-green-300' 
                                                        : 'bg-red-500/10 border-red-500/20 text-red-300'
                                                }`}
                                            >
                                                <div className="flex items-center gap-1.5 font-bold mb-1">
                                                    {selectedAnswer === 'C' ? (
                                                        <>
                                                            <CheckCircle size={14} className="text-green-400" />
                                                            <span>CORRECT!</span>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <AlertCircle size={14} className="text-red-400" />
                                                            <span>INCORRECT CHOICE</span>
                                                        </>
                                                    )}
                                                </div>
                                                <p className="leading-relaxed text-[11px] text-gray-300">
                                                    The <strong className="text-white">Right to Property</strong> was originally a Fundamental Right under Article 31, but was deleted by the 44th Constitutional Amendment Act, 1978. It is now a legal right under Article 300A in Part XII of the Constitution.
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Supported Exams List (Footer) */}
                                <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap gap-x-2.5 gap-y-1.5 justify-center text-[10px] font-mono tracking-wider font-bold text-gray-500/80 uppercase">
                                    <span className="text-orange-400 drop-shadow-[0_0_6px_rgba(251,146,60,0.8)]">UPSC</span>
                                    <span>•</span>
                                    <span className="text-blue-400 drop-shadow-[0_0_6px_rgba(96,165,250,0.8)]">GATE</span>
                                    <span>•</span>
                                    <span className="text-purple-400 drop-shadow-[0_0_6px_rgba(192,132,252,0.8)]">JEE</span>
                                    <span>•</span>
                                    <span className="text-rose-400 drop-shadow-[0_0_6px_rgba(244,63,94,0.8)]">NEET</span>
                                    <span>•</span>
                                    <span className="text-amber-300 drop-shadow-[0_0_6px_rgba(253,224,71,0.8)]">BANKING</span>
                                    <span>•</span>
                                    <span className="text-emerald-400 drop-shadow-[0_0_6px_rgba(52,211,153,0.8)]">SSC</span>
                                    <span>•</span>
                                    <span className="text-cyan-400 drop-shadow-[0_0_6px_rgba(34,211,238,0.8)]">NDA</span>
                                    <span>•</span>
                                    <span className="text-pink-400 drop-shadow-[0_0_6px_rgba(244,114,182,0.8)]">CLAT</span>
                                </div>
                            </motion.div>
                        )}
                        
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
