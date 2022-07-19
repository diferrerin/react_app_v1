import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar/NavBar';

//Funcion App principal

function App() {
  const estiloBase = { padding: "10px 10px", backgroundColor: "Red" }
  return (
    <div className="App"> 
      <header className="App-header" style={estiloBase}>
        
        <NavBar />

        <p>
           <code>src/App.js</code> Test Tienda Online.
        </p>

      </header>
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
