"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  CheckCircle2, 
  Send, 
  Lock, 
  Briefcase, 
  ChevronDown 
} from 'lucide-react';

export const PartnershipForm = () => {
  const [formData, setFormData] = useState({
    company: '',
    volume: '',
    termin: '',
    email: ''
  });

  const handleInquiry = (e) => {
    e.preventDefault();
    const { company, volume, termin, email } = formData;
    
    if(!company || !volume) {
      alert("Mohon lengkapi Nama Perusahaan dan Estimasi Volume.");
      return;
    }

    const phoneNumber = "6287780937884";
    const message = `Halo Sales Greenfresh.co.id, saya ingin mengajukan Inquiry Penawaran B2B:
    
• Nama Perusahaan: ${company}
• Estimasi Volume: ${volume}
• Pilihan Termin: ${termin || 'Belum dipilih'}
• Email Procurement: ${email}

Mohon dapat dikirimkan harga katalog terbaru. Terima kasih.`;

    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    /* PERUBAHAN: py-24 lg:py-40 dikurangi menjadi py-12 lg:py-24 untuk jarak yang lebih proposional */
    <section id="kemitraan" className="py-12 lg:py-24 bg-[#f8faf8] px-6 lg:px-12 relative overflow-hidden font-sans">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-100/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-[1300px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* SISI KIRI */}
          <div className="space-y-8 lg:space-y-10">
            <div className="space-y-4">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-green-100 text-[#16a34a] rounded-full text-[9px] font-black uppercase tracking-[0.2em]"
              >
                <Lock size={12} /> B2B Partnership Portal
              </motion.div>
              
              <h2 className="text-4xl lg:text-5xl font-serif italic text-[#052c17] leading-[1.1] tracking-tight">
                Sistem Suplai <br /> <span className="text-[#16a34a]">Terintegrasi & Terukur.</span>
              </h2>
              
              <p className="text-base lg:text-lg text-slate-500 font-light leading-relaxed max-w-md">
                Kami memfasilitasi pengadaan sayur super untuk korporasi dengan dukungan legalitas lengkap dan fleksibilitas finansial.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { 
                  title: "Dukungan Arus Kas", 
                  desc: "Fasilitas pembayaran termin (TOP) hingga 30 hari untuk mitra kontrak tetap.",
                  icon: <Briefcase size={20} />
                },
                { 
                  title: "Kepastian Harga", 
                  desc: "Stabilitas harga kontrak untuk mempermudah budgeting operasional Anda.",
                  icon: <ShieldCheck size={20} />
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-5 p-5 bg-white rounded-2xl shadow-sm border border-slate-50">
                  <div className="text-[#16a34a]">{item.icon}</div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-widest text-[#052c17] mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-400 font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SISI KANAN (FORM) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="w-full"
          >
            <div className="bg-white rounded-[2rem] p-8 lg:p-10 shadow-[0_40px_80px_-20px_rgba(5,44,23,0.08)] border border-slate-100">
              <div className="mb-8">
                <h3 className="text-xl font-serif italic text-[#052c17]">Inquiry Form</h3>
                <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mt-1">Lengkapi detail pengadaan Anda</p>
              </div>

              <form className="space-y-5" onSubmit={handleInquiry}>
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    {/* PERBAIKAN AKSESIBILITAS: Gunakan htmlFor dan id */}
                    <label htmlFor="company" className="text-[9px] font-bold uppercase tracking-widest text-slate-400 ml-1">Nama Perusahaan</label>
                    <input 
                      id="company"
                      type="text" 
                      required
                      className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-[#16a34a] outline-none transition-all" 
                      placeholder="PT. Nama Hotel/Resto"
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="volume" className="text-[9px] font-bold uppercase tracking-widest text-slate-400 ml-1">Volume (KG/Hari)</label>
                    <input 
                      id="volume"
                      type="text" 
                      required
                      className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-[#16a34a] outline-none transition-all" 
                      placeholder="Contoh: 50kg"
                      onChange={(e) => setFormData({...formData, volume: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  {/* PERBAIKAN AKSESIBILITAS UTAMA: Menambahkan Label pada Select */}
                  <label htmlFor="termin" className="text-[9px] font-bold uppercase tracking-widest text-slate-400 ml-1">Pilihan Termin Pembayaran</label>
                  <div className="relative">
                    <select 
                      id="termin"
                      required
                      className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-[#16a34a] outline-none transition-all appearance-none cursor-pointer text-[#052c17] font-medium"
                      onChange={(e) => setFormData({...formData, termin: e.target.value})}
                    >
                      <option value="">Pilih Skema TOP</option>
                      <option value="Cash on Delivery">Cash on Delivery (COD)</option>
                      <option value="TOP 14 Hari">Termin 14 Hari (TOP)</option>
                      <option value="TOP 30 Hari">Termin 30 Hari (TOP)</option>
                      <option value="TOP 45 Hari">Termin 45 Hari (TOP - Kontrak)</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-[9px] font-bold uppercase tracking-widest text-slate-400 ml-1">Email Procurement</label>
                  <input 
                    id="email"
                    type="email" 
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-[#16a34a] outline-none transition-all" 
                    placeholder="purchasing@company.com"
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-[#052c17] text-[#84cc16] py-4 rounded-xl font-black uppercase text-[11px] tracking-[0.2em] hover:bg-[#16a34a] hover:text-white transition-all shadow-lg flex items-center justify-center gap-3 group"
                >
                  Ajukan Penawaran
                  <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>

                <div className="flex items-center justify-center gap-2 opacity-50 pt-2">
                  <CheckCircle2 size={12} className="text-[#16a34a]" />
                  <p className="text-[8px] font-bold uppercase tracking-widest text-[#052c17]">Data bersifat rahasia & aman</p>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};