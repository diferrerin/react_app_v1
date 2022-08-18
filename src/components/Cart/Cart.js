import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from "react-router-dom";
import CartItem from '../CartItem/CartItem';

const Cart = ()=>{
   const { cartProducts, totalCart } = useContext(CartContext); // Hacer el map para mostrar

    if (cartProducts.length === 0){
        return(
            <>
                 <p> No hay productos en el carrito. Vuelve al shop. </p>
                 <Link to='/'> COMPRAR </Link>
            </>
        )
    }

    return( //COMO PASAR LA CANTIDAD INDIVIDUAL DE CADA PRODUCTO..... qty={}
        <>
            {
                cartProducts.map ( product => <CartItem key= {product.id} props={product}  /> )
            }
            <p> -Total Carrito: AR$ { totalCart } </p>
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