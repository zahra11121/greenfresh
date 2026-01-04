import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Truck, Globe, CheckCircle2 } from 'lucide-react';
import districtsData from '@/data/districts.json';

// IMPORT CLIENT COMPONENT UNTUK PAGINATION
import DistrictGrid from './DistrictGrid';

// --- TAMBAHKAN BARIS INI ---
// Memastikan halaman daftar ini juga bersifat dinamis 
// agar sinkron dengan halaman detail yang menggunakan SSR.
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const runtime = 'edge';
// ---------------------------

export const metadata = {
  title: 'Jaringan Operasional & Wilayah Distribusi - Green Fresh',
  description: 'Jelajahi cakupan distribusi Green Fresh. Kami melayani berbagai wilayah dengan sistem pengiriman terjadwal.',
};

const AreaHero = () => (
  <section className="pt-24 md:pt-32 pb-12 md:pb-16 bg-gradient-to-b from-green-50 to-white overflow-hidden">
    <div className="max-w-[1800px] mx-auto px-4 md:px-8">
      <div className="flex flex-col items-center text-center space-y-4 md:space-y-5">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-green-200 rounded-full shadow-sm">
          <Globe size={12} className="text-[#15803d]" />
          <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-[#15803d]">Supply Chain Network</span>
        </div>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-[1000] text-[#052c17] tracking-tighter leading-tight">
          Jaringan <span className="text-[#15803d]">Distribusi.</span>
        </h1>
        <p className="text-slate-600 max-w-xl text-sm md:text-base lg:text-lg font-medium leading-relaxed px-4">
          Menghubungkan hasil tani Cipanas ke berbagai titik strategis. Pilih wilayah Anda untuk detail operasional khusus.
        </p>
      </div>
    </div>
  </section>
);

export default function AreaPage() {
  const allDistricts = districtsData.districts;

  return (
    <div className="bg-white text-[#052c17] font-sans antialiased overflow-x-hidden w-full">
      <Header />
      
      <main className="w-full overflow-hidden">
        <AreaHero />

        {/* Info Stats */}
        <section className="py-8 md:py-10 border-y border-slate-100 bg-white">
          <div className="max-w-[1800px] mx-auto px-4 md:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                { label: 'Wilayah', val: allDistricts.length + '+' },
                { label: 'SLA', val: '99.2%' },
                { label: 'Armada', val: 'Dedicated' },
                { label: 'Grade', val: 'A+' },
              ].map((stat, i) => (
                <div key={i} className="text-left border-l-2 border-green-100 pl-4 md:pl-6">
                  <p className="text-[8px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
                  <p className="text-xl md:text-2xl lg:text-3xl font-black text-[#052c17] leading-none">{stat.val}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CLIENT COMPONENT GRID DENGAN PAGINATION */}
        {/* Pastikan di dalam DistrictGrid.js, Link sudah menggunakan prefetch={false} */}
        <DistrictGrid districts={allDistricts} />

        {/* Quality Banner */}
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-[1800px] mx-auto px-4 md:px-8">
            <div className="bg-[#052c17] rounded-2xl md:rounded-[3rem] p-6 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-green-800/20 to-transparent" />
               <div className="relative z-10 max-w-2xl text-center md:text-left">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white leading-tight tracking-tighter">
                    Standar <span className="text-green-400 italic">Fresh Logistics.</span>
                  </h2>
                  <p className="text-green-100/70 mt-3 md:mt-4 text-xs md:text-base lg:text-lg">
                    Ke mana pun tujuannya, protokol penanganan tetap sama: Sortasi ketat Cipanas dan armada terjadwal harian.
                  </p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-6">
                    {['SLA 99%', 'Daily Dispatch'].map((item, i) => (
                      <div key={i} className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-lg text-white text-[8px] md:text-[10px] font-bold uppercase tracking-widest border border-white/10">
                        <CheckCircle2 size={10} className="text-green-400" /> {item}
                      </div>
                    ))}
                  </div>
               </div>
               <div className="relative z-10 hidden lg:block">
                  <div className="w-32 h-32 bg-green-500/20 rounded-full flex items-center justify-center border border-green-500/30">
                    <Truck size={48} className="text-green-400" />
                  </div>
               </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}