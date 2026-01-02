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
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full mb-4">
            <PackageCheck size={14} />
            <span className="text-xs font-bold uppercase tracking-wider">Logistics Tracking</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-[1000] text-slate-900 tracking-tight">
            Alur <span className="text-blue-600">Distribusi.</span>
          </h2>
          <p className="mt-2 text-slate-500 font-medium">Pengiriman terjadwal dari Cipanas ke {district.name}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Kolom Kiri: Jalur Transit */}
          <div className="lg:col-span-2 bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h4 className="font-bold text-slate-800 mb-8 flex items-center gap-2 text-lg">
              <Navigation size={20} className="text-blue-600" /> 
              Rute Perjalanan
            </h4>
            
            <div className="relative space-y-6">
              {routes.map((route, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex flex-col items-center mt-1">
                    <div className={`w-4 h-4 rounded-full border-4 border-white shadow-sm ${
                      index === 0 ? 'bg-blue-600' : 
                      index === routes.length - 1 ? 'bg-green-500' : 
                      'bg-slate-300'
                    }`} />
                    {index !== routes.length - 1 && <div className="w-0.5 h-12 bg-slate-100" />}
                  </div>
                  <div className="flex-1 p-4 rounded-2xl bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-md transition-all">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        {index === 0 ? 'Titik Muat' : index === routes.length - 1 ? 'Titik Bongkar' : `Transit ${index}`}
                      </span>
                    </div>
                    <span className="text-slate-800 font-bold text-lg leading-none">{route.trim()}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Kolom Kanan: Status Monitoring */}
          <div className="space-y-6">
            
            {/* ETA Card - Sekarang pakai warna Biru agar netral */}
            <div className={`p-8 rounded-3xl border transition-all duration-700 ${isGpsActive ? 'bg-slate-900 border-slate-800 shadow-2xl' : 'bg-slate-200 border-slate-300 animate-pulse'} text-white relative overflow-hidden`}>
              {/* Dekorasi Background */}
              <div className="absolute -right-4 -bottom-4 opacity-10">
                <Truck size={120} />
              </div>

              <div className="relative z-10">
                <div className="flex justify-between items-center mb-10">
                  <div className="px-3 py-1 bg-blue-500 rounded-lg text-[10px] font-black uppercase tracking-tighter">
                    {isGpsActive ? 'GPS Monitoring' : 'Searching...'}
                  </div>
                  <div className={`w-2 h-2 rounded-full ${isGpsActive ? 'bg-green-400 animate-pulse' : 'bg-slate-400'}`} />
                </div>
                
                <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">Estimasi Tiba</p>
                <h3 className="text-5xl font-black my-2 tracking-tighter text-white">{getETA()}</h3>
                
                <div className="flex items-center gap-2 mt-6 p-3 bg-white/5 rounded-xl border border-white/10">
                  <ShieldCheck size={16} className="text-blue-400" />
                  <span className="text-[10px] font-medium text-slate-300 uppercase">Barang dalam kondisi aman</span>
                </div>
              </div>
            </div>

            {/* Info Kapasitas - Menggantikan Suhu */}
            <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm group hover:border-blue-200 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Box size={24} />
                </div>
                <div>
                  <h5 className="font-black text-slate-800 text-sm uppercase">Kapasitas Muat</h5>
                  <p className="text-xs text-slate-500 font-medium">Pemuatan Optimal (Max 2 Ton)</p>
                </div>
              </div>
              <hr className="my-4 border-slate-50" />
              <button className="w-full py-4 bg-slate-100 text-slate-600 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-blue-600 hover:text-white transition-all">
                Cek Jadwal Rutin
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};