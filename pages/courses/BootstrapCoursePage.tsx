import React, { useState } from 'react';
import CoursePageLayout from '../../components/CoursePageLayout';
import { Layout, Code, BookOpen, Lightbulb } from 'lucide-react';

const BootstrapCoursePage = () => {
  const [activeTopicIndex, setActiveTopicIndex] = useState(0);

  const courseData = [
    {
      id: 'bs5-get-started',
      title: 'BS5 Get Started',
      definition: 'Bootstrap 5 is the newest version of Bootstrap, which is the most popular HTML, CSS, and JavaScript framework for creating responsive, mobile-first websites.',
      example: 'Including Bootstrap CSS and JS via CDN.',
      content: (
        <>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Bootstrap 5 is completely free to download and use!
          </p>
        </>
      ),
      codeSnippet: `<!-- CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- JavaScript -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>`
    },
    {
      id: 'bs5-containers',
      title: 'BS5 Containers',
      definition: 'Containers are the most basic layout element in Bootstrap and are required when using our default grid system.',
      example: '.container provides a responsive fixed width container.',
      content: (
        <>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Bootstrap requires a containing element to wrap site contents. There are two container classes to choose from: .container and .container-fluid.
          </p>
        </>
      ),
      codeSnippet: `<div class="container">
  <!-- Content here -->
</div>

<div class="container-fluid">
  <!-- Full width content here -->
</div>`
    },
    {
      id: 'bs5-grid-basic',
      title: 'BS5 Grid Basic',
      definition: 'Bootstrap\'s grid system allows up to 12 columns across the page.',
      example: 'Three equal columns using .col-sm-4.',
      content: (
        <>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            If you do not want to use all 12 columns individually, you can group the columns together to create wider columns.
          </p>
        </>
      ),
      codeSnippet: `<div class="row">
  <div class="col-sm-4">.col-sm-4</div>
  <div class="col-sm-4">.col-sm-4</div>
  <div class="col-sm-4">.col-sm-4</div>
</div>`
    },
    {
      id: 'bs5-typography',
      title: 'BS5 Typography',
      definition: 'Bootstrap 5 styles HTML headings (h1 to h6) with a bolder font-weight and an increased font-size.',
      example: '.display-1 creates a large, standout heading.',
      content: (
        <>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Bootstrap 5 defaults to a font-size of 1rem (16px), and a line-height of 1.5.
          </p>
        </>
      ),
      codeSnippet: `<h1 class="display-1">Display 1</h1>
<p class="lead">This is a lead paragraph.</p>`
    },
    {
      id: 'bs5-colors',
      title: 'BS5 Colors',
      definition: 'Bootstrap 5 has some contextual classes that can be used to provide "meaning through colors".',
      example: '.text-success makes text green.',
      content: (
        <>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            The classes for text colors are: .text-muted, .text-primary, .text-success, .text-info, .text-warning, .text-danger, .text-secondary, .text-white, .text-dark, .text-body (default body color/often black) and .text-light.
          </p>
        </>
      ),
      codeSnippet: `<p class="text-primary">.text-primary</p>
<p class="text-success">.text-success</p>
<p class="bg-danger text-white">.bg-danger</p>`
    },
    {
      id: 'bs5-tables',
      title: 'BS5 Tables',
      definition: 'A basic Bootstrap 5 table has a light padding and horizontal dividers.',
      example: '.table-striped adds zebra-striping to the table.',
      content: (
        <>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            The .table class adds basic styling (light padding and horizontal dividers) to a table.
          </p>
        </>
      ),
      codeSnippet: `<table class="table table-striped table-hover">
  <thead>
    <tr>
      <th>Firstname</th>
      <th>Lastname</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John</td>
      <td>Doe</td>
      <td>john@example.com</td>
    </tr>
  </tbody>
</table>`
    },
    {
      id: 'bs5-images',
      title: 'BS5 Images',
      definition: 'Bootstrap 5 provides classes for styling images.',
      example: '.img-fluid makes an image responsive.',
      content: (
        <>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            .img-fluid makes the image scale nicely to the parent element.
          </p>
        </>
      ),
      codeSnippet: `<img src="cinqueterre.jpg" class="img-fluid" alt="Cinque Terre"> 
<img src="cinqueterre.jpg" class="rounded" alt="Cinque Terre">`
    },
    {
      id: 'bs5-alerts',
      title: 'BS5 Alerts',
      definition: 'Alerts provide a way to create predefined messages for user actions.',
      example: '.alert-success indicates a successful action.',
      content: (
        <>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Alerts are created with the .alert class, followed by one of the contextual classes: .alert-success, .alert-info, .alert-warning, .alert-danger, .alert-primary, .alert-secondary, .alert-light or .alert-dark.
          </p>
        </>
      ),
      codeSnippet: `<div class="alert alert-success">
  <strong>Success!</strong> Indicates a successful or positive action.
</div>`
    },
    {
      id: 'bs5-buttons',
      title: 'BS5 Buttons',
      definition: 'Bootstrap 5 provides different styles of buttons.',
      example: '.btn-primary creates a blue button.',
      content: (
        <>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Bootstrap 5 provides different styles of buttons: Basic, Default, Primary, Secondary, Success, Info, Warning, Danger, Dark, Light, Link.
          </p>
        </>
      ),
      codeSnippet: `<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>`
    },
    {
      id: 'bs5-cards',
      title: 'BS5 Cards',
      definition: 'A card in Bootstrap 5 is a bordered box with some padding around its content.',
      example: 'A card with an image, title, and text.',
      content: (
        <>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            It includes options for headers, footers, content, colors, etc.
          </p>
        </>
      ),
      codeSnippet: `<div class="card" style="width:400px">
  <img class="card-img-top" src="img_avatar1.png" alt="Card image">
  <div class="card-body">
    <h4 class="card-title">John Doe</h4>
    <p class="card-text">Some example text.</p>
    <a href="#" class="btn btn-primary">See Profile</a>
  </div>
</div>`
    },
    {
      id: 'bs5-navbar',
      title: 'BS5 Navbar',
      definition: 'A navigation bar is a navigation header that is placed at the top of the page.',
      example: 'A responsive navbar that collapses on smaller screens.',
      content: (
        <>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            With Bootstrap 5, a navigation bar can extend or collapse, depending on the screen size.
          </p>
        </>
      ),
      codeSnippet: `<nav class="navbar navbar-expand-sm bg-light">
  <div class="container-fluid">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#">Link 1</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link 2</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link 3</a>
      </li>
    </ul>
  </div>
</nav>`
    },
    {
      id: 'bs5-carousel',
      title: 'BS5 Carousel',
      definition: 'The Carousel is a slideshow for cycling through a series of content.',
      example: 'A slideshow of images.',
      content: (
        <>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            The Carousel is a slideshow for cycling through a series of content, built with CSS 3D transforms and a bit of JavaScript.
          </p>
        </>
      ),
      codeSnippet: `<div id="demo" class="carousel slide" data-bs-ride="carousel">
  <!-- Indicators/dots -->
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
  </div>
  
  <!-- The slideshow/carousel -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="la.jpg" alt="Los Angeles" class="d-block w-100">
    </div>
    <div class="carousel-item">
      <img src="chicago.jpg" alt="Chicago" class="d-block w-100">
    </div>
  </div>
</div>`
    },
    {
      id: 'bs5-modal',
      title: 'BS5 Modal',
      definition: 'The Modal component is a dialog box/popup window that is displayed on top of the current page.',
      example: 'Clicking a button to open a modal dialog.',
      content: (
        <>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Modals are built with HTML, CSS, and JavaScript. They are positioned over everything else in the document and remove scroll from the &lt;body&gt; so that modal content scrolls instead.
          </p>
        </>
      ),
      codeSnippet: `<!-- Button to Open the Modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
  Open modal
</button>

<!-- The Modal -->
<div class="modal" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Modal Heading</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
        Modal body..
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>`
    },
    {
      id: 'bs5-forms',
      title: 'BS5 Forms',
      definition: 'Bootstrap 5 provides a wide range of form controls, layouts, and custom components.',
      example: 'A login form with email and password fields.',
      content: (
        <>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Bootstrap 5 provides a wide range of form controls, layouts, and custom components.
          </p>
        </>
      ),
      codeSnippet: `<form action="/action_page.php">
  <div class="mb-3 mt-3">
    <label for="email" class="form-label">Email:</label>
    <input type="email" class="form-control" id="email" placeholder="Enter email" name="email">
  </div>
  <div class="mb-3">
    <label for="pwd" class="form-label">Password:</label>
    <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd">
  </div>
  <div class="form-check mb-3">
    <label class="form-check-label">
      <input class="form-check-input" type="checkbox" name="remember"> Remember me
    </label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>`
    }
  ];

  const topics = courseData.map(topic => topic.title);
  const activeTopic = courseData[activeTopicIndex];

  const CodeBlock = ({ code, lang = 'html' }: { code: string, lang?: string }) => (
    <div className="bg-[#1e1e1e] text-gray-200 p-6 rounded-2xl font-mono text-sm mb-6 overflow-x-auto shadow-xl border border-gray-800">
      <div className="flex items-center space-x-2 mb-4 border-b border-gray-700 pb-4">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="ml-4 text-xs text-gray-500 font-sans">index.html</span>
      </div>
      <pre className="leading-relaxed text-purple-300">{code}</pre>
    </div>
  );

  return (
    <CoursePageLayout
      title="Bootstrap 5 Tutorial"
      description="Bootstrap is the world's most popular framework for building responsive, mobile-first sites."
      topics={topics}
      icon={Layout}
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
                <Code className="w-6 h-6 mr-2 text-purple-600" />
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

export default BootstrapCoursePage;
