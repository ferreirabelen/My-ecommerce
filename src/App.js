import "./componentes/css/nav.css"
import NavBar from "./componentes/navBar";
// import ItemListContainer from "./componentes/ItemListContainer";
import ItemDetailContainer from "./componentes/itemDetailContainer";




function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <ItemListContainer saludo="Catálogo"/> */}
      <ItemDetailContainer saludo= "Detalle del producto"/>

      </div>
  );
}

export default App;

