import HighScoreTable from "@/components/HighScoreTable/HighScoreTable.jsx";
import scores from "@/data/scores.json";
import "./App.scss";

const App = () => (
  <div className="app">
    <header className="app__header">
      <h1 className="app__heading">High Scores</h1>
    </header>
    {scores.map(({ name, scores }, index) => (
      <HighScoreTable country={name} scores={scores} key={index} />
    ))}
  </div>
);

export default App;
