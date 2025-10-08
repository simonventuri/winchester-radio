'use client'
import { useEffect, useRef, useState } from 'react'

export function GlobalPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [playing, setPlaying] = useState(false)
  const [np, setNp] = useState<{showTitle?: string; presenter?: string; track?: string; live?: boolean}>({})

  useEffect(() => {
    const fetchNp = async () => {
      try {
        const r = await fetch('/api/now-playing', { cache: 'no-store' })
        const j = await r.json()
        setNp(j)
      } catch {}
    }
    fetchNp()
    const id = setInterval(fetchNp, 45000)
    return () => clearInterval(id)
  }, [])

  const toggle = async () => {
    const el = audioRef.current
    if (!el) return
    if (playing) {
      el.pause()
      setPlaying(false)
    } else {
      try {
        await el.play()
        setPlaying(true)
      } catch {}
    }
  }

  const stream = process.env.NEXT_PUBLIC_STREAM_URL || process.env.STREAM_URL

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-black/10 bg-white/95 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 py-3">
          <div className="min-w-0">
            <p className="truncate text-sm text-black/70">Now Playing</p>
            <p className="truncate font-medium">{np.showTitle ?? 'Live Programme'}{np.presenter ? ` — ${np.presenter}` : ''}</p>
            <p className="truncate text-sm" aria-live="polite">{np.track ? `Track: ${np.track}` : 'Live stream'}</p>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={toggle} className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm">
              <span>{playing ? 'Pause' : 'Play'}</span>
            </button>
            <a href="/donate" className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm text-white hover:bg-black/90">
              Donate
            </a>
          </div>
        </div>
        <audio ref={audioRef} src={stream} preload="none" />
      </div>
    </div>
  )
}
