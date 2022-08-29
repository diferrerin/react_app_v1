import { useContext , useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from "react-router-dom";
//import CartItem from '../CartItem/CartItem'; , totalCart 
import Modal from '../Modal/Modal';
import db from '../../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';


const Cart = ()=>{
    const { cartProducts , removeFromCart, totalCart } = useContext(CartContext); // Hacer el map para mostrar  (, removeFromCart)
    
    const [ showModal , setShowModal ] = useState(false);
    const [ showSuccess , setshowSuccess ] = useState();
        // eslint-disable-next-line
    const [ order, setOrder] = useState(
        {
            items: cartProducts.map( (prod)=>{
                return {  id: prod.id , title: prod.title, price: prod.price  }
            } ) ,
            buyer: {},
            //date: new Date().toLocaleString,
            total: totalCart
        }
    );
    const [ formData, setFormData] = useState({ 
        name: '',
        phone: '',
        email: ''
     });

     const handleChange = (e)=>{

        setFormData( { ...formData , [e.target.name] : e.target.value } ); 
        //console.log("valores input: " , e.target.name);
     }

     const pushData = async(newOrder)=>{
        const collectionOrder = collection ( db, 'ordenes');
        const orderDoc = await addDoc( collectionOrder, newOrder ); // ---------ERROR ACA-------->>> NO genera la orden, revisar
        console.log("ORDEN GENERADA: " , orderDoc);
        setshowSuccess(orderDoc.id);
     }

     const submitData = (e)=>{
        e.preventDefault();
        pushData( {...order, buyer: formData});

     }

    return( 
        <>
        { cartProducts.length === 0 ? 
            (<><p> No hay productos en el carrito. Vuelve al shop. </p>
            <Link to='/'> COMPRAR </Link> </>) :
             (cartProducts.map((product) =>{
                    return(
                        <>
                        <div className='item-checkout-product' key={product.id}>
                            <img src={`/assets/${product.img} `} alt={`Imagen : ${product.img} `} />
                            <h3>{product.name}</h3>
                            <p>{product.detail}</p>
                            <p> -Cantidad: {product.cantidad}   -AR$ unitario: {product.price}</p>
                            <p> -SubTotal: { product.cantidad * product.price}</p>
                            <button onClick={ () => removeFromCart(product.id)  }>ELIMINAR</button>
                        </div>
                        </>
                    )
                } ))
        }
        <div className='total-cart-price'>
            {cartProducts.length!==0 && <p>PRECIO FINAL: ${totalCart}</p>}
        </div>
        <div >
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
                                <input type='email' name='email' placeholder='Ingrese EMail' value={formData.email} onChange={handleChange}/>
                                
                                <button type='submit'>ENVIAR</button>
                            </form>
                        )
                    }

                </Modal>
           
        }
        

    </>

       
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


//CART:
//Mostrar un listado de los productos. Precio Total 
//Agregar Ruta cart al browserRouter
//Mostrar todos los items agregados y agrupados
//Por cada tipo de item, incluye un control para eliminar items
// condicional: de no haber items muestra un mensaje y  un link (reacto router link) para volver al landing(itemDetailContainer)