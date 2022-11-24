import React, { useState } from 'react'


const FireCracker = () => {
    const [fire, setFire] = useState(true)

    return (
        <div>
            
            <div>{fire ? '🧨' : '💥'}</div>
            <button onClick={() => {
                setFire(currState => {
                    return !currState
                })
            }}>Click me!</button>
        </div>
    )
}
export default FireCracker
