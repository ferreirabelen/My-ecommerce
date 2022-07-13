import React, {useState, createContext} from "react";

const cartContext = createContext();

export function CartContextProvider(props){
    const [cart, setCart ] = useState([]);



    function addToCart(Item, cant){
        if(isInCart(Item.id)){
            const agregarId = Item.id;
            let itemToadd = cart.find((cadaItem) => cadaItem.id === agregarId );
            itemToadd.cantidad += cant;

            let nuevoCarrito = cart.filter((cadaItem)=> cadaItem.id !== Item.id);
            

            setCart([...nuevoCarrito, {...itemToadd}  ])
        }else{
            setCart([...cart,{...Item, cantidad : cant} ]);
        }

        
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

    function contarItems(){
        let total = 0;
        cart.forEach( (item )=> (total = total + item.cantidad))
        return total;
    }
    


    function totalPrice() {
        let total = 0;
        cart.forEach((item) => (total = total + item.precio * item.cantidad));
        return total;
    }



    return <cartContext.Provider value = {{cart , addToCart , totalPrice, clear , removeItem , contarItems}}>
        {props.children}
    </cartContext.Provider>
}


export default cartContext