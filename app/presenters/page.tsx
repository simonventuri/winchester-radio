import { getPresenters } from '@/lib/cms'

export const revalidate = 3600

export default async function PresentersIndex() {
  const presenters = await getPresenters()
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Our Presenters</h1>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {presenters.map(presenter => (
          <a key={presenter.slug} href={`/presenters/${presenter.slug}`} className="group rounded-2xl border p-6 hover:bg-slate-50 transition-colors">
            <div className="aspect-square w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-slate-100">
              <img 
                src={presenter.image} 
                alt={presenter.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-lg font-medium text-center">{presenter.name}</h2>
            <p className="mt-2 text-sm text-black/70 text-center line-clamp-3">{presenter.bio}</p>
            <p className="mt-3 text-sm text-center text-blue-600 group-hover:text-blue-700">View Profile →</p>
          </a>
        ))}
      </div>
    </main>
  )
}