import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {  doc, getDoc} from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () =>{
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true);

    const { itemId } = useParams()

    useEffect(() =>{
        setLoading(true);

        const docRef = doc(db,"products",itemId)
        getDoc(docRef)
            .then((response) =>{
                const data = response.data()
                const productAdapted = { id: response.id, ...data}
                setProduct(productAdapted)
            })
            .catch(error =>{
                console.log(error)
            })
            .finally(() => {
                setLoading(false);
            });
    },[itemId])
    return(
        <div>
            {loading ? <p>Cargando...</p> : <ItemDetail {...product} />}
        </div>
    )
}

export default ItemDetailContainer