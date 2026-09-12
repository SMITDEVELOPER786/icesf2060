import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SiteHeader } from "./SiteHeader";

describe("SiteHeader", () => {
  it("typesets organizer and affiliation and links the short name home", () => {
    render(<SiteHeader />);

    expect(screen.getByText("DHA Suffa University")).toBeInTheDocument();
    expect(
      screen.getByText(""),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "ISRC-STM 2026" })).toHaveAttribute(
      "href",
      "/",
    );
    expect(document.querySelector("svg")).toBeNull();
  });

  it("lists primary nav items and a submit-paper CTA", () => {
    render(<SiteHeader />);

    expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute(
      "href",
      "/",
    );
    expect(
      screen.getByRole("link", { name: "Call for Papers" }),
    ).toHaveAttribute("href", "/call-for-papers");
    expect(screen.getByRole("link", { name: "Submit paper" })).toHaveAttribute(
      "href",
      site.links.easychair,
    );
  });

  it("toggles the overlay menu and returns focus on Escape", () => {
    render(<SiteHeader />);

    const menuButton = screen.getByRole("button", { name: "Menu" });
    expect(menuButton).toHaveAttribute("aria-expanded", "false");
    expect(menuButton).toHaveAttribute("aria-controls", "site-menu");
    expect(document.getElementById("site-menu")).toBeTruthy();

    fireEvent.click(menuButton);
    expect(menuButton).toHaveAttribute("aria-expanded", "true");

    menuButton.focus();
    fireEvent.keyDown(document, { key: "Escape" });
    expect(menuButton).toHaveAttribute("aria-expanded", "false");
    expect(menuButton).toHaveFocus();
  });
});
