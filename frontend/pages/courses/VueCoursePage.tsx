import React, { useState } from 'react';
import CoursePageLayout from '../../components/CoursePageLayout';
import { Layers, Code, BookOpen, Lightbulb, FileText, Cpu, Check, AlertTriangle } from 'lucide-react';
import CodeBlock from '../../components/CodeBlock';
import MermaidDiagram from '../../components/MermaidDiagram';

interface VueTopic {
    id: string;
    title: string;
    definition: string;
    example?: string;
    syntax?: string;
    realLifeScenario?: string;
    codeSnippet?: string | null;
    content: React.ReactNode;
}

const VueCoursePage = () => {
    const [activeTopicIndex, setActiveTopicIndex] = useState(0);

    const courseData: VueTopic[] = [
        // ==================== BEGINNER TIER ====================
        {
            id: 'vue-intro-composition-api',
            title: '1. [Beginner] Introduction & Composition API (<script setup>)',
            definition: 'Vue 3 is a progressive JavaScript framework for building user interfaces. The Composition API with <script setup> provides clean, organized code structuring compared to the legacy Options API.',
            syntax: `<!-- Vue 3 Single File Component (SFC) Blueprint -->
<script setup>
import { ref } from 'vue';
const message = ref('Hello Vue 3!');
</script>

<template>
  <h1>{{ message }}</h1>
</template>`,
            codeSnippet: `<script setup>
import { ref } from 'vue';
const title = ref('ADV Indian Coder - Vue 3 Masterclass');
const count = ref(0);
const increment = () => { count.value++; };
</script>

<template>
  <div className="p-4 border rounded-xl space-y-3">
    <h2 className="text-emerald-600 font-bold">{{ title }}</h2>
    <p>Current Count: {{ count }}</p>
    <button @click="increment" className="px-4 py-2 bg-emerald-600 text-white rounded-lg">Increment Count</button>
  </div>
</template>`,
            realLifeScenario: 'Interactive dashboards (GitLab, Nintendo) use Vue 3 Single File Components (SFC) for responsive component UI development.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-xl shadow-sm">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2"><BookOpen className="w-5 h-5 mr-2" />Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Vue 3 is a progressive JavaScript framework for building user interfaces. The Composition API with <code className="text-cyan-600 font-mono">&lt;script setup&gt;</code> provides clean, organized code structuring compared to the legacy Options API.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-xl shadow-sm">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2"><Lightbulb className="w-5 h-5 mr-2" />Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Think of Vue 3 components like Lego blocks. Each block has its own logic, template, and style, which you piece together to build complex applications like interactive dashboards.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4"><Layers className="w-5 h-5 mr-2 text-emerald-600" />Visual Explanation</h4>
                        <MermaidDiagram chart={`graph TD
  A[Options API] --> B[Data]
  A --> C[Methods]
  D[Composition API] --> E[Ref/Reactive]
  D --> F[Functions]`} />
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center"><Code className="w-5 h-5 mr-2 text-emerald-600" />Sample Code</h4>
                        <CodeBlock code={`<script setup>\nimport { ref } from 'vue';\nconst message = ref('Hello Vue 3!');\n</script>`} lang="html" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-xl shadow-sm">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2"><Cpu className="w-5 h-5 mr-2" />Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Interactive dashboards (GitLab, Nintendo) use Vue 3 Single File Components (SFC) for responsive component UI development.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="text-lg font-bold text-emerald-400 flex items-center mb-2"><Check className="w-5 h-5 mr-2" />Advantages</h4>
                            <ul className="list-disc list-inside text-sm space-y-1">
                                <li>Better logic organization with <code className="text-cyan-400">&lt;script setup&gt;</code></li>
                                <li>Excellent TypeScript support natively</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="text-lg font-bold text-red-400 flex items-center mb-2"><AlertTriangle className="w-5 h-5 mr-2" />Disadvantages / Limitations</h4>
                            <ul className="list-disc list-inside text-sm space-y-1">
                                <li>Learning curve for developers used to Options API</li>
                                <li>Requires build tools for SFC support</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'vue-reactivity-ref-reactive',
            title: '2. [Beginner] Reactivity System (ref vs reactive)',
            definition: 'Vue 3 uses ES6 Proxies for reactivity. Use ref() for primitive values (accessed via .value in script) and reactive() for nested object structures.',
            syntax: `const count = ref(0);          // Primitive ref (count.value)\nconst user = reactive({ name: 'Vinay', age: 25 }); // Reactive Object`,
            codeSnippet: `<script setup>\nimport { ref, reactive } from 'vue';\nconst isOnline = ref(true);\nconst userProfile = reactive({ username: 'Vinay', points: 1250 });\n</script>`,
            realLifeScenario: 'Form state managers use `reactive({ email: "", password: "" })` to group form input properties into a single reactive object.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-xl shadow-sm">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2"><BookOpen className="w-5 h-5 mr-2" />Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Vue 3 uses ES6 Proxies for reactivity. Use <code className="text-cyan-600 font-mono">ref()</code> for primitive values and <code className="text-cyan-600 font-mono">reactive()</code> for nested object structures.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-xl shadow-sm">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2"><Lightbulb className="w-5 h-5 mr-2" />Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Like a smart spreadsheet where changing one cell automatically updates all related formulas, Vue's reactivity system tracks changes and auto-updates the UI.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4"><Layers className="w-5 h-5 mr-2 text-emerald-600" />Visual Explanation</h4>
                        <MermaidDiagram chart={`graph TD
  A[State] -->|ref| B(Primitive)
  A -->|reactive| C(Object)
  B --> D[DOM Update]
  C --> D`} />
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center"><Code className="w-5 h-5 mr-2 text-emerald-600" />Sample Code</h4>
                        <CodeBlock code={`const count = ref(0);\nconst user = reactive({ name: 'Vinay', age: 25 });`} lang="javascript" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-xl shadow-sm">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2"><Cpu className="w-5 h-5 mr-2" />Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Form state managers use <code className="text-cyan-600 font-mono">reactive()</code> to group form input properties into a single reactive object.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="text-lg font-bold text-emerald-400 flex items-center mb-2"><Check className="w-5 h-5 mr-2" />Advantages</h4>
                            <ul className="list-disc list-inside text-sm space-y-1">
                                <li>Deep reactivity out of the box</li>
                                <li>Clean separation of primitive vs complex state</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="text-lg font-bold text-red-400 flex items-center mb-2"><AlertTriangle className="w-5 h-5 mr-2" />Disadvantages / Limitations</h4>
                            <ul className="list-disc list-inside text-sm space-y-1">
                                <li>Requires using <code className="text-cyan-400">.value</code> for refs</li>
                                <li>Cannot destructure reactive objects without losing reactivity</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'vue-template-directives',
            title: '3. [Beginner] Template Syntax & Directives (v-bind, v-on, v-model, v-for)',
            definition: 'Directives are prefixed with v-: v-bind (:), v-on (@), v-model (two-way binding), v-if/v-else-if/v-else, v-show, and v-for (list rendering with :key).',
            syntax: `<input :src="imgUrl" @click="handleClick" v-model="text" />\n<div v-if="isVisible">Shown if true</div>\n<li v-for="item in items" :key="item.id">{{ item.name }}</li>`,
            codeSnippet: `<script setup>\nimport { ref } from 'vue';\nconst searchQuery = ref('');\n</script>`,
            realLifeScenario: 'Searching product tables uses `v-model` bound inputs to filter list items rendered via `v-for`.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-xl shadow-sm">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2"><BookOpen className="w-5 h-5 mr-2" />Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Directives are prefixed with v-: v-bind (:), v-on (@), v-model, v-if, v-show, and v-for to manipulate the DOM based on state.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-xl shadow-sm">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2"><Lightbulb className="w-5 h-5 mr-2" />Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Like TV remote control buttons that map specific actions (volume up, channel change) to hardware responses, directives map UI actions directly to component state.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4"><Layers className="w-5 h-5 mr-2 text-emerald-600" />Visual Explanation</h4>
                        <MermaidDiagram chart={`graph TD
  A[v-bind] --> B[Attributes]
  C[v-on] --> D[Events]
  E[v-model] --> F[Two-way Binding]`} />
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center"><Code className="w-5 h-5 mr-2 text-emerald-600" />Sample Code</h4>
                        <CodeBlock code={`<input v-model="searchQuery" />\n<ul>\n  <li v-for="item in items" :key="item.id">{{ item.name }}</li>\n</ul>`} lang="html" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-xl shadow-sm">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2"><Cpu className="w-5 h-5 mr-2" />Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Searching product tables uses <code className="text-cyan-600 font-mono">v-model</code> bound inputs to filter list items rendered via <code className="text-cyan-600 font-mono">v-for</code>.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="text-lg font-bold text-emerald-400 flex items-center mb-2"><Check className="w-5 h-5 mr-2" />Advantages</h4>
                            <ul className="list-disc list-inside text-sm space-y-1">
                                <li>Intuitive shorthand syntax (@ and :)</li>
                                <li>Powerful two-way binding built-in</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="text-lg font-bold text-red-400 flex items-center mb-2"><AlertTriangle className="w-5 h-5 mr-2" />Disadvantages / Limitations</h4>
                            <ul className="list-disc list-inside text-sm space-y-1">
                                <li>Can create complex template logic if overused</li>
                                <li>Requires keys for list rendering</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'vue-computed-watchers',
            title: '4. [Beginner] Computed Properties & Watchers (computed, watch)',
            definition: 'computed() caches derived reactive calculations. watch() and watchEffect() execute side-effects whenever targeted reactive dependencies update.',
            syntax: `const fullName = computed(() => \`\${firstName.value} \${lastName.value}\`);\nwatch(userId, (newId) => { fetchUserData(newId); });`,
            codeSnippet: `const totalCost = computed(() => price.value * quantity.value);`,
            realLifeScenario: 'Calculating e-commerce cart totals and applying discount coupons relies on `computed()` for cached evaluations.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-xl shadow-sm">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2"><BookOpen className="w-5 h-5 mr-2" />Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300"><code className="text-cyan-600 font-mono">computed()</code> caches derived reactive calculations. <code className="text-cyan-600 font-mono">watch()</code> executes side-effects whenever targeted reactive dependencies update.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-xl shadow-sm">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2"><Lightbulb className="w-5 h-5 mr-2" />Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Like a tax calculator that only recalculates when your income changes (computed), and an alarm that rings when your pizza timer finishes (watch).</p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4"><Layers className="w-5 h-5 mr-2 text-emerald-600" />Visual Explanation</h4>
                        <MermaidDiagram chart={`graph TD
  A[State Change] --> B{Computed or Watch?}
  B -->|Computed| C[Cached Value]
  B -->|Watch| D[Side Effect]`} />
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center"><Code className="w-5 h-5 mr-2 text-emerald-600" />Sample Code</h4>
                        <CodeBlock code={`const total = computed(() => price.value * qty.value);\nwatch(qty, (newQty) => console.log(newQty));`} lang="javascript" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-xl shadow-sm">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2"><Cpu className="w-5 h-5 mr-2" />Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Calculating e-commerce cart totals and applying discount coupons relies on <code className="text-cyan-600 font-mono">computed()</code> for cached evaluations.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="text-lg font-bold text-emerald-400 flex items-center mb-2"><Check className="w-5 h-5 mr-2" />Advantages</h4>
                            <ul className="list-disc list-inside text-sm space-y-1">
                                <li>Automatically caches expensive operations</li>
                                <li>Clean separation of side-effects (watchers)</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="text-lg font-bold text-red-400 flex items-center mb-2"><AlertTriangle className="w-5 h-5 mr-2" />Disadvantages / Limitations</h4>
                            <ul className="list-disc list-inside text-sm space-y-1">
                                <li>Watchers can become hard to track if nested</li>
                                <li>Computed props shouldn't have side effects</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        // ==================== INTERMEDIATE TIER ====================
        {
            id: 'vue-component-props-emits',
            title: '5. [Intermediate] Component System & Props (defineProps, defineEmits)',
            definition: 'Components pass read-only props down using defineProps() macro, and emit custom events up to parent components via defineEmits().',
            syntax: `<script setup>\nconst props = defineProps({ title: String });\nconst emit = defineEmits(['update']);\n</script>`,
            codeSnippet: `const handleAdd = () => { emit('addToCart', props.productName); };`,
            realLifeScenario: 'Child product card widgets emit an `addToCart` event up to parent cart sidebar components.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-xl shadow-sm">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2"><BookOpen className="w-5 h-5 mr-2" />Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Components pass read-only props down using <code className="text-cyan-600 font-mono">defineProps()</code>, and emit custom events up to parent components via <code className="text-cyan-600 font-mono">defineEmits()</code>.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-xl shadow-sm">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2"><Lightbulb className="w-5 h-5 mr-2" />Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Props are like a manager giving instructions down to a worker. Emits are like the worker reporting status back up to the manager.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4"><Layers className="w-5 h-5 mr-2 text-emerald-600" />Visual Explanation</h4>
                        <MermaidDiagram chart={`graph TD
  A[Parent] -->|Props| B[Child]
  B -->|Emits| A`} />
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center"><Code className="w-5 h-5 mr-2 text-emerald-600" />Sample Code</h4>
                        <CodeBlock code={`const props = defineProps({ title: String });\nconst emit = defineEmits(['update']);`} lang="javascript" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-xl shadow-sm">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2"><Cpu className="w-5 h-5 mr-2" />Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Child product card widgets emit an <code className="text-cyan-600 font-mono">addToCart</code> event up to parent cart sidebar components.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="text-lg font-bold text-emerald-400 flex items-center mb-2"><Check className="w-5 h-5 mr-2" />Advantages</h4>
                            <ul className="list-disc list-inside text-sm space-y-1">
                                <li>Enforces one-way data flow</li>
                                <li>Clear contracts between parent and child components</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="text-lg font-bold text-red-400 flex items-center mb-2"><AlertTriangle className="w-5 h-5 mr-2" />Disadvantages / Limitations</h4>
                            <ul className="list-disc list-inside text-sm space-y-1">
                                <li>Prop drilling can occur in deeply nested trees</li>
                                <li>Props cannot be mutated directly by children</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'vue-slots-content-distribution',
            title: '6. [Intermediate] Slots & Content Distribution (v-slot)',
            definition: 'Slots distribute template content into component layouts: Default slots, Named slots (`v-slot:header`), and Scoped slots (passing child data to parent templates).',
            syntax: `<!-- Child Component: -->\n<header><slot name="header">Default Header</slot></header>`,
            codeSnippet: `<template #header><h1>Custom Header Title</h1></template>`,
            realLifeScenario: 'Card and Modal layout components use named slots (`#header`, `#footer`) to let parent pages inject custom title bars.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-xl shadow-sm">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2"><BookOpen className="w-5 h-5 mr-2" />Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Slots distribute template content into component layouts: Default slots, Named slots, and Scoped slots.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-xl shadow-sm">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2"><Lightbulb className="w-5 h-5 mr-2" />Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Like a picture frame (component) where you can slide in any photograph (slot content) while maintaining the ornate border layout.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4"><Layers className="w-5 h-5 mr-2 text-emerald-600" />Visual Explanation</h4>
                        <MermaidDiagram chart={`graph TD
  A[Parent Template] -->|Named Slot| B[Child Component Layout]
  A -->|Default Slot| C[Child Default Content]`} />
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center"><Code className="w-5 h-5 mr-2 text-emerald-600" />Sample Code</h4>
                        <CodeBlock code={`<template #header>\n  <h1>Title</h1>\n</template>`} lang="html" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-xl shadow-sm">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2"><Cpu className="w-5 h-5 mr-2" />Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Card and Modal layout components use named slots to let parent pages inject custom title bars.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="text-lg font-bold text-emerald-400 flex items-center mb-2"><Check className="w-5 h-5 mr-2" />Advantages</h4>
                            <ul className="list-disc list-inside text-sm space-y-1">
                                <li>High reusability of complex layouts</li>
                                <li>Scoped slots allow complex data sharing to parents</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="text-lg font-bold text-red-400 flex items-center mb-2"><AlertTriangle className="w-5 h-5 mr-2" />Disadvantages / Limitations</h4>
                            <ul className="list-disc list-inside text-sm space-y-1">
                                <li>Scoped slots syntax can be verbose</li>
                                <li>Can be overkill for simple text injection (use props instead)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'vue-lifecycle-hooks',
            title: '7. [Intermediate] Component Lifecycle Hooks (onMounted, onUnmounted)',
            definition: 'Lifecycle hooks run callback functions at specific component phases: onMounted (DOM ready), onUpdated (reactive state change), and onUnmounted (cleanup).',
            syntax: `import { onMounted, onUnmounted } from 'vue';\nonMounted(() => { /* Fetch API data */ });`,
            codeSnippet: `onMounted(() => { timerId = setInterval(() => seconds.value++, 1000); });`,
            realLifeScenario: 'Data tables load initial API data inside `onMounted()` and disconnect WebSocket listeners in `onUnmounted()`.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-xl shadow-sm">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2"><BookOpen className="w-5 h-5 mr-2" />Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Lifecycle hooks run callback functions at specific component phases: <code className="text-cyan-600 font-mono">onMounted</code> (DOM ready), <code className="text-cyan-600 font-mono">onUpdated</code>, and <code className="text-cyan-600 font-mono">onUnmounted</code> (cleanup).</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-xl shadow-sm">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2"><Lightbulb className="w-5 h-5 mr-2" />Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Like a plant's life cycle: a seed is planted (created), blossoms (mounted), grows (updated), and eventually dies (unmounted).</p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4"><Layers className="w-5 h-5 mr-2 text-emerald-600" />Visual Explanation</h4>
                        <MermaidDiagram chart={`graph TD
  A[onMounted] --> B[DOM Ready]
  C[onUpdated] --> D[Re-render]
  E[onUnmounted] --> F[Cleanup]`} />
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center"><Code className="w-5 h-5 mr-2 text-emerald-600" />Sample Code</h4>
                        <CodeBlock code={`onMounted(() => console.log('Component mounted'));`} lang="javascript" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-xl shadow-sm">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2"><Cpu className="w-5 h-5 mr-2" />Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Data tables load initial API data inside <code className="text-cyan-600 font-mono">onMounted()</code> and disconnect WebSocket listeners in <code className="text-cyan-600 font-mono">onUnmounted()</code>.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="text-lg font-bold text-emerald-400 flex items-center mb-2"><Check className="w-5 h-5 mr-2" />Advantages</h4>
                            <ul className="list-disc list-inside text-sm space-y-1">
                                <li>Precise control over component execution</li>
                                <li>Prevents memory leaks via cleanup hooks</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="text-lg font-bold text-red-400 flex items-center mb-2"><AlertTriangle className="w-5 h-5 mr-2" />Disadvantages / Limitations</h4>
                            <ul className="list-disc list-inside text-sm space-y-1">
                                <li>Cannot be called asynchronously after component creation</li>
                                <li>Overuse can tightly couple logic to component lifecycles</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'vue-forms-modifiers',
            title: '8. [Intermediate] Form Handling & Modifiers (.trim, .number, .lazy)',
            definition: 'Form inputs sync via v-model, enhanced with modifiers: .number (auto-typecast to float/int), .trim (auto-strip whitespace), and .lazy (sync on change instead of input).',
            syntax: `<input v-model.number="age" type="number" />`,
            codeSnippet: `<input v-model.trim="form.username" />`,
            realLifeScenario: 'Using `v-model.number` prevents numeric inputs from storing string values in backend state objects.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-xl shadow-sm">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2"><BookOpen className="w-5 h-5 mr-2" />Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Form inputs sync via v-model, enhanced with modifiers like <code className="text-cyan-600 font-mono">.number</code>, <code className="text-cyan-600 font-mono">.trim</code>, and <code className="text-cyan-600 font-mono">.lazy</code>.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-xl shadow-sm">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2"><Lightbulb className="w-5 h-5 mr-2" />Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Like an automatic spell-checker or autocorrect on your phone that cleans up your typing before it's sent as a message.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4"><Layers className="w-5 h-5 mr-2 text-emerald-600" />Visual Explanation</h4>
                        <MermaidDiagram chart={`graph TD
  A[Input] --> B{Modifier}
  B -->|.number| C[ParseFloat]
  B -->|.trim| D[Trim Space]`} />
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center"><Code className="w-5 h-5 mr-2 text-emerald-600" />Sample Code</h4>
                        <CodeBlock code={`<input v-model.number="age" type="number" />`} lang="html" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-xl shadow-sm">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2"><Cpu className="w-5 h-5 mr-2" />Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Using <code className="text-cyan-600 font-mono">v-model.number</code> prevents numeric inputs from storing string values in backend state objects.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="text-lg font-bold text-emerald-400 flex items-center mb-2"><Check className="w-5 h-5 mr-2" />Advantages</h4>
                            <ul className="list-disc list-inside text-sm space-y-1">
                                <li>Reduces boilerplate data cleanup code</li>
                                <li>Built directly into the template syntax</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="text-lg font-bold text-red-400 flex items-center mb-2"><AlertTriangle className="w-5 h-5 mr-2" />Disadvantages / Limitations</h4>
                            <ul className="list-disc list-inside text-sm space-y-1">
                                <li>.number modifier doesn't strictly prevent typing non-numbers in text fields</li>
                                <li>Limited to basic types of formatting</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        // ==================== ADVANCED TIER ====================
        {
            id: 'vue-router',
            title: '9. [Advanced] Vue Router & Navigation Guards',
            definition: 'Vue Router handles SPA client-side routing using createRouter, createWebHistory, <router-link>, <router-view>, useRouter(), useRoute(), and beforeEach navigation guards.',
            syntax: `import { createRouter, createWebHistory } from 'vue-router';\nconst router = createRouter({ history: createWebHistory(), routes: [] });`,
            codeSnippet: `const router = useRouter();\nrouter.push('/home');`,
            realLifeScenario: 'Global navigation guards (`router.beforeEach()`) verify user authentication tokens before allowing entry to protected routes.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-xl shadow-sm">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2"><BookOpen className="w-5 h-5 mr-2" />Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Vue Router handles SPA client-side routing using <code className="text-cyan-600 font-mono">createRouter</code> and navigation guards.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-xl shadow-sm">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2"><Lightbulb className="w-5 h-5 mr-2" />Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Like a receptionist at an office building who directs you to different rooms (routes) and checks your ID card (navigation guard) before letting you into VIP areas.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4"><Layers className="w-5 h-5 mr-2 text-emerald-600" />Visual Explanation</h4>
                        <MermaidDiagram chart={`graph TD
  A[URL Change] --> B[Vue Router]
  B --> C{Guards}
  C -->|Pass| D[Component]
  C -->|Fail| E[Redirect]`} />
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center"><Code className="w-5 h-5 mr-2 text-emerald-600" />Sample Code</h4>
                        <CodeBlock code={`router.beforeEach((to, from) => { if (to.meta.requiresAuth) return '/login'; });`} lang="javascript" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-xl shadow-sm">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2"><Cpu className="w-5 h-5 mr-2" />Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Global navigation guards verify user authentication tokens before allowing entry to protected routes.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="text-lg font-bold text-emerald-400 flex items-center mb-2"><Check className="w-5 h-5 mr-2" />Advantages</h4>
                            <ul className="list-disc list-inside text-sm space-y-1">
                                <li>Seamless, full-SPA routing without page reloads</li>
                                <li>Dynamic route matching and nested routes</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="text-lg font-bold text-red-400 flex items-center mb-2"><AlertTriangle className="w-5 h-5 mr-2" />Disadvantages / Limitations</h4>
                            <ul className="list-disc list-inside text-sm space-y-1">
                                <li>Complex router configs can become hard to maintain</li>
                                <li>Requires server-side rewrite rules to support HTML5 history mode</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'vue-pinia-state-management',
            title: '10. [Advanced] Pinia State Management (defineStore)',
            definition: 'Pinia is the official lightweight state management library for Vue 3 (replacing Vuex). Define stores via defineStore() with state, getters, and actions.',
            syntax: `import { defineStore } from 'pinia';\nexport const useUserStore = defineStore('user', { state: () => ({ name: 'Vinay' }) });`,
            codeSnippet: `const userStore = useUserStore();\nuserStore.addPoints(50);`,
            realLifeScenario: 'E-commerce single-page apps manage global user authentication tokens and cart state across 50+ components using Pinia stores.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-xl shadow-sm">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2"><BookOpen className="w-5 h-5 mr-2" />Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Pinia is the official lightweight state management library for Vue 3. Define stores via <code className="text-cyan-600 font-mono">defineStore()</code>.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-xl shadow-sm">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2"><Lightbulb className="w-5 h-5 mr-2" />Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Like a central bank where all branches (components) can deposit or withdraw money (state) using a unified set of rules (actions).</p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4"><Layers className="w-5 h-5 mr-2 text-emerald-600" />Visual Explanation</h4>
                        <MermaidDiagram chart={`graph TD
  A[Pinia Store] --> B[State]
  A --> C[Getters]
  A --> D[Actions]
  B --> E[Components]`} />
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center"><Code className="w-5 h-5 mr-2 text-emerald-600" />Sample Code</h4>
                        <CodeBlock code={`export const useStore = defineStore('main', {\n  state: () => ({ counter: 0 }),\n  actions: { increment() { this.counter++ } }\n})`} lang="javascript" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-xl shadow-sm">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2"><Cpu className="w-5 h-5 mr-2" />Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">E-commerce single-page apps manage global user authentication tokens and cart state across 50+ components using Pinia stores.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="text-lg font-bold text-emerald-400 flex items-center mb-2"><Check className="w-5 h-5 mr-2" />Advantages</h4>
                            <ul className="list-disc list-inside text-sm space-y-1">
                                <li>First-class TypeScript support without magic strings</li>
                                <li>No mutations boilerplate unlike Vuex</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="text-lg font-bold text-red-400 flex items-center mb-2"><AlertTriangle className="w-5 h-5 mr-2" />Disadvantages / Limitations</h4>
                            <ul className="list-disc list-inside text-sm space-y-1">
                                <li>Can be overkill for small apps with simple state needs</li>
                                <li>Destructuring stores breaks reactivity without storeToRefs</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'vue-composables',
            title: '11. [Advanced] Composables & Stateful Logic Reusability',
            definition: 'Composables are functions that leverage Vue\'s Composition API to encapsulate and reuse stateful logic across multiple components (useFetch, useMouse).',
            syntax: `export function useMouse() {\n  const x = ref(0);\n  return { x };\n}`,
            codeSnippet: `const { data, error, loading } = useFetch('/api/users');`,
            realLifeScenario: 'Custom composables like `useAuth()` or `useDebounce()` extract API fetching and user input debounce state into reusable modules.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-xl shadow-sm">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2"><BookOpen className="w-5 h-5 mr-2" />Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Composables are functions that leverage Vue's Composition API to encapsulate and reuse stateful logic across multiple components.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-xl shadow-sm">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2"><Lightbulb className="w-5 h-5 mr-2" />Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Like a toolkit of specialized tools (hammer, screwdriver) that you can carry around and use in different rooms (components) whenever needed.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4"><Layers className="w-5 h-5 mr-2 text-emerald-600" />Visual Explanation</h4>
                        <MermaidDiagram chart={`graph TD
  A[Component A] --> B[useFetch Composable]
  C[Component B] --> B
  B --> D[Reactive State]`} />
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center"><Code className="w-5 h-5 mr-2 text-emerald-600" />Sample Code</h4>
                        <CodeBlock code={`export function useCounter() {\n  const count = ref(0);\n  return { count };\n}`} lang="javascript" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-xl shadow-sm">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2"><Cpu className="w-5 h-5 mr-2" />Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Custom composables like <code className="text-cyan-600 font-mono">useAuth()</code> or <code className="text-cyan-600 font-mono">useDebounce()</code> extract API fetching and user input debounce state.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="text-lg font-bold text-emerald-400 flex items-center mb-2"><Check className="w-5 h-5 mr-2" />Advantages</h4>
                            <ul className="list-disc list-inside text-sm space-y-1">
                                <li>Replaces mixins without namespace collisions</li>
                                <li>Makes logic highly reusable and testable</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="text-lg font-bold text-red-400 flex items-center mb-2"><AlertTriangle className="w-5 h-5 mr-2" />Disadvantages / Limitations</h4>
                            <ul className="list-disc list-inside text-sm space-y-1">
                                <li>Requires understanding of reactive dependencies</li>
                                <li>Memory leaks if event listeners aren't properly cleaned up</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'vue-provide-inject',
            title: '12. [Advanced] Provide / Inject API',
            definition: 'provide() and inject() enable dependency injection across deeply nested component trees without passing props through intermediate layers.',
            syntax: `provide('theme', 'dark');\nconst theme = inject('theme', 'light');`,
            codeSnippet: `provide('appTheme', theme);`,
            realLifeScenario: 'Global application theme togglers (Dark Mode / Light Mode) provide theme state to deeply nested UI cards.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-xl shadow-sm">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2"><BookOpen className="w-5 h-5 mr-2" />Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300"><code className="text-cyan-600 font-mono">provide()</code> and <code className="text-cyan-600 font-mono">inject()</code> enable dependency injection across deeply nested component trees without passing props through intermediate layers.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-xl shadow-sm">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2"><Lightbulb className="w-5 h-5 mr-2" />Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Like a building's central air conditioning system (provide) where any room can open a vent to access the air (inject) without piping it through every floor manually.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4"><Layers className="w-5 h-5 mr-2 text-emerald-600" />Visual Explanation</h4>
                        <MermaidDiagram chart={`graph TD
  A[Root Component] -->|Provide| B[Theme State]
  C[Deep Child Component] -->|Inject| B`} />
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center"><Code className="w-5 h-5 mr-2 text-emerald-600" />Sample Code</h4>
                        <CodeBlock code={`// Parent\nprovide('key', 'value');\n// Child\nconst val = inject('key');`} lang="javascript" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-xl shadow-sm">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2"><Cpu className="w-5 h-5 mr-2" />Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Global application theme togglers (Dark Mode / Light Mode) provide theme state to deeply nested UI cards.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="text-lg font-bold text-emerald-400 flex items-center mb-2"><Check className="w-5 h-5 mr-2" />Advantages</h4>
                            <ul className="list-disc list-inside text-sm space-y-1">
                                <li>Solves the "prop drilling" problem natively</li>
                                <li>Can provide reactive variables easily</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="text-lg font-bold text-red-400 flex items-center mb-2"><AlertTriangle className="w-5 h-5 mr-2" />Disadvantages / Limitations</h4>
                            <ul className="list-disc list-inside text-sm space-y-1">
                                <li>Makes data origin harder to trace</li>
                                <li>Not as structured as full state management like Pinia</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        // ==================== PROFESSIONAL TIER ====================
        {
            id: 'vue-nuxt-ssr',
            title: '13. [Professional] Server-Side Rendering & Nuxt 3',
            definition: 'Nuxt 3 is the intuitive Vue framework for Server-Side Rendering (SSR), Static Site Generation (SSG), auto-imports, and file-based routing.',
            syntax: `<script setup>\nconst { data } = await useFetch('/api/courses');\n</script>`,
            codeSnippet: `// pages/index.vue in Nuxt 3`,
            realLifeScenario: 'E-commerce sites and blog portals use Nuxt 3 SSR to ensure search engines crawl fully rendered page content.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-xl shadow-sm">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2"><BookOpen className="w-5 h-5 mr-2" />Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Nuxt 3 is a framework built on top of Vue that handles Server-Side Rendering (SSR), SSG, auto-imports, and file-based routing automatically.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-xl shadow-sm">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2"><Lightbulb className="w-5 h-5 mr-2" />Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Like a chef who pre-cooks the meal in the kitchen (server) and serves it ready-to-eat to the customer, instead of giving the customer ingredients (JS) to cook themselves.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4"><Layers className="w-5 h-5 mr-2 text-emerald-600" />Visual Explanation</h4>
                        <MermaidDiagram chart={`graph TD
  A[Client Request] --> B[Nuxt Server]
  B -->|SSR| C[HTML]
  C --> D[Browser Hydration]`} />
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center"><Code className="w-5 h-5 mr-2 text-emerald-600" />Sample Code</h4>
                        <CodeBlock code={`// pages/index.vue\nconst { data } = await useFetch('/api/hello')`} lang="javascript" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-xl shadow-sm">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2"><Cpu className="w-5 h-5 mr-2" />Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">E-commerce sites and blog portals use Nuxt 3 SSR to ensure search engines crawl fully rendered page content.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="text-lg font-bold text-emerald-400 flex items-center mb-2"><Check className="w-5 h-5 mr-2" />Advantages</h4>
                            <ul className="list-disc list-inside text-sm space-y-1">
                                <li>Excellent SEO out of the box</li>
                                <li>Great developer experience with auto-imports</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="text-lg font-bold text-red-400 flex items-center mb-2"><AlertTriangle className="w-5 h-5 mr-2" />Disadvantages / Limitations</h4>
                            <ul className="list-disc list-inside text-sm space-y-1">
                                <li>Requires a Node.js server for true SSR</li>
                                <li>Hydration mismatches can be tricky to debug</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'vue-performance-v-memo',
            title: '14. [Professional] Performance Optimization (v-memo, defineAsyncComponent)',
            definition: 'Optimize rendering using v-memo (memoize template sub-trees), shallowRef() (non-deep reactivity), and defineAsyncComponent() for code splitting.',
            syntax: `<div v-memo="[item.id === selectedId]">\n</div>`,
            codeSnippet: `const HeavyChart = defineAsyncComponent(() => import('./HeavyChart.vue'));`,
            realLifeScenario: 'Code splitting heavy charting components reduces initial JavaScript bundle sizes by 60%, speeding up webpage interactive loads.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-xl shadow-sm">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2"><BookOpen className="w-5 h-5 mr-2" />Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Optimize rendering using <code className="text-cyan-600 font-mono">v-memo</code>, <code className="text-cyan-600 font-mono">shallowRef()</code>, and <code className="text-cyan-600 font-mono">defineAsyncComponent()</code> for code splitting.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-xl shadow-sm">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2"><Lightbulb className="w-5 h-5 mr-2" />Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Like on-demand video streaming, async components only download the specific parts of an app when the user actually navigates there.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4"><Layers className="w-5 h-5 mr-2 text-emerald-600" />Visual Explanation</h4>
                        <MermaidDiagram chart={`graph TD
  A[v-memo] --> B{Dependencies Changed?}
  B -->|Yes| C[Re-render]
  B -->|No| D[Use Cached VNode]`} />
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center"><Code className="w-5 h-5 mr-2 text-emerald-600" />Sample Code</h4>
                        <CodeBlock code={`const AsyncComp = defineAsyncComponent(() => import('./Comp.vue'))`} lang="javascript" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-xl shadow-sm">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2"><Cpu className="w-5 h-5 mr-2" />Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Code splitting heavy charting components reduces initial JavaScript bundle sizes by 60%.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="text-lg font-bold text-emerald-400 flex items-center mb-2"><Check className="w-5 h-5 mr-2" />Advantages</h4>
                            <ul className="list-disc list-inside text-sm space-y-1">
                                <li>Drastically improves First Contentful Paint (FCP)</li>
                                <li>Saves user bandwidth</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="text-lg font-bold text-red-400 flex items-center mb-2"><AlertTriangle className="w-5 h-5 mr-2" />Disadvantages / Limitations</h4>
                            <ul className="list-disc list-inside text-sm space-y-1">
                                <li>Requires Suspense wrapper for good UX</li>
                                <li>v-memo can introduce subtle UI update bugs if dependencies are wrong</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'vue-testing-vitest',
            title: '15. [Professional] Testing Vue Applications (Vue Test Utils & Vitest)',
            definition: 'Unit test Vue components using Vue Test Utils and Vitest, mounting components via mount(), verifying props/emits, and mocking Pinia stores.',
            syntax: `import { mount } from '@vue/test-utils';\nconst wrapper = mount(MyComponent);`,
            codeSnippet: `expect(wrapper.text()).toContain('Hello');`,
            realLifeScenario: 'CI/CD build pipelines run Vitest unit test suites before deploying Vue 3 production releases.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-xl shadow-sm">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2"><BookOpen className="w-5 h-5 mr-2" />Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Unit test Vue components using Vue Test Utils and Vitest to verify UI output, interactions, and state changes.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-xl shadow-sm">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2"><Lightbulb className="w-5 h-5 mr-2" />Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Like an automated factory QA line that presses all the buttons on a new toy to make sure it doesn't break before shipping it to stores.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4"><Layers className="w-5 h-5 mr-2 text-emerald-600" />Visual Explanation</h4>
                        <MermaidDiagram chart={`graph TD
  A[Vitest] --> B[Mount Component]
  B --> C[Trigger Event]
  C --> D[Assert State/Emit]`} />
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center"><Code className="w-5 h-5 mr-2 text-emerald-600" />Sample Code</h4>
                        <CodeBlock code={`test('renders correctly', () => {\n  const wrapper = mount(MyComponent);\n  expect(wrapper.exists()).toBe(true);\n});`} lang="javascript" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-xl shadow-sm">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2"><Cpu className="w-5 h-5 mr-2" />Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">CI/CD build pipelines run Vitest unit test suites before deploying Vue 3 production releases.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="text-lg font-bold text-emerald-400 flex items-center mb-2"><Check className="w-5 h-5 mr-2" />Advantages</h4>
                            <ul className="list-disc list-inside text-sm space-y-1">
                                <li>Catches bugs before they hit production</li>
                                <li>Vitest is incredibly fast and native to Vite</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="text-lg font-bold text-red-400 flex items-center mb-2"><AlertTriangle className="w-5 h-5 mr-2" />Disadvantages / Limitations</h4>
                            <ul className="list-disc list-inside text-sm space-y-1">
                                <li>Requires time and effort to maintain tests</li>
                                <li>Testing complex UI interactions can be tricky</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'vue-teleport-custom-directives',
            title: '16. [Professional] Enterprise Architecture & Teleport (<Teleport>)',
            definition: 'Teleport (<Teleport to="body">) renders child template nodes into external DOM containers (modals/popups) outside the main component hierarchy.',
            syntax: `<Teleport to="body">\n  <div className="modal-overlay"></div>\n</Teleport>`,
            codeSnippet: `<!-- Modal content teleported to body -->`,
            realLifeScenario: 'Rendering popup modals via `<Teleport to="body">` prevents parent container `overflow: hidden` CSS clipping bugs.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-xl shadow-sm">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2"><BookOpen className="w-5 h-5 mr-2" />Definition</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Teleport renders child template nodes into external DOM containers outside the main component hierarchy.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-xl shadow-sm">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2"><Lightbulb className="w-5 h-5 mr-2" />Real-Life Analogy &amp; Example</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Like a magician stepping into a box in one room and instantly appearing on a stage outside the room, bypassing all the doors in between.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4"><Layers className="w-5 h-5 mr-2 text-emerald-600" />Visual Explanation</h4>
                        <MermaidDiagram chart={`graph TD
  A[Component Tree] --> B[Modal Component]
  B -->|Teleport| C[Body Tag]
  C --> D[Rendered UI]`} />
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center"><Code className="w-5 h-5 mr-2 text-emerald-600" />Sample Code</h4>
                        <CodeBlock code={`<Teleport to="body">\n  <div className="modal">...</div>\n</Teleport>`} lang="html" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-xl shadow-sm">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2"><Cpu className="w-5 h-5 mr-2" />Real-World Application</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Rendering popup modals via <code className="text-cyan-600 font-mono">&lt;Teleport to="body"&gt;</code> prevents parent container overflow CSS clipping bugs.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="text-lg font-bold text-emerald-400 flex items-center mb-2"><Check className="w-5 h-5 mr-2" />Advantages</h4>
                            <ul className="list-disc list-inside text-sm space-y-1">
                                <li>Solves CSS z-index and overflow clipping issues permanently</li>
                                <li>Keeps logical state management centralized in the component</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="text-lg font-bold text-red-400 flex items-center mb-2"><AlertTriangle className="w-5 h-5 mr-2" />Disadvantages / Limitations</h4>
                            <ul className="list-disc list-inside text-sm space-y-1">
                                <li>Target DOM element must exist before mounting</li>
                                <li>Can be slightly confusing for HTML inspectors</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        }
    ];

    const topics = courseData.map(topic => topic.title);
    const activeTopic = courseData[activeTopicIndex];

    return (
        <CoursePageLayout
            title="Vue 3 Masterclass Course"
            description="Master Vue 3 from Composition API, Ref vs Reactive, and Directives to Pinia State, Composables, Nuxt 3 SSR, and Vitest Testing."
            topics={topics}
            icon={Layers}
            colorClass="emerald"
            activeTopicIndex={activeTopicIndex}
            onTopicClick={setActiveTopicIndex}
        >
            <div className="space-y-8">
                {activeTopic.content}
            </div>
        </CoursePageLayout>
    );
};

export default VueCoursePage;
