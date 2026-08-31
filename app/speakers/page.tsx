import { PageHero } from "@/components/PageHero";
import { PersonGrid } from "@/components/PersonGrid";
import { site } from "@/content/site";

export const metadata = { title: "Speakers" };

export default function SpeakersPage() {
  return (
    <>
      <PageHero kicker={site.conference.shortName} title="Speakers" />
      <section>
        <h2>Keynote speakers</h2>
        <PersonGrid
          people={site.speakers}
          emptyLabel="Keynote speakers to be announced."
        />
      </section>
    </>
  );
}
