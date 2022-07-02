import React,{useState,useEffect} from "react";
import "./css/nav.css";
import {Productos} from "../data/products";
import {ItemDetail} from "./itemDetail";
import { useParams } from "react-router-dom";
import BeatLoader from "react-spinners/BeatLoader"



function ItemDetailContainer(props){
    const [unicoProducto, setunicoProducto] = useState([{}]);

    const [cargando, setCargando] = useState(true);  //cuando la promesa no este lista se muestra un cargando .. y cuando se carga devuelve el producto

    const { itemId } = useParams();


    useEffect(()=>{
                const traerProducto = new Promise((res,rej)=> {
                setTimeout(() => {
                    const encontrarItem = Productos.find( product => {
                        return product.id == parseInt(itemId);
                    })
                    res(encontrarItem);
                    },1000);
                });
                
                traerProducto
                .then((res) => {
                setunicoProducto(res)
                setCargando(false)             //ya cargó la promesa, asi que cargando se vuelve false
                });
            },[]);
    
            
    return(
        <div className="container">
            <h1>{props.saludo}</h1>
        <div> 
            {cargando
                ?  <BeatLoader color={"rgb(122, 190, 253)"} size={14} margin={12} />
                : <ItemDetail Item={unicoProducto} />
            }
            
        </div>
        </div>
        
        
    )
}

export default ItemDetailContainer;