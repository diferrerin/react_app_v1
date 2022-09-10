// Componente para contar Items, controlado por botones +-  (Min: 1 - Max: ItemProduct.Stock)
import "./ItemCount.scss"
import {useState,useContext} from "react"; //Para poder definir estados
import { CartContext } from "../../context/CartContext";

const ItemCount = ({ qtyCart , productData })=>{
    
    const {  addToCart } = useContext (CartContext)//Para usar el contexto de carrito    ,,cartProducts,
    const [ plusCounter , setPlusCounter ] = useState(0); //Estado para CONTAR 
    const {stock} = productData
    const [cantidadItem, setCantidadItem] = useState(1) //Estado para CANTIDAD ITEM 
   
    const addNum = ()=>{ //Agrega Cantidad (ADD PRODUCT)
        if ( stock !== 0) {
            if ( plusCounter < stock ){
                setPlusCounter( plusCounter + 1 );  
                setCantidadItem(plusCounter + 1 );
            }else {
                setPlusCounter( plusCounter );
            }
        } else {
            setPlusCounter( 0 );
        }
        
    }
    const delNum = ()=>{ //Resta Cantidad
        if ( plusCounter > 0){
            setPlusCounter( plusCounter - 1 );
            setCantidadItem(plusCounter - 1 );
        }else {
            setPlusCounter( 0 );
        }
    }
    const onAdd = ()=>{ //pasa al ItemDetail, el valor de cantidad para guardarlo en un estado
        
        qtyCart(plusCounter);
        productData.cantidad = cantidadItem; //Agrega el parametro CANTIDAD ----<<<<
        addToCart(productData);

    }

    return (
       <>
       <div className="item-count">
            <button onClick={delNum}> - </button>
           <p>
                { plusCounter }
           </p>
           <button onClick={addNum}> + </button>
          
        </div>
        <div className="item-count-dos">
            <button onClick={onAdd}> AGREGAR </button>
        </div>
        
        </>
    )
}

export default ItemCount;


