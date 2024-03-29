import React,{useState,useEffect} from "react";
import "./css/nav.css";
import {ItemDetail} from "./itemDetail";
import { useParams } from "react-router-dom";
import BeatLoader from "react-spinners/BeatLoader"
import {traerUnProducto} from "../firebase/firestore";



function ItemDetailContainer(props){
    const [unicoProducto, setunicoProducto] = useState([{}]);

    const [cargando, setCargando] = useState(true);

    const { itemId } = useParams();


    useEffect(()=>{
                traerUnProducto(itemId)
                .then((res) => {
                setunicoProducto(res)
                setCargando(false)           
                });
            },[itemId]);
    
            
    return(
        <div>
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