import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import * as pageModule from "./page";
import ContactPage from "./page";
import { site } from "@/content/site";

describe("Contact page", () => {
  it("exports metadata title Contact", () => {
    expect(pageModule.metadata).toEqual({ title: "Contact" });
  });

  it("renders address lines and a mailto email, omitting empty phone and maps", () => {
    expect(site.contact.phone).toBe("");
    render(<ContactPage />);

    expect(screen.getByText(site.conference.shortName)).toHaveClass("kicker");
    expect(
      screen.getByRole("heading", { level: 1, name: "Contact" }),
    ).toBeInTheDocument();

    const address = document.querySelector("address");
    expect(address).not.toBeNull();
    for (const line of site.contact.addressLines) {
      expect(address).toHaveTextContent(line);
    }

    const email = screen.getByRole("link", { name: site.contact.email });
    expect(email).toHaveAttribute("href", `mailto:${site.contact.email}`);

    expect(screen.queryByText(/phone/i)).toBeNull();
    expect(document.querySelector("iframe")).toBeNull();
    expect(document.querySelector("map")).toBeNull();
  });
});
