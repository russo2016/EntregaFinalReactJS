import cart from "./img/cart.svg"

const CartWidget = () =>{
    return(
        <div>
            <img src={cart} alt="Cart" className="icon mr-2"/>
            0
        </div>
    )
}

export default CartWidget