import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [starShips, setStarShips] = useState(null);

  const baseUrl = "https://www.swapi.tech/api/starships";

  async function handleFetch() {
    try {
      const res = await axios.get(baseUrl);
      let data = res.data.results;
      setStarShips(data);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <button onClick={handleFetch}>Get StarShips</button>
      {starShips && (
        <div>
          <h2>StarShips:</h2>
          <ul>
            {starShips.map((starship) => (
              <li key={starship.name}>{starship.name}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default App;
