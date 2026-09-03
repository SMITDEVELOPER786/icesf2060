import type { Partner } from "@/content/types";

export function PartnerBanner({ partners }: { partners: Partner[] }) {
  if (partners.length === 0) return null;

  return (
    <div className="partner-banner" role="region" aria-label="Partner institutions">
      <div className="partner-banner-inner">
        <ul className="partner-logo-row">
          {partners.map((partner) => (
            <li key={partner.id} className="partner-logo-tile">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={partner.logoSrc} alt={partner.name} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
