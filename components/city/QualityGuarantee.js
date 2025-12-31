"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { RotateCcw, CheckSquare, BadgeCheck, Zap, ShieldCheck } from 'lucide-react';

export const QualityGuarantee = () => {
  const items = [
    { 
      icon: <RotateCcw size={22} />, 
      title: "INSTANT RETURN", 
      desc: "Kebijakan tolak & tukar barang langsung di lokasi jika kualitas tidak sesuai standar." 
    },
    { 
      icon: <CheckSquare size={22} />, 
      title: "DAILY QC", 
      desc: "Sortasi manual setiap subuh menjamin grade-A sebelum proses loading." 
    },
    { 
      icon: <BadgeCheck size={22} />, 
      title: "PRICE GUARD", 
      desc: "Stabilitas harga kontrak hingga 30 hari untuk efisiensi budget operasional." 
    },
    { 
      icon: <Zap size={22} />, 
      title: "EXPRESS LOGISTICS", 
      desc: "Armada berpendingin yang menjamin rantai dingin tidak terputus hingga dapur Anda." 
    }
  ];

  const duplicatedItems = [...items, ...items];

  return (
    <section className="py-20 bg-[#f8fafc] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 mb-12 text-center lg:text-left">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3 text-left">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 justify-start"
            >
              <span className="w-8 h-[2px] bg-[#15803d]" />
              {/* PERBAIKAN: Green-700 (#15803d) untuk kontras di atas #f8fafc */}
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#15803d]">Our Commitment</span>
            </motion.div>
            <h2 className="text-4xl lg:text-6xl font-[1000] text-[#052c17] tracking-tighter leading-none">
              {/* PERBAIKAN: Slate-400 diganti ke Slate-500 (#64748b) agar rasio kontras > 4.5:1 */}
              JAMINAN <span className="text-[#64748b]">KUALITAS.</span>
            </h2>
          </div>
          {/* PERBAIKAN: Slate-700 (#334155) sangat aman untuk WCAG AA */}
          <p className="text-[#334155] text-sm max-w-sm font-bold leading-relaxed italic text-left">
            "Nol risiko operasional bagi mitra B2B kami melalui standarisasi ketat setiap hari."
          </p>
        </div>
      </div>

      {/* INFINITE SLIDER */}
      <div className="relative flex overflow-hidden py-10">
        <motion.div 
          className="flex gap-6 pr-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            ease: "linear", 
            duration: 30, 
            repeat: Infinity 
          }}
        >
          {duplicatedItems.map((item, i) => (
            <div 
              key={i}
              className="w-[280px] lg:w-[400px] flex-shrink-0 bg-white border border-slate-200 p-8 rounded-[2rem] shadow-xl shadow-slate-200/40 group transition-all duration-500 
              max-lg:border-[#15803d] lg:hover:border-[#15803d]"
            >
              <div className="flex items-start gap-5 lg:gap-6">
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-inner
                  max-lg:bg-[#15803d] max-lg:text-white 
                  lg:bg-green-50 lg:text-[#15803d] lg:group-hover:bg-[#15803d] lg:group-hover:text-white"
                >
                  {item.icon}
                </div>

                <div className="flex-1 space-y-3">
                  <p className="text-[#052c17] font-black text-[13px] lg:text-sm tracking-widest uppercase text-left">
                    {item.title}
                  </p>
                  
                  <div className="h-1 bg-green-100 transition-all duration-500
                    max-lg:w-full max-lg:bg-[#15803d]/20
                    lg:w-8 lg:group-hover:w-full" 
                  />
                  
                  {/* PERBAIKAN: Slate-600/700 memberikan kontras tinggi di atas putih */}
                  <p className="text-[12px] leading-relaxed font-bold transition-colors text-left
                    max-lg:text-[#334155] 
                    lg:text-[#475569] lg:group-hover:text-[#1e293b]"
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="absolute inset-y-0 left-0 w-16 lg:w-32 bg-gradient-to-r from-[#f8fafc] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 lg:w-32 bg-gradient-to-l from-[#f8fafc] to-transparent z-10 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-5 mt-6 lg:mt-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex items-center gap-4 bg-white px-6 py-3 rounded-full border border-slate-200 shadow-sm"
        >
          <ShieldCheck size={18} className="text-[#15803d]" />
          <p className="text-[10px] font-black text-[#052c17] uppercase tracking-widest">
            Certified B2B Supplier Standard
          </p>
        </motion.div>
        
        {/* PERBAIKAN: Slate-500 (#64748b) untuk teks teknis agar terbaca jelas */}
        <div className="text-[9px] font-black text-[#64748b] uppercase tracking-[0.4em]">
          Automated QC System • v.2.5
        </div>
      </div>
    </section>
  );
};