import React from 'react';
import * as motion from "framer-motion/client"; 
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
import { Star } from 'lucide-react';

// --- METADATA DENGAN CANONICAL URL ---
export const metadata = {
  title: 'Supplier Sayur Segar Cipanas - CV Green Fresh Cipanas',
  description: 'Pemasok utama sayuran segar langsung dari petani Cipanas. Melayani kebutuhan Hotel, Restoran, dan Katering di seluruh Jabodetabek dengan sistem cold chain.',
  alternates: {
    canonical: 'https://greenfresh.co.id',
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function AuthorityPage() {
  const homeSchemas = [
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
      "sameAs": ["https://www.instagram.com/greenfresh.cipanas"]
    },
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
            "text": "Ya, kami menyediakan fasilitas pembayaran termin (TOP) hingga 30 hari untuk mitra kontrak korporasi (B2B)."
          }
        }
      ]
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 15 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <div className="bg-white text-[#052c17] font-sans selection:bg-green-100 selection:text-[#052c17] overflow-x-hidden">
      {/* JSON-LD Structured Data */}
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
        <div className="-mt-8 lg:-mt-12 relative z-10 bg-white border-b-2 border-green-100">
          <WhoWeAre id="tentang-kami" />
        </div>

        {/* 3. VISUAL GALLERY */}
        <section className="py-2 border-b-2 border-green-100 bg-white">
          <VisualGallery id="lahan" />
        </section>

        {/* 4. KOMODITAS & PRICE SECTION */}
        <section id="katalog" className="bg-[#f7faf7] py-10 lg:py-16 border-b-2 border-green-200 relative overflow-hidden">
          <div className="max-w-[1500px] mx-auto px-6 relative z-10">
            <motion.div {...fadeInUp} className="grid lg:grid-cols-2 gap-6 items-end mb-8">
              <div className="text-left">
                <div className="flex items-center gap-2 mb-2">
                  {/* PERBAIKAN: Warna icon dipertegas ke #15803d */}
                  <Star size={14} className="text-[#15803d] fill-[#15803d]" />
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#15803d]">Premium Selection</span>
                </div>
                <h2 className="text-4xl lg:text-6xl font-serif italic text-[#052c17] leading-[0.9] tracking-tighter">
                  Komoditas <br/> <span className="text-[#15803d] not-italic font-sans font-bold">Unggulan.</span>
                </h2>
              </div>
              <div className="text-left">
                {/* PERBAIKAN: Slate-500 dipergelap ke Slate-700 untuk kontras WCAG */}
                <p className="text-slate-700 text-sm lg:text-lg font-bold leading-relaxed max-w-xl border-l-4 border-[#15803d] pl-4">
                  Rantai pasok terintegrasi dari 9 klaster petani untuk menjamin 
                  <span className="text-[#052c17] font-black"> stabilitas stok harian</span> grade-A.
                </p>
              </div>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
              <PriceTable data={vegetableData} showHeader={true} />
            </motion.div>
          </div>
        </section>

        {/* 5. IMPACT & CASHFLOW */}
        <section className="py-10 lg:py-16 bg-white px-6 border-b-2 border-green-100">
          <div className="max-w-[1700px] mx-auto">
            <motion.div {...fadeInUp}>
              <EconomicImpact id="ekonomi" />
            </motion.div>
            <div className="mt-10 pt-10 border-t-2 border-green-100">
              <motion.div {...fadeInUp}>
                <CashFlow id="pembayaran" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* 6. PARTNERSHIP FORM */}
        <section id="kemitraan" className="py-10 lg:py-16 bg-white border-t-2 border-green-200 relative">
          <div className="max-w-[1800px] mx-auto px-6 relative z-10">
            <motion.div {...fadeInUp} className="text-center mb-10">
              {/* PERBAIKAN: Kontras dipertegas */}
              <span className="text-[#15803d] text-[10px] font-black uppercase tracking-[0.5em] mb-2 block">
                B2B Enterprise Portal
              </span>
              <h2 className="text-4xl lg:text-7xl font-serif italic text-[#052c17] leading-[0.9] tracking-tighter mb-4">
                Ajukan <span className="text-[#15803d] not-italic font-sans font-bold">Kontrak</span> Suplai
              </h2>
              {/* PERBAIKAN: Slate-500 dipergelap ke Slate-700 */}
              <p className="text-slate-700 max-w-2xl mx-auto text-sm lg:text-lg font-bold">
                Akses katalog harga grosir dan termin pembayaran (TOP) khusus entitas bisnis resmi.
              </p>
            </motion.div>
            
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="w-full">
               <PartnershipForm />
            </motion.div>

            <div className="mt-12 flex justify-center items-center gap-4">
               <div className="h-[2px] w-16 bg-green-200" aria-hidden="true" />
               {/* PERBAIKAN: Text-green-900 untuk visibilitas maksimal */}
               <span className="text-[10px] font-black uppercase tracking-[0.4em] text-green-900">Official Partner 2026</span>
               <div className="h-[2px] w-16 bg-green-200" aria-hidden="true" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}