import React from 'react';
import CartItem from './CartItem';
import { useGlobalContext } from './Context';

const CartContainer = () => {
  const { cart, total, clearCart } = useGlobalContext();

  if (cart.length === 0) {
    return (
      <section className="cart-container">
        <h1>Your cart is empty</h1>
      </section>
    );
  }

  return (
    <section className="cart-container">
      <h1>Your bag</h1>
      <div className="cart-items">
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer className="total-container">
        <h3 className="total">Total:</h3>
        <p className="total-amount">${total}</p>
      </footer>
      <button className="clearBtn" onClick={clearCart}>
        Clear cart
      </button>
    </section>
  );
};

export default CartContainer;
