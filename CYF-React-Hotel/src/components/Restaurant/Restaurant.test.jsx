import Restaurant from "./Restaurant.jsx";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

describe("Restaurant", () => {
  it("renders an Orders heading", () => {
    render(<Restaurant />);
    const titleElement = screen.getByRole("heading", {
      level: 3,
    });
    expect(titleElement).toBeInTheDocument();
  });
});
