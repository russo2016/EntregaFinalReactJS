import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount"
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({id, name, img, description, price, stock}) =>{

    const [quantityAdded, setQuantityAdded] = useState(0)

    const {addItem} = useContext(CartContext)

    const handleOnAdd = (quantity) =>{
      setQuantityAdded(quantity)

      const item ={
        id,name,price,img
      }

      addItem(item,quantity)
    }

    return(
    <div className="columns  is-centered">
        <div className="product-card columns">
        <img src={img} alt={name} className="product-image" />
        <div className="product-details">
          <h2 className="product-name">{name}</h2>
          <p className="product-price">${price}</p>
          <p className="product-stock">Stock: {stock}</p>
          <p className="product-description">{description}</p>
          <footer>
            {
              quantityAdded > 0 ? (
                <Link to="/cart" className="button is-link is-2">Terminar compra</Link>
              ):(
            <ItemCount className="item-count" initial={1} stock={stock} onAdd={handleOnAdd} />
              )
            }
            </footer>
        </div>
        </div>
    </div>
    )
}

export default ItemDetail