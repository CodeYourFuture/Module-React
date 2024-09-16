
import React, { useState, useEffect } from 'react';
import HighScoreTable from '../HighScoreTable/HighScoreTable';
import allCountryScores from './data';

const App = () => {
  const [countryScores, setCountryScores] = useState({});

  useEffect(() => {
    const groupedScores = allCountryScores.reduce((acc, countryData) => {
      acc[countryData.name] = countryData.scores;
      return acc;
    }, {});

    // Sort the data alphabetically by country name
    const sortedCountryScores = Object.entries(groupedScores).sort((a, b) => {
      const countryA = a[0].toLowerCase();
      const countryB = b[0].toLowerCase();
      return countryA.localeCompare(countryB); 
    });

    setCountryScores(Object.fromEntries(sortedCountryScores)); 
  }, []);

  return (
    <div className="app-container">
      <h1>Global High Scores</h1>
      {Object.entries(countryScores).map(([country, scores]) => (
        <HighScoreTable key={country} country={country} scores={scores} />
      ))}
    </div>
  );
};

export default App;