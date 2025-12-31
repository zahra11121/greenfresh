import React from 'react';
import * as motion from "framer-motion/client";
import { jabodetabekCities } from '@/data/cities';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PartnershipForm } from '@/components/PartnershipForm';
import { PriceTable } from '@/components/PriceTable';
import { vegetableData } from '@/components/data';
import { Star, ShieldCheck, Truck, ChevronRight } from 'lucide-react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { galleryData } from '@/data/galleryData';

import { CityHero } from '@/components/city/CityHero';
import { LogisticsTimeline } from '@/components/city/LogisticsTimeline';
import { CityFAQ } from '@/components/city/CityFAQ';
import { SectorTarget } from '@/components/city/SectorTarget';
import { QualityGuarantee } from '@/components/city/QualityGuarantee';
import { LiveStats } from '@/components/city/LiveStats';

const optimizeImg = (url, width = 800) => {
  if (!url) return '';
  return url.replace('/upload/', `/upload/f_auto,q_50,w_${width}/`);
};

export async function generateStaticParams() {
  return jabodetabekCities.map((city) => ({ slug: city.slug }));
}

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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WholesaleStore",
    "name": `Green Fresh Cipanas - Supplier Sayur ${city.name}`,
    "image": "https://greenfresh.co.id/images/og-main.jpg",
    "@id": currentUrl,
    "url": currentUrl,
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

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": `${baseUrl}/` },
      { "@type": "ListItem", "position": 2, "name": "Supplier Sayur", "item": `${baseUrl}/supplier-sayur/` },
      { "@type": "ListItem", "position": 3, "name": city.name, "item": currentUrl }
    ]
  };

  return (
    <div className="bg-white text-[#052c17] font-sans selection:bg-green-100 selection:text-[#052c17] overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <Header />
      
      <main>
        {/* BREADCRUMB - Fix: Text Slate-400 changed to Slate-600 for contrast */}
        <div className="bg-white pt-24 lg:pt-32 border-b border-green-50">
          <nav aria-label="Breadcrumb" className="max-w-[1800px] mx-auto px-6 py-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600">
            <Link href="/" className="hover:text-[#15803d] transition-colors">Home</Link>
            <ChevronRight size={10} />
            <span className="cursor-default">Supplier Sayur</span>
            <ChevronRight size={10} />
            <span className="text-[#15803d] font-bold tracking-widest">{city.name}</span>
          </nav>
        </div>

        <CityHero city={city} />

        {/* LOGISTICS ADVANTAGE */}
        <section className="py-12 lg:py-20 px-6 border-b-2 border-green-100 bg-white">
          <div className="max-w-[1800px] mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5 space-y-8">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Star size={14} className="text-[#15803d] fill-[#15803d]" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#15803d]">Logistics Advantage</span>
                  </div>
                  {/* Heading H2 */}
                  <h2 className="text-3xl lg:text-5xl font-serif italic font-black leading-tight uppercase text-[#052c17]">
                    Kekuatan Suplai <br/> Kawasan {city.name}
                  </h2>
                </div>
                <div className="grid gap-4">
                  {[
                    { icon: <Truck size={20} />, label: "Logistics Route", text: city.deliveryRoute },
                    { icon: <ShieldCheck size={20} />, label: "Quality Benchmark", text: city.usp }
                  ].map((item, i) => (
                    <div key={i} className="p-6 bg-[#f7faf7] rounded-2xl border border-green-100 group transition-all">
                      <div className="text-[#15803d] mb-3">{item.icon}</div>
                      {/* Fix: Label Slate-400 to Slate-600 */}
                      <h3 className="font-black text-[9px] uppercase mb-1 tracking-widest text-slate-600">{item.label}</h3>
                      <p className="text-base text-[#052c17] leading-relaxed font-bold">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="relative aspect-video rounded-3xl overflow-hidden border border-green-100 shadow-xl">
                  <img 
                    src={optimizeImg(CITY_OPERATIONAL_IMAGE, 1200)} 
                    alt={`Operasional distribusi Green Fresh di ${city.name}`} 
                    className="w-full h-full object-cover grayscale-[0.2]" 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CLIENT PORTFOLIO */}
        <section className="py-12 lg:py-20 bg-white border-b-2 border-green-100">
          <div className="max-w-[1800px] mx-auto px-6 text-center">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#15803d] mb-3">Client Portfolio</h2>
            <p className="text-2xl lg:text-4xl font-serif italic text-[#052c17] mb-10 font-bold tracking-tight">Fokus Layanan: {city.clientFocus}</p>
            <SectorTarget />
          </div>
        </section>

        {/* KATALOG HARGA */}
        <section id="katalog" className="bg-[#fcfdfc] py-12 lg:py-20 border-b-2 border-green-200 relative overflow-hidden">
          <div className="max-w-[1500px] mx-auto px-6 relative z-10">
            <div className="mb-10 text-center">
               <h2 className="text-2xl lg:text-4xl font-serif italic font-black text-[#052c17] uppercase tracking-tighter">
                  Katalog <span className="text-[#15803d]">Terupdate.</span>
               </h2>
            </div>
            <PriceTable data={vegetableData} showHeader={false} />
          </div>
        </section>

        <LiveStats />

        {/* QUALITY GUARANTEE */}
        <section className="py-12 bg-white border-b-2 border-green-100">
          <div className="max-w-[1800px] mx-auto px-6">
            <QualityGuarantee />
          </div>
        </section>

        {/* FAQ & TIMELINE */}
        <section className="py-12 lg:py-20 bg-white">
          <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <LogisticsTimeline slug={city.slug} cityName={city.name} />
            <CityFAQ cityName={city.name} />
          </div>
        </section>

        {/* PARTNERSHIP FORM */}
        <section id="kemitraan" className="py-16 lg:py-24 bg-[#f7faf7] border-t-2 border-green-200">
          <div className="max-w-[1800px] mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-[#15803d] text-[11px] font-black uppercase tracking-[0.5em] mb-3 block">B2B Enterprise {city.name}</span>
              <h2 className="text-3xl lg:text-5xl font-serif italic text-[#052c17] leading-none tracking-tighter mb-6">
                Mulai <span className="text-[#15803d] not-italic font-sans font-bold">Kemitraan.</span>
              </h2>
            </div>
            <PartnershipForm />
            
            <div className="mt-16 flex justify-center items-center gap-6">
               <div className="h-[1px] w-20 bg-green-200" aria-hidden="true" />
               <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#052c17]">Official Partner {city.name} 2025</span>
               <div className="h-[1px] w-20 bg-green-200" aria-hidden="true" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}