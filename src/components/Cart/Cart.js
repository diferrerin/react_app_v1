import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const Cart = ()=>{
   const { cartProducts } = useContext(CartContext); // Hacer el map para mostrar
    return(
        <>

             <h2> Cart Checkout</h2>

        </>
    )
}
export default Cart;

//CART:
//Mostrar un listado de los productos. Precio Total 
//Agregar Ruta cart al browserRouter
//Mostrar todos los items agregados y agrupados
//Por cada tipo de item, incluye un control para eliminar items
// condicional: de no haber items muestra un mensaje y  un link (reacto router link) para volver al landing(itemDetailContainer)