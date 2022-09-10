import "./Cart.scss";
import { useContext , useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from "react-router-dom";
//import CartItem from '../CartItem/CartItem'; , totalCart 
import Modal from '../Modal/Modal';
import db from '../../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';


const Cart = ()=>{
    const { cartProducts , removeFromCart, totalCart } = useContext(CartContext); 

    const [ showModal , setShowModal ] = useState(false); //MODAL PARA COMPLETAR DATOS DEL COMPRADOR
    const [ showSuccess , setshowSuccess ] = useState(); //PARA FINALIZAR LA COMPRA OK
    // eslint-disable-next-line
    const [ order, setOrder] = useState(
        { //"title" es "name" en la base de datos armada del producto
            items: cartProducts.map( (prod)=>{
                return {  id: prod.id , name: prod.name, price: prod.price  }
            } ) ,
            buyer: {},
            //date: new Date().toLocaleString,
            total: totalCart
        }
    );
    const [ formData, setFormData] = useState({ 
        name: '',
        phone: 0,
        email: ''
     });

     const handleChange = (e)=>{
        setFormData( { ...formData , [e.target.name] : e.target.value } ); 
  
     }

     const pushData = async(newOrder)=>{
        const collectionOrder = collection ( db, 'ordenes');
        console.log("---ADD DOC--- ", newOrder );
        const orderDoc = await addDoc( collectionOrder, newOrder ); 
        console.log("ORDEN GENERADA: " , orderDoc);
        setshowSuccess(orderDoc.id);
     }

     const submitData = (e)=>{
        e.preventDefault();//CHEQUEAR QUE formData tenga los datos cargados OK
        pushData( { ...order , buyer: formData } );
     }

    return( 
        <div className='main-cart-cont'>
        <div >
            <h2> CARRITO DE COMPRAS</h2>
        </div>
        { cartProducts.length === 0 ? 
            (<><p> No hay productos en el carrito. Vuelve al shop. </p>
            <Link to='/'> COMPRAR </Link> </>) :
             (cartProducts.map((product) =>{
                    return(
                        <>
                        <div className='item-checkout' key={product.id}>
                            <div>
                                <img src={`/assets/${product.img} `} alt={`Imagen : ${product.img} `} />
                                <div className='item-name'>{product.name}</div>
                            </div>
                            

                            <div className='item-info'>
                                <p>{product.detail}</p>
                                <p> -Cantidad: {product.cantidad}   -Precio unitario: {product.price} AR$</p>
                                <p> -SubTotal: { product.cantidad * product.price} AR$</p>
                            </div>
                           
                            <button onClick={ () => removeFromCart(product.id)  }>ELIMINAR</button>
                        </div>
                        </>
                    )
                } ))
        }
        <div className='item-checkout'>
            {cartProducts.length!==0 && <p>PRECIO FINAL: ${totalCart}</p>}
            <button onClick={ ()=> { setShowModal(true) } }> IR A PAGAR </button>
        </div>


        {   //FALTA VALIDAR INFO DEL FORMULARIO Y UNA VEZ GENERADO EL PEDIDO, LIMPIAR LOS ESTADOS!!-------------->>>>>>>>>>>>>>>>>

            showModal &&
                <Modal name = "Datos de Contacto" close = { ()=>{ setShowModal() } }>
                    { 
                        showSuccess ? (
                            <>
                            <h2> Su Orden se generó correctamente. </h2>
                            <p> Id Compra: { showSuccess } </p>
                            </>
                        ):(
                            <form onSubmit={ submitData }>
                                <label >Nombre: </label>
                                <input type='text' name='name' placeholder='Ingrese Nombre'  value={formData.name} onChange={handleChange} />
                                <label >Numero de Telefono: </label>
                                <input type='number' name='phone' placeholder='Ingrese Telefono' value={formData.phone} onChange={handleChange}/>
                                <label >Correo Electronico: </label>
                                <input type='text' name='email' placeholder='Ingrese EMail' value={formData.email} onChange={handleChange}/>
                                
                                <button type='submit'>ENVIAR</button>
                            </form>
                        )
                    }
                </Modal>    
        }
        </div>  
    )
}
export default Cart;
/*
    if (cartProducts.length === 0){
        return(
            <>
                 <p> No hay productos en el carrito. Vuelve al shop. </p>
                 <Link to='/'> COMPRAR </Link>
            </>
        )
    }

 <>
            {
                cartProducts.map ( product => <CartItem key= {product.id} props={product} qty = '00' /> )
            }
            <p> -Total Carrito: AR$ { totalCart } </p>
        </>
*/
