import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { EventJsonLd } from "./EventJsonLd";
import { site } from "@/content/site";

function jsonLd(): Record<string, unknown> {
  render(<EventJsonLd />);
  const script = document.querySelector('script[type="application/ld+json"]');
  expect(script).not.toBeNull();
  return JSON.parse(script!.innerHTML) as Record<string, unknown>;
}

describe("EventJsonLd", () => {
  it("describes an in-person Event from site content", () => {
    const data = jsonLd();

    expect(data["@context"]).toBe("https://schema.org");
    expect(data["@type"]).toBe("Event");
    expect(data.name).toBe(site.conference.fullTitle);
    expect(data.startDate).toBe("2026-12-09");
    expect(data.endDate).toBe("2026-12-10");
    expect(data.eventAttendanceMode).toBe(
      "https://schema.org/OfflineEventAttendanceMode",
    );
    expect(data.eventStatus).toBe("https://schema.org/EventScheduled");
    expect(data.description).toBe(site.seo.description);

    const location = data.location as Record<string, unknown>;
    expect(location["@type"]).toBe("Place");
    expect(location.name).toBe(site.conference.venue);
    const address = location.address as Record<string, unknown>;
    expect(address["@type"]).toBe("PostalAddress");
    expect(address.addressLocality).toBe(site.conference.city);
    expect(address.addressCountry).toBe("PK");
  });

  it("names DHA Suffa University as the only organizer", () => {
    const data = jsonLd();
    const organizer = data.organizer as Record<string, unknown>;

    expect(organizer).toEqual({
      "@type": "Organization",
      name: site.conference.organizer,
    });
    expect(organizer.name).toBe("DHA Suffa University");
    expect(JSON.stringify(organizer)).not.toMatch(/IEEE/i);
  });
});
