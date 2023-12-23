import PlayerScore from "@/components/PlayerScore/PlayerScore.jsx";
import "./HighScoreTable.scss";
// https://react.dev/learn/rendering-lists

const HighScoreTable = ({ country, scores = [] }) => (
  <table className="scores">
    <caption>{country}</caption>
    <thead>
      <tr>
        <th>Player</th>
        <th>Score</th>
      </tr>
    </thead>
    <tbody>
      {scores.map((score, index) => (
        <PlayerScore key={index} name={score.n} score={score.s} />
      ))}
    </tbody>
  </table>
);

export default HighScoreTable;
