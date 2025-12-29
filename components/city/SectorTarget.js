// components/city/SectorTarget.js
export const SectorTarget = () => {
  const sectors = [
    { title: 'Hotels & Resorts', desc: 'Sistem suplai harian dengan standar audit keamanan pangan internasional.' },
    { title: 'Fine Dining', desc: 'Presisi sortasi tingkat tinggi untuk kebutuhan plating dan sayuran eksotik.' },
    { title: 'Industrial Catering', desc: 'Stabilitas harga kontrak dan kapasitas distribusi tonase besar tanpa jeda.' },
    { title: 'Modern Retail', desc: 'Standardisasi kemasan retail-ready yang higienis dan siap display.' },
  ];

  return (
    <section className="py-16 bg-white border-t border-slate-100">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-slate-100 rounded-[2rem] overflow-hidden">
        {sectors.map((sector, index) => (
          <div 
            key={index} 
            className="p-8 lg:p-10 border-b md:border-b-0 md:border-r border-slate-100 last:border-0 hover:bg-[#16a34a] group transition-all duration-500 cursor-default"
          >
            {/* Nomor Urut Bergaya Editorial */}
            <span className="block text-[10px] font-black mb-10 tracking-[0.3em] text-[#16a34a] group-hover:text-white/60 transition-colors">
              0{index + 1} // SECTOR
            </span>
            
            <h5 className="text-2xl font-serif italic font-black text-[#052c17] leading-none mb-4 group-hover:text-white transition-colors">
              {sector.title}
            </h5>
            
            <p className="text-xs text-slate-400 font-light leading-relaxed group-hover:text-white/80 transition-colors">
              {sector.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};