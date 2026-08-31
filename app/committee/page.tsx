import { PageHero } from "@/components/PageHero";
import { PersonGrid } from "@/components/PersonGrid";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/content/site";
import { COMMITTEE_SECTIONS, groupPeople } from "@/lib/site";

export const metadata = { title: "Committee" };

export default function CommitteePage() {
  const grouped = groupPeople(site.people);

  return (
    <>
      <PageHero kicker={site.conference.shortName} title="Committee" />
      <div className="page-body">
        {site.people.length === 0 ? (
          <p className="empty">Committee members to be announced.</p>
        ) : (
          COMMITTEE_SECTIONS.map((section) => {
            const people = grouped[section.id];
            if (people.length === 0) return null;
            return (
              <section key={section.id}>
                <SectionHeading>{section.heading}</SectionHeading>
                <PersonGrid people={people} emptyLabel="To be announced" />
              </section>
            );
          })
        )}
      </div>
    </>
  );
}
