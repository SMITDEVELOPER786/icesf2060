import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { PartnerBanner } from "./PartnerBanner";

describe("PartnerBanner", () => {
  it("renders nothing when there are no partners", () => {
    const { container } = render(<PartnerBanner partners={[]} />);
    expect(container).toBeEmptyDOMElement();
  });

  it("renders partner logos with accessible names", () => {
    render(
      <PartnerBanner
        partners={[
          {
            id: "dsu",
            name: "DHA Suffa University",
            logoSrc: "/media/partners/dsu.png",
          },
          {
            id: "uel",
            name: "University of East London",
            logoSrc: "/media/partners/uel.png",
          },
        ]}
      />,
    );

    expect(
      screen.getByRole("region", { name: "Partner institutions" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: "DHA Suffa University" }),
    ).toHaveAttribute("src", "/media/partners/dsu.png");
    expect(
      screen.getByRole("img", { name: "University of East London" }),
    ).toHaveAttribute("src", "/media/partners/uel.png");
  });
});
