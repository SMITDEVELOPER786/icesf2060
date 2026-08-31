# ICESF-2026

Conference website for DHA Suffa University — ICESF-2026.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Use **`npm run dev`** while editing. Do not run `npm run start` at the same time as the dev server.

## If you see `Cannot find module './183.js'`

That error means the `.next` build cache is mixed (dev + production). Clear it and start again:

```bash
npm run clean
npm run dev
```

For a production preview:

```bash
npm run clean
npm run build
npm run start
```

## Content

Edit dates, committee, speakers, and form links in `content/site.ts`.
