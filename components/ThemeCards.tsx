import type { Track } from "@/content/types";

function ThemeIcon({ id }: { id: string }) {
  return (
    <span className="theme-icon" aria-hidden="true">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {iconPaths(id)}
      </svg>
    </span>
  );
}

function iconPaths(id: string) {
  switch (id) {
    case "ai-smart-systems":
      return (
        <>
          <path d="M12 3.5a5 5 0 0 1 5 5c0 2.4-1.4 3.6-2.2 4.4-.5.5-.8 1.1-.8 1.8H10c0-.7-.3-1.3-.8-1.8C8.4 12.1 7 10.9 7 8.5a5 5 0 0 1 5-5Z" />
          <path d="M9.5 17.5h5M10.5 20.5h3" />
        </>
      );
    case "data-digital":
      return (
        <>
          <ellipse cx="12" cy="6" rx="7" ry="2.4" />
          <path d="M5 6v4c0 1.3 3.1 2.4 7 2.4s7-1.1 7-2.4V6" />
          <path d="M5 10v4c0 1.3 3.1 2.4 7 2.4s7-1.1 7-2.4v-4" />
          <path d="M5 14v4c0 1.3 3.1 2.4 7 2.4s7-1.1 7-2.4v-4" />
        </>
      );
    case "energy-green":
      return <path d="M13 2 6 13h6l-1 9 7-11h-6l1-9Z" />;
    case "sustainable-business":
      return (
        <>
          <path d="M4 19V10h4v9H4Z" />
          <path d="M10 19V5h4v14h-4Z" />
          <path d="M16 19v-7h4v7h-4Z" />
        </>
      );
    case "human-values":
      return (
        <path d="M12 20s-7-4.3-7-10a4 4 0 0 1 7-2.7A4 4 0 0 1 19 10c0 5.7-7 10-7 10Z" />
      );
    case "supply-chains":
      return (
        <>
          <path d="M3 7h6l2 4h7" />
          <path d="M5 17h11" />
          <circle cx="7.5" cy="17" r="1.8" />
          <circle cx="16.5" cy="17" r="1.8" />
          <path d="M14 7h4l2 4h-4" />
        </>
      );
    case "governance-policy":
      return (
        <>
          <path d="M4 20h16" />
          <path d="M6 20V9l6-4 6 4v11" />
          <path d="M10 20v-5h4v5" />
        </>
      );
    case "society-sdg":
      return (
        <>
          <circle cx="9" cy="8" r="2.2" />
          <circle cx="16" cy="9" r="2" />
          <path d="M4.5 19c.8-3 2.6-4.5 4.5-4.5S12.7 16 13.5 19" />
          <path d="M12.5 19c.5-2.2 1.8-3.5 3.5-3.5s2.8 1.2 3.5 3.5" />
        </>
      );
    case "sustainable-engineering":
    default:
      return (
        <>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 5V3M12 21v-2M5 12H3M21 12h-2" />
          <path d="m7.1 7.1-1.4-1.4M18.3 18.3l-1.4-1.4M16.9 7.1l1.4-1.4M5.7 18.3l1.4-1.4" />
        </>
      );
  }
}

export function ThemeCards({ themes }: { themes: Track[] }) {
  return (
    <ul className="theme-grid">
      {themes.map((theme) => (
        <li key={theme.id} className="theme-card">
          <ThemeIcon id={theme.id} />
          <h3>{theme.title}</h3>
          <p>{theme.blurb}</p>
        </li>
      ))}
    </ul>
  );
}
