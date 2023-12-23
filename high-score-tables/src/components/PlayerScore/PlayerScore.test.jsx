import PlayerScore from "./PlayerScore.jsx";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

describe("PlayerScore", () => {
  const player = {
    name: "Player 1",
    score: 100,
  };
  it("should render the PlayerScore row", () => {
    render(<PlayerScore {...player} />);
    const playerScoreRow = screen.getByRole("row");
    expect(playerScoreRow).toBeInTheDocument();
  });
  it("should render the PlayerScore name", () => {
    render(<PlayerScore {...player} />);
    const playerScoreName = screen.getByText(player.name);
    expect(playerScoreName).toBeInTheDocument();
  });
  it("should render the PlayerScore score", () => {
    render(<PlayerScore {...player} />);
    const playerScoreScore = screen.getByText(player.score);
    expect(playerScoreScore).toBeInTheDocument();
  });
});
