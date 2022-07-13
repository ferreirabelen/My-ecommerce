import React, {useState} from 'react'

    
function CartForm( {cart,clear, totalPrice,createBuyOrder}) {

    const [buyer, Setbuyer] = useState(
        {
            name:" ",
            email:" ",
            phone:" ",

        },
    );

    const handleChange = (evt) => {
        const field = evt.target.name;
        const value = evt.target.value;
        Setbuyer({
            ...buyer,
            [field] : value,
        })}



    function handlebuyer(evt){
        evt.preventDefault();
        const dataOrder = {
            buyer,
            items : cart,
            total : totalPrice(),
        }
    
    
        createBuyOrder(dataOrder).then( (orderCreated) =>  {
            clear();  //limpia el carrito dsp de finalizar la compra para que no se duplique lo elegido
            console.log(orderCreated.id);
        } )
    }
    

    return (
        <form>
        <label htmlFor="name">Usuario</label>
        <input onCahange={handleChange} name="name"></input>
    
        <label htmlFor="email">Mail</label>
        <input onChange={handleChange} name="email"></input>
    
        <label htmlFor="phone">Celular</label>
        <input onChange={handleChange} name="phone"></input>
    
        <button onClick={handlebuyer}>Finalizar Compra!</button>
        </form>
    )
    }

export default CartForm;
