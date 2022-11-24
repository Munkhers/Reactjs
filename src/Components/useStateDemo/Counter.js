import React, { useState } from 'react'


const Counter = () => {
    const [counter, setCounter] = useState(0)

    const numbers = [1, 10, -1, -10]

    return (
        <div>
            <div>{counter}</div>
            {numbers.map(number => {
                return (
                    <button onClick={() => {
                        setCounter(currState => currState + number
                        )
                    }}>{number}</button>
                )
            })}
        </div>
    )
}

export default Counter