import React,{useState,useEffect} from "react";
import "./css/nav.css"
import ItemCount from "./ItemCount";
import ItemList from "./itemList";
import {Productos} from "../data/products"



function ItemListContainer(props){
    const [productos, setProductos] = useState([]);

    useEffect(()=>{
                const traerProductos = new Promise((res,rej)=> {
                setTimeout(() => {
                        res(Productos);
                    },2000);
                });
                
                traerProductos
                .then((res) => {
                setProductos(res)
                });
            },[]);
    
            
    return(
        <div className="container">
            <h1>{props.saludo}</h1>
           
           <div className="productos">
           <ItemList items={productos} />
           </div>
           <div>   
            <ItemCount stock={5} initial={1}/>
           </div>
        </div>
        
        
    )
}

export default ItemListContainer;