import React from "react";

export default function Header(props) {
  return (
    <div className='header'>
      <div className="headertext">
        <h1> {props.name}</h1>
      </div>
    </div>
  )
}


  
