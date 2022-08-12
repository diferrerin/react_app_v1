import { createContext , useState} from "react";
//Contexto para el carrito de compra.
const CartContext = createContext(); //Define el contexto

const CartProvider = ({children})=>{ //provee la info del contexto.
    const [cartProducts, setCartProducts] = useState([]); //array vacio para productos
    const [contador, setContador] = useState(0);
    const [totalCart, setTotalCart] = useState(0);
    //funciones:
    const addToCart = (product) => {
        const isInCart = cartProducts.find( //chequea si el producto ya está en el carrito, para sumar la cantidad sin agregar duplicado
            (productInCart) => productInCart.id === product.id 
        );
        if (isInCart){ //si es true, se encuentra en el carrito
            const newArray = cartProducts.map(
                (productInCart)=>{
                    if (productInCart.id === product.id ){ 
                        return {
                            ...productInCart,
                            cantidad: productInCart.cantidad + product.cantidad
                        };
                    }else {
                        return productInCart;//Deja el producto
                    }
                }
            );
            setCartProducts(newArray); //setea el nuevo carrito con cantidad modificada
        }else{//si es false, no se encuentra el producto en el carrito
            setCartProducts( [...cartProducts, product] );//agrega el producto nuevo al carrito
        }
        setContador( contador + product.cantidad );
        setTotalCart( // igual a lo que estaba mas el producto nuevo (cantidad * precio)
            totalCart + parseInt(product.cantidad) * parseFloat(product.price) // .slice(2)
        );
    };

    const clearCart = ()=>{ //limpia el carrito de productos
        setCartProducts([]);
        setContador(0);
        setTotalCart(0);
    };

    const removeFromCart = (id) => { //chequear si prod tiene info
        const prod = cartProducts.find ( (product) => product.id === id );
        setTotalCart(
            totalCart - parseInt(prod.cantidad) * (prod.price)
        );
        setContador(contador - prod.cantidad);
        setCartProducts( cartProducts.filter( (product) => product.id !== id )  );

    };

    const data = { //objeto para pasar en value
        cartProducts, setCartProducts, addToCart, removeFromCart, clearCart
    }

    return ( //con value pasamos los estados y funciones a usar globalmente
        <CartContext.Provider value={ data }>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider;
export {CartContext};