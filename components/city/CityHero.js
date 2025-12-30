import { MapPin, ArrowRight, ShieldCheck } from 'lucide-react';

export const CityHero = ({ city }) => {
  return (
    <section className="relative bg-white pt-20 pb-12 lg:pt-28 lg:pb-16 overflow-hidden font-sans border-b-2 border-green-100">
      
      {/* Soft Decorative Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-green-50/30 rounded-full blur-[100px] pointer-events-none opacity-40" />

      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* SISI KIRI: Headline Utama */}
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 px-2.5 py-1 bg-[#f7faf7] border border-green-100 rounded-lg">
                  <MapPin size={12} className="text-green-600" />
                  <span className="text-[11px] font-bold text-green-800 tracking-tight">{city.name} Hub</span>
                </div>
                <div className="h-px w-8 bg-green-100 hidden md:block" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-300">Official B2B Supply</span>
              </div>

              {/* PERBAIKAN: Langsung panggil "Supplier Sayur {city.name}" saja agar tidak berantakan */}
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif italic text-[#052c17] leading-[1.1] tracking-tighter">
                Supplier Sayur <br />
                <span className="text-green-600 not-italic font-sans font-bold">{city.name}.</span>
              </h1>
            </div>

            <p className="text-lg lg:text-2xl text-slate-400 font-light leading-relaxed max-w-2xl border-l-4 border-green-500/20 pl-6">
              Distribusi hasil panen Cipanas untuk standar operasional dapur komersial di wilayah <span className="text-[#052c17] font-semibold">{city.name}</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a href="#katalog" className="group inline-flex items-center justify-center gap-3 bg-[#052c17] text-[#84cc16] px-10 py-5 rounded-2xl text-sm font-bold shadow-xl shadow-green-900/10 hover:bg-green-600 hover:text-white transition-all duration-300">
                Katalog Harga
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#kemitraan" className="inline-flex items-center justify-center bg-white text-[#052c17] border-2 border-green-100 px-10 py-5 rounded-2xl text-sm font-bold hover:border-green-500 transition-all duration-300">
                Ajukan Penawaran
              </a>
            </div>
          </div>

          {/* SISI KANAN: Quick Specs Card */}
          <div className="lg:col-span-4 lg:mt-4">
            <div className="p-8 bg-[#fcfdfc] border-2 border-green-100 rounded-[2.5rem] space-y-6 shadow-sm">
              <div className="flex items-center gap-3 pb-5 border-b border-green-100">
                <div className="p-2.5 bg-green-50 rounded-xl">
                  <ShieldCheck size={20} className="text-green-600" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest leading-none mb-1">Standard</p>
                  <p className="text-sm font-bold text-[#052c17]">Sortir Grade A (Horeka)</p>
                </div>
              </div>
              
              <ul className="space-y-4">
                {['Stok Stabil 10 Ton/Hari', 'Pengiriman Sebelum 07:00', 'Sistem Pembayaran TOP'].map((feat, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    <span className="text-sm font-medium text-slate-500 tracking-tight">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};