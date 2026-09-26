import { fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ContactForm } from "./ContactForm";

describe("ContactForm", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("renders name, email, subject, and message fields", () => {
    render(<ContactForm toEmail="icesf@dsu.edu.pk" />);

    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Subject")).toBeInTheDocument();
    expect(screen.getByLabelText("Message")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Send message" }),
    ).toBeInTheDocument();
  });

  it("opens a mailto link with the form contents", () => {
    const hrefSetter = vi.fn();
    vi.stubGlobal("location", {
      ...window.location,
      set href(value: string) {
        hrefSetter(value);
      },
      get href() {
        return "";
      },
    });

    render(<ContactForm toEmail="icesf@dsu.edu.pk" />);

    fireEvent.change(screen.getByLabelText("Name"), {
      target: { value: "Ayesha Khan" },
    });
    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "ayesha@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Subject"), {
      target: { value: "Registration query" },
    });
    fireEvent.change(screen.getByLabelText("Message"), {
      target: { value: "Please confirm the fee." },
    });
    fireEvent.submit(screen.getByRole("button", { name: "Send message" }).closest("form")!);

    expect(hrefSetter).toHaveBeenCalled();
    const href = hrefSetter.mock.calls[0][0] as string;
    expect(href.startsWith("mailto:icesf@dsu.edu.pk?")).toBe(true);
    expect(href).toContain(encodeURIComponent("Registration query"));
    expect(href).toContain(encodeURIComponent("Ayesha Khan"));
    expect(
      screen.getByText(/Your email app should open/i),
    ).toBeInTheDocument();
  });
});
