"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, MapPin, Phone, 
  ChevronRight, ArrowLeft, Leaf, Pause, Play 
} from 'lucide-react';
import { cityMenuGroups } from '@/data/menuCities';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null); 
  const [mobileView, setMobileView] = useState('main'); 
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [isPaused, setIsPaused] = useState(false); 

  // Deteksi Scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reset Mobile View saat menu ditutup
  useEffect(() => {
    if (activeMenu !== 'mobile') {
      const timer = setTimeout(() => {
        setMobileView('main');
        setSelectedGroup(null);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [activeMenu]);

  // Bahasa Khusus Purchasing & Procurement (Tanpa Pendingin)
  const tickerItems = [
    "FIXED PRICE KONTRAK 30 HARI",
    "SUPPLY CHAIN STANDAR AUDIT PANGAN",
    "KOMITMEN ZERO REJECTION RATE",
    "STABILITAS STOK SKALA TONASE",
    "PEMBAYARAN TOP (TERM OF PAYMENT)",
    "LEGALITAS SKU LENGKAP & PAJAK"
  ];

  return (
    <header role="banner" className="relative">
      {/* 1. TOP ANNOUNCEMENT BAR (B2B PROCUREMENT FOCUS) */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div 
            initial={{ y: -40 }}
            animate={{ y: 0 }}
            exit={{ y: -40 }}
            className="fixed top-0 left-0 right-0 z-[110] bg-[#14532d] text-white h-10 flex items-center shadow-md"
          >
            <div className="max-w-7xl mx-auto w-full px-5 flex items-center overflow-hidden">
              <button 
                onClick={() => setIsPaused(!isPaused)}
                className="z-20 p-1.5 mr-4 hover:bg-white/20 rounded-md transition-colors focus:ring-2 focus:ring-[#bef264] outline-none"
                aria-label={isPaused ? "Putar running text" : "Hentikan running text"}
              >
                {isPaused ? <Play size={14} fill="currentColor" /> : <Pause size={14} fill="currentColor" />}
              </button>

              <div className="flex whitespace-nowrap overflow-hidden flex-1 relative items-center">
                <motion.div 
                  animate={isPaused ? {} : { x: ["0%", "-50%"] }}
                  transition={{ repeat: Infinity, ease: "linear", duration: 60 }}
                  className="flex items-center gap-16 text-[10px] font-black uppercase tracking-[0.3em]"
                  aria-hidden="true"
                >
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex items-center gap-16">
                      {tickerItems.map((text, idx) => (
                        <span key={idx} className="flex items-center gap-4">
                          <span className="w-1.5 h-1.5 bg-[#bef264] rounded-full" />
                          {text}
                        </span>
                      ))}
                    </div>
                  ))}
                </motion.div>
                <span className="sr-only">Procurement Info: {tickerItems.join(", ")}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. MAIN NAVIGATION */}
      <nav 
        aria-label="Navigasi Utama"
        className={`fixed left-0 right-0 z-[100] transition-all duration-500 ${
          isScrolled 
            ? 'top-0 bg-white/95 backdrop-blur-md shadow-lg py-3' 
            : 'top-10 bg-white py-5 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2 group outline-none focus:ring-2 focus:ring-[#15803d] rounded-lg p-1">
            <div className="w-9 h-9 bg-[#052c17] rounded-xl flex items-center justify-center transition-transform group-hover:rotate-6">
              <Leaf className="text-[#bef264] w-5 h-5" fill="currentColor" />
            </div>
            <span className="text-xl font-[1000] tracking-tighter text-[#052c17]">
              GREEN<span className="text-[#15803d]">FRESH</span>
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-8">
            {['Home', 'Gallery', 'About'].map((item) => (
              <Link 
                key={item} 
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="text-[11px] font-black uppercase tracking-widest text-slate-600 hover:text-[#15803d] transition-all outline-none focus:text-[#15803d]"
              >
                {item}
              </Link>
            ))}
            
            <button 
              onMouseEnter={() => setActiveMenu('wilayah')}
              onFocus={() => setActiveMenu('wilayah')}
              className={`flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest transition-all outline-none ${
                activeMenu === 'wilayah' ? 'text-[#15803d]' : 'text-slate-600'
              }`}
            >
              Wilayah <ChevronDown size={14} className={`transition-transform duration-300 ${activeMenu === 'wilayah' ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* CTA & MOBILE TRIGGER */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => window.open('https://wa.me/6287780937884')}
              className="hidden sm:flex items-center gap-2 bg-[#052c17] text-[#bef264] px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-[#15803d] hover:text-white transition-all shadow-md active:scale-95 focus:ring-4 focus:ring-green-200 outline-none"
            >
              <Phone size={14} fill="currentColor" /> Hubungi Sales
            </button>
            <button 
              onClick={() => setActiveMenu('mobile')} 
              className="lg:hidden p-2 text-[#052c17] bg-green-50 rounded-lg focus:ring-2 focus:ring-[#15803d]"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* MEGA MENU DESKTOP */}
        <AnimatePresence>
          {activeMenu === 'wilayah' && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: 10 }}
              onMouseLeave={() => setActiveMenu(null)}
              className="absolute top-full left-0 w-full bg-white border-y border-slate-200 shadow-2xl hidden lg:block"
            >
              <div className="max-w-7xl mx-auto grid grid-cols-4 gap-12 p-12">
                {cityMenuGroups.map((group, idx) => (
                  <div key={idx} className="space-y-6">
                    <div className="flex items-center gap-2 text-[#15803d]">
                      <div className="w-1 h-4 bg-current rounded-full" />
                      <h4 className="text-[10px] font-black uppercase tracking-[0.3em]">{group.category}</h4>
                    </div>
                    <div className="flex flex-col gap-2">
                      {group.items.map((city) => (
                        <Link 
                          key={city.slug} 
                          href={`/supplier-sayur/${city.slug}/`} 
                          className="text-[13px] font-bold text-slate-600 hover:text-[#052c17] hover:translate-x-1 transition-all flex items-center gap-2 outline-none focus:text-[#15803d]"
                        >
                          <MapPin size={12} className="text-[#15803d]" />
                          {city.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {activeMenu === 'mobile' && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} 
              onClick={() => setActiveMenu(null)} 
              className="fixed inset-0 z-[110] bg-[#052c17]/60 backdrop-blur-sm lg:hidden" 
            />
            <motion.div 
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} 
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-[120] w-[85%] max-w-[360px] bg-white shadow-2xl flex flex-col lg:hidden"
            >
              <div className="p-6 flex items-center justify-between border-b border-slate-100">
                {mobileView === 'cities' ? (
                  <button onClick={() => setMobileView('main')} className="flex items-center gap-2 text-[#15803d] font-black text-xs uppercase tracking-widest outline-none">
                    <ArrowLeft size={16} /> Kembali
                  </button>
                ) : (
                  <span className="text-[10px] font-black text-[#052c17] uppercase tracking-[0.3em]">Menu Utama</span>
                )}
                <button onClick={() => setActiveMenu(null)} className="p-2 bg-slate-100 text-slate-700 rounded-lg outline-none">
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto">
                <AnimatePresence mode="wait">
                  {mobileView === 'main' ? (
                    <motion.div key="main" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} className="p-8 space-y-4">
                      {['Home', 'Gallery', 'About'].map((item) => (
                        <Link 
                          key={item} 
                          href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                          onClick={() => setActiveMenu(null)}
                          className="flex items-center justify-between py-4 text-xl font-black text-[#052c17] border-b border-slate-100 outline-none"
                        >
                          {item} <ChevronRight size={20} />
                        </Link>
                      ))}
                      <button onClick={() => setMobileView('cities')} className="w-full flex items-center justify-between py-6 text-xl font-black text-[#15803d] outline-none">
                        Wilayah <ChevronRight size={20} />
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div key="cities" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} className="divide-y divide-slate-100">
                      {cityMenuGroups.map((group, idx) => (
                        <div key={idx} className="bg-white">
                          <button 
                            onClick={() => setSelectedGroup(selectedGroup === idx ? null : idx)} 
                            className={`w-full p-6 flex items-center justify-between transition-colors outline-none ${selectedGroup === idx ? 'bg-green-50' : ''}`}
                          >
                            <span className="text-xs font-black text-[#052c17] uppercase tracking-widest">{group.category}</span>
                            <ChevronDown size={16} className={`transition-transform ${selectedGroup === idx ? 'rotate-180 text-[#15803d]' : 'text-slate-400'}`} />
                          </button>
                          <AnimatePresence>
                            {selectedGroup === idx && (
                              <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden bg-slate-50">
                                <div className="p-4 grid grid-cols-1 gap-1">
                                  {group.items.map((city) => (
                                    <Link 
                                      key={city.slug} 
                                      href={`/supplier-sayur/${city.slug}/`} 
                                      onClick={() => setActiveMenu(null)}
                                      className="flex items-center gap-3 p-4 text-sm font-bold text-slate-700 active:bg-white rounded-xl outline-none"
                                    >
                                      <MapPin size={14} className="text-[#15803d]" /> {city.name}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="p-8 bg-slate-50 border-t border-slate-200">
                <button onClick={() => window.open('https://wa.me/6287780937884')} className="w-full py-5 bg-[#052c17] text-[#bef264] rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl flex items-center justify-center gap-3 outline-none focus:ring-4 focus:ring-green-200">
                  <Phone size={16} fill="currentColor" /> Chat Sales
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};