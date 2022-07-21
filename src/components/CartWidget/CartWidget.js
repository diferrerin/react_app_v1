
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
//import {  fa-cart-shopping } from '@fortawesome/free-solid-svg-icons';

import './CartWidget.scss';

const CartWidget = () => {
  //Pedido en enunciado className="cart-widget" // contador <div className="qty-display">0</div>
  return (
    <div >
            
      <FontAwesomeIcon icon={ faCartShopping } size="1x" color='white'  />

      
    </div>
  );
};

export default CartWidget;