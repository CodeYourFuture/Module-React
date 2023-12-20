import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Bookings from "./Bookings.jsx";

describe("Bookings Component", () => {
  it("renders a main element", () => {
    render(<Bookings />);
    const mainElement = screen.getByRole("main");
    expect(mainElement).toBeInTheDocument();
  });
});
