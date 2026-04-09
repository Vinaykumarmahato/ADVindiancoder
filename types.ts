
export interface Course {
    id: number;
    title: string;
    description: string;
    thumbnail: string;
    tags: string[];
    category: 'Programming' | 'Web' | 'Backend' | 'DSA' | 'Career';
    youtubeLink: string;
}

export interface Masterclass {
    id: number;
    title: string;
    description: string;
    price: number;
    enrollLink: string;
    countdownTarget: string;
}

export interface Resource {
    id: number;
    title: string;
    category: string;
    subject: string;
    type: 'Notes' | 'Blog' | 'Project' | 'Service' | 'Material' | 'Package';
    link: string;
    description?: string;
    thumbnail?: string;
    metadata?: string;
    price?: number;
    isPremium?: boolean;
    techStack?: string[];
}

export interface Testimonial {
    id: number;
    name: string;
    role: string;
    quote: string;
    avatar: string;
}

export interface Company {
    id: number;
    name: string;
    logo: string;
    tagline: string;
    link: string;
}

export interface Stat {
    value: string;
    label: string;
}
