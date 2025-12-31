"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Truck, CheckCircle2, Navigation, MapPin } from 'lucide-react';
import { jabodetabekCities, getDefaultLogistics } from '@/data/cities';

export const LogisticsTimeline = ({ slug, cityName }) => {
  const cityData = jabodetabekCities.find(c => c.slug === slug);
  const steps = (cityData?.logistics && cityData.logistics.length > 0) 
    ? cityData.logistics 
    : getDefaultLogistics(cityName);

  return (
    <div className="relative bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/40 overflow-hidden">
      {/* Decorative Gradient Top */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#16a34a] via-[#84cc16] to-[#16a34a]" />

      <div className="p-8 lg:p-12">
        
        {/* HEADER: Clean & Bright */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-16">
          <div className="space-y-4 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 rounded-full border border-green-100">
              <div className="w-1.5 h-1.5 rounded-full bg-[#16a34a] animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-widest text-[#16a34a]">Logistics Tracking</span>
            </div>
            <h3 className="text-3xl lg:text-5xl font-[1000] text-[#052c17] tracking-tighter leading-none">
              JADWAL <span className="text-[#16a34a]">SUPPLY.</span>
            </h3>
            <div className="flex items-center gap-3 text-slate-400">
              <MapPin size={14} className="text-[#16a34a]" />
              <span className="text-xs font-bold uppercase tracking-widest">Rute: Cipanas — {cityName}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm text-[#16a34a]">
              <Truck size={20} />
            </div>
            <div className="text-left">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Status Fleet</p>
              <p className="text-xs font-black text-[#052c17] uppercase">Daily Express Active</p>
            </div>
          </div>
        </div>

        {/* CONTENT: Modern Light Timeline */}
        <div className="relative space-y-12 before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-50">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-14 group text-left"
            >
              {/* Checkpoint Circle */}
              <div className={`absolute left-0 top-0 w-10 h-10 rounded-full flex items-center justify-center border-4 border-white shadow-lg transition-all duration-500 z-10 ${
                index === steps.length - 1 
                ? 'bg-[#16a34a] scale-110 shadow-green-200' 
                : 'bg-white group-hover:border-green-50'
              }`}>
                {index === steps.length - 1 ? (
                  <CheckCircle2 size={18} className="text-white" />
                ) : (
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-100 group-hover:bg-[#16a34a] transition-colors" />
                )}
              </div>

              {/* Content Card: Light Style */}
              <div className="space-y-2">
                <div className="flex items-center gap-4">
                  <span className="text-[11px] font-black font-mono text-[#16a34a] bg-green-50 px-3 py-1 rounded-lg border border-green-100 shadow-sm">
                    {step.time}
                  </span>
                  <h4 className="font-black text-sm lg:text-lg text-[#052c17] tracking-tight transition-colors uppercase">
                    {step.title}
                  </h4>
                </div>
                
                <p className="text-[11px] lg:text-sm text-slate-400 font-bold leading-relaxed max-w-2xl">
                  {step.desc}
                </p>

                {/* Animated Line Marker */}
                <div className="flex items-center gap-1 opacity-20">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-1 h-1 rounded-full bg-[#16a34a]" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FOOTER: Minimalist Branding */}
        <div className="mt-20 pt-8 border-t border-slate-50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-50 rounded-lg">
              <Navigation size={14} className="text-[#16a34a]" />
            </div>
            <span className="text-[10px] font-black text-[#052c17] uppercase tracking-[0.3em]">Fresh Logistics Protocol</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={12} className="text-slate-300" />
            <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">Last Sync: Today 04:00 AM</span>
          </div>
        </div>

      </div>
    </div>
  );
};