import React from 'react';
import { jabodetabekCities } from '@/data/cities';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PartnershipForm } from '@/components/PartnershipForm';
import { PriceTable } from '@/components/PriceTable';
import { vegetableData } from '@/components/data';
import { Star, Shield, ShieldCheck, Truck } from 'lucide-react';
import { notFound } from 'next/navigation';

// Import data gallery
import { galleryData } from '@/data/galleryData';

import { CityHero } from '@/components/city/CityHero';
import { LogisticsTimeline } from '@/components/city/LogisticsTimeline';
import { CityFAQ } from '@/components/city/CityFAQ';
import { SectorTarget } from '@/components/city/SectorTarget';
import { QualityGuarantee } from '@/components/city/QualityGuarantee';
import { LiveStats } from '@/components/city/LiveStats';

/**
 * FUNGSI OPTIMASI CLOUDINARY
 */
const optimizeImg = (url, width = 800) => {
  if (!url) return '';
  return url.replace('/upload/', `/upload/f_auto,q_50,w_${width}/`);
};

/**
 * GENERATE STATIC PARAMS
 */
export async function generateStaticParams() {
  return jabodetabekCities.map((city) => ({
    slug: city.slug,
  }));
}

/**
 * GENERATE METADATA & CANONICAL (JS Version)
 */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const city = jabodetabekCities.find((c) => c.slug === slug);
  
  const baseUrl = 'https://greenfresh.co.id';
  const fullUrl = `${baseUrl}/supplier-sayur/${slug}`;

  if (!city) return { title: 'Halaman Tidak Ditemukan' };

  return {
    title: city.title || `Supplier Sayur Segar ${city.name} - Green Fresh`,
    description: city.angle || `Mitra pengadaan sayuran segar wilayah ${city.name}.`,
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      title: city.title,
      description: city.angle,
      url: fullUrl,
      siteName: 'Green Fresh Cipanas',
      type: 'website',
    },
  };
}

export default async function CityPage({ params }) {
  const { slug } = await params; 
  
  const cityIndex = jabodetabekCities.findIndex((c) => c.slug === slug);
  const city = jabodetabekCities[cityIndex];

  if (!city) {
    notFound();
  }

  const imageIndex = cityIndex % galleryData.images.length;
  const CITY_OPERATIONAL_IMAGE = galleryData.images[imageIndex];

  // --- SEO SCHEMA MARKUP ---
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WholesaleStore",
    "name": `Green Fresh Cipanas - Supplier Sayur ${city.name}`,
    "image": "https://greenfresh.co.id/images/og-main.jpg",
    "@id": `https://greenfresh.co.id/supplier-sayur/${city.slug}/`,
    "url": `https://greenfresh.co.id/supplier-sayur/${city.slug}/`,
    "telephone": "+6287780937884",
    "priceRange": "Rp",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kp Jl. Kayumanis, RT.04/RW.04, Sukatani",
      "addressLocality": "Cipanas",
      "addressRegion": "Jawa Barat",
      "postalCode": "43253",
      "addressCountry": "ID"
    },
    "areaServed": {
      "@type": "City",
      "name": city.name
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "124"
    }
  };

  return (
    <div className="bg-white text-[#052c17] font-sans selection:bg-[#16a34a] selection:text-white overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />
      
      <main>
        <CityHero city={city} />

        <section className="pb-20 lg:pb-32 px-6">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-5 space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Star size={14} className="text-[#16a34a] fill-[#16a34a]" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Logistics Advantage</span>
                  </div>
                  <h2 className="text-3xl lg:text-5xl font-serif italic font-black leading-tight uppercase text-[#052c17]">
                    Kekuatan Suplai <br/> Kawasan {city.name}
                  </h2>
                </div>
                <div className="grid gap-5">
                  <div className="group p-6 lg:p-8 bg-slate-50 rounded-[2rem] transition-all border border-transparent hover:border-slate-100 shadow-sm">
                    <Truck size={24} className="text-[#16a34a] mb-4" />
                    <h4 className="font-black text-[9px] uppercase mb-2 tracking-widest text-slate-400">Logistics Route</h4>
                    <p className="text-sm lg:text-base text-[#052c17] leading-relaxed font-bold">{city.deliveryRoute}</p>
                  </div>
                  <div className="group p-6 lg:p-8 bg-slate-50 rounded-[2rem] transition-all border border-transparent hover:border-slate-100 shadow-sm">
                    <ShieldCheck size={24} className="text-[#16a34a] mb-4" />
                    <h4 className="font-black text-[9px] uppercase mb-2 tracking-widest text-slate-400">Quality Benchmark</h4>
                    <p className="text-sm lg:text-base text-[#052c17] leading-relaxed font-bold">{city.usp}</p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="relative aspect-[4/5] md:aspect-video lg:aspect-[4/5] rounded-[2.5rem] lg:rounded-[4rem] overflow-hidden shadow-2xl shadow-slate-200 bg-slate-100">
                  <img 
                    src={optimizeImg(CITY_OPERATIONAL_IMAGE, 1000)} 
                    alt={`Dokumentasi Suplai Sayur Green Fresh di ${city.name}`} 
                    className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700" 
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#052c17]/60 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-32 bg-white border-t border-slate-50">
          <div className="max-w-[1200px] mx-auto px-6 text-center">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[#16a34a] mb-4">Client Portfolio</h3>
            <p className="text-2xl lg:text-3xl font-serif italic text-[#052c17] mb-12 font-bold">Fokus Layanan: {city.clientFocus}</p>
            <SectorTarget />
          </div>
        </section>

        <section id="katalog" className="bg-[#052c17] py-20 lg:py-32 rounded-[2.5rem] lg:rounded-[5rem] mx-4 lg:mx-8 relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6 relative z-10">
            <PriceTable data={vegetableData} showHeader={false} />
          </div>
        </section>

        <LiveStats />

        <section className="py-20 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <QualityGuarantee />
          </div>
        </section>

        <section className="py-20 lg:py-32 bg-slate-50">
          <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
            <LogisticsTimeline slug={city.slug} cityName={city.name} />
            <CityFAQ cityName={city.name} />
          </div>
        </section>

        <section id="kemitraan" className="py-20 lg:py-32 bg-white">
          <div className="max-w-[1400px] mx-auto px-6">
            <PartnershipForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}