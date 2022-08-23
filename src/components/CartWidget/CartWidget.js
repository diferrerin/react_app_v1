
import { React , useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../../context/CartContext';
import './CartWidget.scss';

const CartWidget = () => {

  const { cartProducts,  contador } = useContext(CartContext);

  return ( //NO FUNCIONA, no muestra el valor de contador.............
    <div >
      <FontAwesomeIcon icon={ faCartShopping } size="1x" color='white'  />
      { cartProducts.length !== 0 && <p> { contador } cont</p> }

    </div>
  );
};

export default CartWidget;

//CARTWIDGET:
//Debe consumir el cart context y mostrar la cantidad de items agregados (iicono mas nro) ---> NO FUNCA
//El cartWidget no se debe mostrar mas si la cantidad de items es cero. (dismount, style,etc) ---> Se agrega pero al no andar el 1 no muestra nada
//Mostrar un boton "terminar Compra" en itemDetail. --> Esta OK