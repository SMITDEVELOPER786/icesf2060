import Link from "next/link";
import { AgendaTimeline } from "@/components/AgendaTimeline";
import { CtaLink } from "@/components/CtaLink";
import { DateCards } from "@/components/DateCards";
import { EventJsonLd } from "@/components/EventJsonLd";
import { HeroCollage } from "@/components/HeroCollage";
import { PersonGrid } from "@/components/PersonGrid";
import { SectionHeading } from "@/components/SectionHeading";
import { StatsBar } from "@/components/StatsBar";
import { TrackList } from "@/components/TrackList";
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
            <div className="logo-strip">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="hero-crest"
                src="/media/dsu-logo.png"
                alt=""
              />
              <p>{site.conference.organizer}</p>
              <span className="logo-dot" aria-hidden="true" />
              <p>{site.conference.affiliationLine}</p>
            </div>
            <p className="hero-motto">{site.conference.motto}</p>
            <p className="kicker">International conference</p>
            <p className="hero-short">{site.conference.shortName}</p>
            <hr />
            <h1>{site.conference.fullTitle}</h1>
            <div className="hero-meta">
              {dates ? <p className="hero-dates">{dates}</p> : null}
              <p className="hero-chip">{site.conference.city}</p>
              <p className="hero-venue">Venue: {site.conference.venue}</p>
            </div>
            <div className="cta-pair">
              <CtaLink className="cta" href={site.links.easychair}>
                Submit a Paper
              </CtaLink>
              <Link className="cta cta-outline" href="/call-for-papers">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
      <StatsBar />
      <section className="band">
        <div className="page-body">
          <SectionHeading>Theme of Conference</SectionHeading>
          <div className="about-split">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="about-photo"
              src="/media/dsu-dck.png"
              alt="DHA Suffa University DCK Campus"
            />
            <div>
              <p className="lede">{site.conference.about[0]}</p>
              {site.conference.about.slice(1).map((paragraph) => (
                <p key={paragraph} className="lede-follow">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <TrackList tracks={site.tracks} />
          <p className="band-link">
            <Link href="/call-for-papers">Call for Papers</Link>
          </p>
        </div>
      </section>
      <section className="band band-alt">
        <div className="page-body">
          <SectionHeading>Host University</SectionHeading>
          <p className="lede">
            DHA Suffa University, Karachi — Main Campus in DHA Phase VII (Ext.),
            with a second campus at DHA City Karachi (DCK).
          </p>
          <div className="campus-gallery" aria-hidden="true">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/media/dsu-campus.png" alt="" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/media/dsu-dck.png" alt="" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/media/dsu-career.png" alt="" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/media/dsu-sports.png" alt="" />
          </div>
          <TrackList tracks={site.faculties} />
        </div>
      </section>
      <section className="band">
        <div className="page-body">
          <SectionHeading>Important Dates</SectionHeading>
          <DateCards dates={site.importantDates} />
        </div>
      </section>
      <section className="band band-alt">
        <div className="page-body">
          <SectionHeading>Agenda Highlights</SectionHeading>
          <AgendaTimeline items={site.programme} />
        </div>
      </section>
      <section className="band">
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
      <section className="band band-alt">
        <div className="page-body">
          <SectionHeading>Committee</SectionHeading>
          <PersonGrid
            people={featuredCommittee}
            emptyLabel="Committee members to be announced."
          />
          <p className="band-link">
            <Link href="/committee">Full committee</Link>
          </p>
        </div>
      </section>
    </>
  );
}
