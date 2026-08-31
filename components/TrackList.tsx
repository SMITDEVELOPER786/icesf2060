import type { Track } from "@/content/types";

export function TrackList({ tracks }: { tracks: Track[] }) {
  return (
    <ul className="track-list">
      {tracks.map((track) => (
        <li key={track.id} className="card">
          <h3>{track.title}</h3>
          <p>{track.blurb}</p>
        </li>
      ))}
    </ul>
  );
}
