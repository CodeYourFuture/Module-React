import React from 'react';

const PlayerScore = ({ name, score }) => (
  <tr>
    <td>{name}</td>
    <td>{score}</td>
  </tr>
);

const HighScoreTable = ({ country, scores }) => {
  return (
    <div className="high-score-table">
      <h2>{country}</h2>
      <table>
        <thead>
          <tr>
            <th>Player</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {scores.map((playerData) => (
            <PlayerScore key={playerData.n} name={playerData.n} score={playerData.s} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HighScoreTable;
