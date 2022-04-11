import "./App.css";
import { useEffect, useState } from "react";
import React from "react";
import Leftbox from "./Leftbox";
import Image from "./Image";
import Rightbox from "./Rightbox";
import imgLogo from "./img/FFI_logo.png";
import Buttons from "./Buttons";

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
  }

  return (
    <body className="whole">
      <h1>
        <img src={imgLogo} alt="logo" />
      </h1>
      <div className="mainBox">
        <div className="characterBio">
          <div className="box1">
            <Leftbox characters={characters} index={index} />
          </div>
          <div className="box2" id="img">
            <Image characters={characters} index={index} />
          </div>
          <div className="box3">
            <Rightbox characters={characters} index={index} />
          </div>
        </div>
        <div>
          <Buttons
            increment={increment}
            decrement={decrement}
            random={random}
          />
        </div>
      </div>
    </body>
  );
}

export default App;
