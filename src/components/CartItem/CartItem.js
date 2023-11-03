import React, { useContext } from "react";
import "./CartItem.css"
import { CartContext } from "../../context/CartContext";

export const CartItem = ({id, name, img, price, quantity}) =>{

    const {removeItem} = useContext(CartContext)

    return(
        <div className="hola">
            <div className="product-card">
                <img src={img} alt={name} className="product-image"/>
                <div>
                    <h3>{name}</h3>
                    <p>Precio: ${price}</p>
                    <p>Cantidad: {quantity}</p>
                    <button className="button m-1 is-link" onClick={() => removeItem(id)}>Eliminar del carrito</button>
                </div>
            </div>
        </div>
    )
}