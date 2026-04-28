import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    canonical?: string;
    ogImage?: string;
    ogType?: 'website' | 'article' | 'course';
    schema?: any;
}

const SEO: React.FC<SEOProps> = ({ 
    title, 
    description, 
    keywords,
    canonical, 
    ogImage = '/assets/og-image.png', 
    ogType = 'website',
    schema
}) => {
    const location = useLocation();
    const siteTitle = "ADV Indian Coder";
    const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
    const siteUrl = "https://advindiancoder.com"; 
    
    // Auto-detect canonical if not provided
    const currentPath = canonical || location.pathname;
    const fullCanonical = `${siteUrl}${currentPath === '/' ? '' : currentPath}`;

    return (
        <Helmet>
            {/* Standard Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            <meta name="robots" content="index, follow" />
            <meta name="author" content="Vinay Kumar Mahato - ADV Indian Coder" />
            <link rel="canonical" href={fullCanonical} />

            {/* Open Graph / Facebook / LinkedIn */}
            <meta property="og:type" content={ogType} />
            <meta property="og:site_name" content="ADV Indian Coder" />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={`${siteUrl}${ogImage}`} />
            <meta property="og:url" content={fullCanonical} />
            <meta property="og:locale" content="en_IN" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@advindiancoder" />
            <meta name="twitter:creator" content="@vinaykumarmahato" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />

            {/* JSON-LD Structured Data */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;
