import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../../utils/product.mock";//Simulamos DB backend
import ItemCategoryList from "../ItemCategoryList/ItemCategoryList";

const ItemCategoryCont = ()=>{ //Parametro del Item a listar {category}
    const {category} = useParams();  
    const [ items, setItems]= useState( [] ); //setea el estado item
    const getItems = new Promise( (resolve,reject) => { //toma todos los items
             resolve(products); 
        }
    );
    const filtraItems =  ( listaCompleta ) => {//Probamos el filter
        let listaCategoria = listaCompleta.filter((item) => { return item.category === category  });
        console.log(listaCategoria);
        return listaCategoria;
     };

    //Definimos que sea para el montaje (ciclo de vida)
    useEffect( () => {
        getItems.then(
            (res)=>{
                setItems( filtraItems(res) );
            }
        ).catch(  (errorGet) => {  console.log("fallo la llamada a la lista de productos.")  }    )
    } , [] ); // eslint-disable-line react-hooks/exhaustive-deps
    return(
        <>
            <div className=" list-products">
                <ItemCategoryList itemCat={items}/>
            </div>
        </>
    )
}
export default ItemCategoryCont;