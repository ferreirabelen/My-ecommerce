import React,{useState,useEffect} from "react";
import "./css/nav.css";
import ItemList from "./itemList";
import {Productos} from "../data/products"
import { useParams } from "react-router-dom";
import {getItems} from "../firebase/firestore";



function ItemListContainer(props){

    getItems().then(respuesta => console.log( respuesta ) ) 



    const [productos, setProductos] = useState([]);
    const { categoryId } = useParams();
    const [cargando, setCargando] = useState(true)

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
                setCargando(false)
                });
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