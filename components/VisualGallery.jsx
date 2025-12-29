"use client";
import { motion } from 'framer-motion';
import { Truck, PackageCheck, ShieldCheck, ChevronRight } from 'lucide-react';
import { galleryData } from '@/data/galleryData';

// Helper untuk optimasi
const getCloudinaryUrl = (url, width, height) => {
  const params = `f_auto,q_auto:eco,c_fill,g_auto,w_${width}${height ? `,h_${height}` : ''}`;
  return url.replace('/upload/', `/upload/${params}/`);
};

const IMG_LAHAN = galleryData.images[2]; 
const IMG_PACKING = galleryData.images[5]; 

export const VisualGallery = () => (
  <section id="lahan" className="py-16 lg:py-32 bg-white px-4 lg:px-12 overflow-hidden">
    <div className="max-w-[1400px] mx-auto">
      
      {/* HEADER SECTION */}
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-10 lg:mb-14 gap-6">
        <div className="max-w-2xl text-center lg:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-green-50 rounded-full"
          >
            <ShieldCheck size={14} className="text-[#16a34a]" />
            <span className="text-[9px] lg:text-[10px] font-black uppercase tracking-[0.2em] text-[#16a34a]">Standardisasi Suplai Ritel</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif italic text-[#052c17] leading-tight lowercase">
            Kualitas <br className="hidden lg:block" /> <span className="text-[#16a34a]">Tanpa Kompromi.</span>
          </h2>
        </div>
        <p className="text-slate-400 font-light text-xs lg:text-sm max-w-xs italic text-center lg:text-right leading-relaxed">
          "Kami mengirim standar profesionalisme dari hulu hingga ke hilir untuk menjaga integritas bisnis Anda."
        </p>
      </div>

      {/* BENTO GRID VISUAL */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6 lg:auto-rows-[320px]">
        
        {/* BIG CARD: LAHAN - Responsive implementation */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="md:col-span-8 md:row-span-2 relative rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden shadow-xl group min-h-[300px] lg:min-h-full bg-slate-100"
        >
          <img 
            // Default untuk desktop besar
            src={getCloudinaryUrl(IMG_LAHAN, 900, 650)} 
            // Memberikan pilihan ukuran ke browser
            srcSet={`
              ${getCloudinaryUrl(IMG_LAHAN, 450, 350)} 450w,
              ${getCloudinaryUrl(IMG_LAHAN, 900, 650)} 900w
            `}
            // Memberitahu browser ukuran kotak di layar
            sizes="(max-width: 768px) 95vw, 850px"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 lg:group-hover:scale-110" 
            alt="Kebun Cipanas Green Fresh"
            loading="lazy" 
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#052c17] via-[#052c17]/20 to-transparent p-6 lg:p-10 flex flex-col justify-end text-white">
            <p className="text-[9px] lg:text-[10px] font-black uppercase tracking-[0.3em] text-[#84cc16] mb-2 lg:mb-3">Origin: Cipanas Highland</p>
            <h4 className="text-2xl lg:text-4xl font-serif italic leading-none mb-3 lg:mb-4">Hulu Distribusi.</h4>
            <p className="max-w-md text-xs lg:text-sm opacity-80 font-light leading-relaxed">
              Membina 200+ petani mitra lokal dengan pengawasan kualitas tanah dan air secara berkala.
            </p>
          </div>
        </motion.div>

        {/* SMALL CARD 1: PACKING - Responsive implementation */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="md:col-span-4 relative rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden shadow-lg group min-h-[220px] lg:min-h-full bg-slate-100"
        >
          <img 
            src={getCloudinaryUrl(IMG_PACKING, 450, 450)} 
            srcSet={`
              ${getCloudinaryUrl(IMG_PACKING, 350, 350)} 350w,
              ${getCloudinaryUrl(IMG_PACKING, 500, 500)} 500w
            `}
            sizes="(max-width: 768px) 90vw, 400px"
            className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] lg:group-hover:grayscale-0 transition-all duration-700" 
            alt="Vegetable Packaging Standard"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-[#052c17]/30 lg:group-hover:bg-transparent transition-colors" />
          <div className="absolute top-6 left-6 lg:top-8 lg:left-8">
            <div className="bg-white p-3 lg:p-4 rounded-xl lg:rounded-2xl shadow-lg border border-slate-50">
              <PackageCheck className="text-[#16a34a] w-5 h-5 lg:w-6 lg:h-6" />
            </div>
          </div>
          <div className="absolute bottom-6 left-6 lg:bottom-8 lg:left-8 text-white">
             <h5 className="text-lg lg:text-xl font-serif italic">Clean & Labelled.</h5>
          </div>
        </motion.div>

        {/* SMALL CARD 2: LOGISTICS */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="md:col-span-4 relative rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden bg-[#052c17] p-8 lg:p-10 flex flex-col justify-between shadow-lg group min-h-[250px] lg:min-h-full"
        >
          <Truck className="text-[#84cc16] lg:group-hover:translate-x-2 transition-transform w-10 h-10 lg:w-11 lg:h-11" />
          <div>
            <h4 className="text-xl lg:text-2xl font-serif italic text-white mb-2">Armada Logistik.</h4>
            <p className="text-[9px] uppercase font-black tracking-widest text-[#84cc16] mb-4 lg:mb-5">Unit Pickup Daily Delivery</p>
            <div className="h-[1px] w-full bg-white/10 mb-4 lg:mb-5" />
            <ul className="grid grid-cols-1 gap-2 text-[9px] lg:text-[10px] font-bold uppercase tracking-widest text-white/50">
              <li className="flex items-center gap-2"><ChevronRight size={10} className="text-[#84cc16]" /> JKT Route</li>
              <li className="flex items-center gap-2"><ChevronRight size={10} className="text-[#84cc16]" /> Tangerang Route</li>
              <li className="flex items-center gap-2"><ChevronRight size={10} className="text-[#84cc16]" /> Depok/Bogor Route</li>
            </ul>
          </div>
        </motion.div>

      </div>
    </div>
  </section>
);