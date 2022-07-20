import React, {useState} from 'react';
import InputForm from './InputForm';

    
function CartForm( {cart,clear, totalPrice,createBuyOrder}) {

    const [comprador, setComprador] = useState(
        {
            name:" ",
            email:" ",
            phone:" ",

        },
    );

    const [mensaje, setMensaje] = useState(null)


    const handleChange = (evt) => {
        const input= evt.target.name;
        const value = evt.target.value;
        setComprador({
            ...comprador,
            [input] : value,
        })}



    function handlebuyer(evt){
        setMensaje("Su orden ha sido procesada con exito, revisa su casilla de mail para ver los detalles de su compra")
        evt.preventDefault();
        const dataOrder = {
            comprador,
            items : cart,
            total : totalPrice(),
        }

    
    
    
        createBuyOrder(dataOrder).then( (orderCreated) =>  {
           clear() //limpia el carrito dsp de finalizar la compra para que no se duplique lo elegido
            alert("Su orden de compra es :  " + orderCreated.id)

        
            
            
        } )
    }


return (
        <>
        <div>
            <h3>Ingresa tus Datos</h3>
            <InputForm text="Nombre" type="name" onChange={handleChange}/>
            <InputForm text="Mail" type="email" onChange={handleChange}/>
            <InputForm text="Celular" type="phone" onChange={handleChange}/>
        
        {
            mensaje
            ? <p>{mensaje}</p>
            :  <button className="finalizar" onClick= {handlebuyer}>Finalizar Compra!  </button>
        }
    
        </div>
        
        </>
    )
}

export default CartForm;

// 