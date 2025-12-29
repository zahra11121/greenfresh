"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Leaf, ShieldCheck, Box, ChevronDown, MapPin, Globe, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { cityMenuGroups } from '@/data/menuCities';

const MainLogo = () => (
  <a href="/" aria-label="GreenFresh Home" className="flex items-center group cursor-pointer w-fit">
    <div className="relative flex items-center">
      <svg 
        className="h-10 lg:h-12 w-auto transition-all duration-300"
        viewBox="0 5 320 70" 
        xmlns="http://www.w3.org/2000/svg"
        role="img"
      >
        <title>GreenFresh.co.id Logo</title>
        <g transform="translate(5, 12)">
          <path d="M50 40 C 50 15, 10 15, 10 40 C 10 65, 50 65, 50 50" stroke="#052c17" strokeWidth="3.5" fill="none" strokeLinecap="round" />
          <path d="M50 40 C 65 25, 65 10, 40 10 C 40 10, 40 25, 50 40" fill="#16a34a" />
        </g>
        <text x="75" y="48" fontFamily="Arial, sans-serif" fontWeight="600" fontSize="42" fill="#052c17">
          Green<tspan fill="#16a34a">Fresh</tspan>
          <tspan fontSize="26" fontWeight="400" fill="#666">.co.id</tspan>
        </text>
        <text x="77" y="70" fontFamily="Arial, sans-serif" fontWeight="400" fontSize="11" letterSpacing="2.5" fill="#999">
          PREMIUM VEGETABLE SUPPLIER
        </text>
      </svg>
    </div>
  </a>
);

export const Header = () => {
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);

  // Mencegah Hydration Mismatch dengan memastikan komponen dirender di Client
  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsApp = () => {
    const phoneNumber = "6287780937884";
    const message = `Yth. Tim Sales Greenfresh.co.id\n\nHalo, kami tertarik untuk bekerja sama...`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  if (!mounted) return null;

  return (
    <>
      {/* 1. TOP TICKER */}
      <div className="fixed top-0 w-full z-[140] bg-[#052c17] py-1.5 overflow-hidden border-b border-[#84cc16]/20">
        <motion.div 
          animate={{ x: [0, -1000] }} 
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }} 
          className="flex gap-16 items-center whitespace-nowrap px-4"
        >
          {[1, 2].map((set) => (
            <React.Fragment key={set}>
              {[
                { icon: <ShieldCheck size={10} />, text: "SLA FULFILLMENT 100%" },
                { icon: <Globe size={10} />, text: "JABODETABEK NETWORK" },
                { icon: <Box size={10} />, text: "10 TON/DAY CAPACITY" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="text-[#84cc16]">{item.icon}</div>
                  <span className="text-[8px] font-bold text-white uppercase tracking-widest">{item.text}</span>
                  <div className="w-1 h-1 rounded-full bg-white/10" />
                </div>
              ))}
            </React.Fragment>
          ))}
        </motion.div>
      </div>

      {/* 2. MAIN NAVIGATION */}
      <nav className={`fixed left-0 right-0 z-[130] transition-all duration-300 ${isScrolled ? "top-7 px-4" : "top-8 px-6"}`}>
        <div className={`max-w-[1400px] mx-auto rounded-2xl transition-all duration-300 ${
          isScrolled 
            ? "bg-white shadow-xl border border-green-100 px-5 py-2" 
            : "bg-white/95 backdrop-blur-md border border-transparent shadow-sm px-6 py-3.5"
        }`}>
          
          <div className="flex lg:grid lg:grid-cols-3 items-center w-full justify-between">
            
            {/* Logo Section */}
            <div className="flex justify-start">
              <MainLogo />
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex justify-center items-center gap-8 text-left">
              <a href="/" className="text-[11px] font-bold uppercase tracking-widest text-[#052c17]/70 hover:text-[#16a34a] transition-colors">Home</a>
              
              {/* Dropdown Wilayah */}
              <div 
                className="relative group"
                onMouseEnter={() => setIsLocationOpen(true)}
                onMouseLeave={() => setIsLocationOpen(false)}
              >
                <button className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-widest text-[#052c17]/70 group-hover:text-[#16a34a] transition-colors">
                  Wilayah <ChevronDown size={14} className={`transition-transform duration-300 ${isLocationOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {isLocationOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 15 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-5 w-[850px]"
                    >
                      <div className="bg-white rounded-[32px] shadow-2xl border-2 border-[#16a34a] p-10 grid grid-cols-3 gap-10 overflow-hidden relative">
                        <div className="absolute top-0 right-0 p-4 opacity-[0.03] pointer-events-none text-[#16a34a]">
                          <Leaf size={200} />
                        </div>
                        {cityMenuGroups.map((group, idx) => (
                          <div key={idx} className="flex flex-col gap-4">
                            <div className="flex items-center gap-2 mb-2 pb-2 border-b border-[#16a34a]/10">
                              <div className="w-1.5 h-4 bg-[#16a34a] rounded-full" />
                              <span className="text-[10px] font-bold text-[#052c17] uppercase tracking-widest">{group.category}</span>
                            </div>
                            <div className="flex flex-col gap-1">
                              {group.items.map((city) => (
                                <a key={city.slug} href={`/supplier-sayur/${city.slug}`} className="flex items-center justify-between p-2.5 hover:bg-green-50 rounded-xl transition-all group/item">
                                  <div className="flex items-center gap-3">
                                    <MapPin size={13} className="text-[#16a34a]/30 group-hover/item:text-[#16a34a]" />
                                    <span className="text-[11px] font-semibold text-slate-500 group-hover/item:text-[#052c17]">{city.name}</span>
                                  </div>
                                  <ChevronRight size={12} className="opacity-0 group-hover/item:opacity-100 text-[#16a34a] transition-all" />
                                </a>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Gallery & About */}
              <a href="/gallery" className="text-[11px] font-bold uppercase tracking-widest text-[#052c17]/70 hover:text-[#16a34a] transition-colors">Gallery</a>
              <a href="/about" className="text-[11px] font-bold uppercase tracking-widest text-[#052c17]/70 hover:text-[#16a34a] transition-colors">About Us</a>
            </div>
            
            {/* CTA Section */}
            <div className="hidden lg:flex justify-end items-center gap-4">
              <button 
                onClick={handleWhatsApp}
                className="px-6 py-2.5 bg-[#052c17] text-[#84cc16] rounded-xl text-[10px] font-bold tracking-widest hover:bg-[#0a3d21] transition-all uppercase border border-[#16a34a]"
              >
                Order B2B
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden p-2 text-[#052c17]" onClick={() => setIsMobileMenuOpen(true)}>
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* 3. MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsMobileMenuOpen(false)} className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[200]" />
            <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} className="fixed top-0 right-0 h-full w-[85%] bg-white z-[210] shadow-2xl flex flex-col border-l-4 border-[#16a34a]">
              <div className="p-6 flex justify-between items-center border-b">
                <div className="scale-75 origin-left"><MainLogo /></div>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-slate-400 border-2 rounded-xl">
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-2 font-sans">
                <a href="/" className="px-4 py-4 text-sm font-black uppercase text-[#052c17] border-b border-green-50 text-left">Home</a>
                <a href="/gallery" className="px-4 py-4 text-sm font-black uppercase text-[#052c17] border-b border-green-50 flex items-center gap-3">
                  <ImageIcon size={18} className="text-[#16a34a]" /> Gallery
                </a>
                <a href="/about" className="px-4 py-4 text-sm font-black uppercase text-[#052c17] border-b border-green-50 text-left">About Us</a>
                
                <div className="mt-4 px-4 py-2 bg-green-50 rounded-lg text-left">
                   <span className="text-[10px] font-bold text-[#16a34a] uppercase tracking-widest">Cakupan Wilayah</span>
                </div>
                {cityMenuGroups.map((group, idx) => (
                  <div key={idx} className="border-b border-green-50">
                    <button onClick={() => setActiveAccordion(activeAccordion === idx ? null : idx)} className="w-full flex items-center justify-between px-4 py-4">
                      <span className="text-xs font-bold uppercase text-slate-600">{group.category}</span>
                      <ChevronRight size={16} className={`transition-transform ${activeAccordion === idx ? 'rotate-90 text-[#16a34a]' : 'text-slate-300'}`} />
                    </button>
                    <AnimatePresence>
                      {activeAccordion === idx && (
                        <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden bg-green-50/20 text-left">
                          {group.items.map((city) => (
                            <a key={city.slug} href={`/supplier-sayur/${city.slug}`} className="block px-8 py-3 text-xs font-semibold text-slate-500 hover:text-[#16a34a]">{city.name}</a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
              <div className="p-6 bg-white border-t">
                <button onClick={handleWhatsApp} className="w-full py-4 bg-[#052c17] text-[#84cc16] rounded-xl font-black uppercase text-xs tracking-widest shadow-lg">Chat Sales B2B</button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};