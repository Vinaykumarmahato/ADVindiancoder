const fs = require('fs');
const https = require('https');
const path = require('path');

const urls = {
    syntax: 'https://raw.githubusercontent.com/Vinaykumarmahato/Java-Full-Course-2026-Zero-to-Pro-Hindi-/main/14-arrays/ArraySyntaxDemo.java',
    memory: 'https://raw.githubusercontent.com/Vinaykumarmahato/Java-Full-Course-2026-Zero-to-Pro-Hindi-/main/14-arrays/ArrayMemoryDemo.java',
    readme: 'https://raw.githubusercontent.com/Vinaykumarmahato/Java-Full-Course-2026-Zero-to-Pro-Hindi-/main/14-arrays/README.md'
};

function fetchUrl(url, destName) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', (chunk) => { data += chunk; });
            res.on('end', () => {
                fs.writeFileSync(destName, data);
                console.log(`Successfully fetched ${url} and saved to ${destName}`);
                resolve(data);
            });
        }).on('error', (err) => {
            console.error(`Error fetching ${url}:`, err);
            reject(err);
        });
    });
}

async function main() {
    await fetchUrl(urls.syntax, 'scratch_syntax.java');
    await fetchUrl(urls.memory, 'scratch_memory.java');
    await fetchUrl(urls.readme, 'scratch_readme.md');
}

main();
