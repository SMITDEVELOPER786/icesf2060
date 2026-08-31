import { PageHero } from "@/components/PageHero";
import { site } from "@/content/site";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHero kicker={site.conference.shortName} title="Contact" />
      <address>
        {site.contact.addressLines.map((line) => (
          <div key={line}>{line}</div>
        ))}
      </address>
      <p>
        <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
      </p>
      {site.contact.phone ? <p>{site.contact.phone}</p> : null}
    </>
  );
}
