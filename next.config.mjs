/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Optimasi Gambar (Sudah benar)
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'res.cloudinary.com', pathname: '/dukopmsad/**' },
      { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**' },
    ],
    formats: ['image/avif', 'image/webp'],
  },

  // 2. SEO & Routing
  trailingSlash: false, 

  // --- PERBAIKAN REDIRECT ---
  async redirects() {
    return [
      {
        // Gunakan nama parameter yang berbeda (misal: :path) 
        // agar tidak tabrakan dengan [slug] di folder app/city
        source: '/supplier-sayur/:path*/', 
        destination: '/city/:path*/',
        permanent: true,
      },
      {
        source: '/supplier-sayur',
        destination: '/city/',
        permanent: true,
      }
    ];
  },

  // 3. Performa & Security
  compress: true,
  poweredByHeader: false,
  
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' }
        ],
      },
    ];
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;