import React, { useState } from 'react';
import CoursePageLayout from '../../components/CoursePageLayout';
import { Layers, Code, BookOpen, Lightbulb } from 'lucide-react';

const VueCoursePage = () => {
  const [activeTopicIndex, setActiveTopicIndex] = useState(0);

  const courseData = [
    {
      id: 'vue-intro',
      title: 'Vue Intro',
      definition: 'Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces.',
      example: 'Vue is used to build interactive web interfaces and single-page applications.',
      content: (
        <>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            It builds on top of standard HTML, CSS, and JavaScript and provides a declarative and component-based programming model.
          </p>
        </>
      ),
      codeSnippet: `import { createApp } from 'vue'

createApp({
  data() {
    return {
      count: 0
    }
  }
}).mount('#app')`
    },
    {
      id: 'vue-getting-started',
      title: 'Vue Getting Started',
      definition: 'To start with Vue, you can use the CDN or install it via npm.',
      example: 'Including Vue via a script tag in your HTML.',
      content: (
        <>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            For prototyping or learning purposes, you can use the latest version with:
          </p>
        </>
      ),
      codeSnippet: `<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

<div id="app">{{ message }}</div>

<script>
  const { createApp } = Vue
  createApp({
    data() {
      return {
        message: 'Hello Vue!'
      }
    }
  }).mount('#app')
</script>`
    },
    {
      id: 'vue-template-syntax',
      title: 'Vue Template Syntax',
      definition: 'Vue uses an HTML-based template syntax that allows you to declaratively bind the rendered DOM to the underlying component instance\'s data.',
      example: '{{ msg }} interpolates the msg property.',
      content: (
        <>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            All Vue templates are syntactically valid HTML that can be parsed by spec-compliant browsers and HTML parsers.
          </p>
        </>
      ),
      codeSnippet: `<span>Message: {{ msg }}</span>
<div v-html="rawHtml"></div>
<div v-bind:id="dynamicId"></div>`
    },
    {
      id: 'vue-reactivity',
      title: 'Vue Reactivity',
      definition: 'Vue\'s reactivity system is one of its most distinct features. It allows you to define reactive state.',
      example: 'ref(0) creates a reactive reference.',
      content: (
        <>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            When you modify the state, the view updates. It makes state management simple and intuitive.
          </p>
        </>
      ),
      codeSnippet: `import { ref } from 'vue'

const count = ref(0)
count.value++ // 1`
    },
    {
      id: 'vue-computed-properties',
      title: 'Vue Computed Properties',
      definition: 'Computed properties are cached based on their reactive dependencies.',
      example: 'A computed property that filters a list.',
      content: (
        <>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            A computed property will only re-evaluate when some of its reactive dependencies have changed.
          </p>
        </>
      ),
      codeSnippet: `const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? 'Yes' : 'No'
})`
    },
    {
      id: 'vue-class-style',
      title: 'Vue Class & Style',
      definition: 'A common need for data binding is manipulating an element\'s class list and inline styles.',
      example: ':class="{ active: isActive }" toggles the active class.',
      content: (
        <>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Vue provides special enhancements for v-bind when used with class and style.
          </p>
        </>
      ),
      codeSnippet: `<div :class="{ active: isActive }"></div>`
    },
    {
      id: 'vue-conditional-rendering',
      title: 'Vue Conditional Rendering',
      definition: 'The directive v-if is used to conditionally render a block.',
      example: 'v-if="awesome" renders the element if awesome is true.',
      content: (
        <>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            The block will only be rendered if the directive's expression returns a truthy value.
          </p>
        </>
      ),
      codeSnippet: `<h1 v-if="awesome">Vue is awesome!</h1>
<h1 v-else>Oh no 😢</h1>`
    },
    {
      id: 'vue-list-rendering',
      title: 'Vue List Rendering',
      definition: 'We can use the v-for directive to render a list of items based on an array.',
      example: 'v-for="item in items" renders a list item for each item.',
      content: (
        <>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            The v-for directive requires a special syntax in the form of item in items, where items is the source data array and item is an alias for the array element being iterated on.
          </p>
        </>
      ),
      codeSnippet: `<li v-for="item in items">
  {{ item.message }}
</li>`
    },
    {
      id: 'vue-event-handling',
      title: 'Vue Event Handling',
      definition: 'We can use the v-on directive (short for @) to listen to DOM events.',
      example: '@click="count++" increments count on click.',
      content: (
        <>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            We can use v-on to listen to DOM events and run some JavaScript when they're triggered.
          </p>
        </>
      ),
      codeSnippet: `<button @click="count++">Add 1</button>`
    },
    {
      id: 'vue-form-input',
      title: 'Vue Form Input',
      definition: 'You can use the v-model directive to create two-way data bindings on form input, textarea, and select elements.',
      example: 'v-model="text" binds the input value to the text property.',
      content: (
        <>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            It automatically picks the correct way to update the element based on the input type.
          </p>
        </>
      ),
      codeSnippet: `<input v-model="text">`
    },
    {
      id: 'vue-components',
      title: 'Vue Components',
      definition: 'Components allow us to split the UI into independent and reusable pieces.',
      example: 'A Button component that can be reused throughout the app.',
      content: (
        <>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            It's common for an app to be organized into a tree of nested components.
          </p>
        </>
      ),
      codeSnippet: `import { ref } from 'vue'

export default {
  setup() {
    const count = ref(0)
    return { count }
  },
  template: \`
    <button @click="count++">
      You clicked me {{ count }} times.
    </button>\`
}`
    }
  ];

  const topics = courseData.map(topic => topic.title);
  const activeTopic = courseData[activeTopicIndex];

  const CodeBlock = ({ code, lang = 'javascript' }: { code: string, lang?: string }) => (
    <div className="bg-[#1e1e1e] text-gray-200 p-6 rounded-2xl font-mono text-sm mb-6 overflow-x-auto shadow-xl border border-gray-800">
      <div className="flex items-center space-x-2 mb-4 border-b border-gray-700 pb-4">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="ml-4 text-xs text-gray-500 font-sans">{lang === 'javascript' ? 'App.vue' : 'index.html'}</span>
      </div>
      <pre className="leading-relaxed text-green-300">{code}</pre>
    </div>
  );

  return (
    <CoursePageLayout
      title="Vue.js Tutorial"
      description="Vue.js is a progressive JavaScript framework for building user interfaces. It is designed from the ground up to be incrementally adoptable."
      topics={topics}
      icon={Layers}
      colorClass="green"
      activeTopicIndex={activeTopicIndex}
      onTopicClick={setActiveTopicIndex}
    >
      <div className="space-y-8">
        {/* Definition Section */}
        <div className="bg-green-50 dark:bg-green-900/10 border-l-4 border-green-600 p-6 rounded-r-xl">
          <h3 className="text-lg font-bold text-green-800 dark:text-green-300 mb-2 flex items-center">
            <BookOpen className="w-5 h-5 mr-2" />
            Definition
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {activeTopic.definition}
          </p>
        </div>

        {/* Real-time Example Section */}
        <div className="bg-yellow-50 dark:bg-yellow-900/10 border-l-4 border-yellow-600 p-6 rounded-r-xl">
          <h3 className="text-lg font-bold text-yellow-800 dark:text-yellow-300 mb-2 flex items-center">
            <Lightbulb className="w-5 h-5 mr-2" />
            Real-time Example
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {activeTopic.example}
          </p>
        </div>

        {/* Main Content & Code */}
        <div className="prose dark:prose-invert max-w-none">
          {activeTopic.content}

          {activeTopic.codeSnippet && (
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4 flex items-center text-gray-800 dark:text-white">
                <Code className="w-6 h-6 mr-2 text-green-600" />
                Code Example
              </h3>
              <CodeBlock code={activeTopic.codeSnippet} />
            </div>
          )}
        </div>
      </div>
    </CoursePageLayout>
  );
};

export default VueCoursePage;
