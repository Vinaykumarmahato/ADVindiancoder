import re
import os

filepath = 'pages/ide/CompilerWorkspace.tsx'
if not os.path.exists(filepath):
    filepath = 'components/ide/CompilerWorkspace.tsx'

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Imports
content = content.replace(
    "import { Play, RotateCcw, Copy, Share2, Terminal, Code2, Coffee, Zap, Award, Github, PartyPopper, CheckCircle2, ChevronDown, ChevronRight, Folder, FolderOpen, FolderPlus, FileCode, FilePlus, Plus, X, Download, Trash2, Linkedin } from 'lucide-react';",
    "import { Play, RotateCcw, Copy, Share2, Terminal, Code2, Coffee, Zap, Award, Github, PartyPopper, CheckCircle2, ChevronDown, ChevronRight, Folder, FolderOpen, FolderPlus, FileCode, FilePlus, Plus, X, Download, Trash2, Linkedin, Briefcase, Archive } from 'lucide-react';\nimport JSZip from 'jszip';"
)

# 2. Interfaces
content = content.replace(
    "interface FileData {\n    id: string;\n    name: string;\n    content: string;\n    language: string;\n    folderId?: string | null;\n}",
    "interface ProjectData {\n    id: string;\n    name: string;\n    language: string;\n    lastModified: number;\n}\n\ninterface FileData {\n    id: string;\n    name: string;\n    content: string;\n    language: string;\n    folderId?: string | null;\n    projectId?: string | null;\n}"
)
content = content.replace(
    "interface FolderData {\n    id: string;\n    name: string;\n    language: string;\n    isOpen: boolean;\n}",
    "interface FolderData {\n    id: string;\n    name: string;\n    language: string;\n    isOpen: boolean;\n    projectId?: string | null;\n}"
)

# 3. State vars
content = content.replace(
    "const [files, setFiles] = useState<FileData[]>([]);",
    "const [projects, setProjects] = useState<ProjectData[]>([]);\n    const [activeProjectId, setActiveProjectId] = useState<string | null>(null);\n    const [isProjectDropdownOpen, setIsProjectDropdownOpen] = useState(false);\n    const [isCreatingProject, setIsCreatingProject] = useState(false);\n    const [newProjectName, setNewProjectName] = useState('');\n\n    const [files, setFiles] = useState<FileData[]>([]);"
)

# 4. UseEffect initialization (replacing lines 91 to 142)
old_init = """    // Single init effect — load from localStorage first, then initialize the language file
    useEffect(() => {
        let loadedFiles: FileData[] = [];

        const savedFiles = localStorage.getItem('adv_lab_files');
        if (savedFiles) {
            try {
                const parsed = JSON.parse(savedFiles);
                if (Array.isArray(parsed) && parsed.length > 0) {
                    loadedFiles = parsed;
                }
            } catch (e) {}
        }

        const savedRepo = localStorage.getItem('adv_repo');
        if (savedRepo) setGithubRepoUrl(savedRepo);

        // Remove any duplicate names for this language before loading
        const seen = new Set<string>();
        const deduped = loadedFiles.filter(f => {
            const key = `${f.language}::${f.name}`;
            if (seen.has(key)) return false;
            seen.add(key);
            return true;
        });

        const langFiles = deduped.filter(f => f.language === language);

        if (langFiles.length > 0) {
            // Language already has files — just open the first one
            setFiles(deduped);
            const fileToOpen = langFiles[0];
            setActiveFileId(fileToOpen.id);
            setCode(fileToOpen.content);
        } else {
            // No files for this language yet — create the default one
            const defaultName = language === 'java' ? 'Main.java'
                : `main.${language === 'python' ? 'py' : language === 'javascript' ? 'js' : language === 'cpp' ? 'cpp' : 'c'}`;

            const newFile: FileData = {
                id: Date.now().toString(),
                name: defaultName,
                language,
                content: BOILERPLATE[language],
            };
            const merged = [...deduped, newFile];
            setFiles(merged);
            setActiveFileId(newFile.id);
            setCode(newFile.content);
        }
        setOutput('');
        setExecutionTime(null);
    }, []); // ← runs ONCE on mount only"""

new_init = """    // Initialization effect
    useEffect(() => {
        let loadedProjects: ProjectData[] = [];
        const savedProjects = localStorage.getItem('adv_lab_projects');
        if (savedProjects) {
            try { loadedProjects = JSON.parse(savedProjects); } catch (e) {}
        }
        
        let loadedFolders: FolderData[] = [];
        const savedFolders = localStorage.getItem('adv_lab_folders');
        if (savedFolders) {
            try { loadedFolders = JSON.parse(savedFolders); } catch(e) {}
        }

        let loadedFiles: FileData[] = [];
        const savedFiles = localStorage.getItem('adv_lab_files');
        if (savedFiles) {
            try {
                const parsed = JSON.parse(savedFiles);
                if (Array.isArray(parsed) && parsed.length > 0) {
                    loadedFiles = parsed;
                }
            } catch (e) {}
        }

        const savedRepo = localStorage.getItem('adv_repo');
        if (savedRepo) setGithubRepoUrl(savedRepo);

        // Project logic
        let currentProjects = loadedProjects.filter(p => p.language === language);
        let currentProjectId: string | null = null;
        
        if (currentProjects.length === 0) {
            const defaultProject = { id: 'default_' + language + '_' + Date.now(), name: 'Default Project', language, lastModified: Date.now() };
            loadedProjects.push(defaultProject);
            currentProjects = [defaultProject];
            currentProjectId = defaultProject.id;
            localStorage.setItem('adv_lab_projects', JSON.stringify(loadedProjects));
        } else {
            currentProjectId = currentProjects[0].id;
        }
        setProjects(loadedProjects);
        setActiveProjectId(currentProjectId);

        // Migrate old files and folders to the default project if they don't have one
        let filesMigrated = false;
        loadedFiles = loadedFiles.map(f => {
            if (f.language === language && !f.projectId) {
                filesMigrated = true;
                return { ...f, projectId: currentProjectId };
            }
            return f;
        });
        
        let foldersMigrated = false;
        loadedFolders = loadedFolders.map(f => {
            if (f.language === language && !f.projectId) {
                foldersMigrated = true;
                return { ...f, projectId: currentProjectId };
            }
            return f;
        });

        if (foldersMigrated) {
            localStorage.setItem('adv_lab_folders', JSON.stringify(loadedFolders));
        }
        setFolders(loadedFolders);

        // Remove duplicates
        const seen = new Set<string>();
        const deduped = loadedFiles.filter(f => {
            const key = `${f.language}::${f.projectId}::${f.folderId}::${f.name}`;
            if (seen.has(key)) return false;
            seen.add(key);
            return true;
        });

        if (filesMigrated || deduped.length !== loadedFiles.length) {
            localStorage.setItem('adv_lab_files', JSON.stringify(deduped));
        }

        const projectFiles = deduped.filter(f => f.language === language && f.projectId === currentProjectId);

        setFiles(deduped);
        if (projectFiles.length > 0) {
            const fileToOpen = projectFiles[0];
            setActiveFileId(fileToOpen.id);
            setCode(fileToOpen.content);
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
            setActiveFileId(newFile.id);
            setCode(newFile.content);
        }
        setOutput('');
        setExecutionTime(null);
    }, [language]);

    useEffect(() => {
        if (folders.length > 0) {
            localStorage.setItem('adv_lab_folders', JSON.stringify(folders));
        }
    }, [folders]);"""
content = content.replace(old_init, new_init)

# 5. handleCreateFile
old_handle_create = "if (files.some(f => f.name === finalName && f.language === language && (f.folderId ?? null) === (activeFolderId ?? null))) {"
new_handle_create = "if (files.some(f => f.name === finalName && f.language === language && f.projectId === activeProjectId && (f.folderId ?? null) === (activeFolderId ?? null))) {"
content = content.replace(old_handle_create, new_handle_create)

content = content.replace(
    "folderId: activeFolderId ?? null,\n        };",
    "folderId: activeFolderId ?? null,\n            projectId: activeProjectId,\n        };"
)

# 6. Streak update in runCode
content = content.replace(
    "if (statusId === 3) {\n                setOutput(outText.trim() || '✅ Code executed successfully (no output).');\n            } else if (statusId === 6) {",
    "if (statusId === 3) {\n                setOutput(outText.trim() || '✅ Code executed successfully (no output).');\n                try {\n                    const streakData = localStorage.getItem('adv_lab_streak');\n                    const today = new Date().toDateString();\n                    let count = 1;\n                    if (streakData) {\n                        const parsed = JSON.parse(streakData);\n                        const lastDate = new Date(parsed.lastRunDate).toDateString();\n                        if (today !== lastDate) {\n                            const diffTime = Math.abs(new Date(today).getTime() - new Date(lastDate).getTime());\n                            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));\n                            count = diffDays === 1 ? parsed.count + 1 : 1;\n                            localStorage.setItem('adv_lab_streak', JSON.stringify({ count, lastRunDate: today }));\n                            window.dispatchEvent(new Event('adv_streak_updated'));\n                            setTimeout(() => {\n                                setPopup({\n                                    title: `🔥 ${count} Day Streak!`,\n                                    msg: \"Amazing job! You ran code today. Keep this streak alive tomorrow!\",\n                                    type: 'success'\n                                });\n                            }, 1000);\n                        }\n                    } else {\n                        localStorage.setItem('adv_lab_streak', JSON.stringify({ count: 1, lastRunDate: today }));\n                        window.dispatchEvent(new Event('adv_streak_updated'));\n                        setTimeout(() => {\n                            setPopup({\n                                title: `🔥 1 Day Streak!`,\n                                msg: \"Amazing job! You started your streak today. Keep it alive tomorrow!\",\n                                type: 'success'\n                            });\n                        }, 1000);\n                    }\n                } catch(e) {}\n            } else if (statusId === 6) {"
)

# 7. Add downloadProjectAsZip
zip_func = """    const downloadProjectAsZip = async () => {
        if (!activeProjectId) return;
        const project = projects.find(p => p.id === activeProjectId);
        const projectName = project ? project.name.replace(/\\s+/g, '_') : 'ADV_Lab_Project';
        
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
        
        setPopup({
            title: "Project Downloaded! 📦",
            msg: `Your entire project '${project?.name || projectName}' has been saved as a ZIP file.`,
            type: 'success'
        });
    };

    const handleDeleteFile = (e: React.MouseEvent, fileId: string) => {"""
content = content.replace("const handleDeleteFile = (e: React.MouseEvent, fileId: string) => {", zip_func)

# 8. Render Project dropdown in UI
old_ui_start = """                                {/* Explorer Sidebar */}
                                <div className="lg:col-span-2 bg-[#1e1e1e]/90 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-[2rem] flex flex-col overflow-hidden shadow-2xl h-[400px] md:h-full">
                                    <div className="px-3 py-2.5 border-b border-white/10 flex items-center justify-between bg-black/40">"""

new_ui_start = """                                {/* Explorer Sidebar */}
                                <div className="lg:col-span-2 bg-[#1e1e1e]/90 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-[2rem] flex flex-col overflow-hidden shadow-2xl h-[400px] md:h-full">
                                    
                                    {/* Project Selector */}
                                    <div className="px-3 py-3 border-b border-white/10 bg-black/60 relative">
                                        <div className="text-[10px] font-black uppercase text-gray-500 mb-2 flex justify-between items-center">
                                            <span>Active Project</span>
                                            <button onClick={() => { setIsCreatingProject(true); setIsProjectDropdownOpen(false); setNewProjectName(''); }} className="hover:text-white transition-colors" title="New Project"><Plus className="w-3.5 h-3.5"/></button>
                                        </div>
                                        {isCreatingProject ? (
                                            <form onSubmit={(e) => {
                                                e.preventDefault();
                                                const name = newProjectName.trim();
                                                if (!name) { setIsCreatingProject(false); return; }
                                                const newProject: ProjectData = { id: 'proj_' + Date.now(), name, language, lastModified: Date.now() };
                                                const newProjects = [...projects, newProject];
                                                setProjects(newProjects);
                                                localStorage.setItem('adv_lab_projects', JSON.stringify(newProjects));
                                                setActiveProjectId(newProject.id);
                                                
                                                const defaultName = language === 'java' ? 'Main.java' : `main.${language === 'python' ? 'py' : language === 'javascript' ? 'js' : language === 'cpp' ? 'cpp' : 'c'}`;
                                                const newFile: FileData = { id: Date.now().toString(), name: defaultName, language, content: BOILERPLATE[language], projectId: newProject.id };
                                                setFiles(prev => [...prev, newFile]);
                                                setActiveFileId(newFile.id);
                                                setCode(BOILERPLATE[language]);
                                                
                                                setIsCreatingProject(false);
                                                setNewProjectName('');
                                            }} className="flex items-center gap-2 bg-black/40 p-1.5 rounded border border-blue-500/50">
                                                <Briefcase className="w-3.5 h-3.5 text-blue-400 shrink-0"/>
                                                <input autoFocus value={newProjectName} onChange={e => setNewProjectName(e.target.value)} onBlur={() => {if(!newProjectName) setIsCreatingProject(false);}} className="bg-transparent text-xs text-white w-full outline-none" placeholder="Project name..."/>
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
                                                        <button key={p.id} onClick={() => {
                                                            setActiveProjectId(p.id);
                                                            setIsProjectDropdownOpen(false);
                                                            const projectFiles = files.filter(f => f.projectId === p.id);
                                                            if (projectFiles.length > 0) {
                                                                setActiveFileId(projectFiles[0].id);
                                                                setCode(projectFiles[0].content);
                                                                if (editorRef.current) editorRef.current.setValue(projectFiles[0].content);
                                                            } else {
                                                                setCode('');
                                                                setActiveFileId(null);
                                                            }
                                                        }} className="w-full text-left px-3 py-1.5 text-xs text-gray-300 hover:text-white hover:bg-blue-500/20 flex justify-between group">
                                                            <span className="truncate pr-2">{p.name}</span>
                                                            {p.id === activeProjectId && <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 self-center"></div>}
                                                        </button>
                                                    ))}
                                                </div>
                                            </>
                                        )}
                                    </div>

                                    <div className="px-3 py-2.5 border-b border-white/10 flex items-center justify-between bg-black/40">"""
content = content.replace(old_ui_start, new_ui_start)

# 9. Update folder filtering in rendering
content = content.replace(
    "const isDup = folders.some(f => f.name === name && f.language === language);",
    "const isDup = folders.some(f => f.name === name && f.language === language && f.projectId === activeProjectId);"
)
content = content.replace(
    "const newFolder: FolderData = { id: Date.now().toString(), name, language, isOpen: true };",
    "const newFolder: FolderData = { id: Date.now().toString(), name, language, isOpen: true, projectId: activeProjectId };"
)
content = content.replace(
    "folders.filter(fo => fo.language === language).map(folder => (",
    "folders.filter(fo => fo.language === language && fo.projectId === activeProjectId).map(folder => ("
)

# 10. Update file filtering in rendering
content = content.replace(
    "files.filter(f => f.language === language && f.folderId === folder.id).map(f => (",
    "files.filter(f => f.language === language && f.folderId === folder.id && f.projectId === activeProjectId).map(f => ("
)
content = content.replace(
    "files.filter(f => f.language === language && !f.folderId).map(f => (",
    "files.filter(f => f.language === language && !f.folderId && f.projectId === activeProjectId).map(f => ("
)
content = content.replace(
    "files.filter(f => f.language === language).length === 0",
    "files.filter(f => f.language === language && f.projectId === activeProjectId).length === 0"
)
content = content.replace(
    "files.filter(f => f.language === language).map(f => (",
    "files.filter(f => f.language === language && f.projectId === activeProjectId).map(f => ("
)
content = content.replace(
    "const projectFiles = files.filter(f => f.projectId === p.id);",
    "const projectFiles = files.filter(f => f.projectId === p.id && (f.folderId ?? null) === null);" # bug fix for selecting correct file on project switch
)

# 11. Add ZIP Download Button
old_download_btn = """                                    <div className="p-3 border-t border-white/10 bg-black/20 flex flex-col gap-2">
                                        <button 
                                            onClick={downloadActiveFile} 
                                            className="w-full flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl py-2.5 text-xs font-black text-gray-300 hover:text-white transition-all active:scale-95"
                                        >
                                            <Download className="w-4 h-4" /> Save to Device
                                        </button>"""
new_download_btn = """                                    <div className="p-3 border-t border-white/10 bg-black/20 flex flex-col gap-2">
                                        <button 
                                            onClick={downloadProjectAsZip} 
                                            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 hover:from-blue-600/40 hover:to-indigo-600/40 border border-blue-500/30 hover:border-blue-500/60 rounded-xl py-2.5 text-xs font-black text-blue-300 hover:text-white transition-all active:scale-95 shadow-[0_0_15px_rgba(37,99,235,0.1)]"
                                        >
                                            <Archive className="w-4 h-4" /> Download Project (ZIP)
                                        </button>
                                        <button 
                                            onClick={downloadActiveFile} 
                                            className="w-full flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl py-2 text-xs font-bold text-gray-400 hover:text-white transition-all active:scale-95"
                                        >
                                            <Download className="w-4 h-4" /> Save Current File
                                        </button>"""
content = content.replace(old_download_btn, new_download_btn)

# Lesson template load fix
content = content.replace(
    "const newFile = {\n                                                                        id: Date.now().toString(),\n                                                                        name: validName,\n                                                                        language,\n                                                                        content: tmpl\n                                                                    };",
    "const newFile = {\n                                                                        id: Date.now().toString(),\n                                                                        name: validName,\n                                                                        language,\n                                                                        content: tmpl,\n                                                                        projectId: activeProjectId\n                                                                    };"
)


with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Modification complete.")
