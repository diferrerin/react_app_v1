import "./NavBar.scss";
//NavBar Basico Entrega 2
//importo para Boostrap-react ----
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {

    return (//codigo JSX <CartWidget />
            <div>
                <Navbar bg="dark" variant="dark">
                 <Container>
                  <Navbar.Brand href="#home">Deferrari Online Store</Navbar.Brand>
                     <Nav className="me-auto">
                     <Nav.Link href="#home">Home</Nav.Link>
                     <Nav.Link href="#products">Products</Nav.Link>
                    <Nav.Link href="#about">About Us</Nav.Link>
                   
                    <CartWidget />
                    
                </Nav>
                </Container>
                 </Navbar>
            </div>
    )  

} 
export default NavBar
/*
                <h3 className="link-NavBar">  </h3>
                <a className="nav-link link-NavBar" href="./index.html">Inicio</a>
                <a className="nav-link link-NavBar" href="./index.html">Productos</a>
                <a className="nav-link link-NavBar" href="./index.html">Contacto</a>
                <a className="nav-link link-NavBar" href="./index.html">Sobre Nosotros</a>

*/