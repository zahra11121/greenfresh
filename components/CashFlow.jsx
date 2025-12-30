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

const FINANCE_IMAGE_URL = "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=60&w=1200";

export const CashFlow = () => {
  return (
    <section id="payment" className="py-12 md:py-20 bg-white font-sans overflow-hidden border-b-2 border-green-100">
      
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        {/* HEADER: Sentence Case & Clean Scaling */}
        <div className="max-w-4xl mb-12 md:mb-16 space-y-4">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <div className="w-8 h-px bg-green-500" />
            <span className="text-[10px] font-black tracking-[0.3em] uppercase text-green-600">Financial Flexibility</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif italic text-[#052c17] leading-[1] tracking-tighter">
            Sirkulasi Kas <span className="text-green-600 not-italic font-sans font-black">Lebih Ringan.</span>
          </h2>

          <p className="text-lg lg:text-xl text-slate-400 font-light leading-relaxed max-w-2xl border-l-4 border-green-500/20 pl-6">
            Kami mendukung stabilitas operasional Anda melalui sistem pembayaran yang dapat disesuaikan dengan kebutuhan arus kas perusahaan.
          </p>
        </div>

        {/* CONTENT GRID: 12-Column Layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-stretch">
          
          {/* SISI KIRI: Brand Identity & Infrastructure */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-10">
            <div className="relative aspect-video rounded-[2rem] overflow-hidden border-2 border-green-100 shadow-2xl group">
              <img 
                src={FINANCE_IMAGE_URL} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" 
                alt="B2B Financial Support"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 via-transparent to-transparent opacity-60" />
              
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl border-2 border-green-100 shadow-xl flex items-center gap-4">
                <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center text-green-600">
                  <BadgeCheck size={20} />
                </div>
                <div>
                  <p className="text-[9px] font-black text-green-700 uppercase tracking-widest leading-none mb-1">Audit Ready</p>
                  <p className="text-sm font-bold text-[#052c17]">Standard Korporasi</p>
                </div>
              </div>
            </div>

            {/* Checklist Features: Rapat & Bersih */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              {[
                { title: 'Faktur Pajak', sub: 'PKP Ready' },
                { title: 'Invoicing', sub: 'Sistematis' },
                { title: 'Rekonsiliasi', sub: 'Transparan' }
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-center group">
                  <div className="w-8 h-8 rounded-lg bg-green-50 border border-green-100 flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all">
                    <CheckCircle2 size={14}/>
                  </div>
                  <div>
                    <h4 className="text-[#052c17] font-bold text-[11px] uppercase tracking-wider">{item.title}</h4>
                    <p className="text-slate-400 text-[10px] font-medium">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SISI KANAN: Elegant Payment Tiers (Actionable) */}
          <div className="lg:col-span-5">
            <div className="h-full bg-[#f7faf7] border-2 border-green-100 rounded-[2.5rem] p-8 md:p-10 space-y-10 shadow-sm">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <p className="text-green-600 text-[10px] font-black uppercase tracking-[0.3em]">Billing Terms</p>
                  <h3 className="text-2xl md:text-3xl font-serif italic font-black text-[#052c17]">Opsi Termin.</h3>
                </div>
                <ShieldCheck className="text-green-200" size={32} />
              </div>

              <div className="space-y-3">
                {[
                  { label: "Tunai / COD", desc: "Harian", icon: <Wallet size={18} /> },
                  { label: "Tempo 14 Hari", desc: "Reguler", icon: <CreditCard size={18} /> },
                  { label: "Tempo 30 Hari", desc: "Korporat", icon: <Landmark size={18} /> }
                ].map((item, idx) => (
                  <div 
                    key={idx}
                    className="group flex items-center justify-between p-5 bg-white border-2 border-green-50 rounded-2xl transition-all cursor-default hover:border-green-500 hover:shadow-md"
                  >
                    <div className="flex items-center gap-5">
                      <div className="p-3 bg-green-50 rounded-xl text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-[#052c17] font-bold text-sm tracking-tight">{item.label}</p>
                        <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">{item.desc}</p>
                      </div>
                    </div>
                    <ArrowRight size={16} className="text-slate-200 group-hover:text-green-600 group-hover:translate-x-1 transition-all" />
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-green-200/50">
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.3em] text-center italic">
                  *Khusus entitas bisnis resmi (B2B)
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};