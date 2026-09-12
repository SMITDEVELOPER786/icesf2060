import { CtaLink } from "@/components/CtaLink";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/content/site";

export const metadata = { title: "Registration" };

export default function RegistrationPage() {
  return (
    <>
      <PageHero kicker={site.conference.shortName} title="Registration" />
      <div className="page-body">
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
        <section className="bank-details">
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
        </section>
        <p className="band-link">
          <CtaLink className="cta" href={site.links.registration}>
            Register
          </CtaLink>
        </p>
      </div>
    </>
  );
}
