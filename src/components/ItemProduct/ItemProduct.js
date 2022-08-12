import "./ItemProduct.scss";
//import ItemCount from "../ItemCount/ItemCount";// Para el contador  <ItemCount /> //lo usamos en ItemDetail
import { Link } from "react-router-dom";

const ItemProduct = ({props} , {key})=>{
    const {name,price,stock,img,id} = props;//desestructuramos, se puede pasar como parametros en vez de props
    /*
    const addToCart = (evt)=>{
        evt.stopPropagation();

    }*/


    return(
            <div className = "item-product" >
                    <Link to = {  `/item/${id} ` } >
                         <h4 className = "title-product"> {name} </h4>   
                    </Link>
                    <img src={ `/assets/${img} `} alt={`Imagen : ${img} `} sacar={key} />  
                    <p> Stock: {stock}   AR$ {price}</p>
                    
                    {/*<ItemCount min= {0} max= {stock} className = "count-product" />
                        <button onClick={addToCart}> ADD TO CART </button>
                    */}
                    
            </div>  
    )
}

export default ItemProduct;