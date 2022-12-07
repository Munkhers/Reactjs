import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Product from '../Product'

const ShoppingList = () => {
    const [productDetails, setProductDetails] = useState([])

    const fetchProductDetails = () => {
        axios
            .get('https://api.bestbuy.com/v1/products?format=json&show=sku,productId,name,type,regularPrice,salePrice,onSale,url,categoryPath,customerReviewAverage,customerReviewCount,department,largeImage,plot,genre,albumTitle,releaseDate&apiKey=j7RQXCsGGeSc5GaXv0slAOAm')
            .then(res => setProductDetails(res.data.products))
    }
    useEffect(() => {
        fetchProductDetails()
    }, [])

    return (
        <div>
            <pre>{JSON.stringify(productDetails, null, 2)}</pre>

            {productDetails.map((movie, movieIdx) => {
                return <div key={movieIdx}><Product movie={movie} /></div>
            })}
        </div>
    )
}
export default ShoppingList