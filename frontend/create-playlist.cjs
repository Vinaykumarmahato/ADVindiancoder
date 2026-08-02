const fs = require('fs');
const path = require('path');

const constantsFile = path.join(__dirname, 'constants.ts');

let code = fs.readFileSync(constantsFile, 'utf8');

// If we already changed it, revert the name back first (just in case)
// Actually we only need to rename COURSES back to JAVA_PLAYLIST if it hasn't been done
if (code.includes('export const COURSES: Course[] = [\n    { id: 38,')) {
    code = code.replace(/export const COURSES: Course\[\] = \[(\n\s+\{ id: 38,)/, 'export const JAVA_PLAYLIST = [$1');
    
    // Now append the main COURSES array at the bottom
    code += `\n
export const COURSES: Course[] = [
    {
        id: 1,
        title: 'Java Full Course (PlayList)',
        description: 'Complete zero to hero Java programming playlist with 36+ episodes and real projects.',
        thumbnail: \`/Thumbnail/ep-36-Don't%20Start%20Pattern%20Programming%20%E2%9D%8C%20Watch%20This%20First.png\`,
        tags: ['Java', 'Playlist'],
        category: 'Programming',
        youtubeLink: '/course/java'
    },
    {
        id: 2,
        title: 'Interview & Carrier Guidelines',
        description: 'Roadmaps, Resume building, and LinkedIn optimization tactics.',
        thumbnail: \`/Thumbnail/%F0%9F%91%89%20YouTube%20Study%20Mistake%2090%25%20Coders%20%E0%A4%97%E0%A4%B2%E0%A4%A4%20%E0%A4%B5%E0%A5%80%E0%A4%A1%E0%A4%BF%E0%A4%AF%E0%A5%8B%20%E0%A4%A6%E0%A5%87%E0%A4%96%20%E0%A4%B0%E0%A4%B9%E0%A5%87%20%E0%A4%B9%E0%A5%88%E0%A4%82!%20(Java%20%20Programming).png\`,
        tags: ['Career', 'Guide'],
        category: 'Career',
        youtubeLink: '#'
    }
];
`;
    
    fs.writeFileSync(constantsFile, code);
    console.log('Successfully injected JAVA_PLAYLIST & COURSES array!');
} else {
    console.log('Already updated or pattern not found');
}
