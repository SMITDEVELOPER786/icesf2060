import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CtaLink } from "./CtaLink";

describe("CtaLink", () => {
  it("renders a disabled control when href is null", () => {
    render(<CtaLink href={null}>Submit abstract</CtaLink>);
    expect(
      screen.getByRole("button", { name: /link to be announced/i }),
    ).toBeDisabled();
    expect(screen.queryByRole("link")).toBeNull();
  });

  it("renders an outbound link when href is set", () => {
    render(
      <CtaLink href="https://easychair.org/example">Submit abstract</CtaLink>,
    );
    const link = screen.getByRole("link", { name: "Submit abstract" });
    expect(link).toHaveAttribute("href", "https://easychair.org/example");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });
});
