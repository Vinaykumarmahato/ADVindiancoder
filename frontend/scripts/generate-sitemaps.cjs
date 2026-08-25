const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');
const baseUrl = 'https://www.advindiancoder.com';
const today = new Date().toISOString().split('T')[0];

const sitemaps = [
    { url: '/sitemap-pages.xml' },
    { url: '/sitemap-courses.xml' },
    { url: '/sitemap-jobs.xml' },
    { url: '/sitemap-tools.xml' }
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
    'capgemini-associate-technician-2026',
    'danaher-ai-ml-intern-2026',
    'sharechat-manual-qa-intern-2026',
    'volvo-group-apprentice-2026',
    'sp-global-data-analyst-2026',
    'deloitte-qa-intern-2026',
    'accenture-tech-support-2026',
    'cognizant-service-desk-2026',
    'trimble-software-engineer-2026',
    'tech-mahindra-voice-chat-support-2026',
    'amazon-sde-i-2026',
    'harman-devops-2026'
];
const jobsSitemap = [
    { url: '/jobs', priority: '0.9', changefreq: 'daily', lastmod: today }
];
jobList.forEach(j => {
    jobsSitemap.push({ url: `/jobs/${j}`, priority: '0.75', changefreq: 'weekly', lastmod: today });
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

generateSitemapIndex();

// Also copy to dist if it exists
const distDir = path.join(__dirname, '../dist');
if (fs.existsSync(distDir)) {
    const sitemapFiles = ['sitemap.xml', 'sitemap-pages.xml', 'sitemap-courses.xml', 'sitemap-jobs.xml', 'sitemap-tools.xml'];
    sitemapFiles.forEach(f => {
        const src = path.join(publicDir, f);
        if (fs.existsSync(src)) {
            fs.copyFileSync(src, path.join(distDir, f));
        }
    });
    console.log('Sitemaps also copied to dist folder.');
}

console.log('Sitemaps generated successfully.');

