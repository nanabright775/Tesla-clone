import React from 'react';
import { useRecoilState } from 'recoil';
import { cartState } from '../../global-state/CartItems';
import './Cart.css';

function Cart() {
  const [cartItems, setCartItems] = useRecoilState(cartState);
  const handleBuyEverything = () => {
    setCartItems([]);
  };

  function removeFromCart(id) {
    setCartItems((items) => items.filter((cartItems) => cartItems.id !== id));
  }

  const CartList = (
    <>
      <h2>Cart</h2>
      <ul>
        {cartItems.map((items) => (
          <li key={items.id}>
            <div>
              <div> {items.title}</div>
              <div>{items.price}</div>
              <button onClick={() => removeFromCart(items.id)}>
                Remove from Cart
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button onClick={handleBuyEverything}>Buy Everything</button>
    </>
  );

  const NoItemInCart = <div>There are no items in the cart.</div>;

  return (
    <div className="cart-container">
      <div>
        
        {cartItems.length > 0 ? CartList : NoItemInCart}
      </div>
    </div>
  );
}

export default Cart;
