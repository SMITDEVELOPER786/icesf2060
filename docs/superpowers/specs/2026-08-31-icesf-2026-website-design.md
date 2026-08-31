# ICESF-2026 conference website

Date: 2026-08-31  
Status: approved (short name confirmed as ICESF-2026)  
Stack: Next.js (App Router) + React + TypeScript, static-friendly, deploy on Vercel

## Goal

Official public website for **ICESF-2026**: *International Conference on Engineering a Sustainable Future: Technology, Management, Human Values and Global Perspectives in the ESG Era*.

Organized by **DHA Suffa University**, Karachi. Header and footer display **DHA Suffa University branding** and the **IEEE affiliation line**, using official logo assets when supplied. Do not create or imply an IEEE organizational unit that has not been provided (no IEEE Karachi Section, Computer Society, Photonics, or similar unless added in `content/site.ts`).

Paper submission and registration are **outbound links** (EasyChair / Google Form), not on-site forms.

The site must look like a serious IEEE-affiliated academic conference: editorial, print-adjacent, not a generic AI landing page (no mesh gradients, glassmorphism, Inter-only UI, or four identical icon cards).

v1 stays small: no CMS, login, backend, or payment.

## Edition vs calendar dates

Confirmed: short name **ICESF-2026**. Conference and all deadlines are in **2026**. Do not use 2027 anywhere in branding or copy.

## Conference facts (v1 content)

All of the following live in `content/site.ts` so copy can change without layout rewrites.

| Field | Value |
| --- | --- |
| Short name | ICESF-2026 |
| Full title | International Conference on Engineering a Sustainable Future: Technology, Management, Human Values and Global Perspectives in the ESG Era |
| Organizer | DHA Suffa University |
| Affiliation line | Technically co-sponsored by IEEE |
| Venue | DHA Suffa University, Karachi (in-person) |
| Conference dates | 9–10 December 2026 |
| Abstract submission | 30 September 2026 |
| Notification of acceptance | 10 October 2026 |
| Full paper submission | 30 October 2026 |
| EasyChair URL | empty until provided → CTA shows “Link to be announced” |
| Registration URL | empty until provided → same treatment |
| Template URL | empty until provided |
| Contact email / phone | placeholders in `content/site.ts` |
| Committee and speakers | empty arrays → “To be announced” |
| Announcement | optional string; default example: “Abstract submission deadline: 30 September 2026”. Hidden when empty. |

## `content/site.ts` model

Single module, no CMS. Shape:

```ts
conference: {
  shortName: string
  fullTitle: string
  organizer: string
  affiliationLine: string
  venue: string
  city: string
  announcement: string | null
}

importantDates: { id: string; label: string; date: string }[]

tracks: { id: string; title: string; blurb: string }[]

people: { id: string; name: string; role: string; section: CommitteeSection; affiliation?: string }[]
// CommitteeSection = "patron" | "chair" | "co-chair" | "secretary" | "program" | "review" | "organizing"

speakers: { id: string; name: string; affiliation: string; bio: string; photoSrc: string | null }[]

registrationFees: { id: string; category: string; amount: string }[]

contact: { email: string; phone: string; addressLines: string[] }

links: {
  easychair: string | null
  registration: string | null
  template: string | null
}

seo: {
  titleTemplate: string // e.g. "%s | ICESF-2026"
  defaultTitle: string // ICESF-2026 | International Conference on Engineering a Sustainable Future
  description: string
  ogImage: string | null
}
```

Empty arrays and null links are valid. Do not invent people, fees, URLs, or IEEE units to fill gaps.

## Visual system

- **Ink navy** `#0B1F3A` — header, type, rules, dark bands
- **Paper cream** `#F4F0E8` — page background
- **Gold** `#C4A574` — thin rules, small-caps labels, hover underline; never large fills
- **White** — content panels on cream
- **Type:** Source Serif 4 for titles; IBM Plex Sans for body, nav, tables
- **Hero:** split masthead — left stacked full title; right solid date/venue plate. Gold rule under **ICESF-2026**. No photography collage, no abstract blobs.
- **Dates:** two-column typographic table (label \| date), not icon cards
- **Cards** (tracks, speakers only): 1px navy border, square-ish radius (max 4px), no drop shadows
- **Motion:** nav underline only
- **Imagery:** real photos when supplied; until then quiet navy/cream blocks, not stock “smiling scientists”
- **Announcement:** optional slim bar below the header (navy text on cream, gold left rule). Omit the bar when `conference.announcement` is null or `""`.

## Routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/call-for-papers` | Call for Papers |
| `/committee` | Committee |
| `/speakers` | Speakers |
| `/registration` | Registration |
| `/contact` | Contact |

No extra routes in v1 (no blog, login, or WordPress leftovers).

### Home

- Optional announcement bar
- Split hero with full title, 9–10 December 2026, DHA Suffa University, Karachi, IEEE affiliation line
- Important-dates table
- About (2–3 short paragraphs on ESG, technology, management, human values)
- Four track teasers linking to Call for Papers
- CTAs: Submit abstract · Register (honor empty URLs)

### Call for Papers

Tracks (editable in content; v1 defaults from the conference title):

1. Technology and Engineering for a Sustainable Future
2. Management and Sustainable Enterprise
3. Human Values, Ethics, and Society
4. Global Perspectives and ESG Practice

Plus original-work guidelines, IEEE-format note (template link empty until provided), dates table, EasyChair CTA.

### Committee

Sections: Patron, Chair, Co-Chair, Secretaries, Program, Review, Organizing. Driven by `people[].section`. Empty section omitted or shown as “To be announced” — do not invent names.

### Speakers

Keynote grid from `speakers[]`: photo, name, affiliation, short bio. Empty → “Keynote speakers to be announced.”

### Registration

Fee table from `registrationFees[]` (IEEE member / non-member / student). Amounts may be “To be announced”. Registration CTA uses `links.registration` when set.

### Contact

Address lines, email, and phone from `contact`. No map embed in v1.

## Components

- `SiteHeader` — DHA Suffa University branding and IEEE affiliation line (official logos when supplied; otherwise typeset names, not invented marks). ICESF-2026, nav, Submit paper CTA, accessible mobile menu
- `AnnouncementBar` — renders only when announcement text is set
- `SiteFooter` — short title, dates, organizer + IEEE affiliation line, copyright year from conference dates (2026)
- `PageHero` — inner-page title + one-line context
- `DatesTable` — important dates
- `TrackList` — CFP tracks
- `PersonGrid` — committee and speakers
- `CtaLink` — outbound `target="_blank"` `rel="noopener noreferrer"`; if `href` is null, render disabled label “Link to be announced” (not a dead `<a>`)

Layout wraps every page with header + footer. Content is imported from `content/site.ts` only — no hardcoded dates in components.

## Architecture

- Next.js App Router, React, TypeScript
- Static-friendly rendering (no required server data)
- Deploy target: Vercel
- No backend, auth, CMS, or payment in v1
- Optional later: drop in EasyChair/registration URLs and people arrays without a redesign

## SEO

- Default document title: `ICESF-2026 | International Conference on Engineering a Sustainable Future`
- Per-page titles via template: `{Page} | ICESF-2026` (Home uses the default title)
- Meta description from `seo.description` (full conference name, dates, venue)
- Open Graph: title, description, `og:type=website`, optional `seo.ogImage` (omit image tag when null)
- Favicon (simple navy/cream mark from short name; replace when official asset exists)
- `app/robots.ts` allowing `/`
- `app/sitemap.ts` listing the six routes
- Semantic headings: one `h1` per page; tracks/people as `h2`/`h3`
- Optional JSON-LD `Event` on Home: name, startDate, endDate, location, organizer — only fields from `site.ts`, no extra IEEE claims

## Accessibility

- Full keyboard navigation; visible focus rings (navy/gold, 2px, never `outline: none` without a replacement)
- Heading hierarchy as above; nav is a `<nav>` with a list of links
- Mobile menu: button with accessible name, `aria-expanded`, focus trap or sequential focus, Escape to close, return focus to the button
- Alt text from speaker `photoSrc` metadata; decorative blocks `alt=""`
- Contrast: navy on cream and cream on navy must meet WCAG 2.2 AA; gold is accent-only, not body text on cream
- CTA and nav labels are plain language (“Submit abstract”, “Register”, “Call for Papers”) — not “Click here”
- Disabled CTAs are not focusable links; they are text or `disabled` buttons announcing “Link to be announced”

## Empty and error states

- Missing outbound URL → disabled CTA, not a broken link
- Empty people/speakers arrays → explicit “to be announced”, not a blank grid
- Empty announcement → bar not rendered
- Unknown path → simple 404 with link home
- Nav never points at missing pages

## Out of scope (v1)

- On-site forms, payments, camera-ready upload
- CMS / WordPress
- Multilingual
- Attack-challenge / firewall work on icisct.com
- Recreating the old ICISCT WordPress site
- Inventing IEEE organizational units or unofficial IEEE logo artwork
- Expanding beyond the six routes

## QA before calling v1 done

- All six routes render on desktop (~1280px) and mobile (~390px)
- Header nav + mobile menu reach every page (keyboard + pointer)
- Dates on Home, CFP, announcement (if set), and footer match the table above
- Empty EasyChair and registration URLs do not 404
- Announcement hides when `conference.announcement` is empty
- `robots.txt` and `sitemap.xml` exist and list the six routes
- Document title and meta description present on Home
- Visual check: no gradient mesh, no glass cards, cream/navy/gold only
- Contrast and focus-visible checked on header, CTAs, and footer
