import Link from "next/link";
import { AgendaTimeline } from "@/components/AgendaTimeline";
import { CtaLink } from "@/components/CtaLink";
import { DateCards } from "@/components/DateCards";
import { EventJsonLd } from "@/components/EventJsonLd";
import { HeroCollage } from "@/components/HeroCollage";
import { PersonGrid } from "@/components/PersonGrid";
import { SectionHeading } from "@/components/SectionHeading";
import { ThemeCards } from "@/components/ThemeCards";
import { site } from "@/content/site";
import { conferenceDatesLabel } from "@/lib/site";

export default function Home() {
  const dates = conferenceDatesLabel(site.importantDates);
  const featuredCommittee = site.people.slice(0, 6);

  return (
    <>
      <EventJsonLd />
      <section className="hero">
        <HeroCollage />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="hero-content">
          <div className="hero-panel">
            <p className="kicker">Get Ready</p>
            <h1>{site.conference.fullTitle}</h1>
            <p className="hero-tagline">{site.conference.subtitle}</p>
            <div className="hero-meta">
              {dates ? <p className="hero-dates">{dates}</p> : null}
              <p className="hero-venue">Venue: {site.conference.venue}</p>
            </div>
            <div className="cta-pair">
              <CtaLink className="cta" href={site.links.easychair} compact>
                Submit a Paper
              </CtaLink>
              <Link className="cta cta-light" href="/call-for-papers">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="band about-band">
        <div className="page-body">
          <SectionHeading>About Us</SectionHeading>
          <div className="copy-stack">
            {site.conference.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
      <section className="band band-alt">
        <div className="page-body">
          <SectionHeading>Conference Aims and Objectives</SectionHeading>
          <div className="copy-stack">
            <p>{site.conference.aims.intro}</p>
            <p className="aims-lead">{site.conference.aims.leadIn}</p>
            <ul className="aims-list">
              {site.conference.aims.objectives.map((objective) => (
                <li key={objective}>{objective}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="band theme-band">
        <div className="page-body">
          <SectionHeading>Theme of Conference</SectionHeading>
          <p className="theme-intro">{site.conference.themeIntro}</p>
          <ThemeCards themes={site.themes} />
        </div>
      </section>
      <section className="band band-alt">
        <div className="page-body">
          <SectionHeading>Important Dates</SectionHeading>
          <DateCards dates={site.importantDates} />
        </div>
      </section>
      <section className="band">
        <div className="page-body">
          <SectionHeading>Agenda Highlights</SectionHeading>
          <AgendaTimeline items={site.programme} />
        </div>
      </section>
      <section className="band band-alt">
        <div className="page-body">
          <SectionHeading>Keynote Speaker</SectionHeading>
          <PersonGrid
            people={site.speakers}
            emptyLabel="Keynote speakers to be announced."
          />
          <p className="band-link">
            <Link href="/speakers">View all speakers</Link>
          </p>
        </div>
      </section>
      <section className="band">
        <div className="page-body">
          <SectionHeading>Committee</SectionHeading>
          <PersonGrid
            people={featuredCommittee}
            emptyLabel="Committee members to be announced."
          />
          <p className="band-link">
            {/* <Link href="/committee">Full committee</Link> */}
          </p>
        </div>
      </section>
    </>
  );
}
