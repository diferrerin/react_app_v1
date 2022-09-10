import "./ItemListContainer.scss";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
//import products from "../../utils/product.mock";//Simulamos DB backend. Reemplazado por firestore
import { collection , getDocs } from "firebase/firestore";
import db from "../../firebaseConfig"

const ItemListContainer = ({section})=>{
    const [ listProducts, setListProducts]= useState( [] );
    
    const getProducts = async () =>{
        const productCollection = collection(db, 'productos'); //conexion a la coleccion de productos en la base Firestore
        //Pedir los documentos de esa coleccion.
        const productSnapshot = await getDocs(productCollection);
        

        const productList = productSnapshot.docs.map ( 
            ( doc ) => { 
                let prod = doc.data(); 
                prod.id = doc.id;
                //console.log ("Firebase prod: ", prod);//FUNCIONA OK
                return prod;
            }
        )
        return productList; 
    }

    //Definimos que sea para el montaje (ciclo de vida)
    useEffect( () => {
                getProducts().then( (res) =>{
                    setListProducts(res);
                }
            )
    } , [] ); 
  
    return(
       <div >
            <h2> Productos </h2>
            <div >
                <h3> {section} </h3>
                <ItemList dataProducts={listProducts}/>
            </div>
       </div> 
    )      
}

export default ItemListContainer;

/* //VERSION CON MOCK:
    //promesa (reemplazado por firestore)
    const getProducts = new Promise( (resolve,reject) => {//falta ver el reject
            setTimeout( ()=>{ resolve(products); } , 2000 );
        }
    );

    useEffect( () => {
        getProducts.then(
            (res)=>{

                setListProducts(res); 
                
            }
        ).catch(  (errorGet) => {  console.log("fallo la llamada a la lista de productos.")  }    )
    } , [] ); 

*/