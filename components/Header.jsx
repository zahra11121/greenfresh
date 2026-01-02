"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, MapPin, Phone, 
  ChevronRight, ArrowLeft, Leaf, Pause, Play, 
  Building2, Briefcase, Package, ShoppingBag
} from 'lucide-react';
import { cityMenuGroups } from '@/data/menuCities';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null); 
  const [mobileView, setMobileView] = useState('main'); 
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  // Ref untuk mendeteksi klik di luar
  const megaMenuRef = useRef(null);
  const triggerRef = useRef(null);

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

  // Deteksi klik di luar untuk menutup mega menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Jika mega menu terbuka dan klik di luar
      if (activeMenu === 'wilayah') {
        // Cek apakah klik di luar mega menu dan trigger button
        if (
          megaMenuRef.current && 
          !megaMenuRef.current.contains(event.target) &&
          triggerRef.current && 
          !triggerRef.current.contains(event.target)
        ) {
          setActiveMenu(null);
        }
      }
    };

    // Tambahkan event listener
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    // Cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [activeMenu]);

  // Handler untuk toggle mega menu
  const handleMegaMenuToggle = () => {
    setActiveMenu(activeMenu === 'wilayah' ? null : 'wilayah');
  };

  // Bahasa Khusus B2B Procurement
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
      {/* 1. TOP ANNOUNCEMENT BAR - Professional B2B */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div 
            initial={{ y: -40 }}
            animate={{ y: 0 }}
            exit={{ y: -40 }}
            className="fixed top-0 left-0 right-0 z-[110] bg-gradient-to-r from-[#052c17] to-[#166534] text-white h-10 md:h-9 flex items-center shadow-lg border-b border-[#15803d]/30"
          >
            <div className="max-w-7xl mx-auto w-full px-4 md:px-6 flex items-center overflow-hidden">
              {/* Pause/Play Button */}
              <button 
                onClick={() => setIsPaused(!isPaused)}
                className="z-20 p-1.5 mr-3 md:mr-4 hover:bg-white/20 rounded-md transition-colors focus:ring-2 focus:ring-[#bef264] outline-none flex-shrink-0"
                aria-label={isPaused ? "Putar running text" : "Hentikan running text"}
              >
                {isPaused ? <Play size={12} className="w-3 h-3" /> : <Pause size={12} className="w-3 h-3" />}
              </button>

              {/* Ticker Content */}
              <div className="flex whitespace-nowrap overflow-hidden flex-1 relative items-center min-h-[20px]">
                <motion.div 
                  animate={isPaused ? {} : { x: ["0%", "-50%"] }}
                  transition={{ repeat: Infinity, ease: "linear", duration: 60 }}
                  className="flex items-center gap-8 md:gap-12 text-[9px] md:text-[10px] font-black uppercase tracking-[0.25em] md:tracking-[0.3em]"
                  aria-hidden="true"
                >
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex items-center gap-8 md:gap-12">
                      {tickerItems.map((text, idx) => (
                        <span key={idx} className="flex items-center gap-3 md:gap-4">
                          <span className="w-1.5 h-1.5 bg-[#bef264] rounded-full flex-shrink-0" />
                          <span className="text-white/95 hover:text-white transition-colors">{text}</span>
                        </span>
                      ))}
                    </div>
                  ))}
                </motion.div>
                <span className="sr-only">Procurement Info: {tickerItems.join(", ")}</span>
              </div>

              {/* Desktop Contact Badge */}
              <div className="hidden md:flex items-center gap-3 ml-4 pl-4 border-l border-white/20">
                <Phone size={12} className="text-[#bef264]" />
                <a 
                  href="tel:+6287780937884"
                  className="text-[10px] font-bold text-white/90 hover:text-white transition-colors"
                >
                  0877-8093-7884
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. MAIN NAVIGATION - Professional Desktop & Mobile */}
      <nav 
        aria-label="Navigasi Utama"
        className={`fixed left-0 right-0 z-[100] transition-all duration-500 ${
          isScrolled 
            ? 'top-0 bg-white/98 backdrop-blur-lg shadow-xl py-3 md:py-4' 
            : 'top-10 md:top-9 bg-white/98 backdrop-blur-md py-5 md:py-6 border-b border-slate-100/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
          
          {/* LOGO - Professional */}
          <Link 
            href="/" 
            className="flex items-center gap-3 group outline-none focus:ring-2 focus:ring-[#15803d] rounded-lg p-1 -ml-1"
          >
            <div className="w-10 h-10 md:w-11 md:h-11 bg-gradient-to-br from-[#052c17] to-[#15803d] rounded-xl flex items-center justify-center transition-all duration-300 group-hover:rotate-6 group-hover:shadow-lg">
              <Leaf className="text-[#bef264] w-5 h-5 md:w-6 md:h-6" fill="currentColor" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-[1000] tracking-tighter text-[#052c17] leading-tight">
                GREEN<span className="text-[#15803d]">FRESH</span>
              </span>
              <span className="text-[9px] md:text-[10px] font-bold text-slate-500 uppercase tracking-[0.15em]">
                B2B Supplier
              </span>
            </div>
          </Link>

          {/* DESKTOP MENU - Professional Layout */}
          <div className="hidden lg:flex items-center gap-8">
            {[
              { label: 'Home', href: '/' },
              { label: 'Gallery', href: '/gallery' },
              { label: 'About', href: '/about' },
              { label: 'Produk', href: '/produk' }
            ].map((item) => (
              <Link 
                key={item.label} 
                href={item.href}
                className="relative text-[11px] font-bold uppercase tracking-[0.15em] text-slate-700 hover:text-[#15803d] transition-all duration-300 outline-none focus:text-[#15803d] group/nav"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#15803d] group-hover/nav:w-full transition-all duration-300" />
              </Link>
            ))}
            
            {/* Mega Menu Trigger */}
            <div className="relative" ref={triggerRef}>
              <button 
                onClick={handleMegaMenuToggle}
                onMouseEnter={() => setActiveMenu('wilayah')}
                onFocus={() => setActiveMenu('wilayah')}
                className={`flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] transition-all duration-300 outline-none ${
                  activeMenu === 'wilayah' ? 'text-[#15803d]' : 'text-slate-700 hover:text-[#15803d]'
                }`}
              >
                <Building2 size={14} />
                Wilayah
                <ChevronDown size={14} className={`transition-transform duration-300 ${activeMenu === 'wilayah' ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </div>

          {/* CTA & MOBILE TRIGGER */}
          <div className="flex items-center gap-3">
            {/* Desktop CTA */}
            <button 
              onClick={() => window.open('https://wa.me/6287780937884')}
              className="hidden md:flex items-center gap-3 bg-gradient-to-r from-[#052c17] to-[#166534] text-white px-6 py-3 rounded-xl text-[11px] font-bold uppercase tracking-[0.15em] hover:from-[#15803d] hover:to-[#16a34a] transition-all duration-300 shadow-lg hover:shadow-xl active:scale-[0.98] focus:ring-4 focus:ring-green-200 outline-none"
            >
              <Briefcase size={14} />
              <span>Contact Procurement</span>
            </button>
            
            {/* Mobile Menu Trigger */}
            <button 
              onClick={() => setActiveMenu('mobile')} 
              className="lg:hidden p-2.5 text-[#052c17] bg-gradient-to-br from-green-50 to-white border border-green-100 rounded-xl shadow-sm focus:ring-2 focus:ring-[#15803d] outline-none"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>

        {/* MEGA MENU DESKTOP - Professional Grid */}
        <AnimatePresence>
          {activeMenu === 'wilayah' && (
            <motion.div 
              ref={megaMenuRef}
              initial={{ opacity: 0, y: 10, height: 0 }} 
              animate={{ opacity: 1, y: 0, height: 'auto' }} 
              exit={{ opacity: 0, y: 10, height: 0 }}
              onMouseLeave={() => setActiveMenu(null)}
              className="absolute top-full left-0 w-full bg-white/98 backdrop-blur-lg border-t border-slate-200/80 shadow-2xl overflow-hidden hidden lg:block"
            >
              <div className="max-w-7xl mx-auto p-8 grid grid-cols-4 gap-8">
                {cityMenuGroups.map((group, idx) => (
                  <div key={idx} className="space-y-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center">
                        {idx === 0 ? <Building2 size={16} className="text-[#15803d]" /> :
                         idx === 1 ? <ShoppingBag size={16} className="text-[#15803d]" /> :
                         idx === 2 ? <Package size={16} className="text-[#15803d]" /> :
                         <Briefcase size={16} className="text-[#15803d]" />}
                      </div>
                      <h4 className="text-xs font-bold text-[#052c17] uppercase tracking-[0.1em]">{group.category}</h4>
                    </div>
                    <div className="space-y-2">
                      {group.items.map((city) => (
                        <Link 
                          key={city.slug} 
                          href={`/supplier-sayur/${city.slug}/`} 
                          onClick={() => setActiveMenu(null)} // Tutup menu saat link diklik
                          className="flex items-center gap-3 p-3 text-sm font-medium text-slate-700 hover:text-[#052c17] hover:bg-green-50/50 rounded-lg transition-all duration-300 outline-none focus:bg-green-50 focus:text-[#15803d] group/city"
                        >
                          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-green-100 to-white border border-green-200 flex items-center justify-center group-hover/city:border-[#15803d] transition-colors">
                            <MapPin size={12} className="text-[#15803d]" />
                          </div>
                          <span>{city.name}</span>
                          <ChevronRight size={14} className="ml-auto text-slate-300 group-hover/city:text-[#15803d] transition-colors" />
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

      {/* MOBILE DRAWER - Professional & Clean */}
      <AnimatePresence>
        {activeMenu === 'mobile' && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              onClick={() => setActiveMenu(null)} 
              className="fixed inset-0 z-[110] bg-[#052c17]/80 backdrop-blur-sm lg:hidden" 
            />
            
            {/* Drawer */}
            <motion.div 
              initial={{ x: '100%' }} 
              animate={{ x: 0 }} 
              exit={{ x: '100%' }} 
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-[120] w-full max-w-md bg-white shadow-2xl flex flex-col lg:hidden"
            >
              {/* Drawer Header */}
              <div className="p-6 flex items-center justify-between border-b border-slate-100 bg-gradient-to-r from-white to-green-50/30">
                <div className="flex items-center gap-3">
                  {mobileView === 'cities' ? (
                    <button 
                      onClick={() => setMobileView('main')} 
                      className="flex items-center gap-2 text-[#15803d] font-bold text-sm outline-none"
                    >
                      <ArrowLeft size={18} />
                    </button>
                  ) : (
                    <div className="w-10 h-10 bg-gradient-to-br from-[#052c17] to-[#15803d] rounded-xl flex items-center justify-center">
                      <Leaf size={20} className="text-[#bef264]" fill="currentColor" />
                    </div>
                  )}
                  <span className="text-sm font-bold text-[#052c17]">
                    {mobileView === 'main' ? 'Menu' : 'Pilih Wilayah'}
                  </span>
                </div>
                <button 
                  onClick={() => setActiveMenu(null)} 
                  className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors outline-none"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Drawer Content */}
              <div className="flex-1 overflow-y-auto">
                <AnimatePresence mode="wait">
                  {mobileView === 'main' ? (
                    <motion.div 
                      key="main" 
                      initial={{ opacity: 0, x: -10 }} 
                      animate={{ opacity: 1, x: 0 }} 
                      exit={{ opacity: 0, x: -10 }} 
                      className="divide-y divide-slate-100"
                    >
                      {[
                        { label: 'Home', href: '/' },
                        { label: 'Gallery', href: '/gallery' },
                        { label: 'About', href: '/about' },
                        { label: 'Produk', href: '/produk' }
                      ].map((item) => (
                        <Link 
                          key={item.label} 
                          href={item.href} 
                          onClick={() => setActiveMenu(null)}
                          className="flex items-center justify-between p-5 text-base font-medium text-[#052c17] hover:bg-green-50/50 transition-colors outline-none"
                        >
                          <span>{item.label}</span>
                          <ChevronRight size={18} className="text-slate-300" />
                        </Link>
                      ))}
                      
                      <button 
                        onClick={() => setMobileView('cities')} 
                        className="w-full flex items-center justify-between p-5 text-base font-bold text-[#15803d] hover:bg-green-50/50 transition-colors outline-none"
                      >
                        <div className="flex items-center gap-3">
                          <Building2 size={18} />
                          <span>Pilih Wilayah</span>
                        </div>
                        <ChevronRight size={18} />
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="cities" 
                      initial={{ opacity: 0, x: 10 }} 
                      animate={{ opacity: 1, x: 0 }} 
                      exit={{ opacity: 0, x: 10 }} 
                      className="divide-y divide-slate-100"
                    >
                      {cityMenuGroups.map((group, idx) => (
                        <div key={idx} className="bg-white">
                          <button 
                            onClick={() => setSelectedGroup(selectedGroup === idx ? null : idx)} 
                            className={`w-full p-5 flex items-center justify-between transition-colors outline-none ${
                              selectedGroup === idx ? 'bg-green-50' : 'hover:bg-slate-50'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-100 to-white border border-green-200 flex items-center justify-center">
                                {idx === 0 ? <Building2 size={16} className="text-[#15803d]" /> :
                                 idx === 1 ? <ShoppingBag size={16} className="text-[#15803d]" /> :
                                 idx === 2 ? <Package size={16} className="text-[#15803d]" /> :
                                 <Briefcase size={16} className="text-[#15803d]" />}
                              </div>
                              <span className="text-sm font-medium text-[#052c17]">{group.category}</span>
                            </div>
                            <ChevronDown 
                              size={18} 
                              className={`transition-transform duration-300 ${
                                selectedGroup === idx ? 'rotate-180 text-[#15803d]' : 'text-slate-400'
                              }`} 
                            />
                          </button>
                          
                          <AnimatePresence>
                            {selectedGroup === idx && (
                              <motion.div 
                                initial={{ height: 0, opacity: 0 }} 
                                animate={{ height: 'auto', opacity: 1 }} 
                                exit={{ height: 0, opacity: 0 }} 
                                className="overflow-hidden bg-slate-50/50"
                              >
                                <div className="p-4 grid grid-cols-1 gap-2">
                                  {group.items.map((city) => (
                                    <Link 
                                      key={city.slug} 
                                      href={`/supplier-sayur/${city.slug}/`} 
                                      onClick={() => setActiveMenu(null)}
                                      className="flex items-center gap-3 p-3 text-sm font-medium text-slate-700 hover:text-[#052c17] hover:bg-white active:bg-green-50 rounded-lg transition-colors outline-none"
                                    >
                                      <MapPin size={16} className="text-[#15803d] flex-shrink-0" /> 
                                      <span>{city.name}</span>
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

              {/* Drawer Footer */}
              <div className="p-6 bg-gradient-to-r from-green-50/50 to-white border-t border-slate-100">
                <button 
                  onClick={() => window.open('https://wa.me/6287780937884')} 
                  className="w-full py-4 bg-gradient-to-r from-[#052c17] to-[#166534] text-white rounded-xl font-bold text-sm uppercase tracking-[0.1em] shadow-lg flex items-center justify-center gap-3 outline-none hover:from-[#15803d] hover:to-[#16a34a] transition-all duration-300"
                >
                  <Briefcase size={18} />
                  <span>Contact Procurement</span>
                </button>
                
                <div className="mt-4 text-center">
                  <a 
                    href="tel:+6287780937884" 
                    className="text-xs text-slate-600 hover:text-[#15803d] transition-colors inline-flex items-center gap-2"
                  >
                    <Phone size={14} />
                    0877-8093-7884
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};