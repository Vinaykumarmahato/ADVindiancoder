const fs = require('fs');

const contentPath = 'C:\\Users\\vinay\\.gemini\\antigravity\\brain\\c267e944-49b0-400a-bad1-7989690f8c30\\.system_generated\\steps\\20\\content.md';
const content = fs.readFileSync(contentPath, 'utf8');

const match = content.match(/data-target="react-app\.embeddedData">([\s\S]*?)<\/script>/);
if (match) {
    try {
        const data = JSON.parse(match[1]);
        console.log("data keys:", Object.keys(data));
        if (data.payload) {
            console.log("payload keys:", Object.keys(data.payload));
            if (data.payload.tree) {
                console.log("payload.tree keys:", Object.keys(data.payload.tree));
            } else if (data.payload.repo) {
                console.log("payload.repo keys:", Object.keys(data.payload.repo));
            }
        }
    } catch (e) {
        console.error("Error parsing JSON:", e);
    }
}
// Let's find any links containing /14-arrays/
const regex = /\/Vinaykumarmahato\/Java-Full-Course-2026-Zero-to-Pro-Hindi-\/blob\/main\/14-arrays\/([^\"'>\s\?]+)/g;
const files = new Set();
let m;
while ((m = regex.exec(content)) !== null) {
    files.add(m[1]);
}
console.log("FILES FOUND BY REGEX:");
console.log(Array.from(files));
