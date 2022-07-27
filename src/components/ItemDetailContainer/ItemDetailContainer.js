/*
1 Consigna: crea tu componente ItemDetailContainer, con la misma premisa que ItemListContainer.
>>Aspectos a incluir en el entregable:
Al iniciar utilizando un efecto de montaje, debe llamar a un async mock, utilizando lo visto en 
la clase anterior con Promise, que en 2 segundos le devuelva un 1 ítem, y lo guarde en un estado propio.
*/
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
                        console.log(" Item es Igual a 3 seteamos Item", element); //hasta aca funciona ok (falta timeout)
                        setItem(element);
                    }
                  });
                
                //let itemRes = res[nroItem];//Busca el id (revisar si funciona ok o hay que agregar algo)
                //setItem(itemRes); 
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