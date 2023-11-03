import { useContext } from "react"
import cart from "./img/cart.svg"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import "./cartWidget.css"

const CartWidget = () =>{

    const {totalQuantity} = useContext(CartContext)
    
    return(
        <Link to="/cart" className= {`cart-widget ${totalQuantity > 0 ? "visible" : ""} button  is-link is-2`}>
            <img src={cart} alt="cart-widget" className="icon mr-2"/>
            { totalQuantity }
        </Link>
    )
}

export default CartWidget