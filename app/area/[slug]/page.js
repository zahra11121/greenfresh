import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PartnershipForm } from '@/components/PartnershipForm';
import { PriceTable } from '@/components/PriceTable';
import { vegetableData } from '@/components/data';
import {
  Star, ShieldCheck, ChevronRight, Users,
  CheckCircle, Building2, ShoppingBag, Utensils,
  Heart, GraduationCap, Factory, MapPin
} from 'lucide-react';
import { notFound } from 'next/navigation';
import Link from 'next/link';

// District Components
import { DistrictHero } from '@/components/district/DistrictHero';
import { DistrictLogistics } from '@/components/district/DistrictLogistics';
import { DistrictOverview } from '@/components/district/DistrictOverview';
import { DistrictRoute } from '@/components/district/DistrictRoute';
import { QualityGuarantee } from '@/components/city/QualityGuarantee';
import { LiveStats } from '@/components/city/LiveStats';

// --- KONFIGURASI SSR (SERVER SIDE RENDERING) ---
export const dynamic = 'force-dynamic'; 
export const revalidate = 0; 
export const runtime = 'edge';

import districtsData from '@/data/districts.json';

// Komponen Internal: Wilayah Terkait
const NearbyAreas = ({ currentSlug }) => {
  // SSR memungkinkan randomisasi berbeda setiap refresh halaman
  const otherAreas = districtsData.districts
    .filter(d => d.slug !== currentSlug)
    .sort(() => 0.5 - Math.random())
    .slice(0, 6);

  const labels = ["Logistik", "Distribusi", "Supply", "Pengiriman", "Area", "Layanan"];

  return (
    <section className="py-16 bg-white border-t border-slate-100">
      <div className="max-w-[1800px] mx-auto px-4 md:px-8">
        <h3 className="text-xl font-black text-[#052c17] mb-8 uppercase tracking-widest flex items-center gap-2">
          <MapPin size={20} className="text-[#15803d]" /> Area Layanan Terkait
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {otherAreas.map((area, index) => (
            <Link
              key={area.slug}
              href={`/area/${area.slug}/`}
              prefetch={false} // Mencegah parameter nxtPslug muncul di URL
              className="group p-5 rounded-2xl border border-slate-100 hover:border-[#15803d] hover:bg-green-50 transition-all flex flex-col items-center justify-center gap-1"
            >
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">
                {labels[index % labels.length]}
              </span>
              <span className="text-xs font-black text-slate-700 group-hover:text-[#15803d] uppercase tracking-wider block text-center">
                {area.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

// Komponen Internal: Rating & Kepercayaan
const RatingSection = ({ districtName }) => (
  <div className="w-full bg-gradient-to-r from-white to-[#f7faf7] py-6 border-y border-green-50/50 text-center md:text-left">
    <div className="max-w-[1800px] mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="flex -space-x-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} size={18} className="text-amber-400 fill-amber-400" />
            ))}
          </div>
          <div className="pl-2 border-l border-slate-200">
            <p className="text-2xl font-black text-[#052c17] leading-none">4.9</p>
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Rating</p>
          </div>
        </div>
        <div className="hidden md:block h-8 w-px bg-slate-200" />
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <p className="text-sm font-bold text-[#052c17]">Layanan Terverifikasi di {districtName}</p>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3">
          <Users size={18} className="text-blue-600" />
          <div>
            <p className="text-sm font-black text-[#052c17]">150+</p>
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Mitra B2B</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <ShieldCheck size={18} className="text-emerald-600" />
          <div>
            <p className="text-sm font-black text-[#052c17]">Grade A</p>
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Standar QC</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Komponen Internal: Portofolio Klien
const ClientPortfolio = ({ districtName }) => {
  const segments = [
    { icon: <Building2 />, title: "Hospitalitas", list: ["Hotel Bintang 5", "Resort & Villa"] },
    { icon: <Utensils />, title: "F&B Industry", list: ["Restoran Premium", "Cafe Chain"] },
    { icon: <ShoppingBag />, title: "Modern Retail", list: ["Supermarket", "Organic Store"] },
    { icon: <Heart />, title: "Healthcare", list: ["Nutrisi Rumah Sakit", "Diet Center"] },
    { icon: <GraduationCap />, title: "Institusi", list: ["Sekolah", "Asrama Eksklusif"] },
    { icon: <Factory />, title: "Produksi", list: ["Food Processing", "Central Kitchen"] },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#f8fafc]">
      <div className="max-w-[1800px] mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-[1000] text-[#052c17] mb-4 tracking-tighter uppercase">
            Sektor <span className="text-[#15803d]">Kemitraan.</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto font-medium">
            Solusi rantai pasok sayuran segar untuk berbagai lini bisnis di {districtName}.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {segments.map((seg, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-[#15803d] mb-4">{seg.icon}</div>
              <h3 className="text-lg font-black text-[#052c17] mb-3 uppercase tracking-tight">{seg.title}</h3>
              <div className="space-y-2">
                {seg.list.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-bold text-slate-500">
                    <CheckCircle size={12} className="text-green-500" /> {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// GENERATE METADATA DINAMIS
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const district = districtsData.districts.find((d) => d.slug === slug);
  if (!district) return { title: 'Not Found' };

  const baseUrl = 'https://greenfresh.co.id';
  const fullUrl = `${baseUrl}/area/${slug}/`;

  return {
    title: `Supplier Sayur ${district.name} - Stok Stabil Harian | CV Green Fresh Cipanas`,
    description: `Supplier sayur segar tangan pertama wilayah ${district.name}. Melayani pengadaan komoditas grade A harian khusus Hotel, Restoran, dan Cafe.`,
    alternates: { canonical: fullUrl },
    openGraph: {
      title: `Supplier Sayur ${district.name} | Green Fresh Cipanas`,
      description: `Pengadaan sayur harian untuk Hotel, Restoran & Cafe wilayah ${district.name}.`,
      url: fullUrl,
      type: 'website',
    }
  };
}

// HALAMAN UTAMA (SERVER COMPONENT)
export default async function DistrictPage({ params }) {
  const { slug } = await params;
  const rawDistrict = districtsData.districts.find((d) => d.slug === slug);

  if (!rawDistrict) notFound();

  const district = { ...rawDistrict };
  const baseUrl = 'https://greenfresh.co.id';
  const currentUrl = `${baseUrl}/area/${district.slug}/`;

  // DATA SCHEMA MARKUP (JSON-LD)
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WholesaleStore",
        "@id": `${baseUrl}/#organization`,
        "name": "CV Green Fresh Cipanas",
        "url": baseUrl,
        "logo": {
          "@type": "ImageObject",
          "url": `${baseUrl}/logo.png`
        },
        "telephone": "+6287780937884",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Kp Jl. Kayumanis, RT.04/RW.04, Sukatani",
          "addressLocality": "Cipanas",
          "addressRegion": "Jawa Barat",
          "postalCode": "43253",
          "addressCountry": "ID"
        }
      },
      {
        "@type": "Service",
        "name": `Layanan Supply Sayur ${district.name}`,
        "provider": { "@id": `${baseUrl}/#organization` },
        "serviceType": "B2B Vegetable Supplier",
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": district.name
        },
        "description": `Layanan supply sayuran grade A harian untuk wilayah ${district.name}.`,
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "150",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Beranda", "item": `${baseUrl}/` },
          { "@type": "ListItem", "position": 2, "name": "Area", "item": `${baseUrl}/area/` },
          { "@type": "ListItem", "position": 3, "name": district.name, "item": currentUrl }
        ]
      }
    ]
  };

  return (
    <div className="bg-white text-[#052c17] font-sans antialiased overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <Header />

      <main>
        {/* BREADCRUMB */}
        <div className="pt-24 lg:pt-32 bg-white border-b border-slate-50">
          <nav aria-label="Breadcrumb" className="max-w-[1800px] mx-auto px-6 py-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em]">
            <Link href="/" className="flex items-center gap-1 text-slate-500 hover:text-[#166534]">Beranda</Link>
            <ChevronRight size={10} className="text-slate-300" />
            <Link href="/area" className="text-slate-500 hover:text-[#166534]">Area</Link>
            <ChevronRight size={10} className="text-slate-300" />
            <span className="text-[#166534] font-bold tracking-widest">{district.name}</span>
          </nav>
        </div>

        <DistrictHero district={district} />
        <RatingSection districtName={district.name} />

        {/* OVERVIEW & LOGISTICS */}
        <section className="py-16 md:py-24 bg-white border-b border-green-50">
          <div className="max-w-[1800px] mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-6">
                <DistrictOverview district={district} />
              </div>
              <div className="lg:col-span-6">
                <DistrictLogistics district={district} />
              </div>
            </div>
          </div>
        </section>

        <ClientPortfolio districtName={district.name} />

        {/* KATALOG HARGA */}
        <section id="katalog" className="py-16 md:py-24 bg-white">
          <div className="max-w-[1800px] mx-auto px-6">
            <div className="mb-12 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-[1000] text-[#052c17] tracking-tighter uppercase">
                Katalog <span className="text-[#15803d]">Komoditas.</span>
              </h2>
              <p className="text-slate-500 text-sm font-bold mt-2 uppercase tracking-widest">Update Harga Wilayah {district.name}</p>
            </div>
            <PriceTable data={vegetableData.slice(0, 20)} />
            <div className="mt-8 flex justify-center">
               <Link href="/produk" className="px-8 py-4 border-2 border-green-100 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-green-50 transition-all">
                  Lihat Semua Produk
               </Link>
            </div>
          </div>
        </section>

        <QualityGuarantee />
        <LiveStats />
        <DistrictRoute district={district} />
        
        {/* RANDOM NEARBY AREAS */}
        <NearbyAreas currentSlug={district.slug} />

        {/* KONTAK SALES */}
        <section id="partnership" className="py-20 md:py-32 bg-[#fcfdfc] border-t border-green-100">
          <div className="max-w-[1800px] mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-[1000] text-[#052c17] tracking-tighter uppercase">
                Hubungi <span className="text-[#15803d]">Sales.</span>
              </h2>
              <p className="text-slate-500 font-bold uppercase text-[10px] md:text-xs tracking-[0.3em] mt-4">
                Konsultasi Pengadaan Wilayah {district.name}
              </p>
            </div>
            <PartnershipForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}