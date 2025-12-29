import { Clock, ArrowRight, Truck } from 'lucide-react';
import { jabodetabekCities, getDefaultLogistics } from '@/data/cities';

export const LogisticsTimeline = ({ slug, cityName }) => {
  // 1. Cari data kota berdasarkan slug
  const cityData = jabodetabekCities.find(c => c.slug === slug);
  
  // 2. Ambil steps
  const steps = (cityData?.logistics && cityData.logistics.length > 0) 
    ? cityData.logistics 
    : getDefaultLogistics(cityName);

  return (
    <div className="relative p-6 lg:p-10 bg-[#052c17] rounded-[2.5rem] text-white overflow-hidden group border border-white/5">
      {/* Efek Visual Background */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#16a34a] blur-[100px] opacity-10 -mr-20 -mt-20 transition-opacity duration-700" />
      
      <div className="relative z-10 space-y-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Clock className="text-[#84cc16]" size={16} />
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#84cc16]">Operational Flow</span>
          </div>
          {/* Font size dikecilkan: text-2xl di mobile, text-3xl di desktop */}
          <h3 className="text-2xl lg:text-3xl font-serif italic font-black uppercase leading-[1.1] tracking-tight">
            Logistik Area <br/> 
            <span className="text-white/90">{cityName}</span>
          </h3>
        </div>

        {/* Jalur Garis Timeline - Jarak dikurangi (space-y-8) */}
        <div className="space-y-8 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[1px] before:bg-white/10">
          {steps.map((step, index) => (
            <div key={index} className="relative pl-10 flex flex-col group/item">
              {/* Bulatan Timeline - Ukuran dikecilkan dari w-8 ke w-6 */}
              <div className={`absolute left-0 top-1 w-6 h-6 rounded-full flex items-center justify-center border-[3px] border-[#052c17] transition-all duration-500 shadow-lg ${
                index === steps.length - 1 
                  ? 'bg-[#84cc16]' 
                  : 'bg-white/10 group-hover/item:bg-[#16a34a]'
              }`}>
                <div className="w-1 h-1 rounded-full bg-[#052c17]" />
              </div>
              
              <div className="flex items-center gap-2 mb-1">
                <span className="text-base font-mono font-black text-[#84cc16] tracking-tighter">{step.time}</span>
                <ArrowRight size={12} className="text-white/20" />
                <h4 className="font-bold text-[11px] lg:text-xs uppercase tracking-widest">{step.title}</h4>
              </div>
              <p className="text-[11px] text-white/40 font-medium leading-relaxed max-w-[240px]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
        
        {/* Badge Ekstra - Lebih Minimalis */}
        <div className="pt-6 border-t border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2">
             <Truck size={12} className="text-white/20" />
             <span className="text-[8px] font-bold uppercase tracking-widest text-white/30 italic">Fleet Hub Sukatani</span>
          </div>
          <div className="flex -space-x-1.5 opacity-50">
            {[1,2,3].map(i => (
              <div key={i} className="w-5 h-5 rounded-full border border-[#052c17] bg-slate-800 overflow-hidden">
                <img 
                  src={`https://i.pravatar.cc/100?u=greenfresh${i}`} 
                  alt="Team" 
                  className="w-full h-full object-cover grayscale" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};