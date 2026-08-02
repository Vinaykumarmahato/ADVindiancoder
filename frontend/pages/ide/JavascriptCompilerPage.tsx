import React from 'react';
import CompilerWorkspace from '../../components/ide/CompilerWorkspace';
import SEO from '../../components/SEO';
import JSCompilerSEO from '../../components/seo/JSCompilerSEO';
import PageWrapper from '../../components/PageWrapper';

export default function JavascriptCompilerPage() {
    const jsStructuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "SoftwareApplication",
          "name": "Adv Indian Coder Online JavaScript Compiler",
          "url": "https://www.advindiancoder.com/online-javascript-compiler",
          "applicationCategory": "DeveloperApplication",
          "operatingSystem": "All",
          "description": "A free, browser-based online JavaScript compiler and editor allowing developers to write, test, and execute JS code instantly without installation.",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Adv Indian Coder",
            "url": "https://www.advindiancoder.com"
          }
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Is this online JavaScript compiler free to use?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, our online JavaScript compiler is 100% free to use. There are no hidden fees, premium tiers, or registration requirements to execute your code."
              }
            },
            {
              "@type": "Question",
              "name": "Do I need to install Node.js to run JavaScript here?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No installation is required! Our compiler runs directly in your web browser. You do not need to download or configure Node.js, making it perfect for quick testing."
              }
            },
            {
              "@type": "Question",
              "name": "Does the compiler support modern ES6+ features?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely. Our JavaScript execution environment is fully up-to-date and supports modern ECMAScript features including arrow functions, classes, async/await, and template literals."
              }
            },
            {
              "@type": "Question",
              "name": "Can I use this compiler on my mobile device?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, our platform features a responsive design that works seamlessly on smartphones and tablets, allowing you to code and test on the go."
              }
            },
            {
              "@type": "Question",
              "name": "Are there limits to the code I can execute?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "While there is no strict limit on line count for standard usage, browsers may timeout on infinite loops or extremely heavy processing tasks to prevent your device from crashing."
              }
            },
            {
              "@type": "Question",
              "name": "Does this tool provide syntax highlighting?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes! The editor features intelligent syntax highlighting and automatic code formatting to help you write clean, error-free JavaScript."
              }
            },
            {
              "@type": "Question",
              "name": "Is my code saved automatically?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Currently, the compiler acts as a temporary execution scratchpad. If you refresh the page, your code will be reset. We recommend saving important snippets locally."
              }
            },
            {
              "@type": "Question",
              "name": "Can I practice for technical coding interviews here?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, our online compiler is an excellent tool for practicing Data Structures and Algorithms (DSA) questions common in technical software engineering interviews."
              }
            }
          ]
        }
      ]
    };

    return (
        <PageWrapper>
            <SEO 
                title="Online JavaScript Compiler - Run & Execute JS Code Free" 
                description="Fast and free Online JavaScript Compiler. Write, run, and test your JS code instantly in your browser with our modern online editor. No setup required!"
                keywords="online javascript compiler, online js compiler, run javascript online, execute javascript online, online javascript editor"
                schema={jsStructuredData}
            />
            {/* The IDE Component */}
            <div className="h-screen w-full">
                <CompilerWorkspace language="javascript" />
            </div>
            
            {/* The SEO Content rendered below the fold */}
            <JSCompilerSEO />
        </PageWrapper>
    );
}
