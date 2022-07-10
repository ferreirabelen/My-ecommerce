import React, {useContext}  from "react";
import cartContext from "./CartContext";
import {createBuyOrder} from "../firebase/firestore"


function CartReview(){
    const {cart,clear, removeItem, totalPrice,contarItems} = useContext(cartContext);

    function handlebuyer(){
        const dataOrder = {
            buyer :{
                name: "react37",
                phone: "1122233343",
                email : "ferreirabelenn@gmail.com"
            },
            items : cart,
            total : totalPrice()
        }
    createBuyOrder(dataOrder).then( (orderCreated) =>  {
            clear();  //limpia el carrito dsp de finalizar la compra para que no se duplique lo elegido
            console.log(orderCreated.id);
        } )
    }
    



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
            <h3> {item.nombre} </h3>
            <p> {item.descripcion} </p>
            <p>Cantidad de unidades: {contarItems()}</p>
            <em> El precio de Unidad es de {item.precio} </em>

            <div className="div">
            <button onClick={() => removeItem(item.id)} className="borrarItemCarrito">Borrar el ultimo elemento agregado</button>
            </div>

            <div  className="div">
            <p>total: {totalPrice().toFixed(2)}{" "}</p>
            </div>

            <div  className="div">
            <button onClick={ handlebuyer }>Finalizar Compra</button>
            <button onClick={() => clear()} className="vaciarCarrito">Vaciar carrito</button>

            </div>
            
        </div>
        
        ))
    
    )
}

export default CartReview