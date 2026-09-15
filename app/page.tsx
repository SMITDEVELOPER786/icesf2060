import Link from "next/link";
import { CtaLink } from "@/components/CtaLink";
import { DateCards } from "@/components/DateCards";
import { EventJsonLd } from "@/components/EventJsonLd";
import { HeroCollage } from "@/components/HeroCollage";
import { PartnerBanner } from "@/components/PartnerBanner";
import { PersonGrid } from "@/components/PersonGrid";
import { SectionHeading } from "@/components/SectionHeading";
import { ThemeCards } from "@/components/ThemeCards";
import { site } from "@/content/site";
import { COMMITTEE_SECTIONS, conferenceDatesLabel, groupPeople } from "@/lib/site";

export default function Home() {
  const dates = conferenceDatesLabel(site.importantDates);
  const grouped = groupPeople(site.people);

  return (
    <>
      <EventJsonLd />
      <section id="home" className="hero">
        <HeroCollage />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="hero-content">
          <div className="hero-panel">
            <p className="kicker">Get Ready</p>
            <h1>{site.conference.fullTitle}</h1>
            <p className="hero-tagline">{site.conference.subtitle}</p>
            <div className="hero-meta">
              {dates ? <p className="hero-dates">{dates}</p> : null}
              <p className="hero-venue">Venue: {site.conference.venue}</p>
              <p className="hero-organized">{site.conference.organizedBy}</p>
            </div>
            <div className="cta-pair">
              <CtaLink className="cta" href={site.links.easychair} compact>
                Submit an Abstract
              </CtaLink>
              <Link className="cta cta-light" href="/#theme">
                Learn More
              </Link>
            </div>
            <PartnerBanner partners={site.partners} />
          </div>
        </div>
      </section>

      <section id="about" className="band about-band">
        <div className="page-body">
          <SectionHeading>About Us</SectionHeading>
          <div className="copy-stack">
            {site.conference.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section id="aims" className="band band-alt">
        <div className="page-body">
          <SectionHeading>Conference Aims and Objectives</SectionHeading>
          <div className="copy-stack">
            <p>{site.conference.aims.intro}</p>
            <p className="aims-lead">{site.conference.aims.leadIn}</p>
            <ul className="aims-list">
              {site.conference.aims.objectives.map((objective) => (
                <li key={objective}>{objective}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="theme" className="band theme-band">
        <div className="page-body">
          <SectionHeading>Theme of Conference</SectionHeading>
          <p className="theme-intro">{site.conference.themeIntro}</p>
          <ThemeCards themes={site.themes} />
        </div>
      </section>

      <section id="dates" className="band band-alt">
        <div className="page-body">
          <SectionHeading>Important Dates</SectionHeading>
          <DateCards dates={site.importantDates} />
        </div>
      </section>

      <section id="speakers" className="band">
        <div className="page-body">
          <SectionHeading>Keynote Speakers</SectionHeading>
          <PersonGrid
            people={site.speakers}
            emptyLabel="Keynote speakers to be announced."
          />
        </div>
      </section>

      <section id="committee" className="band band-alt">
        <div className="page-body">
          <SectionHeading>Committee</SectionHeading>
          {site.people.length === 0 ? (
            <p className="empty">Committee members to be announced.</p>
          ) : (
            COMMITTEE_SECTIONS.map((section) => {
              const people = grouped[section.id];
              if (people.length === 0) return null;
              return (
                <div key={section.id} className="committee-block">
                  <h3 className="committee-subhead">{section.heading}</h3>
                  <PersonGrid people={people} emptyLabel="To be announced" />
                </div>
              );
            })
          )}
        </div>
      </section>

      <section id="registration" className="band">
        <div className="page-body">
          <SectionHeading>Registration</SectionHeading>
          <table className="dates">
            <caption className="kicker">Registration fees</caption>
            <tbody>
              {site.registrationFees.map((fee) => (
                <tr key={fee.id}>
                  <th scope="row">{fee.category}</th>
                  <td>{fee.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="bank-details">
            <SectionHeading>Bank Details</SectionHeading>
            <table className="dates">
              <caption className="kicker">DHA Suffa University</caption>
              <tbody>
                {site.bankDetails.map((row) => (
                  <tr key={row.label}>
                    <th scope="row">{row.label}</th>
                    <td>{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="band-link">
            <CtaLink className="cta" href={site.links.registration}>
              Register
            </CtaLink>
          </p>
        </div>
      </section>

      <section id="contact" className="band band-alt">
        <div className="page-body">
          <SectionHeading>Contact</SectionHeading>
          <div className="contact-card card">
            <address>
              {site.contact.addressLines.map((line) => (
                <div key={line}>{line}</div>
              ))}
            </address>
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
      </section>
    </>
  );
}
