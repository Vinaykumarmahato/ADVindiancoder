import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Zap, Coffee, Code2, Github, Linkedin, GitCommit, FileCode, Terminal, BookOpen, TrendingUp, Users } from 'lucide-react';
import PageWrapper from '../../components/PageWrapper';
import SEO from '../../components/SEO';

const LANGUAGES = [
    { id: 'python', name: 'Python', icon: Zap, color: 'text-yellow-400', bg: 'from-yellow-500/10', version: '3.10.0', route: '/online-python-compiler' },
    { id: 'java', name: 'Java', icon: Coffee, color: 'text-red-400', bg: 'from-red-500/10', version: '15.0.2', route: '/online-java-compiler' },
    { id: 'c', name: 'C', icon: Code2, color: 'text-blue-400', bg: 'from-blue-500/10', version: '10.2.0', route: '/online-c-compiler' },
    { id: 'cpp', name: 'C++', icon: Code2, color: 'text-indigo-400', bg: 'from-indigo-500/10', version: '10.2.0', route: '/online-cpp-compiler' },
    { id: 'javascript', name: 'JavaScript', icon: Zap, color: 'text-yellow-300', bg: 'from-yellow-400/10', version: '1.32.3', route: '/online-javascript-compiler' },
];

const FEATURES = [
    {
        icon: GitCommit,
        iconColor: 'text-white',
        iconBg: 'bg-[#24292e]',
        badge: 'GitHub',
        badgeColor: 'bg-white/10 text-white',
        title: 'Stay 100% GitHub Green',
        description: 'The #1 struggle for developers — keeping your contribution graph active. In ADV Lab, just paste your repo link once, write your code, and hit Commit. Done. Your GitHub stays green every single day without opening a new tab.',
        highlight: 'Paste repo → Write code → Click Commit. That\'s it.',
        highlightColor: 'text-green-400',
    },
    {
        icon: Linkedin,
        iconColor: 'text-white',
        iconBg: 'bg-[#0A66C2]',
        badge: 'LinkedIn',
        badgeColor: 'bg-[#0A66C2]/20 text-[#0A66C2]',
        title: 'Auto LinkedIn Posts in 1 Click',
        description: 'Recruiters check your LinkedIn activity daily. Most students never post because writing a professional post feels hard. ADV Lab writes the perfect, polished LinkedIn post for you — just type your code, click LinkedIn, and it auto-drafts a professional post with your code ready to publish.',
        highlight: 'Write code → Click LinkedIn → Post goes live.',
        highlightColor: 'text-blue-400',
    },
    {
        icon: FileCode,
        iconColor: 'text-yellow-300',
        iconBg: 'bg-yellow-500/10',
        badge: 'Multi-File IDE',
        badgeColor: 'bg-yellow-500/10 text-yellow-400',
        title: 'Full VS Code Experience in Browser',
        description: 'Create multiple files, switch between them with tabs, delete files, and download them instantly to your device. No installation, no setup. A complete professional IDE experience from inside your browser.',
        highlight: 'Create → Edit → Download in seconds.',
        highlightColor: 'text-yellow-400',
    },
    {
        icon: Terminal,
        iconColor: 'text-green-300',
        iconBg: 'bg-green-500/10',
        badge: 'Live Compiler',
        badgeColor: 'bg-green-500/10 text-green-400',
        title: 'Instant Code Execution',
        description: 'Run Java, Python, C, C++ and JavaScript code instantly without any compiler setup on your machine. The ADV Lab execution engine compiles and runs your code in a secure sandboxed environment and shows you the output in milliseconds.',
        highlight: 'Write code → Click Run → See output.',
        highlightColor: 'text-green-400',
    },
    {
        icon: BookOpen,
        iconColor: 'text-purple-300',
        iconBg: 'bg-purple-500/10',
        badge: 'Course Integrated',
        badgeColor: 'bg-purple-500/10 text-purple-400',
        title: 'Load Episode Code Directly',
        description: 'Watching a Java episode on ADV Indian Coder? Load that exact episode\'s code into the editor with one click from the dropdown. No more typing from the screen. Practice the exact code you just learned.',
        highlight: 'Select episode → Code loads instantly.',
        highlightColor: 'text-purple-400',
    },
    {
        icon: TrendingUp,
        iconColor: 'text-orange-300',
        iconBg: 'bg-orange-500/10',
        badge: 'Career Focused',
        badgeColor: 'bg-orange-500/10 text-orange-400',
        title: 'Built for Job Seekers',
        description: 'ADV Lab is designed for one mission — helping you get hired. Stay active on GitHub, post your progress on LinkedIn, practice real code, and build a portfolio. All from a single platform, completely free.',
        highlight: 'Code daily → Stay visible → Get hired.',
        highlightColor: 'text-orange-400',
    },
    {
        icon: FileCode,
        iconColor: 'text-red-400',
        iconBg: 'bg-red-500/10',
        badge: 'Eclipse Style',
        badgeColor: 'bg-red-500/10 text-red-400',
        title: 'Auto Javadocs & Boilerplate',
        description: 'Creating new project components auto-generates appropriate metadata descriptions, method scopes, and todo comments safely.',
        highlight: 'Smart layouts generated natively.',
        highlightColor: 'text-red-400',
    },
    {
        icon: Terminal,
        iconColor: 'text-blue-300',
        iconBg: 'bg-blue-500/10',
        badge: 'Flexible Layout',
        badgeColor: 'bg-blue-500/10 text-blue-400',
        title: 'Dynamic Panel Sliders',
        description: 'Drag border guidelines dynamically. Adjust panel distributions seamlessly across desktop screens.',
        highlight: 'Custom viewport control.',
        highlightColor: 'text-blue-400',
    }
];

const AdvLabDashboard = () => {
    const navigate = useNavigate();

    return (
        <PageWrapper>
            <SEO 
                title="ADV Lab - Free Online Java, Python, C++ Compiler & IDE" 
                description="ADV Lab is India's most powerful free browser IDE — run Java, Python, C, C++ and JavaScript code online, auto-commit to GitHub and share professional LinkedIn posts in one click."
                keywords="online java compiler, online python compiler, adv lab ide, github auto commit, linkedin post from code, free ide browser, adv indian coder"
                ogType="website"
            />
            <div className="min-h-screen bg-[#05060f] text-white font-sans selection:bg-primary/30 pt-[80px] md:pt-[100px] overflow-x-hidden">
                
                {/* Background glows */}
                <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] right-[-10%] w-[80%] md:w-[50%] h-[50%] bg-red-600/10 blur-[120px] rounded-full animate-pulse"></div>
                    <div className="absolute bottom-[-10%] left-[-10%] w-[80%] md:w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full"></div>
                </div>

                {/* ─── Hero + Language Picker ─── */}
                <section className="relative z-10 flex flex-col items-center justify-center px-4 pt-10 pb-16">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6 text-xs font-bold text-gray-400 uppercase tracking-widest">
                            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                            Free • No Installation • No Signup
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-5 tracking-tight leading-tight">
                            Welcome to{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500">
                                ADV Lab
                            </span>
                        </h1>
                        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                            India's smartest browser IDE. Write code, run it instantly,<br className="hidden md:block" />
                            commit to GitHub & post on LinkedIn — all in one place.
                        </p>
                    </div>
                    
                    {/* Language Cards */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 max-w-5xl mx-auto w-full">
                        {LANGUAGES.map((lang, i) => {
                            const Icon = lang.icon;
                            return (
                                <button
                                    key={lang.id}
                                    onClick={() => navigate(lang.route)}
                                    style={{ animationDelay: `${i * 60}ms` }}
                                    className="group relative bg-[#0a0f1c] border border-white/10 rounded-3xl p-6 md:p-8 flex flex-col items-center justify-center gap-4 hover:border-white/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] hover:-translate-y-2 overflow-hidden animate-fade-in-up"
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-br ${lang.bg} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                                    <Icon className={`w-12 h-12 md:w-16 md:h-16 ${lang.color} group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]`} />
                                    <h3 className="text-xl md:text-2xl font-black text-white">{lang.name}</h3>
                                    <span className="text-xs text-gray-500 font-mono bg-white/5 px-3 py-1 rounded-full border border-white/5">v{lang.version}</span>
                                </button>
                            );
                        })}
                    </div>
                </section>

                {/* ─── What Makes ADV Lab Different ─── */}
                <section className="relative z-10 px-4 pb-24 max-w-6xl mx-auto">
                    <div className="text-center mb-14">
                        <p className="text-xs font-black uppercase tracking-[0.3em] text-red-500 mb-3">Why ADV Lab?</p>
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
                            The only IDE built for<br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">your career — not just coding</span>
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg">
                            Every other online IDE lets you run code. ADV Lab lets you <strong className="text-white">build your professional profile</strong> while you code.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {FEATURES.map((feature, i) => {
                            const Icon = feature.icon;
                            return (
                                <div
                                    key={i}
                                    className="group relative bg-[#0a0f1c] border border-white/8 rounded-[2rem] p-7 flex flex-col gap-5 hover:border-white/20 transition-all duration-500 hover:shadow-[0_0_50px_rgba(0,0,0,0.4)] hover:-translate-y-1 overflow-hidden"
                                >
                                    {/* Subtle glow on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]"></div>

                                    {/* Icon + Badge row */}
                                    <div className="flex items-center justify-between">
                                        <div className={`w-12 h-12 rounded-2xl ${feature.iconBg} flex items-center justify-center shadow-inner border border-white/5`}>
                                            <Icon className={`w-6 h-6 ${feature.iconColor}`} />
                                        </div>
                                        <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border border-white/10 ${feature.badgeColor}`}>
                                            {feature.badge}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-black text-white leading-snug">
                                        {feature.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-500 text-sm leading-relaxed flex-1">
                                        {feature.description}
                                    </p>

                                    {/* Highlight pill */}
                                    <div className="bg-black/40 border border-white/5 rounded-xl px-4 py-2.5">
                                        <span className={`text-xs font-black font-mono ${feature.highlightColor}`}>
                                            {feature.highlight}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Bottom CTA banner */}
                    <div className="mt-16 relative bg-gradient-to-r from-red-600/20 via-purple-600/20 to-blue-600/20 border border-white/10 rounded-[2rem] p-8 md:p-12 text-center overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-blue-500/5"></div>
                        <div className="relative z-10">
                            <div className="flex items-center justify-center gap-3 mb-5">
                                <Users className="w-6 h-6 text-red-400" />
                                <span className="text-sm font-black uppercase tracking-widest text-gray-400">Join Students Already Using ADV Lab</span>
                            </div>
                            <h3 className="text-2xl md:text-4xl font-black text-white mb-4">
                                Stop just learning. Start <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500">building your profile.</span>
                            </h3>
                            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                                Every line of code you write in ADV Lab can become a GitHub commit and a LinkedIn post. Build in public, get noticed by recruiters.
                            </p>
                            <button
                                onClick={() => navigate('/online-java-compiler')}
                                className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-black px-8 py-4 rounded-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(239,68,68,0.4)] active:scale-95 text-base"
                            >
                                <Coffee className="w-5 h-5" />
                                Start Coding Now — It's Free
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </PageWrapper>
    );
};

export default AdvLabDashboard;
