import "./item.css";
import { Link } from "react-router-dom"; 

const Item = ({ product }) => {
  return (
    <div className="product-card">
      <Link to={`/detail/${product.id}`}>
        <img src={product.image} alt={product.name} className="product-image" />
      </Link>

      <div className="card-content">
        <h3>{product.name}</h3>
        <span className="product-price">${product.price}</span>

        <Link to={`/detail/${product.id}`} className="more-info-link">
          Más información
        </Link>
      </div>
    </div>
  );
};

export default Item;

