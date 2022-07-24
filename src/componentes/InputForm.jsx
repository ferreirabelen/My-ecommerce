
import React from "react";

function InputForm(props){
    return(
        <form className='formulario'>
        <label htmlFor="name" >{props.text}</label> 
        <input name={props.type} onChange={props.handleChange} ></input>
        
        </form>
    )

}

export default InputForm;
