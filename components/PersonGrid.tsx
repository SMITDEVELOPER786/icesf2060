import type { Person, Speaker } from "@/content/types";
import { personInitials } from "@/lib/site";

export function PersonGrid({
  people,
  emptyLabel,
}: {
  people: Person[] | Speaker[];
  emptyLabel: string;
}) {
  if (people.length === 0) {
    return <p className="empty">{emptyLabel}</p>;
  }

  return (
    <ul className="person-grid">
      {people.map((person) => {
        const isSpeaker = "bio" in person;
        const photoSrc = person.photoSrc;
        return (
          <li key={person.id} className="card person-card">
            {photoSrc ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img className="person-photo" src={photoSrc} alt={person.name} />
            ) : (
              <div className="person-photo person-ph" aria-hidden="true">
                {personInitials(person.name)}
              </div>
            )}
            {"role" in person ? (
              <p className="person-role">{person.role}</p>
            ) : null}
            <h3>{person.name}</h3>
            {person.affiliation ? (
              <p className="affiliation">{person.affiliation}</p>
            ) : null}
            {isSpeaker && person.talkTitle ? (
              <p className="talk-title">{person.talkTitle}</p>
            ) : null}
            {isSpeaker ? <p>{person.bio}</p> : null}
          </li>
        );
      })}
    </ul>
  );
}
