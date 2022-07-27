import { useEffect, useState } from "react";
import products from "../../utils/product.mock";//Simulamos DB backend
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = ({nroItem})=>{ //Parametro del Item a mostrar detalle
    const [ item, setItem]= useState( [] ); //setea el estado item
    const getItem = new Promise( (resolve,reject) => { //toma todos los items
             resolve(products); 
        }
    );
    //Definimos que sea para el montaje (ciclo de vida)
    useEffect( () => {
        getItem.then(
            (res)=>{
                res.forEach(function(element) {// eslint-disable-next-line
                    if (element.id == nroItem) { 
                        console.log(" Item es Igual a 3 seteamos Item", element); 
                        setTimeout( ()=>{ setItem(element); } , 2000 );
                    }
                  });
            }
        ).catch(  (errorGet) => {  console.log("fallo la llamada a la lista de productos.")  }    )
    } , [] ); // eslint-disable-line react-hooks/exhaustive-deps
    return(
        <>
            <div className=" list-products">
                <ItemDetail props={item}/>
            </div>
        </>
    )
}

export default ItemDetailContainer;