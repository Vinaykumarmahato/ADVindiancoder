import React, { useState } from 'react';
import CoursePageLayout from '../../components/CoursePageLayout';
import { FileCode, Code, BookOpen, Lightbulb } from 'lucide-react';

const XmlCoursePage = () => {
    const [activeTopicIndex, setActiveTopicIndex] = useState(0);

    const courseData = [
        {
            id: 'xml-intro',
            title: 'XML Intro',
            definition: 'XML stands for eXtensible Markup Language. XML was designed to store and transport data.',
            example: 'XML is like a box with a label. The box (tag) tells you what is inside (data).',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        XML was designed to be both human- and machine-readable. It is important to understand that XML does not DO anything. It is just information wrapped in tags.
                    </p>
                </>
            ),
            codeSnippet: null
        },
        {
            id: 'xml-how-to-use',
            title: 'XML How to Use',
            definition: 'XML is used in many aspects of web development, often to separate data from presentation.',
            example: 'Sending data from a server to a client, where the client decides how to display it.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        XML is often used to distribute data over the Internet. It is important (for all types of software applications) to be able to exchange data with other systems.
                    </p>
                </>
            ),
            codeSnippet: `<note>
  <to>Tove</to>
  <from>Jani</from>
  <heading>Reminder</heading>
  <body>Don't forget me this weekend!</body>
</note>`
        },
        {
            id: 'xml-tree',
            title: 'XML Tree',
            definition: 'XML documents are formed as element trees. An XML tree starts at a root element and branches from the root to child elements.',
            example: 'Root: Bookstore -> Child: Book -> Child: Title, Author, Price.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        All elements can have sub elements (child elements). The terms parent, child, and sibling are used to describe the relationships between elements.
                    </p>
                </>
            ),
            codeSnippet: `<root>
  <child>
    <subchild>.....</subchild>
  </child>
</root>`
        },
        {
            id: 'xml-syntax',
            title: 'XML Syntax',
            definition: 'The syntax rules of XML are very simple and logical. The rules are easy to learn, and easy to use.',
            example: 'All XML elements must have a closing tag. XML tags are case sensitive.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        In XML, it is illegal to omit the closing tag. All elements must be properly nested.
                    </p>
                </>
            ),
            codeSnippet: `<correct>
  <nested>Hello</nested>
</correct>

<!-- Incorrect -->
<correct>
  <nested>Hello</correct>
</nested>`
        },
        {
            id: 'xml-elements',
            title: 'XML Elements',
            definition: 'An XML element is everything from (including) the element\'s start tag to (including) the element\'s end tag.',
            example: '<price>29.99</price>',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        An element can contain: text, attributes, other elements, or a mix of the above.
                    </p>
                </>
            ),
            codeSnippet: `<book>
  <title>Harry Potter</title>
  <author>J K. Rowling</author>
  <year>2005</year>
  <price>29.99</price>
</book>`
        },
        {
            id: 'xml-attributes',
            title: 'XML Attributes',
            definition: 'XML elements can have attributes, just like HTML. Attributes are designed to contain data related to a specific element.',
            example: '<person gender="female">',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Attribute values must always be quoted. Either single or double quotes can be used.
                    </p>
                </>
            ),
            codeSnippet: `<person gender="female">
  <firstname>Anna</firstname>
  <lastname>Smith</lastname>
</person>`
        },
        {
            id: 'xml-namespaces',
            title: 'XML Namespaces',
            definition: 'XML Namespaces provide a method to avoid element name conflicts.',
            example: 'Using a prefix like <h:table> for HTML table and <f:table> for furniture table.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        When using prefixes in XML, a namespace for the prefix must be defined.
                    </p>
                </>
            ),
            codeSnippet: `<root xmlns:h="http://www.w3.org/TR/html4/" xmlns:f="https://www.w3schools.com/furniture">
  <h:table>
    <h:tr>
      <h:td>Apples</h:td>
      <h:td>Bananas</h:td>
    </h:tr>
  </h:table>
  <f:table>
    <f:name>African Coffee Table</f:name>
    <f:width>80</f:width>
    <f:length>120</f:length>
  </f:table>
</root>`
        },
        {
            id: 'xml-parser',
            title: 'XML Parser',
            definition: 'All modern browsers have a built-in XML parser to read and manipulate XML.',
            example: 'The parser reads the XML file and converts it into an XML DOM object.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        The DOM (Document Object Model) defines a standard way for accessing and manipulating XML documents.
                    </p>
                </>
            ),
            codeSnippet: `text = "<bookstore><book>...</book></bookstore>";
parser = new DOMParser();
xmlDoc = parser.parseFromString(text,"text/xml");`
        }
    ];

    const topics = courseData.map(topic => topic.title);
    const activeTopic = courseData[activeTopicIndex];

    const CodeBlock = ({ code, lang = 'xml' }: { code: string, lang?: string }) => (
        <div className="bg-[#1e1e1e] text-gray-200 p-6 rounded-2xl font-mono text-sm mb-6 overflow-x-auto shadow-xl border border-gray-800">
            <div className="flex items-center space-x-2 mb-4 border-b border-gray-700 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-xs text-gray-500 font-sans uppercase">{lang}</span>
            </div>
            <pre className="leading-relaxed text-orange-300">{code}</pre>
        </div>
    );

    return (
        <CoursePageLayout
            title="XML Tutorial"
            description="XML stands for eXtensible Markup Language. XML was designed to store and transport data."
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

export default XmlCoursePage;
