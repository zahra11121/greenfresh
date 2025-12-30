import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PartnershipForm } from '@/components/PartnershipForm'; 
import { MapsSection } from '@/components/MapsSection';
import ProfileClientContent from '@/components/ProfileClientContent';

// 1. Menambahkan Canonical URL di Metadata
export const metadata = {
  title: 'Tentang Kami - CV. Green Fresh Cipanas',
  description: 'Mengenal CV. Green Fresh Cipanas, mitra strategis pengadaan sayuran segar dengan kapasitas 10 ton/hari dan standar kepatuhan korporasi (PKP).',
  alternates: {
    canonical: 'https://greenfresh.co.id/tentang-kami/', // Sesuaikan dengan URL asli Anda
  },
};

export default function ProfilePage() {
  // 2. Mendefinisikan Schema Markup (Organization & LocalBusiness)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WholesaleStore",
    "name": "CV. Green Fresh Cipanas",
    "image": "https://greenfres.co.id/logo.svg", // Sesuaikan path logo
    "@id": "https://greenfresh.co.id/",
    "url": "https://greenfresh.co.id/",
    "telephone": "+628123456789", // Sesuaikan nomor telepon
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Raya Cipanas",
      "addressLocality": "Cianjur",
      "addressRegion": "Jawa Barat",
      "postalCode": "43253",
      "addressCountry": "ID"
    },
    "description": "Mitra strategis pengadaan sayuran segar dengan kapasitas 10 ton per hari.",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "08:00",
      "closes": "17:00"
    }
  };

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-[#16a34a] selection:text-white overflow-x-hidden">
      {/* 3. Injeksi Schema ke dalam Head */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Header />

      <main className="pt-32 lg:pt-48">
        <ProfileClientContent />

        <div className="py-24">
          <div className="max-w-[1200px] mx-auto px-6 mb-12 flex flex-col items-center text-center text-slate-900">
             <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#16a34a] mb-2">Operational Hub</span>
             <h2 className="text-3xl lg:text-4xl font-serif italic font-bold">Sentralisasi Distribusi</h2>
          </div>
          <MapsSection />
        </div>

        <section className="pb-32">
          <div className="max-w-[1200px] mx-auto px-6 text-center mb-16 text-slate-900">
             <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-[#16a34a] mb-4">Ready to Optimize?</h3>
             <h2 className="text-4xl lg:text-5xl font-serif italic font-bold text-[#052c17]">Mulai Kemitraan Strategis.</h2>
          </div>
          <PartnershipForm />
        </section>
      </main>

      <Footer />
    </div>
  );
}