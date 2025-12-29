import { jabodetabekCities } from '@/data/cities';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PartnershipForm } from '@/components/PartnershipForm';
import { PriceTable } from '@/components/PriceTable';
import { vegetableData } from '@/components/data';
import { Star, Shield, ShieldCheck, Truck } from 'lucide-react';
import { notFound } from 'next/navigation';

// Import data gallery Anda
import { galleryData } from '@/data/galleryData';

import { CityHero } from '@/components/city/CityHero';
import { LogisticsTimeline } from '@/components/city/LogisticsTimeline';
import { CityFAQ } from '@/components/city/CityFAQ';
import { SectorTarget } from '@/components/city/SectorTarget';
import { QualityGuarantee } from '@/components/city/QualityGuarantee';
import { LiveStats } from '@/components/city/LiveStats';

/**
 * FUNGSI OPTIMASI CLOUDINARY
 * Menyisipkan parameter f_auto, q_50, dan width dinamis
 */
const optimizeImg = (url, width = 800) => {
  return url.replace('/upload/', `/upload/f_auto,q_50,w_${width}/`);
};

export async function generateStaticParams() {
  return jabodetabekCities.map((city) => ({
    slug: city.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const city = jabodetabekCities.find((c) => c.slug === slug);
  return {
    title: city?.title || "Supplier Sayur Cipanas",
    description: city?.angle || "Pemasok sayuran segar langsung dari petani Cipanas.",
  };
}

export default async function CityPage({ params }) {
  const { slug } = await params; 
  
  // 1. Temukan kota dan indeksnya di dalam array jabodetabekCities
  const cityIndex = jabodetabekCities.findIndex((c) => c.slug === slug);
  const city = jabodetabekCities[cityIndex];

  if (!city) {
    notFound();
  }

  // 2. LOGIKA GANTI GAMBAR OTOMATIS:
  // Gunakan indeks kota untuk mengambil gambar yang unik dari galleryData.
  // Modulo (%) digunakan agar tidak error jika jumlah kota lebih banyak dari jumlah gambar.
  const imageIndex = cityIndex % galleryData.images.length;
  const CITY_OPERATIONAL_IMAGE = galleryData.images[imageIndex];

  // --- FULL SEO SCHEMA MARKUP ---
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "WholesaleStore",
      "name": `Green Fresh Cipanas - Supplier Sayur ${city.name}`,
      "image": "https://greenfresh.co.id/images/og-main.jpg",
      "@id": `https://greenfresh.co.id/supplier-sayur/${city.slug}`,
      "url": `https://greenfresh.co.id/supplier-sayur/${city.slug}`,
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
      "areaServed": {
        "@type": "City",
        "name": city.name
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "124"
      }
    }
  ];

  return (
    <div className="bg-white text-[#052c17] font-sans selection:bg-[#16a34a] selection:text-white overflow-x-hidden">
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <Header />
      
      <main>
        <CityHero city={city} />

        {/* 2. OPERATIONAL FOCUS DENGAN GAMBAR DINAMIS PER KOTA */}
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
                  {/* GAMBAR SEKARANG DINAMIS BERDASARKAN INDEKS KOTA */}
                  <img 
                    src={optimizeImg(CITY_OPERATIONAL_IMAGE, 1000)} 
                    alt={`Dokumentasi Suplai Sayur Green Fresh di ${city.name}`} 
                    className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700" 
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#052c17]/60 via-transparent to-transparent" />
                  
                  {/* Overlay Info Gambar untuk variasi visual */}
                  <div className="absolute top-6 right-6 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                    <span className="text-[8px] font-black text-white uppercase tracking-widest">Gallery Item #{imageIndex + 1}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. SECTOR TARGET */}
        <section className="py-20 lg:py-32 bg-white border-t border-slate-50">
          <div className="max-w-[1200px] mx-auto px-6 text-center">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[#16a34a] mb-4">Client Portfolio</h3>
            <p className="text-2xl lg:text-3xl font-serif italic text-[#052c17] mb-12 font-bold">Fokus Layanan: {city.clientFocus}</p>
            <SectorTarget />
          </div>
        </section>

        {/* 4. KATALOG HARGA */}
        <section id="katalog" className="bg-[#052c17] py-20 lg:py-32 rounded-[2.5rem] lg:rounded-[5rem] mx-4 lg:mx-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#16a34a] blur-[150px] opacity-10 -mr-20 -mt-20" />
          <div className="max-w-[1400px] mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-10 items-end mb-16 border-b border-white/10 pb-12">
              <div>
                <div className="flex items-center gap-2 mb-4 text-[#84cc16]">
                  <Star size={12} fill="#84cc16" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em]">B2B Selection</span>
                </div>
                <h2 className="text-4xl lg:text-6xl font-serif italic font-black text-white leading-none uppercase tracking-tighter">
                  Katalog <br/> <span className="text-[#84cc16]">Komoditas.</span>
                </h2>
              </div>
              <p className="text-white/50 text-base lg:text-lg font-light leading-relaxed max-w-xl">
                Daftar harga grosir untuk wilayah {city.name}. Diperbarui mengikuti indeks panen kebun Sukatani setiap fajar.
              </p>
            </div>
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

        {/* 8. PARTNERSHIP FORM */}
        <section id="kemitraan" className="py-20 lg:py-32 bg-white">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="flex flex-col items-center text-center mb-12 lg:mb-16 space-y-4 lg:space-y-6">
              <Shield size={28} className="text-[#16a34a]" />
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif italic font-black uppercase tracking-tight text-[#052c17] leading-[1.1]">
                Mulai Kemitraan Supplier<br className="hidden md:block" />
                <span className="text-[#16a34a]">{city.name}</span>
              </h2>
              <p className="text-slate-400 text-base lg:text-lg font-light leading-relaxed">
                Fasilitasi pengadaan sayur korporasi dengan <span className="text-[#052c17] font-bold">legalitas PKP</span> dan fleksibilitas pembayaran (Termin).
              </p>
            </div>
            <div className="bg-slate-50 p-2 lg:p-4 rounded-[2.5rem] lg:rounded-[4rem] border border-slate-100 shadow-sm">
              <div className="bg-white rounded-[2rem] lg:rounded-[3.5rem]">
                <PartnershipForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}