import React, { createContext, useState, useEffect, useContext } from 'react';
import AuthService from '../services/auth.service';

interface User {
    id: number;
    username: string;
    email: string;
    roles: string[];
    token: string;
}

interface AuthContextType {
    user: User | null;
    login: (user: User) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const currentUser = AuthService.getCurrentUser();
        const expiry = localStorage.getItem("session_expiry");

        if (currentUser) {
            if (expiry && Date.now() > parseInt(expiry)) {
                logout();
            } else {
                setUser(currentUser);
            }
        }
    }, []);

    const login = (userData: User) => {
        localStorage.setItem("user", JSON.stringify(userData));
        // Set expiry to 24 hours from now
        const expiryTime = Date.now() + 24 * 60 * 60 * 1000;
        localStorage.setItem("session_expiry", expiryTime.toString());
        setUser(userData);
    };

    const logout = () => {
        AuthService.logout();
        localStorage.removeItem("session_expiry");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
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
