import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Truck, Globe, CheckCircle2 } from 'lucide-react';
import districtsData from '@/data/districts.json';

// IMPORT CLIENT COMPONENT UNTUK PAGINATION
import DistrictGrid from './DistrictGrid';

// --- KONFIGURASI STABILITAS & SEO ---
// Menggunakan Node.js runtime (default) untuk menghindari masalah _rsc 404 pada Edge
export const dynamic = 'force-static'; 
export const revalidate = 3600; // ISR: Update data setiap jam

export const metadata = {
  title: 'Jaringan Operasional & Wilayah Distribusi - Green Fresh',
  description: 'Jelajahi cakupan distribusi Green Fresh. Kami melayani berbagai wilayah dengan sistem pengiriman terjadwal harian.',
  alternates: {
    canonical: 'https://greenfresh.co.id/area'
  },
  robots: {
    index: true,
    follow: true,
  }
};

const AreaHero = () => (
  <section className="pt-24 md:pt-32 pb-12 md:pb-16 bg-gradient-to-b from-green-50 to-white overflow-hidden">
    <div className="max-w-[1800px] mx-auto px-4 md:px-8">
      <div className="flex flex-col items-center text-center space-y-4 md:space-y-5">
        {/* PERBAIKAN KONTRAS: Menggunakan bg-green-100 dan text-green-900 agar kontras tinggi */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 border border-green-200 rounded-full shadow-sm">
          <Globe size={14} className="text-[#064e3b]" />
          <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-[#064e3b]">Supply Chain Network</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-[1000] text-[#052c17] tracking-tighter leading-tight">
          Jaringan <span className="text-[#15803d]">Distribusi.</span>
        </h1>
        {/* PERBAIKAN KONTRAS: text-slate-700 lebih gelap dibanding slate-600 */}
        <p className="text-slate-700 max-w-xl text-sm md:text-base lg:text-lg font-bold leading-relaxed px-4">
          Menghubungkan hasil tani Cipanas ke berbagai titik strategis Jabodetabek. Pilih wilayah Anda untuk detail operasional khusus.
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
                { label: 'Wilayah Tercover', val: allDistricts.length + '+' },
                { label: 'SLA Pengiriman', val: '99.2%' },
                { label: 'Tipe Armada', val: 'Dedicated' },
                { label: 'Standard QC', val: 'Grade A+' },
              ].map((stat, i) => (
                <div key={i} className="text-left border-l-2 border-green-200 pl-4 md:pl-6">
                  {/* PERBAIKAN KONTRAS: text-slate-500 lebih terbaca dibanding slate-400 */}
                  <p className="text-[10px] md:text-[11px] font-black text-slate-500 uppercase tracking-widest mb-1">{stat.label}</p>
                  <p className="text-xl md:text-2xl lg:text-3xl font-[1000] text-[#052c17] leading-none">{stat.val}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CLIENT COMPONENT GRID DENGAN PAGINATION */}
        <DistrictGrid districts={allDistricts} />

        {/* Quality Banner */}
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-[1800px] mx-auto px-4 md:px-8">
            <div className="bg-[#052c17] rounded-2xl md:rounded-[3rem] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-green-800/20 to-transparent" />
               <div className="relative z-10 max-w-2xl text-center md:text-left">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tighter">
                    Standar <span className="text-green-400 italic">Fresh Logistics.</span>
                  </h2>
                  {/* PERBAIKAN KONTRAS: text-green-50 lebih cerah agar kontras di bg gelap */}
                  <p className="text-green-50 mt-4 md:mt-5 text-sm md:text-lg lg:text-xl font-medium opacity-90">
                    Ke mana pun tujuannya, protokol penanganan tetap sama: Sortasi ketat Cipanas dan armada terjadwal harian untuk menjaga kesegaran.
                  </p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-8">
                    {['SLA 99%', 'Daily Dispatch', 'Cold Chain Ready'].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-xl text-white text-[10px] md:text-xs font-black uppercase tracking-widest border border-white/20">
                        <CheckCircle2 size={14} className="text-green-400" /> {item}
                      </div>
                    ))}
                  </div>
               </div>
               <div className="relative z-10 hidden lg:block">
                  <div className="w-40 h-40 bg-green-500/10 rounded-full flex items-center justify-center border border-green-500/30">
                    <Truck size={64} className="text-green-400" />
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