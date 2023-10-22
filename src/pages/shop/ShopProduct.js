import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

const ShopProduct = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart } = useContext(ShopContext);
  const itemQuantity = cartItems[id];

  return (
    <div className="product">
      <img src={productImage} alt="a product" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>
      <button
        className="addToCartBttn"
        onClick={() => addToCart(id)}
      >{`Add To Cart ${itemQuantity > 0 ? `(${itemQuantity})` : ""}`}</button>
    </div>
  );
};

export default ShopProduct;
