import React, { useState } from 'react';
import CoursePageLayout from '../../components/CoursePageLayout';
import { Database, Code, BookOpen, Lightbulb, FileText, Cpu, Layers, ShieldAlert, Zap, Server, Check, AlertTriangle } from 'lucide-react';
import CodeBlock from '../../components/CodeBlock';
import MermaidDiagram from '../../components/MermaidDiagram';

interface MongoDbTopic {
    id: string;
    title: string;
    definition: string;
    example?: string;
    syntax?: string;
    realLifeScenario?: string;
    codeSnippet?: string | null;
    content: React.ReactNode;
}

const MongoDbCoursePage = () => {
    const [activeTopicIndex, setActiveTopicIndex] = useState(0);

    const courseData: MongoDbTopic[] = [
        // ==================== BEGINNER TIER ====================
        {
            id: 'mongodb-intro-bson',
            title: '1. [Beginner] Introduction & NoSQL Document Model (BSON vs JSON)',
            definition: 'MongoDB is a document-oriented NoSQL database. It stores data in binary JSON format (BSON) inside Collections of flexible documents, using 12-byte ObjectIds as default primary keys.',
            syntax: `// BSON Document Blueprint with ObjectId & Date\n{\n  "_id": ObjectId("64b8f10a2f1a3c001f92e4b1"),\n  "username": "vinay_mahato",\n  "email": "vinay@advcoder.com",\n  "roles": ["admin", "developer"],\n  "createdAt": ISODate("2026-08-11T12:00:00Z")\n}`,
            codeSnippet: `// Connect to MongoDB Atlas via Node.js Mongoose ODM\nconst mongoose = require('mongoose');\n\nconst MONGODB_URI = 'mongodb://127.0.0.1:27017/adv_coder_db';\n\nasync function connectDatabase() {\n    try {\n        await mongoose.connect(MONGODB_URI);\n        console.log("MongoDB Database Connected Successfully!");\n    } catch (error) {\n        console.error("Database Connection Failed:", error.message);\n    }\n}\n\nconnectDatabase();`,
            realLifeScenario: 'E-commerce platforms like eBay and Forbes store product catalogs with varying custom attributes inside MongoDB BSON documents.',
            content: (
                <div className="space-y-6">
                    {/* 1. Definition */}
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-semibold text-cyan-900 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            MongoDB represents data as <code className="text-cyan-600 font-mono">BSON</code> documents (Binary JSON). Instead of rigid tables and rows like SQL databases, it groups documents into <code className="text-cyan-600 font-mono">collections</code>. This dynamic schema allows varying structures within the same collection.
                        </p>
                    </div>

                    {/* 2. Real-Life Analogy & Example */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Think of a relational database as a highly structured Excel spreadsheet. In contrast, MongoDB is like a folder containing various forms or resumes. While they generally have a name and contact info, some might have portfolios attached, and others might have varied work experiences.
                        </p>
                    </div>

                    {/* 3. Visual Explanation (Mermaid.js) */}
                    <div className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2 text-cyan-600" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`
                            graph TD
                                DB[Database] --> C1[Collection: Users]
                                DB --> C2[Collection: Orders]
                                C1 --> D1[Document: User A]
                                C1 --> D2[Document: User B]
                                C2 --> D3[Document: Order 1]
                                D1 --> Fields(JSON Fields)
                        `} />
                    </div>

                    {/* 4. Sample Code */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-cyan-600" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`const user = { name: "John", age: 30 };\ndb.users.insertOne(user);`} lang="javascript" />
                    </div>

                    {/* 5. Real-World Application */}
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-semibold text-emerald-900 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Content Management Systems (CMS) use document models to store complex pages containing various components like text, images, and embedded videos efficiently.
                        </p>
                    </div>

                    {/* 6. Advantages & 7. Disadvantages */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl shadow-sm">
                            <h4 className="text-lg font-semibold text-white flex items-center mb-3">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" />
                                Advantages
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Flexible schema allows rapid development iteration.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>High performance for simple <code className="text-cyan-400 font-mono">read/write</code> workloads.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl shadow-sm">
                            <h4 className="text-lg font-semibold text-white flex items-center mb-3">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>No native support for complex <code className="text-cyan-400 font-mono">JOIN</code> operations.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Data duplication is common (denormalization).</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'mongodb-crud-operations',
            title: '2. [Beginner] CRUD Operations Basics (insertOne, find, updateOne)',
            definition: 'Perform core CRUD data operations using insertOne(), insertMany(), find(), findOne(), updateOne(), updateMany(), deleteOne(), deleteMany(), and query operators ($eq, $gt, $in).',
            syntax: `db.users.insertOne({ name: "Vinay", role: "Admin" });\ndb.users.find({ status: "ACTIVE", points: { $gte: 100 } });\ndb.users.deleteOne({ _id: ObjectId("...") });`,
            codeSnippet: `// MongoDB Shell / Node.js Driver CRUD Examples\n// 1. Insert Document\ndb.products.insertOne({\n    title: "MongoDB Masterclass",\n    price: 1499,\n    tags: ["NoSQL", "Database"],\n    isAvailable: true\n});\n\n// 2. Query with $gt (Greater Than) and $in operators\ndb.products.find({\n    price: { $gt: 1000 },\n    tags: { $in: ["NoSQL", "MongoDB"] }\n});`,
            realLifeScenario: 'Fetching user accounts matching specific status codes and point thresholds uses MongoDB query operators (`$gte`, `$in`).',
            content: (
                <div className="space-y-6">
                    {/* 1. Definition */}
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-semibold text-cyan-900 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            CRUD (Create, Read, Update, Delete) are the essential operations to manage data. MongoDB provides distinct methods like <code className="text-cyan-600 font-mono">insertOne()</code> or <code className="text-cyan-600 font-mono">insertMany()</code>, giving granular control over how documents are manipulated.
                        </p>
                    </div>

                    {/* 2. Real-Life Analogy & Example */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Managing CRUD is like working as a librarian. You add new books (Create), look up books for patrons (Read), update a book&apos;s condition status (Update), and discard damaged books (Delete).
                        </p>
                    </div>

                    {/* 3. Visual Explanation (Mermaid.js) */}
                    <div className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2 text-cyan-600" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`
                            graph LR
                                A[Client] -->|insertOne| B[(MongoDB)]
                                A -->|find| B
                                A -->|updateOne| B
                                A -->|deleteOne| B
                        `} />
                    </div>

                    {/* 4. Sample Code */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-cyan-600" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`db.users.updateOne({ _id: 123 }, { $set: { status: "active" } });`} lang="javascript" />
                    </div>

                    {/* 5. Real-World Application */}
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-semibold text-emerald-900 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Updating inventory quantities instantly when a customer checks out relies heavily on fast <code className="text-cyan-600 font-mono">updateOne()</code> operations.
                        </p>
                    </div>

                    {/* 6. Advantages & 7. Disadvantages */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl shadow-sm">
                            <h4 className="text-lg font-semibold text-white flex items-center mb-3">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" />
                                Advantages
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Rich query operators (<code className="text-cyan-400 font-mono">$gt</code>, <code className="text-cyan-400 font-mono">$in</code>).</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Atomic updates on a single document.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl shadow-sm">
                            <h4 className="text-lg font-semibold text-white flex items-center mb-3">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Accidentally omitting filters in <code className="text-cyan-400 font-mono">updateMany()</code> can alter the whole collection.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'mongodb-projections-pagination',
            title: '3. [Beginner] Projections, Sorting & Pagination (sort, limit, skip)',
            definition: 'Return specific fields using Projections ({ title: 1, _id: 0 }). Sort results via sort({ price: -1 }), and implement page pagination using limit() and skip().',
            syntax: `db.products.find({}, { title: 1, price: 1, _id: 0 })\n           .sort({ price: -1 }) // -1 Descending, 1 Ascending\n           .skip(20)            // Skip first 20 records\n           .limit(10);          // Return 10 records per page`,
            codeSnippet: `// Paginated Product Catalog Function (Page 2, 10 items per page)\nasync function getPaginatedProducts(pageNumber = 2, pageSize = 10) {\n    const skipCount = (pageNumber - 1) * pageSize;\n\n    const products = await db.collection('products')\n        .find({}, { projection: { title: 1, price: 1, category: 1 } })\n        .sort({ createdAt: -1 })\n        .skip(skipCount)\n        .limit(pageSize)\n        .toArray();\n\n    return products;\n}`,
            realLifeScenario: 'E-commerce product listing pages use `.skip((page-1)*pageSize).limit(pageSize)` for server-side search result pagination.',
            content: (
                <div className="space-y-6">
                    {/* 1. Definition */}
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-semibold text-cyan-900 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Projections limit which fields are returned over the network. Pagination is achieved by chaining <code className="text-cyan-600 font-mono">.sort()</code>, <code className="text-cyan-600 font-mono">.skip()</code>, and <code className="text-cyan-600 font-mono">.limit()</code>.
                        </p>
                    </div>

                    {/* 2. Real-Life Analogy & Example */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Like flipping through a phone book. You don&apos;t load the whole book at once (limit), you might skip to the letter M (skip), and you only read names and numbers, ignoring addresses (projection).
                        </p>
                    </div>

                    {/* 3. Visual Explanation (Mermaid.js) */}
                    <div className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2 text-cyan-600" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`
                            graph TD
                                A[Cursor] --> B[Sort]
                                B --> C[Skip N docs]
                                C --> D[Limit to M docs]
                                D --> E[Apply Projection]
                        `} />
                    </div>

                    {/* 4. Sample Code */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-cyan-600" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`db.users.find({}, { password: 0 }).sort({ age: 1 }).skip(10).limit(5);`} lang="javascript" />
                    </div>

                    {/* 5. Real-World Application */}
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-semibold text-emerald-900 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Loading social media feeds iteratively as the user scrolls, fetching only the required display data to minimize bandwidth.
                        </p>
                    </div>

                    {/* 6. Advantages & 7. Disadvantages */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl shadow-sm">
                            <h4 className="text-lg font-semibold text-white flex items-center mb-3">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" />
                                Advantages
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Reduces network payload size using projections.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Efficient for standard API pagination.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl shadow-sm">
                            <h4 className="text-lg font-semibold text-white flex items-center mb-3">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span><code className="text-cyan-400 font-mono">skip()</code> is inefficient for large offsets (use cursor-based pagination instead).</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'mongodb-update-operators',
            title: '4. [Beginner] Update Operators & Field Manipulation ($set, $push, upsert)',
            definition: 'Modify document fields safely using update operators: $set (overwrite field), $unset (remove field), $inc (increment number), $push (add to array), $pull (remove from array), and upsert.',
            syntax: `db.users.updateOne(\n  { _id: ObjectId("...") },\n  { \n    $set: { status: "VERIFIED" },\n    $inc: { loginCount: 1 },\n    $push: { tags: "premium" }\n  },\n  { upsert: true } // Insert if document does not exist!\n);`,
            codeSnippet: `// Updating User Profile & Appending Array Items\ndb.users.updateOne(\n    { email: "vinay@advcoder.com" },\n    {\n        $set: { "profile.lastLogin": new Date() },\n        $inc: { "rewardPoints": 50 },\n        $addToSet: { "permissions": "READ_REPORTS" } // Adds item ONLY if not present!\n    }\n);`,
            realLifeScenario: 'Using `$addToSet` appends new user roles to array fields while preventing duplicate entries automatically.',
            content: (
                <div className="space-y-6">
                    {/* 1. Definition */}
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-semibold text-cyan-900 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Update operators like <code className="text-cyan-600 font-mono">$set</code>, <code className="text-cyan-600 font-mono">$inc</code>, and <code className="text-cyan-600 font-mono">$push</code> allow partial updates to documents without fetching the whole document first. The <code className="text-cyan-600 font-mono">upsert</code> option creates a document if none matches the filter.
                        </p>
                    </div>

                    {/* 2. Real-Life Analogy & Example */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Imagine updating a patient chart. You don&apos;t erase the whole chart and rewrite it; you just add a new note ($push) or update their current weight ($set). If the patient is new, you create a new chart entirely (upsert).
                        </p>
                    </div>

                    {/* 3. Visual Explanation (Mermaid.js) */}
                    <div className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2 text-cyan-600" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`
                            graph LR
                                DOC[Document] -- $set --> M1[Field updated]
                                DOC -- $inc --> M2[Number incremented]
                                DOC -- $push --> M3[Item added to Array]
                        `} />
                    </div>

                    {/* 4. Sample Code */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-cyan-600" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`db.stats.updateOne({ _id: 1 }, { $inc: { views: 1 } }, { upsert: true });`} lang="javascript" />
                    </div>

                    {/* 5. Real-World Application */}
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-semibold text-emerald-900 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Tracking page views or likes instantly using <code className="text-cyan-600 font-mono">$inc</code> without racing conditions.
                        </p>
                    </div>

                    {/* 6. Advantages & 7. Disadvantages */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl shadow-sm">
                            <h4 className="text-lg font-semibold text-white flex items-center mb-3">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" />
                                Advantages
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Atomic field updates guarantee data consistency.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Minimal network overhead.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl shadow-sm">
                            <h4 className="text-lg font-semibold text-white flex items-center mb-3">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Complex array manipulations can be unintuitive.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        // ==================== INTERMEDIATE TIER ====================
        {
            id: 'mongodb-indexing-performance',
            title: '5. [Intermediate] Indexing & Performance Tuning (Compound, Multikey)',
            definition: 'Speed up query execution using Indexing: Single Field, Compound ({ category: 1, price: -1 }), Multikey (arrays), Text, and Geospatial 2dsphere. Analyze queries via explain().',
            syntax: `db.products.createIndex({ category: 1, price: -1 });\ndb.products.find({ category: "Electronics" }).explain("executionStats");`,
            codeSnippet: `// Compound Index Creation & Execution Stats\n// 1. Create Compound Index for optimized sorting\ndb.orders.createIndex({ customerId: 1, orderDate: -1 });\n\n// 2. Analyze query execution using explain()\nconst stats = db.orders.find({ customerId: "CUST_101" })\n                       .sort({ orderDate: -1 })\n                       .explain("executionStats");\n\nconsole.log("Total Docs Examined:", stats.executionStats.totalDocsExamined);\nconsole.log("Stage:", stats.executionStats.executionStages.stage); // Should be 'IXSCAN'`,
            realLifeScenario: 'Adding compound indexes reduces `totalDocsExamined` from 1,000,000 down to 5, preventing full collection scans (`COLLSCAN`).',
            content: (
                <div className="space-y-6">
                    {/* 1. Definition */}
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-semibold text-cyan-900 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Indexes are special data structures that store a small portion of the collection&apos;s data set in an easy to traverse form. Without indexes, MongoDB must perform a <code className="text-cyan-600 font-mono">COLLSCAN</code> (scan every document).
                        </p>
                    </div>

                    {/* 2. Real-Life Analogy & Example */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Indexes are exactly like a book&apos;s index at the back. Instead of reading the whole book to find mentions of &quot;MongoDB&quot;, you look at the index to find the exact pages.
                        </p>
                    </div>

                    {/* 3. Visual Explanation (Mermaid.js) */}
                    <div className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2 text-cyan-600" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`
                            graph TD
                                Q[Query] --> I{Index Exists?}
                                I -- Yes --> IX[IXSCAN: Fast lookup]
                                I -- No --> CS[COLLSCAN: Slow scan]
                                IX --> R[Result]
                                CS --> R
                        `} />
                    </div>

                    {/* 4. Sample Code */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-cyan-600" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`db.users.createIndex({ email: 1 }, { unique: true });`} lang="javascript" />
                    </div>

                    {/* 5. Real-World Application */}
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-semibold text-emerald-900 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Preventing duplicate user sign-ups using unique indexes, and optimizing dashboard load times via compound indexes.
                        </p>
                    </div>

                    {/* 6. Advantages & 7. Disadvantages */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl shadow-sm">
                            <h4 className="text-lg font-semibold text-white flex items-center mb-3">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" />
                                Advantages
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Drastically improves read performance.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Supports sorting operations without in-memory limits.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl shadow-sm">
                            <h4 className="text-lg font-semibold text-white flex items-center mb-3">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Slows down writes as indexes must be updated.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Consumes additional RAM and disk space.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'mongodb-aggregation-framework-basics',
            title: '6. [Intermediate] Aggregation Framework Basics ($match, $group, $unwind)',
            definition: 'Process data streams using the Aggregation Pipeline: $match (filter), $group (aggregate & group by key), $project (reshape fields), $sort, and $unwind (deconstruct arrays).',
            syntax: `db.orders.aggregate([\n  { $match: { status: "COMPLETED" } },\n  { $group: { _id: "$customerId", totalSpent: { $sum: "$amount" } } },\n  { $sort: { totalSpent: -1 } }\n]);`,
            codeSnippet: `// Sales Revenue Aggregation Pipeline by Product Category\ndb.sales.aggregate([\n    // Stage 1: Filter completed transactions in 2026\n    { $match: { status: "COMPLETED", year: 2026 } },\n    \n    // Stage 2: Group by category and compute total sales & average price\n    { \n        $group: {\n            _id: "$category",\n            totalRevenue: { $sum: "$totalPrice" },\n            averagePrice: { $avg: "$unitPrice" },\n            itemCount: { $sum: 1 }\n        }\n    },\n    \n    // Stage 3: Sort categories by highest revenue\n    { $sort: { totalRevenue: -1 } }\n]);`,
            realLifeScenario: 'Analytics dashboards calculate total monthly revenue by category using `$group` and `$sum` aggregation pipelines.',
            content: (
                <div className="space-y-6">
                    {/* 1. Definition */}
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-semibold text-cyan-900 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            The Aggregation Pipeline is a framework for data aggregation modeled on the concept of data processing pipelines. Documents enter a multi-stage pipeline that transforms the documents into aggregated results.
                        </p>
                    </div>

                    {/* 2. Real-Life Analogy & Example */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Think of a factory assembly line. Parts come in ($match filters only valid parts), they get grouped together to form a product ($group), and finally, they are painted and sorted for shipping ($project and $sort).
                        </p>
                    </div>

                    {/* 3. Visual Explanation (Mermaid.js) */}
                    <div className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2 text-cyan-600" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`
                            graph LR
                                IN[Input Docs] --> M[$match]
                                M --> G[$group]
                                G --> S[$sort]
                                S --> OUT[Output Docs]
                        `} />
                    </div>

                    {/* 4. Sample Code */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-cyan-600" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`db.users.aggregate([ { $match: { age: { $gt: 18 } } }, { $group: { _id: "$city", count: { $sum: 1 } } } ]);`} lang="javascript" />
                    </div>

                    {/* 5. Real-World Application */}
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-semibold text-emerald-900 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Generating complex reporting data, such as calculating the average user rating per product category for an e-commerce dashboard.
                        </p>
                    </div>

                    {/* 6. Advantages & 7. Disadvantages */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl shadow-sm">
                            <h4 className="text-lg font-semibold text-white flex items-center mb-3">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" />
                                Advantages
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Processes data natively on the database server, saving bandwidth.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Highly optimized for large data sets.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl shadow-sm">
                            <h4 className="text-lg font-semibold text-white flex items-center mb-3">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Steep learning curve compared to standard SQL.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Can consume significant server RAM if not optimized.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'mongodb-data-modeling-schema-design',
            title: '7. [Intermediate] Data Modeling & Schema Design (Embedding vs Referencing)',
            definition: 'Design schemas choosing between Embedding (denormalization for 1:1 or 1:Few bounded relationships) and Referencing (DBRef / ObjectIds for 1:Many or N:M relationships).',
            syntax: `// Embedded Sub-Document Pattern (Bounded 1:Few):\n{\n  "_id": ObjectId("..."),\n  "name": "Vinay",\n  "addresses": [{ "type": "home", "city": "Mumbai" }] // Embedded\n}`,
            codeSnippet: `// Referencing Pattern (Unbounded 1:Many Relationships)\n// User Document:\n{ "_id": ObjectId("64a101"), "username": "vinay_coder" }\n\n// Post Documents (Referencing user _id):\n{\n  "_id": ObjectId("75b202"),\n  "authorId": ObjectId("64a101"), // Reference Link\n  "title": "MongoDB Schema Patterns"\n}`,
            realLifeScenario: 'Embed address arrays inside user documents if user addresses are bounded to &le; 3 items; reference ObjectIds for unbounded blog post comments.',
            content: (
                <div className="space-y-6">
                    {/* 1. Definition */}
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-semibold text-cyan-900 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Data Modeling in MongoDB focuses on whether to store related data in the same document (Embedding) or split it across collections using ObjectIds (Referencing).
                        </p>
                    </div>

                    {/* 2. Real-Life Analogy & Example */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Embedding is like having an invoice with line items written directly on it. Referencing is like a library card pointing to many books you&apos;ve checked out (they live on shelves, not on the card).
                        </p>
                    </div>

                    {/* 3. Visual Explanation (Mermaid.js) */}
                    <div className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2 text-cyan-600" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`
                            graph TD
                                A[Embed: 1 to Few] --> B[Fast Reads, One Doc]
                                C[Reference: 1 to Many] --> D[No Duplication, Multi Docs]
                        `} />
                    </div>

                    {/* 4. Sample Code */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-cyan-600" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`const user = { name: "A", address: { city: "B" } }; // Embedded`} lang="javascript" />
                    </div>

                    {/* 5. Real-World Application */}
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-semibold text-emerald-900 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Using References for unbounded arrays like Twitter followers prevents hitting the 16MB document limit.
                        </p>
                    </div>

                    {/* 6. Advantages & 7. Disadvantages */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl shadow-sm">
                            <h4 className="text-lg font-semibold text-white flex items-center mb-3">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" />
                                Advantages
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Embedding offers atomic updates and single-query reads.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl shadow-sm">
                            <h4 className="text-lg font-semibold text-white flex items-center mb-3">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Embedding large amounts of data hits document size limits.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'mongodb-advanced-querying-expressions',
            title: '8. [Intermediate] Advanced Querying & Expressions ($expr, $regex, $elemMatch)',
            definition: 'Query documents using $expr (compare document fields), $regex (pattern matching), $text (full-text index search), $near (geospatial), and $elemMatch for array matching.',
            syntax: `// Compare 2 fields in same document using $expr:\ndb.monthlyStats.find({ $expr: { $gt: ["$spent", "$budget"] } });\n\n// Match specific array element conditions:\ndb.orders.find({ items: { $elemMatch: { name: "Book", qty: { $gt: 5 } } } });`,
            codeSnippet: `// Geospatial $near Query (Find places within 5km radius)\ndb.places.find({\n    location: {\n        $near: {\n            $geometry: { type: "Point", coordinates: [72.8777, 19.0760] }, // Mumbai Long/Lat\n            $maxDistance: 5000 // 5,000 meters\n        }\n    }\n});`,
            realLifeScenario: 'Ride-hailing apps (Uber, Ola) use `$near` geospatial queries to find available drivers within 2 kilometers of a rider\'s coordinates.',
            content: (
                <div className="space-y-6">
                    {/* 1. Definition */}
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-semibold text-cyan-900 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Advanced queries include matching arrays precisely with <code className="text-cyan-600 font-mono">$elemMatch</code>, performing regular expressions with <code className="text-cyan-600 font-mono">$regex</code>, and even comparing fields within the same document using <code className="text-cyan-600 font-mono">$expr</code>.
                        </p>
                    </div>

                    {/* 2. Real-Life Analogy & Example */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            It&apos;s like searching a database of employees not just for those who have a bonus, but where their bonus ($expr) exceeds their base salary.
                        </p>
                    </div>

                    {/* 3. Visual Explanation (Mermaid.js) */}
                    <div className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2 text-cyan-600" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`
                            graph LR
                                Q[Query] --> E[$expr]
                                Q --> R[$regex]
                                Q --> G[$near]
                        `} />
                    </div>

                    {/* 4. Sample Code */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-cyan-600" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`db.users.find({ $expr: { $gt: ["$spend", "$budget"] } });`} lang="javascript" />
                    </div>

                    {/* 5. Real-World Application */}
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-semibold text-emerald-900 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Locating nearby restaurants in a food delivery app via <code className="text-cyan-600 font-mono">$near</code> and GeoJSON points.
                        </p>
                    </div>

                    {/* 6. Advantages & 7. Disadvantages */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl shadow-sm">
                            <h4 className="text-lg font-semibold text-white flex items-center mb-3">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" />
                                Advantages
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Replaces cumbersome map-reduce jobs.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl shadow-sm">
                            <h4 className="text-lg font-semibold text-white flex items-center mb-3">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Queries like <code className="text-cyan-400 font-mono">$regex</code> without prefix anchors ignore indexes and scan entire collections.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        // ==================== ADVANCED TIER ====================
        {
            id: 'mongodb-advanced-aggregation-lookup-facet',
            title: '9. [Advanced] Advanced Aggregation ($lookup JOIN & $facet)',
            definition: 'Perform multi-collection left outer JOINs using $lookup, execute parallel sub-pipeline analysis with $facet, categorize using $bucket, and write results out using $merge.',
            syntax: `db.orders.aggregate([\n  {\n    $lookup: {\n      from: "users",\n      localField: "userId",\n      foreignField: "_id",\n      as: "userDetails"\n    }\n  }\n]);`,
            codeSnippet: `// $lookup JOIN & $facet Multi-Faceted Search Results\ndb.products.aggregate([\n    { $match: { category: "Electronics" } },\n    {\n        $facet: {\n            "priceStats": [\n                { $group: { _id: null, minPrice: { $min: "$price" }, maxPrice: { $max: "$price" } } }\n            ],\n            "topItems": [\n                { $sort: { rating: -1 } },\n                { $limit: 5 }\n            ]\n        }\n    }\n]);`,
            realLifeScenario: 'E-commerce search result pages execute `$facet` pipelines to return product result cards and filter facet counts in a single database round-trip.',
            content: (
                <div className="space-y-6">
                    {/* 1. Definition */}
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-semibold text-cyan-900 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            <code className="text-cyan-600 font-mono">$lookup</code> provides left-outer JOIN functionality, while <code className="text-cyan-600 font-mono">$facet</code> processes multiple aggregation pipelines within a single stage on the same set of input documents.
                        </p>
                    </div>

                    {/* 2. Real-Life Analogy & Example */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            A facet search is like an online shopping sidebar. One query returns the items, the count of items per brand, and the price range, all at once.
                        </p>
                    </div>

                    {/* 3. Visual Explanation (Mermaid.js) */}
                    <div className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2 text-cyan-600" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`
                            graph TD
                                IN[Docs] --> F[$facet]
                                F --> P1[Pipeline 1: Top 5]
                                F --> P2[Pipeline 2: Stats]
                                P1 --> OUT[Unified Result]
                                P2 --> OUT
                        `} />
                    </div>

                    {/* 4. Sample Code */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-cyan-600" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`db.orders.aggregate([{ $lookup: { from: "users", localField: "userId", foreignField: "_id", as: "user" } }]);`} lang="javascript" />
                    </div>

                    {/* 5. Real-World Application */}
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-semibold text-emerald-900 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Combining order details with customer profiles using <code className="text-cyan-600 font-mono">$lookup</code> for comprehensive receipt generation.
                        </p>
                    </div>

                    {/* 6. Advantages & 7. Disadvantages */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl shadow-sm">
                            <h4 className="text-lg font-semibold text-white flex items-center mb-3">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" />
                                Advantages
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Reduces application-side code and network round trips.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl shadow-sm">
                            <h4 className="text-lg font-semibold text-white flex items-center mb-3">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span><code className="text-cyan-400 font-mono">$lookup</code> can be memory intensive if unindexed fields are joined.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'mongodb-transactions-acid-guarantees',
            title: '10. [Advanced] Multi-Document ACID Transactions (startSession)',
            definition: 'MongoDB guarantees single-document atomicity natively and supports multi-document ACID transactions across collections using Client Sessions (`startSession()`).',
            syntax: `const session = client.startSession();\nsession.startTransaction();\ntry {\n  await db.account.updateOne({ _id: sender }, { $inc: { balance: -100 } }, { session });\n  await db.account.updateOne({ _id: receiver }, { $inc: { balance: 100 } }, { session });\n  await session.commitTransaction();\n} catch (e) {\n  await session.abortTransaction();\n}`,
            codeSnippet: `// Multi-Document Bank Transfer Transaction in Node.js\nasync function transferFunds(senderId, receiverId, amount) {\n    const session = await mongoose.startSession();\n    session.startTransaction();\n    try {\n        await Account.updateOne({ _id: senderId }, { $inc: { balance: -amount } }, { session });\n        await Account.updateOne({ _id: receiverId }, { $inc: { balance: amount } }, { session });\n\n        await session.commitTransaction();\n        console.log("Transaction Committed Successfully!");\n    } catch (error) {\n        await session.abortTransaction();\n        console.error("Transaction Aborted & Rolled Back:", error.message);\n    } finally {\n        session.endSession();\n    }\n}`,
            realLifeScenario: 'Financial applications execute multi-document transactions to debit sender balances and credit recipient accounts atomically.',
            content: (
                <div className="space-y-6">
                    {/* 1. Definition */}
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-semibold text-cyan-900 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Transactions ensure that a series of read and write operations execute as a single, indivisible unit. If any operation fails, the entire transaction aborts (rolls back).
                        </p>
                    </div>

                    {/* 2. Real-Life Analogy & Example */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            A bank transfer: you cannot debit Account A without successfully crediting Account B. They both must succeed together, or neither happens.
                        </p>
                    </div>

                    {/* 3. Visual Explanation (Mermaid.js) */}
                    <div className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2 text-cyan-600" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`
                            graph TD
                                S[Start Session] --> T[Start Transaction]
                                T --> O1[Op 1: Debit]
                                O1 --> O2[Op 2: Credit]
                                O2 --> C{Success?}
                                C -- Yes --> CT[Commit]
                                C -- No --> AT[Abort/Rollback]
                        `} />
                    </div>

                    {/* 4. Sample Code */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-cyan-600" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`session.startTransaction(); await commitTransaction();`} lang="javascript" />
                    </div>

                    {/* 5. Real-World Application */}
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-semibold text-emerald-900 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Inventory management where deducting stock and generating an invoice must be completely atomic.
                        </p>
                    </div>

                    {/* 6. Advantages & 7. Disadvantages */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl shadow-sm">
                            <h4 className="text-lg font-semibold text-white flex items-center mb-3">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" />
                                Advantages
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Provides strict ACID guarantees for relational-like integrity.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl shadow-sm">
                            <h4 className="text-lg font-semibold text-white flex items-center mb-3">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Transactions incur significant performance overhead; use sparingly.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'mongodb-replica-sets-high-availability',
            title: '11. [Advanced] Replica Sets & High Availability (Primary, Secondary)',
            definition: 'Replica Sets maintain automated failover and data redundancy via 1 Primary node and multiple Secondary nodes synchronized via the Oplog (Operations Log).',
            syntax: `# Replica Set Read Preference Blueprint:\nmongodb://host1,host2,host3/?replicaSet=myReplSet&readPreference=secondaryPreferred&w=majority`,
            codeSnippet: `# MongoDB Shell Replica Set Status Inspection\nrs.status();\nrs.isMaster();`,
            realLifeScenario: 'If a Primary database node crashes, Secondary nodes trigger an automated election, promoting a new Primary in sub-10 seconds.',
            content: (
                <div className="space-y-6">
                    {/* 1. Definition */}
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-semibold text-cyan-900 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            A Replica Set is a cluster of MongoDB servers that maintain the same dataset, offering redundancy and high availability. Only the Primary accepts writes, while Secondaries replicate the Oplog.
                        </p>
                    </div>

                    {/* 2. Real-Life Analogy & Example */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Like a pilot and co-pilots. If the main pilot faints (crashes), the co-pilots quickly elect one among them to take the controls seamlessly.
                        </p>
                    </div>

                    {/* 3. Visual Explanation (Mermaid.js) */}
                    <div className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2 text-cyan-600" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`
                            graph TD
                                C[Client] -->|Writes| P(Primary Node)
                                P -->|Replicates Oplog| S1(Secondary Node)
                                P -->|Replicates Oplog| S2(Secondary Node)
                        `} />
                    </div>

                    {/* 4. Sample Code */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-cyan-600" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`rs.initiate();`} lang="javascript" />
                    </div>

                    {/* 5. Real-World Application */}
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-semibold text-emerald-900 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Zero-downtime architecture where cloud providers ensure at least one instance is always running in multi-zone deployments.
                        </p>
                    </div>

                    {/* 6. Advantages & 7. Disadvantages */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl shadow-sm">
                            <h4 className="text-lg font-semibold text-white flex items-center mb-3">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" />
                                Advantages
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>High availability and automated failover.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl shadow-sm">
                            <h4 className="text-lg font-semibold text-white flex items-center mb-3">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Requires minimum 3 nodes (costly).</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'mongodb-sharding-horizontal-scaling',
            title: '12. [Advanced] Sharding & Horizontal Scaling (Mongos & Shard Keys)',
            definition: 'Sharding distributes large datasets across multiple independent Shard nodes using Mongos routers, Config Servers, and Shard Key strategies (Range vs Hashed).',
            syntax: `# Enable Sharding on Collection Blueprint:\nsh.enableSharding("ecom_db");\nsh.shardCollection("ecom_db.orders", { customerId: "hashed" });`,
            codeSnippet: `/* Sharded Cluster Component Topology:\nClient ──> Mongos Router ──> Config Servers (Metadata)\n                 ├──> Shard 1 (Data A - M)\n                 └──> Shard 2 (Data N - Z) */`,
            realLifeScenario: 'Global platforms shard collections by `countryCode` or hashed `userId` to scale write operations across dozens of server clusters.',
            content: (
                <div className="space-y-6">
                    {/* 1. Definition */}
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-semibold text-cyan-900 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Sharding is the process of storing data records across multiple machines (horizontal scaling) to support deployments with massive data sizes or high throughput.
                        </p>
                    </div>

                    {/* 2. Real-Life Analogy & Example */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            If a library gets too big, you split it. A-M goes to the North Building, N-Z goes to the South Building. A router (librarian desk) tells you which building to visit.
                        </p>
                    </div>

                    {/* 3. Visual Explanation (Mermaid.js) */}
                    <div className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2 text-cyan-600" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`
                            graph TD
                                C[Client] --> M(Mongos Router)
                                M --> S1(Shard 1)
                                M --> S2(Shard 2)
                                M -.-> CS(Config Servers)
                        `} />
                    </div>

                    {/* 4. Sample Code */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-cyan-600" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`sh.shardCollection("db.coll", { _id: "hashed" });`} lang="javascript" />
                    </div>

                    {/* 5. Real-World Application */}
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-semibold text-emerald-900 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Multi-region SaaS applications shard by geographical region for low latency and data compliance.
                        </p>
                    </div>

                    {/* 6. Advantages & 7. Disadvantages */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl shadow-sm">
                            <h4 className="text-lg font-semibold text-white flex items-center mb-3">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" />
                                Advantages
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Infinitely scales write throughput horizontally.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl shadow-sm">
                            <h4 className="text-lg font-semibold text-white flex items-center mb-3">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Choosing the wrong Shard Key can cause irreversible hot spots (jumbo chunks).</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        // ==================== PROFESSIONAL TIER ====================
        {
            id: 'mongodb-security-access-control-csfle',
            title: '13. [Professional] Security, Access Control & CSFLE (RBAC)',
            definition: 'Secure MongoDB databases using SCRAM-SHA-256 authentication, Role-Based Access Control (RBAC), TLS/SSL encryption, and Client-Side Field Level Encryption (CSFLE).',
            syntax: `use admin;\ndb.createUser({\n  user: "appUser",\n  pwd: "SecretPassword123!",\n  roles: [{ role: "readWrite", db: "ecom_db" }]\n});`,
            codeSnippet: `// CSFLE (Client-Side Field Level Encryption) Concept\n// Sensitive fields (e.g. Social Security Numbers, Credit Cards) are encrypted \n// locally on the client driver BEFORE being sent over the network to MongoDB!`,
            realLifeScenario: 'Healthcare applications use CSFLE to ensure that even database administrators cannot view unencrypted patient social security numbers.',
            content: (
                <div className="space-y-6">
                    {/* 1. Definition */}
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-semibold text-cyan-900 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Enterprise security involves RBAC (Role-Based Access Control) to grant least privilege, TLS for data-in-transit, and CSFLE (Client-Side Field Level Encryption) for data-in-use.
                        </p>
                    </div>

                    {/* 2. Real-Life Analogy & Example */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            CSFLE is like putting a letter inside a locked safe before handing it to a messenger. The messenger (MongoDB) only holds the safe, not the readable letter.
                        </p>
                    </div>

                    {/* 3. Visual Explanation (Mermaid.js) */}
                    <div className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2 text-cyan-600" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`
                            graph LR
                                A[App Driver] -- Encrypts Data --> B[Network TLS]
                                B --> C[MongoDB DB]
                                C -. Blind to data .-> C
                        `} />
                    </div>

                    {/* 4. Sample Code */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-cyan-600" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`db.grantRolesToUser("admin", [ { role: "readWrite", db: "app" } ]);`} lang="javascript" />
                    </div>

                    {/* 5. Real-World Application */}
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-semibold text-emerald-900 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Meeting strict compliance standards like HIPAA or PCI-DSS via encrypted fields.
                        </p>
                    </div>

                    {/* 6. Advantages & 7. Disadvantages */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl shadow-sm">
                            <h4 className="text-lg font-semibold text-white flex items-center mb-3">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" />
                                Advantages
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>DB Admins cannot access sensitive user data.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl shadow-sm">
                            <h4 className="text-lg font-semibold text-white flex items-center mb-3">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Cannot perform complex queries (like regex) on encrypted fields.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'mongodb-backup-restore-administration',
            title: '14. [Professional] Backup, Restore & Administration Tools',
            definition: 'Manage database maintenance using CLI utilities: `mongodump` & `mongorestore` (BSON binary backups), `mongoexport` & `mongoimport` (JSON/CSV), and Atlas automated snapshots.',
            syntax: `# BSON Database Backup & Restore CLI Commands:\n$ mongodump --uri="mongodb://localhost:27017/app_db" --out=/backups/\n$ mongorestore --uri="mongodb://localhost:27017/app_db" /backups/app_db/\n\n# CSV Export:\n$ mongoexport --db=app_db --collection=users --type=csv --fields=name,email --out=users.csv`,
            codeSnippet: `# Running Background Index Build CLI:\ndb.large_collection.createIndex({ email: 1 }, { background: true });`,
            realLifeScenario: 'DevOps engineers schedule nightly `mongodump` Cron tasks and stream continuous Oplog backups for Point-In-Time recovery.',
            content: (
                <div className="space-y-6">
                    {/* 1. Definition */}
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-semibold text-cyan-900 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Database Administration requires robust backup strategies. <code className="text-cyan-600 font-mono">mongodump</code> creates binary BSON exports for full recovery, while <code className="text-cyan-600 font-mono">mongoexport</code> outputs JSON/CSV for data analysis.
                        </p>
                    </div>

                    {/* 2. Real-Life Analogy & Example */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            <code className="text-cyan-600 font-mono">mongodump</code> is like cloning a hard drive exactly (fast, unreadable by humans). <code className="text-cyan-600 font-mono">mongoexport</code> is like printing a document (human-readable, but loses metadata).
                        </p>
                    </div>

                    {/* 3. Visual Explanation (Mermaid.js) */}
                    <div className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2 text-cyan-600" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`
                            graph TD
                                DB[(MongoDB)] -->|mongodump| B[BSON Binary Backup]
                                DB -->|mongoexport| J[JSON/CSV Export]
                                B -->|mongorestore| DB
                        `} />
                    </div>

                    {/* 4. Sample Code */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-cyan-600" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`$ mongodump --uri="mongodb://localhost" --gzip`} lang="bash" />
                    </div>

                    {/* 5. Real-World Application */}
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-semibold text-emerald-900 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Automated CI/CD pipelines restoring nightly dumps into a staging environment for rigorous integration testing.
                        </p>
                    </div>

                    {/* 6. Advantages & 7. Disadvantages */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl shadow-sm">
                            <h4 className="text-lg font-semibold text-white flex items-center mb-3">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" />
                                Advantages
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Gzip compression reduces backup storage footprint.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl shadow-sm">
                            <h4 className="text-lg font-semibold text-white flex items-center mb-3">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>CLI backups lock some operations; better to backup from a Secondary node.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'mongodb-mongoose-odm-nodejs',
            title: '15. [Professional] Mongoose ODM for Node.js (Middleware, .populate)',
            definition: 'Mongoose provides Object Data Modeling (ODM) for Node.js: Schemas, Models, built-in validation, pre/post middleware hooks, Virtuals, `.populate()`, and `.lean()`.',
            syntax: `const userSchema = new mongoose.Schema({\n  username: { type: String, required: true },\n  email: { type: String, unique: true }\n});\nuserSchema.pre('save', async function() { /* Hash password */ });\nconst User = mongoose.model('User', userSchema);`,
            codeSnippet: `const mongoose = require('mongoose');\n\n// Mongoose Schema with Hooks & Validation\nconst productSchema = new mongoose.Schema({\n    title: { type: String, required: [true, 'Product title is required'] },\n    price: { type: Number, min: 0 },\n    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' }\n});\n\n// Optimization: Use .lean() for read-only GET queries to bypass Mongoose document hydration overhead!\nasync function getFastProducts() {\n    return await mongoose.model('Product').find().populate('category').lean();\n}`,
            realLifeScenario: 'Using `.lean()` on read-only queries speeds up Node.js API response times by 3x by returning plain JavaScript objects instead of heavy Mongoose documents.',
            content: (
                <div className="space-y-6">
                    {/* 1. Definition */}
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-semibold text-cyan-900 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Mongoose is an ODM library that enforces schemas at the application level. It offers powerful features like <code className="text-cyan-600 font-mono">.populate()</code> to simulate joins and middleware hooks for auto-processing.
                        </p>
                    </div>

                    {/* 2. Real-Life Analogy & Example */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Mongoose is like a bouncer at a club. While MongoDB itself might let anything in (flexible schema), the bouncer (Mongoose Schema) ensures only valid, structured data passes through.
                        </p>
                    </div>

                    {/* 3. Visual Explanation (Mermaid.js) */}
                    <div className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2 text-cyan-600" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`
                            graph TD
                                A[Node.js App] --> M[Mongoose]
                                M --> V{Validation}
                                V -- Pass --> MW[Pre-Save Hook]
                                MW --> DB[(MongoDB)]
                        `} />
                    </div>

                    {/* 4. Sample Code */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-cyan-600" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`await User.find().populate('posts').lean();`} lang="javascript" />
                    </div>

                    {/* 5. Real-World Application */}
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-semibold text-emerald-900 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Auto-hashing passwords via <code className="text-cyan-600 font-mono">pre('save')</code> hooks before persisting users to the database.
                        </p>
                    </div>

                    {/* 6. Advantages & 7. Disadvantages */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl shadow-sm">
                            <h4 className="text-lg font-semibold text-white flex items-center mb-3">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" />
                                Advantages
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Provides strict typing and validation out-of-the-box.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl shadow-sm">
                            <h4 className="text-lg font-semibold text-white flex items-center mb-3">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Hydrated documents use lots of memory (use <code className="text-cyan-400 font-mono">.lean()</code> to bypass).</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'mongodb-enterprise-atlas-vector-search',
            title: '16. [Professional] Enterprise Architecture & MongoDB Atlas Vector Search',
            definition: 'Deploy MongoDB Atlas multi-cloud managed clusters, incorporating Atlas Vector Search ($vectorSearch) for GenAI semantic search and RAG applications.',
            syntax: `// Atlas Vector Search Aggregation Pipeline Stage Blueprint:\ndb.embedded_docs.aggregate([\n  {\n    $vectorSearch: {\n      index: "vector_index",\n      path: "embedding_vector",\n      queryVector: [0.02, -0.05, 0.12, ...],\n      numCandidates: 100,\n      limit: 5\n    }\n  }\n]);`,
            codeSnippet: `# MongoDB Atlas Multi-Cloud Cluster Architecture\n# Managed Deployment across AWS, Google Cloud, and Azure with Auto-scaling!`,
            realLifeScenario: 'Modern enterprise applications use MongoDB Atlas Vector Search to store operational documents and AI embedding vectors inside 1 single unified database.',
            content: (
                <div className="space-y-6">
                    {/* 1. Definition */}
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-semibold text-cyan-900 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Atlas Vector Search allows storing mathematical representations of data (vectors) and performing similarity searches to build Generative AI and Retrieval-Augmented Generation (RAG) applications directly inside MongoDB.
                        </p>
                    </div>

                    {/* 2. Real-Life Analogy & Example */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Like a highly advanced matchmaker. Instead of matching exact keywords, it understands meaning. &quot;Running shoes&quot; will match &quot;Sneakers&quot; because their vectors exist close together in mathematical space.
                        </p>
                    </div>

                    {/* 3. Visual Explanation (Mermaid.js) */}
                    <div className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2 text-cyan-600" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`
                            graph LR
                                Q[Query String] --> LLM[Embedding Model]
                                LLM --> V[Query Vector]
                                V --> VS[$vectorSearch in Atlas]
                                VS --> R[Semantic Results]
                        `} />
                    </div>

                    {/* 4. Sample Code */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-cyan-600" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`db.movies.aggregate([{ $vectorSearch: { index: "plot_index", path: "plot_embedding", queryVector: [0.1, 0.2], numCandidates: 50, limit: 3 } }]);`} lang="javascript" />
                    </div>

                    {/* 5. Real-World Application */}
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-semibold text-emerald-900 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Building AI customer support chatbots that search internal knowledge base documents semantically instead of relying on exact keyword matches.
                        </p>
                    </div>

                    {/* 6. Advantages & 7. Disadvantages */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl shadow-sm">
                            <h4 className="text-lg font-semibold text-white flex items-center mb-3">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" />
                                Advantages
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Consolidates operational data and AI vector data into a single platform.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl shadow-sm">
                            <h4 className="text-lg font-semibold text-white flex items-center mb-3">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Only available on MongoDB Atlas (cloud), not in local Community Edition.</span>
                                </li>
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
            title="MongoDB Masterclass Course"
            description="Master MongoDB from BSON Documents, CRUD, and Indexing to Aggregations, Transactions, Sharding, Mongoose ODM, and Atlas Vector Search."
            topics={topics}
            icon={Database}
            colorClass="emerald"
            activeTopicIndex={activeTopicIndex}
            onTopicClick={setActiveTopicIndex}
        >
            <div className="space-y-8">
                {/* Part 1: Concept Definition & Detailed Explanation */}
                <div className="bg-emerald-50 dark:bg-emerald-900/10 border-l-4 border-emerald-600 p-6 rounded-r-xl shadow-sm">
                    <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
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
                            <pre>{`// MongoDB Blueprint\ndb.collection.find()`}</pre>
                        </div>
                    </div>
                )}

                {/* Part 3: Executable Code Example */}
                {activeTopic.codeSnippet && (
                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-emerald-600" />
                            3. Executable Production Code Example
                        </h3>
                        <CodeBlock code={activeTopic.codeSnippet} lang="javascript" colorClass="emerald" filename="mongodb_query.js" />
                    </div>
                )}

                {/* Part 4: Real-Life Scenario Example */}
                <div className="bg-emerald-50 dark:bg-emerald-900/10 border-l-4 border-emerald-600 p-6 rounded-r-xl shadow-sm">
                    <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                        <Lightbulb className="w-5 h-5 mr-2" />
                        4. Real-Life Industry Scenario & Application
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                        {activeTopic.realLifeScenario || activeTopic.example || "Powers dynamic e-commerce product catalogs, high-throughput Node.js microservices, real-time analytics aggregation pipelines, and MongoDB Atlas Vector Search for GenAI."}
                    </p>
                </div>
            </div>
        </CoursePageLayout>
    );
};

export default MongoDbCoursePage;
