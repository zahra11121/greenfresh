// app/sitemap.js
import { jabodetabekCities } from '@/data/cities';

export default function sitemap() {
  const baseUrl = 'https://greenfresh.co.id';

  // 1. Halaman Statis Utama
  const staticPages = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'daily', // Mengingat ada ticker harga dan stok harian
      priority: 1,
    },
    {
      url: `${baseUrl}/about/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gallery/`, // PENAMBAHAN HALAMAN GALLERY
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9, // Prioritas tinggi karena berisi visual produk (QC)
    },
  ];

  // 2. Halaman Dinamis Kota (app/supplier-sayur/[slug]/page.js)
  const cityPages = jabodetabekCities.map((city) => ({
    url: `${baseUrl}/supplier-sayur/${city.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  return [...staticPages, ...cityPages];
}