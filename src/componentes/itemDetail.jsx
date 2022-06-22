
import React from "react";
import ItemCount from "./ItemCount";

export const ItemDetail = ({Item}) => {
    return (
        <div className = "unicoProducto">
            <img src={Item.img} alt={Item.nombre} className = "unicaimg" />
            <h3> {Item.nombre} </h3>
            <span> Hay {Item.stock} unidades de stock</span>
            <p > {Item.descripcion} </p>
            <em> El precio es de {Item.precio} </em>
            <div>   
            <ItemCount stock={5} initial={1}/>
        </div>
        </div>
    )
}