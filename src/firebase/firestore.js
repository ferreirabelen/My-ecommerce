
import { initializeApp } from "firebase/app";
import {getFirestore, getDocs, collection, getDoc, doc, query, where, setDoc, addDoc} from "firebase/firestore";


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

    let respuesta = productosSnapshot.docs.map( doc => {
        return{
            ...doc.data(),
            id: doc.id

        }
    }
    );

    return respuesta;

}

export async function traerUnProducto(Itemid){

    const docRef = doc(appFirestore,"productos", Itemid);

    const docData = await getDoc(docRef);

    return {id: docData.id, ...docData.data()};
    }



    
export async function traerPorCategoria(categoryId){

    const coleccionProducto = collection(appFirestore, "productos");
    const q = query(coleccionProducto, where("category", "==", categoryId));

    const productosSnapshot = await getDocs(q);

    let respuesta = productosSnapshot.docs.map( doc => {
        return{
            ...doc.data(),
            id: doc.id

        }
    })

    return respuesta;


}





export async function createBuyOrder(dataOrder){
    const orderColectionRef = collection(appFirestore,"ordenes");

    const orderCreated = await addDoc(orderColectionRef, dataOrder);

    return orderCreated;
}



export default appFirestore;