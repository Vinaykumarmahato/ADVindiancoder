import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User } from '../types';

interface AuthContextType {
    user: User | null;
    loading: boolean;
    login: (email: string, password: string) => Promise<void>;
    loginSocial: (provider: 'google' | 'github' | 'linkedin', token?: string) => Promise<void>;
    loginMobile: (phoneNumber: string, otpCode: string) => Promise<void>;
    loginEmailOtp: (email: string, otpCode: string) => Promise<void>;
    register: (name: string, email: string, password: string) => Promise<void>;
    logout: () => void;
    refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const USER_KEY = 'adv_coder_user';
const TOKEN_KEY = 'adv_coder_token';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    // Initial check for existing session
    useEffect(() => {
        const storedUser = localStorage.getItem(USER_KEY);
        if (storedUser) {
            try {
                setUser(JSON.parse(storedUser));
            } catch (e) {
                localStorage.removeItem(USER_KEY);
                localStorage.removeItem(TOKEN_KEY);
            }
        }
        setLoading(false);
    }, []);

    const login = async (email: string, password: string): Promise<void> => {
        setLoading(true);
        try {
            const response = await fetch('http://localhost:8080/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                const errData = await response.json().catch(() => ({ message: 'Invalid email or password' }));
                throw new Error(errData.message || 'Invalid email or password');
            }

            const data = await response.json();
            const mappedUser: User = {
                id: data.id.toString(),
                name: data.username,
                email: data.email,
                avatar: data.avatar || `https://api.dicebear.com/7.x/adventurer/svg?seed=${data.username}`,
                role: data.role === 'admin' ? 'admin' : data.role === 'instructor' ? 'instructor' : 'student',
                createdAt: new Date().toISOString(),
                enrolledCourses: data.enrolledCourses || [],
                courseProgressList: data.courseProgressList || []
            };

            setUser(mappedUser);
            localStorage.setItem(USER_KEY, JSON.stringify(mappedUser));
            localStorage.setItem(TOKEN_KEY, data.token);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            throw error;
        }
    };

    const register = async (name: string, email: string, password: string): Promise<void> => {
        setLoading(true);
        try {
            const uniqueUsername = name.replace(/\s+/g, '').toLowerCase() + '_' + Math.floor(100 + Math.random() * 900);
            const response = await fetch('http://localhost:8080/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: uniqueUsername,
                    email,
                    password,
                    mobileNumber: '',
                    linkedinUrl: ''
                }),
            });

            if (!response.ok) {
                const errData = await response.json().catch(() => ({ message: 'Registration failed' }));
                throw new Error(errData.message || 'Registration failed');
            }

            const data = await response.json();
            const mappedUser: User = {
                id: data.id.toString(),
                name: data.username,
                email: data.email,
                avatar: data.avatar || `https://api.dicebear.com/7.x/adventurer/svg?seed=${data.username}`,
                role: data.role === 'admin' ? 'admin' : data.role === 'instructor' ? 'instructor' : 'student',
                createdAt: new Date().toISOString(),
                enrolledCourses: data.enrolledCourses || [],
                courseProgressList: data.courseProgressList || []
            };

            setUser(mappedUser);
            localStorage.setItem(USER_KEY, JSON.stringify(mappedUser));
            localStorage.setItem(TOKEN_KEY, data.token);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            throw error;
        }
    };

    const loginSocial = async (provider: 'google' | 'github' | 'linkedin', token?: string): Promise<void> => {
        setLoading(true);
        try {
            if (provider === 'google' && token) {
                const response = await fetch('http://localhost:8080/api/auth/google', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ accessToken: token }),
                });

                if (!response.ok) {
                    const errData = await response.json().catch(() => ({ message: 'Google login failed' }));
                    throw new Error(errData.message || 'Google login failed');
                }

                const data = await response.json();
                const mappedUser: User = {
                    id: data.id.toString(),
                    name: data.username,
                    email: data.email,
                    avatar: data.avatar || `https://api.dicebear.com/7.x/pixel-art/svg?seed=${data.username}`,
                    role: data.role === 'admin' ? 'admin' : data.role === 'instructor' ? 'instructor' : 'student',
                    createdAt: new Date().toISOString(),
                    enrolledCourses: data.enrolledCourses || [],
                    courseProgressList: data.courseProgressList || []
                };

                setUser(mappedUser);
                localStorage.setItem(USER_KEY, JSON.stringify(mappedUser));
                localStorage.setItem(TOKEN_KEY, data.token);
                setLoading(false);
                return;
            }

            let socialUserPayload: { provider: string; name: string; email: string; avatar: string };
            if (provider === 'google') {
                socialUserPayload = {
                    provider,
                    name: 'Google Scholar',
                    email: 'scholar.google@gmail.com',
                    avatar: `https://api.dicebear.com/7.x/pixel-art/svg?seed=google-scholar`
                };
            } else if (provider === 'github') {
                socialUserPayload = {
                    provider,
                    name: 'GitHub Octocat',
                    email: 'octocat.git@github.com',
                    avatar: `https://api.dicebear.com/7.x/identicon/svg?seed=octocat-git`
                };
            } else {
                socialUserPayload = {
                    provider,
                    name: 'LinkedIn Professional',
                    email: 'pro.linkedin@linkedin.com',
                    avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=pro-linkedin`
                };
            }

            const response = await fetch('http://localhost:8080/api/auth/social', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(socialUserPayload),
            });

            if (!response.ok) {
                const errData = await response.json().catch(() => ({ message: 'Social login failed' }));
                throw new Error(errData.message || 'Social login failed');
            }

            const data = await response.json();
            const mappedUser: User = {
                id: data.id.toString(),
                name: data.username,
                email: data.email,
                avatar: data.avatar || socialUserPayload.avatar,
                role: data.role === 'admin' ? 'admin' : data.role === 'instructor' ? 'instructor' : 'student',
                createdAt: new Date().toISOString(),
                enrolledCourses: data.enrolledCourses || [],
                courseProgressList: data.courseProgressList || []
            };

            setUser(mappedUser);
            localStorage.setItem(USER_KEY, JSON.stringify(mappedUser));
            localStorage.setItem(TOKEN_KEY, data.token);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            throw error;
        }
    };

    const loginMobile = async (phoneNumber: string, otpCode: string): Promise<void> => {
        setLoading(true);
        try {
            const response = await fetch('http://localhost:8080/api/auth/mobile/verify-otp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ phoneNumber, otpCode }),
            });

            if (!response.ok) {
                const errData = await response.json().catch(() => ({ message: 'Invalid OTP' }));
                throw new Error(errData.message || 'Invalid OTP');
            }

            const data = await response.json();
            const mappedUser: User = {
                id: data.id.toString(),
                name: data.username,
                email: data.email,
                avatar: data.avatar || `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(phoneNumber)}`,
                role: 'student',
                createdAt: new Date().toISOString(),
                enrolledCourses: data.enrolledCourses || [],
                courseProgressList: data.courseProgressList || []
            };

            setUser(mappedUser);
            localStorage.setItem(USER_KEY, JSON.stringify(mappedUser));
            localStorage.setItem(TOKEN_KEY, data.token);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            throw error;
        }
    };

    const loginEmailOtp = async (email: string, otpCode: string): Promise<void> => {
        setLoading(true);
        try {
            const response = await fetch('http://localhost:8080/api/auth/email/verify-otp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, otpCode }),
            });

            if (!response.ok) {
                const errData = await response.json().catch(() => ({ message: 'Invalid OTP' }));
                throw new Error(errData.message || 'Invalid OTP');
            }

            const data = await response.json();
            const mappedUser: User = {
                id: data.id.toString(),
                name: data.username,
                email: data.email,
                avatar: data.avatar || `https://api.dicebear.com/7.x/adventurer/svg?seed=${data.username}`,
                role: data.role === 'admin' ? 'admin' : data.role === 'instructor' ? 'instructor' : 'student',
                createdAt: new Date().toISOString(),
                enrolledCourses: data.enrolledCourses || [],
                courseProgressList: data.courseProgressList || []
            };

            setUser(mappedUser);
            localStorage.setItem(USER_KEY, JSON.stringify(mappedUser));
            localStorage.setItem(TOKEN_KEY, data.token);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            throw error;
        }
    };

    const refreshUser = async (): Promise<void> => {
        const token = localStorage.getItem(TOKEN_KEY);
        if (!token) return;
        try {
            const response = await fetch('http://localhost:8080/api/auth/profile', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (response.ok) {
                const data = await response.json();
                const mappedUser: User = {
                    id: data.id ? data.id.toString() : (user?.id || ''),
                    name: data.username,
                    email: data.email,
                    avatar: data.avatar || `https://api.dicebear.com/7.x/adventurer/svg?seed=${data.username}`,
                    role: data.role === 'admin' ? 'admin' : data.role === 'instructor' ? 'instructor' : 'student',
                    createdAt: user?.createdAt || new Date().toISOString(),
                    enrolledCourses: data.enrolledCourses || [],
                    courseProgressList: data.courseProgressList || []
                };
                setUser(mappedUser);
                localStorage.setItem(USER_KEY, JSON.stringify(mappedUser));
            }
        } catch (error) {
            console.error("Failed to refresh user profile:", error);
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem(USER_KEY);
        localStorage.removeItem(TOKEN_KEY);
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, loginSocial, loginMobile, loginEmailOtp, register, logout, refreshUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
