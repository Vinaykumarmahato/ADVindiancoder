declare module 'mermaid' {
    interface MermaidConfig {
        startOnLoad?: boolean;
        theme?: string;
        themeVariables?: Record<string, any>;
        securityLevel?: string;
        [key: string]: any;
    }

    interface RenderResult {
        svg: string;
        bindFunctions?: (element: Element) => void;
    }

    const mermaid: {
        initialize: (config: MermaidConfig) => void;
        render: (id: string, text: string) => Promise<RenderResult>;
        [key: string]: any;
    };

    export default mermaid;
}
