// data/cities.js

export const jabodetabekCities = [
  // --- KAWASAN ELIT & MANDIRI ---
  { 
    slug: 'pik-2-pantai-indah-kapuk', 
    name: 'PIK 2 & Pantai Indah Kapuk',
    title: 'Supplier Sayur Premium PIK 2',
    angle: 'Mitra strategis pengadaan sayuran standar ekspor untuk supermarket modern dan fine dining di kawasan PIK 2. Menjamin ketersediaan stok tanpa perantara.',
    clientFocus: 'Supermarket Premium, Seafood Fine Dining, & Luxury Clusters',
    deliveryRoute: 'Distribusi prioritas via Tol JORR untuk menjaga kesegaran produk dari kebun Sukatani.',
    usp: 'Entitas PKP Resmi dengan sistem sortasi Grade-A untuk standar retail modern.',
    logistics: [
      { time: '20:00', title: 'Grade-A Sorting', desc: 'Sortasi ketat di Hub Cipanas sesuai standar supermarket.' },
      { time: '00:30', title: 'Express JORR Route', desc: 'Keberangkatan dini hari guna menjamin kesegaran maksimal.' },
      { time: '04:30', title: 'Retail-Ready Drop', desc: 'Tiba di loading dock sebelum jam operasional retail.' }
    ]
  },
  { 
    slug: 'bsd-city-serpong', 
    name: 'BSD City',
    title: 'Pemasok Sayuran Korporat BSD City',
    angle: 'Solusi rantai pasok terukur untuk ekosistem kuliner BSD. Kami menyediakan stabilitas harga kontrak harian bagi mitra industri.',
    clientFocus: 'Cloud Kitchen, Institusi Pendidikan, & Central Kitchen',
    deliveryRoute: 'Integrasi pengiriman via Tol Serpong-Balaraja menjangkau seluruh zona komersial.',
    usp: 'Dukungan arus kas dengan fasilitas Termin Pembayaran (TOP) hingga 30 hari.',
    logistics: [
      { time: '21:00', title: 'Batch Processing', desc: 'Konsolidasi pesanan katering industri & sekolah.' },
      { time: '01:30', title: 'West Hub Transit', desc: 'Manajemen rute strategis via Tol Serpong.' },
      { time: '05:30', title: 'Institutional Delivery', desc: 'Drop-off tepat waktu di area perkantoran & sekolah.' }
    ]
  },
  { 
    slug: 'alam-sutera-tangerang', 
    name: 'Alam Sutera',
    title: 'Distribusi Sayur Segar Alam Sutera',
    angle: 'Menghubungkan kekayaan alam Cipanas dengan industri bakery dan gourmet market di Alam Sutera secara efisien dan transparan.',
    clientFocus: 'Gourmet Market, Artisan Bakery, & Restoran Tematik',
    deliveryRoute: 'Pengiriman harian terjadwal melalui akses Tol Kunciran untuk menjaga rantai dingin.',
    usp: 'Kapasitas suplai harian besar dengan dukungan 200+ mitra petani lokal.',
    logistics: [
      { time: '20:30', title: 'Cold Chain Prep', desc: 'Pendinginan suhu komoditas di warehouse Cipanas.' },
      { time: '01:45', title: 'Kunciran Fast Track', desc: 'Distribusi cepat melalui jalur Tol Kunciran.' },
      { time: '06:00', title: 'Artisan Batch Drop', desc: 'Tiba tepat waktu untuk proses produksi pagi.' }
    ]
  },
  { 
    slug: 'gading-serpong-summarecon', 
    name: 'Gading Serpong',
    title: 'Mitra Pengadaan Sayur Gading Serpong',
    angle: 'Partner strategis bagi chef dan pelaku bisnis kuliner yang mengutamakan integritas kualitas bahan baku di Gading Serpong.',
    clientFocus: 'Cafe Modern, Restoran Fusion, & Boutique Supermarket',
    deliveryRoute: 'Layanan antar subuh untuk memastikan sayuran tiba dalam kondisi puncak kesegaran.',
    usp: 'Akses ke 200 hektar area tanam lokal pilihan dengan jaminan ketetapan waktu 100%.',
    logistics: [
      { time: '21:30', title: 'Quality Inspection', desc: 'Pengecekan akhir standar Grade-A sebelum pengiriman.' },
      { time: '02:00', title: 'Direct Cluster Route', desc: 'Pengiriman langsung ke titik hub komersial Serpong.' },
      { time: '06:15', title: 'Chef Review Ready', desc: 'Diterima oleh tim dapur sebelum jam operasional dimulai.' }
    ]
  },
  { 
    slug: 'lippo-karawaci-tangerang', 
    name: 'Lippo Karawaci',
    title: 'Suplai Sayur Higienis Rumah Sakit & Resort Karawaci',
    angle: 'Menyuplai kebutuhan sayuran dengan standar higienitas tinggi untuk instalasi gizi rumah sakit dan hunian ekspatriat.',
    clientFocus: 'Rumah Sakit Internasional, Klaster Ekspatriat, & Clubhouse',
    deliveryRoute: 'Logistik via Tol Jakarta-Merak dengan kontrol suhu ketat untuk menjaga nutrisi.',
    usp: 'Entitas PKP Resmi dengan transparansi administrasi untuk audit korporasi.',
    logistics: [
      { time: '19:30', title: 'Sanitized Packing', desc: 'Proses sortasi standar keamanan pangan di hub utama.' },
      { time: '01:15', title: 'Med-Express Route', desc: 'Prioritas logistik via Tol Jakarta-Merak.' },
      { time: '04:45', title: 'Clinical Kitchen Drop', desc: 'Tiba di instalasi gizi RS & residensial.' }
    ]
  },
  { 
    slug: 'bintaro-jaya-sektor', 
    name: 'Bintaro Jaya',
    title: 'Supplier Sayur Segar & Organik Bintaro Jaya',
    angle: 'Mendukung gaya hidup sehat warga Bintaro dengan suplai harian langsung dari lahan produktif Cipanas.',
    clientFocus: 'Healthy Food Resto, Toko Organik, & Restoran Keluarga',
    deliveryRoute: 'Jalur distribusi efisien Bintaro Sektor 1-9 untuk menjamin kesegaran maksimal.',
    usp: 'Integritas kualitas dari bumi Cipanas tanpa melalui rantai perantara.',
    logistics: [
      { time: '21:00', title: 'Freshness Guard', desc: 'Sortasi hasil panen harian dari mitra petani.' },
      { time: '02:15', title: 'Sektor-to-Sektor', desc: 'Distribusi sistem rute pendek sektor 1 hingga 9.' },
      { time: '05:45', title: 'Fresh Store Landing', desc: 'Tiba di toko organik & resto sehat Bintaro.' }
    ]
  },

  // --- JAKARTA CORE ---
  { 
    slug: 'jakarta-pusat-cbd', 
    name: 'Jakarta Pusat CBD',
    title: 'Partner Sayur Higienis Hotel & Korporat Jakarta Pusat',
    angle: 'Green Fresh Cipanas menjamin standar kualitas tertinggi untuk hotel bintang lima di pusat bisnis Jakarta.',
    clientFocus: 'Hotel Bintang 5, Kantin Eksekutif, & Kedutaan Besar',
    deliveryRoute: 'Manajemen pengiriman khusus area ganjil-genap sebelum jam kantor.',
    usp: 'Fasilitas pembayaran termin (TOP) dan kepastian harga kontrak tahunan.',
    logistics: [
      { time: '19:00', title: 'CBD Standard Prep', desc: 'Pengemasan khusus standar hotel bintang 5.' },
      { time: '23:30', title: 'Gage-Exempt Route', desc: 'Optimasi rute fajar untuk menghindari ganjil-genap.' },
      { time: '04:00', title: 'Hotel Loading Bay', desc: 'Penyerahan barang sebelum jam operasional kantor.' }
    ]
  },
  { 
    slug: 'jakarta-selatan-senopati', 
    name: 'Jakarta Selatan Senopati',
    title: 'Suplai Sayur Grade-A Kawasan Kuliner Senopati',
    angle: 'Akurasi kualitas dan konsistensi stok untuk standar tinggi fine dining di Jakarta Selatan.',
    clientFocus: 'Fine Dining, Bistro Premium, & Luxury Cafe',
    deliveryRoute: 'Sistem pengiriman terjadwal harian untuk mendukung rotasi stok FIFO.',
    usp: 'Sistem suplai terintegrasi dari Operational Hub Sukatani langsung ke dapur.',
    logistics: [
      { time: '21:30', title: 'Manual Sortation', desc: 'Sortasi manual untuk sayuran bentuk & warna sempurna.' },
      { time: '02:00', title: 'South Jakarta Hub', desc: 'Distribusi rute Senopati, SCBD, dan Gunawarman.' },
      { time: '05:30', title: 'Kitchen Prep Drop', desc: 'Tiba tepat waktu untuk persiapan tim dapur.' }
    ]
  },
  { 
    slug: 'jakarta-barat-puri', 
    name: 'Jakarta Barat Puri',
    title: 'Mitra Sayuran Segar Puri Indah',
    angle: 'Suplai rutin sayuran berkualitas dari kebun Cipanas untuk sektor Horeka di Jakarta Barat.',
    clientFocus: 'Restoran Oriental, Modern Market, & Food Court',
    deliveryRoute: 'Logistik terjadwal via Tol Dalam Kota untuk presisi waktu.',
    usp: 'Compliance terjamin sebagai entitas PKP resmi untuk mitra korporasi.',
    logistics: [
      { time: '20:00', title: 'Daily Load Prep', desc: 'Pemuatan hasil bumi pilihan sesuai order klien.' },
      { time: '01:00', title: 'West Corridor Route', desc: 'Pengiriman via rute Tol Jakarta-Tangerang.' },
      { time: '05:15', title: 'Puri Fresh Landing', desc: 'Drop barang di hub kuliner Puri Indah.' }
    ]
  },
  { 
    slug: 'jakarta-utara-kelapa-gading', 
    name: 'Jakarta Utara Kelapa Gading',
    title: 'Distribusi Sayur Segar Kelapa Gading & Sunter',
    angle: 'Menjamin mata rantai distribusi tetap pendek dan efisien untuk kebutuhan kuliner Jakarta Utara.',
    clientFocus: 'Seafood Fine Dining, Grill House, & Tenant Mall',
    deliveryRoute: 'Akses distribusi Bypass dan Tol Pulomas menghindari kemacetan.',
    usp: 'Jaminan kesegaran hingga ke pintu gudang dengan kontrol logistik terukur.',
    logistics: [
      { time: '21:00', title: 'North Area Sort', desc: 'Pemilahan sayur pendamping menu seafood/grill.' },
      { time: '01:30', title: 'Bypass North Route', desc: 'Distribusi cepat via Jalur Bypass Pulomas.' },
      { time: '05:45', title: 'Gading Hub Landing', desc: 'Distribusi merata di Kelapa Gading & Sunter.' }
    ]
  },
  { 
    slug: 'jakarta-timur-cakung', 
    name: 'cakung jakarta timur',
    title: 'Suplai Sayuran Industri Cakung',
    angle: 'Layanan distribusi sayuran volume besar (hingga 10 ton) untuk katering industri di Cakung Jakarta Timur.',
    clientFocus: 'Catering Industri, Hospital Canteen, & Retailers',
    deliveryRoute: 'Jalur Tol Becakayu & JORR menjangkau seluruh area Timur.',
    usp: 'Kapasitas tonase harian besar dengan stabilitas harga kontrak tetap.',
    logistics: [
      { time: '18:00', title: 'Bulk Load Prep', desc: 'Pemuatan tonase besar di Main Warehouse Sukatani.' },
      { time: '23:00', title: 'East Gate Logistics', desc: 'Pengiriman via Tol JORR & Becakayu.' },
      { time: '04:15', title: 'Bulk Canteen Drop', desc: 'Tiba sebelum jadwal operasional katering pagi.' }
    ]
  },

  // --- KOTA METROPOLITAN ---
  { 
    slug: 'jakarta-selatan', 
    name: 'Jakarta Selatan',
    title: 'Distributor Sayuran B2B Jakarta Selatan',
    angle: 'Kami melayani kebutuhan suplai rutin sayuran segar dari Cipanas untuk sektor Horeka seluruh Jakarta Selatan.',
    clientFocus: 'Hotel, Restoran, Cafe, & Catering Korporat',
    deliveryRoute: 'Armada kami menjangkau seluruh kecamatan setiap subuh.',
    usp: 'Harga tangan pertama langsung dari petani dengan kualitas sortasi Grade-A.',
    logistics: [
      { time: '21:00', title: 'Horeka Sorting', desc: 'Sortasi harian sesuai standar hotel & resto.' },
      { time: '01:30', title: 'South Metro Fleet', desc: 'Penyisiran rute Jakarta Selatan mulai jam 1 pagi.' },
      { time: '06:00', title: 'Final Kitchen Drop', desc: 'Tiba sebelum jam operasional dapur umum.' }
    ]
  },
  { 
    slug: 'jakarta-pusat', 
    name: 'Jakarta Pusat',
    title: 'Agen Sayur Tangan Pertama Jakarta Pusat',
    angle: 'Penyedia kebutuhan sayur mayur terlengkap untuk bisnis kuliner di pusat Jakarta dengan legalitas PKP.',
    clientFocus: 'Rumah Makan, Kantin Gedung, & Bisnis Retail',
    deliveryRoute: 'Pengiriman fajar terjadwal melalui jalur pusat kota strategis.',
    usp: 'Stabilitas harga kontrak dan integritas pengiriman 100% tepat waktu.',
    logistics: [
      { time: '20:30', title: 'Mainstock Packing', desc: 'Konsolidasi stok sayur mayur komoditas utama.' },
      { time: '01:00', title: 'Central Core Route', desc: 'Pengiriman area Gambir, Menteng, dan sekitarnya.' },
      { time: '05:30', title: 'Urban Kitchen Drop', desc: 'Penyerahan barang di kantin gedung & kantor.' }
    ]
  },
  { 
    slug: 'jakarta-barat', 
    name: 'Jakarta Barat',
    title: 'Pemasok Sayuran Fresh Jakarta Barat',
    angle: 'Melayani pengiriman harian sayuran berkualitas untuk area Jakarta Barat langsung dari kebun.',
    clientFocus: 'Restoran, Pasar Modern, & Katering Industri',
    deliveryRoute: 'Distribusi rutin via Tol Dalam Kota untuk menjaga kesegaran.',
    usp: 'Fasilitas Termin Pembayaran (TOP) hingga 30 hari untuk mitra kontrak.',
    logistics: [
      { time: '21:15', title: 'Daily Sortation', desc: 'Sortasi sayur harian untuk katering.' },
      { time: '01:45', title: 'West Jakarta Fleet', desc: 'Armada logistik menyisir area Cengkareng ke Grogol.' },
      { time: '06:15', title: 'Business Unit Drop', desc: 'Tiba di gudang klien tepat waktu.' }
    ]
  },
  { 
    slug: 'jakarta-utara', 
    name: 'Jakarta Utara',
    title: 'Supplier Sayuran Segar & Higienis Jakarta Utara',
    angle: 'Mitra suplai sayuran yang memahami standar higienitas tinggi untuk sektor kuliner pesisir.',
    clientFocus: 'Restoran Seafood, Food Court, & Retailer',
    deliveryRoute: 'Jalur distribusi area pesisir yang handal dan tepat waktu.',
    usp: 'Standar industri Grade-A dengan jangkauan logistik terukur.',
    logistics: [
      { time: '20:45', title: 'Quality Inspection', desc: 'Pembersihan & inspeksi sayur sebelum packing.' },
      { time: '01:30', title: 'Coastline Route', desc: 'Logistik rute Pluit, Tanjung Priok, ke Sunter.' },
      { time: '06:00', title: 'Retail Hub Drop', desc: 'Penyerahan barang di unit bisnis kuliner.' }
    ]
  },
  { 
    slug: 'bekasi', 
    name: 'Bekasi',
    title: 'Distributor Sayuran Bekasi',
    angle: 'Solusi pengadaan bahan baku sayur grosir untuk wilayah Bekasi dengan kapasitas tonase besar.',
    clientFocus: 'Catering Industri, Rumah Sakit, & Warung Kuliner',
    deliveryRoute: 'Akses Tol Jakarta-Cikampek untuk pengiriman volume industri.',
    usp: 'Harga kompetitif langsung dari petani dan kepastian stok sepanjang musim.',
    logistics: [
      { time: '18:30', title: 'Wholesale Prep', desc: 'Pengepakan skala grosir di Main Warehouse Cipanas.' },
      { time: '00:30', title: 'East Way Logistics', desc: 'Pengiriman via Jalur Kalimalang & Tol Cikampek.' },
      { time: '04:45', title: 'Bekasi Hub Landing', desc: 'Tiba di area Bekasi Timur, Barat, dan Utara.' }
    ]
  },
  { 
    slug: 'bekasi-kota-summarecon', 
    name: 'Bekasi Kota',
    title: 'Mitra Suplai Bahan Pangan Bekasi Kota',
    angle: 'Mendukung pertumbuhan bisnis kuliner di Bekasi dengan suplai harian yang terintegrasi.',
    clientFocus: 'Tenant Mall, Restoran Keluarga, & Food Hubs',
    deliveryRoute: 'Distribusi fajar area Summarecon dan pusat kota Bekasi.',
    usp: 'Entitas PKP resmi dengan dokumen compliance yang lengkap.',
    logistics: [
      { time: '21:00', title: 'Commercial Prep', desc: 'Sortasi khusus untuk kebutuhan tenant mall.' },
      { time: '02:00', title: 'Summarecon Route', desc: 'Fokus pengiriman area Bekasi Selatan & Summarecon.' },
      { time: '05:45', title: 'Tenant Loading Bay', desc: 'Tiba sebelum loading jam operasional mall.' }
    ]
  },
  { 
    slug: 'depok', 
    name: 'Depok',
    title: 'Pemasok Sayuran Segar Harian Wilayah Depok',
    angle: 'Menjadi partner terpercaya bagi pelaku usaha kuliner Depok dengan transparansi harga.',
    clientFocus: 'Cafe, Cloud Kitchen, & UMKM Kuliner',
    deliveryRoute: 'Pengiriman setiap pagi melalui akses Jalan Raya Bogor.',
    usp: 'Fleksibilitas pembayaran dan stabilitas harga kontrak untuk UMKM.',
    logistics: [
      { time: '21:30', title: 'UMKM Selection', desc: 'Sortasi pesanan skala menengah (Cafe/Resto).' },
      { time: '02:15', title: 'Depok-Bogor Way', desc: 'Pengiriman via rute Jalan Raya Bogor.' },
      { time: '06:00', title: 'Cafe Unit Landing', desc: 'Distribusi area Cimanggis hingga Sawangan.' }
    ]
  },
  { 
    slug: 'depok-margonda', 
    name: 'Depok Margonda',
    title: 'Supplier Sayuran Supermasket Cafe & Resto Margonda',
    angle: 'Fokus melayani kebutuhan sayuran pusat kuliner Margonda dengan sistem distribusi cepat.',
    clientFocus: 'Modern Cafe, Restoran Mahasiswa, & Boutique Resto',
    deliveryRoute: 'Akses distribusi area Beji dan Margonda tepat waktu.',
    usp: 'Produk Grade-A langsung dari bumi Cipanas untuk standar estetika cafe.',
    logistics: [
      { time: '22:00', title: 'Cafe Aesthetics Sort', desc: 'Pengepakan sayuran estetik untuk kebutuhan cafe.' },
      { time: '02:30', title: 'Beji-Margonda Route', desc: 'Rute khusus pusat kuliner Margonda Raya.' },
      { time: '05:45', title: 'Margonda Hub Drop', desc: 'Penyerahan barang di area ruko Margonda.' }
    ]
  },
  { 
    slug: 'tangerang', 
    name: 'Tangerang',
    title: 'Supplier Sayuran Segar Tangerang',
    angle: 'Layanan logistik sayuran cepat dan efisien untuk area Tangerang dan Bandara.',
    clientFocus: 'Flight Catering, Apartemen, & Food Court',
    deliveryRoute: 'Armada berpendingin via Tol Jakarta-Merak menjaga kesegaran.',
    usp: 'Kapasitas 10 ton harian dengan dukungan sistem suplai terintegrasi.',
    logistics: [
      { time: '19:00', title: 'Industrial Grade Sort', desc: 'Sortasi dengan kontrol kualitas jasa boga.' },
      { time: '00:30', title: 'Merak Fast Track', desc: 'Pengiriman via Tol Jakarta-Merak rute Tangerang.' },
      { time: '04:30', title: 'Airport Area Drop', desc: 'Tiba di hub catering bandara & apartemen.' }
    ]
  },
  { 
    slug: 'tangerang-selatan', 
    name: 'Tangerang Selatan',
    title: 'Distributor Sayuran Segar Tangsel',
    angle: 'Menyediakan pilihan sayuran sehat dari Cipanas untuk komunitas modern di Tangsel.',
    clientFocus: 'Healthy Food Resto, Organic Market, & Residensial',
    deliveryRoute: 'Jalur distribusi harian Ciputat, Pamulang, hingga Serpong.',
    usp: 'Akses langsung 200 hektar area tanam lokal pilihan di Cipanas.',
    logistics: [
      { time: '21:45', title: 'Product Selection', desc: 'Pengemasan khusus sayur harian & herbs.' },
      { time: '02:00', title: 'Tangsel Inner Loop', desc: 'Menyisir Pamulang, Ciputat, hingga Serpong.' },
      { time: '05:30', title: 'Market/Resto Drop', desc: 'Drop off di toko organik & resto sehat.' }
    ]
  },

  // --- INDUSTRIAL & SPECIAL AREA ---
  { 
    slug: 'cikarang', 
    name: 'Cikarang',
    title: 'Mitra Suplai Sayuran Industri Cikarang',
    angle: 'Layanan pengadaan sayur profesional dengan administrasi pajak (PKP) transparan untuk pabrik.',
    clientFocus: 'Catering Pabrik, Mess Karyawan, & Procurement',
    deliveryRoute: 'Akses harian ke seluruh kawasan industri besar di Cikarang.',
    usp: 'Kapasitas tonase besar dan stabilitas harga kontrak tahunan.',
    logistics: [
      { time: '18:15', title: 'Bulk Industrial Sort', desc: 'Sortasi volume besar untuk katering pabrik.' },
      { time: '23:00', title: 'Cikarang Express Fleet', desc: 'Pengiriman via Tol Jakarta-Cikampek.' },
      { time: '04:00', title: 'Mess/Factory Drop', desc: 'Tiba di kantin kawasan industri Deltamas/EJIP.' }
    ]
  },
  { 
    slug: 'cikarang-jababeka-industrial', 
    name: 'Cikarang Jababeka',
    title: 'Mitra Logistik Sayur Skala Besar Jababeka',
    angle: 'Solusi efisiensi pengadaan katering industri harian dengan volume tonase besar harian.',
    clientFocus: 'Katering Industri, Kantin Pabrik, & Food Industrial',
    deliveryRoute: 'Armada logistik kapasitas besar langsung ke Jababeka I & II.',
    usp: 'Fasilitas pembayaran termin (TOP) hingga 30-45 hari bagi mitra kontrak.',
    logistics: [
      { time: '17:30', title: 'Heavy Loading', desc: 'Pengepakan armada truk pendingin kapasitas besar.' },
      { time: '22:30', title: 'Jababeka Direct Route', desc: 'Akses langsung kawasan industri Jababeka.' },
      { time: '03:30', title: 'Pre-Shift Arrival', desc: 'Tiba di loading dock sebelum shift fajar.' }
    ]
  },
  { 
    slug: 'cibubur-kota-wisata-legenda', 
    name: 'Cibubur & Kota Wisata',
    title: 'Pemasok Sayuran Klaster Residensial Cibubur',
    angle: 'Melayani kebutuhan suplai sayur untuk bisnis kuliner di jalur Transyogi langsung dari Cipanas.',
    clientFocus: 'Cluster Catering, Restoran Keluarga, & Fresh Market',
    deliveryRoute: 'Pengiriman fajar via Tol Jagorawi menghindari kemacetan.',
    usp: 'Jaminan kesegaran maksimal dengan waktu tempuh logistik terukur.',
    logistics: [
      { time: '21:00', title: 'Residential Sort', desc: 'Sortasi sayur untuk catering rumahan & market.' },
      { time: '01:30', title: 'Transyogi Route', desc: 'Pengiriman via rute Jagorawi-Cibubur.' },
      { time: '05:00', title: 'Kota Wisata Landing', desc: 'Tiba di cluster katering & hub kuliner.' }
    ]
  },
  { 
    slug: 'bogor', 
    name: 'Bogor',
    title: 'Pemasok Sayuran Tangan Pertama Bogor',
    angle: 'Memanfaatkan kedekatan geografis Hub Sukatani untuk kesegaran tak tertandingi di Bogor.',
    clientFocus: 'Restoran Heritage, Cafe Modern, & Destinasi Kuliner',
    deliveryRoute: 'Jalur distribusi Puncak-Ciawi yang responsif dan fleksibel.',
    usp: 'Produk Grade-A dengan harga lebih bersaing tanpa perantara.',
    logistics: [
      { time: '22:30', title: 'Late Night Harvest', desc: 'Sortasi hasil panen sore hari di Hub Sukatani.' },
      { time: '02:00', title: 'Bogor Direct Route', desc: 'Pengiriman jalur Ciawi-Bogor Kota.' },
      { time: '05:30', title: 'Heritage Resto Drop', desc: 'Tiba di dapur area Bogor Tengah/Timur.' }
    ]
  },
  { 
    slug: 'bogor-kota-kuliner', 
    name: 'Bogor Kota Kuliner',
    title: 'Suplai Sayuran Segar Tercepat Jalur Puncak',
    angle: 'Menghubungkan langsung hasil panen Cipanas dengan dapur Anda tanpa perantara.',
    clientFocus: 'Restoran Keluarga, Hotel Resort, & Cafe Heritage',
    deliveryRoute: 'Distribusi setiap subuh melalui jalur fajar Puncak-Bogor.',
    usp: 'Visi kami menjadi jembatan terpercaya pangan modern yang higienis.',
    logistics: [
      { time: '22:45', title: 'Ultra-Fresh Selection', desc: 'Pemilahan sayur paling segar paska panen.' },
      { time: '02:30', title: 'Downhill Logistics', desc: 'Pengiriman cepat jalur Puncak-Gadog.' },
      { time: '05:00', title: 'Breakfast Service Drop', desc: 'Diterima hotel untuk kebutuhan sarapan pagi.' }
    ]
  },
  { 
    slug: 'sentul-city-resort-bogor', 
    name: 'Sentul City',
    title: 'Suplai Sayuran Resort & Wellness Sentul',
    angle: 'Membawa atmosfer kebun langsung ke dapur Anda melalui sistem farm-to-table terpadu.',
    clientFocus: 'Resort & Spa, Villa Eksklusif, & Wellness Center',
    deliveryRoute: 'Pengiriman langsung dari Cipanas via jalur alternatif Sentul.',
    usp: 'Integritas dan transparansi pengadaan hasil bumi untuk sektor industri.',
    logistics: [
      { time: '22:00', title: 'Wellness Hub Sort', desc: 'Pemilihan sayur organik khusus resort.' },
      { time: '02:45', title: 'Sentul Bypass Route', desc: 'Distribusi area Sentul City & Babakan Madang.' },
      { time: '05:30', title: 'Resort Handover', desc: 'Penyerahan barang di unit perhotelan/villa.' }
    ]
  }
];

export const getDefaultLogistics = (cityName) => [
  { time: '21:00', title: 'B2B Quality Check', desc: 'Sortasi harian standar operasional CV. Green Fresh Cipanas.' },
  { time: '01:00', title: 'Cold Chain Transit', desc: `Armada bergerak dari Sukatani menuju area ${cityName}.` },
  { time: '05:30', title: 'On-Time Arrival', desc: 'Estimasi tiba di lokasi operasional mitra (Target 100%).' },
];