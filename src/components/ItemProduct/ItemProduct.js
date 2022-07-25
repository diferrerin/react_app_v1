import "./ItemProduct.scss";
import ItemCount from "../ItemCount/ItemCount";// Para el contador  <ItemCount />

//Para pasar imagen: <img src={`/assets/${image} `} alt="Imagen" />
const ItemProduct = (props , action)=>{
    const {name,price,stock} = props;//desestructuramos, se puede pasar como parametros en vez de props

    return(
       <div className = "item-product" >
            <img src="" alt="Imagen Prod A" />  
            <p> {name} </p>
            <p> Stock: {stock} </p>
            <span> $ {price}</span>
            <ItemCount min= {0} max= {stock} />
            <button onClick={action}> Agregar </button>
       </div> 
    )
}

export default ItemProduct