import React, {useState} from 'react'
// import star from './image/star.png'
// import filledStar from './image/star_filled.png'


const Star = () => {
    
    const [number, setNumber] = useState(0)
    return (
        <div>
            {[...Array(5)].map((item,idx) => {
                return (

                    <span key={idx} onClick={() => {
                        setNumber(idx + 1)

                    }}>{number >= idx + 1 ? '★' : '☆'}</span>
                )
            })}

        </div>
    )
}

export default Star