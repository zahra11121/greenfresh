import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  Star, ShieldCheck, ChevronRight, Users, 
  CheckCircle, Building2, ShoppingBag, Utensils, 
  Heart, GraduationCap, Factory, MapPin 
} from 'lucide-react';

// Components
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PartnershipForm } from '@/components/PartnershipForm';
import { PriceTable } from '@/components/PriceTable';
import { vegetableData } from '@/components/data';
import { DistrictHero } from '@/components/district/DistrictHero';
import { DistrictLogistics } from '@/components/district/DistrictLogistics';
import { DistrictOverview } from '@/components/district/DistrictOverview';
import { DistrictRoute } from '@/components/district/DistrictRoute';
import { QualityGuarantee } from '@/components/city/QualityGuarantee';
import { LiveStats } from '@/components/city/LiveStats';

// Data
import districtsData from '@/data/districts.json';

// --- KONFIGURASI SSR CLOUDFLARE PAGES ---
export const runtime = 'edge'; // Wajib untuk SSR di Cloudflare
export const dynamic = 'force-dynamic'; // Memastikan halaman selalu render terbaru

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const district = districtsData.districts.find((d) => d.slug === slug);
  
  if (!district) return { title: 'Not Found' };

  const baseUrl = 'https://greenfresh.co.id';
  const fullUrl = `${baseUrl}/area/${slug}/`;

  return {
    title: `Supplier Sayur ${district.name} - Stok Stabil Harian | CV Green Fresh Cipanas`,
    description: `Supplier sayur segar tangan pertama wilayah ${district.name}. Melayani pengadaan komoditas grade A harian khusus Hotel, Restoran, dan Cafe wilayah ${district.name}.`,
    alternates: { canonical: fullUrl },
    openGraph: {
      title: `Supplier Sayur ${district.name} | Green Fresh Cipanas`,
      description: `Pengadaan sayur harian untuk Hotel, Restoran & Cafe wilayah ${district.name}.`,
      url: fullUrl,
      images: [{ url: `${baseUrl}/og-area-${slug}.jpg`, width: 1200, height: 630 }],
    },
  };
}

const NearbyAreas = ({ currentSlug }) => {
  const otherAreas = districtsData.districts
    .filter(d => d.slug !== currentSlug)
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

export default async function DistrictPage({ params }) {
  const { slug } = await params;
  const district = districtsData.districts.find((d) => d.slug === slug);

  if (!district) notFound();

  const baseUrl = 'https://greenfresh.co.id';
  const currentUrl = `${baseUrl}/area/${district.slug}/`;

  // Combined Structured Data
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WholesaleStore",
        "@id": `${baseUrl}/#organization`,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": currentUrl
        },
        "name": "CV Green Fresh Cipanas",
        "url": baseUrl,
        "logo": {
          "@type": "ImageObject",
          "url": `${baseUrl}/logo.svg`,
          "width": "600",
          "height": "60"
        },
        "image": `${baseUrl}/og-main.jpg`,
        "telephone": "+6287780937884",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Jl. Cipanas Raya",
          "addressLocality": "Cipanas",
          "addressRegion": "Jawa Barat",
          "postalCode": "43253",
          "addressCountry": "ID"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": `Katalog Layanan Supply ${district.name}`,
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": `Supplier Sayur Segar ${district.name}`,
                "serviceType": "Vegetable Supply Chain",
                "description": `Layanan pengadaan sayuran grade A harian khusus Hotel, Restoran, dan Cafe di wilayah ${district.name}.`,
                "areaServed": {
                  "@type": "AdministrativeArea",
                  "name": district.name,
                  "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "ID"
                  }
                },
                "provider": { "@id": `${baseUrl}/#organization` }
              }
            }
          ]
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Beranda",
            "item": baseUrl
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Area",
            "item": `${baseUrl}/area`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": district.name,
            "item": currentUrl
          }
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
        {/* Visual Breadcrumbs */}
        <div className="pt-24 lg:pt-32 bg-white border-b border-slate-50">
          <nav aria-label="Breadcrumb" className="max-w-[1800px] mx-auto px-6 py-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em]">
            <Link href="/" className="text-slate-500 hover:text-[#166534]">Beranda</Link>
            <ChevronRight size={10} className="text-slate-300" />
            <Link href="/area" className="text-slate-500 hover:text-[#166534]">Area</Link>
            <ChevronRight size={10} className="text-slate-300" />
            <span className="text-[#166534] font-bold tracking-widest">{district.name}</span>
          </nav>
        </div>

        <DistrictHero district={district} />
        
        <div className="w-full bg-gradient-to-r from-white to-[#f7faf7] py-6 border-y border-green-50/50">
          <div className="max-w-[1800px] mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={18} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <div className="pl-2 border-l border-slate-200">
                  <p className="text-2xl font-black text-[#052c17]">4.9</p>
                  <p className="text-[10px] font-bold uppercase text-slate-500">Rating Area</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <p className="text-sm font-bold text-[#052c17]">Layanan Terverifikasi di {district.name}</p>
              </div>
            </div>
          </div>
        </div>

        <section className="py-16 md:py-24 bg-white">
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

        <section id="katalog" className="py-16 bg-[#f8fafc]">
          <div className="max-w-[1800px] mx-auto px-6">
            <div className="mb-12 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-[1000] text-[#052c17] uppercase tracking-tighter">
                Katalog <span className="text-[#15803d]">Komoditas.</span>
              </h2>
              <p className="text-slate-500 text-sm font-bold mt-2 uppercase tracking-widest">Update Harga Khusus Area {district.name}</p>
            </div>
            <PriceTable data={vegetableData.slice(0, 20)} />
          </div>
        </section>

        <QualityGuarantee />
        <LiveStats />
        <DistrictRoute district={district} />
        
        <NearbyAreas currentSlug={district.slug} />

        <section id="partnership" className="py-20 md:py-32 bg-white">
          <div className="max-w-[1800px] mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-[1000] text-[#052c17] uppercase tracking-tighter">
                Hubungi <span className="text-[#15803d]">Sales.</span>
              </h2>
              <p className="text-slate-500 font-bold uppercase text-xs tracking-[0.3em] mt-4">
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