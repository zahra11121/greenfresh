"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { 
  Users, Factory, ShieldCheck, 
  MapPin, Award, ArrowRight, 
  CheckCircle2, Building2, Truck 
} from 'lucide-react';

export default function ProfilePage() {
  const stats = [
    { label: "Petani Mitra", value: "200+", icon: <Users size={20} /> },
    { label: "Kapasitas Harian", value: "10 Ton", icon: <Truck size={20} /> },
    { label: "Titik Distribusi", value: "Jabodetabek", icon: <MapPin size={20} /> },
    { label: "SLA Fulfillment", value: "100%", icon: <ShieldCheck size={20} /> },
  ];

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-[#16a34a] selection:text-white">
      <Header />

      <main className="pt-32 lg:pt-48">
        {/* 1. HERO PROFILE: THE VISION */}
        <section className="px-6 lg:px-20 mb-32">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-7 space-y-8">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-3 px-4 py-2 bg-green-50 rounded-full text-[#16a34a] text-[10px] font-black uppercase tracking-[0.3em]"
                >
                  <Building2 size={14} /> Corporate Profile
                </motion.div>
                
                <h1 className="text-6xl lg:text-[7rem] font-serif italic font-black text-[#052c17] leading-[0.85] tracking-tighter">
                  Otoritas <br /> <span className="text-[#16a34a]">Suplai Cipanas.</span>
                </h1>
                
                <p className="text-xl lg:text-3xl text-slate-500 font-light leading-relaxed max-w-2xl italic">
                  "Menghubungkan stabilitas retail modern dengan ekosistem agrikultur dataran tinggi melalui presisi logistik fajar."
                </p>
              </div>
              
              <div className="lg:col-span-5">
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, i) => (
                    <div key={i} className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:border-[#16a34a] transition-all group">
                      <div className="text-[#16a34a] mb-4 group-hover:scale-110 transition-transform">{stat.icon}</div>
                      <h3 className="text-3xl font-serif italic font-black text-[#052c17]">{stat.value}</h3>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. CORE VALUES: THE CORPORATE IDENTITY */}
        <section className="py-32 bg-[#052c17] rounded-[4rem] lg:rounded-[6rem] mx-4 lg:mx-10 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#16a34a] rounded-full blur-[180px] opacity-10 -mr-64 -mt-64" />
          
          <div className="max-w-[1400px] mx-auto px-6 lg:px-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-20">
              <div className="space-y-10">
                <h2 className="text-4xl lg:text-6xl font-serif italic font-black text-white leading-tight">
                  Mengapa Korporat <br /> <span className="text-[#84cc16]">Memilih Kami?</span>
                </h2>
                <div className="space-y-6">
                  {[
                    "Kemitraan langsung dengan 200+ petani tanpa makelar.",
                    "Standar sortasi ketat (Grade A) sesuai spesifikasi Horeka.",
                    "Skema pembayaran Term of Payment (TOP) fleksibel.",
                    "Legalitas lengkap (CV, NPWP PKP, Izin Usaha Agrikultur)."
                  ].map((list, i) => (
                    <div key={i} className="flex items-center gap-4 text-white/80 group">
                      <div className="w-6 h-6 rounded-full border border-[#84cc16] flex items-center justify-center group-hover:bg-[#84cc16] transition-colors">
                        <CheckCircle2 size={12} className="text-[#84cc16] group-hover:text-[#052c17]" />
                      </div>
                      <span className="text-lg font-light tracking-wide">{list}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 lg:p-16 rounded-[4rem] space-y-8">
                <h4 className="text-[#84cc16] font-black uppercase tracking-[0.3em] text-xs">Visi Kami</h4>
                <p className="text-2xl lg:text-4xl font-serif italic text-white leading-relaxed">
                  "Menjadi tulang punggung ketahanan pangan retail modern dengan memuliakan martabat petani lokal."
                </p>
                <div className="pt-6">
                  <p className="text-white/40 text-xs uppercase font-black tracking-widest leading-relaxed">
                    CV. Green Fresh Cipanas <br /> Established 2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. LOGISTIC STRENGTH (IMAGE & TEXT) */}
        <section className="py-40 px-6 lg:px-20">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-20">
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-[4rem] overflow-hidden shadow-2xl aspect-square lg:aspect-video">
                  <img 
                    src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=2000" 
                    alt="Infrastruktur Logistik" 
                    className="w-full h-full object-cover grayscale-[0.2]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#052c17]/60 to-transparent" />
                </div>
              </div>
              <div className="w-full lg:w-1/2 space-y-8">
                <h3 className="text-4xl lg:text-6xl font-serif italic font-black text-[#052c17]">Infrastruktur <br /> Logistik Mandiri.</h3>
                <p className="text-xl text-slate-500 font-light leading-relaxed">
                  Kami mengelola armada distribusi secara mandiri untuk memastikan jadwal pengiriman fajar (sebelum jam 07:00 pagi) terpenuhi secara konsisten di seluruh wilayah Jabodetabek.
                </p>
                <div className="p-8 bg-green-50 rounded-3xl border border-green-100 italic font-serif text-[#16a34a] text-lg">
                  "Kontrol penuh atas rantai pasok dingin, meminimalkan penyusutan (waste) di sisi klien."
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. FINAL CTA */}
        <section className="pb-40 px-6">
          <div className="max-w-[1000px] mx-auto bg-slate-50 rounded-[3rem] lg:rounded-[5rem] p-12 lg:p-32 text-center space-y-10 border border-slate-100">
            <h2 className="text-4xl lg:text-7xl font-serif italic font-black text-[#052c17] leading-none">
              Siap Memulai <br /> <span className="text-[#16a34a]">Kemitraan?</span>
            </h2>
            <p className="text-lg lg:text-xl text-slate-400 max-w-xl mx-auto font-medium">
              Dapatkan katalog harga khusus B2B dan skema kontrak yang dirancang untuk efisiensi bisnis Anda.
            </p>
            <button className="px-12 py-6 bg-[#052c17] text-[#84cc16] rounded-2xl font-black uppercase tracking-[0.3em] text-xs hover:bg-[#16a34a] hover:text-white transition-all shadow-2xl">
              Minta Company Profile PDF
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}