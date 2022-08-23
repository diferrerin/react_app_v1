import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from "react-router-dom";
//import CartItem from '../CartItem/CartItem'; , totalCart 

const Cart = ()=>{
    const { cartProducts , removeFromCart, totalCart } = useContext(CartContext); // Hacer el map para mostrar  (, removeFromCart)


    return( 

        <>
        { cartProducts.length === 0 ? 
            (<><p> No hay productos en el carrito. Vuelve al shop. </p>
            <Link to='/'> COMPRAR </Link> </>) :
             (cartProducts.map((product) =>{
                    return(
                        <>
                        <div className='item-checkout-product' key={product.id}>
                            <img src={`/assets/${product.img} `} alt={`Imagen : ${product.img} `} />
                            <h3>{product.name}</h3>
                            <p>{product.detail}</p>
                            <p> -Cantidad: {product.cantidad}   -AR$ unitario: {product.price}</p>
                            <p> -SubTotal: { product.cantidad * product.price}</p>
                            <button onClick={ () => removeFromCart(product.id)  }>ELIMINAR</button>
                        </div>
                        </>
                    )
                } ))
        }
        <div className='total-cart-price'>
            {cartProducts.length!==0 && <p>PRECIO FINAL: ${totalCart}</p>}
        </div>

    </>

       
    )
}
export default Cart;
/*
    if (cartProducts.length === 0){
        return(
            <>
                 <p> No hay productos en el carrito. Vuelve al shop. </p>
                 <Link to='/'> COMPRAR </Link>
            </>
        )
    }

 <>
            {
                cartProducts.map ( product => <CartItem key= {product.id} props={product} qty = '00' /> )
            }
            <p> -Total Carrito: AR$ { totalCart } </p>
        </>
*/


//CART:
//Mostrar un listado de los productos. Precio Total 
//Agregar Ruta cart al browserRouter
//Mostrar todos los items agregados y agrupados
//Por cada tipo de item, incluye un control para eliminar items
// condicional: de no haber items muestra un mensaje y  un link (reacto router link) para volver al landing(itemDetailContainer)