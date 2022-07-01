
import { initializeApp } from "firebase/app";
import {getFirestore, getDocs, collection} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCFKOUci79i2UKb_FlGhkEfDQsI_glaIZg",
    authDomain: "coderhouse-d455b.firebaseapp.com",
    projectId: "coderhouse-d455b",
    storageBucket: "coderhouse-d455b.appspot.com",
    messagingSenderId: "910316619132",
    appId: "1:910316619132:web:e11b546e4e0119543190f9"
};


const appFirebase = initializeApp(firebaseConfig);
const appFirestore = getFirestore(appFirebase)



export function testDatabase(){
    console.log(appFirestore)
}

export async function getItems(){
    const coleccionProducto = collection(appFirestore, "productos" );

    const productosSnapshot = await getDocs(coleccionProducto)

    let respuesta = productosSnapshot.docs.map( doc => doc.data());

    return respuesta;

}


export default appFirestore;