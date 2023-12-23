import "./PlayerScore.scss";

const PlayerScore = ({ name, score }) => (
  <tr className="player">
    <td>{name}</td>
    <td>{score}</td>
  </tr>
);

export default PlayerScore;
