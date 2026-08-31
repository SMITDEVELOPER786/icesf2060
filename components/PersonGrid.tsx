import type { Person, Speaker } from "@/content/types";

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
        return (
          <li key={person.id} className="card">
            {isSpeaker && person.photoSrc ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={person.photoSrc} alt={person.name} />
            ) : isSpeaker ? (
              <div className="photo-ph" aria-hidden="true" />
            ) : null}
            <h3>{person.name}</h3>
            {"role" in person ? <p>{person.role}</p> : null}
            <p>{person.affiliation}</p>
            {isSpeaker ? <p>{person.bio}</p> : null}
          </li>
        );
      })}
    </ul>
  );
}
