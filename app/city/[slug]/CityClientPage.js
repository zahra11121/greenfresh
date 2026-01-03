'use client';

import React from 'react';
import * as motion from "framer-motion/client";
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

const optimizeImg = (url, width = 850) => {
  if (!url) return '';
  return url.replace('/upload/', `/upload/f_auto,q_auto:eco,c_scale,w_${width}/`);
};

export default function CityClientPage({ city, CITY_OPERATIONAL_IMAGE }) {
  return (
    <>
      <CityHero city={city} />

      {/* RATING BADGE */}
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

      {/* LOGISTICS ADVANTAGE - SEO OPTIMIZED (No initial opacity 0) */}
      <motion.section 
        whileInView={{ y: [20, 0], opacity: [0.9, 1] }}
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
            <div className="relative aspect-[4/3] lg:aspect-video rounded-[2.5rem] overflow-hidden border-2 border-green-100 shadow-2xl group">
              <img
                src={optimizeImg(CITY_OPERATIONAL_IMAGE, 850)}
                alt={`Operasional armada distribusi di ${city.name}`}
                className="w-full h-full object-cover transition-all duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#052c17]/40 to-transparent" />
            </div>
          </div>
        </div>
      </motion.section>

      {/* SEKSI LAYANAN */}
      <section className="py-12 lg:py-24 bg-white border-b-2 border-green-100 text-center px-6">
        <div className="max-w-[1800px] mx-auto">
          <p className="text-xl lg:text-3xl font-serif italic text-[#052c17] mb-10 font-bold tracking-tight">
            Fokus Layanan: <span className="text-[#166534]">{city.clientFocus}</span>
          </p>
          <SectorTarget />
        </div>
      </section>

      {/* KATALOG PRODUK - PENTING UNTUK INDEXING */}
      {/* PERBAIKAN: class diganti menjadi className di bawah ini */}
      <section id="katalog" className="bg-[#fcfdfc] py-12 lg:py-24 border-b-2 border-green-200">
        <div className="max-w-[1500px] mx-auto px-6">
          <div className="mb-12 text-center">
             <h2 className="text-2xl lg:text-4xl font-serif italic font-black text-[#052c17] uppercase">
               Katalog <span className="text-[#166534]">Terupdate.</span>
             </h2>
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
        <PartnershipForm />
      </section>
    </>
  );
}