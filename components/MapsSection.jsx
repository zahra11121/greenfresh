"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowUpRight, Navigation } from 'lucide-react';

export const MapsSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden font-sans">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
        
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* SISI KIRI: TEXT CONTENT */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-3 px-4 py-2 bg-slate-50 border border-slate-100 rounded-full text-[#16a34a] text-[10px] font-black uppercase tracking-[0.3em]"
              >
                <Navigation size={14} className="animate-pulse" /> Global Positioning
              </motion.div>
              
              <h2 className="text-5xl lg:text-6xl font-serif italic font-black text-[#052c17] leading-[1.1] tracking-tighter">
                Lokasi <br /> <span className="text-[#16a34a]">Strategis Kami.</span>
              </h2>
              
              <p className="text-lg text-slate-500 font-light leading-relaxed">
                Beroperasi dari titik presisi Sukatani untuk memastikan mata rantai distribusi sayuran tetap pendek, segar, dan efisien hingga ke tangan Anda.
              </p>
            </div>

            <div className="space-y-8">
              {/* Alamat Block - UPDATE ALAMAT BENAR */}
              <div className="group flex gap-6 p-8 bg-slate-50 rounded-[2rem] border border-transparent hover:border-green-100 hover:bg-white transition-all duration-500">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#16a34a] shadow-sm group-hover:bg-[#16a34a] group-hover:text-white transition-all">
                  <MapPin size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Main Warehouse & Hub</h4>
                  <p className="text-[#052c17] font-bold text-lg leading-snug">
                    Kp Jl. Kayumanis, RT.04/RW.04, Sukatani, Kec. Cipanas, Kabupaten Cianjur, Jawa Barat 43253.
                  </p>
                </div>
              </div>

              {/* Koordinat & Action */}
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <a 
                  href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15848.831507534873!2d107.0056128501892!3d-6.74448092691127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69b3dec98fb5cf%3A0xa1a6070b0a2a9ef3!2sCV%20Green%20Fresh%20Cipanas%20-%20Supplier%20Sayur%20Mayur!5e0!3m2!1sid!2sid!4v1766973106765!5m2!1sid!2sid" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-4 bg-[#052c17] text-[#84cc16] px-8 py-5 rounded-2xl font-black text-[11px] uppercase tracking-widest hover:bg-[#16a34a] hover:text-white transition-all group"
                >
                  Buka Maps
                  <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
                
                <div className="flex items-center gap-4 text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">
                   <span>Lat: -6.7056</span>
                   <span className="w-1 h-1 bg-slate-200 rounded-full" />
                   <span>Long: 107.0394</span>
                </div>
              </div>
            </div>
          </div>

          {/* SISI KANAN: VISUAL MAP WITH FRAME */}
          <div className="lg:col-span-7 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative rounded-[3rem] lg:rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(5,44,23,0.15)] aspect-square lg:aspect-auto lg:h-[700px] border-[12px] border-slate-50"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15848.831507534873!2d107.0056128501892!3d-6.74448092691127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69b3dec98fb5cf%3A0xa1a6070b0a2a9ef3!2sCV%20Green%20Fresh%20Cipanas%20-%20Supplier%20Sayur%20Mayur!5e0!3m2!1sid!2sid!4v1766973106765!5m2!1sid!2sid" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(0.1) contrast(1.1)' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full object-cover"
              ></iframe>

              {/* Label Posisi Kanan Atas */}
              <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-md px-6 py-3 rounded-2xl shadow-xl border border-white flex items-center gap-3 z-20">
                <div className="w-2 h-2 bg-[#16a34a] rounded-full animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-widest text-[#052c17]">Live Distribution Hub</span>
              </div>
            </motion.div>

            {/* Elemen Dekorasi */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-green-50 rounded-full -z-10 opacity-50" />
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-slate-50 rounded-full -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default MapsSection;