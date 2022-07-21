//import logo from './logo.svg';
import './App.css';
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import ItemProduct from './components/ItemProduct/ItemProduct';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

//importo para Boostrap-react ----
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


//Funcion App principal

function App() {
  //const estiloBase = { padding: "10px 10px" }
  return (
    
    <div > 
      <header >
      <Container>

            <NavBar />

        <Row>
          <ItemListContainer />
          <div className=" main-container">
            <h2> Productos </h2>
            <div className=" list-products">
                <ItemProduct name="Camisa Sport" price="15000" />
                <ItemProduct name="Remera lisa" price="5000" />
            </div>
          </div>
        </Row>
      </Container>

      </header>
      <body>

      </body>


    </div>
  );
}

export default App;

/*  Data de archivo base React
      <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

*/
