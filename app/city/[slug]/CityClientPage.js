'use client';

import React, { Suspense } from 'react';
import { motion } from "framer-motion"; // ✅ PERBAIKAN: Import yang benar
import { Star, ShieldCheck, Truck, Users } from 'lucide-react';
import { PartnershipForm } from '@/components/PartnershipForm';
import { PriceTable } from '@/components/PriceTable';
import { vegetableData } from '@/components/data';
import { CityHero } from '@/components/city/CityHero';
import { LogisticsTimeline } from '@/components/city/LogisticsTimeline';
import { CityFAQ } from '@/components/city/CityFAQ';
import { SectorTarget } from '@/components/city/SectorTarget';
import { QualityGuarantee } from '@/components/city/QualityGuarantee';
import { LiveStats } from '@/components/city/LiveStats';

/**
 * Optimasi Gambar Cloudinary (f_auto: format otomatis, q_auto: kualitas optimal)
 */
const optimizeImg = (url, width = 850) => {
  if (!url) return '';
  // Menambahkan transformasi Cloudinary untuk efisiensi bandwidth
  return url.replace('/upload/', `/upload/f_auto,q_auto:eco,c_scale,w_${width}/`);
};

// Loading Skeleton untuk gambar
const ImageSkeleton = () => (
  <div className="relative aspect-[4/3] lg:aspect-video rounded-[2.5rem] overflow-hidden border-2 border-green-100 shadow-2xl bg-slate-100 animate-pulse">
    <div className="absolute inset-0 bg-gradient-to-t from-slate-200/40 to-transparent" />
  </div>
);

export default function CityClientPage({ city, CITY_OPERATIONAL_IMAGE }) {
  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <Suspense fallback={<div className="h-96 bg-slate-100 animate-pulse" />}>
        <CityHero city={city} />
      </Suspense>

      {/* RATING & TRUST BADGE */}
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
              <span className="text-[#166534]">Terpercaya di {city.name}</span>
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

      {/* LOGISTICS ADVANTAGE - SEO FRIENDLY ANIMATION */}
      <motion.section 
        initial={{ opacity: 0.9, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="py-12 lg:py-24 px-6 border-b-2 border-green-100 bg-white"
      >
        <div className="max-w-[1800px] mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif italic font-black leading-tight uppercase text-[#052c17]">
                Kekuatan <span className="not-italic font-sans text-slate-900">Suplai</span> <br/>
                <span className="inline-block text-[#166534]">{city.name}</span>
              </h2>
            </div>

            <div className="grid gap-6">
              <div className="p-6 bg-[#f7faf7] rounded-3xl border border-green-100 shadow-sm hover:shadow-md transition-all">
                <Truck size={20} className="text-[#166534] mb-4" />
                <p className="font-black text-[10px] uppercase mb-1 tracking-[0.2em] text-[#166534]">Logistics Route</p>
                <p className="text-lg text-[#052c17] leading-relaxed font-bold">{city.deliveryRoute}</p>
              </div>
              <div className="p-6 bg-[#f7faf7] rounded-3xl border border-green-100 shadow-sm hover:shadow-md transition-all">
                <ShieldCheck size={20} className="text-[#166534] mb-4" />
                <p className="font-black text-[10px] uppercase mb-1 tracking-[0.2em] text-[#166534]">Quality Benchmark</p>
                <p className="text-lg text-[#052c17] leading-relaxed font-bold">{city.usp}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <Suspense fallback={<ImageSkeleton />}>
              <div className="relative aspect-[4/3] lg:aspect-video rounded-[2.5rem] overflow-hidden border-2 border-green-100 shadow-2xl group">
                <img
                  src={optimizeImg(CITY_OPERATIONAL_IMAGE?.url || CITY_OPERATIONAL_IMAGE, 1000)}
                  alt={`Operasional armada distribusi Green Fresh di ${city.name}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  width={1000}
                  height={750}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#052c17]/40 to-transparent" />
              </div>
            </Suspense>
          </div>
        </div>
      </motion.section>

      {/* SEKSI TARGET SEKTOR */}
      <section className="py-12 lg:py-24 bg-white border-b-2 border-green-100 text-center px-6">
        <div className="max-w-[1800px] mx-auto">
          <p className="text-xl lg:text-3xl font-serif italic text-[#052c17] mb-10 font-bold tracking-tight">
            Fokus Layanan: <span className="text-[#166534]">{city.clientFocus}</span>
          </p>
          <SectorTarget />
        </div>
      </section>

      {/* KATALOG PRODUK - HARGA REALTIME */}
      <section id="katalog" className="bg-[#fcfdfc] py-12 lg:py-24 border-b-2 border-green-200">
        <div className="max-w-[1500px] mx-auto px-6">
          <div className="mb-12 text-center">
             <h2 className="text-2xl lg:text-4xl font-serif italic font-black text-[#052c17] uppercase">
               Katalog <span className="text-[#166534]">Terupdate.</span>
             </h2>
             <p className="text-slate-500 text-xs font-bold mt-2 tracking-widest uppercase">Harga Khusus Wilayah {city.name}</p>
          </div>
          {/* PriceTable mendapatkan data sayuran harian */}
          <Suspense fallback={<div className="h-64 bg-slate-100 animate-pulse rounded-2xl" />}>
            <PriceTable data={vegetableData} showHeader={false} />
          </Suspense>
        </div>
      </section>

      {/* STATISTIK & JAMINAN KUALITAS */}
      <Suspense fallback={<div className="h-32 bg-slate-100 animate-pulse" />}>
        <LiveStats />
      </Suspense>
      
      <Suspense fallback={<div className="h-32 bg-slate-100 animate-pulse" />}>
        <QualityGuarantee />
      </Suspense>

      {/* TIMELINE & FAQ */}
      <section className="py-12 lg:py-24 bg-white border-b border-slate-100">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
          <Suspense fallback={<div className="h-64 bg-slate-100 animate-pulse rounded-2xl" />}>
            <LogisticsTimeline slug={city.slug} cityName={city.name} />
          </Suspense>
          
          <Suspense fallback={<div className="h-64 bg-slate-100 animate-pulse rounded-2xl" />}>
            <CityFAQ cityName={city.name} />
          </Suspense>
        </div>
      </section>

      {/* FORM KEMITRAAN B2B */}
      <section id="kemitraan" className="py-16 lg:py-32 bg-[#f7faf7] border-t-2 border-green-200">
        <Suspense fallback={<div className="h-96 bg-slate-100 animate-pulse rounded-3xl" />}>
          <PartnershipForm />
        </Suspense>
      </section>
    </div>
  );
}