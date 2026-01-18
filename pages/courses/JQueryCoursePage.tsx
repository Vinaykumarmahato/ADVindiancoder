import React, { useState } from 'react';
import CoursePageLayout from '../../components/CoursePageLayout';
import { Hash, Code, BookOpen, Lightbulb } from 'lucide-react';

const JQueryCoursePage = () => {
    const [activeTopicIndex, setActiveTopicIndex] = useState(0);

    const courseData = [
        {
            id: 'jquery-introduction',
            title: 'jQuery Introduction',
            definition: 'jQuery is a JavaScript Library. jQuery greatly simplifies JavaScript programming.',
            example: 'Hiding an element with a single line of code.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler.
                    </p>
                </>
            ),
            codeSnippet: `$(document).ready(function(){
  $("p").click(function(){
    $(this).hide();
  });
});`
        },
        {
            id: 'jquery-get-started',
            title: 'jQuery Get Started',
            definition: 'To start using jQuery, you can download it or include it from a CDN.',
            example: 'Including jQuery from Google CDN.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        If you don't want to download and host jQuery yourself, you can include it from a CDN (Content Delivery Network).
                    </p>
                </>
            ),
            codeSnippet: `<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
</head>`
        },
        {
            id: 'jquery-syntax',
            title: 'jQuery Syntax',
            definition: 'The jQuery syntax is tailor-made for selecting HTML elements and performing some action on the element(s).',
            example: '$(selector).action()',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Basic syntax is: <code>$(selector).action()</code>
                    </p>
                </>
            ),
            codeSnippet: `$("p").hide() - hides all <p> elements.
$(".test").hide() - hides all elements with class="test".
$("#test").hide() - hides the element with id="test".`
        },
        {
            id: 'jquery-selectors',
            title: 'jQuery Selectors',
            definition: 'jQuery selectors allow you to select and manipulate HTML elements as a group or as a single element.',
            example: '$("p") selects all <p> elements.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        jQuery selectors are one of the most important parts of the jQuery library.
                    </p>
                </>
            ),
            codeSnippet: `$(document).ready(function(){
  $("button").click(function(){
    $("p").hide();
  });
});`
        },
        {
            id: 'jquery-events',
            title: 'jQuery Events',
            definition: 'All the different visitors\' actions that a web page can respond to are called events.',
            example: 'click, dblclick, mouseenter, mouseleave.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        An event represents the precise moment when something happens.
                    </p>
                </>
            ),
            codeSnippet: `$("p").click(function(){
  // action goes here!!
});

$("p").dblclick(function(){
  $(this).hide();
});`
        },
        {
            id: 'jquery-hideshow',
            title: 'jQuery Hide/Show',
            definition: 'With jQuery, you can hide and show HTML elements with the hide() and show() methods.',
            example: '$("#hide").click(function(){ $("p").hide(); });',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        You can also toggle between hiding and showing an element with the toggle() method.
                    </p>
                </>
            ),
            codeSnippet: `$("#hide").click(function(){
  $("p").hide();
});

$("#show").click(function(){
  $("p").show();
});`
        },
        {
            id: 'jquery-fade',
            title: 'jQuery Fade',
            definition: 'With jQuery you can fade an element in and out of visibility.',
            example: 'fadeIn(), fadeOut(), fadeToggle(), fadeTo().',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        jQuery has the following fade methods: fadeIn(), fadeOut(), fadeToggle(), fadeTo().
                    </p>
                </>
            ),
            codeSnippet: `$("button").click(function(){
  $("#div1").fadeIn();
  $("#div2").fadeOut();
  $("#div3").fadeToggle();
});`
        },
        {
            id: 'jquery-slide',
            title: 'jQuery Slide',
            definition: 'With jQuery you can create a sliding effect on elements.',
            example: 'slideDown(), slideUp(), slideToggle().',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        jQuery has the following slide methods: slideDown(), slideUp(), slideToggle().
                    </p>
                </>
            ),
            codeSnippet: `$("#flip").click(function(){
  $("#panel").slideDown();
});`
        },
        {
            id: 'jquery-animate',
            title: 'jQuery Animate',
            definition: 'The jQuery animate() method is used to create custom animations.',
            example: 'Moving an element to the right.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        The animate() method is used to create custom animations.
                    </p>
                </>
            ),
            codeSnippet: `$("button").click(function(){
  $("div").animate({left: '250px'});
});`
        },
        {
            id: 'jquery-get',
            title: 'jQuery HTML Get',
            definition: 'jQuery contains powerful methods for changing and manipulating HTML elements and attributes.',
            example: 'text(), html(), val(), attr().',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Get Content - text(), html(), and val().
                    </p>
                </>
            ),
            codeSnippet: `$("#btn1").click(function(){
  alert("Text: " + $("#test").text());
});
$("#btn2").click(function(){
  alert("HTML: " + $("#test").html());
});`
        },
        {
            id: 'jquery-set',
            title: 'jQuery HTML Set',
            definition: 'We use the same methods to set content (text(), html(), val()) as we use to get content.',
            example: '$("#test1").text("Hello world!");',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Set Content - text(), html(), and val().
                    </p>
                </>
            ),
            codeSnippet: `$("#btn1").click(function(){
  $("#test1").text("Hello world!");
});
$("#btn2").click(function(){
  $("#test2").html("<b>Hello world!</b>");
});`
        },
        {
            id: 'jquery-add',
            title: 'jQuery Add',
            definition: 'With jQuery, it is easy to add new elements/content.',
            example: 'append(), prepend(), after(), before().',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        append() - Inserts content at the end of the selected elements.
                    </p>
                </>
            ),
            codeSnippet: `$("p").append("Some appended text.");
$("p").prepend("Some prepended text.");`
        },
        {
            id: 'jquery-remove',
            title: 'jQuery Remove',
            definition: 'To remove elements and content, there are mainly two jQuery methods: remove() and empty().',
            example: 'remove() removes the selected element and its child elements.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        empty() - Removes the child elements from the selected element.
                    </p>
                </>
            ),
            codeSnippet: `$("#div1").remove(); // Removes the selected element and its child elements
$("#div1").empty();  // Removes the child elements of the selected element`
        },
        {
            id: 'jquery-css-classes',
            title: 'jQuery CSS Classes',
            definition: 'With jQuery, it is easy to manipulate the CSS of elements.',
            example: 'addClass(), removeClass(), toggleClass().',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        jQuery has several methods for CSS manipulation.
                    </p>
                </>
            ),
            codeSnippet: `$("button").click(function(){
  $("h1, h2, p").addClass("blue");
  $("div").removeClass("important");
});`
        },
        {
            id: 'jquery-css',
            title: 'jQuery css()',
            definition: 'The css() method sets or returns one or more style properties for the selected elements.',
            example: '$("p").css("background-color", "yellow");',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        To set a specified CSS property, use the following syntax: css("propertyname","value");
                    </p>
                </>
            ),
            codeSnippet: `$("p").css("background-color", "yellow");`
        },
        {
            id: 'jquery-ajax-intro',
            title: 'jQuery AJAX Intro',
            definition: 'AJAX is the art of exchanging data with a server, and updating parts of a web page - without reloading the whole page.',
            example: 'load(), get(), post().',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        jQuery provides several methods for AJAX functionality.
                    </p>
                </>
            ),
            codeSnippet: `$("#div1").load("demo_test.txt");`
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
                <span className="ml-4 text-xs text-gray-500 font-sans">script.js</span>
            </div>
            <pre className="leading-relaxed text-blue-300">{code}</pre>
        </div>
    );

    return (
        <CoursePageLayout
            title="jQuery Tutorial"
            description="jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler."
            topics={topics}
            icon={Hash}
            colorClass="blue"
            activeTopicIndex={activeTopicIndex}
            onTopicClick={setActiveTopicIndex}
        >
            <div className="space-y-8">
                {/* Definition Section */}
                <div className="bg-blue-50 dark:bg-blue-900/10 border-l-4 border-blue-600 p-6 rounded-r-xl">
                    <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
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

export default JQueryCoursePage;
