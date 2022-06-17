
import React from "react";

export const ItemDetail = ({Item}) => {
    return (
        <div className = "contenedor">
            <div className = "unicoProducto">
            <img src={Item.img} alt={Item.nombre} className="imagenes"/>
            <h3> {Item.nombre} </h3>
            <span> Hay {Item.stock} unidades de stock</span>
            <p> {Item.descripcion} </p>
            <em> El precio es de {Item.precio} </em>
            </div>
        </div>
    )

}

