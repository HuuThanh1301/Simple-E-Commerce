import { createContext, useState } from "react";
import { PRODUCTS } from "../Product";

export const ShopContext = createContext();

const getDefaultCart = () => {
  const cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  let sum = 0;

  const getSubTotal = () => {
    PRODUCTS.forEach((product) => {
      if (cartItems[product.id] > 0) {
        sum = sum + product.price * cartItems[product.id];
      }
    });
    console.log(sum);
    return sum;
  };

  const updateCart = (val, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: val }));
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const contextValue = { cartItems, addToCart, removeFromCart, getSubTotal, updateCart };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
