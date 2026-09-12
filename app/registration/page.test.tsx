import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import * as pageModule from "./page";
import RegistrationPage from "./page";
import { site } from "@/content/site";

describe("Registration page", () => {
  it("exports metadata title Registration", () => {
    expect(pageModule.metadata).toEqual({ title: "Registration" });
  });

  it("renders fee rows, bank details, and a Register CTA", () => {
    render(<RegistrationPage />);

    expect(screen.getByText(site.conference.shortName)).toHaveClass("kicker");
    expect(
      screen.getByRole("heading", { level: 1, name: "Registration" }),
    ).toBeInTheDocument();

    for (const fee of site.registrationFees) {
      expect(screen.getByText(fee.category)).toBeInTheDocument();
      expect(screen.getByText(fee.amount)).toBeInTheDocument();
    }

    expect(
      screen.getByRole("heading", { level: 2, name: "Bank Details" }),
    ).toBeInTheDocument();
    for (const row of site.bankDetails) {
      expect(screen.getByText(row.label)).toBeInTheDocument();
      expect(screen.getByText(row.value)).toBeInTheDocument();
    }

    expect(
      screen.getByRole("link", { name: "Register" }),
    ).toHaveAttribute("href", site.links.registration);
  });
});
