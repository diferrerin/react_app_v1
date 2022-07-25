import "./ItemListContainer.scss";
import ItemProduct from "../ItemProduct/ItemProduct";

const ItemListContainer = ()=>{
   //Mejora posible: Se puede generar una lista de objetos Item y mandarla. Tambien cargar desde JSon/o base de datos firebase.
    return(
       <div className = "item-list-cont" >
            
            <div className=" list-products">
                <ItemProduct name="Camisa Sport" price={15000} stock= {25}/>
                <ItemProduct name="Remera lisa" price= {5000} stock= {15}/>
                <ItemProduct name="Chomba" price= {7000} stock= {0} />
            </div>
            

       </div> 
    )
}

export default ItemListContainer