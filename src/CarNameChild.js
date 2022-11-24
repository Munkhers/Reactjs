import React from 'react'


const CarComponent = ({car}) => {
    return (
        <div> 
            {car.owner} bought a {car.carColor} {car.carYear} {car.carBrand}
        </div>
    )
}

export default CarComponent