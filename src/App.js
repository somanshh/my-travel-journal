import React from "react"
// import ReactDOM from "react-dom"
import Card from "./Card"
import data from "./data"
import Nav from "./Navbar"

export default function App(){
    const array = data.map(props => {
        return (
            <>
                <Card 
                    {...props}
                />
            </>
        )
    })
    return (
        <div>
            <Nav />
            {array}
        </div>
    )
}