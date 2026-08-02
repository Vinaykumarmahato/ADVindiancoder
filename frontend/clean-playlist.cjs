const fs = require('fs');
const path = require('path');

const thumbnailDir = path.join(__dirname, 'public', 'Thumbnail');
const constantsFile = path.join(__dirname, 'constants.ts');

const allFiles = fs.readdirSync(thumbnailDir);
// Only include files that start with "ep-" (case insensitive)
const epFiles = allFiles.filter(file => /^ep-\d+/i.test(file));

const courses = epFiles.map((file) => {
    let rawTitle = file.replace('.png', '').replace('.jpg', '');
    
    // Extract EP number natively to ensure strict numbering!
    const epMatch = rawTitle.match(/ep-(\d+)/i);
    const id = epMatch ? parseInt(epMatch[1], 10) : 0;

    let title = rawTitle.replace(/-/g, ' ');
    title = title.replace(/\b\w/g, l => l.toUpperCase());

    const desc = `Comprehensive video tutorial covering ${title.length > 30 ? title.substring(0, 30) + '...' : title}.`;
    
    return `    { id: ${id}, title: ${JSON.stringify(title)}, description: ${JSON.stringify(desc)}, thumbnail: \`/Thumbnail/\${encodeURIComponent(${JSON.stringify(file)})}\`, tags: ['Java', 'Course'], category: 'Java Series', youtubeLink: '#' }`;
});

// Sort courses mathematically descending
courses.sort((a, b) => {
    const aIdMatch = a.match(/id: (\d+)/);
    const bIdMatch = b.match(/id: (\d+)/);
    const idA = aIdMatch ? parseInt(aIdMatch[1]) : 0;
    const idB = bIdMatch ? parseInt(bIdMatch[1]) : 0;
    return idB - idA; // Highest EP to Lowest EP
});

const coursesStr = `export const JAVA_PLAYLIST = [\n${courses.join(',\n')}\n];`;

let code = fs.readFileSync(constantsFile, 'utf8');

// Replace JAVA_PLAYLIST chunk
const newCode = code.replace(/export const JAVA_PLAYLIST = \[([\s\S]*?)\];/g, coursesStr);

fs.writeFileSync(constantsFile, newCode);
console.log(`Cleaned up! Extracted exactly ${epFiles.length} EP videos.`);
