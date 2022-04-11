import React from "react";
import missingPic from "./img/imageavailable.png"

function Image(props) {
  const theImage = props.characters && props.characters[props.index].pictures[0]
    ? props.characters[props.index].pictures[0].url
    : missingPic

  return (
    <div className="slides">
    {props.characters && (
      <img className="charImage" src={theImage} alt="charImage" />
    )}
    </div>
  )
}

export default Image