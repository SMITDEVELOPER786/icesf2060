import Link from "next/link";
import { CtaLink } from "@/components/CtaLink";
import { DatesTable } from "@/components/DatesTable";
import { EventJsonLd } from "@/components/EventJsonLd";
import { TrackList } from "@/components/TrackList";
import { site } from "@/content/site";
import { conferenceDatesLabel } from "@/lib/site";

export default function Home() {
  return (
    <>
      <EventJsonLd />
      <section className="hero">
        <div>
          <p className="kicker">{site.conference.shortName}</p>
          <hr />
          <h1>{site.conference.fullTitle}</h1>
          <p>{site.conference.affiliationLine}</p>
        </div>
        <div className="plate">
          <p className="kicker">{conferenceDatesLabel(site.importantDates)}</p>
          <p>{site.conference.venue}</p>
          <p>{site.conference.city}</p>
        </div>
      </section>
      <DatesTable dates={site.importantDates} />
      <section>
        <h2>About the conference</h2>
        {site.conference.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>
      <section>
        <h2>Themes</h2>
        <TrackList tracks={site.tracks} />
        <p>
          <Link href="/call-for-papers">Call for Papers</Link>
        </p>
      </section>
      <div className="cta-pair">
        <CtaLink className="cta" href={site.links.easychair}>
          Submit abstract
        </CtaLink>
        <CtaLink className="cta" href={site.links.registration}>
          Register
        </CtaLink>
      </div>
    </>
  );
}
