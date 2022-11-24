import React, { useState } from 'react'
import './index.css'

import starFilled from './image/star_filled.png'
import starUnfilled from './image/star.png'

// ★☆

const StarRating = () => {
    const [star, setStar] = useState(0)
    const numbers = [1, 2, 3, 4, 5]
    return (
        <div className='star-rating'>
            {numbers.map((number, idx) => {
                return (
                    <img className='star-image' key={idx} src={star >= number ? starFilled : starUnfilled} height={50} alt='star'
                        onClick={() => { setStar(number) }} />
                )
            })
            }
        </div>
    )
}
export default StarRating