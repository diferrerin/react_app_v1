import {React,useContext } from "react";
import { CartContext } from "../../context/CartContext";


const CartItem = ( { props , qty } ) => {
    const { name,price,id, img } = props;
    const { removeFromCart } = useContext (CartContext)
    return (
        <>
            <div className = "cartItem" >

                <img src={`/assets/${img} `} alt={`Imagen : ${img} `} />  
                <p> -Producto: {name} </p>
                <p> -Cantidad: {qty}   -AR$ unitario: {price}</p>
                <p> -Subtotal: AR$ { price * qty } </p>
                <button onClick={  removeFromCart(id)  }  >ELIMINAR</button>
            </div> 
        </>
    )
}

export default CartItem;