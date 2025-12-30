import { Clock, ArrowRight, Truck } from 'lucide-react';
import { jabodetabekCities, getDefaultLogistics } from '@/data/cities';

export const LogisticsTimeline = ({ slug, cityName }) => {
  const cityData = jabodetabekCities.find(c => c.slug === slug);
  const steps = (cityData?.logistics && cityData.logistics.length > 0) 
    ? cityData.logistics 
    : getDefaultLogistics(cityName);

  return (
    <div className="relative p-6 bg-white border border-green-200 rounded-3xl font-sans shadow-sm">
      
      {/* Header: Dibuat sangat sopan dan profesional */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-green-50">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Clock size={14} className="text-green-600" />
            <span className="text-[10px] font-black uppercase tracking-widest text-green-600/60">Sistem Logistik</span>
          </div>
          <h3 className="text-xl font-bold text-[#052c17]">
            Alur pengiriman <span className="text-green-600 italic">{cityName}</span>
          </h3>
        </div>
        
        <div className="px-3 py-1.5 bg-green-50 rounded-lg border border-green-100 hidden lg:flex items-center gap-2">
          <Truck size={14} className="text-green-600" />
          <span className="text-[10px] font-bold text-green-800 uppercase tracking-tighter">Fleet Cipanas Aktif</span>
        </div>
      </div>

      {/* Content: Timeline Ramping */}
      <div className="space-y-6 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[1.5px] before:bg-green-50">
        {steps.map((step, index) => (
          <div key={index} className="relative pl-9 group">
            
            {/* Indikator Titik: Minimalis */}
            <div className={`absolute left-0 top-1 w-[22px] h-[22px] rounded-full flex items-center justify-center border-2 border-white shadow-sm transition-all ${
              index === steps.length - 1 ? 'bg-green-600' : 'bg-green-100 group-hover:bg-green-200'
            }`}>
              <div className={`w-1.5 h-1.5 rounded-full ${index === steps.length - 1 ? 'bg-white' : 'bg-green-500'}`} />
            </div>
            
            {/* Teks: Padat dan Sentence Case */}
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-black text-green-600 bg-green-50 px-2 py-0.5 rounded uppercase">{step.time}</span>
                <h4 className="font-bold text-[13px] text-[#052c17] tracking-tight">{step.title}</h4>
              </div>
              <p className="text-[11px] text-slate-400 font-medium leading-relaxed max-w-[260px]">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Mini Footer: Info tambahan yang ringkas */}
      <div className="mt-10 pt-6 border-t border-green-50">
        <p className="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] text-center">
          Monitoring Rantai Pasok Dingin • 2025
        </p>
      </div>
    </div>
  );
};