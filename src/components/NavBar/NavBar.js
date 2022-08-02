import "./NavBar.scss";
//importo para Boostrap-react ----
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "../CartWidget/CartWidget";
//importa para Link (Navegacion)
import { Link } from "react-router-dom";

//NOTA: Tuve que sacar el bootstrap-react que usaba NAV.link (Error <a> anclas disfrazadas rompen el esquema de carga)
// hay que rehacer el Navbar sin bootstrap

/*
Configura en App.js el routing usando un BrowserRouter de tu aplicación con react-router-dom
-Rutas a configurar:
‘/’ navega a <ItemListContainer />
‘/category/:id’  <ItemListContainer />
‘/item/:id’ navega a <ItemDetailContainer />
-Links a configurar:
Clickear en el brand debe navegar a ‘/’
Clickear un Item.js debe navegar a /item/:id
Clickear en una categoría del navbar debe navegar a /category/:categoryId 
-Para finalizar integra los parámetros de tus async-mocks para reaccionar 
a :itemId y :categoryId ¡utilizando efectos y los hooks de parámetros que vimos en clase!
 Si te encuentras en una categoría deberías poder detectar la navegación a otra categoría
  y volver a cargar los productos que correspondan a dicha categoría
*/

const NavBar = () => {

    return (//codigo JSX <CartWidget />
            <div>
                <Navbar bg="dark" variant="dark">
                  <Container>
                   <Navbar.Brand href="#home">Deferrari Online Store</Navbar.Brand>
                        <Nav className="me-auto">

                          <Link to="/"> Home </Link>

                          <Link to="/item"> Products </Link> 
             
                            <CartWidget />
                        
                    </Nav>
                  </Container>
                 </Navbar>
            </div>
    )  
} 
export default NavBar
