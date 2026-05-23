const https = require('https');

const videoId = 'Sf7BbI1UJHs';
const url = `https://www.youtube.com/watch?v=${videoId}`;

https.get(url, {
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9'
    }
}, (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
        const titleMatch = data.match(/<title>(.*?)<\/title>/);
        if (titleMatch) {
            console.log("Video Title:", titleMatch[1]);
        } else {
            console.log("No title found");
        }
    });
}).on('error', (err) => {
    console.error("Error fetching:", err);
});
