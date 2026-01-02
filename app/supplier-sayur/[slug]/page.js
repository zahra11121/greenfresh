import React from 'react';
import * as motion from "framer-motion/client";
import { jabodetabekCities } from '@/data/cities';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PartnershipForm } from '@/components/PartnershipForm';
import { PriceTable } from '@/components/PriceTable';
import { vegetableData } from '@/components/data';
import { Star, ShieldCheck, Truck, ChevronRight, Users, Home } from 'lucide-react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { galleryData } from '@/data/galleryData';

import { CityHero } from '@/components/city/CityHero';
import { LogisticsTimeline } from '@/components/city/LogisticsTimeline';
import { CityFAQ } from '@/components/city/CityFAQ';
import { SectorTarget } from '@/components/city/SectorTarget';
import { QualityGuarantee } from '@/components/city/QualityGuarantee';
import { LiveStats } from '@/components/city/LiveStats';

export const dynamic = 'force-static';

/**
 * OPTIMASI CLOUDINARY
 */
const optimizeImg = (url, width = 850) => {
  if (!url) return '';
  return url.replace('/upload/', `/upload/f_auto,q_auto:eco,c_scale,w_${width}/`);
};

/**
 * KOMPONEN RATING BADGE
 */
const RatingSection = ({ cityName }) => (
  <div className="w-full bg-white border-y border-green-50 py-4">
    <div className="max-w-[1800px] mx-auto px-6 flex flex-wrap items-center justify-between gap-6">
      <div className="flex items-center gap-4">
        <div className="flex -space-x-1">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star key={s} size={16} className="text-yellow-400 fill-yellow-400" />
          ))}
        </div>
        <p className="text-[11px] lg:text-xs font-black uppercase tracking-widest text-[#052c17]">
          4.9/5 <span className="text-slate-400 font-medium px-2">|</span> 
          <span className="text-[#166534]">Terpercaya di {cityName}</span>
        </p>
      </div>
      
      <div className="hidden md:flex items-center gap-8">
        <div className="flex items-center gap-2">
          <Users size={14} className="text-[#166534]" />
          <span className="text-[10px] font-bold uppercase tracking-tighter text-slate-500">120+ Mitra Aktif</span>
        </div>
        <div className="flex items-center gap-2">
          <ShieldCheck size={14} className="text-[#166534]" />
          <span className="text-[10px] font-bold uppercase tracking-tighter text-slate-500">Grade A Quality</span>
        </div>
      </div>
    </div>
  </div>
);

export async function generateStaticParams() {
  return jabodetabekCities.map((city) => ({ slug: city.slug }));
}

/**
 * GENERATE METADATA - OPTIMASI SEO LOKAL
 */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const city = jabodetabekCities.find((c) => c.slug === slug);
  const baseUrl = 'https://greenfresh.co.id';
  const fullUrl = `${baseUrl}/supplier-sayur/${slug}/`;

  if (!city) return { title: 'Halaman Tidak Ditemukan' };

  // Deskripsi otomatis unik untuk SEO wilayah (Bintaro, Senopati, dll)
  const autoDescription = `Supplier sayur segar tangan pertama untuk wilayah ${city.name}. Cv Green Fresh Cipanas melayani pengadaan komoditas grade A harian dengan stok stabil khusus Hotel, Restoran, dan supermarket di ${city.name} dan sekitarnya.`;

  return {
    title: `Supplier Sayur ${city.name} - Stok Stabil Harian | CV Green Fresh Cipanas`,
    description: autoDescription,
    alternates: { canonical: fullUrl },
    openGraph: {
      title: `Distributor Sayuran Grade A Wilayah ${city.name}`,
      description: autoDescription,
      url: fullUrl,
      siteName: 'Green Fresh Cipanas',
      type: 'website',
      images: [
        {
          url: 'https://greenfresh.co.id/images/og-main.jpg',
          width: 1200,
          height: 630,
          alt: `Supplier Sayur ${city.name}`,
        },
      ],
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

  const customDescription = `Supplier sayur segar tangan pertama untuk wilayah ${city.name}. Green Fresh melayani pengadaan komoditas grade A harian dengan stok stabil khusus Hotel, Restoran, dan Cafe di ${city.name}.`;

  // --- SCHEMA DATA ---
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WholesaleStore",
    "name": `Green Fresh Cipanas - Supplier Sayur ${city.name}`,
    "description": customDescription,
    "image": "https://greenfresh.co.id/images/og-main.jpg",
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
    "areaServed": { "@type": "City", "name": city.name },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "128",
      "bestRating": "5",
      "worstRating": "1"
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
    <div className="bg-white text-[#052c17] font-sans antialiased selection:bg-green-100 overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <Header />
      
      <main>
        {/* BREADCRUMB */}
        <div className="bg-white pt-24 lg:pt-32 border-b border-green-50">
          <nav aria-label="Breadcrumb" className="max-w-[1800px] mx-auto px-6 py-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em]">
            <Link 
              href="/" 
              className="flex items-center gap-1 text-slate-500 hover:text-[#166534] transition-colors"
            >
              <Home size={10} />
              Home
            </Link>
            <ChevronRight size={10} className="text-slate-300" />
            <Link 
              href="/supplier-sayur" 
              className="text-slate-500 hover:text-[#166534] transition-colors"
            >
              Supplier Sayur
            </Link>
            <ChevronRight size={10} className="text-slate-300" />
            <span className="text-[#166534] font-bold tracking-widest">{city.name}</span>
          </nav>
        </div>

        <CityHero city={city} />
        <RatingSection cityName={city.name} />

        {/* LOGISTICS ADVANTAGE */}
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
                    Kekuatan <span className="not-italic font-sans text-slate-900">Suplai</span> <br/>
                    <span className="inline-block text-[#166534]">{city.name}</span>
                  </h2>
                </div>

                <div className="grid gap-6">
                  {[
                    { icon: <Truck size={20} />, label: "Logistics Route", text: city.deliveryRoute },
                    { icon: <ShieldCheck size={20} />, label: "Quality Benchmark", text: city.usp }
                  ].map((item, i) => (
                    <div key={i} className="p-6 bg-[#f7faf7] rounded-3xl border border-green-100 shadow-sm hover:shadow-md transition-all">
                      <div className="text-[#166534] mb-4">{item.icon}</div>
                      <p className="font-black text-[10px] uppercase mb-1 tracking-[0.2em] text-[#166534]">{item.label}</p>
                      <p className="text-lg text-[#052c17] leading-relaxed font-bold">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="relative aspect-[4/3] lg:aspect-video rounded-[2.5rem] lg:rounded-[4rem] overflow-hidden border-2 border-green-100 shadow-2xl group">
                  <img
                    src={optimizeImg(CITY_OPERATIONAL_IMAGE, 850)}
                    alt={`Operasional armada distribusi Green Fresh di ${city.name}`}
                    className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                    width="850"
                    height="478"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#052c17]/40 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CLIENT PORTFOLIO */}
        <section className="py-12 lg:py-24 bg-white border-b-2 border-green-100 text-center px-6">
          <div className="max-w-[1800px] mx-auto">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#166534] mb-3">Client Portfolio</h2>
            <p className="text-xl lg:text-3xl font-serif italic text-[#052c17] mb-10 font-bold tracking-tight">
              Fokus Layanan: <span className="text-[#166534]">{city.clientFocus}</span>
            </p>
            <SectorTarget />
          </div>
        </section>

        {/* KATALOG HARGA */}
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

        <section className="py-12 lg:py-24 bg-white border-b border-slate-100">
          <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
            <LogisticsTimeline slug={city.slug} cityName={city.name} />
            <CityFAQ cityName={city.name} />
          </div>
        </section>

        <section id="kemitraan" className="py-16 lg:py-32 bg-[#f7faf7] border-t-2 border-green-200">
          <div className="max-w-[1800px] mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[#166534] text-[11px] font-black uppercase tracking-[0.5em] mb-4 block">B2B Enterprise {city.name}</span>
              <h2 className="text-3xl lg:text-6xl font-serif italic text-[#052c17] leading-none tracking-tighter">
                Mulai <span className="text-[#166534] not-italic font-sans font-bold">Kemitraan.</span>
              </h2>
            </div>
            <PartnershipForm />
            
            <div className="mt-20 flex justify-center items-center gap-6">
               <div className="h-[1px] w-24 bg-green-200" />
               <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">Official Partner {city.name} 2026</span>
               <div className="h-[1px] w-24 bg-green-200" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}