"use client";
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ChevronDown, Search, X, ShoppingBag } from 'lucide-react';

export const PriceTable = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [displayLimit, setDisplayLimit] = useState(10);

  const filteredData = useMemo(() => {
    return data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [data, searchTerm]);

  const visibleData = filteredData.slice(0, displayLimit);
  const hasMore = displayLimit < filteredData.length;

  return (
    <div className="w-full bg-white font-sans">
      {/* 1. Filter & Search Bar - Dibuat Ramping */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
        <div className="relative w-full max-w-md group">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search size={16} className="text-slate-400 group-focus-within:text-green-600 transition-colors" />
          </div>
          <input 
            type="text"
            placeholder="Cari item (misal: Brokoli, Wortel...)"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setDisplayLimit(10);
            }}
            className="w-full bg-[#fcfdfc] border-2 border-green-100 py-3 pl-12 pr-10 rounded-2xl outline-none focus:border-green-500 transition-all text-sm font-medium text-[#052c17]"
          />
          {searchTerm && (
            <button onClick={() => setSearchTerm("")} className="absolute inset-y-0 right-4 flex items-center text-slate-400 hover:text-red-500">
              <X size={16} />
            </button>
          )}
        </div>

        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-green-700">Daily Updates • 2025</span>
        </div>
      </div>

      {/* 2. Desktop Table - Gaya Modern Minimalist */}
      <div className="hidden md:block overflow-hidden rounded-3xl border-2 border-green-100">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#f7faf7] border-b-2 border-green-100">
              <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-green-800">Komoditas</th>
              <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-green-800">Kategori</th>
              <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-green-800">Rentang Harga (Kg)</th>
              <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-green-800 text-right">Status</th>
            </tr>
          </thead>
          <tbody>
            <AnimatePresence mode='popLayout'>
              {visibleData.map((item, idx) => (
                <motion.tr 
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="group border-b border-green-50 hover:bg-[#f7faf7] transition-all"
                >
                  <td className="px-8 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                        <ShoppingBag size={14} />
                      </div>
                      <span className="font-bold text-[#052c17] text-sm tracking-tight">{item.name}</span>
                    </div>
                  </td>
                  <td className="px-8 py-4">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{item.category}</span>
                  </td>
                  <td className="px-8 py-4">
                    <span className="font-mono font-bold text-green-700 text-sm">{item.range}</span>
                  </td>
                  <td className="px-8 py-4 text-right">
                    <div className="inline-flex items-center gap-1.5 text-[9px] font-black uppercase text-green-600 bg-green-50 px-3 py-1 rounded-full border border-green-100">
                      <CheckCircle2 size={10} /> {item.status}
                    </div>
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
      </div>

      {/* 3. Mobile Cards - Dibuat Rapat & Elegan */}
      <div className="md:hidden space-y-3">
        {visibleData.map((item) => (
          <div key={item.id} className="p-4 bg-white border-2 border-green-100 rounded-2xl flex flex-col gap-3">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-bold text-[#052c17] text-sm">{item.name}</h4>
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">{item.category}</p>
              </div>
              <div className="text-[8px] font-black uppercase text-green-600 bg-green-50 px-2 py-1 rounded-full border border-green-100">
                {item.status}
              </div>
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-green-50">
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">Estimasi Harga</span>
              <span className="font-mono font-bold text-green-700 text-sm">{item.range}</span>
            </div>
          </div>
        ))}
      </div>

      {/* 4. Load More Button */}
      {hasMore && (
        <div className="mt-10 flex justify-center">
          <button 
            onClick={() => setDisplayLimit(prev => prev + 10)}
            className="flex items-center gap-3 bg-white border-2 border-green-100 text-[#052c17] px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:border-green-500 hover:bg-[#f7faf7] transition-all group"
          >
            Tampilkan Lebih Banyak
            <ChevronDown size={14} className="group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      )}

      {/* 5. Disclaimer */}
      <div className="mt-8 flex justify-center">
        <p className="text-[10px] text-slate-400 font-medium italic text-center max-w-md">
          * Harga bersifat fluktuatif mengikuti hasil panen harian. Kontak sales kami untuk mendapatkan <span className="text-green-600 font-bold">Quotation Resmi (PKP)</span>.
        </p>
      </div>
    </div>
  );
};