import React from "react";
import { PRODUCTS } from "../../Product";
import ShopProduct from "./ShopProduct";
import './Shop.css';

const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Lazada Rep 1:1</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <ShopProduct key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
