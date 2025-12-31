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
      {/* 1. Filter & Search Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
        <div className="relative w-full max-w-md group">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            {/* PERBAIKAN: slate-400 -> slate-500 */}
            <Search size={16} className="text-slate-500 group-focus-within:text-[#15803d] transition-colors" />
          </div>
          <input 
            type="text"
            placeholder="Cari item (misal: Brokoli, Wortel...)"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setDisplayLimit(10);
            }}
            /* PERBAIKAN: Placeholder ditingkatkan kontrasnya via utilitas placeholder-slate-500 */
            className="w-full bg-[#fcfdfc] border-2 border-green-100 py-3 pl-12 pr-10 rounded-2xl outline-none focus:border-[#15803d] transition-all text-sm font-medium text-[#052c17] placeholder-slate-500"
          />
          {searchTerm && (
            <button onClick={() => setSearchTerm("")} className="absolute inset-y-0 right-4 flex items-center text-slate-500 hover:text-red-600">
              <X size={16} />
            </button>
          )}
        </div>

        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#16a34a] animate-pulse" />
          {/* PERBAIKAN: green-700 -> green-800 */}
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-green-800">Daily Updates • 2025</span>
        </div>
      </div>

      {/* 2. Desktop Table */}
      <div className="hidden md:block overflow-hidden rounded-3xl border-2 border-green-100">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#f7faf7] border-b-2 border-green-100">
              {/* PERBAIKAN: green-800 stabil untuk kontras di bg-f7faf7 */}
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
                      <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center text-[#15803d] group-hover:bg-[#15803d] group-hover:text-white transition-colors">
                        <ShoppingBag size={14} />
                      </div>
                      <span className="font-bold text-[#052c17] text-sm tracking-tight">{item.name}</span>
                    </div>
                  </td>
                  <td className="px-8 py-4">
                    {/* PERBAIKAN: slate-400 -> slate-600 */}
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider">{item.category}</span>
                  </td>
                  <td className="px-8 py-4">
                    {/* PERBAIKAN: green-700 -> green-800 */}
                    <span className="font-mono font-bold text-green-800 text-sm">{item.range}</span>
                  </td>
                  <td className="px-8 py-4 text-right">
                    {/* PERBAIKAN: green-600 -> green-700 */}
                    <div className="inline-flex items-center gap-1.5 text-[9px] font-black uppercase text-green-700 bg-green-50 px-3 py-1 rounded-full border border-green-200">
                      <CheckCircle2 size={10} /> {item.status}
                    </div>
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
      </div>

      {/* 3. Mobile Cards */}
      <div className="md:hidden space-y-3">
        {visibleData.map((item) => (
          <div key={item.id} className="p-4 bg-white border-2 border-green-100 rounded-2xl flex flex-col gap-3 shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-bold text-[#052c17] text-sm">{item.name}</h4>
                {/* PERBAIKAN: slate-400 -> slate-600 */}
                <p className="text-[9px] font-bold text-slate-600 uppercase tracking-widest mt-0.5">{item.category}</p>
              </div>
              <div className="text-[8px] font-black uppercase text-green-700 bg-green-50 px-2 py-1 rounded-full border border-green-200">
                {item.status}
              </div>
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-green-50">
              {/* PERBAIKAN: slate-400 -> slate-600 */}
              <span className="text-[10px] text-slate-600 font-bold uppercase tracking-tight">Estimasi Harga</span>
              <span className="font-mono font-bold text-green-800 text-sm">{item.range}</span>
            </div>
          </div>
        ))}
      </div>

      {/* 4. Load More Button */}
      {hasMore && (
        <div className="mt-10 flex justify-center">
          <button 
            onClick={() => setDisplayLimit(prev => prev + 10)}
            className="flex items-center gap-3 bg-white border-2 border-green-200 text-[#052c17] px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:border-[#15803d] hover:bg-[#f7faf7] transition-all group active:scale-95"
          >
            Tampilkan Lebih Banyak
            <ChevronDown size={14} className="group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      )}

      {/* 5. Disclaimer */}
      <div className="mt-8 flex justify-center px-4">
        {/* PERBAIKAN: slate-400 -> slate-600 & green-600 -> green-700 */}
        <p className="text-[10px] text-slate-600 font-medium italic text-center max-w-md leading-relaxed">
          * Harga bersifat fluktuatif mengikuti hasil panen harian. Kontak sales kami untuk mendapatkan <span className="text-green-700 font-bold">Quotation Resmi (PKP)</span>.
        </p>
      </div>
    </div>
  );
};