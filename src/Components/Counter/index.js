import React, { useState } from 'react'
// import './style.css';


const Counter = () => {
    const [counter, setCounter] = useState(0)

    const numbers = [1, 10, -1, -10]

    return (
        <div>
            <div>{counter}</div>
            {numbers.map((number, idx) => {
                return <button key={idx} onClick={() => {
                    setCounter(currState => 
                     { return currState += number})
                }}>{number}</button>
            })}
        </div>
    )

    
}



export default Counter