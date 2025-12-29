"use client";
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ChevronDown, Search, X } from 'lucide-react';

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

  const handleShowMore = () => {
    setDisplayLimit(prev => prev + 10);
  };

  return (
    <section id="katalog" className="py-8 lg:py-12 bg-white px-4 lg:px-12 relative overflow-hidden font-sans">
      {/* Dekorasi Background */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-green-50 rounded-full blur-[120px] opacity-40 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Search Bar */}
        <div className="flex justify-center mb-10">
          <div className="relative w-full max-w-2xl group">
            <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
              <Search size={18} className="text-slate-400 group-focus-within:text-[#15803d] transition-colors" />
            </div>
            <input 
              type="text"
              placeholder="Cari item sayuran..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setDisplayLimit(10);
              }}
              className="w-full bg-[#f8fafc] border border-slate-200 py-4 pl-14 pr-12 rounded-2xl outline-none focus:bg-white focus:border-[#15803d] focus:ring-4 focus:ring-green-50 transition-all text-[#052c17] text-sm font-medium shadow-sm"
            />
            {searchTerm && (
              <button onClick={() => setSearchTerm("")} className="absolute inset-y-0 right-5 flex items-center text-slate-400 hover:text-red-500">
                <X size={18} />
              </button>
            )}
          </div>
        </div>

        {/* Tampilan Desktop */}
        <div className="hidden md:block overflow-hidden rounded-[2rem] border border-slate-100 shadow-sm bg-white">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#052c17] text-white">
                <th className="px-8 py-5 font-bold uppercase text-[10px] tracking-[0.2em]">Item</th>
                <th className="px-8 py-5 font-bold uppercase text-[10px] tracking-[0.2em]">Kategori</th>
                <th className="px-8 py-5 font-bold uppercase text-[10px] tracking-[0.2em]">Estimasi Harga</th>
                <th className="px-8 py-5 font-bold uppercase text-[10px] tracking-[0.2em] text-center">Status</th>
              </tr>
            </thead>
            <tbody>
              <AnimatePresence mode='popLayout'>
                {visibleData.map((item) => (
                  <motion.tr 
                    key={item.id}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="group border-b border-slate-50 hover:bg-green-50/30 transition-colors"
                  >
                    <td className="px-8 py-4">
                      {/* Font diganti ke Sans, Ukuran dikecilkan (text-base), Italic dihapus */}
                      <span className="font-semibold text-[#052c17] text-base tracking-tight">
                        {item.name}
                      </span>
                    </td>
                    <td className="px-8 py-4">
                      <span className="text-[10px] font-medium uppercase text-slate-400 tracking-wider">
                        {item.category}
                      </span>
                    </td>
                    <td className="px-8 py-4">
                      <span className="font-mono font-bold text-[#15803d] text-sm">{item.range}</span>
                    </td>
                    <td className="px-8 py-4 text-center">
                      <div className="inline-flex items-center gap-1.5 text-[9px] font-bold uppercase text-[#15803d] bg-green-50 px-3 py-1.5 rounded-full border border-green-100">
                        <CheckCircle2 size={10} /> {item.status}
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>

        {/* Tampilan Mobile */}
        <div className="md:hidden grid grid-cols-1 gap-3">
          <AnimatePresence mode='popLayout'>
            {visibleData.map((item) => (
              <motion.div 
                key={item.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm flex flex-col gap-2"
              >
                <div className="flex justify-between items-center">
                  <h4 className="font-bold text-[#052c17] text-base tracking-tight">{item.name}</h4>
                  <div className="text-[8px] font-black uppercase text-[#15803d] bg-green-50 px-2 py-1 rounded-md">
                    {item.status}
                  </div>
                </div>
                <div className="flex justify-between items-center text-[10px]">
                  <span className="text-slate-400 uppercase font-medium tracking-widest">{item.category}</span>
                  <span className="font-mono font-bold text-[#15803d]">{item.range}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Tombol Load More */}
        {hasMore && (
          <div className="mt-8 flex justify-center">
            <button 
              onClick={handleShowMore}
              className="flex items-center gap-2 bg-[#052c17] text-[#84cc16] px-6 py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-[#0a3d21] transition-all"
            >
              Lihat Lainnya
              <ChevronDown size={14} />
            </button>
          </div>
        )}

        <div className="mt-8 flex flex-col items-center border-t border-slate-50 pt-6">
          <p className="text-[9px] opacity-40 uppercase font-bold tracking-widest italic text-center text-[#052c17]">
            * Estimasi harga panen harian Cipanas
          </p>
        </div>
      </div>
    </section>
  );
};