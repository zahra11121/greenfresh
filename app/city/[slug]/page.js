import { jabodetabekCities } from '@/data/cities';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight, Home, MapPin } from 'lucide-react';
import { galleryData } from '@/data/galleryData';
import CityClientPage from './CityClientPage';

// AKTIFKAN SSR (Server Side Rendering)
// Menghapus 'force-static' untuk memastikan bot mendapatkan konten segar setiap saat
export const dynamic = 'force-dynamic';
export const runtime = 'edge';

/**
 * OPTIMASI INTERNAL LINKING (Nearby Cities)
 * Didesain agar Googlebot bisa merayap rute dinamis lainnya secara natural.
 */
const NearbyCities = ({ currentSlug }) => {
  const otherCities = jabodetabekCities
    .filter(c => c.slug !== currentSlug)
    .sort(() => 0.5 - Math.random())
    .slice(0, 6); 

  // Variasi label untuk SEO natural agar tidak dianggap link spam
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

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const city = jabodetabekCities.find((c) => c.slug === slug);
  if (!city) return { title: 'Halaman Tidak Ditemukan' };

  const baseUrl = 'https://greenfresh.co.id';
  return {
    title: `Supplier Sayur ${city.name} - Stok Stabil Harian | CV Green Fresh Cipanas`,
    description: `Supplier sayur segar tangan pertama wilayah ${city.name}. Melayani pengadaan komoditas grade A harian khusus Hotel, Restoran, dan Cafe wilayah ${city.name}.`,
    alternates: { canonical: `${baseUrl}/city/${slug}/` },
    openGraph: {
      title: `Supplier Sayur ${city.name} | Green Fresh Cipanas`,
      description: `Pengadaan sayur harian untuk Hotel, Restoran & Cafe wilayah ${city.name}.`,
      url: `${baseUrl}/city/${slug}/`,
      type: 'website',
      images: [{ url: `${baseUrl}/og-image.jpg` }],
    }
  };
}

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
   * SCHEMA GRAPH FIX (Parent Node Valid):
   * AggregateRating diletakkan di dalam WholesaleStore agar parent-nya valid.
   * Service diletakkan terpisah namun terhubung melalui provider ID.
   */
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
        // FIX: AggregateRating berada di dalam node organisasi utama
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
      {/* Injeksi Skema Graph */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }} 
      />
      
      <Header />
      
      <main>
        {/* Breadcrumb Visual */}
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

        {/* Konten Utama Kota */}
        <CityClientPage 
          city={city} 
          CITY_OPERATIONAL_IMAGE={CITY_OPERATIONAL_IMAGE} 
        />

        {/* Internal Linking Hub (SSR Dynamic) */}
        <NearbyCities currentSlug={slug} />
      </main>

      <Footer />
    </div>
  );
}