import {useState} from "react";

function ItemCount({stock,initial, onAdd}){
    const [cant, setCant] = useState(initial);

    function Suma(){
        console.log("una suma")
        if (cant < stock){
            setCant(cant + 1)
        }else{
            console.log("Llegaste al limite de stock");
        }
    
    }

    function Resta(){
        console.log("una resta")
        if(cant > initial ){
            setCant(cant - 1)
        }else{
            console.log("No se pueden añadir numeros negativos");
        }
    }

    return(
        <div className="div-boton">
            <button className="boton" onClick={Resta}>-</button>
            <span>{cant}</span>
            <button className="boton" onClick={Suma}>+</button>
            { <button onClick={ () => onAdd(cant)} className="agregarCarrito" >Agregar al carrito</button> } 
        </div>
    )
}

export default ItemCount;