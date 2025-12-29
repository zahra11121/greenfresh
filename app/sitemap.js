// app/sitemap.js
import { jabodetabekCities } from '@/data/cities';

export default function sitemap() {
  const baseUrl = 'https://greenfresh.co.id';

  // 1. Halaman Statis
  const staticPages = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // 2. Halaman Dinamis dari cities.js (app/supplier-sayur/[slug]/page.js)
  const cityPages = jabodetabekCities.map((city) => ({
    url: `${baseUrl}/supplier-sayur/${city.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.6,
  }));

  return [...staticPages, ...cityPages];
}