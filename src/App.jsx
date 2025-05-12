import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [starShips, setStarShips] = useState(null);
  const [loading, setLoading] = useState(false);

  const baseUrl = "https://www.swapi.tech/api/starships";

  async function handleFetch() {
    setLoading(true);
    try {
      const res = await axios.get(baseUrl);
      let data = res.data.results;
      setStarShips(data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  }

  if (loading) {
    return <div>Loading...</div>;
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
