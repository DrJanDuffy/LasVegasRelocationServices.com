import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://lasvegasrelocationservices.com';

  // Main page with all sections
  const mainPage = {
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 1,
  };

  // Service-specific pages
  const servicePages = [
    {
      url: `${baseUrl}/services/corporate-relocation`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
  ];

  // City-specific relocation pages
  const cityPages = [
    {
      url: `${baseUrl}/relocating-from/los-angeles`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/relocating-from/san-diego`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ];

  return [mainPage, ...servicePages, ...cityPages];
}
