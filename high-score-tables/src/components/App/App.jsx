import "./App.scss";
import "../scores.js";
import allCountryScores from "../scores.js";

function App() {
  return (
    <>
      <h1>HIGH SCORES PER COUNTRY</h1>
      {allCountryScores.map((country, index) => (
        <table>
          <thead>
            <tr>
              <th scope="col" key={index}>
                {country.name}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {country.scores.map((score, index) => (
                <ul scope="col" key={index}>
                  <td>{score.n}</td>
                  <td>{score.s}</td>
                </ul>
              ))}
            </tr>
          </tbody>
        </table>
      ))}
    </>
  );
}

export default App;
