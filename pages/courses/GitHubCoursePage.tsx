import React, { useState } from 'react';
import CoursePageLayout from '../../components/CoursePageLayout';
import { Github, Code, BookOpen, Lightbulb, Terminal } from 'lucide-react';

const GitHubCoursePage = () => {
    const [activeTopicIndex, setActiveTopicIndex] = useState(0);

    const courseData = [
        {
            id: 'github-intro',
            title: 'GitHub Intro',
            definition: 'GitHub is a web-based hosting service for version control using Git. It offers all of the distributed version control and source code management (SCM) functionality of Git as well as adding its own features.',
            example: 'Hosting your open-source project on GitHub for others to contribute.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        It provides access control and several collaboration features such as bug tracking, feature requests, task management, and continuous integration.
                    </p>
                </>
            ),
            codeSnippet: null
        },
        {
            id: 'github-get-started',
            title: 'GitHub Get Started',
            definition: 'To get started with GitHub, you need to create an account on github.com.',
            example: 'Signing up for a free GitHub account.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Once you have an account, you can create repositories, follow other developers, and star projects you like.
                    </p>
                </>
            ),
            codeSnippet: null
        },
        {
            id: 'github-create-repo',
            title: 'GitHub Create Repo',
            definition: 'A repository is the most basic element of GitHub. It is a place where you can store your code, your files, and each file\'s revision history.',
            example: 'Creating a "my-first-repo" to store your project files.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Repositories can have multiple collaborators and can be either public or private.
                    </p>
                </>
            ),
            codeSnippet: null
        },
        {
            id: 'github-branches',
            title: 'GitHub Branches',
            definition: 'Branches allow you to work on different versions of a repository at one time.',
            example: 'Creating a branch to fix a bug without affecting the main code.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        By default, your repository has one branch named "main". You use branches to experiment and make edits before committing them to main.
                    </p>
                </>
            ),
            codeSnippet: `git branch feature-branch
git checkout feature-branch`
        },
        {
            id: 'github-pull-requests',
            title: 'GitHub Pull Requests',
            definition: 'Pull Requests let you tell others about changes you\'ve pushed to a branch in a repository on GitHub.',
            example: 'Asking the project maintainer to review and merge your code changes.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Once a pull request is opened, you can discuss and review the potential changes with collaborators and add follow-up commits before your changes are merged into the base branch.
                    </p>
                </>
            ),
            codeSnippet: null
        },
        {
            id: 'github-issues',
            title: 'GitHub Issues',
            definition: 'GitHub Issues are a tool to track ideas, feedback, tasks, or bugs for work on GitHub.',
            example: 'Creating an issue to report a bug in a library.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Issues can be organized with labels, milestones, and assignees.
                    </p>
                </>
            ),
            codeSnippet: null
        },
        {
            id: 'github-actions',
            title: 'GitHub Actions',
            definition: 'GitHub Actions makes it easy to automate all your software workflows, now with world-class CI/CD.',
            example: 'Automatically running tests whenever you push code to the repository.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Build, test, and deploy your code right from GitHub. Make code reviews, branch management, and issue triaging work the way you want.
                    </p>
                </>
            ),
            codeSnippet: `name: CI
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Run a one-line script
      run: echo Hello, world!`
        },
        {
            id: 'github-pages',
            title: 'GitHub Pages',
            definition: 'GitHub Pages is a static site hosting service that takes HTML, CSS, and JavaScript files straight from a repository on GitHub, optionally runs the files through a build process, and publishes a website.',
            example: 'Hosting your personal portfolio website directly from your GitHub repository.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        You can host your site on GitHub's domain or your own custom domain.
                    </p>
                </>
            ),
            codeSnippet: null
        },
        {
            id: 'github-fork',
            title: 'GitHub Fork',
            definition: 'A fork is a copy of a repository. Forking a repository allows you to freely experiment with changes without affecting the original project.',
            example: 'Forking a popular open-source library to add a new feature.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Most commonly, forks are used to either propose changes to someone else's project or to use someone else's project as a starting point for your own idea.
                    </p>
                </>
            ),
            codeSnippet: null
        },
        {
            id: 'github-clone',
            title: 'GitHub Clone',
            definition: 'Cloning a repository pulls down a full copy of all the repository data that GitHub has at that point in time, including all versions of every file and folder for the project.',
            example: 'Downloading a repository to your local machine to work on it.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        You can clone a repository using HTTPS or SSH.
                    </p>
                </>
            ),
            codeSnippet: `git clone https://github.com/username/repository.git`
        },
        {
            id: 'github-gist',
            title: 'GitHub Gist',
            definition: 'Gist is a simple way to share snippets and pastes with others.',
            example: 'Sharing a single configuration file or a script without creating a full repository.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        All gists are Git repositories, so they are automatically versioned, forkable and usable from Git.
                    </p>
                </>
            ),
            codeSnippet: null
        }
    ];

    const topics = courseData.map(topic => topic.title);
    const activeTopic = courseData[activeTopicIndex];

    const CodeBlock = ({ code, lang = 'yaml' }: { code: string, lang?: string }) => (
        <div className="bg-[#1e1e1e] text-gray-200 p-6 rounded-2xl font-mono text-sm mb-6 overflow-x-auto shadow-xl border border-gray-800">
            <div className="flex items-center space-x-2 mb-4 border-b border-gray-700 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-xs text-gray-500 font-sans">config.yml</span>
            </div>
            <pre className="leading-relaxed text-gray-300">{code}</pre>
        </div>
    );

    return (
        <CoursePageLayout
            title="GitHub Tutorial"
            description="GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere."
            topics={topics}
            icon={Github}
            colorClass="gray"
            activeTopicIndex={activeTopicIndex}
            onTopicClick={setActiveTopicIndex}
        >
            <div className="space-y-8">
                {/* Definition Section */}
                <div className="bg-gray-50 dark:bg-gray-900/10 border-l-4 border-gray-600 p-6 rounded-r-xl">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-gray-300 mb-2 flex items-center">
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
                                <Terminal className="w-6 h-6 mr-2 text-gray-600" />
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

export default GitHubCoursePage;
