import React, { useState } from 'react'


const BmiTracker = () => {

    const [height, setHeight] = useState(0)
    const [weight, setWeight] = useState(0)
    const [bmi, setBmi] = useState(0)


    const onFormSubmit = (e) => {
        e.preventDefault()
        if (height === 0 && weight === 0) {
            alert('Please insert your height and weight')
        } else {
            setBmi(((weight * 703) / Math.pow(height, 2)).toFixed(1))
        }
    }


    return (
        <>
            <form onSubmit={onFormSubmit}>
                <label>Height:
                    <input type='number'
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                    />
                </label>
                <label>Weight:
                    <input type='number'
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                    />
                </label>
                <button type='submit'
                >Submit</button>

            </form>
            <div>Body Mass Index: {bmi}</div>
        </>
    )
}
export default BmiTracker