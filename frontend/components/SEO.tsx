import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    canonical?: string;
    ogImage?: string;
    ogType?: 'website' | 'article' | 'course' | 'profile';
    schema?: any | any[]; // Support array of schemas
    exactTitle?: boolean; // Don't append site name if true
}

const SEO: React.FC<SEOProps> = ({ 
    title, 
    description, 
    keywords,
    canonical, 
    ogImage = '/assets/og-image.png', 
    ogType = 'website',
    schema,
    exactTitle = false
}) => {
    const location = useLocation();
    const siteTitle = "ADV Indian Coder";
    const fullTitle = exactTitle ? title : (title ? `${title} | ${siteTitle}` : siteTitle);
    const siteUrl = "https://www.advindiancoder.com"; 
    
    // Auto-detect canonical if not provided
    const currentPath = canonical || location.pathname;
    const fullCanonical = `${siteUrl}${currentPath === '/' ? '' : currentPath}`;

    // Helper to render schema safely
    const renderSchema = () => {
        if (!schema) return null;
        
        // If it's an array of schemas, wrap them in a graph or output multiple
        const schemaData = Array.isArray(schema) ? schema : [schema];
        
        return schemaData.map((sch, index) => (
            <script type="application/ld+json" key={index}>
                {JSON.stringify(sch)}
            </script>
        ));
    };

    return (
        <Helmet>
            {/* Standard Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            <meta name="robots" content="index, follow" />
            <meta name="author" content="Vinay Kumar Mahato - ADV Indian Coder" />
            <link rel="canonical" href={fullCanonical} />

            {/* Open Graph / Facebook / LinkedIn / WhatsApp */}
            <meta property="og:type" content={ogType} />
            <meta property="og:site_name" content="ADV Indian Coder" />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={`${siteUrl}${ogImage.startsWith('/') ? ogImage : '/' + ogImage}`} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:url" content={fullCanonical} />
            <meta property="og:locale" content="en_IN" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@advindiancoder" />
            <meta name="twitter:creator" content="@advindiancoder" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={`${siteUrl}${ogImage.startsWith('/') ? ogImage : '/' + ogImage}`} />

            {/* JSON-LD Structured Data */}
            {renderSchema()}
        </Helmet>
    );
};

export default SEO;
