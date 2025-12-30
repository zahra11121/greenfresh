"use client";

import React from 'react';
import { Mail, Phone, MapPin, ArrowUpRight, Globe } from 'lucide-react';
import { jabodetabekCities } from '@/data/cities';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    // PENGUBAHAN: Latar putih bersih dengan border atas hijau yang tegas
    <footer className="bg-white border-t-2 border-green-100 pt-16 lg:pt-20 font-sans">
      {/* Kontainer Luas (max-w-[1800px]) sesuai halaman utama */}
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-8 text-center lg:text-left">
            <div className="flex items-center gap-4 group cursor-pointer justify-center lg:justify-start">
              <div className="relative">
                <div className="w-12 h-12 bg-[#052c17] rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500 shadow-xl shadow-green-900/10">
                  <div className="w-5 h-5 border-2 border-[#84cc16] rounded-full opacity-50" />
                  <div className="absolute w-2 h-6 bg-[#84cc16] -rotate-45 rounded-full" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#16a34a] rounded-full border-2 border-white" />
              </div>

              <div className="flex flex-col text-left">
                <span className="text-2xl font-black text-[#052c17] leading-none tracking-tighter uppercase">
                  Green<span className="text-green-600">Fresh</span>
                </span>
              </div>
            </div>
            
            <h2 className="text-2xl lg:text-4xl font-serif italic font-black text-[#052c17] leading-[1.1] max-w-md tracking-tight mx-auto lg:mx-0">
              Membangun efisiensi rantai pasok sayuran dari <span className="text-green-600">Bumi Cipanas.</span>
            </h2>
            
            <div className="flex flex-wrap gap-2 lg:gap-3 justify-center lg:justify-start">
              <div className="px-4 py-2 bg-green-50 border border-green-100 rounded-full flex items-center gap-2 shadow-sm">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[10px] font-black text-green-700 uppercase tracking-widest">PKP Resmi</span>
              </div>
              <div className="px-4 py-2 bg-green-50 border border-green-100 rounded-full flex items-center gap-2 shadow-sm">
                <span className="text-[10px] font-black text-green-700 uppercase tracking-widest">10 Ton / Hari</span>
              </div>
            </div>
          </div>

          {/* Right Section: Navigation Links */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-4 lg:gap-12 pt-4">
            
            <div className="space-y-6">
              <h5 className="text-[11px] font-black uppercase tracking-[0.3em] text-green-600">Menu Utama</h5>
              <ul className="space-y-3">
                {[
                  { name: 'Home', link: '/' },
                  { name: 'Gallery Visual', link: '/gallery' },
                  { name: 'Tentang Kami', link: '/about' },
                  { name: 'Katalog Harga', link: '/#katalog' },
                ].map((item) => (
                  <li key={item.name}>
                    <a href={item.link} className="text-[14px] font-bold text-slate-500 hover:text-green-600 transition-all flex items-center gap-1 group">
                      {item.name} <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h5 className="text-[11px] font-black uppercase tracking-[0.3em] text-green-600">Hubungi Sales</h5>
              <div className="space-y-5">
                <a href="mailto:sales@greenfresh.co.id" className="group block">
                  <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1 tracking-widest">Email Inquiry</span>
                  <span className="text-[13px] font-black text-[#052c17] group-hover:text-green-600 break-all transition-colors underline decoration-green-100 decoration-2 underline-offset-4">sales@greenfresh.co.id</span>
                </a>
                <a href="https://wa.me/6287780937884" target="_blank" rel="noopener noreferrer" className="group block">
                  <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1 tracking-widest">WhatsApp B2B</span>
                  <span className="text-[13px] font-black text-[#052c17] group-hover:text-green-600 transition-colors underline decoration-green-100 decoration-2 underline-offset-4">0877 8093 7884</span>
                </a>
              </div>
            </div>

            <div className="col-span-2 md:col-span-1 space-y-6 pt-4 md:pt-0">
              <h5 className="text-[11px] font-black uppercase tracking-[0.3em] text-green-600">Operational Hub</h5>
              <div className="flex gap-3 items-start justify-center lg:justify-start">
                <div className="p-2 bg-green-50 rounded-lg text-green-600 shrink-0">
                  <MapPin size={16} />
                </div>
                <p className="text-[13px] font-bold text-slate-600 leading-relaxed uppercase tracking-tight text-left">
                  Jl. Kayumanis, Sukatani, <br />
                  Cipanas, Cianjur, <br /> 
                  Jawa Barat 43253
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SEO INTERNAL LINKS - Grid Lebih Padat */}
        <div className="py-12 border-t-2 border-green-50">
          <div className="flex items-center gap-3 mb-8">
            <Globe className="w-4 h-4 text-green-600" />
            <h5 className="text-[11px] font-black uppercase tracking-[0.4em] text-[#052c17]">Area Layanan Jabodetabek</h5>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-4">
            {jabodetabekCities.map((city) => (
              <a 
                key={city.slug} 
                href={`/supplier-sayur/${city.slug}/`} 
                className="text-[12px] font-bold text-slate-400 hover:text-green-600 hover:translate-x-1 transition-all duration-300"
              >
                Supplier Sayur {city.name}
              </a>
            ))}
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="py-10 border-t-2 border-green-50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                © {currentYear} CV Green Fresh Cipanas
              </span>
              <div className="flex items-center gap-8">
                 <a href="/privacy" className="text-[10px] font-black text-slate-500 hover:text-green-600 uppercase tracking-widest transition-colors">Privacy</a>
                 <a href="/terms" className="text-[10px] font-black text-slate-500 hover:text-green-600 uppercase tracking-widest transition-colors">Terms</a>
              </div>
            </div>
            <div className="px-5 py-2 border-2 border-green-100 rounded-full">
              <p className="text-[10px] font-black text-green-700 uppercase tracking-[0.2em]">
                Precision Supply Chain for Modern Industry
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Triple Accent Line - Signature Footer */}
      <div className="flex h-2 w-full">
        <div className="flex-[3] bg-[#052c17]" />
        <div className="flex-[1] bg-green-600" />
        <div className="flex-[1] bg-green-400" />
      </div>
    </footer>
  );
};