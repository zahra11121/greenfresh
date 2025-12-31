"use client"; // WAJIB: Agar Framer Motion bisa berjalan di Client Side

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Leaf } from 'lucide-react';

export const SectorTarget = () => {
  const sectors = [
    { title: 'Hotels & Resorts', desc: 'Sistem suplai harian dengan standar audit pangan internasional.' },
    { title: 'Fine Dining', desc: 'Presisi sortasi tinggi untuk plating dan varietas eksotik.' },
    { title: 'Industrial Catering', desc: 'Stabilitas harga kontrak hulu ke hilir dan kapasitas tonase besar.' },
    { title: 'Modern Retail', desc: 'Standardisasi kemasan retail-ready yang higienis dan siap display.' },
  ];

  return (
    <section className="bg-[#fcfdfc] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5">
        
        {/* Header dengan Aksen Gradasi */}
        <div className="relative mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-12 h-1 bg-gradient-to-r from-[#16a34a] to-[#84cc16]" />
            <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#16a34a]">Market Sector</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-[1000] text-[#052c17] tracking-tighter leading-none"
          >
            SOLUSI <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16a34a] to-[#84cc16]">INDUSTRI.</span>
          </motion.h2>
        </div>

        {/* Grid: 2 Columns Mobile, 4 Columns Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 border-slate-100 lg:border lg:rounded-3xl lg:overflow-hidden lg:bg-white lg:shadow-2xl lg:shadow-green-900/5">
          {sectors.map((sector, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-6 lg:p-10 bg-white lg:bg-transparent border lg:border-none border-green-50 rounded-2xl lg:rounded-none flex flex-col justify-between h-full transition-all duration-500 overflow-hidden shadow-sm lg:shadow-none"
            >
              {/* Background Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#052c17] to-[#15803d] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              
              <div className="relative">
                <div className="flex justify-between items-start mb-8 lg:mb-12">
                  <span className="text-2xl font-black text-green-100 group-hover:text-white/20 transition-colors">
                    0{index + 1}
                  </span>
                  <div className="p-2 rounded-lg bg-green-50 group-hover:bg-white/10 text-[#16a34a] group-hover:text-[#84cc16] transition-all">
                    <Leaf size={16} fill="currentColor" className="opacity-50" />
                  </div>
                </div>

                <div className="space-y-3 lg:space-y-6">
                  <h3 className="text-sm lg:text-xl font-black text-[#052c17] group-hover:text-white leading-tight transition-colors">
                    {sector.title.toUpperCase()}
                  </h3>
                  <p className="text-[10px] lg:text-sm text-slate-500 group-hover:text-green-50/80 font-bold leading-relaxed transition-colors">
                    {sector.desc}
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-50 lg:border-green-900/10 flex items-center justify-between">
                <span className="text-[9px] font-black uppercase tracking-widest text-[#16a34a] group-hover:text-[#84cc16]">
                  Details
                </span>
                <ArrowUpRight size={16} className="text-slate-300 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>

              <div className="hidden lg:block absolute top-0 right-0 w-px h-full bg-slate-100 group-hover:bg-transparent transition-colors" />
            </motion.div>
          ))}
        </div>

        {/* Floating Decorative Bar */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
          <div className="flex-shrink-0 px-6 py-2 border border-slate-100 rounded-full bg-white shadow-sm text-[9px] font-black text-slate-400 uppercase tracking-[0.3em]">
            B2B Supply Chain Authority
          </div>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        </div>
      </div>
    </section>
  );
};