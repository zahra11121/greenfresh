"use client";

import React from 'react';
import { Mail, Phone, MapPin, ArrowUpRight, Globe } from 'lucide-react';
import { jabodetabekCities } from '@/data/cities';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#f8fafc] border-t border-slate-200 pt-16 lg:pt-24 font-sans">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
        
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16 lg:mb-20">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-8 text-center lg:text-left">
            <div className="flex items-center gap-4 group cursor-pointer justify-center lg:justify-start">
              <div className="relative">
                <div className="w-12 h-12 bg-[#052c17] rounded-tr-[20px] rounded-bl-[20px] rounded-tl-md rounded-br-md flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500 shadow-xl shadow-green-900/20">
                  <div className="w-5 h-5 border-2 border-[#84cc16] rounded-full opacity-50" />
                  <div className="absolute w-2 h-6 bg-[#84cc16] -rotate-45 rounded-full" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#16a34a] rounded-full border-4 border-[#f8fafc]" />
              </div>

              <div className="flex flex-col text-left">
                <span className="text-2xl font-black text-[#052c17] leading-none tracking-tighter uppercase">
                  Green<span className="text-[#16a34a]">Fresh</span>
                </span>
              </div>
            </div>
            
            <h2 className="text-xl lg:text-3xl font-bold text-[#052c17] leading-[1.2] max-w-md tracking-tight mx-auto lg:mx-0">
              Membangun efisiensi rantai pasok sayuran dari <span className="text-[#16a34a] italic font-serif">Bumi Cipanas.</span>
            </h2>
            
            <div className="flex flex-wrap gap-2 lg:gap-3 justify-center lg:justify-start">
              <div className="px-3 py-1.5 bg-white border border-slate-200 rounded-md flex items-center gap-2 shadow-sm">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[9px] lg:text-[10px] font-black text-slate-500 uppercase tracking-wider">PKP Resmi</span>
              </div>
              <div className="px-3 py-1.5 bg-white border border-slate-200 rounded-md flex items-center gap-2 shadow-sm">
                <span className="text-[9px] lg:text-[10px] font-black text-slate-500 uppercase tracking-wider">10 Ton / Hari</span>
              </div>
            </div>
          </div>

          {/* Right Section: Navigation Links */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-4 lg:gap-12 pt-4">
            
            <div className="space-y-5">
              <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#16a34a]">Menu Utama</h5>
              <ul className="space-y-3">
                {[
                  { name: 'Home', link: '/' },
                  { name: 'Gallery Visual', link: '/gallery' },
                  { name: 'Tentang Kami', link: '/about' },
                  { name: 'Katalog Harga', link: '/#katalog' },
                ].map((item) => (
                  <li key={item.name}>
                    <a href={item.link} className="text-[13px] font-bold text-slate-500 hover:text-[#052c17] transition-all flex items-center gap-1 group">
                      {item.name} <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all text-[#16a34a]" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-5">
              <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#16a34a]">Hubungi Sales</h5>
              <div className="space-y-4">
                <a href="mailto:sales@greenfresh.co.id" className="group block text-left lg:text-left">
                  <span className="text-[9px] font-bold text-slate-400 uppercase block mb-1">Email Inquiry</span>
                  <span className="text-[12px] font-bold text-slate-700 group-hover:text-[#16a34a] break-all">sales@greenfresh.co.id</span>
                </a>
                <a href="https://wa.me/6287780937884" target="_blank" rel="noopener noreferrer" className="group block text-left lg:text-left">
                  <span className="text-[9px] font-bold text-slate-400 uppercase block mb-1">WhatsApp B2B</span>
                  <span className="text-[12px] font-bold text-slate-700 group-hover:text-[#16a34a]">0877 8093 7884</span>
                </a>
              </div>
            </div>

            <div className="col-span-2 md:col-span-1 space-y-5 pt-4 md:pt-0 border-t border-slate-100 md:border-none">
              <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#16a34a]">Operational Hub</h5>
              <div className="flex gap-2 items-start justify-center lg:justify-start">
                <MapPin className="w-4 h-4 text-[#16a34a] shrink-0 mt-0.5" />
                <p className="text-[12px] font-bold text-slate-600 leading-relaxed uppercase tracking-tight text-left">
                  Jl. Kayumanis, Sukatani, <br className="hidden md:block" />
                  Cipanas, Cianjur, <br className="hidden md:block" /> 
                  Jawa Barat 43253
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SEO INTERNAL LINKS SECTION (FAT FOOTER) */}
        <div className="py-12 border-t border-slate-200">
          <div className="flex items-center gap-2 mb-8">
            <Globe className="w-4 h-4 text-[#16a34a]" />
            <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#052c17]">Cakupan Area Layanan Jabodetabek</h5>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-3">
            {jabodetabekCities.map((city) => (
              <a 
                key={city.slug} 
                href={`/supplier-sayur/${city.slug}/`} 
                className="text-[11px] font-bold text-slate-400 hover:text-[#16a34a] transition-colors duration-300"
              >
                Supplier Sayur {city.name}
              </a>
            ))}
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="py-8 border-t border-slate-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-10">
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">
                © {currentYear} CV Green Fresh Cipanas
              </span>
              <div className="flex items-center gap-6">
                 <a href="/privacy" className="text-[9px] font-black text-slate-400 hover:text-[#052c17] uppercase tracking-widest transition-colors">Privacy</a>
                 <a href="/terms" className="text-[9px] font-black text-slate-400 hover:text-[#052c17] uppercase tracking-widest transition-colors">Terms</a>
              </div>
            </div>
            <p className="text-[9px] font-bold text-slate-300 uppercase tracking-[0.1em] hidden sm:block">
              Precision Supply Chain for Modern Industry
            </p>
          </div>
        </div>
      </div>

      {/* Triple Accent Line */}
      <div className="flex h-1.5 w-full">
        <div className="flex-[3] bg-[#052c17]" />
        <div className="flex-[1] bg-[#16a34a]" />
        <div className="flex-[1] bg-[#84cc16]" />
      </div>
    </footer>
  );
};