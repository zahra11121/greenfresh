import { MapPin } from 'lucide-react';

export const CityHero = ({ city }) => {
  return (
    <section className="pt-28 pb-16 lg:pt-40 lg:pb-32 bg-white relative overflow-hidden">
      {/* Background Decor - Diperhalus agar tidak mengganggu bacaan */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] opacity-10" />
      
      <div className="max-w-[1200px] mx-auto text-center px-6 relative z-10">
        {/* Badge Lokasi */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-100/50 mb-6">
          <MapPin size={12} className="text-[#16a34a]" />
          <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#16a34a]">
            Verified Partner • {city.name}
          </span>
        </div>
        
        {/* H1: Ukuran yang lebih waras dan elegan */}
        {/* Mobile: 2xl (24px), Tablet: 4xl (36px), Desktop: 6xl (60px) */}
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-serif font-black mb-6 leading-tight uppercase tracking-tight text-[#052c17] max-w-5xl mx-auto">
          {city.title}
        </h1>
        
        {/* Paragraph: Ukuran font disesuaikan agar tidak kebanting */}
        <p className="text-sm md:text-base lg:text-lg text-slate-500 max-w-3xl mx-auto font-light leading-relaxed mb-10">
          {city.angle} Kami menjamin stabilitas distribusi hasil panen Cipanas untuk ekosistem bisnis di <span className="text-[#052c17] font-bold underline decoration-[#84cc16] decoration-2 underline-offset-4">{city.name}</span>.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#katalog" className="bg-[#052c17] text-[#84cc16] px-8 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-[#16a34a] hover:text-white transition-all shadow-lg shadow-green-900/10">
            E-Katalog Komoditas
          </a>
          <a href="#kemitraan" className="bg-slate-50 text-[#052c17] px-8 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-200 transition-all">
            Minta Quotation
          </a>
        </div>
      </div>
    </section>
  );
};