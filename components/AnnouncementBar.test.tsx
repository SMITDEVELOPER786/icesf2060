import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { AnnouncementBar } from "./AnnouncementBar";

describe("AnnouncementBar", () => {
  it("renders nothing when text is empty", () => {
    const { container } = render(<AnnouncementBar text={null} />);
    expect(container).toBeEmptyDOMElement();
  });

  it("renders the announcement text", () => {
    render(
      <AnnouncementBar text="Abstract submission deadline: 30 September 2026" />,
    );
    expect(
      screen.getByText("Abstract submission deadline: 30 September 2026"),
    ).toBeInTheDocument();
  });
});
