import { CtaLink } from "@/components/CtaLink";
import { DatesTable } from "@/components/DatesTable";
import { PageHero } from "@/components/PageHero";
import { TrackList } from "@/components/TrackList";
import { site } from "@/content/site";

export const metadata = { title: "Call for Papers" };

export default function CallForPapersPage() {
  return (
    <>
      <PageHero kicker={site.conference.shortName} title="Call for Papers" />
      <section>
        <h2>Tracks</h2>
        <TrackList tracks={site.tracks} />
      </section>
      <section>
        <h2>Guidelines</h2>
        <ul>
          {site.conference.guidelines.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        {site.links.template ? (
          <p>
            <a href={site.links.template} target="_blank" rel="noopener noreferrer">
              IEEE paper template
            </a>
          </p>
        ) : (
          <p>The IEEE paper template will be posted here when available.</p>
        )}
      </section>
      <DatesTable dates={site.importantDates} />
      <p>
        <CtaLink className="cta" href={site.links.easychair}>
          Submit abstract
        </CtaLink>
      </p>
    </>
  );
}
