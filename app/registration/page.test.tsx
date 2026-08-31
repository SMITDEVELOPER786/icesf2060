import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import * as pageModule from "./page";
import RegistrationPage from "./page";
import { site } from "@/content/site";

describe("Registration page", () => {
  it("exports metadata title Registration", () => {
    expect(pageModule.metadata).toEqual({ title: "Registration" });
  });

  it("renders fee rows and a Register CTA", () => {
    render(<RegistrationPage />);

    expect(screen.getByText(site.conference.shortName)).toHaveClass("kicker");
    expect(
      screen.getByRole("heading", { level: 1, name: "Registration" }),
    ).toBeInTheDocument();

    for (const fee of site.registrationFees) {
      expect(screen.getByText(fee.category)).toBeInTheDocument();
    }
    expect(screen.getAllByText("To be announced").length).toBeGreaterThan(0);

    expect(
      screen.getByRole("button", { name: /link to be announced/i }),
    ).toBeDisabled();
    expect(screen.queryByRole("link", { name: "Register" })).toBeNull();
  });
});
