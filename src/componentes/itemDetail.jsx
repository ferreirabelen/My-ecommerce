
import React from "react";
import { useState } from "react";
import ItemCount from "./ItemCount";

export const ItemDetail = ({Item}) => {
    const [desaparecerCount, setDesaparecerCount] = useState(false);


    function handleOnAdd(){
        console.log("tu vieja");
        setDesaparecerCount(true);
    }
    return (
        <div className = "unicoProducto">
            <img src={Item.img} alt={Item.nombre} className = "unicaimg" />
            <h3> {Item.nombre} </h3>
            <span> Hay {Item.stock} unidades de stock</span>
            <p > {Item.descripcion} </p>
            <em> El precio es de {Item.precio} </em>
            <div>   

            {
                (desaparecerCount == false)
                ?
                <ItemCount onAdd = {handleOnAdd} stock={5} initial={1}/>
                : <button><a href="/cart" className="terminarCompra" >terminar compra</a></button>
            }
        </div>
        </div>
    )
}