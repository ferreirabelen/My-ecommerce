// let apiREST = new Promise(                                    //crear una promesa, con resolve y reject, 
//     function aplicacion(resolve,reject){                      //setTimeout es para simular una api y esperar la respuesta, con un tiempo estimado(1 segundo)
//         setTimeout(
//             ()=>resolve("hola soy una promesa"),
//             1500
//         )
//     }
// )
// apiREST.then(                                       //se ejecuta cuando ya paso el tiempo y trae la promesa, la funcion entre parametros puedo poner respuesta/resolver/ y la llamo por consola.
//     function mostrarPromesa(respuesta){             //en el .then siempre llega el resolve y en el .catch siempre te llega el reject
//         console.log(respuesta)
//     }
// );

//en react tenemos que transformarla en una funcion para poder mostrarla quedaria asi 
function apiREST(){
    return new Promise(                                   
    function aplicacion(resolve,reject){                     
        setTimeout(
            ()=>resolve("hola soy una promesa"),
            1500
        )
    }
)
}

apiREST().then(                                      
    function mostrarPromesa(respuesta){             
        console.log(respuesta)
    }
);






























//otra forma d resolver mas legible 

let otraAPI = new Promise(
    function otra(resolve){
        const data = {
            id: "1",
            nombre : "producto 1",
            stock : "no disponible"
        };
        setTimeout(
            ()=> resolve(data),3000)
    }
)

otraAPI.then(
    function mostrarOtra(rsp){
        console.log(rsp);
    }
)


