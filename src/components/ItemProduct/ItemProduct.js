import "./ItemProduct.scss";
//import ItemCount from "../ItemCount/ItemCount";// Para el contador  <ItemCount /> //lo usamos en ItemDetail
import { Link } from "react-router-dom";

const ItemProduct = ({props} , {key})=>{
    const {name,price,stock,img,id} = props;//desestructuramos, se puede pasar como parametros en vez de props

    return(
            <div className = "item-product" >
                    <Link to = {  `/item/${id} ` } >
                         <h4 className = "title-product"> {name} </h4>   
                    </Link>
                    <img src={ `/assets/${img} `} alt={`Imagen : ${img} `} sacar={key} />  
                    <p> Stock: {stock}   AR$ {price}</p>
            </div>  
    )
}

export default ItemProduct;