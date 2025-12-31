"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, MapPin, Phone, ChevronRight, ArrowLeft, Leaf } from 'lucide-react';
import { cityMenuGroups } from '@/data/menuCities';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null); // 'wilayah' | 'mobile'
  const [mobileView, setMobileView] = useState('main'); // 'main' | 'cities'
  const [selectedGroup, setSelectedGroup] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reset mobile view saat menu ditutup
  useEffect(() => {
    if (activeMenu !== 'mobile') {
      const timer = setTimeout(() => {
        setMobileView('main');
        setSelectedGroup(null);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [activeMenu]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">
          
          {/* LOGO: Fresh Industrial Style */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-[#052c17] rounded-xl flex items-center justify-center transition-transform group-hover:rotate-6">
              <Leaf className="text-[#84cc16] w-5 h-5" fill="currentColor" />
            </div>
            <span className="text-xl font-[1000] tracking-tighter text-[#052c17]">
              GREEN<span className="text-[#16a34a]">FRESH</span>
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-10">
            {['Home', 'Gallery', 'About'].map((item) => (
              <Link 
                key={item} 
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="text-[11px] font-black uppercase tracking-[0.2em] text-[#052c17]/60 hover:text-[#16a34a] transition-all"
              >
                {item}
              </Link>
            ))}
            
            <button 
              onMouseEnter={() => setActiveMenu('wilayah')}
              className={`flex items-center gap-1.5 text-[11px] font-black uppercase tracking-[0.2em] transition-all ${
                activeMenu === 'wilayah' ? 'text-[#16a34a]' : 'text-[#052c17]/60'
              }`}
            >
              Wilayah <ChevronDown size={14} className={`transition-transform duration-300 ${activeMenu === 'wilayah' ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* CTA BUTTON */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => window.open('https://wa.me/6287780937884')}
              className="hidden sm:flex items-center gap-2 bg-[#16a34a] text-white px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-[#052c17] transition-all shadow-lg shadow-green-100 active:scale-95"
            >
              <Phone size={14} fill="currentColor" /> Hubungi Sales
            </button>
            <button 
              onClick={() => setActiveMenu('mobile')} 
              className="lg:hidden p-2 text-[#052c17] bg-green-50 rounded-lg"
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
              className="absolute top-full left-0 w-full bg-white border-y border-slate-100 shadow-2xl hidden lg:block"
            >
              <div className="max-w-7xl mx-auto grid grid-cols-4 gap-12 p-12">
                {cityMenuGroups.map((group, idx) => (
                  <div key={idx} className="space-y-6">
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-4 bg-[#16a34a] rounded-full" />
                      <h4 className="text-[10px] font-black text-[#16a34a] uppercase tracking-[0.3em]">{group.category}</h4>
                    </div>
                    <div className="flex flex-col gap-1">
                      {group.items.map((city) => (
                        <Link 
                          key={city.slug} 
                          href={`/supplier-sayur/${city.slug}/`} 
                          className="text-[13px] font-bold text-slate-500 hover:text-[#052c17] hover:translate-x-1 transition-all flex items-center gap-2 group/link"
                        >
                          <MapPin size={12} className="opacity-0 group-hover/link:opacity-100 text-[#16a34a] transition-all" />
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
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              onClick={() => setActiveMenu(null)} 
              className="fixed inset-0 z-[110] bg-[#052c17]/40 backdrop-blur-sm lg:hidden" 
            />
            <motion.div 
              initial={{ x: '100%' }} 
              animate={{ x: 0 }} 
              exit={{ x: '100%' }} 
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-[120] w-[85%] max-w-[360px] bg-white shadow-2xl flex flex-col lg:hidden"
            >
              {/* Header Mobile Menu */}
              <div className="p-6 flex items-center justify-between border-b border-slate-50">
                {mobileView === 'cities' ? (
                  <button onClick={() => setMobileView('main')} className="flex items-center gap-2 text-[#16a34a] font-black text-xs uppercase tracking-widest">
                    <ArrowLeft size={16} /> Kembali
                  </button>
                ) : (
                  <span className="text-[10px] font-black text-[#052c17] uppercase tracking-[0.3em]">Menu Utama</span>
                )}
                <button onClick={() => setActiveMenu(null)} className="p-2 bg-slate-50 rounded-lg text-slate-400">
                  <X size={20} />
                </button>
              </div>

              {/* Content Mobile Menu */}
              <div className="flex-1 overflow-y-auto">
                <AnimatePresence mode="wait">
                  {mobileView === 'main' ? (
                    <motion.div 
                      key="main" 
                      initial={{ opacity: 0, x: -10 }} 
                      animate={{ opacity: 1, x: 0 }} 
                      exit={{ opacity: 0, x: -10 }} 
                      className="p-8 space-y-4"
                    >
                      {['Home', 'Gallery', 'About'].map((item) => (
                        <Link 
                          key={item} 
                          href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                          onClick={() => setActiveMenu(null)}
                          className="flex items-center justify-between py-4 text-xl font-black text-[#052c17] border-b border-slate-50"
                        >
                          {item} <ChevronRight size={20} className="text-slate-200" />
                        </Link>
                      ))}
                      <button 
                        onClick={() => setMobileView('cities')} 
                        className="w-full flex items-center justify-between py-6 text-xl font-black text-[#16a34a]"
                      >
                        Wilayah <ChevronRight size={20} />
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="cities" 
                      initial={{ opacity: 0, x: 10 }} 
                      animate={{ opacity: 1, x: 0 }} 
                      exit={{ opacity: 0, x: 10 }} 
                      className="divide-y divide-slate-50"
                    >
                      {cityMenuGroups.map((group, idx) => (
                        <div key={idx} className="bg-white">
                          <button 
                            onClick={() => setSelectedGroup(selectedGroup === idx ? null : idx)} 
                            className={`w-full p-6 flex items-center justify-between transition-colors ${selectedGroup === idx ? 'bg-green-50' : ''}`}
                          >
                            <span className="text-xs font-black text-[#052c17] uppercase tracking-widest">{group.category}</span>
                            <ChevronDown size={16} className={`transition-transform duration-300 ${selectedGroup === idx ? 'rotate-180 text-[#16a34a]' : 'text-slate-300'}`} />
                          </button>
                          <AnimatePresence>
                            {selectedGroup === idx && (
                              <motion.div 
                                initial={{ height: 0 }} 
                                animate={{ height: 'auto' }} 
                                exit={{ height: 0 }} 
                                className="overflow-hidden bg-slate-50/30"
                              >
                                <div className="p-4 grid grid-cols-1 gap-1">
                                  {group.items.map((city) => (
                                    <Link 
                                      key={city.slug} 
                                      href={`/supplier-sayur/${city.slug}/`} 
                                      onClick={() => setActiveMenu(null)}
                                      className="flex items-center gap-3 p-4 text-sm font-bold text-slate-500 active:text-[#16a34a] active:bg-white rounded-xl transition-all"
                                    >
                                      <MapPin size={14} className="text-[#16a34a]/40" /> {city.name}
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

              {/* Footer Mobile Menu */}
              <div className="p-8 bg-slate-50 border-t border-slate-100">
                <button 
                  onClick={() => window.open('https://wa.me/6287780937884')}
                  className="w-full py-5 bg-[#052c17] text-[#84cc16] rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-green-900/10 flex items-center justify-center gap-3"
                >
                  <Phone size={16} fill="currentColor" /> Chat Sales B2B
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};