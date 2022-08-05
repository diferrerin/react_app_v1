//import "./ItemProduct.scss";
import ItemCount from "../ItemCount/ItemCount";// Para el contador  <ItemCount />
import { Link } from "react-router-dom";

const ItemCategory = ({props} , {key})=>{
    const {name,price,stock,img,id} = props;//desestructuramos, se puede pasar como parametros en vez de props
    
    return(
            <div className = "item-product" >
                    <Link to = {  `/category/${id} ` } >
                         <h4 className = "title-product"> {name} </h4>   
                    </Link>
                    <img src={ `/assets/${img} `} alt={`Imagen : ${img} `} sacar={key} />  
                    <p> Stock: {stock}   AR$ {price}</p>
                    
                    <ItemCount min= {0} max= {stock} className = "count-product" />
                    <button className = "btn-product"> Agregar </button>
            </div>  
    )
}

export default ItemCategory;