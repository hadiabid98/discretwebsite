'use client';

import React from 'react';

const StructuredData = () => {
    const organizationData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Discret Digital",
        "url": "https://discret.digital",
        "logo": "https://discret.digital/discret-logo-colored.png",
        "sameAs": [
            "https://www.instagram.com/discretdigital",
            "https://www.linkedin.com/company/discret-digital/",
            "https://www.facebook.com/discretdigital"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+92-340-056-8710",
            "contactType": "customer service",
            "availableLanguage": "English"
        }
    };

    const localBusinessData = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Discret Digital",
        "image": "https://discret.digital/og-image.jpg",
        "url": "https://discret.digital",
        "telephone": "+923400568710",
        "address": [
            {
                "@type": "PostalAddress",
                "streetAddress": "29, Upper Banigala Road",
                "addressLocality": "Islamabad",
                "addressCountry": "PK"
            },
            {
                "@type": "PostalAddress",
                "streetAddress": "71-75 Shelton Street",
                "addressLocality": "London",
                "addressRegion": "England",
                "postalCode": "WC2H 9JQ",
                "addressCountry": "GB"
            }
        ],
        "description": "Creative agency empowering entrepreneurs with operations, marketing, and tech support for scalable growth."
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
            />
        </>
    );
};

export default StructuredData;
