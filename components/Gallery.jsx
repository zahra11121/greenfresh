"use client";
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Image as ImageIcon, Camera, CheckCircle2 } from 'lucide-react';
import { galleryData } from '@/data/galleryData';

/**
 * OPTIMASI CLOUDINARY VIDEO:
 * Memaksa format mp4 dan optimasi bitrate agar video berat tetap bisa diputar bersamaan.
 */
const optimizeCloudinaryVideo = (url) => {
  return url.replace('/video/upload/', '/video/upload/f_mp4,q_auto,so_0/');
};

const optimizeCloudinary = (url, width = 800) => {
  return url.replace('/upload/', `/upload/f_auto,q_auto,w_${width}/`);
};

export const Gallery = () => {
  const videoRefs = useRef([]);

  // Fungsi untuk menangani klik WhatsApp
  const handleWhatsApp = () => {
    const phoneNumber = "6287780937884";
    const message = "Halo Green Fresh, saya ingin melihat katalog lengkap komoditas sayur super dan informasi penawaran kerja sama.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  // Force play semua video setelah komponen mount
  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (video) {
        video.muted = true; 
        video.play().catch(error => {
          console.log("Autoplay blocked or failed:", error);
        });
      }
    });
  }, []);

  return (
    <section className="py-12 lg:py-24 bg-white overflow-hidden font-sans">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 lg:mb-16 gap-6">
          <div className="max-w-2xl text-center md:text-left">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center justify-center md:justify-start gap-2 mb-4"
            >
              <div className="w-8 h-[1px] bg-[#16a34a]" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#16a34a]">
                Visual Quality Control
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-serif italic text-[#052c17] leading-[1.1] tracking-tighter">
              Potret Nyata <span className="text-[#16a34a]">Kesegaran Harian.</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm font-light max-w-xs italic md:text-right leading-relaxed border-r-0 md:border-r-2 border-green-100 pr-0 md:pr-6">
            "Dokumentasi autentik pengiriman sayur super dari kebun Cipanas langsung ke mitra Horeka kami."
          </p>
        </div>

        {/* 1. VIDEO REELS SECTION */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-8 mb-12 lg:mb-20">
          {galleryData.videos.map((video, idx) => (
            <motion.div 
              key={`vid-${idx}`}
              whileHover={{ y: -8 }}
              className="relative aspect-[9/16] rounded-[1.5rem] lg:rounded-[2.5rem] overflow-hidden bg-slate-100 shadow-xl group cursor-pointer"
            >
              <video 
                ref={(el) => (videoRefs.current[idx] = el)}
                src={optimizeCloudinaryVideo(video)}
                autoPlay 
                muted 
                loop 
                playsInline
                preload="auto"
                className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#052c17]/90 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />
              
              <div className="absolute bottom-4 left-4 lg:bottom-8 lg:left-8 text-white z-10">
                <div className="flex items-center gap-2 mb-1 lg:mb-2">
                  <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                    <Play size={12} fill="currentColor" className="ml-0.5" />
                  </div>
                  <span className="text-[8px] lg:text-[10px] font-black uppercase tracking-widest">Live Report</span>
                </div>
                <p className="text-[10px] lg:text-sm font-serif italic font-medium opacity-90">Fresh Arrival Check</p>
              </div>

              <div className="absolute top-4 right-4 lg:top-6 lg:right-6">
                 <CheckCircle2 size={16} className="text-[#84cc16] drop-shadow-md" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* 2. PHOTO MASONRY SECTION */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 lg:gap-6 space-y-3 lg:space-y-6">
          {galleryData.images.map((img, idx) => (
            <motion.div 
              key={`img-${idx}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative break-inside-avoid rounded-2xl lg:rounded-[2rem] overflow-hidden group cursor-zoom-in shadow-md hover:shadow-2xl transition-all bg-slate-50"
            >
              <img 
                src={optimizeCloudinary(img, 600)}
                alt={`Green Fresh Supply Documentation ${idx + 1}`}
                className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out"
                loading="lazy"
                decoding="async"
              />
              
              <div className="absolute inset-0 bg-[#052c17]/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center mb-3">
                  <Camera className="text-white" size={24} />
                </div>
                <span className="text-[9px] font-black text-white uppercase tracking-widest">View Grade-A Details</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA BUTTON - WA AKTIF */}
        <div className="mt-12 lg:mt-20 text-center">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <button 
              onClick={handleWhatsApp}
              className="bg-[#052c17] hover:bg-[#16a34a] text-white px-10 py-5 rounded-full shadow-2xl transition-all text-[11px] font-black uppercase tracking-[0.2em] inline-flex items-center gap-4 group cursor-pointer"
            >
              <ImageIcon size={18} className="text-[#84cc16] group-hover:text-white transition-colors" /> 
              Katalog Lengkap Via WhatsApp
            </button>
          </motion.div>
          <p className="mt-6 text-[10px] uppercase font-bold text-slate-400 tracking-widest">
            Update Harian: 25+ Komoditas Sayur Super
          </p>
        </div>
      </div>
    </section>
  );
};