import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // 1. Tentukan rute mana saja yang ingin divalidasi ETag-nya
  // Kita fokus ke /area dan /city karena ini yang sering di-update
  if (pathname.startsWith('/area/') || pathname.startsWith('/city/')) {
    
    // 2. Ambil "kunci" ETag yang dikirimkan Googlebot (jika ada)
    const ifNoneMatch = request.headers.get('if-none-match');

    // 3. Buat ETag unik
    // Kita buat berdasarkan Pathname dan Tanggal Hari Ini (UTC)
    // Jadi setiap ganti hari, ETag otomatis berubah dan Googlebot akan crawl ulang
    const today = new Date();
    const dateKey = `${today.getUTCFullYear()}-${today.getUTCMonth() + 1}-${today.getUTCDate()}`;
    const etag = `W/"greenfresh-${pathname}-${dateKey}"`;

    // 4. VALIDASI: Jika kunci dari Googlebot cocok dengan ETag server saat ini
    if (ifNoneMatch === etag) {
      // Balas dengan 304 Not Modified (Sangat ringan, tanpa body)
      // Ini menghemat CPU & RAM server Anda sesuai anjuran Google
      return new Response(null, {
        status: 304,
        headers: {
          'ETag': etag,
          'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=59',
        },
      });
    }

    // 5. Jika tidak cocok (konten dianggap baru atau cache expired)
    // Lanjutkan ke halaman (Page) dan pasang header ETag baru
    const response = NextResponse.next();
    response.headers.set('ETag', etag);
    // Pastikan Cache-Control tetap terkirim agar Googlebot punya jadwal kunjungan
    response.headers.set('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=59');
    
    return response;
  }

  return NextResponse.next();
}

// Hanya jalankan middleware ini pada rute spesifik agar tidak membebani rute lain
export const config = {
  matcher: [
    '/area/:path*',
    '/city/:path*',
  ],
};