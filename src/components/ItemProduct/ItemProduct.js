import "./ItemProduct.scss";
import ItemCount from "../ItemCount/ItemCount";// Para el contador  <ItemCount />
import { Link } from "react-router-dom";

//Para pasar imagen: <img src={`/assets/${img} `} alt="Imagen" />  en boton onClick={action}
const ItemProduct = ({props} , {key})=>{

    const {name,price,stock,img, idItem} = props;//desestructuramos, se puede pasar como parametros en vez de props
    //console.log("ItemProduct.") class="img-fluid rounded thumbnail-image"> <span> $ {price}</span>
    
    //-----Se agrega LINK 01/08/22------ NO FUNCIONA USO KEY Y IDITEM, AMBOS VIENEN UNDEFINED
    return(
        
            <div className = "item-product" >
                    <Link to = {  `/item/${idItem} ` } >
                         <h4 className = "title-product"> {name} </h4>
                         <img src={`/assets/${img} `} alt={`Imagen : ${img} `} sacar={key} />  
                    </Link>
                    <p> Stock: {stock}   AR$ {price}</p>
                    
                    <ItemCount min= {0} max= {stock} className = "count-product" />
                    <button className = "btn-product"> Agregar </button>
            </div> 
       
    )
}

export default ItemProduct;