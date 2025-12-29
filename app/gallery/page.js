import React from 'react';
import { Header } from '@/components/Header';
import { Gallery } from '@/components/Gallery';
import { Footer } from '@/components/Footer';
import { Camera, Play, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Galeri Visual & Dokumentasi Kualitas | Green Fresh Cipanas',
  description: 'Lihat potret nyata standardisasi sayur kualitas super kami. Dokumentasi video dan foto pengiriman harian dari kebun Cipanas ke Jabodetabek.',
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#fcfcfc]">
      <Header />

      {/* Hero Section Galeri */}
      <section className="pt-32 lg:pt-44 pb-12 lg:pb-20 bg-white border-b border-slate-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center lg:text-left">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 rounded-full text-[#16a34a] text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                <Camera size={14} /> Official Media Center
              </div>
              <h1 className="text-4xl lg:text-7xl font-serif italic text-[#052c17] leading-[1.1] tracking-tighter mb-6">
                Bukti Nyata <span className="text-[#16a34a]">Standardisasi Super.</span>
              </h1>
              <p className="text-base lg:text-xl text-slate-500 font-light leading-relaxed max-w-2xl">
                Kami percaya pada transparansi. Halaman ini mendokumentasikan proses sortasi, pengemasan, dan kualitas produk yang kami kirimkan ke mitra hotel dan retail setiap harinya.
              </p>
            </div>

            {/* Statistik Ringkas */}
            <div className="grid grid-cols-2 gap-4 w-full lg:w-auto">
              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                <p className="text-3xl font-serif italic text-[#052c17]">25+</p>
                <p className="text-[9px] font-black uppercase tracking-widest text-[#16a34a]">Komoditas</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                <p className="text-3xl font-serif italic text-[#052c17]">100%</p>
                <p className="text-[9px] font-black uppercase tracking-widest text-[#16a34a]">Grade-A</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Komponen Galeri Utama (Video & Foto Masonry) */}
      <Gallery />

      {/* Section Tambahan: Jaminan Kualitas */}
      <section className="py-20 bg-white border-t border-slate-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-[#16a34a] mx-auto">
                <Play size={24} />
              </div>
              <h3 className="font-serif italic text-xl text-[#052c17]">Video QC Harian</h3>
              <p className="text-sm text-slate-400 leading-relaxed">Video diambil secara live saat proses sortasi di Hub Sukatani untuk menjamin akurasi produk.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-[#16a34a] mx-auto">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="font-serif italic text-xl text-[#052c17]">Tanpa Filter</h3>
              <p className="text-sm text-slate-400 leading-relaxed">Seluruh foto menggunakan pencahayaan alami untuk menampilkan warna asli kesegaran sayuran.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-[#16a34a] mx-auto">
                <Camera size={24} />
              </div>
              <h3 className="font-serif italic text-xl text-[#052c17]">Update Berkala</h3>
              <p className="text-sm text-slate-400 leading-relaxed">Galeri diperbarui setiap minggu untuk mencerminkan ketersediaan stok panen terbaru.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}