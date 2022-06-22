import React,{useState,useEffect} from "react";
import "./css/nav.css";
import ItemList from "./itemList";
import {Productos} from "../data/products"
import { useParams } from "react-router-dom";



function ItemListContainer(props){
    const [productos, setProductos] = useState([]);
    const { categoryId } = useParams();

    useEffect(()=>{
                const traerProductos = new Promise((res,rej)=> {
                setTimeout(() => {
                    if(categoryId === undefined)
                        res(Productos)
                    else{
                            const filterItem = Productos.filter( product => {
                                return product.category === categoryId;
                            })
                            res(filterItem);
                        }
                    },1000);
                });
                
                traerProductos
                .then((res) => {
                setProductos(res)
                });
            },[categoryId]);
    
            
    return(
        <div className="container">
            <h1>{props.saludo}</h1>
        <div className="productos">
        <ItemList items={productos} />
        </div>
        
        </div>
        
        
    )
}

export default ItemListContainer;