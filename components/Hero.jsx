"use client";
import { motion } from 'framer-motion';
import { ArrowUpRight, Truck, PackageCheck, ShieldCheck } from 'lucide-react';
import { galleryData } from '@/data/galleryData';

/**
 * OPTIMASI CLOUDINARY
 */
const optimizeHeroImg = (url, width) => {
  if (!url) return '';
  return url.replace('/upload/', `/upload/f_auto,q_70,w_${width}/`);
};

const HERO_IMAGE_SOURCE = galleryData.images[0];

export const Hero = () => (
  // Padding disesuaikan, latar belakang putih bersih dengan pembatas hijau berani
  <section className="relative bg-white pt-24 lg:pt-32 pb-12 lg:pb-20 overflow-hidden z-0 font-sans border-b-2 border-green-100">
    
    {/* Background Decorative Elements */}
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-50/50 rounded-full blur-[120px] -z-10 opacity-60 translate-x-1/4 -translate-y-1/4" />
    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-slate-50 rounded-full blur-[100px] -z-10 opacity-80" />

    {/* Kontainer Luas Ultra-Wide */}
    <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
        
        {/* SISI KIRI: CONTENT BLOCK */}
        <div className="w-full lg:w-3/5 relative order-2 lg:order-1">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-6 justify-center lg:justify-start"
          >
            <span className="h-[2px] w-12 bg-green-500" />
            <span className="text-[11px] font-black tracking-[0.3em] uppercase text-green-600">Premium B2B Supply</span>
          </motion.div>

          {/* TIPOGRAFI: Menambahkan keyword, ukuran font dikontrol (max text-7xl/8xl) agar tidak "penuh" */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif italic font-black leading-[1] tracking-tighter text-[#052c17] mb-8 text-center lg:text-left uppercase"
          >
            SUPPLIER <span className="text-green-600 not-italic font-sans">SAYUR</span> <br className="hidden lg:block" /> 
            SUPER CIPANAS.
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.4 }}
            className="space-y-8 text-center lg:text-left"
          >
            {/* Deskripsi dengan Border L-4 Hijau Daun */}
            <p className="text-lg lg:text-2xl text-slate-400 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0 border-l-4 border-green-500/20 pl-6 lg:pl-8">
              Green Fresh Cipanas menghadirkan standardisasi kualitas grade-A untuk mitra <strong>Horeka & Retail</strong> dengan sistem suplai harian yang terukur.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a href="#kemitraan" className="block w-full sm:w-auto">
                <button className="w-full bg-[#052c17] text-[#84cc16] px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-2xl hover:bg-green-600 hover:text-white transition-all flex items-center justify-center gap-3 group">
                  AJUKAN INQUIRY
                  <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform" />
                </button>
              </a>

              <a href="#katalog" className="block w-full sm:w-auto">
                <button className="w-full bg-white text-[#052c17] border-2 border-green-100 px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:border-green-500 transition-all">
                  Cek Harga Katalog
                </button>
              </a>
            </div>

            {/* Micro Features Status */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 pt-8">
              <div className="flex items-center gap-3">
                <ShieldCheck size={20} className="text-green-600"/>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#052c17]">Quality Sorting</span>
              </div>
              <div className="flex items-center gap-3">
                <PackageCheck size={20} className="text-green-600"/>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#052c17]">Stok Stabil B2B</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* SISI KANAN: VISUAL PRESTIGE */}
        <div className="w-full lg:w-2/5 relative order-1 lg:order-2">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            {/* Container Foto dengan Border Hijau Tegas */}
            <div className="relative rounded-[3rem] lg:rounded-[4rem] overflow-hidden border-2 border-green-100 shadow-2xl aspect-[4/5] bg-slate-100 group">
              <img 
                src={optimizeHeroImg(HERO_IMAGE_SOURCE, 1000)} 
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" 
                alt="Green Fresh Supplier Sayur Cipanas"
                fetchPriority="high"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 via-transparent to-transparent" />
            </div>

            {/* Floating Badge Logistik */}
            <motion.div 
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-4 md:-left-12 z-30 bg-white p-5 lg:p-7 rounded-[2rem] shadow-2xl border-2 border-green-100 flex items-center gap-4"
            >
              <div className="bg-green-50 p-3 rounded-2xl text-green-600">
                <Truck size={24} />
              </div>
              <div className="font-bold text-[#052c17]">
                <p className="text-sm lg:text-base leading-none mb-1">Logistik Harian</p>
                <p className="text-[9px] uppercase opacity-40 tracking-[0.2em] font-black">Ready Area Jabodetabek</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </div>
  </section>
);