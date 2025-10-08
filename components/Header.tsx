export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-black/10 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          <a href="/" className="flex items-center gap-2">
            <span className="text-lg font-semibold tracking-tight">Winchester Radio</span>
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            <a className="hover:underline" href="/schedule">Shows & Schedule</a>
            <a className="hover:underline" href="/winchester-now">Winchester Now</a>
            <a className="hover:underline" href="/get-involved">Get Involved</a>
            <a className="hover:underline" href="/about">About</a>
            <a className="rounded-full bg-black px-4 py-2 text-white hover:bg-black/90" href="/donate">Donate</a>
          </nav>
        </div>
      </div>
    </header>
  )
}
