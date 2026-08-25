/**
 * Video SEO & Structured Data Utility
 * Automatically creates Google-compliant VideoObject JSON-LD schemas
 */

export interface VideoMetadata {
    title: string;
    description: string;
    youtubeUrl: string;
    uploadDate?: string;
    duration?: string; // ISO 8601 duration e.g. 'PT25M00S'
    thumbnailUrl?: string;
}

/**
 * Extracts YouTube Video ID from any standard YouTube URL or Playlist
 */
export function extractYoutubeId(url: string): string {
    if (!url) return '';
    
    // Check if it's already an 11-char ID
    if (/^[a-zA-Z0-9_-]{11}$/.test(url)) {
        return url;
    }

    // Match watch?v=ID or /embed/ID or youtu.be/ID
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
    if (match && match[1]) {
        return match[1];
    }

    // If it's a playlist URL, default to first video of the Java series
    if (url.includes('list=PLqN7GE5f0u-8HJj1ZU5ncLMv_ZHXCdPhO')) {
        return 'IvTuFG-lXyw';
    }

    return 'IvTuFG-lXyw';
}

/**
 * Generates Schema.org VideoObject JSON-LD
 */
export function generateVideoSchema({
    title,
    description,
    youtubeUrl,
    uploadDate = '2026-01-15T00:00:00+00:00',
    duration = 'PT30M00S',
    thumbnailUrl
}: VideoMetadata) {
    const videoId = extractYoutubeId(youtubeUrl);
    const thumb = thumbnailUrl || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    const embedUrl = youtubeUrl.includes('embed') ? youtubeUrl : `https://www.youtube.com/embed/${videoId}`;
    const contentUrl = `https://www.youtube.com/watch?v=${videoId}`;

    return {
        '@context': 'https://schema.org',
        '@type': 'VideoObject',
        'name': title,
        'description': description,
        'thumbnailUrl': thumb,
        'uploadDate': uploadDate,
        'duration': duration,
        'embedUrl': embedUrl,
        'contentUrl': contentUrl,
        'publisher': {
            '@type': 'Organization',
            'name': 'AdvIndianCoder',
            'url': 'https://www.advindiancoder.com'
        }
    };
}