import React from "react";

import carrito from "./img/carrito.png";

function CartWidget(){
    return(
        <div>
            <img src={carrito} alt="carrito de compra" className="carrito"/>
        </div>
    );
}

export default CartWidget;

