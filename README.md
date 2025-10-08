# Winchester Radio – Next.js Wireframe Demo

A lean **Next.js 14 + Tailwind** wireframe demo with:
- Global sticky audio player
- IA: Listen, Shows & Schedule, Winchester Now, Get Involved, About, Donate
- Episode cards + schedule preview
- API route for `now-playing` (proxy/mocker)
- JSON-LD for Organization, RadioStation, PodcastSeries
- Mock CMS data for demonstration

## Quick start

```bash
npm install
cp .env.example .env.local
# Fill streaming URLs if desired
npm run dev
```

### Content Management
Currently uses mock data in `lib/cms.ts`. Ready to be wired up to any headless CMS later.

### Deploy
- Vercel recommended. Set env vars in project settings.
- Adjust `revalidate` values per route in `app/*` as needed.
