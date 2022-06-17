const Item = ({item}) => {
    return (
        <div class="contenedor">
            <div className="cuadros">
            <img src={item.img} alt={item.nombre}  className="imagenes"/>
            <h3> {item.nombre} </h3>
            <span> Hay {item.stock} unidades de stock</span>
            <p> "El precio es de {item.precio}"" </p>
            <p> {item.descripcion} </p>
            
            </div>

        </div>
    )

}

export default Item;