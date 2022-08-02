import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../../utils/product.mock";//Simulamos DB backend
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = ()=>{ //Parametro del Item a mostrar detalle {nroItem}
 //----------------------------------------------------------------------------------------------------------
    console.log("useParam : ", useParams()) // FUNCIONA....... 
    console.log("useParam 2 : ", useParams().itemId) 
    const {category , valorId} = useParams();          //NO FUNCIONA....... NO TRAE EL PARAMETRO :ID
    const itemId = valorId * 1; // parseInt(valorId , 10); //no funciona muestra valor NaN----------------------
    console.log("useParam 3: ", itemId ,"categoria: ", category)     //NO FUNCIONA....... NO TRAE EL PARAMETRO :ID
//----------------------------------------------------------------------------------------------------------
    const [ item, setItem]= useState( [] ); //setea el estado item
    const getItem = new Promise( (resolve,reject) => { //toma todos los items
             resolve(products); 
        }
    );
    //Definimos que sea para el montaje (ciclo de vida)
    useEffect( () => {
        getItem.then(
            (res)=>{
                res.forEach(function(element) {// eslint-disable-next-line eqeqeq
                    if (element.id == itemId) { 
                        //seteamos el estado con el elemento buscado 
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