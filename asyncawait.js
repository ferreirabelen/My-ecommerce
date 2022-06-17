function apiREST(){
    return new Promise(                                   
    function aplicacion(resolve,reject){                     
        setTimeout(
            ()=>resolve("hola soy una promesa"),
            3500
        )
    }
)
}

async function mostrarApi(){                   //try lo que si resuelve, catch para atrapar el error 
    let mostrar = await apiREST()
    console.log(mostrar)
}

mostrarApi()