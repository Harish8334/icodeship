// Site-wide configuration
const siteConfig = {
  siteName: 'Codeship',
  siteUrl: 'https://codeship.in',
  logo: 'https://codeship.in/logo.png',
  social: {
    linkedin: 'https://www.linkedin.com/company/codeship',
    twitter: 'https://twitter.com/codeship',
    facebook: 'https://facebook.com/codeship'
  }
};

// Default meta configuration
export const defaultMeta = {
  title: `${siteConfig.siteName} - Digital Solutions & Technology Services`,
  description: 'Codeship delivers innovative digital solutions, web development, mobile apps, and technology services to transform your business.',
  keywords: [
    'digital solutions',
    'web development',
    'mobile apps',
    'technology services',
    'software development',
    'IT consulting',
    'digital transformation'
  ],
  ogImage: siteConfig.logo,
  ogType: 'website',
  twitterCard: 'summary_large_image',
  siteUrl: siteConfig.siteUrl,
  social: siteConfig.social
};

// Helper function to generate meta content
export const generateMeta = (customMeta = {}) => {
  const meta = {
    ...defaultMeta,
    ...customMeta,
    // Ensure title has site name
    title: customMeta.title ? 
      (customMeta.title.includes(siteConfig.siteName) ? 
        customMeta.title : 
        `${customMeta.title} - ${siteConfig.siteName}`) : 
      defaultMeta.title,
    // Combine and deduplicate keywords
    keywords: [...new Set([
      ...(Array.isArray(customMeta?.keywords) ? customMeta.keywords : []),
      ...defaultMeta.keywords
    ])].filter(Boolean)
  };

  return {
    ...meta,
    keywords: meta.keywords.join(', '),
    canonicalUrl: customMeta.canonicalUrl || `${siteConfig.siteUrl}${customMeta.path || ''}`
  };
}; 