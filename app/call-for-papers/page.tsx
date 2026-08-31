import { CtaLink } from "@/components/CtaLink";
import { DatesTable } from "@/components/DatesTable";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { TrackList } from "@/components/TrackList";
import { site } from "@/content/site";

export const metadata = { title: "Call for Papers" };

export default function CallForPapersPage() {
  return (
    <>
      <PageHero kicker={site.conference.shortName} title="Call for Papers" />
      <div className="page-body">
        <section>
          <SectionHeading>Tracks</SectionHeading>
          <TrackList tracks={site.tracks} />
        </section>
        <section>
          <SectionHeading>Guidelines</SectionHeading>
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
        <p className="band-link">
          <CtaLink className="cta" href={site.links.easychair}>
            Submit abstract
          </CtaLink>
        </p>
      </div>
    </>
  );
}
