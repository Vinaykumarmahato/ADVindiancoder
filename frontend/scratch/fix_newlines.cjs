const fs = require('fs');

const filePath = 'c:\\\\Users\\\\vinay\\\\Videos\\\\Development Journey\\\\full stack app for adv indian coder\\\\ADVindiancoder\\\\data\\\\examHubData.ts';
let content = fs.readFileSync(filePath, 'utf-8');

// Match any single quoted string. Since single quoted strings cannot legally contain
// an unescaped literal newline in JS/TS, any such string was broken by the previous script.
// We restore the literal \n sequence.
content = content.replace(/'([^'\\]*(?:\\.[^'\\]*)*?)'/gs, (match, inner) => {
    if (inner.includes('\n')) {
        return "'" + inner.replace(/\n/g, '\\n') + "'";
    }
    return match;
});

fs.writeFileSync(filePath, content, 'utf-8');
console.log('File fixed successfully!');
