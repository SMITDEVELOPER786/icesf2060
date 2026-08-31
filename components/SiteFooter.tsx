import { site } from "@/content/site";
import { conferenceDatesLabel } from "@/lib/site";

export function SiteFooter() {
  const dates = conferenceDatesLabel(site.importantDates);
  return (
    <footer className="site-footer">
      <p>{site.conference.shortName}</p>
      {dates ? <p>{dates}</p> : null}
      <p>
        Organized by {site.conference.organizer} | {site.conference.affiliationLine}
      </p>
      <p>© 2026 {site.conference.organizer}</p>
    </footer>
  );
}
