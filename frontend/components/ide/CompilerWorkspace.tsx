import React, { useState, useEffect, useRef } from 'react';
import Editor from '@monaco-editor/react';
import { Play, RotateCcw, Copy, Share2, Terminal, Code2, Coffee, Zap, Award, Github, PartyPopper, CheckCircle2, ChevronDown, ChevronRight, Folder, FolderOpen, FolderPlus, FileCode, FilePlus, Plus, X, Download, Trash2, Linkedin, Briefcase, Archive, Bot, Users } from 'lucide-react';
import JSZip from 'jszip';
import { useNavigate, useLocation } from 'react-router-dom';
import PageWrapper from '../PageWrapper';
import SEO from '../SEO';
import axios from 'axios';
import { JAVA_EPISODES } from '../../data/javaEpisodes';
import { useAuth } from '../../contexts/AuthContext';

const BOILERPLATE: Record<string, string> = {
    python: `def main():\n    print("Hello from ADV Indian Coder!")\n\nif __name__ == "__main__":\n    main()`,
    java: `public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello from ADV Indian Coder!");\n    }\n}`,
    c: `#include <stdio.h>\n\nint main() {\n    printf("Hello from ADV Indian Coder!\\n");\n    return 0;\n}`,
    cpp: `#include <iostream>\n\nint main() {\n    std::cout << "Hello from ADV Indian Coder!" << std::endl;\n    return 0;\n}`,
    javascript: `console.log("Hello from ADV Indian Coder!");`,
};

const LESSON_TEMPLATES: Record<string, Record<string, string>> = {
    java: {
        'Default Blueprint': BOILERPLATE['java'],
        ...JAVA_EPISODES.reduce((acc, ep) => {
            if (!ep.notes || !ep.notes.code) return acc;
            const cleanTitle = ep.title.replace('EP ' + (ep.id < 10 ? '0' + ep.id : ep.id), '').replace('–', '').replace('—', '').trim();
            acc[`EP ${ep.id}: ${cleanTitle.split('|')[0].trim()}`] = ep.notes.code;
            return acc;
        }, {} as Record<string, string>),
    },
    python: {
        'Default Script': BOILERPLATE['python'],
        'List Comprehension': `numbers = [1, 2, 3, 4, 5]\nsquares = [x**2 for x in numbers if x % 2 == 0]\nprint(f"Original: {numbers}")\nprint(f"Squares of even: {squares}")`,
    }
};

const LANGUAGES = [
    { id: 'python', name: 'Python', icon: Zap, color: 'text-yellow-400', version: '3.10.0' },
    { id: 'java', name: 'Java', icon: Coffee, color: 'text-red-400', version: '15.0.2' },
    { id: 'c', name: 'C', icon: Code2, color: 'text-blue-400', version: '10.2.0' },
    { id: 'cpp', name: 'C++', icon: Code2, color: 'text-blue-500', version: '10.2.0' },
    { id: 'javascript', name: 'JavaScript', icon: Zap, color: 'text-yellow-300', version: '1.32.3' },
];

interface ProjectData {
    id: string;
    name: string;
    language: string;
    lastModified: number;
}

interface FileData {
    id: string;
    name: string;
    content: string;
    language: string;
    folderId?: string | null;
    projectId?: string | null;
}

interface FolderData {
    id: string;
    name: string;
    language: string;
    isOpen: boolean;
    projectId?: string | null;
}

interface PlaygroundProps {
    language?: string;
}

const CompilerWorkspace = ({ language }: { language: string }) => {
    const navigate = useNavigate();
    const location = useLocation();
    
    
    const [projects, setProjects] = useState<ProjectData[]>([]);
    const [activeProjectId, setActiveProjectId] = useState<string | null>(null);
    const [isProjectDropdownOpen, setIsProjectDropdownOpen] = useState(false);
    const [isCreatingProject, setIsCreatingProject] = useState(false);
    const [newProjectName, setNewProjectName] = useState('');

    const [terminalTab, setTerminalTab] = useState<'console' | 'ai_debug'>('console');
    const [aiKey, setAiKey] = useState(() => localStorage.getItem('adv_gemini_api_key') || '');
    const [aiResponse, setAiResponse] = useState('');
    const [aiLoading, setAiLoading] = useState(false);

    const [files, setFiles] = useState<FileData[]>([]);
    const [folders, setFolders] = useState<FolderData[]>([]);
    const [activeFileId, setActiveFileId] = useState<string | null>(null);
    const [openTabIds, setOpenTabIds] = useState<string[]>([]); // VS Code-style open tabs
    const [isCreatingFile, setIsCreatingFile] = useState(false);
    const [newFileName, setNewFileName] = useState('');
    const [activeFolderId, setActiveFolderId] = useState<string | null>(null); // which folder new file goes into
    const [isCreatingFolder, setIsCreatingFolder] = useState(false);
    const [newFolderName, setNewFolderName] = useState('');

    const isLoaded = useRef(false);
    const activeFileIdRef = useRef<string | null>(null);

    const [code, setCode] = useState(BOILERPLATE['java']);
    const [isLessonDropdownOpen, setIsLessonDropdownOpen] = useState(false);
    const [output, setOutput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [executionTime, setExecutionTime] = useState<number | null>(null);
    const editorRef = useRef<any>(null);

    const [sidebarWidth, setSidebarWidth] = useState(250);
    const [terminalWidth, setTerminalWidth] = useState(400);
    const [isDraggingSidebar, setIsDraggingSidebar] = useState(false);
    const [isDraggingTerminal, setIsDraggingTerminal] = useState(false);
    const [isDesktop, setIsDesktop] = useState(true);

    const [githubRepoUrl, setGithubRepoUrl] = useState('');
    const [popup, setPopup] = useState<{ title: string, msg: string, type: 'success' | 'error' | 'warning', showGithubInput?: boolean, action?: { label: string, onClick: () => void } } | null>(null);
    const { user } = useAuth();

    const [collabSessionId, setCollabSessionId] = useState<string | null>(null);
    const [collabUser, setCollabUser] = useState<string>('Anonymous');
    const [lastSyncBy, setLastSyncBy] = useState<string>('');
    const [lastLocalEdit, setLastLocalEdit] = useState<number>(0);

    const lastLocalEditRef = useRef<number>(0);
    const collabUserRef = useRef<string>('Anonymous');
    const codeRef = useRef<string>('');

    useEffect(() => {
        lastLocalEditRef.current = lastLocalEdit;
    }, [lastLocalEdit]);

    useEffect(() => {
        collabUserRef.current = collabUser;
    }, [collabUser]);

    useEffect(() => {
        activeFileIdRef.current = activeFileId;
    }, [activeFileId]);



    useEffect(() => {
        codeRef.current = code;
    }, [code]);

    useEffect(() => {
        if (user?.name) {
            setCollabUser(user.name);
        }
    }, [user]);

    // Collab subscription and polling logic
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const collabId = urlParams.get('collabSession');
        if (collabId) {
            setCollabSessionId(collabId);
            
            // Initial fetch of shared session
            const fetchInitialSession = async () => {
                try {
                    const res = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:8080'}/api/share/${collabId}`);
                    if (res.ok) {
                        const data = await res.json();
                        setCode(data.code);
                        // Update active file or code
                        setFiles(prev => {
                            const active = prev.find(f => f.id === activeFileId);
                            if (active) {
                                return prev.map(f => f.id === activeFileId ? { ...f, content: data.code } : f);
                            }
                            return prev;
                        });
                        setLastSyncBy(data.updatedBy);
                    }
                } catch (e) {
                    console.error("Failed to load collaborative session", e);
                }
            };
            fetchInitialSession();

            // Set up polling interval
            const interval = setInterval(async () => {
                const currentFile = files.find(f => f.id === activeFileId);
                const currentCode = currentFile ? currentFile.content : code;
                const activeName = currentFile ? currentFile.name : (language === 'java' ? 'Main.java' : 'main');

                // If user edited locally in the last 1.8 seconds, send the local state with current timestamp
                const isLocalEditRecent = (Date.now() - lastLocalEditRef.current) < 1800;
                const timestampToSend = isLocalEditRecent ? Date.now() : 0; // 0 indicates we are just listening

                try {
                    const res = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:8080'}/api/share/${collabId}/sync`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            code: currentCode,
                            language: language,
                            fileName: activeName,
                            userName: collabUserRef.current,
                            clientTimestamp: timestampToSend
                        })
                    });

                    if (res.ok) {
                        const data = await res.json();
                        
                        // If backend timestamp is newer than our last local edit, catch up to backend
                        if (data.lastUpdated > lastLocalEditRef.current && data.updatedBy !== collabUserRef.current) {
                            setCode(data.code);
                            setFiles(prev => {
                                const active = prev.find(f => f.id === activeFileIdRef.current);
                                if (active) {
                                    return prev.map(f => f.id === activeFileIdRef.current ? { ...f, content: data.code } : f);
                                }
                                return prev;
                            });
                        }
                        setLastSyncBy(data.updatedBy);
                    }
                } catch (e) {
                    console.error("Collab sync error", e);
                }
            }, 1500);

            return () => clearInterval(interval);
        }
    }, [collabSessionId, activeFileId, language]);

    const handleCollabClick = async () => {
        if (collabSessionId) {
            // Already in session, show details or option to exit
            const shareUrl = `${window.location.origin}${window.location.pathname}?collabSession=${collabSessionId}`;
            navigator.clipboard.writeText(shareUrl);
            setPopup({
                title: "Collab Link Copied!",
                msg: `Share this link with your friends to code together:\n\n${shareUrl}`,
                type: 'success',
                action: {
                    label: "Exit Session",
                    onClick: () => {
                        setCollabSessionId(null);
                        navigate(window.location.pathname);
                        setPopup(null);
                    }
                }
            });
            return;
        }

        // Create new session
        try {
            const activeFile = files.find(f => f.id === activeFileId);
            const currentCode = activeFile ? activeFile.content : code;
            const activeName = activeFile ? activeFile.name : (language === 'java' ? 'Main.java' : 'main');

            const res = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:8080'}/api/share/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    code: currentCode,
                    language,
                    fileName: activeName,
                    userName: collabUser
                })
            });

            if (res.ok) {
                const data = await res.json();
                setCollabSessionId(data.sessionId);
                
                // Update URL search query without reloading
                navigate(`${window.location.pathname}?collabSession=${data.sessionId}`);
                
                const shareUrl = `${window.location.origin}${window.location.pathname}?collabSession=${data.sessionId}`;
                navigator.clipboard.writeText(shareUrl);
                setPopup({
                    title: "Collab Session Created!",
                    msg: `You are now live! Share this link with your friend (link copied to clipboard):\n\n${shareUrl}`,
                    type: 'success'
                });
            } else {
                setPopup({
                    title: "Collab Failed",
                    msg: "Failed to initialize collaborative workspace.",
                    type: 'error'
                });
            }
        } catch (e) {
            setPopup({
                title: "Connection Error",
                msg: "Could not connect to sharing server.",
                type: 'error'
            });
        }
    };

    // Fetch projects, folders, and files from database
    const loadWorkspaceFromDb = async () => {
        const token = localStorage.getItem('adv_coder_token');
        if (!token) return null;
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:8080'}/api/auth/projects`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (response.ok) {
                const projectsJsonStr = await response.text();
                if (projectsJsonStr) {
                    try { return JSON.parse(projectsJsonStr); } catch (e) { return null; }
                }
            }
        } catch (e) {
            console.error("Failed to load workspace from database", e);
        }
        return null;
    };

    const logActivity = async (type: string, details: string) => {
        const token = localStorage.getItem('adv_coder_token');
        if (!token) return;
        try {
            await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:8080'}/api/auth/log-activity`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ activityType: type, details })
            });
        } catch (e) {
            console.error("Failed to log activity", e);
        }
    };

    const saveWorkspaceToDb = async (
        updatedProjects: ProjectData[],
        updatedFolders: FolderData[],
        updatedFiles: FileData[],
        updatedRepoUrl?: string
    ) => {
        const token = localStorage.getItem('adv_coder_token');
        if (!token) return;
        
        const payload = {
            projects: updatedProjects,
            folders: updatedFolders,
            files: updatedFiles,
            githubRepoUrl: updatedRepoUrl !== undefined ? updatedRepoUrl : githubRepoUrl
        };
        
        try {
            await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:8080'}/api/auth/projects`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(payload)
            });
            const pName = updatedProjects.find(p => p.id === activeProjectId)?.name || 'default';
            logActivity('WORKSPACE_SAVE', `Saved workspace files for project "${pName}"`);
        } catch (e) {
            console.error("Failed to save workspace to database", e);
        }
    };

    const trackCompilation = async (success: boolean) => {
        const token = localStorage.getItem('adv_coder_token');
        if (!token) return;
        try {
            const activeFile = files.find(f => f.id === activeFileId);
            const fileName = activeFile ? activeFile.name : (language === 'java' ? 'Main.java' : 'main');

            const fileCode = activeFile ? activeFile.content : code;

            await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:8080'}/api/auth/track-compile`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ success, fileName, language, code: fileCode })
            });
            
            if (success) {
                const profileRes = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:8080'}/api/auth/profile`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                if (profileRes.ok) {
                    const profileData = await profileRes.json();
                    if (profileData.streak > 0) {
                        setPopup({
                            title: `🔥 ${profileData.streak} Day Streak!`,
                            msg: "Amazing job! You ran code today. Keep this streak alive tomorrow!",
                            type: 'success'
                        });
                    }
                }
            }
        } catch (e) {
            console.error("Failed to track compilation", e);
        }
    };

    // Track screen size for resizable behavior
    useEffect(() => {
        const checkSize = () => setIsDesktop(window.innerWidth >= 1024);
        checkSize();
        window.addEventListener('resize', checkSize);
        return () => window.removeEventListener('resize', checkSize);
    }, []);

    // Dragging Listeners
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (isDraggingSidebar) {
                const newWidth = e.clientX;
                if (newWidth > 180 && newWidth < 400) {
                    setSidebarWidth(newWidth);
                }
            } else if (isDraggingTerminal) {
                const newWidth = window.innerWidth - e.clientX;
                if (newWidth > 250 && newWidth < 600) {
                    setTerminalWidth(newWidth);
                }
            }
        };

        const handleMouseUp = () => {
            setIsDraggingSidebar(false);
            setIsDraggingTerminal(false);
        };

        if (isDraggingSidebar || isDraggingTerminal) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDraggingSidebar, isDraggingTerminal]);

    const selectFile = (id: string | null) => {
        setActiveFileId(id);
        activeFileIdRef.current = id;
    };

    // Initialization effect
    useEffect(() => {
        const initializeWorkspace = async () => {
            let loadedProjects: ProjectData[] = [];
            let loadedFolders: FolderData[] = [];
            let loadedFiles: FileData[] = [];
            let loadedRepo = "";

            const dbData = await loadWorkspaceFromDb();
            if (dbData) {
                loadedProjects = dbData.projects || [];
                loadedFolders = dbData.folders || [];
                loadedFiles = dbData.files || [];
                loadedRepo = dbData.githubRepoUrl || "";
            }

            if (loadedRepo && typeof loadedRepo === 'string') {
                setGithubRepoUrl(loadedRepo);
            }

            // Project logic
            let currentProjects = loadedProjects.filter(p => p.language === language);
            let currentProjectId: string | null = null;
            
            if (currentProjects.length === 0) {
                const defaultProject = { id: 'default_' + language + '_' + Date.now(), name: 'Default Project', language, lastModified: Date.now() };
                loadedProjects.push(defaultProject);
                currentProjects = [defaultProject];
                currentProjectId = defaultProject.id;
            } else {
                currentProjectId = currentProjects[0].id;
            }
            setProjects(loadedProjects);
            setActiveProjectId(currentProjectId);

            // Migrate old files and folders to the default project if they don't have one
            loadedFiles = loadedFiles.map(f => {
                if (f.language === language && !f.projectId) {
                    return { ...f, projectId: currentProjectId };
                }
                return f;
            });
            
            loadedFolders = loadedFolders.map(f => {
                if (f.language === language && !f.projectId) {
                    return { ...f, projectId: currentProjectId };
                }
                return f;
            });

            setFolders(loadedFolders);

            // Remove duplicates
            const seen = new Set<string>();
            const deduped = loadedFiles.filter(f => {
                const key = `${f.language}::${f.projectId}::${f.folderId}::${f.name}`;
                if (seen.has(key)) return false;
                seen.add(key);
                return true;
            });

            // Check if there is code passed from the courses via router state
            const sharedCode = location.state?.sharedCode;
            const sharedLang = location.state?.sharedLang;
            
            loadedFiles = deduped;
            let fileToOpen: FileData | null = null;
            
            if (sharedCode && sharedLang && sharedLang.toLowerCase() === language.toLowerCase()) {
                const sandboxFileName = language === 'java' ? 'Sandbox.java' : `sandbox.${language === 'python' ? 'py' : language === 'javascript' ? 'js' : language === 'cpp' ? 'cpp' : 'c'}`;
                const existingSandbox = deduped.find(f => f.name === sandboxFileName && f.language === language && f.projectId === currentProjectId);
                
                if (existingSandbox) {
                    loadedFiles = deduped.map(f => f.id === existingSandbox.id ? { ...f, content: sharedCode } : f);
                    fileToOpen = { ...existingSandbox, content: sharedCode };
                } else {
                    const newFile: FileData = {
                        id: 'sandbox_' + Date.now(),
                        name: sandboxFileName,
                        language,
                        content: sharedCode,
                        projectId: currentProjectId
                    };
                    loadedFiles = [...deduped, newFile];
                    fileToOpen = newFile;
                }
            }

            setFiles(loadedFiles);
            const projectFiles = loadedFiles.filter(f => f.language === language && f.projectId === currentProjectId);

            if (fileToOpen) {
                selectFile(fileToOpen.id);
                setOpenTabIds(prev => prev.includes(fileToOpen!.id) ? prev : [...prev, fileToOpen!.id]);
                setCode(fileToOpen.content);
            } else if (projectFiles.length > 0) {
                const fToOpen = projectFiles[0];
                selectFile(fToOpen.id);
                setOpenTabIds([fToOpen.id]);
                setCode(fToOpen.content);
            } else {
                const defaultName = language === 'java' ? 'Main.java' : `main.${language === 'python' ? 'py' : language === 'javascript' ? 'js' : language === 'cpp' ? 'cpp' : 'c'}`;
                const newFile: FileData = {
                    id: Date.now().toString(),
                    name: defaultName,
                    language,
                    content: BOILERPLATE[language],
                    projectId: currentProjectId
                };
                setFiles(prev => [...prev, newFile]);
                selectFile(newFile.id);
                setOpenTabIds([newFile.id]);
                setCode(newFile.content);
            }
            setOutput('');
            setExecutionTime(null);
            setTimeout(() => { isLoaded.current = true; }, 100);
        };
        initializeWorkspace();
    }, [language, location.state]);

    // Debounce saving files, folders, and projects to database
    useEffect(() => {
        if (!isLoaded.current) return;
        
        const delayDebounce = setTimeout(() => {
            saveWorkspaceToDb(projects, folders, files, githubRepoUrl);
        }, 1500); // Wait 1.5s after last change to save to DB
        
        return () => clearTimeout(delayDebounce);
    }, [files, folders, projects, githubRepoUrl]);

    const resolveFileName = (rawName: string, lang: string) => {
        let baseName = rawName.trim();
        const exts: Record<string, string> = { java: '.java', python: '.py', c: '.c', cpp: '.cpp', javascript: '.js' };
        const ext = exts[lang] || '';
        
        if (baseName.endsWith(ext)) baseName = baseName.slice(0, -ext.length);
        if (lang === 'java' && baseName.endsWith('.java')) baseName = baseName.slice(0, -5);

        baseName = baseName.replace(/[^a-zA-Z0-9_]/g, '_');

        if (lang === 'java') {
            if (/^[0-9]/.test(baseName)) baseName = 'Class_' + baseName;
            if (baseName.length > 0) baseName = baseName.charAt(0).toUpperCase() + baseName.slice(1);
            else baseName = 'Main';
            return baseName + '.java';
        } else {
            if (baseName.length === 0) baseName = 'file';
            return baseName + ext;
        }
    };

    const handleCreateFile = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newFileName.trim()) return;
        
        const finalName = resolveFileName(newFileName, language);

        // Duplicate check scoped to same folder context
        if (files.some(f => f.name === finalName && f.language === language && f.projectId === activeProjectId && (f.folderId ?? null) === (activeFolderId ?? null))) {
            setPopup({ title: "File Exists", msg: "A file with this name already exists in this location.", type: 'error' });
            return;
        }

        let defaultContent = '';
        const now = new Date();
        const dateStr = now.toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });

        if (language === 'java') {
            const className = finalName.replace('.java', '');
            defaultContent = [
                `/**`,
                ` * Class: ${className}`,
                ` * Author: ADV Lab`,
                ` * Date: ${dateStr}`,
                ` * Description: Write your description here`,
                ` */`,
                `public class ${className} {`,
                ``,
                `    public static void main(String[] args) {`,
                `        // TODO: Write your code here`,
                `        System.out.println("Hello from ${className}!");`,
                `    }`,
                ``,
                `}`
            ].join('\n');
        } else if (language === 'python') {
            defaultContent = [
                `# File: ${finalName}`,
                `# Author: ADV Lab`,
                `# Date: ${dateStr}`,
                `# Description: Write your description here`,
                ``,
                `# TODO: Write your code here`,
                `print("Hello from ${finalName}!")`,
            ].join('\n');
        } else if (language === 'javascript') {
            defaultContent = [
                `/**`,
                ` * File: ${finalName}`,
                ` * Author: ADV Lab`,
                ` * Date: ${dateStr}`,
                ` * Description: Write your description here`,
                ` */`,
                ``,
                `// TODO: Write your code here`,
                `console.log("Hello from ${finalName}!");`,
            ].join('\n');
        } else {
            // C / C++
            defaultContent = [
                `/**`,
                ` * File: ${finalName}`,
                ` * Author: ADV Lab`,
                ` * Date: ${dateStr}`,
                ` * Description: Write your description here`,
                ` */`,
                ``,
                `#include <stdio.h>`,
                ``,
                `int main() {`,
                `    // TODO: Write your code here`,
                `    printf("Hello from ${finalName}!\\n");`,
                `    return 0;`,
                `}`,
            ].join('\n');
        }

        const newFile: FileData = {
            id: Date.now().toString(),
            name: finalName,
            language,
            content: defaultContent,
            folderId: activeFolderId ?? null,
            projectId: activeProjectId,
        };

        setFiles(prev => [...prev, newFile]);
        selectFile(newFile.id);
        setOpenTabIds(prev => prev.includes(newFile.id) ? prev : [...prev, newFile.id]);
        setCode(defaultContent);
        setIsCreatingFile(false);
        setNewFileName('');
        setActiveFolderId(null);
        
        const pName = projects.find(p => p.id === activeProjectId)?.name || 'default';
        logActivity('FILE_CREATE', `Created file "${finalName}" in project "${pName}"`);
    };

    const handleFileClick = (file: FileData) => {
        selectFile(file.id);
        const freshFile = files.find(f => f.id === file.id);
        const contentToLoad = freshFile ? freshFile.content : file.content;
        setCode(contentToLoad);
        setOpenTabIds(prev => prev.includes(file.id) ? prev : [...prev, file.id]);
        if (editorRef.current) {
            editorRef.current.setValue(contentToLoad);
        }
    };

    const downloadActiveFile = () => {
        const activeFile = files.find(f => f.id === activeFileId);
        if (!activeFile) return;
        
        const blob = new Blob([activeFile.content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = activeFile.name;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        setPopup({
            title: "Downloaded! 💾",
            msg: `Your file ${activeFile.name} has been saved to your computer.`,
            type: 'success'
        });
    };

    const handleSaveRepoUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
        const url = e.target.value;
        setGithubRepoUrl(url);
    };

    const openGithubShare = () => {
        setPopup({
            title: "Share to GitHub",
            msg: "Enter your GitHub Repository URL below. We will copy your code and open the upload page for you!",
            type: 'success',
            showGithubInput: true,
            action: {
                label: "Copy & Open GitHub",
                onClick: () => {
                    const url = localStorage.getItem('adv_repo') || githubRepoUrl;
                    if (!url) {
                        setPopup({ title: "Wait!", msg: "Please enter a valid GitHub Repository URL.", type: 'warning' });
                        return;
                    }
                    navigator.clipboard.writeText(code);
                    
                    const activeFile = files.find(f => f.id === activeFileId);
                    const defaultExt = language === 'python' ? 'py' : language === 'javascript' ? 'js' : language === 'cpp' ? 'cpp' : language === 'c' ? 'c' : 'java';
                    const filename = activeFile ? activeFile.name : `Main.${defaultExt}`;
                    
                    const baseUrl = url.endsWith('/') ? url.slice(0, -1) : url;
                    const finalUrl = `${baseUrl}/new/main?filename=${encodeURIComponent(filename)}&value=${encodeURIComponent(code)}`;
                    
                    window.open(finalUrl, '_blank');
                    logActivity('GITHUB_UPLOAD', `Uploaded file "${filename}" to GitHub Repository: ${url}`);
                    setPopup(null);
                }
            }
        });
    };

    const shareToLinkedIn = () => {
        const activeFile = files.find(f => f.id === activeFileId);
        if (!activeFile) return;

        const text = `I am excited to share my latest programming milestone! 🚀 I have successfully implemented a new solution in ${language.toUpperCase()} using the advanced ADV Lab IDE environment.\n\nContinuous practice and hands-on coding are the keys to mastering software engineering. Here is the core logic of my approach:\n\n\`\`\`${language}\n${activeFile.content}\n\`\`\`\n\nLooking forward to tackling more complex challenges and continuously improving my skills! Let me know your thoughts on this approach.\n\n#vinaykumarmahato #advindiancoder #softwaredevelopment #programming #${language.toLowerCase()} #codingjourney`;
        
        const linkedInUrl = `https://www.linkedin.com/feed/?shareActive=true&text=${encodeURIComponent(text)}`;
        window.open(linkedInUrl, '_blank');
        logActivity('LINKEDIN_SHARE', `Shared file "${activeFile.name}" on LinkedIn`);
    };

    const downloadProjectAsZip = async (silent?: boolean) => {
        if (!activeProjectId) return;
        const project = projects.find(p => p.id === activeProjectId);
        const projectName = project ? project.name.replace(/\s+/g, '_') : 'ADV_Lab_Project';
        
        const zip = new JSZip();
        const projectFiles = files.filter(f => f.language === language && f.projectId === activeProjectId);
        const projectFolders = folders.filter(f => f.language === language && f.projectId === activeProjectId);
        
        projectFiles.forEach(file => {
            if (file.folderId) {
                const folder = projectFolders.find(f => f.id === file.folderId);
                if (folder) {
                    zip.folder(folder.name)?.file(file.name, file.content);
                } else {
                    zip.file(file.name, file.content);
                }
            } else {
                zip.file(file.name, file.content);
            }
        });
        
        const blob = await zip.generateAsync({ type: "blob" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${projectName}.zip`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        if (!silent) {
            setPopup({
                title: "Project Downloaded! 📦",
                msg: `Your entire project '${project?.name || projectName}' has been saved as a ZIP file.`,
                type: 'success'
            });
        }
    };

    const downloadFolderAsZip = async (e: React.MouseEvent, folder: FolderData, silent?: boolean) => {
        e.stopPropagation();
        const zip = new JSZip();
        const folderFiles = files.filter(f => f.language === language && f.projectId === activeProjectId && f.folderId === folder.id);
        
        if (folderFiles.length === 0) {
            setPopup({
                title: "Folder is empty",
                msg: "There are no files to download in this folder.",
                type: 'warning'
            });
            return;
        }

        folderFiles.forEach(file => {
            zip.file(file.name, file.content);
        });
        
        const blob = await zip.generateAsync({ type: "blob" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${folder.name.replace(/\s+/g, '_')}.zip`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        if (!silent) {
            setPopup({
                title: "Folder Downloaded! 📦",
                msg: `Folder '${folder.name}' has been saved as a ZIP file.`,
                type: 'success'
            });
        }
    };

    const openGithubFolderShare = (e: React.MouseEvent, folder: FolderData) => {
        e.stopPropagation();
        setPopup({
            title: "Upload Folder to GitHub",
            msg: "Enter your GitHub Repository URL. We will download your folder as a ZIP file, then open GitHub where you can drag & drop it to upload!",
            type: 'success',
            showGithubInput: true,
            action: {
                label: "Download & Open GitHub",
                onClick: async () => {
                    const url = localStorage.getItem('adv_repo') || githubRepoUrl;
                    if (!url) {
                        setPopup({ title: "Wait!", msg: "Please enter a valid GitHub Repository URL.", type: 'warning' });
                        return;
                    }
                    
                    await downloadFolderAsZip(e, folder, true);
                    
                    const baseUrl = url.endsWith('/') ? url.slice(0, -1) : url;
                    window.open(`${baseUrl}/upload/main`, '_blank');
                    logActivity('GITHUB_UPLOAD', `Uploaded folder "${folder.name}" to GitHub Repository: ${url}`);
                    
                    setPopup({
                        title: "Ready to Upload! 🚀",
                        msg: `The file '${folder.name}.zip' is downloaded.\n\n⚠️ IMPORTANT: First EXTRACT (Unzip) this file on your computer, then drag & drop the extracted folder onto the GitHub page.`,
                        type: 'success'
                    });
                }
            }
        });
    };

    const openGithubProjectShare = () => {
        setPopup({
            title: "Upload Project to GitHub",
            msg: "Enter your GitHub Repository URL. We will download your entire project as a ZIP file, then open GitHub where you can drag & drop it to upload!",
            type: 'success',
            showGithubInput: true,
            action: {
                label: "Download & Open GitHub",
                onClick: async () => {
                    const url = localStorage.getItem('adv_repo') || githubRepoUrl;
                    if (!url) {
                        setPopup({ title: "Wait!", msg: "Please enter a valid GitHub Repository URL.", type: 'warning' });
                        return;
                    }
                    
                    await downloadProjectAsZip(true);
                    
                    const baseUrl = url.endsWith('/') ? url.slice(0, -1) : url;
                    window.open(`${baseUrl}/upload/main`, '_blank');
                    const project = projects.find(p => p.id === activeProjectId);
                    const pName = project ? project.name : 'default';
                    logActivity('GITHUB_UPLOAD', `Uploaded project "${pName}" to GitHub Repository: ${url}`);
                    
                    setPopup({
                        title: "Ready to Upload! 🚀",
                        msg: `Your project ZIP is downloaded.\n\n⚠️ IMPORTANT: First EXTRACT (Unzip) this file on your computer, then drag & drop the extracted folder onto the GitHub page.`,
                        type: 'success'
                    });
                }
            }
        });
    };

    const handleDeleteProject = (e: React.MouseEvent, projectId: string) => {
        e.stopPropagation();
        const project = projects.find(p => p.id === projectId);
        if (!project) return;

        setPopup({
            title: "Delete Project?",
            msg: `Are you sure you want to delete '${project.name}'? All files and folders inside it will be permanently deleted.`,
            type: 'warning',
            action: {
                label: "Yes, Delete Project",
                onClick: () => {
                    const newProjects = projects.filter(p => p.id !== projectId);
                    setProjects(newProjects);
                    
                    const newFolders = folders.filter(f => f.projectId !== projectId);
                    setFolders(newFolders);
                    
                    const newFiles = files.filter(f => f.projectId !== projectId);
                    setFiles(newFiles);
                    
                    if (activeProjectId === projectId) {
                        const remainingProjects = newProjects.filter(p => p.language === language);
                        if (remainingProjects.length > 0) {
                            setActiveProjectId(remainingProjects[0].id);
                            const projFiles = newFiles.filter(f => f.projectId === remainingProjects[0].id);
                            if (projFiles.length > 0) {
                                setActiveFileId(projFiles[0].id);
                                setCode(projFiles[0].content);
                            } else {
                                setActiveFileId(null);
                                setCode('');
                            }
                        } else {
                            setActiveProjectId(null);
                            setActiveFileId(null);
                            setCode('');
                        }
                    }
                    setPopup(null);
                }
            }
        });
    };

    const handleDeleteFile = (e: React.MouseEvent, fileId: string) => {
        e.stopPropagation();
        const fileToDelete = files.find(f => f.id === fileId);
        const fileName = fileToDelete ? fileToDelete.name : 'unknown';

        setPopup({
            title: "Delete File?",
            msg: "Are you sure you want to delete this file? This cannot be undone.",
            type: 'warning',
            action: {
                label: "Yes, Delete",
                onClick: () => {
                    setFiles(prev => {
                        const newFiles = prev.filter(f => f.id !== fileId);
                        if (activeFileId === fileId) {
                            const nextFile = newFiles.find(f => f.language === language && f.projectId === activeProjectId);
                            setActiveFileId(nextFile ? nextFile.id : null);
                            const nextContent = nextFile ? nextFile.content : '';
                            setCode(nextContent);
                            if (editorRef.current) {
                                editorRef.current.setValue(nextContent);
                            }
                        }
                        return newFiles;
                    });
                    const pName = projects.find(p => p.id === activeProjectId)?.name || 'default';
                    logActivity('FILE_DELETE', `Deleted file "${fileName}" from project "${pName}"`);
                    setPopup(null);
                }
            }
        });
    };

    const copyCode = () => {
        navigator.clipboard.writeText(code);
        setPopup({
            title: "Code Copied!",
            msg: "Your code is now in the clipboard. Happy coding!",
            type: 'success'
        });
    };

    const runCode = async () => {
        const langLabel = language === 'cpp' ? 'C++' : language.charAt(0).toUpperCase() + language.slice(1);
        setIsLoading(true);
        setOutput(`🚀 Compiling ${langLabel}...`);
        setExecutionTime(null);
        const startTime = performance.now();

        try {
            if (!activeFileId) {
                setOutput('❌ No active file selected. Please select or create a file to run.');
                setIsLoading(false);
                return;
            }

            const currentCode = editorRef.current ? editorRef.current.getValue() : code;
            let finalCode = currentCode;

            if (language === 'java') {
                // Simple single-file execution — only active file runs
                // Strip package declaration (Judge0 doesn't need it)
                finalCode = finalCode.replace(/^\s*package\s+[\w.]+\s*;/gm, '').trim();

                // Guard regex: matches string literals, char literals, line comments, block comments
                // so we skip renaming inside them
                const skipPattern = `("(?:[^"\\\\]|\\\\.)*"|'(?:[^'\\\\]|\\\\.)*'|\\/\\/[^\\n]*|\\/\\*[\\s\\S]*?\\*\\/)`;

                // Helper: safely replace only identifier occurrences (not inside strings/comments)
                const safeRename = (src: string, from: string, to: string) => {
                    const regex = new RegExp(`${skipPattern}|\\b${from}\\b`, 'g');
                    return src.replace(regex, (match: string, skip: string) => skip ? match : to);
                };

                // Rename the public/first class to "Main" so Judge0 can compile it
                const publicClassMatch = finalCode.match(/public\s+class\s+(\w+)/);
                if (publicClassMatch && publicClassMatch[1] !== 'Main') {
                    finalCode = safeRename(finalCode, publicClassMatch[1], 'Main');
                } else if (!publicClassMatch) {
                    const firstClassMatch = finalCode.match(/class\s+(\w+)/);
                    if (firstClassMatch && firstClassMatch[1] !== 'Main') {
                        finalCode = safeRename(finalCode, firstClassMatch[1], 'Main');
                    }
                    finalCode = finalCode.replace(/\bclass\s+Main\b/, 'public class Main');
                }

                // Auto-add Scanner import if needed
                if (finalCode.includes('Scanner') && !finalCode.includes('import java.util.Scanner')) {
                    finalCode = 'import java.util.Scanner;\n' + finalCode;
                }

                // Ensure main method exists
                if (!finalCode.includes('public static void main')) {
                    const lastBrace = finalCode.lastIndexOf('}');
                    if (lastBrace !== -1) {
                        finalCode = finalCode.slice(0, lastBrace) +
                            `\n    public static void main(String[] args) {\n        System.out.println("Error: main method not found. Please define: public static void main(String[] args)");\n    }\n` +
                            finalCode.slice(lastBrace);
                    }
                }
            }

            const judge0LangMap: Record<string, number> = {
                python: 71,
                java: 62,
                c: 50,
                cpp: 54,
                javascript: 63,
            };

            const langId = judge0LangMap[language];
            if (!langId) {
                setOutput('Unsupported language.');
                setIsLoading(false);
                return;
            }

            const b64 = (str: string) => btoa(unescape(encodeURIComponent(str)));

            const judgeRes = await axios.post(
                'https://ce.judge0.com/submissions?base64_encoded=true&wait=true',
                {
                    language_id: langId,
                    source_code: b64(finalCode),
                    stdin: b64(''),
                },
                { headers: { 'Content-Type': 'application/json' } }
            );

            const endTime = performance.now();
            setExecutionTime(Math.round(endTime - startTime));

            const data = judgeRes.data;

            const safeDecode = (s: string) => {
                if (!s) return '';
                try { return decodeURIComponent(escape(atob(s))); } catch { try { return atob(s); } catch { return s; } }
            };

            const statusId   = data?.status?.id;
            const statusDesc = data?.status?.description || 'Unknown';
            const outText    = safeDecode(data?.stdout || '');
            const errText    = safeDecode(data?.stderr || '');
            const compText   = safeDecode(data?.compile_output || '');
            const msgText    = data?.message || '';

            if (statusId === 3) {
                setOutput(outText.trim() || '✅ Code executed successfully (no output).');
                trackCompilation(true);
            } else {
                trackCompilation(false);
                if (statusId === 6) {
                    setOutput(`❌ Compilation Error:\n${compText || msgText}`);
                } else if (statusId === 5) {
                    setOutput('⏱️ Time Limit Exceeded. Check for infinite loops.');
                } else {
                    let errMsg = errText || compText || msgText || 'Runtime error occurred.';
                    if (errMsg.includes('NoSuchElementException') || errMsg.includes('EOFException')) {
                        errMsg += '\n\n💡 HINT: If you have Scanner inputs, please remove them as this compiler does not support interactive STDIN yet.';
                    }
                    setOutput(`❌ ${statusDesc}:\n${errMsg}`);
                }
            }

        } catch (error: any) {
            console.error('[ADV Lab] Error:', error);
            setOutput(`❌ Execution failed: ${error?.response?.data?.message || error?.message || 'Unknown error'}`);
        } finally {
            setIsLoading(false);
        }
    };

    const runAiQuery = async (promptType: 'explain' | 'fix' | 'optimize') => {
        const apiKey = localStorage.getItem('adv_gemini_api_key') || aiKey;
        if (!apiKey) {
            setPopup({
                title: "Gemini API Key Required",
                msg: "Please enter your free Google Gemini API Key in the AI Debugger panel to enable live AI assistance.",
                type: 'warning'
            });
            setTerminalTab('ai_debug');
            return;
        }

        const activeFile = files.find(f => f.id === activeFileId);
        const fileContent = activeFile ? activeFile.content : code;
        const fileName = activeFile ? activeFile.name : `main.${language}`;

        let prompt = '';
        if (promptType === 'explain') {
            prompt = `You are ADV AI, an expert software developer and compiler assistant on Vinay's ADV Indian Coder academy.
I am writing code in ${language}.
Here is the code of my active file (${fileName}):
\`\`\`${language}
${fileContent}
\`\`\`

Please analyze this code and provide a short, helpful, developer-friendly explanation. Highlight key logic blocks and explain what the code does. Keep your response brief and highly readable.`;
        } else if (promptType === 'fix') {
            prompt = `You are ADV AI, an expert software developer and compiler assistant on Vinay's ADV Indian Coder academy.
I am writing code in ${language}.
Here is the code of my active file (${fileName}):
\`\`\`${language}
${fileContent}
\`\`\`
${output ? `Here is the compiler/execution output:
\`\`\`
${output}
\`\`\`
` : ''}

Please analyze this error output and show me exactly how to fix it. Write a brief explanation and provide the corrected code snippet.`;
        } else if (promptType === 'optimize') {
            prompt = `You are ADV AI, an expert software developer and compiler assistant on Vinay's ADV Indian Coder academy.
I am writing code in ${language}.
Here is the code of my active file (${fileName}):
\`\`\`${language}
${fileContent}
\`\`\`

Analyze this code for performance, cleanliness, and time/space complexity. Suggest 2-3 specific optimization tips and show a revised code snippet.`;
        }

        setAiLoading(true);
        setTerminalTab('ai_debug');
        setAiResponse('🤖 ADV AI is analyzing your workspace...');

        try {
            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contents: [
                        {
                            parts: [
                                {
                                    text: prompt
                                }
                            ]
                        }
                    ]
                })
            });

            if (!response.ok) {
                const errData = await response.json().catch(() => ({}));
                throw new Error(errData?.error?.message || `API error (${response.status})`);
            }

            const data = await response.json();
            const textResult = data?.candidates?.[0]?.content?.parts?.[0]?.text || 'No response generated.';
            setAiResponse(textResult);
        } catch (error: any) {
            console.error('Gemini API Error:', error);
            setAiResponse(`❌ Failed to connect to Gemini API: ${error.message}\n\nPlease check your internet connection and verify that your API key is correct.`);
        } finally {
            setAiLoading(false);
        }
    };

    const seoContent = {
        java: {
            title: "Online Java Compiler - Free Java IDE | ADV Lab",
            description: "Free online Java compiler and IDE by ADV Indian Coder. Write, compile and run Java code instantly in your browser — no installation needed. Perfect for students and developers learning Java programming.",
            keywords: "online java compiler, java compiler online, run java code online, java ide online, free java compiler, java programming online, compile java code, java online editor, java code runner, adv lab java",
            schema: {
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                "name": "ADV Lab – Online Java Compiler",
                "applicationCategory": "DeveloperApplication",
                "operatingSystem": "Web Browser",
                "url": "https://advindiancoder.com/online-java-compiler",
                "description": "Free online Java compiler and IDE. Write, compile and run Java programs directly in your browser without any installation.",
                "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR" },
                "author": { "@type": "Organization", "name": "ADV Indian Coder", "url": "https://advindiancoder.com" }
            }
        },
        python: {
            title: "Online Python Compiler - Free Python IDE | ADV Lab",
            description: "Free online Python compiler by ADV Indian Coder. Write and run Python 3 code directly in your browser. No installation required. Ideal for students learning Python programming.",
            keywords: "online python compiler, python compiler online, run python code online, python ide online, free python compiler, python programming online, execute python code, python online editor, adv lab python",
            schema: {
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                "name": "ADV Lab – Online Python Compiler",
                "applicationCategory": "DeveloperApplication",
                "operatingSystem": "Web Browser",
                "url": "https://advindiancoder.com/online-python-compiler",
                "description": "Free online Python 3 compiler and IDE. Write and run Python scripts directly in your browser without any setup.",
                "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR" },
                "author": { "@type": "Organization", "name": "ADV Indian Coder", "url": "https://advindiancoder.com" }
            }
        },
        c: {
            title: "Online C Compiler - Free C IDE | ADV Lab",
            description: "Free online C compiler by ADV Indian Coder. Write, compile and execute C programs instantly in your browser. No setup required. Best online C compiler for students.",
            keywords: "online c compiler, c compiler online, run c code online, c ide online, free c compiler, c programming online, compile c code, c online editor, c code runner, adv lab c compiler",
            schema: {
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                "name": "ADV Lab – Online C Compiler",
                "applicationCategory": "DeveloperApplication",
                "operatingSystem": "Web Browser",
                "url": "https://advindiancoder.com/online-c-compiler",
                "description": "Free online C compiler and IDE. Write, compile and run C programs instantly in your browser without any installation.",
                "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR" },
                "author": { "@type": "Organization", "name": "ADV Indian Coder", "url": "https://advindiancoder.com" }
            }
        },
        cpp: {
            title: "Online C++ Compiler - Free C++ IDE | ADV Lab",
            description: "Free online C++ compiler and IDE by ADV Indian Coder. Write, compile and run C++ code instantly in your browser. No installation needed. Best online C++ compiler for students.",
            keywords: "online c++ compiler, c++ compiler online, run c++ code online, c++ ide online, free c++ compiler, c++ programming online, compile c++ code, cpp online editor, adv lab c++ compiler",
            schema: {
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                "name": "ADV Lab – Online C++ Compiler",
                "applicationCategory": "DeveloperApplication",
                "operatingSystem": "Web Browser",
                "url": "https://advindiancoder.com/online-cpp-compiler",
                "description": "Free online C++ compiler and IDE. Write, compile and run C++ programs directly in your browser without any setup.",
                "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR" },
                "author": { "@type": "Organization", "name": "ADV Indian Coder", "url": "https://advindiancoder.com" }
            }
        },
        javascript: {
            title: "Online JavaScript Compiler - Free JS IDE | ADV Lab",
            description: "Free online JavaScript compiler and editor by ADV Indian Coder. Write, run and test JavaScript code instantly in your browser. Perfect for frontend developers and students.",
            keywords: "online javascript compiler, javascript compiler online, run javascript online, js ide online, free javascript editor, javascript programming online, execute javascript, js online editor, adv lab javascript",
            schema: {
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                "name": "ADV Lab – Online JavaScript Compiler",
                "applicationCategory": "DeveloperApplication",
                "operatingSystem": "Web Browser",
                "url": "https://advindiancoder.com/online-javascript-compiler",
                "description": "Free online JavaScript editor and runtime. Write and execute JavaScript code directly in your browser without any setup.",
                "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR" },
                "author": { "@type": "Organization", "name": "ADV Indian Coder", "url": "https://advindiancoder.com" }
            }
        }
    };

    const currentSeo = seoContent[language as keyof typeof seoContent] ?? {
        title: "ADV Lab - Free Online Java, Python, C++ Compiler & IDE",
        description: "Use ADV Lab's professional online code editor to practice Java, Python, C, and C++. High-performance IDE with real-time execution for students and developers.",
        keywords: "online compiler, java compiler, python compiler, c compiler, c++ compiler, adv lab, adv indian coder",
        schema: null
    };

    const canonicalMap: Record<string, string> = {
        java: '/online-java-compiler',
        python: '/online-python-compiler',
        c: '/online-c-compiler',
        cpp: '/online-cpp-compiler',
        javascript: '/online-javascript-compiler',
    };

    return (
        <PageWrapper>
            <SEO 
                title={currentSeo.title} 
                description={currentSeo.description}
                canonical={canonicalMap[language] || '/adv-lab'}
                ogType="website"
                schema={currentSeo.schema}
            />
            {/* Keywords meta tag via Helmet directly */}
            <div style={{ display: 'none' }} aria-hidden="true">
                {/* Hidden keyword cloud for semantic relevance */}
                online java compiler, java ide, run java online, java programming, python compiler, c compiler, c++ compiler
            </div>
            <div className="min-h-screen bg-[#05060f] text-white font-sans selection:bg-primary/30 overflow-x-hidden flex flex-col">
                <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] right-[-10%] w-[80%] md:w-[50%] h-[50%] bg-red-600/10 blur-[120px] rounded-full animate-pulse"></div>
                    <div className="absolute bottom-[-10%] left-[-10%] w-[80%] md:w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full"></div>
                </div>

                <div className="relative z-20 px-3 md:px-4 pt-36 sm:pt-40 md:pt-44 lg:pt-48 pb-2">
                    <div className="max-w-[1700px] mx-auto bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-2xl md:rounded-[2rem] p-2 md:p-3 flex flex-col md:flex-row items-center justify-between gap-3 shadow-2xl">
                                <div className="flex items-center gap-4 overflow-x-auto no-scrollbar w-full md:w-auto px-1">
                                    <div className="px-4 py-2 border-r border-white/10 flex items-center gap-3">
                                        <button 
                                            onClick={() => navigate('/adv-lab')} 
                                            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                                            title="Back to Dashboard"
                                        >
                                            <RotateCcw className="w-4 h-4" />
                                        </button>
                                        <div className="flex flex-col">
                                            <span className="text-[9px] font-black tracking-widest text-red-500 uppercase">ADV Lab</span>
                                            <span className="text-[10px] font-bold text-gray-500">Workspace</span>
                                        </div>
                                    </div>
                                    
                                    {/* Dedicated Environment Header for SEO & Visuals */}
                                    {(() => {
                                        const activeLang = LANGUAGES.find(l => l.id === language);
                                        const Icon = activeLang?.icon || Coffee;
                                        return (
                                            <div className={`flex items-center gap-3 px-5 py-2.5 rounded-xl bg-black/60 border border-white/10 shadow-inner group relative overflow-hidden`}>
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]"></div>
                                                <div className="p-1.5 rounded-lg bg-white/5 border border-white/5 shadow-inner group-hover:scale-110 transition-transform">
                                                    <Icon className={`w-5 h-5 ${activeLang?.color} drop-shadow-[0_0_8px_currentColor]`} />
                                                </div>
                                                <div className="flex flex-col leading-none">
                                                    <span className="text-[9px] text-gray-400 font-black uppercase tracking-[0.2em] mb-0.5">ADV Lab Pro Editor</span>
                                                    <h1 className="text-base md:text-lg font-black text-white tracking-tight">
                                                        Online {activeLang?.name} Compiler
                                                    </h1>
                                                </div>
                                            </div>
                                        );
                                    })()}
                                </div>

                                {LESSON_TEMPLATES[language] && (
                                    <div className="flex items-center gap-2 px-4 py-2 border-l border-white/10 ml-2 relative">
                                        <span className="text-[10px] font-black uppercase text-gray-500 hidden sm:inline shrink-0">Practice Lessons:</span>
                                        <div className="relative isolate">
                                            <button 
                                                onClick={() => setIsLessonDropdownOpen(!isLessonDropdownOpen)}
                                                className="flex items-center justify-between gap-4 bg-[#0a0f1c] border border-white/10 rounded-lg px-4 py-1.5 min-w-[220px] text-xs font-bold text-red-500 outline-none hover:border-red-500/50 hover:bg-white/5 transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                                            >
                                                <span>-- Load Lesson Code --</span>
                                                <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${isLessonDropdownOpen ? 'rotate-180' : ''}`} />
                                            </button>
                                            
                                            {isLessonDropdownOpen && (
                                                <>
                                                    <div className="fixed inset-0 z-40" onClick={() => setIsLessonDropdownOpen(false)}></div>
                                                    <div className="absolute top-full left-0 mt-2 w-[350px] max-h-[60vh] overflow-y-auto bg-[#0a0f1c] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] rounded-xl z-[100] py-2 custom-scrollbar flex flex-col">
                                                        <div className="px-4 py-2 border-b border-white/5 mb-1 bg-black/40">
                                                            <span className="text-[9px] font-black tracking-widest text-gray-500 uppercase">{language} Playlists</span>
                                                        </div>
                                                        {Object.keys(LESSON_TEMPLATES[language]).map(lesson => (
                                                            <button
                                                                key={lesson}
                                                                onClick={() => {
                                                                    const tmpl = LESSON_TEMPLATES[language][lesson];
                                                                    
                                                                    let validName = lesson.replace(/[^a-zA-Z0-9]/g, '_');
                                                                    if(language === 'java') {
                                                                        validName = validName.replace(/^[^a-zA-Z]+/, 'L');
                                                                        validName = validName.charAt(0).toUpperCase() + validName.slice(1) + '.java';
                                                                    } else {
                                                                        const ext = language === 'python' ? '.py' : language === 'cpp' ? '.cpp' : language === 'c' ? '.c' : '.js';
                                                                        validName += ext;
                                                                    }
                                                                    
                                                                    const newFile = {
                                                                        id: Date.now().toString(),
                                                                        name: validName,
                                                                        language,
                                                                        content: tmpl,
                                                                        projectId: activeProjectId
                                                                    };
                                                                    setFiles(prev => [...prev, newFile]);
                                                                    selectFile(newFile.id);
                                                                    setOpenTabIds(prev => prev.includes(newFile.id) ? prev : [...prev, newFile.id]);
                                                                    setCode(tmpl);
                                                                    if (editorRef.current) {
                                                                        editorRef.current.setValue(tmpl);
                                                                    }
                                                                    setOutput('');
                                                                    setExecutionTime(null);
                                                                    setIsLessonDropdownOpen(false);
                                                                }}
                                                                className="w-full text-left px-4 py-3 text-xs font-medium text-gray-400 hover:text-white hover:bg-red-500/10 transition-all duration-200 border-l-2 border-transparent hover:border-red-500 group"
                                                            >
                                                                <span className="group-hover:translate-x-1 pr-2 inline-block transition-transform duration-300 line-clamp-2">{lesson}</span>
                                                            </button>
                                                        ))}
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                )}

                                <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end border-t md:border-t-0 border-white/5 pt-2 md:pt-0">
                                    <div className="flex items-center bg-[#0a0f1c] rounded-xl p-1 border border-white/10 shadow-inner">
                                        <button onClick={copyCode} className="p-2.5 rounded-lg text-gray-500 hover:text-white hover:bg-white/5 transition-all group" title="Copy Code">
                                            <Copy className="w-4 h-4 md:w-4 md:h-4 group-active:scale-90 transition-transform" />
                                        </button>
                                    </div>

                                    <button
                                        onClick={runCode}
                                        disabled={isLoading}
                                        className={`group relative flex items-center justify-center gap-3 pl-6 pr-8 py-3 rounded-xl md:rounded-2xl font-black text-white transition-all duration-500 overflow-hidden text-sm md:text-base border shadow-2xl ${
                                            isLoading 
                                                ? 'bg-gray-900 border-white/5 cursor-not-allowed grayscale' 
                                                : 'bg-gradient-to-br from-blue-600 to-indigo-700 border-blue-400/30 hover:border-blue-400/60 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] active:scale-[0.98]'
                                        }`}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]"></div>
                                        
                                        <div className={`flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 border border-white/10 shadow-inner overflow-hidden ${isLoading ? 'animate-pulse' : 'group-hover:scale-110 transition-transform'}`}>
                                            {isLoading ? (
                                                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                            ) : (
                                                <Play className="w-4 h-4 fill-current text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
                                            )}
                                        </div>
                                        
                                        <div className="flex flex-col items-start leading-none shrink-0">
                                            <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.15em] opacity-60">System</span>
                                            <span className="text-sm md:text-base font-black tracking-tight">{isLoading ? 'Loading...' : 'Run Code'}</span>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 px-3 md:px-4 pb-4 md:overflow-hidden flex flex-col">
                            <div className={`max-w-[1700px] w-full mx-auto flex flex-col lg:flex-row gap-2 h-auto lg:h-[calc(100vh-160px)] min-h-[500px] items-stretch ${(isDraggingSidebar || isDraggingTerminal) ? 'select-none' : ''}`}>
                                
                                {/* Explorer Sidebar */}
                                <div 
                                    style={{ width: isDesktop ? `${sidebarWidth}px` : '100%' }}
                                    className="lg:shrink-0 bg-[#1e1e1e]/90 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-[2rem] flex flex-col overflow-hidden shadow-2xl h-[400px] md:h-full"
                                >
                                    
                                    {/* Project Selector */}
                                    <div className="px-3 py-3 border-b border-white/10 bg-black/60 relative">
                                        <div className="text-[10px] font-black uppercase text-gray-500 mb-2 flex justify-between items-center">
                                            <span>Active Project</span>
                                            <div className="flex items-center gap-1">
                                                <button onClick={() => downloadProjectAsZip(false)} className="hover:text-white transition-colors" title="Download Project (ZIP)"><Download className="w-3.5 h-3.5"/></button>
                                                <button onClick={openGithubProjectShare} className="hover:text-white transition-colors" title="Upload Project to GitHub"><Github className="w-3.5 h-3.5"/></button>
                                                <button onClick={() => { setIsCreatingProject(true); setIsProjectDropdownOpen(false); setNewProjectName(''); }} className="hover:text-white transition-colors ml-1" title="New Project"><Plus className="w-3.5 h-3.5"/></button>
                                            </div>
                                        </div>
                                        {isCreatingProject ? (
                                            <form onSubmit={(e) => {
                                                e.preventDefault();
                                                const name = newProjectName.trim();
                                                if (!name) { setIsCreatingProject(false); return; }
                                                const newProject: ProjectData = { id: 'proj_' + Date.now(), name, language, lastModified: Date.now() };
                                                const newProjects = [...projects, newProject];
                                                setProjects(newProjects);
                                                setActiveProjectId(newProject.id);
                                                
                                                const defaultName = language === 'java' ? 'Main.java' : `main.${language === 'python' ? 'py' : language === 'javascript' ? 'js' : language === 'cpp' ? 'cpp' : 'c'}`;
                                                const newFile: FileData = { id: Date.now().toString(), name: defaultName, language, content: BOILERPLATE[language], projectId: newProject.id };
                                                setFiles(prev => [...prev, newFile]);
                                                setActiveFileId(newFile.id);
                                                setOpenTabIds(prev => prev.includes(newFile.id) ? prev : [...prev, newFile.id]);
                                                setCode(BOILERPLATE[language]);
                                                
                                                setIsCreatingProject(false);
                                                setNewProjectName('');
                                            }} className="flex items-center gap-2 bg-black/40 p-1.5 rounded border border-blue-500/50">
                                                <Briefcase className="w-3.5 h-3.5 text-blue-400 shrink-0"/>
                                                <input id="projectName" name="projectName" autoFocus value={newProjectName} onChange={e => setNewProjectName(e.target.value)} onBlur={() => {if(!newProjectName) setIsCreatingProject(false);}} className="bg-transparent text-xs text-white w-full outline-none" placeholder="Project name..."/>
                                            </form>
                                        ) : (
                                            <button onClick={() => setIsProjectDropdownOpen(!isProjectDropdownOpen)} className="w-full flex items-center justify-between bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg px-2 py-1.5 text-xs text-white transition-colors">
                                                <div className="flex items-center gap-2 overflow-hidden">
                                                    <Briefcase className="w-3.5 h-3.5 text-blue-400 shrink-0"/>
                                                    <span className="truncate">{projects.find(p => p.id === activeProjectId)?.name || 'Select Project'}</span>
                                                </div>
                                                <ChevronDown className="w-3.5 h-3.5 text-gray-400"/>
                                            </button>
                                        )}
                                        
                                        {isProjectDropdownOpen && (
                                            <>
                                                <div className="fixed inset-0 z-40" onClick={() => setIsProjectDropdownOpen(false)}></div>
                                                <div className="absolute top-full left-0 right-0 mt-1 bg-[#1e1e1e] border border-white/10 rounded-lg shadow-xl z-50 py-1 max-h-40 overflow-y-auto custom-scrollbar">
                                                    {projects.filter(p => p.language === language).map(p => (
                                                        <div key={p.id} className="w-full flex items-center hover:bg-white/5 group px-1 rounded-md">
                                                            <button onClick={() => {
                                                                setActiveProjectId(p.id);
                                                                setIsProjectDropdownOpen(false);
                                                                const projectFiles = files.filter(f => f.projectId === p.id);
                                                                if (projectFiles.length > 0) {
                                                                    selectFile(projectFiles[0].id);
                                                                    setCode(projectFiles[0].content);
                                                                    if (editorRef.current) editorRef.current.setValue(projectFiles[0].content);
                                                                } else {
                                                                    setCode('');
                                                                    selectFile(null);
                                                                }
                                                            }} className="flex-1 text-left px-2 py-1.5 text-xs text-gray-300 group-hover:text-white flex justify-between items-center">
                                                                <span className="truncate pr-2">{p.name}</span>
                                                                {p.id === activeProjectId && <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 self-center"></div>}
                                                            </button>
                                                            <button 
                                                                onClick={(e) => handleDeleteProject(e, p.id)}
                                                                className="opacity-0 group-hover:opacity-100 p-1.5 text-red-500/70 hover:text-red-400 hover:bg-red-500/20 rounded transition-all shrink-0 mr-1"
                                                                title="Delete Project"
                                                            >
                                                                <Trash2 className="w-3.5 h-3.5" />
                                                            </button>
                                                        </div>
                                                    ))}
                                                </div>
                                            </>
                                        )}
                                    </div>

                                    <div className="px-3 py-2.5 border-b border-white/10 flex items-center justify-between bg-black/40">
                                        <span className="text-xs font-black uppercase tracking-widest text-gray-400 flex items-center gap-2">
                                            <Folder className="w-4 h-4 text-yellow-500" />
                                            Explorer
                                        </span>
                                        {/* VS Code style action icons */}
                                        <div className="flex items-center gap-0.5">
                                            <button
                                                onClick={() => {
                                                    // Smart: if there's an open folder, create inside it (VS Code behavior)
                                                    const openFolder = folders.find(f => f.language === language && f.isOpen);
                                                    setActiveFolderId(openFolder ? openFolder.id : null);
                                                    setIsCreatingFile(true);
                                                    setIsCreatingFolder(false);
                                                    setNewFileName('');
                                                }}
                                                className="hover:bg-white/10 p-1.5 rounded-lg text-gray-400 hover:text-white transition-colors"
                                                title="New File (inside open folder if expanded)"
                                            >
                                                <FilePlus className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => { setIsCreatingFolder(true); setIsCreatingFile(false); setNewFolderName(''); }}
                                                className="hover:bg-white/10 p-1.5 rounded-lg text-gray-400 hover:text-white transition-colors"
                                                title="New Folder"
                                            >
                                                <FolderPlus className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                    
                                    <div className="flex-1 overflow-y-auto p-2 space-y-0.5 custom-scrollbar">

                                        {/* ── New Folder Input ── */}
                                        {isCreatingFolder && (
                                            <form
                                                onSubmit={(e) => {
                                                    e.preventDefault();
                                                    const name = newFolderName.trim();
                                                    if (!name) { setIsCreatingFolder(false); return; }
                                                    const isDup = folders.some(f => f.name === name && f.language === language && f.projectId === activeProjectId);
                                                    if (isDup) return;
                                                    const newFolder: FolderData = { id: Date.now().toString(), name, language, isOpen: true, projectId: activeProjectId };
                                                    setFolders(prev => [...prev, newFolder]);
                                                    setIsCreatingFolder(false);
                                                    setNewFolderName('');
                                                    const pName = projects.find(p => p.id === activeProjectId)?.name || 'default';
                                                    logActivity('FOLDER_CREATE', `Created folder "${name}" in project "${pName}"`);
                                                }}
                                                className="flex items-center gap-2 bg-black/40 p-2 rounded-lg border border-yellow-500/50 shadow-inner mb-1"
                                            >
                                                <Folder className="w-4 h-4 text-yellow-400 shrink-0" />
                                                <input
                                                    id="folderName"
                                                    name="folderName"
                                                    autoFocus
                                                    value={newFolderName}
                                                    onChange={e => setNewFolderName(e.target.value)}
                                                    onBlur={() => { if (!newFolderName) setIsCreatingFolder(false); }}
                                                    className="bg-transparent text-sm font-mono text-white w-full outline-none placeholder:text-gray-600"
                                                    placeholder="folder name"
                                                />
                                            </form>
                                        )}

                                        {/* ── New File Input (root level only — no open folder) ── */}
                                        {isCreatingFile && !activeFolderId && (() => {
                                            const resolvedName = newFileName.trim() ? resolveFileName(newFileName, language) : '';
                                            const isDuplicate = !!resolvedName && files.some(f => f.name === resolvedName && f.language === language && (f.folderId ?? null) === null);
                                            return (
                                                <div className="flex flex-col gap-1 mb-1">
                                                    <form
                                                        onSubmit={(e) => { if (isDuplicate) { e.preventDefault(); return; } handleCreateFile(e); }}
                                                        className={`flex items-center gap-2 bg-black/40 p-2 rounded-lg border shadow-inner transition-colors ${isDuplicate ? 'border-red-500/70' : 'border-blue-500/50'}`}
                                                    >
                                                        <FileCode className={`w-4 h-4 shrink-0 ${isDuplicate ? 'text-red-400' : 'text-blue-400'}`} />
                                                        <input
                                                            id="newFileName"
                                                            name="newFileName"
                                                            autoFocus
                                                            value={newFileName}
                                                            onChange={e => setNewFileName(e.target.value)}
                                                            onBlur={() => { if (!newFileName) setIsCreatingFile(false); }}
                                                            className="bg-transparent text-sm font-mono text-white w-full outline-none placeholder:text-gray-600"
                                                            placeholder={`e.g. App${language === 'java' ? '.java' : language === 'python' ? '.py' : language === 'javascript' ? '.js' : language === 'cpp' ? '.cpp' : '.c'}`}
                                                        />
                                                    </form>
                                                    {isDuplicate && (
                                                        <div className="flex items-center gap-1.5 px-2 py-1 bg-red-500/10 border border-red-500/20 rounded-lg">
                                                            <span className="text-red-400 text-[10px] font-bold">⚠ "{resolvedName}" already exists</span>
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })()}

                                        {/* ── Folders with files inside ── */}
                                        {folders.filter(fo => fo.language === language && fo.projectId === activeProjectId).map(folder => (
                                            <div key={folder.id}>
                                                {/* Folder row — clicking toggles open/close AND selects it */}
                                                <div
                                                    className={`flex items-center justify-between px-2 py-1.5 rounded-lg cursor-pointer group transition-colors ${
                                                        activeFolderId === folder.id && !isCreatingFile ? 'bg-white/5' : 'hover:bg-white/5'
                                                    }`}
                                                    onClick={() => {
                                                        setFolders(prev => prev.map(f => f.id === folder.id ? { ...f, isOpen: !f.isOpen } : f));
                                                    }}
                                                >
                                                    <div className="flex items-center gap-1.5 min-w-0">
                                                        {folder.isOpen
                                                            ? <ChevronDown className="w-3.5 h-3.5 text-gray-500 shrink-0" />
                                                            : <ChevronRight className="w-3.5 h-3.5 text-gray-500 shrink-0" />}
                                                        {folder.isOpen
                                                            ? <FolderOpen className="w-4 h-4 text-yellow-400 shrink-0" />
                                                            : <Folder className="w-4 h-4 text-yellow-400 shrink-0" />}
                                                        <span className="text-xs font-bold text-gray-300 truncate">{folder.name}</span>
                                                    </div>
                                                    {/* Hover actions: add file + delete folder */}
                                                    <div className="flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                                                        <button
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                // open folder and activate file creation inside it
                                                                setFolders(prev => prev.map(f => f.id === folder.id ? { ...f, isOpen: true } : f));
                                                                setActiveFolderId(folder.id);
                                                                setIsCreatingFile(true);
                                                                setIsCreatingFolder(false);
                                                                setNewFileName('');
                                                            }}
                                                            className="p-1 hover:bg-white/10 rounded text-gray-400 hover:text-white transition-all"
                                                            title="New File in Folder"
                                                        >
                                                            <FilePlus className="w-3.5 h-3.5" />
                                                        </button>
                                                        <button
                                                            onClick={(e) => downloadFolderAsZip(e, folder)}
                                                            className="p-1 hover:bg-blue-500/20 rounded text-blue-400 transition-all"
                                                            title="Download Folder (ZIP)"
                                                        >
                                                            <Download className="w-3 h-3" />
                                                        </button>
                                                        <button
                                                            onClick={(e) => openGithubFolderShare(e, folder)}
                                                            className="p-1 hover:bg-white/10 rounded text-gray-400 hover:text-white transition-all"
                                                            title="Upload Folder to GitHub"
                                                        >
                                                            <Github className="w-3 h-3" />
                                                        </button>
                                                        <button
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                setFolders(prev => prev.filter(f => f.id !== folder.id));
                                                                setFiles(prev => prev.map(f => f.folderId === folder.id ? { ...f, folderId: null } : f));
                                                                const pName = projects.find(p => p.id === activeProjectId)?.name || 'default';
                                                                logActivity('FOLDER_DELETE', `Deleted folder "${folder.name}" from project "${pName}"`);
                                                            }}
                                                            className="p-1 hover:bg-red-500/20 rounded text-red-400 transition-all"
                                                            title="Delete Folder"
                                                        >
                                                            <Trash2 className="w-3 h-3" />
                                                        </button>
                                                    </div>
                                                </div>

                                                {/* Children: inline file input + files inside folder */}
                                                {folder.isOpen && (
                                                    <div className="ml-1 border-l border-white/5 pl-2">
                                                        {/* Inline file creation input inside this folder */}
                                                        {isCreatingFile && activeFolderId === folder.id && (() => {
                                                            const resolvedName = newFileName.trim() ? resolveFileName(newFileName, language) : '';
                                                            const isDuplicate = !!resolvedName && files.some(f => f.name === resolvedName && f.language === language && (f.folderId ?? null) === folder.id);
                                                            return (
                                                                <div className="flex flex-col gap-1 py-1">
                                                                    <form
                                                                        onSubmit={(e) => { if (isDuplicate) { e.preventDefault(); return; } handleCreateFile(e); }}
                                                                        className={`flex items-center gap-2 bg-black/40 p-1.5 rounded-lg border shadow-inner transition-colors ${isDuplicate ? 'border-red-500/70' : 'border-blue-500/50'}`}
                                                                    >
                                                                        <FileCode className={`w-3.5 h-3.5 shrink-0 ${isDuplicate ? 'text-red-400' : 'text-blue-400'}`} />
                                                                        <input
                                                                            id="inlineFileName"
                                                                            name="inlineFileName"
                                                                            autoFocus
                                                                            value={newFileName}
                                                                            onChange={e => setNewFileName(e.target.value)}
                                                                            onBlur={() => { if (!newFileName) { setIsCreatingFile(false); setActiveFolderId(null); } }}
                                                                            className="bg-transparent text-xs font-mono text-white w-full outline-none placeholder:text-gray-600"
                                                                            placeholder={`filename${language === 'java' ? '.java' : language === 'python' ? '.py' : language === 'javascript' ? '.js' : language === 'cpp' ? '.cpp' : '.c'}`}
                                                                        />
                                                                    </form>
                                                                    {isDuplicate && (
                                                                        <span className="text-red-400 text-[10px] font-bold px-1">⚠ "{resolvedName}" exists</span>
                                                                    )}
                                                                </div>
                                                            );
                                                        })()}

                                                        {/* Files inside this folder */}
                                                        {files.filter(f => f.language === language && f.folderId === folder.id && f.projectId === activeProjectId).map(f => (
                                                            <div
                                                                key={f.id}
                                                                onClick={() => handleFileClick(f)}
                                                                className={`flex items-center justify-between px-2 py-1.5 rounded-lg cursor-pointer text-sm font-mono transition-all group ${
                                                                    activeFileId === f.id
                                                                        ? 'bg-blue-600/20 text-white'
                                                                        : 'text-gray-400 hover:bg-white/5 hover:text-white'
                                                                }`}
                                                            >
                                                                <div className="flex items-center gap-2 overflow-hidden">
                                                                    <FileCode className={`w-3.5 h-3.5 shrink-0 ${activeFileId === f.id ? 'text-blue-400' : 'text-gray-500'}`} />
                                                                    <span className="truncate text-xs">{f.name}</span>
                                                                </div>
                                                                <button
                                                                    onClick={(e) => handleDeleteFile(e, f.id)}
                                                                    className="opacity-0 group-hover:opacity-100 p-1 hover:bg-red-500/20 rounded text-red-400 transition-all"
                                                                >
                                                                    <Trash2 className="w-3 h-3" />
                                                                </button>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        ))}

                                        {/* ── Root-level files (no folder) ── */}
                                        {files.filter(f => f.language === language && (!f.folderId || !folders.some(fo => fo.id === f.folderId)) && f.projectId === activeProjectId).map(f => (
                                            <div
                                                key={f.id}
                                                onClick={() => handleFileClick(f)}
                                                className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer text-sm font-mono transition-all group ${
                                                    activeFileId === f.id
                                                        ? 'bg-blue-600/20 text-white border border-blue-500/30 shadow-lg'
                                                        : 'text-gray-400 border border-transparent hover:bg-white/5 hover:border-white/10 hover:text-white'
                                                }`}
                                            >
                                                <div className="flex items-center gap-2 overflow-hidden">
                                                    <FileCode className={`w-4 h-4 shrink-0 ${activeFileId === f.id ? 'text-blue-400' : 'text-gray-500 group-hover:text-gray-300'}`} />
                                                    <span className="truncate">{f.name}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <button 
                                                        onClick={(e) => handleDeleteFile(e, f.id)}
                                                        className="opacity-0 group-hover:opacity-100 p-1 hover:bg-red-500/20 rounded text-red-400 transition-all"
                                                        title="Delete File"
                                                    >
                                                        <Trash2 className="w-3.5 h-3.5" />
                                                    </button>
                                                    {activeFileId === f.id && (
                                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse shrink-0"></div>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                        {files.filter(f => f.language === language && f.projectId === activeProjectId).length === 0 && !isCreatingFile && (
                                            <div className="text-center p-4 text-gray-500 text-xs">
                                                No files yet. Click + to create one.
                                            </div>
                                        )}
                                    </div>
                                    
                                    <div className="p-3 border-t border-white/10 bg-black/20 flex flex-col gap-2">
                                        <button 
                                            onClick={downloadActiveFile} 
                                            className="w-full flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl py-2 text-xs font-bold text-gray-400 hover:text-white transition-all active:scale-95"
                                        >
                                            <Download className="w-4 h-4" /> Save Current File
                                        </button>
                                        <button 
                                            onClick={handleCollabClick} 
                                            className={`w-full flex items-center justify-center gap-2 border rounded-xl py-2 text-xs font-bold transition-all active:scale-95 cursor-pointer ${collabSessionId ? 'bg-green-500/10 border-green-500/30 text-green-400 hover:bg-green-500/20' : 'bg-blue-500/10 border-blue-500/30 text-blue-400 hover:bg-blue-500/20'}`}
                                        >
                                            <Users className="w-4 h-4 shrink-0" /> {collabSessionId ? 'Live Collab Active' : 'Start Live Collab'}
                                        </button>
                                        <div className="flex gap-2">
                                            <button 
                                                onClick={openGithubShare} 
                                                className="flex-1 flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl py-2 text-xs font-bold text-gray-400 hover:text-white transition-all"
                                                title="Share to GitHub"
                                            >
                                                <Github className="w-4 h-4" /> GitHub
                                            </button>
                                            <button 
                                                onClick={shareToLinkedIn} 
                                                className="flex-1 flex items-center justify-center gap-2 bg-[#0A66C2]/10 hover:bg-[#0A66C2]/20 border border-[#0A66C2]/20 hover:border-[#0A66C2]/40 rounded-xl py-2 text-xs font-bold text-white transition-all"
                                                title="Share to LinkedIn"
                                            >
                                                <Linkedin className="w-4 h-4" /> LinkedIn
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Drag Bar 1 (Sidebar | Editor) */}
                                <div 
                                    onMouseDown={() => setIsDraggingSidebar(true)} 
                                    className="hidden lg:block w-1.5 hover:w-2 hover:bg-blue-500/50 bg-white/5 cursor-col-resize self-stretch transition-all duration-150 z-10 rounded-full"
                                    title="Drag to resize"
                                ></div>

                                {/* Editor Section */}
                                <div 
                                    style={{ flex: isDesktop ? '1 1 0%' : 'none' }}
                                    className="lg:shrink-0 bg-[#1e1e1e] rounded-2xl md:rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl relative min-h-[400px] md:min-h-0 h-[60vh] md:h-full flex flex-col"
                                >
                                    <div className="flex bg-[#1a1a1a] border-b border-white/10 overflow-x-auto no-scrollbar">
                                        {files.filter(f => f.language === language && f.projectId === activeProjectId && openTabIds.includes(f.id)).map(f => (
                                            <div 
                                                key={f.id}
                                                onClick={() => handleFileClick(f)}
                                                className={`group flex items-center gap-1.5 pl-3 pr-1.5 py-2.5 min-w-[100px] max-w-[180px] border-r border-white/5 cursor-pointer transition-colors ${
                                                    activeFileId === f.id ? 'bg-[#1e1e1e] border-t-2 border-t-blue-500 text-white' : 'bg-transparent text-gray-500 hover:bg-white/5 border-t-2 border-t-transparent hover:text-gray-300'
                                                }`}
                                            >
                                                <FileCode className={`w-3.5 h-3.5 shrink-0 ${activeFileId === f.id ? 'text-blue-400' : 'text-gray-500'}`} />
                                                <span className="text-xs font-mono truncate flex-1">{f.name}</span>
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        // Switch to next file before "closing" (deselecting)
                                                        if (activeFileId === f.id) {
                                                            const projectFiles = files.filter(fi => fi.language === language && fi.projectId === activeProjectId && fi.id !== f.id);
                                                            if (projectFiles.length > 0) {
                                                                selectFile(projectFiles[0].id);
                                                                setCode(projectFiles[0].content);
                                                                if (editorRef.current) editorRef.current.setValue(projectFiles[0].content);
                                                            } else {
                                                                selectFile(null);
                                                                setCode('');
                                                            }
                                                        }
                                                        // Remove from open tabs (visual close only — file still exists in explorer)
                                                        setOpenTabIds(prev => prev.filter(id => id !== f.id));
                                                    }}
                                                    className={`shrink-0 p-0.5 rounded transition-all hover:bg-white/20 hover:text-white ${
                                                        activeFileId === f.id ? 'opacity-60 hover:opacity-100' : 'opacity-0 group-hover:opacity-60 hover:!opacity-100'
                                                    }`}
                                                    title="Close Tab"
                                                >
                                                    <X className="w-3 h-3" />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                    
                                    <div className="flex-1 w-full relative pt-2">
                                        <div className="absolute top-2 right-4 z-30 pointer-events-none">
                                            <span className="bg-black/80 backdrop-blur-md border border-white/10 text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] px-3 md:px-4 py-1.5 md:py-2 rounded-full text-red-500 shadow-xl">
                                                {language} MODE
                                            </span>
                                        </div>
                                        {collabSessionId && (
                                            <div className="absolute top-2 left-4 z-30 pointer-events-none">
                                                <span className="bg-green-500/90 backdrop-blur-md border border-green-400/20 text-[8px] md:text-[9px] font-black uppercase tracking-[0.1em] px-3 py-1 rounded-full text-white shadow-xl flex items-center gap-1.5 animate-pulse">
                                                    <Users className="w-2.5 h-2.5 shrink-0" /> Collab Active {lastSyncBy && `• Changed by: ${lastSyncBy}`}
                                                </span>
                                            </div>
                                        )}
                                        {activeFileId && openTabIds.length > 0 ? (
                                            <Editor
                                                height="100%"
                                                language={language === 'cpp' ? 'cpp' : language} path={activeFileId || 'default'}
                                                value={files.find(f => f.id === activeFileId)?.content ?? code}
                                                onChange={(val) => {
                                                    const value = val || '';
                                                    setCode(value);
                                                    setLastLocalEdit(Date.now());
                                                    const currentFileId = activeFileIdRef.current;
                                                    if (currentFileId) {
                                                        setFiles(prev => prev.map(f => f.id === currentFileId ? { ...f, content: value } : f));
                                                    }
                                                }}
                                                theme="vs-dark"
                                                onMount={(editor) => {
                                                    editorRef.current = editor;
                                                }}
                                                options={{
                                                    fontSize: window.innerWidth < 768 ? 14 : 18,
                                                    fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                                                    minimap: { enabled: false },
                                                    scrollBeyondLastLine: false,
                                                    automaticLayout: true,
                                                    padding: { top: 10, bottom: 20 },
                                                    cursorSmoothCaretAnimation: "on",
                                                    smoothScrolling: true,
                                                    lineNumbers: 'on',
                                                    renderLineHighlight: 'all',
                                                    bracketPairColorization: { enabled: true },
                                                }}
                                            />
                                        ) : (
                                            <div className="h-full flex flex-col items-center justify-center gap-6 select-none">
                                                <div className="relative">
                                                    <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full animate-pulse scale-150"></div>
                                                    <Bot className="w-24 h-24 text-blue-400 animate-bounce relative z-10 drop-shadow-[0_0_20px_rgba(96,165,250,0.5)]" />
                                                </div>
                                                <div className="text-center flex flex-col gap-2">
                                                    <p className="text-base font-black text-white tracking-tight">
                                                        {openTabIds.length === 0 && files.filter(f => f.language === language && f.projectId === activeProjectId).length > 0
                                                            ? 'All Tabs Closed'
                                                            : 'No File Open'}
                                                    </p>
                                                    <p className="text-[11px] text-gray-500 font-mono leading-relaxed max-w-[200px] mx-auto">
                                                        {openTabIds.length === 0 && files.filter(f => f.language === language && f.projectId === activeProjectId).length > 0
                                                            ? 'Click any file in the Explorer to open it here'
                                                            : 'Create a file or folder in the Explorer to start writing code'}
                                                    </p>
                                                </div>
                                                {files.filter(f => f.language === language && f.projectId === activeProjectId).length > 0 && (
                                                    <div className="flex flex-wrap gap-2 justify-center max-w-[220px]">
                                                        {files.filter(f => f.language === language && f.projectId === activeProjectId).slice(0, 3).map(f => (
                                                            <button
                                                                key={f.id}
                                                                onClick={() => handleFileClick(f)}
                                                                className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 hover:bg-blue-500/20 border border-white/10 hover:border-blue-500/30 rounded-lg text-[10px] font-mono text-gray-400 hover:text-white transition-all"
                                                            >
                                                                <FileCode className="w-3 h-3 text-blue-400" />
                                                                {f.name}
                                                            </button>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Drag Bar 2 (Editor | Terminal) */}
                                <div 
                                    onMouseDown={() => setIsDraggingTerminal(true)} 
                                    className="hidden lg:block w-1.5 hover:w-2 hover:bg-blue-500/50 bg-white/5 cursor-col-resize self-stretch transition-all duration-150 z-10 rounded-full"
                                    title="Drag to resize"
                                ></div>

                                {/* Terminal */}
                                <div 
                                    style={{ width: isDesktop ? `${terminalWidth}px` : '100%' }}
                                    className="lg:shrink-0 flex flex-col gap-3 min-h-[400px] md:min-h-0 h-auto md:h-full overflow-hidden"
                                >
                                    <div className="flex-1 bg-black rounded-2xl md:rounded-[2rem] border border-white/10 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col relative min-h-[500px] md:min-h-0 transition-all duration-500">
                                        
                                        <div className="bg-[#1a1a1a] px-3 py-2 border-b border-black flex items-center justify-between shrink-0 relative z-10">
                                            <div className="flex items-center gap-2">
                                                <button
                                                    onClick={() => setTerminalTab('console')}
                                                    type="button"
                                                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                                                        terminalTab === 'console' 
                                                            ? 'bg-white/10 text-white border border-white/10' 
                                                            : 'text-gray-400 hover:text-white'
                                                    }`}
                                                >
                                                    Terminal Output
                                                </button>
                                                <button
                                                    onClick={() => setTerminalTab('ai_debug')}
                                                    type="button"
                                                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                                                        terminalTab === 'ai_debug'
                                                            ? 'bg-purple-600/20 text-purple-300 border border-purple-500/30'
                                                            : 'text-gray-400 hover:text-white'
                                                    }`}
                                                >
                                                    <Bot className="w-3.5 h-3.5" /> AI Debugger
                                                </button>
                                            </div>
                                            {executionTime && terminalTab === 'console' && (
                                                <div className="flex items-center gap-2 px-2.5 py-1 bg-white/5 rounded-lg border border-white/10">
                                                    <Zap className="w-3.5 h-3.5 text-yellow-500" />
                                                    <span className="text-[9px] md:text-[10px] font-mono text-gray-400">{executionTime}ms</span>
                                                </div>
                                            )}
                                        </div>
                                        
                                        {terminalTab === 'console' ? (
                                            <div className="flex-1 p-6 font-mono text-sm md:text-base overflow-y-auto leading-relaxed relative z-10 custom-scrollbar flex flex-col gap-4">
                                                <div className="flex items-center gap-2 opacity-60">
                                                    <span className="text-primary font-bold">C:\ADV-LAB&gt;</span>
                                                    <span className="text-gray-300">adv run {language}</span>
                                                </div>

                                                <div className="whitespace-pre-wrap flex-1 scroll-auto select-text">
                                                    {output ? (
                                                        <div className={output.startsWith('❌') ? 'text-red-400' : 'text-gray-100'}>
                                                            {output}
                                                        </div>
                                                    ) : (
                                                        <div className="text-gray-600 italic text-sm">
                                                            Microsoft Windows [Version 10.0.19045.5011]<br />
                                                            (c) Microsoft Corporation. All rights reserved.<br /><br />
                                                            Preparing environment... Ready.
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="flex-1 p-5 flex flex-col gap-4 overflow-y-auto custom-scrollbar relative z-10">
                                                {/* API Key Box */}
                                                {!localStorage.getItem('adv_gemini_api_key') && !aiKey ? (
                                                    <div className="bg-purple-950/20 border border-purple-500/20 rounded-2xl p-5 text-center flex flex-col items-center">
                                                        <Bot className="w-10 h-10 text-purple-400 mb-3 animate-pulse" />
                                                        <h4 className="text-sm font-black text-white mb-2">Gemini AI Assistant Offline</h4>
                                                        <p className="text-xs text-gray-400 leading-relaxed mb-4 max-w-xs">
                                                            To enable live AI reviews, explanations, and error fixes, please input your Google Gemini API Key below. Keys are free to get and stored locally on your browser.
                                                        </p>
                                                        <div className="w-full flex gap-2">
                                                            <input 
                                                                type="password"
                                                                placeholder="Enter Gemini API Key..."
                                                                className="flex-1 bg-black/60 border border-white/10 rounded-xl px-3 py-2 text-xs text-white outline-none focus:border-purple-500"
                                                                value={aiKey}
                                                                onChange={(e) => setAiKey(e.target.value)}
                                                            />
                                                            <button
                                                                onClick={() => {
                                                                    if (aiKey.trim()) {
                                                                        localStorage.setItem('adv_gemini_api_key', aiKey.trim());
                                                                        setAiKey(aiKey.trim());
                                                                    }
                                                                }}
                                                                type="button"
                                                                className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl text-xs transition-all active:scale-95"
                                                            >
                                                                Save
                                                            </button>
                                                        </div>
                                                        <a 
                                                            href="https://aistudio.google.com/" 
                                                            target="_blank" 
                                                            rel="noopener noreferrer"
                                                            className="text-[10px] text-purple-400 hover:underline mt-3"
                                                        >
                                                            Get a Free Google Gemini API Key →
                                                        </a>
                                                    </div>
                                                ) : (
                                                    <div className="flex items-center justify-between bg-white/5 border border-white/5 rounded-xl p-3 text-xs">
                                                        <div className="flex items-center gap-2 text-green-400">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                                                            <span className="font-bold">Gemini AI Online</span>
                                                        </div>
                                                        <button
                                                            onClick={() => {
                                                                localStorage.removeItem('adv_gemini_api_key');
                                                                setAiKey('');
                                                                setAiResponse('');
                                                            }}
                                                            type="button"
                                                            className="text-gray-500 hover:text-red-400 transition-colors font-bold text-[10px] uppercase"
                                                        >
                                                            Disconnect Key
                                                        </button>
                                                    </div>
                                                )}

                                                {/* Action Buttons */}
                                                <div className="grid grid-cols-3 gap-2">
                                                    <button 
                                                        disabled={aiLoading}
                                                        onClick={() => runAiQuery('explain')}
                                                        type="button"
                                                        className="py-2 rounded-xl bg-white/5 border border-white/10 text-[10px] font-bold hover:bg-white/10 text-gray-300 hover:text-white transition-all hover:border-purple-500/40 text-center shrink-0 flex items-center justify-center gap-1.5"
                                                    >
                                                        Explain Code
                                                    </button>
                                                    <button 
                                                        disabled={aiLoading}
                                                        onClick={() => runAiQuery('fix')}
                                                        type="button"
                                                        className={`py-2 rounded-xl bg-white/5 border text-[10px] font-bold hover:bg-white/10 text-gray-300 hover:text-white transition-all text-center shrink-0 flex items-center justify-center gap-1.5 ${output && output.startsWith('❌') ? 'border-red-500/40 text-red-300 hover:bg-red-500/10' : 'border-white/10 hover:border-purple-500/40'}`}
                                                    >
                                                        Fix Errors
                                                    </button>
                                                    <button 
                                                        disabled={aiLoading}
                                                        onClick={() => runAiQuery('optimize')}
                                                        type="button"
                                                        className="py-2 rounded-xl bg-white/5 border border-white/10 text-[10px] font-bold hover:bg-white/10 text-gray-300 hover:text-white transition-all hover:border-purple-500/40 text-center shrink-0 flex items-center justify-center gap-1.5"
                                                    >
                                                        Optimize Code
                                                    </button>
                                                </div>

                                                {/* Response Textbox */}
                                                <div className="flex-1 bg-black/60 border border-white/5 rounded-2xl p-4 font-sans text-xs md:text-sm leading-relaxed overflow-y-auto whitespace-pre-wrap select-text custom-scrollbar">
                                                    {aiResponse ? (
                                                        <div className="text-gray-200">
                                                            {aiResponse}
                                                        </div>
                                                    ) : (
                                                        <div className="text-gray-500 italic text-center py-12 flex flex-col items-center gap-2">
                                                            <Bot className="w-8 h-8 text-gray-700 animate-pulse" />
                                                            <span>Ready to assist. Select an action above to review your code.</span>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
            </div>

            {popup && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setPopup(null)}></div>
                    <div className={`relative bg-[#0d1117] border rounded-[2.5rem] p-6 md:p-8 max-w-sm w-full shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col items-center text-center animate-scale-in ${
                        popup.type === 'error' ? 'border-red-500/20 shadow-red-500/10' : 
                        popup.type === 'warning' ? 'border-yellow-500/20 shadow-yellow-500/10' :
                        'border-green-500/20 shadow-green-500/10'}`}>
                        
                        <div className="absolute -top-14 md:-top-16 -right-2 md:-right-4 w-20 h-20 md:w-28 md:h-28 animate-float pointer-events-none overflow-hidden rounded-full z-10 border border-white/5 bg-black/20">
                            <img 
                                src={
                                    popup.type === 'error' ? "/coder_robot_helper.png" : 
                                    popup.type === 'warning' ? "/robot_thinking.png" :
                                    "/robot_success.png"
                                } 
                                alt="Robot Helper" 
                                className="w-full h-full object-cover mix-blend-screen scale-125" 
                            />
                        </div>
                        
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border ${
                            popup.type === 'error' ? 'bg-red-500/10 border-red-500/20' : 
                            popup.type === 'warning' ? 'bg-yellow-500/10 border-yellow-500/20' :
                            'bg-green-500/10 border-green-500/20'}`}>
                            {popup.type === 'error' ? (
                                <Zap className="w-8 h-8 text-red-500 animate-pulse" />
                            ) : popup.type === 'warning' ? (
                                <RotateCcw className="w-8 h-8 text-yellow-500 animate-spin-slow" />
                            ) : (
                                <PartyPopper className="w-8 h-8 text-green-500" />
                            )}
                        </div>
                        
                        <h3 className="text-2xl font-black text-white mb-3">
                            {popup.title}
                        </h3>
                        
                        <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                            {popup.msg}
                        </p>
                        
                        <div className="flex flex-col gap-3 w-full">
                            {popup.showGithubInput && (
                                <input
                                    type="url"
                                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none mb-2 focus:border-blue-500 transition-colors"
                                    placeholder="https://github.com/username/repo"
                                    value={githubRepoUrl}
                                    onChange={handleSaveRepoUrl}
                                />
                            )}
                            {popup.action ? (
                                <button
                                    onClick={popup.action.onClick}
                                    className={`w-full font-black py-4 px-6 rounded-2xl transition-all shadow-xl active:scale-95 flex items-center justify-center gap-2 ${
                                        popup.type === 'warning' ? 'bg-yellow-500 hover:bg-yellow-400 text-black' : 'bg-green-500 hover:bg-green-400 text-black'
                                    }`}
                                >
                                    {popup.type === 'warning' ? <RotateCcw className="w-5 h-5" /> : <CheckCircle2 className="w-5 h-5" />}
                                    {popup.action.label}
                                </button>
                            ) : (
                                <button
                                    onClick={() => setPopup(null)}
                                    className={`w-full text-black font-black py-4 px-6 rounded-2xl transition-all shadow-xl active:scale-95 ${popup.type === 'error' ? 'bg-white hover:bg-gray-200' : 'bg-green-500 hover:bg-green-400'}`}
                                >
                                    {popup.type === 'error' ? 'Got it, let me fix!' : 'Awesome!'}
                                </button>
                            )}
                            
                            <button
                                onClick={() => setPopup(null)}
                                className="w-full text-gray-500 font-bold py-2 hover:text-white transition-colors text-xs"
                            >
                                Maybe Later
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </PageWrapper>
    );
};

export default CompilerWorkspace;
