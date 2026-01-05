/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Optimasi Gambar
  images: {
    remotePatterns: [
      { 
        protocol: 'https', 
        hostname: 'res.cloudinary.com', 
        pathname: '/dukopmsad/**' 
      },
      { 
        protocol: 'https', 
        hostname: 'images.unsplash.com', 
        pathname: '/**' 
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },

  // 2. SEO & Routing: Menghilangkan garis miring di akhir URL
  // Sesuai praktik terbaik untuk menghindari konten duplikat.
  trailingSlash: false, 

  // 3. Sistem Redirect (Pemindahan dari supplier-sayur ke city)
  async redirects() {
    return [
      {
        source: '/supplier-sayur/:slug*',
        destination: '/city/:slug*',
        permanent: true, // Menggunakan Status 301 untuk memindahkan SEO juice secara permanen.
      },
    ];
  },

  // 4. Keamanan & Header HTTP
  // Dioptimalkan untuk Google Crawler (ETag & Cache-Control)
  compress: true,
  poweredByHeader: false,
  
  // Next.js secara default menghasilkan ETag.
  // Header di bawah memastikan ETag tersebut divalidasi oleh Googlebot.
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          /**
           * PERBAIKAN UTAMA: Cache-Control
           * Membantu Googlebot menentukan kapan harus merayapi kembali URL.
           * s-maxage=3600 (1 jam) memberi sinyal konten dinamis namun stabil.
           * stale-while-revalidate memungkinkan respon instan sambil memperbarui cache.
           */
          { 
            key: 'Cache-Control', 
            value: 'public, s-maxage=3600, stale-while-revalidate=59' 
          },
        ],
      },
    ];
  },

  // 5. Optimasi Compiler (Menghapus console.log di production)
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;