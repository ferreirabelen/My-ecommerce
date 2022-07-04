import {Link} from "react-router-dom";


const Item = ({item}) => {
    const urlDetalle = `/detalle/${item.id}`
    return (
        <div>
            <div className="cuadros">
            <img src={item.img} alt={item.nombre}/>
            <h3> {item.nombre} </h3>
            <span> Hay {item.stock} unidades de stock</span>
            <p> El precio es de  <em> {item.precio}</em></p>
            {/* <p> {item.descripcion} </p> */}
            <Link to = {urlDetalle}>
                <button className="agregarCarrito">Ver detalle del producto</button>
            </Link>
            </div>
        </div>
    )

}

export default Item;