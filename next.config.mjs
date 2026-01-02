/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Optimasi Gambar
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/dukopmsad/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },

  // 2. SEO & Routing
  trailingSlash: true, 

  // --- TAMBAHAN REDIRECT 301 ---
  async redirects() {
    return [
      {
        // Mengalihkan semua sub-halaman supplier-sayur ke city
        source: '/supplier-sayur/:slug/',
        destination: '/city/:slug/',
        permanent: true, // Status 301 (Pindah Permanen)
      },
      {
        // Jika ada yang akses folder utamanya saja tanpa slug
        source: '/supplier-sayur/',
        destination: '/city/',
        permanent: true,
      }
    ];
  },
  // -----------------------------

  // 3. Performa
  compress: true,
  poweredByHeader: false,

  // 4. Pengaturan Header Keamanan
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          }
        ],
      },
    ];
  },

  // 5. Compiler
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;