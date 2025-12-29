"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, Zap, Scale, ChevronRight, TrendingUp, 
  PackageCheck, Truck, Globe, Instagram, Linkedin, Mail, 
  Phone, MapPin, Clock, Menu, X, Database, Leaf, ShieldCheck, 
  Star, Activity, HeartHandshake, Users, Landmark, Lock, 
  LayoutGrid, ClipboardCheck, Wallet, CreditCard, ShieldAlert
} from 'lucide-react';

/* --- HEADER --- */
export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 w-full z-[110] bg-[#052c17] text-[#84cc16] py-1.5 overflow-hidden whitespace-nowrap hidden lg:block border-b border-white/5 font-mono text-[9px] font-bold uppercase tracking-[0.2em]">
        <motion.div animate={{ x: [0, -1500] }} transition={{ duration: 35, repeat: Infinity, ease: "linear" }} className="flex gap-12">
          <span>• JAMINAN STOK 100% UNTUK MITRA KONTRAK</span>
          <span>• PEMBERDAYAAN 200+ PETANI LOKAL CIPANAS</span>
          <span>• DISTRIBUTOR SAYUR TANGAN PERTAMA JABODETABEK</span>
        </motion.div>
      </div>

      <nav className={`fixed top-0 lg:top-8 w-full z-[100] transition-all duration-700 px-4 lg:px-12 ${
        isScrolled ? "bg-white shadow-xl py-3 lg:py-4" : "bg-transparent py-6 lg:py-10"
      }`}>
        <div className="max-w-[1600px] mx-auto flex justify-between items-center">
          <div className="flex flex-col group cursor-pointer">
            <span className="text-xl lg:text-3xl font-black tracking-tighter leading-none text-[#052c17]">SAYUR<span className="text-[#16a34a]">.CO.ID</span></span>
            <p className="text-[7px] lg:text-[9px] uppercase tracking-[0.3em] font-black text-[#16a34a]">Green Fresh Cipanas</p>
          </div>
          <div className="hidden lg:flex gap-8 font-black uppercase text-[10px] tracking-widest text-[#052c17]">
            <a href="#ekonomi" className="hover:text-[#16a34a]">Ekonomi</a>
            <a href="#harga" className="hover:text-[#16a34a]">Katalog</a>
            <a href="#jaminan" className="hover:text-[#16a34a]">Jaminan</a>
            <a href="#kemitraan" className="hover:text-[#16a34a]">Kontrak</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-[#16a34a] text-white px-5 lg:px-8 py-2 lg:py-3 rounded-full text-[9px] lg:text-[10px] font-black tracking-widest shadow-lg uppercase">B2B Portal</button>
            <button className="lg:hidden text-[#052c17] p-1" onClick={() => setIsMobileMenuOpen(true)}><Menu size={24} /></button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} className="fixed inset-0 bg-[#052c17] z-[120] p-8 flex flex-col justify-between text-white font-sans">
            <div className="flex justify-between items-center">
              <span className="text-xl font-black text-[#16a34a]">SAYUR.CO.ID</span>
              <button onClick={() => setIsMobileMenuOpen(false)}><X size={32} /></button>
            </div>
            <div className="flex flex-col gap-6 text-4xl font-serif italic uppercase text-center">
              <a href="#ekonomi" onClick={() => setIsMobileMenuOpen(false)}>Ekonomi</a>
              <a href="#harga" onClick={() => setIsMobileMenuOpen(false)}>Katalog</a>
              <a href="#jaminan" onClick={() => setIsMobileMenuOpen(false)}>Jaminan</a>
              <a href="#kemitraan" onClick={() => setIsMobileMenuOpen(false)}>Kontrak</a>
            </div>
            <p className="text-[10px] opacity-30 text-center uppercase">CV. GREEN FRESH CIPANAS © 2025</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

/* --- HERO --- */
export const Hero = () => (
  <section className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-end px-4 lg:px-20 pb-12 lg:pb-20 overflow-hidden bg-white pt-32 lg:pt-0">
    <div className="absolute top-0 right-0 w-full lg:w-3/5 h-[40vh] lg:h-full -z-10">
      <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2070&auto=format&fit=crop" alt="Supplier Sayur" className="w-full h-full object-cover grayscale-[0.2]" />
      <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-white via-white/80 to-transparent" />
    </div>
    <div className="max-w-[1600px] mx-auto w-full relative z-10 text-center lg:text-left">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6 lg:mb-10 inline-flex items-center gap-3 px-4 py-2 bg-[#052c17] text-white rounded-full">
        <Star size={12} className="text-[#84cc16] fill-current" />
        <span className="text-[8px] lg:text-[10px] font-black uppercase tracking-[0.2em]">Distributor Tangan Pertama Cipanas</span>
      </motion.div>
      <motion.h2 initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-[14vw] lg:text-[10rem] font-serif leading-[0.85] tracking-[-0.05em] mb-8 lg:mb-12 text-[#052c17]">
        STOK <br /> <span className="italic text-[#16a34a]">TERJAMIN.</span>
      </motion.h2>
      <div className="lg:col-span-6 space-y-6 max-w-xl mx-auto lg:mx-0">
        <h3 className="text-xl lg:text-3xl font-serif italic border-l-4 border-[#16a34a] pl-4 leading-snug">Memenuhi Kebutuhan Sayur Harian Supermarket dan Restoran Tanpa Jeda.</h3>
        <p className="text-base lg:text-xl font-light opacity-80 leading-relaxed">Kami mengelola distribusi langsung dari kebun Cipanas dengan 2 armada pengiriman setiap fajar. Menjamin harga kompetitif dan kesegaran standar retail modern.</p>
        <button className="w-full lg:w-auto bg-[#16a34a] text-white px-10 py-5 rounded-full font-black text-xs shadow-xl hover:bg-[#052c17] transition-all">MINTA LIST HARGA B2B</button>
      </div>
    </div>
  </section>
);

/* --- PRICE TABLE --- */
export const PriceTable = ({ data }) => (
  <section id="harga" className="py-20 lg:py-40 bg-[#fcfaf7] px-4 lg:px-20 border-y border-green-100">
    <div className="max-w-[1600px] mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-12 gap-8 text-center lg:text-left">
        <div>
          <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-[#16a34a] mb-4 italic">Katalog Grosir</h2>
          <h3 className="text-4xl lg:text-7xl font-serif italic leading-tight text-[#052c17]">HARGA <span className="text-[#16a34a]">B2B HARI INI.</span></h3>
        </div>
        <div className="px-4 py-1.5 bg-white rounded-full border border-green-200 text-[#16a34a] text-[8px] lg:text-[10px] font-bold uppercase tracking-widest shadow-sm">Update: Des 2025</div>
      </div>
      <div className="overflow-x-auto rounded-[2rem] lg:rounded-[3rem] border border-green-100 shadow-2xl bg-white">
        <table className="w-full text-left border-collapse min-w-[700px]">
          <thead>
            <tr className="bg-[#052c17] text-[#84cc16] uppercase text-[9px] lg:text-[10px] tracking-[0.2em]">
              <th className="p-6 lg:p-8 font-black">Item</th>
              <th className="p-6 lg:p-8 font-black">Kategori</th>
              <th className="p-6 lg:p-8 font-black">Range Harga / KG</th>
              <th className="p-6 lg:p-8 font-black text-center">Status</th>
            </tr>
          </thead>
          <tbody className="text-[#052c17]">
            {data.map((item) => (
              <tr key={item.id} className="border-b border-green-50 hover:bg-green-50 transition-colors">
                <td className="p-5 lg:p-8 font-serif italic text-lg lg:text-2xl font-bold">{item.name}</td>
                <td className="p-5 lg:p-8 text-[9px] font-bold uppercase opacity-40">{item.category}</td>
                <td className="p-5 lg:p-8 font-mono font-bold text-[#16a34a]">{item.range}</td>
                <td className="p-5 lg:p-8 text-center">
                  <div className="flex items-center justify-center gap-1.5 text-[8px] font-black uppercase text-green-700 bg-green-100 px-3 py-1.5 rounded-full border border-green-200 mx-auto w-fit">
                    <div className="w-1 h-1 bg-green-600 rounded-full animate-pulse" /> {item.status}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

/* --- CASH FLOW & TOP --- */
export const CashFlow = () => (
  <section className="py-20 lg:py-40 bg-white px-4 lg:px-20 border-b border-green-50">
    <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-20 items-center font-sans">
      <div className="order-2 lg:order-1 bg-[#fcfaf7] p-8 lg:p-16 rounded-[4rem] border-2 border-green-100 shadow-xl space-y-6 text-[#052c17]">
        <h4 className="text-2xl lg:text-3xl font-serif mb-10 italic text-center">Sistem Pembayaran (TOP)</h4>
        {[
          { label: "Cash on Delivery", desc: "Suplai Harian & Trial Order", icon: <Wallet className="text-[#16a34a]" /> },
          { label: "Termin 7-14 Hari", desc: "Berlaku Bagi Mitra Rutin", icon: <CreditCard className="text-[#16a34a]" /> },
          { label: "Termin 30 Hari", desc: "Khusus Kontrak Korporat", icon: <Landmark className="text-[#16a34a]" /> }
        ].map((item, idx) => (
          <div key={idx} className="flex items-center gap-6 p-6 bg-white rounded-3xl shadow-sm border border-green-50 hover:border-[#16a34a] transition-all group">
            {item.icon}
            <div>
              <p className="font-black text-sm lg:text-base uppercase tracking-tighter">{item.label}</p>
              <p className="text-[9px] opacity-50 font-bold uppercase tracking-widest italic">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="order-1 lg:order-2 space-y-10 text-center lg:text-left text-[#052c17]">
        <h2 className="text-4xl lg:text-7xl font-serif italic leading-tight uppercase">SOLUSI <br/> <span className="text-[#16a34a]">CASH FLOW.</span></h2>
        <p className="text-lg lg:text-xl font-light opacity-80 leading-relaxed italic border-l-4 border-[#16a34a] pl-6 lg:pl-10">Kami mendukung kelancaran finansial retail modern melalui sistem pembayaran berjangka yang profesional dan transparan.</p>
      </div>
    </div>
  </section>
);

/* --- FOOTER --- */
export const Footer = () => (
  <footer className="bg-[#052c17] text-[#fcfaf7] pt-32 pb-12 px-6 lg:px-20 border-t border-green-900">
    <div className="max-w-[1600px] mx-auto grid lg:grid-cols-12 gap-20 text-center lg:text-left">
      <div className="lg:col-span-6">
        <h2 className="text-4xl font-black tracking-tighter mb-8 italic uppercase font-serif underline decoration-[#16a34a] underline-offset-8 decoration-4 leading-none">SAYUR.CO.ID</h2>
        <p className="text-white/50 text-lg font-light leading-relaxed mb-12 max-w-xl mx-auto lg:mx-0 font-sans italic border-l-4 border-[#16a34a]/30 lg:pl-6">
          "Pusat pengadaan sayur tangan pertama dari Cipanas. Memberdayakan ekonomi petani lokal untuk menyuplai kebutuhan Modern Retail dan Restoran skala nasional."
        </p>
        <div className="flex justify-center lg:justify-start gap-6 opacity-60">
          <Instagram size={20} /> <Linkedin size={20} /> <Mail size={20} />
        </div>
      </div>
      <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-12 font-bold uppercase tracking-widest text-[10px]">
        <div className="space-y-6">
          <h4 className="text-[#16a34a]">Protokol</h4>
          <ul className="opacity-40 space-y-4"><li>Fixed Price</li><li>Daily Suplai</li><li>Custom Packing</li></ul>
        </div>
        <div className="space-y-6 text-[#16a34a] col-span-2 md:col-span-1">
          <h4>Bantuan Purchasing</h4>
          <p className="text-white opacity-50 lowercase font-normal italic mb-2">purchasing@sayur.co.id</p>
          <p className="text-sm font-black text-white">+62 263 512 888</p>
        </div>
      </div>
    </div>
    <div className="mt-24 pt-10 border-t border-white/5 text-[9px] font-black tracking-[0.4em] opacity-20 flex flex-col md:flex-row justify-between gap-6 uppercase italic items-center text-center font-sans">
      <span>CV. Green Fresh Cipanas • Ekonomi Berkelanjutan</span>
      <span>Jaringan Suplai Nasional © 2025</span>
    </div>
  </footer>
);