"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navigation, MapPin, ArrowRight, Truck, Clock, PackageCheck, ShieldCheck, Box } from 'lucide-react';

export const DistrictRoute = ({ district }) => {
  const [isGpsActive, setIsGpsActive] = useState(false);
  const routes = district.deliveryRoute.split('-');

  // Simulasi sistem mengecek status pengiriman
  useEffect(() => {
    const timer = setTimeout(() => setIsGpsActive(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  const getETA = () => {
    const timeMatch = district.logistics.time.match(/(\d+\.\d+)/);
    return timeMatch ? `${parseInt(timeMatch[1]) + 1} Jam` : "2-3 Jam";
  };

  return (
    <section className="py-12 bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-10">
          {/* PERBAIKAN: Bg-blue-100 dengan text-blue-800 agar kontras tinggi */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-100 text-blue-800 rounded-full mb-4">
            <PackageCheck size={14} />
            <span className="text-xs font-black uppercase tracking-wider">Logistics Tracking</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-[1000] text-slate-950 tracking-tight">
            Alur <span className="text-blue-700">Distribusi.</span>
          </h2>
          {/* PERBAIKAN: text-slate-600 lebih terbaca dibanding slate-500 */}
          <p className="mt-2 text-slate-600 font-bold">Pengiriman terjadwal dari Cipanas ke {district.name}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Kolom Kiri: Jalur Transit */}
          <div className="lg:col-span-2 bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h4 className="font-black text-slate-900 mb-8 flex items-center gap-2 text-lg">
              <Navigation size={20} className="text-blue-700" /> 
              Rute Perjalanan
            </h4>
            
            <div className="relative space-y-6">
              {routes.map((route, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex flex-col items-center mt-1">
                    <div className={`w-4 h-4 rounded-full border-4 border-white shadow-sm ${
                      index === 0 ? 'bg-blue-700' : 
                      index === routes.length - 1 ? 'bg-green-600' : 
                      'bg-slate-400'
                    }`} />
                    {index !== routes.length - 1 && <div className="w-0.5 h-12 bg-slate-200" />}
                  </div>
                  {/* PERBAIKAN: Border lebih tegas (slate-200) dan bg sedikit lebih gelap */}
                  <div className="flex-1 p-4 rounded-2xl bg-slate-50 border border-slate-200 group hover:bg-white hover:shadow-md transition-all">
                    <div className="flex justify-between items-center">
                      {/* PERBAIKAN: Text-slate-500 untuk label kecil agar lolos contrast check */}
                      <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                        {index === 0 ? 'Titik Muat' : index === routes.length - 1 ? 'Titik Bongkar' : `Transit ${index}`}
                      </span>
                    </div>
                    <span className="text-slate-900 font-black text-lg leading-none">{route.trim()}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Kolom Kanan: Status Monitoring */}
          <div className="space-y-6">
            
            {/* ETA Card */}
            <div className={`p-8 rounded-3xl border transition-all duration-700 ${isGpsActive ? 'bg-slate-950 border-slate-800 shadow-2xl' : 'bg-slate-300 border-slate-400 animate-pulse'} text-white relative overflow-hidden`}>
              <div className="absolute -right-4 -bottom-4 opacity-10">
                <Truck size={120} />
              </div>

              <div className="relative z-10">
                <div className="flex justify-between items-center mb-10">
                  {/* PERBAIKAN: Bg-blue-600 agar lebih mencolok di bg hitam */}
                  <div className="px-3 py-1 bg-blue-600 rounded-lg text-[10px] font-black uppercase tracking-tighter text-white">
                    {isGpsActive ? 'GPS Monitoring' : 'Searching...'}
                  </div>
                  <div className={`w-2.5 h-2.5 rounded-full ${isGpsActive ? 'bg-green-400 animate-pulse' : 'bg-slate-500'}`} />
                </div>
                
                <p className="text-slate-300 text-sm font-bold uppercase tracking-widest">Estimasi Tiba</p>
                <h3 className="text-5xl font-black my-2 tracking-tighter text-white">{getETA()}</h3>
                
                <div className="flex items-center gap-2 mt-6 p-3 bg-white/10 rounded-xl border border-white/20">
                  <ShieldCheck size={16} className="text-blue-400" />
                  <span className="text-[10px] font-bold text-slate-100 uppercase">Kondisi muatan: Terjaga Aman</span>
                </div>
              </div>
            </div>

            {/* Info Kapasitas */}
            <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm group hover:border-blue-400 transition-all">
              <div className="flex items-center gap-4">
                {/* PERBAIKAN: Text-blue-700 untuk kontras di atas bg-blue-50 */}
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-700 group-hover:bg-blue-700 group-hover:text-white transition-all">
                  <Box size={24} />
                </div>
                <div>
                  <h5 className="font-black text-slate-900 text-sm uppercase">Kapasitas Muat</h5>
                  <p className="text-xs text-slate-600 font-bold">Pemuatan Optimal (Max 2 Ton)</p>
                </div>
              </div>
              <hr className="my-4 border-slate-100" />
              {/* PERBAIKAN: text-slate-800 dan bg-slate-200 agar tombol terbaca jelas */}
              <button className="w-full py-4 bg-slate-100 text-slate-800 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-blue-700 hover:text-white transition-all">
                Cek Jadwal Rutin
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};