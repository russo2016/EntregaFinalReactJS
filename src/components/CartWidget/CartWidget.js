import cart from "./img/cart.svg"

const CartWidget = () =>{
    return(
        <div>
            <img src={cart} alt="Cart" className="icon"/>
            0
        </div>
    )
}

export default CartWidget;