import React,{useState,useEffect} from "react";
import "./css/nav.css"
import ItemCount from "./ItemCount";
import {Productos} from "../data/products";
import {ItemDetail} from "./itemDetail";



function ItemDetailContainer(props){
    const [unicoProducto, setunicoProducto] = useState([{}]);

    useEffect(()=>{
                const traerProducto = new Promise((res,rej)=> {
                setTimeout(() => {
                        res(Productos[1]);
                    },1000);
                });
                
                traerProducto
                .then((res) => {
                setunicoProducto(res)
                });
            },[]);
    
            
    return(
        <div className="container">
            <h1>{props.saludo}</h1>
        <div>   
            <ItemDetail Item={unicoProducto} />
            <ItemCount stock={5} initial={1}/>
        </div>
        </div>
        
        
    )
}

export default ItemDetailContainer;