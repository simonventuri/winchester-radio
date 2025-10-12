// Mock CMS data for wireframe demo

export type Show = { slug: string; title: string; presenter: string; summary: string; presenterSlugs?: string[] }
export type Episode = { slug: string; title: string; summary?: string; duration?: string; published: string; audioUrl?: string; showSlug?: string }
export type ScheduleSlot = { time: string; title: string; presenter: string; showSlug: string; presenterSlugs?: string[] }
export type Presenter = { slug: string; name: string; bio: string; image: string; shows: string[] }

const MOCK_PRESENTERS: Presenter[] = [
  { slug: 'sam-jo', name: 'Sam & Jo', bio: 'Your morning duo bringing energy and local news to start your day right. Sam and Jo have been Winchester\'s wake-up call for over 5 years.', image: '/presenter-placeholder.svg', shows: ['wake-up-winchester'] },
  { slug: 'alex-stewart', name: 'Alex Stewart', bio: 'Local broadcaster with a passion for community stories and great music. Alex has been part of Winchester Radio for 3 years.', image: '/presenter-placeholder.svg', shows: ['breakfast'] },
  { slug: 'the-team', name: 'The Team', bio: 'Our dedicated news and features team bringing you the latest from Winchester and surrounding areas.', image: '/presenter-placeholder.svg', shows: ['winchester-now'] },
  { slug: 'maya-khan', name: 'Maya Khan', bio: 'Music enthusiast and local artist supporter. Maya curates the perfect afternoon soundtrack for Winchester.', image: '/presenter-placeholder.svg', shows: ['afternoon-mix'] },
  { slug: 'tom-rivers', name: 'Tom Rivers', bio: 'Your drive-time companion with up-to-date traffic info and the best tunes to get you home safely.', image: '/presenter-placeholder.svg', shows: ['drive'] },
  { slug: 'lisa-chen', name: 'Lisa Chen', bio: 'Evening host bringing thoughtful conversation and relaxing music to wind down your day.', image: '/presenter-placeholder.svg', shows: ['evening-sessions'] },
]

const MOCK_EPISODES: Episode[] = [
  { slug: 'winchester-now-ep-142', title: 'Local Climate Action, Park-&-Ride expansion, Cathedral events', summary: 'Cllr. Patel on bus lanes; festival director on autumn programme; listener shout-outs.', duration: '28:11', published: '2025-09-29' },
  { slug: 'winchester-now-ep-141', title: 'High Street footfall, youth theatre, hospital volunteers', summary: 'BID data, backstage tour with the youth theatre, how to volunteer at RHCH.', duration: '26:54', published: '2025-09-22' },
  { slug: 'winchester-now-ep-140', title: 'Freshers week special + local landlords Q&A', summary: 'Student union tips, safety round-up, renting rights in the city.', duration: '31:09', published: '2025-09-15' },
]

const MOCK_SHOWS: Show[] = [
  { slug: 'wake-up-winchester', title: 'Wake Up Winchester', presenter: 'Sam & Jo', summary: 'News, weather and great music to start your day in Winchester.', presenterSlugs: ['sam-jo'] },
  { slug: 'breakfast', title: 'Breakfast in Winchester', presenter: 'Alex Stewart', summary: 'Local breakfast show with community guests and what is on.', presenterSlugs: ['alex-stewart'] },
  { slug: 'winchester-now', title: 'Winchester Now', presenter: 'The team', summary: 'Interviews and features from around the district.', presenterSlugs: ['the-team'] },
  { slug: 'afternoon-mix', title: 'Afternoon Mix', presenter: 'Maya Khan', summary: 'Chill vibes and local music for your afternoon.', presenterSlugs: ['maya-khan'] },
  { slug: 'drive', title: 'Drive', presenter: 'Tom Rivers', summary: 'Your drive-time companion with traffic updates and great tunes.', presenterSlugs: ['tom-rivers'] },
  { slug: 'evening-sessions', title: 'Evening Sessions', presenter: 'Lisa Chen', summary: 'Relaxing music and thoughtful conversation for your evening.', presenterSlugs: ['lisa-chen'] },
]

const MOCK_SLOTS: ScheduleSlot[] = [
  { time: '06:00 – 09:00', title: 'Wake Up Winchester', presenter: 'Sam & Jo', showSlug: 'wake-up-winchester', presenterSlugs: ['sam-jo'] },
  { time: '09:00 – 12:00', title: 'Breakfast in Winchester', presenter: 'Alex Stewart', showSlug: 'breakfast', presenterSlugs: ['alex-stewart'] },
  { time: '12:00 – 14:00', title: 'Winchester Now (Live)', presenter: 'Team', showSlug: 'winchester-now', presenterSlugs: ['the-team'] },
  { time: '14:00 – 16:00', title: 'Afternoon Mix', presenter: 'Maya Khan', showSlug: 'afternoon-mix', presenterSlugs: ['maya-khan'] },
  { time: '16:00 – 19:00', title: 'Drive', presenter: 'Tom Rivers', showSlug: 'drive', presenterSlugs: ['tom-rivers'] },
  { time: '19:00 – 22:00', title: 'Evening Sessions', presenter: 'Lisa Chen', showSlug: 'evening-sessions', presenterSlugs: ['lisa-chen'] },
  { time: '22:00 – 06:00', title: 'Overnight', presenter: 'Automated', showSlug: 'overnight', presenterSlugs: [] },
]

export async function getEpisodes(limit = 12): Promise<Episode[]> {
  return MOCK_EPISODES.slice(0, limit)
}

export async function getEpisodesByShow(showSlug: string, limit = 12): Promise<Episode[]> {
  return MOCK_EPISODES.slice(0, limit)
}

export async function getShows(): Promise<Show[]> {
  return MOCK_SHOWS
}

export async function getShowBySlug(slug: string): Promise<Show | null> {
  return MOCK_SHOWS.find(s => s.slug === slug) ?? null
}

export async function getSchedule(day: string): Promise<ScheduleSlot[]> {
  return MOCK_SLOTS
}

export async function getPresenters(): Promise<Presenter[]> {
  return MOCK_PRESENTERS
}

export async function getPresenterBySlug(slug: string): Promise<Presenter | null> {
  return MOCK_PRESENTERS.find(p => p.slug === slug) ?? null
}
