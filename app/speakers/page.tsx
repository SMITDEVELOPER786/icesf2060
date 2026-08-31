import { PageHero } from "@/components/PageHero";
import { PersonGrid } from "@/components/PersonGrid";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/content/site";

export const metadata = { title: "Speakers" };

export default function SpeakersPage() {
  return (
    <>
      <PageHero kicker={site.conference.shortName} title="Speakers" />
      <div className="page-body">
        <section>
          <SectionHeading>Keynote speakers</SectionHeading>
          <PersonGrid
            people={site.speakers}
            emptyLabel="Keynote speakers to be announced."
          />
        </section>
      </div>
    </>
  );
}
