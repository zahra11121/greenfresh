import { jabodetabekCities } from '@/data/cities';
import districtsData from '@/data/districts.json';

export default function sitemap() {
  const baseUrl = 'https://greenfresh.co.id';
  const districts = districtsData.districts || [];

  const staticPages = ['/', '/produk/', '/gallery/', '/about/', '/city/', '/area/'].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1.0,
  }));

  const cityPages = jabodetabekCities.map((city) => ({
    url: `${baseUrl}/city/${city.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const districtPages = districts.map((district) => ({
    url: `${baseUrl}/area/${district.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.6,
  }));

  return [...staticPages, ...cityPages, ...districtPages];
}