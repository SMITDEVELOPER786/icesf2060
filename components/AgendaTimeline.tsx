import type { ProgrammeItem } from "@/content/types";

export function AgendaTimeline({ items }: { items: ProgrammeItem[] }) {
  return (
    <ol className="timeline">
      {items.map((row, index) => (
        <li
          key={row.id}
          className={
            index % 2 === 0 ? "timeline-item is-left" : "timeline-item is-right"
          }
        >
          <span className="timeline-badge">
            {row.day}: {row.time}
          </span>
          <h3>{row.title}</h3>
        </li>
      ))}
    </ol>
  );
}
