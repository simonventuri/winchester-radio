import { getEpisodes } from '@/lib/cms'
import { EpisodeCard } from '@/components/EpisodeCard'

export const revalidate = 600

export default async function WinchesterNowIndex() {
  const episodes = await getEpisodes(24)
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Winchester Now</h1>
      <p className="mt-2 text-black/70">Local voices, interviews, and community stories — new episodes weekly.</p>
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        {episodes.map(ep => <EpisodeCard key={ep.slug} episode={ep} />)}
      </div>
    </main>
  )
}
