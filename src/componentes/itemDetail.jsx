
import React from "react";
import { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import cartContext from "./CartContext";
import { Link } from "react-router-dom";

export const ItemDetail = ({Item}) => {
    const [desaparecerCount, setDesaparecerCount] = useState(false); //el profe la llamó setIsInCart(clase 9)


    const { addToCart, cart} = useContext(cartContext);
    console.log(addToCart,cart);

    
    function handleOnAdd(cant){
        addToCart(Item,cant)
        setDesaparecerCount(true);
    }
    return (
        <div className = "unicoProducto">
            <img src={Item.img} alt={Item.nombre} className = "unicaimg" />
            <h3> {Item.nombre} </h3>
            <span> Hay {Item.stock} unidades de stock</span>
            <p > {Item.descripcion} </p>
            <em> El precio es de {Item.precio} </em>
    
            {
                (desaparecerCount === false)
                ?
                <ItemCount onAdd = {handleOnAdd} stock={5} initial={1}/>
                :<Link to="/cart" >
                <button className="terminarCompra" >terminar compra </button>
                </Link>

            }
        </div>
    )
}