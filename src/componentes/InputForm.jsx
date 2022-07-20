
import React from "react";

function InputForm(props){
    return(
        <form className='formulario'>
        <label htmlFor="name">{props.text}</label> 
        <input name={props.type} onChange={props.handleChange}></input>
        
        </form>
    )

}

export default InputForm;

//recibe props el text (nombre, telefono mail) y además el type que tambien es name, phone o email