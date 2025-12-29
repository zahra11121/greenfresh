export const CityFAQ = ({ cityName }) => {
  const faqs = [
    { q: `Berapa Minimum Order untuk area ${cityName}?`, a: 'Kami sangat fleksibel, mulai dari kebutuhan cafe harian hingga suplai industri tonase besar.' },
    { q: 'Apakah harga sudah termasuk ongkir?', a: `Khusus rute tetap wilayah ${cityName}, harga katalog kami sudah termasuk biaya pengiriman (Free Ongkir).` },
    { q: 'Bagaimana sistem retur?', a: 'Kami menerapkan kebijakan retur instan di tempat jika kualitas tidak sesuai standar yang disepakati saat serah terima.' },
  ];

  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-serif italic font-black uppercase">Informasi Kemitraan</h3>
      <div className="divide-y divide-slate-100 border-t border-slate-100">
        {faqs.map((faq, index) => (
          <div key={index} className="py-5 group">
            <h4 className="text-sm font-bold mb-2 italic text-[#052c17] group-hover:text-[#16a34a] transition-colors">
              Q: {faq.q}
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed font-light">
              {faq.a}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};