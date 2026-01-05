import { NextResponse } from 'next/server';

// TAMBAHKAN BARIS INI: Wajib untuk Cloudflare / Edge Deployment
export const runtime = 'edge'; 

export function middleware(request) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/area/') || pathname.startsWith('/city/')) {
    const ifNoneMatch = request.headers.get('if-none-match');

    const today = new Date();
    const dateKey = `${today.getUTCFullYear()}-${today.getUTCMonth() + 1}-${today.getUTCDate()}`;
    const etag = `W/"greenfresh-${pathname}-${dateKey}"`;

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