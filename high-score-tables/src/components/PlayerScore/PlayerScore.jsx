import React from 'react';

const PlayerScore = ({ name, score }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{score}</td>
    </tr>
  );
};

export default PlayerScore;