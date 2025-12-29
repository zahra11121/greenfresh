// components/city/QualityGuarantee.js
import { ShieldCheck, RotateCcw, CheckSquare } from 'lucide-react';

export const QualityGuarantee = () => {
  return (
    <section className="py-10 bg-[#052c17] rounded-[3rem] my-10 overflow-hidden relative group">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#16a34a] opacity-10 rounded-full -mr-20 -mt-20 blur-3xl group-hover:opacity-20 transition-opacity"></div>
      
      <div className="max-w-[1000px] mx-auto px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 rounded-full border border-white/20 mb-8">
          <ShieldCheck className="text-[#16a34a]" size={18} />
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Service Level Agreement</span>
        </div>

        <h2 className="text-3xl lg:text-5xl font-serif italic font-black text-white mb-6 uppercase tracking-tight">
          Garansi Kesegaran <br className="hidden lg:block" /> & Retur Instan
        </h2>

        <p className="text-white/60 text-sm lg:text-base font-light max-w-2xl mx-auto mb-12">
          Komitmen kami adalah nol kerugian bagi operasional Anda. Jika kualitas tidak memenuhi standar kesepakatan saat tiba, kami menjamin penggantian produk secara instan.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {[
            { icon: <RotateCcw size={20} />, title: "Instant Return", desc: "Tolak & tukar barang langsung di tempat." },
            { icon: <CheckSquare size={20} />, title: "Daily QC", desc: "Sortasi manual setiap subuh sebelum loading." },
            { icon: <ShieldCheck size={20} />, title: "Price Guard", desc: "Stabilitas harga kontrak minimal 30 hari." }
          ].map((item, i) => (
            <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="text-[#16a34a] mb-4">{item.icon}</div>
              <h4 className="text-white font-bold text-sm mb-1 uppercase tracking-tight">{item.title}</h4>
              <p className="text-white/40 text-[11px] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};