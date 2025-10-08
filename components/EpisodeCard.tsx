type Episode = {
  slug: string
  title: string
  summary?: string
  duration?: string
  published: string
}

export function EpisodeCard({ episode }: { episode: Episode }) {
  return (
    <a href={`/winchester-now/${episode.slug}`} className="group rounded-2xl border p-4 hover:bg-slate-50">
      <p className="text-sm text-black/60">{new Date(episode.published).toLocaleDateString()}</p>
      <p className="mt-1 font-medium leading-snug">{episode.title}</p>
      {episode.summary && <p className="mt-2 line-clamp-2 text-sm text-black/70">{episode.summary}</p>}
      <p className="mt-2 text-sm text-black/70 group-hover:underline">Listen{episode.duration ? ` • ${episode.duration}` : ''}</p>
    </a>
  )
}
