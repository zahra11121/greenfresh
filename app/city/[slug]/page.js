import { jabodetabekCities } from '@/data/cities';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight, Home, MapPin } from 'lucide-react';
import { galleryData } from '@/data/galleryData';
import CityClientPage from './CityClientPage';

export const dynamic = 'force-static';

export async function generateStaticParams() {
  return jabodetabekCities.map((city) => ({ slug: city.slug }));
}

/**
 * Komponen Internal Linking untuk membantu perayapan Googlebot
 * Menampilkan 6 kota lain secara acak di bagian bawah halaman
 */
const NearbyCities = ({ currentSlug }) => {
  const otherCities = jabodetabekCities
    .filter(c => c.slug !== currentSlug)
    .sort(() => 0.5 - Math.random())
    .slice(0, 6);

  return (
    <section className="py-16 bg-white border-t border-green-50">
      <div className="max-w-[1800px] mx-auto px-6">
        <h3 className="text-xs font-black text-[#052c17] mb-8 uppercase tracking-[0.3em] flex items-center gap-3">
          <MapPin size={14} className="text-[#166534]" /> 
          Cakupan Wilayah Lainnya
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {otherCities.map((city) => (
            <Link 
              key={city.slug} 
              href={`/city/${city.slug}/`}
              className="group p-4 rounded-2xl border border-green-100 hover:border-[#166534] hover:bg-green-50 transition-all duration-300"
            >
              <span className="text-[11px] font-bold text-slate-600 group-hover:text-[#166534] uppercase tracking-wider block text-center">
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
    description: `Supplier sayur segar tangan pertama wilayah ${city.name}. Melayani pengadaan komoditas grade A harian khusus Hotel, Restoran, dan Cafe.`,
    alternates: { canonical: `${baseUrl}/city/${slug}/` },
  };
}

export default async function CityPage({ params }) {
  const { slug } = await params;
  const cityIndex = jabodetabekCities.findIndex((c) => c.slug === slug);
  const fullCityData = jabodetabekCities[cityIndex];

  if (!fullCityData) notFound();

  // OPTIMASI: Sanitasi data kota untuk mengurangi ukuran Payload JSON
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

  // JSON-LD untuk Local Business/Store
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WholesaleStore",
    "name": `Green Fresh Cipanas - Supplier Sayur ${city.name}`,
    "url": currentUrl,
    "telephone": "+6287780937884",
    "areaServed": { "@type": "City", "name": city.name },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "128"
    }
  };

  // NEW: JSON-LD untuk Breadcrumb
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
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
  };

  return (
    <div className="bg-white text-[#052c17] font-sans antialiased selection:bg-green-100 overflow-x-hidden">
      {/* Schema Markup Injection */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} 
      />
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} 
      />
      
      <Header />
      
      <main>
        {/* Breadcrumb Navigation UI */}
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

        {/* INTERNAL LINKING HUB: Mencegah Googlebot berhenti merayap */}
        <NearbyCities currentSlug={slug} />
      </main>

      <Footer />
    </div>
  );
}