import React from "react";
import moogleLeft from "./img/mooglepointingleft.png";
import moogleRight from "./img/mooglepointingright.png";
import randomButton from "./img/shuffleicon.png";

function Buttons(props) {
  return (
    <div className="buttons">
          <button className="leftButton" onClick={props.decrement}>
            <img src={moogleLeft} className="buttonImg" alt="leftarrow" />
          </button>
          <button className="randomButton" onClick={props.random}>
            <img src={randomButton} className="buttonImg" alt="random" />
          </button>
          <button className="rightButton" onClick={props.increment}>
            <img src={moogleRight} className="buttonImg" alt="rightarrow" />
          </button>
        </div>
  )
}

export default Buttons