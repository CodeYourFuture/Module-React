import HighScoreTable from "./HighScoreTable";
import allCountryScores from "./data/scores.js";

const App = () => (
  <div className="container">
    <h1 className="heading">High Scores</h1>
    {allCountryScores.map(({ name, scores }, index) => (
      <HighScoreTable country={name} scores={scores} key={index} />
    ))}
  </div>
);

export default App;
