import React from "react"
import App from "./App"

function Leftbox(props) {
  console.log(props)
  return (
    <div className="leftSide">
        {props.characters && <h1>Name: {props.characters[props.index].name}</h1>}
        {props.characters && <p>Description: {props.characters[props.index].description}</p>}
    </div>
  )
}

export default Leftbox