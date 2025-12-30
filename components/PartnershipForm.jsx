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
    const message = `Halo Sales Green Fresh, saya ingin mengajukan Inquiry Penawaran B2B:
    
• Perusahaan: ${company}
• Estimasi: ${volume}
• Skema TOP: ${termin || 'Belum dipilih'}
• Kontak: ${email}

Mohon dapat dikirimkan harga katalog terbaru. Terima kasih.`;

    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="kemitraan" className="py-0 md:py-20 bg-white font-sans overflow-hidden">
      {/* CONTAINER UTAMA:
          - px-0 di mobile agar mentok ke tepi layar.
          - border & rounded hanya aktif di md (desktop).
      */}
      <div className="max-w-[1800px] mx-auto bg-[#fcfdfc] md:border-2 md:border-green-100 md:rounded-[3rem] p-0 md:p-10 lg:p-16 relative overflow-hidden shadow-none md:shadow-sm">
        
        {/* Dekorasi Halus */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-green-50 rounded-full blur-[100px] opacity-60 -mr-20 -mt-20 pointer-events-none" />

        <div className="grid lg:grid-cols-12 gap-0 md:gap-24 items-start relative z-10">
          
          {/* SISI KIRI: Value Proposition */}
          <div className="lg:col-span-5 space-y-8 md:space-y-10 px-5 md:px-0 pt-10 md:pt-0 mb-10 md:mb-0">
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-50 rounded-lg text-green-600 border border-green-100">
                  <Lock size={16} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-green-700/60">B2B Partnership Portal</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif italic font-black text-[#052c17] leading-[1.1] tracking-tighter">
                Sistem Suplai <br /> 
                <span className="text-green-600 not-italic font-sans">Terintegrasi.</span>
              </h2>
              
              <p className="text-base md:text-lg text-slate-500 font-light leading-relaxed max-w-md border-l-4 border-green-500/20 pl-4 md:pl-6">
                Kami memfasilitasi pengadaan sayur super untuk korporasi dengan dukungan legalitas lengkap dan fleksibilitas finansial harian.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 md:gap-4 max-w-md">
              {[
                { title: "Dukungan Arus Kas", icon: <Briefcase size={18} /> },
                { title: "Kepastian Harga Kontrak", icon: <ShieldCheck size={18} /> }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 md:gap-4 p-4 bg-white rounded-2xl border-2 border-green-50 shadow-sm">
                  <div className="text-green-600">{item.icon}</div>
                  <h4 className="text-[10px] md:text-[11px] font-black uppercase tracking-widest text-[#052c17]">{item.title}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* SISI KANAN: Form */}
          <div className="lg:col-span-7 w-full">
            {/* FORM BOX:
                - md:rounded-[2rem] & md:border-2 hanya aktif di desktop.
                - rounded-none di mobile agar form lebar penuh menempel layar.
                - border-y-2 di mobile untuk pembatas atas-bawah saja.
            */}
            <div className="bg-white rounded-none md:rounded-[2rem] p-6 md:p-10 lg:p-12 border-y-2 border-green-100 md:border-2 shadow-xl shadow-green-900/5">
              <div className="mb-8 md:mb-10 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-serif italic font-black text-[#052c17]">Inquiry form</h3>
                <p className="text-[10px] md:text-xs text-slate-400 font-medium mt-1">Lengkapi detail untuk mendapatkan Quotation resmi</p>
              </div>

              <form className="grid gap-5 md:gap-6" onSubmit={handleInquiry}>
                <div className="grid md:grid-cols-2 gap-5 md:gap-6">
                  <div className="space-y-2">
                    <label className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Nama Perusahaan</label>
                    <input 
                      type="text" required
                      className="w-full bg-[#f7faf7] border-2 border-green-50 rounded-xl px-4 py-4 text-sm font-medium focus:bg-white focus:border-green-500 outline-none transition-all" 
                      placeholder="Contoh: Hotel/Resto"
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Volume per Hari</label>
                    <input 
                      type="text" required
                      className="w-full bg-[#f7faf7] border-2 border-green-50 rounded-xl px-4 py-4 text-sm font-medium focus:bg-white focus:border-green-500 outline-none transition-all" 
                      placeholder="Contoh: 50 - 100 kg"
                      onChange={(e) => setFormData({...formData, volume: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Termin Pembayaran (TOP)</label>
                  <div className="relative">
                    <select 
                      required
                      className="w-full bg-[#f7faf7] border-2 border-green-50 rounded-xl px-4 py-4 text-sm font-bold text-[#052c17] focus:bg-white focus:border-green-500 outline-none transition-all appearance-none cursor-pointer"
                      onChange={(e) => setFormData({...formData, termin: e.target.value})}
                    >
                      <option value="">Pilih Skema Termin</option>
                      <option value="Cash on Delivery">Cash on Delivery (COD)</option>
                      <option value="TOP 14 Hari">Termin 14 Hari (TOP)</option>
                      <option value="TOP 30 Hari">Termin 30 Hari (TOP)</option>
                      <option value="TOP 45 Hari">Termin 45 Hari (Kontrak)</option>
                    </select>
                    <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-green-600 pointer-events-none" size={18} />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Procurement</label>
                  <input 
                    type="email" required
                    className="w-full bg-[#f7faf7] border-2 border-green-50 rounded-xl px-4 py-4 text-sm font-medium focus:bg-white focus:border-green-500 outline-none transition-all" 
                    placeholder="purchasing@company.com"
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-[#052c17] text-[#84cc16] py-4 md:py-5 rounded-xl font-black uppercase text-[10px] md:text-[11px] tracking-[0.2em] md:tracking-[0.3em] hover:bg-green-600 hover:text-white transition-all shadow-xl flex items-center justify-center gap-3 group mt-2"
                >
                  Ajukan Penawaran Sekarang
                  <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>

                <div className="flex items-center justify-center gap-2 opacity-50 pt-4 pb-2">
                  <CheckCircle2 size={12} className="text-green-600" />
                  <p className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Enkripsi Data Aman & Rahasia</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};