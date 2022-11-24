import React, { useState } from 'react'

const UseStateDemo = () => {

    const [bootCamp, setBootCamp] = useState({
        studentCount: 13,
        isPartTime: true,
        isFinished: true,
    })
    return (
        <div>
            <pre>{JSON.stringify(bootCamp, null, 2)}</pre>

            {bootCamp.isFinished && <div>Do your homework!</div>}

            <button onClick={() => {
                setBootCamp((currState) => {
                    return {
                        ...currState,
                        isFinished: !currState.isFinished
                    }
                })
            }}
            >
                {bootCamp.isFinished ? 'Finished' : bootCamp.isPartTime ? 'Finish class' : 'Still'}
            </button>
        </div>
    )

}


export default UseStateDemo