import React,{useContext} from "react";
import cartContext from "./CartContext";
import carrito from "./img/carrito.png";


function CartWidget(){
    const {contarItems} = useContext(cartContext)

    return(
        <div>
            <img src={carrito} alt="carrito de compra" className="carrito"/>
            {
                contarItems() !== 0
                ?  <p className="itemsCarrito">{contarItems()}</p>
                : null
            }

        </div>
    );
}

export default CartWidget;

