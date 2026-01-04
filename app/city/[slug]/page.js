import { jabodetabekCities } from '@/data/cities';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight, Home, MapPin } from 'lucide-react';
import { galleryData } from '@/data/galleryData';
import CityClientPage from './CityClientPage';

// --- KONFIGURASI SSR DIPERBAIKI ---
export const dynamic = 'force-dynamic';
export const revalidate = 0;
// export const runtime = 'edge'; // ✅ DIKOMENTARI/DINONAKTIFKAN
// ----------------------------------------------

/**
 * COMPONENT: NearbyCities
 * Melakukan randomisasi area terkait di sisi server setiap request.
 */
const NearbyCities = ({ currentSlug }) => {
  const otherCities = jabodetabekCities
    .filter(c => c.slug !== currentSlug)
    .sort(() => 0.5 - Math.random())
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
            <a
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

// GENERATE METADATA DINAMIS (SEO) - DIPERBAIKI
export async function generateMetadata({ params }) {
  // ✅ PERBAIKAN: Langsung akses params tanpa await
  const { slug } = params;
  const city = jabodetabekCities.find((c) => c.slug === slug);
  
  if (!city) {
    return {
      title: 'Halaman Tidak Ditemukan - Green Fresh',
      description: 'Kota tidak ditemukan'
    };
  }

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
      type: 'website',
      images: [
        {
          url: `${baseUrl}/og-city-${slug}.jpg`,
          width: 1200,
          height: 630,
          alt: `Green Fresh Cipanas - Supplier Sayur ${city.name}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `Supplier Sayur ${city.name} | Green Fresh Cipanas`,
      description: `Pengadaan sayur harian untuk Hotel, Restoran & Cafe wilayah ${city.name}.`,
      images: [`${baseUrl}/og-city-${slug}.jpg`]
    }
  };
}

// SERVER COMPONENT UTAMA - DIPERBAIKI
export default async function CityPage({ params }) {
  // ✅ PERBAIKAN: Gunakan Promise.resolve untuk kompatibilitas
  const resolvedParams = await Promise.resolve(params);
  const { slug } = resolvedParams;
  
  // Atau langsung (tanpa await):
  // const { slug } = params;
  
  const cityIndex = jabodetabekCities.findIndex((c) => c.slug === slug);
  const fullCityData = jabodetabekCities[cityIndex];

  if (!fullCityData) notFound();

  // Isolasi data untuk dikirim ke Client Component
  const city = {
    slug: fullCityData.slug,
    name: fullCityData.name,
    deliveryRoute: fullCityData.deliveryRoute,
    usp: fullCityData.usp,
    clientFocus: fullCityData.clientFocus,
    logistics: fullCityData.logistics
  };

  // Rotasi gambar operasional berdasarkan index kota
  const imageIndex = cityIndex % galleryData.images.length;
  const CITY_OPERATIONAL_IMAGE = galleryData.images[imageIndex];
  
  const baseUrl = 'https://greenfresh.co.id';
  const currentUrl = `${baseUrl}/city/${city.slug}/`;

  // SCHEMA MARKUP (JSON-LD) UNTUK SEO LOKAL
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WholesaleStore",
        "@id": `${baseUrl}/#organization`,
        "name": "CV Green Fresh Cipanas",
        "url": baseUrl,
        "logo": {
          "@type": "ImageObject",
          "url": `${baseUrl}/logo.png`
        },
        "image": CITY_OPERATIONAL_IMAGE.url || "",
        "telephone": "+6287780937884",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Kp Jl. Kayumanis, RT.04/RW.04, Sukatani",
          "addressLocality": "Cipanas",
          "addressRegion": "Jawa Barat",
          "postalCode": "43253",
          "addressCountry": "ID"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -6.7444817,
          "longitude": 107.0236364
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "150",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      {
        "@type": "Service",
        "name": `Layanan Supply Sayur ${city.name}`,
        "provider": { "@id": `${baseUrl}/#organization` },
        "serviceType": "Vegetable Supplier",
        "areaServed": {
          "@type": "City",
          "name": city.name
        },
        "description": `Layanan pengadaan sayuran segar kualitas Grade A untuk industri Horeka di wilayah ${city.name}.`,
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": `Katalog Sayur ${city.name}`,
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": `Pengiriman Sayur Harian ke ${city.name}`
              }
            }
          ]
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${currentUrl}#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": baseUrl },
          { "@type": "ListItem", "position": 2, "name": "City", "item": `${baseUrl}/city` },
          { "@type": "ListItem", "position": 3, "name": city.name, "item": currentUrl }
        ]
      }
    ]
  };

  return (
    <div className="bg-white text-[#052c17] font-sans antialiased selection:bg-green-100 overflow-x-hidden">
      {/* INJECT JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />
      
      <Header />
      
      <main>
        {/* BREADCRUMB SECTION */}
        <div className="bg-white pt-24 lg:pt-32 border-b border-green-50">
          <nav aria-label="Breadcrumb" className="max-w-[1800px] mx-auto px-6 py-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em]">
            <Link href="/" className="flex items-center gap-1 text-slate-500 hover:text-[#166534]">
              <Home size={10} /> Home
            </Link>
            <ChevronRight size={10} className="text-slate-300" />
            <Link href="/city" className="text-slate-500 hover:text-[#166534]">
              City
            </Link>
            <ChevronRight size={10} className="text-slate-300" />
            <span className="text-[#166534] font-bold tracking-widest">{city.name}</span>
          </nav>
        </div>

        {/* CLIENT COMPONENT UNTUK UI INTERAKTIF */}
        <CityClientPage
          city={city}
          CITY_OPERATIONAL_IMAGE={CITY_OPERATIONAL_IMAGE}
        />

        {/* INTERNAL LINKING SECTION */}
        <NearbyCities currentSlug={slug} />
      </main>

      <Footer />
    </div>
  );
}