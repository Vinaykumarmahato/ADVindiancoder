
export interface Course {
    id: string | number;
    title: string;
    description: string;
    thumbnail: string;
    tags: string[];
    category: string;
    youtubeLink: string;
    enrolledCount?: number;
    rating?: number;
    isOngoing?: boolean;
}

export interface Masterclass {
    id: string | number;
    title: string;
    description: string;
    price: number;
    enrollLink: string;
    countdownTarget: string;
    enrolledCount?: number;
    rating?: number;
}

export interface Resource {
    id: string | number;
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
    id: string | number;
    name: string;
    role: string;
    quote: string;
    avatar: string;
}

export interface Company {
    id: string | number;
    name: string;
    logo: string;
    tagline: string;
    link: string;
}

export interface Stat {
    value: string;
    label: string;
}
