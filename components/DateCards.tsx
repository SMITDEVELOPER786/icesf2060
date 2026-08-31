import type { ImportantDate } from "@/content/types";

export function DateCards({ dates }: { dates: ImportantDate[] }) {
  return (
    <ul className="date-grid">
      {dates.map((row) => (
        <li key={row.id} className="date-card">
          <p className="date-card-when">{row.date}</p>
          <h3>{row.label}</h3>
        </li>
      ))}
    </ul>
  );
}
