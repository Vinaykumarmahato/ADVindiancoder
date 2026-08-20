import re
import json

file_path = "c:\\Users\\vinay\\Videos\\Development Journey\\full stack app for adv indian coder\\ADVindiancoder\\frontend\\pages\\courses\\BootstrapCoursePage.tsx"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Make sure imports are correct
if "Check" not in content and "AlertTriangle" not in content:
    content = content.replace(
        "import { Layout, Code, BookOpen, Lightbulb, FileText, Cpu, Layers, ShieldAlert, Zap, Palette } from 'lucide-react';",
        "import { Layout, Code, BookOpen, Lightbulb, FileText, Cpu, Layers, ShieldAlert, Zap, Palette, Check, AlertTriangle } from 'lucide-react';"
    )
if "import MermaidDiagram" not in content:
    content = content.replace(
        "import CodeBlock from '../../components/CodeBlock';",
        "import CodeBlock from '../../components/CodeBlock';\nimport MermaidDiagram from '../../components/MermaidDiagram';"
    )

chapters_data = [
    {
        "id": "bs5-intro-setup",
        "title": "1. [Beginner] Introduction & Setup (Breakpoints & Containers)",
        "def": "Bootstrap 5 is a mobile-first HTML, CSS, and JS framework. Containers (.container, .container-fluid) center and pad website content across 6 responsive breakpoints.",
        "analogy": "Think of containers as Tupperware that perfectly shapes your content to fit screens from phones (tiny containers) to ultrawide monitors (massive containers).",
        "mermaid": "graph TD\\n    A[Viewport] --> B{Screen Size}\\n    B -->|< 576px| C[xs Breakpoint]\\n    B -->|>= 576px| D[sm Breakpoint]\\n    B -->|>= 768px| E[md Breakpoint]\\n    B -->|>= 992px| F[lg Breakpoint]\\n    B -->|>= 1200px| G[xl Breakpoint]",
        "app": "Enterprise admin dashboards use .container-fluid for full-width data grid layouts while blogs use .container to restrict width for readability.",
        "adv": "Simplifies responsive design without media queries.",
        "dis": "Can lead to bloated HTML with too many utility classes."
    },
    {
        "id": "bs5-grid-system",
        "title": "2. [Beginner] 12-Column Grid System (.row, .col-md-6)",
        "def": "The 12-column Grid system built with Flexbox aligns content via rows (.row) and columns (.col-*).",
        "analogy": "Imagine a pizza cut into exactly 12 slices. A column can take 1 slice (.col-1) or half the pizza (.col-6), ensuring layout proportions stay consistent.",
        "mermaid": "graph LR\\n    A[.container] --> B[.row]\\n    B --> C[.col-md-4]\\n    B --> D[.col-md-8]\\n    C --> E[Sidebar 4/12]\\n    D --> F[Main Content 8/12]",
        "app": "Responsive e-commerce product grids shift from 1 column on mobile screens to 3 columns on desktop monitors.",
        "adv": "Extremely flexible and predictable layout system.",
        "dis": "Fixed to 12 columns by default, hard to divide by 5 or 7."
    },
    {
        "id": "bs5-typography-utilities",
        "title": "3. [Beginner] Typography & Utility Classes (Spacing & Colors)",
        "def": "Bootstrap provides typography helpers (.display-1), text utilities, background colors, and spacing utilities (m-*, p-*).",
        "analogy": "Utility classes are like spices in cooking. Instead of cooking a whole new dish (custom CSS), you sprinkle .mt-3 (margin-top) or .text-primary to season elements instantly.",
        "mermaid": "graph TD\\n    A[Utility Classes] --> B[Spacing]\\n    A --> C[Colors]\\n    A --> D[Typography]\\n    B --> E[m-3, p-4]\\n    C --> F[text-danger, bg-dark]\\n    D --> G[display-4, lead]",
        "app": "Rapidly styling a promotional banner with .bg-warning, .p-5, and .text-center without writing any custom stylesheet rules.",
        "adv": "Dramatically speeds up UI styling.",
        "dis": "Results in very long class attributes on elements."
    },
    {
        "id": "bs5-buttons-badges",
        "title": "4. [Beginner] Buttons & Badges (.btn-primary, .badge)",
        "def": "Button components (.btn) support contextual colors, sizes, button groups, and badge indicators.",
        "analogy": "Buttons are the steering wheels of an app, while badges are the dashboard lights telling you there is 1 unread message.",
        "mermaid": "graph LR\\n    A[.btn Base] --> B[.btn-primary]\\n    A --> C[.btn-outline-danger]\\n    D[.badge Base] --> E[.bg-success]\\n    D --> F[.rounded-pill]",
        "app": "Notification bell icons use absolute-positioned pill badges to display unread alert counts dynamically.",
        "adv": "Consistent and accessible button designs out of the box.",
        "dis": "Buttons often look heavily &quot;Bootstrap-y&quot; unless customized."
    },
    {
        "id": "bs5-forms-floating-labels",
        "title": "5. [Intermediate] Form Controls & Floating Labels (.form-floating)",
        "def": "Form controls styling, input groups, floating labels, and client-side form validation states.",
        "analogy": "Floating labels are like name tags that politely step out of the way to the top of the box when you start writing your name.",
        "mermaid": "graph TD\\n    A[Form Group] --> B[.form-floating]\\n    B --> C[Input field]\\n    B --> D[Label]\\n    C -.on focus.-> E[Label floats up]\\n    C -.on empty.-> F[Label inside input]",
        "app": "Modern SaaS login screens use floating labels for clean, animated, and accessible form input fields.",
        "adv": "Highly accessible and modern form inputs.",
        "dis": "Complex markup required for simple inputs."
    },
    {
        "id": "bs5-cards-navbars",
        "title": "6. [Intermediate] Cards, Navbars & Navs (.card, .navbar)",
        "def": "Cards package structured content blocks. Responsive Navbars collapse navigation links into menus on mobile.",
        "analogy": "A card is like a trading card with a picture, title, and stats. A navbar is the mall directory that folds into a pocket map on your phone.",
        "mermaid": "graph TD\\n    A[.navbar-expand-lg] --> B[Desktop: Horizontal Links]\\n    A --> C[Mobile: Hamburger Toggle]\\n    C --> D[.collapse.navbar-collapse]",
        "app": "Blog platforms organize post grids inside Bootstrap Card components equipped with top image banners.",
        "adv": "Provides full navigation responsiveness easily.",
        "dis": "Navbar HTML is heavily nested and verbose."
    },
    {
        "id": "bs5-modals-accordions-carousels",
        "title": "7. [Intermediate] Modals, Accordions & Carousels",
        "def": "Interactive components powered by Bootstrap JavaScript: Modals, Accordions, and Carousels.",
        "analogy": "Modals are like pop-up books demanding attention, Accordions are filing cabinet drawers, and Carousels are rotating billboards.",
        "mermaid": "graph LR\\n    A[data-bs-toggle] --> B{Component Type}\\n    B -->|modal| C[Open Dialog]\\n    B -->|collapse| D[Toggle Accordion]\\n    B -->|carousel| E[Slide Images]",
        "app": "FAQ pages use Accordions to let users expand specific questions without cluttering the entire page.",
        "adv": "Interactive components require zero custom JavaScript.",
        "dis": "Can cause accessibility issues if improperly nested."
    },
    {
        "id": "bs5-alerts-toasts-tooltips",
        "title": "8. [Intermediate] Alerts, Toasts & Tooltips (.alert, .toast)",
        "def": "Alerts convey status feedback. Toasts display push notifications. Tooltips provide contextual hover hints.",
        "analogy": "Alerts are warning signs on the road. Toasts are gentle taps on the shoulder. Tooltips are reading glasses for tricky words.",
        "mermaid": "graph TD\\n    A[Feedback UI] --> B[Alert: Static inline]\\n    A --> C[Toast: Floating temporary]\\n    A --> D[Tooltip: Hover activated]\\n    D -.JS Required.-> E[Initialize Tooltips]",
        "app": "Form submit actions trigger floating toast notifications in the bottom-right corner of web apps.",
        "adv": "Standardized way to provide user feedback.",
        "dis": "Tooltips require manual JavaScript initialization."
    },
    {
        "id": "bs5-flexbox-grid-utilities",
        "title": "9. [Advanced] Flexbox & Grid Utilities (.d-flex, .gap-3)",
        "def": "Advanced Flexbox utilities control layout positioning and element alignment natively.",
        "analogy": "Flexbox utilities act like an invisible magnetic field that pushes, pulls, and perfectly spaces your elements in 1D lines.",
        "mermaid": "graph TD\\n    A[.d-flex Container] --> B[justify-content]\\n    A --> C[align-items]\\n    A --> D[gap-*]\\n    B --> E[Horizontal placement]\\n    C --> F[Vertical placement]\\n    D --> G[Spacing between items]",
        "app": "Aligning buttons and text labels neatly inside complex header toolbars without custom CSS.",
        "adv": "Completely replaces the need for custom flex CSS.",
        "dis": "Can be overwhelming to memorize all flex utility names."
    },
    {
        "id": "bs5-sass-customization",
        "title": "10. [Advanced] Customizing Bootstrap via Sass (SCSS Variables)",
        "def": "Customize Bootstrap themes by overriding SCSS variables before importing Bootstrap SCSS modules.",
        "analogy": "Customizing Sass variables is like changing the master blueprint of a factory before production starts, altering every product at once.",
        "mermaid": "graph LR\\n    A[Your custom.scss] --> B[Override $primary]\\n    A --> C[Override $border-radius]\\n    B --> D[@import bootstrap.scss]\\n    C --> D\\n    D --> E[Compiled custom.css]",
        "app": "Corporate websites override Bootstrap SCSS variables to match official brand identity colors natively.",
        "adv": "Maintains upgradeability while heavily altering design.",
        "dis": "Requires a Sass compiler build step."
    },
    {
        "id": "bs5-dark-mode-icons",
        "title": "11. [Advanced] Bootstrap Icons & Dark Mode (data-bs-theme=\"dark\")",
        "def": "Bootstrap 5.3 native color modes using data-bs-theme, paired with the official Bootstrap Icons vector library.",
        "analogy": "Dark mode is like putting sunglasses on your website; data-bs-theme acts as the switch that instantly tints all components.",
        "mermaid": "graph TD\\n    A[Root HTML] -->|data-bs-theme='light'| B[Default Colors]\\n    A -->|data-bs-theme='dark'| C[Inverted Colors]\\n    C --> D[Cards: Dark BG]\\n    C --> E[Text: Light Color]\\n    C --> F[Borders: Darker]",
        "app": "Adding a seamless dark mode toggle switch to enterprise dashboards that instantly recolors the entire UI.",
        "adv": "First-class dark mode support without custom CSS.",
        "dis": "Complex color maps to manage if heavily customized."
    },
    {
        "id": "bs5-offcanvas-responsive-patterns",
        "title": "12. [Advanced] Responsive Layout Patterns & Offcanvas (.offcanvas)",
        "def": "Build modern responsive layouts using Offcanvas sidebars, sticky footers, and dashboard grids.",
        "analogy": "Offcanvas is like a sliding pocket door in a tiny house, revealing a full closet (menu) only when you pull the handle.",
        "mermaid": "graph LR\\n    A[Trigger Button] -->|data-bs-toggle| B[.offcanvas]\\n    B --> C[.offcanvas-start Left]\\n    B --> D[.offcanvas-end Right]\\n    B --> E[.offcanvas-bottom]",
        "app": "Mobile web apps use Offcanvas components to slide out navigation menus smoothly when tapping hamburger icons.",
        "adv": "Saves screen space efficiently on mobile devices.",
        "dis": "Requires Bootstrap JS and careful z-index management."
    },
    {
        "id": "bs5-accessibility-rtl",
        "title": "13. [Professional] Accessibility & RTL Support (bootstrap.rtl.css)",
        "def": "Ensure WAI-ARIA accessibility compliance and Right-to-Left language layout support via bootstrap.rtl.css.",
        "analogy": "RTL support is like a mirror universe for your UI, seamlessly flipping layouts for Arabic/Hebrew readers while keeping logic intact.",
        "mermaid": "graph TD\\n    A[Language Setup] -->|LTR| B[bootstrap.min.css]\\n    A -->|RTL dir='rtl'| C[bootstrap.rtl.min.css]\\n    C --> D[Margins flipped ps-3 -> pe-3]\\n    C --> E[Floats flipped]",
        "app": "Global web platforms dynamically load bootstrap.rtl.min.css when users select Arabic or Hebrew languages.",
        "adv": "Built-in RTL support for internationalization.",
        "dis": "Must maintain logic to switch CSS files dynamically."
    },
    {
        "id": "bs5-performance-optimization",
        "title": "14. [Professional] Performance Optimization & Custom Builds",
        "def": "Optimize production sizes by compiling custom Sass builds and purging unused CSS with PurgeCSS.",
        "analogy": "PurgeCSS is like a personal trainer who shaves off 90% of your CSS bundle's fat, leaving only the lean muscle your HTML actually uses.",
        "mermaid": "graph LR\\n    A[Full bootstrap.css] --> B[PurgeCSS Engine]\\n    C[Your HTML/JS Files] --> B\\n    B -->|Removes unused classes| D[Optimized tiny.css]",
        "app": "Compiling modular Sass builds reduces final CSS bundle sizes from 200KB down to 25KB, vastly improving load times.",
        "adv": "Massively improves initial page load speed.",
        "dis": "PurgeCSS can accidentally strip dynamically added classes."
    },
    {
        "id": "bs5-react-vue-integration",
        "title": "15. [Professional] Integrating with React (React-Bootstrap)",
        "def": "Integrate Bootstrap styling with React frameworks using native components, avoiding raw DOM manipulation.",
        "analogy": "React-Bootstrap translates raw HTML/jQuery Bootstrap into fluent React language, letting you use <Button> instead of <button className='btn btn-primary'>.",
        "mermaid": "graph TD\\n    A[React State] --> B[<Modal show=&#123;isOpen&#125;>]\\n    B --> C[Virtual DOM Updates]\\n    C --> D[No jQuery Required]\\n    C --> E[No data-bs attributes needed]",
        "app": "React SPAs control Bootstrap modal visibility via component state rather than raw DOM data-bs attributes.",
        "adv": "True React component lifecycle integration.",
        "dis": "Adds an extra dependency layer (react-bootstrap)."
    },
    {
        "id": "bs5-design-system-storybook",
        "title": "16. [Professional] Building Enterprise Design Systems",
        "def": "Extend Bootstrap components into enterprise UI Design Systems with custom CSS variables and Storybook.",
        "analogy": "A Design System is the company's constitution, ensuring every app built by different teams speaks the exact same visual language.",
        "mermaid": "graph TD\\n    A[Design System] --> B[CSS Custom Properties]\\n    A --> C[Storybook Docs]\\n    A --> D[NPM Package]\\n    D --> E[App 1 Uses it]\\n    D --> F[App 2 Uses it]",
        "app": "Enterprise teams package custom Bootstrap theme tokens into internal npm packages for consistent UI branding.",
        "adv": "Scales design consistency across multiple products.",
        "dis": "High initial setup and maintenance overhead."
    }
]

# We need to parse each topic object in the file and replace its 'content: (...)' part.
# Let's replace the whole objects if possible, or just inject the new content string.
# Since we have the full file content, we can use regex to match each topic block and replace the content.
def get_topic_content(c):
    return f"""(
                <div className="space-y-6">
                    {{/* 1. Definition */}}
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Concept Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">{{`{c['def']}`}}</p>
                    </div>

                    {{/* 2. Real-Life Analogy & Example */}}
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">{{`{c['analogy']}`}}</p>
                    </div>

                    {{/* 3. Visual Explanation */}}
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-purple-600" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={{`{c['mermaid']}`}} />
                    </div>

                    {{/* 4. Sample Code */}}
                    {{activeTopic.codeSnippet && (
                        <div className="space-y-2">
                            <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                                <Code className="w-5 h-5 mr-2 text-purple-600" />
                                Sample Code
                            </h4>
                            <CodeBlock code={{activeTopic.codeSnippet}} lang="html" colorClass="purple" filename="example.html" />
                        </div>
                    )}}

                    {{/* 5. Real-World Application */}}
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">{{`{c['app']}`}}</p>
                    </div>

                    {{/* 6. Advantages */}}
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-emerald-400 mb-2 flex items-center">
                            <Check className="w-5 h-5 mr-2" />
                            Advantages
                        </h4>
                        <p className="text-gray-300">{{`{c['adv']}`}}</p>
                    </div>

                    {{/* 7. Disadvantages / Limitations */}}
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-red-400 mb-2 flex items-center">
                            <AlertTriangle className="w-5 h-5 mr-2" />
                            Disadvantages & Limitations
                        </h4>
                        <p className="text-gray-300">{{`{c['dis']}`}}</p>
                    </div>
                </div>
            )"""

# Instead of complex regex replacing each object, let's just replace the content property.
for c in chapters_data:
    # Find the topic ID
    id_str = f"id: '{c['id']}'"
    idx = content.find(id_str)
    if idx == -1:
        print(f"Could not find {c['id']}")
        continue
    
    # Find the start of content:
    content_start_idx = content.find("content: (", idx)
    
    # We need to find the matching closing parenthesis for content: (
    open_count = 0
    content_end_idx = -1
    for i in range(content_start_idx + 9, len(content)):
        if content[i] == '(':
            open_count += 1
        elif content[i] == ')':
            open_count -= 1
            if open_count == 0:
                content_end_idx = i
                break
    
    new_content_val = get_topic_content(c)
    content = content[:content_start_idx] + "content: " + new_content_val + content[content_end_idx+1:]

# Now replace the rendering section at the bottom!
# We just need to change this part:
#             <div className="space-y-8">
#                 {/* Part 1: Concept Definition & Detailed Explanation */}
# ...
#             </div>
#         </CoursePageLayout>

render_start = content.find('<div className="space-y-8">')
render_end = content.find('</CoursePageLayout>', render_start)

new_render = '''<div className="space-y-8">
                {activeTopic.content}
            </div>
        '''

content = content[:render_start] + new_render + content[render_end:]

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("File updated successfully.")
