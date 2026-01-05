export async function GET() {
  return new Response(JSON.stringify({"applinks":{"apps":[],"details":[]}}), {
    headers: { 
      'Content-Type': 'application/json',
      'Cache-Control': 'public, s-maxage=3600' 
    },
  });
}