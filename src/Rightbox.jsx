import React from "react"

function Rightbox(props) {
  return (
    <div className="rightSide">
        {props.characters && <h1>Japanese Name: {props.characters[props.index].japaneseName}</h1>}
        {props.characters && <p>Age: {props.characters[props.index].age}</p>}
        {props.characters && <p>Gender: {props.characters[props.index].gender}</p>}
        {props.characters && <p>Height: {props.characters[props.index].height}</p>}
        {props.characters && <p>Job: {props.characters[props.index].job}</p>}
        {props.characters && <p>Origin: {props.characters[props.index].origin}</p>}
        {props.characters && <p>Race: {props.characters[props.index].race}</p>}
        {props.characters && <p>Weight: {props.characters[props.index].weight}</p>}
    </div>
  )
}

export default Rightbox