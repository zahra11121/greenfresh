// components/city/LiveStats.js
export const LiveStats = () => {
  const stats = [
    { label: "Kapasitas Harian", value: "2.5", unit: "TON" },
    { label: "Titik Distribusi", value: "45", unit: "AREA" },
    { label: "Waktu Tempuh", value: "4", unit: "JAM" },
    { label: "Akurasi Sortasi", value: "99", unit: "%" },
  ];

  return (
    <section className="py-14 border-y border-slate-100 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-wrap justify-between gap-10">
          {stats.map((stat, i) => (
            <div key={i} className="flex-1 min-w-[150px] space-y-2">
              <div className="flex items-baseline gap-1">
                <span className="text-5xl lg:text-6xl font-serif italic font-black text-[#052c17] tracking-tighter">
                  {stat.value}
                </span>
                <span className="text-xs font-black text-[#16a34a] uppercase">{stat.unit}</span>
              </div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};