"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { HeartHandshake, TrendingUp, ShieldCheck, Zap } from 'lucide-react';
// Import data gallery terbaru Anda
import { galleryData } from '@/data/galleryData';

/**
 * FUNGSI OPTIMASI CLOUDINARY
 * Disesuaikan untuk Impact: q=50 untuk Lighthouse dan lebar 800px
 */
const optimizeImpactImg = (url, width = 800) => {
  return url.replace('/upload/', `/upload/f_auto,q_50,w_${width}/`);
};

// Memilih foto dari galleryData (indeks ke-10) untuk membedakan visual dari section sebelumnya
const IMPACT_IMAGE_SOURCE = galleryData.images[10];

export const EconomicImpact = () => (
  <section id="ekonomi" className="py-12 lg:py-20 bg-white px-6 lg:px-12 relative overflow-hidden font-sans">
    
    {/* Decorative Soft Background Element */}
    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-green-50 rounded-full blur-[120px] opacity-30 translate-x-1/2 -translate-y-1/2" />

    <div className="max-w-[1400px] mx-auto relative z-10">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
        
        {/* SISI KIRI: CONTENT STRATEGY */}
        <div className="w-full lg:w-1/2 order-2 lg:order-1 space-y-6 lg:space-y-8">
          <div className="space-y-4 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 px-3 py-1 bg-slate-50 border border-slate-100 rounded-full text-[#16a34a] text-[9px] font-black uppercase tracking-[0.2em]"
            >
              <Zap size={12} className="fill-[#16a34a]/20" /> Strategic Sourcing
            </motion.div>
            
            <h2 className="text-3xl lg:text-5xl font-serif italic text-[#052c17] leading-tight tracking-tighter">
              Akses Langsung, <br /> 
              <span className="text-[#16a34a]">Efisiensi Berkelanjutan.</span>
            </h2>
            
            <p className="text-sm lg:text-lg text-slate-500 font-light leading-relaxed max-w-xl mx-auto lg:mx-0 border-l-2 border-green-100 pl-4 lg:pl-8">
              Kami memutus kompleksitas rantai pasok. Melalui <span className="text-[#052c17] font-semibold italic">Direct-Farming Model</span>, kami menjamin margin harga kompetitif bagi bisnis Anda tanpa mengabaikan martabat petani lokal.
            </p>
          </div>

          {/* GRID ADVANTAGE */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 pt-2">
            <div className="group space-y-3 p-5 bg-slate-50/50 rounded-2xl border border-transparent hover:border-green-100 hover:bg-white transition-all duration-500 shadow-sm text-center lg:text-left">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-[#16a34a] group-hover:bg-[#16a34a] group-hover:text-white transition-all duration-500 mx-auto lg:mx-0">
                <TrendingUp size={16} />
              </div>
              <h4 className="font-black text-[10px] text-[#052c17] uppercase tracking-widest">Optimasi Biaya</h4>
              <p className="text-xs text-slate-400 leading-relaxed font-medium">
                Eliminasi perantara ganda untuk memberikan margin harga yang stabil bagi operasional Anda.
              </p>
            </div>

            <div className="group space-y-3 p-5 bg-slate-50/50 rounded-2xl border border-transparent hover:border-green-100 hover:bg-white transition-all duration-500 shadow-sm text-center lg:text-left">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-[#16a34a] group-hover:bg-[#16a34a] group-hover:text-white transition-all duration-500 mx-auto lg:mx-0">
                <ShieldCheck size={16} />
              </div>
              <h4 className="font-black text-[10px] text-[#052c17] uppercase tracking-widest">Jaminan Stok</h4>
              <p className="text-xs text-slate-400 leading-relaxed font-medium">
                Kemitraan terintegrasi menjamin kontinuitas pasokan harian sepanjang musim.
              </p>
            </div>
          </div>
        </div>

        {/* SISI KANAN: VISUAL PRESTIGE */}
        <div className="w-full lg:w-1/2 order-1 lg:order-2 px-4 lg:px-0">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-[5/4] max-h-[450px] bg-slate-100">
              <img 
                src={optimizeImpactImg(IMPACT_IMAGE_SOURCE)} 
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700" 
                alt="Pertanian Berkelanjutan Green Fresh Cipanas" 
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#052c17]/40 via-transparent to-transparent" />
            </div>

            {/* Floating Statement Card */}
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -right-2 lg:-bottom-6 lg:-right-6 bg-white p-6 lg:p-8 rounded-[1.5rem] lg:rounded-[2rem] shadow-2xl border border-slate-50 max-w-[220px] lg:max-w-[280px]"
            >
              <div className="flex items-center gap-2 mb-3 text-[#16a34a]">
                <HeartHandshake size={16} />
                <span className="text-[8px] font-black uppercase tracking-[0.1em]">Ethical Sourcing</span>
              </div>
              <p className="text-base lg:text-lg font-serif italic text-[#052c17] leading-tight">
                "Membangun <span className="text-[#16a34a]">ekonomi lokal</span> melalui rantai pasok transparan."
              </p>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </div>
  </section>
);