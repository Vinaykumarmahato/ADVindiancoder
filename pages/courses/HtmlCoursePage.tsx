import React, { useState } from 'react';
import CoursePageLayout from '../../components/CoursePageLayout';
import { FileCode, Code, BookOpen, Lightbulb } from 'lucide-react';


const CodeBlock = ({ code, lang = 'html' }: { code: string, lang?: string }) => (
    <div className="bg-[#1e1e1e] text-gray-200 p-6 rounded-2xl font-mono text-sm mb-6 overflow-x-auto shadow-xl border border-gray-800">
        <div className="flex items-center space-x-2 mb-4 border-b border-gray-700 pb-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-4 text-xs text-gray-500 font-sans">index.html</span>
        </div>
        <pre className="leading-relaxed text-orange-300">{code}</pre>
    </div>
);

const HtmlCoursePage = () => {
    const [activeTopicIndex, setActiveTopicIndex] = useState(0);

    const courseData = [
        // CHAPTER 1
        {
            id: 'ch1-intro',
            title: 'CH 1: Introduction',
            definition: 'Welcome to Chapter 1. In this chapter, we will cover the fundamentals of HTML, how it works, and its basic structure.',
            example: 'Understanding the building blocks of the web.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        HTML (HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser.
                    </p>
                </>
            ),
            codeSnippet: null
        },
        {
            id: 'what-is-html',
            title: 'What is HTML?',
            definition: 'HTML stands for HyperText Markup Language. It is the standard markup language for creating web pages.',
            example: 'HTML describes the structure of a web page semantically.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        HTML elements are the building blocks of HTML pages. With HTML constructs, images and other objects, such as interactive forms, may be embedded into the rendered page.
                    </p>
                </>
            ),
            codeSnippet: `<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

</body>
</html>`
        },
        {
            id: 'how-html-works',
            title: 'How HTML Works',
            definition: 'Web browsers receive HTML documents from a web server or from local storage and render them into multimedia web pages.',
            example: 'The browser reads the HTML tags and translates them into the visual page you see.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.
                    </p>
                </>
            ),
            codeSnippet: null
        },
        {
            id: 'html-structure',
            title: 'Structure of HTML',
            definition: 'An HTML document has a specific structure including the DOCTYPE, html, head, and body tags.',
            example: 'The skeleton of every webpage.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        The <code>&lt;html&gt;</code> element is the root element of an HTML page. The <code>&lt;head&gt;</code> element contains meta information about the HTML page. The <code>&lt;body&gt;</code> element defines the document's body, and is a container for all the visible contents.
                    </p>
                </>
            ),
            codeSnippet: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document Structure</title>
</head>
<body>
    <!-- Content goes here -->
</body>
</html>`
        },
        {
            id: 'block-inline',
            title: 'Block & Inline',
            definition: 'Every HTML element has a default display value, depending on what type of element it is. The two most common display values are block and inline.',
            example: '<div> is a block element. <span> is an inline element.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        A block-level element always starts on a new line and takes up the full width available. An inline element does not start on a new line and only takes up as much width as necessary.
                    </p>
                </>
            ),
            codeSnippet: `<div>This is a block element</div>
<span>This is an inline element</span>`
        },
        {
            id: 'html-attributes',
            title: 'HTML Attributes',
            definition: 'Attributes provide additional information about HTML elements.',
            example: 'href in <a> tag, src in <img> tag.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Attributes are always specified in the start tag and usually come in name/value pairs like: name="value".
                    </p>
                </>
            ),
            codeSnippet: `<a href="https://www.google.com">Link to Google</a>
<img src="image.jpg" alt="Description">`
        },

        // CHAPTER 2
        {
            id: 'ch2-basic-elements',
            title: 'CH 2: Basic Elements',
            definition: 'Chapter 2 covers the most commonly used HTML elements for text and content.',
            example: 'Headings, paragraphs, links, and images.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        These elements form the core content of most web pages.
                    </p>
                </>
            ),
            codeSnippet: null
        },
        {
            id: 'headings',
            title: 'Headings',
            definition: 'HTML headings are defined with the <h1> to <h6> tags.',
            example: '<h1>Main Title</h1>',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        <code>&lt;h1&gt;</code> defines the most important heading. <code>&lt;h6&gt;</code> defines the least important heading.
                    </p>
                </>
            ),
            codeSnippet: `<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>`
        },
        {
            id: 'paragraphs',
            title: 'Paragraphs',
            definition: 'The <p> tag defines a paragraph.',
            example: '<p>This is a paragraph.</p>',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Browsers automatically add a single blank line before and after each <code>&lt;p&gt;</code> element.
                    </p>
                </>
            ),
            codeSnippet: `<p>This is a paragraph.</p>
<p>This is another paragraph.</p>`
        },
        {
            id: 'links',
            title: 'Links',
            definition: 'HTML links are defined with the <a> tag.',
            example: '<a href="url">link text</a>',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        The most important attribute of the <code>&lt;a&gt;</code> element is the href attribute, which indicates the link's destination.
                    </p>
                </>
            ),
            codeSnippet: `<a href="https://www.w3schools.com">Visit W3Schools</a>`
        },
        {
            id: 'images',
            title: 'Images',
            definition: 'HTML images are defined with the <img> tag.',
            example: '<img src="url" alt="text">',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        The source file (src), alternative text (alt), width, and height are provided as attributes.
                    </p>
                </>
            ),
            codeSnippet: `<img src="pic_trulli.jpg" alt="Italian Trulli" width="500" height="333">`
        },
        {
            id: 'lists',
            title: 'Lists (OL, UL, DL)',
            definition: 'HTML offers three ways for specifying lists of information: ordered, unordered, and description lists.',
            example: '<ul> for bullet points, <ol> for numbers.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Use <code>&lt;ul&gt;</code> for unordered lists, <code>&lt;ol&gt;</code> for ordered lists, and <code>&lt;dl&gt;</code> for description lists.
                    </p>
                </>
            ),
            codeSnippet: `<ul>
  <li>Coffee</li>
  <li>Tea</li>
</ul>

<ol>
  <li>First</li>
  <li>Second</li>
</ol>`
        },
        {
            id: 'br-hr',
            title: 'Line Break & HR',
            definition: '<br> defines a line break. <hr> defines a thematic change in the content.',
            example: '<br> for a new line without a new paragraph.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        The <code>&lt;br&gt;</code> tag is an empty tag, which means that it has no end tag. The <code>&lt;hr&gt;</code> tag defines a thematic break in an HTML page (e.g. a shift of topic).
                    </p>
                </>
            ),
            codeSnippet: `<p>This is<br>a paragraph<br>with line breaks.</p>
<hr>`
        },
        {
            id: 'formatting',
            title: 'Text Formatting',
            definition: 'HTML contains several elements for defining text with a special meaning.',
            example: '<b> for bold, <i> for italic.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Examples: <code>&lt;b&gt;</code> (Bold), <code>&lt;strong&gt;</code> (Important), <code>&lt;i&gt;</code> (Italic), <code>&lt;em&gt;</code> (Emphasized), <code>&lt;mark&gt;</code> (Marked), <code>&lt;small&gt;</code> (Smaller), <code>&lt;del&gt;</code> (Deleted), <code>&lt;ins&gt;</code> (Inserted), <code>&lt;sub&gt;</code> (Subscript), <code>&lt;sup&gt;</code> (Superscript).
                    </p>
                </>
            ),
            codeSnippet: `<p><b>This text is bold</b></p>
<p><i>This text is italic</i></p>
<p>This is <sub>subscript</sub> and <sup>superscript</sup></p>`
        },

        // CHAPTER 3
        {
            id: 'ch3-tables',
            title: 'CH 3: Tables',
            definition: 'Chapter 3 focuses on displaying data in a tabular format.',
            example: 'Grids of data with rows and columns.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Tables are useful for arranging data like text, images, links, other tables, etc. into rows and columns of cells.
                    </p>
                </>
            ),
            codeSnippet: null
        },
        {
            id: 'table-structure',
            title: 'Table Structure',
            definition: 'An HTML table is defined with the <table> tag.',
            example: '<table>...</table>',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Each table row is defined with the <code>&lt;tr&gt;</code> tag. A table header is defined with the <code>&lt;th&gt;</code> tag. A table data/cell is defined with the <code>&lt;td&gt;</code> tag.
                    </p>
                </>
            ),
            codeSnippet: `<table>
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
  </tr>
  <tr>
    <td>John</td>
    <td>Doe</td>
  </tr>
</table>`
        },
        {
            id: 'colspan-rowspan',
            title: 'Colspan & Rowspan',
            definition: 'Attributes to make a cell span more than one column or row.',
            example: '<td colspan="2">',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Use <code>colspan</code> to span multiple columns and <code>rowspan</code> to span multiple rows.
                    </p>
                </>
            ),
            codeSnippet: `<table>
  <tr>
    <th colspan="2">Name</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
  </tr>
</table>`
        },

        // CHAPTER 4
        {
            id: 'ch4-forms-basic',
            title: 'CH 4: Forms (Basic)',
            definition: 'Chapter 4 introduces HTML forms for collecting user input.',
            example: 'Login forms, search bars.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        An HTML form is used to collect user input. The user input is most often sent to a server for processing.
                    </p>
                </>
            ),
            codeSnippet: null
        },
        {
            id: 'form-tag',
            title: 'Form Tag',
            definition: 'The <form> element is used to create an HTML form for user input.',
            example: '<form>...</form>',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        The <code>&lt;form&gt;</code> element is a container for different types of input elements, such as: text fields, checkboxes, radio buttons, submit buttons, etc.
                    </p>
                </>
            ),
            codeSnippet: `<form action="/action_page.php">
  <!-- form elements -->
</form>`
        },
        {
            id: 'input-types',
            title: 'Input Types',
            definition: 'The <input> element is the most used form element.',
            example: 'type="text", type="password"',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        An <code>&lt;input&gt;</code> element can be displayed in many ways, depending on the type attribute.
                    </p>
                </>
            ),
            codeSnippet: `<input type="text" name="firstname">
<input type="password" name="psw">
<input type="submit" value="Submit">`
        },
        {
            id: 'labels',
            title: 'Labels',
            definition: 'The <label> tag defines a label for many form elements.',
            example: '<label for="id">Label</label>',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        The <code>&lt;label&gt;</code> element is useful for screen-reader users, because the screen-reader will read out loud the label when the user focus on the input element.
                    </p>
                </>
            ),
            codeSnippet: `<label for="fname">First name:</label>
<input type="text" id="fname" name="fname">`
        },
        {
            id: 'dropdown-select',
            title: 'Dropdown & Select',
            definition: 'The <select> element defines a drop-down list.',
            example: '<select><option>...</option></select>',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        The <code>&lt;option&gt;</code> elements define the available options in the drop-down list.
                    </p>
                </>
            ),
            codeSnippet: `<select name="cars" id="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
</select>`
        },

        // CHAPTER 5
        {
            id: 'ch5-forms-advanced',
            title: 'CH 5: Forms (Adv)',
            definition: 'Chapter 5 covers advanced form features like validation and new HTML5 input types.',
            example: 'Date pickers, sliders, validation.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        HTML5 introduced many new input types and attributes to make forms more powerful and easier to validate.
                    </p>
                </>
            ),
            codeSnippet: null
        },
        {
            id: 'form-validation',
            title: 'Form Validation',
            definition: 'HTML5 includes built-in form validation attributes.',
            example: 'required, min, max, pattern',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        You can use attributes like <code>required</code> to ensure a field is filled, or <code>type="email"</code> to ensure a valid email format.
                    </p>
                </>
            ),
            codeSnippet: `<form>
  <input type="text" name="username" required>
  <input type="email" name="email" required>
  <input type="submit">
</form>`
        },
        {
            id: 'file-upload',
            title: 'File Upload',
            definition: 'The <input type="file"> defines a file-select field and a "Browse" button for file uploads.',
            example: 'Uploading a profile picture.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        To upload files, the form must use <code>method="post"</code> and <code>enctype="multipart/form-data"</code>.
                    </p>
                </>
            ),
            codeSnippet: `<form action="/action_page.php" method="post" enctype="multipart/form-data">
  <input type="file" id="myFile" name="filename">
  <input type="submit">
</form>`
        },

        // CHAPTER 6
        {
            id: 'ch6-semantic-html',
            title: 'CH 6: Semantic HTML',
            definition: 'Semantic HTML introduces meaning to the web page structure.',
            example: '<header>, <footer>, <article> instead of just <div>.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        A semantic element clearly describes its meaning to both the browser and the developer.
                    </p>
                </>
            ),
            codeSnippet: `<header>
  <h1>My Website</h1>
</header>
<nav>
  <a href="/html/">HTML</a>
</nav>
<section>
  <h2>Section Title</h2>
  <p>Content...</p>
</section>
<footer>
  <p>Footer content</p>
</footer>`
        },

        // CHAPTER 7
        {
            id: 'ch7-multimedia',
            title: 'CH 7: Multimedia',
            definition: 'Multimedia on the web is sound, music, videos, movies, and animations.',
            example: 'Audio and Video players.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        HTML5 introduced the <code>&lt;audio&gt;</code> and <code>&lt;video&gt;</code> elements to include multimedia content natively.
                    </p>
                </>
            ),
            codeSnippet: `<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>`
        },
        {
            id: 'iframe',
            title: 'Iframe',
            definition: 'An HTML iframe is used to display a web page within a web page.',
            example: 'Embedding a map or another website.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Syntax: <code>&lt;iframe src="url"&gt;&lt;/iframe&gt;</code>.
                    </p>
                </>
            ),
            codeSnippet: `<iframe src="https://www.w3schools.com" title="W3Schools Free Online Web Tutorials"></iframe>`
        },

        // CHAPTER 8
        {
            id: 'ch8-apis',
            title: 'CH 8: HTML5 APIs',
            definition: 'HTML5 Web APIs allow you to build complex applications.',
            example: 'Geolocation, Drag and Drop, Web Storage.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        APIs (Application Programming Interfaces) extend the functionality of the browser.
                    </p>
                </>
            ),
            codeSnippet: null
        },
        {
            id: 'web-storage',
            title: 'Web Storage',
            definition: 'Web storage allows web applications to store data locally within the user\'s browser.',
            example: 'localStorage and sessionStorage.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Before HTML5, application data had to be stored in cookies, included in every server request. Web storage is more secure, and large amounts of data can be stored locally.
                    </p>
                </>
            ),
            codeSnippet: `// Store
localStorage.setItem("lastname", "Smith");

// Retrieve
document.getElementById("result").innerHTML = localStorage.getItem("lastname");`
        },

        // CHAPTER 9
        {
            id: 'ch9-layout',
            title: 'CH 9: Layout',
            definition: 'HTML Layout techniques to create structured pages.',
            example: 'Using divs and semantic tags to arrange content.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Websites often display content in multiple columns (like a magazine or newspaper).
                    </p>
                </>
            ),
            codeSnippet: null
        },
        {
            id: 'div-span',
            title: 'Div & Span',
            definition: '<div> is a block-level container. <span> is an inline container.',
            example: '<div> for sections, <span> for styling text parts.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        The <code>&lt;div&gt;</code> element is often used as a container for other HTML elements. The <code>&lt;span&gt;</code> element is often used as a container for some text.
                    </p>
                </>
            ),
            codeSnippet: `<div style="background-color:black;color:white;padding:20px;">
  <h2>London</h2>
  <p>London is the capital city of England.</p>
</div>`
        },

        // CHAPTER 10
        {
            id: 'ch10-meta-seo',
            title: 'CH 10: Meta & SEO',
            definition: 'Meta tags provide metadata about the HTML document.',
            example: 'Description, keywords, author, viewport.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Metadata is data (information) about data. <code>&lt;meta&gt;</code> tags always go inside the <code>&lt;head&gt;</code> element.
                    </p>
                </>
            ),
            codeSnippet: `<head>
  <meta charset="UTF-8">
  <meta name="description" content="Free Web tutorials">
  <meta name="keywords" content="HTML, CSS, JavaScript">
  <meta name="author" content="John Doe">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>`
        },

        // CHAPTER 11
        {
            id: 'ch11-accessibility',
            title: 'CH 11: Accessibility',
            definition: 'Web accessibility means that websites, tools, and technologies are designed and developed so that people with disabilities can use them.',
            example: 'Using alt text for images, ARIA labels.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Accessibility is essential for developers and organizations that want to create high-quality websites and web tools, and not exclude people from using their products and services.
                    </p>
                </>
            ),
            codeSnippet: `<img src="img_chania.jpg" alt="Flowers in Chania">
<button aria-label="Close">X</button>`
        },

        // CHAPTER 12
        {
            id: 'ch12-best-practices',
            title: 'CH 12: Best Practices',
            definition: 'Writing clean, maintainable, and standard-compliant HTML.',
            example: 'Indentation, lowercase tags, quoting attributes.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Follow W3C standards and best practices to ensure your code is readable and works across different browsers.
                    </p>
                </>
            ),
            codeSnippet: `<!-- Good -->
<section>
  <h2>Title</h2>
  <p>Content</p>
</section>

<!-- Bad -->
<SECTION><H2>TITLE</H2><P>CONTENT</P></SECTION>`
        },

        // CHAPTER 13
        {
            id: 'ch13-web-components',
            title: 'CH 13: Web Components',
            definition: 'Web Components are a set of web platform APIs that allow you to create new custom, reusable, encapsulated HTML tags to use in web pages and web apps.',
            example: '<my-custom-element></my-custom-element>',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Custom Elements, Shadow DOM, and HTML Templates are the main technologies used.
                    </p>
                </>
            ),
            codeSnippet: `<template id="my-paragraph">
  <p>My paragraph</p>
</template>`
        },

        // CHAPTER 14
        {
            id: 'ch14-optimization',
            title: 'CH 14: Optimization',
            definition: 'Optimizing HTML for faster load times and better performance.',
            example: 'Lazy loading, minification, preloading.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Performance optimization is crucial for user experience and SEO.
                    </p>
                </>
            ),
            codeSnippet: `<img src="image.jpg" loading="lazy" alt="Lazy loaded image">
<link rel="preload" href="style.css" as="style">`
        },

        // CHAPTER 15
        {
            id: 'ch15-projects',
            title: 'CH 15: Projects',
            definition: 'Apply what you learned by building real-world projects.',
            example: 'Portfolio, Landing Page, Dashboard.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Building projects is the best way to solidify your knowledge. Start with a simple webpage and move to complex layouts.
                    </p>
                </>
            ),
            codeSnippet: `<!-- Project Structure Example -->
<!DOCTYPE html>
<html>
<head>...</head>
<body>
  <header>...</header>
  <main>...</main>
  <footer>...</footer>
</body>
</html>`
        }
    ];

    const topics = courseData.map(topic => topic.title);
    const activeTopic = courseData[activeTopicIndex];

    return (
        <CoursePageLayout
            title="HTML5 Masterclass"
            description="The complete guide to HTML5, from basics to advanced concepts, APIs, and best practices."
            topics={topics}
            icon={FileCode}
            colorClass="orange"
            activeTopicIndex={activeTopicIndex}
            onTopicClick={setActiveTopicIndex}
        >
            <div className="space-y-8">
                {/* Definition Section */}
                <div className="bg-orange-50 dark:bg-orange-900/10 border-l-4 border-orange-600 p-6 rounded-r-xl">
                    <h3 className="text-lg font-bold text-orange-800 dark:text-orange-300 mb-2 flex items-center">
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
                                <Code className="w-6 h-6 mr-2 text-orange-600" />
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

export default HtmlCoursePage;
