import React, { useEffect, useRef, useId } from 'react';
import mermaid from 'mermaid';

interface MermaidDiagramProps {
    chart: string;
    caption?: string;
}

// Initialize mermaid with custom theme matching site design tokens
mermaid.initialize({
    startOnLoad: false,
    theme: 'dark',
    themeVariables: {
        darkMode: true,
        background: '#0f172a',
        primaryColor: '#ea580c',
        primaryTextColor: '#ffffff',
        primaryBorderColor: '#f97316',
        lineColor: '#fb923c',
        secondaryColor: '#1e293b',
        tertiaryColor: '#334155',
        fontFamily: 'ui-sans-serif, system-ui, sans-serif',
        fontSize: '14px'
    },
    securityLevel: 'loose',
});

const MermaidDiagram: React.FC<MermaidDiagramProps> = ({ chart, caption }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const uniqueId = useId().replace(/:/g, '');

    useEffect(() => {
        let isMounted = true;
        const renderDiagram = async () => {
            if (!containerRef.current) return;
            try {
                const id = `mermaid-${uniqueId}-${Math.floor(Math.random() * 10000)}`;
                const { svg } = await mermaid.render(id, chart);
                if (isMounted && containerRef.current) {
                    containerRef.current.innerHTML = svg;
                }
            } catch (error) {
                console.error("Mermaid rendering error:", error);
                if (isMounted && containerRef.current) {
                    containerRef.current.innerHTML = `<pre class="text-xs text-red-400 p-2">${chart}</pre>`;
                }
            }
        };

        renderDiagram();
        return () => {
            isMounted = false;
        };
    }, [chart, uniqueId]);

    return (
        <div className="my-6 p-4 bg-slate-900 border border-slate-800 rounded-2xl shadow-xl overflow-x-auto">
            <div ref={containerRef} className="flex justify-center items-center min-h-[120px]" />
            {caption && (
                <p className="text-xs text-center mt-3 text-slate-400 font-medium italic">
                    {caption}
                </p>
            )}
        </div>
    );
};

export default MermaidDiagram;
