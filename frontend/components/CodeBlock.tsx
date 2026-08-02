import React from 'react';
import { Play, Check, Copy } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface CodeBlockProps {
    code: string;
    lang?: string;
    filename?: string;
    colorClass?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, lang = 'java', filename, colorClass = 'red' }) => {
    const navigate = useNavigate();
    const [copied, setCopied] = React.useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleTryInLab = () => {
        const routes: Record<string, string> = {
            java: '/online-java-compiler',
            python: '/online-python-compiler',
            javascript: '/online-javascript-compiler',
            js: '/online-javascript-compiler',
            c: '/online-c-compiler',
            cpp: '/online-cpp-compiler',
        };

        const targetRoute = routes[lang.toLowerCase()] || '/adv-lab';
        navigate(targetRoute, { state: { sharedCode: code, sharedLang: lang } });
    };

    const textColors: Record<string, string> = {
        red: 'text-red-400',
        orange: 'text-orange-400',
        blue: 'text-blue-400',
        cyan: 'text-cyan-400',
        yellow: 'text-yellow-400',
        green: 'text-green-400',
        purple: 'text-purple-400',
    };

    const textColor = textColors[colorClass] || 'text-red-400';

    return (
        <div className="bg-[#1e1e1e] text-gray-200 p-6 rounded-2xl font-mono text-sm mb-6 overflow-x-auto shadow-xl border border-gray-800 relative group">
            <div className="flex items-center justify-between mb-4 border-b border-gray-700 pb-4">
                <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="ml-4 text-xs text-gray-500 font-sans">{filename || `Main.${lang === 'javascript' ? 'js' : lang === 'python' ? 'py' : lang}`}</span>
                </div>
                
                <div className="flex items-center space-x-2 opacity-80 group-hover:opacity-100 transition-opacity">
                    <button 
                        onClick={handleCopy}
                        type="button"
                        className="p-1.5 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                        title="Copy Code"
                    >
                        {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                    </button>
                    {['java', 'python', 'javascript', 'js', 'c', 'cpp'].includes(lang.toLowerCase()) && (
                        <button 
                            onClick={handleTryInLab}
                            type="button"
                            className="flex items-center gap-1.5 px-3 py-1.5 bg-red-600 hover:bg-red-500 text-white rounded-lg text-xs font-bold font-sans transition-all shadow-md active:scale-95"
                            title="Try in ADV Lab Compiler"
                        >
                            <Play className="w-3 h-3 fill-current" />
                            <span>Try in Lab</span>
                        </button>
                    )}
                </div>
            </div>
            <pre className={`leading-relaxed overflow-x-auto whitespace-pre ${textColor}`}>{code}</pre>
        </div>
    );
};

export default CodeBlock;
