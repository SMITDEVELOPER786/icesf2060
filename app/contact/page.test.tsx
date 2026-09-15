import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ContactPage from "./page";

describe("Contact page", () => {
  it("redirects to the contact section on the home page", () => {
    render(<ContactPage />);
    expect(screen.getByRole("link", { name: "home" })).toHaveAttribute(
      "href",
      "/#contact",
    );
  });
});
