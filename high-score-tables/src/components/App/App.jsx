import "./App.scss";
import "../scores.js";
import allCountryScores from "../scores.js";

function byName(a, b) {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
}

function App() {
  allCountryScores.sort(byName);
  return (
    <>
      <h1>HIGH SCORES PER COUNTRY</h1>
      {allCountryScores.map((country, index) => (
        <table
          style={{
            border: "1px solid black",
            borderSpacing: "10px",
            width: "100%",
          }}
        >
          <thead>
            <tr>
              <th scope="col" style={{ border: "2px solid red" }} key={index}>
                {country.name}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <ul style={{ borderBottom: "2px solid blue" }} scope="col">
                <td style={{ padding: "1px" }}>player</td>
                <td style={{ paddingLeft: "40px" }}>score</td>
              </ul>
            </tr>
          </tbody>
          <tbody>
            <tr>
              {country.scores.map((score, index) => (
                <ul
                  style={{ borderBottom: "1px solid red" }}
                  scope="col"
                  key={index}
                >
                  <td style={{ marginRight: "1px" }}>{score.n}</td>
                  <td style={{ marginLeft: "90px" }}>{score.s}</td>
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
