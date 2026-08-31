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

const INITIALS_SKIP = new Set([
  "prof",
  "dr",
  "engr",
  "mr",
  "ms",
  "mrs",
  "of",
  "and",
  "the",
  "for",
  "department",
  "center",
  "office",
]);

export function personInitials(name: string): string {
  const words = name
    .replace(/[.&]/g, " ")
    .split(/\s+/)
    .filter((word) => {
      const clean = word.replace(/\./g, "").toLowerCase();
      return clean.length > 0 && !INITIALS_SKIP.has(clean);
    });
  if (words.length === 0) return "DSU";
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return `${words[0][0]}${words[words.length - 1][0]}`.toUpperCase();
}
