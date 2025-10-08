import { getSchedule } from '@/lib/cms'

export const revalidate = 300

export default async function SchedulePage() {
  const slots = await getSchedule('today')
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Today’s Schedule</h1>
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        {slots.map(slot => (
          <a key={slot.time + slot.showSlug} href={`/shows/${slot.showSlug}`} className="group rounded-2xl border p-4 hover:bg-slate-50">
            <p className="text-sm text-black/60">{slot.time}</p>
            <p className="mt-1 text-lg font-medium">{slot.title} <span className="text-black/60">— {slot.presenter}</span></p>
            <p className="mt-2 text-sm underline">Show details</p>
          </a>
        ))}
      </div>
    </main>
  )
}
