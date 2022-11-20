import React from "react"
import img from "./images/location-icon.jpg"
// import ReactDOM from "react-dom"

export default function Card(props){
    return(
        <div className="card--component">
            <img className="main--images" src={props.imageUrl} alt = "Main img"/>
            <div className="main--content" >
                <div className="location--div">
                    <img className = "location--icon" src={img} alt=""/>
                    <p className="location--text">{props.location} </p>
                    <p className="gMap--text">View on Google Maps</p>
                </div>
                <h1>{props.title}</h1>
                {}
                <h4>{props.startDate} - {props.endDate}</h4>
                <p>{props.description}</p>
            </div>
        </div>
    )
}