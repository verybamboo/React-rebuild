import "./App.css";
import { useEffect, useState } from "react";
import React from "react";
import Leftbox from "./Leftbox";
import Image from "./Image";
import Rightbox from "./Rightbox";
import clearLeft64 from "./img/clearleft64.png";
import clearRight64 from "./img/clearright64.png";
import randomButton from "./img/random642.png";
import imgLogo from "./img/FFI_logo.png";
import bgGif from "./img/ffbggif.gif";

function App(props) {
  const [characters, setCharacters] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch("https://www.moogleapi.com/api/v1/characters")
      .then((response) => response.json())
      .then((result) => setCharacters(result));
  }, []);

  if (characters === undefined) {
    return <>Still loading...</>;
  }

  function increment() {
    if (index >= characters.length - 1) {
      setIndex(0);
    } else {
      setIndex((index) => index + 1);
    }
  }

  function decrement() {
    if (index <= 0) {
      setIndex(characters.length - 1);
    } else {
      setIndex((index) => index - 1);
    }
  }

  function random() {
    setIndex(Math.floor(Math.random() * characters.length));
    console.log(index);
  }

  return (
    <body className="whole">
      <h1>
        <img src={imgLogo} alt="logo" />
      </h1>
      <div className="mainBox">
        <div className="characterBio">
          <div className="box">
            <Leftbox characters={characters} index={index} />
          </div>
          <div className="box" id="img">
            <Image characters={characters} index={index} />
          </div>
          <div className="box">
            <Rightbox characters={characters} index={index} />
          </div>
        </div>
        <div className="buttons">
          <button className="leftButton" onClick={decrement}>
            <img src={clearLeft64} alt="leftarrow" />
          </button>
          <button className="randomButton" onClick={random}>
            <img src={randomButton} alt="random" />
          </button>
          <button className="rightButton" onClick={increment}>
            <img src={clearRight64} alt="rightarrow" />
          </button>
        </div>
      </div>
    </body>
  );
}

export default App;
