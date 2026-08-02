const fs = require('fs');
const path = require('path');
const TurndownService = require('turndown');
const turndownService = new TurndownService();

async function fetchLeetCode(slug) {
    try {
        const response = await fetch('https://leetcode.com/graphql', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: `query { question(titleSlug: "${slug}") { content } }` })
        });
        const json = await response.json();
        if (json.data && json.data.question && json.data.question.content) {
            let md = turndownService.turndown(json.data.question.content);
            return md;
        }
        return null;
    } catch(e) {
        return null;
    }
}

async function run() {
    const originalScript = fs.readFileSync(path.join(__dirname, 'generate_seeds.cjs'), 'utf-8');
    
    // Extract rawTables and customProblems
    const definitionsEndIndex = originalScript.indexOf('const processedProblems = [];');
    const definitionsCode = originalScript.substring(0, definitionsEndIndex);
    
    let modCode = definitionsCode.replace('const customProblems =', 'global.customProblems =')
                                 .replace('const rawTables =', 'global.rawTables =');
    eval(modCode);

    const processedProblems = [];
    
    let index = 0;
    const entries = Object.entries(global.rawTables);
    
    console.log("Starting to fetch descriptions from LeetCode...");
    
    for (const [topic, rawTable] of entries) {
        const lines = rawTable.trim().split('\n');
        for (const line of lines) {
            if (!line.trim()) continue;
            const parts = line.split('|').map(p => p.trim());
            if (parts.length < 5) continue;
            
            index++;
            
            const title = parts[2];
            const difficulty = parts[3].toUpperCase();
            const rawDesc = parts[4];
            const companies = parts[5] ? `Companies: ${parts[5]}` : '';

            let slug = title.toLowerCase()
                .replace(/\(.*\)/g, '')
                .replace(/&/g, 'and')
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/^-+|-+$/g, '');

            let originalSlug = slug;
            let counter = 2;
            while (processedProblems.some(p => p.slug === slug)) {
                slug = `${originalSlug}-${counter}`;
                counter++;
            }
            
            // Map common weird names
            if (title === "Product of Array Except Self") slug = "product-of-array-except-self";

            let problemTopic = topic;
            if (topic === "HashMap & HashSet") problemTopic = "HashMaps";
            else if (topic === "Design & Simulation") problemTopic = "Design";
            else if (topic === "Two Pointers & Sliding Window") problemTopic = "Two Pointers";

            const category = "DSA Interview Essentials";

            let finalBoilerplate = "";
            let finalTestCases = "";
            let finalDescription = "";
            
            console.log(`[${index}/355] Fetching: ${title} (${slug})`);
            let lcContent = await fetchLeetCode(slug);
            
            if (lcContent) {
                finalDescription = `## Problem Statement\n\n${lcContent}\n\n`;
                if (companies) {
                    finalDescription += `**Recommended Interview Prep for:** *${parts[5]}*\n\n`;
                }
            } else {
                finalDescription = `## Problem Statement\n\n${rawDesc}\n\n`;
                if (companies) {
                    finalDescription += `**Recommended Interview Prep for:** *${parts[5]}*\n\n`;
                }
                finalDescription += `\n---\n\n### Examples\n\n`;
                finalDescription += `**Example 1:**\n\`\`\`text\nInput: [Provide relevant input here]\nOutput: [Expected output]\nExplanation: Briefly explain how the output is derived from the input.\n\`\`\`\n\n`;
                finalDescription += `**Example 2:**\n\`\`\`text\nInput: [Provide another input here]\nOutput: [Expected output]\n\`\`\`\n\n`;
                finalDescription += `---\n\n### Constraints:\n`;
                finalDescription += `- \`1 <= input.length <= 10^5\`\n`;
                finalDescription += `- \`-10^9 <= input[i] <= 10^9\`\n`;
                finalDescription += `- Time Complexity constraint: \`O(N)\` or \`O(N log N)\` expected.\n`;
                finalDescription += `- Space Complexity constraint: \`O(1)\` or \`O(N)\` expected.\n\n`;
            }

            if (global.customProblems[slug]) {
                const cp = global.customProblems[slug];
                const javaCode = (cp.javaSig ? ("class Solution {\n    " + cp.javaSig + " {\n        return 0; // Default Boilerplate\n    }\n}") : "class Solution {\n}") + "\n\nimport java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        // Wrapper execution logic\n    }\n}";
                const pythonCode = "from typing import List\n\nclass Solution:\n    " + (cp.pySig ? cp.pySig : "pass") + "\n        return 0";
                const cppCode = "#include <vector>\n#include <string>\nusing namespace std;\n\nclass Solution {\npublic:\n    " + (cp.cppSig ? cp.cppSig + " {\n        return 0;\n    }" : "") + "\n};";
                const jsCode = cp.jsSig ? cp.jsSig + " {\n    return 0;\n}" : "";

                finalBoilerplate = JSON.stringify({
                    java: javaCode,
                    python: pythonCode,
                    cpp: cppCode,
                    javascript: jsCode
                });

                finalTestCases = JSON.stringify(cp.examples.map(ex => ({
                    input: ex.input,
                    output: ex.output
                })));
                
                if (!lcContent) {
                    finalDescription += "### Custom Testing\nSince this problem is generic, your program should read the input line from standard input and output the final result. By default, the testing skeleton returns the input string exactly.";
                }
            } else {
                const javaCode = "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String input = sc.hasNextLine() ? sc.nextLine().trim() : \"\";\n        System.out.println(new Solution().solve(input));\n    }\n}\n\nclass Solution {\n    public String solve(String input) {\n        return input;\n    }\n}";
                const pythonCode = "import sys\n\nclass Solution:\n    def solve(self, input_str: str) -> str:\n        return input_str\n\nif __name__ == '__main__':\n    input_data = sys.stdin.read().strip()\n    print(Solution().solve(input_data))";
                const cppCode = "#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Solution {\npublic:\n    string solve(string input) {\n        return input;\n    }\n};\n\nint main() {\n    string input;\n    if (getline(cin, input)) {\n        cout << Solution().solve(input) << endl;\n    }\n    return 0;\n}";
                const jsCode = "const fs = require('fs');\n\nfunction solve(input) {\n    return input;\n}\n\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    console.log(solve(input));\n}\nmain();";

                finalBoilerplate = JSON.stringify({ java: javaCode, python: pythonCode, cpp: cppCode, javascript: jsCode });
                finalTestCases = JSON.stringify([{ input: "test", output: "test" }]);
            }

            processedProblems.push({
                slug: slug,
                title: title,
                description: finalDescription,
                difficulty: difficulty,
                topic: problemTopic,
                category: category,
                boilerplateCode: finalBoilerplate,
                testCases: finalTestCases
            });
            
            await new Promise(r => setTimeout(r, 150));
        }
    }

    const outputPath = path.join('c:', 'Users', 'vinay', 'Videos', 'Development Journey', 'full stack app for adv indian coder', 'backend', 'src', 'main', 'resources', 'practice_problems_seed.json');
    fs.writeFileSync(outputPath, JSON.stringify(processedProblems, null, 2));
    console.log("SUCCESSFULLY FETCHED AND GENERATED ALL " + processedProblems.length + " PROBLEMS SEED JSON AT: " + outputPath);
}

run();
