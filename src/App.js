import "./componentes/css/nav.css"
import NavBar from "./componentes/navBar";
import ItemListContainer from "./componentes/ItemListContainer";
import ItemDetailContainer from "./componentes/itemDetailContainer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import cartContext, {CartContextProvider} from "./componentes/CartContext";
import CartReview from "./componentes/cartView"
import Final from "./componentes/Final";




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

            <Route path="/finalizar" element={
              <Final/>}/>


          </Routes>

        </BrowserRouter>

      </CartContextProvider>
      
      </div>
  );
}

export default App;

