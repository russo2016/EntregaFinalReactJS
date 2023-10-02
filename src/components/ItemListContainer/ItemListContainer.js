import { useEffect, useState } from "react"
import { getProducts, getProductsByCategory } from "../../products";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css"
import { useParams } from "react-router-dom";

const ItemListContainer = () =>{

    const [products, setProducts] = useState([]);

    const {categoryId} = useParams();

    useEffect(()=>{
        const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId)
            .then(response =>{
                setProducts(response)
            })
            .catch(error=>{
                console.error(error)
            })
    },[categoryId])

    return(
        <ItemList products={products}/>
    )
}


export default ItemListContainer;