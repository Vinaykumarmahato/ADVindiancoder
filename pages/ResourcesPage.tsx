
import React from 'react';
import { motion } from 'framer-motion';
import { FileText, BookOpen, Github } from 'lucide-react';
import { RESOURCES } from '../constants';
import PageWrapper from '../components/PageWrapper';

const iconMap = {
    'Notes': <FileText className="w-6 h-6 text-primary" />,
    'Blog': <BookOpen className="w-6 h-6 text-green-500" />,
    'Project': <Github className="w-6 h-6 text-purple-500" />
};

const ResourcesPage = () => {
    const notes = RESOURCES.filter(r => r.type === 'Notes');
    const blogs = RESOURCES.filter(r => r.type === 'Blog');
    const projects = RESOURCES.filter(r => r.type === 'Project');

    return (
        <PageWrapper>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold tracking-tight">Resources Hub</h1>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">Your one-stop destination for notes, blogs, and project source code.</p>
                </div>

                {/* Notes & PDFs */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 flex items-center"><FileText className="mr-3 text-primary"/>Notes & PDFs</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {notes.map((note, i) => (
                             <motion.a 
                                key={note.id} 
                                href={note.link} 
                                className="block p-6 bg-white/5 dark:bg-black/20 border border-white/10 rounded-xl hover:bg-primary/10 transition-colors"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                             >
                                <h3 className="font-semibold">{note.title}</h3>
                            </motion.a>
                        ))}
                    </div>
                </section>

                {/* Blogs Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 flex items-center"><BookOpen className="mr-3 text-green-500"/>Blogs</h2>
                    <div className="space-y-6">
                        {blogs.map((blog, i) => (
                             <motion.a 
                                key={blog.id} 
                                href={blog.link} 
                                className="block p-6 bg-white/5 dark:bg-black/20 border border-white/10 rounded-xl hover:bg-green-500/10 transition-colors"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                            >
                                <h3 className="font-bold text-lg text-green-400">{blog.title}</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{blog.description}</p>
                            </motion.a>
                        ))}
                    </div>
                </section>
                
                {/* Projects Section */}
                <section>
                    <h2 className="text-3xl font-bold mb-8 flex items-center"><Github className="mr-3 text-purple-500"/>Projects on GitHub</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {projects.map((project, i) => (
                             <motion.div 
                                key={project.id} 
                                className="p-6 bg-white/5 dark:bg-black/20 border border-white/10 rounded-xl flex flex-col justify-between"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                             >
                                <div>
                                    <h3 className="font-bold text-xl text-purple-400">{project.title}</h3>
                                    <div className="flex flex-wrap gap-2 my-3">
                                        {project.techStack?.map(tech => (
                                            <span key={tech} className="text-xs font-semibold bg-purple-500/10 text-purple-400 px-2 py-1 rounded-full">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                                <a href={project.link} className="mt-4 inline-block font-semibold text-white bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition-colors text-center">
                                    View on GitHub
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </div>
        </PageWrapper>
    );
};

export default ResourcesPage;
