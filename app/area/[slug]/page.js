import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PartnershipForm } from '@/components/PartnershipForm';
import { PriceTable } from '@/components/PriceTable';
import { vegetableData } from '@/components/data';
import { 
  Star, ShieldCheck, Truck, ChevronRight, Users, 
  TrendingUp, Target, Clock, Award, CheckCircle, 
  BarChart3, Building2, ShoppingBag, Utensils, 
  Heart, GraduationCap, Factory
} from 'lucide-react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { galleryData } from '@/data/galleryData';

// District Components
import { DistrictHero } from '@/components/district/DistrictHero';
import { DistrictLogistics } from '@/components/district/DistrictLogistics';
import { DistrictOverview } from '@/components/district/DistrictOverview';
import { DistrictRoute } from '@/components/district/DistrictRoute';
import { QualityGuarantee } from '@/components/city/QualityGuarantee';
import { LiveStats } from '@/components/city/LiveStats';

export const dynamic = 'force-static';

// Import districts data
import districtsData from '@/data/districts.json';

/**
 * Enhanced Rating Section
 */
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
          <p className="text-sm font-bold text-[#052c17]">Supplier Terpercaya di {districtName}</p>
        </div>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3">
          <Users size={18} className="text-blue-600" />
          <div>
            <p className="text-sm font-black text-[#052c17]">150+</p>
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Mitra</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <ShieldCheck size={18} className="text-emerald-600" />
          <div>
            <p className="text-sm font-black text-[#052c17]">Grade A+</p>
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Kualitas</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

/**
 * Client Segments Section
 */
const ClientPortfolio = ({ district }) => {
  const segments = [
    { icon: <Building2 />, title: "Hospitalitas", list: ["Hotel Bintang 5", "Restoran Premium"] },
    { icon: <Utensils />, title: "Katering", list: ["Korporat", "Industrial"] },
    { icon: <ShoppingBag />, title: "Ritel Modern", list: ["Supermarket", "Toko Spesialis"] },
    { icon: <Heart />, title: "Kesehatan", list: ["Nutrisi RS", "Pusat Kesehatan"] },
    { icon: <GraduationCap />, title: "Pendidikan", list: ["Sekolah Internasional", "Kampus"] },
    { icon: <Factory />, title: "Industri", list: ["Produsen Makanan", "Minuman"] },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#f8fafc]">
      <div className="max-w-[1800px] mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-[1000] text-[#052c17] mb-4 tracking-tighter text-center">
            Jaringan <span className="text-[#15803d]">Enterprise.</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto font-medium text-center">
            Mitra terpercaya untuk berbagai sektor bisnis di wilayah {district.name}
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 text-center md:text-left">
          {segments.map((seg, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center md:items-start">
              <div className="text-[#15803d] mb-4">{seg.icon}</div>
              <h3 className="text-lg font-black text-[#052c17] mb-3">{seg.title}</h3>
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

export async function generateStaticParams() {
  return districtsData.districts.map((district) => ({ slug: district.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const district = districtsData.districts.find((d) => d.slug === slug);
  if (!district) return { title: 'Halaman Tidak Ditemukan' };

  return {
    title: `Supplier Sayur ${district.name} - CV Green Fresh Cipanas`,
    description: `Layanan distribusi sayuran profesional untuk wilayah ${district.name}. Kami menjamin pasokan stabil harian dan kualitas Grade A langsung dari petani Cipanas untuk kebutuhan Hotel, Restoran, supermarket dan Cafe Anda.`,
  };
}

export default async function DistrictPage({ params }) {
  const { slug } = await params;
  const district = districtsData.districts.find((d) => d.slug === slug);

  if (!district) notFound();

  return (
    <div className="bg-white text-[#052c17] font-sans antialiased overflow-x-hidden">
      <Header />
      
      <main>
        {/* Breadcrumb Navigation */}
        <div className="pt-24 lg:pt-32 bg-slate-50 border-b border-slate-100">
          <nav className="max-w-[1800px] mx-auto px-4 md:px-8 py-6 flex items-center gap-3 text-sm font-bold text-slate-400">
            <Link href="/" className="hover:text-green-700">Beranda</Link>
            <ChevronRight size={14} />
            <Link href="/area" className="hover:text-green-700">Area</Link>
            <ChevronRight size={14} />
            <span className="text-[#166534]">{district.name}</span>
          </nav>
        </div>

        <DistrictHero district={district} />
        <RatingSection districtName={district.name} />

        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-[1800px] mx-auto px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
              <DistrictLogistics district={district} />
              <DistrictOverview district={district} />
            </div>
          </div>
        </section>

        <ClientPortfolio district={district} />

        {/* Pricing Section */}
        <section id="pricing" className="py-16 md:py-24 bg-white">
          <div className="max-w-[1800px] mx-auto px-4 md:px-8 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-black text-[#052c17] mb-8 text-center md:text-left">
              Update <span className="text-[#15803d]">Harga Pasar.</span>
            </h2>
            <PriceTable data={vegetableData} showHeader={false} />
          </div>
        </section>

        <QualityGuarantee />
        <LiveStats />
        
        <DistrictRoute district={district} />

        {/* Inquiry Form Section - Ukuran disamakan dengan komponen di atas (1800px) */}
        <section id="partnership" className="py-20 md:py-32 bg-slate-50 border-t border-slate-100">
          <div className="max-w-[1800px] mx-auto px-4 md:px-8">
            {/* Header Form Tetap Center */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-[#052c17] tracking-tighter mb-4 leading-none">
                Inquiry <span className="text-[#15803d]">Form.</span>
              </h2>
              <p className="text-slate-500 font-bold uppercase text-[10px] md:text-xs tracking-[0.3em]">
                Konsultasi Pengadaan {district.name}
              </p>
            </div>
            
            {/* Form mengisi container 1800px secara wajar */}
            <div className="w-full">
               <PartnershipForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}