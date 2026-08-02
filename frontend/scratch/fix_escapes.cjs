const fs = require('fs');
let c = fs.readFileSync('pages/PlaygroundPage.tsx', 'utf8');

c = c.replace(/\\`/g, '`');
c = c.replace(/\\\$\{/g, '${');
c = c.replace(/\\\\n/g, '\\n');
c = c.replace(/\\\\b/g, '\\b');
c = c.replace(/\\\\s/g, '\\s');
c = c.replace(/\\\\w/g, '\\w');
c = c.replace(/\\\\\\//g, '\\/');
c = c.replace(/\\\\\\*/g, '\\*');

fs.writeFileSync('pages/PlaygroundPage.tsx', c);
console.log('Fixed file');
