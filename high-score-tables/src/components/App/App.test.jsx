import App from "./App.jsx";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

describe("App", () => {
  it("renders a heading", () => {
    render(<App />);
    const h1 = screen.getByRole("heading", { level: 1 });
    expect(h1).toBeInTheDocument();
  });
});
