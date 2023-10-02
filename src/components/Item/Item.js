import { NavLink } from "react-router-dom";
import "./item.css"

const Item = ({id, name, img, price, stock}) =>{
    return(
    <div className="product-card">
        <img src={img} alt={name} className="product-image" />
        <div className="product-details">
          <h2 className="product-name">{name}</h2>
          <p className="product-price">${price}</p>
          <p className="product-stock">Stock: {stock}</p>
          <NavLink to={`/item/${id}`} className="detail-button">Ver Detalles</NavLink>
        </div>
      </div>
    )
}

export default Item;