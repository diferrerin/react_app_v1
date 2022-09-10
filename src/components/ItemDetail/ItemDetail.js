import "./ItemDetail.scss";
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
            <div className = "item-detail" >
                <div className = "title-img">
                      <span className = "title-product"> {name} </span>
                      <img src={`/assets/${img} `} alt={`Imagen : ${img} `} /> 
                </div>
                <div className = "item-data">

                        <h5> Cantidad Disponible: </h5>
                        <p>  {stock}   </p>
                        <h5> Precio AR$: </h5>
                        <p>  {price}</p>
                        <h5> Descripcion: </h5>
                        <p>  {detail}  </p>
                        <h5> Identificador del producto: </h5>
                        <p>  {id}  </p>
                        <h5> Cantidad a comprar:  </h5>
                        <p> {qtyCart}  </p>
                        {
                            qtyCart > 0 ?
                            <Link to="/cart" style={{textDecoration: 'none'}} > <button > TERMINAR COMPRA </button> </Link> :
                            <ItemCount  productData = {props}  qtyCart = {setQtyCart} />
                        }
                </div>
                

            </div> 
            
        </>
    )
}
export default ItemDetail;