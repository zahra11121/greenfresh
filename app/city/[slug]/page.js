import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronRight, Home, MapPin } from 'lucide-react';

// Components
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import CityClientPage from './CityClientPage';

// Data
import { jabodetabekCities } from '@/data/cities';
import { galleryData } from '@/data/galleryData';

/**
 * --- KONFIGURASI SSG MURNI ---
 */
export const dynamic = 'force-static'; 
export const dynamicParams = false; 

/**
 * generateStaticParams
 */
export async function generateStaticParams() {
  return jabodetabekCities.map((city) => ({
    slug: city.slug,
  }));
}

/**
 * generateMetadata
 */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const city = jabodetabekCities.find((c) => c.slug === slug);
  
  if (!city) return { title: 'City Not Found' };

  const baseUrl = 'https://greenfresh.co.id';
  const fullUrl = `${baseUrl}/city/${slug}/`;
  
  return {
    title: `Supplier Sayur ${city.name} - Stok Stabil Harian | CV Green Fresh Cipanas`,
    description: `Supplier sayur segar tangan pertama wilayah ${city.name}. Melayani pengadaan komoditas grade A harian khusus Hotel, Restoran, dan Cafe wilayah ${city.name}.`,
    alternates: { canonical: fullUrl },
    openGraph: {
      title: `Supplier Sayur ${city.name} | Green Fresh Cipanas`,
      description: `Pengadaan sayur harian untuk Hotel, Restoran & Cafe wilayah ${city.name}.`,
      url: fullUrl,
      images: [{ url: `${baseUrl}/og-city-${slug}.jpg`, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      images: [`${baseUrl}/og-city-${slug}.jpg`]
    }
  };
}

/**
 * COMPONENT: NearbyCities
 */
const NearbyCities = ({ currentSlug }) => {
  const otherCities = jabodetabekCities
    .filter(c => c.slug !== currentSlug)
    .slice(0, 6);

  const labelVariations = ["Distribusi", "Supply Sayur", "Pengiriman", "Area Layanan", "Logistik", "Mitra"];

  return (
    <section className="py-16 bg-white border-t border-green-50">
      <div className="max-w-[1800px] mx-auto px-6">
        <h3 className="text-xs font-black text-[#052c17] mb-8 uppercase tracking-[0.3em] flex items-center gap-3">
          <MapPin size={14} className="text-[#166534]" />
          Cakupan Distribusi Wilayah Lainnya
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {otherCities.map((city, index) => (
            <Link
              key={city.slug}
              href={`/city/${city.slug}/`}
              className="group p-5 rounded-2xl border border-green-100 hover:border-[#166534] hover:bg-green-50 transition-all duration-300 flex flex-col items-center justify-center gap-1"
            >
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">
                {labelVariations[index % labelVariations.length]}
              </span>
              <span className="text-[11px] font-black text-slate-700 group-hover:text-[#166534] uppercase tracking-wider block text-center">
                {city.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

/**
 * SERVER COMPONENT UTAMA
 */
export default async function CityPage({ params }) {
  const { slug } = await params;
  
  const cityIndex = jabodetabekCities.findIndex((c) => c.slug === slug);
  const fullCityData = jabodetabekCities[cityIndex];

  if (!fullCityData) notFound();

  const city = {
    slug: fullCityData.slug,
    name: fullCityData.name,
    deliveryRoute: fullCityData.deliveryRoute,
    usp: fullCityData.usp,
    clientFocus: fullCityData.clientFocus,
    logistics: fullCityData.logistics
  };

  const imageIndex = cityIndex % galleryData.images.length;
  const CITY_OPERATIONAL_IMAGE = galleryData.images[imageIndex];
  
  const baseUrl = 'https://greenfresh.co.id';
  const currentUrl = `${baseUrl}/city/${city.slug}/`;

  /**
   * --- PERBAIKAN SCHEMA GRAPH ---
   * Menggabungkan WholesaleStore, Organization, Service, dan BreadcrumbList
   */
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WholesaleStore",
        "@id": `${baseUrl}/#organization`,
        // Menyatakan halaman ini adalah entitas utama yang membahas bisnis tersebut
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": currentUrl
        },
        "name": "CV Green Fresh Cipanas",
        "url": baseUrl,
        "logo": {
          "@type": "ImageObject",
          "url": `${baseUrl}/logo.svg`,
          "width": "600",
          "height": "60"
        },
        "image": `${baseUrl}/og-main.jpg`,
        "telephone": "+6287780937884",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Jl. Cipanas Raya",
          "addressLocality": "Cipanas",
          "addressRegion": "Jawa Barat",
          "postalCode": "43253",
          "addressCountry": "ID"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": `Layanan Supply Sayur ${city.name}`,
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": `Supplier Sayur Segar ${city.name}`,
                "serviceType": "Vegetable Wholesale Supplier",
                "description": `Layanan supply sayuran grade A harian untuk Hotel, Restoran, dan Cafe di wilayah ${city.name}.`,
                "areaServed": { 
                  "@type": "City", 
                  "name": city.name,
                  // PERBAIKAN: Membungkus addressCountry di dalam objek address yang valid
                  "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "ID"
                  }
                },
                "provider": { "@id": `${baseUrl}/#organization` }
              }
            }
          ]
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Beranda",
            "item": baseUrl
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "City",
            "item": `${baseUrl}/city`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": city.name,
            "item": currentUrl
          }
        ]
      }
    ]
  };
  
  return (
    <div className="bg-white text-[#052c17] font-sans antialiased selection:bg-green-100 overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />
      
      <Header />
      
      <main>
        {/* Visual Breadcrumb Section */}
        <div className="bg-white pt-24 lg:pt-32 border-b border-green-50">
          <nav aria-label="Breadcrumb" className="max-w-[1800px] mx-auto px-6 py-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em]">
            <Link href="/" className="flex items-center gap-1 text-slate-500 hover:text-[#166534]">
              <Home size={10} /> Beranda
            </Link>
            <ChevronRight size={10} className="text-slate-300" />
            <Link href="/city" className="text-slate-500 hover:text-[#166534]">
              City
            </Link>
            <ChevronRight size={10} className="text-slate-300" />
            <span className="text-[#166534] font-bold tracking-widest">{city.name}</span>
          </nav>
        </div>

        {/* Client Page Content */}
        <CityClientPage
          city={city}
          CITY_OPERATIONAL_IMAGE={CITY_OPERATIONAL_IMAGE}
        />

        {/* Static Nearby Cities */}
        <NearbyCities currentSlug={slug} />
      </main>

      <Footer />
    </div>
  );
}