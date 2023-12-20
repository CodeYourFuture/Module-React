import Search from "./Search.jsx";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

describe("Search Component", () => {
  it("renders a search input", () => {
    render(<Search />);
    const searchInput = screen.getByRole("searchbox");
    expect(searchInput).toBeInTheDocument();
  });
});
