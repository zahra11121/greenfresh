import React from 'react';
import { jabodetabekCities } from '@/data/cities';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PartnershipForm } from '@/components/PartnershipForm';
import { PriceTable } from '@/components/PriceTable';
import { vegetableData } from '@/components/data';
import { Star, Truck, ChevronRight, CheckCircle2 } from 'lucide-react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { galleryData } from '@/data/galleryData';

import { CityHero } from '@/components/city/CityHero';
import { QualityGuarantee } from '@/components/city/QualityGuarantee';
import { LiveStats } from '@/components/city/LiveStats';

export const dynamic = 'force-static'; 

export async function generateStaticParams() {
  return jabodetabekCities.map((city) => ({
    slug: city.slug,
  }));
}

const optimizeImg = (url, width = 850) => {
  if (!url) return '';
  return url.replace('/upload/', `/upload/f_auto,q_auto:eco,c_scale,w_${width}/`);
};

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const city = jabodetabekCities.find((c) => c.slug === slug);
  
  if (!city) return { title: 'Halaman Tidak Ditemukan' };

  return {
    title: city.title,
    description: city.angle,
    alternates: { 
      canonical: `https://greenfresh.co.id/supplier-sayur/${slug}/` 
    },
  };
}

export default async function CityPage({ params }) {
  const { slug } = await params;
  const city = jabodetabekCities.find((c) => c.slug === slug);

  if (!city) return notFound();

  const cityIndex = jabodetabekCities.indexOf(city);
  const imageIndex = cityIndex % galleryData.images.length;
  const CITY_OPERATIONAL_IMAGE = galleryData.images[imageIndex];

  /**
   * SCHEMA MARKUP: CIPANAS SEBAGAI PUSAT, CITY SEBAGAI AREA LAYANAN
   */
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WholesaleStore",
        "@id": "https://greenfresh.co.id/#organization",
        "name": "Green Fresh Cipanas",
        "url": "https://greenfresh.co.id",
        "logo": "https://greenfresh.co.id/logo.png",
        "telephone": "+6287780937884",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Jl. Kota Bunga, Desa Cipanas",
          "addressLocality": "Cianjur",
          "addressRegion": "Jawa Barat",
          "postalCode": "43253",
          "addressCountry": "ID"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -6.7027,
          "longitude": 107.0372
        },
        "image": optimizeImg(CITY_OPERATIONAL_IMAGE, 1200),
        "areaServed": {
          "@type": "City",
          "name": city.name,
          "description": `Layanan pengiriman sayuran segar dari kebun Cipanas ke wilayah ${city.name}`
        }
      },
      {
        "@type": "WebPage",
        "@id": `https://greenfresh.co.id/supplier-sayur/${slug}/#webpage`,
        "url": `https://greenfresh.co.id/supplier-sayur/${slug}/`,
        "name": city.title,
        "description": city.angle,
        "breadcrumb": { "@id": `https://greenfresh.co.id/supplier-sayur/${slug}/#breadcrumb` }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://greenfresh.co.id/supplier-sayur/${slug}/#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://greenfresh.co.id/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": `Supplier Sayur ${city.name}`,
            "item": `https://greenfresh.co.id/supplier-sayur/${slug}/`
          }
        ]
      },
      {
        "@type": "Service",
        "serviceType": "Vegetable Wholesale Supply",
        "provider": { "@id": "https://greenfresh.co.id/#organization" },
        "areaServed": { "@type": "City", "name": city.name },
        "description": `Distribusi sayuran segar harian untuk restoran, hotel, dan katering di wilayah ${city.name}.`
      }
    ]
  };

  return (
    <div className="bg-white text-[#052c17] font-sans overflow-x-hidden">
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} 
      />
      
      <Header />
      
      <main>
        <div className="bg-white pt-24 lg:pt-32 border-b border-green-50">
          <nav aria-label="Breadcrumb" className="max-w-[1800px] mx-auto px-6 py-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600">
            <Link href="/" className="hover:text-[#166534]">Home</Link>
            <ChevronRight size={10} />
            <span className="text-slate-400">Supplier Sayur</span>
            <ChevronRight size={10} />
            <span className="text-[#166534] font-bold tracking-widest">{city.name}</span>
          </nav>
        </div>

        <CityHero city={city} />

        <div className="bg-white py-6 border-b border-green-50">
          <div className="max-w-[1800px] mx-auto px-6 flex flex-wrap items-center justify-center gap-6 lg:gap-16">
            <div className="flex items-center gap-3">
              <div className="flex gap-0.5 text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-sm font-bold">4.9/5 <span className="text-slate-400 font-normal ml-1">(127+ Reviews)</span></p>
            </div>
            <div className="flex items-center gap-2 text-[#166534]">
              <CheckCircle2 size={18} />
              <p className="text-[10px] font-black uppercase tracking-widest">Pemasok Terverifikasi {city.name}</p>
            </div>
          </div>
        </div>

        <section className="py-12 lg:py-24 px-6 bg-white">
          <div className="max-w-[1800px] mx-auto grid lg:grid-cols-12 gap-12 items-center text-left">
            <div className="lg:col-span-5 space-y-8">
               <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif italic font-black leading-tight uppercase text-[#052c17]">
                 Kekuatan <span className="not-italic font-sans">Suplai</span> <br/>
                 <span className="text-[#166534]">{city.name}</span>
               </h2>
               <div className="p-6 bg-[#f7faf7] rounded-3xl border border-green-100">
                  <Truck size={20} className="text-[#166534] mb-4" />
                  <p className="font-black text-[10px] uppercase mb-1 tracking-widest text-[#166534]">Logistics Cipanas - {city.name}</p>
                  <p className="text-lg font-bold">{city.deliveryRoute}</p>
               </div>
            </div>
            <div className="lg:col-span-7 rounded-[2.5rem] overflow-hidden border shadow-sm">
                <img 
                  src={optimizeImg(CITY_OPERATIONAL_IMAGE, 850)} 
                  alt={`Distribusi Sayur Green Fresh ke ${city.name}`} 
                  className="w-full object-cover aspect-[16/9] lg:aspect-auto" 
                />
            </div>
          </div>
        </section>

        <section id="katalog" className="bg-[#fcfdfc] py-12 lg:py-24">
            <PriceTable data={vegetableData} showHeader={false} />
        </section>

        <LiveStats />
        <QualityGuarantee />
        
        <section id="kemitraan" className="py-16 lg:py-32 bg-[#f7faf7]">
          <PartnershipForm />
        </section>
      </main>

      <Footer />
    </div>
  );
}