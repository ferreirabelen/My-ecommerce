import "./componentes/css/nav.css"
import NavBar from "./componentes/navBar";
import ItemListContainer from "./componentes/ItemListContainer";
import ItemDetailContainer from "./componentes/itemDetailContainer";
import {BrowserRouter, Route, Routes} from "react-router-dom";




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element = {
            <ItemListContainer saludo="Catálogo"/>}/>

          <Route path="/detalle/:itemId" element={
            <ItemDetailContainer saludo= "Detalle del producto"/>}/>
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;

