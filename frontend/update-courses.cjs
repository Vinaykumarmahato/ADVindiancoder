const fs = require('fs');
const path = require('path');

const thumbnailDir = path.join(__dirname, 'public', 'Thumbnail');
const constantsFile = path.join(__dirname, 'constants.ts');

const files = fs.readdirSync(thumbnailDir);

const courses = files.map((file, index) => {
    let rawTitle = file.replace('.png', '').replace('.jpg', '');
    let id = index + 1;
    
    const epMatch = rawTitle.match(/ep-(\d+)/i);
    if (epMatch) {
         id = parseInt(epMatch[1], 10);
    }

    let title = rawTitle.replace(/-/g, ' ');
    title = title.replace(/\b\w/g, l => l.toUpperCase());

    const desc = `Comprehensive video tutorial covering ${title.length > 30 ? title.substring(0, 30) + '...' : title}.`;
    
    // Safely encode the thumbnail path for the URI, but don't double encode if the framework handles it.
    // Actually encodeURIComponent is safest.
    
    return `    { id: ${id}, title: ${JSON.stringify(title)}, description: ${JSON.stringify(desc)}, thumbnail: \`/Thumbnail/\${encodeURIComponent(${JSON.stringify(file)})}\`, tags: ['Java', 'Course'], category: 'Java Series', youtubeLink: '#' }`;
});

courses.sort((a, b) => {
    const aIdMatch = a.match(/id: (\d+)/);
    const bIdMatch = b.match(/id: (\d+)/);
    const idA = aIdMatch ? parseInt(aIdMatch[1]) : 0;
    const idB = bIdMatch ? parseInt(bIdMatch[1]) : 0;
    return idB - idA;
});

const coursesStr = `export const COURSES: Course[] = [\n${courses.join(',\n')}\n];`;

let code = fs.readFileSync(constantsFile, 'utf8');
const newCode = code.replace(/export const COURSES: Course\[\] = \[([\s\S]*?)\];/g, coursesStr);

fs.writeFileSync(constantsFile, newCode);
console.log('Courses successfully updated with fixed string escaping.');
