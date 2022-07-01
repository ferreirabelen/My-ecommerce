import React, {useContext}  from "react";
import cartContext from "./CartContext";



function CartReview(){
    const {cart,clear, removeItem} = useContext(cartContext);
    if(cart.length === 0){
            return <p class="vacio"> Ups! no hay nada en tu carrito aún vuelve a este link para poder cargar algo</p>
    }
    else{

    }

    return (
    cart.map(item => (
        <div>
            <h3> {item.nombre} </h3>
            <span> Hay {item.stock} unidades de stock</span>
            <p> {item.descripcion} </p>
            <em> El precio es de {item.precio} </em>
            <button onClick={() => removeItem(item.id)} className="borrarItemCarrito">Borrar el ultimo elemento agregado</button>
            <button onClick={() => clear()} className="vaciarCarrito">Vaciar carrito</button>
        </div>
        
        ))
    
    )
}

export default CartReview