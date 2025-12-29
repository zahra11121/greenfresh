/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Optimasi Gambar
  images: {
    // Gunakan 'default' jika ingin tetap bisa memakai fungsi replace URL kita secara fleksibel
    // Atau gunakan 'cloudinary' jika ingin menggunakan komponen <Image /> bawaan Next.js
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/dukopmsad/**', // Spesifik ke cloud name Anda agar lebih aman
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
    minimumCacheTTL: 60, // Mempercepat loading untuk gambar yang sering diakses
  },

  // 2. SEO & Routing
  // Memastikan semua URL berakhir dengan / agar konsisten di mata Google Search Console
  trailingSlash: true, 
  
  // 3. Performa
  compress: true,
  poweredByHeader: false, // Menghilangkan header 'X-Powered-By: Next.js' demi keamanan

  // 4. Pengaturan Header Keamanan (Standard B2B Enterprise)
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
            value: 'SAMEORIGIN', // Mengizinkan frame dari domain sendiri (lebih fleksibel dari DENY)
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
    // Bersihkan console hanya di production agar saat development Anda tetap bisa debug
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;