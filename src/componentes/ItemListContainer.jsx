import React,{useState,useEffect} from "react";
import "./css/nav.css";
import ItemList from "./itemList";
import { useParams } from "react-router-dom";
import {getItems, traerPorCategoria} from "../firebase/firestore";



function ItemListContainer(props){

    const [productos, setProductos] = useState([]);
    const { categoryId } = useParams();
    const [cargando, setCargando] = useState(true)


    useEffect(()=>{
        if(categoryId)
            traerPorCategoria(categoryId)
                .then((res) => {
                setProductos(res)
                setCargando(false)
                });
        else{
            getItems()
            .then((res) => {
                setProductos(res)
                setCargando(false)
            })
        }
            },[categoryId]);
    
            
    return(
        <div className="container">
        {cargando
            ? <h3>Cargando ... </h3>
            : <>
            <h1>{props.saludo}</h1>
            <div>
            <ItemList items={productos} />
            </div></>
        }
        </div>
    )
}

export default ItemListContainer;