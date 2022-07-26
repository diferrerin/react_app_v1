//import logo from './logo.svg';
import './App.css';
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
//import Modal from './components/Modal/Modal'; //Para usar Modal
//importo para Boostrap-react ----
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

//Funcion App principal
function App() {
  return ( 
    <> 
      <header >
        <Container>   
          <Row>
              <NavBar />
          </Row>
        </Container>
      </header>
      
        <Container>
          <Row>
            <div className=" main-container">
              <h2> Productos </h2>
              <ItemListContainer />
            </div>
          </Row>
        </Container>
      
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
