import App from "./App.jsx";
import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";

describe("App", () => {
  it("renders the CYF Hotel header", () => {
    render(<App />);
    const h1 = screen.getByRole("heading", { level: 1 });
    expect(h1).toBeInTheDocument();
  });
});
