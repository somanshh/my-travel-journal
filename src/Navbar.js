import React from "react";
import img from "./images/globe.png"

export default function Nav(){
    return(
        <nav class="navbar">
          <img className="globe" src={img} alt=""/>
          <h3>my travel journal.</h3>
      </nav>
    )
}