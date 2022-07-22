import "./componentes/css/nav.css"
import NavBar from "./componentes/navBar";
import ItemListContainer from "./componentes/ItemListContainer";
import ItemDetailContainer from "./componentes/itemDetailContainer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {CartContextProvider} from "./componentes/CartContext";
import CartReview from "./componentes/cartView"




function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>

            <Route path="/" element = {
              <ItemListContainer saludo="Catálogo"/>}/>

            <Route path="/detalle/:itemId" element={
              <ItemDetailContainer saludo= "Detalle del producto"/>}/>
      
            <Route path="/category/:categoryId" element={
              <ItemListContainer saludo= " Categoria de Cuadros"/>}/>

            <Route path="/cart" element={
              <CartReview/>}/>



          </Routes>

        </BrowserRouter>

      </CartContextProvider>
      
      </div>
  );
}

export default App;

