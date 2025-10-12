import { getShows } from '@/lib/cms'
import { PresenterLink } from '@/components/PresenterLink'

export const revalidate = 3600

export default async function ShowsIndex() {
  const shows = await getShows()
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Shows & Schedule</h1>
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        {shows.map(show => (
          <a key={show.slug} href={`/shows/${show.slug}`} className="group rounded-2xl border p-4 hover:bg-slate-50">
            <p className="text-lg font-medium">{show.title}</p>
            <p className="text-sm text-black/70">
              <PresenterLink 
                presenterSlugs={show.presenterSlugs} 
                presenterName={show.presenter}
                insideLink={true}
              />
            </p>
            <p className="mt-2 line-clamp-2 text-sm text-black/70">{show.summary}</p>
            <p className="mt-2 text-sm underline">Show details</p>
          </a>
        ))}
      </div>
    </main>
  )
}
