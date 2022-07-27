import "./ItemProduct.scss";
import ItemCount from "../ItemCount/ItemCount";// Para el contador  <ItemCount />

//Para pasar imagen: <img src={`/assets/${img} `} alt="Imagen" />  en boton onClick={action}
const ItemProduct = ({props} , {key})=>{


    const {name,price,stock,img} = props;//desestructuramos, se puede pasar como parametros en vez de props
    //console.log("ItemProduct.")
    return(
       <div className = "item-product" >
            <img src={`/assets/${img} `} alt={`Imagen : ${img} `} sacar={key}/>  
            <p> {name} </p>
            <p> Stock: {stock} </p>
            <span> $ {price}</span>
            <ItemCount min= {0} max= {stock} />
            <button > Agregar </button>
       </div> 
    )
}

export default ItemProduct;