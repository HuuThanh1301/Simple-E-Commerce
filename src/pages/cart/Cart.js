import React, { useContext } from "react";
import { PRODUCTS } from "../../Product";
import { ShopContext } from "../../context/shop-context";
import CartItem from "./CartItem";
import './Cart.css';
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, getSubTotal } = useContext(ShopContext);
  const navigate = useNavigate();
  const filteredProducts = PRODUCTS.filter(
    (product) => cartItems[product.id] !== 0
  );
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {filteredProducts.map((product) => (
          <CartItem key={product.id} data={product} />
        ))}
      </div>
      <div className="checkout">
        <p>Subtotal: ${getSubTotal()}</p>
        <button onClick={() => navigate('/')}>Continue Shopping</button>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
