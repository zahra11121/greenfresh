import { NextResponse } from 'next/server';

// Nama fungsi diubah menjadi proxy sesuai instruksi error terbaru
export function proxy(request) {
  const { pathname } = request.nextUrl;

  // Fokus pada rute area dan city untuk optimasi Googlebot
  if (pathname.startsWith('/area/') || pathname.startsWith('/city/')) {
    
    const ifNoneMatch = request.headers.get('if-none-match');

    // ETag harian untuk memicu perayapan ulang rutin sesuai data statistik Anda
    const today = new Date();
    const dateKey = `${today.getUTCFullYear()}-${today.getUTCMonth() + 1}-${today.getUTCDate()}`;
    const etag = `W/"greenfresh-${pathname}-${dateKey}"`;

    // Validasi 304: Menghemat bandwidth dan Crawl Budget
    if (ifNoneMatch === etag) {
      return new Response(null, {
        status: 304,
        headers: {
          'ETag': etag,
          'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=59',
        },
      });
    }

    const response = NextResponse.next();
    response.headers.set('ETag', etag);
    response.headers.set('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=59');
    
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/area/:path*',
    '/city/:path*',
  ],
};