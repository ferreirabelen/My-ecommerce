import React, {useContext}  from "react";
import cartContext from "./CartContext";
import CartForm from "./CartForm";
import { createBuyOrder } from "../firebase/firestore";


function CartReview(){
    const {cart,clear, removeItem, totalPrice,contarItems} = useContext(cartContext);





    if(cart.length === 0){
            return(
            <div>
            <p class="vacio"> Ups! No hay nada en tu carrito aún. 
            Vuelve a este link para poder cargar algo</p>
            <a href="/" className= "linkVolver">Click acá!</a>
            </div>
            )
        }
    else{

    }
    return (
    <>
    <div className="CART">
        {cart.map((item) => (
        <div key={item.id}>
            <div className="CART2">
                <h3>{item.nombre}</h3>
                <p>$ {item.precio}</p>
                
                <button onClick={() => removeItem(item.id)} className="BOTON">Borrar el elemento</button>
            </div>
        </div>
        ))}
        <CartForm cart={cart} totalPrice={totalPrice} clear={clear} createBuyOrder={createBuyOrder} />
    </div>
    
    <div className="CART2">
        <div >
        <p>Total a pagar: ${totalPrice()}</p>
        <p>Cantidad de unidades: {contarItems()} </p>
        <button onClick={() => clear()} className="vaciarCarrito">Vaciar carrito</button>
        </div>

    </div>
    </>
)};




export default CartReview;


