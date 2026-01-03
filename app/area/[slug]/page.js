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

export const dynamic = 'force-static';

// Import districts data
import districtsData from '@/data/districts.json';

/**
 * OPTIMASI: Nearby Areas Section
 * Membantu Googlebot merayap dari satu area ke area lain (Internal Linking)
 */
const NearbyAreas = ({ currentSlug }) => {
  // Ambil 6 area secara acak selain area saat ini
  const otherAreas = districtsData.districts
    .filter(d => d.slug !== currentSlug)
    .sort(() => 0.5 - Math.random())
    .slice(0, 6);

  return (
    <section className="py-16 bg-white border-t border-slate-100">
      <div className="max-w-[1800px] mx-auto px-4 md:px-8">
        <h3 className="text-xl font-black text-[#052c17] mb-8 uppercase tracking-widest flex items-center gap-2">
          <MapPin size={20} className="text-[#15803d]" /> Area Layanan Lainnya
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {otherAreas.map((area) => (
            <Link 
              key={area.slug} 
              href={`/area/${area.slug}/`}
              className="p-4 rounded-2xl border border-slate-100 hover:border-[#15803d] hover:bg-green-50 transition-all text-sm font-bold text-slate-600 text-center"
            >
              {area.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

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
          <h2 className="text-3xl md:text-5xl font-[1000] text-[#052c17] mb-4 tracking-tighter">
            Jaringan <span className="text-[#15803d]">Enterprise.</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto font-medium">
            Mitra terpercaya untuk berbagai sektor bisnis di wilayah {district.name}
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
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

  const baseUrl = 'https://greenfresh.co.id';
  const fullUrl = `${baseUrl}/area/${slug}/`;

  return {
    title: `Supplier Sayur ${district.name} - CV Green Fresh Cipanas`,
    description: `Layanan distribusi sayuran profesional untuk wilayah ${district.name}. Pasokan stabil harian kualitas Grade A untuk Hotel, Restoran, dan Cafe.`,
    alternates: { canonical: fullUrl },
    openGraph: {
      title: `Supplier Sayur ${district.name} | Green Fresh Cipanas`,
      description: `Pengadaan sayur harian untuk Hotel, Restoran & Cafe wilayah ${district.name}.`,
      url: fullUrl,
      type: 'website',
    }
  };
}

export default async function DistrictPage({ params }) {
  const { slug } = await params;
  const rawDistrict = districtsData.districts.find((d) => d.slug === slug);

  if (!rawDistrict) notFound();

  // OPTIMASI: Hanya ambil data minimal untuk dikirim ke props (Mencegah Payload Bloat)
  const district = {
    slug: rawDistrict.slug,
    name: rawDistrict.name,
    title: rawDistrict.title,
    angle: rawDistrict.angle,
    seoContent: rawDistrict.seoContent,
    clientFocus: rawDistrict.clientFocus,
    deliveryRoute: rawDistrict.deliveryRoute,
    logistics: rawDistrict.logistics
  };

  const baseUrl = 'https://greenfresh.co.id';
  const currentUrl = `${baseUrl}/area/${district.slug}/`;

  // --- SCHEMA DATA ---
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WholesaleStore",
    "name": `Green Fresh Cipanas - Supplier Sayur ${district.name}`,
    "description": `Layanan distribusi sayuran harian wilayah ${district.name} kualitas Grade A.`,
    "url": currentUrl,
    "telephone": "+6287780937884",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kp Jl. Kayumanis, RT.04/RW.04, Sukatani",
      "addressLocality": "Cipanas",
      "addressRegion": "Jawa Barat",
      "postalCode": "43253",
      "addressCountry": "ID"
    },
    "areaServed": { "@type": "AdministrativeArea", "name": district.name },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150"
    }
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Beranda", "item": `${baseUrl}/` },
      { "@type": "ListItem", "position": 2, "name": "Supplier Sayur", "item": `${baseUrl}/area/` },
      { "@type": "ListItem", "position": 3, "name": district.name, "item": currentUrl }
    ]
  };

  return (
    <div className="bg-white text-[#052c17] font-sans antialiased overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <Header />

      <main>
        <div className="pt-24 lg:pt-32 bg-slate-50 border-b border-slate-100">
          <nav className="max-w-[1800px] mx-auto px-4 md:px-8 py-6 flex items-center gap-3 text-sm font-bold text-slate-400">
            <Link href="/" className="hover:text-green-700 text-[10px] uppercase tracking-widest">Beranda</Link>
            <ChevronRight size={12} />
            <Link href="/area" className="hover:text-green-700 text-[10px] uppercase tracking-widest">Area</Link>
            <ChevronRight size={12} />
            <span className="text-[#166534] text-[10px] uppercase tracking-widest font-black">{district.name}</span>
          </nav>
        </div>

        <DistrictHero district={district} />
        <RatingSection districtName={district.name} />

        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-[1800px] mx-auto px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
              {/* Pastikan komponen-komponen ini tidak memiliki 'initial opacity 0' di Framer Motion */}
              <DistrictLogistics district={district} />
              <DistrictOverview district={district} />
            </div>
          </div>
        </section>

        <ClientPortfolio district={district} />

        <section id="pricing" className="py-16 md:py-24 bg-white">
          <div className="max-w-[1800px] mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-[1000] text-[#052c17] mb-8 text-center md:text-left tracking-tighter uppercase">
              Update <span className="text-[#15803d]">Harga Pasar.</span>
            </h2>
            {/* Hanya tampilkan 10 item pertama untuk SEO agar payload kecil, sisa di-load via client jika perlu */}
            <PriceTable data={vegetableData.slice(0, 20)} showHeader={false} />
          </div>
        </section>

        <QualityGuarantee />
        <LiveStats />
        <DistrictRoute district={district} />
        
        {/* INTERNAL LINKING HUB */}
        <NearbyAreas currentSlug={district.slug} />

        <section id="partnership" className="py-20 md:py-32 bg-slate-50 border-t border-slate-100">
          <div className="max-w-[1800px] mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-[1000] text-[#052c17] tracking-tighter mb-4 leading-none uppercase">
                Inquiry <span className="text-[#15803d]">Form.</span>
              </h2>
              <p className="text-slate-500 font-bold uppercase text-[10px] md:text-xs tracking-[0.3em]">
                Konsultasi Pengadaan {district.name}
              </p>
            </div>
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