import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";

//Guardar la cantidad cuando se haga clic al ADD TO CART
const ItemDetail = ({props}) => {
    const {name,price,stock,img,id,detail} = props;
    const [ qtyCart, setQtyCart] =  useState(0); //Estado para guardar la cantidad del ItemCount.

    return(
        <>  
            <div className = "item-product" >
                <h4 className = "title-product"> {name} </h4>
                <img src={`/assets/${img} `} alt={`Imagen : ${img} `} />  
                <p> -ID: {id}   -Stock: {stock}   -AR$ {price}</p>
                <p> -Descripcion: {detail}  </p>
                <p> -Test Carrito*: {qtyCart}  </p>
                {
                    qtyCart > 0 ?
                     <Link to="/cart"> <button > TERMINAR COMPRA </button> </Link> :
                     <ItemCount min = {0} max = {stock} qtyCart = {setQtyCart} />
                }
                
                {/*<ItemCount min = {0} max = {stock} qtyCart = {setQtyCart} />
                 <button > TERMINAR COMPRA </button> */}
            </div> 
            
        </>
    )
}
export default ItemDetail;