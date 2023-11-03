import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import { CartItem } from "../CartItem/CartItem"


export const Cart = () =>{
    const {cart, clearCart, totalQuantity, total} = useContext(CartContext)

    if(totalQuantity === 0){
        return(
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to="/" className="button is-link is-2">Productos</Link>
            </div>
        )
    }

    return(
        <div>
            {cart.map(p=> <CartItem key={p.id} {...p}/>)}
            <div className="cart">
            <h3>Total: ${total}</h3>
            <button onClick={()=> clearCart()} className="button is-link is-rounded">Limpiar carrito</button>
            <Link to="/checkout" className="button is-link is-rounded">Checkout</Link>
            </div>
        </div>
    )
}