import React, { useState } from 'react'


const ColorPicker = () => {

    const [firstColor, setFirstColor] = useState('#000000')
    const [secondColor, setSecondColor] = useState('#000000')

    const onFirstColorChange = (e) => {
        setFirstColor(e.target.value)
    }
    const onSecondColorChange = (e) => {
        setSecondColor(e.target.value)
    }

    return (
        <>
            <div style={{ height: '50vh', width: '100vh', backgroundImage: `linear-gradient(${firstColor}, ${secondColor})` }}>{firstColor} {secondColor}</div>
            <label style={{ margin: '10vh' }}>
                Choose top color:
                <input type="color" value={firstColor}
                    style={{ marginTop: '5px' }}
                    onChange={(e) => { onFirstColorChange(e) }}
                />
            </label>
            <label style={{ margin: '10vh' }}>
                Choose bottom color:
                <input type="color" value={secondColor}
                    style={{ marginTop: '5px' }}
                    onChange={(e) => { onSecondColorChange(e) }}
                />
            </label>

        </>
    )
}
export default ColorPicker