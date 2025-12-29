import React from 'react';
import { Header } from '@/components/Header'; 
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { WhoWeAre } from '@/components/WhoWeAre';
import { EconomicImpact } from '@/components/EconomicImpact';
import { PriceTable } from '@/components/PriceTable';
import { VisualGallery } from '@/components/VisualGallery';
import { CashFlow } from '@/components/CashFlow';
import { PartnershipForm } from '@/components/PartnershipForm';
import { vegetableData } from '@/components/data';
import { Leaf, ShieldCheck, Zap, Star } from 'lucide-react';

export const metadata = {
  title: 'Greenfresh.co.id | Supplier Sayur Segar Cipanas - Stok Stabil B2B',
  description: 'Pemasok utama sayuran segar langsung dari petani Cipanas. Melayani kebutuhan Hotel, Restoran, dan Katering di seluruh Jabodetabek dengan sistem cold chain.',
};

export default function AuthorityPage() {
  // --- SCHEMA MARKUP JSON-LD ---
  const homeSchemas = [
    // 1. Organization & LocalBusiness
    {
      "@context": "https://schema.org",
      "@type": "WholesaleStore",
      "@id": "https://greenfresh.co.id/#organization",
      "name": "CV. Green Fresh Cipanas",
      "url": "https://greenfresh.co.id",
      "logo": "https://greenfresh.co.id/logo.svg",
      "image": "https://greenfresh.co.id/images/hero-farm.jpg",
      "telephone": "+6287780937884",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Kp Jl. Kayumanis, RT.04/RW.04, Sukatani",
        "addressLocality": "Cipanas",
        "addressRegion": "Jawa Barat",
        "postalCode": "43253",
        "addressCountry": "ID"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -6.7056,
        "longitude": 107.0394
      },
      "areaServed": ["Jakarta", "Bogor", "Depok", "Tangerang", "Bekasi", "Cianjur"],
      "sameAs": [
        "https://www.instagram.com/greenfresh.cipanas" // Ganti jika ada sosial media lain
      ]
    },
    // 2. FAQ Page - Authority Questions
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Berapa kapasitas suplai harian Green Fresh Cipanas?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Kami mengelola rantai pasok dengan kapasitas harian hingga 10 ton sayuran segar yang bersumber dari 200 hektar lahan produktif di Cipanas."
          }
        },
        {
          "@type": "Question",
          "name": "Apakah Green Fresh melayani pembayaran termin untuk perusahaan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ya, kami menyediakan fasilitas pembayaran termin (TOP) hingga 30 hari untuk mitra kontrak korporasi (B2B) guna mendukung arus kas operasional klien."
          }
        },
        {
          "@type": "Question",
          "name": "Bagaimana standar kualitas sayuran di Green Fresh?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Setiap produk melalui sistem sortasi Grade-A yang ketat di Operational Hub kami untuk menjamin standar higienitas dan kesegaran hingga ke pintu gudang klien."
          }
        }
      ]
    }
  ];

  return (
    <div className="bg-white text-[#052c17] font-sans selection:bg-[#16a34a] selection:text-white overflow-x-hidden">
      {/* Script Injection */}
      {homeSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <Header />
      
      <main>
        {/* 1. HERO SECTION */}
        <Hero id="home" />

        {/* 2. WHO WE ARE */}
        <div className="-mt-20 lg:-mt-32 relative z-10 bg-white">
          <WhoWeAre id="tentang-kami" />
        </div>

        {/* 3. VISUAL GALLERY */}
        <section className="py-4 lg:py-8 border-t border-slate-50">
          <VisualGallery id="lahan" />
        </section>

        {/* 4. KOMODITAS & PRICE SECTION */}
        <section id="katalog" className="bg-slate-50 py-16 lg:py-24 border-y border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
          
          <div className="max-w-[1400px] mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Star size={14} className="text-[#16a34a] fill-[#16a34a]" />
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#16a34a]">Premium Selection</span>
                </div>
                <h2 className="text-4xl lg:text-7xl font-serif italic font-black text-[#052c17] leading-none uppercase tracking-tighter">
                  Komoditas <br/> <span className="text-[#16a34a]">Unggulan.</span>
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-slate-500 text-sm lg:text-base font-light leading-relaxed">
                  Kami mengelola rantai pasok dari 9 klaster petani di Cipanas untuk memastikan 
                  <span className="font-bold text-[#052c17]"> stabilitas stok 10 ton per hari </span> 
                  dengan standar kualitas sortir yang ketat untuk industri Horeka.
                </p>
                <div className="flex flex-wrap gap-4">
                  {[
                    { icon: <Leaf size={14} />, text: "Zero Pestisida" },
                    { icon: <Zap size={14} />, text: "Panen Fajar" },
                    { icon: <ShieldCheck size={14} />, text: "Grade A Only" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">
                      <span className="text-[#16a34a]">{item.icon}</span>
                      <span className="text-[9px] font-black uppercase tracking-widest">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-10">
               <PriceTable data={vegetableData} showHeader={true} />
            </div>
          </div>
        </section>

        {/* 5. IMPACT & CASHFLOW */}
        <section className="py-16 bg-white">
          <div className="max-w-[1200px] mx-auto">
            <EconomicImpact id="ekonomi" />
            <div className="mt-16 pt-16 border-t border-slate-50">
              <CashFlow id="pembayaran" />
            </div>
          </div>
        </section>

        {/* 6. PARTNERSHIP FORM */}
        <section id="kemitraan" className="py-20 lg:py-32 bg-[#052c17] text-white rounded-t-[3rem] lg:rounded-t-[6rem] overflow-hidden">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-16">
              <h3 className="text-[#84cc16] text-[10px] font-black uppercase tracking-[0.5em] mb-6">B2B Partnership</h3>
              <h2 className="text-4xl lg:text-7xl font-serif italic font-black uppercase mb-8 tracking-tighter">
                Ajukan <span className="text-[#84cc16]">Kontrak</span> Suplai
              </h2>
              <p className="text-white/60 max-w-xl mx-auto text-sm lg:text-base font-light leading-relaxed">
                Khusus untuk entitas bisnis (PT/CV), dapatkan skema pembayaran tempo dan prioritas pengiriman fajar.
              </p>
            </div>
            
            <div className="bg-white p-2 lg:p-4 rounded-[3rem] shadow-2xl">
               <PartnershipForm />
            </div>

            <div className="mt-16 flex justify-center items-center gap-4 opacity-40">
               <div className="h-[1px] w-12 bg-white" />
               <span className="text-[9px] font-black uppercase tracking-[0.3em]">Verified Supplier Profile 2025</span>
               <div className="h-[1px] w-12 bg-white" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}