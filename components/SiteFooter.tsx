import Link from "next/link";
import { site } from "@/content/site";
import { NAV_ITEMS } from "@/lib/nav";
import { conferenceDatesLabel } from "@/lib/site";

export function SiteFooter() {
  const dates = conferenceDatesLabel(site.importantDates);
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="footer-crest"
            src="/media/dsu-logo.png"
            alt=""
          />
          <p className="footer-brand">{site.conference.shortName}</p>
          {dates ? <p>{dates}</p> : null}
          <p>
            Organized by {site.conference.organizer} |{" "}
            {site.conference.affiliationLine}
          </p>
        </div>
        <nav aria-label="Footer">
          <p className="footer-label">Explore</p>
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="footer-label">Contact</p>
          {site.contact.addressLines.map((line) => (
            <p key={line}>{line}</p>
          ))}
          <p>
            <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
          </p>
          {site.contact.phone ? (
            <p>
              <a href={`tel:${site.contact.phone.replace(/\s/g, "")}`}>
                {site.contact.phone}
              </a>
            </p>
          ) : null}
        </div>
      </div>
      <p>© 2026 {site.conference.organizer}</p>
    </footer>
  );
}
