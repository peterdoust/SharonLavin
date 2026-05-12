import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.drsharonlavin.com';
  const now = new Date();
  return [
    { url: base, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/services/health`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/chronic-illness`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/diabetes`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/children`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/adolescents`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/adults`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/couples`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/parenting`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
  ];
}
