import React from 'react'

const Product = ({ movie, handleAdd }) => {
    return (
        <>
            <div className='product-container'>
                <div className='image-container'>
                    <img src={movie.largeImage} alt='' className='product-image' />
                </div>

                <div className='info-container'>
                    <a href={movie.url}>{movie.name}</a><br />
                    <div style={{ display: "inline-flex", marginTop: 12 }}>
                        <div><strong>SKU:</strong> {movie.sku}</div>
                        <div style={{ marginLeft: 20 }}><strong>Release Date:</strong> {movie.releaseDate}</div>
                    </div>
                    {/* <div>{movie.plot}</div> */}
                </div>
                <div className='action-container'>
                    <div style={{ fontSize: 22, fontWeight: "bold", marginBottom: 10 }}>${movie.salePrice}</div>
                    {
                        movie.onlineAvailability ?
                            <button className='add-to-cart' onClick={() => {handleAdd(movie);}}>Add to Cart</button> 
                            :
                            <button className='add-to-cart sold-out'>Sold out</button>
                    }
                </div>
            </div>
        </>
    )

}
export default Product