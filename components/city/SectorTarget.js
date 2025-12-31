"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Leaf } from 'lucide-react';

export const SectorTarget = () => {
  // State untuk melacak kartu mana yang sedang aktif (nyala)
  const [activeIndex, setActiveIndex] = useState(null);

  const sectors = [
    { title: 'Hotels & Resorts', desc: 'Sistem suplai harian dengan standar audit pangan internasional.' },
    { title: 'Fine Dining', desc: 'Presisi sortasi tinggi untuk plating dan varietas eksotik.' },
    { title: 'Industrial Catering', desc: 'Stabilitas harga kontrak hulu ke hilir dan kapasitas tonase besar.' },
    { title: 'Modern Retail', desc: 'Standardisasi kemasan retail-ready yang higienis dan siap display.' },
  ];

  return (
    <section className="bg-[#fcfdfc] py-20 overflow-hidden">
      {/* Container: px-2 di mobile agar kartu lebih lebar ke pinggir layar */}
      <div className="max-w-7xl mx-auto px-2 md:px-5">
        
        {/* Header */}
        <div className="relative mb-16 px-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-12 h-1 bg-gradient-to-r from-[#15803d] to-[#65a30d]" />
            <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#15803d]">Market Sector</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-[1000] text-[#052c17] tracking-tighter leading-none"
          >
            SOLUSI <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#15803d] to-[#65a30d]">INDUSTRI.</span>
          </motion.h2>
        </div>

        {/* Grid: gap-2 (kecil) agar kartu di mobile terlihat lebih lebar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-0 border-slate-200 lg:border lg:rounded-3xl lg:overflow-hidden lg:bg-white lg:shadow-2xl lg:shadow-green-900/5">
          {sectors.map((sector, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                // Logic: Klik/Sentuh untuk nyala, klik lagi atau pindah untuk mati
                onClick={() => setActiveIndex(isActive ? null : index)}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                className={`group relative p-4 lg:p-10 transition-all duration-500 overflow-hidden flex flex-col justify-between h-full cursor-pointer
                  ${isActive ? 'shadow-xl translate-y-[-4px]' : 'bg-white shadow-sm'} 
                  lg:bg-transparent lg:shadow-none lg:translate-y-0 border border-green-100 lg:border-none rounded-2xl lg:rounded-none`}
              >
                {/* Background Overlay (Nyala) */}
                <div className={`absolute inset-0 bg-gradient-to-br from-[#052c17] to-[#15803d] transition-opacity duration-500 -z-10
                  ${isActive ? 'opacity-100' : 'opacity-0'}`} 
                />
                
                <div className="relative">
                  <div className="flex justify-between items-start mb-6 lg:mb-12">
                    <span className={`text-xl lg:text-2xl font-black transition-colors duration-500
                      ${isActive ? 'text-white/20' : 'text-green-200'}`}>
                      0{index + 1}
                    </span>
                    <div className={`p-2 rounded-lg transition-all duration-500
                      ${isActive ? 'bg-white/10 text-[#bef264]' : 'bg-green-100 text-green-700'}`}>
                      <Leaf size={14} fill="currentColor" className={isActive ? 'opacity-100' : 'opacity-70'} />
                    </div>
                  </div>

                  <div className="space-y-2 lg:space-y-6">
                    <h3 className={`text-[12px] lg:text-xl font-black leading-tight transition-colors duration-500
                      ${isActive ? 'text-white' : 'text-[#052c17]'}`}>
                      {sector.title.toUpperCase()}
                    </h3>
                    <p className={`text-[10px] lg:text-sm font-bold leading-snug lg:leading-relaxed transition-colors duration-500
                      ${isActive ? 'text-green-50' : 'text-slate-600'}`}>
                      {sector.desc}
                    </p>
                  </div>
                </div>

                <div className={`mt-6 pt-4 border-t flex items-center justify-between transition-colors duration-500
                  ${isActive ? 'border-white/10' : 'border-slate-100 lg:border-green-900/10'}`}>
                  <span className={`text-[8px] lg:text-[9px] font-black uppercase tracking-widest transition-colors duration-500
                    ${isActive ? 'text-[#bef264]' : 'text-[#15803d]'}`}>
                    Details
                  </span>
                  <ArrowUpRight size={14} className={`transition-all duration-500
                    ${isActive ? 'text-white translate-x-1 -translate-y-1' : 'text-slate-500'}`} 
                  />
                </div>

                {/* Vertical Divider (Desktop Only) */}
                <div className={`hidden lg:block absolute top-0 right-0 w-px h-full transition-colors
                  ${isActive ? 'bg-transparent' : 'bg-slate-100'}`} 
                />
              </motion.div>
            );
          })}
        </div>

        {/* Decorative Footer */}
        <div className="mt-12 flex items-center justify-center gap-2 px-4">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
          <div className="flex-shrink-0 px-4 py-2 border border-slate-200 rounded-full bg-white text-[8px] md:text-[9px] font-black text-slate-600 uppercase tracking-[0.2em] text-center">
            B2B Supply Chain Authority
          </div>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        </div>
      </div>
    </section>
  );
};