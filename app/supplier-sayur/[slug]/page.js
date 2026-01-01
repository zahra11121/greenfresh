import React from 'react';
import { jabodetabekCities } from '@/data/cities';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PartnershipForm } from '@/components/PartnershipForm';
import { PriceTable } from '@/components/PriceTable';
import { vegetableData } from '@/components/data';
import { Star, ShieldCheck, Truck, ChevronRight, CheckCircle2 } from 'lucide-react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { galleryData } from '@/data/galleryData';

import { CityHero } from '@/components/city/CityHero';
import { LogisticsTimeline } from '@/components/city/LogisticsTimeline';
import { CityFAQ } from '@/components/city/CityFAQ';
import { SectorTarget } from '@/components/city/SectorTarget';
import { QualityGuarantee } from '@/components/city/QualityGuarantee';
import { LiveStats } from '@/components/city/LiveStats';

/**
 * OPTIMASI INDEXING: 
 * Menggunakan Dynamic Rendering agar bot selalu mendapat HTML Fresh.
 */
export const dynamic = 'force-dynamic'; 
export const revalidate = 0;

const optimizeImg = (url, width = 850) => {
  if (!url) return '';
  return url.replace('/upload/', `/upload/f_auto,q_auto:eco,c_scale,w_${width}/`);
};

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const city = jabodetabekCities.find((c) => c.slug === slug);
  const baseUrl = 'https://greenfresh.co.id';
  const fullUrl = `${baseUrl}/supplier-sayur/${slug}/`;

  if (!city) return { title: 'Halaman Tidak Ditemukan' };

  return {
    title: city.title || `Supplier Sayur Segar ${city.name} - Green Fresh`,
    description: city.angle || `Mitra pengadaan sayuran segar wilayah ${city.name}.`,
    alternates: { canonical: fullUrl },
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

  if (!city) notFound();

  const imageIndex = cityIndex % galleryData.images.length;
  const CITY_OPERATIONAL_IMAGE = galleryData.images[imageIndex];
  const baseUrl = 'https://greenfresh.co.id';
  const currentUrl = `${baseUrl}/supplier-sayur/${city.slug}/`;

  // SCHEMA LENGKAP: LocalBusiness + AggregateRating + Delivery
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WholesaleStore",
    "name": `Green Fresh Cipanas - Supplier Sayur ${city.name}`,
    "description": city.angle,
    "image": "https://greenfresh.co.id/images/og-main.jpg",
    "url": currentUrl,
    "telephone": "+6287780937884",
    "priceRange": "Rp",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kp Jl. Kayumanis, RT.04/RW.04, Sukatani",
      "addressLocality": "Cipanas",
      "addressRegion": "Jawa Barat",
      "postalCode": "43253",
      "addressCountry": "ID"
    },
    "areaServed": { "@type": "City", "name": city.name },
    "potentialAction": {
      "@type": "DeliveryAction",
      "originLocation": { "@type": "Place", "name": "Cipanas Warehouse" },
      "destinationLocation": { "@type": "City", "name": city.name }
    }
  };

  return (
    <div className="bg-white text-[#052c17] font-sans selection:bg-green-100 selection:text-[#052c17] overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Header />
      
      <main>
        {/* BREADCRUMB */}
        <div className="bg-white pt-24 lg:pt-32 border-b border-green-50">
          <nav aria-label="Breadcrumb" className="max-w-[1800px] mx-auto px-6 py-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600">
            <Link href="/" className="hover:text-[#166534] transition-colors">Home</Link>
            <ChevronRight size={10} />
            <span className="cursor-default text-slate-400">Supplier Sayur</span>
            <ChevronRight size={10} />
            <span className="text-[#166534] font-bold tracking-widest">{city.name}</span>
          </nav>
        </div>

        <CityHero city={city} />

        {/* TRUST BADGE SECTION (Validasi AggregateRating Visual) */}
        <div className="bg-white py-6 border-b border-green-50">
          <div className="max-w-[1800px] mx-auto px-6 flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            <div className="flex items-center gap-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm font-bold text-[#052c17]">
                4.9/5 <span className="text-slate-400 font-normal ml-1">(127+ Reviews)</span>
              </p>
            </div>
            <div className="h-4 w-[1px] bg-slate-200 hidden lg:block" />
            <div className="flex items-center gap-2 text-[#166534]">
              <CheckCircle2 size={18} />
              <p className="text-xs font-black uppercase tracking-widest">Terverifikasi di {city.name}</p>
            </div>
            <div className="h-4 w-[1px] bg-slate-200 hidden lg:block" />
            <div className="flex items-center gap-2 text-[#166534]">
              <Truck size={18} />
              <p className="text-xs font-black uppercase tracking-widest">Pengiriman Harian Cipanas</p>
            </div>
          </div>
        </div>

        {/* LOGISTICS ADVANTAGE SECTION */}
        <section className="py-12 lg:py-24 px-6 border-b-2 border-green-100 bg-white">
          <div className="max-w-[1800px] mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Star size={14} className="text-[#166534] fill-[#166534]" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#166534]">Logistics Advantage</span>
                  </div>
                  
                  <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif italic font-black leading-tight uppercase text-[#052c17]">
                    Kekuatan <span className="not-italic font-sans">Suplai</span> <br/>
                    <span className="inline-block text-[#166534]">{city.name}</span>
                  </h2>
                </div>

                <div className="grid gap-6">
                   <div className="p-6 bg-[#f7faf7] rounded-3xl border border-green-100 shadow-sm">
                      <Truck size={20} className="text-[#166534] mb-4" />
                      <p className="font-black text-[10px] uppercase mb-1 tracking-[0.2em] text-[#166534]">Logistics Route (Cipanas - {city.name})</p>
                      <p className="text-lg text-[#052c17] leading-relaxed font-bold">{city.deliveryRoute}</p>
                   </div>
                   <div className="p-6 bg-[#f7faf7] rounded-3xl border border-green-100 shadow-sm">
                      <ShieldCheck size={20} className="text-[#166534] mb-4" />
                      <p className="font-black text-[10px] uppercase mb-1 tracking-[0.2em] text-[#166534]">Quality Benchmark</p>
                      <p className="text-lg text-[#052c17] leading-relaxed font-bold">{city.usp}</p>
                   </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="relative aspect-[4/3] lg:aspect-video rounded-[2.5rem] lg:rounded-[4rem] overflow-hidden border-2 border-green-100 shadow-2xl group">
                  <img 
                    src={optimizeImg(CITY_OPERATIONAL_IMAGE, 850)} 
                    alt={`Operasional armada distribusi Green Fresh di ${city.name}`} 
                    className="w-full h-full object-cover transition-all duration-700" 
                    width="850"
                    height="478"
                    fetchPriority="high"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#052c17]/40 to-transparent" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CLIENT PORTFOLIO SECTION */}
        <section className="py-12 lg:py-24 bg-white border-b-2 border-green-100 text-center px-6">
          <div className="max-w-[1800px] mx-auto">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#166534] mb-3">Client Portfolio</h2>
            <p className="text-xl lg:text-3xl font-serif italic text-[#052c17] mb-10 font-bold tracking-tight">
              Fokus Layanan: <span className="text-[#166534]">{city.clientFocus}</span>
            </p>
            <SectorTarget />
          </div>
        </section>

        {/* KATALOG HARGA SECTION */}
        <section id="katalog" className="bg-[#fcfdfc] py-12 lg:py-24 border-b-2 border-green-200 relative overflow-hidden">
          <div className="max-w-[1500px] mx-auto px-6 relative z-10">
            <div className="mb-12 text-center">
               <h2 className="text-2xl lg:text-4xl font-serif italic font-black text-[#052c17] uppercase tracking-tighter leading-none">
                 Katalog <span className="text-[#166534]">Terupdate.</span>
               </h2>
               <p className="mt-4 text-slate-600 font-bold text-[10px] uppercase tracking-widest">Update harian komoditas super wilayah {city.name}</p>
            </div>
            <PriceTable data={vegetableData} showHeader={false} />
          </div>
        </section>

        <LiveStats />
        <QualityGuarantee />

        <section className="py-12 lg:py-24 bg-white border-b border-slate-100 text-left">
          <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
            <LogisticsTimeline slug={city.slug} cityName={city.name} />
            <CityFAQ cityName={city.name} />
          </div>
        </section>

        <section id="kemitraan" className="py-16 lg:py-32 bg-[#f7faf7] border-t-2 border-green-200 text-center">
          <div className="max-w-[1800px] mx-auto px-6">
            <div className="mb-16">
              <span className="text-[#166534] text-[11px] font-black uppercase tracking-[0.5em] mb-4 block">B2B Enterprise {city.name}</span>
              <h2 className="text-3xl lg:text-6xl font-serif italic text-[#052c17] leading-none tracking-tighter">
                Mulai <span className="text-[#166534] not-italic font-sans font-bold">Kemitraan.</span>
              </h2>
            </div>
            <PartnershipForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}