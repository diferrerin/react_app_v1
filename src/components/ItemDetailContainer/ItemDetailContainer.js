import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../../utils/product.mock";//Simulamos DB backend
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = ()=>{ //Parametro del Item a mostrar detalle {id}
    const {id} = useParams();  
    const [ item, setItem]= useState( [] ); //setea el estado item
    const getItem = new Promise( (resolve,reject) => { //toma todos los items
             resolve(products); 
        }
    );
    //Definimos que sea para el montaje (ciclo de vida)
    useEffect( () => {
        getItem.then(
            (res)=>{
                res.forEach((element) => {
                    // eslint-disable-next-line eqeqeq
                    if (element.id == id) { 
                        //seteamos el estado con el elemento buscado 
                        //setTimeout( ()=>{ setItem(element); } , 2000 );
                        setItem(element);
                        return console.log("llamada exitosa");
                    }
                    return true;
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