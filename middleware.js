import { NextResponse } from 'next/server';

/**
 * Menggunakan 'experimental-edge' karena Cloudflare Pages 
 * membutuhkannya untuk kompatibilitas Next.js terbaru.
 */
export const runtime = 'experimental-edge'; 

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Fokus pada rute area dan city (halaman dengan trafik crawl tertinggi)
  if (pathname.startsWith('/area/') || pathname.startsWith('/city/')) {
    
    // Ambil ETag lama yang dikirim oleh Googlebot/Browser
    const ifNoneMatch = request.headers.get('if-none-match');

    // Buat ETag unik berdasarkan Path dan Tanggal (Berubah setiap 24 jam)
    const today = new Date();
    const dateKey = `${today.getUTCFullYear()}-${today.getUTCMonth() + 1}-${today.getUTCDate()}`;
    const etag = `W/"greenfresh-${pathname}-${dateKey}"`;

    // 1. Jika ETag cocok, kirim 304 Not Modified (Hemat Bandwidth!)
    if (ifNoneMatch === etag) {
      return new Response(null, {
        status: 304,
        headers: {
          'ETag': etag,
          'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=59',
          'Vary': 'If-None-Match',
        },
      });
    }

    // 2. Jika ETag tidak cocok (atau kunjungan pertama), kirim konten baru + pasang ETag
    const response = NextResponse.next();
    
    // Set header agar Googlebot tahu kapan harus kembali
    response.headers.set('ETag', etag);
    response.headers.set('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=59');
    
    /**
     * PENTING: Vary: If-None-Match memberi tahu Cloudflare agar 
     * membedakan cache berdasarkan ETag yang dikirim user.
     */
    response.headers.set('Vary', 'If-None-Match');
    
    return response;
  }

  return NextResponse.next();
}

// Konfigurasi Matcher agar middleware tidak membebani file statis (gambar/js/css)
export const config = {
  matcher: [
    '/area/:path*',
    '/city/:path*',
  ],
};