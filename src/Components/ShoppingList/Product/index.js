import React from 'react' 

const Product = ({movie}) => {
    return (
        <div>
            <img src={movie.largeImage} height={300} alt=''/>
            {movie.name}
        </div>
    )

}
export default Product