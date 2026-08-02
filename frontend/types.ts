
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

export interface ExamQuestion {
    id: string | number;
    examId: string;
    year: string | number; // e.g. 2024, 2021, or 'AI Predicted 2026'
    subject: string;
    topic: string;
    question: string;
    options: string[]; // 4 options
    correctOptionIndex: number; // 0, 1, 2, 3
    explanation: string;
    aiTip?: string;
    difficulty: 'Easy' | 'Medium' | 'Hard' | 'Expert';
}

export interface CompetitiveExam {
    id: string;
    title: string;
    fullName: string;
    category: 'UPSC & State PCS' | 'SSC & Central Govt' | 'Banking & Insurance' | 'Railways' | 'Defence & Police' | 'Engineering' | 'Medical' | 'Management & MBA' | 'Law' | 'Teaching & Research';
    description: string;
    icon: string;
    yearsAvailable: string;
    totalMCQs: number;
    aiPredictionAccuracy: number;
    examDate?: string;
    subjects?: string[];
    questions: ExamQuestion[];
}

export interface UserCourseProgress {
    id?: number;
    email: string;
    courseId: string;
    courseName: string;
    progressPercent: number;
    completedVideos: string;
    assessmentScore: number;
    completedTopics?: string;
    quizStates?: string;
    interviewRequested?: boolean;
    lastUpdated?: string;
}

export interface User {
    id: string;
    name: string;
    email: string;
    avatar: string;
    role: 'student' | 'instructor' | 'admin';
    createdAt: string;
    enrolledCourses: string[];
    courseProgressList?: UserCourseProgress[];
    mobileNumber?: string;
    linkedinUrl?: string;
    socialLinksJson?: string;
    educationJson?: string;
}

