import React, {useState, createContext} from "react";

const cartContext = createContext();

export function CartContextProvider(props){
    const [cart, setCart ] = useState([]);



    function addToCart(Item, cant){
        if(isInCart(Item.id)){
            console.log("Ya esta agregado al carrito, se sumó esta nueva cantidad")
        }else{
            setCart([...cart ,{...Item, cantidad : cant} ]);
        }

        
}
    function mostrar(Item,cant){
        isInCart(Item.id)
        console.log("hola")
        return ([...cart ,{...Item, cantidad : cant} ]);
}

    function isInCart (id){                                    //DEVUELVE T O F, EN CASO DE QUE SEA TRUE MANDAME UN CONSOLE DE QUE ESTA EN EL CARRITO SINO AGREGALO LINEA11 Y 12
        return cart.some((prod) => prod.id === id)

    }

    function clear(){
        setCart([]);

    }

    const removeItem = (id) => {
        const productos = cart.filter((prod) => prod.id !== id)
        setCart(productos)
        

    }
    




    return <cartContext.Provider value = {{cart , addToCart , clear , removeItem , mostrar}}>
        {props.children}
    </cartContext.Provider>
}


export default cartContext