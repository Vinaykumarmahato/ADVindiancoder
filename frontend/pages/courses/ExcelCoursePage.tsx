import React, { useState } from 'react';
import CoursePageLayout from '../../components/CoursePageLayout';
import { Sheet, BookOpen, Lightbulb, Code, Cpu, Layers, Check, AlertTriangle } from 'lucide-react';
import CodeBlock from '../../components/CodeBlock';
import MermaidDiagram from '../../components/MermaidDiagram';

interface ExcelTopic {
    id: string;
    title: string;
    definition: string;
    example?: string;
    syntax?: string;
    realLifeScenario?: string;
    codeSnippet?: string | null;
    content: React.ReactNode;
}

const ExcelCoursePage = () => {
    const [activeTopicIndex, setActiveTopicIndex] = useState(0);

    const courseData: ExcelTopic[] = [
        {
            id: 'excel-intro-grid-navigation',
            title: '1. [Beginner] Introduction & Grid Navigation (Ribbon, Workbooks)',
            definition: 'Microsoft Excel organizes data into Workbooks containing Worksheets composed of grid cells (A1 cell references). The Formula Bar and Name Box facilitate formula entry.',
            syntax: `Relative Reference:  =A1
Absolute Reference:  =$A$1
Mixed Reference:     =$A1`,
            codeSnippet: `// Basic Formula References
=A1 + B1
=$A$1 * B2
=SUM(C2:C100)`,
            realLifeScenario: 'Financial analysts use absolute cell locking (`$B$1`) when multiplying sales columns by a fixed tax rate cell.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center text-cyan-800 dark:text-cyan-300 font-bold mb-2">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Microsoft Excel organizes data into Workbooks containing Worksheets composed of grid cells (A1 cell references). The Formula Bar and Name Box facilitate formula entry.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center text-blue-800 dark:text-blue-300 font-bold mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Think of a Workbook as a physical binder, Worksheets as the pages inside, and cells as individual boxes on a grid paper where you can write numbers or rules.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-4 rounded-lg">
                        <h4 className="flex items-center text-slate-800 dark:text-slate-300 font-bold mb-4">
                            <Layers className="w-5 h-5 mr-2" /> Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph TD
    A[Workbook] --> B[Worksheet 1]
    A --> C[Worksheet 2]
    B --> D[Cells]
    D --> E[A1]
    D --> F[B2]`} />
                    </div>

                    <div className="bg-slate-900 rounded-lg p-4">
                        <h4 className="flex items-center text-slate-100 font-bold mb-4">
                            <Code className="w-5 h-5 mr-2" /> Sample Code
                        </h4>
                        <CodeBlock code={`// Basic Formula References\n=A1 + B1\n=$A$1 * B2\n=SUM(C2:C100)`} lang="javascript" colorClass="cyan" filename="excel_nav.txt" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center text-emerald-800 dark:text-emerald-300 font-bold mb-2">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Financial analysts use absolute cell locking (<code className="text-cyan-600 font-mono">$B$1</code>) when multiplying sales columns by a fixed tax rate cell.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="flex items-center text-emerald-400 font-bold mb-2">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" /> Advantages
                            </h4>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Universal business standard tool</li>
                                <li>Intuitive grid layout</li>
                                <li>Immediate <code className="text-cyan-400">visual feedback</code></li>
                            </ul>
                        </div>

                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="flex items-center text-red-400 font-bold mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" /> Disadvantages / Limitations
                            </h4>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Easy to overwrite formulas by mistake</li>
                                <li>Not ideal for relational data management</li>
                                <li>Manual error-prone tracking</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'excel-formatting-data-entry',
            title: '2. [Beginner] Basic Formatting & Data Entry (Number Formats)',
            definition: 'Format cell values: Currency, Percentage, Dates, Custom Formats, Cell Borders, Fill Colors, Wrap Text, Merge & Center, and Format as Table (`Ctrl + T`).',
            syntax: `$#,##0.00;($#,##0.00);"-"
yyyy-mm-dd`,
            codeSnippet: `// Converting Data Range to Official Excel Table:
// Select range -> Press Ctrl + T -> Check "My table has headers"
// Provides auto-structured references: =SUM(SalesTable[Amount])`,
            realLifeScenario: 'Converting data ranges to official Excel Tables (`Ctrl + T`) enables dynamic range expansion as new rows are added.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center text-cyan-800 dark:text-cyan-300 font-bold mb-2">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Format cell values: Currency, Percentage, Dates, Custom Formats, Cell Borders, Fill Colors, Wrap Text, Merge &amp; Center, and Format as Table (<code className="text-cyan-600 font-mono">Ctrl + T</code>).
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center text-blue-800 dark:text-blue-300 font-bold mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Like putting clothes on raw numbers. A simple &quot;42&quot; can dress up as &quot;$42.00&quot; or &quot;42%&quot; depending on the context without changing its underlying identity.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-4 rounded-lg">
                        <h4 className="flex items-center text-slate-800 dark:text-slate-300 font-bold mb-4">
                            <Layers className="w-5 h-5 mr-2" /> Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph LR
    A[Raw Number: 42] --> B[Formatting]
    B --> C[Currency: $42.00]
    B --> D[Percentage: 4200%]
    B --> E[Date: Feb 11, 1900]`} />
                    </div>

                    <div className="bg-slate-900 rounded-lg p-4">
                        <h4 className="flex items-center text-slate-100 font-bold mb-4">
                            <Code className="w-5 h-5 mr-2" /> Sample Code
                        </h4>
                        <CodeBlock code={`// Converting Data Range to Official Excel Table:
// Select range -> Press Ctrl + T -> Check "My table has headers"
// Provides auto-structured references: =SUM(SalesTable[Amount])`} lang="javascript" colorClass="cyan" filename="formatting.txt" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center text-emerald-800 dark:text-emerald-300 font-bold mb-2">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Converting data ranges to official Excel Tables (<code className="text-cyan-600 font-mono">Ctrl + T</code>) enables dynamic range expansion as new rows are added.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="flex items-center text-emerald-400 font-bold mb-2">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" /> Advantages
                            </h4>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Greatly enhances readability</li>
                                <li>Structured tables allow dynamic <code className="text-cyan-400">references</code></li>
                                <li>Keeps underlying data intact</li>
                            </ul>
                        </div>

                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="flex items-center text-red-400 font-bold mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" /> Disadvantages / Limitations
                            </h4>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Visual formats can hide true values</li>
                                <li>Inconsistent formatting looks unprofessional</li>
                                <li>Merged cells break sorting and filtering</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'excel-essential-math-text-formulas',
            title: '3. [Beginner] Essential Math & Text Formulas (SUM, CONCAT, TRIM)',
            definition: 'Master core formulas: SUM, AVERAGE, COUNT, COUNTA, MIN, MAX, CONCAT, TEXTJOIN, LEFT, RIGHT, MID, TRIM, UPPER, LOWER, and PROPER.',
            syntax: `=SUM(A1:A10)
=AVERAGE(B1:B50)
=TEXTJOIN(", ", TRUE, C2:C10)
=TRIM(PROPER(A2))`,
            codeSnippet: `// Cleaning Messy Text & Combining Names
=TRIM(MID(A2, 1, 10))
=CONCAT(B2, " ", C2)
=TEXTJOIN(" - ", TRUE, D2:G2)`,
            realLifeScenario: 'Cleaning imported customer names using `=TRIM(PROPER(A2))` fixes irregular uppercase letters and trailing invisible spaces.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center text-cyan-800 dark:text-cyan-300 font-bold mb-2">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Master core formulas: SUM, AVERAGE, COUNT, COUNTA, MIN, MAX, CONCAT, TEXTJOIN, LEFT, RIGHT, MID, TRIM, UPPER, LOWER, and PROPER.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center text-blue-800 dark:text-blue-300 font-bold mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Formulas are like factory machines: you input raw materials (cells) and the machine outputs a finished product (sum, clean text).
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-4 rounded-lg">
                        <h4 className="flex items-center text-slate-800 dark:text-slate-300 font-bold mb-4">
                            <Layers className="w-5 h-5 mr-2" /> Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph TD
    A[Raw Text: " john doe "] --> B[TRIM]
    B --> C["john doe"]
    C --> D[PROPER]
    D --> E["John Doe"]`} />
                    </div>

                    <div className="bg-slate-900 rounded-lg p-4">
                        <h4 className="flex items-center text-slate-100 font-bold mb-4">
                            <Code className="w-5 h-5 mr-2" /> Sample Code
                        </h4>
                        <CodeBlock code={`=TRIM(MID(A2, 1, 10))
=CONCAT(B2, " ", C2)
=TEXTJOIN(" - ", TRUE, D2:G2)`} lang="javascript" colorClass="cyan" filename="math_text.txt" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center text-emerald-800 dark:text-emerald-300 font-bold mb-2">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Cleaning imported customer names using <code className="text-cyan-600 font-mono">=TRIM(PROPER(A2))</code> fixes irregular uppercase letters and trailing invisible spaces.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="flex items-center text-emerald-400 font-bold mb-2">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" /> Advantages
                            </h4>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Reduces manual data entry time</li>
                                <li>Guarantees standardized <code className="text-cyan-400">text formats</code></li>
                                <li>Essential for basic analysis</li>
                            </ul>
                        </div>

                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="flex items-center text-red-400 font-bold mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" /> Disadvantages / Limitations
                            </h4>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Basic math ignores hidden rows unless SUBTOTAL is used</li>
                                <li>Lengthy nested formulas can be hard to read</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'excel-logical-conditional-formulas',
            title: '4. [Beginner] Logical & Conditional Formulas (IF, AND, OR, IFERROR)',
            definition: 'Execute conditional branching logic using IF, AND, OR, NOT, Nested IF statements, and handle formula calculation errors via IFERROR.',
            syntax: `=IF(condition, value_if_true, value_if_false)
=IF(AND(A2>=70, B2>=80), "QUALIFIED", "REJECTED")
=IFERROR(A2/B2, 0)`,
            codeSnippet: `// Multi-Tiered Performance Bonus Calculation
=IF(B2 >= 100000, B2 * 0.10, IF(B2 >= 50000, B2 * 0.05, 0))

// IFERROR Protection for Division Calculations
=IFERROR(C2 / D2, "No Sales Data")`,
            realLifeScenario: 'Wrapping division calculations inside `=IFERROR(A1/B1, 0)` replaces ugly `#DIV/0!` error badges with clean zero values.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center text-cyan-800 dark:text-cyan-300 font-bold mb-2">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Execute conditional branching logic using IF, AND, OR, NOT, Nested IF statements, and handle formula calculation errors via IFERROR.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center text-blue-800 dark:text-blue-300 font-bold mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Think of IF statements like a bouncer at a club: If you meet the criteria (age &ge; 18), you get one outcome (Entry), otherwise another (Rejected).
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-4 rounded-lg">
                        <h4 className="flex items-center text-slate-800 dark:text-slate-300 font-bold mb-4">
                            <Layers className="w-5 h-5 mr-2" /> Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph TD
    A[Score >= 70?] -->|Yes| B[Qualified]
    A -->|No| C[Rejected]`} />
                    </div>

                    <div className="bg-slate-900 rounded-lg p-4">
                        <h4 className="flex items-center text-slate-100 font-bold mb-4">
                            <Code className="w-5 h-5 mr-2" /> Sample Code
                        </h4>
                        <CodeBlock code={`=IF(B2 >= 100000, B2 * 0.10, IF(B2 >= 50000, B2 * 0.05, 0))
=IFERROR(C2 / D2, "No Sales Data")`} lang="javascript" colorClass="cyan" filename="logic.txt" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center text-emerald-800 dark:text-emerald-300 font-bold mb-2">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Wrapping division calculations inside <code className="text-cyan-600 font-mono">=IFERROR(A1/B1, 0)</code> replaces ugly <code className="text-cyan-600 font-mono">#DIV/0!</code> error badges with clean zero values.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="flex items-center text-emerald-400 font-bold mb-2">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" /> Advantages
                            </h4>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Enables automated decision making</li>
                                <li>Cleans up <code className="text-cyan-400">error outputs</code></li>
                                <li>Handles complex conditional scenarios</li>
                            </ul>
                        </div>

                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="flex items-center text-red-400 font-bold mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" /> Disadvantages / Limitations
                            </h4>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Nested IFs become notoriously difficult to maintain</li>
                                <li>Prone to syntax errors with missing parentheses</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'excel-lookup-reference-functions',
            title: '5. [Intermediate] Lookup & Reference Functions (VLOOKUP, XLOOKUP)',
            definition: 'Retrieve data across tables: VLOOKUP (vertical lookup), HLOOKUP, modern XLOOKUP (searches left or right), and the flexible INDEX & MATCH combination.',
            syntax: `=VLOOKUP(lookup_val, table_array, col_idx, FALSE)
=XLOOKUP(lookup_val, lookup_range, return_range, [if_not_found])
=INDEX(return_range, MATCH(lookup_val, lookup_range, 0))`,
            codeSnippet: `// Modern XLOOKUP Syntax Example
=XLOOKUP(10092, Employees[ID], Employees[Salary], "Employee Not Found")

// Classical INDEX & MATCH Combination (Left Lookup)
=INDEX(Products[Name], MATCH(101, Products[ID], 0))`,
            realLifeScenario: 'XLOOKUP replaces legacy VLOOKUP by searching to the left of lookup columns without breaking when new columns are inserted.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center text-cyan-800 dark:text-cyan-300 font-bold mb-2">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Retrieve data across tables: VLOOKUP (vertical lookup), HLOOKUP, modern XLOOKUP (searches left or right), and the flexible INDEX &amp; MATCH combination.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center text-blue-800 dark:text-blue-300 font-bold mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Like looking up a person&apos;s phone number in a directory: you search for their Name (Lookup Value) and return their Phone Number (Return Column).
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-4 rounded-lg">
                        <h4 className="flex items-center text-slate-800 dark:text-slate-300 font-bold mb-4">
                            <Layers className="w-5 h-5 mr-2" /> Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph LR
    A[Lookup Value] --> B[Search Array]
    B --> C[Match Found]
    C --> D[Return Array]
    D --> E[Result]`} />
                    </div>

                    <div className="bg-slate-900 rounded-lg p-4">
                        <h4 className="flex items-center text-slate-100 font-bold mb-4">
                            <Code className="w-5 h-5 mr-2" /> Sample Code
                        </h4>
                        <CodeBlock code={`=XLOOKUP(10092, Employees[ID], Employees[Salary], "Not Found")
=INDEX(Products[Name], MATCH(101, Products[ID], 0))`} lang="javascript" colorClass="cyan" filename="lookup.txt" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center text-emerald-800 dark:text-emerald-300 font-bold mb-2">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            XLOOKUP replaces legacy VLOOKUP by searching to the left of lookup columns without breaking when new columns are inserted.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="flex items-center text-emerald-400 font-bold mb-2">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" /> Advantages
                            </h4>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Links disparate tables together</li>
                                <li>XLOOKUP is <code className="text-cyan-400">dynamic and robust</code></li>
                                <li>Eliminates manual searching</li>
                            </ul>
                        </div>

                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="flex items-center text-red-400 font-bold mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" /> Disadvantages / Limitations
                            </h4>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>VLOOKUP breaks when columns are inserted</li>
                                <li>Heavy lookups slow down large workbooks</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'excel-advanced-counting-summing',
            title: '6. [Intermediate] Advanced Counting & Summing (SUMIFS, COUNTIFS)',
            definition: 'Aggregate conditional ranges using SUMIF, SUMIFS (multi-criteria), COUNTIF, COUNTIFS, AVERAGEIFS, incorporating wildcards (* for text, ? for single char).',
            syntax: `=SUMIFS(sum_range, criteria_range1, criteria1, criteria_range2, criteria2)
=COUNTIFS(range1, "North", range2, ">5000")
=SUMIF(A2:A50, "North*", B2:B50)`,
            codeSnippet: `// Multi-Criteria Sales Summary Calculation
=SUMIFS(Sales[Amount], Sales[Region], "North", Sales[Category], "Electronics")

// Count Completed Orders over 10,000
=COUNTIFS(Orders[Status], "Completed", Orders[Total], ">=10000")`,
            realLifeScenario: 'Calculating total sales revenue for specific regional managers within explicit date ranges uses `SUMIFS()`.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center text-cyan-800 dark:text-cyan-300 font-bold mb-2">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Aggregate conditional ranges using SUMIF, SUMIFS (multi-criteria), COUNTIF, COUNTIFS, AVERAGEIFS, incorporating wildcards (* for text, ? for single char).
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center text-blue-800 dark:text-blue-300 font-bold mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Like asking an assistant to sum the total cost of ONLY the apples (criteria 1) that are red (criteria 2) in a mixed fruit basket.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-4 rounded-lg">
                        <h4 className="flex items-center text-slate-800 dark:text-slate-300 font-bold mb-4">
                            <Layers className="w-5 h-5 mr-2" /> Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph TD
    A[Data Table] --> B{Region = North}
    B -->|Yes| C{Category = Tech}
    C -->|Yes| D[Sum Amount]
    B -->|No| E[Skip]
    C -->|No| E`} />
                    </div>

                    <div className="bg-slate-900 rounded-lg p-4">
                        <h4 className="flex items-center text-slate-100 font-bold mb-4">
                            <Code className="w-5 h-5 mr-2" /> Sample Code
                        </h4>
                        <CodeBlock code={`=SUMIFS(Sales[Amount], Sales[Region], "North", Sales[Category], "Electronics")
=COUNTIFS(Orders[Status], "Completed", Orders[Total], ">=10000")`} lang="javascript" colorClass="cyan" filename="sumifs.txt" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center text-emerald-800 dark:text-emerald-300 font-bold mb-2">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Calculating total sales revenue for specific regional managers within explicit date ranges uses <code className="text-cyan-600 font-mono">SUMIFS()</code>.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="flex items-center text-emerald-400 font-bold mb-2">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" /> Advantages
                            </h4>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Powerful multidimensional aggregation</li>
                                <li>Wildcard support (<code className="text-cyan-400">*</code>) for partial matches</li>
                            </ul>
                        </div>

                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="flex items-center text-red-400 font-bold mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" /> Disadvantages / Limitations
                            </h4>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Syntax order differs between SUMIF and SUMIFS</li>
                                <li>Requires exact dimension matching between ranges</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'excel-data-validation-conditional-formatting',
            title: '7. [Intermediate] Data Validation & Conditional Formatting',
            definition: 'Enforce data entry rules via Data Validation (dropdown lists, number limits). Highlight key trends dynamically using Conditional Formatting (Data Bars, Color Scales).',
            syntax: `# Data Validation Dropdown Blueprint:
Settings -> Allow: List -> Source: =$G$2:$G$10

# Conditional Formatting Formula Rule:
=$C2 > AVERAGE($C$2:$C$100)`,
            codeSnippet: `// Conditional Formatting Rule to Highlight Rows where Status = "OVERDUE"
// Apply to range A2:E100 with Rule: =$D2="OVERDUE"`,
            realLifeScenario: 'Data Validation dropdown lists restrict user form inputs to approved regional office codes, eliminating typos.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center text-cyan-800 dark:text-cyan-300 font-bold mb-2">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Enforce data entry rules via Data Validation (dropdown lists, number limits). Highlight key trends dynamically using Conditional Formatting (Data Bars, Color Scales).
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center text-blue-800 dark:text-blue-300 font-bold mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Data validation is like a multiple-choice test (you can only pick A, B, C). Conditional formatting is like a traffic light turning red when speed is high.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-4 rounded-lg">
                        <h4 className="flex items-center text-slate-800 dark:text-slate-300 font-bold mb-4">
                            <Layers className="w-5 h-5 mr-2" /> Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph TD
    A[User Input] --> B{Data Validation}
    B -->|Invalid| C[Reject Input]
    B -->|Valid| D[Accept Input]
    D --> E{Conditional Format}
    E -->|Condition Met| F[Apply Red Fill]
    E -->|Not Met| G[Default Fill]`} />
                    </div>

                    <div className="bg-slate-900 rounded-lg p-4">
                        <h4 className="flex items-center text-slate-100 font-bold mb-4">
                            <Code className="w-5 h-5 mr-2" /> Sample Code
                        </h4>
                        <CodeBlock code={`// Conditional Formatting Rule to Highlight Rows where Status = "OVERDUE"
// Apply to range A2:E100 with Rule: =$D2="OVERDUE"`} lang="javascript" colorClass="cyan" filename="cond_fmt.txt" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center text-emerald-800 dark:text-emerald-300 font-bold mb-2">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Data Validation dropdown lists restrict user form inputs to approved regional office codes, eliminating typos.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="flex items-center text-emerald-400 font-bold mb-2">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" /> Advantages
                            </h4>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Maintains high <code className="text-cyan-400">data integrity</code></li>
                                <li>Visual cues immediately spot outliers</li>
                            </ul>
                        </div>

                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="flex items-center text-red-400 font-bold mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" /> Disadvantages / Limitations
                            </h4>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Too many rules slow down the workbook</li>
                                <li>Overlapping rules can cause unexpected colors</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'excel-data-cleaning-text-tools',
            title: '8. [Intermediate] Data Cleaning & Text Tools (Flash Fill)',
            definition: 'Clean messy data using Text to Columns (delimiter splitting), Remove Duplicates, Flash Fill (`Ctrl + E`), TRIM, and CLEAN for invisible line breaks.',
            syntax: `# Flash Fill Shortcut: Ctrl + E (Auto-detects pattern formatting!)
# Text to Columns Shortcut: Alt + A + E (Splits delimited CSV text)`,
            codeSnippet: `// Splitting Full Names using Text to Columns or TRIM/LEFT/RIGHT
// Flash Fill (Ctrl + E) auto-extracts domain names from emails:
user@company.com -> company.com`,
            realLifeScenario: 'Using `Flash Fill (Ctrl + E)` automatically extracts area codes from phone number columns without writing complex nested string formulas.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center text-cyan-800 dark:text-cyan-300 font-bold mb-2">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Clean messy data using Text to Columns (delimiter splitting), Remove Duplicates, Flash Fill (<code className="text-cyan-600 font-mono">Ctrl + E</code>), TRIM, and CLEAN for invisible line breaks.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center text-blue-800 dark:text-blue-300 font-bold mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Flash fill is like an AI assistant watching you type out the first name from a full name cell, and then auto-completing the rest of the column for you.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-4 rounded-lg">
                        <h4 className="flex items-center text-slate-800 dark:text-slate-300 font-bold mb-4">
                            <Layers className="w-5 h-5 mr-2" /> Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph LR
    A[Messy Strings] --> B[Flash Fill AI]
    B --> C[Extracted First Names]
    A --> D[Text to Columns]
    D --> E[Col 1]
    D --> F[Col 2]`} />
                    </div>

                    <div className="bg-slate-900 rounded-lg p-4">
                        <h4 className="flex items-center text-slate-100 font-bold mb-4">
                            <Code className="w-5 h-5 mr-2" /> Sample Code
                        </h4>
                        <CodeBlock code={`// Flash Fill (Ctrl + E) auto-extracts domain names from emails:
// user@company.com -> company.com`} lang="javascript" colorClass="cyan" filename="flash_fill.txt" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center text-emerald-800 dark:text-emerald-300 font-bold mb-2">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Using <code className="text-cyan-600 font-mono">Flash Fill (Ctrl + E)</code> automatically extracts area codes from phone number columns without writing complex nested string formulas.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="flex items-center text-emerald-400 font-bold mb-2">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" /> Advantages
                            </h4>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Incredibly fast pattern matching</li>
                                <li>Zero <code className="text-cyan-400">formula knowledge</code> required</li>
                            </ul>
                        </div>

                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="flex items-center text-red-400 font-bold mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" /> Disadvantages / Limitations
                            </h4>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Flash fill is not dynamic; won&apos;t update if source changes</li>
                                <li>May misinterpret complex text patterns</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'excel-pivot-tables-charts',
            title: '9. [Advanced] Pivot Tables & Pivot Charts (Slicers & Calculated Fields)',
            definition: 'Summarize datasets dynamically using Pivot Tables: Drag fields to Values, Rows, Columns, Filters. Enhance with Calculated Fields, Slicers, Timelines, and Pivot Charts.',
            syntax: `# Pivot Table Layout Configuration Blueprint:
Rows      : [Region, Salesperson]
Columns   : [Quarter]
Values    : [Sum of Revenue, % of Column Total]
Slicers   : [Category, Year]`,
            codeSnippet: `// Creating Calculated Field inside Pivot Table:
// Field Name: ProfitMargin
// Formula: = (Revenue - Cost) / Revenue`,
            realLifeScenario: 'Executive management uses Slicers to filter global Pivot Table revenue summaries by product category and sales region instantly.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center text-cyan-800 dark:text-cyan-300 font-bold mb-2">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Summarize datasets dynamically using Pivot Tables: Drag fields to Values, Rows, Columns, Filters. Enhance with Calculated Fields, Slicers, Timelines, and Pivot Charts.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center text-blue-800 dark:text-blue-300 font-bold mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Like a Rubik&apos;s cube for your data: you can twist and turn the dimensions (rows/columns) to see the exact aggregated view you need.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-4 rounded-lg">
                        <h4 className="flex items-center text-slate-800 dark:text-slate-300 font-bold mb-4">
                            <Layers className="w-5 h-5 mr-2" /> Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph TD
    A[Millions of Rows] --> B[Pivot Cache]
    B --> C[Pivot Table Engine]
    C --> D[Aggregated Rows]
    C --> E[Aggregated Columns]
    D --> F[Pivot Chart UI]`} />
                    </div>

                    <div className="bg-slate-900 rounded-lg p-4">
                        <h4 className="flex items-center text-slate-100 font-bold mb-4">
                            <Code className="w-5 h-5 mr-2" /> Sample Code
                        </h4>
                        <CodeBlock code={`// Creating Calculated Field inside Pivot Table:
// Field Name: ProfitMargin
// Formula: = (Revenue - Cost) / Revenue`} lang="javascript" colorClass="cyan" filename="pivot.txt" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center text-emerald-800 dark:text-emerald-300 font-bold mb-2">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Executive management uses Slicers to filter global Pivot Table revenue summaries by product category and sales region instantly.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="flex items-center text-emerald-400 font-bold mb-2">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" /> Advantages
                            </h4>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Instant aggregation without formulas</li>
                                <li>Highly interactive dashboards via <code className="text-cyan-400">Slicers</code></li>
                            </ul>
                        </div>

                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="flex items-center text-red-400 font-bold mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" /> Disadvantages / Limitations
                            </h4>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Requires manual refresh when source data changes</li>
                                <li>Calculated fields can have complex subtotalling behavior</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'excel-dynamic-array-formulas',
            title: '10. [Advanced] Dynamic Array Formulas (FILTER, UNIQUE, SORT, Spill #)',
            definition: 'Modern Excel calculations spill array results automatically: FILTER(), UNIQUE(), SORT(), SORTBY(), SEQUENCE(), RANDARRAY(), and the Spill operator (`#`).',
            syntax: `=FILTER(array, include_condition, [if_empty])
=UNIQUE(array)
=SORT(FILTER(Sales, Sales[Amount]>5000), 2, -1) # Sort by col 2 desc
=A2#                             # References entire spilled range from A2`,
            codeSnippet: `// Extract Unique List of Active High-Value Customers
=SORT(UNIQUE(FILTER(Orders[Customer], Orders[Amount] > 50000, "No High Values")))

// Generate Sequence of 12 Monthly Serial Numbers
=SEQUENCE(12, 1, 1001, 1)`,
            realLifeScenario: '`=UNIQUE(FILTER(...))` dynamically extracts a sorted list of active customer names that automatically updates when raw data changes.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center text-cyan-800 dark:text-cyan-300 font-bold mb-2">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Modern Excel calculations spill array results automatically: FILTER(), UNIQUE(), SORT(), SORTBY(), SEQUENCE(), RANDARRAY(), and the Spill operator (<code className="text-cyan-600 font-mono">#</code>).
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center text-blue-800 dark:text-blue-300 font-bold mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Like pouring water into an ice tray: you write one formula in the top cell, and the answers &quot;spill&quot; down into adjacent empty cells automatically.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-4 rounded-lg">
                        <h4 className="flex items-center text-slate-800 dark:text-slate-300 font-bold mb-4">
                            <Layers className="w-5 h-5 mr-2" /> Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph TD
    A[Source Data] --> B[=FILTER()]
    B --> C[Cell 1: Spill]
    B --> D[Cell 2: Spill]
    B --> E[Cell 3: Spill]`} />
                    </div>

                    <div className="bg-slate-900 rounded-lg p-4">
                        <h4 className="flex items-center text-slate-100 font-bold mb-4">
                            <Code className="w-5 h-5 mr-2" /> Sample Code
                        </h4>
                        <CodeBlock code={`=SORT(UNIQUE(FILTER(Orders[Customer], Orders[Amount] > 50000, "No High Values")))
=SEQUENCE(12, 1, 1001, 1)`} lang="javascript" colorClass="cyan" filename="arrays.txt" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center text-emerald-800 dark:text-emerald-300 font-bold mb-2">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            <code className="text-cyan-600 font-mono">=UNIQUE(FILTER(...))</code> dynamically extracts a sorted list of active customer names that automatically updates when raw data changes.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="flex items-center text-emerald-400 font-bold mb-2">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" /> Advantages
                            </h4>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Replaces clunky legacy array formulas (Ctrl+Shift+Enter)</li>
                                <li>Fully <code className="text-cyan-400">dynamic</code> size</li>
                            </ul>
                        </div>

                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="flex items-center text-red-400 font-bold mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" /> Disadvantages / Limitations
                            </h4>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Results in a #SPILL! error if adjacent cells aren&apos;t empty</li>
                                <li>Only available in modern Office 365 versions</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'excel-financial-statistical-analysis',
            title: '11. [Advanced] Financial & Statistical Analysis (PMT, NPV, IRR)',
            definition: 'Analyze financial scenarios: PMT (loan payments), PV, FV, NPV (Net Present Value), IRR (Internal Rate of Return), and statistical functions (STDEV.S, FORECAST.LINEAR).',
            syntax: `=PMT(rate/12, nper, pv)           # Monthly loan payment
=NPV(rate, value1, value2, ...)  # Net present value of cash flows
=IRR(values)                     # Internal rate of return`,
            codeSnippet: `// Calculating Monthly Loan Payment for ₹1,000,000 at 8.5% for 5 years
// Rate = 8.5%/12, Nper = 5*12 = 60 months, PV = -1000000
=PMT(0.085/12, 60, -1000000)     // Output: Monthly installment amount

// Calculating Project Net Present Value (10% Discount Rate)
=NPV(0.10, C2:C6) + C1           // C1 is initial negative investment`,
            realLifeScenario: 'Investment banking teams evaluate commercial real estate acquisitions using NPV and IRR cash flow models.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center text-cyan-800 dark:text-cyan-300 font-bold mb-2">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Analyze financial scenarios: PMT (loan payments), PV, FV, NPV (Net Present Value), IRR (Internal Rate of Return), and statistical functions (STDEV.S, FORECAST.LINEAR).
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center text-blue-800 dark:text-blue-300 font-bold mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Like a financial calculator app built directly into your spreadsheet, letting you foresee if a loan is affordable or an investment is profitable over time.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-4 rounded-lg">
                        <h4 className="flex items-center text-slate-800 dark:text-slate-300 font-bold mb-4">
                            <Layers className="w-5 h-5 mr-2" /> Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph LR
    A[Initial Investment] --> B[Cash Flows Year 1-5]
    B --> C[NPV Function]
    B --> D[IRR Function]
    C --> E[Project Viability]
    D --> E`} />
                    </div>

                    <div className="bg-slate-900 rounded-lg p-4">
                        <h4 className="flex items-center text-slate-100 font-bold mb-4">
                            <Code className="w-5 h-5 mr-2" /> Sample Code
                        </h4>
                        <CodeBlock code={`=PMT(0.085/12, 60, -1000000)
=NPV(0.10, C2:C6) + C1`} lang="javascript" colorClass="cyan" filename="finance.txt" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center text-emerald-800 dark:text-emerald-300 font-bold mb-2">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Investment banking teams evaluate commercial real estate acquisitions using NPV and IRR cash flow models.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="flex items-center text-emerald-400 font-bold mb-2">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" /> Advantages
                            </h4>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Industry standard for <code className="text-cyan-400">financial modeling</code></li>
                                <li>Avoids manual complex algebra</li>
                            </ul>
                        </div>

                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="flex items-center text-red-400 font-bold mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" /> Disadvantages / Limitations
                            </h4>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>NPV function timing assumes cash flows at end of period</li>
                                <li>Requires strict sign conventions (positive vs negative cash flows)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'excel-what-if-analysis-solver',
            title: '12. [Advanced] What-If Analysis & Solver (Goal Seek & Data Tables)',
            definition: 'Perform scenario modeling: Goal Seek (single variable target solver), Data Tables (1-variable & 2-variable sensitivity matrices), Scenario Manager, and Solver Add-in.',
            syntax: `# What-If Tool Matrix Blueprint:
Goal Seek        ──> Back-calculates input cell needed for target result
Data Tables      ──> Calculates 2D matrix of results across varying inputs
Solver Add-in    ──> Linear optimization subject to linear constraints`,
            codeSnippet: `// Goal Seek Usage Scenario:
// "What sales volume is required to achieve ₹500,000 Net Profit?"
// Set Cell: NetProfit (E10) -> To Value: 500000 -> By Changing Cell: UnitsSold (B2)`,
            realLifeScenario: 'Supply chain managers use Solver to minimize shipping costs across 5 warehouses while satisfying customer demand constraints.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center text-cyan-800 dark:text-cyan-300 font-bold mb-2">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Perform scenario modeling: Goal Seek (single variable target solver), Data Tables (1-variable &amp; 2-variable sensitivity matrices), Scenario Manager, and Solver Add-in.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center text-blue-800 dark:text-blue-300 font-bold mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Like driving backwards: instead of knowing your speed to find the time it takes, you know the time you want to arrive, and the tool tells you what speed you must drive.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-4 rounded-lg">
                        <h4 className="flex items-center text-slate-800 dark:text-slate-300 font-bold mb-4">
                            <Layers className="w-5 h-5 mr-2" /> Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph TD
    A[Target Profit: 500k] --> B[Goal Seek]
    B --> C[Adjusts Units Sold]
    C --> D[Recalculates Formula]
    D --> E[Found Optimal Input]`} />
                    </div>

                    <div className="bg-slate-900 rounded-lg p-4">
                        <h4 className="flex items-center text-slate-100 font-bold mb-4">
                            <Code className="w-5 h-5 mr-2" /> Sample Code
                        </h4>
                        <CodeBlock code={`// Goal Seek Usage Scenario:
// Set Cell: NetProfit (E10) -> To Value: 500000 -> By Changing Cell: UnitsSold (B2)`} lang="javascript" colorClass="cyan" filename="solver.txt" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center text-emerald-800 dark:text-emerald-300 font-bold mb-2">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Supply chain managers use Solver to minimize shipping costs across 5 warehouses while satisfying customer demand constraints.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="flex items-center text-emerald-400 font-bold mb-2">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" /> Advantages
                            </h4>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Solves complex reverse-engineering problems</li>
                                <li>Data tables provide instant <code className="text-cyan-400">sensitivity analysis</code></li>
                            </ul>
                        </div>

                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="flex items-center text-red-400 font-bold mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" /> Disadvantages / Limitations
                            </h4>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Goal seek only works on a single variable</li>
                                <li>Solver requires mathematical understanding of constraints</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'excel-power-query-etl',
            title: '13. [Professional] Power Query (Get & Transform ETL Engine)',
            definition: 'Extract, Transform, and Load (ETL) data feeds using Power Query: Import CSV/SQL/Web data, Unpivot columns, Split text, Merge queries (JOINs), and Append queries (UNIONs).',
            syntax: `# Power Query M-Code Transformation Step Blueprint:
Table.UnpivotOtherColumns(Source, {"CategoryID"}, "Month", "SalesAmount")
Table.NestedJoin(Table1, {"ID"}, Table2, {"ID"}, "JoinedTable", JoinKind.LeftOuter)`,
            codeSnippet: `/* Power Query Unpivot Transformation Flow:
Cross-tabbed Monthly Columns (Jan, Feb, Mar) ──> Power Query Unpivot ──> Clean Normalized Tabular Rows (Month, Amount) */`,
            realLifeScenario: 'Power Query automatically cleans and transforms messy monthly sales reports from 12 separate CSV files into 1 consolidated database table.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center text-cyan-800 dark:text-cyan-300 font-bold mb-2">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Extract, Transform, and Load (ETL) data feeds using Power Query: Import CSV/SQL/Web data, Unpivot columns, Split text, Merge queries (JOINs), and Append queries (UNIONs).
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center text-blue-800 dark:text-blue-300 font-bold mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Like an automated assembly line: dirty raw materials enter, get scrubbed, reshaped, and polished through steps, outputting clean structured data at the end.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-4 rounded-lg">
                        <h4 className="flex items-center text-slate-800 dark:text-slate-300 font-bold mb-4">
                            <Layers className="w-5 h-5 mr-2" /> Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph LR
    A[Raw CSV/Web Data] --> B[Power Query Extract]
    B --> C[Transform Steps M-Code]
    C --> D[Load to Data Model]
    D --> E[Clean Output Table]`} />
                    </div>

                    <div className="bg-slate-900 rounded-lg p-4">
                        <h4 className="flex items-center text-slate-100 font-bold mb-4">
                            <Code className="w-5 h-5 mr-2" /> Sample Code
                        </h4>
                        <CodeBlock code={`Table.UnpivotOtherColumns(Source, {"CategoryID"}, "Month", "SalesAmount")
Table.NestedJoin(Table1, {"ID"}, Table2, {"ID"}, "JoinedTable", JoinKind.LeftOuter)`} lang="javascript" colorClass="cyan" filename="powerquery.m" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center text-emerald-800 dark:text-emerald-300 font-bold mb-2">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Power Query automatically cleans and transforms messy monthly sales reports from 12 separate CSV files into 1 consolidated database table.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="flex items-center text-emerald-400 font-bold mb-2">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" /> Advantages
                            </h4>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Eliminates repetitive monthly manual cleaning</li>
                                <li>Records transformation steps for <code className="text-cyan-400">1-click refresh</code></li>
                            </ul>
                        </div>

                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="flex items-center text-red-400 font-bold mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" /> Disadvantages / Limitations
                            </h4>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>M-Code can be intimidating for beginners</li>
                                <li>Slower processing on extremely massive datasets vs SQL</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'excel-power-pivot-dax',
            title: '14. [Professional] Power Pivot & DAX Fundamentals (CALCULATE, SUMX)',
            definition: 'Build enterprise Data Models linking multiple tables via 1:N relationships in Power Pivot. Write Data Analysis Expressions (DAX): CALCULATE, RELATED, SUMX, and Time Intelligence.',
            syntax: `/* DAX Measure Blueprint: */
TotalSales := SUM(Sales[Amount])
YTD_Sales := TOTALYTD([TotalSales], 'Calendar'[Date])
North_Sales := CALCULATE([TotalSales], Regions[Name] = "North")`,
            codeSnippet: `// DAX Measure Comparing Current Sales to Prior Year (Time Intelligence)
Sales_Prior_Year := CALCULATE(
    [TotalSales],
    SAMEPERIODLASTYEAR('Calendar'[Date])
)

// DAX Iterative SUMX Measure
Total_Profit := SUMX(
    Sales,
    Sales[Quantity] * (Sales[UnitPrice] - Sales[UnitCost])
)`,
            realLifeScenario: 'Business Intelligence analysts build DAX measures to compare Year-over-Year (YoY) revenue performance across millions of transaction records.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center text-cyan-800 dark:text-cyan-300 font-bold mb-2">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Build enterprise Data Models linking multiple tables via 1:N relationships in Power Pivot. Write Data Analysis Expressions (DAX): CALCULATE, RELATED, SUMX, and Time Intelligence.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center text-blue-800 dark:text-blue-300 font-bold mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Like upgrading from a calculator to a relational database engine inside Excel that handles millions of rows across related tables effortlessly.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-4 rounded-lg">
                        <h4 className="flex items-center text-slate-800 dark:text-slate-300 font-bold mb-4">
                            <Layers className="w-5 h-5 mr-2" /> Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph TD
    A[Fact Table: Sales] --> B[1:N Relationship]
    C[Dim Table: Products] --> B
    D[Dim Table: Calendar] --> B
    B --> E[Power Pivot Model]
    E --> F[DAX Measures]`} />
                    </div>

                    <div className="bg-slate-900 rounded-lg p-4">
                        <h4 className="flex items-center text-slate-100 font-bold mb-4">
                            <Code className="w-5 h-5 mr-2" /> Sample Code
                        </h4>
                        <CodeBlock code={`Total_Profit := SUMX(
    Sales,
    Sales[Quantity] * (Sales[UnitPrice] - Sales[UnitCost])
)`} lang="javascript" colorClass="cyan" filename="dax.txt" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center text-emerald-800 dark:text-emerald-300 font-bold mb-2">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Business Intelligence analysts build DAX measures to compare Year-over-Year (YoY) revenue performance across millions of transaction records.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="flex items-center text-emerald-400 font-bold mb-2">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" /> Advantages
                            </h4>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Bypasses Excel&apos;s 1-million row limit</li>
                                <li>Advanced <code className="text-cyan-400">Time Intelligence</code> capabilities</li>
                            </ul>
                        </div>

                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="flex items-center text-red-400 font-bold mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" /> Disadvantages / Limitations
                            </h4>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>DAX learning curve is notoriously steep</li>
                                <li>Filter Context concepts can be unintuitive at first</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'excel-vba-macros-automation',
            title: '15. [Professional] VBA Macros & Automation (Visual Basic Editor)',
            definition: 'Automate repetitive workflows using VBA Macros: Visual Basic Editor (`Alt + F11`), Sub procedures, Range/Cell object manipulation, For/Next loops, and UserForms.',
            syntax: `Sub AutomateReport()
    Dim ws As Worksheet
    Set ws = ThisWorkbook.Sheets("Sales")
    ws.Range("A1:E1").Font.Bold = True
    ws.Columns("A:E").AutoFit
End Sub`,
            codeSnippet: `Sub GeneratePDFReports()
    Dim ws As Worksheet
    For Each ws In ThisWorkbook.Worksheets
        If ws.Name <> "Index" Then
            ws.ExportAsFixedFormat Type:=xlTypePDF, _
                Filename:=ThisWorkbook.Path & "\\" & ws.Name & ".pdf"
        End If
    Next ws
    MsgBox "PDF Reports Generated Successfully!", vbInformation
End Sub`,
            realLifeScenario: 'Clicking an assigned macro button runs VBA code that formats raw data, generates charts, and emails PDF summary reports to department managers.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center text-cyan-800 dark:text-cyan-300 font-bold mb-2">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Automate repetitive workflows using VBA Macros: Visual Basic Editor (<code className="text-cyan-600 font-mono">Alt + F11</code>), Sub procedures, Range/Cell object manipulation, For/Next loops, and UserForms.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center text-blue-800 dark:text-blue-300 font-bold mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Like recording a macro on your keyboard: you teach the program a sequence of clicks and keystrokes, and it replays them instantly on command.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-4 rounded-lg">
                        <h4 className="flex items-center text-slate-800 dark:text-slate-300 font-bold mb-4">
                            <Layers className="w-5 h-5 mr-2" /> Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph LR
    A[Macro Button Click] --> B[VBA Sub Procedure]
    B --> C[Loop Through Worksheets]
    C --> D[Format Data & Chart]
    D --> E[Export to PDF/Email]`} />
                    </div>

                    <div className="bg-slate-900 rounded-lg p-4">
                        <h4 className="flex items-center text-slate-100 font-bold mb-4">
                            <Code className="w-5 h-5 mr-2" /> Sample Code
                        </h4>
                        <CodeBlock code={`Sub AutomateReport()
    Dim ws As Worksheet
    Set ws = ThisWorkbook.Sheets("Sales")
    ws.Range("A1:E1").Font.Bold = True
End Sub`} lang="javascript" colorClass="cyan" filename="macro.vba" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center text-emerald-800 dark:text-emerald-300 font-bold mb-2">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Clicking an assigned macro button runs VBA code that formats raw data, generates charts, and emails PDF summary reports to department managers.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="flex items-center text-emerald-400 font-bold mb-2">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" /> Advantages
                            </h4>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Automates virtually <code className="text-cyan-400">any manual task</code></li>
                                <li>Deep integration with Windows OS</li>
                            </ul>
                        </div>

                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="flex items-center text-red-400 font-bold mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" /> Disadvantages / Limitations
                            </h4>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Does not work on Excel for Web</li>
                                <li>Macros trigger security warnings</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'excel-enterprise-dashboards-office-scripts',
            title: '16. [Professional] Enterprise Dashboards & Office Scripts (TypeScript)',
            definition: 'Design executive KPI dashboards, dynamic chart range controls, and automate Excel Online using TypeScript-based Office Scripts integrated with Power Automate.',
            syntax: `/* Office Script TypeScript Blueprint for Excel Online: */
function main(workbook: ExcelScript.Workbook) {
    let sheet = workbook.getActiveWorksheet();
    sheet.getRange("A1:D1").getFormat().getFill().setColor("#0f172a");
}`,
            codeSnippet: `// TypeScript Office Script automating web Excel updates via Power Automate
function main(workbook: ExcelScript.Workbook, newSales: number) {
    let summarySheet = workbook.getWorksheet("Summary");
    let targetCell = summarySheet.getRange("B5");
    targetCell.setValue(newSales);
}`,
            realLifeScenario: 'Power Automate triggers Office Scripts in Excel Online to record Webhook form submissions automatically into cloud spreadsheets.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center text-cyan-800 dark:text-cyan-300 font-bold mb-2">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Design executive KPI dashboards, dynamic chart range controls, and automate Excel Online using TypeScript-based Office Scripts integrated with Power Automate.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center text-blue-800 dark:text-blue-300 font-bold mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Think of Office Scripts as the modern cloud-native sibling of VBA, allowing you to run code on Excel files even when your computer is turned off.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-4 rounded-lg">
                        <h4 className="flex items-center text-slate-800 dark:text-slate-300 font-bold mb-4">
                            <Layers className="w-5 h-5 mr-2" /> Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph LR
    A[Power Automate Flow] --> B[Trigger API]
    B --> C[Office Script TypeScript]
    C --> D[Excel Online Workbook]
    D --> E[Cloud Dashboard Updated]`} />
                    </div>

                    <div className="bg-slate-900 rounded-lg p-4">
                        <h4 className="flex items-center text-slate-100 font-bold mb-4">
                            <Code className="w-5 h-5 mr-2" /> Sample Code
                        </h4>
                        <CodeBlock code={`function main(workbook: ExcelScript.Workbook, newSales: number) {
    let summarySheet = workbook.getWorksheet("Summary");
    summarySheet.getRange("B5").setValue(newSales);
}`} lang="javascript" colorClass="cyan" filename="script.ts" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center text-emerald-800 dark:text-emerald-300 font-bold mb-2">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Power Automate triggers Office Scripts in Excel Online to record Webhook form submissions automatically into cloud spreadsheets.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="flex items-center text-emerald-400 font-bold mb-2">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" /> Advantages
                            </h4>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Native <code className="text-cyan-400">cloud execution</code></li>
                                <li>Uses standard TypeScript/JavaScript</li>
                            </ul>
                        </div>

                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="flex items-center text-red-400 font-bold mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" /> Disadvantages / Limitations
                            </h4>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Not backward compatible with older Excel versions</li>
                                <li>Lacks the deep OS integrations of VBA</li>
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
            title="Excel Data Analytics Masterclass"
            description="Master Excel from Grid Formulas and Data Cleaning to XLOOKUP, Pivot Tables, Dynamic Arrays, Power Query, DAX Data Models, and VBA Macros."
            topics={topics}
            icon={Sheet}
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

export default ExcelCoursePage;
