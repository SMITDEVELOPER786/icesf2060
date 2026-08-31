import { hasAnnouncement } from "@/lib/site";

export function AnnouncementBar({ text }: { text: string | null }) {
  if (!hasAnnouncement(text)) return null;
  return <div className="announcement">{text}</div>;
}
