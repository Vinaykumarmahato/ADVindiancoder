import React from 'react';
import CompilerWorkspace from '../../components/ide/CompilerWorkspace';
import SEO from '../../components/SEO';
import CCompilerSEO from '../../components/seo/CCompilerSEO';
import PageWrapper from '../../components/PageWrapper';

export default function CCompilerPage() {
    const cStructuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "SoftwareApplication",
          "name": "Adv Indian Coder Online C Compiler",
          "operatingSystem": "All",
          "applicationCategory": "DeveloperApplication",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "description": "A fast, free online compiler to write, compile, and execute C programming code directly in the browser.",
          "url": "https://www.advindiancoder.com/online-c-compiler"
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is a C compiler?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A C compiler is a software program that translates human-readable C programming code (source code) into machine-readable instructions (binary code) that a computer's processor can execute."
              }
            },
            {
              "@type": "Question",
              "name": "Is this online C compiler really free?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, the Adv Indian Coder online C compiler is 100% free to use. There are no hidden charges, no premium subscriptions required, and no limits on how many times you can compile your code."
              }
            },
            {
              "@type": "Question",
              "name": "Which underlying compiler does this tool use?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our online platform utilizes the robust GNU Compiler Collection (GCC) to compile and execute your C code, ensuring industry-standard compliance and accurate error reporting."
              }
            },
            {
              "@type": "Question",
              "name": "Can I provide standard input to my program?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely. We feature an interactive console or an 'Input' tab where you can type or paste standard input before execution. This is essential for programs utilizing scanf() or getchar()."
              }
            },
            {
              "@type": "Question",
              "name": "Do I need to install anything on my computer to use this?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No installation is required. This is a fully web-based cloud IDE. All compilation and execution happen on our secure backend servers."
              }
            },
            {
              "@type": "Question",
              "name": "Does the compiler support mobile devices?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, our IDE is built with a responsive design. You can comfortably write, compile, and execute C code from your smartphone, tablet, or desktop browser."
              }
            },
            {
              "@type": "Question",
              "name": "Which standard C libraries are supported?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We support all standard C libraries, including stdio.h, stdlib.h, math.h, string.h, and time.h."
              }
            },
            {
              "@type": "Question",
              "name": "Is learning C still relevant today?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, learning C is highly relevant. It forms the foundation for understanding computer memory architecture, system programming, embedded systems, and serves as a stepping stone to learning C++, Java, and Python."
              }
            }
          ]
        }
      ]
    };

    return (
        <PageWrapper>
            <SEO 
                title="Free Online C Compiler - Write, Run & Compile C Code | Adv Indian Coder" 
                description="Write, compile, and execute your C programs instantly with our fast, free Online C Compiler. Features interactive console, GCC support, and syntax highlighting."
                keywords="online C compiler, run C code online, compile C online, C programming compiler, online C IDE, GCC compiler online"
                schema={cStructuredData}
            />
            {/* The IDE Component */}
            <div className="h-screen w-full">
                <CompilerWorkspace language="c" />
            </div>
            
            {/* The SEO Content rendered below the fold */}
            <CCompilerSEO />
        </PageWrapper>
    );
}
