# Winchester Radio – Next.js (Headless) Starter

A lean **Next.js 14 + Tailwind** starter wired for **Sanity** headless CMS, with:
- Global sticky audio player
- IA: Listen, Shows & Schedule, Winchester Now, Get Involved, About, Donate
- Episode cards + schedule preview
- API route for `now-playing` (proxy/mocker)
- JSON-LD for Organization, RadioStation, PodcastSeries

## Quick start

```bash
pnpm i   # or npm install / yarn
cp .env.example .env.local
# Fill SANITY_* and streaming URLs
pnpm dev
```

### Sanity setup
1. `npm create sanity@latest -- --create-project "Winchester Radio"` (or use an existing project).
2. Add project ID & dataset to `.env.local`.
3. Use `sanity/schema.ts` here as a starting point for Studio.
4. Optionally, add a webhook to revalidate ISR on publish.

### Deploy
- Vercel recommended. Set env vars in project settings.
- Adjust `revalidate` values per route in `app/*` as needed.
