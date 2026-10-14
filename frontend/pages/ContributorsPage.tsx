import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Award, Bug, Lightbulb, Code2, Users, Heart, Star, Github, Linkedin, Twitter, Globe } from 'lucide-react';
import SEO from '../components/SEO';

const API = import.meta.env.VITE_API_URL || 'http://localhost:8080';

interface Contributor {
    id: number;
    displayName: string;
    contributionTitle: string;
    description: string;
    category: string;
    photoUrl?: string;
    socialUrl?: string;
    consentGiven: boolean;
    createdAt: string;
}

type CategoryKey = 'BUG_BOUNTY' | 'COMMUNITY' | 'CODE' | 'SUGGESTION' | 'RECOGNITION' | 'OTHER';

const CATEGORY_META: Record<CategoryKey, { label: string; icon: React.ReactNode; color: string; bg: string }> = {
    BUG_BOUNTY:  { label: 'Bug Report',      icon: <Bug size={13} />,       color: 'text-red-400',    bg: 'bg-red-500/10 border-red-500/30' },
    COMMUNITY:   { label: 'Community',        icon: <Users size={13} />,     color: 'text-sky-400',    bg: 'bg-sky-500/10 border-sky-500/30' },
    CODE:        { label: 'Code Improvement', icon: <Code2 size={13} />,     color: 'text-purple-400', bg: 'bg-purple-500/10 border-purple-500/30' },
    SUGGESTION:  { label: 'Suggestion',       icon: <Lightbulb size={13} />, color: 'text-yellow-400', bg: 'bg-yellow-500/10 border-yellow-500/30' },
    RECOGNITION: { label: 'Recognition',      icon: <Star size={13} />,      color: 'text-amber-400',  bg: 'bg-amber-500/10 border-amber-500/30' },
    OTHER:       { label: 'Contributor',      icon: <Heart size={13} />,     color: 'text-pink-400',   bg: 'bg-pink-500/10 border-pink-500/30' },
};

const SOCIAL_ICONS: Array<[string, React.ReactNode]> = [
    ['github.com',   <Github size={14} />],
    ['linkedin.com', <Linkedin size={14} />],
    ['twitter.com',  <Twitter size={14} />],
    ['x.com',        <Twitter size={14} />],
];

function getSocialIcon(url?: string): React.ReactNode {
    if (!url) return <Globe size={14} />;
    const lower = url.toLowerCase();
    for (const [key, icon] of SOCIAL_ICONS) {
        if (lower.includes(key)) return icon;
    }
    return <Globe size={14} />;
}

function getCategoryMeta(cat: string) {
    return CATEGORY_META[cat as CategoryKey] ?? CATEGORY_META.OTHER;
}

function formatDate(dateStr?: string): string {
    if (!dateStr) return '';
    try {
        return new Date(dateStr).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' });
    } catch {
        return '';
    }
}

const SkeletonCard = () => (
    <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 animate-pulse">
        <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-full bg-white/10 shrink-0" />
            <div className="flex-1 space-y-2">
                <div className="h-4 bg-white/10 rounded w-2/3" />
                <div className="h-3 bg-white/10 rounded w-1/3" />
            </div>
        </div>
        <div className="space-y-2">
            <div className="h-3 bg-white/10 rounded" />
            <div className="h-3 bg-white/10 rounded w-4/5" />
        </div>
    </div>
);

const ContributorsPage: React.FC = () => {
    const [contributors, setContributors] = useState<Contributor[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch(`${API}/api/contributors`)
            .then(res => (res.ok ? res.json() : Promise.reject('Failed to load')))
            .then((data: Contributor[]) => { setContributors(data); setLoading(false); })
            .catch(() => { setError('Unable to load contributors. Please try again later.'); setLoading(false); });
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
    };
    const cardVariants = {
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
    };

    return (
        <div className="min-h-screen bg-dark-bg text-gray-200">
            <SEO
                title="Contributors — ADV Indian Coder"
                description="Meet the community members who helped make ADV Indian Coder better through bug reports, suggestions, and contributions."
            />

            {/* Hero */}
            <section className="relative py-20 px-4 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 blur-[100px] rounded-full" />
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 blur-[100px] rounded-full" />
                </div>
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: -16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-semibold mb-6 uppercase tracking-widest"
                    >
                        <Award size={13} /> Community Hall of Fame
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-4"
                    >
                        Our Contributors
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
                    >
                        These community members helped shape ADV Indian Coder by reporting bugs,
                        suggesting improvements, and contributing meaningful feedback.
                    </motion.p>
                </div>
            </section>

            {/* Cards grid */}
            <section className="max-w-6xl mx-auto px-4 pb-24">
                {loading && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3, 4, 5, 6].map(i => <SkeletonCard key={i} />)}
                    </div>
                )}

                {!loading && error && (
                    <div className="text-center py-20">
                        <p className="text-gray-400">{error}</p>
                    </div>
                )}

                {!loading && !error && contributors.length === 0 && (
                    <div className="text-center py-20">
                        <Award className="mx-auto mb-4 text-gray-600" size={48} />
                        <p className="text-gray-400 text-lg font-medium">No contributors yet.</p>
                        <p className="text-gray-500 text-sm mt-1">Be the first to help improve ADV Indian Coder!</p>
                    </div>
                )}

                {!loading && !error && contributors.length > 0 && (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {contributors.map(c => {
                            const meta = getCategoryMeta(c.category);
                            const avatarSeed = encodeURIComponent(c.displayName);
                            const avatarUrl =
                                c.consentGiven && c.photoUrl
                                    ? c.photoUrl
                                    : `https://api.dicebear.com/8.x/initials/svg?seed=${avatarSeed}&backgroundColor=1e293b&textColor=e2e8f0`;

                            return (
                                <motion.div
                                    key={c.id}
                                    variants={cardVariants}
                                    className="group relative rounded-2xl border border-white/[0.07] bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-xl p-6 hover:border-white/[0.14] transition-all duration-300 hover:shadow-[0_0_40px_rgba(139,92,246,0.08)] flex flex-col gap-4"
                                >
                                    {/* Avatar + name */}
                                    <div className="flex items-center gap-4">
                                        <div className="relative shrink-0">
                                            <img
                                                src={avatarUrl}
                                                alt={c.displayName}
                                                className="w-14 h-14 rounded-full object-cover border-2 border-white/10"
                                                onError={e => {
                                                    const img = e.target as HTMLImageElement;
                                                    img.src = `https://api.dicebear.com/8.x/initials/svg?seed=${avatarSeed}&backgroundColor=1e293b&textColor=e2e8f0`;
                                                }}
                                            />
                                        </div>
                                        <div className="min-w-0">
                                            <p className="font-bold text-white text-base truncate">{c.displayName}</p>
                                            {c.createdAt && (
                                                <p className="text-[11px] text-gray-500 mt-0.5">{formatDate(c.createdAt)}</p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Category badge */}
                                    <span className={`self-start inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[11px] font-semibold uppercase tracking-wide ${meta.color} ${meta.bg}`}>
                                        {meta.icon} {meta.label}
                                    </span>

                                    {/* Contribution title */}
                                    <p className="text-sm font-semibold text-gray-200 leading-snug">{c.contributionTitle}</p>

                                    {/* Description */}
                                    <p className="text-xs text-gray-400 leading-relaxed flex-1">{c.description}</p>

                                    {/* Social link - only shown with consent */}
                                    {c.consentGiven && c.socialUrl && (
                                        <a
                                            href={c.socialUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="self-start inline-flex items-center gap-1.5 text-xs font-medium text-gray-400 hover:text-white border border-white/10 hover:border-white/30 px-3 py-1.5 rounded-lg transition-all"
                                        >
                                            {getSocialIcon(c.socialUrl)}
                                            <span>Profile</span>
                                            <ExternalLink size={11} />
                                        </a>
                                    )}
                                </motion.div>
                            );
                        })}
                    </motion.div>
                )}

                {/* CTA */}
                {!loading && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="mt-16 p-8 rounded-2xl border border-dashed border-white/10 text-center"
                    >
                        <Heart className="mx-auto mb-3 text-pink-400" size={28} />
                        <h3 className="text-lg font-bold text-white mb-2">Want to be featured here?</h3>
                        <p className="text-gray-400 text-sm max-w-md mx-auto mb-5">
                            Found a bug, have a suggestion, or contributed something valuable?
                            Reach out and we will add you to our Hall of Fame!
                        </p>
                        <a
                            href="/contact"
                            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white text-sm font-bold transition-all shadow-[0_0_20px_rgba(139,92,246,0.25)] hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]"
                        >
                            Contact Us <ExternalLink size={14} />
                        </a>
                    </motion.div>
                )}
            </section>
        </div>
    );
};

export default ContributorsPage;
