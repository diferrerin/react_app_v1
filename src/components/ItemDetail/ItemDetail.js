import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";

//Guardar la cantidad cuando se haga clic al ADD TO CART
const ItemDetail = ({props}) => {
    
    const {name,price,stock,img,id,detail} = props; //Propiedades que vienen de ItemDetailContainer

    const [ qtyCart, setQtyCart] =  useState(0); //Estado para guardar la CANTIDAD del ItemCount.
    //Ver ItemCount itemAdd props linea 21
    return(
        <>  
            <div className = "item-product" >
                <h4 className = "title-product"> {name} </h4>
                <img src={`/assets/${img} `} alt={`Imagen : ${img} `} />  
                <p> -ID: {id}   -Stock: {stock}   -AR$ {price}</p>
                <p> -Descripcion: {detail}  </p>
                <p> -Cantidad: {qtyCart}  </p>
                {
                    qtyCart > 0 ?
                     <Link to="/cart" style={{textDecoration: 'none'}} > <button > TERMINAR COMPRA </button> </Link> :
                     <ItemCount  productData = {props}  qtyCart = {setQtyCart} />
                }
            </div> 
            
        </>
    )
}
export default ItemDetail;