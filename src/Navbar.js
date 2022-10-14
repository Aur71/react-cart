import React from 'react';
import { BsFillBagFill } from 'react-icons/bs';
import { useGlobalContext } from './Context';

const Navbar = () => {
  const { amount } = useGlobalContext();
  return (
    <nav>
      <div className="nav-center">
        <h2>Cart</h2>
        <div className="bag-container">
          <BsFillBagFill className="bag" />
          <span className="amount">{amount}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
