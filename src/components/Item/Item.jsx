
import "./Item.css";


const Item = ({ product }) => {
  return (
    <div className="product-card">
      <a
        href={`/detail/${product.id}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={product.image} alt={product.name} className="product-image" />
      </a>

      <div className="card-content">
        <h3>{product.name}</h3>
        <span className="product-price">${product.price}</span>

        <a
          href={`/detail/${product.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="more-info-link"
        >
          Más información
        </a>
      </div>
    </div>
  );
};

export default Item;