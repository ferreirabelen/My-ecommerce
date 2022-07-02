import React, {useContext}  from "react";
import cartContext from "./CartContext";


function CartReview(){
    const {cart,clear, removeItem, totalPrice,contarItems} = useContext(cartContext);
    if(cart.length === 0){
            return(
            <div>
            <p class="vacio"> Ups! no hay nada en tu carrito aún vuelve a este link para poder cargar algo</p>
            <a href="/" className= "linkVolver">Click acá!</a>
            </div>
            )
        }
    else{

    }

    return (
    cart.map(item => (
        <div class="carritoAcumulado">
            <div className="otrocarrito">
                <h3> {item.nombre} </h3>
                <p> {item.descripcion} </p>
                <p>Cantidad de unidades: {contarItems()}</p>
                <em> El precio es de {item.precio} </em>
                <button onClick={() => removeItem(item.id)} className="borrarItemCarrito">Borrar el ultimo elemento agregado</button>
        </div><div>
                <p>total: {totalPrice()}</p>
                <button onClick={() => clear()} className="vaciarCarrito">Vaciar carrito</button>
                
            </div>

        </div>
        
        ))
    
    )
}

export default CartReview