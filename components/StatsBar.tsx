import { site } from "@/content/site";

export function StatsBar() {
  const stats = [
    { value: "2", label: "Conference days" },
    { value: String(site.tracks.length), label: "Research tracks" },
    { value: String(site.faculties.length), label: "DSU faculties" },
    { value: "Main Campus", label: "DHA Karachi" },
  ];

  return (
    <ul className="stats">
      {stats.map((item) => (
        <li key={item.label} className="stat">
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </li>
      ))}
    </ul>
  );
}
