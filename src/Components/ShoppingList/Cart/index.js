import React, { useEffect, useState } from 'react'


const ShoppingCart = ({data, handleRemove}) => {
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setTotal((currState) => {data.map((item) => {
            return currState += item.salePrice * item.quantity
        })})
    }, [data])

    return (
        <ul>
            {
                data.map((item, index) => (
                    <li key={index}>
                        name: {item.name}<br/>
                        sku: {item.sku}<br/>
                        quantity: {item.quantity}
                        <button onClick={() => {handleRemove(item)}}>Remove from cart</button>
                    </li>
                ))
            }
            <li>
                Total: ${total}
            </li>
        </ul>
    )

}
export default ShoppingCart