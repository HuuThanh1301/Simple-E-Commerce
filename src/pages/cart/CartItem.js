import React, { useContext} from 'react'
import { ShopContext } from '../../context/shop-context';
const CartItem = (props) => {
  const { id, productName, productImage, price } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCart } = useContext(ShopContext);
  
  return (
    <div className='cartItem'>
      <img src={productImage} alt='a product'/>
      <div className='description'>
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
        <div className='countHandler'>
          <button onClick={() => removeFromCart(id)}> - </button>
          <input value={cartItems[id]} onChange={(e) => updateCart(Number(e.target.value), id)}/>
          <button onClick={() => addToCart(id)} > + </button>
        </div>
      </div>
    </div>
  )
}

export default CartItem