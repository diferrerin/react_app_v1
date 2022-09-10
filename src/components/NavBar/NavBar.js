import "./NavBar.scss";
import CartWidget from "../CartWidget/CartWidget";
//importo para Boostrap-react ----
//import 'bootstrap/dist/css/bootstrap.min.css';
//import Container from 'react-bootstrap/Container';
//import Nav from 'react-bootstrap/Nav';
//import Navbar from 'react-bootstrap/Navbar';
//importa para Link (Navegacion)
import { Link } from "react-router-dom";

//NOTA: Tuve que sacar el bootstrap-react que usaba NAV.link (Error <a> anclas disfrazadas rompen el esquema de carga)
// hay que rehacer el Navbar sin bootstrap
// <Link to="/item"className="link-NavBar"> Products </Link>  

const NavBar = () => {
  const links = [
    { name : "Remeras" , url : "/category/Remeras"},
    { name : "Camisas" , url : "/category/Camisas"},
    { name : "Camperas" , url : "/category/Camperas"},
    { name : "Pantalones" , url : "/category/Pantalones"}
  ];
  return (
        <>
              <div className="header">
                   <div ><Link to="/" className="logo"> Deferrari Online Store </Link></div>
                         <div className="main-navbar-links">
                            <Link to="/" className="link-NavBar"> Home </Link>                    
                              {
                              links.map(
                                    (link,indice) => {
                                        return(
                                                <Link to={link.url} className="link-NavBar" key={indice}> {link.name} </Link>
                                        )
                                    }
                                )
                              }
                              <div className="cart-widget">
                                <CartWidget />
                              </div>    
                     </div>
              </div>
        </>
    )  
} 
export default NavBar
