import React from 'react';
import CompilerWorkspace from '../../components/ide/CompilerWorkspace';
import SEO from '../../components/SEO';
import PythonCompilerSEO from '../../components/seo/PythonCompilerSEO';
import PageWrapper from '../../components/PageWrapper';

export default function PythonCompilerPage() {
    const pythonStructuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "SoftwareApplication",
          "name": "Adv Indian Coder Online Python Compiler",
          "operatingSystem": "Any",
          "applicationCategory": "DeveloperApplication",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "description": "A free, web-based Python 3 compiler allowing users to write, run, and debug Python code instantly in their browser.",
          "url": "https://www.advindiancoder.com/online-python-compiler"
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is an online Python compiler?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "An online Python compiler is a web-based application that allows you to write, execute, and test Python code directly in your internet browser without needing to download or install any software on your local computer."
              }
            },
            {
              "@type": "Question",
              "name": "Is this Python compiler free to use?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, our online Python compiler is 100% free to use. There are no hidden fees, subscriptions, or usage limits for standard coding practices."
              }
            },
            {
              "@type": "Question",
              "name": "Do I need to download anything to run Python?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. The entire compilation and execution process happens on our secure cloud servers. You only need a web browser and an internet connection."
              }
            },
            {
              "@type": "Question",
              "name": "Can I use this compiler on my smartphone?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely! Our platform is fully responsive and optimized for mobile devices, allowing you to code comfortably on your smartphone or tablet."
              }
            },
            {
              "@type": "Question",
              "name": "Which version of Python is supported?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our compiler currently supports Python 3, ensuring you have access to the modern features, syntax, and standard libraries of the language."
              }
            },
            {
              "@type": "Question",
              "name": "How do I debug errors in my code here?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "If there is a syntax or runtime error in your script, the compiler will display the standard Python traceback in the output console, pointing out the exact line and nature of the error so you can fix it."
              }
            },
            {
              "@type": "Question",
              "name": "Does this support standard Python libraries?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, you can import and utilize standard Python built-in libraries such as math, random, datetime, re, and more for your programs."
              }
            },
            {
              "@type": "Question",
              "name": "Is my code secure?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. The code is executed in an isolated sandbox environment. It is not permanently stored on our servers unless you explicitly use a save/share feature, ensuring your data remains private."
              }
            }
          ]
        }
      ]
    };

    return (
        <PageWrapper>
            <SEO 
                title="Best Online Python Compiler - Run & Test Python Code Free" 
                description="Use our free, fast online Python compiler to write, run, and debug your Python 3 code directly in your browser. Mobile-friendly with no setup required."
                keywords="online python compiler, run python online, python compiler online, python ide online, free python compiler, python code runner"
                schema={pythonStructuredData}
            />
            {/* The IDE Component */}
            <div className="h-screen w-full">
                <CompilerWorkspace language="python" />
            </div>
            
            {/* The SEO Content rendered below the fold */}
            <PythonCompilerSEO />
        </PageWrapper>
    );
}
