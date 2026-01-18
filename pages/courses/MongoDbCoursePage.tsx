import React, { useState } from 'react';
import CoursePageLayout from '../../components/CoursePageLayout';
import { Database, Code, BookOpen, Lightbulb } from 'lucide-react';

const MongoDbCoursePage = () => {
    const [activeTopicIndex, setActiveTopicIndex] = useState(0);

    const courseData = [
        {
            id: 'mongodb-intro',
            title: 'MongoDB Intro',
            definition: 'MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.',
            example: 'MongoDB stores data in flexible, JSON-like documents.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        MongoDB is built on a scale-out architecture that has become popular with developers of all kinds for developing scalable applications with evolving data schemas.
                    </p>
                </>
            ),
            codeSnippet: null
        },
        {
            id: 'mongodb-create-db',
            title: 'MongoDB Create DB',
            definition: 'In MongoDB, a database is not created until it gets content!',
            example: 'MongoDB waits until you have inserted a document before it actually creates the database (and collection).',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        To create a database in MongoDB, start by creating a MongoClient object, then specify a connection URL with the correct ip address and the name of the database you want to create.
                    </p>
                </>
            ),
            codeSnippet: `var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});`
        },
        {
            id: 'mongodb-create-collection',
            title: 'MongoDB Create Collection',
            definition: 'A collection in MongoDB is the same as a table in SQL databases.',
            example: 'dbo.createCollection("customers", ...)',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        To create a collection in MongoDB, use the createCollection() method.
                    </p>
                </>
            ),
            codeSnippet: `var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.createCollection("customers", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});`
        },
        {
            id: 'mongodb-insert',
            title: 'MongoDB Insert',
            definition: 'To insert a record, or document as it is called in MongoDB, into a collection, we use the insertOne() method.',
            example: 'dbo.collection("customers").insertOne(myobj, ...)',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        A document in MongoDB is the same as a record in SQL databases.
                    </p>
                </>
            ),
            codeSnippet: `var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = { name: "Company Inc", address: "Highway 37" };
  dbo.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});`
        },
        {
            id: 'mongodb-find',
            title: 'MongoDB Find',
            definition: 'In MongoDB we use the find and findOne methods to find data in a collection.',
            example: 'dbo.collection("customers").findOne({}, ...)',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Just like the SELECT statement is used to find data in a table in a MySQL database.
                    </p>
                </>
            ),
            codeSnippet: `var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("customers").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result.name);
    db.close();
  });
});`
        },
        {
            id: 'mongodb-query',
            title: 'MongoDB Query',
            definition: 'When finding documents in a collection, you can filter the result by using a query object.',
            example: 'var query = { address: "Park Lane 38" };',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        The first argument of the find() method is a query object.
                    </p>
                </>
            ),
            codeSnippet: `var query = { address: "Park Lane 38" };
dbo.collection("customers").find(query).toArray(function(err, result) {
  if (err) throw err;
  console.log(result);
  db.close();
});`
        },
        {
            id: 'mongodb-sort',
            title: 'MongoDB Sort',
            definition: 'Use the sort() method to sort the result in ascending or descending order.',
            example: 'mysort = { name: 1 }; // ascending',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        The sort() method takes one parameter, an object defining the sorting order.
                    </p>
                </>
            ),
            codeSnippet: `var mysort = { name: 1 };
dbo.collection("customers").find().sort(mysort).toArray(function(err, result) {
  if (err) throw err;
  console.log(result);
  db.close();
});`
        },
        {
            id: 'mongodb-delete',
            title: 'MongoDB Delete',
            definition: 'To delete a record, or document as it is called in MongoDB, we use the deleteOne() method.',
            example: 'dbo.collection("customers").deleteOne(myquery, ...)',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        The first parameter of the deleteOne() method is a query object defining which document to delete.
                    </p>
                </>
            ),
            codeSnippet: `var myquery = { address: 'Mountain 21' };
dbo.collection("customers").deleteOne(myquery, function(err, obj) {
  if (err) throw err;
  console.log("1 document deleted");
  db.close();
});`
        },
        {
            id: 'mongodb-update',
            title: 'MongoDB Update',
            definition: 'You can update a record, or document as it is called in MongoDB, by using the updateOne() method.',
            example: 'dbo.collection("customers").updateOne(myquery, newvalues, ...)',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        The first parameter of the updateOne() method is a query object defining which document to update.
                    </p>
                </>
            ),
            codeSnippet: `var myquery = { address: "Valley 345" };
var newvalues = { $set: {name: "Mickey", address: "Canyon 123" } };
dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
  if (err) throw err;
  console.log("1 document updated");
  db.close();
});`
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
                <span className="ml-4 text-xs text-gray-500 font-sans">app.js</span>
            </div>
            <pre className="leading-relaxed text-green-300">{code}</pre>
        </div>
    );

    return (
        <CoursePageLayout
            title="MongoDB Tutorial"
            description="MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas."
            topics={topics}
            icon={Database}
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

export default MongoDbCoursePage;
