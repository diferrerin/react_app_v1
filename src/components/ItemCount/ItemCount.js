// Componente para contar Items, controlado por botones +-  (Min: 1 - Max: ItemProduct.Stock)
import "./ItemCount.scss"
import {useState} from "react"; //Para poder definir estados

const ItemCount = ({min,max,qtyCart})=>{
    const [ plusCounter , setPlusCounter ] = useState(min); //Estado para Contador
    const addNum = ()=>{ //Agrega Cantidad
        if ( max !== 0) {
            if ( plusCounter < max ){
                setPlusCounter( plusCounter + 1 );
            }else {
                setPlusCounter( plusCounter );
            }
        } else {
            setPlusCounter( 0 );
        }
        
    }
    const delNum = ()=>{ //Resta Cantidad
        if ( plusCounter > min){
            setPlusCounter( plusCounter - 1 );
        }else {
            setPlusCounter( 0 );
        }
    }
    const onAdd = ()=>{ //pasa al ItemDetail, el valor de cantidad para guardarlo en un estado
        qtyCart(plusCounter);
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
            <button onClick={onAdd}> ADD TO CART </button>
        </div>
        
        </>
    )
}

export default ItemCount;


