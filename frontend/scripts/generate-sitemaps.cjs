const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');
const baseUrl = 'https://www.advindiancoder.com';
const today = new Date().toISOString().split('T')[0];

const sitemaps = [
    { url: '/sitemap-pages.xml' },
    { url: '/sitemap-courses.xml' },
    { url: '/sitemap-jobs.xml' },
    { url: '/sitemap-tools.xml' },
    { url: '/video-sitemap.xml' }
];

const generateSitemapIndex = () => {
    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
    sitemaps.forEach(sm => {
        xml += `  <sitemap>\n    <loc>${baseUrl}${sm.url}</loc>\n    <lastmod>${today}</lastmod>\n  </sitemap>\n`;
    });
    xml += `</sitemapindex>`;
    fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), xml);
};

const generateXml = (pages) => {
    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
    pages.forEach(p => {
        xml += `  <url>\n    <loc>${baseUrl}${p.url}</loc>\n`;
        if (p.lastmod) xml += `    <lastmod>${p.lastmod}</lastmod>\n`;
        if (p.changefreq) xml += `    <changefreq>${p.changefreq}</changefreq>\n`;
        if (p.priority) xml += `    <priority>${p.priority}</priority>\n`;
        xml += `  </url>\n`;
    });
    xml += `</urlset>`;
    return xml;
};

// 1. Pages (Static Hubs & Info Pages - strictly non-redirect canonical URLs)
const pagesSitemap = [
    { url: '/', priority: '1.0', changefreq: 'daily', lastmod: today },
    { url: '/courses', priority: '0.9', changefreq: 'weekly', lastmod: today },
    { url: '/practice', priority: '0.9', changefreq: 'weekly', lastmod: today },
    { url: '/exam-hub', priority: '0.9', changefreq: 'daily', lastmod: today },
    { url: '/masterclass', priority: '0.85', changefreq: 'weekly', lastmod: today },
    { url: '/resources', priority: '0.8', changefreq: 'weekly', lastmod: today },
    { url: '/community', priority: '0.8', changefreq: 'daily', lastmod: today },
    { url: '/rewards', priority: '0.85', changefreq: 'weekly', lastmod: today },
    { url: '/success-stories', priority: '0.8', changefreq: 'monthly', lastmod: today },
    { url: '/about', priority: '0.7', changefreq: 'monthly', lastmod: today },
    { url: '/faq', priority: '0.7', changefreq: 'monthly', lastmod: today },
    { url: '/contact', priority: '0.7', changefreq: 'monthly', lastmod: today },
    { url: '/verify', priority: '0.7', changefreq: 'monthly', lastmod: today },
    { url: '/upsc-syllabus', priority: '0.7', changefreq: 'monthly', lastmod: today },
    { url: '/terms', priority: '0.5', changefreq: 'monthly', lastmod: today },
    { url: '/privacy', priority: '0.5', changefreq: 'monthly', lastmod: today },
    { url: '/refund', priority: '0.5', changefreq: 'monthly', lastmod: today },
    { url: '/cookies', priority: '0.5', changefreq: 'monthly', lastmod: today }
];
fs.writeFileSync(path.join(publicDir, 'sitemap-pages.xml'), generateXml(pagesSitemap));

// 2. Jobs & Hiring (Hub + All Individual Job Postings)
const jobList = [
    { id: 'capgemini-associate-technician-2026', title: 'Capgemini Associate Products & Systems Technician Off Campus 2026', company: 'Capgemini' },
    { id: 'danaher-ai-ml-intern-2026', title: 'Danaher AI/ML Engineering Internship 2026', company: 'Danaher' },
    { id: 'sharechat-manual-qa-intern-2026', title: 'ShareChat Manual QA Testing Internship 2026', company: 'ShareChat' },
    { id: 'volvo-group-apprentice-2026', title: 'Volvo Group Graduate Apprentice Trainee 2026', company: 'Volvo' },
    { id: 'sp-global-data-analyst-2026', title: 'S&P Global Data Analyst & Associate Recruitment 2026', company: 'S&P Global' },
    { id: 'deloitte-qa-intern-2026', title: 'Deloitte QA & Test Automation Internship 2026', company: 'Deloitte' },
    { id: 'accenture-tech-support-2026', title: 'Accenture Tech Support Associate Services Off Campus 2026', company: 'Accenture' },
    { id: 'cognizant-service-desk-2026', title: 'Cognizant Service Desk Digital Workplace Hiring 2026', company: 'Cognizant' },
    { id: 'trimble-software-engineer-2026', title: 'Trimble Software Engineer 1 Recruitment 2026', company: 'Trimble' },
    { id: 'tech-mahindra-voice-chat-support-2026', title: 'Tech Mahindra Voice & Chat Support Hiring 2026', company: 'Tech Mahindra' },
    { id: 'amazon-sde-i-2026', title: 'Amazon Software Development Engineer (SDE-I) Hiring 2026', company: 'Amazon' },
    { id: 'harman-devops-2026', title: 'Harman AWS DevOps Associate Engineer Hiring 2026', company: 'Harman' }
];

const jobsSitemap = [
    { url: '/jobs', priority: '0.9', changefreq: 'daily', lastmod: today }
];
jobList.forEach(j => {
    jobsSitemap.push({ url: `/jobs/${j.id}`, priority: '0.75', changefreq: 'weekly', lastmod: today });
});
fs.writeFileSync(path.join(publicDir, 'sitemap-jobs.xml'), generateXml(jobsSitemap));

// 3. Online Developer Tools & Cloud IDEs
const toolsSitemap = [
    { url: '/adv-lab', priority: '0.9', changefreq: 'weekly', lastmod: today },
    { url: '/online-java-compiler', priority: '0.85', changefreq: 'monthly', lastmod: today },
    { url: '/online-python-compiler', priority: '0.85', changefreq: 'monthly', lastmod: today },
    { url: '/online-c-compiler', priority: '0.85', changefreq: 'monthly', lastmod: today },
    { url: '/online-cpp-compiler', priority: '0.85', changefreq: 'monthly', lastmod: today },
    { url: '/online-javascript-compiler', priority: '0.85', changefreq: 'monthly', lastmod: today }
];
fs.writeFileSync(path.join(publicDir, 'sitemap-tools.xml'), generateXml(toolsSitemap));

// 4. All 43 Programming Course Modules
const courseList = [
    'html', 'css', 'javascript', 'adv-css', 'bootstrap', 'react', 'jquery', 'angular', 'angularjs', 'vue', 'sass',
    'nodejs', 'php', 'java', 'python', 'django', 'asp', 'go', 'kotlin', 'swift', 'typescript', 'csharp',
    'c', 'cpp', 'rust', 'bash', 'r', 'sql', 'numpy', 'pandas', 'scipy', 'data-science', 'ai', 'gen-ai',
    'mysql', 'postgresql', 'mongodb', 'excel', 'xml', 'cybersecurity', 'dsa', 'git', 'github'
];
const coursesSitemap = [];
courseList.forEach(c => {
    coursesSitemap.push({ url: `/course/${c}`, priority: '0.8', changefreq: 'weekly', lastmod: today });
});
fs.writeFileSync(path.join(publicDir, 'sitemap-courses.xml'), generateXml(coursesSitemap));

// 5. Video Sitemap (Google Video XML Specification)
const videoPages = [
    {
        url: '/course/java',
        videoId: 'IvTuFG-lXyw',
        title: 'Java Full Course 2026: Zero to Hero (Complete Playlist & 44 Episodes)',
        description: 'Complete Java masterclass covering Object-Oriented Programming, JVM memory architecture, multithreading, Collections Framework, and real-world software engineering projects.',
        duration: 2400
    },
    {
        url: '/jobs',
        videoId: 'IvTuFG-lXyw',
        title: 'Java Full Course 2026: Placement & Interview Prep Masterclass',
        description: 'Comprehensive Java tutorial and interview preparation video series with hands-on coding exercises, design patterns, and placement guidance.',
        duration: 2400
    }
];

// Add each job page which embeds the tech interview preparation video playlist
jobList.forEach(j => {
    videoPages.push({
        url: `/jobs/${j.id}`,
        videoId: 'IvTuFG-lXyw',
        title: `${j.company} Tech Placement Preparation - Java & Coding Masterclass`,
        description: `Complete technical video training to crack ${j.company} coding rounds and technical interviews. Master OOP concepts, data structures, and algorithms.`,
        duration: 2400
    });
});

const generateVideoXml = (videos) => {
    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n`;
    xml += `        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">\n`;
    videos.forEach(v => {
        const thumb = `https://img.youtube.com/vi/${v.videoId}/maxresdefault.jpg`;
        const contentUrl = `https://www.youtube.com/watch?v=${v.videoId}`;
        const playerUrl = `https://www.youtube.com/embed/${v.videoId}`;
        
        xml += `  <url>\n`;
        xml += `    <loc>${baseUrl}${v.url}</loc>\n`;
        xml += `    <video:video>\n`;
        xml += `      <video:thumbnail_loc>${thumb}</video:thumbnail_loc>\n`;
        xml += `      <video:title><![CDATA[${v.title}]]></video:title>\n`;
        xml += `      <video:description><![CDATA[${v.description}]]></video:description>\n`;
        xml += `      <video:content_loc>${contentUrl}</video:content_loc>\n`;
        xml += `      <video:player_loc allow_embed="yes" autoplay="ap=0">${playerUrl}</video:player_loc>\n`;
        xml += `      <video:duration>${v.duration}</video:duration>\n`;
        xml += `      <video:publication_date>2026-01-15T00:00:00+00:00</video:publication_date>\n`;
        xml += `      <video:family_friendly>yes</video:family_friendly>\n`;
        xml += `      <video:uploader info="https://www.advindiancoder.com">AdvIndianCoder</video:uploader>\n`;
        xml += `    </video:video>\n`;
        xml += `  </url>\n`;
    });
    xml += `</urlset>`;
    return xml;
};

fs.writeFileSync(path.join(publicDir, 'video-sitemap.xml'), generateVideoXml(videoPages));

generateSitemapIndex();

// Also copy all sitemaps to dist if it exists
const distDir = path.join(__dirname, '../dist');
if (fs.existsSync(distDir)) {
    const sitemapFiles = [
        'sitemap.xml',
        'sitemap-pages.xml',
        'sitemap-courses.xml',
        'sitemap-jobs.xml',
        'sitemap-tools.xml',
        'video-sitemap.xml'
    ];
    sitemapFiles.forEach(f => {
        const src = path.join(publicDir, f);
        if (fs.existsSync(src)) {
            fs.copyFileSync(src, path.join(distDir, f));
        }
    });
    console.log('All sitemaps (including video-sitemap.xml) copied to dist folder.');
}

console.log('Sitemaps generated successfully.');


