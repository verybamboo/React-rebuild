import "./App.css";
import { useEffect, useState } from "react";
import React from "react";

function App() {
  const [characters, setCharacters] = useState(false);
  let index = 0;

  useEffect(() => {
    fetch("https://www.moogleapi.com/api/v1/characters")
      .then((response) => response.json())
      .then((result) => setCharacters(result));
  }, []);

  if (characters === undefined) {
    return <>Still loading...</>;
  }

  return (
    <div className="mainbox">
      <div className="leftSide">
        {characters && <h1>Name: {characters[index].name}</h1>}
        {characters && <p>Description: {characters[index].description}</p>}
      </div>
      <div class="slides">
        <div className="images">
          {characters && (
            <img src={characters[index].pictures[0].url} alt="charImage" />
          )}
        </div>
      </div>
      <div class="rightSide">
        {characters && <h1>Japanese Name: {characters[index].japaneseName}</h1>}
        {characters && <p>Age: {characters[index].age}</p>}
        {characters && <p>Gender: {characters[index].gender}</p>}
        {characters && <p>Height: {characters[index].height}</p>}
        {characters && <p>Job: {characters[index].job}</p>}
        {characters && <p>Origin: {characters[index].origin}</p>}
        {characters && <p>Race: {characters[index].race}</p>}
        {characters && <p>Weight: {characters[index].weight}</p>}
      </div>
    </div>
  );
}

export default App;
