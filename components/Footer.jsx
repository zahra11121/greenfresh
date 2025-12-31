"use client";

import React from 'react';
import { Mail, Phone, MapPin, ArrowUpRight, Globe, Leaf, Zap, ChevronRight } from 'lucide-react';
import { jabodetabekCities } from '@/data/cities';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#052c17] text-white pt-20 overflow-hidden font-sans">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* SECTION 1: CORE BRANDING */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          
          <div className="lg:col-span-5 space-y-10">
            {/* Logo Group */}
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-12 h-12 bg-[#16a34a] rounded-2xl flex items-center justify-center transition-all group-hover:bg-[#84cc16] group-hover:rotate-12 shadow-2xl shadow-green-900/50">
                <Leaf className="text-white group-hover:text-[#052c17] w-6 h-6 transition-colors" fill="currentColor" />
              </div>
              <span className="text-2xl font-[1000] tracking-tighter uppercase">
                Green<span className="text-[#16a34a] group-hover:text-[#84cc16] transition-colors">Fresh</span>
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-black leading-[0.95] tracking-[ -0.05em] uppercase">
              Rantai Pasok <br />
              <span className="text-[#16a34a]">Terintegrasi.</span>
            </h2>
            
            <div className="flex flex-wrap gap-4">
              <div className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl flex items-center gap-3 backdrop-blur-sm">
                <div className="w-2 h-2 bg-[#84cc16] rounded-full animate-pulse shadow-[0_0_10px_#84cc16]" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">PKP Official</span>
              </div>
              <div className="px-5 py-2.5 bg-[#16a34a] rounded-xl flex items-center gap-3 shadow-lg shadow-green-900/20">
                <Zap size={14} className="text-[#052c17]" fill="currentColor" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#052c17]">High Capacity</span>
              </div>
            </div>
          </div>

          {/* SECTION 2: NAVIGATION BOX */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            
            <div className="space-y-8">
              <div className="inline-block border-b-2 border-[#16a34a] pb-2">
                <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#84cc16]">Sitemap</h5>
              </div>
              <ul className="space-y-4">
                {['Home', 'Gallery', 'About', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-sm font-bold text-white/60 hover:text-[#84cc16] transition-all flex items-center gap-2 group">
                      <ChevronRight size={14} className="text-[#16a34a] opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <div className="inline-block border-b-2 border-[#16a34a] pb-2">
                <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#84cc16]">Inquiry</h5>
              </div>
              <div className="space-y-6">
                <a href="mailto:sales@greenfresh.co.id" className="group block space-y-1">
                  <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest block">Email</span>
                  <span className="text-sm font-black text-white group-hover:text-[#84cc16] transition-colors break-all">
                    sales@greenfresh.co.id
                  </span>
                </a>
                <a href="https://wa.me/6287780937884" className="group block space-y-1">
                  <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest block">WhatsApp</span>
                  <span className="text-sm font-black text-white group-hover:text-[#84cc16] transition-colors">
                    0877 8093 7884
                  </span>
                </a>
              </div>
            </div>

            <div className="col-span-2 md:col-span-1 space-y-8">
              <div className="inline-block border-b-2 border-[#16a34a] pb-2">
                <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#84cc16]">Base</h5>
              </div>
              <div className="flex gap-4">
                <MapPin size={20} className="text-[#16a34a] shrink-0" />
                <p className="text-xs font-bold text-white/60 leading-relaxed uppercase tracking-wider">
                  Sukatani, Cipanas, <br /> 
                  Cianjur, Jawa Barat
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* SECTION 3: AREA CLOUD - THE "GREEN" BOX */}
        <div className="bg-white/5 rounded-[2.5rem] p-8 lg:p-12 border border-white/10 mb-20 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity translate-x-10 translate-y-[-10px]">
            <Globe size={200} />
          </div>
          
          <div className="flex items-center gap-4 mb-10">
            <Globe className="w-5 h-5 text-[#84cc16]" />
            <h5 className="text-[11px] font-black uppercase tracking-[0.5em]">Distribution Area</h5>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-6">
            {jabodetabekCities.map((city) => (
              <a 
                key={city.slug} 
                href={`/supplier-sayur/${city.slug}/`} 
                className="text-[11px] font-bold text-white/40 hover:text-[#84cc16] hover:translate-x-1 transition-all flex items-center gap-2"
              >
                <div className="w-1 h-1 bg-[#16a34a] rounded-full" />
                {city.name}
              </a>
            ))}
          </div>
        </div>

        {/* SECTION 4: BOTTOM BAR */}
        <div className="pb-12 flex flex-col md:flex-row justify-between items-center gap-10 border-t border-white/10 pt-12">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#84cc16]">
              CV Green Fresh Cipanas © {currentYear}
            </p>
            <div className="flex gap-8">
              <a href="/privacy" className="text-[10px] font-bold text-white/30 hover:text-white uppercase tracking-widest transition-colors">Privacy</a>
              <a href="/terms" className="text-[10px] font-bold text-white/30 hover:text-white uppercase tracking-widest transition-colors">Terms</a>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden sm:block text-right">
                <p className="text-[9px] font-black uppercase tracking-[0.4em] text-white/40 leading-none">Standardized</p>
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white">Logistics B2B</p>
            </div>
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center">
                <Leaf className="text-[#052c17] w-6 h-6" fill="currentColor" />
            </div>
          </div>
        </div>

      </div>

      {/* Industrial Signature Line */}
      <div className="flex h-3 w-full">
        <div className="bg-[#16a34a] flex-1" />
        <div className="bg-[#84cc16] flex-1" />
        <div className="bg-white flex-1" />
      </div>
    </footer>
  );
};