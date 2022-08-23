import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import products from "../../utils/product.mock";//Simulamos DB backend
import ItemDetail from "../ItemDetail/ItemDetail";
import db from "../../firebaseConfig";
import { doc , getDocs } from "firebase/firestore";

const ItemDetailContainer = ()=>{ //Parametro del Item a mostrar detalle {id}
    const {id} = useParams(); 
    const [ item, setItem]= useState( [] ); //setea el estado item
//NO FUNCA-------------------------------------------------------------<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
   //ARMADO COMO EN CLASE; no trae data
    useEffect( () => {
        getProduct().then( (res)=>{
            setItem(res);
        }
        )
    } , [id] ); // eslint-disable-line react-hooks/exhaustive-deps
    
    const getProduct = async () => {//metodo con FIREBASE FIRESTORE
        const docRef = doc( db, 'productos', id); //documento que necesitamos
        
        const docSnapshot = await getDocs(docRef); //ESTO NO TRAE INFO: Uncaught (in promise) FirebaseError: Expected type 'Va', but it was: a custom va object
        
        let prod = docSnapshot.data();
        prod.id = docSnapshot.id;
        console.log ("Firebase prod: ", prod);// NO FUNCIONA 
        return prod;
    }
    
//NO FUNCA-------------------------------------------------------------<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    return(
        <>
            <div className=" list-products">
                <ItemDetail props={item}/>
            </div>
        </>
    )
}
export default ItemDetailContainer;

/*
//CON MOCK VERSION ANTERIOR:
 const getItem = new Promise( (resolve,reject) => { //toma todos los items
             resolve(products); 
        }
    );

        useEffect( () => {
        getItem.then(
            (res)=>{
                res.forEach((element) => {
                    // eslint-disable-next-line eqeqeq
                    if (element.id == id) { 
                        //seteamos el estado con el elemento buscado //setTimeout( ()=>{ setItem(element); } , 2000 );
                        setItem(element);
                        return console.log("llamada exitosa");
                    }
                    return true;
                  });
            }
        ).catch(  (errorGet) => {  console.log("fallo la llamada a la lista de productos.")  }    )
    } , [id] ); // eslint-disable-line react-hooks/exhaustive-deps
*/