import React, { useState } from 'react';
import CoursePageLayout from '../../components/CoursePageLayout';
import { GitBranch, Code, BookOpen, Lightbulb, FileText, Cpu, Layers, ShieldAlert, Zap, Workflow, Check, AlertTriangle } from 'lucide-react';
import CodeBlock from '../../components/CodeBlock';
import MermaidDiagram from '../../components/MermaidDiagram';

interface GitTopic {
    id: string;
    title: string;
    definition: string;
    example?: string;
    syntax?: string;
    realLifeScenario?: string;
    codeSnippet?: string | null;
    content: React.ReactNode;
}

const GitCoursePage = () => {
    const [activeTopicIndex, setActiveTopicIndex] = useState(0);

    const courseData: GitTopic[] = [
        // ==================== BEGINNER TIER ====================
        {
            id: 'git-intro-dvcs',
            title: '1. [Beginner] Introduction & Version Control System (DVCS)',
            definition: 'Git is an open-source Distributed Version Control System (DVCS) created by Linus Torvalds. It tracks file changes across 3 stages: Working Directory, Staging Area, and Local Repository.',
            syntax: `# Git 3-Trees Architecture Workflow Blueprint:
Working Directory (Unstaged) ──> git add ──> Staging Index ──> git commit -m ──> Local Head Repository ──> git push ──> Remote Origin`,
            codeSnippet: `# 1. Configure Global Developer Identity
$ git config --global user.name "Vinay Mahato"
$ git config --global user.email "vinay@advindiancoder.com"
$ git config --global init.defaultBranch main

# 2. Verify Settings
$ git config --list`,
            realLifeScenario: 'Linux, Google, and Microsoft use Git to coordinate code contributions across thousands of developers offline and online.',
            content: (
                <div className="space-y-6">
                    {/* 1. Definition */}
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-md">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center"><BookOpen className="w-5 h-5 mr-2" /> Definition</h4>
                        <p className="text-gray-700 dark:text-gray-300">Git is a fast, scalable, distributed revision control system with an unusually rich command set that provides both high-level operations and full access to internals.</p>
                    </div>
                    {/* 2. Real-Life Analogy */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-md">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center"><Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example</h4>
                        <p className="text-gray-700 dark:text-gray-300">Imagine playing a video game where you can save your progress at any point. If you make a mistake, you can reload a previous save. Git provides these &quot;save points&quot; for code.</p>
                    </div>
                    {/* 3. Visual Explanation */}
                    <div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-5 h-5 mr-2" /> Visual Explanation</h4>
                        <MermaidDiagram chart={`graph LR
A[Working Directory] -->|git add| B(Staging Area)
B -->|git commit| C{Local Repo}
C -->|git push| D[(Remote Repo)]
D -->|git pull| A`} />
                    </div>
                    {/* 4. Sample Code */}
                    <div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-5 h-5 mr-2" /> Sample Code</h4>
                        <CodeBlock code={`git init\ngit status`} lang="bash" />
                    </div>
                    {/* 5. Real-World Application */}
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-md">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center"><Cpu className="w-5 h-5 mr-2" /> Real-World Application</h4>
                        <p className="text-gray-700 dark:text-gray-300">Tracking changes across large codebases in software companies, allowing multiple developers to work concurrently.</p>
                    </div>
                    {/* 6. Advantages */}
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-4">
                        <h4 className="text-lg font-bold text-emerald-400 mb-2 flex items-center"><Check className="w-5 h-5 mr-2" /> Advantages</h4>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Distributed architecture enables offline work</li>
                            <li>Lightning-fast branching and merging</li>
                            <li>Strong cryptographic integrity for historical data</li>
                        </ul>
                    </div>
                    {/* 7. Disadvantages */}
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-4">
                        <h4 className="text-lg font-bold text-red-400 mb-2 flex items-center"><AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages / Limitations</h4>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Steep learning curve for beginners</li>
                            <li>Poor handling of large binary files by default</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'git-basic-commands',
            title: '2. [Beginner] Basic Git Commands (init, status, add, commit)',
            definition: 'Master core daily Git commands: `git init` (initialize repo), `git clone`, `git status`, `git add` (stage changes), `git commit -m` (snapshot changes), `git log`, and `git diff`.',
            syntax: `$ git init                         # Initialize empty repository
$ git add .                       # Stage all modified files
$ git commit -m "feat: Add user"  # Create snapshot commit
$ git log --oneline               # View concise commit history`,
            codeSnippet: `# Complete Daily Git Workflow
$ git status
On branch main
Changes not staged for commit:
  modified:   src/App.tsx

$ git add src/App.tsx
$ git commit -m "feat: Implement responsive navigation navbar"
[main 4f8b2c1] feat: Implement responsive navigation navbar
 1 file changed, 25 insertions(+)

$ git log --oneline -n 3
4f8b2c1 (HEAD -> main) feat: Implement responsive navigation navbar
8a1d9e2 docs: Update README instructions
1f0c3a4 Initial commit`,
            realLifeScenario: 'Developers commit incremental logical units of work to create historical checkpoints for easy bug rollback.',
            content: (
                <div className="space-y-6">
                    {/* 1. Definition */}
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-md">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center"><BookOpen className="w-5 h-5 mr-2" /> Definition</h4>
                        <p className="text-gray-700 dark:text-gray-300">Basic commands represent the day-to-day workflow of a developer for tracking and saving changes to a repository.</p>
                    </div>
                    {/* 2. Real-Life Analogy */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-md">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center"><Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example</h4>
                        <p className="text-gray-700 dark:text-gray-300">Think of <code className="text-cyan-600 font-mono">git add</code> as placing items in a shopping cart and <code className="text-cyan-600 font-mono">git commit</code> as checking out and getting a receipt.</p>
                    </div>
                    {/* 3. Visual Explanation */}
                    <div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-5 h-5 mr-2" /> Visual Explanation</h4>
                        <MermaidDiagram chart={`stateDiagram-v2
[*] --> Untracked
Untracked --> Staged : git add
Staged --> Unmodified : git commit
Unmodified --> Modified : edit file
Modified --> Staged : git add`} />
                    </div>
                    {/* 4. Sample Code */}
                    <div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-5 h-5 mr-2" /> Sample Code</h4>
                        <CodeBlock code={`git init\ngit add index.html\ngit commit -m "Initial layout"`} lang="bash" />
                    </div>
                    {/* 5. Real-World Application */}
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-md">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center"><Cpu className="w-5 h-5 mr-2" /> Real-World Application</h4>
                        <p className="text-gray-700 dark:text-gray-300">Developers use these commands dozens of times a day to save incremental progress securely.</p>
                    </div>
                    {/* 6. Advantages */}
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-4">
                        <h4 className="text-lg font-bold text-emerald-400 mb-2 flex items-center"><Check className="w-5 h-5 mr-2" /> Advantages</h4>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Precise control over what changes are bundled together using the staging area</li>
                            <li>Clear historical logs of progress</li>
                        </ul>
                    </div>
                    {/* 7. Disadvantages */}
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-4">
                        <h4 className="text-lg font-bold text-red-400 mb-2 flex items-center"><AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages / Limitations</h4>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Forgetting to <code className="text-cyan-400 font-mono">git add</code> before a commit is a common mistake</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'git-branching-merging',
            title: '3. [Beginner] Branching & Merging (Fast-Forward vs 3-Way)',
            definition: 'Branches create isolated lines of development (`git switch -c feature`). Merging combines branches using Fast-Forward (linear HEAD movement) or 3-Way Merge commits.',
            syntax: `$ git switch -c feature/login    # Create & switch to feature branch
$ git switch main                 # Switch back to main branch
$ git merge feature/login         # Merge feature into main`,
            codeSnippet: `# Handling Merge Conflicts
$ git merge feature/payment
Auto-merging src/checkout.ts
CONFLICT (content): Merge conflict in src/checkout.ts
Automatic merge failed; fix conflicts and then commit the result.

# Resolution in Code Editor:
<<<<<<< HEAD (Current Change - main)
const paymentGateway = "Stripe";
=======
const paymentGateway = "Razorpay";
>>>>>>> feature/payment

# Stage resolved file & complete merge
$ git add src/checkout.ts
$ git commit -m "merge: Resolve payment gateway conflict using Razorpay"`,
            realLifeScenario: 'Feature branching keeps the `main` production branch stable while developers work concurrently on new experimental features.',
            content: (
                <div className="space-y-6">
                    {/* 1. Definition */}
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-md">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center"><BookOpen className="w-5 h-5 mr-2" /> Definition</h4>
                        <p className="text-gray-700 dark:text-gray-300">Branching allows you to diverge from the main line of development and continue to do work without messing with that main line. Merging brings those changes back together.</p>
                    </div>
                    {/* 2. Real-Life Analogy */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-md">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center"><Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example</h4>
                        <p className="text-gray-700 dark:text-gray-300">Like writing a book: the main plot is the <code className="text-cyan-600 font-mono">main</code> branch, while side character storylines are developed in separate feature branches before merging into the main narrative.</p>
                    </div>
                    {/* 3. Visual Explanation */}
                    <div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-5 h-5 mr-2" /> Visual Explanation</h4>
                        <MermaidDiagram chart={`gitGraph
commit
commit
branch feature
checkout feature
commit
commit
checkout main
commit
merge feature`} />
                    </div>
                    {/* 4. Sample Code */}
                    <div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-5 h-5 mr-2" /> Sample Code</h4>
                        <CodeBlock code={`git branch feature-x\ngit checkout feature-x\n# make changes\ngit checkout main\ngit merge feature-x`} lang="bash" />
                    </div>
                    {/* 5. Real-World Application */}
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-md">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center"><Cpu className="w-5 h-5 mr-2" /> Real-World Application</h4>
                        <p className="text-gray-700 dark:text-gray-300">Teams use branching to ensure that the production environment is never broken by incomplete work.</p>
                    </div>
                    {/* 6. Advantages */}
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-4">
                        <h4 className="text-lg font-bold text-emerald-400 mb-2 flex items-center"><Check className="w-5 h-5 mr-2" /> Advantages</h4>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Isolates experimental changes</li>
                            <li>Enables multiple developers to work concurrently without interfering</li>
                        </ul>
                    </div>
                    {/* 7. Disadvantages */}
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-4">
                        <h4 className="text-lg font-bold text-red-400 mb-2 flex items-center"><AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages / Limitations</h4>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Merge conflicts can be complex to resolve if branches diverge significantly</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'git-remote-collaboration',
            title: '4. [Beginner] Remote Repositories & Collaboration (push, pull, fetch)',
            definition: 'Connect local repositories to remote servers (GitHub, GitLab, Bitbucket) using `git remote add`. Synchronize code using `git push`, `git fetch`, and `git pull`.',
            syntax: `$ git remote add origin https://github.com/user/repo.git
$ git push -u origin main          # Push & set tracking branch
$ git fetch origin                # Download remote commits without merging
$ git pull origin main             # Fetch + Merge remote changes`,
            codeSnippet: `# Synchronizing with Remote Branch
$ git fetch origin

# Check how many commits local is behind remote
$ git status
On branch main
Your branch is behind 'origin/main' by 2 commits, and can be fast-forwarded.

# Pull updates safely
$ git pull --rebase origin main`,
            realLifeScenario: 'Teams use `git fetch` before merging to inspect incoming remote code changes before altering their local working branch state.',
            content: (
                <div className="space-y-6">
                    {/* 1. Definition */}
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-md">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center"><BookOpen className="w-5 h-5 mr-2" /> Definition</h4>
                        <p className="text-gray-700 dark:text-gray-300">Remote repositories are versions of your project that are hosted on the internet or network somewhere, allowing team collaboration.</p>
                    </div>
                    {/* 2. Real-Life Analogy */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-md">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center"><Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example</h4>
                        <p className="text-gray-700 dark:text-gray-300">Like a shared Google Drive folder where everyone uploads their local files (<code className="text-cyan-600 font-mono">push</code>) and downloads others&apos; updates (<code className="text-cyan-600 font-mono">pull</code>).</p>
                    </div>
                    {/* 3. Visual Explanation */}
                    <div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-5 h-5 mr-2" /> Visual Explanation</h4>
                        <MermaidDiagram chart={`sequenceDiagram
actor Dev1
participant GitHub
actor Dev2
Dev1->>GitHub: git push origin main
GitHub-->>Dev2: (New commits available)
Dev2->>GitHub: git fetch origin
Dev2->>Dev2: git merge origin/main`} />
                    </div>
                    {/* 4. Sample Code */}
                    <div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-5 h-5 mr-2" /> Sample Code</h4>
                        <CodeBlock code={`git remote add origin https://github.com/user/repo.git\ngit push -u origin main`} lang="bash" />
                    </div>
                    {/* 5. Real-World Application */}
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-md">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center"><Cpu className="w-5 h-5 mr-2" /> Real-World Application</h4>
                        <p className="text-gray-700 dark:text-gray-300">Platforms like GitHub or GitLab act as the central source of truth for remote collaboration in modern software engineering.</p>
                    </div>
                    {/* 6. Advantages */}
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-4">
                        <h4 className="text-lg font-bold text-emerald-400 mb-2 flex items-center"><Check className="w-5 h-5 mr-2" /> Advantages</h4>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Creates off-site backups of the codebase</li>
                            <li>Enables async collaboration across global teams</li>
                        </ul>
                    </div>
                    {/* 7. Disadvantages */}
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-4">
                        <h4 className="text-lg font-bold text-red-400 mb-2 flex items-center"><AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages / Limitations</h4>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Requires network access to synchronize</li>
                            <li>Network issues or authentication failures can block pushes</li>
                        </ul>
                    </div>
                </div>
            )
        },

        // ==================== INTERMEDIATE TIER ====================
        {
            id: 'git-undo-resetting-changes',
            title: '5. [Intermediate] Undo & Resetting Changes (restore, reset, revert)',
            definition: 'Discard uncommitted changes with `git restore`. Alter commit history using `git reset` (--soft, --mixed, --hard). Create safe public undo commits using `git revert`.',
            syntax: `$ git restore file.txt               # Discard working tree changes
$ git reset --soft HEAD~1           # Undo commit, keep staged files
$ git reset --hard HEAD~1           # WIPE commit & working tree changes!
$ git revert <commit-hash>          # Create new commit undoing target commit`,
            codeSnippet: `# Safe Revert vs Destructive Reset
# 1. Safe Undo on Shared Public Branch (git revert):
$ git revert 4f8b2c1
[main e9a3d1b] Revert "feat: Implement broken login API"
 1 file changed, 10 deletions(-)

# 2. Local Private Clean Reset (git reset --hard):
$ git reset --hard HEAD~1
HEAD is now at 8a1d9e2 docs: Update README instructions`,
            realLifeScenario: 'Never use `git reset --hard` on shared public branches because it rewrites commit history, causing desynchronization for teammates.',
            content: (
                <div className="space-y-6">
                    {/* 1. Definition */}
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-md">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center"><BookOpen className="w-5 h-5 mr-2" /> Definition</h4>
                        <p className="text-gray-700 dark:text-gray-300">Git provides multiple ways to undo changes. Revert creates a new commit that un-does changes safely. Reset rewrites history. Restore discards uncommitted changes.</p>
                    </div>
                    {/* 2. Real-Life Analogy */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-md">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center"><Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example</h4>
                        <p className="text-gray-700 dark:text-gray-300"><code className="text-cyan-600 font-mono">revert</code> is like issuing a refund receipt. <code className="text-cyan-600 font-mono">reset</code> is like traveling back in time and preventing the purchase entirely.</p>
                    </div>
                    {/* 3. Visual Explanation */}
                    <div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-5 h-5 mr-2" /> Visual Explanation</h4>
                        <MermaidDiagram chart={`gitGraph
commit id: "A"
commit id: "B"
commit id: "C (Bug)"
commit id: "D (Revert C)" type: REVERSE`} />
                    </div>
                    {/* 4. Sample Code */}
                    <div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-5 h-5 mr-2" /> Sample Code</h4>
                        <CodeBlock code={`# Safe for shared branches:\ngit revert HEAD\n\n# Destructive (local only!):\ngit reset --hard HEAD~1`} lang="bash" />
                    </div>
                    {/* 5. Real-World Application */}
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-md">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center"><Cpu className="w-5 h-5 mr-2" /> Real-World Application</h4>
                        <p className="text-gray-700 dark:text-gray-300">When a deployment breaks production, teams quickly use <code className="text-cyan-600 font-mono">git revert</code> to restore the previous stable state without altering shared history.</p>
                    </div>
                    {/* 6. Advantages */}
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-4">
                        <h4 className="text-lg font-bold text-emerald-400 mb-2 flex items-center"><Check className="w-5 h-5 mr-2" /> Advantages</h4>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Revert keeps history intact and is safe for collaboration</li>
                            <li>Reset offers powerful cleanup of local messy commits</li>
                        </ul>
                    </div>
                    {/* 7. Disadvantages */}
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-4">
                        <h4 className="text-lg font-bold text-red-400 mb-2 flex items-center"><AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages / Limitations</h4>
                        <ul className="list-disc list-inside space-y-1">
                            <li><code className="text-cyan-400 font-mono">git reset --hard</code> deletes uncommitted work permanently</li>
                            <li>Resetting shared branches causes chaos for other developers</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'git-stashing',
            title: '6. [Intermediate] Stashing & Temporary Saving (git stash)',
            definition: 'Stash uncommitted local working directory changes onto a dirty working state stack using `git stash`, restoring them later via `git stash pop` or `git stash apply`.',
            syntax: `$ git stash save "WIP: Navbar styling"
$ git stash list
$ git stash pop                     # Apply & remove top stash
$ git stash apply                   # Apply & retain stash on stack`,
            codeSnippet: `# Stashing Workflow during Urgent Hotfix Request
$ git status
# Working on feature... urgent bug report arrives!

$ git stash save "Feature incomplete draft"
Saved working directory and index state WIP on feature: 4f8b2c1

$ git switch main
$ git switch -c hotfix/urgent-bug
# Fix bug & commit...
$ git switch feature

$ git stash pop
On branch feature
Changes restored from stash!`,
            realLifeScenario: 'Developers use `git stash` to switch context instantly to fix urgent production hotfixes without creating incomplete junk commits.',
            content: (
                <div className="space-y-6">
                    {/* 1. Definition */}
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-md">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center"><BookOpen className="w-5 h-5 mr-2" /> Definition</h4>
                        <p className="text-gray-700 dark:text-gray-300">Stashing takes your modified tracked files and staged changes, and saves them on a stack of unfinished changes that you can reapply at any time.</p>
                    </div>
                    {/* 2. Real-Life Analogy */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-md">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center"><Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example</h4>
                        <p className="text-gray-700 dark:text-gray-300">Like putting a bookmark in your current book, pausing to read a short magazine article, and then instantly returning to exactly where you left off.</p>
                    </div>
                    {/* 3. Visual Explanation */}
                    <div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-5 h-5 mr-2" /> Visual Explanation</h4>
                        <MermaidDiagram chart={`graph TD
A[Working Directory] -->|git stash| B[(Stash Stack)]
B -->|git stash pop| A
C[Switch Branch] --> A`} />
                    </div>
                    {/* 4. Sample Code */}
                    <div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-5 h-5 mr-2" /> Sample Code</h4>
                        <CodeBlock code={`git stash push -m "halfway done"\ngit checkout hotfix-branch\n# fix and commit\ngit checkout main\ngit stash pop`} lang="bash" />
                    </div>
                    {/* 5. Real-World Application */}
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-md">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center"><Cpu className="w-5 h-5 mr-2" /> Real-World Application</h4>
                        <p className="text-gray-700 dark:text-gray-300">Context switching. A PM asks for an urgent fix while a developer is halfway through coding a new feature.</p>
                    </div>
                    {/* 6. Advantages */}
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-4">
                        <h4 className="text-lg font-bold text-emerald-400 mb-2 flex items-center"><Check className="w-5 h-5 mr-2" /> Advantages</h4>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Prevents creating messy &quot;WIP&quot; commits that clutter the history</li>
                            <li>Quick and painless context switching</li>
                        </ul>
                    </div>
                    {/* 7. Disadvantages */}
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-4">
                        <h4 className="text-lg font-bold text-red-400 mb-2 flex items-center"><AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages / Limitations</h4>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Stashes are local only; they are not pushed to remotes</li>
                            <li>Can easily forget what was stashed if left for too long</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'git-rebasing-cherry-pick',
            title: '7. [Intermediate] Advanced Rebasing & Cherry-Picking',
            definition: '`git rebase` rewrites linear commit histories by moving feature branch base commits to the latest main branch HEAD. `git cherry-pick` applies specific commits.',
            syntax: `$ git switch feature
$ git rebase main                   # Rebase feature on top of main
$ git rebase -i HEAD~3             # Interactive rebase (squash/fixup)
$ git cherry-pick <commit-hash>     # Copy single commit onto current branch`,
            codeSnippet: `# Interactive Rebase (git rebase -i HEAD~3) Menu:
pick 4f8b2c1 feat: Add login form UI
squash 8a1d9e2 fix: Fix button margin typo
fixup 1f0c3a4 docs: Add inline docstring comment

# Result: 3 messy commits squashed into 1 clean commit!`,
            realLifeScenario: 'Interactive rebasing (`git rebase -i`) squashes 10 dirty local WIP commits into 1 clean production commit before merging pull requests.',
            content: (
                <div className="space-y-6">
                    {/* 1. Definition */}
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-md">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center"><BookOpen className="w-5 h-5 mr-2" /> Definition</h4>
                        <p className="text-gray-700 dark:text-gray-300">Rebasing replays commits from one branch onto another, creating a linear history. Cherry-picking selects an arbitrary commit and applies it to the current HEAD.</p>
                    </div>
                    {/* 2. Real-Life Analogy */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-md">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center"><Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example</h4>
                        <p className="text-gray-700 dark:text-gray-300">Rebasing is like lifting up a LEGO block tower and placing it entirely on top of another baseplate. Cherry-picking is plucking a single specific LEGO block to use.</p>
                    </div>
                    {/* 3. Visual Explanation */}
                    <div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-5 h-5 mr-2" /> Visual Explanation</h4>
                        <MermaidDiagram chart={`gitGraph
commit id: "M1"
commit id: "M2"
branch feature
commit id: "F1"
commit id: "F2"
checkout main
commit id: "M3"
checkout feature
commit id: "F1'" type: HIGHLIGHT
commit id: "F2'" type: HIGHLIGHT`} />
                    </div>
                    {/* 4. Sample Code */}
                    <div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-5 h-5 mr-2" /> Sample Code</h4>
                        <CodeBlock code={`git checkout feature\ngit rebase main\n# or to pick one commit:\ngit cherry-pick 1a2b3c4`} lang="bash" />
                    </div>
                    {/* 5. Real-World Application */}
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-md">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center"><Cpu className="w-5 h-5 mr-2" /> Real-World Application</h4>
                        <p className="text-gray-700 dark:text-gray-300">Open source projects often require contributors to rebase their PRs against <code className="text-cyan-600 font-mono">main</code> to maintain a perfectly linear and readable project history.</p>
                    </div>
                    {/* 6. Advantages */}
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-4">
                        <h4 className="text-lg font-bold text-emerald-400 mb-2 flex items-center"><Check className="w-5 h-5 mr-2" /> Advantages</h4>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Produces a clean, straight-line history without cluttered merge commits</li>
                            <li>Interactive rebase allows squashing typos or fixup commits</li>
                        </ul>
                    </div>
                    {/* 7. Disadvantages */}
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-4">
                        <h4 className="text-lg font-bold text-red-400 mb-2 flex items-center"><AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages / Limitations</h4>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Rewrites commit hashes, making it dangerous for shared public branches</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'git-history-bisect-blame',
            title: '8. [Intermediate] Git History & Searching (git bisect, blame)',
            definition: 'Search repository history using `git log -S "query"`, inspect line-by-line author attribution using `git blame`, and isolate regression bugs via binary search (`git bisect`).',
            syntax: `$ git blame src/App.tsx              # Author info per line
$ git bisect start                  # Start binary search bug hunting
$ git bisect bad                    # Current HEAD is broken
$ git bisect good <commit-hash>     # Target hash was working`,
            codeSnippet: `# Automating Bug Isolation with git bisect
$ git bisect start
$ git bisect bad HEAD
$ git bisect good v1.0.0
Bisecting: 12 revisions left to test after this (roughly 4 steps)

# Test & Mark:
$ git bisect bad
# Git automatically checks out midpoint commit until exact bad commit is isolated!
$ git bisect reset`,
            realLifeScenario: '`git bisect` uses binary search to find the exact commit that introduced a bug across 1,000 commits in 10 steps.',
            content: (
                <div className="space-y-6">
                    {/* 1. Definition */}
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-md">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center"><BookOpen className="w-5 h-5 mr-2" /> Definition</h4>
                        <p className="text-gray-700 dark:text-gray-300">Tools to audit code. Blame shows who last modified a line. Bisect performs a binary search through history to locate the commit that introduced a bug.</p>
                    </div>
                    {/* 2. Real-Life Analogy */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-md">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center"><Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example</h4>
                        <p className="text-gray-700 dark:text-gray-300">Bisect is like looking for a specific page in a dictionary by continually splitting it in half until you land on the right word.</p>
                    </div>
                    {/* 3. Visual Explanation */}
                    <div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-5 h-5 mr-2" /> Visual Explanation</h4>
                        <MermaidDiagram chart={`graph LR
A[v1.0 Good] --> B[Commit 1]
B --> C[Commit 2]
C --> D[Midpoint: Test?]
D --> E[Commit 4]
E --> F[v2.0 Bad]`} />
                    </div>
                    {/* 4. Sample Code */}
                    <div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-5 h-5 mr-2" /> Sample Code</h4>
                        <CodeBlock code={`git bisect start\ngit bisect bad\ngit bisect good v1.0\n# (test codebase)\ngit bisect good`} lang="bash" />
                    </div>
                    {/* 5. Real-World Application */}
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-md">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center"><Cpu className="w-5 h-5 mr-2" /> Real-World Application</h4>
                        <p className="text-gray-700 dark:text-gray-300">Rapidly identifying which pull request caused a sudden drop in performance or a hidden regression bug.</p>
                    </div>
                    {/* 6. Advantages */}
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-4">
                        <h4 className="text-lg font-bold text-emerald-400 mb-2 flex items-center"><Check className="w-5 h-5 mr-2" /> Advantages</h4>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Drastically reduces bug-hunting time using algorithmic search (<code className="text-cyan-400 font-mono">O(log N)</code>)</li>
                        </ul>
                    </div>
                    {/* 7. Disadvantages */}
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-4">
                        <h4 className="text-lg font-bold text-red-400 mb-2 flex items-center"><AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages / Limitations</h4>
                        <ul className="list-disc list-inside space-y-1">
                            <li><code className="text-cyan-400 font-mono">git blame</code> can incorrectly attribute stylistic reformatting as logical code changes</li>
                        </ul>
                    </div>
                </div>
            )
        },

        // ==================== ADVANCED TIER ====================
        {
            id: 'git-workflows-strategies',
            title: '9. [Advanced] Git Workflows & Branching Strategies (Gitflow, Trunk-Based)',
            definition: 'Adopt structured branching strategies: Gitflow (main, develop, feature, release, hotfix), GitHub Flow (simple feature branches + PRs), or Trunk-Based Development.',
            syntax: `/* Gitflow Branch Structure Blueprint: */
main        ─────────────────────────────● (v1.0.0 Tag)
             \\                          /
release       ─────────────────●───────
               \\              /
develop   ──────●─────●──────●──────────
                 \\   /
feature           ───●──────────`,
            codeSnippet: `# Branch Naming Standards Conventions
feature/AUTH-102-jwt-login
bugfix/UI-405-navbar-overflow
hotfix/SECURITY-911-xss-patch
release/v2.1.0`,
            realLifeScenario: 'High-frequency continuous deployment teams (Meta, Google) use Trunk-Based Development where developers commit small updates daily to main.',
            content: (
                <div className="space-y-6">
                    {/* 1. Definition */}
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-md">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center"><BookOpen className="w-5 h-5 mr-2" /> Definition</h4>
                        <p className="text-gray-700 dark:text-gray-300">A branching strategy outlines strict rules for how and when developers should create, name, and merge branches.</p>
                    </div>
                    {/* 2. Real-Life Analogy */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-md">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center"><Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example</h4>
                        <p className="text-gray-700 dark:text-gray-300">Like an assembly line protocol. Gitflow has many quality control checkpoints, whereas Trunk-Based is a fast, streamlined continuous conveyor belt.</p>
                    </div>
                    {/* 3. Visual Explanation */}
                    <div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-5 h-5 mr-2" /> Visual Explanation</h4>
                        <MermaidDiagram chart={`gitGraph
commit
branch develop
checkout develop
commit
branch feature
checkout feature
commit
checkout develop
merge feature
checkout main
merge develop tag: "v1.0"`} />
                    </div>
                    {/* 4. Sample Code */}
                    <div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-5 h-5 mr-2" /> Sample Code</h4>
                        <CodeBlock code={`# Gitflow init standard branches\ngit branch develop\ngit branch release/v1.0`} lang="bash" />
                    </div>
                    {/* 5. Real-World Application */}
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-md">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center"><Cpu className="w-5 h-5 mr-2" /> Real-World Application</h4>
                        <p className="text-gray-700 dark:text-gray-300">Enterprise software with scheduled monthly releases relies on Gitflow to manage release candidates seamlessly alongside ongoing feature work.</p>
                    </div>
                    {/* 6. Advantages */}
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-4">
                        <h4 className="text-lg font-bold text-emerald-400 mb-2 flex items-center"><Check className="w-5 h-5 mr-2" /> Advantages</h4>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Clear separation between production-ready code and experimental features</li>
                            <li>Standardizes collaboration protocols for large organizations</li>
                        </ul>
                    </div>
                    {/* 7. Disadvantages */}
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-4">
                        <h4 className="text-lg font-bold text-red-400 mb-2 flex items-center"><AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages / Limitations</h4>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Gitflow can be too rigid and complex for small, agile startups</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'git-pull-requests-code-review',
            title: '10. [Advanced] Pull Requests & Code Review Best Practices',
            definition: 'Pull Requests (PRs) facilitate asynchronous peer code review, automated CI test execution, commit squashing, and branch protection rules enforcement.',
            syntax: `# Branch Protection Rule Enforcement Checklist:
✓ Require 2 approving reviews before merging
✓ Require status checks to pass (CI Unit Tests & Linter)
✓ Require linear history (Squash and Merge)`,
            codeSnippet: `/* PULL REQUEST TEMPLATE (.github/pull_request_template.md) */
## Summary of Changes
- Implemented JWT Token refresh interceptor.

## Linked Issue
Closes #104

## Checklist
- [x] Unit tests written & passing
- [x] Documentation updated`,
            realLifeScenario: 'Branch protection rules prevent developers from pushing code directly to `main`, forcing code reviews and automated test passes.',
            content: (
                <div className="space-y-6">
                    {/* 1. Definition */}
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-md">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center"><BookOpen className="w-5 h-5 mr-2" /> Definition</h4>
                        <p className="text-gray-700 dark:text-gray-300">A mechanism on platforms like GitHub where developers &quot;request&quot; that a repository maintainer &quot;pull&quot; in their changes, allowing for review before integration.</p>
                    </div>
                    {/* 2. Real-Life Analogy */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-md">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center"><Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example</h4>
                        <p className="text-gray-700 dark:text-gray-300">Like an author submitting a draft manuscript to an editor for feedback and corrections before it gets officially published.</p>
                    </div>
                    {/* 3. Visual Explanation */}
                    <div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-5 h-5 mr-2" /> Visual Explanation</h4>
                        <MermaidDiagram chart={`graph LR
A[Developer Push] --> B[Open PR]
B --> C{CI Checks}
C -->|Pass| D[Peer Review]
D -->|Approve| E[Merge to Main]
C -->|Fail| A
D -->|Reject| A`} />
                    </div>
                    {/* 4. Sample Code */}
                    <div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-5 h-5 mr-2" /> Sample Code</h4>
                        <CodeBlock code={`# typically handled in UI, but via GitHub CLI:\ngh pr create --title "Add login" --body "Fixes #42"`} lang="bash" />
                    </div>
                    {/* 5. Real-World Application */}
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-md">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center"><Cpu className="w-5 h-5 mr-2" /> Real-World Application</h4>
                        <p className="text-gray-700 dark:text-gray-300">All modern tech companies mandate PRs to ensure knowledge sharing, code quality, and security compliance.</p>
                    </div>
                    {/* 6. Advantages */}
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-4">
                        <h4 className="text-lg font-bold text-emerald-400 mb-2 flex items-center"><Check className="w-5 h-5 mr-2" /> Advantages</h4>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Catches bugs before they reach production</li>
                            <li>Mentors junior developers through constructive feedback</li>
                        </ul>
                    </div>
                    {/* 7. Disadvantages */}
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-4">
                        <h4 className="text-lg font-bold text-red-400 mb-2 flex items-center"><AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages / Limitations</h4>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Can significantly bottleneck delivery if reviews are delayed</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'git-hooks-automation',
            title: '11. [Advanced] Git Hooks & Automation (Husky & commitlint)',
            definition: 'Git Hooks execute custom scripts on key events (pre-commit, pre-push, commit-msg). Husky and commitlint automate client-side code formatting and linting.',
            syntax: `/* .husky/pre-commit Script Blueprint: */
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npm run lint && npm run test`,
            codeSnippet: `# Package.json Husky & Commitlint Setup
$ npx husky install
$ npx husky add .husky/pre-commit "npm run lint-staged"
$ npx husky add .husky/commit-msg "npx --no -- commitlint --edit \${1}"`,
            realLifeScenario: 'Pre-commit hooks automatically run ESLint and Prettier formatting checks, rejecting commits containing syntax errors.',
            content: (
                <div className="space-y-6">
                    {/* 1. Definition */}
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-md">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center"><BookOpen className="w-5 h-5 mr-2" /> Definition</h4>
                        <p className="text-gray-700 dark:text-gray-300">Git hooks are custom scripts triggered automatically by Git before or after specific actions, such as committing or pushing.</p>
                    </div>
                    {/* 2. Real-Life Analogy */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-md">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center"><Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example</h4>
                        <p className="text-gray-700 dark:text-gray-300">Like an airport security scanner that automatically checks your bags before you are allowed to board the plane.</p>
                    </div>
                    {/* 3. Visual Explanation */}
                    <div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-5 h-5 mr-2" /> Visual Explanation</h4>
                        <MermaidDiagram chart={`graph LR
A[git commit] --> B{pre-commit hook}
B -->|Lint Fails| C[Abort Commit]
B -->|Lint Passes| D{commit-msg hook}
D -->|Format OK| E[Commit Created]`} />
                    </div>
                    {/* 4. Sample Code */}
                    <div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-5 h-5 mr-2" /> Sample Code</h4>
                        <CodeBlock code={`# .git/hooks/pre-commit\n#!/bin/sh\nnpm run test\nif [ $? -ne 0 ]; then\n  echo "Tests failed! Aborting commit."\n  exit 1\nfi`} lang="bash" />
                    </div>
                    {/* 5. Real-World Application */}
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-md">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center"><Cpu className="w-5 h-5 mr-2" /> Real-World Application</h4>
                        <p className="text-gray-700 dark:text-gray-300">Using Husky in Node.js projects to enforce <code className="text-cyan-600 font-mono">prettier</code> formatting locally so CI servers don&apos;t waste time failing on style issues.</p>
                    </div>
                    {/* 6. Advantages */}
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-4">
                        <h4 className="text-lg font-bold text-emerald-400 mb-2 flex items-center"><Check className="w-5 h-5 mr-2" /> Advantages</h4>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Enforces project standards seamlessly on the client side</li>
                            <li>Automates repetitive tasks like code formatting</li>
                        </ul>
                    </div>
                    {/* 7. Disadvantages */}
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-4">
                        <h4 className="text-lg font-bold text-red-400 mb-2 flex items-center"><AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages / Limitations</h4>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Can be bypassed easily by users using <code className="text-cyan-400 font-mono">--no-verify</code></li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'git-submodules-subtrees',
            title: '12. [Advanced] Submodules & Subtrees (git submodule)',
            definition: 'Git Submodules embed external Git repositories inside parent repositories at specific commit SHA pointers. Subtrees merge external repositories directly into subdirectories.',
            syntax: `$ git submodule add https://github.com/user/shared-lib.git libs/shared
$ git submodule update --init --recursive`,
            codeSnippet: `# Cloning Repository containing Submodules
$ git clone --recursive https://github.com/user/parent-app.git

# Updating Submodule to Latest Remote SHA Pointer
$ git submodule update --remote --merge`,
            realLifeScenario: 'Game development studios embed shared rendering libraries across multiple game projects using `git submodule`.',
            content: (
                <div className="space-y-6">
                    {/* 1. Definition */}
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-md">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center"><BookOpen className="w-5 h-5 mr-2" /> Definition</h4>
                        <p className="text-gray-700 dark:text-gray-300">Allows you to keep another Git repository in a subdirectory of your repository. The parent repository tracks a specific commit of the embedded submodule.</p>
                    </div>
                    {/* 2. Real-Life Analogy */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-md">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center"><Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example</h4>
                        <p className="text-gray-700 dark:text-gray-300">Like an iframe on a website that embeds a completely separate webpage, managing its own internal state independently.</p>
                    </div>
                    {/* 3. Visual Explanation */}
                    <div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-5 h-5 mr-2" /> Visual Explanation</h4>
                        <MermaidDiagram chart={`graph TD
A[Main Project Repo] -->|Contains pointer to| B(Submodule A commit SHA)
A -->|Contains pointer to| C(Submodule B commit SHA)
B --> D[External Repo A]`} />
                    </div>
                    {/* 4. Sample Code */}
                    <div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-5 h-5 mr-2" /> Sample Code</h4>
                        <CodeBlock code={`git submodule add https://github.com/lib/repo.git libs/repo\ngit submodule update --init`} lang="bash" />
                    </div>
                    {/* 5. Real-World Application */}
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-md">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center"><Cpu className="w-5 h-5 mr-2" /> Real-World Application</h4>
                        <p className="text-gray-700 dark:text-gray-300">Including a shared UI components repository into multiple micro-frontend web applications.</p>
                    </div>
                    {/* 6. Advantages */}
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-4">
                        <h4 className="text-lg font-bold text-emerald-400 mb-2 flex items-center"><Check className="w-5 h-5 mr-2" /> Advantages</h4>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Strict dependency versioning controlled by commit hashes</li>
                        </ul>
                    </div>
                    {/* 7. Disadvantages */}
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-4">
                        <h4 className="text-lg font-bold text-red-400 mb-2 flex items-center"><AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages / Limitations</h4>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Complex and notoriously unintuitive command-line interface</li>
                            <li>Easily leads to detached HEAD states in the submodule</li>
                        </ul>
                    </div>
                </div>
            )
        },

        // ==================== PROFESSIONAL TIER ====================
        {
            id: 'git-internal-architecture-objects',
            title: '13. [Professional] Internal Git Architecture (Blobs, Trees, Commits)',
            definition: 'Git is a content-addressable key-value object database. Inspect internal objects (Blobs store file content, Trees store directory structures, Commits store metadata) via `git cat-file`.',
            syntax: `# Git Object Storage Types:
Blob   ──> Raw file contents hashed by SHA-1
Tree   ──> Directory manifest matching filenames to Blob SHAs
Commit ──> Tree SHA + Parent Commit SHA + Author + Message`,
            codeSnippet: `# Inspecting Internal Git Object Database
$ git log -n 1 --format="%H"
4f8b2c1a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e

# Inspect Object Type
$ git cat-file -t 4f8b2c1
commit

# Inspect Commit Content (Tree Hash & Parent Hash)
$ git cat-file -p 4f8b2c1
tree 8a1d9e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d
parent 1f0c3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f
author Vinay Mahato <vinay@advcoder.com> 1775984000 +0530
committer Vinay Mahato <vinay@advcoder.com> 1775984000 +0530

feat: Add login component`,
            realLifeScenario: 'Understanding Git internals allows developers to recover lost commits using `git reflog` after accidental hard resets.',
            content: (
                <div className="space-y-6">
                    {/* 1. Definition */}
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-md">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center"><BookOpen className="w-5 h-5 mr-2" /> Definition</h4>
                        <p className="text-gray-700 dark:text-gray-300">At its core, Git is just a key-value data store mapping SHA-1 hashes to objects: Blobs (files), Trees (directories), and Commits (snapshots).</p>
                    </div>
                    {/* 2. Real-Life Analogy */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-md">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center"><Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example</h4>
                        <p className="text-gray-700 dark:text-gray-300">Like a decentralized blockchain where every block (commit) hashes its contents and the previous block, creating an immutable history.</p>
                    </div>
                    {/* 3. Visual Explanation */}
                    <div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-5 h-5 mr-2" /> Visual Explanation</h4>
                        <MermaidDiagram chart={`graph TD
A[Commit Object] -->|Points to| B[Tree Object]
A -->|Points to| C[Parent Commit]
B -->|Contains| D[Blob: file.txt]
B -->|Contains| E[Tree: src/]`} />
                    </div>
                    {/* 4. Sample Code */}
                    <div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-5 h-5 mr-2" /> Sample Code</h4>
                        <CodeBlock code={`# Hash an arbitrary string into Git\necho 'test content' | git hash-object -w --stdin`} lang="bash" />
                    </div>
                    {/* 5. Real-World Application */}
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-md">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center"><Cpu className="w-5 h-5 mr-2" /> Real-World Application</h4>
                        <p className="text-gray-700 dark:text-gray-300">Using <code className="text-cyan-600 font-mono">git reflog</code> to rescue &quot;deleted&quot; commits because Git garbage collection hasn&apos;t actually wiped the internal object yet.</p>
                    </div>
                    {/* 6. Advantages */}
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-4">
                        <h4 className="text-lg font-bold text-emerald-400 mb-2 flex items-center"><Check className="w-5 h-5 mr-2" /> Advantages</h4>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Data corruption is mathematically nearly impossible to go undetected</li>
                        </ul>
                    </div>
                    {/* 7. Disadvantages */}
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-4">
                        <h4 className="text-lg font-bold text-red-400 mb-2 flex items-center"><AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages / Limitations</h4>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Understanding the graph theory behind Git is a high barrier for non-technical users</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'git-lfs-repo-optimization',
            title: '14. [Professional] Large Files & Repository Optimization (Git LFS)',
            definition: 'Git LFS (Large File Storage) replaces huge binary assets (videos, 3D models) with pointer files, storing actual binaries on remote LFS servers.',
            syntax: `$ git lfs install
$ git lfs track "*.psd"             # Track large Photoshop assets via LFS
$ git add .gitattributes`,
            codeSnippet: `# Repository Garbage Collection & Pruning
$ git gc --prune=now                # Compress objects & pack files
$ git count-objects -vH             # Inspect disk usage space`,
            realLifeScenario: 'Game studios use Git LFS to track gigabyte-scale 4K textures without bloating local Git repository clone sizes.',
            content: (
                <div className="space-y-6">
                    {/* 1. Definition */}
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-md">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center"><BookOpen className="w-5 h-5 mr-2" /> Definition</h4>
                        <p className="text-gray-700 dark:text-gray-300">Git LFS handles large files by storing pointers in the git repository and the actual files on a remote server, optimizing repo size.</p>
                    </div>
                    {/* 2. Real-Life Analogy */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-md">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center"><Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example</h4>
                        <p className="text-gray-700 dark:text-gray-300">Like sending an email with a Dropbox link to a 5GB video instead of trying to attach the video directly to the email.</p>
                    </div>
                    {/* 3. Visual Explanation */}
                    <div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-5 h-5 mr-2" /> Visual Explanation</h4>
                        <MermaidDiagram chart={`graph LR
A[Local Repo] -->|Pointer| B[Git Server]
A -->|Actual File| C[Git LFS Server]
B --> D[Other Developer]
C -->|Download on checkout| D`} />
                    </div>
                    {/* 4. Sample Code */}
                    <div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-5 h-5 mr-2" /> Sample Code</h4>
                        <CodeBlock code={`git lfs install\ngit lfs track "*.mp4"\ngit add .gitattributes`} lang="bash" />
                    </div>
                    {/* 5. Real-World Application */}
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-md">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center"><Cpu className="w-5 h-5 mr-2" /> Real-World Application</h4>
                        <p className="text-gray-700 dark:text-gray-300">Machine learning engineers versioning large datasets or AI model weights alongside their python code.</p>
                    </div>
                    {/* 6. Advantages */}
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-4">
                        <h4 className="text-lg font-bold text-emerald-400 mb-2 flex items-center"><Check className="w-5 h-5 mr-2" /> Advantages</h4>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Keeps repository clone times exceptionally fast</li>
                        </ul>
                    </div>
                    {/* 7. Disadvantages */}
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-4">
                        <h4 className="text-lg font-bold text-red-400 mb-2 flex items-center"><AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages / Limitations</h4>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Requires separate server infrastructure for LFS storage</li>
                            <li>Free tiers on GitHub charge for LFS bandwidth limits</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'git-security-commit-signing',
            title: '15. [Professional] Git Security & GPG Key Commit Signing',
            definition: 'Cryptographically sign commits using GPG or SSH keys (`git commit -S`) to verify author identity. Purge leaked secret tokens using `git filter-repo`.',
            syntax: `$ git config --global user.signingkey <GPG-KEY-ID>
$ git config --global commit.gpgsign true
$ git commit -S -m "feat: Verified signed commit"`,
            codeSnippet: `# Purging Leaked API Keys from Full History via git filter-repo
$ pip install git-filter-repo
$ git filter-repo --invert-paths --path "config/secrets.json"`,
            realLifeScenario: 'GitHub displays a green "Verified" badge next to GPG-signed commits, protecting projects against commit author spoofing.',
            content: (
                <div className="space-y-6">
                    {/* 1. Definition */}
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-md">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center"><BookOpen className="w-5 h-5 mr-2" /> Definition</h4>
                        <p className="text-gray-700 dark:text-gray-300">Signing commits proves that you are the author of a commit and that the code was not tampered with, using public-key cryptography.</p>
                    </div>
                    {/* 2. Real-Life Analogy */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-md">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center"><Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example</h4>
                        <p className="text-gray-700 dark:text-gray-300">Like an official wax seal on a letter or a digital signature on a PDF contract ensuring authenticity.</p>
                    </div>
                    {/* 3. Visual Explanation */}
                    <div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-5 h-5 mr-2" /> Visual Explanation</h4>
                        <MermaidDiagram chart={`graph LR
A[Developer + Private Key] -->|Sign| B[Commit]
B --> C[GitHub]
D[Public Key] -->|Verify| C
C -->|Match| E((Verified Badge))`} />
                    </div>
                    {/* 4. Sample Code */}
                    <div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-5 h-5 mr-2" /> Sample Code</h4>
                        <CodeBlock code={`git commit -S -m "Update core security"`} lang="bash" />
                    </div>
                    {/* 5. Real-World Application */}
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-md">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center"><Cpu className="w-5 h-5 mr-2" /> Real-World Application</h4>
                        <p className="text-gray-700 dark:text-gray-300">Financial institutions require 100% of commits to be GPG-signed to meet strict compliance and auditing standards.</p>
                    </div>
                    {/* 6. Advantages */}
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-4">
                        <h4 className="text-lg font-bold text-emerald-400 mb-2 flex items-center"><Check className="w-5 h-5 mr-2" /> Advantages</h4>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Prevents malicious actors from spoofing identity via simple <code className="text-cyan-400 font-mono">git config user.email</code></li>
                        </ul>
                    </div>
                    {/* 7. Disadvantages */}
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-4">
                        <h4 className="text-lg font-bold text-red-400 mb-2 flex items-center"><AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages / Limitations</h4>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Managing and rotating GPG keys across multiple machines can be cumbersome</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'git-enterprise-cicd-github-actions',
            title: '16. [Professional] Enterprise CI/CD Integration & SemVer Tagging',
            definition: 'Automate enterprise release pipelines using GitHub Actions triggered on push events, release tagging (`git tag -a v1.0.0`), and Semantic Versioning (SemVer).',
            syntax: `# Annotated Git Tagging Blueprint:
$ git tag -a v1.2.0 -m "Release v1.2.0 - Payment Gateway Integration"
$ git push origin v1.2.0`,
            codeSnippet: `/* GITHUB ACTIONS CI WORKFLOW (.github/workflows/ci.yml) */
name: Build & Test CI Pipeline

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm test`,
            realLifeScenario: 'Pushing annotated version tags (`git push origin v2.0.0`) automatically triggers GitHub Actions to publish packages to npm or Docker Hub.',
            content: (
                <div className="space-y-6">
                    {/* 1. Definition */}
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-md">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center"><BookOpen className="w-5 h-5 mr-2" /> Definition</h4>
                        <p className="text-gray-700 dark:text-gray-300">Continuous Integration / Continuous Deployment uses automated pipelines that respond to Git events to build, test, and deploy software.</p>
                    </div>
                    {/* 2. Real-Life Analogy */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-md">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center"><Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example</h4>
                        <p className="text-gray-700 dark:text-gray-300">Like an automated factory floor: as soon as raw materials (code) drop in, machines automatically test, package, and ship it to customers.</p>
                    </div>
                    {/* 3. Visual Explanation */}
                    <div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-5 h-5 mr-2" /> Visual Explanation</h4>
                        <MermaidDiagram chart={`graph LR
A[git tag v1.0] --> B[Push to GitHub]
B --> C{GitHub Actions}
C --> D[Run Tests]
D -->|Pass| E[Build Docker Image]
E --> F[Deploy to AWS]`} />
                    </div>
                    {/* 4. Sample Code */}
                    <div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-5 h-5 mr-2" /> Sample Code</h4>
                        <CodeBlock code={`git tag -a v2.1.0 -m "Release version 2.1.0"\ngit push origin v2.1.0`} lang="bash" />
                    </div>
                    {/* 5. Real-World Application */}
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-md">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center"><Cpu className="w-5 h-5 mr-2" /> Real-World Application</h4>
                        <p className="text-gray-700 dark:text-gray-300">Serverless deployments where merging a PR into <code className="text-cyan-600 font-mono">main</code> automatically deploys the newest version to a Vercel hosting environment within seconds.</p>
                    </div>
                    {/* 6. Advantages */}
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-4">
                        <h4 className="text-lg font-bold text-emerald-400 mb-2 flex items-center"><Check className="w-5 h-5 mr-2" /> Advantages</h4>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Removes human error from the deployment process</li>
                            <li>Enables shipping features to users multiple times a day</li>
                        </ul>
                    </div>
                    {/* 7. Disadvantages */}
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-4">
                        <h4 className="text-lg font-bold text-red-400 mb-2 flex items-center"><AlertTriangle className="w-5 h-5 mr-2" /> Disadvantages / Limitations</h4>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Debugging complex YAML CI/CD pipelines can be frustrating and slow</li>
                        </ul>
                    </div>
                </div>
            )
        }
    ];

    const topics = courseData.map(topic => topic.title);
    const activeTopic = courseData[activeTopicIndex];

    return (
        <CoursePageLayout
            title="Git & GitHub Masterclass Course"
            description="Master Git from DVCS Architecture, Branching, and Merging to Rebasing, Git LFS, Internal Objects, GPG Signing, and GitHub Actions CI/CD."
            topics={topics}
            icon={GitBranch}
            colorClass="orange"
            activeTopicIndex={activeTopicIndex}
            onTopicClick={setActiveTopicIndex}
        >
            <div className="space-y-8">
                {/* Part 1: Concept Definition & Detailed Explanation */}
                <div className="bg-orange-50 dark:bg-orange-900/10 border-l-4 border-orange-600 p-6 rounded-r-xl shadow-sm">
                    <h3 className="text-lg font-bold text-orange-800 dark:text-orange-300 mb-2 flex items-center">
                        <BookOpen className="w-5 h-5 mr-2" />
                        1. Concept Definition & Detailed Explanation
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium mb-4">
                        {activeTopic.definition}
                    </p>
                    <div className="prose dark:prose-invert max-w-none text-sm text-gray-700 dark:text-gray-300">
                        {activeTopic.content}
                    </div>
                </div>

                {/* Part 2: Formal Code Syntax Blueprint */}
                {activeTopic.syntax ? (
                    <div className="bg-purple-50 dark:bg-purple-900/10 border-l-4 border-purple-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-purple-800 dark:text-purple-300 mb-3 flex items-center">
                            <FileText className="w-5 h-5 mr-2" />
                            2. Formal Code Syntax Blueprint
                        </h3>
                        <div className="bg-slate-900 text-slate-100 font-mono text-sm p-4 rounded-xl border border-slate-800 overflow-x-auto">
                            <pre>{activeTopic.syntax}</pre>
                        </div>
                    </div>
                ) : (
                    <div className="bg-purple-50 dark:bg-purple-900/10 border-l-4 border-purple-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-purple-800 dark:text-purple-300 mb-3 flex items-center">
                            <FileText className="w-5 h-5 mr-2" />
                            2. Formal Code Syntax Blueprint
                        </h3>
                        <div className="bg-slate-900 text-slate-100 font-mono text-sm p-4 rounded-xl border border-slate-800 overflow-x-auto">
                            <pre>{`$ git status\n$ git commit -m "commit message"`}</pre>
                        </div>
                    </div>
                )}

                {/* Part 3: Executable Code Example */}
                {activeTopic.codeSnippet && (
                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-orange-600" />
                            3. Executable Production Code Example
                        </h3>
                        <CodeBlock code={activeTopic.codeSnippet} lang="bash" colorClass="orange" filename="git_workflow.sh" />
                    </div>
                )}

                {/* Part 4: Real-Life Scenario Example */}
                <div className="bg-emerald-50 dark:bg-emerald-900/10 border-l-4 border-emerald-600 p-6 rounded-r-xl shadow-sm">
                    <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                        <Lightbulb className="w-5 h-5 mr-2" />
                        4. Real-Life Industry Scenario & Application
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                        {activeTopic.realLifeScenario || activeTopic.example || "Powers open-source software development, enterprise GitHub branching workflows, pull request code reviews, automated CI/CD pipelines, and version releases worldwide."}
                    </p>
                </div>
            </div>
        </CoursePageLayout>
    );
};

export default GitCoursePage;
