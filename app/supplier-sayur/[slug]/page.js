import { jabodetabekCities } from '@/data/cities';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { galleryData } from '@/data/galleryData';
import CityClientPage from './CityClientPage';

export const dynamic = 'force-static';

export async function generateStaticParams() {
  return jabodetabekCities.map((city) => ({ slug: city.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const city = jabodetabekCities.find((c) => c.slug === slug);
  if (!city) return { title: 'Halaman Tidak Ditemukan' };

  const baseUrl = 'https://greenfresh.co.id';
  return {
    title: `Supplier Sayur ${city.name} - Stok Stabil Harian | CV Green Fresh Cipanas`,
    description: `Supplier sayur segar tangan pertama wilayah ${city.name}. Melayani pengadaan komoditas grade A harian khusus Hotel, Restoran, dan Cafe.`,
    alternates: { canonical: `${baseUrl}/supplier-sayur/${slug}/` },
  };
}

export default async function CityPage({ params }) {
  const { slug } = await params;
  const cityIndex = jabodetabekCities.findIndex((c) => c.slug === slug);
  const city = jabodetabekCities[cityIndex];

  if (!city) notFound();

  const imageIndex = cityIndex % galleryData.images.length;
  const CITY_OPERATIONAL_IMAGE = galleryData.images[imageIndex];
  const currentUrl = `https://greenfresh.co.id/supplier-sayur/${city.slug}/`;

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

  return (
    <div className="bg-white text-[#052c17] font-sans antialiased selection:bg-green-100 overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <Header />
      
      <main>
        {/* Breadcrumb Server-Side */}
        <div className="bg-white pt-24 lg:pt-32 border-b border-green-50">
          <nav aria-label="Breadcrumb" className="max-w-[1800px] mx-auto px-6 py-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em]">
            <Link href="/" className="flex items-center gap-1 text-slate-500 hover:text-[#166534]">
              <Home size={10} /> Home
            </Link>
            <ChevronRight size={10} className="text-slate-300" />
            <Link href="/supplier-sayur" className="text-slate-500 hover:text-[#166534]">
              Supplier Sayur
            </Link>
            <ChevronRight size={10} className="text-slate-300" />
            <span className="text-[#166534] font-bold tracking-widest">{city.name}</span>
          </nav>
        </div>

        {/* Memanggil Komponen Client */}
        <CityClientPage 
          city={city} 
          CITY_OPERATIONAL_IMAGE={CITY_OPERATIONAL_IMAGE} 
        />
      </main>

      <Footer />
    </div>
  );
}