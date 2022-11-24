import React, { useState } from 'react'


const DemoUseState = () => {

    const [ageJamiya, setAgeJamiya] = useState(18)
    const [address, setAddress] = useState('5005 Newport dr')
    console.log(ageJamiya)
    const ageJamiyaFunction = () => {
        console.log('Jamiya is aging up')

        setAgeJamiya((currentState) => {
            return currentState + 1
        })
    }
    return (
        <div>
            <div>Jamiya is {ageJamiya} years old!</div>
            <div>Address : {address} </div>
            <button onClick={ageJamiyaFunction}>Click Me for Jamiya</button>
            <button onClick={() => setAddress('Chicago, IL')}> Change Address!</button>
        </div>
    )
}

export default DemoUseState