import HighScoreTable from "./HighScoreTable.jsx";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

describe("HighScoreTable", () => {
  it("should render the HighScoreTable table", () => {
    render(<HighScoreTable />);
    const highScoreTableElement = screen.getByRole("table");
    expect(highScoreTableElement).toBeInTheDocument();
  });
});
