import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount"
const ItemDetail = ({id, name, img, category, description, price, stock}) =>{
    return(
    <div className="columns  is-centered">
        <div className="product-card columns">
        <img src={img} alt={name} className="product-image" />
        <div className="product-details">
          <h2 className="product-name">{name}</h2>
          <p className="product-price">${price}</p>
          <p className="product-stock">Stock: {stock}</p>
          <p className="product-description">{description}</p>
          <p className="product-category">Category: {category}</p>
          <ItemCount className="item-count" initial={1} stock={stock} onAdd={(quantity) => console.log("Cantidad agregada", quantity)} />
        </div>
        </div>
    </div>
    )
}

export default ItemDetail