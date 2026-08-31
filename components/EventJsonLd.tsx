import { site } from "@/content/site";

export function EventJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: site.conference.fullTitle,
    startDate: "2026-12-09",
    endDate: "2026-12-10",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: site.conference.venue,
      address: {
        "@type": "PostalAddress",
        addressLocality: site.conference.city,
        addressCountry: "PK",
      },
    },
    organizer: {
      "@type": "Organization",
      name: site.conference.organizer,
    },
    description: site.seo.description,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
