import "./ItemListContainer.scss";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import products from "../../utils/product.mock";//Simulamos DB backend

const ItemListContainer = ({section})=>{
    const [ listProducts, setListProducts]= useState( [] );
    //falta ver el reject
    const getProducts = new Promise( (resolve,reject) => {
            setTimeout( ()=>{ resolve(products); } , 2000 );
        }
    );
    //Definimos que sea para el montaje (ciclo de vida)
    useEffect( () => {
        getProducts.then(
            (res)=>{
                setListProducts(res); 
            }
        ).catch(  (errorGet) => {  console.log("fallo la llamada a la lista de productos.")  }    )
    } , [] ); // eslint-disable-line react-hooks/exhaustive-deps
    //Warning React Hook useEffect has a missing dependency: 'getProducts'. Either include it or remove the dependency array
   
    return(
       <div className = "item-list-cont" >
            <div className=" list-products">
                <h3> {section} </h3>
                <ItemList dataProducts={listProducts}/>
            </div>
       </div> 
    )
}

export default ItemListContainer;