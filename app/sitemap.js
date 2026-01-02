// app/sitemap.js
import { jabodetabekCities } from '@/data/cities';
import districtsData from '@/data/districts.json'; // Penyesuaian import JSON

export default function sitemap() {
  const baseUrl = 'https://greenfresh.co.id';
  const districts = districtsData.districts || []; // Memastikan array districts terambil

  // 1. HALAMAN STATIS UTAMA
  const staticPages = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/produk/`, // Katalog Produk 70+ Sayuran
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/gallery/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/supplier-sayur/`, // Index Kota Besar
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/area/`, // HALAMAN STATIS AREA (Index District)
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  // 2. HALAMAN DINAMIS KOTA (app/supplier-sayur/[slug]/)
  const cityPages = jabodetabekCities.map((city) => ({
    url: `${baseUrl}/supplier-sayur/${city.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  // 3. HALAMAN DINAMIS DISTRICT (app/area/[slug]/)
  const districtPages = districts.map((district) => ({
    url: `${baseUrl}/area/${district.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  return [...staticPages, ...cityPages, ...districtPages];
}