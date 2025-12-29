"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Wallet, 
  CreditCard, 
  Landmark, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Zap,
  BadgeCheck
} from 'lucide-react';

/**
 * OPTIMASI GAMBAR:
 * - auto=format: Mengonversi ke WebP secara otomatis.
 * - q=60: Kompresi kualitas optimal untuk performa.
 * - w=1000: Menyesuaikan dimensi dengan lebar grid agar file tidak terlalu berat.
 */
const FINANCE_IMAGE_URL = "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=60&w=1000";

export const CashFlow = () => {
  return (
    <section id="payment" className="py-12 lg:py-20 bg-[#f8fafc] px-6 lg:px-12 relative overflow-hidden font-sans">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-200 rounded-full blur-[150px] opacity-20 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-20">
        <div className="flex flex-col gap-10 lg:gap-14">
          
          {/* TOP CONTENT */}
          <div className="w-full space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full text-[#16a34a] text-[10px] font-black uppercase tracking-[0.2em]">
              <Zap size={14} className="fill-[#16a34a]" /> Financial Flexibility
            </div>
            
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif italic text-[#052c17] leading-tight tracking-tighter">
              Kelola <span className="text-[#16a34a]">Arus Kas Bisnis.</span>
            </h2>
            
            <p className="text-base lg:text-xl text-slate-700 font-medium leading-relaxed max-w-3xl mx-auto lg:mx-0 border-l-4 border-[#16a34a] pl-8">
              Kami mendukung akselerasi bisnis Anda melalui skema <span className="text-[#16a34a] font-bold">Term of Payment</span> yang fleksibel, dirancang khusus untuk menjaga stabilitas operasional retail dan korporat.
            </p>
          </div>

          {/* BOTTOM CONTENT: GRID LAYOUT */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            
            {/* AREA KIRI: FEATURE BOX + GAMBAR OPERASIONAL */}
            <div className="lg:col-span-7 flex flex-col gap-8">
              {/* Feature Pills */}
              <div className="flex flex-wrap gap-4 lg:gap-6">
                {[
                  { text: 'Official Invoicing', icon: <CheckCircle2 size={16} /> },
                  { text: 'Tax Compliant (PKP)', icon: <ShieldCheck size={16} /> },
                  { text: 'Flexible Net-Terms', icon: <Landmark size={16} /> }
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-[#052c17] font-black text-[10px] uppercase tracking-widest bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100">
                    <span className="text-[#16a34a]">{feature.icon}</span> 
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* GAMBAR OPERASIONAL DENGAN OPTIMASI */}
              <div className="relative flex-grow min-h-[350px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white group bg-slate-200">
                <img 
                  src={FINANCE_IMAGE_URL} 
                  alt="Financial Management Green Fresh Cipanas"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                {/* Overlay Gradasi */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#052c17]/80 via-[#052c17]/20 to-transparent" />
                
                {/* Floating Info on Image */}
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-[#84cc16] flex items-center justify-center text-[#052c17]">
                      <BadgeCheck size={20} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest">B2B Standard</span>
                  </div>
                  <h4 className="text-2xl font-serif italic mb-2">Transparansi Finansial.</h4>
                  <p className="text-sm opacity-80 font-light max-w-sm">Setiap transaksi didukung dokumentasi legal yang lengkap untuk kebutuhan audit dan laporan pajak perusahaan Anda.</p>
                </div>
              </div>
            </div>

            {/* AREA KANAN: KARTU PAYMENT TERMS */}
            <div className="lg:col-span-5 w-full">
              <div className="bg-white h-full rounded-[2.5rem] p-8 lg:p-10 shadow-xl border border-slate-200 relative overflow-hidden flex flex-col justify-between">
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-6">
                    <h4 className="text-[#052c17] font-serif italic text-xl font-bold">Payment Terms</h4>
                    <div className="p-2 bg-green-50 rounded-lg">
                      <ShieldCheck className="text-[#16a34a]" size={20} />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {[
                      { label: "Cash on Delivery", desc: "Suplai Harian & Uji Coba", icon: <Wallet size={18} /> },
                      { label: "Termin 14 Hari", desc: "Berlaku Bagi Mitra Rutin", icon: <CreditCard size={18} /> },
                      { label: "Termin 30 Hari", desc: "Khusus Kontrak Korporat", icon: <Landmark size={18} /> }
                    ].map((item, idx) => (
                      <div 
                        key={idx}
                        className="group flex items-center justify-between p-4 bg-slate-50 hover:bg-[#16a34a] rounded-2xl transition-all duration-300 border border-slate-100 hover:border-[#16a34a]"
                      >
                        <div className="flex items-center gap-4">
                          <div className="text-[#16a34a] bg-white p-2.5 rounded-xl group-hover:bg-white/20 group-hover:text-white transition-colors">
                            {item.icon}
                          </div>
                          <div>
                            <p className="text-[#052c17] group-hover:text-white font-black text-[11px] uppercase tracking-wider leading-none mb-1">
                              {item.label}
                            </p>
                            <p className="text-[9px] text-slate-500 group-hover:text-white/80 font-medium">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                        <ArrowRight size={14} className="text-slate-300 group-hover:text-white transition-all" />
                      </div>
                    ))}
                  </div>
                  
                  <p className="text-[9px] text-center text-slate-400 uppercase font-black tracking-[0.2em] pt-2">
                    Verified B2B Transaction Protocol
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};