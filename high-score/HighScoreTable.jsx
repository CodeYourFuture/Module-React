import PlayerScore from "./PlayerScore.jsx";

// eslint-disable-next-line react/prop-types
const HighScoreTable = ({ country, scores = [] }) => (
  <div className="table">
    <table>
      <caption className="country">HIGH SCORE: {country}</caption>
      <tbody className="tbody-card">
        {scores.map((score, index) => (
          <PlayerScore key={index} name={score.n} score={score.s} />
        ))}
      </tbody>
    </table>
  </div>
);

export default HighScoreTable;
