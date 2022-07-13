import React, {useContext}  from "react";
import cartContext from "./CartContext";
import CartForm from "./CartForm";
import { createBuyOrder } from "../firebase/firestore";


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
    <>
    <div>
        {cart.map((item) => (
        <div key={item.id}>
            <div>
                <h3>{item.nombre}</h3>
                <p>$ {item.precio}</p>
                <p>Cantidad de unidades: {contarItems()} </p>
                <button onClick={() => removeItem(item.id)}>Borrar el elemento</button>
            </div>
        </div>
        ))}
    </div>
    <div>
        <div>
        <p>
            Total a pagar: ${totalPrice()}
            <button onClick={() => clear()} className="vaciarCarrito">Vaciar carrito</button>

            <CartForm cart={cart} totalPrice={totalPrice} clear={clear} createBuyOrder={createBuyOrder} />
        
            
        </p>
        </div>

    </div>
    </>
)};




export default CartReview;


