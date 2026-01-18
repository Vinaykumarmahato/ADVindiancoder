import React, { useState } from 'react';
import CoursePageLayout from '../../components/CoursePageLayout';
import { GitBranch, Code, BookOpen, Lightbulb, Terminal } from 'lucide-react';

const GitCoursePage = () => {
    const [activeTopicIndex, setActiveTopicIndex] = useState(0);

    const courseData = [
        {
            id: 'git-intro',
            title: 'Git Intro',
            definition: 'Git is a distributed version control system. It allows you to track changes in your files and coordinate work on those files among multiple people.',
            example: 'Tracking changes in a software project so you can revert to previous versions if needed.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Git is free and open source software distributed under the GPL. It is used by millions of developers for projects of all sizes.
                    </p>
                </>
            ),
            codeSnippet: null
        },
        {
            id: 'git-get-started',
            title: 'Git Get Started',
            definition: 'To start using Git, you need to install it on your computer. You can verify the installation by checking the version.',
            example: 'Running "git --version" in your terminal.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Once installed, you should configure your username and email address, as every Git commit uses this information.
                    </p>
                </>
            ),
            codeSnippet: `git --version
git config --global user.name "Your Name"
git config --global user.email "youremail@example.com"`
        },
        {
            id: 'git-new-repo',
            title: 'Git New Repo',
            definition: 'To create a new Git repository, use the git init command. This creates a hidden .git folder in your project directory.',
            example: 'Initializing a new project folder as a Git repository.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        This command turns the current directory into a Git repository, allowing you to start tracking files.
                    </p>
                </>
            ),
            codeSnippet: `mkdir myproject
cd myproject
git init`
        },
        {
            id: 'git-staging',
            title: 'Git Staging',
            definition: 'The staging area is a file in your Git directory that stores information about what will go into your next commit.',
            example: 'Adding specific files to be included in the next snapshot.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        You can add individual files or all files to the staging area using the "git add" command.
                    </p>
                </>
            ),
            codeSnippet: `git add filename.txt
git add .`
        },
        {
            id: 'git-commit',
            title: 'Git Commit',
            definition: 'A commit is a snapshot of your repository at a specific point in time. It saves your changes to the local repository.',
            example: 'Saving the current state of your code with a message describing the changes.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Always include a meaningful message with your commits to help you and others understand the history of the project.
                    </p>
                </>
            ),
            codeSnippet: `git commit -m "Initial commit"`
        },
        {
            id: 'git-branch',
            title: 'Git Branch',
            definition: 'Branches allow you to work on different versions of a project at the same time.',
            example: 'Creating a "feature-login" branch to work on the login functionality without affecting the main code.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        The default branch name in Git is usually "master" or "main". You can create, list, and delete branches.
                    </p>
                </>
            ),
            codeSnippet: `git branch new-feature
git checkout new-feature
# Or in one command:
git checkout -b new-feature`
        },
        {
            id: 'git-branch-merge',
            title: 'Git Branch Merge',
            definition: 'Merging is the way you combine the work of different branches together.',
            example: 'Merging the "feature-login" branch back into the "main" branch after the feature is complete.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        You typically switch to the target branch (e.g., main) and then run the merge command.
                    </p>
                </>
            ),
            codeSnippet: `git checkout main
git merge new-feature`
        },
        {
            id: 'git-remote',
            title: 'Git Remote',
            definition: 'A remote is a common repository on a server (like GitHub) that all team members exchange their changes with.',
            example: 'Connecting your local repository to a GitHub repository.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        You can add a remote to your local repository to push and pull changes.
                    </p>
                </>
            ),
            codeSnippet: `git remote add origin https://github.com/user/repo.git
git remote -v`
        },
        {
            id: 'git-push',
            title: 'Git Push',
            definition: 'The git push command is used to upload local repository content to a remote repository.',
            example: 'Sending your latest commits to GitHub.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        The -u flag sets the upstream branch, linking your local branch to the remote branch.
                    </p>
                </>
            ),
            codeSnippet: `git push -u origin main`
        },
        {
            id: 'git-pull',
            title: 'Git Pull',
            definition: 'The git pull command is used to fetch and download content from a remote repository and immediately update the local repository to match that content.',
            example: 'Updating your local code with changes made by your teammates.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        It is essentially a combination of git fetch and git merge.
                    </p>
                </>
            ),
            codeSnippet: `git pull origin main`
        },
        {
            id: 'git-clone',
            title: 'Git Clone',
            definition: 'Git clone is used to point to an existing repo and make a clone or copy of that repo at in a new directory, at another location.',
            example: 'Downloading a project from GitHub to your computer to start working on it.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        This is the most common way to get a copy of an existing project.
                    </p>
                </>
            ),
            codeSnippet: `git clone https://github.com/user/repo.git`
        },
        {
            id: 'git-gitignore',
            title: 'Git .gitignore',
            definition: 'The .gitignore file specifies intentionally untracked files that Git should ignore.',
            example: 'Ignoring node_modules, log files, or build artifacts.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Files already tracked by Git are not affected.
                    </p>
                </>
            ),
            codeSnippet: `# .gitignore file
node_modules/
*.log
.env`
        }
    ];

    const topics = courseData.map(topic => topic.title);
    const activeTopic = courseData[activeTopicIndex];

    const CodeBlock = ({ code, lang = 'bash' }: { code: string, lang?: string }) => (
        <div className="bg-[#1e1e1e] text-gray-200 p-6 rounded-2xl font-mono text-sm mb-6 overflow-x-auto shadow-xl border border-gray-800">
            <div className="flex items-center space-x-2 mb-4 border-b border-gray-700 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-xs text-gray-500 font-sans">terminal</span>
            </div>
            <pre className="leading-relaxed text-orange-300">{code}</pre>
        </div>
    );

    return (
        <CoursePageLayout
            title="Git Tutorial"
            description="Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency."
            topics={topics}
            icon={GitBranch}
            colorClass="orange"
            activeTopicIndex={activeTopicIndex}
            onTopicClick={setActiveTopicIndex}
        >
            <div className="space-y-8">
                {/* Definition Section */}
                <div className="bg-orange-50 dark:bg-orange-900/10 border-l-4 border-orange-600 p-6 rounded-r-xl">
                    <h3 className="text-lg font-bold text-orange-800 dark:text-orange-300 mb-2 flex items-center">
                        <BookOpen className="w-5 h-5 mr-2" />
                        Definition
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {activeTopic.definition}
                    </p>
                </div>

                {/* Real-time Example Section */}
                <div className="bg-yellow-50 dark:bg-yellow-900/10 border-l-4 border-yellow-600 p-6 rounded-r-xl">
                    <h3 className="text-lg font-bold text-yellow-800 dark:text-yellow-300 mb-2 flex items-center">
                        <Lightbulb className="w-5 h-5 mr-2" />
                        Real-time Example
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {activeTopic.example}
                    </p>
                </div>

                {/* Main Content & Code */}
                <div className="prose dark:prose-invert max-w-none">
                    {activeTopic.content}

                    {activeTopic.codeSnippet && (
                        <div className="mt-8">
                            <h3 className="text-xl font-bold mb-4 flex items-center text-gray-800 dark:text-white">
                                <Terminal className="w-6 h-6 mr-2 text-orange-600" />
                                Code Example
                            </h3>
                            <CodeBlock code={activeTopic.codeSnippet} />
                        </div>
                    )}
                </div>
            </div>
        </CoursePageLayout>
    );
};

export default GitCoursePage;
