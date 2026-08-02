import React from 'react';
import CompilerWorkspace from '../../components/ide/CompilerWorkspace';
import SEO from '../../components/SEO';
import JavaCompilerSEO from '../../components/seo/JavaCompilerSEO';
import PageWrapper from '../../components/PageWrapper';

export default function JavaCompilerPage() {
    const javaStructuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "SoftwareApplication",
          "name": "Adv Indian Coder Online Java Compiler",
          "operatingSystem": "Web",
          "applicationCategory": "DeveloperApplication",
          "offers": {
            "@type": "Offer",
            "price": "0.00",
            "priceCurrency": "USD"
          },
          "description": "A fast, free online Java compiler and IDE to write, compile, and execute Java code directly in the browser.",
          "url": "https://www.advindiancoder.com/online-java-compiler"
        },
        {
          "@type": "WebPage",
          "name": "Online Java Compiler | Run & Execute Java Code Free",
          "description": "Write, compile, and run Java code instantly with our free Online Java Compiler.",
          "url": "https://www.advindiancoder.com/online-java-compiler",
          "publisher": {
            "@type": "Organization",
            "name": "Adv Indian Coder"
          }
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is an online Java compiler?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "An online Java compiler is a web-based tool that allows you to write, compile, and execute Java programming code directly in your internet browser without needing to install the Java Development Kit (JDK) or an IDE on your local machine."
              }
            },
            {
              "@type": "Question",
              "name": "Is this Java compiler free to use?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, our online Java compiler is 100% free for all users. You can compile and run as many Java programs as you need without any hidden fees."
              }
            },
            {
              "@type": "Question",
              "name": "Do I need to install anything to run Java code here?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No installation is required. Everything runs in the cloud. You only need a modern web browser and an internet connection."
              }
            },
            {
              "@type": "Question",
              "name": "Can I provide user input to my Java programs?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely. Our interactive console supports standard input (stdin), allowing you to use classes like Scanner to accept input from users during runtime."
              }
            },
            {
              "@type": "Question",
              "name": "How does the online Java compiler handle syntax errors?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "If your code contains syntax errors or exceptions, the compiler will catch them during the compilation or execution phase and display detailed error messages and line numbers in the output console to help you debug."
              }
            },
            {
              "@type": "Question",
              "name": "Is my code secure and private?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, all code executions are performed in secure, isolated sandbox environments. We do not permanently store your code unless you explicitly choose to save or share it."
              }
            },
            {
              "@type": "Question",
              "name": "Can I use this compiler on a mobile device?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, our website is fully responsive. While coding on a physical keyboard is recommended, you can easily view, write, and run Java code from your smartphone or tablet."
              }
            },
            {
              "@type": "Question",
              "name": "Which Java version does the compiler use?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We continuously update our backend servers to support the most recent stable Long-Term Support (LTS) releases of Java to ensure compatibility and access to modern features."
              }
            }
          ]
        }
      ]
    };

    return (
        <PageWrapper>
            <SEO 
                title="Online Java Compiler | Run & Execute Java Code Free" 
                description="Write, compile, and run Java code instantly with our free Online Java Compiler. Features syntax highlighting and fast execution."
                keywords="online java compiler, run java online, java IDE online, execute java code, java editor online"
                schema={javaStructuredData}
            />
            {/* The IDE Component */}
            <div className="h-screen w-full">
                <CompilerWorkspace language="java" />
            </div>
            
            {/* The SEO Content rendered below the fold */}
            <JavaCompilerSEO />
        </PageWrapper>
    );
}
