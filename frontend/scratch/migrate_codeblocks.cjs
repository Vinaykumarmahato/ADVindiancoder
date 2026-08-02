const fs = require('fs');
const path = require('path');

const COURSES_DIR = path.join(__dirname, '..', 'pages', 'courses');

function migrateFile(filePath) {
    const filename = path.basename(filePath);
    let content = fs.readFileSync(filePath, 'utf-8');

    // Check if CodeBlock is declared locally
    const declarationIndex = content.indexOf('const CodeBlock =');
    if (declarationIndex === -1) {
        return false; // Already migrated or doesn't have local CodeBlock
    }

    console.log(`Migrating: ${filename}`);

    // Extract default language from the declaration, e.g. lang = 'css'
    const declSubstring = content.substring(declarationIndex, declarationIndex + 150);
    const langMatch = declSubstring.match(/lang\s*=\s*'([^']+)'/) || declSubstring.match(/lang\s*=\s*"([^"]+)"/);
    const defaultLang = langMatch ? langMatch[1] : 'java';
    console.log(`  Extracted default language: ${defaultLang}`);

    // Find the JSX return body start and balance parentheses
    const arrowIndex = content.indexOf('=>', declarationIndex);
    if (arrowIndex === -1) {
        console.error(`  Could not find '=>' for CodeBlock in ${filename}`);
        return false;
    }

    const openParenIndex = content.indexOf('(', arrowIndex);
    if (openParenIndex === -1) {
        console.error(`  Could not find opening '(' for CodeBlock JSX in ${filename}`);
        return false;
    }

    // Balance parentheses to find the end of the component definition
    let openCount = 1;
    let scanIndex = openParenIndex + 1;
    while (openCount > 0 && scanIndex < content.length) {
        const char = content[scanIndex];
        if (char === '(') {
            openCount++;
        } else if (char === ')') {
            openCount--;
        }
        scanIndex++;
    }

    if (openCount > 0) {
        console.error(`  Mismatched parentheses in CodeBlock definition in ${filename}`);
        return false;
    }

    // The component declaration ends here, possibly followed by a semicolon
    let endIndex = scanIndex;
    while (endIndex < content.length && (content[endIndex] === ';' || content[endIndex] === ' ' || content[endIndex] === '\r' || content[endIndex] === '\n')) {
        endIndex++;
    }

    // Cut out the local definition
    const before = content.substring(0, declarationIndex);
    const after = content.substring(endIndex);
    let newContent = before + after;

    // Add import statement if not present
    if (!newContent.includes("import CodeBlock from '../../components/CodeBlock'")) {
        // Find the first import line and insert after it, or insert at the top
        const firstImportEnd = newContent.indexOf('\n');
        if (firstImportEnd !== -1) {
            newContent = newContent.substring(0, firstImportEnd + 1) + 
                         `import CodeBlock from '../../components/CodeBlock';\n` + 
                         newContent.substring(firstImportEnd + 1);
        } else {
            newContent = `import CodeBlock from '../../components/CodeBlock';\n` + newContent;
        }
    }

    // Now replace <CodeBlock code={activeTopic.codeSnippet} /> or similar
    // We want to add lang={...} to CodeBlock invocations if they don't have it.
    // Let's use a regex to find all <CodeBlock ... /> usages.
    const codeBlockUsageRegex = /<CodeBlock\s+([^>]*?)code=\{([^}]+)\}([^>]*?)\/>/g;
    
    newContent = newContent.replace(codeBlockUsageRegex, (match, prefix, codeVar, suffix) => {
        // If it already has lang, keep it as is
        if (prefix.includes('lang=') || suffix.includes('lang=')) {
            return match;
        }
        
        // Construct new properties
        let newProps = `code={${codeVar}} lang="${defaultLang}"`;
        
        // Also map colorClass if possible
        let colorClass = 'red';
        if (defaultLang === 'css' || defaultLang === 'scss') colorClass = 'blue';
        else if (defaultLang === 'javascript' || defaultLang === 'js') colorClass = 'yellow';
        else if (defaultLang === 'python') colorClass = 'green';
        else if (defaultLang === 'c' || defaultLang === 'cpp') colorClass = 'purple';
        else if (defaultLang === 'html') colorClass = 'orange';
        
        newProps += ` colorClass="${colorClass}"`;
        
        // Add default filename mapping if appropriate
        let filename = `Main.${defaultLang}`;
        if (defaultLang === 'javascript' || defaultLang === 'js') filename = 'script.js';
        else if (defaultLang === 'css') filename = 'style.css';
        else if (defaultLang === 'html') filename = 'index.html';
        else if (defaultLang === 'python') filename = 'main.py';
        else if (defaultLang === 'bash') filename = 'script.sh';
        else if (defaultLang === 'sql') filename = 'query.sql';
        
        newProps += ` filename="${filename}"`;
        
        return `<CodeBlock ${newProps} />`;
    });

    fs.writeFileSync(filePath, newContent, 'utf-8');
    return true;
}

// Read all files in the courses folder
const files = fs.readdirSync(COURSES_DIR);
let count = 0;
for (const file of files) {
    if (file.endsWith('.tsx')) {
        const fullPath = path.join(COURSES_DIR, file);
        if (migrateFile(fullPath)) {
            count++;
        }
    }
}

console.log(`Successfully migrated ${count} course pages to the global CodeBlock component!`);
