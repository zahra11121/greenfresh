// components/city/SectorTarget.js
import { ArrowUpRight } from 'lucide-react';

export const SectorTarget = () => {
  const sectors = [
    { title: 'Hotels & Resorts', desc: 'Sistem suplai harian dengan standar audit keamanan pangan internasional.' },
    { title: 'Fine Dining', desc: 'Presisi sortasi tingkat tinggi untuk kebutuhan plating dan sayuran eksotik.' },
    { title: 'Industrial Catering', desc: 'Stabilitas harga kontrak dan kapasitas distribusi tonase besar tanpa jeda.' },
    { title: 'Modern Retail', desc: 'Standardisasi kemasan retail-ready yang higienis dan siap display.' },
  ];

  return (
    <section className="py-12 bg-white">
      {/* Grid dengan border hijau berani yang membingkai dengan tegas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-2 border-green-100 rounded-3xl overflow-hidden bg-[#f7faf7]">
        {sectors.map((sector, index) => (
          <div 
            key={index} 
            className="relative p-8 lg:p-10 bg-white border-b-2 sm:border-b-0 sm:border-r-2 border-green-50 last:border-0 hover:bg-[#fcfdfc] transition-all duration-300 group cursor-default"
          >
            {/* Dekorasi Pojok - Detail Kecil yang Mahal */}
            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
               <ArrowUpRight size={18} className="text-green-600" />
            </div>

            {/* Nomor Urut: Sentence Case & Clean */}
            <div className="flex items-center gap-3 mb-12">
               <div className="w-6 h-px bg-green-200" />
               <span className="text-[10px] font-bold tracking-[0.2em] text-green-600 uppercase">
                 Sektor 0{index + 1}
               </span>
            </div>
            
            {/* Judul: Sopan, Serif Italic, Tidak Kapital Semua */}
            <h5 className="text-2xl font-serif italic font-black text-[#052c17] leading-tight mb-4 tracking-tight">
              {sector.title}
            </h5>
            
            {/* Deskripsi: Ramping & Mewah */}
            <p className="text-sm text-slate-400 font-medium leading-relaxed max-w-[240px]">
              {sector.desc}
            </p>

            {/* Aksen Hover Bawah */}
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-green-500 group-hover:w-full transition-all duration-500" />
          </div>
        ))}
      </div>

      {/* Info Tambahan Rapat */}
      <div className="mt-6 flex justify-end">
        <p className="text-[9px] font-black text-slate-300 uppercase tracking-[0.4em]">
          Targeted B2B Solutions • Precision Grading
        </p>
      </div>
    </section>
  );
};