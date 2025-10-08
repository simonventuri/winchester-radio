import { NextRequest, NextResponse } from 'next/server'

export const revalidate = 30

export async function GET(req: NextRequest) {
  const url = process.env.NOW_PLAYING_URL
  try {
    if (!url) {
      return NextResponse.json({
        showTitle: 'Breakfast in Winchester',
        presenter: 'Alex Stewart',
        track: 'Downtown — Anytown Brass Band',
        live: true,
        startedAt: new Date().toISOString()
      }, { headers: { 'Cache-Control': 's-maxage=30, stale-while-revalidate=60' } })
    }
    const r = await fetch(url, { next: { revalidate: 30 } })
    const data = await r.json()
    return NextResponse.json(data, { headers: { 'Cache-Control': 's-maxage=30, stale-while-revalidate=60' } })
  } catch (e) {
    return NextResponse.json({ error: 'failed to fetch now playing' }, { status: 500 })
  }
}
