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

  // 2. SEO & Routing
  trailingSlash: false, 

  // 3. Sistem Redirect
  async redirects() {
    return [
      {
        source: '/supplier-sayur/:slug*',
        destination: '/city/:slug*',
        permanent: true,
      },
    ];
  },

  // 4. Keamanan & Header HTTP
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
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          // Tetap pertahankan Cache-Control ini agar Googlebot 
          // melakukan validasi via Middleware setiap jam.
          { 
            key: 'Cache-Control', 
            value: 'public, s-maxage=3600, stale-while-revalidate=59' 
          },
        ],
      },
    ];
  },

  // 5. Optimasi Compiler
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;