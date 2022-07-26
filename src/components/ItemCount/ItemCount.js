// Componente para contar Items, controlado por botones +-  (Min: 1 - Max: ItemProduct.Stock)
import "./ItemCount.scss"
import {useState} from "react"; //Para poder definir estados

const ItemCount = ({min,max})=>{
    const [ plusCounter , setPlusCounter ] = useState(min); //Estado para Contador
    const addNum = ()=>{
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
    const delNum = ()=>{
        if ( plusCounter > min){
            setPlusCounter( plusCounter - 1 );
        }else {
            setPlusCounter( 0 );
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


