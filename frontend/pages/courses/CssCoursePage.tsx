import React, { useState } from 'react';
import CoursePageLayout from '../../components/CoursePageLayout';
import { Palette, Code, BookOpen, Lightbulb, FileText, Layers, Sparkles, Box, LayoutGrid, Check, AlertTriangle, Cpu } from 'lucide-react';
import CodeBlock from '../../components/CodeBlock';
import MermaidDiagram from '../../components/MermaidDiagram';

interface CssTopic {
    id: string;
    title: string;
    definition: string;
    example?: string;
    syntax?: string;
    realLifeScenario?: string;
    codeSnippet?: string | null;
    content: React.ReactNode;
}

const CssCoursePage = () => {
    const [activeTopicIndex, setActiveTopicIndex] = useState(0);

    const courseData: CssTopic[] = [
        // ==================== BEGINNER TIER ====================
        {
            id: 'css-selectors',
            title: '1. [Beginner] Selectors & Specificity Hierarchy',
            definition: 'CSS Selectors are patterns used to target and select specific HTML elements on a web page to apply visual styling rules like colors, margins, and fonts. Specificity Hierarchy is the browser calculation algorithm that assigns a numerical score to every CSS rule to determine which declaration wins when multiple rules target the same element. Rules with higher specificity scores (such as ID selectors) always override rules with lower specificity scores (such as element tag selectors).',
            syntax: `/* Selector Types Syntax Blueprint */
* { }                       /* Universal Selector */
element { }                 /* Type Selector */
.class-name { }             /* Class Selector */
#id-name { }                /* ID Selector */
element.class[attr="val"] { } /* Compound Attribute Selector */`,
            codeSnippet: `/* Element Selector (Specificity: 0,0,0,1) */
p {
    color: #475569;
    line-height: 1.6;
}

/* Class Selector (Specificity: 0,0,1,0) - Overrides element selector */
.highlight-text {
    color: #2563eb;
    font-weight: 600;
}

/* ID Selector (Specificity: 0,1,0,0) - Overrides class selector */
#main-notification {
    color: #dc2626;
    background-color: #fef2f2;
}`,
            realLifeScenario: 'Enterprise applications manage CSS specificity strictly to prevent unmaintainable `!important` flags in global codebases.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center">
                            <BookOpen className="w-4 h-4 mr-2" />
                            1. Definition
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            CSS Selectors are patterns used to target and select specific HTML elements on a web page to apply visual styling rules like colors, margins, and fonts. Specificity Hierarchy is the browser calculation algorithm that assigns a numerical score to every CSS rule to determine which declaration wins when multiple rules target the same element. Rules with higher specificity scores (such as ID selectors) always override rules with lower specificity scores (such as element tag selectors).
                        </p>
                    </div>

                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-purple-800 dark:text-purple-300 mb-1 flex items-center">
                            <Lightbulb className="w-4 h-4 mr-2" />
                            2. Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            Think of CSS specificity like priority ranking in an organization. An entry-level request from a team member (element selector <code className="text-blue-600 font-mono">p</code>) can be overridden by a manager's instructions (class selector <code className="text-blue-600 font-mono">.notice</code>), which in turn can be overridden by an executive directive from the CEO (ID selector <code className="text-blue-600 font-mono">#urgent-announcement</code>). The web browser always follows the directive from the highest authority (highest specificity score).
                        </p>
                    </div>

                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                            <Layers className="w-4 h-4 mr-2 text-blue-600" />
                            3. Specificity Score Hierarchy (Mermaid.js Diagram)
                        </h4>
                        <MermaidDiagram 
                            chart={`graph TD
    A[CSS Specificity Weight Hierarchy] --> B["Inline Styles (1,0,0,0) - Highest Priority"]
    A --> C["ID Selectors #header (0,1,0,0)"]
    A --> D["Class / Attribute / Pseudo .btn (0,0,1,0)"]
    A --> E["Element / Pseudo-Element p, div (0,0,0,1) - Lowest Priority"]`}
                            caption="Figure 1.1: CSS Specificity Hierarchy Ranking showing how inline styles and ID selectors override class and element selectors."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                            This diagram illustrates the 4-tuple weight calculation browsers use to resolve conflicting CSS styling declarations on the same element.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                            <Code className="w-4 h-4 mr-2 text-blue-600" />
                            4. Sample Code
                        </h4>
                        <CodeBlock 
                            code={`/* Element Selector (Specificity: 0,0,0,1) */
p {
    color: #475569;
    line-height: 1.6;
}

/* Class Selector (Specificity: 0,0,1,0) - Overrides element selector */
.highlight-text {
    color: #2563eb;
    font-weight: 600;
}

/* ID Selector (Specificity: 0,1,0,0) - Overrides class selector */
#main-notification {
    color: #dc2626;
    background-color: #fef2f2;
}`} 
                            lang="css" 
                            colorClass="blue" 
                            filename="styles.css" 
                        />
                        <p className="text-xs text-gray-500 font-mono mt-1">
                            // Demonstrating how class and ID selectors override general element styling rules.
                        </p>
                    </div>

                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center">
                            <Cpu className="w-4 h-4 mr-2" />
                            5. Real-World Application
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            CSS selectors and specificity rules are used when architecting enterprise UI component libraries (like Tailwind CSS or Bootstrap), allowing developers to apply predictable utility classes (<code className="text-blue-600 font-mono">.btn-primary</code>) without accidental styling conflicts across large web applications.
                        </p>
                    </div>

                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center">
                            <Check className="w-4 h-4 mr-2" />
                            6. Advantages
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Enables precise visual targeting of specific HTML elements without altering markup structure.</li>
                            <li>Provides predictable, deterministic cascade resolution rules for complex stylesheet inheritance.</li>
                            <li>Allows building modular, reusable CSS utility classes across multi-page web applications.</li>
                        </ul>
                    </div>

                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center">
                            <AlertTriangle className="w-4 h-4 mr-2" />
                            7. Disadvantages / Limitations
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Overusing high-specificity selectors (like IDs or inline styles) creates brittle code requiring <code className="text-orange-400">!important</code> hacks to override.</li>
                            <li>Deeply nested descendant selectors (<code className="text-orange-400">div &gt; ul &gt; li &gt; a</code>) create heavy specificity weights that slow down browser style recalculations.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'css-box-model',
            title: '2. [Beginner] Box Model & Geometry (border-box)',
            definition: 'Every HTML element is rendered inside a rectangular box composed of 4 concentric layers: Content area, Padding, Border, and Margin.',
            syntax: `.box {
    width: 300px;
    padding: 20px;
    border: 5px solid #000;
    margin: 30px;
    box-sizing: border-box; /* Total width = exactly 300px */
}`,
            codeSnippet: `/* Standard Box Sizing Reset */
*, *:before, *:after {
    box-sizing: border-box;
}

.card {
    width: 300px;
    padding: 20px;
    border: 2px solid #2563eb;
    margin: 16px;
}`,
            realLifeScenario: 'Without setting box-sizing: border-box, adding 20px padding to a 100% width input field causes horizontal scrollbar overflow breaking mobile layouts.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">The CSS Box Model is the fundamental geometric framework that wraps around every HTML element, comprising Content, Padding (inner space), Border (boundary line), and Margin (outer spacing). Setting <code className="font-mono text-blue-600">box-sizing: border-box</code> includes padding and border within the declared element width.</p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-purple-800 dark:text-purple-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of a framed picture hanging on a wall. The photo inside is the Content, the mat board framing the photo is the Padding, the wooden picture frame is the Border, and the wall space separating it from adjacent frames is the Margin.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-blue-600" />3. Box Model Concentric Layers (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph TD
    A[Margin Outer Spacing] --> B[Border Boundary Line]
    B --> C[Padding Inner Spacing]
    C --> D["Content Width x Height"]
    style D fill:#2563eb,color:#fff`}
                            caption="Figure 2.1: The 4 Concentric Layers of the CSS Box Model."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This diagram demonstrates how padding, border, and margin wrap around an element's core content box.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-blue-600" />4. Sample Code</h4>
                        <CodeBlock code={`/* Standard Box Sizing Reset */
*, *:before, *:after {
    box-sizing: border-box;
}

.card {
    width: 300px;
    padding: 20px;
    border: 2px solid #2563eb;
    margin: 16px;
}`} lang="css" colorClass="blue" filename="box-model.css" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Universal CSS resets apply <code className="text-blue-600 font-mono">box-sizing: border-box</code> globally to prevent form inputs and grid columns from overflowing parent container widths.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li><code className="text-blue-400">border-box</code> makes layout math predictable by locking total element widths.</li>
                            <li>Provides precise control over element spacing and visual boundaries.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Vertical margins between block elements collapse together (margin collapsing), causing unexpected spacing bugs.</li>
                            <li>Legacy default <code className="text-blue-400">content-box</code> behavior expands element sizes when padding is added.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'css-colors-units',
            title: '3. [Beginner] Colors & Relative CSS Units',
            definition: 'CSS supports absolute units (px) and relative units (rem, em, %, vh, vw), alongside modern color formats (HEX, RGB, HSL, OKLCH).',
            syntax: `:root {
    --size: 1rem;       /* 1rem = 16px */
    --color: #2563eb;   /* HEX */
    --color-hsl: hsl(221, 83%, 53%);
}`,
            codeSnippet: `body {
    font-size: 1rem; /* 16px root baseline */
}

.hero {
    width: 100vw;
    min-height: 80vh;
    padding: 2rem 1rem;
    color: hsl(221, 83%, 53%);
}`,
            realLifeScenario: 'Using rem units for font sizes and spacing ensures that text scales proportionally when visually impaired users increase default browser zoom settings.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">CSS Units specify lengths and dimensions, categorized into fixed absolute units (<code className="font-mono text-blue-600">px</code>) and scalable relative units (<code className="font-mono text-blue-600">rem</code>, <code className="font-mono text-blue-600">em</code>, <code className="font-mono text-blue-600">vw</code>, <code className="font-mono text-blue-600">vh</code>). Color formats specify visual hues using HEX codes, RGB, or HSL color channels.</p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-purple-800 dark:text-purple-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of absolute units (<code className="font-mono">px</code>) like carved wooden blocks with fixed sizes, while relative units (<code className="font-mono">rem</code>) are like elastic bands that automatically stretch or shrink depending on the user's default browser font zoom settings.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-blue-600" />3. CSS Units &amp; Color Formats (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph LR
    A[CSS Styling Tokens] --> B[CSS Units]
    A --> C[Color Formats]
    B --> B1[Absolute: px]
    B --> B2["Relative: rem (root) / em / vw"]
    C --> C1["HEX: #2563eb"]
    C --> C2["HSL: Hue Saturation Lightness"]`}
                            caption="Figure 3.1: Overview of Absolute vs Relative Units and Modern Color Formats."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This diagram breaks down relative responsive units and color space formats supported in CSS.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-blue-600" />4. Sample Code</h4>
                        <CodeBlock code={`body {
    font-size: 1rem; /* 16px root baseline */
}

.hero {
    width: 100vw;
    min-height: 80vh;
    padding: 2rem 1rem;
    color: hsl(221, 83%, 53%);
}`} lang="css" colorClass="blue" filename="units.css" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Responsive typography scaling and accessible UI design systems use <code className="text-blue-600 font-mono">rem</code> units to respect user font zoom settings.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li><code className="text-blue-400">rem</code> units provide accessible font scaling for low-vision users.</li>
                            <li>HSL color notation allows easy creation of light and dark color shade variations.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Nested <code className="text-blue-400">em</code> units compound font sizes exponentially if mismanaged.</li>
                            <li>Viewport units (<code className="text-blue-400">vh</code>) on mobile browsers fluctuate when address bars collapse.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'css-typography',
            title: '4. [Beginner] Typography & Custom Web Fonts',
            definition: 'CSS typography controls font selection (font-family), font weights, line spacing (line-height), text alignment, and custom web font imports via Google Fonts.',
            syntax: `@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
p {
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    line-height: 1.6;
}`,
            codeSnippet: `@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap');

body {
    font-family: 'Outfit', sans-serif;
    line-height: 1.6;
    color: #0f172a;
}`,
            realLifeScenario: 'Applying -webkit-font-smoothing: antialiased renders crisp vector typography across macOS and iOS high-DPI Retina displays.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">CSS Typography controls textual presentation using properties like <code className="font-mono text-blue-600">font-family</code>, <code className="font-mono text-blue-600">font-weight</code>, <code className="font-mono text-blue-600">line-height</code>, and <code className="font-mono text-blue-600">letter-spacing</code>, integrating custom web fonts via <code className="font-mono text-blue-600">@font-face</code> or Google Fonts imports.</p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-purple-800 dark:text-purple-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of CSS typography like choosing font styles and line spacing in a word processor document — bold headings grab attention, while comfortable line spacing prevents eye fatigue.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-blue-600" />3. Web Font Import &amp; Fallback Pipeline (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph TD
    A[Google Fonts @import] --> B[Fetch Web Font WOFF2 Asset]
    B --> C{Loaded Successfully?}
    C -- Yes --> D["Render Primary Font: 'Outfit'"]
    C -- No --> E["Render Fallback System Font: sans-serif"]`}
                            caption="Figure 4.1: Web Font Loading Pipeline and Fallback Font Stack Evaluation."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This diagram illustrates how browsers load custom web fonts and fall back to system fonts if network requests fail.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-blue-600" />4. Sample Code</h4>
                        <CodeBlock code={`@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap');

body {
    font-family: 'Outfit', sans-serif;
    line-height: 1.6;
    color: #0f172a;
}`} lang="css" colorClass="blue" filename="typography.css" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Editorial websites and SaaS applications configure custom web fonts with fallbacks to maintain brand identity and high text legibility.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Enhances brand aesthetic identity with custom typography.</li>
                            <li>Setting optimal <code className="text-blue-400">line-height</code> (1.5-1.7) improves reading comprehension speed.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Downloading heavy web font files can delay initial text rendering (FOUT/FOIT).</li>
                            <li>Unoptimized web fonts add extra network payload size to initial page loads.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'css-display',
            title: '5. [Beginner] Display Modes (block, inline, inline-block)',
            definition: 'The display property dictates how an element generates visual layout boxes (block, inline, inline-block, flex, grid, none).',
            syntax: `div { display: block; }        /* Full width, new line */
span { display: inline; }       /* Content width, no height */
button { display: inline-block; }/* Inline flow + width/height */
.hide { display: none; }       /* Removed from layout */`,
            codeSnippet: `.nav-item {
    display: inline-block;
    padding: 8px 16px;
    background-color: #f1f5f9;
}

.modal.hidden {
    display: none;
}`,
            realLifeScenario: 'Toggling display: none completely removes elements from the accessibility tree and browser rendering calculation, unlike visibility: hidden.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">The CSS <code className="font-mono text-blue-600">display</code> property controls an element's rendering box type: <code className="font-mono text-blue-600">block</code> elements take full width on a new line, <code className="font-mono text-blue-600">inline</code> elements flow with text, <code className="font-mono text-blue-600">inline-block</code> combines inline flow with dimensions, and <code className="font-mono text-blue-600">none</code> removes the element from rendering.</p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-purple-800 dark:text-purple-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of block elements like bricks in a wall (each sits on a new row), inline elements like words highlighted in a sentence, and inline-block like stickers pasted on a notebook page.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-blue-600" />3. Display Modes Comparison (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph TD
    A[CSS Display Property] --> B[display: block]
    A --> C[display: inline]
    A --> D[display: inline-block]
    A --> E[display: none]
    B --> B1[100% Width - Starts on New Line]
    C --> C1[Fits Content - Ignores Width/Height]
    D --> D1[Flows Inline + Respects Width/Height]
    E --> E1[Removed Completely from Layout Flow]`}
                            caption="Figure 5.1: Core CSS Display Modes and visual layout behaviors."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This diagram compares block, inline, inline-block, and hidden display modes.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-blue-600" />4. Sample Code</h4>
                        <CodeBlock code={`.nav-item {
    display: inline-block;
    padding: 8px 16px;
    background-color: #f1f5f9;
}

.modal.hidden {
    display: none;
}`} lang="css" colorClass="blue" filename="display.css" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Toggling <code className="text-blue-600 font-mono">display: none</code> removes modal dialogs and mobile navigation menus from the active layout flow when closed.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li><code className="text-blue-400">inline-block</code> allows setting width and height on inline elements like buttons.</li>
                            <li><code className="text-blue-400">display: none</code> completely removes hidden elements from screen reader accessibility trees.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Inline elements ignore vertical margin and explicit height declarations.</li>
                            <li>HTML whitespace between <code className="text-blue-400">inline-block</code> tags creates unintended 4px gaps.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'css-positioning',
            title: '6. [Beginner] Positioning & z-index Stack',
            definition: 'The position property (static, relative, absolute, fixed, sticky) alters element placement in the document flow, controlled by top/right/bottom/left offsets and z-index depth.',
            syntax: `.parent { position: relative; }
.child {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 10;
}`,
            codeSnippet: `.sticky-header {
    position: sticky;
    top: 0;
    z-index: 100;
    background-color: #0f172a;
}

.badge-overlay {
    position: absolute;
    top: -5px;
    right: -5px;
}`,
            realLifeScenario: 'Fixed headers and sticky navigation bars stay pinned in the viewport while page body content scrolls smoothly beneath them.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">CSS positioning defines element placement: <code className="font-mono text-blue-600">static</code> is normal flow, <code className="font-mono text-blue-600">relative</code> offsets relative to itself, <code className="font-mono text-blue-600">absolute</code> anchors to nearest positioned parent, <code className="font-mono text-blue-600">fixed</code> locks to viewport, and <code className="font-mono text-blue-600">sticky</code> toggles fixed scrolling. <code className="font-mono text-blue-600">z-index</code> controls stacking depth.</p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-purple-800 dark:text-purple-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of positioning like placing sticky notes on a board. Relative positioning shifts a note slightly from its spot, absolute positioning pins a note to a specific corner of a frame, and fixed positioning sticks a note to your reading glasses frame so it stays in sight wherever you move.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-blue-600" />3. Positioning Types &amp; Stacking Context (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph TD
    A[CSS Position Modes] --> B[static Normal Flow]
    A --> C[relative Offsets Self]
    A --> D[absolute Anchors to Positioned Parent]
    A --> E[fixed Locks to Viewport]
    A --> F[sticky Toggles Fixed on Scroll]
    D & E & F --> G["z-index Stacking Depth Controls Overlap Layer"]`}
                            caption="Figure 6.1: CSS Positioning Types and z-index Stacking Context."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This diagram illustrates positioning modes and how z-index controls visual layer overlaps.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-blue-600" />4. Sample Code</h4>
                        <CodeBlock code={`.sticky-header {
    position: sticky;
    top: 0;
    z-index: 100;
    background-color: #0f172a;
}

.badge-overlay {
    position: absolute;
    top: -5px;
    right: -5px;
}`} lang="css" colorClass="blue" filename="position.css" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Sticky navigation headers, notification badge overlays, and fixed chatbot widgets rely on CSS positioning.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Enables precise pixel-level placement of UI badges and popover dialogs.</li>
                            <li><code className="text-blue-400">sticky</code> positioning keeps headers visible during long page scrolls.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li><code className="text-blue-400">absolute</code> elements are removed from normal flow, potentially causing parent collapse if heights aren't set.</li>
                            <li>Conflicting <code className="text-blue-400">z-index</code> values across complex component hierarchies lead to z-index wars.</li>
                        </ul>
                    </div>
                </div>
            )
        },

        // ==================== INTERMEDIATE TIER ====================
        {
            id: 'css-flexbox',
            title: '7. [Intermediate] Flexbox Layout Engine Deep Dive',
            definition: 'Flexbox (Flexible Box Layout) provides a 1-dimensional alignment engine to distribute space along a primary main-axis and cross-axis.',
            syntax: `.flex-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between; /* Main axis */
    align-items: center;        /* Cross axis */
}`,
            codeSnippet: `.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
}

.flex-item {
    flex: 1 1 200px;
}`,
            realLifeScenario: 'Modern navigation bars, centered card containers, and dynamic toolbar layouts use Flexbox for automated responsive alignment.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Flexbox is a 1-dimensional CSS layout model designed to distribute space along a main axis (<code className="font-mono text-blue-600">justify-content</code>) and align items along a cross axis (<code className="font-mono text-blue-600">align-items</code>), automatically shrinking or expanding flex items to fit available space.</p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-purple-800 dark:text-purple-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of Flexbox like an expandable clothes rack in a store closet. As you add or remove clothing hangers, the rack dynamically expands or contracts to space items evenly across the rod.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-blue-600" />3. Flexbox Main Axis vs Cross Axis (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph LR
    A[Flex Container display: flex] --> B["Main Axis (justify-content: space-between)"]
    A --> C["Cross Axis (align-items: center)"]
    B --> D[Item 1]
    B --> E[Item 2]
    B --> F[Item 3]`}
                            caption="Figure 7.1: Flexbox 1D Axis Alignment Engine showing Main and Cross axis distribution."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This diagram demonstrates how Flexbox distributes item spacing along the main and cross axes.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-blue-600" />4. Sample Code</h4>
                        <CodeBlock code={`.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
}

.flex-item {
    flex: 1 1 200px;
}`} lang="css" colorClass="blue" filename="flexbox.css" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Aligning header navigation links, centering modal content boxes, and building 1D row toolbars.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Eliminates legacy CSS float clearing hacks for horizontal layout alignment.</li>
                            <li>Effortlessly centers elements vertically and horizontally with <code className="text-blue-400">margin: auto</code> or flex alignment.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Designed for 1D row or column layouts; building complex 2D grids requires CSS Grid.</li>
                            <li>Flex items can accidentally overflow containers if <code className="text-blue-400">flex-shrink</code> is set to 0.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'css-grid',
            title: '8. [Intermediate] CSS Grid 2D Blueprint System',
            definition: 'CSS Grid is a powerful 2-dimensional layout engine capable of arranging elements simultaneously across columns and rows.',
            syntax: `.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
}`,
            codeSnippet: `.dashboard-grid {
    display: grid;
    grid-template-columns: 240px 1fr;
    grid-template-rows: auto 1fr;
    gap: 1rem;
}`,
            realLifeScenario: 'Complex dashboard views and photo galleries use CSS Grid with repeat(auto-fit, minmax(300px, 1fr)) to achieve responsive layouts without media queries.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">CSS Grid is a 2-dimensional layout system that arranges child elements into rows and columns simultaneously, using fractional units (<code className="font-mono text-blue-600">fr</code>), template areas, and gap properties.</p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-purple-800 dark:text-purple-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of CSS Grid like a printed chessboard or architectural blueprint. You define explicit rows and columns first, then place pieces into designated grid cells.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-blue-600" />3. CSS Grid 2D Architecture (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph TD
    A[Grid Container display: grid] --> B[grid-template-columns: 240px 1fr]
    A --> C[grid-template-rows: auto 1fr]
    B & C --> D[Grid Cell 1: Sidebar]
    B & C --> E[Grid Cell 2: Main Feed]`}
                            caption="Figure 8.1: CSS Grid 2-Dimensional Layout Architecture."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This diagram shows how CSS Grid coordinates simultaneous row and column cell placements.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-blue-600" />4. Sample Code</h4>
                        <CodeBlock code={`.dashboard-grid {
    display: grid;
    grid-template-columns: 240px 1fr;
    grid-template-rows: auto 1fr;
    gap: 1rem;
}`} lang="css" colorClass="blue" filename="grid.css" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">E-commerce product card grids, magazine page layouts, and web application dashboard views.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li><code className="text-blue-400">repeat(auto-fit, minmax(...))</code> creates responsive card grids without requiring media queries.</li>
                            <li>Precise 2D alignment across columns and rows simultaneously.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Overkill for simple 1D single-row navigation layouts (prefer Flexbox).</li>
                            <li>Legacy browser support (IE 11) requires vendor-prefixed grid properties.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'css-responsive-media-queries',
            title: '9. [Intermediate] Responsive Design & Media Queries',
            definition: 'Responsive Web Design uses fluid grids, flexible images, and @media CSS queries to adapt UI layouts across smartphones, tablets, laptops, and 4K displays.',
            syntax: `/* Mobile First Default */
.card { width: 100%; }
/* Tablet Breakpoint */
@media (min-width: 768px) {
    .card { width: 50%; }
}`,
            codeSnippet: `.container {
    width: 100%;
    padding: 1rem;
}

@media (min-width: 768px) {
    .container {
        max-width: 720px;
        margin: 0 auto;
    }
}`,
            realLifeScenario: 'Following a mobile-first responsive workflow ensures CSS bundles load minimal default styles for smartphones, enhancing mobile PageSpeed performance.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Responsive Web Design uses fluid layouts and <code className="font-mono text-blue-600">@media</code> queries to detect device screen width (<code className="font-mono text-blue-600">min-width</code>) and conditionally apply CSS styles for mobile, tablet, and desktop viewports.</p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-purple-800 dark:text-purple-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of responsive design like water taking the shape of whatever glass or bottle container it is poured into — whether a small espresso cup (smartphone) or a pitcher (4K desktop monitor).</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-blue-600" />3. Mobile-First Media Query Breakpoints (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`flowchart TD
    A[Browser Evaluates Viewport Width] --> B{Width < 768px?}
    B -- Yes --> C[Apply Mobile Default Styles 1 Column]
    B -- No --> D{Width >= 768px & < 1024px?}
    D -- Yes --> E[Apply Tablet Media Query 2 Columns]
    D -- No --> F[Apply Desktop Media Query 4 Columns]`}
                            caption="Figure 9.1: Mobile-First Responsive Breakpoint Decision Tree."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This flowchart shows how mobile-first media queries adapt layout column counts based on screen width.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-blue-600" />4. Sample Code</h4>
                        <CodeBlock code={`.container {
    width: 100%;
    padding: 1rem;
}

@media (min-width: 768px) {
    .container {
        max-width: 720px;
        margin: 0 auto;
    }
}`} lang="css" colorClass="blue" filename="responsive.css" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Adapting web app navigation bars into collapsible hamburger menus on mobile screen viewports.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Delivers optimized user experiences across smartphones, tablets, and desktops.</li>
                            <li>Mobile-first CSS architecture speeds up mobile browser page loading performance.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Managing arbitrary breakpoint values creates unmaintainable media query sprawl.</li>
                            <li>Viewport media queries don't know the size of individual component containers (see Container Queries).</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'css-pseudo-classes-elements',
            title: '10. [Intermediate] Pseudo-Classes & Pseudo-Elements',
            definition: 'Pseudo-classes (:hover, :focus, :nth-child) style elements based on user state, while pseudo-elements (::before, ::after) inject virtual content without modifying HTML markup.',
            syntax: `button:hover { background: #2563eb; }
button:focus-visible { outline: 2px solid #60a5fa; }
.card::after { content: ''; display: block; }`,
            codeSnippet: `.btn-primary {
    background-color: #2563eb;
    transition: background-color 0.2s;
}

.btn-primary:hover {
    background-color: #1d4ed8;
}

.badge::before {
    content: '★ ';
    color: #f59e0b;
}`,
            realLifeScenario: 'Adding :focus-visible outlines ensures keyboard users can visually track interactive focus indicators across web forms.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Pseudo-classes (<code className="font-mono text-blue-600">:hover</code>, <code className="font-mono text-blue-600">:focus-visible</code>, <code className="font-mono text-blue-600">:nth-child()</code>) target elements based on user state or document position. Pseudo-elements (<code className="font-mono text-blue-600">::before</code>, <code className="font-mono text-blue-600">::after</code>) inject decorative virtual DOM elements without extra HTML markup.</p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-purple-800 dark:text-purple-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of pseudo-classes like a door changing color when someone pushes the handle (state reaction), while pseudo-elements are like attaching a temporary welcome wreath onto the door frame (decorative insertion).</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-blue-600" />3. Pseudo-Classes vs Pseudo-Elements (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph LR
    A[CSS Selector Extensions] --> B["Pseudo-Classes :hover, :focus"]
    A --> C["Pseudo-Elements ::before, ::after"]
    B --> B1[Reacts to User Interaction State]
    C --> C1[Injects Virtual Decorative Content]`}
                            caption="Figure 10.1: Distinguishing Pseudo-Classes from Pseudo-Elements."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This diagram compares interactive state pseudo-classes with virtual element pseudo-elements.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-blue-600" />4. Sample Code</h4>
                        <CodeBlock code={`.btn-primary {
    background-color: #2563eb;
    transition: background-color 0.2s;
}

.btn-primary:hover {
    background-color: #1d4ed8;
}

.badge::before {
    content: '★ ';
    color: #f59e0b;
}`} lang="css" colorClass="blue" filename="pseudo.css" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Styling interactive hover effects on buttons and adding decorative icon accents via <code className="text-blue-600 font-mono">::after</code> pseudo-elements.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li><code className="text-blue-400">::before</code> and <code className="text-blue-400">::after</code> reduce HTML clutter by keeping decorative elements in CSS.</li>
                            <li><code className="text-blue-400">:focus-visible</code> provides accessibility focus rings without showing focus lines on mouse clicks.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Pseudo-element content is not accessible to screen readers if it contains critical textual information.</li>
                            <li>Pseudo-elements require an explicit <code className="text-blue-400">content: ''</code> rule or they will fail to render.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'css-transitions',
            title: '11. [Intermediate] CSS Transitions & Timing Functions',
            definition: 'CSS transitions enable smooth parameter state changes (color, opacity, transform) over a specified duration using timing functions (ease, linear, cubic-bezier).',
            syntax: `.card {
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}`,
            codeSnippet: `.card-interactive {
    background-color: #ffffff;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card-interactive:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}`,
            realLifeScenario: 'Smooth hover transitions make web apps feel responsive and polished without imposing heavy JavaScript animation libraries.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">CSS Transitions animate property changes smoothly between an initial state and a target state over a declared duration, using timing functions (<code className="font-mono text-blue-600">ease</code>, <code className="font-mono text-blue-600">linear</code>, <code className="font-mono text-blue-600">cubic-bezier</code>) to control velocity curves.</p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-purple-800 dark:text-purple-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of a transition like a car accelerating smoothly from a red light. Instead of instantly snapping from 0 to 60 mph, the car smoothly accelerates over 3 seconds (duration).</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-blue-600" />3. Transition State Timeline (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph LR
    A[Initial State: translateY 0] -->|User Trigger :hover| B[Transition Engine 0.2s]
    B -->|Timing Curve: ease-in-out| C[Target State: translateY -4px]`}
                            caption="Figure 11.1: State Transition Timeline over time with velocity curve."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This diagram shows how transitions interpolate intermediate values between two property states.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-blue-600" />4. Sample Code</h4>
                        <CodeBlock code={`.card-interactive {
    background-color: #ffffff;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card-interactive:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}`} lang="css" colorClass="blue" filename="transition.css" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Hover animations on buttons, card elevation lifts, and color fades on navigation link states.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Delivers 60fps hardware-accelerated animations for <code className="text-blue-400">transform</code> and <code className="text-blue-400">opacity</code>.</li>
                            <li>Lightweight implementation without external JavaScript libraries.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Transitions require a trigger event (:hover/:focus) and cannot loop continuously.</li>
                            <li>Transitioning layout properties like <code className="text-blue-400">width</code> or <code className="text-blue-400">height</code> causes expensive browser reflows.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'css-transforms',
            title: '12. [Intermediate] 2D & 3D CSS Transforms',
            definition: 'The transform property modifies an element\'s spatial position (translate), orientation (rotate), scale, and skew in 2D or 3D space.',
            syntax: `.box {
    transform: translate(-50%, -50%) rotate(45deg) scale(1.1);
    transform: translate3d(0, -10px, 0); /* GPU Accelerated */
}`,
            codeSnippet: `.modal-center {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.icon-spin:hover {
    transform: rotate(180deg) scale(1.1);
}`,
            realLifeScenario: 'Using transform: translate(-50%, -50%) is the classic technique to perfectly center fixed or absolute modal dialogs in the viewport.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">The CSS <code className="font-mono text-blue-600">transform</code> property visually manipulates elements in 2D or 3D space using functions like <code className="font-mono text-blue-600">translate()</code>, <code className="font-mono text-blue-600">rotate()</code>, <code className="font-mono text-blue-600">scale()</code>, and <code className="font-mono text-blue-600">skew()</code> without affecting surrounding document layout flow.</p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-purple-800 dark:text-purple-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of transforms like looking at a magnifying glass over a photo. Scaling or tilting the photo through the lens doesn't change the size of the desk it sits on.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-blue-600" />3. CSS Transform Functions (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph TD
    A[CSS transform Property] --> B["translate(x, y) - Spatial Shift"]
    A --> C["scale(factor) - Resize Element"]
    A --> D["rotate(deg) - Angular Rotation"]
    A --> E["translate3d(x, y, z) - GPU Compositing"]`}
                            caption="Figure 12.1: CSS Transform Function Matrix."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This diagram breaks down core 2D and 3D transform functions.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-blue-600" />4. Sample Code</h4>
                        <CodeBlock code={`.modal-center {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.icon-spin:hover {
    transform: rotate(180deg) scale(1.1);
}`} lang="css" colorClass="blue" filename="transform.css" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Centering modal dialogs perfectly and animating off-canvas mobile navigation drawers using <code className="text-blue-600 font-mono">translateX()</code>.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Transforms are offloaded to GPU composite layers for 60fps performance without reflows.</li>
                            <li><code className="text-blue-400">translate(-50%, -50%)</code> provides dynamic percentage centering based on element width.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Transformed elements create a new containing block for absolutely positioned descendants.</li>
                            <li>Overusing 3D transforms on mobile browsers can consume excessive GPU RAM memory.</li>
                        </ul>
                    </div>
                </div>
            )
        },

        // ==================== ADVANCED TIER ====================
        {
            id: 'css-animations-keyframes',
            title: '13. [Advanced] Custom CSS Keyframe Animations',
            definition: 'CSS @keyframes define complex multi-stage animation sequences with keyframe percentages (0% to 100%), controlled by animation properties.',
            syntax: `@keyframes pulse {
    0% { opacity: 0.5; transform: scale(0.98); }
    50% { opacity: 1; transform: scale(1.02); }
    100% { opacity: 0.5; transform: scale(0.98); }
}
.loader { animation: pulse 2s infinite ease-in-out; }`,
            codeSnippet: `@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

.spinner {
    width: 24px;
    height: 24px;
    border: 3px solid #e2e8f0;
    border-top-color: #2563eb;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
}`,
            realLifeScenario: 'Skeleton loaders and circular spinner animations communicate asynchronous API loading states to web users.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">CSS Keyframe Animations (<code className="font-mono text-blue-600">@keyframes</code>) define multi-step animation sequences along keyframe progress percentages (<code className="font-mono text-blue-600">0%</code> to <code className="font-mono text-blue-600">100%</code>), running automatically or looping infinitely.</p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-purple-800 dark:text-purple-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of keyframes like flipbook drawings. Each keyframe percentage represents one key drawing in the flipbook sequence that creates the illusion of continuous movement when flipped quickly.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-blue-600" />3. Keyframe Sequence Progress (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph LR
    A["@keyframes spin"] --> B["0% rotate(0deg)"]
    B --> C["50% rotate(180deg)"]
    C --> D["100% rotate(360deg)"]
    D -->|animation-iteration-count: infinite| B`}
                            caption="Figure 13.1: Multi-stage Keyframe Animation Progress Pipeline."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This diagram illustrates the step-by-step keyframe execution pipeline.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-blue-600" />4. Sample Code</h4>
                        <CodeBlock code={`@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

.spinner {
    width: 24px;
    height: 24px;
    border: 3px solid #e2e8f0;
    border-top-color: #2563eb;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
}`} lang="css" colorClass="blue" filename="animation.css" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Asynchronous API spinner loaders, skeleton placeholder shimmer bars, and notification pulse indicators.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Supports complex multi-stage animation sequences without JavaScript dependencies.</li>
                            <li><code className="text-blue-400">animation-fill-mode: forwards</code> retains final animation states cleanly.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Infinite keyframe animations can drain mobile device battery life if left unmanaged.</li>
                            <li>Animating layout properties (<code className="text-blue-400">margin</code>, <code className="text-blue-400">width</code>) causes severe frame drops.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'css-variables-dark-mode',
            title: '14. [Advanced] CSS Custom Properties & Dark Mode',
            definition: 'CSS Custom Properties (Variables) store reusable values scoped to elements or :root, allowing dynamic runtime updates via JavaScript and theme switching.',
            syntax: `:root {
    --bg: #ffffff;
    --text: #0f172a;
}
[data-theme="dark"] {
    --bg: #0f172a;
    --text: #ffffff;
}
body { background: var(--bg); color: var(--text); }`,
            codeSnippet: `:root {
    --bg-primary: #ffffff;
    --text-primary: #0f172a;
}

[data-theme="dark"] {
    --bg-primary: #0f172a;
    --text-primary: #f8fafc;
}

.card {
    background-color: var(--bg-primary);
    color: var(--text-primary);
}`,
            realLifeScenario: 'Design systems at Stripe, GitHub, and Twitter use CSS Custom Properties to switch between Light, Dark, and High-Contrast modes instantly.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">CSS Custom Properties (Variables) declared with <code className="font-mono text-blue-600">--var-name</code> syntax store reusable design values in the DOM, enabling dynamic runtime theme toggling (Light/Dark mode) via CSS selector cascades or JavaScript.</p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-purple-800 dark:text-purple-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of CSS variables like light switches in a house. Toggling the main master switch instantly changes the light bulbs across every room without needing to replace individual lamps.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-blue-600" />3. Dynamic Theme Variable Switch (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph TD
    A[CSS Custom Properties] --> B[Default :root Light Theme]
    A --> C["[data-theme='dark'] Dark Theme"]
    B --> D["--bg-primary: #ffffff"]
    C --> E["--bg-primary: #0f172a"]
    D & E --> F["UI Components: background: var(--bg-primary)"]`}
                            caption="Figure 14.1: Dynamic Theme Variable Switching Architecture."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This diagram demonstrates how changing root attribute themes updates UI component variables instantly.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-blue-600" />4. Sample Code</h4>
                        <CodeBlock code={`:root {
    --bg-primary: #ffffff;
    --text-primary: #0f172a;
}

[data-theme="dark"] {
    --bg-primary: #0f172a;
    --text-primary: #f8fafc;
}

.card {
    background-color: var(--bg-primary);
    color: var(--text-primary);
}`} lang="css" colorClass="blue" filename="variables.css" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Instant Light/Dark theme switching on platforms like GitHub, Twitter, and documentation portals.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Native DOM variables are dynamic and update instantly when JavaScript modifies properties.</li>
                            <li>Dramatically reduces duplicate CSS code when supporting dark mode.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Legacy browsers (IE 11) do not support CSS custom properties without compilation tools.</li>
                            <li>Unbound variable fallbacks (<code className="text-blue-400">var(--missing, #000)</code>) can hide missing token bugs.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'css-cascade-layers',
            title: '15. [Advanced] Specificity & @layer Cascade Layers',
            definition: 'The @layer rule allows developers to explicitly control cascade precedence order regardless of selector specificity, isolating third-party CSS from overrides.',
            syntax: `@layer reset, base, components, utilities;
@layer components { .btn { background: blue; } }
@layer utilities { .bg-red { background: red; } }`,
            codeSnippet: `@layer reset, framework, components;

@layer framework {
    .btn { background-color: #6c757d; }
}

@layer components {
    /* Always overrides framework layer regardless of specificity */
    .btn { background-color: #2563eb; }
}`,
            realLifeScenario: 'Enterprise web apps use CSS Cascade Layers (@layer) to import framework styles (Tailwind/Bootstrap) while guaranteeing custom component style overrides.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">CSS Cascade Layers (<code className="font-mono text-blue-600">@layer</code>) establish explicit priority ordering across style blocks, ensuring declarations in higher-priority layers always override lower-priority layers regardless of selector specificity math.</p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-purple-800 dark:text-purple-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of cascade layers like transparent plastic sheets stacked on top of each other. Whichever sheet is placed on top (later layer declaration) covers up drawings on lower sheets, no matter how thick the marker lines on lower sheets were.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-blue-600" />3. @layer Precedence Hierarchy (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph TD
    A["@layer Ordering Declaration"] --> B["1. @layer reset (Lowest Priority)"]
    A --> C["2. @layer framework (Bootstrap/Tailwind)"]
    A --> D["3. @layer components (Custom UI)"]
    A --> E["4. @layer utilities (Highest Override Priority)"]
    E -->|Overrides All Lower Layers| F[Render Target Element]`}
                            caption="Figure 15.1: CSS Cascade Layer Priority Hierarchy."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This diagram shows how layer declaration order overrides traditional selector specificity.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-blue-600" />4. Sample Code</h4>
                        <CodeBlock code={`@layer reset, framework, components;

@layer framework {
    .btn { background-color: #6c757d; }
}

@layer components {
    /* Always overrides framework layer regardless of specificity */
    .btn { background-color: #2563eb; }
}`} lang="css" colorClass="blue" filename="layers.css" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Importing third-party UI libraries (Bootstrap, Tailwind) while guaranteeing custom component overrides without using <code className="text-blue-600 font-mono">!important</code> hacks.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Eliminates specificity wars and <code className="text-blue-400">!important</code> flags in large enterprise codebases.</li>
                            <li>Enables clean isolation between CSS resets, third-party libraries, and custom code.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Unlayered styles take precedence over layered styles, which can surprise developers.</li>
                            <li>Requires browser engine support (Chrome 99+, Safari 15.4+).</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'css-bem-methodology',
            title: '16. [Advanced] BEM Methodology (Block__Element--Modifier)',
            definition: 'BEM (Block, Element, Modifier) is a modular CSS class-naming convention that prevents specificity conflicts and makes stylesheets maintainable at scale.',
            syntax: `.block { }                 /* Standalone Block */
.block__element { }        /* Dependent Child Element */
.block--modifier { }       /* Variant State Modifier */`,
            codeSnippet: `/* Card Component Block */
.card { background: #fff; }

/* Child Element */
.card__title { font-size: 1.25rem; }

/* Modifier Variant */
.card--featured { border: 2px solid #2563eb; }`,
            realLifeScenario: 'Large engineering teams at Airbnb and Yandex enforce BEM naming to prevent style leakage across micro-frontend UI components.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">BEM (Block, Element, Modifier) is a strict CSS naming convention (<code className="font-mono text-blue-600">.block__element--modifier</code>) that organizes stylesheets into independent UI components, keeping specificity uniformly low.</p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-purple-800 dark:text-purple-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of BEM like naming car parts. The Block is the <code className="font-mono">Car</code>, the Element is <code className="font-mono">Car__Door</code>, and the Modifier is <code className="font-mono">Car__Door--Red</code>. The naming clearly shows how parts fit together.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-blue-600" />3. BEM Class Naming Architecture (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph LR
    A[BEM Component Structure] --> B[Block: .card]
    B --> C["Element: .card__title"]
    B --> D["Modifier: .card--featured"]`}
                            caption="Figure 16.1: BEM Class Naming Architecture."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This diagram breaks down BEM Block, Element, and Modifier class components.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-blue-600" />4. Sample Code</h4>
                        <CodeBlock code={`/* Card Component Block */
.card { background: #fff; }

/* Child Element */
.card__title { font-size: 1.25rem; }

/* Modifier Variant */
.card--featured { border: 2px solid #2563eb; }`} lang="css" colorClass="blue" filename="bem.css" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Large frontend development teams enforce BEM class naming to prevent accidental CSS style leakage across shared components.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Keeps specificity uniformly flat (single class selectors), preventing override bugs.</li>
                            <li>Self-documenting class names clarify parent-child UI component relationships.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Verbose class names make HTML markup look cluttered (<code className="text-blue-400">class="nav__item-link--active"</code>).</li>
                            <li>Deeply nested elements can lead to awkward long names if overused.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'css-sass-scss',
            title: '17. [Advanced] Sass / SCSS Preprocessing Architecture',
            definition: 'Sass (Syntactically Awesome Style Sheets) enhances CSS with nested rules, mixins, functions, partials (_partial.scss), and modular @use imports.',
            syntax: `@mixin flex-center {
    display: flex;
    justify-content: center;
}
.card {
    @include flex-center;
    &__title { color: blue; }
}`,
            codeSnippet: `$brand-color: #2563eb;

@mixin button-variant($bg) {
    background-color: $bg;
    color: #ffffff;
}

.btn-primary {
    @include button-variant($brand-color);
}`,
            realLifeScenario: 'Bootstrap 5 and custom design systems are authored in SCSS using mixins and functions to compile optimized CSS bundles.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Sass/SCSS is a CSS preprocessor that extends standard CSS with variables (<code className="font-mono text-blue-600">$color</code>), nested rules, reusable <code className="font-mono text-blue-600">@mixin</code> blocks, and modular file imports (<code className="font-mono text-blue-600">@use</code>), compiling into standard browser-ready CSS.</p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-purple-800 dark:text-purple-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of Sass like a high-end food processor in a kitchen. You feed raw uncompiled SCSS ingredients (mixins, variables) into the processor, which chops and blends them into a smooth, ready-to-serve CSS dish for the browser.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-blue-600" />3. Sass Preprocessing Build Pipeline (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph LR
    A["SCSS Source (_buttons.scss)"] --> B[Sass Compiler Engine]
    B -->|Resolves Mixins & Nesting| C["Compiled Production CSS (styles.css)"]
    C --> D[Browser Engine Render]`}
                            caption="Figure 17.1: SCSS Preprocessor Build Pipeline."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This diagram demonstrates how Sass preprocessors compile SCSS source code into standard CSS files.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-blue-600" />4. Sample Code</h4>
                        <CodeBlock code={`$brand-color: #2563eb;

@mixin button-variant($bg) {
    background-color: $bg;
    color: #ffffff;
}

.btn-primary {
    @include button-variant($brand-color);
}`} lang="scss" colorClass="blue" filename="styles.scss" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Authoring large enterprise UI frameworks (Bootstrap 5) using SCSS mixins and functions.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li><code className="text-blue-400">@mixin</code> blocks eliminate repetitive CSS property declarations.</li>
                            <li>Nested selectors make component stylesheet hierarchies readable and intuitive.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Requires a build step (Sass compiler) to generate CSS output files.</li>
                            <li>Deeply nested SCSS selectors generate heavy, overly specific CSS output rules.</li>
                        </ul>
                    </div>
                </div>
            )
        },

        // ==================== PROFESSIONAL TIER ====================
        {
            id: 'css-architecture-scale',
            title: '18. [Professional] Scalable CSS Architecture (ITCSS & SMACSS)',
            definition: 'Scalable CSS architecture methodologies (ITCSS - Inverted Triangle CSS, SMACSS) organize stylesheets into layered files based on specificity depth.',
            syntax: `/* ITCSS Inverted Triangle Layers */
@use 'settings';
@use 'generic';
@use 'elements';
@use 'components';
@use 'utilities';`,
            codeSnippet: `/* main.scss - ITCSS Organization */
@use 'settings/variables';
@use 'generic/reset';
@use 'components/buttons';
@use 'utilities/helpers';`,
            realLifeScenario: 'Enterprise applications with 500+ stylesheets use ITCSS architecture to eliminate style conflicts and guarantee predictable cascade order.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">ITCSS (Inverted Triangle CSS) is a scalable architecture methodology that organizes stylesheets into ordered layers (Settings, Tools, Generic, Elements, Objects, Components, Utilities) based on increasing specificity and narrowing scope.</p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-purple-800 dark:text-purple-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of ITCSS like an inverted funnel. Global settings and resets pour in at the wide top, while highly specific component utility overrides filter out at the narrow bottom tip.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-blue-600" />3. ITCSS Inverted Triangle Layers (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph TD
    A[ITCSS Architecture Inverted Funnel] --> B[1. Settings & Variables]
    B --> C[2. Tools & Mixins]
    C --> D[3. Generic Resets]
    D --> E[4. Elements HTML Tags]
    E --> F[5. Components UI Cards]
    F --> G[6. Utilities Overrides]`}
                            caption="Figure 18.1: ITCSS (Inverted Triangle CSS) Layer Organization."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This diagram shows how ITCSS orders stylesheets from low specificity resets down to high specificity utilities.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-blue-600" />4. Sample Code</h4>
                        <CodeBlock code={`/* main.scss - ITCSS Organization */
@use 'settings/variables';
@use 'generic/reset';
@use 'components/buttons';
@use 'utilities/helpers';`} lang="scss" colorClass="blue" filename="itcss.scss" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Enterprise software systems with hundreds of SCSS files use ITCSS to ensure predictable stylesheet inheritance.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Prevents specificity leaks in large codebases with 100+ stylesheets.</li>
                            <li>Keeps file structures organized and predictable for new developers joining teams.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Requires strict initial folder setup discipline across engineering teams.</li>
                            <li>Small static websites don't benefit enough to justify the multi-file setup overhead.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'css-container-queries',
            title: '19. [Professional] Container Queries (@container & container-type)',
            definition: 'Container Queries (@container) allow component layouts to adapt responsively based on their parent container\'s size rather than the global viewport width.',
            syntax: `.wrapper {
    container-type: inline-size;
    container-name: card-container;
}
@container card-container (min-width: 400px) {
    .card { flex-direction: row; }
}`,
            codeSnippet: `.card-wrapper {
    container-type: inline-size;
}

.card {
    display: flex;
    flex-direction: column;
}

@container (min-width: 400px) {
    .card {
        flex-direction: row;
    }
}`,
            realLifeScenario: 'Component libraries embed widgets into narrow sidebars or wide main feeds, automatically adjusting layouts without viewport media queries.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">CSS Container Queries (<code className="font-mono text-blue-600">@container</code>) enable child components to adapt their internal layout based on the width of their immediate parent container rather than the overall browser viewport width.</p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-purple-800 dark:text-purple-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of container queries like a suitcase. A shirt folds differently depending on whether it is packed into a small carry-on bag (sidebar) or a large trunk (main page feed), regardless of how large the airplane cargo hold is.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-blue-600" />3. Container Query Layout Adaptation (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`flowchart TD
    A[Component Evaluates Parent Container Width] --> B{Parent Width >= 400px?}
    B -- Yes --> C[Render Horizontal Card Row Layout]
    B -- No --> D[Render Vertical Card Stack Layout]`}
                            caption="Figure 19.1: Container Query Parent-Width Based Layout Decision."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This flowchart shows how container queries evaluate parent element bounds instead of viewport width.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-blue-600" />4. Sample Code</h4>
                        <CodeBlock code={`.card-wrapper {
    container-type: inline-size;
}

.card {
    display: flex;
    flex-direction: column;
}

@container (min-width: 400px) {
    .card {
        flex-direction: row;
    }
}`} lang="css" colorClass="blue" filename="container-queries.css" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Building reusable UI widgets that adapt seamlessly whether placed in a narrow 300px sidebar or a wide 1200px main content feed.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Enables true component-driven responsive design without relying on global viewport queries.</li>
                            <li>Makes UI widgets reusable across any layout region of a web application.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Requires explicitly setting <code className="text-blue-400">container-type: inline-size</code> on parent containers.</li>
                            <li>Legacy browser fallback requires polyfill scripts.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'css-performance',
            title: '20. [Professional] Rendering Performance & GPU Acceleration',
            definition: 'Optimize rendering performance by avoiding browser Layout Thrashing (reflows) and offloading transforms to GPU hardware threads using translate3d and will-change.',
            syntax: `.layer {
    will-change: transform;
    transform: translate3d(0,0,0); /* Triggers GPU Composite */
}`,
            codeSnippet: `.gpu-layer {
    will-change: transform, opacity;
    transform: translate3d(0, 0, 0);
}

.good-anim {
    transform: translateY(10px); /* Composite only - 60fps */
}`,
            realLifeScenario: 'Animating transform and opacity avoids Browser Layout Reflow and Repaint cycles, maintaining a smooth 60fps rendering speed.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">CSS Performance optimization avoids layout thrashing (Reflow &amp; Repaint cycles) by animating GPU composite-only properties (<code className="font-mono text-blue-600">transform</code>, <code className="font-mono text-blue-600">opacity</code>) using hints like <code className="font-mono text-blue-600">will-change</code>.</p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-purple-800 dark:text-purple-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of GPU compositing like moving a transparent plastic overlay slide across a paper map. Sliding the plastic sheet doesn't force you to redraw the map underneath.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-blue-600" />3. Browser Rendering Pipeline (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph TD
    A[CSS Change Triggered] --> B{Property Type?}
    B -- width / top --> C[1. Layout Reflow - Slow CPU]
    C --> D[2. Paint Repaint]
    D --> E[3. Composite GPU]
    B -- transform / opacity --> E
    E --> F[60fps Smooth Animation]`}
                            caption="Figure 20.1: Browser Rendering Pipeline: Reflow vs Repaint vs Composite GPU Acceleration."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This diagram compares slow CPU layout reflows with fast GPU composite layer animations.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-blue-600" />4. Sample Code</h4>
                        <CodeBlock code={`.gpu-layer {
    will-change: transform, opacity;
    transform: translate3d(0, 0, 0);
}

.good-anim {
    transform: translateY(10px); /* Composite only - 60fps */
}`} lang="css" colorClass="blue" filename="performance.css" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Optimizing smooth 60fps mobile drawer animations and scroll-linked animations without dropping frames.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Guarantees 60fps hardware-accelerated animations.</li>
                            <li>Bypasses expensive main-thread CPU recalculation bottleneck.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Overusing <code className="text-blue-400">will-change</code> creates too many GPU layer buffers, wasting graphics memory.</li>
                            <li>Animating layout properties (<code className="text-blue-400">margin</code>, <code className="text-blue-400">height</code>) cannot be offloaded to GPU composite threads.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'css-in-js-utility-first',
            title: '21. [Professional] CSS-in-JS & Utility-First Architectures',
            definition: 'Modern component styling paradigms include CSS-in-JS (Styled-components, Emotion) for scoped component styles and Utility-First frameworks (Tailwind CSS).',
            syntax: `/* Utility-First Tailwind CSS */
<div class="flex items-center p-4 bg-slate-900 text-white rounded-xl">`,
            codeSnippet: `/* Tailwind Utility Composition */
.btn-composed {
    @apply px-4 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700;
}`,
            realLifeScenario: 'Frameworks like Next.js and React utilize Tailwind CSS or CSS Modules to scope CSS styles per component, eliminating global name collisions.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Utility-First CSS (Tailwind CSS) builds component styles using low-level utility classes directly in markup, while CSS-in-JS embeds component styles inside JavaScript files with scoped class names.</p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-purple-800 dark:text-purple-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of Utility-First CSS like building a house with pre-fabricated Lego blocks (snapping small single-purpose utility blocks together) rather than custom mixing concrete for every single wall.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-blue-600" />3. Modern Styling Architectures Comparison (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph LR
    A[Modern Styling Paradigms] --> B[Utility-First Tailwind]
    A --> C[CSS-in-JS Styled-Components]
    B --> B1[Reusable Atomic Classes - Small Bundle Size]
    C --> C1[Scoped Dynamic JS Props - Component Isolation]`}
                            caption="Figure 21.1: Utility-First vs CSS-in-JS Paradigm Comparison."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This diagram compares atomic utility CSS with scoped CSS-in-JS component architectures.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-blue-600" />4. Sample Code</h4>
                        <CodeBlock code={`/* Tailwind Utility Composition */
.btn-composed {
    @apply px-4 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700;
}`} lang="css" colorClass="blue" filename="utility.css" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Modern React, Next.js, and Vue enterprise applications use Tailwind CSS for rapid UI development.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Drastically reduces CSS file size because atomic classes are shared across components.</li>
                            <li>Eliminates global selector collisions and unused CSS bloat.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>HTML markup looks cluttered with many utility class strings (<code className="text-blue-400">class="flex p-4..."</code>).</li>
                            <li>CSS-in-JS adds runtime JavaScript evaluation overhead during component re-renders.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'css-cross-browser-fallbacks',
            title: '22. [Professional] Cross-Browser Fallbacks & @supports Queries',
            definition: 'Feature queries (@supports) test browser support for cutting-edge CSS features (Grid, Subgrid, Backdrop-filter) before applying enhancements.',
            syntax: `@supports (backdrop-filter: blur(10px)) {
    .glass { backdrop-filter: blur(10px); }
}`,
            codeSnippet: `.header {
    background-color: #0f172a; /* Baseline Fallback */
}

@supports (backdrop-filter: blur(10px)) {
    .header {
        background-color: rgba(15, 23, 42, 0.8);
        backdrop-filter: blur(10px);
    }
}`,
            realLifeScenario: 'Using `@supports` allows web applications to deliver glassmorphism effects to modern browsers while providing solid background fallbacks for legacy browsers.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">CSS Feature Queries (<code className="font-mono text-blue-600">@supports</code>) perform native browser feature detection, applying advanced CSS declarations (like glassmorphism blur) only if the browser engine supports them.</p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-purple-800 dark:text-purple-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of feature queries like checking weather capabilities before driving. If your car has 4-wheel drive (@supports), you take the snowy mountain route; otherwise, you stick to the flat highway.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-blue-600" />3. @supports Feature Detection Flow (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`flowchart TD
    A[Browser Evaluates @supports Property] --> B{Supports backdrop-filter?}
    B -- Yes --> C[Apply Translucent Glass Blur Effect]
    B -- No --> D[Apply Solid Dark Color Fallback]`}
                            caption="Figure 22.1: CSS @supports Feature Query Fallback Decision Tree."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This flowchart shows how browsers test feature support before rendering enhancements.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-blue-600" />4. Sample Code</h4>
                        <CodeBlock code={`.header {
    background-color: #0f172a; /* Baseline Fallback */
}

@supports (backdrop-filter: blur(10px)) {
    .header {
        background-color: rgba(15, 23, 42, 0.8);
        backdrop-filter: blur(10px);
    }
}`} lang="css" colorClass="blue" filename="supports.css" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Progressively enhancing glassmorphism headers with backdrop-filter while maintaining solid fallback backgrounds for older clients.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Enables modern progressive enhancement without breaking legacy browsers.</li>
                            <li>Native CSS implementation without requiring JavaScript Modernizr libraries.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Requires testing across multiple browser engines to verify fallback rendering.</li>
                            <li>Cannot detect bugs inside browser feature implementations.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'css-design-systems-tokens',
            title: '23. [Professional] Enterprise Design Systems & Tokens',
            definition: 'Design Systems tokenize visual decisions (colors, typography scales, elevation shadows, spacing grids) into platform-agnostic JSON tokens consumed by web, iOS, and Android apps.',
            syntax: `:root {
    --token-primary: #2563eb;
    --token-space-md: 1rem;
    --token-radius: 8px;
}`,
            codeSnippet: `:root {
    --token-brand-primary: #2563eb;
    --token-radius-card: 12px;
}

.system-card {
    background-color: var(--token-brand-primary);
    border-radius: var(--token-radius-card);
}`,
            realLifeScenario: 'Design systems at Shopify (Polaris), Salesforce (Lightning), and Google (Material 3) use token engines (Style Dictionary) to generate synchronized CSS, Swift, and Kotlin assets from Figma.',
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center"><BookOpen className="w-4 h-4 mr-2" />1. Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Enterprise Design Tokens convert design decisions (colors, typography scales, spacing grids) into platform-agnostic JSON files compiled into CSS custom properties, iOS Swift tokens, and Android XML assets.</p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-purple-800 dark:text-purple-300 mb-1 flex items-center"><Lightbulb className="w-4 h-4 mr-2" />2. Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Think of Design Tokens like a master pantone color book given to painters, web developers, and t-shirt printers. Everyone uses the exact same color code, ensuring total brand consistency everywhere.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Layers className="w-4 h-4 mr-2 text-blue-600" />3. Design System Token Pipeline (Mermaid.js Diagram)</h4>
                        <MermaidDiagram 
                            chart={`graph TD
    A[Figma Design Tokens JSON] --> B[Style Dictionary Compiler]
    B --> C[CSS Variables --token-color]
    B --> D[iOS Swift Color Tokens]
    B --> E[Android XML Color Tokens]`}
                            caption="Figure 23.1: Design Token Compilation Pipeline from Figma JSON to Multi-Platform Assets."
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This diagram demonstrates how design tokens compile to web, iOS, and Android platforms.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code className="w-4 h-4 mr-2 text-blue-600" />4. Sample Code</h4>
                        <CodeBlock code={`:root {
    --token-brand-primary: #2563eb;
    --token-radius-card: 12px;
}

.system-card {
    background-color: var(--token-brand-primary);
    border-radius: var(--token-radius-card);
}`} lang="css" colorClass="blue" filename="tokens.css" />
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
                        <h4 className="text-md font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center"><Cpu className="w-4 h-4 mr-2" />5. Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Enterprise design systems (Shopify Polaris, Google Material 3) maintaining visual brand synchronization across web and mobile apps.</p>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-emerald-400 flex items-center"><Check className="w-4 h-4 mr-2" />6. Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Establishes a single source of truth between UI designers and frontend developers.</li>
                            <li>Allows global brand color updates across web, iOS, and Android apps simultaneously.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
                        <h4 className="text-md font-bold text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />7. Disadvantages / Limitations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                            <li>Requires automated CI/CD token build pipeline configuration.</li>
                            <li>Managing hundreds of token variables requires strict naming governance.</li>
                        </ul>
                    </div>
                </div>
            )
        }
    ];

    const topics = courseData.map(topic => topic.title);
    const activeTopic = courseData[activeTopicIndex];

    return (
        <CoursePageLayout
            title="CSS3 Masterclass Course"
            description="Master CSS3 from Selectors, Box Model, and Typography to Flexbox, CSS Grid, Custom Animations, Sass/SCSS, Container Queries, and Design Tokens."
            topics={topics}
            icon={Palette}
            colorClass="blue"
            activeTopicIndex={activeTopicIndex}
            onTopicClick={setActiveTopicIndex}
        >
            <div className="space-y-8">
                {/* Part 1: Concept Definition & Detailed Explanation */}
                <div className="bg-blue-50 dark:bg-blue-900/10 border-l-4 border-blue-600 p-6 rounded-r-xl shadow-sm">
                    <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                        <BookOpen className="w-5 h-5 mr-2" />
                        1. Concept Definition & Detailed Explanation
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium mb-4">
                        {activeTopic.definition}
                    </p>
                    <div className="prose dark:prose-invert max-w-none text-sm text-gray-700 dark:text-gray-300">
                        {activeTopic.content}
                    </div>
                </div>

                {/* Part 2: Formal Code Syntax Blueprint */}
                {activeTopic.syntax ? (
                    <div className="bg-purple-50 dark:bg-purple-900/10 border-l-4 border-purple-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-purple-800 dark:text-purple-300 mb-3 flex items-center">
                            <FileText className="w-5 h-5 mr-2" />
                            2. Formal Code Syntax Blueprint
                        </h3>
                        <div className="bg-slate-900 text-slate-100 font-mono text-sm p-4 rounded-xl border border-slate-800 overflow-x-auto">
                            <pre>{activeTopic.syntax}</pre>
                        </div>
                    </div>
                ) : (
                    <div className="bg-purple-50 dark:bg-purple-900/10 border-l-4 border-purple-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-purple-800 dark:text-purple-300 mb-3 flex items-center">
                            <FileText className="w-5 h-5 mr-2" />
                            2. Formal Code Syntax Blueprint
                        </h3>
                        <div className="bg-slate-900 text-slate-100 font-mono text-sm p-4 rounded-xl border border-slate-800 overflow-x-auto">
                            <pre>{`/* CSS Rule Blueprint */\nselector {\n  property: value;\n}`}</pre>
                        </div>
                    </div>
                )}

                {/* Part 3: Executable Code Example */}
                {activeTopic.codeSnippet && (
                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-600" />
                            3. Executable Production Code Example
                        </h3>
                        <CodeBlock code={activeTopic.codeSnippet} lang="css" colorClass="blue" filename="styles.css" />
                    </div>
                )}

                {/* Part 4: Real-Life Scenario Example */}
                <div className="bg-emerald-50 dark:bg-emerald-900/10 border-l-4 border-emerald-600 p-6 rounded-r-xl shadow-sm">
                    <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                        <Lightbulb className="w-5 h-5 mr-2" />
                        4. Real-Life Industry Scenario & Application
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                        {activeTopic.realLifeScenario || activeTopic.example || "Used across modern web software to deliver responsive layouts, fluid typography, dark mode themes, and smooth animations."}
                    </p>
                </div>
            </div>
        </CoursePageLayout>
    );
};

export default CssCoursePage;
