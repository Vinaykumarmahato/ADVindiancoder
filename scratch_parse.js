const fs = require('fs');
const path = require('path');

const contentPath = 'C:\\Users\\vinay\\.gemini\\antigravity\\brain\\c267e944-49b0-400a-bad1-7989690f8c30\\.system_generated\\steps\\20\\content.md';
const content = fs.readFileSync(contentPath, 'utf8');

// Let's search for embeddedData or client-env
const match = content.match(/data-target="react-app\.embeddedData">([\s\S]*?)<\/script>/);
if (match) {
    try {
        const data = JSON.parse(match[1]);
        const items = data.payload.tree.items;
        console.log("ITEMS IN DIRECTORY:");
        console.log(JSON.stringify(items.map(i => ({name: i.name, contentType: i.contentType, path: i.path})), null, 2));
    } catch (e) {
        console.error("Error parsing JSON:", e);
    }
} else {
    console.log("No react-app.embeddedData script found, trying custom parsing...");
    // Let's find any links containing /14-arrays/
    const regex = /\/Vinaykumarmahato\/Java-Full-Course-2026-Zero-to-Pro-Hindi-\/blob\/main\/14-arrays\/([^\"'>\s]+)/g;
    const files = new Set();
    let m;
    while ((m = regex.exec(content)) !== null) {
        files.add(m[1]);
    }
    console.log("FILES FOUND BY REGEX:");
    console.log(Array.from(files));
}
