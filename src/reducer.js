import React from 'react';

const reducer = (state, action) => {
  if (action.type === 'CLEAR_CART') {
    return { ...state, cart: [] };
  }

  if (action.type === 'REMOVE') {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
    };
  }

  if (action.type === 'INCREASE') {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload) {
        return { ...cartItem, amount: cartItem.amount + 1 };
      }
      return cartItem;
    });

    return { ...state, cart: tempCart };
  }

  if (action.type === 'DECREASE') {
    let tempCart = state.cart
      .map((cartItem) => {
        if (cartItem.id === action.payload) {
          return { ...cartItem, amount: cartItem.amount - 1 };
        }

        return cartItem;
      })
      .filter((cartItem) => cartItem.amount >= 1);

    return { ...state, cart: tempCart };
  }

  if (action.type === 'TOTALS') {
    let finalAmount = 0;
    let finalPrice = 0;

    state.cart.map((cartItem) => {
      finalAmount += cartItem.amount;
      const itemPrice = cartItem.price * cartItem.amount;
      finalPrice += itemPrice;
    });

    return { ...state, amount: finalAmount, total: finalPrice.toFixed(2) };
  }

  return state;
};

export default reducer;
