import type { CommitteeSection, ImportantDate, Person } from "@/content/types";

export const COMMITTEE_SECTIONS: { id: CommitteeSection; heading: string }[] = [
  { id: "patron", heading: "Patron" },
  { id: "chair", heading: "Chair" },
  { id: "co-chair", heading: "Co-Chair" },
  { id: "secretary", heading: "Secretaries" },
  { id: "program", heading: "Program Committee" },
  { id: "review", heading: "Review Committee" },
  { id: "organizing", heading: "Organizing Committee" },
];

export function hasAnnouncement(value: string | null): boolean {
  return Boolean(value && value.trim().length > 0);
}

export function pageTitle(
  pageName: string | null,
  defaultTitle: string,
  titleTemplate: string,
): string {
  if (!pageName) return defaultTitle;
  return titleTemplate.replace("%s", pageName);
}

export function groupPeople(
  people: Person[],
): Record<CommitteeSection, Person[]> {
  const grouped: Record<CommitteeSection, Person[]> = {
    patron: [],
    chair: [],
    "co-chair": [],
    secretary: [],
    program: [],
    review: [],
    organizing: [],
  };
  for (const person of people) {
    grouped[person.section].push(person);
  }
  return grouped;
}

export function conferenceDatesLabel(
  dates: ImportantDate[],
): string | undefined {
  return dates.find((row) => row.id === "conference")?.date;
}
