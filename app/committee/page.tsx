import { PageHero } from "@/components/PageHero";
import { PersonGrid } from "@/components/PersonGrid";
import { site } from "@/content/site";
import { COMMITTEE_SECTIONS, groupPeople } from "@/lib/site";

export const metadata = { title: "Committee" };

export default function CommitteePage() {
  const grouped = groupPeople(site.people);

  return (
    <>
      <PageHero kicker={site.conference.shortName} title="Committee" />
      {site.people.length === 0 ? (
        <p className="empty">Committee members to be announced.</p>
      ) : (
        COMMITTEE_SECTIONS.map((section) => (
          <section key={section.id}>
            <h2>{section.heading}</h2>
            <PersonGrid
              people={grouped[section.id]}
              emptyLabel="To be announced"
            />
          </section>
        ))
      )}
    </>
  );
}
