import { getPresenterBySlug, getShows } from '@/lib/cms'
import { notFound } from 'next/navigation'

type Props = { params: { slug: string } }
export const revalidate = 600

export default async function PresenterPage({ params }: Props) {
  const presenter = await getPresenterBySlug(params.slug)
  if (!presenter) return notFound()
  
  const allShows = await getShows()
  const presenterShows = allShows.filter(show => presenter.shows.includes(show.slug))

  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <div className="aspect-square w-48 h-48 mx-auto md:mx-0 rounded-2xl overflow-hidden bg-slate-100">
            <img 
              src={presenter.image} 
              alt={presenter.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="md:w-2/3">
          <h1 className="text-3xl font-semibold tracking-tight">{presenter.name}</h1>
          <p className="mt-4 text-lg text-black/80 leading-relaxed">{presenter.bio}</p>
          
          {presenterShows.length > 0 && (
            <div className="mt-8">
              <h2 className="text-xl font-medium mb-4">Shows</h2>
              <div className="grid gap-4">
                {presenterShows.map(show => (
                  <a 
                    key={show.slug} 
                    href={`/shows/${show.slug}`} 
                    className="block rounded-xl border p-4 hover:bg-slate-50 transition-colors"
                  >
                    <h3 className="font-medium">{show.title}</h3>
                    <p className="mt-1 text-sm text-black/70">{show.summary}</p>
                    <p className="mt-2 text-sm text-blue-600">View Show →</p>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}