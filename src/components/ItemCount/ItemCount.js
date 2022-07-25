// Componente para contar Items, controlado por botones +-  (Min: 1 - Max: ItemProduct.Stock)
    //Mejora: Falta chequear que si el stock es 0 no muestre 1, y ponga cartel de "sin stock"
import "./ItemCount.scss"
import {useState} from "react"; //Para poder definir estados

const ItemCount = ({min,max})=>{
    const [ plusCounter , setPlusCounter ] = useState(1); //Estado para Contador
    const addNum = ()=>{
        if ( plusCounter < max ){
            setPlusCounter( plusCounter + 1 );
        }else {
            setPlusCounter( plusCounter );
        }
        
    }
    const delNum = ()=>{
        if ( plusCounter > min){
            setPlusCounter( plusCounter - 1 );
        }else {
            setPlusCounter( 1 );
        }
    }
    return (
       
       <div className="item-count">
            <button onClick={delNum}> - </button>
           <p>
                { plusCounter }
           </p>
           <button onClick={addNum}> + </button>

        </div>
    )
}

export default ItemCount;


