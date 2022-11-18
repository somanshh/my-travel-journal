import React from "react"
// import ReactDOM from "react-dom"
import Card from "./Card"
import data from "./data"

export default function App(){
    const array = data.map(item => {
        return (
            <Card 
                {...item}
            />
        )
    })
    return (
        <div>
            {array}
        </div>
    )
}