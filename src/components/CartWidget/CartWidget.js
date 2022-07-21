
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import {  fa-cart-shopping } from '@fortawesome/free-solid-svg-icons';

import './CartWidget.scss';

const CartWidget = () => {
  //Pedido en enunciado
  return (
    <div className="cart-widget">
      {/*  FontAwesome para React JS. No anda size="2x" */}
      <FontAwesomeIcon icon=" fa-cart-shopping"    />
      
      <div className="qty-display">0</div>
    </div>
  );
};

export default CartWidget;