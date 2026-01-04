import { NextResponse } from 'next/server';

export function middleware(request) {
  const url = request.nextUrl;
  const pathname = url.pathname;
  const searchParams = url.searchParams;
  
  // Debug log (hanya di development)
  if (process.env.NODE_ENV === 'development') {
    console.log('[Middleware] Path:', pathname);
    console.log('[Middleware] Query:', Object.fromEntries(searchParams));
  }
  
  // **HANYA PROSES UNTUK /area/[slug] DAN /city/[slug]**
  const isDynamicRoute = pathname.match(/^\/(area|city)\/[^\/]+\/?$/);
  
  if (!isDynamicRoute) {
    return NextResponse.next();
  }
  
  // **DETEKSI MASALAH PARAMETER ANEH**
  const hasNxtPslug = searchParams.has('nxtPslug');
  const hasDuplicateSlug = searchParams.has('slug') && searchParams.getAll('slug').length > 1;
  const hasUppercaseSlug = searchParams.has('slug') && /[A-Z]/.test(searchParams.get('slug'));
  
  // Jika tidak ada masalah, lanjutkan
  if (!hasNxtPslug && !hasDuplicateSlug && !hasUppercaseSlug) {
    return NextResponse.next();
  }
  
  // **PERBAIKI PARAMETER**
  let correctSlug = null;
  
  // 1. Prioritas: ambil dari slug yang valid
  if (searchParams.has('slug')) {
    const slugs = searchParams.getAll('slug');
    // Ambil slug pertama (biasanya yang benar)
    correctSlug = slugs[0];
  }
  
  // 2. Jika ada nxtPslug, gunakan itu (jika slug tidak ada atau nxtPslug berbeda)
  if (hasNxtPslug) {
    const nxtPslugValue = searchParams.get('nxtPslug');
    // Gunakan nxtPslug jika:
    // - slug tidak ada, atau
    // - nxtPslug berbeda dengan slug (mungkin lebih baru)
    if (!correctSlug || nxtPslugValue !== correctSlug) {
      correctSlug = nxtPslugValue;
    }
  }
  
  // 3. Normalisasi slug (lowercase, trim)
  if (correctSlug) {
    correctSlug = correctSlug
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-') // Ganti spasi dengan dash
      .replace(/[^a-z0-9\-]/g, ''); // Hapus karakter special
  }
  
  // **BUAT URL BERSIH**
  const cleanUrl = new URL(pathname.replace(/\/$/, ''), url.origin); // Hapus trailing slash
  
  // Tambahkan slug yang sudah diperbaiki (jika ada)
  if (correctSlug) {
    cleanUrl.searchParams.set('slug', correctSlug);
  }
  
  // Hapus semua parameter bermasalah yang tersisa
  cleanUrl.searchParams.delete('nxtPslug');
  cleanUrl.searchParams.delete('nxtP');
  cleanUrl.searchParams.delete('nxt');
  
  // Pertahankan hash fragment jika ada
  if (url.hash) {
    cleanUrl.hash = url.hash;
  }
  
  // **LOG UNTUK MONITORING**
  console.log(`[Middleware Fix] Memperbaiki URL aneh:`);
  console.log(`  Original: ${request.url}`);
  console.log(`  Fixed:    ${cleanUrl.toString()}`);
  console.log(`  Alasan:   ${hasNxtPslug ? 'nxtPslug' : ''} ${hasDuplicateSlug ? 'duplicate-slug' : ''} ${hasUppercaseSlug ? 'uppercase-slug' : ''}`);
  
  // **REDIRECT KE URL BERSIH**
  // Gunakan 308 (Permanent Redirect) untuk SEO
  return NextResponse.redirect(cleanUrl, 308);
}

// **KONFIGURASI MATCHER YANG SPESIFIK**
export const config = {
  matcher: [
    // Hanya match dynamic routes untuk area dan city
    '/area/:slug',
    '/city/:slug',
    
    // Atau gunakan regex untuk lebih spesifik
    // '^/(area|city)/[^/]+$'
  ],
};