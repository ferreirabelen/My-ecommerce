import "./componentes/css/nav.css"
import NavBar from "./componentes/navBar";
import ItemListContainer from "./componentes/ItemListContainer";




function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer saludo="saludo hecho con props, hola!!"/>

      </div>
  );
}

export default App;

