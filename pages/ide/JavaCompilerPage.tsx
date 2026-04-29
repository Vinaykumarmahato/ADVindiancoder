import React from 'react';
import CompilerWorkspace from '../../components/ide/CompilerWorkspace';
import SEO from '../../components/SEO';

export default function JavaCompilerPage() {
    const javaCompilerSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Free Online Java Compiler - ADV Indian Coder",
        "description": "Write, compile and run Java code online without any setup. Use ADV Lab's professional online IDE.",
        "url": "https://advindiancoder.com/online-java-compiler"
    };

    return (
        <>
            <SEO 
                title="Free Online Java Compiler" 
                description="Write, compile and run Java code online without any setup. Use ADV Lab's professional online IDE."
                keywords="online java compiler, free online java compiler, java compiler browser, online java IDE, adv lab java, practice java online"
                schema={javaCompilerSchema}
            />
            <CompilerWorkspace language="java" />
        </>
    );
}
