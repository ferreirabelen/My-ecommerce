const arrayData = [
    {
        id: 1,
        nombre: "producto 1",
        stock : 5
    },
    {
        id: 10,
        nombre: "producto 2",
        stock : 4
    }
]

const mapeado = arrayData.map(
    (data) => {                                      //el data son cada items, cada objeto dentro del array
        return(data.nombre)
    }
)

console.log(mapeado)

const mapeado2 = arrayData.map(
    (data) => {
        return(data.stock * 2)
    }
)

console.log(mapeado2)

const mapeado3 = arrayData.map(
    (data) => {
        return({... data, usuario:"coderhouse"})            //me traigo todo el array y sumo algo nuevo
    }
)

console.log(mapeado3)





