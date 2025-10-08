import 'server-only'
import groq from 'groq'
import { createClient } from '@sanity/client'

const projectId = process.env.SANITY_PROJECT_ID
const dataset = process.env.SANITY_DATASET
const apiVersion = process.env.SANITY_API_VERSION || '2023-10-01'

const useSanity = projectId && dataset

const client = useSanity ? createClient({ projectId, dataset, apiVersion, useCdn: true }) : null as any

export type Show = { slug: string; title: string; presenter: string; summary: string }
export type Episode = { slug: string; title: string; summary?: string; duration?: string; published: string; audioUrl?: string; showSlug?: string }
export type ScheduleSlot = { time: string; title: string; presenter: string; showSlug: string }

const MOCK_EPISODES: Episode[] = [
  { slug: 'winchester-now-ep-142', title: 'Local Climate Action, Park-&-Ride expansion, Cathedral events', summary: 'Cllr. Patel on bus lanes; festival director on autumn programme; listener shout-outs.', duration: '28:11', published: '2025-09-29' },
  { slug: 'winchester-now-ep-141', title: 'High Street footfall, youth theatre, hospital volunteers', summary: 'BID data, backstage tour with the youth theatre, how to volunteer at RHCH.', duration: '26:54', published: '2025-09-22' },
  { slug: 'winchester-now-ep-140', title: 'Freshers’ week special + local landlords Q&A', summary: 'Student union tips, safety round-up, renting rights in the city.', duration: '31:09', published: '2025-09-15' },
]

const MOCK_SHOWS: Show[] = [
  { slug: 'wake-up-winchester', title: 'Wake Up Winchester', presenter: 'Sam & Jo', summary: 'News, weather and great music to start your day in Winchester.' },
  { slug: 'breakfast', title: 'Breakfast in Winchester', presenter: 'Alex Stewart', summary: 'Local breakfast show with community guests and what’s on.' },
  { slug: 'winchester-now', title: 'Winchester Now', presenter: 'The team', summary: 'Interviews and features from around the district.' },
]

const MOCK_SLOTS: ScheduleSlot[] = [
  { time: '06:00 – 09:00', title: 'Wake Up Winchester', presenter: 'Sam & Jo', showSlug: 'wake-up-winchester' },
  { time: '09:00 – 12:00', title: 'Breakfast in Winchester', presenter: 'Alex Stewart', showSlug: 'breakfast' },
  { time: '12:00 – 14:00', title: 'Winchester Now (Live)', presenter: 'Team', showSlug: 'winchester-now' },
  { time: '14:00 – 16:00', title: 'Afternoon Mix', presenter: 'Maya Khan', showSlug: 'afternoon-mix' },
  { time: '16:00 – 19:00', title: 'Drive', presenter: 'Tom Rivers', showSlug: 'drive' },
]

export async function getEpisodes(limit = 12): Promise<Episode[]> {
  if (!useSanity) return MOCK_EPISODES.slice(0, limit)
  const query = groq`*[_type == "episode"] | order(published desc)[0...$limit]{
    "slug": slug.current, title, summary, duration, published, "audioUrl": audio.asset->url, show->{ "slug": slug.current }
  }`
  const res = await client.fetch(query, { limit })
  return res.map((e: any) => ({ slug: e.slug, title: e.title, summary: e.summary, duration: e.duration, published: e.published, audioUrl: e.audioUrl, showSlug: e.show?.slug }))
}

export async function getEpisodesByShow(showSlug: string, limit = 12): Promise<Episode[]> {
  if (!useSanity) return MOCK_EPISODES.slice(0, limit)
  const query = groq`*[_type == "episode" && show->slug.current == $showSlug] | order(published desc)[0...$limit]{ "slug": slug.current, title, summary, duration, published }`
  return client.fetch(query, { showSlug, limit })
}

export async function getShows(): Promise<Show[]> {
  if (!useSanity) return MOCK_SHOWS
  const query = groq`*[_type == "show"] | order(title asc){ "slug": slug.current, title, presenter, summary }`
  return client.fetch(query)
}

export async function getShowBySlug(slug: string): Promise<Show | null> {
  if (!useSanity) return MOCK_SHOWS.find(s => s.slug === slug) ?? null
  const query = groq`*[_type == "show" && slug.current == $slug][0]{ "slug": slug.current, title, presenter, summary }`
  return client.fetch(query, { slug })
}

export async function getSchedule(day: string): Promise<ScheduleSlot[]> {
  if (!useSanity) return MOCK_SLOTS
  const query = groq`*[_type == "scheduleSlot" && day == $day] | order(order asc){ time, title, presenter, "showSlug": show->slug.current }`
  return client.fetch(query, { day })
}
