import React, { useState } from 'react';
import CoursePageLayout from '../../components/CoursePageLayout';
import { Palette, Terminal, BookOpen, Code, Lightbulb } from 'lucide-react';

const AdvCssCoursePage = () => {
    const [activeTopicIndex, setActiveTopicIndex] = useState(0);

    const courseData = [
        {
            id: 'intro',
            title: 'Advanced CSS Intro',
            definition: 'Advanced CSS involves using complex selectors, modern layout modules like Flexbox and Grid, animations, and responsive design techniques to create sophisticated web interfaces.',
            example: 'Think of basic CSS as painting a wall one color. Advanced CSS is like creating a mural with textures, depth, and lighting effects that change depending on where you stand (responsive design).',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Welcome to the Advanced CSS Course. This course moves beyond the basics of styling text and colors. You will master the tools needed to build professional, responsive, and interactive layouts.
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                        We will cover everything from the logic of selectors to the magic of animations.
                    </p>
                </>
            )
        },
        {
            id: 'advanced-selectors',
            title: 'Advanced Selectors',
            definition: 'Advanced selectors allow you to target specific elements based on their attributes, state, or position in the HTML structure, without needing to add extra classes or IDs.',
            example: 'Imagine you want to style every link that points to a PDF file differently. Instead of adding a class="pdf" to every link, you can use an attribute selector like a[href$=".pdf"].',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        CSS selectors are the core of styling. While class and ID selectors are common, attribute selectors and pseudo-classes give you surgical precision.
                    </p>
                    <h3 className="text-lg font-bold mt-4 mb-2">Attribute Selectors</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        These select elements based on the presence or value of a given attribute.
                    </p>
                </>
            ),
            codeSnippet: `/* Selects all <a> elements with a target attribute */
a[target] {
  background-color: yellow;
}

/* Selects all <input> elements with type="text" */
input[type="text"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}`
        },
        {
            id: 'css-variables',
            title: 'CSS Variables',
            definition: 'CSS Variables (Custom Properties) are entities defined by CSS authors that contain specific values to be reused throughout a document.',
            example: 'If you use a specific shade of blue #007bff in 50 different places, changing it requires 50 edits. With a variable --primary-color: #007bff, you change it in one place, and the whole site updates.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        They are set using custom property notation (e.g., <code>--main-color: black;</code>) inside a selector (usually <code>:root</code> for global scope) and are accessed using the <code>var()</code> function.
                    </p>
                </>
            ),
            codeSnippet: `:root {
  --main-bg-color: coral;
  --main-txt-color: white; 
  --padding: 15px;
}

div {
  background-color: var(--main-bg-color);
  color: var(--main-txt-color);
  padding: var(--padding);
}`
        },
        {
            id: 'css-box-sizing',
            title: 'CSS Box Sizing',
            definition: 'The box-sizing property defines how the width and height of an element are calculated: should they include padding and borders, or not?',
            example: 'Imagine buying a 10-inch frame. If the frame itself is 1 inch thick, the space for the photo is only 8 inches. With box-sizing: border-box, the 10 inches includes the frame, so you know exactly how much space the element takes up on the wall.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Without this, if you set an element's width to 100px and add 10px padding, the actual rendered width becomes 120px, which breaks layouts. <code>border-box</code> fixes this.
                    </p>
                </>
            ),
            codeSnippet: `* {
  box-sizing: border-box;
}

.box {
  width: 300px;
  padding: 20px;
  border: 5px solid blue;
  /* Total width remains 300px, content shrinks to fit */
}`
        },
        {
            id: 'css-flexbox',
            title: 'CSS Flexbox',
            definition: 'Flexbox (Flexible Box Layout) is a one-dimensional layout method for laying out items in rows or columns.',
            example: 'Think of a necklace with beads. You can slide the beads to be close together, spread apart, or centered. Flexbox gives you that control over elements in a container.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        It works on a parent container (flex container) and its direct children (flex items). It is perfect for aligning items and distributing space.
                    </p>
                </>
            ),
            codeSnippet: `.container {
  display: flex;
  justify-content: center; /* Aligns horizontally */
  align-items: center;     /* Aligns vertically */
  flex-direction: row;     /* Default: row. Can be column */
}

.item {
  flex: 1; /* Grow to fill space equally */
}`
        },
        {
            id: 'css-grid',
            title: 'CSS Grid',
            definition: 'CSS Grid Layout is a two-dimensional layout system for the web. It lets you lay out items in rows and columns.',
            example: 'Think of a spreadsheet or a tiled floor. You can define exactly where each item goes, how many columns it spans, and how many rows it takes up.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Unlike Flexbox which is 1D, Grid is 2D. It is the most powerful layout system available in CSS.
                    </p>
                </>
            ),
            codeSnippet: `.grid-container {
  display: grid;
  grid-template-columns: auto auto auto; /* 3 columns */
  gap: 10px;
}

.grid-item {
  background-color: #f1f1f1;
  padding: 20px;
  text-align: center;
}`
        },
        {
            id: 'css-flexbox-vs-grid',
            title: 'CSS Flexbox vs Grid',
            definition: 'Understanding when to use Flexbox (1D) versus Grid (2D) is key to modern layout design.',
            example: 'Use Flexbox for a navigation bar (a line of items). Use Grid for a photo gallery or a full page layout (header, sidebar, main content, footer).',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        <strong>Flexbox</strong> is content-first (layout based on content size). <strong>Grid</strong> is layout-first (content fits into layout).
                    </p>
                </>
            ),
            codeSnippet: `/* Flexbox Example: Navbar */
.navbar {
  display: flex;
  justify-content: space-between;
}

/* Grid Example: Page Layout */
.layout {
  display: grid;
  grid-template-areas:
    'header header'
    'sidebar content'
    'footer footer';
}`
        },
        {
            id: 'css-media-queries',
            title: 'CSS Media Queries',
            definition: 'Media queries are a CSS technique introduced in CSS3. It uses the @media rule to include a block of CSS properties only if a certain condition is true.',
            example: 'It is like a chameleon changing colors based on its environment. Your website can look one way on a phone and completely different on a desktop.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        They are the backbone of Responsive Web Design. You can check for width, height, orientation, and more.
                    </p>
                </>
            ),
            codeSnippet: `body {
  background-color: lightgreen;
}

/* On screens that are 600px wide or less, background becomes lightblue */
@media only screen and (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}`
        },
        {
            id: 'css-mq-examples',
            title: 'CSS MQ Examples',
            definition: 'Standard breakpoints are commonly used widths that correspond to popular device sizes.',
            example: 'A breakpoint at 768px typically separates "tablet" styles from "mobile" styles.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Here are common breakpoints for standard devices like phones, tablets, and laptops.
                    </p>
                </>
            ),
            codeSnippet: `/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {...}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {...}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {...}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {...}`
        },
        {
            id: 'css-transitions',
            title: 'CSS Transitions',
            definition: 'CSS transitions provide a way to control animation speed when changing CSS properties.',
            example: 'When you hover over a button, instead of it instantly turning blue, it slowly fades from gray to blue over 0.5 seconds. That is a transition.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        You can control the property to animate, the duration, the timing function (easing), and the delay.
                    </p>
                </>
            ),
            codeSnippet: `div {
  width: 100px;
  height: 100px;
  background: red;
  transition: width 2s, background-color 2s;
}

div:hover {
  width: 300px;
  background-color: blue;
}`
        },
        {
            id: 'css-animations',
            title: 'CSS Animations',
            definition: 'CSS Animations allow you to animate transitions from one CSS style configuration to another.',
            example: 'A loading spinner that rotates 360 degrees infinitely is a common use of CSS animations.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        You specify keyframes using the <code>@keyframes</code> rule, which define the styles at certain points in time.
                    </p>
                </>
            ),
            codeSnippet: `@keyframes slidein {
  from { margin-left: 100%; width: 300%; }
  to { margin-left: 0%; width: 100%; }
}

div {
  animation-name: slidein;
  animation-duration: 3s;
  animation-iteration-count: infinite;
}`
        },
        {
            id: 'css-transforms-2d',
            title: 'CSS Transforms 2D',
            definition: 'CSS transforms let you rotate, scale, skew, or translate an element.',
            example: 'Tilting an image slightly when you hover over it, or moving a modal window into the center of the screen.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        2D transforms work on the X and Y axes.
                    </p>
                </>
            ),
            codeSnippet: `div {
  transform: translate(50px, 100px); /* Move x, y */
  transform: rotate(20deg);          /* Rotate clockwise */
  transform: scale(2, 3);            /* Scale width, height */
  transform: skewX(20deg);           /* Skew along X-axis */
}`
        },
        {
            id: 'css-transforms-3d',
            title: 'CSS Transforms 3D',
            definition: 'CSS 3D transforms extend 2D transforms by adding a Z-axis, allowing elements to be manipulated in 3D space.',
            example: 'A card flip effect where you see the back of the card when you hover is done with 3D transforms.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        You need to set a <code>perspective</code> on the parent element to create the 3D effect.
                    </p>
                </>
            ),
            codeSnippet: `div {
  transform: rotateX(150deg);
  transform: rotateY(20deg);
  transform: perspective(500px) translate3d(10px, 0px, 0px);
}`
        },
        {
            id: 'css-tooltips',
            title: 'CSS Tooltips',
            definition: 'A tooltip is a message that appears when a cursor is positioned over an icon, image, hyperlink, or other element.',
            example: 'Hovering over a "Help" icon to see a small popup explaining what a feature does.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Pure CSS tooltips use the <code>:hover</code> pseudo-class and absolute positioning.
                    </p>
                </>
            ),
            codeSnippet: `.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  
  /* Position the tooltip */
  position: absolute;
  z-index: 1;
  bottom: 100%;
  left: 50%;
  margin-left: -60px;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}`
        },
        {
            id: 'css-styling-images',
            title: 'CSS Styling Images',
            definition: 'CSS can be used to control the size, shape, and visual effects of images.',
            example: 'Making a square profile picture into a perfect circle using border-radius.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        You can also make images responsive so they scale with the screen size.
                    </p>
                </>
            ),
            codeSnippet: `img {
  border-radius: 50%; /* Circular image */
  max-width: 100%;    /* Responsive width */
  height: auto;       /* Maintain aspect ratio */
  opacity: 0.8;
}

img:hover {
  opacity: 1.0;
}`
        },
        {
            id: 'css-object-fit',
            title: 'CSS Object-fit',
            definition: 'The object-fit property specifies how the content of a replaced element, such as an <img> or <video>, should be resized to fit its container.',
            example: 'Ensuring a user-uploaded photo fills a square box without being stretched or squashed.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        It acts similar to <code>background-size</code> for background images.
                    </p>
                </>
            ),
            codeSnippet: `img {
  width: 200px;
  height: 300px;
  object-fit: cover; /* Cut off sides, keep aspect ratio */
  /* Other values: fill, contain, none, scale-down */
}`
        },
        {
            id: 'css-masking',
            title: 'CSS Masking',
            definition: 'CSS Masking provides the ability to define a mask to apply to an element, determining which parts of the element are visible.',
            example: 'Fading out the edges of an image or cutting it into a star shape using a mask image.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        It works by using an image or a gradient as a mask.
                    </p>
                </>
            ),
            codeSnippet: `.mask1 {
  -webkit-mask-image: url(logo.png);
  mask-image: url(logo.png);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;    
}`
        },
        {
            id: 'css-buttons',
            title: 'CSS Buttons',
            definition: 'Styling buttons involves changing their background, border, color, padding, and adding interactive states like hover and active.',
            example: 'A "Sign Up" button that changes color and lifts up slightly when you hover over it.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Buttons are a primary call to action, so they need to look clickable and prominent.
                    </p>
                </>
            ),
            codeSnippet: `.button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  transition-duration: 0.4s;
}

.button:hover {
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24);
}`
        },
        {
            id: 'css-pagination',
            title: 'CSS Pagination',
            definition: 'Pagination is the process of separating content into discrete pages.',
            example: 'The "1 2 3 ... Next" links at the bottom of a Google search result page.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        CSS is used to style these links to look like a cohesive navigation bar.
                    </p>
                </>
            ),
            codeSnippet: `.pagination a {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  transition: background-color .3s;
}

.pagination a.active {
  background-color: #4CAF50;
  color: white;
}

.pagination a:hover:not(.active) {background-color: #ddd;}`
        },
        {
            id: 'css-multiple-columns',
            title: 'CSS Multiple Columns',
            definition: 'The CSS Multi-column Layout Module allows content to flow into multiple columns.',
            example: 'Laying out text like a newspaper article or a magazine spread.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        You can specify the number of columns or the width of the columns.
                    </p>
                </>
            ),
            codeSnippet: `.newspaper {
  column-count: 3;
  column-gap: 40px;
  column-rule: 1px solid lightblue;
}`
        },
        {
            id: 'css-filters',
            title: 'CSS Filters',
            definition: 'The filter property provides access to effects like blur or color shifting on an element’s rendering before the element is displayed.',
            example: 'Turning a color photo into black and white, or blurring a background image.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Common functions include <code>blur()</code>, <code>brightness()</code>, <code>contrast()</code>, and <code>grayscale()</code>.
                    </p>
                </>
            ),
            codeSnippet: `img {
  filter: grayscale(100%); /* Black and white */
  filter: blur(5px);       /* Blurred */
  filter: brightness(150%); /* Brighter */
  filter: contrast(200%);  /* High contrast */
}`
        },
        {
            id: 'css-gradients',
            title: 'CSS Gradients',
            definition: 'CSS gradients let you display smooth transitions between two or more specified colors.',
            example: 'A background that fades from blue at the top to purple at the bottom.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        They can be linear (straight line), radial (from center), or conic (rotated).
                    </p>
                </>
            ),
            codeSnippet: `/* Radial Gradient */
.radial {
  background-image: radial-gradient(red, yellow, green);
}

/* Conic Gradient */
.conic {
  background-image: conic-gradient(red, yellow, green);
  border-radius: 50%;
}`
        },
        {
            id: 'css-shadows',
            title: 'CSS Shadows',
            definition: 'CSS shadows add depth to elements by simulating a light source.',
            example: 'Making a card look like it is floating above the page using a drop shadow.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Use <code>text-shadow</code> for text and <code>box-shadow</code> for block elements.
                    </p>
                </>
            ),
            codeSnippet: `h1 {
  text-shadow: 2px 2px 5px red;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}`
        },
        {
            id: 'css-web-fonts',
            title: 'CSS Web Fonts',
            definition: 'Web fonts allow you to use fonts that are not installed on the user\'s computer.',
            example: 'Using a unique, branded font for your website headings instead of standard Arial or Times New Roman.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        You define them using the <code>@font-face</code> rule and point to the font file on your server or a CDN.
                    </p>
                </>
            ),
            codeSnippet: `@font-face {
  font-family: myFirstFont;
  src: url(sansation_light.woff);
}

div {
  font-family: myFirstFont;
}`
        }
    ];

    const topics = courseData.map(topic => topic.title);
    const activeTopic = courseData[activeTopicIndex];

    const CodeBlock = ({ code, lang = 'css' }: { code: string, lang?: string }) => (
        <div className="bg-[#1e1e1e] text-gray-200 p-6 rounded-2xl font-mono text-sm mb-6 overflow-x-auto shadow-xl border border-gray-800">
            <div className="flex items-center space-x-2 mb-4 border-b border-gray-700 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-xs text-gray-500 font-sans uppercase">{lang}</span>
            </div>
            <pre className="leading-relaxed text-blue-300">{code}</pre>
        </div>
    );

    return (
        <CoursePageLayout
            title="Advanced CSS"
            description="Master modern CSS with Flexbox, Grid, Animations, and Responsive Design."
            topics={topics}
            icon={Palette}
            colorClass="purple"
            activeTopicIndex={activeTopicIndex}
            onTopicClick={setActiveTopicIndex}
        >
            <div className="space-y-8">
                {/* Definition Section */}
                <div className="bg-purple-50 dark:bg-purple-900/10 border-l-4 border-purple-600 p-6 rounded-r-xl">
                    <h3 className="text-lg font-bold text-purple-800 dark:text-purple-300 mb-2 flex items-center">
                        <BookOpen className="w-5 h-5 mr-2" />
                        Definition
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {activeTopic.definition}
                    </p>
                </div>

                {/* Real-time Example Section */}
                <div className="bg-green-50 dark:bg-green-900/10 border-l-4 border-green-600 p-6 rounded-r-xl">
                    <h3 className="text-lg font-bold text-green-800 dark:text-green-300 mb-2 flex items-center">
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
                                <Code className="w-6 h-6 mr-2 text-blue-600" />
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

export default AdvCssCoursePage;