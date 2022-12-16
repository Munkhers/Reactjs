import React, { useEffect, useState, useReducer } from 'react'
import axios from 'axios'
import Product from '../Product'
import ShoppingCart from '../Cart'
import '../Product/style.css';

const reduceCart = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            // let tempData = [...state];
            // let isFound = false;
            // tempData.map((item, index) => {
            //     if(item.sku === action.sku) {
            //         tempData[index].quantity = tempData[index].quantity + 1;
            //         isFound = true;
            //     }
            // })

            // if(isFound) {
            //     return tempData;
            // } else {
            //     return [...state, {...action, quantity: 1}]
            // }
            return state.map((item) => {
                if( item.sku === action.sku) {

                }
            })
        case "REMOVE_FROM_CART":
            return state.filter((item) => {
                return item.sku !== action.sku
            });
        default:
            return state;
    }
};

const ShoppingList = () => {
    const [productData, setProductData] = useState([])
    const [cart, updateCart] = useReducer(reduceCart, []);

    const fetchProductData = () => {
        axios
            .get('https://api.bestbuy.com/v1/products?format=json&show=onlineAvailability,sku,productId,name,type,regularPrice,salePrice,onSale,url,categoryPath,customerReviewAverage,customerReviewCount,department,largeImage,plot,genre,albumTitle,releaseDate&apiKey=j7RQXCsGGeSc5GaXv0slAOAm')
            .then(res => setProductData(res.data.products))
    }
    useEffect(() => {
        fetchProductData()
    }, [])

    const addToCart = (product) => {
        updateCart({type: "ADD_TO_CART", data: product});
    }

    const removeFromCart = (product) => {
        updateCart({type: "REMOVE_FROM_CART", data: product});
    }

    return (
        <div style={{display: "flex"}}>
            <div className={'list-container'}>
                {productData.map((movie, movieIdx) => {
                    return <div key={movieIdx}><Product movie={movie} handleAdd={(item) => {addToCart(item)}}/></div>
                })}
            </div>
            <div className='cart-container'>
                {cart.length === 0 ? <h3>Your cart is empty!</h3> : <ShoppingCart data={cart} handleRemove={(item) => {removeFromCart(item)}}/>}
            </div>
        </div>
    )
}
export default ShoppingList