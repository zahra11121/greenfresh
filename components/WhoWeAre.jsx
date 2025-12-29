"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Factory, ShieldCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';
// Import data gallery terbaru Anda
import { galleryData } from '@/data/galleryData';

/**
 * FUNGSI OPTIMASI CLOUDINARY
 * Disesuaikan untuk Profil: q=50 untuk Lighthouse dan lebar 800px
 */
const optimizeAboutImg = (url, width = 800) => {
  return url.replace('/upload/', `/upload/f_auto,q_50,w_${width}/`);
};

// Memilih foto dari galleryData (indeks ke-4) agar berbeda dengan Hero & VisualGallery
const ABOUT_IMAGE_SOURCE = galleryData.images[4];

export const WhoWeAre = () => {
  return (
    <section id="tentang" className="py-12 lg:py-20 bg-white overflow-hidden font-sans">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
        
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* SISI KIRI: VISUAL AUTHORITY */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/5] lg:h-[500px] bg-slate-100"
            >
              <img 
                src={optimizeAboutImg(ABOUT_IMAGE_SOURCE)} 
                alt="Operasional distributor sayuran segar Green Fresh Cipanas" 
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#052c17]/60 via-transparent to-transparent" />
              
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#84cc16] flex items-center justify-center text-[#052c17]">
                    <Factory size={20} />
                  </div>
                  <div>
                    <p className="text-white/60 text-[8px] font-black uppercase tracking-widest leading-none">Main Hub</p>
                    <p className="text-white text-base font-serif italic font-bold">Cipanas Agribusiness Center</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* SISI KANAN: CONTENT STRATEGY */}
          <div className="lg:col-span-7 space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-3 px-3 py-1.5 bg-slate-50 rounded-full border border-slate-100 mx-auto lg:mx-0"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a] animate-pulse" />
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#052c17]/60">Verified Supplier Profile</span>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-3xl lg:text-6xl font-serif italic font-black text-[#052c17] leading-tight tracking-tighter"
              >
                DISTRIBUTOR <span className="text-[#16a34a]">SAYURAN.</span>
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-base lg:text-lg text-slate-500 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0"
              >
                <span className="text-[#052c17] font-semibold italic">Green Fresh Cipanas</span> adalah <strong>supplier sayur tangan pertama</strong>. Kami hadir sebagai mitra strategis <strong>pemasok sayur hotel, restoran, dan supermarket</strong> melalui integrasi petani lokal berkualitas super.
              </motion.p>
            </div>

            {/* GRID SPECS */}
            <div className="grid sm:grid-cols-2 gap-6 lg:gap-10 border-t border-slate-100 pt-6">
              <div className="space-y-2">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-[#16a34a]">
                  <Users size={16} />
                  <span className="text-[9px] font-black uppercase tracking-widest text-nowrap">Highland Sourcing</span>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Bermitra dengan 200+ petani dataran tinggi untuk menjamin kontinuitas panen setiap hari.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-[#16a34a]">
                  <ShieldCheck size={16} />
                  <span className="text-[9px] font-black uppercase tracking-widest text-nowrap">Quality Assurance</span>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Protokol QC ketat untuk menjaga standar kualitas retail modern dan industri Horeka.
                </p>
              </div>
            </div>

            {/* CTA */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="flex flex-col sm:flex-row items-center lg:items-center gap-6 pt-2"
            >
              <Link href="/about">
                <button className="group flex items-center gap-4 bg-[#052c17] text-white px-8 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-[#16a34a] transition-all active:scale-95 shadow-lg">
                  Corporate Profile
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              
              <div className="flex flex-col border-l-0 sm:border-l border-slate-200 pl-0 sm:pl-6">
                <span className="text-[8px] font-black text-[#052c17] uppercase tracking-widest">B2B Standard</span>
                <span className="text-slate-400 text-[10px]">Resmi Sejak 2019</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};