import React from "react";
// import cartContext from "./CartContext";
import carrito from "./img/carrito.png";


function CartWidget(){
    // const {mostrar} = useContext(cartContext)

    return(
        <div>
            <img src={carrito} alt="carrito de compra" className="carrito"/>
            {/* <p>{mostrar}</p> */}
        </div>
    );
}

export default CartWidget;

