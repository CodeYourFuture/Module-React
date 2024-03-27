
// eslint-disable-next-line react/prop-types
const PlayerScore = ({ name, score }) => (
    <tr className="player">
      <td>{name}</td>
      <td className="score">{score}</td>
    </tr>
  );
  
  export default PlayerScore;