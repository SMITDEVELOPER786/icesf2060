import { PageHero } from "@/components/PageHero";
import { PersonGrid } from "@/components/PersonGrid";
import { site } from "@/content/site";

export const metadata = { title: "Speakers" };

export default function SpeakersPage() {
  return (
    <>
      <PageHero kicker={site.conference.shortName} title="Speakers" />
      <PersonGrid
        people={site.speakers}
        emptyLabel="Keynote speakers to be announced."
      />
    </>
  );
}
