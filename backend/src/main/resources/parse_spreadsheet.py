import json
import re

def slugify(text):
    text = text.lower().strip()
    text = re.sub(r'[^a-z0-9]+', '-', text)
    return text.strip('-')

def map_difficulty(stars):
    stars = stars.strip()
    if '★★★★★' in stars or '★★★★☆' in stars:
        return 'HARD'
    elif '★★★☆☆' in stars:
        return 'MEDIUM'
    else:
        return 'EASY'

def main():
    filepath = r'c:\Users\vinay\Videos\Development Journey\full stack app for adv indian coder\backend\src\main\resources\spreadsheet.txt'
    outputpath = r'c:\Users\vinay\Videos\Development Journey\full stack app for adv indian coder\backend\src\main\resources\practice_problems_seed.json'
    
    problems = []
    generated_slugs = set()
    
    current_phase = "DSA Master Sheet"
    current_topic = ""
    current_subtopic = ""
    
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()
        
    for line in lines:
        line_str = line.strip()
        if not line_str:
            continue
        
        # Check if phase line
        if line_str.startswith("PHASE"):
            current_phase = line_str.split("\t")[0].strip()
            continue
            
        # Split by tab
        parts = line_str.split("\t")
        if len(parts) < 5:
            continue
            
        sr_no = parts[0].strip()
        sub_sr_no = parts[1].strip()
        
        # Skip header rows
        if sr_no == "Sr" or "Sr No." in sr_no or sr_no.startswith("DSA") or not sr_no.isdigit():
            continue
            
        topic = parts[2].strip()
        subtopic = parts[3].strip()
        problem_name = parts[4].strip()
        
        if topic:
            current_topic = topic
        if subtopic:
            current_subtopic = subtopic
            
        # Link and Difficulty
        link = parts[5].strip() if len(parts) > 5 else ""
        diff_stars = parts[6].strip() if len(parts) > 6 else ""
        difficulty = map_difficulty(diff_stars)
        
        base_slug = slugify(problem_name)
        slug = base_slug
        counter = 1
        while slug in generated_slugs:
            counter += 1
            slug = f"{base_slug}-{counter}"
        generated_slugs.add(slug)
        
        # Build description
        desc = f"## Description\n\nSolve the problem **{problem_name}**.\n\n"
        if current_subtopic:
            desc += f"**Subtopic:** {current_subtopic}  \n"
        if current_topic:
            desc += f"**Topic:** {current_topic}  \n"
        if current_phase:
            desc += f"**Phase:** {current_phase}  \n"
        if link and link != "Link":
            desc += f"\nExternal Link: [Solve on Platform]({link})\n"
            
        desc += "\n### Custom Testing\nRead standard input and write to standard output to verify your solution."
        
        # Standard boilerplate
        java_bp = (
            "import java.util.*;\n\n"
            "public class Main {\n"
            "    public static void main(String[] args) {\n"
            "        Scanner sc = new Scanner(System.in);\n"
            "        String input = sc.hasNextLine() ? sc.nextLine().trim() : \"\";\n"
            "        System.out.println(new Solution().solve(input));\n"
            "    }\n"
            "}\n\n"
            "class Solution {\n"
            "    public String solve(String input) {\n"
            "        // Write your solution logic here\n"
            "        return input;\n"
            "    }\n"
            "}"
        )
        
        python_bp = (
            "import sys\n\n"
            "class Solution:\n"
            "    def solve(self, input_str: str) -> str:\n"
            "        # Write your solution logic here\n"
            "        return input_str\n\n"
            "if __name__ == '__main__':\n"
            "    input_data = sys.stdin.read().strip()\n"
            "    print(Solution().solve(input_data))"
        )
        
        cpp_bp = (
            "#include <iostream>\n"
            "#include <string>\n"
            "using namespace std;\n\n"
            "class Solution {\n"
            "public:\n"
            "    string solve(string input) {\n"
            "        // Write your solution logic here\n"
            "        return input;\n"
            "    }\n"
            "};\n\n"
            "int main() {\n"
            "    string input;\n"
            "    if (getline(cin, input)) {\n"
            "        cout << Solution().solve(input) << endl;\n"
            "    }\n"
            "    return 0;\n"
            "}"
        )
        
        js_bp = (
            "const fs = require('fs');\n\n"
            "function solve(input) {\n"
            "    // Write your solution logic here\n"
            "    return input;\n"
            "}\n\n"
            "function main() {\n"
            "    const input = fs.readFileSync(0, 'utf-8').trim();\n"
            "    console.log(solve(input));\n"
            "}\n"
            "main();"
        )
        
        boilerplate = {
            "java": java_bp,
            "python": python_bp,
            "cpp": cpp_bp,
            "javascript": js_bp
        }
        
        problem_json = {
            "slug": slug,
            "title": problem_name,
            "description": desc,
            "difficulty": difficulty,
            "topic": current_topic,
            "category": current_phase,
            "boilerplateCode": json.dumps(boilerplate),
            "testCases": json.dumps([{"input": "test", "output": "test"}])
        }
        
        problems.append(problem_json)
        
    with open(outputpath, 'w', encoding='utf-8') as f:
        json.dump(problems, f, indent=2, ensure_ascii=False)
        
    print(f"Generated {len(problems)} problems successfully in {outputpath}")

if __name__ == '__main__':
    main()
