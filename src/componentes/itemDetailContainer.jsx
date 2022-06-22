import React,{useState,useEffect} from "react";
import "./css/nav.css";
import ItemCount from "./ItemCount";
import {Productos} from "../data/products";
import {ItemDetail} from "./itemDetail";
import { useParams } from "react-router-dom";



function ItemDetailContainer(props){
    const [unicoProducto, setunicoProducto] = useState([{}]);
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