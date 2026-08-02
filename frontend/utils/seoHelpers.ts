export const generateBreadcrumbsSchema = (items: { name: string; url: string }[]) => {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
        }))
    };
};

export const globalOrganizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ADV Indian Coder",
    "url": "https://www.advindiancoder.com",
    "logo": "https://www.advindiancoder.com/logo.png",
    "description": "ADV Indian Coder is India’s modern learning platform for Java, DSA, coding practice, interview preparation, software jobs, developer resources, and tech education.",
    "sameAs": [
        "https://www.youtube.com/@ADVIndianCoder",
        "https://whatsapp.com/channel/0029VaPmCNEFcow7oeWCwh3c",
        "https://www.linkedin.com/company/advindiancoder",
        "https://www.instagram.com/advindiancoder.official",
        "https://t.me/advindiancoder"
    ],
    "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "url": "https://www.advindiancoder.com/contact"
    }
};

export const globalWebsiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://www.advindiancoder.com",
    "name": "ADV Indian Coder",
    "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.advindiancoder.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
    }
};
