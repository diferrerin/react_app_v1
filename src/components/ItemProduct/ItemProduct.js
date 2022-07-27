import "./ItemProduct.scss";
import ItemCount from "../ItemCount/ItemCount";// Para el contador  <ItemCount />

//Para pasar imagen: <img src={`/assets/${img} `} alt="Imagen" />  en boton onClick={action}
const ItemProduct = ({props} , {key})=>{

    const {name,price,stock,img} = props;//desestructuramos, se puede pasar como parametros en vez de props
    //console.log("ItemProduct.") class="img-fluid rounded thumbnail-image"> <span> $ {price}</span>
    return(
       <div className = "item-product" >
            <h4 className = "title-product"> {name} </h4>
            <img src={`/assets/${img} `} alt={`Imagen : ${img} `} sacar={key} />  
            
            <p> Stock: {stock}   AR$ {price}</p>
            
            <ItemCount min= {0} max= {stock} className = "count-product" />
            <button className = "btn-product"> Agregar </button>
       </div> 
    )
}

export default ItemProduct;