const https = require('https');

const query = encodeURIComponent('ADV Indian Coder Static Variable Visitor Counter EP 41');
const url = `https://www.youtube.com/results?search_query=${query}`;

https.get(url, {
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
}, (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
        // Look for videoId in the page source
        const regex = /"videoId":"([a-zA-Z0-9_-]{11})"/g;
        const matches = new Set();
        let match;
        while ((match = regex.exec(data)) !== null) {
            matches.add(match[1]);
        }
        console.log("Found Video IDs:", Array.from(matches));
    });
}).on('error', (err) => {
    console.error("Error fetching:", err);
});
