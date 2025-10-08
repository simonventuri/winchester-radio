import { ImpactStrip } from '@/components/ImpactStrip'
import { SchedulePreview } from '@/components/SchedulePreview'
import { EpisodeCard } from '@/components/EpisodeCard'
import { getEpisodes } from '@/lib/cms'

export const revalidate = 600

// Function to randomly select a banner image
function getRandomBannerImage() {
  const images = ['winchester-1.jpg', 'winchester-2.jpg', 'winchester-3.jpg']
  const randomIndex = Math.floor(Math.random() * images.length)
  return images[randomIndex]
}

export default async function HomePage() {
  const episodes = await getEpisodes(3)
  const bannerImage = getRandomBannerImage()

  return (
    <main>
      <section 
        className="border-b border-black/10 py-14 sm:py-16 bg-cover bg-center bg-no-repeat relative grayscale"
        style={{ backgroundImage: `url('/${bannerImage}')` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid items-center gap-8 md:grid-cols-2">
          <div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-white">
              Radio for Winchester, from Winchester, by Winchester.
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-white/90">
              Community-powered radio and hospital broadcasting for Winchester and nearby villages.
              Listen live on <strong>94.7 FM</strong>, <strong>DAB</strong>, or here online.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#listen" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-black hover:bg-white/90">
                Listen Live
              </a>
              <a href="/winchester-now" className="inline-flex items-center gap-2 rounded-full border border-white px-5 py-3 text-white hover:bg-white hover:text-black">
                Winchester Now
              </a>
            </div>
            <p className="mt-4 text-sm text-white/70">Charity No. 1160752</p>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-black/70">On Air</p>
                <p className="font-semibold">Breakfast in Winchester</p>
                <p className="text-sm">with Alex Stewart</p>
              </div>
              <span className="rounded-full bg-green-600 px-3 py-1 text-xs font-medium text-white">LIVE</span>
            </div>
            <div className="mt-4 rounded-xl border p-4">
              <p className="text-sm font-medium">Up Next</p>
              <p className="text-sm text-black/70">Winchester Now (Live) — 12:00</p>
            </div>
          </div>
        </div>
      </section>

      <ImpactStrip />
      <SchedulePreview />

      <section className="border-b border-black/10 bg-white py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-semibold tracking-tight">Winchester Now</h2>
            <a href="/winchester-now" className="text-sm underline">All episodes</a>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {episodes.map(ep => <EpisodeCard key={ep.slug} episode={ep} />)}
          </div>
        </div>
      </section>
    </main>
  )
}
