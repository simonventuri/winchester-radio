// Mock data for demo wireframe
const MOCK_SLOTS = [
  { time: '06:00 – 09:00', title: 'Wake Up Winchester', presenter: 'Sam & Jo', showSlug: 'wake-up-winchester' },
  { time: '09:00 – 12:00', title: 'Breakfast in Winchester', presenter: 'Alex Stewart', showSlug: 'breakfast' },
  { time: '12:00 – 14:00', title: 'Winchester Now (Live)', presenter: 'Team', showSlug: 'winchester-now' },
  { time: '14:00 – 16:00', title: 'Afternoon Mix', presenter: 'Maya Khan', showSlug: 'afternoon-mix' },
  { time: '16:00 – 19:00', title: 'Drive', presenter: 'Tom Rivers', showSlug: 'drive' },
  { time: '19:00 – 22:00', title: 'Evening Sessions', presenter: 'Lisa Chen', showSlug: 'evening-sessions' },
  { time: '22:00 – 06:00', title: 'Overnight', presenter: 'Automated', showSlug: 'overnight' },
]

export default function SchedulePage() {
  const slots = MOCK_SLOTS
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
