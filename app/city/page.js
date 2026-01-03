import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ChevronRight, Navigation, Star, MapPin, Truck, CheckCircle2, Search } from 'lucide-react';
import Link from 'next/link';
import { jabodetabekCities } from '@/data/cities';

export const metadata = {
  title: 'Network Distribusi Jabodetabek - Green Fresh Supplier',
  description: 'Jaringan distribusi sayur segar harian Green Fresh di 27 wilayah strategis Jabodetabek dengan sistem pengiriman terintegrasi.',
};

/**
 * COMPONENT: STATS CARD
 */
const StatItem = ({ label, value }) => (
  <div className="bg-white p-4 md:p-6 rounded-2xl border border-slate-100 shadow-sm">
    <p className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-widest mb-1">{label}</p>
    <p className="text-xl md:text-3xl font-black text-[#052c17]">{value}</p>
  </div>
);

/**
 * COMPONENT: CITY CARD (Desain Baru Tanpa Gambar)
 */
function CityCard({ city, index }) {
  // Logika warna zona berdasarkan nama (hanya contoh visual)
  const isJakarta = city.name.toLowerCase().includes('jakarta');
  const zoneColor = isJakarta ? 'bg-green-600' : 'bg-emerald-500';

  return (
    <a 
      href={`/city/${city.slug}/`}
      className="group bg-white rounded-3xl border border-slate-200 p-5 md:p-7 hover:border-green-500 hover:shadow-xl hover:shadow-green-900/5 transition-all duration-300 flex flex-col justify-between min-h-[220px] relative overflow-hidden"
    >
      {/* Dekorasi Background Halus */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-slate-50 rounded-full group-hover:bg-green-50 transition-colors duration-500" />
      
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-6">
          <div className={`${zoneColor} p-2.5 rounded-2xl text-white shadow-lg shadow-green-900/20`}>
            <MapPin size={20} />
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-100 rounded-full text-[9px] font-black text-slate-500 tracking-tighter uppercase">
             Hub ID: {index + 700}
          </div>
        </div>
        
        <h3 className="text-xl md:text-2xl font-black text-[#052c17] leading-tight mb-2 group-hover:text-green-700 transition-colors">
          {city.name}
        </h3>
        
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
            Distribution Active
          </p>
        </div>
      </div>

      <div className="relative z-10 mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
        <span className="text-[10px] font-black text-green-700 uppercase tracking-widest flex items-center gap-1">
          Buka Katalog <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </span>
        <div className="flex -space-x-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center">
               <Star size={8} className="text-slate-400" />
            </div>
          ))}
        </div>
      </div>
    </a>
  );
}

export default function SupplierSayurPage() {
  return (
    <div className="bg-[#fcfdfc] text-[#052c17] font-sans antialiased w-full">
      <Header />
      
      <main className="pt-20">
        {/* HERO SECTION */}
        <section className="py-16 md:py-28 bg-white border-b border-slate-100">
          <div className="max-w-[1400px] mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-50 rounded-full mb-6 border border-green-100">
               <Truck size={14} className="text-green-700" />
               <span className="text-[11px] font-black text-green-700 uppercase tracking-widest">Integrated Logistics Network</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-[1000] text-[#052c17] tracking-tight leading-[0.9] mb-8">
              Jaringan Suplai <br/> <span className="text-green-600">Terluas.</span>
            </h1>
            <p className="text-slate-500 max-w-2xl mx-auto text-base md:text-lg font-medium leading-relaxed mb-12">
              Kami melayani pengiriman sayuran Grade-A ke {jabodetabekCities.length} titik distribusi utama di seluruh Jabodetabek setiap harinya.
            </p>
            
            {/* Quick Stats Dashboard */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <StatItem label="Active Nodes" value={jabodetabekCities.length} />
              <StatItem label="Daily Capacity" value="12.5 T" />
              <StatItem label="Fleet Units" value="48+" />
              <StatItem label="SLA Success" value="99.9%" />
            </div>
          </div>
        </section>

        {/* SEARCH & FILTER AREA (Placeholder Desain) */}
        <div className="max-w-[1400px] mx-auto px-4 -mt-8 relative z-20">
          <div className="bg-white p-4 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1 w-full relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Cari wilayah layanan (Contoh: Bintaro, Jakarta Selatan...)" 
                className="w-full pl-12 pr-4 py-3 bg-slate-50 rounded-2xl border-none text-sm focus:ring-2 focus:ring-green-500 transition-all"
              />
            </div>
            <button className="w-full md:w-auto px-8 py-3 bg-[#052c17] text-white font-black text-sm rounded-2xl hover:bg-green-800 transition-colors">
              FILTER AREA
            </button>
          </div>
        </div>

        {/* GRID AREA SECTION */}
        <section className="py-16 md:py-24">
          <div className="max-w-[1400px] mx-auto px-4">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-2xl font-black tracking-tight text-[#052c17]">Semua Wilayah</h2>
                <p className="text-sm text-slate-400 font-medium">Klik pada wilayah untuk melihat detail suplai dan jadwal pengiriman.</p>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Sistem Online</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {jabodetabekCities.map((city, index) => (
                <CityCard key={index} city={city} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* TRUST BANNER */}
        <section className="py-12 bg-white border-y border-slate-100 mb-20">
           <div className="max-w-[1400px] mx-auto px-4 flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-40 grayscale">
              <h4 className="font-black text-xl italic tracking-tighter">HORECA READY</h4>
              <h4 className="font-black text-xl italic tracking-tighter">FARM DIRECT</h4>
              <h4 className="font-black text-xl italic tracking-tighter">DAILY LOGISTICS</h4>
              <h4 className="font-black text-xl italic tracking-tighter">GRADE-A QUALITY</h4>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}