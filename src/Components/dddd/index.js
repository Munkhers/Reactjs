import React from 'react';

// define a function-based component called "ShoppingCart"
function ShoppingCart() {
  // create a state variable called "cart" with an initial value of an empty array
  const [cart, setCart] = React.useState([]);

  // create a function called "addToCart" that adds an item to the cart
  const addToCart = (item) => {
    setCart([...cart, item]);
  }

  // create a function called "removeFromCart" that removes an item from the cart
  const removeFromCart = (item) => {
    setCart(cart.filter((i) => i !== item));
  }

  return (
    <div>
      {/* display the cart items as a list */}
      <ul>
        {cart.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      {/* create buttons to add and remove items from the cart */}
      <button onClick={() => addToCart('apple')}>Add apple to cart</button>
      <button onClick={() => removeFromCart('apple')}>Remove apple from cart</button>
    </div>
  );
}

export default ShoppingCart;