import React from 'react';
import { useRecoilState } from 'recoil';
import { cartState } from '../../global-state/CartItems';
import './Cart.css';
import toast from 'react-hot-toast';

function Cart() {
  const [cartItems, setCartItems] = useRecoilState(cartState);
  const handleBuyEverything = () => {
    toast.success('succesfully, All items purchase ')
    setCartItems([]);
  };

  function removeFromCart(id) {
    setCartItems((item) => item.filter((cartItems) => cartItems.id !== id));
  }

  const CartList = (
    <>
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <div>
              <div> {item.title}</div>
              <div>{item.price}</div>
              <button onClick={() => removeFromCart(item.id)}>
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
      <div className='cart-wrapper'>
        
        {cartItems.length > 0 ? CartList : NoItemInCart}
      </div>
    </div>
  );
}

export default Cart;
