import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://botw-compendium.herokuapp.com/api/v2/all")
      .then((resp) => resp.json())
      .then((apiData) => {
        setData(apiData.data);
      });
  }, []);

  return (
    <>
      <div>
        {data &&
          Object.keys(data).map((key) => (
            <div key={key}>
              <h1>{key}</h1>
            </div>
          ))}
      </div>
    </>
  );
}

export default App;
