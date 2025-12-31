// components/city/LiveStats.js
import React from 'react';

export const LiveStats = () => {
  const stats = [
    { label: "Kapasitas Harian", value: "2.5", unit: "TON" },
    { label: "Titik Distribusi", value: "45", unit: "AREA" },
    { label: "Waktu Tempuh", value: "4", unit: "JAM" },
    { label: "Akurasi Sortasi", value: "99", unit: "%" },
  ];

  return (
    <section className="bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 group">
          {stats.map((stat, i) => (
            <div 
              key={i} 
              className={`
                p-8 lg:p-12 flex flex-col items-center text-center transition-all duration-300
                hover:bg-slate-50 border-slate-100
                ${i % 2 === 0 ? 'border-r' : 'lg:border-r'} 
                ${i < 2 ? 'border-b' : 'lg:border-b-0'}
              `}
            >
              {/* Value & Unit Container */}
              <div className="relative flex flex-col items-center gap-1">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl lg:text-7xl font-[1000] tracking-tight text-[#052c17]">
                    {stat.value}
                  </span>
                  <span className="text-[10px] lg:text-xs font-black text-[#16a34a] bg-green-50 px-2 py-0.5 rounded-full">
                    {stat.unit}
                  </span>
                </div>
                
                {/* Decorative Dash */}
                <div className="w-6 h-1 bg-[#84cc16] mt-2 mb-4 rounded-full" />
                
                <p className="text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 max-w-[100px] leading-relaxed">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};