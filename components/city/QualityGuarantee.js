// components/city/QualityGuarantee.js
import { ShieldCheck, RotateCcw, CheckSquare, BadgeCheck } from 'lucide-react';

export const QualityGuarantee = () => {
  const items = [
    { 
      icon: <RotateCcw size={24} />, 
      title: "Instant Return", 
      desc: "Kebijakan tolak & tukar barang langsung di lokasi pengiriman jika kualitas tidak sesuai standar." 
    },
    { 
      icon: <CheckSquare size={24} />, 
      title: "Daily QC", 
      desc: "Proses sortasi manual dilakukan setiap subuh untuk menjamin kesegaran grade-A sebelum loading." 
    },
    { 
      icon: <BadgeCheck size={24} />, 
      title: "Price Guard", 
      desc: "Jaminan stabilitas harga kontrak hingga 30 hari untuk memudahkan perencanaan budget operasional." 
    }
  ];

  return (
    <section className="py-12 bg-white">
      {/* Bingkai Utama: Putih Bersih dengan Border Hijau Berani */}
      <div className="max-w-[1400px] mx-auto bg-[#fcfdfc] border-2 border-green-100 rounded-[3rem] p-8 lg:p-16 relative overflow-hidden shadow-sm">
        
        {/* Dekorasi Halus */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-full blur-[100px] opacity-60 -mr-20 -mt-20 pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          {/* SISI KIRI: Headline Otoritas */}
          <div className="w-full lg:w-2/5 space-y-6 text-center lg:text-left">
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <ShieldCheck className="text-green-600" size={18} />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-green-700/60">Service Level Agreement</span>
            </div>

            <h2 className="text-3xl lg:text-5xl font-serif italic font-black text-[#052c17] leading-[1.1] tracking-tighter">
              Komitmen <br className="hidden lg:block" /> 
              <span className="text-green-600 not-italic font-sans">Tanpa Risiko.</span>
            </h2>

            <p className="text-slate-500 text-sm lg:text-lg font-light leading-relaxed">
              Kami menjamin nol kerugian bagi operasional Anda melalui sistem 
              <span className="text-[#052c17] font-bold"> penggantian produk instan </span> 
              di lokasi serah terima.
            </p>
          </div>

          {/* SISI KANAN: Grid Item Ramping */}
          <div className="w-full lg:w-3/5 grid grid-cols-1 md:grid-cols-3 gap-6">
            {items.map((item, i) => (
              <div key={i} className="group p-6 bg-white border-2 border-green-50 rounded-2xl hover:border-green-200 transition-all duration-300">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600 mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h4 className="text-[#052c17] font-bold text-sm mb-2 tracking-tight">
                  {item.title}
                </h4>
                <p className="text-slate-400 text-[12px] leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Footer Disclaimer Padat */}
      <div className="mt-8 flex justify-center items-center gap-4">
         <div className="h-[1px] w-12 bg-green-100" />
         <p className="text-[9px] font-black text-slate-300 uppercase tracking-[0.4em]">Standardized Quality Control • CIPANAS 2025</p>
         <div className="h-[1px] w-12 bg-green-100" />
      </div>
    </section>
  );
};