import React from 'react'

const AirBnbComponent = ({house}) => {
    return (
        <div className='container'>
            <img  className='image' src={house.image} alt='house1'/>
            <div className='destination'> <span>{house.destination}</span> <span>{house.rating}</span></div>
            <div className='distance'>{house.howFar} miles away</div>
            <div className='date'>{house.availability}</div>
            <div className='price'>{house.price} night</div>
            
        </div>
    )

}

export default AirBnbComponent