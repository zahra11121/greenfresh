"use client";
import { motion } from 'framer-motion';
import { ArrowUpRight, Truck, PackageCheck, ShieldCheck } from 'lucide-react';
import { galleryData } from '@/data/galleryData';

/**
 * OPTIMASI CLOUDINARY
 */
const optimizeHeroImg = (url, width) => {
  return url.replace('/upload/', `/upload/f_auto,q_70,w_${width}/`);
};

const HERO_IMAGE_SOURCE = galleryData.images[0];

export const Hero = () => (
  <section className="relative bg-[#fcfcfc] pt-24 lg:pt-44 pb-12 lg:pb-32 overflow-hidden z-0 font-sans">
    
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-[0.02] pointer-events-none -z-10" 
         style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23052c17' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} 
    />

    <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
        
        {/* SISI KIRI: CONTENT BLOCK */}
        <div className="w-full lg:w-3/5 relative order-2 lg:order-1">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-4 justify-center lg:justify-start"
          >
            <span className="h-[1px] w-8 bg-[#16a34a]" />
            <span className="text-[10px] font-black tracking-[0.2em] uppercase text-[#16a34a]">High-End Retail & Hotel Supply</span>
          </motion.div>

          {/* UKURAN H1 DIPERBAIKI: Lebih Seimbang & Profesional */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight lg:leading-[1.1] tracking-tight text-[#052c17] mb-6 text-center lg:text-left uppercase font-bold"
          >
            SUPPLIER <span className="text-[#16a34a] italic font-normal">SAYUR SUPER</span> <br className="hidden lg:block" /> 
            CIPANAS TERPERCAYA.
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.4 }}
            className="space-y-6 text-center lg:text-left"
          >
            <p className="text-sm lg:text-lg text-slate-500 leading-relaxed font-light max-w-xl mx-auto lg:mx-0">
              Green Fresh Cipanas menghadirkan <strong>standardisasi sayur kualitas super</strong> untuk industri Horeka dan Modern Retail dengan jaminan konsistensi stok.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <a href="#kemitraan" className="block w-full sm:w-auto">
                <button className="w-full bg-[#16a34a] text-white px-8 py-4 rounded-full font-bold text-[10px] uppercase tracking-widest shadow-xl hover:bg-[#052c17] transition-all flex items-center justify-center gap-3 group">
                  REQUEST PENAWARAN
                  <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform" />
                </button>
              </a>

              <a href="#katalog" className="block w-full sm:w-auto">
                <button className="w-full bg-white text-[#052c17] border border-slate-200 px-8 py-4 rounded-full font-bold text-[10px] uppercase tracking-widest hover:border-[#16a34a] transition-all">
                  Lihat Katalog
                </button>
              </a>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-6">
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-[#16a34a]"/>
                <span className="text-[9px] font-bold uppercase tracking-wider text-[#052c17]/60">Hotel & Retail Specs</span>
              </div>
              <div className="flex items-center gap-2">
                <PackageCheck size={18} className="text-[#16a34a]"/>
                <span className="text-[9px] font-bold uppercase tracking-wider text-[#052c17]/60">Strict Sorting</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* SISI KANAN: VISUAL PRESTIGE */}
        <div className="w-full lg:w-2/5 relative order-1 lg:order-2">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/5] bg-slate-200">
              <img 
                src={optimizeHeroImg(HERO_IMAGE_SOURCE, 800)} 
                className="w-full h-full object-cover" 
                alt="Standard Sayur Super Green Fresh"
                fetchPriority="high"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#052c17]/30 via-transparent to-transparent" />
            </div>

            {/* Badge Logistik Lebih Kecil & Pas */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 z-30 bg-white p-4 rounded-2xl shadow-xl border border-slate-50 flex items-center gap-3 scale-90 md:scale-100"
            >
              <div className="bg-green-100 p-2 rounded-xl text-[#16a34a]"><Truck size={20} /></div>
              <div className="font-bold text-[#052c17] pr-2">
                <p className="text-xs leading-none mb-1">B2B Logistic</p>
                <p className="text-[8px] uppercase opacity-40 tracking-widest font-black">Ready Jabodetabek</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </div>
  </section>
);