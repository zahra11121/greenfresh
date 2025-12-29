/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Optimasi Gambar (Wajib untuk Cloudinary)
  images: {
    loader: 'cloudinary',
    path: 'https://res.cloudinary.com/dukopmsad/image/upload/',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920], // Ukuran layar standar audit Lighthouse
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/avif', 'image/webp'], // Memaksa format modern agar skor performance 100
  },

  // 2. Kompresi Gzip/Brotli untuk mempercepat loading aset teks
  compress: true,

  // 3. Menghilangkan console.log di production (Opsional, agar bersih)
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // 4. Pengaturan Header Keamanan (Penting untuk bisnis B2B)
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
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },

  // 5. Mengaktifkan fitur turbopack jika diperlukan
  experimental: {
    // serverActions: true,
  },
};

export default nextConfig;