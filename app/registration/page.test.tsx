import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import RegistrationPage from "./page";

describe("Registration page", () => {
  it("redirects to the registration section on the home page", () => {
    render(<RegistrationPage />);
    expect(screen.getByRole("link", { name: "home" })).toHaveAttribute(
      "href",
      "/#registration",
    );
  });
});
