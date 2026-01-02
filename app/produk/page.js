// app/produk/page.js
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import ProductCatalogClient from './ProductCatalogClient';
import vegetableRawData from '../../data/products.json';

export const metadata = {
  title: 'Katalog Komoditas Sayur Segar Cipanas | Greenfresh B2B Supply',
  description: 'Jelajahi lebih dari 70 jenis sayuran grade A langsung dari petani Cipanas. Stok stabil, kualitas premium, dan pengiriman terjadwal.',
};

export default function ProductCatalogPage() {
  const uniqueMap = new Map();
  if (vegetableRawData) {
    vegetableRawData.forEach(item => {
      if (!uniqueMap.has(item.name)) {
        uniqueMap.set(item.name, item);
      }
    });
  }
  const vegetableData = Array.from(uniqueMap.values());

  const lcpImage = vegetableData.length > 0 ? vegetableData[0].image : null;

  return (
    <div className="bg-[#fcfdfc] min-h-screen font-sans overflow-x-hidden">
      {/* PRELOAD LCP IMAGE */}
      {lcpImage && (
        <link
          rel="preload"
          as="image"
          href={`/_next/image?url=${encodeURIComponent(lcpImage)}&w=1080&q=75`}
          // PERBAIKAN: Gunakan camelCase imageSrcSet
          imageSrcSet={`/_next/image?url=${encodeURIComponent(lcpImage)}&w=640&q=75 640w, /_next/image?url=${encodeURIComponent(lcpImage)}&w=1080&q=75 1080w`}
          imageSizes="(max-width: 640px) 50vw, 33vw"
        />
      )}
      
      <Header />
      <main>
        <ProductCatalogClient initialData={vegetableData} />
      </main>
      <Footer />
    </div>
  );
}