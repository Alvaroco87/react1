
import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
    <NavBar/>
    <div className="App">
        <p style={
          {
            color: "salmon",
            paddingTop:  "10px",
          }
        }>
          Bienvenidos!
        </p>
        <hr/>
        <input placeholder='ingrese algun contenido'/>
    </div>
    </>
  );
}

export default App;
