import React from 'react';
import CompilerWorkspace from '../../components/ide/CompilerWorkspace';
import SEO from '../../components/SEO';
import CppCompilerSEO from '../../components/seo/CppCompilerSEO';
import PageWrapper from '../../components/PageWrapper';

export default function CppCompilerPage() {
    const cppStructuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "SoftwareApplication",
          "name": "Advanced Indian Coder Online C++ Compiler",
          "operatingSystem": "Web Browser",
          "applicationCategory": "DeveloperApplication",
          "offers": {
            "@type": "Offer",
            "price": "0.00",
            "priceCurrency": "USD"
          },
          "description": "A fast and free online C++ compiler. Write, compile, and run C++ code instantly in your browser without any installation.",
          "url": "https://www.advindiancoder.com/online-cpp-compiler",
          "publisher": {
            "@type": "Organization",
            "name": "Advanced Indian Coder"
          }
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Is this online C++ compiler free to use?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, the Advanced Indian Coder online C++ compiler is 100% free to use with no hidden charges or subscriptions required."
              }
            },
            {
              "@type": "Question",
              "name": "Do I need to create an account to run my C++ code?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No, you can write and execute C++ code anonymously without creating an account. However, creating an account may allow you to save your code history."
              }
            },
            {
              "@type": "Question",
              "name": "Which C++ versions are supported?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our compiler supports multiple C++ standards, including C++11, C++14, C++17, and C++20. You can choose the version you need from the compiler settings."
              }
            },
            {
              "@type": "Question",
              "name": "Can I take user input in my C++ program?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely! You can provide standard input in the 'Custom Input' box before executing your code."
              }
            },
            {
              "@type": "Question",
              "name": "What compilers are running in the backend?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We use industry-standard compilers like GCC (GNU Compiler Collection) to ensure accurate and fast compilation."
              }
            },
            {
              "@type": "Question",
              "name": "Can I use this compiler on my mobile phone?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, our web interface is fully responsive, meaning you can write and compile C++ code seamlessly on your smartphone or tablet."
              }
            },
            {
              "@type": "Question",
              "name": "Is it possible to share my code with others?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we provide a share feature that generates a unique link to your code, which you can easily send to friends or teachers."
              }
            },
            {
              "@type": "Question",
              "name": "Are external C++ libraries supported?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Currently, we support the C++ Standard Template Library (STL). Support for external third-party libraries may be limited to ensure system security and fast execution times."
              }
            }
          ]
        }
      ]
    };

    return (
        <PageWrapper>
            <SEO 
                title="Online C++ Compiler - Write, Run & Test C++ Code Instantly | Adv Indian Coder" 
                description="Experience the fastest free online C++ compiler. Write, compile, and run your C++ code instantly right in your browser. Perfect for students and developers!"
                keywords="Online C++ Compiler, C++ online compiler, run C++ online, compile C++ online, online IDE for C++"
                schema={cppStructuredData}
            />
            {/* The IDE Component */}
            <div className="h-screen w-full">
                <CompilerWorkspace language="cpp" />
            </div>
            
            {/* The SEO Content rendered below the fold */}
            <CppCompilerSEO />
        </PageWrapper>
    );
}
