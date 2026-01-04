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
  trailingSlash: false, 

  // 3. Sistem Redirect (Pemindahan dari supplier-sayur ke city)
  async redirects() {
    return [
      {
        // Menangkap /supplier-sayur/apapun/ (dengan atau tanpa slash)
        // :slug* menangkap sub-path secara dinamis
        source: '/supplier-sayur/:slug*',
        destination: '/city/:slug*',
        permanent: true, // Status 301 untuk SEO (Permanent Redirect)
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
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' }
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