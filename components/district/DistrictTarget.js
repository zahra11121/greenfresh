"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Building, Coffee, Utensils, Hotel, Home, Store, Users, Briefcase } from 'lucide-react';

export const DistrictTarget = ({ district }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Icon mapping yang lebih variatif
  const getIcon = (clientType, index) => {
    const icons = [
      <Building className="w-6 h-6 md:w-7 md:h-7" />,
      <Coffee className="w-6 h-6 md:w-7 md:h-7" />,
      <Utensils className="w-6 h-6 md:w-7 md:h-7" />,
      <Hotel className="w-6 h-6 md:w-7 md:h-7" />,
      <Home className="w-6 h-6 md:w-7 md:h-7" />,
      <Store className="w-6 h-6 md:w-7 md:h-7" />,
      <Users className="w-6 h-6 md:w-7 md:h-7" />,
      <Briefcase className="w-6 h-6 md:w-7 md:h-7" />
    ];
    
    if (clientType.includes('Restoran') || clientType.includes('Fine Dining')) return icons[2];
    if (clientType.includes('Cafe') || clientType.includes('Coffee')) return icons[1];
    if (clientType.includes('Hotel') || clientType.includes('Bintang')) return icons[3];
    if (clientType.includes('Catering') || clientType.includes('Office')) return icons[0];
    if (clientType.includes('Warung') || clientType.includes('Rumah Makan')) return icons[4];
    if (clientType.includes('Mall') || clientType.includes('Food Court')) return icons[5];
    if (clientType.includes('Catering') || clientType.includes('Corporate')) return icons[7];
    return icons[index % icons.length];
  };

  // Color variants untuk konsistensi visual
  const colorVariants = [
    { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-100', activeBg: 'from-blue-600 to-blue-800' },
    { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-100', activeBg: 'from-green-600 to-green-800' },
    { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-100', activeBg: 'from-purple-600 to-purple-800' },
    { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-100', activeBg: 'from-orange-600 to-orange-800' },
    { bg: 'bg-rose-50', text: 'text-rose-600', border: 'border-rose-100', activeBg: 'from-rose-600 to-rose-800' },
    { bg: 'bg-cyan-50', text: 'text-cyan-600', border: 'border-cyan-100', activeBg: 'from-cyan-600 to-cyan-800' },
    { bg: 'bg-amber-50', text: 'text-amber-600', border: 'border-amber-100', activeBg: 'from-amber-600 to-amber-800' },
    { bg: 'bg-indigo-50', text: 'text-indigo-600', border: 'border-indigo-100', activeBg: 'from-indigo-600 to-indigo-800' }
  ];

  const clients = district.clientFocus.split(', ');

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header yang lebih compact */}
        <div className="mb-12 md:mb-16 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4 md:space-y-6"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-green-50 border border-green-200 rounded-full">
              <div className="w-2 h-2 rounded-full bg-[#15803d] animate-pulse" />
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#15803d]">Client Segments</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-[1000] text-[#052c17] tracking-tighter leading-tight">
              Spesialisasi <span className="text-[#15803d]">Layanan.</span>
            </h2>
            
            <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto font-medium px-4">
              Fokus melayani berbagai segmen bisnis kuliner di {district.name}
            </p>
          </motion.div>
        </div>

        {/* Grid 2 kolom mobile, 4 kolom desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {clients.map((client, index) => {
            const isActive = activeIndex === index;
            const colors = colorVariants[index % colorVariants.length];
            const icon = getIcon(client, index);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                onClick={() => setActiveIndex(isActive ? null : index)}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                className={`group relative rounded-xl md:rounded-2xl transition-all duration-300 cursor-pointer h-full flex flex-col
                  ${isActive 
                    ? `bg-gradient-to-br ${colors.activeBg} shadow-2xl scale-[1.02]` 
                    : `bg-white border ${colors.border} shadow-sm hover:shadow-md`
                  }`}
              >
                
                <div className="p-5 md:p-6 flex flex-col flex-1">
                  {/* Header dengan Icon dan Number */}
                  <div className="flex items-start justify-between mb-4 md:mb-6">
                    <div className={`p-3 rounded-lg md:rounded-xl transition-all duration-300
                      ${isActive 
                        ? 'bg-white/20 text-white' 
                        : `${colors.bg} ${colors.text}`
                      }`}
                    >
                      {icon}
                    </div>
                    <span className={`text-2xl md:text-3xl font-black transition-colors duration-300
                      ${isActive ? 'text-white/30' : 'text-slate-100'}`}
                    >
                      0{index + 1}
                    </span>
                  </div>

                  {/* Content - Compact dan professional */}
                  <div className="space-y-3 md:space-y-4 flex-1">
                    <div>
                      <h3 className={`text-sm md:text-base font-black leading-tight transition-colors duration-300 line-clamp-2
                        ${isActive ? 'text-white' : 'text-[#052c17]'}`}
                      >
                        {client}
                      </h3>
                      
                      {/* Accent line */}
                      <div className={`h-1 w-8 mt-2 transition-all duration-300 rounded-full
                        ${isActive ? 'bg-white/60' : colors.text.replace('text', 'bg')}`} 
                      />
                    </div>
                    
                    {/* Description yang lebih pendek */}
                    <p className={`text-xs md:text-sm leading-relaxed transition-colors duration-300 line-clamp-3
                      ${isActive ? 'text-white/90' : 'text-slate-600'}`}
                    >
                      {district.angle.toLowerCase().includes(client.toLowerCase().split(' ')[0]) 
                        ? district.angle.substring(0, 100) + '...'
                        : `Supply chain khusus untuk ${client.toLowerCase().split(' ')[0]} di ${district.name}`
                      }
                    </p>
                  </div>

                  {/* Footer dengan CTAs */}
                  <div className={`mt-4 md:mt-6 pt-4 border-t flex items-center justify-between transition-colors duration-300
                    ${isActive ? 'border-white/20' : 'border-slate-100'}`}
                  >
                    <span className={`text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-colors duration-300
                      ${isActive ? 'text-white/80' : colors.text}`}
                    >
                      Expert Support
                    </span>
                    <ArrowUpRight className={`transition-all duration-300 w-4 h-4 md:w-5 md:h-5
                      ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-[#15803d] group-hover:translate-x-0.5 group-hover:-translate-y-0.5'}
                    `} />
                  </div>
                </div>

                {/* Hover/Active indicator */}
                <div className={`absolute inset-0 rounded-xl md:rounded-2xl border-2 pointer-events-none transition-all duration-300
                  ${isActive ? 'border-white/30' : 'border-transparent group-hover:border-green-200'}`}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Summary Stats Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-gradient-to-r from-[#f8fafc] to-white border border-green-100 rounded-2xl">
            <div className="text-center sm:text-left">
              <p className="text-sm font-black text-[#052c17] mb-1">Total Segmen Dilayani</p>
              <p className="text-2xl md:text-3xl font-black text-[#15803d]">{clients.length}</p>
            </div>
            
            <div className="h-6 w-px bg-green-100 hidden sm:block" />
            
            <div className="text-center sm:text-left">
              <p className="text-sm font-black text-[#052c17] mb-1">Area Coverage</p>
              <p className="text-lg font-bold text-slate-700">{district.name}</p>
            </div>
            
            <div className="h-6 w-px bg-green-100 hidden sm:block" />
            
            <div className="text-center sm:text-left">
              <p className="text-sm font-black text-[#052c17] mb-1">Service Level</p>
              <p className="text-lg font-bold text-slate-700">Premium B2B</p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-white border border-green-200 rounded-2xl shadow-sm"
          >
            <div className="text-center sm:text-left">
              <h4 className="text-base md:text-lg font-black text-[#052c17] mb-1">
                Butuh Solusi Khusus untuk Bisnis Anda?
              </h4>
              <p className="text-sm text-slate-600">
                Konsultasikan kebutuhan supply chain dengan tim kami
              </p>
            </div>
            <a 
              href="#kemitraan" 
              className="inline-flex items-center gap-2 bg-[#052c17] text-white px-6 py-3 rounded-xl text-sm font-bold hover:bg-[#15803d] transition-all duration-300 whitespace-nowrap"
            >
              <ArrowUpRight size={16} />
              Konsultasi Sekarang
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};