import { NextResponse } from 'next/server';

export default function proxy(request) {
  const url = request.nextUrl;
  
  // Hanya process untuk /area/[slug] dan /city/[slug]
  const slugPattern = /^\/(area|city)\/[^\/]+$/;
  if (!slugPattern.test(url.pathname.replace(/\/$/, ''))) {
    return NextResponse.next();
  }
  
  // Jika ada query params, redirect ke clean URL
  if (url.search) {
    const cleanUrl = new URL(url.pathname.replace(/\/$/, ''), url.origin);
    cleanUrl.hash = url.hash;
    
    console.log(`🚀 [Proxy] Cleaned URL: ${request.url}`);
    
    return NextResponse.redirect(cleanUrl, 308);
  }
  
  return NextResponse.next();
}

// Export config untuk Next.js 15 (optional)
export const config = {
  matcher: ['/area/:slug', '/city/:slug']
};