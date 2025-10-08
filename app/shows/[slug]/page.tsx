import { getShowBySlug, getEpisodesByShow } from '@/lib/cms'
import { notFound } from 'next/navigation'
import { EpisodeCard } from '@/components/EpisodeCard'

type Props = { params: { slug: string } }
export const revalidate = 600

export default async function ShowPage({ params }: Props) {
  const show = await getShowBySlug(params.slug)
  if (!show) return notFound()
  const episodes = await getEpisodesByShow(params.slug, 12)

  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">{show.title}</h1>
      <p className="mt-2 text-black/70">Presented by {show.presenter}</p>
      <p className="mt-4 max-w-3xl text-black/80">{show.summary}</p>
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        {episodes.map(ep => <EpisodeCard key={ep.slug} episode={ep} />)}
      </div>
    </main>
  )
}
