//import logo from './logo.svg';
import './App.css';
import './App.scss';
import NavBar from './components/NavBar/NavBar';
//import Modal from './components/Modal/Modal'; //Para usar Modal
//importo para Boostrap-react ----
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Products from './pages/Products';
import Checkout from './pages/Checkout';
//import de contexto:
import CartProvider from './context/CartContext';

//Funcion App principal 
//-----Se modifica item:id 03/08/22------ funciona ok
function App() {
  return ( 
    <> 
    <CartProvider>
    <BrowserRouter>
      <header >
        <Container>   
          <Row>
              <NavBar />
          </Row>
        </Container>
      </header>
        <Routes>
            <Route path='/' element= {
                    <Container >
                    <Row>
                        <Home />
                    </Row>
                  </Container>
            } />

            <Route path='/contacto' element={
              <h3> Contacto WIP </h3>
            } />

            <Route path='/item/:id' element={
                      <Container>
                          <h2> Detalle de Item </h2>
                          <Detail  />
                      </Container>
            }/>
            
            <Route path='/category/:id' element={
                      <Container>
                          <Products  /> 
                      </Container>
            } 
            />
            <Route path='/cart' element={ <Checkout />}/>
            <Route path='*' element={ <h2> Lo sentimos, esa pagina no existe (404) </h2>}/>
        </Routes>
      </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;

/*  MODAL desactivado:
          <Row>
              <Modal name=" Registro  ">
                  <form>
                      <input type="text" />
                      <button>Enviar</button>
                  </form>
              </Modal> 
          </Row>

*/
