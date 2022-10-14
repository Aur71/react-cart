import React from 'react';
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';
import { useGlobalContext } from './Context';

const CartItem = ({ id, img, title, price, amount }) => {
  const { remove, increase, decrease } = useGlobalContext();

  return (
    <article className="cart-item">
      <picture className="photo-container">
        <img src={img} alt={title} />
      </picture>

      <div className="item-info">
        <h4>{title}</h4>
        <h5>$ {price}</h5>
        <button onClick={() => remove(id)}>remove</button>
      </div>

      <div className="item-amount">
        <AiOutlineArrowUp className="arrow" onClick={() => increase(id)} />
        <h3>{amount}</h3>
        <AiOutlineArrowDown className="arrow" onClick={() => decrease(id)} />
      </div>
    </article>
  );
};

export default CartItem;
