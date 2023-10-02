import { useState } from "react"


const ItemCount = ({stock, initial, onAdd}) =>{
    const [quantity, setQuantity] = useState(initial);

    const increment = () => {
        if(quantity < stock){
            setQuantity(quantity+1);
        }
    }

    const decrement = () => {
        if (quantity > 1){
            setQuantity(quantity - 1);
        }
    }

    return(
        <div>
            <div className="buttons columns is-centered mt-2">
                <button className="button is-link" onClick={decrement}>-</button>
                <h4 className="">{quantity}</h4>
                <button className="button is-link" onClick={increment}>+</button>
            </div>
            <div className="columns is-centered">
                <button className="button is-link is-2" onClick={() => onAdd(quantity)} disabled={!stock}>Agregar al carrito</button>
            </div>
        </div>
    )

}

export default ItemCount;