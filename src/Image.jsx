import React from "react";

function Image(props) {
  return (
    <div className="slides">
        {props.characters && (
          <img className="charImage" src={props.characters[props.index].pictures[0].url} alt="charImage" />
        )}
    </div>
  )
}

export default Image