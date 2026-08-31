import type { Track } from "@/content/types";

const TRACK_ICONS: Record<string, string> = {
  technology: "M12 2 4 6v6c0 5 3.4 9.4 8 10 4.6-.6 8-5 8-10V6l-8-4Zm0 3.2 6 3v4.6c0 3.6-2.3 6.8-6 7.5-3.7-.7-6-3.9-6-7.5V8.2l6-3Z",
  management:
    "M4 18V8h4v10H4Zm6 0V4h4v14h-4Zm6 0v-7h4v7h-4Z",
  values:
    "M12 21s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.6-7 10-7 10Z",
  esg: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 2c1.7 0 3.3.5 4.6 1.4C15.4 7 13.8 8 12 8S8.6 7 7.4 5.4A8 8 0 0 1 12 4Zm-8 8c0-1.3.3-2.5.8-3.6C6.8 10.2 9.2 11 12 11s5.2-.8 7.2-2.6c.5 1.1.8 2.3.8 3.6 0 4.4-3.6 8-8 8s-8-3.6-8-8Z",
};
TRACK_ICONS.eas = TRACK_ICONS.technology;
TRACK_ICONS.cit = TRACK_ICONS.esg;
TRACK_ICONS.ms = TRACK_ICONS.management;
TRACK_ICONS.hss = TRACK_ICONS.values;

function TrackIcon({ id }: { id: string }) {
  const d = TRACK_ICONS[id] ?? TRACK_ICONS.technology;
  return (
    <span className="track-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
        <path d={d} />
      </svg>
    </span>
  );
}

export function TrackList({ tracks }: { tracks: Track[] }) {
  return (
    <ul className="track-list">
      {tracks.map((track) => (
        <li key={track.id} className="card">
          <TrackIcon id={track.id} />
          <h3>{track.title}</h3>
          <p>{track.blurb}</p>
        </li>
      ))}
    </ul>
  );
}
