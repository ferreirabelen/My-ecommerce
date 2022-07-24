import React, { useState } from 'react'
import { useForm } from "react-hook-form";


export const CartForm = ({cart,clear, totalPrice,createBuyOrder}) => {

    const { register,handleSubmit, formState: {errors} } = useForm();
    

    const [comprador, setComprador] = useState({
        name: "",
        phone: "",
        email: "",
    }
    )


    const handleChange = (evt) => {
        const input= evt.target.name;
        const value = evt.target.value;
        setComprador({ 
            ...comprador, 
            [input]: value 
        });
    }

    function handleBuyOrder(evt) {
        evt.preventDefault()
        const dataOrder = {
            comprador,
            items: cart,
            total: totalPrice()
        }

        createBuyOrder(dataOrder).then((orderCreated) => {
            alert("Su orden de compra es :  " + orderCreated.id);
            clear();
        })

    }


    return (<>
    
        <div>
            <div>
                <h1>Ingrese sus datos</h1>
            </div>
            <div>
                <form className='formulario'  onSubmit={handleSubmit(handleBuyOrder)}>

                    <label htmlFor="name">Nombre</label>
                    <input {...register("name", { required: true})} aria-required  onChange={handleChange} type="text" name="name"   />
                    {errors.name?.type === 'required' &&
                        <span className="text-red-500">Ingresar su nombre</span>}

                        <br />

                    <label htmlFor="phone">Celular</label>
                    <input {...register("phone", { required: true})} aria-required  onChange={handleChange} type="phone" name="phone"  />
                    {errors.phone?.type === 'required' &&
                        <span className="text-red-500">Ingresar un número de contacto</span>}

                        <br />

                    <label  htmlFor="email">Mail</label>
                    <input {...register("email", { required: true, pattern: /\S+@\S+\.\S+/ })} onChange={handleChange} type="email" name="email"  />
                    {errors.email?.type === 'required'}
                    {errors.email?.type === 'pattern' && <span> Mail invalido</span>}

                    <br />
                    <span>Primer paso</span>
                    <button className="finalizar" type="submit" > Finalizar Compra!  </button>
                    <br />
                    <span >Segundo paso</span>
                    <button onClick={handleBuyOrder} className='finalizar'>Ver detalle</button> 
                    


                </form>
            </div>

        </div>
        </>
    )
}

export default CartForm;


