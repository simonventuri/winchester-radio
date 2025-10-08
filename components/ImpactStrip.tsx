export function ImpactStrip() {
  const stats = [
    { label: 'Volunteer hours last year', value: '7,200+' },
    { label: 'Hospital bedside hours', value: '3,400+' },
    { label: 'Local groups featured', value: '180+' },
  ]
  return (
    <section className="border-b border-black/10 bg-white py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {stats.map(s => (
          <div key={s.label} className="rounded-2xl border bg-slate-50 p-6">
            <p className="text-2xl font-bold">{s.value}</p>
            <p className="mt-1 text-sm text-black/70">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
